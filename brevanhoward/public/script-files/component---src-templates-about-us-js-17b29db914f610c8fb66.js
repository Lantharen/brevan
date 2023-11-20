(window.webpackJsonp = window.webpackJsonp || []).push([[12], {
    "/huT": function (e, t, n) {
        "use strict";
        var a = n("q1tI"), i = n.n(a);
        t.a = function (e) {
            var t = void 0 === e ? {} : e, n = t.acceptType, a = void 0 === n ? "withAccept" : n, o = t.initialOpen,
                r = {open: void 0 !== o && o, acceptType: a, modalData: null}, m = i.a.useState(r), l = m[0], c = m[1],
                s = function () {
                    document.body.classList.remove("modal-open"), c(Object.assign({}, l, {open: !1}))
                };
            return {
                modalProps: {
                    modalStatus: l, acceptAndCloseModal: function () {
                        s()
                    }, closeModal: s, openModal: function (e) {
                        var t = e.override, n = void 0 === t ? {} : t;
                        document.body.classList.add("modal-open"), c(Object.assign({}, l, n, {
                            open: !0,
                            type: (null == n ? void 0 : n.type) || ""
                        }))
                    }, changeModal: function (e) {
                        document.body.classList.add("modal-open"), c(Object.assign({}, l, {open: !0, type: e || ""}))
                    }, closeModalAndClean: function () {
                        document.body.classList.remove("modal-open"), c(Object.assign({}, r, {open: !1}))
                    }
                }
            }
        }
    }, "3vHM": function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return f
        }));
        var a = n("q1tI"), i = n.n(a), o = n("ciIH"), r = n.n(o), m = n("pLTZ"), l = n.n(m), c = n("SMLm"), s = n.n(c),
            u = n("YfPL"), d = n("wBAs"), p = n("h+r4"), f = function (e) {
                var t = e.text, n = e.name, a = e.label, o = e.image, m = e.signature, c = e.smallImage,
                    f = e.smallImageMobile, g = e.variation, b = void 0 === g ? "" : g, x = e.quoteFootnote,
                    h = void 0 === x ? "" : x;
                return i.a.createElement(u.f, {className: (o || m ? "image-and-sig" : "text-only") + " qb-" + b}, f && i.a.createElement("div", {className: "sm-image-wrap mobile"}, i.a.createElement(d.a, {
                    image: f,
                    variation: "from-right"
                })), i.a.createElement("div", {className: "quote-sig-wrap"}), o && "circle" !== b && i.a.createElement("div", {className: "quote-img-wrap"}, i.a.createElement(d.a, {
                    image: o,
                    variation: "from-right"
                })), o && "circle" === b && i.a.createElement("div", {className: "quote-img-wrap-c"}, i.a.createElement(s.a, null), i.a.createElement("div", {className: "quote-img-inner"}, i.a.createElement(r.a, {
                    fluid: Object(p.k)(o),
                    objectPosition: "center"
                }))), i.a.createElement("div", {className: "quote-content"}, i.a.createElement("div", {className: "quote-symb " + ("circle" === b ? "blue-quote" : "")}, i.a.createElement(l.a, null)), i.a.createElement("div", {className: "quote-text"}, t), !!h && i.a.createElement("div", {className: "quote-footnote"}, h), i.a.createElement("div", {className: "quote-meta"}, c && i.a.createElement(d.a, {
                    image: c,
                    variation: "desktop from-left"
                }), i.a.createElement("div", {className: "quote-name " + (c ? "has-sm-img" : "")}, n), i.a.createElement("div", {className: "quote-label"}, a))))
            }
    }, Ox6l: function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return a
        }));
        var a = {
            fixedIncome: {name: "Fixed Income", color: "#FFBB37"},
            foreignExchange: {name: "Foreign Exchange", color: "#9CEA4F"},
            comodities: {name: "Commodities", color: "#9472F6"},
            equities: {name: "Equities", color: "#E98EEB"},
            digitalCurrency: {name: "Digital Assets", color: "#61D9FF"},
            credit: {name: "Credit", color: "#FDFF87"}
        }
    }, REGc: function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return m
        }));
        var a = n("zLVn"), i = n("q1tI"), o = n.n(i), r = n("Wbzz"), m = function (e) {
            var t, n = e.linkData, i = function (e) {
                    e.linkData;
                    return Object(a.a)(e, ["linkData"])
                }(e),
                m = "internal" === (null == n ? void 0 : n.type) ? {to: null == n || null === (t = n.linkToPage) || void 0 === t ? void 0 : t.uri} : {href: null == n ? void 0 : n.externalUrl},
                l = {target: null != n && n.openInNewWindow ? "_blank" : "_self"}, c = Object.assign({}, m, l, i);
            return null != n && n.linkToPage || null != n && n.externalUrl ? "internal" === (null == n ? void 0 : n.type) ? o.a.createElement(r.Link, Object.assign({activeClassName: "active"}, c), e.children) : o.a.createElement("a", c, e.children) : o.a.createElement(o.a.Fragment, null)
        }
    }, SMLm: function (e, t, n) {
        var a = n("q1tI");

        function i(e) {
            return a.createElement("svg", e, [a.createElement("style", {key: 0}, "\n\t\t.quote-circle-lg { fill: none;stroke: #56bbb1;stroke-width: 4 } \n\t\t.quote-sircle-sm { fill: none;stroke: #56bbb1;stroke-width: 2 } \n\t"), a.createElement("circle", {
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

        i.defaultProps = {
            version: "1.2",
            viewBox: "0 0 534 534",
            width: "534",
            height: "534"
        }, e.exports = i, i.default = i
    }, U1an: function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return c
        }));
        var a = n("q1tI"), i = n.n(a), o = n("Wbzz"), r = n("9eSz"), m = n.n(r), l = n("h+r4"), c = function () {
            var e = Object(o.useStaticQuery)("2238259800").img.childImageSharp;
            return i.a.createElement(m.a, {fluid: Object(l.k)(e)})
        }
    }, "m/BF": function (e, t, n) {
        "use strict";
        n.r(t);
        var a = n("q1tI"), i = n.n(a), o = n("Bl7J"), r = n("vrFN"), m = n("aqT/"), l = n.n(m), c = n("U1an"),
            s = n("h+r4"), u = n("Y9D7"), d = n("vOnD"), p = n("YfPL"), f = d.default.div.withConfig({
                displayName: "at-glancestyles__AtGlanceMain",
                componentId: "sc-amn7o6-0"
            })(["position:relative;padding-top:168px;padding-bottom:174px;", " &.about-us{padding-top:98px;padding-bottom:253px;", "}.full-bg-wrap{position:absolute;width:100%;height:100%;padding-top:139px;top:0;left:0;", " &:before{content:'';display:block;position:absolute;width:100%;top:0;height:100%;left:0;background-color:", ";}}&.cutout-bottom{.full-bg-wrap{&:before{height:calc(100% - 1px);}}}&.cutout-bottom.cutout-top{.full-bg-wrap{&:before{height:calc(100% - 2px);top:1px;}}}.gatsby-image-wrapper{max-height:1200px;height:100%;}", ",", "{position:relative;z-index:5;}", "{.hexagon-num{color:", ";}svg{opacity:.2;}}", "{color:", ";margin-bottom:.6em;", "}.atg-list{position:relative;justify-content:space-between;}.atg-item-wrap{", " padding-top:47px;padding-bottom:29px;", " ", " ", "}.atg-item-icon{margin-bottom:1.5em;height:20px;&.macro{transform:translate(0,-.3em);}}.atg-item-title{color:", ";font-size:20px;margin-bottom:.6em;}.atg-item-text{color:", ";line-height:1.5;}&.to-animate{.atg-item-wrap{transform:translate(0,80px);opacity:0;}}&.to-animate:not(.is-in-vp){.atg-item-wrap{transition-delay:0ms !important;}}&.to-animate.is-in-vp{.atg-item-wrap{transition:", "ms;transform:translate(0);opacity:1;}}"], (function (e) {
                return e.theme.max("sm", (function (e) {
                    return "\n  padding-top: 90px;\n  padding-bottom: 78px;\n"
                }), e)
            }), (function (e) {
                return e.theme.max("sm", (function (e) {
                    return "\n    padding-bottom: 78px;\n  "
                }), e)
            }), (function (e) {
                return e.theme.max("sm", (function (e) {
                    return "\n    .gatsby-image-wrapper {\n      display: none;\n    }\n  "
                }), e)
            }), (function (e) {
                return e.theme.colors.primary100
            }), p.d, p.i, p.d, (function (e) {
                return e.theme.colors.secondary200
            }), p.i, (function (e) {
                return e.theme.colors.white
            }), (function (e) {
                return e.theme.max("sm", (function (e) {
                    return "\n    margin-bottom: 0.6em;\n  "
                }), e)
            }), Object(p.k)(27.5), (function (e) {
                return e.theme.max("mac", (function (e) {
                    return "\n    " + Object(p.k)(30) + "\n  "
                }), e)
            }), (function (e) {
                return e.theme.max("sm", (function (e) {
                    return "\n    " + Object(p.k)(50) + "\n  "
                }), e)
            }), (function (e) {
                return e.theme.max("sf", (function (e) {
                    return "\n    " + Object(p.k)(100) + "\n    padding-top: 20px;\n    padding-bottom: 3px;\n  "
                }), e)
            }), (function (e) {
                return e.theme.colors.secondary100
            }), (function (e) {
                return e.theme.colors.white
            }), 800), g = n("yrOS"), b = function (e) {
                var t = e.cutouts, n = e.title, a = e.items, o = void 0 === a ? [] : a, r = e.hexagonData, m = r.name,
                    d = r.sectionNum;
                return i.a.createElement(l.a, {partialVisibility: !0, offset: {top: 100, bottom: 100}}, (function (e) {
                    var a = e.isVisible;
                    return i.a.createElement(f, {className: t + " to-animate " + (a ? "is-in-vp" : "")}, i.a.createElement("div", {className: "full-bg-wrap"}, i.a.createElement(c.a, null)), i.a.createElement(p.a, null, i.a.createElement(g.a, {number: d}, m), i.a.createElement(u.a, {
                        text: n,
                        responsive: s.d
                    }), i.a.createElement("div", {className: "row atg-list"}, o.map((function (e, t) {
                        var n = e.itemIcon, a = e.text, o = e.title;
                        return i.a.createElement("div", {
                            key: t,
                            className: "pad-col atg-item-wrap",
                            style: {transitionDelay: 600 + 100 * t + "ms"}
                        }, i.a.createElement("div", {className: "atg-item"}, i.a.createElement("div", {className: "atg-item-icon " + n}, i.a.createElement(s.b, {icon: n})), i.a.createElement("div", {className: "atg-item-title"}, o), i.a.createElement("p", {className: "atg-item-text"}, a)))
                    })))))
                }))
            }, x = n("I3Cp"), h = n("3vHM"), v = d.default.div.withConfig({
                displayName: "leadershipstyles__LeadershipMain",
                componentId: "sc-13y55og-0"
            })(["padding:310px 0 230px;", " ", " ", " .main-col{", " ", " padding-top:110px;", " ", " ", " ", "}", "{margin-bottom:76px;}", "{margin-bottom:.36em;", "}.side-col{", " ", " margin-left:auto;", "}.img-text-col{", " ", " padding-top:22px;", " ", "}.img-col{", " margin-left:auto;", " ", "}.quote-col{", " padding:137px 0 182px;", " ", "}.to-animate{.quote-content{opacity:0;transform:translate(-100px,0);", "}.quote-sig-wrap{opacity:0;}}.to-animate:not(.is-in-vp){.quote-sig-wrap,.quote-content{transition-delay:0ms !important;}}.to-animate.is-in-vp{.quote-content{transition:", "ms ease 800ms;transform:translate(0);opacity:1;", "}.quote-sig-wrap{transition:", "ms ease 800ms;opacity:1;}}.img-col-wrap{align-items:center;padding-top:60px;}"], (function (e) {
                return e.theme.max("lt", (function () {
                    return "\n  padding: 220px 0 230px;\n"
                }))
            }), (function (e) {
                return e.theme.max("md", (function (e) {
                    return "\n  padding: 180px 0 80px;\n"
                }), e)
            }), (function (e) {
                return e.theme.max("sm", (function (e) {
                    return "\n  padding: 0 0 50px;\n\n  &:before {\n    content: '';\n    height: 84px;\n    display: block;\n    background-color: " + e.theme.colors.primary + ";\n  }\n"
                }), e)
            }), Object(p.m)(), Object(p.k)(6, "c"), (function (e) {
                return e.theme.max("lt", (function () {
                    return "\n    padding-top: 70px;\n  "
                }))
            }), (function (e) {
                return e.theme.max("mac", (function (e) {
                    return "\n    " + Object(p.k)(36) + "\n  "
                }), e)
            }), (function (e) {
                return e.theme.max("md", (function () {
                    return "\n    padding-top: 10px;\n    " + Object(p.k)(50) + "\n  "
                }))
            }), (function (e) {
                return e.theme.max("sm", (function (e) {
                    return "\n    padding-top: 90px;\n    padding-bottom: 50px;\n    " + Object(p.k)(100) + "\n  "
                }), e)
            }), p.d, p.i, (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n    margin-bottom: 0.76em;\n  "
                }))
            }), Object(p.m)("right", 3), Object(p.k)(8, "c"), (function (e) {
                return e.theme.max("md", (function () {
                    return "\n    " + Object(p.k)(45) + "\n  "
                }))
            }), Object(p.m)(), Object(p.k)(6.2, "c"), (function (e) {
                return e.theme.max("md", (function () {
                    return "\n    " + Object(p.k)(45) + "\n  "
                }))
            }), (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n    padding-top: 56px;\n    order: 2;\n    " + Object(p.k)(100) + "\n  "
                }))
            }), Object(p.k)(11, "c"), (function (e) {
                return e.theme.max("md", (function () {
                    return "\n    order: 1;\n  "
                }))
            }), (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n    " + Object(p.k)(100) + "\n    " + Object(p.m)() + "\n  "
                }))
            }), Object(p.k)(100), (function (e) {
                return e.theme.max("mac", (function () {
                    return "\n    padding-top: 80px;\n  "
                }))
            }), (function (e) {
                return e.theme.max("md", (function (e) {
                    return "\n    padding: 0 0 10px;\n  "
                }), e)
            }), (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n      transform: translate(0, 100px);\n    "
                }))
            }), 800, (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n      transform: translate(0);\n    "
                }))
            }), 800), E = n("wBAs"), y = n("4XGp"), k = function (e) {
                var t = e.image1Mobile, n = e.image1, a = e.image2, o = e.title, r = e.firstText, m = e.quoteImage,
                    c = e.quoteText, s = e.quoteName, d = e.quoteLabel, p = e.imageText, f = e.hexagonData, b = f.name,
                    k = f.sectionNum, w = Object(y.c)().popupTermsStatus;
                return i.a.createElement(v, null, t && i.a.createElement("div", {className: "mobile-only"}, i.a.createElement(E.a, {
                    image: t,
                    variation: "from-right"
                })), i.a.createElement(l.a, {partialVisibility: !0, offset: {top: 0, bottom: 0}}, (function (e) {
                    var t = e.isVisible;
                    return i.a.createElement("div", {className: "flex-wrap"}, i.a.createElement("div", {className: "main-col to-animate " + (t && "accepted" === w ? "is-in-vp" : "")}, i.a.createElement(g.a, {number: k}, b), i.a.createElement(u.a, {
                        text: o,
                        responsive: [{breakpoint: 767, charLimit: 6}]
                    }), r && i.a.createElement(x.a, {
                        variation: "large-text",
                        text: r
                    })), i.a.createElement("div", {className: "side-col desktop-only to-animate " + (t && "accepted" === w ? "is-in-vp" : "")}, n && i.a.createElement(E.a, {
                        image: n,
                        variation: "from-right"
                    })))
                })), i.a.createElement(l.a, {partialVisibility: !0, offset: {top: 0, bottom: 0}}, (function (e) {
                    var t = e.isVisible;
                    return i.a.createElement("div", {className: "quote-col to-animate " + (t && "accepted" === w ? "is-in-vp" : "")}, i.a.createElement(h.a, {
                        text: c,
                        name: s,
                        label: d,
                        image: m
                    }))
                })), i.a.createElement(l.a, {partialVisibility: !0, offset: {top: 0, bottom: 0}}, (function (e) {
                    var t = e.isVisible;
                    return i.a.createElement("div", {className: "img-col-wrap flex-wrap to-animate " + (t && "accepted" === w ? "is-in-vp" : "")}, i.a.createElement("div", {className: "img-text-col"}, p && i.a.createElement(x.a, {
                        variation: "large-text",
                        text: p
                    })), i.a.createElement("div", {className: "img-col"}, a && i.a.createElement(E.a, {
                        image: a,
                        variation: "from-right"
                    })))
                })))
            }, w = n("Wbzz"), N = n("ZWRB"), O = n("Ox6l"), j = d.default.div.withConfig({
                displayName: "globestyles__GlobeMain",
                componentId: "sc-53m624-0"
            })(["position:relative;padding:167px 0 119px;color:", ";a{color:#fff;}", " &.cutout-top:before{left:48%;width:53%;height:125px;}&:after{content:'';display:block;position:absolute;left:0;top:1px;width:100%;height:100%;background-color:", ";}> *{position:relative;z-index:5;}.title-col{", "}.main-col{", " ", " ", "}.main-col-r{margin-left:auto;margin-right:12%;", " ", "}.side-col{margin-left:auto;", " ", " ", "}", "{color:", ";", "}.globe-wrap{padding-top:19px;max-width:", "px;padding:0 15px;margin:0 auto;position:relative;&:before{content:'';display:block;padding-bottom:100%;}}.globe-canvas{border:none;appearance:none;position:absolute;top:0;left:0;width:100%;height:100%;opacity:1;transition:400ms ease 300ms;&.has-error{visibility:hidden !important;}}.globe-loader{color:#fff;position:absolute;left:0;top:0;font-size:30px;height:100%;width:100%;display:flex;justify-content:center;align-items:center;transition:400ms;}.spinner{max-width:100px;width:100px;height:100px;border:3px solid transparent;border-right-color:#fff;border-radius:50%;animation:spinner 1s linear 0s infinite;}@keyframes spinner{100%{transform:rotate(360deg);}}.load-finished{.globe-loader{opacity:0;pointer-events:none;}}.loading{.globe-canvas{opacity:0;}}.globe-callout{position:absolute;top:0;left:0;width:100%;height:100%;}.globe-legend{display:flex;justify-content:center;text-align:center;padding-top:70px;", "}.legend-dot{width:30px;height:30px;border-radius:50%;display:inline-block;margin-bottom:1em;", "}.legend-item{position:relative;padding:0 36px;&:last-child{&:after{content:none;}}", " ", "}.pulse-anim{position:absolute;opacity:.4;width:10%;transition:opacity 400ms;will-change:transform;&.hidden{opacity:0;}&:not(.hidden){.pulse-inner{animation:pulseAnim 25000ms ease-in 50ms infinite;}}}.pulse-inner{position:absolute;top:0;left:0;width:100%;transform:translate(-50%,-50%);border-radius:50%;border-style:solid;border-color:currentColor;border-width:0;&:before{content:'';width:100%;display:block;padding-bottom:100%;}}@keyframes pulseAnim{0%{border-width:0;transform:translate(-50%,-50%) scale(0);}5%{border-width:10px;}10%{border-width:0;transform:translate(-50%,-50%) scale(1);}100%{transform:translate(-50%,-50%) scale(0);border-width:0;}}.globe-touch-blocker{position:absolute;z-index:2;top:0;left:0;width:100%;height:100%;pointer-events:none;&:before,&:after{content:'';position:absolute;pointer-events:all;display:block;}&.vertical{&:before,&:after{height:100%;width:16%;}&:before{left:0;top:0;}&:after{right:0;top:0;}}&.horizontal{&:before,&:after{height:16%;width:100%;}&:before{left:0;top:0;}&:after{left:0;bottom:0;}}}"], (function (e) {
                return e.theme.colors.white
            }), (function (e) {
                return e.theme.max("sm", (function (e) {
                    return "\n  padding: 90px 0 100px;\n"
                }), e)
            }), (function (e) {
                return e.theme.colors.primary100
            }), Object(p.k)(100), Object(p.k)(40), (function (e) {
                return e.theme.max("md", (function () {
                    return "\n    " + Object(p.k)(47) + "\n  "
                }))
            }), (function (e) {
                return e.theme.max("sm", (function (e) {
                    return "\n    " + Object(p.k)(100) + "\n  "
                }), e)
            }), (function (e) {
                return e.theme.max("md", (function () {
                    return "\n    margin-right: 0;\n  "
                }))
            }), (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n    margin-bottom: 80px;    \n  "
                }))
            }), Object(p.k)(33), (function (e) {
                return e.theme.max("md", (function (e) {
                    return "\n    " + Object(p.k)(45) + "\n  "
                }), e)
            }), (function (e) {
                return e.theme.max("sm", (function (e) {
                    return "\n    " + Object(p.k)(100) + "\n  "
                }), e)
            }), p.i, (function (e) {
                return e.theme.colors.white
            }), (function (e) {
                return e.theme.max("sm", (function (e) {
                    return "\n    margin-bottom: .9em;\n  "
                }), e)
            }), 990, (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n    display: block;\n    max-width: 300px;\n    margin: 0 auto;\n  "
                }))
            }), (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n    margin-bottom: 0;\n    margin-right: 1em;\n    width: 1em;\n    max-width: 1em;\n    height: 1em;\n  "
                }))
            }), (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n    display: flex;\n    align-items: center;\n    margin-bottom: 1em;\n  "
                }))
            }), (function (e) {
                return e.theme.min("sm", (function () {
                    return '\n    &:after {\n      content: "";\n      position: absolute;\n      right: 0;\n      top: 50%;\n      transform: translate(0, -50%);\n      height: 90%;\n      width: 1px;\n      background: #fff;\n      opacity: .3;\n    }\n  '
                }))
            })), q = n("A3ej"), S = n("REGc"), T = i.a.lazy((function () {
                return Promise.all([n.e(8), n.e(26)]).then(n.bind(null, "GWS6"))
            })), C = function (e) {
                var t = e.hexagonData, n = t.name, a = t.sectionNum, o = e.title, r = e.text1, m = e.text2, c = e.linkClass,
                    d = e.linkData, f = Object(q.c)(), b = f.maxStep, h = f.step, v = Object(q.b)(),
                    E = Object(w.useStaticQuery)("791754293"), y = "undefined" == typeof window, k = Object.values(O.a);
                return i.a.useEffect((function () {
                    return function () {
                        return v({type: "RESET"})
                    }
                }), []), i.a.createElement(l.a, {partialVisibility: !0, offset: {top: 100, bottom: 100}}, (function (e) {
                    var t = e.isVisible;
                    return i.a.createElement(j, {className: "cutout-top to-animate " + (t ? "is-in-vp" : "")}, i.a.createElement(p.a, null, i.a.createElement("div", {className: "row"}, i.a.createElement("div", {className: "pad-col title-col"}, i.a.createElement(g.a, {
                        number: a,
                        className: "light"
                    }, n), i.a.createElement(u.a, {
                        text: o,
                        variation: "small-title",
                        responsive: [{breakpoint: 1024, charLimit: 15}]
                    })), i.a.createElement("div", {className: "pad-col main-col"}, i.a.createElement(x.a, {
                        delay: 800,
                        text: r,
                        variation: "large-text",
                        parse: !0
                    })), i.a.createElement("div", {className: "pad-col main-col main-col-r"}, i.a.createElement(x.a, {
                        delay: 1e3,
                        text: m,
                        variation: "large-text",
                        parse: !0
                    }), i.a.createElement(S.a, {
                        linkData: d,
                        className: "btn secondary white-text " + s.j + c
                    }, i.a.createElement(N.a, {
                        text: null == d ? void 0 : d.linkText,
                        delay: 1e3
                    }))))), i.a.createElement("div", {className: "globe-wrap " + (h >= b ? "load-finished" : "loading")}, i.a.createElement("div", {className: "globe-touch-blocker vertical"}), i.a.createElement("div", {className: "globe-touch-blocker horizontal"}), !y && i.a.createElement(i.a.Suspense, {fallback: i.a.createElement("div", null, "Loading...")}, i.a.createElement(T, {assetsData: E})), i.a.createElement("div", {className: "globe-loader " + (h >= b ? "load-finished" : "loading")}, i.a.createElement("span", {className: "spinner"}))), i.a.createElement("div", {className: "globe-legend"}, k.map((function (e, t) {
                        var n = e.color, a = e.name;
                        return i.a.createElement("div", {
                            className: "legend-item",
                            key: t
                        }, i.a.createElement("div", {
                            className: "legend-dot",
                            style: {backgroundColor: "" + n}
                        }), i.a.createElement("div", null, a))
                    }))))
                }))
            }, D = function (e) {
                var t = e.items;
                return i.a.createElement(p.e, null, t.map((function (e, t) {
                    var n = e.title, a = e.text;
                    return i.a.createElement("li", {
                        key: t,
                        className: "lg-list-item"
                    }, i.a.createElement("div", {
                        className: "lg-list-num",
                        style: {transitionDelay: 200 * t + "ms"}
                    }, t + 1), i.a.createElement("div", {className: "lg-list-ovf"}, i.a.createElement("div", {
                        className: "lg-list-title",
                        style: {transitionDelay: 50 + 200 * t + "ms"}
                    }, n), i.a.createElement("div", {
                        className: "lg-list-text",
                        style: {transitionDelay: 100 + 200 * t + "ms"}
                    }, a)))
                })))
            }, z = d.default.div.withConfig({
                displayName: "methodologystyles__MethodologyMain",
                componentId: "sc-1vsuigk-0"
            })(["position:relative;padding:81px 0 177px;background-color:", ";", " .right-col{margin-left:auto;margin-right:17%;", "}&:before{left:48%;width:53%;height:126px;}.row{position:relative;z-index:2;}.main-col{", " ", "}.img-col{", " ", "}.side-col{", " margin-left:auto;padding-top:46px;", " ", "}", "{margin-bottom:.43em;", "}", "{", " margin-bottom:114px;", " ", "}", "{", "}.lg-list-item{padding-bottom:102px;", " &:after{border-right:1px solid rgba(255,255,255,.2);}}.b-col{align-items:center;", " ", "}"], (function (e) {
                return e.theme.colors.secondary300
            }), (function (e) {
                return e.theme.max("sm", (function (e) {
                    return "\n  padding: 86px 0 96px;\n"
                }), e)
            }), (function (e) {
                return e.theme.max("md", (function () {
                    return "\n    margin-right: 0;\n  "
                }))
            }), Object(p.k)(100), (function (e) {
                return e.theme.max("sm", (function (e) {
                    return "\n    order: 1;\n  "
                }), e)
            }), Object(p.k)(46), (function (e) {
                return e.theme.max("sm", (function (e) {
                    return "\n    order: 3;\n    " + Object(p.k)(100) + "\n  "
                }), e)
            }), Object(p.k)(41.6), (function (e) {
                return e.theme.max("md", (function (e) {
                    return "\n    " + Object(p.k)(50) + "\n  "
                }), e)
            }), (function (e) {
                return e.theme.max("sm", (function (e) {
                    return "\n    " + Object(p.k)(100) + "\n    order: 2;\n    padding-top: 0;\n  "
                }), e)
            }), p.i, (function (e) {
                return e.theme.max("sm", (function (e) {
                    return "\n    max-width: 270px;\n    margin-bottom: 40px;\n  "
                }), e)
            }), p.h, Object(p.k)(33), (function (e) {
                return e.theme.max("md", (function () {
                    return "\n    " + Object(p.k)(42) + "\n  "
                }))
            }), (function (e) {
                return e.theme.max("sm", (function (e) {
                    return "\n    " + Object(p.k)(100) + "\n    margin-bottom: 15px;\n  "
                }), e)
            }), p.d, (function (e) {
                return e.theme.max("sm", (function (e) {
                    return "\n    margin-bottom: 63px;\n  "
                }), e)
            }), (function (e) {
                return e.theme.max("sm", (function (e) {
                    return "\n    padding-bottom: 54px;\n  "
                }), e)
            }), Object(p.k)(100), (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n    order: 2;\n  "
                }))
            })), I = function (e) {
                var t = e.leftTextColumn, n = e.rightTextColumn, a = e.title, o = e.list, r = e.image1, m = e.hexagonData,
                    c = m.name, s = m.sectionNum;
                return i.a.createElement(z, null, i.a.createElement(p.a, null, i.a.createElement("div", {className: "row"}, i.a.createElement(l.a, {
                    partialVisibility: !0,
                    offset: {top: 0, bottom: 0}
                }, (function (e) {
                    var o = e.isVisible;
                    return i.a.createElement("div", {className: "pad-col main-col to-animate " + (o ? "is-in-vp" : "")}, i.a.createElement(g.a, {number: s}, c), i.a.createElement(u.a, {text: a}), i.a.createElement("div", {className: "flex-wrap"}, i.a.createElement(x.a, {
                        text: t,
                        variation: "large-text"
                    }), i.a.createElement(x.a, {text: n, variation: "large-text right-col"})))
                })), i.a.createElement(l.a, {partialVisibility: !0, offset: {top: 0, bottom: 0}}, (function (e) {
                    var t = e.isVisible;
                    return i.a.createElement("div", {className: "flex-wrap b-col"}, i.a.createElement("div", {className: "pad-col img-col to-animate " + (t ? "is-in-vp" : "")}, i.a.createElement(E.a, {
                        image: r,
                        variation: "from-left"
                    })), i.a.createElement("div", {className: "pad-col side-col to-animate " + (t ? "is-in-vp" : "")}, i.a.createElement(D, {items: o})))
                })))))
            }, M = n("TSYQ"), L = n.n(M), V = d.default.div.withConfig({
                displayName: "numstyles__NumMain",
                componentId: "sc-nxdlgs-0"
            })(["position:relative;padding:177px 0 40px;", " ", " .flex-wrap{align-items:flex-end;}", "{", "}&.default{.main-col{", " padding-bottom:170px;", " ", "}.side-col{margin-left:auto;", "}}&.reverse{padding:50px 0 50px;", "{", "}.main-col{margin-left:auto;", "}.side-col{", " padding-bottom:170px;", "}.below-col{", " ", " padding-bottom:70px;padding-top:70px;.footnote-item{max-width:100%;margin-bottom:2rem;.footnote-item-title{font-weight:bold;text-decoration:underline;}}}.flex-wrap{flex-direction:row-reverse;}", "}.main-col{", " ", " ", "}&.num-0{.side-col{", " ", " ", "}}&.num-1{.side-col{", " padding-top:40px;", " ", "}.img-wrap{max-width:86%;", " &.small{max-width:57%;margin-left:auto;", "}}}&.num-2{padding:72px 0 120px;", " .side-col{", " ", " ", "}.img-wrap{max-width:88%;", " &.small{max-width:38%;margin-left:auto;", "}}}.number{font-family:", ";color:", ";font-size:316px;", " line-height:1.1;", " ", " ", "}.to-animate &{.number{opacity:0;}}.to-animate:not(.is-in-vp) &{.number{transition-delay:0ms !important;}}.to-animate.is-in-vp &{.footnote-item{transition:", "ms ease 800ms;opacity:1;transform:translateY(0);}.number{transition:", "ms ease 300ms;opacity:1;}}.img-wrap{", " margin-bottom:34px;}.modal-btn{cursor:pointer;appearance:none;border:none;background:none;text-decoration:underline;color:currentColor;padding:0;&:hover{text-decoration:none;}}.footnote-item{position:relative;opacity:0;line-height:1.5;display:block;transform:translateY(100%);", " &:first-child{.footnote-num{transform:translateX(5%);}}}.footnote-num{position:absolute;right:101%;top:0;width:1em;text-align:center;}"], (function (e) {
                return e.theme.max("md", (function () {
                    return "\n  padding: 100px 0 40px;\n"
                }))
            }), (function (e) {
                return e.theme.max("sm", (function (e) {
                    return "\n  padding: 70px 0 0;\n"
                }), e)
            }), p.h, (function (e) {
                return e.theme.min("sm", (function () {
                    return "\n      max-width: 440px;\n  "
                }))
            }), Object(p.m)("left", 4), (function (e) {
                return e.theme.max("md", (function () {
                    return "\n      padding-bottom: 70px;\n    "
                }))
            }), (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n      padding-bottom: 0;\n    "
                }))
            }), Object(p.m)("right", 2), p.h, (function (e) {
                return e.theme.min("sm", (function () {
                    return "\n      max-width: 420px;\n    "
                }))
            }), Object(p.m)("right", 4), Object(p.m)("left", 2), (function (e) {
                return e.theme.max("md", (function () {
                    return "\n      padding-bottom: 70px;\n    "
                }))
            }), Object(p.m)("left", 2), Object(p.m)("right", 4), (function (e) {
                return e.theme.max("sm", (function (e) {
                    return "\n    padding: 50px 0 0;\n  "
                }), e)
            }), Object(p.k)(7, "c"), (function (e) {
                return e.theme.max("md", (function (e) {
                    return "\n    " + Object(p.k)(50) + "\n  "
                }), e)
            }), (function (e) {
                return e.theme.max("sm", (function (e) {
                    return "\n    " + Object(p.k)(100) + "\n  "
                }), e)
            }), Object(p.k)(9, "c"), (function (e) {
                return e.theme.max("md", (function (e) {
                    return "\n      " + Object(p.k)(50) + "\n    "
                }), e)
            }), (function (e) {
                return e.theme.max("sm", (function (e) {
                    return "\n      " + Object(p.k)(100) + "\n    "
                }), e)
            }), Object(p.k)(7, "c"), (function (e) {
                return e.theme.max("md", (function (e) {
                    return "\n      " + Object(p.k)(50) + "\n    "
                }), e)
            }), (function (e) {
                return e.theme.max("sm", (function (e) {
                    return "\n      " + Object(p.k)(100) + "\n      padding-bottom: 0;\n    "
                }), e)
            }), (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n      max-width: 100%;\n    "
                }))
            }), (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n        display: none;\n      "
                }))
            }), (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n    padding: 50px 0 30px;\n  "
                }))
            }), Object(p.k)(8, "c"), (function (e) {
                return e.theme.max("md", (function (e) {
                    return "\n      " + Object(p.k)(50) + "\n    "
                }), e)
            }), (function (e) {
                return e.theme.max("sm", (function (e) {
                    return "\n      " + Object(p.k)(100) + "\n    "
                }), e)
            }), (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n      max-width: 100%;\n    "
                }))
            }), (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n        display: none;\n      "
                }))
            }), (function (e) {
                return e.theme.fonts.tertiary
            }), (function (e) {
                return e.theme.colors.secondary
            }), Object(p.k)(100), (function (e) {
                return e.theme.max("mac", (function (e) {
                    return "\n    font-size: 250px;\n  "
                }), e)
            }), (function (e) {
                return e.theme.max("md", (function () {
                    return "\n    font-size: 230px;\n  "
                }))
            }), (function (e) {
                return e.theme.max("xs", (function () {
                    return "\n    font-size: 190px;\n  "
                }))
            }), 800, 800, Object(p.k)(100), (function (e) {
                return e.theme.min("sm", (function (e) {
                    return "\n    max-width: 420px;\n  "
                }), e)
            })), B = function (e) {
                return i.a.createElement("div", {className: L()("img-wrap", "" + (e.image.size || "large"))}, i.a.createElement(E.a, {
                    image: e.image,
                    variation: e.variation
                }))
            }, A = function (e) {
                var t = e.number, n = e.className;
                return i.a.createElement("div", {className: L()(n, "number")}, "0" + t)
            }, F = function (e) {
                var t = e.number, n = e.title, a = e.items, o = e.image1, r = e.image2, m = e.footnotes, c = e.modalProps,
                    s = e.alignFootNotesBelow, d = void 0 !== s && s, f = t % 2 == 0 ? "reverse" : "default",
                    g = (t - 1) % 3;
                return i.a.createElement(l.a, {partialVisibility: !0, offset: {top: 100, bottom: 100}}, (function (e) {
                    var l = e.isVisible;
                    return i.a.createElement("div", {className: "to-animate " + (l ? "is-in-vp" : "")}, i.a.createElement(V, {className: f + " num-" + g}, i.a.createElement("div", {className: "flex-wrap"}, i.a.createElement("div", {className: "main-col"}, i.a.createElement(A, {number: t}), i.a.createElement(u.a, {
                        text: n,
                        delay: 200
                    }), i.a.createElement(p.h, {style: {transitionDelay: "600ms"}}, a.map((function (e, t) {
                        var n = e.title, a = e.text, o = e.footnoteSymbol;
                        return i.a.createElement("div", {
                            key: t,
                            className: "num-item " + (n ? "has-title" : "")
                        }, n && i.a.createElement("div", {className: "num-title"}, n), i.a.createElement("p", null, String(a).trim(), o && i.a.createElement("sup", null, o)))
                    }))), d ? "" : i.a.createElement("div", null, (m || []).map((function (e) {
                        var t = e.footnoteSymbol, n = e.linkText, a = e.text, o = e.modalContent, r = e.modalCloseButton;
                        return i.a.createElement("div", {
                            key: t,
                            className: "footnote-item"
                        }, i.a.createElement("span", {className: "footnote-num"}, t, ". "), a, i.a.createElement("button", {
                            type: "button",
                            className: "modal-btn",
                            onClick: function () {
                                c.openModal({
                                    override: {
                                        modalData: {
                                            title: null == o ? void 0 : o.title,
                                            content: {
                                                introContent: [],
                                                sections: [{title: "", text: null == o ? void 0 : o.text}]
                                            },
                                            closeBtn: r
                                        }
                                    }
                                })
                            }
                        }, n))
                    })))), i.a.createElement("div", {className: "side-col"}, o && i.a.createElement(B, {
                        image: Object.assign({}, o),
                        variation: "small" !== o.size ? "from-right" : "from-left"
                    }), r && i.a.createElement(B, {
                        image: Object.assign({}, r),
                        variation: "small" !== r.size ? "from-right" : "from-left"
                    }))), d ? i.a.createElement("div", {className: "below-col"}, (m || []).map((function (e) {
                        var t = e.footnoteSymbol, n = (e.linkText, e.text), a = e.modalContent;
                        e.modalCloseButton;
                        return i.a.createElement("div", {
                            key: t,
                            className: "footnote-item"
                        }, i.a.createElement("div", null, i.a.createElement("p", null, t, ". ", i.a.createElement("span", {className: "footnote-item-title"}, a.title, ":"), " ", n)))
                    }))) : ""))
                }))
            }, P = n("pqE3"), _ = n("/huT");
        n("bdEM"), n("741A"), n("bPrE"), t.default = function (e) {
            var t = e.data.wpgraphql.page, n = t.title, a = t.aboutusacf,
                m = Object(s.h)([a.leadershipSection.name, a.atAGlanceSectionName, a.methodologySection.name, a.globeSection.name, a.banner.name]),
                l = Object(_.a)({initialOpen: !1, acceptType: ""}).modalProps;
            return i.a.createElement(o.a, null, i.a.createElement(r.a, {title: n}), i.a.createElement(k, {
                hexagonData: m[0],
                title: a.leadershipSection.title,
                firstText: a.leadershipSection.text,
                quoteText: a.leadershipSection.quoteText,
                quoteName: a.leadershipSection.fullName,
                quoteLabel: a.leadershipSection.companyPosition,
                imageText: a.leadershipSection.imageText,
                image1: a.leadershipSection.image,
                image1Mobile: a.leadershipSection.imageMobile,
                quoteImage: a.leadershipSection.ceoPhoto,
                image2: a.leadershipSection.image2
            }), i.a.createElement(b, {
                hexagonData: m[1],
                title: a.atAGlanceTitle,
                items: a.atAGlanceItems,
                cutouts: "cutout-bottom cutout-secondary300"
            }), i.a.createElement(I, {
                leftTextColumn: a.methodologySection.leftTextColumn,
                rightTextColumn: a.methodologySection.rightTextColumn,
                title: a.methodologySection.title,
                hexagonData: m[2],
                list: a.methodologySection.list,
                image1: a.methodologySection.image
            }), i.a.createElement(F, {
                number: 1,
                title: a.macroThinkingTitle,
                items: a.macroThinkingContent,
                image2: Object.assign({}, a.macroThinkingImage, {size: "large"})
            }), i.a.createElement(F, {
                number: 2,
                title: a.tradeStructuringTitle,
                items: a.tradeStructuringContent,
                image1: Object.assign({}, a.tradeStructuringImage, {size: "large"}),
                image2: Object.assign({}, a.tradeStructuringImage2, {size: "small"}),
                footnotes: (null == a ? void 0 : a.tradeStructuringFootnotes) || [],
                alignFootNotesBelow: "true",
                modalProps: l
            }), i.a.createElement(F, {
                number: 3,
                title: a.riskManagementTitle,
                items: a.riskManagementContent,
                image1: Object.assign({}, a.riskManagementImage, {size: "small"}),
                image2: Object.assign({}, a.riskManagementImage2, {size: "large"})
            }), i.a.createElement(C, {
                hexagonData: m[3],
                title: a.globeSection.title,
                text1: a.globeSection.leftTextColumn,
                text2: a.globeSection.rightTextColumn,
                linkData: a.globeSection.acflinkAcfLink,
                linkUrl: "/",
                linkText: "Login for Details",
                linkClass: "about-pg-globe-btn"
            }), i.a.createElement(P.a, {
                title: a.banner.title,
                linkData: a.banner.acfLink,
                background: a.banner.image,
                backgroundMobile: a.banner.imageMobile,
                hexagonData: {}
            }))
        }
    }, pLTZ: function (e, t, n) {
        var a = n("q1tI");

        function i(e) {
            return a.createElement("svg", e, a.createElement("path", {
                d: "M0 34V18.9109L9.4873 0H15.1143L6.93555 18.9109H15.1143V34H0ZM23.8164 34V18.9109L33.3691 0H38.9961L30.8174 18.9109H38.9961V34H23.8164Z",
                fill: "#BDB4A8"
            }))
        }

        i.defaultProps = {width: "39", height: "34", viewBox: "0 0 39 34", fill: "none"}, e.exports = i, i.default = i
    }, pqE3: function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return x
        }));
        var a = n("q1tI"), i = n.n(a), o = n("9eSz"), r = n.n(o), m = n("aqT/"), l = n.n(m), c = n("REGc"),
            s = n("ZWRB"), u = n("yrOS"), d = n("Y9D7"), p = n("h+r4"), f = n("YfPL"),
            g = n("vOnD").default.div.withConfig({
                displayName: "bannerstyles__BannerMain",
                componentId: "sc-14t90kj-0"
            })(["position:relative;padding:200px 0;display:flex;align-items:center;", " ", " ", "{margin-bottom:25px;", "}.gatsby-image-wrapper{position:absolute;left:0;top:0;width:100%;height:100%;}.banner-content{position:relative;a{span{color:#fff;}}}", "{color:", ";margin-bottom:.3em;", "}.btn{color:", ";}&.large{padding:251px 0;", "}&.contact-page{overflow:hidden;padding:0 !important;background-color:", ";.banner-inner{margin-top:141px;padding:281px 0 381px;position:relative;", " ", " ", "}", "{margin-bottom:75px;}}.mobile{", "}.desktop{", '}.contact-bg{position:absolute;width:56%;right:5.4%;top:7%;svg{position:absolute;top:0;left:0;width:100%;height:100%;}[class^="brev-dot-"]{animation-name:contactDotAnimation;animation-iteration-count:infinite;animation-duration:3s;animation-delay:.4s;animation-fill-mode:both;transform-box:fill-box;transform-origin:center center;fill:#d1c8ba;}.brev-dot-1{animation-duration:3.1s;animation-delay:0.1s;}.brev-dot-2{animation-duration:3.2s;animation-delay:0.2s;}.brev-dot-3{animation-duration:3.3s;animation-delay:0.3s;}.brev-dot-4{animation-duration:3.4s;animation-delay:0.4s;}.brev-dot-5{animation-duration:3.5s;animation-delay:0.5s;}.brev-dot-6{animation-duration:3.6s;animation-delay:0.6s;}@keyframes contactDotAnimation{0%{transform:scale(0);}80%{transform:scale(1);opacity:1;}100%{transform:scale(1.5);opacity:0;}}}'], (function (e) {
                return e.theme.min("mac", (function (e) {
                    return "\n  min-height: 800px;\n"
                }), e)
            }), (function (e) {
                return e.theme.max("sm", (function (e) {
                    return "\n  padding: 100px 0 190px;\n  background-color: " + e.theme.colors.primary200 + ";\n  min-height: 667px;\n"
                }), e)
            }), f.d, (function (e) {
                return e.theme.max("sm", (function (e) {
                    return "\n    margin-bottom: 73px;\n  "
                }), e)
            }), f.i, (function (e) {
                return e.theme.colors.white
            }), (function (e) {
                return e.theme.max("sm", (function (e) {
                    return "\n    margin-bottom: 1em;\n  "
                }), e)
            }), (function (e) {
                return e.theme.colors.white
            }), (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n    padding: 100px 0 190px;\n\n    " + f.i + " {\n      max-width: 250px;\n    }\n  "
                }))
            }), (function (e) {
                return e.theme.colors.primary100
            }), (function (e) {
                return e.theme.max("mac", (function () {
                    return "\n      padding: 200px 0;\n    "
                }))
            }), (function (e) {
                return e.theme.max("lt", (function () {
                    return "\n      padding: 140px 0;\n    "
                }))
            }), (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n      padding: 140px 0 261px;\n      margin-top: 85px;\n    "
                }))
            }), f.d, (function (e) {
                return e.theme.min("sm", (function () {
                    return "\n    display: none;\n  "
                }))
            }), (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n    display: none;\n  "
                }))
            })), b = n("4XGp"), x = function (e) {
                var t = e.title, n = e.linkData, a = e.background, o = e.modifier, m = e.linkClass, x = e.backgroundMobile,
                    h = e.titleResponsive, v = void 0 === h ? [] : h, E = e.alternativeBg, y = void 0 === E ? null : E,
                    k = e.hexagonData, w = k.name, N = k.sectionNum, O = Object(b.c)().popupTermsStatus;
                return i.a.createElement(l.a, {
                    partialVisibility: !0,
                    offset: {top: 100, bottom: 100},
                    delayedCall: !0
                }, (function (e) {
                    var l = e.isVisible;
                    return i.a.createElement(g, {className: (o || "") + " to-animate " + (l && "accepted" === O ? "is-in-vp" : "")}, i.a.createElement("div", {className: "banner-inner"}, x && i.a.createElement(r.a, {
                        fluid: Object(p.k)(x),
                        style: {position: "absolute"},
                        className: "mobile"
                    }), a && i.a.createElement(r.a, {
                        fluid: Object(p.k)(a),
                        style: {position: "absolute"},
                        className: "desktop"
                    }), y, i.a.createElement(f.a, null, i.a.createElement("div", {className: "banner-content"}, i.a.createElement(u.a, {
                        number: N,
                        className: "light"
                    }, w), i.a.createElement(d.a, {text: t, responsive: v}), n && i.a.createElement(c.a, {
                        linkData: n,
                        className: "btn secondary " + p.j + (m || "banner-button")
                    }, i.a.createElement(s.a, {text: n.linkText, delay: 1e3}))))))
                }))
            }
    }, zLVn: function (e, t, n) {
        "use strict";

        function a(e, t) {
            if (null == e) return {};
            var n, a, i = {}, o = Object.keys(e);
            for (a = 0; a < o.length; a++) n = o[a], t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i
        }

        n.d(t, "a", (function () {
            return a
        }))
    }
}]);
//# sourceMappingURL=component---src-templates-about-us-js-17b29db914f610c8fb66.js.map
