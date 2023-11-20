(window.webpackJsonp = window.webpackJsonp || []).push([[21], {
    "/huT": function (e, t, a) {
        "use strict";
        var l = a("q1tI"), n = a.n(l);
        t.a = function (e) {
            var t = void 0 === e ? {} : e, a = t.acceptType, l = void 0 === a ? "withAccept" : a, o = t.initialOpen,
                i = {open: void 0 !== o && o, acceptType: l, modalData: null}, c = n.a.useState(i), s = c[0], d = c[1],
                r = function () {
                    document.body.classList.remove("modal-open"), d(Object.assign({}, s, {open: !1}))
                };
            return {
                modalProps: {
                    modalStatus: s, acceptAndCloseModal: function () {
                        r()
                    }, closeModal: r, openModal: function (e) {
                        var t = e.override, a = void 0 === t ? {} : t;
                        document.body.classList.add("modal-open"), d(Object.assign({}, s, a, {
                            open: !0,
                            type: (null == a ? void 0 : a.type) || ""
                        }))
                    }, changeModal: function (e) {
                        document.body.classList.add("modal-open"), d(Object.assign({}, s, {open: !0, type: e || ""}))
                    }, closeModalAndClean: function () {
                        document.body.classList.remove("modal-open"), d(Object.assign({}, i, {open: !1}))
                    }
                }
            }
        }
    }, "1iIR": function (e, t, a) {
        "use strict";
        a.d(t, "a", (function () {
            return l
        }));
        var l = a("vOnD").default.div.withConfig({
            displayName: "iframestyles__IframeMain",
            componentId: "sc-1rluuth-0"
        })([".iframe-container-box{padding:110px 0 80px;}.iframe-container{padding-top:100px;display:flex;justify-content:center;flex-direction:column;align-items:center;@media (max-width:768px){padding:140px 0 60px;}}.iframe-container.vif-pd{padding:210px 0px 80px;}.vimeo-iframe{width:740px;height:460px;@media (max-width:768px){width:100%;height:100%;}}h2{font-size:38px;}.title-container{margin-bottom:0;}"])
    }, "36/6": function (e, t, a) {
        "use strict";
        a.r(t);
        var l = a("q1tI"), n = a.n(l), o = a("Bl7J"), i = a("vrFN"), c = a("1iIR"), s = a("Y9D7"), d = a("XUsL"),
            r = a("/huT");
        a("82v4");
        t.default = function (e) {
            var t = e.data.wpgraphql.page, a = t.title, l = t.traderexampleacf, m = t.digitaldisclaimersacf,
                u = Object(r.a)({initialOpen: "undefined" != typeof window && "accepted" === window.localStorage.getItem("bh-disclosureNoticesStatus")}).modalProps,
                p = u.modalStatus;
            return n.a.createElement(o.a, {
                isableAgreementModal: !0, onAccept: function () {
                    null == u || u.openModal({})
                }, modalStateOverride: !(null != p && p.open)
            }, n.a.createElement(i.a, {title: a}), n.a.createElement(c.a, null, n.a.createElement("div", {className: "iframe-container vif-pd trader-content-wrapper"}, n.a.createElement("div", null, n.a.createElement(s.a, {
                variation: "title-container",
                text: l.pageHeading,
                responsive: [{breakpoint: 767, charLimit: 6}]
            })), n.a.createElement("iframe", {
                src: l.pageVideo,
                width: "640",
                height: "360",
                frameBorder: "0",
                allow: "autoplay; fullscreen; picture-in-picture",
                allowFullScreen: !0
            }), n.a.createElement("div", {
                className: "trader-content-container",
                dangerouslySetInnerHTML: {__html: l.pageContent}
            }))), n.a.createElement(d.a, {modalProps: u, digitalassetsacf: m}))
        }
    }, "82v4": function (e, t, a) {
    }, CYJ7: function (e, t, a) {
    }, XUsL: function (e, t, a) {
        "use strict";
        var l = a("q1tI"), n = a.n(l), o = a("Wbzz"), i = a("ALm3"), c = a("bdEM"), s = a("741A"), d = a("bPrE");
        a("CYJ7");
        t.a = function (e) {
            var t, a, r, m, u, p, v, f, h, b, w = e.modalProps, E = e.digitalassetsacf, g = w.modalStatus,
                y = Object(l.useRef)(null),
                N = Object(o.useStaticQuery)("1799853877").wpgraphql.themeSettings.themesettingsacf;
            "undefined" != typeof window && (null != g && g.open ? document.body.classList.add("modal-open") : document.body.classList.remove("modal-open"));
            var C = "undefined" == typeof window;
            if (!(null != g && g.open || C)) return null;
            var M = {
                introContent: [],
                sections: null == E || null === (t = E.riskFactorsModalData) || void 0 === t ? void 0 : t.content
            }, k = {
                introContent: [],
                sections: ((null == E || null === (a = E.disclosuresModalData) || void 0 === a ? void 0 : a.content) || []).map((function (e, t) {
                    return Object.assign({}, e, {title: 0 === t ? "" : null == e ? void 0 : e.title})
                }))
            }, x = {
                introContent: null == E || null === (r = E.disclosuresModalData) || void 0 === r ? void 0 : r.content,
                sections: null == E || null === (m = E.riskFactorsModalData) || void 0 === m ? void 0 : m.content
            };
            return n.a.createElement(s.a, null, "risk" === (null == g ? void 0 : g.type) ? n.a.createElement(d.a, {
                hasBackButton: !1,
                modalClass: ("withAccept" === (null == g ? void 0 : g.acceptType) ? "modal-sm" : "") + " modal-has-actions sm-s-title modal-h-md"
            }, n.a.createElement("h2", {className: "intro-title"}, null == E || null === (u = E.riskFactorsModalData) || void 0 === u ? void 0 : u.title), n.a.createElement(c.a, {
                data: M,
                hideSectionNumbers: !0
            }), n.a.createElement("div", {className: "modal-actions-wrap"}, "withAccept" !== (null == g ? void 0 : g.acceptType) && n.a.createElement("button", {
                className: "rect-btn",
                onClick: function () {
                    return null == w ? void 0 : w.closeModal()
                }
            }, null == E ? void 0 : E.modalCloseButtonLabel))) : "disclosure" === (null == g ? void 0 : g.type) ? n.a.createElement(d.a, {
                hasBackButton: !1,
                modalClass: ("withAccept" === (null == g ? void 0 : g.acceptType) ? "modal-sm" : "") + "  modal-has-actions sm-s-title modal-h-md"
            }, n.a.createElement("h2", {
                className: "intro-title",
                style: {textTransform: "capitalize"}
            }, ((null === (p = (null == E || null === (f = E.disclosuresModalData) || void 0 === f ? void 0 : f.content) || []) || void 0 === p || null === (v = p[0]) || void 0 === v ? void 0 : v.title) || "").toLowerCase()), n.a.createElement(c.a, {
                data: k,
                hideSectionNumbers: !0
            }), n.a.createElement("div", {className: "modal-actions-wrap"}, "withAccept" !== (null == g ? void 0 : g.acceptType) && n.a.createElement("button", {
                className: "rect-btn",
                onClick: function () {
                    return null == w ? void 0 : w.closeModal()
                }
            }, null == E ? void 0 : E.modalCloseButtonLabel))) : "contact" === (null == g ? void 0 : g.type) ? n.a.createElement(d.a, {
                onBackClick: function () {
                    null == w || w.changeModal("")
                }
            }, n.a.createElement("h2", {className: "intro-title"}, null == N ? void 0 : N.disclaimerContactTitle), n.a.createElement("p", {className: "modal-subtitle"}, null == N ? void 0 : N.disclaimerContactSubtitle), n.a.createElement("div", {className: "modal-content"}, n.a.createElement(i.a, {contactDetails: N}))) : "password" === (null == g ? void 0 : g.type) ? n.a.createElement(d.a, {
                onBackClick: function () {
                    null == w || w.changeModal("")
                }
            }, n.a.createElement("h2", {className: "intro-title"}, "Gain Access"), n.a.createElement("p", {className: "modal-subtitle"}, "We've sent you a password to access the page, please enter it below to gain access."), n.a.createElement("div", {className: "modal-content"}, n.a.createElement("div", {className: "password-form-wrapper"}, n.a.createElement("div", {className: "form-group"}, n.a.createElement("label", null, "Enter password"), n.a.createElement("input", {
                type: "password",
                className: "bh-modal-pw-input",
                ref: y
            })), n.a.createElement("button", {
                className: "rect-btn", onClick: function () {
                    "BHd!g!t4l" == y.current.value || "BHtr@des" == y.current.value ? null == w || w.acceptAndCloseModal() : alert("Sorry, incorrect password.")
                }
            }, "Verify & Continue")))) : n.a.createElement(d.a, {
                hasBackButton: !1,
                modalClass: ("withAccept" === (null == g ? void 0 : g.acceptType) ? "modal-sm" : "") + " modal-has-actions sm-s-title"
            }, n.a.createElement("h2", {className: "intro-title"}, null == E || null === (h = E.disclosuresModalData) || void 0 === h ? void 0 : h.title), n.a.createElement(c.a, {
                data: x,
                sectionsHeading: null == E || null === (b = E.riskFactorsModalData) || void 0 === b ? void 0 : b.title,
                hideSectionNumbers: !0
            }), n.a.createElement("div", {className: "modal-actions-wrap"}, "withAccept" === (null == g ? void 0 : g.acceptType) && n.a.createElement("button", {
                className: "rect-btn",
                onClick: function () {
                    return null == w ? void 0 : w.changeModal("password")
                }
            }, null == E ? void 0 : E.modalAcceptButtonLabel), "withAccept" === (null == g ? void 0 : g.acceptType) && n.a.createElement("button", {
                className: "link-btn link-btn-cta",
                onClick: function () {
                    return null == w ? void 0 : w.changeModal("contact")
                }
            }, null == N ? void 0 : N.disclaimerRejectButtonText), "withAccept" !== (null == g ? void 0 : g.acceptType) && n.a.createElement("button", {
                className: "rect-btn",
                onClick: function () {
                    return null == w ? void 0 : w.closeModal()
                }
            }, null == E ? void 0 : E.modalCloseButtonLabel)), "withAccept" === (null == g ? void 0 : g.acceptType) && n.a.createElement("div", {className: "modal-footer-wrap"}, n.a.createElement("h3", {className: "modal-footer-title"}, null == E ? void 0 : E.modalFooterTitle), n.a.createElement("p", {className: "modal-footer-content"}, null == E ? void 0 : E.modalFooterText))))
        }
    }
}]);
//# sourceMappingURL=component---src-templates-trader-example-js-8e69fbb2d1ebfd1ccc51.js.map
