(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("draft-js"), require("immutable"), require("draftjs-utils"), require("draft-convert"), require("react-dom"), require("braft-finder"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "draft-js", "immutable", "draftjs-utils", "draft-convert", "react-dom", "braft-finder"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("draft-js"), require("immutable"), require("draftjs-utils"), require("draft-convert"), require("react-dom"), require("braft-finder")) : factory(root["react"], root["draft-js"], root["immutable"], root["draftjs-utils"], root["draft-convert"], root["react-dom"], root["braft-finder"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__10__, __WEBPACK_EXTERNAL_MODULE__12__, __WEBPACK_EXTERNAL_MODULE__15__, __WEBPACK_EXTERNAL_MODULE__16__, __WEBPACK_EXTERNAL_MODULE__17__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 42);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
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

module.exports = _createClass;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(28);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(13);

var assertThisInitialized = __webpack_require__(2);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__10__;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(29);

var iterableToArray = __webpack_require__(30);

var unsupportedIterableToArray = __webpack_require__(21);

var nonIterableSpread = __webpack_require__(31);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__12__;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(27);

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__15__;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__16__;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__17__;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(41);


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var Immutable = __webpack_require__(10);

var KEY_SEPARATOR = '-';

function MultiDecorator(decorators) {
    this.decorators = Immutable.List(decorators);
}

/**
    Return list of decoration IDs per character

    @param {ContentBlock}
    @return {List<String>}
*/
MultiDecorator.prototype.getDecorations = function(block) {
    var decorations = Array(block.getText().length).fill(null);

    this.decorators.forEach(function(decorator, i) {
        var _decorations = decorator.getDecorations(block);

        _decorations.forEach(function(key, offset) {
            if (!key) {
                return;
            }

            key = i + KEY_SEPARATOR + key;

            decorations[offset] = key;
        });
    });

    return Immutable.List(decorations);
};

/**
    Return component to render a decoration

    @param {String}
    @return {Function}
*/
MultiDecorator.prototype.getComponentForKey = function(key) {
    var decorator = this.getDecoratorForKey(key);
    return decorator.getComponentForKey(
        this.getInnerKey(key)
    );
};

/**
    Return props to render a decoration

    @param {String}
    @return {Object}
*/
MultiDecorator.prototype.getPropsForKey = function(key) {
    var decorator = this.getDecoratorForKey(key);
    return decorator.getPropsForKey(
        this.getInnerKey(key)
    );
};

/**
    Return a decorator for a specific key

    @param {String}
    @return {Decorator}
*/
MultiDecorator.prototype.getDecoratorForKey = function(key) {
    var parts = key.split(KEY_SEPARATOR);
    var index = Number(parts[0]);

    return this.decorators.get(index);
};

/**
    Return inner key for a decorator

    @param {String}
    @return {String}
*/
MultiDecorator.prototype.getInnerKey = function(key) {
    var parts = key.split(KEY_SEPARATOR);
    return parts.slice(1).join(KEY_SEPARATOR);
};

module.exports = MultiDecorator;


/***/ }),
/* 20 */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(20);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * 
 * @emails oncall+draft_js
 */


function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var _require = __webpack_require__(10),
    Map = _require.Map,
    OrderedSet = _require.OrderedSet,
    Record = _require.Record; // Immutable.map is typed such that the value for every key in the map
// must be the same type


var EMPTY_SET = OrderedSet();
var defaultRecord = {
  style: EMPTY_SET,
  entity: null
};
var CharacterMetadataRecord = Record(defaultRecord);

var CharacterMetadata =
/*#__PURE__*/
function (_CharacterMetadataRec) {
  _inheritsLoose(CharacterMetadata, _CharacterMetadataRec);

  function CharacterMetadata() {
    return _CharacterMetadataRec.apply(this, arguments) || this;
  }

  var _proto = CharacterMetadata.prototype;

  _proto.getStyle = function getStyle() {
    return this.get('style');
  };

  _proto.getEntity = function getEntity() {
    return this.get('entity');
  };

  _proto.hasStyle = function hasStyle(style) {
    return this.getStyle().includes(style);
  };

  CharacterMetadata.applyStyle = function applyStyle(record, style) {
    var withStyle = record.set('style', record.getStyle().add(style));
    return CharacterMetadata.create(withStyle);
  };

  CharacterMetadata.removeStyle = function removeStyle(record, style) {
    var withoutStyle = record.set('style', record.getStyle().remove(style));
    return CharacterMetadata.create(withoutStyle);
  };

  CharacterMetadata.applyEntity = function applyEntity(record, entityKey) {
    var withEntity = record.getEntity() === entityKey ? record : record.set('entity', entityKey);
    return CharacterMetadata.create(withEntity);
  }
  /**
   * Use this function instead of the `CharacterMetadata` constructor.
   * Since most content generally uses only a very small number of
   * style/entity permutations, we can reuse these objects as often as
   * possible.
   */
  ;

  CharacterMetadata.create = function create(config) {
    if (!config) {
      return EMPTY;
    }

    var defaultConfig = {
      style: EMPTY_SET,
      entity: null
    }; // Fill in unspecified properties, if necessary.

    var configMap = Map(defaultConfig).merge(config);
    var existing = pool.get(configMap);

    if (existing) {
      return existing;
    }

    var newCharacter = new CharacterMetadata(configMap);
    pool = pool.set(configMap, newCharacter);
    return newCharacter;
  };

  CharacterMetadata.fromJS = function fromJS(_ref) {
    var style = _ref.style,
        entity = _ref.entity;
    return new CharacterMetadata({
      style: Array.isArray(style) ? OrderedSet(style) : style,
      entity: Array.isArray(entity) ? OrderedSet(entity) : entity
    });
  };

  return CharacterMetadata;
}(CharacterMetadataRecord);

var EMPTY = new CharacterMetadata();
var pool = Map([[Map(defaultRecord), EMPTY]]);
CharacterMetadata.EMPTY = EMPTY;
module.exports = CharacterMetadata;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * 
 * @emails oncall+draft_js
 */


/**
 * Search through an array to find contiguous stretches of elements that
 * match a specified filter function.
 *
 * When ranges are found, execute a specified `found` function to supply
 * the values to the caller.
 */
function findRangesImmutable(haystack, areEqualFn, filterFn, foundFn) {
  if (!haystack.size) {
    return;
  }

  var cursor = 0;
  haystack.reduce(function (value, nextValue, nextIndex) {
    if (!areEqualFn(value, nextValue)) {
      if (filterFn(value)) {
        foundFn(cursor, nextIndex);
      }

      cursor = nextIndex;
    }

    return nextValue;
  });
  filterFn(haystack.last()) && foundFn(cursor, haystack.count());
}

module.exports = findRangesImmutable;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * 
 * @emails oncall+draft_js
 */


var getContentStateFragment = __webpack_require__(32);

function getFragmentFromSelection(editorState) {
  var selectionState = editorState.getSelection();

  if (selectionState.isCollapsed()) {
    return null;
  }

  return getContentStateFragment(editorState.getCurrentContent(), selectionState);
}

module.exports = getFragmentFromSelection;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(38);

var iterableToArrayLimit = __webpack_require__(39);

var unsupportedIterableToArray = __webpack_require__(21);

var nonIterableRest = __webpack_require__(40);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(20);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * 
 * @emails oncall+draft_js
 */


var randomizeBlockMapKeys = __webpack_require__(33);

var removeEntitiesAtEdges = __webpack_require__(36);

var getContentStateFragment = function getContentStateFragment(contentState, selectionState) {
  var startKey = selectionState.getStartKey();
  var startOffset = selectionState.getStartOffset();
  var endKey = selectionState.getEndKey();
  var endOffset = selectionState.getEndOffset(); // Edge entities should be stripped to ensure that we don't preserve
  // invalid partial entities when the fragment is reused. We do, however,
  // preserve entities that are entirely within the selection range.

  var contentWithoutEdgeEntities = removeEntitiesAtEdges(contentState, selectionState);
  var blockMap = contentWithoutEdgeEntities.getBlockMap();
  var blockKeys = blockMap.keySeq();
  var startIndex = blockKeys.indexOf(startKey);
  var endIndex = blockKeys.indexOf(endKey) + 1;
  return randomizeBlockMapKeys(blockMap.slice(startIndex, endIndex).map(function (block, blockKey) {
    var text = block.getText();
    var chars = block.getCharacterList();

    if (startKey === endKey) {
      return block.merge({
        text: text.slice(startOffset, endOffset),
        characterList: chars.slice(startOffset, endOffset)
      });
    }

    if (blockKey === startKey) {
      return block.merge({
        text: text.slice(startOffset),
        characterList: chars.slice(startOffset)
      });
    }

    if (blockKey === endKey) {
      return block.merge({
        text: text.slice(0, endOffset),
        characterList: chars.slice(0, endOffset)
      });
    }

    return block;
  }));
};

module.exports = getContentStateFragment;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * 
 * @emails oncall+draft_js
 */


var ContentBlockNode = __webpack_require__(34);

var generateRandomKey = __webpack_require__(35);

var Immutable = __webpack_require__(10);

var OrderedMap = Immutable.OrderedMap;

var randomizeContentBlockNodeKeys = function randomizeContentBlockNodeKeys(blockMap) {
  var newKeysRef = {}; // we keep track of root blocks in order to update subsequent sibling links

  var lastRootBlock;
  return OrderedMap(blockMap.withMutations(function (blockMapState) {
    blockMapState.forEach(function (block, index) {
      var oldKey = block.getKey();
      var nextKey = block.getNextSiblingKey();
      var prevKey = block.getPrevSiblingKey();
      var childrenKeys = block.getChildKeys();
      var parentKey = block.getParentKey(); // new key that we will use to build linking

      var key = generateRandomKey(); // we will add it here to re-use it later

      newKeysRef[oldKey] = key;

      if (nextKey) {
        var nextBlock = blockMapState.get(nextKey);

        if (nextBlock) {
          blockMapState.setIn([nextKey, 'prevSibling'], key);
        } else {
          // this can happen when generating random keys for fragments
          blockMapState.setIn([oldKey, 'nextSibling'], null);
        }
      }

      if (prevKey) {
        var prevBlock = blockMapState.get(prevKey);

        if (prevBlock) {
          blockMapState.setIn([prevKey, 'nextSibling'], key);
        } else {
          // this can happen when generating random keys for fragments
          blockMapState.setIn([oldKey, 'prevSibling'], null);
        }
      }

      if (parentKey && blockMapState.get(parentKey)) {
        var parentBlock = blockMapState.get(parentKey);
        var parentChildrenList = parentBlock.getChildKeys();
        blockMapState.setIn([parentKey, 'children'], parentChildrenList.set(parentChildrenList.indexOf(block.getKey()), key));
      } else {
        // blocks will then be treated as root block nodes
        blockMapState.setIn([oldKey, 'parent'], null);

        if (lastRootBlock) {
          blockMapState.setIn([lastRootBlock.getKey(), 'nextSibling'], key);
          blockMapState.setIn([oldKey, 'prevSibling'], newKeysRef[lastRootBlock.getKey()]);
        }

        lastRootBlock = blockMapState.get(oldKey);
      }

      childrenKeys.forEach(function (childKey) {
        var childBlock = blockMapState.get(childKey);

        if (childBlock) {
          blockMapState.setIn([childKey, 'parent'], key);
        } else {
          blockMapState.setIn([oldKey, 'children'], block.getChildKeys().filter(function (child) {
            return child !== childKey;
          }));
        }
      });
    });
  }).toArray().map(function (block) {
    return [newKeysRef[block.getKey()], block.set('key', newKeysRef[block.getKey()])];
  }));
};

var randomizeContentBlockKeys = function randomizeContentBlockKeys(blockMap) {
  return OrderedMap(blockMap.toArray().map(function (block) {
    var key = generateRandomKey();
    return [key, block.set('key', key)];
  }));
};

var randomizeBlockMapKeys = function randomizeBlockMapKeys(blockMap) {
  var isTreeBasedBlockMap = blockMap.first() instanceof ContentBlockNode;

  if (!isTreeBasedBlockMap) {
    return randomizeContentBlockKeys(blockMap);
  }

  return randomizeContentBlockNodeKeys(blockMap);
};

module.exports = randomizeBlockMapKeys;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * 
 * @emails oncall+draft_js
 *
 * This file is a fork of ContentBlock adding support for nesting references by
 * providing links to children, parent, prevSibling, and nextSibling.
 *
 * This is unstable and not part of the public API and should not be used by
 * production systems. This file may be update/removed without notice.
 */


function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var CharacterMetadata = __webpack_require__(22);

var findRangesImmutable = __webpack_require__(23);

var Immutable = __webpack_require__(10);

var List = Immutable.List,
    Map = Immutable.Map,
    OrderedSet = Immutable.OrderedSet,
    Record = Immutable.Record,
    Repeat = Immutable.Repeat;
var EMPTY_SET = OrderedSet();
var defaultRecord = {
  parent: null,
  characterList: List(),
  data: Map(),
  depth: 0,
  key: '',
  text: '',
  type: 'unstyled',
  children: List(),
  prevSibling: null,
  nextSibling: null
};

var haveEqualStyle = function haveEqualStyle(charA, charB) {
  return charA.getStyle() === charB.getStyle();
};

var haveEqualEntity = function haveEqualEntity(charA, charB) {
  return charA.getEntity() === charB.getEntity();
};

var decorateCharacterList = function decorateCharacterList(config) {
  if (!config) {
    return config;
  }

  var characterList = config.characterList,
      text = config.text;

  if (text && !characterList) {
    config.characterList = List(Repeat(CharacterMetadata.EMPTY, text.length));
  }

  return config;
};

var ContentBlockNode =
/*#__PURE__*/
function (_ref) {
  _inheritsLoose(ContentBlockNode, _ref);

  function ContentBlockNode() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultRecord;

    /* eslint-disable-next-line constructor-super */
    return _ref.call(this, decorateCharacterList(props)) || this;
  }

  var _proto = ContentBlockNode.prototype;

  _proto.getKey = function getKey() {
    return this.get('key');
  };

  _proto.getType = function getType() {
    return this.get('type');
  };

  _proto.getText = function getText() {
    return this.get('text');
  };

  _proto.getCharacterList = function getCharacterList() {
    return this.get('characterList');
  };

  _proto.getLength = function getLength() {
    return this.getText().length;
  };

  _proto.getDepth = function getDepth() {
    return this.get('depth');
  };

  _proto.getData = function getData() {
    return this.get('data');
  };

  _proto.getInlineStyleAt = function getInlineStyleAt(offset) {
    var character = this.getCharacterList().get(offset);
    return character ? character.getStyle() : EMPTY_SET;
  };

  _proto.getEntityAt = function getEntityAt(offset) {
    var character = this.getCharacterList().get(offset);
    return character ? character.getEntity() : null;
  };

  _proto.getChildKeys = function getChildKeys() {
    return this.get('children');
  };

  _proto.getParentKey = function getParentKey() {
    return this.get('parent');
  };

  _proto.getPrevSiblingKey = function getPrevSiblingKey() {
    return this.get('prevSibling');
  };

  _proto.getNextSiblingKey = function getNextSiblingKey() {
    return this.get('nextSibling');
  };

  _proto.findStyleRanges = function findStyleRanges(filterFn, callback) {
    findRangesImmutable(this.getCharacterList(), haveEqualStyle, filterFn, callback);
  };

  _proto.findEntityRanges = function findEntityRanges(filterFn, callback) {
    findRangesImmutable(this.getCharacterList(), haveEqualEntity, filterFn, callback);
  };

  return ContentBlockNode;
}(Record(defaultRecord));

module.exports = ContentBlockNode;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * 
 * @emails oncall+draft_js
 */


var seenKeys = {};
var MULTIPLIER = Math.pow(2, 24);

function generateRandomKey() {
  var key;

  while (key === undefined || seenKeys.hasOwnProperty(key) || !isNaN(+key)) {
    key = Math.floor(Math.random() * MULTIPLIER).toString(32);
  }

  seenKeys[key] = true;
  return key;
}

module.exports = generateRandomKey;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * 
 * @emails oncall+draft_js
 */


var CharacterMetadata = __webpack_require__(22);

var findRangesImmutable = __webpack_require__(23);

var invariant = __webpack_require__(37);

function removeEntitiesAtEdges(contentState, selectionState) {
  var blockMap = contentState.getBlockMap();
  var entityMap = contentState.getEntityMap();
  var updatedBlocks = {};
  var startKey = selectionState.getStartKey();
  var startOffset = selectionState.getStartOffset();
  var startBlock = blockMap.get(startKey);
  var updatedStart = removeForBlock(entityMap, startBlock, startOffset);

  if (updatedStart !== startBlock) {
    updatedBlocks[startKey] = updatedStart;
  }

  var endKey = selectionState.getEndKey();
  var endOffset = selectionState.getEndOffset();
  var endBlock = blockMap.get(endKey);

  if (startKey === endKey) {
    endBlock = updatedStart;
  }

  var updatedEnd = removeForBlock(entityMap, endBlock, endOffset);

  if (updatedEnd !== endBlock) {
    updatedBlocks[endKey] = updatedEnd;
  }

  if (!Object.keys(updatedBlocks).length) {
    return contentState.set('selectionAfter', selectionState);
  }

  return contentState.merge({
    blockMap: blockMap.merge(updatedBlocks),
    selectionAfter: selectionState
  });
}
/**
 * Given a list of characters and an offset that is in the middle of an entity,
 * returns the start and end of the entity that is overlapping the offset.
 * Note: This method requires that the offset be in an entity range.
 */


function getRemovalRange(characters, entityKey, offset) {
  var removalRange; // Iterates through a list looking for ranges of matching items
  // based on the 'isEqual' callback.
  // Then instead of returning the result, call the 'found' callback
  // with each range.
  // Then filters those ranges based on the 'filter' callback
  //
  // Here we use it to find ranges of characters with the same entity key.

  findRangesImmutable(characters, // the list to iterate through
  function (a, b) {
    return a.getEntity() === b.getEntity();
  }, // 'isEqual' callback
  function (element) {
    return element.getEntity() === entityKey;
  }, // 'filter' callback
  function (start, end) {
    // 'found' callback
    if (start <= offset && end >= offset) {
      // this entity overlaps the offset index
      removalRange = {
        start: start,
        end: end
      };
    }
  });
  !(typeof removalRange === 'object') ?  false ? undefined : invariant(false) : void 0;
  return removalRange;
}

function removeForBlock(entityMap, block, offset) {
  var chars = block.getCharacterList();
  var charBefore = offset > 0 ? chars.get(offset - 1) : undefined;
  var charAfter = offset < chars.count() ? chars.get(offset) : undefined;
  var entityBeforeCursor = charBefore ? charBefore.getEntity() : undefined;
  var entityAfterCursor = charAfter ? charAfter.getEntity() : undefined;

  if (entityAfterCursor && entityAfterCursor === entityBeforeCursor) {
    var entity = entityMap.__get(entityAfterCursor);

    if (entity.getMutability() !== 'MUTABLE') {
      var _getRemovalRange = getRemovalRange(chars, entityAfterCursor, offset),
          start = _getRemovalRange.start,
          end = _getRemovalRange.end;

      var current;

      while (start < end) {
        current = chars.get(start);
        chars = chars.set(start, CharacterMetadata.applyEntity(current, null));
        start++;
      }

      return block.set('characterList', chars);
    }
  }

  return block;
}

module.exports = removeEntitiesAtEdges;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


var validateFormat =  false ? undefined : function (format) {
  if (format === undefined) {
    throw new Error('invariant(...): Second argument must be a string.');
  }
};
/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments to provide
 * information about what broke and what you were expecting.
 *
 * The invariant message will be stripped in production, but the invariant will
 * remain to ensure logic does not differ in production.
 */

function invariant(condition, format) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  validateFormat(format);

  if (!condition) {
    var error;

    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return String(args[argIndex++]);
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // Skip invariant's own stack frame.

    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),
/* 39 */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "EditorState", function() { return /* reexport */ external_draft_js_["EditorState"]; });
__webpack_require__.d(__webpack_exports__, "getDecorators", function() { return /* reexport */ getDecorators; });
__webpack_require__.d(__webpack_exports__, "BraftCovert", function() { return /* binding */ BraftCovert; });
__webpack_require__.d(__webpack_exports__, "BraftUtils", function() { return /* binding */ BraftUtils; });

// NAMESPACE OBJECT: ./utils/color.js
var color_namespaceObject = {};
__webpack_require__.r(color_namespaceObject);
__webpack_require__.d(color_namespaceObject, "namedColors", function() { return namedColors; });
__webpack_require__.d(color_namespaceObject, "getHexColor", function() { return color_getHexColor; });
__webpack_require__.d(color_namespaceObject, "detectColorsFromHTMLString", function() { return detectColorsFromHTMLString; });
__webpack_require__.d(color_namespaceObject, "detectColorsFromDraftState", function() { return detectColorsFromDraftState; });

// NAMESPACE OBJECT: ./utils/content.js
var content_namespaceObject = {};
__webpack_require__.r(content_namespaceObject);
__webpack_require__.d(content_namespaceObject, "isEditorState", function() { return content_isEditorState; });
__webpack_require__.d(content_namespaceObject, "registerStrictBlockType", function() { return registerStrictBlockType; });
__webpack_require__.d(content_namespaceObject, "createEmptyEditorState", function() { return content_createEmptyEditorState; });
__webpack_require__.d(content_namespaceObject, "createEditorState", function() { return content_createEditorState; });
__webpack_require__.d(content_namespaceObject, "isSelectionCollapsed", function() { return isSelectionCollapsed; });
__webpack_require__.d(content_namespaceObject, "selectionContainsBlockType", function() { return selectionContainsBlockType; });
__webpack_require__.d(content_namespaceObject, "selectionContainsStrictBlock", function() { return selectionContainsStrictBlock; });
__webpack_require__.d(content_namespaceObject, "selectBlock", function() { return content_selectBlock; });
__webpack_require__.d(content_namespaceObject, "selectNextBlock", function() { return selectNextBlock; });
__webpack_require__.d(content_namespaceObject, "removeBlock", function() { return content_removeBlock; });
__webpack_require__.d(content_namespaceObject, "getSelectionBlock", function() { return getSelectionBlock; });
__webpack_require__.d(content_namespaceObject, "updateEachCharacterOfSelection", function() { return content_updateEachCharacterOfSelection; });
__webpack_require__.d(content_namespaceObject, "getSelectedBlocks", function() { return getSelectedBlocks; });
__webpack_require__.d(content_namespaceObject, "setSelectionBlockData", function() { return content_setSelectionBlockData; });
__webpack_require__.d(content_namespaceObject, "getSelectionBlockData", function() { return getSelectionBlockData; });
__webpack_require__.d(content_namespaceObject, "getSelectionBlockType", function() { return getSelectionBlockType; });
__webpack_require__.d(content_namespaceObject, "getSelectionText", function() { return getSelectionText; });
__webpack_require__.d(content_namespaceObject, "toggleSelectionBlockType", function() { return content_toggleSelectionBlockType; });
__webpack_require__.d(content_namespaceObject, "getSelectionEntityType", function() { return content_getSelectionEntityType; });
__webpack_require__.d(content_namespaceObject, "getSelectionEntityData", function() { return content_getSelectionEntityData; });
__webpack_require__.d(content_namespaceObject, "toggleSelectionEntity", function() { return content_toggleSelectionEntity; });
__webpack_require__.d(content_namespaceObject, "toggleSelectionLink", function() { return content_toggleSelectionLink; });
__webpack_require__.d(content_namespaceObject, "getSelectionInlineStyle", function() { return getSelectionInlineStyle; });
__webpack_require__.d(content_namespaceObject, "selectionHasInlineStyle", function() { return selectionHasInlineStyle; });
__webpack_require__.d(content_namespaceObject, "toggleSelectionInlineStyle", function() { return content_toggleSelectionInlineStyle; });
__webpack_require__.d(content_namespaceObject, "removeSelectionInlineStyles", function() { return content_removeSelectionInlineStyles; });
__webpack_require__.d(content_namespaceObject, "toggleSelectionAlignment", function() { return toggleSelectionAlignment; });
__webpack_require__.d(content_namespaceObject, "toggleSelectionIndent", function() { return toggleSelectionIndent; });
__webpack_require__.d(content_namespaceObject, "increaseSelectionIndent", function() { return increaseSelectionIndent; });
__webpack_require__.d(content_namespaceObject, "decreaseSelectionIndent", function() { return decreaseSelectionIndent; });
__webpack_require__.d(content_namespaceObject, "toggleSelectionColor", function() { return toggleSelectionColor; });
__webpack_require__.d(content_namespaceObject, "toggleSelectionBackgroundColor", function() { return toggleSelectionBackgroundColor; });
__webpack_require__.d(content_namespaceObject, "toggleSelectionFontSize", function() { return toggleSelectionFontSize; });
__webpack_require__.d(content_namespaceObject, "toggleSelectionLineHeight", function() { return toggleSelectionLineHeight; });
__webpack_require__.d(content_namespaceObject, "toggleSelectionFontFamily", function() { return toggleSelectionFontFamily; });
__webpack_require__.d(content_namespaceObject, "toggleSelectionLetterSpacing", function() { return toggleSelectionLetterSpacing; });
__webpack_require__.d(content_namespaceObject, "insertText", function() { return content_insertText; });
__webpack_require__.d(content_namespaceObject, "insertHTML", function() { return content_insertHTML; });
__webpack_require__.d(content_namespaceObject, "insertAtomicBlock", function() { return content_insertAtomicBlock; });
__webpack_require__.d(content_namespaceObject, "insertHorizontalLine", function() { return insertHorizontalLine; });
__webpack_require__.d(content_namespaceObject, "insertMedias", function() { return insertMedias; });
__webpack_require__.d(content_namespaceObject, "setMediaData", function() { return content_setMediaData; });
__webpack_require__.d(content_namespaceObject, "removeMedia", function() { return removeMedia; });
__webpack_require__.d(content_namespaceObject, "setMediaPosition", function() { return setMediaPosition; });
__webpack_require__.d(content_namespaceObject, "clear", function() { return content_clear; });
__webpack_require__.d(content_namespaceObject, "handleKeyCommand", function() { return content_handleKeyCommand; });
__webpack_require__.d(content_namespaceObject, "undo", function() { return content_undo; });
__webpack_require__.d(content_namespaceObject, "redo", function() { return content_redo; });

// NAMESPACE OBJECT: ./utils/base.js
var base_namespaceObject = {};
__webpack_require__.r(base_namespaceObject);
__webpack_require__.d(base_namespaceObject, "UniqueIndex", function() { return UniqueIndex; });

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(13);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(1);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(14);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(5);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(6);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(2);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(7);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(8);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(4);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(11);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ../node_modules/draft-js/dist/Draft.css
var Draft = __webpack_require__(43);

// EXTERNAL MODULE: ./assets/scss/_base.scss
var _base = __webpack_require__(45);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./languages/en.js
/* harmony default export */ var en = ({
  base: {
    remove: 'Remove',
    cancel: 'Cancel',
    confirm: 'Confirm',
    inert: 'Insert',
    width: 'Width',
    height: 'Height'
  },
  controls: {
    clear: 'Clear',
    undo: 'Undo',
    redo: 'Redo',
    fontSize: 'Font Size',
    color: 'Color',
    textColor: 'Text',
    tempColors: 'Temp Colors',
    backgroundColor: 'Background',
    bold: 'Bold',
    lineHeight: 'Line Height',
    letterSpacing: 'Letter Spacing',
    textIndent: 'Text Indent',
    increaseIndent: 'Increase Indent',
    decreaseIndent: 'Decrease Indent',
    italic: 'Italic',
    underline: 'Underline',
    strikeThrough: 'Strike Through',
    fontFamily: 'Font Family',
    textAlign: 'Text Alignment',
    alignLeft: 'Left Alignment',
    alignCenter: 'Center Alignment',
    alignRight: 'Right Alignment',
    alignJustify: 'Justify Alignment',
    floatLeft: 'Left Float',
    floatRight: 'Right Float',
    superScript: 'Super Script',
    subScript: 'Sub Script',
    removeStyles: 'Remove Styles',
    headings: 'Headings',
    header: 'Header',
    normal: 'Normal',
    orderedList: 'Ordered List',
    unorderedList: 'Unordered List',
    blockQuote: 'Quote',
    code: 'Code',
    link: 'Link',
    unlink: 'Unlink',
    hr: 'Horizontal Line',
    media: 'Media',
    mediaLibirary: 'Media Library',
    emoji: 'Emoji',
    fullscreen: 'Fullscreen',
    exitFullscreen: 'Exit Fullscreen'
  },
  linkEditor: {
    textInputPlaceHolder: 'Input link text',
    linkInputPlaceHolder: 'Input link URL',
    inputWithEnterPlaceHolder: 'Input link URL and press Enter',
    openInNewWindow: 'Open in new window',
    removeLink: 'Remove Link'
  },
  audioPlayer: {
    title: 'Play Audio'
  },
  videoPlayer: {
    title: 'Play Video',
    embedTitle: 'Embed Media'
  },
  media: {
    image: 'Image',
    video: 'Video',
    audio: 'Audio',
    embed: 'Embed'
  }
});
// CONCATENATED MODULE: ./languages/zh.js
/* harmony default export */ var zh = ({
  base: {
    remove: '删除',
    cancel: '取消',
    confirm: '确定',
    inert: '插入',
    width: '宽度',
    height: '高度'
  },
  controls: {
    clear: '清除内容',
    undo: '撤销',
    redo: '重做',
    fontSize: '字号',
    lineHeight: '行高',
    letterSpacing: '字间距',
    textIndent: '段落缩进',
    increaseIndent: '增加缩进',
    decreaseIndent: '减少缩进',
    border: '边框',
    color: '颜色',
    textColor: '文字颜色',
    backgroundColor: '背景颜色',
    tempColors: '临时颜色',
    bold: '加粗',
    italic: '斜体',
    underline: '下划线',
    strikeThrough: '删除线',
    fontFamily: '字体',
    textAlign: '文本对齐',
    alignLeft: '居左',
    alignCenter: '居中',
    alignRight: '居右',
    alignJustify: '两端',
    floatLeft: '左浮动',
    floatRight: '右浮动',
    superScript: '上标',
    subScript: '下标',
    removeStyles: '清除样式',
    headings: '标题',
    header: '标题',
    normal: '常规',
    orderedList: '有序列表',
    unorderedList: '无序列表',
    blockQuote: '引用',
    code: '代码',
    link: '链接',
    unlink: '清除链接',
    hr: '水平线',
    media: '媒体',
    mediaLibirary: '媒体库',
    emoji: '小表情',
    fullscreen: '全屏',
    exitFullscreen: '退出全屏'
  },
  linkEditor: {
    textInputPlaceHolder: '输入链接文字',
    linkInputPlaceHolder: '输入链接地址',
    inputWithEnterPlaceHolder: '输入链接地址并回车',
    openInNewWindow: '在新窗口打开',
    removeLink: '移除链接'
  },
  audioPlayer: {
    title: '播放音频文件'
  },
  videoPlayer: {
    title: '播放视频文件',
    embedTitle: '嵌入式媒体'
  },
  media: {
    image: '图像',
    video: '视频',
    audio: '音频',
    embed: '嵌入式媒体'
  }
});
// CONCATENATED MODULE: ./languages/index.js


