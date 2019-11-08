var colors = new Array(
  [62, 35, 255],
  [60, 255, 60],
  [255, 35, 98],
  [45, 175, 230],
  [255, 0, 255],
  [255, 128, 0]
);

var step = 0;
//color table indices for:
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0, 1, 2, 3];

//transition speed
var gradientSpeed = 0.002;

function updateGradient() {
  if ($ === undefined) return;

  var c0_0 = colors[colorIndices[0]];
  var c0_1 = colors[colorIndices[1]];
  var c1_0 = colors[colorIndices[2]];
  var c1_1 = colors[colorIndices[3]];

  var istep = 1 - step;
  var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
  var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
  var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
  var color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";

  var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
  var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
  var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
  var color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";

  $(".whatisgolo, .intro-splash-golo > span")
    .css({
      background: "-webkit-linear-gradient(to right, "+color1+", "+color2+")",
    })
    .css({
      background: "linear-gradient(to right, "+color1+", "+color2+")"
    });

  $(".path")
    .css({
      stroke: color1
    });

  step += gradientSpeed;
  if (step >= 1) {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];

    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] =
      (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) %
      colors.length;
    colorIndices[3] =
      (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) %
      colors.length;
  }
}
setInterval(updateGradient, 10);

var splashdowncolors = ["#5fd7ec", "#fbb56b", "#bad64e", "#fb7171", "#48d8b1"];
$(".intro-splash-down").css("background",splashdowncolors[Math.floor(Math.random()*splashdowncolors.length)]);

var fabrandomcolors = ["#fb7171", "#45c2c3", "#53b742", "#7a6bef", "#ec973c"];
$(".mobile-fab").css("background",fabrandomcolors[Math.floor(Math.random()*fabrandomcolors.length)]);

localStorage.removeItem("newChangelog-1");

//definitions
$(function() {
  var slickOpts = {
    useTransform: true,
    cssEase: 'none',
    infinite: false,
    adaptiveHeight:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          draggable: true,
          useTransform: false,
          cssEase: 'ease',
        }
      }
    ]
    };
  // Init the slick
  $('#tourppa').slick(slickOpts);
  var slickEnabled = true;
});

//Database
var idbSupported = false;
var db;

document.addEventListener("DOMContentLoaded", function(){
var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

  if("indexedDB" in window) {
      idbSupported = true;
  }

  if(idbSupported) {
      var openRequest = indexedDB.open("palettesDB",1);

      openRequest.onupgradeneeded = function(e) {
          console.log("Initializing Palettes Database...");
          var thisDB = e.target.result;

          if(!thisDB.objectStoreNames.contains("palettes")) {
              var objectStore = thisDB.createObjectStore("palettes", { autoIncrement: true });
              objectStore.createIndex("paletteURL","paletteURL", {unique:true});
          }

      }

      openRequest.onsuccess = function(e) {
          console.log("Palettes Database Is Ready!");
          db = e.target.result;

          //read records
          readpalattes();
      }

      openRequest.onerror = function(e) {
          console.log("Palettes Database Cannot Be Created!");
          console.dir(e);
      }
  }
  else {
    console.log("Your browser is too old for this sh*t!");
  }
 
},false);


