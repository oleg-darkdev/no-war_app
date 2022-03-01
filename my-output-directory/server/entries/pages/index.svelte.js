import { c as create_ssr_component, d as compute_rest_props, g as get_current_component, e as spread, k as escape_attribute_value, f as escape_object, h as add_attribute, i as getContext, v as validate_component, n as escape, q as each, s as setContext, m as missing_component, j as globals, o as onDestroy } from "../../chunks/index-a8d010e8.js";
import { f as forwardEventsBuilder, c as classMap, a as classAdderBuilder, D as Div, H as H5, b as H6, C as Content$1, B as Button, A, S as Span, N as Nav, U as Ul, d as Span$1, L as Li, e as H3 } from "../../chunks/ActionIcons-4394e94e.js";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2)
      if (Object.prototype.hasOwnProperty.call(b2, p))
        d2[p] = b2[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return { value: o && o[i++], done: !o };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCFoundation = function() {
  function MDCFoundation2(adapter) {
    if (adapter === void 0) {
      adapter = {};
    }
    this.adapter = adapter;
  }
  Object.defineProperty(MDCFoundation2, "cssClasses", {
    get: function() {
      return {};
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCFoundation2, "strings", {
    get: function() {
      return {};
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCFoundation2, "numbers", {
    get: function() {
      return {};
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCFoundation2, "defaultAdapter", {
    get: function() {
      return {};
    },
    enumerable: false,
    configurable: true
  });
  MDCFoundation2.prototype.init = function() {
  };
  MDCFoundation2.prototype.destroy = function() {
  };
  return MDCFoundation2;
}();
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function closest(element, selector) {
  if (element.closest) {
    return element.closest(selector);
  }
  var el = element;
  while (el) {
    if (matches$1(el, selector)) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
}
function matches$1(element, selector) {
  var nativeMatches = element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
  return nativeMatches.call(element, selector);
}
function estimateScrollWidth(element) {
  var htmlEl = element;
  if (htmlEl.offsetParent !== null) {
    return htmlEl.scrollWidth;
  }
  var clone = htmlEl.cloneNode(true);
  clone.style.setProperty("position", "absolute");
  clone.style.setProperty("transform", "translate(-9999px, -9999px)");
  document.documentElement.appendChild(clone);
  var scrollWidth = clone.scrollWidth;
  document.documentElement.removeChild(clone);
  return scrollWidth;
}
var ponyfill = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  closest,
  matches: matches$1,
  estimateScrollWidth
});
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function applyPassive$1(globalObj) {
  if (globalObj === void 0) {
    globalObj = window;
  }
  return supportsPassiveOption(globalObj) ? { passive: true } : false;
}
function supportsPassiveOption(globalObj) {
  if (globalObj === void 0) {
    globalObj = window;
  }
  var passiveSupported = false;
  try {
    var options = {
      get passive() {
        passiveSupported = true;
        return false;
      }
    };
    var handler = function() {
    };
    globalObj.document.addEventListener("test", handler, options);
    globalObj.document.removeEventListener("test", handler, options);
  } catch (err) {
    passiveSupported = false;
  }
  return passiveSupported;
}
var events = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  applyPassive: applyPassive$1
});
function dispatch(element, eventType, detail, eventInit = { bubbles: true }, duplicateEventForMDC = false) {
  if (typeof Event !== "undefined" && element) {
    const event = new CustomEvent(eventType, Object.assign(Object.assign({}, eventInit), { detail }));
    element === null || element === void 0 ? void 0 : element.dispatchEvent(event);
    if (duplicateEventForMDC && eventType.startsWith("SMUI")) {
      const duplicateEvent = new CustomEvent(eventType.replace(/^SMUI/g, () => "MDC"), Object.assign(Object.assign({}, eventInit), { detail }));
      element === null || element === void 0 ? void 0 : element.dispatchEvent(duplicateEvent);
      if (duplicateEvent.defaultPrevented) {
        event.preventDefault();
      }
    }
    return event;
  }
}
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "variant", "padded", "getElement"]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { variant = "raised" } = $$props;
  let { padded = false } = $$props;
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.padded === void 0 && $$bindings.padded && padded !== void 0)
    $$bindings.padded(padded);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<div${spread([
    {
      class: escape_attribute_value(classMap({
        [className]: true,
        "mdc-card": true,
        "mdc-card--outlined": variant === "outlined",
        "smui-card--padded": padded
      }))
    },
    escape_object($$restProps)
  ])}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}
</div>`;
});
const I = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "getElement"]);
  let { use = [] } = $$props;
  forwardEventsBuilder(get_current_component());
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<i${spread([escape_object($$restProps)])}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}</i>`;
});
const Svg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "getElement"]);
  let { use = [] } = $$props;
  forwardEventsBuilder(get_current_component());
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<svg${spread([escape_object($$restProps)])}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}</svg>`;
});
var supportsCssVariables_;
function supportsCssVariables(windowObj, forceRefresh) {
  if (forceRefresh === void 0) {
    forceRefresh = false;
  }
  var CSS = windowObj.CSS;
  var supportsCssVars = supportsCssVariables_;
  if (typeof supportsCssVariables_ === "boolean" && !forceRefresh) {
    return supportsCssVariables_;
  }
  var supportsFunctionPresent = CSS && typeof CSS.supports === "function";
  if (!supportsFunctionPresent) {
    return false;
  }
  var explicitlySupportsCssVars = CSS.supports("--css-vars", "yes");
  var weAreFeatureDetectingSafari10plus = CSS.supports("(--css-vars: yes)") && CSS.supports("color", "#00000000");
  supportsCssVars = explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus;
  if (!forceRefresh) {
    supportsCssVariables_ = supportsCssVars;
  }
  return supportsCssVars;
}
function getNormalizedEventCoords(evt, pageOffset, clientRect) {
  if (!evt) {
    return { x: 0, y: 0 };
  }
  var x = pageOffset.x, y = pageOffset.y;
  var documentX = x + clientRect.left;
  var documentY = y + clientRect.top;
  var normalizedX;
  var normalizedY;
  if (evt.type === "touchstart") {
    var touchEvent = evt;
    normalizedX = touchEvent.changedTouches[0].pageX - documentX;
    normalizedY = touchEvent.changedTouches[0].pageY - documentY;
  } else {
    var mouseEvent = evt;
    normalizedX = mouseEvent.pageX - documentX;
    normalizedY = mouseEvent.pageY - documentY;
  }
  return { x: normalizedX, y: normalizedY };
}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
};
var strings = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
};
var numbers = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ACTIVATION_EVENT_TYPES = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
];
var POINTER_DEACTIVATION_EVENT_TYPES = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
];
var activatedTargets = [];
var MDCRippleFoundation = function(_super) {
  __extends(MDCRippleFoundation2, _super);
  function MDCRippleFoundation2(adapter) {
    var _this = _super.call(this, __assign(__assign({}, MDCRippleFoundation2.defaultAdapter), adapter)) || this;
    _this.activationAnimationHasEnded = false;
    _this.activationTimer = 0;
    _this.fgDeactivationRemovalTimer = 0;
    _this.fgScale = "0";
    _this.frame = { width: 0, height: 0 };
    _this.initialSize = 0;
    _this.layoutFrame = 0;
    _this.maxRadius = 0;
    _this.unboundedCoords = { left: 0, top: 0 };
    _this.activationState = _this.defaultActivationState();
    _this.activationTimerCallback = function() {
      _this.activationAnimationHasEnded = true;
      _this.runDeactivationUXLogicIfReady();
    };
    _this.activateHandler = function(e) {
      _this.activateImpl(e);
    };
    _this.deactivateHandler = function() {
      _this.deactivateImpl();
    };
    _this.focusHandler = function() {
      _this.handleFocus();
    };
    _this.blurHandler = function() {
      _this.handleBlur();
    };
    _this.resizeHandler = function() {
      _this.layout();
    };
    return _this;
  }
  Object.defineProperty(MDCRippleFoundation2, "cssClasses", {
    get: function() {
      return cssClasses;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation2, "strings", {
    get: function() {
      return strings;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation2, "numbers", {
    get: function() {
      return numbers;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation2, "defaultAdapter", {
    get: function() {
      return {
        addClass: function() {
          return void 0;
        },
        browserSupportsCssVars: function() {
          return true;
        },
        computeBoundingRect: function() {
          return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
        },
        containsEventTarget: function() {
          return true;
        },
        deregisterDocumentInteractionHandler: function() {
          return void 0;
        },
        deregisterInteractionHandler: function() {
          return void 0;
        },
        deregisterResizeHandler: function() {
          return void 0;
        },
        getWindowPageOffset: function() {
          return { x: 0, y: 0 };
        },
        isSurfaceActive: function() {
          return true;
        },
        isSurfaceDisabled: function() {
          return true;
        },
        isUnbounded: function() {
          return true;
        },
        registerDocumentInteractionHandler: function() {
          return void 0;
        },
        registerInteractionHandler: function() {
          return void 0;
        },
        registerResizeHandler: function() {
          return void 0;
        },
        removeClass: function() {
          return void 0;
        },
        updateCssVariable: function() {
          return void 0;
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCRippleFoundation2.prototype.init = function() {
    var _this = this;
    var supportsPressRipple = this.supportsPressRipple();
    this.registerRootHandlers(supportsPressRipple);
    if (supportsPressRipple) {
      var _a = MDCRippleFoundation2.cssClasses, ROOT_1 = _a.ROOT, UNBOUNDED_1 = _a.UNBOUNDED;
      requestAnimationFrame(function() {
        _this.adapter.addClass(ROOT_1);
        if (_this.adapter.isUnbounded()) {
          _this.adapter.addClass(UNBOUNDED_1);
          _this.layoutInternal();
        }
      });
    }
  };
  MDCRippleFoundation2.prototype.destroy = function() {
    var _this = this;
    if (this.supportsPressRipple()) {
      if (this.activationTimer) {
        clearTimeout(this.activationTimer);
        this.activationTimer = 0;
        this.adapter.removeClass(MDCRippleFoundation2.cssClasses.FG_ACTIVATION);
      }
      if (this.fgDeactivationRemovalTimer) {
        clearTimeout(this.fgDeactivationRemovalTimer);
        this.fgDeactivationRemovalTimer = 0;
        this.adapter.removeClass(MDCRippleFoundation2.cssClasses.FG_DEACTIVATION);
      }
      var _a = MDCRippleFoundation2.cssClasses, ROOT_2 = _a.ROOT, UNBOUNDED_2 = _a.UNBOUNDED;
      requestAnimationFrame(function() {
        _this.adapter.removeClass(ROOT_2);
        _this.adapter.removeClass(UNBOUNDED_2);
        _this.removeCssVars();
      });
    }
    this.deregisterRootHandlers();
    this.deregisterDeactivationHandlers();
  };
  MDCRippleFoundation2.prototype.activate = function(evt) {
    this.activateImpl(evt);
  };
  MDCRippleFoundation2.prototype.deactivate = function() {
    this.deactivateImpl();
  };
  MDCRippleFoundation2.prototype.layout = function() {
    var _this = this;
    if (this.layoutFrame) {
      cancelAnimationFrame(this.layoutFrame);
    }
    this.layoutFrame = requestAnimationFrame(function() {
      _this.layoutInternal();
      _this.layoutFrame = 0;
    });
  };
  MDCRippleFoundation2.prototype.setUnbounded = function(unbounded) {
    var UNBOUNDED = MDCRippleFoundation2.cssClasses.UNBOUNDED;
    if (unbounded) {
      this.adapter.addClass(UNBOUNDED);
    } else {
      this.adapter.removeClass(UNBOUNDED);
    }
  };
  MDCRippleFoundation2.prototype.handleFocus = function() {
    var _this = this;
    requestAnimationFrame(function() {
      return _this.adapter.addClass(MDCRippleFoundation2.cssClasses.BG_FOCUSED);
    });
  };
  MDCRippleFoundation2.prototype.handleBlur = function() {
    var _this = this;
    requestAnimationFrame(function() {
      return _this.adapter.removeClass(MDCRippleFoundation2.cssClasses.BG_FOCUSED);
    });
  };
  MDCRippleFoundation2.prototype.supportsPressRipple = function() {
    return this.adapter.browserSupportsCssVars();
  };
  MDCRippleFoundation2.prototype.defaultActivationState = function() {
    return {
      activationEvent: void 0,
      hasDeactivationUXRun: false,
      isActivated: false,
      isProgrammatic: false,
      wasActivatedByPointer: false,
      wasElementMadeActive: false
    };
  };
  MDCRippleFoundation2.prototype.registerRootHandlers = function(supportsPressRipple) {
    var e_1, _a;
    if (supportsPressRipple) {
      try {
        for (var ACTIVATION_EVENT_TYPES_1 = __values(ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next(); !ACTIVATION_EVENT_TYPES_1_1.done; ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next()) {
          var evtType = ACTIVATION_EVENT_TYPES_1_1.value;
          this.adapter.registerInteractionHandler(evtType, this.activateHandler);
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (ACTIVATION_EVENT_TYPES_1_1 && !ACTIVATION_EVENT_TYPES_1_1.done && (_a = ACTIVATION_EVENT_TYPES_1.return))
            _a.call(ACTIVATION_EVENT_TYPES_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      if (this.adapter.isUnbounded()) {
        this.adapter.registerResizeHandler(this.resizeHandler);
      }
    }
    this.adapter.registerInteractionHandler("focus", this.focusHandler);
    this.adapter.registerInteractionHandler("blur", this.blurHandler);
  };
  MDCRippleFoundation2.prototype.registerDeactivationHandlers = function(evt) {
    var e_2, _a;
    if (evt.type === "keydown") {
      this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
    } else {
      try {
        for (var POINTER_DEACTIVATION_EVENT_TYPES_1 = __values(POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next(); !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done; POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next()) {
          var evtType = POINTER_DEACTIVATION_EVENT_TYPES_1_1.value;
          this.adapter.registerDocumentInteractionHandler(evtType, this.deactivateHandler);
        }
      } catch (e_2_1) {
        e_2 = { error: e_2_1 };
      } finally {
        try {
          if (POINTER_DEACTIVATION_EVENT_TYPES_1_1 && !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done && (_a = POINTER_DEACTIVATION_EVENT_TYPES_1.return))
            _a.call(POINTER_DEACTIVATION_EVENT_TYPES_1);
        } finally {
          if (e_2)
            throw e_2.error;
        }
      }
    }
  };
  MDCRippleFoundation2.prototype.deregisterRootHandlers = function() {
    var e_3, _a;
    try {
      for (var ACTIVATION_EVENT_TYPES_2 = __values(ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next(); !ACTIVATION_EVENT_TYPES_2_1.done; ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next()) {
        var evtType = ACTIVATION_EVENT_TYPES_2_1.value;
        this.adapter.deregisterInteractionHandler(evtType, this.activateHandler);
      }
    } catch (e_3_1) {
      e_3 = { error: e_3_1 };
    } finally {
      try {
        if (ACTIVATION_EVENT_TYPES_2_1 && !ACTIVATION_EVENT_TYPES_2_1.done && (_a = ACTIVATION_EVENT_TYPES_2.return))
          _a.call(ACTIVATION_EVENT_TYPES_2);
      } finally {
        if (e_3)
          throw e_3.error;
      }
    }
    this.adapter.deregisterInteractionHandler("focus", this.focusHandler);
    this.adapter.deregisterInteractionHandler("blur", this.blurHandler);
    if (this.adapter.isUnbounded()) {
      this.adapter.deregisterResizeHandler(this.resizeHandler);
    }
  };
  MDCRippleFoundation2.prototype.deregisterDeactivationHandlers = function() {
    var e_4, _a;
    this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
    try {
      for (var POINTER_DEACTIVATION_EVENT_TYPES_2 = __values(POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next(); !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done; POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next()) {
        var evtType = POINTER_DEACTIVATION_EVENT_TYPES_2_1.value;
        this.adapter.deregisterDocumentInteractionHandler(evtType, this.deactivateHandler);
      }
    } catch (e_4_1) {
      e_4 = { error: e_4_1 };
    } finally {
      try {
        if (POINTER_DEACTIVATION_EVENT_TYPES_2_1 && !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done && (_a = POINTER_DEACTIVATION_EVENT_TYPES_2.return))
          _a.call(POINTER_DEACTIVATION_EVENT_TYPES_2);
      } finally {
        if (e_4)
          throw e_4.error;
      }
    }
  };
  MDCRippleFoundation2.prototype.removeCssVars = function() {
    var _this = this;
    var rippleStrings = MDCRippleFoundation2.strings;
    var keys = Object.keys(rippleStrings);
    keys.forEach(function(key) {
      if (key.indexOf("VAR_") === 0) {
        _this.adapter.updateCssVariable(rippleStrings[key], null);
      }
    });
  };
  MDCRippleFoundation2.prototype.activateImpl = function(evt) {
    var _this = this;
    if (this.adapter.isSurfaceDisabled()) {
      return;
    }
    var activationState = this.activationState;
    if (activationState.isActivated) {
      return;
    }
    var previousActivationEvent = this.previousActivationEvent;
    var isSameInteraction = previousActivationEvent && evt !== void 0 && previousActivationEvent.type !== evt.type;
    if (isSameInteraction) {
      return;
    }
    activationState.isActivated = true;
    activationState.isProgrammatic = evt === void 0;
    activationState.activationEvent = evt;
    activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== void 0 && (evt.type === "mousedown" || evt.type === "touchstart" || evt.type === "pointerdown");
    var hasActivatedChild = evt !== void 0 && activatedTargets.length > 0 && activatedTargets.some(function(target) {
      return _this.adapter.containsEventTarget(target);
    });
    if (hasActivatedChild) {
      this.resetActivationState();
      return;
    }
    if (evt !== void 0) {
      activatedTargets.push(evt.target);
      this.registerDeactivationHandlers(evt);
    }
    activationState.wasElementMadeActive = this.checkElementMadeActive(evt);
    if (activationState.wasElementMadeActive) {
      this.animateActivation();
    }
    requestAnimationFrame(function() {
      activatedTargets = [];
      if (!activationState.wasElementMadeActive && evt !== void 0 && (evt.key === " " || evt.keyCode === 32)) {
        activationState.wasElementMadeActive = _this.checkElementMadeActive(evt);
        if (activationState.wasElementMadeActive) {
          _this.animateActivation();
        }
      }
      if (!activationState.wasElementMadeActive) {
        _this.activationState = _this.defaultActivationState();
      }
    });
  };
  MDCRippleFoundation2.prototype.checkElementMadeActive = function(evt) {
    return evt !== void 0 && evt.type === "keydown" ? this.adapter.isSurfaceActive() : true;
  };
  MDCRippleFoundation2.prototype.animateActivation = function() {
    var _this = this;
    var _a = MDCRippleFoundation2.strings, VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START, VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
    var _b = MDCRippleFoundation2.cssClasses, FG_DEACTIVATION = _b.FG_DEACTIVATION, FG_ACTIVATION = _b.FG_ACTIVATION;
    var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation2.numbers.DEACTIVATION_TIMEOUT_MS;
    this.layoutInternal();
    var translateStart = "";
    var translateEnd = "";
    if (!this.adapter.isUnbounded()) {
      var _c = this.getFgTranslationCoordinates(), startPoint = _c.startPoint, endPoint = _c.endPoint;
      translateStart = startPoint.x + "px, " + startPoint.y + "px";
      translateEnd = endPoint.x + "px, " + endPoint.y + "px";
    }
    this.adapter.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
    this.adapter.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
    clearTimeout(this.activationTimer);
    clearTimeout(this.fgDeactivationRemovalTimer);
    this.rmBoundedActivationClasses();
    this.adapter.removeClass(FG_DEACTIVATION);
    this.adapter.computeBoundingRect();
    this.adapter.addClass(FG_ACTIVATION);
    this.activationTimer = setTimeout(function() {
      _this.activationTimerCallback();
    }, DEACTIVATION_TIMEOUT_MS);
  };
  MDCRippleFoundation2.prototype.getFgTranslationCoordinates = function() {
    var _a = this.activationState, activationEvent = _a.activationEvent, wasActivatedByPointer = _a.wasActivatedByPointer;
    var startPoint;
    if (wasActivatedByPointer) {
      startPoint = getNormalizedEventCoords(activationEvent, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect());
    } else {
      startPoint = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      };
    }
    startPoint = {
      x: startPoint.x - this.initialSize / 2,
      y: startPoint.y - this.initialSize / 2
    };
    var endPoint = {
      x: this.frame.width / 2 - this.initialSize / 2,
      y: this.frame.height / 2 - this.initialSize / 2
    };
    return { startPoint, endPoint };
  };
  MDCRippleFoundation2.prototype.runDeactivationUXLogicIfReady = function() {
    var _this = this;
    var FG_DEACTIVATION = MDCRippleFoundation2.cssClasses.FG_DEACTIVATION;
    var _a = this.activationState, hasDeactivationUXRun = _a.hasDeactivationUXRun, isActivated = _a.isActivated;
    var activationHasEnded = hasDeactivationUXRun || !isActivated;
    if (activationHasEnded && this.activationAnimationHasEnded) {
      this.rmBoundedActivationClasses();
      this.adapter.addClass(FG_DEACTIVATION);
      this.fgDeactivationRemovalTimer = setTimeout(function() {
        _this.adapter.removeClass(FG_DEACTIVATION);
      }, numbers.FG_DEACTIVATION_MS);
    }
  };
  MDCRippleFoundation2.prototype.rmBoundedActivationClasses = function() {
    var FG_ACTIVATION = MDCRippleFoundation2.cssClasses.FG_ACTIVATION;
    this.adapter.removeClass(FG_ACTIVATION);
    this.activationAnimationHasEnded = false;
    this.adapter.computeBoundingRect();
  };
  MDCRippleFoundation2.prototype.resetActivationState = function() {
    var _this = this;
    this.previousActivationEvent = this.activationState.activationEvent;
    this.activationState = this.defaultActivationState();
    setTimeout(function() {
      return _this.previousActivationEvent = void 0;
    }, MDCRippleFoundation2.numbers.TAP_DELAY_MS);
  };
  MDCRippleFoundation2.prototype.deactivateImpl = function() {
    var _this = this;
    var activationState = this.activationState;
    if (!activationState.isActivated) {
      return;
    }
    var state = __assign({}, activationState);
    if (activationState.isProgrammatic) {
      requestAnimationFrame(function() {
        _this.animateDeactivation(state);
      });
      this.resetActivationState();
    } else {
      this.deregisterDeactivationHandlers();
      requestAnimationFrame(function() {
        _this.activationState.hasDeactivationUXRun = true;
        _this.animateDeactivation(state);
        _this.resetActivationState();
      });
    }
  };
  MDCRippleFoundation2.prototype.animateDeactivation = function(_a) {
    var wasActivatedByPointer = _a.wasActivatedByPointer, wasElementMadeActive = _a.wasElementMadeActive;
    if (wasActivatedByPointer || wasElementMadeActive) {
      this.runDeactivationUXLogicIfReady();
    }
  };
  MDCRippleFoundation2.prototype.layoutInternal = function() {
    var _this = this;
    this.frame = this.adapter.computeBoundingRect();
    var maxDim = Math.max(this.frame.height, this.frame.width);
    var getBoundedRadius = function() {
      var hypotenuse = Math.sqrt(Math.pow(_this.frame.width, 2) + Math.pow(_this.frame.height, 2));
      return hypotenuse + MDCRippleFoundation2.numbers.PADDING;
    };
    this.maxRadius = this.adapter.isUnbounded() ? maxDim : getBoundedRadius();
    var initialSize = Math.floor(maxDim * MDCRippleFoundation2.numbers.INITIAL_ORIGIN_SCALE);
    if (this.adapter.isUnbounded() && initialSize % 2 !== 0) {
      this.initialSize = initialSize - 1;
    } else {
      this.initialSize = initialSize;
    }
    this.fgScale = "" + this.maxRadius / this.initialSize;
    this.updateLayoutCssVars();
  };
  MDCRippleFoundation2.prototype.updateLayoutCssVars = function() {
    var _a = MDCRippleFoundation2.strings, VAR_FG_SIZE = _a.VAR_FG_SIZE, VAR_LEFT = _a.VAR_LEFT, VAR_TOP = _a.VAR_TOP, VAR_FG_SCALE = _a.VAR_FG_SCALE;
    this.adapter.updateCssVariable(VAR_FG_SIZE, this.initialSize + "px");
    this.adapter.updateCssVariable(VAR_FG_SCALE, this.fgScale);
    if (this.adapter.isUnbounded()) {
      this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      };
      this.adapter.updateCssVariable(VAR_LEFT, this.unboundedCoords.left + "px");
      this.adapter.updateCssVariable(VAR_TOP, this.unboundedCoords.top + "px");
    }
  };
  return MDCRippleFoundation2;
}(MDCFoundation);
const { applyPassive } = events;
const { matches } = ponyfill;
function Ripple(node, { ripple = true, surface = false, unbounded = false, disabled = false, color, active, rippleElement, eventTarget, activeTarget, addClass = (className) => node.classList.add(className), removeClass = (className) => node.classList.remove(className), addStyle = (name, value) => node.style.setProperty(name, value), initPromise = Promise.resolve() } = {}) {
  let instance;
  let addLayoutListener = getContext("SMUI:addLayoutListener");
  let removeLayoutListener;
  let oldActive = active;
  let oldEventTarget = eventTarget;
  let oldActiveTarget = activeTarget;
  function handleProps() {
    if (surface) {
      addClass("mdc-ripple-surface");
      if (color === "primary") {
        addClass("smui-ripple-surface--primary");
        removeClass("smui-ripple-surface--secondary");
      } else if (color === "secondary") {
        removeClass("smui-ripple-surface--primary");
        addClass("smui-ripple-surface--secondary");
      } else {
        removeClass("smui-ripple-surface--primary");
        removeClass("smui-ripple-surface--secondary");
      }
    } else {
      removeClass("mdc-ripple-surface");
      removeClass("smui-ripple-surface--primary");
      removeClass("smui-ripple-surface--secondary");
    }
    if (instance && oldActive !== active) {
      oldActive = active;
      if (active) {
        instance.activate();
      } else if (active === false) {
        instance.deactivate();
      }
    }
    if (ripple && !instance) {
      instance = new MDCRippleFoundation({
        addClass,
        browserSupportsCssVars: () => supportsCssVariables(window),
        computeBoundingRect: () => (rippleElement || node).getBoundingClientRect(),
        containsEventTarget: (target) => node.contains(target),
        deregisterDocumentInteractionHandler: (evtType, handler) => document.documentElement.removeEventListener(evtType, handler, applyPassive()),
        deregisterInteractionHandler: (evtType, handler) => (eventTarget || node).removeEventListener(evtType, handler, applyPassive()),
        deregisterResizeHandler: (handler) => window.removeEventListener("resize", handler),
        getWindowPageOffset: () => ({
          x: window.pageXOffset,
          y: window.pageYOffset
        }),
        isSurfaceActive: () => active == null ? matches(activeTarget || node, ":active") : active,
        isSurfaceDisabled: () => !!disabled,
        isUnbounded: () => !!unbounded,
        registerDocumentInteractionHandler: (evtType, handler) => document.documentElement.addEventListener(evtType, handler, applyPassive()),
        registerInteractionHandler: (evtType, handler) => (eventTarget || node).addEventListener(evtType, handler, applyPassive()),
        registerResizeHandler: (handler) => window.addEventListener("resize", handler),
        removeClass,
        updateCssVariable: addStyle
      });
      initPromise.then(() => {
        if (instance) {
          instance.init();
          instance.setUnbounded(unbounded);
        }
      });
    } else if (instance && !ripple) {
      initPromise.then(() => {
        if (instance) {
          instance.destroy();
          instance = void 0;
        }
      });
    }
    if (instance && (oldEventTarget !== eventTarget || oldActiveTarget !== activeTarget)) {
      oldEventTarget = eventTarget;
      oldActiveTarget = activeTarget;
      instance.destroy();
      requestAnimationFrame(() => {
        if (instance) {
          instance.init();
          instance.setUnbounded(unbounded);
        }
      });
    }
    if (!ripple && unbounded) {
      addClass("mdc-ripple-upgraded--unbounded");
    }
  }
  handleProps();
  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }
  function layout() {
    if (instance) {
      instance.layout();
    }
  }
  return {
    update(props) {
      ({
        ripple,
        surface,
        unbounded,
        disabled,
        color,
        active,
        rippleElement,
        eventTarget,
        activeTarget,
        addClass,
        removeClass,
        addStyle,
        initPromise
      } = Object.assign({ ripple: true, surface: false, unbounded: false, disabled: false, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (className) => node.classList.add(className), removeClass: (className) => node.classList.remove(className), addStyle: (name, value) => node.style.setProperty(name, value), initPromise: Promise.resolve() }, props));
      handleProps();
    },
    destroy() {
      if (instance) {
        instance.destroy();
        instance = void 0;
        removeClass("mdc-ripple-surface");
        removeClass("smui-ripple-surface--primary");
        removeClass("smui-ripple-surface--secondary");
      }
      if (removeLayoutListener) {
        removeLayoutListener();
      }
    }
  };
}
const PrimaryAction$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "style", "ripple", "color", "padded", "tabindex", "getElement"]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { ripple = true } = $$props;
  let { color = void 0 } = $$props;
  let { padded = false } = $$props;
  let { tabindex = 0 } = $$props;
  let element;
  let internalClasses = {};
  let internalStyles = {};
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.ripple === void 0 && $$bindings.ripple && ripple !== void 0)
    $$bindings.ripple(ripple);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.padded === void 0 && $$bindings.padded && padded !== void 0)
    $$bindings.padded(padded);
  if ($$props.tabindex === void 0 && $$bindings.tabindex && tabindex !== void 0)
    $$bindings.tabindex(tabindex);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<div${spread([
    {
      class: escape_attribute_value(classMap({
        [className]: true,
        "mdc-card__primary-action": true,
        "smui-card__primary-action--padded": padded,
        ...internalClasses
      }))
    },
    {
      style: escape_attribute_value(Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" "))
    },
    {
      tabindex: escape_attribute_value(tabindex)
    },
    escape_object($$restProps)
  ])}${add_attribute("this", element, 0)}><div class="${"mdc-card__ripple"}"></div>
  ${slots.default ? slots.default({}) : ``}
</div>`;
});
const Media$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "aspectRatio", "getElement"]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { aspectRatio = void 0 } = $$props;
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.aspectRatio === void 0 && $$bindings.aspectRatio && aspectRatio !== void 0)
    $$bindings.aspectRatio(aspectRatio);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<div${spread([
    {
      class: escape_attribute_value(classMap({
        [className]: true,
        "mdc-card__media": true,
        "mdc-card__media--square": aspectRatio === "square",
        "mdc-card__media--16-9": aspectRatio === "16x9"
      }))
    },
    escape_object($$restProps)
  ])}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}