/* harmony default export */ var languages = ({
  en: en,
  zh: zh
});
// EXTERNAL MODULE: external "braft-finder"
var external_braft_finder_ = __webpack_require__(17);
var external_braft_finder_default = /*#__PURE__*/__webpack_require__.n(external_braft_finder_);

// CONCATENATED MODULE: ./utils/color.js
var _namedColors = {
  aliceblue: '#f0f8ff',
  antiquewhite: '#faebd7',
  aqua: '#00ffff',
  aquamarine: '#7fffd4',
  azure: '#f0ffff',
  beige: '#f5f5dc',
  bisque: '#ffe4c4',
  black: '#000000',
  blanchedalmond: '#ffebcd',
  blue: '#0000ff',
  blueviolet: '#8a2be2',
  brown: '#a52a2a',
  burlywood: '#deb887',
  cadetblue: '#5f9ea0',
  chartreuse: '#7fff00',
  chocolate: '#d2691e',
  coral: '#ff7f50',
  cornflowerblue: '#6495ed',
  cornsilk: '#fff8dc',
  crimson: '#dc143c',
  cyan: '#00ffff',
  darkblue: '#00008b',
  darkcyan: '#008b8b',
  darkgoldenrod: '#b8860b',
  darkgray: '#a9a9a9',
  darkgreen: '#006400',
  darkkhaki: '#bdb76b',
  darkmagenta: '#8b008b',
  darkolivegreen: '#556b2f',
  darkorange: '#ff8c00',
  darkorchid: '#9932cc',
  darkred: '#8b0000',
  darksalmon: '#e9967a',
  darkseagreen: '#8fbc8f',
  darkslateblue: '#483d8b',
  darkslategray: '#2f4f4f',
  darkturquoise: '#00ced1',
  darkviolet: '#9400d3',
  deeppink: '#ff1493',
  deepskyblue: '#00bfff',
  dimgray: '#696969',
  dodgerblue: '#1e90ff',
  firebrick: '#b22222',
  floralwhite: '#fffaf0',
  forestgreen: '#228b22',
  fuchsia: '#ff00ff',
  gainsboro: '#dcdcdc',
  ghostwhite: '#f8f8ff',
  gold: '#ffd700',
  goldenrod: '#daa520',
  gray: '#808080',
  green: '#008000',
  greenyellow: '#adff2f',
  honeydew: '#f0fff0',
  hotpink: '#ff69b4',
  'indianred ': '#cd5c5c',
  indigo: '#4b0082',
  ivory: '#fffff0',
  khaki: '#f0e68c',
  lavender: '#e6e6fa',
  lavenderblush: '#fff0f5',
  lawngreen: '#7cfc00',
  lemonchiffon: '#fffacd',
  lightblue: '#add8e6',
  lightcoral: '#f08080',
  lightcyan: '#e0ffff',
  lightgoldenrodyellow: '#fafad2',
  lightgrey: '#d3d3d3',
  lightgreen: '#90ee90',
  lightpink: '#ffb6c1',
  lightsalmon: '#ffa07a',
  lightseagreen: '#20b2aa',
  lightskyblue: '#87cefa',
  lightslategray: '#778899',
  lightsteelblue: '#b0c4de',
  lightyellow: '#ffffe0',
  lime: '#00ff00',
  limegreen: '#32cd32',
  linen: '#faf0e6',
  magenta: '#ff00ff',
  maroon: '#800000',
  mediumaquamarine: '#66cdaa',
  mediumblue: '#0000cd',
  mediumorchid: '#ba55d3',
  mediumpurple: '#9370d8',
  mediumseagreen: '#3cb371',
  mediumslateblue: '#7b68ee',
  mediumspringgreen: '#00fa9a',
  mediumturquoise: '#48d1cc',
  mediumvioletred: '#c71585',
  midnightblue: '#191970',
  mintcream: '#f5fffa',
  mistyrose: '#ffe4e1',
  moccasin: '#ffe4b5',
  navajowhite: '#ffdead',
  navy: '#000080',
  oldlace: '#fdf5e6',
  olive: '#808000',
  olivedrab: '#6b8e23',
  orange: '#ffa500',
  orangered: '#ff4500',
  orchid: '#da70d6',
  palegoldenrod: '#eee8aa',
  palegreen: '#98fb98',
  paleturquoise: '#afeeee',
  palevioletred: '#d87093',
  papayawhip: '#ffefd5',
  peachpuff: '#ffdab9',
  peru: '#cd853f',
  pink: '#ffc0cb',
  plum: '#dda0dd',
  powderblue: '#b0e0e6',
  purple: '#800080',
  rebeccapurple: '#663399',
  red: '#ff0000',
  rosybrown: '#bc8f8f',
  royalblue: '#4169e1',
  saddlebrown: '#8b4513',
  salmon: '#fa8072',
  sandybrown: '#f4a460',
  seagreen: '#2e8b57',
  seashell: '#fff5ee',
  sienna: '#a0522d',
  silver: '#c0c0c0',
  skyblue: '#87ceeb',
  slateblue: '#6a5acd',
  slategray: '#708090',
  snow: '#fffafa',
  springgreen: '#00ff7f',
  steelblue: '#4682b4',
  tan: '#d2b48c',
  teal: '#008080',
  thistle: '#d8bfd8',
  tomato: '#ff6347',
  turquoise: '#40e0d0',
  violet: '#ee82ee',
  wheat: '#f5deb3',
  white: '#ffffff',
  whitesmoke: '#f5f5f5',
  yellow: '#ffff00',
  yellowgreen: '#9acd32'
};

var _getHexColor = function _getHexColor(color) {
  color = color.replace('color:', '').replace(';', '').replace(' ', '');

  if (/^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(color)) {
    return color;
  } else if (namedColors[color]) {
    return namedColors[color];
  } else if (color.indexOf('rgb') === 0) {
    var rgbArray = color.split(',');
    var convertedColor = rgbArray.length < 3 ? null : '#' + [rgbArray[0], rgbArray[1], rgbArray[2]].map(function (x) {
      var hex = parseInt(x.replace(/\D/g, ''), 10).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    }).join('');
    return /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(convertedColor) ? convertedColor : null;
  } else {
    return null;
  }
};

var namedColors = _namedColors;
var color_getHexColor = _getHexColor;
var detectColorsFromHTMLString = function detectColorsFromHTMLString(html) {
  return typeof html !== 'string' ? [] : (html.match(/color:[^;]{3,24};/g) || []).map(color_getHexColor).filter(function (color) {
    return color;
  });
};
var detectColorsFromDraftState = function detectColorsFromDraftState(draftState) {
  var result = [];

  if (!draftState || !draftState.blocks || !draftState.blocks.length) {
    return result;
  }

  draftState.blocks.forEach(function (block) {
    if (block && block.inlineStyleRanges && block.inlineStyleRanges.length) {
      block.inlineStyleRanges.forEach(function (inlineStyle) {
        if (inlineStyle.style && inlineStyle.style.indexOf('COLOR-') >= 0) {
          result.push('#' + inlineStyle.style.split('COLOR-')[1]);
        }
      });
    }
  });
  return result.filter(function (color) {
    return color;
  });
};
// EXTERNAL MODULE: external "draft-js"
var external_draft_js_ = __webpack_require__(3);

// EXTERNAL MODULE: external "draftjs-utils"
var external_draftjs_utils_ = __webpack_require__(12);

// EXTERNAL MODULE: external "draft-convert"
var external_draft_convert_ = __webpack_require__(15);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(9);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./covert/configs.jsx





var getStyleValue = function getStyleValue(style) {
  return style.split('-')[1];
};

var defaultUnitExportFn = function defaultUnitExportFn(unit) {
  return unit + 'px';
};

var defaultUnitImportFn = function defaultUnitImportFn(unit) {
  return unit.replace('px', '');
};

var ignoredNodeAttributes = ['style'];
var ignoredEntityNodeAttributes = ['style', 'href', 'target', 'alt', 'title', 'id', 'controls', 'autoplay', 'loop', 'poster'];

var spreadNodeAttributes = function spreadNodeAttributes(attributesObject) {
  return Object.keys(attributesObject).reduce(function (attributeString, attributeName) {
    return "".concat(attributeString, " ").concat(attributeName, "=\"").concat(attributesObject[attributeName], "\"");
  }, '').replace(/^\s$/, '');
};

var defaultFontFamilies = [{
  name: 'Araial',
  family: 'Arial, Helvetica, sans-serif'
}, {
  name: 'Georgia',
  family: 'Georgia, serif'
}, {
  name: 'Impact',
  family: 'Impact, serif'
}, {
  name: 'Monospace',
  family: '"Courier New", Courier, monospace'
}, {
  name: 'Tahoma',
  family: "tahoma, arial, 'Hiragino Sans GB', 宋体, sans-serif"
}];
var configs_getHexColor = function getHexColor(color) {
  color = color.replace('color:', '').replace(';', '').replace(' ', '');

  if (/^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(color)) {
    return color;
  } else if (namedColors[color]) {
    return namedColors[color];
  } else if (color.indexOf('rgb') === 0) {
    var rgbArray = color.split(',');
    var convertedColor = rgbArray.length < 3 ? null : '#' + [rgbArray[0], rgbArray[1], rgbArray[2]].map(function (x) {
      var hex = parseInt(x.replace(/\D/g, ''), 10).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    }).join('');
    return /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(convertedColor) ? convertedColor : null;
  } else {
    return null;
  }
};
var blocks = {
  'header-one': 'h1',
  'header-two': 'h2',
  'header-three': 'h3',
  'header-four': 'h4',
  'header-five': 'h5',
  'header-six': 'h6',
  unstyled: 'p',
  blockquote: 'blockquote'
};
var blockTypes = Object.keys(blocks);
var blockNames = blockTypes.map(function (key) {
  return blocks[key];
});

var configs_convertAtomicBlock = function convertAtomicBlock(block, contentState, blockNodeAttributes) {
  if (!block || !block.key) {
    return /*#__PURE__*/external_react_default.a.createElement("p", null);
  }

  var contentBlock = contentState.getBlockForKey(block.key);

  var className = blockNodeAttributes.class,
      nodeAttrAsProps = objectWithoutProperties_default()(blockNodeAttributes, ["class"]);

  nodeAttrAsProps.className = className;

  if (!contentBlock) {
    return /*#__PURE__*/external_react_default.a.createElement("p", null);
  }

  var entityKey = contentBlock.getEntityAt(0);

  if (!entityKey) {
    return /*#__PURE__*/external_react_default.a.createElement("p", null);
  }

  var entity = contentState.getEntity(entityKey);
  var mediaType = entity.getType().toLowerCase();
  var _block$data = block.data,
      float = _block$data.float,
      alignment = _block$data.alignment;

  var _entity$getData = entity.getData(),
      url = _entity$getData.url,
      link = _entity$getData.link,
      link_target = _entity$getData.link_target,
      width = _entity$getData.width,
      height = _entity$getData.height,
      _entity$getData$meta = _entity$getData.meta,
      meta = _entity$getData$meta === void 0 ? {} : _entity$getData$meta;

  if (mediaType === 'image') {
    var imageWrapStyle = {};
    var styledClassName = '';

    if (float) {
      imageWrapStyle.float = float;
      styledClassName += ' float-' + float;
    } else if (alignment) {
      imageWrapStyle.textAlign = alignment;
      styledClassName += ' align-' + alignment;
    }

    if (link) {
      return /*#__PURE__*/external_react_default.a.createElement("div", {
        className: 'media-wrap image-wrap' + styledClassName,
        style: imageWrapStyle,
        "data-card-type": "image",
        "data-card-url": url,
        "data-card-meta": encodeURIComponent(JSON.stringify(meta))
      }, /*#__PURE__*/external_react_default.a.createElement("a", {
        style: {
          display: 'inline-block'
        },
        href: link,
        target: link_target
      }, /*#__PURE__*/external_react_default.a.createElement("img", extends_default()({}, nodeAttrAsProps, meta, {
        src: url,
        width: width,
        height: height,
        style: {
          width: width,
          height: height
        }
      }))));
    } else {
      return /*#__PURE__*/external_react_default.a.createElement("div", {
        className: 'media-wrap image-wrap' + styledClassName,
        style: imageWrapStyle,
        "data-card-type": "image",
        "data-card-url": url,
        "data-card-meta": encodeURIComponent(JSON.stringify(meta))
      }, /*#__PURE__*/external_react_default.a.createElement("img", extends_default()({}, nodeAttrAsProps, meta, {
        src: url,
        width: width,
        height: height,
        style: {
          width: width,
          height: height
        }
      })));
    }
  } else if (mediaType === 'audio') {
    return /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "media-wrap audio-wrap"
    }, /*#__PURE__*/external_react_default.a.createElement("audio", extends_default()({
      controls: true
    }, nodeAttrAsProps, meta, {
      src: url
    })));
  } else if (mediaType === 'video') {
    return /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "media-wrap video-wrap",
      "data-card-type": "video",
      "data-card-url": url,
      "data-card-meta": encodeURIComponent(JSON.stringify(meta))
    }, /*#__PURE__*/external_react_default.a.createElement("video", extends_default()({
      controls: true
    }, nodeAttrAsProps, meta, {
      src: url,
      width: width,
      height: height
    })));
  } else if (mediaType === 'embed') {
    return /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "media-wrap embed-wrap"
    }, /*#__PURE__*/external_react_default.a.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: url
      }
    }));
  } else if (mediaType === 'hr') {
    return /*#__PURE__*/external_react_default.a.createElement("hr", null);
  } else if (mediaType === 'attachment') {
    return /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "media-wrap attachment-wrap",
      "data-card-type": "attachment",
      "data-card-url": url,
      "data-card-meta": encodeURIComponent(JSON.stringify(meta))
    }, /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "attachment-icon attachment-icon-".concat(meta.fileType.toLowerCase())
    }, meta.fileType), /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "attachment-content"
    }, /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "attachment-content-title"
    }, meta.fileName), /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "attachment-content-desc"
    }, meta.fileSize)));
  } else {
    return /*#__PURE__*/external_react_default.a.createElement("p", null);
  }
};

var configs_entityToHTML = function entityToHTML(options) {
  return function (entity, originalText) {
    var entityExportFn = options.entityExportFn;
    var entityType = entity.type.toLowerCase();

    if (entityExportFn) {
      var customOutput = entityExportFn(entity, originalText);

      if (customOutput) {
        return customOutput;
      }
    }

    if (entityType === 'link') {
      var _ref = entity.data.nodeAttributes || {},
          className = _ref.class,
          nodeAttrAsProps = objectWithoutProperties_default()(_ref, ["class"]);

      nodeAttrAsProps.className = className;
      return /*#__PURE__*/external_react_default.a.createElement("a", extends_default()({
        href: entity.data.href,
        target: entity.data.target
      }, nodeAttrAsProps));
    }
  };
};

var configs_styleToHTML = function styleToHTML(options) {
  return function (style) {
    var unitExportFn = options.unitExportFn || defaultUnitExportFn;

    if (options.styleExportFn) {
      var customOutput = options.styleExportFn(style, options);

      if (customOutput) {
        return customOutput;
      }
    }

    style = style.toLowerCase();

    if (style === 'strikethrough') {
      return /*#__PURE__*/external_react_default.a.createElement("span", {
        style: {
          textDecoration: 'line-through'
        }
      });
    } else if (style === 'superscript') {
      return /*#__PURE__*/external_react_default.a.createElement("sup", null);
    } else if (style === 'subscript') {
      return /*#__PURE__*/external_react_default.a.createElement("sub", null);
    } else if (style.indexOf('color-') === 0) {
      return /*#__PURE__*/external_react_default.a.createElement("span", {
        style: {
          color: '#' + getStyleValue(style)
        }
      });
    } else if (style.indexOf('bgcolor-') === 0) {
      return /*#__PURE__*/external_react_default.a.createElement("span", {
        style: {
          backgroundColor: '#' + getStyleValue(style)
        }
      });
    } else if (style.indexOf('fontsize-') === 0) {
      return /*#__PURE__*/external_react_default.a.createElement("span", {
        style: {
          fontSize: unitExportFn(getStyleValue(style), 'font-size', 'html')
        }
      });
    } else if (style.indexOf('lineheight-') === 0) {
      return /*#__PURE__*/external_react_default.a.createElement("span", {
        style: {
          lineHeight: unitExportFn(getStyleValue(style), 'line-height', 'html')
        }
      });
    } else if (style.indexOf('letterspacing-') === 0) {
      return /*#__PURE__*/external_react_default.a.createElement("span", {
        style: {
          letterSpacing: unitExportFn(getStyleValue(style), 'letter-spacing', 'html')
        }
      });
    } else if (style.indexOf('fontfamily-') === 0) {
      var fontFamily = options.fontFamilies.find(function (item) {
        return item.name.toLowerCase() === getStyleValue(style);
      });
      if (!fontFamily) return;
      return /*#__PURE__*/external_react_default.a.createElement("span", {
        style: {
          fontFamily: fontFamily.family
        }
      });
    }
  };
};

var configs_blockToHTML = function blockToHTML(options) {
  return function (block) {
    var blockExportFn = options.blockExportFn,
        contentState = options.contentState;

    if (blockExportFn) {
      var customOutput = blockExportFn(contentState, block);

      if (customOutput) {
        return customOutput;
      }
    }

    var blockStyle = '';
    var blockType = block.type.toLowerCase();
    var _block$data2 = block.data,
        textAlign = _block$data2.textAlign,
        textIndent = _block$data2.textIndent,
        _block$data2$nodeAttr = _block$data2.nodeAttributes,
        nodeAttributes = _block$data2$nodeAttr === void 0 ? {} : _block$data2$nodeAttr;
    var attributeString = spreadNodeAttributes(nodeAttributes);

    if (textAlign || textIndent) {
      blockStyle = ' style="';

      if (textAlign) {
        blockStyle += "text-align:".concat(textAlign, ";");
      }

      if (textIndent && !isNaN(textIndent) && textIndent > 0) {
        blockStyle += "text-indent:".concat(textIndent * 2, "em;");
      }

      blockStyle += '"';
    }

    if (blockType === 'atomic') {
      return configs_convertAtomicBlock(block, contentState, nodeAttributes);
    } else if (blockType === 'code-block') {
      var previousBlock = contentState.getBlockBefore(block.key);
      var nextBlock = contentState.getBlockAfter(block.key);
      var previousBlockType = previousBlock && previousBlock.getType();
      var nextBlockType = nextBlock && nextBlock.getType();
      var start = '';
      var end = '';

      if (previousBlockType !== 'code-block') {
        start = "<pre".concat(attributeString, "><code>");
      } else {
        start = '';
      }

      if (nextBlockType !== 'code-block') {
        end = '</code></pre>';
      } else {
        end = '<br/>';
      }

      return {
        start: start,
        end: end
      };
    } else if (blocks[blockType]) {
      return {
        start: "<".concat(blocks[blockType]).concat(blockStyle).concat(attributeString, ">"),
        end: "</".concat(blocks[blockType], ">")
      };
    } else if (blockType === 'unordered-list-item') {
      return {
        start: "<li".concat(blockStyle).concat(attributeString, ">"),
        end: '</li>',
        nest: /*#__PURE__*/external_react_default.a.createElement("ul", null)
      };
    } else if (blockType === 'ordered-list-item') {
      return {
        start: "<li".concat(blockStyle).concat(attributeString, ">"),
        end: '</li>',
        nest: /*#__PURE__*/external_react_default.a.createElement("ol", null)
      };
    }
  };
};

var htmlToStyle = function htmlToStyle(options, source) {
  return function (nodeName, node, currentStyle) {
    if (!node || !node.style) {
      return currentStyle;
    }

    var unitImportFn = options.unitImportFn || defaultUnitImportFn;
    var newStyle = currentStyle;
    [].forEach.call(node.style, function (style) {
      if (nodeName === 'span' && style === 'color') {
        var color = configs_getHexColor(node.style.color);
        newStyle = color ? newStyle.add('COLOR-' + color.replace('#', '').toUpperCase()) : newStyle;
      } else if (nodeName === 'span' && style === 'background-color') {
        var _color = configs_getHexColor(node.style.backgroundColor);

        newStyle = _color ? newStyle.add('BGCOLOR-' + _color.replace('#', '').toUpperCase()) : newStyle;
      } else if (nodeName === 'span' && style === 'font-size') {
        newStyle = newStyle.add('FONTSIZE-' + unitImportFn(node.style.fontSize, 'font-size', source));
      } else if (nodeName === 'span' && style === 'line-height' && !isNaN(parseFloat(node.style.lineHeight, 10))) {
        newStyle = newStyle.add('LINEHEIGHT-' + unitImportFn(node.style.lineHeight, 'line-height', source));
      } else if (nodeName === 'span' && style === 'letter-spacing' && !isNaN(parseFloat(node.style.letterSpacing, 10))) {
        newStyle = newStyle.add('LETTERSPACING-' + unitImportFn(node.style.letterSpacing, 'letter-spacing', source));
      } else if (nodeName === 'span' && style === 'text-decoration') {
        if (node.style.textDecoration === 'line-through') {
          newStyle = newStyle.add('STRIKETHROUGH');
        } else if (node.style.textDecoration === 'underline') {
          newStyle = newStyle.add('UNDERLINE');
        }
      } else if (nodeName === 'span' && style === 'font-family') {
        var fontFamily = options.fontFamilies.find(function (item) {
          return item.family.toLowerCase() === node.style.fontFamily.toLowerCase();
        });
        if (!fontFamily) return;
        newStyle = newStyle.add('FONTFAMILY-' + fontFamily.name.toUpperCase());
      }
    });

    if (nodeName === 'sup') {
      newStyle = newStyle.add('SUPERSCRIPT');
    } else if (nodeName === 'sub') {
      newStyle = newStyle.add('SUBSCRIPT');
    }

    options.styleImportFn && (newStyle = options.styleImportFn(nodeName, node, newStyle, source) || newStyle);
    return newStyle;
  };
};

var htmlToEntity = function htmlToEntity(options, source) {
  return function (nodeName, node, createEntity) {
    if (options && options.entityImportFn) {
      var customInput = options.entityImportFn(nodeName, node, createEntity, source);

      if (customInput) {
        return customInput;
      }
    }

    nodeName = nodeName.toLowerCase();
    var alt = node.alt,
        title = node.title,
        id = node.id,
        controls = node.controls,
        autoplay = node.autoplay,
        loop = node.loop,
        poster = node.poster;
    var meta = {};
    var nodeAttributes = {};
    id && (meta.id = id);
    alt && (meta.alt = alt);
    title && (meta.title = title);
    controls && (meta.controls = controls);
    autoplay && (meta.autoPlay = autoplay);
    loop && (meta.loop = loop);
    poster && (meta.poster = poster);
    node.attributes && Object.keys(node.attributes).forEach(function (key) {
      var attr = node.attributes[key];
      ignoredEntityNodeAttributes.indexOf(attr.name) === -1 && (nodeAttributes[attr.name] = attr.value);
    });

    if (nodeName === 'a' && !node.querySelectorAll('img').length) {
      var href = node.getAttribute('href');
      var target = node.getAttribute('target');
      return createEntity('LINK', 'MUTABLE', {
        href: href,
        target: target,
        nodeAttributes: nodeAttributes
      });
    } else if (nodeName === 'audio') {
      return createEntity('AUDIO', 'IMMUTABLE', {
        url: node.getAttribute('src'),
        meta: meta,
        nodeAttributes: nodeAttributes
      });
    } else if (nodeName === 'video') {
      return createEntity('VIDEO', 'IMMUTABLE', {
        url: node.getAttribute('src'),
        meta: meta,
        nodeAttributes: nodeAttributes
      });
    } else if (nodeName === 'img') {
      var parentNode = node.parentNode;
      var entityData = {
        meta: meta
      };
      var _node$style = node.style,
          width = _node$style.width,
          height = _node$style.height;
      entityData.url = node.getAttribute('src');
      width && (entityData.width = width);
      height && (entityData.height = height);

      if (parentNode.nodeName.toLowerCase() === 'a') {
        entityData.link = parentNode.getAttribute('href');
        entityData.link_target = parentNode.getAttribute('target');
      }

      return createEntity('IMAGE', 'IMMUTABLE', entityData);
    } else if (nodeName === 'hr') {
      return createEntity('HR', 'IMMUTABLE', {});
    } else if (node && node.classList && node.classList.contains('attachment-wrap')) {
      var _entityData = {
        url: node.getAttribute('data-card-url') || ''
      };

      try {
        _entityData.meta = JSON.parse(decodeURIComponent(node.getAttribute('data-card-meta') || ''));
      } catch (e) {
        console.error(e);
        _entityData.meta = {};
      }

      return createEntity('ATTACHMENT', 'IMMUTABLE', _entityData);
    } else if (node.parentNode && node.parentNode.classList.contains('embed-wrap')) {
      var embedContent = node.innerHTML || node.outerHTML;

      if (embedContent) {
        return createEntity('EMBED', 'IMMUTABLE', {
          url: embedContent
        });
      }
    }
  };
};

var htmlToBlock = function htmlToBlock(options, source) {
  return function (nodeName, node) {
    if (options && options.blockImportFn) {
      var customInput = options.blockImportFn(nodeName, node, source);

      if (customInput) {
        return customInput;
      }
    }

    var nodeAttributes = {};
    var nodeStyle = node.style || {};
    node.attributes && Object.keys(node.attributes).forEach(function (key) {
      var attr = node.attributes[key];
      ignoredNodeAttributes.indexOf(attr.name) === -1 && (nodeAttributes[attr.name] = attr.value);
    });

    if (node.classList && node.classList.contains('media-wrap')) {
      if (node.classList.contains('attachment-wrap')) {
        node.innerHTML = '';
      }

      return {
        type: 'atomic',
        data: {
          nodeAttributes: nodeAttributes,
          float: nodeStyle.float,
          alignment: nodeStyle.textAlign
        }
      };
    } else if (nodeName === 'img') {
      return {
        type: 'atomic',
        data: {
          nodeAttributes: nodeAttributes,
          float: nodeStyle.float,
          alignment: nodeStyle.textAlign
        }
      };
    } else if (nodeName === 'hr') {
      return {
        type: 'atomic',
        data: {
          nodeAttributes: nodeAttributes
        }
      };
    } else if (nodeName === 'pre') {
      node.innerHTML = node.innerHTML.replace(/<code(.*?)>/g, '').replace(/<\/code>/g, '');
      return {
        type: 'code-block',
        data: {
          nodeAttributes: nodeAttributes
        }
      };
    } else if (blockNames.indexOf(nodeName) !== -1) {
      var blockData = {
        nodeAttributes: nodeAttributes
      };

      if (nodeStyle.textAlign) {
        blockData.textAlign = nodeStyle.textAlign;
      }

      if (nodeStyle.textIndent) {
        blockData.textIndent = /^\d+em$/.test(nodeStyle.textIndent) ? Math.ceil(parseInt(nodeStyle.textIndent, 10) / 2) : 1;
      }

      return {
        type: blockTypes[blockNames.indexOf(nodeName)],
        data: blockData
      };
    }
  };
};