//read all palettes from the database
function readpalattes() {
  var openRequest = indexedDB.open("palettesDB");

  openRequest.onsuccess = function(e) {
      console.log("Loading Palettes From Database...");
      db = e.target.result;

      $('.emptyambox').css('display', 'block');

      //read records
      var transaction = db.transaction('palettes', IDBTransaction.READ_ONLY);
      var objectStore = transaction.objectStore('palettes');

      objectStore.openCursor(null, 'prev').onsuccess = function(event) {
        var cursor = event.target.result;
        if (cursor) {

          $('.emptyambox').css('display', 'none');

          $("#ambianceboxcolors").append("<div class=\"boxpalatte\" id=\"box-palatte-"+cursor.key+"\"><div class=\"boxpalattetitle\"><span class=\"boxtitlelink\"><a href=\""+cursor.value.paletteURL+"\" class=\"boxpalattetitlelink\" title=\""+cursor.value.palettename+"\" target=\"_blank\">"+cursor.value.palettename+"</a></span><span title=\"Remove From Ambiance Box\"><i class=\"material-icons nosel\" id=\"removefrombox-"+cursor.key+"\" onclick=\"removepalatte("+cursor.key+");\">remove_circle</i></span></div><div class=\"boxpalattecontainer\"><div class=\"boxpalattecolor boxpalattecolor-1\" id=\"boxpalattecolor-1\" style=\"background: "+cursor.value.hex.hex1+"\"><div class=\"boxhexcopy nosel\"><i class=\"fa fa-clone amboxcopy\" aria-hidden=\"true\" title=\"Copy Hex\" onclick=\"amboxnotifytrigger('"+cursor.value.hex.hex1+"');\" data-clipboard-text=\""+cursor.value.hex.hex1+"\"></i></div><div class=\"boxcolorformats nosel\"><span class=\"boxrgbcopy amboxcopy\" title=\"Copy RGB\" onclick=\"amboxnotifytrigger('"+cursor.value.hex.hex1+"');\" data-clipboard-text=\""+colorcolor(cursor.value.hex.hex1, "rgb")+"\">RGB</span><span class=\"boxhslcopy amboxcopy\" title=\"Copy HSL\" onclick=\"amboxnotifytrigger('"+cursor.value.hex.hex1+"');\" data-clipboard-text=\""+colorcolor(cursor.value.hex.hex1, "hsl")+"\">HSL</span></div></div><div class=\"boxpalattecolor boxpalattecolor-2\" id=\"boxpalattecolor-2\" style=\"background: "+cursor.value.hex.hex2+"\"><div class=\"boxhexcopy nosel\"><i class=\"fa fa-clone amboxcopy\" aria-hidden=\"true\" title=\"Copy Hex\" onclick=\"amboxnotifytrigger('"+cursor.value.hex.hex2+"');\" data-clipboard-text=\""+cursor.value.hex.hex2+"\"></i></div><div class=\"boxcolorformats nosel\"><span class=\"boxrgbcopy amboxcopy\" title=\"Copy RGB\" onclick=\"amboxnotifytrigger('"+cursor.value.hex.hex2+"');\" data-clipboard-text=\""+colorcolor(cursor.value.hex.hex2, "rgb")+"\">RGB</span><span class=\"boxhslcopy amboxcopy\" title=\"Copy HSL\" onclick=\"amboxnotifytrigger('"+cursor.value.hex.hex2+"');\" data-clipboard-text=\""+colorcolor(cursor.value.hex.hex2, "hsl")+"\">HSL</span></div></div><div class=\"boxpalattecolor boxpalattecolor-3\" id=\"boxpalattecolor-3\" style=\"background: "+cursor.value.hex.hex3+"\"><div class=\"boxhexcopy nosel\"><i class=\"fa fa-clone amboxcopy\" aria-hidden=\"true\" title=\"Copy Hex\" onclick=\"amboxnotifytrigger('"+cursor.value.hex.hex3+"');\" data-clipboard-text=\""+cursor.value.hex.hex3+"\"></i></div><div class=\"boxcolorformats nosel\"><span class=\"boxrgbcopy amboxcopy\" title=\"Copy RGB\" onclick=\"amboxnotifytrigger('"+cursor.value.hex.hex3+"');\" data-clipboard-text=\""+colorcolor(cursor.value.hex.hex3, "rgb")+"\">RGB</span><span class=\"boxhslcopy amboxcopy\" title=\"Copy HSL\" onclick=\"amboxnotifytrigger('"+cursor.value.hex.hex3+"');\" data-clipboard-text=\""+colorcolor(cursor.value.hex.hex3, "hsl")+"\">HSL</span></div></div><div class=\"boxpalattecolor boxpalattecolor-4\" id=\"boxpalattecolor-4\" style=\"background: "+cursor.value.hex.hex4+"\"><div class=\"boxhexcopy nosel\"><i class=\"fa fa-clone amboxcopy\" aria-hidden=\"true\" title=\"Copy Hex\" onclick=\"amboxnotifytrigger('"+cursor.value.hex.hex4+"');\" data-clipboard-text=\""+cursor.value.hex.hex4+"\"></i></div><div class=\"boxcolorformats nosel\"><span class=\"boxrgbcopy amboxcopy\" title=\"Copy RGB\" onclick=\"amboxnotifytrigger('"+cursor.value.hex.hex4+"');\" data-clipboard-text=\""+colorcolor(cursor.value.hex.hex4, "rgb")+"\">RGB</span><span class=\"boxhslcopy amboxcopy\" title=\"Copy HSL\" onclick=\"amboxnotifytrigger('"+cursor.value.hex.hex4+"');\" data-clipboard-text=\""+colorcolor(cursor.value.hex.hex4, "hsl")+"\">HSL</span></div></div><div class=\"boxpalattecolor boxpalattecolor-5\" id=\"boxpalattecolor-5\" style=\"background: "+cursor.value.hex.hex5+"\"><div class=\"boxhexcopy nosel\"><i class=\"fa fa-clone amboxcopy\" aria-hidden=\"true\" title=\"Copy Hex\" onclick=\"amboxnotifytrigger('"+cursor.value.hex.hex5+"');\" data-clipboard-text=\""+cursor.value.hex.hex5+"\"></i></div><div class=\"boxcolorformats nosel\"><span class=\"boxrgbcopy amboxcopy\" title=\"Copy RGB\" onclick=\"amboxnotifytrigger('"+cursor.value.hex.hex5+"');\" data-clipboard-text=\""+colorcolor(cursor.value.hex.hex5, "rgb")+"\">RGB</span><span class=\"boxhslcopy amboxcopy\" title=\"Copy HSL\" onclick=\"amboxnotifytrigger('"+cursor.value.hex.hex5+"');\" data-clipboard-text=\""+colorcolor(cursor.value.hex.hex5, "hsl")+"\">HSL</span></div></div></div></div>");
            cursor.continue();
        } else {
            console.log("All Palettes Loaded.");
        }
      }//cursor

  }

  openRequest.onerror = function(e) {
      console.log("Palettes Database Cannot Be Created!");
      console.dir(e);
  }
}//readpalattes()


