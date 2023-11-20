(window.webpackJsonp = window.webpackJsonp || []).push([[13], {
    "3vHM": function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return p
        }));
        var a = n("q1tI"), i = n.n(a), r = n("ciIH"), o = n.n(r), m = n("pLTZ"), l = n.n(m), c = n("SMLm"), s = n.n(c),
            u = n("YfPL"), f = n("wBAs"), d = n("h+r4"), p = function (e) {
                var t = e.text, n = e.name, a = e.label, r = e.image, m = e.signature, c = e.smallImage,
                    p = e.smallImageMobile, x = e.variation, g = void 0 === x ? "" : x, h = e.quoteFootnote,
                    b = void 0 === h ? "" : h;
                return i.a.createElement(u.f, {className: (r || m ? "image-and-sig" : "text-only") + " qb-" + g}, p && i.a.createElement("div", {className: "sm-image-wrap mobile"}, i.a.createElement(f.a, {
                    image: p,
                    variation: "from-right"
                })), i.a.createElement("div", {className: "quote-sig-wrap"}), r && "circle" !== g && i.a.createElement("div", {className: "quote-img-wrap"}, i.a.createElement(f.a, {
                    image: r,
                    variation: "from-right"
                })), r && "circle" === g && i.a.createElement("div", {className: "quote-img-wrap-c"}, i.a.createElement(s.a, null), i.a.createElement("div", {className: "quote-img-inner"}, i.a.createElement(o.a, {
                    fluid: Object(d.k)(r),
                    objectPosition: "center"
                }))), i.a.createElement("div", {className: "quote-content"}, i.a.createElement("div", {className: "quote-symb " + ("circle" === g ? "blue-quote" : "")}, i.a.createElement(l.a, null)), i.a.createElement("div", {className: "quote-text"}, t), !!b && i.a.createElement("div", {className: "quote-footnote"}, b), i.a.createElement("div", {className: "quote-meta"}, c && i.a.createElement(f.a, {
                    image: c,
                    variation: "desktop from-left"
                }), i.a.createElement("div", {className: "quote-name " + (c ? "has-sm-img" : "")}, n), i.a.createElement("div", {className: "quote-label"}, a))))
            }
    }, REGc: function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return m
        }));
        var a = n("zLVn"), i = n("q1tI"), r = n.n(i), o = n("Wbzz"), m = function (e) {
            var t, n = e.linkData, i = function (e) {
                    e.linkData;
                    return Object(a.a)(e, ["linkData"])
                }(e),
                m = "internal" === (null == n ? void 0 : n.type) ? {to: null == n || null === (t = n.linkToPage) || void 0 === t ? void 0 : t.uri} : {href: null == n ? void 0 : n.externalUrl},
                l = {target: null != n && n.openInNewWindow ? "_blank" : "_self"}, c = Object.assign({}, m, l, i);
            return null != n && n.linkToPage || null != n && n.externalUrl ? "internal" === (null == n ? void 0 : n.type) ? r.a.createElement(o.Link, Object.assign({activeClassName: "active"}, c), e.children) : r.a.createElement("a", c, e.children) : r.a.createElement(r.a.Fragment, null)
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
    }, "SY+I": function (e, t, n) {
        "use strict";
        n.r(t);
        var a = n("q1tI"), i = n.n(a), r = n("Bl7J"), o = n("vrFN"), m = n("aqT/"), l = n.n(m), c = n("REGc"),
            s = n("ZWRB"), u = n("PHNs"), f = n("dzKi"), d = n.n(f), p = n("YfPL"), x = function (e) {
                var t = e.number, n = e.label, a = e.symbol, r = e.isVisible,
                    o = Object(u.useCountUp)({start: 1, end: t, duration: 4}), m = o.countUp, l = o.start, c = o.reset;
                return i.a.useEffect((function () {
                    r && l(), r || c()
                }), [r]), i.a.createElement(p.b, null, i.a.createElement("div", {className: "hex-inner-box"}, i.a.createElement(d.a, null), i.a.createElement("div", {className: "hex-num-inner"}, i.a.createElement("div", {className: "hex-num"}, i.a.createElement("span", null, m), i.a.createElement("span", null, a)), i.a.createElement("div", {className: "hex-num-label"}, n))))
            }, g = n("I3Cp"), h = n("yrOS"), b = n("Y9D7"), v = n("h+r4"), E = n("vOnD"), y = E.default.div.withConfig({
                displayName: "careers-statsstyles__CareersStatsMain",
                componentId: "sc-aq0v5x-0"
            })(["padding:428px 0 0;background-color:", ";color:#fff;", " ", " .flex-wrap{margin-left:-24px;margin-right:-24px;}", "{color:#fff;margin-bottom:.35em;", "}.t-hex-svg{", "}", " .hexagon-container{", "}.t-hex-title{", "}.to-animate{.t-hex-title{transform:translate(-50%,-50%) scale(0,0);opacity:0;}.t-hex-svg{opacity:0;transform:scale(1.5,1.5);}}.to-animate:not(.is-in-vp){.t-hex-title,.t-hex-svg{transition-delay:0ms !important;}}.to-animate.is-in-vp{.t-hex-title{transition:", "ms ease 2000ms;transform:translate(-50%,-50%) scale(1,1);opacity:1;", "}.t-hex-svg{opacity:1;transition:", "ms ease 2000ms;transform:scale(1,1);}}.side-col{", " margin-bottom:28px;", " ", "}.side-col-2{margin-left:auto;margin-right:12%;", "}.hex-parent{display:flex;justify-content:center;align-items:center;padding-top:204px;padding-bottom:266px;", "}.hex-side-item{font-size:26px;margin-bottom:63px;", " &:last-child{margin-bottom:0;}}.hex-rel-line{position:relative;flex:0 0 8%;max-width:8%;", " &:after{content:'';position:relative;display:block;width:100%;height:2px;background-color:#ece9e5;opacity:.2;", "}}.hex-side-items{position:relative;", " ", "}.hex-rel-indicator{position:absolute;height:100%;left:10px;top:0;width:14px;", " ", " &::before,&::after{content:'';position:absolute;width:2px;height:45%;background-color:#ece9e5;opacity:.2;transform:translate(-50%,0);", " ", "}&:before{", " ", "}&:after{", " ", "}}.to-animate{.hex-rel-line:after{", " ", "}.hex-rel-dot{transform:translate(-50%,-50%) scale(0,0);}.hex-rel-indicator{&:before,&:after{", " ", "}&:before{", " ", "}&:after{", " ", "}}.hex-side-item{opacity:0;}}.to-animate.is-in-vp{.hex-rel-line:after{transition:400ms ease 1000ms;transform:none;}.hex-rel-dot{transition:200ms ease 1400ms;transform:translate(-50%,-50%) scale(1);}.hex-rel-indicator{&:before,&:after{transition:400ms ease 1600ms;", " ", "}}.hex-side-item{transition:400ms ease 1600ms;opacity:1;}}.hex-rel-dot{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:14px;width:14px;border-radius:100%;background-color:", ";", " ", "}"], (function (e) {
                return e.theme.colors.primary100
            }), (function (e) {
                return e.theme.max("lt", (function () {
                    return "\n  padding-top: 280px;\n"
                }))
            }), (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n  padding-top: 210px;\n"
                }))
            }), p.i, (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n    margin-bottom: 0.95em;\n  "
                }))
            }), (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n    display: none;\n  "
                }))
            }), (function (e) {
                return e.theme.min("sm", (function () {
                    return "\n  .hexagon-container {\n    position: relative;\n    margin: 0 auto;\n    max-width: 1515px;\n\n  }\n\n  " + p.c + " {\n    position: absolute;\n    transform: translate(-50%, -50%);\n    top: 50%;\n    left: 50%;\n  }\n\n  .t-hex {\n    position: absolute;\n    width: 10.7%;\n\n    " + function (e) {
                        return e.theme.max("lg", (function () {
                            return "\n      width: 12.7%;\n    "
                        }))
                    } + "\n    \n    " + function (e) {
                        return e.theme.max("md", (function () {
                            return "\n      path {\n        stroke-width: 1.5px;\n      }\n    "
                        }))
                    } + "\n    \n    svg {\n      display: block;\n      width: 100%;\n      height: auto;\n    }\n  }\n\n  .t-hex-0 {\n    top: 9.3%;\n    left: 39%;\n  }\n\n  .t-hex-1 {\n    top: 18%;\n    left: 72%;\n  }\n\n  .t-hex-2 {\n    top: 45%;\n    left: 85%;\n  }\n\n  .t-hex-3 {\n    top: 71%;\n    left: 68%;\n  }\n\n  .t-hex-4 {\n    top: 75%;\n    left: 33%;\n  }\n  \n  .t-hex-5 {\n    top: 55%;\n    left: 7%;\n  }\n\n  .t-hex-6 {\n    top: 26%;\n    left: 10%;\n  }\n\n  .t-hex-title {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    font-size: 26px;\n    color: " + e.theme.colors.secondary100 + ";\n    white-space: nowrap;\n\n    " + e.theme.max("lg", (function () {
                        return "\n      font-size: 20px;\n    "
                    })) + "\n    \n    " + e.theme.max("md", (function () {
                        return "\n      font-size: 16px;\n    "
                    })) + "\n  }\n"
                }))
            }), (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n    " + Object(p.m)() + "\n    padding: 240px 0 90px;\n  "
                }))
            }), (function (e) {
                return e.theme.max("sm", (function (e) {
                    return "\n    font-size: 22px;\n    line-height: 2.2;\n    text-align: center;\n    color: " + e.theme.colors.secondary100 + ";\n    opacity: 0;\n    transition: 400ms;\n  "
                }), e)
            }), 1e3, (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n      transform: scale(1, 1);\n    "
                }))
            }), 1e3, Object(p.k)(40), (function (e) {
                return e.theme.max("lt", (function () {
                    return "\n    " + Object(p.k)(45) + "\n  "
                }))
            }), (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n    " + Object(p.k)(100) + "\n    margin-bottom: 0;\n  "
                }))
            }), (function (e) {
                return e.theme.max("lt", (function () {
                    return "\n    margin-right: 0;\n  "
                }))
            }), (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n    flex-direction: column;\n    padding-top: 84px;\n    padding-bottom: 76px;\n  "
                }))
            }), (function (e) {
                return e.theme.max("mac", (function () {
                    return "\n    font-size: 22px;\n    margin-bottom: 33px;\n  "
                }))
            }), (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n    flex: 1 1 auto;\n    height: 55px;\n  "
                }))
            }), (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n      width: 2px;\n      height: 100%;\n    "
                }))
            }), (function (e) {
                return e.theme.min("sm", (function () {
                    return "\n    padding-left: 7%;\n  "
                }))
            }), (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n    padding-top: 50px;\n    text-align: center;\n  "
                }))
            }), (function (e) {
                return e.theme.max("mac", (function () {
                    return "\n    width: 11px;\n  "
                }))
            }), (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n    width: 100%;\n    height: 8px;\n    left: 0;\n    top: 7px;\n  "
                }))
            }), (function (e) {
                return e.theme.min("sm", (function () {
                    return "\n      left: 50%;\n    "
                }))
            }), (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n      height: 2px;\n      width: 38%;\n      transform: translate(0, -50%);\n      top: 50%;\n    "
                }))
            }), (function (e) {
                return e.theme.min("sm", (function () {
                    return "\n      top: 0;\n    "
                }))
            }), (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n      left: 8%;\n    "
                }))
            }), (function (e) {
                return e.theme.min("sm", (function () {
                    return "\n      bottom: 0;\n    "
                }))
            }), (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n      right: 8%;\n    "
                }))
            }), (function (e) {
                return e.theme.min("sm", (function () {
                    return "\n      transform-origin: left center;\n      transform: scale(0, 1);\n    "
                }))
            }), (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n      transform-origin: top center;\n      transform: scale(1, 0);\n    "
                }))
            }), (function (e) {
                return e.theme.min("sm", (function () {
                    return "\n        transform: translate(-50%, 0) scale(1, 0);\n      "
                }))
            }), (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n        transform: translate(0, -50%) scale(0, 1);\n      "
                }))
            }), (function (e) {
                return e.theme.min("sm", (function () {
                    return "\n        transform-origin: bottom center;\n      "
                }))
            }), (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n        transform-origin: right center;\n      "
                }))
            }), (function (e) {
                return e.theme.min("sm", (function () {
                    return "\n        transform-origin: top center;\n      "
                }))
            }), (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n        transform-origin: left center;\n      "
                }))
            }), (function (e) {
                return e.theme.min("sm", (function () {
                    return "\n        transform: translate(-50%, 0);\n      "
                }))
            }), (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n        transform: translate(0, -50%);\n      "
                }))
            }), (function (e) {
                return e.theme.colors.secondary100
            }), (function (e) {
                return e.theme.max("mac", (function () {
                    return "\n    height: 11px;\n    width: 11px;\n  "
                }))
            }), (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n    height: 8px;\n    width: 8px;\n  "
                }))
            })), k = n("4XGp"), w = n("nOd8"), N = function (e) {
                var t = e.hexagonData, n = t.name, a = t.sectionNum, r = e.title, o = e.text1, m = e.text2, u = e.linkData,
                    f = e.listSmall, d = e.number1, E = Object.assign({}, d, {variation: "c-stats"}),
                    N = Object(k.c)().popupTermsStatus;
                return i.a.createElement(y, null, i.a.createElement(l.a, {
                    partialVisibility: !0,
                    offset: {top: 0, bottom: 0},
                    delayedCall: !0
                }, (function (e) {
                    var t = e.isVisible;
                    return i.a.createElement(p.a, null, i.a.createElement("div", {className: "flex-wrap to-animate " + (t && "accepted" === N ? "is-in-vp" : "")}, i.a.createElement("div", {className: "main-col pad-col"}, i.a.createElement(h.a, {number: a}, n), i.a.createElement(b.a, {
                        text: r,
                        responsive: [{breakpoint: 767, charLimit: 12}]
                    })), i.a.createElement("div", {className: "pad-col side-col side-col-1"}, i.a.createElement(g.a, {
                        text: o,
                        variation: "large-text"
                    })), i.a.createElement("div", {className: "pad-col side-col side-col-2"}, i.a.createElement(g.a, {
                        text: m,
                        variation: "large-text"
                    }), i.a.createElement(c.a, {
                        linkData: u,
                        className: "btn secondary white-text " + v.j + "-careers-stats-btn"
                    }, i.a.createElement(s.a, {text: u.linkText})))))
                })), i.a.createElement(l.a, {partialVisibility: !0, offset: {top: 0, bottom: 0}}, (function (e) {
                    var t = e.isVisible;
                    return i.a.createElement("div", {className: "hex-parent to-animate " + (t && "accepted" === N ? "is-in-vp" : "")}, i.a.createElement(x, Object.assign({}, E, {isVisible: t})), i.a.createElement("div", {className: "hex-rel-line"}), i.a.createElement("div", {className: "hex-side-items"}, i.a.createElement("div", {className: "hex-rel-indicator"}, i.a.createElement("div", {className: "hex-rel-dot"})), f.map((function (e, n) {
                        var a, r = e.title;
                        return i.a.createElement("div", {
                            className: "hex-side-item hex-side-item-" + n,
                            key: n,
                            style: {transitionDelay: t && "undefined" != typeof window ? window.innerWidth > (null === w.a || void 0 === w.a || null === (a = w.a.breakpoints) || void 0 === a ? void 0 : a.sm) ? 1600 + 200 * Math.abs(Math.ceil((null == f ? void 0 : f.length) / 2) - n - 1) + "ms" : 1600 + 200 * n + "ms" : ""}
                        }, i.a.createElement("div", {className: "hex-side-item-title"}, r))
                    }))))
                })))
            }, j = n("wBAs"), O = E.default.div.withConfig({
                displayName: "careersstyles__CareersSectionMain",
                componentId: "sc-7849xm-0"
            })(["position:relative;padding:144px 0 106px;", " ", " .image-1{", "}.image-1-wrap{", "}.image-2{", "}.image-2-wrap{", "}.main-col{display:flex;justify-content:center;align-items:center;flex-direction:column;width:100%;", "}", "{margin-bottom:76px;}.hexagon{display:flex;justify-content:center;align-items:center;flex-direction:column;margin-bottom:60px;&-text{color:", ";font-size:12px;text-transform:uppercase;}}.list{padding-top:60px;", " ul{padding:0;", "}li{display:flex;justify-content:space-between;border-bottom:1px solid rgba(0,0,0,.10);padding:51px 78px;", " ", " ", " &:first-child{padding-top:25px;padding-bottom:25px;", " p{color:", ";opacity:.5;font-size:16px;", "}}}p{margin:0;}p,a{font-size:22px;}a{text-decoration:none;color:", ";transition:400ms;&:hover{opacity:.5;}}.city{", "}.position{padding-right:30px;", "}}", "{margin-bottom:0.36em;text-align:center;", "}.list-wrap{width:58%;", " ", " ", "}&.to-animate{.list{li{transform:translate(0,0);opacity:0;}}}&.to-animate:not(.is-in-vp){.list{li{transition-delay:0ms !important;}}}&.to-animate.is-in-vp{.list{li{transition:", "ms;transform:translate(0);opacity:1;}}}"], (function (e) {
                return e.theme.max("lt", (function () {
                    return "\n  padding: 150px 0 150px;\n"
                }))
            }), (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n  padding: 95px 0 0;\n"
                }))
            }), (function (e) {
                return e.theme.min("sm", (function () {
                    return "\n    position: absolute;\n    width: 16.7%;\n    left: 0;\n    top: 46.7%;\n  "
                }))
            }), (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n    " + Object(p.k)(50) + "\n    padding-top: 50px;\n    padding-bottom: 60px;\n  "
                }))
            }), (function (e) {
                return e.theme.min("sm", (function () {
                    return "\n    position: absolute;\n    right: 0;\n    top: 10.5%;\n    width: 12.5%;\n  "
                }))
            }), (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n    " + Object(p.m)() + "\n    " + Object(p.k)(50) + "\n  "
                }))
            }), (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n    align-items: flex-start;\n    " + Object(p.m)() + "\n  "
                }))
            }), p.d, (function (e) {
                return e.theme.colors.secondary
            }), (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n    padding-top: 32px;\n  "
                }))
            }), (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n      margin-bottom: 0;\n    "
                }))
            }), (function (e) {
                return e.theme.max("mac", (function () {
                    return "\n      padding: 40px 50px;\n    "
                }))
            }), (function (e) {
                return e.theme.max("md", (function () {
                    return "\n      padding: 34px 44px;\n    "
                }))
            }), (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n      flex-direction: column;\n      padding: 34px 0 46px;\n    "
                }))
            }), (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n        flex-direction: row;\n        justify-content: flex-start;\n      "
                }))
            }), (function (e) {
                return e.theme.colors.primary200
            }), (function (e) {
                return e.theme.max("sm", (function () {
                    return '\n          &:first-child {\n            padding-right: .3em;\n          }\n\n          &:last-child {\n            &:before {\n              content: " & ";\n            }\n          }\n        '
                }))
            }), (function (e) {
                return e.theme.colors.primary200
            }), (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n      font-size: 14px;\n    "
                }))
            }), (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n      padding-right: 0;\n      font-size: 20px;\n      line-height: 1.63;\n    "
                }))
            }), p.i, (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n    margin-bottom: 1.2em;\n    text-align: left;\n  "
                }))
            }), (function (e) {
                return e.theme.max("lt", (function () {
                    return "\n    width: 64%;\n  "
                }))
            }), (function (e) {
                return e.theme.max("md", (function () {
                    return "\n    width: 100%;\n    max-width: 550px;\n    padding: 0 24px;\n  "
                }))
            }), (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n    max-width: 100%;\n    padding: 0;\n  "
                }))
            }), 1e3), q = function (e) {
                var t = e.sectionNum, n = e.name, a = e.linkUri, r = e.linkText, o = e.firstTitle, m = e.leftImage,
                    c = e.rightImage, u = e.list, f = e.tableHeaders, d = e.allPositionsLinkType, p = e.allPositionsEmail;
                return i.a.createElement(l.a, {partialVisibility: !0, offset: {top: 100, bottom: 100}}, (function (e) {
                    var l = e.isVisible;
                    return i.a.createElement(O, {
                        id: "positions",
                        className: "to-animate " + (l ? "is-in-vp" : "")
                    }, i.a.createElement("div", {className: "flex-wrap"}, i.a.createElement("div", {className: "image-1-wrap"}, i.a.createElement(j.a, {
                        image: c,
                        variation: "from-left image-1"
                    })), i.a.createElement("div", {className: "image-2-wrap"}, i.a.createElement(j.a, {
                        image: m,
                        variation: "from-left image-2"
                    }))), i.a.createElement("div", {className: "flex-wrap"}, i.a.createElement("div", {className: "main-col"}, i.a.createElement(h.a, {number: t}, n), i.a.createElement(b.a, {
                        text: o,
                        responsive: [{breakpoint: 480, charLimit: 10}]
                    }), "email" === d ? i.a.createElement("a", {
                        href: "mailto:" + p,
                        className: "btn secondary " + v.j + "careers-all-pos-link maito"
                    }, i.a.createElement(s.a, {text: r})) : i.a.createElement("a", {
                        href: a,
                        className: "btn secondary " + v.j + "careers-all-pos-link doc",
                        target: "_blank",
                        rel: "noreferrer"
                    }, i.a.createElement(s.a, {text: r})), i.a.createElement("section", {
                        id: "positions",
                        className: "list-wrap"
                    }, i.a.createElement("div", {className: "list"}, i.a.createElement("ul", null, i.a.createElement("li", null, i.a.createElement("p", null, f.leftText), i.a.createElement("p", null, f.rightText)), 0 === u.length && "There are no featured positions.", u.map((function (e, t) {
                        var n = e.position, a = e.location, r = e.file, o = e.useStaticFile, m = e.type, l = e.email;
                        return i.a.createElement("li", {
                            key: t,
                            style: {transitionDelay: 300 + 200 * t + "ms"}
                        }, i.a.createElement("p", {className: "position"}, m ? i.a.createElement("a", {
                            href: Object(v.g)(null == r ? void 0 : r.localStaticUrl, o),
                            target: "_blank",
                            rel: "noreferrer",
                            className: v.j + "single-position-link"
                        }, n) : i.a.createElement("a", {
                            href: "mailto:" + (l || "careers@brevanhoward.com"),
                            className: v.j + "single-position-link"
                        }, n)), i.a.createElement("p", {className: "city"}, a))
                    }))))))))
                }))
            }, T = n("pqE3"), S = E.default.div.withConfig({
                displayName: "testimonials-headerstyles__TestimonialsHeaderMain",
                componentId: "sc-5xhf4w-0"
            })([".testim-header-wrap{padding:150px 0 119px;", "{margin-bottom:4.3em;}}.testim-header-text{margin-left:auto;margin-right:", ";", " ", " ", "}.img-wrap{margin-left:auto;", " ", "}"], p.h, Object(p.j)(14), Object(p.k)(6, "c"), (function (e) {
                return e.theme.max("lg", (function () {
                    return "\n    margin-right: " + Object(p.j)(10) + ";\n    " + Object(p.k)(10, "c") + "\n  "
                }))
            }), (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n    " + Object(p.m)() + "\n    " + Object(p.k)(100) + "\n  "
                }))
            }), Object(p.k)(20, "c"), (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n    " + Object(p.k)(100) + "\n  "
                }))
            })), L = function (e) {
                var t = e.text, n = e.headerImage;
                return i.a.createElement(S, null, i.a.createElement(l.a, {
                    partialVisibility: !0,
                    offset: {top: 100, bottom: 100}
                }, (function (e) {
                    var a = e.isVisible;
                    return i.a.createElement("div", {className: "top-col to-animate " + (a ? "is-in-vp" : "")}, i.a.createElement("div", {className: "testim-header-wrap flex-wrap"}, i.a.createElement("div", {className: "testim-header-text"}, i.a.createElement(g.a, {
                        text: t,
                        variation: "large-text"
                    })), i.a.createElement("div", {className: "img-wrap"}, i.a.createElement(j.a, {
                        image: n,
                        variation: "from-left"
                    }))))
                })))
            }, I = E.default.div.withConfig({
                displayName: "join-our-teamstyles__JoinOurTeamMain",
                componentId: "sc-15y6htk-0"
            })(["padding:137px 0 150px;background-color:", ";&.cutout-top{", "}", "{max-width:480px;}.title-col{", " ", " ", " ", "{margin-bottom:104px;}", "{margin-bottom:86px;}}.article-col-r,.article-col-l{", " ", " ", " ", "}.article-col-l{", " margin-right:auto;}.article-col-r{", " margin-left:auto;}.img-wrap{margin-bottom:65px;}"], (function (e) {
                return e.theme.colors.secondary300
            }), (function (e) {
                return e.theme.max("lg", (function () {
                    return "\n    &:before {\n      max-height: 100px;\n    }\n  "
                }))
            }), p.h, Object(p.m)(), Object(p.k)(13, "c"), (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n    " + Object(p.k)(100) + "\n  "
                }))
            }), p.i, p.d, Object(p.k)(7, "c"), (function (e) {
                return e.theme.max("mac", (function () {
                    return "\n    " + Object(p.k)(35) + "\n  "
                }))
            }), (function (e) {
                return e.theme.max("md", (function () {
                    return "\n    " + Object(p.k)(50) + "\n  "
                }))
            }), (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n    " + Object(p.k)(100) + "\n    margin-bottom: 50px;\n  "
                }))
            }), Object(p.m)(), Object(p.m)("right", 4)), D = function (e) {
                var t = e.hexagonData, n = t.name, a = t.sectionNum, r = e.title, o = e.items;
                return i.a.createElement(l.a, {partialVisibility: !0, offset: {top: 100, bottom: 100}}, (function (e) {
                    var t = e.isVisible;
                    return i.a.createElement(I, {className: "cutout-top to-animate " + (t ? "is-in-vp" : "")}, i.a.createElement("div", {className: "title-col"}, i.a.createElement(h.a, {number: a}, n), i.a.createElement(b.a, {
                        text: r,
                        responsive: [{breakpoint: 600, charLimit: 13}]
                    })), i.a.createElement("div", {className: "flex-wrap"}, o.map((function (e, t) {
                        var n = e.title, a = e.text, r = e.acfLink, o = e.image;
                        return i.a.createElement("div", {
                            className: t % 2 == 0 ? "article-col-l" : "article-col-r",
                            key: t
                        }, i.a.createElement("div", {className: "img-wrap"}, i.a.createElement(j.a, {
                            image: o,
                            variation: "from-left",
                            delay: 200 * t
                        })), i.a.createElement("div", {className: "article-body"}, i.a.createElement(b.a, {
                            text: n,
                            variation: "smallest-title",
                            delay: 100 + 200 * t
                        }), i.a.createElement(g.a, {
                            text: a,
                            variation: "small-text",
                            delay: 200 + 200 * t
                        }), i.a.createElement(c.a, {
                            linkData: r,
                            className: "btn white mobile " + v.j + "careers-join-our-team-link-" + t
                        }, i.a.createElement(s.a, {text: r.linkText}))))
                    }))))
                }))
            }, V = E.default.div.withConfig({
                displayName: "diversity-and-inclusionstyles__DiversityAndInclusionMain",
                componentId: "sc-qyac6r-0"
            })(["padding:44px 0 136px;", " ", "{margin-bottom:74px;}", "{margin-bottom:.36em;}.flex-wrap{", "}.text-col{", " ", " margin-right:auto;", " ", " ", " ", "{max-width:480px;}}.images-col{display:flex;flex-direction:column;}.images-col-l{", " margin-left:auto;margin-right:35px;justify-content:center;padding-top:102px;", "}.images-col-r{", " padding-top:65px;", "}.top-img{margin-bottom:35px;}.desktop{", "}.mobile{", "}"], (function (e) {
                return e.theme.max("mb", (function () {
                    return "\n  padding-bottom: 0;\n"
                }))
            }), p.d, p.i, (function (e) {
                return e.theme.max("mac", (function () {
                    return "\n    align-items: center;\n  "
                }))
            }), Object(p.m)(), Object(p.k)(7, "c"), (function (e) {
                return e.theme.max("md", (function () {
                    return "\n    " + Object(p.k)(50) + "\n  "
                }))
            }), (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n    " + Object(p.k)(100) + "\n  "
                }))
            }), (function (e) {
                return e.theme.max("mb", (function () {
                    return "\n    order: 30;\n  "
                }))
            }), p.h, Object(p.k)(4.7, "c"), (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n    padding-left: " + p.n + "px;\n    padding-right: " + p.n / 2 + "px;\n    margin-left: 0;\n    margin-right: 0;\n    " + Object(p.k)(50) + "\n  "
                }))
            }), Object(p.k)(4.7, "c"), (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n    padding-right: " + p.n + "px;\n    padding-left: " + p.n / 2 + "px;\n    " + Object(p.k)(50) + "\n  "
                }))
            }), (function (e) {
                return e.theme.max("mb", (function () {
                    return "\n    display: none;\n  "
                }))
            }), (function (e) {
                return e.theme.min("mb", (function () {
                    return "\n    display: none;\n  "
                }))
            })), P = function (e) {
                var t = e.hexagonData, n = t.name, a = t.sectionNum, r = e.title, o = e.text, m = e.image1, c = e.image2,
                    s = e.image3, u = e.image4;
                return i.a.createElement(l.a, {partialVisibility: !0, offset: {top: 100, bottom: 100}}, (function (e) {
                    var t = e.isVisible;
                    return i.a.createElement(V, {className: "to-animate " + (t ? "is-in-vp" : "")}, i.a.createElement("div", {className: "flex-wrap"}, i.a.createElement("div", {className: "text-col"}, i.a.createElement(h.a, {number: a}, n), i.a.createElement(b.a, {text: r}), i.a.createElement(g.a, {
                        text: o,
                        variation: "large-text"
                    })), i.a.createElement("div", {className: "images-col images-col-l"}, i.a.createElement("div", {className: "img-wrap top-img"}, i.a.createElement(j.a, {
                        image: m,
                        variation: "from-right",
                        delay: 0
                    })), i.a.createElement("div", {className: "img-wrap desktop"}, i.a.createElement(j.a, {
                        image: c,
                        variation: "from-right",
                        delay: 600
                    }))), i.a.createElement("div", {className: "images-col images-col-r"}, i.a.createElement("div", {className: "img-wrap top-img"}, i.a.createElement(j.a, {
                        image: s,
                        variation: "from-left",
                        delay: 200
                    })), i.a.createElement("div", {className: "img-wrap desktop"}, i.a.createElement(j.a, {
                        image: u,
                        variation: "from-left",
                        delay: 400
                    })))), i.a.createElement("div", {className: "mobile"}, i.a.createElement(j.a, {
                        image: c,
                        variation: "from-right",
                        delay: 600
                    })))
                }))
            }, M = n("3vHM"), z = E.default.div.withConfig({
                displayName: "testimonialsstyles__TestimonialsMain",
                componentId: "sc-pvy14w-0"
            })(["padding:65px 0 50px;.quote-item{", " ", " ", " ", " &.even{margin-left:auto;", " margin-bottom:130px;}&.odd{", "}&.even,&.odd{", "}&.to-animate{opacity:0;transition:600ms ease 100ms;&.even{transform:translate(-100px,0);}&.odd{transform:translate(100px,0);}&.is-in-vp{transform:translate(0,0);opacity:1;}&:not(.is-in-vp){transition-delay:0ms !important;}}}"], Object(p.k)(13, "c"), (function (e) {
                return e.theme.max("lg", (function () {
                    return "\n    " + Object(p.k)(64) + "\n    margin-bottom: 100px;\n  "
                }))
            }), (function (e) {
                return e.theme.max("md", (function () {
                    return "\n    " + Object(p.k)(80) + "\n  "
                }))
            }), (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n    " + Object(p.k)(100) + "\n  "
                }))
            }), Object(p.m)("right", 2), Object(p.m)("left", 2), (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n      margin-bottom: 60px;\n\n      &:last-child {\n        margin-bottom: 0;\n      }\n    "
                }))
            })), C = function (e) {
                var t = e.list;
                return i.a.createElement(z, null, t.map((function (e, t) {
                    var n = e.quoteText, a = e.quoteName, r = e.quoteLabel, o = e.image, m = e.imageMobile;
                    return i.a.createElement(l.a, {
                        partialVisibility: !0,
                        offset: {top: 0, bottom: 0},
                        key: t
                    }, (function (e) {
                        var l = e.isVisible;
                        return i.a.createElement("div", {className: "quote-item to-animate " + (l ? "is-in-vp" : "") + " " + (t % 2 != 0 ? "even" : "odd")}, i.a.createElement(M.a, {
                            text: n,
                            name: a,
                            label: r,
                            smallImage: o,
                            smallImageMobile: m
                        }))
                    }))
                })))
            };
        t.default = function (e) {
            var t, n = e.data.wpgraphql.page, a = n.title, m = n.careersacf,
                l = Object(v.g)(null === (t = m.allPositionsFile) || void 0 === t ? void 0 : t.localStaticUrl, m.useStaticFileForAllPositions),
                c = Object(v.h)([m.careersStats.name, m.diversitySection.name, m.joinUsOurTeam.name, m.featuredPositionsVisibility ? m.featuredPositionsSectionName : "", m.banner.name]);
            return i.a.createElement(r.a, null, i.a.createElement(o.a, {title: a}), i.a.createElement(N, {
                hexagonData: c[0],
                title: m.careersStats.title,
                text1: m.careersStats.columnTextLeft,
                text2: m.careersStats.columnTextRight,
                linkData: m.careersStats.acfLink,
                listSmall: m.careersStats.listSmall,
                number1: m.careersStats.listLarge[0]
            }), i.a.createElement(L, {
                text: m.testimonialsHeader.text,
                headerImage: m.testimonialsHeader.image
            }), i.a.createElement(C, {list: m.testimonialsSection.list}), i.a.createElement(P, {
                hexagonData: c[1],
                title: m.diversitySection.title,
                text: m.diversitySection.text,
                image1: m.diversitySection.imagesLeft[0].image,
                image2: m.diversitySection.imagesLeft[1].image,
                image3: m.diversitySection.imagesRight[0].image,
                image4: m.diversitySection.imagesRight[1].image
            }), i.a.createElement(D, {
                hexagonData: c[2],
                title: m.joinUsOurTeam.title,
                items: m.joinUsOurTeam.items
            }), !0 === m.featuredPositionsVisibility && i.a.createElement(q, {
                hexagonData: c[3],
                firstTitle: m.featuredPositionsTitle,
                linkUri: l,
                allPositionsLinkType: m.allPositionsLinkType,
                allPositionsEmail: m.allPositionsEmail,
                linkText: m.featuredPositionsLinkText,
                leftImage: m.fpImageTopRight,
                rightImage: m.fpImageBottomLeft,
                tableHeaders: {leftText: "Position", rightText: "Location"},
                list: m.featuresPositionsList
            }), i.a.createElement(T.a, {
                hexagonData: c[4],
                title: m.banner.title,
                linkData: m.banner.acfLink,
                background: m.banner.image,
                backgroundMobile: m.banner.imageMobile,
                linkClass: "careers"
            }))
        }
    }, dzKi: function (e, t, n) {
        var a = n("q1tI");

        function i(e) {
            return a.createElement("svg", e, a.createElement("path", {
                className: "s0",
                d: "m108.1 57.2l172.7-56.1 172.7 56.1 106.7 146.8v181.6l-106.7 146.8-172.7 56.1-172.7-56.1-106.7-146.8v-181.6z",
                opacity: ".2",
                fill: "none",
                stroke: "#ece9e5",
                strokeWidth: "2"
            }))
        }

        i.defaultProps = {
            version: "1.2",
            viewBox: "0 0 562 590",
            width: "562",
            height: "590"
        }, e.exports = i, i.default = i
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
            return h
        }));
        var a = n("q1tI"), i = n.n(a), r = n("9eSz"), o = n.n(r), m = n("aqT/"), l = n.n(m), c = n("REGc"),
            s = n("ZWRB"), u = n("yrOS"), f = n("Y9D7"), d = n("h+r4"), p = n("YfPL"),
            x = n("vOnD").default.div.withConfig({
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
            }), p.d, (function (e) {
                return e.theme.max("sm", (function (e) {
                    return "\n    margin-bottom: 73px;\n  "
                }), e)
            }), p.i, (function (e) {
                return e.theme.colors.white
            }), (function (e) {
                return e.theme.max("sm", (function (e) {
                    return "\n    margin-bottom: 1em;\n  "
                }), e)
            }), (function (e) {
                return e.theme.colors.white
            }), (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n    padding: 100px 0 190px;\n\n    " + p.i + " {\n      max-width: 250px;\n    }\n  "
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
            }), p.d, (function (e) {
                return e.theme.min("sm", (function () {
                    return "\n    display: none;\n  "
                }))
            }), (function (e) {
                return e.theme.max("sm", (function () {
                    return "\n    display: none;\n  "
                }))
            })), g = n("4XGp"), h = function (e) {
                var t = e.title, n = e.linkData, a = e.background, r = e.modifier, m = e.linkClass, h = e.backgroundMobile,
                    b = e.titleResponsive, v = void 0 === b ? [] : b, E = e.alternativeBg, y = void 0 === E ? null : E,
                    k = e.hexagonData, w = k.name, N = k.sectionNum, j = Object(g.c)().popupTermsStatus;
                return i.a.createElement(l.a, {
                    partialVisibility: !0,
                    offset: {top: 100, bottom: 100},
                    delayedCall: !0
                }, (function (e) {
                    var l = e.isVisible;
                    return i.a.createElement(x, {className: (r || "") + " to-animate " + (l && "accepted" === j ? "is-in-vp" : "")}, i.a.createElement("div", {className: "banner-inner"}, h && i.a.createElement(o.a, {
                        fluid: Object(d.k)(h),
                        style: {position: "absolute"},
                        className: "mobile"
                    }), a && i.a.createElement(o.a, {
                        fluid: Object(d.k)(a),
                        style: {position: "absolute"},
                        className: "desktop"
                    }), y, i.a.createElement(p.a, null, i.a.createElement("div", {className: "banner-content"}, i.a.createElement(u.a, {
                        number: N,
                        className: "light"
                    }, w), i.a.createElement(f.a, {text: t, responsive: v}), n && i.a.createElement(c.a, {
                        linkData: n,
                        className: "btn secondary " + d.j + (m || "banner-button")
                    }, i.a.createElement(s.a, {text: n.linkText, delay: 1e3}))))))
                }))
            }
    }, zLVn: function (e, t, n) {
        "use strict";

        function a(e, t) {
            if (null == e) return {};
            var n, a, i = {}, r = Object.keys(e);
            for (a = 0; a < r.length; a++) n = r[a], t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i
        }

        n.d(t, "a", (function () {
            return a
        }))
    }
}]);
//# sourceMappingURL=component---src-templates-careers-js-f3e21beae2fe4d512d9a.js.map
