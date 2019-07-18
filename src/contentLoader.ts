"use strict";

/**
 * If loaded in private browsing mode, inject content.ts
 * script into page script context.
 */
if (browser.extension.inIncognitoContext) {
    const scriptElement = document.createElement("script");
    scriptElement.src = browser.runtime.getURL("content.js");

    (document.head || document.documentElement).append(scriptElement);
}