</div>`;
});
const PrimaryAction = PrimaryAction$1;
const Media = Media$1;
const Paper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "variant", "square", "color", "elevation", "transition", "getElement"]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { variant = "raised" } = $$props;
  let { square = false } = $$props;
  let { color = "default" } = $$props;
  let { elevation = 1 } = $$props;
  let { transition = false } = $$props;
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.square === void 0 && $$bindings.square && square !== void 0)
    $$bindings.square(square);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.elevation === void 0 && $$bindings.elevation && elevation !== void 0)
    $$bindings.elevation(elevation);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<div${spread([
    {
      class: escape_attribute_value(classMap({
        [className]: true,
        "smui-paper": true,
        "smui-paper--raised": variant === "raised",
        "smui-paper--unelevated": variant === "unelevated",
        "smui-paper--outlined": variant === "outlined",
        ["smui-paper--elevation-z" + elevation]: elevation !== 0 && variant === "raised",
        "smui-paper--rounded": !square,
        ["smui-paper--color-" + color]: color !== "default",
        "smui-paper-transition": transition
      }))
    },
    escape_object($$restProps)
  ])}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}
</div>`;
});
var Content = classAdderBuilder({
  class: "smui-paper__content",
  component: Div
});
var Title = classAdderBuilder({
  class: "smui-paper__title",
  component: H5
});
classAdderBuilder({
  class: "smui-paper__subtitle",
  component: H6
});
const FirstSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section style="${"width: 100%; max-height: 500px; "}"><div style="${"background-color: #F2DD31; display: flex; justify-content: center; "}">${validate_component(Paper, "Paper").$$render($$result, {
    color: "primary",
    style: "width: 780px; margin: -50px 0 -50px 0; display: flex; justify-content: center; background-color: #fff;  max-width: 1200px;"
  }, {}, {
    default: () => `${validate_component(Content, "Content").$$render($$result, {}, {}, {
      default: () => `${slots.default ? slots.default({}) : `
        `}`
    })}`
  })}</div></section>`;
});
const BlueSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
<section style="${"width: 100%; max-height: 500px; "}"><div style="${"background-color: #4F72B6; display: flex; justify-content: center; "}">${validate_component(Paper, "Paper").$$render($$result, {
    color: "primary",
    style: "width: 780px; margin: -30px 0 -30px 0; display: flex; justify-content: center; background-color: #1A1A1A;  max-width: 1200px;"
  }, {}, {
    default: () => `${validate_component(Content, "Content").$$render($$result, {}, {}, {
      default: () => `${slots.default ? slots.default({}) : `
        `}`
    })}`
  })}</div></section>`;
});
const InfoSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
<section style="${"width: 100%; min-height: 500px; "}"><div style="${"background-color: #4F72B6; display: flex; justify-content: center; "}">${validate_component(Paper, "Paper").$$render($$result, {
    color: "primary",
    style: "width: 780px; height: auto; margin: -30px 0 -30px 0; display: flex; justify-content: center; background-color: #F2DD31;  max-width: 1200px;"
  }, {}, {
    default: () => `${validate_component(Content, "Content").$$render($$result, {}, {}, {
      default: () => `${slots.default ? slots.default({}) : `
        `}`
    })}`
  })}</div></section>`;
});
const YellowSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section style="${"width: 100%; max-height: 500px; "}"><div style="${"background-color: #F2DD31; display: flex; justify-content: center; "}">${validate_component(Paper, "Paper").$$render($$result, {
    color: "primary",
    style: "width: 780px; margin: -30px 0 -30px 0; display: flex; justify-content: center; background-color: #1A1A1A;  max-width: 1200px;"
  }, {}, {
    default: () => `${validate_component(Content, "Content").$$render($$result, {}, {}, {
      default: () => `${slots.default ? slots.default({}) : `
        `}`
    })}`
  })}</div></section>`;
});
const CalculatorSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section style="${"width: 100%; max-height: 500px; "}"><div style="${"background-color: #F2DD31; display: flex; justify-content: center; "}">${validate_component(Paper, "Paper").$$render($$result, {
    color: "primary",
    style: "width: 400px; margin: -50px 0 -50px 0; display: flex; justify-content: center; background-color: #1A1A1A;"
  }, {}, {
    default: () => `${validate_component(Content, "Content").$$render($$result, {}, {}, {
      default: () => `${slots.default ? slots.default({}) : `
        `}`
    })}`
  })}</div></section>`;
});
const socialtq = {
  insta: {
    img: "img/social/insta_yellow.png",
    link: ""
  },
  youtube: {
    img: "img/social/youtube_yellow.png",
    link: ""
  },
  tg: {
    img: "img/social/telega_yellow.png",
    link: ""
  },
  fb: {
    img: "img/social/fb_yellow.png",
    link: ""
  },
  twitter: {
    img: "img/social/tweeter_yellow.png",
    link: ""
  },
  patronite: {
    img: "img/social/patronite_yellow.png",
    link: ""
  }
};
const SocialPanelYellowIcons = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `${validate_component(Paper, "Paper").$$render($$result, {
    style: "margin: 0 auto; width: 90%; height: auto; margin-bottom: 25px; border: 2px solid #F2DD31; background-color: #191B1B;",
    class: "paper-demo"
  }, {}, {
    default: () => `
    ${validate_component(Title, "Title").$$render($$result, {
      style: "font: 54px 'impact'; text-align: center; color: #fff;"
    }, {}, {
      default: () => `${escape(title + ` \u{1F499}\u{1F49B}`)}`
    })} 
    
    ${validate_component(Content$1, "Content").$$render($$result, {
      style: "display: flex; flex-direction: row; align-content: center; width: 100%; min-width: 300px; flex-wrap: wrap;"
    }, {}, {
      default: () => `${each(Object.values(socialtq), (social) => `${validate_component(Card, "Card").$$render($$result, { style: "width: 70px; margin: 5px;" }, {}, {
        default: () => `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {}, {}, {
          default: () => `${validate_component(Media, "Media").$$render($$result, {
            class: "card-media-square",
            style: "background-image: url('" + social.img + "');",
            aspectRatio: "square"
          }, {}, {})}
            `
        })}
          `
      })}`)}`
    })}`
  })}`;
});
const FindForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  return `${validate_component(Card, "Card").$$render($$result, {
    style: "width: 80%; margin: 10px 0 25px 0;"
  }, {}, {
    default: () => `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {
      style: "min-height: 180px; height: auto;  background-color: #" + color + "; ",
      padded: true
    }, {}, {
      default: () => `<h3 style="${"font: 54px 'impact'; margin: 0; text-align:center;"}">\u{1F449} \u0424\u043E\u0440\u043C\u0430 \u043F\u043E\u0438\u0441\u043A\u0430 \u043F\u0440\u043E\u043F\u0430\u0432\u0448\u0438\u0445</h3>`
    })}`
  })}`;
});
const { Object: Object_1$2 } = globals;
const Fab = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "ripple",
    "color",
    "mini",
    "exited",
    "extended",
    "touch",
    "href",
    "component",
    "getElement"
  ]);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { ripple = true } = $$props;
  let { color = "secondary" } = $$props;
  let { mini = false } = $$props;
  let { exited = false } = $$props;
  let { extended = false } = $$props;
  let { touch = false } = $$props;
  let { href = void 0 } = $$props;
  let element;
  let internalClasses = {};
  let internalStyles = {};
  let { component = href == null ? Button : A } = $$props;
  setContext("SMUI:label:context", "fab");
  setContext("SMUI:icon:context", "fab");
  function addClass(className2) {
    if (!internalClasses[className2]) {
      internalClasses[className2] = true;
    }
  }
  function removeClass(className2) {
    if (!(className2 in internalClasses) || internalClasses[className2]) {
      internalClasses[className2] = false;
    }
  }
  function addStyle(name, value) {
    if (internalStyles[name] != value) {
      if (value === "" || value == null) {
        delete internalStyles[name];
        internalStyles = internalStyles;
      } else {
        internalStyles[name] = value;
      }
    }
  }
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.ripple === void 0 && $$bindings.ripple && ripple !== void 0)
    $$bindings.ripple(ripple);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.mini === void 0 && $$bindings.mini && mini !== void 0)
    $$bindings.mini(mini);
  if ($$props.exited === void 0 && $$bindings.exited && exited !== void 0)
    $$bindings.exited(exited);
  if ($$props.extended === void 0 && $$bindings.extended && extended !== void 0)
    $$bindings.extended(extended);
  if ($$props.touch === void 0 && $$bindings.touch && touch !== void 0)
    $$bindings.touch(touch);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(component || missing_component, "svelte:component").$$render($$result, Object_1$2.assign({
      use: [
        [
          Ripple,
          {
            ripple,
            unbounded: false,
            color,
            disabled: !!$$restProps.disabled,
            addClass,
            removeClass,
            addStyle
          }
        ],
        forwardEvents,
        ...use
      ]
    }, {
      class: classMap({
        [className]: true,
        "mdc-fab": true,
        "mdc-fab--mini": mini,
        "mdc-fab--exited": exited,
        "mdc-fab--extended": extended,
        "smui-fab--color-primary": color === "primary",
        "mdc-fab--touch": touch,
        ...internalClasses
      })
    }, {
      style: Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" ")
    }, { href }, $$restProps, { this: element }), {
      this: ($$value) => {
        element = $$value;
        $$settled = false;
      }
    }, {
      default: () => `<div class="${"mdc-fab__ripple"}"></div>
  ${slots.default ? slots.default({}) : ``}${touch ? `<div class="${"mdc-fab__touch"}"></div>` : ``}`
    })}`;
  } while (!$$settled);
  return $$rendered;
});
const CommonLabel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "component", "getElement"]);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let element;
  let { component = Span } = $$props;
  const context = getContext("SMUI:label:context");
  const tabindex = getContext("SMUI:label:tabindex");
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(component || missing_component, "svelte:component").$$render($$result, Object.assign({ use: [forwardEvents, ...use] }, {
      class: classMap({
        [className]: true,
        "mdc-button__label": context === "button",
        "mdc-fab__label": context === "fab",
        "mdc-tab__text-label": context === "tab",
        "mdc-image-list__label": context === "image-list",
        "mdc-snackbar__label": context === "snackbar",
        "mdc-banner__text": context === "banner",
        "mdc-segmented-button__label": context === "segmented-button",
        "mdc-data-table__pagination-rows-per-page-label": context === "data-table:pagination",
        "mdc-data-table__header-cell-label": context === "data-table:sortable-header-cell"
      })
    }, context === "snackbar" ? { "aria-atomic": "false" } : {}, { tabindex }, $$restProps, { this: element }), {
      this: ($$value) => {
        element = $$value;
        $$settled = false;
      }
    }, {
      default: () => `${slots.default ? slots.default({}) : ``}`
    })}`;
  } while (!$$settled);
  return $$rendered;
});
const CommonIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "on", "component", "getElement"]);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { on = false } = $$props;
  let element;
  let { component = I } = $$props;
  const context = getContext("SMUI:icon:context");
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.on === void 0 && $$bindings.on && on !== void 0)
    $$bindings.on(on);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(component || missing_component, "svelte:component").$$render($$result, Object.assign({ use: [forwardEvents, ...use] }, {
      class: classMap({
        [className]: true,
        "mdc-button__icon": context === "button",
        "mdc-fab__icon": context === "fab",
        "mdc-icon-button__icon": context === "icon-button",
        "mdc-icon-button__icon--on": context === "icon-button" && on,
        "mdc-tab__icon": context === "tab",
        "mdc-banner__icon": context === "banner",
        "mdc-segmented-button__icon": context === "segmented-button"
      })
    }, { "aria-hidden": "true" }, component === Svg ? { focusable: "false", tabindex: "-1" } : {}, $$restProps, { this: element }), {
      this: ($$value) => {
        element = $$value;
        $$settled = false;
      }
    }, {
      default: () => `${slots.default ? slots.default({}) : ``}`
    })}`;
  } while (!$$settled);
  return $$rendered;
});
const Label = CommonLabel;
const Icon = CommonIcon;
var ListCard_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".list-element.svelte-13a8zdu{display:flex;justify-content:space-between;flex-direction:row;align-items:center}",
  map: null
};
const ListCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  let { showSection } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.showSection === void 0 && $$bindings.showSection && showSection !== void 0)
    $$bindings.showSection(showSection);
  $$result.css.add(css$2);
  return `${validate_component(Card, "Card").$$render($$result, { style: "margin: 10px; width: 100%;" }, {}, {
    default: () => `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, { padded: true }, {}, {
      default: () => `<div class="${"list-element svelte-13a8zdu"}"><h3 style="${"font: 36px 'impact'; color: #fff; margin: 0;"}">${escape(text)}</h3>
        ${validate_component(Fab, "Fab").$$render($$result, {
        style: "margin: 0 15px; background-color: #4F72B6; "
      }, {}, {
        default: () => `${validate_component(Icon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
          default: () => `${escape(showSection ? "expand_less" : "expand_more")}`
        })}`
      })}</div>`
    })}`
  })}`;
});
const { Object: Object_1$1 } = globals;
const Button_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let actionProp;
  let defaultProp;
  let secondaryProp;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "ripple",
    "color",
    "variant",
    "touch",
    "href",
    "action",
    "defaultAction",
    "secondary",
    "component",
    "getElement"
  ]);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { ripple = true } = $$props;
  let { color = "primary" } = $$props;
  let { variant = "text" } = $$props;
  let { touch = false } = $$props;
  let { href = void 0 } = $$props;
  let { action = "close" } = $$props;
  let { defaultAction = false } = $$props;
  let { secondary = false } = $$props;
  let element;
  let internalClasses = {};
  let internalStyles = {};
  let context = getContext("SMUI:button:context");
  let { component = href == null ? Button : A } = $$props;
  let previousDisabled = $$restProps.disabled;
  setContext("SMUI:label:context", "button");
  setContext("SMUI:icon:context", "button");
  function addClass(className2) {
    if (!internalClasses[className2]) {
      internalClasses[className2] = true;
    }
  }
  function removeClass(className2) {
    if (!(className2 in internalClasses) || internalClasses[className2]) {
      internalClasses[className2] = false;
    }
  }
  function addStyle(name, value) {
    if (internalStyles[name] != value) {
      if (value === "" || value == null) {
        delete internalStyles[name];
        internalStyles = internalStyles;
      } else {
        internalStyles[name] = value;
      }
    }
  }
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.ripple === void 0 && $$bindings.ripple && ripple !== void 0)
    $$bindings.ripple(ripple);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.touch === void 0 && $$bindings.touch && touch !== void 0)
    $$bindings.touch(touch);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.action === void 0 && $$bindings.action && action !== void 0)
    $$bindings.action(action);
  if ($$props.defaultAction === void 0 && $$bindings.defaultAction && defaultAction !== void 0)
    $$bindings.defaultAction(defaultAction);
  if ($$props.secondary === void 0 && $$bindings.secondary && secondary !== void 0)
    $$bindings.secondary(secondary);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    actionProp = context === "dialog:action" && action != null ? { "data-mdc-dialog-action": action } : { action: $$props.action };
    defaultProp = context === "dialog:action" && defaultAction ? { "data-mdc-dialog-button-default": "" } : { default: $$props.default };
    secondaryProp = context === "banner" ? {} : { secondary: $$props.secondary };
    {
      if (previousDisabled !== $$restProps.disabled) {
        getElement().blur();
        previousDisabled = $$restProps.disabled;
      }
    }
    $$rendered = `${validate_component(component || missing_component, "svelte:component").$$render($$result, Object_1$1.assign({
      use: [
        [
          Ripple,
          {
            ripple,
            unbounded: false,
            color,
            disabled: !!$$restProps.disabled,
            addClass,
            removeClass,
            addStyle
          }
        ],
        forwardEvents,
        ...use
      ]
    }, {
      class: classMap({
        [className]: true,
        "mdc-button": true,
        "mdc-button--raised": variant === "raised",
        "mdc-button--unelevated": variant === "unelevated",
        "mdc-button--outlined": variant === "outlined",
        "smui-button--color-secondary": color === "secondary",
        "mdc-button--touch": touch,
        "mdc-card__action": context === "card:action",
        "mdc-card__action--button": context === "card:action",
        "mdc-dialog__button": context === "dialog:action",
        "mdc-top-app-bar__navigation-icon": context === "top-app-bar:navigation",
        "mdc-top-app-bar__action-item": context === "top-app-bar:action",
        "mdc-snackbar__action": context === "snackbar:actions",
        "mdc-banner__secondary-action": context === "banner" && secondary,
        "mdc-banner__primary-action": context === "banner" && !secondary,
        "mdc-tooltip__action": context === "tooltip:rich-actions",
        ...internalClasses
      })
    }, {
      style: Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" ")
    }, actionProp, defaultProp, secondaryProp, { href }, $$restProps, { this: element }), {
      this: ($$value) => {
        element = $$value;
        $$settled = false;
      }
    }, {
      default: () => `<div class="${"mdc-button__ripple"}"></div>
  ${slots.default ? slots.default({}) : ``}${touch ? `<div class="${"mdc-button__touch"}"></div>` : ``}`
    })}`;
  } while (!$$settled);
  return $$rendered;
});
const List = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "nonInteractive",
    "dense",
    "textualList",
    "avatarList",
    "iconList",
    "imageList",
    "thumbnailList",
    "videoList",
    "twoLine",
    "threeLine",
    "vertical",
    "wrapFocus",
    "singleSelection",
    "selectedIndex",
    "radioList",
    "checkList",
    "hasTypeahead",
    "component",
    "layout",
    "setEnabled",
    "getTypeaheadInProgress",
    "getSelectedIndex",
    "getFocusedItemIndex",
    "getElement"
  ]);
  var _a;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { nonInteractive = false } = $$props;
  let { dense = false } = $$props;
  let { textualList = false } = $$props;
  let { avatarList = false } = $$props;
  let { iconList = false } = $$props;
  let { imageList = false } = $$props;
  let { thumbnailList = false } = $$props;
  let { videoList = false } = $$props;
  let { twoLine = false } = $$props;
  let { threeLine = false } = $$props;
  let { vertical = true } = $$props;
  let { wrapFocus = (_a = getContext("SMUI:list:wrapFocus")) !== null && _a !== void 0 ? _a : false } = $$props;
  let { singleSelection = false } = $$props;
  let { selectedIndex = -1 } = $$props;
  let { radioList = false } = $$props;
  let { checkList = false } = $$props;
  let { hasTypeahead = false } = $$props;
  let element;
  let instance;
  let role = getContext("SMUI:list:role");
  let nav = getContext("SMUI:list:nav");
  let selectionDialog = getContext("SMUI:dialog:selection");
  let addLayoutListener = getContext("SMUI:addLayoutListener");
  let removeLayoutListener;
  let { component = nav ? Nav : Ul } = $$props;
  setContext("SMUI:list:nonInteractive", nonInteractive);
  setContext("SMUI:separator:context", "list");
  if (!role) {
    if (singleSelection) {
      role = "listbox";
      setContext("SMUI:list:item:role", "option");
    } else if (radioList) {
      role = "radiogroup";
      setContext("SMUI:list:item:role", "radio");
    } else if (checkList) {
      role = "group";
      setContext("SMUI:list:item:role", "checkbox");
    } else {
      role = "list";
      setContext("SMUI:list:item:role", void 0);
    }
  }
  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }
  onDestroy(() => {
    if (removeLayoutListener) {
      removeLayoutListener();
    }
  });
  function layout() {
    return instance.layout();
  }
  function setEnabled(itemIndex, isEnabled) {
    return instance.setEnabled(itemIndex, isEnabled);
  }
  function getTypeaheadInProgress() {
    return instance.isTypeaheadInProgress();
  }
  function getSelectedIndex() {
    return instance.getSelectedIndex();
  }
  function getFocusedItemIndex() {
    return instance.getFocusedItemIndex();
  }
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.nonInteractive === void 0 && $$bindings.nonInteractive && nonInteractive !== void 0)
    $$bindings.nonInteractive(nonInteractive);
  if ($$props.dense === void 0 && $$bindings.dense && dense !== void 0)
    $$bindings.dense(dense);
  if ($$props.textualList === void 0 && $$bindings.textualList && textualList !== void 0)
    $$bindings.textualList(textualList);
  if ($$props.avatarList === void 0 && $$bindings.avatarList && avatarList !== void 0)
    $$bindings.avatarList(avatarList);
  if ($$props.iconList === void 0 && $$bindings.iconList && iconList !== void 0)
    $$bindings.iconList(iconList);
  if ($$props.imageList === void 0 && $$bindings.imageList && imageList !== void 0)
    $$bindings.imageList(imageList);
  if ($$props.thumbnailList === void 0 && $$bindings.thumbnailList && thumbnailList !== void 0)
    $$bindings.thumbnailList(thumbnailList);
  if ($$props.videoList === void 0 && $$bindings.videoList && videoList !== void 0)
    $$bindings.videoList(videoList);
  if ($$props.twoLine === void 0 && $$bindings.twoLine && twoLine !== void 0)
    $$bindings.twoLine(twoLine);
  if ($$props.threeLine === void 0 && $$bindings.threeLine && threeLine !== void 0)
    $$bindings.threeLine(threeLine);
  if ($$props.vertical === void 0 && $$bindings.vertical && vertical !== void 0)
    $$bindings.vertical(vertical);
  if ($$props.wrapFocus === void 0 && $$bindings.wrapFocus && wrapFocus !== void 0)
    $$bindings.wrapFocus(wrapFocus);
  if ($$props.singleSelection === void 0 && $$bindings.singleSelection && singleSelection !== void 0)
    $$bindings.singleSelection(singleSelection);
  if ($$props.selectedIndex === void 0 && $$bindings.selectedIndex && selectedIndex !== void 0)
    $$bindings.selectedIndex(selectedIndex);
  if ($$props.radioList === void 0 && $$bindings.radioList && radioList !== void 0)
    $$bindings.radioList(radioList);
  if ($$props.checkList === void 0 && $$bindings.checkList && checkList !== void 0)
    $$bindings.checkList(checkList);
  if ($$props.hasTypeahead === void 0 && $$bindings.hasTypeahead && hasTypeahead !== void 0)
    $$bindings.hasTypeahead(hasTypeahead);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.layout === void 0 && $$bindings.layout && layout !== void 0)
    $$bindings.layout(layout);
  if ($$props.setEnabled === void 0 && $$bindings.setEnabled && setEnabled !== void 0)
    $$bindings.setEnabled(setEnabled);
  if ($$props.getTypeaheadInProgress === void 0 && $$bindings.getTypeaheadInProgress && getTypeaheadInProgress !== void 0)
    $$bindings.getTypeaheadInProgress(getTypeaheadInProgress);
  if ($$props.getSelectedIndex === void 0 && $$bindings.getSelectedIndex && getSelectedIndex !== void 0)
    $$bindings.getSelectedIndex(getSelectedIndex);
  if ($$props.getFocusedItemIndex === void 0 && $$bindings.getFocusedItemIndex && getFocusedItemIndex !== void 0)
    $$bindings.getFocusedItemIndex(getFocusedItemIndex);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(component || missing_component, "svelte:component").$$render($$result, Object.assign({ use: [forwardEvents, ...use] }, {
      class: classMap({
        [className]: true,
        "mdc-deprecated-list": true,
        "mdc-deprecated-list--non-interactive": nonInteractive,
        "mdc-deprecated-list--dense": dense,
        "mdc-deprecated-list--textual-list": textualList,
        "mdc-deprecated-list--avatar-list": avatarList || selectionDialog,
        "mdc-deprecated-list--icon-list": iconList,
        "mdc-deprecated-list--image-list": imageList,
        "mdc-deprecated-list--thumbnail-list": thumbnailList,
        "mdc-deprecated-list--video-list": videoList,
        "mdc-deprecated-list--two-line": twoLine,
        "smui-list--three-line": threeLine && !twoLine
      })
    }, { role }, $$restProps, { this: element }), {
      this: ($$value) => {
        element = $$value;
        $$settled = false;
      }
    }, {
      default: () => `${slots.default ? slots.default({}) : ``}`
    })}`;
  } while (!$$settled);
  return $$rendered;
});
const { Object: Object_1 } = globals;
let counter = 0;
const Item$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let tabindex;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "color",
    "nonInteractive",
    "ripple",
    "activated",
    "role",
    "selected",
    "disabled",
    "skipRestoreFocus",
    "tabindex",
    "inputId",
    "href",
    "component",
    "action",
    "getPrimaryText",
    "getElement"
  ]);
  var _a;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let uninitializedValue = () => {
  };
  function isUninitializedValue(value) {
    return value === uninitializedValue;
  }
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { color = void 0 } = $$props;
  let { nonInteractive = (_a = getContext("SMUI:list:nonInteractive")) !== null && _a !== void 0 ? _a : false } = $$props;
  setContext("SMUI:list:nonInteractive", void 0);
  let { ripple = !nonInteractive } = $$props;
  let { activated = false } = $$props;
  let { role = getContext("SMUI:list:item:role") } = $$props;
  setContext("SMUI:list:item:role", void 0);
  let { selected = false } = $$props;
  let { disabled = false } = $$props;
  let { skipRestoreFocus = false } = $$props;
  let { tabindex: tabindexProp = uninitializedValue } = $$props;
  let { inputId = "SMUI-form-field-list-" + counter++ } = $$props;
  let { href = void 0 } = $$props;
  let element;
  let internalClasses = {};
  let internalStyles = {};
  let internalAttrs = {};
  let input;
  let nav = getContext("SMUI:list:item:nav");
  let { component = nav ? href ? A : Span$1 : Li } = $$props;
  setContext("SMUI:generic:input:props", { id: inputId });
  setContext("SMUI:separator:context", void 0);
  onDestroy(() => {
  });
  function addClass(className2) {
    if (!internalClasses[className2]) {
      internalClasses[className2] = true;
    }
  }
  function removeClass(className2) {
    if (!(className2 in internalClasses) || internalClasses[className2]) {
      internalClasses[className2] = false;
    }
  }
  function addStyle(name, value) {
    if (internalStyles[name] != value) {
      if (value === "" || value == null) {
        delete internalStyles[name];
        internalStyles = internalStyles;
      } else {
        internalStyles[name] = value;
      }
    }
  }
  function action(e) {
    if (!disabled) {
      dispatch(getElement(), "SMUI:action", e);
    }
  }
  function getPrimaryText() {
    var _a2, _b, _c;
    const element2 = getElement();
    const primaryText = element2.querySelector(".mdc-deprecated-list-item__primary-text");
    if (primaryText) {
      return (_a2 = primaryText.textContent) !== null && _a2 !== void 0 ? _a2 : "";
    }
    const text = element2.querySelector(".mdc-deprecated-list-item__text");
    if (text) {
      return (_b = text.textContent) !== null && _b !== void 0 ? _b : "";
    }
    return (_c = element2.textContent) !== null && _c !== void 0 ? _c : "";
  }
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.nonInteractive === void 0 && $$bindings.nonInteractive && nonInteractive !== void 0)
    $$bindings.nonInteractive(nonInteractive);
  if ($$props.ripple === void 0 && $$bindings.ripple && ripple !== void 0)
    $$bindings.ripple(ripple);
  if ($$props.activated === void 0 && $$bindings.activated && activated !== void 0)
    $$bindings.activated(activated);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.skipRestoreFocus === void 0 && $$bindings.skipRestoreFocus && skipRestoreFocus !== void 0)
    $$bindings.skipRestoreFocus(skipRestoreFocus);
  if ($$props.tabindex === void 0 && $$bindings.tabindex && tabindexProp !== void 0)
    $$bindings.tabindex(tabindexProp);
  if ($$props.inputId === void 0 && $$bindings.inputId && inputId !== void 0)
    $$bindings.inputId(inputId);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.action === void 0 && $$bindings.action && action !== void 0)
    $$bindings.action(action);
  if ($$props.getPrimaryText === void 0 && $$bindings.getPrimaryText && getPrimaryText !== void 0)
    $$bindings.getPrimaryText(getPrimaryText);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    tabindex = isUninitializedValue(tabindexProp) ? !nonInteractive && !disabled && (selected || input) ? 0 : -1 : tabindexProp;
    $$rendered = `${validate_component(component || missing_component, "svelte:component").$$render($$result, Object_1.assign({
      use: [
        ...nonInteractive ? [] : [
          [
            Ripple,
            {
              ripple: !input,
              unbounded: false,
              color: (activated || selected) && color == null ? "primary" : color,
              disabled,
              addClass,
              removeClass,
              addStyle
            }
          ]
        ],
        forwardEvents,
        ...use
      ]
    }, {
      class: classMap({
        [className]: true,
        "mdc-deprecated-list-item": true,
        "mdc-deprecated-list-item--activated": activated,
        "mdc-deprecated-list-item--selected": selected,
        "mdc-deprecated-list-item--disabled": disabled,
        "mdc-menu-item--selected": !nav && role === "menuitem" && selected,
        "smui-menu-item--non-interactive": nonInteractive,
        ...internalClasses
      })
    }, {
      style: Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" ")
    }, nav && activated ? { "aria-current": "page" } : {}, !nav ? { role } : {}, !nav && role === "option" ? {
      "aria-selected": selected ? "true" : "false"
    } : {}, !nav && (role === "radio" || role === "checkbox") ? {
      "aria-checked": "false"
    } : {}, !nav ? {
      "aria-disabled": disabled ? "true" : "false"
    } : {}, {
      "data-menu-item-skip-restore-focus": skipRestoreFocus || void 0
    }, { tabindex }, { href }, internalAttrs, $$restProps, { this: element }), {
      this: ($$value) => {
        element = $$value;
        $$settled = false;
      }
    }, {
      default: () => `${ripple ? `<span class="${"mdc-deprecated-list-item__ripple"}"></span>` : ``}${slots.default ? slots.default({}) : ``}`
    })}`;
  } while (!$$settled);
  return $$rendered;
});
var Text = classAdderBuilder({
  class: "mdc-deprecated-list-item__text",
  component: Span$1
});
var PrimaryText = classAdderBuilder({
  class: "mdc-deprecated-list-item__primary-text",
  component: Span$1
});
var SecondaryText = classAdderBuilder({
  class: "mdc-deprecated-list-item__secondary-text",
  component: Span$1
});
const Graphic$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "getElement"]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let element;
  let menuSelectionGroup = getContext("SMUI:list:graphic:menu-selection-group");
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<span${spread([
    {
      class: escape_attribute_value(classMap({
        [className]: true,
        "mdc-deprecated-list-item__graphic": true,
        "mdc-menu__selection-group-icon": menuSelectionGroup
      }))
    },
    escape_object($$restProps)
  ])}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}</span>`;
});
classAdderBuilder({
  class: "mdc-deprecated-list-item__meta",
  component: Span$1
});
var Group = classAdderBuilder({
  class: "mdc-deprecated-list-group",
  component: Div
});
var Subheader = classAdderBuilder({
  class: "mdc-deprecated-list-group__subheader",
  component: H3
});
const Item = Item$1;
const Graphic = Graphic$1;
const UnitsList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(List, "List").$$render($$result, { class: "demo-list" }, {}, {
    default: () => `${validate_component(Button_1, "Button").$$render($$result, {
      color: "secondary",
      variant: "unelevated"
    }, {}, {
      default: () => `${validate_component(Label, "Label").$$render($$result, {}, {}, {
        default: () => `${escape("\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C")} \u043F\u043E\u043B\u043D\u044B\u0439 \u0441\u043F\u0438\u0441\u043E\u043A`
      })}`
    })}

    ${each(data.slice(0, 6), (unit) => `${validate_component(Item, "Item").$$render($$result, { style: "height: 70px;" }, {}, {
      default: () => `${validate_component(Text, "Text").$$render($$result, {}, {}, {
        default: () => `${validate_component(PrimaryText, "PrimaryText").$$render($$result, { style: "color: #1A1A1A;" }, {}, {
          default: () => `\u041D\u043E\u043C\u0435\u0440: ${escape(unit.name)}`
        })}
                ${validate_component(SecondaryText, "SecondaryText").$$render($$result, { style: "color: #1A1A1A;" }, {}, {
          default: () => `\u0410\u0434\u0440\u0435\u0441: ${escape(unit.addres ? unit.addres : "\u0423\u0442\u043E\u0447\u043D\u044F\u0435\u0442\u0441\u044F")}`
        })}
            `
      })}
        `
    })}`)}

    ${validate_component(Button_1, "Button").$$render($$result, {
      color: "secondary",
      variant: "unelevated"
    }, {}, {
      default: () => `${validate_component(Label, "Label").$$render($$result, {}, {}, {
        default: () => `${escape("\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C")} \u043F\u043E\u043B\u043D\u044B\u0439 \u0441\u043F\u0438\u0441\u043E\u043A`
      })}`
    })}`
  })}`;
});
var Carousel_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "#carousel-container.svelte-dli9j0{width:100%;position:relative;display:flex;flex-direction:column;overflow-x:hidden}#carousel-images.svelte-dli9j0{display:flex;justify-content:center;flex-wrap:nowrap;-webkit-mask:linear-gradient(\r\n      to right,\r\n      transparent,\r\n      black 40%,\r\n      black 60%,\r\n      transparent\r\n    );mask:linear-gradient(\r\n      to right,\r\n      transparent,\r\n      black 40%,\r\n      black 60%,\r\n      transparent\r\n    )}button.svelte-dli9j0{position:absolute;top:50%;transform:translateY(-50%);display:flex;align-items:center;justify-content:center;background:transparent;border:none}button.svelte-dli9j0:focus{outline:auto}#left.svelte-dli9j0{left:10px}#right.svelte-dli9j0{right:10px}",
  map: null
};
const Carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { speed = 500 } = $$props;
  let { controlColor = "#444" } = $$props;
  let { controlScale = "0.5" } = $$props;
  let { autoplay = false } = $$props;
  let { autoplaySpeed = 5e3 } = $$props;
  let { displayControls = true } = $$props;
  let interval;
  const rotateLeft = (e) => {
    const transitioningImage = data[data.length - 1];
    document.getElementById(transitioningImage.id).style.opacity = 0;
    data = [data[data.length - 1], ...data.slice(0, data.length - 1)];
    setTimeout(() => document.getElementById(transitioningImage.id).style.opacity = 1, speed);
  };
  const startAutoPlay = () => {
    if (autoplay) {
      interval = setInterval(rotateLeft, autoplaySpeed);
    }
  };
  const stopAutoPlay = () => {
    clearInterval(interval);
  };
  if (autoplay) {
    startAutoPlay();
  }
  onDestroy(() => {
    stopAutoPlay();
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.speed === void 0 && $$bindings.speed && speed !== void 0)
    $$bindings.speed(speed);
  if ($$props.controlColor === void 0 && $$bindings.controlColor && controlColor !== void 0)
    $$bindings.controlColor(controlColor);
  if ($$props.controlScale === void 0 && $$bindings.controlScale && controlScale !== void 0)
    $$bindings.controlScale(controlScale);
  if ($$props.autoplay === void 0 && $$bindings.autoplay && autoplay !== void 0)
    $$bindings.autoplay(autoplay);
  if ($$props.autoplaySpeed === void 0 && $$bindings.autoplaySpeed && autoplaySpeed !== void 0)
    $$bindings.autoplaySpeed(autoplaySpeed);
  if ($$props.displayControls === void 0 && $$bindings.displayControls && displayControls !== void 0)
    $$bindings.displayControls(displayControls);
  $$result.css.add(css$1);
  return `<div id="${"carousel-container"}" class="${"svelte-dli9j0"}"><div id="${"carousel-images"}" class="${"svelte-dli9j0"}">${each(data, (document2) => `<div style="${""}"><a${add_attribute("href", document2.img, 0)} target="${"\u201D_blank\u201D"}"><img style="${"width: 350px; margin: 0 15px; height: 350px; border-radius: 2%;"}"${add_attribute("src", document2.img, 0)}${add_attribute("alt", document2.id, 0)}${add_attribute("id", document2.id, 0)} class="${"svelte-dli9j0"}"></a>
    </div>`)}</div>
  ${displayControls ? `<button id="${"left"}" class="${"svelte-dli9j0"}">${slots["left-control"] ? slots["left-control"]({}) : `
        <svg width="${"39px"}" height="${"110px"}" id="${"svg8"}"${add_attribute("transform", `scale(${controlScale})`, 0)}><g id="${"layer1"}" transform="${"translate(-65.605611,-95.36949)"}"><path${add_attribute("style", `fill:none;stroke:${controlColor};stroke-width:9.865;stroke-linecap:round;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1`, 0)} d="${"m 99.785711,100.30199 -23.346628,37.07648 c -7.853858,12.81098 -7.88205,12.81098 0,24.78902 l 23.346628,37.94647"}" id="${"path1412"}"></path></g></svg>
    `}</button>
  <button id="${"right"}" class="${"svelte-dli9j0"}">${slots["right-control"] ? slots["right-control"]({}) : `
      <svg width="${"39px"}" height="${"110px"}" id="${"svg8"}"${add_attribute("transform", `rotate(180) scale(${controlScale})`, 0)}><g id="${"layer1"}" transform="${"translate(-65.605611,-95.36949)"}"><path${add_attribute("style", `fill:none;stroke:${controlColor};stroke-width:9.865;stroke-linecap:round;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1`, 0)} d="${"m 99.785711,100.30199 -23.346628,37.07648 c -7.853858,12.81098 -7.88205,12.81098 0,24.78902 l 23.346628,37.94647"}" id="${"path1412"}"></path></g></svg>
    `}</button>` : ``}