var getToHTMLConfig = function getToHTMLConfig(options) {
  return {
    styleToHTML: configs_styleToHTML(options),
    entityToHTML: configs_entityToHTML(options),
    blockToHTML: configs_blockToHTML(options)
  };
};
var getFromHTMLConfig = function getFromHTMLConfig(options) {
  var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'unknow';
  return {
    htmlToStyle: htmlToStyle(options, source),
    htmlToEntity: htmlToEntity(options, source),
    htmlToBlock: htmlToBlock(options, source)
  };
};
// CONCATENATED MODULE: ./covert/index.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var defaultConvertOptions = {
  fontFamilies: defaultFontFamilies
};
var covert_convertRawToHTML = function convertRawToHTML(rawContent, options) {
  options = _objectSpread(_objectSpread({}, defaultConvertOptions), options);

  try {
    var contentState = Object(external_draft_js_["convertFromRaw"])(rawContent);
    options.contentState = contentState;
    return Object(external_draft_convert_["convertToHTML"])(getToHTMLConfig(options))(contentState);
  } catch (error) {
    console.warn(error);
    return '';
  }
};
var covert_convertHTMLToRaw = function convertHTMLToRaw(HTMLString, options, source) {
  options = _objectSpread(_objectSpread({}, defaultConvertOptions), options);

  try {
    var contentState = Object(external_draft_convert_["convertFromHTML"])(getFromHTMLConfig(options, source))(HTMLString);
    return Object(external_draft_js_["convertToRaw"])(contentState);
  } catch (error) {
    console.warn(error);
    return {};
  }
};
var covert_convertEditorStateToHTML = function convertEditorStateToHTML(editorState, options) {
  options = _objectSpread(_objectSpread({}, defaultConvertOptions), options);

  try {
    var contentState = editorState.getCurrentContent();
    options.contentState = contentState;
    return Object(external_draft_convert_["convertToHTML"])(getToHTMLConfig(options))(contentState);
  } catch (error) {
    console.warn(error);
    return '';
  }
};
var covert_convertHTMLToEditorState = function convertHTMLToEditorState(HTMLString, editorDecorators, options, source) {
  options = _objectSpread(_objectSpread({}, defaultConvertOptions), options);

  try {
    return external_draft_js_["EditorState"].createWithContent(Object(external_draft_convert_["convertFromHTML"])(getFromHTMLConfig(options, source))(HTMLString), editorDecorators);
  } catch (error) {
    console.warn(error);
    return external_draft_js_["EditorState"].createEmpty(editorDecorators);
  }
};
var covert_convertEditorStateToRaw = function convertEditorStateToRaw(editorState) {
  return Object(external_draft_js_["convertToRaw"])(editorState.getCurrentContent());
};
var covert_convertRawToEditorState = function convertRawToEditorState(rawContent, editorDecorators) {
  try {
    return external_draft_js_["EditorState"].createWithContent(Object(external_draft_js_["convertFromRaw"])(rawContent), editorDecorators);
  } catch (error) {
    console.warn(error);
    return external_draft_js_["EditorState"].createEmpty(editorDecorators);
  }
};
/* harmony default export */ var covert = ({
  convertRawToHTML: covert_convertRawToHTML,
  convertHTMLToRaw: covert_convertHTMLToRaw,
  convertEditorStateToHTML: covert_convertEditorStateToHTML,
  convertHTMLToEditorState: covert_convertHTMLToEditorState,
  convertEditorStateToRaw: covert_convertEditorStateToRaw,
  convertRawToEditorState: covert_convertRawToEditorState
});
// EXTERNAL MODULE: external "immutable"
var external_immutable_ = __webpack_require__(10);
var external_immutable_default = /*#__PURE__*/__webpack_require__.n(external_immutable_);

// CONCATENATED MODULE: ./utils/content.js




var strictBlockTypes = ['atomic'];
var content_isEditorState = function isEditorState(editorState) {
  return editorState instanceof external_draft_js_["EditorState"];
};
var registerStrictBlockType = function registerStrictBlockType(blockType) {
  strictBlockTypes.indexOf(blockType) === -1 && strictBlockTypes.push(blockType);
};
var content_createEmptyEditorState = function createEmptyEditorState(editorDecorators) {
  return external_draft_js_["EditorState"].createEmpty(editorDecorators);
};
var content_createEditorState = function createEditorState(contentState, editorDecorators) {
  return external_draft_js_["EditorState"].createWithContent(contentState, editorDecorators);
};
var isSelectionCollapsed = function isSelectionCollapsed(editorState) {
  return editorState.getSelection().isCollapsed();
};
var selectionContainsBlockType = function selectionContainsBlockType(editorState, blockType) {
  return getSelectedBlocks(editorState).find(function (block) {
    return block.getType() === blockType;
  });
};
var selectionContainsStrictBlock = function selectionContainsStrictBlock(editorState) {
  return getSelectedBlocks(editorState).find(function (block) {
    return ~strictBlockTypes.indexOf(block.getType());
  });
};
var content_selectBlock = function selectBlock(editorState, block) {
  var blockKey = block.getKey();
  return external_draft_js_["EditorState"].forceSelection(editorState, new external_draft_js_["SelectionState"]({
    anchorKey: blockKey,
    anchorOffset: 0,
    focusKey: blockKey,
    focusOffset: block.getLength()
  }));
};
var selectNextBlock = function selectNextBlock(editorState, block) {
  var nextBlock = editorState.getCurrentContent().getBlockAfter(block.getKey());
  return nextBlock ? content_selectBlock(editorState, nextBlock) : editorState;
};
var content_removeBlock = function removeBlock(editorState, block) {
  var lastSelection = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var nextContentState, nextEditorState;
  var blockKey = block.getKey();
  nextContentState = external_draft_js_["Modifier"].removeRange(editorState.getCurrentContent(), new external_draft_js_["SelectionState"]({
    anchorKey: blockKey,
    anchorOffset: 0,
    focusKey: blockKey,
    focusOffset: block.getLength()
  }), 'backward');
  nextContentState = external_draft_js_["Modifier"].setBlockType(nextContentState, nextContentState.getSelectionAfter(), 'unstyled');
  nextEditorState = external_draft_js_["EditorState"].push(editorState, nextContentState, 'remove-range');
  return external_draft_js_["EditorState"].forceSelection(nextEditorState, lastSelection || nextContentState.getSelectionAfter());
};
var getSelectionBlock = function getSelectionBlock(editorState) {
  return editorState.getCurrentContent().getBlockForKey(editorState.getSelection().getAnchorKey());
};
var content_updateEachCharacterOfSelection = function updateEachCharacterOfSelection(editorState, callback) {
  var selectionState = editorState.getSelection();
  var contentState = editorState.getCurrentContent();
  var contentBlocks = contentState.getBlockMap();
  var selectedBlocks = getSelectedBlocks(editorState);

  if (selectedBlocks.length === 0) {
    return editorState;
  }

  var startKey = selectionState.getStartKey();
  var startOffset = selectionState.getStartOffset();
  var endKey = selectionState.getEndKey();
  var endOffset = selectionState.getEndOffset();
  var nextContentBlocks = contentBlocks.map(function (block) {
    if (selectedBlocks.indexOf(block) === -1) {
      return block;
    }

    var blockKey = block.getKey();
    var charactersList = block.getCharacterList();
    var nextCharactersList = null;

    if (blockKey === startKey && blockKey === endKey) {
      nextCharactersList = charactersList.map(function (character, index) {
        if (index >= startOffset && index < endOffset) {
          return callback(character);
        }

        return character;
      });
    } else if (blockKey === startKey) {
      nextCharactersList = charactersList.map(function (character, index) {
        if (index >= startOffset) {
          return callback(character);
        }

        return character;
      });
    } else if (blockKey === endKey) {
      nextCharactersList = charactersList.map(function (character, index) {
        if (index < endOffset) {
          return callback(character);
        }

        return character;
      });
    } else {
      nextCharactersList = charactersList.map(function (character) {
        return callback(character);
      });
    }

    return block.merge({
      characterList: nextCharactersList
    });
  });
  return external_draft_js_["EditorState"].push(editorState, contentState.merge({
    blockMap: nextContentBlocks,
    selectionBefore: selectionState,
    selectionAfter: selectionState
  }), 'update-selection-character-list');
};
var getSelectedBlocks = function getSelectedBlocks(editorState) {
  var selectionState = editorState.getSelection();
  var contentState = editorState.getCurrentContent();
  var startKey = selectionState.getStartKey();
  var endKey = selectionState.getEndKey();
  var isSameBlock = startKey === endKey;
  var startingBlock = contentState.getBlockForKey(startKey);
  var selectedBlocks = [startingBlock];

  if (!isSameBlock) {
    var blockKey = startKey;

    while (blockKey !== endKey) {
      var nextBlock = contentState.getBlockAfter(blockKey);
      selectedBlocks.push(nextBlock);
      blockKey = nextBlock.getKey();
    }
  }

  return selectedBlocks;
};
var content_setSelectionBlockData = function setSelectionBlockData(editorState, blockData, override) {
  var newBlockData = override ? blockData : Object.assign({}, getSelectionBlockData(editorState).toJS(), blockData);
  Object.keys(newBlockData).forEach(function (key) {
    if (newBlockData.hasOwnProperty(key) && newBlockData[key] === undefined) {
      delete newBlockData[key];
    }
  });
  return Object(external_draftjs_utils_["setBlockData"])(editorState, newBlockData);
};
var getSelectionBlockData = function getSelectionBlockData(editorState, name) {
  var blockData = getSelectionBlock(editorState).getData();
  return name ? blockData.get(name) : blockData;
};
var getSelectionBlockType = function getSelectionBlockType(editorState) {
  return getSelectionBlock(editorState).getType();
};
var getSelectionText = function getSelectionText(editorState) {
  var selectionState = editorState.getSelection();
  var contentState = editorState.getCurrentContent();

  if (selectionState.isCollapsed() || getSelectionBlockType(editorState) === 'atomic') {
    return '';
  }

  var anchorKey = selectionState.getAnchorKey();
  var currentContentBlock = contentState.getBlockForKey(anchorKey);
  var start = selectionState.getStartOffset();
  var end = selectionState.getEndOffset();
  return currentContentBlock.getText().slice(start, end);
};
var content_toggleSelectionBlockType = function toggleSelectionBlockType(editorState, blockType) {
  if (selectionContainsStrictBlock(editorState)) {
    return editorState;
  }

  return external_draft_js_["RichUtils"].toggleBlockType(editorState, blockType);
};
var content_getSelectionEntityType = function getSelectionEntityType(editorState) {
  var entityKey = Object(external_draftjs_utils_["getSelectionEntity"])(editorState);

  if (entityKey) {
    var entity = editorState.getCurrentContent().getEntity(entityKey);
    return entity ? entity.get('type') : null;
  }

  return null;
};
var content_getSelectionEntityData = function getSelectionEntityData(editorState, type) {
  var entityKey = Object(external_draftjs_utils_["getSelectionEntity"])(editorState);

  if (entityKey) {
    var entity = editorState.getCurrentContent().getEntity(entityKey);

    if (entity && entity.get('type') === type) {
      return entity.getData();
    } else {
      return {};
    }
  } else {
    return {};
  }
};
var content_toggleSelectionEntity = function toggleSelectionEntity(editorState, entity) {
  var contentState = editorState.getCurrentContent();
  var selectionState = editorState.getSelection();

  if (selectionState.isCollapsed() || getSelectionBlockType(editorState) === 'atomic') {
    return editorState;
  }

  if (!entity || !entity.type || content_getSelectionEntityType(editorState) === entity.type) {
    return external_draft_js_["EditorState"].push(editorState, external_draft_js_["Modifier"].applyEntity(contentState, selectionState, null), 'apply-entity');
  }

  try {
    var nextContentState = contentState.createEntity(entity.type, entity.mutability, entity.data);
    var entityKey = nextContentState.getLastCreatedEntityKey();
    var nextEditorState = external_draft_js_["EditorState"].set(editorState, {
      currentContent: nextContentState
    });
    return external_draft_js_["EditorState"].push(nextEditorState, external_draft_js_["Modifier"].applyEntity(nextContentState, selectionState, entityKey), 'apply-entity');
  } catch (error) {
    console.warn(error);
    return editorState;
  }
};
var content_toggleSelectionLink = function toggleSelectionLink(editorState, href, target) {
  var contentState = editorState.getCurrentContent();
  var selectionState = editorState.getSelection();
  var entityData = {
    href: href,
    target: target
  };

  if (selectionState.isCollapsed() || getSelectionBlockType(editorState) === 'atomic') {
    return editorState;
  }

  if (href === false) {
    return external_draft_js_["RichUtils"].toggleLink(editorState, selectionState, null);
  }

  if (href === null) {
    delete entityData.href;
  }

  try {
    var nextContentState = contentState.createEntity('LINK', 'MUTABLE', entityData);
    var entityKey = nextContentState.getLastCreatedEntityKey();
    var nextEditorState = external_draft_js_["EditorState"].set(editorState, {
      currentContent: nextContentState
    });
    nextEditorState = external_draft_js_["RichUtils"].toggleLink(nextEditorState, selectionState, entityKey);
    nextEditorState = external_draft_js_["EditorState"].forceSelection(nextEditorState, selectionState.merge({
      anchorOffset: selectionState.getEndOffset(),
      focusOffset: selectionState.getEndOffset()
    }));
    nextEditorState = external_draft_js_["EditorState"].push(nextEditorState, external_draft_js_["Modifier"].insertText(nextEditorState.getCurrentContent(), nextEditorState.getSelection(), ''), 'insert-text');
    return nextEditorState;
  } catch (error) {
    console.warn(error);
    return editorState;
  }
};
var getSelectionInlineStyle = function getSelectionInlineStyle(editorState) {
  return editorState.getCurrentInlineStyle();
};
var selectionHasInlineStyle = function selectionHasInlineStyle(editorState, style) {
  return getSelectionInlineStyle(editorState).has(style.toUpperCase());
};
var content_toggleSelectionInlineStyle = function toggleSelectionInlineStyle(editorState, style) {
  var prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var nextEditorState = editorState;
  style = prefix + style.toUpperCase();

  if (prefix) {
    nextEditorState = content_updateEachCharacterOfSelection(nextEditorState, function (characterMetadata) {
      return characterMetadata.toJS().style.reduce(function (characterMetadata, characterStyle) {
        if (characterStyle.indexOf(prefix) === 0 && style !== characterStyle) {
          return external_draft_js_["CharacterMetadata"].removeStyle(characterMetadata, characterStyle);
        } else {
          return characterMetadata;
        }
      }, characterMetadata);
    });
  }

  return external_draft_js_["RichUtils"].toggleInlineStyle(nextEditorState, style);
};
var content_removeSelectionInlineStyles = function removeSelectionInlineStyles(editorState) {
  return content_updateEachCharacterOfSelection(editorState, function (characterMetadata) {
    return characterMetadata.merge({
      style: external_immutable_default.a.OrderedSet([])
    });
  });
};
var toggleSelectionAlignment = function toggleSelectionAlignment(editorState, alignment) {
  return content_setSelectionBlockData(editorState, {
    textAlign: getSelectionBlockData(editorState, 'textAlign') !== alignment ? alignment : undefined
  });
};
var toggleSelectionIndent = function toggleSelectionIndent(editorState, textIndent) {
  var maxIndent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 6;
  return textIndent < 0 || textIndent > maxIndent || isNaN(textIndent) ? editorState : content_setSelectionBlockData(editorState, {
    textIndent: textIndent || undefined
  });
};
var increaseSelectionIndent = function increaseSelectionIndent(editorState) {
  var maxIndent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  var currentIndent = getSelectionBlockData(editorState, 'textIndent') || 0;
  return toggleSelectionIndent(editorState, currentIndent + 1, maxIndent);
};
var decreaseSelectionIndent = function decreaseSelectionIndent(editorState, maxIndent) {
  var currentIndent = getSelectionBlockData(editorState, 'textIndent') || 0;
  return toggleSelectionIndent(editorState, currentIndent - 1, maxIndent);
};
var toggleSelectionColor = function toggleSelectionColor(editorState, color) {
  return content_toggleSelectionInlineStyle(editorState, color.replace('#', ''), 'COLOR-');
};
var toggleSelectionBackgroundColor = function toggleSelectionBackgroundColor(editorState, color) {
  return content_toggleSelectionInlineStyle(editorState, color.replace('#', ''), 'BGCOLOR-');
};
var toggleSelectionFontSize = function toggleSelectionFontSize(editorState, fontSize) {
  return content_toggleSelectionInlineStyle(editorState, fontSize, 'FONTSIZE-');
};
var toggleSelectionLineHeight = function toggleSelectionLineHeight(editorState, lineHeight) {
  return content_toggleSelectionInlineStyle(editorState, lineHeight, 'LINEHEIGHT-');
};
var toggleSelectionFontFamily = function toggleSelectionFontFamily(editorState, fontFamily) {
  return content_toggleSelectionInlineStyle(editorState, fontFamily, 'FONTFAMILY-');
};
var toggleSelectionLetterSpacing = function toggleSelectionLetterSpacing(editorState, letterSpacing) {
  return content_toggleSelectionInlineStyle(editorState, letterSpacing, 'LETTERSPACING-');
};
var content_insertText = function insertText(editorState, text, inlineStyle, entity) {
  var selectionState = editorState.getSelection();
  var currentSelectedBlockType = getSelectionBlockType(editorState);

  if (currentSelectedBlockType === 'atomic') {
    return editorState;
  }

  var entityKey;
  var contentState = editorState.getCurrentContent();

  if (entity && entity.type) {
    contentState = contentState.createEntity(entity.type, entity.mutability || 'MUTABLE', entity.data);
    entityKey = contentState.getLastCreatedEntityKey();
  }

  if (!selectionState.isCollapsed()) {
    return external_draft_js_["EditorState"].push(editorState, external_draft_js_["Modifier"].replaceText(contentState, selectionState, text, inlineStyle, entityKey), 'replace-text');
  } else {
    return external_draft_js_["EditorState"].push(editorState, external_draft_js_["Modifier"].insertText(contentState, selectionState, text, inlineStyle, entityKey), 'insert-text');
  }
};
var content_insertHTML = function insertHTML(editorState, htmlString, source) {
  if (!htmlString) {
    return editorState;
  }

  var selectionState = editorState.getSelection();
  var contentState = editorState.getCurrentContent();
  var options = editorState.convertOptions || {};

  try {
    var _convertFromRaw = Object(external_draft_js_["convertFromRaw"])(covert_convertHTMLToRaw(htmlString, options, source)),
        blockMap = _convertFromRaw.blockMap;

    return external_draft_js_["EditorState"].push(editorState, external_draft_js_["Modifier"].replaceWithFragment(contentState, selectionState, blockMap), 'insert-fragment');
  } catch (error) {
    console.warn(error);
    return editorState;
  }
};
var content_insertAtomicBlock = function insertAtomicBlock(editorState, type) {
  var immutable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  if (selectionContainsStrictBlock(editorState)) {
    return insertAtomicBlock(selectNextBlock(editorState, getSelectionBlock(editorState)), type, immutable, data);
  }

  var selectionState = editorState.getSelection();
  var contentState = editorState.getCurrentContent();

  if (!selectionState.isCollapsed() || getSelectionBlockType(editorState) === 'atomic') {
    return editorState;
  }

  var contentStateWithEntity = contentState.createEntity(type, immutable ? 'IMMUTABLE' : 'MUTABLE', data);
  var entityKey = contentStateWithEntity.getLastCreatedEntityKey();
  var newEditorState = external_draft_js_["AtomicBlockUtils"].insertAtomicBlock(editorState, entityKey, ' ');
  return newEditorState;
};
var insertHorizontalLine = function insertHorizontalLine(editorState) {
  return content_insertAtomicBlock(editorState, 'HR');
};
var insertMedias = function insertMedias(editorState) {
  var medias = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (!medias.length) {
    return editorState;
  }

  return medias.reduce(function (editorState, media) {
    var url = media.url,
        link = media.link,
        link_target = media.link_target,
        name = media.name,
        type = media.type,
        width = media.width,
        height = media.height,
        meta = media.meta;
    return content_insertAtomicBlock(editorState, type, true, {
      url: url,
      link: link,
      link_target: link_target,
      name: name,
      type: type,
      width: width,
      height: height,
      meta: meta
    });
  }, editorState);
};
var content_setMediaData = function setMediaData(editorState, entityKey, data) {
  return external_draft_js_["EditorState"].push(editorState, editorState.getCurrentContent().mergeEntityData(entityKey, data), 'change-block-data');
};
var removeMedia = function removeMedia(editorState, mediaBlock) {
  return content_removeBlock(editorState, mediaBlock);
};
var setMediaPosition = function setMediaPosition(editorState, mediaBlock, position) {
  var newPosition = {};
  var float = position.float,
      alignment = position.alignment;

  if (typeof float !== 'undefined') {
    newPosition.float = mediaBlock.getData().get('float') === float ? null : float;
  }

  if (typeof alignment !== 'undefined') {
    newPosition.alignment = mediaBlock.getData().get('alignment') === alignment ? null : alignment;
  }

  return content_setSelectionBlockData(content_selectBlock(editorState, mediaBlock), newPosition);
};
var content_clear = function clear(editorState) {
  var contentState = editorState.getCurrentContent();
  var firstBlock = contentState.getFirstBlock();
  var lastBlock = contentState.getLastBlock();
  var allSelected = new external_draft_js_["SelectionState"]({
    anchorKey: firstBlock.getKey(),
    anchorOffset: 0,
    focusKey: lastBlock.getKey(),
    focusOffset: lastBlock.getLength(),
    hasFocus: true
  });
  return external_draft_js_["RichUtils"].toggleBlockType(external_draft_js_["EditorState"].push(editorState, external_draft_js_["Modifier"].removeRange(contentState, allSelected, 'backward'), 'remove-range'), 'unstyled');
};
var content_handleKeyCommand = function handleKeyCommand(editorState, command) {
  return external_draft_js_["RichUtils"].handleKeyCommand(editorState, command);
};
var content_undo = function undo(editorState) {
  return external_draft_js_["EditorState"].undo(editorState);
};
var content_redo = function redo(editorState) {
  return external_draft_js_["EditorState"].redo(editorState);
};
// CONCATENATED MODULE: ./configs/keybindings.js
 // TODO
// 允许自定义的快捷键设置

/* harmony default export */ var keybindings = (function (customKeyBindingFn) {
  return function (event) {
    if (event.keyCode === 83 && (external_draft_js_["KeyBindingUtil"].hasCommandModifier(event) || external_draft_js_["KeyBindingUtil"].isCtrlKeyCommand(event))) {
      return 'braft-save';
    }

    if (customKeyBindingFn) {
      return customKeyBindingFn(event) || Object(external_draft_js_["getDefaultKeyBinding"])(event);
    }

    return Object(external_draft_js_["getDefaultKeyBinding"])(event);
  };
});
// CONCATENATED MODULE: ./configs/props.js
/* harmony default export */ var configs_props = ({
  language: 'zh',
  controls: ['undo', 'redo', 'separator', 'font-size', 'line-height', 'letter-spacing', 'separator', 'text-color', 'bold', 'italic', 'underline', 'strike-through', 'separator', 'superscript', 'subscript', 'remove-styles', 'emoji', 'separator', 'text-indent', 'text-align', 'separator', 'headings', 'list-ul', 'list-ol', 'blockquote', 'code', 'separator', 'media', 'link', 'table', 'split', 'hr', 'separator', 'clear', 'separator', 'fullscreen'],
  excludeControls: [],
  extendControls: [],
  extendAtomics: [],
  componentBelowControlBar: null,
  media: {
    pasteImage: true,
    imagePasteLimit: 5,
    image: true,
    video: true,
    audio: true,
    uploadFn: null,
    validateFn: null,
    onBeforeDeselect: null,
    onDeselect: null,
    onBeforeSelect: null,
    onSelect: null,
    onBeforeRemove: null,
    onRemove: null,
    onCancel: null,
    onFileSelect: null,
    onBeforeInsert: null,
    onInsert: null,
    onChange: null,
    accepts: {
      image: 'image/png,image/jpeg,image/gif,image/webp,image/apng,image/svg',
      video: 'video/mp4',
      audio: 'audio/mp3'
    },
    externals: {
      audio: true,
      video: true,
      image: true,
      embed: true
    }
  },
  imageControls: ['float-left', 'float-right', 'align-left', 'align-center', 'align-right', 'link', 'size', 'remove'],
  imageResizable: true,
  colors: ['#000000', '#333333', '#666666', '#999999', '#cccccc', '#ffffff', '#61a951', '#16a085', '#07a9fe', '#003ba5', '#8e44ad', '#f32784', '#c0392b', '#d35400', '#f39c12', '#fdda00'],
  colorPicker: null,
  colorPickerTheme: 'dark',
  colorPickerAutoHide: true,
  codeTabIndents: 2,
  headings: ['header-one', 'header-two', 'header-three', 'header-four', 'header-five', 'header-six', 'unstyled'],
  textAligns: ['left', 'center', 'right', 'justify'],
  textBackgroundColor: true,
  allowInsertLinkText: false,
  defaultLinkTarget: '',
  letterSpacings: [0, 1, 2, 3, 4, 5, 6],
  lineHeights: [1, 1.2, 1.5, 1.75, 2, 2.5, 3, 4],
  fontSizes: [12, 14, 16, 18, 20, 24, 28, 30, 32, 36, 40, 48, 56, 64, 72, 96, 120, 144],
  fontFamilies: [{
    name: 'Arial',
    family: 'Arial, Helvetica, sans-serif'
  }, {
    name: 'Georgia',
    family: 'Georgia, serif'
  }, {
    name: 'Impact',
    family: 'Impact, serif'
  }, {
    name: 'Monospace',
    family: '"Courier New", Courier, monospace'
  }, {
    name: 'Tahoma',
    family: 'tahoma, arial, "Hiragino Sans GB", 宋体, sans-serif'
  }],
  converts: {
    unitExportFn: function unitExportFn(value, type) {
      return type === 'line-height' ? value : "".concat(value, "px");
    }
  },
  emojis: ['🤣', '🙌', '💚', '💛', '👏', '😉', '💯', '💕', '💞', '💘', '💙', '💝', '🖤', '💜', '❤️', '😍', '😻', '💓', '💗', '😋', '😇', '😂', '😹', '😘', '💖', '😁', '😀', '🤞', '😲', '😄', '😊', '👍', '😌', '😃', '😅', '✌️', '🤗', '💋', '😗', '😽', '😚', '🤠', '😙', '😺', '👄', '😸', '😏', '😼', '👌', '😎', '😆', '😛', '🙏', '🤝', '🙂', '🤑', '😝', '😐', '😑', '🤤', '😤', '🙃', '🤡', '😶', '😪', '😴', '😵', '😓', '👊', '😦', '😷', '🤐', '😜', '🤓', '👻', '😥', '🙄', '🤔', '🤒', '🙁', '😔', '😯', '☹️', '☠️', '😰', '😩', '😖', '😕', '😒', '😣', '😢', '😮', '😿', '🤧', '😫', '🤥', '😞', '😬', '👎', '💀', '😳', '😨', '🤕', '🤢', '😱', '😭', '😠', '😈', '😧', '💔', '😟', '🙀', '💩', '👿', '😡', '😾', '🖕'],
  stripPastedStyles: false,
  triggerChangeOnMount: true,
  className: '',
  style: {},
  controlBarClassName: '',
  controlBarStyle: {},
  contentClassName: '',
  contentStyle: {},
  draftProps: {},
  hooks: {},
  onChange: null,
  onFocus: null,
  onBlur: null,
  onTab: null,
  onDelete: null,
  onSave: null,
  fixPlaceholder: false
});
// CONCATENATED MODULE: ./utils/base.js
var braftUniqueIndex = 0;
var UniqueIndex = function UniqueIndex() {
  return braftUniqueIndex += 1;
};
// CONCATENATED MODULE: ./utils/index.js




// EXTERNAL MODULE: ../node_modules/draft-js/lib/getFragmentFromSelection.js
var getFragmentFromSelection = __webpack_require__(24);
var getFragmentFromSelection_default = /*#__PURE__*/__webpack_require__.n(getFragmentFromSelection);

// CONCATENATED MODULE: ./configs/handlers.js