function removepalatte(getpalid) {
    var palid = getpalid;

    var request = db.transaction(["palettes"], "readwrite").objectStore("palettes").delete(palid);

    request.onsuccess = function(event) {
      console.log("Palette Removed From Database.");
      $("#ambianceboxcolors").children('.boxpalatte').remove();
      readpalattes();
    }

}

//clipboard
var clipboard = new Clipboard('.copy-trigger, .amboxcopy');

clipboard.on('error', function(e) {
  console.log(e);
});

//disable scrolls
var keys = {
  33: 1,
  34: 1,
  35: 1,
  36: 1,
  37: 1,
  38: 1,
  39: 1,
  40: 1
};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
    e.preventDefault();
  e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

function disableScroll() {
  if (window.addEventListener) // older FF
    window.addEventListener('mousewheel DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove = preventDefault; // mobile
  document.onkeydown = preventDefaultForScrollKeys;

  var scrollPosition = [
    self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
    self.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  ];

  $(window).bind('scroll', function() {
    lockscrollbar(scrollPosition[0], scrollPosition[1]);
  });

}

function disablekeyScroll() {
  document.onkeydown = preventDefaultForScrollKeys;
}

function enableScroll() {
  if (window.removeEventListener)
    window.removeEventListener('mousewheel DOMMouseScroll', preventDefault, false);
  window.onmousewheel = document.onmousewheel = null;
  window.onwheel = null;
  window.ontouchmove = null;
  document.onkeydown = null;

  unlockscrollbar();
}

function disablegrabscroll() {
  var scrollPosition = [
    self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
    self.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  ];

  $(window).bind('scroll', function() {
    lockscrollbar(scrollPosition[0], scrollPosition[1]);
  });
}

function enablegrabscroll() {
  unlockscrollbar();
}

function lockscrollbar(xposi, yposi) {
  window.scrollTo(xposi, yposi);
}

function unlockscrollbar() {
  $(window).unbind('scroll');
}


//open info window, info btn click
$('#aboutppa, #mobile-about').click(function() {
  $('.window-overlay').removeClass('hidethis');
  $('#app-info').removeClass('hidethis');
  disablekeyScroll();
  disablegrabscroll();
});


//open ambiance box window, logo btn click
$('.goloppa').click(function() {
  $('.window-overlay').removeClass('hidethis');
  $('#app-bucket').removeClass('hidethis');
  disablekeyScroll();
  disablegrabscroll();
});


//open share window, share btn click
$('#shareppa, #mobile-share').click(function() {
  $('.window-overlay').removeClass('hidethis');
  $('#app-share').removeClass('hidethis');
  disablekeyScroll();
  disablegrabscroll();
});

//open changelog window, changelogtrigger btn click
$('#changelogtrigger').click(function() {
  localStorage.setItem("newChangelog-2","1");
  $('#appinfowindow, #mobile-about').addClass('hiddennew');
  $('.window-overlay').removeClass('hidethis');
  $('#app-info').addClass('hidethis');
  $('#app-changelog').removeClass('hidethis');
  disablekeyScroll();
  disablegrabscroll();
});

$('#goback-changelog').click(function() {
  $('.window-overlay').removeClass('hidethis');
  $('#app-info').removeClass('hidethis');
  $('#app-changelog').addClass('hidethis');
  disablekeyScroll();
  disablegrabscroll();
});


//close windows
$('.close-window').click(function() {
  $('.window-overlay').addClass('hidethis');
  $('#app-info').addClass('hidethis');
  $('#app-bucket').addClass('hidethis');
  $('#app-share').addClass('hidethis');
  $('#app-changelog').addClass('hidethis');
  enableScroll();
  enablegrabscroll();
});

//refresh colors rotate
var rotation = 0;

jQuery.fn.rotate = function(degrees) {
  $(this).css({
    'transform': 'rotate(' + degrees + 'deg)'
  });
};


//refresh colors click
$("#refreshtrigger, #mobilerefreshfab").click(function() {
  load_data();

var contrastInterval = setInterval(contrast, 0);
var textcontrastInterval = setInterval(textcontrast, 0);
var boxcontrastInterval = setInterval(boxcontrast, 0);
var shadowgeneratorInterval = setInterval(shadowgenerator, 0);

$(document).ready(function(){
  setTimeout(function(){
    clearInterval(contrastInterval);
    clearInterval(textcontrastInterval);
    clearInterval(textcontrastInterval);
    clearInterval(shadowgeneratorInterval);
   }, 1000);
});

  rotation += 360;
  $('#refreshicon').rotate(rotation);
  $('#mobilerefreshicon').rotate(rotation);

  setTimeout(function() {
    $("#palatte-1").addClass("cardpump");
  }, 200);

  setTimeout(function() {
    $("#palatte-2").addClass("cardpump");
  }, 300);

  setTimeout(function() {
    $("#palatte-3").addClass("cardpump");
  }, 350);

  setTimeout(function() {
    $("#palatte-4").addClass("cardpump");
  }, 375);

  setTimeout(function() {
    $("#palatte-5").addClass("cardpump");
  }, 387);

  setTimeout(function() {
    $("#palatte-5").removeClass("cardpump");
  }, 587);

  setTimeout(function() {
    $("#palatte-4").removeClass("cardpump");
  }, 487);

  setTimeout(function() {
    $("#palatte-3").removeClass("cardpump");
  }, 437);

  setTimeout(function() {
    $("#palatte-2").removeClass("cardpump");
  }, 412);

  setTimeout(function() {
    $("#palatte-1").removeClass("cardpump");
  }, 400);
});


//load colors initially
load_data();

//colorlovers API JSON
function load_data() {

  var url1 = "http://www.colourlovers.com/api/palettes/random?format=json&jsonCallback=loadColorDone";

  $.ajax({
    type: 'GET',
    url: url1,
    jsonpCallback: "loadColorDone",
    contentType: "application/json",
    dataType: "jsonp",
    success: function(json) {
      loadColorDone(json[0]);
    },
    error: function(e) {
      console.log(e.message);
    }
  });

  function loadColorDone(data) {

    $.each(data.colors, function(index, value) {
      $(".palatte-color" + (index + 1)).css("background", "#" + value);
      $(".color-rgb" + (index + 1)).css("color", "#" + value);
      $(".color-hsl" + (index + 1)).css("color", "#" + value);
      $(".color-value" + (index + 1)).html("#" + value);

      var rgb = colorcolor("#" + value, "rgb");
      $(".color-rgb" + (index + 1)).html("" + rgb);
      var hsl = colorcolor("#" + value, "hsl");
      $(".color-hsl" + (index + 1)).html("" + hsl);

      $(".copydata" + (index + 1)).attr("data-clipboard-text", "#" + value);
    });

    $(".palatte-title").html("<a class=\"bright\" href='" + data.url + "' target='_blank' id=\"palatteName\" title=\"" + data.title + "\">" + data.title + "</a>");
    $(".palatte-byline").html("<a class=\"faded\" href='http://www.colourlovers.com/lover/" + data.userName + "/' target='_blank' id=\"palatteByLine\" title=\"" + data.userName + "\">by <span>" + data.userName + "</span></a>");

  }
}

var contrastInterval = setInterval(contrast, 0);
var textcontrastInterval = setInterval(textcontrast, 0);
var boxcontrastInterval = setInterval(boxcontrast, 0);
var shadowgeneratorInterval = setInterval(shadowgenerator, 0);

$(document).ready(function(){
  setTimeout(function(){
    clearInterval(contrastInterval);
    clearInterval(textcontrastInterval);
    clearInterval(textcontrastInterval);
    clearInterval(shadowgeneratorInterval);
   }, 1000);
});

//color contrasts
function contrast() {
  $('.palatte-color').each(function() {
    var color = $(this).css('backgroundColor');
    var regExp = /\(([^)]+)\)/;
    var matches = regExp.exec(color);
    var rgb = matches[1].split(',');
    var c = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
    var o = Math.round(((parseInt(rgb[0]) * 299) + (parseInt(rgb[1]) * 587) + (parseInt(rgb[2]) * 114)) / 1000);
    if (o > 125) {
      $(this).css('color', 'rgba(0,0,0,0.7)');
      $(this).find('.copy-trigger > i').css({
        'background': 'rgba(0,0,0,0.3)',
        'color': c
      });
    } else {
      $(this).css('color', 'rgba(255,255,255,0.9)');
      $(this).find('.copy-trigger > i').css({
        'background': 'rgba(255,255,255,0.4)',
        'color': c
      });
    }
  });
}