</div>`;
});
const DocsCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `
    
<div style="${"max-width: 760px; display: flex; flex-direction: column; flex-wrap: nowrap; justify-content: center; align-content: center;"}">${validate_component(Card, "Card").$$render($$result, {
    style: "background-color: #4F72B6; width: 100%;",
    padded: true
  }, {}, {
    default: () => `${validate_component(Content$1, "Content").$$render($$result, {
      class: "mdc-typography--body2",
      style: "color: #fff"
    }, {}, {
      default: () => `<h2 class="${"mdc-typography--headline6"}" style="${"margin: 0;"}">\u0418\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F
          </h2>
          1. \u0427\u0442\u043E\u0431\u044B \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044E \u043A\u0440\u0443\u043F\u043D\u044B\u043C \u043F\u043B\u0430\u043D\u043E\u043C, \u043F\u0440\u043E\u0441\u0442\u043E \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u043D\u0435\u0451.
          
          <p class="${"mdc-typography--body2"}" style="${"margin: 10px 0 0 0;"}">\u0415\u0441\u043B\u0438 \u0432\u044B \u043D\u0435 \u043D\u0430\u0448\u043B\u0438 \u0441\u0432\u043E\u0435\u0433\u043E \u0440\u043E\u0434\u0441\u0442\u0432\u0435\u043D\u043D\u0438\u043A\u0430, \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u043E\u0435 \u0437\u0440\u0435\u043D\u0438\u0435 \u043F\u043E\u043C\u043E\u0436\u0435\u0442 \u043D\u0430\u0439\u0442\u0438 \u0435\u0433\u043E. \u0414\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443. 
          </p>

        ${validate_component(Button_1, "Button").$$render($$result, { color: "secondary", variant: "raised" }, {}, {
        default: () => `${validate_component(Label, "Label").$$render($$result, {}, {}, { default: () => `\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443` })}`
      })}`
    })}`
  })}
    ${validate_component(Carousel, "Carousel").$$render($$result, {
    data,
    controlColor: "white",
    controlScale: 0.8,
    autoplay: true,
    autoplaySpeed: 3e3
  }, {}, {})}</div>

