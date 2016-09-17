//     BGP.js 0.0.1

//     (c) 2016 Spence Kiddle
//     BGP may be freely distributed under the MIT license.

(function(factory) {

  // Establish the root object, `window` (`self`) in the browser, or `global` on the server.
  // We use `self` instead of `window` for `WebWorker` support.
  var root = (typeof self == 'object' && self.self === self && self) ||
            (typeof global == 'object' && global.global === global && global);

  // Set up BGP appropriately for the environment. Start with AMD.
  if (typeof define === 'function' && define.amd) {
    define(['underscore', 'jquery', 'exports'], function(_, $, exports) {
      // Export global even in AMD case in case this script is loaded with
      // others that may still expect a global BGP.
      root.BGP = factory(root, exports, _, $);
    });

  // Next for Node.js or CommonJS. jQuery may not be needed as a module.
  } else if (typeof exports !== 'undefined') {
    var _ = require('underscore'), $;
    try { $ = require('jquery'); } catch (e) {}
    factory(root, exports, _, $);

  // Finally, as a browser global.
  } else {
    root.BGP = factory(root, {}, root._, (root.jQuery || root.Zepto || root.ender || root.$));
  }

})(function(root, BGP, _, $) {

  // Initial Setup
  // -------------

  // Current version of the library. Keep in sync with `package.json`.
  BGP.VERSION = '0.0.1';

  // For BGP's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns
  // the `$` variable.
  BGP.$ = $;

  // BGP.Board
  // --------------

  BGP.Board = Backbone.Model.extend({
    defaults: {
      name: 'new board',
      shape: 'square',
      places: 9
    }
  });

  BGP.Piece = Backbone.Model.extend({
    defaults: {
      name: 'new piece',
      color: 'black',
      movement: 1
    }
  });

  return BGP;
});