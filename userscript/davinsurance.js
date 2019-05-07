// ==UserScript==
// @name     Davinsurance Adskip
// @version  1
// @grant    none
// @author	 monox
// @homepageURL  https://monox.xyz/davinsurance.html
// @description Skip iklan gan
// @include https://davinsurance.com/*
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js
// ==/UserScript==

$.extend({
  redirectPost: function(location, args) {
   	var form = '';
    $.each(args, function(key, value) {
     form += '<input type="hidden" name="'+key+'" value="'+value+'">';
    });
    $('<form action="'+location+'" method="POST">'+form+'</form>').appendTo('body').submit();
  }
});

var url = $('form[method="post"]')[0] && $('form[method="post"]')[0].action || null
var token = $('input[type="hidden"]')[0] && $('input[type="hidden"]')[0].value || null

if (url && token) {
	$.redirectPost(url, { get: token })
} else {
	eval($('script[type="text/javascript"]')['3'].text)
	changeLink()
	window.close()
}
