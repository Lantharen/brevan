(window.webpackJsonp = window.webpackJsonp || []).push([[11], {
    "/huT": function (e, t, a) {
        "use strict";
        var n = a("q1tI"), l = a.n(n);
        t.a = function (e) {
            var t = void 0 === e ? {} : e, a = t.acceptType, n = void 0 === a ? "withAccept" : a, o = t.initialOpen,
                i = {open: void 0 !== o && o, acceptType: n, modalData: null}, c = l.a.useState(i), d = c[0], s = c[1],
                r = function () {
                    document.body.classList.remove("modal-open"), s(Object.assign({}, d, {open: !1}))
                };
            return {
                modalProps: {
                    modalStatus: d, acceptAndCloseModal: function () {
                        r()
                    }, closeModal: r, openModal: function (e) {
                        var t = e.override, a = void 0 === t ? {} : t;
                        document.body.classList.add("modal-open"), s(Object.assign({}, d, a, {
                            open: !0,
                            type: (null == a ? void 0 : a.type) || ""
                        }))
                    }, changeModal: function (e) {
                        document.body.classList.add("modal-open"), s(Object.assign({}, d, {open: !0, type: e || ""}))
                    }, closeModalAndClean: function () {
                        document.body.classList.remove("modal-open"), s(Object.assign({}, i, {open: !1}))
                    }
                }
            }
        }
    }, "1iIR": function (e, t, a) {
        "use strict";
        a.d(t, "a", (function () {
            return n
        }));
        var n = a("vOnD").default.div.withConfig({
            displayName: "iframestyles__IframeMain",
            componentId: "sc-1rluuth-0"
        })([".iframe-container-box{padding:110px 0 80px;}.iframe-container{padding-top:100px;display:flex;justify-content:center;flex-direction:column;align-items:center;@media (max-width:768px){padding:140px 0 60px;}}.iframe-container.vif-pd{padding:210px 0px 80px;}.vimeo-iframe{width:740px;height:460px;@media (max-width:768px){width:100%;height:100%;}}h2{font-size:38px;}.title-container{margin-bottom:0;}"])
    }, QdDY: function (e, t, a) {
        "use strict";
        var n = a("q1tI"), l = a.n(n), o = a("Wbzz"), i = a("ALm3"), c = a("bdEM"), d = a("741A"), s = a("bPrE");
        t.a = function (e) {
            var t, a, n, r, m, u, p, v, h, f, b = e.modalProps, y = e.digitalassetsacf, E = b.modalStatus,
                g = Object(o.useStaticQuery)("1799853877").wpgraphql.themeSettings.themesettingsacf;
            "undefined" != typeof window && (null != E && E.open ? document.body.classList.add("modal-open") : document.body.classList.remove("modal-open"));
            var w = "undefined" == typeof window;
            if (!(null != E && E.open || w)) return null;
            var C = {
                introContent: [],
                sections: null == y || null === (t = y.riskFactorsModalData) || void 0 === t ? void 0 : t.content
            }, x = {
                introContent: [],
                sections: ((null == y || null === (a = y.disclosuresModalData) || void 0 === a ? void 0 : a.content) || []).map((function (e, t) {
                    return Object.assign({}, e, {title: 0 === t ? "" : null == e ? void 0 : e.title})
                }))
            }, D = {
                introContent: null == y || null === (n = y.disclosuresModalData) || void 0 === n ? void 0 : n.content,
                sections: null == y || null === (r = y.riskFactorsModalData) || void 0 === r ? void 0 : r.content
            };
            return l.a.createElement(d.a, null, "risk" === (null == E ? void 0 : E.type) ? l.a.createElement(s.a, {
                hasBackButton: !1,
                modalClass: ("withAccept" === (null == E ? void 0 : E.acceptType) ? "modal-sm" : "") + " modal-has-actions sm-s-title modal-h-md"
            }, l.a.createElement("h2", {className: "intro-title"}, null == y || null === (m = y.riskFactorsModalData) || void 0 === m ? void 0 : m.title), l.a.createElement(c.a, {
                data: C,
                hideSectionNumbers: !0
            }), l.a.createElement("div", {className: "modal-actions-wrap"}, "withAccept" !== (null == E ? void 0 : E.acceptType) && l.a.createElement("button", {
                className: "rect-btn",
                onClick: function () {
                    return null == b ? void 0 : b.closeModal()
                }
            }, null == y ? void 0 : y.modalCloseButtonLabel))) : "disclosure" === (null == E ? void 0 : E.type) ? l.a.createElement(s.a, {
                hasBackButton: !1,
                modalClass: ("withAccept" === (null == E ? void 0 : E.acceptType) ? "modal-sm" : "") + "  modal-has-actions sm-s-title modal-h-md"
            }, l.a.createElement("h2", {
                className: "intro-title",
                style: {textTransform: "capitalize"}
            }, ((null === (u = (null == y || null === (v = y.disclosuresModalData) || void 0 === v ? void 0 : v.content) || []) || void 0 === u || null === (p = u[0]) || void 0 === p ? void 0 : p.title) || "").toLowerCase()), l.a.createElement(c.a, {
                data: x,
                hideSectionNumbers: !0
            }), l.a.createElement("div", {className: "modal-actions-wrap"}, "withAccept" !== (null == E ? void 0 : E.acceptType) && l.a.createElement("button", {
                className: "rect-btn",
                onClick: function () {
                    return null == b ? void 0 : b.closeModal()
                }
            }, null == y ? void 0 : y.modalCloseButtonLabel))) : "contact" === (null == E ? void 0 : E.type) ? l.a.createElement(s.a, {
                onBackClick: function () {
                    null == b || b.changeModal("")
                }
            }, l.a.createElement("h2", {className: "intro-title"}, null == g ? void 0 : g.disclaimerContactTitle), l.a.createElement("p", {className: "modal-subtitle"}, null == g ? void 0 : g.disclaimerContactSubtitle), l.a.createElement("div", {className: "modal-content"}, l.a.createElement(i.a, {contactDetails: g}))) : l.a.createElement(s.a, {
                hasBackButton: !1,
                modalClass: ("withAccept" === (null == E ? void 0 : E.acceptType) ? "modal-sm" : "") + " modal-has-actions sm-s-title"
            }, l.a.createElement("h2", {className: "intro-title"}, null == y || null === (h = y.disclosuresModalData) || void 0 === h ? void 0 : h.title), l.a.createElement(c.a, {
                data: D,
                sectionsHeading: null == y || null === (f = y.riskFactorsModalData) || void 0 === f ? void 0 : f.title,
                hideSectionNumbers: !0
            }), l.a.createElement("div", {className: "modal-actions-wrap"}, "withAccept" === (null == E ? void 0 : E.acceptType) && l.a.createElement("button", {
                className: "rect-btn",
                onClick: function () {
                    return null == b ? void 0 : b.acceptAndCloseModal()
                }
            }, null == y ? void 0 : y.modalAcceptButtonLabel), "withAccept" === (null == E ? void 0 : E.acceptType) && l.a.createElement("button", {
                className: "link-btn link-btn-cta",
                onClick: function () {
                    return null == b ? void 0 : b.changeModal("contact")
                }
            }, null == g ? void 0 : g.disclaimerRejectButtonText), "withAccept" !== (null == E ? void 0 : E.acceptType) && l.a.createElement("button", {
                className: "rect-btn",
                onClick: function () {
                    return null == b ? void 0 : b.closeModal()
                }
            }, null == y ? void 0 : y.modalCloseButtonLabel)), "withAccept" === (null == E ? void 0 : E.acceptType) && l.a.createElement("div", {className: "modal-footer-wrap"}, l.a.createElement("h3", {className: "modal-footer-title"}, null == y ? void 0 : y.modalFooterTitle), l.a.createElement("p", {className: "modal-footer-content"}, null == y ? void 0 : y.modalFooterText))))
        }
    }, Y5dD: function (e, t, a) {
        "use strict";
        a.r(t);
        var n = a("q1tI"), l = a.n(n), o = a("Bl7J"), i = a("vrFN"), c = a("1iIR"), d = (a("Wbzz"), a("Y9D7")),
            s = (a("yrOS"), a("YfPL")), r = (a("QdDY"), a("/huT"), [{
                videos: [{
                    vimeoCode: "832176817",
                    title: "BH Digital вЂ“ Digital Asset Ecosystem"
                }], heading: "Brevan Howard Digital - An Introduction"
            }, , {
                videos: [{vimeoCode: "832176689", title: "Digital Series вЂ“ An Introduction with Coleen and Peter"}],
                heading: "Crypto Bytes вЂ“ Snackable sessions with BH Digital"
            }, , {
                videos: [{vimeoCode: "832176566", title: "BH Digital вЂ“ ODD and Custody with Cem Paya and Ryan Taylor"}],
                heading: "Brevan Howard Digital вЂ“ Business Focus Series:"
            }]);
        t.default = function () {
            return l.a.createElement(o.a, {style: "padding-top 20px !important"}, l.a.createElement(i.a, {title: "Video"}), l.a.createElement(c.a, null, l.a.createElement("div", {class: "iframe-container-box"}, r.map((function (e) {
                return l.a.createElement("div", {class: "iframe-container"}, l.a.createElement("div", null, l.a.createElement(d.a, {
                    variation: "title-container",
                    text: e.heading,
                    responsive: [{breakpoint: 767, charLimit: 6}]
                })), e.videos.map((function (e) {
                    return l.a.createElement("div", null, l.a.createElement(s.d, {
                        style: {
                            textAlign: "center",
                            marginBottom: "2rem",
                            marginTop: "20px"
                        }
                    }, l.a.createElement("span", {className: "hexagon-wrap"}), l.a.createElement("span", {className: "hexagon-text"}, e.title)), l.a.createElement("iframe", {
                        class: "vimeo-iframe",
                        src: "https://player.vimeo.com/video/" + e.vimeoCode + "?h=13cdf6f150",
                        width: "740",
                        height: "460",
                        frameborder: "0",
                        allow: "autoplay; fullscreen; picture-in-picture",
                        allowfullscreen: !0
                    }))
                })))
            })))))
        }
    }
}]);
//# sourceMappingURL=component---src-pages-videos-old-js-c6e0cc60280c08705381.js.map
