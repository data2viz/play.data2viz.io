/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/platform/platform.js":
/*!*******************************************!*\
  !*** ./node_modules/platform/platform.js ***!
  \*******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Platform.js <https://mths.be/platform>
 * Copyright 2014-2018 Benjamin Tan <https://bnjmnt4n.now.sh/>
 * Copyright 2011-2013 John-David Dalton <http://allyoucanleet.com/>
 * Available under MIT license <https://mths.be/mit>
 */
;(function() {
  'use strict';

  /** Used to determine if values are of the language type `Object`. */
  var objectTypes = {
    'function': true,
    'object': true
  };

  /** Used as a reference to the global object. */
  var root = (objectTypes[typeof window] && window) || this;

  /** Backup possible global object. */
  var oldRoot = root;

  /** Detect free variable `exports`. */
  var freeExports = objectTypes[typeof exports] && exports;

  /** Detect free variable `module`. */
  var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;

  /** Detect free variable `global` from Node.js or Browserified code and use it as `root`. */
  var freeGlobal = freeExports && freeModule && typeof global == 'object' && global;
  if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal)) {
    root = freeGlobal;
  }

  /**
   * Used as the maximum length of an array-like object.
   * See the [ES6 spec](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength)
   * for more details.
   */
  var maxSafeInteger = Math.pow(2, 53) - 1;

  /** Regular expression to detect Opera. */
  var reOpera = /\bOpera/;

  /** Possible global object. */
  var thisBinding = this;

  /** Used for native method references. */
  var objectProto = Object.prototype;

  /** Used to check for own properties of an object. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /** Used to resolve the internal `[[Class]]` of values. */
  var toString = objectProto.toString;

  /*--------------------------------------------------------------------------*/

  /**
   * Capitalizes a string value.
   *
   * @private
   * @param {string} string The string to capitalize.
   * @returns {string} The capitalized string.
   */
  function capitalize(string) {
    string = String(string);
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  /**
   * A utility function to clean up the OS name.
   *
   * @private
   * @param {string} os The OS name to clean up.
   * @param {string} [pattern] A `RegExp` pattern matching the OS name.
   * @param {string} [label] A label for the OS.
   */
  function cleanupOS(os, pattern, label) {
    // Platform tokens are defined at:
    // http://msdn.microsoft.com/en-us/library/ms537503(VS.85).aspx
    // http://web.archive.org/web/20081122053950/http://msdn.microsoft.com/en-us/library/ms537503(VS.85).aspx
    var data = {
      '10.0': '10',
      '6.4':  '10 Technical Preview',
      '6.3':  '8.1',
      '6.2':  '8',
      '6.1':  'Server 2008 R2 / 7',
      '6.0':  'Server 2008 / Vista',
      '5.2':  'Server 2003 / XP 64-bit',
      '5.1':  'XP',
      '5.01': '2000 SP1',
      '5.0':  '2000',
      '4.0':  'NT',
      '4.90': 'ME'
    };
    // Detect Windows version from platform tokens.
    if (pattern && label && /^Win/i.test(os) && !/^Windows Phone /i.test(os) &&
        (data = data[/[\d.]+$/.exec(os)])) {
      os = 'Windows ' + data;
    }
    // Correct character case and cleanup string.
    os = String(os);

    if (pattern && label) {
      os = os.replace(RegExp(pattern, 'i'), label);
    }

    os = format(
      os.replace(/ ce$/i, ' CE')
        .replace(/\bhpw/i, 'web')
        .replace(/\bMacintosh\b/, 'Mac OS')
        .replace(/_PowerPC\b/i, ' OS')
        .replace(/\b(OS X) [^ \d]+/i, '$1')
        .replace(/\bMac (OS X)\b/, '$1')
        .replace(/\/(\d)/, ' $1')
        .replace(/_/g, '.')
        .replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, '')
        .replace(/\bx86\.64\b/gi, 'x86_64')
        .replace(/\b(Windows Phone) OS\b/, '$1')
        .replace(/\b(Chrome OS \w+) [\d.]+\b/, '$1')
        .split(' on ')[0]
    );

    return os;
  }

  /**
   * An iteration utility for arrays and objects.
   *
   * @private
   * @param {Array|Object} object The object to iterate over.
   * @param {Function} callback The function called per iteration.
   */
  function each(object, callback) {
    var index = -1,
        length = object ? object.length : 0;

    if (typeof length == 'number' && length > -1 && length <= maxSafeInteger) {
      while (++index < length) {
        callback(object[index], index, object);
      }
    } else {
      forOwn(object, callback);
    }
  }

  /**
   * Trim and conditionally capitalize string values.
   *
   * @private
   * @param {string} string The string to format.
   * @returns {string} The formatted string.
   */
  function format(string) {
    string = trim(string);
    return /^(?:webOS|i(?:OS|P))/.test(string)
      ? string
      : capitalize(string);
  }

  /**
   * Iterates over an object's own properties, executing the `callback` for each.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} callback The function executed per own property.
   */
  function forOwn(object, callback) {
    for (var key in object) {
      if (hasOwnProperty.call(object, key)) {
        callback(object[key], key, object);
      }
    }
  }

  /**
   * Gets the internal `[[Class]]` of a value.
   *
   * @private
   * @param {*} value The value.
   * @returns {string} The `[[Class]]`.
   */
  function getClassOf(value) {
    return value == null
      ? capitalize(value)
      : toString.call(value).slice(8, -1);
  }

  /**
   * Host objects can return type values that are different from their actual
   * data type. The objects we are concerned with usually return non-primitive
   * types of "object", "function", or "unknown".
   *
   * @private
   * @param {*} object The owner of the property.
   * @param {string} property The property to check.
   * @returns {boolean} Returns `true` if the property value is a non-primitive, else `false`.
   */
  function isHostType(object, property) {
    var type = object != null ? typeof object[property] : 'number';
    return !/^(?:boolean|number|string|undefined)$/.test(type) &&
      (type == 'object' ? !!object[property] : true);
  }

  /**
   * Prepares a string for use in a `RegExp` by making hyphens and spaces optional.
   *
   * @private
   * @param {string} string The string to qualify.
   * @returns {string} The qualified string.
   */
  function qualify(string) {
    return String(string).replace(/([ -])(?!$)/g, '$1?');
  }

  /**
   * A bare-bones `Array#reduce` like utility function.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} callback The function called per iteration.
   * @returns {*} The accumulated result.
   */
  function reduce(array, callback) {
    var accumulator = null;
    each(array, function(value, index) {
      accumulator = callback(accumulator, value, index, array);
    });
    return accumulator;
  }

  /**
   * Removes leading and trailing whitespace from a string.
   *
   * @private
   * @param {string} string The string to trim.
   * @returns {string} The trimmed string.
   */
  function trim(string) {
    return String(string).replace(/^ +| +$/g, '');
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Creates a new platform object.
   *
   * @memberOf platform
   * @param {Object|string} [ua=navigator.userAgent] The user agent string or
   *  context object.
   * @returns {Object} A platform object.
   */
  function parse(ua) {

    /** The environment context object. */
    var context = root;

    /** Used to flag when a custom context is provided. */
    var isCustomContext = ua && typeof ua == 'object' && getClassOf(ua) != 'String';

    // Juggle arguments.
    if (isCustomContext) {
      context = ua;
      ua = null;
    }

    /** Browser navigator object. */
    var nav = context.navigator || {};

    /** Browser user agent string. */
    var userAgent = nav.userAgent || '';

    ua || (ua = userAgent);

    /** Used to flag when `thisBinding` is the [ModuleScope]. */
    var isModuleScope = isCustomContext || thisBinding == oldRoot;

    /** Used to detect if browser is like Chrome. */
    var likeChrome = isCustomContext
      ? !!nav.likeChrome
      : /\bChrome\b/.test(ua) && !/internal|\n/i.test(toString.toString());

    /** Internal `[[Class]]` value shortcuts. */
    var objectClass = 'Object',
        airRuntimeClass = isCustomContext ? objectClass : 'ScriptBridgingProxyObject',
        enviroClass = isCustomContext ? objectClass : 'Environment',
        javaClass = (isCustomContext && context.java) ? 'JavaPackage' : getClassOf(context.java),
        phantomClass = isCustomContext ? objectClass : 'RuntimeObject';

    /** Detect Java environments. */
    var java = /\bJava/.test(javaClass) && context.java;

    /** Detect Rhino. */
    var rhino = java && getClassOf(context.environment) == enviroClass;

    /** A character to represent alpha. */
    var alpha = java ? 'a' : '\u03b1';

    /** A character to represent beta. */
    var beta = java ? 'b' : '\u03b2';

    /** Browser document object. */
    var doc = context.document || {};

    /**
     * Detect Opera browser (Presto-based).
     * http://www.howtocreate.co.uk/operaStuff/operaObject.html
     * http://dev.opera.com/articles/view/opera-mini-web-content-authoring-guidelines/#operamini
     */
    var opera = context.operamini || context.opera;

    /** Opera `[[Class]]`. */
    var operaClass = reOpera.test(operaClass = (isCustomContext && opera) ? opera['[[Class]]'] : getClassOf(opera))
      ? operaClass
      : (opera = null);

    /*------------------------------------------------------------------------*/

    /** Temporary variable used over the script's lifetime. */
    var data;

    /** The CPU architecture. */
    var arch = ua;

    /** Platform description array. */
    var description = [];

    /** Platform alpha/beta indicator. */
    var prerelease = null;

    /** A flag to indicate that environment features should be used to resolve the platform. */
    var useFeatures = ua == userAgent;

    /** The browser/environment version. */
    var version = useFeatures && opera && typeof opera.version == 'function' && opera.version();

    /** A flag to indicate if the OS ends with "/ Version" */
    var isSpecialCasedOS;

    /* Detectable layout engines (order is important). */
    var layout = getLayout([
      { 'label': 'EdgeHTML', 'pattern': 'Edge' },
      'Trident',
      { 'label': 'WebKit', 'pattern': 'AppleWebKit' },
      'iCab',
      'Presto',
      'NetFront',
      'Tasman',
      'KHTML',
      'Gecko'
    ]);

    /* Detectable browser names (order is important). */
    var name = getName([
      'Adobe AIR',
      'Arora',
      'Avant Browser',
      'Breach',
      'Camino',
      'Electron',
      'Epiphany',
      'Fennec',
      'Flock',
      'Galeon',
      'GreenBrowser',
      'iCab',
      'Iceweasel',
      'K-Meleon',
      'Konqueror',
      'Lunascape',
      'Maxthon',
      { 'label': 'Microsoft Edge', 'pattern': 'Edge' },
      'Midori',
      'Nook Browser',
      'PaleMoon',
      'PhantomJS',
      'Raven',
      'Rekonq',
      'RockMelt',
      { 'label': 'Samsung Internet', 'pattern': 'SamsungBrowser' },
      'SeaMonkey',
      { 'label': 'Silk', 'pattern': '(?:Cloud9|Silk-Accelerated)' },
      'Sleipnir',
      'SlimBrowser',
      { 'label': 'SRWare Iron', 'pattern': 'Iron' },
      'Sunrise',
      'Swiftfox',
      'Waterfox',
      'WebPositive',
      'Opera Mini',
      { 'label': 'Opera Mini', 'pattern': 'OPiOS' },
      'Opera',
      { 'label': 'Opera', 'pattern': 'OPR' },
      'Chrome',
      { 'label': 'Chrome Mobile', 'pattern': '(?:CriOS|CrMo)' },
      { 'label': 'Firefox', 'pattern': '(?:Firefox|Minefield)' },
      { 'label': 'Firefox for iOS', 'pattern': 'FxiOS' },
      { 'label': 'IE', 'pattern': 'IEMobile' },
      { 'label': 'IE', 'pattern': 'MSIE' },
      'Safari'
    ]);

    /* Detectable products (order is important). */
    var product = getProduct([
      { 'label': 'BlackBerry', 'pattern': 'BB10' },
      'BlackBerry',
      { 'label': 'Galaxy S', 'pattern': 'GT-I9000' },
      { 'label': 'Galaxy S2', 'pattern': 'GT-I9100' },
      { 'label': 'Galaxy S3', 'pattern': 'GT-I9300' },
      { 'label': 'Galaxy S4', 'pattern': 'GT-I9500' },
      { 'label': 'Galaxy S5', 'pattern': 'SM-G900' },
      { 'label': 'Galaxy S6', 'pattern': 'SM-G920' },
      { 'label': 'Galaxy S6 Edge', 'pattern': 'SM-G925' },
      { 'label': 'Galaxy S7', 'pattern': 'SM-G930' },
      { 'label': 'Galaxy S7 Edge', 'pattern': 'SM-G935' },
      'Google TV',
      'Lumia',
      'iPad',
      'iPod',
      'iPhone',
      'Kindle',
      { 'label': 'Kindle Fire', 'pattern': '(?:Cloud9|Silk-Accelerated)' },
      'Nexus',
      'Nook',
      'PlayBook',
      'PlayStation Vita',
      'PlayStation',
      'TouchPad',
      'Transformer',
      { 'label': 'Wii U', 'pattern': 'WiiU' },
      'Wii',
      'Xbox One',
      { 'label': 'Xbox 360', 'pattern': 'Xbox' },
      'Xoom'
    ]);

    /* Detectable manufacturers. */
    var manufacturer = getManufacturer({
      'Apple': { 'iPad': 1, 'iPhone': 1, 'iPod': 1 },
      'Archos': {},
      'Amazon': { 'Kindle': 1, 'Kindle Fire': 1 },
      'Asus': { 'Transformer': 1 },
      'Barnes & Noble': { 'Nook': 1 },
      'BlackBerry': { 'PlayBook': 1 },
      'Google': { 'Google TV': 1, 'Nexus': 1 },
      'HP': { 'TouchPad': 1 },
      'HTC': {},
      'LG': {},
      'Microsoft': { 'Xbox': 1, 'Xbox One': 1 },
      'Motorola': { 'Xoom': 1 },
      'Nintendo': { 'Wii U': 1,  'Wii': 1 },
      'Nokia': { 'Lumia': 1 },
      'Samsung': { 'Galaxy S': 1, 'Galaxy S2': 1, 'Galaxy S3': 1, 'Galaxy S4': 1 },
      'Sony': { 'PlayStation': 1, 'PlayStation Vita': 1 }
    });

    /* Detectable operating systems (order is important). */
    var os = getOS([
      'Windows Phone',
      'Android',
      'CentOS',
      { 'label': 'Chrome OS', 'pattern': 'CrOS' },
      'Debian',
      'Fedora',
      'FreeBSD',
      'Gentoo',
      'Haiku',
      'Kubuntu',
      'Linux Mint',
      'OpenBSD',
      'Red Hat',
      'SuSE',
      'Ubuntu',
      'Xubuntu',
      'Cygwin',
      'Symbian OS',
      'hpwOS',
      'webOS ',
      'webOS',
      'Tablet OS',
      'Tizen',
      'Linux',
      'Mac OS X',
      'Macintosh',
      'Mac',
      'Windows 98;',
      'Windows '
    ]);

    /*------------------------------------------------------------------------*/

    /**
     * Picks the layout engine from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected layout engine.
     */
    function getLayout(guesses) {
      return reduce(guesses, function(result, guess) {
        return result || RegExp('\\b' + (
          guess.pattern || qualify(guess)
        ) + '\\b', 'i').exec(ua) && (guess.label || guess);
      });
    }

    /**
     * Picks the manufacturer from an array of guesses.
     *
     * @private
     * @param {Array} guesses An object of guesses.
     * @returns {null|string} The detected manufacturer.
     */
    function getManufacturer(guesses) {
      return reduce(guesses, function(result, value, key) {
        // Lookup the manufacturer by product or scan the UA for the manufacturer.
        return result || (
          value[product] ||
          value[/^[a-z]+(?: +[a-z]+\b)*/i.exec(product)] ||
          RegExp('\\b' + qualify(key) + '(?:\\b|\\w*\\d)', 'i').exec(ua)
        ) && key;
      });
    }

    /**
     * Picks the browser name from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected browser name.
     */
    function getName(guesses) {
      return reduce(guesses, function(result, guess) {
        return result || RegExp('\\b' + (
          guess.pattern || qualify(guess)
        ) + '\\b', 'i').exec(ua) && (guess.label || guess);
      });
    }

    /**
     * Picks the OS name from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected OS name.
     */
    function getOS(guesses) {
      return reduce(guesses, function(result, guess) {
        var pattern = guess.pattern || qualify(guess);
        if (!result && (result =
              RegExp('\\b' + pattern + '(?:/[\\d.]+|[ \\w.]*)', 'i').exec(ua)
            )) {
          result = cleanupOS(result, pattern, guess.label || guess);
        }
        return result;
      });
    }

    /**
     * Picks the product name from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected product name.
     */
    function getProduct(guesses) {
      return reduce(guesses, function(result, guess) {
        var pattern = guess.pattern || qualify(guess);
        if (!result && (result =
              RegExp('\\b' + pattern + ' *\\d+[.\\w_]*', 'i').exec(ua) ||
              RegExp('\\b' + pattern + ' *\\w+-[\\w]*', 'i').exec(ua) ||
              RegExp('\\b' + pattern + '(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)', 'i').exec(ua)
            )) {
          // Split by forward slash and append product version if needed.
          if ((result = String((guess.label && !RegExp(pattern, 'i').test(guess.label)) ? guess.label : result).split('/'))[1] && !/[\d.]+/.test(result[0])) {
            result[0] += ' ' + result[1];
          }
          // Correct character case and cleanup string.
          guess = guess.label || guess;
          result = format(result[0]
            .replace(RegExp(pattern, 'i'), guess)
            .replace(RegExp('; *(?:' + guess + '[_-])?', 'i'), ' ')
            .replace(RegExp('(' + guess + ')[-_.]?(\\w)', 'i'), '$1 $2'));
        }
        return result;
      });
    }

    /**
     * Resolves the version using an array of UA patterns.
     *
     * @private
     * @param {Array} patterns An array of UA patterns.
     * @returns {null|string} The detected version.
     */
    function getVersion(patterns) {
      return reduce(patterns, function(result, pattern) {
        return result || (RegExp(pattern +
          '(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)', 'i').exec(ua) || 0)[1] || null;
      });
    }

    /**
     * Returns `platform.description` when the platform object is coerced to a string.
     *
     * @name toString
     * @memberOf platform
     * @returns {string} Returns `platform.description` if available, else an empty string.
     */
    function toStringPlatform() {
      return this.description || '';
    }

    /*------------------------------------------------------------------------*/

    // Convert layout to an array so we can add extra details.
    layout && (layout = [layout]);

    // Detect product names that contain their manufacturer's name.
    if (manufacturer && !product) {
      product = getProduct([manufacturer]);
    }
    // Clean up Google TV.
    if ((data = /\bGoogle TV\b/.exec(product))) {
      product = data[0];
    }
    // Detect simulators.
    if (/\bSimulator\b/i.test(ua)) {
      product = (product ? product + ' ' : '') + 'Simulator';
    }
    // Detect Opera Mini 8+ running in Turbo/Uncompressed mode on iOS.
    if (name == 'Opera Mini' && /\bOPiOS\b/.test(ua)) {
      description.push('running in Turbo/Uncompressed mode');
    }
    // Detect IE Mobile 11.
    if (name == 'IE' && /\blike iPhone OS\b/.test(ua)) {
      data = parse(ua.replace(/like iPhone OS/, ''));
      manufacturer = data.manufacturer;
      product = data.product;
    }
    // Detect iOS.
    else if (/^iP/.test(product)) {
      name || (name = 'Safari');
      os = 'iOS' + ((data = / OS ([\d_]+)/i.exec(ua))
        ? ' ' + data[1].replace(/_/g, '.')
        : '');
    }
    // Detect Kubuntu.
    else if (name == 'Konqueror' && !/buntu/i.test(os)) {
      os = 'Kubuntu';
    }
    // Detect Android browsers.
    else if ((manufacturer && manufacturer != 'Google' &&
        ((/Chrome/.test(name) && !/\bMobile Safari\b/i.test(ua)) || /\bVita\b/.test(product))) ||
        (/\bAndroid\b/.test(os) && /^Chrome/.test(name) && /\bVersion\//i.test(ua))) {
      name = 'Android Browser';
      os = /\bAndroid\b/.test(os) ? os : 'Android';
    }
    // Detect Silk desktop/accelerated modes.
    else if (name == 'Silk') {
      if (!/\bMobi/i.test(ua)) {
        os = 'Android';
        description.unshift('desktop mode');
      }
      if (/Accelerated *= *true/i.test(ua)) {
        description.unshift('accelerated');
      }
    }
    // Detect PaleMoon identifying as Firefox.
    else if (name == 'PaleMoon' && (data = /\bFirefox\/([\d.]+)\b/.exec(ua))) {
      description.push('identifying as Firefox ' + data[1]);
    }
    // Detect Firefox OS and products running Firefox.
    else if (name == 'Firefox' && (data = /\b(Mobile|Tablet|TV)\b/i.exec(ua))) {
      os || (os = 'Firefox OS');
      product || (product = data[1]);
    }
    // Detect false positives for Firefox/Safari.
    else if (!name || (data = !/\bMinefield\b/i.test(ua) && /\b(?:Firefox|Safari)\b/.exec(name))) {
      // Escape the `/` for Firefox 1.
      if (name && !product && /[\/,]|^[^(]+?\)/.test(ua.slice(ua.indexOf(data + '/') + 8))) {
        // Clear name of false positives.
        name = null;
      }
      // Reassign a generic name.
      if ((data = product || manufacturer || os) &&
          (product || manufacturer || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(os))) {
        name = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(os) ? os : data) + ' Browser';
      }
    }
    // Add Chrome version to description for Electron.
    else if (name == 'Electron' && (data = (/\bChrome\/([\d.]+)\b/.exec(ua) || 0)[1])) {
      description.push('Chromium ' + data);
    }
    // Detect non-Opera (Presto-based) versions (order is important).
    if (!version) {
      version = getVersion([
        '(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))',
        'Version',
        qualify(name),
        '(?:Firefox|Minefield|NetFront)'
      ]);
    }
    // Detect stubborn layout engines.
    if ((data =
          layout == 'iCab' && parseFloat(version) > 3 && 'WebKit' ||
          /\bOpera\b/.test(name) && (/\bOPR\b/.test(ua) ? 'Blink' : 'Presto') ||
          /\b(?:Midori|Nook|Safari)\b/i.test(ua) && !/^(?:Trident|EdgeHTML)$/.test(layout) && 'WebKit' ||
          !layout && /\bMSIE\b/i.test(ua) && (os == 'Mac OS' ? 'Tasman' : 'Trident') ||
          layout == 'WebKit' && /\bPlayStation\b(?! Vita\b)/i.test(name) && 'NetFront'
        )) {
      layout = [data];
    }
    // Detect Windows Phone 7 desktop mode.
    if (name == 'IE' && (data = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(ua) || 0)[1])) {
      name += ' Mobile';
      os = 'Windows Phone ' + (/\+$/.test(data) ? data : data + '.x');
      description.unshift('desktop mode');
    }
    // Detect Windows Phone 8.x desktop mode.
    else if (/\bWPDesktop\b/i.test(ua)) {
      name = 'IE Mobile';
      os = 'Windows Phone 8.x';
      description.unshift('desktop mode');
      version || (version = (/\brv:([\d.]+)/.exec(ua) || 0)[1]);
    }
    // Detect IE 11 identifying as other browsers.
    else if (name != 'IE' && layout == 'Trident' && (data = /\brv:([\d.]+)/.exec(ua))) {
      if (name) {
        description.push('identifying as ' + name + (version ? ' ' + version : ''));
      }
      name = 'IE';
      version = data[1];
    }
    // Leverage environment features.
    if (useFeatures) {
      // Detect server-side environments.
      // Rhino has a global function while others have a global object.
      if (isHostType(context, 'global')) {
        if (java) {
          data = java.lang.System;
          arch = data.getProperty('os.arch');
          os = os || data.getProperty('os.name') + ' ' + data.getProperty('os.version');
        }
        if (rhino) {
          try {
            version = context.require('ringo/engine').version.join('.');
            name = 'RingoJS';
          } catch(e) {
            if ((data = context.system) && data.global.system == context.system) {
              name = 'Narwhal';
              os || (os = data[0].os || null);
            }
          }
          if (!name) {
            name = 'Rhino';
          }
        }
        else if (
          typeof context.process == 'object' && !context.process.browser &&
          (data = context.process)
        ) {
          if (typeof data.versions == 'object') {
            if (typeof data.versions.electron == 'string') {
              description.push('Node ' + data.versions.node);
              name = 'Electron';
              version = data.versions.electron;
            } else if (typeof data.versions.nw == 'string') {
              description.push('Chromium ' + version, 'Node ' + data.versions.node);
              name = 'NW.js';
              version = data.versions.nw;
            }
          }
          if (!name) {
            name = 'Node.js';
            arch = data.arch;
            os = data.platform;
            version = /[\d.]+/.exec(data.version);
            version = version ? version[0] : null;
          }
        }
      }
      // Detect Adobe AIR.
      else if (getClassOf((data = context.runtime)) == airRuntimeClass) {
        name = 'Adobe AIR';
        os = data.flash.system.Capabilities.os;
      }
      // Detect PhantomJS.
      else if (getClassOf((data = context.phantom)) == phantomClass) {
        name = 'PhantomJS';
        version = (data = data.version || null) && (data.major + '.' + data.minor + '.' + data.patch);
      }
      // Detect IE compatibility modes.
      else if (typeof doc.documentMode == 'number' && (data = /\bTrident\/(\d+)/i.exec(ua))) {
        // We're in compatibility mode when the Trident version + 4 doesn't
        // equal the document mode.
        version = [version, doc.documentMode];
        if ((data = +data[1] + 4) != version[1]) {
          description.push('IE ' + version[1] + ' mode');
          layout && (layout[1] = '');
          version[1] = data;
        }
        version = name == 'IE' ? String(version[1].toFixed(1)) : version[0];
      }
      // Detect IE 11 masking as other browsers.
      else if (typeof doc.documentMode == 'number' && /^(?:Chrome|Firefox)\b/.test(name)) {
        description.push('masking as ' + name + ' ' + version);
        name = 'IE';
        version = '11.0';
        layout = ['Trident'];
        os = 'Windows';
      }
      os = os && format(os);
    }
    // Detect prerelease phases.
    if (version && (data =
          /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(version) ||
          /(?:alpha|beta)(?: ?\d)?/i.exec(ua + ';' + (useFeatures && nav.appMinorVersion)) ||
          /\bMinefield\b/i.test(ua) && 'a'
        )) {
      prerelease = /b/i.test(data) ? 'beta' : 'alpha';
      version = version.replace(RegExp(data + '\\+?$'), '') +
        (prerelease == 'beta' ? beta : alpha) + (/\d+\+?/.exec(data) || '');
    }
    // Detect Firefox Mobile.
    if (name == 'Fennec' || name == 'Firefox' && /\b(?:Android|Firefox OS)\b/.test(os)) {
      name = 'Firefox Mobile';
    }
    // Obscure Maxthon's unreliable version.
    else if (name == 'Maxthon' && version) {
      version = version.replace(/\.[\d.]+/, '.x');
    }
    // Detect Xbox 360 and Xbox One.
    else if (/\bXbox\b/i.test(product)) {
      if (product == 'Xbox 360') {
        os = null;
      }
      if (product == 'Xbox 360' && /\bIEMobile\b/.test(ua)) {
        description.unshift('mobile mode');
      }
    }
    // Add mobile postfix.
    else if ((/^(?:Chrome|IE|Opera)$/.test(name) || name && !product && !/Browser|Mobi/.test(name)) &&
        (os == 'Windows CE' || /Mobi/i.test(ua))) {
      name += ' Mobile';
    }
    // Detect IE platform preview.
    else if (name == 'IE' && useFeatures) {
      try {
        if (context.external === null) {
          description.unshift('platform preview');
        }
      } catch(e) {
        description.unshift('embedded');
      }
    }
    // Detect BlackBerry OS version.
    // http://docs.blackberry.com/en/developers/deliverables/18169/HTTP_headers_sent_by_BB_Browser_1234911_11.jsp
    else if ((/\bBlackBerry\b/.test(product) || /\bBB10\b/.test(ua)) && (data =
          (RegExp(product.replace(/ +/g, ' *') + '/([.\\d]+)', 'i').exec(ua) || 0)[1] ||
          version
        )) {
      data = [data, /BB10/.test(ua)];
      os = (data[1] ? (product = null, manufacturer = 'BlackBerry') : 'Device Software') + ' ' + data[0];
      version = null;
    }
    // Detect Opera identifying/masking itself as another browser.
    // http://www.opera.com/support/kb/view/843/
    else if (this != forOwn && product != 'Wii' && (
          (useFeatures && opera) ||
          (/Opera/.test(name) && /\b(?:MSIE|Firefox)\b/i.test(ua)) ||
          (name == 'Firefox' && /\bOS X (?:\d+\.){2,}/.test(os)) ||
          (name == 'IE' && (
            (os && !/^Win/.test(os) && version > 5.5) ||
            /\bWindows XP\b/.test(os) && version > 8 ||
            version == 8 && !/\bTrident\b/.test(ua)
          ))
        ) && !reOpera.test((data = parse.call(forOwn, ua.replace(reOpera, '') + ';'))) && data.name) {
      // When "identifying", the UA contains both Opera and the other browser's name.
      data = 'ing as ' + data.name + ((data = data.version) ? ' ' + data : '');
      if (reOpera.test(name)) {
        if (/\bIE\b/.test(data) && os == 'Mac OS') {
          os = null;
        }
        data = 'identify' + data;
      }
      // When "masking", the UA contains only the other browser's name.
      else {
        data = 'mask' + data;
        if (operaClass) {
          name = format(operaClass.replace(/([a-z])([A-Z])/g, '$1 $2'));
        } else {
          name = 'Opera';
        }
        if (/\bIE\b/.test(data)) {
          os = null;
        }
        if (!useFeatures) {
          version = null;
        }
      }
      layout = ['Presto'];
      description.push(data);
    }
    // Detect WebKit Nightly and approximate Chrome/Safari versions.
    if ((data = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(ua) || 0)[1])) {
      // Correct build number for numeric comparison.
      // (e.g. "532.5" becomes "532.05")
      data = [parseFloat(data.replace(/\.(\d)$/, '.0$1')), data];
      // Nightly builds are postfixed with a "+".
      if (name == 'Safari' && data[1].slice(-1) == '+') {
        name = 'WebKit Nightly';
        prerelease = 'alpha';
        version = data[1].slice(0, -1);
      }
      // Clear incorrect browser versions.
      else if (version == data[1] ||
          version == (data[2] = (/\bSafari\/([\d.]+\+?)/i.exec(ua) || 0)[1])) {
        version = null;
      }
      // Use the full Chrome version when available.
      data[1] = (/\bChrome\/([\d.]+)/i.exec(ua) || 0)[1];
      // Detect Blink layout engine.
      if (data[0] == 537.36 && data[2] == 537.36 && parseFloat(data[1]) >= 28 && layout == 'WebKit') {
        layout = ['Blink'];
      }
      // Detect JavaScriptCore.
      // http://stackoverflow.com/questions/6768474/how-can-i-detect-which-javascript-engine-v8-or-jsc-is-used-at-runtime-in-androi
      if (!useFeatures || (!likeChrome && !data[1])) {
        layout && (layout[1] = 'like Safari');
        data = (data = data[0], data < 400 ? 1 : data < 500 ? 2 : data < 526 ? 3 : data < 533 ? 4 : data < 534 ? '4+' : data < 535 ? 5 : data < 537 ? 6 : data < 538 ? 7 : data < 601 ? 8 : '8');
      } else {
        layout && (layout[1] = 'like Chrome');
        data = data[1] || (data = data[0], data < 530 ? 1 : data < 532 ? 2 : data < 532.05 ? 3 : data < 533 ? 4 : data < 534.03 ? 5 : data < 534.07 ? 6 : data < 534.10 ? 7 : data < 534.13 ? 8 : data < 534.16 ? 9 : data < 534.24 ? 10 : data < 534.30 ? 11 : data < 535.01 ? 12 : data < 535.02 ? '13+' : data < 535.07 ? 15 : data < 535.11 ? 16 : data < 535.19 ? 17 : data < 536.05 ? 18 : data < 536.10 ? 19 : data < 537.01 ? 20 : data < 537.11 ? '21+' : data < 537.13 ? 23 : data < 537.18 ? 24 : data < 537.24 ? 25 : data < 537.36 ? 26 : layout != 'Blink' ? '27' : '28');
      }
      // Add the postfix of ".x" or "+" for approximate versions.
      layout && (layout[1] += ' ' + (data += typeof data == 'number' ? '.x' : /[.+]/.test(data) ? '' : '+'));
      // Obscure version for some Safari 1-2 releases.
      if (name == 'Safari' && (!version || parseInt(version) > 45)) {
        version = data;
      }
    }
    // Detect Opera desktop modes.
    if (name == 'Opera' &&  (data = /\bzbov|zvav$/.exec(os))) {
      name += ' ';
      description.unshift('desktop mode');
      if (data == 'zvav') {
        name += 'Mini';
        version = null;
      } else {
        name += 'Mobile';
      }
      os = os.replace(RegExp(' *' + data + '$'), '');
    }
    // Detect Chrome desktop mode.
    else if (name == 'Safari' && /\bChrome\b/.exec(layout && layout[1])) {
      description.unshift('desktop mode');
      name = 'Chrome Mobile';
      version = null;

      if (/\bOS X\b/.test(os)) {
        manufacturer = 'Apple';
        os = 'iOS 4.3+';
      } else {
        os = null;
      }
    }
    // Strip incorrect OS versions.
    if (version && version.indexOf((data = /[\d.]+$/.exec(os))) == 0 &&
        ua.indexOf('/' + data + '-') > -1) {
      os = trim(os.replace(data, ''));
    }
    // Add layout engine.
    if (layout && !/\b(?:Avant|Nook)\b/.test(name) && (
        /Browser|Lunascape|Maxthon/.test(name) ||
        name != 'Safari' && /^iOS/.test(os) && /\bSafari\b/.test(layout[1]) ||
        /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(name) && layout[1])) {
      // Don't add layout details to description if they are falsey.
      (data = layout[layout.length - 1]) && description.push(data);
    }
    // Combine contextual information.
    if (description.length) {
      description = ['(' + description.join('; ') + ')'];
    }
    // Append manufacturer to description.
    if (manufacturer && product && product.indexOf(manufacturer) < 0) {
      description.push('on ' + manufacturer);
    }
    // Append product to description.
    if (product) {
      description.push((/^on /.test(description[description.length - 1]) ? '' : 'on ') + product);
    }
    // Parse the OS into an object.
    if (os) {
      data = / ([\d.+]+)$/.exec(os);
      isSpecialCasedOS = data && os.charAt(os.length - data[0].length - 1) == '/';
      os = {
        'architecture': 32,
        'family': (data && !isSpecialCasedOS) ? os.replace(data[0], '') : os,
        'version': data ? data[1] : null,
        'toString': function() {
          var version = this.version;
          return this.family + ((version && !isSpecialCasedOS) ? ' ' + version : '') + (this.architecture == 64 ? ' 64-bit' : '');
        }
      };
    }
    // Add browser/OS architecture.
    if ((data = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(arch)) && !/\bi686\b/i.test(arch)) {
      if (os) {
        os.architecture = 64;
        os.family = os.family.replace(RegExp(' *' + data), '');
      }
      if (
          name && (/\bWOW64\b/i.test(ua) ||
          (useFeatures && /\w(?:86|32)$/.test(nav.cpuClass || nav.platform) && !/\bWin64; x64\b/i.test(ua)))
      ) {
        description.unshift('32-bit');
      }
    }
    // Chrome 39 and above on OS X is always 64-bit.
    else if (
        os && /^OS X/.test(os.family) &&
        name == 'Chrome' && parseFloat(version) >= 39
    ) {
      os.architecture = 64;
    }

    ua || (ua = null);

    /*------------------------------------------------------------------------*/

    /**
     * The platform object.
     *
     * @name platform
     * @type Object
     */
    var platform = {};

    /**
     * The platform description.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.description = ua;

    /**
     * The name of the browser's layout engine.
     *
     * The list of common layout engines include:
     * "Blink", "EdgeHTML", "Gecko", "Trident" and "WebKit"
     *
     * @memberOf platform
     * @type string|null
     */
    platform.layout = layout && layout[0];

    /**
     * The name of the product's manufacturer.
     *
     * The list of manufacturers include:
     * "Apple", "Archos", "Amazon", "Asus", "Barnes & Noble", "BlackBerry",
     * "Google", "HP", "HTC", "LG", "Microsoft", "Motorola", "Nintendo",
     * "Nokia", "Samsung" and "Sony"
     *
     * @memberOf platform
     * @type string|null
     */
    platform.manufacturer = manufacturer;

    /**
     * The name of the browser/environment.
     *
     * The list of common browser names include:
     * "Chrome", "Electron", "Firefox", "Firefox for iOS", "IE",
     * "Microsoft Edge", "PhantomJS", "Safari", "SeaMonkey", "Silk",
     * "Opera Mini" and "Opera"
     *
     * Mobile versions of some browsers have "Mobile" appended to their name:
     * eg. "Chrome Mobile", "Firefox Mobile", "IE Mobile" and "Opera Mobile"
     *
     * @memberOf platform
     * @type string|null
     */
    platform.name = name;

    /**
     * The alpha/beta release indicator.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.prerelease = prerelease;

    /**
     * The name of the product hosting the browser.
     *
     * The list of common products include:
     *
     * "BlackBerry", "Galaxy S4", "Lumia", "iPad", "iPod", "iPhone", "Kindle",
     * "Kindle Fire", "Nexus", "Nook", "PlayBook", "TouchPad" and "Transformer"
     *
     * @memberOf platform
     * @type string|null
     */
    platform.product = product;

    /**
     * The browser's user agent string.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.ua = ua;

    /**
     * The browser/environment version.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.version = name && version;

    /**
     * The name of the operating system.
     *
     * @memberOf platform
     * @type Object
     */
    platform.os = os || {

      /**
       * The CPU architecture the OS is built for.
       *
       * @memberOf platform.os
       * @type number|null
       */
      'architecture': null,

      /**
       * The family of the OS.
       *
       * Common values include:
       * "Windows", "Windows Server 2008 R2 / 7", "Windows Server 2008 / Vista",
       * "Windows XP", "OS X", "Ubuntu", "Debian", "Fedora", "Red Hat", "SuSE",
       * "Android", "iOS" and "Windows Phone"
       *
       * @memberOf platform.os
       * @type string|null
       */
      'family': null,

      /**
       * The version of the OS.
       *
       * @memberOf platform.os
       * @type string|null
       */
      'version': null,

      /**
       * Returns the OS string.
       *
       * @memberOf platform.os
       * @returns {string} The OS string.
       */
      'toString': function() { return 'null'; }
    };

    platform.parse = parse;
    platform.toString = toStringPlatform;

    if (platform.version) {
      description.unshift(version);
    }
    if (platform.name) {
      description.unshift(name);
    }
    if (os && name && !(os == String(os).split(' ')[0] && (os == name.split(' ')[0] || product))) {
      description.push(product ? '(' + os + ')' : 'on ' + os);
    }
    if (description.length) {
      platform.description = description.join(' ');
    }
    return platform;
  }

  /*--------------------------------------------------------------------------*/

  // Export platform.
  var platform = parse();

  // Some AMD build optimizers, like r.js, check for condition patterns like the following:
  if (true) {
    // Expose platform on the global object to prevent errors when platform is
    // loaded by a script tag in the presence of an AMD loader.
    // See http://requirejs.org/docs/errors.html#mismatch for more details.
    root.platform = platform;

    // Define as an anonymous module so platform can be aliased through path mapping.
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return platform;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
  // Check for `exports` after `define` in case a build optimizer adds an `exports` object.
  else {}
}.call(this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module), __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/images/go-back-to-main-page.png":
/*!*********************************************!*\
  !*** ./src/images/go-back-to-main-page.png ***!
  \*********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/go-back-to-main-page.png";

/***/ }),

