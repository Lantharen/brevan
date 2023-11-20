(window.webpackJsonp = window.webpackJsonp || []).push([[18], {
    YMXp: function (t, e, n) {
        "use strict";
        n.r(e);
        var i = n("q1tI"), a = n.n(i), o = n("Bl7J"), r = n("vrFN"), s = n("cuY2"), l = n.n(s), c = n("TSYQ"),
            u = n.n(c), m = n("vOnD"), h = n("YfPL"), f = m.default.div.withConfig({
                displayName: "noticesstyles__NoticesMain",
                componentId: "sc-fk4yvg-0"
            })(["padding:335px 0 81px;", " ", " .legal-title{margin-bottom:.8em;", "}.legal{", " margin:0 auto;", " ", "}li{line-height:1.63;position:relative;&:before{content:'';display:block;position:absolute;left:-20px;border-radius:50%;top:.55em;height:.3em;width:.3em;background-color:currentColor;}}ul{list-style:none;margin-top:0;}.ntc-content{h6,h5,h4,h3,h2,h1{font-family:", ";font-size:16px;margin-bottom:30px;}h1{font-size:22px;}h2{font-size:20px;}h2{font-size:18px;}table{width:100%;margin-bottom:30px;td,th{padding:9px 20px 5px;text-align:center;border-right:1px solid rgba(20,28,37,.2);border-bottom:1px solid rgba(20,28,37,.2);&:first-child{border-left:1px solid rgba(20,28,37,.2);text-align:left;}}tr{&:first-child{th,td{border-top:1px solid rgba(20,28,37,.2);}}}}}.anim-ntc-item{margin-bottom:40px;}.ntc-item{padding-bottom:40px;margin-bottom:40px;border-bottom:1px solid rgba(0,0,0,.1);}.ntc-item-inner{>div:last-child p:last-child{margin-bottom:0;}}.ntc-btn{cursor:pointer;padding:4px 0;border:none;appearance:none;border-radius:0;transition:400ms;background:none;font-family:", ";font-weight:bold;font-size:12px;&:hover{opacity:.5;}}"], (function (t) {
                return t.theme.max("mac", (function () {
                    return "\n  padding: 250px 0 81px;\n"
                }))
            }), (function (t) {
                return t.theme.max("md", (function () {
                    return "\n  padding: 210px 0 81px;\n"
                }))
            }), (function (t) {
                return t.theme.max("sm", (function () {
                    return "\n    margin-bottom: 1.6em;\n  "
                }))
            }), Object(h.k)(14, "c"), (function (t) {
                return t.theme.max("ls", (function () {
                    return "\n    " + Object(h.k)(16, "c") + "\n  "
                }))
            }), (function (t) {
                return t.theme.max("md", (function () {
                    return "\n    " + Object(h.m)("left") + "\n    " + Object(h.k)(100) + "\n  "
                }))
            }), (function (t) {
                return t.theme.fonts.primary
            }), (function (t) {
                return t.theme.fonts.primary
            })), d = n("fhwx"), p = n.n(d), g = n("h+r4"), y = function (t) {
                var e = t.components;
                return a.a.createElement(a.a.Fragment, null, e.map((function (t, e) {
                    switch (t.fieldGroupName) {
                        case"notice_Noticesacf_sections_Components_Text":
                            return a.a.createElement(h.h, {
                                key: e,
                                className: u()({"first-item": 0 === e})
                            }, a.a.createElement(g.c, {text: null == t ? void 0 : t.text, endLink: "", endLinkText: ""}));
                        case"notice_Noticesacf_sections_Components_Title":
                            return a.a.createElement(t.titleSize || "h1", {key: e}, t.title);
                        case"notice_Noticesacf_sections_Components_List":
                            var n = t.items || [];
                            return a.a.createElement("ul", {
                                key: e,
                                className: u()({"first-item": 0 === e})
                            }, n.map((function (t, e) {
                                var n = t.text;
                                return a.a.createElement("li", {key: "listitem" + e}, n)
                            })));
                        case"notice_Noticesacf_sections_Components_FileList":
                            var i = t.items;
                            return a.a.createElement("ul", {
                                key: e,
                                className: u()({"first-item": 0 === e})
                            }, i.map((function (t, e) {
                                var n = t.text, i = t.useStaticFile, o = t.file;
                                return a.a.createElement("li", {key: "listitem" + e}, a.a.createElement("a", {
                                    href: Object(g.g)(null == o ? void 0 : o.localStaticUrl, i),
                                    target: "_blank",
                                    rel: "noreferrer"
                                }, n))
                            })));
                        case"notice_Noticesacf_sections_Components_LinkedContent":
                            var o = "email" === (null == t ? void 0 : t.type) ? "mailto:" + (null == t ? void 0 : t.email) : "" + (null == t ? void 0 : t.link),
                                r = "link" === (null == t ? void 0 : t.type) ? "external" : null == t ? void 0 : t.type;
                            return a.a.createElement(h.h, {
                                key: e,
                                className: u()({"first-item": 0 === e})
                            }, a.a.createElement(g.c, {
                                text: t.perfixText,
                                endLink: o || "",
                                endLinkText: t.linkText || "",
                                type: r
                            }));
                        case"notice_Noticesacf_sections_Components_WysiwygText":
                            return a.a.createElement(h.h, {key: e, className: u()({"first-item": 0 === e})}, p()(t.text));
                        case"notice_Noticesacf_sections_Components_Table":
                            return a.a.createElement("div", {
                                key: e,
                                className: u()({"first-item": 0 === e})
                            }, a.a.createElement("p", null, t.tableLabel), a.a.createElement("table", {cellSpacing: "0"}, a.a.createElement("tbody", null, t.rows.map((function (t, e) {
                                return a.a.createElement("tr", {key: "trow-" + e}, t.columns.map((function (t, n) {
                                    var i = t.text;
                                    return a.a.createElement(0 === e ? "th" : "td", {key: "titem-" + n}, i)
                                })))
                            })))));
                        default:
                            return a.a.createElement("div", {key: e, className: u()({"first-item": 0 === e})})
                    }
                })))
            };

        function v() {
            return 90
        }

        var b = function (t) {
            var e = t.index, n = t.components, i = t.title, o = a.a.useRef(null), r = a.a.useState(90), s = r[0],
                c = r[1], m = a.a.useState(90), h = m[0], f = m[1];
            return a.a.useEffect((function () {
                function t() {
                    f(90 === h ? 90 : "auto")
                }

                return window.addEventListener("resize", t), function () {
                    return window.removeEventListener("resize", t)
                }
            }), []), a.a.useEffect((function () {
                o && o.current && c(0 === o.current.getElementsByClassName("first-item").length ? 91 : o.current.getElementsByClassName("ntc-item-inner")[0].offsetHeight)
            }), [o.current]), a.a.createElement("div", {
                className: "ntc-item",
                ref: o
            }, a.a.createElement("h1", null, i), a.a.createElement(l.a, {
                id: "ntc-item-panel-" + e,
                className: "anim-ntc-item",
                duration: 500,
                height: h
            }, a.a.createElement("div", {className: "ntc-item-inner"}, a.a.createElement(y, {components: n}))), s > 90 && a.a.createElement("button", {
                "aria-expanded": h !== v,
                "aria-controls": "ntc-item-panel-" + e,
                onClick: function () {
                    f(90 === h ? "auto" : 90)
                },
                className: u()("ntc-btn", "auto" === h ? "open" : "closed")
            }, "auto" === h ? "Show less" : "Read more"))
        }, E = function (t) {
            var e = t.title, n = t.items;
            return a.a.createElement(f, null, a.a.createElement("div", {className: "legal"}, a.a.createElement("div", null, a.a.createElement("h1", {className: "legal-title"}, e)), a.a.createElement("div", {className: "ntc-content"}, n.map((function (t, e) {
                var n = t.title, i = t.noticesacf.sections[0].components || [];
                return a.a.createElement(b, {key: "s-" + e, title: n, components: i, index: e})
            })))))
        };
        e.default = function (t) {
            var e = t.data.wpgraphql.page, n = e.title, i = e.noticestemplateacf.noticeList;
            return a.a.createElement(o.a, {headerColor: "white"}, a.a.createElement(r.a, {title: n}), a.a.createElement(E, {
                title: n,
                items: i
            }))
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
        }(), r = c(n("q1tI")), s = c(n("17x9")), l = c(n("TSYQ"));

        function c(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function u(t, e, n) {
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

        var v = function (t) {
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
                    var n, i, a = this, o = this.props, r = o.height, s = o.onAnimationEnd, c = o.onAnimationStart,
                        m = this.getTimings(), h = m.duration, f = m.delay;
                    if (this.contentElement && r !== t.height) {
                        var v;
                        this.showContent(e.height), this.contentElement.style.overflow = "hidden";
                        var b = this.contentElement.offsetHeight;
                        this.contentElement.style.overflow = "";
                        var E = h + f, w = null, x = {height: null, overflow: "hidden"}, S = "auto" === e.height;
                        p(r) ? (w = r < 0 || "0" === r ? 0 : r, x.height = w) : g(r) ? (w = "0%" === r ? 0 : r, x.height = w) : (w = b, x.height = "auto", x.overflow = null), S && (x.height = w, w = b);
                        var C = (0, l.default)((u(v = {}, this.animationStateClasses.animating, !0), u(v, this.animationStateClasses.animatingUp, "auto" === t.height || r < t.height), u(v, this.animationStateClasses.animatingDown, "auto" === r || r > t.height), u(v, this.animationStateClasses.animatingToHeightZero, 0 === x.height), u(v, this.animationStateClasses.animatingToHeightAuto, "auto" === x.height), u(v, this.animationStateClasses.animatingToHeightSpecific, x.height > 0), v)),
                            k = this.getStaticStateClasses(x.height);
                        this.setState({
                            animationStateClasses: C,
                            height: w,
                            overflow: "hidden",
                            shouldUseTransitions: !S
                        }), clearTimeout(this.timeoutID), clearTimeout(this.animationClassesTimeoutID), S ? (x.shouldUseTransitions = !0, d(this.animationFrameIDs), this.animationFrameIDs = (n = function () {
                            a.setState(x), y(c, {newHeight: x.height})
                        }, (i = [])[0] = requestAnimationFrame((function () {
                            i[1] = requestAnimationFrame((function () {
                                n()
                            }))
                        })), i), this.animationClassesTimeoutID = setTimeout((function () {
                            a.setState({
                                animationStateClasses: k,
                                shouldUseTransitions: !1
                            }), a.hideContent(x.height), y(s, {newHeight: x.height})
                        }), E)) : (y(c, {newHeight: w}), this.timeoutID = setTimeout((function () {
                            x.animationStateClasses = k, x.shouldUseTransitions = !1, a.setState(x), "auto" !== r && a.hideContent(w), y(s, {newHeight: w})
                        }), E))
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
                    return (0, l.default)((u(e = {}, this.animationStateClasses.static, !0), u(e, this.animationStateClasses.staticHeightZero, 0 === t), u(e, this.animationStateClasses.staticHeightSpecific, t > 0), u(e, this.animationStateClasses.staticHeightAuto, "auto" === t), e))
                }
            }, {
                key: "render", value: function () {
                    var t, e = this, n = this.props, i = n.animateOpacity, o = n.applyInlineTransitions, s = n.children,
                        c = n.className, m = n.contentClassName, d = n.easing, p = n.id, g = n.style, y = this.state,
                        v = y.height, b = y.overflow, E = y.animationStateClasses, w = y.shouldUseTransitions,
                        x = this.getTimings(), S = x.duration, C = x.delay,
                        k = a({}, g, {height: v, overflow: b || g.overflow});
                    w && o && (k.transition = "height " + S + "ms " + d + " " + C + "ms", g.transition && (k.transition = g.transition + ", " + k.transition), k.WebkitTransition = k.transition);
                    var T = {};
                    i && (T.transition = "opacity " + S + "ms " + d + " " + C + "ms", T.WebkitTransition = T.transition, 0 === v && (T.opacity = 0));
                    var _ = (0, l.default)((u(t = {}, E, !0), u(t, c, c), t)),
                        N = void 0 !== this.props["aria-hidden"] ? this.props["aria-hidden"] : 0 === v;
                    return r.default.createElement("div", a({}, f.apply(void 0, [this.props].concat(h)), {
                        "aria-hidden": N,
                        className: _,
                        id: p,
                        style: k
                    }), r.default.createElement("div", {
                        className: m, style: T, ref: function (t) {
                            return e.contentElement = t
                        }
                    }, s))
                }
            }]), e
        }(r.default.Component);
        v.propTypes = {
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
        }, v.defaultProps = {
            animateOpacity: !1,
            animationStateClasses: m,
            applyInlineTransitions: !0,
            duration: 250,
            delay: 0,
            easing: "ease",
            style: {}
        }, e.default = v
    }
}]);
//# sourceMappingURL=component---src-templates-notices-js-d641924fe8da6728d8f3.js.map
