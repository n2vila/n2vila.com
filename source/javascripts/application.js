//= require_tree .

(function () {
  var emails = document.getElementsByClassName("email");
  var address = "website";
  var url = "aj-foster.com";

  for (var i = 0; i < emails.length; i++) {
    if (emails[i].addEventListener) {
      emails[i].addEventListener('click', function() {
        this.href = "mailto:" + address + "@" + url;
      }, false);
    }
    else if (emails[i].attachEvent) {
      emails[i].attachEvent('onclick', function() {
        this.href = "mailto:" + address + "@" + url;
      });
    }
  }
})();