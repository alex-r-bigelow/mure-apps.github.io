/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (t, n) {
  "object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? n(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (n),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : n(t.d3 = t.d3 || {});
}(undefined, function (t) {
  "use strict";
  function n(t) {
    return function () {
      var n = this.ownerDocument,
          e = this.namespaceURI;return e === Dn && n.documentElement.namespaceURI === Dn ? n.createElement(t) : n.createElementNS(e, t);
    };
  }function e(t) {
    return function () {
      return this.ownerDocument.createElementNS(t.space, t.local);
    };
  }function r(t, n, e) {
    return t = i(t, n, e), function (n) {
      var e = n.relatedTarget;e && (e === this || 8 & e.compareDocumentPosition(this)) || t.call(this, n);
    };
  }function i(n, e, r) {
    return function (i) {
      var o = t.event;t.event = i;try {
        n.call(this, this.__data__, e, r);
      } finally {
        t.event = o;
      }
    };
  }function o(t) {
    return t.trim().split(/^|\s+/).map(function (t) {
      var n = "",
          e = t.indexOf(".");return e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)), { type: t, name: n };
    });
  }function u(t) {
    return function () {
      var n = this.__on;if (n) {
        for (var e, r = 0, i = -1, o = n.length; r < o; ++r) {
          e = n[r], t.type && e.type !== t.type || e.name !== t.name ? n[++i] = e : this.removeEventListener(e.type, e.listener, e.capture);
        }++i ? n.length = i : delete this.__on;
      }
    };
  }function a(t, n, e) {
    var o = Kn.hasOwnProperty(t.type) ? r : i;return function (r, i, u) {
      var a,
          s = this.__on,
          l = o(n, i, u);if (s) for (var c = 0, h = s.length; c < h; ++c) {
        if ((a = s[c]).type === t.type && a.name === t.name) return this.removeEventListener(a.type, a.listener, a.capture), this.addEventListener(a.type, a.listener = l, a.capture = e), void (a.value = n);
      }this.addEventListener(t.type, l, e), a = { type: t.type, name: t.name, value: n, listener: l, capture: e }, s ? s.push(a) : this.__on = [a];
    };
  }function s() {}function l() {
    return [];
  }function c(t, n) {
    this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
  }function h(t, n, e, r, i, o) {
    for (var u, a = 0, s = n.length, l = o.length; a < l; ++a) {
      (u = n[a]) ? (u.__data__ = o[a], r[a] = u) : e[a] = new c(t, o[a]);
    }for (; a < s; ++a) {
      (u = n[a]) && (i[a] = u);
    }
  }function f(t, n, e, r, i, o, u) {
    var a,
        s,
        l,
        h = {},
        f = n.length,
        p = o.length,
        d = new Array(f);for (a = 0; a < f; ++a) {
      (s = n[a]) && (d[a] = l = ue + u.call(s, s.__data__, a, n), l in h ? i[a] = s : h[l] = s);
    }for (a = 0; a < p; ++a) {
      l = ue + u.call(t, o[a], a, o), (s = h[l]) ? (r[a] = s, s.__data__ = o[a], h[l] = null) : e[a] = new c(t, o[a]);
    }for (a = 0; a < f; ++a) {
      (s = n[a]) && h[d[a]] === s && (i[a] = s);
    }
  }function p(t, n) {
    return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
  }function d(t) {
    return function () {
      this.removeAttribute(t);
    };
  }function v(t) {
    return function () {
      this.removeAttributeNS(t.space, t.local);
    };
  }function y(t, n) {
    return function () {
      this.setAttribute(t, n);
    };
  }function g(t, n) {
    return function () {
      this.setAttributeNS(t.space, t.local, n);
    };
  }function _(t, n) {
    return function () {
      var e = n.apply(this, arguments);null == e ? this.removeAttribute(t) : this.setAttribute(t, e);
    };
  }function m(t, n) {
    return function () {
      var e = n.apply(this, arguments);null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
    };
  }function w(t) {
    return function () {
      this.style.removeProperty(t);
    };
  }function b(t, n, e) {
    return function () {
      this.style.setProperty(t, n, e);
    };
  }function x(t, n, e) {
    return function () {
      var r = n.apply(this, arguments);null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
    };
  }function M(t) {
    return function () {
      delete this[t];
    };
  }function N(t, n) {
    return function () {
      this[t] = n;
    };
  }function k(t, n) {
    return function () {
      var e = n.apply(this, arguments);null == e ? delete this[t] : this[t] = e;
    };
  }function A(t) {
    return t.trim().split(/^|\s+/);
  }function E(t) {
    return t.classList || new S(t);
  }function S(t) {
    this._node = t, this._names = A(t.getAttribute("class") || "");
  }function P(t, n) {
    for (var e = E(t), r = -1, i = n.length; ++r < i;) {
      e.add(n[r]);
    }
  }function q(t, n) {
    for (var e = E(t), r = -1, i = n.length; ++r < i;) {
      e.remove(n[r]);
    }
  }function C(t) {
    return function () {
      P(this, t);
    };
  }function $(t) {
    return function () {
      q(this, t);
    };
  }function I(t, n) {
    return function () {
      (n.apply(this, arguments) ? P : q)(this, t);
    };
  }function O() {
    this.textContent = "";
  }function X(t) {
    return function () {
      this.textContent = t;
    };
  }function T(t) {
    return function () {
      var n = t.apply(this, arguments);this.textContent = null == n ? "" : n;
    };
  }function V() {
    this.innerHTML = "";
  }function L(t) {
    return function () {
      this.innerHTML = t;
    };
  }function R(t) {
    return function () {
      var n = t.apply(this, arguments);this.innerHTML = null == n ? "" : n;
    };
  }function z() {
    this.nextSibling && this.parentNode.appendChild(this);
  }function j() {
    this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }function D() {
    return null;
  }function Y() {
    var t = this.parentNode;t && t.removeChild(this);
  }function B(t, n, e) {
    var r = me(t),
        i = r.CustomEvent;i ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
  }function H(t, n) {
    return function () {
      return B(this, t, n);
    };
  }function U(t, n) {
    return function () {
      return B(this, t, n.apply(this, arguments));
    };
  }function F(t, n) {
    this._groups = t, this._parents = n;
  }function G() {
    return new F([[document.documentElement]], $e);
  }function J() {
    for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
      if (!(t = arguments[n] + "") || t in r) throw new Error("illegal type: " + t);r[t] = [];
    }return new K(r);
  }function K(t) {
    this._ = t;
  }function Q(t, n) {
    return t.trim().split(/^|\s+/).map(function (t) {
      var e = "",
          r = t.indexOf(".");if (r >= 0 && (e = t.slice(r + 1), t = t.slice(0, r)), t && !n.hasOwnProperty(t)) throw new Error("unknown type: " + t);return { type: t, name: e };
    });
  }function W(t, n) {
    for (var e, r = 0, i = t.length; r < i; ++r) {
      if ((e = t[r]).name === n) return e.value;
    }
  }function Z(t, n, e) {
    for (var r = 0, i = t.length; r < i; ++r) {
      if (t[r].name === n) {
        t[r] = Xe, t = t.slice(0, r).concat(t.slice(r + 1));break;
      }
    }return null != e && t.push({ name: n, value: e }), t;
  }function tt() {
    return Ye || (Ue(nt), Ye = He.now() + Be);
  }function nt() {
    Ye = 0;
  }function et() {
    this._call = this._time = this._next = null;
  }function rt(t, n, e) {
    var r = new et();return r.restart(t, n, e), r;
  }function it() {
    tt(), ++Le;for (var t, n = Te; n;) {
      (t = Ye - n._time) >= 0 && n._call.call(null, t), n = n._next;
    }--Le;
  }function ot() {
    Ye = (De = He.now()) + Be, Le = Re = 0;try {
      it();
    } finally {
      Le = 0, at(), Ye = 0;
    }
  }function ut() {
    var t = He.now(),
        n = t - De;n > je && (Be -= n, De = t);
  }function at() {
    for (var t, n, e = Te, r = 1 / 0; e;) {
      e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : Te = n);
    }Ve = t, st(r);
  }function st(t) {
    if (!Le) {
      Re && (Re = clearTimeout(Re));var n = t - Ye;n > 24 ? (t < 1 / 0 && (Re = setTimeout(ot, n)), ze && (ze = clearInterval(ze))) : (ze || (De = Ye, ze = setInterval(ut, je)), Le = 1, Ue(ot));
    }
  }function lt(t, n) {
    var e = t.__transition;if (!e || !(e = e[n]) || e.state > Ke) throw new Error("too late");return e;
  }function ct(t, n) {
    var e = t.__transition;if (!e || !(e = e[n]) || e.state > We) throw new Error("too late");return e;
  }function ht(t, n) {
    var e = t.__transition;if (!e || !(e = e[n])) throw new Error("too late");return e;
  }function ft(t, n, e) {
    function r(t) {
      e.state = Qe, e.timer.restart(i, e.delay, e.time), e.delay <= t && i(t - e.delay);
    }function i(r) {
      var l, c, h, f;if (e.state !== Qe) return u();for (l in s) {
        if (f = s[l], f.name === e.name) {
          if (f.state === Ze) return Fe(i);f.state === tr ? (f.state = er, f.timer.stop(), f.on.call("interrupt", t, t.__data__, f.index, f.group), delete s[l]) : +l < n && (f.state = er, f.timer.stop(), delete s[l]);
        }
      }if (Fe(function () {
        e.state === Ze && (e.state = tr, e.timer.restart(o, e.delay, e.time), o(r));
      }), e.state = We, e.on.call("start", t, t.__data__, e.index, e.group), e.state === We) {
        for (e.state = Ze, a = new Array(h = e.tween.length), l = 0, c = -1; l < h; ++l) {
          (f = e.tween[l].value.call(t, t.__data__, e.index, e.group)) && (a[++c] = f);
        }a.length = c + 1;
      }
    }function o(n) {
      for (var r = n < e.duration ? e.ease.call(null, n / e.duration) : (e.timer.restart(u), e.state = nr, 1), i = -1, o = a.length; ++i < o;) {
        a[i].call(null, r);
      }e.state === nr && (e.on.call("end", t, t.__data__, e.index, e.group), u());
    }function u() {
      e.state = er, e.timer.stop(), delete s[n];for (var r in s) {
        return;
      }delete t.__transition;
    }var a,
        s = t.__transition;s[n] = e, e.timer = rt(r, 0, e.time);
  }function pt(t, n) {
    var e = Object.create(t.prototype);for (var r in n) {
      e[r] = n[r];
    }return e;
  }function dt() {}function vt(t) {
    var n;return t = (t + "").trim().toLowerCase(), (n = cr.exec(t)) ? (n = parseInt(n[1], 16), new wt(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n, 1)) : (n = hr.exec(t)) ? yt(parseInt(n[1], 16)) : (n = fr.exec(t)) ? new wt(n[1], n[2], n[3], 1) : (n = pr.exec(t)) ? new wt(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, 1) : (n = dr.exec(t)) ? gt(n[1], n[2], n[3], n[4]) : (n = vr.exec(t)) ? gt(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = yr.exec(t)) ? bt(n[1], n[2] / 100, n[3] / 100, 1) : (n = gr.exec(t)) ? bt(n[1], n[2] / 100, n[3] / 100, n[4]) : _r.hasOwnProperty(t) ? yt(_r[t]) : "transparent" === t ? new wt(NaN, NaN, NaN, 0) : null;
  }function yt(t) {
    return new wt(t >> 16 & 255, t >> 8 & 255, 255 & t, 1);
  }function gt(t, n, e, r) {
    return r <= 0 && (t = n = e = NaN), new wt(t, n, e, r);
  }function _t(t) {
    return t instanceof dt || (t = vt(t)), t ? (t = t.rgb(), new wt(t.r, t.g, t.b, t.opacity)) : new wt();
  }function mt(t, n, e, r) {
    return 1 === arguments.length ? _t(t) : new wt(t, n, e, null == r ? 1 : r);
  }function wt(t, n, e, r) {
    this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
  }function bt(t, n, e, r) {
    return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new Nt(t, n, e, r);
  }function xt(t) {
    if (t instanceof Nt) return new Nt(t.h, t.s, t.l, t.opacity);if (t instanceof dt || (t = vt(t)), !t) return new Nt();if (t instanceof Nt) return t;t = t.rgb();var n = t.r / 255,
        e = t.g / 255,
        r = t.b / 255,
        i = Math.min(n, e, r),
        o = Math.max(n, e, r),
        u = NaN,
        a = o - i,
        s = (o + i) / 2;return a ? (u = n === o ? (e - r) / a + 6 * (e < r) : e === o ? (r - n) / a + 2 : (n - e) / a + 4, a /= s < .5 ? o + i : 2 - o - i, u *= 60) : a = s > 0 && s < 1 ? 0 : u, new Nt(u, a, s, t.opacity);
  }function Mt(t, n, e, r) {
    return 1 === arguments.length ? xt(t) : new Nt(t, n, e, null == r ? 1 : r);
  }function Nt(t, n, e, r) {
    this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
  }function kt(t, n, e) {
    return 255 * (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n);
  }function At(t) {
    if (t instanceof St) return new St(t.l, t.a, t.b, t.opacity);if (t instanceof Xt) {
      var n = t.h * mr;return new St(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity);
    }t instanceof wt || (t = _t(t));var e = $t(t.r),
        r = $t(t.g),
        i = $t(t.b),
        o = Pt((.4124564 * e + .3575761 * r + .1804375 * i) / br),
        u = Pt((.2126729 * e + .7151522 * r + .072175 * i) / xr);return new St(116 * u - 16, 500 * (o - u), 200 * (u - Pt((.0193339 * e + .119192 * r + .9503041 * i) / Mr)), t.opacity);
  }function Et(t, n, e, r) {
    return 1 === arguments.length ? At(t) : new St(t, n, e, null == r ? 1 : r);
  }function St(t, n, e, r) {
    this.l = +t, this.a = +n, this.b = +e, this.opacity = +r;
  }function Pt(t) {
    return t > Er ? Math.pow(t, 1 / 3) : t / Ar + Nr;
  }function qt(t) {
    return t > kr ? t * t * t : Ar * (t - Nr);
  }function Ct(t) {
    return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055);
  }function $t(t) {
    return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4);
  }function It(t) {
    if (t instanceof Xt) return new Xt(t.h, t.c, t.l, t.opacity);t instanceof St || (t = At(t));var n = Math.atan2(t.b, t.a) * wr;return new Xt(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity);
  }function Ot(t, n, e, r) {
    return 1 === arguments.length ? It(t) : new Xt(t, n, e, null == r ? 1 : r);
  }function Xt(t, n, e, r) {
    this.h = +t, this.c = +n, this.l = +e, this.opacity = +r;
  }function Tt(t) {
    if (t instanceof Lt) return new Lt(t.h, t.s, t.l, t.opacity);t instanceof wt || (t = _t(t));var n = t.r / 255,
        e = t.g / 255,
        r = t.b / 255,
        i = (Xr * r + Ir * n - Or * e) / (Xr + Ir - Or),
        o = r - i,
        u = ($r * (e - i) - qr * o) / Cr,
        a = Math.sqrt(u * u + o * o) / ($r * i * (1 - i)),
        s = a ? Math.atan2(u, o) * wr - 120 : NaN;return new Lt(s < 0 ? s + 360 : s, a, i, t.opacity);
  }function Vt(t, n, e, r) {
    return 1 === arguments.length ? Tt(t) : new Lt(t, n, e, null == r ? 1 : r);
  }function Lt(t, n, e, r) {
    this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
  }function Rt(t, n) {
    return function (e) {
      return t + e * n;
    };
  }function zt(t, n, e) {
    return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function (r) {
      return Math.pow(t + r * n, e);
    };
  }function jt(t, n) {
    var e = n - t;return e ? Rt(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : zr(isNaN(t) ? n : t);
  }function Dt(t) {
    return 1 == (t = +t) ? Yt : function (n, e) {
      return e - n ? zt(n, e, t) : zr(isNaN(n) ? e : n);
    };
  }function Yt(t, n) {
    var e = n - t;return e ? Rt(t, e) : zr(isNaN(t) ? n : t);
  }function Bt(t) {
    return function () {
      return t;
    };
  }function Ht(t) {
    return function (n) {
      return t(n) + "";
    };
  }function Ut(t) {
    return "none" === t ? Fr : (Tr || (Tr = document.createElement("DIV"), Vr = document.documentElement, Lr = document.defaultView), Tr.style.transform = t, t = Lr.getComputedStyle(Vr.appendChild(Tr), null).getPropertyValue("transform"), Vr.removeChild(Tr), t = t.slice(7, -1).split(","), Gr(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]));
  }function Ft(t) {
    return null == t ? Fr : (Rr || (Rr = document.createElementNS("http://www.w3.org/2000/svg", "g")), Rr.setAttribute("transform", t), (t = Rr.transform.baseVal.consolidate()) ? (t = t.matrix, Gr(t.a, t.b, t.c, t.d, t.e, t.f)) : Fr);
  }function Gt(t, n, e, r) {
    function i(t) {
      return t.length ? t.pop() + " " : "";
    }function o(t, r, i, o, u, a) {
      if (t !== i || r !== o) {
        var s = u.push("translate(", null, n, null, e);a.push({ i: s - 4, x: Dr(t, i) }, { i: s - 2, x: Dr(r, o) });
      } else (i || o) && u.push("translate(" + i + n + o + e);
    }function u(t, n, e, o) {
      t !== n ? (t - n > 180 ? n += 360 : n - t > 180 && (t += 360), o.push({ i: e.push(i(e) + "rotate(", null, r) - 2, x: Dr(t, n) })) : n && e.push(i(e) + "rotate(" + n + r);
    }function a(t, n, e, o) {
      t !== n ? o.push({ i: e.push(i(e) + "skewX(", null, r) - 2, x: Dr(t, n) }) : n && e.push(i(e) + "skewX(" + n + r);
    }function s(t, n, e, r, o, u) {
      if (t !== e || n !== r) {
        var a = o.push(i(o) + "scale(", null, ",", null, ")");u.push({ i: a - 4, x: Dr(t, e) }, { i: a - 2, x: Dr(n, r) });
      } else 1 === e && 1 === r || o.push(i(o) + "scale(" + e + "," + r + ")");
    }return function (n, e) {
      var r = [],
          i = [];return n = t(n), e = t(e), o(n.translateX, n.translateY, e.translateX, e.translateY, r, i), u(n.rotate, e.rotate, r, i), a(n.skewX, e.skewX, r, i), s(n.scaleX, n.scaleY, e.scaleX, e.scaleY, r, i), n = e = null, function (t) {
        for (var n, e = -1, o = i.length; ++e < o;) {
          r[(n = i[e]).i] = n.x(t);
        }return r.join("");
      };
    };
  }function Jt(t) {
    return function n(e) {
      function r(n, r) {
        var i = t((n = Vt(n)).h, (r = Vt(r)).h),
            o = Yt(n.s, r.s),
            u = Yt(n.l, r.l),
            a = Yt(n.opacity, r.opacity);return function (t) {
          return n.h = i(t), n.s = o(t), n.l = u(Math.pow(t, e)), n.opacity = a(t), n + "";
        };
      }return e = +e, r.gamma = n, r;
    }(1);
  }function Kt(t, n) {
    var e, r;return function () {
      var i = ct(this, t),
          o = i.tween;if (o !== e) {
        r = e = o;for (var u = 0, a = r.length; u < a; ++u) {
          if (r[u].name === n) {
            r = r.slice(), r.splice(u, 1);break;
          }
        }
      }i.tween = r;
    };
  }function Qt(t, n, e) {
    var r, i;if ("function" != typeof e) throw new Error();return function () {
      var o = ct(this, t),
          u = o.tween;if (u !== r) {
        i = (r = u).slice();for (var a = { name: n, value: e }, s = 0, l = i.length; s < l; ++s) {
          if (i[s].name === n) {
            i[s] = a;break;
          }
        }s === l && i.push(a);
      }o.tween = i;
    };
  }function Wt(t, n, e) {
    var r = t._id;return t.each(function () {
      var t = ct(this, r);(t.value || (t.value = {}))[n] = e.apply(this, arguments);
    }), function (t) {
      return ht(t, r).value[n];
    };
  }function Zt(t) {
    return function () {
      this.removeAttribute(t);
    };
  }function tn(t) {
    return function () {
      this.removeAttributeNS(t.space, t.local);
    };
  }function nn(t, n, e) {
    var r, i;return function () {
      var o = this.getAttribute(t);return o === e ? null : o === r ? i : i = n(r = o, e);
    };
  }function en(t, n, e) {
    var r, i;return function () {
      var o = this.getAttributeNS(t.space, t.local);return o === e ? null : o === r ? i : i = n(r = o, e);
    };
  }function rn(t, n, e) {
    var r, i, o;return function () {
      var u,
          a = e(this);return null == a ? void this.removeAttribute(t) : (u = this.getAttribute(t), u === a ? null : u === r && a === i ? o : o = n(r = u, i = a));
    };
  }function on(t, n, e) {
    var r, i, o;return function () {
      var u,
          a = e(this);return null == a ? void this.removeAttributeNS(t.space, t.local) : (u = this.getAttributeNS(t.space, t.local), u === a ? null : u === r && a === i ? o : o = n(r = u, i = a));
    };
  }function un(t, n) {
    function e() {
      var e = this,
          r = n.apply(e, arguments);return r && function (n) {
        e.setAttributeNS(t.space, t.local, r(n));
      };
    }return e._value = n, e;
  }function an(t, n) {
    function e() {
      var e = this,
          r = n.apply(e, arguments);return r && function (n) {
        e.setAttribute(t, r(n));
      };
    }return e._value = n, e;
  }function sn(t, n) {
    return function () {
      lt(this, t).delay = +n.apply(this, arguments);
    };
  }function ln(t, n) {
    return n = +n, function () {
      lt(this, t).delay = n;
    };
  }function cn(t, n) {
    return function () {
      ct(this, t).duration = +n.apply(this, arguments);
    };
  }function hn(t, n) {
    return n = +n, function () {
      ct(this, t).duration = n;
    };
  }function fn(t, n) {
    if ("function" != typeof n) throw new Error();return function () {
      ct(this, t).ease = n;
    };
  }function pn(t) {
    return (t + "").trim().split(/^|\s+/).every(function (t) {
      var n = t.indexOf(".");return n >= 0 && (t = t.slice(0, n)), !t || "start" === t;
    });
  }function dn(t, n, e) {
    var r,
        i,
        o = pn(n) ? lt : ct;return function () {
      var u = o(this, t),
          a = u.on;a !== r && (i = (r = a).copy()).on(n, e), u.on = i;
    };
  }function vn(t) {
    return function () {
      var n = this.parentNode;for (var e in this.__transition) {
        if (+e !== t) return;
      }n && n.removeChild(this);
    };
  }function yn(t, n) {
    var e, r, i;return function () {
      var o = me(this).getComputedStyle(this, null),
          u = o.getPropertyValue(t),
          a = (this.style.removeProperty(t), o.getPropertyValue(t));return u === a ? null : u === e && a === r ? i : i = n(e = u, r = a);
    };
  }function gn(t) {
    return function () {
      this.style.removeProperty(t);
    };
  }function _n(t, n, e) {
    var r, i;return function () {
      var o = me(this).getComputedStyle(this, null).getPropertyValue(t);return o === e ? null : o === r ? i : i = n(r = o, e);
    };
  }function mn(t, n, e) {
    var r, i, o;return function () {
      var u = me(this).getComputedStyle(this, null),
          a = u.getPropertyValue(t),
          s = e(this);return null == s && (this.style.removeProperty(t), s = u.getPropertyValue(t)), a === s ? null : a === r && s === i ? o : o = n(r = a, i = s);
    };
  }function wn(t, n, e) {
    function r() {
      var r = this,
          i = n.apply(r, arguments);return i && function (n) {
        r.style.setProperty(t, i(n), e);
      };
    }return r._value = n, r;
  }function bn(t) {
    return function () {
      this.textContent = t;
    };
  }function xn(t) {
    return function () {
      var n = t(this);this.textContent = null == n ? "" : n;
    };
  }function Mn(t, n, e, r) {
    this._groups = t, this._parents = n, this._name = e, this._id = r;
  }function Nn(t) {
    return G().transition(t);
  }function kn() {
    return ++yi;
  }function An(t) {
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
  }function En(t, n) {
    for (var e; !(e = t.__transition) || !(e = e[n]);) {
      if (!(t = t.parentNode)) return mi.time = tt(), mi;
    }return e;
  }function Sn(t, n) {
    return t.each(function () {
      var t = n.apply(this, arguments),
          e = Ie(this);for (var r in t) {
        e.attr(r, t[r]);
      }
    });
  }function Pn(t, n) {
    for (var e in n) {
      t.attr(e, n[e]);
    }return t;
  }function qn(t, n, e) {
    return t.each(function () {
      var t = n.apply(this, arguments),
          r = Ie(this);for (var i in t) {
        r.style(i, t[i], e);
      }
    });
  }function Cn(t, n, e) {
    for (var r in n) {
      t.style(r, n[r], e);
    }return t;
  }function $n(t, n) {
    return t.each(function () {
      var t = n.apply(this, arguments),
          e = Ie(this);for (var r in t) {
        e.property(r, t[r]);
      }
    });
  }function In(t, n) {
    for (var e in n) {
      t.property(e, n[e]);
    }return t;
  }function On(t, n) {
    return t.each(function () {
      var e = n.apply(this, arguments),
          r = Ie(this).transition(t);for (var i in e) {
        r.attr(i, e[i]);
      }
    });
  }function Xn(t, n) {
    for (var e in n) {
      t.attr(e, n[e]);
    }return t;
  }function Tn(t, n, e) {
    return t.each(function () {
      var r = n.apply(this, arguments),
          i = Ie(this).transition(t);for (var o in r) {
        i.style(o, r[o], e);
      }
    });
  }function Vn(t, n, e) {
    for (var r in n) {
      t.style(r, n[r], e);
    }return t;
  }function Ln() {}function Rn(t, n) {
    var e = new Ln();if (t instanceof Ln) t.each(function (t, n) {
      e.set(n, t);
    });else if (Array.isArray(t)) {
      var r,
          i = -1,
          o = t.length;if (null == n) for (; ++i < o;) {
        e.set(i, t[i]);
      } else for (; ++i < o;) {
        e.set(n(r = t[i], i, t), r);
      }
    } else if (t) for (var u in t) {
      e.set(u, t[u]);
    }return e;
  }function zn() {}function jn(t, n) {
    var e = new zn();if (t instanceof zn) t.each(function (t) {
      e.add(t);
    });else if (t) {
      var r = -1,
          i = t.length;if (null == n) for (; ++r < i;) {
        e.add(t[r]);
      } else for (; ++r < i;) {
        e.add(n(t[r], r, t));
      }
    }return e;
  }var Dn = "http://www.w3.org/1999/xhtml",
      Yn = { svg: "http://www.w3.org/2000/svg", xhtml: Dn, xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/" },
      Bn = function Bn(t) {
    var n = t += "",
        e = n.indexOf(":");return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)), Yn.hasOwnProperty(n) ? { space: Yn[n], local: t } : t;
  },
      Hn = function Hn(t) {
    var r = Bn(t);return (r.local ? e : n)(r);
  },
      Un = function Un(t) {
    return function () {
      return this.matches(t);
    };
  };if ("undefined" != typeof document) {
    var Fn = document.documentElement;if (!Fn.matches) {
      var Gn = Fn.webkitMatchesSelector || Fn.msMatchesSelector || Fn.mozMatchesSelector || Fn.oMatchesSelector;Un = function Un(t) {
        return function () {
          return Gn.call(this, t);
        };
      };
    }
  }var Jn = Un,
      Kn = {};if (t.event = null, "undefined" != typeof document) {
    "onmouseenter" in document.documentElement || (Kn = { mouseenter: "mouseover", mouseleave: "mouseout" });
  }var Qn = function Qn(t, n, e) {
    var r,
        i,
        s = o(t + ""),
        l = s.length;{
      if (!(arguments.length < 2)) {
        for (c = n ? a : u, null == e && (e = !1), r = 0; r < l; ++r) {
          this.each(c(s[r], n, e));
        }return this;
      }var c = this.node().__on;if (c) for (var h, f = 0, p = c.length; f < p; ++f) {
        for (r = 0, h = c[f]; r < l; ++r) {
          if ((i = s[r]).type === h.type && i.name === h.name) return h.value;
        }
      }
    }
  },
      Wn = function Wn(t) {
    return null == t ? s : function () {
      return this.querySelector(t);
    };
  },
      Zn = function Zn(t) {
    "function" != typeof t && (t = Wn(t));for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i) {
      for (var o, u, a = n[i], s = a.length, l = r[i] = new Array(s), c = 0; c < s; ++c) {
        (o = a[c]) && (u = t.call(o, o.__data__, c, a)) && ("__data__" in o && (u.__data__ = o.__data__), l[c] = u);
      }
    }return new F(r, this._parents);
  },
      te = function te(t) {
    return null == t ? l : function () {
      return this.querySelectorAll(t);
    };
  },
      ne = function ne(t) {
    "function" != typeof t && (t = te(t));for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o) {
      for (var u, a = n[o], s = a.length, l = 0; l < s; ++l) {
        (u = a[l]) && (r.push(t.call(u, u.__data__, l, a)), i.push(u));
      }
    }return new F(r, i);
  },
      ee = function ee(t) {
    "function" != typeof t && (t = Jn(t));for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i) {
      for (var o, u = n[i], a = u.length, s = r[i] = [], l = 0; l < a; ++l) {
        (o = u[l]) && t.call(o, o.__data__, l, u) && s.push(o);
      }
    }return new F(r, this._parents);
  },
      re = function re(t) {
    return new Array(t.length);
  },
      ie = function ie() {
    return new F(this._enter || this._groups.map(re), this._parents);
  };c.prototype = { constructor: c, appendChild: function appendChild(t) {
      return this._parent.insertBefore(t, this._next);
    }, insertBefore: function insertBefore(t, n) {
      return this._parent.insertBefore(t, n);
    }, querySelector: function querySelector(t) {
      return this._parent.querySelector(t);
    }, querySelectorAll: function querySelectorAll(t) {
      return this._parent.querySelectorAll(t);
    } };var oe = function oe(t) {
    return function () {
      return t;
    };
  },
      ue = "$",
      ae = function ae(t, n) {
    if (!t) return v = new Array(this.size()), l = -1, this.each(function (t) {
      v[++l] = t;
    }), v;var e = n ? f : h,
        r = this._parents,
        i = this._groups;"function" != typeof t && (t = oe(t));for (var o = i.length, u = new Array(o), a = new Array(o), s = new Array(o), l = 0; l < o; ++l) {
      var c = r[l],
          p = i[l],
          d = p.length,
          v = t.call(c, c && c.__data__, l, r),
          y = v.length,
          g = a[l] = new Array(y),
          _ = u[l] = new Array(y);e(c, p, g, _, s[l] = new Array(d), v, n);for (var m, w, b = 0, x = 0; b < y; ++b) {
        if (m = g[b]) {
          for (b >= x && (x = b + 1); !(w = _[x]) && ++x < y;) {}m._next = w || null;
        }
      }
    }return u = new F(u, r), u._enter = a, u._exit = s, u;
  },
      se = function se() {
    return new F(this._exit || this._groups.map(re), this._parents);
  },
      le = function le(t) {
    for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), u = new Array(r), a = 0; a < o; ++a) {
      for (var s, l = n[a], c = e[a], h = l.length, f = u[a] = new Array(h), p = 0; p < h; ++p) {
        (s = l[p] || c[p]) && (f[p] = s);
      }
    }for (; a < r; ++a) {
      u[a] = n[a];
    }return new F(u, this._parents);
  },
      ce = function ce() {
    for (var t = this._groups, n = -1, e = t.length; ++n < e;) {
      for (var r, i = t[n], o = i.length - 1, u = i[o]; --o >= 0;) {
        (r = i[o]) && (u && u !== r.nextSibling && u.parentNode.insertBefore(r, u), u = r);
      }
    }return this;
  },
      he = function he(t) {
    function n(n, e) {
      return n && e ? t(n.__data__, e.__data__) : !n - !e;
    }t || (t = p);for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
      for (var u, a = e[o], s = a.length, l = i[o] = new Array(s), c = 0; c < s; ++c) {
        (u = a[c]) && (l[c] = u);
      }l.sort(n);
    }return new F(i, this._parents).order();
  },
      fe = function fe() {
    var t = arguments[0];return arguments[0] = this, t.apply(null, arguments), this;
  },
      pe = function pe() {
    var t = new Array(this.size()),
        n = -1;return this.each(function () {
      t[++n] = this;
    }), t;
  },
      de = function de() {
    for (var t = this._groups, n = 0, e = t.length; n < e; ++n) {
      for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
        var u = r[i];if (u) return u;
      }
    }return null;
  },
      ve = function ve() {
    var t = 0;return this.each(function () {
      ++t;
    }), t;
  },
      ye = function ye() {
    return !this.node();
  },
      ge = function ge(t) {
    for (var n = this._groups, e = 0, r = n.length; e < r; ++e) {
      for (var i, o = n[e], u = 0, a = o.length; u < a; ++u) {
        (i = o[u]) && t.call(i, i.__data__, u, o);
      }
    }return this;
  },
      _e = function _e(t, n) {
    var e = Bn(t);if (arguments.length < 2) {
      var r = this.node();return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
    }return this.each((null == n ? e.local ? v : d : "function" == typeof n ? e.local ? m : _ : e.local ? g : y)(e, n));
  },
      me = function me(t) {
    return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
  },
      we = function we(t, n, e) {
    var r;return arguments.length > 1 ? this.each((null == n ? w : "function" == typeof n ? x : b)(t, n, null == e ? "" : e)) : me(r = this.node()).getComputedStyle(r, null).getPropertyValue(t);
  },
      be = function be(t, n) {
    return arguments.length > 1 ? this.each((null == n ? M : "function" == typeof n ? k : N)(t, n)) : this.node()[t];
  };S.prototype = { add: function add(t) {
      this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
    }, remove: function remove(t) {
      var n = this._names.indexOf(t);n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
    }, contains: function contains(t) {
      return this._names.indexOf(t) >= 0;
    } };var xe = function xe(t, n) {
    var e = A(t + "");if (arguments.length < 2) {
      for (var r = E(this.node()), i = -1, o = e.length; ++i < o;) {
        if (!r.contains(e[i])) return !1;
      }return !0;
    }return this.each(("function" == typeof n ? I : n ? C : $)(e, n));
  },
      Me = function Me(t) {
    return arguments.length ? this.each(null == t ? O : ("function" == typeof t ? T : X)(t)) : this.node().textContent;
  },
      Ne = function Ne(t) {
    return arguments.length ? this.each(null == t ? V : ("function" == typeof t ? R : L)(t)) : this.node().innerHTML;
  },
      ke = function ke() {
    return this.each(z);
  },
      Ae = function Ae() {
    return this.each(j);
  },
      Ee = function Ee(t) {
    var n = "function" == typeof t ? t : Hn(t);return this.select(function () {
      return this.appendChild(n.apply(this, arguments));
    });
  },
      Se = function Se(t, n) {
    var e = "function" == typeof t ? t : Hn(t),
        r = null == n ? D : "function" == typeof n ? n : Wn(n);return this.select(function () {
      return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
    });
  },
      Pe = function Pe() {
    return this.each(Y);
  },
      qe = function qe(t) {
    return arguments.length ? this.property("__data__", t) : this.node().__data__;
  },
      Ce = function Ce(t, n) {
    return this.each(("function" == typeof n ? U : H)(t, n));
  },
      $e = [null];F.prototype = G.prototype = { constructor: F, select: Zn, selectAll: ne, filter: ee, data: ae, enter: ie, exit: se, merge: le, order: ce, sort: he, call: fe, nodes: pe, node: de, size: ve, empty: ye, each: ge, attr: _e, style: we, property: be, classed: xe, text: Me, html: Ne, raise: ke, lower: Ae, append: Ee, insert: Se, remove: Pe, datum: qe, on: Qn, dispatch: Ce };var Ie = function Ie(t) {
    return "string" == typeof t ? new F([[document.querySelector(t)]], [document.documentElement]) : new F([[t]], $e);
  },
      Oe = function Oe(t) {
    return "string" == typeof t ? new F([document.querySelectorAll(t)], [document.documentElement]) : new F([null == t ? [] : t], $e);
  },
      Xe = { value: function value() {} };K.prototype = J.prototype = { constructor: K, on: function on(t, n) {
      var e,
          r = this._,
          i = Q(t + "", r),
          o = -1,
          u = i.length;{
        if (!(arguments.length < 2)) {
          if (null != n && "function" != typeof n) throw new Error("invalid callback: " + n);for (; ++o < u;) {
            if (e = (t = i[o]).type) r[e] = Z(r[e], t.name, n);else if (null == n) for (e in r) {
              r[e] = Z(r[e], t.name, null);
            }
          }return this;
        }for (; ++o < u;) {
          if ((e = (t = i[o]).type) && (e = W(r[e], t.name))) return e;
        }
      }
    }, copy: function copy() {
      var t = {},
          n = this._;for (var e in n) {
        t[e] = n[e].slice();
      }return new K(t);
    }, call: function call(t, n) {
      if ((e = arguments.length - 2) > 0) for (var e, r, i = new Array(e), o = 0; o < e; ++o) {
        i[o] = arguments[o + 2];
      }if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);for (r = this._[t], o = 0, e = r.length; o < e; ++o) {
        r[o].value.apply(n, i);
      }
    }, apply: function apply(t, n, e) {
      if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);for (var r = this._[t], i = 0, o = r.length; i < o; ++i) {
        r[i].value.apply(n, e);
      }
    } };var Te,
      Ve,
      Le = 0,
      Re = 0,
      ze = 0,
      je = 1e3,
      De = 0,
      Ye = 0,
      Be = 0,
      He = "object" == (typeof performance === "undefined" ? "undefined" : _typeof(performance)) && performance.now ? performance : Date,
      Ue = "function" == typeof requestAnimationFrame ? requestAnimationFrame : function (t) {
    setTimeout(t, 17);
  };et.prototype = rt.prototype = { constructor: et, restart: function restart(t, n, e) {
      if ("function" != typeof t) throw new TypeError("callback is not a function");e = (null == e ? tt() : +e) + (null == n ? 0 : +n), this._next || Ve === this || (Ve ? Ve._next = this : Te = this, Ve = this), this._call = t, this._time = e, st();
    }, stop: function stop() {
      this._call && (this._call = null, this._time = 1 / 0, st());
    } };var Fe = function Fe(t, n, e) {
    var r = new et();return n = null == n ? 0 : +n, r.restart(function (e) {
      r.stop(), t(e + n);
    }, n, e), r;
  },
      Ge = J("start", "end", "interrupt"),
      Je = [],
      Ke = 0,
      Qe = 1,
      We = 2,
      Ze = 3,
      tr = 4,
      nr = 5,
      er = 6,
      rr = function rr(t, n, e, r, i, o) {
    var u = t.__transition;if (u) {
      if (e in u) return;
    } else t.__transition = {};ft(t, e, { name: n, index: r, group: i, on: Ge, tween: Je, time: o.time, delay: o.delay, duration: o.duration, ease: o.ease, timer: null, state: Ke });
  },
      ir = function ir(t, n) {
    var e,
        r,
        i,
        o = t.__transition,
        u = !0;if (o) {
      n = null == n ? null : n + "";for (i in o) {
        (e = o[i]).name === n ? (r = e.state > We && e.state < nr, e.state = er, e.timer.stop(), r && e.on.call("interrupt", t, t.__data__, e.index, e.group), delete o[i]) : u = !1;
      }u && delete t.__transition;
    }
  },
      or = function or(t) {
    return this.each(function () {
      ir(this, t);
    });
  },
      ur = function ur(t, n, e) {
    t.prototype = n.prototype = e, e.constructor = t;
  },
      ar = "\\s*([+-]?\\d+)\\s*",
      sr = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      lr = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      cr = /^#([0-9a-f]{3})$/,
      hr = /^#([0-9a-f]{6})$/,
      fr = new RegExp("^rgb\\(" + [ar, ar, ar] + "\\)$"),
      pr = new RegExp("^rgb\\(" + [lr, lr, lr] + "\\)$"),
      dr = new RegExp("^rgba\\(" + [ar, ar, ar, sr] + "\\)$"),
      vr = new RegExp("^rgba\\(" + [lr, lr, lr, sr] + "\\)$"),
      yr = new RegExp("^hsl\\(" + [sr, lr, lr] + "\\)$"),
      gr = new RegExp("^hsla\\(" + [sr, lr, lr, sr] + "\\)$"),
      _r = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };ur(dt, vt, { displayable: function displayable() {
      return this.rgb().displayable();
    }, toString: function toString() {
      return this.rgb() + "";
    } }), ur(wt, mt, pt(dt, { brighter: function brighter(t) {
      return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new wt(this.r * t, this.g * t, this.b * t, this.opacity);
    }, darker: function darker(t) {
      return t = null == t ? .7 : Math.pow(.7, t), new wt(this.r * t, this.g * t, this.b * t, this.opacity);
    }, rgb: function rgb() {
      return this;
    }, displayable: function displayable() {
      return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1;
    }, toString: function toString() {
      var t = this.opacity;return t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t)), (1 === t ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")");
    } })), ur(Nt, Mt, pt(dt, { brighter: function brighter(t) {
      return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new Nt(this.h, this.s, this.l * t, this.opacity);
    }, darker: function darker(t) {
      return t = null == t ? .7 : Math.pow(.7, t), new Nt(this.h, this.s, this.l * t, this.opacity);
    }, rgb: function rgb() {
      var t = this.h % 360 + 360 * (this.h < 0),
          n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
          e = this.l,
          r = e + (e < .5 ? e : 1 - e) * n,
          i = 2 * e - r;return new wt(kt(t >= 240 ? t - 240 : t + 120, i, r), kt(t, i, r), kt(t < 120 ? t + 240 : t - 120, i, r), this.opacity);
    }, displayable: function displayable() {
      return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
    } }));var mr = Math.PI / 180,
      wr = 180 / Math.PI,
      br = .95047,
      xr = 1,
      Mr = 1.08883,
      Nr = 4 / 29,
      kr = 6 / 29,
      Ar = 3 * kr * kr,
      Er = kr * kr * kr;ur(St, Et, pt(dt, { brighter: function brighter(t) {
      return new St(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity);
    }, darker: function darker(t) {
      return new St(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity);
    }, rgb: function rgb() {
      var t = (this.l + 16) / 116,
          n = isNaN(this.a) ? t : t + this.a / 500,
          e = isNaN(this.b) ? t : t - this.b / 200;return t = xr * qt(t), n = br * qt(n), e = Mr * qt(e), new wt(Ct(3.2404542 * n - 1.5371385 * t - .4985314 * e), Ct(-.969266 * n + 1.8760108 * t + .041556 * e), Ct(.0556434 * n - .2040259 * t + 1.0572252 * e), this.opacity);
    } })), ur(Xt, Ot, pt(dt, { brighter: function brighter(t) {
      return new Xt(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity);
    }, darker: function darker(t) {
      return new Xt(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity);
    }, rgb: function rgb() {
      return At(this).rgb();
    } }));var Sr = -.14861,
      Pr = 1.78277,
      qr = -.29227,
      Cr = -.90649,
      $r = 1.97294,
      Ir = $r * Cr,
      Or = $r * Pr,
      Xr = Pr * qr - Cr * Sr;ur(Lt, Vt, pt(dt, { brighter: function brighter(t) {
      return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new Lt(this.h, this.s, this.l * t, this.opacity);
    }, darker: function darker(t) {
      return t = null == t ? .7 : Math.pow(.7, t), new Lt(this.h, this.s, this.l * t, this.opacity);
    }, rgb: function rgb() {
      var t = isNaN(this.h) ? 0 : (this.h + 120) * mr,
          n = +this.l,
          e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
          r = Math.cos(t),
          i = Math.sin(t);return new wt(255 * (n + e * (Sr * r + Pr * i)), 255 * (n + e * (qr * r + Cr * i)), 255 * (n + e * ($r * r)), this.opacity);
    } }));var Tr,
      Vr,
      Lr,
      Rr,
      zr = function zr(t) {
    return function () {
      return t;
    };
  },
      jr = function t(n) {
    function e(t, n) {
      var e = r((t = mt(t)).r, (n = mt(n)).r),
          i = r(t.g, n.g),
          o = r(t.b, n.b),
          u = Yt(t.opacity, n.opacity);return function (n) {
        return t.r = e(n), t.g = i(n), t.b = o(n), t.opacity = u(n), t + "";
      };
    }var r = Dt(n);return e.gamma = t, e;
  }(1),
      Dr = function Dr(t, n) {
    return t = +t, n -= t, function (e) {
      return t + n * e;
    };
  },
      Yr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      Br = new RegExp(Yr.source, "g"),
      Hr = function Hr(t, n) {
    var e,
        r,
        i,
        o = Yr.lastIndex = Br.lastIndex = 0,
        u = -1,
        a = [],
        s = [];for (t += "", n += ""; (e = Yr.exec(t)) && (r = Br.exec(n));) {
      (i = r.index) > o && (i = n.slice(o, i), a[u] ? a[u] += i : a[++u] = i), (e = e[0]) === (r = r[0]) ? a[u] ? a[u] += r : a[++u] = r : (a[++u] = null, s.push({ i: u, x: Dr(e, r) })), o = Br.lastIndex;
    }return o < n.length && (i = n.slice(o), a[u] ? a[u] += i : a[++u] = i), a.length < 2 ? s[0] ? Ht(s[0].x) : Bt(n) : (n = s.length, function (t) {
      for (var e, r = 0; r < n; ++r) {
        a[(e = s[r]).i] = e.x(t);
      }return a.join("");
    });
  },
      Ur = 180 / Math.PI,
      Fr = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 },
      Gr = function Gr(t, n, e, r, i, o) {
    var u, a, s;return (u = Math.sqrt(t * t + n * n)) && (t /= u, n /= u), (s = t * e + n * r) && (e -= t * s, r -= n * s), (a = Math.sqrt(e * e + r * r)) && (e /= a, r /= a, s /= a), t * r < n * e && (t = -t, n = -n, s = -s, u = -u), { translateX: i, translateY: o, rotate: Math.atan2(n, t) * Ur, skewX: Math.atan(s) * Ur, scaleX: u, scaleY: a };
  },
      Jr = Gt(Ut, "px, ", "px)", "deg)"),
      Kr = Gt(Ft, ", ", ")", ")");Jt(jt);var Qr = (Jt(Yt), function (t, n) {
    var e = this._id;if (t += "", arguments.length < 2) {
      for (var r, i = ht(this.node(), e).tween, o = 0, u = i.length; o < u; ++o) {
        if ((r = i[o]).name === t) return r.value;
      }return null;
    }return this.each((null == n ? Kt : Qt)(e, t, n));
  }),
      Wr = function Wr(t, n) {
    var e;return ("number" == typeof n ? Dr : n instanceof vt ? jr : (e = vt(n)) ? (n = e, jr) : Hr)(t, n);
  },
      Zr = function Zr(t, n) {
    var e = Bn(t),
        r = "transform" === e ? Kr : Wr;return this.attrTween(t, "function" == typeof n ? (e.local ? on : rn)(e, r, Wt(this, "attr." + t, n)) : null == n ? (e.local ? tn : Zt)(e) : (e.local ? en : nn)(e, r, n + ""));
  },
      ti = function ti(t, n) {
    var e = "attr." + t;if (arguments.length < 2) return (e = this.tween(e)) && e._value;if (null == n) return this.tween(e, null);if ("function" != typeof n) throw new Error();var r = Bn(t);return this.tween(e, (r.local ? un : an)(r, n));
  },
      ni = function ni(t) {
    var n = this._id;return arguments.length ? this.each(("function" == typeof t ? sn : ln)(n, t)) : ht(this.node(), n).delay;
  },
      ei = function ei(t) {
    var n = this._id;return arguments.length ? this.each(("function" == typeof t ? cn : hn)(n, t)) : ht(this.node(), n).duration;
  },
      ri = function ri(t) {
    var n = this._id;return arguments.length ? this.each(fn(n, t)) : ht(this.node(), n).ease;
  },
      ii = function ii(t) {
    "function" != typeof t && (t = Jn(t));for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i) {
      for (var o, u = n[i], a = u.length, s = r[i] = [], l = 0; l < a; ++l) {
        (o = u[l]) && t.call(o, o.__data__, l, u) && s.push(o);
      }
    }return new Mn(r, this._parents, this._name, this._id);
  },
      oi = function oi(t) {
    if (t._id !== this._id) throw new Error();for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), u = new Array(r), a = 0; a < o; ++a) {
      for (var s, l = n[a], c = e[a], h = l.length, f = u[a] = new Array(h), p = 0; p < h; ++p) {
        (s = l[p] || c[p]) && (f[p] = s);
      }
    }for (; a < r; ++a) {
      u[a] = n[a];
    }return new Mn(u, this._parents, this._name, this._id);
  },
      ui = function ui(t, n) {
    var e = this._id;return arguments.length < 2 ? ht(this.node(), e).on.on(t) : this.each(dn(e, t, n));
  },
      ai = function ai() {
    return this.on("end.remove", vn(this._id));
  },
      si = function si(t) {
    var n = this._name,
        e = this._id;"function" != typeof t && (t = Wn(t));for (var r = this._groups, i = r.length, o = new Array(i), u = 0; u < i; ++u) {
      for (var a, s, l = r[u], c = l.length, h = o[u] = new Array(c), f = 0; f < c; ++f) {
        (a = l[f]) && (s = t.call(a, a.__data__, f, l)) && ("__data__" in a && (s.__data__ = a.__data__), h[f] = s, rr(h[f], n, e, f, h, ht(a, e)));
      }
    }return new Mn(o, this._parents, n, e);
  },
      li = function li(t) {
    var n = this._name,
        e = this._id;"function" != typeof t && (t = te(t));for (var r = this._groups, i = r.length, o = [], u = [], a = 0; a < i; ++a) {
      for (var s, l = r[a], c = l.length, h = 0; h < c; ++h) {
        if (s = l[h]) {
          for (var f, p = t.call(s, s.__data__, h, l), d = ht(s, e), v = 0, y = p.length; v < y; ++v) {
            (f = p[v]) && rr(f, n, e, v, p, d);
          }o.push(p), u.push(s);
        }
      }
    }return new Mn(o, u, n, e);
  },
      ci = G.prototype.constructor,
      hi = function hi() {
    return new ci(this._groups, this._parents);
  },
      fi = function fi(t, n, e) {
    var r = "transform" == (t += "") ? Jr : Wr;return null == n ? this.styleTween(t, yn(t, r)).on("end.style." + t, gn(t)) : this.styleTween(t, "function" == typeof n ? mn(t, r, Wt(this, "style." + t, n)) : _n(t, r, n + ""), e);
  },
      pi = function pi(t, n, e) {
    var r = "style." + (t += "");if (arguments.length < 2) return (r = this.tween(r)) && r._value;if (null == n) return this.tween(r, null);if ("function" != typeof n) throw new Error();return this.tween(r, wn(t, n, null == e ? "" : e));
  },
      di = function di(t) {
    return this.tween("text", "function" == typeof t ? xn(Wt(this, "text", t)) : bn(null == t ? "" : t + ""));
  },
      vi = function vi() {
    for (var t = this._name, n = this._id, e = kn(), r = this._groups, i = r.length, o = 0; o < i; ++o) {
      for (var u, a = r[o], s = a.length, l = 0; l < s; ++l) {
        if (u = a[l]) {
          var c = ht(u, n);rr(u, t, e, l, a, { time: c.time + c.delay + c.duration, delay: 0, duration: c.duration, ease: c.ease });
        }
      }
    }return new Mn(r, this._parents, t, e);
  },
      yi = 0,
      gi = G.prototype;Mn.prototype = Nn.prototype = { constructor: Mn, select: si, selectAll: li, filter: ii, merge: oi, selection: hi, transition: vi, call: gi.call, nodes: gi.nodes, node: gi.node, size: gi.size, empty: gi.empty, each: gi.each, on: ui, attr: Zr, attrTween: ti, style: fi, styleTween: pi, text: di, remove: ai, tween: Qr, delay: ni, duration: ei, ease: ri };var _i = (function t(n) {
    function e(t) {
      return Math.pow(t, n);
    }return n = +n, e.exponent = t, e;
  }(3), function t(n) {
    function e(t) {
      return 1 - Math.pow(1 - t, n);
    }return n = +n, e.exponent = t, e;
  }(3), function t(n) {
    function e(t) {
      return ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2;
    }return n = +n, e.exponent = t, e;
  }(3), function t(n) {
    function e(t) {
      return t * t * ((n + 1) * t - n);
    }return n = +n, e.overshoot = t, e;
  }(1.70158), function t(n) {
    function e(t) {
      return --t * t * ((n + 1) * t + n) + 1;
    }return n = +n, e.overshoot = t, e;
  }(1.70158), function t(n) {
    function e(t) {
      return ((t *= 2) < 1 ? t * t * ((n + 1) * t - n) : (t -= 2) * t * ((n + 1) * t + n) + 2) / 2;
    }return n = +n, e.overshoot = t, e;
  }(1.70158), 2 * Math.PI),
      mi = (function t(n, e) {
    function r(t) {
      return n * Math.pow(2, 10 * --t) * Math.sin((i - t) / e);
    }var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= _i);return r.amplitude = function (n) {
      return t(n, e * _i);
    }, r.period = function (e) {
      return t(n, e);
    }, r;
  }(1, .3), function t(n, e) {
    function r(t) {
      return 1 - n * Math.pow(2, -10 * (t = +t)) * Math.sin((t + i) / e);
    }var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= _i);return r.amplitude = function (n) {
      return t(n, e * _i);
    }, r.period = function (e) {
      return t(n, e);
    }, r;
  }(1, .3), function t(n, e) {
    function r(t) {
      return ((t = 2 * t - 1) < 0 ? n * Math.pow(2, 10 * t) * Math.sin((i - t) / e) : 2 - n * Math.pow(2, -10 * t) * Math.sin((i + t) / e)) / 2;
    }var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= _i);return r.amplitude = function (n) {
      return t(n, e * _i);
    }, r.period = function (e) {
      return t(n, e);
    }, r;
  }(1, .3), { time: null, delay: 0, duration: 250, ease: An }),
      wi = function wi(t) {
    var n, e;t instanceof Mn ? (n = t._id, t = t._name) : (n = kn(), (e = mi).time = tt(), t = null == t ? null : t + "");for (var r = this._groups, i = r.length, o = 0; o < i; ++o) {
      for (var u, a = r[o], s = a.length, l = 0; l < s; ++l) {
        (u = a[l]) && rr(u, t, n, l, a, e || En(u, n));
      }
    }return new Mn(r, this._parents, t, n);
  };G.prototype.interrupt = or, G.prototype.transition = wi;var bi = function bi(t) {
    return ("function" == typeof t ? Sn : Pn)(this, t);
  },
      xi = function xi(t, n) {
    return ("function" == typeof t ? qn : Cn)(this, t, null == n ? "" : n);
  },
      Mi = function Mi(t) {
    return ("function" == typeof t ? $n : In)(this, t);
  },
      Ni = function Ni(t) {
    return ("function" == typeof t ? On : Xn)(this, t);
  },
      ki = function ki(t, n) {
    return ("function" == typeof t ? Tn : Vn)(this, t, null == n ? "" : n);
  };G.prototype.attrs = bi, G.prototype.styles = xi, G.prototype.properties = Mi, Nn.prototype.attrs = Ni, Nn.prototype.styles = ki;Ln.prototype = Rn.prototype = { constructor: Ln, has: function has(t) {
      return "$" + t in this;
    }, get: function get(t) {
      return this["$" + t];
    }, set: function set(t, n) {
      return this["$" + t] = n, this;
    }, remove: function remove(t) {
      var n = "$" + t;return n in this && delete this[n];
    }, clear: function clear() {
      for (var t in this) {
        "$" === t[0] && delete this[t];
      }
    }, keys: function keys() {
      var t = [];for (var n in this) {
        "$" === n[0] && t.push(n.slice(1));
      }return t;
    }, values: function values() {
      var t = [];for (var n in this) {
        "$" === n[0] && t.push(this[n]);
      }return t;
    }, entries: function entries() {
      var t = [];for (var n in this) {
        "$" === n[0] && t.push({ key: n.slice(1), value: this[n] });
      }return t;
    }, size: function size() {
      var t = 0;for (var n in this) {
        "$" === n[0] && ++t;
      }return t;
    }, empty: function empty() {
      for (var t in this) {
        if ("$" === t[0]) return !1;
      }return !0;
    }, each: function each(t) {
      for (var n in this) {
        "$" === n[0] && t(this[n], n.slice(1), this);
      }
    } };var Ai = Rn.prototype;zn.prototype = jn.prototype = { constructor: zn, has: Ai.has, add: function add(t) {
      return t += "", this["$" + t] = t, this;
    }, remove: Ai.remove, clear: Ai.clear, values: Ai.keys, size: Ai.size, empty: Ai.empty, each: Ai.each };var Ei = function Ei(t) {
    var n = [];for (var e in t) {
      n.push({ key: e, value: t[e] });
    }return n;
  };t.selection = G, t.select = Ie, t.selectAll = Oe, t.entries = Ei, t.transition = Nn, Object.defineProperty(t, "__esModule", { value: !0 });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(5);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(7)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./layout.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./layout.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _d = __webpack_require__(0);

