// first thing to check: checkCookies
var mobileCookie;

// REMOVED INSTRUCT POPUP
// var instructCookie;

// if (checkInstruct = true) {
//   $('#instructHide').css('display', 'none');
// }

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1);
    if(c.indexOf(name) == 0)
      return c.substring(name.length,c.length);
  }
  return "";
}

function getCookies() {
    mobileCookie = getCookie("hideMobile");

    // REMOVED INSTRUCT POPUP
    // instructCookie = getCookie("hideInstruct");
    // console.log(instructCookie);
}

getCookies();

var checkCheckbox = function checkCheckbox() {
  if (document.getElementById("mobileCookie").checked == true){
    document.cookie = "hideMobile=true";
    return true;
  }
}

// REMOVED INSTRUCT POPUP
// var checkInstruct = function checkInstruct() {
//   if (document.getElementById("instructCookie").checked == true){
//     document.cookie = "hideInstruct=true";
//     return true;
//   }
// }
