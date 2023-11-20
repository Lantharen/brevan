(window.webpackJsonp = window.webpackJsonp || []).push([[17], {
    "3xcY": function (t, n, e) {
        var a = e("q1tI");

        function i(t) {
            return a.createElement("svg", t, [a.createElement("path", {
                opacity: "0.2",
                d: "M34.1695 34.1695L55 25.5412L75.8305 34.1695L84.4588 55L75.8305 75.8305L55 84.4588L34.1695 75.8305L25.5412 55L34.1695 34.1695Z",
                stroke: "#ECE9E5",
                key: 0
            }), a.createElement("path", {
                opacity: "0.2",
                d: "M30.6339 30.6339L55 20.5412L79.3661 30.6339L89.4588 55L79.3661 79.3661L55 89.4588L30.6339 79.3661L20.5412 55L30.6339 30.6339Z",
                stroke: "#ECE9E5",
                key: 1
            }), a.createElement("path", {
                opacity: "0.2",
                d: "M16.4918 16.4918L55 0.541196L93.5082 16.4918L109.459 55L93.5082 93.5082L55 109.459L16.4918 93.5082L0.541196 55L16.4918 16.4918Z",
                stroke: "#ECE9E5",
                key: 2
            })])
        }

        i.defaultProps = {
            width: "110",
            height: "110",
            viewBox: "0 0 110 110",
            fill: "none"
        }, t.exports = i, i.default = i
    }, REGc: function (t, n, e) {
        "use strict";
        e.d(n, "a", (function () {
            return m
        }));
        var a = e("zLVn"), i = e("q1tI"), r = e.n(i), o = e("Wbzz"), m = function (t) {
            var n, e = t.linkData, i = function (t) {
                    t.linkData;
                    return Object(a.a)(t, ["linkData"])
                }(t),
                m = "internal" === (null == e ? void 0 : e.type) ? {to: null == e || null === (n = e.linkToPage) || void 0 === n ? void 0 : n.uri} : {href: null == e ? void 0 : e.externalUrl},
                c = {target: null != e && e.openInNewWindow ? "_blank" : "_self"}, u = Object.assign({}, m, c, i);
            return null != e && e.linkToPage || null != e && e.externalUrl ? "internal" === (null == e ? void 0 : e.type) ? r.a.createElement(o.Link, Object.assign({activeClassName: "active"}, u), t.children) : r.a.createElement("a", u, t.children) : r.a.createElement(r.a.Fragment, null)
        }
    }, SdLs: function (t, n, e) {
        var a = e("q1tI");

        function i(t) {
            return a.createElement("svg", t, a.createElement("path", {
                d: "M14.5623 17.8487L8.93738 23.4735V0.34375H7.06238V23.4734L1.43762 17.8487L0.111816 19.1745L7.99994 27.0626L15.8881 19.1745L14.5623 17.8487Z",
                fill: "white"
            }))
        }

        i.defaultProps = {width: "16", height: "28", viewBox: "0 0 16 28", fill: "none"}, t.exports = i, i.default = i
    }, U1an: function (t, n, e) {
        "use strict";
        e.d(n, "a", (function () {
            return u
        }));
        var a = e("q1tI"), i = e.n(a), r = e("Wbzz"), o = e("9eSz"), m = e.n(o), c = e("h+r4"), u = function () {
            var t = Object(r.useStaticQuery)("2238259800").img.childImageSharp;
            return i.a.createElement(m.a, {fluid: Object(c.k)(t)})
        }
    }, nEv0: function (t, n, e) {
        "use strict";
        e.r(n);
        var a = e("q1tI"), i = e.n(a), r = e("Bl7J"), o = e("vrFN"), m = e("9eSz"), c = e.n(m), u = e("oqc9"),
            l = e("aqT/"), s = e.n(l), p = e("TSYQ"), f = e.n(p), d = e("SdLs"), x = e.n(d), h = e("vOnD"),
            g = e("nOd8"), b = h.default.div.withConfig({
                displayName: "herostyles__HeroImgWrap",
                componentId: "sc-1yzlgmx-0"
            })(["position:relative;height:calc(", "vh - ", "px);max-height:720px;margin:0 auto;width:50.2%;transform:translate(0,15%);.to-animate.is-in-vp.loading-done &{transition:transform ", "ms ", " ", "ms,width ", "ms ease ", "ms;width:25.2%;transform:translate(0,0);}", " ", " ", " @media (max-height:490px){height:calc(", "vh - ", "px);}.hero-img-tc{position:relative;position:absolute;height:100%;width:100%;transform:translate(0,30%);.to-animate.is-in-vp.loading-done &{transition:", "ms ease ", "ms;transform:translate(0,0);}}.hero-img-inner{position:absolute;width:100%;overflow:hidden;bottom:0;left:0;height:0;.to-animate.is-in-vp.loading-done &{transition:", "ms ", " ", "ms;height:100%;}}.gatsby-image-wrapper{opacity:.3;position:absolute !important;bottom:0;left:0;width:100%;height:calc(", "vh - ", "px);transform:scale(1.15);.to-animate.is-in-vp.loading-done &{transition:", "ms ease ", "ms;transform:scale(1);}}"], 80, (function (t) {
                return t.theme.dimensions.headerHeightDt
            }), 1500, g.b, 5, 1e3, 1500, (function (t) {
                return t.theme.max("mac", (function (t) {
                    return "\n    max-height: 720px;\n    width: 48%;\n    .to-animate.is-in-vp.loading-done & {\n      width: 37%;\n    }\n  "
                }), t)
            }), (function (t) {
                return t.theme.max("md", (function () {
                    return "\n    width: 50%;\n    .to-animate.is-in-vp.loading-done & {\n      width: 40%;\n    }\n  "
                }))
            }), (function (t) {
                return t.theme.max("sm", (function (t) {
                    return "\n    max-height: 402px;\n    max-width: 240px;\n    width: 80%;\n    .to-animate.is-in-vp.loading-done & {\n      width: 63%;\n    }\n  "
                }), t)
            }), 80, (function (t) {
                return t.theme.dimensions.headerHeightDt
            }), 1350, 5, 1500, g.b, 5, 80, (function (t) {
                return t.theme.dimensions.headerHeightDt
            }), 1e3, 1500), v = h.default.div.withConfig({
                displayName: "herostyles__HeroMain",
                componentId: "sc-1yzlgmx-1"
            })(["position:relative;background-color:", ";color:", ";.hero-inner{height:calc(100vh);display:flex;flex-direction:column;justify-content:center;align-items:center;padding-bottom:30px;padding-top:", "px;", "}.sc-idc{text-align:center;font-size:10px;text-transform:uppercase;margin-top:30px;padding:10px;}.sc-idc-inner{overflow:hidden;padding:0 30px;svg{animation:scrollDownIndicate 3000ms ease 0ms infinite;}}@keyframes scrollDownIndicate{0%{transform:translate(0,-5px);}50%{transform:translate(0,10px);}100%{transform:translate(0,-5px);}}.sc-idc-btn{cursor:pointer;appearance:none;border:none;padding:5px 0 10px;background:none;border-radius:0;color:#fff;text-transform:uppercase;transition:opacity 400ms;transform:translate(0,-100%);.to-animate.is-in-vp.loading-done &{transition:opacity 400ms,transform ", "ms ease ", "ms;transform:translate(0,0);}&:hover{opacity:.7;}}.hero-title{position:absolute;font-size:106px;text-align:center;line-height:.84;max-width:1350px;width:90%;z-index:5;left:50%;top:52%;margin-top:-50px;transform:translate(-50%,-50%) scale(.8,.8);letter-spacing:-0.019em;margin-bottom:0;", " .to-animate.is-in-vp.loading-done &{transition:", "ms ease ", "ms;transform:translate(-50%,-50%) scale(1,1);}", " .p-wrap,.m-wrap{display:block;}", " ", " ", " ", " ", "}.p-wrap{&>.m-wrap{margin-top:-.15em;overflow:hidden;", " &>.m-wrap{padding-bottom:.30em;transform:translate(0,100%);.to-animate.is-in-vp.loading-done &{transition:", "ms ease-out ", "ms;transform:translate(0,0);}}&:nth-child(1){&>.m-wrap{.to-animate.is-in-vp.loading-done &{transition-delay:", "ms;}}}&:nth-child(2){&>.m-wrap{.to-animate.is-in-vp.loading-done &{transition-delay:", "ms;}}}&:nth-child(3){&>.m-wrap{.to-animate.is-in-vp.loading-done &{transition-delay:", "ms;}}}&:first-child{margin-top:0;}}", "}"], (function (t) {
                return t.theme.colors.primary
            }), (function (t) {
                return t.theme.colors.white
            }), (function (t) {
                return t.theme.dimensions.headerHeightDt
            }), (function (t) {
                return t.theme.max("sm", (function () {
                    return "\n    padding-top: 110px;\n    padding-bottom: 100px;\n  "
                }))
            }), 1e3, 1500, (function (t) {
                return t.theme.max("mac", (function () {
                    return "\n    margin-top: -10px;\n  "
                }))
            }), 1e3, 1500, (function (t) {
                return t.theme.max("md", (function () {
                    return "\n    padding: 0 24px;\n  "
                }))
            }), (function (t) {
                return t.theme.max("lt", (function () {
                    return "\n    font-size: 85px;\n  "
                }))
            }), (function (t) {
                return t.theme.max("lg", (function () {
                    return "\n    font-size: 80px;\n  "
                }))
            }), (function (t) {
                return t.theme.max("sm", (function () {
                    return "\n    font-size: 60px;\n    top: 45%;\n\n    .p-wrap {\n      padding-bottom: 10px;\n      padding-top: 10px;\n    }\n\n    .m-wrap {\n      display: inline;\n    }\n  "
                }))
            }), (function (t) {
                return t.theme.max("sf", (function () {
                    return "\n    font-size: 55px;\n    line-height: .99;\n    width: 100%;\n  "
                }))
            }), (function (t) {
                return t.theme.max("xs", (function () {
                    return "\n    font-size: 40px;\n  "
                }))
            }), (function (t) {
                return t.theme.max("sm", (function () {
                    return "\n      overflow: visible;\n    "
                }))
            }), 650, 1305, 200, 400, 600, (function (t) {
                return t.theme.max("md", (function () {
                    return "\n    opacity: 0;\n\n    .to-animate.is-in-vp.loading-done & {\n      transition: 1300ms ease 505ms;\n      opacity: 1;\n    }\n  "
                }))
            })), y = e("h+r4"), E = e("alMr"), k = e("4XGp"), w = function (t) {
                var n = t.heroTitle, e = t.heroImage, a = Object(E.c)().preloaded, r = Object(k.c)().popupTermsStatus;
                return i.a.createElement(s.a, {partialVisibility: !0, offset: {top: 20, bottom: 20}}, (function (t) {
                    var o = t.isVisible;
                    return i.a.createElement("div", {
                        className: f()("to-animate", {
                            "is-in-vp": o && "accepted" === r,
                            "loading-done": !a
                        })
                    }, i.a.createElement(v, null, i.a.createElement("h1", {className: "hero-title"}, i.a.createElement(y.a, {
                        text: n,
                        multiWrap: 1
                    })), i.a.createElement("div", {className: "hero-inner"}, i.a.createElement(b, null, i.a.createElement("div", {className: "hero-img-inner"}, i.a.createElement("div", {className: "hero-img-tc"}, i.a.createElement(c.a, {fluid: Object(y.k)(e)})))), i.a.createElement("div", {className: "sc-idc"}, i.a.createElement("div", {className: "sc-idc-inner"}, i.a.createElement("button", {
                        className: "sc-idc-btn " + y.j + "scroll-down-btn",
                        onClick: function () {
                            u.animateScroll.scrollTo("undefined" != typeof window ? 1.2 * window.innerHeight : 1e3)
                        }
                    }, i.a.createElement(x.a, null)))))))
                }))
            }, N = e("3xcY"), j = e.n(N), O = e("U1an"), L = e("yrOS"), D = e("Y9D7"), z = e("YfPL"),
            I = h.default.div.withConfig({
                displayName: "icon-liststyles__IconListMain",
                componentId: "sc-18ysyy6-0"
            })(["position:relative;padding-top:140px;padding-bottom:138px;", " .full-bg-wrap{position:absolute;width:100%;height:100%;padding-top:139px;top:0;left:0;", " &:before{content:'';display:block;position:absolute;width:100%;top:0;height:100%;left:0;background-color:", ";}}&.cutout-top{&:before{background-color:", ";}}&.cutout-bottom{.full-bg-wrap{&:before{height:calc(100% - 1px);}}}&.cutout-bottom.cutout-top{.full-bg-wrap{&:before{height:calc(100% - 2px);top:1px;}}}.gatsby-image-wrapper{max-height:1200px;height:100%;}", ",", "{position:relative;z-index:5;}", "{margin-bottom:79px;", " .hexagon-num{color:", ";}svg{opacity:.2;}}", "{color:", ";margin-bottom:0.8em;", "}.list{position:relative;justify-content:space-between;}.item-wrap{", " padding-top:43px;padding-bottom:53px;text-align:center;&.fd{", "}", " ", "}.item-icon-wrap{position:relative;margin-bottom:0.9em;display:inline-block;}.item-icon{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);}.item-title{color:", ";font-size:26px;line-height:1.2;margin-bottom:.6em;", " span{display:block;}}.item-text{color:", ";line-height:1.5;}&.to-animate{.item-icon-svg{transform:scale(1.5);opacity:0;}.item-title{opacity:0;transform:translate(0,50px);}.item-icon{opacity:0;transform:translate(-50%,-50%) scale(0);}}&.to-animate:not(.is-in-vp){.item-title,.item-icon-svg,.item-icon{transition-delay:0ms !important;}}&.to-animate.is-in-vp{.item-icon-svg{transform:scale(1);opacity:1;transition:800ms;}.item-title{opacity:1;transform:translate(0,0);transition:800ms ease 500ms;}.item-icon{transition:800ms ease 100ms;opacity:1;transform:translate(-50%,-50%) scale(1);}}"], (function (t) {
                return t.theme.max("sm", (function (t) {
                    return "\n  padding-top: 90px;\n  padding-bottom: 48px;\n"
                }), t)
            }), (function (t) {
                return t.theme.max("sm", (function (t) {
                    return "\n    .gatsby-image-wrapper {\n      display: none;\n    }\n  "
                }), t)
            }), (function (t) {
                return t.theme.colors.primary100
            }), (function (t) {
                return t.theme.colors.secondary300
            }), z.d, z.i, z.d, (function (t) {
                return t.theme.max("sm", (function () {
                    return "\n    margin-bottom: 40px;\n  "
                }))
            }), (function (t) {
                return t.theme.colors.secondary200
            }), z.i, (function (t) {
                return t.theme.colors.white
            }), (function (t) {
                return t.theme.max("sm", (function (t) {
                    return "\n    margin-bottom: 1.2em;\n  "
                }), t)
            }), Object(z.k)(29.4), (function (t) {
                return t.theme.min("md", (function () {
                    return "\n      " + Object(z.k)(25.4) + "\n    "
                }))
            }), (function (t) {
                return t.theme.max("sm", (function (t) {
                    return "\n    " + Object(z.k)(50) + "\n  "
                }), t)
            }), (function (t) {
                return t.theme.max("sf", (function (t) {
                    return "\n    " + Object(z.k)(100) + "\n    padding-top: 20px;\n    padding-bottom: 23px;\n  "
                }), t)
            }), (function (t) {
                return t.theme.colors.secondary100
            }), (function (t) {
                return t.theme.max("md", (function () {
                    return "\n    font-size: 26px;\n  "
                }))
            }), (function (t) {
                return t.theme.colors.white
            })), C = function (t) {
                var n = t.cutouts, e = t.title, a = t.list, r = void 0 === a ? [] : a, o = t.hexagonData, m = o.name,
                    c = o.sectionNum;
                return i.a.createElement(s.a, {partialVisibility: !0, offset: {top: 100, bottom: 100}}, (function (t) {
                    var a = t.isVisible;
                    return i.a.createElement(I, {className: "to-animate " + (a ? "is-in-vp" : "") + " " + n}, i.a.createElement("div", {className: "full-bg-wrap"}, i.a.createElement(O.a, null)), i.a.createElement(z.a, null, i.a.createElement(L.a, {
                        number: c,
                        className: "light",
                        style: {transitionDelay: "600ms"}
                    }, m), i.a.createElement(D.a, {
                        text: e,
                        delay: 800,
                        responsive: y.d
                    }), i.a.createElement("div", {className: "row list"}, r.map((function (t, n) {
                        var e = t.itemIcon, a = t.title;
                        return i.a.createElement("div", {
                            key: n,
                            className: "pad-col item-wrap " + (n % 3 == 0 ? "fd" : "")
                        }, i.a.createElement("div", {className: "item"}, i.a.createElement("div", {className: "item-icon-wrap " + e}, i.a.createElement("div", {
                            className: "item-icon-svg",
                            style: {transitionDelay: 400 + 100 * n + "ms"}
                        }, i.a.createElement(j.a, null)), i.a.createElement("div", {
                            className: "item-icon",
                            style: {transitionDelay: 500 + 100 * n + "ms"}
                        }, i.a.createElement(y.b, {icon: e}))), i.a.createElement("div", {
                            className: "item-title",
                            style: {transitionDelay: 600 + 100 * n + "ms"}
                        }, i.a.createElement(y.a, {text: a, type: "span"}))))
                    })))))
                }))
            }, T = e("REGc"), S = e("ZWRB"), V = e("PHNs"), _ = e("I3Cp"), B = h.default.div.withConfig({
                displayName: "us-in-numbersstyles__UsInNumbersMain",
                componentId: "sc-1y3q431-0"
            })(["position:relative;padding:140px 0 38px;", " &:before{content:'';display:block;position:absolute;bottom:0;right:", "%;height:47.5%;width:1px;transform:translate(1px,0);background-color:", ";opacity:.1;", "}.overview-intro{max-width:1040px;margin-bottom:64px;", " ", "{margin-bottom:.34em;", "}", "{margin-bottom:2.3em;}}.main-col{", " ", " margin-right:auto;", " ", "}.side-col{", " ", " padding-top:65px;margin-left:auto;", " ", " ", "}.uin-num,.uin-num-lg{font-family:", ";font-weight:100;color:", ";}.uin-num-lg{display:inline-block;transform:translate(-.05em,.2em);font-size:375px;line-height:1;", " ", " ", "}.uin-text{font-size:16px;opacity:.7;margin-bottom:0;line-height:1.5;", "}.uin-text-lg{max-width:385px;padding-top:46px;", " ", "}.uin-text-sm{", "}.uin-footnote{font-size:14px;line-height:1.5;opacity:.5;margin-left:45.6%;", " ", "}.uin-num{text-align:center;font-size:92px;", " ", " ", " ", "}.uin-content{", " padding-top:5px;", " ", "}.uin-num-symb{display:inline-block;font-size:56px;min-width:.5em;transform:translate(.05em,-.3em);", "}.uin-title{font-size:20px;margin-bottom:0.7em;}.uin-item{display:flex;margin-bottom:100px;&.last{margin-bottom:20px;}", "}", "{margin-bottom:41px;", "}&.to-animate{.uin-footnote,.uin-content{overflow:hidden;}.uin-fn-in,.uin-text-sm,.uin-title{transform:translate(-100%,0);opacity:0;}.main-col{opacity:0;transform:translate(0,100px);}}&.to-animate:not(.is-in-vp){.main-col,.uin-fn-in,.uin-text-sm,.uin-title{transition-delay:0ms !important;}}&.to-animate.is-in-vp{.uin-fn-in,.uin-text-sm,.uin-title{transition:", "ms ease ", "ms;transform:translate(0);opacity:1;}.uin-text-sm{transition-delay:", "ms;}.main-col{transition:", "ms ease ", "ms;opacity:1;transform:translate(0,0);}}"], (function (t) {
                return t.theme.max("sm", (function () {
                    return "\n  padding: 63px 0 95px;\n"
                }))
            }), (function (t) {
                return t.theme.dimensions.cutoutWpos
            }), (function (t) {
                return t.theme.colors.black
            }), (function (t) {
                return t.theme.max("md", (function (t) {
                    return "\n    content: none;\n  "
                }), t)
            }), (function (t) {
                return t.theme.max("sm", (function () {
                    return "\n    margin-bottom: 44px;\n  "
                }))
            }), z.i, (function (t) {
                return t.theme.max("sm", (function () {
                    return "\n      margin-bottom: 1em;\n    "
                }))
            }), z.h, Object(z.m)(), Object(z.k)(5, "c"), (function (t) {
                return t.theme.max("md", (function (t) {
                    return "\n    text-align: center;\n    " + Object(z.k)(38) + "\n  "
                }), t)
            }), (function (t) {
                return t.theme.max("sm", (function (t) {
                    return "\n    " + Object(z.k)(100) + "\n    text-align: left;\n    padding-bottom: 25px;\n  "
                }), t)
            }), Object(z.m)("right", 4), Object(z.k)(7.4, "c"), (function (t) {
                return t.theme.max("mac", (function () {
                    return "\n    " + Object(z.k)(9, "c") + "\n  "
                }))
            }), (function (t) {
                return t.theme.max("md", (function () {
                    return "\n    " + Object(z.k)(62) + "\n  "
                }))
            }), (function (t) {
                return t.theme.max("sm", (function (t) {
                    return "\n    " + Object(z.k)(100) + "\n    display: flex;\n    flex-direction: column;\n    padding-top: 35px;\n  "
                }), t)
            }), (function (t) {
                return t.theme.fonts.tertiary
            }), (function (t) {
                return t.theme.colors.secondary
            }), (function (t) {
                return t.theme.max("mac", (function (t) {
                    return "\n    font-size: 360px;\n  "
                }), t)
            }), (function (t) {
                return t.theme.max("md", (function () {
                    return "\n    font-size: 320px;\n  "
                }))
            }), (function (t) {
                return t.theme.max("sm", (function (t) {
                    return "\n    font-size: 241px;\n    line-height: 0.85;\n  "
                }), t)
            }), (function (t) {
                return t.theme.max("mb", (function () {
                    return "\n    min-height: 3.8em;\n  "
                }))
            }), (function (t) {
                return t.theme.max("md", (function (t) {
                    return "\n    margin: 0 auto;\n    text-align: left;\n  "
                }), t)
            }), (function (t) {
                return t.theme.max("sm", (function (t) {
                    return "\n    margin-left: 0;\n  "
                }), t)
            }), (function (t) {
                return t.theme.min("sm", (function () {
                    return "\n    max-width: 323px;\n  "
                }))
            }), (function (t) {
                return t.theme.max("ls", (function () {
                    return "\n    margin-left: 48%;\n  "
                }))
            }), (function (t) {
                return t.theme.max("sm", (function () {
                    return "\n    margin-left: 0;\n    order: 10;\n  "
                }))
            }), Object(z.k)(45.6), (function (t) {
                return t.theme.max("ls", (function (t) {
                    return "\n    " + Object(z.k)(48) + "\n  "
                }), t)
            }), (function (t) {
                return t.theme.max("mac", (function (t) {
                    return "\n    font-size: 72px;\n  "
                }), t)
            }), (function (t) {
                return t.theme.max("sm", (function (t) {
                    return "\n    " + Object(z.k)(100) + "\n    text-align: left;\n    font-size: 92px;\n  "
                }), t)
            }), Object(z.k)(54.4), (function (t) {
                return t.theme.max("ls", (function (t) {
                    return "\n    " + Object(z.k)(52) + "\n  "
                }), t)
            }), (function (t) {
                return t.theme.max("sm", (function (t) {
                    return "\n    " + Object(z.k)(100) + "\n    margin-top: -.55em;\n  "
                }), t)
            }), (function (t) {
                return t.theme.max("mac", (function (t) {
                    return "\n    font-size: 40px;\n  "
                }), t)
            }), (function (t) {
                return t.theme.max("sm", (function (t) {
                    return "\n    flex-wrap: wrap;\n    margin-bottom: 40px;\n  "
                }), t)
            }), z.d, (function (t) {
                return t.theme.max("sm", (function () {
                    return "\n    margin-bottom: 60px;\n  "
                }))
            }), 800, 50, 250, 800, 150), M = function (t) {
                var n = t.number, e = t.symbol, a = t.title, r = t.text, o = t.i, m = t.itemsNum, c = t.isVisible,
                    u = Object(V.useCountUp)({start: 1, end: n, duration: 3}), l = u.countUp, s = u.start, p = u.reset;
                return i.a.useEffect((function () {
                    c && s(), c || p()
                }), [c]), i.a.createElement("div", {className: "uin-item " + (o + 1 === m ? "last" : "")}, i.a.createElement("div", {className: "uin-num"}, i.a.createElement("span", {className: "uin-num-txt"}, (l < 10 ? "0" : "") + l), i.a.createElement("span", {className: "uin-num-symb"}, e)), i.a.createElement("div", {className: "uin-content"}, i.a.createElement("div", {className: "uin-title"}, i.a.createElement(y.a, {text: a})), i.a.createElement("p", {className: "uin-text uin-text-sm"}, i.a.createElement(y.a, {text: r}))))
            }, q = function (t) {
                var n = t.hexagonData, e = n.name, a = n.sectionNum, r = t.items, o = t.yearsNumber, m = t.yearsText,
                    c = t.footnote, u = t.linkData, l = t.yearsTitle, p = t.title, f = t.text, d = i.a.useState(!1),
                    x = d[0], h = d[1], g = Object(V.useCountUp)({start: 1, end: o, duration: 3}), b = g.countUp,
                    v = g.start, E = g.reset;
                return i.a.createElement(s.a, {
                    partialVisibility: !0,
                    offset: {top: 100, bottom: 100},
                    onChange: function (t) {
                        t ? v() : E(), h(t)
                    }
                }, i.a.createElement(B, {className: "to-animate " + (x ? "is-in-vp" : "")}, i.a.createElement(z.a, null, i.a.createElement(L.a, {number: a}, e), i.a.createElement("div", {className: "overview-intro"}, i.a.createElement(D.a, {
                    text: p,
                    responsive: [{charLimit: 8, breakpoint: 767}]
                }), i.a.createElement(_.a, {
                    text: f,
                    variation: "large-text",
                    delay: 600
                }), i.a.createElement(T.a, {
                    linkData: u,
                    className: "btn secondary mobile hp-about-link"
                }, i.a.createElement(S.a, {text: u.linkText})))), i.a.createElement("div", {className: "flex-wrap"}, i.a.createElement("div", {className: "main-col"}, i.a.createElement("div", {className: "uin-num-lg"}, b), i.a.createElement("div", {className: "uin-text-lg"}, l && i.a.createElement("div", {className: "uin-title"}, l), i.a.createElement("div", {className: "uin-text"}, i.a.createElement(y.a, {text: m})))), i.a.createElement("div", {className: "side-col"}, r.map((function (t, n) {
                    var e = t.number, a = t.symbol, o = t.title, m = t.text;
                    return i.a.createElement(M, {
                        key: n,
                        number: e,
                        symbol: a,
                        title: o,
                        text: m,
                        i: n,
                        itemsNum: r.length,
                        isVisible: x
                    })
                })), i.a.createElement("div", {className: "uin-footnote"}, i.a.createElement("div", {className: "uin-fn-in"}, c))))))
            }, H = h.default.div.withConfig({
                displayName: "about-bhstyles__AboutBHMain",
                componentId: "sc-1dwp75h-0"
            })(["padding:208px 0 68px;background-color:", ";", " ", " .flex-wrap{align-items:flex-start;}.main-col{", " ", " padding-bottom:154px;", " ", " ", "}.side-col{margin-left:auto;", " ", " ", " ", " .img-wrap{padding-top:100px;", "}}", "{margin-bottom:.38em;", "}", "{margin-bottom:2.1em;", " ", " &:not(.large-text){", "}&.large-text{max-width:480px;", "}}", "{", "}.desktop{", "}.mobile{", "}&.cutout-top{&:before{left:48%;width:52%;", "}}"], (function (t) {
                return t.theme.colors.secondary300
            }), (function (t) {
                return t.theme.max("mac", (function (t) {
                    return "\n  padding: 170px 0 120px;\n"
                }), t)
            }), (function (t) {
                return t.theme.max("sm", (function (t) {
                    return "\n  padding: 93px 0 90px;\n"
                }), t)
            }), Object(z.m)(), Object(z.k)(8, "c"), (function (t) {
                return t.theme.max("mac", (function (t) {
                    return "\n    padding-bottom: 75px;\n"
                }), t)
            }), (function (t) {
                return t.theme.max("md", (function (t) {
                    return "\n    " + Object(z.k)(43) + "\n  "
                }), t)
            }), (function (t) {
                return t.theme.max("sm", (function (t) {
                    return "\n    " + Object(z.k)(100) + "\n    padding-bottom: 0;\n  "
                }), t)
            }), Object(z.m)("right", 2.6), Object(z.k)(7.35, "c"), (function (t) {
                return t.theme.max("md", (function (t) {
                    return "\n    " + Object(z.k)(48) + "\n  "
                }), t)
            }), (function (t) {
                return t.theme.max("sm", (function (t) {
                    return "\n    " + Object(z.m)("left", 4) + "\n    " + Object(z.k)(100) + "\n    margin-right: 0;\n  "
                }), t)
            }), (function (t) {
                return t.theme.max("sm", (function (t) {
                    return "\n    padding-top: 80px;\n  "
                }), t)
            }), z.i, (function (t) {
                return t.theme.max("sm", (function (t) {
                    return "\n    margin-bottom: .98em;\n  "
                }), t)
            }), z.h, (function (t) {
                return t.theme.min("sm", (function (t) {
                    return "\n    max-width: 520px;\n  "
                }), t)
            }), (function (t) {
                return t.theme.max("sm", (function (t) {
                    return "\n    margin-bottom: 0;\n  "
                }), t)
            }), (function (t) {
                return t.theme.min("sm", (function (t) {
                    return "\n      margin-left: auto;\n    "
                }), t)
            }), (function (t) {
                return t.theme.max("sm", (function (t) {
                    return "\n      p {\n        margin-bottom: 1em;\n      }\n  "
                }), t)
            }), z.d, (function (t) {
                return t.theme.max("sm", (function (t) {
                    return "\n    margin-bottom: 80px;\n  "
                }), t)
            }), (function (t) {
                return t.theme.max("sm", (function (t) {
                    return "\n    display: none;\n  "
                }), t)
            }), (function (t) {
                return t.theme.min("sm", (function (t) {
                    return "\n    display: none;\n  "
                }), t)
            }), (function (t) {
                return t.theme.max("lg", (function () {
                    return "\n      height: 90px;\n    "
                }))
            })), U = e("wBAs"), W = function (t) {
                var n = t.title, e = t.linkData, a = t.text, r = t.image, o = t.hexagonData, m = o.name, c = o.sectionNum;
                return i.a.createElement(s.a, {partialVisibility: !0, offset: {top: 100, bottom: 100}}, (function (t) {
                    var o = t.isVisible;
                    return i.a.createElement(H, {className: "cutout-top to-animate " + (o ? "is-in-vp" : "")}, i.a.createElement("div", {className: "flex-wrap section-wrap"}, i.a.createElement("div", {className: "main-col"}, i.a.createElement(L.a, {number: c}, m), i.a.createElement(D.a, {text: n}), i.a.createElement(_.a, {
                        text: a,
                        variation: "large-text",
                        delay: 1e3
                    }), i.a.createElement(T.a, {
                        linkData: e,
                        className: "btn secondary " + y.j + "hp-about-link"
                    }, i.a.createElement(S.a, {
                        text: e.linkText,
                        delay: 1200
                    }))), i.a.createElement("div", {className: "side-col"}, i.a.createElement("div", {className: "img-wrap"}, i.a.createElement(U.a, {
                        image: r,
                        variation: "from-left"
                    })))))
                }))
            }, A = e("pqE3"), G = h.default.div.withConfig({
                displayName: "bh-experiencestyles__BhExperienceMain",
                componentId: "sc-zhdkoz-0"
            })(["padding-top:281px;padding-bottom:179px;", " ", " ", "{margin-bottom:80px;", "}", "{margin-bottom:.34em;", "}.image-col{", " ", " margin-left:auto;margin-top:-134px;", " ", " ", "}", "{max-width:480px;}.main-col-t{", " ", " ", "}.main-col-l{", " ", " ", "}.main-col-r{", " ", " margin-left:auto;", " ", "}.col-l-text{margin-left:33%;", " ", "}.image-wrap{max-width:88%;margin-top:138px;", " ", " &.mobile-only{", "}}.bh-link-position{margin-top:11px;", "}"], (function (t) {
                return t.theme.max("md", (function () {
                    return "\n    padding: 100px 0 100px;\n"
                }))
            }), (function (t) {
                return t.theme.max("sm", (function () {
                    return "\n    padding: 50px 0 50px;\n"
                }))
            }), z.d, (function (t) {
                return t.theme.max("sm", (function () {
                    return "\n    margin-bottom: 40px;\n  "
                }))
            }), z.i, (function (t) {
                return t.theme.max("sm", (function () {
                    return "\n    margin-bottom: 1.5em;\n  "
                }))
            }), Object(z.m)("right", 2.7), Object(z.k)(4.3, "c"), (function (t) {
                return t.theme.max("alg", (function () {
                    return "\n    margin-top: -210px;\n  "
                }))
            }), (function (t) {
                return t.theme.max("md", (function () {
                    return "\n    " + Object(z.k)(30) + "\n    order: -1;\n    margin-top: 0;\n    margin-bottom: -100px;\n  "
                }))
            }), (function (t) {
                return t.theme.max("sm", (function () {
                    return "\n    " + Object(z.k)(100) + "\n    margin-bottom: 70px;\n  "
                }))
            }), z.h, Object(z.m)(), Object(z.k)(13, "c"), (function (t) {
                return t.theme.max("md", (function () {
                    return "\n    " + Object(z.k)(100) + "\n  "
                }))
            }), Object(z.k)(50), (function (t) {
                return t.theme.max("md", (function () {
                    return "\n    " + Object(z.k)(48) + "\n    margin-right: auto;\n  "
                }))
            }), (function (t) {
                return t.theme.max("sm", (function () {
                    return "\n    " + Object(z.k)(100) + "\n  "
                }))
            }), Object(z.m)("right", 6), Object(z.k)(6, "c"), (function (t) {
                return t.theme.max("md", (function () {
                    return "\n    " + Object(z.k)(48) + "\n  "
                }))
            }), (function (t) {
                return t.theme.max("sm", (function () {
                    return "\n    " + Object(z.k)(100) + "\n  "
                }))
            }), (function (t) {
                return t.theme.max("mac", (function () {
                    return "\n    margin-left: 26%;\n  "
                }))
            }), (function (t) {
                return t.theme.max("md", (function () {
                    return "\n    margin-left: 0;\n    " + Object(z.m)() + "\n  "
                }))
            }), (function (t) {
                return t.theme.max("md", (function () {
                    return "\n    margin-top: 100px;\n  "
                }))
            }), (function (t) {
                return t.theme.max("sm", (function () {
                    return "\n    margin-top: 50px;\n    width: 100%;\n  "
                }))
            }), Object(z.k)(100), (function (t) {
                return t.theme.max("md", (function () {
                    return "\n  margin-top: 0;\n"
                }))
            })), P = function (t) {
                var n = t.title, e = t.text1, a = t.text2, r = t.linkData, o = t.image1, m = t.image2, c = t.hexagonData,
                    u = c.name, l = c.sectionNum;
                return i.a.createElement(s.a, {partialVisibility: !0, offset: {top: 100, bottom: 100}}, (function (t) {
                    var c = t.isVisible;
                    return i.a.createElement(G, {className: "flex-wrap to-animate " + (c ? "is-in-vp" : "")}, i.a.createElement("div", {className: "main-col-t"}, i.a.createElement(L.a, {number: l}, u), i.a.createElement(D.a, {
                        text: n,
                        responsive: [{breakpoint: 767, charLimit: 20}, {breakpoint: 480, charLimit: 10}]
                    })), i.a.createElement("div", {className: "image-col"}, i.a.createElement(U.a, {
                        image: m,
                        variation: "from-left"
                    })), i.a.createElement("div", {className: "main-col-l"}, i.a.createElement("div", {className: "col-l-text"}, i.a.createElement(_.a, {
                        text: e,
                        variation: "large-text",
                        delay: 1e3
                    })), i.a.createElement("div", {className: "image-wrap desktop-only"}, i.a.createElement(U.a, {
                        image: o,
                        variation: "from-left"
                    }))), i.a.createElement("div", {className: "main-col-r"}, i.a.createElement(_.a, {
                        text: a,
                        variation: "large-text",
                        delay: 1e3
                    }), i.a.createElement(T.a, {
                        linkData: r,
                        className: "btn secondary mobile " + y.j + "hp-bh-experience-link bh-link-position"
                    }, i.a.createElement(S.a, {text: r.linkText}))), i.a.createElement("div", {className: "image-wrap mobile-only"}, i.a.createElement(U.a, {
                        image: o,
                        variation: "from-left"
                    })))
                }))
            }, Y = h.default.div.withConfig({
                displayName: "woking-at-bhstyles__WorkingAtBhMain",
                componentId: "sc-1s987ur-0"
            })(["padding:141px 0 237px;background-color:", ";", " ", " ", "{margin-bottom:77px;", "}.flex-wrap{", "}.main-col{", " ", " margin-right:auto;", "}", "{margin-bottom:.36em;", "}", "{max-width:560px;margin-bottom:2.3em;", "}.side-col{margin-left:auto;", " ", " display:flex;flex-wrap:wrap;justify-content:space-between;padding-top:100px;", " ", "}.main-col,.side-col{", "}.img-1{flex:0 0 calc(46% - 5px);max-width:calc(46% - 5px);", "}.img-2{flex:0 0 50%;max-width:50%;margin-left:auto;padding-top:270px;", " ", "}"], (function (t) {
                return t.theme.colors.secondary300
            }), (function (t) {
                return t.theme.max("lg", (function (t) {
                    return "\n    padding: 100px 0 140px;\n"
                }), t)
            }), (function (t) {
                return t.theme.max("sm", (function (t) {
                    return "\n    padding: 50px 0 50px;\n"
                }), t)
            }), z.d, (function (t) {
                return t.theme.max("sm", (function () {
                    return "\n    margin-bottom: 40px;\n  "
                }))
            }), (function (t) {
                return t.theme.max("ls", (function (t) {
                    return "\n    align-items: center;\n  "
                }), t)
            }), Object(z.m)(), Object(z.k)(7, "c"), (function (t) {
                return t.theme.max("md", (function (t) {
                    return "\n    " + Object(z.k)(48) + "\n  "
                }), t)
            }), z.i, (function (t) {
                return t.theme.max("sm", (function (t) {
                    return "\n    margin-bottom: 1.3em;\n  "
                }), t)
            }), z.h, (function (t) {
                return t.theme.max("sm", (function (t) {
                    return "\n    margin-bottom: 1.9em;\n  "
                }), t)
            }), Object(z.m)("right", 2), Object(z.k)(9, "c"), (function (t) {
                return t.theme.max("md", (function (t) {
                    return "\n    " + Object(z.k)(48) + "\n  "
                }), t)
            }), (function (t) {
                return t.theme.max("sm", (function (t) {
                    return "\n    padding-top: 60px;\n  "
                }), t)
            }), (function (t) {
                return t.theme.max("sm", (function (t) {
                    return "\n    " + Object(z.k)(100) + "\n  "
                }), t)
            }), (function (t) {
                return t.theme.max("mob", (function (t) {
                    return "\n    flex: 0 0 70%;\n    max-width: 70%;\n  "
                }), t)
            }), (function (t) {
                return t.theme.max("sf", (function (t) {
                    return "\n    padding-top: 140px;\n  "
                }), t)
            }), (function (t) {
                return t.theme.max("mob", (function (t) {
                    return "\n    flex: 0 0 70%;\n    max-width: 70%;\n    padding-top: 25px;\n  "
                }), t)
            })), R = function (t) {
                var n = t.title, e = t.text, a = t.linkData, r = t.image1, o = t.image2, m = t.hexagonData, c = m.name,
                    u = m.sectionNum;
                return i.a.createElement(s.a, {partialVisibility: !0, offset: {top: 100, bottom: 100}}, (function (t) {
                    var m = t.isVisible;
                    return i.a.createElement(Y, {className: "flex-wrap to-animate " + (m ? "is-in-vp" : "")}, i.a.createElement("div", {className: "main-col"}, i.a.createElement(L.a, {number: u}, c), i.a.createElement(D.a, {
                        text: n,
                        responsive: [{breakpoint: 480, charLimit: 10}]
                    }), i.a.createElement(_.a, {
                        text: e,
                        variation: "large-text",
                        delay: 1e3
                    }), i.a.createElement(T.a, {
                        linkData: a,
                        className: "btn secondary mobile " + y.j + "hp-working-at-bh-link"
                    }, i.a.createElement(S.a, {text: a.linkText}))), i.a.createElement("div", {className: "side-col"}, i.a.createElement("div", {className: "img-1"}, i.a.createElement(U.a, {
                        image: o,
                        variation: "from-left"
                    })), i.a.createElement("div", {className: "img-2"}, i.a.createElement(U.a, {
                        image: r,
                        variation: "from-right"
                    }))))
                }))
            };
        n.default = function (t) {
            var n = t.data.wpgraphql.page, e = n.title, a = n.homepageacf,
                m = Object(y.h)([a.usInNumbers.name, a.aboutBrevan.name, a.atAGlanceSectionName, a.ourCulture.name, a.careersSection.name, a.banner.name]);
            return console.log(a, "xxxxxxxxxx"), i.a.createElement(r.a, {preloader: !0}, i.a.createElement(o.a, {title: e}), i.a.createElement(w, {
                heroTitle: a.heroTitle,
                heroImage: a.heroSectionImage
            }), i.a.createElement(q, {
                title: a.usInNumbers.title,
                text: a.usInNumbers.text,
                hexagonData: m[0],
                yearsNumber: a.usInNumbers.yearsNumber,
                yearsTitle: a.usInNumbers.yearsTitle,
                yearsText: a.usInNumbers.yearsText,
                items: a.usInNumbers.numbersList,
                footnote: a.usInNumbers.listFootnote,
                linkData: a.usInNumbers.acfLink
            }), i.a.createElement(W, {
                hexagonData: m[1],
                title: a.aboutBrevan.title,
                text: a.aboutBrevan.text,
                linkData: a.aboutBrevan.acfLink,
                image: a.aboutBrevan.image
            }), i.a.createElement(C, {
                hexagonData: m[2],
                title: a.atAGlanceTitle,
                list: a.atAGlanceItems,
                cutouts: "cutout-top"
            }), i.a.createElement(P, {
                hexagonData: m[3],
                title: a.ourCulture.title,
                text1: a.ourCulture.leftTextColumn,
                text2: a.ourCulture.rightTextColumn,
                linkData: a.ourCulture.acfLink,
                image1: a.ourCulture.image2,
                image2: a.ourCulture.image1
            }), i.a.createElement(R, {
                hexagonData: m[4],
                title: a.careersSection.title,
                text: a.careersSection.text,
                linkData: a.careersSection.acfLink,
                image1: a.careersSection.image2,
                image2: a.careersSection.image1
            }), i.a.createElement(A.a, {
                hexagonData: m[5],
                title: a.banner.title,
                linkData: a.banner.acfLink,
                background: a.banner.image,
                backgroundMobile: a.banner.imageMobile
            }))
        }
    }, pqE3: function (t, n, e) {
        "use strict";
        e.d(n, "a", (function () {
            return g
        }));
        var a = e("q1tI"), i = e.n(a), r = e("9eSz"), o = e.n(r), m = e("aqT/"), c = e.n(m), u = e("REGc"),
            l = e("ZWRB"), s = e("yrOS"), p = e("Y9D7"), f = e("h+r4"), d = e("YfPL"),
            x = e("vOnD").default.div.withConfig({
                displayName: "bannerstyles__BannerMain",
                componentId: "sc-14t90kj-0"
            })(["position:relative;padding:200px 0;display:flex;align-items:center;", " ", " ", "{margin-bottom:25px;", "}.gatsby-image-wrapper{position:absolute;left:0;top:0;width:100%;height:100%;}.banner-content{position:relative;a{span{color:#fff;}}}", "{color:", ";margin-bottom:.3em;", "}.btn{color:", ";}&.large{padding:251px 0;", "}&.contact-page{overflow:hidden;padding:0 !important;background-color:", ";.banner-inner{margin-top:141px;padding:281px 0 381px;position:relative;", " ", " ", "}", "{margin-bottom:75px;}}.mobile{", "}.desktop{", '}.contact-bg{position:absolute;width:56%;right:5.4%;top:7%;svg{position:absolute;top:0;left:0;width:100%;height:100%;}[class^="brev-dot-"]{animation-name:contactDotAnimation;animation-iteration-count:infinite;animation-duration:3s;animation-delay:.4s;animation-fill-mode:both;transform-box:fill-box;transform-origin:center center;fill:#d1c8ba;}.brev-dot-1{animation-duration:3.1s;animation-delay:0.1s;}.brev-dot-2{animation-duration:3.2s;animation-delay:0.2s;}.brev-dot-3{animation-duration:3.3s;animation-delay:0.3s;}.brev-dot-4{animation-duration:3.4s;animation-delay:0.4s;}.brev-dot-5{animation-duration:3.5s;animation-delay:0.5s;}.brev-dot-6{animation-duration:3.6s;animation-delay:0.6s;}@keyframes contactDotAnimation{0%{transform:scale(0);}80%{transform:scale(1);opacity:1;}100%{transform:scale(1.5);opacity:0;}}}'], (function (t) {
                return t.theme.min("mac", (function (t) {
                    return "\n  min-height: 800px;\n"
                }), t)
            }), (function (t) {
                return t.theme.max("sm", (function (t) {
                    return "\n  padding: 100px 0 190px;\n  background-color: " + t.theme.colors.primary200 + ";\n  min-height: 667px;\n"
                }), t)
            }), d.d, (function (t) {
                return t.theme.max("sm", (function (t) {
                    return "\n    margin-bottom: 73px;\n  "
                }), t)
            }), d.i, (function (t) {
                return t.theme.colors.white
            }), (function (t) {
                return t.theme.max("sm", (function (t) {
                    return "\n    margin-bottom: 1em;\n  "
                }), t)
            }), (function (t) {
                return t.theme.colors.white
            }), (function (t) {
                return t.theme.max("sm", (function () {
                    return "\n    padding: 100px 0 190px;\n\n    " + d.i + " {\n      max-width: 250px;\n    }\n  "
                }))
            }), (function (t) {
                return t.theme.colors.primary100
            }), (function (t) {
                return t.theme.max("mac", (function () {
                    return "\n      padding: 200px 0;\n    "
                }))
            }), (function (t) {
                return t.theme.max("lt", (function () {
                    return "\n      padding: 140px 0;\n    "
                }))
            }), (function (t) {
                return t.theme.max("sm", (function () {
                    return "\n      padding: 140px 0 261px;\n      margin-top: 85px;\n    "
                }))
            }), d.d, (function (t) {
                return t.theme.min("sm", (function () {
                    return "\n    display: none;\n  "
                }))
            }), (function (t) {
                return t.theme.max("sm", (function () {
                    return "\n    display: none;\n  "
                }))
            })), h = e("4XGp"), g = function (t) {
                var n = t.title, e = t.linkData, a = t.background, r = t.modifier, m = t.linkClass, g = t.backgroundMobile,
                    b = t.titleResponsive, v = void 0 === b ? [] : b, y = t.alternativeBg, E = void 0 === y ? null : y,
                    k = t.hexagonData, w = k.name, N = k.sectionNum, j = Object(h.c)().popupTermsStatus;
                return i.a.createElement(c.a, {
                    partialVisibility: !0,
                    offset: {top: 100, bottom: 100},
                    delayedCall: !0
                }, (function (t) {
                    var c = t.isVisible;
                    return i.a.createElement(x, {className: (r || "") + " to-animate " + (c && "accepted" === j ? "is-in-vp" : "")}, i.a.createElement("div", {className: "banner-inner"}, g && i.a.createElement(o.a, {
                        fluid: Object(f.k)(g),
                        style: {position: "absolute"},
                        className: "mobile"
                    }), a && i.a.createElement(o.a, {
                        fluid: Object(f.k)(a),
                        style: {position: "absolute"},
                        className: "desktop"
                    }), E, i.a.createElement(d.a, null, i.a.createElement("div", {className: "banner-content"}, i.a.createElement(s.a, {
                        number: N,
                        className: "light"
                    }, w), i.a.createElement(p.a, {text: n, responsive: v}), e && i.a.createElement(u.a, {
                        linkData: e,
                        className: "btn secondary " + f.j + (m || "banner-button")
                    }, i.a.createElement(l.a, {text: e.linkText, delay: 1e3}))))))
                }))
            }
    }, zLVn: function (t, n, e) {
        "use strict";

        function a(t, n) {
            if (null == t) return {};
            var e, a, i = {}, r = Object.keys(t);
            for (a = 0; a < r.length; a++) e = r[a], n.indexOf(e) >= 0 || (i[e] = t[e]);
            return i
        }

        e.d(n, "a", (function () {
            return a
        }))
    }
}]);
//# sourceMappingURL=component---src-templates-homepage-js-4752940f2c4dc62cef41.js.map