`;
});
let docsList$1 = [
  {
    img: "https://raw.githubusercontent.com/oleg-darkdev/no-war/master/static/img/docs/1.jpeg",
    text: "",
    id: "1"
  },
  {
    img: "https://raw.githubusercontent.com/oleg-darkdev/no-war/master/static/img/docs/2.jpg",
    text: "",
    id: "2"
  },
  {
    img: "https://raw.githubusercontent.com/oleg-darkdev/no-war/master/static/img/docs/3.jpg",
    text: "",
    id: "3"
  },
  {
    img: "https://raw.githubusercontent.com/oleg-darkdev/no-war/master/static/img/docs/4.jpg",
    text: "",
    id: "4"
  },
  {
    img: "https://raw.githubusercontent.com/oleg-darkdev/no-war/master/static/img/docs/5.jpg",
    text: "",
    id: "5"
  },
  {
    img: "https://raw.githubusercontent.com/oleg-darkdev/no-war/master/static/img/docs/6.jpg",
    text: "",
    id: "6"
  },
  {
    img: "https://raw.githubusercontent.com/oleg-darkdev/no-war/master/static/img/docs/7.jpg",
    text: "",
    id: "7"
  },
  {
    img: "https://raw.githubusercontent.com/oleg-darkdev/no-war/master/static/img/docs/8.jpg",
    text: "",
    id: "8"
  },
  {
    img: "https://raw.githubusercontent.com/oleg-darkdev/no-war/master/static/img/docs/9.jpg",
    text: "",
    id: "9"
  },
  {
    img: "https://raw.githubusercontent.com/oleg-darkdev/no-war/master/static/img/docs/10.jpeg	",
    text: "",
    id: "10"
  },
  {
    img: "https://raw.githubusercontent.com/oleg-darkdev/no-war/master/static/img/docs/11.jpg",
    text: "",
    id: "11"
  },
  {
    img: "https://raw.githubusercontent.com/oleg-darkdev/no-war/master/static/img/docs/12.jpeg",
    text: "",
    id: "12"
  },
  {
    img: "https://raw.githubusercontent.com/oleg-darkdev/no-war/master/static/img/docs/13.jpg",
    text: "",
    id: "13"
  },
  {
    img: "https://raw.githubusercontent.com/oleg-darkdev/no-war/master/static/img/docs/14.jpeg",
    text: "",
    id: "14"
  },
  {
    img: "https://raw.githubusercontent.com/oleg-darkdev/no-war/master/static/img/docs/15.jpg",
    text: "",
    id: "15"
  },
  {
    img: "https://raw.githubusercontent.com/oleg-darkdev/no-war/master/static/img/docs/16.jpg",
    text: "",
    id: "16"
  },
  {
    img: "https://raw.githubusercontent.com/oleg-darkdev/no-war/master/static/img/docs/17.jpeg",
    text: "",
    id: "17"
  },
  {
    img: "https://raw.githubusercontent.com/oleg-darkdev/no-war/master/static/img/docs/18.jpg",
    text: "",
    id: "18"
  },
  {
    img: "https://raw.githubusercontent.com/oleg-darkdev/no-war/master/static/img/docs/19.jpg",
    text: "",
    id: "19"
  },
  {
    img: "https://raw.githubusercontent.com/oleg-darkdev/no-war/master/static/img/docs/20.jpg",
    text: "",
    id: "20"
  },
  {
    img: "https://raw.githubusercontent.com/oleg-darkdev/no-war/master/static/img/docs/21.jpeg",
    text: "",
    id: "21"
  },
  {
    img: "https://raw.githubusercontent.com/oleg-darkdev/no-war/master/static/img/docs/22.jpg",
    text: "",
    id: "22"
  },
  {
    img: "https://raw.githubusercontent.com/oleg-darkdev/no-war/master/static/img/docs/23.JPG",
    text: "",
    id: "23"
  },
  {
    img: "https://raw.githubusercontent.com/oleg-darkdev/no-war/master/static/img/docs/24.jpg",
    text: "",
    id: "24"
  },
  {
    img: "https://raw.githubusercontent.com/oleg-darkdev/no-war/master/static/img/docs/25.JPG",
    text: "",
    id: "25"
  }
];
let lossList$1 = [
  {
    type: "\u0422\u0430\u043D\u043A\u0438  \u0411\u0440\u043E\u043D\u0435\u043C\u0430\u0448\u0438\u043D\u044B",
    number: "40",
    img: ""
  },
  {
    type: "\u0410\u0432\u0438\u0430\u0446\u0438\u044F",
    number: "0",
    img: ""
  },
  {
    type: "\u041F\u0435\u0445\u043E\u0442\u0430",
    number: "~3600",
    img: ""
  }
];
let photosList$2 = [
  {
    img: "",
    text: "",
    id: "1"
  },
  {
    img: "",
    text: "",
    id: "2"
  },
  {
    img: "",
    text: "",
    id: "3"
  },
  {
    img: "",
    text: "",
    id: "4"
  },
  {
    img: "",
    text: "",
    id: "5"
  },
  {
    img: "",
    text: "",
    id: "6"
  },
  {
    img: "",
    text: "",
    id: "7"
  },
  {
    img: "",
    text: "",
    id: "8"
  },
  {
    img: "",
    text: "",
    id: "9"
  },
  {
    img: "",
    text: "",
    id: "10"
  },
  {
    img: "",
    text: "",
    id: "11"
  },
  {
    img: "",
    text: "",
    id: "12"
  },
  {
    img: "",
    text: "",
    id: "12"
  },
  {
    img: "",
    text: "",
    id: "12"
  },
  {
    img: "",
    text: "",
    id: "13"
  },
  {
    img: "",
    text: "",
    id: "14"
  },
  {
    img: "",
    text: "",
    id: "15"
  },
  {
    img: "",
    text: "",
    id: "16"
  },
  {
    img: "",
    text: "",
    id: "17"
  },
  {
    img: "",
    text: "",
    id: "18"
  },
  {
    img: "",
    text: "",
    id: "19"
  },
  {
    img: "",
    text: "",
    id: "20"
  },
  {
    img: "",
    text: "",
    id: "21"
  },
  {
    img: "",
    text: "",
    id: "22"
  },
  {
    img: "",
    text: "",
    id: "23"
  },
  {
    img: "",
    text: "",
    id: "24"
  },
  {
    img: "",
    text: "",
    id: "25"
  },
  {
    img: "",
    text: "",
    id: "26"
  },
  {
    img: "",
    text: "",
    id: "27"
  },
  {
    img: "",
    text: "",
    id: "28"
  },
  {
    img: "",
    text: "",
    id: "29"
  },
  {
    img: "",
    text: "",
    id: "30"
  },
  {
    img: "",
    text: "",
    id: "31"
  },
  {
    img: "",
    text: "",
    id: "32"
  },
  {
    img: "",
    text: "",
    id: "33"
  },
  {
    img: "",
    text: "",
    id: "34"
  },
  {
    img: "",
    text: "",
    id: "35"
  },
  {
    img: "",
    text: "",
    id: "36"
  },
  {
    img: "",
    text: "",
    id: "37"
  },
  {
    img: "",
    text: "",
    id: "38"
  },
  {
    img: "",
    text: "",
    id: "39"
  },
  {
    img: "",
    text: "",
    id: "40"
  },
  {
    img: "",
    text: "",
    id: "41"
  },
  {
    img: "",
    text: "",
    id: "42"
  },
  {
    img: "",
    text: "",
    id: "43"
  },
  {
    img: "",
    text: "",
    id: "44"
  },
  {
    img: "",
    text: "",
    id: "45"
  },
  {
    img: "",
    text: "",
    id: "46"
  },
  {
    img: "",
    text: "",
    id: "47"
  },
  {
    img: "",
    text: "",
    id: "48"
  },
  {
    img: "",
    text: "",
    id: "49"
  },
  {
    img: "",
    text: "",
    id: "50"
  }
];
let unitsList$1 = [
  {
    name: "38953",
    addres: "\u041E\u043C\u0443\u0440\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C, \u0433. \u041A\u0438\u0440\u043E\u0432\u043E\u0433\u0440\u0430\u0434 \u0434.45, \u043F\u043E\u0447\u0442\u0430: 45-087"
  },
  {
    name: "6915",
    addres: ""
  },
  {
    name: "6917",
    addres: ""
  },
  {
    name: "6918",
    addres: ""
  },
  {
    name: "6914",
    addres: ""
  },
  {
    name: "35761",
    addres: ""
  },
  {
    name: "28735",
    addres: ""
  },
  {
    name: "10829",
    addres: ""
  },
  {
    name: "41541",
    addres: ""
  },
  {
    name: "6922",
    addres: ""
  },
  {
    name: "10829",
    addres: ""
  },
  {
    name: "92154",
    addres: ""
  },
  {
    name: "55338",
    addres: ""
  },
  {
    name: "83466",
    addres: ""
  },
  {
    name: "23626",
    addres: ""
  },
  {
    name: "19612",
    addres: ""
  },
  {
    name: "32010",
    addres: ""
  },
  {
    name: "46108",
    addres: ""
  },
  {
    name: "54096",
    addres: ""
  },
  {
    name: "89547",
    addres: ""
  },
  {
    name: "69647",
    addres: ""
  },
  {
    name: "51532",
    addres: ""
  },
  {
    name: "61424",
    addres: ""
  },
  {
    name: "34667",
    addres: ""
  },
  {
    name: "16871",
    addres: ""
  },
  {
    name: "61899",
    addres: ""
  },
  {
    name: "3481",
    addres: ""
  },
  {
    name: "62295",
    addres: ""
  },
  {
    name: "6887",
    addres: ""
  },
  {
    name: "38551",
    addres: ""
  },
  {
    name: "21687",
    addres: ""
  },
  {
    name: "22022",
    addres: ""
  },
  {
    name: "63100",
    addres: ""
  },
  {
    name: "3701",
    addres: ""
  },
  {
    name: "3656",
    addres: ""
  },
  {
    name: "28337",
    addres: ""
  },
  {
    name: "32515",
    addres: ""
  },
  {
    name: "74268",
    addres: ""
  },
  {
    name: "41450",
    addres: ""
  },
  {
    name: "93522",
    addres: ""
  },
  {
    name: "3426",
    addres: ""
  },
  {
    name: "44235",
    addres: ""
  },
  {
    name: "3642",
    addres: ""
  },
  {
    name: "10990",
    addres: ""
  },
  {
    name: "74507",
    addres: ""
  },
  {
    name: "5559",
    addres: ""
  },
  {
    name: "3274",
    addres: ""
  },
  {
    name: "63143",
    addres: ""
  },
  {
    name: "77800",
    addres: ""
  },
  {
    name: "42699",
    addres: ""
  },
  {
    name: "40327",
    addres: ""
  },
  {
    name: "55029",
    addres: ""
  },
  {
    name: "65349",
    addres: ""
  },
  {
    name: "98752",
    addres: ""
  },
  {
    name: "7459",
    addres: ""
  },
  {
    name: "32364",
    addres: ""
  },
  {
    name: "74929",
    addres: ""
  },
  {
    name: "6410",
    addres: ""
  },
  {
    name: "77965",
    addres: ""
  },
  {
    name: "36360",
    addres: ""
  },
  {
    name: "48905",
    addres: ""
  },
  {
    name: "23033",
    addres: ""
  },
  {
    name: "6796",
    addres: ""
  },
  {
    name: "64027",
    addres: ""
  },
  {
    name: "5583",
    addres: ""
  },
  {
    name: "2511",
    addres: ""
  },
  {
    name: "2561",
    addres: ""
  },
  {
    name: "72152",
    addres: ""
  },
  {
    name: "74429",
    addres: ""
  },
  {
    name: "42091",
    addres: ""
  },
  {
    name: "12882",
    addres: ""
  },
  {
    name: "61756",
    addres: ""
  },
  {
    name: "3703",
    addres: ""
  },
  {
    name: "3662",
    addres: ""
  },
  {
    name: "3702",
    addres: ""
  },
  {
    name: "28159",
    addres: ""
  },
  {
    name: "9920",
    addres: ""
  },
  {
    name: "27777",
    addres: ""
  },
  {
    name: "6780",
    addres: ""
  },
  {
    name: "6834",
    addres: ""
  },
  {
    name: "6806",
    addres: ""
  },
  {
    name: "6790",
    addres: ""
  },
  {
    name: "4156",
    addres: ""
  },
  {
    name: "29760",
    addres: ""
  },
  {
    name: "64044",
    addres: ""
  },
  {
    name: "7264",
    addres: ""
  },
  {
    name: "25624",
    addres: ""
  },
  {
    name: "7437",
    addres: ""
  },
  {
    name: "5547",
    addres: ""
  },
  {
    name: "34707",
    addres: ""
  },
  {
    name: "65451",
    addres: ""
  },
  {
    name: "62295",
    addres: ""
  },
  {
    name: "98743",
    addres: ""
  },
  {
    name: "6681",
    addres: ""
  },
  {
    name: "6703",
    addres: ""
  },
  {
    name: "5961",
    addres: ""
  },
  {
    name: "62632",
    addres: ""
  },
  {
    name: "5562",
    addres: ""
  },
  {
    name: "7543",
    addres: ""
  },
  {
    name: "5598",
    addres: ""
  },
  {
    name: "5561",
    addres: ""
  },
  {
    name: "3723",
    addres: ""
  },
  {
    name: "2013",
    addres: ""
  },
  {
    name: "3718",
    addres: ""
  },
  {
    name: "68941",
    addres: ""
  },
  {
    name: "73612",
    addres: ""
  },
  {
    name: "6672",
    addres: ""
  },
  {
    name: "3706",
    addres: ""
  },
  {
    name: "3059",
    addres: ""
  },
  {
    name: "10865",
    addres: ""
  },
  {
    name: "27168",
    addres: ""
  },
  {
    name: "21317",
    addres: ""
  },
  {
    name: "6570",
    addres: ""
  },
  {
    name: "10857",
    addres: ""
  },
  {
    name: "6752",
    addres: ""
  },
  {
    name: "36713",
    addres: ""
  },
  {
    name: "74582",
    addres: ""
  },
  {
    name: "42942",
    addres: ""
  },
  {
    name: "41450",
    addres: ""
  },
  {
    name: "62688",
    addres: ""
  },
  {
    name: "3651",
    addres: ""
  },
  {
    name: "41013",
    addres: ""
  },
  {
    name: "3445",
    addres: ""
  },
  {
    name: "86753",
    addres: ""
  },
  {
    name: "63792",
    addres: ""
  },
  {
    name: "46108",
    addres: ""
  },
  {
    name: "69647",
    addres: ""
  },
  {
    name: "23033",
    addres: ""
  }
];
let videosList$1 = ["https://www.youtube.com/watch?v=O-JbI7ul5Po?autohide=1&fs=0", ""];
let photosList$1 = [
  {
    img: "",
    text: "",
    id: "1"
  },
  {
    img: "",
    text: "",
    id: "2"
  },
  {
    img: "",
    text: "",
    id: "3"
  },
  {
    img: "",
    text: "",
    id: "4"
  },
  {
    img: "",
    text: "",
    id: "5"
  },
  {
    img: "",
    text: "",
    id: "6"
  },
  {
    img: "",
    text: "",
    id: "7"
  },
  {
    img: "",
    text: "",
    id: "8"
  },
  {
    img: "",
    text: "",
    id: "9"
  },
  {
    img: "",
    text: "",
    id: "10"
  },
  {
    img: "",
    text: "",
    id: "11"
  },
  {
    img: "",
    text: "",
    id: "12"
  },
  {
    img: "",
    text: "",
    id: "12"
  },
  {
    img: "",
    text: "",
    id: "12"
  },
  {
    img: "",
    text: "",
    id: "13"
  },
  {
    img: "",
    text: "",
    id: "14"
  },
  {
    img: "",
    text: "",
    id: "15"
  },
  {
    img: "",
    text: "",
    id: "16"
  },
  {
    img: "",
    text: "",
    id: "17"
  },
  {
    img: "",
    text: "",
    id: "18"
  },
  {
    img: "",
    text: "",
    id: "19"
  },
  {
    img: "",
    text: "",
    id: "20"
  },
  {
    img: "",
    text: "",
    id: "21"
  },
  {
    img: "",
    text: "",
    id: "22"
  },
  {
    img: "",
    text: "",
    id: "23"
  },
  {
    img: "",
    text: "",
    id: "24"
  },
  {
    img: "",
    text: "",
    id: "25"
  },
  {
    img: "",
    text: "",
    id: "26"
  },
  {
    img: "",
    text: "",
    id: "27"
  },
  {
    img: "",
    text: "",
    id: "28"
  },
  {
    img: "",
    text: "",
    id: "29"
  },
  {
    img: "",
    text: "",
    id: "30"
  },
  {
    img: "",
    text: "",
    id: "31"
  },
  {
    img: "",
    text: "",
    id: "32"
  },
  {
    img: "",
    text: "",
    id: "33"
  },
  {
    img: "",
    text: "",
    id: "34"
  },
  {
    img: "",
    text: "",
    id: "35"
  },
  {
    img: "",
    text: "",
    id: "36"
  },
  {
    img: "",
    text: "",
    id: "37"
  },
  {
    img: "",
    text: "",
    id: "38"
  },
  {
    img: "",
    text: "",
    id: "39"
  },
  {
    img: "",
    text: "",
    id: "40"
  },
  {
    img: "",
    text: "",
    id: "41"
  },
  {
    img: "",
    text: "",
    id: "42"
  },
  {
    img: "",
    text: "",
    id: "43"
  },
  {
    img: "",
    text: "",
    id: "44"
  },
  {
    img: "",
    text: "",
    id: "45"
  },
  {
    img: "",
    text: "",
    id: "46"
  },
  {
    img: "",
    text: "",
    id: "47"
  },
  {
    img: "",
    text: "",
    id: "48"
  },
  {
    img: "",
    text: "",
    id: "49"
  },
  {
    img: "",
    text: "",
    id: "50"
  }
];
let docsList = [
  {
    img: "",
    text: "",
    id: "1"
  },
  {
    img: "",
    text: "",
    id: "2"
  },
  {
    img: "",
    text: "",
    id: "3"
  },
  {
    img: "",
    text: "",
    id: "4"
  },
  {
    img: "",
    text: "",
    id: "5"
  },
  {
    img: "",
    text: "",
    id: "6"
  },
  {
    img: "",
    text: "",
    id: "7"
  },
  {
    img: "",
    text: "",
    id: "8"
  },
  {
    img: "",
    text: "",
    id: "9"
  },
  {
    img: "",
    text: "",
    id: "10"
  },
  {
    img: "",
    text: "",
    id: "11"
  },
  {
    img: "",
    text: "",
    id: "12"
  },
  {
    img: "",
    text: "",
    id: "12"
  },
  {
    img: "",
    text: "",
    id: "12"
  },
  {
    img: "",
    text: "",
    id: "13"
  },
  {
    img: "",
    text: "",
    id: "14"
  },
  {
    img: "",
    text: "",
    id: "15"
  },
  {
    img: "",
    text: "",
    id: "16"
  },
  {
    img: "",
    text: "",
    id: "17"
  },
  {
    img: "",
    text: "",
    id: "18"
  },
  {
    img: "",
    text: "",
    id: "19"
  },
  {
    img: "",
    text: "",
    id: "20"
  },
  {
    img: "",
    text: "",
    id: "21"
  },
  {
    img: "",
    text: "",
    id: "22"
  },
  {
    img: "",
    text: "",
    id: "23"
  },
  {
    img: "",
    text: "",
    id: "24"
  },
  {
    img: "",
    text: "",
    id: "25"
  },
  {
    img: "",
    text: "",
    id: "26"
  },
  {
    img: "",
    text: "",
    id: "27"
  },
  {
    img: "",
    text: "",
    id: "28"
  },
  {
    img: "",
    text: "",
    id: "29"
  },
  {
    img: "",
    text: "",
    id: "30"
  },
  {
    img: "",
    text: "",
    id: "31"
  },
  {
    img: "",
    text: "",
    id: "32"
  },
  {
    img: "",
    text: "",
    id: "33"
  },
  {
    img: "",
    text: "",
    id: "34"
  },
  {
    img: "",
    text: "",
    id: "35"
  },
  {
    img: "",
    text: "",
    id: "36"
  },
  {
    img: "",
    text: "",
    id: "37"
  },
  {
    img: "",
    text: "",
    id: "38"
  },
  {
    img: "",
    text: "",
    id: "39"
  },
  {
    img: "",
    text: "",
    id: "40"
  },
  {
    img: "",
    text: "",
    id: "41"
  },
  {
    img: "",
    text: "",
    id: "42"
  },
  {
    img: "",
    text: "",
    id: "43"
  },
  {
    img: "",
    text: "",
    id: "44"
  },
  {
    img: "",
    text: "",
    id: "45"
  },
  {
    img: "",
    text: "",
    id: "46"
  },
  {
    img: "",
    text: "",
    id: "47"
  },
  {
    img: "",
    text: "",
    id: "48"
  },
  {
    img: "",
    text: "",
    id: "49"
  },
  {
    img: "",
    text: "",
    id: "50"
  }
];
let lossList = [
  {
    type: "\u0422\u0430\u043D\u043A\u0438  \u0411\u0440\u043E\u043D\u0435\u043C\u0430\u0448\u0438\u043D\u044B",
    number: "40",
    img: ""
  },
  {
    type: "\u0410\u0432\u0438\u0430\u0446\u0438\u044F",
    number: "0",
    img: ""
  },
  {
    type: "\u041F\u0435\u0445\u043E\u0442\u0430",
    number: "~3600",
    img: ""
  }
];
let photosList = [
  {
    img: "",
    text: "",
    id: "1"
  },
  {
    img: "",
    text: "",
    id: "2"
  },
  {
    img: "",
    text: "",
    id: "3"
  },
  {
    img: "",
    text: "",
    id: "4"
  },
  {
    img: "",
    text: "",
    id: "5"
  },
  {
    img: "",
    text: "",
    id: "6"
  },
  {
    img: "",
    text: "",
    id: "7"
  },
  {
    img: "",
    text: "",
    id: "8"
  },
  {
    img: "",
    text: "",
    id: "9"
  },
  {
    img: "",
    text: "",
    id: "10"
  },
  {
    img: "",
    text: "",
    id: "11"
  },
  {
    img: "",
    text: "",
    id: "12"
  },
  {
    img: "",
    text: "",
    id: "12"
  },
  {
    img: "",
    text: "",
    id: "12"
  },
  {
    img: "",
    text: "",
    id: "13"
  },
  {
    img: "",
    text: "",
    id: "14"
  },
  {
    img: "",
    text: "",
    id: "15"
  },
  {
    img: "",
    text: "",
    id: "16"
  },
  {
    img: "",
    text: "",
    id: "17"
  },
  {
    img: "",
    text: "",
    id: "18"
  },
  {
    img: "",
    text: "",
    id: "19"
  },
  {
    img: "",
    text: "",
    id: "20"
  },
  {
    img: "",
    text: "",
    id: "21"
  },
  {
    img: "",
    text: "",
    id: "22"
  },
  {
    img: "",
    text: "",
    id: "23"
  },
  {
    img: "",
    text: "",
    id: "24"
  },
  {
    img: "",
    text: "",
    id: "25"
  },
  {
    img: "",
    text: "",
    id: "26"
  },
  {
    img: "",
    text: "",
    id: "27"
  },
  {
    img: "",
    text: "",
    id: "28"
  },
  {
    img: "",
    text: "",
    id: "29"
  },
  {
    img: "",
    text: "",
    id: "30"
  },
  {
    img: "",
    text: "",
    id: "31"
  },
  {
    img: "",
    text: "",
    id: "32"
  },
  {
    img: "",
    text: "",
    id: "33"
  },
  {
    img: "",
    text: "",
    id: "34"
  },
  {
    img: "",
    text: "",
    id: "35"
  },
  {
    img: "",
    text: "",
    id: "36"
  },
  {
    img: "",
    text: "",
    id: "37"
  },
  {
    img: "",
    text: "",
    id: "38"
  },
  {
    img: "",
    text: "",
    id: "39"
  },
  {
    img: "",
    text: "",
    id: "40"
  },
  {
    img: "",
    text: "",
    id: "41"
  },
  {
    img: "",
    text: "",
    id: "42"
  },
  {
    img: "",
    text: "",
    id: "43"
  },
  {
    img: "",
    text: "",
    id: "44"
  },
  {
    img: "",
    text: "",
    id: "45"
  },
  {
    img: "",
    text: "",
    id: "46"
  },
  {
    img: "",
    text: "",
    id: "47"
  },
  {
    img: "",
    text: "",
    id: "48"
  },
  {
    img: "",
    text: "",
    id: "49"
  },
  {
    img: "",
    text: "",
    id: "50"
  }
];
let unitsList = [
  {
    name: "38953",
    addres: "\u041E\u043C\u0443\u0440\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C, \u0433. \u041A\u0438\u0440\u043E\u0432\u043E\u0433\u0440\u0430\u0434 \u0434.45, \u043F\u043E\u0447\u0442\u0430: 45-087"
  },
  {
    name: "6915",
    addres: ""
  },
  {
    name: "6917",
    addres: ""
  },
  {
    name: "6918",
    addres: ""
  },
  {
    name: "6914",
    addres: ""
  },
  {
    name: "35761",
    addres: ""
  },
  {
    name: "28735",
    addres: ""
  },
  {
    name: "10829",
    addres: ""
  },
  {
    name: "41541",
    addres: ""
  },
  {
    name: "6922",
    addres: ""
  },
  {
    name: "10829",
    addres: ""
  },
  {
    name: "92154",
    addres: ""
  },
  {
    name: "55338",
    addres: ""
  },
  {
    name: "83466",
    addres: ""
  },
  {
    name: "23626",
    addres: ""
  },
  {
    name: "19612",
    addres: ""
  },
  {
    name: "32010",
    addres: ""
  },
  {
    name: "46108",
    addres: ""
  },
  {
    name: "54096",
    addres: ""
  },
  {
    name: "89547",
    addres: ""
  },
  {
    name: "69647",
    addres: ""
  },
  {
    name: "51532",
    addres: ""
  },
  {
    name: "61424",
    addres: ""
  },
  {
    name: "34667",
    addres: ""
  },
  {
    name: "16871",
    addres: ""
  },
  {
    name: "61899",
    addres: ""
  },
  {
    name: "3481",
    addres: ""
  },
  {
    name: "62295",
    addres: ""
  },
  {
    name: "6887",
    addres: ""
  },
  {
    name: "38551",
    addres: ""
  },
  {
    name: "21687",
    addres: ""
  },
  {
    name: "22022",
    addres: ""
  },
  {
    name: "63100",
    addres: ""
  },
  {
    name: "3701",
    addres: ""
  },
  {
    name: "3656",
    addres: ""
  },
  {
    name: "28337",
    addres: ""
  },
  {
    name: "32515",
    addres: ""
  },
  {
    name: "74268",
    addres: ""
  },
  {
    name: "41450",
    addres: ""
  },
  {
    name: "93522",
    addres: ""
  },
  {
    name: "3426",
    addres: ""
  },
  {
    name: "44235",
    addres: ""
  },
  {
    name: "3642",
    addres: ""
  },
  {
    name: "10990",
    addres: ""
  },
  {
    name: "74507",
    addres: ""
  },
  {
    name: "5559",
    addres: ""
  },
  {
    name: "3274",
    addres: ""
  },
  {
    name: "63143",
    addres: ""
  },
  {
    name: "77800",
    addres: ""
  },
  {
    name: "42699",
    addres: ""
  },
  {
    name: "40327",
    addres: ""
  },
  {
    name: "55029",
    addres: ""
  },
  {
    name: "65349",
    addres: ""
  },
  {
    name: "98752",
    addres: ""
  },
  {
    name: "7459",
    addres: ""
  },
  {
    name: "32364",
    addres: ""
  },
  {
    name: "74929",
    addres: ""
  },
  {
    name: "6410",
    addres: ""
  },
  {
    name: "77965",
    addres: ""
  },
  {
    name: "36360",
    addres: ""
  },
  {
    name: "48905",
    addres: ""
  },
  {
    name: "23033",
    addres: ""
  },
  {
    name: "6796",
    addres: ""
  },
  {
    name: "64027",
    addres: ""
  },
  {
    name: "5583",
    addres: ""
  },
  {
    name: "2511",
    addres: ""
  },
  {
    name: "2561",
    addres: ""
  },
  {
    name: "72152",
    addres: ""
  },
  {
    name: "74429",
    addres: ""
  },
  {
    name: "42091",
    addres: ""
  },
  {
    name: "12882",
    addres: ""
  },
  {
    name: "61756",
    addres: ""
  },
  {
    name: "3703",
    addres: ""
  },
  {
    name: "3662",
    addres: ""
  },
  {
    name: "3702",
    addres: ""
  },
  {
    name: "28159",
    addres: ""
  },
  {
    name: "9920",
    addres: ""
  },
  {
    name: "27777",
    addres: ""
  },
  {
    name: "6780",
    addres: ""
  },
  {
    name: "6834",
    addres: ""
  },
  {
    name: "6806",
    addres: ""
  },
  {
    name: "6790",
    addres: ""
  },
  {
    name: "4156",
    addres: ""
  },
  {
    name: "29760",
    addres: ""
  },
  {
    name: "64044",
    addres: ""
  },
  {
    name: "7264",
    addres: ""
  },
  {
    name: "25624",
    addres: ""
  },
  {
    name: "7437",
    addres: ""
  },
  {
    name: "5547",
    addres: ""
  },
  {
    name: "34707",
    addres: ""
  },
  {
    name: "65451",
    addres: ""
  },
  {
    name: "62295",
    addres: ""
  },
  {
    name: "98743",
    addres: ""
  },
  {
    name: "6681",
    addres: ""
  },
  {
    name: "6703",
    addres: ""
  },
  {
    name: "5961",
    addres: ""
  },
  {
    name: "62632",
    addres: ""
  },
  {
    name: "5562",
    addres: ""
  },
  {
    name: "7543",
    addres: ""
  },
  {
    name: "5598",
    addres: ""
  },
  {
    name: "5561",
    addres: ""
  },
  {
    name: "3723",
    addres: ""
  },
  {
    name: "2013",
    addres: ""
  },
  {
    name: "3718",
    addres: ""
  },
  {
    name: "68941",
    addres: ""
  },
  {
    name: "73612",
    addres: ""
  },
  {
    name: "6672",
    addres: ""
  },
  {
    name: "3706",
    addres: ""
  },
  {
    name: "3059",
    addres: ""
  },
  {
    name: "10865",
    addres: ""
  },
  {
    name: "27168",
    addres: ""
  },
  {
    name: "21317",
    addres: ""
  },
  {
    name: "6570",
    addres: ""
  },
  {
    name: "10857",
    addres: ""
  },
  {
    name: "6752",
    addres: ""
  },
  {
    name: "36713",
    addres: ""
  },
  {
    name: "74582",
    addres: ""
  },
  {
    name: "42942",
    addres: ""
  },
  {
    name: "41450",
    addres: ""
  },
  {
    name: "62688",
    addres: ""
  },
  {
    name: "3651",
    addres: ""
  },
  {
    name: "41013",
    addres: ""
  },
  {
    name: "3445",
    addres: ""
  },
  {
    name: "86753",
    addres: ""
  },
  {
    name: "63792",
    addres: ""
  },
  {
    name: "46108",
    addres: ""
  },
  {
    name: "69647",
    addres: ""
  },
  {
    name: "23033",
    addres: ""
  }
];
let videosList = ["https://www.youtube.com/watch?v=O-JbI7ul5Po?autohide=1&fs=0", ""];
const occupants = {
  rf: {
    docListRF: docsList$1,
    lossListRF: lossList$1,
    photoListRF: photosList$2,
    unitsListRF: unitsList$1,
    videoListRF: videosList$1,
    deathPhotosListRF: photosList$1
  },
  rb: {
    docListRB: docsList,
    lossListRB: lossList,
    photoListRB: photosList,
    unitsListRB: unitsList,
    videoListRB: videosList,
    deathPhotosListRB: photosList$1
  }
};
const InfoOccupants = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let showUnitsRF = false, showDocsRF = false, showPhotosRF = false;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div style="${"display: flex; align-items: center; flex-direction: column; margin-bottom: 25px;"}"><h2>\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043F\u043E \u0440\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u043E\u0439 \u0430\u0440\u043C\u0438\u0438 \u0420\u0424</h2>
    <p>\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u043E\u0447\u0435\u043D\u044C \u043C\u043D\u043E\u0433\u043E \u0443\u0431\u0438\u0442\u044B\u0445 \u0441\u043B\u043E\u0436\u043D\u043E \u043E\u043F\u043E\u0437\u043D\u0430\u0442\u044C. \u041C\u044B \u0441\u043E\u0437\u043D\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0432\u044B\u043A\u043B\u0430\u0434\u044B\u0432\u0430\u0435\u043C \u044D\u0442\u0438 \u0444\u043E\u0442\u043E \u0438 \u0432\u0438\u0434\u0435\u043E, \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0432\u044B \u043E\u043F\u043E\u0437\u043D\u0430\u0435\u0442\u0435 \u043A\u043E\u0433\u043E-\u0442\u043E \u043F\u043E \u043A\u043E\u0441\u0432\u0435\u043D\u043D\u044B\u043C \u043F\u0440\u0438\u0437\u043D\u0430\u043A\u0430\u043C.
        \u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E\u0431\u043D\u043E\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E.
    </p>
    
    ${validate_component(ListCard, "ListCard").$$render($$result, {
      text: "\u041D\u0430\u0439\u0434\u0435\u043D\u043D\u044B\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B - \u0420\u043E\u0441\u0441\u0438\u044F",
      showSection: showDocsRF
    }, {
      showSection: ($$value) => {
        showDocsRF = $$value;
        $$settled = false;
      }
    }, {})}
    ${showDocsRF ? `${validate_component(DocsCard, "DocsCard").$$render($$result, { data: occupants.rf.docListRF }, {}, {})}` : ``}

    
    ${validate_component(ListCard, "ListCard").$$render($$result, {
      text: "\u0424\u043E\u0442\u043E \u043F\u043B\u0435\u043D\u043D\u044B\u0445 \u0441\u043E\u043B\u0434\u0430\u0442 - \u0420\u043E\u0441\u0441\u0438\u044F",
      showSection: showPhotosRF
    }, {
      showSection: ($$value) => {
        showPhotosRF = $$value;
        $$settled = false;
      }
    }, {})}
    ${showPhotosRF ? `${validate_component(DocsCard, "DocsCard").$$render($$result, { data: occupants.rf.photosListRF }, {}, {})}` : ``}
    
    
 
    ${validate_component(ListCard, "ListCard").$$render($$result, {
      text: "\u0412\u043E\u0435\u043D\u043D\u044B\u0435 \u0447\u0430\u0441\u0442\u0438 - \u0420\u043E\u0441\u0441\u0438\u044F",
      showSection: showUnitsRF
    }, {
      showSection: ($$value) => {
        showUnitsRF = $$value;
        $$settled = false;
      }
    }, {})}
    ${showUnitsRF ? `${validate_component(UnitsList, "UnitsList").$$render($$result, { data: occupants.rf.unitsListRF }, {}, {})}` : ``}</div>`;
  } while (!$$settled);
  return $$rendered;
});
const Calculator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(List, "List").$$render($$result, { class: "demo-list" }, {}, {
    default: () => `${each(data, (loss) => `${validate_component(Item, "Item").$$render($$result, { style: "height: 100px;" }, {}, {
      default: () => `${validate_component(Graphic, "Graphic").$$render($$result, {
        style: "background-image: url(" + loss.img + ");"
      }, {}, {})}
            ${validate_component(Text, "Text").$$render($$result, {}, {}, {
        default: () => `${validate_component(PrimaryText, "PrimaryText").$$render($$result, { style: "font: 26px 'impact';" }, {}, { default: () => `${escape(loss.number)}` })}
                ${validate_component(SecondaryText, "SecondaryText").$$render($$result, {}, {}, { default: () => `${escape(loss.type)}` })}
            `
      })}
        `
    })}`)}`
  })}`;
});
var PartGameFaqList_svelte_svelte_type_style_lang = "";
const css = {
  code: ".wrap-question-type.svelte-v39jm0{display:flex;align-content:center;justify-content:space-between;flex-direction:row;flex-wrap:wrap-reverse}",
  map: null
};
const PartGameFaqList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { faqData } = $$props;
  let { text } = $$props;
  if ($$props.faqData === void 0 && $$bindings.faqData && faqData !== void 0)
    $$bindings.faqData(faqData);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  $$result.css.add(css);
  return `${validate_component(Subheader, "Subheader").$$render($$result, { style: "" }, {}, {
    default: () => `<div class="${"wrap-question-type svelte-v39jm0"}"><h2 style="${"font: 28px 'grafitty'; margin: 0; color: #fff;"}">${escape(text)}</h2>
        ${validate_component(Fab, "Fab").$$render($$result, { mini: true }, {}, {
      default: () => `${validate_component(Icon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
        default: () => `${escape("expand_more")}`
      })}`
    })}</div>`
  })}