function textcontrast() {
  $('.color-title').each(function() {
    var textcolor = $(this).css('color');
    var regExp = /\(([^)]+)\)/;
    var matches = regExp.exec(textcolor);
    var rgb = matches[1].split(',');
    var c = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
    var o = Math.round(((parseInt(rgb[0]) * 299) + (parseInt(rgb[1]) * 587) + (parseInt(rgb[2]) * 114)) / 1000);

    if (o > 200) {
      $(this).css('color', 'rgba(0,0,0,0.4)');
    }
  });
}

//color contrasts
function boxcontrast() {
  $('.boxpalattecolor').each(function() {
    var color = $(this).css('backgroundColor');
    var regExp = /\(([^)]+)\)/;
    var matches = regExp.exec(color);
    var rgb = matches[1].split(',');
    var c = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
    var o = Math.round(((parseInt(rgb[0]) * 299) + (parseInt(rgb[1]) * 587) + (parseInt(rgb[2]) * 114)) / 1000);
    if (o > 125) {
      $(this).find('.boxrgbcopy, .boxhslcopy').css({
        'background': 'rgba(0,0,0,1)',
        'color': c
      });
      $(this).find('.boxhexcopy > i').css({
        'background': 'rgba(0,0,0,0.3)',
        'color': c
      });
    } else {
      $(this).find('.boxrgbcopy, .boxhslcopy').css({
        'background': 'rgba(255,255,255,1)',
        'color': c
      });
      $(this).find('.boxhexcopy > i').css({
        'background': 'rgba(255,255,255,0.4)',
        'color': c
      });
    }
  });
}

