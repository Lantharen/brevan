(window.webpackJsonp = window.webpackJsonp || []).push([[19], {
    lf3h: function (e, a, t) {
        "use strict";
        t.r(a);
        var n = t("q1tI"), i = t.n(n), r = t("Bl7J"), l = t("vrFN"),
            s = (t("PNvn"), t("ix9Z"), t("GBeJ"), t("9icC"), t("rGmR"), t("tXu8"), t("a1Qa"), t("WQZh"), t("h+r4"), t("QdDY"), t("XUsL")),
            c = t("/huT"), o = (t("1iIR"), t("Y9D7"), t("yrOS"), t("YfPL"), t("6/6W"), t("a97V"), t("TaHA"), t("c0hC")),
            m = !0;
        "undefined" != typeof window && (0 != window.localStorage.length && "accepted" === window.localStorage.getItem("bh-disclosureNoticesStatus") || (m = !1));
        a.default = function (e) {
            var a = e.data.wpgraphql.page, t = a.title, n = a.videosstructureacf, d = a.digitaldisclaimersacf,
                p = Object(c.a)({initialOpen: m}).modalProps, u = p.modalStatus, v = i.a.useState(null), w = v[0],
                h = v[1], f = i.a.useState(null), E = (f[0], f[1], function () {
                    w.slideNext()
                }), g = function () {
                    w.slidePrev()
                };
            return i.a.createElement(r.a, {
                disableAgreementModal: !0, onAccept: function () {
                    null == p || p.openModal({})
                }, modalStateOverride: !(null != u && u.open)
            }, i.a.createElement(l.a, {title: t}), i.a.createElement("div", {className: "video-slider-wrapper v-intro-bg"}, i.a.createElement("div", {className: "vs-container-wrap"}, i.a.createElement("div", {className: "container"}, i.a.createElement("h3", {className: "txt-white"}, t)))), n.standardVideoSection.map((function (e, a) {
                return i.a.createElement("div", {
                    className: "video-slider-wrapper " + e.sectionClassnames,
                    key: "vw-" + a
                }, i.a.createElement("div", {className: "vs-container-wrap"}, i.a.createElement("div", {className: "container"}, i.a.createElement("h3", {className: ""}, e.sectionHeading), i.a.createElement("p", {className: "s-sub-heading txt-center"}, e.sectionDescription), e.videos.length > 1 && i.a.createElement("div", null, i.a.createElement("div", {
                    id: "swiper-series",
                    className: "swiper-container"
                }, i.a.createElement(o.a, {
                    spaceBetween: 50,
                    slidesPerView: 2,
                    centeredSlides: !0,
                    onSlideChange: function () {
                        return console.log("slide change")
                    },
                    onSwiper: function (e) {
                        console.log("checking swiper slider", e), h(e)
                    },
                    breakpoints: {320: {slidesPerView: 1}, 850: {slidesPerView: 2}}
                }, e.videos.map((function (e, a) {
                    return i.a.createElement(o.b, {key: "ser-" + a}, i.a.createElement("p", {className: "txt-center"}, i.a.createElement("em", null, e.description)), i.a.createElement("div", {className: "iframe-container"}, i.a.createElement("iframe", {
                        className: "vimeo-iframe responsive-iframe",
                        src: e.videoLink,
                        width: "740",
                        height: "460",
                        frameBorder: "0",
                        allow: "autoplay; fullscreen; picture-in-picture",
                        allowFullScreen: !0
                    })))
                })))), i.a.createElement("div", {className: "v-slide-nav"}, i.a.createElement("button", {onClick: g}, i.a.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "7.882",
                    height: "14.622",
                    viewBox: "0 0 7.882 14.622"
                }, i.a.createElement("path", {
                    id: "Path_73795",
                    "data-name": "Path 73795",
                    d: "M0,0,6.794,6.794C6.443,6.443,13.589,0,13.589,0",
                    transform: "translate(7.325 0.53) rotate(90)",
                    fill: "none",
                    stroke: "#bbb4a9",
                    strokeWidth: "1.5"
                }))), i.a.createElement("div", {className: "vs-pagination"}, e.videos.map((function (e, a) {
                    return i.a.createElement("span", {
                        key: "nav-series-" + a, onClick: function () {
                            return w.slideTo(a)
                        }
                    })
                }))), i.a.createElement("button", {onClick: E}, i.a.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "7.882",
                    height: "14.622",
                    viewBox: "0 0 7.882 14.622"
                }, i.a.createElement("path", {
                    id: "Path_68716",
                    "data-name": "Path 68716",
                    d: "M0,6.795,6.795,0C6.443.352,13.59,6.795,13.59,6.795",
                    transform: "translate(7.352 0.53) rotate(90)",
                    fill: "none",
                    stroke: "#bbb4a9",
                    strokeWidth: "1.5"
                }))))), 1 == e.videos.length && i.a.createElement("div", null, i.a.createElement("p", {className: "txt-white txt-center"}, i.a.createElement("em", null, e.videos[0].description)), i.a.createElement("div", {className: "single-video-container"}, i.a.createElement("div", {className: "iframe-container"}, i.a.createElement("iframe", {
                    className: "vimeo-iframe responsive-iframe",
                    src: e.videos[0].videoLink,
                    width: "740",
                    height: "460",
                    frameBorder: "0",
                    allow: "autoplay; fullscreen; picture-in-picture",
                    allowFullScreen: !0
                })))))))
            })), i.a.createElement(s.a, {modalProps: p, digitalassetsacf: d}))
        }
    }
}]);
//# sourceMappingURL=component---src-templates-standard-videos-js-168fae3ec9742d59b1dd.js.map