${``}`;
});
const questionsGeneral$3 = [
  {
    question: 'Lorem Ipsum - \u044D\u0442\u043E \u0442\u0435\u043A\u0441\u0442-"\u0440\u044B\u0431\u0430",',
    answer: 'Lorem Ipsum - \u044D\u0442\u043E \u0442\u0435\u043A\u0441\u0442-"\u0440\u044B\u0431\u0430", \u0447\u0430\u0441\u0442\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0439 \u0432 \u043F\u0435\u0447\u0430\u0442\u0438 \u0438 \u0432\u044D\u0431-\u0434\u0438\u0437\u0430\u0439\u043D\u0435. Lorem Ipsum \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0439 "\u0440\u044B\u0431\u043E\u0439" \u0434\u043B\u044F \u0442\u0435\u043A\u0441\u0442\u043E\u0432 \u043D\u0430 \u043B\u0430\u0442\u0438\u043D\u0438\u0446\u0435 \u0441 \u043D\u0430\u0447\u0430\u043B\u0430 XVI \u0432\u0435\u043A\u0430.'
  },
  {
    question: 'Lorem Ipsum - \u044D\u0442\u043E \u0442\u0435\u043A\u0441\u0442-"\u0440\u044B\u0431\u0430",',
    answer: 'Lorem Ipsum - \u044D\u0442\u043E \u0442\u0435\u043A\u0441\u0442-"\u0440\u044B\u0431\u0430", \u0447\u0430\u0441\u0442\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0439 \u0432 \u043F\u0435\u0447\u0430\u0442\u0438 \u0438 \u0432\u044D\u0431-\u0434\u0438\u0437\u0430\u0439\u043D\u0435. Lorem Ipsum \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0439 "\u0440\u044B\u0431\u043E\u0439" \u0434\u043B\u044F \u0442\u0435\u043A\u0441\u0442\u043E\u0432 \u043D\u0430 \u043B\u0430\u0442\u0438\u043D\u0438\u0446\u0435 \u0441 \u043D\u0430\u0447\u0430\u043B\u0430 XVI \u0432\u0435\u043A\u0430.'
  },
  {
    question: 'Lorem Ipsum - \u044D\u0442\u043E \u0442\u0435\u043A\u0441\u0442-"\u0440\u044B\u0431\u0430",',
    answer: 'Lorem Ipsum - \u044D\u0442\u043E \u0442\u0435\u043A\u0441\u0442-"\u0440\u044B\u0431\u0430", \u0447\u0430\u0441\u0442\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0439 \u0432 \u043F\u0435\u0447\u0430\u0442\u0438 \u0438 \u0432\u044D\u0431-\u0434\u0438\u0437\u0430\u0439\u043D\u0435. Lorem Ipsum \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0439 "\u0440\u044B\u0431\u043E\u0439" \u0434\u043B\u044F \u0442\u0435\u043A\u0441\u0442\u043E\u0432 \u043D\u0430 \u043B\u0430\u0442\u0438\u043D\u0438\u0446\u0435 \u0441 \u043D\u0430\u0447\u0430\u043B\u0430 XVI \u0432\u0435\u043A\u0430.'
  },
  {
    question: 'Lorem Ipsum - \u044D\u0442\u043E \u0442\u0435\u043A\u0441\u0442-"\u0440\u044B\u0431\u0430",',
    answer: 'Lorem Ipsum - \u044D\u0442\u043E \u0442\u0435\u043A\u0441\u0442-"\u0440\u044B\u0431\u0430", \u0447\u0430\u0441\u0442\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0439 \u0432 \u043F\u0435\u0447\u0430\u0442\u0438 \u0438 \u0432\u044D\u0431-\u0434\u0438\u0437\u0430\u0439\u043D\u0435. Lorem Ipsum \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0439 "\u0440\u044B\u0431\u043E\u0439" \u0434\u043B\u044F \u0442\u0435\u043A\u0441\u0442\u043E\u0432 \u043D\u0430 \u043B\u0430\u0442\u0438\u043D\u0438\u0446\u0435 \u0441 \u043D\u0430\u0447\u0430\u043B\u0430 XVI \u0432\u0435\u043A\u0430.'
  },
  {
    question: 'Lorem Ipsum - \u044D\u0442\u043E \u0442\u0435\u043A\u0441\u0442-"\u0440\u044B\u0431\u0430",',
    answer: 'Lorem Ipsum - \u044D\u0442\u043E \u0442\u0435\u043A\u0441\u0442-"\u0440\u044B\u0431\u0430", \u0447\u0430\u0441\u0442\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0439 \u0432 \u043F\u0435\u0447\u0430\u0442\u0438 \u0438 \u0432\u044D\u0431-\u0434\u0438\u0437\u0430\u0439\u043D\u0435. Lorem Ipsum \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0439 "\u0440\u044B\u0431\u043E\u0439" \u0434\u043B\u044F \u0442\u0435\u043A\u0441\u0442\u043E\u0432 \u043D\u0430 \u043B\u0430\u0442\u0438\u043D\u0438\u0446\u0435 \u0441 \u043D\u0430\u0447\u0430\u043B\u0430 XVI \u0432\u0435\u043A\u0430.'
  },
  {
    question: 'Lorem Ipsum - \u044D\u0442\u043E \u0442\u0435\u043A\u0441\u0442-"\u0440\u044B\u0431\u0430",',
    answer: 'Lorem Ipsum - \u044D\u0442\u043E \u0442\u0435\u043A\u0441\u0442-"\u0440\u044B\u0431\u0430", \u0447\u0430\u0441\u0442\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0439 \u0432 \u043F\u0435\u0447\u0430\u0442\u0438 \u0438 \u0432\u044D\u0431-\u0434\u0438\u0437\u0430\u0439\u043D\u0435. Lorem Ipsum \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0439 "\u0440\u044B\u0431\u043E\u0439" \u0434\u043B\u044F \u0442\u0435\u043A\u0441\u0442\u043E\u0432 \u043D\u0430 \u043B\u0430\u0442\u0438\u043D\u0438\u0446\u0435 \u0441 \u043D\u0430\u0447\u0430\u043B\u0430 XVI \u0432\u0435\u043A\u0430.'
  }
];
const questionsGeneral$2 = [
  {
    question: 'Lorem Ipsum - \u044D\u0442\u043E \u0442\u0435\u043A\u0441\u0442-"\u0440\u044B\u0431\u0430",',
    answer: 'Lorem Ipsum - \u044D\u0442\u043E \u0442\u0435\u043A\u0441\u0442-"\u0440\u044B\u0431\u0430", \u0447\u0430\u0441\u0442\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0439 \u0432 \u043F\u0435\u0447\u0430\u0442\u0438 \u0438 \u0432\u044D\u0431-\u0434\u0438\u0437\u0430\u0439\u043D\u0435. Lorem Ipsum \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0439 "\u0440\u044B\u0431\u043E\u0439" \u0434\u043B\u044F \u0442\u0435\u043A\u0441\u0442\u043E\u0432 \u043D\u0430 \u043B\u0430\u0442\u0438\u043D\u0438\u0446\u0435 \u0441 \u043D\u0430\u0447\u0430\u043B\u0430 XVI \u0432\u0435\u043A\u0430.'
  },
  {
    question: 'Lorem Ipsum - \u044D\u0442\u043E \u0442\u0435\u043A\u0441\u0442-"\u0440\u044B\u0431\u0430",',
    answer: 'Lorem Ipsum - \u044D\u0442\u043E \u0442\u0435\u043A\u0441\u0442-"\u0440\u044B\u0431\u0430", \u0447\u0430\u0441\u0442\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0439 \u0432 \u043F\u0435\u0447\u0430\u0442\u0438 \u0438 \u0432\u044D\u0431-\u0434\u0438\u0437\u0430\u0439\u043D\u0435. Lorem Ipsum \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0439 "\u0440\u044B\u0431\u043E\u0439" \u0434\u043B\u044F \u0442\u0435\u043A\u0441\u0442\u043E\u0432 \u043D\u0430 \u043B\u0430\u0442\u0438\u043D\u0438\u0446\u0435 \u0441 \u043D\u0430\u0447\u0430\u043B\u0430 XVI \u0432\u0435\u043A\u0430.'
  },
  {
    question: 'Lorem Ipsum - \u044D\u0442\u043E \u0442\u0435\u043A\u0441\u0442-"\u0440\u044B\u0431\u0430",',
    answer: 'Lorem Ipsum - \u044D\u0442\u043E \u0442\u0435\u043A\u0441\u0442-"\u0440\u044B\u0431\u0430", \u0447\u0430\u0441\u0442\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0439 \u0432 \u043F\u0435\u0447\u0430\u0442\u0438 \u0438 \u0432\u044D\u0431-\u0434\u0438\u0437\u0430\u0439\u043D\u0435. Lorem Ipsum \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0439 "\u0440\u044B\u0431\u043E\u0439" \u0434\u043B\u044F \u0442\u0435\u043A\u0441\u0442\u043E\u0432 \u043D\u0430 \u043B\u0430\u0442\u0438\u043D\u0438\u0446\u0435 \u0441 \u043D\u0430\u0447\u0430\u043B\u0430 XVI \u0432\u0435\u043A\u0430.'
  },
  {
    question: 'Lorem Ipsum - \u044D\u0442\u043E \u0442\u0435\u043A\u0441\u0442-"\u0440\u044B\u0431\u0430",',
    answer: 'Lorem Ipsum - \u044D\u0442\u043E \u0442\u0435\u043A\u0441\u0442-"\u0440\u044B\u0431\u0430", \u0447\u0430\u0441\u0442\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0439 \u0432 \u043F\u0435\u0447\u0430\u0442\u0438 \u0438 \u0432\u044D\u0431-\u0434\u0438\u0437\u0430\u0439\u043D\u0435. Lorem Ipsum \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0439 "\u0440\u044B\u0431\u043E\u0439" \u0434\u043B\u044F \u0442\u0435\u043A\u0441\u0442\u043E\u0432 \u043D\u0430 \u043B\u0430\u0442\u0438\u043D\u0438\u0446\u0435 \u0441 \u043D\u0430\u0447\u0430\u043B\u0430 XVI \u0432\u0435\u043A\u0430.'
  },
  {
    question: 'Lorem Ipsum - \u044D\u0442\u043E \u0442\u0435\u043A\u0441\u0442-"\u0440\u044B\u0431\u0430",',
    answer: 'Lorem Ipsum - \u044D\u0442\u043E \u0442\u0435\u043A\u0441\u0442-"\u0440\u044B\u0431\u0430", \u0447\u0430\u0441\u0442\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0439 \u0432 \u043F\u0435\u0447\u0430\u0442\u0438 \u0438 \u0432\u044D\u0431-\u0434\u0438\u0437\u0430\u0439\u043D\u0435. Lorem Ipsum \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0439 "\u0440\u044B\u0431\u043E\u0439" \u0434\u043B\u044F \u0442\u0435\u043A\u0441\u0442\u043E\u0432 \u043D\u0430 \u043B\u0430\u0442\u0438\u043D\u0438\u0446\u0435 \u0441 \u043D\u0430\u0447\u0430\u043B\u0430 XVI \u0432\u0435\u043A\u0430.'
  },
  {
    question: 'Lorem Ipsum - \u044D\u0442\u043E \u0442\u0435\u043A\u0441\u0442-"\u0440\u044B\u0431\u0430",',
    answer: 'Lorem Ipsum - \u044D\u0442\u043E \u0442\u0435\u043A\u0441\u0442-"\u0440\u044B\u0431\u0430", \u0447\u0430\u0441\u0442\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0439 \u0432 \u043F\u0435\u0447\u0430\u0442\u0438 \u0438 \u0432\u044D\u0431-\u0434\u0438\u0437\u0430\u0439\u043D\u0435. Lorem Ipsum \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0439 "\u0440\u044B\u0431\u043E\u0439" \u0434\u043B\u044F \u0442\u0435\u043A\u0441\u0442\u043E\u0432 \u043D\u0430 \u043B\u0430\u0442\u0438\u043D\u0438\u0446\u0435 \u0441 \u043D\u0430\u0447\u0430\u043B\u0430 XVI \u0432\u0435\u043A\u0430.'
  }
];
const questionsGeneral$1 = [
  {
    question: 'Lorem Ipsum - \u044D\u0442\u043E \u0442\u0435\u043A\u0441\u0442-"\u0440\u044B\u0431\u0430",',
    answer: 'Lorem Ipsum - \u044D\u0442\u043E \u0442\u0435\u043A\u0441\u0442-"\u0440\u044B\u0431\u0430", \u0447\u0430\u0441\u0442\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0439 \u0432 \u043F\u0435\u0447\u0430\u0442\u0438 \u0438 \u0432\u044D\u0431-\u0434\u0438\u0437\u0430\u0439\u043D\u0435. Lorem Ipsum \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0439 "\u0440\u044B\u0431\u043E\u0439" \u0434\u043B\u044F \u0442\u0435\u043A\u0441\u0442\u043E\u0432 \u043D\u0430 \u043B\u0430\u0442\u0438\u043D\u0438\u0446\u0435 \u0441 \u043D\u0430\u0447\u0430\u043B\u0430 XVI \u0432\u0435\u043A\u0430.'
  },
  {
    question: 'Lorem Ipsum - \u044D\u0442\u043E \u0442\u0435\u043A\u0441\u0442-"\u0440\u044B\u0431\u0430",',
    answer: 'Lorem Ipsum - \u044D\u0442\u043E \u0442\u0435\u043A\u0441\u0442-"\u0440\u044B\u0431\u0430", \u0447\u0430\u0441\u0442\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0439 \u0432 \u043F\u0435\u0447\u0430\u0442\u0438 \u0438 \u0432\u044D\u0431-\u0434\u0438\u0437\u0430\u0439\u043D\u0435. Lorem Ipsum \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0439 "\u0440\u044B\u0431\u043E\u0439" \u0434\u043B\u044F \u0442\u0435\u043A\u0441\u0442\u043E\u0432 \u043D\u0430 \u043B\u0430\u0442\u0438\u043D\u0438\u0446\u0435 \u0441 \u043D\u0430\u0447\u0430\u043B\u0430 XVI \u0432\u0435\u043A\u0430.'
  },
  {
    question: 'Lorem Ipsum - \u044D\u0442\u043E \u0442\u0435\u043A\u0441\u0442-"\u0440\u044B\u0431\u0430",',
    answer: 'Lorem Ipsum - \u044D\u0442\u043E \u0442\u0435\u043A\u0441\u0442-"\u0440\u044B\u0431\u0430", \u0447\u0430\u0441\u0442\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0439 \u0432 \u043F\u0435\u0447\u0430\u0442\u0438 \u0438 \u0432\u044D\u0431-\u0434\u0438\u0437\u0430\u0439\u043D\u0435. Lorem Ipsum \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0439 "\u0440\u044B\u0431\u043E\u0439" \u0434\u043B\u044F \u0442\u0435\u043A\u0441\u0442\u043E\u0432 \u043D\u0430 \u043B\u0430\u0442\u0438\u043D\u0438\u0446\u0435 \u0441 \u043D\u0430\u0447\u0430\u043B\u0430 XVI \u0432\u0435\u043A\u0430.'
  },
  {
    question: 'Lorem Ipsum - \u044D\u0442\u043E \u0442\u0435\u043A\u0441\u0442-"\u0440\u044B\u0431\u0430",',
    answer: 'Lorem Ipsum - \u044D\u0442\u043E \u0442\u0435\u043A\u0441\u0442-"\u0440\u044B\u0431\u0430", \u0447\u0430\u0441\u0442\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0439 \u0432 \u043F\u0435\u0447\u0430\u0442\u0438 \u0438 \u0432\u044D\u0431-\u0434\u0438\u0437\u0430\u0439\u043D\u0435. Lorem Ipsum \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0439 "\u0440\u044B\u0431\u043E\u0439" \u0434\u043B\u044F \u0442\u0435\u043A\u0441\u0442\u043E\u0432 \u043D\u0430 \u043B\u0430\u0442\u0438\u043D\u0438\u0446\u0435 \u0441 \u043D\u0430\u0447\u0430\u043B\u0430 XVI \u0432\u0435\u043A\u0430.'
  },
  {
    question: 'Lorem Ipsum - \u044D\u0442\u043E \u0442\u0435\u043A\u0441\u0442-"\u0440\u044B\u0431\u0430",',
    answer: 'Lorem Ipsum - \u044D\u0442\u043E \u0442\u0435\u043A\u0441\u0442-"\u0440\u044B\u0431\u0430", \u0447\u0430\u0441\u0442\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0439 \u0432 \u043F\u0435\u0447\u0430\u0442\u0438 \u0438 \u0432\u044D\u0431-\u0434\u0438\u0437\u0430\u0439\u043D\u0435. Lorem Ipsum \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0439 "\u0440\u044B\u0431\u043E\u0439" \u0434\u043B\u044F \u0442\u0435\u043A\u0441\u0442\u043E\u0432 \u043D\u0430 \u043B\u0430\u0442\u0438\u043D\u0438\u0446\u0435 \u0441 \u043D\u0430\u0447\u0430\u043B\u0430 XVI \u0432\u0435\u043A\u0430.'
  },
  {
    question: 'Lorem Ipsum - \u044D\u0442\u043E \u0442\u0435\u043A\u0441\u0442-"\u0440\u044B\u0431\u0430",',
    answer: 'Lorem Ipsum - \u044D\u0442\u043E \u0442\u0435\u043A\u0441\u0442-"\u0440\u044B\u0431\u0430", \u0447\u0430\u0441\u0442\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0439 \u0432 \u043F\u0435\u0447\u0430\u0442\u0438 \u0438 \u0432\u044D\u0431-\u0434\u0438\u0437\u0430\u0439\u043D\u0435. Lorem Ipsum \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0439 "\u0440\u044B\u0431\u043E\u0439" \u0434\u043B\u044F \u0442\u0435\u043A\u0441\u0442\u043E\u0432 \u043D\u0430 \u043B\u0430\u0442\u0438\u043D\u0438\u0446\u0435 \u0441 \u043D\u0430\u0447\u0430\u043B\u0430 XVI \u0432\u0435\u043A\u0430.'
  }
];
const questionsGeneral = [
  {
    question: 'Lorem Ipsum - \u044D\u0442\u043E \u0442\u0435\u043A\u0441\u0442-"\u0440\u044B\u0431\u0430",',
    answer: 'Lorem Ipsum - \u044D\u0442\u043E \u0442\u0435\u043A\u0441\u0442-"\u0440\u044B\u0431\u0430", \u0447\u0430\u0441\u0442\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0439 \u0432 \u043F\u0435\u0447\u0430\u0442\u0438 \u0438 \u0432\u044D\u0431-\u0434\u0438\u0437\u0430\u0439\u043D\u0435. Lorem Ipsum \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0439 "\u0440\u044B\u0431\u043E\u0439" \u0434\u043B\u044F \u0442\u0435\u043A\u0441\u0442\u043E\u0432 \u043D\u0430 \u043B\u0430\u0442\u0438\u043D\u0438\u0446\u0435 \u0441 \u043D\u0430\u0447\u0430\u043B\u0430 XVI \u0432\u0435\u043A\u0430.'
  },
  {
    question: 'Lorem Ipsum - \u044D\u0442\u043E \u0442\u0435\u043A\u0441\u0442-"\u0440\u044B\u0431\u0430",',
    answer: 'Lorem Ipsum - \u044D\u0442\u043E \u0442\u0435\u043A\u0441\u0442-"\u0440\u044B\u0431\u0430", \u0447\u0430\u0441\u0442\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0439 \u0432 \u043F\u0435\u0447\u0430\u0442\u0438 \u0438 \u0432\u044D\u0431-\u0434\u0438\u0437\u0430\u0439\u043D\u0435. Lorem Ipsum \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0439 "\u0440\u044B\u0431\u043E\u0439" \u0434\u043B\u044F \u0442\u0435\u043A\u0441\u0442\u043E\u0432 \u043D\u0430 \u043B\u0430\u0442\u0438\u043D\u0438\u0446\u0435 \u0441 \u043D\u0430\u0447\u0430\u043B\u0430 XVI \u0432\u0435\u043A\u0430.'
  },
  {
    question: 'Lorem Ipsum - \u044D\u0442\u043E \u0442\u0435\u043A\u0441\u0442-"\u0440\u044B\u0431\u0430",',
    answer: 'Lorem Ipsum - \u044D\u0442\u043E \u0442\u0435\u043A\u0441\u0442-"\u0440\u044B\u0431\u0430", \u0447\u0430\u0441\u0442\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0439 \u0432 \u043F\u0435\u0447\u0430\u0442\u0438 \u0438 \u0432\u044D\u0431-\u0434\u0438\u0437\u0430\u0439\u043D\u0435. Lorem Ipsum \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0439 "\u0440\u044B\u0431\u043E\u0439" \u0434\u043B\u044F \u0442\u0435\u043A\u0441\u0442\u043E\u0432 \u043D\u0430 \u043B\u0430\u0442\u0438\u043D\u0438\u0446\u0435 \u0441 \u043D\u0430\u0447\u0430\u043B\u0430 XVI \u0432\u0435\u043A\u0430.'
  },
  {
    question: 'Lorem Ipsum - \u044D\u0442\u043E \u0442\u0435\u043A\u0441\u0442-"\u0440\u044B\u0431\u0430",',
    answer: 'Lorem Ipsum - \u044D\u0442\u043E \u0442\u0435\u043A\u0441\u0442-"\u0440\u044B\u0431\u0430", \u0447\u0430\u0441\u0442\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0439 \u0432 \u043F\u0435\u0447\u0430\u0442\u0438 \u0438 \u0432\u044D\u0431-\u0434\u0438\u0437\u0430\u0439\u043D\u0435. Lorem Ipsum \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0439 "\u0440\u044B\u0431\u043E\u0439" \u0434\u043B\u044F \u0442\u0435\u043A\u0441\u0442\u043E\u0432 \u043D\u0430 \u043B\u0430\u0442\u0438\u043D\u0438\u0446\u0435 \u0441 \u043D\u0430\u0447\u0430\u043B\u0430 XVI \u0432\u0435\u043A\u0430.'
  },
  {
    question: 'Lorem Ipsum - \u044D\u0442\u043E \u0442\u0435\u043A\u0441\u0442-"\u0440\u044B\u0431\u0430",',
    answer: 'Lorem Ipsum - \u044D\u0442\u043E \u0442\u0435\u043A\u0441\u0442-"\u0440\u044B\u0431\u0430", \u0447\u0430\u0441\u0442\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0439 \u0432 \u043F\u0435\u0447\u0430\u0442\u0438 \u0438 \u0432\u044D\u0431-\u0434\u0438\u0437\u0430\u0439\u043D\u0435. Lorem Ipsum \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0439 "\u0440\u044B\u0431\u043E\u0439" \u0434\u043B\u044F \u0442\u0435\u043A\u0441\u0442\u043E\u0432 \u043D\u0430 \u043B\u0430\u0442\u0438\u043D\u0438\u0446\u0435 \u0441 \u043D\u0430\u0447\u0430\u043B\u0430 XVI \u0432\u0435\u043A\u0430.'
  },
  {
    question: 'Lorem Ipsum - \u044D\u0442\u043E \u0442\u0435\u043A\u0441\u0442-"\u0440\u044B\u0431\u0430",',
    answer: 'Lorem Ipsum - \u044D\u0442\u043E \u0442\u0435\u043A\u0441\u0442-"\u0440\u044B\u0431\u0430", \u0447\u0430\u0441\u0442\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0439 \u0432 \u043F\u0435\u0447\u0430\u0442\u0438 \u0438 \u0432\u044D\u0431-\u0434\u0438\u0437\u0430\u0439\u043D\u0435. Lorem Ipsum \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0439 "\u0440\u044B\u0431\u043E\u0439" \u0434\u043B\u044F \u0442\u0435\u043A\u0441\u0442\u043E\u0432 \u043D\u0430 \u043B\u0430\u0442\u0438\u043D\u0438\u0446\u0435 \u0441 \u043D\u0430\u0447\u0430\u043B\u0430 XVI \u0432\u0435\u043A\u0430.'
  }
];
const FAQ = {
  occupantsRF: questionsGeneral$3,
  occupantsRB: questionsGeneral$2,
  popular: questionsGeneral$1,
  other: questionsGeneral
};
const QuestionsList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Card, "Card").$$render($$result, {
    style: "width: 100%; max-width: 100%; min-width: 300px;background-color: #F2DD31; margin-bottom: 15px;"
  }, {}, {
    default: () => `${validate_component(Media, "Media").$$render($$result, {
      style: "background-image: url('');  height: auto; width: 100%; min-width: 300px; "
    }, {}, {})}
    ${validate_component(Content$1, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
      default: () => `<div style="${"display: flex; justify-content: center; width: 100%;"}">${validate_component(Group, "Group").$$render($$result, { style: "width: 100%;" }, {}, {
        default: () => `${validate_component(PartGameFaqList, "PartGameFaqList").$$render($$result, {
          text: "\u0416\u0438\u0442\u0435\u043B\u044F\u043C \u0441 \u0420\u0424 \u2049\uFE0F",
          faqData: FAQ.occupantsRF
        }, {}, {})}
                ${validate_component(PartGameFaqList, "PartGameFaqList").$$render($$result, {
          text: "\u0416\u0438\u0442\u0435\u043B\u044F\u043C \u0441 \u0420\u0411 \u2049\uFE0F",
          faqData: FAQ.occupantsRB
        }, {}, {})}
                ${validate_component(PartGameFaqList, "PartGameFaqList").$$render($$result, {
          text: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u2049\uFE0F",
          faqData: FAQ.popular
        }, {}, {})}
                ${validate_component(PartGameFaqList, "PartGameFaqList").$$render($$result, {
          text: "\u041E\u0441\u0442\u0430\u043B\u044C\u043D\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441 \u2049\uFE0F",
          faqData: FAQ.other
        }, {}, {})}`
      })}</div>`
    })}`
  })}`;
});
const questions = [
  {
    question: "Lorem Ipsum is simply dummy text of the printing",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    question: "Lorem Ipsum is simply dummy text of the printing",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    question: "Lorem Ipsum is simply dummy text of the printing",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  }
];
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>\u{1F1FA}\u{1F1E6} #STOPWAR</title>`, ""}`, ""}