function shadowgenerator() {
  $('.palatte').each(function() {
    var textcolor = $(this).find('.color-title').css('color');
    var regExp = /\(([^)]+)\)/;
    var matches = regExp.exec(textcolor);
    var rgb = matches[1].split(',');
    var c = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
    var o = Math.round(((parseInt(rgb[0]) * 299) + (parseInt(rgb[1]) * 587) + (parseInt(rgb[2]) * 114)) / 1000);

    $(this).css('box-shadow','0px 16px 60px -15px rgba(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ',0.5)');

    if (o > 125) {
      $(this).css('box-shadow','0px 16px 60px -15px rgba(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ',1)');
    }else if(rgb[0] == 0 && rgb[1] == 0 && rgb[2] == 0) {
      $(this).css('box-shadow','0px 16px 60px -15px rgba(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ',0.22)');
    }else {
      $(this).css('box-shadow','0px 16px 60px -15px rgba(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ',0.5)');
    }

  });
}

//notification clicks
var activeanimation = false;
$('.copy-trigger, #save-palatte, #mobile-save-palette').click(function() {

  if (activeanimation) {
    return;
  }

  if ($(this).attr('whatisthis') == 'copycolor') {
    var copytextcolor = $(this).attr('data-clipboard-text');
    activeanimation = true;

    setTimeout(function(){
     }, 2800);

    $('#notify-copied').html('<i class="fa fa-clone"></i> <span>Noice! Copied To Clipboard.</span>');

    $('#notify-copied').css('background', copytextcolor);

    setTimeout(function() {
      $('#notify-copied').addClass("pull-notifcation notify-anim-active").delay(2000).queue(function() {

        $('#notify-copied').removeClass("pull-notifcation notify-anim-active").dequeue();

        setTimeout(function() {
          $('#notify-copied').removeClass('active-notification');
        }, 250);

        activeanimation = false;

      });
    }, 50);

    setTimeout(function() {
      $('meta[name=theme-color]').remove();
      $('head').append('<meta name="theme-color" content="'+copytextcolor+'">');
    }, 50);

    setTimeout(function() {
      $('meta[name=theme-color]').remove();
      $('head').append('<meta name="theme-color" content="#e3e3e3">');
    }, 2200);

    setTimeout(function() {
      $('#notify-copied').addClass('active-notification');
    }, 0);

    setTimeout(function() {
      $('#notify-copied > i').addClass("notify-anim-adjustments-active").delay(2000).queue(function() {
        $('#notify-copied > i').removeClass("notify-anim-adjustments-active").dequeue();
        activeanimation = false;
      });
    }, 50);

    $('#notify-copied').each(function() {
      var color = $(this).css('backgroundColor');
      var regExp = /\(([^)]+)\)/;
      var matches = regExp.exec(color);
      var rgb = matches[1].split(',');
      var c = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
      var o = Math.round(((parseInt(rgb[0]) * 299) + (parseInt(rgb[1]) * 587) + (parseInt(rgb[2]) * 114)) / 1000);
      if (o > 125) {
        $(this).css('color', 'rgba(0,0,0,0.5)');
      } else {
        $(this).css('color', 'rgba(255,255,255,0.95)');
      }
    });
  } //copycolorelement



  if ($(this).attr('whatisthis') == 'savepalatte') {
    //saved notification
    activeanimation = true;

    //add Palette to DB
    var palettename = $("#palatteName").text();
    var paletteURL = $("#palatteName").attr("href");
    var hex1 = $(".color-value1").text();
    var hex2 = $(".color-value2").text();
    var hex3 = $(".color-value3").text();
    var hex4 = $(".color-value4").text();
    var hex5 = $(".color-value5").text();
 
    //Connect DB
    var transaction = db.transaction(["palettes"],"readwrite");
    var store = transaction.objectStore("palettes");
 
    //Define the Palette
    var paletteData = {
        palettename: palettename,
        hex: { hex1: hex1, hex2: hex2, hex3: hex3, hex4: hex4, hex5: hex5 },
        paletteURL: paletteURL
    }
 
    //Perform the add
    var request = store.add(paletteData);
 
    //Error Adding Palette
    request.onerror = function(e) {
        console.log("This is a really nice",e.target.error.name);

        if (e.target.error.name == "ConstraintError") {
          $('#notify-copied').html('<i class="material-icons">error</i> <span>Palette Already In The Box.</span>');

          $('#notify-copied').css({
            'background': '#e83149',
            'color': '#ffffff'
          });

          setTimeout(function() {
            $('meta[name=theme-color]').remove();
            $('head').append('<meta name="theme-color" content="#e83149">');
          }, 50);

          setTimeout(function() {
            $('meta[name=theme-color]').remove();
            $('head').append('<meta name="theme-color" content="#e3e3e3">');
          }, 2200);

        }

    }
 
    //Palette Added Successfully
    request.onsuccess = function(e) {
        $('#notify-copied').html('<i class="material-icons">inbox</i> <span>Saved To Ambiance Box.</span>');

        $('#notify-copied').css({
          'background': '#0ec198',
          'color': '#ffffff'
        });

        setTimeout(function() {
          $('meta[name=theme-color]').remove();
          $('head').append('<meta name="theme-color" content="#0ec198">');
        }, 50);

        setTimeout(function() {
          $('meta[name=theme-color]').remove();
          $('head').append('<meta name="theme-color" content="#e3e3e3">');
        }, 2200);

        $("#ambianceboxcolors").children('.boxpalatte').remove();
        readpalattes();
        
    }

    //Activate  Notification Animation
    setTimeout(function() {
      $('#notify-copied').addClass("pull-notifcation notify-anim-active").delay(2000).queue(function() {
        $('#notify-copied').removeClass("pull-notifcation notify-anim-active").dequeue();
        setTimeout(function() {
          $('#notify-copied').removeClass('active-notification');
        }, 250);
        activeanimation = false;

      });
    }, 50);

    setTimeout(function() {
      $('#notify-copied').addClass('active-notification');
    }, 0);

    setTimeout(function() {
      $('#notify-copied > i').addClass("notify-anim-adjustments-active").delay(2000).queue(function() {
        $('#notify-copied > i').removeClass("notify-anim-adjustments-active").dequeue();
        activeanimation = false;
      });
    }, 50);

  } //savepalatteelement

});//copy save click

