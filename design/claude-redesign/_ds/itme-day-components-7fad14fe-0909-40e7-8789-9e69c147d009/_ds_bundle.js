/* @ds-bundle: {"namespace":"ItmeDayDS","components":[{"name":"Button","sourcePath":"components/general/Button/Button.jsx"},{"name":"Card","sourcePath":"components/general/Card/Card.jsx"},{"name":"GobbyMascot","sourcePath":"components/gobby/GobbyMascot/GobbyMascot.jsx"},{"name":"SlidingTabTrigger","sourcePath":"components/general/SlidingTabTrigger/SlidingTabTrigger.jsx"},{"name":"Tabs","sourcePath":"components/general/Tabs/Tabs.jsx"},{"name":"TextFxPanel","sourcePath":"components/text-fx/TextFxPanel/TextFxPanel.jsx"},{"name":"ThemeToggle","sourcePath":"components/general/ThemeToggle/ThemeToggle.jsx"}],"sourceHashes":{"components/general/Button/Button.jsx":"5b36128b50a6","components/general/Button/Button.d.ts":"91f7414531b8","components/general/Button/Button.prompt.md":"c3db65619b76","components/general/Card/Card.jsx":"d0e46f06f8a0","components/general/Card/Card.d.ts":"4571c1ad481d","components/general/Card/Card.prompt.md":"4f248827ae75","components/gobby/GobbyMascot/GobbyMascot.jsx":"1aaa0d11f79b","components/gobby/GobbyMascot/GobbyMascot.d.ts":"85cfb86278cc","components/gobby/GobbyMascot/GobbyMascot.prompt.md":"772b5794864c","components/general/SlidingTabTrigger/SlidingTabTrigger.jsx":"71907a128352","components/general/SlidingTabTrigger/SlidingTabTrigger.d.ts":"31f91dd3d4cf","components/general/SlidingTabTrigger/SlidingTabTrigger.prompt.md":"16b96c598ee7","components/general/Tabs/Tabs.jsx":"d26d8084a9e2","components/general/Tabs/Tabs.d.ts":"a101af9f892b","components/general/Tabs/Tabs.prompt.md":"f0ac9a10a372","components/text-fx/TextFxPanel/TextFxPanel.jsx":"f92973bd9759","components/text-fx/TextFxPanel/TextFxPanel.d.ts":"375402860f2a","components/text-fx/TextFxPanel/TextFxPanel.prompt.md":"5eac9c357642","components/general/ThemeToggle/ThemeToggle.jsx":"79cc90a74b2a","components/general/ThemeToggle/ThemeToggle.d.ts":"8d664ee6f6d4","components/general/ThemeToggle/ThemeToggle.prompt.md":"dfefacd74fdd"},"inlinedExternals":["@radix-ui/primitive","@radix-ui/react-collection","@radix-ui/react-compose-refs","@radix-ui/react-context","@radix-ui/react-direction","@radix-ui/react-id","@radix-ui/react-presence","@radix-ui/react-primitive","@radix-ui/react-roving-focus","@radix-ui/react-slot","@radix-ui/react-tabs","@radix-ui/react-use-callback-ref","@radix-ui/react-use-controllable-state","@radix-ui/react-use-effect-event","@radix-ui/react-use-layout-effect","animejs","class-variance-authority","clsx","framer-motion","lucide-react","motion","motion-dom","motion-utils","remeda","tailwind-merge"],"builtBy":"cc-design-sync"} */
"use strict";
var ItmeDayDS = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // <define:import.meta.env>
  var init_define_import_meta_env = __esm({
    "<define:import.meta.env>"() {
    }
  });

  // shim:react-shim
  var require_react_shim = __commonJS({
    "shim:react-shim"(exports, module) {
      init_define_import_meta_env();
      var R = window.React;
      function np(p, k) {
        var o = {};
        for (var x in p) if (x !== "children") o[x] = p[x];
        if (k !== void 0) o.key = k;
        return o;
      }
      function jsx12(t7, p, k) {
        var c = p && p.children;
        return c === void 0 ? R.createElement(t7, np(p, k)) : R.createElement(t7, np(p, k), c);
      }
      function jsxs2(t7, p, k) {
        return R.createElement.apply(R, [t7, np(p, k)].concat(p.children));
      }
      module.exports = R;
      module.exports.jsx = jsx12;
      module.exports.jsxs = jsxs2;
      module.exports.jsxDEV = function(t7, p, k, s) {
        return (s ? jsxs2 : jsx12)(t7, p, k);
      };
      module.exports.Fragment = R.Fragment;
    }
  });

  // node_modules/clsx/dist/clsx.mjs
  function r(e2) {
    var t7, f, n5 = "";
    if ("string" == typeof e2 || "number" == typeof e2) n5 += e2;
    else if ("object" == typeof e2) if (Array.isArray(e2)) {
      var o = e2.length;
      for (t7 = 0; t7 < o; t7++) e2[t7] && (f = r(e2[t7])) && (n5 && (n5 += " "), n5 += f);
    } else for (f in e2) e2[f] && (n5 && (n5 += " "), n5 += f);
    return n5;
  }
  function clsx() {
    for (var e2, t7, f = 0, n5 = "", o = arguments.length; f < o; f++) (e2 = arguments[f]) && (t7 = r(e2)) && (n5 && (n5 += " "), n5 += t7);
    return n5;
  }
  var init_clsx = __esm({
    "node_modules/clsx/dist/clsx.mjs"() {
      init_define_import_meta_env();
    }
  });

  // node_modules/tailwind-merge/dist/bundle-mjs.mjs
  function twJoin() {
    let index = 0;
    let argument;
    let resolvedValue;
    let string = "";
    while (index < arguments.length) {
      if (argument = arguments[index++]) {
        if (resolvedValue = toValue(argument)) {
          string && (string += " ");
          string += resolvedValue;
        }
      }
    }
    return string;
  }
  function createTailwindMerge(createConfigFirst, ...createConfigRest) {
    let configUtils;
    let cacheGet;
    let cacheSet;
    let functionToCall = initTailwindMerge;
    function initTailwindMerge(classList) {
      const config = createConfigRest.reduce((previousConfig, createConfigCurrent) => createConfigCurrent(previousConfig), createConfigFirst());
      configUtils = createConfigUtils(config);
      cacheGet = configUtils.cache.get;
      cacheSet = configUtils.cache.set;
      functionToCall = tailwindMerge;
      return tailwindMerge(classList);
    }
    function tailwindMerge(classList) {
      const cachedResult = cacheGet(classList);
      if (cachedResult) {
        return cachedResult;
      }
      const result = mergeClassList(classList, configUtils);
      cacheSet(classList, result);
      return result;
    }
    return function callTailwindMerge() {
      return functionToCall(twJoin.apply(null, arguments));
    };
  }
  var CLASS_PART_SEPARATOR, createClassGroupUtils, getGroupRecursive, arbitraryPropertyRegex, getGroupIdForArbitraryProperty, createClassMap, processClassesRecursively, getPart, isThemeGetter, getPrefixedClassGroupEntries, createLruCache, IMPORTANT_MODIFIER, createParseClassName, sortModifiers, createConfigUtils, SPLIT_CLASSES_REGEX, mergeClassList, toValue, fromTheme, arbitraryValueRegex, fractionRegex, stringLengths, tshirtUnitRegex, lengthUnitRegex, colorFunctionRegex, shadowRegex, imageRegex, isLength, isArbitraryLength, isNumber, isArbitraryNumber, isInteger, isPercent, isArbitraryValue, isTshirtSize, sizeLabels, isArbitrarySize, isArbitraryPosition, imageLabels, isArbitraryImage, isArbitraryShadow, isAny, getIsArbitraryValue, isLengthOnly, isNever, isShadow, isImage, getDefaultConfig, twMerge;
  var init_bundle_mjs = __esm({
    "node_modules/tailwind-merge/dist/bundle-mjs.mjs"() {
      init_define_import_meta_env();
      CLASS_PART_SEPARATOR = "-";
      createClassGroupUtils = (config) => {
        const classMap = createClassMap(config);
        const {
          conflictingClassGroups,
          conflictingClassGroupModifiers
        } = config;
        const getClassGroupId = (className) => {
          const classParts = className.split(CLASS_PART_SEPARATOR);
          if (classParts[0] === "" && classParts.length !== 1) {
            classParts.shift();
          }
          return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
        };
        const getConflictingClassGroupIds = (classGroupId, hasPostfixModifier) => {
          const conflicts = conflictingClassGroups[classGroupId] || [];
          if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
            return [...conflicts, ...conflictingClassGroupModifiers[classGroupId]];
          }
          return conflicts;
        };
        return {
          getClassGroupId,
          getConflictingClassGroupIds
        };
      };
      getGroupRecursive = (classParts, classPartObject) => {
        if (classParts.length === 0) {
          return classPartObject.classGroupId;
        }
        const currentClassPart = classParts[0];
        const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
        const classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : void 0;
        if (classGroupFromNextClassPart) {
          return classGroupFromNextClassPart;
        }
        if (classPartObject.validators.length === 0) {
          return void 0;
        }
        const classRest = classParts.join(CLASS_PART_SEPARATOR);
        return classPartObject.validators.find(({
          validator
        }) => validator(classRest))?.classGroupId;
      };
      arbitraryPropertyRegex = /^\[(.+)\]$/;
      getGroupIdForArbitraryProperty = (className) => {
        if (arbitraryPropertyRegex.test(className)) {
          const arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
          const property = arbitraryPropertyClassName?.substring(0, arbitraryPropertyClassName.indexOf(":"));
          if (property) {
            return "arbitrary.." + property;
          }
        }
      };
      createClassMap = (config) => {
        const {
          theme,
          prefix
        } = config;
        const classMap = {
          nextPart: /* @__PURE__ */ new Map(),
          validators: []
        };
        const prefixedClassGroupEntries = getPrefixedClassGroupEntries(Object.entries(config.classGroups), prefix);
        prefixedClassGroupEntries.forEach(([classGroupId, classGroup]) => {
          processClassesRecursively(classGroup, classMap, classGroupId, theme);
        });
        return classMap;
      };
      processClassesRecursively = (classGroup, classPartObject, classGroupId, theme) => {
        classGroup.forEach((classDefinition) => {
          if (typeof classDefinition === "string") {
            const classPartObjectToEdit = classDefinition === "" ? classPartObject : getPart(classPartObject, classDefinition);
            classPartObjectToEdit.classGroupId = classGroupId;
            return;
          }
          if (typeof classDefinition === "function") {
            if (isThemeGetter(classDefinition)) {
              processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
              return;
            }
            classPartObject.validators.push({
              validator: classDefinition,
              classGroupId
            });
            return;
          }
          Object.entries(classDefinition).forEach(([key, classGroup2]) => {
            processClassesRecursively(classGroup2, getPart(classPartObject, key), classGroupId, theme);
          });
        });
      };
      getPart = (classPartObject, path) => {
        let currentClassPartObject = classPartObject;
        path.split(CLASS_PART_SEPARATOR).forEach((pathPart) => {
          if (!currentClassPartObject.nextPart.has(pathPart)) {
            currentClassPartObject.nextPart.set(pathPart, {
              nextPart: /* @__PURE__ */ new Map(),
              validators: []
            });
          }
          currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
        });
        return currentClassPartObject;
      };
      isThemeGetter = (func) => func.isThemeGetter;
      getPrefixedClassGroupEntries = (classGroupEntries, prefix) => {
        if (!prefix) {
          return classGroupEntries;
        }
        return classGroupEntries.map(([classGroupId, classGroup]) => {
          const prefixedClassGroup = classGroup.map((classDefinition) => {
            if (typeof classDefinition === "string") {
              return prefix + classDefinition;
            }
            if (typeof classDefinition === "object") {
              return Object.fromEntries(Object.entries(classDefinition).map(([key, value]) => [prefix + key, value]));
            }
            return classDefinition;
          });
          return [classGroupId, prefixedClassGroup];
        });
      };
      createLruCache = (maxCacheSize) => {
        if (maxCacheSize < 1) {
          return {
            get: () => void 0,
            set: () => {
            }
          };
        }
        let cacheSize = 0;
        let cache2 = /* @__PURE__ */ new Map();
        let previousCache = /* @__PURE__ */ new Map();
        const update = (key, value) => {
          cache2.set(key, value);
          cacheSize++;
          if (cacheSize > maxCacheSize) {
            cacheSize = 0;
            previousCache = cache2;
            cache2 = /* @__PURE__ */ new Map();
          }
        };
        return {
          get(key) {
            let value = cache2.get(key);
            if (value !== void 0) {
              return value;
            }
            if ((value = previousCache.get(key)) !== void 0) {
              update(key, value);
              return value;
            }
          },
          set(key, value) {
            if (cache2.has(key)) {
              cache2.set(key, value);
            } else {
              update(key, value);
            }
          }
        };
      };
      IMPORTANT_MODIFIER = "!";
      createParseClassName = (config) => {
        const {
          separator,
          experimentalParseClassName
        } = config;
        const isSeparatorSingleCharacter = separator.length === 1;
        const firstSeparatorCharacter = separator[0];
        const separatorLength = separator.length;
        const parseClassName = (className) => {
          const modifiers = [];
          let bracketDepth = 0;
          let modifierStart = 0;
          let postfixModifierPosition;
          for (let index = 0; index < className.length; index++) {
            let currentCharacter = className[index];
            if (bracketDepth === 0) {
              if (currentCharacter === firstSeparatorCharacter && (isSeparatorSingleCharacter || className.slice(index, index + separatorLength) === separator)) {
                modifiers.push(className.slice(modifierStart, index));
                modifierStart = index + separatorLength;
                continue;
              }
              if (currentCharacter === "/") {
                postfixModifierPosition = index;
                continue;
              }
            }
            if (currentCharacter === "[") {
              bracketDepth++;
            } else if (currentCharacter === "]") {
              bracketDepth--;
            }
          }
          const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
          const hasImportantModifier = baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER);
          const baseClassName = hasImportantModifier ? baseClassNameWithImportantModifier.substring(1) : baseClassNameWithImportantModifier;
          const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : void 0;
          return {
            modifiers,
            hasImportantModifier,
            baseClassName,
            maybePostfixModifierPosition
          };
        };
        if (experimentalParseClassName) {
          return (className) => experimentalParseClassName({
            className,
            parseClassName
          });
        }
        return parseClassName;
      };
      sortModifiers = (modifiers) => {
        if (modifiers.length <= 1) {
          return modifiers;
        }
        const sortedModifiers = [];
        let unsortedModifiers = [];
        modifiers.forEach((modifier) => {
          const isArbitraryVariant = modifier[0] === "[";
          if (isArbitraryVariant) {
            sortedModifiers.push(...unsortedModifiers.sort(), modifier);
            unsortedModifiers = [];
          } else {
            unsortedModifiers.push(modifier);
          }
        });
        sortedModifiers.push(...unsortedModifiers.sort());
        return sortedModifiers;
      };
      createConfigUtils = (config) => ({
        cache: createLruCache(config.cacheSize),
        parseClassName: createParseClassName(config),
        ...createClassGroupUtils(config)
      });
      SPLIT_CLASSES_REGEX = /\s+/;
      mergeClassList = (classList, configUtils) => {
        const {
          parseClassName,
          getClassGroupId,
          getConflictingClassGroupIds
        } = configUtils;
        const classGroupsInConflict = [];
        const classNames = classList.trim().split(SPLIT_CLASSES_REGEX);
        let result = "";
        for (let index = classNames.length - 1; index >= 0; index -= 1) {
          const originalClassName = classNames[index];
          const {
            modifiers,
            hasImportantModifier,
            baseClassName,
            maybePostfixModifierPosition
          } = parseClassName(originalClassName);
          let hasPostfixModifier = Boolean(maybePostfixModifierPosition);
          let classGroupId = getClassGroupId(hasPostfixModifier ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
          if (!classGroupId) {
            if (!hasPostfixModifier) {
              result = originalClassName + (result.length > 0 ? " " + result : result);
              continue;
            }
            classGroupId = getClassGroupId(baseClassName);
            if (!classGroupId) {
              result = originalClassName + (result.length > 0 ? " " + result : result);
              continue;
            }
            hasPostfixModifier = false;
          }
          const variantModifier = sortModifiers(modifiers).join(":");
          const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
          const classId = modifierId + classGroupId;
          if (classGroupsInConflict.includes(classId)) {
            continue;
          }
          classGroupsInConflict.push(classId);
          const conflictGroups = getConflictingClassGroupIds(classGroupId, hasPostfixModifier);
          for (let i2 = 0; i2 < conflictGroups.length; ++i2) {
            const group = conflictGroups[i2];
            classGroupsInConflict.push(modifierId + group);
          }
          result = originalClassName + (result.length > 0 ? " " + result : result);
        }
        return result;
      };
      toValue = (mix2) => {
        if (typeof mix2 === "string") {
          return mix2;
        }
        let resolvedValue;
        let string = "";
        for (let k = 0; k < mix2.length; k++) {
          if (mix2[k]) {
            if (resolvedValue = toValue(mix2[k])) {
              string && (string += " ");
              string += resolvedValue;
            }
          }
        }
        return string;
      };
      fromTheme = (key) => {
        const themeGetter = (theme) => theme[key] || [];
        themeGetter.isThemeGetter = true;
        return themeGetter;
      };
      arbitraryValueRegex = /^\[(?:([a-z-]+):)?(.+)\]$/i;
      fractionRegex = /^\d+\/\d+$/;
      stringLengths = /* @__PURE__ */ new Set(["px", "full", "screen"]);
      tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
      lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
      colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/;
      shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
      imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
      isLength = (value) => isNumber(value) || stringLengths.has(value) || fractionRegex.test(value);
      isArbitraryLength = (value) => getIsArbitraryValue(value, "length", isLengthOnly);
      isNumber = (value) => Boolean(value) && !Number.isNaN(Number(value));
      isArbitraryNumber = (value) => getIsArbitraryValue(value, "number", isNumber);
      isInteger = (value) => Boolean(value) && Number.isInteger(Number(value));
      isPercent = (value) => value.endsWith("%") && isNumber(value.slice(0, -1));
      isArbitraryValue = (value) => arbitraryValueRegex.test(value);
      isTshirtSize = (value) => tshirtUnitRegex.test(value);
      sizeLabels = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
      isArbitrarySize = (value) => getIsArbitraryValue(value, sizeLabels, isNever);
      isArbitraryPosition = (value) => getIsArbitraryValue(value, "position", isNever);
      imageLabels = /* @__PURE__ */ new Set(["image", "url"]);
      isArbitraryImage = (value) => getIsArbitraryValue(value, imageLabels, isImage);
      isArbitraryShadow = (value) => getIsArbitraryValue(value, "", isShadow);
      isAny = () => true;
      getIsArbitraryValue = (value, label, testValue) => {
        const result = arbitraryValueRegex.exec(value);
        if (result) {
          if (result[1]) {
            return typeof label === "string" ? result[1] === label : label.has(result[1]);
          }
          return testValue(result[2]);
        }
        return false;
      };
      isLengthOnly = (value) => (
        // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
        // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
        // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
        lengthUnitRegex.test(value) && !colorFunctionRegex.test(value)
      );
      isNever = () => false;
      isShadow = (value) => shadowRegex.test(value);
      isImage = (value) => imageRegex.test(value);
      getDefaultConfig = () => {
        const colors = fromTheme("colors");
        const spacing = fromTheme("spacing");
        const blur = fromTheme("blur");
        const brightness = fromTheme("brightness");
        const borderColor = fromTheme("borderColor");
        const borderRadius = fromTheme("borderRadius");
        const borderSpacing = fromTheme("borderSpacing");
        const borderWidth = fromTheme("borderWidth");
        const contrast = fromTheme("contrast");
        const grayscale = fromTheme("grayscale");
        const hueRotate = fromTheme("hueRotate");
        const invert = fromTheme("invert");
        const gap = fromTheme("gap");
        const gradientColorStops = fromTheme("gradientColorStops");
        const gradientColorStopPositions = fromTheme("gradientColorStopPositions");
        const inset = fromTheme("inset");
        const margin = fromTheme("margin");
        const opacity = fromTheme("opacity");
        const padding = fromTheme("padding");
        const saturate = fromTheme("saturate");
        const scale2 = fromTheme("scale");
        const sepia = fromTheme("sepia");
        const skew = fromTheme("skew");
        const space = fromTheme("space");
        const translate = fromTheme("translate");
        const getOverscroll = () => ["auto", "contain", "none"];
        const getOverflow = () => ["auto", "hidden", "clip", "visible", "scroll"];
        const getSpacingWithAutoAndArbitrary = () => ["auto", isArbitraryValue, spacing];
        const getSpacingWithArbitrary = () => [isArbitraryValue, spacing];
        const getLengthWithEmptyAndArbitrary = () => ["", isLength, isArbitraryLength];
        const getNumberWithAutoAndArbitrary = () => ["auto", isNumber, isArbitraryValue];
        const getPositions = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
        const getLineStyles = () => ["solid", "dashed", "dotted", "double", "none"];
        const getBlendModes = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"];
        const getAlign = () => ["start", "end", "center", "between", "around", "evenly", "stretch"];
        const getZeroAndEmpty = () => ["", "0", isArbitraryValue];
        const getBreaks = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
        const getNumberAndArbitrary = () => [isNumber, isArbitraryValue];
        return {
          cacheSize: 500,
          separator: ":",
          theme: {
            colors: [isAny],
            spacing: [isLength, isArbitraryLength],
            blur: ["none", "", isTshirtSize, isArbitraryValue],
            brightness: getNumberAndArbitrary(),
            borderColor: [colors],
            borderRadius: ["none", "", "full", isTshirtSize, isArbitraryValue],
            borderSpacing: getSpacingWithArbitrary(),
            borderWidth: getLengthWithEmptyAndArbitrary(),
            contrast: getNumberAndArbitrary(),
            grayscale: getZeroAndEmpty(),
            hueRotate: getNumberAndArbitrary(),
            invert: getZeroAndEmpty(),
            gap: getSpacingWithArbitrary(),
            gradientColorStops: [colors],
            gradientColorStopPositions: [isPercent, isArbitraryLength],
            inset: getSpacingWithAutoAndArbitrary(),
            margin: getSpacingWithAutoAndArbitrary(),
            opacity: getNumberAndArbitrary(),
            padding: getSpacingWithArbitrary(),
            saturate: getNumberAndArbitrary(),
            scale: getNumberAndArbitrary(),
            sepia: getZeroAndEmpty(),
            skew: getNumberAndArbitrary(),
            space: getSpacingWithArbitrary(),
            translate: getSpacingWithArbitrary()
          },
          classGroups: {
            // Layout
            /**
             * Aspect Ratio
             * @see https://tailwindcss.com/docs/aspect-ratio
             */
            aspect: [{
              aspect: ["auto", "square", "video", isArbitraryValue]
            }],
            /**
             * Container
             * @see https://tailwindcss.com/docs/container
             */
            container: ["container"],
            /**
             * Columns
             * @see https://tailwindcss.com/docs/columns
             */
            columns: [{
              columns: [isTshirtSize]
            }],
            /**
             * Break After
             * @see https://tailwindcss.com/docs/break-after
             */
            "break-after": [{
              "break-after": getBreaks()
            }],
            /**
             * Break Before
             * @see https://tailwindcss.com/docs/break-before
             */
            "break-before": [{
              "break-before": getBreaks()
            }],
            /**
             * Break Inside
             * @see https://tailwindcss.com/docs/break-inside
             */
            "break-inside": [{
              "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            /**
             * Box Decoration Break
             * @see https://tailwindcss.com/docs/box-decoration-break
             */
            "box-decoration": [{
              "box-decoration": ["slice", "clone"]
            }],
            /**
             * Box Sizing
             * @see https://tailwindcss.com/docs/box-sizing
             */
            box: [{
              box: ["border", "content"]
            }],
            /**
             * Display
             * @see https://tailwindcss.com/docs/display
             */
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            /**
             * Floats
             * @see https://tailwindcss.com/docs/float
             */
            float: [{
              float: ["right", "left", "none", "start", "end"]
            }],
            /**
             * Clear
             * @see https://tailwindcss.com/docs/clear
             */
            clear: [{
              clear: ["left", "right", "both", "none", "start", "end"]
            }],
            /**
             * Isolation
             * @see https://tailwindcss.com/docs/isolation
             */
            isolation: ["isolate", "isolation-auto"],
            /**
             * Object Fit
             * @see https://tailwindcss.com/docs/object-fit
             */
            "object-fit": [{
              object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            /**
             * Object Position
             * @see https://tailwindcss.com/docs/object-position
             */
            "object-position": [{
              object: [...getPositions(), isArbitraryValue]
            }],
            /**
             * Overflow
             * @see https://tailwindcss.com/docs/overflow
             */
            overflow: [{
              overflow: getOverflow()
            }],
            /**
             * Overflow X
             * @see https://tailwindcss.com/docs/overflow
             */
            "overflow-x": [{
              "overflow-x": getOverflow()
            }],
            /**
             * Overflow Y
             * @see https://tailwindcss.com/docs/overflow
             */
            "overflow-y": [{
              "overflow-y": getOverflow()
            }],
            /**
             * Overscroll Behavior
             * @see https://tailwindcss.com/docs/overscroll-behavior
             */
            overscroll: [{
              overscroll: getOverscroll()
            }],
            /**
             * Overscroll Behavior X
             * @see https://tailwindcss.com/docs/overscroll-behavior
             */
            "overscroll-x": [{
              "overscroll-x": getOverscroll()
            }],
            /**
             * Overscroll Behavior Y
             * @see https://tailwindcss.com/docs/overscroll-behavior
             */
            "overscroll-y": [{
              "overscroll-y": getOverscroll()
            }],
            /**
             * Position
             * @see https://tailwindcss.com/docs/position
             */
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            /**
             * Top / Right / Bottom / Left
             * @see https://tailwindcss.com/docs/top-right-bottom-left
             */
            inset: [{
              inset: [inset]
            }],
            /**
             * Right / Left
             * @see https://tailwindcss.com/docs/top-right-bottom-left
             */
            "inset-x": [{
              "inset-x": [inset]
            }],
            /**
             * Top / Bottom
             * @see https://tailwindcss.com/docs/top-right-bottom-left
             */
            "inset-y": [{
              "inset-y": [inset]
            }],
            /**
             * Start
             * @see https://tailwindcss.com/docs/top-right-bottom-left
             */
            start: [{
              start: [inset]
            }],
            /**
             * End
             * @see https://tailwindcss.com/docs/top-right-bottom-left
             */
            end: [{
              end: [inset]
            }],
            /**
             * Top
             * @see https://tailwindcss.com/docs/top-right-bottom-left
             */
            top: [{
              top: [inset]
            }],
            /**
             * Right
             * @see https://tailwindcss.com/docs/top-right-bottom-left
             */
            right: [{
              right: [inset]
            }],
            /**
             * Bottom
             * @see https://tailwindcss.com/docs/top-right-bottom-left
             */
            bottom: [{
              bottom: [inset]
            }],
            /**
             * Left
             * @see https://tailwindcss.com/docs/top-right-bottom-left
             */
            left: [{
              left: [inset]
            }],
            /**
             * Visibility
             * @see https://tailwindcss.com/docs/visibility
             */
            visibility: ["visible", "invisible", "collapse"],
            /**
             * Z-Index
             * @see https://tailwindcss.com/docs/z-index
             */
            z: [{
              z: ["auto", isInteger, isArbitraryValue]
            }],
            // Flexbox and Grid
            /**
             * Flex Basis
             * @see https://tailwindcss.com/docs/flex-basis
             */
            basis: [{
              basis: getSpacingWithAutoAndArbitrary()
            }],
            /**
             * Flex Direction
             * @see https://tailwindcss.com/docs/flex-direction
             */
            "flex-direction": [{
              flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            /**
             * Flex Wrap
             * @see https://tailwindcss.com/docs/flex-wrap
             */
            "flex-wrap": [{
              flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            /**
             * Flex
             * @see https://tailwindcss.com/docs/flex
             */
            flex: [{
              flex: ["1", "auto", "initial", "none", isArbitraryValue]
            }],
            /**
             * Flex Grow
             * @see https://tailwindcss.com/docs/flex-grow
             */
            grow: [{
              grow: getZeroAndEmpty()
            }],
            /**
             * Flex Shrink
             * @see https://tailwindcss.com/docs/flex-shrink
             */
            shrink: [{
              shrink: getZeroAndEmpty()
            }],
            /**
             * Order
             * @see https://tailwindcss.com/docs/order
             */
            order: [{
              order: ["first", "last", "none", isInteger, isArbitraryValue]
            }],
            /**
             * Grid Template Columns
             * @see https://tailwindcss.com/docs/grid-template-columns
             */
            "grid-cols": [{
              "grid-cols": [isAny]
            }],
            /**
             * Grid Column Start / End
             * @see https://tailwindcss.com/docs/grid-column
             */
            "col-start-end": [{
              col: ["auto", {
                span: ["full", isInteger, isArbitraryValue]
              }, isArbitraryValue]
            }],
            /**
             * Grid Column Start
             * @see https://tailwindcss.com/docs/grid-column
             */
            "col-start": [{
              "col-start": getNumberWithAutoAndArbitrary()
            }],
            /**
             * Grid Column End
             * @see https://tailwindcss.com/docs/grid-column
             */
            "col-end": [{
              "col-end": getNumberWithAutoAndArbitrary()
            }],
            /**
             * Grid Template Rows
             * @see https://tailwindcss.com/docs/grid-template-rows
             */
            "grid-rows": [{
              "grid-rows": [isAny]
            }],
            /**
             * Grid Row Start / End
             * @see https://tailwindcss.com/docs/grid-row
             */
            "row-start-end": [{
              row: ["auto", {
                span: [isInteger, isArbitraryValue]
              }, isArbitraryValue]
            }],
            /**
             * Grid Row Start
             * @see https://tailwindcss.com/docs/grid-row
             */
            "row-start": [{
              "row-start": getNumberWithAutoAndArbitrary()
            }],
            /**
             * Grid Row End
             * @see https://tailwindcss.com/docs/grid-row
             */
            "row-end": [{
              "row-end": getNumberWithAutoAndArbitrary()
            }],
            /**
             * Grid Auto Flow
             * @see https://tailwindcss.com/docs/grid-auto-flow
             */
            "grid-flow": [{
              "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            /**
             * Grid Auto Columns
             * @see https://tailwindcss.com/docs/grid-auto-columns
             */
            "auto-cols": [{
              "auto-cols": ["auto", "min", "max", "fr", isArbitraryValue]
            }],
            /**
             * Grid Auto Rows
             * @see https://tailwindcss.com/docs/grid-auto-rows
             */
            "auto-rows": [{
              "auto-rows": ["auto", "min", "max", "fr", isArbitraryValue]
            }],
            /**
             * Gap
             * @see https://tailwindcss.com/docs/gap
             */
            gap: [{
              gap: [gap]
            }],
            /**
             * Gap X
             * @see https://tailwindcss.com/docs/gap
             */
            "gap-x": [{
              "gap-x": [gap]
            }],
            /**
             * Gap Y
             * @see https://tailwindcss.com/docs/gap
             */
            "gap-y": [{
              "gap-y": [gap]
            }],
            /**
             * Justify Content
             * @see https://tailwindcss.com/docs/justify-content
             */
            "justify-content": [{
              justify: ["normal", ...getAlign()]
            }],
            /**
             * Justify Items
             * @see https://tailwindcss.com/docs/justify-items
             */
            "justify-items": [{
              "justify-items": ["start", "end", "center", "stretch"]
            }],
            /**
             * Justify Self
             * @see https://tailwindcss.com/docs/justify-self
             */
            "justify-self": [{
              "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            /**
             * Align Content
             * @see https://tailwindcss.com/docs/align-content
             */
            "align-content": [{
              content: ["normal", ...getAlign(), "baseline"]
            }],
            /**
             * Align Items
             * @see https://tailwindcss.com/docs/align-items
             */
            "align-items": [{
              items: ["start", "end", "center", "baseline", "stretch"]
            }],
            /**
             * Align Self
             * @see https://tailwindcss.com/docs/align-self
             */
            "align-self": [{
              self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            /**
             * Place Content
             * @see https://tailwindcss.com/docs/place-content
             */
            "place-content": [{
              "place-content": [...getAlign(), "baseline"]
            }],
            /**
             * Place Items
             * @see https://tailwindcss.com/docs/place-items
             */
            "place-items": [{
              "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            /**
             * Place Self
             * @see https://tailwindcss.com/docs/place-self
             */
            "place-self": [{
              "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            // Spacing
            /**
             * Padding
             * @see https://tailwindcss.com/docs/padding
             */
            p: [{
              p: [padding]
            }],
            /**
             * Padding X
             * @see https://tailwindcss.com/docs/padding
             */
            px: [{
              px: [padding]
            }],
            /**
             * Padding Y
             * @see https://tailwindcss.com/docs/padding
             */
            py: [{
              py: [padding]
            }],
            /**
             * Padding Start
             * @see https://tailwindcss.com/docs/padding
             */
            ps: [{
              ps: [padding]
            }],
            /**
             * Padding End
             * @see https://tailwindcss.com/docs/padding
             */
            pe: [{
              pe: [padding]
            }],
            /**
             * Padding Top
             * @see https://tailwindcss.com/docs/padding
             */
            pt: [{
              pt: [padding]
            }],
            /**
             * Padding Right
             * @see https://tailwindcss.com/docs/padding
             */
            pr: [{
              pr: [padding]
            }],
            /**
             * Padding Bottom
             * @see https://tailwindcss.com/docs/padding
             */
            pb: [{
              pb: [padding]
            }],
            /**
             * Padding Left
             * @see https://tailwindcss.com/docs/padding
             */
            pl: [{
              pl: [padding]
            }],
            /**
             * Margin
             * @see https://tailwindcss.com/docs/margin
             */
            m: [{
              m: [margin]
            }],
            /**
             * Margin X
             * @see https://tailwindcss.com/docs/margin
             */
            mx: [{
              mx: [margin]
            }],
            /**
             * Margin Y
             * @see https://tailwindcss.com/docs/margin
             */
            my: [{
              my: [margin]
            }],
            /**
             * Margin Start
             * @see https://tailwindcss.com/docs/margin
             */
            ms: [{
              ms: [margin]
            }],
            /**
             * Margin End
             * @see https://tailwindcss.com/docs/margin
             */
            me: [{
              me: [margin]
            }],
            /**
             * Margin Top
             * @see https://tailwindcss.com/docs/margin
             */
            mt: [{
              mt: [margin]
            }],
            /**
             * Margin Right
             * @see https://tailwindcss.com/docs/margin
             */
            mr: [{
              mr: [margin]
            }],
            /**
             * Margin Bottom
             * @see https://tailwindcss.com/docs/margin
             */
            mb: [{
              mb: [margin]
            }],
            /**
             * Margin Left
             * @see https://tailwindcss.com/docs/margin
             */
            ml: [{
              ml: [margin]
            }],
            /**
             * Space Between X
             * @see https://tailwindcss.com/docs/space
             */
            "space-x": [{
              "space-x": [space]
            }],
            /**
             * Space Between X Reverse
             * @see https://tailwindcss.com/docs/space
             */
            "space-x-reverse": ["space-x-reverse"],
            /**
             * Space Between Y
             * @see https://tailwindcss.com/docs/space
             */
            "space-y": [{
              "space-y": [space]
            }],
            /**
             * Space Between Y Reverse
             * @see https://tailwindcss.com/docs/space
             */
            "space-y-reverse": ["space-y-reverse"],
            // Sizing
            /**
             * Width
             * @see https://tailwindcss.com/docs/width
             */
            w: [{
              w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", isArbitraryValue, spacing]
            }],
            /**
             * Min-Width
             * @see https://tailwindcss.com/docs/min-width
             */
            "min-w": [{
              "min-w": [isArbitraryValue, spacing, "min", "max", "fit"]
            }],
            /**
             * Max-Width
             * @see https://tailwindcss.com/docs/max-width
             */
            "max-w": [{
              "max-w": [isArbitraryValue, spacing, "none", "full", "min", "max", "fit", "prose", {
                screen: [isTshirtSize]
              }, isTshirtSize]
            }],
            /**
             * Height
             * @see https://tailwindcss.com/docs/height
             */
            h: [{
              h: [isArbitraryValue, spacing, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            /**
             * Min-Height
             * @see https://tailwindcss.com/docs/min-height
             */
            "min-h": [{
              "min-h": [isArbitraryValue, spacing, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            /**
             * Max-Height
             * @see https://tailwindcss.com/docs/max-height
             */
            "max-h": [{
              "max-h": [isArbitraryValue, spacing, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            /**
             * Size
             * @see https://tailwindcss.com/docs/size
             */
            size: [{
              size: [isArbitraryValue, spacing, "auto", "min", "max", "fit"]
            }],
            // Typography
            /**
             * Font Size
             * @see https://tailwindcss.com/docs/font-size
             */
            "font-size": [{
              text: ["base", isTshirtSize, isArbitraryLength]
            }],
            /**
             * Font Smoothing
             * @see https://tailwindcss.com/docs/font-smoothing
             */
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            /**
             * Font Style
             * @see https://tailwindcss.com/docs/font-style
             */
            "font-style": ["italic", "not-italic"],
            /**
             * Font Weight
             * @see https://tailwindcss.com/docs/font-weight
             */
            "font-weight": [{
              font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", isArbitraryNumber]
            }],
            /**
             * Font Family
             * @see https://tailwindcss.com/docs/font-family
             */
            "font-family": [{
              font: [isAny]
            }],
            /**
             * Font Variant Numeric
             * @see https://tailwindcss.com/docs/font-variant-numeric
             */
            "fvn-normal": ["normal-nums"],
            /**
             * Font Variant Numeric
             * @see https://tailwindcss.com/docs/font-variant-numeric
             */
            "fvn-ordinal": ["ordinal"],
            /**
             * Font Variant Numeric
             * @see https://tailwindcss.com/docs/font-variant-numeric
             */
            "fvn-slashed-zero": ["slashed-zero"],
            /**
             * Font Variant Numeric
             * @see https://tailwindcss.com/docs/font-variant-numeric
             */
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            /**
             * Font Variant Numeric
             * @see https://tailwindcss.com/docs/font-variant-numeric
             */
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            /**
             * Font Variant Numeric
             * @see https://tailwindcss.com/docs/font-variant-numeric
             */
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            /**
             * Letter Spacing
             * @see https://tailwindcss.com/docs/letter-spacing
             */
            tracking: [{
              tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", isArbitraryValue]
            }],
            /**
             * Line Clamp
             * @see https://tailwindcss.com/docs/line-clamp
             */
            "line-clamp": [{
              "line-clamp": ["none", isNumber, isArbitraryNumber]
            }],
            /**
             * Line Height
             * @see https://tailwindcss.com/docs/line-height
             */
            leading: [{
              leading: ["none", "tight", "snug", "normal", "relaxed", "loose", isLength, isArbitraryValue]
            }],
            /**
             * List Style Image
             * @see https://tailwindcss.com/docs/list-style-image
             */
            "list-image": [{
              "list-image": ["none", isArbitraryValue]
            }],
            /**
             * List Style Type
             * @see https://tailwindcss.com/docs/list-style-type
             */
            "list-style-type": [{
              list: ["none", "disc", "decimal", isArbitraryValue]
            }],
            /**
             * List Style Position
             * @see https://tailwindcss.com/docs/list-style-position
             */
            "list-style-position": [{
              list: ["inside", "outside"]
            }],
            /**
             * Placeholder Color
             * @deprecated since Tailwind CSS v3.0.0
             * @see https://tailwindcss.com/docs/placeholder-color
             */
            "placeholder-color": [{
              placeholder: [colors]
            }],
            /**
             * Placeholder Opacity
             * @see https://tailwindcss.com/docs/placeholder-opacity
             */
            "placeholder-opacity": [{
              "placeholder-opacity": [opacity]
            }],
            /**
             * Text Alignment
             * @see https://tailwindcss.com/docs/text-align
             */
            "text-alignment": [{
              text: ["left", "center", "right", "justify", "start", "end"]
            }],
            /**
             * Text Color
             * @see https://tailwindcss.com/docs/text-color
             */
            "text-color": [{
              text: [colors]
            }],
            /**
             * Text Opacity
             * @see https://tailwindcss.com/docs/text-opacity
             */
            "text-opacity": [{
              "text-opacity": [opacity]
            }],
            /**
             * Text Decoration
             * @see https://tailwindcss.com/docs/text-decoration
             */
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            /**
             * Text Decoration Style
             * @see https://tailwindcss.com/docs/text-decoration-style
             */
            "text-decoration-style": [{
              decoration: [...getLineStyles(), "wavy"]
            }],
            /**
             * Text Decoration Thickness
             * @see https://tailwindcss.com/docs/text-decoration-thickness
             */
            "text-decoration-thickness": [{
              decoration: ["auto", "from-font", isLength, isArbitraryLength]
            }],
            /**
             * Text Underline Offset
             * @see https://tailwindcss.com/docs/text-underline-offset
             */
            "underline-offset": [{
              "underline-offset": ["auto", isLength, isArbitraryValue]
            }],
            /**
             * Text Decoration Color
             * @see https://tailwindcss.com/docs/text-decoration-color
             */
            "text-decoration-color": [{
              decoration: [colors]
            }],
            /**
             * Text Transform
             * @see https://tailwindcss.com/docs/text-transform
             */
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            /**
             * Text Overflow
             * @see https://tailwindcss.com/docs/text-overflow
             */
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            /**
             * Text Wrap
             * @see https://tailwindcss.com/docs/text-wrap
             */
            "text-wrap": [{
              text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            /**
             * Text Indent
             * @see https://tailwindcss.com/docs/text-indent
             */
            indent: [{
              indent: getSpacingWithArbitrary()
            }],
            /**
             * Vertical Alignment
             * @see https://tailwindcss.com/docs/vertical-align
             */
            "vertical-align": [{
              align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", isArbitraryValue]
            }],
            /**
             * Whitespace
             * @see https://tailwindcss.com/docs/whitespace
             */
            whitespace: [{
              whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            /**
             * Word Break
             * @see https://tailwindcss.com/docs/word-break
             */
            break: [{
              break: ["normal", "words", "all", "keep"]
            }],
            /**
             * Hyphens
             * @see https://tailwindcss.com/docs/hyphens
             */
            hyphens: [{
              hyphens: ["none", "manual", "auto"]
            }],
            /**
             * Content
             * @see https://tailwindcss.com/docs/content
             */
            content: [{
              content: ["none", isArbitraryValue]
            }],
            // Backgrounds
            /**
             * Background Attachment
             * @see https://tailwindcss.com/docs/background-attachment
             */
            "bg-attachment": [{
              bg: ["fixed", "local", "scroll"]
            }],
            /**
             * Background Clip
             * @see https://tailwindcss.com/docs/background-clip
             */
            "bg-clip": [{
              "bg-clip": ["border", "padding", "content", "text"]
            }],
            /**
             * Background Opacity
             * @deprecated since Tailwind CSS v3.0.0
             * @see https://tailwindcss.com/docs/background-opacity
             */
            "bg-opacity": [{
              "bg-opacity": [opacity]
            }],
            /**
             * Background Origin
             * @see https://tailwindcss.com/docs/background-origin
             */
            "bg-origin": [{
              "bg-origin": ["border", "padding", "content"]
            }],
            /**
             * Background Position
             * @see https://tailwindcss.com/docs/background-position
             */
            "bg-position": [{
              bg: [...getPositions(), isArbitraryPosition]
            }],
            /**
             * Background Repeat
             * @see https://tailwindcss.com/docs/background-repeat
             */
            "bg-repeat": [{
              bg: ["no-repeat", {
                repeat: ["", "x", "y", "round", "space"]
              }]
            }],
            /**
             * Background Size
             * @see https://tailwindcss.com/docs/background-size
             */
            "bg-size": [{
              bg: ["auto", "cover", "contain", isArbitrarySize]
            }],
            /**
             * Background Image
             * @see https://tailwindcss.com/docs/background-image
             */
            "bg-image": [{
              bg: ["none", {
                "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
              }, isArbitraryImage]
            }],
            /**
             * Background Color
             * @see https://tailwindcss.com/docs/background-color
             */
            "bg-color": [{
              bg: [colors]
            }],
            /**
             * Gradient Color Stops From Position
             * @see https://tailwindcss.com/docs/gradient-color-stops
             */
            "gradient-from-pos": [{
              from: [gradientColorStopPositions]
            }],
            /**
             * Gradient Color Stops Via Position
             * @see https://tailwindcss.com/docs/gradient-color-stops
             */
            "gradient-via-pos": [{
              via: [gradientColorStopPositions]
            }],
            /**
             * Gradient Color Stops To Position
             * @see https://tailwindcss.com/docs/gradient-color-stops
             */
            "gradient-to-pos": [{
              to: [gradientColorStopPositions]
            }],
            /**
             * Gradient Color Stops From
             * @see https://tailwindcss.com/docs/gradient-color-stops
             */
            "gradient-from": [{
              from: [gradientColorStops]
            }],
            /**
             * Gradient Color Stops Via
             * @see https://tailwindcss.com/docs/gradient-color-stops
             */
            "gradient-via": [{
              via: [gradientColorStops]
            }],
            /**
             * Gradient Color Stops To
             * @see https://tailwindcss.com/docs/gradient-color-stops
             */
            "gradient-to": [{
              to: [gradientColorStops]
            }],
            // Borders
            /**
             * Border Radius
             * @see https://tailwindcss.com/docs/border-radius
             */
            rounded: [{
              rounded: [borderRadius]
            }],
            /**
             * Border Radius Start
             * @see https://tailwindcss.com/docs/border-radius
             */
            "rounded-s": [{
              "rounded-s": [borderRadius]
            }],
            /**
             * Border Radius End
             * @see https://tailwindcss.com/docs/border-radius
             */
            "rounded-e": [{
              "rounded-e": [borderRadius]
            }],
            /**
             * Border Radius Top
             * @see https://tailwindcss.com/docs/border-radius
             */
            "rounded-t": [{
              "rounded-t": [borderRadius]
            }],
            /**
             * Border Radius Right
             * @see https://tailwindcss.com/docs/border-radius
             */
            "rounded-r": [{
              "rounded-r": [borderRadius]
            }],
            /**
             * Border Radius Bottom
             * @see https://tailwindcss.com/docs/border-radius
             */
            "rounded-b": [{
              "rounded-b": [borderRadius]
            }],
            /**
             * Border Radius Left
             * @see https://tailwindcss.com/docs/border-radius
             */
            "rounded-l": [{
              "rounded-l": [borderRadius]
            }],
            /**
             * Border Radius Start Start
             * @see https://tailwindcss.com/docs/border-radius
             */
            "rounded-ss": [{
              "rounded-ss": [borderRadius]
            }],
            /**
             * Border Radius Start End
             * @see https://tailwindcss.com/docs/border-radius
             */
            "rounded-se": [{
              "rounded-se": [borderRadius]
            }],
            /**
             * Border Radius End End
             * @see https://tailwindcss.com/docs/border-radius
             */
            "rounded-ee": [{
              "rounded-ee": [borderRadius]
            }],
            /**
             * Border Radius End Start
             * @see https://tailwindcss.com/docs/border-radius
             */
            "rounded-es": [{
              "rounded-es": [borderRadius]
            }],
            /**
             * Border Radius Top Left
             * @see https://tailwindcss.com/docs/border-radius
             */
            "rounded-tl": [{
              "rounded-tl": [borderRadius]
            }],
            /**
             * Border Radius Top Right
             * @see https://tailwindcss.com/docs/border-radius
             */
            "rounded-tr": [{
              "rounded-tr": [borderRadius]
            }],
            /**
             * Border Radius Bottom Right
             * @see https://tailwindcss.com/docs/border-radius
             */
            "rounded-br": [{
              "rounded-br": [borderRadius]
            }],
            /**
             * Border Radius Bottom Left
             * @see https://tailwindcss.com/docs/border-radius
             */
            "rounded-bl": [{
              "rounded-bl": [borderRadius]
            }],
            /**
             * Border Width
             * @see https://tailwindcss.com/docs/border-width
             */
            "border-w": [{
              border: [borderWidth]
            }],
            /**
             * Border Width X
             * @see https://tailwindcss.com/docs/border-width
             */
            "border-w-x": [{
              "border-x": [borderWidth]
            }],
            /**
             * Border Width Y
             * @see https://tailwindcss.com/docs/border-width
             */
            "border-w-y": [{
              "border-y": [borderWidth]
            }],
            /**
             * Border Width Start
             * @see https://tailwindcss.com/docs/border-width
             */
            "border-w-s": [{
              "border-s": [borderWidth]
            }],
            /**
             * Border Width End
             * @see https://tailwindcss.com/docs/border-width
             */
            "border-w-e": [{
              "border-e": [borderWidth]
            }],
            /**
             * Border Width Top
             * @see https://tailwindcss.com/docs/border-width
             */
            "border-w-t": [{
              "border-t": [borderWidth]
            }],
            /**
             * Border Width Right
             * @see https://tailwindcss.com/docs/border-width
             */
            "border-w-r": [{
              "border-r": [borderWidth]
            }],
            /**
             * Border Width Bottom
             * @see https://tailwindcss.com/docs/border-width
             */
            "border-w-b": [{
              "border-b": [borderWidth]
            }],
            /**
             * Border Width Left
             * @see https://tailwindcss.com/docs/border-width
             */
            "border-w-l": [{
              "border-l": [borderWidth]
            }],
            /**
             * Border Opacity
             * @see https://tailwindcss.com/docs/border-opacity
             */
            "border-opacity": [{
              "border-opacity": [opacity]
            }],
            /**
             * Border Style
             * @see https://tailwindcss.com/docs/border-style
             */
            "border-style": [{
              border: [...getLineStyles(), "hidden"]
            }],
            /**
             * Divide Width X
             * @see https://tailwindcss.com/docs/divide-width
             */
            "divide-x": [{
              "divide-x": [borderWidth]
            }],
            /**
             * Divide Width X Reverse
             * @see https://tailwindcss.com/docs/divide-width
             */
            "divide-x-reverse": ["divide-x-reverse"],
            /**
             * Divide Width Y
             * @see https://tailwindcss.com/docs/divide-width
             */
            "divide-y": [{
              "divide-y": [borderWidth]
            }],
            /**
             * Divide Width Y Reverse
             * @see https://tailwindcss.com/docs/divide-width
             */
            "divide-y-reverse": ["divide-y-reverse"],
            /**
             * Divide Opacity
             * @see https://tailwindcss.com/docs/divide-opacity
             */
            "divide-opacity": [{
              "divide-opacity": [opacity]
            }],
            /**
             * Divide Style
             * @see https://tailwindcss.com/docs/divide-style
             */
            "divide-style": [{
              divide: getLineStyles()
            }],
            /**
             * Border Color
             * @see https://tailwindcss.com/docs/border-color
             */
            "border-color": [{
              border: [borderColor]
            }],
            /**
             * Border Color X
             * @see https://tailwindcss.com/docs/border-color
             */
            "border-color-x": [{
              "border-x": [borderColor]
            }],
            /**
             * Border Color Y
             * @see https://tailwindcss.com/docs/border-color
             */
            "border-color-y": [{
              "border-y": [borderColor]
            }],
            /**
             * Border Color S
             * @see https://tailwindcss.com/docs/border-color
             */
            "border-color-s": [{
              "border-s": [borderColor]
            }],
            /**
             * Border Color E
             * @see https://tailwindcss.com/docs/border-color
             */
            "border-color-e": [{
              "border-e": [borderColor]
            }],
            /**
             * Border Color Top
             * @see https://tailwindcss.com/docs/border-color
             */
            "border-color-t": [{
              "border-t": [borderColor]
            }],
            /**
             * Border Color Right
             * @see https://tailwindcss.com/docs/border-color
             */
            "border-color-r": [{
              "border-r": [borderColor]
            }],
            /**
             * Border Color Bottom
             * @see https://tailwindcss.com/docs/border-color
             */
            "border-color-b": [{
              "border-b": [borderColor]
            }],
            /**
             * Border Color Left
             * @see https://tailwindcss.com/docs/border-color
             */
            "border-color-l": [{
              "border-l": [borderColor]
            }],
            /**
             * Divide Color
             * @see https://tailwindcss.com/docs/divide-color
             */
            "divide-color": [{
              divide: [borderColor]
            }],
            /**
             * Outline Style
             * @see https://tailwindcss.com/docs/outline-style
             */
            "outline-style": [{
              outline: ["", ...getLineStyles()]
            }],
            /**
             * Outline Offset
             * @see https://tailwindcss.com/docs/outline-offset
             */
            "outline-offset": [{
              "outline-offset": [isLength, isArbitraryValue]
            }],
            /**
             * Outline Width
             * @see https://tailwindcss.com/docs/outline-width
             */
            "outline-w": [{
              outline: [isLength, isArbitraryLength]
            }],
            /**
             * Outline Color
             * @see https://tailwindcss.com/docs/outline-color
             */
            "outline-color": [{
              outline: [colors]
            }],
            /**
             * Ring Width
             * @see https://tailwindcss.com/docs/ring-width
             */
            "ring-w": [{
              ring: getLengthWithEmptyAndArbitrary()
            }],
            /**
             * Ring Width Inset
             * @see https://tailwindcss.com/docs/ring-width
             */
            "ring-w-inset": ["ring-inset"],
            /**
             * Ring Color
             * @see https://tailwindcss.com/docs/ring-color
             */
            "ring-color": [{
              ring: [colors]
            }],
            /**
             * Ring Opacity
             * @see https://tailwindcss.com/docs/ring-opacity
             */
            "ring-opacity": [{
              "ring-opacity": [opacity]
            }],
            /**
             * Ring Offset Width
             * @see https://tailwindcss.com/docs/ring-offset-width
             */
            "ring-offset-w": [{
              "ring-offset": [isLength, isArbitraryLength]
            }],
            /**
             * Ring Offset Color
             * @see https://tailwindcss.com/docs/ring-offset-color
             */
            "ring-offset-color": [{
              "ring-offset": [colors]
            }],
            // Effects
            /**
             * Box Shadow
             * @see https://tailwindcss.com/docs/box-shadow
             */
            shadow: [{
              shadow: ["", "inner", "none", isTshirtSize, isArbitraryShadow]
            }],
            /**
             * Box Shadow Color
             * @see https://tailwindcss.com/docs/box-shadow-color
             */
            "shadow-color": [{
              shadow: [isAny]
            }],
            /**
             * Opacity
             * @see https://tailwindcss.com/docs/opacity
             */
            opacity: [{
              opacity: [opacity]
            }],
            /**
             * Mix Blend Mode
             * @see https://tailwindcss.com/docs/mix-blend-mode
             */
            "mix-blend": [{
              "mix-blend": [...getBlendModes(), "plus-lighter", "plus-darker"]
            }],
            /**
             * Background Blend Mode
             * @see https://tailwindcss.com/docs/background-blend-mode
             */
            "bg-blend": [{
              "bg-blend": getBlendModes()
            }],
            // Filters
            /**
             * Filter
             * @deprecated since Tailwind CSS v3.0.0
             * @see https://tailwindcss.com/docs/filter
             */
            filter: [{
              filter: ["", "none"]
            }],
            /**
             * Blur
             * @see https://tailwindcss.com/docs/blur
             */
            blur: [{
              blur: [blur]
            }],
            /**
             * Brightness
             * @see https://tailwindcss.com/docs/brightness
             */
            brightness: [{
              brightness: [brightness]
            }],
            /**
             * Contrast
             * @see https://tailwindcss.com/docs/contrast
             */
            contrast: [{
              contrast: [contrast]
            }],
            /**
             * Drop Shadow
             * @see https://tailwindcss.com/docs/drop-shadow
             */
            "drop-shadow": [{
              "drop-shadow": ["", "none", isTshirtSize, isArbitraryValue]
            }],
            /**
             * Grayscale
             * @see https://tailwindcss.com/docs/grayscale
             */
            grayscale: [{
              grayscale: [grayscale]
            }],
            /**
             * Hue Rotate
             * @see https://tailwindcss.com/docs/hue-rotate
             */
            "hue-rotate": [{
              "hue-rotate": [hueRotate]
            }],
            /**
             * Invert
             * @see https://tailwindcss.com/docs/invert
             */
            invert: [{
              invert: [invert]
            }],
            /**
             * Saturate
             * @see https://tailwindcss.com/docs/saturate
             */
            saturate: [{
              saturate: [saturate]
            }],
            /**
             * Sepia
             * @see https://tailwindcss.com/docs/sepia
             */
            sepia: [{
              sepia: [sepia]
            }],
            /**
             * Backdrop Filter
             * @deprecated since Tailwind CSS v3.0.0
             * @see https://tailwindcss.com/docs/backdrop-filter
             */
            "backdrop-filter": [{
              "backdrop-filter": ["", "none"]
            }],
            /**
             * Backdrop Blur
             * @see https://tailwindcss.com/docs/backdrop-blur
             */
            "backdrop-blur": [{
              "backdrop-blur": [blur]
            }],
            /**
             * Backdrop Brightness
             * @see https://tailwindcss.com/docs/backdrop-brightness
             */
            "backdrop-brightness": [{
              "backdrop-brightness": [brightness]
            }],
            /**
             * Backdrop Contrast
             * @see https://tailwindcss.com/docs/backdrop-contrast
             */
            "backdrop-contrast": [{
              "backdrop-contrast": [contrast]
            }],
            /**
             * Backdrop Grayscale
             * @see https://tailwindcss.com/docs/backdrop-grayscale
             */
            "backdrop-grayscale": [{
              "backdrop-grayscale": [grayscale]
            }],
            /**
             * Backdrop Hue Rotate
             * @see https://tailwindcss.com/docs/backdrop-hue-rotate
             */
            "backdrop-hue-rotate": [{
              "backdrop-hue-rotate": [hueRotate]
            }],
            /**
             * Backdrop Invert
             * @see https://tailwindcss.com/docs/backdrop-invert
             */
            "backdrop-invert": [{
              "backdrop-invert": [invert]
            }],
            /**
             * Backdrop Opacity
             * @see https://tailwindcss.com/docs/backdrop-opacity
             */
            "backdrop-opacity": [{
              "backdrop-opacity": [opacity]
            }],
            /**
             * Backdrop Saturate
             * @see https://tailwindcss.com/docs/backdrop-saturate
             */
            "backdrop-saturate": [{
              "backdrop-saturate": [saturate]
            }],
            /**
             * Backdrop Sepia
             * @see https://tailwindcss.com/docs/backdrop-sepia
             */
            "backdrop-sepia": [{
              "backdrop-sepia": [sepia]
            }],
            // Tables
            /**
             * Border Collapse
             * @see https://tailwindcss.com/docs/border-collapse
             */
            "border-collapse": [{
              border: ["collapse", "separate"]
            }],
            /**
             * Border Spacing
             * @see https://tailwindcss.com/docs/border-spacing
             */
            "border-spacing": [{
              "border-spacing": [borderSpacing]
            }],
            /**
             * Border Spacing X
             * @see https://tailwindcss.com/docs/border-spacing
             */
            "border-spacing-x": [{
              "border-spacing-x": [borderSpacing]
            }],
            /**
             * Border Spacing Y
             * @see https://tailwindcss.com/docs/border-spacing
             */
            "border-spacing-y": [{
              "border-spacing-y": [borderSpacing]
            }],
            /**
             * Table Layout
             * @see https://tailwindcss.com/docs/table-layout
             */
            "table-layout": [{
              table: ["auto", "fixed"]
            }],
            /**
             * Caption Side
             * @see https://tailwindcss.com/docs/caption-side
             */
            caption: [{
              caption: ["top", "bottom"]
            }],
            // Transitions and Animation
            /**
             * Tranisition Property
             * @see https://tailwindcss.com/docs/transition-property
             */
            transition: [{
              transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", isArbitraryValue]
            }],
            /**
             * Transition Duration
             * @see https://tailwindcss.com/docs/transition-duration
             */
            duration: [{
              duration: getNumberAndArbitrary()
            }],
            /**
             * Transition Timing Function
             * @see https://tailwindcss.com/docs/transition-timing-function
             */
            ease: [{
              ease: ["linear", "in", "out", "in-out", isArbitraryValue]
            }],
            /**
             * Transition Delay
             * @see https://tailwindcss.com/docs/transition-delay
             */
            delay: [{
              delay: getNumberAndArbitrary()
            }],
            /**
             * Animation
             * @see https://tailwindcss.com/docs/animation
             */
            animate: [{
              animate: ["none", "spin", "ping", "pulse", "bounce", isArbitraryValue]
            }],
            // Transforms
            /**
             * Transform
             * @see https://tailwindcss.com/docs/transform
             */
            transform: [{
              transform: ["", "gpu", "none"]
            }],
            /**
             * Scale
             * @see https://tailwindcss.com/docs/scale
             */
            scale: [{
              scale: [scale2]
            }],
            /**
             * Scale X
             * @see https://tailwindcss.com/docs/scale
             */
            "scale-x": [{
              "scale-x": [scale2]
            }],
            /**
             * Scale Y
             * @see https://tailwindcss.com/docs/scale
             */
            "scale-y": [{
              "scale-y": [scale2]
            }],
            /**
             * Rotate
             * @see https://tailwindcss.com/docs/rotate
             */
            rotate: [{
              rotate: [isInteger, isArbitraryValue]
            }],
            /**
             * Translate X
             * @see https://tailwindcss.com/docs/translate
             */
            "translate-x": [{
              "translate-x": [translate]
            }],
            /**
             * Translate Y
             * @see https://tailwindcss.com/docs/translate
             */
            "translate-y": [{
              "translate-y": [translate]
            }],
            /**
             * Skew X
             * @see https://tailwindcss.com/docs/skew
             */
            "skew-x": [{
              "skew-x": [skew]
            }],
            /**
             * Skew Y
             * @see https://tailwindcss.com/docs/skew
             */
            "skew-y": [{
              "skew-y": [skew]
            }],
            /**
             * Transform Origin
             * @see https://tailwindcss.com/docs/transform-origin
             */
            "transform-origin": [{
              origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", isArbitraryValue]
            }],
            // Interactivity
            /**
             * Accent Color
             * @see https://tailwindcss.com/docs/accent-color
             */
            accent: [{
              accent: ["auto", colors]
            }],
            /**
             * Appearance
             * @see https://tailwindcss.com/docs/appearance
             */
            appearance: [{
              appearance: ["none", "auto"]
            }],
            /**
             * Cursor
             * @see https://tailwindcss.com/docs/cursor
             */
            cursor: [{
              cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", isArbitraryValue]
            }],
            /**
             * Caret Color
             * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
             */
            "caret-color": [{
              caret: [colors]
            }],
            /**
             * Pointer Events
             * @see https://tailwindcss.com/docs/pointer-events
             */
            "pointer-events": [{
              "pointer-events": ["none", "auto"]
            }],
            /**
             * Resize
             * @see https://tailwindcss.com/docs/resize
             */
            resize: [{
              resize: ["none", "y", "x", ""]
            }],
            /**
             * Scroll Behavior
             * @see https://tailwindcss.com/docs/scroll-behavior
             */
            "scroll-behavior": [{
              scroll: ["auto", "smooth"]
            }],
            /**
             * Scroll Margin
             * @see https://tailwindcss.com/docs/scroll-margin
             */
            "scroll-m": [{
              "scroll-m": getSpacingWithArbitrary()
            }],
            /**
             * Scroll Margin X
             * @see https://tailwindcss.com/docs/scroll-margin
             */
            "scroll-mx": [{
              "scroll-mx": getSpacingWithArbitrary()
            }],
            /**
             * Scroll Margin Y
             * @see https://tailwindcss.com/docs/scroll-margin
             */
            "scroll-my": [{
              "scroll-my": getSpacingWithArbitrary()
            }],
            /**
             * Scroll Margin Start
             * @see https://tailwindcss.com/docs/scroll-margin
             */
            "scroll-ms": [{
              "scroll-ms": getSpacingWithArbitrary()
            }],
            /**
             * Scroll Margin End
             * @see https://tailwindcss.com/docs/scroll-margin
             */
            "scroll-me": [{
              "scroll-me": getSpacingWithArbitrary()
            }],
            /**
             * Scroll Margin Top
             * @see https://tailwindcss.com/docs/scroll-margin
             */
            "scroll-mt": [{
              "scroll-mt": getSpacingWithArbitrary()
            }],
            /**
             * Scroll Margin Right
             * @see https://tailwindcss.com/docs/scroll-margin
             */
            "scroll-mr": [{
              "scroll-mr": getSpacingWithArbitrary()
            }],
            /**
             * Scroll Margin Bottom
             * @see https://tailwindcss.com/docs/scroll-margin
             */
            "scroll-mb": [{
              "scroll-mb": getSpacingWithArbitrary()
            }],
            /**
             * Scroll Margin Left
             * @see https://tailwindcss.com/docs/scroll-margin
             */
            "scroll-ml": [{
              "scroll-ml": getSpacingWithArbitrary()
            }],
            /**
             * Scroll Padding
             * @see https://tailwindcss.com/docs/scroll-padding
             */
            "scroll-p": [{
              "scroll-p": getSpacingWithArbitrary()
            }],
            /**
             * Scroll Padding X
             * @see https://tailwindcss.com/docs/scroll-padding
             */
            "scroll-px": [{
              "scroll-px": getSpacingWithArbitrary()
            }],
            /**
             * Scroll Padding Y
             * @see https://tailwindcss.com/docs/scroll-padding
             */
            "scroll-py": [{
              "scroll-py": getSpacingWithArbitrary()
            }],
            /**
             * Scroll Padding Start
             * @see https://tailwindcss.com/docs/scroll-padding
             */
            "scroll-ps": [{
              "scroll-ps": getSpacingWithArbitrary()
            }],
            /**
             * Scroll Padding End
             * @see https://tailwindcss.com/docs/scroll-padding
             */
            "scroll-pe": [{
              "scroll-pe": getSpacingWithArbitrary()
            }],
            /**
             * Scroll Padding Top
             * @see https://tailwindcss.com/docs/scroll-padding
             */
            "scroll-pt": [{
              "scroll-pt": getSpacingWithArbitrary()
            }],
            /**
             * Scroll Padding Right
             * @see https://tailwindcss.com/docs/scroll-padding
             */
            "scroll-pr": [{
              "scroll-pr": getSpacingWithArbitrary()
            }],
            /**
             * Scroll Padding Bottom
             * @see https://tailwindcss.com/docs/scroll-padding
             */
            "scroll-pb": [{
              "scroll-pb": getSpacingWithArbitrary()
            }],
            /**
             * Scroll Padding Left
             * @see https://tailwindcss.com/docs/scroll-padding
             */
            "scroll-pl": [{
              "scroll-pl": getSpacingWithArbitrary()
            }],
            /**
             * Scroll Snap Align
             * @see https://tailwindcss.com/docs/scroll-snap-align
             */
            "snap-align": [{
              snap: ["start", "end", "center", "align-none"]
            }],
            /**
             * Scroll Snap Stop
             * @see https://tailwindcss.com/docs/scroll-snap-stop
             */
            "snap-stop": [{
              snap: ["normal", "always"]
            }],
            /**
             * Scroll Snap Type
             * @see https://tailwindcss.com/docs/scroll-snap-type
             */
            "snap-type": [{
              snap: ["none", "x", "y", "both"]
            }],
            /**
             * Scroll Snap Type Strictness
             * @see https://tailwindcss.com/docs/scroll-snap-type
             */
            "snap-strictness": [{
              snap: ["mandatory", "proximity"]
            }],
            /**
             * Touch Action
             * @see https://tailwindcss.com/docs/touch-action
             */
            touch: [{
              touch: ["auto", "none", "manipulation"]
            }],
            /**
             * Touch Action X
             * @see https://tailwindcss.com/docs/touch-action
             */
            "touch-x": [{
              "touch-pan": ["x", "left", "right"]
            }],
            /**
             * Touch Action Y
             * @see https://tailwindcss.com/docs/touch-action
             */
            "touch-y": [{
              "touch-pan": ["y", "up", "down"]
            }],
            /**
             * Touch Action Pinch Zoom
             * @see https://tailwindcss.com/docs/touch-action
             */
            "touch-pz": ["touch-pinch-zoom"],
            /**
             * User Select
             * @see https://tailwindcss.com/docs/user-select
             */
            select: [{
              select: ["none", "text", "all", "auto"]
            }],
            /**
             * Will Change
             * @see https://tailwindcss.com/docs/will-change
             */
            "will-change": [{
              "will-change": ["auto", "scroll", "contents", "transform", isArbitraryValue]
            }],
            // SVG
            /**
             * Fill
             * @see https://tailwindcss.com/docs/fill
             */
            fill: [{
              fill: [colors, "none"]
            }],
            /**
             * Stroke Width
             * @see https://tailwindcss.com/docs/stroke-width
             */
            "stroke-w": [{
              stroke: [isLength, isArbitraryLength, isArbitraryNumber]
            }],
            /**
             * Stroke
             * @see https://tailwindcss.com/docs/stroke
             */
            stroke: [{
              stroke: [colors, "none"]
            }],
            // Accessibility
            /**
             * Screen Readers
             * @see https://tailwindcss.com/docs/screen-readers
             */
            sr: ["sr-only", "not-sr-only"],
            /**
             * Forced Color Adjust
             * @see https://tailwindcss.com/docs/forced-color-adjust
             */
            "forced-color-adjust": [{
              "forced-color-adjust": ["auto", "none"]
            }]
          },
          conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
          },
          conflictingClassGroupModifiers: {
            "font-size": ["leading"]
          }
        };
      };
      twMerge = /* @__PURE__ */ createTailwindMerge(getDefaultConfig);
    }
  });

  // src/lib/utils.ts
  function cn(...inputs) {
    return twMerge(clsx(inputs));
  }
  var init_utils = __esm({
    "src/lib/utils.ts"() {
      init_define_import_meta_env();
      init_clsx();
      init_bundle_mjs();
    }
  });

  // shim:react-dom-shim
  var require_react_dom_shim = __commonJS({
    "shim:react-dom-shim"(exports, module) {
      init_define_import_meta_env();
      var D = window.ReactDOM;
      var n5 = function() {
      };
      module.exports = Object.assign({ preload: n5, preinit: n5, preconnect: n5, prefetchDNS: n5, preloadModule: n5, preinitModule: n5 }, D);
    }
  });

  // node_modules/animejs/lib/anime.es.js
  function minMax(val, min, max) {
    return Math.min(Math.max(val, min), max);
  }
  function stringContains(str, text) {
    return str.indexOf(text) > -1;
  }
  function applyArguments(func, args) {
    return func.apply(null, args);
  }
  function parseEasingParameters(string) {
    var match = /\(([^)]+)\)/.exec(string);
    return match ? match[1].split(",").map(function(p) {
      return parseFloat(p);
    }) : [];
  }
  function spring2(string, duration) {
    var params = parseEasingParameters(string);
    var mass = minMax(is.und(params[0]) ? 1 : params[0], 0.1, 100);
    var stiffness = minMax(is.und(params[1]) ? 100 : params[1], 0.1, 100);
    var damping = minMax(is.und(params[2]) ? 10 : params[2], 0.1, 100);
    var velocity = minMax(is.und(params[3]) ? 0 : params[3], 0.1, 100);
    var w0 = Math.sqrt(stiffness / mass);
    var zeta = damping / (2 * Math.sqrt(stiffness * mass));
    var wd = zeta < 1 ? w0 * Math.sqrt(1 - zeta * zeta) : 0;
    var a = 1;
    var b = zeta < 1 ? (zeta * w0 + -velocity) / wd : -velocity + w0;
    function solver(t7) {
      var progress2 = duration ? duration * t7 / 1e3 : t7;
      if (zeta < 1) {
        progress2 = Math.exp(-progress2 * zeta * w0) * (a * Math.cos(wd * progress2) + b * Math.sin(wd * progress2));
      } else {
        progress2 = (a + b * progress2) * Math.exp(-progress2 * w0);
      }
      if (t7 === 0 || t7 === 1) {
        return t7;
      }
      return 1 - progress2;
    }
    function getDuration() {
      var cached = cache.springs[string];
      if (cached) {
        return cached;
      }
      var frame2 = 1 / 6;
      var elapsed = 0;
      var rest = 0;
      while (true) {
        elapsed += frame2;
        if (solver(elapsed) === 1) {
          rest++;
          if (rest >= 16) {
            break;
          }
        } else {
          rest = 0;
        }
      }
      var duration2 = elapsed * frame2 * 1e3;
      cache.springs[string] = duration2;
      return duration2;
    }
    return duration ? solver : getDuration;
  }
  function steps(steps2) {
    if (steps2 === void 0) steps2 = 10;
    return function(t7) {
      return Math.ceil(minMax(t7, 1e-6, 1) * steps2) * (1 / steps2);
    };
  }
  function parseEasings(easing, duration) {
    if (is.fnc(easing)) {
      return easing;
    }
    var name = easing.split("(")[0];
    var ease2 = penner[name];
    var args = parseEasingParameters(easing);
    switch (name) {
      case "spring":
        return spring2(easing, duration);
      case "cubicBezier":
        return applyArguments(bezier, args);
      case "steps":
        return applyArguments(steps, args);
      default:
        return applyArguments(ease2, args);
    }
  }
  function selectString(str) {
    try {
      var nodes = document.querySelectorAll(str);
      return nodes;
    } catch (e2) {
      return;
    }
  }
  function filterArray(arr, callback) {
    var len = arr.length;
    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    var result = [];
    for (var i2 = 0; i2 < len; i2++) {
      if (i2 in arr) {
        var val = arr[i2];
        if (callback.call(thisArg, val, i2, arr)) {
          result.push(val);
        }
      }
    }
    return result;
  }
  function flattenArray(arr) {
    return arr.reduce(function(a, b) {
      return a.concat(is.arr(b) ? flattenArray(b) : b);
    }, []);
  }
  function toArray(o) {
    if (is.arr(o)) {
      return o;
    }
    if (is.str(o)) {
      o = selectString(o) || o;
    }
    if (o instanceof NodeList || o instanceof HTMLCollection) {
      return [].slice.call(o);
    }
    return [o];
  }
  function arrayContains(arr, val) {
    return arr.some(function(a) {
      return a === val;
    });
  }
  function cloneObject(o) {
    var clone = {};
    for (var p in o) {
      clone[p] = o[p];
    }
    return clone;
  }
  function replaceObjectProps(o1, o2) {
    var o = cloneObject(o1);
    for (var p in o1) {
      o[p] = o2.hasOwnProperty(p) ? o2[p] : o1[p];
    }
    return o;
  }
  function mergeObjects(o1, o2) {
    var o = cloneObject(o1);
    for (var p in o2) {
      o[p] = is.und(o1[p]) ? o2[p] : o1[p];
    }
    return o;
  }
  function rgbToRgba(rgbValue) {
    var rgb = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(rgbValue);
    return rgb ? "rgba(" + rgb[1] + ",1)" : rgbValue;
  }
  function hexToRgba(hexValue) {
    var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    var hex2 = hexValue.replace(rgx, function(m2, r5, g2, b2) {
      return r5 + r5 + g2 + g2 + b2 + b2;
    });
    var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex2);
    var r4 = parseInt(rgb[1], 16);
    var g = parseInt(rgb[2], 16);
    var b = parseInt(rgb[3], 16);
    return "rgba(" + r4 + "," + g + "," + b + ",1)";
  }
  function hslToRgba(hslValue) {
    var hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hslValue) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(hslValue);
    var h = parseInt(hsl[1], 10) / 360;
    var s = parseInt(hsl[2], 10) / 100;
    var l = parseInt(hsl[3], 10) / 100;
    var a = hsl[4] || 1;
    function hue2rgb(p2, q2, t7) {
      if (t7 < 0) {
        t7 += 1;
      }
      if (t7 > 1) {
        t7 -= 1;
      }
      if (t7 < 1 / 6) {
        return p2 + (q2 - p2) * 6 * t7;
      }
      if (t7 < 1 / 2) {
        return q2;
      }
      if (t7 < 2 / 3) {
        return p2 + (q2 - p2) * (2 / 3 - t7) * 6;
      }
      return p2;
    }
    var r4, g, b;
    if (s == 0) {
      r4 = g = b = l;
    } else {
      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      var p = 2 * l - q;
      r4 = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }
    return "rgba(" + r4 * 255 + "," + g * 255 + "," + b * 255 + "," + a + ")";
  }
  function colorToRgb(val) {
    if (is.rgb(val)) {
      return rgbToRgba(val);
    }
    if (is.hex(val)) {
      return hexToRgba(val);
    }
    if (is.hsl(val)) {
      return hslToRgba(val);
    }
  }
  function getUnit(val) {
    var split = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(val);
    if (split) {
      return split[1];
    }
  }
  function getTransformUnit(propName) {
    if (stringContains(propName, "translate") || propName === "perspective") {
      return "px";
    }
    if (stringContains(propName, "rotate") || stringContains(propName, "skew")) {
      return "deg";
    }
  }
  function getFunctionValue(val, animatable) {
    if (!is.fnc(val)) {
      return val;
    }
    return val(animatable.target, animatable.id, animatable.total);
  }
  function getAttribute(el, prop) {
    return el.getAttribute(prop);
  }
  function convertPxToUnit(el, value, unit) {
    var valueUnit = getUnit(value);
    if (arrayContains([unit, "deg", "rad", "turn"], valueUnit)) {
      return value;
    }
    var cached = cache.CSS[value + unit];
    if (!is.und(cached)) {
      return cached;
    }
    var baseline = 100;
    var tempEl = document.createElement(el.tagName);
    var parentEl = el.parentNode && el.parentNode !== document ? el.parentNode : document.body;
    parentEl.appendChild(tempEl);
    tempEl.style.position = "absolute";
    tempEl.style.width = baseline + unit;
    var factor = baseline / tempEl.offsetWidth;
    parentEl.removeChild(tempEl);
    var convertedUnit = factor * parseFloat(value);
    cache.CSS[value + unit] = convertedUnit;
    return convertedUnit;
  }
  function getCSSValue(el, prop, unit) {
    if (prop in el.style) {
      var uppercasePropName = prop.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
      var value = el.style[prop] || getComputedStyle(el).getPropertyValue(uppercasePropName) || "0";
      return unit ? convertPxToUnit(el, value, unit) : value;
    }
  }
  function getAnimationType(el, prop) {
    if (is.dom(el) && !is.inp(el) && (!is.nil(getAttribute(el, prop)) || is.svg(el) && el[prop])) {
      return "attribute";
    }
    if (is.dom(el) && arrayContains(validTransforms, prop)) {
      return "transform";
    }
    if (is.dom(el) && (prop !== "transform" && getCSSValue(el, prop))) {
      return "css";
    }
    if (el[prop] != null) {
      return "object";
    }
  }
  function getElementTransforms(el) {
    if (!is.dom(el)) {
      return;
    }
    var str = el.style.transform || "";
    var reg = /(\w+)\(([^)]*)\)/g;
    var transforms = /* @__PURE__ */ new Map();
    var m2;
    while (m2 = reg.exec(str)) {
      transforms.set(m2[1], m2[2]);
    }
    return transforms;
  }
  function getTransformValue(el, propName, animatable, unit) {
    var defaultVal = stringContains(propName, "scale") ? 1 : 0 + getTransformUnit(propName);
    var value = getElementTransforms(el).get(propName) || defaultVal;
    if (animatable) {
      animatable.transforms.list.set(propName, value);
      animatable.transforms["last"] = propName;
    }
    return unit ? convertPxToUnit(el, value, unit) : value;
  }
  function getOriginalTargetValue(target, propName, unit, animatable) {
    switch (getAnimationType(target, propName)) {
      case "transform":
        return getTransformValue(target, propName, animatable, unit);
      case "css":
        return getCSSValue(target, propName, unit);
      case "attribute":
        return getAttribute(target, propName);
      default:
        return target[propName] || 0;
    }
  }
  function getRelativeValue(to, from) {
    var operator = /^(\*=|\+=|-=)/.exec(to);
    if (!operator) {
      return to;
    }
    var u = getUnit(to) || 0;
    var x = parseFloat(from);
    var y = parseFloat(to.replace(operator[0], ""));
    switch (operator[0][0]) {
      case "+":
        return x + y + u;
      case "-":
        return x - y + u;
      case "*":
        return x * y + u;
    }
  }
  function validateValue(val, unit) {
    if (is.col(val)) {
      return colorToRgb(val);
    }
    if (/\s/g.test(val)) {
      return val;
    }
    var originalUnit = getUnit(val);
    var unitLess = originalUnit ? val.substr(0, val.length - originalUnit.length) : val;
    if (unit) {
      return unitLess + unit;
    }
    return unitLess;
  }
  function getDistance(p1, p2) {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
  }
  function getCircleLength(el) {
    return Math.PI * 2 * getAttribute(el, "r");
  }
  function getRectLength(el) {
    return getAttribute(el, "width") * 2 + getAttribute(el, "height") * 2;
  }
  function getLineLength(el) {
    return getDistance(
      { x: getAttribute(el, "x1"), y: getAttribute(el, "y1") },
      { x: getAttribute(el, "x2"), y: getAttribute(el, "y2") }
    );
  }
  function getPolylineLength(el) {
    var points = el.points;
    var totalLength = 0;
    var previousPos;
    for (var i2 = 0; i2 < points.numberOfItems; i2++) {
      var currentPos = points.getItem(i2);
      if (i2 > 0) {
        totalLength += getDistance(previousPos, currentPos);
      }
      previousPos = currentPos;
    }
    return totalLength;
  }
  function getPolygonLength(el) {
    var points = el.points;
    return getPolylineLength(el) + getDistance(points.getItem(points.numberOfItems - 1), points.getItem(0));
  }
  function getTotalLength(el) {
    if (el.getTotalLength) {
      return el.getTotalLength();
    }
    switch (el.tagName.toLowerCase()) {
      case "circle":
        return getCircleLength(el);
      case "rect":
        return getRectLength(el);
      case "line":
        return getLineLength(el);
      case "polyline":
        return getPolylineLength(el);
      case "polygon":
        return getPolygonLength(el);
    }
  }
  function setDashoffset(el) {
    var pathLength = getTotalLength(el);
    el.setAttribute("stroke-dasharray", pathLength);
    return pathLength;
  }
  function getParentSvgEl(el) {
    var parentEl = el.parentNode;
    while (is.svg(parentEl)) {
      if (!is.svg(parentEl.parentNode)) {
        break;
      }
      parentEl = parentEl.parentNode;
    }
    return parentEl;
  }
  function getParentSvg(pathEl, svgData) {
    var svg = svgData || {};
    var parentSvgEl = svg.el || getParentSvgEl(pathEl);
    var rect = parentSvgEl.getBoundingClientRect();
    var viewBoxAttr = getAttribute(parentSvgEl, "viewBox");
    var width = rect.width;
    var height = rect.height;
    var viewBox = svg.viewBox || (viewBoxAttr ? viewBoxAttr.split(" ") : [0, 0, width, height]);
    return {
      el: parentSvgEl,
      viewBox,
      x: viewBox[0] / 1,
      y: viewBox[1] / 1,
      w: width,
      h: height,
      vW: viewBox[2],
      vH: viewBox[3]
    };
  }
  function getPath(path, percent2) {
    var pathEl = is.str(path) ? selectString(path)[0] : path;
    var p = percent2 || 100;
    return function(property) {
      return {
        property,
        el: pathEl,
        svg: getParentSvg(pathEl),
        totalLength: getTotalLength(pathEl) * (p / 100)
      };
    };
  }
  function getPathProgress(path, progress2, isPathTargetInsideSVG) {
    function point(offset) {
      if (offset === void 0) offset = 0;
      var l = progress2 + offset >= 1 ? progress2 + offset : 0;
      return path.el.getPointAtLength(l);
    }
    var svg = getParentSvg(path.el, path.svg);
    var p = point();
    var p0 = point(-1);
    var p1 = point(1);
    var scaleX2 = isPathTargetInsideSVG ? 1 : svg.w / svg.vW;
    var scaleY2 = isPathTargetInsideSVG ? 1 : svg.h / svg.vH;
    switch (path.property) {
      case "x":
        return (p.x - svg.x) * scaleX2;
      case "y":
        return (p.y - svg.y) * scaleY2;
      case "angle":
        return Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI;
    }
  }
  function decomposeValue(val, unit) {
    var rgx = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g;
    var value = validateValue(is.pth(val) ? val.totalLength : val, unit) + "";
    return {
      original: value,
      numbers: value.match(rgx) ? value.match(rgx).map(Number) : [0],
      strings: is.str(val) || unit ? value.split(rgx) : []
    };
  }
  function parseTargets(targets) {
    var targetsArray = targets ? flattenArray(is.arr(targets) ? targets.map(toArray) : toArray(targets)) : [];
    return filterArray(targetsArray, function(item, pos, self) {
      return self.indexOf(item) === pos;
    });
  }
  function getAnimatables(targets) {
    var parsed = parseTargets(targets);
    return parsed.map(function(t7, i2) {
      return { target: t7, id: i2, total: parsed.length, transforms: { list: getElementTransforms(t7) } };
    });
  }
  function normalizePropertyTweens(prop, tweenSettings) {
    var settings = cloneObject(tweenSettings);
    if (/^spring/.test(settings.easing)) {
      settings.duration = spring2(settings.easing);
    }
    if (is.arr(prop)) {
      var l = prop.length;
      var isFromTo = l === 2 && !is.obj(prop[0]);
      if (!isFromTo) {
        if (!is.fnc(tweenSettings.duration)) {
          settings.duration = tweenSettings.duration / l;
        }
      } else {
        prop = { value: prop };
      }
    }
    var propArray = is.arr(prop) ? prop : [prop];
    return propArray.map(function(v, i2) {
      var obj = is.obj(v) && !is.pth(v) ? v : { value: v };
      if (is.und(obj.delay)) {
        obj.delay = !i2 ? tweenSettings.delay : 0;
      }
      if (is.und(obj.endDelay)) {
        obj.endDelay = i2 === propArray.length - 1 ? tweenSettings.endDelay : 0;
      }
      return obj;
    }).map(function(k) {
      return mergeObjects(k, settings);
    });
  }
  function flattenKeyframes(keyframes2) {
    var propertyNames = filterArray(flattenArray(keyframes2.map(function(key) {
      return Object.keys(key);
    })), function(p) {
      return is.key(p);
    }).reduce(function(a, b) {
      if (a.indexOf(b) < 0) {
        a.push(b);
      }
      return a;
    }, []);
    var properties = {};
    var loop = function(i3) {
      var propName = propertyNames[i3];
      properties[propName] = keyframes2.map(function(key) {
        var newKey = {};
        for (var p in key) {
          if (is.key(p)) {
            if (p == propName) {
              newKey.value = key[p];
            }
          } else {
            newKey[p] = key[p];
          }
        }
        return newKey;
      });
    };
    for (var i2 = 0; i2 < propertyNames.length; i2++) loop(i2);
    return properties;
  }
  function getProperties(tweenSettings, params) {
    var properties = [];
    var keyframes2 = params.keyframes;
    if (keyframes2) {
      params = mergeObjects(flattenKeyframes(keyframes2), params);
    }
    for (var p in params) {
      if (is.key(p)) {
        properties.push({
          name: p,
          tweens: normalizePropertyTweens(params[p], tweenSettings)
        });
      }
    }
    return properties;
  }
  function normalizeTweenValues(tween, animatable) {
    var t7 = {};
    for (var p in tween) {
      var value = getFunctionValue(tween[p], animatable);
      if (is.arr(value)) {
        value = value.map(function(v) {
          return getFunctionValue(v, animatable);
        });
        if (value.length === 1) {
          value = value[0];
        }
      }
      t7[p] = value;
    }
    t7.duration = parseFloat(t7.duration);
    t7.delay = parseFloat(t7.delay);
    return t7;
  }
  function normalizeTweens(prop, animatable) {
    var previousTween;
    return prop.tweens.map(function(t7) {
      var tween = normalizeTweenValues(t7, animatable);
      var tweenValue = tween.value;
      var to = is.arr(tweenValue) ? tweenValue[1] : tweenValue;
      var toUnit = getUnit(to);
      var originalValue = getOriginalTargetValue(animatable.target, prop.name, toUnit, animatable);
      var previousValue = previousTween ? previousTween.to.original : originalValue;
      var from = is.arr(tweenValue) ? tweenValue[0] : previousValue;
      var fromUnit = getUnit(from) || getUnit(originalValue);
      var unit = toUnit || fromUnit;
      if (is.und(to)) {
        to = previousValue;
      }
      tween.from = decomposeValue(from, unit);
      tween.to = decomposeValue(getRelativeValue(to, from), unit);
      tween.start = previousTween ? previousTween.end : 0;
      tween.end = tween.start + tween.delay + tween.duration + tween.endDelay;
      tween.easing = parseEasings(tween.easing, tween.duration);
      tween.isPath = is.pth(tweenValue);
      tween.isPathTargetInsideSVG = tween.isPath && is.svg(animatable.target);
      tween.isColor = is.col(tween.from.original);
      if (tween.isColor) {
        tween.round = 1;
      }
      previousTween = tween;
      return tween;
    });
  }
  function setTargetsValue(targets, properties) {
    var animatables = getAnimatables(targets);
    animatables.forEach(function(animatable) {
      for (var property in properties) {
        var value = getFunctionValue(properties[property], animatable);
        var target = animatable.target;
        var valueUnit = getUnit(value);
        var originalValue = getOriginalTargetValue(target, property, valueUnit, animatable);
        var unit = valueUnit || getUnit(originalValue);
        var to = getRelativeValue(validateValue(value, unit), originalValue);
        var animType = getAnimationType(target, property);
        setProgressValue[animType](target, property, to, animatable.transforms, true);
      }
    });
  }
  function createAnimation(animatable, prop) {
    var animType = getAnimationType(animatable.target, prop.name);
    if (animType) {
      var tweens = normalizeTweens(prop, animatable);
      var lastTween = tweens[tweens.length - 1];
      return {
        type: animType,
        property: prop.name,
        animatable,
        tweens,
        duration: lastTween.end,
        delay: tweens[0].delay,
        endDelay: lastTween.endDelay
      };
    }
  }
  function getAnimations(animatables, properties) {
    return filterArray(flattenArray(animatables.map(function(animatable) {
      return properties.map(function(prop) {
        return createAnimation(animatable, prop);
      });
    })), function(a) {
      return !is.und(a);
    });
  }
  function getInstanceTimings(animations2, tweenSettings) {
    var animLength = animations2.length;
    var getTlOffset = function(anim) {
      return anim.timelineOffset ? anim.timelineOffset : 0;
    };
    var timings = {};
    timings.duration = animLength ? Math.max.apply(Math, animations2.map(function(anim) {
      return getTlOffset(anim) + anim.duration;
    })) : tweenSettings.duration;
    timings.delay = animLength ? Math.min.apply(Math, animations2.map(function(anim) {
      return getTlOffset(anim) + anim.delay;
    })) : tweenSettings.delay;
    timings.endDelay = animLength ? timings.duration - Math.max.apply(Math, animations2.map(function(anim) {
      return getTlOffset(anim) + anim.duration - anim.endDelay;
    })) : tweenSettings.endDelay;
    return timings;
  }
  function createNewInstance(params) {
    var instanceSettings = replaceObjectProps(defaultInstanceSettings, params);
    var tweenSettings = replaceObjectProps(defaultTweenSettings, params);
    var properties = getProperties(tweenSettings, params);
    var animatables = getAnimatables(params.targets);
    var animations2 = getAnimations(animatables, properties);
    var timings = getInstanceTimings(animations2, tweenSettings);
    var id3 = instanceID;
    instanceID++;
    return mergeObjects(instanceSettings, {
      id: id3,
      children: [],
      animatables,
      animations: animations2,
      duration: timings.duration,
      delay: timings.delay,
      endDelay: timings.endDelay
    });
  }
  function isDocumentHidden() {
    return !!document && document.hidden;
  }
  function anime(params) {
    if (params === void 0) params = {};
    var startTime = 0, lastTime = 0, now2 = 0;
    var children, childrenLength = 0;
    var resolve = null;
    function makePromise(instance2) {
      var promise2 = window.Promise && new Promise(function(_resolve) {
        return resolve = _resolve;
      });
      instance2.finished = promise2;
      return promise2;
    }
    var instance = createNewInstance(params);
    var promise = makePromise(instance);
    function toggleInstanceDirection() {
      var direction = instance.direction;
      if (direction !== "alternate") {
        instance.direction = direction !== "normal" ? "normal" : "reverse";
      }
      instance.reversed = !instance.reversed;
      children.forEach(function(child) {
        return child.reversed = instance.reversed;
      });
    }
    function adjustTime(time2) {
      return instance.reversed ? instance.duration - time2 : time2;
    }
    function resetTime() {
      startTime = 0;
      lastTime = adjustTime(instance.currentTime) * (1 / anime.speed);
    }
    function seekChild(time2, child) {
      if (child) {
        child.seek(time2 - child.timelineOffset);
      }
    }
    function syncInstanceChildren(time2) {
      if (!instance.reversePlayback) {
        for (var i2 = 0; i2 < childrenLength; i2++) {
          seekChild(time2, children[i2]);
        }
      } else {
        for (var i$1 = childrenLength; i$1--; ) {
          seekChild(time2, children[i$1]);
        }
      }
    }
    function setAnimationsProgress(insTime) {
      var i2 = 0;
      var animations2 = instance.animations;
      var animationsLength = animations2.length;
      while (i2 < animationsLength) {
        var anim = animations2[i2];
        var animatable = anim.animatable;
        var tweens = anim.tweens;
        var tweenLength = tweens.length - 1;
        var tween = tweens[tweenLength];
        if (tweenLength) {
          tween = filterArray(tweens, function(t7) {
            return insTime < t7.end;
          })[0] || tween;
        }
        var elapsed = minMax(insTime - tween.start - tween.delay, 0, tween.duration) / tween.duration;
        var eased = isNaN(elapsed) ? 1 : tween.easing(elapsed);
        var strings = tween.to.strings;
        var round = tween.round;
        var numbers = [];
        var toNumbersLength = tween.to.numbers.length;
        var progress2 = void 0;
        for (var n5 = 0; n5 < toNumbersLength; n5++) {
          var value = void 0;
          var toNumber = tween.to.numbers[n5];
          var fromNumber = tween.from.numbers[n5] || 0;
          if (!tween.isPath) {
            value = fromNumber + eased * (toNumber - fromNumber);
          } else {
            value = getPathProgress(tween.value, eased * toNumber, tween.isPathTargetInsideSVG);
          }
          if (round) {
            if (!(tween.isColor && n5 > 2)) {
              value = Math.round(value * round) / round;
            }
          }
          numbers.push(value);
        }
        var stringsLength = strings.length;
        if (!stringsLength) {
          progress2 = numbers[0];
        } else {
          progress2 = strings[0];
          for (var s = 0; s < stringsLength; s++) {
            var a = strings[s];
            var b = strings[s + 1];
            var n$1 = numbers[s];
            if (!isNaN(n$1)) {
              if (!b) {
                progress2 += n$1 + " ";
              } else {
                progress2 += n$1 + b;
              }
            }
          }
        }
        setProgressValue[anim.type](animatable.target, anim.property, progress2, animatable.transforms);
        anim.currentValue = progress2;
        i2++;
      }
    }
    function setCallback(cb) {
      if (instance[cb] && !instance.passThrough) {
        instance[cb](instance);
      }
    }
    function countIteration() {
      if (instance.remaining && instance.remaining !== true) {
        instance.remaining--;
      }
    }
    function setInstanceProgress(engineTime) {
      var insDuration = instance.duration;
      var insDelay = instance.delay;
      var insEndDelay = insDuration - instance.endDelay;
      var insTime = adjustTime(engineTime);
      instance.progress = minMax(insTime / insDuration * 100, 0, 100);
      instance.reversePlayback = insTime < instance.currentTime;
      if (children) {
        syncInstanceChildren(insTime);
      }
      if (!instance.began && instance.currentTime > 0) {
        instance.began = true;
        setCallback("begin");
      }
      if (!instance.loopBegan && instance.currentTime > 0) {
        instance.loopBegan = true;
        setCallback("loopBegin");
      }
      if (insTime <= insDelay && instance.currentTime !== 0) {
        setAnimationsProgress(0);
      }
      if (insTime >= insEndDelay && instance.currentTime !== insDuration || !insDuration) {
        setAnimationsProgress(insDuration);
      }
      if (insTime > insDelay && insTime < insEndDelay) {
        if (!instance.changeBegan) {
          instance.changeBegan = true;
          instance.changeCompleted = false;
          setCallback("changeBegin");
        }
        setCallback("change");
        setAnimationsProgress(insTime);
      } else {
        if (instance.changeBegan) {
          instance.changeCompleted = true;
          instance.changeBegan = false;
          setCallback("changeComplete");
        }
      }
      instance.currentTime = minMax(insTime, 0, insDuration);
      if (instance.began) {
        setCallback("update");
      }
      if (engineTime >= insDuration) {
        lastTime = 0;
        countIteration();
        if (!instance.remaining) {
          instance.paused = true;
          if (!instance.completed) {
            instance.completed = true;
            setCallback("loopComplete");
            setCallback("complete");
            if (!instance.passThrough && "Promise" in window) {
              resolve();
              promise = makePromise(instance);
            }
          }
        } else {
          startTime = now2;
          setCallback("loopComplete");
          instance.loopBegan = false;
          if (instance.direction === "alternate") {
            toggleInstanceDirection();
          }
        }
      }
    }
    instance.reset = function() {
      var direction = instance.direction;
      instance.passThrough = false;
      instance.currentTime = 0;
      instance.progress = 0;
      instance.paused = true;
      instance.began = false;
      instance.loopBegan = false;
      instance.changeBegan = false;
      instance.completed = false;
      instance.changeCompleted = false;
      instance.reversePlayback = false;
      instance.reversed = direction === "reverse";
      instance.remaining = instance.loop;
      children = instance.children;
      childrenLength = children.length;
      for (var i2 = childrenLength; i2--; ) {
        instance.children[i2].reset();
      }
      if (instance.reversed && instance.loop !== true || direction === "alternate" && instance.loop === 1) {
        instance.remaining++;
      }
      setAnimationsProgress(instance.reversed ? instance.duration : 0);
    };
    instance._onDocumentVisibility = resetTime;
    instance.set = function(targets, properties) {
      setTargetsValue(targets, properties);
      return instance;
    };
    instance.tick = function(t7) {
      now2 = t7;
      if (!startTime) {
        startTime = now2;
      }
      setInstanceProgress((now2 + (lastTime - startTime)) * anime.speed);
    };
    instance.seek = function(time2) {
      setInstanceProgress(adjustTime(time2));
    };
    instance.pause = function() {
      instance.paused = true;
      resetTime();
    };
    instance.play = function() {
      if (!instance.paused) {
        return;
      }
      if (instance.completed) {
        instance.reset();
      }
      instance.paused = false;
      activeInstances.push(instance);
      resetTime();
      engine();
    };
    instance.reverse = function() {
      toggleInstanceDirection();
      instance.completed = instance.reversed ? false : true;
      resetTime();
    };
    instance.restart = function() {
      instance.reset();
      instance.play();
    };
    instance.remove = function(targets) {
      var targetsArray = parseTargets(targets);
      removeTargetsFromInstance(targetsArray, instance);
    };
    instance.reset();
    if (instance.autoplay) {
      instance.play();
    }
    return instance;
  }
  function removeTargetsFromAnimations(targetsArray, animations2) {
    for (var a = animations2.length; a--; ) {
      if (arrayContains(targetsArray, animations2[a].animatable.target)) {
        animations2.splice(a, 1);
      }
    }
  }
  function removeTargetsFromInstance(targetsArray, instance) {
    var animations2 = instance.animations;
    var children = instance.children;
    removeTargetsFromAnimations(targetsArray, animations2);
    for (var c = children.length; c--; ) {
      var child = children[c];
      var childAnimations = child.animations;
      removeTargetsFromAnimations(targetsArray, childAnimations);
      if (!childAnimations.length && !child.children.length) {
        children.splice(c, 1);
      }
    }
    if (!animations2.length && !children.length) {
      instance.pause();
    }
  }
  function removeTargetsFromActiveInstances(targets) {
    var targetsArray = parseTargets(targets);
    for (var i2 = activeInstances.length; i2--; ) {
      var instance = activeInstances[i2];
      removeTargetsFromInstance(targetsArray, instance);
    }
  }
  function stagger(val, params) {
    if (params === void 0) params = {};
    var direction = params.direction || "normal";
    var easing = params.easing ? parseEasings(params.easing) : null;
    var grid = params.grid;
    var axis = params.axis;
    var fromIndex = params.from || 0;
    var fromFirst = fromIndex === "first";
    var fromCenter = fromIndex === "center";
    var fromLast = fromIndex === "last";
    var isRange = is.arr(val);
    var val1 = isRange ? parseFloat(val[0]) : parseFloat(val);
    var val2 = isRange ? parseFloat(val[1]) : 0;
    var unit = getUnit(isRange ? val[1] : val) || 0;
    var start = params.start || 0 + (isRange ? val1 : 0);
    var values = [];
    var maxValue = 0;
    return function(el, i2, t7) {
      if (fromFirst) {
        fromIndex = 0;
      }
      if (fromCenter) {
        fromIndex = (t7 - 1) / 2;
      }
      if (fromLast) {
        fromIndex = t7 - 1;
      }
      if (!values.length) {
        for (var index = 0; index < t7; index++) {
          if (!grid) {
            values.push(Math.abs(fromIndex - index));
          } else {
            var fromX = !fromCenter ? fromIndex % grid[0] : (grid[0] - 1) / 2;
            var fromY = !fromCenter ? Math.floor(fromIndex / grid[0]) : (grid[1] - 1) / 2;
            var toX = index % grid[0];
            var toY = Math.floor(index / grid[0]);
            var distanceX = fromX - toX;
            var distanceY = fromY - toY;
            var value = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
            if (axis === "x") {
              value = -distanceX;
            }
            if (axis === "y") {
              value = -distanceY;
            }
            values.push(value);
          }
          maxValue = Math.max.apply(Math, values);
        }
        if (easing) {
          values = values.map(function(val3) {
            return easing(val3 / maxValue) * maxValue;
          });
        }
        if (direction === "reverse") {
          values = values.map(function(val3) {
            return axis ? val3 < 0 ? val3 * -1 : -val3 : Math.abs(maxValue - val3);
          });
        }
      }
      var spacing = isRange ? (val2 - val1) / maxValue : val1;
      return start + spacing * (Math.round(values[i2] * 100) / 100) + unit;
    };
  }
  function timeline(params) {
    if (params === void 0) params = {};
    var tl = anime(params);
    tl.duration = 0;
    tl.add = function(instanceParams, timelineOffset) {
      var tlIndex = activeInstances.indexOf(tl);
      var children = tl.children;
      if (tlIndex > -1) {
        activeInstances.splice(tlIndex, 1);
      }
      function passThrough(ins2) {
        ins2.passThrough = true;
      }
      for (var i2 = 0; i2 < children.length; i2++) {
        passThrough(children[i2]);
      }
      var insParams = mergeObjects(instanceParams, replaceObjectProps(defaultTweenSettings, params));
      insParams.targets = insParams.targets || params.targets;
      var tlDuration = tl.duration;
      insParams.autoplay = false;
      insParams.direction = tl.direction;
      insParams.timelineOffset = is.und(timelineOffset) ? tlDuration : getRelativeValue(timelineOffset, tlDuration);
      passThrough(tl);
      tl.seek(insParams.timelineOffset);
      var ins = anime(insParams);
      passThrough(ins);
      children.push(ins);
      var timings = getInstanceTimings(children, params);
      tl.delay = timings.delay;
      tl.endDelay = timings.endDelay;
      tl.duration = timings.duration;
      tl.seek(0);
      tl.reset();
      if (tl.autoplay) {
        tl.play();
      }
      return tl;
    };
    return tl;
  }
  var defaultInstanceSettings, defaultTweenSettings, validTransforms, cache, is, bezier, penner, setProgressValue, instanceID, activeInstances, engine, anime_es_default;
  var init_anime_es = __esm({
    "node_modules/animejs/lib/anime.es.js"() {
      init_define_import_meta_env();
      defaultInstanceSettings = {
        update: null,
        begin: null,
        loopBegin: null,
        changeBegin: null,
        change: null,
        changeComplete: null,
        loopComplete: null,
        complete: null,
        loop: 1,
        direction: "normal",
        autoplay: true,
        timelineOffset: 0
      };
      defaultTweenSettings = {
        duration: 1e3,
        delay: 0,
        endDelay: 0,
        easing: "easeOutElastic(1, .5)",
        round: 0
      };
      validTransforms = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "perspective", "matrix", "matrix3d"];
      cache = {
        CSS: {},
        springs: {}
      };
      is = {
        arr: function(a) {
          return Array.isArray(a);
        },
        obj: function(a) {
          return stringContains(Object.prototype.toString.call(a), "Object");
        },
        pth: function(a) {
          return is.obj(a) && a.hasOwnProperty("totalLength");
        },
        svg: function(a) {
          return a instanceof SVGElement;
        },
        inp: function(a) {
          return a instanceof HTMLInputElement;
        },
        dom: function(a) {
          return a.nodeType || is.svg(a);
        },
        str: function(a) {
          return typeof a === "string";
        },
        fnc: function(a) {
          return typeof a === "function";
        },
        und: function(a) {
          return typeof a === "undefined";
        },
        nil: function(a) {
          return is.und(a) || a === null;
        },
        hex: function(a) {
          return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a);
        },
        rgb: function(a) {
          return /^rgb/.test(a);
        },
        hsl: function(a) {
          return /^hsl/.test(a);
        },
        col: function(a) {
          return is.hex(a) || is.rgb(a) || is.hsl(a);
        },
        key: function(a) {
          return !defaultInstanceSettings.hasOwnProperty(a) && !defaultTweenSettings.hasOwnProperty(a) && a !== "targets" && a !== "keyframes";
        }
      };
      bezier = (function() {
        var kSplineTableSize = 11;
        var kSampleStepSize = 1 / (kSplineTableSize - 1);
        function A(aA1, aA2) {
          return 1 - 3 * aA2 + 3 * aA1;
        }
        function B(aA1, aA2) {
          return 3 * aA2 - 6 * aA1;
        }
        function C(aA1) {
          return 3 * aA1;
        }
        function calcBezier2(aT, aA1, aA2) {
          return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
        }
        function getSlope(aT, aA1, aA2) {
          return 3 * A(aA1, aA2) * aT * aT + 2 * B(aA1, aA2) * aT + C(aA1);
        }
        function binarySubdivide2(aX, aA, aB, mX1, mX2) {
          var currentX, currentT, i2 = 0;
          do {
            currentT = aA + (aB - aA) / 2;
            currentX = calcBezier2(currentT, mX1, mX2) - aX;
            if (currentX > 0) {
              aB = currentT;
            } else {
              aA = currentT;
            }
          } while (Math.abs(currentX) > 1e-7 && ++i2 < 10);
          return currentT;
        }
        function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
          for (var i2 = 0; i2 < 4; ++i2) {
            var currentSlope = getSlope(aGuessT, mX1, mX2);
            if (currentSlope === 0) {
              return aGuessT;
            }
            var currentX = calcBezier2(aGuessT, mX1, mX2) - aX;
            aGuessT -= currentX / currentSlope;
          }
          return aGuessT;
        }
        function bezier2(mX1, mY1, mX2, mY2) {
          if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
            return;
          }
          var sampleValues = new Float32Array(kSplineTableSize);
          if (mX1 !== mY1 || mX2 !== mY2) {
            for (var i2 = 0; i2 < kSplineTableSize; ++i2) {
              sampleValues[i2] = calcBezier2(i2 * kSampleStepSize, mX1, mX2);
            }
          }
          function getTForX(aX) {
            var intervalStart = 0;
            var currentSample = 1;
            var lastSample = kSplineTableSize - 1;
            for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
              intervalStart += kSampleStepSize;
            }
            --currentSample;
            var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
            var guessForT = intervalStart + dist * kSampleStepSize;
            var initialSlope = getSlope(guessForT, mX1, mX2);
            if (initialSlope >= 1e-3) {
              return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
            } else if (initialSlope === 0) {
              return guessForT;
            } else {
              return binarySubdivide2(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
            }
          }
          return function(x) {
            if (mX1 === mY1 && mX2 === mY2) {
              return x;
            }
            if (x === 0 || x === 1) {
              return x;
            }
            return calcBezier2(getTForX(x), mY1, mY2);
          };
        }
        return bezier2;
      })();
      penner = (function() {
        var eases = { linear: function() {
          return function(t7) {
            return t7;
          };
        } };
        var functionEasings = {
          Sine: function() {
            return function(t7) {
              return 1 - Math.cos(t7 * Math.PI / 2);
            };
          },
          Expo: function() {
            return function(t7) {
              return t7 ? Math.pow(2, 10 * t7 - 10) : 0;
            };
          },
          Circ: function() {
            return function(t7) {
              return 1 - Math.sqrt(1 - t7 * t7);
            };
          },
          Back: function() {
            return function(t7) {
              return t7 * t7 * (3 * t7 - 2);
            };
          },
          Bounce: function() {
            return function(t7) {
              var pow2, b = 4;
              while (t7 < ((pow2 = Math.pow(2, --b)) - 1) / 11) {
              }
              return 1 / Math.pow(4, 3 - b) - 7.5625 * Math.pow((pow2 * 3 - 2) / 22 - t7, 2);
            };
          },
          Elastic: function(amplitude, period) {
            if (amplitude === void 0) amplitude = 1;
            if (period === void 0) period = 0.5;
            var a = minMax(amplitude, 1, 10);
            var p = minMax(period, 0.1, 2);
            return function(t7) {
              return t7 === 0 || t7 === 1 ? t7 : -a * Math.pow(2, 10 * (t7 - 1)) * Math.sin((t7 - 1 - p / (Math.PI * 2) * Math.asin(1 / a)) * (Math.PI * 2) / p);
            };
          }
        };
        var baseEasings = ["Quad", "Cubic", "Quart", "Quint"];
        baseEasings.forEach(function(name, i2) {
          functionEasings[name] = function() {
            return function(t7) {
              return Math.pow(t7, i2 + 2);
            };
          };
        });
        Object.keys(functionEasings).forEach(function(name) {
          var easeIn2 = functionEasings[name];
          eases["easeIn" + name] = easeIn2;
          eases["easeOut" + name] = function(a, b) {
            return function(t7) {
              return 1 - easeIn2(a, b)(1 - t7);
            };
          };
          eases["easeInOut" + name] = function(a, b) {
            return function(t7) {
              return t7 < 0.5 ? easeIn2(a, b)(t7 * 2) / 2 : 1 - easeIn2(a, b)(t7 * -2 + 2) / 2;
            };
          };
          eases["easeOutIn" + name] = function(a, b) {
            return function(t7) {
              return t7 < 0.5 ? (1 - easeIn2(a, b)(1 - t7 * 2)) / 2 : (easeIn2(a, b)(t7 * 2 - 1) + 1) / 2;
            };
          };
        });
        return eases;
      })();
      setProgressValue = {
        css: function(t7, p, v) {
          return t7.style[p] = v;
        },
        attribute: function(t7, p, v) {
          return t7.setAttribute(p, v);
        },
        object: function(t7, p, v) {
          return t7[p] = v;
        },
        transform: function(t7, p, v, transforms, manual) {
          transforms.list.set(p, v);
          if (p === transforms.last || manual) {
            var str = "";
            transforms.list.forEach(function(value, prop) {
              str += prop + "(" + value + ") ";
            });
            t7.style.transform = str;
          }
        }
      };
      instanceID = 0;
      activeInstances = [];
      engine = (function() {
        var raf;
        function play() {
          if (!raf && (!isDocumentHidden() || !anime.suspendWhenDocumentHidden) && activeInstances.length > 0) {
            raf = requestAnimationFrame(step);
          }
        }
        function step(t7) {
          var activeInstancesLength = activeInstances.length;
          var i2 = 0;
          while (i2 < activeInstancesLength) {
            var activeInstance = activeInstances[i2];
            if (!activeInstance.paused) {
              activeInstance.tick(t7);
              i2++;
            } else {
              activeInstances.splice(i2, 1);
              activeInstancesLength--;
            }
          }
          raf = i2 > 0 ? requestAnimationFrame(step) : void 0;
        }
        function handleVisibilityChange() {
          if (!anime.suspendWhenDocumentHidden) {
            return;
          }
          if (isDocumentHidden()) {
            raf = cancelAnimationFrame(raf);
          } else {
            activeInstances.forEach(
              function(instance) {
                return instance._onDocumentVisibility();
              }
            );
            engine();
          }
        }
        if (typeof document !== "undefined") {
          document.addEventListener("visibilitychange", handleVisibilityChange);
        }
        return play;
      })();
      anime.version = "3.2.1";
      anime.speed = 1;
      anime.suspendWhenDocumentHidden = true;
      anime.running = activeInstances;
      anime.remove = removeTargetsFromActiveInstances;
      anime.get = getOriginalTargetValue;
      anime.set = setTargetsValue;
      anime.convertPx = convertPxToUnit;
      anime.path = getPath;
      anime.setDashoffset = setDashoffset;
      anime.stagger = stagger;
      anime.timeline = timeline;
      anime.easing = parseEasings;
      anime.penner = penner;
      anime.random = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };
      anime_es_default = anime;
    }
  });

  // node_modules/remeda/dist/lazyDataLastImpl-DtF3cihj.js
  function e(e2, t7, n5) {
    let r4 = (n6) => e2(n6, ...t7);
    return n5 === void 0 ? r4 : Object.assign(r4, { lazy: n5, lazyArgs: t7 });
  }
  var init_lazyDataLastImpl_DtF3cihj = __esm({
    "node_modules/remeda/dist/lazyDataLastImpl-DtF3cihj.js"() {
      init_define_import_meta_env();
    }
  });

  // node_modules/remeda/dist/purry.js
  function t(t7, n5, r4) {
    let i2 = t7.length - n5.length;
    if (i2 === 0) return t7(...n5);
    if (i2 === 1) return e(t7, n5, r4);
    throw Error(`Wrong number of arguments`);
  }
  var init_purry = __esm({
    "node_modules/remeda/dist/purry.js"() {
      init_define_import_meta_env();
      init_lazyDataLastImpl_DtF3cihj();
    }
  });

  // node_modules/remeda/dist/utilityEvaluators-Cb8x6-JZ.js
  var t2;
  var init_utilityEvaluators_Cb8x6_JZ = __esm({
    "node_modules/remeda/dist/utilityEvaluators-Cb8x6-JZ.js"() {
      init_define_import_meta_env();
      t2 = { done: false, hasNext: false };
    }
  });

  // node_modules/remeda/dist/pipe.js
  function t3(e2, ...t7) {
    let a = e2, o = t7.map((e3) => `lazy` in e3 ? r2(e3) : void 0), s = 0;
    for (; s < t7.length; ) {
      if (o[s] === void 0 || !i(a)) {
        let e4 = t7[s];
        a = e4(a), s += 1;
        continue;
      }
      let e3 = [];
      for (let n5 = s; n5 < t7.length; n5++) {
        let t8 = o[n5];
        if (t8 === void 0 || (e3.push(t8), t8.isSingle)) break;
      }
      let r4 = [];
      for (let t8 of a) if (n(t8, r4, e3)) break;
      let { isSingle: c } = e3.at(-1);
      a = c ? r4[0] : r4, s += e3.length;
    }
    return a;
  }
  function n(t7, r4, i2) {
    if (i2.length === 0) return r4.push(t7), false;
    let a = t7, o = t2, s = false;
    for (let [e2, t8] of i2.entries()) {
      let { index: c, items: l } = t8;
      if (l.push(a), o = t8(a, c, l), t8.index += 1, o.hasNext) {
        if (o.hasMany ?? false) {
          for (let t9 of o.next) if (n(t9, r4, i2.slice(e2 + 1))) return true;
          return s;
        }
        a = o.next;
      }
      if (!o.hasNext) break;
      o.done && (s = true);
    }
    return o.hasNext && r4.push(a), s;
  }
  function r2(e2) {
    let { lazy: t7, lazyArgs: n5 } = e2, r4 = t7(...n5);
    return Object.assign(r4, { isSingle: t7.single ?? false, index: 0, items: [] });
  }
  function i(e2) {
    return typeof e2 == `string` || typeof e2 == `object` && !!e2 && Symbol.iterator in e2;
  }
  var init_pipe = __esm({
    "node_modules/remeda/dist/pipe.js"() {
      init_define_import_meta_env();
      init_utilityEvaluators_Cb8x6_JZ();
    }
  });

  // node_modules/remeda/dist/hasAtLeast.js
  function t4(...t7) {
    return t(n2, t7);
  }
  var n2;
  var init_hasAtLeast = __esm({
    "node_modules/remeda/dist/hasAtLeast.js"() {
      init_define_import_meta_env();
      init_purry();
      n2 = (e2, t7) => e2.length >= t7;
    }
  });

  // node_modules/remeda/dist/omit.js
  function n3(...t7) {
    return t(r3, t7);
  }
  function r3(e2, n5) {
    if (!t4(n5, 1)) return { ...e2 };
    if (!t4(n5, 2)) {
      let { [n5[0]]: t7, ...r5 } = e2;
      return r5;
    }
    let r4 = { ...e2 };
    for (let e3 of n5) delete r4[e3];
    return r4;
  }
  var init_omit = __esm({
    "node_modules/remeda/dist/omit.js"() {
      init_define_import_meta_env();
      init_purry();
      init_hasAtLeast();
    }
  });

  // node_modules/remeda/dist/piped.js
  function t5(...t7) {
    return (n5) => t3(n5, ...t7);
  }
  var init_piped = __esm({
    "node_modules/remeda/dist/piped.js"() {
      init_define_import_meta_env();
      init_pipe();
    }
  });

  // node_modules/remeda/dist/reduce.js
  function t6(...t7) {
    return t(n4, t7);
  }
  var n4;
  var init_reduce = __esm({
    "node_modules/remeda/dist/reduce.js"() {
      init_define_import_meta_env();
      init_purry();
      n4 = (e2, t7, n5) => e2.reduce(t7, n5);
    }
  });

  // node_modules/remeda/dist/index.js
  var init_dist = __esm({
    "node_modules/remeda/dist/index.js"() {
      init_define_import_meta_env();
      init_pipe();
      init_omit();
      init_piped();
      init_reduce();
    }
  });

  // src/components/gobby/chill-cat-face-utils.ts
  function getKeyframeList(svgId, partIdList, facialExpression) {
    return t3(
      Array.from(document.querySelectorAll(`#${svgId} .${facialExpression}`)),
      (list) => list.map((item) => {
        const partList = t3(
          partIdList,
          t6(
            (acc, partId) => {
              const target = item.querySelector(`#${partId}`);
              acc[partId] = getPathAttrs(target?.attributes);
              return acc;
            },
            {}
          )
        );
        return partList;
      })
    );
  }
  var getPathAttrs;
  var init_chill_cat_face_utils = __esm({
    "src/components/gobby/chill-cat-face-utils.ts"() {
      "use strict";
      init_define_import_meta_env();
      init_dist();
      getPathAttrs = t5(
        (attrNode) => {
          if (!attrNode) return {};
          const result = {};
          for (let i2 = 0; i2 < attrNode.length; i2++) {
            const node = attrNode[i2];
            if (!node) continue;
            const { name, value } = node;
            result[name] = value;
          }
          return result;
        },
        n3(["id", "ref", "fill", "stroke", "stroke-linecap"])
      );
    }
  });

  // src/components/gobby/chill-face-layer-runners.ts
  async function runChillEyebrowAnimation(svgId, facialExpression) {
    const partIdList = ["eyebrow-r", "eyebrow-l"];
    function getTargetId(svgId2, partId) {
      return `#${svgId2} #face-eyebrow #${partId}`;
    }
    const facialExpressionProviderMap = {
      neutral: async () => {
        const keyframeList = getKeyframeList(svgId, partIdList, "neutral");
        await Promise.all(
          partIdList.map(
            (partId) => anime_es_default({
              targets: getTargetId(svgId, partId),
              ...keyframeList[0]?.[partId],
              duration: 500
            }).finished
          )
        );
      },
      excited: async () => {
        const keyframeList = getKeyframeList(svgId, partIdList, "excited");
        await Promise.all(
          partIdList.map(
            (partId) => anime_es_default({
              targets: getTargetId(svgId, partId),
              ...keyframeList[0]?.[partId],
              duration: 500
            }).finished
          )
        );
      },
      happy: async () => {
        const keyframeList = getKeyframeList(svgId, partIdList, "happy");
        await Promise.all(
          partIdList.map(
            (partId) => anime_es_default({
              targets: getTargetId(svgId, partId),
              ...keyframeList[0]?.[partId],
              duration: 500
            }).finished
          )
        );
        await Promise.all(
          partIdList.map(
            (partId) => anime_es_default({
              targets: getTargetId(svgId, partId),
              keyframes: t3(
                keyframeList.map((keyframe) => keyframe[partId]),
                /** 頭尾相接
                 *
                 * 因為使用 direction: 'alternate' 效果不自然
                 */
                (list) => {
                  const newList = [...list].reverse().slice(1);
                  return [...list, ...newList];
                }
              ),
              duration: 1800,
              loop: true
            }).finished
          )
        );
      },
      sad: async () => {
        const keyframeList = getKeyframeList(svgId, partIdList, "sad");
        await Promise.all(
          partIdList.map(
            (partId) => anime_es_default({
              targets: getTargetId(svgId, partId),
              ...keyframeList[0]?.[partId],
              duration: 500
            }).finished
          )
        );
      },
      angry: async () => {
        const keyframeList = getKeyframeList(svgId, partIdList, "angry");
        await Promise.all(
          partIdList.map(
            (partId) => anime_es_default({
              targets: getTargetId(svgId, partId),
              ...keyframeList[0]?.[partId],
              duration: 500
            }).finished
          )
        );
      },
      surprised: async () => {
        const keyframeList = getKeyframeList(svgId, partIdList, "surprised");
        await Promise.all(
          partIdList.map(
            (partId) => anime_es_default({
              targets: getTargetId(svgId, partId),
              ...keyframeList[0]?.[partId],
              duration: 500
            }).finished
          )
        );
      },
      derpy: async () => {
        const keyframeList = getKeyframeList(svgId, partIdList, "derpy");
        await Promise.all(
          partIdList.map(
            (partId) => anime_es_default({
              targets: getTargetId(svgId, partId),
              ...keyframeList[0]?.[partId],
              duration: 500
            }).finished
          )
        );
      },
      speechless: async () => {
        const keyframeList = getKeyframeList(svgId, partIdList, "speechless");
        await Promise.all(
          partIdList.map(
            (partId) => anime_es_default({
              targets: getTargetId(svgId, partId),
              ...keyframeList[0]?.[partId],
              duration: 500
            }).finished
          )
        );
      },
      pleasant: async () => {
        const keyframeList = getKeyframeList(svgId, partIdList, "pleasant");
        await Promise.all(
          partIdList.map(
            (partId) => anime_es_default({
              targets: getTargetId(svgId, partId),
              ...keyframeList[0]?.[partId],
              duration: 500
            }).finished
          )
        );
      },
      confidence: async () => {
        const keyframeList = getKeyframeList(svgId, partIdList, "confidence");
        await Promise.all(
          partIdList.map(
            (partId) => anime_es_default({
              targets: getTargetId(svgId, partId),
              ...keyframeList[0]?.[partId],
              duration: 500
            }).finished
          )
        );
      }
    };
    anime_es_default.remove(partIdList.map((p) => getTargetId(svgId, p)));
    await facialExpressionProviderMap[facialExpression]?.();
  }
  async function runChillMouthAnimation(svgId, facialExpression) {
    const partIdList = ["palate", "jaw"];
    function getTargetId(svgId2, partId) {
      return `#${svgId2} #face-mouth #${partId}`;
    }
    const facialExpressionProviderMap = {
      neutral: async () => {
        const keyframeList = getKeyframeList(svgId, partIdList, "neutral");
        await Promise.all(
          partIdList.map(
            (partId) => anime_es_default({
              targets: getTargetId(svgId, partId),
              ...keyframeList[0]?.[partId],
              duration: 500
            }).finished
          )
        );
      },
      excited: async () => {
        const keyframeList = getKeyframeList(svgId, partIdList, "excited");
        await Promise.all(
          partIdList.map(
            (partId) => anime_es_default({
              targets: getTargetId(svgId, partId),
              ...keyframeList[0]?.[partId],
              duration: 500
            }).finished
          )
        );
        await Promise.all(
          partIdList.map(
            (partId) => anime_es_default({
              targets: getTargetId(svgId, partId),
              keyframes: keyframeList.map((keyframe) => keyframe[partId]),
              duration: 600,
              delay: 400,
              loop: true,
              easing: "easeInOutCirc",
              direction: "alternate"
            }).finished
          )
        );
      },
      happy: async () => {
        const keyframeList = getKeyframeList(svgId, partIdList, "happy");
        await Promise.all(
          partIdList.map(
            (partId) => anime_es_default({
              targets: getTargetId(svgId, partId),
              ...keyframeList[0]?.[partId],
              duration: 500
            }).finished
          )
        );
        await Promise.all(
          partIdList.map(
            (partId) => anime_es_default({
              targets: getTargetId(svgId, partId),
              keyframes: keyframeList.map((keyframe) => keyframe[partId]),
              duration: 600,
              delay: 400,
              loop: true,
              easing: "easeInOutCirc",
              direction: "alternate"
            }).finished
          )
        );
      },
      sad: async () => {
        const keyframeList = getKeyframeList(svgId, partIdList, "sad");
        await Promise.all(
          partIdList.map(
            (partId) => anime_es_default({
              targets: getTargetId(svgId, partId),
              ...keyframeList[0]?.[partId],
              duration: 500
            }).finished
          )
        );
        await Promise.all(
          partIdList.map(
            (partId) => anime_es_default({
              targets: getTargetId(svgId, partId),
              keyframes: keyframeList.map((keyframe) => keyframe[partId]),
              duration: 600,
              delay: 400,
              loop: true,
              easing: "easeInOutCirc",
              direction: "alternate"
            }).finished
          )
        );
      },
      angry: async () => {
        const keyframeList = getKeyframeList(svgId, partIdList, "angry");
        await Promise.all(
          partIdList.map(
            (partId) => anime_es_default({
              targets: getTargetId(svgId, partId),
              ...keyframeList[0]?.[partId],
              duration: 500
            }).finished
          )
        );
      },
      surprised: async () => {
        const keyframeList = getKeyframeList(svgId, partIdList, "surprised");
        await Promise.all(
          partIdList.map(
            (partId) => anime_es_default({
              targets: getTargetId(svgId, partId),
              ...keyframeList[0]?.[partId],
              duration: 500
            }).finished
          )
        );
        await Promise.all(
          partIdList.map(
            (partId) => anime_es_default({
              targets: getTargetId(svgId, partId),
              keyframes: keyframeList.map((keyframe) => keyframe[partId]),
              duration: 600,
              delay: 400,
              loop: true,
              easing: "easeInOutCirc",
              direction: "alternate"
            }).finished
          )
        );
      },
      derpy: async () => {
        const keyframeList = getKeyframeList(svgId, partIdList, "derpy");
        await Promise.all(
          partIdList.map(
            (partId) => anime_es_default({
              targets: getTargetId(svgId, partId),
              ...keyframeList[0]?.[partId],
              duration: 500
            }).finished
          )
        );
      },
      speechless: async () => {
        const keyframeList = getKeyframeList(svgId, partIdList, "speechless");
        await Promise.all(
          partIdList.map(
            (partId) => anime_es_default({
              targets: getTargetId(svgId, partId),
              ...keyframeList[0]?.[partId],
              duration: 500
            }).finished
          )
        );
      },
      pleasant: async () => {
        const keyframeList = getKeyframeList(svgId, partIdList, "pleasant");
        await Promise.all(
          partIdList.map(
            (partId) => anime_es_default({
              targets: getTargetId(svgId, partId),
              ...keyframeList[0]?.[partId],
              duration: 500
            }).finished
          )
        );
      },
      confidence: async () => {
        const keyframeList = getKeyframeList(svgId, partIdList, "confidence");
        await Promise.all(
          partIdList.map(
            (partId) => anime_es_default({
              targets: getTargetId(svgId, partId),
              ...keyframeList[0]?.[partId],
              duration: 500
            }).finished
          )
        );
      }
    };
    anime_es_default.remove(partIdList.map((p) => getTargetId(svgId, p)));
    await facialExpressionProviderMap[facialExpression]?.();
  }
  async function runChillEyeAnimation(svgId, facialExpression) {
    const partIdList = ["eye-r", "eye-l"];
    function getTargetId(svgId2, partId) {
      return `#${svgId2} #face-eye #${partId}`;
    }
    const facialExpressionProviderMap = {
      neutral: async () => {
        const keyframeList = getKeyframeList(svgId, partIdList, "neutral");
        await Promise.all(
          partIdList.map(
            (partId) => anime_es_default({
              targets: getTargetId(svgId, partId),
              ...keyframeList[0]?.[partId],
              duration: 500
            }).finished
          )
        );
        await Promise.all(
          partIdList.map(
            (partId) => anime_es_default({
              targets: getTargetId(svgId, partId),
              keyframes: keyframeList.map((keyframe) => keyframe[partId]),
              duration: 50,
              delay: 3e3,
              loop: true,
              direction: "alternate"
            }).finished
          )
        );
      },
      excited: async () => {
        const keyframeList = getKeyframeList(svgId, partIdList, "excited");
        await Promise.all(
          partIdList.map(
            (partId) => anime_es_default({
              targets: getTargetId(svgId, partId),
              ...keyframeList[0]?.[partId],
              duration: 500
            }).finished
          )
        );
        await Promise.all(
          partIdList.map(
            (partId) => anime_es_default({
              targets: getTargetId(svgId, partId),
              keyframes: t3(
                keyframeList.map((keyframe) => keyframe[partId]),
                /** 頭尾相接
                 *
                 * 因為使用 direction: 'alternate' 效果不自然
                 */
                (list) => {
                  const newList = [...list].reverse().slice(1);
                  return [...list, ...newList];
                }
              ),
              duration: 1600,
              loop: true
            }).finished
          )
        );
      },
      happy: async () => {
        const keyframeList = getKeyframeList(svgId, partIdList, "happy");
        await Promise.all(
          partIdList.map(
            (partId) => anime_es_default({
              targets: getTargetId(svgId, partId),
              ...keyframeList[0]?.[partId],
              duration: 500
            }).finished
          )
        );
        await Promise.all(
          partIdList.map(
            (partId) => anime_es_default({
              targets: getTargetId(svgId, partId),
              keyframes: t3(
                keyframeList.map((keyframe) => keyframe[partId]),
                /** 頭尾相接
                 *
                 * 因為使用 direction: 'alternate' 效果不自然
                 */
                (list) => {
                  const newList = [...list].reverse().slice(1);
                  return [...list, ...newList];
                }
              ),
              duration: 1600,
              loop: true
            }).finished
          )
        );
      },
      sad: async () => {
        const keyframeList = getKeyframeList(svgId, partIdList, "sad");
        await Promise.all(
          partIdList.map(
            (partId) => anime_es_default({
              targets: getTargetId(svgId, partId),
              ...keyframeList[0]?.[partId],
              duration: 500
            }).finished
          )
        );
        await Promise.all(
          partIdList.map(
            (partId) => anime_es_default({
              targets: getTargetId(svgId, partId),
              keyframes: t3(
                keyframeList.map((keyframe) => keyframe[partId]),
                /** 頭尾相接
                 *
                 * 因為使用 direction: 'alternate' 效果不自然
                 */
                (list) => {
                  const newList = [...list].reverse().slice(1);
                  return [...list, ...newList];
                }
              ),
              duration: 1600,
              easing: "easeInOutCubic",
              loop: true
            }).finished
          )
        );
      },
      angry: async () => {
        const keyframeList = getKeyframeList(svgId, partIdList, "angry");
        await Promise.all(
          partIdList.map(
            (partId) => anime_es_default({
              targets: getTargetId(svgId, partId),
              ...keyframeList[0]?.[partId],
              duration: 200,
              easing: "easeInOutCirc"
            }).finished
          )
        );
      },
      surprised: async () => {
        const keyframeList = getKeyframeList(svgId, partIdList, "surprised");
        await Promise.all(
          partIdList.map(
            (partId) => anime_es_default({
              targets: getTargetId(svgId, partId),
              ...keyframeList[0]?.[partId],
              duration: 500
            }).finished
          )
        );
        await Promise.all(
          partIdList.map(
            (partId) => anime_es_default({
              targets: getTargetId(svgId, partId),
              keyframes: t3(
                keyframeList.map((keyframe) => keyframe[partId]),
                /** 頭尾相接
                 *
                 * 因為使用 direction: 'alternate' 效果不自然
                 */
                (list) => {
                  const newList = [...list].reverse().slice(1);
                  return [...list, ...newList];
                }
              ),
              duration: 1400,
              delay: 400,
              loop: true
            }).finished
          )
        );
      },
      derpy: async () => {
        const keyframeList = getKeyframeList(svgId, partIdList, "derpy");
        await Promise.all(
          partIdList.map(
            (partId) => anime_es_default({
              targets: getTargetId(svgId, partId),
              ...keyframeList[0]?.[partId],
              duration: 800
            }).finished
          )
        );
      },
      speechless: async () => {
        const keyframeList = getKeyframeList(svgId, partIdList, "speechless");
        await Promise.all(
          partIdList.map(
            (partId) => anime_es_default({
              targets: getTargetId(svgId, partId),
              ...keyframeList[0]?.[partId],
              duration: 800
            }).finished
          )
        );
      },
      pleasant: async () => {
        const keyframeList = getKeyframeList(svgId, partIdList, "pleasant");
        await Promise.all(
          partIdList.map(
            (partId) => anime_es_default({
              targets: getTargetId(svgId, partId),
              ...keyframeList[0]?.[partId],
              duration: 800
            }).finished
          )
        );
      },
      confidence: async () => {
        const keyframeList = getKeyframeList(svgId, partIdList, "confidence");
        await Promise.all(
          partIdList.map(
            (partId) => anime_es_default({
              targets: getTargetId(svgId, partId),
              ...keyframeList[0]?.[partId],
              easing: "easeInOutCirc",
              duration: 800
            }).finished
          )
        );
      }
    };
    anime_es_default.remove(partIdList.map((p) => getTargetId(svgId, p)));
    await facialExpressionProviderMap[facialExpression]?.();
  }
  var init_chill_face_layer_runners = __esm({
    "src/components/gobby/chill-face-layer-runners.ts"() {
      "use strict";
      init_define_import_meta_env();
      init_anime_es();
      init_dist();
      init_chill_cat_face_utils();
    }
  });

  // src/components/gobby/chill-face-static-markup.ts
  var CHILL_EYEBROW_SVG, CHILL_MOUTH_SVG, CHILL_EYE_SVG;
  var init_chill_face_static_markup = __esm({
    "src/components/gobby/chill-face-static-markup.ts"() {
      "use strict";
      init_define_import_meta_env();
      CHILL_EYEBROW_SVG = '<svg id="__ID__" class="h-full w-full"\n    viewBox="0 0 1500 1000" fill="none" xmlns="http://www.w3.org/2000/svg"\n  >\n    <g id="face-eyebrow">\n      <path\n        id="eyebrow-r"\n        d="M488.637 226.299C508.23 224.465 512.982 222.616 532.387 223.274" stroke="__STROKE__"\n        stroke-width="50"\n        stroke-linecap="round"\n      />\n      <path\n        id="eyebrow-l"\n        d="M996.368 226.553C976.798 224.491 972.067 222.588 952.656 223.021" stroke="__STROKE__"\n        stroke-width="50"\n        stroke-linecap="round"\n      />\n    </g>\n\n    <defs class="hidden">\n      <g class="neutral">\n        <path\n          id="eyebrow-r"\n          d="M488.637 226.299C508.23 224.465 512.982 222.616 532.387 223.274"\n          stroke="black"\n          stroke-width="50"\n          stroke-linecap="round"\n        />\n        <path\n          id="eyebrow-l"\n          d="M996.368 226.553C976.798 224.491 972.067 222.588 952.656 223.021"\n          stroke="black"\n          stroke-width="50"\n          stroke-linecap="round"\n        />\n      </g>\n\n      <g class="excited">\n        <path\n          id="eyebrow-r"\n          d="M421 219.219C432.045 202.932 433.641 198.089 446.49 183.533"\n          stroke="black"\n          stroke-width="50"\n          stroke-linecap="round"\n        />\n        <path\n          id="eyebrow-l"\n          d="M1068.29 220.446C1054.13 206.78 1051.57 202.369 1036 190.768"\n          stroke="black"\n          stroke-width="50"\n          stroke-linecap="round"\n        />\n      </g>\n\n      <g class="happy">\n        <path\n          id="eyebrow-r"\n          d="M109 181.939C128.302 178.106 132.839 175.78 152.21 174.447"\n          stroke="black"\n          stroke-width="50"\n          stroke-linecap="round"\n        />\n        <path\n          id="eyebrow-l"\n          d="M1372.23 179.875C1353.41 174.104 1349.14 171.33 1330 168.037"\n          stroke="black"\n          stroke-width="50"\n          stroke-linecap="round"\n        />\n      </g>\n      <g class="happy">\n        <path\n          id="eyebrow-r"\n          d="M110.142 186.069C128.329 178.556 132.328 175.392 151.069 170.316"\n          stroke="black"\n          stroke-width="50"\n          stroke-linecap="round"\n        />\n        <path\n          id="eyebrow-l"\n          d="M1368.21 187.683C1353.17 174.994 1350.32 170.764 1334.01 160.23"\n          stroke="black"\n          stroke-width="50"\n          stroke-linecap="round"\n        />\n      </g>\n\n      <g class="sad">\n        <path\n          id="eyebrow-r"\n          d="M453 244.885C505.515 236.385 505.515 222.885 505.515 202.14"\n          stroke="black"\n          stroke-width="50"\n          stroke-linecap="round"\n        />\n        <path\n          id="eyebrow-l"\n          d="M1045.7 242.288C1002.2 242.288 988.196 227.788 988.196 204.304"\n          stroke="black"\n          stroke-width="50"\n          stroke-linecap="round"\n        />\n      </g>\n\n      <g class="angry">\n        <path\n          id="eyebrow-r"\n          d="M495.754 208.569C509.348 222.797 513.746 225.377 525.269 241.005"\n          stroke="black"\n          stroke-width="50"\n          stroke-linecap="round"\n        />\n        <path\n          id="eyebrow-l"\n          d="M990.811 210.117C975.869 222.923 971.236 225.053 958.216 239.457"\n          stroke="black"\n          stroke-width="50"\n          stroke-linecap="round"\n        />\n      </g>\n\n      <g class="surprised">\n        <path\n          id="eyebrow-r"\n          d="M295.464 185.306C315.047 133.237 382.886 114.42 397.709 203.805"\n          stroke="black"\n          stroke-width="50"\n          stroke-linecap="round"\n        />\n        <path\n          id="eyebrow-l"\n          d="M1195.81 193.431C1188.17 165.918 1108.65 82.6492 1094.27 221.603"\n          stroke="black"\n          stroke-width="50"\n          stroke-linecap="round"\n        />\n      </g>\n\n      <g class="derpy">\n        <path\n          id="eyebrow-r"\n          d="M368 167.389C386.175 159.844 390.168 156.673 408.901 151.566"\n          stroke="black"\n          stroke-width="50"\n          stroke-linecap="round"\n        />\n        <path\n          id="eyebrow-l"\n          d="M1169.64 352.826C1150.62 347.762 1146.24 345.149 1127 342.574"\n          stroke="black"\n          stroke-width="50"\n          stroke-linecap="round"\n        />\n      </g>\n\n      <g class="speechless">\n        <path\n          id="eyebrow-r"\n          d="M435.179 131C447.792 146.105 452.008 148.973 462.46 165.336"\n          stroke="black"\n          stroke-width="50"\n          stroke-linecap="round"\n        />\n        <path\n          id="eyebrow-l"\n          d="M1076.62 165C1063.84 179.967 1059.6 182.789 1048.97 199.037"\n          stroke="black"\n          stroke-width="50"\n          stroke-linecap="round"\n        />\n      </g>\n\n      <g class="pleasant">\n        <path\n          id="eyebrow-r"\n          d="M221 199.27C236.261 186.846 239.182 182.667 255.674 172.419"\n          stroke="black"\n          stroke-width="50"\n          stroke-linecap="round"\n        />\n        <path\n          id="eyebrow-l"\n          d="M1299.14 182.222C1285.97 167.603 1283.72 163.024 1269 150.367"\n          stroke="black"\n          stroke-width="50"\n          stroke-linecap="round"\n        />\n      </g>\n\n      <g class="confidence">\n        <path id="eyebrow-r" d="M495.754 208.568C509.348 222.797 513.746 225.377 525.269 241.004" stroke="black" stroke-width="50" stroke-linecap="round" />\n        <path id="eyebrow-l" d="M990.811 210.116C975.869 222.922 971.236 225.052 958.216 239.457" stroke="black" stroke-width="50" stroke-linecap="round" />\n      </g>\n    </defs>\n  </svg>';
      CHILL_MOUTH_SVG = '<svg id="__ID__" class="h-full w-full"\n    viewBox="0 0 1500 1000" fill="none" xmlns="http://www.w3.org/2000/svg"\n  >\n    <g id="face-mouth">\n      <path\n        id="palate"\n        d="M630.439 663C587.274 706.267 623.48 751 666.346 751C720.972 751 745.419 669.6 748.475 669.6C751.531 669.6 774.069 751 831.75 751C882.417 751 907.767 707.733 869.568 663" stroke="__STROKE__"\n        stroke-width="50"\n        stroke-linecap="round"\n      />\n      <path\n        id="jaw"\n        d="M630.439 663C587.274 706.267 623.48 751 666.346 751C720.972 751 745.419 669.6 748.475 669.6C751.531 669.6 774.069 751 831.75 751C882.417 751 907.767 707.733 869.568 663" stroke="__STROKE__"\n        stroke-width="50"\n        stroke-linecap="round"\n      />\n    </g>\n\n    <defs class="hidden">\n      <g class="neutral">\n        <path\n          id="palate"\n          d="M630.439 663C587.274 706.267 623.48 751 666.346 751C720.972 751 745.419 669.6 748.475 669.6C751.531 669.6 774.069 751 831.75 751C882.417 751 907.767 707.733 869.568 663"\n          stroke="black"\n          stroke-width="50"\n          stroke-linecap="round"\n        />\n        <path\n          id="jaw"\n          d="M630.439 663C587.274 706.267 623.48 751 666.346 751C720.972 751 745.419 669.6 748.475 669.6C751.531 669.6 774.069 751 831.75 751C882.417 751 907.767 707.733 869.568 663"\n          stroke="black"\n          stroke-width="0"\n          stroke-linecap="round"\n        />\n      </g>\n\n      <g class="excited">\n        <path\n          id="palate"\n          d="M621.439 523C578.274 566.267 614.48 611 657.346 611C711.972 611 736.419 529.6 739.475 529.6C742.531 529.6 765.069 611 822.75 611C873.417 611 898.767 567.733 860.568 523"\n          stroke="black"\n          stroke-width="50"\n          stroke-linecap="round"\n        />\n        <path\n          id="jaw"\n          d="M625.5 607C569.5 674 633 888 671.5 924C695.563 946.5 730.5 968.5 783.5 968.5C836.5 968.5 866.501 952.5 895 924C928.034 890.966 906.001 653 859.001 607"\n          stroke="black"\n          stroke-width="50"\n          stroke-linecap="round"\n        />\n      </g>\n\n      <g class="happy">\n        <path\n          id="palate"\n          d="M621.848 381C575.254 424.267 614.336 469 660.607 469C719.571 469 745.96 387.6 749.259 387.6C752.557 387.6 776.885 469 839.148 469C893.839 469 921.202 425.733 879.969 381"\n          stroke="black"\n          stroke-width="50"\n          stroke-linecap="round"\n        />\n        <path\n          id="jaw"\n          d="M615.47 477C598.311 507.44 551.583 791.83 615.471 876.663C664.702 942.033 717.976 959 748.872 959C779.769 959 852.521 934.408 881.626 892.132C956.691 783.097 906.066 523.907 893.589 477"\n          stroke="black"\n          stroke-width="50"\n          stroke-linecap="round"\n        />\n      </g>\n\n      <g class="sad">\n        <path\n          id="jaw"\n          d="M529 735C583.5 701 623.479 751 666.346 751C720.971 751 745.419 669.6 748.475 669.6C751.531 669.6 774.069 751 831.75 751C882.417 751 903.5 698.5 970 759"\n          stroke="black"\n          stroke-width="50"\n          stroke-linecap="round"\n        />\n        <path\n          id="palate"\n          d="M529 735C583.5 701 623.479 751 666.346 751C720.971 751 745.419 669.6 748.475 669.6C751.531 669.6 774.069 751 831.75 751C882.417 751 903.5 698.5 970 759"\n          stroke="black"\n          stroke-width="50"\n          stroke-linecap="round"\n        />\n      </g>\n\n      <g class="angry">\n        <path\n          id="palate"\n          d="M569.25 599.543C577.102 636.695 590.737 676.357 634.957 666.818C679.177 657.279 759.474 537.5 762 537.5C764.526 537.5 849.44 666.818 878.368 675.353C919.062 687.361 937.465 631.172 943.25 589"\n          stroke="black"\n          stroke-width="50"\n          stroke-linecap="round"\n        />\n        <path\n          id="jaw"\n          d="M614 683.984C614 726.385 636.886 827.692 655.356 864.184C668.99 891.122 733.885 826 759.5 826C785.115 826 829.701 907.584 861.512 871.667C888.686 840.987 897 720.898 897 677"\n          stroke="black"\n          stroke-width="50"\n          stroke-linecap="round"\n        />\n      </g>\n\n      <g class="surprised">\n        <path\n          id="palate"\n          d="M542.492 355C470.342 398.267 530.859 443 602.51 443C693.815 443 734.679 361.6 739.787 361.6C744.895 361.6 782.566 443 878.979 443C963.669 443 1006.04 399.733 942.19 355"\n          stroke="black"\n          stroke-width="50"\n          stroke-linecap="round"\n        />\n        <path\n          id="jaw"\n          d="M575.502 445.5C524.502 512.5 538.001 925 552.502 942.5C567.002 960 675.002 971.5 740.502 971.5C806.001 971.5 913.502 964.5 929.502 942.5C945.502 920.5 953.701 482.233 915.501 437.5"\n          stroke="black"\n          stroke-width="50"\n          stroke-linecap="round"\n        />\n      </g>\n      <g class="surprised">\n        <path\n          id="palate"\n          d="M542.492 355C470.342 398.267 530.859 443 602.51 443C693.815 443 734.679 361.6 739.787 361.6C744.895 361.6 782.566 443 878.979 443C963.669 443 1006.04 399.733 942.19 355"\n          stroke="black"\n          stroke-width="50"\n          stroke-linecap="round"\n        />\n        <path\n          id="jaw"\n          d="M575.503 445.5C524.503 512.5 561.003 836 575.503 853.5C590.004 871 698.004 882.5 763.503 882.5C829.002 882.5 936.503 875.5 952.503 853.5C968.503 831.5 953.702 482.233 915.502 437.5"\n          stroke="black"\n          stroke-width="50"\n          stroke-linecap="round"\n        />\n      </g>\n\n      <g class="derpy">\n        <path\n          id="palate"\n          d="M553.5 399.5C476.675 442.767 525.211 544 601.505 544C698.726 544 725.061 499.5 730.5 499.5C735.939 499.5 793.227 544 895.887 544C986.064 544 1005.49 454.233 937.5 409.5"\n          stroke="black"\n          stroke-width="50"\n          stroke-linecap="round"\n        />\n        <path\n          id="jaw"\n          d="M574 553C585.5 617.5 605.537 662 624.5 698C649.958 746.33 687.5 800.5 744.5 800.5C801.5 800.5 846.404 716 858.5 690.5C870.596 665 888.5 620.5 904 553"\n          stroke="black"\n          stroke-width="50"\n          stroke-linecap="round"\n        />\n      </g>\n\n      <g class="speechless">\n        <path\n          id="palate"\n          d="M542 494C479.823 598.725 561.753 707 623.5 707C748.5 707 763.598 553 768 553C772.402 553 789.5 707 893.975 707C1011.5 707 1030.52 602.275 975.5 494"\n          stroke="black"\n          stroke-width="50"\n          stroke-linecap="round"\n        />\n        <path\n          id="jaw"\n          d="M542 494C479.823 598.725 561.753 707 623.5 707C748.5 707 763.598 553 768 553C772.402 553 789.5 707 893.975 707C1011.5 707 1030.52 602.275 975.5 494"\n          stroke="black"\n          stroke-width="0"\n          stroke-linecap="round"\n        />\n      </g>\n\n      <g class="pleasant">\n        <path\n          id="palate"\n          d="M437.686 525C346.06 613.5 466.796 705 557.788 705C741.992 705 764.241 574.859 770.728 574.859C777.214 574.859 802.411 705 956.369 705C1129.56 705 1157.59 616.5 1076.51 525"\n          stroke="black"\n          stroke-width="50"\n          stroke-linecap="round"\n        />\n        <path\n          id="jaw"\n          d="M437.686 525C346.06 613.5 466.796 705 557.788 705C741.992 705 764.241 574.859 770.728 574.859C777.214 574.859 802.411 705 956.369 705C1129.56 705 1157.59 616.5 1076.51 525"\n          stroke="black"\n          stroke-width="0"\n          stroke-linecap="round"\n        />\n      </g>\n\n      <g class="confidence">\n        <path id="palate" d="M560.999 675.001C517.834 718.267 551.632 752.5 594.499 752.5C711.5 752.5 745.419 669.601 748.475 669.601C751.531 669.601 761.5 752.5 888.999 761.001C939.554 764.371 1005.7 719.733 967.499 675" stroke="black" stroke-width="50" stroke-linecap="round" />\n        <path id="jaw" d="M560.999 675.001C517.834 718.267 551.632 752.5 594.499 752.5C711.5 752.5 745.419 669.601 748.475 669.601C751.531 669.601 761.5 752.5 888.999 761.001C939.554 764.371 1005.7 719.733 967.499 675" stroke="black" stroke-width="50" stroke-linecap="round" />\n      </g>\n    </defs>\n  </svg>';
      CHILL_EYE_SVG = '<svg id="__ID__" class="h-full w-full" viewBox="__VIEWBOX__" fill="none" xmlns="http://www.w3.org/2000/svg"\n  >\n    <g id="face-eye">\n      <path\n        id="eye-r"\n        d="M166 508C166 445.94 215.945 418 256 418C296.055 418 346 448.165 346 508C346 567.835 316.082 598 256 598C195.918 598 166 563.879 166 513.192" stroke="__STROKE__"\n        stroke-width="200"\n        stroke-linecap="round"\n      />\n      <path\n        id="eye-l"\n        d="M1346 508C1346 445.94 1296.05 418 1256 418C1215.95 418 1166 448.165 1166 508C1166 567.835 1195.92 598 1256 598C1316.08 598 1346 563.879 1346 513.192" stroke="__STROKE__"\n        stroke-width="200"\n        stroke-linecap="round"\n      />\n    </g>\n\n    <defs class="hidden">\n      <g class="neutral">\n        <path\n          id="eye-r"\n          d="M166 508C166 445.94 215.945 418 256 418C296.055 418 346 448.165 346 508C346 567.835 316.082 598 256 598C195.918 598 166 563.879 166 513.192"\n          stroke="black"\n          stroke-width="200"\n          stroke-linecap="round"\n        />\n        <path\n          id="eye-l"\n          d="M1346 508C1346 445.94 1296.05 418 1256 418C1215.95 418 1166 448.165 1166 508C1166 567.835 1195.92 598 1256 598C1316.08 598 1346 563.879 1346 513.192"\n          stroke="black"\n          stroke-width="200"\n          stroke-linecap="round"\n        />\n      </g>\n      <g class="neutral">\n        <path\n          id="eye-r"\n          d="M166 508C166 506.621 215.945 506 256 506C296.055 506 346 506.67 346 508C346 509.33 316.082 510 256 510C195.918 510 166 509.242 166 508.115"\n          stroke="black"\n          stroke-width="100"\n          stroke-linecap="round"\n        />\n        <path\n          id="eye-l"\n          d="M1346 508C1346 506.621 1296.05 506 1256 506C1215.95 506 1166 506.67 1166 508C1166 509.33 1195.92 510 1256 510C1316.08 510 1346 509.242 1346 508.115"\n          stroke="black"\n          stroke-width="100"\n          stroke-linecap="round"\n        />\n      </g>\n\n      <g class="excited">\n        <path\n          id="eye-r"\n          d="M210 386C249 404.916 301.5 435.082 306 438.765C310.5 442.449 372 484.562 372 497.173C372 509.783 325 545.237 315.5 552.593C306 559.949 249 592.084 210 611"\n          stroke="black"\n          stroke-width="100"\n          stroke-linecap="round"\n        />\n        <path\n          id="eye-l"\n          d="M1290 382C1251 400.916 1198.5 431.082 1194 434.765C1189.5 438.449 1128 480.562 1128 493.173C1128 505.783 1175 541.237 1184.5 548.593C1194 555.949 1251 588.084 1290 607"\n          stroke="black"\n          stroke-width="100"\n          stroke-linecap="round"\n        />\n      </g>\n      <g class="excited">\n        <path\n          id="eye-r"\n          d="M210 401C249 417.31 301.5 443.319 306 446.496C310.5 449.672 372 485.982 372 496.855C372 507.729 325 538.297 315.5 544.64C306 550.983 249 578.69 210 595"\n          stroke="black"\n          stroke-width="100"\n          stroke-linecap="round"\n        />\n        <path\n          id="eye-l"\n          d="M1290 398C1251 414.31 1198.5 440.319 1194 443.496C1189.5 446.672 1128 482.982 1128 493.855C1128 504.729 1175 535.297 1184.5 541.64C1194 547.983 1251 575.69 1290 592"\n          stroke="black"\n          stroke-width="100"\n          stroke-linecap="round"\n        />\n      </g>\n\n      <g class="happy">\n        <path\n          id="eye-r"\n          d="M152 499.74C162.347 474.172 199.536 423.244 210.325 415.5C221.114 407.756 276.302 356.431 311.709 362.407C347.116 368.384 383.16 442.239 390.362 453.089C397.565 463.94 419.667 516.232 420.66 545.09"\n          stroke="black"\n          stroke-width="100"\n          stroke-linecap="round"\n        />\n        <path\n          id="eye-l"\n          d="M1357.83 497.74C1347.48 472.172 1310.29 421.244 1299.5 413.5C1288.71 405.756 1233.52 354.431 1198.12 360.407C1162.71 366.384 1126.67 440.239 1119.46 451.089C1112.26 461.94 1090.16 514.232 1089.17 543.09"\n          stroke="black"\n          stroke-width="100"\n          stroke-linecap="round"\n        />\n      </g>\n      <g class="happy">\n        <path\n          id="eye-r"\n          d="M155.381 482.808C164.301 456.708 198.624 403.806 208.969 395.478C219.315 387.151 271.587 332.859 307.27 336.873C342.953 340.887 383.016 412.641 390.806 423.077C398.596 433.514 423.55 484.507 426.134 513.266"\n          stroke="black"\n          stroke-width="100"\n          stroke-linecap="round"\n        />\n        <path\n          id="eye-l"\n          d="M1349.4 490.989C1342.37 464.317 1311.93 409.092 1302.2 400.044C1292.48 390.997 1244.23 333.099 1208.36 334.546C1172.48 335.993 1127.37 404.692 1118.86 414.544C1110.34 424.395 1081.8 473.469 1077.16 501.969"\n          stroke="black"\n          stroke-width="100"\n          stroke-linecap="round"\n        />\n      </g>\n\n      <g class="sad">\n        <path\n          id="eye-r"\n          d="M166 508C166 475.5 177 494.662 256 460.5C335 426.338 346 448.165 346 508C346 567.835 316.082 598 256 598C195.918 598 166 563.879 166 513.192"\n          stroke="black"\n          stroke-width="180"\n          stroke-linecap="round"\n        />\n        <path\n          id="eye-l"\n          d="M1346 520.535C1346 492.799 1294.5 480.78 1240.5 453.043C1186.5 425.307 1166 465.215 1166 520.535C1166 575.856 1195.92 603.744 1256 603.744C1316.08 603.744 1326 603.037 1354.5 652.5"\n          stroke="black"\n          stroke-width="180"\n          stroke-linecap="round"\n        />\n      </g>\n      <g class="sad">\n        <path\n          id="eye-r"\n          d="M166 508C166 475.5 177 495.162 256 461C335 426.838 346 448.165 346 508C346 567.835 316.082 598 256 598C195.918 598 166 563.879 166 513.192"\n          stroke="black"\n          stroke-width="180"\n          stroke-linecap="round"\n        />\n        <path\n          id="eye-l"\n          d="M1346 520.535C1346 494 1298.5 482.236 1244.5 454.5C1190.5 426.764 1166 465.215 1166 520.535C1166 575.855 1195.92 603.744 1256 603.744C1316.08 603.744 1346 638 1359.5 687.5"\n          stroke="black"\n          stroke-width="180"\n          stroke-linecap="round"\n        />\n      </g>\n\n      <g class="angry">\n        <path\n          id="eye-r"\n          d="M166 508C166 445.94 202.445 431 242.5 431C246.5 431 346 501 346 508C346 567.835 316.082 598 256 598C195.918 598 166 563.879 166 513.192"\n          stroke="black"\n          stroke-width="200"\n          stroke-linecap="round"\n        />\n        <path\n          id="eye-l"\n          d="M1346 508C1346 445.939 1317.55 433 1277.5 433C1271.5 433 1166 501.5 1166 508C1166 567.835 1195.92 598 1256 598C1316.08 598 1346 563.879 1346 513.192"\n          stroke="black"\n          stroke-width="200"\n          stroke-linecap="round"\n        />\n      </g>\n\n      <g class="surprised">\n        <path\n          id="eye-r"\n          d="M128 508C128 422.495 199.033 384 256 384C312.967 384 384 425.56 384 508C384 590.44 341.451 632 256 632C170.549 632 128 584.989 128 515.154"\n          stroke="black"\n          stroke-width="50"\n          stroke-linecap="round"\n        />\n        <path\n          id="eye-l"\n          d="M1401 508C1401 422.495 1326.64 384 1267 384C1207.36 384 1133 425.56 1133 508C1133 590.44 1177.54 632 1267 632C1356.46 632 1401 584.989 1401 515.154"\n          stroke="black"\n          stroke-width="50"\n          stroke-linecap="round"\n        />\n      </g>\n      <g class="surprised">\n        <path\n          id="eye-r"\n          d="M117 508C117 411.462 194.137 368 256 368C317.863 368 395 414.923 395 508C395 601.077 348.794 648 256 648C163.206 648 117 594.923 117 516.077"\n          stroke="black"\n          stroke-width="50"\n          stroke-linecap="round"\n        />\n        <path\n          id="eye-l"\n          d="M1406 508C1406 416.288 1328.86 375 1267 375C1205.14 375 1128 419.577 1128 508C1128 596.423 1174.21 641 1267 641C1359.79 641 1406 590.577 1406 515.673"\n          stroke="black"\n          stroke-width="50"\n          stroke-linecap="round"\n        />\n      </g>\n\n      <g class="derpy">\n        <path\n          id="eye-r"\n          d="M196 375C196 312.94 245.945 285 286 285C326.055 285 376 315.165 376 375C376 434.835 346.082 465 286 465C225.918 465 196 430.879 196 380.192"\n          stroke="black"\n          stroke-width="50"\n          stroke-linecap="round"\n        />\n        <path\n          id="eye-l"\n          d="M1336 590C1336 527.94 1286.05 500 1246 500C1205.95 500 1156 530.165 1156 590C1156 649.835 1185.92 680 1246 680C1306.08 680 1336 645.879 1336 595.192"\n          stroke="black"\n          stroke-width="50"\n          stroke-linecap="round"\n        />\n      </g>\n\n      <g class="speechless">\n        <path\n          id="eye-r"\n          d="M166 498C166 500.069 215.945 501 256 501C296.055 501 346 499.995 346 498C346 496.005 316.082 495 256 495C195.918 495 166 496.137 166 497.827"\n          stroke="black"\n          stroke-width="100"\n          stroke-linecap="round"\n        />\n        <path\n          id="eye-l"\n          d="M1370 514C1370 516.069 1320.05 517 1280 517C1239.95 517 1190 515.995 1190 514C1190 512.005 1219.92 511 1280 511C1340.08 511 1370 512.137 1370 513.827"\n          stroke="black"\n          stroke-width="100"\n          stroke-linecap="round"\n        />\n      </g>\n\n      <g class="pleasant">\n        <path\n          id="eye-r"\n          d="M167.791 499.18C169.026 500.84 198.959 479.73 222.52 462.2C246.08 444.671 274.858 422.007 273.667 420.407C272.477 418.807 254.279 431.093 218.938 457.387C183.598 483.68 166.679 497.686 167.687 499.041"\n          stroke="black"\n          stroke-width="100"\n          stroke-linecap="round"\n        />\n        <path\n          id="eye-l"\n          d="M1361.59 521.126C1358.54 523.971 1332.8 499.184 1313.26 478.278C1293.72 457.372 1270.83 429.922 1273.76 427.179C1276.69 424.436 1292.77 438.668 1322.09 470.027C1351.4 501.386 1364.33 518.565 1361.84 520.888"\n          stroke="black"\n          stroke-width="100"\n          stroke-linecap="round"\n        />\n      </g>\n\n      <g class="confidence">\n        <path\n          id="eye-r"\n          d="M166 508C166 445.939 202.445 431 242.5 431C328.5 416 346 501 346 508C346 567.835 316.082 598 256 598C195.918 598 166 563.879 166 513.192"\n          stroke="black"\n          stroke-width="200"\n          stroke-linecap="round"\n        />\n        <path\n          id="eye-l"\n          d="M1346 508C1346 445.939 1317.55 433 1277.5 433C1217.5 433 1166 460.5 1166 508C1166 567.835 1195.92 598 1256 598C1316.08 598 1346 563.879 1346 513.192"\n          stroke="black"\n          stroke-width="200"\n          stroke-linecap="round"\n        />\n      </g>\n\n    </defs>\n  </svg>';
    }
  });

  // src/components/gobby/chill-map-number.ts
  function mapNumber(current, inMin, inMax, outMin, outMax) {
    const mapped = (current - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    return Math.min(
      Math.max(mapped, Math.min(outMin, outMax)),
      Math.max(outMin, outMax)
    );
  }
  var init_chill_map_number = __esm({
    "src/components/gobby/chill-map-number.ts"() {
      "use strict";
      init_define_import_meta_env();
    }
  });

  // src/components/gobby/chill-eye-view-box.ts
  function computeChillEyeViewBox(expression, eyeOffsetRadius, mouse, followPointerScope = "local") {
    const frozen = followPointerScope === "viewport" ? EYE_VIEWBOX_FROZEN_VIEWPORT : EYE_VIEWBOX_FROZEN_EXPRESSIONS;
    if (frozen.has(expression)) return "0 0 1500 1000";
    const offset = eyeOffsetRadius;
    const { elementX, elementY } = mouse;
    const elementWidth = Math.max(mouse.elementWidth, 1);
    const elementHeight = Math.max(mouse.elementHeight, 1);
    const position = {
      x: elementWidth / 2 - elementX,
      y: elementHeight / 2 - elementY
    };
    const xRadius = Math.abs(
      mapNumber(
        position.x,
        -elementWidth / 2,
        elementWidth / 2,
        -offset,
        offset
      )
    );
    const yRadius = Math.abs(
      mapNumber(
        position.y,
        -elementHeight / 2,
        elementHeight / 2,
        -offset,
        offset
      )
    );
    const angle = Math.atan2(position.y, position.x);
    const x = Math.cos(angle) * xRadius;
    const y = Math.sin(angle) * yRadius;
    return `${x} ${y} 1500 1000`;
  }
  var EYE_VIEWBOX_FROZEN_EXPRESSIONS, EYE_VIEWBOX_FROZEN_VIEWPORT;
  var init_chill_eye_view_box = __esm({
    "src/components/gobby/chill-eye-view-box.ts"() {
      "use strict";
      init_define_import_meta_env();
      init_chill_map_number();
      EYE_VIEWBOX_FROZEN_EXPRESSIONS = /* @__PURE__ */ new Set(["excited", "happy"]);
      EYE_VIEWBOX_FROZEN_VIEWPORT = /* @__PURE__ */ new Set(["excited"]);
    }
  });

  // src/components/gobby/use-prefers-reduced-motion.ts
  function usePrefersReducedMotion() {
    const [reduced, setReduced] = (0, import_react27.useState)(false);
    (0, import_react27.useEffect)(() => {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      setReduced(mq.matches);
      const onChange = () => setReduced(mq.matches);
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    }, []);
    return reduced;
  }
  var import_react27;
  var init_use_prefers_reduced_motion = __esm({
    "src/components/gobby/use-prefers-reduced-motion.ts"() {
      "use strict";
      "use client";
      init_define_import_meta_env();
      import_react27 = __toESM(require_react_shim());
    }
  });

  // src/components/gobby/chill-util-cat-face.tsx
  var chill_util_cat_face_exports = {};
  __export(chill_util_cat_face_exports, {
    ChillUtilCatFace: () => ChillUtilCatFace
  });
  function buildSvgHtml(template, id3, stroke, viewBox = "0 0 1500 1000") {
    return template.replace(/__ID__/g, id3).replace(/__STROKE__/g, stroke).replace(/__VIEWBOX__/g, viewBox);
  }
  function useStableDomId(prefix) {
    const rid = (0, import_react28.useId)();
    return (0, import_react28.useMemo)(
      () => `${prefix}${rid.replace(/[^a-zA-Z0-9_-]/g, "")}`,
      [prefix, rid]
    );
  }
  function runWrapperMotion(el, expression) {
    if (!el) return;
    anime_es_default.remove(el);
    const loops = [
      "excited",
      "happy",
      "sad",
      "angry",
      "surprised",
      "derpy"
    ];
    const startExpression = () => {
      switch (expression) {
        case "neutral":
          break;
        case "excited":
          anime_es_default({
            targets: el,
            keyframes: [{ rotate: 5 }, { rotate: -5 }],
            easing: "easeInOutCubic",
            direction: "alternate",
            duration: 600,
            loop: true
          });
          break;
        case "happy":
          anime_es_default({
            targets: el,
            keyframes: [
              { translateY: 2, easing: "easeInCubic" },
              { translateY: -2, easing: "easeOutCubic" }
            ],
            direction: "alternate",
            duration: 600,
            loop: true
          });
          break;
        case "sad":
          anime_es_default({
            targets: el,
            keyframes: [{ translateY: 1 }, { translateY: -1 }],
            easing: "linear",
            direction: "alternate",
            duration: 100,
            loop: true
          });
          break;
        case "angry":
          anime_es_default({
            targets: el,
            keyframes: [
              { translateY: 5, easing: "easeInOutCirc" },
              { translateY: -5, easing: "easeInOutCirc" }
            ],
            direction: "alternate",
            duration: 1200,
            loop: true
          });
          break;
        case "surprised":
          anime_es_default({
            targets: el,
            keyframes: [{ translateX: 2 }, { translateX: -2 }],
            easing: "linear",
            direction: "alternate",
            duration: 100,
            loop: true
          });
          break;
        case "derpy":
          anime_es_default({
            targets: el,
            keyframes: [
              { scaleX: 0.9, scaleY: 1.1, easing: "easeInOutCirc" },
              { scaleX: 1.1, scaleY: 0.9, easing: "easeInOutCirc" }
            ],
            direction: "alternate",
            duration: 1200,
            loop: true
          });
          break;
        default:
          break;
      }
    };
    void (async () => {
      const reset = anime_es_default({
        targets: el,
        rotate: 0,
        translateX: 0,
        translateY: 0,
        scaleX: 1,
        scaleY: 1,
        duration: 200
      });
      await reset.finished;
      if (expression === "neutral" || !loops.includes(expression)) {
        return;
      }
      startExpression();
    })();
  }
  function ChillUtilCatFace({
    className,
    facialExpression: controlled,
    strokeColor = "currentColor",
    eyeOffsetRadius = 40,
    followPointer = "local",
    interactive = true,
    initialExpression = "neutral"
  }) {
    const browId = useStableDomId("b");
    const eyeId = useStableDomId("e");
    const mouthId = useStableDomId("m");
    const faceRef = (0, import_react28.useRef)(null);
    const browHost = (0, import_react28.useRef)(null);
    const eyeHost = (0, import_react28.useRef)(null);
    const mouthHost = (0, import_react28.useRef)(null);
    const eyeSvgRef = (0, import_react28.useRef)(null);
    const [internal, setInternal] = (0, import_react28.useState)(initialExpression);
    const isControlled = controlled !== void 0;
    const expression = isControlled ? controlled : internal;
    const reducedMotion = usePrefersReducedMotion();
    const trackViewportPointer = followPointer === "viewport" && !reducedMotion;
    const [mouse, setMouse] = (0, import_react28.useState)({
      elementX: 0,
      elementY: 0,
      elementWidth: 1,
      elementHeight: 1
    });
    const viewBoxStr = (0, import_react28.useMemo)(
      () => computeChillEyeViewBox(
        expression,
        eyeOffsetRadius,
        mouse,
        followPointer
      ),
      [expression, eyeOffsetRadius, mouse, followPointer]
    );
    (0, import_react28.useLayoutEffect)(() => {
      if (!browHost.current) return;
      browHost.current.innerHTML = buildSvgHtml(CHILL_EYEBROW_SVG, browId, strokeColor);
    }, [browId, strokeColor]);
    (0, import_react28.useLayoutEffect)(() => {
      if (!mouthHost.current) return;
      mouthHost.current.innerHTML = buildSvgHtml(CHILL_MOUTH_SVG, mouthId, strokeColor);
    }, [mouthId, strokeColor]);
    (0, import_react28.useLayoutEffect)(() => {
      if (!eyeHost.current) return;
      eyeHost.current.innerHTML = buildSvgHtml(
        CHILL_EYE_SVG,
        eyeId,
        strokeColor,
        "0 0 1500 1000"
      );
      eyeSvgRef.current = eyeHost.current.querySelector("svg");
      const svg = eyeSvgRef.current;
      if (svg) {
        const r4 = svg.getBoundingClientRect();
        if (r4.width > 0 && r4.height > 0) {
          setMouse({
            elementX: r4.width / 2,
            elementY: r4.height / 2,
            elementWidth: r4.width,
            elementHeight: r4.height
          });
        }
      }
    }, [eyeId, strokeColor]);
    (0, import_react28.useEffect)(() => {
      const svg = eyeSvgRef.current;
      if (!svg) return;
      svg.setAttribute("viewBox", viewBoxStr);
    }, [viewBoxStr]);
    (0, import_react28.useEffect)(() => {
      void runChillEyebrowAnimation(browId, expression);
    }, [browId, expression]);
    (0, import_react28.useEffect)(() => {
      void runChillMouthAnimation(mouthId, expression);
    }, [mouthId, expression]);
    (0, import_react28.useEffect)(() => {
      void runChillEyeAnimation(eyeId, expression);
    }, [eyeId, expression]);
    (0, import_react28.useEffect)(() => {
      runWrapperMotion(faceRef.current, expression);
    }, [expression]);
    const updateMouseFromClient = (0, import_react28.useCallback)((clientX, clientY) => {
      const svg = eyeSvgRef.current;
      if (!svg) return;
      const r4 = svg.getBoundingClientRect();
      setMouse({
        elementX: clientX - r4.left,
        elementY: clientY - r4.top,
        elementWidth: Math.max(r4.width, 1),
        elementHeight: Math.max(r4.height, 1)
      });
    }, []);
    const onEyePointerMove = (0, import_react28.useCallback)(
      (e2) => {
        if (trackViewportPointer) return;
        updateMouseFromClient(e2.clientX, e2.clientY);
      },
      [trackViewportPointer, updateMouseFromClient]
    );
    (0, import_react28.useEffect)(() => {
      if (!trackViewportPointer) return;
      let raf = 0;
      const onWindowPointerMove = (e2) => {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          updateMouseFromClient(e2.clientX, e2.clientY);
        });
      };
      window.addEventListener("pointermove", onWindowPointerMove, {
        passive: true
      });
      return () => {
        window.removeEventListener("pointermove", onWindowPointerMove);
        cancelAnimationFrame(raf);
      };
    }, [trackViewportPointer, updateMouseFromClient]);
    const cycle = (0, import_react28.useMemo)(
      () => ["neutral", "happy", "surprised", "sad", "neutral"],
      []
    );
    const bumpHappy = (0, import_react28.useCallback)(() => {
      if (!interactive || isControlled) return;
      setInternal("happy");
    }, [interactive, isControlled]);
    const releaseHover = (0, import_react28.useCallback)(() => {
      if (!interactive || isControlled) return;
      setInternal("neutral");
    }, [interactive, isControlled]);
    const tapCycle = (0, import_react28.useCallback)(() => {
      if (!interactive || isControlled) return;
      setInternal((prev) => {
        const i2 = cycle.indexOf(prev);
        const next = i2 >= 0 ? cycle[(i2 + 1) % cycle.length] : "neutral";
        return next;
      });
    }, [interactive, isControlled, cycle]);
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        ref: faceRef,
        className: cn(
          "relative aspect-[3/2] w-full touch-manipulation",
          className
        ),
        onPointerEnter: interactive && !isControlled ? bumpHappy : void 0,
        onPointerLeave: interactive && !isControlled ? releaseHover : void 0,
        onPointerDown: interactive && !isControlled ? (e2) => {
          if (e2.button === 0) tapCycle();
        } : void 0,
        role: "presentation",
        "data-facial-expression": expression
      },
      /* @__PURE__ */ React.createElement(
        "div",
        {
          ref: browHost,
          className: "absolute left-0 top-0 h-full w-full",
          "aria-hidden": true
        }
      ),
      /* @__PURE__ */ React.createElement(
        "div",
        {
          ref: eyeHost,
          className: "absolute left-0 top-0 h-full w-full",
          "aria-hidden": true,
          onPointerMove: onEyePointerMove
        }
      ),
      /* @__PURE__ */ React.createElement(
        "div",
        {
          ref: mouthHost,
          className: "absolute left-0 top-0 h-full w-full",
          "aria-hidden": true
        }
      )
    );
  }
  var import_react28;
  var init_chill_util_cat_face = __esm({
    "src/components/gobby/chill-util-cat-face.tsx"() {
      "use strict";
      "use client";
      init_define_import_meta_env();
      init_anime_es();
      import_react28 = __toESM(require_react_shim());
      init_utils();
      init_chill_face_layer_runners();
      init_chill_face_static_markup();
      init_chill_eye_view_box();
      init_use_prefers_reduced_motion();
    }
  });

  // .design-sync/ds-entry.tsx
  var ds_entry_exports = {};
  __export(ds_entry_exports, {
    Button: () => Button,
    Card: () => Card,
    CardContent: () => CardContent,
    CardDescription: () => CardDescription,
    CardHeader: () => CardHeader,
    CardTitle: () => CardTitle,
    DsThemeSurface: () => DsThemeSurface,
    GobbyMascot: () => GobbyMascot,
    SlidingTabTrigger: () => SlidingTabTrigger,
    Tabs: () => Tabs2,
    TabsContent: () => TabsContent2,
    TabsList: () => TabsList2,
    TabsTrigger: () => TabsTrigger2,
    TextFxPanel: () => TextFxPanel,
    ThemeToggle: () => ThemeToggle,
    buttonVariants: () => buttonVariants
  });
  init_define_import_meta_env();

  // src/components/ui/button.tsx
  init_define_import_meta_env();
  var React4 = __toESM(require_react_shim());

  // node_modules/@radix-ui/react-slot/dist/index.mjs
  init_define_import_meta_env();
  var React3 = __toESM(require_react_shim(), 1);

  // node_modules/@radix-ui/react-compose-refs/dist/index.mjs
  init_define_import_meta_env();
  var React2 = __toESM(require_react_shim(), 1);
  function setRef(ref, value) {
    if (typeof ref === "function") {
      return ref(value);
    } else if (ref !== null && ref !== void 0) {
      ref.current = value;
    }
  }
  function composeRefs(...refs) {
    return (node) => {
      let hasCleanup = false;
      const cleanups = refs.map((ref) => {
        const cleanup = setRef(ref, node);
        if (!hasCleanup && typeof cleanup == "function") {
          hasCleanup = true;
        }
        return cleanup;
      });
      if (hasCleanup) {
        return () => {
          for (let i2 = 0; i2 < cleanups.length; i2++) {
            const cleanup = cleanups[i2];
            if (typeof cleanup == "function") {
              cleanup();
            } else {
              setRef(refs[i2], null);
            }
          }
        };
      }
    };
  }
  function useComposedRefs(...refs) {
    return React2.useCallback(composeRefs(...refs), refs);
  }

  // node_modules/@radix-ui/react-slot/dist/index.mjs
  var import_jsx_runtime = __toESM(require_react_shim(), 1);
  var REACT_LAZY_TYPE = Symbol.for("react.lazy");
  var use = React3[" use ".trim().toString()];
  function isPromiseLike(value) {
    return typeof value === "object" && value !== null && "then" in value;
  }
  function isLazyComponent(element) {
    return element != null && typeof element === "object" && "$$typeof" in element && element.$$typeof === REACT_LAZY_TYPE && "_payload" in element && isPromiseLike(element._payload);
  }
  // @__NO_SIDE_EFFECTS__
  function createSlot(ownerName) {
    const SlotClone = /* @__PURE__ */ createSlotClone(ownerName);
    const Slot2 = React3.forwardRef((props, forwardedRef) => {
      let { children, ...slotProps } = props;
      if (isLazyComponent(children) && typeof use === "function") {
        children = use(children._payload);
      }
      const childrenArray = React3.Children.toArray(children);
      const slottable = childrenArray.find(isSlottable);
      if (slottable) {
        const newElement = slottable.props.children;
        const newChildren = childrenArray.map((child) => {
          if (child === slottable) {
            if (React3.Children.count(newElement) > 1) return React3.Children.only(null);
            return React3.isValidElement(newElement) ? newElement.props.children : null;
          } else {
            return child;
          }
        });
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children: React3.isValidElement(newElement) ? React3.cloneElement(newElement, void 0, newChildren) : null });
      }
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children });
    });
    Slot2.displayName = `${ownerName}.Slot`;
    return Slot2;
  }
  var Slot = /* @__PURE__ */ createSlot("Slot");
  // @__NO_SIDE_EFFECTS__
  function createSlotClone(ownerName) {
    const SlotClone = React3.forwardRef((props, forwardedRef) => {
      let { children, ...slotProps } = props;
      if (isLazyComponent(children) && typeof use === "function") {
        children = use(children._payload);
      }
      if (React3.isValidElement(children)) {
        const childrenRef = getElementRef(children);
        const props2 = mergeProps(slotProps, children.props);
        if (children.type !== React3.Fragment) {
          props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
        }
        return React3.cloneElement(children, props2);
      }
      return React3.Children.count(children) > 1 ? React3.Children.only(null) : null;
    });
    SlotClone.displayName = `${ownerName}.SlotClone`;
    return SlotClone;
  }
  var SLOTTABLE_IDENTIFIER = Symbol("radix.slottable");
  function isSlottable(child) {
    return React3.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
  }
  function mergeProps(slotProps, childProps) {
    const overrideProps = { ...childProps };
    for (const propName in childProps) {
      const slotPropValue = slotProps[propName];
      const childPropValue = childProps[propName];
      const isHandler = /^on[A-Z]/.test(propName);
      if (isHandler) {
        if (slotPropValue && childPropValue) {
          overrideProps[propName] = (...args) => {
            const result = childPropValue(...args);
            slotPropValue(...args);
            return result;
          };
        } else if (slotPropValue) {
          overrideProps[propName] = slotPropValue;
        }
      } else if (propName === "style") {
        overrideProps[propName] = { ...slotPropValue, ...childPropValue };
      } else if (propName === "className") {
        overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
      }
    }
    return { ...slotProps, ...overrideProps };
  }
  function getElementRef(element) {
    let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
      return element.ref;
    }
    getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
      return element.props.ref;
    }
    return element.props.ref || element.ref;
  }

  // node_modules/class-variance-authority/dist/index.mjs
  init_define_import_meta_env();
  init_clsx();
  var falsyToString = (value) => typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
  var cx = clsx;
  var cva = (base, config) => (props) => {
    var _config_compoundVariants;
    if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
    const { variants, defaultVariants } = config;
    const getVariantClassNames = Object.keys(variants).map((variant) => {
      const variantProp = props === null || props === void 0 ? void 0 : props[variant];
      const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
      if (variantProp === null) return null;
      const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
      return variants[variant][variantKey];
    });
    const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param) => {
      let [key, value] = param;
      if (value === void 0) {
        return acc;
      }
      acc[key] = value;
      return acc;
    }, {});
    const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param) => {
      let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param;
      return Object.entries(compoundVariantOptions).every((param2) => {
        let [key, value] = param2;
        return Array.isArray(value) ? value.includes({
          ...defaultVariants,
          ...propsWithoutUndefined
        }[key]) : {
          ...defaultVariants,
          ...propsWithoutUndefined
        }[key] === value;
      }) ? [
        ...acc,
        cvClass,
        cvClassName
      ] : acc;
    }, []);
    return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
  };

  // src/components/ui/button.tsx
  init_utils();
  var buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
          outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
          secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
          default: "h-9 px-4 py-2",
          sm: "h-8 rounded-md px-3 text-xs",
          lg: "h-10 rounded-md px-8"
        }
      },
      defaultVariants: {
        variant: "default",
        size: "default"
      }
    }
  );
  var Button = React4.forwardRef(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
      const Comp = asChild ? Slot : "button";
      return /* @__PURE__ */ React4.createElement(
        Comp,
        {
          className: cn(buttonVariants({ variant, size, className })),
          ref,
          ...props
        }
      );
    }
  );
  Button.displayName = "Button";

  // src/components/ui/card.tsx
  init_define_import_meta_env();
  var React5 = __toESM(require_react_shim());
  init_utils();
  var Card = React5.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React5.createElement(
    "div",
    {
      ref,
      className: cn(
        "rounded-xl border bg-card text-card-foreground shadow",
        className
      ),
      ...props
    }
  ));
  Card.displayName = "Card";
  var CardHeader = React5.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React5.createElement(
    "div",
    {
      ref,
      className: cn("flex flex-col space-y-1.5 p-6", className),
      ...props
    }
  ));
  CardHeader.displayName = "CardHeader";
  var CardTitle = React5.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React5.createElement(
    "div",
    {
      ref,
      className: cn("font-semibold leading-none tracking-tight", className),
      ...props
    }
  ));
  CardTitle.displayName = "CardTitle";
  var CardDescription = React5.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React5.createElement(
    "div",
    {
      ref,
      className: cn("text-sm text-muted-foreground", className),
      ...props
    }
  ));
  CardDescription.displayName = "CardDescription";
  var CardContent = React5.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React5.createElement("div", { ref, className: cn("p-6 pt-0", className), ...props }));
  CardContent.displayName = "CardContent";

  // src/components/ui/tabs.tsx
  init_define_import_meta_env();
  var React19 = __toESM(require_react_shim());

  // node_modules/@radix-ui/react-tabs/dist/index.mjs
  init_define_import_meta_env();
  var React18 = __toESM(require_react_shim(), 1);

  // node_modules/@radix-ui/primitive/dist/index.mjs
  init_define_import_meta_env();
  var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
  function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
    return function handleEvent(event) {
      originalEventHandler?.(event);
      if (checkForDefaultPrevented === false || !event.defaultPrevented) {
        return ourEventHandler?.(event);
      }
    };
  }

  // node_modules/@radix-ui/react-context/dist/index.mjs
  init_define_import_meta_env();
  var React6 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime2 = __toESM(require_react_shim(), 1);
  function createContextScope(scopeName, createContextScopeDeps = []) {
    let defaultContexts = [];
    function createContext32(rootComponentName, defaultContext) {
      const BaseContext = React6.createContext(defaultContext);
      const index = defaultContexts.length;
      defaultContexts = [...defaultContexts, defaultContext];
      const Provider = (props) => {
        const { scope, children, ...context } = props;
        const Context = scope?.[scopeName]?.[index] || BaseContext;
        const value = React6.useMemo(() => context, Object.values(context));
        return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Context.Provider, { value, children });
      };
      Provider.displayName = rootComponentName + "Provider";
      function useContext22(consumerName, scope) {
        const Context = scope?.[scopeName]?.[index] || BaseContext;
        const context = React6.useContext(Context);
        if (context) return context;
        if (defaultContext !== void 0) return defaultContext;
        throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
      }
      return [Provider, useContext22];
    }
    const createScope = () => {
      const scopeContexts = defaultContexts.map((defaultContext) => {
        return React6.createContext(defaultContext);
      });
      return function useScope(scope) {
        const contexts = scope?.[scopeName] || scopeContexts;
        return React6.useMemo(
          () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
          [scope, contexts]
        );
      };
    };
    createScope.scopeName = scopeName;
    return [createContext32, composeContextScopes(createScope, ...createContextScopeDeps)];
  }
  function composeContextScopes(...scopes) {
    const baseScope = scopes[0];
    if (scopes.length === 1) return baseScope;
    const createScope = () => {
      const scopeHooks = scopes.map((createScope2) => ({
        useScope: createScope2(),
        scopeName: createScope2.scopeName
      }));
      return function useComposedScopes(overrideScopes) {
        const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
          const scopeProps = useScope(overrideScopes);
          const currentScope = scopeProps[`__scope${scopeName}`];
          return { ...nextScopes2, ...currentScope };
        }, {});
        return React6.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
      };
    };
    createScope.scopeName = baseScope.scopeName;
    return createScope;
  }

  // node_modules/@radix-ui/react-roving-focus/dist/index.mjs
  init_define_import_meta_env();
  var React16 = __toESM(require_react_shim(), 1);

  // node_modules/@radix-ui/react-collection/dist/index.mjs
  init_define_import_meta_env();
  var import_react = __toESM(require_react_shim(), 1);

  // node_modules/@radix-ui/react-collection/node_modules/@radix-ui/react-slot/dist/index.mjs
  init_define_import_meta_env();
  var React7 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime3 = __toESM(require_react_shim(), 1);
  // @__NO_SIDE_EFFECTS__
  function createSlot2(ownerName) {
    const SlotClone = /* @__PURE__ */ createSlotClone2(ownerName);
    const Slot2 = React7.forwardRef((props, forwardedRef) => {
      const { children, ...slotProps } = props;
      const childrenArray = React7.Children.toArray(children);
      const slottable = childrenArray.find(isSlottable2);
      if (slottable) {
        const newElement = slottable.props.children;
        const newChildren = childrenArray.map((child) => {
          if (child === slottable) {
            if (React7.Children.count(newElement) > 1) return React7.Children.only(null);
            return React7.isValidElement(newElement) ? newElement.props.children : null;
          } else {
            return child;
          }
        });
        return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children: React7.isValidElement(newElement) ? React7.cloneElement(newElement, void 0, newChildren) : null });
      }
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children });
    });
    Slot2.displayName = `${ownerName}.Slot`;
    return Slot2;
  }
  // @__NO_SIDE_EFFECTS__
  function createSlotClone2(ownerName) {
    const SlotClone = React7.forwardRef((props, forwardedRef) => {
      const { children, ...slotProps } = props;
      if (React7.isValidElement(children)) {
        const childrenRef = getElementRef2(children);
        const props2 = mergeProps2(slotProps, children.props);
        if (children.type !== React7.Fragment) {
          props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
        }
        return React7.cloneElement(children, props2);
      }
      return React7.Children.count(children) > 1 ? React7.Children.only(null) : null;
    });
    SlotClone.displayName = `${ownerName}.SlotClone`;
    return SlotClone;
  }
  var SLOTTABLE_IDENTIFIER2 = Symbol("radix.slottable");
  function isSlottable2(child) {
    return React7.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER2;
  }
  function mergeProps2(slotProps, childProps) {
    const overrideProps = { ...childProps };
    for (const propName in childProps) {
      const slotPropValue = slotProps[propName];
      const childPropValue = childProps[propName];
      const isHandler = /^on[A-Z]/.test(propName);
      if (isHandler) {
        if (slotPropValue && childPropValue) {
          overrideProps[propName] = (...args) => {
            const result = childPropValue(...args);
            slotPropValue(...args);
            return result;
          };
        } else if (slotPropValue) {
          overrideProps[propName] = slotPropValue;
        }
      } else if (propName === "style") {
        overrideProps[propName] = { ...slotPropValue, ...childPropValue };
      } else if (propName === "className") {
        overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
      }
    }
    return { ...slotProps, ...overrideProps };
  }
  function getElementRef2(element) {
    let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
      return element.ref;
    }
    getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
      return element.props.ref;
    }
    return element.props.ref || element.ref;
  }

  // node_modules/@radix-ui/react-collection/dist/index.mjs
  var import_jsx_runtime4 = __toESM(require_react_shim(), 1);
  var import_react2 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime5 = __toESM(require_react_shim(), 1);
  function createCollection(name) {
    const PROVIDER_NAME = name + "CollectionProvider";
    const [createCollectionContext, createCollectionScope2] = createContextScope(PROVIDER_NAME);
    const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(
      PROVIDER_NAME,
      { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
    );
    const CollectionProvider = (props) => {
      const { scope, children } = props;
      const ref = import_react.default.useRef(null);
      const itemMap = import_react.default.useRef(/* @__PURE__ */ new Map()).current;
      return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(CollectionProviderImpl, { scope, itemMap, collectionRef: ref, children });
    };
    CollectionProvider.displayName = PROVIDER_NAME;
    const COLLECTION_SLOT_NAME = name + "CollectionSlot";
    const CollectionSlotImpl = createSlot2(COLLECTION_SLOT_NAME);
    const CollectionSlot = import_react.default.forwardRef(
      (props, forwardedRef) => {
        const { scope, children } = props;
        const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);
        const composedRefs = useComposedRefs(forwardedRef, context.collectionRef);
        return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(CollectionSlotImpl, { ref: composedRefs, children });
      }
    );
    CollectionSlot.displayName = COLLECTION_SLOT_NAME;
    const ITEM_SLOT_NAME = name + "CollectionItemSlot";
    const ITEM_DATA_ATTR = "data-radix-collection-item";
    const CollectionItemSlotImpl = createSlot2(ITEM_SLOT_NAME);
    const CollectionItemSlot = import_react.default.forwardRef(
      (props, forwardedRef) => {
        const { scope, children, ...itemData } = props;
        const ref = import_react.default.useRef(null);
        const composedRefs = useComposedRefs(forwardedRef, ref);
        const context = useCollectionContext(ITEM_SLOT_NAME, scope);
        import_react.default.useEffect(() => {
          context.itemMap.set(ref, { ref, ...itemData });
          return () => void context.itemMap.delete(ref);
        });
        return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(CollectionItemSlotImpl, { ...{ [ITEM_DATA_ATTR]: "" }, ref: composedRefs, children });
      }
    );
    CollectionItemSlot.displayName = ITEM_SLOT_NAME;
    function useCollection2(scope) {
      const context = useCollectionContext(name + "CollectionConsumer", scope);
      const getItems = import_react.default.useCallback(() => {
        const collectionNode = context.collectionRef.current;
        if (!collectionNode) return [];
        const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
        const items = Array.from(context.itemMap.values());
        const orderedItems = items.sort(
          (a, b) => orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b.ref.current)
        );
        return orderedItems;
      }, [context.collectionRef, context.itemMap]);
      return getItems;
    }
    return [
      { Provider: CollectionProvider, Slot: CollectionSlot, ItemSlot: CollectionItemSlot },
      useCollection2,
      createCollectionScope2
    ];
  }

  // node_modules/@radix-ui/react-id/dist/index.mjs
  init_define_import_meta_env();
  var React10 = __toESM(require_react_shim(), 1);

  // node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
  init_define_import_meta_env();
  var React9 = __toESM(require_react_shim(), 1);
  var useLayoutEffect2 = globalThis?.document ? React9.useLayoutEffect : () => {
  };

  // node_modules/@radix-ui/react-id/dist/index.mjs
  var useReactId = React10[" useId ".trim().toString()] || (() => void 0);
  var count = 0;
  function useId(deterministicId) {
    const [id3, setId] = React10.useState(useReactId());
    useLayoutEffect2(() => {
      if (!deterministicId) setId((reactId) => reactId ?? String(count++));
    }, [deterministicId]);
    return deterministicId || (id3 ? `radix-${id3}` : "");
  }

  // node_modules/@radix-ui/react-primitive/dist/index.mjs
  init_define_import_meta_env();
  var React12 = __toESM(require_react_shim(), 1);
  var ReactDOM = __toESM(require_react_dom_shim(), 1);

  // node_modules/@radix-ui/react-primitive/node_modules/@radix-ui/react-slot/dist/index.mjs
  init_define_import_meta_env();
  var React11 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime6 = __toESM(require_react_shim(), 1);
  // @__NO_SIDE_EFFECTS__
  function createSlot3(ownerName) {
    const SlotClone = /* @__PURE__ */ createSlotClone3(ownerName);
    const Slot2 = React11.forwardRef((props, forwardedRef) => {
      const { children, ...slotProps } = props;
      const childrenArray = React11.Children.toArray(children);
      const slottable = childrenArray.find(isSlottable3);
      if (slottable) {
        const newElement = slottable.props.children;
        const newChildren = childrenArray.map((child) => {
          if (child === slottable) {
            if (React11.Children.count(newElement) > 1) return React11.Children.only(null);
            return React11.isValidElement(newElement) ? newElement.props.children : null;
          } else {
            return child;
          }
        });
        return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children: React11.isValidElement(newElement) ? React11.cloneElement(newElement, void 0, newChildren) : null });
      }
      return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children });
    });
    Slot2.displayName = `${ownerName}.Slot`;
    return Slot2;
  }
  // @__NO_SIDE_EFFECTS__
  function createSlotClone3(ownerName) {
    const SlotClone = React11.forwardRef((props, forwardedRef) => {
      const { children, ...slotProps } = props;
      if (React11.isValidElement(children)) {
        const childrenRef = getElementRef3(children);
        const props2 = mergeProps3(slotProps, children.props);
        if (children.type !== React11.Fragment) {
          props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
        }
        return React11.cloneElement(children, props2);
      }
      return React11.Children.count(children) > 1 ? React11.Children.only(null) : null;
    });
    SlotClone.displayName = `${ownerName}.SlotClone`;
    return SlotClone;
  }
  var SLOTTABLE_IDENTIFIER3 = Symbol("radix.slottable");
  function isSlottable3(child) {
    return React11.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER3;
  }
  function mergeProps3(slotProps, childProps) {
    const overrideProps = { ...childProps };
    for (const propName in childProps) {
      const slotPropValue = slotProps[propName];
      const childPropValue = childProps[propName];
      const isHandler = /^on[A-Z]/.test(propName);
      if (isHandler) {
        if (slotPropValue && childPropValue) {
          overrideProps[propName] = (...args) => {
            const result = childPropValue(...args);
            slotPropValue(...args);
            return result;
          };
        } else if (slotPropValue) {
          overrideProps[propName] = slotPropValue;
        }
      } else if (propName === "style") {
        overrideProps[propName] = { ...slotPropValue, ...childPropValue };
      } else if (propName === "className") {
        overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
      }
    }
    return { ...slotProps, ...overrideProps };
  }
  function getElementRef3(element) {
    let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
      return element.ref;
    }
    getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
      return element.props.ref;
    }
    return element.props.ref || element.ref;
  }

  // node_modules/@radix-ui/react-primitive/dist/index.mjs
  var import_jsx_runtime7 = __toESM(require_react_shim(), 1);
  var NODES = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul"
  ];
  var Primitive = NODES.reduce((primitive, node) => {
    const Slot2 = createSlot3(`Primitive.${node}`);
    const Node2 = React12.forwardRef((props, forwardedRef) => {
      const { asChild, ...primitiveProps } = props;
      const Comp = asChild ? Slot2 : node;
      if (typeof window !== "undefined") {
        window[Symbol.for("radix-ui")] = true;
      }
      return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Comp, { ...primitiveProps, ref: forwardedRef });
    });
    Node2.displayName = `Primitive.${node}`;
    return { ...primitive, [node]: Node2 };
  }, {});

  // node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
  init_define_import_meta_env();
  var React13 = __toESM(require_react_shim(), 1);
  function useCallbackRef(callback) {
    const callbackRef = React13.useRef(callback);
    React13.useEffect(() => {
      callbackRef.current = callback;
    });
    return React13.useMemo(() => (...args) => callbackRef.current?.(...args), []);
  }

  // node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
  init_define_import_meta_env();
  var React14 = __toESM(require_react_shim(), 1);
  var React23 = __toESM(require_react_shim(), 1);
  var useInsertionEffect = React14[" useInsertionEffect ".trim().toString()] || useLayoutEffect2;
  function useControllableState({
    prop,
    defaultProp,
    onChange = () => {
    },
    caller
  }) {
    const [uncontrolledProp, setUncontrolledProp, onChangeRef] = useUncontrolledState({
      defaultProp,
      onChange
    });
    const isControlled = prop !== void 0;
    const value = isControlled ? prop : uncontrolledProp;
    if (true) {
      const isControlledRef = React14.useRef(prop !== void 0);
      React14.useEffect(() => {
        const wasControlled = isControlledRef.current;
        if (wasControlled !== isControlled) {
          const from = wasControlled ? "controlled" : "uncontrolled";
          const to = isControlled ? "controlled" : "uncontrolled";
          console.warn(
            `${caller} is changing from ${from} to ${to}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
          );
        }
        isControlledRef.current = isControlled;
      }, [isControlled, caller]);
    }
    const setValue = React14.useCallback(
      (nextValue) => {
        if (isControlled) {
          const value2 = isFunction(nextValue) ? nextValue(prop) : nextValue;
          if (value2 !== prop) {
            onChangeRef.current?.(value2);
          }
        } else {
          setUncontrolledProp(nextValue);
        }
      },
      [isControlled, prop, setUncontrolledProp, onChangeRef]
    );
    return [value, setValue];
  }
  function useUncontrolledState({
    defaultProp,
    onChange
  }) {
    const [value, setValue] = React14.useState(defaultProp);
    const prevValueRef = React14.useRef(value);
    const onChangeRef = React14.useRef(onChange);
    useInsertionEffect(() => {
      onChangeRef.current = onChange;
    }, [onChange]);
    React14.useEffect(() => {
      if (prevValueRef.current !== value) {
        onChangeRef.current?.(value);
        prevValueRef.current = value;
      }
    }, [value, prevValueRef]);
    return [value, setValue, onChangeRef];
  }
  function isFunction(value) {
    return typeof value === "function";
  }
  var SYNC_STATE = Symbol("RADIX:SYNC_STATE");

  // node_modules/@radix-ui/react-direction/dist/index.mjs
  init_define_import_meta_env();
  var React15 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime8 = __toESM(require_react_shim(), 1);
  var DirectionContext = React15.createContext(void 0);
  function useDirection(localDir) {
    const globalDir = React15.useContext(DirectionContext);
    return localDir || globalDir || "ltr";
  }

  // node_modules/@radix-ui/react-roving-focus/dist/index.mjs
  var import_jsx_runtime9 = __toESM(require_react_shim(), 1);
  var ENTRY_FOCUS = "rovingFocusGroup.onEntryFocus";
  var EVENT_OPTIONS = { bubbles: false, cancelable: true };
  var GROUP_NAME = "RovingFocusGroup";
  var [Collection, useCollection, createCollectionScope] = createCollection(GROUP_NAME);
  var [createRovingFocusGroupContext, createRovingFocusGroupScope] = createContextScope(
    GROUP_NAME,
    [createCollectionScope]
  );
  var [RovingFocusProvider, useRovingFocusContext] = createRovingFocusGroupContext(GROUP_NAME);
  var RovingFocusGroup = React16.forwardRef(
    (props, forwardedRef) => {
      return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Collection.Provider, { scope: props.__scopeRovingFocusGroup, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Collection.Slot, { scope: props.__scopeRovingFocusGroup, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(RovingFocusGroupImpl, { ...props, ref: forwardedRef }) }) });
    }
  );
  RovingFocusGroup.displayName = GROUP_NAME;
  var RovingFocusGroupImpl = React16.forwardRef((props, forwardedRef) => {
    const {
      __scopeRovingFocusGroup,
      orientation,
      loop = false,
      dir,
      currentTabStopId: currentTabStopIdProp,
      defaultCurrentTabStopId,
      onCurrentTabStopIdChange,
      onEntryFocus,
      preventScrollOnEntryFocus = false,
      ...groupProps
    } = props;
    const ref = React16.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const direction = useDirection(dir);
    const [currentTabStopId, setCurrentTabStopId] = useControllableState({
      prop: currentTabStopIdProp,
      defaultProp: defaultCurrentTabStopId ?? null,
      onChange: onCurrentTabStopIdChange,
      caller: GROUP_NAME
    });
    const [isTabbingBackOut, setIsTabbingBackOut] = React16.useState(false);
    const handleEntryFocus = useCallbackRef(onEntryFocus);
    const getItems = useCollection(__scopeRovingFocusGroup);
    const isClickFocusRef = React16.useRef(false);
    const [focusableItemsCount, setFocusableItemsCount] = React16.useState(0);
    React16.useEffect(() => {
      const node = ref.current;
      if (node) {
        node.addEventListener(ENTRY_FOCUS, handleEntryFocus);
        return () => node.removeEventListener(ENTRY_FOCUS, handleEntryFocus);
      }
    }, [handleEntryFocus]);
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      RovingFocusProvider,
      {
        scope: __scopeRovingFocusGroup,
        orientation,
        dir: direction,
        loop,
        currentTabStopId,
        onItemFocus: React16.useCallback(
          (tabStopId) => setCurrentTabStopId(tabStopId),
          [setCurrentTabStopId]
        ),
        onItemShiftTab: React16.useCallback(() => setIsTabbingBackOut(true), []),
        onFocusableItemAdd: React16.useCallback(
          () => setFocusableItemsCount((prevCount) => prevCount + 1),
          []
        ),
        onFocusableItemRemove: React16.useCallback(
          () => setFocusableItemsCount((prevCount) => prevCount - 1),
          []
        ),
        children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          Primitive.div,
          {
            tabIndex: isTabbingBackOut || focusableItemsCount === 0 ? -1 : 0,
            "data-orientation": orientation,
            ...groupProps,
            ref: composedRefs,
            style: { outline: "none", ...props.style },
            onMouseDown: composeEventHandlers(props.onMouseDown, () => {
              isClickFocusRef.current = true;
            }),
            onFocus: composeEventHandlers(props.onFocus, (event) => {
              const isKeyboardFocus = !isClickFocusRef.current;
              if (event.target === event.currentTarget && isKeyboardFocus && !isTabbingBackOut) {
                const entryFocusEvent = new CustomEvent(ENTRY_FOCUS, EVENT_OPTIONS);
                event.currentTarget.dispatchEvent(entryFocusEvent);
                if (!entryFocusEvent.defaultPrevented) {
                  const items = getItems().filter((item) => item.focusable);
                  const activeItem = items.find((item) => item.active);
                  const currentItem = items.find((item) => item.id === currentTabStopId);
                  const candidateItems = [activeItem, currentItem, ...items].filter(
                    Boolean
                  );
                  const candidateNodes = candidateItems.map((item) => item.ref.current);
                  focusFirst(candidateNodes, preventScrollOnEntryFocus);
                }
              }
              isClickFocusRef.current = false;
            }),
            onBlur: composeEventHandlers(props.onBlur, () => setIsTabbingBackOut(false))
          }
        )
      }
    );
  });
  var ITEM_NAME = "RovingFocusGroupItem";
  var RovingFocusGroupItem = React16.forwardRef(
    (props, forwardedRef) => {
      const {
        __scopeRovingFocusGroup,
        focusable = true,
        active = false,
        tabStopId,
        children,
        ...itemProps
      } = props;
      const autoId = useId();
      const id3 = tabStopId || autoId;
      const context = useRovingFocusContext(ITEM_NAME, __scopeRovingFocusGroup);
      const isCurrentTabStop = context.currentTabStopId === id3;
      const getItems = useCollection(__scopeRovingFocusGroup);
      const { onFocusableItemAdd, onFocusableItemRemove, currentTabStopId } = context;
      React16.useEffect(() => {
        if (focusable) {
          onFocusableItemAdd();
          return () => onFocusableItemRemove();
        }
      }, [focusable, onFocusableItemAdd, onFocusableItemRemove]);
      return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
        Collection.ItemSlot,
        {
          scope: __scopeRovingFocusGroup,
          id: id3,
          focusable,
          active,
          children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
            Primitive.span,
            {
              tabIndex: isCurrentTabStop ? 0 : -1,
              "data-orientation": context.orientation,
              ...itemProps,
              ref: forwardedRef,
              onMouseDown: composeEventHandlers(props.onMouseDown, (event) => {
                if (!focusable) event.preventDefault();
                else context.onItemFocus(id3);
              }),
              onFocus: composeEventHandlers(props.onFocus, () => context.onItemFocus(id3)),
              onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
                if (event.key === "Tab" && event.shiftKey) {
                  context.onItemShiftTab();
                  return;
                }
                if (event.target !== event.currentTarget) return;
                const focusIntent = getFocusIntent(event, context.orientation, context.dir);
                if (focusIntent !== void 0) {
                  if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;
                  event.preventDefault();
                  const items = getItems().filter((item) => item.focusable);
                  let candidateNodes = items.map((item) => item.ref.current);
                  if (focusIntent === "last") candidateNodes.reverse();
                  else if (focusIntent === "prev" || focusIntent === "next") {
                    if (focusIntent === "prev") candidateNodes.reverse();
                    const currentIndex = candidateNodes.indexOf(event.currentTarget);
                    candidateNodes = context.loop ? wrapArray(candidateNodes, currentIndex + 1) : candidateNodes.slice(currentIndex + 1);
                  }
                  setTimeout(() => focusFirst(candidateNodes));
                }
              }),
              children: typeof children === "function" ? children({ isCurrentTabStop, hasTabStop: currentTabStopId != null }) : children
            }
          )
        }
      );
    }
  );
  RovingFocusGroupItem.displayName = ITEM_NAME;
  var MAP_KEY_TO_FOCUS_INTENT = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last"
  };
  function getDirectionAwareKey(key, dir) {
    if (dir !== "rtl") return key;
    return key === "ArrowLeft" ? "ArrowRight" : key === "ArrowRight" ? "ArrowLeft" : key;
  }
  function getFocusIntent(event, orientation, dir) {
    const key = getDirectionAwareKey(event.key, dir);
    if (orientation === "vertical" && ["ArrowLeft", "ArrowRight"].includes(key)) return void 0;
    if (orientation === "horizontal" && ["ArrowUp", "ArrowDown"].includes(key)) return void 0;
    return MAP_KEY_TO_FOCUS_INTENT[key];
  }
  function focusFirst(candidates, preventScroll = false) {
    const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
    for (const candidate of candidates) {
      if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
      candidate.focus({ preventScroll });
      if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
    }
  }
  function wrapArray(array, startIndex) {
    return array.map((_, index) => array[(startIndex + index) % array.length]);
  }
  var Root = RovingFocusGroup;
  var Item = RovingFocusGroupItem;

  // node_modules/@radix-ui/react-presence/dist/index.mjs
  init_define_import_meta_env();
  var React24 = __toESM(require_react_shim(), 1);
  var React17 = __toESM(require_react_shim(), 1);
  function useStateMachine(initialState, machine) {
    return React17.useReducer((state, event) => {
      const nextState = machine[state][event];
      return nextState ?? state;
    }, initialState);
  }
  var Presence = (props) => {
    const { present, children } = props;
    const presence = usePresence(present);
    const child = typeof children === "function" ? children({ present: presence.isPresent }) : React24.Children.only(children);
    const ref = useComposedRefs(presence.ref, getElementRef4(child));
    const forceMount = typeof children === "function";
    return forceMount || presence.isPresent ? React24.cloneElement(child, { ref }) : null;
  };
  Presence.displayName = "Presence";
  function usePresence(present) {
    const [node, setNode] = React24.useState();
    const stylesRef = React24.useRef(null);
    const prevPresentRef = React24.useRef(present);
    const prevAnimationNameRef = React24.useRef("none");
    const initialState = present ? "mounted" : "unmounted";
    const [state, send] = useStateMachine(initialState, {
      mounted: {
        UNMOUNT: "unmounted",
        ANIMATION_OUT: "unmountSuspended"
      },
      unmountSuspended: {
        MOUNT: "mounted",
        ANIMATION_END: "unmounted"
      },
      unmounted: {
        MOUNT: "mounted"
      }
    });
    React24.useEffect(() => {
      const currentAnimationName = getAnimationName(stylesRef.current);
      prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
    }, [state]);
    useLayoutEffect2(() => {
      const styles = stylesRef.current;
      const wasPresent = prevPresentRef.current;
      const hasPresentChanged = wasPresent !== present;
      if (hasPresentChanged) {
        const prevAnimationName = prevAnimationNameRef.current;
        const currentAnimationName = getAnimationName(styles);
        if (present) {
          send("MOUNT");
        } else if (currentAnimationName === "none" || styles?.display === "none") {
          send("UNMOUNT");
        } else {
          const isAnimating = prevAnimationName !== currentAnimationName;
          if (wasPresent && isAnimating) {
            send("ANIMATION_OUT");
          } else {
            send("UNMOUNT");
          }
        }
        prevPresentRef.current = present;
      }
    }, [present, send]);
    useLayoutEffect2(() => {
      if (node) {
        let timeoutId;
        const ownerWindow = node.ownerDocument.defaultView ?? window;
        const handleAnimationEnd = (event) => {
          const currentAnimationName = getAnimationName(stylesRef.current);
          const isCurrentAnimation = currentAnimationName.includes(CSS.escape(event.animationName));
          if (event.target === node && isCurrentAnimation) {
            send("ANIMATION_END");
            if (!prevPresentRef.current) {
              const currentFillMode = node.style.animationFillMode;
              node.style.animationFillMode = "forwards";
              timeoutId = ownerWindow.setTimeout(() => {
                if (node.style.animationFillMode === "forwards") {
                  node.style.animationFillMode = currentFillMode;
                }
              });
            }
          }
        };
        const handleAnimationStart = (event) => {
          if (event.target === node) {
            prevAnimationNameRef.current = getAnimationName(stylesRef.current);
          }
        };
        node.addEventListener("animationstart", handleAnimationStart);
        node.addEventListener("animationcancel", handleAnimationEnd);
        node.addEventListener("animationend", handleAnimationEnd);
        return () => {
          ownerWindow.clearTimeout(timeoutId);
          node.removeEventListener("animationstart", handleAnimationStart);
          node.removeEventListener("animationcancel", handleAnimationEnd);
          node.removeEventListener("animationend", handleAnimationEnd);
        };
      } else {
        send("ANIMATION_END");
      }
    }, [node, send]);
    return {
      isPresent: ["mounted", "unmountSuspended"].includes(state),
      ref: React24.useCallback((node2) => {
        stylesRef.current = node2 ? getComputedStyle(node2) : null;
        setNode(node2);
      }, [])
    };
  }
  function getAnimationName(styles) {
    return styles?.animationName || "none";
  }
  function getElementRef4(element) {
    let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
      return element.ref;
    }
    getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
      return element.props.ref;
    }
    return element.props.ref || element.ref;
  }

  // node_modules/@radix-ui/react-tabs/dist/index.mjs
  var import_jsx_runtime10 = __toESM(require_react_shim(), 1);
  var TABS_NAME = "Tabs";
  var [createTabsContext, createTabsScope] = createContextScope(TABS_NAME, [
    createRovingFocusGroupScope
  ]);
  var useRovingFocusGroupScope = createRovingFocusGroupScope();
  var [TabsProvider, useTabsContext] = createTabsContext(TABS_NAME);
  var Tabs = React18.forwardRef(
    (props, forwardedRef) => {
      const {
        __scopeTabs,
        value: valueProp,
        onValueChange,
        defaultValue,
        orientation = "horizontal",
        dir,
        activationMode = "automatic",
        ...tabsProps
      } = props;
      const direction = useDirection(dir);
      const [value, setValue] = useControllableState({
        prop: valueProp,
        onChange: onValueChange,
        defaultProp: defaultValue ?? "",
        caller: TABS_NAME
      });
      return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        TabsProvider,
        {
          scope: __scopeTabs,
          baseId: useId(),
          value,
          onValueChange: setValue,
          orientation,
          dir: direction,
          activationMode,
          children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            Primitive.div,
            {
              dir: direction,
              "data-orientation": orientation,
              ...tabsProps,
              ref: forwardedRef
            }
          )
        }
      );
    }
  );
  Tabs.displayName = TABS_NAME;
  var TAB_LIST_NAME = "TabsList";
  var TabsList = React18.forwardRef(
    (props, forwardedRef) => {
      const { __scopeTabs, loop = true, ...listProps } = props;
      const context = useTabsContext(TAB_LIST_NAME, __scopeTabs);
      const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
      return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        Root,
        {
          asChild: true,
          ...rovingFocusGroupScope,
          orientation: context.orientation,
          dir: context.dir,
          loop,
          children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            Primitive.div,
            {
              role: "tablist",
              "aria-orientation": context.orientation,
              ...listProps,
              ref: forwardedRef
            }
          )
        }
      );
    }
  );
  TabsList.displayName = TAB_LIST_NAME;
  var TRIGGER_NAME = "TabsTrigger";
  var TabsTrigger = React18.forwardRef(
    (props, forwardedRef) => {
      const { __scopeTabs, value, disabled = false, ...triggerProps } = props;
      const context = useTabsContext(TRIGGER_NAME, __scopeTabs);
      const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
      const triggerId = makeTriggerId(context.baseId, value);
      const contentId = makeContentId(context.baseId, value);
      const isSelected = value === context.value;
      return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        Item,
        {
          asChild: true,
          ...rovingFocusGroupScope,
          focusable: !disabled,
          active: isSelected,
          children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            Primitive.button,
            {
              type: "button",
              role: "tab",
              "aria-selected": isSelected,
              "aria-controls": contentId,
              "data-state": isSelected ? "active" : "inactive",
              "data-disabled": disabled ? "" : void 0,
              disabled,
              id: triggerId,
              ...triggerProps,
              ref: forwardedRef,
              onMouseDown: composeEventHandlers(props.onMouseDown, (event) => {
                if (!disabled && event.button === 0 && event.ctrlKey === false) {
                  context.onValueChange(value);
                } else {
                  event.preventDefault();
                }
              }),
              onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
                if ([" ", "Enter"].includes(event.key)) context.onValueChange(value);
              }),
              onFocus: composeEventHandlers(props.onFocus, () => {
                const isAutomaticActivation = context.activationMode !== "manual";
                if (!isSelected && !disabled && isAutomaticActivation) {
                  context.onValueChange(value);
                }
              })
            }
          )
        }
      );
    }
  );
  TabsTrigger.displayName = TRIGGER_NAME;
  var CONTENT_NAME = "TabsContent";
  var TabsContent = React18.forwardRef(
    (props, forwardedRef) => {
      const { __scopeTabs, value, forceMount, children, ...contentProps } = props;
      const context = useTabsContext(CONTENT_NAME, __scopeTabs);
      const triggerId = makeTriggerId(context.baseId, value);
      const contentId = makeContentId(context.baseId, value);
      const isSelected = value === context.value;
      const isMountAnimationPreventedRef = React18.useRef(isSelected);
      React18.useEffect(() => {
        const rAF = requestAnimationFrame(() => isMountAnimationPreventedRef.current = false);
        return () => cancelAnimationFrame(rAF);
      }, []);
      return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Presence, { present: forceMount || isSelected, children: ({ present }) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        Primitive.div,
        {
          "data-state": isSelected ? "active" : "inactive",
          "data-orientation": context.orientation,
          role: "tabpanel",
          "aria-labelledby": triggerId,
          hidden: !present,
          id: contentId,
          tabIndex: 0,
          ...contentProps,
          ref: forwardedRef,
          style: {
            ...props.style,
            animationDuration: isMountAnimationPreventedRef.current ? "0s" : void 0
          },
          children: present && children
        }
      ) });
    }
  );
  TabsContent.displayName = CONTENT_NAME;
  function makeTriggerId(baseId, value) {
    return `${baseId}-trigger-${value}`;
  }
  function makeContentId(baseId, value) {
    return `${baseId}-content-${value}`;
  }
  var Root2 = Tabs;
  var List = TabsList;
  var Trigger = TabsTrigger;
  var Content = TabsContent;

  // src/components/ui/tabs.tsx
  init_utils();
  var Tabs2 = Root2;
  var TabsList2 = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React19.createElement(
    List,
    {
      ref,
      className: cn(
        "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
        className
      ),
      ...props
    }
  ));
  TabsList2.displayName = List.displayName;
  var TabsTrigger2 = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React19.createElement(
    Trigger,
    {
      ref,
      className: cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
        className
      ),
      ...props
    }
  ));
  TabsTrigger2.displayName = Trigger.displayName;
  var TabsContent2 = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React19.createElement(
    Content,
    {
      ref,
      className: cn(
        "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className
      ),
      ...props
    }
  ));
  TabsContent2.displayName = Content.displayName;

  // src/components/theme-toggle.tsx
  init_define_import_meta_env();

  // node_modules/lucide-react/dist/esm/lucide-react.mjs
  init_define_import_meta_env();

  // node_modules/lucide-react/dist/esm/createLucideIcon.mjs
  init_define_import_meta_env();
  var import_react5 = __toESM(require_react_shim(), 1);

  // node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs
  init_define_import_meta_env();
  var mergeClasses = (...classes) => classes.filter((className, index, array) => {
    return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
  }).join(" ").trim();

  // node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs
  init_define_import_meta_env();
  var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

  // node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.mjs
  init_define_import_meta_env();

  // node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs
  init_define_import_meta_env();
  var toCamelCase = (string) => string.replace(
    /^([A-Z])|[\s-_]+(\w)/g,
    (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
  );

  // node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.mjs
  var toPascalCase = (string) => {
    const camelCase = toCamelCase(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
  };

  // node_modules/lucide-react/dist/esm/Icon.mjs
  init_define_import_meta_env();
  var import_react4 = __toESM(require_react_shim(), 1);

  // node_modules/lucide-react/dist/esm/defaultAttributes.mjs
  init_define_import_meta_env();
  var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };

  // node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.mjs
  init_define_import_meta_env();
  var hasA11yProp = (props) => {
    for (const prop in props) {
      if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
        return true;
      }
    }
    return false;
  };

  // node_modules/lucide-react/dist/esm/context.mjs
  init_define_import_meta_env();
  var import_react3 = __toESM(require_react_shim(), 1);
  var LucideContext = (0, import_react3.createContext)({});
  var useLucideContext = () => (0, import_react3.useContext)(LucideContext);

  // node_modules/lucide-react/dist/esm/Icon.mjs
  var Icon = (0, import_react4.forwardRef)(
    ({ color: color2, size, strokeWidth, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref) => {
      const {
        size: contextSize = 24,
        strokeWidth: contextStrokeWidth = 2,
        absoluteStrokeWidth: contextAbsoluteStrokeWidth = false,
        color: contextColor = "currentColor",
        className: contextClass = ""
      } = useLucideContext() ?? {};
      const calculatedStrokeWidth = absoluteStrokeWidth ?? contextAbsoluteStrokeWidth ? Number(strokeWidth ?? contextStrokeWidth) * 24 / Number(size ?? contextSize) : strokeWidth ?? contextStrokeWidth;
      return (0, import_react4.createElement)(
        "svg",
        {
          ref,
          ...defaultAttributes,
          width: size ?? contextSize ?? defaultAttributes.width,
          height: size ?? contextSize ?? defaultAttributes.height,
          stroke: color2 ?? contextColor,
          strokeWidth: calculatedStrokeWidth,
          className: mergeClasses("lucide", contextClass, className),
          ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
          ...rest
        },
        [
          ...iconNode.map(([tag, attrs]) => (0, import_react4.createElement)(tag, attrs)),
          ...Array.isArray(children) ? children : [children]
        ]
      );
    }
  );

  // node_modules/lucide-react/dist/esm/createLucideIcon.mjs
  var createLucideIcon = (iconName, iconNode) => {
    const Component2 = (0, import_react5.forwardRef)(
      ({ className, ...props }, ref) => (0, import_react5.createElement)(Icon, {
        ref,
        iconNode,
        className: mergeClasses(
          `lucide-${toKebabCase(toPascalCase(iconName))}`,
          `lucide-${iconName}`,
          className
        ),
        ...props
      })
    );
    Component2.displayName = toPascalCase(iconName);
    return Component2;
  };

  // node_modules/lucide-react/dist/esm/icons/check.mjs
  init_define_import_meta_env();
  var __iconNode = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
  var Check = createLucideIcon("check", __iconNode);

  // node_modules/lucide-react/dist/esm/icons/copy.mjs
  init_define_import_meta_env();
  var __iconNode2 = [
    ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
    ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
  ];
  var Copy = createLucideIcon("copy", __iconNode2);

  // node_modules/lucide-react/dist/esm/icons/moon.mjs
  init_define_import_meta_env();
  var __iconNode3 = [
    [
      "path",
      {
        d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
        key: "kfwtm"
      }
    ]
  ];
  var Moon = createLucideIcon("moon", __iconNode3);

  // node_modules/lucide-react/dist/esm/icons/sun.mjs
  init_define_import_meta_env();
  var __iconNode4 = [
    ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
    ["path", { d: "M12 2v2", key: "tus03m" }],
    ["path", { d: "M12 20v2", key: "1lh1kg" }],
    ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
    ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
    ["path", { d: "M2 12h2", key: "1t8f8n" }],
    ["path", { d: "M20 12h2", key: "1q8mjw" }],
    ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
    ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
  ];
  var Sun = createLucideIcon("sun", __iconNode4);

  // src/components/theme-toggle.tsx
  var import_react6 = __toESM(require_react_shim());
  init_utils();
  function ThemeToggle({ className }) {
    const [light, setLight] = (0, import_react6.useState)(false);
    (0, import_react6.useEffect)(() => {
      setLight(document.documentElement.classList.contains("light"));
    }, []);
    const toggle = () => {
      const root = document.documentElement;
      const nextLight = root.classList.toggle("light");
      root.classList.toggle("dark", !nextLight);
      localStorage.setItem("itme-theme", nextLight ? "light" : "dark");
      setLight(nextLight);
    };
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        className: cn(
          "fixed right-5 top-5 z-20 flex h-[38px] w-[38px] cursor-pointer items-center justify-center rounded-[10px] border border-border bg-secondary text-muted-foreground transition-colors hover:border-[var(--gobby-skin)] hover:text-foreground",
          className
        ),
        onClick: toggle,
        "aria-label": "Toggle light / dark"
      },
      light ? /* @__PURE__ */ React.createElement(Sun, { className: "h-[17px] w-[17px]" }) : /* @__PURE__ */ React.createElement(Moon, { className: "h-[17px] w-[17px]" })
    );
  }

  // src/components/sliding-tab-trigger.tsx
  init_define_import_meta_env();

  // node_modules/motion/dist/es/react.mjs
  init_define_import_meta_env();

  // node_modules/framer-motion/dist/es/index.mjs
  init_define_import_meta_env();

  // node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs
  init_define_import_meta_env();
  var import_react7 = __toESM(require_react_shim(), 1);
  var LayoutGroupContext = (0, import_react7.createContext)({});

  // node_modules/framer-motion/dist/es/utils/use-constant.mjs
  init_define_import_meta_env();
  var import_react8 = __toESM(require_react_shim(), 1);
  function useConstant(init) {
    const ref = (0, import_react8.useRef)(null);
    if (ref.current === null) {
      ref.current = init();
    }
    return ref.current;
  }

  // node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
  init_define_import_meta_env();
  var import_react9 = __toESM(require_react_shim(), 1);

  // node_modules/framer-motion/dist/es/utils/is-browser.mjs
  init_define_import_meta_env();
  var isBrowser = typeof window !== "undefined";

  // node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
  var useIsomorphicLayoutEffect = isBrowser ? import_react9.useLayoutEffect : import_react9.useEffect;

  // node_modules/framer-motion/dist/es/context/PresenceContext.mjs
  init_define_import_meta_env();
  var import_react10 = __toESM(require_react_shim(), 1);
  var PresenceContext = /* @__PURE__ */ (0, import_react10.createContext)(null);

  // node_modules/motion-dom/dist/es/index.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/animation/AsyncMotionValueAnimation.mjs
  init_define_import_meta_env();

  // node_modules/motion-utils/dist/es/index.mjs
  init_define_import_meta_env();

  // node_modules/motion-utils/dist/es/array.mjs
  init_define_import_meta_env();
  function addUniqueItem(arr, item) {
    if (arr.indexOf(item) === -1)
      arr.push(item);
  }
  function removeItem(arr, item) {
    const index = arr.indexOf(item);
    if (index > -1)
      arr.splice(index, 1);
  }

  // node_modules/motion-utils/dist/es/clamp.mjs
  init_define_import_meta_env();
  var clamp = (min, max, v) => {
    if (v > max)
      return max;
    if (v < min)
      return min;
    return v;
  };

  // node_modules/motion-utils/dist/es/errors.mjs
  init_define_import_meta_env();

  // node_modules/motion-utils/dist/es/format-error-message.mjs
  init_define_import_meta_env();
  function formatErrorMessage(message, errorCode) {
    return errorCode ? `${message}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${errorCode}` : message;
  }

  // node_modules/motion-utils/dist/es/errors.mjs
  var warning = () => {
  };
  var invariant = () => {
  };
  if (typeof process !== "undefined" && true) {
    warning = (check, message, errorCode) => {
      if (!check && typeof console !== "undefined") {
        console.warn(formatErrorMessage(message, errorCode));
      }
    };
    invariant = (check, message, errorCode) => {
      if (!check) {
        throw new Error(formatErrorMessage(message, errorCode));
      }
    };
  }

  // node_modules/motion-utils/dist/es/global-config.mjs
  init_define_import_meta_env();
  var MotionGlobalConfig = {};

  // node_modules/motion-utils/dist/es/is-numerical-string.mjs
  init_define_import_meta_env();
  var isNumericalString = (v) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(v);

  // node_modules/motion-utils/dist/es/is-object.mjs
  init_define_import_meta_env();
  var isObject = (value) => typeof value === "object" && value !== null;

  // node_modules/motion-utils/dist/es/is-zero-value-string.mjs
  init_define_import_meta_env();
  var isZeroValueString = (v) => /^0[^.\s]+$/u.test(v);

  // node_modules/motion-utils/dist/es/memo.mjs
  init_define_import_meta_env();
  // @__NO_SIDE_EFFECTS__
  function memo(callback) {
    let result;
    return () => {
      if (result === void 0)
        result = callback();
      return result;
    };
  }

  // node_modules/motion-utils/dist/es/noop.mjs
  init_define_import_meta_env();
  var noop = /* @__NO_SIDE_EFFECTS__ */ (any) => any;

  // node_modules/motion-utils/dist/es/pipe.mjs
  init_define_import_meta_env();
  var pipe = (...transformers) => transformers.reduce((a, b) => (v) => b(a(v)));

  // node_modules/motion-utils/dist/es/progress.mjs
  init_define_import_meta_env();
  var progress = /* @__NO_SIDE_EFFECTS__ */ (from, to, value) => {
    const range = to - from;
    return range ? (value - from) / range : 1;
  };

  // node_modules/motion-utils/dist/es/subscription-manager.mjs
  init_define_import_meta_env();
  var SubscriptionManager = class {
    constructor() {
      this.subscriptions = [];
    }
    add(handler) {
      addUniqueItem(this.subscriptions, handler);
      return () => removeItem(this.subscriptions, handler);
    }
    notify(a, b, c) {
      const numSubscriptions = this.subscriptions.length;
      if (!numSubscriptions)
        return;
      if (numSubscriptions === 1) {
        this.subscriptions[0](a, b, c);
      } else {
        for (let i2 = 0; i2 < numSubscriptions; i2++) {
          const handler = this.subscriptions[i2];
          handler && handler(a, b, c);
        }
      }
    }
    getSize() {
      return this.subscriptions.length;
    }
    clear() {
      this.subscriptions.length = 0;
    }
  };

  // node_modules/motion-utils/dist/es/time-conversion.mjs
  init_define_import_meta_env();
  var secondsToMilliseconds = /* @__NO_SIDE_EFFECTS__ */ (seconds) => seconds * 1e3;
  var millisecondsToSeconds = /* @__NO_SIDE_EFFECTS__ */ (milliseconds) => milliseconds / 1e3;

  // node_modules/motion-utils/dist/es/velocity-per-second.mjs
  init_define_import_meta_env();
  var velocityPerSecond = /* @__NO_SIDE_EFFECTS__ */ (velocity, frameDuration) => frameDuration ? velocity * (1e3 / frameDuration) : 0;

  // node_modules/motion-utils/dist/es/warn-once.mjs
  init_define_import_meta_env();
  var warned = /* @__PURE__ */ new Set();
  function warnOnce(condition, message, errorCode) {
    if (condition || warned.has(message))
      return;
    console.warn(formatErrorMessage(message, errorCode));
    warned.add(message);
  }

  // node_modules/motion-utils/dist/es/easing/anticipate.mjs
  init_define_import_meta_env();

  // node_modules/motion-utils/dist/es/easing/back.mjs
  init_define_import_meta_env();

  // node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs
  init_define_import_meta_env();
  var calcBezier = (t7, a1, a2) => (((1 - 3 * a2 + 3 * a1) * t7 + (3 * a2 - 6 * a1)) * t7 + 3 * a1) * t7;
  var subdivisionPrecision = 1e-7;
  var subdivisionMaxIterations = 12;
  function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
    let currentX;
    let currentT;
    let i2 = 0;
    do {
      currentT = lowerBound + (upperBound - lowerBound) / 2;
      currentX = calcBezier(currentT, mX1, mX2) - x;
      if (currentX > 0) {
        upperBound = currentT;
      } else {
        lowerBound = currentT;
      }
    } while (Math.abs(currentX) > subdivisionPrecision && ++i2 < subdivisionMaxIterations);
    return currentT;
  }
  // @__NO_SIDE_EFFECTS__
  function cubicBezier(mX1, mY1, mX2, mY2) {
    if (mX1 === mY1 && mX2 === mY2)
      return noop;
    const getTForX = (aX) => binarySubdivide(aX, 0, 1, mX1, mX2);
    return (t7) => t7 === 0 || t7 === 1 ? t7 : calcBezier(getTForX(t7), mY1, mY2);
  }

  // node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs
  init_define_import_meta_env();
  var mirrorEasing = /* @__NO_SIDE_EFFECTS__ */ (easing) => (p) => p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;

  // node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs
  init_define_import_meta_env();
  var reverseEasing = /* @__NO_SIDE_EFFECTS__ */ (easing) => (p) => 1 - easing(1 - p);

  // node_modules/motion-utils/dist/es/easing/back.mjs
  var backOut = /* @__PURE__ */ cubicBezier(0.33, 1.53, 0.69, 0.99);
  var backIn = /* @__PURE__ */ reverseEasing(backOut);
  var backInOut = /* @__PURE__ */ mirrorEasing(backIn);

  // node_modules/motion-utils/dist/es/easing/anticipate.mjs
  var anticipate = (p) => p >= 1 ? 1 : (p *= 2) < 1 ? 0.5 * backIn(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));

  // node_modules/motion-utils/dist/es/easing/circ.mjs
  init_define_import_meta_env();
  var circIn = (p) => 1 - Math.sin(Math.acos(p));
  var circOut = reverseEasing(circIn);
  var circInOut = mirrorEasing(circIn);

  // node_modules/motion-utils/dist/es/easing/ease.mjs
  init_define_import_meta_env();
  var easeIn = /* @__PURE__ */ cubicBezier(0.42, 0, 1, 1);
  var easeOut = /* @__PURE__ */ cubicBezier(0, 0, 0.58, 1);
  var easeInOut = /* @__PURE__ */ cubicBezier(0.42, 0, 0.58, 1);

  // node_modules/motion-utils/dist/es/easing/utils/is-easing-array.mjs
  init_define_import_meta_env();
  var isEasingArray = /* @__NO_SIDE_EFFECTS__ */ (ease2) => {
    return Array.isArray(ease2) && typeof ease2[0] !== "number";
  };

  // node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs
  init_define_import_meta_env();
  var isBezierDefinition = /* @__NO_SIDE_EFFECTS__ */ (easing) => Array.isArray(easing) && typeof easing[0] === "number";

  // node_modules/motion-utils/dist/es/easing/utils/map.mjs
  init_define_import_meta_env();
  var easingLookup = {
    linear: noop,
    easeIn,
    easeInOut,
    easeOut,
    circIn,
    circInOut,
    circOut,
    backIn,
    backInOut,
    backOut,
    anticipate
  };
  var isValidEasing = (easing) => {
    return typeof easing === "string";
  };
  var easingDefinitionToFunction = (definition) => {
    if (isBezierDefinition(definition)) {
      invariant(definition.length === 4, `Cubic bezier arrays must contain four numerical values.`, "cubic-bezier-length");
      const [x1, y1, x2, y2] = definition;
      return cubicBezier(x1, y1, x2, y2);
    } else if (isValidEasing(definition)) {
      invariant(easingLookup[definition] !== void 0, `Invalid easing type '${definition}'`, "invalid-easing-type");
      return easingLookup[definition];
    }
    return definition;
  };

  // node_modules/motion-dom/dist/es/frameloop/sync-time.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/frameloop/frame.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/frameloop/batcher.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/frameloop/order.mjs
  init_define_import_meta_env();
  var stepsOrder = [
    "setup",
    // Compute
    "read",
    // Read
    "resolveKeyframes",
    // Write/Read/Write/Read
    "preUpdate",
    // Compute
    "update",
    // Compute
    "preRender",
    // Compute
    "render",
    // Write
    "postRender"
    // Compute
  ];

  // node_modules/motion-dom/dist/es/frameloop/render-step.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/stats/buffer.mjs
  init_define_import_meta_env();
  var statsBuffer = {
    value: null,
    addProjectionMetrics: null
  };

  // node_modules/motion-dom/dist/es/frameloop/render-step.mjs
  function createRenderStep(runNextFrame, stepName) {
    let thisFrame = /* @__PURE__ */ new Set();
    let nextFrame = /* @__PURE__ */ new Set();
    let isProcessing = false;
    let flushNextFrame = false;
    const toKeepAlive = /* @__PURE__ */ new WeakSet();
    let latestFrameData = {
      delta: 0,
      timestamp: 0,
      isProcessing: false
    };
    let numCalls = 0;
    function triggerCallback(callback) {
      if (toKeepAlive.has(callback)) {
        step.schedule(callback);
        runNextFrame();
      }
      numCalls++;
      callback(latestFrameData);
    }
    const step = {
      /**
       * Schedule a process to run on the next frame.
       */
      schedule: (callback, keepAlive = false, immediate = false) => {
        const addToCurrentFrame = immediate && isProcessing;
        const queue = addToCurrentFrame ? thisFrame : nextFrame;
        if (keepAlive)
          toKeepAlive.add(callback);
        queue.add(callback);
        return callback;
      },
      /**
       * Cancel the provided callback from running on the next frame.
       */
      cancel: (callback) => {
        nextFrame.delete(callback);
        toKeepAlive.delete(callback);
      },
      /**
       * Execute all schedule callbacks.
       */
      process: (frameData2) => {
        latestFrameData = frameData2;
        if (isProcessing) {
          flushNextFrame = true;
          return;
        }
        isProcessing = true;
        const prevFrame = thisFrame;
        thisFrame = nextFrame;
        nextFrame = prevFrame;
        thisFrame.forEach(triggerCallback);
        if (stepName && statsBuffer.value) {
          statsBuffer.value.frameloop[stepName].push(numCalls);
        }
        numCalls = 0;
        thisFrame.clear();
        isProcessing = false;
        if (flushNextFrame) {
          flushNextFrame = false;
          step.process(frameData2);
        }
      }
    };
    return step;
  }

  // node_modules/motion-dom/dist/es/frameloop/batcher.mjs
  var maxElapsed = 40;
  function createRenderBatcher(scheduleNextBatch, allowKeepAlive) {
    let runNextFrame = false;
    let useDefaultElapsed = true;
    const state = {
      delta: 0,
      timestamp: 0,
      isProcessing: false
    };
    const flagRunNextFrame = () => runNextFrame = true;
    const steps2 = stepsOrder.reduce((acc, key) => {
      acc[key] = createRenderStep(flagRunNextFrame, allowKeepAlive ? key : void 0);
      return acc;
    }, {});
    const { setup, read, resolveKeyframes, preUpdate, update, preRender, render, postRender } = steps2;
    const processBatch = () => {
      const useManualTiming = MotionGlobalConfig.useManualTiming;
      const timestamp = useManualTiming ? state.timestamp : performance.now();
      runNextFrame = false;
      if (!useManualTiming) {
        state.delta = useDefaultElapsed ? 1e3 / 60 : Math.max(Math.min(timestamp - state.timestamp, maxElapsed), 1);
      }
      state.timestamp = timestamp;
      state.isProcessing = true;
      setup.process(state);
      read.process(state);
      resolveKeyframes.process(state);
      preUpdate.process(state);
      update.process(state);
      preRender.process(state);
      render.process(state);
      postRender.process(state);
      state.isProcessing = false;
      if (runNextFrame && allowKeepAlive) {
        useDefaultElapsed = false;
        scheduleNextBatch(processBatch);
      }
    };
    const wake = () => {
      runNextFrame = true;
      useDefaultElapsed = true;
      if (!state.isProcessing) {
        scheduleNextBatch(processBatch);
      }
    };
    const schedule = stepsOrder.reduce((acc, key) => {
      const step = steps2[key];
      acc[key] = (process2, keepAlive = false, immediate = false) => {
        if (!runNextFrame)
          wake();
        return step.schedule(process2, keepAlive, immediate);
      };
      return acc;
    }, {});
    const cancel = (process2) => {
      for (let i2 = 0; i2 < stepsOrder.length; i2++) {
        steps2[stepsOrder[i2]].cancel(process2);
      }
    };
    return { schedule, cancel, state, steps: steps2 };
  }

  // node_modules/motion-dom/dist/es/frameloop/frame.mjs
  var { schedule: frame, cancel: cancelFrame, state: frameData, steps: frameSteps } = /* @__PURE__ */ createRenderBatcher(typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : noop, true);

  // node_modules/motion-dom/dist/es/frameloop/sync-time.mjs
  var now;
  function clearTime() {
    now = void 0;
  }
  var time = {
    now: () => {
      if (now === void 0) {
        time.set(frameData.isProcessing || MotionGlobalConfig.useManualTiming ? frameData.timestamp : performance.now());
      }
      return now;
    },
    set: (newTime) => {
      now = newTime;
      queueMicrotask(clearTime);
    }
  };

  // node_modules/motion-dom/dist/es/animation/JSAnimation.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/stats/animation-count.mjs
  init_define_import_meta_env();
  var activeAnimations = {
    layout: 0,
    mainThread: 0,
    waapi: 0
  };

  // node_modules/motion-dom/dist/es/utils/mix/index.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/utils/mix/complex.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/animation/utils/is-css-variable.mjs
  init_define_import_meta_env();
  var checkStringStartsWith = (token) => (key) => typeof key === "string" && key.startsWith(token);
  var isCSSVariableName = /* @__PURE__ */ checkStringStartsWith("--");
  var startsAsVariableToken = /* @__PURE__ */ checkStringStartsWith("var(--");
  var isCSSVariableToken = (value) => {
    const startsWithToken = startsAsVariableToken(value);
    if (!startsWithToken)
      return false;
    return singleCssVariableRegex.test(value.split("/*")[0].trim());
  };
  var singleCssVariableRegex = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
  function containsCSSVariable(value) {
    if (typeof value !== "string")
      return false;
    return value.split("/*")[0].includes("var(--");
  }

  // node_modules/motion-dom/dist/es/value/types/color/index.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/value/types/color/hex.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/value/types/color/rgba.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/value/types/numbers/index.mjs
  init_define_import_meta_env();
  var number = {
    test: (v) => typeof v === "number",
    parse: parseFloat,
    transform: (v) => v
  };
  var alpha = {
    ...number,
    transform: (v) => clamp(0, 1, v)
  };
  var scale = {
    ...number,
    default: 1
  };

  // node_modules/motion-dom/dist/es/value/types/utils/sanitize.mjs
  init_define_import_meta_env();
  var sanitize = (v) => Math.round(v * 1e5) / 1e5;

  // node_modules/motion-dom/dist/es/value/types/color/utils.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/value/types/utils/float-regex.mjs
  init_define_import_meta_env();
  var floatRegex = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

  // node_modules/motion-dom/dist/es/value/types/utils/is-nullish.mjs
  init_define_import_meta_env();
  function isNullish(v) {
    return v == null;
  }

  // node_modules/motion-dom/dist/es/value/types/utils/single-color-regex.mjs
  init_define_import_meta_env();
  var singleColorRegex = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;

  // node_modules/motion-dom/dist/es/value/types/color/utils.mjs
  var isColorString = (type, testProp) => (v) => {
    return Boolean(typeof v === "string" && singleColorRegex.test(v) && v.startsWith(type) || testProp && !isNullish(v) && Object.prototype.hasOwnProperty.call(v, testProp));
  };
  var splitColor = (aName, bName, cName) => (v) => {
    if (typeof v !== "string")
      return v;
    const [a, b, c, alpha2] = v.match(floatRegex);
    return {
      [aName]: parseFloat(a),
      [bName]: parseFloat(b),
      [cName]: parseFloat(c),
      alpha: alpha2 !== void 0 ? parseFloat(alpha2) : 1
    };
  };

  // node_modules/motion-dom/dist/es/value/types/color/rgba.mjs
  var clampRgbUnit = (v) => clamp(0, 255, v);
  var rgbUnit = {
    ...number,
    transform: (v) => Math.round(clampRgbUnit(v))
  };
  var rgba = {
    test: /* @__PURE__ */ isColorString("rgb", "red"),
    parse: /* @__PURE__ */ splitColor("red", "green", "blue"),
    transform: ({ red, green, blue, alpha: alpha$1 = 1 }) => "rgba(" + rgbUnit.transform(red) + ", " + rgbUnit.transform(green) + ", " + rgbUnit.transform(blue) + ", " + sanitize(alpha.transform(alpha$1)) + ")"
  };

  // node_modules/motion-dom/dist/es/value/types/color/hex.mjs
  function parseHex(v) {
    let r4 = "";
    let g = "";
    let b = "";
    let a = "";
    if (v.length > 5) {
      r4 = v.substring(1, 3);
      g = v.substring(3, 5);
      b = v.substring(5, 7);
      a = v.substring(7, 9);
    } else {
      r4 = v.substring(1, 2);
      g = v.substring(2, 3);
      b = v.substring(3, 4);
      a = v.substring(4, 5);
      r4 += r4;
      g += g;
      b += b;
      a += a;
    }
    return {
      red: parseInt(r4, 16),
      green: parseInt(g, 16),
      blue: parseInt(b, 16),
      alpha: a ? parseInt(a, 16) / 255 : 1
    };
  }
  var hex = {
    test: /* @__PURE__ */ isColorString("#"),
    parse: parseHex,
    transform: rgba.transform
  };

  // node_modules/motion-dom/dist/es/value/types/color/hsla.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/value/types/numbers/units.mjs
  init_define_import_meta_env();
  var createUnitType = /* @__NO_SIDE_EFFECTS__ */ (unit) => ({
    test: (v) => typeof v === "string" && v.endsWith(unit) && v.split(" ").length === 1,
    parse: parseFloat,
    transform: (v) => `${v}${unit}`
  });
  var degrees = /* @__PURE__ */ createUnitType("deg");
  var percent = /* @__PURE__ */ createUnitType("%");
  var px = /* @__PURE__ */ createUnitType("px");
  var vh = /* @__PURE__ */ createUnitType("vh");
  var vw = /* @__PURE__ */ createUnitType("vw");
  var progressPercentage = /* @__PURE__ */ (() => ({
    ...percent,
    parse: (v) => percent.parse(v) / 100,
    transform: (v) => percent.transform(v * 100)
  }))();

  // node_modules/motion-dom/dist/es/value/types/color/hsla.mjs
  var hsla = {
    test: /* @__PURE__ */ isColorString("hsl", "hue"),
    parse: /* @__PURE__ */ splitColor("hue", "saturation", "lightness"),
    transform: ({ hue, saturation, lightness, alpha: alpha$1 = 1 }) => {
      return "hsla(" + Math.round(hue) + ", " + percent.transform(sanitize(saturation)) + ", " + percent.transform(sanitize(lightness)) + ", " + sanitize(alpha.transform(alpha$1)) + ")";
    }
  };

  // node_modules/motion-dom/dist/es/value/types/color/index.mjs
  var color = {
    test: (v) => rgba.test(v) || hex.test(v) || hsla.test(v),
    parse: (v) => {
      if (rgba.test(v)) {
        return rgba.parse(v);
      } else if (hsla.test(v)) {
        return hsla.parse(v);
      } else {
        return hex.parse(v);
      }
    },
    transform: (v) => {
      return typeof v === "string" ? v : v.hasOwnProperty("red") ? rgba.transform(v) : hsla.transform(v);
    },
    getAnimatableNone: (v) => {
      const parsed = color.parse(v);
      parsed.alpha = 0;
      return color.transform(parsed);
    }
  };

  // node_modules/motion-dom/dist/es/value/types/complex/index.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/value/types/utils/color-regex.mjs
  init_define_import_meta_env();
  var colorRegex = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

  // node_modules/motion-dom/dist/es/value/types/complex/index.mjs
  function test(v) {
    return isNaN(v) && typeof v === "string" && (v.match(floatRegex)?.length || 0) + (v.match(colorRegex)?.length || 0) > 0;
  }
  var NUMBER_TOKEN = "number";
  var COLOR_TOKEN = "color";
  var VAR_TOKEN = "var";
  var VAR_FUNCTION_TOKEN = "var(";
  var SPLIT_TOKEN = "${}";
  var complexRegex = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
  function analyseComplexValue(value) {
    const originalValue = value.toString();
    const values = [];
    const indexes = {
      color: [],
      number: [],
      var: []
    };
    const types = [];
    let i2 = 0;
    const tokenised = originalValue.replace(complexRegex, (parsedValue) => {
      if (color.test(parsedValue)) {
        indexes.color.push(i2);
        types.push(COLOR_TOKEN);
        values.push(color.parse(parsedValue));
      } else if (parsedValue.startsWith(VAR_FUNCTION_TOKEN)) {
        indexes.var.push(i2);
        types.push(VAR_TOKEN);
        values.push(parsedValue);
      } else {
        indexes.number.push(i2);
        types.push(NUMBER_TOKEN);
        values.push(parseFloat(parsedValue));
      }
      ++i2;
      return SPLIT_TOKEN;
    });
    const split = tokenised.split(SPLIT_TOKEN);
    return { values, split, indexes, types };
  }
  function parseComplexValue(v) {
    return analyseComplexValue(v).values;
  }
  function buildTransformer({ split, types }) {
    const numSections = split.length;
    return (v) => {
      let output = "";
      for (let i2 = 0; i2 < numSections; i2++) {
        output += split[i2];
        if (v[i2] !== void 0) {
          const type = types[i2];
          if (type === NUMBER_TOKEN) {
            output += sanitize(v[i2]);
          } else if (type === COLOR_TOKEN) {
            output += color.transform(v[i2]);
          } else {
            output += v[i2];
          }
        }
      }
      return output;
    };
  }
  function createTransformer(source) {
    return buildTransformer(analyseComplexValue(source));
  }
  var convertNumbersToZero = (v) => typeof v === "number" ? 0 : color.test(v) ? color.getAnimatableNone(v) : v;
  var convertToZero = (value, splitBefore) => {
    if (typeof value === "number") {
      return splitBefore?.trim().endsWith("/") ? value : 0;
    }
    return convertNumbersToZero(value);
  };
  function getAnimatableNone(v) {
    const info = analyseComplexValue(v);
    const transformer = buildTransformer(info);
    return transformer(info.values.map((value, i2) => convertToZero(value, info.split[i2])));
  }
  var complex = {
    test,
    parse: parseComplexValue,
    createTransformer,
    getAnimatableNone
  };

  // node_modules/motion-dom/dist/es/utils/mix/color.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/value/types/color/hsla-to-rgba.mjs
  init_define_import_meta_env();
  function hueToRgb(p, q, t7) {
    if (t7 < 0)
      t7 += 1;
    if (t7 > 1)
      t7 -= 1;
    if (t7 < 1 / 6)
      return p + (q - p) * 6 * t7;
    if (t7 < 1 / 2)
      return q;
    if (t7 < 2 / 3)
      return p + (q - p) * (2 / 3 - t7) * 6;
    return p;
  }
  function hslaToRgba({ hue, saturation, lightness, alpha: alpha2 }) {
    hue /= 360;
    saturation /= 100;
    lightness /= 100;
    let red = 0;
    let green = 0;
    let blue = 0;
    if (!saturation) {
      red = green = blue = lightness;
    } else {
      const q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
      const p = 2 * lightness - q;
      red = hueToRgb(p, q, hue + 1 / 3);
      green = hueToRgb(p, q, hue);
      blue = hueToRgb(p, q, hue - 1 / 3);
    }
    return {
      red: Math.round(red * 255),
      green: Math.round(green * 255),
      blue: Math.round(blue * 255),
      alpha: alpha2
    };
  }

  // node_modules/motion-dom/dist/es/utils/mix/immediate.mjs
  init_define_import_meta_env();
  function mixImmediate(a, b) {
    return (p) => p > 0 ? b : a;
  }

  // node_modules/motion-dom/dist/es/utils/mix/number.mjs
  init_define_import_meta_env();
  var mixNumber = (from, to, progress2) => {
    return from + (to - from) * progress2;
  };

  // node_modules/motion-dom/dist/es/utils/mix/color.mjs
  var mixLinearColor = (from, to, v) => {
    const fromExpo = from * from;
    const expo = v * (to * to - fromExpo) + fromExpo;
    return expo < 0 ? 0 : Math.sqrt(expo);
  };
  var colorTypes = [hex, rgba, hsla];
  var getColorType = (v) => colorTypes.find((type) => type.test(v));
  function asRGBA(color2) {
    const type = getColorType(color2);
    warning(Boolean(type), `'${color2}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable");
    if (!Boolean(type))
      return false;
    let model = type.parse(color2);
    if (type === hsla) {
      model = hslaToRgba(model);
    }
    return model;
  }
  var mixColor = (from, to) => {
    const fromRGBA = asRGBA(from);
    const toRGBA = asRGBA(to);
    if (!fromRGBA || !toRGBA) {
      return mixImmediate(from, to);
    }
    const blended = { ...fromRGBA };
    return (v) => {
      blended.red = mixLinearColor(fromRGBA.red, toRGBA.red, v);
      blended.green = mixLinearColor(fromRGBA.green, toRGBA.green, v);
      blended.blue = mixLinearColor(fromRGBA.blue, toRGBA.blue, v);
      blended.alpha = mixNumber(fromRGBA.alpha, toRGBA.alpha, v);
      return rgba.transform(blended);
    };
  };

  // node_modules/motion-dom/dist/es/utils/mix/visibility.mjs
  init_define_import_meta_env();
  var invisibleValues = /* @__PURE__ */ new Set(["none", "hidden"]);
  function mixVisibility(origin, target) {
    if (invisibleValues.has(origin)) {
      return (p) => p <= 0 ? origin : target;
    } else {
      return (p) => p >= 1 ? target : origin;
    }
  }

  // node_modules/motion-dom/dist/es/utils/mix/complex.mjs
  function mixNumber2(a, b) {
    return (p) => mixNumber(a, b, p);
  }
  function getMixer(a) {
    if (typeof a === "number") {
      return mixNumber2;
    } else if (typeof a === "string") {
      return isCSSVariableToken(a) ? mixImmediate : color.test(a) ? mixColor : mixComplex;
    } else if (Array.isArray(a)) {
      return mixArray;
    } else if (typeof a === "object") {
      return color.test(a) ? mixColor : mixObject;
    }
    return mixImmediate;
  }
  function mixArray(a, b) {
    const output = [...a];
    const numValues = output.length;
    const blendValue = a.map((v, i2) => getMixer(v)(v, b[i2]));
    return (p) => {
      for (let i2 = 0; i2 < numValues; i2++) {
        output[i2] = blendValue[i2](p);
      }
      return output;
    };
  }
  function mixObject(a, b) {
    const output = { ...a, ...b };
    const blendValue = {};
    for (const key in output) {
      if (a[key] !== void 0 && b[key] !== void 0) {
        blendValue[key] = getMixer(a[key])(a[key], b[key]);
      }
    }
    return (v) => {
      for (const key in blendValue) {
        output[key] = blendValue[key](v);
      }
      return output;
    };
  }
  function matchOrder(origin, target) {
    const orderedOrigin = [];
    const pointers = { color: 0, var: 0, number: 0 };
    for (let i2 = 0; i2 < target.values.length; i2++) {
      const type = target.types[i2];
      const originIndex = origin.indexes[type][pointers[type]];
      const originValue = origin.values[originIndex] ?? 0;
      orderedOrigin[i2] = originValue;
      pointers[type]++;
    }
    return orderedOrigin;
  }
  var mixComplex = (origin, target) => {
    const template = complex.createTransformer(target);
    const originStats = analyseComplexValue(origin);
    const targetStats = analyseComplexValue(target);
    const canInterpolate = originStats.indexes.var.length === targetStats.indexes.var.length && originStats.indexes.color.length === targetStats.indexes.color.length && originStats.indexes.number.length >= targetStats.indexes.number.length;
    if (canInterpolate) {
      if (invisibleValues.has(origin) && !targetStats.values.length || invisibleValues.has(target) && !originStats.values.length) {
        return mixVisibility(origin, target);
      }
      return pipe(mixArray(matchOrder(originStats, targetStats), targetStats.values), template);
    } else {
      warning(true, `Complex values '${origin}' and '${target}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different");
      return mixImmediate(origin, target);
    }
  };

  // node_modules/motion-dom/dist/es/utils/mix/index.mjs
  function mix(from, to, p) {
    if (typeof from === "number" && typeof to === "number" && typeof p === "number") {
      return mixNumber(from, to, p);
    }
    const mixer = getMixer(from);
    return mixer(from, to);
  }

  // node_modules/motion-dom/dist/es/animation/drivers/frame.mjs
  init_define_import_meta_env();
  var frameloopDriver = (update) => {
    const passTimestamp = ({ timestamp }) => update(timestamp);
    return {
      start: (keepAlive = true) => frame.update(passTimestamp, keepAlive),
      stop: () => cancelFrame(passTimestamp),
      /**
       * If we're processing this frame we can use the
       * framelocked timestamp to keep things in sync.
       */
      now: () => frameData.isProcessing ? frameData.timestamp : time.now()
    };
  };

  // node_modules/motion-dom/dist/es/animation/generators/inertia.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/animation/generators/spring.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/animation/waapi/utils/linear.mjs
  init_define_import_meta_env();
  var generateLinearEasing = (easing, duration, resolution = 10) => {
    let points = "";
    const numPoints = Math.max(Math.round(duration / resolution), 2);
    for (let i2 = 0; i2 < numPoints; i2++) {
      points += Math.round(easing(i2 / (numPoints - 1)) * 1e4) / 1e4 + ", ";
    }
    return `linear(${points.substring(0, points.length - 2)})`;
  };

  // node_modules/motion-dom/dist/es/animation/generators/utils/calc-duration.mjs
  init_define_import_meta_env();
  var maxGeneratorDuration = 2e4;
  function calcGeneratorDuration(generator) {
    let duration = 0;
    const timeStep = 50;
    let state = generator.next(duration);
    while (!state.done && duration < maxGeneratorDuration) {
      duration += timeStep;
      state = generator.next(duration);
    }
    return duration >= maxGeneratorDuration ? Infinity : duration;
  }

  // node_modules/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs
  init_define_import_meta_env();
  function createGeneratorEasing(options, scale2 = 100, createGenerator) {
    const generator = createGenerator({ ...options, keyframes: [0, scale2] });
    const duration = Math.min(calcGeneratorDuration(generator), maxGeneratorDuration);
    return {
      type: "keyframes",
      ease: (progress2) => {
        return generator.next(duration * progress2).value / scale2;
      },
      duration: millisecondsToSeconds(duration)
    };
  }

  // node_modules/motion-dom/dist/es/animation/generators/spring.mjs
  var springDefaults = {
    // Default spring physics
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    // Default duration/bounce-based options
    duration: 800,
    // in ms
    bounce: 0.3,
    visualDuration: 0.3,
    // in seconds
    // Rest thresholds
    restSpeed: {
      granular: 0.01,
      default: 2
    },
    restDelta: {
      granular: 5e-3,
      default: 0.5
    },
    // Limits
    minDuration: 0.01,
    // in seconds
    maxDuration: 10,
    // in seconds
    minDamping: 0.05,
    maxDamping: 1
  };
  function calcAngularFreq(undampedFreq, dampingRatio) {
    return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
  }
  var rootIterations = 12;
  function approximateRoot(envelope, derivative, initialGuess) {
    let result = initialGuess;
    for (let i2 = 1; i2 < rootIterations; i2++) {
      result = result - envelope(result) / derivative(result);
    }
    return result;
  }
  var safeMin = 1e-3;
  function findSpring({ duration = springDefaults.duration, bounce = springDefaults.bounce, velocity = springDefaults.velocity, mass = springDefaults.mass }) {
    let envelope;
    let derivative;
    warning(duration <= secondsToMilliseconds(springDefaults.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
    let dampingRatio = 1 - bounce;
    dampingRatio = clamp(springDefaults.minDamping, springDefaults.maxDamping, dampingRatio);
    duration = clamp(springDefaults.minDuration, springDefaults.maxDuration, millisecondsToSeconds(duration));
    if (dampingRatio < 1) {
      envelope = (undampedFreq2) => {
        const exponentialDecay = undampedFreq2 * dampingRatio;
        const delta = exponentialDecay * duration;
        const a = exponentialDecay - velocity;
        const b = calcAngularFreq(undampedFreq2, dampingRatio);
        const c = Math.exp(-delta);
        return safeMin - a / b * c;
      };
      derivative = (undampedFreq2) => {
        const exponentialDecay = undampedFreq2 * dampingRatio;
        const delta = exponentialDecay * duration;
        const d = delta * velocity + velocity;
        const e2 = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq2, 2) * duration;
        const f = Math.exp(-delta);
        const g = calcAngularFreq(Math.pow(undampedFreq2, 2), dampingRatio);
        const factor = -envelope(undampedFreq2) + safeMin > 0 ? -1 : 1;
        return factor * ((d - e2) * f) / g;
      };
    } else {
      envelope = (undampedFreq2) => {
        const a = Math.exp(-undampedFreq2 * duration);
        const b = (undampedFreq2 - velocity) * duration + 1;
        return -safeMin + a * b;
      };
      derivative = (undampedFreq2) => {
        const a = Math.exp(-undampedFreq2 * duration);
        const b = (velocity - undampedFreq2) * (duration * duration);
        return a * b;
      };
    }
    const initialGuess = 5 / duration;
    const undampedFreq = approximateRoot(envelope, derivative, initialGuess);
    duration = secondsToMilliseconds(duration);
    if (isNaN(undampedFreq)) {
      return {
        stiffness: springDefaults.stiffness,
        damping: springDefaults.damping,
        duration
      };
    } else {
      const stiffness = Math.pow(undampedFreq, 2) * mass;
      return {
        stiffness,
        damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
        duration
      };
    }
  }
  var durationKeys = ["duration", "bounce"];
  var physicsKeys = ["stiffness", "damping", "mass"];
  function isSpringType(options, keys) {
    return keys.some((key) => options[key] !== void 0);
  }
  function getSpringOptions(options) {
    let springOptions = {
      velocity: springDefaults.velocity,
      stiffness: springDefaults.stiffness,
      damping: springDefaults.damping,
      mass: springDefaults.mass,
      isResolvedFromDuration: false,
      ...options
    };
    if (!isSpringType(options, physicsKeys) && isSpringType(options, durationKeys)) {
      springOptions.velocity = 0;
      if (options.visualDuration) {
        const visualDuration = options.visualDuration;
        const root = 2 * Math.PI / (visualDuration * 1.2);
        const stiffness = root * root;
        const damping = 2 * clamp(0.05, 1, 1 - (options.bounce || 0)) * Math.sqrt(stiffness);
        springOptions = {
          ...springOptions,
          mass: springDefaults.mass,
          stiffness,
          damping
        };
      } else {
        const derived = findSpring({ ...options, velocity: 0 });
        springOptions = {
          ...springOptions,
          ...derived,
          mass: springDefaults.mass
        };
        springOptions.isResolvedFromDuration = true;
      }
    }
    return springOptions;
  }
  function spring(optionsOrVisualDuration = springDefaults.visualDuration, bounce = springDefaults.bounce) {
    const options = typeof optionsOrVisualDuration !== "object" ? {
      visualDuration: optionsOrVisualDuration,
      keyframes: [0, 1],
      bounce
    } : optionsOrVisualDuration;
    let { restSpeed, restDelta } = options;
    const origin = options.keyframes[0];
    const target = options.keyframes[options.keyframes.length - 1];
    const state = { done: false, value: origin };
    const { stiffness, damping, mass, duration, velocity, isResolvedFromDuration } = getSpringOptions({
      ...options,
      velocity: -millisecondsToSeconds(options.velocity || 0)
    });
    const initialVelocity = velocity || 0;
    const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
    const initialDelta = target - origin;
    const undampedAngularFreq = millisecondsToSeconds(Math.sqrt(stiffness / mass));
    const isGranularScale = Math.abs(initialDelta) < 5;
    restSpeed || (restSpeed = isGranularScale ? springDefaults.restSpeed.granular : springDefaults.restSpeed.default);
    restDelta || (restDelta = isGranularScale ? springDefaults.restDelta.granular : springDefaults.restDelta.default);
    let resolveSpring;
    let resolveVelocity;
    let angularFreq;
    let A;
    let sinCoeff;
    let cosCoeff;
    if (dampingRatio < 1) {
      angularFreq = calcAngularFreq(undampedAngularFreq, dampingRatio);
      A = (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq;
      resolveSpring = (t7) => {
        const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t7);
        return target - envelope * (A * Math.sin(angularFreq * t7) + initialDelta * Math.cos(angularFreq * t7));
      };
      sinCoeff = dampingRatio * undampedAngularFreq * A + initialDelta * angularFreq;
      cosCoeff = dampingRatio * undampedAngularFreq * initialDelta - A * angularFreq;
      resolveVelocity = (t7) => {
        const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t7);
        return envelope * (sinCoeff * Math.sin(angularFreq * t7) + cosCoeff * Math.cos(angularFreq * t7));
      };
    } else if (dampingRatio === 1) {
      resolveSpring = (t7) => target - Math.exp(-undampedAngularFreq * t7) * (initialDelta + (initialVelocity + undampedAngularFreq * initialDelta) * t7);
      const C = initialVelocity + undampedAngularFreq * initialDelta;
      resolveVelocity = (t7) => Math.exp(-undampedAngularFreq * t7) * (undampedAngularFreq * C * t7 - initialVelocity);
    } else {
      const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
      resolveSpring = (t7) => {
        const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t7);
        const freqForT = Math.min(dampedAngularFreq * t7, 300);
        return target - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) * Math.sinh(freqForT) + dampedAngularFreq * initialDelta * Math.cosh(freqForT)) / dampedAngularFreq;
      };
      const P = (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / dampedAngularFreq;
      const sinhCoeff = dampingRatio * undampedAngularFreq * P - initialDelta * dampedAngularFreq;
      const coshCoeff = dampingRatio * undampedAngularFreq * initialDelta - P * dampedAngularFreq;
      resolveVelocity = (t7) => {
        const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t7);
        const freqForT = Math.min(dampedAngularFreq * t7, 300);
        return envelope * (sinhCoeff * Math.sinh(freqForT) + coshCoeff * Math.cosh(freqForT));
      };
    }
    const generator = {
      calculatedDuration: isResolvedFromDuration ? duration || null : null,
      velocity: (t7) => secondsToMilliseconds(resolveVelocity(t7)),
      next: (t7) => {
        if (!isResolvedFromDuration && dampingRatio < 1) {
          const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t7);
          const sin = Math.sin(angularFreq * t7);
          const cos = Math.cos(angularFreq * t7);
          const current2 = target - envelope * (A * sin + initialDelta * cos);
          const currentVelocity = secondsToMilliseconds(envelope * (sinCoeff * sin + cosCoeff * cos));
          state.done = Math.abs(currentVelocity) <= restSpeed && Math.abs(target - current2) <= restDelta;
          state.value = state.done ? target : current2;
          return state;
        }
        const current = resolveSpring(t7);
        if (!isResolvedFromDuration) {
          const currentVelocity = secondsToMilliseconds(resolveVelocity(t7));
          state.done = Math.abs(currentVelocity) <= restSpeed && Math.abs(target - current) <= restDelta;
        } else {
          state.done = t7 >= duration;
        }
        state.value = state.done ? target : current;
        return state;
      },
      toString: () => {
        const calculatedDuration = Math.min(calcGeneratorDuration(generator), maxGeneratorDuration);
        const easing = generateLinearEasing((progress2) => generator.next(calculatedDuration * progress2).value, calculatedDuration, 30);
        return calculatedDuration + "ms " + easing;
      },
      toTransition: () => {
      }
    };
    return generator;
  }
  spring.applyToOptions = (options) => {
    const generatorOptions = createGeneratorEasing(options, 100, spring);
    options.ease = generatorOptions.ease;
    options.duration = secondsToMilliseconds(generatorOptions.duration);
    options.type = "keyframes";
    return options;
  };

  // node_modules/motion-dom/dist/es/animation/generators/utils/velocity.mjs
  init_define_import_meta_env();
  var velocitySampleDuration = 5;
  function getGeneratorVelocity(resolveValue, t7, current) {
    const prevT = Math.max(t7 - velocitySampleDuration, 0);
    return velocityPerSecond(current - resolveValue(prevT), t7 - prevT);
  }

  // node_modules/motion-dom/dist/es/animation/generators/inertia.mjs
  function inertia({ keyframes: keyframes2, velocity = 0, power = 0.8, timeConstant = 325, bounceDamping = 10, bounceStiffness = 500, modifyTarget, min, max, restDelta = 0.5, restSpeed }) {
    const origin = keyframes2[0];
    const state = {
      done: false,
      value: origin
    };
    const isOutOfBounds = (v) => min !== void 0 && v < min || max !== void 0 && v > max;
    const nearestBoundary = (v) => {
      if (min === void 0)
        return max;
      if (max === void 0)
        return min;
      return Math.abs(min - v) < Math.abs(max - v) ? min : max;
    };
    let amplitude = power * velocity;
    const ideal = origin + amplitude;
    const target = modifyTarget === void 0 ? ideal : modifyTarget(ideal);
    if (target !== ideal)
      amplitude = target - origin;
    const calcDelta = (t7) => -amplitude * Math.exp(-t7 / timeConstant);
    const calcLatest = (t7) => target + calcDelta(t7);
    const applyFriction = (t7) => {
      const delta = calcDelta(t7);
      const latest = calcLatest(t7);
      state.done = Math.abs(delta) <= restDelta;
      state.value = state.done ? target : latest;
    };
    let timeReachedBoundary;
    let spring$1;
    const checkCatchBoundary = (t7) => {
      if (!isOutOfBounds(state.value))
        return;
      timeReachedBoundary = t7;
      spring$1 = spring({
        keyframes: [state.value, nearestBoundary(state.value)],
        velocity: getGeneratorVelocity(calcLatest, t7, state.value),
        // TODO: This should be passing * 1000
        damping: bounceDamping,
        stiffness: bounceStiffness,
        restDelta,
        restSpeed
      });
    };
    checkCatchBoundary(0);
    return {
      calculatedDuration: null,
      next: (t7) => {
        let hasUpdatedFrame = false;
        if (!spring$1 && timeReachedBoundary === void 0) {
          hasUpdatedFrame = true;
          applyFriction(t7);
          checkCatchBoundary(t7);
        }
        if (timeReachedBoundary !== void 0 && t7 >= timeReachedBoundary) {
          return spring$1.next(t7 - timeReachedBoundary);
        } else {
          !hasUpdatedFrame && applyFriction(t7);
          return state;
        }
      }
    };
  }

  // node_modules/motion-dom/dist/es/animation/generators/keyframes.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/utils/interpolate.mjs
  init_define_import_meta_env();
  function createMixers(output, ease2, customMixer) {
    const mixers = [];
    const mixerFactory = customMixer || MotionGlobalConfig.mix || mix;
    const numMixers = output.length - 1;
    for (let i2 = 0; i2 < numMixers; i2++) {
      let mixer = mixerFactory(output[i2], output[i2 + 1]);
      if (ease2) {
        const easingFunction = Array.isArray(ease2) ? ease2[i2] || noop : ease2;
        mixer = pipe(easingFunction, mixer);
      }
      mixers.push(mixer);
    }
    return mixers;
  }
  function interpolate(input, output, { clamp: isClamp = true, ease: ease2, mixer } = {}) {
    const inputLength = input.length;
    invariant(inputLength === output.length, "Both input and output ranges must be the same length", "range-length");
    if (inputLength === 1)
      return () => output[0];
    if (inputLength === 2 && output[0] === output[1])
      return () => output[1];
    const isZeroDeltaRange = input[0] === input[1];
    if (input[0] > input[inputLength - 1]) {
      input = [...input].reverse();
      output = [...output].reverse();
    }
    const mixers = createMixers(output, ease2, mixer);
    const numMixers = mixers.length;
    const interpolator = (v) => {
      if (isZeroDeltaRange && v < input[0])
        return output[0];
      let i2 = 0;
      if (numMixers > 1) {
        for (; i2 < input.length - 2; i2++) {
          if (v < input[i2 + 1])
            break;
        }
      }
      const progressInRange = progress(input[i2], input[i2 + 1], v);
      return mixers[i2](progressInRange);
    };
    return isClamp ? (v) => interpolator(clamp(input[0], input[inputLength - 1], v)) : interpolator;
  }

  // node_modules/motion-dom/dist/es/animation/keyframes/offsets/default.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/animation/keyframes/offsets/fill.mjs
  init_define_import_meta_env();
  function fillOffset(offset, remaining) {
    const min = offset[offset.length - 1];
    for (let i2 = 1; i2 <= remaining; i2++) {
      const offsetProgress = progress(0, remaining, i2);
      offset.push(mixNumber(min, 1, offsetProgress));
    }
  }

  // node_modules/motion-dom/dist/es/animation/keyframes/offsets/default.mjs
  function defaultOffset(arr) {
    const offset = [0];
    fillOffset(offset, arr.length - 1);
    return offset;
  }

  // node_modules/motion-dom/dist/es/animation/keyframes/offsets/time.mjs
  init_define_import_meta_env();
  function convertOffsetToTimes(offset, duration) {
    return offset.map((o) => o * duration);
  }

  // node_modules/motion-dom/dist/es/animation/generators/keyframes.mjs
  function defaultEasing(values, easing) {
    return values.map(() => easing || easeInOut).splice(0, values.length - 1);
  }
  function keyframes({ duration = 300, keyframes: keyframeValues, times, ease: ease2 = "easeInOut" }) {
    const easingFunctions = isEasingArray(ease2) ? ease2.map(easingDefinitionToFunction) : easingDefinitionToFunction(ease2);
    const state = {
      done: false,
      value: keyframeValues[0]
    };
    const absoluteTimes = convertOffsetToTimes(
      // Only use the provided offsets if they're the correct length
      // TODO Maybe we should warn here if there's a length mismatch
      times && times.length === keyframeValues.length ? times : defaultOffset(keyframeValues),
      duration
    );
    const mapTimeToKeyframe = interpolate(absoluteTimes, keyframeValues, {
      ease: Array.isArray(easingFunctions) ? easingFunctions : defaultEasing(keyframeValues, easingFunctions)
    });
    return {
      calculatedDuration: duration,
      next: (t7) => {
        state.value = mapTimeToKeyframe(t7);
        state.done = t7 >= duration;
        return state;
      }
    };
  }

  // node_modules/motion-dom/dist/es/animation/keyframes/get-final.mjs
  init_define_import_meta_env();
  var isNotNull = (value) => value !== null;
  function getFinalKeyframe(keyframes2, { repeat, repeatType = "loop" }, finalKeyframe, speed = 1) {
    const resolvedKeyframes = keyframes2.filter(isNotNull);
    const useFirstKeyframe = speed < 0 || repeat && repeatType !== "loop" && repeat % 2 === 1;
    const index = useFirstKeyframe ? 0 : resolvedKeyframes.length - 1;
    return !index || finalKeyframe === void 0 ? resolvedKeyframes[index] : finalKeyframe;
  }

  // node_modules/motion-dom/dist/es/animation/utils/replace-transition-type.mjs
  init_define_import_meta_env();
  var transitionTypeMap = {
    decay: inertia,
    inertia,
    tween: keyframes,
    keyframes,
    spring
  };
  function replaceTransitionType(transition) {
    if (typeof transition.type === "string") {
      transition.type = transitionTypeMap[transition.type];
    }
  }

  // node_modules/motion-dom/dist/es/animation/utils/WithPromise.mjs
  init_define_import_meta_env();
  var WithPromise = class {
    constructor() {
      this.updateFinished();
    }
    get finished() {
      return this._finished;
    }
    updateFinished() {
      this._finished = new Promise((resolve) => {
        this.resolve = resolve;
      });
    }
    notifyFinished() {
      this.resolve();
    }
    /**
     * Allows the animation to be awaited.
     *
     * @deprecated Use `finished` instead.
     */
    then(onResolve, onReject) {
      return this.finished.then(onResolve, onReject);
    }
  };

  // node_modules/motion-dom/dist/es/animation/JSAnimation.mjs
  var percentToProgress = (percent2) => percent2 / 100;
  var JSAnimation = class extends WithPromise {
    constructor(options) {
      super();
      this.state = "idle";
      this.startTime = null;
      this.isStopped = false;
      this.currentTime = 0;
      this.holdTime = null;
      this.playbackSpeed = 1;
      this.delayState = {
        done: false,
        value: void 0
      };
      this.stop = () => {
        const { motionValue: motionValue2 } = this.options;
        if (motionValue2 && motionValue2.updatedAt !== time.now()) {
          this.tick(time.now());
        }
        this.isStopped = true;
        if (this.state === "idle")
          return;
        this.teardown();
        this.options.onStop?.();
      };
      activeAnimations.mainThread++;
      this.options = options;
      this.initAnimation();
      this.play();
      if (options.autoplay === false)
        this.pause();
    }
    initAnimation() {
      const { options } = this;
      replaceTransitionType(options);
      const { type = keyframes, repeat = 0, repeatDelay = 0, repeatType, velocity = 0 } = options;
      let { keyframes: keyframes$1 } = options;
      const generatorFactory = type || keyframes;
      if (generatorFactory !== keyframes) {
        invariant(keyframes$1.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${keyframes$1}`, "spring-two-frames");
      }
      if (generatorFactory !== keyframes && typeof keyframes$1[0] !== "number") {
        this.mixKeyframes = pipe(percentToProgress, mix(keyframes$1[0], keyframes$1[1]));
        keyframes$1 = [0, 100];
      }
      const generator = generatorFactory({ ...options, keyframes: keyframes$1 });
      if (repeatType === "mirror") {
        this.mirroredGenerator = generatorFactory({
          ...options,
          keyframes: [...keyframes$1].reverse(),
          velocity: -velocity
        });
      }
      if (generator.calculatedDuration === null) {
        generator.calculatedDuration = calcGeneratorDuration(generator);
      }
      const { calculatedDuration } = generator;
      this.calculatedDuration = calculatedDuration;
      this.resolvedDuration = calculatedDuration + repeatDelay;
      this.totalDuration = this.resolvedDuration * (repeat + 1) - repeatDelay;
      this.generator = generator;
    }
    updateTime(timestamp) {
      const animationTime = Math.round(timestamp - this.startTime) * this.playbackSpeed;
      if (this.holdTime !== null) {
        this.currentTime = this.holdTime;
      } else {
        this.currentTime = animationTime;
      }
    }
    tick(timestamp, sample = false) {
      const { generator, totalDuration, mixKeyframes, mirroredGenerator, resolvedDuration, calculatedDuration } = this;
      if (this.startTime === null)
        return generator.next(0);
      const { delay: delay2 = 0, keyframes: keyframes2, repeat, repeatType, repeatDelay, type, onUpdate, finalKeyframe } = this.options;
      if (this.speed > 0) {
        this.startTime = Math.min(this.startTime, timestamp);
      } else if (this.speed < 0) {
        this.startTime = Math.min(timestamp - totalDuration / this.speed, this.startTime);
      }
      if (sample) {
        this.currentTime = timestamp;
      } else {
        this.updateTime(timestamp);
      }
      const timeWithoutDelay = this.currentTime - delay2 * (this.playbackSpeed >= 0 ? 1 : -1);
      const isInDelayPhase = this.playbackSpeed >= 0 ? timeWithoutDelay < 0 : timeWithoutDelay > totalDuration;
      this.currentTime = Math.max(timeWithoutDelay, 0);
      if (this.state === "finished" && this.holdTime === null) {
        this.currentTime = totalDuration;
      }
      let elapsed = this.currentTime;
      let frameGenerator = generator;
      if (repeat) {
        const progress2 = Math.min(this.currentTime, totalDuration) / resolvedDuration;
        let currentIteration = Math.floor(progress2);
        let iterationProgress = progress2 % 1;
        if (!iterationProgress && progress2 >= 1) {
          iterationProgress = 1;
        }
        iterationProgress === 1 && currentIteration--;
        currentIteration = Math.min(currentIteration, repeat + 1);
        const isOddIteration = Boolean(currentIteration % 2);
        if (isOddIteration) {
          if (repeatType === "reverse") {
            iterationProgress = 1 - iterationProgress;
            if (repeatDelay) {
              iterationProgress -= repeatDelay / resolvedDuration;
            }
          } else if (repeatType === "mirror") {
            frameGenerator = mirroredGenerator;
          }
        }
        elapsed = clamp(0, 1, iterationProgress) * resolvedDuration;
      }
      let state;
      if (isInDelayPhase) {
        this.delayState.value = keyframes2[0];
        state = this.delayState;
      } else {
        state = frameGenerator.next(elapsed);
      }
      if (mixKeyframes && !isInDelayPhase) {
        state.value = mixKeyframes(state.value);
      }
      let { done } = state;
      if (!isInDelayPhase && calculatedDuration !== null) {
        done = this.playbackSpeed >= 0 ? this.currentTime >= totalDuration : this.currentTime <= 0;
      }
      const isAnimationFinished = this.holdTime === null && (this.state === "finished" || this.state === "running" && done);
      if (isAnimationFinished && type !== inertia) {
        state.value = getFinalKeyframe(keyframes2, this.options, finalKeyframe, this.speed);
      }
      if (onUpdate) {
        onUpdate(state.value);
      }
      if (isAnimationFinished) {
        this.finish();
      }
      return state;
    }
    /**
     * Allows the returned animation to be awaited or promise-chained. Currently
     * resolves when the animation finishes at all but in a future update could/should
     * reject if its cancels.
     */
    then(resolve, reject) {
      return this.finished.then(resolve, reject);
    }
    get duration() {
      return millisecondsToSeconds(this.calculatedDuration);
    }
    get iterationDuration() {
      const { delay: delay2 = 0 } = this.options || {};
      return this.duration + millisecondsToSeconds(delay2);
    }
    get time() {
      return millisecondsToSeconds(this.currentTime);
    }
    set time(newTime) {
      newTime = secondsToMilliseconds(newTime);
      this.currentTime = newTime;
      if (this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0) {
        this.holdTime = newTime;
      } else if (this.driver) {
        this.startTime = this.driver.now() - newTime / this.playbackSpeed;
      }
      if (this.driver) {
        this.driver.start(false);
      } else {
        this.startTime = 0;
        this.state = "paused";
        this.holdTime = newTime;
        this.tick(newTime);
      }
    }
    /**
     * Returns the generator's velocity at the current time in units/second.
     * Uses the analytical derivative when available (springs), avoiding
     * the MotionValue's frame-dependent velocity estimation.
     */
    getGeneratorVelocity() {
      const t7 = this.currentTime;
      if (t7 <= 0)
        return this.options.velocity || 0;
      if (this.generator.velocity) {
        return this.generator.velocity(t7);
      }
      const current = this.generator.next(t7).value;
      return getGeneratorVelocity((s) => this.generator.next(s).value, t7, current);
    }
    get speed() {
      return this.playbackSpeed;
    }
    set speed(newSpeed) {
      const hasChanged = this.playbackSpeed !== newSpeed;
      if (hasChanged && this.driver) {
        this.updateTime(time.now());
      }
      this.playbackSpeed = newSpeed;
      if (hasChanged && this.driver) {
        this.time = millisecondsToSeconds(this.currentTime);
      }
    }
    play() {
      if (this.isStopped)
        return;
      const { driver = frameloopDriver, startTime } = this.options;
      if (!this.driver) {
        this.driver = driver((timestamp) => this.tick(timestamp));
      }
      this.options.onPlay?.();
      const now2 = this.driver.now();
      if (this.state === "finished") {
        this.updateFinished();
        this.startTime = now2;
      } else if (this.holdTime !== null) {
        this.startTime = now2 - this.holdTime;
      } else if (!this.startTime) {
        this.startTime = startTime ?? now2;
      }
      if (this.state === "finished" && this.speed < 0) {
        this.startTime += this.calculatedDuration;
      }
      this.holdTime = null;
      this.state = "running";
      this.driver.start();
    }
    pause() {
      this.state = "paused";
      this.updateTime(time.now());
      this.holdTime = this.currentTime;
    }
    complete() {
      if (this.state !== "running") {
        this.play();
      }
      this.state = "finished";
      this.holdTime = null;
    }
    finish() {
      this.notifyFinished();
      this.teardown();
      this.state = "finished";
      this.options.onComplete?.();
    }
    cancel() {
      this.holdTime = null;
      this.startTime = 0;
      this.tick(0);
      this.teardown();
      this.options.onCancel?.();
    }
    teardown() {
      this.state = "idle";
      this.stopDriver();
      this.startTime = this.holdTime = null;
      activeAnimations.mainThread--;
    }
    stopDriver() {
      if (!this.driver)
        return;
      this.driver.stop();
      this.driver = void 0;
    }
    sample(sampleTime) {
      this.startTime = 0;
      return this.tick(sampleTime, true);
    }
    attachTimeline(timeline2) {
      if (this.options.allowFlatten) {
        this.options.type = "keyframes";
        this.options.ease = "linear";
        this.initAnimation();
      }
      this.driver?.stop();
      return timeline2.observe(this);
    }
  };

  // node_modules/motion-dom/dist/es/animation/keyframes/KeyframesResolver.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/animation/keyframes/utils/fill-wildcards.mjs
  init_define_import_meta_env();
  function fillWildcards(keyframes2) {
    for (let i2 = 1; i2 < keyframes2.length; i2++) {
      keyframes2[i2] ?? (keyframes2[i2] = keyframes2[i2 - 1]);
    }
  }

  // node_modules/motion-dom/dist/es/animation/keyframes/utils/unit-conversion.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/render/dom/parse-transform.mjs
  init_define_import_meta_env();
  var radToDeg = (rad) => rad * 180 / Math.PI;
  var rotate = (v) => {
    const angle = radToDeg(Math.atan2(v[1], v[0]));
    return rebaseAngle(angle);
  };
  var matrix2dParsers = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (v) => (Math.abs(v[0]) + Math.abs(v[3])) / 2,
    rotate,
    rotateZ: rotate,
    skewX: (v) => radToDeg(Math.atan(v[1])),
    skewY: (v) => radToDeg(Math.atan(v[2])),
    skew: (v) => (Math.abs(v[1]) + Math.abs(v[2])) / 2
  };
  var rebaseAngle = (angle) => {
    angle = angle % 360;
    if (angle < 0)
      angle += 360;
    return angle;
  };
  var rotateZ = rotate;
  var scaleX = (v) => Math.sqrt(v[0] * v[0] + v[1] * v[1]);
  var scaleY = (v) => Math.sqrt(v[4] * v[4] + v[5] * v[5]);
  var matrix3dParsers = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX,
    scaleY,
    scale: (v) => (scaleX(v) + scaleY(v)) / 2,
    rotateX: (v) => rebaseAngle(radToDeg(Math.atan2(v[6], v[5]))),
    rotateY: (v) => rebaseAngle(radToDeg(Math.atan2(-v[2], v[0]))),
    rotateZ,
    rotate: rotateZ,
    skewX: (v) => radToDeg(Math.atan(v[4])),
    skewY: (v) => radToDeg(Math.atan(v[1])),
    skew: (v) => (Math.abs(v[1]) + Math.abs(v[4])) / 2
  };
  function defaultTransformValue(name) {
    return name.includes("scale") ? 1 : 0;
  }
  function parseValueFromTransform(transform, name) {
    if (!transform || transform === "none") {
      return defaultTransformValue(name);
    }
    const matrix3dMatch = transform.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let parsers;
    let match;
    if (matrix3dMatch) {
      parsers = matrix3dParsers;
      match = matrix3dMatch;
    } else {
      const matrix2dMatch = transform.match(/^matrix\(([-\d.e\s,]+)\)$/u);
      parsers = matrix2dParsers;
      match = matrix2dMatch;
    }
    if (!match) {
      return defaultTransformValue(name);
    }
    const valueParser = parsers[name];
    const values = match[1].split(",").map(convertTransformToNumber);
    return typeof valueParser === "function" ? valueParser(values) : values[valueParser];
  }
  var readTransformValue = (instance, name) => {
    const { transform = "none" } = getComputedStyle(instance);
    return parseValueFromTransform(transform, name);
  };
  function convertTransformToNumber(value) {
    return parseFloat(value.trim());
  }

  // node_modules/motion-dom/dist/es/render/utils/keys-transform.mjs
  init_define_import_meta_env();
  var transformPropOrder = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY"
  ];
  var transformProps = /* @__PURE__ */ (() => /* @__PURE__ */ new Set([...transformPropOrder, "pathRotation"]))();

  // node_modules/motion-dom/dist/es/animation/keyframes/utils/unit-conversion.mjs
  var isNumOrPxType = (v) => v === number || v === px;
  var transformKeys = /* @__PURE__ */ new Set(["x", "y", "z"]);
  var nonTranslationalTransformKeys = transformPropOrder.filter((key) => !transformKeys.has(key));
  function removeNonTranslationalTransform(visualElement) {
    const removedTransforms = [];
    nonTranslationalTransformKeys.forEach((key) => {
      const value = visualElement.getValue(key);
      if (value !== void 0) {
        removedTransforms.push([key, value.get()]);
        value.set(key.startsWith("scale") ? 1 : 0);
      }
    });
    return removedTransforms;
  }
  var positionalValues = {
    // Dimensions
    width: ({ x }, { paddingLeft = "0", paddingRight = "0", boxSizing }) => {
      const width = x.max - x.min;
      return boxSizing === "border-box" ? width : width - parseFloat(paddingLeft) - parseFloat(paddingRight);
    },
    height: ({ y }, { paddingTop = "0", paddingBottom = "0", boxSizing }) => {
      const height = y.max - y.min;
      return boxSizing === "border-box" ? height : height - parseFloat(paddingTop) - parseFloat(paddingBottom);
    },
    top: (_bbox, { top }) => parseFloat(top),
    left: (_bbox, { left }) => parseFloat(left),
    bottom: ({ y }, { top }) => parseFloat(top) + (y.max - y.min),
    right: ({ x }, { left }) => parseFloat(left) + (x.max - x.min),
    // Transform
    x: (_bbox, { transform }) => parseValueFromTransform(transform, "x"),
    y: (_bbox, { transform }) => parseValueFromTransform(transform, "y")
  };
  positionalValues.translateX = positionalValues.x;
  positionalValues.translateY = positionalValues.y;

  // node_modules/motion-dom/dist/es/animation/keyframes/KeyframesResolver.mjs
  var toResolve = /* @__PURE__ */ new Set();
  var isScheduled = false;
  var anyNeedsMeasurement = false;
  var isForced = false;
  function measureAllKeyframes() {
    if (anyNeedsMeasurement) {
      const resolversToMeasure = Array.from(toResolve).filter((resolver) => resolver.needsMeasurement);
      const elementsToMeasure = new Set(resolversToMeasure.map((resolver) => resolver.element));
      const transformsToRestore = /* @__PURE__ */ new Map();
      elementsToMeasure.forEach((element) => {
        const removedTransforms = removeNonTranslationalTransform(element);
        if (!removedTransforms.length)
          return;
        transformsToRestore.set(element, removedTransforms);
        element.render();
      });
      resolversToMeasure.forEach((resolver) => resolver.measureInitialState());
      elementsToMeasure.forEach((element) => {
        element.render();
        const restore = transformsToRestore.get(element);
        if (restore) {
          restore.forEach(([key, value]) => {
            element.getValue(key)?.set(value);
          });
        }
      });
      resolversToMeasure.forEach((resolver) => resolver.measureEndState());
      resolversToMeasure.forEach((resolver) => {
        if (resolver.suspendedScrollY !== void 0) {
          window.scrollTo(0, resolver.suspendedScrollY);
        }
      });
    }
    anyNeedsMeasurement = false;
    isScheduled = false;
    toResolve.forEach((resolver) => resolver.complete(isForced));
    toResolve.clear();
  }
  function readAllKeyframes() {
    toResolve.forEach((resolver) => {
      resolver.readKeyframes();
      if (resolver.needsMeasurement) {
        anyNeedsMeasurement = true;
      }
    });
  }
  function flushKeyframeResolvers() {
    isForced = true;
    readAllKeyframes();
    measureAllKeyframes();
    isForced = false;
  }
  var KeyframeResolver = class {
    constructor(unresolvedKeyframes, onComplete, name, motionValue2, element, isAsync = false) {
      this.state = "pending";
      this.isAsync = false;
      this.needsMeasurement = false;
      this.unresolvedKeyframes = [...unresolvedKeyframes];
      this.onComplete = onComplete;
      this.name = name;
      this.motionValue = motionValue2;
      this.element = element;
      this.isAsync = isAsync;
    }
    scheduleResolve() {
      this.state = "scheduled";
      if (this.isAsync) {
        toResolve.add(this);
        if (!isScheduled) {
          isScheduled = true;
          frame.read(readAllKeyframes);
          frame.resolveKeyframes(measureAllKeyframes);
        }
      } else {
        this.readKeyframes();
        this.complete();
      }
    }
    readKeyframes() {
      const { unresolvedKeyframes, name, element, motionValue: motionValue2 } = this;
      if (unresolvedKeyframes[0] === null) {
        const currentValue = motionValue2?.get();
        const finalKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
        if (currentValue !== void 0) {
          unresolvedKeyframes[0] = currentValue;
        } else if (element && name) {
          const valueAsRead = element.readValue(name, finalKeyframe);
          if (valueAsRead !== void 0 && valueAsRead !== null) {
            unresolvedKeyframes[0] = valueAsRead;
          }
        }
        if (unresolvedKeyframes[0] === void 0) {
          unresolvedKeyframes[0] = finalKeyframe;
        }
        if (motionValue2 && currentValue === void 0) {
          motionValue2.set(unresolvedKeyframes[0]);
        }
      }
      fillWildcards(unresolvedKeyframes);
    }
    setFinalKeyframe() {
    }
    measureInitialState() {
    }
    renderEndStyles() {
    }
    measureEndState() {
    }
    complete(isForcedComplete = false) {
      this.state = "complete";
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, isForcedComplete);
      toResolve.delete(this);
    }
    cancel() {
      if (this.state === "scheduled") {
        toResolve.delete(this);
        this.state = "pending";
      }
    }
    resume() {
      if (this.state === "pending")
        this.scheduleResolve();
    }
  };

  // node_modules/motion-dom/dist/es/animation/NativeAnimationExtended.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/render/dom/style-set.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/render/dom/is-css-var.mjs
  init_define_import_meta_env();
  var isCSSVar = (name) => name.startsWith("--");

  // node_modules/motion-dom/dist/es/render/dom/style-set.mjs
  function setStyle(element, name, value) {
    isCSSVar(name) ? element.style.setProperty(name, value) : element.style[name] = value;
  }

  // node_modules/motion-dom/dist/es/animation/NativeAnimation.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/utils/supports/memo.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/utils/supports/flags.mjs
  init_define_import_meta_env();
  var supportsFlags = {};

  // node_modules/motion-dom/dist/es/utils/supports/memo.mjs
  function memoSupports(callback, supportsFlag) {
    const memoized = memo(callback);
    return () => supportsFlags[supportsFlag] ?? memoized();
  }

  // node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs
  var supportsScrollTimeline = /* @__PURE__ */ memoSupports(() => window.ScrollTimeline !== void 0, "scrollTimeline");

  // node_modules/motion-dom/dist/es/animation/waapi/start-waapi-animation.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/animation/waapi/easing/map-easing.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/utils/supports/linear-easing.mjs
  init_define_import_meta_env();
  var supportsLinearEasing = /* @__PURE__ */ memoSupports(() => {
    try {
      document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch (e2) {
      return false;
    }
    return true;
  }, "linearEasing");

  // node_modules/motion-dom/dist/es/animation/waapi/easing/cubic-bezier.mjs
  init_define_import_meta_env();
  var cubicBezierAsString = ([a, b, c, d]) => `cubic-bezier(${a}, ${b}, ${c}, ${d})`;

  // node_modules/motion-dom/dist/es/animation/waapi/easing/supported.mjs
  init_define_import_meta_env();
  var supportedWaapiEasing = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: /* @__PURE__ */ cubicBezierAsString([0, 0.65, 0.55, 1]),
    circOut: /* @__PURE__ */ cubicBezierAsString([0.55, 0, 1, 0.45]),
    backIn: /* @__PURE__ */ cubicBezierAsString([0.31, 0.01, 0.66, -0.59]),
    backOut: /* @__PURE__ */ cubicBezierAsString([0.33, 1.53, 0.69, 0.99])
  };

  // node_modules/motion-dom/dist/es/animation/waapi/easing/map-easing.mjs
  function mapEasingToNativeEasing(easing, duration) {
    if (!easing) {
      return void 0;
    } else if (typeof easing === "function") {
      return supportsLinearEasing() ? generateLinearEasing(easing, duration) : "ease-out";
    } else if (isBezierDefinition(easing)) {
      return cubicBezierAsString(easing);
    } else if (Array.isArray(easing)) {
      return easing.map((segmentEasing) => mapEasingToNativeEasing(segmentEasing, duration) || supportedWaapiEasing.easeOut);
    } else {
      return supportedWaapiEasing[easing];
    }
  }

  // node_modules/motion-dom/dist/es/animation/waapi/start-waapi-animation.mjs
  function startWaapiAnimation(element, valueName, keyframes2, { delay: delay2 = 0, duration = 300, repeat = 0, repeatType = "loop", ease: ease2 = "easeOut", times } = {}, pseudoElement = void 0) {
    const keyframeOptions = {
      [valueName]: keyframes2
    };
    if (times)
      keyframeOptions.offset = times;
    const easing = mapEasingToNativeEasing(ease2, duration);
    if (Array.isArray(easing))
      keyframeOptions.easing = easing;
    if (statsBuffer.value) {
      activeAnimations.waapi++;
    }
    const options = {
      delay: delay2,
      duration,
      easing: !Array.isArray(easing) ? easing : "linear",
      fill: "both",
      iterations: repeat + 1,
      direction: repeatType === "reverse" ? "alternate" : "normal"
    };
    if (pseudoElement)
      options.pseudoElement = pseudoElement;
    const animation = element.animate(keyframeOptions, options);
    if (statsBuffer.value) {
      animation.finished.finally(() => {
        activeAnimations.waapi--;
      });
    }
    return animation;
  }

  // node_modules/motion-dom/dist/es/animation/waapi/utils/apply-generator.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/animation/generators/utils/is-generator.mjs
  init_define_import_meta_env();
  function isGenerator(type) {
    return typeof type === "function" && "applyToOptions" in type;
  }

  // node_modules/motion-dom/dist/es/animation/waapi/utils/apply-generator.mjs
  function applyGeneratorOptions({ type, ...options }) {
    if (isGenerator(type) && supportsLinearEasing()) {
      return type.applyToOptions(options);
    } else {
      options.duration ?? (options.duration = 300);
      options.ease ?? (options.ease = "easeOut");
    }
    return options;
  }

  // node_modules/motion-dom/dist/es/animation/NativeAnimation.mjs
  var NativeAnimation = class extends WithPromise {
    constructor(options) {
      super();
      this.finishedTime = null;
      this.isStopped = false;
      this.manualStartTime = null;
      if (!options)
        return;
      const { element, name, keyframes: keyframes2, pseudoElement, allowFlatten = false, finalKeyframe, onComplete } = options;
      this.isPseudoElement = Boolean(pseudoElement);
      this.allowFlatten = allowFlatten;
      this.options = options;
      invariant(typeof options.type !== "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
      const transition = applyGeneratorOptions(options);
      this.animation = startWaapiAnimation(element, name, keyframes2, transition, pseudoElement);
      if (transition.autoplay === false) {
        this.animation.pause();
      }
      this.animation.onfinish = () => {
        this.finishedTime = this.time;
        if (!pseudoElement) {
          const keyframe = getFinalKeyframe(keyframes2, this.options, finalKeyframe, this.speed);
          if (this.updateMotionValue) {
            this.updateMotionValue(keyframe);
          }
          setStyle(element, name, keyframe);
          this.animation.cancel();
        }
        onComplete?.();
        this.notifyFinished();
      };
    }
    play() {
      if (this.isStopped)
        return;
      this.manualStartTime = null;
      this.animation.play();
      if (this.state === "finished") {
        this.updateFinished();
      }
    }
    pause() {
      this.animation.pause();
    }
    complete() {
      this.animation.finish?.();
    }
    cancel() {
      try {
        this.animation.cancel();
      } catch (e2) {
      }
    }
    stop() {
      if (this.isStopped)
        return;
      this.isStopped = true;
      const { state } = this;
      if (state === "idle" || state === "finished") {
        return;
      }
      if (this.updateMotionValue) {
        this.updateMotionValue();
      } else {
        this.commitStyles();
      }
      if (!this.isPseudoElement)
        this.cancel();
    }
    /**
     * WAAPI doesn't natively have any interruption capabilities.
     *
     * In this method, we commit styles back to the DOM before cancelling
     * the animation.
     *
     * This is designed to be overridden by NativeAnimationExtended, which
     * will create a renderless JS animation and sample it twice to calculate
     * its current value, "previous" value, and therefore allow
     * Motion to also correctly calculate velocity for any subsequent animation
     * while deferring the commit until the next animation frame.
     */
    commitStyles() {
      const element = this.options?.element;
      if (!this.isPseudoElement && element?.isConnected) {
        this.animation.commitStyles?.();
      }
    }
    get duration() {
      const duration = this.animation.effect?.getComputedTiming?.().duration || 0;
      return millisecondsToSeconds(Number(duration));
    }
    get iterationDuration() {
      const { delay: delay2 = 0 } = this.options || {};
      return this.duration + millisecondsToSeconds(delay2);
    }
    get time() {
      return millisecondsToSeconds(Number(this.animation.currentTime) || 0);
    }
    set time(newTime) {
      const wasFinished = this.finishedTime !== null;
      this.manualStartTime = null;
      this.finishedTime = null;
      this.animation.currentTime = secondsToMilliseconds(newTime);
      if (wasFinished) {
        this.animation.pause();
      }
    }
    /**
     * The playback speed of the animation.
     * 1 = normal speed, 2 = double speed, 0.5 = half speed.
     */
    get speed() {
      return this.animation.playbackRate;
    }
    set speed(newSpeed) {
      if (newSpeed < 0)
        this.finishedTime = null;
      this.animation.playbackRate = newSpeed;
    }
    get state() {
      return this.finishedTime !== null ? "finished" : this.animation.playState;
    }
    get startTime() {
      return this.manualStartTime ?? Number(this.animation.startTime);
    }
    set startTime(newStartTime) {
      this.manualStartTime = this.animation.startTime = newStartTime;
    }
    /**
     * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
     */
    attachTimeline({ timeline: timeline2, rangeStart, rangeEnd, observe }) {
      if (this.allowFlatten) {
        this.animation.effect?.updateTiming({ easing: "linear" });
      }
      this.animation.onfinish = null;
      if (timeline2 && supportsScrollTimeline()) {
        this.animation.timeline = timeline2;
        if (rangeStart)
          this.animation.rangeStart = rangeStart;
        if (rangeEnd)
          this.animation.rangeEnd = rangeEnd;
        return noop;
      } else {
        return observe(this);
      }
    }
  };

  // node_modules/motion-dom/dist/es/animation/waapi/utils/unsupported-easing.mjs
  init_define_import_meta_env();
  var unsupportedEasingFunctions = {
    anticipate,
    backInOut,
    circInOut
  };
  function isUnsupportedEase(key) {
    return key in unsupportedEasingFunctions;
  }
  function replaceStringEasing(transition) {
    if (typeof transition.ease === "string" && isUnsupportedEase(transition.ease)) {
      transition.ease = unsupportedEasingFunctions[transition.ease];
    }
  }

  // node_modules/motion-dom/dist/es/animation/NativeAnimationExtended.mjs
  var sampleDelta = 10;
  var NativeAnimationExtended = class extends NativeAnimation {
    constructor(options) {
      replaceStringEasing(options);
      replaceTransitionType(options);
      super(options);
      if (options.startTime !== void 0 && options.autoplay !== false) {
        this.startTime = options.startTime;
      }
      this.options = options;
    }
    /**
     * WAAPI doesn't natively have any interruption capabilities.
     *
     * Rather than read committed styles back out of the DOM, we can
     * create a renderless JS animation and sample it twice to calculate
     * its current value, "previous" value, and therefore allow
     * Motion to calculate velocity for any subsequent animation.
     */
    updateMotionValue(value) {
      const { motionValue: motionValue2, onUpdate, onComplete, element, ...options } = this.options;
      if (!motionValue2)
        return;
      if (value !== void 0) {
        motionValue2.set(value);
        return;
      }
      const sampleAnimation = new JSAnimation({
        ...options,
        autoplay: false
      });
      const sampleTime = Math.max(sampleDelta, time.now() - this.startTime);
      const delta = clamp(0, sampleDelta, sampleTime - sampleDelta);
      const current = sampleAnimation.sample(sampleTime).value;
      const { name } = this.options;
      if (element && name)
        setStyle(element, name, current);
      motionValue2.setWithVelocity(sampleAnimation.sample(Math.max(0, sampleTime - delta)).value, current, delta);
      sampleAnimation.stop();
    }
  };

  // node_modules/motion-dom/dist/es/animation/utils/can-animate.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/animation/utils/is-animatable.mjs
  init_define_import_meta_env();
  var isAnimatable = (value, name) => {
    if (name === "zIndex")
      return false;
    if (typeof value === "number" || Array.isArray(value))
      return true;
    if (typeof value === "string" && // It's animatable if we have a string
    (complex.test(value) || value === "0") && // And it contains numbers and/or colors
    !value.startsWith("url(")) {
      return true;
    }
    return false;
  };

  // node_modules/motion-dom/dist/es/animation/utils/can-animate.mjs
  function hasKeyframesChanged(keyframes2) {
    const current = keyframes2[0];
    if (keyframes2.length === 1)
      return true;
    for (let i2 = 0; i2 < keyframes2.length; i2++) {
      if (keyframes2[i2] !== current)
        return true;
    }
  }
  function canAnimate(keyframes2, name, type, velocity) {
    const originKeyframe = keyframes2[0];
    if (originKeyframe === null) {
      return false;
    }
    if (name === "display" || name === "visibility")
      return true;
    const targetKeyframe = keyframes2[keyframes2.length - 1];
    const isOriginAnimatable = isAnimatable(originKeyframe, name);
    const isTargetAnimatable = isAnimatable(targetKeyframe, name);
    warning(isOriginAnimatable === isTargetAnimatable, `You are trying to animate ${name} from "${originKeyframe}" to "${targetKeyframe}". "${isOriginAnimatable ? targetKeyframe : originKeyframe}" is not an animatable value.`, "value-not-animatable");
    if (!isOriginAnimatable || !isTargetAnimatable) {
      return false;
    }
    return hasKeyframesChanged(keyframes2) || (type === "spring" || isGenerator(type)) && velocity;
  }

  // node_modules/motion-dom/dist/es/animation/utils/make-animation-instant.mjs
  init_define_import_meta_env();
  function makeAnimationInstant(options) {
    options.duration = 0;
    options.type = "keyframes";
  }

  // node_modules/motion-dom/dist/es/animation/waapi/supports/waapi.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/animation/waapi/utils/accelerated-values.mjs
  init_define_import_meta_env();
  var acceleratedValues = /* @__PURE__ */ new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform"
    // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
    // or until we implement support for linear() easing.
    // "background-color"
  ]);

  // node_modules/motion-dom/dist/es/animation/waapi/utils/is-browser-color.mjs
  init_define_import_meta_env();
  var browserColorFunctions = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
  function hasBrowserOnlyColors(keyframes2) {
    for (let i2 = 0; i2 < keyframes2.length; i2++) {
      if (typeof keyframes2[i2] === "string" && browserColorFunctions.test(keyframes2[i2])) {
        return true;
      }
    }
    return false;
  }

  // node_modules/motion-dom/dist/es/animation/waapi/supports/waapi.mjs
  var colorProperties = /* @__PURE__ */ new Set([
    "color",
    "backgroundColor",
    "outlineColor",
    "fill",
    "stroke",
    "borderColor",
    "borderTopColor",
    "borderRightColor",
    "borderBottomColor",
    "borderLeftColor"
  ]);
  var supportsWaapi = /* @__PURE__ */ memo(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
  function supportsBrowserAnimation(options) {
    const { motionValue: motionValue2, name, repeatDelay, repeatType, damping, type, keyframes: keyframes2 } = options;
    const subject = motionValue2?.owner?.current;
    if (!(subject instanceof HTMLElement)) {
      return false;
    }
    const { onUpdate, transformTemplate } = motionValue2.owner.getProps();
    return supportsWaapi() && name && /**
     * Force WAAPI for color properties with browser-only color formats
     * (oklch, oklab, lab, lch, etc.) that the JS animation path can't parse.
     */
    (acceleratedValues.has(name) || colorProperties.has(name) && hasBrowserOnlyColors(keyframes2)) && (name !== "transform" || !transformTemplate) && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !onUpdate && !repeatDelay && repeatType !== "mirror" && damping !== 0 && type !== "inertia";
  }

  // node_modules/motion-dom/dist/es/animation/AsyncMotionValueAnimation.mjs
  var MAX_RESOLVE_DELAY = 40;
  var AsyncMotionValueAnimation = class extends WithPromise {
    constructor({ autoplay = true, delay: delay2 = 0, type = "keyframes", repeat = 0, repeatDelay = 0, repeatType = "loop", keyframes: keyframes2, name, motionValue: motionValue2, element, ...options }) {
      super();
      this.stop = () => {
        if (this._animation) {
          this._animation.stop();
          this.stopTimeline?.();
        }
        this.keyframeResolver?.cancel();
      };
      this.createdAt = time.now();
      const optionsWithDefaults = {
        autoplay,
        delay: delay2,
        type,
        repeat,
        repeatDelay,
        repeatType,
        name,
        motionValue: motionValue2,
        element,
        ...options
      };
      const KeyframeResolver$1 = element?.KeyframeResolver || KeyframeResolver;
      this.keyframeResolver = new KeyframeResolver$1(keyframes2, (resolvedKeyframes, finalKeyframe, forced) => this.onKeyframesResolved(resolvedKeyframes, finalKeyframe, optionsWithDefaults, !forced), name, motionValue2, element);
      this.keyframeResolver?.scheduleResolve();
    }
    onKeyframesResolved(keyframes2, finalKeyframe, options, sync) {
      this.keyframeResolver = void 0;
      const { name, type, velocity, delay: delay2, isHandoff, onUpdate } = options;
      this.resolvedAt = time.now();
      let canAnimateValue = true;
      if (!canAnimate(keyframes2, name, type, velocity)) {
        canAnimateValue = false;
        if (MotionGlobalConfig.instantAnimations || !delay2) {
          onUpdate?.(getFinalKeyframe(keyframes2, options, finalKeyframe));
        }
        keyframes2[0] = keyframes2[keyframes2.length - 1];
        makeAnimationInstant(options);
        options.repeat = 0;
      }
      const startTime = sync ? !this.resolvedAt ? this.createdAt : this.resolvedAt - this.createdAt > MAX_RESOLVE_DELAY ? this.resolvedAt : this.createdAt : void 0;
      const resolvedOptions = {
        startTime,
        finalKeyframe,
        ...options,
        keyframes: keyframes2
      };
      const useWaapi = canAnimateValue && !isHandoff && supportsBrowserAnimation(resolvedOptions);
      const element = resolvedOptions.motionValue?.owner?.current;
      let animation;
      if (useWaapi) {
        try {
          animation = new NativeAnimationExtended({
            ...resolvedOptions,
            element
          });
        } catch {
          animation = new JSAnimation(resolvedOptions);
        }
      } else {
        animation = new JSAnimation(resolvedOptions);
      }
      animation.finished.then(() => {
        this.notifyFinished();
      }).catch(noop);
      if (this.pendingTimeline) {
        this.stopTimeline = animation.attachTimeline(this.pendingTimeline);
        this.pendingTimeline = void 0;
      }
      this._animation = animation;
    }
    get finished() {
      if (!this._animation) {
        return this._finished;
      } else {
        return this.animation.finished;
      }
    }
    then(onResolve, _onReject) {
      return this.finished.finally(onResolve).then(() => {
      });
    }
    get animation() {
      if (!this._animation) {
        this.keyframeResolver?.resume();
        flushKeyframeResolvers();
      }
      return this._animation;
    }
    get duration() {
      return this.animation.duration;
    }
    get iterationDuration() {
      return this.animation.iterationDuration;
    }
    get time() {
      return this.animation.time;
    }
    set time(newTime) {
      this.animation.time = newTime;
    }
    get speed() {
      return this.animation.speed;
    }
    get state() {
      return this.animation.state;
    }
    set speed(newSpeed) {
      this.animation.speed = newSpeed;
    }
    get startTime() {
      return this.animation.startTime;
    }
    attachTimeline(timeline2) {
      if (this._animation) {
        this.stopTimeline = this.animation.attachTimeline(timeline2);
      } else {
        this.pendingTimeline = timeline2;
      }
      return () => this.stop();
    }
    play() {
      this.animation.play();
    }
    pause() {
      this.animation.pause();
    }
    complete() {
      this.animation.complete();
    }
    cancel() {
      if (this._animation) {
        this.animation.cancel();
      }
      this.keyframeResolver?.cancel();
    }
  };

  // node_modules/motion-dom/dist/es/animation/utils/calc-child-stagger.mjs
  init_define_import_meta_env();
  function calcChildStagger(children, child, delayChildren, staggerChildren = 0, staggerDirection = 1) {
    const index = Array.from(children).sort((a, b) => a.sortNodePosition(b)).indexOf(child);
    const numChildren = children.size;
    const maxStaggerDuration = (numChildren - 1) * staggerChildren;
    const delayIsFunction = typeof delayChildren === "function";
    return delayIsFunction ? delayChildren(index, numChildren) : staggerDirection === 1 ? index * staggerChildren : maxStaggerDuration - index * staggerChildren;
  }

  // node_modules/motion-dom/dist/es/value/index.mjs
  init_define_import_meta_env();
  var MAX_VELOCITY_DELTA = 30;
  var isFloat = (value) => {
    return !isNaN(parseFloat(value));
  };
  var collectMotionValues = {
    current: void 0
  };
  var MotionValue = class {
    /**
     * @param init - The initiating value
     * @param config - Optional configuration options
     *
     * -  `transformer`: A function to transform incoming values with.
     */
    constructor(init, options = {}) {
      this.canTrackVelocity = null;
      this.events = {};
      this.updateAndNotify = (v) => {
        const currentTime = time.now();
        if (this.updatedAt !== currentTime) {
          this.setPrevFrameValue();
        }
        this.prev = this.current;
        this.setCurrent(v);
        if (this.current !== this.prev) {
          this.events.change?.notify(this.current);
          if (this.dependents) {
            for (const dependent of this.dependents) {
              dependent.dirty();
            }
          }
        }
      };
      this.hasAnimated = false;
      this.setCurrent(init);
      this.owner = options.owner;
    }
    setCurrent(current) {
      this.current = current;
      this.updatedAt = time.now();
      if (this.canTrackVelocity === null && current !== void 0) {
        this.canTrackVelocity = isFloat(this.current);
      }
    }
    setPrevFrameValue(prevFrameValue = this.current) {
      this.prevFrameValue = prevFrameValue;
      this.prevUpdatedAt = this.updatedAt;
    }
    /**
     * Adds a function that will be notified when the `MotionValue` is updated.
     *
     * It returns a function that, when called, will cancel the subscription.
     *
     * When calling `onChange` inside a React component, it should be wrapped with the
     * `useEffect` hook. As it returns an unsubscribe function, this should be returned
     * from the `useEffect` function to ensure you don't add duplicate subscribers..
     *
     * ```jsx
     * export const MyComponent = () => {
     *   const x = useMotionValue(0)
     *   const y = useMotionValue(0)
     *   const opacity = useMotionValue(1)
     *
     *   useEffect(() => {
     *     function updateOpacity() {
     *       const maxXY = Math.max(x.get(), y.get())
     *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
     *       opacity.set(newOpacity)
     *     }
     *
     *     const unsubscribeX = x.on("change", updateOpacity)
     *     const unsubscribeY = y.on("change", updateOpacity)
     *
     *     return () => {
     *       unsubscribeX()
     *       unsubscribeY()
     *     }
     *   }, [])
     *
     *   return <motion.div style={{ x }} />
     * }
     * ```
     *
     * @param subscriber - A function that receives the latest value.
     * @returns A function that, when called, will cancel this subscription.
     *
     * @deprecated
     */
    onChange(subscription) {
      if (true) {
        warnOnce(false, `value.onChange(callback) is deprecated. Switch to value.on("change", callback).`);
      }
      return this.on("change", subscription);
    }
    on(eventName, callback) {
      if (!this.events[eventName]) {
        this.events[eventName] = new SubscriptionManager();
      }
      const unsubscribe = this.events[eventName].add(callback);
      if (eventName === "change") {
        return () => {
          unsubscribe();
          frame.read(() => {
            if (!this.events.change.getSize()) {
              this.stop();
            }
          });
        };
      }
      return unsubscribe;
    }
    clearListeners() {
      for (const eventManagers in this.events) {
        this.events[eventManagers].clear();
      }
    }
    /**
     * Attaches a passive effect to the `MotionValue`.
     */
    attach(passiveEffect, stopPassiveEffect) {
      this.passiveEffect = passiveEffect;
      this.stopPassiveEffect = stopPassiveEffect;
    }
    /**
     * Sets the state of the `MotionValue`.
     *
     * @remarks
     *
     * ```jsx
     * const x = useMotionValue(0)
     * x.set(10)
     * ```
     *
     * @param latest - Latest value to set.
     * @param render - Whether to notify render subscribers. Defaults to `true`
     *
     * @public
     */
    set(v) {
      if (!this.passiveEffect) {
        this.updateAndNotify(v);
      } else {
        this.passiveEffect(v, this.updateAndNotify);
      }
    }
    setWithVelocity(prev, current, delta) {
      this.set(current);
      this.prev = void 0;
      this.prevFrameValue = prev;
      this.prevUpdatedAt = this.updatedAt - delta;
    }
    /**
     * Set the state of the `MotionValue`, stopping any active animations,
     * effects, and resets velocity to `0`.
     */
    jump(v, endAnimation = true) {
      this.updateAndNotify(v);
      this.prev = v;
      this.prevUpdatedAt = this.prevFrameValue = void 0;
      endAnimation && this.stop();
      if (this.stopPassiveEffect)
        this.stopPassiveEffect();
    }
    dirty() {
      this.events.change?.notify(this.current);
    }
    addDependent(dependent) {
      if (!this.dependents) {
        this.dependents = /* @__PURE__ */ new Set();
      }
      this.dependents.add(dependent);
    }
    removeDependent(dependent) {
      if (this.dependents) {
        this.dependents.delete(dependent);
      }
    }
    /**
     * Returns the latest state of `MotionValue`
     *
     * @returns - The latest state of `MotionValue`
     *
     * @public
     */
    get() {
      if (collectMotionValues.current) {
        collectMotionValues.current.push(this);
      }
      return this.current;
    }
    /**
     * @public
     */
    getPrevious() {
      return this.prev;
    }
    /**
     * Returns the latest velocity of `MotionValue`
     *
     * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
     *
     * @public
     */
    getVelocity() {
      const currentTime = time.now();
      if (!this.canTrackVelocity || this.prevFrameValue === void 0 || currentTime - this.updatedAt > MAX_VELOCITY_DELTA) {
        return 0;
      }
      const delta = Math.min(this.updatedAt - this.prevUpdatedAt, MAX_VELOCITY_DELTA);
      return velocityPerSecond(parseFloat(this.current) - parseFloat(this.prevFrameValue), delta);
    }
    /**
     * Registers a new animation to control this `MotionValue`. Only one
     * animation can drive a `MotionValue` at one time.
     *
     * ```jsx
     * value.start()
     * ```
     *
     * @param animation - A function that starts the provided animation
     */
    start(startAnimation) {
      this.stop();
      return new Promise((resolve) => {
        this.hasAnimated = true;
        this.animation = startAnimation(resolve);
        if (this.events.animationStart) {
          this.events.animationStart.notify();
        }
      }).then(() => {
        if (this.events.animationComplete) {
          this.events.animationComplete.notify();
        }
        this.clearAnimation();
      });
    }
    /**
     * Stop the currently active animation.
     *
     * @public
     */
    stop() {
      if (this.animation) {
        this.animation.stop();
        if (this.events.animationCancel) {
          this.events.animationCancel.notify();
        }
      }
      this.clearAnimation();
    }
    /**
     * Returns `true` if this value is currently animating.
     *
     * @public
     */
    isAnimating() {
      return !!this.animation;
    }
    clearAnimation() {
      delete this.animation;
    }
    /**
     * Destroy and clean up subscribers to this `MotionValue`.
     *
     * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
     * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
     * created a `MotionValue` via the `motionValue` function.
     *
     * @public
     */
    destroy() {
      this.dependents?.clear();
      this.events.destroy?.notify();
      this.clearListeners();
      this.stop();
      if (this.stopPassiveEffect) {
        this.stopPassiveEffect();
      }
    }
  };
  function motionValue(init, options) {
    return new MotionValue(init, options);
  }

  // node_modules/motion-dom/dist/es/animation/interfaces/motion-value.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/animation/utils/get-value-transition.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/animation/utils/resolve-transition.mjs
  init_define_import_meta_env();
  function resolveTransition(transition, parentTransition) {
    if (transition?.inherit && parentTransition) {
      const { inherit: _, ...rest } = transition;
      return { ...parentTransition, ...rest };
    }
    return transition;
  }

  // node_modules/motion-dom/dist/es/animation/utils/get-value-transition.mjs
  function getValueTransition(transition, key) {
    const valueTransition = transition?.[key] ?? transition?.["default"] ?? transition;
    if (valueTransition !== transition) {
      return resolveTransition(valueTransition, transition);
    }
    return valueTransition;
  }

  // node_modules/motion-dom/dist/es/animation/utils/default-transitions.mjs
  init_define_import_meta_env();
  var underDampedSpring = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
  };
  var criticallyDampedSpring = (target) => ({
    type: "spring",
    stiffness: 550,
    damping: target === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
  });
  var keyframesTransition = {
    type: "keyframes",
    duration: 0.8
  };
  var ease = {
    type: "keyframes",
    ease: [0.25, 0.1, 0.35, 1],
    duration: 0.3
  };
  var getDefaultTransition = (valueKey, { keyframes: keyframes2 }) => {
    if (keyframes2.length > 2) {
      return keyframesTransition;
    } else if (transformProps.has(valueKey)) {
      return valueKey.startsWith("scale") ? criticallyDampedSpring(keyframes2[1]) : underDampedSpring;
    }
    return ease;
  };

  // node_modules/motion-dom/dist/es/animation/utils/is-transition-defined.mjs
  init_define_import_meta_env();
  var orchestrationKeys = /* @__PURE__ */ new Set([
    "when",
    "delay",
    "delayChildren",
    "staggerChildren",
    "staggerDirection",
    "repeat",
    "repeatType",
    "repeatDelay",
    "from",
    "elapsed"
  ]);
  function isTransitionDefined(transition) {
    for (const key in transition) {
      if (!orchestrationKeys.has(key))
        return true;
    }
    return false;
  }

  // node_modules/motion-dom/dist/es/animation/interfaces/motion-value.mjs
  var animateMotionValue = (name, value, target, transition = {}, element, isHandoff) => (onComplete) => {
    const valueTransition = getValueTransition(transition, name) || {};
    const delay2 = valueTransition.delay || transition.delay || 0;
    let { elapsed = 0 } = transition;
    elapsed = elapsed - secondsToMilliseconds(delay2);
    const options = {
      keyframes: Array.isArray(target) ? target : [null, target],
      ease: "easeOut",
      velocity: value.getVelocity(),
      ...valueTransition,
      delay: -elapsed,
      onUpdate: (v) => {
        value.set(v);
        valueTransition.onUpdate && valueTransition.onUpdate(v);
      },
      onComplete: () => {
        onComplete();
        valueTransition.onComplete && valueTransition.onComplete();
      },
      name,
      motionValue: value,
      element: isHandoff ? void 0 : element
    };
    if (!isTransitionDefined(valueTransition)) {
      Object.assign(options, getDefaultTransition(name, options));
    }
    options.duration && (options.duration = secondsToMilliseconds(options.duration));
    options.repeatDelay && (options.repeatDelay = secondsToMilliseconds(options.repeatDelay));
    if (options.from !== void 0) {
      options.keyframes[0] = options.from;
    }
    let shouldSkip = false;
    if (options.type === false || options.duration === 0 && !options.repeatDelay) {
      makeAnimationInstant(options);
      if (options.delay === 0) {
        shouldSkip = true;
      }
    }
    if (MotionGlobalConfig.instantAnimations || MotionGlobalConfig.skipAnimations || element?.shouldSkipAnimations || valueTransition.skipAnimations) {
      shouldSkip = true;
      makeAnimationInstant(options);
      options.delay = 0;
    }
    options.allowFlatten = !valueTransition.type && !valueTransition.ease;
    if (shouldSkip && !isHandoff && value.get() !== void 0) {
      const finalKeyframe = getFinalKeyframe(options.keyframes, valueTransition);
      if (finalKeyframe !== void 0) {
        frame.update(() => {
          options.onUpdate(finalKeyframe);
          options.onComplete();
        });
        return;
      }
    }
    return valueTransition.isSync ? new JSAnimation(options) : new AsyncMotionValueAnimation(options);
  };

  // node_modules/motion-dom/dist/es/animation/utils/css-variables-conversion.mjs
  init_define_import_meta_env();
  var splitCSSVariableRegex = (
    // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
    /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
  );
  function parseCSSVariable(current) {
    const match = splitCSSVariableRegex.exec(current);
    if (!match)
      return [,];
    const [, token1, token2, fallback] = match;
    return [`--${token1 ?? token2}`, fallback];
  }
  var maxDepth = 4;
  function getVariableValue(current, element, depth = 1) {
    invariant(depth <= maxDepth, `Max CSS variable fallback depth detected in property "${current}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
    const [token, fallback] = parseCSSVariable(current);
    if (!token)
      return;
    const resolved = window.getComputedStyle(element).getPropertyValue(token);
    if (resolved) {
      const trimmed = resolved.trim();
      return isNumericalString(trimmed) ? parseFloat(trimmed) : trimmed;
    }
    return isCSSVariableToken(fallback) ? getVariableValue(fallback, element, depth + 1) : fallback;
  }

  // node_modules/motion-dom/dist/es/animation/interfaces/visual-element.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/render/utils/resolve-dynamic-variants.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/render/utils/resolve-variants.mjs
  init_define_import_meta_env();
  function getValueState(visualElement) {
    const state = [{}, {}];
    visualElement?.values.forEach((value, key) => {
      state[0][key] = value.get();
      state[1][key] = value.getVelocity();
    });
    return state;
  }
  function resolveVariantFromProps(props, definition, custom, visualElement) {
    if (typeof definition === "function") {
      const [current, velocity] = getValueState(visualElement);
      definition = definition(custom !== void 0 ? custom : props.custom, current, velocity);
    }
    if (typeof definition === "string") {
      definition = props.variants && props.variants[definition];
    }
    if (typeof definition === "function") {
      const [current, velocity] = getValueState(visualElement);
      definition = definition(custom !== void 0 ? custom : props.custom, current, velocity);
    }
    return definition;
  }

  // node_modules/motion-dom/dist/es/render/utils/resolve-dynamic-variants.mjs
  function resolveVariant(visualElement, definition, custom) {
    const props = visualElement.getProps();
    return resolveVariantFromProps(props, definition, custom !== void 0 ? custom : props.custom, visualElement);
  }

  // node_modules/motion-dom/dist/es/animation/interfaces/visual-element-target.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/render/utils/keys-position.mjs
  init_define_import_meta_env();
  var positionalKeys = /* @__PURE__ */ new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...transformPropOrder
  ]);

  // node_modules/motion-dom/dist/es/render/utils/setters.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/render/utils/is-keyframes-target.mjs
  init_define_import_meta_env();
  var isKeyframesTarget = (v) => {
    return Array.isArray(v);
  };

  // node_modules/motion-dom/dist/es/render/utils/setters.mjs
  function setMotionValue(visualElement, key, value) {
    if (visualElement.hasValue(key)) {
      visualElement.getValue(key).set(value);
    } else {
      visualElement.addValue(key, motionValue(value));
    }
  }
  function resolveFinalValueInKeyframes(v) {
    return isKeyframesTarget(v) ? v[v.length - 1] || 0 : v;
  }
  function setTarget(visualElement, definition) {
    const resolved = resolveVariant(visualElement, definition);
    let { transitionEnd = {}, transition = {}, ...target } = resolved || {};
    target = { ...target, ...transitionEnd };
    for (const key in target) {
      const value = resolveFinalValueInKeyframes(target[key]);
      setMotionValue(visualElement, key, value);
    }
  }

  // node_modules/motion-dom/dist/es/value/will-change/add-will-change.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/value/will-change/is.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs
  init_define_import_meta_env();
  var isMotionValue = (value) => Boolean(value && value.getVelocity);

  // node_modules/motion-dom/dist/es/value/will-change/is.mjs
  function isWillChangeMotionValue(value) {
    return Boolean(isMotionValue(value) && value.add);
  }

  // node_modules/motion-dom/dist/es/value/will-change/add-will-change.mjs
  function addValueToWillChange(visualElement, key) {
    const willChange = visualElement.getValue("willChange");
    if (isWillChangeMotionValue(willChange)) {
      return willChange.add(key);
    } else if (!willChange && MotionGlobalConfig.WillChange) {
      const newWillChange = new MotionGlobalConfig.WillChange("auto");
      visualElement.addValue("willChange", newWillChange);
      newWillChange.add(key);
    }
  }

  // node_modules/motion-dom/dist/es/animation/optimized-appear/get-appear-id.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/animation/optimized-appear/data-id.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/render/dom/utils/camel-to-dash.mjs
  init_define_import_meta_env();
  function camelToDash(str) {
    return str.replace(/([A-Z])/g, (match) => `-${match.toLowerCase()}`);
  }

  // node_modules/motion-dom/dist/es/animation/optimized-appear/data-id.mjs
  var optimizedAppearDataId = "framerAppearId";
  var optimizedAppearDataAttribute = "data-" + camelToDash(optimizedAppearDataId);

  // node_modules/motion-dom/dist/es/animation/optimized-appear/get-appear-id.mjs
  function getOptimisedAppearId(visualElement) {
    return visualElement.props[optimizedAppearDataAttribute];
  }

  // node_modules/motion-dom/dist/es/animation/interfaces/visual-element-target.mjs
  function shouldBlockAnimation({ protectedKeys, needsAnimating }, key) {
    const shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
    needsAnimating[key] = false;
    return shouldBlock;
  }
  function animateTarget(visualElement, targetAndTransition, { delay: delay2 = 0, transitionOverride, type } = {}) {
    let { transition, transitionEnd, ...target } = targetAndTransition;
    const defaultTransition = visualElement.getDefaultTransition();
    transition = transition ? resolveTransition(transition, defaultTransition) : defaultTransition;
    const reduceMotion = transition?.reduceMotion;
    const skipAnimations = transition?.skipAnimations;
    if (transitionOverride)
      transition = transitionOverride;
    const animations2 = [];
    const animationTypeState = type && visualElement.animationState && visualElement.animationState.getState()[type];
    const path = transition?.path;
    if (path) {
      path.animateVisualElement(visualElement, target, transition, delay2, animations2);
    }
    for (const key in target) {
      const value = visualElement.getValue(key, visualElement.latestValues[key] ?? null);
      const valueTarget = target[key];
      if (valueTarget === void 0 || animationTypeState && shouldBlockAnimation(animationTypeState, key)) {
        continue;
      }
      const valueTransition = {
        delay: delay2,
        ...getValueTransition(transition || {}, key)
      };
      if (skipAnimations)
        valueTransition.skipAnimations = true;
      const currentValue = value.get();
      if (currentValue !== void 0 && !value.isAnimating() && !Array.isArray(valueTarget) && valueTarget === currentValue && !valueTransition.velocity) {
        frame.update(() => value.set(valueTarget));
        continue;
      }
      let isHandoff = false;
      if (window.MotionHandoffAnimation) {
        const appearId = getOptimisedAppearId(visualElement);
        if (appearId) {
          const startTime = window.MotionHandoffAnimation(appearId, key, frame);
          if (startTime !== null) {
            valueTransition.startTime = startTime;
            isHandoff = true;
          }
        }
      }
      addValueToWillChange(visualElement, key);
      const shouldReduceMotion = reduceMotion ?? visualElement.shouldReduceMotion;
      value.start(animateMotionValue(key, value, valueTarget, shouldReduceMotion && positionalKeys.has(key) ? { type: false } : valueTransition, visualElement, isHandoff));
      const animation = value.animation;
      if (animation) {
        animations2.push(animation);
      }
    }
    if (transitionEnd) {
      const applyTransitionEnd = () => frame.update(() => {
        transitionEnd && setTarget(visualElement, transitionEnd);
      });
      if (animations2.length) {
        Promise.all(animations2).then(applyTransitionEnd);
      } else {
        applyTransitionEnd();
      }
    }
    return animations2;
  }

  // node_modules/motion-dom/dist/es/animation/interfaces/visual-element-variant.mjs
  init_define_import_meta_env();
  function animateVariant(visualElement, variant, options = {}) {
    const resolved = resolveVariant(visualElement, variant, options.type === "exit" ? visualElement.presenceContext?.custom : void 0);
    let { transition = visualElement.getDefaultTransition() || {} } = resolved || {};
    if (options.transitionOverride) {
      transition = options.transitionOverride;
    }
    const getAnimation = resolved ? () => Promise.all(animateTarget(visualElement, resolved, options)) : () => Promise.resolve();
    const getChildAnimations = visualElement.variantChildren && visualElement.variantChildren.size ? (forwardDelay = 0) => {
      const { delayChildren = 0, staggerChildren, staggerDirection } = transition;
      return animateChildren(visualElement, variant, forwardDelay, delayChildren, staggerChildren, staggerDirection, options);
    } : () => Promise.resolve();
    const { when } = transition;
    if (when) {
      const [first, last] = when === "beforeChildren" ? [getAnimation, getChildAnimations] : [getChildAnimations, getAnimation];
      return first().then(() => last());
    } else {
      return Promise.all([getAnimation(), getChildAnimations(options.delay)]);
    }
  }
  function animateChildren(visualElement, variant, delay2 = 0, delayChildren = 0, staggerChildren = 0, staggerDirection = 1, options) {
    const animations2 = [];
    for (const child of visualElement.variantChildren) {
      child.notify("AnimationStart", variant);
      animations2.push(animateVariant(child, variant, {
        ...options,
        delay: delay2 + (typeof delayChildren === "function" ? 0 : delayChildren) + calcChildStagger(visualElement.variantChildren, child, delayChildren, staggerChildren, staggerDirection)
      }).then(() => child.notify("AnimationComplete", variant)));
    }
    return Promise.all(animations2);
  }

  // node_modules/motion-dom/dist/es/animation/interfaces/visual-element.mjs
  function animateVisualElement(visualElement, definition, options = {}) {
    visualElement.notify("AnimationStart", definition);
    let animation;
    if (Array.isArray(definition)) {
      const animations2 = definition.map((variant) => animateVariant(visualElement, variant, options));
      animation = Promise.all(animations2);
    } else if (typeof definition === "string") {
      animation = animateVariant(visualElement, definition, options);
    } else {
      const resolvedDefinition = typeof definition === "function" ? resolveVariant(visualElement, definition, options.custom) : definition;
      animation = Promise.all(animateTarget(visualElement, resolvedDefinition, options));
    }
    return animation.then(() => {
      visualElement.notify("AnimationComplete", definition);
    });
  }

  // node_modules/motion-dom/dist/es/animation/keyframes/DOMKeyframesResolver.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/value/types/dimensions.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/value/types/auto.mjs
  init_define_import_meta_env();
  var auto = {
    test: (v) => v === "auto",
    parse: (v) => v
  };

  // node_modules/motion-dom/dist/es/value/types/test.mjs
  init_define_import_meta_env();
  var testValueType = (v) => (type) => type.test(v);

  // node_modules/motion-dom/dist/es/value/types/dimensions.mjs
  var dimensionValueTypes = [number, px, percent, degrees, vw, vh, auto];
  var findDimensionValueType = (v) => dimensionValueTypes.find(testValueType(v));

  // node_modules/motion-dom/dist/es/animation/keyframes/utils/is-none.mjs
  init_define_import_meta_env();
  function isNone(value) {
    if (typeof value === "number") {
      return value === 0;
    } else if (value !== null) {
      return value === "none" || value === "0" || isZeroValueString(value);
    } else {
      return true;
    }
  }

  // node_modules/motion-dom/dist/es/animation/keyframes/utils/make-none-animatable.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/value/types/utils/animatable-none.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/value/types/complex/filter.mjs
  init_define_import_meta_env();
  var maxDefaults = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
  function applyDefaultFilter(v) {
    const [name, value] = v.slice(0, -1).split("(");
    if (name === "drop-shadow")
      return v;
    const [number2] = value.match(floatRegex) || [];
    if (!number2)
      return v;
    const unit = value.replace(number2, "");
    let defaultValue = maxDefaults.has(name) ? 1 : 0;
    if (number2 !== value)
      defaultValue *= 100;
    return name + "(" + defaultValue + unit + ")";
  }
  var functionRegex = /\b([a-z-]*)\(.*?\)/gu;
  var filter = {
    ...complex,
    getAnimatableNone: (v) => {
      const functions = v.match(functionRegex);
      return functions ? functions.map(applyDefaultFilter).join(" ") : v;
    }
  };

  // node_modules/motion-dom/dist/es/value/types/complex/mask.mjs
  init_define_import_meta_env();
  var mask = {
    ...complex,
    getAnimatableNone: (v) => {
      const parsed = complex.parse(v);
      const transformer = complex.createTransformer(v);
      return transformer(parsed.map((v2) => typeof v2 === "number" ? 0 : typeof v2 === "object" ? { ...v2, alpha: 1 } : v2));
    }
  };

  // node_modules/motion-dom/dist/es/value/types/maps/defaults.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/value/types/maps/number.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/value/types/int.mjs
  init_define_import_meta_env();
  var int = {
    ...number,
    transform: Math.round
  };

  // node_modules/motion-dom/dist/es/value/types/maps/transform.mjs
  init_define_import_meta_env();
  var transformValueTypes = {
    rotate: degrees,
    /**
     * Internal channel for `transition.path` orientToPath. Composed onto
     * `rotate` at the transform-build sites so the user's `rotate` is
     * never read or overwritten. Not part of `transformPropOrder`.
     */
    pathRotation: degrees,
    rotateX: degrees,
    rotateY: degrees,
    rotateZ: degrees,
    scale,
    scaleX: scale,
    scaleY: scale,
    scaleZ: scale,
    skew: degrees,
    skewX: degrees,
    skewY: degrees,
    distance: px,
    translateX: px,
    translateY: px,
    translateZ: px,
    x: px,
    y: px,
    z: px,
    perspective: px,
    transformPerspective: px,
    opacity: alpha,
    originX: progressPercentage,
    originY: progressPercentage,
    originZ: px
  };

  // node_modules/motion-dom/dist/es/value/types/maps/number.mjs
  var numberValueTypes = {
    // Border props
    borderWidth: px,
    borderTopWidth: px,
    borderRightWidth: px,
    borderBottomWidth: px,
    borderLeftWidth: px,
    borderRadius: px,
    borderTopLeftRadius: px,
    borderTopRightRadius: px,
    borderBottomRightRadius: px,
    borderBottomLeftRadius: px,
    // Positioning props
    width: px,
    maxWidth: px,
    height: px,
    maxHeight: px,
    top: px,
    right: px,
    bottom: px,
    left: px,
    inset: px,
    insetBlock: px,
    insetBlockStart: px,
    insetBlockEnd: px,
    insetInline: px,
    insetInlineStart: px,
    insetInlineEnd: px,
    // Spacing props
    padding: px,
    paddingTop: px,
    paddingRight: px,
    paddingBottom: px,
    paddingLeft: px,
    paddingBlock: px,
    paddingBlockStart: px,
    paddingBlockEnd: px,
    paddingInline: px,
    paddingInlineStart: px,
    paddingInlineEnd: px,
    margin: px,
    marginTop: px,
    marginRight: px,
    marginBottom: px,
    marginLeft: px,
    marginBlock: px,
    marginBlockStart: px,
    marginBlockEnd: px,
    marginInline: px,
    marginInlineStart: px,
    marginInlineEnd: px,
    // Typography
    fontSize: px,
    // Misc
    backgroundPositionX: px,
    backgroundPositionY: px,
    ...transformValueTypes,
    zIndex: int,
    // SVG
    fillOpacity: alpha,
    strokeOpacity: alpha,
    numOctaves: int
  };

  // node_modules/motion-dom/dist/es/value/types/maps/defaults.mjs
  var defaultValueTypes = {
    ...numberValueTypes,
    // Color props
    color,
    backgroundColor: color,
    outlineColor: color,
    fill: color,
    stroke: color,
    // Border props
    borderColor: color,
    borderTopColor: color,
    borderRightColor: color,
    borderBottomColor: color,
    borderLeftColor: color,
    filter,
    WebkitFilter: filter,
    mask,
    WebkitMask: mask
  };
  var getDefaultValueType = (key) => defaultValueTypes[key];

  // node_modules/motion-dom/dist/es/value/types/utils/animatable-none.mjs
  var customTypes = /* @__PURE__ */ new Set([filter, mask]);
  function getAnimatableNone2(key, value) {
    let defaultValueType = getDefaultValueType(key);
    if (!customTypes.has(defaultValueType))
      defaultValueType = complex;
    return defaultValueType.getAnimatableNone ? defaultValueType.getAnimatableNone(value) : void 0;
  }

  // node_modules/motion-dom/dist/es/animation/keyframes/utils/make-none-animatable.mjs
  var invalidTemplates = /* @__PURE__ */ new Set(["auto", "none", "0"]);
  function makeNoneKeyframesAnimatable(unresolvedKeyframes, noneKeyframeIndexes, name) {
    let i2 = 0;
    let animatableTemplate = void 0;
    while (i2 < unresolvedKeyframes.length && !animatableTemplate) {
      const keyframe = unresolvedKeyframes[i2];
      if (typeof keyframe === "string" && !invalidTemplates.has(keyframe) && analyseComplexValue(keyframe).values.length) {
        animatableTemplate = unresolvedKeyframes[i2];
      }
      i2++;
    }
    if (animatableTemplate && name) {
      for (const noneIndex of noneKeyframeIndexes) {
        unresolvedKeyframes[noneIndex] = getAnimatableNone2(name, animatableTemplate);
      }
    }
  }

  // node_modules/motion-dom/dist/es/animation/keyframes/DOMKeyframesResolver.mjs
  var DOMKeyframesResolver = class extends KeyframeResolver {
    constructor(unresolvedKeyframes, onComplete, name, motionValue2, element) {
      super(unresolvedKeyframes, onComplete, name, motionValue2, element, true);
    }
    readKeyframes() {
      const { unresolvedKeyframes, element, name } = this;
      if (!element || !element.current)
        return;
      super.readKeyframes();
      for (let i2 = 0; i2 < unresolvedKeyframes.length; i2++) {
        let keyframe = unresolvedKeyframes[i2];
        if (typeof keyframe === "string") {
          keyframe = keyframe.trim();
          if (isCSSVariableToken(keyframe)) {
            const resolved = getVariableValue(keyframe, element.current);
            if (resolved !== void 0) {
              unresolvedKeyframes[i2] = resolved;
            }
            if (i2 === unresolvedKeyframes.length - 1) {
              this.finalKeyframe = keyframe;
            }
          }
        }
      }
      this.resolveNoneKeyframes();
      if (!positionalKeys.has(name) || unresolvedKeyframes.length !== 2) {
        return;
      }
      const [origin, target] = unresolvedKeyframes;
      const originType = findDimensionValueType(origin);
      const targetType = findDimensionValueType(target);
      const originHasVar = containsCSSVariable(origin);
      const targetHasVar = containsCSSVariable(target);
      if (originHasVar !== targetHasVar && positionalValues[name]) {
        this.needsMeasurement = true;
        return;
      }
      if (originType === targetType)
        return;
      if (isNumOrPxType(originType) && isNumOrPxType(targetType)) {
        for (let i2 = 0; i2 < unresolvedKeyframes.length; i2++) {
          const value = unresolvedKeyframes[i2];
          if (typeof value === "string") {
            unresolvedKeyframes[i2] = parseFloat(value);
          }
        }
      } else if (positionalValues[name]) {
        this.needsMeasurement = true;
      }
    }
    resolveNoneKeyframes() {
      const { unresolvedKeyframes, name } = this;
      const noneKeyframeIndexes = [];
      for (let i2 = 0; i2 < unresolvedKeyframes.length; i2++) {
        if (unresolvedKeyframes[i2] === null || isNone(unresolvedKeyframes[i2])) {
          noneKeyframeIndexes.push(i2);
        }
      }
      if (noneKeyframeIndexes.length) {
        makeNoneKeyframesAnimatable(unresolvedKeyframes, noneKeyframeIndexes, name);
      }
    }
    measureInitialState() {
      const { element, unresolvedKeyframes, name } = this;
      if (!element || !element.current)
        return;
      if (name === "height") {
        this.suspendedScrollY = window.pageYOffset;
      }
      this.measuredOrigin = positionalValues[name](element.measureViewportBox(), window.getComputedStyle(element.current));
      unresolvedKeyframes[0] = this.measuredOrigin;
      const measureKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
      if (measureKeyframe !== void 0) {
        element.getValue(name, measureKeyframe).jump(measureKeyframe, false);
      }
    }
    measureEndState() {
      const { element, name, unresolvedKeyframes } = this;
      if (!element || !element.current)
        return;
      const value = element.getValue(name);
      value && value.jump(this.measuredOrigin, false);
      const finalKeyframeIndex = unresolvedKeyframes.length - 1;
      const finalKeyframe = unresolvedKeyframes[finalKeyframeIndex];
      unresolvedKeyframes[finalKeyframeIndex] = positionalValues[name](element.measureViewportBox(), window.getComputedStyle(element.current));
      if (finalKeyframe !== null && this.finalKeyframe === void 0) {
        this.finalKeyframe = finalKeyframe;
      }
      if (this.removedTransforms?.length) {
        this.removedTransforms.forEach(([unsetTransformName, unsetTransformValue]) => {
          element.getValue(unsetTransformName).set(unsetTransformValue);
        });
      }
      this.resolveNoneKeyframes();
    }
  };

  // node_modules/motion-dom/dist/es/utils/resolve-elements.mjs
  init_define_import_meta_env();
  function resolveElements(elementOrSelector, scope, selectorCache) {
    if (elementOrSelector == null) {
      return [];
    }
    if (elementOrSelector instanceof EventTarget) {
      return [elementOrSelector];
    } else if (typeof elementOrSelector === "string") {
      let root = document;
      if (scope) {
        root = scope.current;
      }
      const elements = selectorCache?.[elementOrSelector] ?? root.querySelectorAll(elementOrSelector);
      return elements ? Array.from(elements) : [];
    }
    return Array.from(elementOrSelector).filter((element) => element != null);
  }

  // node_modules/motion-dom/dist/es/value/types/utils/get-as-type.mjs
  init_define_import_meta_env();
  var getValueAsType = (value, type) => {
    return type && typeof value === "number" ? type.transform(value) : value;
  };

  // node_modules/motion-dom/dist/es/utils/is-html-element.mjs
  init_define_import_meta_env();
  function isHTMLElement(element) {
    return isObject(element) && "offsetHeight" in element && !("ownerSVGElement" in element);
  }

  // node_modules/motion-dom/dist/es/frameloop/microtask.mjs
  init_define_import_meta_env();
  var { schedule: microtask, cancel: cancelMicrotask } = /* @__PURE__ */ createRenderBatcher(queueMicrotask, false);

  // node_modules/motion-dom/dist/es/gestures/drag/state/is-active.mjs
  init_define_import_meta_env();
  var isDragging = {
    x: false,
    y: false
  };
  function isDragActive() {
    return isDragging.x || isDragging.y;
  }

  // node_modules/motion-dom/dist/es/gestures/drag/state/set-active.mjs
  init_define_import_meta_env();
  function setDragLock(axis) {
    if (axis === "x" || axis === "y") {
      if (isDragging[axis]) {
        return null;
      } else {
        isDragging[axis] = true;
        return () => {
          isDragging[axis] = false;
        };
      }
    } else {
      if (isDragging.x || isDragging.y) {
        return null;
      } else {
        isDragging.x = isDragging.y = true;
        return () => {
          isDragging.x = isDragging.y = false;
        };
      }
    }
  }

  // node_modules/motion-dom/dist/es/gestures/hover.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/gestures/utils/setup.mjs
  init_define_import_meta_env();
  function setupGesture(elementOrSelector, options) {
    const elements = resolveElements(elementOrSelector);
    const gestureAbortController = new AbortController();
    const eventOptions = {
      passive: true,
      ...options,
      signal: gestureAbortController.signal
    };
    const cancel = () => gestureAbortController.abort();
    return [elements, eventOptions, cancel];
  }

  // node_modules/motion-dom/dist/es/gestures/hover.mjs
  function isValidHover(event) {
    return !(event.pointerType === "touch" || isDragActive());
  }
  function hover(elementOrSelector, onHoverStart, options = {}) {
    const [elements, eventOptions, cancel] = setupGesture(elementOrSelector, options);
    elements.forEach((element) => {
      let isPressed = false;
      let deferredHoverEnd = false;
      let hoverEndCallback;
      const removePointerLeave = () => {
        element.removeEventListener("pointerleave", onPointerLeave);
      };
      const endHover = (event) => {
        if (hoverEndCallback) {
          hoverEndCallback(event);
          hoverEndCallback = void 0;
        }
        removePointerLeave();
      };
      const onPointerUp = (event) => {
        isPressed = false;
        window.removeEventListener("pointerup", onPointerUp);
        window.removeEventListener("pointercancel", onPointerUp);
        if (deferredHoverEnd) {
          deferredHoverEnd = false;
          endHover(event);
        }
      };
      const onPointerDown = () => {
        isPressed = true;
        window.addEventListener("pointerup", onPointerUp, eventOptions);
        window.addEventListener("pointercancel", onPointerUp, eventOptions);
      };
      const onPointerLeave = (leaveEvent) => {
        if (leaveEvent.pointerType === "touch")
          return;
        if (isPressed) {
          deferredHoverEnd = true;
          return;
        }
        endHover(leaveEvent);
      };
      const onPointerEnter = (enterEvent) => {
        if (!isValidHover(enterEvent))
          return;
        deferredHoverEnd = false;
        const onHoverEnd = onHoverStart(element, enterEvent);
        if (typeof onHoverEnd !== "function")
          return;
        hoverEndCallback = onHoverEnd;
        element.addEventListener("pointerleave", onPointerLeave, eventOptions);
      };
      element.addEventListener("pointerenter", onPointerEnter, eventOptions);
      element.addEventListener("pointerdown", onPointerDown, eventOptions);
    });
    return cancel;
  }

  // node_modules/motion-dom/dist/es/gestures/press/index.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/gestures/utils/is-node-or-child.mjs
  init_define_import_meta_env();
  var isNodeOrChild = (parent, child) => {
    if (!child) {
      return false;
    } else if (parent === child) {
      return true;
    } else {
      return isNodeOrChild(parent, child.parentElement);
    }
  };

  // node_modules/motion-dom/dist/es/gestures/utils/is-primary-pointer.mjs
  init_define_import_meta_env();
  var isPrimaryPointer = (event) => {
    if (event.pointerType === "mouse") {
      return typeof event.button !== "number" || event.button <= 0;
    } else {
      return event.isPrimary !== false;
    }
  };

  // node_modules/motion-dom/dist/es/gestures/press/utils/is-keyboard-accessible.mjs
  init_define_import_meta_env();
  var keyboardAccessibleElements = /* @__PURE__ */ new Set([
    "BUTTON",
    "INPUT",
    "SELECT",
    "TEXTAREA",
    "A"
  ]);
  function isElementKeyboardAccessible(element) {
    return keyboardAccessibleElements.has(element.tagName) || element.isContentEditable === true;
  }
  var textInputElements = /* @__PURE__ */ new Set(["INPUT", "SELECT", "TEXTAREA"]);
  function isElementTextInput(element) {
    return textInputElements.has(element.tagName) || element.isContentEditable === true;
  }

  // node_modules/motion-dom/dist/es/gestures/press/utils/keyboard.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/gestures/press/utils/state.mjs
  init_define_import_meta_env();
  var isPressing = /* @__PURE__ */ new WeakSet();

  // node_modules/motion-dom/dist/es/gestures/press/utils/keyboard.mjs
  function filterEvents(callback) {
    return (event) => {
      if (event.key !== "Enter")
        return;
      callback(event);
    };
  }
  function firePointerEvent(target, type) {
    target.dispatchEvent(new PointerEvent("pointer" + type, { isPrimary: true, bubbles: true }));
  }
  var enableKeyboardPress = (focusEvent, eventOptions) => {
    const element = focusEvent.currentTarget;
    if (!element)
      return;
    const handleKeydown = filterEvents(() => {
      if (isPressing.has(element))
        return;
      firePointerEvent(element, "down");
      const handleKeyup = filterEvents(() => {
        firePointerEvent(element, "up");
      });
      const handleBlur = () => firePointerEvent(element, "cancel");
      element.addEventListener("keyup", handleKeyup, eventOptions);
      element.addEventListener("blur", handleBlur, eventOptions);
    });
    element.addEventListener("keydown", handleKeydown, eventOptions);
    element.addEventListener("blur", () => element.removeEventListener("keydown", handleKeydown), eventOptions);
  };

  // node_modules/motion-dom/dist/es/gestures/press/index.mjs
  function isValidPressEvent(event) {
    return isPrimaryPointer(event) && !isDragActive();
  }
  var claimedPointerDownEvents = /* @__PURE__ */ new WeakSet();
  function press(targetOrSelector, onPressStart, options = {}) {
    const [targets, eventOptions, cancelEvents] = setupGesture(targetOrSelector, options);
    const startPress = (startEvent) => {
      const target = startEvent.currentTarget;
      if (!isValidPressEvent(startEvent))
        return;
      if (claimedPointerDownEvents.has(startEvent))
        return;
      isPressing.add(target);
      if (options.stopPropagation) {
        claimedPointerDownEvents.add(startEvent);
      }
      const onPressEnd = onPressStart(target, startEvent);
      const onPointerEnd = (endEvent, success) => {
        window.removeEventListener("pointerup", onPointerUp);
        window.removeEventListener("pointercancel", onPointerCancel);
        if (isPressing.has(target)) {
          isPressing.delete(target);
        }
        if (!isValidPressEvent(endEvent)) {
          return;
        }
        if (typeof onPressEnd === "function") {
          onPressEnd(endEvent, { success });
        }
      };
      const onPointerUp = (upEvent) => {
        onPointerEnd(upEvent, target === window || target === document || options.useGlobalTarget || isNodeOrChild(target, upEvent.target));
      };
      const onPointerCancel = (cancelEvent) => {
        onPointerEnd(cancelEvent, false);
      };
      window.addEventListener("pointerup", onPointerUp, eventOptions);
      window.addEventListener("pointercancel", onPointerCancel, eventOptions);
    };
    targets.forEach((target) => {
      const pointerDownTarget = options.useGlobalTarget ? window : target;
      pointerDownTarget.addEventListener("pointerdown", startPress, eventOptions);
      if (isHTMLElement(target)) {
        target.addEventListener("focus", (event) => enableKeyboardPress(event, eventOptions));
        if (!isElementKeyboardAccessible(target) && !target.hasAttribute("tabindex")) {
          target.tabIndex = 0;
        }
      }
    });
    return cancelEvents;
  }

  // node_modules/motion-dom/dist/es/resize/index.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/resize/handle-element.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/utils/is-svg-element.mjs
  init_define_import_meta_env();
  function isSVGElement(element) {
    return isObject(element) && "ownerSVGElement" in element;
  }

  // node_modules/motion-dom/dist/es/resize/handle-element.mjs
  var resizeHandlers = /* @__PURE__ */ new WeakMap();
  var observer;
  var getSize = (borderBoxAxis, svgAxis, htmlAxis) => (target, borderBoxSize) => {
    if (borderBoxSize && borderBoxSize[0]) {
      return borderBoxSize[0][borderBoxAxis + "Size"];
    } else if (isSVGElement(target) && "getBBox" in target) {
      return target.getBBox()[svgAxis];
    } else {
      return target[htmlAxis];
    }
  };
  var getWidth = /* @__PURE__ */ getSize("inline", "width", "offsetWidth");
  var getHeight = /* @__PURE__ */ getSize("block", "height", "offsetHeight");
  function notifyTarget({ target, borderBoxSize }) {
    resizeHandlers.get(target)?.forEach((handler) => {
      handler(target, {
        get width() {
          return getWidth(target, borderBoxSize);
        },
        get height() {
          return getHeight(target, borderBoxSize);
        }
      });
    });
  }
  function notifyAll(entries) {
    entries.forEach(notifyTarget);
  }
  function createResizeObserver() {
    if (typeof ResizeObserver === "undefined")
      return;
    observer = new ResizeObserver(notifyAll);
  }
  function resizeElement(target, handler) {
    if (!observer)
      createResizeObserver();
    const elements = resolveElements(target);
    elements.forEach((element) => {
      let elementHandlers = resizeHandlers.get(element);
      if (!elementHandlers) {
        elementHandlers = /* @__PURE__ */ new Set();
        resizeHandlers.set(element, elementHandlers);
      }
      elementHandlers.add(handler);
      observer?.observe(element);
    });
    return () => {
      elements.forEach((element) => {
        const elementHandlers = resizeHandlers.get(element);
        elementHandlers?.delete(handler);
        if (!elementHandlers?.size) {
          observer?.unobserve(element);
        }
      });
    };
  }

  // node_modules/motion-dom/dist/es/resize/handle-window.mjs
  init_define_import_meta_env();
  var windowCallbacks = /* @__PURE__ */ new Set();
  var windowResizeHandler;
  function createWindowResizeHandler() {
    windowResizeHandler = () => {
      const info = {
        get width() {
          return window.innerWidth;
        },
        get height() {
          return window.innerHeight;
        }
      };
      windowCallbacks.forEach((callback) => callback(info));
    };
    window.addEventListener("resize", windowResizeHandler);
  }
  function resizeWindow(callback) {
    windowCallbacks.add(callback);
    if (!windowResizeHandler)
      createWindowResizeHandler();
    return () => {
      windowCallbacks.delete(callback);
      if (!windowCallbacks.size && typeof windowResizeHandler === "function") {
        window.removeEventListener("resize", windowResizeHandler);
        windowResizeHandler = void 0;
      }
    };
  }

  // node_modules/motion-dom/dist/es/resize/index.mjs
  function resize(a, b) {
    return typeof a === "function" ? resizeWindow(a) : resizeElement(a, b);
  }

  // node_modules/motion-dom/dist/es/utils/is-svg-svg-element.mjs
  init_define_import_meta_env();
  function isSVGSVGElement(element) {
    return isSVGElement(element) && element.tagName === "svg";
  }

  // node_modules/motion-dom/dist/es/value/types/utils/find.mjs
  init_define_import_meta_env();
  var valueTypes = [...dimensionValueTypes, color, complex];
  var findValueType = (v) => valueTypes.find(testValueType(v));

  // node_modules/motion-dom/dist/es/render/dom/DOMVisualElement.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/render/VisualElement.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/projection/geometry/models.mjs
  init_define_import_meta_env();
  var createAxisDelta = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
  });
  var createDelta = () => ({
    x: createAxisDelta(),
    y: createAxisDelta()
  });
  var createAxis = () => ({ min: 0, max: 0 });
  var createBox = () => ({
    x: createAxis(),
    y: createAxis()
  });

  // node_modules/motion-dom/dist/es/render/store.mjs
  init_define_import_meta_env();
  var visualElementStore = /* @__PURE__ */ new WeakMap();

  // node_modules/motion-dom/dist/es/render/utils/is-controlling-variants.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/render/utils/is-animation-controls.mjs
  init_define_import_meta_env();
  function isAnimationControls(v) {
    return v !== null && typeof v === "object" && typeof v.start === "function";
  }

  // node_modules/motion-dom/dist/es/render/utils/is-variant-label.mjs
  init_define_import_meta_env();
  function isVariantLabel(v) {
    return typeof v === "string" || Array.isArray(v);
  }

  // node_modules/motion-dom/dist/es/render/utils/variant-props.mjs
  init_define_import_meta_env();
  var variantPriorityOrder = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit"
  ];
  var variantProps = ["initial", ...variantPriorityOrder];

  // node_modules/motion-dom/dist/es/render/utils/is-controlling-variants.mjs
  function isControllingVariants(props) {
    return isAnimationControls(props.animate) || variantProps.some((name) => isVariantLabel(props[name]));
  }
  function isVariantNode(props) {
    return Boolean(isControllingVariants(props) || props.variants);
  }

  // node_modules/motion-dom/dist/es/render/utils/motion-values.mjs
  init_define_import_meta_env();
  function updateMotionValuesFromProps(element, next, prev) {
    for (const key in next) {
      const nextValue = next[key];
      const prevValue = prev[key];
      if (isMotionValue(nextValue)) {
        element.addValue(key, nextValue);
      } else if (isMotionValue(prevValue)) {
        element.addValue(key, motionValue(nextValue, { owner: element }));
      } else if (prevValue !== nextValue) {
        if (element.hasValue(key)) {
          const existingValue = element.getValue(key);
          if (existingValue.liveStyle === true) {
            existingValue.jump(nextValue);
          } else if (!existingValue.hasAnimated) {
            existingValue.set(nextValue);
          }
        } else {
          const latestValue = element.getStaticValue(key);
          element.addValue(key, motionValue(latestValue !== void 0 ? latestValue : nextValue, { owner: element }));
        }
      }
    }
    for (const key in prev) {
      if (next[key] === void 0)
        element.removeValue(key);
    }
    return next;
  }

  // node_modules/motion-dom/dist/es/render/utils/reduced-motion/index.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/render/utils/reduced-motion/state.mjs
  init_define_import_meta_env();
  var prefersReducedMotion = { current: null };
  var hasReducedMotionListener = { current: false };

  // node_modules/motion-dom/dist/es/render/utils/reduced-motion/index.mjs
  var isBrowser2 = typeof window !== "undefined";
  function initPrefersReducedMotion() {
    hasReducedMotionListener.current = true;
    if (!isBrowser2)
      return;
    if (window.matchMedia) {
      const motionMediaQuery = window.matchMedia("(prefers-reduced-motion)");
      const setReducedMotionPreferences = () => prefersReducedMotion.current = motionMediaQuery.matches;
      motionMediaQuery.addEventListener("change", setReducedMotionPreferences);
      setReducedMotionPreferences();
    } else {
      prefersReducedMotion.current = false;
    }
  }

  // node_modules/motion-dom/dist/es/render/VisualElement.mjs
  var propEventHandlers = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete"
  ];
  var featureDefinitions = {};
  function setFeatureDefinitions(definitions) {
    featureDefinitions = definitions;
  }
  function getFeatureDefinitions() {
    return featureDefinitions;
  }
  var VisualElement = class {
    /**
     * This method takes React props and returns found MotionValues. For example, HTML
     * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
     *
     * This isn't an abstract method as it needs calling in the constructor, but it is
     * intended to be one.
     */
    scrapeMotionValuesFromProps(_props, _prevProps, _visualElement) {
      return {};
    }
    constructor({ parent, props, presenceContext, reducedMotionConfig, skipAnimations, blockInitialAnimation, visualState }, options = {}) {
      this.current = null;
      this.children = /* @__PURE__ */ new Set();
      this.isVariantNode = false;
      this.isControllingVariants = false;
      this.shouldReduceMotion = null;
      this.shouldSkipAnimations = false;
      this.values = /* @__PURE__ */ new Map();
      this.KeyframeResolver = KeyframeResolver;
      this.features = {};
      this.valueSubscriptions = /* @__PURE__ */ new Map();
      this.prevMotionValues = {};
      this.hasBeenMounted = false;
      this.events = {};
      this.propEventSubscriptions = {};
      this.notifyUpdate = () => this.notify("Update", this.latestValues);
      this.render = () => {
        if (!this.current)
          return;
        this.triggerBuild();
        this.renderInstance(this.current, this.renderState, this.props.style, this.projection);
      };
      this.renderScheduledAt = 0;
      this.scheduleRender = () => {
        const now2 = time.now();
        if (this.renderScheduledAt < now2) {
          this.renderScheduledAt = now2;
          frame.render(this.render, false, true);
        }
      };
      const { latestValues, renderState } = visualState;
      this.latestValues = latestValues;
      this.baseTarget = { ...latestValues };
      this.initialValues = props.initial ? { ...latestValues } : {};
      this.renderState = renderState;
      this.parent = parent;
      this.props = props;
      this.presenceContext = presenceContext;
      this.depth = parent ? parent.depth + 1 : 0;
      this.reducedMotionConfig = reducedMotionConfig;
      this.skipAnimationsConfig = skipAnimations;
      this.options = options;
      this.blockInitialAnimation = Boolean(blockInitialAnimation);
      this.isControllingVariants = isControllingVariants(props);
      this.isVariantNode = isVariantNode(props);
      if (this.isVariantNode) {
        this.variantChildren = /* @__PURE__ */ new Set();
      }
      this.manuallyAnimateOnMount = Boolean(parent && parent.current);
      const { willChange, ...initialMotionValues } = this.scrapeMotionValuesFromProps(props, {}, this);
      for (const key in initialMotionValues) {
        const value = initialMotionValues[key];
        if (latestValues[key] !== void 0 && isMotionValue(value)) {
          value.set(latestValues[key]);
        }
      }
    }
    mount(instance) {
      if (this.hasBeenMounted) {
        for (const key in this.initialValues) {
          this.values.get(key)?.jump(this.initialValues[key]);
          this.latestValues[key] = this.initialValues[key];
        }
      }
      this.current = instance;
      visualElementStore.set(instance, this);
      if (this.projection && !this.projection.instance) {
        this.projection.mount(instance);
      }
      if (this.parent && this.isVariantNode && !this.isControllingVariants) {
        this.removeFromVariantTree = this.parent.addVariantChild(this);
      }
      this.values.forEach((value, key) => this.bindToMotionValue(key, value));
      if (this.reducedMotionConfig === "never") {
        this.shouldReduceMotion = false;
      } else if (this.reducedMotionConfig === "always") {
        this.shouldReduceMotion = true;
      } else {
        if (!hasReducedMotionListener.current) {
          initPrefersReducedMotion();
        }
        this.shouldReduceMotion = prefersReducedMotion.current;
      }
      if (true) {
        warnOnce(this.shouldReduceMotion !== true, "You have Reduced Motion enabled on your device. Animations may not appear as expected.", "reduced-motion-disabled");
      }
      this.shouldSkipAnimations = this.skipAnimationsConfig ?? false;
      this.parent?.addChild(this);
      this.update(this.props, this.presenceContext);
      this.hasBeenMounted = true;
    }
    unmount() {
      this.projection && this.projection.unmount();
      cancelFrame(this.notifyUpdate);
      cancelFrame(this.render);
      this.valueSubscriptions.forEach((remove) => remove());
      this.valueSubscriptions.clear();
      this.removeFromVariantTree && this.removeFromVariantTree();
      this.parent?.removeChild(this);
      for (const key in this.events) {
        this.events[key].clear();
      }
      for (const key in this.features) {
        const feature = this.features[key];
        if (feature) {
          feature.unmount();
          feature.isMounted = false;
        }
      }
      this.current = null;
    }
    addChild(child) {
      this.children.add(child);
      this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set());
      this.enteringChildren.add(child);
    }
    removeChild(child) {
      this.children.delete(child);
      this.enteringChildren && this.enteringChildren.delete(child);
    }
    bindToMotionValue(key, value) {
      if (this.valueSubscriptions.has(key)) {
        this.valueSubscriptions.get(key)();
      }
      if (value.accelerate && acceleratedValues.has(key) && this.current instanceof HTMLElement) {
        const { factory, keyframes: keyframes2, times, ease: ease2, duration } = value.accelerate;
        const animation = new NativeAnimation({
          element: this.current,
          name: key,
          keyframes: keyframes2,
          times,
          ease: ease2,
          duration: secondsToMilliseconds(duration)
        });
        const cleanup = factory(animation);
        this.valueSubscriptions.set(key, () => {
          cleanup();
          animation.cancel();
        });
        return;
      }
      const valueIsTransform = transformProps.has(key);
      if (valueIsTransform && this.onBindTransform) {
        this.onBindTransform();
      }
      const removeOnChange = value.on("change", (latestValue) => {
        this.latestValues[key] = latestValue;
        this.props.onUpdate && frame.preRender(this.notifyUpdate);
        if (valueIsTransform && this.projection) {
          this.projection.isTransformDirty = true;
        }
        this.scheduleRender();
      });
      let removeSyncCheck;
      if (typeof window !== "undefined" && window.MotionCheckAppearSync) {
        removeSyncCheck = window.MotionCheckAppearSync(this, key, value);
      }
      this.valueSubscriptions.set(key, () => {
        removeOnChange();
        if (removeSyncCheck)
          removeSyncCheck();
      });
    }
    sortNodePosition(other) {
      if (!this.current || !this.sortInstanceNodePosition || this.type !== other.type) {
        return 0;
      }
      return this.sortInstanceNodePosition(this.current, other.current);
    }
    updateFeatures() {
      let key = "animation";
      for (key in featureDefinitions) {
        const featureDefinition = featureDefinitions[key];
        if (!featureDefinition)
          continue;
        const { isEnabled, Feature: FeatureConstructor } = featureDefinition;
        if (!this.features[key] && FeatureConstructor && isEnabled(this.props)) {
          this.features[key] = new FeatureConstructor(this);
        }
        if (this.features[key]) {
          const feature = this.features[key];
          if (feature.isMounted) {
            feature.update();
          } else {
            feature.mount();
            feature.isMounted = true;
          }
        }
      }
    }
    triggerBuild() {
      this.build(this.renderState, this.latestValues, this.props);
    }
    /**
     * Measure the current viewport box with or without transforms.
     * Only measures axis-aligned boxes, rotate and skew must be manually
     * removed with a re-render to work.
     */
    measureViewportBox() {
      return this.current ? this.measureInstanceViewportBox(this.current, this.props) : createBox();
    }
    getStaticValue(key) {
      return this.latestValues[key];
    }
    setStaticValue(key, value) {
      this.latestValues[key] = value;
    }
    /**
     * Update the provided props. Ensure any newly-added motion values are
     * added to our map, old ones removed, and listeners updated.
     */
    update(props, presenceContext) {
      if (props.transformTemplate || this.props.transformTemplate) {
        this.scheduleRender();
      }
      this.prevProps = this.props;
      this.props = props;
      this.prevPresenceContext = this.presenceContext;
      this.presenceContext = presenceContext;
      for (let i2 = 0; i2 < propEventHandlers.length; i2++) {
        const key = propEventHandlers[i2];
        if (this.propEventSubscriptions[key]) {
          this.propEventSubscriptions[key]();
          delete this.propEventSubscriptions[key];
        }
        const listenerName = "on" + key;
        const listener = props[listenerName];
        if (listener) {
          this.propEventSubscriptions[key] = this.on(key, listener);
        }
      }
      this.prevMotionValues = updateMotionValuesFromProps(this, this.scrapeMotionValuesFromProps(props, this.prevProps || {}, this), this.prevMotionValues);
      if (this.handleChildMotionValue) {
        this.handleChildMotionValue();
      }
    }
    getProps() {
      return this.props;
    }
    /**
     * Returns the variant definition with a given name.
     */
    getVariant(name) {
      return this.props.variants ? this.props.variants[name] : void 0;
    }
    /**
     * Returns the defined default transition on this component.
     */
    getDefaultTransition() {
      return this.props.transition;
    }
    getTransformPagePoint() {
      return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
      return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
    }
    /**
     * Add a child visual element to our set of children.
     */
    addVariantChild(child) {
      const closestVariantNode = this.getClosestVariantNode();
      if (closestVariantNode) {
        closestVariantNode.variantChildren && closestVariantNode.variantChildren.add(child);
        return () => closestVariantNode.variantChildren.delete(child);
      }
    }
    /**
     * Add a motion value and bind it to this visual element.
     */
    addValue(key, value) {
      const existingValue = this.values.get(key);
      if (value !== existingValue) {
        if (existingValue)
          this.removeValue(key);
        this.bindToMotionValue(key, value);
        this.values.set(key, value);
        this.latestValues[key] = value.get();
      }
    }
    /**
     * Remove a motion value and unbind any active subscriptions.
     */
    removeValue(key) {
      this.values.delete(key);
      const unsubscribe = this.valueSubscriptions.get(key);
      if (unsubscribe) {
        unsubscribe();
        this.valueSubscriptions.delete(key);
      }
      delete this.latestValues[key];
      this.removeValueFromRenderState(key, this.renderState);
    }
    /**
     * Check whether we have a motion value for this key
     */
    hasValue(key) {
      return this.values.has(key);
    }
    getValue(key, defaultValue) {
      if (this.props.values && this.props.values[key]) {
        return this.props.values[key];
      }
      let value = this.values.get(key);
      if (value === void 0 && defaultValue !== void 0) {
        value = motionValue(defaultValue === null ? void 0 : defaultValue, { owner: this });
        this.addValue(key, value);
      }
      return value;
    }
    /**
     * If we're trying to animate to a previously unencountered value,
     * we need to check for it in our state and as a last resort read it
     * directly from the instance (which might have performance implications).
     */
    readValue(key, target) {
      let value = this.latestValues[key] !== void 0 || !this.current ? this.latestValues[key] : this.getBaseTargetFromProps(this.props, key) ?? this.readValueFromInstance(this.current, key, this.options);
      if (value !== void 0 && value !== null) {
        if (typeof value === "string" && (isNumericalString(value) || isZeroValueString(value))) {
          value = parseFloat(value);
        } else if (!findValueType(value) && complex.test(target)) {
          value = getAnimatableNone2(key, target);
        }
        this.setBaseTarget(key, isMotionValue(value) ? value.get() : value);
      }
      return isMotionValue(value) ? value.get() : value;
    }
    /**
     * Set the base target to later animate back to. This is currently
     * only hydrated on creation and when we first read a value.
     */
    setBaseTarget(key, value) {
      this.baseTarget[key] = value;
    }
    /**
     * Find the base target for a value thats been removed from all animation
     * props.
     */
    getBaseTarget(key) {
      const { initial } = this.props;
      let valueFromInitial;
      if (typeof initial === "string" || typeof initial === "object") {
        const variant = resolveVariantFromProps(this.props, initial, this.presenceContext?.custom);
        if (variant) {
          valueFromInitial = variant[key];
        }
      }
      if (initial && valueFromInitial !== void 0) {
        return valueFromInitial;
      }
      const target = this.getBaseTargetFromProps(this.props, key);
      if (target !== void 0 && !isMotionValue(target))
        return target;
      return this.initialValues[key] !== void 0 && valueFromInitial === void 0 ? void 0 : this.baseTarget[key];
    }
    on(eventName, callback) {
      if (!this.events[eventName]) {
        this.events[eventName] = new SubscriptionManager();
      }
      return this.events[eventName].add(callback);
    }
    notify(eventName, ...args) {
      if (this.events[eventName]) {
        this.events[eventName].notify(...args);
      }
    }
    scheduleRenderMicrotask() {
      microtask.render(this.render);
    }
  };

  // node_modules/motion-dom/dist/es/render/dom/DOMVisualElement.mjs
  var DOMVisualElement = class extends VisualElement {
    constructor() {
      super(...arguments);
      this.KeyframeResolver = DOMKeyframesResolver;
    }
    sortInstanceNodePosition(a, b) {
      return a.compareDocumentPosition(b) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(props, key) {
      const style = props.style;
      return style ? style[key] : void 0;
    }
    removeValueFromRenderState(key, { vars, style }) {
      delete vars[key];
      delete style[key];
    }
    handleChildMotionValue() {
      if (this.childSubscription) {
        this.childSubscription();
        delete this.childSubscription;
      }
      const { children } = this.props;
      if (isMotionValue(children)) {
        this.childSubscription = children.on("change", (latest) => {
          if (this.current) {
            this.current.textContent = `${latest}`;
          }
        });
      }
    }
  };

  // node_modules/motion-dom/dist/es/render/Feature.mjs
  init_define_import_meta_env();
  var Feature = class {
    constructor(node) {
      this.isMounted = false;
      this.node = node;
    }
    update() {
    }
  };

  // node_modules/motion-dom/dist/es/render/html/HTMLVisualElement.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/projection/utils/measure.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/projection/geometry/conversion.mjs
  init_define_import_meta_env();
  function convertBoundingBoxToBox({ top, left, right, bottom }) {
    return {
      x: { min: left, max: right },
      y: { min: top, max: bottom }
    };
  }
  function convertBoxToBoundingBox({ x, y }) {
    return { top: y.min, right: x.max, bottom: y.max, left: x.min };
  }
  function transformBoxPoints(point, transformPoint2) {
    if (!transformPoint2)
      return point;
    const topLeft = transformPoint2({ x: point.left, y: point.top });
    const bottomRight = transformPoint2({ x: point.right, y: point.bottom });
    return {
      top: topLeft.y,
      left: topLeft.x,
      bottom: bottomRight.y,
      right: bottomRight.x
    };
  }

  // node_modules/motion-dom/dist/es/projection/geometry/delta-apply.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/projection/utils/has-transform.mjs
  init_define_import_meta_env();
  function isIdentityScale(scale2) {
    return scale2 === void 0 || scale2 === 1;
  }
  function hasScale({ scale: scale2, scaleX: scaleX2, scaleY: scaleY2 }) {
    return !isIdentityScale(scale2) || !isIdentityScale(scaleX2) || !isIdentityScale(scaleY2);
  }
  function hasTransform(values) {
    return hasScale(values) || has2DTranslate(values) || values.z || values.rotate || values.rotateX || values.rotateY || values.skewX || values.skewY;
  }
  function has2DTranslate(values) {
    return is2DTranslate(values.x) || is2DTranslate(values.y);
  }
  function is2DTranslate(value) {
    return value && value !== "0%";
  }

  // node_modules/motion-dom/dist/es/projection/geometry/delta-apply.mjs
  function scalePoint(point, scale2, originPoint) {
    const distanceFromOrigin = point - originPoint;
    const scaled = scale2 * distanceFromOrigin;
    return originPoint + scaled;
  }
  function applyPointDelta(point, translate, scale2, originPoint, boxScale) {
    if (boxScale !== void 0) {
      point = scalePoint(point, boxScale, originPoint);
    }
    return scalePoint(point, scale2, originPoint) + translate;
  }
  function applyAxisDelta(axis, translate = 0, scale2 = 1, originPoint, boxScale) {
    axis.min = applyPointDelta(axis.min, translate, scale2, originPoint, boxScale);
    axis.max = applyPointDelta(axis.max, translate, scale2, originPoint, boxScale);
  }
  function applyBoxDelta(box, { x, y }) {
    applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
    applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
  }
  var TREE_SCALE_SNAP_MIN = 0.999999999999;
  var TREE_SCALE_SNAP_MAX = 1.0000000000001;
  function applyTreeDeltas(box, treeScale, treePath, isSharedTransition = false) {
    const treeLength = treePath.length;
    if (!treeLength)
      return;
    treeScale.x = treeScale.y = 1;
    let node;
    let delta;
    for (let i2 = 0; i2 < treeLength; i2++) {
      node = treePath[i2];
      delta = node.projectionDelta;
      const { visualElement } = node.options;
      if (visualElement && visualElement.props.style && visualElement.props.style.display === "contents") {
        continue;
      }
      if (isSharedTransition && node.options.layoutScroll && node.scroll && node !== node.root) {
        translateAxis(box.x, -node.scroll.offset.x);
        translateAxis(box.y, -node.scroll.offset.y);
      }
      if (delta) {
        treeScale.x *= delta.x.scale;
        treeScale.y *= delta.y.scale;
        applyBoxDelta(box, delta);
      }
      if (isSharedTransition && hasTransform(node.latestValues)) {
        transformBox(box, node.latestValues, node.layout?.layoutBox);
      }
    }
    if (treeScale.x < TREE_SCALE_SNAP_MAX && treeScale.x > TREE_SCALE_SNAP_MIN) {
      treeScale.x = 1;
    }
    if (treeScale.y < TREE_SCALE_SNAP_MAX && treeScale.y > TREE_SCALE_SNAP_MIN) {
      treeScale.y = 1;
    }
  }
  function translateAxis(axis, distance2) {
    axis.min += distance2;
    axis.max += distance2;
  }
  function transformAxis(axis, axisTranslate, axisScale, boxScale, axisOrigin = 0.5) {
    const originPoint = mixNumber(axis.min, axis.max, axisOrigin);
    applyAxisDelta(axis, axisTranslate, axisScale, originPoint, boxScale);
  }
  function resolveAxisTranslate(value, axis) {
    if (typeof value === "string") {
      return parseFloat(value) / 100 * (axis.max - axis.min);
    }
    return value;
  }
  function transformBox(box, transform, sourceBox) {
    const resolveBox = sourceBox ?? box;
    transformAxis(box.x, resolveAxisTranslate(transform.x, resolveBox.x), transform.scaleX, transform.scale, transform.originX);
    transformAxis(box.y, resolveAxisTranslate(transform.y, resolveBox.y), transform.scaleY, transform.scale, transform.originY);
  }

  // node_modules/motion-dom/dist/es/projection/utils/measure.mjs
  function measureViewportBox(instance, transformPoint2) {
    return convertBoundingBoxToBox(transformBoxPoints(instance.getBoundingClientRect(), transformPoint2));
  }
  function measurePageBox(element, rootProjectionNode2, transformPagePoint) {
    const viewportBox = measureViewportBox(element, transformPagePoint);
    const { scroll } = rootProjectionNode2;
    if (scroll) {
      translateAxis(viewportBox.x, scroll.offset.x);
      translateAxis(viewportBox.y, scroll.offset.y);
    }
    return viewportBox;
  }

  // node_modules/motion-dom/dist/es/render/html/utils/build-styles.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/render/html/utils/build-transform.mjs
  init_define_import_meta_env();
  var translateAlias = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
  };
  var numTransforms = transformPropOrder.length;
  function buildTransform(latestValues, transform, transformTemplate) {
    let transformString = "";
    let transformIsDefault = true;
    for (let i2 = 0; i2 < numTransforms; i2++) {
      const key = transformPropOrder[i2];
      const value = latestValues[key];
      if (value === void 0)
        continue;
      let valueIsDefault = true;
      if (typeof value === "number") {
        valueIsDefault = value === (key.startsWith("scale") ? 1 : 0);
      } else {
        const parsed = parseFloat(value);
        valueIsDefault = key.startsWith("scale") ? parsed === 1 : parsed === 0;
      }
      if (!valueIsDefault || transformTemplate) {
        const valueAsType = getValueAsType(value, numberValueTypes[key]);
        if (!valueIsDefault) {
          transformIsDefault = false;
          const transformName = translateAlias[key] || key;
          transformString += `${transformName}(${valueAsType}) `;
        }
        if (transformTemplate) {
          transform[key] = valueAsType;
        }
      }
    }
    const pathRotation = latestValues.pathRotation;
    if (pathRotation) {
      transformIsDefault = false;
      transformString += `rotate(${getValueAsType(pathRotation, numberValueTypes.pathRotation)}) `;
    }
    transformString = transformString.trim();
    if (transformTemplate) {
      transformString = transformTemplate(transform, transformIsDefault ? "" : transformString);
    } else if (transformIsDefault) {
      transformString = "none";
    }
    return transformString;
  }

  // node_modules/motion-dom/dist/es/render/html/utils/build-styles.mjs
  function buildHTMLStyles(state, latestValues, transformTemplate) {
    const { style, vars, transformOrigin } = state;
    let hasTransform2 = false;
    let hasTransformOrigin = false;
    for (const key in latestValues) {
      const value = latestValues[key];
      if (transformProps.has(key)) {
        hasTransform2 = true;
        continue;
      } else if (isCSSVariableName(key)) {
        vars[key] = value;
        continue;
      } else {
        const valueAsType = getValueAsType(value, numberValueTypes[key]);
        if (key.startsWith("origin")) {
          hasTransformOrigin = true;
          transformOrigin[key] = valueAsType;
        } else {
          style[key] = valueAsType;
        }
      }
    }
    if (!latestValues.transform) {
      if (hasTransform2 || transformTemplate) {
        style.transform = buildTransform(latestValues, state.transform, transformTemplate);
      } else if (style.transform) {
        style.transform = "none";
      }
    }
    if (hasTransformOrigin) {
      const { originX = "50%", originY = "50%", originZ = 0 } = transformOrigin;
      style.transformOrigin = `${originX} ${originY} ${originZ}`;
    }
  }

  // node_modules/motion-dom/dist/es/render/html/utils/render.mjs
  init_define_import_meta_env();
  function renderHTML(element, { style, vars }, styleProp, projection) {
    const elementStyle = element.style;
    let key;
    for (key in style) {
      elementStyle[key] = style[key];
    }
    projection?.applyProjectionStyles(elementStyle, styleProp);
    for (key in vars) {
      elementStyle.setProperty(key, vars[key]);
    }
  }

  // node_modules/motion-dom/dist/es/render/html/utils/scrape-motion-values.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/render/utils/is-forced-motion-value.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/projection/styles/scale-correction.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/projection/styles/scale-border-radius.mjs
  init_define_import_meta_env();
  function pixelsToPercent(pixels, axis) {
    if (axis.max === axis.min)
      return 0;
    return pixels / (axis.max - axis.min) * 100;
  }
  var correctBorderRadius = {
    correct: (latest, node) => {
      if (!node.target)
        return latest;
      if (typeof latest === "string") {
        if (px.test(latest)) {
          latest = parseFloat(latest);
        } else {
          return latest;
        }
      }
      const x = pixelsToPercent(latest, node.target.x);
      const y = pixelsToPercent(latest, node.target.y);
      return `${x}% ${y}%`;
    }
  };

  // node_modules/motion-dom/dist/es/projection/styles/scale-box-shadow.mjs
  init_define_import_meta_env();
  var correctBoxShadow = {
    correct: (latest, { treeScale, projectionDelta }) => {
      const original = latest;
      const shadow = complex.parse(latest);
      if (shadow.length > 5)
        return original;
      const template = complex.createTransformer(latest);
      const offset = typeof shadow[0] !== "number" ? 1 : 0;
      const xScale = projectionDelta.x.scale * treeScale.x;
      const yScale = projectionDelta.y.scale * treeScale.y;
      shadow[0 + offset] /= xScale;
      shadow[1 + offset] /= yScale;
      const averageScale = mixNumber(xScale, yScale, 0.5);
      if (typeof shadow[2 + offset] === "number")
        shadow[2 + offset] /= averageScale;
      if (typeof shadow[3 + offset] === "number")
        shadow[3 + offset] /= averageScale;
      return template(shadow);
    }
  };

  // node_modules/motion-dom/dist/es/projection/styles/scale-correction.mjs
  var scaleCorrectors = {
    borderRadius: {
      ...correctBorderRadius,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius"
      ]
    },
    borderTopLeftRadius: correctBorderRadius,
    borderTopRightRadius: correctBorderRadius,
    borderBottomLeftRadius: correctBorderRadius,
    borderBottomRightRadius: correctBorderRadius,
    boxShadow: correctBoxShadow
  };

  // node_modules/motion-dom/dist/es/render/utils/is-forced-motion-value.mjs
  function isForcedMotionValue(key, { layout: layout2, layoutId }) {
    return transformProps.has(key) || key.startsWith("origin") || (layout2 || layoutId !== void 0) && (!!scaleCorrectors[key] || key === "opacity");
  }

  // node_modules/motion-dom/dist/es/render/html/utils/scrape-motion-values.mjs
  function scrapeMotionValuesFromProps(props, prevProps, visualElement) {
    const style = props.style;
    const prevStyle = prevProps?.style;
    const newValues = {};
    if (!style)
      return newValues;
    for (const key in style) {
      if (isMotionValue(style[key]) || prevStyle && isMotionValue(prevStyle[key]) || isForcedMotionValue(key, props) || visualElement?.getValue(key)?.liveStyle !== void 0) {
        newValues[key] = style[key];
      }
    }
    return newValues;
  }

  // node_modules/motion-dom/dist/es/render/html/HTMLVisualElement.mjs
  function getComputedStyle2(element) {
    return window.getComputedStyle(element);
  }
  var HTMLVisualElement = class extends DOMVisualElement {
    constructor() {
      super(...arguments);
      this.type = "html";
      this.renderInstance = renderHTML;
    }
    readValueFromInstance(instance, key) {
      if (transformProps.has(key)) {
        return this.projection?.isProjecting ? defaultTransformValue(key) : readTransformValue(instance, key);
      } else {
        const computedStyle = getComputedStyle2(instance);
        const value = (isCSSVariableName(key) ? computedStyle.getPropertyValue(key) : computedStyle[key]) || 0;
        return typeof value === "string" ? value.trim() : value;
      }
    }
    measureInstanceViewportBox(instance, { transformPagePoint }) {
      return measureViewportBox(instance, transformPagePoint);
    }
    build(renderState, latestValues, props) {
      buildHTMLStyles(renderState, latestValues, props.transformTemplate);
    }
    scrapeMotionValuesFromProps(props, prevProps, visualElement) {
      return scrapeMotionValuesFromProps(props, prevProps, visualElement);
    }
  };

  // node_modules/motion-dom/dist/es/render/svg/SVGVisualElement.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/render/svg/utils/build-attrs.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/render/svg/utils/path.mjs
  init_define_import_meta_env();
  var dashKeys = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
  };
  var camelKeys = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
  };
  function buildSVGPath(attrs, length, spacing = 1, offset = 0, useDashCase = true) {
    attrs.pathLength = 1;
    const keys = useDashCase ? dashKeys : camelKeys;
    attrs[keys.offset] = `${-offset}`;
    attrs[keys.array] = `${length} ${spacing}`;
  }

  // node_modules/motion-dom/dist/es/render/svg/utils/build-attrs.mjs
  var cssMotionPathProperties = [
    "offsetDistance",
    "offsetPath",
    "offsetRotate",
    "offsetAnchor"
  ];
  function buildSVGAttrs(state, {
    attrX,
    attrY,
    attrScale,
    pathLength,
    pathSpacing = 1,
    pathOffset = 0,
    // This is object creation, which we try to avoid per-frame.
    ...latest
  }, isSVGTag2, transformTemplate, styleProp) {
    buildHTMLStyles(state, latest, transformTemplate);
    if (isSVGTag2) {
      if (state.style.viewBox) {
        state.attrs.viewBox = state.style.viewBox;
      }
      return;
    }
    state.attrs = state.style;
    state.style = {};
    const { attrs, style } = state;
    if (attrs.transform) {
      style.transform = attrs.transform;
      delete attrs.transform;
    }
    if (style.transform || attrs.transformOrigin) {
      style.transformOrigin = attrs.transformOrigin ?? "50% 50%";
      delete attrs.transformOrigin;
    }
    if (style.transform) {
      style.transformBox = styleProp?.transformBox ?? "fill-box";
      delete attrs.transformBox;
    }
    for (const key of cssMotionPathProperties) {
      if (attrs[key] !== void 0) {
        style[key] = attrs[key];
        delete attrs[key];
      }
    }
    if (attrX !== void 0)
      attrs.x = attrX;
    if (attrY !== void 0)
      attrs.y = attrY;
    if (attrScale !== void 0)
      attrs.scale = attrScale;
    if (pathLength !== void 0) {
      buildSVGPath(attrs, pathLength, pathSpacing, pathOffset, false);
    }
  }

  // node_modules/motion-dom/dist/es/render/svg/utils/camel-case-attrs.mjs
  init_define_import_meta_env();
  var camelCaseAttributes = /* @__PURE__ */ new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust"
  ]);

  // node_modules/motion-dom/dist/es/render/svg/utils/is-svg-tag.mjs
  init_define_import_meta_env();
  var isSVGTag = (tag) => typeof tag === "string" && tag.toLowerCase() === "svg";

  // node_modules/motion-dom/dist/es/render/svg/utils/render.mjs
  init_define_import_meta_env();
  function renderSVG(element, renderState, _styleProp, projection) {
    renderHTML(element, renderState, void 0, projection);
    for (const key in renderState.attrs) {
      element.setAttribute(!camelCaseAttributes.has(key) ? camelToDash(key) : key, renderState.attrs[key]);
    }
  }

  // node_modules/motion-dom/dist/es/render/svg/utils/scrape-motion-values.mjs
  init_define_import_meta_env();
  function scrapeMotionValuesFromProps2(props, prevProps, visualElement) {
    const newValues = scrapeMotionValuesFromProps(props, prevProps, visualElement);
    for (const key in props) {
      if (isMotionValue(props[key]) || isMotionValue(prevProps[key])) {
        const targetKey = transformPropOrder.indexOf(key) !== -1 ? "attr" + key.charAt(0).toUpperCase() + key.substring(1) : key;
        newValues[targetKey] = props[key];
      }
    }
    return newValues;
  }

  // node_modules/motion-dom/dist/es/render/svg/SVGVisualElement.mjs
  var SVGVisualElement = class extends DOMVisualElement {
    constructor() {
      super(...arguments);
      this.type = "svg";
      this.isSVGTag = false;
      this.measureInstanceViewportBox = createBox;
    }
    getBaseTargetFromProps(props, key) {
      return props[key];
    }
    readValueFromInstance(instance, key) {
      if (transformProps.has(key)) {
        const defaultType = getDefaultValueType(key);
        return defaultType ? defaultType.default || 0 : 0;
      }
      key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
      return instance.getAttribute(key);
    }
    scrapeMotionValuesFromProps(props, prevProps, visualElement) {
      return scrapeMotionValuesFromProps2(props, prevProps, visualElement);
    }
    build(renderState, latestValues, props) {
      buildSVGAttrs(renderState, latestValues, this.isSVGTag, props.transformTemplate, props.style);
    }
    renderInstance(instance, renderState, styleProp, projection) {
      renderSVG(instance, renderState, styleProp, projection);
    }
    mount(instance) {
      this.isSVGTag = isSVGTag(instance.tagName);
      super.mount(instance);
    }
  };

  // node_modules/motion-dom/dist/es/render/utils/animation-state.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/render/utils/get-variant-context.mjs
  init_define_import_meta_env();
  var numVariantProps = variantProps.length;
  function getVariantContext(visualElement) {
    if (!visualElement)
      return void 0;
    if (!visualElement.isControllingVariants) {
      const context2 = visualElement.parent ? getVariantContext(visualElement.parent) || {} : {};
      if (visualElement.props.initial !== void 0) {
        context2.initial = visualElement.props.initial;
      }
      return context2;
    }
    const context = {};
    for (let i2 = 0; i2 < numVariantProps; i2++) {
      const name = variantProps[i2];
      const prop = visualElement.props[name];
      if (isVariantLabel(prop) || prop === false) {
        context[name] = prop;
      }
    }
    return context;
  }

  // node_modules/motion-dom/dist/es/render/utils/shallow-compare.mjs
  init_define_import_meta_env();
  function shallowCompare(next, prev) {
    if (!Array.isArray(prev))
      return false;
    const prevLength = prev.length;
    if (prevLength !== next.length)
      return false;
    for (let i2 = 0; i2 < prevLength; i2++) {
      if (prev[i2] !== next[i2])
        return false;
    }
    return true;
  }

  // node_modules/motion-dom/dist/es/render/utils/animation-state.mjs
  var reversePriorityOrder = [...variantPriorityOrder].reverse();
  var numAnimationTypes = variantPriorityOrder.length;
  function createAnimateFunction(visualElement) {
    return (animations2) => {
      return Promise.all(animations2.map(({ animation, options }) => animateVisualElement(visualElement, animation, options)));
    };
  }
  function createAnimationState(visualElement) {
    let animate = createAnimateFunction(visualElement);
    let state = createState();
    let isInitialRender = true;
    let wasReset = false;
    const buildResolvedTypeValues = (type) => (acc, definition) => {
      const resolved = resolveVariant(visualElement, definition, type === "exit" ? visualElement.presenceContext?.custom : void 0);
      if (resolved) {
        const { transition, transitionEnd, ...target } = resolved;
        acc = { ...acc, ...target, ...transitionEnd };
      }
      return acc;
    };
    function setAnimateFunction(makeAnimator) {
      animate = makeAnimator(visualElement);
    }
    function animateChanges(changedActiveType) {
      const { props } = visualElement;
      const context = getVariantContext(visualElement.parent) || {};
      const animations2 = [];
      const removedKeys = /* @__PURE__ */ new Set();
      let encounteredKeys = {};
      let removedVariantIndex = Infinity;
      for (let i2 = 0; i2 < numAnimationTypes; i2++) {
        const type = reversePriorityOrder[i2];
        const typeState = state[type];
        const prop = props[type] !== void 0 ? props[type] : context[type];
        const propIsVariant = isVariantLabel(prop);
        const activeDelta = type === changedActiveType ? typeState.isActive : null;
        if (activeDelta === false)
          removedVariantIndex = i2;
        let isInherited = prop === context[type] && prop !== props[type] && propIsVariant;
        if (isInherited && (isInitialRender || wasReset) && visualElement.manuallyAnimateOnMount) {
          isInherited = false;
        }
        typeState.protectedKeys = { ...encounteredKeys };
        if (
          // If it isn't active and hasn't *just* been set as inactive
          !typeState.isActive && activeDelta === null || // If we didn't and don't have any defined prop for this animation type
          !prop && !typeState.prevProp || // Or if the prop doesn't define an animation
          isAnimationControls(prop) || typeof prop === "boolean"
        ) {
          continue;
        }
        if (type === "exit" && typeState.isActive && activeDelta !== true) {
          if (typeState.prevResolvedValues) {
            encounteredKeys = {
              ...encounteredKeys,
              ...typeState.prevResolvedValues
            };
          }
          continue;
        }
        const variantDidChange = checkVariantsDidChange(typeState.prevProp, prop);
        let shouldAnimateType = variantDidChange || // If we're making this variant active, we want to always make it active
        type === changedActiveType && typeState.isActive && !isInherited && propIsVariant || // If we removed a higher-priority variant (i is in reverse order)
        i2 > removedVariantIndex && propIsVariant;
        let handledRemovedValues = false;
        const definitionList = Array.isArray(prop) ? prop : [prop];
        let resolvedValues = definitionList.reduce(buildResolvedTypeValues(type), {});
        if (activeDelta === false)
          resolvedValues = {};
        const { prevResolvedValues = {} } = typeState;
        const allKeys = {
          ...prevResolvedValues,
          ...resolvedValues
        };
        const markToAnimate = (key) => {
          shouldAnimateType = true;
          if (removedKeys.has(key)) {
            handledRemovedValues = true;
            removedKeys.delete(key);
          }
          typeState.needsAnimating[key] = true;
          const motionValue2 = visualElement.getValue(key);
          if (motionValue2)
            motionValue2.liveStyle = false;
        };
        for (const key in allKeys) {
          const next = resolvedValues[key];
          const prev = prevResolvedValues[key];
          if (encounteredKeys.hasOwnProperty(key))
            continue;
          let valueHasChanged = false;
          if (isKeyframesTarget(next) && isKeyframesTarget(prev)) {
            valueHasChanged = !shallowCompare(next, prev) || variantDidChange;
          } else {
            valueHasChanged = next !== prev;
          }
          if (valueHasChanged) {
            if (next !== void 0 && next !== null) {
              markToAnimate(key);
            } else {
              removedKeys.add(key);
            }
          } else if (next !== void 0 && removedKeys.has(key)) {
            markToAnimate(key);
          } else {
            typeState.protectedKeys[key] = true;
          }
        }
        typeState.prevProp = prop;
        typeState.prevResolvedValues = resolvedValues;
        if (typeState.isActive) {
          encounteredKeys = { ...encounteredKeys, ...resolvedValues };
        }
        if ((isInitialRender || wasReset) && visualElement.blockInitialAnimation) {
          shouldAnimateType = false;
        }
        const willAnimateViaParent = isInherited && variantDidChange;
        const needsAnimating = !willAnimateViaParent || handledRemovedValues;
        if (shouldAnimateType && needsAnimating) {
          animations2.push(...definitionList.map((animation) => {
            const options = { type };
            if (typeof animation === "string" && (isInitialRender || wasReset) && !willAnimateViaParent && visualElement.manuallyAnimateOnMount && visualElement.parent) {
              const { parent } = visualElement;
              const parentVariant = resolveVariant(parent, animation);
              if (parent.enteringChildren && parentVariant) {
                const { delayChildren } = parentVariant.transition || {};
                options.delay = calcChildStagger(parent.enteringChildren, visualElement, delayChildren);
              }
            }
            return {
              animation,
              options
            };
          }));
        }
      }
      if (removedKeys.size) {
        const fallbackAnimation = {};
        if (typeof props.initial !== "boolean") {
          const initialTransition = resolveVariant(visualElement, Array.isArray(props.initial) ? props.initial[0] : props.initial);
          if (initialTransition && initialTransition.transition) {
            fallbackAnimation.transition = initialTransition.transition;
          }
        }
        removedKeys.forEach((key) => {
          const fallbackTarget = visualElement.getBaseTarget(key);
          const motionValue2 = visualElement.getValue(key);
          if (motionValue2)
            motionValue2.liveStyle = true;
          fallbackAnimation[key] = fallbackTarget ?? null;
        });
        animations2.push({ animation: fallbackAnimation });
      }
      let shouldAnimate = Boolean(animations2.length);
      if (isInitialRender && (props.initial === false || props.initial === props.animate) && !visualElement.manuallyAnimateOnMount) {
        shouldAnimate = false;
      }
      isInitialRender = false;
      wasReset = false;
      return shouldAnimate ? animate(animations2) : Promise.resolve();
    }
    function setActive(type, isActive) {
      if (state[type].isActive === isActive)
        return Promise.resolve();
      visualElement.variantChildren?.forEach((child) => child.animationState?.setActive(type, isActive));
      state[type].isActive = isActive;
      const animations2 = animateChanges(type);
      for (const key in state) {
        state[key].protectedKeys = {};
      }
      return animations2;
    }
    return {
      animateChanges,
      setActive,
      setAnimateFunction,
      getState: () => state,
      reset: () => {
        state = createState();
        wasReset = true;
      }
    };
  }
  function checkVariantsDidChange(prev, next) {
    if (typeof next === "string") {
      return next !== prev;
    } else if (Array.isArray(next)) {
      return !shallowCompare(next, prev);
    }
    return false;
  }
  function createTypeState(isActive = false) {
    return {
      isActive,
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {}
    };
  }
  function createState() {
    return {
      animate: createTypeState(true),
      whileInView: createTypeState(),
      whileHover: createTypeState(),
      whileTap: createTypeState(),
      whileDrag: createTypeState(),
      whileFocus: createTypeState(),
      exit: createTypeState()
    };
  }

  // node_modules/motion-dom/dist/es/projection/geometry/copy.mjs
  init_define_import_meta_env();
  function copyAxisInto(axis, originAxis) {
    axis.min = originAxis.min;
    axis.max = originAxis.max;
  }
  function copyBoxInto(box, originBox) {
    copyAxisInto(box.x, originBox.x);
    copyAxisInto(box.y, originBox.y);
  }
  function copyAxisDeltaInto(delta, originDelta) {
    delta.translate = originDelta.translate;
    delta.scale = originDelta.scale;
    delta.originPoint = originDelta.originPoint;
    delta.origin = originDelta.origin;
  }

  // node_modules/motion-dom/dist/es/projection/geometry/delta-calc.mjs
  init_define_import_meta_env();
  var SCALE_PRECISION = 1e-4;
  var SCALE_MIN = 1 - SCALE_PRECISION;
  var SCALE_MAX = 1 + SCALE_PRECISION;
  var TRANSLATE_PRECISION = 0.01;
  var TRANSLATE_MIN = 0 - TRANSLATE_PRECISION;
  var TRANSLATE_MAX = 0 + TRANSLATE_PRECISION;
  function calcLength(axis) {
    return axis.max - axis.min;
  }
  function isNear(value, target, maxDistance) {
    return Math.abs(value - target) <= maxDistance;
  }
  function calcAxisDelta(delta, source, target, origin = 0.5) {
    delta.origin = origin;
    delta.originPoint = mixNumber(source.min, source.max, delta.origin);
    delta.scale = calcLength(target) / calcLength(source);
    delta.translate = mixNumber(target.min, target.max, delta.origin) - delta.originPoint;
    if (delta.scale >= SCALE_MIN && delta.scale <= SCALE_MAX || isNaN(delta.scale)) {
      delta.scale = 1;
    }
    if (delta.translate >= TRANSLATE_MIN && delta.translate <= TRANSLATE_MAX || isNaN(delta.translate)) {
      delta.translate = 0;
    }
  }
  function calcBoxDelta(delta, source, target, origin) {
    calcAxisDelta(delta.x, source.x, target.x, origin ? origin.originX : void 0);
    calcAxisDelta(delta.y, source.y, target.y, origin ? origin.originY : void 0);
  }
  function calcRelativeAxis(target, relative, parent, anchor = 0) {
    const anchorPoint = anchor ? mixNumber(parent.min, parent.max, anchor) : parent.min;
    target.min = anchorPoint + relative.min;
    target.max = target.min + calcLength(relative);
  }
  function calcRelativeBox(target, relative, parent, anchor) {
    calcRelativeAxis(target.x, relative.x, parent.x, anchor?.x);
    calcRelativeAxis(target.y, relative.y, parent.y, anchor?.y);
  }
  function calcRelativeAxisPosition(target, layout2, parent, anchor = 0) {
    const anchorPoint = anchor ? mixNumber(parent.min, parent.max, anchor) : parent.min;
    target.min = layout2.min - anchorPoint;
    target.max = target.min + calcLength(layout2);
  }
  function calcRelativePosition(target, layout2, parent, anchor) {
    calcRelativeAxisPosition(target.x, layout2.x, parent.x, anchor?.x);
    calcRelativeAxisPosition(target.y, layout2.y, parent.y, anchor?.y);
  }

  // node_modules/motion-dom/dist/es/projection/geometry/delta-remove.mjs
  init_define_import_meta_env();
  function removePointDelta(point, translate, scale2, originPoint, boxScale) {
    point -= translate;
    point = scalePoint(point, 1 / scale2, originPoint);
    if (boxScale !== void 0) {
      point = scalePoint(point, 1 / boxScale, originPoint);
    }
    return point;
  }
  function removeAxisDelta(axis, translate = 0, scale2 = 1, origin = 0.5, boxScale, originAxis = axis, sourceAxis = axis) {
    if (percent.test(translate)) {
      translate = parseFloat(translate);
      const relativeProgress = mixNumber(sourceAxis.min, sourceAxis.max, translate / 100);
      translate = relativeProgress - sourceAxis.min;
    }
    if (typeof translate !== "number")
      return;
    let originPoint = mixNumber(originAxis.min, originAxis.max, origin);
    if (axis === originAxis)
      originPoint -= translate;
    axis.min = removePointDelta(axis.min, translate, scale2, originPoint, boxScale);
    axis.max = removePointDelta(axis.max, translate, scale2, originPoint, boxScale);
  }
  function removeAxisTransforms(axis, transforms, [key, scaleKey, originKey], origin, sourceAxis) {
    removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale, origin, sourceAxis);
  }
  var xKeys = ["x", "scaleX", "originX"];
  var yKeys = ["y", "scaleY", "originY"];
  function removeBoxTransforms(box, transforms, originBox, sourceBox) {
    removeAxisTransforms(box.x, transforms, xKeys, originBox ? originBox.x : void 0, sourceBox ? sourceBox.x : void 0);
    removeAxisTransforms(box.y, transforms, yKeys, originBox ? originBox.y : void 0, sourceBox ? sourceBox.y : void 0);
  }

  // node_modules/motion-dom/dist/es/projection/geometry/utils.mjs
  init_define_import_meta_env();
  function isAxisDeltaZero(delta) {
    return delta.translate === 0 && delta.scale === 1;
  }
  function isDeltaZero(delta) {
    return isAxisDeltaZero(delta.x) && isAxisDeltaZero(delta.y);
  }
  function axisEquals(a, b) {
    return a.min === b.min && a.max === b.max;
  }
  function boxEquals(a, b) {
    return axisEquals(a.x, b.x) && axisEquals(a.y, b.y);
  }
  function axisEqualsRounded(a, b) {
    return Math.round(a.min) === Math.round(b.min) && Math.round(a.max) === Math.round(b.max);
  }
  function boxEqualsRounded(a, b) {
    return axisEqualsRounded(a.x, b.x) && axisEqualsRounded(a.y, b.y);
  }
  function aspectRatio(box) {
    return calcLength(box.x) / calcLength(box.y);
  }
  function axisDeltaEquals(a, b) {
    return a.translate === b.translate && a.scale === b.scale && a.originPoint === b.originPoint;
  }

  // node_modules/motion-dom/dist/es/projection/utils/each-axis.mjs
  init_define_import_meta_env();
  function eachAxis(callback) {
    return [callback("x"), callback("y")];
  }

  // node_modules/motion-dom/dist/es/projection/styles/transform.mjs
  init_define_import_meta_env();
  function buildProjectionTransform(delta, treeScale, latestTransform) {
    let transform = "";
    const xTranslate = delta.x.translate / treeScale.x;
    const yTranslate = delta.y.translate / treeScale.y;
    const zTranslate = latestTransform?.z || 0;
    if (xTranslate || yTranslate || zTranslate) {
      transform = `translate3d(${xTranslate}px, ${yTranslate}px, ${zTranslate}px) `;
    }
    if (treeScale.x !== 1 || treeScale.y !== 1) {
      transform += `scale(${1 / treeScale.x}, ${1 / treeScale.y}) `;
    }
    if (latestTransform) {
      const { transformPerspective, rotate: rotate2, pathRotation, rotateX, rotateY, skewX, skewY } = latestTransform;
      if (transformPerspective)
        transform = `perspective(${transformPerspective}px) ${transform}`;
      if (rotate2)
        transform += `rotate(${rotate2}deg) `;
      if (pathRotation)
        transform += `rotate(${pathRotation}deg) `;
      if (rotateX)
        transform += `rotateX(${rotateX}deg) `;
      if (rotateY)
        transform += `rotateY(${rotateY}deg) `;
      if (skewX)
        transform += `skewX(${skewX}deg) `;
      if (skewY)
        transform += `skewY(${skewY}deg) `;
    }
    const elementScaleX = delta.x.scale * treeScale.x;
    const elementScaleY = delta.y.scale * treeScale.y;
    if (elementScaleX !== 1 || elementScaleY !== 1) {
      transform += `scale(${elementScaleX}, ${elementScaleY})`;
    }
    return transform || "none";
  }

  // node_modules/motion-dom/dist/es/projection/animation/mix-values.mjs
  init_define_import_meta_env();
  var borderLabels = [
    "borderTopLeftRadius",
    "borderTopRightRadius",
    "borderBottomLeftRadius",
    "borderBottomRightRadius"
  ];
  var numBorders = borderLabels.length;
  var asNumber = (value) => typeof value === "string" ? parseFloat(value) : value;
  var isPx = (value) => typeof value === "number" || px.test(value);
  function mixValues(target, follow, lead, progress2, shouldCrossfadeOpacity, isOnlyMember) {
    if (shouldCrossfadeOpacity) {
      target.opacity = mixNumber(0, lead.opacity ?? 1, easeCrossfadeIn(progress2));
      target.opacityExit = mixNumber(follow.opacity ?? 1, 0, easeCrossfadeOut(progress2));
    } else if (isOnlyMember) {
      target.opacity = mixNumber(follow.opacity ?? 1, lead.opacity ?? 1, progress2);
    }
    for (let i2 = 0; i2 < numBorders; i2++) {
      const borderLabel = borderLabels[i2];
      let followRadius = getRadius(follow, borderLabel);
      let leadRadius = getRadius(lead, borderLabel);
      if (followRadius === void 0 && leadRadius === void 0)
        continue;
      followRadius || (followRadius = 0);
      leadRadius || (leadRadius = 0);
      const canMix = followRadius === 0 || leadRadius === 0 || isPx(followRadius) === isPx(leadRadius);
      if (canMix) {
        target[borderLabel] = Math.max(mixNumber(asNumber(followRadius), asNumber(leadRadius), progress2), 0);
        if (percent.test(leadRadius) || percent.test(followRadius)) {
          target[borderLabel] += "%";
        }
      } else {
        target[borderLabel] = leadRadius;
      }
    }
    if (follow.rotate || lead.rotate) {
      target.rotate = mixNumber(follow.rotate || 0, lead.rotate || 0, progress2);
    }
  }
  function getRadius(values, radiusName) {
    return values[radiusName] !== void 0 ? values[radiusName] : values.borderRadius;
  }
  var easeCrossfadeIn = /* @__PURE__ */ compress(0, 0.5, circOut);
  var easeCrossfadeOut = /* @__PURE__ */ compress(0.5, 0.95, noop);
  function compress(min, max, easing) {
    return (p) => {
      if (p < min)
        return 0;
      if (p > max)
        return 1;
      return easing(progress(min, max, p));
    };
  }

  // node_modules/motion-dom/dist/es/animation/animate/single-value.mjs
  init_define_import_meta_env();
  function animateSingleValue(value, keyframes2, options) {
    const motionValue$1 = isMotionValue(value) ? value : motionValue(value);
    motionValue$1.start(animateMotionValue("", motionValue$1, keyframes2, options));
    return motionValue$1.animation;
  }

  // node_modules/motion-dom/dist/es/events/add-dom-event.mjs
  init_define_import_meta_env();
  function addDomEvent(target, eventName, handler, options = { passive: true }) {
    target.addEventListener(eventName, handler, options);
    return () => target.removeEventListener(eventName, handler);
  }

  // node_modules/motion-dom/dist/es/projection/utils/compare-by-depth.mjs
  init_define_import_meta_env();
  var compareByDepth = (a, b) => a.depth - b.depth;

  // node_modules/motion-dom/dist/es/projection/utils/flat-tree.mjs
  init_define_import_meta_env();
  var FlatTree = class {
    constructor() {
      this.children = [];
      this.isDirty = false;
    }
    add(child) {
      addUniqueItem(this.children, child);
      this.isDirty = true;
    }
    remove(child) {
      removeItem(this.children, child);
      this.isDirty = true;
    }
    forEach(callback) {
      this.isDirty && this.children.sort(compareByDepth);
      this.isDirty = false;
      this.children.forEach(callback);
    }
  };

  // node_modules/motion-dom/dist/es/utils/delay.mjs
  init_define_import_meta_env();
  function delay(callback, timeout) {
    const start = time.now();
    const checkElapsed = ({ timestamp }) => {
      const elapsed = timestamp - start;
      if (elapsed >= timeout) {
        cancelFrame(checkElapsed);
        callback(elapsed - timeout);
      }
    };
    frame.setup(checkElapsed, true);
    return () => cancelFrame(checkElapsed);
  }

  // node_modules/motion-dom/dist/es/value/utils/resolve-motion-value.mjs
  init_define_import_meta_env();
  function resolveMotionValue(value) {
    return isMotionValue(value) ? value.get() : value;
  }

  // node_modules/motion-dom/dist/es/projection/node/create-projection-node.mjs
  init_define_import_meta_env();

  // node_modules/motion-dom/dist/es/projection/shared/stack.mjs
  init_define_import_meta_env();
  var NodeStack = class {
    constructor() {
      this.members = [];
    }
    add(node) {
      addUniqueItem(this.members, node);
      for (let i2 = this.members.length - 1; i2 >= 0; i2--) {
        const member = this.members[i2];
        if (member === node || member === this.lead || member === this.prevLead)
          continue;
        const inst = member.instance;
        if ((!inst || inst.isConnected === false) && !member.snapshot) {
          removeItem(this.members, member);
          member.unmount();
        }
      }
      node.scheduleRender();
    }
    remove(node) {
      removeItem(this.members, node);
      if (node === this.prevLead)
        this.prevLead = void 0;
      if (node === this.lead) {
        const prevLead = this.members[this.members.length - 1];
        if (prevLead)
          this.promote(prevLead);
      }
    }
    relegate(node) {
      for (let i2 = this.members.indexOf(node) - 1; i2 >= 0; i2--) {
        const member = this.members[i2];
        if (member.isPresent !== false && member.instance?.isConnected !== false) {
          this.promote(member);
          return true;
        }
      }
      return false;
    }
    promote(node, preserveFollowOpacity) {
      const prevLead = this.lead;
      if (node === prevLead)
        return;
      this.prevLead = prevLead;
      this.lead = node;
      node.show();
      if (prevLead) {
        prevLead.updateSnapshot();
        node.scheduleRender();
        const { layoutDependency: prevDep } = prevLead.options;
        const { layoutDependency: nextDep } = node.options;
        if (prevDep === void 0 || prevDep !== nextDep) {
          node.resumeFrom = prevLead;
          if (preserveFollowOpacity)
            prevLead.preserveOpacity = true;
          if (prevLead.snapshot) {
            node.snapshot = prevLead.snapshot;
            node.snapshot.latestValues = prevLead.animationValues || prevLead.latestValues;
          }
          if (node.root?.isUpdating)
            node.isLayoutDirty = true;
        }
        if (node.options.crossfade === false)
          prevLead.hide();
      }
    }
    exitAnimationComplete() {
      this.members.forEach((member) => {
        member.options.onExitComplete?.();
        member.resumingFrom?.options.onExitComplete?.();
      });
    }
    scheduleRender() {
      this.members.forEach((member) => member.instance && member.scheduleRender(false));
    }
    removeLeadSnapshot() {
      if (this.lead?.snapshot)
        this.lead.snapshot = void 0;
    }
  };

  // node_modules/motion-dom/dist/es/projection/node/state.mjs
  init_define_import_meta_env();
  var globalProjectionState = {
    /**
     * Global flag as to whether the tree has animated since the last time
     * we resized the window
     */
    hasAnimatedSinceResize: true,
    /**
     * We set this to true once, on the first update. Any nodes added to the tree beyond that
     * update will be given a `data-projection-id` attribute.
     */
    hasEverUpdated: false
  };

  // node_modules/motion-dom/dist/es/projection/node/create-projection-node.mjs
  var metrics = {
    nodes: 0,
    calculatedTargetDeltas: 0,
    calculatedProjections: 0
  };
  var transformAxes = ["", "X", "Y", "Z"];
  var animationTarget = 1e3;
  var id = 0;
  function resetDistortingTransform(key, visualElement, values, sharedAnimationValues) {
    const { latestValues } = visualElement;
    if (latestValues[key]) {
      values[key] = latestValues[key];
      visualElement.setStaticValue(key, 0);
      if (sharedAnimationValues) {
        sharedAnimationValues[key] = 0;
      }
    }
  }
  function cancelTreeOptimisedTransformAnimations(projectionNode) {
    projectionNode.hasCheckedOptimisedAppear = true;
    if (projectionNode.root === projectionNode)
      return;
    const { visualElement } = projectionNode.options;
    if (!visualElement)
      return;
    const appearId = getOptimisedAppearId(visualElement);
    if (window.MotionHasOptimisedAnimation(appearId, "transform")) {
      const { layout: layout2, layoutId } = projectionNode.options;
      window.MotionCancelOptimisedAnimation(appearId, "transform", frame, !(layout2 || layoutId));
    }
    const { parent } = projectionNode;
    if (parent && !parent.hasCheckedOptimisedAppear) {
      cancelTreeOptimisedTransformAnimations(parent);
    }
  }
  function createProjectionNode({ attachResizeListener, defaultParent, measureScroll, checkIsScrollRoot, resetTransform }) {
    return class ProjectionNode {
      constructor(latestValues = {}, parent = defaultParent?.()) {
        this.id = id++;
        this.animationId = 0;
        this.animationCommitId = 0;
        this.children = /* @__PURE__ */ new Set();
        this.options = {};
        this.isTreeAnimating = false;
        this.isAnimationBlocked = false;
        this.isLayoutDirty = false;
        this.isProjectionDirty = false;
        this.isSharedProjectionDirty = false;
        this.isTransformDirty = false;
        this.updateManuallyBlocked = false;
        this.updateBlockedByResize = false;
        this.isUpdating = false;
        this.isSVG = false;
        this.needsReset = false;
        this.shouldResetTransform = false;
        this.hasCheckedOptimisedAppear = false;
        this.treeScale = { x: 1, y: 1 };
        this.eventHandlers = /* @__PURE__ */ new Map();
        this.hasTreeAnimated = false;
        this.layoutVersion = 0;
        this.updateScheduled = false;
        this.scheduleUpdate = () => this.update();
        this.projectionUpdateScheduled = false;
        this.checkUpdateFailed = () => {
          if (this.isUpdating) {
            this.isUpdating = false;
            this.clearAllSnapshots();
          }
        };
        this.updateProjection = () => {
          this.projectionUpdateScheduled = false;
          if (statsBuffer.value) {
            metrics.nodes = metrics.calculatedTargetDeltas = metrics.calculatedProjections = 0;
          }
          this.nodes.forEach(propagateDirtyNodes);
          this.nodes.forEach(resolveTargetDelta);
          this.nodes.forEach(calcProjection);
          this.nodes.forEach(cleanDirtyNodes);
          if (statsBuffer.addProjectionMetrics) {
            statsBuffer.addProjectionMetrics(metrics);
          }
        };
        this.resolvedRelativeTargetAt = 0;
        this.linkedParentVersion = 0;
        this.hasProjected = false;
        this.isVisible = true;
        this.animationProgress = 0;
        this.sharedNodes = /* @__PURE__ */ new Map();
        this.latestValues = latestValues;
        this.root = parent ? parent.root || parent : this;
        this.path = parent ? [...parent.path, parent] : [];
        this.parent = parent;
        this.depth = parent ? parent.depth + 1 : 0;
        for (let i2 = 0; i2 < this.path.length; i2++) {
          this.path[i2].shouldResetTransform = true;
        }
        if (this.root === this)
          this.nodes = new FlatTree();
      }
      addEventListener(name, handler) {
        if (!this.eventHandlers.has(name)) {
          this.eventHandlers.set(name, new SubscriptionManager());
        }
        return this.eventHandlers.get(name).add(handler);
      }
      notifyListeners(name, ...args) {
        const subscriptionManager = this.eventHandlers.get(name);
        subscriptionManager && subscriptionManager.notify(...args);
      }
      hasListeners(name) {
        return this.eventHandlers.has(name);
      }
      /**
       * Lifecycles
       */
      mount(instance) {
        if (this.instance)
          return;
        this.isSVG = isSVGElement(instance) && !isSVGSVGElement(instance);
        this.instance = instance;
        const { layoutId, layout: layout2, visualElement } = this.options;
        if (visualElement && !visualElement.current) {
          visualElement.mount(instance);
        }
        this.root.nodes.add(this);
        this.parent && this.parent.children.add(this);
        if (this.root.hasTreeAnimated && (layout2 || layoutId)) {
          this.isLayoutDirty = true;
        }
        if (attachResizeListener) {
          let cancelDelay;
          let innerWidth = 0;
          const resizeUnblockUpdate = () => this.root.updateBlockedByResize = false;
          frame.read(() => {
            innerWidth = window.innerWidth;
          });
          attachResizeListener(instance, () => {
            const newInnerWidth = window.innerWidth;
            if (newInnerWidth === innerWidth)
              return;
            innerWidth = newInnerWidth;
            this.root.updateBlockedByResize = true;
            cancelDelay && cancelDelay();
            cancelDelay = delay(resizeUnblockUpdate, 250);
            if (globalProjectionState.hasAnimatedSinceResize) {
              globalProjectionState.hasAnimatedSinceResize = false;
              this.nodes.forEach(finishAnimation);
            }
          });
        }
        if (layoutId) {
          this.root.registerSharedNode(layoutId, this);
        }
        if (this.options.animate !== false && visualElement && (layoutId || layout2)) {
          this.addEventListener("didUpdate", ({ delta, hasLayoutChanged, hasRelativeLayoutChanged, layout: newLayout }) => {
            if (this.isTreeAnimationBlocked()) {
              this.target = void 0;
              this.relativeTarget = void 0;
              return;
            }
            const layoutTransition = this.options.transition || visualElement.getDefaultTransition() || defaultLayoutTransition;
            const { onLayoutAnimationStart, onLayoutAnimationComplete } = visualElement.getProps();
            const hasTargetChanged = !this.targetLayout || !boxEqualsRounded(this.targetLayout, newLayout);
            const hasOnlyRelativeTargetChanged = !hasLayoutChanged && hasRelativeLayoutChanged;
            if (this.options.layoutRoot || this.resumeFrom || hasOnlyRelativeTargetChanged || hasLayoutChanged && (hasTargetChanged || !this.currentAnimation)) {
              if (this.resumeFrom) {
                this.resumingFrom = this.resumeFrom;
                this.resumingFrom.resumingFrom = void 0;
              }
              const animationOptions = {
                ...getValueTransition(layoutTransition, "layout"),
                onPlay: onLayoutAnimationStart,
                onComplete: onLayoutAnimationComplete
              };
              if (visualElement.shouldReduceMotion || this.options.layoutRoot) {
                animationOptions.delay = 0;
                animationOptions.type = false;
              }
              this.startAnimation(animationOptions);
              this.setAnimationOrigin(delta, hasOnlyRelativeTargetChanged, animationOptions.path);
            } else {
              if (!hasLayoutChanged) {
                finishAnimation(this);
              }
              if (this.isLead() && this.options.onExitComplete) {
                this.options.onExitComplete();
              }
            }
            this.targetLayout = newLayout;
          });
        }
      }
      unmount() {
        this.options.layoutId && this.willUpdate();
        this.root.nodes.remove(this);
        const stack = this.getStack();
        stack && stack.remove(this);
        this.parent && this.parent.children.delete(this);
        this.instance = void 0;
        this.eventHandlers.clear();
        cancelFrame(this.updateProjection);
      }
      // only on the root
      blockUpdate() {
        this.updateManuallyBlocked = true;
      }
      unblockUpdate() {
        this.updateManuallyBlocked = false;
      }
      isUpdateBlocked() {
        return this.updateManuallyBlocked || this.updateBlockedByResize;
      }
      isTreeAnimationBlocked() {
        return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || false;
      }
      // Note: currently only running on root node
      startUpdate() {
        if (this.isUpdateBlocked())
          return;
        this.isUpdating = true;
        this.nodes && this.nodes.forEach(resetSkewAndRotation);
        this.animationId++;
      }
      getTransformTemplate() {
        const { visualElement } = this.options;
        return visualElement && visualElement.getProps().transformTemplate;
      }
      willUpdate(shouldNotifyListeners = true) {
        this.root.hasTreeAnimated = true;
        if (this.root.isUpdateBlocked()) {
          this.options.onExitComplete && this.options.onExitComplete();
          return;
        }
        if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear) {
          cancelTreeOptimisedTransformAnimations(this);
        }
        !this.root.isUpdating && this.root.startUpdate();
        if (this.isLayoutDirty)
          return;
        this.isLayoutDirty = true;
        for (let i2 = 0; i2 < this.path.length; i2++) {
          const node = this.path[i2];
          node.shouldResetTransform = true;
          if (typeof node.latestValues.x === "string" || typeof node.latestValues.y === "string") {
            node.isLayoutDirty = true;
          }
          node.updateScroll("snapshot");
          if (node.options.layoutRoot) {
            node.willUpdate(false);
          }
        }
        const { layoutId, layout: layout2 } = this.options;
        if (layoutId === void 0 && !layout2)
          return;
        const transformTemplate = this.getTransformTemplate();
        this.prevTransformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : void 0;
        this.updateSnapshot();
        shouldNotifyListeners && this.notifyListeners("willUpdate");
      }
      update() {
        this.updateScheduled = false;
        const updateWasBlocked = this.isUpdateBlocked();
        if (updateWasBlocked) {
          const wasBlockedByResize = this.updateBlockedByResize;
          this.unblockUpdate();
          this.updateBlockedByResize = false;
          this.clearAllSnapshots();
          if (wasBlockedByResize) {
            this.nodes.forEach(forceLayoutMeasure);
          }
          this.nodes.forEach(clearMeasurements);
          return;
        }
        if (this.animationId <= this.animationCommitId) {
          this.nodes.forEach(clearIsLayoutDirty);
          return;
        }
        this.animationCommitId = this.animationId;
        if (!this.isUpdating) {
          this.nodes.forEach(clearIsLayoutDirty);
        } else {
          this.isUpdating = false;
          this.nodes.forEach(ensureDraggedNodesSnapshotted);
          this.nodes.forEach(resetTransformStyle);
          this.nodes.forEach(updateLayout);
          this.nodes.forEach(notifyLayoutUpdate);
        }
        this.clearAllSnapshots();
        const now2 = time.now();
        frameData.delta = clamp(0, 1e3 / 60, now2 - frameData.timestamp);
        frameData.timestamp = now2;
        frameData.isProcessing = true;
        frameSteps.update.process(frameData);
        frameSteps.preRender.process(frameData);
        frameSteps.render.process(frameData);
        frameData.isProcessing = false;
      }
      didUpdate() {
        if (!this.updateScheduled) {
          this.updateScheduled = true;
          microtask.read(this.scheduleUpdate);
        }
      }
      clearAllSnapshots() {
        this.nodes.forEach(clearSnapshot);
        this.sharedNodes.forEach(removeLeadSnapshots);
      }
      scheduleUpdateProjection() {
        if (!this.projectionUpdateScheduled) {
          this.projectionUpdateScheduled = true;
          frame.preRender(this.updateProjection, false, true);
        }
      }
      scheduleCheckAfterUnmount() {
        frame.postRender(() => {
          if (this.isLayoutDirty) {
            this.root.didUpdate();
          } else {
            this.root.checkUpdateFailed();
          }
        });
      }
      /**
       * Update measurements
       */
      updateSnapshot() {
        if (this.snapshot || !this.instance)
          return;
        this.snapshot = this.measure();
        if (this.snapshot && !calcLength(this.snapshot.measuredBox.x) && !calcLength(this.snapshot.measuredBox.y)) {
          this.snapshot = void 0;
        }
      }
      updateLayout() {
        if (!this.instance)
          return;
        this.updateScroll();
        if (!(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty) {
          return;
        }
        if (this.resumeFrom && !this.resumeFrom.instance) {
          for (let i2 = 0; i2 < this.path.length; i2++) {
            const node = this.path[i2];
            node.updateScroll();
          }
        }
        const prevLayout = this.layout;
        this.layout = this.measure(false);
        this.layoutVersion++;
        if (!this.layoutCorrected)
          this.layoutCorrected = createBox();
        this.isLayoutDirty = false;
        this.projectionDelta = void 0;
        this.notifyListeners("measure", this.layout.layoutBox);
        const { visualElement } = this.options;
        visualElement && visualElement.notify("LayoutMeasure", this.layout.layoutBox, prevLayout ? prevLayout.layoutBox : void 0);
      }
      updateScroll(phase = "measure") {
        let needsMeasurement = Boolean(this.options.layoutScroll && this.instance);
        if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === phase) {
          needsMeasurement = false;
        }
        if (needsMeasurement && this.instance) {
          const isRoot = checkIsScrollRoot(this.instance);
          this.scroll = {
            animationId: this.root.animationId,
            phase,
            isRoot,
            offset: measureScroll(this.instance),
            wasRoot: this.scroll ? this.scroll.isRoot : isRoot
          };
        }
      }
      resetTransform() {
        if (!resetTransform)
          return;
        const isResetRequested = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout;
        const hasProjection = this.projectionDelta && !isDeltaZero(this.projectionDelta);
        const transformTemplate = this.getTransformTemplate();
        const transformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : void 0;
        const transformTemplateHasChanged = transformTemplateValue !== this.prevTransformTemplateValue;
        if (isResetRequested && this.instance && (hasProjection || hasTransform(this.latestValues) || transformTemplateHasChanged)) {
          resetTransform(this.instance, transformTemplateValue);
          this.shouldResetTransform = false;
          this.scheduleRender();
        }
      }
      measure(removeTransform = true) {
        const pageBox = this.measurePageBox();
        let layoutBox = this.removeElementScroll(pageBox);
        if (removeTransform) {
          layoutBox = this.removeTransform(layoutBox);
        }
        roundBox(layoutBox);
        return {
          animationId: this.root.animationId,
          measuredBox: pageBox,
          layoutBox,
          latestValues: {},
          source: this.id
        };
      }
      measurePageBox() {
        const { visualElement } = this.options;
        if (!visualElement)
          return createBox();
        const box = visualElement.measureViewportBox();
        const wasInScrollRoot = this.scroll?.wasRoot || this.path.some(checkNodeWasScrollRoot);
        if (!wasInScrollRoot) {
          const { scroll } = this.root;
          if (scroll) {
            translateAxis(box.x, scroll.offset.x);
            translateAxis(box.y, scroll.offset.y);
          }
        }
        return box;
      }
      removeElementScroll(box) {
        const boxWithoutScroll = createBox();
        copyBoxInto(boxWithoutScroll, box);
        if (this.scroll?.wasRoot) {
          return boxWithoutScroll;
        }
        for (let i2 = 0; i2 < this.path.length; i2++) {
          const node = this.path[i2];
          const { scroll, options } = node;
          if (node !== this.root && scroll && options.layoutScroll) {
            if (scroll.wasRoot) {
              copyBoxInto(boxWithoutScroll, box);
            }
            translateAxis(boxWithoutScroll.x, scroll.offset.x);
            translateAxis(boxWithoutScroll.y, scroll.offset.y);
          }
        }
        return boxWithoutScroll;
      }
      applyTransform(box, transformOnly = false, output) {
        const withTransforms = output || createBox();
        copyBoxInto(withTransforms, box);
        for (let i2 = 0; i2 < this.path.length; i2++) {
          const node = this.path[i2];
          if (!transformOnly && node.options.layoutScroll && node.scroll && node !== node.root) {
            translateAxis(withTransforms.x, -node.scroll.offset.x);
            translateAxis(withTransforms.y, -node.scroll.offset.y);
          }
          if (!hasTransform(node.latestValues))
            continue;
          transformBox(withTransforms, node.latestValues, node.layout?.layoutBox);
        }
        if (hasTransform(this.latestValues)) {
          transformBox(withTransforms, this.latestValues, this.layout?.layoutBox);
        }
        return withTransforms;
      }
      removeTransform(box) {
        const boxWithoutTransform = createBox();
        copyBoxInto(boxWithoutTransform, box);
        for (let i2 = 0; i2 < this.path.length; i2++) {
          const node = this.path[i2];
          if (!hasTransform(node.latestValues))
            continue;
          let sourceBox;
          if (node.instance) {
            hasScale(node.latestValues) && node.updateSnapshot();
            sourceBox = createBox();
            copyBoxInto(sourceBox, node.measurePageBox());
          }
          removeBoxTransforms(boxWithoutTransform, node.latestValues, node.snapshot?.layoutBox, sourceBox);
        }
        if (hasTransform(this.latestValues)) {
          removeBoxTransforms(boxWithoutTransform, this.latestValues);
        }
        return boxWithoutTransform;
      }
      setTargetDelta(delta) {
        this.targetDelta = delta;
        this.root.scheduleUpdateProjection();
        this.isProjectionDirty = true;
      }
      setOptions(options) {
        this.options = {
          ...this.options,
          ...options,
          crossfade: options.crossfade !== void 0 ? options.crossfade : true
        };
      }
      clearMeasurements() {
        this.scroll = void 0;
        this.layout = void 0;
        this.snapshot = void 0;
        this.prevTransformTemplateValue = void 0;
        this.targetDelta = void 0;
        this.target = void 0;
        this.isLayoutDirty = false;
      }
      forceRelativeParentToResolveTarget() {
        if (!this.relativeParent)
          return;
        if (this.relativeParent.resolvedRelativeTargetAt !== frameData.timestamp) {
          this.relativeParent.resolveTargetDelta(true);
        }
      }
      resolveTargetDelta(forceRecalculation = false) {
        const lead = this.getLead();
        this.isProjectionDirty || (this.isProjectionDirty = lead.isProjectionDirty);
        this.isTransformDirty || (this.isTransformDirty = lead.isTransformDirty);
        this.isSharedProjectionDirty || (this.isSharedProjectionDirty = lead.isSharedProjectionDirty);
        const isShared = Boolean(this.resumingFrom) || this !== lead;
        const canSkip = !(forceRecalculation || isShared && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize);
        if (canSkip)
          return;
        const { layout: layout2, layoutId } = this.options;
        if (!this.layout || !(layout2 || layoutId))
          return;
        this.resolvedRelativeTargetAt = frameData.timestamp;
        const relativeParent = this.getClosestProjectingParent();
        if (relativeParent && this.linkedParentVersion !== relativeParent.layoutVersion && !relativeParent.options.layoutRoot) {
          this.removeRelativeTarget();
        }
        if (!this.targetDelta && !this.relativeTarget) {
          if (this.options.layoutAnchor !== false && relativeParent && relativeParent.layout) {
            this.createRelativeTarget(relativeParent, this.layout.layoutBox, relativeParent.layout.layoutBox);
          } else {
            this.removeRelativeTarget();
          }
        }
        if (!this.relativeTarget && !this.targetDelta)
          return;
        if (!this.target) {
          this.target = createBox();
          this.targetWithTransforms = createBox();
        }
        if (this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) {
          this.forceRelativeParentToResolveTarget();
          calcRelativeBox(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0);
        } else if (this.targetDelta) {
          if (Boolean(this.resumingFrom)) {
            this.applyTransform(this.layout.layoutBox, false, this.target);
          } else {
            copyBoxInto(this.target, this.layout.layoutBox);
          }
          applyBoxDelta(this.target, this.targetDelta);
        } else {
          copyBoxInto(this.target, this.layout.layoutBox);
        }
        if (this.attemptToResolveRelativeTarget) {
          this.attemptToResolveRelativeTarget = false;
          if (this.options.layoutAnchor !== false && relativeParent && Boolean(relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !relativeParent.options.layoutScroll && relativeParent.target && this.animationProgress !== 1) {
            this.createRelativeTarget(relativeParent, this.target, relativeParent.target);
          } else {
            this.relativeParent = this.relativeTarget = void 0;
          }
        }
        if (statsBuffer.value) {
          metrics.calculatedTargetDeltas++;
        }
      }
      getClosestProjectingParent() {
        if (!this.parent || hasScale(this.parent.latestValues) || has2DTranslate(this.parent.latestValues)) {
          return void 0;
        }
        if (this.parent.isProjecting()) {
          return this.parent;
        } else {
          return this.parent.getClosestProjectingParent();
        }
      }
      isProjecting() {
        return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
      }
      createRelativeTarget(relativeParent, layout2, parentLayout) {
        this.relativeParent = relativeParent;
        this.linkedParentVersion = relativeParent.layoutVersion;
        this.forceRelativeParentToResolveTarget();
        this.relativeTarget = createBox();
        this.relativeTargetOrigin = createBox();
        calcRelativePosition(this.relativeTargetOrigin, layout2, parentLayout, this.options.layoutAnchor || void 0);
        copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
      }
      removeRelativeTarget() {
        this.relativeParent = this.relativeTarget = void 0;
      }
      calcProjection() {
        const lead = this.getLead();
        const isShared = Boolean(this.resumingFrom) || this !== lead;
        let canSkip = true;
        if (this.isProjectionDirty || this.parent?.isProjectionDirty) {
          canSkip = false;
        }
        if (isShared && (this.isSharedProjectionDirty || this.isTransformDirty)) {
          canSkip = false;
        }
        if (this.resolvedRelativeTargetAt === frameData.timestamp) {
          canSkip = false;
        }
        if (canSkip)
          return;
        const { layout: layout2, layoutId } = this.options;
        this.isTreeAnimating = Boolean(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation);
        if (!this.isTreeAnimating) {
          this.targetDelta = this.relativeTarget = void 0;
        }
        if (!this.layout || !(layout2 || layoutId))
          return;
        copyBoxInto(this.layoutCorrected, this.layout.layoutBox);
        const prevTreeScaleX = this.treeScale.x;
        const prevTreeScaleY = this.treeScale.y;
        applyTreeDeltas(this.layoutCorrected, this.treeScale, this.path, isShared);
        if (lead.layout && !lead.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1)) {
          lead.target = lead.layout.layoutBox;
          lead.targetWithTransforms = createBox();
        }
        const { target } = lead;
        if (!target) {
          if (this.prevProjectionDelta) {
            this.createProjectionDeltas();
            this.scheduleRender();
          }
          return;
        }
        if (!this.projectionDelta || !this.prevProjectionDelta) {
          this.createProjectionDeltas();
        } else {
          copyAxisDeltaInto(this.prevProjectionDelta.x, this.projectionDelta.x);
          copyAxisDeltaInto(this.prevProjectionDelta.y, this.projectionDelta.y);
        }
        calcBoxDelta(this.projectionDelta, this.layoutCorrected, target, this.latestValues);
        if (this.treeScale.x !== prevTreeScaleX || this.treeScale.y !== prevTreeScaleY || !axisDeltaEquals(this.projectionDelta.x, this.prevProjectionDelta.x) || !axisDeltaEquals(this.projectionDelta.y, this.prevProjectionDelta.y)) {
          this.hasProjected = true;
          this.scheduleRender();
          this.notifyListeners("projectionUpdate", target);
        }
        if (statsBuffer.value) {
          metrics.calculatedProjections++;
        }
      }
      hide() {
        this.isVisible = false;
      }
      show() {
        this.isVisible = true;
      }
      scheduleRender(notifyAll2 = true) {
        this.options.visualElement?.scheduleRender();
        if (notifyAll2) {
          const stack = this.getStack();
          stack && stack.scheduleRender();
        }
        if (this.resumingFrom && !this.resumingFrom.instance) {
          this.resumingFrom = void 0;
        }
      }
      createProjectionDeltas() {
        this.prevProjectionDelta = createDelta();
        this.projectionDelta = createDelta();
        this.projectionDeltaWithTransform = createDelta();
      }
      setAnimationOrigin(delta, hasOnlyRelativeTargetChanged = false, pathFn) {
        const snapshot = this.snapshot;
        const snapshotLatestValues = snapshot ? snapshot.latestValues : {};
        const mixedValues = { ...this.latestValues };
        const targetDelta = createDelta();
        if (!this.relativeParent || !this.relativeParent.options.layoutRoot) {
          this.relativeTarget = this.relativeTargetOrigin = void 0;
        }
        this.attemptToResolveRelativeTarget = !hasOnlyRelativeTargetChanged;
        const relativeLayout = createBox();
        const snapshotSource = snapshot ? snapshot.source : void 0;
        const layoutSource = this.layout ? this.layout.source : void 0;
        const isSharedLayoutAnimation = snapshotSource !== layoutSource;
        const stack = this.getStack();
        const isOnlyMember = !stack || stack.members.length <= 1;
        const shouldCrossfadeOpacity = Boolean(isSharedLayoutAnimation && !isOnlyMember && this.options.crossfade === true && !this.path.some(hasOpacityCrossfade));
        this.animationProgress = 0;
        let prevRelativeTarget;
        const interpolate2 = pathFn?.interpolateProjection(delta);
        this.mixTargetDelta = (latest) => {
          const progress2 = latest / 1e3;
          const point = interpolate2?.(progress2);
          if (point) {
            targetDelta.x.translate = point.x;
            targetDelta.x.scale = mixNumber(delta.x.scale, 1, progress2);
            targetDelta.x.origin = delta.x.origin;
            targetDelta.x.originPoint = delta.x.originPoint;
            targetDelta.y.translate = point.y;
            targetDelta.y.scale = mixNumber(delta.y.scale, 1, progress2);
            targetDelta.y.origin = delta.y.origin;
            targetDelta.y.originPoint = delta.y.originPoint;
          } else {
            mixAxisDeltaLinear(targetDelta.x, delta.x, progress2);
            mixAxisDeltaLinear(targetDelta.y, delta.y, progress2);
          }
          this.setTargetDelta(targetDelta);
          if (this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
            calcRelativePosition(relativeLayout, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0);
            mixBox(this.relativeTarget, this.relativeTargetOrigin, relativeLayout, progress2);
            if (prevRelativeTarget && boxEquals(this.relativeTarget, prevRelativeTarget)) {
              this.isProjectionDirty = false;
            }
            if (!prevRelativeTarget)
              prevRelativeTarget = createBox();
            copyBoxInto(prevRelativeTarget, this.relativeTarget);
          }
          if (isSharedLayoutAnimation) {
            this.animationValues = mixedValues;
            mixValues(mixedValues, snapshotLatestValues, this.latestValues, progress2, shouldCrossfadeOpacity, isOnlyMember);
          }
          if (point && point.rotate !== void 0) {
            if (!this.animationValues)
              this.animationValues = mixedValues;
            this.animationValues.pathRotation = point.rotate;
          }
          this.root.scheduleUpdateProjection();
          this.scheduleRender();
          this.animationProgress = progress2;
        };
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
      }
      startAnimation(options) {
        this.notifyListeners("animationStart");
        this.currentAnimation?.stop();
        this.resumingFrom?.currentAnimation?.stop();
        if (this.pendingAnimation) {
          cancelFrame(this.pendingAnimation);
          this.pendingAnimation = void 0;
        }
        this.pendingAnimation = frame.update(() => {
          globalProjectionState.hasAnimatedSinceResize = true;
          activeAnimations.layout++;
          this.motionValue || (this.motionValue = motionValue(0));
          this.motionValue.jump(0, false);
          this.currentAnimation = animateSingleValue(this.motionValue, [0, 1e3], {
            ...options,
            velocity: 0,
            isSync: true,
            onUpdate: (latest) => {
              this.mixTargetDelta(latest);
              options.onUpdate && options.onUpdate(latest);
            },
            onStop: () => {
              activeAnimations.layout--;
            },
            onComplete: () => {
              activeAnimations.layout--;
              options.onComplete && options.onComplete();
              this.completeAnimation();
            }
          });
          if (this.resumingFrom) {
            this.resumingFrom.currentAnimation = this.currentAnimation;
          }
          this.pendingAnimation = void 0;
        });
      }
      completeAnimation() {
        if (this.resumingFrom) {
          this.resumingFrom.currentAnimation = void 0;
          this.resumingFrom.preserveOpacity = void 0;
        }
        const stack = this.getStack();
        stack && stack.exitAnimationComplete();
        this.resumingFrom = this.currentAnimation = this.animationValues = void 0;
        this.notifyListeners("animationComplete");
      }
      finishAnimation() {
        if (this.currentAnimation) {
          this.mixTargetDelta && this.mixTargetDelta(animationTarget);
          this.currentAnimation.stop();
        }
        this.completeAnimation();
      }
      applyTransformsToTarget() {
        const lead = this.getLead();
        let { targetWithTransforms, target, layout: layout2, latestValues } = lead;
        if (!targetWithTransforms || !target || !layout2)
          return;
        if (this !== lead && this.layout && layout2 && shouldAnimatePositionOnly(this.options.animationType, this.layout.layoutBox, layout2.layoutBox)) {
          target = this.target || createBox();
          const xLength = calcLength(this.layout.layoutBox.x);
          target.x.min = lead.target.x.min;
          target.x.max = target.x.min + xLength;
          const yLength = calcLength(this.layout.layoutBox.y);
          target.y.min = lead.target.y.min;
          target.y.max = target.y.min + yLength;
        }
        copyBoxInto(targetWithTransforms, target);
        transformBox(targetWithTransforms, latestValues);
        calcBoxDelta(this.projectionDeltaWithTransform, this.layoutCorrected, targetWithTransforms, latestValues);
      }
      registerSharedNode(layoutId, node) {
        if (!this.sharedNodes.has(layoutId)) {
          this.sharedNodes.set(layoutId, new NodeStack());
        }
        const stack = this.sharedNodes.get(layoutId);
        stack.add(node);
        const config = node.options.initialPromotionConfig;
        node.promote({
          transition: config ? config.transition : void 0,
          preserveFollowOpacity: config && config.shouldPreserveFollowOpacity ? config.shouldPreserveFollowOpacity(node) : void 0
        });
      }
      isLead() {
        const stack = this.getStack();
        return stack ? stack.lead === this : true;
      }
      getLead() {
        const { layoutId } = this.options;
        return layoutId ? this.getStack()?.lead || this : this;
      }
      getPrevLead() {
        const { layoutId } = this.options;
        return layoutId ? this.getStack()?.prevLead : void 0;
      }
      getStack() {
        const { layoutId } = this.options;
        if (layoutId)
          return this.root.sharedNodes.get(layoutId);
      }
      promote({ needsReset, transition, preserveFollowOpacity } = {}) {
        const stack = this.getStack();
        if (stack)
          stack.promote(this, preserveFollowOpacity);
        if (needsReset) {
          this.projectionDelta = void 0;
          this.needsReset = true;
        }
        if (transition)
          this.setOptions({ transition });
      }
      relegate() {
        const stack = this.getStack();
        if (stack) {
          return stack.relegate(this);
        } else {
          return false;
        }
      }
      resetSkewAndRotation() {
        const { visualElement } = this.options;
        if (!visualElement)
          return;
        let hasDistortingTransform = false;
        const { latestValues } = visualElement;
        if (latestValues.z || latestValues.rotate || latestValues.rotateX || latestValues.rotateY || latestValues.rotateZ || latestValues.skewX || latestValues.skewY) {
          hasDistortingTransform = true;
        }
        if (!hasDistortingTransform)
          return;
        const resetValues = {};
        if (latestValues.z) {
          resetDistortingTransform("z", visualElement, resetValues, this.animationValues);
        }
        for (let i2 = 0; i2 < transformAxes.length; i2++) {
          resetDistortingTransform(`rotate${transformAxes[i2]}`, visualElement, resetValues, this.animationValues);
          resetDistortingTransform(`skew${transformAxes[i2]}`, visualElement, resetValues, this.animationValues);
        }
        visualElement.render();
        for (const key in resetValues) {
          visualElement.setStaticValue(key, resetValues[key]);
          if (this.animationValues) {
            this.animationValues[key] = resetValues[key];
          }
        }
        visualElement.scheduleRender();
      }
      applyProjectionStyles(targetStyle, styleProp) {
        if (!this.instance || this.isSVG)
          return;
        if (!this.isVisible) {
          targetStyle.visibility = "hidden";
          return;
        }
        const transformTemplate = this.getTransformTemplate();
        if (this.needsReset) {
          this.needsReset = false;
          targetStyle.visibility = "";
          targetStyle.opacity = "";
          targetStyle.pointerEvents = resolveMotionValue(styleProp?.pointerEvents) || "";
          targetStyle.transform = transformTemplate ? transformTemplate(this.latestValues, "") : "none";
          return;
        }
        const lead = this.getLead();
        if (!this.projectionDelta || !this.layout || !lead.target) {
          if (this.options.layoutId) {
            targetStyle.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1;
            targetStyle.pointerEvents = resolveMotionValue(styleProp?.pointerEvents) || "";
          }
          if (this.hasProjected && !hasTransform(this.latestValues)) {
            targetStyle.transform = transformTemplate ? transformTemplate({}, "") : "none";
            this.hasProjected = false;
          }
          return;
        }
        targetStyle.visibility = "";
        const valuesToRender = lead.animationValues || lead.latestValues;
        this.applyTransformsToTarget();
        let transform = buildProjectionTransform(this.projectionDeltaWithTransform, this.treeScale, valuesToRender);
        if (transformTemplate) {
          transform = transformTemplate(valuesToRender, transform);
        }
        targetStyle.transform = transform;
        const { x, y } = this.projectionDelta;
        targetStyle.transformOrigin = `${x.origin * 100}% ${y.origin * 100}% 0`;
        if (lead.animationValues) {
          targetStyle.opacity = lead === this ? valuesToRender.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : valuesToRender.opacityExit;
        } else {
          targetStyle.opacity = lead === this ? valuesToRender.opacity !== void 0 ? valuesToRender.opacity : "" : valuesToRender.opacityExit !== void 0 ? valuesToRender.opacityExit : 0;
        }
        for (const key in scaleCorrectors) {
          if (valuesToRender[key] === void 0)
            continue;
          const { correct, applyTo, isCSSVariable } = scaleCorrectors[key];
          const corrected = transform === "none" ? valuesToRender[key] : correct(valuesToRender[key], lead);
          if (applyTo) {
            const num = applyTo.length;
            for (let i2 = 0; i2 < num; i2++) {
              targetStyle[applyTo[i2]] = corrected;
            }
          } else {
            if (isCSSVariable) {
              this.options.visualElement.renderState.vars[key] = corrected;
            } else {
              targetStyle[key] = corrected;
            }
          }
        }
        if (this.options.layoutId) {
          targetStyle.pointerEvents = lead === this ? resolveMotionValue(styleProp?.pointerEvents) || "" : "none";
        }
      }
      clearSnapshot() {
        this.resumeFrom = this.snapshot = void 0;
      }
      // Only run on root
      resetTree() {
        this.root.nodes.forEach((node) => node.currentAnimation?.stop());
        this.root.nodes.forEach(clearMeasurements);
        this.root.sharedNodes.clear();
      }
    };
  }
  function updateLayout(node) {
    node.updateLayout();
  }
  function notifyLayoutUpdate(node) {
    const snapshot = node.resumeFrom?.snapshot || node.snapshot;
    if (node.isLead() && node.layout && snapshot && node.hasListeners("didUpdate")) {
      const { layoutBox: layout2, measuredBox: measuredLayout } = node.layout;
      const { animationType } = node.options;
      const isShared = snapshot.source !== node.layout.source;
      if (animationType === "size") {
        eachAxis((axis) => {
          const axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
          const length = calcLength(axisSnapshot);
          axisSnapshot.min = layout2[axis].min;
          axisSnapshot.max = axisSnapshot.min + length;
        });
      } else if (animationType === "x" || animationType === "y") {
        const snapAxis = animationType === "x" ? "y" : "x";
        copyAxisInto(isShared ? snapshot.measuredBox[snapAxis] : snapshot.layoutBox[snapAxis], layout2[snapAxis]);
      } else if (shouldAnimatePositionOnly(animationType, snapshot.layoutBox, layout2)) {
        eachAxis((axis) => {
          const axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
          const length = calcLength(layout2[axis]);
          axisSnapshot.max = axisSnapshot.min + length;
          if (node.relativeTarget && !node.currentAnimation) {
            node.isProjectionDirty = true;
            node.relativeTarget[axis].max = node.relativeTarget[axis].min + length;
          }
        });
      }
      const layoutDelta = createDelta();
      calcBoxDelta(layoutDelta, layout2, snapshot.layoutBox);
      const visualDelta = createDelta();
      if (isShared) {
        calcBoxDelta(visualDelta, node.applyTransform(measuredLayout, true), snapshot.measuredBox);
      } else {
        calcBoxDelta(visualDelta, layout2, snapshot.layoutBox);
      }
      const hasLayoutChanged = !isDeltaZero(layoutDelta);
      let hasRelativeLayoutChanged = false;
      if (!node.resumeFrom) {
        const relativeParent = node.getClosestProjectingParent();
        if (relativeParent && !relativeParent.resumeFrom) {
          const { snapshot: parentSnapshot, layout: parentLayout } = relativeParent;
          if (parentSnapshot && parentLayout) {
            const anchor = node.options.layoutAnchor || void 0;
            const relativeSnapshot = createBox();
            calcRelativePosition(relativeSnapshot, snapshot.layoutBox, parentSnapshot.layoutBox, anchor);
            const relativeLayout = createBox();
            calcRelativePosition(relativeLayout, layout2, parentLayout.layoutBox, anchor);
            if (!boxEqualsRounded(relativeSnapshot, relativeLayout)) {
              hasRelativeLayoutChanged = true;
            }
            if (relativeParent.options.layoutRoot) {
              node.relativeTarget = relativeLayout;
              node.relativeTargetOrigin = relativeSnapshot;
              node.relativeParent = relativeParent;
            }
          }
        }
      }
      node.notifyListeners("didUpdate", {
        layout: layout2,
        snapshot,
        delta: visualDelta,
        layoutDelta,
        hasLayoutChanged,
        hasRelativeLayoutChanged
      });
    } else if (node.isLead()) {
      const { onExitComplete } = node.options;
      onExitComplete && onExitComplete();
    }
    node.options.transition = void 0;
  }
  function propagateDirtyNodes(node) {
    if (statsBuffer.value) {
      metrics.nodes++;
    }
    if (!node.parent)
      return;
    if (!node.isProjecting()) {
      node.isProjectionDirty = node.parent.isProjectionDirty;
    }
    node.isSharedProjectionDirty || (node.isSharedProjectionDirty = Boolean(node.isProjectionDirty || node.parent.isProjectionDirty || node.parent.isSharedProjectionDirty));
    node.isTransformDirty || (node.isTransformDirty = node.parent.isTransformDirty);
  }
  function cleanDirtyNodes(node) {
    node.isProjectionDirty = node.isSharedProjectionDirty = node.isTransformDirty = false;
  }
  function clearSnapshot(node) {
    node.clearSnapshot();
  }
  function clearMeasurements(node) {
    node.clearMeasurements();
  }
  function forceLayoutMeasure(node) {
    node.isLayoutDirty = true;
    node.updateLayout();
  }
  function clearIsLayoutDirty(node) {
    node.isLayoutDirty = false;
  }
  function ensureDraggedNodesSnapshotted(node) {
    if (node.isAnimationBlocked && node.layout && !node.isLayoutDirty) {
      node.snapshot = node.layout;
      node.isLayoutDirty = true;
    }
  }
  function resetTransformStyle(node) {
    const { visualElement } = node.options;
    if (visualElement && visualElement.getProps().onBeforeLayoutMeasure) {
      visualElement.notify("BeforeLayoutMeasure");
    }
    node.resetTransform();
  }
  function finishAnimation(node) {
    node.finishAnimation();
    node.targetDelta = node.relativeTarget = node.target = void 0;
    node.isProjectionDirty = true;
  }
  function resolveTargetDelta(node) {
    node.resolveTargetDelta();
  }
  function calcProjection(node) {
    node.calcProjection();
  }
  function resetSkewAndRotation(node) {
    node.resetSkewAndRotation();
  }
  function removeLeadSnapshots(stack) {
    stack.removeLeadSnapshot();
  }
  function mixAxisDeltaLinear(output, delta, p) {
    output.translate = mixNumber(delta.translate, 0, p);
    output.scale = mixNumber(delta.scale, 1, p);
    output.origin = delta.origin;
    output.originPoint = delta.originPoint;
  }
  function mixAxis(output, from, to, p) {
    output.min = mixNumber(from.min, to.min, p);
    output.max = mixNumber(from.max, to.max, p);
  }
  function mixBox(output, from, to, p) {
    mixAxis(output.x, from.x, to.x, p);
    mixAxis(output.y, from.y, to.y, p);
  }
  function hasOpacityCrossfade(node) {
    return node.animationValues && node.animationValues.opacityExit !== void 0;
  }
  var defaultLayoutTransition = {
    duration: 0.45,
    ease: [0.4, 0, 0.1, 1]
  };
  var userAgentContains = (string) => typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(string);
  var roundPoint = userAgentContains("applewebkit/") && !userAgentContains("chrome/") ? Math.round : noop;
  function roundAxis(axis) {
    axis.min = roundPoint(axis.min);
    axis.max = roundPoint(axis.max);
  }
  function roundBox(box) {
    roundAxis(box.x);
    roundAxis(box.y);
  }
  function shouldAnimatePositionOnly(animationType, snapshot, layout2) {
    return animationType === "position" || animationType === "preserve-aspect" && !isNear(aspectRatio(snapshot), aspectRatio(layout2), 0.2);
  }
  function checkNodeWasScrollRoot(node) {
    return node !== node.root && node.scroll?.wasRoot;
  }

  // node_modules/motion-dom/dist/es/projection/node/DocumentProjectionNode.mjs
  init_define_import_meta_env();
  var DocumentProjectionNode = createProjectionNode({
    attachResizeListener: (ref, notify) => addDomEvent(ref, "resize", notify),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
      y: document.documentElement.scrollTop || document.body?.scrollTop || 0
    }),
    checkIsScrollRoot: () => true
  });

  // node_modules/motion-dom/dist/es/projection/node/HTMLProjectionNode.mjs
  init_define_import_meta_env();
  var rootProjectionNode = {
    current: void 0
  };
  var HTMLProjectionNode = createProjectionNode({
    measureScroll: (instance) => ({
      x: instance.scrollLeft,
      y: instance.scrollTop
    }),
    defaultParent: () => {
      if (!rootProjectionNode.current) {
        const documentNode = new DocumentProjectionNode({});
        documentNode.mount(window);
        documentNode.setOptions({ layoutScroll: true });
        rootProjectionNode.current = documentNode;
      }
      return rootProjectionNode.current;
    },
    resetTransform: (instance, value) => {
      instance.style.transform = value !== void 0 ? value : "none";
    },
    checkIsScrollRoot: (instance) => Boolean(window.getComputedStyle(instance).position === "fixed")
  });

  // node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs
  init_define_import_meta_env();
  var import_react11 = __toESM(require_react_shim(), 1);
  var MotionConfigContext = (0, import_react11.createContext)({
    transformPagePoint: (p) => p,
    isStatic: false,
    reducedMotion: "never"
  });

  // node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs
  init_define_import_meta_env();
  var import_react12 = __toESM(require_react_shim(), 1);
  function usePresence2(subscribe = true) {
    const context = (0, import_react12.useContext)(PresenceContext);
    if (context === null)
      return [true, null];
    const { isPresent, onExitComplete, register } = context;
    const id3 = (0, import_react12.useId)();
    (0, import_react12.useEffect)(() => {
      if (subscribe) {
        return register(id3);
      }
    }, [subscribe]);
    const safeToRemove = (0, import_react12.useCallback)(() => subscribe && onExitComplete && onExitComplete(id3), [id3, onExitComplete, subscribe]);
    return !isPresent && onExitComplete ? [false, safeToRemove] : [true];
  }

  // node_modules/framer-motion/dist/es/context/LazyContext.mjs
  init_define_import_meta_env();
  var import_react13 = __toESM(require_react_shim(), 1);
  var LazyContext = (0, import_react13.createContext)({ strict: false });

  // node_modules/framer-motion/dist/es/motion/features/load-features.mjs
  init_define_import_meta_env();

  // node_modules/framer-motion/dist/es/motion/features/definitions.mjs
  init_define_import_meta_env();
  var featureProps = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag"
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
  };
  var isInitialized = false;
  function initFeatureDefinitions() {
    if (isInitialized)
      return;
    const initialFeatureDefinitions = {};
    for (const key in featureProps) {
      initialFeatureDefinitions[key] = {
        isEnabled: (props) => featureProps[key].some((name) => !!props[name])
      };
    }
    setFeatureDefinitions(initialFeatureDefinitions);
    isInitialized = true;
  }
  function getInitializedFeatureDefinitions() {
    initFeatureDefinitions();
    return getFeatureDefinitions();
  }

  // node_modules/framer-motion/dist/es/motion/features/load-features.mjs
  function loadFeatures(features) {
    const featureDefinitions2 = getInitializedFeatureDefinitions();
    for (const key in features) {
      featureDefinitions2[key] = {
        ...featureDefinitions2[key],
        ...features[key]
      };
    }
    setFeatureDefinitions(featureDefinitions2);
  }

  // node_modules/framer-motion/dist/es/render/dom/utils/filter-props.mjs
  init_define_import_meta_env();

  // node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs
  init_define_import_meta_env();
  var validMotionProps = /* @__PURE__ */ new Set([
    "animate",
    "exit",
    "variants",
    "initial",
    "style",
    "values",
    "variants",
    "transition",
    "transformTemplate",
    "custom",
    "inherit",
    "onBeforeLayoutMeasure",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onMeasureDragConstraints",
    "onDirectionLock",
    "onDragTransitionEnd",
    "_dragX",
    "_dragY",
    "onHoverStart",
    "onHoverEnd",
    "onViewportEnter",
    "onViewportLeave",
    "globalTapTarget",
    "propagate",
    "ignoreStrict",
    "viewport"
  ]);
  function isValidMotionProp(key) {
    return key.startsWith("while") || key.startsWith("drag") && key !== "draggable" || key.startsWith("layout") || key.startsWith("onTap") || key.startsWith("onPan") || key.startsWith("onLayout") || validMotionProps.has(key);
  }

  // node_modules/framer-motion/dist/es/render/dom/utils/filter-props.mjs
  var shouldForward = (key) => !isValidMotionProp(key);
  function loadExternalIsValidProp(isValidProp) {
    if (typeof isValidProp !== "function")
      return;
    shouldForward = (key) => key.startsWith("on") ? !isValidMotionProp(key) : isValidProp(key);
  }
  try {
    const emotionPkg = "@emotion/is-prop-valid";
    loadExternalIsValidProp(__require(emotionPkg).default);
  } catch {
  }
  function filterProps(props, isDom, forwardMotionProps) {
    const filteredProps = {};
    for (const key in props) {
      if (key === "values" && typeof props.values === "object")
        continue;
      if (isMotionValue(props[key]))
        continue;
      if (shouldForward(key) || forwardMotionProps === true && isValidMotionProp(key) || !isDom && !isValidMotionProp(key) || // If trying to use native HTML drag events, forward drag listeners
      props["draggable"] && key.startsWith("onDrag")) {
        filteredProps[key] = props[key];
      }
    }
    return filteredProps;
  }

  // node_modules/framer-motion/dist/es/render/components/create-proxy.mjs
  init_define_import_meta_env();

  // node_modules/framer-motion/dist/es/motion/index.mjs
  init_define_import_meta_env();
  var import_jsx_runtime11 = __toESM(require_react_shim(), 1);
  var import_react23 = __toESM(require_react_shim(), 1);

  // node_modules/framer-motion/dist/es/context/MotionContext/index.mjs
  init_define_import_meta_env();
  var import_react14 = __toESM(require_react_shim(), 1);
  var MotionContext = /* @__PURE__ */ (0, import_react14.createContext)({});

  // node_modules/framer-motion/dist/es/context/MotionContext/create.mjs
  init_define_import_meta_env();
  var import_react15 = __toESM(require_react_shim(), 1);

  // node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs
  init_define_import_meta_env();
  function getCurrentTreeVariants(props, context) {
    if (isControllingVariants(props)) {
      const { initial, animate } = props;
      return {
        initial: initial === false || isVariantLabel(initial) ? initial : void 0,
        animate: isVariantLabel(animate) ? animate : void 0
      };
    }
    return props.inherit !== false ? context : {};
  }

  // node_modules/framer-motion/dist/es/context/MotionContext/create.mjs
  function useCreateMotionContext(props) {
    const { initial, animate } = getCurrentTreeVariants(props, (0, import_react15.useContext)(MotionContext));
    return (0, import_react15.useMemo)(() => ({ initial, animate }), [variantLabelsAsDependency(initial), variantLabelsAsDependency(animate)]);
  }
  function variantLabelsAsDependency(prop) {
    return Array.isArray(prop) ? prop.join(" ") : prop;
  }

  // node_modules/framer-motion/dist/es/render/dom/use-render.mjs
  init_define_import_meta_env();
  var import_react18 = __toESM(require_react_shim(), 1);

  // node_modules/framer-motion/dist/es/render/html/use-props.mjs
  init_define_import_meta_env();
  var import_react16 = __toESM(require_react_shim(), 1);

  // node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs
  init_define_import_meta_env();
  var createHtmlRenderState = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
  });

  // node_modules/framer-motion/dist/es/render/html/use-props.mjs
  function copyRawValuesOnly(target, source, props) {
    for (const key in source) {
      if (!isMotionValue(source[key]) && !isForcedMotionValue(key, props)) {
        target[key] = source[key];
      }
    }
  }
  function useInitialMotionValues({ transformTemplate }, visualState) {
    return (0, import_react16.useMemo)(() => {
      const state = createHtmlRenderState();
      buildHTMLStyles(state, visualState, transformTemplate);
      return Object.assign({}, state.vars, state.style);
    }, [visualState]);
  }
  function useStyle(props, visualState) {
    const styleProp = props.style || {};
    const style = {};
    copyRawValuesOnly(style, styleProp, props);
    Object.assign(style, useInitialMotionValues(props, visualState));
    return style;
  }
  function useHTMLProps(props, visualState) {
    const htmlProps = {};
    const style = useStyle(props, visualState);
    if (props.drag && props.dragListener !== false) {
      htmlProps.draggable = false;
      style.userSelect = style.WebkitUserSelect = style.WebkitTouchCallout = "none";
      style.touchAction = props.drag === true ? "none" : `pan-${props.drag === "x" ? "y" : "x"}`;
    }
    if (props.tabIndex === void 0 && (props.onTap || props.onTapStart || props.whileTap)) {
      htmlProps.tabIndex = 0;
    }
    htmlProps.style = style;
    return htmlProps;
  }

  // node_modules/framer-motion/dist/es/render/svg/use-props.mjs
  init_define_import_meta_env();
  var import_react17 = __toESM(require_react_shim(), 1);

  // node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs
  init_define_import_meta_env();
  var createSvgRenderState = () => ({
    ...createHtmlRenderState(),
    attrs: {}
  });

  // node_modules/framer-motion/dist/es/render/svg/use-props.mjs
  function useSVGProps(props, visualState, _isStatic, Component2) {
    const visualProps = (0, import_react17.useMemo)(() => {
      const state = createSvgRenderState();
      buildSVGAttrs(state, visualState, isSVGTag(Component2), props.transformTemplate, props.style);
      return {
        ...state.attrs,
        style: { ...state.style }
      };
    }, [visualState]);
    if (props.style) {
      const rawStyles = {};
      copyRawValuesOnly(rawStyles, props.style, props);
      visualProps.style = { ...rawStyles, ...visualProps.style };
    }
    return visualProps;
  }

  // node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs
  init_define_import_meta_env();

  // node_modules/framer-motion/dist/es/render/svg/lowercase-elements.mjs
  init_define_import_meta_env();
  var lowercaseSVGElements = [
    "animate",
    "circle",
    "defs",
    "desc",
    "ellipse",
    "g",
    "image",
    "line",
    "filter",
    "marker",
    "mask",
    "metadata",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "rect",
    "stop",
    "switch",
    "symbol",
    "svg",
    "text",
    "tspan",
    "use",
    "view"
  ];

  // node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs
  function isSVGComponent(Component2) {
    if (
      /**
       * If it's not a string, it's a custom React component. Currently we only support
       * HTML custom React components.
       */
      typeof Component2 !== "string" || /**
       * If it contains a dash, the element is a custom HTML webcomponent.
       */
      Component2.includes("-")
    ) {
      return false;
    } else if (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      lowercaseSVGElements.indexOf(Component2) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(Component2)
    ) {
      return true;
    }
    return false;
  }

  // node_modules/framer-motion/dist/es/render/dom/use-render.mjs
  function useRender(Component2, props, ref, { latestValues }, isStatic, forwardMotionProps = false, isSVG) {
    const useVisualProps = isSVG ?? isSVGComponent(Component2) ? useSVGProps : useHTMLProps;
    const visualProps = useVisualProps(props, latestValues, isStatic, Component2);
    const filteredProps = filterProps(props, typeof Component2 === "string", forwardMotionProps);
    const elementProps = Component2 !== import_react18.Fragment ? { ...filteredProps, ...visualProps, ref } : {};
    const { children } = props;
    const renderedChildren = (0, import_react18.useMemo)(() => isMotionValue(children) ? children.get() : children, [children]);
    return (0, import_react18.createElement)(Component2, {
      ...elementProps,
      children: renderedChildren
    });
  }

  // node_modules/framer-motion/dist/es/render/html/use-html-visual-state.mjs
  init_define_import_meta_env();

  // node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs
  init_define_import_meta_env();
  var import_react19 = __toESM(require_react_shim(), 1);
  function makeState({ scrapeMotionValuesFromProps: scrapeMotionValuesFromProps3, createRenderState }, props, context, presenceContext) {
    const state = {
      latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps3),
      renderState: createRenderState()
    };
    return state;
  }
  function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
    const values = {};
    const motionValues = scrapeMotionValues(props, {});
    for (const key in motionValues) {
      values[key] = resolveMotionValue(motionValues[key]);
    }
    let { initial, animate } = props;
    const isControllingVariants$1 = isControllingVariants(props);
    const isVariantNode$1 = isVariantNode(props);
    if (context && isVariantNode$1 && !isControllingVariants$1 && props.inherit !== false) {
      if (initial === void 0)
        initial = context.initial;
      if (animate === void 0)
        animate = context.animate;
    }
    let isInitialAnimationBlocked = presenceContext ? presenceContext.initial === false : false;
    isInitialAnimationBlocked = isInitialAnimationBlocked || initial === false;
    const variantToSet = isInitialAnimationBlocked ? animate : initial;
    if (variantToSet && typeof variantToSet !== "boolean" && !isAnimationControls(variantToSet)) {
      const list = Array.isArray(variantToSet) ? variantToSet : [variantToSet];
      for (let i2 = 0; i2 < list.length; i2++) {
        const resolved = resolveVariantFromProps(props, list[i2]);
        if (resolved) {
          const { transitionEnd, transition, ...target } = resolved;
          for (const key in target) {
            let valueTarget = target[key];
            if (Array.isArray(valueTarget)) {
              const index = isInitialAnimationBlocked ? valueTarget.length - 1 : 0;
              valueTarget = valueTarget[index];
            }
            if (valueTarget !== null) {
              values[key] = valueTarget;
            }
          }
          for (const key in transitionEnd) {
            values[key] = transitionEnd[key];
          }
        }
      }
    }
    return values;
  }
  var makeUseVisualState = (config) => (props, isStatic) => {
    const context = (0, import_react19.useContext)(MotionContext);
    const presenceContext = (0, import_react19.useContext)(PresenceContext);
    const make = () => makeState(config, props, context, presenceContext);
    return isStatic ? make() : useConstant(make);
  };

  // node_modules/framer-motion/dist/es/render/html/use-html-visual-state.mjs
  var useHTMLVisualState = /* @__PURE__ */ makeUseVisualState({
    scrapeMotionValuesFromProps,
    createRenderState: createHtmlRenderState
  });

  // node_modules/framer-motion/dist/es/render/svg/use-svg-visual-state.mjs
  init_define_import_meta_env();
  var useSVGVisualState = /* @__PURE__ */ makeUseVisualState({
    scrapeMotionValuesFromProps: scrapeMotionValuesFromProps2,
    createRenderState: createSvgRenderState
  });

  // node_modules/framer-motion/dist/es/motion/utils/symbol.mjs
  init_define_import_meta_env();
  var motionComponentSymbol = Symbol.for("motionComponentSymbol");

  // node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs
  init_define_import_meta_env();
  var import_react20 = __toESM(require_react_shim(), 1);
  function useMotionRef(visualState, visualElement, externalRef) {
    const externalRefContainer = (0, import_react20.useRef)(externalRef);
    (0, import_react20.useInsertionEffect)(() => {
      externalRefContainer.current = externalRef;
    });
    const refCleanup = (0, import_react20.useRef)(null);
    return (0, import_react20.useCallback)((instance) => {
      if (instance) {
        visualState.onMount?.(instance);
      }
      if (visualElement) {
        instance ? visualElement.mount(instance) : visualElement.unmount();
      }
      const ref = externalRefContainer.current;
      if (typeof ref === "function") {
        if (instance) {
          const cleanup = ref(instance);
          if (typeof cleanup === "function") {
            refCleanup.current = cleanup;
          }
        } else if (refCleanup.current) {
          refCleanup.current();
          refCleanup.current = null;
        } else {
          ref(instance);
        }
      } else if (ref) {
        ref.current = instance;
      }
    }, [visualElement]);
  }

  // node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs
  init_define_import_meta_env();
  var import_react22 = __toESM(require_react_shim(), 1);

  // node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs
  init_define_import_meta_env();
  var import_react21 = __toESM(require_react_shim(), 1);
  var SwitchLayoutGroupContext = (0, import_react21.createContext)({});

  // node_modules/framer-motion/dist/es/utils/is-ref-object.mjs
  init_define_import_meta_env();
  function isRefObject(ref) {
    return ref && typeof ref === "object" && Object.prototype.hasOwnProperty.call(ref, "current");
  }

  // node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs
  function useVisualElement(Component2, visualState, props, createVisualElement, ProjectionNodeConstructor, isSVG) {
    const { visualElement: parent } = (0, import_react22.useContext)(MotionContext);
    const lazyContext = (0, import_react22.useContext)(LazyContext);
    const presenceContext = (0, import_react22.useContext)(PresenceContext);
    const motionConfig = (0, import_react22.useContext)(MotionConfigContext);
    const reducedMotionConfig = motionConfig.reducedMotion;
    const skipAnimations = motionConfig.skipAnimations;
    const visualElementRef = (0, import_react22.useRef)(null);
    const hasMountedOnce = (0, import_react22.useRef)(false);
    createVisualElement = createVisualElement || lazyContext.renderer;
    if (!visualElementRef.current && createVisualElement) {
      visualElementRef.current = createVisualElement(Component2, {
        visualState,
        parent,
        props,
        presenceContext,
        blockInitialAnimation: presenceContext ? presenceContext.initial === false : false,
        reducedMotionConfig,
        skipAnimations,
        isSVG
      });
      if (hasMountedOnce.current && visualElementRef.current) {
        visualElementRef.current.manuallyAnimateOnMount = true;
      }
    }
    const visualElement = visualElementRef.current;
    const initialLayoutGroupConfig = (0, import_react22.useContext)(SwitchLayoutGroupContext);
    if (visualElement && !visualElement.projection && ProjectionNodeConstructor && (visualElement.type === "html" || visualElement.type === "svg")) {
      createProjectionNode2(visualElementRef.current, props, ProjectionNodeConstructor, initialLayoutGroupConfig);
    }
    const isMounted = (0, import_react22.useRef)(false);
    (0, import_react22.useInsertionEffect)(() => {
      if (visualElement && isMounted.current) {
        visualElement.update(props, presenceContext);
      }
    });
    const optimisedAppearId = props[optimizedAppearDataAttribute];
    const wantsHandoff = (0, import_react22.useRef)(Boolean(optimisedAppearId) && typeof window !== "undefined" && !window.MotionHandoffIsComplete?.(optimisedAppearId) && window.MotionHasOptimisedAnimation?.(optimisedAppearId));
    useIsomorphicLayoutEffect(() => {
      hasMountedOnce.current = true;
      if (!visualElement)
        return;
      isMounted.current = true;
      window.MotionIsMounted = true;
      visualElement.updateFeatures();
      visualElement.scheduleRenderMicrotask();
      if (wantsHandoff.current && visualElement.animationState) {
        visualElement.animationState.animateChanges();
      }
    });
    (0, import_react22.useEffect)(() => {
      if (!visualElement)
        return;
      if (!wantsHandoff.current && visualElement.animationState) {
        visualElement.animationState.animateChanges();
      }
      if (wantsHandoff.current) {
        queueMicrotask(() => {
          window.MotionHandoffMarkAsComplete?.(optimisedAppearId);
        });
        wantsHandoff.current = false;
      }
      visualElement.enteringChildren = void 0;
    });
    return visualElement;
  }
  function createProjectionNode2(visualElement, props, ProjectionNodeConstructor, initialPromotionConfig) {
    const { layoutId, layout: layout2, drag: drag2, dragConstraints, layoutScroll, layoutRoot, layoutAnchor, layoutCrossfade } = props;
    visualElement.projection = new ProjectionNodeConstructor(visualElement.latestValues, props["data-framer-portal-id"] ? void 0 : getClosestProjectingNode(visualElement.parent));
    visualElement.projection.setOptions({
      layoutId,
      layout: layout2,
      alwaysMeasureLayout: Boolean(drag2) || dragConstraints && isRefObject(dragConstraints),
      visualElement,
      /**
       * TODO: Update options in an effect. This could be tricky as it'll be too late
       * to update by the time layout animations run.
       * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
       * ensuring it gets called if there's no potential layout animations.
       *
       */
      animationType: typeof layout2 === "string" ? layout2 : "both",
      initialPromotionConfig,
      crossfade: layoutCrossfade,
      layoutScroll,
      layoutRoot,
      layoutAnchor
    });
  }
  function getClosestProjectingNode(visualElement) {
    if (!visualElement)
      return void 0;
    return visualElement.options.allowProjection !== false ? visualElement.projection : getClosestProjectingNode(visualElement.parent);
  }

  // node_modules/framer-motion/dist/es/motion/index.mjs
  function createMotionComponent(Component2, { forwardMotionProps = false, type } = {}, preloadedFeatures, createVisualElement) {
    preloadedFeatures && loadFeatures(preloadedFeatures);
    const isSVG = type ? type === "svg" : isSVGComponent(Component2);
    const useVisualState = isSVG ? useSVGVisualState : useHTMLVisualState;
    function MotionDOMComponent(props, externalRef) {
      let MeasureLayout2;
      const configAndProps = {
        ...(0, import_react23.useContext)(MotionConfigContext),
        ...props,
        layoutId: useLayoutId(props)
      };
      const { isStatic } = configAndProps;
      const context = useCreateMotionContext(props);
      const visualState = useVisualState(props, isStatic);
      if (!isStatic && typeof window !== "undefined") {
        useStrictMode(configAndProps, preloadedFeatures);
        const layoutProjection = getProjectionFunctionality(configAndProps);
        MeasureLayout2 = layoutProjection.MeasureLayout;
        context.visualElement = useVisualElement(Component2, visualState, configAndProps, createVisualElement, layoutProjection.ProjectionNode, isSVG);
      }
      return (0, import_jsx_runtime11.jsxs)(MotionContext.Provider, { value: context, children: [MeasureLayout2 && context.visualElement ? (0, import_jsx_runtime11.jsx)(MeasureLayout2, { visualElement: context.visualElement, ...configAndProps }) : null, useRender(Component2, props, useMotionRef(visualState, context.visualElement, externalRef), visualState, isStatic, forwardMotionProps, isSVG)] });
    }
    MotionDOMComponent.displayName = `motion.${typeof Component2 === "string" ? Component2 : `create(${Component2.displayName ?? Component2.name ?? ""})`}`;
    const ForwardRefMotionComponent = (0, import_react23.forwardRef)(MotionDOMComponent);
    ForwardRefMotionComponent[motionComponentSymbol] = Component2;
    return ForwardRefMotionComponent;
  }
  function useLayoutId({ layoutId }) {
    const layoutGroupId = (0, import_react23.useContext)(LayoutGroupContext).id;
    return layoutGroupId && layoutId !== void 0 ? layoutGroupId + "-" + layoutId : layoutId;
  }
  function useStrictMode(configAndProps, preloadedFeatures) {
    const isStrict = (0, import_react23.useContext)(LazyContext).strict;
    if (preloadedFeatures && isStrict) {
      const strictMessage = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
      configAndProps.ignoreStrict ? warning(false, strictMessage, "lazy-strict-mode") : invariant(false, strictMessage, "lazy-strict-mode");
    }
  }
  function getProjectionFunctionality(props) {
    const featureDefinitions2 = getInitializedFeatureDefinitions();
    const { drag: drag2, layout: layout2 } = featureDefinitions2;
    if (!drag2 && !layout2)
      return {};
    const combined = { ...drag2, ...layout2 };
    return {
      MeasureLayout: drag2?.isEnabled(props) || layout2?.isEnabled(props) ? combined.MeasureLayout : void 0,
      ProjectionNode: combined.ProjectionNode
    };
  }

  // node_modules/framer-motion/dist/es/render/components/create-proxy.mjs
  function createMotionProxy(preloadedFeatures, createVisualElement) {
    if (typeof Proxy === "undefined") {
      return createMotionComponent;
    }
    const componentCache = /* @__PURE__ */ new Map();
    const factory = (Component2, options) => {
      return createMotionComponent(Component2, options, preloadedFeatures, createVisualElement);
    };
    const deprecatedFactoryFunction = (Component2, options) => {
      if (true) {
        warnOnce(false, "motion() is deprecated. Use motion.create() instead.");
      }
      return factory(Component2, options);
    };
    return new Proxy(deprecatedFactoryFunction, {
      /**
       * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
       * The prop name is passed through as `key` and we can use that to generate a `motion`
       * DOM component with that name.
       */
      get: (_target, key) => {
        if (key === "create")
          return factory;
        if (!componentCache.has(key)) {
          componentCache.set(key, createMotionComponent(key, void 0, preloadedFeatures, createVisualElement));
        }
        return componentCache.get(key);
      }
    });
  }

  // node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs
  init_define_import_meta_env();

  // node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs
  init_define_import_meta_env();
  var import_react24 = __toESM(require_react_shim(), 1);
  var createDomVisualElement = (Component2, options) => {
    const isSVG = options.isSVG ?? isSVGComponent(Component2);
    return isSVG ? new SVGVisualElement(options) : new HTMLVisualElement(options, {
      allowProjection: Component2 !== import_react24.Fragment
    });
  };

  // node_modules/framer-motion/dist/es/render/components/motion/feature-bundle.mjs
  init_define_import_meta_env();

  // node_modules/framer-motion/dist/es/motion/features/animations.mjs
  init_define_import_meta_env();

  // node_modules/framer-motion/dist/es/motion/features/animation/index.mjs
  init_define_import_meta_env();
  var AnimationFeature = class extends Feature {
    /**
     * We dynamically generate the AnimationState manager as it contains a reference
     * to the underlying animation library. We only want to load that if we load this,
     * so people can optionally code split it out using the `m` component.
     */
    constructor(node) {
      super(node);
      node.animationState || (node.animationState = createAnimationState(node));
    }
    updateAnimationControlsSubscription() {
      const { animate } = this.node.getProps();
      if (isAnimationControls(animate)) {
        this.unmountControls = animate.subscribe(this.node);
      }
    }
    /**
     * Subscribe any provided AnimationControls to the component's VisualElement
     */
    mount() {
      this.updateAnimationControlsSubscription();
    }
    update() {
      const { animate } = this.node.getProps();
      const { animate: prevAnimate } = this.node.prevProps || {};
      if (animate !== prevAnimate) {
        this.updateAnimationControlsSubscription();
      }
    }
    unmount() {
      this.node.animationState.reset();
      this.unmountControls?.();
    }
  };

  // node_modules/framer-motion/dist/es/motion/features/animation/exit.mjs
  init_define_import_meta_env();
  var id2 = 0;
  var ExitAnimationFeature = class extends Feature {
    constructor() {
      super(...arguments);
      this.id = id2++;
      this.isExitComplete = false;
    }
    update() {
      if (!this.node.presenceContext)
        return;
      const { isPresent, onExitComplete } = this.node.presenceContext;
      const { isPresent: prevIsPresent } = this.node.prevPresenceContext || {};
      if (!this.node.animationState || isPresent === prevIsPresent) {
        return;
      }
      if (isPresent && prevIsPresent === false) {
        if (this.isExitComplete) {
          const { initial, custom } = this.node.getProps();
          if (typeof initial === "string" || typeof initial === "object" && initial !== null && !Array.isArray(initial)) {
            const resolved = resolveVariant(this.node, initial, custom);
            if (resolved) {
              const { transition, transitionEnd, ...target } = resolved;
              for (const key in target) {
                this.node.getValue(key)?.jump(target[key]);
              }
            }
          }
          this.node.animationState.reset();
          this.node.animationState.animateChanges();
        } else {
          this.node.animationState.setActive("exit", false);
        }
        this.isExitComplete = false;
        return;
      }
      const exitAnimation = this.node.animationState.setActive("exit", !isPresent);
      if (onExitComplete && !isPresent) {
        exitAnimation.then(() => {
          this.isExitComplete = true;
          onExitComplete(this.id);
        });
      }
    }
    mount() {
      const { register, onExitComplete } = this.node.presenceContext || {};
      if (onExitComplete) {
        onExitComplete(this.id);
      }
      if (register) {
        this.unmount = register(this.id);
      }
    }
    unmount() {
    }
  };

  // node_modules/framer-motion/dist/es/motion/features/animations.mjs
  var animations = {
    animation: {
      Feature: AnimationFeature
    },
    exit: {
      Feature: ExitAnimationFeature
    }
  };

  // node_modules/framer-motion/dist/es/motion/features/drag.mjs
  init_define_import_meta_env();

  // node_modules/framer-motion/dist/es/gestures/drag/index.mjs
  init_define_import_meta_env();

  // node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs
  init_define_import_meta_env();

  // node_modules/framer-motion/dist/es/events/add-pointer-event.mjs
  init_define_import_meta_env();

  // node_modules/framer-motion/dist/es/events/event-info.mjs
  init_define_import_meta_env();
  function extractEventInfo(event) {
    return {
      point: {
        x: event.pageX,
        y: event.pageY
      }
    };
  }
  var addPointerInfo = (handler) => (event) => isPrimaryPointer(event) && handler(event, extractEventInfo(event));

  // node_modules/framer-motion/dist/es/events/add-pointer-event.mjs
  function addPointerEvent(target, eventName, handler, options) {
    return addDomEvent(target, eventName, addPointerInfo(handler), options);
  }

  // node_modules/framer-motion/dist/es/utils/get-context-window.mjs
  init_define_import_meta_env();
  var getContextWindow = ({ current }) => {
    return current ? current.ownerDocument.defaultView : null;
  };

  // node_modules/framer-motion/dist/es/gestures/pan/PanSession.mjs
  init_define_import_meta_env();

  // node_modules/framer-motion/dist/es/utils/distance.mjs
  init_define_import_meta_env();
  var distance = (a, b) => Math.abs(a - b);
  function distance2D(a, b) {
    const xDelta = distance(a.x, b.x);
    const yDelta = distance(a.y, b.y);
    return Math.sqrt(xDelta ** 2 + yDelta ** 2);
  }

  // node_modules/framer-motion/dist/es/gestures/pan/PanSession.mjs
  var overflowStyles = /* @__PURE__ */ new Set(["auto", "scroll"]);
  var PanSession = class {
    constructor(event, handlers, { transformPagePoint, contextWindow = window, dragSnapToOrigin = false, distanceThreshold = 3, element } = {}) {
      this.startEvent = null;
      this.lastMoveEvent = null;
      this.lastMoveEventInfo = null;
      this.lastRawMoveEventInfo = null;
      this.handlers = {};
      this.contextWindow = window;
      this.scrollPositions = /* @__PURE__ */ new Map();
      this.removeScrollListeners = null;
      this.onElementScroll = (event2) => {
        this.handleScroll(event2.target);
      };
      this.onWindowScroll = () => {
        this.handleScroll(window);
      };
      this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo))
          return;
        if (this.lastRawMoveEventInfo) {
          this.lastMoveEventInfo = transformPoint(this.lastRawMoveEventInfo, this.transformPagePoint);
        }
        const info2 = getPanInfo(this.lastMoveEventInfo, this.history);
        const isPanStarted = this.startEvent !== null;
        const isDistancePastThreshold = distance2D(info2.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!isPanStarted && !isDistancePastThreshold)
          return;
        const { point: point2 } = info2;
        const { timestamp: timestamp2 } = frameData;
        this.history.push({ ...point2, timestamp: timestamp2 });
        const { onStart, onMove } = this.handlers;
        if (!isPanStarted) {
          onStart && onStart(this.lastMoveEvent, info2);
          this.startEvent = this.lastMoveEvent;
        }
        onMove && onMove(this.lastMoveEvent, info2);
      };
      this.handlePointerMove = (event2, info2) => {
        this.lastMoveEvent = event2;
        this.lastRawMoveEventInfo = info2;
        this.lastMoveEventInfo = transformPoint(info2, this.transformPagePoint);
        frame.update(this.updatePoint, true);
      };
      this.handlePointerUp = (event2, info2) => {
        this.end();
        const { onEnd, onSessionEnd, resumeAnimation } = this.handlers;
        if (this.dragSnapToOrigin || !this.startEvent) {
          resumeAnimation && resumeAnimation();
        }
        if (!(this.lastMoveEvent && this.lastMoveEventInfo))
          return;
        const panInfo = getPanInfo(event2.type === "pointercancel" ? this.lastMoveEventInfo : transformPoint(info2, this.transformPagePoint), this.history);
        if (this.startEvent && onEnd) {
          onEnd(event2, panInfo);
        }
        onSessionEnd && onSessionEnd(event2, panInfo);
      };
      if (!isPrimaryPointer(event))
        return;
      this.dragSnapToOrigin = dragSnapToOrigin;
      this.handlers = handlers;
      this.transformPagePoint = transformPagePoint;
      this.distanceThreshold = distanceThreshold;
      this.contextWindow = contextWindow || window;
      const info = extractEventInfo(event);
      const initialInfo = transformPoint(info, this.transformPagePoint);
      const { point } = initialInfo;
      const { timestamp } = frameData;
      this.history = [{ ...point, timestamp }];
      const { onSessionStart } = handlers;
      onSessionStart && onSessionStart(event, getPanInfo(initialInfo, this.history));
      this.removeListeners = pipe(addPointerEvent(this.contextWindow, "pointermove", this.handlePointerMove), addPointerEvent(this.contextWindow, "pointerup", this.handlePointerUp), addPointerEvent(this.contextWindow, "pointercancel", this.handlePointerUp));
      if (element) {
        this.startScrollTracking(element);
      }
    }
    /**
     * Start tracking scroll on ancestors and window.
     */
    startScrollTracking(element) {
      let current = element.parentElement;
      while (current) {
        const style = getComputedStyle(current);
        if (overflowStyles.has(style.overflowX) || overflowStyles.has(style.overflowY)) {
          this.scrollPositions.set(current, {
            x: current.scrollLeft,
            y: current.scrollTop
          });
        }
        current = current.parentElement;
      }
      this.scrollPositions.set(window, {
        x: window.scrollX,
        y: window.scrollY
      });
      window.addEventListener("scroll", this.onElementScroll, {
        capture: true
      });
      window.addEventListener("scroll", this.onWindowScroll);
      this.removeScrollListeners = () => {
        window.removeEventListener("scroll", this.onElementScroll, {
          capture: true
        });
        window.removeEventListener("scroll", this.onWindowScroll);
      };
    }
    /**
     * Handle scroll compensation during drag.
     *
     * For element scroll: adjusts history origin since pageX/pageY doesn't change.
     * For window scroll: adjusts lastMoveEventInfo since pageX/pageY would change.
     */
    handleScroll(target) {
      const initial = this.scrollPositions.get(target);
      if (!initial)
        return;
      const isWindow = target === window;
      const current = isWindow ? { x: window.scrollX, y: window.scrollY } : {
        x: target.scrollLeft,
        y: target.scrollTop
      };
      const delta = { x: current.x - initial.x, y: current.y - initial.y };
      if (delta.x === 0 && delta.y === 0)
        return;
      if (isWindow) {
        if (this.lastMoveEventInfo) {
          this.lastMoveEventInfo.point.x += delta.x;
          this.lastMoveEventInfo.point.y += delta.y;
        }
      } else {
        if (this.history.length > 0) {
          this.history[0].x -= delta.x;
          this.history[0].y -= delta.y;
        }
      }
      this.scrollPositions.set(target, current);
      frame.update(this.updatePoint, true);
    }
    updateHandlers(handlers) {
      this.handlers = handlers;
    }
    end() {
      this.removeListeners && this.removeListeners();
      this.removeScrollListeners && this.removeScrollListeners();
      this.scrollPositions.clear();
      cancelFrame(this.updatePoint);
    }
  };
  function transformPoint(info, transformPagePoint) {
    return transformPagePoint ? { point: transformPagePoint(info.point) } : info;
  }
  function subtractPoint(a, b) {
    return { x: a.x - b.x, y: a.y - b.y };
  }
  function getPanInfo({ point }, history) {
    return {
      point,
      delta: subtractPoint(point, lastDevicePoint(history)),
      offset: subtractPoint(point, startDevicePoint(history)),
      velocity: getVelocity(history, 0.1)
    };
  }
  function startDevicePoint(history) {
    return history[0];
  }
  function lastDevicePoint(history) {
    return history[history.length - 1];
  }
  function getVelocity(history, timeDelta) {
    if (history.length < 2) {
      return { x: 0, y: 0 };
    }
    let i2 = history.length - 1;
    let timestampedPoint = null;
    const lastPoint = lastDevicePoint(history);
    while (i2 >= 0) {
      timestampedPoint = history[i2];
      if (lastPoint.timestamp - timestampedPoint.timestamp > secondsToMilliseconds(timeDelta)) {
        break;
      }
      i2--;
    }
    if (!timestampedPoint) {
      return { x: 0, y: 0 };
    }
    if (timestampedPoint === history[0] && history.length > 2 && lastPoint.timestamp - timestampedPoint.timestamp > secondsToMilliseconds(timeDelta) * 2) {
      timestampedPoint = history[1];
    }
    const time2 = millisecondsToSeconds(lastPoint.timestamp - timestampedPoint.timestamp);
    if (time2 === 0) {
      return { x: 0, y: 0 };
    }
    const currentVelocity = {
      x: (lastPoint.x - timestampedPoint.x) / time2,
      y: (lastPoint.y - timestampedPoint.y) / time2
    };
    if (currentVelocity.x === Infinity) {
      currentVelocity.x = 0;
    }
    if (currentVelocity.y === Infinity) {
      currentVelocity.y = 0;
    }
    return currentVelocity;
  }

  // node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.mjs
  init_define_import_meta_env();
  function applyConstraints(point, { min, max }, elastic) {
    if (min !== void 0 && point < min) {
      point = elastic ? mixNumber(min, point, elastic.min) : Math.max(point, min);
    } else if (max !== void 0 && point > max) {
      point = elastic ? mixNumber(max, point, elastic.max) : Math.min(point, max);
    }
    return point;
  }
  function calcRelativeAxisConstraints(axis, min, max) {
    return {
      min: min !== void 0 ? axis.min + min : void 0,
      max: max !== void 0 ? axis.max + max - (axis.max - axis.min) : void 0
    };
  }
  function calcRelativeConstraints(layoutBox, { top, left, bottom, right }) {
    return {
      x: calcRelativeAxisConstraints(layoutBox.x, left, right),
      y: calcRelativeAxisConstraints(layoutBox.y, top, bottom)
    };
  }
  function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
    let min = constraintsAxis.min - layoutAxis.min;
    let max = constraintsAxis.max - layoutAxis.max;
    if (constraintsAxis.max - constraintsAxis.min < layoutAxis.max - layoutAxis.min) {
      [min, max] = [max, min];
    }
    return { min, max };
  }
  function calcViewportConstraints(layoutBox, constraintsBox) {
    return {
      x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
      y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y)
    };
  }
  function calcOrigin(source, target) {
    let origin = 0.5;
    const sourceLength = calcLength(source);
    const targetLength = calcLength(target);
    if (targetLength > sourceLength) {
      origin = progress(target.min, target.max - sourceLength, source.min);
    } else if (sourceLength > targetLength) {
      origin = progress(source.min, source.max - targetLength, target.min);
    }
    return clamp(0, 1, origin);
  }
  function rebaseAxisConstraints(layout2, constraints) {
    const relativeConstraints = {};
    if (constraints.min !== void 0) {
      relativeConstraints.min = constraints.min - layout2.min;
    }
    if (constraints.max !== void 0) {
      relativeConstraints.max = constraints.max - layout2.min;
    }
    return relativeConstraints;
  }
  var defaultElastic = 0.35;
  function resolveDragElastic(dragElastic = defaultElastic) {
    if (dragElastic === false) {
      dragElastic = 0;
    } else if (dragElastic === true) {
      dragElastic = defaultElastic;
    }
    return {
      x: resolveAxisElastic(dragElastic, "left", "right"),
      y: resolveAxisElastic(dragElastic, "top", "bottom")
    };
  }
  function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
    return {
      min: resolvePointElastic(dragElastic, minLabel),
      max: resolvePointElastic(dragElastic, maxLabel)
    };
  }
  function resolvePointElastic(dragElastic, label) {
    return typeof dragElastic === "number" ? dragElastic : dragElastic[label] || 0;
  }

  // node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs
  var elementDragControls = /* @__PURE__ */ new WeakMap();
  var VisualElementDragControls = class {
    constructor(visualElement) {
      this.openDragLock = null;
      this.isDragging = false;
      this.currentDirection = null;
      this.originPoint = { x: 0, y: 0 };
      this.constraints = false;
      this.hasMutatedConstraints = false;
      this.elastic = createBox();
      this.latestPointerEvent = null;
      this.latestPanInfo = null;
      this.visualElement = visualElement;
    }
    start(originEvent, { snapToCursor = false, distanceThreshold } = {}) {
      const { presenceContext } = this.visualElement;
      if (presenceContext && presenceContext.isPresent === false)
        return;
      const onSessionStart = (event) => {
        if (snapToCursor) {
          this.snapToCursor(extractEventInfo(event).point);
        }
        this.stopAnimation();
      };
      const onStart = (event, info) => {
        const { drag: drag2, dragPropagation, onDragStart } = this.getProps();
        if (drag2 && !dragPropagation) {
          if (this.openDragLock)
            this.openDragLock();
          this.openDragLock = setDragLock(drag2);
          if (!this.openDragLock)
            return;
        }
        this.latestPointerEvent = event;
        this.latestPanInfo = info;
        this.isDragging = true;
        this.currentDirection = null;
        this.resolveConstraints();
        if (this.visualElement.projection) {
          this.visualElement.projection.isAnimationBlocked = true;
          this.visualElement.projection.target = void 0;
        }
        eachAxis((axis) => {
          let current = this.getAxisMotionValue(axis).get() || 0;
          if (percent.test(current)) {
            const { projection } = this.visualElement;
            if (projection && projection.layout) {
              const measuredAxis = projection.layout.layoutBox[axis];
              if (measuredAxis) {
                const length = calcLength(measuredAxis);
                current = length * (parseFloat(current) / 100);
              }
            }
          }
          this.originPoint[axis] = current;
        });
        if (onDragStart) {
          frame.update(() => onDragStart(event, info), false, true);
        }
        addValueToWillChange(this.visualElement, "transform");
        const { animationState } = this.visualElement;
        animationState && animationState.setActive("whileDrag", true);
      };
      const onMove = (event, info) => {
        this.latestPointerEvent = event;
        this.latestPanInfo = info;
        const { dragPropagation, dragDirectionLock, onDirectionLock, onDrag } = this.getProps();
        if (!dragPropagation && !this.openDragLock)
          return;
        const { offset } = info;
        if (dragDirectionLock && this.currentDirection === null) {
          this.currentDirection = getCurrentDirection(offset);
          if (this.currentDirection !== null) {
            onDirectionLock && onDirectionLock(this.currentDirection);
          }
          return;
        }
        this.updateAxis("x", info.point, offset);
        this.updateAxis("y", info.point, offset);
        this.visualElement.render();
        if (onDrag) {
          frame.update(() => onDrag(event, info), false, true);
        }
      };
      const onSessionEnd = (event, info) => {
        this.latestPointerEvent = event;
        this.latestPanInfo = info;
        this.stop(event, info);
        this.latestPointerEvent = null;
        this.latestPanInfo = null;
      };
      const resumeAnimation = () => {
        const { dragSnapToOrigin: snap } = this.getProps();
        if (snap || this.constraints) {
          this.startAnimation({ x: 0, y: 0 });
        }
      };
      const { dragSnapToOrigin } = this.getProps();
      this.panSession = new PanSession(originEvent, {
        onSessionStart,
        onStart,
        onMove,
        onSessionEnd,
        resumeAnimation
      }, {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin,
        distanceThreshold,
        contextWindow: getContextWindow(this.visualElement),
        element: this.visualElement.current
      });
    }
    /**
     * @internal
     */
    stop(event, panInfo) {
      const finalEvent = event || this.latestPointerEvent;
      const finalPanInfo = panInfo || this.latestPanInfo;
      const isDragging2 = this.isDragging;
      this.cancel();
      if (!isDragging2 || !finalPanInfo || !finalEvent)
        return;
      const { velocity } = finalPanInfo;
      this.startAnimation(velocity);
      const { onDragEnd } = this.getProps();
      if (onDragEnd) {
        frame.postRender(() => onDragEnd(finalEvent, finalPanInfo));
      }
    }
    /**
     * @internal
     */
    cancel() {
      this.isDragging = false;
      const { projection, animationState } = this.visualElement;
      if (projection) {
        projection.isAnimationBlocked = false;
      }
      this.endPanSession();
      const { dragPropagation } = this.getProps();
      if (!dragPropagation && this.openDragLock) {
        this.openDragLock();
        this.openDragLock = null;
      }
      animationState && animationState.setActive("whileDrag", false);
    }
    /**
     * Clean up the pan session without modifying other drag state.
     * This is used during unmount to ensure event listeners are removed
     * without affecting projection animations or drag locks.
     * @internal
     */
    endPanSession() {
      this.panSession && this.panSession.end();
      this.panSession = void 0;
    }
    updateAxis(axis, _point, offset) {
      const { drag: drag2 } = this.getProps();
      if (!offset || !shouldDrag(axis, drag2, this.currentDirection))
        return;
      const axisValue = this.getAxisMotionValue(axis);
      let next = this.originPoint[axis] + offset[axis];
      if (this.constraints && this.constraints[axis]) {
        next = applyConstraints(next, this.constraints[axis], this.elastic[axis]);
      }
      axisValue.set(next);
    }
    resolveConstraints() {
      const { dragConstraints, dragElastic } = this.getProps();
      const layout2 = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(false) : this.visualElement.projection?.layout;
      const prevConstraints = this.constraints;
      if (dragConstraints && isRefObject(dragConstraints)) {
        if (!this.constraints) {
          this.constraints = this.resolveRefConstraints();
        }
      } else {
        if (dragConstraints && layout2) {
          this.constraints = calcRelativeConstraints(layout2.layoutBox, dragConstraints);
        } else {
          this.constraints = false;
        }
      }
      this.elastic = resolveDragElastic(dragElastic);
      if (prevConstraints !== this.constraints && !isRefObject(dragConstraints) && layout2 && this.constraints && !this.hasMutatedConstraints) {
        eachAxis((axis) => {
          if (this.constraints !== false && this.getAxisMotionValue(axis)) {
            this.constraints[axis] = rebaseAxisConstraints(layout2.layoutBox[axis], this.constraints[axis]);
          }
        });
      }
    }
    resolveRefConstraints() {
      const { dragConstraints: constraints, onMeasureDragConstraints } = this.getProps();
      if (!constraints || !isRefObject(constraints))
        return false;
      const constraintsElement = constraints.current;
      invariant(constraintsElement !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
      const { projection } = this.visualElement;
      if (!projection || !projection.layout)
        return false;
      if (projection.root) {
        projection.root.scroll = void 0;
        projection.root.updateScroll();
      }
      const constraintsBox = measurePageBox(constraintsElement, projection.root, this.visualElement.getTransformPagePoint());
      let measuredConstraints = calcViewportConstraints(projection.layout.layoutBox, constraintsBox);
      if (onMeasureDragConstraints) {
        const userConstraints = onMeasureDragConstraints(convertBoxToBoundingBox(measuredConstraints));
        this.hasMutatedConstraints = !!userConstraints;
        if (userConstraints) {
          measuredConstraints = convertBoundingBoxToBox(userConstraints);
        }
      }
      return measuredConstraints;
    }
    startAnimation(velocity) {
      const { drag: drag2, dragMomentum, dragElastic, dragTransition, dragSnapToOrigin, onDragTransitionEnd } = this.getProps();
      const constraints = this.constraints || {};
      const momentumAnimations = eachAxis((axis) => {
        if (!shouldDrag(axis, drag2, this.currentDirection)) {
          return;
        }
        let transition = constraints && constraints[axis] || {};
        if (dragSnapToOrigin === true || dragSnapToOrigin === axis)
          transition = { min: 0, max: 0 };
        const bounceStiffness = dragElastic ? 200 : 1e6;
        const bounceDamping = dragElastic ? 40 : 1e7;
        const inertia2 = {
          type: "inertia",
          velocity: dragMomentum ? velocity[axis] : 0,
          bounceStiffness,
          bounceDamping,
          timeConstant: 750,
          restDelta: 1,
          restSpeed: 10,
          ...dragTransition,
          ...transition
        };
        return this.startAxisValueAnimation(axis, inertia2);
      });
      return Promise.all(momentumAnimations).then(onDragTransitionEnd);
    }
    startAxisValueAnimation(axis, transition) {
      const axisValue = this.getAxisMotionValue(axis);
      addValueToWillChange(this.visualElement, axis);
      return axisValue.start(animateMotionValue(axis, axisValue, 0, transition, this.visualElement, false));
    }
    stopAnimation() {
      eachAxis((axis) => this.getAxisMotionValue(axis).stop());
    }
    /**
     * Drag works differently depending on which props are provided.
     *
     * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
     * - Otherwise, we apply the delta to the x/y motion values.
     */
    getAxisMotionValue(axis) {
      const dragKey = `_drag${axis.toUpperCase()}`;
      const props = this.visualElement.getProps();
      const externalMotionValue = props[dragKey];
      return externalMotionValue ? externalMotionValue : this.visualElement.getValue(axis, this.visualElement.latestValues[axis] ?? 0);
    }
    snapToCursor(point) {
      eachAxis((axis) => {
        const { drag: drag2 } = this.getProps();
        if (!shouldDrag(axis, drag2, this.currentDirection))
          return;
        const { projection } = this.visualElement;
        const axisValue = this.getAxisMotionValue(axis);
        if (projection && projection.layout) {
          const { min, max } = projection.layout.layoutBox[axis];
          const current = axisValue.get() || 0;
          axisValue.set(point[axis] - mixNumber(min, max, 0.5) + current);
        }
      });
    }
    /**
     * When the viewport resizes we want to check if the measured constraints
     * have changed and, if so, reposition the element within those new constraints
     * relative to where it was before the resize.
     */
    scalePositionWithinConstraints() {
      if (!this.visualElement.current)
        return;
      const { drag: drag2, dragConstraints } = this.getProps();
      const { projection } = this.visualElement;
      if (!isRefObject(dragConstraints) || !projection || !this.constraints)
        return;
      this.stopAnimation();
      const boxProgress = { x: 0, y: 0 };
      eachAxis((axis) => {
        const axisValue = this.getAxisMotionValue(axis);
        if (axisValue && this.constraints !== false) {
          const latest = axisValue.get();
          boxProgress[axis] = calcOrigin({ min: latest, max: latest }, this.constraints[axis]);
        }
      });
      const { transformTemplate } = this.visualElement.getProps();
      this.visualElement.current.style.transform = transformTemplate ? transformTemplate({}, "") : "none";
      projection.root && projection.root.updateScroll();
      projection.updateLayout();
      this.constraints = false;
      this.resolveConstraints();
      eachAxis((axis) => {
        if (!shouldDrag(axis, drag2, null))
          return;
        const axisValue = this.getAxisMotionValue(axis);
        const { min, max } = this.constraints[axis];
        axisValue.set(mixNumber(min, max, boxProgress[axis]));
      });
      this.visualElement.render();
    }
    addListeners() {
      if (!this.visualElement.current)
        return;
      elementDragControls.set(this.visualElement, this);
      const element = this.visualElement.current;
      const stopPointerListener = addPointerEvent(element, "pointerdown", (event) => {
        const { drag: drag2, dragListener = true } = this.getProps();
        const target = event.target;
        const isClickingTextInputChild = target !== element && isElementTextInput(target);
        if (drag2 && dragListener && !isClickingTextInputChild) {
          this.start(event);
        }
      });
      let stopResizeObservers;
      const measureDragConstraints = () => {
        const { dragConstraints } = this.getProps();
        if (isRefObject(dragConstraints) && dragConstraints.current) {
          this.constraints = this.resolveRefConstraints();
          if (!stopResizeObservers) {
            stopResizeObservers = startResizeObservers(element, dragConstraints.current, () => this.scalePositionWithinConstraints());
          }
        }
      };
      const { projection } = this.visualElement;
      const stopMeasureLayoutListener = projection.addEventListener("measure", measureDragConstraints);
      if (projection && !projection.layout) {
        projection.root && projection.root.updateScroll();
        projection.updateLayout();
      }
      frame.read(measureDragConstraints);
      const stopResizeListener = addDomEvent(window, "resize", () => this.scalePositionWithinConstraints());
      const stopLayoutUpdateListener = projection.addEventListener("didUpdate", (({ delta, hasLayoutChanged }) => {
        if (this.isDragging && hasLayoutChanged) {
          eachAxis((axis) => {
            const motionValue2 = this.getAxisMotionValue(axis);
            if (!motionValue2)
              return;
            this.originPoint[axis] += delta[axis].translate;
            motionValue2.set(motionValue2.get() + delta[axis].translate);
          });
          this.visualElement.render();
        }
      }));
      return () => {
        stopResizeListener();
        stopPointerListener();
        stopMeasureLayoutListener();
        stopLayoutUpdateListener && stopLayoutUpdateListener();
        stopResizeObservers && stopResizeObservers();
      };
    }
    getProps() {
      const props = this.visualElement.getProps();
      const { drag: drag2 = false, dragDirectionLock = false, dragPropagation = false, dragConstraints = false, dragElastic = defaultElastic, dragMomentum = true } = props;
      return {
        ...props,
        drag: drag2,
        dragDirectionLock,
        dragPropagation,
        dragConstraints,
        dragElastic,
        dragMomentum
      };
    }
  };
  function skipFirstCall(callback) {
    let isFirst = true;
    return () => {
      if (isFirst) {
        isFirst = false;
        return;
      }
      callback();
    };
  }
  function startResizeObservers(element, constraintsElement, onResize) {
    const stopElement = resize(element, skipFirstCall(onResize));
    const stopContainer = resize(constraintsElement, skipFirstCall(onResize));
    return () => {
      stopElement();
      stopContainer();
    };
  }
  function shouldDrag(direction, drag2, currentDirection) {
    return (drag2 === true || drag2 === direction) && (currentDirection === null || currentDirection === direction);
  }
  function getCurrentDirection(offset, lockThreshold = 10) {
    let direction = null;
    if (Math.abs(offset.y) > lockThreshold) {
      direction = "y";
    } else if (Math.abs(offset.x) > lockThreshold) {
      direction = "x";
    }
    return direction;
  }

  // node_modules/framer-motion/dist/es/gestures/drag/index.mjs
  var DragGesture = class extends Feature {
    constructor(node) {
      super(node);
      this.removeGroupControls = noop;
      this.removeListeners = noop;
      this.controls = new VisualElementDragControls(node);
    }
    mount() {
      const { dragControls } = this.node.getProps();
      if (dragControls) {
        this.removeGroupControls = dragControls.subscribe(this.controls);
      }
      this.removeListeners = this.controls.addListeners() || noop;
    }
    update() {
      const { dragControls } = this.node.getProps();
      const { dragControls: prevDragControls } = this.node.prevProps || {};
      if (dragControls !== prevDragControls) {
        this.removeGroupControls();
        if (dragControls) {
          this.removeGroupControls = dragControls.subscribe(this.controls);
        }
      }
    }
    unmount() {
      this.removeGroupControls();
      this.removeListeners();
      if (!this.controls.isDragging) {
        this.controls.endPanSession();
      }
    }
  };

  // node_modules/framer-motion/dist/es/gestures/pan/index.mjs
  init_define_import_meta_env();
  var asyncHandler = (handler) => (event, info) => {
    if (handler) {
      frame.update(() => handler(event, info), false, true);
    }
  };
  var PanGesture = class extends Feature {
    constructor() {
      super(...arguments);
      this.removePointerDownListener = noop;
    }
    onPointerDown(pointerDownEvent) {
      this.session = new PanSession(pointerDownEvent, this.createPanHandlers(), {
        transformPagePoint: this.node.getTransformPagePoint(),
        contextWindow: getContextWindow(this.node)
      });
    }
    createPanHandlers() {
      const { onPanSessionStart, onPanStart, onPan, onPanEnd } = this.node.getProps();
      return {
        onSessionStart: asyncHandler(onPanSessionStart),
        onStart: asyncHandler(onPanStart),
        onMove: asyncHandler(onPan),
        onEnd: (event, info) => {
          delete this.session;
          if (onPanEnd) {
            frame.postRender(() => onPanEnd(event, info));
          }
        }
      };
    }
    mount() {
      this.removePointerDownListener = addPointerEvent(this.node.current, "pointerdown", (event) => this.onPointerDown(event));
    }
    update() {
      this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
      this.removePointerDownListener();
      this.session && this.session.end();
    }
  };

  // node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs
  init_define_import_meta_env();
  var import_jsx_runtime12 = __toESM(require_react_shim(), 1);
  var import_react25 = __toESM(require_react_shim(), 1);
  var hasTakenAnySnapshot = false;
  var MeasureLayoutWithContext = class extends import_react25.Component {
    /**
     * This only mounts projection nodes for components that
     * need measuring, we might want to do it for all components
     * in order to incorporate transforms
     */
    componentDidMount() {
      const { visualElement, layoutGroup, switchLayoutGroup, layoutId } = this.props;
      const { projection } = visualElement;
      if (projection) {
        if (layoutGroup.group)
          layoutGroup.group.add(projection);
        if (switchLayoutGroup && switchLayoutGroup.register && layoutId) {
          switchLayoutGroup.register(projection);
        }
        if (hasTakenAnySnapshot) {
          projection.root.didUpdate();
        }
        projection.addEventListener("animationComplete", () => {
          this.safeToRemove();
        });
        projection.setOptions({
          ...projection.options,
          layoutDependency: this.props.layoutDependency,
          onExitComplete: () => this.safeToRemove()
        });
      }
      globalProjectionState.hasEverUpdated = true;
    }
    getSnapshotBeforeUpdate(prevProps) {
      const { layoutDependency, visualElement, drag: drag2, isPresent } = this.props;
      const { projection } = visualElement;
      if (!projection)
        return null;
      projection.isPresent = isPresent;
      if (prevProps.layoutDependency !== layoutDependency) {
        projection.setOptions({
          ...projection.options,
          layoutDependency
        });
      }
      hasTakenAnySnapshot = true;
      if (drag2 || prevProps.layoutDependency !== layoutDependency || layoutDependency === void 0 || prevProps.isPresent !== isPresent) {
        projection.willUpdate();
      } else {
        this.safeToRemove();
      }
      if (prevProps.isPresent !== isPresent) {
        if (isPresent) {
          projection.promote();
        } else if (!projection.relegate()) {
          frame.postRender(() => {
            const stack = projection.getStack();
            if (!stack || !stack.members.length) {
              this.safeToRemove();
            }
          });
        }
      }
      return null;
    }
    componentDidUpdate() {
      const { visualElement, layoutAnchor } = this.props;
      const { projection } = visualElement;
      if (projection) {
        projection.options.layoutAnchor = layoutAnchor;
        projection.root.didUpdate();
        microtask.postRender(() => {
          if (!projection.currentAnimation && projection.isLead()) {
            this.safeToRemove();
          }
        });
      }
    }
    componentWillUnmount() {
      const { visualElement, layoutGroup, switchLayoutGroup: promoteContext } = this.props;
      const { projection } = visualElement;
      hasTakenAnySnapshot = true;
      if (projection) {
        projection.scheduleCheckAfterUnmount();
        if (layoutGroup && layoutGroup.group)
          layoutGroup.group.remove(projection);
        if (promoteContext && promoteContext.deregister)
          promoteContext.deregister(projection);
      }
    }
    safeToRemove() {
      const { safeToRemove } = this.props;
      safeToRemove && safeToRemove();
    }
    render() {
      return null;
    }
  };
  function MeasureLayout(props) {
    const [isPresent, safeToRemove] = usePresence2();
    const layoutGroup = (0, import_react25.useContext)(LayoutGroupContext);
    return (0, import_jsx_runtime12.jsx)(MeasureLayoutWithContext, { ...props, layoutGroup, switchLayoutGroup: (0, import_react25.useContext)(SwitchLayoutGroupContext), isPresent, safeToRemove });
  }

  // node_modules/framer-motion/dist/es/motion/features/drag.mjs
  var drag = {
    pan: {
      Feature: PanGesture
    },
    drag: {
      Feature: DragGesture,
      ProjectionNode: HTMLProjectionNode,
      MeasureLayout
    }
  };

  // node_modules/framer-motion/dist/es/motion/features/gestures.mjs
  init_define_import_meta_env();

  // node_modules/framer-motion/dist/es/gestures/hover.mjs
  init_define_import_meta_env();
  function handleHoverEvent(node, event, lifecycle) {
    const { props } = node;
    if (node.animationState && props.whileHover) {
      node.animationState.setActive("whileHover", lifecycle === "Start");
    }
    const eventName = "onHover" + lifecycle;
    const callback = props[eventName];
    if (callback) {
      frame.postRender(() => callback(event, extractEventInfo(event)));
    }
  }
  var HoverGesture = class extends Feature {
    mount() {
      const { current } = this.node;
      if (!current)
        return;
      this.unmount = hover(current, (_element, startEvent) => {
        handleHoverEvent(this.node, startEvent, "Start");
        return (endEvent) => handleHoverEvent(this.node, endEvent, "End");
      });
    }
    unmount() {
    }
  };

  // node_modules/framer-motion/dist/es/gestures/focus.mjs
  init_define_import_meta_env();
  var FocusGesture = class extends Feature {
    constructor() {
      super(...arguments);
      this.isActive = false;
    }
    onFocus() {
      let isFocusVisible = false;
      try {
        isFocusVisible = this.node.current.matches(":focus-visible");
      } catch (e2) {
        isFocusVisible = true;
      }
      if (!isFocusVisible || !this.node.animationState)
        return;
      this.node.animationState.setActive("whileFocus", true);
      this.isActive = true;
    }
    onBlur() {
      if (!this.isActive || !this.node.animationState)
        return;
      this.node.animationState.setActive("whileFocus", false);
      this.isActive = false;
    }
    mount() {
      this.unmount = pipe(addDomEvent(this.node.current, "focus", () => this.onFocus()), addDomEvent(this.node.current, "blur", () => this.onBlur()));
    }
    unmount() {
    }
  };

  // node_modules/framer-motion/dist/es/gestures/press.mjs
  init_define_import_meta_env();
  function handlePressEvent(node, event, lifecycle) {
    const { props } = node;
    if (node.current instanceof HTMLButtonElement && node.current.disabled) {
      return;
    }
    if (node.animationState && props.whileTap) {
      node.animationState.setActive("whileTap", lifecycle === "Start");
    }
    const eventName = "onTap" + (lifecycle === "End" ? "" : lifecycle);
    const callback = props[eventName];
    if (callback) {
      frame.postRender(() => callback(event, extractEventInfo(event)));
    }
  }
  var PressGesture = class extends Feature {
    mount() {
      const { current } = this.node;
      if (!current)
        return;
      const { globalTapTarget, propagate } = this.node.props;
      this.unmount = press(current, (_element, startEvent) => {
        handlePressEvent(this.node, startEvent, "Start");
        return (endEvent, { success }) => handlePressEvent(this.node, endEvent, success ? "End" : "Cancel");
      }, {
        useGlobalTarget: globalTapTarget,
        stopPropagation: propagate?.tap === false
      });
    }
    unmount() {
    }
  };

  // node_modules/framer-motion/dist/es/motion/features/viewport/index.mjs
  init_define_import_meta_env();

  // node_modules/framer-motion/dist/es/motion/features/viewport/observers.mjs
  init_define_import_meta_env();
  var observerCallbacks = /* @__PURE__ */ new WeakMap();
  var observers = /* @__PURE__ */ new WeakMap();
  var fireObserverCallback = (entry) => {
    const callback = observerCallbacks.get(entry.target);
    callback && callback(entry);
  };
  var fireAllObserverCallbacks = (entries) => {
    entries.forEach(fireObserverCallback);
  };
  function initIntersectionObserver({ root, ...options }) {
    const lookupRoot = root || document;
    if (!observers.has(lookupRoot)) {
      observers.set(lookupRoot, {});
    }
    const rootObservers = observers.get(lookupRoot);
    const key = JSON.stringify(options);
    if (!rootObservers[key]) {
      rootObservers[key] = new IntersectionObserver(fireAllObserverCallbacks, { root, ...options });
    }
    return rootObservers[key];
  }
  function observeIntersection(element, options, callback) {
    const rootInteresectionObserver = initIntersectionObserver(options);
    observerCallbacks.set(element, callback);
    rootInteresectionObserver.observe(element);
    return () => {
      observerCallbacks.delete(element);
      rootInteresectionObserver.unobserve(element);
    };
  }

  // node_modules/framer-motion/dist/es/motion/features/viewport/index.mjs
  var thresholdNames = {
    some: 0,
    all: 1
  };
  var InViewFeature = class extends Feature {
    constructor() {
      super(...arguments);
      this.hasEnteredView = false;
      this.isInView = false;
    }
    startObserver() {
      this.stopObserver?.();
      const { viewport = {} } = this.node.getProps();
      const { root, margin: rootMargin, amount = "some", once } = viewport;
      const options = {
        root: root ? root.current : void 0,
        rootMargin,
        threshold: typeof amount === "number" ? amount : thresholdNames[amount]
      };
      const onIntersectionUpdate = (entry) => {
        const { isIntersecting } = entry;
        if (this.isInView === isIntersecting)
          return;
        this.isInView = isIntersecting;
        if (once && !isIntersecting && this.hasEnteredView) {
          return;
        } else if (isIntersecting) {
          this.hasEnteredView = true;
        }
        if (this.node.animationState) {
          this.node.animationState.setActive("whileInView", isIntersecting);
        }
        const { onViewportEnter, onViewportLeave } = this.node.getProps();
        const callback = isIntersecting ? onViewportEnter : onViewportLeave;
        callback && callback(entry);
      };
      this.stopObserver = observeIntersection(this.node.current, options, onIntersectionUpdate);
    }
    mount() {
      this.startObserver();
    }
    update() {
      if (typeof IntersectionObserver === "undefined")
        return;
      const { props, prevProps } = this.node;
      const hasOptionsChanged = ["amount", "margin", "root"].some(hasViewportOptionChanged(props, prevProps));
      if (hasOptionsChanged) {
        this.startObserver();
      }
    }
    unmount() {
      this.stopObserver?.();
      this.hasEnteredView = false;
      this.isInView = false;
    }
  };
  function hasViewportOptionChanged({ viewport = {} }, { viewport: prevViewport = {} } = {}) {
    return (name) => viewport[name] !== prevViewport[name];
  }

  // node_modules/framer-motion/dist/es/motion/features/gestures.mjs
  var gestureAnimations = {
    inView: {
      Feature: InViewFeature
    },
    tap: {
      Feature: PressGesture
    },
    focus: {
      Feature: FocusGesture
    },
    hover: {
      Feature: HoverGesture
    }
  };

  // node_modules/framer-motion/dist/es/motion/features/layout.mjs
  init_define_import_meta_env();
  var layout = {
    layout: {
      ProjectionNode: HTMLProjectionNode,
      MeasureLayout
    }
  };

  // node_modules/framer-motion/dist/es/render/components/motion/feature-bundle.mjs
  var featureBundle = {
    ...animations,
    ...gestureAnimations,
    ...drag,
    ...layout
  };

  // node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs
  var motion = /* @__PURE__ */ createMotionProxy(featureBundle, createDomVisualElement);

  // src/components/sliding-tab-trigger.tsx
  init_utils();
  function SlidingTabTrigger({
    value,
    activeTab,
    children,
    className,
    layoutId = "app-tab-indicator"
  }) {
    const isActive = value === activeTab;
    return /* @__PURE__ */ React.createElement(
      TabsTrigger2,
      {
        value,
        className: cn(
          "relative bg-transparent shadow-none data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none",
          className
        )
      },
      isActive ? /* @__PURE__ */ React.createElement(
        motion.span,
        {
          layoutId,
          className: "absolute inset-0 rounded-md bg-background shadow",
          transition: { type: "spring", stiffness: 500, damping: 35 },
          "aria-hidden": true
        }
      ) : null,
      /* @__PURE__ */ React.createElement("span", { className: "relative z-10" }, children)
    );
  }

  // src/components/gobby/gobby-mascot.tsx
  init_define_import_meta_env();

  // .design-sync/shims/next-dynamic.tsx
  init_define_import_meta_env();
  var React20 = __toESM(require_react_shim());
  function dynamic(loader, opts) {
    const Lazy = React20.lazy(async () => {
      const mod = await loader();
      const Comp = (mod && mod.default) ?? mod;
      return { default: Comp };
    });
    return function DynamicShim(props) {
      const fallback = opts?.loading ? opts.loading() : null;
      return React20.createElement(React20.Suspense, { fallback }, React20.createElement(Lazy, props));
    };
  }

  // src/components/gobby/gobby-mascot.tsx
  var import_react29 = __toESM(require_react_shim());
  init_utils();
  var ChillUtilCatFace2 = dynamic(
    () => Promise.resolve().then(() => (init_chill_util_cat_face(), chill_util_cat_face_exports)).then((mod) => mod.ChillUtilCatFace),
    { ssr: false, loading: () => null }
  );
  var GOBBY_VIEWBOX = 2048;
  var GOBBY_FACE = {
    centerX: 941.5,
    centerY: 1014,
    widthU: 700
  };
  var GOBBY_PORTRAIT = {
    centerX: 1024,
    centerY: 1080,
    radius: 820
  };
  var GOBBY_FACE_STROKE = "#334E43";
  var toViewBoxPct = (units) => units / GOBBY_VIEWBOX * 100;
  var faceWidthPct = toViewBoxPct(GOBBY_FACE.widthU);
  var faceLeftPct = toViewBoxPct(GOBBY_FACE.centerX);
  var faceTopPct = toViewBoxPct(GOBBY_FACE.centerY);
  var portraitSizePct = toViewBoxPct(GOBBY_PORTRAIT.radius * 2);
  var portraitLeftPct = toViewBoxPct(GOBBY_PORTRAIT.centerX - GOBBY_PORTRAIT.radius);
  var portraitTopPct = toViewBoxPct(GOBBY_PORTRAIT.centerY - GOBBY_PORTRAIT.radius);
  var GOBBY_EXPRESSION_CYCLE = [
    "neutral",
    "happy",
    "surprised",
    "sad",
    "angry",
    "excited",
    "derpy"
  ];
  function GobbyMascot({
    className,
    frameClassName,
    smiley = false,
    onTap
  }) {
    const [expression, setExpression] = (0, import_react29.useState)("neutral");
    const cycleExpression = (0, import_react29.useCallback)(() => {
      setExpression((prev) => {
        const i2 = GOBBY_EXPRESSION_CYCLE.indexOf(prev);
        const next = i2 >= 0 ? GOBBY_EXPRESSION_CYCLE[(i2 + 1) % GOBBY_EXPRESSION_CYCLE.length] : GOBBY_EXPRESSION_CYCLE[0];
        return next;
      });
    }, []);
    const handleTap = () => {
      if (smiley) return;
      cycleExpression();
      onTap?.();
    };
    const frame2 = /* @__PURE__ */ React.createElement(
      "div",
      {
        className: cn(
          "relative mx-auto aspect-square w-full",
          frameClassName ?? "max-w-[12rem] sm:max-w-[13rem]"
        )
      },
      /* @__PURE__ */ React.createElement(
        "div",
        {
          "aria-hidden": true,
          className: "pointer-events-none absolute z-0 rounded-full",
          style: {
            left: `${portraitLeftPct}%`,
            top: `${portraitTopPct}%`,
            width: `${portraitSizePct}%`,
            height: `${portraitSizePct}%`,
            background: "radial-gradient(circle, rgba(132,155,73,0.4) 0%, rgba(132,155,73,0.15) 55%, transparent 72%)",
            boxShadow: "0 0 32px 10px rgba(132,155,73,0.2)"
          }
        }
      ),
      /* @__PURE__ */ React.createElement(
        "img",
        {
          src: "/gobby.svg",
          alt: "",
          width: 2048,
          height: 2048,
          decoding: "async",
          fetchPriority: "high",
          draggable: false,
          className: "pointer-events-none absolute inset-0 z-0 h-full w-full select-none object-contain"
        }
      ),
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "pointer-events-none absolute z-10",
          style: {
            left: `${faceLeftPct}%`,
            top: `${faceTopPct}%`,
            width: `${faceWidthPct}%`,
            transform: "translate(-50%, -50%)"
          }
        },
        /* @__PURE__ */ React.createElement(
          ChillUtilCatFace2,
          {
            className: "h-full w-full",
            strokeColor: GOBBY_FACE_STROKE,
            followPointer: onTap ? "local" : "viewport",
            eyeOffsetRadius: 18,
            facialExpression: smiley ? "pleasant" : expression,
            interactive: false
          }
        )
      )
    );
    const label = `Gobby mascot, ${expression} expression. Tap to change.`;
    if (onTap && !smiley) {
      return /* @__PURE__ */ React.createElement(
        "button",
        {
          type: "button",
          className: cn(
            "flex w-full cursor-pointer justify-center border-0 bg-transparent p-0",
            className
          ),
          onClick: handleTap,
          "aria-label": label
        },
        frame2
      );
    }
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        className: cn("flex w-full justify-center", className),
        role: "img",
        "aria-label": label
      },
      frame2
    );
  }

  // src/components/text-fx/text-fx-panel.tsx
  init_define_import_meta_env();
  var import_react31 = __toESM(require_react_shim());

  // .design-sync/shims/fonts.ts
  init_define_import_meta_env();
  var runescapeUF = {
    className: "ds-font-runescape",
    variable: "--font-runescape",
    style: { fontFamily: '"RuneScape UF", ui-sans-serif, sans-serif' }
  };

  // src/components/text-fx/text-fx-panel.tsx
  init_utils();
  var FX_COLORS = [
    { id: "red", hex: "#d83c3c" },
    { id: "orange", hex: "#ee8d2c" },
    { id: "yellow", hex: "#ecc24e" },
    { id: "green", hex: "#46a832" },
    { id: "cyan", hex: "#46c8d2" },
    { id: "blue", hex: "#3f6fd6" },
    { id: "purple", hex: "#b455c8" },
    { id: "pink", hex: "#e986b4" },
    { id: "brown", hex: "#8a6a46" },
    { id: "grey", hex: "#9b9b9b" },
    { id: "white", hex: "#ffffff" },
    { id: "inverted", hex: null },
    { id: "rainbow", hex: null }
  ];
  var FX_EFFECTS = {
    none: { kind: "none" },
    wave: { kind: "char", kf: "fxWave", dur: "1s", step: 0.07 },
    wave2: { kind: "char", kf: "fxWave2", dur: "1s", step: 0.07 },
    wave3: { kind: "char", kf: "fxWave3", dur: "1s", step: 0.07 },
    shake: { kind: "char", kf: "fxShake", dur: "0.35s", step: 0.03 },
    shake2: { kind: "char", kf: "fxShake2", dur: "0.28s", step: 0.02 },
    glow: { kind: "inner", anim: "fxGlow 1.3s ease-in-out infinite" },
    flash: { kind: "inner", anim: "fxFlash 0.7s steps(1) infinite" },
    scroll: { kind: "wrap", anim: "fxScrollL 4s linear infinite" },
    scroll2: { kind: "wrap", anim: "fxScrollR 4s linear infinite" },
    slide: { kind: "wrap", anim: "fxSlideD 2.6s ease-in-out infinite" },
    slide2: { kind: "wrap", anim: "fxSlideU 2.6s ease-in-out infinite" },
    mirror: { kind: "static", transform: "scaleX(-1)" }
  };
  function FxPreview({
    text,
    color: color2,
    effect
  }) {
    const spec = FX_EFFECTS[effect];
    const colorDef = FX_COLORS.find((c) => c.id === color2);
    const glowColor = colorDef.hex ?? "#ffe27a";
    const chars = [...text || " "].map((ch, i2) => {
      const style = {
        display: "inline-block",
        whiteSpace: "pre"
      };
      const anims = [];
      if (spec.kind === "char") {
        anims.push(
          `${spec.kf} ${spec.dur} ease-in-out infinite ${(i2 * spec.step).toFixed(2)}s`
        );
      }
      if (color2 === "rainbow") {
        anims.push(`fxRainbow 1.6s linear infinite ${(i2 * 0.09).toFixed(2)}s`);
      }
      if (anims.length) style.animation = anims.join(", ");
      if (color2 === "inverted") {
        style.color = "transparent";
        style.WebkitTextStroke = "1px #d8cdb4";
      } else if (color2 !== "rainbow" && colorDef.hex) {
        style.color = colorDef.hex;
      }
      return /* @__PURE__ */ React.createElement("span", { key: i2, style }, ch);
    });
    const innerStyle = {};
    if (spec.kind === "inner") {
      innerStyle.animation = spec.anim;
      if (effect === "glow") innerStyle["--glow"] = glowColor;
    }
    const wrapStyle = {
      display: "inline-block",
      whiteSpace: "nowrap"
    };
    if (spec.kind === "wrap") wrapStyle.animation = spec.anim;
    if (spec.kind === "static") wrapStyle.transform = spec.transform;
    return /* @__PURE__ */ React.createElement("span", { style: wrapStyle }, /* @__PURE__ */ React.createElement("span", { style: innerStyle }, chars));
  }
  function TextFxPanel() {
    const [text, setText] = (0, import_react31.useState)("Nat 20!");
    const [color2, setColor] = (0, import_react31.useState)("rainbow");
    const [effect, setEffect] = (0, import_react31.useState)("wave");
    const [copied, setCopied] = (0, import_react31.useState)(false);
    const codeTag = (0, import_react31.useMemo)(
      () => `${effect !== "none" ? `${effect}:` : ""}${color2}:${text}`,
      [color2, effect, text]
    );
    const copy = async () => {
      await navigator.clipboard?.writeText(codeTag);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    };
    return /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-0" }, /* @__PURE__ */ React.createElement(
      motion.header,
      {
        className: "mb-6 flex flex-col gap-2",
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.45 }
      },
      /* @__PURE__ */ React.createElement("p", { className: "text-sm font-medium uppercase tracking-widest text-muted-foreground" }, "Text FX"),
      /* @__PURE__ */ React.createElement("h1", { className: "text-3xl font-semibold tracking-tight" }, "Goblin text renderer"),
      /* @__PURE__ */ React.createElement("p", { className: "text-muted-foreground" }, "RuneScape-style chat colours & effects. Type, pick, and watch it move.")
    ), /* @__PURE__ */ React.createElement("div", { className: "fx-stage flex min-h-[150px] items-center justify-center overflow-hidden px-5 py-11" }, /* @__PURE__ */ React.createElement(
      "div",
      {
        className: cn(
          "max-w-full text-[44px] leading-tight text-white",
          runescapeUF.className
        )
      },
      /* @__PURE__ */ React.createElement(FxPreview, { text, color: color2, effect })
    )), /* @__PURE__ */ React.createElement("div", { className: "mb-6 mt-3.5 flex items-center gap-2.5" }, /* @__PURE__ */ React.createElement("code", { className: "min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap rounded-lg border border-rng-surface-2 bg-rng-surface/60 px-3 py-2 font-mono text-[13px] text-zinc-400" }, codeTag), /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        onClick: () => void copy(),
        className: "flex shrink-0 items-center gap-1.5 rounded-lg border border-rng-surface-2 bg-rng-surface/60 px-3.5 py-2 font-sans text-xs font-bold text-zinc-400 transition-colors hover:text-zinc-300"
      },
      copied ? /* @__PURE__ */ React.createElement(Check, { className: "h-3.5 w-3.5 text-rng-emerald" }) : /* @__PURE__ */ React.createElement(Copy, { className: "h-3.5 w-3.5" }),
      copied ? "Copied" : "Copy"
    )), /* @__PURE__ */ React.createElement("label", { className: "mb-2 block text-[11px] font-bold uppercase tracking-wide text-rng-muted" }, "Message"), /* @__PURE__ */ React.createElement(
      "input",
      {
        value: text,
        onChange: (e2) => setText(e2.target.value.slice(0, 24)),
        placeholder: "Type a message\u2026",
        className: "mb-5 h-11 w-full rounded-[10px] border border-rng-surface-2 bg-[rgba(10,10,12,0.6)] px-3.5 font-sans text-[15px] text-zinc-50 outline-none ring-rng-indigo focus:ring-1"
      }
    ), /* @__PURE__ */ React.createElement("div", { className: "mb-2.5 text-[11px] font-bold uppercase tracking-wide text-rng-muted" }, "Colour"), /* @__PURE__ */ React.createElement("div", { className: "mb-5 flex flex-wrap gap-2" }, FX_COLORS.map((c) => {
      const on = c.id === color2;
      const swatchStyle = c.id === "rainbow" ? {
        backgroundImage: "linear-gradient(90deg,#e34b4b,#ee8d2c,#ecc24e,#46a832,#46c8d2,#3f6fd6,#b455c8)"
      } : c.id === "inverted" ? {
        background: "transparent",
        border: "1.5px solid #d8cdb4"
      } : { background: c.hex ?? void 0 };
      return /* @__PURE__ */ React.createElement(
        "button",
        {
          key: c.id,
          type: "button",
          onClick: () => setColor(c.id),
          title: c.id,
          className: cnFxChip(on, "gobby")
        },
        /* @__PURE__ */ React.createElement(
          "span",
          {
            className: "h-3.5 w-3.5 shrink-0 rounded-full",
            style: swatchStyle
          }
        ),
        c.id
      );
    })), /* @__PURE__ */ React.createElement("div", { className: "mb-2.5 text-[11px] font-bold uppercase tracking-wide text-rng-muted" }, "Effect"), /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-2" }, Object.keys(FX_EFFECTS).map((id3) => {
      const on = id3 === effect;
      return /* @__PURE__ */ React.createElement(
        "button",
        {
          key: id3,
          type: "button",
          onClick: () => setEffect(id3),
          className: cnFxChip(on, "rng")
        },
        id3
      );
    })));
  }
  function cnFxChip(on, variant) {
    const base = "cursor-pointer rounded-full px-3 py-1.5 font-sans text-xs font-semibold capitalize transition-all duration-150";
    if (variant === "gobby") {
      return `${base} ${on ? "border border-[rgba(132,155,73,0.6)] bg-[rgba(132,155,73,0.14)] text-[#c4d68a]" : "border border-rng-surface-2 bg-rng-surface/50 text-zinc-400"}`;
    }
    return `${base} rounded-[10px] font-bold ${on ? "border border-[rgba(99,102,241,0.45)] bg-[rgba(79,70,229,0.2)] text-indigo-300 shadow-[0_0_10px_rgba(99,102,241,0.18)]" : "border border-rng-surface-2 bg-rng-surface/50 text-zinc-400"}`;
  }

  // .design-sync/shims/ds-theme.tsx
  init_define_import_meta_env();
  var React21 = __toESM(require_react_shim());
  function DsThemeSurface({ children }) {
    return /* @__PURE__ */ React21.createElement(
      "div",
      {
        style: {
          background: "var(--background)",
          color: "var(--foreground)",
          borderRadius: "16px",
          padding: "8px",
          minHeight: "120px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif"
        }
      },
      children
    );
  }
  return __toCommonJS(ds_entry_exports);
})();
/*! Bundled license information:

lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs:
lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs:
lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs:
lucide-react/dist/esm/shared/src/utils/toPascalCase.mjs:
lucide-react/dist/esm/defaultAttributes.mjs:
lucide-react/dist/esm/shared/src/utils/hasA11yProp.mjs:
lucide-react/dist/esm/context.mjs:
lucide-react/dist/esm/Icon.mjs:
lucide-react/dist/esm/createLucideIcon.mjs:
lucide-react/dist/esm/icons/check.mjs:
lucide-react/dist/esm/icons/copy.mjs:
lucide-react/dist/esm/icons/moon.mjs:
lucide-react/dist/esm/icons/sun.mjs:
lucide-react/dist/esm/lucide-react.mjs:
  (**
   * @license lucide-react v1.17.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
window.ItmeDayDS=ItmeDayDS.__dsMainNs?Object.assign({},ItmeDayDS,ItmeDayDS.__dsMainNs,{__dsMainNs:undefined}):ItmeDayDS;
