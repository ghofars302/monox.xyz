// ==UserScript==
// @name     Davinsurance Adskip
// @version  1
// @grant    none
// @author	 monox
// @homepageURL https://monox.xyz/devinsurance.html
// @description Skip iklan gan
// @include https://davinsurance.com/*
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js
// ==/UserScript==

if (!$.redirectPost) { // Polyfill
    $.extend({
        redirectPost: function(location, args) {
            var form = $("<form></form>");
            form.attr("method", "post");
            form.attr("action", location);

            $.each(args, function(key, value) {
                var field = $('<input></input>');

                field.attr("type", "hidden");
                field.attr("name", key);
                field.attr("value", value);

                form.append(field);
            });

            $(form).appendTo('body').submit();
        }
    })
}

var url = $('form[method="post"]')[0] && $('form[method="post"]')[0].action || null;
var token = $('input[type="hidden"]')[0] && $('input[type="hidden"]')[0].value || null;

if (url && token) {
    $.redirectPost(url, { get: token });
} else {
    var evaledCode = $('script[type="text/javascript"]')['3'].text.replace("changeLink", "c").replace('window.open(a,"_blank")', "location.href = a") // Redirect thing
    eval(evaledCode);
    c();
}