disablekeyScroll();
disablegrabscroll();

var firstTime = localStorage.getItem("newUser");
var tourdone = localStorage.getItem("setTour");
var changelogchecknotify = localStorage.getItem("newChangelog-2");

if(firstTime) {
  $(".intro-splash-wrapper").remove();
  $(".ppashell").removeClass("hidethis");

  if (tourdone) {
    $('.tour-overlay').remove();
    enableScroll();
    enablegrabscroll();
  }
  else {
    $('.tour-overlay').removeClass('ghostthis');
  }
}

if(changelogchecknotify) {
  $('#appinfowindow, #mobile-about').addClass('hiddennew');
}

$('#yeahsure, #nothanks').click(function(){

    localStorage.setItem("newUser","1");
    var enableTour = $(this).attr("enableT");

    $(".loader").removeClass("hidethis");

    setTimeout(function(){
       $(".loader").fadeOut();
   }, 2000);

    setTimeout(function(){
       $(".ppashell").removeClass("hidethis");
   }, 100);

    setTimeout(function(){
       $(".intro-splash-up").addClass("splash-up-pull");
   }, 2500);

    setTimeout(function(){
       $(".intro-splash-down").addClass("splash-down-pull");
   }, 2800);

    setTimeout(function(){
       $(".intro-splash-wrapper").remove();
   }, 3600);

    if(enableTour == "yes") {
      setTimeout(function(){
          $('.tour-overlay').removeClass('ghostthis');
       }, 100);

      setTimeout(function(){
        $('meta[name=theme-color]').remove();
        $('head').append('<meta name="theme-color" content="#2e2e2e">');
       }, 2800);
    }

    if(enableTour == "no") {
      localStorage.setItem("setTour","1");
      $('.tour-overlay').remove();

      setTimeout(function(){
        enableScroll();
        enablegrabscroll();
     }, 3000);
    }

});

