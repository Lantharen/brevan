(window.webpackJsonp = window.webpackJsonp || []).push([[20], {
    "G+4l": function (t, e, n) {
        "use strict";
        n.r(e);
        var i = n("q1tI"), a = n.n(i), o = n("oqc9"), r = n("sp6N"), s = n.n(r), l = n("Bl7J"), u = n("vrFN"),
            c = n("cuY2"), m = n.n(c), h = n("TSYQ"), f = n.n(h), d = n("fhwx"), p = n.n(d), g = n("h+r4"),
            y = n("I3Cp"), b = n("vOnD"), v = n("YfPL"), w = b.default.div.withConfig({
                displayName: "text-pagestyles__TextPageMain",
                componentId: "sc-77fh1f-0"
            })(["padding:330px 0 200px;", " ", " .intro-title{font-family:", ";padding-top:.35em;margin-bottom:1em;font-size:22px;text-transform:uppercase;", "}.section-title{font-family:", ";margin-bottom:2.2em;font-size:16px;}.row{position:relative;}.legal-sidebar{", " ", " ul{margin:0;margin-top:-2px;padding:0;list-style:none;transition:400ms;}li{padding:0 2.1em 1.09em;", " &:last-child{padding-bottom:0;", "}}a{position:relative;display:block;line-height:1.63;font-size:12px;font-family:", ";color:", ";font-weight:bold;text-decoration:none;transition:400ms;padding:0.75em 0 .25em;&:before{content:'';position:absolute;left:-40px;top:40%;pointer-events:none;width:40px;border-top:1px solid currentColor;transform-origin:left center;transform:scale(0,1);transition:400ms;}span{display:inline-block;transition:400ms;}&:not(.active){", "}&.active{&:before{transform:scale(1,1);}span{transform:translate(40px,0);}}", "}}.legal-title-wrap,.legal-content-wrap{", " ", "}.legal-content-wrap{ol,ul{margin-top:1.9em;margin-bottom:1.9em;}ol{list-style-type:upper-latin;}strong{font-weight:bold;}}.legal-title-wrap{margin-left:auto;", "}", "{&.large-text{margin-bottom:5.3em;font-family:", ";", "}}.anim-sidebar{position:sticky;top:160px;left:0;transition:400ms;.has-hidden-header &{top:30px;}", "}.angle-btn{background:none;appearance:none;border-radius:0;border:none;position:absolute;right:0;top:14px;svg{transform:rotate(90deg);}&.open{svg{transform:rotate(-90deg);}}", " .angle-r-bg{display:none;}.angle-r-in{stroke:", ";}}"], (function (t) {
                return t.theme.max("mac", (function () {
                    return "\n  padding: 230px 0 130px;\n"
                }))
            }), (function (t) {
                return t.theme.max("md", (function () {
                    return "\n  padding: 140px 0 80px;\n"
                }))
            }), (function (t) {
                return t.theme.fonts.primary
            }), (function (t) {
                return t.theme.max("sm", (function () {
                    return "\n    line-height: " + 32 / 22 + ";\n  "
                }))
            }), (function (t) {
                return t.theme.fonts.primary
            }), Object(v.k)(30), (function (t) {
                return t.theme.max("sm", (function () {
                    return "\n    " + Object(v.k)(100) + "\n    position: relative;\n    margin-bottom: 60px;\n  "
                }))
            }), (function (t) {
                return t.theme.max("sm", (function () {
                    return "\n      padding: 10px 0;\n\n      &:first-child {\n        padding: 10px 0;\n        min-height: 74px;\n        display: flex;\n        align-items: center;\n      }\n    "
                }))
            }), (function (t) {
                return t.theme.max("sm", (function () {
                    return "\n        padding-bottom: 10px;\n      "
                }))
            }), (function (t) {
                return t.theme.fonts.primary
            }), (function (t) {
                return t.theme.colors.primary100
            }), (function (t) {
                return t.theme.min("sm", (function () {
                    return "\n        opacity: .5;\n      "
                }))
            }), (function (t) {
                return t.theme.min("sm", (function () {
                    return "\n      &:hover {\n        opacity: 1;\n\n        span {\n          transform: translate(40px, 0);\n        }\n      }\n    "
                }))
            }), Object(v.k)(70), (function (t) {
                return t.theme.max("sm", (function () {
                    return "\n    " + Object(v.k)(100) + "\n  "
                }))
            }), (function (t) {
                return t.theme.max("sm", (function () {
                    return "\n    padding-top: 70px;\n  "
                }))
            }), v.h, (function (t) {
                return t.theme.fonts.primary
            }), (function (t) {
                return t.theme.max("sm", (function () {
                    return "\n      line-height: 1.68;\n      margin-bottom: 3.1em;\n    "
                }))
            }), (function (t) {
                return t.theme.max("sm", (function () {
                    return "\n    border-bottom: 1px solid rgba(0,0,0,.1);\n    border-top: 1px solid rgba(0,0,0,.1);\n  "
                }))
            }), (function (t) {
                return t.theme.min("sm", (function () {
                    return "\n    display: none;\n  "
                }))
            }), (function (t) {
                return t.theme.colors.primary
            }));

        function x() {
            return "undefined" != typeof window && window.innerWidth < 767 ? 74 : "auto"
        }

        var E = function (t) {
            var e = t.title, n = t.introContent, i = t.sections, r = a.a.useState(x()), l = r[0], u = r[1];
            return a.a.useEffect((function () {
                function t() {
                    u(l === x() ? x() : "auto")
                }

                return window.addEventListener("resize", t), function () {
                    return window.removeEventListener("resize", t)
                }
            }), []), a.a.createElement(w, null, a.a.createElement(v.a, null, a.a.createElement("div", {className: "row"}, a.a.createElement("div", {className: "pad-col legal-title-wrap"}, a.a.createElement("h1", {
                id: "terms",
                className: "legal-title"
            }, e))), a.a.createElement("div", {className: "row"}, i.length > 0 && a.a.createElement("aside", {className: "pad-col legal-sidebar"}, a.a.createElement(m.a, {
                id: "sidebar-panel",
                className: "anim-sidebar",
                duration: 500,
                height: l
            }, a.a.createElement("ul", null, i.map((function (t, e) {
                var n = t.title;
                return a.a.createElement("li", {key: e}, a.a.createElement(o.Link, {
                    activeClass: "active",
                    href: "#" + Object(g.e)(n),
                    to: Object(g.e)(n),
                    spy: !0,
                    smooth: !0,
                    offset: -160,
                    duration: 1e3
                }, a.a.createElement("span", null, n)))
            })))), a.a.createElement("button", {
                "aria-expanded": l !== x,
                "aria-controls": "sidebar-panel",
                onClick: function () {
                    u(l === x() ? "auto" : x())
                },
                className: f()("angle-btn", "auto" === l ? "open" : "closed")
            }, a.a.createElement(s.a, null))), a.a.createElement("article", {className: "pad-col legal-content-wrap"}, a.a.createElement("div", {className: "markdown"}, n.map((function (t, e) {
                var n = t.title, i = t.text, o = t.contentType, r = t.wysiwyg;
                return a.a.createElement("div", {
                    key: e,
                    id: Object(g.e)(n || "intro-content-" + e)
                }, n && a.a.createElement("h2", {className: 0 === e ? "intro-title" : "section-title"}, n), i && (o ? a.a.createElement(v.h, {className: 0 === e ? "large-text" : ""}, p()(r)) : a.a.createElement(y.a, {
                    text: i,
                    variation: 0 === e ? "large-text" : ""
                })))
            })), i.map((function (t, e) {
                var n = t.title, i = t.text, o = t.contentType, r = t.wysiwyg;
                return a.a.createElement("div", {
                    key: e,
                    id: Object(g.e)(n || "section-" + e)
                }, null !== n && a.a.createElement("h2", {className: "section-title"}, e + 1 + ". " + n), o ? a.a.createElement(v.h, null, p()(r)) : a.a.createElement(y.a, {text: i}))
            })))))))
        };
        e.default = function (t) {
            var e = t.data.wpgraphql.page, n = e.title, i = e.textpageacf;
            return a.a.createElement(l.a, {
                headerColor: "white",
                removeMainClass: "true"
            }, a.a.createElement(u.a, {title: n}), a.a.createElement(E, {
                title: n,
                introContent: i.introContent,
                sections: i.sections
            }), a.a.createElement("button", {
                className: "s-to-top-btn", onClick: function () {
                    o.animateScroll.scrollTo(0)
                }
            }, a.a.createElement(s.a, null)))
        }
    }, cuY2: function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, a = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        }, o = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }

            return function (e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(), r = u(n("q1tI")), s = u(n("17x9")), l = u(n("TSYQ"));

        function u(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function c(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }

        var m = {
                animating: "rah-animating",
                animatingUp: "rah-animating--up",
                animatingDown: "rah-animating--down",
                animatingToHeightZero: "rah-animating--to-height-zero",
                animatingToHeightAuto: "rah-animating--to-height-auto",
                animatingToHeightSpecific: "rah-animating--to-height-specific",
                static: "rah-static",
                staticHeightZero: "rah-static--height-zero",
                staticHeightAuto: "rah-static--height-auto",
                staticHeightSpecific: "rah-static--height-specific"
            },
            h = ["animateOpacity", "animationStateClasses", "applyInlineTransitions", "children", "contentClassName", "delay", "duration", "easing", "height", "onAnimationEnd", "onAnimationStart"];

        function f(t) {
            for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) n[i - 1] = arguments[i];
            if (!n.length) return t;
            for (var a = {}, o = Object.keys(t), r = 0; r < o.length; r++) {
                var s = o[r];
                -1 === n.indexOf(s) && (a[s] = t[s])
            }
            return a
        }

        function d(t) {
            t.forEach((function (t) {
                return cancelAnimationFrame(t)
            }))
        }

        function p(t) {
            return !isNaN(parseFloat(t)) && isFinite(t)
        }

        function g(t) {
            return "string" == typeof t && t.search("%") === t.length - 1 && p(t.substr(0, t.length - 1))
        }

        function y(t, e) {
            t && "function" == typeof t && t(e)
        }

        var b = function (t) {
            function e(t) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var n = function (t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                n.animationFrameIDs = [];
                var i = "auto", o = "visible";
                p(t.height) ? (i = t.height < 0 || "0" === t.height ? 0 : t.height, o = "hidden") : g(t.height) && (i = "0%" === t.height ? 0 : t.height, o = "hidden"), n.animationStateClasses = a({}, m, t.animationStateClasses);
                var r = n.getStaticStateClasses(i);
                return "undefined" != typeof window && window.matchMedia && (n.prefersReducedMotion = window.matchMedia("(prefers-reduced-motion)").matches), n.state = {
                    animationStateClasses: r,
                    height: i,
                    overflow: o,
                    shouldUseTransitions: !1
                }, n
            }

            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }(e, t), o(e, [{
                key: "componentDidMount", value: function () {
                    var t = this.state.height;
                    this.contentElement && this.contentElement.style && this.hideContent(t)
                }
            }, {
                key: "componentDidUpdate", value: function (t, e) {
                    var n, i, a = this, o = this.props, r = o.height, s = o.onAnimationEnd, u = o.onAnimationStart,
                        m = this.getTimings(), h = m.duration, f = m.delay;
                    if (this.contentElement && r !== t.height) {
                        var b;
                        this.showContent(e.height), this.contentElement.style.overflow = "hidden";
                        var v = this.contentElement.offsetHeight;
                        this.contentElement.style.overflow = "";
                        var w = h + f, x = null, E = {height: null, overflow: "hidden"}, C = "auto" === e.height;
                        p(r) ? (x = r < 0 || "0" === r ? 0 : r, E.height = x) : g(r) ? (x = "0%" === r ? 0 : r, E.height = x) : (x = v, E.height = "auto", E.overflow = null), C && (E.height = x, x = v);
                        var S = (0, l.default)((c(b = {}, this.animationStateClasses.animating, !0), c(b, this.animationStateClasses.animatingUp, "auto" === t.height || r < t.height), c(b, this.animationStateClasses.animatingDown, "auto" === r || r > t.height), c(b, this.animationStateClasses.animatingToHeightZero, 0 === E.height), c(b, this.animationStateClasses.animatingToHeightAuto, "auto" === E.height), c(b, this.animationStateClasses.animatingToHeightSpecific, E.height > 0), b)),
                            T = this.getStaticStateClasses(E.height);
                        this.setState({
                            animationStateClasses: S,
                            height: x,
                            overflow: "hidden",
                            shouldUseTransitions: !C
                        }), clearTimeout(this.timeoutID), clearTimeout(this.animationClassesTimeoutID), C ? (E.shouldUseTransitions = !0, d(this.animationFrameIDs), this.animationFrameIDs = (n = function () {
                            a.setState(E), y(u, {newHeight: E.height})
                        }, (i = [])[0] = requestAnimationFrame((function () {
                            i[1] = requestAnimationFrame((function () {
                                n()
                            }))
                        })), i), this.animationClassesTimeoutID = setTimeout((function () {
                            a.setState({
                                animationStateClasses: T,
                                shouldUseTransitions: !1
                            }), a.hideContent(E.height), y(s, {newHeight: E.height})
                        }), w)) : (y(u, {newHeight: x}), this.timeoutID = setTimeout((function () {
                            E.animationStateClasses = T, E.shouldUseTransitions = !1, a.setState(E), "auto" !== r && a.hideContent(x), y(s, {newHeight: x})
                        }), w))
                    }
                }
            }, {
                key: "componentWillUnmount", value: function () {
                    d(this.animationFrameIDs), clearTimeout(this.timeoutID), clearTimeout(this.animationClassesTimeoutID), this.timeoutID = null
                }
            }, {
                key: "getTimings", value: function () {
                    if (this.prefersReducedMotion) return {delay: 0, duration: 0};
                    var t = this.props;
                    return {delay: t.delay, duration: t.duration}
                }
            }, {
                key: "showContent", value: function (t) {
                    0 === t && (this.contentElement.style.display = "")
                }
            }, {
                key: "hideContent", value: function (t) {
                    0 === t && (this.contentElement.style.display = "none")
                }
            }, {
                key: "getStaticStateClasses", value: function (t) {
                    var e;
                    return (0, l.default)((c(e = {}, this.animationStateClasses.static, !0), c(e, this.animationStateClasses.staticHeightZero, 0 === t), c(e, this.animationStateClasses.staticHeightSpecific, t > 0), c(e, this.animationStateClasses.staticHeightAuto, "auto" === t), e))
                }
            }, {
                key: "render", value: function () {
                    var t, e = this, n = this.props, i = n.animateOpacity, o = n.applyInlineTransitions, s = n.children,
                        u = n.className, m = n.contentClassName, d = n.easing, p = n.id, g = n.style, y = this.state,
                        b = y.height, v = y.overflow, w = y.animationStateClasses, x = y.shouldUseTransitions,
                        E = this.getTimings(), C = E.duration, S = E.delay,
                        T = a({}, g, {height: b, overflow: v || g.overflow});
                    x && o && (T.transition = "height " + C + "ms " + d + " " + S + "ms", g.transition && (T.transition = g.transition + ", " + T.transition), T.WebkitTransition = T.transition);
                    var k = {};
                    i && (k.transition = "opacity " + C + "ms " + d + " " + S + "ms", k.WebkitTransition = k.transition, 0 === b && (k.opacity = 0));
                    var O = (0, l.default)((c(t = {}, w, !0), c(t, u, u), t)),
                        N = void 0 !== this.props["aria-hidden"] ? this.props["aria-hidden"] : 0 === b;
                    return r.default.createElement("div", a({}, f.apply(void 0, [this.props].concat(h)), {
                        "aria-hidden": N,
                        className: O,
                        id: p,
                        style: T
                    }), r.default.createElement("div", {
                        className: m, style: k, ref: function (t) {
                            return e.contentElement = t
                        }
                    }, s))
                }
            }]), e
        }(r.default.Component);
        b.propTypes = {
            "aria-hidden": s.default.bool,
            animateOpacity: s.default.bool,
            animationStateClasses: s.default.object,
            applyInlineTransitions: s.default.bool,
            children: s.default.any.isRequired,
            className: s.default.string,
            contentClassName: s.default.string,
            delay: s.default.number,
            duration: s.default.number,
            easing: s.default.string,
            height: function (t, e, n) {
                var a = t[e];
                return "number" == typeof a && a >= 0 || g(a) || "auto" === a ? null : new TypeError('value "' + a + '" of type "' + (void 0 === a ? "undefined" : i(a)) + '" is invalid type for ' + e + " in " + n + '. It needs to be a positive number, string "auto" or percentage string (e.g. "15%").')
            },
            id: s.default.string,
            onAnimationEnd: s.default.func,
            onAnimationStart: s.default.func,
            style: s.default.object
        }, b.defaultProps = {
            animateOpacity: !1,
            animationStateClasses: m,
            applyInlineTransitions: !0,
            duration: 250,
            delay: 0,
            easing: "ease",
            style: {}
        }, e.default = b
    }
}]);
//# sourceMappingURL=component---src-templates-text-page-js-875936d34841a0683b32.js.map