var d3 = _interopRequireWildcard(_d);

__webpack_require__(1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

window.d3 = d3; // strap d3 to the window for debugging console access

function setup() {
  var demo = d3.select('#demo');
  var svg = d3.select(demo.node().contentDocument).select('svg');
  var nativeBounds = svg.node().getBoundingClientRect();
  demo.attrs({
    width: nativeBounds.width,
    height: nativeBounds.height
  });
  demo.node().focus();
}
window.onload = window.onresize = setup;

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "/*\nCurrent color scheme\n\nUsing ColorBrewer schemes:\nhttp://colorbrewer2.org/#type=qualitative&scheme=Dark2&n=8\nhttp://colorbrewer2.org/#type=qualitative&scheme=Pastel2&n=8\n*/\n/*\nColor meanings:\n*/\n/*\nFunction to get the ID of an SVG color-changing filter\n*/\nhtml {\n  margin: 0;\n  padding: 0; }\n\nbody {\n  margin: 10em;\n  padding: 0;\n  background-color: #737373; }\n\niframe {\n  display: block;\n  margin: auto;\n  background-color: #F7F7F7;\n  border: 1px solid black; }\n\n.toolbar {\n  position: fixed;\n  background-color: rgba(217, 217, 217, 0.95);\n  border: 1px solid black;\n  box-shadow: 1em 1em 5em black;\n  display: flex; }\n  .toolbar a {\n    margin: 1em;\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    align-items: center; }\n    .toolbar a img {\n      width: 2em;\n      height: 2em; }\n\n#files {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 40em;\n  height: 5em;\n  border-bottom-right-radius: 5em; }\n\n#applications {\n  position: fixed;\n  bottom: 0px;\n  right: 0px;\n  left: 0px;\n  height: 5em; }\n\n#viewControls {\n  position: fixed;\n  top: 0px;\n  right: 0px;\n  width: 15em;\n  height: 5em;\n  border-bottom-left-radius: 5em;\n  flex-direction: row-reverse; }\n", ""]);

// exports


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ })
/******/ ]);
//# sourceMappingURL=webpack-bundle.js.map