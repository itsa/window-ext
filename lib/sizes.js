"use strict";

require('js-ext/lib/object.js');

module.exports = function (window) {

    window._ITSAmodules || Object.protectedProp(window, '_ITSAmodules', {});

    if (window._ITSAmodules.WindowSizes) {
        return; // WindowSizes was already created
    }

    window._ITSAmodules.WindowSizes = true;

    var getScrollOffsets = function() {
        var doc = window.document;
        // this works for all browsers in non quircks-mode and only for IE9+:
        if (window.pageXOffset!==undefined) { // do not "just" check for `window.pageXOffset` --> it could be `0`
            return {
                x: window.pageXOffset,
                y: window.pageYOffset
            };
        }
        // for IE (or any other browser) in standards mode
        if (doc.compatMode === 'CSS1Compat') {
            return {
                x: doc.documentElement.scrollLeft,
                y: doc.documentElement.scrollTop
            };
        }
        // for browsers in quircks mode:
        return {
            x: doc.body.scrollLeft,
            y: doc.body.scrollTop
        };
    },

    getViewportSize = function() {
        var doc = window.document;
        // this works for all browsers in non quircks-mode and only for IE9+:
        if (window.innerWidth!==undefined) { // do not "just" check for `window.innerWidth` --> it could be `0`
            return {
                w: window.innerWidth,
                h: window.innerHeight
            };
        }
        // for IE (or any other browser) in standards mode
        if (doc.compatMode === 'CSS1Compat') {
            return {
                w: doc.documentElement.clientWidth,
                h: doc.documentElement.clientHeight
            };
        }
        // for browsers in quircks mode:
        return {
            w: doc.body.clientWidth,
            h: doc.body.clientHeight
        };
    };

    /**
     * Gets the left-scroll offset of the window.
     *
     * @method getScrollLeft
     * @return {Number} left-offset in pixels
     * @since 0.0.1
    */
    window.getScrollLeft = function() {
        return getScrollOffsets().x;
    };
    /**
     * Gets the top-scroll offset of the window.
     *
     * @method getScrollTop
     * @return {Number} top-offset in pixels
     * @since 0.0.1
    */
    window.getScrollTop = function() {
        return getScrollOffsets().y;
    };
   /**
    * Gets the width of the window.
    *
    * @method getWidth
    * @return {Number} width in pixels
    * @since 0.0.1
    */
    window.getWidth = function() {
        return getViewportSize().w;
    };
   /**
    * Gets the height of the window.
    *
    * @method getHeight
    * @return {Number} width in pixels
    * @since 0.0.1
    */
    window.getHeight = function() {
        return getViewportSize().h;
    };

};