<div class="${"section-body bg-img"}" style="${"height: 500px; background-image: url(https://raw.githubusercontent.com/oleg-darkdev/no-war/master/static/img/bg/header_bg.png);"}"></div>


${validate_component(FirstSection, "FirstSection").$$render($$result, {}, {}, {
    default: () => `${validate_component(Card, "Card").$$render($$result, { style: "max-width: 760px; " }, {}, {
      default: () => `${validate_component(Content$1, "Content").$$render($$result, {
        style: "display: flex; align-items: center; flex-direction: column;"
      }, {}, {
        default: () => `<p>\u042D\u0442\u043E\u0442 \u0441\u0430\u0439\u0442 \u0441\u043E\u0437\u0434\u0430\u043D c \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u0435\u0439 \u041C\u0412\u0414 \u0423\u043A\u0440\u0430\u0438\u043D\u044B. \u041D\u0430 \u043D\u0435\u043C \u0432\u044B \u043D\u0430\u0439\u0434\u0435\u0442\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E \u043F\u043B\u0435\u043D\u043D\u044B\u0445 \u0438 \u0443\u0431\u0438\u0442\u044B\u0445 \u0440\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u0438\u0445 \u0441\u043E\u043B\u0434\u0430\u0442\u0430\u0445 \u0432 \u0423\u043A\u0440\u0430\u0438\u043D\u0435, \u0441 \u043C\u043E\u043C\u0435\u043D\u0442\u0430 \u043D\u0430\u0447\u0430\u043B\u0430 \u043E\u043A\u043A\u0443\u043F\u0430\u0446\u0438\u0438. \u0417\u0434\u0435\u0441\u044C \u043C\u044B \u0431\u0443\u0434\u0435\u043C \u043E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u043E \u0440\u0430\u0437\u043C\u0435\u0449\u0430\u0442\u044C \u0444\u043E\u0442\u043E \u0438 \u0432\u0438\u0434\u0435\u043E, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043C\u044B \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u043C \u0441 \u043F\u043E\u043B\u044F \u0431\u043E\u044F.
				\u0415\u0441\u043B\u0438 \u0432\u0430\u0448\u0438 \u0440\u043E\u0434\u0441\u0442\u0432\u0435\u043D\u043D\u0438\u043A\u0438 \u0438\u043B\u0438 \u0437\u043D\u0430\u043A\u043E\u043C\u044B\u0435 \u043D\u0430\u0445\u043E\u0434\u044F\u0442\u0441\u044F \u0432 \u0423\u043A\u0440\u0430\u0438\u043D\u0435 \u0438 \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u044E\u0442 \u0432 \u0432\u043E\u0439\u043D\u0435 \u043F\u0440\u043E\u0442\u0438\u0432 \u043D\u0430\u0448\u0435\u0433\u043E \u043D\u0430\u0440\u043E\u0434\u0430 - \u0437\u0434\u0435\u0441\u044C \u0432\u044B \u0441\u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E\u0431 \u0438\u0445 \u0441\u0443\u0434\u044C\u0431\u0435.
			</p>

			<p>\u0421\u043E\u0432\u043C\u0435\u0441\u0442\u043D\u0430\u044F \u0430\u0433\u0440\u0435\u0441\u0441\u0438\u044F \u0420\u043E\u0441\u0441\u0438\u0438 \u0438 \u0411\u0435\u043B\u0430\u0440\u0443\u0441\u0438 \u043F\u0440\u043E\u0442\u0438\u0432 \u0423\u043A\u0440\u0430\u0438\u043D\u044B \u0432\u044B\u043D\u0443\u0436\u0434\u0430\u0435\u0442 \u043D\u0430\u0441 \u0432\u0441\u0435\u0445 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u044C \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0438 \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C\u0441\u044F \u043D\u0430 \u043E\u0434\u043D\u0443 \u0438\u0437 \u0441\u0442\u043E\u0440\u043E\u043D. 
			</p>

			${validate_component(FindForm, "FindForm").$$render($$result, { color: "F2DD31" }, {}, {})}`
      })}`
    })}`
  })}

<div class="${"section-body bg-img"}" style="${"height: 500px; background-image: url(https://raw.githubusercontent.com/oleg-darkdev/no-war/master/static/img/bg/calculator_bg.png);"}"></div>
${validate_component(CalculatorSection, "CalculatorSection").$$render($$result, {}, {}, {
    default: () => `<div style="${"display: flex; justify-content: center; flex-direction: column; flex-wrap: no-wrap; width: 400px;"}">${validate_component(Calculator, "Calculator").$$render($$result, { data: occupants.rf.lossListRF }, {}, {})}</div>`
  })}

<div class="${"section-body bg-img"}" style="${"height: 500px; background-image: url(https://raw.githubusercontent.com/oleg-darkdev/no-war/master/static/img/bg/prisoners_bg.png);"}"></div>
${validate_component(InfoSection, "InfoSection").$$render($$result, {}, {}, {
    default: () => `<div style="${"display: flex; align-items: center; flex-direction: column; flex-wrap: no-wrap; width: 100%;"}">${validate_component(FindForm, "FindForm").$$render($$result, { color: "4F72B6" }, {}, {})}
		${validate_component(InfoOccupants, "InfoOccupantsRF").$$render($$result, {}, {}, {})}</div>`
  })}




<div class="${"section-body bg-img"}" style="${"height: 60vh; background-image: url(https://raw.githubusercontent.com/oleg-darkdev/no-war/master/static/img/bg/faq_bg.png);"}"></div>
${validate_component(BlueSection, "BlueSection").$$render($$result, {}, {}, {
    default: () => `${validate_component(QuestionsList, "QuestionsList").$$render($$result, { data: questions }, {}, {})}`
  })}  


<div class="${"section-body bg-img"}" style="${"height: 60vh; background-image: url(https://raw.githubusercontent.com/oleg-darkdev/no-war/master/static/img/bg/contacts_bg.png);"}"></div>
${validate_component(YellowSection, "YellowSection").$$render($$result, {}, {}, {
    default: () => `${validate_component(SocialPanelYellowIcons, "SocialPanelYellowIcons").$$render($$result, { title: "\u{1F1FA}\u{1F1E6} #STOPWAR" }, {}, {})}`
  })}  






`;
});
export { Routes as default };