function handlers_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function handlers_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { handlers_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { handlers_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var handlers_keyCommandHandlers = function keyCommandHandlers(command, editorState, editor) {
  if (editor.editorProps.handleKeyCommand && editor.editorProps.handleKeyCommand(command, editorState, editor) === 'handled') {
    return 'handled';
  }

  if (command === 'braft-save') {
    editor.editorProps.onSave && editor.editorProps.onSave(editorState);
    return 'handled';
  }

  var _editor$editorProps = editor.editorProps,
      controls = _editor$editorProps.controls,
      excludeControls = _editor$editorProps.excludeControls;
  var allowIndent = (controls.indexOf('text-indent') !== 0 || controls.find(function (item) {
    return item.key === 'text-indent';
  })) && excludeControls.indexOf('text-indent') === -1;
  var cursorStart = editorState.getSelection().getStartOffset();
  var cursorEnd = editorState.getSelection().getEndOffset();
  var cursorIsAtFirst = cursorStart === 0 && cursorEnd === 0;

  if (command === 'backspace') {
    if (editor.editorProps.onDelete && editor.editorProps.onDelete(editorState) === false) {
      return 'handled';
    }

    var blockType = content_namespaceObject.getSelectionBlockType(editorState);

    if (allowIndent && cursorIsAtFirst && blockType !== 'code-block') {
      editor.setValue(content_namespaceObject.decreaseSelectionIndent(editorState));
    }
  }

  if (command === 'tab') {
    var _blockType = content_namespaceObject.getSelectionBlockType(editorState);

    if (_blockType === 'code-block') {
      editor.setValue(content_namespaceObject.insertText(editorState, ' '.repeat(editor.editorProps.codeTabIndents)));
      return 'handled';
    } else if (_blockType === 'ordered-list-item' || _blockType === 'unordered-list-item') {
      var newEditorState = external_draft_js_["RichUtils"].onTab(event, editorState, 4);

      if (newEditorState !== editorState) {
        editor.setValue(newEditorState);
      }

      return 'handled';
    } else if (_blockType !== 'atomic' && allowIndent && cursorIsAtFirst) {
      editor.setValue(content_namespaceObject.increaseSelectionIndent(editorState));
      return 'handled';
    }
  }

  var nextEditorState = content_namespaceObject.handleKeyCommand(editorState, command);

  if (nextEditorState) {
    editor.setValue(nextEditorState);
    return 'handled';
  }

  return 'not-handled';
};
var handlers_returnHandlers = function returnHandlers(event, editorState, editor) {
  if (editor.editorProps.handleReturn && editor.editorProps.handleReturn(event, editorState, editor) === 'handled') {
    return 'handled';
  }

  var currentBlock = content_namespaceObject.getSelectionBlock(editorState);
  var currentBlockType = currentBlock.getType();

  if (currentBlockType === 'unordered-list-item' || currentBlockType === 'ordered-list-item') {
    if (currentBlock.getLength() === 0) {
      editor.setValue(content_namespaceObject.toggleSelectionBlockType(editorState, 'unstyled'));
      return 'handled';
    }

    return 'not-handled';
  } else if (currentBlockType === 'code-block') {
    if (event.which === 13 && (event.getModifierState('Shift') || event.getModifierState('Alt') || event.getModifierState('Control'))) {
      editor.setValue(content_namespaceObject.toggleSelectionBlockType(editorState, 'unstyled'));
      return 'handled';
    }

    return 'not-handled';
  } else if (currentBlockType === 'blockquote') {
    if (event.which === 13) {
      if (event.getModifierState('Shift') || event.getModifierState('Alt') || event.getModifierState('Control')) {
        event.which = 0;
      } else {
        editor.setValue(external_draft_js_["RichUtils"].insertSoftNewline(editorState));
        return 'handled';
      }
    }
  }

  var nextEditorState = Object(external_draftjs_utils_["handleNewLine"])(editorState, event);

  if (nextEditorState) {
    editor.setValue(nextEditorState);
    return 'handled';
  }

  return 'not-handled';
};
var beforeInputHandlers = function beforeInputHandlers(chars, editorState, editor) {
  if (editor.editorProps.handleBeforeInput && editor.editorProps.handleBeforeInput(chars, editorState, editor) === 'handled') {
    return 'handled';
  }

  return 'not-handled';
};
var handlers_compositionStartHandler = function compositionStartHandler(_, editor) {
  var editorState = editor.state.editorState;
  var selectedBlocks = content_namespaceObject.getSelectedBlocks(editorState);

  if (selectedBlocks && selectedBlocks.length > 1) {
    var nextEditorState = external_draft_js_["EditorState"].push(editorState, external_draft_js_["Modifier"].removeRange(editorState.getCurrentContent(), editorState.getSelection(), 'backward'), 'remove-range');
    editor.setValue(nextEditorState);
  }
};
var handlers_dropHandlers = function dropHandlers(selectionState, dataTransfer, editor) {
  if (editor.editorProps.readOnly || editor.editorProps.disabled) {
    return 'handled';
  }

  if (window && window.__BRAFT_DRAGING__IMAGE__) {
    var nextEditorState = external_draft_js_["EditorState"].forceSelection(editor.state.editorState, selectionState);
    nextEditorState = content_namespaceObject.insertMedias(nextEditorState, [window.__BRAFT_DRAGING__IMAGE__.mediaData]);
    nextEditorState = content_namespaceObject.removeBlock(nextEditorState, window.__BRAFT_DRAGING__IMAGE__.block, nextEditorState.getSelection());
    window.__BRAFT_DRAGING__IMAGE__ = null;
    editor.lockOrUnlockEditor(true);
    editor.setValue(nextEditorState);
    return 'handled';
  } else if (!dataTransfer || !dataTransfer.getText()) {
    return 'handled';
  }

  return 'not-handled';
};
var handlers_handleFiles = function handleFiles(files, editor) {
  var _editor$constructor$d = handlers_objectSpread(handlers_objectSpread({}, editor.constructor.defaultProps.media), editor.editorProps.media),
      pasteImage = _editor$constructor$d.pasteImage,
      validateFn = _editor$constructor$d.validateFn,
      imagePasteLimit = _editor$constructor$d.imagePasteLimit;

  pasteImage && files.slice(0, imagePasteLimit).forEach(function (file) {
    if (file && file.type.indexOf('image') > -1 && editor.braftFinder) {
      var validateResult = validateFn ? validateFn(file) : true;

      if (validateResult instanceof Promise) {
        validateResult.then(function () {
          editor.braftFinder.uploadImage(file, function (image) {
            editor.isLiving && editor.setValue(content_namespaceObject.insertMedias(editor.state.editorState, [image]));
          });
        });
      } else if (validateResult) {
        editor.braftFinder.uploadImage(file, function (image) {
          editor.isLiving && editor.setValue(content_namespaceObject.insertMedias(editor.state.editorState, [image]));
        });
      }
    }
  });

  if (files[0] && files[0].type.indexOf('image') > -1 && pasteImage) {
    return 'handled';
  }

  return 'not-handled';
};
var droppedFilesHandlers = function droppedFilesHandlers(selectionState, files, editor) {
  if (editor.editorProps.handleDroppedFiles && editor.editorProps.handleDroppedFiles(selectionState, files, editor) === 'handled') {
    return 'handled';
  }

  return handlers_handleFiles(files, editor);
};
var pastedFilesHandlers = function pastedFilesHandlers(files, editor) {
  if (editor.editorProps.handlePastedFiles && editor.editorProps.handlePastedFiles(files, editor) === 'handled') {
    return 'handled';
  }

  return handlers_handleFiles(files, editor);
};
var handlers_copyHandlers = function copyHandlers(event, editor) {
  var blockMap = getFragmentFromSelection_default()(editor.state.editorState);

  if (blockMap && blockMap.toArray) {
    try {
      var tempContentState = external_draft_js_["ContentState"].createFromBlockArray(blockMap.toArray());
      var tempEditorState = external_draft_js_["EditorState"].createWithContent(tempContentState);
      var clipboardData = event.clipboardData || window.clipboardData || event.originalEvent.clipboardData;
      tempEditorState.setConvertOptions(editor.state.editorState.convertOptions);
      clipboardData.setData('text/html', tempEditorState.toHTML());
      clipboardData.setData('text/plain', tempEditorState.toText());
      event.preventDefault();
    } catch (error) {
      console.warn(error);
    }
  }
};
var handlers_pastedTextHandlers = function pastedTextHandlers(text, html, editorState, editor) {
  if (editor.editorProps.handlePastedText && editor.editorProps.handlePastedText(text, html, editorState, editor) === 'handled') {
    return 'handled';
  }

  if (!html || editor.editorProps.stripPastedStyles) {
    return false;
  }

  var tempColors = color_namespaceObject.detectColorsFromHTMLString(html);
  editor.setState({
    tempColors: [].concat(toConsumableArray_default()(editor.state.tempColors), toConsumableArray_default()(tempColors)).filter(function (item) {
      return editor.editorProps.colors.indexOf(item) === -1;
    }).filter(function (item, index, array) {
      return array.indexOf(item) === index;
    })
  }, function () {
    editor.setValue(content_namespaceObject.insertHTML(editorState, html, 'paste'));
  });
  return 'handled';
};
// CONCATENATED MODULE: ./helpers/extension.js


function extension_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function extension_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { extension_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { extension_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// TODO
// - block-style和atomic类型的扩展支持

var extension_extensionControls = [];
var extension_extensionDecorators = [];
var extension_propInterceptors = [];
var extension_extensionBlockRenderMaps = [];
var extension_extensionBlockRendererFns = [];
var extensionInlineStyleMaps = [];
var extension_extensionInlineStyleFns = [];
var extensionEntities = [];
var inlineStyleImporters = [];
var inlineStyleExporters = [];
var blockImporters = [];
var blockExporters = [];

var filterByEditorId = function filterByEditorId(items, editorId) {
  if (!editorId) {
    return items.filter(function (item) {
      return !item.includeEditors;
    }).map(function (item) {
      return item.data;
    });
  }

  return items.map(function (item) {
    if (!item.includeEditors && !item.excludeEditors) {
      return item.data;
    }

    if (item.includeEditors) {
      return item.includeEditors.indexOf(editorId) !== -1 ? item.data : false;
    }

    if (item.excludeEditors) {
      return item.excludeEditors.indexOf(editorId) !== -1 ? false : item.data;
    }

    return false;
  }).filter(function (item) {
    return item;
  });
};

var getPropInterceptors = function getPropInterceptors(editorId) {
  return filterByEditorId(extension_propInterceptors, editorId);
};
var getExtensionControls = function getExtensionControls(editorId) {
  return filterByEditorId(extension_extensionControls, editorId);
};
var getExtensionDecorators = function getExtensionDecorators(editorId) {
  return filterByEditorId(extension_extensionDecorators, editorId, 'decorators');
};
var getExtensionBlockRenderMaps = function getExtensionBlockRenderMaps(editorId) {
  return filterByEditorId(extension_extensionBlockRenderMaps, editorId);
};
var getExtensionBlockRendererFns = function getExtensionBlockRendererFns(editorId) {
  return filterByEditorId(extension_extensionBlockRendererFns, editorId);
};
var getExtensionInlineStyleMap = function getExtensionInlineStyleMap(editorId) {
  var inlineStyleMap = {};
  filterByEditorId(extensionInlineStyleMaps, editorId).forEach(function (item) {
    inlineStyleMap[item.inlineStyleName] = item.styleMap;
  });
  return inlineStyleMap;
};
var getExtensionInlineStyleFns = function getExtensionInlineStyleFns(editorId) {
  return filterByEditorId(extension_extensionInlineStyleFns, editorId);
};
var compositeStyleImportFn = function compositeStyleImportFn(styleImportFn, editorId) {
  return function (nodeName, node, style) {
    filterByEditorId(inlineStyleImporters, editorId).forEach(function (styleImporter) {
      if (styleImporter.importer && styleImporter.importer(nodeName, node)) {
        style = style.add(styleImporter.inlineStyleName);
      }
    });
    return styleImportFn ? styleImportFn(nodeName, node, style) : style;
  };
};
var compositeStyleExportFn = function compositeStyleExportFn(styleExportFn, editorId) {
  return function (style) {
    style = style.toUpperCase();
    var result = styleExportFn ? styleExportFn(style) : undefined;

    if (result) {
      return result;
    }

    filterByEditorId(inlineStyleExporters, editorId).find(function (item) {
      if (item.inlineStyleName === style) {
        result = item.exporter;
        return true;
      }
    });
    return result;
  };
};
var compositeEntityImportFn = function compositeEntityImportFn(entityImportFn, editorId) {
  return function (nodeName, node, createEntity, source) {
    var result = entityImportFn ? entityImportFn(nodeName, node, createEntity, source) : null;

    if (result) {
      return result;
    }

    filterByEditorId(extensionEntities, editorId).find(function (entityItem) {
      var matched = entityItem.importer ? entityItem.importer(nodeName, node, source) : null;
      matched && (result = createEntity(entityItem.entityType, matched.mutability || 'MUTABLE', matched.data || {}));
      return !!matched;
    });
    return result;
  };
};
var compositeEntityExportFn = function compositeEntityExportFn(entityExportFn, editorId) {
  return function (entity, originalText) {
    var result = entityExportFn ? entityExportFn(entity, originalText) : undefined;

    if (result) {
      return result;
    }

    var entityType = entity.type.toUpperCase();
    filterByEditorId(extensionEntities, editorId).find(function (entityItem) {
      if (entityItem.entityType === entityType) {
        result = entityItem.exporter ? entityItem.exporter(entity, originalText) : undefined;
        return true;
      }
    });
    return result;
  };
};
var compositeBlockImportFn = function compositeBlockImportFn(blockImportFn, editorId) {
  return function (nodeName, node, source) {
    var result = blockImportFn ? blockImportFn(nodeName, node, source) : null;

    if (result) {
      return result;
    }

    filterByEditorId(blockImporters, editorId).find(function (blockImporter) {
      var matched = blockImporter.importer ? blockImporter.importer(nodeName, node, source) : undefined;
      matched && (result = matched);
      return !!matched;
    });
    return result;
  };
};
var compositeBlockExportFn = function compositeBlockExportFn(blockExportFn, editorId) {
  return function (contentState, block) {
    var result = blockExportFn ? blockExportFn(contentState, block) : null;

    if (result) {
      return result;
    }

    filterByEditorId(blockExporters, editorId).find(function (blockExporter) {
      var matched = blockExporter.exporter ? blockExporter.exporter(contentState, block) : undefined;
      matched && (result = matched);
      return !!matched;
    });
    return result;
  };
};

var extension_useExtension = function useExtension(extension) {
  if (extension instanceof Array) {
    extension.forEach(useExtension);
    return false;
  }

  if (!extension || !extension.type || typeof extension.type !== 'string') {
    return false;
  }

  var includeEditors = extension.includeEditors,
      excludeEditors = extension.excludeEditors;

  if (extension.type === 'control') {
    extension_extensionControls.push({
      includeEditors: includeEditors,
      excludeEditors: excludeEditors,
      data: extension.control
    });
  } else if (extension.type === 'inline-style') {
    var inlineStyleName = extension.name.toUpperCase();

    if (extension.control) {
      extension_extensionControls.push({
        includeEditors: includeEditors,
        excludeEditors: excludeEditors,
        data: extension_objectSpread({
          key: inlineStyleName,
          type: 'inline-style',
          command: inlineStyleName
        }, extension.control)
      });
    }

    if (extension.style) {
      extensionInlineStyleMaps.push({
        includeEditors: includeEditors,
        excludeEditors: excludeEditors,
        data: {
          inlineStyleName: inlineStyleName,
          styleMap: extension.style
        }
      });
    }

    if (extension.styleFn) {
      extension_extensionInlineStyleFns.push({
        includeEditors: includeEditors,
        excludeEditors: excludeEditors,
        data: {
          inlineStyleName: inlineStyleName,
          styleFn: extension.styleFn
        }
      });
    }

    if (extension.importer) {
      inlineStyleImporters.push({
        includeEditors: includeEditors,
        excludeEditors: excludeEditors,
        data: {
          inlineStyleName: inlineStyleName,
          importer: extension.importer
        }
      });
    }

    inlineStyleExporters.push({
      includeEditors: includeEditors,
      excludeEditors: excludeEditors,
      data: {
        inlineStyleName: inlineStyleName,
        exporter: extension.exporter ? extension.exporter(extension) : /*#__PURE__*/external_react_default.a.createElement("span", {
          style: extension.style
        })
      }
    });
  } else if (extension.type === 'block-style') {// TODO
  } else if (extension.type === 'entity') {
    var entityType = extension.name.toUpperCase();

    if (extension.control) {
      extension_extensionControls.push({
        includeEditors: includeEditors,
        excludeEditors: excludeEditors,
        data: typeof extension.control === 'function' ? extension.control : extension_objectSpread({
          key: entityType,
          type: 'entity',
          command: entityType,
          data: {
            mutability: extension.mutability || 'MUTABLE',
            data: extension.data || {}
          }
        }, extension.control)
      });
    }

    extensionEntities.push({
      includeEditors: includeEditors,
      excludeEditors: excludeEditors,
      data: {
        entityType: entityType,
        importer: extension.importer,
        exporter: extension.exporter
      }
    });
    extension_extensionDecorators.push({
      includeEditors: includeEditors,
      excludeEditors: excludeEditors,
      data: {
        type: 'entity',
        decorator: {
          key: entityType,
          component: extension.component
        }
      }
    });
  } else if (extension.type === 'block') {
    var blockType = extension.name;

    if (extension.renderMap) {
      extension_extensionBlockRenderMaps.push({
        includeEditors: includeEditors,
        excludeEditors: excludeEditors,
        data: {
          blockType: blockType,
          renderMap: extension.renderMap
        }
      });
    }

    if (extension.rendererFn) {
      extension_extensionBlockRendererFns.push({
        includeEditors: includeEditors,
        excludeEditors: excludeEditors,
        data: {
          blockType: blockType,
          rendererFn: extension.rendererFn
        }
      });
    }

    if (extension.importer) {
      blockImporters.push({
        includeEditors: includeEditors,
        excludeEditors: excludeEditors,
        data: {
          blockType: blockType,
          importer: extension.importer
        }
      });
    }

    if (extension.exporter) {
      blockExporters.push({
        includeEditors: includeEditors,
        excludeEditors: excludeEditors,
        data: {
          blockType: blockType,
          exporter: extension.exporter
        }
      });
    }
  } else if (extension.type === 'atomic') {// TODO
  } else if (extension.type === 'decorator') {
    var decorator = extension.decorator;

    if (decorator && decorator.strategy && decorator.component) {
      extension_extensionDecorators.push({
        includeEditors: includeEditors,
        excludeEditors: excludeEditors,
        data: {
          type: 'strategy',
          decorator: decorator
        }
      });
    } else if (decorator && decorator.getDecorations) {
      extension_extensionDecorators.push({
        includeEditors: includeEditors,
        excludeEditors: excludeEditors,
        data: {
          type: 'class',
          decorator: decorator
        }
      });
    }
  } else if (extension.type === 'prop-interception') {
    extension_propInterceptors.push({
      includeEditors: includeEditors,
      excludeEditors: excludeEditors,
      data: extension.interceptor
    });
  }
};

var createExtensibleEditor = function createExtensibleEditor(BraftEditor) {
  BraftEditor.use = extension_useExtension;
  return BraftEditor;
};
// CONCATENATED MODULE: ./renderers/block/blockRenderMap.js




/* harmony default export */ var block_blockRenderMap = (function (props, blockRenderMap) {
  var customBlockRenderMap = Object(external_immutable_["Map"])({
    atomic: {
      element: ''
    },
    'code-block': {
      element: 'code',
      wrapper: /*#__PURE__*/external_react_default.a.createElement("pre", {
        className: "braft-code-block"
      })
    }
  });

  try {
    var extensionBlockRenderMaps = getExtensionBlockRenderMaps(props.editorId);
    customBlockRenderMap = extensionBlockRenderMaps.reduce(function (customBlockRenderMap, item) {
      return customBlockRenderMap.merge(typeof item.renderMap === 'function' ? item.renderMap(props) : item.renderMap);
    }, customBlockRenderMap);

    if (blockRenderMap) {
      if (typeof blockRenderMap === 'function') {
        customBlockRenderMap = customBlockRenderMap.merge(blockRenderMap(props));
      } else {
        customBlockRenderMap = customBlockRenderMap.merge(blockRenderMap);
      }
    }

    customBlockRenderMap = external_draft_js_["DefaultDraftBlockRenderMap"].merge(customBlockRenderMap);
  } catch (error) {
    console.warn(error);
  }

  return customBlockRenderMap;
});
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(25);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./renderers/atomics/Image/style.scss
var Image_style = __webpack_require__(48);

// EXTERNAL MODULE: ../node_modules/react-circular-progressbar/dist/styles.css
var dist_styles = __webpack_require__(49);

// EXTERNAL MODULE: ./components/common/Switch/style.scss
var Switch_style = __webpack_require__(50);

// CONCATENATED MODULE: ./components/common/Switch/index.jsx


/* harmony default export */ var Switch = (function (props) {
  var active = props.active,
      _onClick = props.onClick,
      className = props.className;
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    onClick: function onClick() {
      return _onClick();
    },
    className: 'bf-switch ' + className + (active ? ' active' : '')
  });
});
// CONCATENATED MODULE: ./configs/controls.js

/* harmony default export */ var configs_controls = (function (lang, editor) {
  return [{
    key: 'undo',
    title: lang.controls.undo,
    text: /*#__PURE__*/external_react_default.a.createElement("i", {
      className: "bfi-undo"
    }),
    type: 'editor-method',
    command: 'undo'
  }, {
    key: 'redo',
    title: lang.controls.redo,
    text: /*#__PURE__*/external_react_default.a.createElement("i", {
      className: "bfi-redo"
    }),
    type: 'editor-method',
    command: 'redo'
  }, {
    key: 'remove-styles',
    title: lang.controls.removeStyles,
    text: /*#__PURE__*/external_react_default.a.createElement("i", {
      className: "bfi-format_clear"
    }),
    type: 'editor-method',
    command: 'removeSelectionInlineStyles'
  }, {
    key: 'hr',
    title: lang.controls.hr,
    text: /*#__PURE__*/external_react_default.a.createElement("i", {
      className: "bfi-hr"
    }),
    type: 'editor-method',
    command: 'insertHorizontalLine'
  }, {
    key: 'bold',
    title: lang.controls.bold,
    text: /*#__PURE__*/external_react_default.a.createElement("i", {
      className: "bfi-bold"
    }),
    type: 'inline-style',
    command: 'bold'
  }, {
    key: 'italic',
    title: lang.controls.italic,
    text: /*#__PURE__*/external_react_default.a.createElement("i", {
      className: "bfi-italic"
    }),
    type: 'inline-style',
    command: 'italic'
  }, {
    key: 'underline',
    title: lang.controls.underline,
    text: /*#__PURE__*/external_react_default.a.createElement("i", {
      className: "bfi-underlined"
    }),
    type: 'inline-style',
    command: 'underline'
  }, {
    key: 'strike-through',
    title: lang.controls.strikeThrough,
    text: /*#__PURE__*/external_react_default.a.createElement("i", {
      className: "bfi-strikethrough"
    }),
    type: 'inline-style',
    command: 'strikethrough'
  }, {
    key: 'superscript',
    title: lang.controls.superScript,
    text: /*#__PURE__*/external_react_default.a.createElement("i", {
      className: "bfi-superscript"
    }),
    type: 'inline-style',
    command: 'superscript'
  }, {
    key: 'subscript',
    title: lang.controls.subScript,
    text: /*#__PURE__*/external_react_default.a.createElement("i", {
      className: "bfi-subscript"
    }),
    type: 'inline-style',
    command: 'subscript'
  }, {
    key: 'headings',
    title: lang.controls.headings,
    type: 'headings'
  }, {
    key: 'blockquote',
    title: lang.controls.blockQuote,
    text: /*#__PURE__*/external_react_default.a.createElement("i", {
      className: "bfi-quote"
    }),
    type: 'block-type',
    command: 'blockquote'
  }, {
    key: 'code',
    title: lang.controls.code,
    text: /*#__PURE__*/external_react_default.a.createElement("i", {
      className: "bfi-code"
    }),
    type: 'block-type',
    command: 'code-block'
  }, {
    key: 'list-ul',
    title: lang.controls.unorderedList,
    text: /*#__PURE__*/external_react_default.a.createElement("i", {
      className: "bfi-list"
    }),
    type: 'block-type',
    command: 'unordered-list-item'
  }, {
    key: 'list-ol',
    title: lang.controls.orderedList,
    text: /*#__PURE__*/external_react_default.a.createElement("i", {
      className: "bfi-list-numbered"
    }),
    type: 'block-type',
    command: 'ordered-list-item'
  }, {
    key: 'link',
    title: lang.controls.link,
    type: 'link'
  }, {
    key: 'text-color',
    title: lang.controls.color,
    type: 'text-color'
  }, {
    key: 'line-height',
    title: lang.controls.lineHeight,
    type: 'line-height'
  }, {
    key: 'letter-spacing',
    title: lang.controls.letterSpacing,
    type: 'letter-spacing'
  }, {
    key: 'text-indent',
    title: lang.controls.textIndent,
    type: 'text-indent'
  }, {
    key: 'font-size',
    title: lang.controls.fontSize,
    type: 'font-size'
  }, {
    key: 'font-family',
    title: lang.controls.fontFamily,
    type: 'font-family'
  }, {
    key: 'text-align',
    title: lang.controls.textAlign,
    type: 'text-align'
  }, {
    key: 'media',
    title: lang.controls.media,
    text: /*#__PURE__*/external_react_default.a.createElement("i", {
      className: "bfi-media"
    }),
    type: 'media'
  }, {
    key: 'emoji',
    title: lang.controls.emoji,
    text: /*#__PURE__*/external_react_default.a.createElement("i", {
      className: "bfi-emoji"
    }),
    type: 'emoji'
  }, {
    key: 'clear',
    title: lang.controls.clear,
    text: /*#__PURE__*/external_react_default.a.createElement("i", {
      className: "bfi-clear_all"
    }),
    type: 'editor-method',
    command: 'clearEditorContent'
  }, {
    key: 'fullscreen',
    title: editor.state.isFullscreen ? lang.controls.exitFullscreen : lang.controls.fullscreen,
    text: /*#__PURE__*/external_react_default.a.createElement("i", {
      className: editor.state.isFullscreen ? 'bfi-fullscreen-exit' : 'bfi-fullscreen'
    }),
    type: 'editor-method',
    command: 'toggleFullscreen'
  }, {
    key: 'modal',
    type: 'modal'
  }, {
    key: 'button',
    type: 'button'
  }, {
    key: 'dropdown',
    type: 'dropdown'
  }, {
    key: 'component',
    type: 'component'
  }];
});
var imageControlItems = {
  'float-left': {
    text: /*#__PURE__*/external_react_default.a.createElement("span", {
      "data-float": "left"
    }, "\uE91E"),
    command: 'setImageFloat|left'
  },
  'float-right': {
    text: /*#__PURE__*/external_react_default.a.createElement("span", {
      "data-float": "right"
    }, "\uE914"),
    command: 'setImageFloat|right'
  },
  'align-left': {
    text: /*#__PURE__*/external_react_default.a.createElement("span", {
      "data-align": "left"
    }, "\uE027"),
    command: 'setImageAlignment|left'
  },
  'align-center': {
    text: /*#__PURE__*/external_react_default.a.createElement("span", {
      "data-align": "center"
    }, "\uE028"),
    command: 'setImageAlignment|center'
  },
  'align-right': {
    text: /*#__PURE__*/external_react_default.a.createElement("span", {
      "data-align": "right"
    }, "\uE029"),
    command: 'setImageAlignment|right'
  },
  size: {
    text: /*#__PURE__*/external_react_default.a.createElement("span", null, "\uE3C2"),
    command: 'toggleSizeEditor'
  },
  link: {
    text: /*#__PURE__*/external_react_default.a.createElement("span", null, "\uE91A"),
    command: 'toggleLinkEditor'
  },
  remove: {
    text: /*#__PURE__*/external_react_default.a.createElement("span", null, "\uE9AC"),
    command: 'removeImage'
  }
};
// CONCATENATED MODULE: ../node_modules/react-circular-progressbar/dist/index.esm.js


/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

var VIEWBOX_WIDTH = 100;
var VIEWBOX_HEIGHT = 100;
var VIEWBOX_HEIGHT_HALF = 50;
var VIEWBOX_CENTER_X = 50;
var VIEWBOX_CENTER_Y = 50;

function Path(_a) {
    var className = _a.className, counterClockwise = _a.counterClockwise, dashRatio = _a.dashRatio, pathRadius = _a.pathRadius, strokeWidth = _a.strokeWidth, style = _a.style;
    return (Object(external_react_["createElement"])("path", { className: className, style: Object.assign({}, style, getDashStyle({ pathRadius: pathRadius, dashRatio: dashRatio, counterClockwise: counterClockwise })), d: getPathDescription({
            pathRadius: pathRadius,
            counterClockwise: counterClockwise,
        }), strokeWidth: strokeWidth, fillOpacity: 0 }));
}
function getPathDescription(_a) {
    var pathRadius = _a.pathRadius, counterClockwise = _a.counterClockwise;
    var radius = pathRadius;
    var rotation = counterClockwise ? 1 : 0;
    return "\n      M " + VIEWBOX_CENTER_X + "," + VIEWBOX_CENTER_Y + "\n      m 0,-" + radius + "\n      a " + radius + "," + radius + " " + rotation + " 1 1 0," + 2 * radius + "\n      a " + radius + "," + radius + " " + rotation + " 1 1 0,-" + 2 * radius + "\n    ";
}
function getDashStyle(_a) {
    var counterClockwise = _a.counterClockwise, dashRatio = _a.dashRatio, pathRadius = _a.pathRadius;
    var diameter = Math.PI * 2 * pathRadius;
    var gapLength = (1 - dashRatio) * diameter;
    return {
        strokeDasharray: diameter + "px " + diameter + "px",
        strokeDashoffset: (counterClockwise ? -gapLength : gapLength) + "px",
    };
}

var index_esm_CircularProgressbar = (function (_super) {
    __extends(CircularProgressbar, _super);
    function CircularProgressbar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CircularProgressbar.prototype.getBackgroundPadding = function () {
        if (!this.props.background) {
            return 0;
        }
        return this.props.backgroundPadding;
    };
    CircularProgressbar.prototype.getPathRadius = function () {
        return VIEWBOX_HEIGHT_HALF - this.props.strokeWidth / 2 - this.getBackgroundPadding();
    };
    CircularProgressbar.prototype.getPathRatio = function () {
        var _a = this.props, value = _a.value, minValue = _a.minValue, maxValue = _a.maxValue;
        var boundedValue = Math.min(Math.max(value, minValue), maxValue);
        return (boundedValue - minValue) / (maxValue - minValue);
    };
    CircularProgressbar.prototype.render = function () {
        var _a = this.props, circleRatio = _a.circleRatio, className = _a.className, classes = _a.classes, counterClockwise = _a.counterClockwise, styles = _a.styles, strokeWidth = _a.strokeWidth, text = _a.text;
        var pathRadius = this.getPathRadius();
        var pathRatio = this.getPathRatio();
        return (Object(external_react_["createElement"])("svg", { className: classes.root + " " + className, style: styles.root, viewBox: "0 0 " + VIEWBOX_WIDTH + " " + VIEWBOX_HEIGHT, "data-test-id": "CircularProgressbar" },
            this.props.background ? (Object(external_react_["createElement"])("circle", { className: classes.background, style: styles.background, cx: VIEWBOX_CENTER_X, cy: VIEWBOX_CENTER_Y, r: VIEWBOX_HEIGHT_HALF })) : null,
            Object(external_react_["createElement"])(Path, { className: classes.trail, counterClockwise: counterClockwise, dashRatio: circleRatio, pathRadius: pathRadius, strokeWidth: strokeWidth, style: styles.trail }),
            Object(external_react_["createElement"])(Path, { className: classes.path, counterClockwise: counterClockwise, dashRatio: pathRatio * circleRatio, pathRadius: pathRadius, strokeWidth: strokeWidth, style: styles.path }),
            text ? (Object(external_react_["createElement"])("text", { className: classes.text, style: styles.text, x: VIEWBOX_CENTER_X, y: VIEWBOX_CENTER_Y }, text)) : null));
    };
    CircularProgressbar.defaultProps = {
        background: false,
        backgroundPadding: 0,
        circleRatio: 1,
        classes: {
            root: 'CircularProgressbar',
            trail: 'CircularProgressbar-trail',
            path: 'CircularProgressbar-path',
            text: 'CircularProgressbar-text',
            background: 'CircularProgressbar-background',
        },
        counterClockwise: false,
        className: '',
        maxValue: 100,
        minValue: 0,
        strokeWidth: 8,
        styles: {
            root: {},
            trail: {},
            path: {},
            text: {},
            background: {},
        },
        text: '',
    };
    return CircularProgressbar;
}(external_react_["Component"]));

function CircularProgressbarWithChildren(props) {
    var children = props.children, circularProgressbarProps = __rest(props, ["children"]);
    return (Object(external_react_["createElement"])("div", { "data-test-id": "CircularProgressbarWithChildren" },
        Object(external_react_["createElement"])("div", { style: { position: 'relative', width: '100%', height: '100%' } },
            Object(external_react_["createElement"])(index_esm_CircularProgressbar, __assign({}, circularProgressbarProps)),
            props.children ? (Object(external_react_["createElement"])("div", { "data-test-id": "CircularProgressbarWithChildren__children", style: {
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    marginTop: '-100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                } }, props.children)) : null)));
}

function buildStyles(_a) {
    var rotation = _a.rotation, strokeLinecap = _a.strokeLinecap, textColor = _a.textColor, textSize = _a.textSize, pathColor = _a.pathColor, pathTransition = _a.pathTransition, pathTransitionDuration = _a.pathTransitionDuration, trailColor = _a.trailColor, backgroundColor = _a.backgroundColor;
    var rotationTransform = rotation == null ? undefined : "rotate(" + rotation + "turn)";
    var rotationTransformOrigin = rotation == null ? undefined : 'center center';
    return {
        root: {},
        path: removeUndefinedValues({
            stroke: pathColor,
            strokeLinecap: strokeLinecap,
            transform: rotationTransform,
            transformOrigin: rotationTransformOrigin,
            transition: pathTransition,
            transitionDuration: pathTransitionDuration == null ? undefined : pathTransitionDuration + "s",
        }),
        trail: removeUndefinedValues({
            stroke: trailColor,
            strokeLinecap: strokeLinecap,
            transform: rotationTransform,
            transformOrigin: rotationTransformOrigin,
        }),
        text: removeUndefinedValues({
            fill: textColor,
            fontSize: textSize,
        }),
        background: removeUndefinedValues({
            fill: backgroundColor,
        }),
    };
}
function removeUndefinedValues(obj) {
    Object.keys(obj).forEach(function (key) {
        if (obj[key] == null) {
            delete obj[key];
        }
    });
    return obj;
}


//# sourceMappingURL=index.esm.js.map

// CONCATENATED MODULE: ./renderers/atomics/Image/index.jsx










function Image_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Image_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Image_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Image_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







 // uploadFileStatus = 'error' | 'success' | 'done' | 'uploading' | 'removed';

var Image_Image = /*#__PURE__*/function (_React$Component) {
  inherits_default()(Image, _React$Component);

  var _super = _createSuper(Image);

  function Image() {
    var _this;

    classCallCheck_default()(this, Image);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {
      toolbarVisible: false,
      toolbarOffset: 0,
      linkEditorVisible: false,
      sizeEditorVisible: false,
      tempLink: null,
      tempWidth: null,
      tempHeight: null
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "initialLeft", void 0);

    defineProperty_default()(assertThisInitialized_default()(_this), "initialTop", void 0);

    defineProperty_default()(assertThisInitialized_default()(_this), "initialWidth", void 0);

    defineProperty_default()(assertThisInitialized_default()(_this), "initialHeight", void 0);

    defineProperty_default()(assertThisInitialized_default()(_this), "reSizeType", void 0);

    defineProperty_default()(assertThisInitialized_default()(_this), "changeSize", function (e) {
      var type = _this.reSizeType;

      if (!_this.initialLeft) {
        _this.initialLeft = e.screenX;
        _this.initialTop = e.screenY;
      }

      if (type === 'rightbottom') {
        _this.initialHeight += e.screenY - _this.initialTop;
        _this.initialWidth += e.screenX - _this.initialLeft;
      }

      if (type === 'leftbottom') {
        _this.initialHeight += e.screenY - _this.initialTop;
        _this.initialWidth += -e.screenX + _this.initialLeft;
      }

      _this.initialLeft = e.screenX;
      _this.initialTop = e.screenY;
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "moveImage", function (e) {
      _this.changeSize(e);

      _this.setState({
        tempWidth: Math.abs(_this.initialWidth),
        tempHeight: Math.abs(_this.initialHeight)
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "upImage", function () {
      _this.confirmImageSize();

      document.removeEventListener('mousemove', _this.moveImage);
      document.removeEventListener('mouseup', _this.upImage);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "repairChangeSize", function (type) {
      return function (e) {
        _this.reSizeType = type;

        var imageRect = _this.imageElement.getBoundingClientRect();

        _this.initialLeft = _this.initialTop = 0;
        _this.initialWidth = imageRect.width;
        _this.initialHeight = imageRect.height;
        e.preventDefault();
        document.addEventListener('mousemove', _this.moveImage);
        document.addEventListener('mouseup', _this.upImage);
      };
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "preventDragEvent", function (event) {
      event.stopPropagation();
      event.preventDefault();
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleDragStart", function () {
      if (_this.props.editor.editorProps.readOnly || _this.props.editor.editorProps.disabled) {
        return false;
      }

      window.__BRAFT_DRAGING__IMAGE__ = {
        block: _this.props.block,
        mediaData: Image_objectSpread({
          type: 'IMAGE'
        }, _this.props.mediaData)
      };

      _this.setState({
        toolbarVisible: false
      }, function () {
        _this.unlockEditor();
      });

      return true;
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleDragEnd", function () {
      window.__BRAFT_DRAGING__IMAGE__ = null;
      return false;
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "executeCommand", function (command) {
      if (typeof command === 'string') {
        var _command$split = command.split('|'),
            _command$split2 = slicedToArray_default()(_command$split, 2),
            method = _command$split2[0],
            param = _command$split2[1];

        _this[method] && _this[method](param);
      } else if (typeof command === 'function') {
        command(_this.props.block, _this.props.mediaData, _this.props.editor.getValue());
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "removeImage", function () {
      _this.props.editor.setValue(content_removeBlock(_this.props.editor.getValue(), _this.props.block));

      _this.unlockEditor();
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "toggleLinkEditor", function () {
      _this.setState({
        linkEditorVisible: !_this.state.linkEditorVisible,
        sizeEditorVisible: false
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "toggleSizeEditor", function () {
      _this.setState({
        linkEditorVisible: false,
        sizeEditorVisible: !_this.state.sizeEditorVisible
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleLinkInputKeyDown", function (e) {
      if (e.keyCode === 13) {
        _this.confirmImageLink();
      } else {
        return;
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "setImageLink", function (e) {
      _this.setState({
        tempLink: e.currentTarget.value
      });

      return;
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "confirmImageLink", function () {
      var link = _this.state.tempLink;

      var hookReturns = _this.props.hooks('set-image-link', link)(link);

      if (hookReturns === false) {
        return false;
      }

      if (typeof hookReturns === 'string') {
        link = hookReturns;
      }

      if (link !== null) {
        _this.props.editor.setValue(content_setMediaData(_this.props.editor.getValue(), _this.props.entityKey, {
          link: link
        }));

        window.setImmediate(_this.props.editor.forceRender);
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleSizeInputKeyDown", function (e) {
      if (e.keyCode === 13) {
        _this.confirmImageSize();
      } else {
        return;
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "setImageWidth", function (_ref) {
      var currentTarget = _ref.currentTarget;
      var value = currentTarget.value;
      value && !isNaN(value) && (value = value + 'px');

      _this.setState({
        tempWidth: value
      });

      return;
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "setImageHeight", function (_ref2) {
      var currentTarget = _ref2.currentTarget;
      var value = currentTarget.value;
      value && !isNaN(value) && (value = value + 'px');

      _this.setState({
        tempHeight: value
      });

      return;
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "confirmImageSize", function () {
      var _this$state = _this.state,
          width = _this$state.tempWidth,
          height = _this$state.tempHeight;
      var newImageSize = {};
      width !== null && (newImageSize.width = width);
      height !== null && (newImageSize.height = height);

      var hookReturns = _this.props.hooks('set-image-size', newImageSize)(newImageSize);

      if (hookReturns === false) {
        return false;
      }

      if (hookReturns && (hookReturns.width || hookReturns.height)) {
        newImageSize = hookReturns;
      }

      _this.props.editor.setValue(content_setMediaData(_this.props.editor.getValue(), _this.props.entityKey, newImageSize));

      window.setImmediate(_this.props.editor.forceRender);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "setImageFloat", function (float) {
      var hookReturns = _this.props.hooks('set-image-float', float)(float);

      if (hookReturns === false) {
        return false;
      }

      if (typeof hookReturns === 'string') {
        float = hookReturns;
      }

      _this.props.editor.setValue(setMediaPosition(_this.props.editor.getValue(), _this.props.block, {
        float: float
      }));

      _this.unlockEditor();
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "setImageAlignment", function (alignment) {
      var hookReturns = _this.props.hooks('set-image-alignment', alignment)(alignment);

      if (hookReturns === false) {
        return false;
      }

      if (typeof hookReturns === 'string') {
        alignment = hookReturns;
      }

      _this.props.editor.setValue(setMediaPosition(_this.props.editor.getValue(), _this.props.block, {
        alignment: alignment
      }));

      _this.unlockEditor();
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "showToolbar", function (event) {
      if (_this.props.editor.editorProps.readOnly || _this.props.editor.editorProps.disabled) {
        return false;
      }

      event.preventDefault();

      if (!_this.state.toolbarVisible) {
        _this.setState({
          toolbarVisible: true
        }, function () {
          _this.lockEditor();

          _this.setState({
            toolbarOffset: _this.calcToolbarOffset()
          });
        });
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "hideToolbar", function (event) {
      event.preventDefault();

      _this.setState({
        toolbarVisible: false
      }, function () {
        _this.unlockEditor(); // this.props.editor.requestFocus()

      });
    });

    return _this;
  }

  createClass_default()(Image, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          mediaData = _this$props.mediaData,
          language = _this$props.language,
          imageControls = _this$props.imageControls,
          imageResizable = _this$props.imageResizable;
      var _this$state2 = this.state,
          toolbarVisible = _this$state2.toolbarVisible,
          toolbarOffset = _this$state2.toolbarOffset,
          linkEditorVisible = _this$state2.linkEditorVisible,
          sizeEditorVisible = _this$state2.sizeEditorVisible,
          tempWidth = _this$state2.tempWidth,
          tempHeight = _this$state2.tempHeight;
      var blockData = this.props.block.getData();
      var float = blockData.get('float');
      var alignment = blockData.get('alignment');
      var url = mediaData.url,
          link = mediaData.link,
          link_target = mediaData.link_target,
          width = mediaData.width,
          height = mediaData.height,
          meta = mediaData.meta;
      var imageStyles = {};
      var clearFix = false;
      var status = meta && meta.status ? meta.status : 'done';
      var percent = meta && meta.percent ? meta.percent : '0';

      if (float) {
        alignment = null;
      } else if (alignment === 'left') {
        imageStyles.float = 'left';
        clearFix = true;
      } else if (alignment === 'right') {
        imageStyles.float = 'right';
        clearFix = true;
      } else if (alignment === 'center') {
        imageStyles.textAlign = 'center';
      } else {
        imageStyles.float = 'left';
        clearFix = true;
      }

      var renderedControlItems = imageControls.map(function (item, index) {
        if (typeof item === 'string' && imageControlItems[item]) {
          return /*#__PURE__*/external_react_default.a.createElement("a", {
            className: item === 'link' && link ? 'active' : '',
            key: index,
            onClick: function onClick() {
              return _this2.executeCommand(imageControlItems[item].command);
            }
          }, imageControlItems[item].text);
        } else if (item && (item.render || item.text)) {
          return item.render ? item.render(mediaData, _this2.props.block) : /*#__PURE__*/external_react_default.a.createElement("a", {
            key: index,
            onClick: function onClick() {
              return item.onClick && _this2.executeCommand(item.onClick);
            }
          }, item.text);
        } else {
          return null;
        }
      });

      if (status === 'uploading') {
        return /*#__PURE__*/external_react_default.a.createElement("div", {
          className: "bf-media"
        }, /*#__PURE__*/external_react_default.a.createElement("div", {
          className: "bf-media-progress"
        }, /*#__PURE__*/external_react_default.a.createElement(index_esm_CircularProgressbar, {
          value: percent,
          strokeWidth: 8,
          text: "\u4E0A\u4F20\u4E2D ".concat(percent, "%"),
          styles: buildStyles({
            textSize: 12,
            pathColor: '#66C2B9',
            textColor: '#66C2B9',
            pathTransition: percent === 0 ? 'none' : 'stroke-dashoffset 0.5s ease 0s'
          })
        })));
      }

      return /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "bf-media"
      }, /*#__PURE__*/external_react_default.a.createElement("div", {
        style: imageStyles,
        draggable: true,
        onMouseEnter: this.showToolbar,
        onMouseMove: this.showToolbar,
        onMouseLeave: this.hideToolbar,
        onDragStart: this.handleDragStart,
        onDragEnd: this.handleDragEnd,
        ref: function ref(instance) {
          return _this2.mediaEmbederInstance = instance;
        },
        className: "bf-image"
      }, toolbarVisible ? /*#__PURE__*/external_react_default.a.createElement("div", {
        style: {
          marginLeft: toolbarOffset
        },
        ref: function ref(instance) {
          return _this2.toolbarElement = instance;
        },
        "data-float": float,
        "data-align": alignment,
        className: "bf-media-toolbar"
      }, linkEditorVisible ? /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "bf-image-link-editor"
      }, /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "editor-input-group"
      }, /*#__PURE__*/external_react_default.a.createElement("input", {
        type: "text",
        placeholder: language.linkEditor.inputWithEnterPlaceHolder,
        onKeyDown: this.handleLinkInputKeyDown,
        onChange: this.setImageLink,
        defaultValue: link
      }), /*#__PURE__*/external_react_default.a.createElement("button", {
        type: "button",
        onClick: this.confirmImageLink
      }, language.base.confirm)), /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "switch-group"
      }, /*#__PURE__*/external_react_default.a.createElement(Switch, {
        active: link_target === '_blank',
        onClick: function onClick() {
          return _this2.setImageLinkTarget(link_target);
        }
      }), /*#__PURE__*/external_react_default.a.createElement("label", null, language.linkEditor.openInNewWindow))) : null, sizeEditorVisible ? /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "bf-image-size-editor"
      }, /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "editor-input-group"
      }, /*#__PURE__*/external_react_default.a.createElement("input", {
        type: "text",
        placeholder: language.base.width,
        onKeyDown: this.handleSizeInputKeyDown,
        onChange: this.setImageWidth,
        defaultValue: width
      }), /*#__PURE__*/external_react_default.a.createElement("input", {
        type: "text",
        placeholder: language.base.height,
        onKeyDown: this.handleSizeInputKeyDown,
        onChange: this.setImageHeight,
        defaultValue: height
      }), /*#__PURE__*/external_react_default.a.createElement("button", {
        type: "button",
        onClick: this.confirmImageSize
      }, language.base.confirm))) : null, renderedControlItems, /*#__PURE__*/external_react_default.a.createElement("i", {
        style: {
          marginLeft: toolbarOffset * -1
        },
        className: "bf-media-toolbar-arrow"
      })) : null, /*#__PURE__*/external_react_default.a.createElement("div", {
        style: {
          position: 'relative',
          width: "".concat(width, "px"),
          height: "".concat(height, "px"),
          display: 'inline-block'
        }
      }, /*#__PURE__*/external_react_default.a.createElement("img", extends_default()({
        ref: function ref(instance) {
          return _this2.imageElement = instance;
        },
        src: url,
        width: width,
        height: height
      }, meta)), toolbarVisible && imageResizable ? /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "bf-csize-icon right-bottom",
        onMouseDown: this.repairChangeSize('rightbottom')
      }) : null, toolbarVisible && imageResizable ? /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "bf-csize-icon left-bottom",
        onMouseDown: this.repairChangeSize('leftbottom')
      }) : null, /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "bf-pre-csize ".concat(this.reSizeType),
        style: {
          width: "".concat(tempWidth, "px"),
          height: "".concat(tempHeight, "px")
        }
      }))), clearFix && /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "clearfix",
        style: {
          clear: 'both',
          height: 0,
          lineHeight: 0,
          float: 'none'
        }
      }));
    }
  }, {
    key: "lockEditor",
    value: function lockEditor() {
      this.props.editor.lockOrUnlockEditor(true);
    }
  }, {
    key: "unlockEditor",
    value: function unlockEditor() {
      this.props.editor.lockOrUnlockEditor(false);
    }
  }, {
    key: "calcToolbarOffset",
    value: function calcToolbarOffset() {
      var _this$props2 = this.props,
          getContainerNode = _this$props2.getContainerNode,
          containerNode = _this$props2.containerNode;
      var container = getContainerNode ? getContainerNode() : containerNode;

      if (!container) {
        return 0;
      }

      var viewRect = container.querySelector('.bf-content').getBoundingClientRect();
      var toolbarRect = this.toolbarElement.getBoundingClientRect();
      var imageRect = this.imageElement.getBoundingClientRect();
      var right = viewRect.right - (imageRect.right - imageRect.width / 2 + toolbarRect.width / 2);
      var left = imageRect.left + imageRect.width / 2 - toolbarRect.width / 2 - viewRect.left;

      if (right < 10) {
        return right - 10;
      } else if (left < 10) {
        return left * -1 + 10;
      } else {
        return 0;
      }
    }
  }, {
    key: "setImageLinkTarget",
    value: function setImageLinkTarget(link_target) {
      var hookReturns = this.props.hooks('set-image-link-target', link_target)(link_target);

      if (hookReturns === false) {
        return false;
      }

      if (typeof hookReturns === 'string') {
        link_target = hookReturns;
      }

      link_target = link_target === '_blank' ? '' : '_blank';
      this.props.editor.setValue(content_setMediaData(this.props.editor.getValue(), this.props.entityKey, {
        link_target: link_target
      }));
      window.setImmediate(this.props.editor.forceRender);
    }
  }]);

  return Image;
}(external_react_default.a.Component);


// EXTERNAL MODULE: ../node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(18);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(26);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./renderers/atomics/Video/style.scss
var Video_style = __webpack_require__(51);

// EXTERNAL MODULE: ./components/common/Modal/style.scss
var Modal_style = __webpack_require__(52);

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(16);
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_);

// CONCATENATED MODULE: ./components/common/Modal/index.jsx









function Modal_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Modal_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Modal_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Modal_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Modal_createSuper(Derived) { var hasNativeReflectConstruct = Modal_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function Modal_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var Modal_Modal = /*#__PURE__*/function (_React$Component) {
  inherits_default()(Modal, _React$Component);

  var _super = Modal_createSuper(Modal);

  function Modal(props) {
    var _this;

    classCallCheck_default()(this, Modal);

    _this = _super.call(this, props);

    defineProperty_default()(assertThisInitialized_default()(_this), "handleTransitionEnd", function () {
      if (!_this.rootElement || !_this.rootElement.classList) {
        return false;
      }

      if (!_this.rootElement.classList.contains('active')) {
        external_react_dom_default.a.unmountComponentAtNode(_this.rootElement) && _this.rootElement.parentNode.removeChild(_this.rootElement);
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleMouseDown", function (event) {
      var tagName = event.target.tagName.toLowerCase();

      if (tagName === 'input' || tagName === 'textarea') {
        return false;
      }

      event.preventDefault();
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleCancel", function () {
      _this.props.closeOnCancel && _this.close();
      _this.props.onCancel && _this.props.onCancel();
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleConfirm", function () {
      _this.props.closeOnConfirm && _this.close();
      _this.props.onConfirm && _this.props.onConfirm();
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleMaskClick", function () {
      _this.props.closeOnBlur && _this.close();
      _this.props.onBlue && _this.props.onBlue();
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "close", function () {
      _this.unrenderComponent();

      _this.props.onClose && _this.props.onClose();
    });

    _this.active = false;
    _this.componentId = 'BRAFT-MODAL-' + UniqueIndex();
    return _this;
  }

  createClass_default()(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.visible) {
        this.active = true;
        this.renderComponent(this.props);
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(next) {
      if (this.props.visible && !next.visible) {
        this.unrenderComponent();
      } else if (this.props.visible || next.visible) {
        this.active = true;
        this.renderComponent(next);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }, {
    key: "unrenderComponent",
    value: function unrenderComponent() {
      this.active = false;
      this.activeId && window.clearImmediate(this.activeId);

      if (this.rootElement && this.rootElement.classList) {
        this.rootElement.classList.remove('active');
      }
    }
  }, {
    key: "renderComponent",
    value: function renderComponent(props) {
      var _this2 = this;

      if (!this.active) {
        return false;
      }

      var title = props.title,
          className = props.className,
          width = props.width,
          height = props.height,
          children = props.children,
          component = props.component,
          confirmable = props.confirmable,
          showFooter = props.showFooter,
          showCancel = props.showCancel,
          showConfirm = props.showConfirm,
          showClose = props.showClose,
          cancelText = props.cancelText,
          confirmText = props.confirmText,
          bottomText = props.bottomText,
          language = props.language;
      typeof showCancel === 'undefined' && (showCancel = true);
      typeof showClose === 'undefined' && (showClose = true);
      typeof showConfirm === 'undefined' && (showConfirm = true);
      typeof showFooter === 'undefined' && (showFooter = true);
      var childComponent = /*#__PURE__*/external_react_default.a.createElement("div", {
        onMouseDown: this.handleMouseDown,
        className: 'bf-modal ' + (className || '')
      }, /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "bf-modal-mask",
        onClick: this.handleMaskClick
      }), /*#__PURE__*/external_react_default.a.createElement("div", {
        onTransitionEnd: this.handleTransitionEnd,
        style: {
          width: width,
          height: height
        },
        className: "bf-modal-content"
      }, /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "bf-modal-header"
      }, /*#__PURE__*/external_react_default.a.createElement("h3", {
        className: "bf-modal-caption"
      }, title), showClose && /*#__PURE__*/external_react_default.a.createElement("button", {
        type: "button",
        onClick: this.close,
        className: "bf-modal-close-button"
      }, /*#__PURE__*/external_react_default.a.createElement("i", {
        className: "bfi-close"
      }))), /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "bf-modal-body"
      }, children || component), showFooter ? /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "bf-modal-footer"
      }, /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "bf-modal-addon-text"
      }, bottomText), /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "bf-modal-buttons"
      }, showCancel && /*#__PURE__*/external_react_default.a.createElement("button", {
        type: "button",
        onClick: this.handleCancel,
        className: "bf-modal-cancel"
      }, cancelText || language.base.cancel), showConfirm && /*#__PURE__*/external_react_default.a.createElement("button", {
        type: "button",
        onClick: this.handleConfirm,
        className: 'bf-modal-confirm ' + (!confirmable ? 'disabled' : '')
      }, confirmText || language.base.confirm))) : null));
      this.rootElement = document.querySelector('#' + this.componentId);

      if (!this.rootElement) {
        this.rootElement = document.createElement('div');
        this.rootElement.id = this.componentId;
        this.rootElement.className = 'bf-modal-root';
        document.body.appendChild(this.rootElement);
      }

      external_react_dom_default.a.render(childComponent, this.rootElement);
      this.activeId = window.setImmediate(function () {
        _this2.rootElement.classList.add('active');
      });
    }
  }]);

  return Modal;
}(external_react_default.a.Component);

defineProperty_default()(Modal_Modal, "defaultProps", {
  showFooter: true,
  closeOnBlur: true
});


var Modal_showModal = function showModal(props) {
  var hostNode = document.createElement('div');
  hostNode.style.display = 'none';
  document.body.appendChild(hostNode);
  props = Modal_objectSpread({
    visible: true,
    closeOnConfirm: true,
    closeOnCancel: true
  }, props);

  var close = function close() {
    external_react_dom_default.a.unmountComponentAtNode(hostNode) && hostNode.parentNode.removeChild(hostNode);
  };

  var onConfirm = function onConfirm() {
    props.onConfirm && props.onConfirm();
  };

  var onCancel = function onCancel() {
    props.onCancel && props.onCancel();
  };

  var onClose = function onClose() {
    close();
    props.onClose && props.onClose();
  };

  var modalInstance = external_react_dom_default.a.render( /*#__PURE__*/external_react_default.a.createElement(Modal_Modal, extends_default()({}, props, {
    onConfirm: onConfirm,
    onCancel: onCancel,
    onClose: onClose
  })), hostNode);
  modalInstance.destroy = close;
  modalInstance.update = modalInstance.renderComponent;
  return modalInstance;
};
// EXTERNAL MODULE: ./components/business/PlayerModal/style.scss
var PlayerModal_style = __webpack_require__(53);

// CONCATENATED MODULE: ./components/business/PlayerModal/index.jsx




var PlayerModal_playViaModal = function playViaModal(title, component, language) {
  return Modal_showModal({
    title: title,
    component: component,
    language: language,
    showFooter: false
  });
};

var typeIconsMap = {
  video: 'bfi-film',
  audio: 'bfi-music',
  embed: 'bfi-code'
};
/* harmony default export */ var PlayerModal = (function (_ref) {
  var title = _ref.title,
      type = _ref.type,
      language = _ref.language,
      name = _ref.name,
      poster = _ref.poster,
      children = _ref.children,
      onRemove = _ref.onRemove;
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "bf-player-holder ".concat(type)
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "icon-badge"
  }, /*#__PURE__*/external_react_default.a.createElement("i", {
    className: typeIconsMap[type]
  }), /*#__PURE__*/external_react_default.a.createElement("span", {
    className: "text"
  }, language.media[type])), /*#__PURE__*/external_react_default.a.createElement("button", {
    onMouseDown: onRemove,
    className: "button-remove"
  }, /*#__PURE__*/external_react_default.a.createElement("i", {
    className: "bfi-close"
  })), /*#__PURE__*/external_react_default.a.createElement("button", {
    onMouseDown: function onMouseDown() {
      return PlayerModal_playViaModal(name ? "".concat(title, ":").concat(name) : title, children, language);
    },
    className: "button-play"
  }, /*#__PURE__*/external_react_default.a.createElement("i", {
    className: "bfi-play_arrow"
  })), name ? /*#__PURE__*/external_react_default.a.createElement("h5", {
    className: "bf-name"
  }, name) : null, poster ? /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "bf-poster",
    style: {
      backgroundImage: "url(".concat(poster, ")")
    }
  }) : null);
});
// CONCATENATED MODULE: ./renderers/atomics/Video/index.jsx