function tourbtnwidthfix() {
  if( $('#tour-ctrl-btn').css('position') == "fixed" )  { 
    var panelwidth = $('.tour-panel').width();
    $('#tour-ctrl-btn').css('width',panelwidth+"px");
  }
  else {
    $('#tour-ctrl-btn').css('width','auto');
  }
}
setInterval(tourbtnwidthfix, 0);

$('#the-tour-btn').click(function(){
  localStorage.setItem("setTour","1");
  $('.tour-overlay').remove();
  $('meta[name=theme-color]').remove();
  $('head').append('<meta name="theme-color" content="#e3e3e3">');
  enableScroll();
  enablegrabscroll();
});

$('#mobilemoretrigger').click(function(){
  $('.mobile-norefresh-menu-wrapper').toggleClass('mobile-extended-menu-pull');
  $('#mobilehorizicon').toggleClass('hidethis');
  $('#mobilecloseicon').toggleClass('hidethis');
});

//box notification
function amboxnotifytrigger(getcolorvalue) { 

  $('.amboxcopynotify').css('background',getcolorvalue);

  var color = $('.amboxcopynotify').css('backgroundColor');
  var regExp = /\(([^)]+)\)/;
  var matches = regExp.exec(color);
  var rgb = matches[1].split(',');
  var c = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
  var o = Math.round(((parseInt(rgb[0]) * 299) + (parseInt(rgb[1]) * 587) + (parseInt(rgb[2]) * 114)) / 1000);
  if (o > 125) {
    $('.amboxcopynotify').css('color', 'rgba(0,0,0,0.6)');
  } else {
    $('.amboxcopynotify').css('color', 'rgba(255,255,255,0.95)');
  }

  $('.amboxcopynotify').show().delay(800).fadeOut();

}