/***/ "./src/images/logo-negative.png":
/*!**************************************!*\
  !*** ./src/images/logo-negative.png ***!
  \**************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/logo-negative.png";

/***/ }),

/***/ "./src/images/logo-play-io_all_min-color_variation-v3.png":
/*!****************************************************************!*\
  !*** ./src/images/logo-play-io_all_min-color_variation-v3.png ***!
  \****************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/logo-play-io_all_min-color_variation-v3.png";

/***/ }),

/***/ "./src/images/logo-play.png":
/*!**********************************!*\
  !*** ./src/images/logo-play.png ***!
  \**********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/logo-play.png";

/***/ }),

/***/ "./src/index.ts":
/*!***********************************!*\
  !*** ./src/index.ts + 12 modules ***!
  \***********************************/
/*! no exports provided */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/platform/platform.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./src/scripts/addScrollEventListener.ts
function addScrollEventListener(fun) {
    let ticking = false;
    window.addEventListener("scroll", (ev) => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                fun();
                ticking = false;
            });
        }
        ticking = true;
    });
}

// CONCATENATED MODULE: ./src/scripts/getPageScrollPositionTop.ts
function getPageScrollPositionTop() {
    return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
}

// CONCATENATED MODULE: ./src/scripts/navigation/setMenuPosition.ts


function setMenuPosition(referenceElementForFixedMenu, topElementFixedOverMenu) {
    const FIXED_MENU_CLASS_NAME = "menu-fixed";
    const body = document.body;
    const heightOfFixedElementThatHidesMenu = topElementFixedOverMenu === undefined ? 0 : topElementFixedOverMenu.getBoundingClientRect().height;
    addScrollEventListener(() => {
        const positionTopOfRefElement = parseInt(window.getComputedStyle(referenceElementForFixedMenu).paddingTop);
        const refPositionForFixedMenu = positionTopOfRefElement - heightOfFixedElementThatHidesMenu;
        if (getPageScrollPositionTop() >= refPositionForFixedMenu && !body.classList.contains(FIXED_MENU_CLASS_NAME)) {
            body.classList.add(FIXED_MENU_CLASS_NAME);
        }
        else if (getPageScrollPositionTop() <= refPositionForFixedMenu && body.classList.contains(FIXED_MENU_CLASS_NAME)) {
            body.classList.remove(FIXED_MENU_CLASS_NAME);
        }
    });
}

// CONCATENATED MODULE: ./src/scripts/HTML_SELECTORS.ts
var HTML_SELECTORS;
(function (HTML_SELECTORS) {
    HTML_SELECTORS["CODE_AREA"] = ".code-area";
    HTML_SELECTORS["CONTENT"] = "#d2v-content";
    HTML_SELECTORS["CURRENT_SECTION_NAME"] = "#current-section-name";
    HTML_SELECTORS["TOP_HEADER"] = "#d2v-header";
    HTML_SELECTORS["NAVIGATION_MENU"] = "#site-navigation";
})(HTML_SELECTORS || (HTML_SELECTORS = {}));

// CONCATENATED MODULE: ./src/scripts/navigation/setCurrentSectionName.ts

function setCurrentSectionName() {
    document.querySelector(HTML_SELECTORS.CURRENT_SECTION_NAME).innerHTML = getCurrentSectionName();
}
function getCurrentSectionName() {
    const pageTitleElement = document.querySelector("h1");
    if (pageTitleElement !== null) {
        return pageTitleElement.innerHTML;
    }
    else {
        return "";
    }
}

// CONCATENATED MODULE: ./src/scripts/navigation/setNavigationMenu.ts


function setNavigationMenu() {
    generateListOfChapter().then((value) => {
        updateChapterStatuInNavigationMenu(value);
        addScrollEventListener(() => {
            updateChapterStatuInNavigationMenu(value);
        });
    });
}
function updateChapterStatuInNavigationMenu(listOfTitleLevelTwo) {
    let lastTitleIsNotFound = true;
    for (const titleLevelTwo of listOfTitleLevelTwo) {
        if (titleLevelTwo.isActive && lastTitleIsNotFound) {
            lastTitleIsNotFound = false;
            titleLevelTwo.classname = "active";
        }
        else {
            titleLevelTwo.classname = "unactive";
        }
    }
}
function generateListOfChapter() {
    return new Promise((resolve, reject) => {
        const listToReturn = [];
        const TITLE_TWO_ELEMENTS = document.querySelectorAll(`${HTML_SELECTORS.CONTENT} h2`);
        const NAVIGATION_MENU_ELEMENT = document.querySelector(`${HTML_SELECTORS.NAVIGATION_MENU}`);
        for (const navigationTwoElement of TITLE_TWO_ELEMENTS) {
            listToReturn.push(new setNavigationMenu_Chapter(navigationTwoElement, NAVIGATION_MENU_ELEMENT));
        }
        resolve(listToReturn.reverse());
        reject(new Error("can't get list of level two in navigation menu"));
    });
}
class setNavigationMenu_Chapter {
    constructor(element, navigationMenuElement) {
        this._element = element;
        this._elementInMenu = this.getElementInMenu(navigationMenuElement);
    }
    get isActive() {
        return this._element.getBoundingClientRect().top <= window.innerHeight / 2;
    }
    set classname(classname) {
        if (classname === "active") {
            if (!this._elementInMenuContainsActiveClass) {
                this._elementInMenu.classList.add("active");
            }
        }
        else {
            if (this._elementInMenuContainsActiveClass) {
                this._elementInMenu.classList.remove("active");
            }
        }
    }
    getElementInMenu(navigationMenuElement) {
        const listOfLevelTwoInMenu = document.querySelectorAll(`${HTML_SELECTORS.NAVIGATION_MENU} > li > ul > li > a`);
        for (const levelTwoElement of listOfLevelTwoInMenu) {
            if (levelTwoElement.getAttribute("href") === "#" + this._element.getAttribute("id")) {
                return levelTwoElement;
            }
        }
    }
    get _elementInMenuContainsActiveClass() {
        if (this._elementInMenu !== undefined) {
            return this._elementInMenu.classList.contains("active");
        }
        else {
            return false;
        }
    }
}

// CONCATENATED MODULE: ./src/scripts/editor/EditorManager.ts

class EditorManager_EditorManager {
    constructor(kotlinEditors) {
        this._editors = [];
        this._editors = kotlinEditors;
        this._setListenerForEditorsAutoExecution();
    }
    runVisibleEditors() {
        for (const editor of this._editors) {
            if (editor.isOnScreen && editor.hasNotBeenExecuted) {
                editor.execute();
            }
        }
    }
    _setListenerForEditorsAutoExecution() {
        addScrollEventListener(() => {
            this.runVisibleEditors();
        });
    }
}

// CONCATENATED MODULE: ./src/scripts/tools.ts
function createHTMLElement(tagName, content, classname) {
    const newElement = document.createElement(tagName);
    if (typeof content === "string") {
        newElement.innerHTML = content;
    }
    else if (content) {
        for (const htmlElement of content) {
            newElement.appendChild(htmlElement);
        }
    }
    if (classname)
        newElement.className = classname;
    return newElement;
}

// CONCATENATED MODULE: ./src/scripts/editor/Editor.ts


class Editor_Editor {
    constructor(selector, platformOsName) {
        this.TEXT_SHORTCUT = {
            run: {
                macOs: "CTRL + R: run code",
                windows: "CTRL + F9: run code",
                linux: "CTRL + F9: run code",
            }
        };
        this.MORE_THAN_ONCE_CODE_CHANGED_CLASSNAME = "more-than-once-code-changed";
        this.SHORTCUT_INFO_CLASSNAME = "shortcut-info compiler-info";
        this._hasBeenExecuted = false;
        this._eventFunctions = {
            getInstance: (editor) => {
                this._KotlinPlaygroundEditor = editor;
            },
            onChange: (code) => {
                this.changedCounter++;
                if (this.changedCounter === 2) {
                    if (this.kotlinEditorContainer) {
                        let textInShortcutHelperElement;
                        switch (this.PLATFORM_OS_USER_NAME) {
                            case "OS X":
                                textInShortcutHelperElement = this.TEXT_SHORTCUT.run.macOs;
                                break;
                            case "Windows":
                                textInShortcutHelperElement = this.TEXT_SHORTCUT.run.windows;
                                break;
                            case "Linux":
                                textInShortcutHelperElement = this.TEXT_SHORTCUT.run.linux;
                                break;
                            default:
                                textInShortcutHelperElement = "";
                        }
                        if (this.PLATFORM_OS_USER_NAME !== "Other") {
                            this.kotlinEditorContainer.appendChild(createHTMLElement("div", [
                                createHTMLElement("div", textInShortcutHelperElement),
                                createHTMLElement("div", "CTRL + SPACE: code completion")
                            ], this.SHORTCUT_INFO_CLASSNAME));
                        }
                        this.kotlinEditorContainer.classList.add(this.MORE_THAN_ONCE_CODE_CHANGED_CLASSNAME);
                    }
                }
            },
        };
        this.changedCounter = 0;
        this._selector = selector;
        this.PLATFORM_OS_USER_NAME = platformOsName;
    }
    init() {
        return new Promise(resolve => {
            KotlinPlayground(this._selector, this._eventFunctions).then(() => {
                if (this._KotlinPlaygroundEditor) {
                    this._kotlinEditorContainer = this._KotlinPlaygroundEditor.nodes[0];
                    const codeArea = this._kotlinEditorContainer.querySelector(HTML_SELECTORS.CODE_AREA);
                    if (codeArea !== null && codeArea instanceof HTMLElement) {
                        this._codeArea = codeArea;
                        const codeMirrorStyleElement = codeArea.querySelector(".CodeMirror");
                        const editorThemeClassname = Editor_Editor.getCookie("theme");
                        if (editorThemeClassname) {
                            codeMirrorStyleElement.classList.add(`cm-s-${editorThemeClassname}`);
                        }
                    }
                }
                resolve(this);
            });
        });
    }
    static getCookie(name) {
        const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        if (match)
            return match[2];
        else
            return null;
    }
    get kotlinEditorContainer() {
        return this._kotlinEditorContainer;
    }
    get codeArea() { return this._codeArea; }
    get bottom_of_codeArea_is_above_bottom_of_screen() {
        return this.codeArea ? this.codeArea.getBoundingClientRect().bottom >= 0 : false;
    }
    get bottom_of_codeArea_is_below_top_of_screen() {
        return this.codeArea ? this.codeArea.getBoundingClientRect().bottom <= window.innerHeight : false;
    }
    get hasNotBeenExecuted() { return !this._hasBeenExecuted; }
    get isOnScreen() {
        if (this._KotlinPlaygroundEditor) {
            return this.bottom_of_codeArea_is_above_bottom_of_screen && this.bottom_of_codeArea_is_below_top_of_screen;
        }
    }
    execute() {
        return new Promise((resolve, reject) => {
            if (this._KotlinPlaygroundEditor) {
                this._hasBeenExecuted = true;
                this._KotlinPlaygroundEditor.execute();
            }
            resolve();
            reject(new Error("can't execute kotlin playground editor"));
        });
    }
}