function Video_createSuper(Derived) { var hasNativeReflectConstruct = Video_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function Video_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var Video_Video = /*#__PURE__*/function (_React$Component) {
  inherits_default()(Video, _React$Component);

  var _super = Video_createSuper(Video);

  function Video() {
    var _this;

    classCallCheck_default()(this, Video);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {
      videoURL: ''
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "removeVideo", function () {
      _this.props.editor.setValue(content_removeBlock(_this.props.editorState, _this.props.block));
    });

    return _this;
  }

  createClass_default()(Video, [{
    key: "componentDidUpdate",
    value: function () {
      var _componentDidUpdate = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(prevProps, prevState, snapshot) {
        var hookReturns, url;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(prevProps.mediaData && prevProps.mediaData.meta && prevProps.mediaData.meta.status)) {
                  _context.next = 10;
                  break;
                }

                if (!(prevProps.mediaData.meta.status === 'done' && prevState.videoURL === '')) {
                  _context.next = 10;
                  break;
                }

                hookReturns = prevProps.hooks('insert-video', prevProps.mediaData)(prevProps.mediaData);

                if (!(hookReturns === false)) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", null);

              case 5:
                if (!(Object.prototype.toString.call(hookReturns) === '[object Promise]')) {
                  _context.next = 10;
                  break;
                }

                _context.next = 8;
                return hookReturns;

              case 8:
                url = _context.sent;
                this.setState({
                  videoURL: url
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidUpdate(_x, _x2, _x3) {
        return _componentDidUpdate.apply(this, arguments);
      }

      return componentDidUpdate;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          mediaData = _this$props.mediaData,
          language = _this$props.language;
      var url = mediaData.url,
          name = mediaData.name,
          meta = mediaData.meta;
      var _meta$status = meta.status,
          status = _meta$status === void 0 ? 'done' : _meta$status,
          _meta$percent = meta.percent,
          percent = _meta$percent === void 0 ? 0 : _meta$percent;

      if (status === 'uploading') {
        return /*#__PURE__*/external_react_default.a.createElement("div", {
          className: "bf-media"
        }, /*#__PURE__*/external_react_default.a.createElement("div", {
          className: "bf-media-progress"
        }, /*#__PURE__*/external_react_default.a.createElement(index_esm_CircularProgressbar, {
          value: percent,
          strokeWidth: 8,
          text: "\u4E0A\u4F20\u4E2D ".concat(percent, "%"),
          styles: buildStyles({
            textSize: 12,
            pathColor: '#66C2B9',
            textColor: '#66C2B9',
            pathTransition: percent === 0 ? 'none' : 'stroke-dashoffset 0.5s ease 0s'
          })
        })));
      }

      return /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "bf-video-wrap"
      }, /*#__PURE__*/external_react_default.a.createElement(PlayerModal, {
        type: "video",
        onRemove: this.removeVideo,
        poster: meta ? meta.poster || '' : '',
        language: language,
        url: url,
        name: name,
        title: language.videoPlayer.title
      }, /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "bf-video-player"
      }, /*#__PURE__*/external_react_default.a.createElement("video", {
        controls: true,
        poster: meta ? meta.poster || '' : ''
      }, /*#__PURE__*/external_react_default.a.createElement("source", {
        src: this.state.videoURL ? this.state.videoURL : url
      })))));
    }
  }]);

  return Video;
}(external_react_default.a.Component);


