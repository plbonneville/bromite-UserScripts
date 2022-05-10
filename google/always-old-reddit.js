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
    
    const rewriteRedditUrls = function() {
        const regex = /https:\/\/www\.reddit\.com/;
        
        const elements = document.querySelectorAll("[href^='https://www.reddit.com']");
        elements.forEach(x => x.href = x.href.replace(regex, "https://old.reddit.com"));
    }    
    
    const checkElementThenRun = function (selector, func) {
        var el = document.querySelector(selector);
        if ( el == null ) {
            if (window.requestAnimationFrame != undefined) {
                window.requestAnimationFrame(function(){ checkElementThenRun(selector, func)});
            } else {
                document.addEventListener('readystatechange', function(e) {
                    if (document.readyState == 'complete') {
                        func();
                    }
                });
            }
        } else {
            func();
        }
    };
    
    checkElementThenRun('body', rewriteRedditUrls);
    
})();
