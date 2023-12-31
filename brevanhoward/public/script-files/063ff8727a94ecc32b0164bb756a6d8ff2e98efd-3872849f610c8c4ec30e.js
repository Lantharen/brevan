/*! For license information please see 063ff8727a94ecc32b0164bb756a6d8ff2e98efd-3872849f610c8c4ec30e.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([[2], {
    "9eSz": function (e, t, r) {
        "use strict";
        var i = r("TqRt");
        t.__esModule = !0, t.default = void 0;
        var a, n = i(r("PJYZ")), s = i(r("VbXa")), o = i(r("8OQS")), l = i(r("pVnL")), d = i(r("q1tI")),
            c = i(r("17x9")), u = function (e) {
                var t = (0, l.default)({}, e), r = t.resolutions, i = t.sizes, a = t.critical;
                return r && (t.fixed = r, delete t.resolutions), i && (t.fluid = i, delete t.sizes), a && (t.loading = "eager"), t.fluid && (t.fluid = E([].concat(t.fluid))), t.fixed && (t.fixed = E([].concat(t.fixed))), t
            }, f = function (e) {
                var t = e.media;
                return !!t && (y && !!window.matchMedia(t).matches)
            }, g = function (e) {
                var t = e.fluid, r = e.fixed, i = p(t || r || []);
                return i && i.src
            }, p = function (e) {
                if (y && function (e) {
                    return !!e && Array.isArray(e) && e.some((function (e) {
                        return void 0 !== e.media
                    }))
                }(e)) {
                    var t = e.findIndex(f);
                    if (-1 !== t) return e[t];
                    var r = e.findIndex((function (e) {
                        return void 0 === e.media
                    }));
                    if (-1 !== r) return e[r]
                }
                return e[0]
            }, m = Object.create({}), h = function (e) {
                var t = u(e), r = g(t);
                return m[r] || !1
            }, b = "undefined" != typeof HTMLImageElement && "loading" in HTMLImageElement.prototype,
            y = "undefined" != typeof window, v = y && window.IntersectionObserver, S = new WeakMap;

        function w(e) {
            return e.map((function (e) {
                var t = e.src, r = e.srcSet, i = e.srcSetWebp, a = e.media, n = e.sizes;
                return d.default.createElement(d.default.Fragment, {key: t}, i && d.default.createElement("source", {
                    type: "image/webp",
                    media: a,
                    srcSet: i,
                    sizes: n
                }), r && d.default.createElement("source", {media: a, srcSet: r, sizes: n}))
            }))
        }

        function E(e) {
            var t = [], r = [];
            return e.forEach((function (e) {
                return (e.media ? t : r).push(e)
            })), [].concat(t, r)
        }

        function R(e) {
            return e.map((function (e) {
                var t = e.src, r = e.media, i = e.tracedSVG;
                return d.default.createElement("source", {key: t, media: r, srcSet: i})
            }))
        }

        function j(e) {
            return e.map((function (e) {
                var t = e.src, r = e.media, i = e.base64;
                return d.default.createElement("source", {key: t, media: r, srcSet: i})
            }))
        }

        function I(e, t) {
            var r = e.srcSet, i = e.srcSetWebp, a = e.media, n = e.sizes;
            return "<source " + (t ? "type='image/webp' " : "") + (a ? 'media="' + a + '" ' : "") + 'srcset="' + (t ? i : r) + '" ' + (n ? 'sizes="' + n + '" ' : "") + "/>"
        }

        var L = function (e, t) {
            var r = (void 0 === a && "undefined" != typeof window && window.IntersectionObserver && (a = new window.IntersectionObserver((function (e) {
                e.forEach((function (e) {
                    if (S.has(e.target)) {
                        var t = S.get(e.target);
                        (e.isIntersecting || e.intersectionRatio > 0) && (a.unobserve(e.target), S.delete(e.target), t())
                    }
                }))
            }), {rootMargin: "200px"})), a);
            return r && (r.observe(e), S.set(e, t)), function () {
                r.unobserve(e), S.delete(e)
            }
        }, O = function (e) {
            var t = e.src ? 'src="' + e.src + '" ' : 'src="" ', r = e.sizes ? 'sizes="' + e.sizes + '" ' : "",
                i = e.srcSet ? 'srcset="' + e.srcSet + '" ' : "", a = e.title ? 'title="' + e.title + '" ' : "",
                n = e.alt ? 'alt="' + e.alt + '" ' : 'alt="" ', s = e.width ? 'width="' + e.width + '" ' : "",
                o = e.height ? 'height="' + e.height + '" ' : "",
                l = e.crossOrigin ? 'crossorigin="' + e.crossOrigin + '" ' : "",
                d = e.loading ? 'loading="' + e.loading + '" ' : "",
                c = e.draggable ? 'draggable="' + e.draggable + '" ' : "";
            return "<picture>" + e.imageVariants.map((function (e) {
                return (e.srcSetWebp ? I(e, !0) : "") + I(e)
            })).join("") + "<img " + d + s + o + r + i + t + n + a + l + c + 'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'
        }, k = d.default.forwardRef((function (e, t) {
            var r = e.src, i = e.imageVariants, a = e.generateSources, n = e.spreadProps, s = e.ariaHidden,
                o = d.default.createElement(T, (0, l.default)({ref: t, src: r}, n, {ariaHidden: s}));
            return i.length > 1 ? d.default.createElement("picture", null, a(i), o) : o
        })), T = d.default.forwardRef((function (e, t) {
            var r = e.sizes, i = e.srcSet, a = e.src, n = e.style, s = e.onLoad, c = e.onError, u = e.loading,
                f = e.draggable, g = e.ariaHidden,
                p = (0, o.default)(e, ["sizes", "srcSet", "src", "style", "onLoad", "onError", "loading", "draggable", "ariaHidden"]);
            return d.default.createElement("img", (0, l.default)({
                "aria-hidden": g,
                sizes: r,
                srcSet: i,
                src: a
            }, p, {
                onLoad: s,
                onError: c,
                ref: t,
                loading: u,
                draggable: f,
                style: (0, l.default)({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center"
                }, n)
            }))
        }));
        T.propTypes = {style: c.default.object, onError: c.default.func, onLoad: c.default.func};
        var x = function (e) {
            function t(t) {
                var r;
                (r = e.call(this, t) || this).seenBefore = y && h(t), r.isCritical = "eager" === t.loading || t.critical, r.addNoScript = !(r.isCritical && !t.fadeIn), r.useIOSupport = !b && v && !r.isCritical && !r.seenBefore;
                var i = r.isCritical || y && (b || !r.useIOSupport);
                return r.state = {
                    isVisible: i,
                    imgLoaded: !1,
                    imgCached: !1,
                    fadeIn: !r.seenBefore && t.fadeIn,
                    isHydrated: !1
                }, r.imageRef = d.default.createRef(), r.placeholderRef = t.placeholderRef || d.default.createRef(), r.handleImageLoaded = r.handleImageLoaded.bind((0, n.default)(r)), r.handleRef = r.handleRef.bind((0, n.default)(r)), r
            }

            (0, s.default)(t, e);
            var r = t.prototype;
            return r.componentDidMount = function () {
                if (this.setState({isHydrated: y}), this.state.isVisible && "function" == typeof this.props.onStartLoad && this.props.onStartLoad({wasCached: h(this.props)}), this.isCritical) {
                    var e = this.imageRef.current;
                    e && e.complete && this.handleImageLoaded()
                }
            }, r.componentWillUnmount = function () {
                this.cleanUpListeners && this.cleanUpListeners()
            }, r.handleRef = function (e) {
                var t = this;
                this.useIOSupport && e && (this.cleanUpListeners = L(e, (function () {
                    var e = h(t.props);
                    t.state.isVisible || "function" != typeof t.props.onStartLoad || t.props.onStartLoad({wasCached: e}), t.setState({isVisible: !0}, (function () {
                        t.setState({imgLoaded: e, imgCached: !(!t.imageRef.current || !t.imageRef.current.currentSrc)})
                    }))
                })))
            }, r.handleImageLoaded = function () {
                var e, t, r;
                e = this.props, t = u(e), (r = g(t)) && (m[r] = !0), this.setState({imgLoaded: !0}), this.props.onLoad && this.props.onLoad()
            }, r.render = function () {
                var e = u(this.props), t = e.title, r = e.alt, i = e.className, a = e.style, n = void 0 === a ? {} : a,
                    s = e.imgStyle, o = void 0 === s ? {} : s, c = e.placeholderStyle, f = void 0 === c ? {} : c,
                    g = e.placeholderClassName, m = e.fluid, h = e.fixed, b = e.backgroundColor, y = e.durationFadeIn,
                    v = e.Tag, S = e.itemProp, E = e.loading, I = e.draggable, L = m || h;
                if (!L) return null;
                var x = !1 === this.state.fadeIn || this.state.imgLoaded,
                    P = !0 === this.state.fadeIn && !this.state.imgCached,
                    z = (0, l.default)({opacity: x ? 1 : 0, transition: P ? "opacity " + y + "ms" : "none"}, o),
                    H = "boolean" == typeof b ? "lightgray" : b, V = {transitionDelay: y + "ms"},
                    C = (0, l.default)({opacity: this.state.imgLoaded ? 0 : 1}, P && V, o, f),
                    N = {title: t, alt: this.state.isVisible ? "" : r, style: C, className: g, itemProp: S},
                    W = this.state.isHydrated ? p(L) : L[0];
                if (m) return d.default.createElement(v, {
                    className: (i || "") + " gatsby-image-wrapper",
                    style: (0, l.default)({
                        position: "relative",
                        overflow: "hidden",
                        maxWidth: W.maxWidth ? W.maxWidth + "px" : null,
                        maxHeight: W.maxHeight ? W.maxHeight + "px" : null
                    }, n),
                    ref: this.handleRef,
                    key: "fluid-" + JSON.stringify(W.srcSet)
                }, d.default.createElement(v, {
                    "aria-hidden": !0,
                    style: {width: "100%", paddingBottom: 100 / W.aspectRatio + "%"}
                }), H && d.default.createElement(v, {
                    "aria-hidden": !0,
                    title: t,
                    style: (0, l.default)({
                        backgroundColor: H,
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        opacity: this.state.imgLoaded ? 0 : 1,
                        right: 0,
                        left: 0
                    }, P && V)
                }), W.base64 && d.default.createElement(k, {
                    ariaHidden: !0,
                    ref: this.placeholderRef,
                    src: W.base64,
                    spreadProps: N,
                    imageVariants: L,
                    generateSources: j
                }), W.tracedSVG && d.default.createElement(k, {
                    ariaHidden: !0,
                    ref: this.placeholderRef,
                    src: W.tracedSVG,
                    spreadProps: N,
                    imageVariants: L,
                    generateSources: R
                }), this.state.isVisible && d.default.createElement("picture", null, w(L), d.default.createElement(T, {
                    alt: r,
                    title: t,
                    sizes: W.sizes,
                    src: W.src,
                    crossOrigin: this.props.crossOrigin,
                    srcSet: W.srcSet,
                    style: z,
                    ref: this.imageRef,
                    onLoad: this.handleImageLoaded,
                    onError: this.props.onError,
                    itemProp: S,
                    loading: E,
                    draggable: I
                })), this.addNoScript && d.default.createElement("noscript", {
                    dangerouslySetInnerHTML: {
                        __html: O((0, l.default)({
                            alt: r,
                            title: t,
                            loading: E
                        }, W, {imageVariants: L}))
                    }
                }));
                if (h) {
                    var q = (0, l.default)({
                        position: "relative",
                        overflow: "hidden",
                        display: "inline-block",
                        width: W.width,
                        height: W.height
                    }, n);
                    return "inherit" === n.display && delete q.display, d.default.createElement(v, {
                        className: (i || "") + " gatsby-image-wrapper",
                        style: q,
                        ref: this.handleRef,
                        key: "fixed-" + JSON.stringify(W.srcSet)
                    }, H && d.default.createElement(v, {
                        "aria-hidden": !0,
                        title: t,
                        style: (0, l.default)({
                            backgroundColor: H,
                            width: W.width,
                            opacity: this.state.imgLoaded ? 0 : 1,
                            height: W.height
                        }, P && V)
                    }), W.base64 && d.default.createElement(k, {
                        ariaHidden: !0,
                        ref: this.placeholderRef,
                        src: W.base64,
                        spreadProps: N,
                        imageVariants: L,
                        generateSources: j
                    }), W.tracedSVG && d.default.createElement(k, {
                        ariaHidden: !0,
                        ref: this.placeholderRef,
                        src: W.tracedSVG,
                        spreadProps: N,
                        imageVariants: L,
                        generateSources: R
                    }), this.state.isVisible && d.default.createElement("picture", null, w(L), d.default.createElement(T, {
                        alt: r,
                        title: t,
                        width: W.width,
                        height: W.height,
                        sizes: W.sizes,
                        src: W.src,
                        crossOrigin: this.props.crossOrigin,
                        srcSet: W.srcSet,
                        style: z,
                        ref: this.imageRef,
                        onLoad: this.handleImageLoaded,
                        onError: this.props.onError,
                        itemProp: S,
                        loading: E,
                        draggable: I
                    })), this.addNoScript && d.default.createElement("noscript", {
                        dangerouslySetInnerHTML: {
                            __html: O((0, l.default)({
                                alt: r,
                                title: t,
                                loading: E
                            }, W, {imageVariants: L}))
                        }
                    }))
                }
                return null
            }, t
        }(d.default.Component);
        x.defaultProps = {fadeIn: !0, durationFadeIn: 500, alt: "", Tag: "div", loading: "lazy"};
        var P = c.default.shape({
            width: c.default.number.isRequired,
            height: c.default.number.isRequired,
            src: c.default.string.isRequired,
            srcSet: c.default.string.isRequired,
            base64: c.default.string,
            tracedSVG: c.default.string,
            srcWebp: c.default.string,
            srcSetWebp: c.default.string,
            media: c.default.string
        }), z = c.default.shape({
            aspectRatio: c.default.number.isRequired,
            src: c.default.string.isRequired,
            srcSet: c.default.string.isRequired,
            sizes: c.default.string.isRequired,
            base64: c.default.string,
            tracedSVG: c.default.string,
            srcWebp: c.default.string,
            srcSetWebp: c.default.string,
            media: c.default.string,
            maxWidth: c.default.number,
            maxHeight: c.default.number
        });

        function H(e) {
            return function (t, r, i) {
                var a;
                if (!t.fixed && !t.fluid) throw new Error("The prop `fluid` or `fixed` is marked as required in `" + i + "`, but their values are both `undefined`.");
                c.default.checkPropTypes(((a = {})[r] = e, a), t, "prop", i)
            }
        }

        x.propTypes = {
            resolutions: P,
            sizes: z,
            fixed: H(c.default.oneOfType([P, c.default.arrayOf(P)])),
            fluid: H(c.default.oneOfType([z, c.default.arrayOf(z)])),
            fadeIn: c.default.bool,
            durationFadeIn: c.default.number,
            title: c.default.string,
            alt: c.default.string,
            className: c.default.oneOfType([c.default.string, c.default.object]),
            critical: c.default.bool,
            crossOrigin: c.default.oneOfType([c.default.string, c.default.bool]),
            style: c.default.object,
            imgStyle: c.default.object,
            placeholderStyle: c.default.object,
            placeholderClassName: c.default.string,
            backgroundColor: c.default.oneOfType([c.default.string, c.default.bool]),
            onLoad: c.default.func,
            onError: c.default.func,
            onStartLoad: c.default.func,
            Tag: c.default.string,
            itemProp: c.default.string,
            loading: c.default.oneOf(["auto", "lazy", "eager"]),
            draggable: c.default.bool
        };
        var V = x;
        t.default = V
    }, C331: function (e, t, r) {
        "use strict";
        var i = "bfred-it:object-fit-images", a = /(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,
            n = "undefined" == typeof Image ? {style: {"object-position": 1}} : new Image, s = "object-fit" in n.style,
            o = "object-position" in n.style, l = "background-size" in n.style, d = "string" == typeof n.currentSrc,
            c = n.getAttribute, u = n.setAttribute, f = !1;

        function g(e, t, r) {
            var i = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + (t || 1) + "' height='" + (r || 0) + "'%3E%3C/svg%3E";
            c.call(e, "src") !== i && u.call(e, "src", i)
        }

        function p(e, t) {
            e.naturalWidth ? t(e) : setTimeout(p, 100, e, t)
        }

        function m(e) {
            var t = function (e) {
                for (var t, r = getComputedStyle(e).fontFamily, i = {}; null !== (t = a.exec(r));) i[t[1]] = t[2];
                return i
            }(e), r = e[i];
            if (t["object-fit"] = t["object-fit"] || "fill", !r.img) {
                if ("fill" === t["object-fit"]) return;
                if (!r.skipTest && s && !t["object-position"]) return
            }
            if (!r.img) {
                r.img = new Image(e.width, e.height), r.img.srcset = c.call(e, "data-ofi-srcset") || e.srcset, r.img.src = c.call(e, "data-ofi-src") || e.src, u.call(e, "data-ofi-src", e.src), e.srcset && u.call(e, "data-ofi-srcset", e.srcset), g(e, e.naturalWidth || e.width, e.naturalHeight || e.height), e.srcset && (e.srcset = "");
                try {
                    !function (e) {
                        var t = {
                            get: function (t) {
                                return e[i].img[t || "src"]
                            }, set: function (t, r) {
                                return e[i].img[r || "src"] = t, u.call(e, "data-ofi-" + r, t), m(e), t
                            }
                        };
                        Object.defineProperty(e, "src", t), Object.defineProperty(e, "currentSrc", {
                            get: function () {
                                return t.get("currentSrc")
                            }
                        }), Object.defineProperty(e, "srcset", {
                            get: function () {
                                return t.get("srcset")
                            }, set: function (e) {
                                return t.set(e, "srcset")
                            }
                        })
                    }(e)
                } catch (n) {
                    window.console && console.warn("https://bit.ly/ofi-old-browser")
                }
            }
            !function (e) {
                if (e.srcset && !d && window.picturefill) {
                    var t = window.picturefill._;
                    e[t.ns] && e[t.ns].evaled || t.fillImg(e, {reselect: !0}), e[t.ns].curSrc || (e[t.ns].supported = !1, t.fillImg(e, {reselect: !0})), e.currentSrc = e[t.ns].curSrc || e.src
                }
            }(r.img), e.style.backgroundImage = 'url("' + (r.img.currentSrc || r.img.src).replace(/"/g, '\\"') + '")', e.style.backgroundPosition = t["object-position"] || "center", e.style.backgroundRepeat = "no-repeat", e.style.backgroundOrigin = "content-box", /scale-down/.test(t["object-fit"]) ? p(r.img, (function () {
                r.img.naturalWidth > e.width || r.img.naturalHeight > e.height ? e.style.backgroundSize = "contain" : e.style.backgroundSize = "auto"
            })) : e.style.backgroundSize = t["object-fit"].replace("none", "auto").replace("fill", "100% 100%"), p(r.img, (function (t) {
                g(e, t.naturalWidth, t.naturalHeight)
            }))
        }

        function h(e, t) {
            var r = !f && !e;
            if (t = t || {}, e = e || "img", o && !t.skipTest || !l) return !1;
            "img" === e ? e = document.getElementsByTagName("img") : "string" == typeof e ? e = document.querySelectorAll(e) : "length" in e || (e = [e]);
            for (var a = 0; a < e.length; a++) e[a][i] = e[a][i] || {skipTest: t.skipTest}, m(e[a]);
            r && (document.body.addEventListener("load", (function (e) {
                "IMG" === e.target.tagName && h(e.target, {skipTest: t.skipTest})
            }), !0), f = !0, e = "img"), t.watchMQ && window.addEventListener("resize", h.bind(null, e, {skipTest: t.skipTest}))
        }

        h.supportsObjectFit = s, h.supportsObjectPosition = o, function () {
            function e(e, t) {
                return e[i] && e[i].img && ("src" === t || "srcset" === t) ? e[i].img : e
            }

            o || (HTMLImageElement.prototype.getAttribute = function (t) {
                return c.call(e(this, t), t)
            }, HTMLImageElement.prototype.setAttribute = function (t, r) {
                return u.call(e(this, t), t, String(r))
            })
        }(), e.exports = h
    }, ciIH: function (e, t, r) {
        "use strict";
        var i = r("284h"), a = r("TqRt");
        t.__esModule = !0, t.default = void 0;
        var n = a(r("pVnL")), s = a(r("8OQS")), o = a(r("284h")), l = a(r("VbXa")), d = i(r("q1tI")), c = a(r("17x9")),
            u = a(r("9eSz")), f = function (e) {
                function t() {
                    for (var t, r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
                    return (t = e.call.apply(e, [this].concat(i)) || this).imageRef = t.props.innerRef || (0, d.createRef)(), t.placeholderRef = (0, d.createRef)(), t
                }

                (0, l.default)(t, e);
                var i = t.prototype;
                return i.componentDidMount = function () {
                    var e = this, t = document.createElement("img");
                    void 0 !== t.style.objectFit && void 0 !== t.style.objectPosition || Promise.resolve().then((function () {
                        return (0, o.default)(r("C331"))
                    })).then((function (t) {
                        var r = t.default;
                        r(e.imageRef.current.imageRef.current), r(e.placeholderRef.current)
                    }))
                }, i.render = function () {
                    var e = this.props, t = e.objectFit, r = e.objectPosition,
                        i = (0, s.default)(e, ["objectFit", "objectPosition"]), a = {
                            objectFit: t,
                            objectPosition: r,
                            fontFamily: '"object-fit: ' + t + "; object-position: " + r + '"'
                        };
                    return d.default.createElement(u.default, (0, n.default)({
                        ref: this.imageRef,
                        placeholderRef: this.placeholderRef
                    }, i, {
                        imgStyle: (0, n.default)({}, i.imgStyle, a),
                        placeholderStyle: (0, n.default)({}, i.placeholderStyle, a)
                    }))
                }, t
            }(d.Component);
        f.propTypes = {
            objectFit: c.default.string,
            objectPosition: c.default.string
        }, f.defaultProps = {objectFit: "cover", objectPosition: "50% 50%"};
        var g = (0, d.forwardRef)((function (e, t) {
            return d.default.createElement(f, (0, n.default)({}, e, {innerRef: t}))
        }));
        t.default = g
    }, wBAs: function (e, t, r) {
        "use strict";
        r.d(t, "a", (function () {
            return d
        }));
        var i = r("q1tI"), a = r.n(i), n = r("ciIH"), s = r.n(n), o = r("YfPL"), l = r("h+r4"), d = function (e) {
            var t = e.image, r = e.variation, i = e.delay;
            return t ? a.a.createElement(o.g, {className: r}, a.a.createElement("div", {
                className: "rev-bg",
                style: {transitionDelay: (i || 0) + "ms"}
            }), a.a.createElement("div", {
                className: "rev-img-wrap",
                style: {transitionDelay: 800 + (i || 0) + "ms"}
            }, a.a.createElement(s.a, {
                fluid: Object(l.k)(t),
                objectPosition: {"from-left": "0% 50%", "from-right": "100% 50%"}[r || "from-left"],
                style: {transitionDelay: 800 + (i || 0) + "ms"}
            }))) : a.a.createElement(a.a.Fragment, null)
        }
    }
}]);
//# sourceMappingURL=063ff8727a94ecc32b0164bb756a6d8ff2e98efd-3872849f610c8c4ec30e.js.map