// EXTERNAL MODULE: ./renderers/atomics/Audio/style.scss
var Audio_style = __webpack_require__(54);

// CONCATENATED MODULE: ./renderers/atomics/Audio/index.jsx








function Audio_createSuper(Derived) { var hasNativeReflectConstruct = Audio_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function Audio_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var Audio_Audio = /*#__PURE__*/function (_React$Component) {
  inherits_default()(Audio, _React$Component);

  var _super = Audio_createSuper(Audio);

  function Audio() {
    var _this;

    classCallCheck_default()(this, Audio);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty_default()(assertThisInitialized_default()(_this), "removeAudio", function () {
      _this.props.editor.setValue(content_removeBlock(_this.props.editorState, _this.props.block));
    });

    return _this;
  }

  createClass_default()(Audio, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          mediaData = _this$props.mediaData,
          language = _this$props.language;
      var url = mediaData.url,
          name = mediaData.name,
          meta = mediaData.meta;
      return /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "bf-audio-wrap"
      }, /*#__PURE__*/external_react_default.a.createElement(PlayerModal, {
        type: "audio",
        onRemove: this.removeAudio,
        poster: meta ? meta.poster || '' : '',
        language: language,
        url: url,
        name: name,
        title: language.audioPlayer.title
      }, /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "bf-audio-player"
      }, /*#__PURE__*/external_react_default.a.createElement("audio", {
        controls: true,
        src: url
      }))));
    }
  }]);

  return Audio;
}(external_react_default.a.Component);


// EXTERNAL MODULE: ./renderers/atomics/Embed/style.scss
var Embed_style = __webpack_require__(55);

// CONCATENATED MODULE: ./renderers/atomics/Embed/index.jsx








function Embed_createSuper(Derived) { var hasNativeReflectConstruct = Embed_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function Embed_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var Embed_Embed = /*#__PURE__*/function (_React$Component) {
  inherits_default()(Embed, _React$Component);

  var _super = Embed_createSuper(Embed);

  function Embed() {
    var _this;

    classCallCheck_default()(this, Embed);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty_default()(assertThisInitialized_default()(_this), "removeEmbed", function () {
      _this.props.editor.setValue(content_removeBlock(_this.props.editorState, _this.props.block));
    });

    return _this;
  }

  createClass_default()(Embed, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          mediaData = _this$props.mediaData,
          language = _this$props.language;
      var name = mediaData.name,
          url = mediaData.url,
          meta = mediaData.meta;
      return /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "bf-embed-wrap"
      }, /*#__PURE__*/external_react_default.a.createElement(PlayerModal, {
        type: "embed",
        onRemove: this.removeEmbed,
        poster: meta ? meta.poster || '' : '',
        language: language,
        url: url,
        name: name,
        title: language.videoPlayer.embedTitle
      }, /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "bf-embed-player",
        dangerouslySetInnerHTML: {
          __html: url
        }
      })));
    }
  }]);

  return Embed;
}(external_react_default.a.Component);


// EXTERNAL MODULE: ./renderers/atomics/Attachment/style.scss
var Attachment_style = __webpack_require__(56);

// CONCATENATED MODULE: ./renderers/atomics/Attachment/index.jsx








function Attachment_createSuper(Derived) { var hasNativeReflectConstruct = Attachment_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function Attachment_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var Attachment_Attachment = /*#__PURE__*/function (_React$Component) {
  inherits_default()(Attachment, _React$Component);

  var _super = Attachment_createSuper(Attachment);

  function Attachment() {
    var _this;

    classCallCheck_default()(this, Attachment);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty_default()(assertThisInitialized_default()(_this), "removeAttachment", function () {
      _this.props.editor.setValue(content_removeBlock(_this.props.editorState, _this.props.block));
    });

    return _this;
  }

  createClass_default()(Attachment, [{
    key: "render",
    value: function render() {
      var mediaData = this.props.mediaData;
      var _mediaData$meta = mediaData.meta,
          fileSize = _mediaData$meta.fileSize,
          fileType = _mediaData$meta.fileType,
          fileName = _mediaData$meta.fileName,
          _mediaData$meta$statu = _mediaData$meta.status,
          status = _mediaData$meta$statu === void 0 ? 'done' : _mediaData$meta$statu,
          _mediaData$meta$perce = _mediaData$meta.percent,
          percent = _mediaData$meta$perce === void 0 ? 0 : _mediaData$meta$perce;

      if (status === 'uploading') {
        return /*#__PURE__*/external_react_default.a.createElement("div", {
          className: "bf-media"
        }, /*#__PURE__*/external_react_default.a.createElement("div", {
          className: "bf-media-progress"
        }, /*#__PURE__*/external_react_default.a.createElement(index_esm_CircularProgressbar, {
          value: percent,
          strokeWidth: 8,
          text: "\u4E0A\u4F20\u4E2D ".concat(percent, "%"),
          styles: buildStyles({
            textSize: 12,
            pathColor: '#66C2B9',
            textColor: '#66C2B9',
            pathTransition: percent === 0 ? 'none' : 'stroke-dashoffset 0.5s ease 0s'
          })
        })));
      }

      return /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "bf-attachment"
      }, /*#__PURE__*/external_react_default.a.createElement("button", {
        onMouseDown: this.removeAttachment,
        className: "button-remove"
      }, /*#__PURE__*/external_react_default.a.createElement("i", {
        className: "bfi-close"
      })), /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "bf-attachment-icon bf-attachment-icon-".concat(fileType.toLowerCase())
      }, fileType), /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "bf-attachment-content"
      }, /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "bf-attachment-content-title"
      }, fileName), /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "bf-attachment-content-desc"
      }, fileSize)));
    }
  }]);

  return Attachment;
}(external_react_default.a.Component);


// EXTERNAL MODULE: ./renderers/atomics/HorizontalLine/style.scss
var HorizontalLine_style = __webpack_require__(57);

// CONCATENATED MODULE: ./renderers/atomics/HorizontalLine/index.jsx








function HorizontalLine_createSuper(Derived) { var hasNativeReflectConstruct = HorizontalLine_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function HorizontalLine_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var HorizontalLine_HorizontalLine = /*#__PURE__*/function (_React$Component) {
  inherits_default()(HorizontalLine, _React$Component);

  var _super = HorizontalLine_createSuper(HorizontalLine);

  function HorizontalLine() {
    var _this;

    classCallCheck_default()(this, HorizontalLine);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty_default()(assertThisInitialized_default()(_this), "removeHorizontalLine", function () {
      _this.props.editor.setValue(content_removeBlock(_this.props.editorState, _this.props.block));
    });

    return _this;
  }

  createClass_default()(HorizontalLine, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "bf-hr"
      }, /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "bf-media-toolbar"
      }, /*#__PURE__*/external_react_default.a.createElement("a", {
        onClick: this.removeHorizontalLine
      }, "\uE9AC")));
    }
  }]);

  return HorizontalLine;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./renderers/block/blockRendererFn.js



