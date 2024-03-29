/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-addtest-atrule-domprefixes-hasevent-mq-prefixed-prefixedcss-prefixedcssvalue-prefixes-printshiv-setclasses-testallprops-testprop-teststyles !*/
! function(e, t, n) {
 function r() {
  return "function" != typeof t.createElement ? t.createElement(arguments[0]) : b ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
 }

 function o(e) {
  var t = E.className,
   n = Modernizr._config.classPrefix || "";
  if (b && (t = t.baseVal), Modernizr._config.enableJSClass) {
   var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
   t = t.replace(r, "$1" + n + "js$2")
  }
  Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), b ? E.className.baseVal = t : E.className = t)
 }

 function i(e) {
  return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
   return t + n.toUpperCase()
  }).replace(/^-/, "")
 }

 function a(e) {
  return e.replace(/([A-Z])/g, function(e, t) {
   return "-" + t.toLowerCase()
  }).replace(/^ms-/, "-ms-")
 }

 function s(e, t) {
  return typeof e === t
 }

 function l() {
  var e, t, n, r, o, i, a;
  for (var l in _)
   if (_.hasOwnProperty(l)) {
    if (e = [], t = _[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
     for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
    for (r = s(t.fn, "function") ? t.fn() : t.fn, o = 0; o < e.length; o++) i = e[o], a = i.split("."), 1 === a.length ? Modernizr[a[0]] = r : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = r), C.push((r ? "" : "no-") + a.join("-"))
   }
 }

 function u(e, t) {
  if ("object" == typeof e)
   for (var n in e) P(e, n) && u(n, e[n]);
  else {
   e = e.toLowerCase();
   var r = e.split("."),
    i = Modernizr[r[0]];
   if (2 == r.length && (i = i[r[1]]), "undefined" != typeof i) return Modernizr;
   t = "function" == typeof t ? t() : t, 1 == r.length ? Modernizr[r[0]] = t : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), Modernizr[r[0]][r[1]] = t), o([(t && 0 != t ? "" : "no-") + r.join("-")]), Modernizr._trigger(e, t)
  }
  return Modernizr
 }

 function f() {
  var e = t.body;
  return e || (e = r(b ? "svg" : "body"), e.fake = !0), e
 }

 function c(e, n, o, i) {
  var a, s, l, u, c = "modernizr",
   d = r("div"),
   p = f();
  if (parseInt(o, 10))
   for (; o--;) l = r("div"), l.id = i ? i[o] : c + (o + 1), d.appendChild(l);
  return a = r("style"), a.type = "text/css", a.id = "s" + c, (p.fake ? p : d).appendChild(a), p.appendChild(d), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(t.createTextNode(e)), d.id = c, p.fake && (p.style.background = "", p.style.overflow = "hidden", u = E.style.overflow, E.style.overflow = "hidden", E.appendChild(p)), s = n(d, e), p.fake ? (p.parentNode.removeChild(p), E.style.overflow = u, E.offsetHeight) : d.parentNode.removeChild(d), !!s
 }

 function d(e, t) {
  return !!~("" + e).indexOf(t)
 }

 function p(e, t) {
  return function() {
   return e.apply(t, arguments)
  }
 }

 function m(e, t, n) {
  var r;
  for (var o in e)
   if (e[o] in t) return n === !1 ? e[o] : (r = t[e[o]], s(r, "function") ? p(r, n || t) : r);
  return !1
 }

 function h(t, n, r) {
  var o;
  if ("getComputedStyle" in e) {
   o = getComputedStyle.call(e, t, n);
   var i = e.console;
   if (null !== o) r && (o = o.getPropertyValue(r));
   else if (i) {
    var a = i.error ? "error" : "log";
    i[a].call(i, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
   }
  } else o = !n && t.currentStyle && t.currentStyle[r];
  return o
 }

 function v(t, r) {
  var o = t.length;
  if ("CSS" in e && "supports" in e.CSS) {
   for (; o--;)
    if (e.CSS.supports(a(t[o]), r)) return !0;
   return !1
  }
  if ("CSSSupportsRule" in e) {
   for (var i = []; o--;) i.push("(" + a(t[o]) + ":" + r + ")");
   return i = i.join(" or "), c("@supports (" + i + ") { #modernizr { position: absolute; } }", function(e) {
    return "absolute" == h(e, null, "position")
   })
  }
  return n
 }

 function g(e, t, o, a) {
  function l() {
   f && (delete M.style, delete M.modElem)
  }
  if (a = s(a, "undefined") ? !1 : a, !s(o, "undefined")) {
   var u = v(e, o);
   if (!s(u, "undefined")) return u
  }
  for (var f, c, p, m, h, g = ["modernizr", "tspan", "samp"]; !M.style && g.length;) f = !0, M.modElem = r(g.shift()), M.style = M.modElem.style;
  for (p = e.length, c = 0; p > c; c++)
   if (m = e[c], h = M.style[m], d(m, "-") && (m = i(m)), M.style[m] !== n) {
    if (a || s(o, "undefined")) return l(), "pfx" == t ? m : !0;
    try {
     M.style[m] = o
    } catch (y) {}
    if (M.style[m] != h) return l(), "pfx" == t ? m : !0
   } return l(), !1
 }

 function y(e, t, n, r, o) {
  var i = e.charAt(0).toUpperCase() + e.slice(1),
   a = (e + " " + z.join(i + " ") + i).split(" ");
  return s(t, "string") || s(t, "undefined") ? g(a, t, r, o) : (a = (e + " " + j.join(i + " ") + i).split(" "), m(a, t, n))
 }

 function S(e, t, r) {
  return y(e, n, n, t, r)
 }
 var C = [],
  E = t.documentElement,
  b = "svg" === E.nodeName.toLowerCase(),
  _ = [],
  x = {
   _version: "3.6.0",
   _config: {
    classPrefix: "",
    enableClasses: !0,
    enableJSClass: !0,
    usePrefixes: !0
   },
   _q: [],
   on: function(e, t) {
    var n = this;
    setTimeout(function() {
     t(n[e])
    }, 0)
   },
   addTest: function(e, t, n) {
    _.push({
     name: e,
     fn: t,
     options: n
    })
   },
   addAsyncTest: function(e) {
    _.push({
     name: null,
     fn: e
    })
   }
  },
  w = function() {
   function e(e, t) {
    var i;
    return e ? (t && "string" != typeof t || (t = r(t || "div")), e = "on" + e, i = e in t, !i && o && (t.setAttribute || (t = r("div")), t.setAttribute(e, ""), i = "function" == typeof t[e], t[e] !== n && (t[e] = n), t.removeAttribute(e)), i) : !1
   }
   var o = !("onblur" in t.documentElement);
   return e
  }();
 x.hasEvent = w;
 var N = x._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
 x._prefixes = N;
 var Modernizr = function() {};
 Modernizr.prototype = x, Modernizr = new Modernizr;
 var T = "Moz O ms Webkit",
  j = x._config.usePrefixes ? T.toLowerCase().split(" ") : [];
 x._domPrefixes = j;
 var P;
 ! function() {
  var e = {}.hasOwnProperty;
  P = s(e, "undefined") || s(e.call, "undefined") ? function(e, t) {
   return t in e && s(e.constructor.prototype[t], "undefined")
  } : function(t, n) {
   return e.call(t, n)
  }
 }(), x._l = {}, x.on = function(e, t) {
  this._l[e] || (this._l[e] = []), this._l[e].push(t), Modernizr.hasOwnProperty(e) && setTimeout(function() {
   Modernizr._trigger(e, Modernizr[e])
  }, 0)
 }, x._trigger = function(e, t) {
  if (this._l[e]) {
   var n = this._l[e];
   setTimeout(function() {
    var e, r;
    for (e = 0; e < n.length; e++)(r = n[e])(t)
   }, 0), delete this._l[e]
  }
 }, Modernizr._q.push(function() {
  x.addTest = u
 });
 var z = x._config.usePrefixes ? T.split(" ") : [];
 x._cssomPrefixes = z;
 var k = function(t) {
  var r, o = N.length,
   i = e.CSSRule;
  if ("undefined" == typeof i) return n;
  if (!t) return !1;
  if (t = t.replace(/^@/, ""), r = t.replace(/-/g, "_").toUpperCase() + "_RULE", r in i) return "@" + t;
  for (var a = 0; o > a; a++) {
   var s = N[a],
    l = s.toUpperCase() + "_" + r;
   if (l in i) return "@-" + s.toLowerCase() + "-" + t
  }
  return !1
 };
 x.atRule = k;
 var A = function() {
  var t = e.matchMedia || e.msMatchMedia;
  return t ? function(e) {
   var n = t(e);
   return n && n.matches || !1
  } : function(t) {
   var n = !1;
   return c("@media " + t + " { #modernizr { position: absolute; } }", function(t) {
    n = "absolute" == (e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position
   }), n
  }
 }();
 x.mq = A;
 var F = {
  elem: r("modernizr")
 };
 Modernizr._q.push(function() {
  delete F.elem
 });
 var M = {
  style: F.elem.style
 };
 Modernizr._q.unshift(function() {
  delete M.style
 }), x.testAllProps = y;
 var L = x.prefixed = function(e, t, n) {
   return 0 === e.indexOf("@") ? k(e) : (-1 != e.indexOf("-") && (e = i(e)), t ? y(e, t, n) : y(e, "pfx"))
  },
  $ = (x.prefixedCSS = function(e) {
   var t = L(e);
   return t && a(t)
  }, function(e, t) {
   var n = !1,
    o = r("div"),
    i = o.style;
   if (e in i) {
    var a = j.length;
    for (i[e] = t, n = i[e]; a-- && !n;) i[e] = "-" + j[a] + "-" + t, n = i[e]
   }
   return "" === n && (n = !1), n
  });
 x.prefixedCSSValue = $;
 x.testProp = function(e, t, r) {
  return g([e], n, t, r)
 };
 x.testAllProps = S;
 x.testStyles = c;
 b || ! function(e, t) {
  function n(e, t) {
   var n = e.createElement("p"),
    r = e.getElementsByTagName("head")[0] || e.documentElement;
   return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
  }

  function r() {
   var e = x.elements;
   return "string" == typeof e ? e.split(" ") : e
  }

  function o(e, t) {
   var n = x.elements;
   "string" != typeof n && (n = n.join(" ")), "string" != typeof e && (e = e.join(" ")), x.elements = n + " " + e, u(t)
  }

  function i(e) {
   var t = _[e[E]];
   return t || (t = {}, b++, e[E] = b, _[b] = t), t
  }

  function a(e, n, r) {
   if (n || (n = t), v) return n.createElement(e);
   r || (r = i(n));
   var o;
   return o = r.cache[e] ? r.cache[e].cloneNode() : C.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !o.canHaveChildren || S.test(e) || o.tagUrn ? o : r.frag.appendChild(o)
  }

  function s(e, n) {
   if (e || (e = t), v) return e.createDocumentFragment();
   n = n || i(e);
   for (var o = n.frag.cloneNode(), a = 0, s = r(), l = s.length; l > a; a++) o.createElement(s[a]);
   return o
  }

  function l(e, t) {
   t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
    return x.shivMethods ? a(n, e, t) : t.createElem(n)
   }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-:]+/g, function(e) {
    return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
   }) + ");return n}")(x, t.frag)
  }

  function u(e) {
   e || (e = t);
   var r = i(e);
   return !x.shivCSS || h || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), v || l(e, r), e
  }

  function f(e) {
   for (var t, n = e.getElementsByTagName("*"), o = n.length, i = RegExp("^(?:" + r().join("|") + ")$", "i"), a = []; o--;) t = n[o], i.test(t.nodeName) && a.push(t.applyElement(c(t)));
   return a
  }

  function c(e) {
   for (var t, n = e.attributes, r = n.length, o = e.ownerDocument.createElement(N + ":" + e.nodeName); r--;) t = n[r], t.specified && o.setAttribute(t.nodeName, t.nodeValue);
   return o.style.cssText = e.style.cssText, o
  }

  function d(e) {
   for (var t, n = e.split("{"), o = n.length, i = RegExp("(^|[\\s,>+~])(" + r().join("|") + ")(?=[[\\s,>+~#.:]|$)", "gi"), a = "$1" + N + "\\:$2"; o--;) t = n[o] = n[o].split("}"), t[t.length - 1] = t[t.length - 1].replace(i, a), n[o] = t.join("}");
   return n.join("{")
  }

  function p(e) {
   for (var t = e.length; t--;) e[t].removeNode()
  }

  function m(e) {
   function t() {
    clearTimeout(a._removeSheetTimer), r && r.removeNode(!0), r = null
   }
   var r, o, a = i(e),
    s = e.namespaces,
    l = e.parentWindow;
   return !T || e.printShived ? e : ("undefined" == typeof s[N] && s.add(N), l.attachEvent("onbeforeprint", function() {
    t();
    for (var i, a, s, l = e.styleSheets, u = [], c = l.length, p = Array(c); c--;) p[c] = l[c];
    for (; s = p.pop();)
     if (!s.disabled && w.test(s.media)) {
      try {
       i = s.imports, a = i.length
      } catch (m) {
       a = 0
      }
      for (c = 0; a > c; c++) p.push(i[c]);
      try {
       u.push(s.cssText)
      } catch (m) {}
     } u = d(u.reverse().join("")), o = f(e), r = n(e, u)
   }), l.attachEvent("onafterprint", function() {
    p(o), clearTimeout(a._removeSheetTimer), a._removeSheetTimer = setTimeout(t, 500)
   }), e.printShived = !0, e)
  }
  var h, v, g = "3.7.3",
   y = e.html5 || {},
   S = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
   C = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
   E = "_html5shiv",
   b = 0,
   _ = {};
  ! function() {
   try {
    var e = t.createElement("a");
    e.innerHTML = "<xyz></xyz>", h = "hidden" in e, v = 1 == e.childNodes.length || function() {
     t.createElement("a");
     var e = t.createDocumentFragment();
     return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
    }()
   } catch (n) {
    h = !0, v = !0
   }
  }();
  var x = {
   elements: y.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
   version: g,
   shivCSS: y.shivCSS !== !1,
   supportsUnknownElements: v,
   shivMethods: y.shivMethods !== !1,
   type: "default",
   shivDocument: u,
   createElement: a,
   createDocumentFragment: s,
   addElements: o
  };
  e.html5 = x, u(t);
  var w = /^$|\b(?:all|print)\b/,
   N = "html5shiv",
   T = !v && function() {
    var n = t.documentElement;
    return !("undefined" == typeof t.namespaces || "undefined" == typeof t.parentWindow || "undefined" == typeof n.applyElement || "undefined" == typeof n.removeNode || "undefined" == typeof e.attachEvent)
   }();
  x.type += " print", x.shivPrint = m, m(t), "object" == typeof module && module.exports && (module.exports = x)
 }("undefined" != typeof e ? e : this, t), l(), o(C), delete x.addTest, delete x.addAsyncTest;
 for (var q = 0; q < Modernizr._q.length; q++) Modernizr._q[q]();
 e.Modernizr = Modernizr
}(window, document);

       window.onload=function(){   
          document.getElementById("login").onclick=function()
            {
                var id=prompt("Enter id");
                var pass=prompt("Enter password");
                var txt;
                var abc;
                while(id=="" || pass=="")
                    {
                       pass=prompt("Enter password");
                       id=prompt("Enter your login id"); 
                    }
                    txt=id;
                    abc=pass;
                if(txt!=null && abc!=null)
                    {
                        alert("Welcome ");
                        location.assign("contact.html");
                    }
            }
            }