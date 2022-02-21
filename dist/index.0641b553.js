// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"6IXwR":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "fe4256060641b553";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"bNKaB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _resultsPage = require("./components/results-page");
var _resultsPageDefault = parcelHelpers.interopDefault(_resultsPage);
var _searchInsights = require("search-insights");
var _searchInsightsDefault = parcelHelpers.interopDefault(_searchInsights);
// Create insights middleware
var _middlewares = require("instantsearch.js/es/middlewares");
class SpencerAndWilliamsSearch {
    constructor(){
        this._initSearch();
    }
    _initSearch() {
        this.resultPage = new _resultsPageDefault.default();
    }
}
const app = new SpencerAndWilliamsSearch();
const insightsMiddleware = _middlewares.createInsightsMiddleware({
    insightsClient: _searchInsightsDefault.default
});
// Connect InstantSearch with insights middleware
const search = instantsearch({
    searchClient,
    indexName: 'test_swproducts'
});
search.use(insightsMiddleware);
// Set usertoken
_searchInsightsDefault.default('setUserToken', 'user-token-1');
_searchInsightsDefault.default('viewedObjectIDs', {
    userToken: "user-1",
    index: 'test_swproducts',
    eventName: 'Target object viewed',
    objectIDs: [
        '9990181',
        '9999119',
        '9990127',
        '9986149',
        '9958096',
        '9783171'
    ]
});
// Send click and conversion events via hits widget
search.addWidget(instantsearch.widgets.hits({
    container: '#hits',
    templates: {
        item (hit, bindEvent) {
            return `
        <a class="result-hit">
          <div class="result-hit__image-container">
            <img class="result-hit__image" src="${hit.image}" />
          </div>
          <div class="result-hit__details">
            <h3 class="result-hit__name">${hit._highlightResult.name.value}</h3>
            <p class="result-hit__price">$${hit.price}</p>
          </div>
          <div class="result-hit__controls">
            <button id="view-item" class="result-hit__view" data-algolia-objectid="${hit.objectID}" ${bindEvent('click', hit, 'Product viewed')}>View</button>
            <button id="add-to-cart" class="result-hit__cart" data-algolia-objectid="${hit.objectID}" ${bindEvent('conversion', hit, 'Product added to cart')}>Add To Cart</button>
          </div>
        </a>
        `;
        }
    }
}));

},{"./components/results-page":"kUdrg","search-insights":"dxSBH","instantsearch.js/es/middlewares":"4GGlC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kUdrg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _algoliasearch = require("algoliasearch");
var _algoliasearchDefault = parcelHelpers.interopDefault(_algoliasearch);
var _instantsearchJs = require("instantsearch.js");
var _instantsearchJsDefault = parcelHelpers.interopDefault(_instantsearchJs);
var _widgets = require("instantsearch.js/es/widgets");
var _resultHit = require("../templates/result-hit");
var _resultHitDefault = parcelHelpers.interopDefault(_resultHit);
/**
 * @class ResultsPage
 * @description Instant Search class to display content on main page
 */ class ResultPage {
    constructor(){
        this._registerClient();
        this._registerWidgets();
        this._startSearch();
    }
    /**
   * @private
   * Handles creating the search client and creating an instance of instant search
   * @return {void}
   */ _registerClient() {
        this._searchClient = _algoliasearchDefault.default("8IJPOOUOH3", "5aed046d452f6db96183e9ccce95f039");
        this._searchInstance = _instantsearchJsDefault.default({
            indexName: "test_swproducts",
            searchClient: this._searchClient
        });
    }
    /**
   * @private
   * Adds widgets to the Algolia instant search instance
   * @return {void}
   */ _registerWidgets() {
        this._searchInstance.addWidgets([
            _widgets.searchBox({
                container: '#searchbox',
                placeholder: 'Search for a product . . .'
            }),
            _widgets.hits({
                container: '#hits',
                templates: {
                    item: _resultHitDefault.default
                }
            }),
            _widgets.pagination({
                container: '#pagination'
            }),
            _widgets.refinementList({
                container: '#brand-facet',
                attribute: 'brand'
            }),
            _widgets.refinementList({
                container: '#categories-facet',
                attribute: 'categories'
            }), 
        ]);
    }
    /**
   * @private
   * Starts instant search after widgets are registered
   * @return {void}
   */ _startSearch() {
        this._searchInstance.start();
    }
}
exports.default = ResultPage;

},{"algoliasearch":"jU9w3","instantsearch.js":"5B89y","instantsearch.js/es/widgets":"bk5Jd","../templates/result-hit":"d7jLd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jU9w3":[function(require,module,exports) {
/*! algoliasearch.umd.js | 4.12.1 | © Algolia, inc. | https://github.com/algolia/algoliasearch-client-javascript */ !function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).algoliasearch = e();
}(this, function() {
    "use strict";
    function t1(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r, t;
    }
    function e1(t, e2) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e2 && (n = n.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })), r.push.apply(r, n);
        }
        return r;
    }
    function r1(r) {
        for(var n = 1; n < arguments.length; n++){
            var a = null != arguments[n] ? arguments[n] : {
            };
            n % 2 ? e1(Object(a), !0).forEach(function(e) {
                t1(r, e, a[e]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : e1(Object(a)).forEach(function(t) {
                Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(a, t));
            });
        }
        return r;
    }
    function n1(t2, e3) {
        if (null == t2) return {
        };
        var r2, n2, a2 = function(t, e) {
            if (null == t) return {
            };
            var r, n, a = {
            }, o = Object.keys(t);
            for(n = 0; n < o.length; n++)r = o[n], e.indexOf(r) >= 0 || (a[r] = t[r]);
            return a;
        }(t2, e3);
        if (Object.getOwnPropertySymbols) {
            var o2 = Object.getOwnPropertySymbols(t2);
            for(n2 = 0; n2 < o2.length; n2++)r2 = o2[n2], e3.indexOf(r2) >= 0 || Object.prototype.propertyIsEnumerable.call(t2, r2) && (a2[r2] = t2[r2]);
        }
        return a2;
    }
    function a1(t3, e4) {
        return (function(t) {
            if (Array.isArray(t)) return t;
        })(t3) || (function(t, e) {
            if (!(Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t))) return;
            var r = [], n = !0, a = !1, o = void 0;
            try {
                for(var i, u = t[Symbol.iterator](); !(n = (i = u.next()).done) && (r.push(i.value), !e || r.length !== e); n = !0);
            } catch (t4) {
                a = !0, o = t4;
            } finally{
                try {
                    n || null == u.return || u.return();
                } finally{
                    if (a) throw o;
                }
            }
            return r;
        })(t3, e4) || (function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        })();
    }
    function o1(t5) {
        return (function(t) {
            if (Array.isArray(t)) {
                for(var e = 0, r = new Array(t.length); e < t.length; e++)r[e] = t[e];
                return r;
            }
        })(t5) || (function(t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
        })(t5) || (function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance");
        })();
    }
    function i1(t6) {
        var e5, r3 = "algoliasearch-client-js-".concat(t6.key), n3 = function() {
            return void 0 === e5 && (e5 = t6.localStorage || window.localStorage), e5;
        }, o3 = function() {
            return JSON.parse(n3().getItem(r3) || "{}");
        };
        return {
            get: function(t7, e6) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                    miss: function() {
                        return Promise.resolve();
                    }
                };
                return Promise.resolve().then(function() {
                    var r = JSON.stringify(t7), n = o3()[r];
                    return Promise.all([
                        n || e6(),
                        void 0 !== n
                    ]);
                }).then(function(t) {
                    var e = a1(t, 2), n = e[0], o = e[1];
                    return Promise.all([
                        n,
                        o || r.miss(n)
                    ]);
                }).then(function(t) {
                    return a1(t, 1)[0];
                });
            },
            set: function(t, e) {
                return Promise.resolve().then(function() {
                    var a = o3();
                    return a[JSON.stringify(t)] = e, n3().setItem(r3, JSON.stringify(a)), e;
                });
            },
            delete: function(t) {
                return Promise.resolve().then(function() {
                    var e = o3();
                    delete e[JSON.stringify(t)], n3().setItem(r3, JSON.stringify(e));
                });
            },
            clear: function() {
                return Promise.resolve().then(function() {
                    n3().removeItem(r3);
                });
            }
        };
    }
    function u1(t8) {
        var e7 = o1(t8.caches), r4 = e7.shift();
        return void 0 === r4 ? {
            get: function(t9, e) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                    miss: function() {
                        return Promise.resolve();
                    }
                }, n = e();
                return n.then(function(t) {
                    return Promise.all([
                        t,
                        r.miss(t)
                    ]);
                }).then(function(t) {
                    return a1(t, 1)[0];
                });
            },
            set: function(t, e) {
                return Promise.resolve(e);
            },
            delete: function(t) {
                return Promise.resolve();
            },
            clear: function() {
                return Promise.resolve();
            }
        } : {
            get: function(t, n) {
                var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                    miss: function() {
                        return Promise.resolve();
                    }
                };
                return r4.get(t, n, a).catch(function() {
                    return u1({
                        caches: e7
                    }).get(t, n, a);
                });
            },
            set: function(t, n) {
                return r4.set(t, n).catch(function() {
                    return u1({
                        caches: e7
                    }).set(t, n);
                });
            },
            delete: function(t) {
                return r4.delete(t).catch(function() {
                    return u1({
                        caches: e7
                    }).delete(t);
                });
            },
            clear: function() {
                return r4.clear().catch(function() {
                    return u1({
                        caches: e7
                    }).clear();
                });
            }
        };
    }
    function s1() {
        var t10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            serializable: !0
        }, e = {
        };
        return {
            get: function(r, n) {
                var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                    miss: function() {
                        return Promise.resolve();
                    }
                }, o = JSON.stringify(r);
                if (o in e) return Promise.resolve(t10.serializable ? JSON.parse(e[o]) : e[o]);
                var i = n(), u = a && a.miss || function() {
                    return Promise.resolve();
                };
                return i.then(function(t) {
                    return u(t);
                }).then(function() {
                    return i;
                });
            },
            set: function(r, n) {
                return e[JSON.stringify(r)] = t10.serializable ? JSON.stringify(n) : n, Promise.resolve(n);
            },
            delete: function(t) {
                return delete e[JSON.stringify(t)], Promise.resolve();
            },
            clear: function() {
                return e = {
                }, Promise.resolve();
            }
        };
    }
    function c1(t, e, r) {
        var n = {
            "x-algolia-api-key": r,
            "x-algolia-application-id": e
        };
        return {
            headers: function() {
                return t === m1.WithinHeaders ? n : {
                };
            },
            queryParameters: function() {
                return t === m1.WithinQueryParameters ? n : {
                };
            }
        };
    }
    function f1(t) {
        var e = 0;
        return t(function r() {
            return e++, new Promise(function(n) {
                setTimeout(function() {
                    n(t(r));
                }, Math.min(100 * e, 1000));
            });
        });
    }
    function d1(t11) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(t, e) {
            return Promise.resolve();
        };
        return Object.assign(t11, {
            wait: function(r) {
                return d1(t11.then(function(t) {
                    return Promise.all([
                        e(t, r),
                        t
                    ]);
                }).then(function(t) {
                    return t[1];
                }));
            }
        });
    }
    function l1(t) {
        for(var e = t.length - 1; e > 0; e--){
            var r = Math.floor(Math.random() * (e + 1)), n = t[e];
            t[e] = t[r], t[r] = n;
        }
        return t;
    }
    function p1(t, e) {
        return e ? (Object.keys(e).forEach(function(r) {
            t[r] = e[r](t);
        }), t) : t;
    }
    function h1(t) {
        for(var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)r[n - 1] = arguments[n];
        var a = 0;
        return t.replace(/%s/g, function() {
            return encodeURIComponent(r[a++]);
        });
    }
    var m1 = {
        WithinQueryParameters: 0,
        WithinHeaders: 1
    };
    function y1(t12, e) {
        var r = t12 || {
        }, n = r.data || {
        };
        return Object.keys(r).forEach(function(t) {
            -1 === [
                "timeout",
                "headers",
                "queryParameters",
                "data",
                "cacheable"
            ].indexOf(t) && (n[t] = r[t]);
        }), {
            data: Object.entries(n).length > 0 ? n : void 0,
            timeout: r.timeout || e,
            headers: r.headers || {
            },
            queryParameters: r.queryParameters || {
            },
            cacheable: r.cacheable
        };
    }
    var g1 = {
        Read: 1,
        Write: 2,
        Any: 3
    }, v1 = 1, b1 = 2, P = 3;
    function w(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v1;
        return r1(r1({
        }, t), {
        }, {
            status: e,
            lastUpdate: Date.now()
        });
    }
    function O(t) {
        return "string" == typeof t ? {
            protocol: "https",
            url: t,
            accept: g1.Any
        } : {
            protocol: t.protocol || "https",
            url: t.url,
            accept: t.accept || g1.Any
        };
    }
    var I = "DELETE", x = "GET", j = "POST", D = "PUT";
    function q(t13, e8) {
        return Promise.all(e8.map(function(e) {
            return t13.get(e, function() {
                return Promise.resolve(w(e));
            });
        })).then(function(t14) {
            var r = t14.filter(function(t15) {
                return (function(t) {
                    return t.status === v1 || Date.now() - t.lastUpdate > 120000;
                })(t15);
            }), n = t14.filter(function(t16) {
                return (function(t) {
                    return t.status === P && Date.now() - t.lastUpdate <= 120000;
                })(t16);
            }), a = [].concat(o1(r), o1(n));
            return {
                getTimeout: function(t, e) {
                    return (0 === n.length && 0 === t ? 1 : n.length + 3 + t) * e;
                },
                statelessHosts: a.length > 0 ? a.map(function(t) {
                    return O(t);
                }) : e8
            };
        });
    }
    function S(t17, e9, n4, a3) {
        var i = [], u = function(t, e) {
            if (t.method === x || void 0 === t.data && void 0 === e.data) return;
            var n = Array.isArray(t.data) ? t.data : r1(r1({
            }, t.data), e.data);
            return JSON.stringify(n);
        }(n4, a3), s = function(t, e10) {
            var n = r1(r1({
            }, t.headers), e10.headers), a = {
            };
            return Object.keys(n).forEach(function(t) {
                var e = n[t];
                a[t.toLowerCase()] = e;
            }), a;
        }(t17, a3), c = n4.method, f2 = n4.method !== x ? {
        } : r1(r1({
        }, n4.data), a3.data), d = r1(r1(r1({
            "x-algolia-agent": t17.userAgent.value
        }, t17.queryParameters), f2), a3.queryParameters), l = 0, p2 = function e11(r5, o) {
            var f = r5.pop();
            if (void 0 === f) throw {
                name: "RetryError",
                message: "Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",
                transporterStackTrace: R(i)
            };
            var p = {
                data: u,
                headers: s,
                method: c,
                url: N(f, n4.path, d),
                connectTimeout: o(l, t17.timeouts.connect),
                responseTimeout: o(l, a3.timeout)
            }, h = function(t) {
                var e = {
                    request: p,
                    response: t,
                    host: f,
                    triesLeft: r5.length
                };
                return i.push(e), e;
            }, m = {
                onSuccess: function(t18) {
                    return (function(t19) {
                        try {
                            return JSON.parse(t19.content);
                        } catch (e12) {
                            throw (function(t, e) {
                                return {
                                    name: "DeserializationError",
                                    message: t,
                                    response: e
                                };
                            })(e12.message, t19);
                        }
                    })(t18);
                },
                onRetry: function(n) {
                    var a = h(n);
                    return n.isTimedOut && l++, Promise.all([
                        t17.logger.info("Retryable failure", A(a)),
                        t17.hostsCache.set(f, w(f, n.isTimedOut ? P : b1))
                    ]).then(function() {
                        return e11(r5, o);
                    });
                },
                onFail: function(t20) {
                    throw h(t20), (function(t22, e13) {
                        var r6 = t22.content, n = t22.status, a = r6;
                        try {
                            a = JSON.parse(r6).message;
                        } catch (t21) {
                        }
                        return (function(t, e, r) {
                            return {
                                name: "ApiError",
                                message: t,
                                status: e,
                                transporterStackTrace: r
                            };
                        })(a, n, e13);
                    })(t20, R(i));
                }
            };
            return t17.requester.send(p).then(function(t23) {
                return (function(t24, e14) {
                    return (function(t25) {
                        var e15 = t25.status;
                        return t25.isTimedOut || (function(t) {
                            var e = t.isTimedOut, r = t.status;
                            return !e && 0 == ~~r;
                        })(t25) || 2 != ~~(e15 / 100) && 4 != ~~(e15 / 100);
                    })(t24) ? e14.onRetry(t24) : 2 == ~~(t24.status / 100) ? e14.onSuccess(t24) : e14.onFail(t24);
                })(t23, m);
            });
        };
        return q(t17.hostsCache, e9).then(function(t) {
            return p2(o1(t.statelessHosts).reverse(), t.getTimeout);
        });
    }
    function k(t26) {
        var e16 = t26.hostsCache, r7 = t26.logger, n5 = t26.requester, o4 = t26.requestsCache, i = t26.responsesCache, u = t26.timeouts, s = t26.userAgent, c = t26.hosts, f = t26.queryParameters, d = {
            hostsCache: e16,
            logger: r7,
            requester: n5,
            requestsCache: o4,
            responsesCache: i,
            timeouts: u,
            userAgent: s,
            headers: t26.headers,
            queryParameters: f,
            hosts: c.map(function(t) {
                return O(t);
            }),
            read: function(t27, e17) {
                var r = y1(e17, d.timeouts.read), n = function() {
                    return S(d, d.hosts.filter(function(t) {
                        return 0 != (t.accept & g1.Read);
                    }), t27, r);
                };
                if (!0 !== (void 0 !== r.cacheable ? r.cacheable : t27.cacheable)) return n();
                var o = {
                    request: t27,
                    mappedRequestOptions: r,
                    transporter: {
                        queryParameters: d.queryParameters,
                        headers: d.headers
                    }
                };
                return d.responsesCache.get(o, function() {
                    return d.requestsCache.get(o, function() {
                        return d.requestsCache.set(o, n()).then(function(t) {
                            return Promise.all([
                                d.requestsCache.delete(o),
                                t
                            ]);
                        }, function(t) {
                            return Promise.all([
                                d.requestsCache.delete(o),
                                Promise.reject(t)
                            ]);
                        }).then(function(t) {
                            var e = a1(t, 2);
                            e[0];
                            return e[1];
                        });
                    });
                }, {
                    miss: function(t) {
                        return d.responsesCache.set(o, t);
                    }
                });
            },
            write: function(t28, e) {
                return S(d, d.hosts.filter(function(t) {
                    return 0 != (t.accept & g1.Write);
                }), t28, y1(e, d.timeouts.write));
            }
        };
        return d;
    }
    function T(t29) {
        var e = {
            value: "Algolia for JavaScript (".concat(t29, ")"),
            add: function(t) {
                var r = "; ".concat(t.segment).concat(void 0 !== t.version ? " (".concat(t.version, ")") : "");
                return -1 === e.value.indexOf(r) && (e.value = "".concat(e.value).concat(r)), e;
            }
        };
        return e;
    }
    function N(t, e, r) {
        var n = E(r), a = "".concat(t.protocol, "://").concat(t.url, "/").concat("/" === e.charAt(0) ? e.substr(1) : e);
        return n.length && (a += "?".concat(n)), a;
    }
    function E(t) {
        return Object.keys(t).map(function(e) {
            var r;
            return h1("%s=%s", e, (r = t[e], "[object Object]" === Object.prototype.toString.call(r) || "[object Array]" === Object.prototype.toString.call(r) ? JSON.stringify(t[e]) : t[e]));
        }).join("&");
    }
    function R(t30) {
        return t30.map(function(t) {
            return A(t);
        });
    }
    function A(t) {
        var e = t.request.headers["x-algolia-api-key"] ? {
            "x-algolia-api-key": "*****"
        } : {
        };
        return r1(r1({
        }, t), {
        }, {
            request: r1(r1({
            }, t.request), {
            }, {
                headers: r1(r1({
                }, t.request.headers), e)
            })
        });
    }
    var C = function(t) {
        return function(e, r) {
            return t.transporter.write({
                method: j,
                path: "2/abtests",
                data: e
            }, r);
        };
    }, U = function(t) {
        return function(e, r) {
            return t.transporter.write({
                method: I,
                path: h1("2/abtests/%s", e)
            }, r);
        };
    }, z = function(t) {
        return function(e, r) {
            return t.transporter.read({
                method: x,
                path: h1("2/abtests/%s", e)
            }, r);
        };
    }, J = function(t) {
        return function(e) {
            return t.transporter.read({
                method: x,
                path: "2/abtests"
            }, e);
        };
    }, F = function(t) {
        return function(e, r) {
            return t.transporter.write({
                method: j,
                path: h1("2/abtests/%s/stop", e)
            }, r);
        };
    }, H = function(t) {
        return function(e) {
            return t.transporter.read({
                method: x,
                path: "1/strategies/personalization"
            }, e);
        };
    }, M = function(t) {
        return function(e, r) {
            return t.transporter.write({
                method: j,
                path: "1/strategies/personalization",
                data: e
            }, r);
        };
    };
    function K(t) {
        return (function e(r) {
            return t.request(r).then(function(n) {
                if (void 0 !== t.batch && t.batch(n.hits), !t.shouldStop(n)) return n.cursor ? e({
                    cursor: n.cursor
                }) : e({
                    page: (r.page || 0) + 1
                });
            });
        })({
        });
    }
    var W = function(t31) {
        return function(e18, a) {
            var o = a || {
            }, i = o.queryParameters, u = n1(o, [
                "queryParameters"
            ]), s = r1({
                acl: e18
            }, void 0 !== i ? {
                queryParameters: i
            } : {
            });
            return d1(t31.transporter.write({
                method: j,
                path: "1/keys",
                data: s
            }, u), function(e, r) {
                return f1(function(n) {
                    return tt(t31)(e.key, r).catch(function(t) {
                        if (404 !== t.status) throw t;
                        return n();
                    });
                });
            });
        };
    }, B = function(t) {
        return function(e, r, n) {
            var a = y1(n);
            return a.queryParameters["X-Algolia-User-ID"] = e, t.transporter.write({
                method: j,
                path: "1/clusters/mapping",
                data: {
                    cluster: r
                }
            }, a);
        };
    }, Q = function(t) {
        return function(e, r, n) {
            return t.transporter.write({
                method: j,
                path: "1/clusters/mapping/batch",
                data: {
                    users: e,
                    cluster: r
                }
            }, n);
        };
    }, G = function(t) {
        return function(e19, r8) {
            return d1(t.transporter.write({
                method: j,
                path: h1("/1/dictionaries/%s/batch", e19),
                data: {
                    clearExistingDictionaryEntries: !0,
                    requests: {
                        action: "addEntry",
                        body: []
                    }
                }
            }, r8), function(e, r) {
                return jt(t)(e.taskID, r);
            });
        };
    }, L = function(t) {
        return function(e, r9, n6) {
            return d1(t.transporter.write({
                method: j,
                path: h1("1/indexes/%s/operation", e),
                data: {
                    operation: "copy",
                    destination: r9
                }
            }, n6), function(r, n) {
                return ut(t)(e, {
                    methods: {
                        waitTask: de
                    }
                }).waitTask(r.taskID, n);
            });
        };
    }, V = function(t) {
        return function(e, n, a) {
            return L(t)(e, n, r1(r1({
            }, a), {
            }, {
                scope: [
                    pe.Rules
                ]
            }));
        };
    }, _ = function(t) {
        return function(e, n, a) {
            return L(t)(e, n, r1(r1({
            }, a), {
            }, {
                scope: [
                    pe.Settings
                ]
            }));
        };
    }, X = function(t) {
        return function(e, n, a) {
            return L(t)(e, n, r1(r1({
            }, a), {
            }, {
                scope: [
                    pe.Synonyms
                ]
            }));
        };
    }, Y = function(t) {
        return function(e, r) {
            return e.method === x ? t.transporter.read(e, r) : t.transporter.write(e, r);
        };
    }, Z = function(t32) {
        return function(e, r10) {
            return d1(t32.transporter.write({
                method: I,
                path: h1("1/keys/%s", e)
            }, r10), function(r11, n) {
                return f1(function(r) {
                    return tt(t32)(e, n).then(r).catch(function(t) {
                        if (404 !== t.status) throw t;
                    });
                });
            });
        };
    }, $ = function(t33) {
        return function(e20, r12, n) {
            var a = r12.map(function(t) {
                return {
                    action: "deleteEntry",
                    body: {
                        objectID: t
                    }
                };
            });
            return d1(t33.transporter.write({
                method: j,
                path: h1("/1/dictionaries/%s/batch", e20),
                data: {
                    clearExistingDictionaryEntries: !1,
                    requests: a
                }
            }, n), function(e, r) {
                return jt(t33)(e.taskID, r);
            });
        };
    }, tt = function(t) {
        return function(e, r) {
            return t.transporter.read({
                method: x,
                path: h1("1/keys/%s", e)
            }, r);
        };
    }, et = function(t) {
        return function(e, r) {
            return t.transporter.read({
                method: x,
                path: h1("1/task/%s", e.toString())
            }, r);
        };
    }, rt = function(t) {
        return function(e) {
            return t.transporter.read({
                method: x,
                path: "/1/dictionaries/*/settings"
            }, e);
        };
    }, nt = function(t) {
        return function(e) {
            return t.transporter.read({
                method: x,
                path: "1/logs"
            }, e);
        };
    }, at = function(t) {
        return function(e) {
            return t.transporter.read({
                method: x,
                path: "1/clusters/mapping/top"
            }, e);
        };
    }, ot = function(t) {
        return function(e, r) {
            return t.transporter.read({
                method: x,
                path: h1("1/clusters/mapping/%s", e)
            }, r);
        };
    }, it = function(t) {
        return function(e) {
            var r = e || {
            }, a = r.retrieveMappings, o = n1(r, [
                "retrieveMappings"
            ]);
            return !0 === a && (o.getClusters = !0), t.transporter.read({
                method: x,
                path: "1/clusters/mapping/pending"
            }, o);
        };
    }, ut = function(t) {
        return function(e) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            }, n = {
                transporter: t.transporter,
                appId: t.appId,
                indexName: e
            };
            return p1(n, r.methods);
        };
    }, st = function(t) {
        return function(e) {
            return t.transporter.read({
                method: x,
                path: "1/keys"
            }, e);
        };
    }, ct = function(t) {
        return function(e) {
            return t.transporter.read({
                method: x,
                path: "1/clusters"
            }, e);
        };
    }, ft = function(t) {
        return function(e) {
            return t.transporter.read({
                method: x,
                path: "1/indexes"
            }, e);
        };
    }, dt = function(t) {
        return function(e) {
            return t.transporter.read({
                method: x,
                path: "1/clusters/mapping"
            }, e);
        };
    }, lt = function(t) {
        return function(e, r13, n7) {
            return d1(t.transporter.write({
                method: j,
                path: h1("1/indexes/%s/operation", e),
                data: {
                    operation: "move",
                    destination: r13
                }
            }, n7), function(r, n) {
                return ut(t)(e, {
                    methods: {
                        waitTask: de
                    }
                }).waitTask(r.taskID, n);
            });
        };
    }, pt = function(t) {
        return function(e21, r14) {
            return d1(t.transporter.write({
                method: j,
                path: "1/indexes/*/batch",
                data: {
                    requests: e21
                }
            }, r14), function(e, r) {
                return Promise.all(Object.keys(e.taskID).map(function(n) {
                    return ut(t)(n, {
                        methods: {
                            waitTask: de
                        }
                    }).waitTask(e.taskID[n], r);
                }));
            });
        };
    }, ht = function(t) {
        return function(e, r) {
            return t.transporter.read({
                method: j,
                path: "1/indexes/*/objects",
                data: {
                    requests: e
                }
            }, r);
        };
    }, mt = function(t34) {
        return function(e, n) {
            var a = e.map(function(t) {
                return r1(r1({
                }, t), {
                }, {
                    params: E(t.params || {
                    })
                });
            });
            return t34.transporter.read({
                method: j,
                path: "1/indexes/*/queries",
                data: {
                    requests: a
                },
                cacheable: !0
            }, n);
        };
    }, yt = function(t) {
        return function(e22, a) {
            return Promise.all(e22.map(function(e) {
                var o = e.params, i = o.facetName, u = o.facetQuery, s = n1(o, [
                    "facetName",
                    "facetQuery"
                ]);
                return ut(t)(e.indexName, {
                    methods: {
                        searchForFacetValues: ue
                    }
                }).searchForFacetValues(i, u, r1(r1({
                }, a), s));
            }));
        };
    }, gt = function(t) {
        return function(e, r) {
            var n = y1(r);
            return n.queryParameters["X-Algolia-User-ID"] = e, t.transporter.write({
                method: I,
                path: "1/clusters/mapping"
            }, n);
        };
    }, vt = function(t35) {
        return function(e23, r15, n) {
            var a = r15.map(function(t) {
                return {
                    action: "addEntry",
                    body: t
                };
            });
            return d1(t35.transporter.write({
                method: j,
                path: h1("/1/dictionaries/%s/batch", e23),
                data: {
                    clearExistingDictionaryEntries: !0,
                    requests: a
                }
            }, n), function(e, r) {
                return jt(t35)(e.taskID, r);
            });
        };
    }, bt = function(t36) {
        return function(e, r16) {
            return d1(t36.transporter.write({
                method: j,
                path: h1("1/keys/%s/restore", e)
            }, r16), function(r17, n) {
                return f1(function(r) {
                    return tt(t36)(e, n).catch(function(t) {
                        if (404 !== t.status) throw t;
                        return r();
                    });
                });
            });
        };
    }, Pt = function(t37) {
        return function(e24, r18, n) {
            var a = r18.map(function(t) {
                return {
                    action: "addEntry",
                    body: t
                };
            });
            return d1(t37.transporter.write({
                method: j,
                path: h1("/1/dictionaries/%s/batch", e24),
                data: {
                    clearExistingDictionaryEntries: !1,
                    requests: a
                }
            }, n), function(e, r) {
                return jt(t37)(e.taskID, r);
            });
        };
    }, wt = function(t) {
        return function(e, r, n) {
            return t.transporter.read({
                method: j,
                path: h1("/1/dictionaries/%s/search", e),
                data: {
                    query: r
                },
                cacheable: !0
            }, n);
        };
    }, Ot = function(t) {
        return function(e, r) {
            return t.transporter.read({
                method: j,
                path: "1/clusters/mapping/search",
                data: {
                    query: e
                }
            }, r);
        };
    }, It = function(t) {
        return function(e25, r19) {
            return d1(t.transporter.write({
                method: D,
                path: "/1/dictionaries/*/settings",
                data: e25
            }, r19), function(e, r) {
                return jt(t)(e.taskID, r);
            });
        };
    }, xt = function(t38) {
        return function(e, r20) {
            var a = Object.assign({
            }, r20), o = r20 || {
            }, i = o.queryParameters, u = n1(o, [
                "queryParameters"
            ]), s = i ? {
                queryParameters: i
            } : {
            }, c = [
                "acl",
                "indexes",
                "referers",
                "restrictSources",
                "queryParameters",
                "description",
                "maxQueriesPerIPPerHour",
                "maxHitsPerQuery"
            ];
            return d1(t38.transporter.write({
                method: D,
                path: h1("1/keys/%s", e),
                data: s
            }, u), function(r21, n) {
                return f1(function(r) {
                    return tt(t38)(e, n).then(function(t39) {
                        return (function(t40) {
                            return Object.keys(a).filter(function(t) {
                                return -1 !== c.indexOf(t);
                            }).every(function(e) {
                                return t40[e] === a[e];
                            });
                        })(t39) ? Promise.resolve() : r();
                    });
                });
            });
        };
    }, jt = function(t41) {
        return function(e, r) {
            return f1(function(n) {
                return et(t41)(e, r).then(function(t) {
                    return "published" !== t.status ? n() : void 0;
                });
            });
        };
    }, Dt = function(t) {
        return function(e26, r22) {
            return d1(t.transporter.write({
                method: j,
                path: h1("1/indexes/%s/batch", t.indexName),
                data: {
                    requests: e26
                }
            }, r22), function(e, r) {
                return de(t)(e.taskID, r);
            });
        };
    }, qt = function(t42) {
        return function(e) {
            return K(r1(r1({
                shouldStop: function(t) {
                    return void 0 === t.cursor;
                }
            }, e), {
            }, {
                request: function(r) {
                    return t42.transporter.read({
                        method: j,
                        path: h1("1/indexes/%s/browse", t42.indexName),
                        data: r
                    }, e);
                }
            }));
        };
    }, St = function(t43) {
        return function(e27) {
            var n = r1({
                hitsPerPage: 1000
            }, e27);
            return K(r1(r1({
                shouldStop: function(t) {
                    return t.hits.length < n.hitsPerPage;
                }
            }, n), {
            }, {
                request: function(e) {
                    return se(t43)("", r1(r1({
                    }, n), e)).then(function(t44) {
                        return r1(r1({
                        }, t44), {
                        }, {
                            hits: t44.hits.map(function(t) {
                                return delete t._highlightResult, t;
                            })
                        });
                    });
                }
            }));
        };
    }, kt = function(t45) {
        return function(e28) {
            var n = r1({
                hitsPerPage: 1000
            }, e28);
            return K(r1(r1({
                shouldStop: function(t) {
                    return t.hits.length < n.hitsPerPage;
                }
            }, n), {
            }, {
                request: function(e) {
                    return ce(t45)("", r1(r1({
                    }, n), e)).then(function(t46) {
                        return r1(r1({
                        }, t46), {
                        }, {
                            hits: t46.hits.map(function(t) {
                                return delete t._highlightResult, t;
                            })
                        });
                    });
                }
            }));
        };
    }, Tt = function(t47) {
        return function(e29, r23, a4) {
            var o5 = a4 || {
            }, i = o5.batchSize, u = n1(o5, [
                "batchSize"
            ]), s = {
                taskIDs: [],
                objectIDs: []
            };
            return d1(function n() {
                var a, o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, c = [];
                for(a = o; a < e29.length && (c.push(e29[a]), c.length !== (i || 1000)); a++);
                return 0 === c.length ? Promise.resolve(s) : Dt(t47)(c.map(function(t) {
                    return {
                        action: r23,
                        body: t
                    };
                }), u).then(function(t) {
                    return s.objectIDs = s.objectIDs.concat(t.objectIDs), s.taskIDs.push(t.taskID), a++, n(a);
                });
            }(), function(e30, r) {
                return Promise.all(e30.taskIDs.map(function(e) {
                    return de(t47)(e, r);
                }));
            });
        };
    }, Nt = function(t) {
        return function(e31) {
            return d1(t.transporter.write({
                method: j,
                path: h1("1/indexes/%s/clear", t.indexName)
            }, e31), function(e, r) {
                return de(t)(e.taskID, r);
            });
        };
    }, Et = function(t) {
        return function(e32) {
            var r24 = e32 || {
            }, a = r24.forwardToReplicas, o = y1(n1(r24, [
                "forwardToReplicas"
            ]));
            return a && (o.queryParameters.forwardToReplicas = 1), d1(t.transporter.write({
                method: j,
                path: h1("1/indexes/%s/rules/clear", t.indexName)
            }, o), function(e, r) {
                return de(t)(e.taskID, r);
            });
        };
    }, Rt = function(t) {
        return function(e33) {
            var r25 = e33 || {
            }, a = r25.forwardToReplicas, o = y1(n1(r25, [
                "forwardToReplicas"
            ]));
            return a && (o.queryParameters.forwardToReplicas = 1), d1(t.transporter.write({
                method: j,
                path: h1("1/indexes/%s/synonyms/clear", t.indexName)
            }, o), function(e, r) {
                return de(t)(e.taskID, r);
            });
        };
    }, At = function(t) {
        return function(e34, r26) {
            return d1(t.transporter.write({
                method: j,
                path: h1("1/indexes/%s/deleteByQuery", t.indexName),
                data: e34
            }, r26), function(e, r) {
                return de(t)(e.taskID, r);
            });
        };
    }, Ct = function(t) {
        return function(e35) {
            return d1(t.transporter.write({
                method: I,
                path: h1("1/indexes/%s", t.indexName)
            }, e35), function(e, r) {
                return de(t)(e.taskID, r);
            });
        };
    }, Ut = function(t48) {
        return function(e36, r27) {
            return d1(zt(t48)([
                e36
            ], r27).then(function(t) {
                return {
                    taskID: t.taskIDs[0]
                };
            }), function(e, r) {
                return de(t48)(e.taskID, r);
            });
        };
    }, zt = function(t49) {
        return function(e, r) {
            var n = e.map(function(t) {
                return {
                    objectID: t
                };
            });
            return Tt(t49)(n, le.DeleteObject, r);
        };
    }, Jt = function(t) {
        return function(e37, r28) {
            var a = r28 || {
            }, o = a.forwardToReplicas, i = y1(n1(a, [
                "forwardToReplicas"
            ]));
            return o && (i.queryParameters.forwardToReplicas = 1), d1(t.transporter.write({
                method: I,
                path: h1("1/indexes/%s/rules/%s", t.indexName, e37)
            }, i), function(e, r) {
                return de(t)(e.taskID, r);
            });
        };
    }, Ft = function(t) {
        return function(e38, r29) {
            var a = r29 || {
            }, o = a.forwardToReplicas, i = y1(n1(a, [
                "forwardToReplicas"
            ]));
            return o && (i.queryParameters.forwardToReplicas = 1), d1(t.transporter.write({
                method: I,
                path: h1("1/indexes/%s/synonyms/%s", t.indexName, e38)
            }, i), function(e, r) {
                return de(t)(e.taskID, r);
            });
        };
    }, Ht = function(t50) {
        return function(e) {
            return Lt(t50)(e).then(function() {
                return !0;
            }).catch(function(t) {
                if (404 !== t.status) throw t;
                return !1;
            });
        };
    }, Mt = function(t) {
        return function(e, r, n) {
            return t.transporter.read({
                method: j,
                path: h1("1/answers/%s/prediction", t.indexName),
                data: {
                    query: e,
                    queryLanguages: r
                },
                cacheable: !0
            }, n);
        };
    }, Kt = function(t51) {
        return function(e, o6) {
            var i2 = o6 || {
            }, u2 = i2.query, s = i2.paginate, c2 = n1(i2, [
                "query",
                "paginate"
            ]), f = 0;
            return (function n() {
                return ie(t51)(u2 || "", r1(r1({
                }, c2), {
                }, {
                    page: f
                })).then(function(t) {
                    for(var r = 0, o = Object.entries(t.hits); r < o.length; r++){
                        var i = a1(o[r], 2), u = i[0], c = i[1];
                        if (e(c)) return {
                            object: c,
                            position: parseInt(u, 10),
                            page: f
                        };
                    }
                    if (f++, !1 === s || f >= t.nbPages) throw {
                        name: "ObjectNotFoundError",
                        message: "Object not found."
                    };
                    return n();
                });
            })();
        };
    }, Wt = function(t) {
        return function(e, r) {
            return t.transporter.read({
                method: x,
                path: h1("1/indexes/%s/%s", t.indexName, e)
            }, r);
        };
    }, Bt = function() {
        return function(t, e) {
            for(var r = 0, n = Object.entries(t.hits); r < n.length; r++){
                var o = a1(n[r], 2), i = o[0];
                if (o[1].objectID === e) return parseInt(i, 10);
            }
            return -1;
        };
    }, Qt = function(t) {
        return function(e39, a) {
            var o = a || {
            }, i = o.attributesToRetrieve, u = n1(o, [
                "attributesToRetrieve"
            ]), s = e39.map(function(e) {
                return r1({
                    indexName: t.indexName,
                    objectID: e
                }, i ? {
                    attributesToRetrieve: i
                } : {
                });
            });
            return t.transporter.read({
                method: j,
                path: "1/indexes/*/objects",
                data: {
                    requests: s
                }
            }, u);
        };
    }, Gt = function(t) {
        return function(e, r) {
            return t.transporter.read({
                method: x,
                path: h1("1/indexes/%s/rules/%s", t.indexName, e)
            }, r);
        };
    }, Lt = function(t) {
        return function(e) {
            return t.transporter.read({
                method: x,
                path: h1("1/indexes/%s/settings", t.indexName),
                data: {
                    getVersion: 2
                }
            }, e);
        };
    }, Vt = function(t) {
        return function(e, r) {
            return t.transporter.read({
                method: x,
                path: h1("1/indexes/%s/synonyms/%s", t.indexName, e)
            }, r);
        };
    }, _t = function(t52) {
        return function(e40, r30) {
            return d1(Xt(t52)([
                e40
            ], r30).then(function(t) {
                return {
                    objectID: t.objectIDs[0],
                    taskID: t.taskIDs[0]
                };
            }), function(e, r) {
                return de(t52)(e.taskID, r);
            });
        };
    }, Xt = function(t) {
        return function(e, r) {
            var a = r || {
            }, o = a.createIfNotExists, i = n1(a, [
                "createIfNotExists"
            ]), u = o ? le.PartialUpdateObject : le.PartialUpdateObjectNoCreate;
            return Tt(t)(e, u, i);
        };
    }, Yt = function(t53) {
        return function(e41, i3) {
            var u = i3 || {
            }, s = u.safe, c = u.autoGenerateObjectIDIfNotExist, f = u.batchSize, l = n1(u, [
                "safe",
                "autoGenerateObjectIDIfNotExist",
                "batchSize"
            ]), p = function(e42, r31, n, a) {
                return d1(t53.transporter.write({
                    method: j,
                    path: h1("1/indexes/%s/operation", e42),
                    data: {
                        operation: n,
                        destination: r31
                    }
                }, a), function(e, r) {
                    return de(t53)(e.taskID, r);
                });
            }, m = Math.random().toString(36).substring(7), y = "".concat(t53.indexName, "_tmp_").concat(m), g = ee({
                appId: t53.appId,
                transporter: t53.transporter,
                indexName: y
            }), v = [], b = p(t53.indexName, y, "copy", r1(r1({
            }, l), {
            }, {
                scope: [
                    "settings",
                    "synonyms",
                    "rules"
                ]
            }));
            return v.push(b), d1((s ? b.wait(l) : b).then(function() {
                var t = g(e41, r1(r1({
                }, l), {
                }, {
                    autoGenerateObjectIDIfNotExist: c,
                    batchSize: f
                }));
                return v.push(t), s ? t.wait(l) : t;
            }).then(function() {
                var e = p(y, t53.indexName, "move", l);
                return v.push(e), s ? e.wait(l) : e;
            }).then(function() {
                return Promise.all(v);
            }).then(function(t) {
                var e = a1(t, 3), r = e[0], n = e[1], i = e[2];
                return {
                    objectIDs: n.objectIDs,
                    taskIDs: [
                        r.taskID
                    ].concat(o1(n.taskIDs), [
                        i.taskID
                    ])
                };
            }), function(t54, e) {
                return Promise.all(v.map(function(t) {
                    return t.wait(e);
                }));
            });
        };
    }, Zt = function(t) {
        return function(e, n) {
            return ne(t)(e, r1(r1({
            }, n), {
            }, {
                clearExistingRules: !0
            }));
        };
    }, $t = function(t) {
        return function(e, n) {
            return oe(t)(e, r1(r1({
            }, n), {
            }, {
                clearExistingSynonyms: !0
            }));
        };
    }, te = function(t55) {
        return function(e43, r32) {
            return d1(ee(t55)([
                e43
            ], r32).then(function(t) {
                return {
                    objectID: t.objectIDs[0],
                    taskID: t.taskIDs[0]
                };
            }), function(e, r) {
                return de(t55)(e.taskID, r);
            });
        };
    }, ee = function(t56) {
        return function(e, r) {
            var a = r || {
            }, o = a.autoGenerateObjectIDIfNotExist, i = n1(a, [
                "autoGenerateObjectIDIfNotExist"
            ]), u = o ? le.AddObject : le.UpdateObject;
            if (u === le.UpdateObject) {
                var s = !0, c = !1, f = void 0;
                try {
                    for(var l, p = e[Symbol.iterator](); !(s = (l = p.next()).done); s = !0){
                        if (void 0 === l.value.objectID) return d1(Promise.reject({
                            name: "MissingObjectIDError",
                            message: "All objects must have an unique objectID (like a primary key) to be valid. Algolia is also able to generate objectIDs automatically but *it's not recommended*. To do it, use the `{'autoGenerateObjectIDIfNotExist': true}` option."
                        }));
                    }
                } catch (t) {
                    c = !0, f = t;
                } finally{
                    try {
                        s || null == p.return || p.return();
                    } finally{
                        if (c) throw f;
                    }
                }
            }
            return Tt(t56)(e, u, i);
        };
    }, re = function(t) {
        return function(e, r) {
            return ne(t)([
                e
            ], r);
        };
    }, ne = function(t) {
        return function(e44, r33) {
            var a = r33 || {
            }, o = a.forwardToReplicas, i = a.clearExistingRules, u = y1(n1(a, [
                "forwardToReplicas",
                "clearExistingRules"
            ]));
            return o && (u.queryParameters.forwardToReplicas = 1), i && (u.queryParameters.clearExistingRules = 1), d1(t.transporter.write({
                method: j,
                path: h1("1/indexes/%s/rules/batch", t.indexName),
                data: e44
            }, u), function(e, r) {
                return de(t)(e.taskID, r);
            });
        };
    }, ae = function(t) {
        return function(e, r) {
            return oe(t)([
                e
            ], r);
        };
    }, oe = function(t) {
        return function(e45, r34) {
            var a = r34 || {
            }, o = a.forwardToReplicas, i = a.clearExistingSynonyms, u = a.replaceExistingSynonyms, s = y1(n1(a, [
                "forwardToReplicas",
                "clearExistingSynonyms",
                "replaceExistingSynonyms"
            ]));
            return o && (s.queryParameters.forwardToReplicas = 1), (u || i) && (s.queryParameters.replaceExistingSynonyms = 1), d1(t.transporter.write({
                method: j,
                path: h1("1/indexes/%s/synonyms/batch", t.indexName),
                data: e45
            }, s), function(e, r) {
                return de(t)(e.taskID, r);
            });
        };
    }, ie = function(t) {
        return function(e, r) {
            return t.transporter.read({
                method: j,
                path: h1("1/indexes/%s/query", t.indexName),
                data: {
                    query: e
                },
                cacheable: !0
            }, r);
        };
    }, ue = function(t) {
        return function(e, r, n) {
            return t.transporter.read({
                method: j,
                path: h1("1/indexes/%s/facets/%s/query", t.indexName, e),
                data: {
                    facetQuery: r
                },
                cacheable: !0
            }, n);
        };
    }, se = function(t) {
        return function(e, r) {
            return t.transporter.read({
                method: j,
                path: h1("1/indexes/%s/rules/search", t.indexName),
                data: {
                    query: e
                }
            }, r);
        };
    }, ce = function(t) {
        return function(e, r) {
            return t.transporter.read({
                method: j,
                path: h1("1/indexes/%s/synonyms/search", t.indexName),
                data: {
                    query: e
                }
            }, r);
        };
    }, fe = function(t) {
        return function(e46, r35) {
            var a = r35 || {
            }, o = a.forwardToReplicas, i = y1(n1(a, [
                "forwardToReplicas"
            ]));
            return o && (i.queryParameters.forwardToReplicas = 1), d1(t.transporter.write({
                method: D,
                path: h1("1/indexes/%s/settings", t.indexName),
                data: e46
            }, i), function(e, r) {
                return de(t)(e.taskID, r);
            });
        };
    }, de = function(t57) {
        return function(e47, r36) {
            return f1(function(n) {
                return (function(t) {
                    return function(e, r) {
                        return t.transporter.read({
                            method: x,
                            path: h1("1/indexes/%s/task/%s", t.indexName, e.toString())
                        }, r);
                    };
                })(t57)(e47, r36).then(function(t) {
                    return "published" !== t.status ? n() : void 0;
                });
            });
        };
    }, le = {
        AddObject: "addObject",
        UpdateObject: "updateObject",
        PartialUpdateObject: "partialUpdateObject",
        PartialUpdateObjectNoCreate: "partialUpdateObjectNoCreate",
        DeleteObject: "deleteObject",
        DeleteIndex: "delete",
        ClearIndex: "clear"
    }, pe = {
        Settings: "settings",
        Synonyms: "synonyms",
        Rules: "rules"
    }, he = 1, me = 2, ye = 3;
    function ge(t58, e48, n8) {
        var a5, o7 = {
            appId: t58,
            apiKey: e48,
            timeouts: {
                connect: 1,
                read: 2,
                write: 30
            },
            requester: {
                send: function(t59) {
                    return new Promise(function(e49) {
                        var r = new XMLHttpRequest;
                        r.open(t59.method, t59.url, !0), Object.keys(t59.headers).forEach(function(e) {
                            return r.setRequestHeader(e, t59.headers[e]);
                        });
                        var n9, a = function(t, n) {
                            return setTimeout(function() {
                                r.abort(), e49({
                                    status: 0,
                                    content: n,
                                    isTimedOut: !0
                                });
                            }, 1000 * t);
                        }, o = a(t59.connectTimeout, "Connection timeout");
                        r.onreadystatechange = function() {
                            r.readyState > r.OPENED && void 0 === n9 && (clearTimeout(o), n9 = a(t59.responseTimeout, "Socket timeout"));
                        }, r.onerror = function() {
                            0 === r.status && (clearTimeout(o), clearTimeout(n9), e49({
                                content: r.responseText || "Network request failed",
                                status: r.status,
                                isTimedOut: !1
                            }));
                        }, r.onload = function() {
                            clearTimeout(o), clearTimeout(n9), e49({
                                content: r.responseText,
                                status: r.status,
                                isTimedOut: !1
                            });
                        }, r.send(t59.data);
                    });
                }
            },
            logger: (a5 = ye, {
                debug: function(t, e) {
                    return he >= a5 && console.debug(t, e), Promise.resolve();
                },
                info: function(t, e) {
                    return me >= a5 && console.info(t, e), Promise.resolve();
                },
                error: function(t, e) {
                    return console.error(t, e), Promise.resolve();
                }
            }),
            responsesCache: s1(),
            requestsCache: s1({
                serializable: !1
            }),
            hostsCache: u1({
                caches: [
                    i1({
                        key: "".concat("4.12.1", "-").concat(t58)
                    }),
                    s1()
                ]
            }),
            userAgent: T("4.12.1").add({
                segment: "Browser"
            })
        }, f = r1(r1({
        }, o7), n8), d = function() {
            return function(t60) {
                return (function(t) {
                    var e = t.region || "us", n = c1(m1.WithinHeaders, t.appId, t.apiKey), a = k(r1(r1({
                        hosts: [
                            {
                                url: "personalization.".concat(e, ".algolia.com")
                            }
                        ]
                    }, t), {
                    }, {
                        headers: r1(r1(r1({
                        }, n.headers()), {
                            "content-type": "application/json"
                        }), t.headers),
                        queryParameters: r1(r1({
                        }, n.queryParameters()), t.queryParameters)
                    }));
                    return p1({
                        appId: t.appId,
                        transporter: a
                    }, t.methods);
                })(r1(r1(r1({
                }, o7), t60), {
                }, {
                    methods: {
                        getPersonalizationStrategy: H,
                        setPersonalizationStrategy: M
                    }
                }));
            };
        };
        return (function(t61) {
            var e50 = t61.appId, n = c1(void 0 !== t61.authMode ? t61.authMode : m1.WithinHeaders, e50, t61.apiKey), a = k(r1(r1({
                hosts: [
                    {
                        url: "".concat(e50, "-dsn.algolia.net"),
                        accept: g1.Read
                    },
                    {
                        url: "".concat(e50, ".algolia.net"),
                        accept: g1.Write
                    }
                ].concat(l1([
                    {
                        url: "".concat(e50, "-1.algolianet.com")
                    },
                    {
                        url: "".concat(e50, "-2.algolianet.com")
                    },
                    {
                        url: "".concat(e50, "-3.algolianet.com")
                    }
                ]))
            }, t61), {
            }, {
                headers: r1(r1(r1({
                }, n.headers()), {
                    "content-type": "application/x-www-form-urlencoded"
                }), t61.headers),
                queryParameters: r1(r1({
                }, n.queryParameters()), t61.queryParameters)
            }));
            return p1({
                transporter: a,
                appId: e50,
                addAlgoliaAgent: function(t, e) {
                    a.userAgent.add({
                        segment: t,
                        version: e
                    });
                },
                clearCache: function() {
                    return Promise.all([
                        a.requestsCache.clear(),
                        a.responsesCache.clear()
                    ]).then(function() {
                    });
                }
            }, t61.methods);
        })(r1(r1({
        }, f), {
        }, {
            methods: {
                search: mt,
                searchForFacetValues: yt,
                multipleBatch: pt,
                multipleGetObjects: ht,
                multipleQueries: mt,
                copyIndex: L,
                copySettings: _,
                copySynonyms: X,
                copyRules: V,
                moveIndex: lt,
                listIndices: ft,
                getLogs: nt,
                listClusters: ct,
                multipleSearchForFacetValues: yt,
                getApiKey: tt,
                addApiKey: W,
                listApiKeys: st,
                updateApiKey: xt,
                deleteApiKey: Z,
                restoreApiKey: bt,
                assignUserID: B,
                assignUserIDs: Q,
                getUserID: ot,
                searchUserIDs: Ot,
                listUserIDs: dt,
                getTopUserIDs: at,
                removeUserID: gt,
                hasPendingMappings: it,
                clearDictionaryEntries: G,
                deleteDictionaryEntries: $,
                getDictionarySettings: rt,
                getAppTask: et,
                replaceDictionaryEntries: vt,
                saveDictionaryEntries: Pt,
                searchDictionaryEntries: wt,
                setDictionarySettings: It,
                waitAppTask: jt,
                customRequest: Y,
                initIndex: function(t) {
                    return function(e) {
                        return ut(t)(e, {
                            methods: {
                                batch: Dt,
                                delete: Ct,
                                findAnswers: Mt,
                                getObject: Wt,
                                getObjects: Qt,
                                saveObject: te,
                                saveObjects: ee,
                                search: ie,
                                searchForFacetValues: ue,
                                waitTask: de,
                                setSettings: fe,
                                getSettings: Lt,
                                partialUpdateObject: _t,
                                partialUpdateObjects: Xt,
                                deleteObject: Ut,
                                deleteObjects: zt,
                                deleteBy: At,
                                clearObjects: Nt,
                                browseObjects: qt,
                                getObjectPosition: Bt,
                                findObject: Kt,
                                exists: Ht,
                                saveSynonym: ae,
                                saveSynonyms: oe,
                                getSynonym: Vt,
                                searchSynonyms: ce,
                                browseSynonyms: kt,
                                deleteSynonym: Ft,
                                clearSynonyms: Rt,
                                replaceAllObjects: Yt,
                                replaceAllSynonyms: $t,
                                searchRules: se,
                                getRule: Gt,
                                deleteRule: Jt,
                                saveRule: re,
                                saveRules: ne,
                                replaceAllRules: Zt,
                                browseRules: St,
                                clearRules: Et
                            }
                        });
                    };
                },
                initAnalytics: function() {
                    return function(t62) {
                        return (function(t) {
                            var e = t.region || "us", n = c1(m1.WithinHeaders, t.appId, t.apiKey), a = k(r1(r1({
                                hosts: [
                                    {
                                        url: "analytics.".concat(e, ".algolia.com")
                                    }
                                ]
                            }, t), {
                            }, {
                                headers: r1(r1(r1({
                                }, n.headers()), {
                                    "content-type": "application/json"
                                }), t.headers),
                                queryParameters: r1(r1({
                                }, n.queryParameters()), t.queryParameters)
                            }));
                            return p1({
                                appId: t.appId,
                                transporter: a
                            }, t.methods);
                        })(r1(r1(r1({
                        }, o7), t62), {
                        }, {
                            methods: {
                                addABTest: C,
                                getABTest: z,
                                getABTests: J,
                                stopABTest: F,
                                deleteABTest: U
                            }
                        }));
                    };
                },
                initPersonalization: d,
                initRecommendation: function() {
                    return function(t) {
                        return f.logger.info("The `initRecommendation` method is deprecated. Use `initPersonalization` instead."), d()(t);
                    };
                }
            }
        }));
    }
    return ge.version = "4.12.1", ge;
});

},{}],"5B89y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _instantSearchJs = require("./lib/InstantSearch.js");
var _instantSearchJsDefault = parcelHelpers.interopDefault(_instantSearchJs);
var _versionJs = require("./lib/version.js");
var _versionJsDefault = parcelHelpers.interopDefault(_versionJs);
var _indexJs = require("./helpers/index.js");
var _indexJs1 = require("./lib/infiniteHitsCache/index.js");
var _indexJs2 = require("./lib/utils/index.js");
var _indexJs3 = require("./types/index.js");
parcelHelpers.exportAll(_indexJs3, exports);
/**
 * InstantSearch is the main component of InstantSearch.js. This object
 * manages the widget and lets you add new ones.
 *
 * Two parameters are required to get you started with InstantSearch.js:
 *  - `indexName`: the main index that you will use for your new search UI
 *  - `searchClient`: the search client to plug to InstantSearch.js
 *
 * The [search client provided by Algolia](algolia.com/doc/api-client/getting-started/what-is-the-api-client/javascript/)
 * needs an `appId` and an `apiKey`. Those parameters can be found in your
 * [Algolia dashboard](https://www.algolia.com/api-keys).
 *
 * If you want to get up and running quickly with InstantSearch.js, have a
 * look at the [getting started](https://www.algolia.com/doc/guides/building-search-ui/getting-started/js/).
 */ var instantsearch = function instantsearch(options) {
    return new _instantSearchJsDefault.default(options);
};
instantsearch.version = _versionJsDefault.default;
instantsearch.createInfiniteHitsSessionStorageCache = _indexJs2.deprecate(_indexJs1.createInfiniteHitsSessionStorageCache, "import { createInfiniteHitsSessionStorageCache } from 'instantsearch.js/es/helpers'");
instantsearch.highlight = _indexJs2.deprecate(_indexJs.highlight, "import { highlight } from 'instantsearch.js/es/helpers'");
instantsearch.reverseHighlight = _indexJs2.deprecate(_indexJs.reverseHighlight, "import { reverseHighlight } from 'instantsearch.js/es/helpers'");
instantsearch.snippet = _indexJs2.deprecate(_indexJs.snippet, "import { snippet } from 'instantsearch.js/es/helpers'");
instantsearch.reverseSnippet = _indexJs2.deprecate(_indexJs.reverseSnippet, "import { reverseSnippet } from 'instantsearch.js/es/helpers'");
instantsearch.insights = _indexJs.insights;
instantsearch.getInsightsAnonymousUserToken = _indexJs.getInsightsAnonymousUserToken;
Object.defineProperty(instantsearch, 'widgets', {
    get: function get() {
        throw new ReferenceError("\"instantsearch.widgets\" are not available from the ES build.\n\nTo import the widgets:\n\nimport { searchBox } from 'instantsearch.js/es/widgets'");
    }
});
Object.defineProperty(instantsearch, 'connectors', {
    get: function get() {
        throw new ReferenceError("\"instantsearch.connectors\" are not available from the ES build.\n\nTo import the connectors:\n\nimport { connectSearchBox } from 'instantsearch.js/es/connectors'");
    }
});
exports.default = instantsearch;

},{"./lib/InstantSearch.js":"8mJmb","./lib/version.js":"hkkLK","./helpers/index.js":"8kgzi","./lib/infiniteHitsCache/index.js":"co24K","./lib/utils/index.js":"etVYs","./types/index.js":"l4HRf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8mJmb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _algoliasearchHelper = require("algoliasearch-helper");
var _algoliasearchHelperDefault = parcelHelpers.interopDefault(_algoliasearchHelper);
var _events = require("@algolia/events");
var _eventsDefault = parcelHelpers.interopDefault(_events);
var _indexJs = require("../widgets/index/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _versionJs = require("./version.js");
var _versionJsDefault = parcelHelpers.interopDefault(_versionJs);
var _createHelpersJs = require("./createHelpers.js");
var _createHelpersJsDefault = parcelHelpers.interopDefault(_createHelpersJs);
var _indexJs1 = require("./utils/index.js");
var _createRouterMiddlewareJs = require("../middlewares/createRouterMiddleware.js");
var _createMetadataMiddlewareJs = require("../middlewares/createMetadataMiddleware.js");
function _typeof(obj1) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj1);
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o1, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o1, p1);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o2) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o2);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var withUsage = _indexJs1.createDocumentationMessageGenerator({
    name: 'instantsearch'
});
function defaultCreateURL() {
    return '#';
}
/**
 * Global options for an InstantSearch instance.
 */ /**
 * The actual implementation of the InstantSearch. This is
 * created using the `instantsearch` factory function.
 * It emits the 'render' event every time a search is done
 */ var InstantSearch = /*#__PURE__*/ function(_EventEmitter) {
    _inherits(InstantSearch1, _EventEmitter);
    var _super = _createSuper(InstantSearch1);
    function InstantSearch1(options) {
        var _this;
        _classCallCheck(this, InstantSearch1);
        _this = _super.call(this);
        _defineProperty(_assertThisInitialized(_this), "client", void 0);
        _defineProperty(_assertThisInitialized(_this), "indexName", void 0);
        _defineProperty(_assertThisInitialized(_this), "insightsClient", void 0);
        _defineProperty(_assertThisInitialized(_this), "onStateChange", null);
        _defineProperty(_assertThisInitialized(_this), "helper", void 0);
        _defineProperty(_assertThisInitialized(_this), "mainHelper", void 0);
        _defineProperty(_assertThisInitialized(_this), "mainIndex", void 0);
        _defineProperty(_assertThisInitialized(_this), "started", void 0);
        _defineProperty(_assertThisInitialized(_this), "templatesConfig", void 0);
        _defineProperty(_assertThisInitialized(_this), "renderState", {
        });
        _defineProperty(_assertThisInitialized(_this), "_stalledSearchDelay", void 0);
        _defineProperty(_assertThisInitialized(_this), "_searchStalledTimer", void 0);
        _defineProperty(_assertThisInitialized(_this), "_isSearchStalled", void 0);
        _defineProperty(_assertThisInitialized(_this), "_initialUiState", void 0);
        _defineProperty(_assertThisInitialized(_this), "_initialResults", void 0);
        _defineProperty(_assertThisInitialized(_this), "_createURL", void 0);
        _defineProperty(_assertThisInitialized(_this), "_searchFunction", void 0);
        _defineProperty(_assertThisInitialized(_this), "_mainHelperSearch", void 0);
        _defineProperty(_assertThisInitialized(_this), "middleware", []);
        _defineProperty(_assertThisInitialized(_this), "sendEventToInsights", void 0);
        _defineProperty(_assertThisInitialized(_this), "scheduleSearch", _indexJs1.defer(function() {
            if (_this.started) _this.mainHelper.search();
        }));
        _defineProperty(_assertThisInitialized(_this), "scheduleRender", _indexJs1.defer(function() {
            if (!_this.mainHelper.hasPendingRequests()) {
                clearTimeout(_this._searchStalledTimer);
                _this._searchStalledTimer = null;
                _this._isSearchStalled = false;
            }
            _this.mainIndex.render({
                instantSearchInstance: _assertThisInitialized(_this)
            });
            _this.emit('render');
        }));
        _defineProperty(_assertThisInitialized(_this), "onInternalStateChange", _indexJs1.defer(function() {
            var nextUiState = _this.mainIndex.getWidgetUiState({
            });
            _this.middleware.forEach(function(_ref) {
                var instance = _ref.instance;
                instance.onStateChange({
                    uiState: nextUiState
                });
            });
        }));
        var _options$indexName = options.indexName, indexName = _options$indexName === void 0 ? null : _options$indexName, numberLocale = options.numberLocale, _options$initialUiSta = options.initialUiState, initialUiState = _options$initialUiSta === void 0 ? {
        } : _options$initialUiSta, _options$routing = options.routing, routing = _options$routing === void 0 ? null : _options$routing, searchFunction = options.searchFunction, _options$stalledSearc = options.stalledSearchDelay, stalledSearchDelay = _options$stalledSearc === void 0 ? 200 : _options$stalledSearc, _options$searchClient = options.searchClient, searchClient = _options$searchClient === void 0 ? null : _options$searchClient, _options$insightsClie = options.insightsClient, insightsClient = _options$insightsClie === void 0 ? null : _options$insightsClie, _options$onStateChang = options.onStateChange, onStateChange = _options$onStateChang === void 0 ? null : _options$onStateChang;
        if (indexName === null) throw new Error(withUsage('The `indexName` option is required.'));
        if (searchClient === null) throw new Error(withUsage('The `searchClient` option is required.'));
        if (typeof searchClient.search !== 'function') throw new Error("The `searchClient` must implement a `search` method.\n\nSee: https://www.algolia.com/doc/guides/building-search-ui/going-further/backend-search/in-depth/backend-instantsearch/js/");
        if (typeof searchClient.addAlgoliaAgent === 'function') searchClient.addAlgoliaAgent("instantsearch.js (".concat(_versionJsDefault.default, ")"));
        _indexJs1.warning(insightsClient === null, "`insightsClient` property has been deprecated. It is still supported in 4.x releases, but not further. It is replaced by the `insights` middleware.\n\nFor more information, visit https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/click-through-and-conversions/how-to/send-click-and-conversion-events-with-instantsearch/js/");
        if (insightsClient && typeof insightsClient !== 'function') throw new Error(withUsage('The `insightsClient` option should be a function.'));
        _indexJs1.warning(!options.searchParameters, "The `searchParameters` option is deprecated and will not be supported in InstantSearch.js 4.x.\n\nYou can replace it with the `configure` widget:\n\n```\nsearch.addWidgets([\n  configure(".concat(JSON.stringify(options.searchParameters, null, 2), ")\n]);\n```\n\nSee ").concat(_indexJs1.createDocumentationLink({
            name: 'configure'
        })));
        _this.client = searchClient;
        _this.insightsClient = insightsClient;
        _this.indexName = indexName;
        _this.helper = null;
        _this.mainHelper = null;
        _this.mainIndex = _indexJsDefault.default({
            indexName: indexName
        });
        _this.onStateChange = onStateChange;
        _this.started = false;
        _this.templatesConfig = {
            helpers: _createHelpersJsDefault.default({
                numberLocale: numberLocale
            }),
            compileOptions: {
            }
        };
        _this._stalledSearchDelay = stalledSearchDelay;
        _this._searchStalledTimer = null;
        _this._isSearchStalled = false;
        _this._createURL = defaultCreateURL;
        _this._initialUiState = initialUiState;
        _this._initialResults = null;
        if (searchFunction) _this._searchFunction = searchFunction;
        _this.sendEventToInsights = _indexJs1.noop;
        if (routing) {
            var routerOptions = typeof routing === 'boolean' ? undefined : routing;
            _this.use(_createRouterMiddlewareJs.createRouterMiddleware(routerOptions));
        }
        if (_createMetadataMiddlewareJs.isMetadataEnabled()) _this.use(_createMetadataMiddlewareJs.createMetadataMiddleware());
        return _this;
    }
    /**
   * Hooks a middleware into the InstantSearch lifecycle.
   */ _createClass(InstantSearch1, [
        {
            key: "use",
            value: function use() {
                var _this2 = this;
                for(var _len = arguments.length, middleware = new Array(_len), _key = 0; _key < _len; _key++)middleware[_key] = arguments[_key];
                var newMiddlewareList = middleware.map(function(fn) {
                    var newMiddleware = _objectSpread({
                        subscribe: _indexJs1.noop,
                        unsubscribe: _indexJs1.noop,
                        onStateChange: _indexJs1.noop
                    }, fn({
                        instantSearchInstance: _this2
                    }));
                    _this2.middleware.push({
                        creator: fn,
                        instance: newMiddleware
                    });
                    return newMiddleware;
                }); // If the instance has already started, we directly subscribe the
                // middleware so they're notified of changes.
                if (this.started) newMiddlewareList.forEach(function(m) {
                    m.subscribe();
                });
                return this;
            }
        },
        {
            key: "unuse",
            value: function unuse() {
                for(var _len2 = arguments.length, middlewareToUnuse = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)middlewareToUnuse[_key2] = arguments[_key2];
                this.middleware.filter(function(m) {
                    return middlewareToUnuse.includes(m.creator);
                }).forEach(function(m) {
                    return m.instance.unsubscribe();
                });
                this.middleware = this.middleware.filter(function(m) {
                    return !middlewareToUnuse.includes(m.creator);
                });
                return this;
            } // @major we shipped with EXPERIMENTAL_use, but have changed that to just `use` now
        },
        {
            key: "EXPERIMENTAL_use",
            value: function EXPERIMENTAL_use() {
                _indexJs1.warning(false, 'The middleware API is now considered stable, so we recommend replacing `EXPERIMENTAL_use` with `use` before upgrading to the next major version.');
                return this.use.apply(this, arguments);
            }
        },
        {
            key: "addWidget",
            value: function addWidget(widget) {
                _indexJs1.warning(false, 'addWidget will still be supported in 4.x releases, but not further. It is replaced by `addWidgets([widget])`');
                return this.addWidgets([
                    widget
                ]);
            }
        },
        {
            key: "addWidgets",
            value: function addWidgets(widgets) {
                if (!Array.isArray(widgets)) throw new Error(withUsage('The `addWidgets` method expects an array of widgets. Please use `addWidget`.'));
                if (widgets.some(function(widget) {
                    return typeof widget.init !== 'function' && typeof widget.render !== 'function';
                })) throw new Error(withUsage('The widget definition expects a `render` and/or an `init` method.'));
                this.mainIndex.addWidgets(widgets);
                return this;
            }
        },
        {
            key: "removeWidget",
            value: function removeWidget(widget) {
                _indexJs1.warning(false, 'removeWidget will still be supported in 4.x releases, but not further. It is replaced by `removeWidgets([widget])`');
                return this.removeWidgets([
                    widget
                ]);
            }
        },
        {
            key: "removeWidgets",
            value: function removeWidgets(widgets) {
                if (!Array.isArray(widgets)) throw new Error(withUsage('The `removeWidgets` method expects an array of widgets. Please use `removeWidget`.'));
                if (widgets.some(function(widget) {
                    return typeof widget.dispose !== 'function';
                })) throw new Error(withUsage('The widget definition expects a `dispose` method.'));
                this.mainIndex.removeWidgets(widgets);
                return this;
            }
        },
        {
            key: "start",
            value: function start() {
                var _this3 = this;
                if (this.started) throw new Error(withUsage('The `start` method has already been called once.'));
                 // This Helper is used for the queries, we don't care about its state. The
                // states are managed at the `index` level. We use this Helper to create
                // DerivedHelper scoped into the `index` widgets.
                // In Vue InstantSearch' hydrate, a main helper gets set before start, so
                // we need to respect this helper as a way to keep all listeners correct.
                var mainHelper = this.mainHelper || _algoliasearchHelperDefault.default(this.client, this.indexName);
                mainHelper.search = function() {
                    // This solution allows us to keep the exact same API for the users but
                    // under the hood, we have a different implementation. It should be
                    // completely transparent for the rest of the codebase. Only this module
                    // is impacted.
                    return mainHelper.searchOnlyWithDerivedHelpers();
                };
                if (this._searchFunction) {
                    // this client isn't used to actually search, but required for the helper
                    // to not throw errors
                    var fakeClient = {
                        search: function search() {
                            return new Promise(_indexJs1.noop);
                        }
                    };
                    this._mainHelperSearch = mainHelper.search.bind(mainHelper);
                    mainHelper.search = function() {
                        var mainIndexHelper = _this3.mainIndex.getHelper();
                        var searchFunctionHelper = _algoliasearchHelperDefault.default(fakeClient, mainIndexHelper.state.index, mainIndexHelper.state);
                        searchFunctionHelper.once('search', function(_ref2) {
                            var state = _ref2.state;
                            mainIndexHelper.overrideStateWithoutTriggeringChangeEvent(state);
                            _this3._mainHelperSearch();
                        }); // Forward state changes from `searchFunctionHelper` to `mainIndexHelper`
                        searchFunctionHelper.on('change', function(_ref3) {
                            var state = _ref3.state;
                            mainIndexHelper.setState(state);
                        });
                        _this3._searchFunction(searchFunctionHelper);
                        return mainHelper;
                    };
                } // Only the "main" Helper emits the `error` event vs the one for `search`
                // and `results` that are also emitted on the derived one.
                mainHelper.on('error', function(_ref4) {
                    var error = _ref4.error;
                    // If an error is emitted, it is re-thrown by events. In previous versions
                    // we emitted {error}, which is thrown as:
                    // "Uncaught, unspecified \"error\" event. ([object Object])"
                    // To avoid breaking changes, we make the error available in both
                    // `error` and `error.error`
                    // @MAJOR emit only error
                    error.error = error;
                    _this3.emit('error', error);
                });
                this.mainHelper = mainHelper;
                this.middleware.forEach(function(_ref5) {
                    var instance = _ref5.instance;
                    instance.subscribe();
                });
                this.mainIndex.init({
                    instantSearchInstance: this,
                    parent: null,
                    uiState: this._initialUiState
                });
                if (this._initialResults) {
                    var originalScheduleSearch = this.scheduleSearch; // We don't schedule a first search when initial results are provided
                    // because we already have the results to render. This skips the initial
                    // network request on the browser on `start`.
                    this.scheduleSearch = _indexJs1.defer(_indexJs1.noop); // We also skip the initial network request when widgets are dynamically
                    // added in the first tick (that's the case in all the framework-based flavors).
                    // When we add a widget to `index`, it calls `scheduleSearch`. We can rely
                    // on our `defer` util to restore the original `scheduleSearch` value once
                    // widgets are added to hook back to the regular lifecycle.
                    _indexJs1.defer(function() {
                        _this3.scheduleSearch = originalScheduleSearch;
                    })();
                } else this.scheduleSearch();
                 // Keep the previous reference for legacy purpose, some pattern use
                // the direct Helper access `search.helper` (e.g multi-index).
                this.helper = this.mainIndex.getHelper(); // track we started the search if we add more widgets,
                // to init them directly after add
                this.started = true;
            }
        },
        {
            key: "dispose",
            value: function dispose() {
                this.scheduleSearch.cancel();
                this.scheduleRender.cancel();
                clearTimeout(this._searchStalledTimer);
                this.removeWidgets(this.mainIndex.getWidgets());
                this.mainIndex.dispose(); // You can not start an instance two times, therefore a disposed instance
                // needs to set started as false otherwise this can not be restarted at a
                // later point.
                this.started = false; // The helper needs to be reset to perform the next search from a fresh state.
                // If not reset, it would use the state stored before calling `dispose()`.
                this.removeAllListeners();
                this.mainHelper.removeAllListeners();
                this.mainHelper = null;
                this.helper = null;
                this.middleware.forEach(function(_ref6) {
                    var instance = _ref6.instance;
                    instance.unsubscribe();
                });
            }
        },
        {
            key: "scheduleStalledRender",
            value: function scheduleStalledRender() {
                var _this4 = this;
                if (!this._searchStalledTimer) this._searchStalledTimer = setTimeout(function() {
                    _this4._isSearchStalled = true;
                    _this4.scheduleRender();
                }, this._stalledSearchDelay);
            }
        },
        {
            key: "setUiState",
            value: function setUiState(uiState) {
                if (!this.mainHelper) throw new Error(withUsage('The `start` method needs to be called before `setUiState`.'));
                 // We refresh the index UI state to update the local UI state that the
                // main index passes to the function form of `setUiState`.
                this.mainIndex.refreshUiState();
                var nextUiState = typeof uiState === 'function' ? uiState(this.mainIndex.getWidgetUiState({
                })) : uiState;
                var setIndexHelperState1 = function setIndexHelperState(indexWidget) {
                    var nextIndexUiState = nextUiState[indexWidget.getIndexId()] || {
                    };
                    _indexJs1.checkIndexUiState({
                        index: indexWidget,
                        indexUiState: nextIndexUiState
                    });
                    indexWidget.getHelper().setState(indexWidget.getWidgetSearchParameters(indexWidget.getHelper().state, {
                        uiState: nextIndexUiState
                    }));
                    indexWidget.getWidgets().filter(_indexJs.isIndexWidget).forEach(setIndexHelperState);
                };
                setIndexHelperState1(this.mainIndex);
                this.scheduleSearch();
                this.onInternalStateChange();
            }
        },
        {
            key: "getUiState",
            value: function getUiState() {
                if (this.started) // We refresh the index UI state to make sure changes from `refine` are taken in account
                this.mainIndex.refreshUiState();
                return this.mainIndex.getWidgetUiState({
                });
            }
        },
        {
            key: "createURL",
            value: function createURL() {
                var nextState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
                };
                if (!this.started) throw new Error(withUsage('The `start` method needs to be called before `createURL`.'));
                return this._createURL(nextState);
            }
        },
        {
            key: "refresh",
            value: function refresh() {
                if (!this.mainHelper) throw new Error(withUsage('The `start` method needs to be called before `refresh`.'));
                this.mainHelper.clearCache().search();
            }
        }
    ]);
    return InstantSearch1;
}(_eventsDefault.default);
exports.default = InstantSearch;

},{"algoliasearch-helper":"jGqjt","@algolia/events":"euNDO","../widgets/index/index.js":"kdZTz","./version.js":"hkkLK","./createHelpers.js":"8IHo3","./utils/index.js":"etVYs","../middlewares/createRouterMiddleware.js":"4mKEu","../middlewares/createMetadataMiddleware.js":"lOLJd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jGqjt":[function(require,module,exports) {
'use strict';
var AlgoliaSearchHelper = require('./src/algoliasearch.helper');
var SearchParameters = require('./src/SearchParameters');
var SearchResults = require('./src/SearchResults');
/**
 * The algoliasearchHelper module is the function that will let its
 * contains everything needed to use the Algoliasearch
 * Helper. It is a also a function that instanciate the helper.
 * To use the helper, you also need the Algolia JS client v3.
 * @example
 * //using the UMD build
 * var client = algoliasearch('latency', '6be0576ff61c053d5f9a3225e2a90f76');
 * var helper = algoliasearchHelper(client, 'bestbuy', {
 *   facets: ['shipping'],
 *   disjunctiveFacets: ['category']
 * });
 * helper.on('result', function(event) {
 *   console.log(event.results);
 * });
 * helper
 *   .toggleFacetRefinement('category', 'Movies & TV Shows')
 *   .toggleFacetRefinement('shipping', 'Free shipping')
 *   .search();
 * @example
 * // The helper is an event emitter using the node API
 * helper.on('result', updateTheResults);
 * helper.once('result', updateTheResults);
 * helper.removeListener('result', updateTheResults);
 * helper.removeAllListeners('result');
 * @module algoliasearchHelper
 * @param  {AlgoliaSearch} client an AlgoliaSearch client
 * @param  {string} index the name of the index to query
 * @param  {SearchParameters|object} opts an object defining the initial config of the search. It doesn't have to be a {SearchParameters}, just an object containing the properties you need from it.
 * @return {AlgoliaSearchHelper}
 */ function algoliasearchHelper(client, index, opts) {
    return new AlgoliaSearchHelper(client, index, opts);
}
/**
 * The version currently used
 * @member module:algoliasearchHelper.version
 * @type {number}
 */ algoliasearchHelper.version = require('./src/version.js');
/**
 * Constructor for the Helper.
 * @member module:algoliasearchHelper.AlgoliaSearchHelper
 * @type {AlgoliaSearchHelper}
 */ algoliasearchHelper.AlgoliaSearchHelper = AlgoliaSearchHelper;
/**
 * Constructor for the object containing all the parameters of the search.
 * @member module:algoliasearchHelper.SearchParameters
 * @type {SearchParameters}
 */ algoliasearchHelper.SearchParameters = SearchParameters;
/**
 * Constructor for the object containing the results of the search.
 * @member module:algoliasearchHelper.SearchResults
 * @type {SearchResults}
 */ algoliasearchHelper.SearchResults = SearchResults;
module.exports = algoliasearchHelper;

},{"./src/algoliasearch.helper":"jewxp","./src/SearchParameters":"dQfwH","./src/SearchResults":"lUGU6","./src/version.js":"cs17k"}],"jewxp":[function(require,module,exports) {
'use strict';
var SearchParameters = require('./SearchParameters');
var SearchResults = require('./SearchResults');
var DerivedHelper = require('./DerivedHelper');
var requestBuilder = require('./requestBuilder');
var EventEmitter = require('@algolia/events');
var inherits = require('./functions/inherits');
var objectHasKeys = require('./functions/objectHasKeys');
var omit = require('./functions/omit');
var merge = require('./functions/merge');
var version = require('./version');
/**
 * Event triggered when a parameter is set or updated
 * @event AlgoliaSearchHelper#event:change
 * @property {object} event
 * @property {SearchParameters} event.state the current parameters with the latest changes applied
 * @property {SearchResults} event.results the previous results received from Algolia. `null` before the first request
 * @example
 * helper.on('change', function(event) {
 *   console.log('The parameters have changed');
 * });
 */ /**
 * Event triggered when a main search is sent to Algolia
 * @event AlgoliaSearchHelper#event:search
 * @property {object} event
 * @property {SearchParameters} event.state the parameters used for this search
 * @property {SearchResults} event.results the results from the previous search. `null` if it is the first search.
 * @example
 * helper.on('search', function(event) {
 *   console.log('Search sent');
 * });
 */ /**
 * Event triggered when a search using `searchForFacetValues` is sent to Algolia
 * @event AlgoliaSearchHelper#event:searchForFacetValues
 * @property {object} event
 * @property {SearchParameters} event.state the parameters used for this search it is the first search.
 * @property {string} event.facet the facet searched into
 * @property {string} event.query the query used to search in the facets
 * @example
 * helper.on('searchForFacetValues', function(event) {
 *   console.log('searchForFacetValues sent');
 * });
 */ /**
 * Event triggered when a search using `searchOnce` is sent to Algolia
 * @event AlgoliaSearchHelper#event:searchOnce
 * @property {object} event
 * @property {SearchParameters} event.state the parameters used for this search it is the first search.
 * @example
 * helper.on('searchOnce', function(event) {
 *   console.log('searchOnce sent');
 * });
 */ /**
 * Event triggered when the results are retrieved from Algolia
 * @event AlgoliaSearchHelper#event:result
 * @property {object} event
 * @property {SearchResults} event.results the results received from Algolia
 * @property {SearchParameters} event.state the parameters used to query Algolia. Those might be different from the one in the helper instance (for example if the network is unreliable).
 * @example
 * helper.on('result', function(event) {
 *   console.log('Search results received');
 * });
 */ /**
 * Event triggered when Algolia sends back an error. For example, if an unknown parameter is
 * used, the error can be caught using this event.
 * @event AlgoliaSearchHelper#event:error
 * @property {object} event
 * @property {Error} event.error the error returned by the Algolia.
 * @example
 * helper.on('error', function(event) {
 *   console.log('Houston we got a problem.');
 * });
 */ /**
 * Event triggered when the queue of queries have been depleted (with any result or outdated queries)
 * @event AlgoliaSearchHelper#event:searchQueueEmpty
 * @example
 * helper.on('searchQueueEmpty', function() {
 *   console.log('No more search pending');
 *   // This is received before the result event if we're not expecting new results
 * });
 *
 * helper.search();
 */ /**
 * Initialize a new AlgoliaSearchHelper
 * @class
 * @classdesc The AlgoliaSearchHelper is a class that ease the management of the
 * search. It provides an event based interface for search callbacks:
 *  - change: when the internal search state is changed.
 *    This event contains a {@link SearchParameters} object and the
 *    {@link SearchResults} of the last result if any.
 *  - search: when a search is triggered using the `search()` method.
 *  - result: when the response is retrieved from Algolia and is processed.
 *    This event contains a {@link SearchResults} object and the
 *    {@link SearchParameters} corresponding to this answer.
 *  - error: when the response is an error. This event contains the error returned by the server.
 * @param  {AlgoliaSearch} client an AlgoliaSearch client
 * @param  {string} index the index name to query
 * @param  {SearchParameters | object} options an object defining the initial
 * config of the search. It doesn't have to be a {SearchParameters},
 * just an object containing the properties you need from it.
 */ function AlgoliaSearchHelper(client, index, options) {
    if (typeof client.addAlgoliaAgent === 'function') client.addAlgoliaAgent('JS Helper (' + version + ')');
    this.setClient(client);
    var opts = options || {
    };
    opts.index = index;
    this.state = SearchParameters.make(opts);
    this.lastResults = null;
    this._queryId = 0;
    this._lastQueryIdReceived = -1;
    this.derivedHelpers = [];
    this._currentNbQueries = 0;
}
inherits(AlgoliaSearchHelper, EventEmitter);
/**
 * Start the search with the parameters set in the state. When the
 * method is called, it triggers a `search` event. The results will
 * be available through the `result` event. If an error occurs, an
 * `error` will be fired instead.
 * @return {AlgoliaSearchHelper}
 * @fires search
 * @fires result
 * @fires error
 * @chainable
 */ AlgoliaSearchHelper.prototype.search = function() {
    this._search({
        onlyWithDerivedHelpers: false
    });
    return this;
};
AlgoliaSearchHelper.prototype.searchOnlyWithDerivedHelpers = function() {
    this._search({
        onlyWithDerivedHelpers: true
    });
    return this;
};
/**
 * Gets the search query parameters that would be sent to the Algolia Client
 * for the hits
 * @return {object} Query Parameters
 */ AlgoliaSearchHelper.prototype.getQuery = function() {
    var state = this.state;
    return requestBuilder._getHitsSearchParams(state);
};
/**
 * Start a search using a modified version of the current state. This method does
 * not trigger the helper lifecycle and does not modify the state kept internally
 * by the helper. This second aspect means that the next search call will be the
 * same as a search call before calling searchOnce.
 * @param {object} options can contain all the parameters that can be set to SearchParameters
 * plus the index
 * @param {function} [callback] optional callback executed when the response from the
 * server is back.
 * @return {promise|undefined} if a callback is passed the method returns undefined
 * otherwise it returns a promise containing an object with two keys :
 *  - content with a SearchResults
 *  - state with the state used for the query as a SearchParameters
 * @example
 * // Changing the number of records returned per page to 1
 * // This example uses the callback API
 * var state = helper.searchOnce({hitsPerPage: 1},
 *   function(error, content, state) {
 *     // if an error occurred it will be passed in error, otherwise its value is null
 *     // content contains the results formatted as a SearchResults
 *     // state is the instance of SearchParameters used for this search
 *   });
 * @example
 * // Changing the number of records returned per page to 1
 * // This example uses the promise API
 * var state1 = helper.searchOnce({hitsPerPage: 1})
 *                 .then(promiseHandler);
 *
 * function promiseHandler(res) {
 *   // res contains
 *   // {
 *   //   content : SearchResults
 *   //   state   : SearchParameters (the one used for this specific search)
 *   // }
 * }
 */ AlgoliaSearchHelper.prototype.searchOnce = function(options, cb) {
    var tempState = !options ? this.state : this.state.setQueryParameters(options);
    var queries = requestBuilder._getQueries(tempState.index, tempState);
    var self = this;
    this._currentNbQueries++;
    this.emit('searchOnce', {
        state: tempState
    });
    if (cb) {
        this.client.search(queries).then(function(content) {
            self._currentNbQueries--;
            if (self._currentNbQueries === 0) self.emit('searchQueueEmpty');
            cb(null, new SearchResults(tempState, content.results), tempState);
        }).catch(function(err) {
            self._currentNbQueries--;
            if (self._currentNbQueries === 0) self.emit('searchQueueEmpty');
            cb(err, null, tempState);
        });
        return undefined;
    }
    return this.client.search(queries).then(function(content) {
        self._currentNbQueries--;
        if (self._currentNbQueries === 0) self.emit('searchQueueEmpty');
        return {
            content: new SearchResults(tempState, content.results),
            state: tempState,
            _originalResponse: content
        };
    }, function(e) {
        self._currentNbQueries--;
        if (self._currentNbQueries === 0) self.emit('searchQueueEmpty');
        throw e;
    });
};
/**
 * Start the search for answers with the parameters set in the state.
 * This method returns a promise.
 * @param {Object} options - the options for answers API call
 * @param {string[]} options.attributesForPrediction - Attributes to use for predictions. If empty, `searchableAttributes` is used instead.
 * @param {string[]} options.queryLanguages - The languages in the query. Currently only supports ['en'].
 * @param {number} options.nbHits - Maximum number of answers to retrieve from the Answers Engine. Cannot be greater than 1000.
 *
 * @return {promise} the answer results
 */ AlgoliaSearchHelper.prototype.findAnswers = function(options) {
    var state = this.state;
    var derivedHelper = this.derivedHelpers[0];
    if (!derivedHelper) return Promise.resolve([]);
    var derivedState = derivedHelper.getModifiedState(state);
    var data = merge({
        attributesForPrediction: options.attributesForPrediction,
        nbHits: options.nbHits
    }, {
        params: omit(requestBuilder._getHitsSearchParams(derivedState), [
            'attributesToSnippet',
            'hitsPerPage',
            'restrictSearchableAttributes',
            'snippetEllipsisText' // FIXME remove this line once the engine is fixed.
        ])
    });
    var errorMessage = 'search for answers was called, but this client does not have a function client.initIndex(index).findAnswers';
    if (typeof this.client.initIndex !== 'function') throw new Error(errorMessage);
    var index = this.client.initIndex(derivedState.index);
    if (typeof index.findAnswers !== 'function') throw new Error(errorMessage);
    return index.findAnswers(derivedState.query, options.queryLanguages, data);
};
/**
 * Structure of each result when using
 * [`searchForFacetValues()`](reference.html#AlgoliaSearchHelper#searchForFacetValues)
 * @typedef FacetSearchHit
 * @type {object}
 * @property {string} value the facet value
 * @property {string} highlighted the facet value highlighted with the query string
 * @property {number} count number of occurrence of this facet value
 * @property {boolean} isRefined true if the value is already refined
 */ /**
 * Structure of the data resolved by the
 * [`searchForFacetValues()`](reference.html#AlgoliaSearchHelper#searchForFacetValues)
 * promise.
 * @typedef FacetSearchResult
 * @type {object}
 * @property {FacetSearchHit} facetHits the results for this search for facet values
 * @property {number} processingTimeMS time taken by the query inside the engine
 */ /**
 * Search for facet values based on an query and the name of a faceted attribute. This
 * triggers a search and will return a promise. On top of using the query, it also sends
 * the parameters from the state so that the search is narrowed down to only the possible values.
 *
 * See the description of [FacetSearchResult](reference.html#FacetSearchResult)
 * @param {string} facet the name of the faceted attribute
 * @param {string} query the string query for the search
 * @param {number} [maxFacetHits] the maximum number values returned. Should be > 0 and <= 100
 * @param {object} [userState] the set of custom parameters to use on top of the current state. Setting a property to `undefined` removes
 * it in the generated query.
 * @return {promise.<FacetSearchResult>} the results of the search
 */ AlgoliaSearchHelper.prototype.searchForFacetValues = function(facet, query, maxFacetHits, userState) {
    var clientHasSFFV = typeof this.client.searchForFacetValues === 'function';
    if (!clientHasSFFV && typeof this.client.initIndex !== 'function') throw new Error('search for facet values (searchable) was called, but this client does not have a function client.searchForFacetValues or client.initIndex(index).searchForFacetValues');
    var state = this.state.setQueryParameters(userState || {
    });
    var isDisjunctive = state.isDisjunctiveFacet(facet);
    var algoliaQuery = requestBuilder.getSearchForFacetQuery(facet, query, maxFacetHits, state);
    this._currentNbQueries++;
    var self = this;
    this.emit('searchForFacetValues', {
        state: state,
        facet: facet,
        query: query
    });
    var searchForFacetValuesPromise = clientHasSFFV ? this.client.searchForFacetValues([
        {
            indexName: state.index,
            params: algoliaQuery
        }
    ]) : this.client.initIndex(state.index).searchForFacetValues(algoliaQuery);
    return searchForFacetValuesPromise.then(function addIsRefined(content) {
        self._currentNbQueries--;
        if (self._currentNbQueries === 0) self.emit('searchQueueEmpty');
        content = Array.isArray(content) ? content[0] : content;
        content.facetHits.forEach(function(f) {
            f.isRefined = isDisjunctive ? state.isDisjunctiveFacetRefined(facet, f.value) : state.isFacetRefined(facet, f.value);
        });
        return content;
    }, function(e) {
        self._currentNbQueries--;
        if (self._currentNbQueries === 0) self.emit('searchQueueEmpty');
        throw e;
    });
};
/**
 * Sets the text query used for the search.
 *
 * This method resets the current page to 0.
 * @param  {string} q the user query
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.setQuery = function(q) {
    this._change({
        state: this.state.resetPage().setQuery(q),
        isPageReset: true
    });
    return this;
};
/**
 * Remove all the types of refinements except tags. A string can be provided to remove
 * only the refinements of a specific attribute. For more advanced use case, you can
 * provide a function instead. This function should follow the
 * [clearCallback definition](#SearchParameters.clearCallback).
 *
 * This method resets the current page to 0.
 * @param {string} [name] optional name of the facet / attribute on which we want to remove all refinements
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 * @example
 * // Removing all the refinements
 * helper.clearRefinements().search();
 * @example
 * // Removing all the filters on a the category attribute.
 * helper.clearRefinements('category').search();
 * @example
 * // Removing only the exclude filters on the category facet.
 * helper.clearRefinements(function(value, attribute, type) {
 *   return type === 'exclude' && attribute === 'category';
 * }).search();
 */ AlgoliaSearchHelper.prototype.clearRefinements = function(name) {
    this._change({
        state: this.state.resetPage().clearRefinements(name),
        isPageReset: true
    });
    return this;
};
/**
 * Remove all the tag filters.
 *
 * This method resets the current page to 0.
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.clearTags = function() {
    this._change({
        state: this.state.resetPage().clearTags(),
        isPageReset: true
    });
    return this;
};
/**
 * Adds a disjunctive filter to a faceted attribute with the `value` provided. If the
 * filter is already set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value (will be converted to string)
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.addDisjunctiveFacetRefinement = function(facet, value) {
    this._change({
        state: this.state.resetPage().addDisjunctiveFacetRefinement(facet, value),
        isPageReset: true
    });
    return this;
};
/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#addDisjunctiveFacetRefinement}
 */ AlgoliaSearchHelper.prototype.addDisjunctiveRefine = function() {
    return this.addDisjunctiveFacetRefinement.apply(this, arguments);
};
/**
 * Adds a refinement on a hierarchical facet. It will throw
 * an exception if the facet is not defined or if the facet
 * is already refined.
 *
 * This method resets the current page to 0.
 * @param {string} facet the facet name
 * @param {string} path the hierarchical facet path
 * @return {AlgoliaSearchHelper}
 * @throws Error if the facet is not defined or if the facet is refined
 * @chainable
 * @fires change
 */ AlgoliaSearchHelper.prototype.addHierarchicalFacetRefinement = function(facet, value) {
    this._change({
        state: this.state.resetPage().addHierarchicalFacetRefinement(facet, value),
        isPageReset: true
    });
    return this;
};
/**
 * Adds a an numeric filter to an attribute with the `operator` and `value` provided. If the
 * filter is already set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param  {string} attribute the attribute on which the numeric filter applies
 * @param  {string} operator the operator of the filter
 * @param  {number} value the value of the filter
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.addNumericRefinement = function(attribute, operator, value) {
    this._change({
        state: this.state.resetPage().addNumericRefinement(attribute, operator, value),
        isPageReset: true
    });
    return this;
};
/**
 * Adds a filter to a faceted attribute with the `value` provided. If the
 * filter is already set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value (will be converted to string)
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.addFacetRefinement = function(facet, value) {
    this._change({
        state: this.state.resetPage().addFacetRefinement(facet, value),
        isPageReset: true
    });
    return this;
};
/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#addFacetRefinement}
 */ AlgoliaSearchHelper.prototype.addRefine = function() {
    return this.addFacetRefinement.apply(this, arguments);
};
/**
 * Adds a an exclusion filter to a faceted attribute with the `value` provided. If the
 * filter is already set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value (will be converted to string)
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.addFacetExclusion = function(facet, value) {
    this._change({
        state: this.state.resetPage().addExcludeRefinement(facet, value),
        isPageReset: true
    });
    return this;
};
/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#addFacetExclusion}
 */ AlgoliaSearchHelper.prototype.addExclude = function() {
    return this.addFacetExclusion.apply(this, arguments);
};
/**
 * Adds a tag filter with the `tag` provided. If the
 * filter is already set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param {string} tag the tag to add to the filter
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.addTag = function(tag) {
    this._change({
        state: this.state.resetPage().addTagRefinement(tag),
        isPageReset: true
    });
    return this;
};
/**
 * Removes an numeric filter to an attribute with the `operator` and `value` provided. If the
 * filter is not set, it doesn't change the filters.
 *
 * Some parameters are optional, triggering different behavior:
 *  - if the value is not provided, then all the numeric value will be removed for the
 *  specified attribute/operator couple.
 *  - if the operator is not provided either, then all the numeric filter on this attribute
 *  will be removed.
 *
 * This method resets the current page to 0.
 * @param  {string} attribute the attribute on which the numeric filter applies
 * @param  {string} [operator] the operator of the filter
 * @param  {number} [value] the value of the filter
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.removeNumericRefinement = function(attribute, operator, value) {
    this._change({
        state: this.state.resetPage().removeNumericRefinement(attribute, operator, value),
        isPageReset: true
    });
    return this;
};
/**
 * Removes a disjunctive filter to a faceted attribute with the `value` provided. If the
 * filter is not set, it doesn't change the filters.
 *
 * If the value is omitted, then this method will remove all the filters for the
 * attribute.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} [value] the associated value
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.removeDisjunctiveFacetRefinement = function(facet, value) {
    this._change({
        state: this.state.resetPage().removeDisjunctiveFacetRefinement(facet, value),
        isPageReset: true
    });
    return this;
};
/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#removeDisjunctiveFacetRefinement}
 */ AlgoliaSearchHelper.prototype.removeDisjunctiveRefine = function() {
    return this.removeDisjunctiveFacetRefinement.apply(this, arguments);
};
/**
 * Removes the refinement set on a hierarchical facet.
 * @param {string} facet the facet name
 * @return {AlgoliaSearchHelper}
 * @throws Error if the facet is not defined or if the facet is not refined
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.removeHierarchicalFacetRefinement = function(facet) {
    this._change({
        state: this.state.resetPage().removeHierarchicalFacetRefinement(facet),
        isPageReset: true
    });
    return this;
};
/**
 * Removes a filter to a faceted attribute with the `value` provided. If the
 * filter is not set, it doesn't change the filters.
 *
 * If the value is omitted, then this method will remove all the filters for the
 * attribute.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} [value] the associated value
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.removeFacetRefinement = function(facet, value) {
    this._change({
        state: this.state.resetPage().removeFacetRefinement(facet, value),
        isPageReset: true
    });
    return this;
};
/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#removeFacetRefinement}
 */ AlgoliaSearchHelper.prototype.removeRefine = function() {
    return this.removeFacetRefinement.apply(this, arguments);
};
/**
 * Removes an exclusion filter to a faceted attribute with the `value` provided. If the
 * filter is not set, it doesn't change the filters.
 *
 * If the value is omitted, then this method will remove all the filters for the
 * attribute.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} [value] the associated value
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.removeFacetExclusion = function(facet, value) {
    this._change({
        state: this.state.resetPage().removeExcludeRefinement(facet, value),
        isPageReset: true
    });
    return this;
};
/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#removeFacetExclusion}
 */ AlgoliaSearchHelper.prototype.removeExclude = function() {
    return this.removeFacetExclusion.apply(this, arguments);
};
/**
 * Removes a tag filter with the `tag` provided. If the
 * filter is not set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param {string} tag tag to remove from the filter
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.removeTag = function(tag) {
    this._change({
        state: this.state.resetPage().removeTagRefinement(tag),
        isPageReset: true
    });
    return this;
};
/**
 * Adds or removes an exclusion filter to a faceted attribute with the `value` provided. If
 * the value is set then it removes it, otherwise it adds the filter.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.toggleFacetExclusion = function(facet, value) {
    this._change({
        state: this.state.resetPage().toggleExcludeFacetRefinement(facet, value),
        isPageReset: true
    });
    return this;
};
/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#toggleFacetExclusion}
 */ AlgoliaSearchHelper.prototype.toggleExclude = function() {
    return this.toggleFacetExclusion.apply(this, arguments);
};
/**
 * Adds or removes a filter to a faceted attribute with the `value` provided. If
 * the value is set then it removes it, otherwise it adds the filter.
 *
 * This method can be used for conjunctive, disjunctive and hierarchical filters.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value
 * @return {AlgoliaSearchHelper}
 * @throws Error will throw an error if the facet is not declared in the settings of the helper
 * @fires change
 * @chainable
 * @deprecated since version 2.19.0, see {@link AlgoliaSearchHelper#toggleFacetRefinement}
 */ AlgoliaSearchHelper.prototype.toggleRefinement = function(facet, value) {
    return this.toggleFacetRefinement(facet, value);
};
/**
 * Adds or removes a filter to a faceted attribute with the `value` provided. If
 * the value is set then it removes it, otherwise it adds the filter.
 *
 * This method can be used for conjunctive, disjunctive and hierarchical filters.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value
 * @return {AlgoliaSearchHelper}
 * @throws Error will throw an error if the facet is not declared in the settings of the helper
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.toggleFacetRefinement = function(facet, value) {
    this._change({
        state: this.state.resetPage().toggleFacetRefinement(facet, value),
        isPageReset: true
    });
    return this;
};
/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#toggleFacetRefinement}
 */ AlgoliaSearchHelper.prototype.toggleRefine = function() {
    return this.toggleFacetRefinement.apply(this, arguments);
};
/**
 * Adds or removes a tag filter with the `value` provided. If
 * the value is set then it removes it, otherwise it adds the filter.
 *
 * This method resets the current page to 0.
 * @param {string} tag tag to remove or add
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.toggleTag = function(tag) {
    this._change({
        state: this.state.resetPage().toggleTagRefinement(tag),
        isPageReset: true
    });
    return this;
};
/**
 * Increments the page number by one.
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 * @example
 * helper.setPage(0).nextPage().getPage();
 * // returns 1
 */ AlgoliaSearchHelper.prototype.nextPage = function() {
    var page = this.state.page || 0;
    return this.setPage(page + 1);
};
/**
 * Decrements the page number by one.
 * @fires change
 * @return {AlgoliaSearchHelper}
 * @chainable
 * @example
 * helper.setPage(1).previousPage().getPage();
 * // returns 0
 */ AlgoliaSearchHelper.prototype.previousPage = function() {
    var page = this.state.page || 0;
    return this.setPage(page - 1);
};
/**
 * @private
 */ function setCurrentPage(page) {
    if (page < 0) throw new Error('Page requested below 0.');
    this._change({
        state: this.state.setPage(page),
        isPageReset: false
    });
    return this;
}
/**
 * Change the current page
 * @deprecated
 * @param  {number} page The page number
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.setCurrentPage = setCurrentPage;
/**
 * Updates the current page.
 * @function
 * @param  {number} page The page number
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.setPage = setCurrentPage;
/**
 * Updates the name of the index that will be targeted by the query.
 *
 * This method resets the current page to 0.
 * @param {string} name the index name
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.setIndex = function(name) {
    this._change({
        state: this.state.resetPage().setIndex(name),
        isPageReset: true
    });
    return this;
};
/**
 * Update a parameter of the search. This method reset the page
 *
 * The complete list of parameters is available on the
 * [Algolia website](https://www.algolia.com/doc/rest#query-an-index).
 * The most commonly used parameters have their own [shortcuts](#query-parameters-shortcuts)
 * or benefit from higher-level APIs (all the kind of filters and facets have their own API)
 *
 * This method resets the current page to 0.
 * @param {string} parameter name of the parameter to update
 * @param {any} value new value of the parameter
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 * @example
 * helper.setQueryParameter('hitsPerPage', 20).search();
 */ AlgoliaSearchHelper.prototype.setQueryParameter = function(parameter, value) {
    this._change({
        state: this.state.resetPage().setQueryParameter(parameter, value),
        isPageReset: true
    });
    return this;
};
/**
 * Set the whole state (warning: will erase previous state)
 * @param {SearchParameters} newState the whole new state
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.setState = function(newState) {
    this._change({
        state: SearchParameters.make(newState),
        isPageReset: false
    });
    return this;
};
/**
 * Override the current state without triggering a change event.
 * Do not use this method unless you know what you are doing. (see the example
 * for a legit use case)
 * @param {SearchParameters} newState the whole new state
 * @return {AlgoliaSearchHelper}
 * @example
 *  helper.on('change', function(state){
 *    // In this function you might want to find a way to store the state in the url/history
 *    updateYourURL(state)
 *  })
 *  window.onpopstate = function(event){
 *    // This is naive though as you should check if the state is really defined etc.
 *    helper.overrideStateWithoutTriggeringChangeEvent(event.state).search()
 *  }
 * @chainable
 */ AlgoliaSearchHelper.prototype.overrideStateWithoutTriggeringChangeEvent = function(newState) {
    this.state = new SearchParameters(newState);
    return this;
};
/**
 * Check if an attribute has any numeric, conjunctive, disjunctive or hierarchical filters.
 * @param {string} attribute the name of the attribute
 * @return {boolean} true if the attribute is filtered by at least one value
 * @example
 * // hasRefinements works with numeric, conjunctive, disjunctive and hierarchical filters
 * helper.hasRefinements('price'); // false
 * helper.addNumericRefinement('price', '>', 100);
 * helper.hasRefinements('price'); // true
 *
 * helper.hasRefinements('color'); // false
 * helper.addFacetRefinement('color', 'blue');
 * helper.hasRefinements('color'); // true
 *
 * helper.hasRefinements('material'); // false
 * helper.addDisjunctiveFacetRefinement('material', 'plastic');
 * helper.hasRefinements('material'); // true
 *
 * helper.hasRefinements('categories'); // false
 * helper.toggleFacetRefinement('categories', 'kitchen > knife');
 * helper.hasRefinements('categories'); // true
 *
 */ AlgoliaSearchHelper.prototype.hasRefinements = function(attribute) {
    if (objectHasKeys(this.state.getNumericRefinements(attribute))) return true;
    else if (this.state.isConjunctiveFacet(attribute)) return this.state.isFacetRefined(attribute);
    else if (this.state.isDisjunctiveFacet(attribute)) return this.state.isDisjunctiveFacetRefined(attribute);
    else if (this.state.isHierarchicalFacet(attribute)) return this.state.isHierarchicalFacetRefined(attribute);
    // there's currently no way to know that the user did call `addNumericRefinement` at some point
    // thus we cannot distinguish if there once was a numeric refinement that was cleared
    // so we will return false in every other situations to be consistent
    // while what we should do here is throw because we did not find the attribute in any type
    // of refinement
    return false;
};
/**
 * Check if a value is excluded for a specific faceted attribute. If the value
 * is omitted then the function checks if there is any excluding refinements.
 *
 * @param  {string}  facet name of the attribute for used for faceting
 * @param  {string}  [value] optional value. If passed will test that this value
   * is filtering the given facet.
 * @return {boolean} true if refined
 * @example
 * helper.isExcludeRefined('color'); // false
 * helper.isExcludeRefined('color', 'blue') // false
 * helper.isExcludeRefined('color', 'red') // false
 *
 * helper.addFacetExclusion('color', 'red');
 *
 * helper.isExcludeRefined('color'); // true
 * helper.isExcludeRefined('color', 'blue') // false
 * helper.isExcludeRefined('color', 'red') // true
 */ AlgoliaSearchHelper.prototype.isExcluded = function(facet, value) {
    return this.state.isExcludeRefined(facet, value);
};
/**
 * @deprecated since 2.4.0, see {@link AlgoliaSearchHelper#hasRefinements}
 */ AlgoliaSearchHelper.prototype.isDisjunctiveRefined = function(facet, value) {
    return this.state.isDisjunctiveFacetRefined(facet, value);
};
/**
 * Check if the string is a currently filtering tag.
 * @param {string} tag tag to check
 * @return {boolean}
 */ AlgoliaSearchHelper.prototype.hasTag = function(tag) {
    return this.state.isTagRefined(tag);
};
/**
 * @deprecated since 2.4.0, see {@link AlgoliaSearchHelper#hasTag}
 */ AlgoliaSearchHelper.prototype.isTagRefined = function() {
    return this.hasTagRefinements.apply(this, arguments);
};
/**
 * Get the name of the currently used index.
 * @return {string}
 * @example
 * helper.setIndex('highestPrice_products').getIndex();
 * // returns 'highestPrice_products'
 */ AlgoliaSearchHelper.prototype.getIndex = function() {
    return this.state.index;
};
function getCurrentPage() {
    return this.state.page;
}
/**
 * Get the currently selected page
 * @deprecated
 * @return {number} the current page
 */ AlgoliaSearchHelper.prototype.getCurrentPage = getCurrentPage;
/**
 * Get the currently selected page
 * @function
 * @return {number} the current page
 */ AlgoliaSearchHelper.prototype.getPage = getCurrentPage;
/**
 * Get all the tags currently set to filters the results.
 *
 * @return {string[]} The list of tags currently set.
 */ AlgoliaSearchHelper.prototype.getTags = function() {
    return this.state.tagRefinements;
};
/**
 * Get the list of refinements for a given attribute. This method works with
 * conjunctive, disjunctive, excluding and numerical filters.
 *
 * See also SearchResults#getRefinements
 *
 * @param {string} facetName attribute name used for faceting
 * @return {Array.<FacetRefinement|NumericRefinement>} All Refinement are objects that contain a value, and
 * a type. Numeric also contains an operator.
 * @example
 * helper.addNumericRefinement('price', '>', 100);
 * helper.getRefinements('price');
 * // [
 * //   {
 * //     "value": [
 * //       100
 * //     ],
 * //     "operator": ">",
 * //     "type": "numeric"
 * //   }
 * // ]
 * @example
 * helper.addFacetRefinement('color', 'blue');
 * helper.addFacetExclusion('color', 'red');
 * helper.getRefinements('color');
 * // [
 * //   {
 * //     "value": "blue",
 * //     "type": "conjunctive"
 * //   },
 * //   {
 * //     "value": "red",
 * //     "type": "exclude"
 * //   }
 * // ]
 * @example
 * helper.addDisjunctiveFacetRefinement('material', 'plastic');
 * // [
 * //   {
 * //     "value": "plastic",
 * //     "type": "disjunctive"
 * //   }
 * // ]
 */ AlgoliaSearchHelper.prototype.getRefinements = function(facetName) {
    var refinements = [];
    if (this.state.isConjunctiveFacet(facetName)) {
        var conjRefinements = this.state.getConjunctiveRefinements(facetName);
        conjRefinements.forEach(function(r) {
            refinements.push({
                value: r,
                type: 'conjunctive'
            });
        });
        var excludeRefinements = this.state.getExcludeRefinements(facetName);
        excludeRefinements.forEach(function(r) {
            refinements.push({
                value: r,
                type: 'exclude'
            });
        });
    } else if (this.state.isDisjunctiveFacet(facetName)) {
        var disjRefinements = this.state.getDisjunctiveRefinements(facetName);
        disjRefinements.forEach(function(r) {
            refinements.push({
                value: r,
                type: 'disjunctive'
            });
        });
    }
    var numericRefinements = this.state.getNumericRefinements(facetName);
    Object.keys(numericRefinements).forEach(function(operator) {
        var value = numericRefinements[operator];
        refinements.push({
            value: value,
            operator: operator,
            type: 'numeric'
        });
    });
    return refinements;
};
/**
 * Return the current refinement for the (attribute, operator)
 * @param {string} attribute attribute in the record
 * @param {string} operator operator applied on the refined values
 * @return {Array.<number|number[]>} refined values
 */ AlgoliaSearchHelper.prototype.getNumericRefinement = function(attribute, operator) {
    return this.state.getNumericRefinement(attribute, operator);
};
/**
 * Get the current breadcrumb for a hierarchical facet, as an array
 * @param  {string} facetName Hierarchical facet name
 * @return {array.<string>} the path as an array of string
 */ AlgoliaSearchHelper.prototype.getHierarchicalFacetBreadcrumb = function(facetName) {
    return this.state.getHierarchicalFacetBreadcrumb(facetName);
};
// /////////// PRIVATE
/**
 * Perform the underlying queries
 * @private
 * @return {undefined}
 * @fires search
 * @fires result
 * @fires error
 */ AlgoliaSearchHelper.prototype._search = function(options) {
    var state = this.state;
    var states = [];
    var mainQueries = [];
    if (!options.onlyWithDerivedHelpers) {
        mainQueries = requestBuilder._getQueries(state.index, state);
        states.push({
            state: state,
            queriesCount: mainQueries.length,
            helper: this
        });
        this.emit('search', {
            state: state,
            results: this.lastResults
        });
    }
    var derivedQueries = this.derivedHelpers.map(function(derivedHelper) {
        var derivedState = derivedHelper.getModifiedState(state);
        var derivedStateQueries = requestBuilder._getQueries(derivedState.index, derivedState);
        states.push({
            state: derivedState,
            queriesCount: derivedStateQueries.length,
            helper: derivedHelper
        });
        derivedHelper.emit('search', {
            state: derivedState,
            results: derivedHelper.lastResults
        });
        return derivedStateQueries;
    });
    var queries = Array.prototype.concat.apply(mainQueries, derivedQueries);
    var queryId = this._queryId++;
    this._currentNbQueries++;
    try {
        this.client.search(queries).then(this._dispatchAlgoliaResponse.bind(this, states, queryId)).catch(this._dispatchAlgoliaError.bind(this, queryId));
    } catch (error) {
        // If we reach this part, we're in an internal error state
        this.emit('error', {
            error: error
        });
    }
};
/**
 * Transform the responses as sent by the server and transform them into a user
 * usable object that merge the results of all the batch requests. It will dispatch
 * over the different helper + derived helpers (when there are some).
 * @private
 * @param {array.<{SearchParameters, AlgoliaQueries, AlgoliaSearchHelper}>}
 *  state state used for to generate the request
 * @param {number} queryId id of the current request
 * @param {object} content content of the response
 * @return {undefined}
 */ AlgoliaSearchHelper.prototype._dispatchAlgoliaResponse = function(states, queryId, content) {
    // FIXME remove the number of outdated queries discarded instead of just one
    if (queryId < this._lastQueryIdReceived) // Outdated answer
    return;
    this._currentNbQueries -= queryId - this._lastQueryIdReceived;
    this._lastQueryIdReceived = queryId;
    if (this._currentNbQueries === 0) this.emit('searchQueueEmpty');
    var results = content.results.slice();
    states.forEach(function(s) {
        var state = s.state;
        var queriesCount = s.queriesCount;
        var helper = s.helper;
        var specificResults = results.splice(0, queriesCount);
        var formattedResponse = helper.lastResults = new SearchResults(state, specificResults);
        helper.emit('result', {
            results: formattedResponse,
            state: state
        });
    });
};
AlgoliaSearchHelper.prototype._dispatchAlgoliaError = function(queryId, error) {
    if (queryId < this._lastQueryIdReceived) // Outdated answer
    return;
    this._currentNbQueries -= queryId - this._lastQueryIdReceived;
    this._lastQueryIdReceived = queryId;
    this.emit('error', {
        error: error
    });
    if (this._currentNbQueries === 0) this.emit('searchQueueEmpty');
};
AlgoliaSearchHelper.prototype.containsRefinement = function(query, facetFilters, numericFilters, tagFilters) {
    return query || facetFilters.length !== 0 || numericFilters.length !== 0 || tagFilters.length !== 0;
};
/**
 * Test if there are some disjunctive refinements on the facet
 * @private
 * @param {string} facet the attribute to test
 * @return {boolean}
 */ AlgoliaSearchHelper.prototype._hasDisjunctiveRefinements = function(facet) {
    return this.state.disjunctiveRefinements[facet] && this.state.disjunctiveRefinements[facet].length > 0;
};
AlgoliaSearchHelper.prototype._change = function(event) {
    var state = event.state;
    var isPageReset = event.isPageReset;
    if (state !== this.state) {
        this.state = state;
        this.emit('change', {
            state: this.state,
            results: this.lastResults,
            isPageReset: isPageReset
        });
    }
};
/**
 * Clears the cache of the underlying Algolia client.
 * @return {AlgoliaSearchHelper}
 */ AlgoliaSearchHelper.prototype.clearCache = function() {
    this.client.clearCache && this.client.clearCache();
    return this;
};
/**
 * Updates the internal client instance. If the reference of the clients
 * are equal then no update is actually done.
 * @param  {AlgoliaSearch} newClient an AlgoliaSearch client
 * @return {AlgoliaSearchHelper}
 */ AlgoliaSearchHelper.prototype.setClient = function(newClient) {
    if (this.client === newClient) return this;
    if (typeof newClient.addAlgoliaAgent === 'function') newClient.addAlgoliaAgent('JS Helper (' + version + ')');
    this.client = newClient;
    return this;
};
/**
 * Gets the instance of the currently used client.
 * @return {AlgoliaSearch}
 */ AlgoliaSearchHelper.prototype.getClient = function() {
    return this.client;
};
/**
 * Creates an derived instance of the Helper. A derived helper
 * is a way to request other indices synchronised with the lifecycle
 * of the main Helper. This mechanism uses the multiqueries feature
 * of Algolia to aggregate all the requests in a single network call.
 *
 * This method takes a function that is used to create a new SearchParameter
 * that will be used to create requests to Algolia. Those new requests
 * are created just before the `search` event. The signature of the function
 * is `SearchParameters -> SearchParameters`.
 *
 * This method returns a new DerivedHelper which is an EventEmitter
 * that fires the same `search`, `result` and `error` events. Those
 * events, however, will receive data specific to this DerivedHelper
 * and the SearchParameters that is returned by the call of the
 * parameter function.
 * @param {function} fn SearchParameters -> SearchParameters
 * @return {DerivedHelper}
 */ AlgoliaSearchHelper.prototype.derive = function(fn) {
    var derivedHelper = new DerivedHelper(this, fn);
    this.derivedHelpers.push(derivedHelper);
    return derivedHelper;
};
/**
 * This method detaches a derived Helper from the main one. Prefer using the one from the
 * derived helper itself, to remove the event listeners too.
 * @private
 * @return {undefined}
 * @throws Error
 */ AlgoliaSearchHelper.prototype.detachDerivedHelper = function(derivedHelper) {
    var pos = this.derivedHelpers.indexOf(derivedHelper);
    if (pos === -1) throw new Error('Derived helper already detached');
    this.derivedHelpers.splice(pos, 1);
};
/**
 * This method returns true if there is currently at least one on-going search.
 * @return {boolean} true if there is a search pending
 */ AlgoliaSearchHelper.prototype.hasPendingRequests = function() {
    return this._currentNbQueries > 0;
};
/**
 * @typedef AlgoliaSearchHelper.NumericRefinement
 * @type {object}
 * @property {number[]} value the numbers that are used for filtering this attribute with
 * the operator specified.
 * @property {string} operator the faceting data: value, number of entries
 * @property {string} type will be 'numeric'
 */ /**
 * @typedef AlgoliaSearchHelper.FacetRefinement
 * @type {object}
 * @property {string} value the string use to filter the attribute
 * @property {string} type the type of filter: 'conjunctive', 'disjunctive', 'exclude'
 */ module.exports = AlgoliaSearchHelper;

},{"./SearchParameters":"dQfwH","./SearchResults":"lUGU6","./DerivedHelper":"6UDS7","./requestBuilder":"6rfof","@algolia/events":"euNDO","./functions/inherits":"a0E30","./functions/objectHasKeys":"alqSr","./functions/omit":"l3IzD","./functions/merge":"eGyc5","./version":"cs17k"}],"dQfwH":[function(require,module,exports) {
'use strict';
var merge = require('../functions/merge');
var defaultsPure = require('../functions/defaultsPure');
var intersection = require('../functions/intersection');
var find = require('../functions/find');
var valToNumber = require('../functions/valToNumber');
var omit = require('../functions/omit');
var objectHasKeys = require('../functions/objectHasKeys');
var isValidUserToken = require('../utils/isValidUserToken');
var RefinementList = require('./RefinementList');
/**
 * isEqual, but only for numeric refinement values, possible values:
 * - 5
 * - [5]
 * - [[5]]
 * - [[5,5],[4]]
 */ function isEqualNumericRefinement(a, b) {
    if (Array.isArray(a) && Array.isArray(b)) return a.length === b.length && a.every(function(el, i) {
        return isEqualNumericRefinement(b[i], el);
    });
    return a === b;
}
/**
 * like _.find but using deep equality to be able to use it
 * to find arrays.
 * @private
 * @param {any[]} array array to search into (elements are base or array of base)
 * @param {any} searchedValue the value we're looking for (base or array of base)
 * @return {any} the searched value or undefined
 */ function findArray(array, searchedValue) {
    return find(array, function(currentValue) {
        return isEqualNumericRefinement(currentValue, searchedValue);
    });
}
/**
 * The facet list is the structure used to store the list of values used to
 * filter a single attribute.
 * @typedef {string[]} SearchParameters.FacetList
 */ /**
 * Structure to store numeric filters with the operator as the key. The supported operators
 * are `=`, `>`, `<`, `>=`, `<=` and `!=`.
 * @typedef {Object.<string, Array.<number|number[]>>} SearchParameters.OperatorList
 */ /**
 * SearchParameters is the data structure that contains all the information
 * usable for making a search to Algolia API. It doesn't do the search itself,
 * nor does it contains logic about the parameters.
 * It is an immutable object, therefore it has been created in a way that each
 * changes does not change the object itself but returns a copy with the
 * modification.
 * This object should probably not be instantiated outside of the helper. It will
 * be provided when needed. This object is documented for reference as you'll
 * get it from events generated by the {@link AlgoliaSearchHelper}.
 * If need be, instantiate the Helper from the factory function {@link SearchParameters.make}
 * @constructor
 * @classdesc contains all the parameters of a search
 * @param {object|SearchParameters} newParameters existing parameters or partial object
 * for the properties of a new SearchParameters
 * @see SearchParameters.make
 * @example <caption>SearchParameters of the first query in
 *   <a href="http://demos.algolia.com/instant-search-demo/">the instant search demo</a></caption>
{
   "query": "",
   "disjunctiveFacets": [
      "customerReviewCount",
      "category",
      "salePrice_range",
      "manufacturer"
  ],
   "maxValuesPerFacet": 30,
   "page": 0,
   "hitsPerPage": 10,
   "facets": [
      "type",
      "shipping"
  ]
}
 */ function SearchParameters(newParameters) {
    var params = newParameters ? SearchParameters._parseNumbers(newParameters) : {
    };
    if (params.userToken !== undefined && !isValidUserToken(params.userToken)) console.warn('[algoliasearch-helper] The `userToken` parameter is invalid. This can lead to wrong analytics.\n  - Format: [a-zA-Z0-9_-]{1,64}');
    /**
   * This attribute contains the list of all the conjunctive facets
   * used. This list will be added to requested facets in the
   * [facets attribute](https://www.algolia.com/doc/rest-api/search#param-facets) sent to algolia.
   * @member {string[]}
   */ this.facets = params.facets || [];
    /**
   * This attribute contains the list of all the disjunctive facets
   * used. This list will be added to requested facets in the
   * [facets attribute](https://www.algolia.com/doc/rest-api/search#param-facets) sent to algolia.
   * @member {string[]}
   */ this.disjunctiveFacets = params.disjunctiveFacets || [];
    /**
   * This attribute contains the list of all the hierarchical facets
   * used. This list will be added to requested facets in the
   * [facets attribute](https://www.algolia.com/doc/rest-api/search#param-facets) sent to algolia.
   * Hierarchical facets are a sub type of disjunctive facets that
   * let you filter faceted attributes hierarchically.
   * @member {string[]|object[]}
   */ this.hierarchicalFacets = params.hierarchicalFacets || [];
    // Refinements
    /**
   * This attribute contains all the filters that need to be
   * applied on the conjunctive facets. Each facet must be properly
   * defined in the `facets` attribute.
   *
   * The key is the name of the facet, and the `FacetList` contains all
   * filters selected for the associated facet name.
   *
   * When querying algolia, the values stored in this attribute will
   * be translated into the `facetFilters` attribute.
   * @member {Object.<string, SearchParameters.FacetList>}
   */ this.facetsRefinements = params.facetsRefinements || {
    };
    /**
   * This attribute contains all the filters that need to be
   * excluded from the conjunctive facets. Each facet must be properly
   * defined in the `facets` attribute.
   *
   * The key is the name of the facet, and the `FacetList` contains all
   * filters excluded for the associated facet name.
   *
   * When querying algolia, the values stored in this attribute will
   * be translated into the `facetFilters` attribute.
   * @member {Object.<string, SearchParameters.FacetList>}
   */ this.facetsExcludes = params.facetsExcludes || {
    };
    /**
   * This attribute contains all the filters that need to be
   * applied on the disjunctive facets. Each facet must be properly
   * defined in the `disjunctiveFacets` attribute.
   *
   * The key is the name of the facet, and the `FacetList` contains all
   * filters selected for the associated facet name.
   *
   * When querying algolia, the values stored in this attribute will
   * be translated into the `facetFilters` attribute.
   * @member {Object.<string, SearchParameters.FacetList>}
   */ this.disjunctiveFacetsRefinements = params.disjunctiveFacetsRefinements || {
    };
    /**
   * This attribute contains all the filters that need to be
   * applied on the numeric attributes.
   *
   * The key is the name of the attribute, and the value is the
   * filters to apply to this attribute.
   *
   * When querying algolia, the values stored in this attribute will
   * be translated into the `numericFilters` attribute.
   * @member {Object.<string, SearchParameters.OperatorList>}
   */ this.numericRefinements = params.numericRefinements || {
    };
    /**
   * This attribute contains all the tags used to refine the query.
   *
   * When querying algolia, the values stored in this attribute will
   * be translated into the `tagFilters` attribute.
   * @member {string[]}
   */ this.tagRefinements = params.tagRefinements || [];
    /**
   * This attribute contains all the filters that need to be
   * applied on the hierarchical facets. Each facet must be properly
   * defined in the `hierarchicalFacets` attribute.
   *
   * The key is the name of the facet, and the `FacetList` contains all
   * filters selected for the associated facet name. The FacetList values
   * are structured as a string that contain the values for each level
   * separated by the configured separator.
   *
   * When querying algolia, the values stored in this attribute will
   * be translated into the `facetFilters` attribute.
   * @member {Object.<string, SearchParameters.FacetList>}
   */ this.hierarchicalFacetsRefinements = params.hierarchicalFacetsRefinements || {
    };
    var self = this;
    Object.keys(params).forEach(function(paramName) {
        var isKeyKnown = SearchParameters.PARAMETERS.indexOf(paramName) !== -1;
        var isValueDefined = params[paramName] !== undefined;
        if (!isKeyKnown && isValueDefined) self[paramName] = params[paramName];
    });
}
/**
 * List all the properties in SearchParameters and therefore all the known Algolia properties
 * This doesn't contain any beta/hidden features.
 * @private
 */ SearchParameters.PARAMETERS = Object.keys(new SearchParameters());
/**
 * @private
 * @param {object} partialState full or part of a state
 * @return {object} a new object with the number keys as number
 */ SearchParameters._parseNumbers = function(partialState) {
    // Do not reparse numbers in SearchParameters, they ought to be parsed already
    if (partialState instanceof SearchParameters) return partialState;
    var numbers = {
    };
    var numberKeys = [
        'aroundPrecision',
        'aroundRadius',
        'getRankingInfo',
        'minWordSizefor2Typos',
        'minWordSizefor1Typo',
        'page',
        'maxValuesPerFacet',
        'distinct',
        'minimumAroundRadius',
        'hitsPerPage',
        'minProximity'
    ];
    numberKeys.forEach(function(k) {
        var value = partialState[k];
        if (typeof value === 'string') {
            var parsedValue = parseFloat(value);
            // global isNaN is ok to use here, value is only number or NaN
            numbers[k] = isNaN(parsedValue) ? value : parsedValue;
        }
    });
    // there's two formats of insideBoundingBox, we need to parse
    // the one which is an array of float geo rectangles
    if (Array.isArray(partialState.insideBoundingBox)) numbers.insideBoundingBox = partialState.insideBoundingBox.map(function(geoRect) {
        if (Array.isArray(geoRect)) return geoRect.map(function(value) {
            return parseFloat(value);
        });
        return geoRect;
    });
    if (partialState.numericRefinements) {
        var numericRefinements = {
        };
        Object.keys(partialState.numericRefinements).forEach(function(attribute) {
            var operators = partialState.numericRefinements[attribute] || {
            };
            numericRefinements[attribute] = {
            };
            Object.keys(operators).forEach(function(operator) {
                var values = operators[operator];
                var parsedValues = values.map(function(v) {
                    if (Array.isArray(v)) return v.map(function(vPrime) {
                        if (typeof vPrime === 'string') return parseFloat(vPrime);
                        return vPrime;
                    });
                    else if (typeof v === 'string') return parseFloat(v);
                    return v;
                });
                numericRefinements[attribute][operator] = parsedValues;
            });
        });
        numbers.numericRefinements = numericRefinements;
    }
    return merge({
    }, partialState, numbers);
};
/**
 * Factory for SearchParameters
 * @param {object|SearchParameters} newParameters existing parameters or partial
 * object for the properties of a new SearchParameters
 * @return {SearchParameters} frozen instance of SearchParameters
 */ SearchParameters.make = function makeSearchParameters(newParameters) {
    var instance = new SearchParameters(newParameters);
    var hierarchicalFacets = newParameters.hierarchicalFacets || [];
    hierarchicalFacets.forEach(function(facet) {
        if (facet.rootPath) {
            var currentRefinement = instance.getHierarchicalRefinement(facet.name);
            if (currentRefinement.length > 0 && currentRefinement[0].indexOf(facet.rootPath) !== 0) instance = instance.clearRefinements(facet.name);
            // get it again in case it has been cleared
            currentRefinement = instance.getHierarchicalRefinement(facet.name);
            if (currentRefinement.length === 0) instance = instance.toggleHierarchicalFacetRefinement(facet.name, facet.rootPath);
        }
    });
    return instance;
};
/**
 * Validates the new parameters based on the previous state
 * @param {SearchParameters} currentState the current state
 * @param {object|SearchParameters} parameters the new parameters to set
 * @return {Error|null} Error if the modification is invalid, null otherwise
 */ SearchParameters.validate = function(currentState, parameters) {
    var params = parameters || {
    };
    if (currentState.tagFilters && params.tagRefinements && params.tagRefinements.length > 0) return new Error("[Tags] Cannot switch from the managed tag API to the advanced API. It is probably an error, if it is really what you want, you should first clear the tags with clearTags method.");
    if (currentState.tagRefinements.length > 0 && params.tagFilters) return new Error("[Tags] Cannot switch from the advanced tag API to the managed API. It is probably an error, if it is not, you should first clear the tags with clearTags method.");
    if (currentState.numericFilters && params.numericRefinements && objectHasKeys(params.numericRefinements)) return new Error("[Numeric filters] Can't switch from the advanced to the managed API. It is probably an error, if this is really what you want, you have to first clear the numeric filters.");
    if (objectHasKeys(currentState.numericRefinements) && params.numericFilters) return new Error("[Numeric filters] Can't switch from the managed API to the advanced. It is probably an error, if this is really what you want, you have to first clear the numeric filters.");
    return null;
};
SearchParameters.prototype = {
    constructor: SearchParameters,
    /**
   * Remove all refinements (disjunctive + conjunctive + excludes + numeric filters)
   * @method
   * @param {undefined|string|SearchParameters.clearCallback} [attribute] optional string or function
   * - If not given, means to clear all the filters.
   * - If `string`, means to clear all refinements for the `attribute` named filter.
   * - If `function`, means to clear all the refinements that return truthy values.
   * @return {SearchParameters}
   */ clearRefinements: function clearRefinements(attribute) {
        var patch = {
            numericRefinements: this._clearNumericRefinements(attribute),
            facetsRefinements: RefinementList.clearRefinement(this.facetsRefinements, attribute, 'conjunctiveFacet'),
            facetsExcludes: RefinementList.clearRefinement(this.facetsExcludes, attribute, 'exclude'),
            disjunctiveFacetsRefinements: RefinementList.clearRefinement(this.disjunctiveFacetsRefinements, attribute, 'disjunctiveFacet'),
            hierarchicalFacetsRefinements: RefinementList.clearRefinement(this.hierarchicalFacetsRefinements, attribute, 'hierarchicalFacet')
        };
        if (patch.numericRefinements === this.numericRefinements && patch.facetsRefinements === this.facetsRefinements && patch.facetsExcludes === this.facetsExcludes && patch.disjunctiveFacetsRefinements === this.disjunctiveFacetsRefinements && patch.hierarchicalFacetsRefinements === this.hierarchicalFacetsRefinements) return this;
        return this.setQueryParameters(patch);
    },
    /**
   * Remove all the refined tags from the SearchParameters
   * @method
   * @return {SearchParameters}
   */ clearTags: function clearTags() {
        if (this.tagFilters === undefined && this.tagRefinements.length === 0) return this;
        return this.setQueryParameters({
            tagFilters: undefined,
            tagRefinements: []
        });
    },
    /**
   * Set the index.
   * @method
   * @param {string} index the index name
   * @return {SearchParameters}
   */ setIndex: function setIndex(index) {
        if (index === this.index) return this;
        return this.setQueryParameters({
            index: index
        });
    },
    /**
   * Query setter
   * @method
   * @param {string} newQuery value for the new query
   * @return {SearchParameters}
   */ setQuery: function setQuery(newQuery) {
        if (newQuery === this.query) return this;
        return this.setQueryParameters({
            query: newQuery
        });
    },
    /**
   * Page setter
   * @method
   * @param {number} newPage new page number
   * @return {SearchParameters}
   */ setPage: function setPage(newPage) {
        if (newPage === this.page) return this;
        return this.setQueryParameters({
            page: newPage
        });
    },
    /**
   * Facets setter
   * The facets are the simple facets, used for conjunctive (and) faceting.
   * @method
   * @param {string[]} facets all the attributes of the algolia records used for conjunctive faceting
   * @return {SearchParameters}
   */ setFacets: function setFacets(facets) {
        return this.setQueryParameters({
            facets: facets
        });
    },
    /**
   * Disjunctive facets setter
   * Change the list of disjunctive (or) facets the helper chan handle.
   * @method
   * @param {string[]} facets all the attributes of the algolia records used for disjunctive faceting
   * @return {SearchParameters}
   */ setDisjunctiveFacets: function setDisjunctiveFacets(facets) {
        return this.setQueryParameters({
            disjunctiveFacets: facets
        });
    },
    /**
   * HitsPerPage setter
   * Hits per page represents the number of hits retrieved for this query
   * @method
   * @param {number} n number of hits retrieved per page of results
   * @return {SearchParameters}
   */ setHitsPerPage: function setHitsPerPage(n) {
        if (this.hitsPerPage === n) return this;
        return this.setQueryParameters({
            hitsPerPage: n
        });
    },
    /**
   * typoTolerance setter
   * Set the value of typoTolerance
   * @method
   * @param {string} typoTolerance new value of typoTolerance ("true", "false", "min" or "strict")
   * @return {SearchParameters}
   */ setTypoTolerance: function setTypoTolerance(typoTolerance) {
        if (this.typoTolerance === typoTolerance) return this;
        return this.setQueryParameters({
            typoTolerance: typoTolerance
        });
    },
    /**
   * Add a numeric filter for a given attribute
   * When value is an array, they are combined with OR
   * When value is a single value, it will combined with AND
   * @method
   * @param {string} attribute attribute to set the filter on
   * @param {string} operator operator of the filter (possible values: =, >, >=, <, <=, !=)
   * @param {number | number[]} value value of the filter
   * @return {SearchParameters}
   * @example
   * // for price = 50 or 40
   * searchparameter.addNumericRefinement('price', '=', [50, 40]);
   * @example
   * // for size = 38 and 40
   * searchparameter.addNumericRefinement('size', '=', 38);
   * searchparameter.addNumericRefinement('size', '=', 40);
   */ addNumericRefinement: function(attribute, operator, v) {
        var value = valToNumber(v);
        if (this.isNumericRefined(attribute, operator, value)) return this;
        var mod = merge({
        }, this.numericRefinements);
        mod[attribute] = merge({
        }, mod[attribute]);
        if (mod[attribute][operator]) {
            // Array copy
            mod[attribute][operator] = mod[attribute][operator].slice();
            // Add the element. Concat can't be used here because value can be an array.
            mod[attribute][operator].push(value);
        } else mod[attribute][operator] = [
            value
        ];
        return this.setQueryParameters({
            numericRefinements: mod
        });
    },
    /**
   * Get the list of conjunctive refinements for a single facet
   * @param {string} facetName name of the attribute used for faceting
   * @return {string[]} list of refinements
   */ getConjunctiveRefinements: function(facetName) {
        if (!this.isConjunctiveFacet(facetName)) return [];
        return this.facetsRefinements[facetName] || [];
    },
    /**
   * Get the list of disjunctive refinements for a single facet
   * @param {string} facetName name of the attribute used for faceting
   * @return {string[]} list of refinements
   */ getDisjunctiveRefinements: function(facetName) {
        if (!this.isDisjunctiveFacet(facetName)) return [];
        return this.disjunctiveFacetsRefinements[facetName] || [];
    },
    /**
   * Get the list of hierarchical refinements for a single facet
   * @param {string} facetName name of the attribute used for faceting
   * @return {string[]} list of refinements
   */ getHierarchicalRefinement: function(facetName) {
        // we send an array but we currently do not support multiple
        // hierarchicalRefinements for a hierarchicalFacet
        return this.hierarchicalFacetsRefinements[facetName] || [];
    },
    /**
   * Get the list of exclude refinements for a single facet
   * @param {string} facetName name of the attribute used for faceting
   * @return {string[]} list of refinements
   */ getExcludeRefinements: function(facetName) {
        if (!this.isConjunctiveFacet(facetName)) return [];
        return this.facetsExcludes[facetName] || [];
    },
    /**
   * Remove all the numeric filter for a given (attribute, operator)
   * @method
   * @param {string} attribute attribute to set the filter on
   * @param {string} [operator] operator of the filter (possible values: =, >, >=, <, <=, !=)
   * @param {number} [number] the value to be removed
   * @return {SearchParameters}
   */ removeNumericRefinement: function(attribute, operator, paramValue) {
        if (paramValue !== undefined) {
            if (!this.isNumericRefined(attribute, operator, paramValue)) return this;
            return this.setQueryParameters({
                numericRefinements: this._clearNumericRefinements(function(value, key) {
                    return key === attribute && value.op === operator && isEqualNumericRefinement(value.val, valToNumber(paramValue));
                })
            });
        } else if (operator !== undefined) {
            if (!this.isNumericRefined(attribute, operator)) return this;
            return this.setQueryParameters({
                numericRefinements: this._clearNumericRefinements(function(value, key) {
                    return key === attribute && value.op === operator;
                })
            });
        }
        if (!this.isNumericRefined(attribute)) return this;
        return this.setQueryParameters({
            numericRefinements: this._clearNumericRefinements(function(value, key) {
                return key === attribute;
            })
        });
    },
    /**
   * Get the list of numeric refinements for a single facet
   * @param {string} facetName name of the attribute used for faceting
   * @return {SearchParameters.OperatorList} list of refinements
   */ getNumericRefinements: function(facetName) {
        return this.numericRefinements[facetName] || {
        };
    },
    /**
   * Return the current refinement for the (attribute, operator)
   * @param {string} attribute attribute in the record
   * @param {string} operator operator applied on the refined values
   * @return {Array.<number|number[]>} refined values
   */ getNumericRefinement: function(attribute, operator) {
        return this.numericRefinements[attribute] && this.numericRefinements[attribute][operator];
    },
    /**
   * Clear numeric filters.
   * @method
   * @private
   * @param {string|SearchParameters.clearCallback} [attribute] optional string or function
   * - If not given, means to clear all the filters.
   * - If `string`, means to clear all refinements for the `attribute` named filter.
   * - If `function`, means to clear all the refinements that return truthy values.
   * @return {Object.<string, OperatorList>}
   */ _clearNumericRefinements: function _clearNumericRefinements(attribute) {
        if (attribute === undefined) {
            if (!objectHasKeys(this.numericRefinements)) return this.numericRefinements;
            return {
            };
        } else if (typeof attribute === 'string') return omit(this.numericRefinements, [
            attribute
        ]);
        else if (typeof attribute === 'function') {
            var hasChanged = false;
            var numericRefinements = this.numericRefinements;
            var newNumericRefinements = Object.keys(numericRefinements).reduce(function(memo, key) {
                var operators = numericRefinements[key];
                var operatorList = {
                };
                operators = operators || {
                };
                Object.keys(operators).forEach(function(operator) {
                    var values = operators[operator] || [];
                    var outValues = [];
                    values.forEach(function(value) {
                        var predicateResult = attribute({
                            val: value,
                            op: operator
                        }, key, 'numeric');
                        if (!predicateResult) outValues.push(value);
                    });
                    if (outValues.length !== values.length) hasChanged = true;
                    operatorList[operator] = outValues;
                });
                memo[key] = operatorList;
                return memo;
            }, {
            });
            if (hasChanged) return newNumericRefinements;
            return this.numericRefinements;
        }
    },
    /**
   * Add a facet to the facets attribute of the helper configuration, if it
   * isn't already present.
   * @method
   * @param {string} facet facet name to add
   * @return {SearchParameters}
   */ addFacet: function addFacet(facet) {
        if (this.isConjunctiveFacet(facet)) return this;
        return this.setQueryParameters({
            facets: this.facets.concat([
                facet
            ])
        });
    },
    /**
   * Add a disjunctive facet to the disjunctiveFacets attribute of the helper
   * configuration, if it isn't already present.
   * @method
   * @param {string} facet disjunctive facet name to add
   * @return {SearchParameters}
   */ addDisjunctiveFacet: function addDisjunctiveFacet(facet) {
        if (this.isDisjunctiveFacet(facet)) return this;
        return this.setQueryParameters({
            disjunctiveFacets: this.disjunctiveFacets.concat([
                facet
            ])
        });
    },
    /**
   * Add a hierarchical facet to the hierarchicalFacets attribute of the helper
   * configuration.
   * @method
   * @param {object} hierarchicalFacet hierarchical facet to add
   * @return {SearchParameters}
   * @throws will throw an error if a hierarchical facet with the same name was already declared
   */ addHierarchicalFacet: function addHierarchicalFacet(hierarchicalFacet) {
        if (this.isHierarchicalFacet(hierarchicalFacet.name)) throw new Error('Cannot declare two hierarchical facets with the same name: `' + hierarchicalFacet.name + '`');
        return this.setQueryParameters({
            hierarchicalFacets: this.hierarchicalFacets.concat([
                hierarchicalFacet
            ])
        });
    },
    /**
   * Add a refinement on a "normal" facet
   * @method
   * @param {string} facet attribute to apply the faceting on
   * @param {string} value value of the attribute (will be converted to string)
   * @return {SearchParameters}
   */ addFacetRefinement: function addFacetRefinement(facet, value) {
        if (!this.isConjunctiveFacet(facet)) throw new Error(facet + ' is not defined in the facets attribute of the helper configuration');
        if (RefinementList.isRefined(this.facetsRefinements, facet, value)) return this;
        return this.setQueryParameters({
            facetsRefinements: RefinementList.addRefinement(this.facetsRefinements, facet, value)
        });
    },
    /**
   * Exclude a value from a "normal" facet
   * @method
   * @param {string} facet attribute to apply the exclusion on
   * @param {string} value value of the attribute (will be converted to string)
   * @return {SearchParameters}
   */ addExcludeRefinement: function addExcludeRefinement(facet, value) {
        if (!this.isConjunctiveFacet(facet)) throw new Error(facet + ' is not defined in the facets attribute of the helper configuration');
        if (RefinementList.isRefined(this.facetsExcludes, facet, value)) return this;
        return this.setQueryParameters({
            facetsExcludes: RefinementList.addRefinement(this.facetsExcludes, facet, value)
        });
    },
    /**
   * Adds a refinement on a disjunctive facet.
   * @method
   * @param {string} facet attribute to apply the faceting on
   * @param {string} value value of the attribute (will be converted to string)
   * @return {SearchParameters}
   */ addDisjunctiveFacetRefinement: function addDisjunctiveFacetRefinement(facet, value) {
        if (!this.isDisjunctiveFacet(facet)) throw new Error(facet + ' is not defined in the disjunctiveFacets attribute of the helper configuration');
        if (RefinementList.isRefined(this.disjunctiveFacetsRefinements, facet, value)) return this;
        return this.setQueryParameters({
            disjunctiveFacetsRefinements: RefinementList.addRefinement(this.disjunctiveFacetsRefinements, facet, value)
        });
    },
    /**
   * addTagRefinement adds a tag to the list used to filter the results
   * @param {string} tag tag to be added
   * @return {SearchParameters}
   */ addTagRefinement: function addTagRefinement(tag) {
        if (this.isTagRefined(tag)) return this;
        var modification = {
            tagRefinements: this.tagRefinements.concat(tag)
        };
        return this.setQueryParameters(modification);
    },
    /**
   * Remove a facet from the facets attribute of the helper configuration, if it
   * is present.
   * @method
   * @param {string} facet facet name to remove
   * @return {SearchParameters}
   */ removeFacet: function removeFacet(facet) {
        if (!this.isConjunctiveFacet(facet)) return this;
        return this.clearRefinements(facet).setQueryParameters({
            facets: this.facets.filter(function(f) {
                return f !== facet;
            })
        });
    },
    /**
   * Remove a disjunctive facet from the disjunctiveFacets attribute of the
   * helper configuration, if it is present.
   * @method
   * @param {string} facet disjunctive facet name to remove
   * @return {SearchParameters}
   */ removeDisjunctiveFacet: function removeDisjunctiveFacet(facet) {
        if (!this.isDisjunctiveFacet(facet)) return this;
        return this.clearRefinements(facet).setQueryParameters({
            disjunctiveFacets: this.disjunctiveFacets.filter(function(f) {
                return f !== facet;
            })
        });
    },
    /**
   * Remove a hierarchical facet from the hierarchicalFacets attribute of the
   * helper configuration, if it is present.
   * @method
   * @param {string} facet hierarchical facet name to remove
   * @return {SearchParameters}
   */ removeHierarchicalFacet: function removeHierarchicalFacet(facet) {
        if (!this.isHierarchicalFacet(facet)) return this;
        return this.clearRefinements(facet).setQueryParameters({
            hierarchicalFacets: this.hierarchicalFacets.filter(function(f) {
                return f.name !== facet;
            })
        });
    },
    /**
   * Remove a refinement set on facet. If a value is provided, it will clear the
   * refinement for the given value, otherwise it will clear all the refinement
   * values for the faceted attribute.
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {string} [value] value used to filter
   * @return {SearchParameters}
   */ removeFacetRefinement: function removeFacetRefinement(facet, value) {
        if (!this.isConjunctiveFacet(facet)) throw new Error(facet + ' is not defined in the facets attribute of the helper configuration');
        if (!RefinementList.isRefined(this.facetsRefinements, facet, value)) return this;
        return this.setQueryParameters({
            facetsRefinements: RefinementList.removeRefinement(this.facetsRefinements, facet, value)
        });
    },
    /**
   * Remove a negative refinement on a facet
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {string} value value used to filter
   * @return {SearchParameters}
   */ removeExcludeRefinement: function removeExcludeRefinement(facet, value) {
        if (!this.isConjunctiveFacet(facet)) throw new Error(facet + ' is not defined in the facets attribute of the helper configuration');
        if (!RefinementList.isRefined(this.facetsExcludes, facet, value)) return this;
        return this.setQueryParameters({
            facetsExcludes: RefinementList.removeRefinement(this.facetsExcludes, facet, value)
        });
    },
    /**
   * Remove a refinement on a disjunctive facet
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {string} value value used to filter
   * @return {SearchParameters}
   */ removeDisjunctiveFacetRefinement: function removeDisjunctiveFacetRefinement(facet, value) {
        if (!this.isDisjunctiveFacet(facet)) throw new Error(facet + ' is not defined in the disjunctiveFacets attribute of the helper configuration');
        if (!RefinementList.isRefined(this.disjunctiveFacetsRefinements, facet, value)) return this;
        return this.setQueryParameters({
            disjunctiveFacetsRefinements: RefinementList.removeRefinement(this.disjunctiveFacetsRefinements, facet, value)
        });
    },
    /**
   * Remove a tag from the list of tag refinements
   * @method
   * @param {string} tag the tag to remove
   * @return {SearchParameters}
   */ removeTagRefinement: function removeTagRefinement(tag) {
        if (!this.isTagRefined(tag)) return this;
        var modification = {
            tagRefinements: this.tagRefinements.filter(function(t) {
                return t !== tag;
            })
        };
        return this.setQueryParameters(modification);
    },
    /**
   * Generic toggle refinement method to use with facet, disjunctive facets
   * and hierarchical facets
   * @param  {string} facet the facet to refine
   * @param  {string} value the associated value
   * @return {SearchParameters}
   * @throws will throw an error if the facet is not declared in the settings of the helper
   * @deprecated since version 2.19.0, see {@link SearchParameters#toggleFacetRefinement}
   */ toggleRefinement: function toggleRefinement(facet, value) {
        return this.toggleFacetRefinement(facet, value);
    },
    /**
   * Generic toggle refinement method to use with facet, disjunctive facets
   * and hierarchical facets
   * @param  {string} facet the facet to refine
   * @param  {string} value the associated value
   * @return {SearchParameters}
   * @throws will throw an error if the facet is not declared in the settings of the helper
   */ toggleFacetRefinement: function toggleFacetRefinement(facet, value) {
        if (this.isHierarchicalFacet(facet)) return this.toggleHierarchicalFacetRefinement(facet, value);
        else if (this.isConjunctiveFacet(facet)) return this.toggleConjunctiveFacetRefinement(facet, value);
        else if (this.isDisjunctiveFacet(facet)) return this.toggleDisjunctiveFacetRefinement(facet, value);
        throw new Error('Cannot refine the undeclared facet ' + facet + '; it should be added to the helper options facets, disjunctiveFacets or hierarchicalFacets');
    },
    /**
   * Switch the refinement applied over a facet/value
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {SearchParameters}
   */ toggleConjunctiveFacetRefinement: function toggleConjunctiveFacetRefinement(facet, value) {
        if (!this.isConjunctiveFacet(facet)) throw new Error(facet + ' is not defined in the facets attribute of the helper configuration');
        return this.setQueryParameters({
            facetsRefinements: RefinementList.toggleRefinement(this.facetsRefinements, facet, value)
        });
    },
    /**
   * Switch the refinement applied over a facet/value
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {SearchParameters}
   */ toggleExcludeFacetRefinement: function toggleExcludeFacetRefinement(facet, value) {
        if (!this.isConjunctiveFacet(facet)) throw new Error(facet + ' is not defined in the facets attribute of the helper configuration');
        return this.setQueryParameters({
            facetsExcludes: RefinementList.toggleRefinement(this.facetsExcludes, facet, value)
        });
    },
    /**
   * Switch the refinement applied over a facet/value
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {SearchParameters}
   */ toggleDisjunctiveFacetRefinement: function toggleDisjunctiveFacetRefinement(facet, value) {
        if (!this.isDisjunctiveFacet(facet)) throw new Error(facet + ' is not defined in the disjunctiveFacets attribute of the helper configuration');
        return this.setQueryParameters({
            disjunctiveFacetsRefinements: RefinementList.toggleRefinement(this.disjunctiveFacetsRefinements, facet, value)
        });
    },
    /**
   * Switch the refinement applied over a facet/value
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {SearchParameters}
   */ toggleHierarchicalFacetRefinement: function toggleHierarchicalFacetRefinement(facet, value) {
        if (!this.isHierarchicalFacet(facet)) throw new Error(facet + ' is not defined in the hierarchicalFacets attribute of the helper configuration');
        var separator = this._getHierarchicalFacetSeparator(this.getHierarchicalFacetByName(facet));
        var mod = {
        };
        var upOneOrMultipleLevel = this.hierarchicalFacetsRefinements[facet] !== undefined && this.hierarchicalFacetsRefinements[facet].length > 0 && // remove current refinement:
        // refinement was 'beer > IPA', call is toggleRefine('beer > IPA'), refinement should be `beer`
        (this.hierarchicalFacetsRefinements[facet][0] === value || // remove a parent refinement of the current refinement:
        //  - refinement was 'beer > IPA > Flying dog'
        //  - call is toggleRefine('beer > IPA')
        //  - refinement should be `beer`
        this.hierarchicalFacetsRefinements[facet][0].indexOf(value + separator) === 0);
        if (upOneOrMultipleLevel) {
            if (value.indexOf(separator) === -1) // go back to root level
            mod[facet] = [];
            else mod[facet] = [
                value.slice(0, value.lastIndexOf(separator))
            ];
        } else mod[facet] = [
            value
        ];
        return this.setQueryParameters({
            hierarchicalFacetsRefinements: defaultsPure({
            }, mod, this.hierarchicalFacetsRefinements)
        });
    },
    /**
   * Adds a refinement on a hierarchical facet.
   * @param {string} facet the facet name
   * @param {string} path the hierarchical facet path
   * @return {SearchParameter} the new state
   * @throws Error if the facet is not defined or if the facet is refined
   */ addHierarchicalFacetRefinement: function(facet, path) {
        if (this.isHierarchicalFacetRefined(facet)) throw new Error(facet + ' is already refined.');
        if (!this.isHierarchicalFacet(facet)) throw new Error(facet + ' is not defined in the hierarchicalFacets attribute of the helper configuration.');
        var mod = {
        };
        mod[facet] = [
            path
        ];
        return this.setQueryParameters({
            hierarchicalFacetsRefinements: defaultsPure({
            }, mod, this.hierarchicalFacetsRefinements)
        });
    },
    /**
   * Removes the refinement set on a hierarchical facet.
   * @param {string} facet the facet name
   * @return {SearchParameter} the new state
   * @throws Error if the facet is not defined or if the facet is not refined
   */ removeHierarchicalFacetRefinement: function(facet) {
        if (!this.isHierarchicalFacetRefined(facet)) return this;
        var mod = {
        };
        mod[facet] = [];
        return this.setQueryParameters({
            hierarchicalFacetsRefinements: defaultsPure({
            }, mod, this.hierarchicalFacetsRefinements)
        });
    },
    /**
   * Switch the tag refinement
   * @method
   * @param {string} tag the tag to remove or add
   * @return {SearchParameters}
   */ toggleTagRefinement: function toggleTagRefinement(tag) {
        if (this.isTagRefined(tag)) return this.removeTagRefinement(tag);
        return this.addTagRefinement(tag);
    },
    /**
   * Test if the facet name is from one of the disjunctive facets
   * @method
   * @param {string} facet facet name to test
   * @return {boolean}
   */ isDisjunctiveFacet: function(facet) {
        return this.disjunctiveFacets.indexOf(facet) > -1;
    },
    /**
   * Test if the facet name is from one of the hierarchical facets
   * @method
   * @param {string} facetName facet name to test
   * @return {boolean}
   */ isHierarchicalFacet: function(facetName) {
        return this.getHierarchicalFacetByName(facetName) !== undefined;
    },
    /**
   * Test if the facet name is from one of the conjunctive/normal facets
   * @method
   * @param {string} facet facet name to test
   * @return {boolean}
   */ isConjunctiveFacet: function(facet) {
        return this.facets.indexOf(facet) > -1;
    },
    /**
   * Returns true if the facet is refined, either for a specific value or in
   * general.
   * @method
   * @param {string} facet name of the attribute for used for faceting
   * @param {string} value, optional value. If passed will test that this value
   * is filtering the given facet.
   * @return {boolean} returns true if refined
   */ isFacetRefined: function isFacetRefined(facet, value) {
        if (!this.isConjunctiveFacet(facet)) return false;
        return RefinementList.isRefined(this.facetsRefinements, facet, value);
    },
    /**
   * Returns true if the facet contains exclusions or if a specific value is
   * excluded.
   *
   * @method
   * @param {string} facet name of the attribute for used for faceting
   * @param {string} [value] optional value. If passed will test that this value
   * is filtering the given facet.
   * @return {boolean} returns true if refined
   */ isExcludeRefined: function isExcludeRefined(facet, value) {
        if (!this.isConjunctiveFacet(facet)) return false;
        return RefinementList.isRefined(this.facetsExcludes, facet, value);
    },
    /**
   * Returns true if the facet contains a refinement, or if a value passed is a
   * refinement for the facet.
   * @method
   * @param {string} facet name of the attribute for used for faceting
   * @param {string} value optional, will test if the value is used for refinement
   * if there is one, otherwise will test if the facet contains any refinement
   * @return {boolean}
   */ isDisjunctiveFacetRefined: function isDisjunctiveFacetRefined(facet, value) {
        if (!this.isDisjunctiveFacet(facet)) return false;
        return RefinementList.isRefined(this.disjunctiveFacetsRefinements, facet, value);
    },
    /**
   * Returns true if the facet contains a refinement, or if a value passed is a
   * refinement for the facet.
   * @method
   * @param {string} facet name of the attribute for used for faceting
   * @param {string} value optional, will test if the value is used for refinement
   * if there is one, otherwise will test if the facet contains any refinement
   * @return {boolean}
   */ isHierarchicalFacetRefined: function isHierarchicalFacetRefined(facet, value) {
        if (!this.isHierarchicalFacet(facet)) return false;
        var refinements = this.getHierarchicalRefinement(facet);
        if (!value) return refinements.length > 0;
        return refinements.indexOf(value) !== -1;
    },
    /**
   * Test if the triple (attribute, operator, value) is already refined.
   * If only the attribute and the operator are provided, it tests if the
   * contains any refinement value.
   * @method
   * @param {string} attribute attribute for which the refinement is applied
   * @param {string} [operator] operator of the refinement
   * @param {string} [value] value of the refinement
   * @return {boolean} true if it is refined
   */ isNumericRefined: function isNumericRefined(attribute, operator, value) {
        if (value === undefined && operator === undefined) return !!this.numericRefinements[attribute];
        var isOperatorDefined = this.numericRefinements[attribute] && this.numericRefinements[attribute][operator] !== undefined;
        if (value === undefined || !isOperatorDefined) return isOperatorDefined;
        var parsedValue = valToNumber(value);
        var isAttributeValueDefined = findArray(this.numericRefinements[attribute][operator], parsedValue) !== undefined;
        return isOperatorDefined && isAttributeValueDefined;
    },
    /**
   * Returns true if the tag refined, false otherwise
   * @method
   * @param {string} tag the tag to check
   * @return {boolean}
   */ isTagRefined: function isTagRefined(tag) {
        return this.tagRefinements.indexOf(tag) !== -1;
    },
    /**
   * Returns the list of all disjunctive facets refined
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {string[]}
   */ getRefinedDisjunctiveFacets: function getRefinedDisjunctiveFacets() {
        var self = this;
        // attributes used for numeric filter can also be disjunctive
        var disjunctiveNumericRefinedFacets = intersection(Object.keys(this.numericRefinements).filter(function(facet) {
            return Object.keys(self.numericRefinements[facet]).length > 0;
        }), this.disjunctiveFacets);
        return Object.keys(this.disjunctiveFacetsRefinements).filter(function(facet) {
            return self.disjunctiveFacetsRefinements[facet].length > 0;
        }).concat(disjunctiveNumericRefinedFacets).concat(this.getRefinedHierarchicalFacets());
    },
    /**
   * Returns the list of all disjunctive facets refined
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {string[]}
   */ getRefinedHierarchicalFacets: function getRefinedHierarchicalFacets() {
        var self = this;
        return intersection(// enforce the order between the two arrays,
        // so that refinement name index === hierarchical facet index
        this.hierarchicalFacets.map(function(facet) {
            return facet.name;
        }), Object.keys(this.hierarchicalFacetsRefinements).filter(function(facet) {
            return self.hierarchicalFacetsRefinements[facet].length > 0;
        }));
    },
    /**
   * Returned the list of all disjunctive facets not refined
   * @method
   * @return {string[]}
   */ getUnrefinedDisjunctiveFacets: function() {
        var refinedFacets = this.getRefinedDisjunctiveFacets();
        return this.disjunctiveFacets.filter(function(f) {
            return refinedFacets.indexOf(f) === -1;
        });
    },
    managedParameters: [
        'index',
        'facets',
        'disjunctiveFacets',
        'facetsRefinements',
        'hierarchicalFacets',
        'facetsExcludes',
        'disjunctiveFacetsRefinements',
        'numericRefinements',
        'tagRefinements',
        'hierarchicalFacetsRefinements'
    ],
    getQueryParams: function getQueryParams() {
        var managedParameters = this.managedParameters;
        var queryParams = {
        };
        var self = this;
        Object.keys(this).forEach(function(paramName) {
            var paramValue = self[paramName];
            if (managedParameters.indexOf(paramName) === -1 && paramValue !== undefined) queryParams[paramName] = paramValue;
        });
        return queryParams;
    },
    /**
   * Let the user set a specific value for a given parameter. Will return the
   * same instance if the parameter is invalid or if the value is the same as the
   * previous one.
   * @method
   * @param {string} parameter the parameter name
   * @param {any} value the value to be set, must be compliant with the definition
   * of the attribute on the object
   * @return {SearchParameters} the updated state
   */ setQueryParameter: function setParameter(parameter, value) {
        if (this[parameter] === value) return this;
        var modification = {
        };
        modification[parameter] = value;
        return this.setQueryParameters(modification);
    },
    /**
   * Let the user set any of the parameters with a plain object.
   * @method
   * @param {object} params all the keys and the values to be updated
   * @return {SearchParameters} a new updated instance
   */ setQueryParameters: function setQueryParameters(params) {
        if (!params) return this;
        var error = SearchParameters.validate(this, params);
        if (error) throw error;
        var self = this;
        var nextWithNumbers = SearchParameters._parseNumbers(params);
        var previousPlainObject = Object.keys(this).reduce(function(acc, key) {
            acc[key] = self[key];
            return acc;
        }, {
        });
        var nextPlainObject = Object.keys(nextWithNumbers).reduce(function(previous, key) {
            var isPreviousValueDefined = previous[key] !== undefined;
            var isNextValueDefined = nextWithNumbers[key] !== undefined;
            if (isPreviousValueDefined && !isNextValueDefined) return omit(previous, [
                key
            ]);
            if (isNextValueDefined) previous[key] = nextWithNumbers[key];
            return previous;
        }, previousPlainObject);
        return new this.constructor(nextPlainObject);
    },
    /**
   * Returns a new instance with the page reset. Two scenarios possible:
   * the page is omitted -> return the given instance
   * the page is set -> return a new instance with a page of 0
   * @return {SearchParameters} a new updated instance
   */ resetPage: function() {
        if (this.page === undefined) return this;
        return this.setPage(0);
    },
    /**
   * Helper function to get the hierarchicalFacet separator or the default one (`>`)
   * @param  {object} hierarchicalFacet
   * @return {string} returns the hierarchicalFacet.separator or `>` as default
   */ _getHierarchicalFacetSortBy: function(hierarchicalFacet) {
        return hierarchicalFacet.sortBy || [
            'isRefined:desc',
            'name:asc'
        ];
    },
    /**
   * Helper function to get the hierarchicalFacet separator or the default one (`>`)
   * @private
   * @param  {object} hierarchicalFacet
   * @return {string} returns the hierarchicalFacet.separator or `>` as default
   */ _getHierarchicalFacetSeparator: function(hierarchicalFacet) {
        return hierarchicalFacet.separator || ' > ';
    },
    /**
   * Helper function to get the hierarchicalFacet prefix path or null
   * @private
   * @param  {object} hierarchicalFacet
   * @return {string} returns the hierarchicalFacet.rootPath or null as default
   */ _getHierarchicalRootPath: function(hierarchicalFacet) {
        return hierarchicalFacet.rootPath || null;
    },
    /**
   * Helper function to check if we show the parent level of the hierarchicalFacet
   * @private
   * @param  {object} hierarchicalFacet
   * @return {string} returns the hierarchicalFacet.showParentLevel or true as default
   */ _getHierarchicalShowParentLevel: function(hierarchicalFacet) {
        if (typeof hierarchicalFacet.showParentLevel === 'boolean') return hierarchicalFacet.showParentLevel;
        return true;
    },
    /**
   * Helper function to get the hierarchicalFacet by it's name
   * @param  {string} hierarchicalFacetName
   * @return {object} a hierarchicalFacet
   */ getHierarchicalFacetByName: function(hierarchicalFacetName) {
        return find(this.hierarchicalFacets, function(f) {
            return f.name === hierarchicalFacetName;
        });
    },
    /**
   * Get the current breadcrumb for a hierarchical facet, as an array
   * @param  {string} facetName Hierarchical facet name
   * @return {array.<string>} the path as an array of string
   */ getHierarchicalFacetBreadcrumb: function(facetName) {
        if (!this.isHierarchicalFacet(facetName)) return [];
        var refinement = this.getHierarchicalRefinement(facetName)[0];
        if (!refinement) return [];
        var separator = this._getHierarchicalFacetSeparator(this.getHierarchicalFacetByName(facetName));
        var path = refinement.split(separator);
        return path.map(function(part) {
            return part.trim();
        });
    },
    toString: function() {
        return JSON.stringify(this, null, 2);
    }
};
/**
 * Callback used for clearRefinement method
 * @callback SearchParameters.clearCallback
 * @param {OperatorList|FacetList} value the value of the filter
 * @param {string} key the current attribute name
 * @param {string} type `numeric`, `disjunctiveFacet`, `conjunctiveFacet`, `hierarchicalFacet` or `exclude`
 * depending on the type of facet
 * @return {boolean} `true` if the element should be removed. `false` otherwise.
 */ module.exports = SearchParameters;

},{"../functions/merge":"eGyc5","../functions/defaultsPure":"2BeUG","../functions/intersection":"iaaF4","../functions/find":"hBcv7","../functions/valToNumber":"jWUZB","../functions/omit":"l3IzD","../functions/objectHasKeys":"alqSr","../utils/isValidUserToken":"eZyse","./RefinementList":"5Zz04"}],"eGyc5":[function(require,module,exports) {
'use strict';
function clone(value) {
    if (typeof value === 'object' && value !== null) return _merge(Array.isArray(value) ? [] : {
    }, value);
    return value;
}
function isObjectOrArrayOrFunction(value) {
    return typeof value === 'function' || Array.isArray(value) || Object.prototype.toString.call(value) === '[object Object]';
}
function _merge(target, source) {
    if (target === source) return target;
    for(var key in source){
        if (!Object.prototype.hasOwnProperty.call(source, key) || key === '__proto__') continue;
        var sourceVal = source[key];
        var targetVal = target[key];
        if (typeof targetVal !== 'undefined' && typeof sourceVal === 'undefined') continue;
        if (isObjectOrArrayOrFunction(targetVal) && isObjectOrArrayOrFunction(sourceVal)) target[key] = _merge(targetVal, sourceVal);
        else target[key] = clone(sourceVal);
    }
    return target;
}
/**
 * This method is like Object.assign, but recursively merges own and inherited
 * enumerable keyed properties of source objects into the destination object.
 *
 * NOTE: this behaves like lodash/merge, but:
 * - does mutate functions if they are a source
 * - treats non-plain objects as plain
 * - does not work for circular objects
 * - treats sparse arrays as sparse
 * - does not convert Array-like objects (Arguments, NodeLists, etc.) to arrays
 *
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 */ function merge(target) {
    if (!isObjectOrArrayOrFunction(target)) target = {
    };
    for(var i = 1, l = arguments.length; i < l; i++){
        var source = arguments[i];
        if (isObjectOrArrayOrFunction(source)) _merge(target, source);
    }
    return target;
}
module.exports = merge;

},{}],"2BeUG":[function(require,module,exports) {
'use strict';
// NOTE: this behaves like lodash/defaults, but doesn't mutate the target
// it also preserve keys order
module.exports = function defaultsPure() {
    var sources = Array.prototype.slice.call(arguments);
    return sources.reduceRight(function(acc, source) {
        Object.keys(Object(source)).forEach(function(key) {
            if (source[key] === undefined) return;
            if (acc[key] !== undefined) // remove if already added, so that we can add it in correct order
            delete acc[key];
            acc[key] = source[key];
        });
        return acc;
    }, {
    });
};

},{}],"iaaF4":[function(require,module,exports) {
'use strict';
function intersection(arr1, arr2) {
    return arr1.filter(function(value, index) {
        return arr2.indexOf(value) > -1 && arr1.indexOf(value) === index /* skips duplicates */ ;
    });
}
module.exports = intersection;

},{}],"hBcv7":[function(require,module,exports) {
'use strict';
// @MAJOR can be replaced by native Array#find when we change support
module.exports = function find(array, comparator) {
    if (!Array.isArray(array)) return undefined;
    for(var i = 0; i < array.length; i++){
        if (comparator(array[i])) return array[i];
    }
};

},{}],"jWUZB":[function(require,module,exports) {
'use strict';
function valToNumber(v) {
    if (typeof v === 'number') return v;
    else if (typeof v === 'string') return parseFloat(v);
    else if (Array.isArray(v)) return v.map(valToNumber);
    throw new Error('The value should be a number, a parsable string or an array of those.');
}
module.exports = valToNumber;

},{}],"l3IzD":[function(require,module,exports) {
'use strict';
// https://github.com/babel/babel/blob/3aaafae053fa75febb3aa45d45b6f00646e30ba4/packages/babel-helpers/src/helpers.js#L604-L620
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source === null) return {
    };
    var target = {
    };
    var sourceKeys = Object.keys(source);
    var key;
    var i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
module.exports = _objectWithoutPropertiesLoose;

},{}],"alqSr":[function(require,module,exports) {
'use strict';
function objectHasKeys(obj) {
    return obj && Object.keys(obj).length > 0;
}
module.exports = objectHasKeys;

},{}],"eZyse":[function(require,module,exports) {
'use strict';
module.exports = function isValidUserToken(userToken) {
    if (userToken === null) return false;
    return /^[a-zA-Z0-9_-]{1,64}$/.test(userToken);
};

},{}],"5Zz04":[function(require,module,exports) {
'use strict';
/**
 * Functions to manipulate refinement lists
 *
 * The RefinementList is not formally defined through a prototype but is based
 * on a specific structure.
 *
 * @module SearchParameters.refinementList
 *
 * @typedef {string[]} SearchParameters.refinementList.Refinements
 * @typedef {Object.<string, SearchParameters.refinementList.Refinements>} SearchParameters.refinementList.RefinementList
 */ var defaultsPure = require('../functions/defaultsPure');
var omit = require('../functions/omit');
var objectHasKeys = require('../functions/objectHasKeys');
var lib = {
    /**
   * Adds a refinement to a RefinementList
   * @param {RefinementList} refinementList the initial list
   * @param {string} attribute the attribute to refine
   * @param {string} value the value of the refinement, if the value is not a string it will be converted
   * @return {RefinementList} a new and updated refinement list
   */ addRefinement: function addRefinement(refinementList, attribute, value) {
        if (lib.isRefined(refinementList, attribute, value)) return refinementList;
        var valueAsString = '' + value;
        var facetRefinement = !refinementList[attribute] ? [
            valueAsString
        ] : refinementList[attribute].concat(valueAsString);
        var mod = {
        };
        mod[attribute] = facetRefinement;
        return defaultsPure({
        }, mod, refinementList);
    },
    /**
   * Removes refinement(s) for an attribute:
   *  - if the value is specified removes the refinement for the value on the attribute
   *  - if no value is specified removes all the refinements for this attribute
   * @param {RefinementList} refinementList the initial list
   * @param {string} attribute the attribute to refine
   * @param {string} [value] the value of the refinement
   * @return {RefinementList} a new and updated refinement lst
   */ removeRefinement: function removeRefinement(refinementList, attribute, value) {
        if (value === undefined) // we use the "filter" form of clearRefinement, since it leaves empty values as-is
        // the form with a string will remove the attribute completely
        return lib.clearRefinement(refinementList, function(v, f) {
            return attribute === f;
        });
        var valueAsString = '' + value;
        return lib.clearRefinement(refinementList, function(v, f) {
            return attribute === f && valueAsString === v;
        });
    },
    /**
   * Toggles the refinement value for an attribute.
   * @param {RefinementList} refinementList the initial list
   * @param {string} attribute the attribute to refine
   * @param {string} value the value of the refinement
   * @return {RefinementList} a new and updated list
   */ toggleRefinement: function toggleRefinement(refinementList, attribute, value) {
        if (value === undefined) throw new Error('toggleRefinement should be used with a value');
        if (lib.isRefined(refinementList, attribute, value)) return lib.removeRefinement(refinementList, attribute, value);
        return lib.addRefinement(refinementList, attribute, value);
    },
    /**
   * Clear all or parts of a RefinementList. Depending on the arguments, three
   * kinds of behavior can happen:
   *  - if no attribute is provided: clears the whole list
   *  - if an attribute is provided as a string: clears the list for the specific attribute
   *  - if an attribute is provided as a function: discards the elements for which the function returns true
   * @param {RefinementList} refinementList the initial list
   * @param {string} [attribute] the attribute or function to discard
   * @param {string} [refinementType] optional parameter to give more context to the attribute function
   * @return {RefinementList} a new and updated refinement list
   */ clearRefinement: function clearRefinement(refinementList, attribute, refinementType) {
        if (attribute === undefined) {
            if (!objectHasKeys(refinementList)) return refinementList;
            return {
            };
        } else if (typeof attribute === 'string') return omit(refinementList, [
            attribute
        ]);
        else if (typeof attribute === 'function') {
            var hasChanged = false;
            var newRefinementList = Object.keys(refinementList).reduce(function(memo, key) {
                var values = refinementList[key] || [];
                var facetList = values.filter(function(value) {
                    return !attribute(value, key, refinementType);
                });
                if (facetList.length !== values.length) hasChanged = true;
                memo[key] = facetList;
                return memo;
            }, {
            });
            if (hasChanged) return newRefinementList;
            return refinementList;
        }
    },
    /**
   * Test if the refinement value is used for the attribute. If no refinement value
   * is provided, test if the refinementList contains any refinement for the
   * given attribute.
   * @param {RefinementList} refinementList the list of refinement
   * @param {string} attribute name of the attribute
   * @param {string} [refinementValue] value of the filter/refinement
   * @return {boolean}
   */ isRefined: function isRefined(refinementList, attribute, refinementValue) {
        var containsRefinements = !!refinementList[attribute] && refinementList[attribute].length > 0;
        if (refinementValue === undefined || !containsRefinements) return containsRefinements;
        var refinementValueAsString = '' + refinementValue;
        return refinementList[attribute].indexOf(refinementValueAsString) !== -1;
    }
};
module.exports = lib;

},{"../functions/defaultsPure":"2BeUG","../functions/omit":"l3IzD","../functions/objectHasKeys":"alqSr"}],"lUGU6":[function(require,module,exports) {
'use strict';
var merge = require('../functions/merge');
var defaultsPure = require('../functions/defaultsPure');
var orderBy = require('../functions/orderBy');
var compact = require('../functions/compact');
var find = require('../functions/find');
var findIndex = require('../functions/findIndex');
var formatSort = require('../functions/formatSort');
var generateHierarchicalTree = require('./generate-hierarchical-tree');
/**
 * @typedef SearchResults.Facet
 * @type {object}
 * @property {string} name name of the attribute in the record
 * @property {object} data the faceting data: value, number of entries
 * @property {object} stats undefined unless facet_stats is retrieved from algolia
 */ /**
 * @typedef SearchResults.HierarchicalFacet
 * @type {object}
 * @property {string} name name of the current value given the hierarchical level, trimmed.
 * If root node, you get the facet name
 * @property {number} count number of objects matching this hierarchical value
 * @property {string} path the current hierarchical value full path
 * @property {boolean} isRefined `true` if the current value was refined, `false` otherwise
 * @property {HierarchicalFacet[]} data sub values for the current level
 */ /**
 * @typedef SearchResults.FacetValue
 * @type {object}
 * @property {string} name the facet value itself
 * @property {number} count times this facet appears in the results
 * @property {boolean} isRefined is the facet currently selected
 * @property {boolean} isExcluded is the facet currently excluded (only for conjunctive facets)
 */ /**
 * @typedef Refinement
 * @type {object}
 * @property {string} type the type of filter used:
 * `numeric`, `facet`, `exclude`, `disjunctive`, `hierarchical`
 * @property {string} attributeName name of the attribute used for filtering
 * @property {string} name the value of the filter
 * @property {number} numericValue the value as a number. Only for numeric filters.
 * @property {string} operator the operator used. Only for numeric filters.
 * @property {number} count the number of computed hits for this filter. Only on facets.
 * @property {boolean} exhaustive if the count is exhaustive
 */ /**
 * @param {string[]} attributes
 */ function getIndices(attributes) {
    var indices = {
    };
    attributes.forEach(function(val, idx) {
        indices[val] = idx;
    });
    return indices;
}
function assignFacetStats(dest, facetStats, key) {
    if (facetStats && facetStats[key]) dest.stats = facetStats[key];
}
/**
 * @typedef {Object} HierarchicalFacet
 * @property {string} name
 * @property {string[]} attributes
 */ /**
 * @param {HierarchicalFacet[]} hierarchicalFacets
 * @param {string} hierarchicalAttributeName
 */ function findMatchingHierarchicalFacetFromAttributeName(hierarchicalFacets, hierarchicalAttributeName) {
    return find(hierarchicalFacets, function facetKeyMatchesAttribute(hierarchicalFacet) {
        var facetNames = hierarchicalFacet.attributes || [];
        return facetNames.indexOf(hierarchicalAttributeName) > -1;
    });
}
/*eslint-disable */ /**
 * Constructor for SearchResults
 * @class
 * @classdesc SearchResults contains the results of a query to Algolia using the
 * {@link AlgoliaSearchHelper}.
 * @param {SearchParameters} state state that led to the response
 * @param {array.<object>} results the results from algolia client
 * @example <caption>SearchResults of the first query in
 * <a href="http://demos.algolia.com/instant-search-demo">the instant search demo</a></caption>
{
   "hitsPerPage": 10,
   "processingTimeMS": 2,
   "facets": [
      {
         "name": "type",
         "data": {
            "HardGood": 6627,
            "BlackTie": 550,
            "Music": 665,
            "Software": 131,
            "Game": 456,
            "Movie": 1571
         },
         "exhaustive": false
      },
      {
         "exhaustive": false,
         "data": {
            "Free shipping": 5507
         },
         "name": "shipping"
      }
  ],
   "hits": [
      {
         "thumbnailImage": "http://img.bbystatic.com/BestBuy_US/images/products/1688/1688832_54x108_s.gif",
         "_highlightResult": {
            "shortDescription": {
               "matchLevel": "none",
               "value": "Safeguard your PC, Mac, Android and iOS devices with comprehensive Internet protection",
               "matchedWords": []
            },
            "category": {
               "matchLevel": "none",
               "value": "Computer Security Software",
               "matchedWords": []
            },
            "manufacturer": {
               "matchedWords": [],
               "value": "Webroot",
               "matchLevel": "none"
            },
            "name": {
               "value": "Webroot SecureAnywhere Internet Security (3-Device) (1-Year Subscription) - Mac/Windows",
               "matchedWords": [],
               "matchLevel": "none"
            }
         },
         "image": "http://img.bbystatic.com/BestBuy_US/images/products/1688/1688832_105x210_sc.jpg",
         "shipping": "Free shipping",
         "bestSellingRank": 4,
         "shortDescription": "Safeguard your PC, Mac, Android and iOS devices with comprehensive Internet protection",
         "url": "http://www.bestbuy.com/site/webroot-secureanywhere-internet-security-3-devi…d=1219060687969&skuId=1688832&cmp=RMX&ky=2d3GfEmNIzjA0vkzveHdZEBgpPCyMnLTJ",
         "name": "Webroot SecureAnywhere Internet Security (3-Device) (1-Year Subscription) - Mac/Windows",
         "category": "Computer Security Software",
         "salePrice_range": "1 - 50",
         "objectID": "1688832",
         "type": "Software",
         "customerReviewCount": 5980,
         "salePrice": 49.99,
         "manufacturer": "Webroot"
      },
      ....
  ],
   "nbHits": 10000,
   "disjunctiveFacets": [
      {
         "exhaustive": false,
         "data": {
            "5": 183,
            "12": 112,
            "7": 149,
            ...
         },
         "name": "customerReviewCount",
         "stats": {
            "max": 7461,
            "avg": 157.939,
            "min": 1
         }
      },
      {
         "data": {
            "Printer Ink": 142,
            "Wireless Speakers": 60,
            "Point & Shoot Cameras": 48,
            ...
         },
         "name": "category",
         "exhaustive": false
      },
      {
         "exhaustive": false,
         "data": {
            "> 5000": 2,
            "1 - 50": 6524,
            "501 - 2000": 566,
            "201 - 500": 1501,
            "101 - 200": 1360,
            "2001 - 5000": 47
         },
         "name": "salePrice_range"
      },
      {
         "data": {
            "Dynex™": 202,
            "Insignia™": 230,
            "PNY": 72,
            ...
         },
         "name": "manufacturer",
         "exhaustive": false
      }
  ],
   "query": "",
   "nbPages": 100,
   "page": 0,
   "index": "bestbuy"
}
 **/ /*eslint-enable */ function SearchResults(state, results) {
    var mainSubResponse = results[0];
    this._rawResults = results;
    var self = this;
    // https://www.algolia.com/doc/api-reference/api-methods/search/#response
    Object.keys(mainSubResponse).forEach(function(key) {
        self[key] = mainSubResponse[key];
    });
    /**
   * query used to generate the results
   * @name query
   * @member {string}
   * @memberof SearchResults
   * @instance
   */ /**
   * The query as parsed by the engine given all the rules.
   * @name parsedQuery
   * @member {string}
   * @memberof SearchResults
   * @instance
   */ /**
   * all the records that match the search parameters. Each record is
   * augmented with a new attribute `_highlightResult`
   * which is an object keyed by attribute and with the following properties:
   *  - `value` : the value of the facet highlighted (html)
   *  - `matchLevel`: full, partial or none depending on how the query terms match
   * @name hits
   * @member {object[]}
   * @memberof SearchResults
   * @instance
   */ /**
   * index where the results come from
   * @name index
   * @member {string}
   * @memberof SearchResults
   * @instance
   */ /**
   * number of hits per page requested
   * @name hitsPerPage
   * @member {number}
   * @memberof SearchResults
   * @instance
   */ /**
   * total number of hits of this query on the index
   * @name nbHits
   * @member {number}
   * @memberof SearchResults
   * @instance
   */ /**
   * total number of pages with respect to the number of hits per page and the total number of hits
   * @name nbPages
   * @member {number}
   * @memberof SearchResults
   * @instance
   */ /**
   * current page
   * @name page
   * @member {number}
   * @memberof SearchResults
   * @instance
   */ /**
   * The position if the position was guessed by IP.
   * @name aroundLatLng
   * @member {string}
   * @memberof SearchResults
   * @instance
   * @example "48.8637,2.3615",
   */ /**
   * The radius computed by Algolia.
   * @name automaticRadius
   * @member {string}
   * @memberof SearchResults
   * @instance
   * @example "126792922",
   */ /**
   * String identifying the server used to serve this request.
   *
   * getRankingInfo needs to be set to `true` for this to be returned
   *
   * @name serverUsed
   * @member {string}
   * @memberof SearchResults
   * @instance
   * @example "c7-use-2.algolia.net",
   */ /**
   * Boolean that indicates if the computation of the counts did time out.
   * @deprecated
   * @name timeoutCounts
   * @member {boolean}
   * @memberof SearchResults
   * @instance
   */ /**
   * Boolean that indicates if the computation of the hits did time out.
   * @deprecated
   * @name timeoutHits
   * @member {boolean}
   * @memberof SearchResults
   * @instance
   */ /**
   * True if the counts of the facets is exhaustive
   * @name exhaustiveFacetsCount
   * @member {boolean}
   * @memberof SearchResults
   * @instance
   */ /**
   * True if the number of hits is exhaustive
   * @name exhaustiveNbHits
   * @member {boolean}
   * @memberof SearchResults
   * @instance
   */ /**
   * Contains the userData if they are set by a [query rule](https://www.algolia.com/doc/guides/query-rules/query-rules-overview/).
   * @name userData
   * @member {object[]}
   * @memberof SearchResults
   * @instance
   */ /**
   * queryID is the unique identifier of the query used to generate the current search results.
   * This value is only available if the `clickAnalytics` search parameter is set to `true`.
   * @name queryID
   * @member {string}
   * @memberof SearchResults
   * @instance
   */ /**
   * sum of the processing time of all the queries
   * @member {number}
   */ this.processingTimeMS = results.reduce(function(sum, result) {
        return result.processingTimeMS === undefined ? sum : sum + result.processingTimeMS;
    }, 0);
    /**
   * disjunctive facets results
   * @member {SearchResults.Facet[]}
   */ this.disjunctiveFacets = [];
    /**
   * disjunctive facets results
   * @member {SearchResults.HierarchicalFacet[]}
   */ this.hierarchicalFacets = state.hierarchicalFacets.map(function initFutureTree() {
        return [];
    });
    /**
   * other facets results
   * @member {SearchResults.Facet[]}
   */ this.facets = [];
    var disjunctiveFacets = state.getRefinedDisjunctiveFacets();
    var facetsIndices = getIndices(state.facets);
    var disjunctiveFacetsIndices = getIndices(state.disjunctiveFacets);
    var nextDisjunctiveResult = 1;
    // Since we send request only for disjunctive facets that have been refined,
    // we get the facets information from the first, general, response.
    var mainFacets = mainSubResponse.facets || {
    };
    Object.keys(mainFacets).forEach(function(facetKey) {
        var facetValueObject = mainFacets[facetKey];
        var hierarchicalFacet = findMatchingHierarchicalFacetFromAttributeName(state.hierarchicalFacets, facetKey);
        if (hierarchicalFacet) {
            // Place the hierarchicalFacet data at the correct index depending on
            // the attributes order that was defined at the helper initialization
            var facetIndex = hierarchicalFacet.attributes.indexOf(facetKey);
            var idxAttributeName = findIndex(state.hierarchicalFacets, function(f) {
                return f.name === hierarchicalFacet.name;
            });
            self.hierarchicalFacets[idxAttributeName][facetIndex] = {
                attribute: facetKey,
                data: facetValueObject,
                exhaustive: mainSubResponse.exhaustiveFacetsCount
            };
        } else {
            var isFacetDisjunctive = state.disjunctiveFacets.indexOf(facetKey) !== -1;
            var isFacetConjunctive = state.facets.indexOf(facetKey) !== -1;
            var position;
            if (isFacetDisjunctive) {
                position = disjunctiveFacetsIndices[facetKey];
                self.disjunctiveFacets[position] = {
                    name: facetKey,
                    data: facetValueObject,
                    exhaustive: mainSubResponse.exhaustiveFacetsCount
                };
                assignFacetStats(self.disjunctiveFacets[position], mainSubResponse.facets_stats, facetKey);
            }
            if (isFacetConjunctive) {
                position = facetsIndices[facetKey];
                self.facets[position] = {
                    name: facetKey,
                    data: facetValueObject,
                    exhaustive: mainSubResponse.exhaustiveFacetsCount
                };
                assignFacetStats(self.facets[position], mainSubResponse.facets_stats, facetKey);
            }
        }
    });
    // Make sure we do not keep holes within the hierarchical facets
    this.hierarchicalFacets = compact(this.hierarchicalFacets);
    // aggregate the refined disjunctive facets
    disjunctiveFacets.forEach(function(disjunctiveFacet) {
        var result = results[nextDisjunctiveResult];
        var facets = result && result.facets ? result.facets : {
        };
        var hierarchicalFacet = state.getHierarchicalFacetByName(disjunctiveFacet);
        // There should be only item in facets.
        Object.keys(facets).forEach(function(dfacet) {
            var facetResults = facets[dfacet];
            var position;
            if (hierarchicalFacet) {
                position = findIndex(state.hierarchicalFacets, function(f) {
                    return f.name === hierarchicalFacet.name;
                });
                var attributeIndex = findIndex(self.hierarchicalFacets[position], function(f) {
                    return f.attribute === dfacet;
                });
                // previous refinements and no results so not able to find it
                if (attributeIndex === -1) return;
                self.hierarchicalFacets[position][attributeIndex].data = merge({
                }, self.hierarchicalFacets[position][attributeIndex].data, facetResults);
            } else {
                position = disjunctiveFacetsIndices[dfacet];
                var dataFromMainRequest = mainSubResponse.facets && mainSubResponse.facets[dfacet] || {
                };
                self.disjunctiveFacets[position] = {
                    name: dfacet,
                    data: defaultsPure({
                    }, facetResults, dataFromMainRequest),
                    exhaustive: result.exhaustiveFacetsCount
                };
                assignFacetStats(self.disjunctiveFacets[position], result.facets_stats, dfacet);
                if (state.disjunctiveFacetsRefinements[dfacet]) state.disjunctiveFacetsRefinements[dfacet].forEach(function(refinementValue) {
                    // add the disjunctive refinements if it is no more retrieved
                    if (!self.disjunctiveFacets[position].data[refinementValue] && state.disjunctiveFacetsRefinements[dfacet].indexOf(refinementValue) > -1) self.disjunctiveFacets[position].data[refinementValue] = 0;
                });
            }
        });
        nextDisjunctiveResult++;
    });
    // if we have some root level values for hierarchical facets, merge them
    state.getRefinedHierarchicalFacets().forEach(function(refinedFacet) {
        var hierarchicalFacet = state.getHierarchicalFacetByName(refinedFacet);
        var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
        var currentRefinement = state.getHierarchicalRefinement(refinedFacet);
        // if we are already at a root refinement (or no refinement at all), there is no
        // root level values request
        if (currentRefinement.length === 0 || currentRefinement[0].split(separator).length < 2) return;
        var result = results[nextDisjunctiveResult];
        var facets = result && result.facets ? result.facets : {
        };
        Object.keys(facets).forEach(function(dfacet) {
            var facetResults = facets[dfacet];
            var position = findIndex(state.hierarchicalFacets, function(f) {
                return f.name === hierarchicalFacet.name;
            });
            var attributeIndex = findIndex(self.hierarchicalFacets[position], function(f) {
                return f.attribute === dfacet;
            });
            // previous refinements and no results so not able to find it
            if (attributeIndex === -1) return;
            // when we always get root levels, if the hits refinement is `beers > IPA` (count: 5),
            // then the disjunctive values will be `beers` (count: 100),
            // but we do not want to display
            //   | beers (100)
            //     > IPA (5)
            // We want
            //   | beers (5)
            //     > IPA (5)
            var defaultData = {
            };
            if (currentRefinement.length > 0) {
                var root = currentRefinement[0].split(separator)[0];
                defaultData[root] = self.hierarchicalFacets[position][attributeIndex].data[root];
            }
            self.hierarchicalFacets[position][attributeIndex].data = defaultsPure(defaultData, facetResults, self.hierarchicalFacets[position][attributeIndex].data);
        });
        nextDisjunctiveResult++;
    });
    // add the excludes
    Object.keys(state.facetsExcludes).forEach(function(facetName) {
        var excludes = state.facetsExcludes[facetName];
        var position = facetsIndices[facetName];
        self.facets[position] = {
            name: facetName,
            data: mainSubResponse.facets[facetName],
            exhaustive: mainSubResponse.exhaustiveFacetsCount
        };
        excludes.forEach(function(facetValue) {
            self.facets[position] = self.facets[position] || {
                name: facetName
            };
            self.facets[position].data = self.facets[position].data || {
            };
            self.facets[position].data[facetValue] = 0;
        });
    });
    /**
   * @type {Array}
   */ this.hierarchicalFacets = this.hierarchicalFacets.map(generateHierarchicalTree(state));
    /**
   * @type {Array}
   */ this.facets = compact(this.facets);
    /**
   * @type {Array}
   */ this.disjunctiveFacets = compact(this.disjunctiveFacets);
    this._state = state;
}
/**
 * Get a facet object with its name
 * @deprecated
 * @param {string} name name of the faceted attribute
 * @return {SearchResults.Facet} the facet object
 */ SearchResults.prototype.getFacetByName = function(name) {
    function predicate(facet) {
        return facet.name === name;
    }
    return find(this.facets, predicate) || find(this.disjunctiveFacets, predicate) || find(this.hierarchicalFacets, predicate);
};
/**
 * Get the facet values of a specified attribute from a SearchResults object.
 * @private
 * @param {SearchResults} results the search results to search in
 * @param {string} attribute name of the faceted attribute to search for
 * @return {array|object} facet values. For the hierarchical facets it is an object.
 */ function extractNormalizedFacetValues(results, attribute) {
    function predicate(facet) {
        return facet.name === attribute;
    }
    if (results._state.isConjunctiveFacet(attribute)) {
        var facet1 = find(results.facets, predicate);
        if (!facet1) return [];
        return Object.keys(facet1.data).map(function(name) {
            return {
                name: name,
                count: facet1.data[name],
                isRefined: results._state.isFacetRefined(attribute, name),
                isExcluded: results._state.isExcludeRefined(attribute, name)
            };
        });
    } else if (results._state.isDisjunctiveFacet(attribute)) {
        var disjunctiveFacet = find(results.disjunctiveFacets, predicate);
        if (!disjunctiveFacet) return [];
        return Object.keys(disjunctiveFacet.data).map(function(name) {
            return {
                name: name,
                count: disjunctiveFacet.data[name],
                isRefined: results._state.isDisjunctiveFacetRefined(attribute, name)
            };
        });
    } else if (results._state.isHierarchicalFacet(attribute)) return find(results.hierarchicalFacets, predicate);
}
/**
 * Sort nodes of a hierarchical or disjunctive facet results
 * @private
 * @param {function} sortFn
 * @param {HierarchicalFacet|Array} node node upon which we want to apply the sort
 * @param {string[]} names attribute names
 * @param {number} [level=0] current index in the names array
 */ function recSort(sortFn, node, names, level) {
    level = level || 0;
    if (Array.isArray(node)) return sortFn(node, names[level]);
    if (!node.data || node.data.length === 0) return node;
    var children = node.data.map(function(childNode) {
        return recSort(sortFn, childNode, names, level + 1);
    });
    var sortedChildren = sortFn(children, names[level]);
    var newNode = defaultsPure({
        data: sortedChildren
    }, node);
    return newNode;
}
SearchResults.DEFAULT_SORT = [
    'isRefined:desc',
    'count:desc',
    'name:asc'
];
function vanillaSortFn(order, data) {
    return data.sort(order);
}
/**
 * @typedef FacetOrdering
 * @type {Object}
 * @property {string[]} [order]
 * @property {'count' | 'alpha' | 'hidden'} [sortRemainingBy]
 */ /**
 * Sorts facet arrays via their facet ordering
 * @param {Array} facetValues the values
 * @param {FacetOrdering} facetOrdering the ordering
 * @returns {Array}
 */ function sortViaFacetOrdering(facetValues, facetOrdering) {
    var orderedFacets = [];
    var remainingFacets = [];
    var order = facetOrdering.order || [];
    /**
   * an object with the keys being the values in order, the values their index:
   * ['one', 'two'] -> { one: 0, two: 1 }
   */ var reverseOrder = order.reduce(function(acc, name, i) {
        acc[name] = i;
        return acc;
    }, {
    });
    facetValues.forEach(function(item) {
        // hierarchical facets get sorted using their raw name
        var name = item.path || item.name;
        if (reverseOrder[name] !== undefined) orderedFacets[reverseOrder[name]] = item;
        else remainingFacets.push(item);
    });
    orderedFacets = orderedFacets.filter(function(facet) {
        return facet;
    });
    var sortRemainingBy = facetOrdering.sortRemainingBy;
    var ordering;
    if (sortRemainingBy === 'hidden') return orderedFacets;
    else if (sortRemainingBy === 'alpha') ordering = [
        [
            'path',
            'name'
        ],
        [
            'asc',
            'asc'
        ]
    ];
    else ordering = [
        [
            'count'
        ],
        [
            'desc'
        ]
    ];
    return orderedFacets.concat(orderBy(remainingFacets, ordering[0], ordering[1]));
}
/**
 * @param {SearchResults} results the search results class
 * @param {string} attribute the attribute to retrieve ordering of
 * @returns {FacetOrdering=}
 */ function getFacetOrdering(results, attribute) {
    return results.renderingContent && results.renderingContent.facetOrdering && results.renderingContent.facetOrdering.values && results.renderingContent.facetOrdering.values[attribute];
}
/**
 * Get a the list of values for a given facet attribute. Those values are sorted
 * refinement first, descending count (bigger value on top), and name ascending
 * (alphabetical order). The sort formula can overridden using either string based
 * predicates or a function.
 *
 * This method will return all the values returned by the Algolia engine plus all
 * the values already refined. This means that it can happen that the
 * `maxValuesPerFacet` [configuration](https://www.algolia.com/doc/rest-api/search#param-maxValuesPerFacet)
 * might not be respected if you have facet values that are already refined.
 * @param {string} attribute attribute name
 * @param {object} opts configuration options.
 * @param {boolean} [opts.facetOrdering]
 * Force the use of facetOrdering from the result if a sortBy is present. If
 * sortBy isn't present, facetOrdering will be used automatically.
 * @param {Array.<string> | function} opts.sortBy
 * When using strings, it consists of
 * the name of the [FacetValue](#SearchResults.FacetValue) or the
 * [HierarchicalFacet](#SearchResults.HierarchicalFacet) attributes with the
 * order (`asc` or `desc`). For example to order the value by count, the
 * argument would be `['count:asc']`.
 *
 * If only the attribute name is specified, the ordering defaults to the one
 * specified in the default value for this attribute.
 *
 * When not specified, the order is
 * ascending.  This parameter can also be a function which takes two facet
 * values and should return a number, 0 if equal, 1 if the first argument is
 * bigger or -1 otherwise.
 *
 * The default value for this attribute `['isRefined:desc', 'count:desc', 'name:asc']`
 * @return {FacetValue[]|HierarchicalFacet|undefined} depending on the type of facet of
 * the attribute requested (hierarchical, disjunctive or conjunctive)
 * @example
 * helper.on('result', function(event){
 *   //get values ordered only by name ascending using the string predicate
 *   event.results.getFacetValues('city', {sortBy: ['name:asc']});
 *   //get values  ordered only by count ascending using a function
 *   event.results.getFacetValues('city', {
 *     // this is equivalent to ['count:asc']
 *     sortBy: function(a, b) {
 *       if (a.count === b.count) return 0;
 *       if (a.count > b.count)   return 1;
 *       if (b.count > a.count)   return -1;
 *     }
 *   });
 * });
 */ SearchResults.prototype.getFacetValues = function(attribute, opts) {
    var facetValues = extractNormalizedFacetValues(this, attribute);
    if (!facetValues) return undefined;
    var options = defaultsPure({
    }, opts, {
        sortBy: SearchResults.DEFAULT_SORT,
        // if no sortBy is given, attempt to sort based on facetOrdering
        // if it is given, we still allow to sort via facet ordering first
        facetOrdering: !(opts && opts.sortBy)
    });
    var results = this;
    var attributes;
    if (Array.isArray(facetValues)) attributes = [
        attribute
    ];
    else {
        var config = results._state.getHierarchicalFacetByName(facetValues.name);
        attributes = config.attributes;
    }
    return recSort(function(data, facetName) {
        if (options.facetOrdering) {
            var facetOrdering = getFacetOrdering(results, facetName);
            if (Boolean(facetOrdering)) return sortViaFacetOrdering(data, facetOrdering);
        }
        if (Array.isArray(options.sortBy)) {
            var order = formatSort(options.sortBy, SearchResults.DEFAULT_SORT);
            return orderBy(data, order[0], order[1]);
        } else if (typeof options.sortBy === 'function') return vanillaSortFn(options.sortBy, data);
        throw new Error("options.sortBy is optional but if defined it must be either an array of string (predicates) or a sorting function");
    }, facetValues, attributes);
};
/**
 * Returns the facet stats if attribute is defined and the facet contains some.
 * Otherwise returns undefined.
 * @param {string} attribute name of the faceted attribute
 * @return {object} The stats of the facet
 */ SearchResults.prototype.getFacetStats = function(attribute) {
    if (this._state.isConjunctiveFacet(attribute)) return getFacetStatsIfAvailable(this.facets, attribute);
    else if (this._state.isDisjunctiveFacet(attribute)) return getFacetStatsIfAvailable(this.disjunctiveFacets, attribute);
    return undefined;
};
/**
 * @typedef {Object} FacetListItem
 * @property {string} name
 */ /**
 * @param {FacetListItem[]} facetList (has more items, but enough for here)
 * @param {string} facetName
 */ function getFacetStatsIfAvailable(facetList, facetName) {
    var data = find(facetList, function(facet) {
        return facet.name === facetName;
    });
    return data && data.stats;
}
/**
 * Returns all refinements for all filters + tags. It also provides
 * additional information: count and exhaustiveness for each filter.
 *
 * See the [refinement type](#Refinement) for an exhaustive view of the available
 * data.
 *
 * Note that for a numeric refinement, results are grouped per operator, this
 * means that it will return responses for operators which are empty.
 *
 * @return {Array.<Refinement>} all the refinements
 */ SearchResults.prototype.getRefinements = function() {
    var state = this._state;
    var results = this;
    var res = [];
    Object.keys(state.facetsRefinements).forEach(function(attributeName) {
        state.facetsRefinements[attributeName].forEach(function(name) {
            res.push(getRefinement(state, 'facet', attributeName, name, results.facets));
        });
    });
    Object.keys(state.facetsExcludes).forEach(function(attributeName) {
        state.facetsExcludes[attributeName].forEach(function(name) {
            res.push(getRefinement(state, 'exclude', attributeName, name, results.facets));
        });
    });
    Object.keys(state.disjunctiveFacetsRefinements).forEach(function(attributeName) {
        state.disjunctiveFacetsRefinements[attributeName].forEach(function(name) {
            res.push(getRefinement(state, 'disjunctive', attributeName, name, results.disjunctiveFacets));
        });
    });
    Object.keys(state.hierarchicalFacetsRefinements).forEach(function(attributeName) {
        state.hierarchicalFacetsRefinements[attributeName].forEach(function(name) {
            res.push(getHierarchicalRefinement(state, attributeName, name, results.hierarchicalFacets));
        });
    });
    Object.keys(state.numericRefinements).forEach(function(attributeName) {
        var operators = state.numericRefinements[attributeName];
        Object.keys(operators).forEach(function(operator) {
            operators[operator].forEach(function(value) {
                res.push({
                    type: 'numeric',
                    attributeName: attributeName,
                    name: value,
                    numericValue: value,
                    operator: operator
                });
            });
        });
    });
    state.tagRefinements.forEach(function(name) {
        res.push({
            type: 'tag',
            attributeName: '_tags',
            name: name
        });
    });
    return res;
};
/**
 * @typedef {Object} Facet
 * @property {string} name
 * @property {Object} data
 * @property {boolean} exhaustive
 */ /**
 * @param {*} state
 * @param {*} type
 * @param {string} attributeName
 * @param {*} name
 * @param {Facet[]} resultsFacets
 */ function getRefinement(state, type, attributeName, name, resultsFacets) {
    var facet = find(resultsFacets, function(f) {
        return f.name === attributeName;
    });
    var count = facet && facet.data && facet.data[name] ? facet.data[name] : 0;
    var exhaustive = facet && facet.exhaustive || false;
    return {
        type: type,
        attributeName: attributeName,
        name: name,
        count: count,
        exhaustive: exhaustive
    };
}
/**
 * @param {*} state
 * @param {string} attributeName
 * @param {*} name
 * @param {Facet[]} resultsFacets
 */ function getHierarchicalRefinement(state, attributeName, name, resultsFacets) {
    var facetDeclaration = state.getHierarchicalFacetByName(attributeName);
    var separator = state._getHierarchicalFacetSeparator(facetDeclaration);
    var split = name.split(separator);
    var rootFacet = find(resultsFacets, function(facet) {
        return facet.name === attributeName;
    });
    var facet2 = split.reduce(function(intermediateFacet, part) {
        var newFacet = intermediateFacet && find(intermediateFacet.data, function(f) {
            return f.name === part;
        });
        return newFacet !== undefined ? newFacet : intermediateFacet;
    }, rootFacet);
    var count = facet2 && facet2.count || 0;
    var exhaustive = facet2 && facet2.exhaustive || false;
    var path = facet2 && facet2.path || '';
    return {
        type: 'hierarchical',
        attributeName: attributeName,
        name: path,
        count: count,
        exhaustive: exhaustive
    };
}
module.exports = SearchResults;

},{"../functions/merge":"eGyc5","../functions/defaultsPure":"2BeUG","../functions/orderBy":"kd35s","../functions/compact":"dFh0T","../functions/find":"hBcv7","../functions/findIndex":"fzLII","../functions/formatSort":"g3eEb","./generate-hierarchical-tree":"9tLzD"}],"kd35s":[function(require,module,exports) {
'use strict';
function compareAscending(value, other) {
    if (value !== other) {
        var valIsDefined = value !== undefined;
        var valIsNull = value === null;
        var othIsDefined = other !== undefined;
        var othIsNull = other === null;
        if (!othIsNull && value > other || valIsNull && othIsDefined || !valIsDefined) return 1;
        if (!valIsNull && value < other || othIsNull && valIsDefined || !othIsDefined) return -1;
    }
    return 0;
}
/**
 * @param {Array<object>} collection object with keys in attributes
 * @param {Array<string>} iteratees attributes
 * @param {Array<string>} orders asc | desc
 */ function orderBy(collection, iteratees, orders) {
    if (!Array.isArray(collection)) return [];
    if (!Array.isArray(orders)) orders = [];
    var result = collection.map(function(value, index) {
        return {
            criteria: iteratees.map(function(iteratee) {
                return value[iteratee];
            }),
            index: index,
            value: value
        };
    });
    result.sort(function comparer(object, other) {
        var index = -1;
        while(++index < object.criteria.length){
            var res = compareAscending(object.criteria[index], other.criteria[index]);
            if (res) {
                if (index >= orders.length) return res;
                if (orders[index] === 'desc') return -res;
                return res;
            }
        }
        // This ensures a stable sort in V8 and other engines.
        // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
        return object.index - other.index;
    });
    return result.map(function(res) {
        return res.value;
    });
}
module.exports = orderBy;

},{}],"dFh0T":[function(require,module,exports) {
'use strict';
module.exports = function compact(array) {
    if (!Array.isArray(array)) return [];
    return array.filter(Boolean);
};

},{}],"fzLII":[function(require,module,exports) {
'use strict';
// @MAJOR can be replaced by native Array#findIndex when we change support
module.exports = function find(array, comparator) {
    if (!Array.isArray(array)) return -1;
    for(var i = 0; i < array.length; i++){
        if (comparator(array[i])) return i;
    }
    return -1;
};

},{}],"g3eEb":[function(require,module,exports) {
'use strict';
var find = require('./find');
/**
 * Transform sort format from user friendly notation to lodash format
 * @param {string[]} sortBy array of predicate of the form "attribute:order"
 * @param {string[]} [defaults] array of predicate of the form "attribute:order"
 * @return {array.<string[]>} array containing 2 elements : attributes, orders
 */ module.exports = function formatSort(sortBy, defaults) {
    var defaultInstructions = (defaults || []).map(function(sort) {
        return sort.split(':');
    });
    return sortBy.reduce(function preparePredicate(out, sort) {
        var sortInstruction = sort.split(':');
        var matchingDefault = find(defaultInstructions, function(defaultInstruction) {
            return defaultInstruction[0] === sortInstruction[0];
        });
        if (sortInstruction.length > 1 || !matchingDefault) {
            out[0].push(sortInstruction[0]);
            out[1].push(sortInstruction[1]);
            return out;
        }
        out[0].push(matchingDefault[0]);
        out[1].push(matchingDefault[1]);
        return out;
    }, [
        [],
        []
    ]);
};

},{"./find":"hBcv7"}],"9tLzD":[function(require,module,exports) {
'use strict';
module.exports = generateTrees;
var orderBy = require('../functions/orderBy');
var find = require('../functions/find');
var prepareHierarchicalFacetSortBy = require('../functions/formatSort');
function generateTrees(state) {
    return function generate(hierarchicalFacetResult, hierarchicalFacetIndex) {
        var hierarchicalFacet = state.hierarchicalFacets[hierarchicalFacetIndex];
        var hierarchicalFacetRefinement = state.hierarchicalFacetsRefinements[hierarchicalFacet.name] && state.hierarchicalFacetsRefinements[hierarchicalFacet.name][0] || '';
        var hierarchicalSeparator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
        var hierarchicalRootPath = state._getHierarchicalRootPath(hierarchicalFacet);
        var hierarchicalShowParentLevel = state._getHierarchicalShowParentLevel(hierarchicalFacet);
        var sortBy = prepareHierarchicalFacetSortBy(state._getHierarchicalFacetSortBy(hierarchicalFacet));
        var rootExhaustive = hierarchicalFacetResult.every(function(facetResult) {
            return facetResult.exhaustive;
        });
        var generateTreeFn = generateHierarchicalTree(sortBy, hierarchicalSeparator, hierarchicalRootPath, hierarchicalShowParentLevel, hierarchicalFacetRefinement);
        var results = hierarchicalFacetResult;
        if (hierarchicalRootPath) results = hierarchicalFacetResult.slice(hierarchicalRootPath.split(hierarchicalSeparator).length);
        return results.reduce(generateTreeFn, {
            name: state.hierarchicalFacets[hierarchicalFacetIndex].name,
            count: null,
            isRefined: true,
            path: null,
            exhaustive: rootExhaustive,
            data: null
        });
    };
}
function generateHierarchicalTree(sortBy, hierarchicalSeparator, hierarchicalRootPath, hierarchicalShowParentLevel, currentRefinement) {
    return function generateTree(hierarchicalTree, hierarchicalFacetResult, currentHierarchicalLevel) {
        var parent = hierarchicalTree;
        if (currentHierarchicalLevel > 0) {
            var level = 0;
            parent = hierarchicalTree;
            while(level < currentHierarchicalLevel){
                /**
         * @type {object[]]} hierarchical data
         */ var data = parent && Array.isArray(parent.data) ? parent.data : [];
                parent = find(data, function(subtree) {
                    return subtree.isRefined;
                });
                level++;
            }
        }
        // we found a refined parent, let's add current level data under it
        if (parent) {
            // filter values in case an object has multiple categories:
            //   {
            //     categories: {
            //       level0: ['beers', 'bières'],
            //       level1: ['beers > IPA', 'bières > Belges']
            //     }
            //   }
            //
            // If parent refinement is `beers`, then we do not want to have `bières > Belges`
            // showing up
            var picked = Object.keys(hierarchicalFacetResult.data).map(function(facetValue) {
                return [
                    facetValue,
                    hierarchicalFacetResult.data[facetValue]
                ];
            }).filter(function(tuple) {
                var facetValue = tuple[0];
                return onlyMatchingTree(facetValue, parent.path || hierarchicalRootPath, currentRefinement, hierarchicalSeparator, hierarchicalRootPath, hierarchicalShowParentLevel);
            });
            parent.data = orderBy(picked.map(function(tuple) {
                var facetValue = tuple[0];
                var facetCount = tuple[1];
                return format(facetCount, facetValue, hierarchicalSeparator, currentRefinement, hierarchicalFacetResult.exhaustive);
            }), sortBy[0], sortBy[1]);
        }
        return hierarchicalTree;
    };
}
function onlyMatchingTree(facetValue, parentPath, currentRefinement, hierarchicalSeparator, hierarchicalRootPath, hierarchicalShowParentLevel) {
    // we want the facetValue is a child of hierarchicalRootPath
    if (hierarchicalRootPath && (facetValue.indexOf(hierarchicalRootPath) !== 0 || hierarchicalRootPath === facetValue)) return false;
    // we always want root levels (only when there is no prefix path)
    return !hierarchicalRootPath && facetValue.indexOf(hierarchicalSeparator) === -1 || hierarchicalRootPath && facetValue.split(hierarchicalSeparator).length - hierarchicalRootPath.split(hierarchicalSeparator).length === 1 || facetValue.indexOf(hierarchicalSeparator) === -1 && currentRefinement.indexOf(hierarchicalSeparator) === -1 || // currentRefinement is a child of the facet value
    currentRefinement.indexOf(facetValue) === 0 || facetValue.indexOf(parentPath + hierarchicalSeparator) === 0 && (hierarchicalShowParentLevel || facetValue.indexOf(currentRefinement) === 0);
}
function format(facetCount, facetValue, hierarchicalSeparator, currentRefinement, exhaustive) {
    var parts = facetValue.split(hierarchicalSeparator);
    return {
        name: parts[parts.length - 1].trim(),
        path: facetValue,
        count: facetCount,
        isRefined: currentRefinement === facetValue || currentRefinement.indexOf(facetValue + hierarchicalSeparator) === 0,
        exhaustive: exhaustive,
        data: null
    };
}

},{"../functions/orderBy":"kd35s","../functions/find":"hBcv7","../functions/formatSort":"g3eEb"}],"6UDS7":[function(require,module,exports) {
'use strict';
var EventEmitter = require('@algolia/events');
var inherits = require('../functions/inherits');
/**
 * A DerivedHelper is a way to create sub requests to
 * Algolia from a main helper.
 * @class
 * @classdesc The DerivedHelper provides an event based interface for search callbacks:
 *  - search: when a search is triggered using the `search()` method.
 *  - result: when the response is retrieved from Algolia and is processed.
 *    This event contains a {@link SearchResults} object and the
 *    {@link SearchParameters} corresponding to this answer.
 */ function DerivedHelper(mainHelper, fn) {
    this.main = mainHelper;
    this.fn = fn;
    this.lastResults = null;
}
inherits(DerivedHelper, EventEmitter);
/**
 * Detach this helper from the main helper
 * @return {undefined}
 * @throws Error if the derived helper is already detached
 */ DerivedHelper.prototype.detach = function() {
    this.removeAllListeners();
    this.main.detachDerivedHelper(this);
};
DerivedHelper.prototype.getModifiedState = function(parameters) {
    return this.fn(parameters);
};
module.exports = DerivedHelper;

},{"@algolia/events":"euNDO","../functions/inherits":"a0E30"}],"euNDO":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
function EventEmitter() {
    this._events = this._events || {
    };
    this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;
// Backwards-compat with node 0.10.x
// EventEmitter.EventEmitter = EventEmitter;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;
// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;
// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
    if (!isNumber(n) || n < 0 || isNaN(n)) throw TypeError('n must be a positive number');
    this._maxListeners = n;
    return this;
};
EventEmitter.prototype.emit = function(type) {
    var er, handler, len, args, i, listeners;
    if (!this._events) this._events = {
    };
    // If there is no 'error' event listener then throw.
    if (type === 'error') {
        if (!this._events.error || isObject(this._events.error) && !this._events.error.length) {
            er = arguments[1];
            if (er instanceof Error) throw er; // Unhandled 'error' event
            else {
                // At least give some kind of context to the user
                var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
                err.context = er;
                throw err;
            }
        }
    }
    handler = this._events[type];
    if (isUndefined(handler)) return false;
    if (isFunction(handler)) switch(arguments.length){
        // fast cases
        case 1:
            handler.call(this);
            break;
        case 2:
            handler.call(this, arguments[1]);
            break;
        case 3:
            handler.call(this, arguments[1], arguments[2]);
            break;
        // slower
        default:
            args = Array.prototype.slice.call(arguments, 1);
            handler.apply(this, args);
    }
    else if (isObject(handler)) {
        args = Array.prototype.slice.call(arguments, 1);
        listeners = handler.slice();
        len = listeners.length;
        for(i = 0; i < len; i++)listeners[i].apply(this, args);
    }
    return true;
};
EventEmitter.prototype.addListener = function(type, listener) {
    var m;
    if (!isFunction(listener)) throw TypeError('listener must be a function');
    if (!this._events) this._events = {
    };
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (this._events.newListener) this.emit('newListener', type, isFunction(listener.listener) ? listener.listener : listener);
    if (!this._events[type]) // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
    else if (isObject(this._events[type])) // If we've already got an array, just append.
    this._events[type].push(listener);
    else // Adding the second element, need to change to array.
    this._events[type] = [
        this._events[type],
        listener
    ];
    // Check for listener leak
    if (isObject(this._events[type]) && !this._events[type].warned) {
        if (!isUndefined(this._maxListeners)) m = this._maxListeners;
        else m = EventEmitter.defaultMaxListeners;
        if (m && m > 0 && this._events[type].length > m) {
            this._events[type].warned = true;
            console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[type].length);
            if (typeof console.trace === 'function') // not supported in IE 10
            console.trace();
        }
    }
    return this;
};
EventEmitter.prototype.on = EventEmitter.prototype.addListener;
EventEmitter.prototype.once = function(type, listener) {
    if (!isFunction(listener)) throw TypeError('listener must be a function');
    var fired = false;
    function g() {
        this.removeListener(type, g);
        if (!fired) {
            fired = true;
            listener.apply(this, arguments);
        }
    }
    g.listener = listener;
    this.on(type, g);
    return this;
};
// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
    var list, position, length, i;
    if (!isFunction(listener)) throw TypeError('listener must be a function');
    if (!this._events || !this._events[type]) return this;
    list = this._events[type];
    length = list.length;
    position = -1;
    if (list === listener || isFunction(list.listener) && list.listener === listener) {
        delete this._events[type];
        if (this._events.removeListener) this.emit('removeListener', type, listener);
    } else if (isObject(list)) {
        for(i = length; i-- > 0;)if (list[i] === listener || list[i].listener && list[i].listener === listener) {
            position = i;
            break;
        }
        if (position < 0) return this;
        if (list.length === 1) {
            list.length = 0;
            delete this._events[type];
        } else list.splice(position, 1);
        if (this._events.removeListener) this.emit('removeListener', type, listener);
    }
    return this;
};
EventEmitter.prototype.removeAllListeners = function(type) {
    var key, listeners;
    if (!this._events) return this;
    // not listening for removeListener, no need to emit
    if (!this._events.removeListener) {
        if (arguments.length === 0) this._events = {
        };
        else if (this._events[type]) delete this._events[type];
        return this;
    }
    // emit removeListener for all listeners on all events
    if (arguments.length === 0) {
        for(key in this._events){
            if (key === 'removeListener') continue;
            this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = {
        };
        return this;
    }
    listeners = this._events[type];
    if (isFunction(listeners)) this.removeListener(type, listeners);
    else if (listeners) // LIFO order
    while(listeners.length)this.removeListener(type, listeners[listeners.length - 1]);
    delete this._events[type];
    return this;
};
EventEmitter.prototype.listeners = function(type) {
    var ret;
    if (!this._events || !this._events[type]) ret = [];
    else if (isFunction(this._events[type])) ret = [
        this._events[type]
    ];
    else ret = this._events[type].slice();
    return ret;
};
EventEmitter.prototype.listenerCount = function(type) {
    if (this._events) {
        var evlistener = this._events[type];
        if (isFunction(evlistener)) return 1;
        else if (evlistener) return evlistener.length;
    }
    return 0;
};
EventEmitter.listenerCount = function(emitter, type) {
    return emitter.listenerCount(type);
};
function isFunction(arg) {
    return typeof arg === 'function';
}
function isNumber(arg) {
    return typeof arg === 'number';
}
function isObject(arg) {
    return typeof arg === 'object' && arg !== null;
}
function isUndefined(arg) {
    return arg === void 0;
}

},{}],"a0E30":[function(require,module,exports) {
'use strict';
function inherits(ctor, superCtor) {
    ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
            value: ctor,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
}
module.exports = inherits;

},{}],"6rfof":[function(require,module,exports) {
'use strict';
var merge = require('./functions/merge');
var requestBuilder = {
    /**
   * Get all the queries to send to the client, those queries can used directly
   * with the Algolia client.
   * @private
   * @return {object[]} The queries
   */ _getQueries: function getQueries(index, state) {
        var queries = [];
        // One query for the hits
        queries.push({
            indexName: index,
            params: requestBuilder._getHitsSearchParams(state)
        });
        // One for each disjunctive facets
        state.getRefinedDisjunctiveFacets().forEach(function(refinedFacet) {
            queries.push({
                indexName: index,
                params: requestBuilder._getDisjunctiveFacetSearchParams(state, refinedFacet)
            });
        });
        // maybe more to get the root level of hierarchical facets when activated
        state.getRefinedHierarchicalFacets().forEach(function(refinedFacet) {
            var hierarchicalFacet = state.getHierarchicalFacetByName(refinedFacet);
            var currentRefinement = state.getHierarchicalRefinement(refinedFacet);
            // if we are deeper than level 0 (starting from `beer > IPA`)
            // we want to get the root values
            var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
            if (currentRefinement.length > 0 && currentRefinement[0].split(separator).length > 1) queries.push({
                indexName: index,
                params: requestBuilder._getDisjunctiveFacetSearchParams(state, refinedFacet, true)
            });
        });
        return queries;
    },
    /**
   * Build search parameters used to fetch hits
   * @private
   * @return {object.<string, any>}
   */ _getHitsSearchParams: function(state) {
        var facets = state.facets.concat(state.disjunctiveFacets).concat(requestBuilder._getHitsHierarchicalFacetsAttributes(state));
        var facetFilters = requestBuilder._getFacetFilters(state);
        var numericFilters = requestBuilder._getNumericFilters(state);
        var tagFilters = requestBuilder._getTagFilters(state);
        var additionalParams = {
            facets: facets.indexOf('*') > -1 ? [
                '*'
            ] : facets,
            tagFilters: tagFilters
        };
        if (facetFilters.length > 0) additionalParams.facetFilters = facetFilters;
        if (numericFilters.length > 0) additionalParams.numericFilters = numericFilters;
        return merge({
        }, state.getQueryParams(), additionalParams);
    },
    /**
   * Build search parameters used to fetch a disjunctive facet
   * @private
   * @param  {string} facet the associated facet name
   * @param  {boolean} hierarchicalRootLevel ?? FIXME
   * @return {object}
   */ _getDisjunctiveFacetSearchParams: function(state, facet, hierarchicalRootLevel) {
        var facetFilters = requestBuilder._getFacetFilters(state, facet, hierarchicalRootLevel);
        var numericFilters = requestBuilder._getNumericFilters(state, facet);
        var tagFilters = requestBuilder._getTagFilters(state);
        var additionalParams = {
            hitsPerPage: 1,
            page: 0,
            attributesToRetrieve: [],
            attributesToHighlight: [],
            attributesToSnippet: [],
            tagFilters: tagFilters,
            analytics: false,
            clickAnalytics: false
        };
        var hierarchicalFacet = state.getHierarchicalFacetByName(facet);
        if (hierarchicalFacet) additionalParams.facets = requestBuilder._getDisjunctiveHierarchicalFacetAttribute(state, hierarchicalFacet, hierarchicalRootLevel);
        else additionalParams.facets = facet;
        if (numericFilters.length > 0) additionalParams.numericFilters = numericFilters;
        if (facetFilters.length > 0) additionalParams.facetFilters = facetFilters;
        return merge({
        }, state.getQueryParams(), additionalParams);
    },
    /**
   * Return the numeric filters in an algolia request fashion
   * @private
   * @param {string} [facetName] the name of the attribute for which the filters should be excluded
   * @return {string[]} the numeric filters in the algolia format
   */ _getNumericFilters: function(state, facetName) {
        if (state.numericFilters) return state.numericFilters;
        var numericFilters = [];
        Object.keys(state.numericRefinements).forEach(function(attribute) {
            var operators = state.numericRefinements[attribute] || {
            };
            Object.keys(operators).forEach(function(operator) {
                var values = operators[operator] || [];
                if (facetName !== attribute) values.forEach(function(value) {
                    if (Array.isArray(value)) {
                        var vs = value.map(function(v) {
                            return attribute + operator + v;
                        });
                        numericFilters.push(vs);
                    } else numericFilters.push(attribute + operator + value);
                });
            });
        });
        return numericFilters;
    },
    /**
   * Return the tags filters depending
   * @private
   * @return {string}
   */ _getTagFilters: function(state) {
        if (state.tagFilters) return state.tagFilters;
        return state.tagRefinements.join(',');
    },
    /**
   * Build facetFilters parameter based on current refinements. The array returned
   * contains strings representing the facet filters in the algolia format.
   * @private
   * @param  {string} [facet] if set, the current disjunctive facet
   * @return {array.<string>}
   */ _getFacetFilters: function(state, facet, hierarchicalRootLevel) {
        var facetFilters = [];
        var facetsRefinements = state.facetsRefinements || {
        };
        Object.keys(facetsRefinements).forEach(function(facetName) {
            var facetValues = facetsRefinements[facetName] || [];
            facetValues.forEach(function(facetValue) {
                facetFilters.push(facetName + ':' + facetValue);
            });
        });
        var facetsExcludes = state.facetsExcludes || {
        };
        Object.keys(facetsExcludes).forEach(function(facetName) {
            var facetValues = facetsExcludes[facetName] || [];
            facetValues.forEach(function(facetValue) {
                facetFilters.push(facetName + ':-' + facetValue);
            });
        });
        var disjunctiveFacetsRefinements = state.disjunctiveFacetsRefinements || {
        };
        Object.keys(disjunctiveFacetsRefinements).forEach(function(facetName) {
            var facetValues = disjunctiveFacetsRefinements[facetName] || [];
            if (facetName === facet || !facetValues || facetValues.length === 0) return;
            var orFilters = [];
            facetValues.forEach(function(facetValue) {
                orFilters.push(facetName + ':' + facetValue);
            });
            facetFilters.push(orFilters);
        });
        var hierarchicalFacetsRefinements = state.hierarchicalFacetsRefinements || {
        };
        Object.keys(hierarchicalFacetsRefinements).forEach(function(facetName) {
            var facetValues = hierarchicalFacetsRefinements[facetName] || [];
            var facetValue = facetValues[0];
            if (facetValue === undefined) return;
            var hierarchicalFacet = state.getHierarchicalFacetByName(facetName);
            var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
            var rootPath = state._getHierarchicalRootPath(hierarchicalFacet);
            var attributeToRefine;
            var attributesIndex;
            // we ask for parent facet values only when the `facet` is the current hierarchical facet
            if (facet === facetName) {
                // if we are at the root level already, no need to ask for facet values, we get them from
                // the hits query
                if (facetValue.indexOf(separator) === -1 || !rootPath && hierarchicalRootLevel === true || rootPath && rootPath.split(separator).length === facetValue.split(separator).length) return;
                if (!rootPath) {
                    attributesIndex = facetValue.split(separator).length - 2;
                    facetValue = facetValue.slice(0, facetValue.lastIndexOf(separator));
                } else {
                    attributesIndex = rootPath.split(separator).length - 1;
                    facetValue = rootPath;
                }
                attributeToRefine = hierarchicalFacet.attributes[attributesIndex];
            } else {
                attributesIndex = facetValue.split(separator).length - 1;
                attributeToRefine = hierarchicalFacet.attributes[attributesIndex];
            }
            if (attributeToRefine) facetFilters.push([
                attributeToRefine + ':' + facetValue
            ]);
        });
        return facetFilters;
    },
    _getHitsHierarchicalFacetsAttributes: function(state) {
        var out = [];
        return state.hierarchicalFacets.reduce(// ask for as much levels as there's hierarchical refinements
        function getHitsAttributesForHierarchicalFacet(allAttributes, hierarchicalFacet) {
            var hierarchicalRefinement = state.getHierarchicalRefinement(hierarchicalFacet.name)[0];
            // if no refinement, ask for root level
            if (!hierarchicalRefinement) {
                allAttributes.push(hierarchicalFacet.attributes[0]);
                return allAttributes;
            }
            var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
            var level = hierarchicalRefinement.split(separator).length;
            var newAttributes = hierarchicalFacet.attributes.slice(0, level + 1);
            return allAttributes.concat(newAttributes);
        }, out);
    },
    _getDisjunctiveHierarchicalFacetAttribute: function(state, hierarchicalFacet, rootLevel) {
        var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
        if (rootLevel === true) {
            var rootPath = state._getHierarchicalRootPath(hierarchicalFacet);
            var attributeIndex = 0;
            if (rootPath) attributeIndex = rootPath.split(separator).length;
            return [
                hierarchicalFacet.attributes[attributeIndex]
            ];
        }
        var hierarchicalRefinement = state.getHierarchicalRefinement(hierarchicalFacet.name)[0] || '';
        // if refinement is 'beers > IPA > Flying dog',
        // then we want `facets: ['beers > IPA']` as disjunctive facet (parent level values)
        var parentLevel = hierarchicalRefinement.split(separator).length - 1;
        return hierarchicalFacet.attributes.slice(0, parentLevel + 1);
    },
    getSearchForFacetQuery: function(facetName, query, maxFacetHits, state) {
        var stateForSearchForFacetValues = state.isDisjunctiveFacet(facetName) ? state.clearRefinements(facetName) : state;
        var searchForFacetSearchParameters = {
            facetQuery: query,
            facetName: facetName
        };
        if (typeof maxFacetHits === 'number') searchForFacetSearchParameters.maxFacetHits = maxFacetHits;
        return merge({
        }, requestBuilder._getHitsSearchParams(stateForSearchForFacetValues), searchForFacetSearchParameters);
    }
};
module.exports = requestBuilder;

},{"./functions/merge":"eGyc5"}],"cs17k":[function(require,module,exports) {
'use strict';
module.exports = '3.7.0';

},{}],"kdZTz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isIndexWidget", ()=>isIndexWidget
);
var _algoliasearchHelper = require("algoliasearch-helper");
var _algoliasearchHelperDefault = parcelHelpers.interopDefault(_algoliasearchHelper);
var _indexJs = require("../../lib/utils/index.js");
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {
    };
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {
    };
    var target = {
    };
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var withUsage = _indexJs.createDocumentationMessageGenerator({
    name: 'index-widget'
});
function isIndexWidget(widget) {
    return widget.$$type === 'ais.index';
}
/**
 * This is the same content as helper._change / setState, but allowing for extra
 * UiState to be synchronized.
 * see: https://github.com/algolia/algoliasearch-helper-js/blob/6b835ffd07742f2d6b314022cce6848f5cfecd4a/src/algoliasearch.helper.js#L1311-L1324
 */ function privateHelperSetState(helper, _ref) {
    var state = _ref.state, isPageReset = _ref.isPageReset, _uiState = _ref._uiState;
    if (state !== helper.state) {
        helper.state = state;
        helper.emit('change', {
            state: helper.state,
            results: helper.lastResults,
            isPageReset: isPageReset,
            _uiState: _uiState
        });
    }
}
function getLocalWidgetsUiState(widgets, widgetStateOptions) {
    var initialUiState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    };
    return widgets.reduce(function(uiState, widget) {
        if (isIndexWidget(widget)) return uiState;
        if (!widget.getWidgetUiState && !widget.getWidgetState) return uiState;
        if (widget.getWidgetUiState) return widget.getWidgetUiState(uiState, widgetStateOptions);
        return widget.getWidgetState(uiState, widgetStateOptions);
    }, initialUiState);
}
function getLocalWidgetsSearchParameters(widgets, widgetSearchParametersOptions) {
    var initialSearchParameters = widgetSearchParametersOptions.initialSearchParameters, rest = _objectWithoutProperties(widgetSearchParametersOptions, [
        "initialSearchParameters"
    ]);
    return widgets.filter(function(widget) {
        return !isIndexWidget(widget);
    }).reduce(function(state, widget) {
        if (!widget.getWidgetSearchParameters) return state;
        return widget.getWidgetSearchParameters(state, rest);
    }, initialSearchParameters);
}
function resetPageFromWidgets(widgets) {
    var indexWidgets = widgets.filter(isIndexWidget);
    if (indexWidgets.length === 0) return;
    indexWidgets.forEach(function(widget) {
        var widgetHelper = widget.getHelper();
        privateHelperSetState(widgetHelper, {
            state: widgetHelper.state.resetPage(),
            isPageReset: true
        });
        resetPageFromWidgets(widget.getWidgets());
    });
}
function resolveScopedResultsFromWidgets(widgets) {
    var indexWidgets = widgets.filter(isIndexWidget);
    return indexWidgets.reduce(function(scopedResults, current) {
        return scopedResults.concat.apply(scopedResults, [
            {
                indexId: current.getIndexId(),
                results: current.getResults(),
                helper: current.getHelper()
            }
        ].concat(_toConsumableArray(resolveScopedResultsFromWidgets(current.getWidgets()))));
    }, []);
}
var index = function index(widgetParams) {
    if (widgetParams === undefined || widgetParams.indexName === undefined) throw new Error(withUsage('The `indexName` option is required.'));
    var indexName = widgetParams.indexName, _widgetParams$indexId = widgetParams.indexId, indexId = _widgetParams$indexId === void 0 ? indexName : _widgetParams$indexId;
    var localWidgets = [];
    var localUiState = {
    };
    var localInstantSearchInstance = null;
    var localParent = null;
    var helper = null;
    var derivedHelper = null;
    return {
        $$type: 'ais.index',
        $$widgetType: 'ais.index',
        getIndexName: function getIndexName() {
            return indexName;
        },
        getIndexId: function getIndexId() {
            return indexId;
        },
        getHelper: function getHelper() {
            return helper;
        },
        getResults: function getResults() {
            return derivedHelper && derivedHelper.lastResults;
        },
        getScopedResults: function getScopedResults() {
            var widgetParent = this.getParent(); // If the widget is the root, we consider itself as the only sibling.
            var widgetSiblings = widgetParent ? widgetParent.getWidgets() : [
                this
            ];
            return resolveScopedResultsFromWidgets(widgetSiblings);
        },
        getParent: function getParent() {
            return localParent;
        },
        createURL: function createURL(nextState) {
            return localInstantSearchInstance._createURL(_defineProperty({
            }, indexId, getLocalWidgetsUiState(localWidgets, {
                searchParameters: nextState,
                helper: helper
            })));
        },
        getWidgets: function getWidgets() {
            return localWidgets;
        },
        addWidgets: function addWidgets(widgets) {
            var _this = this;
            if (!Array.isArray(widgets)) throw new Error(withUsage('The `addWidgets` method expects an array of widgets.'));
            if (widgets.some(function(widget) {
                return typeof widget.init !== 'function' && typeof widget.render !== 'function';
            })) throw new Error(withUsage('The widget definition expects a `render` and/or an `init` method.'));
            localWidgets = localWidgets.concat(widgets);
            if (localInstantSearchInstance && Boolean(widgets.length)) {
                privateHelperSetState(helper, {
                    state: getLocalWidgetsSearchParameters(localWidgets, {
                        uiState: localUiState,
                        initialSearchParameters: helper.state
                    }),
                    _uiState: localUiState
                }); // We compute the render state before calling `init` in a separate loop
                // to construct the whole render state object that is then passed to
                // `init`.
                widgets.forEach(function(widget) {
                    if (widget.getRenderState) {
                        var renderState = widget.getRenderState(localInstantSearchInstance.renderState[_this.getIndexId()] || {
                        }, {
                            uiState: localInstantSearchInstance._initialUiState,
                            helper: _this.getHelper(),
                            parent: _this,
                            instantSearchInstance: localInstantSearchInstance,
                            state: helper.state,
                            renderState: localInstantSearchInstance.renderState,
                            templatesConfig: localInstantSearchInstance.templatesConfig,
                            createURL: _this.createURL,
                            scopedResults: [],
                            searchMetadata: {
                                isSearchStalled: localInstantSearchInstance._isSearchStalled
                            }
                        });
                        storeRenderState({
                            renderState: renderState,
                            instantSearchInstance: localInstantSearchInstance,
                            parent: _this
                        });
                    }
                });
                widgets.forEach(function(widget) {
                    if (widget.init) widget.init({
                        helper: helper,
                        parent: _this,
                        uiState: localInstantSearchInstance._initialUiState,
                        instantSearchInstance: localInstantSearchInstance,
                        state: helper.state,
                        renderState: localInstantSearchInstance.renderState,
                        templatesConfig: localInstantSearchInstance.templatesConfig,
                        createURL: _this.createURL,
                        scopedResults: [],
                        searchMetadata: {
                            isSearchStalled: localInstantSearchInstance._isSearchStalled
                        }
                    });
                });
                localInstantSearchInstance.scheduleSearch();
            }
            return this;
        },
        removeWidgets: function removeWidgets(widgets) {
            var _this2 = this;
            if (!Array.isArray(widgets)) throw new Error(withUsage('The `removeWidgets` method expects an array of widgets.'));
            if (widgets.some(function(widget) {
                return typeof widget.dispose !== 'function';
            })) throw new Error(withUsage('The widget definition expects a `dispose` method.'));
            localWidgets = localWidgets.filter(function(widget) {
                return widgets.indexOf(widget) === -1;
            });
            if (localInstantSearchInstance && Boolean(widgets.length)) {
                var nextState = widgets.reduce(function(state, widget) {
                    // the `dispose` method exists at this point we already assert it
                    var next = widget.dispose({
                        helper: helper,
                        state: state,
                        parent: _this2
                    });
                    return next || state;
                }, helper.state);
                localUiState = getLocalWidgetsUiState(localWidgets, {
                    searchParameters: nextState,
                    helper: helper
                });
                helper.setState(getLocalWidgetsSearchParameters(localWidgets, {
                    uiState: localUiState,
                    initialSearchParameters: nextState
                }));
                if (localWidgets.length) localInstantSearchInstance.scheduleSearch();
            }
            return this;
        },
        init: function init(_ref2) {
            var _this3 = this, _instantSearchInstanc;
            var instantSearchInstance = _ref2.instantSearchInstance, parent = _ref2.parent, uiState = _ref2.uiState;
            if (helper !== null) // helper is already initialized, therefore we do not need to set up
            // any listeners
            return;
            localInstantSearchInstance = instantSearchInstance;
            localParent = parent;
            localUiState = uiState[indexId] || {
            }; // The `mainHelper` is already defined at this point. The instance is created
            // inside InstantSearch at the `start` method, which occurs before the `init`
            // step.
            var mainHelper = instantSearchInstance.mainHelper;
            var parameters = getLocalWidgetsSearchParameters(localWidgets, {
                uiState: localUiState,
                initialSearchParameters: new _algoliasearchHelperDefault.default.SearchParameters({
                    index: indexName
                })
            }); // This Helper is only used for state management we do not care about the
            // `searchClient`. Only the "main" Helper created at the `InstantSearch`
            // level is aware of the client.
            helper = _algoliasearchHelperDefault.default({
            }, parameters.index, parameters); // We forward the call to `search` to the "main" instance of the Helper
            // which is responsible for managing the queries (it's the only one that is
            // aware of the `searchClient`).
            helper.search = function() {
                if (instantSearchInstance.onStateChange) {
                    instantSearchInstance.onStateChange({
                        uiState: instantSearchInstance.mainIndex.getWidgetUiState({
                        }),
                        setUiState: instantSearchInstance.setUiState.bind(instantSearchInstance)
                    }); // We don't trigger a search when controlled because it becomes the
                    // responsibility of `setUiState`.
                    return mainHelper;
                }
                return mainHelper.search();
            };
            helper.searchWithoutTriggeringOnStateChange = function() {
                return mainHelper.search();
            }; // We use the same pattern for the `searchForFacetValues`.
            helper.searchForFacetValues = function(facetName, facetValue, maxFacetHits, userState) {
                var state = helper.state.setQueryParameters(userState);
                return mainHelper.searchForFacetValues(facetName, facetValue, maxFacetHits, state);
            };
            derivedHelper = mainHelper.derive(function() {
                return _indexJs.mergeSearchParameters.apply(void 0, _toConsumableArray(_indexJs.resolveSearchParameters(_this3)));
            });
            var indexInitialResults = (_instantSearchInstanc = instantSearchInstance._initialResults) === null || _instantSearchInstanc === void 0 ? void 0 : _instantSearchInstanc[this.getIndexId()];
            if (indexInitialResults) {
                // We restore the shape of the results provided to the instance to respect
                // the helper's structure.
                var results = new _algoliasearchHelperDefault.default.SearchResults(new _algoliasearchHelperDefault.default.SearchParameters(indexInitialResults.state), indexInitialResults.results);
                derivedHelper.lastResults = results;
                helper.lastResults = results;
            } // Subscribe to the Helper state changes for the page before widgets
            // are initialized. This behavior mimics the original one of the Helper.
            // It makes sense to replicate it at the `init` step. We have another
            // listener on `change` below, once `init` is done.
            helper.on('change', function(_ref3) {
                var isPageReset = _ref3.isPageReset;
                if (isPageReset) resetPageFromWidgets(localWidgets);
            });
            derivedHelper.on('search', function() {
                // The index does not manage the "staleness" of the search. This is the
                // responsibility of the main instance. It does not make sense to manage
                // it at the index level because it's either: all of them or none of them
                // that are stalled. The queries are performed into a single network request.
                instantSearchInstance.scheduleStalledRender();
                _indexJs.checkIndexUiState({
                    index: _this3,
                    indexUiState: localUiState
                });
            });
            derivedHelper.on('result', function(_ref4) {
                var results = _ref4.results;
                // The index does not render the results it schedules a new render
                // to let all the other indices emit their own results. It allows us to
                // run the render process in one pass.
                instantSearchInstance.scheduleRender(); // the derived helper is the one which actually searches, but the helper
                // which is exposed e.g. via instance.helper, doesn't search, and thus
                // does not have access to lastResults, which it used to in pre-federated
                // search behavior.
                helper.lastResults = results;
            }); // We compute the render state before calling `init` in a separate loop
            // to construct the whole render state object that is then passed to
            // `init`.
            localWidgets.forEach(function(widget) {
                if (widget.getRenderState) {
                    var renderState = widget.getRenderState(instantSearchInstance.renderState[_this3.getIndexId()] || {
                    }, {
                        uiState: uiState,
                        helper: helper,
                        parent: _this3,
                        instantSearchInstance: instantSearchInstance,
                        state: helper.state,
                        renderState: instantSearchInstance.renderState,
                        templatesConfig: instantSearchInstance.templatesConfig,
                        createURL: _this3.createURL,
                        scopedResults: [],
                        searchMetadata: {
                            isSearchStalled: instantSearchInstance._isSearchStalled
                        }
                    });
                    storeRenderState({
                        renderState: renderState,
                        instantSearchInstance: instantSearchInstance,
                        parent: _this3
                    });
                }
            });
            localWidgets.forEach(function(widget) {
                _indexJs.warning(// aka we warn if there's _only_ getWidgetState
                !widget.getWidgetState || Boolean(widget.getWidgetUiState), 'The `getWidgetState` method is renamed `getWidgetUiState` and will no longer exist under that name in InstantSearch.js 5.x. Please use `getWidgetUiState` instead.');
                if (widget.init) widget.init({
                    uiState: uiState,
                    helper: helper,
                    parent: _this3,
                    instantSearchInstance: instantSearchInstance,
                    state: helper.state,
                    renderState: instantSearchInstance.renderState,
                    templatesConfig: instantSearchInstance.templatesConfig,
                    createURL: _this3.createURL,
                    scopedResults: [],
                    searchMetadata: {
                        isSearchStalled: instantSearchInstance._isSearchStalled
                    }
                });
            }); // Subscribe to the Helper state changes for the `uiState` once widgets
            // are initialized. Until the first render, state changes are part of the
            // configuration step. This is mainly for backward compatibility with custom
            // widgets. When the subscription happens before the `init` step, the (static)
            // configuration of the widget is pushed in the URL. That's what we want to avoid.
            // https://github.com/algolia/instantsearch.js/pull/994/commits/4a672ae3fd78809e213de0368549ef12e9dc9454
            helper.on('change', function(event) {
                var state = event.state;
                var _uiState = event._uiState;
                localUiState = getLocalWidgetsUiState(localWidgets, {
                    searchParameters: state,
                    helper: helper
                }, _uiState || {
                }); // We don't trigger an internal change when controlled because it
                // becomes the responsibility of `setUiState`.
                if (!instantSearchInstance.onStateChange) instantSearchInstance.onInternalStateChange();
            });
            if (indexInitialResults) // If there are initial results, we're not notified of the next results
            // because we don't trigger an initial search. We therefore need to directly
            // schedule a render that will render the results injected on the helper.
            instantSearchInstance.scheduleRender();
        },
        render: function render(_ref5) {
            var _this4 = this;
            var instantSearchInstance = _ref5.instantSearchInstance;
            if (!this.getResults()) return;
            localWidgets.forEach(function(widget) {
                if (widget.getRenderState) {
                    var renderState = widget.getRenderState(instantSearchInstance.renderState[_this4.getIndexId()] || {
                    }, {
                        helper: _this4.getHelper(),
                        parent: _this4,
                        instantSearchInstance: instantSearchInstance,
                        results: _this4.getResults(),
                        scopedResults: _this4.getScopedResults(),
                        state: _this4.getResults()._state,
                        renderState: instantSearchInstance.renderState,
                        templatesConfig: instantSearchInstance.templatesConfig,
                        createURL: _this4.createURL,
                        searchMetadata: {
                            isSearchStalled: instantSearchInstance._isSearchStalled
                        }
                    });
                    storeRenderState({
                        renderState: renderState,
                        instantSearchInstance: instantSearchInstance,
                        parent: _this4
                    });
                }
            });
            localWidgets.forEach(function(widget) {
                // At this point, all the variables used below are set. Both `helper`
                // and `derivedHelper` have been created at the `init` step. The attribute
                // `lastResults` might be `null` though. It's possible that a stalled render
                // happens before the result e.g with a dynamically added index the request might
                // be delayed. The render is triggered for the complete tree but some parts do
                // not have results yet.
                if (widget.render) widget.render({
                    helper: helper,
                    parent: _this4,
                    instantSearchInstance: instantSearchInstance,
                    results: _this4.getResults(),
                    scopedResults: _this4.getScopedResults(),
                    state: _this4.getResults()._state,
                    renderState: instantSearchInstance.renderState,
                    templatesConfig: instantSearchInstance.templatesConfig,
                    createURL: _this4.createURL,
                    searchMetadata: {
                        isSearchStalled: instantSearchInstance._isSearchStalled
                    }
                });
            });
        },
        dispose: function dispose() {
            var _this5 = this;
            localWidgets.forEach(function(widget) {
                if (widget.dispose) // The dispose function is always called once the instance is started
                // (it's an effect of `removeWidgets`). The index is initialized and
                // the Helper is available. We don't care about the return value of
                // `dispose` because the index is removed. We can't call `removeWidgets`
                // because we want to keep the widgets on the instance, to allow idempotent
                // operations on `add` & `remove`.
                widget.dispose({
                    helper: helper,
                    state: helper.state,
                    parent: _this5
                });
            });
            localInstantSearchInstance = null;
            localParent = null;
            helper.removeAllListeners();
            helper = null;
            derivedHelper.detach();
            derivedHelper = null;
        },
        getWidgetUiState: function getWidgetUiState(uiState) {
            return localWidgets.filter(isIndexWidget).reduce(function(previousUiState, innerIndex) {
                return innerIndex.getWidgetUiState(previousUiState);
            }, _objectSpread(_objectSpread({
            }, uiState), {
            }, _defineProperty({
            }, this.getIndexId(), localUiState)));
        },
        getWidgetState: function getWidgetState(uiState) {
            _indexJs.warning(false, 'The `getWidgetState` method is renamed `getWidgetUiState` and will no longer exist under that name in InstantSearch.js 5.x. Please use `getWidgetUiState` instead.');
            return this.getWidgetUiState(uiState);
        },
        getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, _ref6) {
            var uiState = _ref6.uiState;
            return getLocalWidgetsSearchParameters(localWidgets, {
                uiState: uiState,
                initialSearchParameters: searchParameters
            });
        },
        refreshUiState: function refreshUiState() {
            localUiState = getLocalWidgetsUiState(localWidgets, {
                searchParameters: this.getHelper().state,
                helper: this.getHelper()
            }, localUiState);
        }
    };
};
exports.default = index;
function storeRenderState(_ref7) {
    var renderState = _ref7.renderState, instantSearchInstance = _ref7.instantSearchInstance, parent = _ref7.parent;
    var parentIndexName = parent ? parent.getIndexId() : instantSearchInstance.mainIndex.getIndexId();
    instantSearchInstance.renderState = _objectSpread(_objectSpread({
    }, instantSearchInstance.renderState), {
    }, _defineProperty({
    }, parentIndexName, _objectSpread(_objectSpread({
    }, instantSearchInstance.renderState[parentIndexName]), renderState)));
}

},{"algoliasearch-helper":"jGqjt","../../lib/utils/index.js":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"etVYs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "capitalize", ()=>_capitalizeJsDefault.default
);
parcelHelpers.export(exports, "defer", ()=>_deferJsDefault.default
);
parcelHelpers.export(exports, "isDomElement", ()=>_isDomElementJsDefault.default
);
parcelHelpers.export(exports, "getContainerNode", ()=>_getContainerNodeJsDefault.default
);
parcelHelpers.export(exports, "isSpecialClick", ()=>_isSpecialClickJsDefault.default
);
parcelHelpers.export(exports, "prepareTemplateProps", ()=>_prepareTemplatePropsJsDefault.default
);
parcelHelpers.export(exports, "renderTemplate", ()=>_renderTemplateJsDefault.default
);
parcelHelpers.export(exports, "getRefinements", ()=>_getRefinementsJsDefault.default
);
parcelHelpers.export(exports, "clearRefinements", ()=>_clearRefinementsJsDefault.default
);
parcelHelpers.export(exports, "escapeRefinement", ()=>_escapeRefinementJsDefault.default
);
parcelHelpers.export(exports, "unescapeRefinement", ()=>_unescapeRefinementJsDefault.default
);
parcelHelpers.export(exports, "checkRendering", ()=>_checkRenderingJsDefault.default
);
parcelHelpers.export(exports, "checkIndexUiState", ()=>_checkIndexUiStateJs.checkIndexUiState
);
parcelHelpers.export(exports, "getPropertyByPath", ()=>_getPropertyByPathJsDefault.default
);
parcelHelpers.export(exports, "getObjectType", ()=>_getObjectTypeJsDefault.default
);
parcelHelpers.export(exports, "noop", ()=>_noopJsDefault.default
);
parcelHelpers.export(exports, "isFiniteNumber", ()=>_isFiniteNumberJsDefault.default
);
parcelHelpers.export(exports, "isPlainObject", ()=>_isPlainObjectJsDefault.default
);
parcelHelpers.export(exports, "uniq", ()=>_uniqJsDefault.default
);
parcelHelpers.export(exports, "range", ()=>_rangeJsDefault.default
);
parcelHelpers.export(exports, "isEqual", ()=>_isEqualJsDefault.default
);
parcelHelpers.export(exports, "escape", ()=>_escapeJsDefault.default
);
parcelHelpers.export(exports, "unescape", ()=>_unescapeJsDefault.default
);
parcelHelpers.export(exports, "concatHighlightedParts", ()=>_concatHighlightedPartsJsDefault.default
);
parcelHelpers.export(exports, "getHighlightedParts", ()=>_getHighlightedPartsJsDefault.default
);
parcelHelpers.export(exports, "getHighlightFromSiblings", ()=>_getHighlightFromSiblingsJsDefault.default
);
parcelHelpers.export(exports, "reverseHighlightedParts", ()=>_reverseHighlightedPartsJsDefault.default
);
parcelHelpers.export(exports, "find", ()=>_findJsDefault.default
);
parcelHelpers.export(exports, "findIndex", ()=>_findIndexJsDefault.default
);
parcelHelpers.export(exports, "mergeSearchParameters", ()=>_mergeSearchParametersJsDefault.default
);
parcelHelpers.export(exports, "resolveSearchParameters", ()=>_resolveSearchParametersJsDefault.default
);
parcelHelpers.export(exports, "toArray", ()=>_toArrayJsDefault.default
);
parcelHelpers.export(exports, "warning", ()=>_loggerJs.warning
);
parcelHelpers.export(exports, "deprecate", ()=>_loggerJs.deprecate
);
parcelHelpers.export(exports, "escapeHits", ()=>_escapeHighlightJs.escapeHits
);
parcelHelpers.export(exports, "TAG_PLACEHOLDER", ()=>_escapeHighlightJs.TAG_PLACEHOLDER
);
parcelHelpers.export(exports, "TAG_REPLACEMENT", ()=>_escapeHighlightJs.TAG_REPLACEMENT
);
parcelHelpers.export(exports, "escapeFacets", ()=>_escapeHighlightJs.escapeFacets
);
parcelHelpers.export(exports, "createDocumentationLink", ()=>_documentationJs.createDocumentationLink
);
parcelHelpers.export(exports, "createDocumentationMessageGenerator", ()=>_documentationJs.createDocumentationMessageGenerator
);
parcelHelpers.export(exports, "aroundLatLngToPosition", ()=>_geoSearchJs.aroundLatLngToPosition
);
parcelHelpers.export(exports, "insideBoundingBoxToBoundingBox", ()=>_geoSearchJs.insideBoundingBoxToBoundingBox
);
parcelHelpers.export(exports, "addAbsolutePosition", ()=>_hitsAbsolutePositionJs.addAbsolutePosition
);
parcelHelpers.export(exports, "addQueryID", ()=>_hitsQueryIdJs.addQueryID
);
parcelHelpers.export(exports, "isFacetRefined", ()=>_isFacetRefinedJsDefault.default
);
parcelHelpers.export(exports, "getAppIdAndApiKey", ()=>_getAppIdAndApiKeyJs.getAppIdAndApiKey
);
parcelHelpers.export(exports, "convertNumericRefinementsToFilters", ()=>_convertNumericRefinementsToFiltersJs.convertNumericRefinementsToFilters
);
parcelHelpers.export(exports, "createConcurrentSafePromise", ()=>_createConcurrentSafePromiseJs.createConcurrentSafePromise
);
parcelHelpers.export(exports, "debounce", ()=>_debounceJs.debounce
);
parcelHelpers.export(exports, "serializePayload", ()=>_serializerJs.serializePayload
);
parcelHelpers.export(exports, "deserializePayload", ()=>_serializerJs.deserializePayload
);
parcelHelpers.export(exports, "getWidgetAttribute", ()=>_getWidgetAttributeJs.getWidgetAttribute
);
parcelHelpers.export(exports, "safelyRunOnBrowser", ()=>_safelyRunOnBrowserJs.safelyRunOnBrowser
);
var _capitalizeJs = require("./capitalize.js");
var _capitalizeJsDefault = parcelHelpers.interopDefault(_capitalizeJs);
var _deferJs = require("./defer.js");
var _deferJsDefault = parcelHelpers.interopDefault(_deferJs);
var _isDomElementJs = require("./isDomElement.js");
var _isDomElementJsDefault = parcelHelpers.interopDefault(_isDomElementJs);
var _getContainerNodeJs = require("./getContainerNode.js");
var _getContainerNodeJsDefault = parcelHelpers.interopDefault(_getContainerNodeJs);
var _isSpecialClickJs = require("./isSpecialClick.js");
var _isSpecialClickJsDefault = parcelHelpers.interopDefault(_isSpecialClickJs);
var _prepareTemplatePropsJs = require("./prepareTemplateProps.js");
var _prepareTemplatePropsJsDefault = parcelHelpers.interopDefault(_prepareTemplatePropsJs);
var _renderTemplateJs = require("./renderTemplate.js");
var _renderTemplateJsDefault = parcelHelpers.interopDefault(_renderTemplateJs);
var _getRefinementsJs = require("./getRefinements.js");
var _getRefinementsJsDefault = parcelHelpers.interopDefault(_getRefinementsJs);
var _clearRefinementsJs = require("./clearRefinements.js");
var _clearRefinementsJsDefault = parcelHelpers.interopDefault(_clearRefinementsJs);
var _escapeRefinementJs = require("./escapeRefinement.js");
var _escapeRefinementJsDefault = parcelHelpers.interopDefault(_escapeRefinementJs);
var _unescapeRefinementJs = require("./unescapeRefinement.js");
var _unescapeRefinementJsDefault = parcelHelpers.interopDefault(_unescapeRefinementJs);
var _checkRenderingJs = require("./checkRendering.js");
var _checkRenderingJsDefault = parcelHelpers.interopDefault(_checkRenderingJs);
var _checkIndexUiStateJs = require("./checkIndexUiState.js");
var _getPropertyByPathJs = require("./getPropertyByPath.js");
var _getPropertyByPathJsDefault = parcelHelpers.interopDefault(_getPropertyByPathJs);
var _getObjectTypeJs = require("./getObjectType.js");
var _getObjectTypeJsDefault = parcelHelpers.interopDefault(_getObjectTypeJs);
var _noopJs = require("./noop.js");
var _noopJsDefault = parcelHelpers.interopDefault(_noopJs);
var _isFiniteNumberJs = require("./isFiniteNumber.js");
var _isFiniteNumberJsDefault = parcelHelpers.interopDefault(_isFiniteNumberJs);
var _isPlainObjectJs = require("./isPlainObject.js");
var _isPlainObjectJsDefault = parcelHelpers.interopDefault(_isPlainObjectJs);
var _uniqJs = require("./uniq.js");
var _uniqJsDefault = parcelHelpers.interopDefault(_uniqJs);
var _rangeJs = require("./range.js");
var _rangeJsDefault = parcelHelpers.interopDefault(_rangeJs);
var _isEqualJs = require("./isEqual.js");
var _isEqualJsDefault = parcelHelpers.interopDefault(_isEqualJs);
var _escapeJs = require("./escape.js");
var _escapeJsDefault = parcelHelpers.interopDefault(_escapeJs);
var _unescapeJs = require("./unescape.js");
var _unescapeJsDefault = parcelHelpers.interopDefault(_unescapeJs);
var _concatHighlightedPartsJs = require("./concatHighlightedParts.js");
var _concatHighlightedPartsJsDefault = parcelHelpers.interopDefault(_concatHighlightedPartsJs);
var _getHighlightedPartsJs = require("./getHighlightedParts.js");
var _getHighlightedPartsJsDefault = parcelHelpers.interopDefault(_getHighlightedPartsJs);
var _getHighlightFromSiblingsJs = require("./getHighlightFromSiblings.js");
var _getHighlightFromSiblingsJsDefault = parcelHelpers.interopDefault(_getHighlightFromSiblingsJs);
var _reverseHighlightedPartsJs = require("./reverseHighlightedParts.js");
var _reverseHighlightedPartsJsDefault = parcelHelpers.interopDefault(_reverseHighlightedPartsJs);
var _findJs = require("./find.js");
var _findJsDefault = parcelHelpers.interopDefault(_findJs);
var _findIndexJs = require("./findIndex.js");
var _findIndexJsDefault = parcelHelpers.interopDefault(_findIndexJs);
var _mergeSearchParametersJs = require("./mergeSearchParameters.js");
var _mergeSearchParametersJsDefault = parcelHelpers.interopDefault(_mergeSearchParametersJs);
var _resolveSearchParametersJs = require("./resolveSearchParameters.js");
var _resolveSearchParametersJsDefault = parcelHelpers.interopDefault(_resolveSearchParametersJs);
var _toArrayJs = require("./toArray.js");
var _toArrayJsDefault = parcelHelpers.interopDefault(_toArrayJs);
var _loggerJs = require("./logger.js");
var _escapeHighlightJs = require("./escape-highlight.js");
var _documentationJs = require("./documentation.js");
var _geoSearchJs = require("./geo-search.js");
var _hitsAbsolutePositionJs = require("./hits-absolute-position.js");
var _hitsQueryIdJs = require("./hits-query-id.js");
var _isFacetRefinedJs = require("./isFacetRefined.js");
var _isFacetRefinedJsDefault = parcelHelpers.interopDefault(_isFacetRefinedJs);
var _createSendEventForFacetJs = require("./createSendEventForFacet.js");
parcelHelpers.exportAll(_createSendEventForFacetJs, exports);
var _createSendEventForHitsJs = require("./createSendEventForHits.js");
parcelHelpers.exportAll(_createSendEventForHitsJs, exports);
var _getAppIdAndApiKeyJs = require("./getAppIdAndApiKey.js");
var _convertNumericRefinementsToFiltersJs = require("./convertNumericRefinementsToFilters.js");
var _createConcurrentSafePromiseJs = require("./createConcurrentSafePromise.js");
var _debounceJs = require("./debounce.js");
var _serializerJs = require("./serializer.js");
var _getWidgetAttributeJs = require("./getWidgetAttribute.js");
var _safelyRunOnBrowserJs = require("./safelyRunOnBrowser.js");

},{"./capitalize.js":"1J2wi","./defer.js":"bO5Os","./isDomElement.js":"3TY64","./getContainerNode.js":"ayQ3q","./isSpecialClick.js":"lKDby","./prepareTemplateProps.js":"3Knzg","./renderTemplate.js":"cpZ6z","./getRefinements.js":false,"./clearRefinements.js":false,"./escapeRefinement.js":false,"./unescapeRefinement.js":false,"./checkRendering.js":"jF2C6","./checkIndexUiState.js":"bH0Ll","./getPropertyByPath.js":"2Q0lT","./getObjectType.js":"3XQ8P","./noop.js":"6iazv","./isFiniteNumber.js":false,"./isPlainObject.js":"cIivc","./uniq.js":"2Q0ce","./range.js":"1dHGc","./isEqual.js":"14V8N","./escape.js":"eLn1u","./unescape.js":"cWsJ0","./concatHighlightedParts.js":"12qh7","./getHighlightedParts.js":"7jCC9","./getHighlightFromSiblings.js":"fAPc5","./reverseHighlightedParts.js":"kBcoN","./find.js":"6Dhef","./findIndex.js":"8tlAy","./mergeSearchParameters.js":"9Li6L","./resolveSearchParameters.js":"a7lVI","./toArray.js":false,"./logger.js":"glTTt","./escape-highlight.js":"59mW0","./documentation.js":"gLqHy","./geo-search.js":false,"./hits-absolute-position.js":"dMQpP","./hits-query-id.js":"iBpEo","./isFacetRefined.js":"b5SV4","./createSendEventForFacet.js":"05go2","./createSendEventForHits.js":"24sIF","./getAppIdAndApiKey.js":"7XKtv","./convertNumericRefinementsToFilters.js":false,"./createConcurrentSafePromise.js":false,"./debounce.js":false,"./serializer.js":"jg61H","./getWidgetAttribute.js":"lGWeY","./safelyRunOnBrowser.js":"3Ntti","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1J2wi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function capitalize(text) {
    return text.toString().charAt(0).toUpperCase() + text.toString().slice(1);
}
exports.default = capitalize;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"bO5Os":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var nextMicroTask = Promise.resolve();
var defer = function defer(callback) {
    var progress = null;
    var cancelled = false;
    var fn = function fn() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        if (progress !== null) return;
        progress = nextMicroTask.then(function() {
            progress = null;
            if (cancelled) {
                cancelled = false;
                return;
            }
            callback.apply(void 0, args);
        });
    };
    fn.wait = function() {
        if (progress === null) throw new Error('The deferred function should be called before calling `wait()`');
        return progress;
    };
    fn.cancel = function() {
        if (progress === null) return;
        cancelled = true;
    };
    return fn;
};
exports.default = defer;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3TY64":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function isDomElement(object) {
    return object instanceof HTMLElement || Boolean(object) && object.nodeType > 0;
}
exports.default = isDomElement;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ayQ3q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isDomElementJs = require("./isDomElement.js");
var _isDomElementJsDefault = parcelHelpers.interopDefault(_isDomElementJs);
/**
 * Return the container. If it's a string, it is considered a
 * css selector and retrieves the first matching element. Otherwise
 * test if it validates that it's a correct DOMElement.
 *
 * @param {string|HTMLElement} selectorOrHTMLElement CSS Selector or container node.
 * @return {HTMLElement} Container node
 * @throws Error when the type is not correct
 */ function getContainerNode(selectorOrHTMLElement) {
    var isSelectorString = typeof selectorOrHTMLElement === 'string';
    var domElement = isSelectorString ? document.querySelector(selectorOrHTMLElement) : selectorOrHTMLElement;
    if (!_isDomElementJsDefault.default(domElement)) {
        var errorMessage = 'Container must be `string` or `HTMLElement`.';
        if (isSelectorString) errorMessage += " Unable to find ".concat(selectorOrHTMLElement);
        throw new Error(errorMessage);
    }
    return domElement;
}
exports.default = getContainerNode;

},{"./isDomElement.js":"3TY64","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lKDby":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function isSpecialClick(event) {
    var isMiddleClick = event.button === 1;
    return isMiddleClick || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey;
}
exports.default = isSpecialClick;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Knzg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _uniqJs = require("./uniq.js");
var _uniqJsDefault = parcelHelpers.interopDefault(_uniqJs);
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function prepareTemplates(defaultTemplates) {
    var templates = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    };
    var allKeys = _uniqJsDefault.default([].concat(_toConsumableArray(Object.keys(defaultTemplates || {
    })), _toConsumableArray(Object.keys(templates))));
    return allKeys.reduce(function(config, key) {
        var defaultTemplate = defaultTemplates ? defaultTemplates[key] : undefined;
        var customTemplate = templates[key];
        var isCustomTemplate = customTemplate !== undefined && customTemplate !== defaultTemplate;
        config.templates[key] = isCustomTemplate ? customTemplate // typescript doesn't recognize that this condition asserts customTemplate is defined
         : defaultTemplate;
        config.useCustomCompileOptions[key] = isCustomTemplate;
        return config;
    }, {
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        templates: {
        },
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        useCustomCompileOptions: {
        }
    });
}
/**
 * Prepares an object to be passed to the Template widget
 */ function prepareTemplateProps(_ref) {
    var defaultTemplates = _ref.defaultTemplates, templates = _ref.templates, templatesConfig = _ref.templatesConfig;
    var preparedTemplates = prepareTemplates(defaultTemplates, templates);
    return _objectSpread({
        templatesConfig: templatesConfig
    }, preparedTemplates);
}
exports.default = prepareTemplateProps;

},{"./uniq.js":"2Q0ce","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2Q0ce":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function uniq(array) {
    return array.filter(function(value, index, self) {
        return self.indexOf(value) === index;
    });
}
exports.default = uniq;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cpZ6z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _hoganJs = require("hogan.js");
var _hoganJsDefault = parcelHelpers.interopDefault(_hoganJs);
function _typeof(obj1) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj1);
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
// We add all our template helper methods to the template as lambdas. Note
// that lambdas in Mustache are supposed to accept a second argument of
// `render` to get the rendered value, not the literal `{{value}}`. But
// this is currently broken (see https://github.com/twitter/hogan.js/issues/222).
function transformHelpersToHogan() {
    var helpers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    };
    var compileOptions = arguments.length > 1 ? arguments[1] : undefined;
    var data = arguments.length > 2 ? arguments[2] : undefined;
    return Object.keys(helpers).reduce(function(acc, helperKey) {
        return _objectSpread(_objectSpread({
        }, acc), {
        }, _defineProperty({
        }, helperKey, function() {
            var _this = this;
            return function(text) {
                var render = function render(value) {
                    return _hoganJsDefault.default.compile(value, compileOptions).render(_this);
                };
                return helpers[helperKey].call(data, text, render);
            };
        }));
    }, {
    });
}
function renderTemplate(_ref) {
    var templates = _ref.templates, templateKey = _ref.templateKey, compileOptions = _ref.compileOptions, helpers = _ref.helpers, data = _ref.data, bindEvent = _ref.bindEvent;
    var template = templates[templateKey];
    if (typeof template !== 'string' && typeof template !== 'function') throw new Error("Template must be 'string' or 'function', was '".concat(_typeof(template), "' (key: ").concat(templateKey, ")"));
    if (typeof template === 'function') return template(data, bindEvent);
    var transformedHelpers = transformHelpersToHogan(helpers, compileOptions, data);
    return _hoganJsDefault.default.compile(template, compileOptions).render(_objectSpread(_objectSpread({
    }, data), {
    }, {
        helpers: transformedHelpers
    })).replace(/[ \n\r\t\f\xA0]+/g, function(spaces) {
        return spaces.replace(/(^|\xA0+)[^\xA0]+/g, '$1 ');
    }).trim();
}
exports.default = renderTemplate;

},{"hogan.js":"gkYEi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkYEi":[function(require,module,exports) {
/*
 *  Copyright 2011 Twitter, Inc.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */ // This file is for use with Node.js. See dist/ for browser files.
var Hogan = require('./compiler');
Hogan.Template = require('./template').Template;
Hogan.template = Hogan.Template;
module.exports = Hogan;

},{"./compiler":"ezTiX","./template":"kCFri"}],"ezTiX":[function(require,module,exports) {
/*
 *  Copyright 2011 Twitter, Inc.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */ (function(Hogan) {
    // Setup regex  assignments
    // remove whitespace according to Mustache spec
    var rIsWhitespace = /\S/, rQuot = /\"/g, rNewline = /\n/g, rCr = /\r/g, rSlash = /\\/g, rLineSep = /\u2028/, rParagraphSep = /\u2029/;
    Hogan.tags = {
        '#': 1,
        '^': 2,
        '<': 3,
        '$': 4,
        '/': 5,
        '!': 6,
        '>': 7,
        '=': 8,
        '_v': 9,
        '{': 10,
        '&': 11,
        '_t': 12
    };
    Hogan.scan = function scan(text1, delimiters1) {
        var len = text1.length, IN_TEXT = 0, IN_TAG_TYPE = 1, IN_TAG = 2, state = IN_TEXT, tagType = null, tag = null, buf = '', tokens = [], seenTag = false, i = 0, lineStart = 0, otag = '{{', ctag = '}}';
        function addBuf() {
            if (buf.length > 0) {
                tokens.push({
                    tag: '_t',
                    text: new String(buf)
                });
                buf = '';
            }
        }
        function lineIsWhitespace() {
            var isAllWhitespace = true;
            for(var j = lineStart; j < tokens.length; j++){
                isAllWhitespace = Hogan.tags[tokens[j].tag] < Hogan.tags['_v'] || tokens[j].tag == '_t' && tokens[j].text.match(rIsWhitespace) === null;
                if (!isAllWhitespace) return false;
            }
            return isAllWhitespace;
        }
        function filterLine(haveSeenTag, noNewLine) {
            addBuf();
            if (haveSeenTag && lineIsWhitespace()) {
                for(var j = lineStart, next; j < tokens.length; j++)if (tokens[j].text) {
                    if ((next = tokens[j + 1]) && next.tag == '>') // set indent to token value
                    next.indent = tokens[j].text.toString();
                    tokens.splice(j, 1);
                }
            } else if (!noNewLine) tokens.push({
                tag: '\n'
            });
            seenTag = false;
            lineStart = tokens.length;
        }
        function changeDelimiters(text, index) {
            var close = '=' + ctag, closeIndex = text.indexOf(close, index), delimiters = trim(text.substring(text.indexOf('=', index) + 1, closeIndex)).split(' ');
            otag = delimiters[0];
            ctag = delimiters[delimiters.length - 1];
            return closeIndex + close.length - 1;
        }
        if (delimiters1) {
            delimiters1 = delimiters1.split(' ');
            otag = delimiters1[0];
            ctag = delimiters1[1];
        }
        for(i = 0; i < len; i++){
            if (state == IN_TEXT) {
                if (tagChange(otag, text1, i)) {
                    --i;
                    addBuf();
                    state = IN_TAG_TYPE;
                } else if (text1.charAt(i) == '\n') filterLine(seenTag);
                else buf += text1.charAt(i);
            } else if (state == IN_TAG_TYPE) {
                i += otag.length - 1;
                tag = Hogan.tags[text1.charAt(i + 1)];
                tagType = tag ? text1.charAt(i + 1) : '_v';
                if (tagType == '=') {
                    i = changeDelimiters(text1, i);
                    state = IN_TEXT;
                } else {
                    if (tag) i++;
                    state = IN_TAG;
                }
                seenTag = i;
            } else if (tagChange(ctag, text1, i)) {
                tokens.push({
                    tag: tagType,
                    n: trim(buf),
                    otag: otag,
                    ctag: ctag,
                    i: tagType == '/' ? seenTag - otag.length : i + ctag.length
                });
                buf = '';
                i += ctag.length - 1;
                state = IN_TEXT;
                if (tagType == '{') {
                    if (ctag == '}}') i++;
                    else cleanTripleStache(tokens[tokens.length - 1]);
                }
            } else buf += text1.charAt(i);
        }
        filterLine(seenTag, true);
        return tokens;
    };
    function cleanTripleStache(token) {
        if (token.n.substr(token.n.length - 1) === '}') token.n = token.n.substring(0, token.n.length - 1);
    }
    function trim(s) {
        if (s.trim) return s.trim();
        return s.replace(/^\s*|\s*$/g, '');
    }
    function tagChange(tag, text, index) {
        if (text.charAt(index) != tag.charAt(0)) return false;
        for(var i = 1, l = tag.length; i < l; i++){
            if (text.charAt(index + i) != tag.charAt(i)) return false;
        }
        return true;
    }
    // the tags allowed inside super templates
    var allowedInSuper = {
        '_t': true,
        '\n': true,
        '$': true,
        '/': true
    };
    function buildTree(tokens, kind, stack, customTags) {
        var instructions = [], opener = null, tail = null, token = null;
        tail = stack[stack.length - 1];
        while(tokens.length > 0){
            token = tokens.shift();
            if (tail && tail.tag == '<' && !(token.tag in allowedInSuper)) throw new Error('Illegal content in < super tag.');
            if (Hogan.tags[token.tag] <= Hogan.tags['$'] || isOpener(token, customTags)) {
                stack.push(token);
                token.nodes = buildTree(tokens, token.tag, stack, customTags);
            } else if (token.tag == '/') {
                if (stack.length === 0) throw new Error('Closing tag without opener: /' + token.n);
                opener = stack.pop();
                if (token.n != opener.n && !isCloser(token.n, opener.n, customTags)) throw new Error('Nesting error: ' + opener.n + ' vs. ' + token.n);
                opener.end = token.i;
                return instructions;
            } else if (token.tag == '\n') token.last = tokens.length == 0 || tokens[0].tag == '\n';
            instructions.push(token);
        }
        if (stack.length > 0) throw new Error('missing closing tag: ' + stack.pop().n);
        return instructions;
    }
    function isOpener(token, tags) {
        for(var i = 0, l = tags.length; i < l; i++)if (tags[i].o == token.n) {
            token.tag = '#';
            return true;
        }
    }
    function isCloser(close, open, tags) {
        for(var i = 0, l = tags.length; i < l; i++){
            if (tags[i].c == close && tags[i].o == open) return true;
        }
    }
    function stringifySubstitutions(obj) {
        var items = [];
        for(var key in obj)items.push('"' + esc(key) + '": function(c,p,t,i) {' + obj[key] + '}');
        return "{ " + items.join(",") + " }";
    }
    function stringifyPartials(codeObj) {
        var partials = [];
        for(var key in codeObj.partials)partials.push('"' + esc(key) + '":{name:"' + esc(codeObj.partials[key].name) + '", ' + stringifyPartials(codeObj.partials[key]) + "}");
        return "partials: {" + partials.join(",") + "}, subs: " + stringifySubstitutions(codeObj.subs);
    }
    Hogan.stringify = function(codeObj, text, options) {
        return "{code: function (c,p,i) { " + Hogan.wrapMain(codeObj.code) + " }," + stringifyPartials(codeObj) + "}";
    };
    var serialNo = 0;
    Hogan.generate = function(tree, text, options) {
        serialNo = 0;
        var context = {
            code: '',
            subs: {
            },
            partials: {
            }
        };
        Hogan.walk(tree, context);
        if (options.asString) return this.stringify(context, text, options);
        return this.makeTemplate(context, text, options);
    };
    Hogan.wrapMain = function(code) {
        return 'var t=this;t.b(i=i||"");' + code + 'return t.fl();';
    };
    Hogan.template = Hogan.Template;
    Hogan.makeTemplate = function(codeObj, text, options) {
        var template = this.makePartials(codeObj);
        template.code = new Function('c', 'p', 'i', this.wrapMain(codeObj.code));
        return new this.template(template, text, this, options);
    };
    Hogan.makePartials = function(codeObj) {
        var key, template = {
            subs: {
            },
            partials: codeObj.partials,
            name: codeObj.name
        };
        for(key in template.partials)template.partials[key] = this.makePartials(template.partials[key]);
        for(key in codeObj.subs)template.subs[key] = new Function('c', 'p', 't', 'i', codeObj.subs[key]);
        return template;
    };
    function esc(s) {
        return s.replace(rSlash, '\\\\').replace(rQuot, '\\\"').replace(rNewline, '\\n').replace(rCr, '\\r').replace(rLineSep, '\\u2028').replace(rParagraphSep, '\\u2029');
    }
    function chooseMethod(s) {
        return ~s.indexOf('.') ? 'd' : 'f';
    }
    function createPartial(node, context) {
        var prefix = "<" + (context.prefix || "");
        var sym = prefix + node.n + serialNo++;
        context.partials[sym] = {
            name: node.n,
            partials: {
            }
        };
        context.code += 't.b(t.rp("' + esc(sym) + '",c,p,"' + (node.indent || '') + '"));';
        return sym;
    }
    Hogan.codegen = {
        '#': function(node, context) {
            context.code += 'if(t.s(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,1),' + 'c,p,0,' + node.i + ',' + node.end + ',"' + node.otag + " " + node.ctag + '")){' + 't.rs(c,p,' + 'function(c,p,t){';
            Hogan.walk(node.nodes, context);
            context.code += '});c.pop();}';
        },
        '^': function(node, context) {
            context.code += 'if(!t.s(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,1),c,p,1,0,0,"")){';
            Hogan.walk(node.nodes, context);
            context.code += '};';
        },
        '>': createPartial,
        '<': function(node, context) {
            var ctx = {
                partials: {
                },
                code: '',
                subs: {
                },
                inPartial: true
            };
            Hogan.walk(node.nodes, ctx);
            var template = context.partials[createPartial(node, context)];
            template.subs = ctx.subs;
            template.partials = ctx.partials;
        },
        '$': function(node, context) {
            var ctx = {
                subs: {
                },
                code: '',
                partials: context.partials,
                prefix: node.n
            };
            Hogan.walk(node.nodes, ctx);
            context.subs[node.n] = ctx.code;
            if (!context.inPartial) context.code += 't.sub("' + esc(node.n) + '",c,p,i);';
        },
        '\n': function(node, context) {
            context.code += write('"\\n"' + (node.last ? '' : ' + i'));
        },
        '_v': function(node, context) {
            context.code += 't.b(t.v(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,0)));';
        },
        '_t': function(node, context) {
            context.code += write('"' + esc(node.text) + '"');
        },
        '{': tripleStache,
        '&': tripleStache
    };
    function tripleStache(node, context) {
        context.code += 't.b(t.t(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,0)));';
    }
    function write(s) {
        return 't.b(' + s + ');';
    }
    Hogan.walk = function(nodelist, context) {
        var func;
        for(var i = 0, l = nodelist.length; i < l; i++){
            func = Hogan.codegen[nodelist[i].tag];
            func && func(nodelist[i], context);
        }
        return context;
    };
    Hogan.parse = function(tokens, text, options) {
        options = options || {
        };
        return buildTree(tokens, '', [], options.sectionTags || []);
    };
    Hogan.cache = {
    };
    Hogan.cacheKey = function(text, options) {
        return [
            text,
            !!options.asString,
            !!options.disableLambda,
            options.delimiters,
            !!options.modelGet
        ].join('||');
    };
    Hogan.compile = function(text, options) {
        options = options || {
        };
        var key = Hogan.cacheKey(text, options);
        var template = this.cache[key];
        if (template) {
            var partials = template.partials;
            for(var name in partials)delete partials[name].instance;
            return template;
        }
        template = this.generate(this.parse(this.scan(text, options.delimiters), text, options), text, options);
        return this.cache[key] = template;
    };
})(typeof exports !== 'undefined' ? exports : Hogan);

},{}],"kCFri":[function(require,module,exports) {
/*
 *  Copyright 2011 Twitter, Inc.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */ var Hogan = {
};
(function(Hogan1) {
    Hogan1.Template = function(codeObj, text, compiler, options) {
        codeObj = codeObj || {
        };
        this.r = codeObj.code || this.r;
        this.c = compiler;
        this.options = options || {
        };
        this.text = text || '';
        this.partials = codeObj.partials || {
        };
        this.subs = codeObj.subs || {
        };
        this.buf = '';
    };
    Hogan1.Template.prototype = {
        // render: replaced by generated code.
        r: function(context, partials, indent) {
            return '';
        },
        // variable escaping
        v: hoganEscape,
        // triple stache
        t: coerceToString,
        render: function render(context, partials, indent) {
            return this.ri([
                context
            ], partials || {
            }, indent);
        },
        // render internal -- a hook for overrides that catches partials too
        ri: function(context, partials, indent) {
            return this.r(context, partials, indent);
        },
        // ensurePartial
        ep: function(symbol, partials) {
            var partial = this.partials[symbol];
            // check to see that if we've instantiated this partial before
            var template = partials[partial.name];
            if (partial.instance && partial.base == template) return partial.instance;
            if (typeof template == 'string') {
                if (!this.c) throw new Error("No compiler available.");
                template = this.c.compile(template, this.options);
            }
            if (!template) return null;
            // We use this to check whether the partials dictionary has changed
            this.partials[symbol].base = template;
            if (partial.subs) {
                // Make sure we consider parent template now
                if (!partials.stackText) partials.stackText = {
                };
                for(key in partial.subs)if (!partials.stackText[key]) partials.stackText[key] = this.activeSub !== undefined && partials.stackText[this.activeSub] ? partials.stackText[this.activeSub] : this.text;
                template = createSpecializedPartial(template, partial.subs, partial.partials, this.stackSubs, this.stackPartials, partials.stackText);
            }
            this.partials[symbol].instance = template;
            return template;
        },
        // tries to find a partial in the current scope and render it
        rp: function(symbol, context, partials, indent) {
            var partial = this.ep(symbol, partials);
            if (!partial) return '';
            return partial.ri(context, partials, indent);
        },
        // render a section
        rs: function(context, partials, section) {
            var tail = context[context.length - 1];
            if (!isArray(tail)) {
                section(context, partials, this);
                return;
            }
            for(var i = 0; i < tail.length; i++){
                context.push(tail[i]);
                section(context, partials, this);
                context.pop();
            }
        },
        // maybe start a section
        s: function(val, ctx, partials, inverted, start, end, tags) {
            var pass;
            if (isArray(val) && val.length === 0) return false;
            if (typeof val == 'function') val = this.ms(val, ctx, partials, inverted, start, end, tags);
            pass = !!val;
            if (!inverted && pass && ctx) ctx.push(typeof val == 'object' ? val : ctx[ctx.length - 1]);
            return pass;
        },
        // find values with dotted names
        d: function(key, ctx, partials, returnFound) {
            var found, names = key.split('.'), val = this.f(names[0], ctx, partials, returnFound), doModelGet = this.options.modelGet, cx = null;
            if (key === '.' && isArray(ctx[ctx.length - 2])) val = ctx[ctx.length - 1];
            else for(var i = 1; i < names.length; i++){
                found = findInScope(names[i], val, doModelGet);
                if (found !== undefined) {
                    cx = val;
                    val = found;
                } else val = '';
            }
            if (returnFound && !val) return false;
            if (!returnFound && typeof val == 'function') {
                ctx.push(cx);
                val = this.mv(val, ctx, partials);
                ctx.pop();
            }
            return val;
        },
        // find values with normal names
        f: function(key, ctx, partials, returnFound) {
            var val = false, v = null, found = false, doModelGet = this.options.modelGet;
            for(var i = ctx.length - 1; i >= 0; i--){
                v = ctx[i];
                val = findInScope(key, v, doModelGet);
                if (val !== undefined) {
                    found = true;
                    break;
                }
            }
            if (!found) return returnFound ? false : "";
            if (!returnFound && typeof val == 'function') val = this.mv(val, ctx, partials);
            return val;
        },
        // higher order templates
        ls: function(func, cx, partials, text, tags) {
            var oldTags = this.options.delimiters;
            this.options.delimiters = tags;
            this.b(this.ct(coerceToString(func.call(cx, text)), cx, partials));
            this.options.delimiters = oldTags;
            return false;
        },
        // compile text
        ct: function(text, cx, partials) {
            if (this.options.disableLambda) throw new Error('Lambda features disabled.');
            return this.c.compile(text, this.options).render(cx, partials);
        },
        // template result buffering
        b: function(s) {
            this.buf += s;
        },
        fl: function() {
            var r = this.buf;
            this.buf = '';
            return r;
        },
        // method replace section
        ms: function(func, ctx, partials, inverted, start, end, tags) {
            var textSource, cx = ctx[ctx.length - 1], result = func.call(cx);
            if (typeof result == 'function') {
                if (inverted) return true;
                else {
                    textSource = this.activeSub && this.subsText && this.subsText[this.activeSub] ? this.subsText[this.activeSub] : this.text;
                    return this.ls(result, cx, partials, textSource.substring(start, end), tags);
                }
            }
            return result;
        },
        // method replace variable
        mv: function(func, ctx, partials) {
            var cx = ctx[ctx.length - 1];
            var result = func.call(cx);
            if (typeof result == 'function') return this.ct(coerceToString(result.call(cx)), cx, partials);
            return result;
        },
        sub: function(name, context, partials, indent) {
            var f = this.subs[name];
            if (f) {
                this.activeSub = name;
                f(context, partials, this, indent);
                this.activeSub = false;
            }
        }
    };
    //Find a key in an object
    function findInScope(key, scope, doModelGet) {
        var val;
        if (scope && typeof scope == 'object') {
            if (scope[key] !== undefined) val = scope[key];
            else if (doModelGet && scope.get && typeof scope.get == 'function') val = scope.get(key);
        }
        return val;
    }
    function createSpecializedPartial(instance, subs, partials, stackSubs, stackPartials, stackText) {
        function PartialTemplate() {
        }
        PartialTemplate.prototype = instance;
        function Substitutions() {
        }
        Substitutions.prototype = instance.subs;
        var key;
        var partial = new PartialTemplate();
        partial.subs = new Substitutions();
        partial.subsText = {
        }; //hehe. substext.
        partial.buf = '';
        stackSubs = stackSubs || {
        };
        partial.stackSubs = stackSubs;
        partial.subsText = stackText;
        for(key in subs)if (!stackSubs[key]) stackSubs[key] = subs[key];
        for(key in stackSubs)partial.subs[key] = stackSubs[key];
        stackPartials = stackPartials || {
        };
        partial.stackPartials = stackPartials;
        for(key in partials)if (!stackPartials[key]) stackPartials[key] = partials[key];
        for(key in stackPartials)partial.partials[key] = stackPartials[key];
        return partial;
    }
    var rAmp = /&/g, rLt = /</g, rGt = />/g, rApos = /\'/g, rQuot = /\"/g, hChars = /[&<>\"\']/;
    function coerceToString(val) {
        return String(val === null || val === undefined ? '' : val);
    }
    function hoganEscape(str) {
        str = coerceToString(str);
        return hChars.test(str) ? str.replace(rAmp, '&amp;').replace(rLt, '&lt;').replace(rGt, '&gt;').replace(rApos, '&#39;').replace(rQuot, '&quot;') : str;
    }
    var isArray = Array.isArray || function(a) {
        return Object.prototype.toString.call(a) === '[object Array]';
    };
})(typeof exports !== 'undefined' ? exports : Hogan);

},{}],"jF2C6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getObjectTypeJs = require("./getObjectType.js");
var _getObjectTypeJsDefault = parcelHelpers.interopDefault(_getObjectTypeJs);
function checkRendering(rendering, usage) {
    if (rendering === undefined || typeof rendering !== 'function') throw new Error("The render function is not valid (received type ".concat(_getObjectTypeJsDefault.default(rendering), ").\n\n").concat(usage));
}
exports.default = checkRendering;

},{"./getObjectType.js":"3XQ8P","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3XQ8P":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getObjectType(object) {
    return Object.prototype.toString.call(object).slice(8, -1);
}
exports.default = getObjectType;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bH0Ll":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "checkIndexUiState", ()=>checkIndexUiState
);
var _capitalizeJs = require("./capitalize.js");
var _capitalizeJsDefault = parcelHelpers.interopDefault(_capitalizeJs);
var _loggerJs = require("./logger.js");
var _typedObjectJs = require("./typedObject.js"); // Some connectors are responsible for multiple widgets so we need
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
// to map them.
function getWidgetNames(connectorName) {
    switch(connectorName){
        case 'range':
            return [];
        case 'menu':
            return [
                'menu',
                'menuSelect'
            ];
        default:
            return [
                connectorName
            ];
    }
}
var stateToWidgetsMap = {
    query: {
        connectors: [
            'connectSearchBox'
        ],
        widgets: [
            'ais.searchBox',
            'ais.autocomplete',
            'ais.voiceSearch'
        ]
    },
    refinementList: {
        connectors: [
            'connectRefinementList'
        ],
        widgets: [
            'ais.refinementList'
        ]
    },
    menu: {
        connectors: [
            'connectMenu'
        ],
        widgets: [
            'ais.menu'
        ]
    },
    hierarchicalMenu: {
        connectors: [
            'connectHierarchicalMenu'
        ],
        widgets: [
            'ais.hierarchicalMenu'
        ]
    },
    numericMenu: {
        connectors: [
            'connectNumericMenu'
        ],
        widgets: [
            'ais.numericMenu'
        ]
    },
    ratingMenu: {
        connectors: [
            'connectRatingMenu'
        ],
        widgets: [
            'ais.ratingMenu'
        ]
    },
    range: {
        connectors: [
            'connectRange'
        ],
        widgets: [
            'ais.rangeInput',
            'ais.rangeSlider',
            'ais.range'
        ]
    },
    toggle: {
        connectors: [
            'connectToggleRefinement'
        ],
        widgets: [
            'ais.toggleRefinement'
        ]
    },
    geoSearch: {
        connectors: [
            'connectGeoSearch'
        ],
        widgets: [
            'ais.geoSearch'
        ]
    },
    sortBy: {
        connectors: [
            'connectSortBy'
        ],
        widgets: [
            'ais.sortBy'
        ]
    },
    page: {
        connectors: [
            'connectPagination'
        ],
        widgets: [
            'ais.pagination',
            'ais.infiniteHits'
        ]
    },
    hitsPerPage: {
        connectors: [
            'connectHitsPerPage'
        ],
        widgets: [
            'ais.hitsPerPage'
        ]
    },
    configure: {
        connectors: [
            'connectConfigure'
        ],
        widgets: [
            'ais.configure'
        ]
    },
    places: {
        connectors: [],
        widgets: [
            'ais.places'
        ]
    }
};
function checkIndexUiState(_ref) {
    var index = _ref.index, indexUiState = _ref.indexUiState;
    var mountedWidgets = index.getWidgets().map(function(widget) {
        return widget.$$type;
    }).filter(Boolean);
    var missingWidgets = _typedObjectJs.keys(indexUiState).reduce(function(acc, parameter) {
        var widgetUiState = stateToWidgetsMap[parameter];
        if (!widgetUiState) return acc;
        var requiredWidgets = widgetUiState.widgets;
        if (requiredWidgets && !requiredWidgets.some(function(requiredWidget) {
            return mountedWidgets.includes(requiredWidget);
        })) acc.push([
            parameter,
            {
                connectors: widgetUiState.connectors,
                widgets: widgetUiState.widgets.map(function(widgetIdentifier) {
                    return widgetIdentifier.split('ais.')[1];
                })
            }
        ]);
        return acc;
    }, []);
    _loggerJs.warning(missingWidgets.length === 0, "The UI state for the index \"".concat(index.getIndexId(), "\" is not consistent with the widgets mounted.\n\nThis can happen when the UI state is specified via `initialUiState`, `routing` or `setUiState` but that the widgets responsible for this state were not added. This results in those query parameters not being sent to the API.\n\nTo fully reflect the state, some widgets need to be added to the index \"").concat(index.getIndexId(), "\":\n\n").concat(missingWidgets.map(function(_ref2) {
        var _ref4;
        var _ref3 = _slicedToArray(_ref2, 2), stateParameter = _ref3[0], widgets = _ref3[1].widgets;
        return "- `".concat(stateParameter, "` needs one of these widgets: ").concat((_ref4 = []).concat.apply(_ref4, _toConsumableArray(widgets.map(function(name) {
            return getWidgetNames(name);
        }))).map(function(name) {
            return "\"".concat(name, "\"");
        }).join(', '));
    }).join('\n'), "\n\nIf you do not wish to display widgets but still want to support their search parameters, you can mount \"virtual widgets\" that don't render anything:\n\n```\n").concat(missingWidgets.filter(function(_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2), _stateParameter = _ref6[0], connectors = _ref6[1].connectors;
        return connectors.length > 0;
    }).map(function(_ref7) {
        var _ref8 = _slicedToArray(_ref7, 2), _stateParameter = _ref8[0], _ref8$ = _ref8[1], connectors = _ref8$.connectors, widgets = _ref8$.widgets;
        var capitalizedWidget = _capitalizeJsDefault.default(widgets[0]);
        var connectorName = connectors[0];
        return "const virtual".concat(capitalizedWidget, " = ").concat(connectorName, "(() => null);");
    }).join('\n'), "\n\nsearch.addWidgets([\n  ").concat(missingWidgets.filter(function(_ref9) {
        var _ref10 = _slicedToArray(_ref9, 2), _stateParameter = _ref10[0], connectors = _ref10[1].connectors;
        return connectors.length > 0;
    }).map(function(_ref11) {
        var _ref12 = _slicedToArray(_ref11, 2), _stateParameter = _ref12[0], widgets = _ref12[1].widgets;
        var capitalizedWidget = _capitalizeJsDefault.default(widgets[0]);
        return "virtual".concat(capitalizedWidget, "({ /* ... */ })");
    }).join(',\n  '), "\n]);\n```\n\nIf you're using custom widgets that do set these query parameters, we recommend using connectors instead.\n\nSee https://www.algolia.com/doc/guides/building-search-ui/widgets/customize-an-existing-widget/js/#customize-the-complete-ui-of-the-widgets"));
}

},{"./capitalize.js":"1J2wi","./logger.js":"glTTt","./typedObject.js":"5SpMp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"glTTt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "warn", ()=>warn
);
parcelHelpers.export(exports, "deprecate", ()=>deprecate
);
parcelHelpers.export(exports, "warning", ()=>_warning
);
var _noopJs = require("./noop.js");
var _noopJsDefault = parcelHelpers.interopDefault(_noopJs);
/**
 * Logs a warning when this function is called, in development environment only.
 */ var deprecate = function deprecate(fn, message) {
    return fn;
};
/**
 * Logs a warning
 * This is used to log issues in development environment only.
 */ var warn = _noopJsDefault.default;
/**
 * Logs a warning if the condition is not met.
 * This is used to log issues in development environment only.
 */ var _warning = _noopJsDefault.default;
warn = function warn(message) {
    // eslint-disable-next-line no-console
    console.warn("[InstantSearch.js]: ".concat(message.trim()));
};
deprecate = function deprecate(fn, message) {
    var hasAlreadyPrinted = false;
    return function() {
        if (!hasAlreadyPrinted) {
            hasAlreadyPrinted = true;
            warn(message);
        }
        return fn.apply(void 0, arguments);
    };
};
_warning = function warning(condition, message) {
    if (condition) return;
    var hasAlreadyPrinted = _warning.cache[message];
    if (!hasAlreadyPrinted) {
        _warning.cache[message] = true;
        warn(message);
    }
};
_warning.cache = {
};

},{"./noop.js":"6iazv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6iazv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function noop() {
}
exports.default = noop;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5SpMp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "keys", ()=>keys
);
var keys = Object.keys;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2Q0lT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getPropertyByPath(object, path) {
    var parts = Array.isArray(path) ? path : path.split('.');
    return parts.reduce(function(current, key) {
        return current && current[key];
    }, object);
}
exports.default = getPropertyByPath;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cIivc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _typeof(obj1) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj1);
}
/**
 * This implementation is taken from Lodash implementation.
 * See: https://github.com/lodash/lodash/blob/master/isPlainObject.js
 */ function getTag(value) {
    if (value === null) return value === undefined ? '[object Undefined]' : '[object Null]';
    return Object.prototype.toString.call(value);
}
function isObjectLike(value) {
    return _typeof(value) === 'object' && value !== null;
}
/**
 * Checks if `value` is a plain object.
 *
 * A plain object is an object created by the `Object`
 * constructor or with a `[[Prototype]]` of `null`.
 */ function isPlainObject(value) {
    if (!isObjectLike(value) || getTag(value) !== '[object Object]') return false;
    if (Object.getPrototypeOf(value) === null) return true;
    var proto = value;
    while(Object.getPrototypeOf(proto) !== null)proto = Object.getPrototypeOf(proto);
    return Object.getPrototypeOf(value) === proto;
}
exports.default = isPlainObject;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1dHGc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function range(_ref) {
    var _ref$start = _ref.start, start = _ref$start === void 0 ? 0 : _ref$start, end = _ref.end, _ref$step = _ref.step, step = _ref$step === void 0 ? 1 : _ref$step;
    // We can't divide by 0 so we re-assign the step to 1 if it happens.
    var limitStep = step === 0 ? 1 : step; // In some cases the array to create has a decimal length.
    // We therefore need to round the value.
    // Example:
    //   { start: 1, end: 5000, step: 500 }
    //   => Array length = (5000 - 1) / 500 = 9.998
    var arrayLength = Math.round((end - start) / limitStep);
    return _toConsumableArray(Array(arrayLength)).map(function(_, current) {
        return start + current * limitStep;
    });
}
exports.default = range;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"14V8N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function isPrimitive(obj) {
    return obj !== Object(obj);
}
function isEqual(first, second) {
    if (first === second) return true;
    if (isPrimitive(first) || isPrimitive(second) || typeof first === 'function' || typeof second === 'function') return first === second;
    if (Object.keys(first).length !== Object.keys(second).length) return false;
    for(var _i = 0, _Object$keys = Object.keys(first); _i < _Object$keys.length; _i++){
        var key = _Object$keys[_i];
        if (!(key in second)) return false;
        if (!isEqual(first[key], second[key])) return false;
    }
    return true;
}
exports.default = isEqual;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eLn1u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * This implementation is taken from Lodash implementation.
 * See: https://github.com/lodash/lodash/blob/4.17.11-npm/escape.js
 */ // Used to map characters to HTML entities.
var htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
}; // Used to match HTML entities and HTML characters.
var regexUnescapedHtml = /[&<>"']/g;
var regexHasUnescapedHtml = RegExp(regexUnescapedHtml.source);
/**
 * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
 * corresponding HTML entities.
 */ function escape(value) {
    return value && regexHasUnescapedHtml.test(value) ? value.replace(regexUnescapedHtml, function(character) {
        return htmlEscapes[character];
    }) : value;
}
exports.default = escape;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cWsJ0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * This implementation is taken from Lodash implementation.
 * See: https://github.com/lodash/lodash/blob/4.17.11-npm/unescape.js
 */ // Used to map HTML entities to characters.
var htmlEscapes = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'"
}; // Used to match HTML entities and HTML characters.
var regexEscapedHtml = /&(amp|quot|lt|gt|#39);/g;
var regexHasEscapedHtml = RegExp(regexEscapedHtml.source);
function unescape(value) {
    return value && regexHasEscapedHtml.test(value) ? value.replace(regexEscapedHtml, function(character) {
        return htmlEscapes[character];
    }) : value;
}
exports.default = unescape;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"12qh7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _escapeHighlightJs = require("./escape-highlight.js");
function concatHighlightedParts(parts) {
    var highlightPreTag = _escapeHighlightJs.TAG_REPLACEMENT.highlightPreTag, highlightPostTag = _escapeHighlightJs.TAG_REPLACEMENT.highlightPostTag;
    return parts.map(function(part) {
        return part.isHighlighted ? highlightPreTag + part.value + highlightPostTag : part.value;
    }).join('');
}
exports.default = concatHighlightedParts;

},{"./escape-highlight.js":"59mW0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"59mW0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TAG_PLACEHOLDER", ()=>TAG_PLACEHOLDER
);
parcelHelpers.export(exports, "TAG_REPLACEMENT", ()=>TAG_REPLACEMENT
);
parcelHelpers.export(exports, "escapeHits", ()=>escapeHits
);
parcelHelpers.export(exports, "escapeFacets", ()=>escapeFacets
);
var _escapeJs = require("./escape.js");
var _escapeJsDefault = parcelHelpers.interopDefault(_escapeJs);
var _isPlainObjectJs = require("./isPlainObject.js");
var _isPlainObjectJsDefault = parcelHelpers.interopDefault(_isPlainObjectJs);
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var TAG_PLACEHOLDER = {
    highlightPreTag: '__ais-highlight__',
    highlightPostTag: '__/ais-highlight__'
};
var TAG_REPLACEMENT = {
    highlightPreTag: '<mark>',
    highlightPostTag: '</mark>'
};
function replaceTagsAndEscape(value) {
    return _escapeJsDefault.default(value).replace(new RegExp(TAG_PLACEHOLDER.highlightPreTag, 'g'), TAG_REPLACEMENT.highlightPreTag).replace(new RegExp(TAG_PLACEHOLDER.highlightPostTag, 'g'), TAG_REPLACEMENT.highlightPostTag);
}
function recursiveEscape(input) {
    if (_isPlainObjectJsDefault.default(input) && typeof input.value !== 'string') return Object.keys(input).reduce(function(acc, key) {
        return _objectSpread(_objectSpread({
        }, acc), {
        }, _defineProperty({
        }, key, recursiveEscape(input[key])));
    }, {
    });
    if (Array.isArray(input)) return input.map(recursiveEscape);
    return _objectSpread(_objectSpread({
    }, input), {
    }, {
        value: replaceTagsAndEscape(input.value)
    });
}
function escapeHits(hits) {
    if (hits.__escaped === undefined) {
        // We don't override the value on hit because it will mutate the raw results
        // instead we make a shallow copy and we assign the escaped values on it.
        hits = hits.map(function(_ref) {
            var hit = _extends({
            }, _ref);
            if (hit._highlightResult) hit._highlightResult = recursiveEscape(hit._highlightResult);
            if (hit._snippetResult) hit._snippetResult = recursiveEscape(hit._snippetResult);
            return hit;
        });
        hits.__escaped = true;
    }
    return hits;
}
function escapeFacets(facetHits) {
    return facetHits.map(function(h) {
        return _objectSpread(_objectSpread({
        }, h), {
        }, {
            highlighted: replaceTagsAndEscape(h.highlighted)
        });
    });
}

},{"./escape.js":"eLn1u","./isPlainObject.js":"cIivc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7jCC9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _escapeHighlightJs = require("./escape-highlight.js");
function getHighlightedParts(highlightedValue) {
    var highlightPostTag = _escapeHighlightJs.TAG_REPLACEMENT.highlightPostTag, highlightPreTag = _escapeHighlightJs.TAG_REPLACEMENT.highlightPreTag;
    var splitByPreTag = highlightedValue.split(highlightPreTag);
    var firstValue = splitByPreTag.shift();
    var elements = !firstValue ? [] : [
        {
            value: firstValue,
            isHighlighted: false
        }
    ];
    splitByPreTag.forEach(function(split) {
        var splitByPostTag = split.split(highlightPostTag);
        elements.push({
            value: splitByPostTag[0],
            isHighlighted: true
        });
        if (splitByPostTag[1] !== '') elements.push({
            value: splitByPostTag[1],
            isHighlighted: false
        });
    });
    return elements;
}
exports.default = getHighlightedParts;

},{"./escape-highlight.js":"59mW0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fAPc5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _unescapeJs = require("./unescape.js");
var _unescapeJsDefault = parcelHelpers.interopDefault(_unescapeJs);
var hasAlphanumeric = new RegExp(/\w/i);
function getHighlightFromSiblings(parts, i) {
    var _parts, _parts2;
    var current = parts[i];
    var isNextHighlighted = ((_parts = parts[i + 1]) === null || _parts === void 0 ? void 0 : _parts.isHighlighted) || true;
    var isPreviousHighlighted = ((_parts2 = parts[i - 1]) === null || _parts2 === void 0 ? void 0 : _parts2.isHighlighted) || true;
    if (!hasAlphanumeric.test(_unescapeJsDefault.default(current.value)) && isPreviousHighlighted === isNextHighlighted) return isPreviousHighlighted;
    return current.isHighlighted;
}
exports.default = getHighlightFromSiblings;

},{"./unescape.js":"cWsJ0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kBcoN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getHighlightFromSiblingsJs = require("./getHighlightFromSiblings.js");
var _getHighlightFromSiblingsJsDefault = parcelHelpers.interopDefault(_getHighlightFromSiblingsJs);
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function reverseHighlightedParts(parts) {
    if (!parts.some(function(part) {
        return part.isHighlighted;
    })) return parts.map(function(part) {
        return _objectSpread(_objectSpread({
        }, part), {
        }, {
            isHighlighted: false
        });
    });
    return parts.map(function(part, i) {
        return _objectSpread(_objectSpread({
        }, part), {
        }, {
            isHighlighted: !_getHighlightFromSiblingsJsDefault.default(parts, i)
        });
    });
}
exports.default = reverseHighlightedParts;

},{"./getHighlightFromSiblings.js":"fAPc5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6Dhef":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// We aren't using the native `Array.prototype.find` because the refactor away from Lodash is not
// published as a major version.
// Relying on the `find` polyfill on user-land, which before was only required for niche use-cases,
// was decided as too risky.
// @MAJOR Replace with the native `Array.prototype.find` method
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
function find(items, predicate) {
    var value;
    for(var i = 0; i < items.length; i++){
        value = items[i]; // inlined for performance: if (Call(predicate, thisArg, [value, i, list])) {
        if (predicate(value, i, items)) return value;
    }
    return undefined;
}
exports.default = find;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8tlAy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// We aren't using the native `Array.prototype.findIndex` because the refactor away from Lodash is not
// published as a major version.
// Relying on the `findIndex` polyfill on user-land, which before was only required for niche use-cases,
// was decided as too risky.
// @MAJOR Replace with the native `Array.prototype.findIndex` method
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
function findIndex(array, comparator) {
    if (!Array.isArray(array)) return -1;
    for(var i = 0; i < array.length; i++){
        if (comparator(array[i])) return i;
    }
    return -1;
}
exports.default = findIndex;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Li6L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _findIndexJs = require("./findIndex.js");
var _findIndexJsDefault = parcelHelpers.interopDefault(_findIndexJs);
var _uniqJs = require("./uniq.js");
var _uniqJsDefault = parcelHelpers.interopDefault(_uniqJs);
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {
    };
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {
    };
    var target = {
    };
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var mergeWithRest = function mergeWithRest(left, right) {
    var facets = right.facets, disjunctiveFacets = right.disjunctiveFacets, facetsRefinements = right.facetsRefinements, facetsExcludes = right.facetsExcludes, disjunctiveFacetsRefinements = right.disjunctiveFacetsRefinements, numericRefinements = right.numericRefinements, tagRefinements = right.tagRefinements, hierarchicalFacets = right.hierarchicalFacets, hierarchicalFacetsRefinements = right.hierarchicalFacetsRefinements, ruleContexts = right.ruleContexts, rest = _objectWithoutProperties(right, [
        "facets",
        "disjunctiveFacets",
        "facetsRefinements",
        "facetsExcludes",
        "disjunctiveFacetsRefinements",
        "numericRefinements",
        "tagRefinements",
        "hierarchicalFacets",
        "hierarchicalFacetsRefinements",
        "ruleContexts"
    ]);
    return left.setQueryParameters(rest);
}; // Merge facets
var mergeFacets = function mergeFacets(left, right) {
    return right.facets.reduce(function(_, name) {
        return _.addFacet(name);
    }, left);
};
var mergeDisjunctiveFacets = function mergeDisjunctiveFacets(left, right) {
    return right.disjunctiveFacets.reduce(function(_, name) {
        return _.addDisjunctiveFacet(name);
    }, left);
};
var mergeHierarchicalFacets = function mergeHierarchicalFacets(left, right) {
    return left.setQueryParameters({
        hierarchicalFacets: right.hierarchicalFacets.reduce(function(facets, facet) {
            var index = _findIndexJsDefault.default(facets, function(_) {
                return _.name === facet.name;
            });
            if (index === -1) return facets.concat(facet);
            var nextFacets = facets.slice();
            nextFacets.splice(index, 1, facet);
            return nextFacets;
        }, left.hierarchicalFacets)
    });
}; // Merge facet refinements
var mergeTagRefinements = function mergeTagRefinements(left, right) {
    return right.tagRefinements.reduce(function(_, value) {
        return _.addTagRefinement(value);
    }, left);
};
var mergeFacetRefinements = function mergeFacetRefinements(left, right) {
    return left.setQueryParameters({
        facetsRefinements: _objectSpread(_objectSpread({
        }, left.facetsRefinements), right.facetsRefinements)
    });
};
var mergeFacetsExcludes = function mergeFacetsExcludes(left, right) {
    return left.setQueryParameters({
        facetsExcludes: _objectSpread(_objectSpread({
        }, left.facetsExcludes), right.facetsExcludes)
    });
};
var mergeDisjunctiveFacetsRefinements = function mergeDisjunctiveFacetsRefinements(left, right) {
    return left.setQueryParameters({
        disjunctiveFacetsRefinements: _objectSpread(_objectSpread({
        }, left.disjunctiveFacetsRefinements), right.disjunctiveFacetsRefinements)
    });
};
var mergeNumericRefinements = function mergeNumericRefinements(left, right) {
    return left.setQueryParameters({
        numericRefinements: _objectSpread(_objectSpread({
        }, left.numericRefinements), right.numericRefinements)
    });
};
var mergeHierarchicalFacetsRefinements = function mergeHierarchicalFacetsRefinements(left, right) {
    return left.setQueryParameters({
        hierarchicalFacetsRefinements: _objectSpread(_objectSpread({
        }, left.hierarchicalFacetsRefinements), right.hierarchicalFacetsRefinements)
    });
};
var mergeRuleContexts = function mergeRuleContexts(left, right) {
    var ruleContexts = _uniqJsDefault.default([].concat(left.ruleContexts).concat(right.ruleContexts).filter(Boolean));
    if (ruleContexts.length > 0) return left.setQueryParameters({
        ruleContexts: ruleContexts
    });
    return left;
};
var merge = function merge() {
    for(var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++)parameters[_key] = arguments[_key];
    return parameters.reduce(function(left, right) {
        var hierarchicalFacetsRefinementsMerged = mergeHierarchicalFacetsRefinements(left, right);
        var hierarchicalFacetsMerged = mergeHierarchicalFacets(hierarchicalFacetsRefinementsMerged, right);
        var tagRefinementsMerged = mergeTagRefinements(hierarchicalFacetsMerged, right);
        var numericRefinementsMerged = mergeNumericRefinements(tagRefinementsMerged, right);
        var disjunctiveFacetsRefinementsMerged = mergeDisjunctiveFacetsRefinements(numericRefinementsMerged, right);
        var facetsExcludesMerged = mergeFacetsExcludes(disjunctiveFacetsRefinementsMerged, right);
        var facetRefinementsMerged = mergeFacetRefinements(facetsExcludesMerged, right);
        var disjunctiveFacetsMerged = mergeDisjunctiveFacets(facetRefinementsMerged, right);
        var ruleContextsMerged = mergeRuleContexts(disjunctiveFacetsMerged, right);
        var facetsMerged = mergeFacets(ruleContextsMerged, right);
        return mergeWithRest(facetsMerged, right);
    });
};
exports.default = merge;

},{"./findIndex.js":"8tlAy","./uniq.js":"2Q0ce","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a7lVI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var resolveSearchParameters = function resolveSearchParameters(current) {
    var parent = current.getParent();
    var states = [
        current.getHelper().state
    ];
    while(parent !== null){
        states = [
            parent.getHelper().state
        ].concat(states);
        parent = parent.getParent();
    }
    return states;
};
exports.default = resolveSearchParameters;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gLqHy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createDocumentationLink", ()=>createDocumentationLink
);
parcelHelpers.export(exports, "createDocumentationMessageGenerator", ()=>createDocumentationMessageGenerator
);
var createDocumentationLink = function createDocumentationLink(_ref) {
    var name = _ref.name, _ref$connector = _ref.connector, connector = _ref$connector === void 0 ? false : _ref$connector;
    return [
        'https://www.algolia.com/doc/api-reference/widgets/',
        name,
        '/js/',
        connector ? '#connector' : ''
    ].join('');
};
var createDocumentationMessageGenerator = function createDocumentationMessageGenerator() {
    for(var _len = arguments.length, widgets = new Array(_len), _key = 0; _key < _len; _key++)widgets[_key] = arguments[_key];
    var links = widgets.map(function(widget) {
        return createDocumentationLink(widget);
    }).join(', ');
    return function(message) {
        return [
            message,
            "See documentation: ".concat(links)
        ].filter(Boolean).join('\n\n');
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dMQpP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addAbsolutePosition", ()=>addAbsolutePosition
);
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function addAbsolutePosition(hits, page, hitsPerPage) {
    return hits.map(function(hit, idx) {
        return _objectSpread(_objectSpread({
        }, hit), {
        }, {
            __position: hitsPerPage * page + idx + 1
        });
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iBpEo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addQueryID", ()=>addQueryID
);
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function addQueryID(hits, queryID) {
    if (!queryID) return hits;
    return hits.map(function(hit) {
        return _objectSpread(_objectSpread({
        }, hit), {
        }, {
            __queryID: queryID
        });
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b5SV4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function isFacetRefined(helper, facet, value) {
    if (helper.state.isHierarchicalFacet(facet)) return helper.state.isHierarchicalFacetRefined(facet, value);
    else if (helper.state.isConjunctiveFacet(facet)) return helper.state.isFacetRefined(facet, value);
    else return helper.state.isDisjunctiveFacetRefined(facet, value);
}
exports.default = isFacetRefined;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"05go2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createSendEventForFacet", ()=>createSendEventForFacet
);
var _isFacetRefinedJs = require("./isFacetRefined.js");
var _isFacetRefinedJsDefault = parcelHelpers.interopDefault(_isFacetRefinedJs);
function _typeof(obj1) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj1);
}
function createSendEventForFacet(_ref) {
    var instantSearchInstance = _ref.instantSearchInstance, helper = _ref.helper, attribute = _ref.attribute, widgetType = _ref.widgetType;
    var sendEventForFacet = function sendEventForFacet() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        var eventType = args[0], facetValue = args[1], _args$ = args[2], eventName = _args$ === void 0 ? 'Filter Applied' : _args$;
        if (args.length === 1 && _typeof(args[0]) === 'object') instantSearchInstance.sendEventToInsights(args[0]);
        else if (eventType === 'click' && (args.length === 2 || args.length === 3)) {
            if (!_isFacetRefinedJsDefault.default(helper, attribute, facetValue)) // send event only when the facet is being checked "ON"
            instantSearchInstance.sendEventToInsights({
                insightsMethod: 'clickedFilters',
                widgetType: widgetType,
                eventType: eventType,
                payload: {
                    eventName: eventName,
                    index: helper.getIndex(),
                    filters: [
                        "".concat(attribute, ":").concat(facetValue)
                    ]
                },
                attribute: attribute
            });
        } else throw new Error("You need to pass two arguments like:\n  sendEvent('click', facetValue);\n\nIf you want to send a custom payload, you can pass one object: sendEvent(customPayload);\n");
    };
    return sendEventForFacet;
}

},{"./isFacetRefined.js":"b5SV4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"24sIF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createSendEventForHits", ()=>createSendEventForHits
);
parcelHelpers.export(exports, "createBindEventForHits", ()=>createBindEventForHits
);
var _serializerJs = require("./serializer.js");
function _typeof(obj1) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj1);
}
function chunk(arr) {
    var chunkSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
    var chunks = [];
    for(var i = 0; i < Math.ceil(arr.length / chunkSize); i++)chunks.push(arr.slice(i * chunkSize, (i + 1) * chunkSize));
    return chunks;
}
var buildPayloads = function buildPayloads(_ref) {
    var index = _ref.index, widgetType = _ref.widgetType, methodName = _ref.methodName, args = _ref.args;
    // when there's only one argument, that means it's custom
    if (args.length === 1 && _typeof(args[0]) === 'object') return [
        args[0]
    ];
    var eventType = args[0];
    var hits = args[1];
    var eventName = args[2];
    if (!hits) throw new Error("You need to pass hit or hits as the second argument like:\n  ".concat(methodName, "(eventType, hit);\n  "));
    if ((eventType === 'click' || eventType === 'conversion') && !eventName) throw new Error("You need to pass eventName as the third argument for 'click' or 'conversion' events like:\n  ".concat(methodName, "('click', hit, 'Product Purchased');\n\n  To learn more about event naming: https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/click-through-and-conversions/in-depth/clicks-conversions-best-practices/\n  "));
    var hitsArray = Array.isArray(hits) ? removeEscapedFromHits(hits) : [
        hits
    ];
    if (hitsArray.length === 0) return [];
    var queryID = hitsArray[0].__queryID;
    var hitsChunks = chunk(hitsArray);
    var objectIDsByChunk = hitsChunks.map(function(batch) {
        return batch.map(function(hit) {
            return hit.objectID;
        });
    });
    var positionsByChunk = hitsChunks.map(function(batch) {
        return batch.map(function(hit) {
            return hit.__position;
        });
    });
    if (eventType === 'view') return hitsChunks.map(function(batch, i) {
        return {
            insightsMethod: 'viewedObjectIDs',
            widgetType: widgetType,
            eventType: eventType,
            payload: {
                eventName: eventName || 'Hits Viewed',
                index: index,
                objectIDs: objectIDsByChunk[i]
            },
            hits: batch
        };
    });
    else if (eventType === 'click') return hitsChunks.map(function(batch, i) {
        return {
            insightsMethod: 'clickedObjectIDsAfterSearch',
            widgetType: widgetType,
            eventType: eventType,
            payload: {
                eventName: eventName,
                index: index,
                queryID: queryID,
                objectIDs: objectIDsByChunk[i],
                positions: positionsByChunk[i]
            },
            hits: batch
        };
    });
    else if (eventType === 'conversion') return hitsChunks.map(function(batch, i) {
        return {
            insightsMethod: 'convertedObjectIDsAfterSearch',
            widgetType: widgetType,
            eventType: eventType,
            payload: {
                eventName: eventName,
                index: index,
                queryID: queryID,
                objectIDs: objectIDsByChunk[i]
            },
            hits: batch
        };
    });
    else throw new Error("eventType(\"".concat(eventType, "\") is not supported.\n    If you want to send a custom payload, you can pass one object: ").concat(methodName, "(customPayload);\n    "));
};
function removeEscapedFromHits(hits) {
    // remove `hits.__escaped` without mutating
    return hits.slice();
}
function createSendEventForHits(_ref2) {
    var instantSearchInstance = _ref2.instantSearchInstance, index = _ref2.index, widgetType = _ref2.widgetType;
    var sendEventForHits = function sendEventForHits() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        var payloads = buildPayloads({
            widgetType: widgetType,
            index: index,
            methodName: 'sendEvent',
            args: args
        });
        payloads.forEach(function(payload) {
            return instantSearchInstance.sendEventToInsights(payload);
        });
    };
    return sendEventForHits;
}
function createBindEventForHits(_ref3) {
    var index = _ref3.index, widgetType = _ref3.widgetType;
    var bindEventForHits = function bindEventForHits() {
        for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)args[_key2] = arguments[_key2];
        var payloads = buildPayloads({
            widgetType: widgetType,
            index: index,
            methodName: 'bindEvent',
            args: args
        });
        return payloads.length ? "data-insights-event=".concat(_serializerJs.serializePayload(payloads)) : '';
    };
    return bindEventForHits;
}

},{"./serializer.js":"jg61H","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jg61H":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "serializePayload", ()=>serializePayload
);
parcelHelpers.export(exports, "deserializePayload", ()=>deserializePayload
);
function serializePayload(payload) {
    return btoa(encodeURIComponent(JSON.stringify(payload)));
}
function deserializePayload(serialized) {
    return JSON.parse(decodeURIComponent(atob(serialized)));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7XKtv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// typed as any, since it accepts the _real_ js clients, not the interface we otherwise expect
parcelHelpers.export(exports, "getAppIdAndApiKey", ()=>getAppIdAndApiKey
);
function getAppIdAndApiKey(searchClient) {
    if (searchClient.transporter) {
        // searchClient v4
        var _searchClient$transpo = searchClient.transporter, headers = _searchClient$transpo.headers, queryParameters = _searchClient$transpo.queryParameters;
        var APP_ID = 'x-algolia-application-id';
        var API_KEY = 'x-algolia-api-key';
        var appId = headers[APP_ID] || queryParameters[APP_ID];
        var apiKey = headers[API_KEY] || queryParameters[API_KEY];
        return [
            appId,
            apiKey
        ];
    } else // searchClient v3
    return [
        searchClient.applicationID,
        searchClient.apiKey
    ];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lGWeY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getWidgetAttribute", ()=>getWidgetAttribute
);
function getWidgetAttribute(widget, initOptions) {
    var _widget$getWidgetRend;
    var renderState = (_widget$getWidgetRend = widget.getWidgetRenderState) === null || _widget$getWidgetRend === void 0 ? void 0 : _widget$getWidgetRend.call(widget, initOptions);
    var attribute = null;
    if (renderState && renderState.widgetParams) {
        // casting as widgetParams is checked just before
        var widgetParams = renderState.widgetParams;
        if (widgetParams.attribute) attribute = widgetParams.attribute;
        else if (Array.isArray(widgetParams.attributes)) attribute = widgetParams.attributes[0];
    }
    if (typeof attribute !== 'string') throw new Error("Could not find the attribute of the widget:\n\n".concat(JSON.stringify(widget), "\n\nPlease check whether the widget's getWidgetRenderState returns widgetParams.attribute correctly."));
    return attribute;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Ntti":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// eslint-disable-next-line no-restricted-globals
/**
 * Runs code on browser enviromnents safely.
 */ parcelHelpers.export(exports, "safelyRunOnBrowser", ()=>safelyRunOnBrowser
);
function safelyRunOnBrowser(callback) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        fallback: function fallback() {
            return undefined;
        }
    }, fallback = _ref.fallback;
    // eslint-disable-next-line no-restricted-globals
    if (typeof window === 'undefined') return fallback();
     // eslint-disable-next-line no-restricted-globals
    return callback({
        window: window
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hkkLK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = '4.37.2';

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8IHo3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../helpers/index.js");
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function hoganHelpers(_ref) {
    var numberLocale = _ref.numberLocale;
    return {
        formatNumber: function formatNumber(value, render) {
            return Number(render(value)).toLocaleString(numberLocale);
        },
        highlight: function highlight(options, render) {
            try {
                var highlightOptions = JSON.parse(options);
                return render(_indexJs.highlight(_objectSpread(_objectSpread({
                }, highlightOptions), {
                }, {
                    hit: this
                })));
            } catch (error) {
                throw new Error("\nThe highlight helper expects a JSON object of the format:\n{ \"attribute\": \"name\", \"highlightedTagName\": \"mark\" }");
            }
        },
        reverseHighlight: function reverseHighlight(options, render) {
            try {
                var reverseHighlightOptions = JSON.parse(options);
                return render(_indexJs.reverseHighlight(_objectSpread(_objectSpread({
                }, reverseHighlightOptions), {
                }, {
                    hit: this
                })));
            } catch (error) {
                throw new Error("\n  The reverseHighlight helper expects a JSON object of the format:\n  { \"attribute\": \"name\", \"highlightedTagName\": \"mark\" }");
            }
        },
        snippet: function snippet(options, render) {
            try {
                var snippetOptions = JSON.parse(options);
                return render(_indexJs.snippet(_objectSpread(_objectSpread({
                }, snippetOptions), {
                }, {
                    hit: this
                })));
            } catch (error) {
                throw new Error("\nThe snippet helper expects a JSON object of the format:\n{ \"attribute\": \"name\", \"highlightedTagName\": \"mark\" }");
            }
        },
        reverseSnippet: function reverseSnippet(options, render) {
            try {
                var reverseSnippetOptions = JSON.parse(options);
                return render(_indexJs.reverseSnippet(_objectSpread(_objectSpread({
                }, reverseSnippetOptions), {
                }, {
                    hit: this
                })));
            } catch (error) {
                throw new Error("\n  The reverseSnippet helper expects a JSON object of the format:\n  { \"attribute\": \"name\", \"highlightedTagName\": \"mark\" }");
            }
        },
        insights: function insights(options, render) {
            try {
                var _JSON$parse = JSON.parse(options), method = _JSON$parse.method, payload = _JSON$parse.payload;
                return render(_indexJs.insights(method, _objectSpread({
                    objectIDs: [
                        this.objectID
                    ]
                }, payload)));
            } catch (error) {
                throw new Error("\nThe insights helper expects a JSON object of the format:\n{ \"method\": \"method-name\", \"payload\": { \"eventName\": \"name of the event\" } }");
            }
        }
    };
}
exports.default = hoganHelpers;

},{"../helpers/index.js":"8kgzi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8kgzi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "reverseHighlight", ()=>_reverseHighlightJsDefault.default
);
parcelHelpers.export(exports, "reverseSnippet", ()=>_reverseSnippetJsDefault.default
);
parcelHelpers.export(exports, "highlight", ()=>_highlightJsDefault.default
);
parcelHelpers.export(exports, "snippet", ()=>_snippetJsDefault.default
);
parcelHelpers.export(exports, "insights", ()=>_insightsJsDefault.default
);
parcelHelpers.export(exports, "getInsightsAnonymousUserToken", ()=>_getInsightsAnonymousUserTokenJsDefault.default
);
parcelHelpers.export(exports, "getInsightsAnonymousUserTokenInternal", ()=>_getInsightsAnonymousUserTokenJs.getInsightsAnonymousUserTokenInternal
);
var _highlightJs = require("./highlight.js");
parcelHelpers.exportAll(_highlightJs, exports);
var _reverseHighlightJs = require("./reverseHighlight.js");
parcelHelpers.exportAll(_reverseHighlightJs, exports);
var _snippetJs = require("./snippet.js");
parcelHelpers.exportAll(_snippetJs, exports);
var _reverseSnippetJs = require("./reverseSnippet.js");
parcelHelpers.exportAll(_reverseSnippetJs, exports);
var _reverseHighlightJsDefault = parcelHelpers.interopDefault(_reverseHighlightJs);
var _reverseSnippetJsDefault = parcelHelpers.interopDefault(_reverseSnippetJs);
var _highlightJsDefault = parcelHelpers.interopDefault(_highlightJs);
var _snippetJsDefault = parcelHelpers.interopDefault(_snippetJs);
var _insightsJs = require("./insights.js");
var _insightsJsDefault = parcelHelpers.interopDefault(_insightsJs);
var _getInsightsAnonymousUserTokenJs = require("./get-insights-anonymous-user-token.js");
var _getInsightsAnonymousUserTokenJsDefault = parcelHelpers.interopDefault(_getInsightsAnonymousUserTokenJs);

},{"./highlight.js":"juTzj","./reverseHighlight.js":"258GF","./snippet.js":"lMCRi","./reverseSnippet.js":"5cYoY","./insights.js":"2EZr9","./get-insights-anonymous-user-token.js":"cRBQf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"juTzj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _suitJs = require("../lib/suit.js");
var _indexJs = require("../lib/utils/index.js");
var suit = _suitJs.component('Highlight');
function highlight(_ref) {
    var attribute = _ref.attribute, _ref$highlightedTagNa = _ref.highlightedTagName, highlightedTagName = _ref$highlightedTagNa === void 0 ? 'mark' : _ref$highlightedTagNa, hit = _ref.hit, _ref$cssClasses = _ref.cssClasses, cssClasses = _ref$cssClasses === void 0 ? {
    } : _ref$cssClasses;
    var _ref2 = _indexJs.getPropertyByPath(hit._highlightResult, attribute) || {
    }, _ref2$value = _ref2.value, attributeValue = _ref2$value === void 0 ? '' : _ref2$value; // cx is not used, since it would be bundled as a dependency for Vue & Angular
    var className = suit({
        descendantName: 'highlighted'
    }) + (cssClasses.highlighted ? " ".concat(cssClasses.highlighted) : '');
    return attributeValue.replace(new RegExp(_indexJs.TAG_REPLACEMENT.highlightPreTag, 'g'), "<".concat(highlightedTagName, " class=\"").concat(className, "\">")).replace(new RegExp(_indexJs.TAG_REPLACEMENT.highlightPostTag, 'g'), "</".concat(highlightedTagName, ">"));
}
exports.default = highlight;

},{"../lib/suit.js":"du81D","../lib/utils/index.js":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"du81D":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "component", ()=>component
);
var NAMESPACE = 'ais';
var component = function component(componentName) {
    return function() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        }, descendantName = _ref.descendantName, modifierName = _ref.modifierName;
        var descendent = descendantName ? "-".concat(descendantName) : '';
        var modifier = modifierName ? "--".concat(modifierName) : '';
        return "".concat(NAMESPACE, "-").concat(componentName).concat(descendent).concat(modifier);
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"258GF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../lib/utils/index.js");
var _suitJs = require("../lib/suit.js");
var suit = _suitJs.component('ReverseHighlight');
function reverseHighlight(_ref) {
    var attribute = _ref.attribute, _ref$highlightedTagNa = _ref.highlightedTagName, highlightedTagName = _ref$highlightedTagNa === void 0 ? 'mark' : _ref$highlightedTagNa, hit = _ref.hit, _ref$cssClasses = _ref.cssClasses, cssClasses = _ref$cssClasses === void 0 ? {
    } : _ref$cssClasses;
    var _ref2 = _indexJs.getPropertyByPath(hit._highlightResult, attribute) || {
    }, _ref2$value = _ref2.value, attributeValue = _ref2$value === void 0 ? '' : _ref2$value; // cx is not used, since it would be bundled as a dependency for Vue & Angular
    var className = suit({
        descendantName: 'highlighted'
    }) + (cssClasses.highlighted ? " ".concat(cssClasses.highlighted) : '');
    var reverseHighlightedValue = _indexJs.concatHighlightedParts(_indexJs.reverseHighlightedParts(_indexJs.getHighlightedParts(attributeValue)));
    return reverseHighlightedValue.replace(new RegExp(_indexJs.TAG_REPLACEMENT.highlightPreTag, 'g'), "<".concat(highlightedTagName, " class=\"").concat(className, "\">")).replace(new RegExp(_indexJs.TAG_REPLACEMENT.highlightPostTag, 'g'), "</".concat(highlightedTagName, ">"));
}
exports.default = reverseHighlight;

},{"../lib/utils/index.js":"etVYs","../lib/suit.js":"du81D","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lMCRi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _suitJs = require("../lib/suit.js");
var _indexJs = require("../lib/utils/index.js");
var suit = _suitJs.component('Snippet');
function snippet(_ref) {
    var attribute = _ref.attribute, _ref$highlightedTagNa = _ref.highlightedTagName, highlightedTagName = _ref$highlightedTagNa === void 0 ? 'mark' : _ref$highlightedTagNa, hit = _ref.hit, _ref$cssClasses = _ref.cssClasses, cssClasses = _ref$cssClasses === void 0 ? {
    } : _ref$cssClasses;
    var _ref2 = _indexJs.getPropertyByPath(hit._snippetResult, attribute) || {
    }, _ref2$value = _ref2.value, attributeValue = _ref2$value === void 0 ? '' : _ref2$value; // cx is not used, since it would be bundled as a dependency for Vue & Angular
    var className = suit({
        descendantName: 'highlighted'
    }) + (cssClasses.highlighted ? " ".concat(cssClasses.highlighted) : '');
    return attributeValue.replace(new RegExp(_indexJs.TAG_REPLACEMENT.highlightPreTag, 'g'), "<".concat(highlightedTagName, " class=\"").concat(className, "\">")).replace(new RegExp(_indexJs.TAG_REPLACEMENT.highlightPostTag, 'g'), "</".concat(highlightedTagName, ">"));
}
exports.default = snippet;

},{"../lib/suit.js":"du81D","../lib/utils/index.js":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5cYoY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../lib/utils/index.js");
var _suitJs = require("../lib/suit.js");
var suit = _suitJs.component('ReverseSnippet');
function reverseSnippet(_ref) {
    var attribute = _ref.attribute, _ref$highlightedTagNa = _ref.highlightedTagName, highlightedTagName = _ref$highlightedTagNa === void 0 ? 'mark' : _ref$highlightedTagNa, hit = _ref.hit, _ref$cssClasses = _ref.cssClasses, cssClasses = _ref$cssClasses === void 0 ? {
    } : _ref$cssClasses;
    var _ref2 = _indexJs.getPropertyByPath(hit._snippetResult, attribute) || {
    }, _ref2$value = _ref2.value, attributeValue = _ref2$value === void 0 ? '' : _ref2$value; // cx is not used, since it would be bundled as a dependency for Vue & Angular
    var className = suit({
        descendantName: 'highlighted'
    }) + (cssClasses.highlighted ? " ".concat(cssClasses.highlighted) : '');
    var reverseHighlightedValue = _indexJs.concatHighlightedParts(_indexJs.reverseHighlightedParts(_indexJs.getHighlightedParts(attributeValue)));
    return reverseHighlightedValue.replace(new RegExp(_indexJs.TAG_REPLACEMENT.highlightPreTag, 'g'), "<".concat(highlightedTagName, " class=\"").concat(className, "\">")).replace(new RegExp(_indexJs.TAG_REPLACEMENT.highlightPostTag, 'g'), "</".concat(highlightedTagName, ">"));
}
exports.default = reverseSnippet;

},{"../lib/utils/index.js":"etVYs","../lib/suit.js":"du81D","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2EZr9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "readDataAttributes", ()=>readDataAttributes
);
parcelHelpers.export(exports, "hasDataAttributes", ()=>hasDataAttributes
);
parcelHelpers.export(exports, "writeDataAttributes", ()=>writeDataAttributes
);
var _indexJs = require("../lib/utils/index.js");
function _typeof(obj1) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj1);
}
function readDataAttributes(domElement) {
    var method = domElement.getAttribute('data-insights-method');
    var serializedPayload = domElement.getAttribute('data-insights-payload');
    if (typeof serializedPayload !== 'string') throw new Error('The insights helper expects `data-insights-payload` to be a base64-encoded JSON string.');
    try {
        var payload = _indexJs.deserializePayload(serializedPayload);
        return {
            method: method,
            payload: payload
        };
    } catch (error) {
        throw new Error('The insights helper was unable to parse `data-insights-payload`.');
    }
}
function hasDataAttributes(domElement) {
    return domElement.hasAttribute('data-insights-method');
}
function writeDataAttributes(_ref) {
    var method = _ref.method, payload = _ref.payload;
    if (_typeof(payload) !== 'object') throw new Error("The insights helper expects the payload to be an object.");
    var serializedPayload;
    try {
        serializedPayload = _indexJs.serializePayload(payload);
    } catch (error) {
        throw new Error("Could not JSON serialize the payload object.");
    }
    return "data-insights-method=\"".concat(method, "\" data-insights-payload=\"").concat(serializedPayload, "\"");
}
function insights(method, payload) {
    _indexJs.warning(false, "`insights` function has been deprecated. It is still supported in 4.x releases, but not further. It is replaced by the `insights` middleware.\n\nFor more information, visit https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/click-through-and-conversions/how-to/send-click-and-conversion-events-with-instantsearch/js/");
    return writeDataAttributes({
        method: method,
        payload: payload
    });
}
exports.default = insights;

},{"../lib/utils/index.js":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cRBQf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ANONYMOUS_TOKEN_COOKIE_KEY", ()=>ANONYMOUS_TOKEN_COOKIE_KEY
);
parcelHelpers.export(exports, "getInsightsAnonymousUserTokenInternal", ()=>getInsightsAnonymousUserTokenInternal
);
var _indexJs = require("../lib/utils/index.js");
var ANONYMOUS_TOKEN_COOKIE_KEY = '_ALGOLIA';
function getCookie(name) {
    var prefix = "".concat(name, "=");
    var cookies = document.cookie.split(';');
    for(var i = 0; i < cookies.length; i++){
        var cookie = cookies[i];
        while(cookie.charAt(0) === ' ')cookie = cookie.substring(1);
        if (cookie.indexOf(prefix) === 0) return cookie.substring(prefix.length, cookie.length);
    }
    return undefined;
}
function getInsightsAnonymousUserTokenInternal() {
    return getCookie(ANONYMOUS_TOKEN_COOKIE_KEY);
}
function getInsightsAnonymousUserToken() {
    _indexJs.warning(false, "`getInsightsAnonymousUserToken` function has been deprecated. It is still supported in 4.x releases, but not further. It is replaced by the `insights` middleware.\n\nFor more information, visit https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/click-through-and-conversions/how-to/send-click-and-conversion-events-with-instantsearch/js/");
    return getInsightsAnonymousUserTokenInternal();
}
exports.default = getInsightsAnonymousUserToken;

},{"../lib/utils/index.js":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4mKEu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createRouterMiddleware", ()=>createRouterMiddleware
);
var _simpleJs = require("../lib/stateMappings/simple.js");
var _simpleJsDefault = parcelHelpers.interopDefault(_simpleJs);
var _historyJs = require("../lib/routers/history.js");
var _historyJsDefault = parcelHelpers.interopDefault(_historyJs);
var _indexJs = require("../lib/utils/index.js");
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var createRouterMiddleware = function createRouterMiddleware() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    };
    var _props$router = props.router, router = _props$router === void 0 ? _historyJsDefault.default() : _props$router, _props$stateMapping = props.stateMapping, stateMapping = _props$stateMapping === void 0 ? _simpleJsDefault.default() : _props$stateMapping;
    return function(_ref) {
        var instantSearchInstance = _ref.instantSearchInstance;
        function topLevelCreateURL(nextState) {
            var uiState = Object.keys(nextState).reduce(function(acc, indexId) {
                return _objectSpread(_objectSpread({
                }, acc), {
                }, _defineProperty({
                }, indexId, nextState[indexId]));
            }, instantSearchInstance.mainIndex.getWidgetUiState({
            }));
            var route = stateMapping.stateToRoute(uiState);
            return router.createURL(route);
        } // casting to UiState here to keep createURL unaware of custom UiState
        // (as long as it's an object, it's ok)
        instantSearchInstance._createURL = topLevelCreateURL;
        var lastRouteState = undefined;
        var initialUiState = instantSearchInstance._initialUiState;
        return {
            onStateChange: function onStateChange(_ref2) {
                var uiState = _ref2.uiState;
                var routeState = stateMapping.stateToRoute(uiState);
                if (lastRouteState === undefined || !_indexJs.isEqual(lastRouteState, routeState)) {
                    router.write(routeState);
                    lastRouteState = routeState;
                }
            },
            subscribe: function subscribe() {
                instantSearchInstance._initialUiState = _objectSpread(_objectSpread({
                }, initialUiState), stateMapping.routeToState(router.read()));
                router.onUpdate(function(route) {
                    instantSearchInstance.setUiState(stateMapping.routeToState(route));
                });
            },
            unsubscribe: function unsubscribe() {
                router.dispose();
            }
        };
    };
};

},{"../lib/stateMappings/simple.js":"7Ci0f","../lib/routers/history.js":"haLSt","../lib/utils/index.js":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Ci0f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {
    };
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {
    };
    var target = {
    };
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function getIndexStateWithoutConfigure(uiState) {
    var configure = uiState.configure, trackedUiState = _objectWithoutProperties(uiState, [
        "configure"
    ]);
    return trackedUiState;
} // technically a URL could contain any key, since users provide it,
function simpleStateMapping() {
    return {
        stateToRoute: function stateToRoute(uiState) {
            return Object.keys(uiState).reduce(function(state, indexId) {
                return _objectSpread(_objectSpread({
                }, state), {
                }, _defineProperty({
                }, indexId, getIndexStateWithoutConfigure(uiState[indexId])));
            }, {
            });
        },
        routeToState: function routeToState() {
            var routeState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
            };
            return Object.keys(routeState).reduce(function(state, indexId) {
                return _objectSpread(_objectSpread({
                }, state), {
                }, _defineProperty({
                }, indexId, getIndexStateWithoutConfigure(routeState[indexId])));
            }, {
            });
        }
    };
}
exports.default = simpleStateMapping;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"haLSt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _qs = require("qs");
var _qsDefault = parcelHelpers.interopDefault(_qs);
var _indexJs = require("../utils/index.js");
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var setWindowTitle = function setWindowTitle(title) {
    if (title) // This function is only executed on browsers so we can disable this check.
    // eslint-disable-next-line no-restricted-globals
    window.document.title = title;
};
var BrowserHistory = /*#__PURE__*/ function() {
    /**
   * Initializes a new storage provider that syncs the search state to the URL
   * using web APIs (`window.location.pushState` and `onpopstate` event).
   */ function BrowserHistory1(_ref) {
        var _this = this;
        var windowTitle = _ref.windowTitle, _ref$writeDelay = _ref.writeDelay, writeDelay = _ref$writeDelay === void 0 ? 400 : _ref$writeDelay, createURL = _ref.createURL, parseURL = _ref.parseURL, getLocation = _ref.getLocation;
        _classCallCheck(this, BrowserHistory1);
        _defineProperty(this, "windowTitle", void 0);
        _defineProperty(this, "writeDelay", void 0);
        _defineProperty(this, "_createURL", void 0);
        _defineProperty(this, "parseURL", void 0);
        _defineProperty(this, "getLocation", void 0);
        _defineProperty(this, "writeTimer", void 0);
        _defineProperty(this, "shouldPushState", true);
        this.windowTitle = windowTitle;
        this.writeTimer = undefined;
        this.writeDelay = writeDelay;
        this._createURL = createURL;
        this.parseURL = parseURL;
        this.getLocation = getLocation;
        _indexJs.safelyRunOnBrowser(function() {
            var title = _this.windowTitle && _this.windowTitle(_this.read());
            setWindowTitle(title);
        });
    }
    /**
   * Reads the URL and returns a syncable UI search state.
   */ _createClass(BrowserHistory1, [
        {
            key: "read",
            value: function read() {
                return this.parseURL({
                    qsModule: _qsDefault.default,
                    location: this.getLocation()
                });
            }
        },
        {
            key: "write",
            value: function write(routeState) {
                var _this2 = this;
                _indexJs.safelyRunOnBrowser(function(_ref2) {
                    var window = _ref2.window;
                    var url = _this2.createURL(routeState);
                    var title = _this2.windowTitle && _this2.windowTitle(routeState);
                    if (_this2.writeTimer) clearTimeout(_this2.writeTimer);
                    _this2.writeTimer = setTimeout(function() {
                        setWindowTitle(title);
                        if (_this2.shouldPushState) window.history.pushState(routeState, title || '', url);
                        _this2.shouldPushState = true;
                        _this2.writeTimer = undefined;
                    }, _this2.writeDelay);
                });
            }
        },
        {
            key: "onUpdate",
            value: function onUpdate(callback) {
                var _this3 = this;
                this._onPopState = function(event) {
                    if (_this3.writeTimer) {
                        clearTimeout(_this3.writeTimer);
                        _this3.writeTimer = undefined;
                    }
                    _this3.shouldPushState = false;
                    var routeState = event.state; // At initial load, the state is read from the URL without update.
                    // Therefore the state object is not available.
                    // In this case, we fallback and read the URL.
                    if (!routeState) callback(_this3.read());
                    else callback(routeState);
                };
                _indexJs.safelyRunOnBrowser(function(_ref3) {
                    var window = _ref3.window;
                    window.addEventListener('popstate', _this3._onPopState);
                });
            }
        },
        {
            key: "createURL",
            value: function createURL(routeState) {
                return this._createURL({
                    qsModule: _qsDefault.default,
                    routeState: routeState,
                    location: this.getLocation()
                });
            }
        },
        {
            key: "dispose",
            value: function dispose() {
                var _this4 = this;
                _indexJs.safelyRunOnBrowser(function(_ref4) {
                    var window = _ref4.window;
                    if (_this4._onPopState) window.removeEventListener('popstate', _this4._onPopState);
                });
                if (this.writeTimer) clearTimeout(this.writeTimer);
                this.write({
                });
            }
        }
    ]);
    return BrowserHistory1;
}();
function historyRouter() {
    var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    }, _ref5$createURL = _ref5.createURL, createURL = _ref5$createURL === void 0 ? function(_ref6) {
        var qsModule = _ref6.qsModule, routeState = _ref6.routeState, location = _ref6.location;
        var protocol = location.protocol, hostname = location.hostname, _location$port = location.port, port = _location$port === void 0 ? '' : _location$port, pathname = location.pathname, hash = location.hash;
        var queryString = qsModule.stringify(routeState);
        var portWithPrefix = port === '' ? '' : ":".concat(port); // IE <= 11 has no proper `location.origin` so we cannot rely on it.
        // IE <= 11 has no proper `location.origin` so we cannot rely on it.
        if (!queryString) return "".concat(protocol, "//").concat(hostname).concat(portWithPrefix).concat(pathname).concat(hash);
        return "".concat(protocol, "//").concat(hostname).concat(portWithPrefix).concat(pathname, "?").concat(queryString).concat(hash);
    } : _ref5$createURL, _ref5$parseURL = _ref5.parseURL, parseURL = _ref5$parseURL === void 0 ? function(_ref7) {
        var qsModule = _ref7.qsModule, location = _ref7.location;
        // `qs` by default converts arrays with more than 20 items to an object.
        // We want to avoid this because the data structure manipulated can therefore vary.
        // Setting the limit to `100` seems a good number because the engine's default is 100
        // (it can go up to 1000 but it is very unlikely to select more than 100 items in the UI).
        //
        // Using an `arrayLimit` of `n` allows `n + 1` items.
        //
        // See:
        //   - https://github.com/ljharb/qs#parsing-arrays
        //   - https://www.algolia.com/doc/api-reference/api-parameters/maxValuesPerFacet/
        return qsModule.parse(location.search.slice(1), {
            arrayLimit: 99
        });
    } : _ref5$parseURL, _ref5$writeDelay = _ref5.writeDelay, writeDelay = _ref5$writeDelay === void 0 ? 400 : _ref5$writeDelay, windowTitle = _ref5.windowTitle, _ref5$getLocation = _ref5.getLocation, getLocation = _ref5$getLocation === void 0 ? function() {
        return _indexJs.safelyRunOnBrowser(function(_ref8) {
            var window = _ref8.window;
            return window.location;
        }, {
            fallback: function fallback() {
                throw new Error('You need to provide `getLocation` to the `history` router in environments where `window` does not exist.');
            }
        });
    } : _ref5$getLocation;
    return new BrowserHistory({
        createURL: createURL,
        parseURL: parseURL,
        writeDelay: writeDelay,
        windowTitle: windowTitle,
        getLocation: getLocation
    });
}
exports.default = historyRouter;

},{"qs":"kW4GH","../utils/index.js":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kW4GH":[function(require,module,exports) {
'use strict';
var stringify = require('./stringify');
var parse = require('./parse');
var formats = require('./formats');
module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};

},{"./stringify":"aJuQi","./parse":"fSZqi","./formats":"d7Ogf"}],"aJuQi":[function(require,module,exports) {
'use strict';
var utils = require('./utils');
var formats = require('./formats');
var has = Object.prototype.hasOwnProperty;
var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) {
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};
var isArray = Array.isArray;
var split = String.prototype.split;
var push = Array.prototype.push;
var pushToArray = function(arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [
        valueOrArray
    ]);
};
var toISO = Date.prototype.toISOString;
var defaultFormat = formats['default'];
var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};
var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === 'string' || typeof v === 'number' || typeof v === 'boolean' || typeof v === 'symbol' || typeof v === 'bigint';
};
var stringify = function stringify1(object, prefix, generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset) {
    var obj = object;
    if (typeof filter === 'function') obj = filter(prefix, obj);
    else if (obj instanceof Date) obj = serializeDate(obj);
    else if (generateArrayPrefix === 'comma' && isArray(obj)) obj = utils.maybeMap(obj, function(value) {
        if (value instanceof Date) return serializeDate(value);
        return value;
    });
    if (obj === null) {
        if (strictNullHandling) return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key', format) : prefix;
        obj = '';
    }
    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key', format);
            if (generateArrayPrefix === 'comma' && encodeValuesOnly) {
                var valuesArray = split.call(String(obj), ',');
                var valuesJoined = '';
                for(var i = 0; i < valuesArray.length; ++i)valuesJoined += (i === 0 ? '' : ',') + formatter(encoder(valuesArray[i], defaults.encoder, charset, 'value', format));
                return [
                    formatter(keyValue) + '=' + valuesJoined
                ];
            }
            return [
                formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value', format))
            ];
        }
        return [
            formatter(prefix) + '=' + formatter(String(obj))
        ];
    }
    var values = [];
    if (typeof obj === 'undefined') return values;
    var objKeys;
    if (generateArrayPrefix === 'comma' && isArray(obj)) // we need to join elements in
    objKeys = [
        {
            value: obj.length > 0 ? obj.join(',') || null : void 0
        }
    ];
    else if (isArray(filter)) objKeys = filter;
    else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }
    for(var j = 0; j < objKeys.length; ++j){
        var key = objKeys[j];
        var value1 = typeof key === 'object' && typeof key.value !== 'undefined' ? key.value : obj[key];
        if (skipNulls && value1 === null) continue;
        var keyPrefix = isArray(obj) ? typeof generateArrayPrefix === 'function' ? generateArrayPrefix(prefix, key) : prefix : prefix + (allowDots ? '.' + key : '[' + key + ']');
        pushToArray(values, stringify1(value1, keyPrefix, generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset));
    }
    return values;
};
var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) return defaults;
    if (opts.encoder !== null && typeof opts.encoder !== 'undefined' && typeof opts.encoder !== 'function') throw new TypeError('Encoder has to be a function.');
    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    var format = formats['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has.call(formats.formatters, opts.format)) throw new TypeError('Unknown format option provided.');
        format = opts.format;
    }
    var formatter = formats.formatters[format];
    var filter = defaults.filter;
    if (typeof opts.filter === 'function' || isArray(opts.filter)) filter = opts.filter;
    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        format: format,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};
module.exports = function(object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);
    var objKeys;
    var filter;
    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }
    var keys = [];
    if (typeof obj !== 'object' || obj === null) return '';
    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) arrayFormat = opts.arrayFormat;
    else if (opts && 'indices' in opts) arrayFormat = opts.indices ? 'indices' : 'repeat';
    else arrayFormat = 'indices';
    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];
    if (!objKeys) objKeys = Object.keys(obj);
    if (options.sort) objKeys.sort(options.sort);
    for(var i = 0; i < objKeys.length; ++i){
        var key = objKeys[i];
        if (options.skipNulls && obj[key] === null) continue;
        pushToArray(keys, stringify(obj[key], key, generateArrayPrefix, options.strictNullHandling, options.skipNulls, options.encode ? options.encoder : null, options.filter, options.sort, options.allowDots, options.serializeDate, options.format, options.formatter, options.encodeValuesOnly, options.charset));
    }
    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';
    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
        prefix += 'utf8=%26%2310003%3B&';
        else // encodeURIComponent('✓')
        prefix += 'utf8=%E2%9C%93&';
    }
    return joined.length > 0 ? prefix + joined : '';
};

},{"./utils":"chmkc","./formats":"d7Ogf"}],"chmkc":[function(require,module,exports) {
'use strict';
var formats = require('./formats');
var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;
var hexTable = function() {
    var array = [];
    for(var i = 0; i < 256; ++i)array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    return array;
}();
var compactQueue = function compactQueue(queue) {
    while(queue.length > 1){
        var item = queue.pop();
        var obj = item.obj[item.prop];
        if (isArray(obj)) {
            var compacted = [];
            for(var j = 0; j < obj.length; ++j)if (typeof obj[j] !== 'undefined') compacted.push(obj[j]);
            item.obj[item.prop] = compacted;
        }
    }
};
var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {
    };
    for(var i = 0; i < source.length; ++i)if (typeof source[i] !== 'undefined') obj[i] = source[i];
    return obj;
};
var merge = function merge1(target, source, options) {
    /* eslint no-param-reassign: 0 */ if (!source) return target;
    if (typeof source !== 'object') {
        if (isArray(target)) target.push(source);
        else if (target && typeof target === 'object') {
            if (options && (options.plainObjects || options.allowPrototypes) || !has.call(Object.prototype, source)) target[source] = true;
        } else return [
            target,
            source
        ];
        return target;
    }
    if (!target || typeof target !== 'object') return [
        target
    ].concat(source);
    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) mergeTarget = arrayToObject(target, options);
    if (isArray(target) && isArray(source)) {
        source.forEach(function(item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') target[i] = merge1(targetItem, item, options);
                else target.push(item);
            } else target[i] = item;
        });
        return target;
    }
    return Object.keys(source).reduce(function(acc, key) {
        var value = source[key];
        if (has.call(acc, key)) acc[key] = merge1(acc[key], value, options);
        else acc[key] = value;
        return acc;
    }, mergeTarget);
};
var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function(acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};
var decode = function(str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') // unescape never throws, no try...catch needed:
    return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};
var encode = function encode(str, defaultEncoder, charset, kind, format) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) return str;
    var string = str;
    if (typeof str === 'symbol') string = Symbol.prototype.toString.call(str);
    else if (typeof str !== 'string') string = String(str);
    if (charset === 'iso-8859-1') return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
        return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
    });
    var out = '';
    for(var i = 0; i < string.length; ++i){
        var c = string.charCodeAt(i);
        if (c === 45 // -
         || c === 46 // .
         || c === 95 // _
         || c === 126 // ~
         || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || format === formats.RFC1738 && (c === 40 || c === 41) // ( )
        ) {
            out += string.charAt(i);
            continue;
        }
        if (c < 128) {
            out = out + hexTable[c];
            continue;
        }
        if (c < 2048) {
            out = out + (hexTable[192 | c >> 6] + hexTable[128 | c & 63]);
            continue;
        }
        if (c < 55296 || c >= 57344) {
            out = out + (hexTable[224 | c >> 12] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63]);
            continue;
        }
        i += 1;
        c = 65536 + ((c & 1023) << 10 | string.charCodeAt(i) & 1023);
        /* eslint operator-linebreak: [2, "before"] */ out += hexTable[240 | c >> 18] + hexTable[128 | c >> 12 & 63] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
    }
    return out;
};
var compact = function compact(value) {
    var queue = [
        {
            obj: {
                o: value
            },
            prop: 'o'
        }
    ];
    var refs = [];
    for(var i = 0; i < queue.length; ++i){
        var item = queue[i];
        var obj = item.obj[item.prop];
        var keys = Object.keys(obj);
        for(var j = 0; j < keys.length; ++j){
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({
                    obj: obj,
                    prop: key
                });
                refs.push(val);
            }
        }
    }
    compactQueue(queue);
    return value;
};
var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};
var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') return false;
    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};
var combine = function combine(a, b) {
    return [].concat(a, b);
};
var maybeMap = function maybeMap(val, fn) {
    if (isArray(val)) {
        var mapped = [];
        for(var i = 0; i < val.length; i += 1)mapped.push(fn(val[i]));
        return mapped;
    }
    return fn(val);
};
module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    maybeMap: maybeMap,
    merge: merge
};

},{"./formats":"d7Ogf"}],"d7Ogf":[function(require,module,exports) {
'use strict';
var replace = String.prototype.replace;
var percentTwenties = /%20/g;
var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};
module.exports = {
    'default': Format.RFC3986,
    formatters: {
        RFC1738: function(value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function(value) {
            return String(value);
        }
    },
    RFC1738: Format.RFC1738,
    RFC3986: Format.RFC3986
};

},{}],"fSZqi":[function(require,module,exports) {
'use strict';
var utils = require('./utils');
var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;
var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};
var interpretNumericEntities = function(str) {
    return str.replace(/&#(\d+);/g, function($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};
var parseArrayValue = function(val, options) {
    if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) return val.split(',');
    return val;
};
// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')
// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')
var parseValues = function parseQueryStringValues(str, options) {
    var obj = {
    };
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;
    var charset = options.charset;
    if (options.charsetSentinel) {
        for(i = 0; i < parts.length; ++i)if (parts[i].indexOf('utf8=') === 0) {
            if (parts[i] === charsetSentinel) charset = 'utf-8';
            else if (parts[i] === isoSentinel) charset = 'iso-8859-1';
            skipIndex = i;
            i = parts.length; // The eslint settings do not allow break;
        }
    }
    for(i = 0; i < parts.length; ++i){
        if (i === skipIndex) continue;
        var part = parts[i];
        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;
        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset, 'key');
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');
            val = utils.maybeMap(parseArrayValue(part.slice(pos + 1), options), function(encodedVal) {
                return options.decoder(encodedVal, defaults.decoder, charset, 'value');
            });
        }
        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') val = interpretNumericEntities(val);
        if (part.indexOf('[]=') > -1) val = isArray(val) ? [
            val
        ] : val;
        if (has.call(obj, key)) obj[key] = utils.combine(obj[key], val);
        else obj[key] = val;
    }
    return obj;
};
var parseObject = function(chain, val, options, valuesParsed) {
    var leaf = valuesParsed ? val : parseArrayValue(val, options);
    for(var i = chain.length - 1; i >= 0; --i){
        var obj;
        var root = chain[i];
        if (root === '[]' && options.parseArrays) obj = [].concat(leaf);
        else {
            obj = options.plainObjects ? Object.create(null) : {
            };
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === '') obj = {
                0: leaf
            };
            else if (!isNaN(index) && root !== cleanRoot && String(index) === cleanRoot && index >= 0 && options.parseArrays && index <= options.arrayLimit) {
                obj = [];
                obj[index] = leaf;
            } else if (cleanRoot !== '__proto__') obj[cleanRoot] = leaf;
        }
        leaf = obj;
    }
    return leaf;
};
var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) return;
    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;
    // The regex chunks
    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;
    // Get the parent
    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;
    // Stash the parent if it exists
    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) return;
        }
        keys.push(parent);
    }
    // Loop through children appending to the array until we hit depth
    var i = 0;
    while(options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth){
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) return;
        }
        keys.push(segment[1]);
    }
    // If there's a remainder, just add whatever is left
    if (segment) keys.push('[' + key.slice(segment.index) + ']');
    return parseObject(keys, val, options, valuesParsed);
};
var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) return defaults;
    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') throw new TypeError('Decoder has to be a function.');
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;
    return {
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: typeof opts.depth === 'number' || opts.depth === false ? +opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};
module.exports = function(str, opts) {
    var options = normalizeParseOptions(opts);
    if (str === '' || str === null || typeof str === 'undefined') return options.plainObjects ? Object.create(null) : {
    };
    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {
    };
    // Iterate over the keys and setup the new object
    var keys = Object.keys(tempObj);
    for(var i = 0; i < keys.length; ++i){
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');
        obj = utils.merge(obj, newObj, options);
    }
    return utils.compact(obj);
};

},{"./utils":"chmkc"}],"lOLJd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isMetadataEnabled", ()=>isMetadataEnabled
);
/**
 * Exposes the metadata of mounted widgets in a custom
 * `<meta name="instantsearch:widgets" />` tag. The metadata per widget is:
 * - applied parameters
 * - widget name
 * - connector name
 */ parcelHelpers.export(exports, "createMetadataMiddleware", ()=>createMetadataMiddleware
);
var _indexJs = require("../lib/utils/index.js");
function extractPayload(widgets, instantSearchInstance, payload) {
    var parent = instantSearchInstance.mainIndex;
    var initOptions = {
        instantSearchInstance: instantSearchInstance,
        parent: parent,
        scopedResults: [],
        state: parent.getHelper().state,
        helper: parent.getHelper(),
        createURL: parent.createURL,
        uiState: instantSearchInstance._initialUiState,
        renderState: instantSearchInstance.renderState,
        templatesConfig: instantSearchInstance.templatesConfig,
        searchMetadata: {
            isSearchStalled: instantSearchInstance._isSearchStalled
        }
    };
    widgets.forEach(function(widget) {
        var widgetParams = {
        };
        if (widget.getWidgetRenderState) {
            var renderState = widget.getWidgetRenderState(initOptions);
            if (renderState && renderState.widgetParams) // casting, as we just earlier checked widgetParams exists, and thus an object
            widgetParams = renderState.widgetParams;
        } // since we destructure in all widgets, the parameters with defaults are set to "undefined"
        var params = Object.keys(widgetParams).filter(function(key) {
            return widgetParams[key] !== undefined;
        });
        payload.widgets.push({
            type: widget.$$type,
            widgetType: widget.$$widgetType,
            params: params
        });
        if (widget.$$type === 'ais.index') extractPayload(widget.getWidgets(), instantSearchInstance, payload);
    });
}
function isMetadataEnabled() {
    return _indexJs.safelyRunOnBrowser(function(_ref) {
        var window = _ref.window;
        return window.navigator.userAgent.indexOf('Algolia Crawler') > -1;
    }, {
        fallback: function fallback() {
            return false;
        }
    });
}
function createMetadataMiddleware() {
    return function(_ref2) {
        var instantSearchInstance = _ref2.instantSearchInstance;
        var payload = {
            widgets: []
        };
        var payloadContainer = document.createElement('meta');
        var refNode = document.querySelector('head');
        payloadContainer.name = 'instantsearch:widgets';
        return {
            onStateChange: function onStateChange() {
            },
            subscribe: function subscribe() {
                // using setTimeout here to delay extraction until widgets have been added in a tick (e.g. Vue)
                setTimeout(function() {
                    var client = instantSearchInstance.client;
                    payload.ua = client.transporter && client.transporter.userAgent ? client.transporter.userAgent.value : client._ua;
                    extractPayload(instantSearchInstance.mainIndex.getWidgets(), instantSearchInstance, payload);
                    payloadContainer.content = JSON.stringify(payload);
                    refNode.appendChild(payloadContainer);
                }, 0);
            },
            unsubscribe: function unsubscribe() {
                payloadContainer.remove();
            }
        };
    };
}

},{"../lib/utils/index.js":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"co24K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createInfiniteHitsSessionStorageCache", ()=>_sessionStorageJsDefault.default
);
var _sessionStorageJs = require("./sessionStorage.js");
var _sessionStorageJsDefault = parcelHelpers.interopDefault(_sessionStorageJs);

},{"./sessionStorage.js":"gzyTs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gzyTs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../utils/index.js");
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {
    };
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {
    };
    var target = {
    };
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function getStateWithoutPage(state) {
    var _ref = state || {
    }, page = _ref.page, rest = _objectWithoutProperties(_ref, [
        "page"
    ]);
    return rest;
}
var KEY = 'ais.infiniteHits';
function createInfiniteHitsSessionStorageCache() {
    return {
        read: function read(_ref2) {
            var state = _ref2.state;
            var sessionStorage = _indexJs.safelyRunOnBrowser(function(_ref3) {
                var window = _ref3.window;
                return window.sessionStorage;
            });
            if (!sessionStorage) return null;
            try {
                var cache = JSON.parse(sessionStorage.getItem(KEY));
                return cache && _indexJs.isEqual(cache.state, getStateWithoutPage(state)) ? cache.hits : null;
            } catch (error) {
                if (error instanceof SyntaxError) try {
                    sessionStorage.removeItem(KEY);
                } catch (err) {
                }
                return null;
            }
        },
        write: function write(_ref4) {
            var state = _ref4.state, hits = _ref4.hits;
            var sessionStorage = _indexJs.safelyRunOnBrowser(function(_ref5) {
                var window = _ref5.window;
                return window.sessionStorage;
            });
            if (!sessionStorage) return;
            try {
                sessionStorage.setItem(KEY, JSON.stringify({
                    state: getStateWithoutPage(state),
                    hits: hits
                }));
            } catch (error) {
            }
        }
    };
}
exports.default = createInfiniteHitsSessionStorageCache;

},{"../utils/index.js":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l4HRf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// internal
var _utilsJs = require("./utils.js"); // Algolia-related
parcelHelpers.exportAll(_utilsJs, exports);
var _algoliasearchJs = require("./algoliasearch.js");
parcelHelpers.exportAll(_algoliasearchJs, exports);
var _resultsJs = require("./results.js"); // component-related
parcelHelpers.exportAll(_resultsJs, exports);
var _componentJs = require("./component.js"); // instantsearch-related
parcelHelpers.exportAll(_componentJs, exports);
var _instantsearchJs = require("./instantsearch.js");
parcelHelpers.exportAll(_instantsearchJs, exports);
var _middlewareJs = require("./middleware.js");
parcelHelpers.exportAll(_middlewareJs, exports);
var _routerJs = require("./router.js");
parcelHelpers.exportAll(_routerJs, exports);
var _insightsJs = require("./insights.js"); // widget-related
parcelHelpers.exportAll(_insightsJs, exports);
var _connectorJs = require("./connector.js");
parcelHelpers.exportAll(_connectorJs, exports);
var _widgetFactoryJs = require("./widget-factory.js");
parcelHelpers.exportAll(_widgetFactoryJs, exports);
var _widgetJs = require("./widget.js");
parcelHelpers.exportAll(_widgetJs, exports);
var _uiStateJs = require("./ui-state.js");
parcelHelpers.exportAll(_uiStateJs, exports);
var _renderStateJs = require("./render-state.js");
parcelHelpers.exportAll(_renderStateJs, exports);
var _templatesJs = require("./templates.js");
parcelHelpers.exportAll(_templatesJs, exports);

},{"./utils.js":"2BVif","./algoliasearch.js":"cgZkV","./results.js":"iTzNG","./component.js":"2f9nV","./instantsearch.js":"38Heq","./middleware.js":"1grG2","./router.js":"gINNY","./insights.js":"7oNdW","./connector.js":"bS8e4","./widget-factory.js":"kGrqQ","./widget.js":"7mDnJ","./ui-state.js":"cYyXA","./render-state.js":"iIbYE","./templates.js":"lxQtX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2BVif":[function(require,module,exports) {

},{}],"cgZkV":[function(require,module,exports) {

},{}],"iTzNG":[function(require,module,exports) {

},{}],"2f9nV":[function(require,module,exports) {

},{}],"38Heq":[function(require,module,exports) {

},{}],"1grG2":[function(require,module,exports) {

},{}],"gINNY":[function(require,module,exports) {

},{}],"7oNdW":[function(require,module,exports) {

},{}],"bS8e4":[function(require,module,exports) {

},{}],"kGrqQ":[function(require,module,exports) {

},{}],"7mDnJ":[function(require,module,exports) {

},{}],"cYyXA":[function(require,module,exports) {

},{}],"iIbYE":[function(require,module,exports) {

},{}],"lxQtX":[function(require,module,exports) {

},{}],"bk5Jd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "analytics", ()=>_analyticsJsDefault.default
);
parcelHelpers.export(exports, "breadcrumb", ()=>_breadcrumbJsDefault.default
);
parcelHelpers.export(exports, "clearRefinements", ()=>_clearRefinementsJsDefault.default
);
parcelHelpers.export(exports, "configure", ()=>_configureJsDefault.default
);
parcelHelpers.export(exports, "currentRefinements", ()=>_currentRefinementsJsDefault.default
);
parcelHelpers.export(exports, "EXPERIMENTAL_answers", ()=>_answersJsDefault.default
);
parcelHelpers.export(exports, "EXPERIMENTAL_configureRelatedItems", ()=>_configureRelatedItemsJsDefault.default
);
parcelHelpers.export(exports, "dynamicWidgets", ()=>_dynamicWidgetsJsDefault.default
);
parcelHelpers.export(exports, "EXPERIMENTAL_dynamicWidgets", ()=>EXPERIMENTAL_dynamicWidgets
);
parcelHelpers.export(exports, "geoSearch", ()=>_geoSearchJsDefault.default
);
parcelHelpers.export(exports, "hierarchicalMenu", ()=>_hierarchicalMenuJsDefault.default
);
parcelHelpers.export(exports, "hits", ()=>_hitsJsDefault.default
);
parcelHelpers.export(exports, "hitsPerPage", ()=>_hitsPerPageJsDefault.default
);
parcelHelpers.export(exports, "index", ()=>_indexJsDefault.default
);
parcelHelpers.export(exports, "infiniteHits", ()=>_infiniteHitsJsDefault.default
);
parcelHelpers.export(exports, "menu", ()=>_menuJsDefault.default
);
parcelHelpers.export(exports, "menuSelect", ()=>_menuSelectJsDefault.default
);
parcelHelpers.export(exports, "numericMenu", ()=>_numericMenuJsDefault.default
);
parcelHelpers.export(exports, "pagination", ()=>_paginationJsDefault.default
);
parcelHelpers.export(exports, "panel", ()=>_panelJsDefault.default
);
parcelHelpers.export(exports, "places", ()=>_placesJsDefault.default
);
parcelHelpers.export(exports, "poweredBy", ()=>_poweredByJsDefault.default
);
parcelHelpers.export(exports, "queryRuleContext", ()=>_queryRuleContextJsDefault.default
);
parcelHelpers.export(exports, "queryRuleCustomData", ()=>_queryRuleCustomDataJsDefault.default
);
parcelHelpers.export(exports, "rangeInput", ()=>_rangeInputJsDefault.default
);
parcelHelpers.export(exports, "rangeSlider", ()=>_rangeSliderJsDefault.default
);
parcelHelpers.export(exports, "ratingMenu", ()=>_ratingMenuJsDefault.default
);
parcelHelpers.export(exports, "refinementList", ()=>_refinementListJsDefault.default
);
parcelHelpers.export(exports, "relevantSort", ()=>_relevantSortJsDefault.default
);
parcelHelpers.export(exports, "searchBox", ()=>_searchBoxJsDefault.default
);
parcelHelpers.export(exports, "sortBy", ()=>_sortByJsDefault.default
);
parcelHelpers.export(exports, "stats", ()=>_statsJsDefault.default
);
parcelHelpers.export(exports, "toggleRefinement", ()=>_toggleRefinementJsDefault.default
);
parcelHelpers.export(exports, "voiceSearch", ()=>_voiceSearchJsDefault.default
);
var _dynamicWidgetsJs = require("./dynamic-widgets/dynamic-widgets.js");
var _dynamicWidgetsJsDefault = parcelHelpers.interopDefault(_dynamicWidgetsJs);
var _indexJs = require("../lib/utils/index.js");
var _analyticsJs = require("./analytics/analytics.js");
var _analyticsJsDefault = parcelHelpers.interopDefault(_analyticsJs);
var _breadcrumbJs = require("./breadcrumb/breadcrumb.js");
var _breadcrumbJsDefault = parcelHelpers.interopDefault(_breadcrumbJs);
var _clearRefinementsJs = require("./clear-refinements/clear-refinements.js");
var _clearRefinementsJsDefault = parcelHelpers.interopDefault(_clearRefinementsJs);
var _configureJs = require("./configure/configure.js");
var _configureJsDefault = parcelHelpers.interopDefault(_configureJs);
var _currentRefinementsJs = require("./current-refinements/current-refinements.js");
var _currentRefinementsJsDefault = parcelHelpers.interopDefault(_currentRefinementsJs);
var _answersJs = require("./answers/answers.js");
var _answersJsDefault = parcelHelpers.interopDefault(_answersJs);
var _configureRelatedItemsJs = require("./configure-related-items/configure-related-items.js");
var _configureRelatedItemsJsDefault = parcelHelpers.interopDefault(_configureRelatedItemsJs);
var _geoSearchJs = require("./geo-search/geo-search.js");
var _geoSearchJsDefault = parcelHelpers.interopDefault(_geoSearchJs);
var _hierarchicalMenuJs = require("./hierarchical-menu/hierarchical-menu.js");
var _hierarchicalMenuJsDefault = parcelHelpers.interopDefault(_hierarchicalMenuJs);
var _hitsJs = require("./hits/hits.js");
var _hitsJsDefault = parcelHelpers.interopDefault(_hitsJs);
var _hitsPerPageJs = require("./hits-per-page/hits-per-page.js");
var _hitsPerPageJsDefault = parcelHelpers.interopDefault(_hitsPerPageJs);
var _indexJs1 = require("./index/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs1);
var _infiniteHitsJs = require("./infinite-hits/infinite-hits.js");
var _infiniteHitsJsDefault = parcelHelpers.interopDefault(_infiniteHitsJs);
var _menuJs = require("./menu/menu.js");
var _menuJsDefault = parcelHelpers.interopDefault(_menuJs);
var _menuSelectJs = require("./menu-select/menu-select.js");
var _menuSelectJsDefault = parcelHelpers.interopDefault(_menuSelectJs);
var _numericMenuJs = require("./numeric-menu/numeric-menu.js");
var _numericMenuJsDefault = parcelHelpers.interopDefault(_numericMenuJs);
var _paginationJs = require("./pagination/pagination.js");
var _paginationJsDefault = parcelHelpers.interopDefault(_paginationJs);
var _panelJs = require("./panel/panel.js");
var _panelJsDefault = parcelHelpers.interopDefault(_panelJs);
var _placesJs = require("./places/places.js");
var _placesJsDefault = parcelHelpers.interopDefault(_placesJs);
var _poweredByJs = require("./powered-by/powered-by.js");
var _poweredByJsDefault = parcelHelpers.interopDefault(_poweredByJs);
var _queryRuleContextJs = require("./query-rule-context/query-rule-context.js");
var _queryRuleContextJsDefault = parcelHelpers.interopDefault(_queryRuleContextJs);
var _queryRuleCustomDataJs = require("./query-rule-custom-data/query-rule-custom-data.js");
var _queryRuleCustomDataJsDefault = parcelHelpers.interopDefault(_queryRuleCustomDataJs);
var _rangeInputJs = require("./range-input/range-input.js");
var _rangeInputJsDefault = parcelHelpers.interopDefault(_rangeInputJs);
var _rangeSliderJs = require("./range-slider/range-slider.js");
var _rangeSliderJsDefault = parcelHelpers.interopDefault(_rangeSliderJs);
var _ratingMenuJs = require("./rating-menu/rating-menu.js");
var _ratingMenuJsDefault = parcelHelpers.interopDefault(_ratingMenuJs);
var _refinementListJs = require("./refinement-list/refinement-list.js");
var _refinementListJsDefault = parcelHelpers.interopDefault(_refinementListJs);
var _relevantSortJs = require("./relevant-sort/relevant-sort.js");
var _relevantSortJsDefault = parcelHelpers.interopDefault(_relevantSortJs);
var _searchBoxJs = require("./search-box/search-box.js");
var _searchBoxJsDefault = parcelHelpers.interopDefault(_searchBoxJs);
var _sortByJs = require("./sort-by/sort-by.js");
var _sortByJsDefault = parcelHelpers.interopDefault(_sortByJs);
var _statsJs = require("./stats/stats.js");
var _statsJsDefault = parcelHelpers.interopDefault(_statsJs);
var _toggleRefinementJs = require("./toggle-refinement/toggle-refinement.js");
var _toggleRefinementJsDefault = parcelHelpers.interopDefault(_toggleRefinementJs);
var _voiceSearchJs = require("./voice-search/voice-search.js");
var _voiceSearchJsDefault = parcelHelpers.interopDefault(_voiceSearchJs);
var EXPERIMENTAL_dynamicWidgets = _indexJs.deprecate(_dynamicWidgetsJsDefault.default, 'use dynamicWidgets');

},{"./dynamic-widgets/dynamic-widgets.js":"rM3hn","../lib/utils/index.js":"etVYs","./analytics/analytics.js":false,"./breadcrumb/breadcrumb.js":false,"./clear-refinements/clear-refinements.js":false,"./configure/configure.js":false,"./current-refinements/current-refinements.js":false,"./answers/answers.js":false,"./configure-related-items/configure-related-items.js":false,"./geo-search/geo-search.js":false,"./hierarchical-menu/hierarchical-menu.js":false,"./hits/hits.js":"bPDYG","./hits-per-page/hits-per-page.js":false,"./index/index.js":"kdZTz","./infinite-hits/infinite-hits.js":false,"./menu/menu.js":false,"./menu-select/menu-select.js":false,"./numeric-menu/numeric-menu.js":false,"./pagination/pagination.js":"aGC8J","./panel/panel.js":false,"./places/places.js":false,"./powered-by/powered-by.js":false,"./query-rule-context/query-rule-context.js":false,"./query-rule-custom-data/query-rule-custom-data.js":false,"./range-input/range-input.js":false,"./range-slider/range-slider.js":false,"./rating-menu/rating-menu.js":false,"./refinement-list/refinement-list.js":"5rn2R","./relevant-sort/relevant-sort.js":false,"./search-box/search-box.js":"jSd18","./sort-by/sort-by.js":false,"./stats/stats.js":false,"./toggle-refinement/toggle-refinement.js":false,"./voice-search/voice-search.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"rM3hn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _connectDynamicWidgetsJs = require("../../connectors/dynamic-widgets/connectDynamicWidgets.js");
var _connectDynamicWidgetsJsDefault = parcelHelpers.interopDefault(_connectDynamicWidgetsJs);
var _suitJs = require("../../lib/suit.js");
var _indexJs = require("../../lib/utils/index.js");
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {
    };
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {
    };
    var target = {
    };
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var withUsage = _indexJs.createDocumentationMessageGenerator({
    name: 'dynamic-widgets'
});
var suit = _suitJs.component('DynamicWidgets');
function createContainer(rootContainer) {
    var container = document.createElement('div');
    container.className = suit({
        descendantName: 'widget'
    });
    rootContainer.appendChild(container);
    return container;
}
var dynamicWidgets = function dynamicWidgets(widgetParams) {
    var _ref = widgetParams || {
    }, containerSelector = _ref.container, widgets = _ref.widgets, fallbackWidget = _ref.fallbackWidget, otherWidgetParams = _objectWithoutProperties(_ref, [
        "container",
        "widgets",
        "fallbackWidget"
    ]);
    if (!containerSelector) throw new Error(withUsage('The `container` option is required.'));
    if (!(widgets && Array.isArray(widgets) && widgets.every(function(widget) {
        return typeof widget === 'function';
    }))) throw new Error(withUsage('The `widgets` option expects an array of callbacks.'));
    var userContainer = _indexJs.getContainerNode(containerSelector);
    var rootContainer = document.createElement('div');
    rootContainer.className = suit();
    var containers = new Map();
    var connectorWidgets = [];
    var makeWidget = _connectDynamicWidgetsJsDefault.default(function(_ref2, isFirstRender) {
        var attributesToRender = _ref2.attributesToRender;
        if (isFirstRender) userContainer.appendChild(rootContainer);
        attributesToRender.forEach(function(attribute) {
            if (!containers.has(attribute)) return;
            var container = containers.get(attribute);
            rootContainer.appendChild(container);
        });
    }, function() {
        userContainer.removeChild(rootContainer);
    });
    var widget1 = makeWidget(_objectSpread(_objectSpread({
    }, otherWidgetParams), {
    }, {
        widgets: connectorWidgets,
        fallbackWidget: typeof fallbackWidget === 'function' ? function(_ref3) {
            var attribute = _ref3.attribute;
            var container = createContainer(rootContainer);
            containers.set(attribute, container);
            return fallbackWidget({
                attribute: attribute,
                container: container
            });
        } : undefined
    }));
    return _objectSpread(_objectSpread({
    }, widget1), {
    }, {
        init: function init(initOptions) {
            widgets.forEach(function(cb) {
                var container = createContainer(rootContainer);
                var childWidget = cb(container);
                var attribute = _indexJs.getWidgetAttribute(childWidget, initOptions);
                containers.set(attribute, container);
                connectorWidgets.push(childWidget);
            });
            widget1.init(initOptions);
        },
        $$widgetType: 'ais.dynamicWidgets'
    });
};
exports.default = dynamicWidgets;

},{"../../connectors/dynamic-widgets/connectDynamicWidgets.js":"iH4FH","../../lib/suit.js":"du81D","../../lib/utils/index.js":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iH4FH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../lib/utils/index.js");
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _typeof(obj1) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj1);
}
var withUsage = _indexJs.createDocumentationMessageGenerator({
    name: 'dynamic-widgets',
    connector: true
});
var MAX_WILDCARD_FACETS = 20;
var connectDynamicWidgets = function connectDynamicWidgets(renderFn) {
    var unmountFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _indexJs.noop;
    _indexJs.checkRendering(renderFn, withUsage());
    return function(widgetParams) {
        var widgets = widgetParams.widgets, _widgetParams$maxValu = widgetParams.maxValuesPerFacet, maxValuesPerFacet = _widgetParams$maxValu === void 0 ? 20 : _widgetParams$maxValu, _widgetParams$facets = widgetParams.facets, facets = _widgetParams$facets === void 0 ? [
            '*'
        ] : _widgetParams$facets, _widgetParams$transfo = widgetParams.transformItems, transformItems = _widgetParams$transfo === void 0 ? function(items) {
            return items;
        } : _widgetParams$transfo, fallbackWidget = widgetParams.fallbackWidget;
        if (!(widgets && Array.isArray(widgets) && widgets.every(function(widget) {
            return _typeof(widget) === 'object';
        }))) throw new Error(withUsage('The `widgets` option expects an array of widgets.'));
        if (!(Array.isArray(facets) && facets.length <= 1 && (facets[0] === '*' || facets[0] === undefined))) throw new Error(withUsage("The `facets` option only accepts [] or [\"*\"], you passed ".concat(JSON.stringify(facets))));
        var localWidgets = new Map();
        return {
            $$type: 'ais.dynamicWidgets',
            init: function init(initOptions) {
                widgets.forEach(function(widget) {
                    var attribute = _indexJs.getWidgetAttribute(widget, initOptions);
                    localWidgets.set(attribute, {
                        widget: widget,
                        isMounted: false
                    });
                });
                renderFn(_objectSpread(_objectSpread({
                }, this.getWidgetRenderState(initOptions)), {
                }, {
                    instantSearchInstance: initOptions.instantSearchInstance
                }), true);
            },
            render: function render(renderOptions) {
                var parent = renderOptions.parent;
                var renderState = this.getWidgetRenderState(renderOptions);
                var widgetsToUnmount = [];
                var widgetsToMount = [];
                if (fallbackWidget) renderState.attributesToRender.forEach(function(attribute) {
                    if (!localWidgets.has(attribute)) {
                        var widget = fallbackWidget({
                            attribute: attribute
                        });
                        localWidgets.set(attribute, {
                            widget: widget,
                            isMounted: false
                        });
                    }
                });
                localWidgets.forEach(function(_ref, attribute) {
                    var widget = _ref.widget, isMounted = _ref.isMounted;
                    var shouldMount = renderState.attributesToRender.indexOf(attribute) > -1;
                    if (!isMounted && shouldMount) {
                        widgetsToMount.push(widget);
                        localWidgets.set(attribute, {
                            widget: widget,
                            isMounted: true
                        });
                    } else if (isMounted && !shouldMount) {
                        widgetsToUnmount.push(widget);
                        localWidgets.set(attribute, {
                            widget: widget,
                            isMounted: false
                        });
                    }
                });
                parent.addWidgets(widgetsToMount); // make sure this only happens after the regular render, otherwise it
                // happens too quick, since render is "deferred" for the next microtask,
                // so this needs to be a whole task later
                setTimeout(function() {
                    return parent.removeWidgets(widgetsToUnmount);
                }, 0);
                renderFn(_objectSpread(_objectSpread({
                }, renderState), {
                }, {
                    instantSearchInstance: renderOptions.instantSearchInstance
                }), false);
            },
            dispose: function dispose(_ref2) {
                var parent = _ref2.parent;
                var toRemove = [];
                localWidgets.forEach(function(_ref3) {
                    var widget = _ref3.widget, isMounted = _ref3.isMounted;
                    if (isMounted) toRemove.push(widget);
                });
                parent.removeWidgets(toRemove);
                unmountFn();
            },
            getWidgetSearchParameters: function getWidgetSearchParameters(state) {
                // broadening the scope of facets to avoid conflict between never and *
                return facets.reduce(function(acc, curr) {
                    return acc.addFacet(curr);
                }, state.setQueryParameters({
                    maxValuesPerFacet: Math.max(maxValuesPerFacet || 0, state.maxValuesPerFacet || 0)
                }));
            },
            getRenderState: function getRenderState(renderState, renderOptions) {
                return _objectSpread(_objectSpread({
                }, renderState), {
                }, {
                    dynamicWidgets: this.getWidgetRenderState(renderOptions)
                });
            },
            getWidgetRenderState: function getWidgetRenderState(_ref4) {
                var _results$renderingCon, _results$renderingCon2, _results$renderingCon3, _results$renderingCon4;
                var results = _ref4.results, state = _ref4.state;
                if (!results) return {
                    attributesToRender: [],
                    widgetParams: widgetParams
                };
                var attributesToRender = transformItems((_results$renderingCon = (_results$renderingCon2 = results.renderingContent) === null || _results$renderingCon2 === void 0 ? void 0 : (_results$renderingCon3 = _results$renderingCon2.facetOrdering) === null || _results$renderingCon3 === void 0 ? void 0 : (_results$renderingCon4 = _results$renderingCon3.facets) === null || _results$renderingCon4 === void 0 ? void 0 : _results$renderingCon4.order) !== null && _results$renderingCon !== void 0 ? _results$renderingCon : [], {
                    results: results
                });
                if (!Array.isArray(attributesToRender)) throw new Error(withUsage('The `transformItems` option expects a function that returns an Array.'));
                _indexJs.warning(maxValuesPerFacet >= (state.maxValuesPerFacet || 0), "The maxValuesPerFacet set by dynamic widgets (".concat(maxValuesPerFacet, ") is smaller than one of the limits set by a widget (").concat(state.maxValuesPerFacet, "). This causes a mismatch in query parameters and thus an extra network request when that widget is mounted."));
                _indexJs.warning(attributesToRender.length <= MAX_WILDCARD_FACETS || widgetParams.facets !== undefined, "More than ".concat(MAX_WILDCARD_FACETS, " facets are requested to be displayed without explicitly setting which facets to retrieve. This could have a performance impact. Set \"facets\" to [] to do two smaller network requests, or explicitly to ['*'] to avoid this warning."));
                return {
                    attributesToRender: attributesToRender,
                    widgetParams: widgetParams
                };
            }
        };
    };
};
exports.default = connectDynamicWidgets;

},{"../../lib/utils/index.js":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bPDYG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** @jsx h */ var _preact = require("preact");
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _connectHitsJs = require("../../connectors/hits/connectHits.js");
var _connectHitsJsDefault = parcelHelpers.interopDefault(_connectHitsJs);
var _hitsJs = require("../../components/Hits/Hits.js");
var _hitsJsDefault = parcelHelpers.interopDefault(_hitsJs);
var _defaultTemplatesJs = require("./defaultTemplates.js");
var _defaultTemplatesJsDefault = parcelHelpers.interopDefault(_defaultTemplatesJs);
var _indexJs = require("../../lib/utils/index.js");
var _suitJs = require("../../lib/suit.js");
var _indexJs1 = require("../../lib/insights/index.js");
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var withUsage = _indexJs.createDocumentationMessageGenerator({
    name: 'hits'
});
var suit = _suitJs.component('Hits');
var HitsWithInsightsListener = _indexJs1.withInsightsListener(_hitsJsDefault.default);
var renderer = function renderer(_ref) {
    var renderState = _ref.renderState, cssClasses = _ref.cssClasses, containerNode = _ref.containerNode, templates = _ref.templates;
    return function(_ref2, isFirstRendering) {
        var receivedHits = _ref2.hits, results = _ref2.results, instantSearchInstance = _ref2.instantSearchInstance, insights = _ref2.insights, bindEvent = _ref2.bindEvent;
        if (isFirstRendering) {
            renderState.templateProps = _indexJs.prepareTemplateProps({
                defaultTemplates: _defaultTemplatesJsDefault.default,
                templatesConfig: instantSearchInstance.templatesConfig,
                templates: templates
            });
            return;
        }
        _preact.render(_preact.h(HitsWithInsightsListener, {
            cssClasses: cssClasses,
            hits: receivedHits,
            results: results,
            templateProps: renderState.templateProps,
            insights: insights,
            sendEvent: function sendEvent(event) {
                instantSearchInstance.sendEventToInsights(event);
            },
            bindEvent: bindEvent
        }), containerNode);
    };
};
var hits = function hits(widgetParams) {
    var _ref3 = widgetParams || {
    }, container = _ref3.container, escapeHTML = _ref3.escapeHTML, transformItems = _ref3.transformItems, _ref3$templates = _ref3.templates, templates = _ref3$templates === void 0 ? {
    } : _ref3$templates, _ref3$cssClasses = _ref3.cssClasses, userCssClasses = _ref3$cssClasses === void 0 ? {
    } : _ref3$cssClasses;
    if (!container) throw new Error(withUsage('The `container` option is required.'));
    var containerNode = _indexJs.getContainerNode(container);
    var cssClasses = {
        root: _classnamesDefault.default(suit(), userCssClasses.root),
        emptyRoot: _classnamesDefault.default(suit({
            modifierName: 'empty'
        }), userCssClasses.emptyRoot),
        list: _classnamesDefault.default(suit({
            descendantName: 'list'
        }), userCssClasses.list),
        item: _classnamesDefault.default(suit({
            descendantName: 'item'
        }), userCssClasses.item)
    };
    var specializedRenderer = renderer({
        containerNode: containerNode,
        cssClasses: cssClasses,
        renderState: {
        },
        templates: templates
    });
    var makeWidget = _indexJs1.withInsights(_connectHitsJsDefault.default)(specializedRenderer, function() {
        return _preact.render(null, containerNode);
    });
    return _objectSpread(_objectSpread({
    }, makeWidget({
        escapeHTML: escapeHTML,
        transformItems: transformItems
    })), {
    }, {
        $$widgetType: 'ais.hits'
    });
};
exports.default = hits;

},{"preact":"26zcy","classnames":"jocGM","../../connectors/hits/connectHits.js":"b5DNx","../../components/Hits/Hits.js":"as3BB","./defaultTemplates.js":"fxjDh","../../lib/utils/index.js":"etVYs","../../lib/suit.js":"du81D","../../lib/insights/index.js":"hnOzt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"26zcy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "render", ()=>S
);
parcelHelpers.export(exports, "hydrate", ()=>q
);
parcelHelpers.export(exports, "createElement", ()=>v
);
parcelHelpers.export(exports, "h", ()=>v
);
parcelHelpers.export(exports, "Fragment", ()=>d
);
parcelHelpers.export(exports, "createRef", ()=>p
);
parcelHelpers.export(exports, "isValidElement", ()=>i
);
parcelHelpers.export(exports, "Component", ()=>_
);
parcelHelpers.export(exports, "cloneElement", ()=>B
);
parcelHelpers.export(exports, "createContext", ()=>D
);
parcelHelpers.export(exports, "toChildArray", ()=>A
);
parcelHelpers.export(exports, "options", ()=>l
);
var n, l, u, i, t, r, o, f, e = {
}, c = [], s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function a(n1, l1) {
    for(var u in l1)n1[u] = l1[u];
    return n1;
}
function h(n2) {
    var l2 = n2.parentNode;
    l2 && l2.removeChild(n2);
}
function v(l3, u1, i1) {
    var t1, r1, o1, f1 = {
    };
    for(o1 in u1)"key" == o1 ? t1 = u1[o1] : "ref" == o1 ? r1 = u1[o1] : f1[o1] = u1[o1];
    if (arguments.length > 2 && (f1.children = arguments.length > 3 ? n.call(arguments, 2) : i1), "function" == typeof l3 && null != l3.defaultProps) for(o1 in l3.defaultProps)void 0 === f1[o1] && (f1[o1] = l3.defaultProps[o1]);
    return y(l3, f1, t1, r1, null);
}
function y(n3, i2, t2, r2, o2) {
    var f2 = {
        type: n3,
        props: i2,
        key: t2,
        ref: r2,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: null == o2 ? ++u : o2
    };
    return null == o2 && null != l.vnode && l.vnode(f2), f2;
}
function p() {
    return {
        current: null
    };
}
function d(n4) {
    return n4.children;
}
function _(n5, l4) {
    this.props = n5, this.context = l4;
}
function k(n6, l5) {
    if (null == l5) return n6.__ ? k(n6.__, n6.__.__k.indexOf(n6) + 1) : null;
    for(var u2; l5 < n6.__k.length; l5++)if (null != (u2 = n6.__k[l5]) && null != u2.__e) return u2.__e;
    return "function" == typeof n6.type ? k(n6) : null;
}
function b(n7) {
    var l6, u3;
    if (null != (n7 = n7.__) && null != n7.__c) {
        for(n7.__e = n7.__c.base = null, l6 = 0; l6 < n7.__k.length; l6++)if (null != (u3 = n7.__k[l6]) && null != u3.__e) {
            n7.__e = n7.__c.base = u3.__e;
            break;
        }
        return b(n7);
    }
}
function m(n8) {
    (!n8.__d && (n8.__d = !0) && t.push(n8) && !g.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(g);
}
function g() {
    for(var n9; g.__r = t.length;)n9 = t.sort(function(n10, l7) {
        return n10.__v.__b - l7.__v.__b;
    }), t = [], n9.some(function(n11) {
        var l8, u4, i3, t3, r3, o3;
        n11.__d && (r3 = (t3 = (l8 = n11).__v).__e, (o3 = l8.__P) && (u4 = [], (i3 = a({
        }, t3)).__v = t3.__v + 1, j(o3, t3, i3, l8.__n, void 0 !== o3.ownerSVGElement, null != t3.__h ? [
            r3
        ] : null, u4, null == r3 ? k(t3) : r3, t3.__h), z(u4, t3), t3.__e != r3 && b(t3)));
    });
}
function w(n12, l9, u5, i4, t4, r4, o4, f3, s1, a1) {
    var h1, v1, p1, _1, b1, m1, g1, w1 = i4 && i4.__k || c, A1 = w1.length;
    for(u5.__k = [], h1 = 0; h1 < l9.length; h1++)if (null != (_1 = u5.__k[h1] = null == (_1 = l9[h1]) || "boolean" == typeof _1 ? null : "string" == typeof _1 || "number" == typeof _1 || "bigint" == typeof _1 ? y(null, _1, null, null, _1) : Array.isArray(_1) ? y(d, {
        children: _1
    }, null, null, null) : _1.__b > 0 ? y(_1.type, _1.props, _1.key, null, _1.__v) : _1)) {
        if (_1.__ = u5, _1.__b = u5.__b + 1, null === (p1 = w1[h1]) || p1 && _1.key == p1.key && _1.type === p1.type) w1[h1] = void 0;
        else for(v1 = 0; v1 < A1; v1++){
            if ((p1 = w1[v1]) && _1.key == p1.key && _1.type === p1.type) {
                w1[v1] = void 0;
                break;
            }
            p1 = null;
        }
        j(n12, _1, p1 = p1 || e, t4, r4, o4, f3, s1, a1), b1 = _1.__e, (v1 = _1.ref) && p1.ref != v1 && (g1 || (g1 = []), p1.ref && g1.push(p1.ref, null, _1), g1.push(v1, _1.__c || b1, _1)), null != b1 ? (null == m1 && (m1 = b1), "function" == typeof _1.type && _1.__k === p1.__k ? _1.__d = s1 = x(_1, s1, n12) : s1 = P(n12, _1, p1, w1, b1, s1), "function" == typeof u5.type && (u5.__d = s1)) : s1 && p1.__e == s1 && s1.parentNode != n12 && (s1 = k(p1));
    }
    for(u5.__e = m1, h1 = A1; h1--;)null != w1[h1] && ("function" == typeof u5.type && null != w1[h1].__e && w1[h1].__e == u5.__d && (u5.__d = k(i4, h1 + 1)), N(w1[h1], w1[h1]));
    if (g1) for(h1 = 0; h1 < g1.length; h1++)M(g1[h1], g1[++h1], g1[++h1]);
}
function x(n13, l10, u6) {
    for(var i5, t5 = n13.__k, r5 = 0; t5 && r5 < t5.length; r5++)(i5 = t5[r5]) && (i5.__ = n13, l10 = "function" == typeof i5.type ? x(i5, l10, u6) : P(u6, i5, i5, t5, i5.__e, l10));
    return l10;
}
function A(n14, l11) {
    return l11 = l11 || [], null == n14 || "boolean" == typeof n14 || (Array.isArray(n14) ? n14.some(function(n15) {
        A(n15, l11);
    }) : l11.push(n14)), l11;
}
function P(n16, l12, u7, i6, t6, r6) {
    var o5, f4, e1;
    if (void 0 !== l12.__d) o5 = l12.__d, l12.__d = void 0;
    else if (null == u7 || t6 != r6 || null == t6.parentNode) n: if (null == r6 || r6.parentNode !== n16) n16.appendChild(t6), o5 = null;
    else {
        for(f4 = r6, e1 = 0; (f4 = f4.nextSibling) && e1 < i6.length; e1 += 2)if (f4 == t6) break n;
        n16.insertBefore(t6, r6), o5 = r6;
    }
    return void 0 !== o5 ? o5 : t6.nextSibling;
}
function C(n17, l13, u8, i7, t7) {
    var r7;
    for(r7 in u8)"children" === r7 || "key" === r7 || r7 in l13 || H(n17, r7, null, u8[r7], i7);
    for(r7 in l13)t7 && "function" != typeof l13[r7] || "children" === r7 || "key" === r7 || "value" === r7 || "checked" === r7 || u8[r7] === l13[r7] || H(n17, r7, l13[r7], u8[r7], i7);
}
function $(n18, l14, u9) {
    "-" === l14[0] ? n18.setProperty(l14, u9) : n18[l14] = null == u9 ? "" : "number" != typeof u9 || s.test(l14) ? u9 : u9 + "px";
}
function H(n19, l15, u10, i8, t8) {
    var r8;
    n: if ("style" === l15) {
        if ("string" == typeof u10) n19.style.cssText = u10;
        else {
            if ("string" == typeof i8 && (n19.style.cssText = i8 = ""), i8) for(l15 in i8)u10 && l15 in u10 || $(n19.style, l15, "");
            if (u10) for(l15 in u10)i8 && u10[l15] === i8[l15] || $(n19.style, l15, u10[l15]);
        }
    } else if ("o" === l15[0] && "n" === l15[1]) r8 = l15 !== (l15 = l15.replace(/Capture$/, "")), l15 = l15.toLowerCase() in n19 ? l15.toLowerCase().slice(2) : l15.slice(2), n19.l || (n19.l = {
    }), n19.l[l15 + r8] = u10, u10 ? i8 || n19.addEventListener(l15, r8 ? T : I, r8) : n19.removeEventListener(l15, r8 ? T : I, r8);
    else if ("dangerouslySetInnerHTML" !== l15) {
        if (t8) l15 = l15.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
        else if ("href" !== l15 && "list" !== l15 && "form" !== l15 && "tabIndex" !== l15 && "download" !== l15 && l15 in n19) try {
            n19[l15] = null == u10 ? "" : u10;
            break n;
        } catch (n) {
        }
        "function" == typeof u10 || (null != u10 && (!1 !== u10 || "a" === l15[0] && "r" === l15[1]) ? n19.setAttribute(l15, u10) : n19.removeAttribute(l15));
    }
}
function I(n20) {
    this.l[n20.type + !1](l.event ? l.event(n20) : n20);
}
function T(n21) {
    this.l[n21.type + !0](l.event ? l.event(n21) : n21);
}
function j(n22, u11, i9, t9, r9, o6, f5, e2, c1) {
    var s2, h2, v2, y1, p2, k1, b2, m2, g2, x1, A2, P1 = u11.type;
    if (void 0 !== u11.constructor) return null;
    null != i9.__h && (c1 = i9.__h, e2 = u11.__e = i9.__e, u11.__h = null, o6 = [
        e2
    ]), (s2 = l.__b) && s2(u11);
    try {
        n: if ("function" == typeof P1) {
            if (m2 = u11.props, g2 = (s2 = P1.contextType) && t9[s2.__c], x1 = s2 ? g2 ? g2.props.value : s2.__ : t9, i9.__c ? b2 = (h2 = u11.__c = i9.__c).__ = h2.__E : ("prototype" in P1 && P1.prototype.render ? u11.__c = h2 = new P1(m2, x1) : (u11.__c = h2 = new _(m2, x1), h2.constructor = P1, h2.render = O), g2 && g2.sub(h2), h2.props = m2, h2.state || (h2.state = {
            }), h2.context = x1, h2.__n = t9, v2 = h2.__d = !0, h2.__h = []), null == h2.__s && (h2.__s = h2.state), null != P1.getDerivedStateFromProps && (h2.__s == h2.state && (h2.__s = a({
            }, h2.__s)), a(h2.__s, P1.getDerivedStateFromProps(m2, h2.__s))), y1 = h2.props, p2 = h2.state, v2) null == P1.getDerivedStateFromProps && null != h2.componentWillMount && h2.componentWillMount(), null != h2.componentDidMount && h2.__h.push(h2.componentDidMount);
            else {
                if (null == P1.getDerivedStateFromProps && m2 !== y1 && null != h2.componentWillReceiveProps && h2.componentWillReceiveProps(m2, x1), !h2.__e && null != h2.shouldComponentUpdate && !1 === h2.shouldComponentUpdate(m2, h2.__s, x1) || u11.__v === i9.__v) {
                    h2.props = m2, h2.state = h2.__s, u11.__v !== i9.__v && (h2.__d = !1), h2.__v = u11, u11.__e = i9.__e, u11.__k = i9.__k, u11.__k.forEach(function(n23) {
                        n23 && (n23.__ = u11);
                    }), h2.__h.length && f5.push(h2);
                    break n;
                }
                null != h2.componentWillUpdate && h2.componentWillUpdate(m2, h2.__s, x1), null != h2.componentDidUpdate && h2.__h.push(function() {
                    h2.componentDidUpdate(y1, p2, k1);
                });
            }
            h2.context = x1, h2.props = m2, h2.state = h2.__s, (s2 = l.__r) && s2(u11), h2.__d = !1, h2.__v = u11, h2.__P = n22, s2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s, null != h2.getChildContext && (t9 = a(a({
            }, t9), h2.getChildContext())), v2 || null == h2.getSnapshotBeforeUpdate || (k1 = h2.getSnapshotBeforeUpdate(y1, p2)), A2 = null != s2 && s2.type === d && null == s2.key ? s2.props.children : s2, w(n22, Array.isArray(A2) ? A2 : [
                A2
            ], u11, i9, t9, r9, o6, f5, e2, c1), h2.base = u11.__e, u11.__h = null, h2.__h.length && f5.push(h2), b2 && (h2.__E = h2.__ = null), h2.__e = !1;
        } else null == o6 && u11.__v === i9.__v ? (u11.__k = i9.__k, u11.__e = i9.__e) : u11.__e = L(i9.__e, u11, i9, t9, r9, o6, f5, c1);
        (s2 = l.diffed) && s2(u11);
    } catch (n24) {
        u11.__v = null, (c1 || null != o6) && (u11.__e = e2, u11.__h = !!c1, o6[o6.indexOf(e2)] = null), l.__e(n24, u11, i9);
    }
}
function z(n25, u12) {
    l.__c && l.__c(u12, n25), n25.some(function(u13) {
        try {
            n25 = u13.__h, u13.__h = [], n25.some(function(n26) {
                n26.call(u13);
            });
        } catch (n27) {
            l.__e(n27, u13.__v);
        }
    });
}
function L(l16, u14, i10, t10, r10, o7, f6, c2) {
    var s3, a2, v3, y2 = i10.props, p3 = u14.props, d1 = u14.type, _2 = 0;
    if ("svg" === d1 && (r10 = !0), null != o7) {
        for(; _2 < o7.length; _2++)if ((s3 = o7[_2]) && "setAttribute" in s3 == !!d1 && (d1 ? s3.localName === d1 : 3 === s3.nodeType)) {
            l16 = s3, o7[_2] = null;
            break;
        }
    }
    if (null == l16) {
        if (null === d1) return document.createTextNode(p3);
        l16 = r10 ? document.createElementNS("http://www.w3.org/2000/svg", d1) : document.createElement(d1, p3.is && p3), o7 = null, c2 = !1;
    }
    if (null === d1) y2 === p3 || c2 && l16.data === p3 || (l16.data = p3);
    else {
        if (o7 = o7 && n.call(l16.childNodes), a2 = (y2 = i10.props || e).dangerouslySetInnerHTML, v3 = p3.dangerouslySetInnerHTML, !c2) {
            if (null != o7) for(y2 = {
            }, _2 = 0; _2 < l16.attributes.length; _2++)y2[l16.attributes[_2].name] = l16.attributes[_2].value;
            (v3 || a2) && (v3 && (a2 && v3.__html == a2.__html || v3.__html === l16.innerHTML) || (l16.innerHTML = v3 && v3.__html || ""));
        }
        if (C(l16, p3, y2, r10, c2), v3) u14.__k = [];
        else if (_2 = u14.props.children, w(l16, Array.isArray(_2) ? _2 : [
            _2
        ], u14, i10, t10, r10 && "foreignObject" !== d1, o7, f6, o7 ? o7[0] : i10.__k && k(i10, 0), c2), null != o7) for(_2 = o7.length; _2--;)null != o7[_2] && h(o7[_2]);
        c2 || ("value" in p3 && void 0 !== (_2 = p3.value) && (_2 !== y2.value || _2 !== l16.value || "progress" === d1 && !_2) && H(l16, "value", _2, y2.value, !1), "checked" in p3 && void 0 !== (_2 = p3.checked) && _2 !== l16.checked && H(l16, "checked", _2, y2.checked, !1));
    }
    return l16;
}
function M(n28, u15, i11) {
    try {
        "function" == typeof n28 ? n28(u15) : n28.current = u15;
    } catch (n29) {
        l.__e(n29, i11);
    }
}
function N(n30, u16, i12) {
    var t11, r11;
    if (l.unmount && l.unmount(n30), (t11 = n30.ref) && (t11.current && t11.current !== n30.__e || M(t11, null, u16)), null != (t11 = n30.__c)) {
        if (t11.componentWillUnmount) try {
            t11.componentWillUnmount();
        } catch (n31) {
            l.__e(n31, u16);
        }
        t11.base = t11.__P = null;
    }
    if (t11 = n30.__k) for(r11 = 0; r11 < t11.length; r11++)t11[r11] && N(t11[r11], u16, "function" != typeof n30.type);
    i12 || null == n30.__e || h(n30.__e), n30.__e = n30.__d = void 0;
}
function O(n32, l, u17) {
    return this.constructor(n32, u17);
}
function S(u18, i13, t12) {
    var r12, o8, f7;
    l.__ && l.__(u18, i13), o8 = (r12 = "function" == typeof t12) ? null : t12 && t12.__k || i13.__k, f7 = [], j(i13, u18 = (!r12 && t12 || i13).__k = v(d, null, [
        u18
    ]), o8 || e, e, void 0 !== i13.ownerSVGElement, !r12 && t12 ? [
        t12
    ] : o8 ? null : i13.firstChild ? n.call(i13.childNodes) : null, f7, !r12 && t12 ? t12 : o8 ? o8.__e : i13.firstChild, r12), z(f7, u18);
}
function q(n33, l17) {
    S(n33, l17, q);
}
function B(l18, u19, i14) {
    var t13, r13, o9, f8 = a({
    }, l18.props);
    for(o9 in u19)"key" == o9 ? t13 = u19[o9] : "ref" == o9 ? r13 = u19[o9] : f8[o9] = u19[o9];
    return arguments.length > 2 && (f8.children = arguments.length > 3 ? n.call(arguments, 2) : i14), y(l18.type, f8, t13 || l18.key, r13 || l18.ref, null);
}
function D(n34, l19) {
    var u20 = {
        __c: l19 = "__cC" + f++,
        __: n34,
        Consumer: function(n35, l20) {
            return n35.children(l20);
        },
        Provider: function(n36) {
            var u21, i15;
            return this.getChildContext || (u21 = [], (i15 = {
            })[l19] = this, this.getChildContext = function() {
                return i15;
            }, this.shouldComponentUpdate = function(n37) {
                this.props.value !== n37.value && u21.some(m);
            }, this.sub = function(n38) {
                u21.push(n38);
                var l21 = n38.componentWillUnmount;
                n38.componentWillUnmount = function() {
                    u21.splice(u21.indexOf(n38), 1), l21 && l21.call(n38);
                };
            }), n36.children;
        }
    };
    return u20.Provider.__ = u20.Consumer.contextType = u20;
}
n = c.slice, l = {
    __e: function(n39, l22) {
        for(var u22, i16, t14; l22 = l22.__;)if ((u22 = l22.__c) && !u22.__) try {
            if ((i16 = u22.constructor) && null != i16.getDerivedStateFromError && (u22.setState(i16.getDerivedStateFromError(n39)), t14 = u22.__d), null != u22.componentDidCatch && (u22.componentDidCatch(n39), t14 = u22.__d), t14) return u22.__E = u22;
        } catch (l23) {
            n39 = l23;
        }
        throw n39;
    }
}, u = 0, i = function(n40) {
    return null != n40 && void 0 === n40.constructor;
}, _.prototype.setState = function(n41, l24) {
    var u23;
    u23 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = a({
    }, this.state), "function" == typeof n41 && (n41 = n41(a({
    }, u23), this.props)), n41 && a(u23, n41), null != n41 && this.__v && (l24 && this.__h.push(l24), m(this));
}, _.prototype.forceUpdate = function(n42) {
    this.__v && (this.__e = !0, n42 && this.__h.push(n42), m(this));
}, _.prototype.render = d, t = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g.__r = 0, f = 0;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jocGM":[function(require,module,exports) {
(function() {
    var hasOwn = {
    }.hasOwnProperty;
    function classNames() {
        var classes = [];
        for(var i = 0; i < arguments.length; i++){
            var arg = arguments[i];
            if (!arg) continue;
            var argType = typeof arg;
            if (argType === 'string' || argType === 'number') classes.push(arg);
            else if (Array.isArray(arg)) {
                if (arg.length) {
                    var inner = classNames.apply(null, arg);
                    if (inner) classes.push(inner);
                }
            } else if (argType === 'object') {
                if (arg.toString === Object.prototype.toString) {
                    for(var key in arg)if (hasOwn.call(arg, key) && arg[key]) classes.push(key);
                } else classes.push(arg.toString());
            }
        }
        return classes.join(' ');
    }
    if (typeof module !== 'undefined' && module.exports) {
        classNames.default = classNames;
        module.exports = classNames;
    } else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) // register as 'classnames', consistent with npm package name
    define('classnames', [], function() {
        return classNames;
    });
    else window.classNames = classNames;
})();

},{}],"b5DNx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../lib/utils/index.js");
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var withUsage = _indexJs.createDocumentationMessageGenerator({
    name: 'hits',
    connector: true
});
var connectHits = function connectHits(renderFn) {
    var unmountFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _indexJs.noop;
    _indexJs.checkRendering(renderFn, withUsage());
    return function(widgetParams) {
        var _ref = widgetParams || {
        }, _ref$escapeHTML = _ref.escapeHTML, escapeHTML = _ref$escapeHTML === void 0 ? true : _ref$escapeHTML, _ref$transformItems = _ref.transformItems, transformItems = _ref$transformItems === void 0 ? function(items) {
            return items;
        } : _ref$transformItems;
        var sendEvent;
        var bindEvent;
        return {
            $$type: 'ais.hits',
            init: function init(initOptions) {
                renderFn(_objectSpread(_objectSpread({
                }, this.getWidgetRenderState(initOptions)), {
                }, {
                    instantSearchInstance: initOptions.instantSearchInstance
                }), true);
            },
            render: function render(renderOptions) {
                var renderState = this.getWidgetRenderState(renderOptions);
                renderState.sendEvent('view', renderState.hits);
                renderFn(_objectSpread(_objectSpread({
                }, renderState), {
                }, {
                    instantSearchInstance: renderOptions.instantSearchInstance
                }), false);
            },
            getRenderState: function getRenderState(renderState, renderOptions) {
                return _objectSpread(_objectSpread({
                }, renderState), {
                }, {
                    hits: this.getWidgetRenderState(renderOptions)
                });
            },
            getWidgetRenderState: function getWidgetRenderState(_ref2) {
                var results = _ref2.results, helper = _ref2.helper, instantSearchInstance = _ref2.instantSearchInstance;
                if (!sendEvent) sendEvent = _indexJs.createSendEventForHits({
                    instantSearchInstance: instantSearchInstance,
                    index: helper.getIndex(),
                    widgetType: this.$$type
                });
                if (!bindEvent) bindEvent = _indexJs.createBindEventForHits({
                    index: helper.getIndex(),
                    widgetType: this.$$type
                });
                if (!results) return {
                    hits: [],
                    results: undefined,
                    sendEvent: sendEvent,
                    bindEvent: bindEvent,
                    widgetParams: widgetParams
                };
                if (escapeHTML && results.hits.length > 0) results.hits = _indexJs.escapeHits(results.hits);
                var hitsWithAbsolutePosition = _indexJs.addAbsolutePosition(results.hits, results.page, results.hitsPerPage);
                var hitsWithAbsolutePositionAndQueryID = _indexJs.addQueryID(hitsWithAbsolutePosition, results.queryID);
                var transformedHits = transformItems(hitsWithAbsolutePositionAndQueryID);
                return {
                    hits: transformedHits,
                    results: results,
                    sendEvent: sendEvent,
                    bindEvent: bindEvent,
                    widgetParams: widgetParams
                };
            },
            dispose: function dispose(_ref3) {
                var state = _ref3.state;
                unmountFn();
                if (!escapeHTML) return state;
                return state.setQueryParameters(Object.keys(_indexJs.TAG_PLACEHOLDER).reduce(function(acc, key) {
                    return _objectSpread(_objectSpread({
                    }, acc), {
                    }, _defineProperty({
                    }, key, undefined));
                }, {
                }));
            },
            getWidgetSearchParameters: function getWidgetSearchParameters(state) {
                if (!escapeHTML) return state;
                return state.setQueryParameters(_indexJs.TAG_PLACEHOLDER);
            }
        };
    };
};
exports.default = connectHits;

},{"../../lib/utils/index.js":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"as3BB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** @jsx h */ var _preact = require("preact");
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _templateJs = require("../Template/Template.js");
var _templateJsDefault = parcelHelpers.interopDefault(_templateJs);
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
var Hits = function Hits(_ref) {
    var results = _ref.results, hits = _ref.hits, bindEvent = _ref.bindEvent, cssClasses = _ref.cssClasses, templateProps = _ref.templateProps;
    if (results.hits.length === 0) return _preact.h(_templateJsDefault.default, _extends({
    }, templateProps, {
        templateKey: "empty",
        rootProps: {
            className: _classnamesDefault.default(cssClasses.root, cssClasses.emptyRoot)
        },
        data: results
    }));
    return _preact.h("div", {
        className: cssClasses.root
    }, _preact.h("ol", {
        className: cssClasses.list
    }, hits.map(function(hit, index) {
        return _preact.h(_templateJsDefault.default, _extends({
        }, templateProps, {
            templateKey: "item",
            rootTagName: "li",
            rootProps: {
                className: cssClasses.item
            },
            key: hit.objectID,
            data: _objectSpread(_objectSpread({
            }, hit), {
            }, {
                __hitIndex: index
            }),
            bindEvent: bindEvent
        }));
    })));
};
exports.default = Hits;

},{"preact":"26zcy","classnames":"jocGM","../Template/Template.js":"aVPg5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aVPg5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** @jsx h */ var _preact = require("preact");
var _indexJs = require("../../lib/utils/index.js");
function _typeof(obj1) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj1);
}
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o1, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o1, p1);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o2) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o2);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var defaultProps = {
    data: {
    },
    rootTagName: 'div',
    useCustomCompileOptions: {
    },
    templates: {
    },
    templatesConfig: {
    }
};
// @TODO: Template should be a generic and receive TData to pass to Templates (to avoid TTemplateData to be set as `any`)
var Template = /*#__PURE__*/ function(_Component) {
    _inherits(Template1, _Component);
    var _super = _createSuper(Template1);
    function Template1() {
        _classCallCheck(this, Template1);
        return _super.apply(this, arguments);
    }
    _createClass(Template1, [
        {
            key: "shouldComponentUpdate",
            value: function shouldComponentUpdate(nextProps) {
                return !_indexJs.isEqual(this.props.data, nextProps.data) || this.props.templateKey !== nextProps.templateKey || !_indexJs.isEqual(this.props.rootProps, nextProps.rootProps);
            }
        },
        {
            key: "render",
            value: function render() {
                var RootTagName = this.props.rootTagName;
                var useCustomCompileOptions = this.props.useCustomCompileOptions[this.props.templateKey];
                var compileOptions = useCustomCompileOptions ? this.props.templatesConfig.compileOptions : {
                };
                var content = _indexJs.renderTemplate({
                    templates: this.props.templates,
                    templateKey: this.props.templateKey,
                    compileOptions: compileOptions,
                    helpers: this.props.templatesConfig.helpers,
                    data: this.props.data,
                    bindEvent: this.props.bindEvent
                });
                if (content === null) // Adds a noscript to the DOM but virtual DOM is null
                // See http://facebook.github.io/react/docs/component-specs.html#render
                return null;
                return _preact.h(RootTagName, _extends({
                }, this.props.rootProps, {
                    dangerouslySetInnerHTML: {
                        __html: content
                    }
                }));
            }
        }
    ]);
    return Template1;
}(_preact.Component);
_defineProperty(Template, "defaultProps", defaultProps);
exports.default = Template;

},{"preact":"26zcy","../../lib/utils/index.js":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fxjDh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var defaultTemplates = {
    empty: 'No results',
    item: function item(data) {
        return JSON.stringify(data, null, 2);
    }
};
exports.default = defaultTemplates;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hnOzt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "withInsights", ()=>_clientJsDefault.default
);
parcelHelpers.export(exports, "inferInsightsPayload", ()=>_clientJs.inferPayload
);
parcelHelpers.export(exports, "withInsightsListener", ()=>_listenerJsDefault.default
);
var _clientJs = require("./client.js");
var _clientJsDefault = parcelHelpers.interopDefault(_clientJs);
var _listenerJs = require("./listener.js");
var _listenerJsDefault = parcelHelpers.interopDefault(_listenerJs);

},{"./client.js":"1CWch","./listener.js":"hhB68","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1CWch":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "inferPayload", ()=>inferPayload
);
var _indexJs = require("../utils/index.js");
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var getSelectedHits = function getSelectedHits(hits, selectedObjectIDs) {
    return selectedObjectIDs.map(function(objectID) {
        var hit = _indexJs.find(hits, function(h) {
            return h.objectID === objectID;
        });
        if (typeof hit === 'undefined') throw new Error("Could not find objectID \"".concat(objectID, "\" passed to `clickedObjectIDsAfterSearch` in the returned hits. This is necessary to infer the absolute position and the query ID."));
        return hit;
    });
};
var getQueryID = function getQueryID(selectedHits) {
    var queryIDs = _indexJs.uniq(selectedHits.map(function(hit) {
        return hit.__queryID;
    }));
    if (queryIDs.length > 1) throw new Error('Insights currently allows a single `queryID`. The `objectIDs` provided map to multiple `queryID`s.');
    var queryID = queryIDs[0];
    if (typeof queryID !== 'string') throw new Error("Could not infer `queryID`. Ensure InstantSearch `clickAnalytics: true` was added with the Configure widget.\n\nSee: https://alg.li/lNiZZ7");
    return queryID;
};
var getPositions = function getPositions(selectedHits) {
    return selectedHits.map(function(hit) {
        return hit.__position;
    });
};
var inferPayload = function inferPayload(_ref) {
    var method = _ref.method, results = _ref.results, hits = _ref.hits, objectIDs = _ref.objectIDs;
    var index = results.index;
    var selectedHits = getSelectedHits(hits, objectIDs);
    var queryID = getQueryID(selectedHits);
    switch(method){
        case 'clickedObjectIDsAfterSearch':
            var positions = getPositions(selectedHits);
            return {
                index: index,
                queryID: queryID,
                objectIDs: objectIDs,
                positions: positions
            };
        case 'convertedObjectIDsAfterSearch':
            return {
                index: index,
                queryID: queryID,
                objectIDs: objectIDs
            };
        default:
            throw new Error("Unsupported method passed to insights: \"".concat(method, "\"."));
    }
};
var wrapInsightsClient = function wrapInsightsClient(aa, results, hits) {
    return function(method) {
        for(var _len = arguments.length, payloads = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)payloads[_key - 1] = arguments[_key];
        var payload = payloads[0];
        _indexJs.warning(false, "`insights` function has been deprecated. It is still supported in 4.x releases, but not further. It is replaced by the `insights` middleware.\n\nFor more information, visit https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/click-through-and-conversions/how-to/send-click-and-conversion-events-with-instantsearch/js/");
        if (!aa) {
            var withInstantSearchUsage = _indexJs.createDocumentationMessageGenerator({
                name: 'instantsearch'
            });
            throw new Error(withInstantSearchUsage('The `insightsClient` option has not been provided to `instantsearch`.'));
        }
        if (!Array.isArray(payload.objectIDs)) throw new TypeError('Expected `objectIDs` to be an array.');
        var inferredPayload = inferPayload({
            method: method,
            results: results,
            hits: hits,
            objectIDs: payload.objectIDs
        });
        aa(method, _objectSpread(_objectSpread({
        }, inferredPayload), payload));
    };
};
function withInsights(connector) {
    return function(renderFn, unmountFn) {
        return connector(function(renderOptions, isFirstRender) {
            var results = renderOptions.results, hits = renderOptions.hits, instantSearchInstance = renderOptions.instantSearchInstance;
            if (results && hits && instantSearchInstance) {
                var insights = wrapInsightsClient(instantSearchInstance.insightsClient, results, hits);
                return renderFn(_objectSpread(_objectSpread({
                }, renderOptions), {
                }, {
                    insights: insights
                }), isFirstRender);
            }
            return renderFn(renderOptions, isFirstRender);
        }, unmountFn);
    };
}
exports.default = withInsights;

},{"../utils/index.js":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hhB68":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** @jsx h */ var _preact = require("preact");
var _indexJs = require("../utils/index.js");
var _insightsJs = require("../../helpers/insights.js");
var findInsightsTarget = function findInsightsTarget(startElement, endElement, validator) {
    var element = startElement;
    while(element && !validator(element)){
        if (element === endElement) return null;
        element = element.parentElement;
    }
    return element;
};
var parseInsightsEvent = function parseInsightsEvent(element) {
    var serializedPayload = element.getAttribute('data-insights-event');
    if (typeof serializedPayload !== 'string') throw new Error('The insights middleware expects `data-insights-event` to be a base64-encoded JSON string.');
    try {
        return _indexJs.deserializePayload(serializedPayload);
    } catch (error) {
        throw new Error('The insights middleware was unable to parse `data-insights-event`.');
    }
};
var insightsListener = function insightsListener(BaseComponent) {
    function WithInsightsListener(props) {
        var handleClick = function handleClick(event) {
            if (props.sendEvent) {
                // new way with insights middleware
                var targetWithEvent = findInsightsTarget(event.target, event.currentTarget, function(element) {
                    return element.hasAttribute('data-insights-event');
                });
                if (targetWithEvent) {
                    var payload = parseInsightsEvent(targetWithEvent);
                    payload.forEach(function(single) {
                        return props.sendEvent(single);
                    });
                }
            } // old way, e.g. instantsearch.insights("clickedObjectIDsAfterSearch", { .. })
            var insightsTarget = findInsightsTarget(event.target, event.currentTarget, function(element) {
                return _insightsJs.hasDataAttributes(element);
            });
            if (insightsTarget) {
                var _readDataAttributes = _insightsJs.readDataAttributes(insightsTarget), method = _readDataAttributes.method, _payload = _readDataAttributes.payload;
                props.insights(method, _payload);
            }
        };
        return _preact.h("div", {
            onClick: handleClick
        }, _preact.h(BaseComponent, props));
    }
    return WithInsightsListener;
};
exports.default = insightsListener;

},{"preact":"26zcy","../utils/index.js":"etVYs","../../helpers/insights.js":"2EZr9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aGC8J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** @jsx h */ var _preact = require("preact");
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _paginationJs = require("../../components/Pagination/Pagination.js");
var _paginationJsDefault = parcelHelpers.interopDefault(_paginationJs);
var _connectPaginationJs = require("../../connectors/pagination/connectPagination.js");
var _connectPaginationJsDefault = parcelHelpers.interopDefault(_connectPaginationJs);
var _indexJs = require("../../lib/utils/index.js");
var _suitJs = require("../../lib/suit.js");
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var suit = _suitJs.component('Pagination');
var withUsage = _indexJs.createDocumentationMessageGenerator({
    name: 'pagination'
});
var defaultTemplates = {
    previous: '‹',
    next: '›',
    first: '«',
    last: '»'
};
var renderer = function renderer(_ref) {
    var containerNode = _ref.containerNode, cssClasses = _ref.cssClasses, templates = _ref.templates, showFirst = _ref.showFirst, showLast = _ref.showLast, showPrevious = _ref.showPrevious, showNext = _ref.showNext, scrollToNode = _ref.scrollToNode;
    return function(_ref2, isFirstRendering) {
        var createURL = _ref2.createURL, currentRefinement = _ref2.currentRefinement, nbPages = _ref2.nbPages, pages = _ref2.pages, isFirstPage = _ref2.isFirstPage, isLastPage = _ref2.isLastPage, refine = _ref2.refine;
        if (isFirstRendering) return;
        var setCurrentPage = function setCurrentPage(pageNumber) {
            refine(pageNumber);
            if (scrollToNode !== false) scrollToNode.scrollIntoView();
        };
        _preact.render(_preact.h(_paginationJsDefault.default, {
            createURL: createURL,
            cssClasses: cssClasses,
            currentPage: currentRefinement,
            templates: templates,
            nbPages: nbPages,
            pages: pages,
            isFirstPage: isFirstPage,
            isLastPage: isLastPage,
            setCurrentPage: setCurrentPage,
            showFirst: showFirst,
            showLast: showLast,
            showPrevious: showPrevious,
            showNext: showNext
        }), containerNode);
    };
};
var pagination = function pagination(widgetParams) {
    var _ref3 = widgetParams || {
    }, container = _ref3.container, _ref3$templates = _ref3.templates, userTemplates = _ref3$templates === void 0 ? {
    } : _ref3$templates, _ref3$cssClasses = _ref3.cssClasses, userCssClasses = _ref3$cssClasses === void 0 ? {
    } : _ref3$cssClasses, totalPages = _ref3.totalPages, padding = _ref3.padding, _ref3$showFirst = _ref3.showFirst, showFirst = _ref3$showFirst === void 0 ? true : _ref3$showFirst, _ref3$showLast = _ref3.showLast, showLast = _ref3$showLast === void 0 ? true : _ref3$showLast, _ref3$showPrevious = _ref3.showPrevious, showPrevious = _ref3$showPrevious === void 0 ? true : _ref3$showPrevious, _ref3$showNext = _ref3.showNext, showNext = _ref3$showNext === void 0 ? true : _ref3$showNext, _ref3$scrollTo = _ref3.scrollTo, userScrollTo = _ref3$scrollTo === void 0 ? 'body' : _ref3$scrollTo;
    if (!container) throw new Error(withUsage('The `container` option is required.'));
    var containerNode = _indexJs.getContainerNode(container);
    var scrollTo = userScrollTo === true ? 'body' : userScrollTo;
    var scrollToNode = scrollTo !== false ? _indexJs.getContainerNode(scrollTo) : false;
    var cssClasses = {
        root: _classnamesDefault.default(suit(), userCssClasses.root),
        noRefinementRoot: _classnamesDefault.default(suit({
            modifierName: 'noRefinement'
        }), userCssClasses.noRefinementRoot),
        list: _classnamesDefault.default(suit({
            descendantName: 'list'
        }), userCssClasses.list),
        item: _classnamesDefault.default(suit({
            descendantName: 'item'
        }), userCssClasses.item),
        firstPageItem: _classnamesDefault.default(suit({
            descendantName: 'item',
            modifierName: 'firstPage'
        }), userCssClasses.firstPageItem),
        lastPageItem: _classnamesDefault.default(suit({
            descendantName: 'item',
            modifierName: 'lastPage'
        }), userCssClasses.lastPageItem),
        previousPageItem: _classnamesDefault.default(suit({
            descendantName: 'item',
            modifierName: 'previousPage'
        }), userCssClasses.previousPageItem),
        nextPageItem: _classnamesDefault.default(suit({
            descendantName: 'item',
            modifierName: 'nextPage'
        }), userCssClasses.nextPageItem),
        pageItem: _classnamesDefault.default(suit({
            descendantName: 'item',
            modifierName: 'page'
        }), userCssClasses.pageItem),
        selectedItem: _classnamesDefault.default(suit({
            descendantName: 'item',
            modifierName: 'selected'
        }), userCssClasses.selectedItem),
        disabledItem: _classnamesDefault.default(suit({
            descendantName: 'item',
            modifierName: 'disabled'
        }), userCssClasses.disabledItem),
        link: _classnamesDefault.default(suit({
            descendantName: 'link'
        }), userCssClasses.link)
    };
    var templates = _objectSpread(_objectSpread({
    }, defaultTemplates), userTemplates);
    var specializedRenderer = renderer({
        containerNode: containerNode,
        cssClasses: cssClasses,
        templates: templates,
        showFirst: showFirst,
        showLast: showLast,
        showPrevious: showPrevious,
        showNext: showNext,
        scrollToNode: scrollToNode
    });
    var makeWidget = _connectPaginationJsDefault.default(specializedRenderer, function() {
        return _preact.render(null, containerNode);
    });
    return _objectSpread(_objectSpread({
    }, makeWidget({
        totalPages: totalPages,
        padding: padding
    })), {
    }, {
        $$widgetType: 'ais.pagination'
    });
};
exports.default = pagination;

},{"preact":"26zcy","classnames":"jocGM","../../components/Pagination/Pagination.js":"4kiOm","../../connectors/pagination/connectPagination.js":"bHouJ","../../lib/utils/index.js":"etVYs","../../lib/suit.js":"du81D","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4kiOm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** @jsx h */ var _preact = require("preact");
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _indexJs = require("../../lib/utils/index.js");
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function Pagination(props) {
    function createClickHandler(pageNumber) {
        return function(event) {
            if (_indexJs.isSpecialClick(event)) // do not alter the default browser behavior
            // if one special key is down
            return;
            event.preventDefault();
            props.setCurrentPage(pageNumber);
        };
    }
    return _preact.h("div", {
        className: _classnamesDefault.default(props.cssClasses.root, _defineProperty({
        }, props.cssClasses.noRefinementRoot, props.nbPages <= 1))
    }, _preact.h("ul", {
        className: props.cssClasses.list
    }, props.showFirst && _preact.h(PaginationLink, {
        ariaLabel: "First",
        className: props.cssClasses.firstPageItem,
        isDisabled: props.isFirstPage,
        label: props.templates.first,
        pageNumber: 0,
        createURL: props.createURL,
        cssClasses: props.cssClasses,
        createClickHandler: createClickHandler
    }), props.showPrevious && _preact.h(PaginationLink, {
        ariaLabel: "Previous",
        className: props.cssClasses.previousPageItem,
        isDisabled: props.isFirstPage,
        label: props.templates.previous,
        pageNumber: props.currentPage - 1,
        createURL: props.createURL,
        cssClasses: props.cssClasses,
        createClickHandler: createClickHandler
    }), props.pages.map(function(pageNumber) {
        return _preact.h(PaginationLink, {
            key: pageNumber,
            ariaLabel: "".concat(pageNumber + 1),
            className: props.cssClasses.pageItem,
            isSelected: pageNumber === props.currentPage,
            label: "".concat(pageNumber + 1),
            pageNumber: pageNumber,
            createURL: props.createURL,
            cssClasses: props.cssClasses,
            createClickHandler: createClickHandler
        });
    }), props.showNext && _preact.h(PaginationLink, {
        ariaLabel: "Next",
        className: props.cssClasses.nextPageItem,
        isDisabled: props.isLastPage,
        label: props.templates.next,
        pageNumber: props.currentPage + 1,
        createURL: props.createURL,
        cssClasses: props.cssClasses,
        createClickHandler: createClickHandler
    }), props.showLast && _preact.h(PaginationLink, {
        ariaLabel: "Last",
        className: props.cssClasses.lastPageItem,
        isDisabled: props.isLastPage,
        label: props.templates.last,
        pageNumber: props.nbPages - 1,
        createURL: props.createURL,
        cssClasses: props.cssClasses,
        createClickHandler: createClickHandler
    })));
}
function PaginationLink(_ref) {
    var label = _ref.label, ariaLabel = _ref.ariaLabel, pageNumber = _ref.pageNumber, className = _ref.className, _ref$isDisabled = _ref.isDisabled, isDisabled = _ref$isDisabled === void 0 ? false : _ref$isDisabled, _ref$isSelected = _ref.isSelected, isSelected = _ref$isSelected === void 0 ? false : _ref$isSelected, cssClasses = _ref.cssClasses, createURL = _ref.createURL, createClickHandler = _ref.createClickHandler;
    return _preact.h("li", {
        className: _classnamesDefault.default(cssClasses.item, className, isDisabled && cssClasses.disabledItem, isSelected && cssClasses.selectedItem)
    }, isDisabled ? _preact.h("span", {
        className: cssClasses.link,
        dangerouslySetInnerHTML: {
            __html: label
        }
    }) : _preact.h("a", {
        className: cssClasses.link,
        "aria-label": ariaLabel,
        href: createURL(pageNumber),
        onClick: createClickHandler(pageNumber),
        dangerouslySetInnerHTML: {
            __html: label
        }
    }));
}
exports.default = Pagination;

},{"preact":"26zcy","classnames":"jocGM","../../lib/utils/index.js":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bHouJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../lib/utils/index.js");
var _paginatorJs = require("./Paginator.js");
var _paginatorJsDefault = parcelHelpers.interopDefault(_paginatorJs);
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var withUsage = _indexJs.createDocumentationMessageGenerator({
    name: 'pagination',
    connector: true
});
/**
 * **Pagination** connector provides the logic to build a widget that will let the user
 * choose the current page of the results.
 *
 * When using the pagination with Algolia, you should be aware that the engine won't provide you pages
 * beyond the 1000th hits by default. You can find more information on the [Algolia documentation](https://www.algolia.com/doc/guides/searching/pagination/#pagination-limitations).
 */ var connectPagination = function connectPagination(renderFn) {
    var unmountFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _indexJs.noop;
    _indexJs.checkRendering(renderFn, withUsage());
    return function(widgetParams) {
        var _ref = widgetParams || {
        }, totalPages = _ref.totalPages, _ref$padding = _ref.padding, padding = _ref$padding === void 0 ? 3 : _ref$padding;
        var pager = new _paginatorJsDefault.default({
            currentPage: 0,
            total: 0,
            padding: padding
        });
        var connectorState = {
        };
        function getMaxPage(_ref2) {
            var nbPages = _ref2.nbPages;
            return totalPages !== undefined ? Math.min(totalPages, nbPages) : nbPages;
        }
        return {
            $$type: 'ais.pagination',
            init: function init(initOptions) {
                var instantSearchInstance = initOptions.instantSearchInstance;
                renderFn(_objectSpread(_objectSpread({
                }, this.getWidgetRenderState(initOptions)), {
                }, {
                    instantSearchInstance: instantSearchInstance
                }), true);
            },
            render: function render(renderOptions) {
                var instantSearchInstance = renderOptions.instantSearchInstance;
                renderFn(_objectSpread(_objectSpread({
                }, this.getWidgetRenderState(renderOptions)), {
                }, {
                    instantSearchInstance: instantSearchInstance
                }), false);
            },
            dispose: function dispose(_ref3) {
                var state = _ref3.state;
                unmountFn();
                return state.setQueryParameter('page', undefined);
            },
            getWidgetUiState: function getWidgetUiState(uiState, _ref4) {
                var searchParameters = _ref4.searchParameters;
                var page = searchParameters.page || 0;
                if (!page) return uiState;
                return _objectSpread(_objectSpread({
                }, uiState), {
                }, {
                    page: page + 1
                });
            },
            getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, _ref5) {
                var uiState = _ref5.uiState;
                var page = uiState.page ? uiState.page - 1 : 0;
                return searchParameters.setQueryParameter('page', page);
            },
            getWidgetRenderState: function getWidgetRenderState(_ref6) {
                var results = _ref6.results, helper = _ref6.helper, state = _ref6.state, createURL = _ref6.createURL;
                if (!connectorState.refine) connectorState.refine = function(page) {
                    helper.setPage(page);
                    helper.search();
                };
                if (!connectorState.createURL) connectorState.createURL = function(helperState) {
                    return function(page) {
                        return createURL(helperState.setPage(page));
                    };
                };
                var page1 = state.page || 0;
                var nbPages = getMaxPage(results || {
                    nbPages: 0
                });
                pager.currentPage = page1;
                pager.total = nbPages;
                return {
                    createURL: connectorState.createURL(state),
                    refine: connectorState.refine,
                    canRefine: nbPages > 1,
                    currentRefinement: page1,
                    nbHits: (results === null || results === void 0 ? void 0 : results.nbHits) || 0,
                    nbPages: nbPages,
                    pages: results ? pager.pages() : [],
                    isFirstPage: pager.isFirstPage(),
                    isLastPage: pager.isLastPage(),
                    widgetParams: widgetParams
                };
            },
            getRenderState: function getRenderState(renderState, renderOptions) {
                return _objectSpread(_objectSpread({
                }, renderState), {
                }, {
                    pagination: this.getWidgetRenderState(renderOptions)
                });
            }
        };
    };
};
exports.default = connectPagination;

},{"../../lib/utils/index.js":"etVYs","./Paginator.js":"4Vcbp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Vcbp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../lib/utils/index.js");
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var Paginator = /*#__PURE__*/ function() {
    function Paginator1(params) {
        _classCallCheck(this, Paginator1);
        _defineProperty(this, "currentPage", void 0);
        _defineProperty(this, "total", void 0);
        _defineProperty(this, "padding", void 0);
        this.currentPage = params.currentPage;
        this.total = params.total;
        this.padding = params.padding;
    }
    _createClass(Paginator1, [
        {
            key: "pages",
            value: function pages() {
                var total = this.total, currentPage = this.currentPage, padding = this.padding;
                if (total === 0) return [
                    0
                ];
                var totalDisplayedPages = this.nbPagesDisplayed(padding, total);
                if (totalDisplayedPages === total) return _indexJs.range({
                    end: total
                });
                var paddingLeft = this.calculatePaddingLeft(currentPage, padding, total, totalDisplayedPages);
                var paddingRight = totalDisplayedPages - paddingLeft;
                var first = currentPage - paddingLeft;
                var last = currentPage + paddingRight;
                return _indexJs.range({
                    start: first,
                    end: last
                });
            }
        },
        {
            key: "nbPagesDisplayed",
            value: function nbPagesDisplayed(padding, total) {
                return Math.min(2 * padding + 1, total);
            }
        },
        {
            key: "calculatePaddingLeft",
            value: function calculatePaddingLeft(current, padding, total, totalDisplayedPages) {
                if (current <= padding) return current;
                if (current >= total - padding) return totalDisplayedPages - (total - current);
                return padding;
            }
        },
        {
            key: "isLastPage",
            value: function isLastPage() {
                return this.currentPage === this.total - 1 || this.total === 0;
            }
        },
        {
            key: "isFirstPage",
            value: function isFirstPage() {
                return this.currentPage === 0;
            }
        }
    ]);
    return Paginator1;
}();
exports.default = Paginator;

},{"../../lib/utils/index.js":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5rn2R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** @jsx h */ var _preact = require("preact");
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _refinementListJs = require("../../components/RefinementList/RefinementList.js");
var _refinementListJsDefault = parcelHelpers.interopDefault(_refinementListJs);
var _connectRefinementListJs = require("../../connectors/refinement-list/connectRefinementList.js");
var _connectRefinementListJsDefault = parcelHelpers.interopDefault(_connectRefinementListJs);
var _indexJs = require("../../lib/utils/index.js");
var _suitJs = require("../../lib/suit.js");
var _defaultTemplatesJs = require("../search-box/defaultTemplates.js");
var _defaultTemplatesJsDefault = parcelHelpers.interopDefault(_defaultTemplatesJs);
var _defaultTemplatesJs1 = require("./defaultTemplates.js");
var _defaultTemplatesJsDefault1 = parcelHelpers.interopDefault(_defaultTemplatesJs1);
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var withUsage = _indexJs.createDocumentationMessageGenerator({
    name: 'refinement-list'
});
var suit = _suitJs.component('RefinementList');
var searchBoxSuit = _suitJs.component('SearchBox');
var renderer = function renderer(_ref) {
    var containerNode = _ref.containerNode, cssClasses = _ref.cssClasses, templates = _ref.templates, searchBoxTemplates = _ref.searchBoxTemplates, renderState = _ref.renderState, showMore = _ref.showMore, searchable = _ref.searchable, searchablePlaceholder = _ref.searchablePlaceholder, searchableIsAlwaysActive = _ref.searchableIsAlwaysActive;
    return function(_ref2, isFirstRendering) {
        var refine = _ref2.refine, items = _ref2.items, createURL = _ref2.createURL, searchForItems = _ref2.searchForItems, isFromSearch = _ref2.isFromSearch, instantSearchInstance = _ref2.instantSearchInstance, toggleShowMore = _ref2.toggleShowMore, isShowingMore = _ref2.isShowingMore, hasExhaustiveItems = _ref2.hasExhaustiveItems, canToggleShowMore = _ref2.canToggleShowMore;
        if (isFirstRendering) {
            renderState.templateProps = _indexJs.prepareTemplateProps({
                defaultTemplates: _defaultTemplatesJsDefault1.default,
                templatesConfig: instantSearchInstance.templatesConfig,
                templates: templates
            });
            renderState.searchBoxTemplateProps = _indexJs.prepareTemplateProps({
                defaultTemplates: _defaultTemplatesJsDefault.default,
                templatesConfig: instantSearchInstance.templatesConfig,
                templates: searchBoxTemplates
            });
            return;
        }
        _preact.render(_preact.h(_refinementListJsDefault.default, {
            createURL: createURL,
            cssClasses: cssClasses,
            facetValues: items,
            templateProps: renderState.templateProps,
            searchBoxTemplateProps: renderState.searchBoxTemplateProps,
            toggleRefinement: refine,
            searchFacetValues: searchable ? searchForItems : undefined,
            searchPlaceholder: searchablePlaceholder,
            searchIsAlwaysActive: searchableIsAlwaysActive,
            isFromSearch: isFromSearch,
            showMore: showMore && !isFromSearch && items.length > 0,
            toggleShowMore: toggleShowMore,
            isShowingMore: isShowingMore,
            hasExhaustiveItems: hasExhaustiveItems,
            canToggleShowMore: canToggleShowMore
        }), containerNode);
    };
};
/**
 * The refinement list widget is one of the most common widget that you can find
 * in a search UI. With this widget, the user can filter the dataset based on facets.
 *
 * The refinement list displays only the most relevant facets for the current search
 * context. The sort option only affects the facet that are returned by the engine,
 * not which facets are returned.
 *
 * This widget also implements search for facet values, which is a mini search inside the
 * values of the facets. This makes easy to deal with uncommon facet values.
 *
 * @requirements
 *
 * The attribute passed to `attribute` must be declared as an
 * [attribute for faceting](https://www.algolia.com/doc/guides/searching/faceting/#declaring-attributes-for-faceting)
 * in your Algolia settings.
 *
 * If you also want to use search for facet values on this attribute, you need to make it searchable using the [dashboard](https://www.algolia.com/explorer/display/) or using the [API](https://www.algolia.com/doc/guides/searching/faceting/#search-for-facet-values).
 */ var refinementList = function refinementList(widgetParams) {
    var _ref3 = widgetParams || {
    }, container = _ref3.container, attribute = _ref3.attribute, operator = _ref3.operator, sortBy = _ref3.sortBy, limit = _ref3.limit, showMore = _ref3.showMore, showMoreLimit = _ref3.showMoreLimit, _ref3$searchable = _ref3.searchable, searchable = _ref3$searchable === void 0 ? false : _ref3$searchable, _ref3$searchablePlace = _ref3.searchablePlaceholder, searchablePlaceholder = _ref3$searchablePlace === void 0 ? 'Search...' : _ref3$searchablePlace, _ref3$searchableEscap = _ref3.searchableEscapeFacetValues, searchableEscapeFacetValues = _ref3$searchableEscap === void 0 ? true : _ref3$searchableEscap, _ref3$searchableIsAlw = _ref3.searchableIsAlwaysActive, searchableIsAlwaysActive = _ref3$searchableIsAlw === void 0 ? true : _ref3$searchableIsAlw, _ref3$cssClasses = _ref3.cssClasses, userCssClasses = _ref3$cssClasses === void 0 ? {
    } : _ref3$cssClasses, _ref3$templates = _ref3.templates, templates = _ref3$templates === void 0 ? {
    } : _ref3$templates, transformItems = _ref3.transformItems;
    if (!container) throw new Error(withUsage('The `container` option is required.'));
    var escapeFacetValues = searchable ? Boolean(searchableEscapeFacetValues) : false;
    var containerNode = _indexJs.getContainerNode(container);
    var cssClasses = {
        root: _classnamesDefault.default(suit(), userCssClasses.root),
        noRefinementRoot: _classnamesDefault.default(suit({
            modifierName: 'noRefinement'
        }), userCssClasses.noRefinementRoot),
        list: _classnamesDefault.default(suit({
            descendantName: 'list'
        }), userCssClasses.list),
        item: _classnamesDefault.default(suit({
            descendantName: 'item'
        }), userCssClasses.item),
        selectedItem: _classnamesDefault.default(suit({
            descendantName: 'item',
            modifierName: 'selected'
        }), userCssClasses.selectedItem),
        searchBox: _classnamesDefault.default(suit({
            descendantName: 'searchBox'
        }), userCssClasses.searchBox),
        label: _classnamesDefault.default(suit({
            descendantName: 'label'
        }), userCssClasses.label),
        checkbox: _classnamesDefault.default(suit({
            descendantName: 'checkbox'
        }), userCssClasses.checkbox),
        labelText: _classnamesDefault.default(suit({
            descendantName: 'labelText'
        }), userCssClasses.labelText),
        count: _classnamesDefault.default(suit({
            descendantName: 'count'
        }), userCssClasses.count),
        noResults: _classnamesDefault.default(suit({
            descendantName: 'noResults'
        }), userCssClasses.noResults),
        showMore: _classnamesDefault.default(suit({
            descendantName: 'showMore'
        }), userCssClasses.showMore),
        disabledShowMore: _classnamesDefault.default(suit({
            descendantName: 'showMore',
            modifierName: 'disabled'
        }), userCssClasses.disabledShowMore),
        searchable: {
            root: _classnamesDefault.default(searchBoxSuit(), userCssClasses.searchableRoot),
            form: _classnamesDefault.default(searchBoxSuit({
                descendantName: 'form'
            }), userCssClasses.searchableForm),
            input: _classnamesDefault.default(searchBoxSuit({
                descendantName: 'input'
            }), userCssClasses.searchableInput),
            submit: _classnamesDefault.default(searchBoxSuit({
                descendantName: 'submit'
            }), userCssClasses.searchableSubmit),
            submitIcon: _classnamesDefault.default(searchBoxSuit({
                descendantName: 'submitIcon'
            }), userCssClasses.searchableSubmitIcon),
            reset: _classnamesDefault.default(searchBoxSuit({
                descendantName: 'reset'
            }), userCssClasses.searchableReset),
            resetIcon: _classnamesDefault.default(searchBoxSuit({
                descendantName: 'resetIcon'
            }), userCssClasses.searchableResetIcon),
            loadingIndicator: _classnamesDefault.default(searchBoxSuit({
                descendantName: 'loadingIndicator'
            }), userCssClasses.searchableLoadingIndicator),
            loadingIcon: _classnamesDefault.default(searchBoxSuit({
                descendantName: 'loadingIcon'
            }), userCssClasses.searchableLoadingIcon)
        }
    };
    var specializedRenderer = renderer({
        containerNode: containerNode,
        cssClasses: cssClasses,
        templates: templates,
        searchBoxTemplates: {
            submit: templates.searchableSubmit,
            reset: templates.searchableReset,
            loadingIndicator: templates.searchableLoadingIndicator
        },
        renderState: {
        },
        searchable: searchable,
        searchablePlaceholder: searchablePlaceholder,
        searchableIsAlwaysActive: searchableIsAlwaysActive,
        showMore: showMore
    });
    var makeWidget = _connectRefinementListJsDefault.default(specializedRenderer, function() {
        return _preact.render(null, containerNode);
    });
    return _objectSpread(_objectSpread({
    }, makeWidget({
        attribute: attribute,
        operator: operator,
        limit: limit,
        showMore: showMore,
        showMoreLimit: showMoreLimit,
        sortBy: sortBy,
        escapeFacetValues: escapeFacetValues,
        transformItems: transformItems
    })), {
    }, {
        $$widgetType: 'ais.refinementList'
    });
};
exports.default = refinementList;

},{"preact":"26zcy","classnames":"jocGM","../../components/RefinementList/RefinementList.js":"2a3aK","../../connectors/refinement-list/connectRefinementList.js":"kkKYv","../../lib/utils/index.js":"etVYs","../../lib/suit.js":"du81D","../search-box/defaultTemplates.js":"aAfNi","./defaultTemplates.js":"iPrXC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2a3aK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** @jsx h */ var _preact = require("preact");
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _indexJs = require("../../lib/utils/index.js");
var _templateJs = require("../Template/Template.js");
var _templateJsDefault = parcelHelpers.interopDefault(_templateJs);
var _refinementListItemJs = require("./RefinementListItem.js");
var _refinementListItemJsDefault = parcelHelpers.interopDefault(_refinementListItemJs);
var _searchBoxJs = require("../SearchBox/SearchBox.js");
var _searchBoxJsDefault = parcelHelpers.interopDefault(_searchBoxJs);
function _typeof(obj1) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj1);
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {
    };
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {
    };
    var target = {
    };
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o1, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o1, p1);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o2) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o2);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var defaultProps = {
    cssClasses: {
    },
    depth: 0
};
function isHierarchicalMenuItem(facetValue) {
    return facetValue.data !== undefined;
}
var RefinementList = /*#__PURE__*/ function(_Component) {
    _inherits(RefinementList1, _Component);
    var _super = _createSuper(RefinementList1);
    function RefinementList1(props) {
        var _this;
        _classCallCheck(this, RefinementList1);
        _this = _super.call(this, props);
        _defineProperty(_assertThisInitialized(_this), "searchBox", _preact.createRef());
        _this.handleItemClick = _this.handleItemClick.bind(_assertThisInitialized(_this));
        return _this;
    }
    _createClass(RefinementList1, [
        {
            key: "shouldComponentUpdate",
            value: function shouldComponentUpdate(nextProps) {
                var areFacetValuesDifferent = !_indexJs.isEqual(this.props.facetValues, nextProps.facetValues);
                return areFacetValuesDifferent;
            }
        },
        {
            key: "refine",
            value: function refine(facetValueToRefine) {
                this.props.toggleRefinement(facetValueToRefine);
            }
        },
        {
            key: "_generateFacetItem",
            value: function _generateFacetItem(facetValue) {
                var _cx;
                var subItems;
                if (isHierarchicalMenuItem(facetValue) && Array.isArray(facetValue.data) && facetValue.data.length > 0) {
                    var _this$props$cssClasse = this.props.cssClasses, root = _this$props$cssClasse.root, cssClasses = _objectWithoutProperties(_this$props$cssClasse, [
                        "root"
                    ]);
                    subItems = _preact.h(RefinementList1, _extends({
                    }, this.props, {
                        // We want to keep `root` required for external usage but not for the
                        // sub items.
                        cssClasses: cssClasses,
                        depth: this.props.depth + 1,
                        facetValues: facetValue.data,
                        showMore: false,
                        className: this.props.cssClasses.childList
                    }));
                }
                var url = this.props.createURL(facetValue.value);
                var templateData = _objectSpread(_objectSpread({
                }, facetValue), {
                }, {
                    url: url,
                    attribute: this.props.attribute,
                    cssClasses: this.props.cssClasses,
                    isFromSearch: this.props.isFromSearch
                });
                var key = facetValue.value;
                if (facetValue.isRefined !== undefined) key += "/".concat(facetValue.isRefined);
                if (facetValue.count !== undefined) key += "/".concat(facetValue.count);
                var refinementListItemClassName = _classnamesDefault.default(this.props.cssClasses.item, (_cx = {
                }, _defineProperty(_cx, this.props.cssClasses.selectedItem, facetValue.isRefined), _defineProperty(_cx, this.props.cssClasses.disabledItem, !facetValue.count), _defineProperty(_cx, this.props.cssClasses.parentItem, isHierarchicalMenuItem(facetValue) && Array.isArray(facetValue.data) && facetValue.data.length > 0), _cx));
                return _preact.h(_refinementListItemJsDefault.default, {
                    templateKey: "item",
                    key: key,
                    facetValueToRefine: facetValue.value,
                    handleClick: this.handleItemClick,
                    isRefined: facetValue.isRefined,
                    className: refinementListItemClassName,
                    subItems: subItems,
                    templateData: templateData,
                    templateProps: this.props.templateProps
                });
            } // Click events on DOM tree like LABEL > INPUT will result in two click events
        },
        {
            key: "handleItemClick",
            value: function handleItemClick(_ref) {
                var facetValueToRefine = _ref.facetValueToRefine, isRefined = _ref.isRefined, originalEvent = _ref.originalEvent;
                if (_indexJs.isSpecialClick(originalEvent)) // do not alter the default browser behavior
                // if one special key is down
                return;
                if (!(originalEvent.target instanceof HTMLElement) || !(originalEvent.target.parentNode instanceof HTMLElement)) return;
                if (isRefined && originalEvent.target.parentNode.querySelector('input[type="radio"]:checked')) // Prevent refinement for being reset if the user clicks on an already checked radio button
                return;
                if (originalEvent.target.tagName === 'INPUT') {
                    this.refine(facetValueToRefine);
                    return;
                }
                var parent = originalEvent.target;
                while(parent !== originalEvent.currentTarget){
                    if (parent.tagName === 'LABEL' && (parent.querySelector('input[type="checkbox"]') || parent.querySelector('input[type="radio"]'))) return;
                    if (parent.tagName === 'A' && parent.href) originalEvent.preventDefault();
                    parent = parent.parentNode;
                }
                originalEvent.stopPropagation();
                this.refine(facetValueToRefine);
            }
        },
        {
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextProps) {
                if (this.searchBox.current && !nextProps.isFromSearch) this.searchBox.current.resetInput();
            }
        },
        {
            key: "refineFirstValue",
            value: function refineFirstValue() {
                var firstValue = this.props.facetValues && this.props.facetValues[0];
                if (firstValue) {
                    var actualValue = firstValue.value;
                    this.props.toggleRefinement(actualValue);
                }
            }
        },
        {
            key: "render",
            value: function render() {
                var _this2 = this;
                var showMoreButtonClassName = _classnamesDefault.default(this.props.cssClasses.showMore, _defineProperty({
                }, this.props.cssClasses.disabledShowMore, !(this.props.showMore === true && this.props.canToggleShowMore)));
                var showMoreButton = this.props.showMore === true && _preact.h(_templateJsDefault.default, _extends({
                }, this.props.templateProps, {
                    templateKey: "showMoreText",
                    rootTagName: "button",
                    rootProps: {
                        className: showMoreButtonClassName,
                        disabled: !this.props.canToggleShowMore,
                        onClick: this.props.toggleShowMore
                    },
                    data: {
                        isShowingMore: this.props.isShowingMore
                    }
                }));
                var shouldDisableSearchBox = this.props.searchIsAlwaysActive !== true && !(this.props.isFromSearch || !this.props.hasExhaustiveItems);
                var searchBox = this.props.searchFacetValues && _preact.h("div", {
                    className: this.props.cssClasses.searchBox
                }, _preact.h(_searchBoxJsDefault.default, {
                    ref: this.searchBox,
                    placeholder: this.props.searchPlaceholder,
                    disabled: shouldDisableSearchBox,
                    cssClasses: this.props.cssClasses.searchable,
                    templates: this.props.searchBoxTemplateProps.templates,
                    onChange: function onChange(event) {
                        return _this2.props.searchFacetValues(event.target.value);
                    },
                    onReset: function onReset() {
                        return _this2.props.searchFacetValues('');
                    },
                    onSubmit: function onSubmit() {
                        return _this2.refineFirstValue();
                    } // This sets the search box to a controlled state because
                    ,
                    searchAsYouType: false
                }));
                var facetValues = this.props.facetValues && this.props.facetValues.length > 0 && _preact.h("ul", {
                    className: this.props.cssClasses.list
                }, this.props.facetValues.map(this._generateFacetItem, this));
                var noResults = this.props.searchFacetValues && this.props.isFromSearch && (!this.props.facetValues || this.props.facetValues.length === 0) && _preact.h(_templateJsDefault.default, _extends({
                }, this.props.templateProps, {
                    templateKey: "searchableNoResults",
                    rootProps: {
                        className: this.props.cssClasses.noResults
                    }
                }));
                var rootClassName = _classnamesDefault.default(this.props.cssClasses.root, _defineProperty({
                }, this.props.cssClasses.noRefinementRoot, !this.props.facetValues || this.props.facetValues.length === 0), this.props.className);
                return _preact.h("div", {
                    className: rootClassName
                }, this.props.children, searchBox, facetValues, noResults, showMoreButton);
            }
        }
    ]);
    return RefinementList1;
}(_preact.Component);
_defineProperty(RefinementList, "defaultProps", defaultProps);
exports.default = RefinementList;

},{"preact":"26zcy","classnames":"jocGM","../../lib/utils/index.js":"etVYs","../Template/Template.js":"aVPg5","./RefinementListItem.js":"iBH7m","../SearchBox/SearchBox.js":"acfnu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iBH7m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** @jsx h */ var _preact = require("preact");
var _templateJs = require("../Template/Template.js");
var _templateJsDefault = parcelHelpers.interopDefault(_templateJs);
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function RefinementListItem(_ref) {
    var className = _ref.className, handleClick = _ref.handleClick, facetValueToRefine = _ref.facetValueToRefine, isRefined = _ref.isRefined, templateProps = _ref.templateProps, templateKey = _ref.templateKey, templateData = _ref.templateData, subItems = _ref.subItems;
    return _preact.h("li", {
        className: className,
        onClick: function onClick(originalEvent) {
            handleClick({
                facetValueToRefine: facetValueToRefine,
                isRefined: isRefined,
                originalEvent: originalEvent
            });
        }
    }, _preact.h(_templateJsDefault.default, _extends({
    }, templateProps, {
        templateKey: templateKey,
        data: templateData
    })), subItems);
}
exports.default = RefinementListItem;

},{"preact":"26zcy","../Template/Template.js":"aVPg5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"acfnu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** @jsx h */ var _preact = require("preact");
var _indexJs = require("../../lib/utils/index.js");
var _templateJs = require("../Template/Template.js");
var _templateJsDefault = parcelHelpers.interopDefault(_templateJs);
function _typeof(obj1) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj1);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o1, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o1, p1);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o2) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o2);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var defaultProps = {
    query: '',
    showSubmit: true,
    showReset: true,
    showLoadingIndicator: true,
    autofocus: false,
    searchAsYouType: true,
    isSearchStalled: false,
    disabled: false,
    onChange: _indexJs.noop,
    onSubmit: _indexJs.noop,
    onReset: _indexJs.noop,
    refine: _indexJs.noop
};
var SearchBox = /*#__PURE__*/ function(_Component) {
    _inherits(SearchBox1, _Component);
    var _super = _createSuper(SearchBox1);
    function SearchBox1() {
        var _this;
        _classCallCheck(this, SearchBox1);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        _defineProperty(_assertThisInitialized(_this), "state", {
            query: _this.props.query,
            focused: false
        });
        _defineProperty(_assertThisInitialized(_this), "input", _preact.createRef());
        _defineProperty(_assertThisInitialized(_this), "onInput", function(event) {
            var _this$props = _this.props, searchAsYouType = _this$props.searchAsYouType, refine = _this$props.refine, onChange = _this$props.onChange;
            var query = event.target.value;
            if (searchAsYouType) refine(query);
            _this.setState({
                query: query
            });
            onChange(event);
        });
        _defineProperty(_assertThisInitialized(_this), "onSubmit", function(event) {
            var _this$props2 = _this.props, searchAsYouType = _this$props2.searchAsYouType, refine = _this$props2.refine, onSubmit = _this$props2.onSubmit;
            event.preventDefault();
            event.stopPropagation();
            if (_this.input.current) _this.input.current.blur();
            if (!searchAsYouType) refine(_this.state.query);
            onSubmit(event);
            return false;
        });
        _defineProperty(_assertThisInitialized(_this), "onReset", function(event) {
            var _this$props3 = _this.props, refine = _this$props3.refine, onReset = _this$props3.onReset;
            var query = '';
            if (_this.input.current) _this.input.current.focus();
            refine(query);
            _this.setState({
                query: query
            });
            onReset(event);
        });
        _defineProperty(_assertThisInitialized(_this), "onBlur", function() {
            _this.setState({
                focused: false
            });
        });
        _defineProperty(_assertThisInitialized(_this), "onFocus", function() {
            _this.setState({
                focused: true
            });
        });
        return _this;
    }
    _createClass(SearchBox1, [
        {
            key: "resetInput",
            value: /**
     * This public method is used in the RefinementList SFFV search box
     * to reset the input state when an item is selected.
     *
     * @see RefinementList#componentWillReceiveProps
     * @return {undefined}
     */ function resetInput() {
                this.setState({
                    query: ''
                });
            }
        },
        {
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextProps) {
                /**
       * when the user is typing, we don't want to replace the query typed
       * by the user (state.query) with the query exposed by the connector (props.query)
       * see: https://github.com/algolia/instantsearch.js/issues/4141
       */ if (!this.state.focused && nextProps.query !== this.state.query) this.setState({
                    query: nextProps.query
                });
            }
        },
        {
            key: "render",
            value: function render() {
                var _this$props4 = this.props, cssClasses = _this$props4.cssClasses, placeholder = _this$props4.placeholder, autofocus = _this$props4.autofocus, showSubmit = _this$props4.showSubmit, showReset = _this$props4.showReset, showLoadingIndicator = _this$props4.showLoadingIndicator, templates = _this$props4.templates, isSearchStalled = _this$props4.isSearchStalled;
                return _preact.h("div", {
                    className: cssClasses.root
                }, _preact.h("form", {
                    action: "",
                    role: "search",
                    className: cssClasses.form,
                    noValidate: true,
                    onSubmit: this.onSubmit,
                    onReset: this.onReset
                }, _preact.h("input", {
                    ref: this.input,
                    value: this.state.query,
                    disabled: this.props.disabled,
                    className: cssClasses.input,
                    type: "search",
                    placeholder: placeholder,
                    autoFocus: autofocus,
                    autoComplete: "off",
                    autoCorrect: "off",
                    autoCapitalize: "off" // @ts-expect-error `spellCheck` attribute is missing in preact JSX types
                    ,
                    spellCheck: "false",
                    maxLength: 512,
                    onInput: this.onInput,
                    onBlur: this.onBlur,
                    onFocus: this.onFocus
                }), _preact.h(_templateJsDefault.default, {
                    templateKey: "submit",
                    rootTagName: "button",
                    rootProps: {
                        className: cssClasses.submit,
                        type: 'submit',
                        title: 'Submit the search query.',
                        hidden: !showSubmit
                    },
                    templates: templates,
                    data: {
                        cssClasses: cssClasses
                    }
                }), _preact.h(_templateJsDefault.default, {
                    templateKey: "reset",
                    rootTagName: "button",
                    rootProps: {
                        className: cssClasses.reset,
                        type: 'reset',
                        title: 'Clear the search query.',
                        hidden: !(showReset && this.state.query.trim() && !isSearchStalled)
                    },
                    templates: templates,
                    data: {
                        cssClasses: cssClasses
                    }
                }), showLoadingIndicator && _preact.h(_templateJsDefault.default, {
                    templateKey: "loadingIndicator",
                    rootTagName: "span",
                    rootProps: {
                        className: cssClasses.loadingIndicator,
                        hidden: !isSearchStalled
                    },
                    templates: templates,
                    data: {
                        cssClasses: cssClasses
                    }
                })));
            }
        }
    ]);
    return SearchBox1;
}(_preact.Component);
_defineProperty(SearchBox, "defaultProps", defaultProps);
exports.default = SearchBox;

},{"preact":"26zcy","../../lib/utils/index.js":"etVYs","../Template/Template.js":"aVPg5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kkKYv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../lib/utils/index.js");
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {
    };
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {
    };
    var target = {
    };
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var withUsage = _indexJs.createDocumentationMessageGenerator({
    name: 'refinement-list',
    connector: true
});
var DEFAULT_SORT = [
    'isRefined',
    'count:desc',
    'name:asc'
];
/**
 * **RefinementList** connector provides the logic to build a custom widget that
 * will let the user filter the results based on the values of a specific facet.
 *
 * **Requirement:** the attribute passed as `attribute` must be present in
 * attributesForFaceting of the searched index.
 *
 * This connector provides:
 * - a `refine()` function to select an item.
 * - a `toggleShowMore()` function to display more or less items
 * - a `searchForItems()` function to search within the items.
 */ var connectRefinementList = function connectRefinementList(renderFn) {
    var unmountFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _indexJs.noop;
    _indexJs.checkRendering(renderFn, withUsage());
    return function(widgetParams) {
        var _ref = widgetParams || {
        }, attribute = _ref.attribute, _ref$operator = _ref.operator, operator = _ref$operator === void 0 ? 'or' : _ref$operator, _ref$limit = _ref.limit, limit = _ref$limit === void 0 ? 10 : _ref$limit, _ref$showMore = _ref.showMore, showMore = _ref$showMore === void 0 ? false : _ref$showMore, _ref$showMoreLimit = _ref.showMoreLimit, showMoreLimit = _ref$showMoreLimit === void 0 ? 20 : _ref$showMoreLimit, _ref$sortBy = _ref.sortBy, sortBy = _ref$sortBy === void 0 ? DEFAULT_SORT : _ref$sortBy, _ref$escapeFacetValue = _ref.escapeFacetValues, escapeFacetValues = _ref$escapeFacetValue === void 0 ? true : _ref$escapeFacetValue, _ref$transformItems = _ref.transformItems, transformItems = _ref$transformItems === void 0 ? function(items) {
            return items;
        } : _ref$transformItems;
        if (!attribute) throw new Error(withUsage('The `attribute` option is required.'));
        if (!/^(and|or)$/.test(operator)) throw new Error(withUsage("The `operator` must one of: `\"and\"`, `\"or\"` (got \"".concat(operator, "\").")));
        if (showMore === true && showMoreLimit <= limit) throw new Error(withUsage('`showMoreLimit` should be greater than `limit`.'));
        var formatItems = function formatItems(_ref2) {
            var label = _ref2.name, item = _objectWithoutProperties(_ref2, [
                "name"
            ]);
            return _objectSpread(_objectSpread({
            }, item), {
            }, {
                label: label,
                value: label,
                highlighted: label
            });
        };
        var lastResultsFromMainSearch;
        var lastItemsFromMainSearch = [];
        var hasExhaustiveItems = true;
        var triggerRefine;
        var sendEvent;
        var isShowingMore = false; // Provide the same function to the `renderFn` so that way the user
        // has to only bind it once when `isFirstRendering` for instance
        var toggleShowMore = function toggleShowMore() {
        };
        function cachedToggleShowMore() {
            toggleShowMore();
        }
        function createToggleShowMore(renderOptions, widget) {
            return function() {
                isShowingMore = !isShowingMore;
                widget.render(renderOptions);
            };
        }
        function getLimit() {
            return isShowingMore ? showMoreLimit : limit;
        }
        var searchForFacetValues = function searchForFacetValues() {
            return function() {
            };
        };
        var createSearchForFacetValues = function createSearchForFacetValues(helper, widget) {
            return function(renderOptions) {
                return function(query) {
                    var instantSearchInstance = renderOptions.instantSearchInstance;
                    if (query === '' && lastItemsFromMainSearch) // render with previous data from the helper.
                    renderFn(_objectSpread(_objectSpread({
                    }, widget.getWidgetRenderState(_objectSpread(_objectSpread({
                    }, renderOptions), {
                    }, {
                        results: lastResultsFromMainSearch
                    }))), {
                    }, {
                        instantSearchInstance: instantSearchInstance
                    }), false);
                    else {
                        var tags = {
                            highlightPreTag: escapeFacetValues ? _indexJs.TAG_PLACEHOLDER.highlightPreTag : _indexJs.TAG_REPLACEMENT.highlightPreTag,
                            highlightPostTag: escapeFacetValues ? _indexJs.TAG_PLACEHOLDER.highlightPostTag : _indexJs.TAG_REPLACEMENT.highlightPostTag
                        };
                        helper.searchForFacetValues(attribute, query, // doesn't support a greater number.
                        // See https://www.algolia.com/doc/api-reference/api-parameters/maxFacetHits/
                        Math.min(getLimit(), 100), tags).then(function(results) {
                            var facetValues = escapeFacetValues ? _indexJs.escapeFacets(results.facetHits) : results.facetHits;
                            var normalizedFacetValues = transformItems(facetValues.map(function(_ref3) {
                                var value = _ref3.value, item = _objectWithoutProperties(_ref3, [
                                    "value"
                                ]);
                                return _objectSpread(_objectSpread({
                                }, item), {
                                }, {
                                    value: value,
                                    label: value
                                });
                            }));
                            renderFn(_objectSpread(_objectSpread({
                            }, widget.getWidgetRenderState(_objectSpread(_objectSpread({
                            }, renderOptions), {
                            }, {
                                results: lastResultsFromMainSearch
                            }))), {
                            }, {
                                items: normalizedFacetValues,
                                canToggleShowMore: false,
                                canRefine: true,
                                isFromSearch: true,
                                instantSearchInstance: instantSearchInstance
                            }), false);
                        });
                    }
                };
            };
        };
        return {
            $$type: 'ais.refinementList',
            init: function init(initOptions) {
                renderFn(_objectSpread(_objectSpread({
                }, this.getWidgetRenderState(initOptions)), {
                }, {
                    instantSearchInstance: initOptions.instantSearchInstance
                }), true);
            },
            render: function render(renderOptions) {
                renderFn(_objectSpread(_objectSpread({
                }, this.getWidgetRenderState(renderOptions)), {
                }, {
                    instantSearchInstance: renderOptions.instantSearchInstance
                }), false);
            },
            getRenderState: function getRenderState(renderState, renderOptions) {
                return _objectSpread(_objectSpread({
                }, renderState), {
                }, {
                    refinementList: _objectSpread(_objectSpread({
                    }, renderState.refinementList), {
                    }, _defineProperty({
                    }, attribute, this.getWidgetRenderState(renderOptions)))
                });
            },
            getWidgetRenderState: function getWidgetRenderState(renderOptions) {
                var results = renderOptions.results, state = renderOptions.state, _createURL = renderOptions.createURL, instantSearchInstance = renderOptions.instantSearchInstance, helper = renderOptions.helper;
                var items = [];
                var facetValues = [];
                if (!sendEvent || !triggerRefine || !searchForFacetValues) {
                    sendEvent = _indexJs.createSendEventForFacet({
                        instantSearchInstance: instantSearchInstance,
                        helper: helper,
                        attribute: attribute,
                        widgetType: this.$$type
                    });
                    triggerRefine = function triggerRefine(facetValue) {
                        sendEvent('click', facetValue);
                        helper.toggleFacetRefinement(attribute, facetValue).search();
                    };
                    searchForFacetValues = createSearchForFacetValues(helper, this);
                }
                if (results) {
                    var values = results.getFacetValues(attribute, {
                        sortBy: sortBy,
                        facetOrdering: sortBy === DEFAULT_SORT
                    });
                    facetValues = values && Array.isArray(values) ? values : [];
                    items = transformItems(facetValues.slice(0, getLimit()).map(formatItems));
                    var maxValuesPerFacetConfig = state.maxValuesPerFacet;
                    var currentLimit = getLimit(); // If the limit is the max number of facet retrieved it is impossible to know
                    // if the facets are exhaustive. The only moment we are sure it is exhaustive
                    // is when it is strictly under the number requested unless we know that another
                    // widget has requested more values (maxValuesPerFacet > getLimit()).
                    // Because this is used for making the search of facets unable or not, it is important
                    // to be conservative here.
                    hasExhaustiveItems = maxValuesPerFacetConfig > currentLimit ? facetValues.length <= currentLimit : facetValues.length < currentLimit;
                    lastResultsFromMainSearch = results;
                    lastItemsFromMainSearch = items;
                    if (renderOptions.results) toggleShowMore = createToggleShowMore(renderOptions, this);
                } // Do not mistake searchForFacetValues and searchFacetValues which is the actual search
                // function
                var searchFacetValues = searchForFacetValues && searchForFacetValues(renderOptions);
                var canShowLess = isShowingMore && lastItemsFromMainSearch.length > limit;
                var canShowMore = showMore && !hasExhaustiveItems;
                var canToggleShowMore = canShowLess || canShowMore;
                return {
                    createURL: function createURL(facetValue) {
                        return _createURL(state.resetPage().toggleFacetRefinement(attribute, facetValue));
                    },
                    items: items,
                    refine: triggerRefine,
                    searchForItems: searchFacetValues,
                    isFromSearch: false,
                    canRefine: items.length > 0,
                    widgetParams: widgetParams,
                    isShowingMore: isShowingMore,
                    canToggleShowMore: canToggleShowMore,
                    toggleShowMore: cachedToggleShowMore,
                    sendEvent: sendEvent,
                    hasExhaustiveItems: hasExhaustiveItems
                };
            },
            dispose: function dispose(_ref4) {
                var state = _ref4.state;
                unmountFn();
                var withoutMaxValuesPerFacet = state.setQueryParameter('maxValuesPerFacet', undefined);
                if (operator === 'and') return withoutMaxValuesPerFacet.removeFacet(attribute);
                return withoutMaxValuesPerFacet.removeDisjunctiveFacet(attribute);
            },
            getWidgetUiState: function getWidgetUiState(uiState, _ref5) {
                var searchParameters = _ref5.searchParameters;
                var values = operator === 'or' ? searchParameters.getDisjunctiveRefinements(attribute) : searchParameters.getConjunctiveRefinements(attribute);
                if (!values.length) return uiState;
                return _objectSpread(_objectSpread({
                }, uiState), {
                }, {
                    refinementList: _objectSpread(_objectSpread({
                    }, uiState.refinementList), {
                    }, _defineProperty({
                    }, attribute, values))
                });
            },
            getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, _ref6) {
                var uiState = _ref6.uiState;
                var isDisjunctive = operator === 'or';
                var values = uiState.refinementList && uiState.refinementList[attribute];
                var withoutRefinements = searchParameters.clearRefinements(attribute);
                var withFacetConfiguration = isDisjunctive ? withoutRefinements.addDisjunctiveFacet(attribute) : withoutRefinements.addFacet(attribute);
                var currentMaxValuesPerFacet = withFacetConfiguration.maxValuesPerFacet || 0;
                var nextMaxValuesPerFacet = Math.max(currentMaxValuesPerFacet, showMore ? showMoreLimit : limit);
                var withMaxValuesPerFacet = withFacetConfiguration.setQueryParameter('maxValuesPerFacet', nextMaxValuesPerFacet);
                if (!values) {
                    var key = isDisjunctive ? 'disjunctiveFacetsRefinements' : 'facetsRefinements';
                    return withMaxValuesPerFacet.setQueryParameters(_defineProperty({
                    }, key, _objectSpread(_objectSpread({
                    }, withMaxValuesPerFacet[key]), {
                    }, _defineProperty({
                    }, attribute, []))));
                }
                return values.reduce(function(parameters, value) {
                    return isDisjunctive ? parameters.addDisjunctiveFacetRefinement(attribute, value) : parameters.addFacetRefinement(attribute, value);
                }, withMaxValuesPerFacet);
            }
        };
    };
};
exports.default = connectRefinementList;

},{"../../lib/utils/index.js":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aAfNi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var defaultTemplate = {
    reset: "\n<svg class=\"{{cssClasses.resetIcon}}\" viewBox=\"0 0 20 20\" width=\"10\" height=\"10\">\n  <path d=\"M8.114 10L.944 2.83 0 1.885 1.886 0l.943.943L10 8.113l7.17-7.17.944-.943L20 1.886l-.943.943-7.17 7.17 7.17 7.17.943.944L18.114 20l-.943-.943-7.17-7.17-7.17 7.17-.944.943L0 18.114l.943-.943L8.113 10z\"></path>\n</svg>\n  ",
    submit: "\n<svg class=\"{{cssClasses.submitIcon}}\" width=\"10\" height=\"10\" viewBox=\"0 0 40 40\">\n  <path d=\"M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z\"></path>\n</svg>\n  ",
    loadingIndicator: "\n<svg class=\"{{cssClasses.loadingIcon}}\" width=\"16\" height=\"16\" viewBox=\"0 0 38 38\" stroke=\"#444\">\n  <g fill=\"none\" fillRule=\"evenodd\">\n    <g transform=\"translate(1 1)\" strokeWidth=\"2\">\n      <circle strokeOpacity=\".5\" cx=\"18\" cy=\"18\" r=\"18\" />\n      <path d=\"M36 18c0-9.94-8.06-18-18-18\">\n        <animateTransform\n          attributeName=\"transform\"\n          type=\"rotate\"\n          from=\"0 18 18\"\n          to=\"360 18 18\"\n          dur=\"1s\"\n          repeatCount=\"indefinite\"\n        />\n      </path>\n    </g>\n  </g>\n</svg>\n  "
};
exports.default = defaultTemplate;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iPrXC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var defaultTemplates = {
    item: "<label class=\"{{cssClasses.label}}\">\n  <input type=\"checkbox\"\n         class=\"{{cssClasses.checkbox}}\"\n         value=\"{{value}}\"\n         {{#isRefined}}checked{{/isRefined}} />\n  <span class=\"{{cssClasses.labelText}}\">{{#isFromSearch}}{{{highlighted}}}{{/isFromSearch}}{{^isFromSearch}}{{highlighted}}{{/isFromSearch}}</span>\n  <span class=\"{{cssClasses.count}}\">{{#helpers.formatNumber}}{{count}}{{/helpers.formatNumber}}</span>\n</label>",
    showMoreText: "\n    {{#isShowingMore}}\n      Show less\n    {{/isShowingMore}}\n    {{^isShowingMore}}\n      Show more\n    {{/isShowingMore}}\n    ",
    searchableNoResults: 'No results'
};
exports.default = defaultTemplates;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jSd18":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** @jsx h */ var _preact = require("preact");
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _indexJs = require("../../lib/utils/index.js");
var _suitJs = require("../../lib/suit.js");
var _connectSearchBoxJs = require("../../connectors/search-box/connectSearchBox.js");
var _connectSearchBoxJsDefault = parcelHelpers.interopDefault(_connectSearchBoxJs);
var _searchBoxJs = require("../../components/SearchBox/SearchBox.js");
var _searchBoxJsDefault = parcelHelpers.interopDefault(_searchBoxJs);
var _defaultTemplatesJs = require("./defaultTemplates.js");
var _defaultTemplatesJsDefault = parcelHelpers.interopDefault(_defaultTemplatesJs);
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var withUsage = _indexJs.createDocumentationMessageGenerator({
    name: 'search-box'
});
var suit = _suitJs.component('SearchBox');
var renderer = function renderer(_ref) {
    var containerNode = _ref.containerNode, cssClasses = _ref.cssClasses, placeholder = _ref.placeholder, templates = _ref.templates, autofocus = _ref.autofocus, searchAsYouType = _ref.searchAsYouType, showReset = _ref.showReset, showSubmit = _ref.showSubmit, showLoadingIndicator = _ref.showLoadingIndicator;
    return function(_ref2) {
        var refine = _ref2.refine, query = _ref2.query, isSearchStalled = _ref2.isSearchStalled;
        _preact.render(_preact.h(_searchBoxJsDefault.default, {
            query: query,
            placeholder: placeholder,
            autofocus: autofocus,
            refine: refine,
            searchAsYouType: searchAsYouType,
            templates: templates,
            showSubmit: showSubmit,
            showReset: showReset,
            showLoadingIndicator: showLoadingIndicator,
            isSearchStalled: isSearchStalled,
            cssClasses: cssClasses
        }), containerNode);
    };
};
/**
 * The searchbox widget is used to let the user set a text based query.
 *
 * This is usually the  main entry point to start the search in an instantsearch context. For that
 * reason is usually placed on top, and not hidden so that the user can start searching right
 * away.
 *
 */ var searchBox = function searchBox(widgetParams) {
    var _ref3 = widgetParams || {
    }, container = _ref3.container, _ref3$placeholder = _ref3.placeholder, placeholder = _ref3$placeholder === void 0 ? '' : _ref3$placeholder, _ref3$cssClasses = _ref3.cssClasses, userCssClasses = _ref3$cssClasses === void 0 ? {
    } : _ref3$cssClasses, _ref3$autofocus = _ref3.autofocus, autofocus = _ref3$autofocus === void 0 ? false : _ref3$autofocus, _ref3$searchAsYouType = _ref3.searchAsYouType, searchAsYouType = _ref3$searchAsYouType === void 0 ? true : _ref3$searchAsYouType, _ref3$showReset = _ref3.showReset, showReset = _ref3$showReset === void 0 ? true : _ref3$showReset, _ref3$showSubmit = _ref3.showSubmit, showSubmit = _ref3$showSubmit === void 0 ? true : _ref3$showSubmit, _ref3$showLoadingIndi = _ref3.showLoadingIndicator, showLoadingIndicator = _ref3$showLoadingIndi === void 0 ? true : _ref3$showLoadingIndi, queryHook = _ref3.queryHook, _ref3$templates = _ref3.templates, userTemplates = _ref3$templates === void 0 ? {
    } : _ref3$templates;
    if (!container) throw new Error(withUsage('The `container` option is required.'));
    var containerNode = _indexJs.getContainerNode(container);
    var cssClasses = {
        root: _classnamesDefault.default(suit(), userCssClasses.root),
        form: _classnamesDefault.default(suit({
            descendantName: 'form'
        }), userCssClasses.form),
        input: _classnamesDefault.default(suit({
            descendantName: 'input'
        }), userCssClasses.input),
        submit: _classnamesDefault.default(suit({
            descendantName: 'submit'
        }), userCssClasses.submit),
        submitIcon: _classnamesDefault.default(suit({
            descendantName: 'submitIcon'
        }), userCssClasses.submitIcon),
        reset: _classnamesDefault.default(suit({
            descendantName: 'reset'
        }), userCssClasses.reset),
        resetIcon: _classnamesDefault.default(suit({
            descendantName: 'resetIcon'
        }), userCssClasses.resetIcon),
        loadingIndicator: _classnamesDefault.default(suit({
            descendantName: 'loadingIndicator'
        }), userCssClasses.loadingIndicator),
        loadingIcon: _classnamesDefault.default(suit({
            descendantName: 'loadingIcon'
        }), userCssClasses.loadingIcon)
    };
    var templates = _objectSpread(_objectSpread({
    }, _defaultTemplatesJsDefault.default), userTemplates);
    var specializedRenderer = renderer({
        containerNode: containerNode,
        cssClasses: cssClasses,
        placeholder: placeholder,
        templates: templates,
        autofocus: autofocus,
        searchAsYouType: searchAsYouType,
        showReset: showReset,
        showSubmit: showSubmit,
        showLoadingIndicator: showLoadingIndicator
    });
    var makeWidget = _connectSearchBoxJsDefault.default(specializedRenderer, function() {
        return _preact.render(null, containerNode);
    });
    return _objectSpread(_objectSpread({
    }, makeWidget({
        queryHook: queryHook
    })), {
    }, {
        $$widgetType: 'ais.searchBox'
    });
};
exports.default = searchBox;

},{"preact":"26zcy","classnames":"jocGM","../../lib/utils/index.js":"etVYs","../../lib/suit.js":"du81D","../../connectors/search-box/connectSearchBox.js":"kqCmi","../../components/SearchBox/SearchBox.js":"acfnu","./defaultTemplates.js":"aAfNi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kqCmi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../lib/utils/index.js");
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var withUsage = _indexJs.createDocumentationMessageGenerator({
    name: 'search-box',
    connector: true
});
var defaultQueryHook = function defaultQueryHook(query, hook) {
    return hook(query);
};
/**
 * **SearchBox** connector provides the logic to build a widget that will let the user search for a query.
 *
 * The connector provides to the rendering: `refine()` to set the query. The behaviour of this function
 * may be impacted by the `queryHook` widget parameter.
 */ var connectSearchBox = function connectSearchBox(renderFn) {
    var unmountFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _indexJs.noop;
    _indexJs.checkRendering(renderFn, withUsage());
    return function(widgetParams) {
        var _ref = widgetParams || {
        }, _ref$queryHook = _ref.queryHook, queryHook = _ref$queryHook === void 0 ? defaultQueryHook : _ref$queryHook;
        var _refine;
        var _clear;
        return {
            $$type: 'ais.searchBox',
            init: function init(initOptions) {
                var instantSearchInstance = initOptions.instantSearchInstance;
                renderFn(_objectSpread(_objectSpread({
                }, this.getWidgetRenderState(initOptions)), {
                }, {
                    instantSearchInstance: instantSearchInstance
                }), true);
            },
            render: function render(renderOptions) {
                var instantSearchInstance = renderOptions.instantSearchInstance;
                renderFn(_objectSpread(_objectSpread({
                }, this.getWidgetRenderState(renderOptions)), {
                }, {
                    instantSearchInstance: instantSearchInstance
                }), false);
            },
            dispose: function dispose(_ref2) {
                var state = _ref2.state;
                unmountFn();
                return state.setQueryParameter('query', undefined);
            },
            getRenderState: function getRenderState(renderState, renderOptions) {
                return _objectSpread(_objectSpread({
                }, renderState), {
                }, {
                    searchBox: this.getWidgetRenderState(renderOptions)
                });
            },
            getWidgetRenderState: function getWidgetRenderState(_ref3) {
                var helper = _ref3.helper, searchMetadata = _ref3.searchMetadata, state = _ref3.state;
                if (!_refine) {
                    _refine = function _refine(query) {
                        queryHook(query, function(q) {
                            return helper.setQuery(q).search();
                        });
                    };
                    _clear = function _clear() {
                        helper.setQuery('').search();
                    };
                }
                return {
                    query: state.query || '',
                    refine: _refine,
                    clear: _clear,
                    widgetParams: widgetParams,
                    isSearchStalled: searchMetadata.isSearchStalled
                };
            },
            getWidgetUiState: function getWidgetUiState(uiState, _ref4) {
                var searchParameters = _ref4.searchParameters;
                var query = searchParameters.query || '';
                if (query === '' || uiState && uiState.query === query) return uiState;
                return _objectSpread(_objectSpread({
                }, uiState), {
                }, {
                    query: query
                });
            },
            getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, _ref5) {
                var uiState = _ref5.uiState;
                return searchParameters.setQueryParameter('query', uiState.query || '');
            }
        };
    };
};
exports.default = connectSearchBox;

},{"../../lib/utils/index.js":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d7jLd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const resultHit = (hit)=>`<a class="result-hit">
  <div class="result-hit__image-container">
    <img class="result-hit__image" src="${hit.image}" />
  </div>
  <div class="result-hit__details">
    <h3 class="result-hit__name">${hit._highlightResult.name.value}</h3>
    <p class="result-hit__price">$${hit.price}</p>
  </div>
  <div class="result-hit__controls">
    <button id="view-item" class="result-hit__view" data-algolia-objectid="${hit.objectID}" data-position="${hit.__hitIndex + 1}">View</button>
    <button id="add-to-cart" class="result-hit__cart" data-algolia-objectid="${hit.objectID}">Add To Cart</button>
  </div>
</a>`
;
exports.default = resultHit;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dxSBH":[function(require,module,exports) {
const aa = require("./dist/search-insights-browser.cjs.min.js");
module.exports = aa.default;
Object.keys(aa).forEach((key)=>{
    if (key !== "default") module.exports[key] = aa[key];
});

},{"./dist/search-insights-browser.cjs.min.js":"2EtVB"}],"2EtVB":[function(require,module,exports) {
"use strict";
function objectAssignPolyfill() {
    "function" != typeof Object.assign && (Object.assign = function(e, t) {
        var n = arguments;
        if (null == e) throw new TypeError("Cannot convert undefined or null to object");
        for(var i = Object(e), o = 1; o < arguments.length; o++){
            var r = n[o];
            if (null != r) for(var s in r)Object.prototype.hasOwnProperty.call(r, s) && (i[s] = r[s]);
        }
        return i;
    });
}
function objectKeysPolyfill() {
    var e, t, n, i;
    Object.keys || (Object.keys = (e = Object.prototype.hasOwnProperty, t = !({
        toString: null
    }).propertyIsEnumerable("toString"), i = (n = [
        "toString",
        "toLocaleString",
        "valueOf",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "constructor"
    ]).length, function(o) {
        if ("function" != typeof o && ("object" != typeof o || null === o)) throw new TypeError("Object.keys called on non-object");
        var r, s, a = [];
        for(r in o)e.call(o, r) && a.push(r);
        if (t) for(s = 0; s < i; s++)e.call(o, n[s]) && a.push(n[s]);
        return a;
    }));
}
function __rest(e, t) {
    var n = {
    };
    for(var i in e)Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
        var o = 0;
        for(i = Object.getOwnPropertySymbols(e); o < i.length; o++)t.indexOf(i[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[o]) && (n[i[o]] = e[i[o]]);
    }
    return n;
}
Object.defineProperty(exports, "__esModule", {
    value: !0
});
var supportsCookies = function() {
    try {
        return Boolean(navigator.cookieEnabled);
    } catch (e) {
        return !1;
    }
}, supportsSendBeacon = function() {
    try {
        return Boolean(navigator.sendBeacon);
    } catch (e) {
        return !1;
    }
}, supportsXMLHttpRequest = function() {
    try {
        return Boolean(XMLHttpRequest);
    } catch (e) {
        return !1;
    }
}, isUndefined = function(e) {
    return void 0 === e;
}, isString = function(e) {
    return "string" == typeof e;
}, isNumber = function(e) {
    return "number" == typeof e;
}, isFunction = function(e) {
    return "function" == typeof e;
};
function makeSendEvents(e1) {
    return function(t1) {
        var n = this;
        if (!this._userHasOptedOut) {
            if (!this._hasCredentials) throw new Error("Before calling any methods on the analytics, you first need to call the 'init' function with appId and apiKey parameters");
            var i1 = t1.map(function(e) {
                var t, i, o = e.filters, r = __rest(e, [
                    "filters"
                ]), s = Object.assign(Object.assign({
                }, r), {
                    userToken: (i = null === (t = e) || void 0 === t ? void 0 : t.userToken, null !== i && void 0 !== i ? i : n._userToken)
                });
                return isUndefined(o) || (s.filters = o.map(encodeURIComponent)), s;
            });
            return sendRequest(e1, this._appId, this._apiKey, this._ua, this._endpointOrigin, i1);
        }
    };
}
function sendRequest(e, t, n, i, o, r) {
    return e(o + "/1/events?X-Algolia-Application-Id=" + t + "&X-Algolia-API-Key=" + n + "&X-Algolia-Agent=" + encodeURIComponent(i.join("; ")), {
        events: r
    });
}
var version = "2.2.1", DEFAULT_ALGOLIA_AGENTS = [
    "insights-js (" + version + ")",
    "insights-js-browser-cjs (" + version + ")"
];
function addAlgoliaAgent(e) {
    -1 === this._ua.indexOf(e) && this._ua.push(e);
}
var SUPPORTED_REGIONS = [
    "de",
    "us"
], MONTH = 2592000000;
function init(e) {
    var t;
    if (!e) throw new Error("Init function should be called with an object argument containing your apiKey and appId");
    if (isUndefined(e.apiKey) || !isString(e.apiKey)) throw new Error("apiKey is missing, please provide it so we can authenticate the application");
    if (isUndefined(e.appId) || !isString(e.appId)) throw new Error("appId is missing, please provide it, so we can properly attribute data to your application");
    if (!isUndefined(e.region) && -1 === SUPPORTED_REGIONS.indexOf(e.region)) throw new Error("optional region is incorrect, please provide either one of: " + SUPPORTED_REGIONS.join(", ") + ".");
    if (!(isUndefined(e.cookieDuration) || isNumber(e.cookieDuration) && isFinite(e.cookieDuration) && Math.floor(e.cookieDuration) === e.cookieDuration)) throw new Error("optional cookieDuration is incorrect, expected an integer.");
    console.info("Since v2.0.4, search-insights no longer validates event payloads.\nYou can visit https://algolia.com/events/debugger instead."), this._apiKey = e.apiKey, this._appId = e.appId, this._userHasOptedOut = !!e.userHasOptedOut, this._region = e.region, this._endpointOrigin = e.region ? "https://insights." + e.region + ".algolia.io" : "https://insights.algolia.io", this._useCookie = null !== (t = e.useCookie) && void 0 !== t && t, this._cookieDuration = e.cookieDuration ? e.cookieDuration : 6 * MONTH, this._hasCredentials = !0, this._ua = [].concat(DEFAULT_ALGOLIA_AGENTS), e.userToken ? this.setUserToken(e.userToken) : this._userToken || this._userHasOptedOut || !this._useCookie || this.setAnonymousUserToken();
}
function getVersion(e) {
    isFunction(e) && e(this.version);
}
function addEventType(e, t2) {
    return t2.map(function(t) {
        return Object.assign({
            eventType: e
        }, t);
    });
}
function clickedObjectIDsAfterSearch() {
    for(var e = [], t = arguments.length; t--;)e[t] = arguments[t];
    return this.sendEvents(addEventType("click", e));
}
function clickedObjectIDs() {
    for(var e = [], t = arguments.length; t--;)e[t] = arguments[t];
    return this.sendEvents(addEventType("click", e));
}
function clickedFilters() {
    for(var e = [], t = arguments.length; t--;)e[t] = arguments[t];
    return this.sendEvents(addEventType("click", e));
}
function convertedObjectIDsAfterSearch() {
    for(var e = [], t = arguments.length; t--;)e[t] = arguments[t];
    return this.sendEvents(addEventType("conversion", e));
}
function convertedObjectIDs() {
    for(var e = [], t = arguments.length; t--;)e[t] = arguments[t];
    return this.sendEvents(addEventType("conversion", e));
}
function convertedFilters() {
    for(var e = [], t = arguments.length; t--;)e[t] = arguments[t];
    return this.sendEvents(addEventType("conversion", e));
}
function viewedObjectIDs() {
    for(var e = [], t = arguments.length; t--;)e[t] = arguments[t];
    return this.sendEvents(addEventType("view", e));
}
function viewedFilters() {
    for(var e = [], t = arguments.length; t--;)e[t] = arguments[t];
    return this.sendEvents(addEventType("view", e));
}
var createUUID = function() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
        var t = 16 * Math.random() | 0;
        return ("x" === e ? t : 3 & t | 8).toString(16);
    });
}, COOKIE_KEY = "_ALGOLIA", setCookie = function(e, t, n) {
    var i = new Date;
    i.setTime(i.getTime() + n);
    var o = "expires=" + i.toUTCString();
    document.cookie = e + "=" + t + ";" + o + ";path=/";
}, getCookie = function(e) {
    for(var t = e + "=", n = document.cookie.split(";"), i = 0; i < n.length; i++){
        for(var o = n[i]; " " === o.charAt(0);)o = o.substring(1);
        if (0 === o.indexOf(t)) return o.substring(t.length, o.length);
    }
    return "";
};
function setAnonymousUserToken() {
    if (supportsCookies()) {
        var e = getCookie(COOKIE_KEY);
        e && "" !== e && 0 === e.indexOf("anonymous-") ? this.setUserToken(e) : (this.setUserToken("anonymous-" + createUUID()), setCookie(COOKIE_KEY, this._userToken, this._cookieDuration));
    }
}
function setUserToken(e) {
    this._userToken = e, isFunction(this._onUserTokenChangeCallback) && this._onUserTokenChangeCallback(this._userToken);
}
function getUserToken(e, t) {
    return isFunction(t) && t(null, this._userToken), this._userToken;
}
function onUserTokenChange(e, t) {
    this._onUserTokenChangeCallback = e, t && t.immediate && isFunction(this._onUserTokenChangeCallback) && this._onUserTokenChangeCallback(this._userToken);
}
objectKeysPolyfill(), objectAssignPolyfill();
var AlgoliaAnalytics = function(e) {
    var t = e.requestFn;
    this._ua = [], this.version = version, this._hasCredentials = !1, this.sendEvents = makeSendEvents(t).bind(this), this.init = init.bind(this), this.addAlgoliaAgent = addAlgoliaAgent.bind(this), this.setUserToken = setUserToken.bind(this), this.setAnonymousUserToken = setAnonymousUserToken.bind(this), this.getUserToken = getUserToken.bind(this), this.onUserTokenChange = onUserTokenChange.bind(this), this.clickedObjectIDsAfterSearch = clickedObjectIDsAfterSearch.bind(this), this.clickedObjectIDs = clickedObjectIDs.bind(this), this.clickedFilters = clickedFilters.bind(this), this.convertedObjectIDsAfterSearch = convertedObjectIDsAfterSearch.bind(this), this.convertedObjectIDs = convertedObjectIDs.bind(this), this.convertedFilters = convertedFilters.bind(this), this.viewedObjectIDs = viewedObjectIDs.bind(this), this.viewedFilters = viewedFilters.bind(this), this.getVersion = getVersion.bind(this);
};
function getFunctionalInterface(e) {
    return function(t) {
        for(var n = [], i = arguments.length - 1; i-- > 0;)n[i] = arguments[i + 1];
        t && isFunction(e[t]) ? e[t].apply(e, n) : console.warn("The method `" + t + "` doesn't exist.");
    };
}
var requestWithSendBeacon = function(e, t) {
    var n = JSON.stringify(t);
    if (!navigator.sendBeacon(e, n)) return requestWithXMLHttpRequest(e, t);
}, requestWithXMLHttpRequest = function(e, t) {
    var n = JSON.stringify(t), i = new XMLHttpRequest;
    i.open("POST", e), i.send(n);
};
function getRequesterForBrowser() {
    if (supportsSendBeacon()) return requestWithSendBeacon;
    if (supportsXMLHttpRequest()) return requestWithXMLHttpRequest;
    throw new Error("Could not find a supported HTTP request client in this environment.");
}
function processQueue(e2) {
    var t3 = e2.AlgoliaAnalyticsObject;
    if (t3) {
        var n = getFunctionalInterface(this), i3 = e2[t3];
        i3.queue = i3.queue || [];
        var o1 = i3.queue;
        o1.forEach(function(e) {
            var t = [].slice.call(e), i = t[0], o = t.slice(1);
            n.apply(void 0, [
                i
            ].concat(o));
        }), o1.push = function(e) {
            var t = [].slice.call(e), i = t[0], o = t.slice(1);
            n.apply(void 0, [
                i
            ].concat(o));
        };
    }
}
function createInsightsClient(e) {
    return getFunctionalInterface(new AlgoliaAnalytics({
        requestFn: e
    }));
}
var entryBrowserCjs = createInsightsClient(getRequesterForBrowser());
exports.AlgoliaAnalytics = AlgoliaAnalytics, exports.default = entryBrowserCjs, exports.getFunctionalInterface = getFunctionalInterface, exports.getRequesterForBrowser = getRequesterForBrowser, exports.processQueue = processQueue;

},{}],"4GGlC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _createInsightsMiddlewareJs = require("./createInsightsMiddleware.js");
parcelHelpers.exportAll(_createInsightsMiddlewareJs, exports);
var _createRouterMiddlewareJs = require("./createRouterMiddleware.js");
parcelHelpers.exportAll(_createRouterMiddlewareJs, exports);
var _createMetadataMiddlewareJs = require("./createMetadataMiddleware.js");
parcelHelpers.exportAll(_createMetadataMiddlewareJs, exports);

},{"./createInsightsMiddleware.js":"bQz4Y","./createRouterMiddleware.js":"4mKEu","./createMetadataMiddleware.js":"lOLJd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bQz4Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createInsightsMiddleware", ()=>createInsightsMiddleware
);
var _indexJs = require("../helpers/index.js");
var _indexJs1 = require("../lib/utils/index.js");
var _connectConfigureJs = require("../connectors/configure/connectConfigure.js");
var _connectConfigureJsDefault = parcelHelpers.interopDefault(_connectConfigureJs);
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
var createInsightsMiddleware = function createInsightsMiddleware(props) {
    var _ref = props || {
    }, _insightsClient = _ref.insightsClient, insightsInitParams = _ref.insightsInitParams, onEvent = _ref.onEvent;
    if (_insightsClient !== null && !_insightsClient) throw new Error("The `insightsClient` option is required if you want userToken to be automatically set in search calls. If you don't want this behaviour, set it to `null`.");
    var hasInsightsClient = Boolean(_insightsClient);
    var insightsClient = _insightsClient === null ? _indexJs1.noop : _insightsClient;
    return function(_ref2) {
        var instantSearchInstance = _ref2.instantSearchInstance;
        var _getAppIdAndApiKey = _indexJs1.getAppIdAndApiKey(instantSearchInstance.client), _getAppIdAndApiKey2 = _slicedToArray(_getAppIdAndApiKey, 2), appId = _getAppIdAndApiKey2[0], apiKey = _getAppIdAndApiKey2[1]; // search-insights.js also throws an error so dev-only clarification is sufficient
        if (!(appId && apiKey)) throw new Error('[insights middleware]: could not extract Algolia credentials from searchClient');
        var queuedUserToken = undefined;
        var userTokenBeforeInit = undefined;
        if (Array.isArray(insightsClient.queue)) {
            // Context: The umd build of search-insights is asynchronously loaded by the snippet.
            //
            // When user calls `aa('setUserToken', 'my-user-token')` before `search-insights` is loaded,
            // ['setUserToken', 'my-user-token'] gets stored in `aa.queue`.
            // Whenever `search-insights` is finally loaded, it will process the queue.
            //
            // But here's the reason why we handle it here:
            // At this point, even though `search-insights` is not loaded yet,
            // we still want to read the token from the queue.
            // Otherwise, the first search call will be fired without the token.
            var _ref3 = _indexJs1.find(insightsClient.queue.slice().reverse(), function(_ref5) {
                var _ref6 = _slicedToArray(_ref5, 1), method = _ref6[0];
                return method === 'setUserToken';
            }) || [];
            var _ref4 = _slicedToArray(_ref3, 2);
            queuedUserToken = _ref4[1];
        }
        insightsClient('getUserToken', null, function(_error, userToken) {
            // If user has called `aa('setUserToken', 'my-user-token')` before creating
            // the `insights` middleware, we store them temporarily and
            // set it later on.
            //
            // Otherwise, the `init` call might override it with anonymous user token.
            userTokenBeforeInit = userToken;
        });
        insightsClient('init', _objectSpread({
            appId: appId,
            apiKey: apiKey
        }, insightsInitParams));
        var createWidget = _connectConfigureJsDefault.default(_indexJs1.noop);
        var configureClickAnalytics;
        var configureUserToken;
        return {
            onStateChange: function onStateChange() {
            },
            subscribe: function subscribe() {
                insightsClient('addAlgoliaAgent', 'insights-middleware');
                configureClickAnalytics = createWidget({
                    searchParameters: {
                        clickAnalytics: true
                    }
                });
                instantSearchInstance.addWidgets([
                    configureClickAnalytics
                ]);
                var setUserTokenToSearch = function setUserTokenToSearch(userToken) {
                    if (configureUserToken) instantSearchInstance.removeWidgets([
                        configureUserToken
                    ]);
                    configureUserToken = createWidget({
                        searchParameters: {
                            userToken: userToken
                        }
                    });
                    instantSearchInstance.addWidgets([
                        configureUserToken
                    ]);
                };
                var anonymousUserToken = _indexJs.getInsightsAnonymousUserTokenInternal();
                if (hasInsightsClient && anonymousUserToken) // When `aa('init', { ... })` is called, it creates an anonymous user token in cookie.
                // We can set it as userToken.
                setUserTokenToSearch(anonymousUserToken);
                 // We consider the `userToken` coming from a `init` call to have a higher
                // importance than the one coming from the queue.
                if (userTokenBeforeInit) insightsClient('setUserToken', userTokenBeforeInit);
                else if (queuedUserToken) insightsClient('setUserToken', queuedUserToken);
                 // This updates userToken which is set explicitly by `aa('setUserToken', userToken)`
                insightsClient('onUserTokenChange', setUserTokenToSearch, {
                    immediate: true
                });
                instantSearchInstance.sendEventToInsights = function(event) {
                    if (onEvent) onEvent(event, _insightsClient);
                    else if (event.insightsMethod) {
                        // At this point, instantSearchInstance must be started and
                        // it means there is a configure widget (added above).
                        var hasUserToken = Boolean(instantSearchInstance.renderState[instantSearchInstance.indexName].configure.widgetParams.searchParameters.userToken);
                        if (hasUserToken) insightsClient(event.insightsMethod, event.payload);
                        else _indexJs1.warning(false, "\nCannot send event to Algolia Insights because `userToken` is not set.\n\nSee documentation: https://www.algolia.com/doc/guides/building-search-ui/going-further/send-insights-events/js/#setting-the-usertoken\n");
                    } else _indexJs1.warning(false, 'Cannot send event to Algolia Insights because `insightsMethod` option is missing.');
                };
            },
            unsubscribe: function unsubscribe() {
                insightsClient('onUserTokenChange', undefined);
                instantSearchInstance.removeWidgets([
                    configureClickAnalytics,
                    configureUserToken
                ]);
                configureClickAnalytics = undefined;
                configureUserToken = undefined;
                instantSearchInstance.sendEventToInsights = _indexJs1.noop;
            }
        };
    };
};

},{"../helpers/index.js":"8kgzi","../lib/utils/index.js":"etVYs","../connectors/configure/connectConfigure.js":"lvgHS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lvgHS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _algoliasearchHelper = require("algoliasearch-helper");
var _algoliasearchHelperDefault = parcelHelpers.interopDefault(_algoliasearchHelper);
var _indexJs = require("../../lib/utils/index.js");
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
/**
 * Refine the given search parameters.
 */ var withUsage = _indexJs.createDocumentationMessageGenerator({
    name: 'configure',
    connector: true
});
function getInitialSearchParameters(state, widgetParams) {
    // We leverage the helper internals to remove the `widgetParams` from
    // the state. The function `setQueryParameters` omits the values that
    // are `undefined` on the next state.
    return state.setQueryParameters(Object.keys(widgetParams.searchParameters).reduce(function(acc, key) {
        return _objectSpread(_objectSpread({
        }, acc), {
        }, _defineProperty({
        }, key, undefined));
    }, {
    }));
}
var connectConfigure = function connectConfigure() {
    var renderFn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _indexJs.noop;
    var unmountFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _indexJs.noop;
    return function(widgetParams) {
        if (!widgetParams || !_indexJs.isPlainObject(widgetParams.searchParameters)) throw new Error(withUsage('The `searchParameters` option expects an object.'));
        var connectorState = {
        };
        function refine(helper) {
            return function(searchParameters) {
                // Merge new `searchParameters` with the ones set from other widgets
                var actualState = getInitialSearchParameters(helper.state, widgetParams);
                var nextSearchParameters = _indexJs.mergeSearchParameters(actualState, new _algoliasearchHelperDefault.default.SearchParameters(searchParameters)); // Update original `widgetParams.searchParameters` to the new refined one
                widgetParams.searchParameters = searchParameters; // Trigger a search with the resolved search parameters
                helper.setState(nextSearchParameters).search();
            };
        }
        return {
            $$type: 'ais.configure',
            init: function init(initOptions) {
                var instantSearchInstance = initOptions.instantSearchInstance;
                renderFn(_objectSpread(_objectSpread({
                }, this.getWidgetRenderState(initOptions)), {
                }, {
                    instantSearchInstance: instantSearchInstance
                }), true);
            },
            render: function render(renderOptions) {
                var instantSearchInstance = renderOptions.instantSearchInstance;
                renderFn(_objectSpread(_objectSpread({
                }, this.getWidgetRenderState(renderOptions)), {
                }, {
                    instantSearchInstance: instantSearchInstance
                }), false);
            },
            dispose: function dispose(_ref) {
                var state = _ref.state;
                unmountFn();
                return getInitialSearchParameters(state, widgetParams);
            },
            getRenderState: function getRenderState(renderState, renderOptions) {
                var _renderState$configur;
                var widgetRenderState = this.getWidgetRenderState(renderOptions);
                return _objectSpread(_objectSpread({
                }, renderState), {
                }, {
                    configure: _objectSpread(_objectSpread({
                    }, widgetRenderState), {
                    }, {
                        widgetParams: _objectSpread(_objectSpread({
                        }, widgetRenderState.widgetParams), {
                        }, {
                            searchParameters: _indexJs.mergeSearchParameters(new _algoliasearchHelperDefault.default.SearchParameters((_renderState$configur = renderState.configure) === null || _renderState$configur === void 0 ? void 0 : _renderState$configur.widgetParams.searchParameters), new _algoliasearchHelperDefault.default.SearchParameters(widgetRenderState.widgetParams.searchParameters)).getQueryParams()
                        })
                    })
                });
            },
            getWidgetRenderState: function getWidgetRenderState(_ref2) {
                var helper = _ref2.helper;
                if (!connectorState.refine) connectorState.refine = refine(helper);
                return {
                    refine: connectorState.refine,
                    widgetParams: widgetParams
                };
            },
            getWidgetSearchParameters: function getWidgetSearchParameters(state, _ref3) {
                var uiState = _ref3.uiState;
                return _indexJs.mergeSearchParameters(state, new _algoliasearchHelperDefault.default.SearchParameters(_objectSpread(_objectSpread({
                }, uiState.configure), widgetParams.searchParameters)));
            },
            getWidgetUiState: function getWidgetUiState(uiState) {
                return _objectSpread(_objectSpread({
                }, uiState), {
                }, {
                    configure: _objectSpread(_objectSpread({
                    }, uiState.configure), widgetParams.searchParameters)
                });
            }
        };
    };
};
exports.default = connectConfigure;

},{"algoliasearch-helper":"jGqjt","../../lib/utils/index.js":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["6IXwR","bNKaB"], "bNKaB", "parcelRequire95ae")

//# sourceMappingURL=index.0641b553.js.map