// EXTERNAL MODULE: ./node_modules/platform/platform.js
var platform = __webpack_require__("./node_modules/platform/platform.js");
var platform_default = /*#__PURE__*/__webpack_require__.n(platform);

// CONCATENATED MODULE: ./src/scripts/getUserOs.ts

function getUserOs() {
    if (platform_default.a.os) {
        switch (platform_default.a.os.family) {
            case "Windows":
                return "Windows";
            case "OS X":
                return "OS X";
            case "Ubuntu" || false || false || false:
                return "Linux";
            default:
                return "Other";
        }
    }
    else {
        return "Other";
    }
}

// CONCATENATED MODULE: ./src/scripts/editor/setEditorsManager.ts



function setEditorsManager() {
    return new Promise(resolve => {
        const codeElementsForKotlinPlaygroundEditorInit = document.querySelectorAll('.kotlin-code');
        const listOfEditor = [];
        let numberOfEditorsInitialised = 0;
        for (const codeElement of codeElementsForKotlinPlaygroundEditorInit) {
            if (codeElement instanceof HTMLElement) {
                listOfEditor.push(new Editor_Editor(codeElement, getUserOs()));
            }
        }
        for (const editor of listOfEditor) {
            editor.init().then(() => {
                numberOfEditorsInitialised++;
                if (numberOfEditorsInitialised === listOfEditor.length) {
                    resolve(new EditorManager_EditorManager(listOfEditor));
                }
            });
        }
    });
}

// CONCATENATED MODULE: ./src/scripts/main.ts





setEditorsManager().then((editorManager) => {
    editorManager.runVisibleEditors();
});
setMenuPosition(document.querySelector(HTML_SELECTORS.CONTENT), document.querySelector(HTML_SELECTORS.TOP_HEADER));
setCurrentSectionName();
setNavigationMenu();

// EXTERNAL MODULE: ./src/styles/main.scss
var main = __webpack_require__("./src/styles/main.scss");

// EXTERNAL MODULE: ./src/images/logo-play.png
var logo_play = __webpack_require__("./src/images/logo-play.png");

// EXTERNAL MODULE: ./src/images/logo-negative.png
var logo_negative = __webpack_require__("./src/images/logo-negative.png");

// EXTERNAL MODULE: ./src/images/go-back-to-main-page.png
var go_back_to_main_page = __webpack_require__("./src/images/go-back-to-main-page.png");

// EXTERNAL MODULE: ./src/images/logo-play-io_all_min-color_variation-v3.png
var logo_play_io_all_min_color_variation_v3 = __webpack_require__("./src/images/logo-play-io_all_min-color_variation-v3.png");

// CONCATENATED MODULE: ./src/index.ts