function blockRendererFn_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function blockRendererFn_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { blockRendererFn_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { blockRendererFn_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var blockRendererFn_BlockRenderFnContext = function BlockRenderFnContext() {
  var _this = this;

  classCallCheck_default()(this, BlockRenderFnContext);

  defineProperty_default()(this, "superProps", void 0);

  defineProperty_default()(this, "customBlockRendererFn", void 0);

  defineProperty_default()(this, "getRenderFn", function (superProps, customBlockRendererFn) {
    _this.superProps = superProps;
    _this.customBlockRendererFn = customBlockRendererFn;
    return _this.blockRendererFn;
  });

  defineProperty_default()(this, "renderAtomicBlock", function (props) {
    var superProps = _this.superProps;
    var entityKey = props.block.getEntityAt(0);

    if (!entityKey) {
      return null;
    }

    var entity = props.contentState.getEntity(entityKey);
    var mediaData = entity.getData();
    var mediaType = entity.getType();

    var mediaProps = blockRendererFn_objectSpread(blockRendererFn_objectSpread({}, superProps), {}, {
      block: props.block,
      mediaData: mediaData,
      entityKey: entityKey
    });

    if (mediaType === 'IMAGE') {
      return /*#__PURE__*/external_react_default.a.createElement(Image_Image, mediaProps);
    } else if (mediaType === 'AUDIO') {
      return /*#__PURE__*/external_react_default.a.createElement(Audio_Audio, mediaProps);
    } else if (mediaType === 'VIDEO') {
      return /*#__PURE__*/external_react_default.a.createElement(Video_Video, mediaProps);
    } else if (mediaType === 'EMBED') {
      return /*#__PURE__*/external_react_default.a.createElement(Embed_Embed, mediaProps);
    } else if (mediaType === 'HR') {
      return /*#__PURE__*/external_react_default.a.createElement(HorizontalLine_HorizontalLine, mediaProps);
    } else if (mediaType === 'ATTACHMENT') {
      return /*#__PURE__*/external_react_default.a.createElement(Attachment_Attachment, mediaProps);
    }

    if (superProps.extendAtomics) {
      var atomics = superProps.extendAtomics;

      for (var i = 0; i < atomics.length; i++) {
        if (mediaType === atomics[i].type) {
          var Component = atomics[i].component;
          return /*#__PURE__*/external_react_default.a.createElement(Component, mediaProps);
        }
      }
    }

    return null;
  });

  defineProperty_default()(this, "blockRendererFn", function (block) {
    var customBlockRendererFn = _this.customBlockRendererFn,
        superProps = _this.superProps;
    var blockType = block.getType();
    var blockRenderer = null;

    if (customBlockRendererFn) {
      blockRenderer = customBlockRendererFn(block, superProps) || null;
    }

    if (blockRenderer) {
      return blockRenderer;
    }

    var extensionBlockRendererFns = getExtensionBlockRendererFns(superProps.editorId);
    extensionBlockRendererFns.find(function (item) {
      if (item.blockType === blockType || item.blockType instanceof RegExp && item.blockType.test(blockType)) {
        blockRenderer = item.rendererFn ? item.rendererFn(superProps) : null;
        return true;
      }
    });

    if (blockRenderer) {
      return blockRenderer;
    }

    if (blockType === 'atomic') {
      blockRenderer = {
        component: _this.renderAtomicBlock,
        editable: false
      };
    }

    return blockRenderer;
  });
};

var blockRenderFnContext = new blockRendererFn_BlockRenderFnContext();
/* harmony default export */ var block_blockRendererFn = (blockRenderFnContext.getRenderFn);
// CONCATENATED MODULE: ./renderers/block/blockStyleFn.js
/* harmony default export */ var block_blockStyleFn = (function (customBlockStyleFn) {
  return function (block) {
    var blockAlignment = block.getData() && block.getData().get('textAlign');
    var blockIndent = block.getData() && block.getData().get('textIndent');
    var blockFloat = block.getData() && block.getData().get('float');
    var result = '';

    if (blockAlignment) {
      result = "bfa-".concat(blockAlignment);
    }

    if (blockIndent && blockIndent !== 0) {
      result += " bftd-".concat(blockIndent);
    }

    if (blockFloat) {
      result += " bff-".concat(blockFloat);
    }

    if (customBlockStyleFn) {
      result += customBlockStyleFn(block) || '';
    }

    return result;
  };
});
// CONCATENATED MODULE: ./renderers/inline/inlineStyleMap.js


function inlineStyleMap_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function inlineStyleMap_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { inlineStyleMap_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { inlineStyleMap_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


/* harmony default export */ var inlineStyleMap = (function (props) {
  var customStyleMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var extensionInlineStyleMap = getExtensionInlineStyleMap(props.editorId);
  return inlineStyleMap_objectSpread(inlineStyleMap_objectSpread({
    SUPERSCRIPT: {
      position: 'relative',
      top: '-8px',
      fontSize: '11px'
    },
    SUBSCRIPT: {
      position: 'relative',
      bottom: '-8px',
      fontSize: '11px'
    }
  }, extensionInlineStyleMap), customStyleMap);
});
// CONCATENATED MODULE: ./renderers/inline/inlineStyleFn.js


var inlineStyleFn_getStyleValue = function getStyleValue(style) {
  return style.split('-')[1];
};

/* harmony default export */ var inlineStyleFn = (function (props, options) {
  return function (styles, block) {
    var output = {};
    var fontFamilies = options.fontFamilies,
        unitExportFn = options.unitExportFn,
        customStyleFn = options.customStyleFn;
    var extensionInlineStyleFns = getExtensionInlineStyleFns(props.editorId);
    extensionInlineStyleFns.forEach(function (item) {
      output = item.styleFn ? item.styleFn(styles, block, output) : output;
    });
    output = customStyleFn ? customStyleFn(styles, block, output) : {};
    styles.forEach(function (style) {
      if (style.indexOf('COLOR-') === 0) {
        output.color = '#' + inlineStyleFn_getStyleValue(style);
      } else if (style.indexOf('BGCOLOR-') === 0) {
        output.backgroundColor = '#' + inlineStyleFn_getStyleValue(style);
      } else if (style.indexOf('FONTSIZE-') === 0) {
        output.fontSize = unitExportFn(inlineStyleFn_getStyleValue(style), 'font-size', 'editor');
      } else if (style.indexOf('LINEHEIGHT-') === 0) {
        output.lineHeight = unitExportFn(inlineStyleFn_getStyleValue(style), 'line-height', 'editor');
      } else if (style.indexOf('LETTERSPACING-') === 0) {
        output.letterSpacing = unitExportFn(inlineStyleFn_getStyleValue(style), 'letter-spacing', 'editor');
      } else if (style.indexOf('TEXTINDENT-') === 0) {
        output.textIndent = unitExportFn(inlineStyleFn_getStyleValue(style), 'text-indent', 'editor');
      } else if (style.indexOf('FONTFAMILY-') === 0) {
        output.fontFamily = (fontFamilies.find(function (item) {
          return item.name.toUpperCase() === inlineStyleFn_getStyleValue(style);
        }) || {}).family || '';
      }
    });
    return output;
  };
});
// EXTERNAL MODULE: ../node_modules/draft-js-multidecorators/index.js
var draft_js_multidecorators = __webpack_require__(19);
var draft_js_multidecorators_default = /*#__PURE__*/__webpack_require__.n(draft_js_multidecorators);

// CONCATENATED MODULE: ./renderers/decorators/Link/index.jsx

/* harmony default export */ var Link = (function (props) {
  var children = props.children,
      entityKey = props.entityKey,
      contentState = props.contentState;

  var _contentState$getEnti = contentState.getEntity(entityKey).getData(),
      href = _contentState$getEnti.href,
      target = _contentState$getEnti.target;

  return /*#__PURE__*/external_react_default.a.createElement("span", {
    className: "bf-link-wrap"
  }, /*#__PURE__*/external_react_default.a.createElement("a", {
    onClick: function onClick(event) {
      return viewLink(event, href);
    },
    className: "bf-link",
    href: href,
    target: target
  }, children));
});

var viewLink = function viewLink(event, link) {
  // 当按下Ctrl/command键时，点击打开链接文字中的url
  // if (event.getModifierState('Control')
  //     || event.getModifierState('Meta')) {
  //   const tempLink = document.createElement('a')
  //   tempLink.href = link
  //   tempLink.target = event.currentTarget.target
  //   tempLink.click()
  // }
  if (link.startsWith('https://') || link.startsWith('http://')) {
    window.open(link, '_blank');
  } else {
    window.open("http://".concat(link));
  }
};
// CONCATENATED MODULE: ./renderers/decorators/index.js






var KEY_SEPARATOR = '-';

draft_js_multidecorators_default.a.prototype.getDecorations = function (block, contentState) {
  var decorations = Array(block.getText().length).fill(null);
  this.decorators.forEach(function (decorator, i) {
    decorator.getDecorations(block, contentState).forEach(function (key, offset) {
      if (!key) {
        return;
      }

      key = i + KEY_SEPARATOR + key;
      decorations[offset] = key;
    });
  });
  return external_immutable_default.a.List(decorations);
};

var builtinDecorators = [{
  type: 'entity',
  decorator: {
    key: 'LINK',
    component: Link
  }
}];

var createStrategy = function createStrategy(type) {
  return function (block, callback, contentState) {
    block.findEntityRanges(function (character) {
      var entityKey = character.getEntity();
      return entityKey !== null && contentState.getEntity(entityKey).getType() === type;
    }, callback);
  };
};

/* harmony default export */ var decorators = (function (editorId) {
  var extensionDecorators = getExtensionDecorators(editorId);
  var entityDecorators = [].concat(builtinDecorators, toConsumableArray_default()(extensionDecorators.filter(function (item) {
    return item.type === 'entity';
  })));
  var strategyDecorators = extensionDecorators.filter(function (item) {
    return item.type === 'strategy';
  });
  var classDecorators = extensionDecorators.filter(function (item) {
    return item.type === 'class';
  });
  return new draft_js_multidecorators_default.a([].concat(toConsumableArray_default()(classDecorators.map(function (item) {
    return item.decorator;
  })), [// combine decorators created with strategy
  new external_draft_js_["CompositeDecorator"](strategyDecorators.map(function (item) {
    return item.decorator;
  })), // combine decorators for entities
  new external_draft_js_["CompositeDecorator"](entityDecorators.map(function (item) {
    return {
      strategy: createStrategy(item.decorator.key),
      component: item.decorator.component
    };
  }))]));
});
// CONCATENATED MODULE: ./renderers/index.js






var getBlockRenderMap = block_blockRenderMap;
var getBlockRendererFn = block_blockRendererFn;
var getBlockStyleFn = block_blockStyleFn;
var getCustomStyleMap = inlineStyleMap;
var getCustomStyleFn = inlineStyleFn;
var getDecorators = decorators;
// EXTERNAL MODULE: ./components/business/ControlBar/style.scss
var ControlBar_style = __webpack_require__(58);

// EXTERNAL MODULE: ./components/business/LinkEditor/style.scss
var LinkEditor_style = __webpack_require__(59);

// EXTERNAL MODULE: ./components/common/DropDown/style.scss
var DropDown_style = __webpack_require__(60);

// CONCATENATED MODULE: ./helpers/responsive.js


var resizeEventHandlers = [];
var responsiveHelperInited = false;
var debounce = false;
/* harmony default export */ var responsive = ({
  resolve: function resolve(eventHandler) {
    var id = UniqueIndex();
    resizeEventHandlers.push({
      id: id,
      eventHandler: eventHandler
    });
    return id;
  },
  unresolve: function unresolve(id) {
    resizeEventHandlers = resizeEventHandlers.filter(function (item) {
      return item.id !== id;
    });
  }
});

if (!responsiveHelperInited && (typeof window === "undefined" ? "undefined" : typeof_default()(window)) === 'object') {
  window.addEventListener('resize', function (event) {
    clearTimeout(debounce);
    debounce = setTimeout(function () {
      resizeEventHandlers.map(function (item) {
        typeof item.eventHandler === 'function' && item.eventHandler(event);
      });
      debounce = false;
    }, 100);
  });
  responsiveHelperInited = true;
}
// CONCATENATED MODULE: ./components/common/DropDown/index.jsx








function DropDown_createSuper(Derived) { var hasNativeReflectConstruct = DropDown_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function DropDown_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var DropDown_DropDown = /*#__PURE__*/function (_React$Component) {
  inherits_default()(DropDown, _React$Component);

  var _super = DropDown_createSuper(DropDown);

  function DropDown() {
    var _this;

    classCallCheck_default()(this, DropDown);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty_default()(assertThisInitialized_default()(_this), "responsiveResolveId", null);

    defineProperty_default()(assertThisInitialized_default()(_this), "dropDownHandlerElement", null);

    defineProperty_default()(assertThisInitialized_default()(_this), "dropDownContentElement", null);

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {
      active: false,
      offset: 0
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "fixDropDownPosition", function () {
      var viewRect = _this.props.getContainerNode().getBoundingClientRect();

      var handlerRect = _this.dropDownHandlerElement.getBoundingClientRect();

      var contentRect = _this.dropDownContentElement.getBoundingClientRect();

      var offset = 0;
      var right = handlerRect.right - handlerRect.width / 2 + contentRect.width / 2;
      var left = handlerRect.left + handlerRect.width / 2 - contentRect.width / 2;
      right = viewRect.right - right;
      left = left - viewRect.left;

      if (right < 10) {
        offset = right - 10;
      } else if (left < 10) {
        offset = left * -1 + 10;
      }

      if (offset !== _this.state.offset) {
        _this.setState({
          offset: offset
        });
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "registerClickEvent", function (event) {
      var autoHide = _this.props.autoHide;
      var active = _this.state.active;

      if (_this.dropDownContentElement.contains(event.target) || _this.dropDownHandlerElement.contains(event.target)) {
        return false;
      }

      autoHide && active && _this.hide();
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "toggle", function () {
      _this.setState({
        active: !_this.state.active
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "show", function () {
      _this.setState({
        active: true
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "hide", function () {
      _this.setState({
        active: false
      });
    });

    return _this;
  }

  createClass_default()(DropDown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (document) {
        document.body.addEventListener('click', this.registerClickEvent);
        this.responsiveResolveId = responsive.resolve(this.fixDropDownPosition);
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(next) {
      if (!this.props.disabled && next.disabled) {
        this.hide();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevState) {
      if (!prevState.active && this.state.active) {
        this.fixDropDownPosition();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (document) {
        document.body.removeEventListener('click', this.registerClickEvent);
        responsive.unresolve(this.responsiveResolveId);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          active = _this$state.active,
          offset = _this$state.offset;
      var _this$props = this.props,
          caption = _this$props.caption,
          htmlCaption = _this$props.htmlCaption,
          title = _this$props.title,
          disabled = _this$props.disabled,
          showArrow = _this$props.showArrow,
          arrowActive = _this$props.arrowActive,
          className = _this$props.className,
          children = _this$props.children,
          theme = _this$props.theme;
      disabled && (active = false);
      theme === 'light' && (className = ' light-theme ' + className);
      return /*#__PURE__*/external_react_default.a.createElement("div", {
        className: 'bf-dropdown ' + (active ? 'active ' : '') + (disabled ? 'disabled ' : '') + className
      }, htmlCaption ? /*#__PURE__*/external_react_default.a.createElement("button", {
        type: "button",
        className: "dropdown-handler",
        "data-title": title,
        onClick: this.toggle,
        dangerouslySetInnerHTML: htmlCaption ? {
          __html: htmlCaption
        } : null,
        ref: function ref(instance) {
          return _this2.dropDownHandlerElement = instance;
        }
      }) : /*#__PURE__*/external_react_default.a.createElement("button", {
        type: "button",
        className: "dropdown-handler",
        "data-title": title,
        onClick: this.toggle,
        ref: function ref(instance) {
          return _this2.dropDownHandlerElement = instance;
        }
      }, /*#__PURE__*/external_react_default.a.createElement("span", null, caption), showArrow !== false ? /*#__PURE__*/external_react_default.a.createElement("i", {
        className: "bfi-drop-down"
      }) : null), /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "dropdown-content",
        style: {
          marginLeft: offset
        },
        ref: function ref(instance) {
          return _this2.dropDownContentElement = instance;
        }
      }, /*#__PURE__*/external_react_default.a.createElement("i", {
        style: {
          marginLeft: offset * -1
        },
        className: 'dropdown-arrow' + (arrowActive ? ' active' : '')
      }), /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "dropdown-content-inner"
      }, children)));
    }
  }]);

  return DropDown;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./components/business/ControlGroup/index.jsx

/* harmony default export */ var ControlGroup = (function (props) {
  if (external_react_default.a.Fragment) {
    return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, props.children);
  } else {
    return /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "control-item-group"
    }, props.children);
  }
});
// CONCATENATED MODULE: ./components/business/LinkEditor/index.jsx








function LinkEditor_createSuper(Derived) { var hasNativeReflectConstruct = LinkEditor_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function LinkEditor_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var LinkEditor_LinkEditor = /*#__PURE__*/function (_React$Component) {
  inherits_default()(LinkEditor, _React$Component);

  var _super = LinkEditor_createSuper(LinkEditor);

  function LinkEditor(props) {
    var _this;

    classCallCheck_default()(this, LinkEditor);

    _this = _super.call(this, props);

    defineProperty_default()(assertThisInitialized_default()(_this), "dropDownInstance", null);

    defineProperty_default()(assertThisInitialized_default()(_this), "handeKeyDown", function (e) {
      if (e.keyCode === 13) {
        _this.handleConfirm();

        e.preventDefault();
        return false;
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleTnputText", function (e) {
      _this.setState({
        text: e.currentTarget.value
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleInputLink", function (e) {
      _this.setState({
        href: e.currentTarget.value
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "setTarget", function () {
      _this.setState({
        target: _this.state.target === '_blank' ? '' : '_blank'
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleCancel", function () {
      _this.dropDownInstance.hide();
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleUnlink", function () {
      _this.dropDownInstance.hide();

      _this.props.editor.setValue(content_toggleSelectionLink(_this.props.editorState, false));
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleConfirm", function () {
      var _this$state = _this.state,
          text = _this$state.text,
          href = _this$state.href,
          target = _this$state.target,
          textSelected = _this$state.textSelected;

      var hookReturns = _this.props.hooks('toggle-link', {
        href: href,
        target: target
      })({
        href: href,
        target: target
      });

      _this.dropDownInstance.hide();

      _this.props.editor.requestFocus();

      if (hookReturns === false) {
        return false;
      }

      if (hookReturns) {
        typeof hookReturns.href === 'string' && (href = hookReturns.href);
        typeof hookReturns.target === 'string' && (target = hookReturns.target);
      }

      if (textSelected) {
        if (href) {
          _this.props.editor.setValue(content_toggleSelectionLink(_this.props.editorState, href, target));
        } else {
          _this.props.editor.setValue(content_toggleSelectionLink(_this.props.editorState, false));
        }
      } else {
        _this.props.editor.setValue(content_insertText(_this.props.editorState, text || href, null, {
          type: 'LINK',
          data: {
            href: href,
            target: target
          }
        }));
      }
    });

    _this.state = {
      text: '',
      href: '',
      target: props.defaultLinkTarget || '',
      textSelected: false
    };
    return _this;
  }

  createClass_default()(LinkEditor, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _ContentUtils$getSele = content_getSelectionEntityData(nextProps.editorState, 'LINK'),
          href = _ContentUtils$getSele.href,
          target = _ContentUtils$getSele.target;

      var textSelected = !isSelectionCollapsed(this.props.editorState) && getSelectionBlockType(this.props.editorState) !== 'atomic';
      var selectedText = '';

      if (textSelected) {
        selectedText = getSelectionText(this.props.editorState);
      }

      this.setState({
        textSelected: textSelected,
        text: selectedText,
        href: href || '',
        target: typeof target === 'undefined' ? nextProps.defaultLinkTarget || '' : target || ''
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var allowInsertLinkText = this.props.allowInsertLinkText;
      var _this$state2 = this.state,
          text = _this$state2.text,
          href = _this$state2.href,
          textSelected = _this$state2.textSelected;
      var caption = /*#__PURE__*/external_react_default.a.createElement("i", {
        className: "bfi-link"
      });
      return /*#__PURE__*/external_react_default.a.createElement(ControlGroup, null, /*#__PURE__*/external_react_default.a.createElement(DropDown_DropDown, {
        key: 0,
        caption: caption,
        title: this.props.language.controls.link,
        autoHide: true,
        getContainerNode: this.props.getContainerNode,
        showArrow: false,
        ref: function ref(instance) {
          return _this2.dropDownInstance = instance;
        },
        className: 'control-item dropdown link-editor-dropdown'
      }, /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "bf-link-editor"
      }, allowInsertLinkText ? /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "input-group"
      }, /*#__PURE__*/external_react_default.a.createElement("input", {
        type: "text",
        value: text,
        spellCheck: false,
        disabled: textSelected,
        placeholder: this.props.language.linkEditor.textInputPlaceHolder,
        onKeyDown: this.handeKeyDown,
        onChange: this.handleTnputText
      })) : null, /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "input-group"
      }, /*#__PURE__*/external_react_default.a.createElement("input", {
        type: "text",
        value: href,
        spellCheck: false,
        placeholder: this.props.language.linkEditor.linkInputPlaceHolder,
        onKeyDown: this.handeKeyDown,
        onChange: this.handleInputLink
      })), /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "buttons"
      }, /*#__PURE__*/external_react_default.a.createElement("a", {
        onClick: this.handleUnlink,
        className: "primary button-remove-link pull-left"
      }, /*#__PURE__*/external_react_default.a.createElement("i", {
        className: "bfi-close"
      }), /*#__PURE__*/external_react_default.a.createElement("span", null, this.props.language.linkEditor.removeLink)), /*#__PURE__*/external_react_default.a.createElement("button", {
        type: "button",
        onClick: this.handleConfirm,
        className: "primary pull-right"
      }, this.props.language.base.confirm), /*#__PURE__*/external_react_default.a.createElement("button", {
        type: "button",
        onClick: this.handleCancel,
        className: "default pull-right"
      }, this.props.language.base.cancel)))), /*#__PURE__*/external_react_default.a.createElement("button", {
        key: 1,
        type: "button",
        "data-title": this.props.language.controls.unlink,
        className: "control-item button",
        onClick: this.handleUnlink,
        disabled: !textSelected || !href
      }, /*#__PURE__*/external_react_default.a.createElement("i", {
        className: "bfi-link-off"
      })));
    }
  }]);

  return LinkEditor;
}(external_react_default.a.Component);


// EXTERNAL MODULE: ./components/business/Headings/style.scss
var Headings_style = __webpack_require__(61);

// CONCATENATED MODULE: ./configs/maps.js

var maps_getHeadings = function getHeadings(lang) {
  return [{
    key: 'header-one',
    title: lang.controls.header + ' 1',
    text: /*#__PURE__*/external_react_default.a.createElement("h1", null, lang.controls.header, " 1"),
    type: 'block-type',
    command: 'header-one'
  }, {
    key: 'header-two',
    title: lang.controls.header + ' 2',
    text: /*#__PURE__*/external_react_default.a.createElement("h2", null, lang.controls.header, " 2"),
    type: 'block-type',
    command: 'header-two'
  }, {
    key: 'header-three',
    title: lang.controls.header + ' 3',
    text: /*#__PURE__*/external_react_default.a.createElement("h3", null, lang.controls.header, " 3"),
    type: 'block-type',
    command: 'header-three'
  }, {
    key: 'header-four',
    title: lang.controls.header + ' 4',
    text: /*#__PURE__*/external_react_default.a.createElement("h4", null, lang.controls.header, " 4"),
    type: 'block-type',
    command: 'header-four'
  }, {
    key: 'header-five',
    title: lang.controls.header + ' 5',
    text: /*#__PURE__*/external_react_default.a.createElement("h5", null, lang.controls.header, " 5"),
    type: 'block-type',
    command: 'header-five'
  }, {
    key: 'header-six',
    title: lang.controls.header + ' 6',
    text: /*#__PURE__*/external_react_default.a.createElement("h6", null, lang.controls.header, " 6"),
    type: 'block-type',
    command: 'header-six'
  }, {
    key: 'unstyled',
    title: lang.controls.normal,
    text: lang.controls.normal,
    type: 'block-type',
    command: 'unstyled'
  }];
};
var maps_blocks = {
  'header-one': 'h1',
  'header-two': 'h2',
  'header-three': 'h3',
  'header-four': 'h4',
  'header-fiv': 'h5',
  'header-six': 'h6',
  unstyled: 'p',
  blockquote: 'blockquote'
};
// CONCATENATED MODULE: ./components/business/Headings/index.jsx




/* harmony default export */ var Headings = (function (props) {
  var dropDownInstance = null;
  var headings = maps_getHeadings(props.language).filter(function (item) {
    return props.headings.indexOf(item.key) !== -1;
  });
  var currentHeadingIndex = headings.findIndex(function (item) {
    return item.command === props.current;
  });
  var caption = headings[currentHeadingIndex] ? headings[currentHeadingIndex].title : props.language.controls.normal;
  return /*#__PURE__*/external_react_default.a.createElement(DropDown_DropDown, {
    caption: caption,
    autoHide: true,
    getContainerNode: props.getContainerNode,
    title: props.language.controls.headings,
    arrowActive: currentHeadingIndex === 0,
    ref: function ref(instance) {
      return dropDownInstance = instance;
    },
    className: 'control-item dropdown headings-dropdown'
  }, /*#__PURE__*/external_react_default.a.createElement("ul", {
    className: "menu"
  }, headings.map(function (item, index) {
    var isActive = props.current === item.command;
    return /*#__PURE__*/external_react_default.a.createElement("li", {
      key: index,
      className: 'menu-item' + (isActive ? ' active' : ''),
      onClick: function onClick() {
        props.onChange(item.command, item.type), dropDownInstance.hide();
      }
    }, item.text);
  })));
});
// EXTERNAL MODULE: ./components/business/TextColor/style.scss
var TextColor_style = __webpack_require__(62);

// EXTERNAL MODULE: ./components/common/ColorPicker/style.scss
var ColorPicker_style = __webpack_require__(63);

// CONCATENATED MODULE: ./components/common/ColorPicker/index.jsx


/* harmony default export */ var common_ColorPicker = (function (props) {
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "bf-colors-wrap"
  }, /*#__PURE__*/external_react_default.a.createElement("ul", {
    className: "bf-colors"
  }, props.presetColors.map(function (item, index) {
    var className = props.color && item.toLowerCase() === props.color.toLowerCase() ? 'color-item active' : 'color-item';
    return /*#__PURE__*/external_react_default.a.createElement("li", {
      key: index,
      title: item,
      className: className,
      style: {
        color: item
      },
      "data-color": item.replace('#', ''),
      onClick: function onClick(e) {
        props.onChange(e.currentTarget.dataset.color, true);
      }
    });
  })));
});
// CONCATENATED MODULE: ./components/business/TextColor/index.jsx








function TextColor_createSuper(Derived) { var hasNativeReflectConstruct = TextColor_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function TextColor_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var TextColor_TextColor = /*#__PURE__*/function (_React$Component) {
  inherits_default()(TextColor, _React$Component);

  var _super = TextColor_createSuper(TextColor);

  function TextColor() {
    var _this;

    classCallCheck_default()(this, TextColor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {
      colorType: 'color'
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "switchColorType", function (_ref) {
      var currentTarget = _ref.currentTarget;

      _this.setState({
        colorType: currentTarget.dataset.type
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "toggleColor", function (color, closePicker) {
      if (color) {
        var hookReturns = _this.props.hooks("toggle-text-".concat(_this.state.colorType), color)(color);

        if (hookReturns === false) {
          return false;
        }

        if (typeof hookReturns === 'string') {
          color = hookReturns;
        }

        if (_this.state.colorType === 'color') {
          _this.props.editor.setValue(toggleSelectionColor(_this.props.editorState, color));
        } else {
          _this.props.editor.setValue(toggleSelectionBackgroundColor(_this.props.editorState, color));
        }
      }

      if (closePicker) {
        _this.dropDownInstance.hide();

        _this.props.editor.requestFocus();
      }
    });

    return _this;
  }

  createClass_default()(TextColor, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var captionStyle = {};
      var currentColor = null;
      var colorType = this.state.colorType;
      var selectionStyles = this.props.editorState.getCurrentInlineStyle().toJS();
      selectionStyles.forEach(function (style) {
        if (style.indexOf('COLOR-') === 0) {
          captionStyle.color = '#' + style.split('-')[1];
          colorType === 'color' && (currentColor = captionStyle.color);
        }

        if (style.indexOf('BGCOLOR-') === 0) {
          captionStyle.backgroundColor = '#' + style.split('-')[1];
          colorType === 'background-color' && (currentColor = captionStyle.backgroundColor);
        }
      });
      var caption = /*#__PURE__*/external_react_default.a.createElement("i", {
        style: captionStyle,
        className: "bfi-text-color"
      }, /*#__PURE__*/external_react_default.a.createElement("span", {
        className: "path1"
      }), /*#__PURE__*/external_react_default.a.createElement("span", {
        className: "path2"
      }));
      var ColorPicker = this.props.colorPicker || common_ColorPicker;
      return /*#__PURE__*/external_react_default.a.createElement(DropDown_DropDown, {
        caption: caption,
        title: this.props.language.controls.color,
        showArrow: false,
        autoHide: this.props.autoHide,
        theme: this.props.theme,
        getContainerNode: this.props.getContainerNode,
        ref: function ref(instance) {
          return _this2.dropDownInstance = instance;
        },
        className: 'control-item dropdown text-color-dropdown'
      }, /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "bf-text-color-picker-wrap"
      }, /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "bf-color-switch-buttons",
        style: this.props.enableBackgroundColor ? {} : {
          display: 'none'
        }
      }, /*#__PURE__*/external_react_default.a.createElement("button", {
        type: "button",
        "data-type": "color",
        className: colorType === 'color' ? 'active' : '',
        onClick: this.switchColorType
      }, this.props.language.controls.textColor), /*#__PURE__*/external_react_default.a.createElement("button", {
        type: "button",
        "data-type": "background-color",
        className: colorType === 'background-color' ? 'active' : '',
        onClick: this.switchColorType
      }, this.props.language.controls.backgroundColor)), /*#__PURE__*/external_react_default.a.createElement(ColorPicker, {
        width: 200,
        color: currentColor,
        disableAlpha: true,
        presetColors: this.props.colors,
        onChange: this.toggleColor
      })));
    }
  }]);

  return TextColor;
}(external_react_default.a.Component);


// EXTERNAL MODULE: ./components/business/FontSize/style.scss
var FontSize_style = __webpack_require__(64);

// CONCATENATED MODULE: ./components/business/FontSize/index.jsx





var FontSize_toggleFontSize = function toggleFontSize(event, props) {
  var fontSize = event.currentTarget.dataset.size;
  var hookReturns = props.hooks('toggle-font-size', fontSize)(fontSize);

  if (hookReturns === false) {
    return false;
  }

  if (!isNaN(fontSize)) {
    fontSize = hookReturns;
  }

  props.editor.setValue(toggleSelectionFontSize(props.editorState, fontSize));
  props.editor.requestFocus();
};

/* harmony default export */ var FontSize = (function (props) {
  var caption = null;
  var currentFontSize = null;
  var dropDownInstance = null;
  props.fontSizes.find(function (item) {
    if (selectionHasInlineStyle(props.editorState, 'FONTSIZE-' + item)) {
      caption = item;
      currentFontSize = item;
      return true;
    }

    return false;
  });
  return /*#__PURE__*/external_react_default.a.createElement(DropDown_DropDown, {
    autoHide: true,
    caption: caption || props.defaultCaption,
    getContainerNode: props.getContainerNode,
    title: props.language.controls.fontSize,
    ref: function ref(instance) {
      return dropDownInstance = instance;
    },
    className: 'control-item dropdown bf-font-size-dropdown'
  }, /*#__PURE__*/external_react_default.a.createElement("ul", {
    className: "bf-font-sizes"
  }, props.fontSizes.map(function (item, index) {
    return /*#__PURE__*/external_react_default.a.createElement("li", {
      key: index,
      className: item === currentFontSize ? 'active' : null,
      "data-size": item,
      onClick: function onClick(event) {
        FontSize_toggleFontSize(event, props), dropDownInstance.hide();
      }
    }, item);
  })));
});
// EXTERNAL MODULE: ./components/business/LineHeight/style.scss
var LineHeight_style = __webpack_require__(65);

// CONCATENATED MODULE: ./components/business/LineHeight/index.jsx





var LineHeight_toggleLineHeight = function toggleLineHeight(event, props) {
  var lineHeight = event.currentTarget.dataset.size;
  var hookReturns = props.hooks('toggle-line-height', lineHeight)(lineHeight);

  if (hookReturns === false) {
    return false;
  }

  if (!isNaN(hookReturns)) {
    lineHeight = hookReturns;
  }

  props.editor.setValue(toggleSelectionLineHeight(props.editorState, lineHeight));
  props.editor.requestFocus();
};

/* harmony default export */ var LineHeight = (function (props) {
  var caption = null;
  var currentLineHeight = null;
  var dropDownInstance = null;
  props.lineHeights.find(function (item) {
    if (selectionHasInlineStyle(props.editorState, 'LINEHEIGHT-' + item)) {
      caption = item;
      currentLineHeight = item;
      return true;
    }

    return false;
  });
  return /*#__PURE__*/external_react_default.a.createElement(DropDown_DropDown, {
    autoHide: true,
    caption: caption || props.defaultCaption,
    getContainerNode: props.getContainerNode,
    title: props.language.controls.lineHeight,
    ref: function ref(instance) {
      return dropDownInstance = instance;
    },
    className: 'control-item dropdown bf-line-height-dropdown'
  }, /*#__PURE__*/external_react_default.a.createElement("ul", {
    className: "bf-line-heights"
  }, props.lineHeights.map(function (item, index) {
    return /*#__PURE__*/external_react_default.a.createElement("li", {
      key: index,
      className: item === currentLineHeight ? 'active' : null,
      "data-size": item,
      onClick: function onClick(event) {
        LineHeight_toggleLineHeight(event, props), dropDownInstance.hide();
      }
    }, item);
  })));
});
// EXTERNAL MODULE: ./components/business/FontFamily/style.scss
var FontFamily_style = __webpack_require__(66);

// CONCATENATED MODULE: ./components/business/FontFamily/index.jsx





var FontFamily_toggleFontFamily = function toggleFontFamily(event, props) {
  var fontFamilyName = event.currentTarget.dataset.name;
  var hookReturns = props.hooks('toggle-font-family', fontFamilyName)(fontFamilyName, props.fontFamilies);

  if (hookReturns === false) {
    return false;
  }

  if (typeof hookReturns === 'string') {
    fontFamilyName = hookReturns;
  }

  props.editor.setValue(toggleSelectionFontFamily(props.editorState, fontFamilyName));
  props.editor.requestFocus();
};

/* harmony default export */ var FontFamily = (function (props) {
  var caption = null;
  var currentIndex = null;
  var dropDownInstance = null;
  props.fontFamilies.find(function (item, index) {
    if (selectionHasInlineStyle(props.editorState, 'FONTFAMILY-' + item.name)) {
      caption = item.name;
      currentIndex = index;
      return true;
    }

    return false;
  });
  return /*#__PURE__*/external_react_default.a.createElement(DropDown_DropDown, {
    caption: caption || props.defaultCaption,
    getContainerNode: props.getContainerNode,
    title: props.language.controls.fontFamily,
    autoHide: true,
    arrowActive: currentIndex === 0,
    ref: function ref(instance) {
      return dropDownInstance = instance;
    },
    className: 'control-item dropdown font-family-dropdown'
  }, /*#__PURE__*/external_react_default.a.createElement("ul", {
    className: "menu"
  }, props.fontFamilies.map(function (item, index) {
    return /*#__PURE__*/external_react_default.a.createElement("li", {
      key: index,
      className: 'menu-item ' + (index === currentIndex ? 'active' : ''),
      "data-name": item.name,
      onClick: function onClick(event) {
        FontFamily_toggleFontFamily(event, props), dropDownInstance.hide();
      }
    }, /*#__PURE__*/external_react_default.a.createElement("span", {
      style: {
        fontFamily: item.family
      }
    }, item.name));
  })));
});
// CONCATENATED MODULE: ./components/business/TextAlign/index.jsx








function TextAlign_createSuper(Derived) { var hasNativeReflectConstruct = TextAlign_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function TextAlign_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var TextAlign_TextAlign = /*#__PURE__*/function (_React$Component) {
  inherits_default()(TextAlign, _React$Component);

  var _super = TextAlign_createSuper(TextAlign);

  function TextAlign() {
    var _this;

    classCallCheck_default()(this, TextAlign);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {
      currentAlignment: undefined
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "setAlignment", function (event) {
      var alignment = event.currentTarget.dataset.alignment;

      var hookReturns = _this.props.hooks('toggle-text-alignment', alignment)(alignment);

      if (_this.props.textAligns.indexOf(hookReturns) > -1) {
        alignment = hookReturns;
      }

      _this.props.editor.setValue(toggleSelectionAlignment(_this.props.editorState, alignment));

      _this.props.editor.requestFocus();
    });

    return _this;
  }

  createClass_default()(TextAlign, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(next) {
      this.setState({
        currentAlignment: getSelectionBlockData(next.editorState, 'textAlign')
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var textAlignmentTitles = [this.props.language.controls.alignLeft, this.props.language.controls.alignCenter, this.props.language.controls.alignRight, this.props.language.controls.alignJustify];
      return /*#__PURE__*/external_react_default.a.createElement(ControlGroup, null, this.props.textAligns.map(function (item, index) {
        return /*#__PURE__*/external_react_default.a.createElement("button", {
          type: "button",
          key: index,
          "data-title": textAlignmentTitles[index],
          "data-alignment": item,
          className: 'control-item button ' + (item === _this2.state.currentAlignment ? 'active' : null),
          onClick: _this2.setAlignment
        }, /*#__PURE__*/external_react_default.a.createElement("i", {
          className: 'bfi-align-' + item
        }));
      }));
    }
  }]);

  return TextAlign;
}(external_react_default.a.Component);


// EXTERNAL MODULE: ./components/business/EmojiPicker/style.scss
var EmojiPicker_style = __webpack_require__(67);

// CONCATENATED MODULE: ./components/business/EmojiPicker/index.jsx





var EmojiPicker_insertEmoji = function insertEmoji(event, props) {
  var emoji = event.currentTarget.dataset.emoji;
  var hookReturns = props.hooks('insert-emoji', emoji)(emoji);

  if (hookReturns === false) {
    return false;
  }

  if (typeof hookReturns === 'string') {
    emoji = hookReturns;
  }

  props.editor.setValue(content_insertText(props.editorState, emoji));
  props.editor.requestFocus();
};

/* harmony default export */ var EmojiPicker = (function (props) {
  return /*#__PURE__*/external_react_default.a.createElement(DropDown_DropDown, {
    caption: props.defaultCaption,
    autoHide: true,
    showArrow: false,
    getContainerNode: props.getContainerNode,
    title: props.language.controls.emoji,
    className: 'control-item dropdown bf-emoji-dropdown'
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "bf-emojis-wrap"
  }, /*#__PURE__*/external_react_default.a.createElement("ul", {
    className: "bf-emojis"
  }, props.emojis.map(function (item, index) {
    return /*#__PURE__*/external_react_default.a.createElement("li", {
      key: index,
      "data-emoji": item,
      onClick: function onClick(event) {
        return EmojiPicker_insertEmoji(event, props);
      }
    }, item);
  }))));
});
// EXTERNAL MODULE: ./components/business/LetterSpacing/style.scss
var LetterSpacing_style = __webpack_require__(68);

// CONCATENATED MODULE: ./components/business/LetterSpacing/index.jsx





var LetterSpacing_toggleLetterSpacing = function toggleLetterSpacing(event, props) {
  var letterSpacing = event.currentTarget.dataset.size;
  var hookReturns = props.hooks('toggle-letter-spacing', letterSpacing)(letterSpacing);

  if (hookReturns === false) {
    return false;
  }

  if (!isNaN(hookReturns)) {
    letterSpacing = hookReturns;
  }

  props.editor.setValue(toggleSelectionLetterSpacing(props.editorState, letterSpacing));
  props.editor.requestFocus();
};

/* harmony default export */ var LetterSpacing = (function (props) {
  var caption = null;
  var currentLetterSpacing = null;
  var dropDownInstance = null;
  props.letterSpacings.find(function (item) {
    if (selectionHasInlineStyle(props.editorState, 'LETTERSPACING-' + item)) {
      caption = item;
      currentLetterSpacing = item;
      return true;
    }

    return false;
  });
  return /*#__PURE__*/external_react_default.a.createElement(DropDown_DropDown, {
    autoHide: true,
    caption: caption || props.defaultCaption,
    getContainerNode: props.getContainerNode,
    title: props.language.controls.letterSpacing,
    ref: function ref(instance) {
      return dropDownInstance = instance;
    },
    className: 'control-item dropdown bf-letter-spacing-dropdown'
  }, /*#__PURE__*/external_react_default.a.createElement("ul", {
    className: "bf-letter-spacings"
  }, props.letterSpacings.map(function (item, index) {
    return /*#__PURE__*/external_react_default.a.createElement("li", {
      key: index,
      className: item === currentLetterSpacing ? 'active' : null,
      "data-size": item,
      onClick: function onClick(event) {
        LetterSpacing_toggleLetterSpacing(event, props), dropDownInstance.hide();
      }
    }, item);
  })));
});
// CONCATENATED MODULE: ./components/business/TextIndent/index.jsx








function TextIndent_createSuper(Derived) { var hasNativeReflectConstruct = TextIndent_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function TextIndent_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var TextIndent_TextAlign = /*#__PURE__*/function (_React$Component) {
  inherits_default()(TextAlign, _React$Component);

  var _super = TextIndent_createSuper(TextAlign);

  function TextAlign() {
    var _this;

    classCallCheck_default()(this, TextAlign);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {
      currentIndent: 0
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "increaseIndent", function () {
      _this.props.editor.setValue(increaseSelectionIndent(_this.props.editorState));

      _this.props.editor.requestFocus();
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "decreaseIndent", function () {
      _this.props.editor.setValue(decreaseSelectionIndent(_this.props.editorState));

      _this.props.editor.requestFocus();
    });

    return _this;
  }

  createClass_default()(TextAlign, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        currentIndent: getSelectionBlockData(nextProps.editorState, 'textIndent') || 0
      });
    }
  }, {
    key: "render",
    value: function render() {
      var currentIndent = this.state.currentIndent;
      var language = this.props.language;
      return /*#__PURE__*/external_react_default.a.createElement(ControlGroup, null, /*#__PURE__*/external_react_default.a.createElement("button", {
        key: 0,
        type: "button",
        "data-title": language.controls.increaseIndent,
        disabled: currentIndent >= 6,
        className: "control-item button button-indent-increase".concat(currentIndent > 0 && currentIndent < 6 ? ' active' : ''),
        onClick: this.increaseIndent
      }, /*#__PURE__*/external_react_default.a.createElement("i", {
        className: 'bfi-indent-increase'
      })), /*#__PURE__*/external_react_default.a.createElement("button", {
        key: 1,
        type: "button",
        "data-title": language.controls.decreaseIndent,
        disabled: currentIndent <= 0,
        className: "control-item button button-indent-decrease",
        onClick: this.decreaseIndent
      }, /*#__PURE__*/external_react_default.a.createElement("i", {
        className: 'bfi-indent-decrease'
      })));
    }
  }]);

  return TextAlign;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./components/business/ControlBar/index.jsx









function ControlBar_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ControlBar_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ControlBar_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ControlBar_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ControlBar_createSuper(Derived) { var hasNativeReflectConstruct = ControlBar_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function ControlBar_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


















var commandHookMap = {
  'inline-style': 'toggle-inline-style',
  'block-type': 'change-block-type',
  'editor-method': 'exec-editor-command'
};
var exclusiveInlineStyles = {
  superscript: 'subscript',
  subscript: 'superscript'
};

var mergeControls = function mergeControls(commonProps, builtControls, extensionControls, extendControls) {
  extensionControls = extensionControls.map(function (item) {
    return typeof item === 'function' ? item(commonProps) : item;
  });
  extendControls = extendControls.map(function (item) {
    return typeof item === 'function' ? item(commonProps) : item;
  });

  if (extensionControls.length === 0 && extendControls.length === 0) {
    return builtControls;
  }

  return builtControls.map(function (item) {
    return extendControls.find(function (subItem) {
      return subItem.replace === (item.key || item);
    }) || extensionControls.find(function (subItem) {
      return subItem.replace === (item.key || item);
    }) || item;
  }).concat(extensionControls.length ? 'separator' : '').concat(extensionControls.filter(function (item) {
    return !item.replace;
  })).concat(extendControls.filter(function (item) {
    return typeof item === 'string' || !item.replace;
  }));
};

var ControlBar_ControlBar = /*#__PURE__*/function (_React$Component) {
  inherits_default()(ControlBar, _React$Component);

  var _super = ControlBar_createSuper(ControlBar);

  function ControlBar() {
    var _this;

    classCallCheck_default()(this, ControlBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty_default()(assertThisInitialized_default()(_this), "allControls", []);

    defineProperty_default()(assertThisInitialized_default()(_this), "mediaLibiraryModal", null);

    defineProperty_default()(assertThisInitialized_default()(_this), "extendedModals", {});

    defineProperty_default()(assertThisInitialized_default()(_this), "openBraftFinder", function () {
      if (!_this.props.braftFinder || !_this.props.braftFinder.ReactComponent) {
        return false;
      }

      if (_this.props.hooks('open-braft-finder')() === false) {
        return false;
      }

      var mediaProps = _this.props.media;
      var MediaLibrary = _this.props.braftFinder.ReactComponent;
      _this.mediaLibiraryModal = Modal_showModal({
        title: _this.props.language.controls.mediaLibirary,
        language: _this.props.language,
        width: 640,
        showFooter: false,
        component: /*#__PURE__*/external_react_default.a.createElement(MediaLibrary, {
          accepts: mediaProps.accepts,
          onCancel: _this.closeBraftFinder,
          onInsert: _this.insertMedias,
          onChange: mediaProps.onChange,
          externals: mediaProps.externals,
          onBeforeSelect: _this.bindBraftFinderHook('select-medias'),
          onBeforeDeselect: _this.bindBraftFinderHook('deselect-medias'),
          onBeforeRemove: _this.bindBraftFinderHook('remove-medias'),
          onBeforeInsert: _this.bindBraftFinderHook('insert-medias'),
          onFileSelect: _this.bindBraftFinderHook('select-files')
        })
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "bindBraftFinderHook", function (hookName) {
      return function () {
        return _this.props.hooks(hookName, arguments.length <= 0 ? undefined : arguments[0]).apply(void 0, arguments);
      };
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "insertMedias", function (medias) {
      _this.props.editor.setValue(insertMedias(_this.props.editorState, medias));

      _this.props.editor.requestFocus();

      _this.props.media.onInsert && _this.props.media.onInsert(medias);

      _this.closeBraftFinder();
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "closeBraftFinder", function () {
      _this.props.media.onCancel && _this.props.media.onCancel();
      _this.mediaLibiraryModal && _this.mediaLibiraryModal.close();
    });

    return _this;
  }

  createClass_default()(ControlBar, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this2 = this;

      var language = this.props.language;
      this.allControls.forEach(function (item) {
        if (item.type === 'modal') {
          if (item.modal && item.modal.id && _this2.extendedModals[item.modal.id]) {
            _this2.extendedModals[item.modal.id].update(ControlBar_objectSpread(ControlBar_objectSpread({}, item.modal), {}, {
              language: language
            }));
          }
        }
      });
    }
  }, {
    key: "getControlItemClassName",
    value: function getControlItemClassName(data) {
      var className = 'control-item button';
      var type = data.type,
          command = data.command;

      if (type === 'inline-style' && selectionHasInlineStyle(this.props.editorState, command)) {
        className += ' active';
      } else if (type === 'block-type' && getSelectionBlockType(this.props.editorState) === command) {
        className += ' active';
      } else if (type === 'entity' && content_getSelectionEntityType(this.props.editorState) === command) {
        className += ' active';
      }

      return className;
    }
  }, {
    key: "applyControl",
    value: function applyControl(command, type) {
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var hookReturns = this.props.hooks(commandHookMap[type] || type, command)(command);
      var editorState = this.props.editorState;

      if (hookReturns === false) {
        return false;
      }

      if (typeof hookReturns === 'string') {
        command = hookReturns;
      }

      if (type === 'inline-style') {
        var exclusiveInlineStyle = exclusiveInlineStyles[command];

        if (exclusiveInlineStyle && selectionHasInlineStyle(editorState, exclusiveInlineStyle)) {
          editorState = content_toggleSelectionInlineStyle(editorState, exclusiveInlineStyle);
        }

        this.props.editor.setValue(content_toggleSelectionInlineStyle(editorState, command));
      } else if (type === 'block-type') {
        this.props.editor.setValue(content_toggleSelectionBlockType(editorState, command));
      } else if (type === 'entity') {
        this.props.editor.setValue(content_toggleSelectionEntity(editorState, {
          type: command,
          mutability: data.mutability || 'MUTABLE',
          data: data.data || {}
        }));
      } else if (type === 'editor-method') {
        this.props.editor[command] && this.props.editor[command]();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          editor = _this$props.editor,
          editorId = _this$props.editorId,
          editorState = _this$props.editorState,
          className = _this$props.className,
          style = _this$props.style,
          controls = _this$props.controls,
          media = _this$props.media,
          extendControls = _this$props.extendControls,
          language = _this$props.language,
          hooks = _this$props.hooks,
          colors = _this$props.colors,
          colorPicker = _this$props.colorPicker,
          colorPickerTheme = _this$props.colorPickerTheme,
          colorPickerAutoHide = _this$props.colorPickerAutoHide,
          headings = _this$props.headings,
          fontSizes = _this$props.fontSizes,
          fontFamilies = _this$props.fontFamilies,
          emojis = _this$props.emojis,
          getContainerNode = _this$props.getContainerNode,
          lineHeights = _this$props.lineHeights,
          letterSpacings = _this$props.letterSpacings,
          textAligns = _this$props.textAligns,
          textBackgroundColor = _this$props.textBackgroundColor,
          allowInsertLinkText = _this$props.allowInsertLinkText,
          defaultLinkTarget = _this$props.defaultLinkTarget;
      var currentBlockType = getSelectionBlockType(editorState);
      var commonProps = {
        editor: editor,
        editorId: editorId,
        editorState: editorState,
        language: language,
        getContainerNode: getContainerNode,
        hooks: hooks
      };
      var renderedControls = [];
      var editorControls = configs_controls(language, editor);
      var extensionControls = getExtensionControls(editorId);
      var allControls = mergeControls(commonProps, controls, extensionControls, extendControls);
      this.allControls = allControls;
      return /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "bf-controlbar ".concat(className || ''),
        style: style,
        onMouseDown: this.preventDefault
      }, allControls.map(function (item, index) {
        var itemKey = typeof item === 'string' ? item : item.key;

        if (typeof itemKey !== 'string') {
          return null;
        }

        if (renderedControls.indexOf(itemKey) > -1) {
          return null;
        }

        if (itemKey.toLowerCase() === 'separator') {
          return /*#__PURE__*/external_react_default.a.createElement("span", {
            key: index,
            className: "separator-line"
          });
        }

        var controlItem = editorControls.find(function (subItem) {
          return subItem.key.toLowerCase() === itemKey.toLowerCase();
        });

        if (typeof item !== 'string') {
          controlItem = ControlBar_objectSpread(ControlBar_objectSpread({}, controlItem), item);
        }

        if (!controlItem) {
          return null;
        }

        renderedControls.push(itemKey);

        if (controlItem.type === 'headings') {
          return /*#__PURE__*/external_react_default.a.createElement(Headings, extends_default()({
            key: index,
            headings: headings,
            current: currentBlockType,
            onChange: function onChange(command) {
              return _this3.applyControl(command, 'block-type');
            }
          }, commonProps));
        } else if (controlItem.type === 'text-color') {
          return /*#__PURE__*/external_react_default.a.createElement(TextColor_TextColor, extends_default()({
            key: index,
            colors: colors,
            colorPicker: colorPicker,
            theme: colorPickerTheme,
            autoHide: colorPickerAutoHide,
            enableBackgroundColor: textBackgroundColor
          }, commonProps));
        } else if (controlItem.type === 'font-size') {
          return /*#__PURE__*/external_react_default.a.createElement(FontSize, extends_default()({
            key: index,
            fontSizes: fontSizes,
            defaultCaption: controlItem.title
          }, commonProps));
        } else if (controlItem.type === 'line-height') {
          return /*#__PURE__*/external_react_default.a.createElement(LineHeight, extends_default()({
            key: index,
            lineHeights: lineHeights,
            defaultCaption: controlItem.title
          }, commonProps));
        } else if (controlItem.type === 'letter-spacing') {
          return /*#__PURE__*/external_react_default.a.createElement(LetterSpacing, extends_default()({
            key: index,
            letterSpacings: letterSpacings,
            defaultCaption: controlItem.title
          }, commonProps));
        } else if (controlItem.type === 'text-indent') {
          return /*#__PURE__*/external_react_default.a.createElement(TextIndent_TextAlign, extends_default()({
            key: index,
            defaultCaption: controlItem.title
          }, commonProps));
        } else if (controlItem.type === 'font-family') {
          return /*#__PURE__*/external_react_default.a.createElement(FontFamily, extends_default()({
            key: index,
            fontFamilies: fontFamilies,
            defaultCaption: controlItem.title
          }, commonProps));
        } else if (controlItem.type === 'emoji') {
          return /*#__PURE__*/external_react_default.a.createElement(EmojiPicker, extends_default()({
            key: index,
            emojis: emojis,
            defaultCaption: controlItem.text
          }, commonProps));
        } else if (controlItem.type === 'link') {
          return /*#__PURE__*/external_react_default.a.createElement(LinkEditor_LinkEditor, extends_default()({
            key: index,
            defaultLinkTarget: defaultLinkTarget,
            allowInsertLinkText: allowInsertLinkText
          }, commonProps));
        } else if (controlItem.type === 'text-align') {
          return /*#__PURE__*/external_react_default.a.createElement(TextAlign_TextAlign, extends_default()({
            key: index,
            textAligns: textAligns
          }, commonProps));
        } else if (controlItem.type === 'media') {
          if (!media.image && !media.video && !media.audio) {
            return null;
          }

          return /*#__PURE__*/external_react_default.a.createElement("button", {
            type: "button",
            key: index,
            "data-title": controlItem.title,
            disabled: controlItem.disabled,
            className: "control-item media button",
            onClick: _this3.openBraftFinder
          }, controlItem.text);
        } else if (controlItem.type === 'dropdown') {
          return /*#__PURE__*/external_react_default.a.createElement(DropDown_DropDown, extends_default()({
            key: index,
            className: "control-item extend-control-item dropdown ".concat(controlItem.className || ''),
            caption: controlItem.text,
            htmlCaption: controlItem.html,
            showArrow: controlItem.showArrow,
            title: controlItem.title,
            arrowActive: controlItem.arrowActive,
            theme: controlItem.theme,
            autoHide: controlItem.autoHide,
            disabled: controlItem.disabled,
            ref: controlItem.ref
          }, commonProps), controlItem.component);
        } else if (controlItem.type === 'modal') {
          return /*#__PURE__*/external_react_default.a.createElement("button", {
            type: "button",
            key: index,
            "data-title": controlItem.title,
            disabled: controlItem.disabled,
            className: "control-item extend-control-item button ".concat(controlItem.className || ''),
            dangerouslySetInnerHTML: controlItem.html ? {
              __html: controlItem.html
            } : null,
            onClick: function onClick(event) {
              if (controlItem.modal && controlItem.modal.id) {
                if (_this3.extendedModals[controlItem.modal.id]) {
                  _this3.extendedModals[controlItem.modal.id].active = true;

                  _this3.extendedModals[controlItem.modal.id].update(ControlBar_objectSpread(ControlBar_objectSpread({}, controlItem.modal), {}, {
                    language: language
                  }));
                } else {
                  _this3.extendedModals[controlItem.modal.id] = Modal_showModal(ControlBar_objectSpread(ControlBar_objectSpread({}, controlItem.modal), {}, {
                    language: language
                  }));
                  controlItem.modal.onCreate && controlItem.modal.onCreate(_this3.extendedModals[controlItem.modal.id]);
                }
              }

              controlItem.onClick && controlItem.onClick(event);
            }
          }, !controlItem.html ? controlItem.text : null);
        } else if (controlItem.type === 'component') {
          return /*#__PURE__*/external_react_default.a.createElement("div", {
            key: index,
            className: "component-wrapper ".concat(controlItem.className || '')
          }, controlItem.component);
        } else if (controlItem.type === 'button') {
          return /*#__PURE__*/external_react_default.a.createElement("button", {
            type: "button",
            key: index,
            "data-title": controlItem.title,
            disabled: controlItem.disabled,
            className: "control-item button ".concat(controlItem.className || ''),
            dangerouslySetInnerHTML: controlItem.html ? {
              __html: controlItem.html
            } : null,
            onClick: function onClick(event) {
              return controlItem.onClick && controlItem.onClick(event);
            }
          }, !controlItem.html ? controlItem.text : null);
        } else if (controlItem) {
          var disabled = false;

          if (controlItem.command === 'undo') {
            disabled = editorState.getUndoStack().size === 0;
          } else if (controlItem.command === 'redo') {
            disabled = editorState.getRedoStack().size === 0;
          }

          return /*#__PURE__*/external_react_default.a.createElement("button", {
            type: "button",
            key: index,
            disabled: disabled,
            "data-title": controlItem.title,
            className: _this3.getControlItemClassName({
              type: controlItem.type,
              command: controlItem.command
            }),
            onClick: function onClick() {
              return _this3.applyControl(controlItem.command, controlItem.type, controlItem.data);
            }
          }, controlItem.text);
        }
      }));
    }
  }, {
    key: "preventDefault",
    value: function preventDefault(event) {
      var tagName = event.target.tagName.toLowerCase();

      if (tagName === 'input' || tagName === 'label') {// ...
      } else {
        event.preventDefault();
      }
    }
  }]);

  return ControlBar;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./editor/index.jsx










function editor_createSuper(Derived) { var hasNativeReflectConstruct = editor_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function editor_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function editor_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function editor_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { editor_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { editor_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

















var buildHooks = function buildHooks(hooks) {
  return function (hookName) {
    var defaultReturns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return hooks[hookName] || function () {
      return defaultReturns;
    };
  };
};

var filterColors = function filterColors(colors, colors2) {
  return colors.filter(function (item) {
    return !colors2.find(function (color) {
      return color.toLowerCase() === item.toLowerCase();
    });
  }).filter(function (item, index, array) {
    return array.indexOf(item) === index;
  });
};

var editor_isControlEnabled = function isControlEnabled(props, controlName) {
  return [].concat(toConsumableArray_default()(props.controls), toConsumableArray_default()(props.extendControls)).find(function (item) {
    return item === controlName || item.key === controlName;
  }) && props.excludeControls.indexOf(controlName) === -1;
};

var editor_getConvertOptions = function getConvertOptions(props) {
  var editorId = props.editorId || props.id;

  var convertOptions = editor_objectSpread(editor_objectSpread(editor_objectSpread({}, configs_props.converts), props.converts), {}, {
    fontFamilies: props.fontFamilies
  });

  convertOptions.styleImportFn = compositeStyleImportFn(convertOptions.styleImportFn, editorId);
  convertOptions.styleExportFn = compositeStyleExportFn(convertOptions.styleExportFn, editorId);
  convertOptions.entityImportFn = compositeEntityImportFn(convertOptions.entityImportFn, editorId);
  convertOptions.entityExportFn = compositeEntityExportFn(convertOptions.entityExportFn, editorId);
  convertOptions.blockImportFn = compositeBlockImportFn(convertOptions.blockImportFn, editorId);
  convertOptions.blockExportFn = compositeBlockExportFn(convertOptions.blockExportFn, editorId);
  return convertOptions;
};

var editor_BraftEditor = /*#__PURE__*/function (_React$Component) {
  inherits_default()(BraftEditor, _React$Component);

  var _super = editor_createSuper(BraftEditor);

  function BraftEditor(props) {
    var _this;

    classCallCheck_default()(this, BraftEditor);

    _this = _super.call(this, props);

    defineProperty_default()(assertThisInitialized_default()(_this), "onChange", function (editorState, callback) {
      if (!(editorState instanceof external_draft_js_["EditorState"])) {
        editorState = external_draft_js_["EditorState"].set(editorState, {
          decorator: _this.editorDecorators
        });
      }

      if (!editorState.convertOptions) {
        editorState.setConvertOptions(editor_getConvertOptions(_this.editorProps));
      }

      _this.setState({
        editorState: editorState
      }, function () {
        _this.props.onChange && _this.props.onChange(editorState);
        callback && callback(editorState);
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "getDraftInstance", function () {
      return _this.draftInstance;
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "getFinderInstance", function () {
      return _this.braftFinder;
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "getValue", function () {
      return _this.state.editorState;
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "setValue", function (editorState, callback) {
      return _this.onChange(editorState, callback);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "forceRender", function () {
      var selectionState = _this.state.editorState.getSelection();

      _this.setValue(external_draft_js_["EditorState"].set(_this.state.editorState, {
        decorator: _this.editorDecorators
      }), function () {
        _this.setValue(external_draft_js_["EditorState"].forceSelection(_this.state.editorState, selectionState));
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "onTab", function (event) {
      if (handlers_keyCommandHandlers('tab', _this.state.editorState, assertThisInitialized_default()(_this)) === 'handled') {
        event.preventDefault();
      }

      _this.editorProps.onTab && _this.editorProps.onTab(event);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "onFocus", function () {
      _this.isFocused = true;
      _this.editorProps.onFocus && _this.editorProps.onFocus(_this.state.editorState);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "onBlur", function () {
      _this.isFocused = false;
      _this.editorProps.onBlur && _this.editorProps.onBlur(_this.state.editorState);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "requestFocus", function () {
      setTimeout(function () {
        return _this.draftInstance.focus();
      }, 0);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleKeyCommand", function (command, editorState) {
      return handlers_keyCommandHandlers(command, editorState, assertThisInitialized_default()(_this));
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleReturn", function (event, editorState) {
      return handlers_returnHandlers(event, editorState, assertThisInitialized_default()(_this));
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleBeforeInput", function (chars, editorState) {
      return beforeInputHandlers(chars, editorState, assertThisInitialized_default()(_this));
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleDrop", function (selectionState, dataTransfer) {
      return handlers_dropHandlers(selectionState, dataTransfer, assertThisInitialized_default()(_this));
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleDroppedFiles", function (selectionState, files) {
      return droppedFilesHandlers(selectionState, files, assertThisInitialized_default()(_this));
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handlePastedFiles", function (files) {
      return pastedFilesHandlers(files, assertThisInitialized_default()(_this));
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleCopyContent", function (event) {
      return handlers_copyHandlers(event, assertThisInitialized_default()(_this));
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handlePastedText", function (text, html, editorState) {
      return handlers_pastedTextHandlers(text, html, editorState, assertThisInitialized_default()(_this));
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleCompositionStart", function (event) {
      return handlers_compositionStartHandler(event, assertThisInitialized_default()(_this));
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "undo", function () {
      _this.setValue(content_undo(_this.state.editorState));
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "redo", function () {
      _this.setValue(content_redo(_this.state.editorState));
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "removeSelectionInlineStyles", function () {
      _this.setValue(content_removeSelectionInlineStyles(_this.state.editorState));
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "insertHorizontalLine", function () {
      _this.setValue(insertHorizontalLine(_this.state.editorState));
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "clearEditorContent", function () {
      _this.setValue(content_clear(_this.state.editorState), function (editorState) {
        _this.setValue(toggleSelectionIndent(editorState, 0));
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "toggleFullscreen", function (fullscreen) {
      _this.setState({
        isFullscreen: typeof fullscreen !== 'undefined' ? fullscreen : !_this.state.isFullscreen
      }, function () {
        _this.editorProps.onFullscreen && _this.editorProps.onFullscreen(_this.state.isFullscreen);
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "setEditorContainerNode", function (containerNode) {
      _this.containerNode = containerNode;
    });

    _this.editorProps = _this.getEditorProps(props);
    _this.editorDecorators = getDecorators(_this.editorProps.editorId || _this.editorProps.id);
    _this.isFocused = false;
    _this.isLiving = false;
    _this.braftFinder = null;
    _this.valueInitialized = !!(_this.props.defaultValue || _this.props.value);
    var defaultEditorState = (_this.props.defaultValue || _this.props.value) instanceof external_draft_js_["EditorState"] ? _this.props.defaultValue || _this.props.value : external_draft_js_["EditorState"].createEmpty(_this.editorDecorators);
    defaultEditorState.setConvertOptions(editor_getConvertOptions(_this.editorProps));
    var tempColors = [];

    if (content_isEditorState(defaultEditorState)) {
      var colors = detectColorsFromDraftState(defaultEditorState.toRAW(true));
      defaultEditorState.setConvertOptions(editor_getConvertOptions(_this.editorProps));
      tempColors = filterColors(colors, _this.editorProps.colors);
    }

    _this.state = {
      tempColors: tempColors,
      editorState: defaultEditorState,
      isFullscreen: false,
      draftProps: {}
    };
    _this.containerNode = null;
    return _this;
  }

  createClass_default()(BraftEditor, [{
    key: "getEditorProps",
    value: function getEditorProps(props) {
      var _this2 = this;

      props = props || this.props;

      var _props = props,
          value = _props.value,
          defaultValue = _props.defaultValue,
          onChange = _props.onChange,
          restProps = objectWithoutProperties_default()(_props, ["value", "defaultValue", "onChange"]); // eslint-disable-line no-unused-vars


      var propInterceptors = getPropInterceptors(restProps.editorId || restProps.id);

      if (propInterceptors.length === 0) {
        return restProps;
      }

      var porpsMap = Object(external_immutable_["Map"])(restProps);
      propInterceptors.forEach(function (interceptor) {
        porpsMap = porpsMap.merge(Object(external_immutable_["Map"])(interceptor(porpsMap.toJS(), _this2) || {}));
      });
      return porpsMap.toJS();
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      if (editor_isControlEnabled(this.editorProps, 'media')) {
        var _this$editorProps = this.editorProps,
            language = _this$editorProps.language,
            media = _this$editorProps.media;

        var _defaultProps$media$m = editor_objectSpread(editor_objectSpread({}, configs_props.media), media),
            uploadFn = _defaultProps$media$m.uploadFn,
            validateFn = _defaultProps$media$m.validateFn,
            items = _defaultProps$media$m.items;

        this.braftFinder = new external_braft_finder_default.a({
          items: items,
          language: language,
          uploader: uploadFn,
          validator: validateFn
        });
        this.forceUpdate();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.isLiving = true;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_, prevState) {
      if (prevState.editorState !== this.state.editorState) {
        this.state.editorState.setConvertOptions(editor_getConvertOptions(this.editorProps));
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      var _this3 = this;

      this.editorProps = this.getEditorProps(props);
      var editorState = props.value;
      var _this$editorProps2 = this.editorProps,
          media = _this$editorProps2.media,
          language = _this$editorProps2.language;
      var currentProps = this.getEditorProps();

      if (!editor_isControlEnabled(currentProps, 'media') && editor_isControlEnabled(this.editorProps, 'media') && !this.braftFinder) {
        var _defaultProps$media$m2 = editor_objectSpread(editor_objectSpread({}, configs_props.media), media),
            uploadFn = _defaultProps$media$m2.uploadFn,
            validateFn = _defaultProps$media$m2.validateFn,
            items = _defaultProps$media$m2.items;

        this.braftFinder = new external_braft_finder_default.a({
          items: items,
          language: language,
          uploader: uploadFn,
          validator: validateFn
        });
        this.forceUpdate();
      }

      if (media && media.items && this.braftFinder) {
        this.braftFinder.setItems(media.items);
      }

      var nextEditorState;

      if (!this.valueInitialized && typeof this.props.defaultValue === 'undefined' && content_isEditorState(props.defaultValue)) {
        nextEditorState = props.defaultValue;
      } else if (content_isEditorState(editorState)) {
        nextEditorState = editorState;
      }

      if (nextEditorState) {
        if (nextEditorState && nextEditorState !== this.state.editorState) {
          var tempColors = detectColorsFromDraftState(nextEditorState.toRAW(true));
          nextEditorState.setConvertOptions(editor_getConvertOptions(this.editorProps));
          this.setState({
            tempColors: filterColors([].concat(toConsumableArray_default()(this.state.tempColors), toConsumableArray_default()(tempColors)), currentProps.colors),
            editorState: nextEditorState
          }, function () {
            _this3.props.onChange && _this3.props.onChange(nextEditorState);
          });
        } else {
          this.setState({
            editorState: nextEditorState
          });
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isLiving = false;
      this.controlBarInstance && this.controlBarInstance.closeBraftFinder();
    }
  }, {
    key: "lockOrUnlockEditor",
    value: function lockOrUnlockEditor(editorLocked) {
      this.setState({
        editorLocked: editorLocked
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$editorProps3 = this.editorProps,
          id = _this$editorProps3.id,
          editorId = _this$editorProps3.editorId,
          controls = _this$editorProps3.controls,
          excludeControls = _this$editorProps3.excludeControls,
          extendControls = _this$editorProps3.extendControls,
          readOnly = _this$editorProps3.readOnly,
          disabled = _this$editorProps3.disabled,
          media = _this$editorProps3.media,
          language = _this$editorProps3.language,
          colors = _this$editorProps3.colors,
          colorPicker = _this$editorProps3.colorPicker,
          colorPickerTheme = _this$editorProps3.colorPickerTheme,
          colorPickerAutoHide = _this$editorProps3.colorPickerAutoHide,
          hooks = _this$editorProps3.hooks,
          fontSizes = _this$editorProps3.fontSizes,
          fontFamilies = _this$editorProps3.fontFamilies,
          emojis = _this$editorProps3.emojis,
          placeholder = _this$editorProps3.placeholder,
          fixPlaceholder = _this$editorProps3.fixPlaceholder,
          headings = _this$editorProps3.headings,
          imageControls = _this$editorProps3.imageControls,
          imageResizable = _this$editorProps3.imageResizable,
          lineHeights = _this$editorProps3.lineHeights,
          letterSpacings = _this$editorProps3.letterSpacings,
          textAligns = _this$editorProps3.textAligns,
          textBackgroundColor = _this$editorProps3.textBackgroundColor,
          allowInsertLinkText = _this$editorProps3.allowInsertLinkText,
          defaultLinkTarget = _this$editorProps3.defaultLinkTarget,
          extendAtomics = _this$editorProps3.extendAtomics,
          className = _this$editorProps3.className,
          style = _this$editorProps3.style,
          controlBarClassName = _this$editorProps3.controlBarClassName,
          controlBarStyle = _this$editorProps3.controlBarStyle,
          contentClassName = _this$editorProps3.contentClassName,
          contentStyle = _this$editorProps3.contentStyle,
          stripPastedStyles = _this$editorProps3.stripPastedStyles,
          componentBelowControlBar = _this$editorProps3.componentBelowControlBar;
      var _this$state = this.state,
          isFullscreen = _this$state.isFullscreen,
          editorState = _this$state.editorState;
      editorId = editorId || id;
      hooks = buildHooks(hooks);
      controls = controls.filter(function (item) {
        return excludeControls.indexOf(item) === -1;
      });
      language = (typeof language === 'function' ? language(languages, 'braft-editor') : languages[language]) || languages[configs_props.language];
      var externalMedias = media && media.externals ? editor_objectSpread(editor_objectSpread({}, configs_props.media.externals), media.externals) : configs_props.media.externals;
      var accepts = media && media.accepts ? editor_objectSpread(editor_objectSpread({}, configs_props.media.accepts), media.accepts) : configs_props.media.accepts;
      media = editor_objectSpread(editor_objectSpread(editor_objectSpread({}, configs_props.media), media), {}, {
        externalMedias: externalMedias,
        accepts: accepts
      });

      if (!media.uploadFn) {
        media.video = false;
        media.audio = false;
      }

      var controlBarProps = {
        editor: this,
        editorState: editorState,
        braftFinder: this.braftFinder,
        ref: function ref(instance) {
          return _this4.controlBarInstance = instance;
        },
        getContainerNode: function getContainerNode() {
          return _this4.containerNode;
        },
        className: controlBarClassName,
        style: controlBarStyle,
        colors: [].concat(toConsumableArray_default()(colors), toConsumableArray_default()(this.state.tempColors)),
        colorPicker: colorPicker,
        colorPickerTheme: colorPickerTheme,
        colorPickerAutoHide: colorPickerAutoHide,
        hooks: hooks,
        editorId: editorId,
        media: media,
        controls: controls,
        language: language,
        extendControls: extendControls,
        headings: headings,
        fontSizes: fontSizes,
        fontFamilies: fontFamilies,
        emojis: emojis,
        lineHeights: lineHeights,
        letterSpacings: letterSpacings,
        textAligns: textAligns,
        textBackgroundColor: textBackgroundColor,
        allowInsertLinkText: allowInsertLinkText,
        defaultLinkTarget: defaultLinkTarget
      };
      var unitExportFn = editorState.convertOptions.unitExportFn;
      var commonProps = {
        editor: this,
        editorId: editorId,
        hooks: hooks,
        editorState: editorState,
        containerNode: this.containerNode,
        imageControls: imageControls,
        imageResizable: imageResizable,
        language: language,
        extendAtomics: extendAtomics
      };
      var blockRendererFn = getBlockRendererFn(commonProps, this.editorProps.blockRendererFn);
      var blockRenderMap = getBlockRenderMap(commonProps, this.editorProps.blockRenderMap);
      var blockStyleFn = getBlockStyleFn(this.editorProps.blockStyleFn);
      var customStyleMap = getCustomStyleMap(commonProps, this.editorProps.customStyleMap);
      var customStyleFn = getCustomStyleFn(commonProps, {
        fontFamilies: fontFamilies,
        unitExportFn: unitExportFn,
        customStyleFn: this.editorProps.customStyleFn
      });
      var keyBindingFn = keybindings(this.editorProps.keyBindingFn);
      var mixedProps = {};

      if (this.state.editorLocked || this.editorProps.disabled || this.editorProps.readOnly || this.editorProps.draftProps.readOnly) {
        mixedProps.readOnly = true;
      }

      if (placeholder && fixPlaceholder && editorState.isEmpty() && editorState.getCurrentContent().getFirstBlock().getType() !== 'unstyled') {
        placeholder = '';
      }

      var draftProps = editor_objectSpread(editor_objectSpread({
        ref: function ref(instance) {
          _this4.draftInstance = instance;
        },
        editorState: editorState,
        handleKeyCommand: this.handleKeyCommand,
        handleReturn: this.handleReturn,
        handleBeforeInput: this.handleBeforeInput,
        handleDrop: this.handleDrop,
        handleDroppedFiles: this.handleDroppedFiles,
        handlePastedText: this.handlePastedText,
        handlePastedFiles: this.handlePastedFiles,
        onChange: this.onChange,
        onTab: this.onTab,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        blockRenderMap: blockRenderMap,
        blockRendererFn: blockRendererFn,
        blockStyleFn: blockStyleFn,
        customStyleMap: customStyleMap,
        customStyleFn: customStyleFn,
        keyBindingFn: keyBindingFn,
        placeholder: placeholder,
        stripPastedStyles: stripPastedStyles
      }, this.editorProps.draftProps), mixedProps);

      return /*#__PURE__*/external_react_default.a.createElement("div", {
        style: style,
        ref: this.setEditorContainerNode,
        className: "bf-container ".concat(className).concat(disabled ? ' disabled' : '').concat(readOnly ? ' read-only' : '').concat(isFullscreen ? ' fullscreen' : '')
      }, /*#__PURE__*/external_react_default.a.createElement(ControlBar_ControlBar, controlBarProps), componentBelowControlBar, /*#__PURE__*/external_react_default.a.createElement("div", {
        onCompositionStart: this.handleCompositionStart,
        className: "bf-content ".concat(contentClassName),
        onCopy: this.handleCopyContent,
        style: contentStyle
      }, /*#__PURE__*/external_react_default.a.createElement(external_draft_js_["Editor"], draftProps)));
    }
  }]);

  return BraftEditor;
}(external_react_default.a.Component);

defineProperty_default()(editor_BraftEditor, "defaultProps", configs_props);



// CONCATENATED MODULE: ./index.jsx



function index_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function index_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { index_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { index_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







external_draft_js_["EditorState"].prototype.setConvertOptions = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  this.convertOptions = options;
};

external_draft_js_["EditorState"].prototype.toHTML = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var convertOptions = this.convertOptions || {};
  return covert_convertEditorStateToHTML(this, index_objectSpread(index_objectSpread({}, convertOptions), options));
};

external_draft_js_["EditorState"].prototype.toRAW = function (noStringify) {
  return noStringify ? covert_convertEditorStateToRaw(this) : JSON.stringify(covert_convertEditorStateToRaw(this));
};

external_draft_js_["EditorState"].prototype.toText = function () {
  return this.getCurrentContent().getPlainText();
};

external_draft_js_["EditorState"].prototype.isEmpty = function () {
  return !this.getCurrentContent().hasText();
};

editor_BraftEditor.createEditorState = external_draft_js_["EditorState"].createFrom = function (content) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  options.unitExportFn = options.unitExportFn || editor_BraftEditor.defaultProps.converts.unitExportFn;
  options.styleImportFn = compositeStyleImportFn(options.styleImportFn, options.editorId);
  options.entityImportFn = compositeEntityImportFn(options.entityImportFn, options.editorId);
  options.blockImportFn = compositeBlockImportFn(options.blockImportFn, options.editorId);
  var editorState = null;

  if (content instanceof external_draft_js_["EditorState"]) {
    editorState = content;
  } else if (typeof_default()(content) === 'object' && content && content.blocks && content.entityMap) {
    editorState = covert_convertRawToEditorState(content, getDecorators(options.editorId));
  } else if (typeof content === 'string') {
    try {
      if (/^(-)?\d+$/.test(content)) {
        editorState = covert_convertHTMLToEditorState(content, getDecorators(options.editorId), options, 'create');
      } else {
        editorState = external_draft_js_["EditorState"].createFrom(JSON.parse(content), options);
      }
    } catch (error) {
      editorState = covert_convertHTMLToEditorState(content, getDecorators(options.editorId), options, 'create');
    }
  } else if (typeof content === 'number') {
    editorState = covert_convertHTMLToEditorState(content.toLocaleString().replace(/,/g, ''), getDecorators(options.editorId), options, 'create');
  } else {
    editorState = external_draft_js_["EditorState"].createEmpty(getDecorators(options.editorId));
  }

  options.styleExportFn = compositeStyleExportFn(options.styleExportFn, options.editorId);
  options.entityExportFn = compositeEntityExportFn(options.entityExportFn, options.editorId);
  options.blockExportFn = compositeBlockExportFn(options.blockExportFn, options.editorId);
  editorState.setConvertOptions(options);
  return editorState;
};

/* harmony default export */ var index_0 = __webpack_exports__["default"] = (createExtensibleEditor(editor_BraftEditor));

var BraftCovert = {
  convertRawToEditorState: covert_convertRawToEditorState,
  convertHTMLToEditorState: covert_convertHTMLToEditorState,
  convertEditorStateToRaw: covert_convertEditorStateToRaw,
  convertEditorStateToHTML: covert_convertEditorStateToHTML
};
var BraftUtils = {
  ContentUtils: content_namespaceObject,
  BaseUtils: base_namespaceObject,
  ColorUtils: color_namespaceObject
}; // 2.1版本开发计划
// [ ]优化选中多行文字是插入链接报错的问题
// [ ]新增编辑器内图片删除hook
// 2.2版本开发计划
// [ ]表格功能
// [ ]美化UI，包括图标和界面风格
// 2.3版本开发计划
// [ ]初级md快捷输入支持
// [ ]图片裁切等简单的编辑功能
// [ ]允许自定义快捷键

/***/ }),
/* 43 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 44 */,
/* 45 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 46 */,
/* 47 */,
/* 48 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 49 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 50 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 51 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 52 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 53 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 54 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 55 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 56 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 57 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 58 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 59 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 60 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 61 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 62 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 63 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 64 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 65 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 66 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 67 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 68 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map