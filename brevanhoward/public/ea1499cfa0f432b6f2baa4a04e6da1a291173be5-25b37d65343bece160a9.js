(window.webpackJsonp = window.webpackJsonp || []).push([[4], {
    "/huT": function (t, e, n) {
        "use strict";
        var a = n("q1tI"), c = n.n(a);
        e.a = function (t) {
            var e = void 0 === t ? {} : t, n = e.acceptType, a = void 0 === n ? "withAccept" : n, r = e.initialOpen,
                i = {open: void 0 !== r && r, acceptType: a, modalData: null}, o = c.a.useState(i), l = o[0], s = o[1],
                m = function () {
                    document.body.classList.remove("modal-open"), s(Object.assign({}, l, {open: !1}))
                };
            return {
                modalProps: {
                    modalStatus: l, acceptAndCloseModal: function () {
                        m()
                    }, closeModal: m, openModal: function (t) {
                        var e = t.override, n = void 0 === e ? {} : e;
                        document.body.classList.add("modal-open"), s(Object.assign({}, l, n, {
                            open: !0,
                            type: (null == n ? void 0 : n.type) || ""
                        }))
                    }, changeModal: function (t) {
                        document.body.classList.add("modal-open"), s(Object.assign({}, l, {open: !0, type: t || ""}))
                    }, closeModalAndClean: function () {
                        document.body.classList.remove("modal-open"), s(Object.assign({}, i, {open: !1}))
                    }
                }
            }
        }
    }, "3vHM": function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return f
        }));
        var a = n("q1tI"), c = n.n(a), r = n("ciIH"), i = n.n(r), o = n("pLTZ"), l = n.n(o), s = n("SMLm"), m = n.n(s),
            d = n("YfPL"), u = n("wBAs"), p = n("h+r4"), f = function (t) {
                var e = t.text, n = t.name, a = t.label, r = t.image, o = t.signature, s = t.smallImage,
                    f = t.smallImageMobile, h = t.variation, v = void 0 === h ? "" : h, x = t.quoteFootnote,
                    g = void 0 === x ? "" : x;
                return c.a.createElement(d.f, {className: (r || o ? "image-and-sig" : "text-only") + " qb-" + v}, f && c.a.createElement("div", {className: "sm-image-wrap mobile"}, c.a.createElement(u.a, {
                    image: f,
                    variation: "from-right"
                })), c.a.createElement("div", {className: "quote-sig-wrap"}), r && "circle" !== v && c.a.createElement("div", {className: "quote-img-wrap"}, c.a.createElement(u.a, {
                    image: r,
                    variation: "from-right"
                })), r && "circle" === v && c.a.createElement("div", {className: "quote-img-wrap-c"}, c.a.createElement(m.a, null), c.a.createElement("div", {className: "quote-img-inner"}, c.a.createElement(i.a, {
                    fluid: Object(p.k)(r),
                    objectPosition: "center"
                }))), c.a.createElement("div", {className: "quote-content"}, c.a.createElement("div", {className: "quote-symb " + ("circle" === v ? "blue-quote" : "")}, c.a.createElement(l.a, null)), c.a.createElement("div", {className: "quote-text"}, e), !!g && c.a.createElement("div", {className: "quote-footnote"}, g), c.a.createElement("div", {className: "quote-meta"}, s && c.a.createElement(u.a, {
                    image: s,
                    variation: "desktop from-left"
                }), c.a.createElement("div", {className: "quote-name " + (s ? "has-sm-img" : "")}, n), c.a.createElement("div", {className: "quote-label"}, a))))
            }
    }, "9icC": function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return b
        }));
        var a = n("q1tI"), c = n.n(a), r = n("aqT/"), i = n.n(r), o = n("vOnD"), l = n("YfPL"),
            s = o.default.div.withConfig({
                displayName: "da-global-footprintstyles__GlobalFootprintMain",
                componentId: "sc-1lbords-0"
            })(["background-color:", ";position:relative;padding-top:60px;padding-bottom:136px;", " .section-title{", ";}", "{color:", ";}", "{color:", ";font-size:16px;max-width:475px;}.side-col{", ";margin-top:-12.8%;", " ", "}.map-img{padding-top:30px;", "}.mobile-content{position:relative;padding-bottom:90px;", "}.cities{display:flex;flex-direction:column;align-items:center;}.city{font-size:20px;padding-bottom:34px;color:", ';}.map-img-mobile{position:absolute;top:20px;left:0;width:100%;height:100%;}.map-img-inner{position:relative;svg{position:absolute;top:0;left:0;width:100%;height:100%;}}@keyframes markerAnim{0%{opacity:.5;}40%{opacity:1;}60%{opacity:.5;}75%{opacity:1;}100%{opacity:.5;}}@keyframes dotMarkerAnim{0%{transform:scale(.5);}40%{transform:scale(1);}60%{transform:scale(.5);}75%{transform:scale(1);}100%{transform:scale(.5);}}[class^="da-marker"]{animation-name:markerAnim;animation-iteration-count:infinite;animation-duration:3s;animation-delay:.4s;}.da-marker-1{animation-duration:4.1s;}.da-marker-2{animation-duration:4.2s;}.da-marker-3{animation-duration:4.3s;}.da-marker-4{animation-duration:4.4s;}.da-marker-5{animation-duration:4.5s;}.da-marker-6{animation-duration:4.6s;}[class^="da-dot"]{animation-name:dotMarkerAnim;animation-iteration-count:infinite;animation-duration:3s;transform-box:fill-box;transform-origin:center center;}.da-dot-marker-1{animation-duration:4.1s;}.da-dot-marker-2{animation-duration:4.2s;}.da-dot-marker-3{animation-duration:4.3s;}.da-dot-marker-4{animation-duration:4.4s;}.da-dot-marker-5{animation-duration:4.5s;}.da-dot-marker-6{animation-duration:4.6s;}.da-fp-cline{stroke-dasharray:300;animation-name:arcAnimationSmall;animation-timing-function:cubic-bezier(0.140,-0.060,0.850,1.060);animation-iteration-count:infinite;}.da-fp-cline-1{animation-duration:5.4s;}.da-fp-cline-2{animation-duration:5.2s;}.da-fp-cline-3{animation-duration:5.3s;}.da-fp-cline-4{animation-duration:5.4s;}.da-fp-cline-5{animation-duration:5.5s;}.da-fp-cline-6{animation-duration:5.6s;}.da-fp-cline-6,.da-fp-cline-5,.da-fp-cline-4{stroke-dasharray:500;animation-name:arcAnimationMedium;}.da-fp-cline-3{stroke-dasharray:1000;animation-name:arcAnimationLarge;}@keyframes arcAnimationLarge{0%{stroke-dashoffset:1000;}33%{stroke-dashoffset:', ";}50%{stroke-dashoffset:", ";}68%{stroke-dashoffset:", ";}100%{stroke-dashoffset:1000;}}@keyframes arcAnimationSmall{0%{stroke-dashoffset:300;}40%{stroke-dashoffset:", ";}60%{stroke-dashoffset:", ";}75%{stroke-dashoffset:", ";}100%{stroke-dashoffset:300;}}@keyframes arcAnimationMedium{0%{stroke-dashoffset:500;}40%{stroke-dashoffset:", ";}60%{stroke-dashoffset:", ";}75%{stroke-dashoffset:", ";}100%{stroke-dashoffset:500;}}&.to-animate{.city{transform:translate(0,80px);opacity:0;}}&.to-animate:not(.is-in-vp){.city{transition-delay:0ms !important;}}&.to-animate.is-in-vp{.city{transition:", "ms;transform:translate(0);opacity:1;}}"], (function (t) {
                return t.theme.colors.primary300
            }), (function (t) {
                return t.theme.max("sm", (function (t) {
                    return "\n        padding-bottom: 80px;\n  "
                }), t)
            }), Object(l.m)(), l.i, (function (t) {
                return t.theme.colors.white
            }), l.h, (function (t) {
                return t.theme.colors.white
            }), Object(l.m)(), (function (t) {
                return t.theme.max("lg", (function (t) {
                    return "\n         margin-top: -7.8%;\n  "
                }), t)
            }), (function (t) {
                return t.theme.max("sm", (function (t) {
                    return "\n        margin-top: 0;\n  "
                }), t)
            }), (function (t) {
                return t.theme.max("sm", (function (t) {
                    return "\n        display: none;\n  "
                }), t)
            }), (function (t) {
                return t.theme.min("sm", (function (t) {
                    return "\n        display: none;\n  "
                }), t)
            }), (function (t) {
                return t.theme.colors.green100
            }), 5e3, 3e3, 5e3, 1500, 900, 1500, 2500, 1500, 2500, 800), m = n("9eSz"), d = n.n(m), u = n("Y9D7"),
            p = n("I3Cp"), f = n("h+r4"), h = n("Wbzz"), v = n("qJMi"), x = n.n(v),
            g = [{breakpoint: 767, charLimit: 19}, {breakpoint: 480, charLimit: 16}],
            y = [{id: 1, city: "Austin"}, {id: 2, city: "Chicago"}, {id: 3, city: "New York"}, {
                id: 5,
                city: "London"
            }, {id: 6, city: "Jersey"}, {id: 7, city: "Geneva"}, {id: 8, city: "Singapore"}, {
                id: 9,
                city: "Abu Dhabi"
            }], b = function (t) {
                var e = t.secondaryTitle, n = t.text, a = (t.title, Object(h.useStaticQuery)("3154791081"));
                return c.a.createElement(i.a, {partialVisibility: !0, offset: {top: 20, bottom: 20}}, (function (t) {
                    var r, i, o = t.isVisible;
                    return c.a.createElement(s, {className: "to-animate " + (o ? "is-in-vp" : "")}, c.a.createElement("div", {className: "section-title"}), c.a.createElement("div", {className: "map-img"}, c.a.createElement("div", {className: "map-img-inner"}, c.a.createElement(d.a, {fluid: Object(f.k)(null == a || null === (r = a.img) || void 0 === r ? void 0 : r.childImageSharp)}), c.a.createElement(x.a, null))), c.a.createElement("div", {className: "mobile-content"}, c.a.createElement("div", {className: "map-img-mobile"}, c.a.createElement(d.a, {fluid: Object(f.k)(null == a || null === (i = a.imgMobile) || void 0 === i ? void 0 : i.childImageSharp)})), c.a.createElement("div", {className: "cities"}, y.map((function (t, e) {
                        t.city;
                        var n = t.id;
                        return c.a.createElement("div", {
                            key: n,
                            className: "city",
                            style: {transitionDelay: 600 + 100 * e + "ms"}
                        })
                    })))), c.a.createElement("div", {className: "side-col"}, c.a.createElement(u.a, {
                        text: e,
                        variation: "smallest-title",
                        responsive: g
                    }), c.a.createElement(p.a, {text: n})))
                }))
            }
    }, GBeJ: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return b
        }));
        var a = n("q1tI"), c = n.n(a), r = n("aqT/"), i = n.n(r), o = n("yrOS"), l = n("vOnD"), s = n("YfPL"),
            m = l.default.div.withConfig({
                displayName: "da-our-teamstyles__DAOurTeamMain",
                componentId: "sc-14637ia-0"
            })(["padding-top:170px;padding-bottom:110px;background-color:", ";color:", ";", "{color:", ";}&.cutout-top:before{background-color:", ";max-height:95px;left:48%;width:52%;}.flex-wrap{margin-left:-24px;margin-right:-24px;}.side-col{", ";", "}.side-col-2{margin-left:5.3125%;", "}.lg-circl-wrap{margin-left:auto;margin-right:auto;}.sm-circl-parent{justify-content:space-between;align-items:center;flex-wrap:nowrap;", "}.sm-circl-wrap{display:flex;", "}.space-top{margin-top:68px;}.h-line{position:relative;flex:1 1 auto;overflow:hidden;height:5px;", " > svg{position:absolute;top:50%;left:0;width:100%;min-width:200px;height:5px;transform:translate(0,-50%);", "}}.v-line{position:relative;height:55px;overflow:hidden;> svg{position:absolute;left:50%;top:0;transform-origin:left center;transform:rotate(90deg);}}.lg-circl-parent{padding-top:110px;}.da-team-footnote{font-size:14px;line-height:1.5;color:", ";}.to-animate{.da-team-footnote{transform:translate(0,100px);opacity:0;}.v-line{transform-origin:top center;transform:scaleY(0);}.h-line{transform:scaleX(0);", "}.h-line-0{transform-origin:right center;}.h-line-1{transform-origin:left center;}}.to-animate:not(.is-in-vp){.da-team-footnote{transition-delay:500ms !important;}}.to-animate.is-in-vp{.da-team-footnote{transition:", "ms ease 500ms;transform:translate(0);opacity:1;}.v-line{transition:", "ms ease 800ms;transform:scaleY(1);}.h-line{transition:", "ms ease 1200ms;transform:scaleX(1);", "}}"], (function (t) {
                return t.theme.colors.primary300
            }), (function (t) {
                return t.theme.colors.white
            }), s.i, (function (t) {
                return t.theme.colors.white
            }), (function (t) {
                return t.theme.colors.primary
            }), Object(s.k)(10, "c"), (function (t) {
                return t.theme.max("sm", (function (t) {
                    return "\n      " + Object(s.k)(100) + "\n    "
                }), t)
            }), (function (t) {
                return t.theme.max("sm", (function (t) {
                    return "\n      margin-left: 0;\n    "
                }), t)
            }), (function (t) {
                return t.theme.max("sm", (function (t) {
                    return "\n      flex-direction: column;\n    "
                }), t)
            }), (function (t) {
                return t.theme.max("sm", (function (t) {
                    return "\n      margin-left: auto;\n      margin-right: auto;\n    "
                }), t)
            }), (function (t) {
                return t.theme.max("sm", (function (t) {
                    return "\n      height: 45px;\n      flex: 0 0 45px;\n      min-width: 5px;\n      width: 5px;\n    "
                }), t)
            }), (function (t) {
                return t.theme.max("sm", (function (t) {
                    return "\n        left: 50%;\n        transform-origin: left center;\n        transform: rotate(90deg);\n      "
                }), t)
            }), (function (t) {
                return t.theme.colors.primary400
            }), (function (t) {
                return t.theme.max("sm", (function (t) {
                    return "\n        transform: scaleY(0);\n      "
                }), t)
            }), 800, 800, 800, (function (t) {
                return t.theme.max("sm", (function (t) {
                    return "\n        transform: scaleY(1);\n      "
                }), t)
            })), d = l.default.div.withConfig({
                displayName: "da-our-teamstyles__DotCircleItemMain",
                componentId: "sc-14637ia-1"
            })(["position:relative;svg{max-width:100%;height:100%;}.dci-content{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;}.dci-num{font-size:150px;font-family:", ";}.dci-text{color:", ";}&.small{max-width:305px;", " .dci-num{font-size:100px;", "}.dci-text{font-size:20px;", "}}&.large{", " .dci-num{", "}.dci-text{font-size:30px;", "}}.to-animate &{.dci-content{opacity:0;}svg{transform:scale(0);opacity:0;}}.to-animate:not(.is-in-vp) &{.dci-content{}}.to-animate.is-in-vp &{.dci-content{opacity:1;transition:", "ms ease 500ms;}svg{transition:", "ms ease;transform:scale(1);opacity:1;}}&.sm-dci-0{.dci-content,svg{.to-animate.is-in-vp &{transition-delay:1000ms;", "}}}&.sm-dci-1{.dci-content,svg{.to-animate.is-in-vp &{transition-delay:500ms;}}}&.sm-dci-2{.dci-content,svg{.to-animate.is-in-vp &{transition-delay:1000ms;}}}"], (function (t) {
                return t.theme.fonts.tertiary
            }), (function (t) {
                return t.theme.colors.secondary100
            }), (function (t) {
                return t.theme.max("lt", (function (t) {
                    return "\n      max-width: 243px;\n    "
                }), t)
            }), (function (t) {
                return t.theme.max("lt", (function (t) {
                    return "\n        font-size: 80px;\n      "
                }), t)
            }), (function (t) {
                return t.theme.max("lt", (function (t) {
                    return "\n        font-size: 16px;\n      "
                }), t)
            }), (function (t) {
                return t.theme.max("lt", (function (t) {
                    return "\n      max-width: 331px;\n    "
                }), t)
            }), (function (t) {
                return t.theme.max("lt", (function (t) {
                    return "\n        font-size: 100px;\n      "
                }), t)
            }), (function (t) {
                return t.theme.max("lt", (function (t) {
                    return "\n        font-size: 22px;\n      "
                }), t)
            }), 1500, 1500, (function (t) {
                return t.theme.max("sm", (function (t) {
                    return "\n          transition-delay: 300ms ;\n        "
                }), t)
            })), u = n("Y9D7"), p = n("I3Cp"), f = n("PHNs"), h = n("RaUd"), v = n.n(h), x = n("daxA"), g = n.n(x),
            y = function (t) {
                var e = t.number, n = t.sufix, a = t.text, r = t.className, i = t.isVisible, o = Object(f.useCountUp)({
                    start: 1, end: e, duration: 4, easingFn: function (t, e, n, a) {
                        return -n / 2 * (Math.cos(Math.PI * t / a) - 1) + e
                    }
                }), l = o.countUp, s = o.start, m = o.reset;
                return c.a.useEffect((function () {
                    i && s(), i || m()
                }), [i]), c.a.createElement(d, {className: "" + r}, c.a.createElement(v.a, null), c.a.createElement("div", {className: "dci-content"}, c.a.createElement("div", {className: "dci-num"}, c.a.createElement("span", null, l), c.a.createElement("span", null, n)), c.a.createElement("div", {className: "dci-text"}, a)))
            }, b = function (t) {
                var e = t.hexagonData, n = e.name, a = e.sectionNum, r = t.title, l = t.textLeft, d = t.textRight,
                    f = t.diagramDescription, h = t.footnote, v = t.primaryStat, x = t.secondaryStats;
                return c.a.createElement(m, {className: "cutout-top"}, c.a.createElement(s.a, null, c.a.createElement(i.a, {
                    partialVisibility: !0,
                    offset: {top: 0, bottom: 0}
                }, (function (t) {
                    var e = t.isVisible;
                    return c.a.createElement("div", {className: "flex-wrap to-animate " + (e ? "is-in-vp" : "")}, c.a.createElement("div", {className: "title-col pad-col"}, c.a.createElement(o.a, {
                        variation: "circle",
                        number: a,
                        className: "hex-txt-white"
                    }, n), c.a.createElement(u.a, {text: r})))
                })), c.a.createElement(i.a, {partialVisibility: !0, offset: {top: 0, bottom: 0}}, (function (t) {
                    var e = t.isVisible;
                    return c.a.createElement("div", {className: "flex-wrap to-animate " + (e ? "is-in-vp" : "")}, c.a.createElement("div", {className: "pad-col side-col side-col-1"}, c.a.createElement(p.a, {
                        text: l,
                        variation: "large-text"
                    })), c.a.createElement("div", {className: "pad-col side-col side-col-2"}, c.a.createElement(p.a, {
                        text: d,
                        variation: "large-text"
                    })))
                })), c.a.createElement(i.a, {partialVisibility: !0, offset: {top: 0, bottom: 0}}, (function (t) {
                    var e = t.isVisible;
                    return c.a.createElement("div", {className: "to-animate " + (e ? "is-in-vp" : "")}, c.a.createElement("div", {className: "flex-wrap lg-circl-parent"}, c.a.createElement("div", {className: "lg-circl-wrap"}, c.a.createElement(y, {
                        isVisible: e,
                        number: null == v ? void 0 : v.number,
                        sufix: null == v ? void 0 : v.sufix,
                        text: null == v ? void 0 : v.text,
                        className: "large"
                    }), c.a.createElement("div", {className: "v-line"}))), c.a.createElement("div", {className: "flex-wrap sm-circl-parent"}, (x || []).map((function (t, n) {
                        var a = t.item, r = a.number, i = a.sufix, o = a.text;
                        return c.a.createElement(c.a.Fragment, {key: n}, c.a.createElement("div", {className: "sm-circl-wrap"}, c.a.createElement(y, {
                            isVisible: e,
                            number: r,
                            sufix: i,
                            text: o,
                            className: "small sm-dci sm-dci-" + n
                        })), (x || []).length - 1 > n && c.a.createElement("div", {className: "h-line h-line-" + n}, c.a.createElement(g.a, null)))
                    }))))
                })), c.a.createElement(i.a, {partialVisibility: !0, offset: {top: 0, bottom: 0}}, (function (t) {
                    var e = t.isVisible;
                    return c.a.createElement("div", {className: "to-animate " + (e ? "is-in-vp" : "")}, c.a.createElement(p.a, {
                        text: f,
                        variation: "large-text space-top"
                    }), c.a.createElement("div", {className: "da-team-footnote"}, h))
                }))))
            }
    }, PNvn: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return f
        }));
        var a = n("q1tI"), c = n.n(a), r = n("aqT/"), i = n.n(r), o = n("9eSz"), l = n.n(o), s = n("vOnD"),
            m = n("YfPL"), d = s.default.div.withConfig({
                displayName: "da-herostyles__DAHeroMain",
                componentId: "sc-1elneok-0"
            })(["background-color:", ";.da-hero-inner{padding-top:183px;display:flex;align-items:center;justify-content:center;position:relative;min-height:100vh;", "}", "{position:absolute;z-index:5;top:32%;color:", ";text-align:center;margin-bottom:0.3em;", "}.da-hero-img{width:100%;max-width:940px;}"], (function (t) {
                return t.theme.colors.primary
            }), (function (t) {
                return t.theme.max("md", (function (t) {
                    return "\n       padding-top: 80px;\n  "
                }), t)
            }), m.i, (function (t) {
                return t.theme.colors.white
            }), (function (t) {
                return t.theme.max("sm", (function (t) {
                    return "\n       top: 40%;\n  "
                }), t)
            })), u = n("Y9D7"), p = n("h+r4"), f = function (t) {
                var e = t.title, n = t.background;
                return c.a.createElement(i.a, {partialVisibility: !0, offset: {top: 20, bottom: 20}}, (function (t) {
                    var a = t.isVisible;
                    return c.a.createElement(d, {className: "to-animate " + (a ? "is-in-vp" : "")}, c.a.createElement(m.a, null, c.a.createElement("div", {className: "da-hero-inner"}, c.a.createElement(u.a, {text: e}), n && c.a.createElement("div", {className: "da-hero-img"}, c.a.createElement(l.a, {fluid: Object(p.k)(n)})))))
                }))
            }
    }, QdDY: function (t, e, n) {
        "use strict";
        var a = n("q1tI"), c = n.n(a), r = n("Wbzz"), i = n("ALm3"), o = n("bdEM"), l = n("741A"), s = n("bPrE");
        e.a = function (t) {
            var e, n, a, m, d, u, p, f, h, v, x = t.modalProps, g = t.digitalassetsacf, y = x.modalStatus,
                b = Object(r.useStaticQuery)("1799853877").wpgraphql.themeSettings.themesettingsacf;
            "undefined" != typeof window && (null != y && y.open ? document.body.classList.add("modal-open") : document.body.classList.remove("modal-open"));
            var E = "undefined" == typeof window;
            if (!(null != y && y.open || E)) return null;
            var k = {
                introContent: [],
                sections: null == g || null === (e = g.riskFactorsModalData) || void 0 === e ? void 0 : e.content
            }, N = {
                introContent: [],
                sections: ((null == g || null === (n = g.disclosuresModalData) || void 0 === n ? void 0 : n.content) || []).map((function (t, e) {
                    return Object.assign({}, t, {title: 0 === e ? "" : null == t ? void 0 : t.title})
                }))
            }, M = {
                introContent: null == g || null === (a = g.disclosuresModalData) || void 0 === a ? void 0 : a.content,
                sections: null == g || null === (m = g.riskFactorsModalData) || void 0 === m ? void 0 : m.content
            };
            return c.a.createElement(l.a, null, "risk" === (null == y ? void 0 : y.type) ? c.a.createElement(s.a, {
                hasBackButton: !1,
                modalClass: ("withAccept" === (null == y ? void 0 : y.acceptType) ? "modal-sm" : "") + " modal-has-actions sm-s-title modal-h-md"
            }, c.a.createElement("h2", {className: "intro-title"}, null == g || null === (d = g.riskFactorsModalData) || void 0 === d ? void 0 : d.title), c.a.createElement(o.a, {
                data: k,
                hideSectionNumbers: !0
            }), c.a.createElement("div", {className: "modal-actions-wrap"}, "withAccept" !== (null == y ? void 0 : y.acceptType) && c.a.createElement("button", {
                className: "rect-btn",
                onClick: function () {
                    return null == x ? void 0 : x.closeModal()
                }
            }, null == g ? void 0 : g.modalCloseButtonLabel))) : "disclosure" === (null == y ? void 0 : y.type) ? c.a.createElement(s.a, {
                hasBackButton: !1,
                modalClass: ("withAccept" === (null == y ? void 0 : y.acceptType) ? "modal-sm" : "") + "  modal-has-actions sm-s-title modal-h-md"
            }, c.a.createElement("h2", {
                className: "intro-title",
                style: {textTransform: "capitalize"}
            }, ((null === (u = (null == g || null === (f = g.disclosuresModalData) || void 0 === f ? void 0 : f.content) || []) || void 0 === u || null === (p = u[0]) || void 0 === p ? void 0 : p.title) || "").toLowerCase()), c.a.createElement(o.a, {
                data: N,
                hideSectionNumbers: !0
            }), c.a.createElement("div", {className: "modal-actions-wrap"}, "withAccept" !== (null == y ? void 0 : y.acceptType) && c.a.createElement("button", {
                className: "rect-btn",
                onClick: function () {
                    return null == x ? void 0 : x.closeModal()
                }
            }, null == g ? void 0 : g.modalCloseButtonLabel))) : "contact" === (null == y ? void 0 : y.type) ? c.a.createElement(s.a, {
                onBackClick: function () {
                    null == x || x.changeModal("")
                }
            }, c.a.createElement("h2", {className: "intro-title"}, null == b ? void 0 : b.disclaimerContactTitle), c.a.createElement("p", {className: "modal-subtitle"}, null == b ? void 0 : b.disclaimerContactSubtitle), c.a.createElement("div", {className: "modal-content"}, c.a.createElement(i.a, {contactDetails: b}))) : c.a.createElement(s.a, {
                hasBackButton: !1,
                modalClass: ("withAccept" === (null == y ? void 0 : y.acceptType) ? "modal-sm" : "") + " modal-has-actions sm-s-title"
            }, c.a.createElement("h2", {className: "intro-title"}, null == g || null === (h = g.disclosuresModalData) || void 0 === h ? void 0 : h.title), c.a.createElement(o.a, {
                data: M,
                sectionsHeading: null == g || null === (v = g.riskFactorsModalData) || void 0 === v ? void 0 : v.title,
                hideSectionNumbers: !0
            }), c.a.createElement("div", {className: "modal-actions-wrap"}, "withAccept" === (null == y ? void 0 : y.acceptType) && c.a.createElement("button", {
                className: "rect-btn",
                onClick: function () {
                    return null == x ? void 0 : x.acceptAndCloseModal()
                }
            }, null == g ? void 0 : g.modalAcceptButtonLabel), "withAccept" === (null == y ? void 0 : y.acceptType) && c.a.createElement("button", {
                className: "link-btn link-btn-cta",
                onClick: function () {
                    return null == x ? void 0 : x.changeModal("contact")
                }
            }, null == b ? void 0 : b.disclaimerRejectButtonText), "withAccept" !== (null == y ? void 0 : y.acceptType) && c.a.createElement("button", {
                className: "rect-btn",
                onClick: function () {
                    return null == x ? void 0 : x.closeModal()
                }
            }, null == g ? void 0 : g.modalCloseButtonLabel)), "withAccept" === (null == y ? void 0 : y.acceptType) && c.a.createElement("div", {className: "modal-footer-wrap"}, c.a.createElement("h3", {className: "modal-footer-title"}, null == g ? void 0 : g.modalFooterTitle), c.a.createElement("p", {className: "modal-footer-content"}, null == g ? void 0 : g.modalFooterText))))
        }
    }, RaUd: function (t, e, n) {
        var a = n("q1tI");

        function c(t) {
            return a.createElement("svg", t, [a.createElement("style", {key: 0}, "\r\n\t\t.dot-circle-s0 { fill: none;stroke: #56bbb1;stroke-width: 3;stroke-dasharray: 3 } \r\n\t\t.dot-circle-s1 { fill: none;stroke: #d1c8ba;stroke-width: 2 } \r\n\t"), a.createElement("circle", {
                id: "Layer",
                className: "dot-circle-s0",
                cx: "243.5",
                cy: "243.5",
                r: "210",
                key: 1
            }), a.createElement("circle", {
                id: "Layer",
                className: "dot-circle-s1",
                cx: "243.5",
                cy: "243.5",
                r: "242.5",
                key: 2
            })])
        }

        c.defaultProps = {
            version: "1.2",
            viewBox: "0 0 487 487",
            width: "487",
            height: "487"
        }, t.exports = c, c.default = c
    }, SMLm: function (t, e, n) {
        var a = n("q1tI");

        function c(t) {
            return a.createElement("svg", t, [a.createElement("style", {key: 0}, "\r\n\t\t.quote-circle-lg { fill: none;stroke: #56bbb1;stroke-width: 4 } \r\n\t\t.quote-sircle-sm { fill: none;stroke: #56bbb1;stroke-width: 2 } \r\n\t"), a.createElement("circle", {
                id: "largeC",
                className: "quote-circle-lg",
                cx: "267",
                cy: "267",
                r: "261",
                key: 1
            }), a.createElement("circle", {
                id: "smallC",
                className: "quote-sircle-sm",
                cx: "267",
                cy: "267",
                r: "249",
                key: 2
            })])
        }

        c.defaultProps = {
            version: "1.2",
            viewBox: "0 0 534 534",
            width: "534",
            height: "534"
        }, t.exports = c, c.default = c
    }, WQZh: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return o
        }));
        var a = n("q1tI"), c = n.n(a), r = n("Wbzz"), i = n("vCmQ"), o = function (t) {
            var e = t.title, n = t.hexagonData, a = void 0 === n ? {} : n,
                o = Object(r.useStaticQuery)("2575000949").wpgraphql.themeSettings.themesettingsacf;
            return c.a.createElement(i.a, {
                hexagonData: a,
                firstTitle: e,
                contactDetails: Object.assign({}, o, {
                    siteSocialLinkedinLink: null == o ? void 0 : o.siteSocialBhDigitalLinkedinLink,
                    siteSocialLinkedinLinkText: null == o ? void 0 : o.siteSocialBhDigitalLinkedinLinkText
                })
            })
        }
    }, a1Qa: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return m
        }));
        n("E9XD");
        var a = n("q1tI"), c = n.n(a), r = n("Y9D7"), i = n("YfPL"), o = n("vOnD").default.div.withConfig({
            displayName: "da-officesstyle__DAOfficesMain",
            componentId: "sc-6nugy2-0"
        })(["padding:90px 0 50px;.office-table-warp{padding:0 30px;width:95%;margin:58px auto;", " ", "}.office-table{border-top:1px solid rgba(0,0,0,.1);font-size:22px;width:100%;", " ", " ", " td{vertical-align:top;}}.da-office-country{color:", ";}.da-office-country,.da-office-city{width:18%;", "}.da-office-city{", "}.da-office-link-w{text-align:right;", " ", " a{color:", ";}}.da-office-table-row{", " tr:last-child{td{border-bottom:1px solid rgba(0,0,0,.1);padding-bottom:50px;", "}}td{padding:50px 0 0;", "}}.sub-item-wrap:not(:first-child){margin-top:49px;}&.to-animate{.da-office-table-row{transform:translate(0,80px);opacity:0;}}&.to-animate:not(.is-in-vp){.da-office-table-row{transition-delay:0ms !important;}}&.to-animate.is-in-vp{.da-office-table-row{transition:", "ms;transform:translate(0);opacity:1;}}"], (function (t) {
            return t.theme.max("lt", (function (t) {
                return "\n      width: 100%;\n    "
            }), t)
        }), (function (t) {
            return t.theme.max("sm", (function (t) {
                return "\n      padding: 0 20px;\n    "
            }), t)
        }), (function (t) {
            return t.theme.max("mac", (function (t) {
                return "\n      font-size: 20px;\n    "
            }), t)
        }), (function (t) {
            return t.theme.max("lt", (function (t) {
                return "\n      font-size: 18px;\n    "
            }), t)
        }), (function (t) {
            return t.theme.max("sm", (function (t) {
                return "\n      display: block;\n    "
            }), t)
        }), (function (t) {
            var e, n;
            return null == t || null === (e = t.theme) || void 0 === e || null === (n = e.colors) || void 0 === n ? void 0 : n.secondary
        }), (function (t) {
            return t.theme.max("mac", (function (t) {
                return "\n      width: 16%;\n    "
            }), t)
        }), (function (t) {
            return t.theme.max("lt", (function (t) {
                return "\n      width: 12%;\n    "
            }), t)
        }), (function (t) {
            return t.theme.max("lt", (function (t) {
                return "\n      width: 13%;\n    "
            }), t)
        }), (function (t) {
            return t.theme.max("sm", (function (t) {
                return "\n      text-align: left;\n    "
            }), t)
        }), (function (t) {
            var e, n;
            return null === (e = t.theme) || void 0 === e || null === (n = e.colors) || void 0 === n ? void 0 : n.primary200
        }), (function (t) {
            return t.theme.max("sm", (function (t) {
                return "\n      display: block;\n      border-bottom: 1px solid rgba(0,0,0,.1);\n      padding-top: 30px;\n    "
            }), t)
        }), (function (t) {
            return t.theme.max("sm", (function (t) {
                return "\n          padding: 0;\n          border-bottom: none;\n        "
            }), t)
        }), (function (t) {
            return t.theme.max("sm", (function (t) {
                return "\n        display: block;\n        margin-bottom: 30px;\n        width: 100%;\n        padding: 0;\n        \n        &.hidden-td {\n          display: none;\n        }\n        \n        &.da-office-city {\n          margin-bottom: 16px;\n        }\n      "
            }), t)
        }), 800), l = n("aqT/"), s = n.n(l), m = function (t) {
            var e, n = t.digitalassetsacf,
                a = (t.hexagonData, (null == n || null === (e = n.offices) || void 0 === e ? void 0 : e.locations) || []);
            return c.a.createElement(s.a, {partialVisibility: !0, offset: {top: 100, bottom: 100}}, (function (t) {
                var e, l = t.isVisible;
                return c.a.createElement(o, {className: "to-animate " + (l ? "is-in-vp" : "")}, c.a.createElement(i.a, null, c.a.createElement(r.a, {
                    text: (null == n || null === (e = n.offices) || void 0 === e ? void 0 : e.title) || "",
                    variation: "small-title"
                })), c.a.createElement("div", {className: "office-table-warp"}, c.a.createElement("table", {className: "office-table"}, a.map((function (t, e) {
                    ((null == t ? void 0 : t.address) || []).reduce((function (t, e) {
                        return t ? t + ", " + e.text : e.text
                    }), "");
                    var a = null == t ? void 0 : t.items;
                    return c.a.createElement("tbody", {
                        key: e,
                        className: "da-office-table-row",
                        style: {transitionDelay: 600 + 100 * e + "ms"}
                    }, a.map((function (e, a) {
                        return c.a.createElement("tr", {key: "tr" + a}, c.a.createElement("td", {className: "da-office-country " + (0 === a ? "" : "hidden-td")}, 0 === a && (null == t ? void 0 : t.country)), c.a.createElement("td", {className: "da-office-city " + (0 === a ? "" : "hidden-td")}, 0 === a && (null == t ? void 0 : t.city)), c.a.createElement("td", null, (null == e ? void 0 : e.address) || ""), c.a.createElement("td", {className: "da-office-link-w"}, c.a.createElement("a", {
                            href: (null == e ? void 0 : e.link) || "/",
                            target: "_blank",
                            rel: "noreferrer"
                        }, null == n ? void 0 : n.offices.directionsButtonText)))
                    })))
                })))))
            }))
        }
    }, daxA: function (t, e, n) {
        var a = n("q1tI");

        function c(t) {
            return a.createElement("svg", t, [a.createElement("title", {key: 0}, "dot-line-svg"), a.createElement("style", {key: 1}, "\r\n\t\t.dot-line-s0 { fill: none;stroke: #d1c8ba;stroke-dasharray: 2 } \r\n\t"), a.createElement("path", {
                id: "Layer",
                className: "dot-line-s0",
                d: "m0 0.5h209",
                key: 2
            })])
        }

        c.defaultProps = {version: "1.2", viewBox: "0 0 209 1", width: "209", height: "1"}, t.exports = c, c.default = c
    }, goGE: function (t, e, n) {
        var a = n("q1tI");

        function c(t) {
            return a.createElement("svg", t, a.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M0.75 5.24997C0.551088 5.24997 0.360322 5.32899 0.21967 5.46964C0.0790178 5.61029 0 5.80106 0 5.99997C0 6.19888 0.0790178 6.38965 0.21967 6.5303C0.360322 6.67095 0.551088 6.74997 0.75 6.74997H9.4395L6.219 9.96897C6.14927 10.0387 6.09395 10.1215 6.05621 10.2126C6.01848 10.3037 5.99905 10.4014 5.99905 10.5C5.99905 10.5986 6.01848 10.6962 6.05621 10.7873C6.09395 10.8785 6.14927 10.9612 6.219 11.031C6.28873 11.1007 6.37152 11.156 6.46262 11.1938C6.55373 11.2315 6.65138 11.2509 6.75 11.2509C6.84862 11.2509 6.94627 11.2315 7.03738 11.1938C7.12848 11.156 7.21127 11.1007 7.281 11.031L11.781 6.53097C11.8508 6.4613 11.9063 6.37854 11.9441 6.28742C11.9819 6.1963 12.0013 6.09862 12.0013 5.99997C12.0013 5.90132 11.9819 5.80364 11.9441 5.71252C11.9063 5.6214 11.8508 5.53864 11.781 5.46897L7.281 0.968971C7.21127 0.899239 7.12848 0.843925 7.03738 0.806186C6.94627 0.768447 6.84862 0.749023 6.75 0.749023C6.65138 0.749023 6.55373 0.768447 6.46262 0.806186C6.37152 0.843925 6.28873 0.899239 6.219 0.968971C6.14927 1.0387 6.09395 1.12149 6.05621 1.2126C6.01848 1.3037 5.99905 1.40136 5.99905 1.49997C5.99905 1.59859 6.01848 1.69624 6.05621 1.78735C6.09395 1.87846 6.14927 1.96124 6.219 2.03097L9.4395 5.24997H0.75Z",
                fill: "#434C60"
            }))
        }

        c.defaultProps = {width: "12", height: "12", viewBox: "0 0 12 12", fill: "none"}, t.exports = c, c.default = c
    }, ix9Z: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return h
        }));
        var a = n("q1tI"), c = n.n(a), r = n("aqT/"), i = n.n(r), o = n("Y9D7"), l = n("yrOS"), s = n("wBAs"),
            m = n("I3Cp"), d = n("vOnD"), u = n("YfPL"), p = d.default.div.withConfig({
                displayName: "da-about__DAAboutMain",
                componentId: "sc-1ar41l9-0"
            })(["background-color:", ";color:", ";padding:0 0 45px;", " ", " ", " .main-col{", " ", " ", " ", " ", "}", "{margin-bottom:76px;}", "{color:", ";margin-bottom:0.56em;", "}.image-col{", " margin-left:auto;", " ", "}.side-col{", " ", " margin-left:auto;", " ", " ", "{", " ", " ", "}}.side-col-img{margin-left:auto;margin-bottom:93px;}.img-text-col{", " ", " padding-top:22px;", " ", "}.img-col{", " margin-left:auto;", " ", "}.quote-col{", " padding:184px 0 222px;", " ", "}.to-animate{.quote-content{opacity:0;transform:translate(-100px,0);", "}.quote-sig-wrap{opacity:0;}}.to-animate:not(.is-in-vp){.quote-sig-wrap,.quote-content{transition-delay:0ms !important;}}.to-animate.is-in-vp{.quote-content{transition:", "ms ease 800ms;transform:translate(0);opacity:1;", "}.quote-sig-wrap{transition:", "ms ease 800ms;opacity:1;}}.img-col-wrap{align-items:center;padding-top:60px;}.first-row{.main-col{padding-top:309px;", " ", " ", "}}"], (function (t) {
                return t.theme.colors.primary
            }), (function (t) {
                return t.theme.colors.white
            }), (function (t) {
                return t.theme.max("lt", (function () {
                    return "\n  padding: 220px 0 230px;\n"
                }))
            }), (function (t) {
                return t.theme.max("md", (function (t) {
                    return "\n  padding: 180px 0 80px;\n"
                }), t)
            }), (function (t) {
                return t.theme.max("sm", (function (t) {
                    return "\n  padding: 0 0 50px;\n"
                }), t)
            }), Object(u.m)(), Object(u.k)(6, "c"), (function (t) {
                return t.theme.max("mac", (function (t) {
                    return "\n    " + Object(u.k)(30) + "\n  "
                }), t)
            }), (function (t) {
                return t.theme.max("md", (function () {
                    return "\n    padding-top: 10px;\n    " + Object(u.k)(50) + "\n  "
                }))
            }), (function (t) {
                return t.theme.max("sm", (function (t) {
                    return "\n    " + Object(u.k)(100) + "\n  "
                }), t)
            }), u.d, u.i, (function (t) {
                return t.theme.colors.white
            }), (function (t) {
                return t.theme.max("sm", (function () {
                    return "\n    margin-bottom: 0.76em;\n  "
                }))
            }), Object(u.k)(49.85), (function (t) {
                return t.theme.max("mac", (function () {
                    return "\n      " + Object(u.k)(46.7) + "\n      "
                }))
            }), (function (t) {
                return t.theme.max("crt", (function () {
                    return "\n      " + Object(u.k)(42) + "\n      "
                }))
            }), Object(u.m)("right", 3), Object(u.k)(37.35), (function (t) {
                return t.theme.max("md", (function () {
                    return "\n      " + Object(u.k)(45) + "\n      "
                }))
            }), (function (t) {
                return t.theme.max("sm", (function () {
                    return "\n      " + Object(u.k)(100) + "\n      "
                }))
            }), u.h, Object(u.k)(67), (function (t) {
                return t.theme.max("mac", (function (t) {
                    return "\n      " + Object(u.k)(80) + "\n    "
                }), t)
            }), (function (t) {
                return t.theme.max("crt", (function (t) {
                    return "\n      " + Object(u.k)(100) + "\n    "
                }), t)
            }), Object(u.m)(), Object(u.k)(6.2, "c"), (function (t) {
                return t.theme.max("md", (function () {
                    return "\n    " + Object(u.k)(45) + "\n  "
                }))
            }), (function (t) {
                return t.theme.max("sm", (function () {
                    return "\n    padding-top: 56px;\n    order: 2;\n    " + Object(u.k)(100) + "\n  "
                }))
            }), Object(u.k)(11, "c"), (function (t) {
                return t.theme.max("md", (function () {
                    return "\n    order: 1;\n  "
                }))
            }), (function (t) {
                return t.theme.max("sm", (function () {
                    return "\n    " + Object(u.k)(100) + "\n    " + Object(u.m)() + "\n  "
                }))
            }), Object(u.k)(100), (function (t) {
                return t.theme.max("mac", (function () {
                    return "\n    padding-top: 80px;\n  "
                }))
            }), (function (t) {
                return t.theme.max("md", (function (t) {
                    return "\n    padding: 50px 0 10px;\n  "
                }), t)
            }), (function (t) {
                return t.theme.max("sm", (function () {
                    return "\n      transform: translate(0, 100px);\n    "
                }))
            }), 800, (function (t) {
                return t.theme.max("sm", (function () {
                    return "\n      transform: translate(0);\n    "
                }))
            }), 800, (function (t) {
                return t.theme.min("fhd", (function () {
                    return "\n        padding-top: 450px;\n      "
                }))
            }), (function (t) {
                return t.theme.max("mac", (function () {
                    return "\n        padding-top: 209px;\n      "
                }))
            }), (function (t) {
                return t.theme.max("sm", (function () {
                    return "\n        padding-top: 90px;\n      "
                }))
            })), f = n("3vHM"), h = function (t) {
                var e = t.image1, n = t.image1Mobile, a = t.ceoImage, r = t.hexagonData, d = t.title, u = t.text,
                    h = t.quoteText, v = t.companyPosition, x = t.fullName, g = t.textRight, y = t.quoteFootnote;
                return c.a.createElement(p, null, n && c.a.createElement("div", {className: "mobile-only"}, c.a.createElement(s.a, {
                    image: n,
                    variation: "from-right"
                })), c.a.createElement(i.a, {partialVisibility: !0, offset: {top: 0, bottom: 0}}, (function (t) {
                    var n = t.isVisible;
                    return c.a.createElement("div", null, c.a.createElement("div", {className: "flex-wrap first-row"}, c.a.createElement("div", {className: "main-col to-animate " + (n ? "is-in-vp" : "")}, c.a.createElement(l.a, {
                        variation: "circle",
                        number: null == r ? void 0 : r.sectionNum,
                        className: "hex-txt-white"
                    }, null == r ? void 0 : r.name), c.a.createElement(o.a, {
                        text: d,
                        responsive: [{breakpoint: 768, charLimit: 15}]
                    })), c.a.createElement("div", {className: "image-col to-animate " + (n ? "is-in-vp" : "")}, c.a.createElement("div", {className: "side-col-img desktop-only"}, e && c.a.createElement(s.a, {
                        image: e,
                        variation: "from-right"
                    })))), c.a.createElement("div", {className: "flex-wrap to-animate  " + (n ? "is-in-vp" : "")}, c.a.createElement("div", {className: "main-col"}, u && c.a.createElement(m.a, {
                        variation: "large-text",
                        text: u
                    })), c.a.createElement("div", {className: "side-col"}, g && c.a.createElement(m.a, {
                        variation: "large-text",
                        text: g
                    }))))
                })), c.a.createElement(i.a, {partialVisibility: !0, offset: {top: 0, bottom: 0}}, (function (t) {
                    var e = t.isVisible;
                    return c.a.createElement("div", {className: "quote-col to-animate " + (e ? "is-in-vp" : "")}, c.a.createElement(f.a, {
                        variation: "circle",
                        text: h,
                        name: x,
                        label: v,
                        image: a,
                        quoteFootnote: y
                    }))
                })))
            }
    }, pLTZ: function (t, e, n) {
        var a = n("q1tI");

        function c(t) {
            return a.createElement("svg", t, a.createElement("path", {
                d: "M0 34V18.9109L9.4873 0H15.1143L6.93555 18.9109H15.1143V34H0ZM23.8164 34V18.9109L33.3691 0H38.9961L30.8174 18.9109H38.9961V34H23.8164Z",
                fill: "#BDB4A8"
            }))
        }

        c.defaultProps = {width: "39", height: "34", viewBox: "0 0 39 34", fill: "none"}, t.exports = c, c.default = c
    }, qJMi: function (t, e, n) {
        var a = n("q1tI");

        function c(t) {
            return a.createElement("svg", t, [a.createElement("style", {
                type: "text/css",
                key: 0
            }, "\r\n\t.st0{fill:none;stroke:#56BBB1;stroke-width:1.5;}\r\n\t.st1{fill:#C4C4C4;}\r\n\t.st2{fill:none;stroke:#56BBB1;stroke-width:2;}\r\n\t.st3{fill:#56BBB1;}\r\n\t.st4{fill:none;stroke:#FFFFFF;stroke-width:3;stroke-opacity:0.1;}\r\n\t\r\n"), a.createElement("circle", {
                id: "Layer",
                className: "st0 da-marker-1 ga-footprint-map-s0",
                cx: "359",
                cy: "422",
                r: "24.3",
                key: 1
            }), a.createElement("circle", {
                id: "Layer_00000053512581804674337010000009893956343410609842_",
                className: "st0 da-marker-2 ga-footprint-map-s0",
                cx: "1336",
                cy: "600",
                r: "24.3",
                key: 2
            }), a.createElement("circle", {
                id: "Layer_00000075136670628457318580000018131199937314662579_",
                className: "st0 da-marker-3 ga-footprint-map-s0",
                cx: "890",
                cy: "351",
                r: "24.3",
                key: 3
            }), a.createElement("circle", {
                id: "Layer_00000045581087094571282130000015245876849779901593_",
                className: "st0 da-marker-4 ga-footprint-map-s0",
                cx: "816",
                cy: "308",
                r: "24.3",
                key: 4
            }), a.createElement("circle", {
                id: "Layer_00000161601843015740709860000013517299471466188988_",
                className: "st0 da-marker-5 ga-footprint-map-s0",
                cx: "503",
                cy: "343",
                r: "24.3",
                key: 5
            }), a.createElement("circle", {
                id: "Layer_00000146464879055144600020000004058794034041466043_",
                className: "st0 da-marker-6 ga-footprint-map-s0",
                cx: "400",
                cy: "314",
                r: "24.3",
                key: 6
            }), a.createElement("circle", {
                id: "Layer_00000047756892329172127980000007824840915428216736_",
                className: "st1 da-marker-7 ga-footprint-map-s0",
                cx: "359",
                cy: "422",
                r: "4",
                key: 7
            }), a.createElement("circle", {
                id: "Layer_00000168833862250227461500000011361324350086056878_",
                className: "st1 da-dot-marker-1 ga-footprint-map-s1",
                cx: "1336",
                cy: "600",
                r: "4",
                key: 8
            }), a.createElement("circle", {
                id: "Layer_00000005947160211151998700000000729805009433423282_",
                className: "st1 da-dot-marker-2 ga-footprint-map-s1",
                cx: "890",
                cy: "351",
                r: "4",
                key: 9
            }), a.createElement("circle", {
                id: "Layer_00000137127656092651879200000005093365096706466237_",
                className: "st1 da-dot-marker-3 ga-footprint-map-s1",
                cx: "816",
                cy: "308",
                r: "4",
                key: 10
            }), a.createElement("circle", {
                id: "Layer_00000167376830930776700580000001631495539067171239_",
                className: "st1 da-dot-marker-4 ga-footprint-map-s1",
                cx: "503",
                cy: "343",
                r: "4",
                key: 11
            }), a.createElement("circle", {
                id: "Layer_00000158737995013369339540000008438053114707359621_",
                className: "st1 da-dot-marker-5 ga-footprint-map-s1",
                cx: "400",
                cy: "314",
                r: "4",
                key: 12
            }), a.createElement("path", {
                id: "Layer_00000139973107769570056190000016323220780300894601_",
                className: "st2 da-marker-1 ga-footprint-map-s2",
                d: "M334,423h-36",
                key: 13
            }), a.createElement("path", {
                id: "Layer_00000003826227444087683390000016995753420402752151_",
                className: "st2 da-marker-2 ga-footprint-map-s2",
                d: "M1311,601h-36",
                key: 14
            }), a.createElement("path", {
                id: "Layer_00000110460533352468591510000003035707743166219916_",
                className: "st2 da-marker-3 ga-footprint-map-s2",
                d: "M951,352h-36",
                key: 15
            }), a.createElement("path", {
                id: "Layer_00000134233477571757447590000015231948529850289039_",
                className: "st2 da-marker-4 ga-footprint-map-s2",
                d: "M791,309h-36",
                key: 16
            }), a.createElement("path", {
                id: "Layer_00000111914055815040131080000017668770174766556290_",
                className: "st2 da-marker-5 ga-footprint-map-s2",
                d: "M504,368v36",
                key: 17
            }), a.createElement("path", {
                id: "Layer_00000054265346391637031170000000669804090072596880_",
                className: "st2 da-marker-6 ga-footprint-map-s2",
                d: "M817,333v36",
                key: 18
            }), a.createElement("path", {
                id: "Layer_00000049908445170470562800000015596030373590244273_",
                className: "st2 da-marker-7 ga-footprint-map-s2",
                d: "M375,315h-36",
                key: 19
            }), a.createElement("path", {
                id: "Layer_00000033362631652218503650000013783785993178314390_",
                className: "st3 da-marker-8 ga-footprint-map-s2",
                d: "M236.5,424.7h-6.1l-1.6,4.3h-2l5.6-14h2.2\r\n\tl5.6,14h-2L236.5,424.7z M235.8,423l-1.8-4.6c-0.1-0.5-0.3-1-0.5-1.7h-0.1c-0.1,0.7-0.3,1.2-0.5,1.7l-1.8,4.6H235.8z M250.6,427.5\r\n\tc0,0.5,0,1,0,1.5h-1.7c0-0.5,0-0.9,0-1.2v-0.5c-0.3,0.7-0.7,1.2-1.3,1.5c-0.6,0.4-1.3,0.6-2,0.6c-1.2,0-2.2-0.4-2.9-1.2\r\n\tc-0.7-0.7-1.1-1.8-1.1-3.3v-6.2h1.8v6c0,2.1,0.9,3.1,2.6,3.1c0.8,0,1.5-0.3,2-1c0.5-0.6,0.8-1.5,0.8-2.6v-5.5h1.8L250.6,427.5z\r\n\t M254.6,426c0.1,0.6,0.4,1.1,0.9,1.4s1,0.4,1.7,0.4c0.6,0,1.1-0.1,1.5-0.4s0.6-0.7,0.6-1.1s-0.1-0.7-0.4-0.9\r\n\tc-0.2-0.3-0.6-0.4-1.1-0.5l-1.8-0.5c-0.9-0.2-1.6-0.5-2.1-1s-0.7-1.2-0.7-2c0-0.6,0.2-1.1,0.5-1.6c0.4-0.5,0.9-0.8,1.4-1.1\r\n\tc0.6-0.3,1.2-0.4,1.9-0.4c1.1,0,1.9,0.2,2.5,0.7c0.7,0.5,1.1,1.1,1.3,1.8l-1.7,0.6c-0.1-0.5-0.4-0.9-0.7-1.2\r\n\tc-0.3-0.3-0.8-0.4-1.4-0.4c-0.5,0-1,0.1-1.4,0.4s-0.6,0.7-0.6,1.2c0,0.7,0.5,1.2,1.5,1.5l1.9,0.4c0.8,0.2,1.4,0.6,1.9,1.1\r\n\ts0.8,1.1,0.8,1.9c0,0.5-0.2,1.1-0.6,1.6c-0.3,0.5-0.8,0.8-1.4,1.1c-0.6,0.2-1.2,0.3-1.9,0.3c-0.8,0-1.5-0.1-2.2-0.4\r\n\tc-0.6-0.3-1.1-0.6-1.4-1c-0.4-0.4-0.7-0.8-0.8-1.3L254.6,426z M265.8,420.1v6c0,0.5,0.1,0.9,0.3,1.1c0.3,0.2,0.6,0.3,1,0.3\r\n\tc0.3,0,0.6-0.1,0.9-0.2v1.6c-0.4,0.1-0.8,0.2-1.2,0.2c-0.9,0-1.6-0.2-2.1-0.7s-0.7-1.2-0.7-2v-6.3h-1.7v-1.5h1.7v-2.1l1.8-0.5v2.6\r\n\th2.2v1.5H265.8z M271.3,417.1c-0.3,0-0.6-0.1-0.9-0.4c-0.2-0.2-0.3-0.5-0.3-0.8s0.1-0.6,0.3-0.9c0.3-0.3,0.6-0.4,0.9-0.4\r\n\ts0.6,0.1,0.9,0.4s0.4,0.6,0.4,0.9s-0.1,0.5-0.4,0.8S271.6,417.1,271.3,417.1z M270.4,418.6h1.8v10.3h-1.8V418.6z M280.7,418.3\r\n\tc0.7,0,1.4,0.2,2,0.5s1.1,0.8,1.4,1.5s0.5,1.5,0.5,2.4v6.3h-1.8v-6c0-1.1-0.2-1.9-0.6-2.4s-1-0.7-1.9-0.7c-0.5,0-1,0.1-1.5,0.4\r\n\ts-0.8,0.7-1.1,1.2c-0.3,0.5-0.4,1.2-0.4,1.9v5.6h-1.8v-10.4h1.7v2c0.3-0.7,0.8-1.3,1.4-1.7C279.3,418.5,280,418.3,280.7,418.3\r\n\tL280.7,418.3z",
                key: 20
            }), a.createElement("path", {
                id: "Layer_00000134212899412247358970000011360616754416892851_",
                className: "st3 da-fp-cline",
                d: "M1172.6,607.3c-0.9,0-1.8-0.2-2.6-0.5\r\n\tc-0.7-0.3-1.3-0.8-1.8-1.3c-0.5-0.6-0.8-1.2-1-1.9l1.8-0.6c0.3,0.8,0.7,1.4,1.3,1.9s1.4,0.7,2.4,0.7c0.8,0,1.5-0.2,2.1-0.6\r\n\tc0.5-0.5,0.8-1,0.8-1.6c0-0.5-0.1-0.9-0.4-1.2s-0.7-0.6-1.3-0.8l-2.9-0.9c-1-0.3-1.8-0.7-2.3-1.4c-0.6-0.7-0.9-1.5-0.9-2.4\r\n\tc0-0.8,0.2-1.5,0.7-2.1c0.4-0.7,1-1.1,1.7-1.4c0.7-0.3,1.5-0.5,2.3-0.5c1.3,0,2.4,0.3,3.2,0.9c0.8,0.6,1.3,1.4,1.6,2.4l-1.8,0.7\r\n\tc-0.5-1.6-1.5-2.4-3-2.4c-0.8,0-1.5,0.2-2,0.7s-0.8,1-0.8,1.7c0,0.5,0.1,0.9,0.4,1.3c0.3,0.3,0.8,0.6,1.3,0.7l3.1,1\r\n\tc0.9,0.3,1.7,0.7,2.2,1.3s0.8,1.4,0.8,2.3c0,0.8-0.2,1.5-0.7,2.1c-0.4,0.6-1,1.1-1.7,1.4S1173.5,607.3,1172.6,607.3L1172.6,607.3z\r\n\t M1181,595.1c-0.4,0-0.7-0.1-0.9-0.3c-0.3-0.3-0.4-0.6-0.4-0.9c0-0.3,0.1-0.6,0.4-0.8c0.2-0.3,0.5-0.4,0.9-0.4\r\n\tc0.3,0,0.6,0.1,0.8,0.4c0.3,0.2,0.4,0.5,0.4,0.8s-0.1,0.6-0.4,0.9C1181.6,595,1181.3,595.1,1181,595.1z M1180.1,596.6h1.8V607h-1.8\r\n\tV596.6z M1190.4,596.3c0.7,0,1.3,0.1,1.9,0.4c0.6,0.3,1.1,0.8,1.4,1.5s0.5,1.5,0.6,2.5v6.3h-1.8v-6.1c-0.1-1.1-0.3-1.8-0.7-2.3\r\n\ts-1-0.7-1.8-0.7c-0.5,0-1,0.1-1.5,0.4s-0.9,0.7-1.2,1.2c-0.3,0.5-0.4,1.2-0.4,1.9v5.6h-1.8v-10.4h1.7v2c0.3-0.8,0.8-1.4,1.5-1.8\r\n\tC1188.9,596.5,1189.6,596.3,1190.4,596.3L1190.4,596.3z M1206.9,596.6v8.1c0,1.3-0.3,2.3-0.8,3.2s-1.1,1.6-2,2\r\n\tc-0.8,0.4-1.7,0.6-2.6,0.6c-1.3,0-2.4-0.3-3.3-0.9c-0.9-0.7-1.6-1.5-1.9-2.4l1.7-0.7c0.3,0.7,0.7,1.3,1.3,1.8\r\n\tc0.6,0.4,1.3,0.6,2.2,0.6c1.1,0,2-0.3,2.7-1c0.6-0.7,0.9-1.8,0.9-3.1v-0.4c-0.3,0.6-0.8,1.1-1.5,1.4c-0.6,0.3-1.3,0.5-2,0.5\r\n\tc-0.9,0-1.7-0.2-2.4-0.6c-0.7-0.4-1.3-1-1.8-1.8c-0.5-0.7-0.7-1.6-0.7-2.6s0.2-1.9,0.7-2.7c0.5-0.7,1.1-1.3,1.8-1.7\r\n\tc0.7-0.4,1.5-0.6,2.4-0.6c0.7,0,1.4,0.2,2,0.5c0.7,0.3,1.2,0.8,1.6,1.5l-0.1-1.7L1206.9,596.6z M1201.9,604.8c0.6,0,1.1-0.2,1.6-0.5\r\n\ts0.9-0.7,1.2-1.2c0.3-0.5,0.5-1.1,0.5-1.8s-0.2-1.3-0.5-1.8s-0.7-0.9-1.2-1.2s-1-0.4-1.6-0.4c-0.9,0-1.7,0.3-2.4,0.9\r\n\tc-0.6,0.6-0.9,1.4-0.9,2.5c0,0.7,0.1,1.3,0.4,1.8s0.7,0.9,1.2,1.2S1201.3,604.8,1201.9,604.8L1201.9,604.8z M1218,605.6\r\n\tc0,0.5,0,0.9,0,1.4h-1.6c-0.1-0.4-0.1-0.8-0.1-1.3v-0.3c-0.3,0.6-0.7,1.1-1.3,1.4c-0.6,0.3-1.3,0.4-2,0.4c-0.6,0-1.2-0.1-1.7-0.3\r\n\tc-0.5-0.3-1-0.6-1.4-1.1c-0.3-0.5-0.5-1.1-0.5-1.8s0.2-1.2,0.7-1.7c0.4-0.5,1.1-0.9,2-1l3.3-0.7c0.5-0.1,0.7-0.3,0.7-0.7\r\n\tc0-0.6-0.2-1.1-0.5-1.5c-0.4-0.4-1-0.6-1.7-0.6s-1.3,0.2-1.7,0.6c-0.5,0.4-0.8,0.9-0.9,1.4l-1.7-0.6c0.1-0.5,0.4-0.9,0.8-1.4\r\n\ts0.9-0.8,1.5-1.1s1.3-0.4,2-0.4c1.3,0,2.3,0.4,3,1.1c0.7,0.7,1.1,1.8,1.1,3.2L1218,605.6z M1213.4,605.9c0.7,0,1.4-0.3,2-0.8\r\n\tc0.5-0.5,0.8-1.2,0.8-2.1v-1.2c-0.1,0.1-0.4,0.1-0.8,0.2l-2.8,0.6c-0.9,0.2-1.4,0.7-1.4,1.5c0,0.5,0.2,0.9,0.6,1.3\r\n\tC1212.3,605.7,1212.8,605.9,1213.4,605.9L1213.4,605.9z M1226.7,596.3c0.9,0,1.7,0.2,2.4,0.7c0.7,0.4,1.3,1,1.8,1.9\r\n\tc0.5,0.8,0.7,1.8,0.7,2.9c0,1.1-0.2,2-0.7,2.9s-1.1,1.5-1.8,1.9c-0.7,0.5-1.5,0.7-2.4,0.7s-1.6-0.2-2.3-0.6\r\n\tc-0.7-0.4-1.2-0.9-1.5-1.6v5.1h-1.8v-13.6h1.7v2.1c0.3-0.7,0.8-1.3,1.5-1.7C1225,596.5,1225.8,596.3,1226.7,596.3L1226.7,596.3z\r\n\t M1226.4,605.7c1,0,1.8-0.4,2.4-1.1c0.6-0.7,0.9-1.7,1-2.8c-0.1-1.2-0.4-2.1-1-2.8s-1.4-1-2.4-1c-0.7,0-1.3,0.1-1.8,0.4\r\n\tc-0.5,0.3-0.9,0.8-1.2,1.4c-0.3,0.6-0.5,1.3-0.5,2s0.2,1.4,0.5,2s0.7,1.1,1.2,1.4C1225.1,605.5,1225.7,605.7,1226.4,605.7\r\n\tL1226.4,605.7z M1235.9,606.6c-0.8-0.5-1.5-1.1-2-2c-0.5-0.8-0.7-1.7-0.7-2.8s0.2-2,0.7-2.8c0.5-0.9,1.2-1.5,2-2s1.7-0.7,2.7-0.7\r\n\ts1.9,0.2,2.7,0.7c0.8,0.5,1.5,1.1,2,2c0.5,0.8,0.7,1.7,0.7,2.8s-0.2,2-0.7,2.8c-0.5,0.9-1.2,1.5-2,2s-1.7,0.7-2.7,0.7\r\n\tS1236.7,607.1,1235.9,606.6z M1240.4,605.2c0.5-0.3,1-0.8,1.3-1.3c0.3-0.6,0.5-1.3,0.5-2.1c0-0.7-0.2-1.4-0.5-2s-0.8-1.1-1.3-1.4\r\n\tc-0.5-0.3-1.1-0.5-1.8-0.5c-0.7,0-1.3,0.2-1.8,0.5s-1,0.8-1.3,1.4c-0.3,0.6-0.5,1.3-0.5,2c0,0.8,0.2,1.5,0.5,2.1\r\n\tc0.3,0.5,0.8,1,1.3,1.3s1.1,0.5,1.8,0.5S1239.9,605.5,1240.4,605.2z M1250.5,596.5c0.3,0,0.5,0,0.8,0.1v1.8\r\n\tc-0.2-0.1-0.5-0.1-0.8-0.1c-0.7,0-1.3,0.2-1.7,0.7c-0.4,0.5-0.6,1.2-0.6,1.9v6.1h-1.8v-10.4h1.8v1.9c0.1-0.7,0.4-1.2,0.9-1.5\r\n\tC1249.5,596.7,1250,596.5,1250.5,596.5L1250.5,596.5z M1262.3,601.4c0,0.1,0,0.4-0.1,0.8h-7.9c0,0.7,0.2,1.4,0.5,1.9\r\n\ts0.7,0.9,1.2,1.2s1,0.4,1.6,0.4c1.4,0,2.3-0.6,2.8-1.9l1.7,0.7c-0.3,0.8-0.9,1.5-1.7,2c-0.7,0.5-1.7,0.8-2.8,0.8\r\n\tc-1,0-1.9-0.2-2.7-0.6c-0.7-0.5-1.3-1.1-1.8-2c-0.5-0.8-0.7-1.8-0.7-2.9c0-1.1,0.2-2,0.7-2.8c0.5-0.9,1.1-1.5,1.9-2\r\n\tc0.7-0.5,1.6-0.7,2.5-0.7s1.7,0.2,2.4,0.6c0.7,0.4,1.3,1,1.7,1.7C1262.1,599.4,1262.3,600.3,1262.3,601.4L1262.3,601.4z\r\n\t M1257.5,597.8c-0.9,0-1.6,0.3-2.1,0.8c-0.6,0.6-1,1.3-1.1,2.2h6.2c-0.1-0.9-0.4-1.7-0.9-2.2C1259,598.1,1258.3,597.8,1257.5,597.8z\r\n\t",
                key: 21
            }), a.createElement("circle", {
                id: "Layer_00000157279772850546766220000012137964661316501927_",
                className: "st0 da-marker-8 ga-footprint-map-s0",
                cx: "1146.3",
                cy: "470",
                r: "24.3",
                key: 22
            }), a.createElement("circle", {
                id: "Layer_00000088842080031413143550000012455206529039405955_",
                className: "st1 da-dot-marker-8 ga-footprint-map-s1",
                cx: "1146.3",
                cy: "470",
                r: "4",
                key: 23
            }), a.createElement("path", {
                id: "Layer_00000142158482415183684520000003194267084094150062_",
                className: "st2 da-marker-1 ga-footprint-map-s2",
                d: "M1121.3,471h-36",
                key: 24
            }), a.createElement("path", {
                id: "Layer_00000030473560945704582540000005511394685449131426_",
                className: "st3 ga-footprint-map-s3",
                d: "M977.4,350.8c0.1,0.5,0.1,1,0.1,1.3\r\n\tc0,1.3-0.3,2.5-0.9,3.4c-0.5,0.9-1.3,1.6-2.3,2.1c-0.9,0.5-2,0.7-3.2,0.7c-1.3,0-2.5-0.3-3.6-0.9c-1.1-0.7-2-1.6-2.6-2.7\r\n\tc-0.7-1.1-1-2.4-1-3.7c0-1.4,0.3-2.7,1-3.8c0.6-1.1,1.5-1.9,2.6-2.6c1.1-0.6,2.3-0.9,3.6-0.9c1.5,0,2.8,0.3,3.7,0.9\r\n\tc1,0.7,1.7,1.5,2.2,2.6l-1.8,0.8c-0.7-1.7-2.1-2.6-4.1-2.6c-1,0-1.9,0.3-2.7,0.8c-0.7,0.5-1.3,1.1-1.8,2s-0.7,1.8-0.7,2.8\r\n\ts0.2,1.9,0.7,2.8s1.1,1.5,1.9,2c0.8,0.5,1.7,0.8,2.6,0.8c1.3,0,2.4-0.4,3.2-1.2c0.8-0.7,1.2-1.7,1.2-2.9h-4.8v-1.7L977.4,350.8z\r\n\t M989.2,352.4c0,0.1,0,0.4,0,0.8h-7.9c0,0.7,0.1,1.4,0.4,1.9c0.3,0.5,0.7,0.9,1.2,1.2c0.5,0.3,1.1,0.4,1.7,0.4\r\n\tc1.4,0,2.3-0.6,2.8-1.9l1.6,0.7c-0.3,0.8-0.8,1.5-1.6,2s-1.7,0.8-2.8,0.8c-1,0-1.9-0.2-2.7-0.6c-0.8-0.5-1.4-1.1-1.8-2\r\n\tc-0.5-0.8-0.7-1.8-0.7-2.9s0.2-2,0.7-2.8c0.5-0.9,1.1-1.5,1.8-2c0.8-0.5,1.7-0.7,2.6-0.7c0.9,0,1.7,0.2,2.4,0.6s1.3,1,1.7,1.7\r\n\tC989,350.4,989.2,351.3,989.2,352.4z M984.5,348.8c-0.9,0-1.6,0.3-2.2,0.8c-0.5,0.6-0.9,1.3-1,2.2h6.1c0-0.9-0.3-1.7-0.8-2.2\r\n\tC986,349.1,985.3,348.8,984.5,348.8z M997,347.3c0.7,0,1.3,0.2,1.9,0.5c0.6,0.3,1.1,0.8,1.4,1.5c0.3,0.7,0.5,1.5,0.5,2.4v6.3H999v-6\r\n\tc0-1.1-0.2-1.9-0.6-2.4c-0.4-0.5-1-0.7-1.8-0.7c-0.5,0-1,0.1-1.5,0.4s-0.9,0.7-1.2,1.2s-0.4,1.2-0.4,1.9v5.6h-1.8v-10.4h1.7v2\r\n\tc0.3-0.7,0.8-1.3,1.4-1.7C995.5,347.5,996.2,347.3,997,347.3L997,347.3z M1012.9,352.4c0,0.1,0,0.4,0,0.8h-8c0,0.7,0.2,1.4,0.5,1.9\r\n\ts0.7,0.9,1.2,1.2c0.5,0.3,1,0.4,1.6,0.4c1.4,0,2.4-0.6,2.9-1.9l1.6,0.7c-0.3,0.8-0.9,1.5-1.6,2c-0.8,0.5-1.8,0.8-2.9,0.8\r\n\tc-1,0-1.9-0.2-2.6-0.6c-0.8-0.5-1.4-1.1-1.9-2c-0.4-0.8-0.6-1.8-0.6-2.9s0.2-2,0.7-2.8c0.4-0.9,1-1.5,1.8-2s1.6-0.7,2.5-0.7\r\n\ts1.7,0.2,2.4,0.6s1.3,1,1.8,1.7C1012.7,350.4,1012.9,351.3,1012.9,352.4z M1008.1,348.8c-0.8,0-1.5,0.3-2.1,0.8\r\n\tc-0.6,0.6-0.9,1.3-1,2.2h6.1c0-0.9-0.3-1.7-0.9-2.2C1009.7,349.1,1009,348.8,1008.1,348.8z M1013.7,347.6h2l2.5,6.9\r\n\tc0.2,0.5,0.4,1,0.6,1.7h0.1c0.1-0.7,0.3-1.2,0.5-1.7l2.6-6.9h1.9l-4,10.4h-2.1L1013.7,347.6z M1033.4,356.6c0,0.5,0,0.9,0.1,1.4\r\n\th-1.7c0-0.4,0-0.8,0-1.3v-0.3c-0.3,0.6-0.8,1.1-1.4,1.4c-0.5,0.3-1.2,0.4-1.9,0.4c-0.6,0-1.2-0.1-1.7-0.3c-0.6-0.3-1.1-0.6-1.4-1.1\r\n\ts-0.5-1.1-0.5-1.8s0.2-1.2,0.6-1.7c0.5-0.5,1.1-0.9,2-1l3.4-0.7c0.5-0.1,0.7-0.3,0.7-0.7c0-0.6-0.2-1.1-0.6-1.5\r\n\tc-0.3-0.4-0.9-0.6-1.6-0.6s-1.3,0.2-1.8,0.6c-0.4,0.4-0.7,0.9-0.8,1.4l-1.7-0.6c0.1-0.5,0.4-0.9,0.7-1.4c0.4-0.5,0.9-0.8,1.5-1.1\r\n\tc0.6-0.3,1.3-0.4,2.1-0.4c1.3,0,2.3,0.4,3,1.1s1,1.8,1,3.2L1033.4,356.6z M1028.9,356.9c0.7,0,1.4-0.3,1.9-0.8\r\n\tc0.6-0.5,0.9-1.2,0.9-2.1v-1.2c-0.1,0.1-0.4,0.1-0.8,0.2l-2.9,0.6c-0.9,0.2-1.4,0.7-1.4,1.5c0,0.5,0.2,0.9,0.7,1.3\r\n\tC1027.7,356.7,1028.2,356.9,1028.9,356.9L1028.9,356.9z",
                key: 25
            }), a.createElement("path", {
                id: "Layer_00000080185419065691603910000003814641445653162889_",
                className: "st3",
                d: "M680.9,313.3v1.7h-9.5v-14h1.8v12.3H680.9z\r\n\t M684.6,314.6c-0.9-0.5-1.5-1.1-2-2c-0.5-0.8-0.7-1.7-0.7-2.8c0-1.1,0.2-2,0.7-2.8c0.5-0.9,1.1-1.5,1.9-2c0.9-0.5,1.8-0.7,2.8-0.7\r\n\tc0.9,0,1.8,0.2,2.7,0.7c0.8,0.5,1.4,1.1,1.9,2c0.5,0.8,0.8,1.7,0.8,2.8c0,1.1-0.3,2-0.8,2.8c-0.5,0.9-1.1,1.5-1.9,2\r\n\tc-0.9,0.5-1.8,0.7-2.7,0.7C686.3,315.3,685.4,315.1,684.6,314.6z M689.1,313.2c0.5-0.3,1-0.8,1.3-1.3c0.3-0.6,0.4-1.3,0.4-2.1\r\n\tc0-0.7-0.1-1.4-0.4-2c-0.3-0.6-0.8-1.1-1.3-1.4c-0.6-0.3-1.2-0.5-1.8-0.5c-0.7,0-1.3,0.2-1.8,0.5s-1,0.8-1.3,1.4s-0.5,1.3-0.5,2\r\n\tc0,0.8,0.2,1.5,0.5,2.1c0.3,0.5,0.8,1,1.3,1.3s1.1,0.5,1.8,0.5C687.9,313.7,688.5,313.5,689.1,313.2z M700.4,304.3\r\n\tc0.7,0,1.3,0.2,1.9,0.5s1.1,0.8,1.4,1.5c0.3,0.7,0.5,1.5,0.5,2.4v6.3h-1.8v-6c0-1.1-0.2-1.9-0.6-2.4c-0.4-0.5-1-0.7-1.8-0.7\r\n\tc-0.5,0-1,0.1-1.5,0.4s-0.9,0.7-1.2,1.2s-0.4,1.2-0.4,1.9v5.6h-1.8v-10.4h1.7v2c0.3-0.7,0.8-1.3,1.4-1.7\r\n\tC698.9,304.5,699.6,304.3,700.4,304.3L700.4,304.3z M716.8,313.6c0,0.4,0,0.9,0.1,1.4h-1.7c-0.1-0.5-0.1-1-0.1-1.4v-0.3\r\n\tc-0.3,0.6-0.8,1.1-1.4,1.5c-0.6,0.3-1.3,0.5-2.1,0.5c-0.9,0-1.8-0.2-2.5-0.7c-0.8-0.5-1.4-1.1-1.9-1.9c-0.5-0.9-0.7-1.8-0.7-2.9\r\n\ts0.2-2.1,0.7-2.9c0.5-0.9,1.1-1.5,1.9-1.9c0.7-0.5,1.5-0.7,2.4-0.7c0.8,0,1.5,0.2,2.1,0.5s1.1,0.8,1.4,1.3v-5.3h1.8V313.6z\r\n\t M711.7,313.7c1,0,1.8-0.4,2.4-1.1c0.6-0.7,0.9-1.6,0.9-2.8c0-1.2-0.3-2.1-0.9-2.8s-1.4-1-2.4-1c-0.6,0-1.2,0.2-1.7,0.5\r\n\ts-1,0.7-1.3,1.3c-0.3,0.6-0.4,1.3-0.4,2s0.1,1.4,0.4,2c0.3,0.6,0.8,1.1,1.3,1.4S711.1,313.7,711.7,313.7z M721.9,314.6\r\n\tc-0.8-0.5-1.4-1.1-1.9-2c-0.5-0.8-0.8-1.7-0.8-2.8c0-1.1,0.3-2,0.8-2.8c0.5-0.9,1.1-1.5,1.9-2c0.8-0.5,1.7-0.7,2.7-0.7\r\n\ts1.9,0.2,2.7,0.7c0.9,0.5,1.5,1.1,2,2c0.5,0.8,0.7,1.7,0.7,2.8c0,1.1-0.2,2-0.7,2.8c-0.5,0.9-1.1,1.5-2,2c-0.8,0.5-1.7,0.7-2.7,0.7\r\n\tC723.7,315.3,722.8,315.1,721.9,314.6z M726.4,313.2c0.6-0.3,1-0.8,1.3-1.3c0.3-0.6,0.5-1.3,0.5-2.1c0-0.7-0.2-1.4-0.5-2\r\n\ts-0.7-1.1-1.3-1.4c-0.5-0.3-1.1-0.5-1.8-0.5c-0.6,0-1.2,0.2-1.8,0.5c-0.5,0.3-1,0.8-1.3,1.4s-0.4,1.3-0.4,2c0,0.8,0.1,1.5,0.4,2.1\r\n\tc0.3,0.5,0.8,1,1.3,1.3c0.6,0.3,1.2,0.5,1.8,0.5C725.3,313.7,725.9,313.5,726.4,313.2z M737.7,304.3c0.7,0,1.4,0.2,2,0.5\r\n\ts1.1,0.8,1.4,1.5s0.5,1.5,0.5,2.4v6.3h-1.8v-6c0-1.1-0.2-1.9-0.6-2.4c-0.4-0.5-1-0.7-1.9-0.7c-0.5,0-1,0.1-1.5,0.4s-0.8,0.7-1.1,1.2\r\n\ts-0.4,1.2-0.4,1.9v5.6h-1.8v-10.4h1.7v2c0.3-0.7,0.8-1.3,1.4-1.7C736.3,304.5,737,304.3,737.7,304.3L737.7,304.3z",
                key: 26
            }), a.createElement("path", {
                id: "Layer_00000019677458881677198170000001641284727059522738_",
                className: "st3",
                d: "M460.8,419h2l6.5,9.3c0.5,0.7,0.9,1.4,1.2,2\r\n\tc0-0.9,0-1.7,0-2.6V419h1.8v14h-1.9l-6.5-9.3c-0.5-0.7-1-1.4-1.3-2.1c0,0.9,0,1.7,0,2.5v8.9h-1.8L460.8,419z M484.6,427.4\r\n\tc0,0.1,0,0.4,0,0.8h-8c0,0.7,0.2,1.4,0.5,1.9s0.7,0.9,1.2,1.2c0.5,0.3,1,0.4,1.6,0.4c1.4,0,2.4-0.6,2.9-1.9l1.6,0.7\r\n\tc-0.3,0.8-0.9,1.5-1.6,2c-0.8,0.5-1.8,0.8-2.9,0.8c-1,0-1.9-0.2-2.6-0.6c-0.8-0.5-1.4-1.1-1.9-2c-0.4-0.8-0.6-1.8-0.6-2.9\r\n\ts0.2-2,0.7-2.8c0.4-0.9,1-1.5,1.8-2s1.6-0.7,2.5-0.7s1.7,0.2,2.4,0.6c0.7,0.4,1.3,1,1.8,1.7C484.4,425.4,484.6,426.3,484.6,427.4z\r\n\t M479.8,423.8c-0.8,0-1.5,0.3-2.1,0.8c-0.6,0.6-0.9,1.3-1,2.2h6.1c0-0.9-0.3-1.7-0.9-2.2C481.4,424.1,480.7,423.8,479.8,423.8z\r\n\t M485.6,422.6h1.8l1.9,6.3c0.1,0.5,0.3,1.1,0.4,1.8c0.1-0.7,0.3-1.3,0.4-1.8l1.9-6.2h2.3l1.9,6.2c0.1,0.5,0.3,1.1,0.4,1.8\r\n\tc0.1-0.7,0.3-1.3,0.4-1.8l1.8-6.3h1.9l-3.2,10.4h-1.8l-2.1-6.6c-0.1-0.5-0.3-1.1-0.4-1.8h-0.1c-0.1,0.7-0.3,1.3-0.4,1.8l-2.1,6.6\r\n\th-1.9L485.6,422.6z M508.1,419l3.6,6.1c0.3,0.4,0.5,0.9,0.8,1.4l0.8-1.4l3.7-6.1h2l-5.6,9.3v4.7h-1.8v-4.7L506,419H508.1z\r\n\t M521.2,432.6c-0.8-0.5-1.5-1.1-2-2s-0.7-1.8-0.7-2.8c0-1.1,0.2-2,0.7-2.9c0.5-0.8,1.2-1.4,2-1.9s1.7-0.7,2.7-0.7s1.9,0.2,2.7,0.7\r\n\ts1.5,1.1,2,1.9c0.5,0.9,0.7,1.8,0.7,2.9c0,1-0.2,1.9-0.7,2.8s-1.2,1.5-2,2s-1.7,0.7-2.7,0.7C522.9,433.3,522,433.1,521.2,432.6z\r\n\t M525.7,431.2c0.5-0.3,1-0.8,1.3-1.4s0.5-1.3,0.5-2c0-0.8-0.2-1.5-0.5-2c-0.3-0.6-0.8-1.1-1.3-1.4s-1.1-0.5-1.8-0.5\r\n\ts-1.3,0.2-1.8,0.5s-1,0.8-1.3,1.4c-0.3,0.5-0.5,1.2-0.5,2c0,0.7,0.2,1.4,0.5,2s0.8,1.1,1.3,1.4s1.1,0.5,1.8,0.5\r\n\tC524.6,431.7,525.2,431.5,525.7,431.2z M535.8,422.5c0.3,0,0.6,0,0.9,0.1v1.7c-0.3,0-0.6,0-0.9,0c-0.7,0-1.3,0.2-1.7,0.7\r\n\tc-0.3,0.5-0.5,1.1-0.5,1.9v6.1h-1.8v-10.4h1.7v1.8c0.1-0.6,0.4-1.1,0.9-1.4C534.8,422.7,535.3,422.5,535.8,422.5L535.8,422.5z\r\n\t M541.8,428.2l-1.1,1.2v3.6h-1.8v-14.2h1.8v8.3l4.1-4.5h2.2l-4,4.4l4.8,6h-2.2L541.8,428.2z",
                key: 27
            }), a.createElement("path", {
                id: "Layer_00000108303251990973427210000014606835932930565287_",
                className: "st3",
                d: "M789.9,398.2c-0.7,0-1.3-0.1-1.9-0.3v-1.7\r\n\tc0.6,0.2,1.1,0.3,1.6,0.3c0.6,0,1.1-0.1,1.4-0.4c0.3-0.3,0.4-0.8,0.4-1.4V384h1.9v10.9c0,1.1-0.3,1.9-1,2.5\r\n\tC791.7,397.9,790.9,398.2,789.9,398.2L789.9,398.2z M805.4,392.4c0,0.1,0,0.4,0,0.8h-8c0.1,0.7,0.2,1.4,0.5,1.9s0.7,0.9,1.2,1.2\r\n\tc0.5,0.3,1.1,0.4,1.6,0.4c1.4,0,2.4-0.6,2.9-1.9l1.6,0.7c-0.3,0.8-0.8,1.5-1.6,2s-1.8,0.8-2.9,0.8c-0.9,0-1.8-0.2-2.6-0.6\r\n\tc-0.8-0.5-1.4-1.1-1.8-2c-0.5-0.8-0.7-1.8-0.7-2.9s0.2-2,0.7-2.8c0.5-0.9,1.1-1.5,1.8-2c0.8-0.5,1.7-0.7,2.6-0.7\r\n\tc0.9,0,1.6,0.2,2.3,0.6s1.3,1,1.8,1.7C805.2,390.4,805.4,391.3,805.4,392.4L805.4,392.4z M800.7,388.8c-0.9,0-1.6,0.3-2.2,0.8\r\n\tc-0.5,0.6-0.9,1.3-1,2.2h6.1c0-0.9-0.3-1.7-0.9-2.2C802.2,389.1,801.5,388.8,800.7,388.8L800.7,388.8z M812,387.5\r\n\tc0.2,0,0.5,0,0.8,0.1v1.8c-0.3-0.1-0.6-0.1-0.9-0.1c-0.7,0-1.3,0.2-1.6,0.7c-0.4,0.5-0.6,1.2-0.6,1.9v6.1h-1.8v-10.4h1.7v1.9\r\n\tc0.2-0.7,0.5-1.2,0.9-1.5C811,387.7,811.5,387.5,812,387.5L812,387.5z M815.6,395c0.2,0.6,0.5,1.1,1,1.4c0.4,0.3,0.9,0.4,1.6,0.4\r\n\ts1.2-0.1,1.5-0.4c0.4-0.3,0.6-0.7,0.6-1.1s-0.1-0.7-0.3-0.9c-0.3-0.3-0.7-0.4-1.2-0.5l-1.8-0.5c-0.9-0.2-1.5-0.5-2-1s-0.7-1.2-0.7-2\r\n\tc0-0.6,0.2-1.1,0.5-1.6s0.8-0.8,1.4-1.1s1.2-0.4,1.9-0.4c1,0,1.8,0.2,2.5,0.7s1.1,1.1,1.3,1.8l-1.7,0.6c-0.1-0.5-0.4-0.9-0.7-1.2\r\n\tc-0.4-0.3-0.9-0.4-1.4-0.4c-0.6,0-1.1,0.1-1.5,0.4c-0.3,0.3-0.5,0.7-0.5,1.2c0,0.7,0.5,1.2,1.4,1.5l1.9,0.4c0.9,0.2,1.5,0.6,2,1.1\r\n\ts0.7,1.1,0.7,1.9c0,0.5-0.2,1.1-0.5,1.6c-0.4,0.5-0.9,0.8-1.5,1.1c-0.6,0.2-1.2,0.3-1.9,0.3c-0.8,0-1.5-0.1-2.1-0.4s-1.1-0.6-1.5-1\r\n\tc-0.3-0.4-0.6-0.8-0.7-1.3L815.6,395z M833.6,392.4c0,0.1,0,0.4-0.1,0.8h-7.9c0,0.7,0.2,1.3,0.5,1.8s0.7,0.9,1.2,1.2\r\n\tc0.5,0.3,1,0.5,1.6,0.5c1.4,0,2.3-0.7,2.8-2l1.7,0.7c-0.3,0.8-0.9,1.5-1.7,2.1c-0.7,0.5-1.7,0.8-2.8,0.8c-1,0-1.9-0.2-2.7-0.7\r\n\tc-0.7-0.5-1.3-1.1-1.8-1.9c-0.4-0.9-0.6-1.8-0.6-2.9s0.2-2,0.6-2.9c0.5-0.9,1.1-1.5,1.9-2c0.7-0.5,1.6-0.7,2.5-0.7s1.7,0.2,2.4,0.6\r\n\ts1.3,1,1.7,1.8C833.4,390.3,833.6,391.3,833.6,392.4L833.6,392.4z M828.8,388.8c-0.8,0-1.5,0.3-2.1,0.8s-1,1.2-1.1,2.1h6.2\r\n\tc0-0.9-0.3-1.6-0.9-2.1C830.4,389.1,829.7,388.8,828.8,388.8L828.8,388.8z M844.8,387.6l-5.7,13.5h-1.8l1.4-3.3l-4.3-10.2h2l2.6,6.3\r\n\tc0.2,0.6,0.4,1.3,0.6,2h0.1c0.2-0.7,0.4-1.4,0.7-2l2.5-6.3H844.8z",
                key: 28
            }), a.createElement("path", {
                id: "Layer_00000001624795496901060400000007562926591280089472_",
                className: "st3",
                d: "M254.9,321.3c-1.3,0-2.5-0.3-3.6-0.9\r\n\tc-1.1-0.7-1.9-1.5-2.6-2.6c-0.6-1.1-0.9-2.4-0.9-3.8s0.3-2.7,0.9-3.8c0.7-1.1,1.5-1.9,2.6-2.6c1.1-0.6,2.3-0.9,3.6-0.9\r\n\tc1.5,0,2.8,0.4,3.9,1.1s1.8,1.7,2.2,2.8l-1.9,0.8c-0.3-0.9-0.7-1.6-1.4-2.1c-0.7-0.6-1.6-0.9-2.8-0.9c-1,0-1.9,0.3-2.6,0.8\r\n\tc-0.8,0.5-1.4,1.1-1.9,2c-0.4,0.9-0.6,1.8-0.6,2.8s0.2,1.9,0.6,2.8c0.5,0.9,1.1,1.5,1.9,2c0.7,0.5,1.6,0.8,2.6,0.8\r\n\tc1.2,0,2.1-0.3,2.8-0.9c0.7-0.5,1.2-1.2,1.5-2.1l1.9,0.7c-0.5,1.2-1.2,2.2-2.3,2.9S256.4,321.3,254.9,321.3L254.9,321.3z\r\n\t M268.8,310.3c0.7,0,1.4,0.2,1.9,0.5c0.6,0.3,1.1,0.8,1.4,1.5c0.4,0.7,0.6,1.5,0.6,2.4v6.3h-1.8v-6c0-1.1-0.2-1.9-0.7-2.4\r\n\tc-0.4-0.5-1-0.7-1.8-0.7c-0.5,0-1,0.1-1.5,0.4s-0.8,0.7-1.1,1.2c-0.3,0.5-0.5,1.2-0.5,1.9v5.6h-1.8v-14.2h1.8l0.1,5.8\r\n\tc0.2-0.7,0.6-1.3,1.3-1.7C267.3,310.5,268,310.3,268.8,310.3L268.8,310.3z M276.6,309.1c-0.3,0-0.6-0.1-0.9-0.3\r\n\tc-0.2-0.3-0.3-0.6-0.3-0.9s0.1-0.6,0.3-0.8c0.3-0.3,0.6-0.4,0.9-0.4c0.4,0,0.7,0.1,0.9,0.4c0.3,0.2,0.4,0.5,0.4,0.8\r\n\ts-0.1,0.6-0.4,0.9C277.3,309,277,309.1,276.6,309.1z M275.7,310.6h1.8V321h-1.8V310.6z M285.3,321.3c-1,0-1.9-0.2-2.7-0.7\r\n\ts-1.4-1.1-1.9-2c-0.5-0.8-0.7-1.7-0.7-2.8c0-1.1,0.2-2,0.7-2.9c0.5-0.8,1.1-1.4,1.9-1.9s1.7-0.7,2.7-0.7c1.1,0,2.1,0.3,2.9,0.8\r\n\tc0.8,0.6,1.4,1.4,1.7,2.3l-1.8,0.6c-0.2-0.6-0.5-1.1-1-1.5s-1.1-0.6-1.8-0.6c-0.6,0-1.2,0.2-1.7,0.5s-1,0.8-1.3,1.4\r\n\tc-0.3,0.5-0.5,1.2-0.5,2c0,0.7,0.2,1.4,0.5,2s0.8,1.1,1.3,1.4s1.1,0.5,1.7,0.5c0.7,0,1.4-0.2,1.9-0.6s0.8-0.9,1-1.5l1.7,0.6\r\n\tc-0.3,0.9-0.9,1.7-1.7,2.2C287.4,321,286.4,321.3,285.3,321.3L285.3,321.3z M300.3,319.6c0,0.5,0,0.9,0.1,1.4h-1.7\r\n\tc-0.1-0.4-0.1-0.8-0.1-1.3v-0.3c-0.3,0.6-0.7,1.1-1.3,1.4c-0.6,0.3-1.2,0.4-1.9,0.4c-0.6,0-1.2-0.1-1.8-0.3c-0.5-0.3-1-0.6-1.3-1.1\r\n\ts-0.5-1.1-0.5-1.8s0.2-1.2,0.6-1.7c0.5-0.5,1.1-0.9,2-1l3.3-0.7c0.5-0.1,0.7-0.3,0.7-0.7c0-0.6-0.2-1.1-0.5-1.5s-0.9-0.6-1.6-0.6\r\n\ts-1.3,0.2-1.8,0.6c-0.4,0.4-0.7,0.9-0.9,1.4l-1.6-0.6c0.1-0.5,0.4-0.9,0.7-1.4c0.4-0.5,0.9-0.8,1.5-1.1c0.6-0.3,1.3-0.4,2.1-0.4\r\n\tc1.3,0,2.2,0.4,2.9,1.1c0.7,0.7,1.1,1.8,1.1,3.2L300.3,319.6z M295.8,319.9c0.7,0,1.4-0.3,1.9-0.8c0.6-0.5,0.9-1.2,0.9-2.1v-1.2\r\n\tc-0.2,0.1-0.5,0.1-0.9,0.2l-2.8,0.6c-0.9,0.2-1.4,0.7-1.4,1.5c0,0.5,0.2,0.9,0.7,1.3C294.6,319.7,295.1,319.9,295.8,319.9\r\n\tL295.8,319.9z M313,310.6v8.1c0,1.3-0.3,2.4-0.8,3.3s-1.1,1.5-1.9,1.9s-1.7,0.6-2.6,0.6c-1.3,0-2.5-0.3-3.4-0.9s-1.5-1.4-1.8-2.3\r\n\tl1.6-0.7c0.3,0.7,0.7,1.2,1.3,1.7s1.4,0.7,2.3,0.7c1.1,0,2-0.4,2.6-1.1c0.7-0.7,1-1.7,1-3v-0.5c-0.4,0.7-0.9,1.2-1.5,1.5\r\n\tc-0.7,0.3-1.4,0.5-2.1,0.5c-0.9,0-1.7-0.2-2.4-0.6c-0.7-0.5-1.3-1.1-1.8-1.8c-0.5-0.8-0.7-1.7-0.7-2.7s0.2-1.9,0.7-2.6\r\n\tc0.5-0.8,1.1-1.4,1.8-1.8c0.7-0.4,1.5-0.6,2.4-0.6c0.7,0,1.4,0.2,2.1,0.6c0.6,0.3,1.1,0.8,1.5,1.4v-1.7H313z M308,318.8\r\n\tc0.5,0,1.1-0.1,1.6-0.4s0.8-0.8,1.1-1.3c0.3-0.5,0.5-1.1,0.5-1.8c0-0.7-0.2-1.3-0.5-1.8s-0.6-0.9-1.1-1.2c-0.5-0.3-1.1-0.4-1.6-0.4\r\n\tc-1,0-1.8,0.3-2.4,1c-0.7,0.6-1,1.4-1,2.4c0,0.7,0.2,1.4,0.5,1.9s0.7,0.9,1.2,1.2C306.8,318.7,307.3,318.8,308,318.8L308,318.8z\r\n\t M318.1,320.6c-0.9-0.5-1.5-1.1-2-2c-0.5-0.8-0.7-1.7-0.7-2.8c0-1.1,0.2-2,0.7-2.8c0.5-0.9,1.1-1.5,2-2c0.8-0.5,1.7-0.7,2.7-0.7\r\n\ts1.9,0.2,2.7,0.7c0.8,0.5,1.4,1.1,1.9,2c0.5,0.8,0.8,1.7,0.8,2.8c0,1.1-0.3,2-0.8,2.8c-0.5,0.9-1.1,1.5-1.9,2\r\n\tc-0.9,0.5-1.8,0.7-2.7,0.7C319.8,321.3,318.9,321.1,318.1,320.6z M322.6,319.2c0.5-0.3,1-0.8,1.3-1.3c0.3-0.6,0.5-1.3,0.5-2.1\r\n\tc0-0.7-0.2-1.4-0.5-2s-0.8-1.1-1.3-1.4s-1.1-0.5-1.8-0.5c-0.7,0-1.3,0.2-1.8,0.5s-1,0.8-1.3,1.4s-0.5,1.3-0.5,2\r\n\tc0,0.8,0.2,1.5,0.5,2.1c0.3,0.5,0.8,1,1.3,1.3s1.1,0.5,1.8,0.5S322.1,319.5,322.6,319.2z",
                key: 29
            }), a.createElement("path", {
                id: "Layer_00000143615204695852301350000012663126479014795404_",
                className: "st4 da-fp-cline da-fp-cline-1 ga-footprint-map-s4",
                d: "M359,421c14.7-139,109-175,144-78",
                key: 30
            }), a.createElement("path", {
                id: "Layer_00000034053002507779556450000000236259933085436854_",
                className: "st4 da-fp-cline da-fp-cline-2 ga-footprint-map-s4",
                d: "M816,307.6C840,177,884,231,890,349",
                key: 31
            }), a.createElement("path", {
                id: "Layer_00000034076664101687265070000006723355840436154022_",
                className: "st4 da-fp-cline da-fp-cline-3 ga-footprint-map-s4",
                d: "M890,349c14.7-139,277.2-163.3,448,250",
                key: 32
            }), a.createElement("path", {
                id: "Layer_00000157988882841342902370000007709047727294098831_",
                className: "st4 da-fp-cline da-fp-cline-4 ga-footprint-map-s4",
                d: "M503,342.6",
                key: 33
            }), a.createElement("path", {
                id: "Layer_00000013182673134730547750000005889349738695352740_",
                className: "st4 da-fp-cline da-fp-cline-5 ga-footprint-map-s4",
                d: "M360,421c31.2-40.7,79.2-115.1,143-78",
                key: 34
            }), a.createElement("g", {key: 35}, a.createElement("path", {
                className: "st3",
                d: "M988.8,472.7h-5.5l-1.5,3.9h-2.2l5.2-13.2h2.4l5.2,13.2h-2.1L988.8,472.7z M988.1,470.9l-1.5-4\r\n\t\tc-0.3-0.8-0.5-1.7-0.5-1.7l0,0c0,0-0.3,0.9-0.6,1.7l-1.5,4H988.1z M1004.1,471.6c0,3.2-2.2,5.2-4.6,5.2c-1.7,0-3-0.9-3.5-2.1v1.8\r\n\t\th-1.9v-13.4h2v5.2c0.6-1.1,1.8-1.9,3.5-1.9C1001.8,466.5,1004.1,468.4,1004.1,471.6z M1002.1,471.6c0-2-1.1-3.4-3-3.4\r\n\t\tc-1.6,0-3,1.4-3,3.4s1.4,3.4,3,3.4C1001,475.1,1002.1,473.6,1002.1,471.6z M1014.9,476.6h-1.9c0-0.4,0-0.8,0-1.1V475\r\n\t\tc-0.6,1.3-1.8,1.9-3.1,1.9c-2.1,0-3.7-1.3-3.7-4.2v-5.9h2v5.7c0,2,0.9,2.7,2.2,2.7c1.4,0,2.5-1.1,2.5-3.2v-5.2h2v8.4\r\n\t\tC1014.8,475.7,1014.8,476.1,1014.9,476.6z M1022.9,476.6v-13.2h5.1c3.5,0,6.3,2.3,6.3,6.6s-2.8,6.6-6.3,6.6H1022.9z M1024.9,465.3\r\n\t\tv9.4h2.8c3,0,4.4-1.9,4.4-4.7c0-2.8-1.4-4.7-4.4-4.7L1024.9,465.3L1024.9,465.3z M1045.3,470.6v5.9h-2v-5.7c0-1.8-0.7-2.7-2.1-2.7\r\n\t\ts-2.7,1.1-2.7,3.1v5.3h-2v-13.4h2v5.4c0.5-1.5,1.8-2.1,3.2-2.1C1043.6,466.4,1045.3,467.7,1045.3,470.6z M1055.6,476.6h-1.8\r\n\t\tc0-0.3-0.1-0.6-0.1-1.1v-0.2c-0.6,1.1-1.8,1.6-3,1.6c-1.6,0-3.4-1.1-3.4-3.1c0-1.3,0.8-2.3,2.5-2.6l2.9-0.6\r\n\t\tc0.5-0.1,0.7-0.3,0.7-0.8c0-0.8-0.5-1.8-1.9-1.8c-1.5,0-2.1,1.2-2.3,1.8l-1.8-0.6c0.4-1.3,1.8-2.8,4.2-2.8c2.5,0,3.9,1.5,3.9,4.2\r\n\t\tv4.7C1055.6,475.9,1055.6,476.2,1055.6,476.6z M1053.7,472.9v-1c-0.2,0.1-0.5,0.1-0.8,0.2l-2.4,0.5c-0.7,0.2-1.2,0.5-1.2,1.2\r\n\t\tc0,0.9,0.8,1.6,1.9,1.6C1052.5,475.3,1053.7,474.5,1053.7,472.9z M1068.4,471.6c0,3.2-2.2,5.2-4.6,5.2c-1.7,0-3-0.9-3.5-2.1v1.8\r\n\t\th-1.9v-13.4h2v5.2c0.6-1.1,1.8-1.9,3.5-1.9C1066.2,466.5,1068.4,468.4,1068.4,471.6z M1066.4,471.6c0-2-1.1-3.4-3-3.4\r\n\t\tc-1.6,0-3,1.4-3,3.4s1.4,3.4,3,3.4C1065.4,475.1,1066.4,473.6,1066.4,471.6z M1070.3,464.3c0-0.7,0.6-1.3,1.3-1.3\r\n\t\tc0.7,0,1.3,0.6,1.3,1.3c0,0.7-0.6,1.3-1.3,1.3C1070.9,465.6,1070.3,465,1070.3,464.3z M1070.7,466.7h2v9.8h-2V466.7z"
            })), a.createElement("path", {
                className: "st4 da-fp-cline da-fp-cline-6 ga-footprint-map-s4",
                d: "M504,342.6C558,138,733,109,816,306c287.3-55.6,330.3,164,330.3,164",
                key: 36
            })])
        }

        c.defaultProps = {
            version: "1.1",
            id: "Layer_1",
            x: "0px",
            y: "0px",
            viewBox: "0 0 1921 940",
            style: {enableBackground: "new 0 0 1921 940"},
            xmlSpace: "preserve"
        }, t.exports = c, c.default = c
    }, rGmR: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return b
        }));
        var a = n("q1tI"), c = n.n(a), r = n("9eSz"), i = n.n(r), o = n("aqT/"), l = n.n(o), s = n("Y9D7"),
            m = n("I3Cp"), d = n("YfPL"), u = n("yrOS"), p = n("vOnD").default.div.withConfig({
                displayName: "da-our-partnersstyles__DAOurPartnersMain",
                componentId: "sc-7n0ov-0"
            })(["padding-top:170px;padding-bottom:260px;position:relative;", " &.cutout-top:before{background-color:", ";max-height:95px;left:48%;width:52%;}", "{margin-bottom:76px;}.main-text-col{padding-bottom:12px;", "{max-width:1040px;}}.text-col{", "{max-width:497px;color:", ";}}.globe-img{position:absolute;z-index:-1;width:52%;bottom:0;right:-60px;", "}.list-line{display:block;border-bottom:1px dashed ", ";max-width:520px;", "}.support-list{padding-top:56px;padding-bottom:78px;}.support-li-icon{margin-right:30px;", "}.support-item-wrap{", " padding-top:47px;padding-bottom:29px;", " ", "}.support-item{max-width:358px;", "}.support-item-icon{margin-bottom:1.5em;height:36px;&.macro{transform:translate(0,-0.3em);}}.support-item-title{color:", ";font-size:20px;margin-bottom:0.6em;}.support-item-text{color:", ";line-height:1.5;}&.to-animate{.modal-btns-wrap,.list-line,.support-li-wrap{transform:translate(0,80px);opacity:0;}}&.to-animate:not(.is-in-vp){.modal-btns-wrap,.list-line,.support-li-wrap{transition-delay:0ms !important;}}&.to-animate.is-in-vp{.modal-btns-wrap,.list-line,.support-li-wrap{transition:", "ms;transform:translate(0);opacity:1;}}.support-li-wrap{display:flex;align-items:center;margin-bottom:80px;", "}.support-li-title{font-size:20px;color:", ";", "}.modal-btn-item{vertical-align:top;margin-bottom:14px;color:", ";font-size:22px;svg{position:relative;margin-right:.3em;transform:translateY(-10%);path{fill:currentColor;}}}.modal-btn{cursor:pointer;appearance:none;border:none;background:none;text-decoration:underline;color:currentColor;&:hover{text-decoration:none;}}.discalaim-title{font-size:30px;margin-bottom:30px;}.modal-btns-wrap{", "}"], (function (t) {
                return t.theme.max("sm", (function (t) {
                    return "\n    padding-bottom: 60px;\n  "
                }), t)
            }), (function (t) {
                return t.theme.colors.primary300
            }), d.d, d.h, d.h, (function (t) {
                return t.theme.colors.secondary100
            }), (function (t) {
                return t.theme.max("sm", (function (t) {
                    return "\n        position: static;\n        width: 100%;\n        padding: 0 30px;\n  "
                }), t)
            }), (function (t) {
                var e, n;
                return null == t || null === (e = t.theme) || void 0 === e || null === (n = e.colors) || void 0 === n ? void 0 : n.secondary50
            }), (function (t) {
                return t.theme.max("sm", (function (t) {
                    return "\n      margin: 0 auto;\n    "
                }), t)
            }), (function (t) {
                return t.theme.max("sm", (function (t) {
                    return "\n      margin-right: 0;\n      margin-bottom: 26px;\n    "
                }), t)
            }), Object(d.k)(33.3333), (function (t) {
                return t.theme.max("sm", (function (t) {
                    return "\n    " + Object(d.k)(50) + "\n  "
                }), t)
            }), (function (t) {
                return t.theme.max("sf", (function (t) {
                    return "\n    " + Object(d.k)(100) + "\n    padding-top: 20px;\n    padding-bottom: 3px;\n  "
                }), t)
            }), (function (t) {
                return t.theme.max("sf", (function (t) {
                    return "\n        max-width: 100%;\n  "
                }), t)
            }), (function (t) {
                return t.theme.colors.green100
            }), (function (t) {
                return t.theme.colors.primary
            }), 800, (function (t) {
                return t.theme.max("sm", (function (t) {
                    return "\n      display: block;\n      text-align: center;\n      margin-bottom: 120px;\n    "
                }), t)
            }), (function (t) {
                var e, n;
                return null == t || null === (e = t.theme) || void 0 === e || null === (n = e.colors) || void 0 === n ? void 0 : n.green100
            }), (function (t) {
                return t.theme.min("sm", (function (t) {
                    return "\n      br {\n        display: none;\n\n      }\n    "
                }), t)
            }), (function (t) {
                var e, n;
                return null == t || null === (e = t.theme) || void 0 === e || null === (n = e.colors) || void 0 === n ? void 0 : n.primary200
            }), (function (t) {
                return t.theme.max("sm", (function (t) {
                    return "\n      padding-bottom: 90px;\n    "
                }), t)
            })), f = n("h+r4"), h = n("Wbzz"), v = n("fhwx"), x = n.n(v), g = n("goGE"), y = n.n(g), b = function (t) {
                var e = t.items, n = t.text, a = t.title, r = t.hexagonData, o = t.riskFactorsText,
                    v = t.riskFactorsLinkText, g = t.disclosuresTitle, b = t.disclaimerTextLinkText, E = t.disclaimerText,
                    k = t.modalProps, N = void 0 === k ? {
                        openModal: function () {
                        }
                    } : k, M = Object(h.useStaticQuery)("4105553889").img.childImageSharp;
                return c.a.createElement(l.a, {partialVisibility: !0, offset: {top: 100, bottom: 100}}, (function (t) {
                    var l = t.isVisible;
                    return c.a.createElement(p, {className: "to-animate " + (l ? "is-in-vp" : "") + " cutout-top"}, c.a.createElement(d.a, null, c.a.createElement(u.a, {
                        variation: "circle",
                        number: null == r ? void 0 : r.sectionNum
                    }, null == r ? void 0 : r.name), c.a.createElement(s.a, {
                        text: a,
                        delay: 200,
                        responsive: [{breakpoint: 767, charLimit: 17}, {breakpoint: 480, charLimit: 14}]
                    }), c.a.createElement("div", {className: "main-text-col"}, c.a.createElement(m.a, {
                        text: n,
                        variation: "large-text"
                    })), c.a.createElement("div", {className: "support-list"}, (e || []).map((function (t, e) {
                        var n = t.itemIcon, a = t.title;
                        return c.a.createElement("div", {
                            key: e,
                            className: "support-li-wrap",
                            style: {transitionDelay: 600 + 100 * e + "ms"}
                        }, c.a.createElement("div", {className: "support-li-icon " + n}, c.a.createElement(f.b, {icon: n})), c.a.createElement("div", {className: "support-li-title"}, x()((a || "").replace("<br />", " <br />"))))
                    })), c.a.createElement("div", {
                        className: "list-line",
                        style: {transitionDelay: 600 + 100 * (e || []).length + "ms"}
                    })), N && c.a.createElement("div", {
                        className: "modal-btns-wrap",
                        style: {transitionDelay: 600 + 100 * (e || []).length + "ms"}
                    }, c.a.createElement("div", {className: "discalaim-title"}, g), c.a.createElement("div", {className: "modal-btn-item"}, c.a.createElement(y.a, null), E, c.a.createElement("button", {
                        className: "modal-btn",
                        onClick: function () {
                            null == N || N.openModal({override: {acceptType: "", type: "disclosure"}})
                        }
                    }, b)), c.a.createElement("div", {className: "modal-btn-item"}, c.a.createElement(y.a, null), o, c.a.createElement("button", {
                        className: "modal-btn",
                        onClick: function () {
                            null == N || N.openModal({override: {acceptType: "", type: "risk"}})
                        }
                    }, v)))), c.a.createElement("div", {className: "globe-img"}, c.a.createElement(i.a, {fluid: Object(f.k)(M)})))
                }))
            }
    }, tXu8: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return d
        }));
        var a = n("q1tI"), c = n.n(a), r = n("aqT/"), i = n.n(r), o = n("yrOS"), l = n("Y9D7"), s = n("YfPL"),
            m = n("vOnD").default.div.withConfig({
                displayName: "da-work-togetherstyles__DAWorkTogetherMain",
                componentId: "sc-1jjek1v-0"
            })(["padding:100px 0 0;"]), d = function (t) {
                var e = t.hexagonData, n = t.title;
                return c.a.createElement(i.a, {partialVisibility: !0, offset: {top: 100, bottom: 100}}, (function (t) {
                    var a = t.isVisible;
                    return c.a.createElement(s.a, null, c.a.createElement(m, {className: "to-animate " + (a ? "is-in-vp" : "")}, c.a.createElement("div", {className: "title-col"}, c.a.createElement(o.a, {
                        variation: "circle",
                        number: null == e ? void 0 : e.sectionNum
                    }, null == e ? void 0 : e.name), c.a.createElement(l.a, {text: n}))))
                }))
            }
    }
}]);
//# sourceMappingURL=ea1499cfa0f432b6f2baa4a04e6da1a291173be5-25b37d65343bece160a9.js.map