/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BsYXRmb3JtL3BsYXRmb3JtLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2dvLWJhY2stdG8tbWFpbi1wYWdlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2xvZ28tbmVnYXRpdmUucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvbG9nby1wbGF5LWlvX2FsbF9taW4tY29sb3JfdmFyaWF0aW9uLXYzLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2xvZ28tcGxheS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvYWRkU2Nyb2xsRXZlbnRMaXN0ZW5lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nZXRQYWdlU2Nyb2xsUG9zaXRpb25Ub3AudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbmF2aWdhdGlvbi9zZXRNZW51UG9zaXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvSFRNTF9TRUxFQ1RPUlMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbmF2aWdhdGlvbi9zZXRDdXJyZW50U2VjdGlvbk5hbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbmF2aWdhdGlvbi9zZXROYXZpZ2F0aW9uTWVudS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9lZGl0b3IvRWRpdG9yTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy90b29scy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9lZGl0b3IvRWRpdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dldFVzZXJPcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9lZGl0b3Ivc2V0RWRpdG9yc01hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9tYWluLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxhQUFhO0FBQzFCLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxFQUFFO0FBQ2YsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEVBQUU7QUFDZixhQUFhLE9BQU87QUFDcEIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FB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O0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELEdBQUc7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtGQUFrRjtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlGQUF5RjtBQUN6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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QkFBaUIsRUFBRTtBQUNyQyxDQUFDLENBQUM7QUFFRixlQUFlLENBQ1gsUUFBUSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFnQixFQUM3RCxRQUFRLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQWdCLENBQ25FO0FBR0QscUJBQXFCLEVBQUU7QUFFdkIsaUJBQWlCLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCSTtBQUNJO0FBRUk7QUFDSTtBQUNPO0FBQ21COzs7Ozs7Ozs7Ozs7O0FDTjdELHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIi8qIVxuICogUGxhdGZvcm0uanMgPGh0dHBzOi8vbXRocy5iZS9wbGF0Zm9ybT5cbiAqIENvcHlyaWdodCAyMDE0LTIwMTggQmVuamFtaW4gVGFuIDxodHRwczovL2Juam1udDRuLm5vdy5zaC8+XG4gKiBDb3B5cmlnaHQgMjAxMS0yMDEzIEpvaG4tRGF2aWQgRGFsdG9uIDxodHRwOi8vYWxseW91Y2FubGVldC5jb20vPlxuICogQXZhaWxhYmxlIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL210aHMuYmUvbWl0PlxuICovXG47KGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLyoqIFVzZWQgdG8gZGV0ZXJtaW5lIGlmIHZhbHVlcyBhcmUgb2YgdGhlIGxhbmd1YWdlIHR5cGUgYE9iamVjdGAuICovXG4gIHZhciBvYmplY3RUeXBlcyA9IHtcbiAgICAnZnVuY3Rpb24nOiB0cnVlLFxuICAgICdvYmplY3QnOiB0cnVlXG4gIH07XG5cbiAgLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG4gIHZhciByb290ID0gKG9iamVjdFR5cGVzW3R5cGVvZiB3aW5kb3ddICYmIHdpbmRvdykgfHwgdGhpcztcblxuICAvKiogQmFja3VwIHBvc3NpYmxlIGdsb2JhbCBvYmplY3QuICovXG4gIHZhciBvbGRSb290ID0gcm9vdDtcblxuICAvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xuICB2YXIgZnJlZUV4cG9ydHMgPSBvYmplY3RUeXBlc1t0eXBlb2YgZXhwb3J0c10gJiYgZXhwb3J0cztcblxuICAvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG4gIHZhciBmcmVlTW9kdWxlID0gb2JqZWN0VHlwZXNbdHlwZW9mIG1vZHVsZV0gJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4gIC8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMgb3IgQnJvd3NlcmlmaWVkIGNvZGUgYW5kIHVzZSBpdCBhcyBgcm9vdGAuICovXG4gIHZhciBmcmVlR2xvYmFsID0gZnJlZUV4cG9ydHMgJiYgZnJlZU1vZHVsZSAmJiB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbDtcbiAgaWYgKGZyZWVHbG9iYWwgJiYgKGZyZWVHbG9iYWwuZ2xvYmFsID09PSBmcmVlR2xvYmFsIHx8IGZyZWVHbG9iYWwud2luZG93ID09PSBmcmVlR2xvYmFsIHx8IGZyZWVHbG9iYWwuc2VsZiA9PT0gZnJlZUdsb2JhbCkpIHtcbiAgICByb290ID0gZnJlZUdsb2JhbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2VkIGFzIHRoZSBtYXhpbXVtIGxlbmd0aCBvZiBhbiBhcnJheS1saWtlIG9iamVjdC5cbiAgICogU2VlIHRoZSBbRVM2IHNwZWNdKGh0dHA6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvbGVuZ3RoKVxuICAgKiBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgdmFyIG1heFNhZmVJbnRlZ2VyID0gTWF0aC5wb3coMiwgNTMpIC0gMTtcblxuICAvKiogUmVndWxhciBleHByZXNzaW9uIHRvIGRldGVjdCBPcGVyYS4gKi9cbiAgdmFyIHJlT3BlcmEgPSAvXFxiT3BlcmEvO1xuXG4gIC8qKiBQb3NzaWJsZSBnbG9iYWwgb2JqZWN0LiAqL1xuICB2YXIgdGhpc0JpbmRpbmcgPSB0aGlzO1xuXG4gIC8qKiBVc2VkIGZvciBuYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMuICovXG4gIHZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbiAgLyoqIFVzZWQgdG8gY2hlY2sgZm9yIG93biBwcm9wZXJ0aWVzIG9mIGFuIG9iamVjdC4gKi9cbiAgdmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbiAgLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgaW50ZXJuYWwgYFtbQ2xhc3NdXWAgb2YgdmFsdWVzLiAqL1xuICB2YXIgdG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICAvKipcbiAgICogQ2FwaXRhbGl6ZXMgYSBzdHJpbmcgdmFsdWUuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBjYXBpdGFsaXplLlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY2FwaXRhbGl6ZWQgc3RyaW5nLlxuICAgKi9cbiAgZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHJpbmcpIHtcbiAgICBzdHJpbmcgPSBTdHJpbmcoc3RyaW5nKTtcbiAgICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgdXRpbGl0eSBmdW5jdGlvbiB0byBjbGVhbiB1cCB0aGUgT1MgbmFtZS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9zIFRoZSBPUyBuYW1lIHRvIGNsZWFuIHVwLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3BhdHRlcm5dIEEgYFJlZ0V4cGAgcGF0dGVybiBtYXRjaGluZyB0aGUgT1MgbmFtZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtsYWJlbF0gQSBsYWJlbCBmb3IgdGhlIE9TLlxuICAgKi9cbiAgZnVuY3Rpb24gY2xlYW51cE9TKG9zLCBwYXR0ZXJuLCBsYWJlbCkge1xuICAgIC8vIFBsYXRmb3JtIHRva2VucyBhcmUgZGVmaW5lZCBhdDpcbiAgICAvLyBodHRwOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvbXM1Mzc1MDMoVlMuODUpLmFzcHhcbiAgICAvLyBodHRwOi8vd2ViLmFyY2hpdmUub3JnL3dlYi8yMDA4MTEyMjA1Mzk1MC9odHRwOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvbXM1Mzc1MDMoVlMuODUpLmFzcHhcbiAgICB2YXIgZGF0YSA9IHtcbiAgICAgICcxMC4wJzogJzEwJyxcbiAgICAgICc2LjQnOiAgJzEwIFRlY2huaWNhbCBQcmV2aWV3JyxcbiAgICAgICc2LjMnOiAgJzguMScsXG4gICAgICAnNi4yJzogICc4JyxcbiAgICAgICc2LjEnOiAgJ1NlcnZlciAyMDA4IFIyIC8gNycsXG4gICAgICAnNi4wJzogICdTZXJ2ZXIgMjAwOCAvIFZpc3RhJyxcbiAgICAgICc1LjInOiAgJ1NlcnZlciAyMDAzIC8gWFAgNjQtYml0JyxcbiAgICAgICc1LjEnOiAgJ1hQJyxcbiAgICAgICc1LjAxJzogJzIwMDAgU1AxJyxcbiAgICAgICc1LjAnOiAgJzIwMDAnLFxuICAgICAgJzQuMCc6ICAnTlQnLFxuICAgICAgJzQuOTAnOiAnTUUnXG4gICAgfTtcbiAgICAvLyBEZXRlY3QgV2luZG93cyB2ZXJzaW9uIGZyb20gcGxhdGZvcm0gdG9rZW5zLlxuICAgIGlmIChwYXR0ZXJuICYmIGxhYmVsICYmIC9eV2luL2kudGVzdChvcykgJiYgIS9eV2luZG93cyBQaG9uZSAvaS50ZXN0KG9zKSAmJlxuICAgICAgICAoZGF0YSA9IGRhdGFbL1tcXGQuXSskLy5leGVjKG9zKV0pKSB7XG4gICAgICBvcyA9ICdXaW5kb3dzICcgKyBkYXRhO1xuICAgIH1cbiAgICAvLyBDb3JyZWN0IGNoYXJhY3RlciBjYXNlIGFuZCBjbGVhbnVwIHN0cmluZy5cbiAgICBvcyA9IFN0cmluZyhvcyk7XG5cbiAgICBpZiAocGF0dGVybiAmJiBsYWJlbCkge1xuICAgICAgb3MgPSBvcy5yZXBsYWNlKFJlZ0V4cChwYXR0ZXJuLCAnaScpLCBsYWJlbCk7XG4gICAgfVxuXG4gICAgb3MgPSBmb3JtYXQoXG4gICAgICBvcy5yZXBsYWNlKC8gY2UkL2ksICcgQ0UnKVxuICAgICAgICAucmVwbGFjZSgvXFxiaHB3L2ksICd3ZWInKVxuICAgICAgICAucmVwbGFjZSgvXFxiTWFjaW50b3NoXFxiLywgJ01hYyBPUycpXG4gICAgICAgIC5yZXBsYWNlKC9fUG93ZXJQQ1xcYi9pLCAnIE9TJylcbiAgICAgICAgLnJlcGxhY2UoL1xcYihPUyBYKSBbXiBcXGRdKy9pLCAnJDEnKVxuICAgICAgICAucmVwbGFjZSgvXFxiTWFjIChPUyBYKVxcYi8sICckMScpXG4gICAgICAgIC5yZXBsYWNlKC9cXC8oXFxkKS8sICcgJDEnKVxuICAgICAgICAucmVwbGFjZSgvXy9nLCAnLicpXG4gICAgICAgIC5yZXBsYWNlKC8oPzogQmVQQ3xbIC5dKmZjWyBcXGQuXSspJC9pLCAnJylcbiAgICAgICAgLnJlcGxhY2UoL1xcYng4NlxcLjY0XFxiL2dpLCAneDg2XzY0JylcbiAgICAgICAgLnJlcGxhY2UoL1xcYihXaW5kb3dzIFBob25lKSBPU1xcYi8sICckMScpXG4gICAgICAgIC5yZXBsYWNlKC9cXGIoQ2hyb21lIE9TIFxcdyspIFtcXGQuXStcXGIvLCAnJDEnKVxuICAgICAgICAuc3BsaXQoJyBvbiAnKVswXVxuICAgICk7XG5cbiAgICByZXR1cm4gb3M7XG4gIH1cblxuICAvKipcbiAgICogQW4gaXRlcmF0aW9uIHV0aWxpdHkgZm9yIGFycmF5cyBhbmQgb2JqZWN0cy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtBcnJheXxPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGZ1bmN0aW9uIGNhbGxlZCBwZXIgaXRlcmF0aW9uLlxuICAgKi9cbiAgZnVuY3Rpb24gZWFjaChvYmplY3QsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGluZGV4ID0gLTEsXG4gICAgICAgIGxlbmd0aCA9IG9iamVjdCA/IG9iamVjdC5sZW5ndGggOiAwO1xuXG4gICAgaWYgKHR5cGVvZiBsZW5ndGggPT0gJ251bWJlcicgJiYgbGVuZ3RoID4gLTEgJiYgbGVuZ3RoIDw9IG1heFNhZmVJbnRlZ2VyKSB7XG4gICAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgICBjYWxsYmFjayhvYmplY3RbaW5kZXhdLCBpbmRleCwgb2JqZWN0KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yT3duKG9iamVjdCwgY2FsbGJhY2spO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUcmltIGFuZCBjb25kaXRpb25hbGx5IGNhcGl0YWxpemUgc3RyaW5nIHZhbHVlcy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGZvcm1hdC5cbiAgICogQHJldHVybnMge3N0cmluZ30gVGhlIGZvcm1hdHRlZCBzdHJpbmcuXG4gICAqL1xuICBmdW5jdGlvbiBmb3JtYXQoc3RyaW5nKSB7XG4gICAgc3RyaW5nID0gdHJpbShzdHJpbmcpO1xuICAgIHJldHVybiAvXig/OndlYk9TfGkoPzpPU3xQKSkvLnRlc3Qoc3RyaW5nKVxuICAgICAgPyBzdHJpbmdcbiAgICAgIDogY2FwaXRhbGl6ZShzdHJpbmcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEl0ZXJhdGVzIG92ZXIgYW4gb2JqZWN0J3Mgb3duIHByb3BlcnRpZXMsIGV4ZWN1dGluZyB0aGUgYGNhbGxiYWNrYCBmb3IgZWFjaC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGZ1bmN0aW9uIGV4ZWN1dGVkIHBlciBvd24gcHJvcGVydHkuXG4gICAqL1xuICBmdW5jdGlvbiBmb3JPd24ob2JqZWN0LCBjYWxsYmFjaykge1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSkge1xuICAgICAgICBjYWxsYmFjayhvYmplY3Rba2V5XSwga2V5LCBvYmplY3QpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBpbnRlcm5hbCBgW1tDbGFzc11dYCBvZiBhIHZhbHVlLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZS5cbiAgICogQHJldHVybnMge3N0cmluZ30gVGhlIGBbW0NsYXNzXV1gLlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0Q2xhc3NPZih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PSBudWxsXG4gICAgICA/IGNhcGl0YWxpemUodmFsdWUpXG4gICAgICA6IHRvU3RyaW5nLmNhbGwodmFsdWUpLnNsaWNlKDgsIC0xKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIb3N0IG9iamVjdHMgY2FuIHJldHVybiB0eXBlIHZhbHVlcyB0aGF0IGFyZSBkaWZmZXJlbnQgZnJvbSB0aGVpciBhY3R1YWxcbiAgICogZGF0YSB0eXBlLiBUaGUgb2JqZWN0cyB3ZSBhcmUgY29uY2VybmVkIHdpdGggdXN1YWxseSByZXR1cm4gbm9uLXByaW1pdGl2ZVxuICAgKiB0eXBlcyBvZiBcIm9iamVjdFwiLCBcImZ1bmN0aW9uXCIsIG9yIFwidW5rbm93blwiLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0geyp9IG9iamVjdCBUaGUgb3duZXIgb2YgdGhlIHByb3BlcnR5LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHkgVGhlIHByb3BlcnR5IHRvIGNoZWNrLlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHByb3BlcnR5IHZhbHVlIGlzIGEgbm9uLXByaW1pdGl2ZSwgZWxzZSBgZmFsc2VgLlxuICAgKi9cbiAgZnVuY3Rpb24gaXNIb3N0VHlwZShvYmplY3QsIHByb3BlcnR5KSB7XG4gICAgdmFyIHR5cGUgPSBvYmplY3QgIT0gbnVsbCA/IHR5cGVvZiBvYmplY3RbcHJvcGVydHldIDogJ251bWJlcic7XG4gICAgcmV0dXJuICEvXig/OmJvb2xlYW58bnVtYmVyfHN0cmluZ3x1bmRlZmluZWQpJC8udGVzdCh0eXBlKSAmJlxuICAgICAgKHR5cGUgPT0gJ29iamVjdCcgPyAhIW9iamVjdFtwcm9wZXJ0eV0gOiB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVwYXJlcyBhIHN0cmluZyBmb3IgdXNlIGluIGEgYFJlZ0V4cGAgYnkgbWFraW5nIGh5cGhlbnMgYW5kIHNwYWNlcyBvcHRpb25hbC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIHF1YWxpZnkuXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBxdWFsaWZpZWQgc3RyaW5nLlxuICAgKi9cbiAgZnVuY3Rpb24gcXVhbGlmeShzdHJpbmcpIHtcbiAgICByZXR1cm4gU3RyaW5nKHN0cmluZykucmVwbGFjZSgvKFsgLV0pKD8hJCkvZywgJyQxPycpO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgYmFyZS1ib25lcyBgQXJyYXkjcmVkdWNlYCBsaWtlIHV0aWxpdHkgZnVuY3Rpb24uXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIFRoZSBmdW5jdGlvbiBjYWxsZWQgcGVyIGl0ZXJhdGlvbi5cbiAgICogQHJldHVybnMgeyp9IFRoZSBhY2N1bXVsYXRlZCByZXN1bHQuXG4gICAqL1xuICBmdW5jdGlvbiByZWR1Y2UoYXJyYXksIGNhbGxiYWNrKSB7XG4gICAgdmFyIGFjY3VtdWxhdG9yID0gbnVsbDtcbiAgICBlYWNoKGFycmF5LCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgpIHtcbiAgICAgIGFjY3VtdWxhdG9yID0gY2FsbGJhY2soYWNjdW11bGF0b3IsIHZhbHVlLCBpbmRleCwgYXJyYXkpO1xuICAgIH0pO1xuICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2UgZnJvbSBhIHN0cmluZy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIHRyaW0uXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSB0cmltbWVkIHN0cmluZy5cbiAgICovXG4gIGZ1bmN0aW9uIHRyaW0oc3RyaW5nKSB7XG4gICAgcmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UoL14gK3wgKyQvZywgJycpO1xuICB9XG5cbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgcGxhdGZvcm0gb2JqZWN0LlxuICAgKlxuICAgKiBAbWVtYmVyT2YgcGxhdGZvcm1cbiAgICogQHBhcmFtIHtPYmplY3R8c3RyaW5nfSBbdWE9bmF2aWdhdG9yLnVzZXJBZ2VudF0gVGhlIHVzZXIgYWdlbnQgc3RyaW5nIG9yXG4gICAqICBjb250ZXh0IG9iamVjdC5cbiAgICogQHJldHVybnMge09iamVjdH0gQSBwbGF0Zm9ybSBvYmplY3QuXG4gICAqL1xuICBmdW5jdGlvbiBwYXJzZSh1YSkge1xuXG4gICAgLyoqIFRoZSBlbnZpcm9ubWVudCBjb250ZXh0IG9iamVjdC4gKi9cbiAgICB2YXIgY29udGV4dCA9IHJvb3Q7XG5cbiAgICAvKiogVXNlZCB0byBmbGFnIHdoZW4gYSBjdXN0b20gY29udGV4dCBpcyBwcm92aWRlZC4gKi9cbiAgICB2YXIgaXNDdXN0b21Db250ZXh0ID0gdWEgJiYgdHlwZW9mIHVhID09ICdvYmplY3QnICYmIGdldENsYXNzT2YodWEpICE9ICdTdHJpbmcnO1xuXG4gICAgLy8gSnVnZ2xlIGFyZ3VtZW50cy5cbiAgICBpZiAoaXNDdXN0b21Db250ZXh0KSB7XG4gICAgICBjb250ZXh0ID0gdWE7XG4gICAgICB1YSA9IG51bGw7XG4gICAgfVxuXG4gICAgLyoqIEJyb3dzZXIgbmF2aWdhdG9yIG9iamVjdC4gKi9cbiAgICB2YXIgbmF2ID0gY29udGV4dC5uYXZpZ2F0b3IgfHwge307XG5cbiAgICAvKiogQnJvd3NlciB1c2VyIGFnZW50IHN0cmluZy4gKi9cbiAgICB2YXIgdXNlckFnZW50ID0gbmF2LnVzZXJBZ2VudCB8fCAnJztcblxuICAgIHVhIHx8ICh1YSA9IHVzZXJBZ2VudCk7XG5cbiAgICAvKiogVXNlZCB0byBmbGFnIHdoZW4gYHRoaXNCaW5kaW5nYCBpcyB0aGUgW01vZHVsZVNjb3BlXS4gKi9cbiAgICB2YXIgaXNNb2R1bGVTY29wZSA9IGlzQ3VzdG9tQ29udGV4dCB8fCB0aGlzQmluZGluZyA9PSBvbGRSb290O1xuXG4gICAgLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGJyb3dzZXIgaXMgbGlrZSBDaHJvbWUuICovXG4gICAgdmFyIGxpa2VDaHJvbWUgPSBpc0N1c3RvbUNvbnRleHRcbiAgICAgID8gISFuYXYubGlrZUNocm9tZVxuICAgICAgOiAvXFxiQ2hyb21lXFxiLy50ZXN0KHVhKSAmJiAhL2ludGVybmFsfFxcbi9pLnRlc3QodG9TdHJpbmcudG9TdHJpbmcoKSk7XG5cbiAgICAvKiogSW50ZXJuYWwgYFtbQ2xhc3NdXWAgdmFsdWUgc2hvcnRjdXRzLiAqL1xuICAgIHZhciBvYmplY3RDbGFzcyA9ICdPYmplY3QnLFxuICAgICAgICBhaXJSdW50aW1lQ2xhc3MgPSBpc0N1c3RvbUNvbnRleHQgPyBvYmplY3RDbGFzcyA6ICdTY3JpcHRCcmlkZ2luZ1Byb3h5T2JqZWN0JyxcbiAgICAgICAgZW52aXJvQ2xhc3MgPSBpc0N1c3RvbUNvbnRleHQgPyBvYmplY3RDbGFzcyA6ICdFbnZpcm9ubWVudCcsXG4gICAgICAgIGphdmFDbGFzcyA9IChpc0N1c3RvbUNvbnRleHQgJiYgY29udGV4dC5qYXZhKSA/ICdKYXZhUGFja2FnZScgOiBnZXRDbGFzc09mKGNvbnRleHQuamF2YSksXG4gICAgICAgIHBoYW50b21DbGFzcyA9IGlzQ3VzdG9tQ29udGV4dCA/IG9iamVjdENsYXNzIDogJ1J1bnRpbWVPYmplY3QnO1xuXG4gICAgLyoqIERldGVjdCBKYXZhIGVudmlyb25tZW50cy4gKi9cbiAgICB2YXIgamF2YSA9IC9cXGJKYXZhLy50ZXN0KGphdmFDbGFzcykgJiYgY29udGV4dC5qYXZhO1xuXG4gICAgLyoqIERldGVjdCBSaGluby4gKi9cbiAgICB2YXIgcmhpbm8gPSBqYXZhICYmIGdldENsYXNzT2YoY29udGV4dC5lbnZpcm9ubWVudCkgPT0gZW52aXJvQ2xhc3M7XG5cbiAgICAvKiogQSBjaGFyYWN0ZXIgdG8gcmVwcmVzZW50IGFscGhhLiAqL1xuICAgIHZhciBhbHBoYSA9IGphdmEgPyAnYScgOiAnXFx1MDNiMSc7XG5cbiAgICAvKiogQSBjaGFyYWN0ZXIgdG8gcmVwcmVzZW50IGJldGEuICovXG4gICAgdmFyIGJldGEgPSBqYXZhID8gJ2InIDogJ1xcdTAzYjInO1xuXG4gICAgLyoqIEJyb3dzZXIgZG9jdW1lbnQgb2JqZWN0LiAqL1xuICAgIHZhciBkb2MgPSBjb250ZXh0LmRvY3VtZW50IHx8IHt9O1xuXG4gICAgLyoqXG4gICAgICogRGV0ZWN0IE9wZXJhIGJyb3dzZXIgKFByZXN0by1iYXNlZCkuXG4gICAgICogaHR0cDovL3d3dy5ob3d0b2NyZWF0ZS5jby51ay9vcGVyYVN0dWZmL29wZXJhT2JqZWN0Lmh0bWxcbiAgICAgKiBodHRwOi8vZGV2Lm9wZXJhLmNvbS9hcnRpY2xlcy92aWV3L29wZXJhLW1pbmktd2ViLWNvbnRlbnQtYXV0aG9yaW5nLWd1aWRlbGluZXMvI29wZXJhbWluaVxuICAgICAqL1xuICAgIHZhciBvcGVyYSA9IGNvbnRleHQub3BlcmFtaW5pIHx8IGNvbnRleHQub3BlcmE7XG5cbiAgICAvKiogT3BlcmEgYFtbQ2xhc3NdXWAuICovXG4gICAgdmFyIG9wZXJhQ2xhc3MgPSByZU9wZXJhLnRlc3Qob3BlcmFDbGFzcyA9IChpc0N1c3RvbUNvbnRleHQgJiYgb3BlcmEpID8gb3BlcmFbJ1tbQ2xhc3NdXSddIDogZ2V0Q2xhc3NPZihvcGVyYSkpXG4gICAgICA/IG9wZXJhQ2xhc3NcbiAgICAgIDogKG9wZXJhID0gbnVsbCk7XG5cbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgICAvKiogVGVtcG9yYXJ5IHZhcmlhYmxlIHVzZWQgb3ZlciB0aGUgc2NyaXB0J3MgbGlmZXRpbWUuICovXG4gICAgdmFyIGRhdGE7XG5cbiAgICAvKiogVGhlIENQVSBhcmNoaXRlY3R1cmUuICovXG4gICAgdmFyIGFyY2ggPSB1YTtcblxuICAgIC8qKiBQbGF0Zm9ybSBkZXNjcmlwdGlvbiBhcnJheS4gKi9cbiAgICB2YXIgZGVzY3JpcHRpb24gPSBbXTtcblxuICAgIC8qKiBQbGF0Zm9ybSBhbHBoYS9iZXRhIGluZGljYXRvci4gKi9cbiAgICB2YXIgcHJlcmVsZWFzZSA9IG51bGw7XG5cbiAgICAvKiogQSBmbGFnIHRvIGluZGljYXRlIHRoYXQgZW52aXJvbm1lbnQgZmVhdHVyZXMgc2hvdWxkIGJlIHVzZWQgdG8gcmVzb2x2ZSB0aGUgcGxhdGZvcm0uICovXG4gICAgdmFyIHVzZUZlYXR1cmVzID0gdWEgPT0gdXNlckFnZW50O1xuXG4gICAgLyoqIFRoZSBicm93c2VyL2Vudmlyb25tZW50IHZlcnNpb24uICovXG4gICAgdmFyIHZlcnNpb24gPSB1c2VGZWF0dXJlcyAmJiBvcGVyYSAmJiB0eXBlb2Ygb3BlcmEudmVyc2lvbiA9PSAnZnVuY3Rpb24nICYmIG9wZXJhLnZlcnNpb24oKTtcblxuICAgIC8qKiBBIGZsYWcgdG8gaW5kaWNhdGUgaWYgdGhlIE9TIGVuZHMgd2l0aCBcIi8gVmVyc2lvblwiICovXG4gICAgdmFyIGlzU3BlY2lhbENhc2VkT1M7XG5cbiAgICAvKiBEZXRlY3RhYmxlIGxheW91dCBlbmdpbmVzIChvcmRlciBpcyBpbXBvcnRhbnQpLiAqL1xuICAgIHZhciBsYXlvdXQgPSBnZXRMYXlvdXQoW1xuICAgICAgeyAnbGFiZWwnOiAnRWRnZUhUTUwnLCAncGF0dGVybic6ICdFZGdlJyB9LFxuICAgICAgJ1RyaWRlbnQnLFxuICAgICAgeyAnbGFiZWwnOiAnV2ViS2l0JywgJ3BhdHRlcm4nOiAnQXBwbGVXZWJLaXQnIH0sXG4gICAgICAnaUNhYicsXG4gICAgICAnUHJlc3RvJyxcbiAgICAgICdOZXRGcm9udCcsXG4gICAgICAnVGFzbWFuJyxcbiAgICAgICdLSFRNTCcsXG4gICAgICAnR2Vja28nXG4gICAgXSk7XG5cbiAgICAvKiBEZXRlY3RhYmxlIGJyb3dzZXIgbmFtZXMgKG9yZGVyIGlzIGltcG9ydGFudCkuICovXG4gICAgdmFyIG5hbWUgPSBnZXROYW1lKFtcbiAgICAgICdBZG9iZSBBSVInLFxuICAgICAgJ0Fyb3JhJyxcbiAgICAgICdBdmFudCBCcm93c2VyJyxcbiAgICAgICdCcmVhY2gnLFxuICAgICAgJ0NhbWlubycsXG4gICAgICAnRWxlY3Ryb24nLFxuICAgICAgJ0VwaXBoYW55JyxcbiAgICAgICdGZW5uZWMnLFxuICAgICAgJ0Zsb2NrJyxcbiAgICAgICdHYWxlb24nLFxuICAgICAgJ0dyZWVuQnJvd3NlcicsXG4gICAgICAnaUNhYicsXG4gICAgICAnSWNld2Vhc2VsJyxcbiAgICAgICdLLU1lbGVvbicsXG4gICAgICAnS29ucXVlcm9yJyxcbiAgICAgICdMdW5hc2NhcGUnLFxuICAgICAgJ01heHRob24nLFxuICAgICAgeyAnbGFiZWwnOiAnTWljcm9zb2Z0IEVkZ2UnLCAncGF0dGVybic6ICdFZGdlJyB9LFxuICAgICAgJ01pZG9yaScsXG4gICAgICAnTm9vayBCcm93c2VyJyxcbiAgICAgICdQYWxlTW9vbicsXG4gICAgICAnUGhhbnRvbUpTJyxcbiAgICAgICdSYXZlbicsXG4gICAgICAnUmVrb25xJyxcbiAgICAgICdSb2NrTWVsdCcsXG4gICAgICB7ICdsYWJlbCc6ICdTYW1zdW5nIEludGVybmV0JywgJ3BhdHRlcm4nOiAnU2Ftc3VuZ0Jyb3dzZXInIH0sXG4gICAgICAnU2VhTW9ua2V5JyxcbiAgICAgIHsgJ2xhYmVsJzogJ1NpbGsnLCAncGF0dGVybic6ICcoPzpDbG91ZDl8U2lsay1BY2NlbGVyYXRlZCknIH0sXG4gICAgICAnU2xlaXBuaXInLFxuICAgICAgJ1NsaW1Ccm93c2VyJyxcbiAgICAgIHsgJ2xhYmVsJzogJ1NSV2FyZSBJcm9uJywgJ3BhdHRlcm4nOiAnSXJvbicgfSxcbiAgICAgICdTdW5yaXNlJyxcbiAgICAgICdTd2lmdGZveCcsXG4gICAgICAnV2F0ZXJmb3gnLFxuICAgICAgJ1dlYlBvc2l0aXZlJyxcbiAgICAgICdPcGVyYSBNaW5pJyxcbiAgICAgIHsgJ2xhYmVsJzogJ09wZXJhIE1pbmknLCAncGF0dGVybic6ICdPUGlPUycgfSxcbiAgICAgICdPcGVyYScsXG4gICAgICB7ICdsYWJlbCc6ICdPcGVyYScsICdwYXR0ZXJuJzogJ09QUicgfSxcbiAgICAgICdDaHJvbWUnLFxuICAgICAgeyAnbGFiZWwnOiAnQ2hyb21lIE1vYmlsZScsICdwYXR0ZXJuJzogJyg/OkNyaU9TfENyTW8pJyB9LFxuICAgICAgeyAnbGFiZWwnOiAnRmlyZWZveCcsICdwYXR0ZXJuJzogJyg/OkZpcmVmb3h8TWluZWZpZWxkKScgfSxcbiAgICAgIHsgJ2xhYmVsJzogJ0ZpcmVmb3ggZm9yIGlPUycsICdwYXR0ZXJuJzogJ0Z4aU9TJyB9LFxuICAgICAgeyAnbGFiZWwnOiAnSUUnLCAncGF0dGVybic6ICdJRU1vYmlsZScgfSxcbiAgICAgIHsgJ2xhYmVsJzogJ0lFJywgJ3BhdHRlcm4nOiAnTVNJRScgfSxcbiAgICAgICdTYWZhcmknXG4gICAgXSk7XG5cbiAgICAvKiBEZXRlY3RhYmxlIHByb2R1Y3RzIChvcmRlciBpcyBpbXBvcnRhbnQpLiAqL1xuICAgIHZhciBwcm9kdWN0ID0gZ2V0UHJvZHVjdChbXG4gICAgICB7ICdsYWJlbCc6ICdCbGFja0JlcnJ5JywgJ3BhdHRlcm4nOiAnQkIxMCcgfSxcbiAgICAgICdCbGFja0JlcnJ5JyxcbiAgICAgIHsgJ2xhYmVsJzogJ0dhbGF4eSBTJywgJ3BhdHRlcm4nOiAnR1QtSTkwMDAnIH0sXG4gICAgICB7ICdsYWJlbCc6ICdHYWxheHkgUzInLCAncGF0dGVybic6ICdHVC1JOTEwMCcgfSxcbiAgICAgIHsgJ2xhYmVsJzogJ0dhbGF4eSBTMycsICdwYXR0ZXJuJzogJ0dULUk5MzAwJyB9LFxuICAgICAgeyAnbGFiZWwnOiAnR2FsYXh5IFM0JywgJ3BhdHRlcm4nOiAnR1QtSTk1MDAnIH0sXG4gICAgICB7ICdsYWJlbCc6ICdHYWxheHkgUzUnLCAncGF0dGVybic6ICdTTS1HOTAwJyB9LFxuICAgICAgeyAnbGFiZWwnOiAnR2FsYXh5IFM2JywgJ3BhdHRlcm4nOiAnU00tRzkyMCcgfSxcbiAgICAgIHsgJ2xhYmVsJzogJ0dhbGF4eSBTNiBFZGdlJywgJ3BhdHRlcm4nOiAnU00tRzkyNScgfSxcbiAgICAgIHsgJ2xhYmVsJzogJ0dhbGF4eSBTNycsICdwYXR0ZXJuJzogJ1NNLUc5MzAnIH0sXG4gICAgICB7ICdsYWJlbCc6ICdHYWxheHkgUzcgRWRnZScsICdwYXR0ZXJuJzogJ1NNLUc5MzUnIH0sXG4gICAgICAnR29vZ2xlIFRWJyxcbiAgICAgICdMdW1pYScsXG4gICAgICAnaVBhZCcsXG4gICAgICAnaVBvZCcsXG4gICAgICAnaVBob25lJyxcbiAgICAgICdLaW5kbGUnLFxuICAgICAgeyAnbGFiZWwnOiAnS2luZGxlIEZpcmUnLCAncGF0dGVybic6ICcoPzpDbG91ZDl8U2lsay1BY2NlbGVyYXRlZCknIH0sXG4gICAgICAnTmV4dXMnLFxuICAgICAgJ05vb2snLFxuICAgICAgJ1BsYXlCb29rJyxcbiAgICAgICdQbGF5U3RhdGlvbiBWaXRhJyxcbiAgICAgICdQbGF5U3RhdGlvbicsXG4gICAgICAnVG91Y2hQYWQnLFxuICAgICAgJ1RyYW5zZm9ybWVyJyxcbiAgICAgIHsgJ2xhYmVsJzogJ1dpaSBVJywgJ3BhdHRlcm4nOiAnV2lpVScgfSxcbiAgICAgICdXaWknLFxuICAgICAgJ1hib3ggT25lJyxcbiAgICAgIHsgJ2xhYmVsJzogJ1hib3ggMzYwJywgJ3BhdHRlcm4nOiAnWGJveCcgfSxcbiAgICAgICdYb29tJ1xuICAgIF0pO1xuXG4gICAgLyogRGV0ZWN0YWJsZSBtYW51ZmFjdHVyZXJzLiAqL1xuICAgIHZhciBtYW51ZmFjdHVyZXIgPSBnZXRNYW51ZmFjdHVyZXIoe1xuICAgICAgJ0FwcGxlJzogeyAnaVBhZCc6IDEsICdpUGhvbmUnOiAxLCAnaVBvZCc6IDEgfSxcbiAgICAgICdBcmNob3MnOiB7fSxcbiAgICAgICdBbWF6b24nOiB7ICdLaW5kbGUnOiAxLCAnS2luZGxlIEZpcmUnOiAxIH0sXG4gICAgICAnQXN1cyc6IHsgJ1RyYW5zZm9ybWVyJzogMSB9LFxuICAgICAgJ0Jhcm5lcyAmIE5vYmxlJzogeyAnTm9vayc6IDEgfSxcbiAgICAgICdCbGFja0JlcnJ5JzogeyAnUGxheUJvb2snOiAxIH0sXG4gICAgICAnR29vZ2xlJzogeyAnR29vZ2xlIFRWJzogMSwgJ05leHVzJzogMSB9LFxuICAgICAgJ0hQJzogeyAnVG91Y2hQYWQnOiAxIH0sXG4gICAgICAnSFRDJzoge30sXG4gICAgICAnTEcnOiB7fSxcbiAgICAgICdNaWNyb3NvZnQnOiB7ICdYYm94JzogMSwgJ1hib3ggT25lJzogMSB9LFxuICAgICAgJ01vdG9yb2xhJzogeyAnWG9vbSc6IDEgfSxcbiAgICAgICdOaW50ZW5kbyc6IHsgJ1dpaSBVJzogMSwgICdXaWknOiAxIH0sXG4gICAgICAnTm9raWEnOiB7ICdMdW1pYSc6IDEgfSxcbiAgICAgICdTYW1zdW5nJzogeyAnR2FsYXh5IFMnOiAxLCAnR2FsYXh5IFMyJzogMSwgJ0dhbGF4eSBTMyc6IDEsICdHYWxheHkgUzQnOiAxIH0sXG4gICAgICAnU29ueSc6IHsgJ1BsYXlTdGF0aW9uJzogMSwgJ1BsYXlTdGF0aW9uIFZpdGEnOiAxIH1cbiAgICB9KTtcblxuICAgIC8qIERldGVjdGFibGUgb3BlcmF0aW5nIHN5c3RlbXMgKG9yZGVyIGlzIGltcG9ydGFudCkuICovXG4gICAgdmFyIG9zID0gZ2V0T1MoW1xuICAgICAgJ1dpbmRvd3MgUGhvbmUnLFxuICAgICAgJ0FuZHJvaWQnLFxuICAgICAgJ0NlbnRPUycsXG4gICAgICB7ICdsYWJlbCc6ICdDaHJvbWUgT1MnLCAncGF0dGVybic6ICdDck9TJyB9LFxuICAgICAgJ0RlYmlhbicsXG4gICAgICAnRmVkb3JhJyxcbiAgICAgICdGcmVlQlNEJyxcbiAgICAgICdHZW50b28nLFxuICAgICAgJ0hhaWt1JyxcbiAgICAgICdLdWJ1bnR1JyxcbiAgICAgICdMaW51eCBNaW50JyxcbiAgICAgICdPcGVuQlNEJyxcbiAgICAgICdSZWQgSGF0JyxcbiAgICAgICdTdVNFJyxcbiAgICAgICdVYnVudHUnLFxuICAgICAgJ1h1YnVudHUnLFxuICAgICAgJ0N5Z3dpbicsXG4gICAgICAnU3ltYmlhbiBPUycsXG4gICAgICAnaHB3T1MnLFxuICAgICAgJ3dlYk9TICcsXG4gICAgICAnd2ViT1MnLFxuICAgICAgJ1RhYmxldCBPUycsXG4gICAgICAnVGl6ZW4nLFxuICAgICAgJ0xpbnV4JyxcbiAgICAgICdNYWMgT1MgWCcsXG4gICAgICAnTWFjaW50b3NoJyxcbiAgICAgICdNYWMnLFxuICAgICAgJ1dpbmRvd3MgOTg7JyxcbiAgICAgICdXaW5kb3dzICdcbiAgICBdKTtcblxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICAgIC8qKlxuICAgICAqIFBpY2tzIHRoZSBsYXlvdXQgZW5naW5lIGZyb20gYW4gYXJyYXkgb2YgZ3Vlc3Nlcy5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtBcnJheX0gZ3Vlc3NlcyBBbiBhcnJheSBvZiBndWVzc2VzLlxuICAgICAqIEByZXR1cm5zIHtudWxsfHN0cmluZ30gVGhlIGRldGVjdGVkIGxheW91dCBlbmdpbmUuXG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0TGF5b3V0KGd1ZXNzZXMpIHtcbiAgICAgIHJldHVybiByZWR1Y2UoZ3Vlc3NlcywgZnVuY3Rpb24ocmVzdWx0LCBndWVzcykge1xuICAgICAgICByZXR1cm4gcmVzdWx0IHx8IFJlZ0V4cCgnXFxcXGInICsgKFxuICAgICAgICAgIGd1ZXNzLnBhdHRlcm4gfHwgcXVhbGlmeShndWVzcylcbiAgICAgICAgKSArICdcXFxcYicsICdpJykuZXhlYyh1YSkgJiYgKGd1ZXNzLmxhYmVsIHx8IGd1ZXNzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBpY2tzIHRoZSBtYW51ZmFjdHVyZXIgZnJvbSBhbiBhcnJheSBvZiBndWVzc2VzLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBndWVzc2VzIEFuIG9iamVjdCBvZiBndWVzc2VzLlxuICAgICAqIEByZXR1cm5zIHtudWxsfHN0cmluZ30gVGhlIGRldGVjdGVkIG1hbnVmYWN0dXJlci5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXRNYW51ZmFjdHVyZXIoZ3Vlc3Nlcykge1xuICAgICAgcmV0dXJuIHJlZHVjZShndWVzc2VzLCBmdW5jdGlvbihyZXN1bHQsIHZhbHVlLCBrZXkpIHtcbiAgICAgICAgLy8gTG9va3VwIHRoZSBtYW51ZmFjdHVyZXIgYnkgcHJvZHVjdCBvciBzY2FuIHRoZSBVQSBmb3IgdGhlIG1hbnVmYWN0dXJlci5cbiAgICAgICAgcmV0dXJuIHJlc3VsdCB8fCAoXG4gICAgICAgICAgdmFsdWVbcHJvZHVjdF0gfHxcbiAgICAgICAgICB2YWx1ZVsvXlthLXpdKyg/OiArW2Etel0rXFxiKSovaS5leGVjKHByb2R1Y3QpXSB8fFxuICAgICAgICAgIFJlZ0V4cCgnXFxcXGInICsgcXVhbGlmeShrZXkpICsgJyg/OlxcXFxifFxcXFx3KlxcXFxkKScsICdpJykuZXhlYyh1YSlcbiAgICAgICAgKSAmJiBrZXk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQaWNrcyB0aGUgYnJvd3NlciBuYW1lIGZyb20gYW4gYXJyYXkgb2YgZ3Vlc3Nlcy5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtBcnJheX0gZ3Vlc3NlcyBBbiBhcnJheSBvZiBndWVzc2VzLlxuICAgICAqIEByZXR1cm5zIHtudWxsfHN0cmluZ30gVGhlIGRldGVjdGVkIGJyb3dzZXIgbmFtZS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXROYW1lKGd1ZXNzZXMpIHtcbiAgICAgIHJldHVybiByZWR1Y2UoZ3Vlc3NlcywgZnVuY3Rpb24ocmVzdWx0LCBndWVzcykge1xuICAgICAgICByZXR1cm4gcmVzdWx0IHx8IFJlZ0V4cCgnXFxcXGInICsgKFxuICAgICAgICAgIGd1ZXNzLnBhdHRlcm4gfHwgcXVhbGlmeShndWVzcylcbiAgICAgICAgKSArICdcXFxcYicsICdpJykuZXhlYyh1YSkgJiYgKGd1ZXNzLmxhYmVsIHx8IGd1ZXNzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBpY2tzIHRoZSBPUyBuYW1lIGZyb20gYW4gYXJyYXkgb2YgZ3Vlc3Nlcy5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtBcnJheX0gZ3Vlc3NlcyBBbiBhcnJheSBvZiBndWVzc2VzLlxuICAgICAqIEByZXR1cm5zIHtudWxsfHN0cmluZ30gVGhlIGRldGVjdGVkIE9TIG5hbWUuXG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0T1MoZ3Vlc3Nlcykge1xuICAgICAgcmV0dXJuIHJlZHVjZShndWVzc2VzLCBmdW5jdGlvbihyZXN1bHQsIGd1ZXNzKSB7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gZ3Vlc3MucGF0dGVybiB8fCBxdWFsaWZ5KGd1ZXNzKTtcbiAgICAgICAgaWYgKCFyZXN1bHQgJiYgKHJlc3VsdCA9XG4gICAgICAgICAgICAgIFJlZ0V4cCgnXFxcXGInICsgcGF0dGVybiArICcoPzovW1xcXFxkLl0rfFsgXFxcXHcuXSopJywgJ2knKS5leGVjKHVhKVxuICAgICAgICAgICAgKSkge1xuICAgICAgICAgIHJlc3VsdCA9IGNsZWFudXBPUyhyZXN1bHQsIHBhdHRlcm4sIGd1ZXNzLmxhYmVsIHx8IGd1ZXNzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGlja3MgdGhlIHByb2R1Y3QgbmFtZSBmcm9tIGFuIGFycmF5IG9mIGd1ZXNzZXMuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGd1ZXNzZXMgQW4gYXJyYXkgb2YgZ3Vlc3Nlcy5cbiAgICAgKiBAcmV0dXJucyB7bnVsbHxzdHJpbmd9IFRoZSBkZXRlY3RlZCBwcm9kdWN0IG5hbWUuXG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0UHJvZHVjdChndWVzc2VzKSB7XG4gICAgICByZXR1cm4gcmVkdWNlKGd1ZXNzZXMsIGZ1bmN0aW9uKHJlc3VsdCwgZ3Vlc3MpIHtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSBndWVzcy5wYXR0ZXJuIHx8IHF1YWxpZnkoZ3Vlc3MpO1xuICAgICAgICBpZiAoIXJlc3VsdCAmJiAocmVzdWx0ID1cbiAgICAgICAgICAgICAgUmVnRXhwKCdcXFxcYicgKyBwYXR0ZXJuICsgJyAqXFxcXGQrWy5cXFxcd19dKicsICdpJykuZXhlYyh1YSkgfHxcbiAgICAgICAgICAgICAgUmVnRXhwKCdcXFxcYicgKyBwYXR0ZXJuICsgJyAqXFxcXHcrLVtcXFxcd10qJywgJ2knKS5leGVjKHVhKSB8fFxuICAgICAgICAgICAgICBSZWdFeHAoJ1xcXFxiJyArIHBhdHRlcm4gKyAnKD86OyAqKD86W2Etel0rW18tXSk/W2Etel0rXFxcXGQrfFteICgpOy1dKiknLCAnaScpLmV4ZWModWEpXG4gICAgICAgICAgICApKSB7XG4gICAgICAgICAgLy8gU3BsaXQgYnkgZm9yd2FyZCBzbGFzaCBhbmQgYXBwZW5kIHByb2R1Y3QgdmVyc2lvbiBpZiBuZWVkZWQuXG4gICAgICAgICAgaWYgKChyZXN1bHQgPSBTdHJpbmcoKGd1ZXNzLmxhYmVsICYmICFSZWdFeHAocGF0dGVybiwgJ2knKS50ZXN0KGd1ZXNzLmxhYmVsKSkgPyBndWVzcy5sYWJlbCA6IHJlc3VsdCkuc3BsaXQoJy8nKSlbMV0gJiYgIS9bXFxkLl0rLy50ZXN0KHJlc3VsdFswXSkpIHtcbiAgICAgICAgICAgIHJlc3VsdFswXSArPSAnICcgKyByZXN1bHRbMV07XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIENvcnJlY3QgY2hhcmFjdGVyIGNhc2UgYW5kIGNsZWFudXAgc3RyaW5nLlxuICAgICAgICAgIGd1ZXNzID0gZ3Vlc3MubGFiZWwgfHwgZ3Vlc3M7XG4gICAgICAgICAgcmVzdWx0ID0gZm9ybWF0KHJlc3VsdFswXVxuICAgICAgICAgICAgLnJlcGxhY2UoUmVnRXhwKHBhdHRlcm4sICdpJyksIGd1ZXNzKVxuICAgICAgICAgICAgLnJlcGxhY2UoUmVnRXhwKCc7ICooPzonICsgZ3Vlc3MgKyAnW18tXSk/JywgJ2knKSwgJyAnKVxuICAgICAgICAgICAgLnJlcGxhY2UoUmVnRXhwKCcoJyArIGd1ZXNzICsgJylbLV8uXT8oXFxcXHcpJywgJ2knKSwgJyQxICQyJykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNvbHZlcyB0aGUgdmVyc2lvbiB1c2luZyBhbiBhcnJheSBvZiBVQSBwYXR0ZXJucy5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtBcnJheX0gcGF0dGVybnMgQW4gYXJyYXkgb2YgVUEgcGF0dGVybnMuXG4gICAgICogQHJldHVybnMge251bGx8c3RyaW5nfSBUaGUgZGV0ZWN0ZWQgdmVyc2lvbi5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXRWZXJzaW9uKHBhdHRlcm5zKSB7XG4gICAgICByZXR1cm4gcmVkdWNlKHBhdHRlcm5zLCBmdW5jdGlvbihyZXN1bHQsIHBhdHRlcm4pIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCB8fCAoUmVnRXhwKHBhdHRlcm4gK1xuICAgICAgICAgICcoPzotW1xcXFxkLl0rL3woPzogZm9yIFtcXFxcdy1dKyk/WyAvLV0pKFtcXFxcZC5dK1teICgpOy9fLV0qKScsICdpJykuZXhlYyh1YSkgfHwgMClbMV0gfHwgbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYHBsYXRmb3JtLmRlc2NyaXB0aW9uYCB3aGVuIHRoZSBwbGF0Zm9ybSBvYmplY3QgaXMgY29lcmNlZCB0byBhIHN0cmluZy5cbiAgICAgKlxuICAgICAqIEBuYW1lIHRvU3RyaW5nXG4gICAgICogQG1lbWJlck9mIHBsYXRmb3JtXG4gICAgICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyBgcGxhdGZvcm0uZGVzY3JpcHRpb25gIGlmIGF2YWlsYWJsZSwgZWxzZSBhbiBlbXB0eSBzdHJpbmcuXG4gICAgICovXG4gICAgZnVuY3Rpb24gdG9TdHJpbmdQbGF0Zm9ybSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uIHx8ICcnO1xuICAgIH1cblxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICAgIC8vIENvbnZlcnQgbGF5b3V0IHRvIGFuIGFycmF5IHNvIHdlIGNhbiBhZGQgZXh0cmEgZGV0YWlscy5cbiAgICBsYXlvdXQgJiYgKGxheW91dCA9IFtsYXlvdXRdKTtcblxuICAgIC8vIERldGVjdCBwcm9kdWN0IG5hbWVzIHRoYXQgY29udGFpbiB0aGVpciBtYW51ZmFjdHVyZXIncyBuYW1lLlxuICAgIGlmIChtYW51ZmFjdHVyZXIgJiYgIXByb2R1Y3QpIHtcbiAgICAgIHByb2R1Y3QgPSBnZXRQcm9kdWN0KFttYW51ZmFjdHVyZXJdKTtcbiAgICB9XG4gICAgLy8gQ2xlYW4gdXAgR29vZ2xlIFRWLlxuICAgIGlmICgoZGF0YSA9IC9cXGJHb29nbGUgVFZcXGIvLmV4ZWMocHJvZHVjdCkpKSB7XG4gICAgICBwcm9kdWN0ID0gZGF0YVswXTtcbiAgICB9XG4gICAgLy8gRGV0ZWN0IHNpbXVsYXRvcnMuXG4gICAgaWYgKC9cXGJTaW11bGF0b3JcXGIvaS50ZXN0KHVhKSkge1xuICAgICAgcHJvZHVjdCA9IChwcm9kdWN0ID8gcHJvZHVjdCArICcgJyA6ICcnKSArICdTaW11bGF0b3InO1xuICAgIH1cbiAgICAvLyBEZXRlY3QgT3BlcmEgTWluaSA4KyBydW5uaW5nIGluIFR1cmJvL1VuY29tcHJlc3NlZCBtb2RlIG9uIGlPUy5cbiAgICBpZiAobmFtZSA9PSAnT3BlcmEgTWluaScgJiYgL1xcYk9QaU9TXFxiLy50ZXN0KHVhKSkge1xuICAgICAgZGVzY3JpcHRpb24ucHVzaCgncnVubmluZyBpbiBUdXJiby9VbmNvbXByZXNzZWQgbW9kZScpO1xuICAgIH1cbiAgICAvLyBEZXRlY3QgSUUgTW9iaWxlIDExLlxuICAgIGlmIChuYW1lID09ICdJRScgJiYgL1xcYmxpa2UgaVBob25lIE9TXFxiLy50ZXN0KHVhKSkge1xuICAgICAgZGF0YSA9IHBhcnNlKHVhLnJlcGxhY2UoL2xpa2UgaVBob25lIE9TLywgJycpKTtcbiAgICAgIG1hbnVmYWN0dXJlciA9IGRhdGEubWFudWZhY3R1cmVyO1xuICAgICAgcHJvZHVjdCA9IGRhdGEucHJvZHVjdDtcbiAgICB9XG4gICAgLy8gRGV0ZWN0IGlPUy5cbiAgICBlbHNlIGlmICgvXmlQLy50ZXN0KHByb2R1Y3QpKSB7XG4gICAgICBuYW1lIHx8IChuYW1lID0gJ1NhZmFyaScpO1xuICAgICAgb3MgPSAnaU9TJyArICgoZGF0YSA9IC8gT1MgKFtcXGRfXSspL2kuZXhlYyh1YSkpXG4gICAgICAgID8gJyAnICsgZGF0YVsxXS5yZXBsYWNlKC9fL2csICcuJylcbiAgICAgICAgOiAnJyk7XG4gICAgfVxuICAgIC8vIERldGVjdCBLdWJ1bnR1LlxuICAgIGVsc2UgaWYgKG5hbWUgPT0gJ0tvbnF1ZXJvcicgJiYgIS9idW50dS9pLnRlc3Qob3MpKSB7XG4gICAgICBvcyA9ICdLdWJ1bnR1JztcbiAgICB9XG4gICAgLy8gRGV0ZWN0IEFuZHJvaWQgYnJvd3NlcnMuXG4gICAgZWxzZSBpZiAoKG1hbnVmYWN0dXJlciAmJiBtYW51ZmFjdHVyZXIgIT0gJ0dvb2dsZScgJiZcbiAgICAgICAgKCgvQ2hyb21lLy50ZXN0KG5hbWUpICYmICEvXFxiTW9iaWxlIFNhZmFyaVxcYi9pLnRlc3QodWEpKSB8fCAvXFxiVml0YVxcYi8udGVzdChwcm9kdWN0KSkpIHx8XG4gICAgICAgICgvXFxiQW5kcm9pZFxcYi8udGVzdChvcykgJiYgL15DaHJvbWUvLnRlc3QobmFtZSkgJiYgL1xcYlZlcnNpb25cXC8vaS50ZXN0KHVhKSkpIHtcbiAgICAgIG5hbWUgPSAnQW5kcm9pZCBCcm93c2VyJztcbiAgICAgIG9zID0gL1xcYkFuZHJvaWRcXGIvLnRlc3Qob3MpID8gb3MgOiAnQW5kcm9pZCc7XG4gICAgfVxuICAgIC8vIERldGVjdCBTaWxrIGRlc2t0b3AvYWNjZWxlcmF0ZWQgbW9kZXMuXG4gICAgZWxzZSBpZiAobmFtZSA9PSAnU2lsaycpIHtcbiAgICAgIGlmICghL1xcYk1vYmkvaS50ZXN0KHVhKSkge1xuICAgICAgICBvcyA9ICdBbmRyb2lkJztcbiAgICAgICAgZGVzY3JpcHRpb24udW5zaGlmdCgnZGVza3RvcCBtb2RlJyk7XG4gICAgICB9XG4gICAgICBpZiAoL0FjY2VsZXJhdGVkICo9ICp0cnVlL2kudGVzdCh1YSkpIHtcbiAgICAgICAgZGVzY3JpcHRpb24udW5zaGlmdCgnYWNjZWxlcmF0ZWQnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gRGV0ZWN0IFBhbGVNb29uIGlkZW50aWZ5aW5nIGFzIEZpcmVmb3guXG4gICAgZWxzZSBpZiAobmFtZSA9PSAnUGFsZU1vb24nICYmIChkYXRhID0gL1xcYkZpcmVmb3hcXC8oW1xcZC5dKylcXGIvLmV4ZWModWEpKSkge1xuICAgICAgZGVzY3JpcHRpb24ucHVzaCgnaWRlbnRpZnlpbmcgYXMgRmlyZWZveCAnICsgZGF0YVsxXSk7XG4gICAgfVxuICAgIC8vIERldGVjdCBGaXJlZm94IE9TIGFuZCBwcm9kdWN0cyBydW5uaW5nIEZpcmVmb3guXG4gICAgZWxzZSBpZiAobmFtZSA9PSAnRmlyZWZveCcgJiYgKGRhdGEgPSAvXFxiKE1vYmlsZXxUYWJsZXR8VFYpXFxiL2kuZXhlYyh1YSkpKSB7XG4gICAgICBvcyB8fCAob3MgPSAnRmlyZWZveCBPUycpO1xuICAgICAgcHJvZHVjdCB8fCAocHJvZHVjdCA9IGRhdGFbMV0pO1xuICAgIH1cbiAgICAvLyBEZXRlY3QgZmFsc2UgcG9zaXRpdmVzIGZvciBGaXJlZm94L1NhZmFyaS5cbiAgICBlbHNlIGlmICghbmFtZSB8fCAoZGF0YSA9ICEvXFxiTWluZWZpZWxkXFxiL2kudGVzdCh1YSkgJiYgL1xcYig/OkZpcmVmb3h8U2FmYXJpKVxcYi8uZXhlYyhuYW1lKSkpIHtcbiAgICAgIC8vIEVzY2FwZSB0aGUgYC9gIGZvciBGaXJlZm94IDEuXG4gICAgICBpZiAobmFtZSAmJiAhcHJvZHVjdCAmJiAvW1xcLyxdfF5bXihdKz9cXCkvLnRlc3QodWEuc2xpY2UodWEuaW5kZXhPZihkYXRhICsgJy8nKSArIDgpKSkge1xuICAgICAgICAvLyBDbGVhciBuYW1lIG9mIGZhbHNlIHBvc2l0aXZlcy5cbiAgICAgICAgbmFtZSA9IG51bGw7XG4gICAgICB9XG4gICAgICAvLyBSZWFzc2lnbiBhIGdlbmVyaWMgbmFtZS5cbiAgICAgIGlmICgoZGF0YSA9IHByb2R1Y3QgfHwgbWFudWZhY3R1cmVyIHx8IG9zKSAmJlxuICAgICAgICAgIChwcm9kdWN0IHx8IG1hbnVmYWN0dXJlciB8fCAvXFxiKD86QW5kcm9pZHxTeW1iaWFuIE9TfFRhYmxldCBPU3x3ZWJPUylcXGIvLnRlc3Qob3MpKSkge1xuICAgICAgICBuYW1lID0gL1thLXpdKyg/OiBIYXQpPy9pLmV4ZWMoL1xcYkFuZHJvaWRcXGIvLnRlc3Qob3MpID8gb3MgOiBkYXRhKSArICcgQnJvd3Nlcic7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIEFkZCBDaHJvbWUgdmVyc2lvbiB0byBkZXNjcmlwdGlvbiBmb3IgRWxlY3Ryb24uXG4gICAgZWxzZSBpZiAobmFtZSA9PSAnRWxlY3Ryb24nICYmIChkYXRhID0gKC9cXGJDaHJvbWVcXC8oW1xcZC5dKylcXGIvLmV4ZWModWEpIHx8IDApWzFdKSkge1xuICAgICAgZGVzY3JpcHRpb24ucHVzaCgnQ2hyb21pdW0gJyArIGRhdGEpO1xuICAgIH1cbiAgICAvLyBEZXRlY3Qgbm9uLU9wZXJhIChQcmVzdG8tYmFzZWQpIHZlcnNpb25zIChvcmRlciBpcyBpbXBvcnRhbnQpLlxuICAgIGlmICghdmVyc2lvbikge1xuICAgICAgdmVyc2lvbiA9IGdldFZlcnNpb24oW1xuICAgICAgICAnKD86Q2xvdWQ5fENyaU9TfENyTW98RWRnZXxGeGlPU3xJRU1vYmlsZXxJcm9ufE9wZXJhID9NaW5pfE9QaU9TfE9QUnxSYXZlbnxTYW1zdW5nQnJvd3NlcnxTaWxrKD8hL1tcXFxcZC5dKyQpKScsXG4gICAgICAgICdWZXJzaW9uJyxcbiAgICAgICAgcXVhbGlmeShuYW1lKSxcbiAgICAgICAgJyg/OkZpcmVmb3h8TWluZWZpZWxkfE5ldEZyb250KSdcbiAgICAgIF0pO1xuICAgIH1cbiAgICAvLyBEZXRlY3Qgc3R1YmJvcm4gbGF5b3V0IGVuZ2luZXMuXG4gICAgaWYgKChkYXRhID1cbiAgICAgICAgICBsYXlvdXQgPT0gJ2lDYWInICYmIHBhcnNlRmxvYXQodmVyc2lvbikgPiAzICYmICdXZWJLaXQnIHx8XG4gICAgICAgICAgL1xcYk9wZXJhXFxiLy50ZXN0KG5hbWUpICYmICgvXFxiT1BSXFxiLy50ZXN0KHVhKSA/ICdCbGluaycgOiAnUHJlc3RvJykgfHxcbiAgICAgICAgICAvXFxiKD86TWlkb3JpfE5vb2t8U2FmYXJpKVxcYi9pLnRlc3QodWEpICYmICEvXig/OlRyaWRlbnR8RWRnZUhUTUwpJC8udGVzdChsYXlvdXQpICYmICdXZWJLaXQnIHx8XG4gICAgICAgICAgIWxheW91dCAmJiAvXFxiTVNJRVxcYi9pLnRlc3QodWEpICYmIChvcyA9PSAnTWFjIE9TJyA/ICdUYXNtYW4nIDogJ1RyaWRlbnQnKSB8fFxuICAgICAgICAgIGxheW91dCA9PSAnV2ViS2l0JyAmJiAvXFxiUGxheVN0YXRpb25cXGIoPyEgVml0YVxcYikvaS50ZXN0KG5hbWUpICYmICdOZXRGcm9udCdcbiAgICAgICAgKSkge1xuICAgICAgbGF5b3V0ID0gW2RhdGFdO1xuICAgIH1cbiAgICAvLyBEZXRlY3QgV2luZG93cyBQaG9uZSA3IGRlc2t0b3AgbW9kZS5cbiAgICBpZiAobmFtZSA9PSAnSUUnICYmIChkYXRhID0gKC87ICooPzpYQkxXUHxadW5lV1ApKFxcZCspL2kuZXhlYyh1YSkgfHwgMClbMV0pKSB7XG4gICAgICBuYW1lICs9ICcgTW9iaWxlJztcbiAgICAgIG9zID0gJ1dpbmRvd3MgUGhvbmUgJyArICgvXFwrJC8udGVzdChkYXRhKSA/IGRhdGEgOiBkYXRhICsgJy54Jyk7XG4gICAgICBkZXNjcmlwdGlvbi51bnNoaWZ0KCdkZXNrdG9wIG1vZGUnKTtcbiAgICB9XG4gICAgLy8gRGV0ZWN0IFdpbmRvd3MgUGhvbmUgOC54IGRlc2t0b3AgbW9kZS5cbiAgICBlbHNlIGlmICgvXFxiV1BEZXNrdG9wXFxiL2kudGVzdCh1YSkpIHtcbiAgICAgIG5hbWUgPSAnSUUgTW9iaWxlJztcbiAgICAgIG9zID0gJ1dpbmRvd3MgUGhvbmUgOC54JztcbiAgICAgIGRlc2NyaXB0aW9uLnVuc2hpZnQoJ2Rlc2t0b3AgbW9kZScpO1xuICAgICAgdmVyc2lvbiB8fCAodmVyc2lvbiA9ICgvXFxicnY6KFtcXGQuXSspLy5leGVjKHVhKSB8fCAwKVsxXSk7XG4gICAgfVxuICAgIC8vIERldGVjdCBJRSAxMSBpZGVudGlmeWluZyBhcyBvdGhlciBicm93c2Vycy5cbiAgICBlbHNlIGlmIChuYW1lICE9ICdJRScgJiYgbGF5b3V0ID09ICdUcmlkZW50JyAmJiAoZGF0YSA9IC9cXGJydjooW1xcZC5dKykvLmV4ZWModWEpKSkge1xuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgZGVzY3JpcHRpb24ucHVzaCgnaWRlbnRpZnlpbmcgYXMgJyArIG5hbWUgKyAodmVyc2lvbiA/ICcgJyArIHZlcnNpb24gOiAnJykpO1xuICAgICAgfVxuICAgICAgbmFtZSA9ICdJRSc7XG4gICAgICB2ZXJzaW9uID0gZGF0YVsxXTtcbiAgICB9XG4gICAgLy8gTGV2ZXJhZ2UgZW52aXJvbm1lbnQgZmVhdHVyZXMuXG4gICAgaWYgKHVzZUZlYXR1cmVzKSB7XG4gICAgICAvLyBEZXRlY3Qgc2VydmVyLXNpZGUgZW52aXJvbm1lbnRzLlxuICAgICAgLy8gUmhpbm8gaGFzIGEgZ2xvYmFsIGZ1bmN0aW9uIHdoaWxlIG90aGVycyBoYXZlIGEgZ2xvYmFsIG9iamVjdC5cbiAgICAgIGlmIChpc0hvc3RUeXBlKGNvbnRleHQsICdnbG9iYWwnKSkge1xuICAgICAgICBpZiAoamF2YSkge1xuICAgICAgICAgIGRhdGEgPSBqYXZhLmxhbmcuU3lzdGVtO1xuICAgICAgICAgIGFyY2ggPSBkYXRhLmdldFByb3BlcnR5KCdvcy5hcmNoJyk7XG4gICAgICAgICAgb3MgPSBvcyB8fCBkYXRhLmdldFByb3BlcnR5KCdvcy5uYW1lJykgKyAnICcgKyBkYXRhLmdldFByb3BlcnR5KCdvcy52ZXJzaW9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJoaW5vKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZlcnNpb24gPSBjb250ZXh0LnJlcXVpcmUoJ3JpbmdvL2VuZ2luZScpLnZlcnNpb24uam9pbignLicpO1xuICAgICAgICAgICAgbmFtZSA9ICdSaW5nb0pTJztcbiAgICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIGlmICgoZGF0YSA9IGNvbnRleHQuc3lzdGVtKSAmJiBkYXRhLmdsb2JhbC5zeXN0ZW0gPT0gY29udGV4dC5zeXN0ZW0pIHtcbiAgICAgICAgICAgICAgbmFtZSA9ICdOYXJ3aGFsJztcbiAgICAgICAgICAgICAgb3MgfHwgKG9zID0gZGF0YVswXS5vcyB8fCBudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFuYW1lKSB7XG4gICAgICAgICAgICBuYW1lID0gJ1JoaW5vJztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoXG4gICAgICAgICAgdHlwZW9mIGNvbnRleHQucHJvY2VzcyA9PSAnb2JqZWN0JyAmJiAhY29udGV4dC5wcm9jZXNzLmJyb3dzZXIgJiZcbiAgICAgICAgICAoZGF0YSA9IGNvbnRleHQucHJvY2VzcylcbiAgICAgICAgKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBkYXRhLnZlcnNpb25zID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGRhdGEudmVyc2lvbnMuZWxlY3Ryb24gPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb24ucHVzaCgnTm9kZSAnICsgZGF0YS52ZXJzaW9ucy5ub2RlKTtcbiAgICAgICAgICAgICAgbmFtZSA9ICdFbGVjdHJvbic7XG4gICAgICAgICAgICAgIHZlcnNpb24gPSBkYXRhLnZlcnNpb25zLmVsZWN0cm9uO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZGF0YS52ZXJzaW9ucy5udyA9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBkZXNjcmlwdGlvbi5wdXNoKCdDaHJvbWl1bSAnICsgdmVyc2lvbiwgJ05vZGUgJyArIGRhdGEudmVyc2lvbnMubm9kZSk7XG4gICAgICAgICAgICAgIG5hbWUgPSAnTlcuanMnO1xuICAgICAgICAgICAgICB2ZXJzaW9uID0gZGF0YS52ZXJzaW9ucy5udztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFuYW1lKSB7XG4gICAgICAgICAgICBuYW1lID0gJ05vZGUuanMnO1xuICAgICAgICAgICAgYXJjaCA9IGRhdGEuYXJjaDtcbiAgICAgICAgICAgIG9zID0gZGF0YS5wbGF0Zm9ybTtcbiAgICAgICAgICAgIHZlcnNpb24gPSAvW1xcZC5dKy8uZXhlYyhkYXRhLnZlcnNpb24pO1xuICAgICAgICAgICAgdmVyc2lvbiA9IHZlcnNpb24gPyB2ZXJzaW9uWzBdIDogbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIERldGVjdCBBZG9iZSBBSVIuXG4gICAgICBlbHNlIGlmIChnZXRDbGFzc09mKChkYXRhID0gY29udGV4dC5ydW50aW1lKSkgPT0gYWlyUnVudGltZUNsYXNzKSB7XG4gICAgICAgIG5hbWUgPSAnQWRvYmUgQUlSJztcbiAgICAgICAgb3MgPSBkYXRhLmZsYXNoLnN5c3RlbS5DYXBhYmlsaXRpZXMub3M7XG4gICAgICB9XG4gICAgICAvLyBEZXRlY3QgUGhhbnRvbUpTLlxuICAgICAgZWxzZSBpZiAoZ2V0Q2xhc3NPZigoZGF0YSA9IGNvbnRleHQucGhhbnRvbSkpID09IHBoYW50b21DbGFzcykge1xuICAgICAgICBuYW1lID0gJ1BoYW50b21KUyc7XG4gICAgICAgIHZlcnNpb24gPSAoZGF0YSA9IGRhdGEudmVyc2lvbiB8fCBudWxsKSAmJiAoZGF0YS5tYWpvciArICcuJyArIGRhdGEubWlub3IgKyAnLicgKyBkYXRhLnBhdGNoKTtcbiAgICAgIH1cbiAgICAgIC8vIERldGVjdCBJRSBjb21wYXRpYmlsaXR5IG1vZGVzLlxuICAgICAgZWxzZSBpZiAodHlwZW9mIGRvYy5kb2N1bWVudE1vZGUgPT0gJ251bWJlcicgJiYgKGRhdGEgPSAvXFxiVHJpZGVudFxcLyhcXGQrKS9pLmV4ZWModWEpKSkge1xuICAgICAgICAvLyBXZSdyZSBpbiBjb21wYXRpYmlsaXR5IG1vZGUgd2hlbiB0aGUgVHJpZGVudCB2ZXJzaW9uICsgNCBkb2Vzbid0XG4gICAgICAgIC8vIGVxdWFsIHRoZSBkb2N1bWVudCBtb2RlLlxuICAgICAgICB2ZXJzaW9uID0gW3ZlcnNpb24sIGRvYy5kb2N1bWVudE1vZGVdO1xuICAgICAgICBpZiAoKGRhdGEgPSArZGF0YVsxXSArIDQpICE9IHZlcnNpb25bMV0pIHtcbiAgICAgICAgICBkZXNjcmlwdGlvbi5wdXNoKCdJRSAnICsgdmVyc2lvblsxXSArICcgbW9kZScpO1xuICAgICAgICAgIGxheW91dCAmJiAobGF5b3V0WzFdID0gJycpO1xuICAgICAgICAgIHZlcnNpb25bMV0gPSBkYXRhO1xuICAgICAgICB9XG4gICAgICAgIHZlcnNpb24gPSBuYW1lID09ICdJRScgPyBTdHJpbmcodmVyc2lvblsxXS50b0ZpeGVkKDEpKSA6IHZlcnNpb25bMF07XG4gICAgICB9XG4gICAgICAvLyBEZXRlY3QgSUUgMTEgbWFza2luZyBhcyBvdGhlciBicm93c2Vycy5cbiAgICAgIGVsc2UgaWYgKHR5cGVvZiBkb2MuZG9jdW1lbnRNb2RlID09ICdudW1iZXInICYmIC9eKD86Q2hyb21lfEZpcmVmb3gpXFxiLy50ZXN0KG5hbWUpKSB7XG4gICAgICAgIGRlc2NyaXB0aW9uLnB1c2goJ21hc2tpbmcgYXMgJyArIG5hbWUgKyAnICcgKyB2ZXJzaW9uKTtcbiAgICAgICAgbmFtZSA9ICdJRSc7XG4gICAgICAgIHZlcnNpb24gPSAnMTEuMCc7XG4gICAgICAgIGxheW91dCA9IFsnVHJpZGVudCddO1xuICAgICAgICBvcyA9ICdXaW5kb3dzJztcbiAgICAgIH1cbiAgICAgIG9zID0gb3MgJiYgZm9ybWF0KG9zKTtcbiAgICB9XG4gICAgLy8gRGV0ZWN0IHByZXJlbGVhc2UgcGhhc2VzLlxuICAgIGlmICh2ZXJzaW9uICYmIChkYXRhID1cbiAgICAgICAgICAvKD86W2FiXXxkcHxwcmV8W2FiXVxcZCtwcmUpKD86XFxkK1xcKz8pPyQvaS5leGVjKHZlcnNpb24pIHx8XG4gICAgICAgICAgLyg/OmFscGhhfGJldGEpKD86ID9cXGQpPy9pLmV4ZWModWEgKyAnOycgKyAodXNlRmVhdHVyZXMgJiYgbmF2LmFwcE1pbm9yVmVyc2lvbikpIHx8XG4gICAgICAgICAgL1xcYk1pbmVmaWVsZFxcYi9pLnRlc3QodWEpICYmICdhJ1xuICAgICAgICApKSB7XG4gICAgICBwcmVyZWxlYXNlID0gL2IvaS50ZXN0KGRhdGEpID8gJ2JldGEnIDogJ2FscGhhJztcbiAgICAgIHZlcnNpb24gPSB2ZXJzaW9uLnJlcGxhY2UoUmVnRXhwKGRhdGEgKyAnXFxcXCs/JCcpLCAnJykgK1xuICAgICAgICAocHJlcmVsZWFzZSA9PSAnYmV0YScgPyBiZXRhIDogYWxwaGEpICsgKC9cXGQrXFwrPy8uZXhlYyhkYXRhKSB8fCAnJyk7XG4gICAgfVxuICAgIC8vIERldGVjdCBGaXJlZm94IE1vYmlsZS5cbiAgICBpZiAobmFtZSA9PSAnRmVubmVjJyB8fCBuYW1lID09ICdGaXJlZm94JyAmJiAvXFxiKD86QW5kcm9pZHxGaXJlZm94IE9TKVxcYi8udGVzdChvcykpIHtcbiAgICAgIG5hbWUgPSAnRmlyZWZveCBNb2JpbGUnO1xuICAgIH1cbiAgICAvLyBPYnNjdXJlIE1heHRob24ncyB1bnJlbGlhYmxlIHZlcnNpb24uXG4gICAgZWxzZSBpZiAobmFtZSA9PSAnTWF4dGhvbicgJiYgdmVyc2lvbikge1xuICAgICAgdmVyc2lvbiA9IHZlcnNpb24ucmVwbGFjZSgvXFwuW1xcZC5dKy8sICcueCcpO1xuICAgIH1cbiAgICAvLyBEZXRlY3QgWGJveCAzNjAgYW5kIFhib3ggT25lLlxuICAgIGVsc2UgaWYgKC9cXGJYYm94XFxiL2kudGVzdChwcm9kdWN0KSkge1xuICAgICAgaWYgKHByb2R1Y3QgPT0gJ1hib3ggMzYwJykge1xuICAgICAgICBvcyA9IG51bGw7XG4gICAgICB9XG4gICAgICBpZiAocHJvZHVjdCA9PSAnWGJveCAzNjAnICYmIC9cXGJJRU1vYmlsZVxcYi8udGVzdCh1YSkpIHtcbiAgICAgICAgZGVzY3JpcHRpb24udW5zaGlmdCgnbW9iaWxlIG1vZGUnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gQWRkIG1vYmlsZSBwb3N0Zml4LlxuICAgIGVsc2UgaWYgKCgvXig/OkNocm9tZXxJRXxPcGVyYSkkLy50ZXN0KG5hbWUpIHx8IG5hbWUgJiYgIXByb2R1Y3QgJiYgIS9Ccm93c2VyfE1vYmkvLnRlc3QobmFtZSkpICYmXG4gICAgICAgIChvcyA9PSAnV2luZG93cyBDRScgfHwgL01vYmkvaS50ZXN0KHVhKSkpIHtcbiAgICAgIG5hbWUgKz0gJyBNb2JpbGUnO1xuICAgIH1cbiAgICAvLyBEZXRlY3QgSUUgcGxhdGZvcm0gcHJldmlldy5cbiAgICBlbHNlIGlmIChuYW1lID09ICdJRScgJiYgdXNlRmVhdHVyZXMpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChjb250ZXh0LmV4dGVybmFsID09PSBudWxsKSB7XG4gICAgICAgICAgZGVzY3JpcHRpb24udW5zaGlmdCgncGxhdGZvcm0gcHJldmlldycpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgZGVzY3JpcHRpb24udW5zaGlmdCgnZW1iZWRkZWQnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gRGV0ZWN0IEJsYWNrQmVycnkgT1MgdmVyc2lvbi5cbiAgICAvLyBodHRwOi8vZG9jcy5ibGFja2JlcnJ5LmNvbS9lbi9kZXZlbG9wZXJzL2RlbGl2ZXJhYmxlcy8xODE2OS9IVFRQX2hlYWRlcnNfc2VudF9ieV9CQl9Ccm93c2VyXzEyMzQ5MTFfMTEuanNwXG4gICAgZWxzZSBpZiAoKC9cXGJCbGFja0JlcnJ5XFxiLy50ZXN0KHByb2R1Y3QpIHx8IC9cXGJCQjEwXFxiLy50ZXN0KHVhKSkgJiYgKGRhdGEgPVxuICAgICAgICAgIChSZWdFeHAocHJvZHVjdC5yZXBsYWNlKC8gKy9nLCAnIConKSArICcvKFsuXFxcXGRdKyknLCAnaScpLmV4ZWModWEpIHx8IDApWzFdIHx8XG4gICAgICAgICAgdmVyc2lvblxuICAgICAgICApKSB7XG4gICAgICBkYXRhID0gW2RhdGEsIC9CQjEwLy50ZXN0KHVhKV07XG4gICAgICBvcyA9IChkYXRhWzFdID8gKHByb2R1Y3QgPSBudWxsLCBtYW51ZmFjdHVyZXIgPSAnQmxhY2tCZXJyeScpIDogJ0RldmljZSBTb2Z0d2FyZScpICsgJyAnICsgZGF0YVswXTtcbiAgICAgIHZlcnNpb24gPSBudWxsO1xuICAgIH1cbiAgICAvLyBEZXRlY3QgT3BlcmEgaWRlbnRpZnlpbmcvbWFza2luZyBpdHNlbGYgYXMgYW5vdGhlciBicm93c2VyLlxuICAgIC8vIGh0dHA6Ly93d3cub3BlcmEuY29tL3N1cHBvcnQva2Ivdmlldy84NDMvXG4gICAgZWxzZSBpZiAodGhpcyAhPSBmb3JPd24gJiYgcHJvZHVjdCAhPSAnV2lpJyAmJiAoXG4gICAgICAgICAgKHVzZUZlYXR1cmVzICYmIG9wZXJhKSB8fFxuICAgICAgICAgICgvT3BlcmEvLnRlc3QobmFtZSkgJiYgL1xcYig/Ok1TSUV8RmlyZWZveClcXGIvaS50ZXN0KHVhKSkgfHxcbiAgICAgICAgICAobmFtZSA9PSAnRmlyZWZveCcgJiYgL1xcYk9TIFggKD86XFxkK1xcLil7Mix9Ly50ZXN0KG9zKSkgfHxcbiAgICAgICAgICAobmFtZSA9PSAnSUUnICYmIChcbiAgICAgICAgICAgIChvcyAmJiAhL15XaW4vLnRlc3Qob3MpICYmIHZlcnNpb24gPiA1LjUpIHx8XG4gICAgICAgICAgICAvXFxiV2luZG93cyBYUFxcYi8udGVzdChvcykgJiYgdmVyc2lvbiA+IDggfHxcbiAgICAgICAgICAgIHZlcnNpb24gPT0gOCAmJiAhL1xcYlRyaWRlbnRcXGIvLnRlc3QodWEpXG4gICAgICAgICAgKSlcbiAgICAgICAgKSAmJiAhcmVPcGVyYS50ZXN0KChkYXRhID0gcGFyc2UuY2FsbChmb3JPd24sIHVhLnJlcGxhY2UocmVPcGVyYSwgJycpICsgJzsnKSkpICYmIGRhdGEubmFtZSkge1xuICAgICAgLy8gV2hlbiBcImlkZW50aWZ5aW5nXCIsIHRoZSBVQSBjb250YWlucyBib3RoIE9wZXJhIGFuZCB0aGUgb3RoZXIgYnJvd3NlcidzIG5hbWUuXG4gICAgICBkYXRhID0gJ2luZyBhcyAnICsgZGF0YS5uYW1lICsgKChkYXRhID0gZGF0YS52ZXJzaW9uKSA/ICcgJyArIGRhdGEgOiAnJyk7XG4gICAgICBpZiAocmVPcGVyYS50ZXN0KG5hbWUpKSB7XG4gICAgICAgIGlmICgvXFxiSUVcXGIvLnRlc3QoZGF0YSkgJiYgb3MgPT0gJ01hYyBPUycpIHtcbiAgICAgICAgICBvcyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YSA9ICdpZGVudGlmeScgKyBkYXRhO1xuICAgICAgfVxuICAgICAgLy8gV2hlbiBcIm1hc2tpbmdcIiwgdGhlIFVBIGNvbnRhaW5zIG9ubHkgdGhlIG90aGVyIGJyb3dzZXIncyBuYW1lLlxuICAgICAgZWxzZSB7XG4gICAgICAgIGRhdGEgPSAnbWFzaycgKyBkYXRhO1xuICAgICAgICBpZiAob3BlcmFDbGFzcykge1xuICAgICAgICAgIG5hbWUgPSBmb3JtYXQob3BlcmFDbGFzcy5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCAnJDEgJDInKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmFtZSA9ICdPcGVyYSc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKC9cXGJJRVxcYi8udGVzdChkYXRhKSkge1xuICAgICAgICAgIG9zID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXVzZUZlYXR1cmVzKSB7XG4gICAgICAgICAgdmVyc2lvbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxheW91dCA9IFsnUHJlc3RvJ107XG4gICAgICBkZXNjcmlwdGlvbi5wdXNoKGRhdGEpO1xuICAgIH1cbiAgICAvLyBEZXRlY3QgV2ViS2l0IE5pZ2h0bHkgYW5kIGFwcHJveGltYXRlIENocm9tZS9TYWZhcmkgdmVyc2lvbnMuXG4gICAgaWYgKChkYXRhID0gKC9cXGJBcHBsZVdlYktpdFxcLyhbXFxkLl0rXFwrPykvaS5leGVjKHVhKSB8fCAwKVsxXSkpIHtcbiAgICAgIC8vIENvcnJlY3QgYnVpbGQgbnVtYmVyIGZvciBudW1lcmljIGNvbXBhcmlzb24uXG4gICAgICAvLyAoZS5nLiBcIjUzMi41XCIgYmVjb21lcyBcIjUzMi4wNVwiKVxuICAgICAgZGF0YSA9IFtwYXJzZUZsb2F0KGRhdGEucmVwbGFjZSgvXFwuKFxcZCkkLywgJy4wJDEnKSksIGRhdGFdO1xuICAgICAgLy8gTmlnaHRseSBidWlsZHMgYXJlIHBvc3RmaXhlZCB3aXRoIGEgXCIrXCIuXG4gICAgICBpZiAobmFtZSA9PSAnU2FmYXJpJyAmJiBkYXRhWzFdLnNsaWNlKC0xKSA9PSAnKycpIHtcbiAgICAgICAgbmFtZSA9ICdXZWJLaXQgTmlnaHRseSc7XG4gICAgICAgIHByZXJlbGVhc2UgPSAnYWxwaGEnO1xuICAgICAgICB2ZXJzaW9uID0gZGF0YVsxXS5zbGljZSgwLCAtMSk7XG4gICAgICB9XG4gICAgICAvLyBDbGVhciBpbmNvcnJlY3QgYnJvd3NlciB2ZXJzaW9ucy5cbiAgICAgIGVsc2UgaWYgKHZlcnNpb24gPT0gZGF0YVsxXSB8fFxuICAgICAgICAgIHZlcnNpb24gPT0gKGRhdGFbMl0gPSAoL1xcYlNhZmFyaVxcLyhbXFxkLl0rXFwrPykvaS5leGVjKHVhKSB8fCAwKVsxXSkpIHtcbiAgICAgICAgdmVyc2lvbiA9IG51bGw7XG4gICAgICB9XG4gICAgICAvLyBVc2UgdGhlIGZ1bGwgQ2hyb21lIHZlcnNpb24gd2hlbiBhdmFpbGFibGUuXG4gICAgICBkYXRhWzFdID0gKC9cXGJDaHJvbWVcXC8oW1xcZC5dKykvaS5leGVjKHVhKSB8fCAwKVsxXTtcbiAgICAgIC8vIERldGVjdCBCbGluayBsYXlvdXQgZW5naW5lLlxuICAgICAgaWYgKGRhdGFbMF0gPT0gNTM3LjM2ICYmIGRhdGFbMl0gPT0gNTM3LjM2ICYmIHBhcnNlRmxvYXQoZGF0YVsxXSkgPj0gMjggJiYgbGF5b3V0ID09ICdXZWJLaXQnKSB7XG4gICAgICAgIGxheW91dCA9IFsnQmxpbmsnXTtcbiAgICAgIH1cbiAgICAgIC8vIERldGVjdCBKYXZhU2NyaXB0Q29yZS5cbiAgICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNjc2ODQ3NC9ob3ctY2FuLWktZGV0ZWN0LXdoaWNoLWphdmFzY3JpcHQtZW5naW5lLXY4LW9yLWpzYy1pcy11c2VkLWF0LXJ1bnRpbWUtaW4tYW5kcm9pXG4gICAgICBpZiAoIXVzZUZlYXR1cmVzIHx8ICghbGlrZUNocm9tZSAmJiAhZGF0YVsxXSkpIHtcbiAgICAgICAgbGF5b3V0ICYmIChsYXlvdXRbMV0gPSAnbGlrZSBTYWZhcmknKTtcbiAgICAgICAgZGF0YSA9IChkYXRhID0gZGF0YVswXSwgZGF0YSA8IDQwMCA/IDEgOiBkYXRhIDwgNTAwID8gMiA6IGRhdGEgPCA1MjYgPyAzIDogZGF0YSA8IDUzMyA/IDQgOiBkYXRhIDwgNTM0ID8gJzQrJyA6IGRhdGEgPCA1MzUgPyA1IDogZGF0YSA8IDUzNyA/IDYgOiBkYXRhIDwgNTM4ID8gNyA6IGRhdGEgPCA2MDEgPyA4IDogJzgnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxheW91dCAmJiAobGF5b3V0WzFdID0gJ2xpa2UgQ2hyb21lJyk7XG4gICAgICAgIGRhdGEgPSBkYXRhWzFdIHx8IChkYXRhID0gZGF0YVswXSwgZGF0YSA8IDUzMCA/IDEgOiBkYXRhIDwgNTMyID8gMiA6IGRhdGEgPCA1MzIuMDUgPyAzIDogZGF0YSA8IDUzMyA/IDQgOiBkYXRhIDwgNTM0LjAzID8gNSA6IGRhdGEgPCA1MzQuMDcgPyA2IDogZGF0YSA8IDUzNC4xMCA/IDcgOiBkYXRhIDwgNTM0LjEzID8gOCA6IGRhdGEgPCA1MzQuMTYgPyA5IDogZGF0YSA8IDUzNC4yNCA/IDEwIDogZGF0YSA8IDUzNC4zMCA/IDExIDogZGF0YSA8IDUzNS4wMSA/IDEyIDogZGF0YSA8IDUzNS4wMiA/ICcxMysnIDogZGF0YSA8IDUzNS4wNyA/IDE1IDogZGF0YSA8IDUzNS4xMSA/IDE2IDogZGF0YSA8IDUzNS4xOSA/IDE3IDogZGF0YSA8IDUzNi4wNSA/IDE4IDogZGF0YSA8IDUzNi4xMCA/IDE5IDogZGF0YSA8IDUzNy4wMSA/IDIwIDogZGF0YSA8IDUzNy4xMSA/ICcyMSsnIDogZGF0YSA8IDUzNy4xMyA/IDIzIDogZGF0YSA8IDUzNy4xOCA/IDI0IDogZGF0YSA8IDUzNy4yNCA/IDI1IDogZGF0YSA8IDUzNy4zNiA/IDI2IDogbGF5b3V0ICE9ICdCbGluaycgPyAnMjcnIDogJzI4Jyk7XG4gICAgICB9XG4gICAgICAvLyBBZGQgdGhlIHBvc3RmaXggb2YgXCIueFwiIG9yIFwiK1wiIGZvciBhcHByb3hpbWF0ZSB2ZXJzaW9ucy5cbiAgICAgIGxheW91dCAmJiAobGF5b3V0WzFdICs9ICcgJyArIChkYXRhICs9IHR5cGVvZiBkYXRhID09ICdudW1iZXInID8gJy54JyA6IC9bLitdLy50ZXN0KGRhdGEpID8gJycgOiAnKycpKTtcbiAgICAgIC8vIE9ic2N1cmUgdmVyc2lvbiBmb3Igc29tZSBTYWZhcmkgMS0yIHJlbGVhc2VzLlxuICAgICAgaWYgKG5hbWUgPT0gJ1NhZmFyaScgJiYgKCF2ZXJzaW9uIHx8IHBhcnNlSW50KHZlcnNpb24pID4gNDUpKSB7XG4gICAgICAgIHZlcnNpb24gPSBkYXRhO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBEZXRlY3QgT3BlcmEgZGVza3RvcCBtb2Rlcy5cbiAgICBpZiAobmFtZSA9PSAnT3BlcmEnICYmICAoZGF0YSA9IC9cXGJ6Ym92fHp2YXYkLy5leGVjKG9zKSkpIHtcbiAgICAgIG5hbWUgKz0gJyAnO1xuICAgICAgZGVzY3JpcHRpb24udW5zaGlmdCgnZGVza3RvcCBtb2RlJyk7XG4gICAgICBpZiAoZGF0YSA9PSAnenZhdicpIHtcbiAgICAgICAgbmFtZSArPSAnTWluaSc7XG4gICAgICAgIHZlcnNpb24gPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmFtZSArPSAnTW9iaWxlJztcbiAgICAgIH1cbiAgICAgIG9zID0gb3MucmVwbGFjZShSZWdFeHAoJyAqJyArIGRhdGEgKyAnJCcpLCAnJyk7XG4gICAgfVxuICAgIC8vIERldGVjdCBDaHJvbWUgZGVza3RvcCBtb2RlLlxuICAgIGVsc2UgaWYgKG5hbWUgPT0gJ1NhZmFyaScgJiYgL1xcYkNocm9tZVxcYi8uZXhlYyhsYXlvdXQgJiYgbGF5b3V0WzFdKSkge1xuICAgICAgZGVzY3JpcHRpb24udW5zaGlmdCgnZGVza3RvcCBtb2RlJyk7XG4gICAgICBuYW1lID0gJ0Nocm9tZSBNb2JpbGUnO1xuICAgICAgdmVyc2lvbiA9IG51bGw7XG5cbiAgICAgIGlmICgvXFxiT1MgWFxcYi8udGVzdChvcykpIHtcbiAgICAgICAgbWFudWZhY3R1cmVyID0gJ0FwcGxlJztcbiAgICAgICAgb3MgPSAnaU9TIDQuMysnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3MgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBTdHJpcCBpbmNvcnJlY3QgT1MgdmVyc2lvbnMuXG4gICAgaWYgKHZlcnNpb24gJiYgdmVyc2lvbi5pbmRleE9mKChkYXRhID0gL1tcXGQuXSskLy5leGVjKG9zKSkpID09IDAgJiZcbiAgICAgICAgdWEuaW5kZXhPZignLycgKyBkYXRhICsgJy0nKSA+IC0xKSB7XG4gICAgICBvcyA9IHRyaW0ob3MucmVwbGFjZShkYXRhLCAnJykpO1xuICAgIH1cbiAgICAvLyBBZGQgbGF5b3V0IGVuZ2luZS5cbiAgICBpZiAobGF5b3V0ICYmICEvXFxiKD86QXZhbnR8Tm9vaylcXGIvLnRlc3QobmFtZSkgJiYgKFxuICAgICAgICAvQnJvd3NlcnxMdW5hc2NhcGV8TWF4dGhvbi8udGVzdChuYW1lKSB8fFxuICAgICAgICBuYW1lICE9ICdTYWZhcmknICYmIC9eaU9TLy50ZXN0KG9zKSAmJiAvXFxiU2FmYXJpXFxiLy50ZXN0KGxheW91dFsxXSkgfHxcbiAgICAgICAgL14oPzpBZG9iZXxBcm9yYXxCcmVhY2h8TWlkb3JpfE9wZXJhfFBoYW50b218UmVrb25xfFJvY2t8U2Ftc3VuZyBJbnRlcm5ldHxTbGVpcG5pcnxXZWIpLy50ZXN0KG5hbWUpICYmIGxheW91dFsxXSkpIHtcbiAgICAgIC8vIERvbid0IGFkZCBsYXlvdXQgZGV0YWlscyB0byBkZXNjcmlwdGlvbiBpZiB0aGV5IGFyZSBmYWxzZXkuXG4gICAgICAoZGF0YSA9IGxheW91dFtsYXlvdXQubGVuZ3RoIC0gMV0pICYmIGRlc2NyaXB0aW9uLnB1c2goZGF0YSk7XG4gICAgfVxuICAgIC8vIENvbWJpbmUgY29udGV4dHVhbCBpbmZvcm1hdGlvbi5cbiAgICBpZiAoZGVzY3JpcHRpb24ubGVuZ3RoKSB7XG4gICAgICBkZXNjcmlwdGlvbiA9IFsnKCcgKyBkZXNjcmlwdGlvbi5qb2luKCc7ICcpICsgJyknXTtcbiAgICB9XG4gICAgLy8gQXBwZW5kIG1hbnVmYWN0dXJlciB0byBkZXNjcmlwdGlvbi5cbiAgICBpZiAobWFudWZhY3R1cmVyICYmIHByb2R1Y3QgJiYgcHJvZHVjdC5pbmRleE9mKG1hbnVmYWN0dXJlcikgPCAwKSB7XG4gICAgICBkZXNjcmlwdGlvbi5wdXNoKCdvbiAnICsgbWFudWZhY3R1cmVyKTtcbiAgICB9XG4gICAgLy8gQXBwZW5kIHByb2R1Y3QgdG8gZGVzY3JpcHRpb24uXG4gICAgaWYgKHByb2R1Y3QpIHtcbiAgICAgIGRlc2NyaXB0aW9uLnB1c2goKC9eb24gLy50ZXN0KGRlc2NyaXB0aW9uW2Rlc2NyaXB0aW9uLmxlbmd0aCAtIDFdKSA/ICcnIDogJ29uICcpICsgcHJvZHVjdCk7XG4gICAgfVxuICAgIC8vIFBhcnNlIHRoZSBPUyBpbnRvIGFuIG9iamVjdC5cbiAgICBpZiAob3MpIHtcbiAgICAgIGRhdGEgPSAvIChbXFxkLitdKykkLy5leGVjKG9zKTtcbiAgICAgIGlzU3BlY2lhbENhc2VkT1MgPSBkYXRhICYmIG9zLmNoYXJBdChvcy5sZW5ndGggLSBkYXRhWzBdLmxlbmd0aCAtIDEpID09ICcvJztcbiAgICAgIG9zID0ge1xuICAgICAgICAnYXJjaGl0ZWN0dXJlJzogMzIsXG4gICAgICAgICdmYW1pbHknOiAoZGF0YSAmJiAhaXNTcGVjaWFsQ2FzZWRPUykgPyBvcy5yZXBsYWNlKGRhdGFbMF0sICcnKSA6IG9zLFxuICAgICAgICAndmVyc2lvbic6IGRhdGEgPyBkYXRhWzFdIDogbnVsbCxcbiAgICAgICAgJ3RvU3RyaW5nJzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHZlcnNpb24gPSB0aGlzLnZlcnNpb247XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZmFtaWx5ICsgKCh2ZXJzaW9uICYmICFpc1NwZWNpYWxDYXNlZE9TKSA/ICcgJyArIHZlcnNpb24gOiAnJykgKyAodGhpcy5hcmNoaXRlY3R1cmUgPT0gNjQgPyAnIDY0LWJpdCcgOiAnJyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICAgIC8vIEFkZCBicm93c2VyL09TIGFyY2hpdGVjdHVyZS5cbiAgICBpZiAoKGRhdGEgPSAvXFxiKD86QU1EfElBfFdpbnxXT1d8eDg2X3x4KTY0XFxiL2kuZXhlYyhhcmNoKSkgJiYgIS9cXGJpNjg2XFxiL2kudGVzdChhcmNoKSkge1xuICAgICAgaWYgKG9zKSB7XG4gICAgICAgIG9zLmFyY2hpdGVjdHVyZSA9IDY0O1xuICAgICAgICBvcy5mYW1pbHkgPSBvcy5mYW1pbHkucmVwbGFjZShSZWdFeHAoJyAqJyArIGRhdGEpLCAnJyk7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgICAgbmFtZSAmJiAoL1xcYldPVzY0XFxiL2kudGVzdCh1YSkgfHxcbiAgICAgICAgICAodXNlRmVhdHVyZXMgJiYgL1xcdyg/Ojg2fDMyKSQvLnRlc3QobmF2LmNwdUNsYXNzIHx8IG5hdi5wbGF0Zm9ybSkgJiYgIS9cXGJXaW42NDsgeDY0XFxiL2kudGVzdCh1YSkpKVxuICAgICAgKSB7XG4gICAgICAgIGRlc2NyaXB0aW9uLnVuc2hpZnQoJzMyLWJpdCcpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBDaHJvbWUgMzkgYW5kIGFib3ZlIG9uIE9TIFggaXMgYWx3YXlzIDY0LWJpdC5cbiAgICBlbHNlIGlmIChcbiAgICAgICAgb3MgJiYgL15PUyBYLy50ZXN0KG9zLmZhbWlseSkgJiZcbiAgICAgICAgbmFtZSA9PSAnQ2hyb21lJyAmJiBwYXJzZUZsb2F0KHZlcnNpb24pID49IDM5XG4gICAgKSB7XG4gICAgICBvcy5hcmNoaXRlY3R1cmUgPSA2NDtcbiAgICB9XG5cbiAgICB1YSB8fCAodWEgPSBudWxsKTtcblxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSBwbGF0Zm9ybSBvYmplY3QuXG4gICAgICpcbiAgICAgKiBAbmFtZSBwbGF0Zm9ybVxuICAgICAqIEB0eXBlIE9iamVjdFxuICAgICAqL1xuICAgIHZhciBwbGF0Zm9ybSA9IHt9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIHBsYXRmb3JtIGRlc2NyaXB0aW9uLlxuICAgICAqXG4gICAgICogQG1lbWJlck9mIHBsYXRmb3JtXG4gICAgICogQHR5cGUgc3RyaW5nfG51bGxcbiAgICAgKi9cbiAgICBwbGF0Zm9ybS5kZXNjcmlwdGlvbiA9IHVhO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG5hbWUgb2YgdGhlIGJyb3dzZXIncyBsYXlvdXQgZW5naW5lLlxuICAgICAqXG4gICAgICogVGhlIGxpc3Qgb2YgY29tbW9uIGxheW91dCBlbmdpbmVzIGluY2x1ZGU6XG4gICAgICogXCJCbGlua1wiLCBcIkVkZ2VIVE1MXCIsIFwiR2Vja29cIiwgXCJUcmlkZW50XCIgYW5kIFwiV2ViS2l0XCJcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBwbGF0Zm9ybVxuICAgICAqIEB0eXBlIHN0cmluZ3xudWxsXG4gICAgICovXG4gICAgcGxhdGZvcm0ubGF5b3V0ID0gbGF5b3V0ICYmIGxheW91dFswXTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSBwcm9kdWN0J3MgbWFudWZhY3R1cmVyLlxuICAgICAqXG4gICAgICogVGhlIGxpc3Qgb2YgbWFudWZhY3R1cmVycyBpbmNsdWRlOlxuICAgICAqIFwiQXBwbGVcIiwgXCJBcmNob3NcIiwgXCJBbWF6b25cIiwgXCJBc3VzXCIsIFwiQmFybmVzICYgTm9ibGVcIiwgXCJCbGFja0JlcnJ5XCIsXG4gICAgICogXCJHb29nbGVcIiwgXCJIUFwiLCBcIkhUQ1wiLCBcIkxHXCIsIFwiTWljcm9zb2Z0XCIsIFwiTW90b3JvbGFcIiwgXCJOaW50ZW5kb1wiLFxuICAgICAqIFwiTm9raWFcIiwgXCJTYW1zdW5nXCIgYW5kIFwiU29ueVwiXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgcGxhdGZvcm1cbiAgICAgKiBAdHlwZSBzdHJpbmd8bnVsbFxuICAgICAqL1xuICAgIHBsYXRmb3JtLm1hbnVmYWN0dXJlciA9IG1hbnVmYWN0dXJlcjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSBicm93c2VyL2Vudmlyb25tZW50LlxuICAgICAqXG4gICAgICogVGhlIGxpc3Qgb2YgY29tbW9uIGJyb3dzZXIgbmFtZXMgaW5jbHVkZTpcbiAgICAgKiBcIkNocm9tZVwiLCBcIkVsZWN0cm9uXCIsIFwiRmlyZWZveFwiLCBcIkZpcmVmb3ggZm9yIGlPU1wiLCBcIklFXCIsXG4gICAgICogXCJNaWNyb3NvZnQgRWRnZVwiLCBcIlBoYW50b21KU1wiLCBcIlNhZmFyaVwiLCBcIlNlYU1vbmtleVwiLCBcIlNpbGtcIixcbiAgICAgKiBcIk9wZXJhIE1pbmlcIiBhbmQgXCJPcGVyYVwiXG4gICAgICpcbiAgICAgKiBNb2JpbGUgdmVyc2lvbnMgb2Ygc29tZSBicm93c2VycyBoYXZlIFwiTW9iaWxlXCIgYXBwZW5kZWQgdG8gdGhlaXIgbmFtZTpcbiAgICAgKiBlZy4gXCJDaHJvbWUgTW9iaWxlXCIsIFwiRmlyZWZveCBNb2JpbGVcIiwgXCJJRSBNb2JpbGVcIiBhbmQgXCJPcGVyYSBNb2JpbGVcIlxuICAgICAqXG4gICAgICogQG1lbWJlck9mIHBsYXRmb3JtXG4gICAgICogQHR5cGUgc3RyaW5nfG51bGxcbiAgICAgKi9cbiAgICBwbGF0Zm9ybS5uYW1lID0gbmFtZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBhbHBoYS9iZXRhIHJlbGVhc2UgaW5kaWNhdG9yLlxuICAgICAqXG4gICAgICogQG1lbWJlck9mIHBsYXRmb3JtXG4gICAgICogQHR5cGUgc3RyaW5nfG51bGxcbiAgICAgKi9cbiAgICBwbGF0Zm9ybS5wcmVyZWxlYXNlID0gcHJlcmVsZWFzZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSBwcm9kdWN0IGhvc3RpbmcgdGhlIGJyb3dzZXIuXG4gICAgICpcbiAgICAgKiBUaGUgbGlzdCBvZiBjb21tb24gcHJvZHVjdHMgaW5jbHVkZTpcbiAgICAgKlxuICAgICAqIFwiQmxhY2tCZXJyeVwiLCBcIkdhbGF4eSBTNFwiLCBcIkx1bWlhXCIsIFwiaVBhZFwiLCBcImlQb2RcIiwgXCJpUGhvbmVcIiwgXCJLaW5kbGVcIixcbiAgICAgKiBcIktpbmRsZSBGaXJlXCIsIFwiTmV4dXNcIiwgXCJOb29rXCIsIFwiUGxheUJvb2tcIiwgXCJUb3VjaFBhZFwiIGFuZCBcIlRyYW5zZm9ybWVyXCJcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBwbGF0Zm9ybVxuICAgICAqIEB0eXBlIHN0cmluZ3xudWxsXG4gICAgICovXG4gICAgcGxhdGZvcm0ucHJvZHVjdCA9IHByb2R1Y3Q7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYnJvd3NlcidzIHVzZXIgYWdlbnQgc3RyaW5nLlxuICAgICAqXG4gICAgICogQG1lbWJlck9mIHBsYXRmb3JtXG4gICAgICogQHR5cGUgc3RyaW5nfG51bGxcbiAgICAgKi9cbiAgICBwbGF0Zm9ybS51YSA9IHVhO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGJyb3dzZXIvZW52aXJvbm1lbnQgdmVyc2lvbi5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBwbGF0Zm9ybVxuICAgICAqIEB0eXBlIHN0cmluZ3xudWxsXG4gICAgICovXG4gICAgcGxhdGZvcm0udmVyc2lvbiA9IG5hbWUgJiYgdmVyc2lvbjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSBvcGVyYXRpbmcgc3lzdGVtLlxuICAgICAqXG4gICAgICogQG1lbWJlck9mIHBsYXRmb3JtXG4gICAgICogQHR5cGUgT2JqZWN0XG4gICAgICovXG4gICAgcGxhdGZvcm0ub3MgPSBvcyB8fCB7XG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIENQVSBhcmNoaXRlY3R1cmUgdGhlIE9TIGlzIGJ1aWx0IGZvci5cbiAgICAgICAqXG4gICAgICAgKiBAbWVtYmVyT2YgcGxhdGZvcm0ub3NcbiAgICAgICAqIEB0eXBlIG51bWJlcnxudWxsXG4gICAgICAgKi9cbiAgICAgICdhcmNoaXRlY3R1cmUnOiBudWxsLFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBmYW1pbHkgb2YgdGhlIE9TLlxuICAgICAgICpcbiAgICAgICAqIENvbW1vbiB2YWx1ZXMgaW5jbHVkZTpcbiAgICAgICAqIFwiV2luZG93c1wiLCBcIldpbmRvd3MgU2VydmVyIDIwMDggUjIgLyA3XCIsIFwiV2luZG93cyBTZXJ2ZXIgMjAwOCAvIFZpc3RhXCIsXG4gICAgICAgKiBcIldpbmRvd3MgWFBcIiwgXCJPUyBYXCIsIFwiVWJ1bnR1XCIsIFwiRGViaWFuXCIsIFwiRmVkb3JhXCIsIFwiUmVkIEhhdFwiLCBcIlN1U0VcIixcbiAgICAgICAqIFwiQW5kcm9pZFwiLCBcImlPU1wiIGFuZCBcIldpbmRvd3MgUGhvbmVcIlxuICAgICAgICpcbiAgICAgICAqIEBtZW1iZXJPZiBwbGF0Zm9ybS5vc1xuICAgICAgICogQHR5cGUgc3RyaW5nfG51bGxcbiAgICAgICAqL1xuICAgICAgJ2ZhbWlseSc6IG51bGwsXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIHZlcnNpb24gb2YgdGhlIE9TLlxuICAgICAgICpcbiAgICAgICAqIEBtZW1iZXJPZiBwbGF0Zm9ybS5vc1xuICAgICAgICogQHR5cGUgc3RyaW5nfG51bGxcbiAgICAgICAqL1xuICAgICAgJ3ZlcnNpb24nOiBudWxsLFxuXG4gICAgICAvKipcbiAgICAgICAqIFJldHVybnMgdGhlIE9TIHN0cmluZy5cbiAgICAgICAqXG4gICAgICAgKiBAbWVtYmVyT2YgcGxhdGZvcm0ub3NcbiAgICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBPUyBzdHJpbmcuXG4gICAgICAgKi9cbiAgICAgICd0b1N0cmluZyc6IGZ1bmN0aW9uKCkgeyByZXR1cm4gJ251bGwnOyB9XG4gICAgfTtcblxuICAgIHBsYXRmb3JtLnBhcnNlID0gcGFyc2U7XG4gICAgcGxhdGZvcm0udG9TdHJpbmcgPSB0b1N0cmluZ1BsYXRmb3JtO1xuXG4gICAgaWYgKHBsYXRmb3JtLnZlcnNpb24pIHtcbiAgICAgIGRlc2NyaXB0aW9uLnVuc2hpZnQodmVyc2lvbik7XG4gICAgfVxuICAgIGlmIChwbGF0Zm9ybS5uYW1lKSB7XG4gICAgICBkZXNjcmlwdGlvbi51bnNoaWZ0KG5hbWUpO1xuICAgIH1cbiAgICBpZiAob3MgJiYgbmFtZSAmJiAhKG9zID09IFN0cmluZyhvcykuc3BsaXQoJyAnKVswXSAmJiAob3MgPT0gbmFtZS5zcGxpdCgnICcpWzBdIHx8IHByb2R1Y3QpKSkge1xuICAgICAgZGVzY3JpcHRpb24ucHVzaChwcm9kdWN0ID8gJygnICsgb3MgKyAnKScgOiAnb24gJyArIG9zKTtcbiAgICB9XG4gICAgaWYgKGRlc2NyaXB0aW9uLmxlbmd0aCkge1xuICAgICAgcGxhdGZvcm0uZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbi5qb2luKCcgJyk7XG4gICAgfVxuICAgIHJldHVybiBwbGF0Zm9ybTtcbiAgfVxuXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gIC8vIEV4cG9ydCBwbGF0Zm9ybS5cbiAgdmFyIHBsYXRmb3JtID0gcGFyc2UoKTtcblxuICAvLyBTb21lIEFNRCBidWlsZCBvcHRpbWl6ZXJzLCBsaWtlIHIuanMsIGNoZWNrIGZvciBjb25kaXRpb24gcGF0dGVybnMgbGlrZSB0aGUgZm9sbG93aW5nOlxuICBpZiAodHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcbiAgICAvLyBFeHBvc2UgcGxhdGZvcm0gb24gdGhlIGdsb2JhbCBvYmplY3QgdG8gcHJldmVudCBlcnJvcnMgd2hlbiBwbGF0Zm9ybSBpc1xuICAgIC8vIGxvYWRlZCBieSBhIHNjcmlwdCB0YWcgaW4gdGhlIHByZXNlbmNlIG9mIGFuIEFNRCBsb2FkZXIuXG4gICAgLy8gU2VlIGh0dHA6Ly9yZXF1aXJlanMub3JnL2RvY3MvZXJyb3JzLmh0bWwjbWlzbWF0Y2ggZm9yIG1vcmUgZGV0YWlscy5cbiAgICByb290LnBsYXRmb3JtID0gcGxhdGZvcm07XG5cbiAgICAvLyBEZWZpbmUgYXMgYW4gYW5vbnltb3VzIG1vZHVsZSBzbyBwbGF0Zm9ybSBjYW4gYmUgYWxpYXNlZCB0aHJvdWdoIHBhdGggbWFwcGluZy5cbiAgICBkZWZpbmUoZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gcGxhdGZvcm07XG4gICAgfSk7XG4gIH1cbiAgLy8gQ2hlY2sgZm9yIGBleHBvcnRzYCBhZnRlciBgZGVmaW5lYCBpbiBjYXNlIGEgYnVpbGQgb3B0aW1pemVyIGFkZHMgYW4gYGV4cG9ydHNgIG9iamVjdC5cbiAgZWxzZSBpZiAoZnJlZUV4cG9ydHMgJiYgZnJlZU1vZHVsZSkge1xuICAgIC8vIEV4cG9ydCBmb3IgQ29tbW9uSlMgc3VwcG9ydC5cbiAgICBmb3JPd24ocGxhdGZvcm0sIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICAgIGZyZWVFeHBvcnRzW2tleV0gPSB2YWx1ZTtcbiAgICB9KTtcbiAgfVxuICBlbHNlIHtcbiAgICAvLyBFeHBvcnQgdG8gdGhlIGdsb2JhbCBvYmplY3QuXG4gICAgcm9vdC5wbGF0Zm9ybSA9IHBsYXRmb3JtO1xuICB9XG59LmNhbGwodGhpcykpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsIGV2YWwpKFwidGhpc1wiKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9nby1iYWNrLXRvLW1haW4tcGFnZS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvbG9nby1uZWdhdGl2ZS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvbG9nby1wbGF5LWlvX2FsbF9taW4tY29sb3JfdmFyaWF0aW9uLXYzLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9sb2dvLXBsYXkucG5nXCI7IiwiZXhwb3J0IGZ1bmN0aW9uIGFkZFNjcm9sbEV2ZW50TGlzdGVuZXIoZnVuOiAoKSA9PiB2b2lkKSB7XG4gICAgbGV0IHRpY2tpbmcgPSBmYWxzZVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIChldikgPT4ge1xuICAgICAgICBpZighdGlja2luZykge1xuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgZnVuKClcbiAgICAgICAgICAgICAgICB0aWNraW5nID0gZmFsc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgdGlja2luZyA9IHRydWVcbiAgICB9KVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldFBhZ2VTY3JvbGxQb3NpdGlvblRvcCgpOiBudW1iZXIge1xuICAgIHJldHVybiAod2luZG93LnBhZ2VZT2Zmc2V0ICE9PSB1bmRlZmluZWQpID8gd2luZG93LnBhZ2VZT2Zmc2V0IDogKChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHwgZG9jdW1lbnQuYm9keS5wYXJlbnROb2RlIHx8IGRvY3VtZW50LmJvZHkpIGFzIEhUTUxFbGVtZW50KS5zY3JvbGxUb3Bcbn0iLCJpbXBvcnQge2FkZFNjcm9sbEV2ZW50TGlzdGVuZXJ9IGZyb20gXCIuLi9hZGRTY3JvbGxFdmVudExpc3RlbmVyXCJcbmltcG9ydCB7Z2V0UGFnZVNjcm9sbFBvc2l0aW9uVG9wfSBmcm9tIFwiLi4vZ2V0UGFnZVNjcm9sbFBvc2l0aW9uVG9wXCJcbmltcG9ydCB7SFRNTF9TRUxFQ1RPUlN9IGZyb20gXCIuLi9IVE1MX1NFTEVDVE9SU1wiXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNldE1lbnVQb3NpdGlvbihyZWZlcmVuY2VFbGVtZW50Rm9yRml4ZWRNZW51OiBIVE1MRWxlbWVudCwgdG9wRWxlbWVudEZpeGVkT3Zlck1lbnU/OiBIVE1MRWxlbWVudCkge1xuXG4gICAgY29uc3QgRklYRURfTUVOVV9DTEFTU19OQU1FID0gXCJtZW51LWZpeGVkXCJcblxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5XG5cbiAgICBjb25zdCBoZWlnaHRPZkZpeGVkRWxlbWVudFRoYXRIaWRlc01lbnUgPSB0b3BFbGVtZW50Rml4ZWRPdmVyTWVudSA9PT0gdW5kZWZpbmVkID8gIDAgOiB0b3BFbGVtZW50Rml4ZWRPdmVyTWVudS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHRcblxuICAgIGFkZFNjcm9sbEV2ZW50TGlzdGVuZXIoKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uVG9wT2ZSZWZFbGVtZW50ID0gcGFyc2VJbnQoIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHJlZmVyZW5jZUVsZW1lbnRGb3JGaXhlZE1lbnUpLnBhZGRpbmdUb3AgYXMgc3RyaW5nIClcblxuICAgICAgICBjb25zdCByZWZQb3NpdGlvbkZvckZpeGVkTWVudSA9IHBvc2l0aW9uVG9wT2ZSZWZFbGVtZW50IC0gaGVpZ2h0T2ZGaXhlZEVsZW1lbnRUaGF0SGlkZXNNZW51XG5cbiAgICAgICAgaWYoZ2V0UGFnZVNjcm9sbFBvc2l0aW9uVG9wKCkgPj0gcmVmUG9zaXRpb25Gb3JGaXhlZE1lbnUgJiYgIWJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKEZJWEVEX01FTlVfQ0xBU1NfTkFNRSkpe1xuICAgICAgICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKEZJWEVEX01FTlVfQ0xBU1NfTkFNRSlcbiAgICAgICAgfSBlbHNlIGlmIChnZXRQYWdlU2Nyb2xsUG9zaXRpb25Ub3AoKSA8PSByZWZQb3NpdGlvbkZvckZpeGVkTWVudSAmJiBib2R5LmNsYXNzTGlzdC5jb250YWlucyhGSVhFRF9NRU5VX0NMQVNTX05BTUUpKSB7XG4gICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoRklYRURfTUVOVV9DTEFTU19OQU1FKVxuICAgICAgICB9XG5cbiAgICB9KVxufVxuIiwiZXhwb3J0IGVudW0gSFRNTF9TRUxFQ1RPUlMge1xuICAgIENPREVfQVJFQSAgICAgICAgICAgICAgID0gXCIuY29kZS1hcmVhXCIsXG4gICAgQ09OVEVOVCAgICAgICAgICAgICAgICAgPSBcIiNkMnYtY29udGVudFwiLFxuICAgIENVUlJFTlRfU0VDVElPTl9OQU1FICAgID0gXCIjY3VycmVudC1zZWN0aW9uLW5hbWVcIixcbiAgICBUT1BfSEVBREVSICAgICAgICAgICAgICA9IFwiI2Qydi1oZWFkZXJcIixcbiAgICBOQVZJR0FUSU9OX01FTlUgICAgICAgICA9IFwiI3NpdGUtbmF2aWdhdGlvblwiXG59IiwiaW1wb3J0IHtIVE1MX1NFTEVDVE9SU30gZnJvbSBcIi4uL0hUTUxfU0VMRUNUT1JTXCJcblxuZXhwb3J0IGZ1bmN0aW9uIHNldEN1cnJlbnRTZWN0aW9uTmFtZSgpIHtcbiAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihIVE1MX1NFTEVDVE9SUy5DVVJSRU5UX1NFQ1RJT05fTkFNRSkgYXMgSFRNTEVsZW1lbnQpLmlubmVySFRNTCA9IGdldEN1cnJlbnRTZWN0aW9uTmFtZSgpXG59XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRTZWN0aW9uTmFtZSgpOiBzdHJpbmcge1xuICAgIGNvbnN0IHBhZ2VUaXRsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDFcIilcbiAgICBpZihwYWdlVGl0bGVFbGVtZW50ICE9PSBudWxsICkge1xuICAgICAgICByZXR1cm4gcGFnZVRpdGxlRWxlbWVudC5pbm5lckhUTUxcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gXCJcIlxuICAgIH1cbn1cbiIsImltcG9ydCB7SFRNTF9TRUxFQ1RPUlN9IGZyb20gXCIuLi9IVE1MX1NFTEVDVE9SU1wiXG5pbXBvcnQge2FkZFNjcm9sbEV2ZW50TGlzdGVuZXJ9IGZyb20gXCIuLi9hZGRTY3JvbGxFdmVudExpc3RlbmVyXCJcblxuZXhwb3J0IGZ1bmN0aW9uIHNldE5hdmlnYXRpb25NZW51KCkge1xuICAgIGdlbmVyYXRlTGlzdE9mQ2hhcHRlcigpLnRoZW4oKHZhbHVlKSA9PiB7XG4gICAgICAgIHVwZGF0ZUNoYXB0ZXJTdGF0dUluTmF2aWdhdGlvbk1lbnUodmFsdWUpXG5cbiAgICAgICAgYWRkU2Nyb2xsRXZlbnRMaXN0ZW5lcigoKSA9PiB7XG4gICAgICAgICAgICB1cGRhdGVDaGFwdGVyU3RhdHVJbk5hdmlnYXRpb25NZW51KHZhbHVlKVxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNoYXB0ZXJTdGF0dUluTmF2aWdhdGlvbk1lbnUobGlzdE9mVGl0bGVMZXZlbFR3bzogQ2hhcHRlcltdKSB7XG4gICAgbGV0IGxhc3RUaXRsZUlzTm90Rm91bmQgPSB0cnVlXG5cbiAgICBmb3IoY29uc3QgdGl0bGVMZXZlbFR3byBvZiBsaXN0T2ZUaXRsZUxldmVsVHdvKSB7XG4gICAgICAgIGlmKHRpdGxlTGV2ZWxUd28uaXNBY3RpdmUgJiYgbGFzdFRpdGxlSXNOb3RGb3VuZCkge1xuICAgICAgICAgICAgbGFzdFRpdGxlSXNOb3RGb3VuZCA9IGZhbHNlXG4gICAgICAgICAgICB0aXRsZUxldmVsVHdvLmNsYXNzbmFtZSA9IFwiYWN0aXZlXCJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRpdGxlTGV2ZWxUd28uY2xhc3NuYW1lID0gXCJ1bmFjdGl2ZVwiXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlTGlzdE9mQ2hhcHRlcigpOiBQcm9taXNlPENoYXB0ZXJbXT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3RUb1JldHVybiA9IFtdXG5cbiAgICAgICAgY29uc3QgVElUTEVfVFdPX0VMRU1FTlRTID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgJHtIVE1MX1NFTEVDVE9SUy5DT05URU5UfSBoMmApIGFzIE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+XG4gICAgICAgIGNvbnN0IE5BVklHQVRJT05fTUVOVV9FTEVNRU5UID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHtIVE1MX1NFTEVDVE9SUy5OQVZJR0FUSU9OX01FTlV9YCkgYXMgSFRNTEVsZW1lbnRcblxuICAgICAgICBmb3IoY29uc3QgbmF2aWdhdGlvblR3b0VsZW1lbnQgb2YgVElUTEVfVFdPX0VMRU1FTlRTKSB7XG4gICAgICAgICAgICBsaXN0VG9SZXR1cm4ucHVzaChuZXcgQ2hhcHRlcihuYXZpZ2F0aW9uVHdvRWxlbWVudCwgTkFWSUdBVElPTl9NRU5VX0VMRU1FTlQpKVxuICAgICAgICB9XG5cbiAgICAgICAgcmVzb2x2ZShsaXN0VG9SZXR1cm4ucmV2ZXJzZSgpKVxuXG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJjYW4ndCBnZXQgbGlzdCBvZiBsZXZlbCB0d28gaW4gbmF2aWdhdGlvbiBtZW51XCIpKVxuICAgIH0pXG59XG5cbmNsYXNzIENoYXB0ZXIge1xuICAgIHByaXZhdGUgX2VsZW1lbnQ6IEhUTUxFbGVtZW50XG5cbiAgICBwcml2YXRlIF9lbGVtZW50SW5NZW51OiBIVE1MRWxlbWVudCB8IHVuZGVmaW5lZFxuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogSFRNTEVsZW1lbnQsIG5hdmlnYXRpb25NZW51RWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcbiAgICAgICAgdGhpcy5fZWxlbWVudEluTWVudSA9IHRoaXMuZ2V0RWxlbWVudEluTWVudShuYXZpZ2F0aW9uTWVudUVsZW1lbnQpXG4gICAgfVxuXG4gICAgZ2V0IGlzQWN0aXZlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPD0gd2luZG93LmlubmVySGVpZ2h0IC8gMlxuICAgIH1cblxuICAgIHNldCBjbGFzc25hbWUoY2xhc3NuYW1lOiBcImFjdGl2ZVwifFwidW5hY3RpdmVcIikge1xuICAgICAgICBpZihjbGFzc25hbWUgPT09IFwiYWN0aXZlXCIpIHtcbiAgICAgICAgICAgIGlmKCEgdGhpcy5fZWxlbWVudEluTWVudUNvbnRhaW5zQWN0aXZlQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICAodGhpcy5fZWxlbWVudEluTWVudSBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYodGhpcy5fZWxlbWVudEluTWVudUNvbnRhaW5zQWN0aXZlQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICAodGhpcy5fZWxlbWVudEluTWVudSBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRFbGVtZW50SW5NZW51KG5hdmlnYXRpb25NZW51RWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgbGlzdE9mTGV2ZWxUd29Jbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAke0hUTUxfU0VMRUNUT1JTLk5BVklHQVRJT05fTUVOVX0gPiBsaSA+IHVsID4gbGkgPiBhYCkgYXMgTm9kZUxpc3RPZjxIVE1MRWxlbWVudD5cblxuICAgICAgICBmb3IoY29uc3QgbGV2ZWxUd29FbGVtZW50IG9mIGxpc3RPZkxldmVsVHdvSW5NZW51KSB7XG4gICAgICAgICAgICBpZihsZXZlbFR3b0VsZW1lbnQuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSA9PT0gXCIjXCIgKyB0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZShcImlkXCIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxldmVsVHdvRWxlbWVudFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXQgX2VsZW1lbnRJbk1lbnVDb250YWluc0FjdGl2ZUNsYXNzKCkge1xuICAgICAgICBpZih0aGlzLl9lbGVtZW50SW5NZW51ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50SW5NZW51LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQge0tvdGxpblBsYXlncm91bmR9IGZyb20gXCIuL0tvdGxpblBsYXlncm91bmRcIlxuaW1wb3J0IHtFZGl0b3J9IGZyb20gXCIuL0VkaXRvclwiXG5pbXBvcnQge2FkZFNjcm9sbEV2ZW50TGlzdGVuZXJ9IGZyb20gXCIuLi9hZGRTY3JvbGxFdmVudExpc3RlbmVyXCJcbmltcG9ydCB7SFRNTF9TRUxFQ1RPUlN9IGZyb20gXCIuLi9IVE1MX1NFTEVDVE9SU1wiXG5cbmV4cG9ydCBjbGFzcyBFZGl0b3JNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3Rvcihrb3RsaW5FZGl0b3JzOiBFZGl0b3JbXSkge1xuXG4gICAgICAgIHRoaXMuX2VkaXRvcnMgPSBrb3RsaW5FZGl0b3JzXG5cbiAgICAgICAgdGhpcy5fc2V0TGlzdGVuZXJGb3JFZGl0b3JzQXV0b0V4ZWN1dGlvbigpXG4gICAgfVxuXG4gICAgcHVibGljIHJ1blZpc2libGVFZGl0b3JzKCkge1xuICAgICAgICBmb3IoY29uc3QgZWRpdG9yIG9mIHRoaXMuX2VkaXRvcnMpIHtcbiAgICAgICAgICAgIGlmKGVkaXRvci5pc09uU2NyZWVuICYmIGVkaXRvci5oYXNOb3RCZWVuRXhlY3V0ZWQpIHtcbiAgICAgICAgICAgICAgICBlZGl0b3IuZXhlY3V0ZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IF9lZGl0b3JzOiBFZGl0b3JbXSA9IFtdXG5cbiAgICBwcml2YXRlIF9zZXRMaXN0ZW5lckZvckVkaXRvcnNBdXRvRXhlY3V0aW9uKCkge1xuICAgICAgICBhZGRTY3JvbGxFdmVudExpc3RlbmVyKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucnVuVmlzaWJsZUVkaXRvcnMoKVxuICAgICAgICB9KVxuICAgIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVIVE1MRWxlbWVudCh0YWdOYW1lOiBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXAsIGNvbnRlbnQ/OiBzdHJpbmcgfCBIVE1MRWxlbWVudFtdLCBjbGFzc25hbWU/OiBzdHJpbmcpIHtcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKVxuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIG5ld0VsZW1lbnQuaW5uZXJIVE1MID0gY29udGVudFxuICAgIH0gZWxzZSBpZiAoY29udGVudCkge1xuICAgICAgICBmb3IoY29uc3QgaHRtbEVsZW1lbnQgb2YgY29udGVudCkge1xuICAgICAgICAgICAgbmV3RWxlbWVudC5hcHBlbmRDaGlsZChodG1sRWxlbWVudClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmKGNsYXNzbmFtZSkgbmV3RWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc25hbWVcblxuICAgIHJldHVybiBuZXdFbGVtZW50XG59IiwiaW1wb3J0IHtLb3RsaW5QbGF5Z3JvdW5kfSBmcm9tIFwiLi9Lb3RsaW5QbGF5Z3JvdW5kXCJcbmltcG9ydCB7SFRNTF9TRUxFQ1RPUlN9IGZyb20gXCIuLi9IVE1MX1NFTEVDVE9SU1wiXG5pbXBvcnQge2NyZWF0ZUhUTUxFbGVtZW50fSBmcm9tIFwiLi4vdG9vbHNcIlxuaW1wb3J0IHtQbGF0Zm9ybU9zTmFtZX0gZnJvbSBcIi4uL2dldFVzZXJPc1wiXG5cbmRlY2xhcmUgZnVuY3Rpb24gS290bGluUGxheWdyb3VuZChzZWxlY3Rvcjogc3RyaW5nIHzCoEhUTUxFbGVtZW50LCBldmVudEZ1bmN0aW9ucz86IEtvdGxpblBsYXlncm91bmQuSUV2ZW50RnVuY3Rpb25zKTogUHJvbWlzZTxLb3RsaW5QbGF5Z3JvdW5kLklFZGl0b3JbXT5cblxuXG5leHBvcnQgY2xhc3MgRWRpdG9yIHtcblxuICAgIHByaXZhdGUgVEVYVF9TSE9SVENVVCA9IHtcbiAgICAgICAgcnVuOiB7XG4gICAgICAgICAgICBtYWNPczogXCJDVFJMICsgUjogcnVuIGNvZGVcIixcbiAgICAgICAgICAgIHdpbmRvd3M6IFwiQ1RSTCArIEY5OiBydW4gY29kZVwiLFxuICAgICAgICAgICAgbGludXg6IFwiQ1RSTCArIEY5OiBydW4gY29kZVwiLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBQTEFURk9STV9PU19VU0VSX05BTUU6IFBsYXRmb3JtT3NOYW1lO1xuXG4gICAgcHJpdmF0ZSBNT1JFX1RIQU5fT05DRV9DT0RFX0NIQU5HRURfQ0xBU1NOQU1FID0gXCJtb3JlLXRoYW4tb25jZS1jb2RlLWNoYW5nZWRcIlxuICAgIHByaXZhdGUgU0hPUlRDVVRfSU5GT19DTEFTU05BTUUgPSBcInNob3J0Y3V0LWluZm8gY29tcGlsZXItaW5mb1wiXG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgc2VsZWN0b3I6IHN0cmluZyB8IEhUTUxFbGVtZW50LFxuICAgICAgICBwbGF0Zm9ybU9zTmFtZTogUGxhdGZvcm1Pc05hbWUsXG4gICAgKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdG9yID0gc2VsZWN0b3JcbiAgICAgICAgdGhpcy5QTEFURk9STV9PU19VU0VSX05BTUUgPSBwbGF0Zm9ybU9zTmFtZVxuICAgIH1cblxuICAgIHByaXZhdGUgX3NlbGVjdG9yOiBzdHJpbmcgfCBIVE1MRWxlbWVudFxuXG4gICAgcHVibGljIGluaXQoKTogUHJvbWlzZTxFZGl0b3I+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgS290bGluUGxheWdyb3VuZCh0aGlzLl9zZWxlY3RvciwgdGhpcy5fZXZlbnRGdW5jdGlvbnMpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuX0tvdGxpblBsYXlncm91bmRFZGl0b3IpIHtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9rb3RsaW5FZGl0b3JDb250YWluZXIgPSB0aGlzLl9Lb3RsaW5QbGF5Z3JvdW5kRWRpdG9yLm5vZGVzWzBdXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29kZUFyZWEgPSB0aGlzLl9rb3RsaW5FZGl0b3JDb250YWluZXIucXVlcnlTZWxlY3RvcihIVE1MX1NFTEVDVE9SUy5DT0RFX0FSRUEpXG5cbiAgICAgICAgICAgICAgICAgICAgaWYoY29kZUFyZWEgIT09IG51bGwgJiYgY29kZUFyZWEgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29kZUFyZWEgPSBjb2RlQXJlYVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2RlTWlycm9yU3R5bGVFbGVtZW50ID0gY29kZUFyZWEucXVlcnlTZWxlY3RvcihcIi5Db2RlTWlycm9yXCIpIGFzIEhUTUxEaXZFbGVtZW50XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVkaXRvclRoZW1lQ2xhc3NuYW1lID0gRWRpdG9yLmdldENvb2tpZShcInRoZW1lXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZWRpdG9yVGhlbWVDbGFzc25hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlTWlycm9yU3R5bGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoYGNtLXMtJHtlZGl0b3JUaGVtZUNsYXNzbmFtZX1gKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSggdGhpcyApXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGdldENvb2tpZShuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgbWF0Y2ggPSBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cCgnKF58ICknICsgbmFtZSArICc9KFteO10rKScpKTtcblxuICAgICAgICBpZiAobWF0Y2gpIHJldHVybiBtYXRjaFsyXTtcbiAgICAgICAgZWxzZSByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIHByaXZhdGUgX2tvdGxpbkVkaXRvckNvbnRhaW5lcj86IEhUTUxFbGVtZW50XG4gICAgZ2V0IGtvdGxpbkVkaXRvckNvbnRhaW5lcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2tvdGxpbkVkaXRvckNvbnRhaW5lclxuICAgIH1cblxuICAgIHByaXZhdGUgX2NvZGVBcmVhPzogSFRNTEVsZW1lbnRcbiAgICBwdWJsaWMgZ2V0IGNvZGVBcmVhKCkge3JldHVybiB0aGlzLl9jb2RlQXJlYX1cblxuICAgIHB1YmxpYyBnZXQgYm90dG9tX29mX2NvZGVBcmVhX2lzX2Fib3ZlX2JvdHRvbV9vZl9zY3JlZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvZGVBcmVhID8gdGhpcy5jb2RlQXJlYS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20gPj0gMCA6IGZhbHNlXG4gICAgfVxuICAgIHB1YmxpYyBnZXQgYm90dG9tX29mX2NvZGVBcmVhX2lzX2JlbG93X3RvcF9vZl9zY3JlZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvZGVBcmVhID8gdGhpcy5jb2RlQXJlYS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20gPD0gd2luZG93LmlubmVySGVpZ2h0IDogZmFsc2VcbiAgICB9XG5cbiAgICBwcml2YXRlIF9oYXNCZWVuRXhlY3V0ZWQgPSBmYWxzZVxuICAgIHB1YmxpYyBnZXQgaGFzTm90QmVlbkV4ZWN1dGVkKCkgeyByZXR1cm4gIXRoaXMuX2hhc0JlZW5FeGVjdXRlZH1cblxuICAgIHB1YmxpYyBnZXQgaXNPblNjcmVlbigpIHtcbiAgICAgICAgaWYgKHRoaXMuX0tvdGxpblBsYXlncm91bmRFZGl0b3IpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJvdHRvbV9vZl9jb2RlQXJlYV9pc19hYm92ZV9ib3R0b21fb2Zfc2NyZWVuICYmIHRoaXMuYm90dG9tX29mX2NvZGVBcmVhX2lzX2JlbG93X3RvcF9vZl9zY3JlZW5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBleGVjdXRlKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiggdGhpcy5fS290bGluUGxheWdyb3VuZEVkaXRvcikge1xuICAgICAgICAgICAgICAgIHRoaXMuX2hhc0JlZW5FeGVjdXRlZCA9IHRydWVcbiAgICAgICAgICAgICAgICB0aGlzLl9Lb3RsaW5QbGF5Z3JvdW5kRWRpdG9yLmV4ZWN1dGUoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzb2x2ZSgpXG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiY2FuJ3QgZXhlY3V0ZSBrb3RsaW4gcGxheWdyb3VuZCBlZGl0b3JcIikpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2V2ZW50RnVuY3Rpb25zOiBLb3RsaW5QbGF5Z3JvdW5kLklFdmVudEZ1bmN0aW9ucyA9IHtcbiAgICAgICAgZ2V0SW5zdGFuY2U6IChlZGl0b3I6IEtvdGxpblBsYXlncm91bmQuSUVkaXRvcikgPT4ge1xuICAgICAgICAgICAgdGhpcy5fS290bGluUGxheWdyb3VuZEVkaXRvciA9IGVkaXRvclxuICAgICAgICB9LFxuICAgICAgICBvbkNoYW5nZTogKGNvZGU6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VkQ291bnRlcisrXG5cbiAgICAgICAgICAgIGlmKHRoaXMuY2hhbmdlZENvdW50ZXIgPT09IDIpIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmtvdGxpbkVkaXRvckNvbnRhaW5lcikge1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0SW5TaG9ydGN1dEhlbHBlckVsZW1lbnQ6IHN0cmluZ1xuXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5QTEFURk9STV9PU19VU0VSX05BTUUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJPUyBYXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEluU2hvcnRjdXRIZWxwZXJFbGVtZW50ID0gdGhpcy5URVhUX1NIT1JUQ1VULnJ1bi5tYWNPc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiV2luZG93c1wiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRJblNob3J0Y3V0SGVscGVyRWxlbWVudCA9IHRoaXMuVEVYVF9TSE9SVENVVC5ydW4ud2luZG93c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiTGludXhcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0SW5TaG9ydGN1dEhlbHBlckVsZW1lbnQgPSB0aGlzLlRFWFRfU0hPUlRDVVQucnVuLmxpbnV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEluU2hvcnRjdXRIZWxwZXJFbGVtZW50ID0gXCJcIlxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5QTEFURk9STV9PU19VU0VSX05BTUUgIT09IFwiT3RoZXJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5rb3RsaW5FZGl0b3JDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlSFRNTEVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZUhUTUxFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEluU2hvcnRjdXRIZWxwZXJFbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlSFRNTEVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNUUkwgKyBTUEFDRTogY29kZSBjb21wbGV0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5TSE9SVENVVF9JTkZPX0NMQVNTTkFNRVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMua290bGluRWRpdG9yQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQodGhpcy5NT1JFX1RIQU5fT05DRV9DT0RFX0NIQU5HRURfQ0xBU1NOQU1FKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBfS290bGluUGxheWdyb3VuZEVkaXRvcj86IEtvdGxpblBsYXlncm91bmQuSUVkaXRvclxuXG4gICAgcHJpdmF0ZSBjaGFuZ2VkQ291bnRlciA9IDBcbn0iLCJpbXBvcnQgcGxhdGZvcm0gZnJvbSBcInBsYXRmb3JtXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJPcygpOiBQbGF0Zm9ybU9zTmFtZSB7XG4gICAgaWYocGxhdGZvcm0ub3MpIHtcbiAgICAgICAgc3dpdGNoIChwbGF0Zm9ybS5vcy5mYW1pbHkpIHtcbiAgICAgICAgICAgIGNhc2UgXCJXaW5kb3dzXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiV2luZG93c1wiXG4gICAgICAgICAgICBjYXNlIFwiT1MgWFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk9TIFhcIlxuICAgICAgICAgICAgY2FzZSBcIlVidW50dVwiIHx8IFwiRGViaWFuXCIgfHwgXCJGZWRvcmFcIiB8fCBcIlJlZCBIYXRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMaW51eFwiXG4gICAgICAgICAgICBkZWZhdWx0IDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPdGhlclwiXG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gXCJPdGhlclwiXG4gICAgfVxufVxuXG5leHBvcnQgdHlwZSBQbGF0Zm9ybU9zTmFtZSA9IFwiV2luZG93c1wiIHwgXCJPUyBYXCIgfCBcIkxpbnV4XCIgfCBcIk90aGVyXCJcblxuIiwiaW1wb3J0IHtFZGl0b3JNYW5hZ2VyfSBmcm9tIFwiLi9FZGl0b3JNYW5hZ2VyXCJcbmltcG9ydCB7RWRpdG9yfSBmcm9tIFwiLi9FZGl0b3JcIlxuaW1wb3J0IHtnZXRVc2VyT3N9IGZyb20gXCIuLi9nZXRVc2VyT3NcIlxuXG5leHBvcnQgZnVuY3Rpb24gc2V0RWRpdG9yc01hbmFnZXIoKTogUHJvbWlzZTxFZGl0b3JNYW5hZ2VyPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICBjb25zdCBjb2RlRWxlbWVudHNGb3JLb3RsaW5QbGF5Z3JvdW5kRWRpdG9ySW5pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5rb3RsaW4tY29kZScpXG5cbiAgICAgICAgY29uc3QgbGlzdE9mRWRpdG9yOiBFZGl0b3JbXSA9IFtdXG5cbiAgICAgICAgbGV0IG51bWJlck9mRWRpdG9yc0luaXRpYWxpc2VkID0gMFxuXG4gICAgICAgIGZvcihjb25zdCBjb2RlRWxlbWVudCBvZiBjb2RlRWxlbWVudHNGb3JLb3RsaW5QbGF5Z3JvdW5kRWRpdG9ySW5pdCkge1xuICAgICAgICAgICAgaWYoY29kZUVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGxpc3RPZkVkaXRvci5wdXNoKG5ldyBFZGl0b3IoY29kZUVsZW1lbnQsIGdldFVzZXJPcygpKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvcihjb25zdCBlZGl0b3Igb2YgbGlzdE9mRWRpdG9yKSB7XG4gICAgICAgICAgICBlZGl0b3IuaW5pdCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIG51bWJlck9mRWRpdG9yc0luaXRpYWxpc2VkKytcbiAgICAgICAgICAgICAgICBpZihudW1iZXJPZkVkaXRvcnNJbml0aWFsaXNlZCA9PT0gbGlzdE9mRWRpdG9yLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVkaXRvck1hbmFnZXIobGlzdE9mRWRpdG9yKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0pXG59XG4iLCJpbXBvcnQge3NldE1lbnVQb3NpdGlvbn0gZnJvbSBcIi4vbmF2aWdhdGlvbi9zZXRNZW51UG9zaXRpb25cIlxuaW1wb3J0IHtIVE1MX1NFTEVDVE9SU30gZnJvbSBcIi4vSFRNTF9TRUxFQ1RPUlNcIlxuaW1wb3J0IHtzZXRDdXJyZW50U2VjdGlvbk5hbWV9IGZyb20gXCIuL25hdmlnYXRpb24vc2V0Q3VycmVudFNlY3Rpb25OYW1lXCJcbmltcG9ydCB7c2V0TmF2aWdhdGlvbk1lbnV9IGZyb20gXCIuL25hdmlnYXRpb24vc2V0TmF2aWdhdGlvbk1lbnVcIlxuaW1wb3J0IHtzZXRFZGl0b3JzTWFuYWdlcn0gZnJvbSBcIi4vZWRpdG9yL3NldEVkaXRvcnNNYW5hZ2VyXCJcblxuc2V0RWRpdG9yc01hbmFnZXIoKS50aGVuKChlZGl0b3JNYW5hZ2VyKSA9PiB7XG4gICAgZWRpdG9yTWFuYWdlci5ydW5WaXNpYmxlRWRpdG9ycygpXG59KVxuXG5zZXRNZW51UG9zaXRpb24oXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihIVE1MX1NFTEVDVE9SUy5DT05URU5UKSBhcyBIVE1MRWxlbWVudCxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKEhUTUxfU0VMRUNUT1JTLlRPUF9IRUFERVIpIGFzIEhUTUxFbGVtZW50LFxuKVxuXG5cbnNldEN1cnJlbnRTZWN0aW9uTmFtZSgpXG5cbnNldE5hdmlnYXRpb25NZW51KCkiLCJpbXBvcnQgXCIuL3NjcmlwdHMvbWFpblwiXG5pbXBvcnQgXCIuL3N0eWxlcy9tYWluLnNjc3NcIlxuXG5pbXBvcnQgXCIuL2ltYWdlcy9sb2dvLXBsYXkucG5nXCJcbmltcG9ydCBcIi4vaW1hZ2VzL2xvZ28tbmVnYXRpdmUucG5nXCJcbmltcG9ydCBcIi4vaW1hZ2VzL2dvLWJhY2stdG8tbWFpbi1wYWdlLnBuZ1wiXG5pbXBvcnQgXCIuL2ltYWdlcy9sb2dvLXBsYXktaW9fYWxsX21pbi1jb2xvcl92YXJpYXRpb24tdjMucG5nXCIiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9