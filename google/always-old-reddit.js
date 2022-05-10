// ==UserScript==
// @name         Always use old.reddit.com
// @namespace    google
// @version      0.0.1
// @description  Replace the reddit.com URL with old.reddit.com
// @author       plbonneville
// @match        https://*.google.com/search?*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    
    var elements = document.querySelectorAll("[href^='https://www.reddit.com']");
    
    const regex = /https:\/\/www\.reddit\.com/;
    
    elements.forEach(x => x.href = x.href.replace(regex, "https://old.reddit.com"));
})();
