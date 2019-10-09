"use strict";

/**
 * If loaded in private browsing mode, inject content.ts
 * script into page script context.
 */
if (browser.extension.inIncognitoContext) {
    const req = new XMLHttpRequest();
    req.open("GET", browser.runtime.getURL("content.js"), false);
    req.send();

    if (req.status === 200) {
        const scriptElement = document.createElement("script");
        scriptElement.textContent = req.responseText;

        (document.head || document.documentElement).append(scriptElement);
    }
}
