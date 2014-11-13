"use strict";

module.exports = function (window) {
    var getScrollOffsets = function() {
        var doc = window.document;
        // this works for all browsers in non quircks-mode and only for IE9+:
        if (window.pageXOffset) {
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
        if (window.innerWidth) {
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

    // `window` has no prototype
    Object.defineProperties(window, {

       /**
        * Gets the height of the window in pixels.
        *
        * Values are numbers without unity.
        *
        * @property height
        * @type {Number}
        * @since 0.0.1
        */
        height: {
            get: function() {
                return getViewportSize().h;
            }
        },

       /**
        * Gets the left-scroll offset of the window in pixels.
        *
        * Values are numbers without unity.
        *
        * @property scrollLeft
        * @type {Number}
        * @since 0.0.1
        */
        scrollLeft: {
            get: function() {
                return getScrollOffsets().x;
            }
        },

       /**
        * Gets the top-scroll offset of the window in pixels.
        *
        * Values are numbers without unity.
        *
        * @property scrollTop
        * @type {Number}
        * @since 0.0.1
        */
        scrollTop: {
            get: function() {
                return getScrollOffsets().y;
            }
        },

       /**
        * Gets the width of the window in pixels.
        *
        * Values are numbers without unity.
        *
        * @property width
        * @type {Number}
        * @since 0.0.1
        */
        width: {
            get: function() {
                return getViewportSize().w;
            }
        }

    });

};