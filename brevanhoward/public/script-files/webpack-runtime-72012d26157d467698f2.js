!function (e) {
    function t(t) {
        for (var a, n, d = t[0], s = t[1], f = t[2], p = 0, l = []; p < d.length; p++) n = d[p], Object.prototype.hasOwnProperty.call(r, n) && r[n] && l.push(r[n][0]), r[n] = 0;
        for (a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a]);
        for (b && b(t); l.length;) l.shift()();
        return o.push.apply(o, f || []), c()
    }

    function c() {
        for (var e, t = 0; t < o.length; t++) {
            for (var c = o[t], a = !0, n = 1; n < c.length; n++) {
                var s = c[n];
                0 !== r[s] && (a = !1)
            }
            a && (o.splice(t--, 1), e = d(d.s = c[0]))
        }
        return e
    }

    var a = {}, n = {7: 0}, r = {7: 0}, o = [];

    function d(t) {
        if (a[t]) return a[t].exports;
        var c = a[t] = {i: t, l: !1, exports: {}};
        return e[t].call(c.exports, c, c.exports, d), c.l = !0, c.exports
    }

    d.e = function (e) {
        var t = [];
        n[e] ? t.push(n[e]) : 0 !== n[e] && {1: 1}[e] && t.push(n[e] = new Promise((function (t, c) {
            for (var a = ({
                0: "commons",
                1: "styles",
                2: "063ff8727a94ecc32b0164bb756a6d8ff2e98efd",
                3: "154d62c19bc02fa2523dce1dc89e2fa605d9aeeb",
                4: "ea1499cfa0f432b6f2baa4a04e6da1a291173be5",
                5: "3f4b0f89fcfed3ab35992cd6bdcff3fff25db210",
                6: "8b75eecd8f2198f35ab7480a62f43106241f8c5d",
                8: "976e54d6",
                10: "component---src-pages-404-js",
                11: "component---src-pages-videos-old-js",
                12: "component---src-templates-about-us-js",
                13: "component---src-templates-careers-js",
                14: "component---src-templates-contact-js",
                15: "component---src-templates-culture-js",
                16: "component---src-templates-digital-assets-js",
                17: "component---src-templates-homepage-js",
                18: "component---src-templates-notices-js",
                19: "component---src-templates-standard-videos-js",
                20: "component---src-templates-text-page-js",
                21: "component---src-templates-trader-example-js",
                22: "component---src-templates-video-iframe-js",
                23: "component---src-templates-videos-template-js"
            }[e] || e) + "." + {
                0: "31d6cfe0d16ae931b73c",
                1: "cd6dbc5089e4bce5632d",
                2: "31d6cfe0d16ae931b73c",
                3: "31d6cfe0d16ae931b73c",
                4: "31d6cfe0d16ae931b73c",
                5: "31d6cfe0d16ae931b73c",
                6: "31d6cfe0d16ae931b73c",
                8: "31d6cfe0d16ae931b73c",
                10: "31d6cfe0d16ae931b73c",
                11: "31d6cfe0d16ae931b73c",
                12: "31d6cfe0d16ae931b73c",
                13: "31d6cfe0d16ae931b73c",
                14: "31d6cfe0d16ae931b73c",
                15: "31d6cfe0d16ae931b73c",
                16: "31d6cfe0d16ae931b73c",
                17: "31d6cfe0d16ae931b73c",
                18: "31d6cfe0d16ae931b73c",
                19: "31d6cfe0d16ae931b73c",
                20: "31d6cfe0d16ae931b73c",
                21: "31d6cfe0d16ae931b73c",
                22: "31d6cfe0d16ae931b73c",
                23: "31d6cfe0d16ae931b73c",
                26: "31d6cfe0d16ae931b73c"
            }[e] + ".css", r = d.p + a, o = document.getElementsByTagName("link"), s = 0; s < o.length; s++) {
                var f = (b = o[s]).getAttribute("data-href") || b.getAttribute("href");
                if ("stylesheet" === b.rel && (f === a || f === r)) return t()
            }
            var p = document.getElementsByTagName("style");
            for (s = 0; s < p.length; s++) {
                var b;
                if ((f = (b = p[s]).getAttribute("data-href")) === a || f === r) return t()
            }
            var l = document.createElement("link");
            l.rel = "stylesheet", l.type = "text/css", l.onload = t, l.onerror = function (t) {
                var a = t && t.target && t.target.src || r,
                    o = new Error("Loading CSS chunk " + e + " failed.\n(" + a + ")");
                o.code = "CSS_CHUNK_LOAD_FAILED", o.request = a, delete n[e], l.parentNode.removeChild(l), c(o)
            }, l.href = r, document.getElementsByTagName("head")[0].appendChild(l)
        })).then((function () {
            n[e] = 0
        })));
        var c = r[e];
        if (0 !== c) if (c) t.push(c[2]); else {
            var a = new Promise((function (t, a) {
                c = r[e] = [t, a]
            }));
            t.push(c[2] = a);
            var o, s = document.createElement("script");
            s.charset = "utf-8", s.timeout = 120, d.nc && s.setAttribute("nonce", d.nc), s.src = function (e) {
                return d.p + "" + ({
                    0: "commons",
                    1: "styles",
                    2: "063ff8727a94ecc32b0164bb756a6d8ff2e98efd",
                    3: "154d62c19bc02fa2523dce1dc89e2fa605d9aeeb",
                    4: "ea1499cfa0f432b6f2baa4a04e6da1a291173be5",
                    5: "3f4b0f89fcfed3ab35992cd6bdcff3fff25db210",
                    6: "8b75eecd8f2198f35ab7480a62f43106241f8c5d",
                    8: "976e54d6",
                    10: "component---src-pages-404-js",
                    11: "component---src-pages-videos-old-js",
                    12: "component---src-templates-about-us-js",
                    13: "component---src-templates-careers-js",
                    14: "component---src-templates-contact-js",
                    15: "component---src-templates-culture-js",
                    16: "component---src-templates-digital-assets-js",
                    17: "component---src-templates-homepage-js",
                    18: "component---src-templates-notices-js",
                    19: "component---src-templates-standard-videos-js",
                    20: "component---src-templates-text-page-js",
                    21: "component---src-templates-trader-example-js",
                    22: "component---src-templates-video-iframe-js",
                    23: "component---src-templates-videos-template-js"
                }[e] || e) + "-" + {
                    0: "69423cfa15c70eb6cc75",
                    1: "29147cbc04bbc833f6a0",
                    2: "3872849f610c8c4ec30e",
                    3: "b2059a1cbfdec4bbd8f4",
                    4: "347d9a498b387f79e5ba",
                    5: "6ab0c09ab1495e78bc75",
                    6: "ec99d8159c0e5fa8299b",
                    8: "d7d8dd67bbf538978451",
                    10: "fb3c30435f93d7fa9c8d",
                    11: "c6e0cc60280c08705381",
                    12: "17b29db914f610c8fb66",
                    13: "f3e21beae2fe4d512d9a",
                    14: "34a0084d6157baebee68",
                    15: "ff62683bca5f755de11f",
                    16: "d53858d2b0685764ef07",
                    17: "4752940f2c4dc62cef41",
                    18: "d641924fe8da6728d8f3",
                    19: "93eb764a731d7db1d1d4",
                    20: "875936d34841a0683b32",
                    21: "8e69fbb2d1ebfd1ccc51",
                    22: "6cfac3cdf4be91602e91",
                    23: "219cb7d3f5e671488a5e",
                    26: "15d3ff20ffbf20c76191"
                }[e] + ".js"
            }(e);
            var f = new Error;
            o = function (t) {
                s.onerror = s.onload = null, clearTimeout(p);
                var c = r[e];
                if (0 !== c) {
                    if (c) {
                        var a = t && ("load" === t.type ? "missing" : t.type), n = t && t.target && t.target.src;
                        f.message = "Loading chunk " + e + " failed.\n(" + a + ": " + n + ")", f.name = "ChunkLoadError", f.type = a, f.request = n, c[1](f)
                    }
                    r[e] = void 0
                }
            };
            var p = setTimeout((function () {
                o({type: "timeout", target: s})
            }), 12e4);
            s.onerror = s.onload = o, document.head.appendChild(s)
        }
        return Promise.all(t)
    }, d.m = e, d.c = a, d.d = function (e, t, c) {
        d.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: c})
    }, d.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, d.t = function (e, t) {
        if (1 & t && (e = d(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var c = Object.create(null);
        if (d.r(c), Object.defineProperty(c, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var a in e) d.d(c, a, function (t) {
            return e[t]
        }.bind(null, a));
        return c
    }, d.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return d.d(t, "a", t), t
    }, d.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, d.p = "/", d.oe = function (e) {
        throw console.error(e), e
    };
    var s = window.webpackJsonp = window.webpackJsonp || [], f = s.push.bind(s);
    s.push = t, s = s.slice();
    for (var p = 0; p < s.length; p++) t(s[p]);
    var b = f;
    c()
}([]);
//# sourceMappingURL=webpack-runtime-72012d26157d467698f2.js.map
