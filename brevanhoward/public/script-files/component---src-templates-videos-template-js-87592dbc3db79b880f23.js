(window.webpackJsonp = window.webpackJsonp || []).push([[23], {
    "//Rp": function (e, a, t) {
        "use strict";
        t.r(a);
        var c = t("q1tI"), l = t.n(c), s = t("Bl7J"), r = t("vrFN"),
            n = (t("PNvn"), t("ix9Z"), t("GBeJ"), t("9icC"), t("rGmR"), t("tXu8"), t("a1Qa"), t("WQZh"), t("h+r4"), t("QdDY"), t("XUsL")),
            h = t("/huT"),
            m = (t("1iIR"), t("Y9D7"), t("yrOS"), t("YfPL"), t("6/6W"), t("CF0R"), t("a97V"), t("TaHA"), t("c0hC")),
            i = [{
                introduction: [{
                    id: 0,
                    src: "https://player.vimeo.com/video/833656626?h=a25c79a09d",
                    title: "Introducing BH Digital - November 2021"
                }, {
                    id: 1,
                    src: "https://player.vimeo.com/video/833659906?h=88073071ff",
                    title: "Digital Asset Ecosystem - February 2022"
                }],
                crypto_bytes: [{
                    id: 2,
                    src: "https://player.vimeo.com/video/833663515?h=348922e770",
                    title: "An Introduction with Colleen and Peter - June 2023"
                }],
                focus_series: [{
                    id: 4,
                    src: "https://player.vimeo.com/video/833664673?h=d95a633400",
                    title: "Regulatory Landscape with Andrew Nelson - June 2023"
                }, {
                    id: 3,
                    src: "https://player.vimeo.com/video/833667130?h=807f2ebf7a",
                    title: "Counterparty Risk with Ivan Chen - March 2023"
                }]
            }], o = !0;
        "undefined" != typeof window && (0 != window.localStorage.length && "accepted" === window.localStorage.getItem("bh-disclosureNoticesStatus") || (o = !1));
        a.default = function (e) {
            var a = e.data.wpgraphql.page, t = a.title, c = a.newvideosacf;
            console.log("initialOpen in template", o);
            var d = Object(h.a)({initialOpen: o}).modalProps, p = d.modalStatus, v = l.a.useState(null),
                E = (v[0], v[1], l.a.useState(null)), u = E[0], w = E[1];
            return l.a.createElement(s.a, {
                disableAgreementModal: !0, onAccept: function () {
                    null == d || d.openModal({})
                }, modalStateOverride: !(null != p && p.open)
            }, l.a.createElement(r.a, {title: t}), l.a.createElement("div", {className: "video-slider-wrapper v-intro-bg"}, l.a.createElement("div", {className: "vs-container-wrap"}, l.a.createElement("div", {className: "container"}, l.a.createElement("h3", {className: "txt-white"}, l.a.createElement("svg", {
                version: "1.1",
                class: "bh-svg-logo",
                id: "Layer_1",
                xmlns: "http://www.w3.org/2000/svg",
                x: "0px",
                y: "0px",
                viewBox: "0 0 1867.7 79.9"
            }, l.a.createElement("g", null, l.a.createElement("path", {
                class: "st0",
                d: "M27.7,36.9c10.4-1.4,16.6-10.7,16.6-18.6c0-9.6-7.9-18.3-22-18.3H0c0.2,12.3,0,72.9,0,79.9h21.9\r c14.4,0,28-7.1,28-23C49.9,42.8,39.9,37.5,27.7,36.9L27.7,36.9z M8.8,2.9c8.3,0,26-0.2,26,16.7c0,13.2-7.7,17.7-26,17.7V2.9z\r M8.8,76.3V39.5c3.6,0,7.2-0.1,10.9-0.1c12.1,0,20.3,6.2,20.3,19C40,76.3,25,77.7,8.8,76.3z"
            }), l.a.createElement("path", {
                class: "st0",
                d: "M183.1,76.5L183,41.1c11.4-0.2,21-0.1,27.9,0.5v-4.4c-6.9,0.8-21.8,0.7-27.8,0.7c0,0.1,0-34.7,0-34.7\r s27.1-0.1,32.8,0.6L214.4,0h-40.1v79.8h45.8l1.4-4C215.6,76.9,183.1,76.5,183.1,76.5L183.1,76.5z"
            }), l.a.createElement("path", {
                class: "st0",
                d: "M285,68.4v-1.4c0,0-18.8-45.4-26.5-66.9h-9.7c4.5,11.4,19.2,46.9,29.5,72.6c1.3,3.2,3.2,8.4,3.2,8.4h1.1\r l33.5-81h-3.3L285,68.4z"
            }), l.a.createElement("path", {
                class: "st0",
                d: "M369.6-1.2h-1.1l-33.5,81h3.4l11.6-28h31.8c3.8,9.5,8,20.3,10.7,28h10.2C398,68.6,382.9,33,372.5,7.2\r C371.2,4,369.6-1.2,369.6-1.2L369.6-1.2z M351.4,48.4l14.7-37v1.4c0,0,8.1,19.9,14.4,35.6L351.4,48.4L351.4,48.4z"
            }), l.a.createElement("path", {
                class: "st0",
                d: "M499.4,0h-3.8c0.2,12.3,0.2,58.9,0.2,65.9l-0.8-2c0,0-48.5-57.2-53.4-63.8h-5.1l0.7,6.1\r c0.1,17.2,0,67.4,0,73.8h3.8V13.2l-0.8-2.6c0,0,50.8,61.3,59.3,70.7C498.9,58.5,499.4,22.8,499.4,0L499.4,0z"
            }), l.a.createElement("path", {
                class: "st0",
                d: "M644.5,37.9H602V0h-8.7c0.2,12.3-0.1,72.9-0.1,79.9h8.8c0-12.6-0.1-29.9-0.1-38.6h42.6c-0.1,14,0,34.8,0,38.6\r h8.9V0h-8.9C644.6,5.2,644.5,26.9,644.5,37.9L644.5,37.9z"
            }), l.a.createElement("path", {
                class: "st0",
                d: "M732.1-0.8c-25.6,0-42.5,19.6-42.5,42c0,25.9,18.9,39.8,42.6,39.8s41.9-14.7,41.9-40.5\r C774.1,18,757.6-0.8,732.1-0.8L732.1-0.8z M732,77.6c-18.3-0.1-32.3-15.4-32.3-36.4c0-18.1,10-38.3,32.3-38.3s32,19.5,32,37.6\r C764,61.5,750.3,77.7,732,77.6L732,77.6z"
            }), l.a.createElement("path", {
                class: "st0",
                d: "M882.3,67.4V66L858.7-1.8h-1.1L833,67.2v-1.4c0,0-15.2-44.3-22.9-65.7h-9.4c4.3,11.8,16.1,46.9,26.5,72.6\r c1.2,3.2,3,8.4,3,8.4h1.1l24.2-68.9c0,0.2,0,1.8,0.1,1.9c4.2,12,10.8,33.3,20.9,58.6c1.3,3.2,3.1,8.4,3.1,8.4h1l30.7-81h-3.7\r L882.3,67.4L882.3,67.4z"
            }), l.a.createElement("path", {
                class: "st0",
                d: "M964.7-1.2h-1.1l-33.5,81h3.4l11.6-28h31.8c3.8,9.5,7.9,20.3,10.7,28H998C993.1,68.6,978,33,967.7,7.2\r C966.4,4,964.7-1.2,964.7-1.2L964.7-1.2z M946.6,48.4l14.7-37v1.4c0,0,8.1,19.9,14.4,35.6L946.6,48.4L946.6,48.4z"
            }), l.a.createElement("path", {
                class: "st0",
                d: "M1160.6,0.7c-4.5-0.6-10.8-0.7-17.3-0.7h-19.8c0.2,12.3,0,72.8,0,79.8h9.4c5.2,0,18.4,0.2,25.5-0.6\r c9.1-0.9,35.5-6.9,35.5-40.9C1193.9,12.1,1171.3,2.1,1160.6,0.7L1160.6,0.7z M1184.8,42c-0.8,22.2-14.5,28.8-21.9,31.8\r c-8.1,3.3-28,2.2-30.3,1.4c0-22.8-0.1-48.6-0.1-71.4c4.9,0,18.5-0.2,25,1.3C1174.5,8.9,1185.4,25.6,1184.8,42L1184.8,42z"
            }), l.a.createElement("path", {
                class: "st1",
                d: "M1324,0.6c-4.8-0.7-9.6-0.7-14.5-0.7H1284c0,26.7,0.1,53.3,0.1,80h21.8c5.2,0,10.6,0,15.9-0.6\r c22.1-2.4,36.8-18.8,36.8-40.9C1358.7,19,1342.6,3.3,1324,0.6L1324,0.6z M1325.6,70.2c-5,1.9-11.3,1.9-16.6,1.9\r c-3.3,0-6.6,0-10-0.4V7.6h8.9c4.3,0,8.5,0.1,12.7,1.1c14.9,3.6,21.9,17.6,21.9,32C1342.5,54.1,1339.3,65.1,1325.6,70.2z"
            }), l.a.createElement("path", {
                class: "st1",
                d: "M1396.7-0.1c0.2,8.5,0.2,17.1,0.2,25.6c0,18.1-0.2,36.2-0.4,54.3h14.9c0-26.7-0.1-53.3-0.1-80H1396.7z"
            }), l.a.createElement("path", {
                class: "st1",
                d: "M1494.6,6.1c10.8,0,19.8,4.8,24.4,14.6l4.5-11.9c-9.6-7-18.6-10.3-30.6-10.3c-24,0-42.2,18-42.2,42\r s19.3,40.8,42.7,40.8c8.9,0,21.9-2.6,30-6.6V42.8H1510v27.5c-3.7,2.6-9.6,3.8-14,3.8c-19.9,0-29.5-15.1-29.5-33.7\r C1466.5,23.1,1475.3,6.1,1494.6,6.1L1494.6,6.1z"
            }), l.a.createElement("path", {
                class: "st1",
                d: "M1566.4-0.1c0.2,8.5,0.2,17.1,0.2,25.6c0,18.1-0.2,36.2-0.4,54.3h14.9c0-26.7-0.1-53.3-0.1-80H1566.4z"
            }), l.a.createElement("path", {
                class: "st1",
                d: "M1619.8-0.1L1618,7h27.1v72.9h14.7c0-24.3,0.1-48.5,0.1-72.9h27.9l-0.1-7.1L1619.8-0.1L1619.8-0.1z"
            }), l.a.createElement("path", {
                class: "st1",
                d: "M1745.2-0.2h-5l-34.7,80.1h8.7l11-25.6h27.4c3.6,8.5,7.1,17,10.2,25.6h16.7c-6.9-15.4-13.8-31-20.4-46.6\r C1754.4,22.2,1749.2,11.3,1745.2-0.2L1745.2-0.2z M1728.6,45.9l10.2-24.9l10.4,24.9H1728.6L1728.6,45.9z"
            }), l.a.createElement("path", {
                class: "st1",
                d: "M1844.2,72.7h-12.8V-0.1h-14.9v80h48.3l3-8.4C1860,72.9,1851.9,72.7,1844.2,72.7L1844.2,72.7z"
            }), l.a.createElement("path", {
                class: "st0",
                d: "M132.3,21.3c0-10.6-8.5-21.1-26.9-21.1H87.9C88,4.1,88,12.6,88,22.8v4c0,21.8-0.1,48.8-0.1,53.3h9V44.6\r c0,0.1,2.7,0.2,2.9,0.2c0.9,0,1.9,0.1,2.8,0.1c0.9,0,1.7-0.1,2.6-0.1c0.5,0,1.1-0.1,1.6-0.2c0.3,0,0.6-0.1,0.8-0.2\r c0.4-0.1,0.7-0.1,0.7-0.1s17.7,30.1,21.1,35.8h10.4c-8.3-12.9-17.8-27.6-22.9-37.3C126.9,39.7,132.3,32.2,132.3,21.3L132.3,21.3z\r M96.9,42.1V4.4l0.6-0.7c18.5-1.4,26.3,8.7,26.3,18.5c0,7.2-3.6,13.8-9.9,17.5C109.6,41.4,103.9,42.1,96.9,42.1L96.9,42.1z"
            })), l.a.createElement("path", {
                class: "st0",
                d: "M1079.1,21.3c0-10.6-8.5-21.1-26.9-21.1h-17.4c0.1,3.9,0.1,12.4,0.1,22.6v4c0,21.8-0.1,48.8-0.1,53.3h9V44.6\r c0,0.1,2.7,0.2,2.9,0.2c0.9,0,1.9,0.1,2.8,0.1c0.8,0,1.7-0.1,2.6-0.1c0.5,0,1.1-0.1,1.6-0.2c0.3,0,0.6-0.1,0.8-0.2\r c0.3-0.1,0.7-0.1,0.7-0.1s17.7,30.1,21.1,35.8h10.4c-8.3-12.9-17.8-27.6-22.9-37.3C1073.7,39.7,1079.1,32.2,1079.1,21.3L1079.1,21.3\r z M1043.8,42.1V4.4l0.6-0.7c18.5-1.4,26.3,8.7,26.3,18.5c0,7.2-3.6,13.8-9.9,17.5C1056.4,41.4,1050.7,42.1,1043.8,42.1z"
            })), l.a.createElement("br", null), "Crypto Content")))), l.a.createElement("div", {className: "video-slider-wrapper v-lighter-blue-bg pt-0 v-crypto-bg"}, l.a.createElement("div", {className: "vs-container-wrap"}, l.a.createElement("div", {className: "container"}, l.a.createElement("h3", {className: "txt-white"}, "Crypto Bytes"), l.a.createElement("p", {className: "s-sub-heading txt-center"}, "Crypto Bytes is an investment-focused series on non-speculative use cases and real-world adoption."), l.a.createElement("p", {className: "txt-white txt-center"}, l.a.createElement("em", null, i[0].crypto_bytes[0].title)), l.a.createElement("div", {className: "single-video-container"}, l.a.createElement("div", {className: "iframe-container"}, l.a.createElement("iframe", {
                className: "vimeo-iframe responsive-iframe",
                src: i[0].crypto_bytes[0].src,
                width: "740",
                height: "460",
                frameBorder: "0",
                allow: "autoplay; fullscreen; picture-in-picture",
                allowFullScreen: !0
            })))))), l.a.createElement("div", {className: "video-slider-wrapper v-white-bg pt-0"}, l.a.createElement("div", {className: "vs-container-wrap"}, l.a.createElement("div", {className: "container"}, l.a.createElement("h3", {className: ""}, "Under the Hood"), l.a.createElement("p", {className: "s-sub-heading txt-center"}, "Under the Hood is a business-focused series featuring topical deep-dives on risk, operations and regulatory matters."), l.a.createElement("div", {
                id: "swiper-series",
                className: "swiper-container"
            }, l.a.createElement(m.a, {
                spaceBetween: 50,
                slidesPerView: 2,
                centeredSlides: !0,
                onSlideChange: function () {
                    return console.log("slide change")
                },
                onSwiper: function (e) {
                    console.log("checking swiper slider", e), w(e)
                },
                breakpoints: {320: {slidesPerView: 1}, 850: {slidesPerView: 2}}
            }, i[0].focus_series.map((function (e, a) {
                return l.a.createElement(m.b, {key: "ser-" + a}, l.a.createElement("p", {className: "txt-center"}, l.a.createElement("em", null, e.title)), l.a.createElement("div", {className: "iframe-container"}, l.a.createElement("iframe", {
                    className: "vimeo-iframe responsive-iframe",
                    src: e.src,
                    width: "740",
                    height: "460",
                    frameBorder: "0",
                    allow: "autoplay; fullscreen; picture-in-picture",
                    allowFullScreen: !0
                })))
            })))), l.a.createElement("div", {className: "v-slide-nav"}, l.a.createElement("button", {
                onClick: function () {
                    u.slidePrev()
                }
            }, l.a.createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "7.882",
                height: "14.622",
                viewBox: "0 0 7.882 14.622"
            }, l.a.createElement("path", {
                id: "Path_73795",
                "data-name": "Path 73795",
                d: "M0,0,6.794,6.794C6.443,6.443,13.589,0,13.589,0",
                transform: "translate(7.325 0.53) rotate(90)",
                fill: "none",
                stroke: "#bbb4a9",
                strokeWidth: "1.5"
            }))), l.a.createElement("div", {className: "vs-pagination"}, i[0].focus_series.map((function (e, a) {
                return l.a.createElement("span", {
                    key: "nav-series-" + a, onClick: function () {
                        return u.slideTo(a)
                    }
                })
            }))), l.a.createElement("button", {
                onClick: function () {
                    u.slideNext()
                }
            }, l.a.createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "7.882",
                height: "14.622",
                viewBox: "0 0 7.882 14.622"
            }, l.a.createElement("path", {
                id: "Path_68716",
                "data-name": "Path 68716",
                d: "M0,6.795,6.795,0C6.443.352,13.59,6.795,13.59,6.795",
                transform: "translate(7.352 0.53) rotate(90)",
                fill: "none",
                stroke: "#bbb4a9",
                strokeWidth: "1.5"
            }))))))), l.a.createElement(n.a, {modalProps: d, digitalassetsacf: c}))
        }
    }, CF0R: function (e, a, t) {
        var c = t("q1tI");

        function l(e) {
            return c.createElement("svg", e, [c.createElement("defs", {key: 0}, c.createElement("style", null, "\n      .cls-1 {\n        fill: #fff;\n      }\n\n      .cls-2 {\n        fill: #d1c8ba;\n      }\n    ")), c.createElement("g", {key: 1}, [c.createElement("path", {
                className: "cls-2",
                d: "m82.9,164.96c10.44-1.42,16.61-10.68,16.61-18.63,0-9.61-7.95-18.27-21.95-18.27h-22.31c.24,12.34,0,72.85,0,79.85h21.95c14.36,0,28-7.12,28-23.02,0-14-10.09-19.34-22.31-19.93Zm-18.87-34.05c8.31,0,25.98-.24,25.98,16.73,0,13.17-7.71,17.68-25.98,17.68v-34.41Zm0,73.45v-36.78c3.56,0,7.24-.12,10.92-.12,12.1,0,20.29,6.17,20.29,18.98,0,17.92-14.95,19.34-31.21,17.92Z",
                key: 0
            }), c.createElement("path", {
                className: "cls-2",
                d: "m238.33,204.59l-.12-35.48c11.39-.24,21-.12,27.88.47v-4.39c-6.88.83-21.83.71-27.76.71,0,.12,0-34.65,0-34.65,0,0,27.05-.12,32.75.59l-1.42-3.8h-40.1v79.85h45.8l1.42-4.03c-5.93,1.07-38.44.71-38.44.71Z",
                key: 1
            }), c.createElement("path", {
                className: "cls-2",
                d: "m340.25,196.41v-1.42s-18.75-45.44-26.46-66.92h-9.73c4.51,11.39,19.22,46.87,29.54,72.62,1.31,3.2,3.2,8.42,3.2,8.42h1.07l33.46-81.04h-3.32l-27.76,68.34Z",
                key: 2
            }), c.createElement("path", {
                className: "cls-2",
                d: "m424.84,126.88h-1.07l-33.46,81.04h3.44l11.63-28h31.8c3.8,9.49,7.95,20.29,10.68,28h10.2c-4.86-11.27-19.93-46.87-30.26-72.62-1.31-3.2-2.97-8.42-2.97-8.42Zm-18.15,49.6l14.71-37.02v1.42s8.07,19.93,14.36,35.6h-29.07Z",
                key: 3
            }), c.createElement("path", {
                className: "cls-2",
                d: "m554.65,128.06h-3.8c.24,12.34.24,58.85.24,65.85l-.83-2.02s-48.53-57.19-53.39-63.84h-5.1l.71,6.05c.12,17.2,0,67.39,0,73.8h3.8v-66.68l-.83-2.61s50.78,61.34,59.33,70.72c-.59-22.78-.12-58.5-.12-81.28Z",
                key: 4
            }), c.createElement("path", {
                className: "cls-2",
                d: "m699.76,165.91h-42.48v-37.85h-8.66c.24,12.34-.12,72.85-.12,79.85h8.78c0-12.58-.12-29.9-.12-38.56h42.6c-.12,14,0,34.77,0,38.56h8.9v-79.85h-8.9c.12,5.22,0,26.93,0,37.85Z",
                key: 5
            }), c.createElement("path", {
                className: "cls-2",
                d: "m787.32,127.23c-25.63,0-42.48,19.58-42.48,42,0,25.87,18.87,39.75,42.6,39.75s41.88-14.71,41.88-40.46c0-22.43-16.49-41.29-42-41.29Zm-.12,78.43c-18.27-.12-32.27-15.43-32.27-36.43,0-18.15,9.97-38.33,32.27-38.33s32.04,19.46,32.04,37.61c0,21-13.65,37.26-32.04,37.14Z",
                key: 6
            }), c.createElement("path", {
                className: "cls-2",
                d: "m937.53,195.46v-1.42l-23.61-67.75h-1.07l-24.56,68.94v-1.42s-15.19-44.26-22.9-65.73h-9.37c4.27,11.75,16.14,46.87,26.46,72.62,1.19,3.2,2.97,8.42,2.97,8.42h1.07l24.21-68.94c0,.24,0,1.78.12,1.9,4.15,11.98,10.8,33.34,20.88,58.61,1.31,3.2,3.08,8.42,3.08,8.42h.95l30.73-81.04h-3.68l-25.27,67.39Z",
                key: 7
            }), c.createElement("path", {
                className: "cls-2",
                d: "m1019.99,126.88h-1.07l-33.46,81.04h3.44l11.63-28h31.8c3.8,9.49,7.95,20.29,10.68,28h10.2c-4.86-11.27-19.93-46.87-30.26-72.62-1.31-3.2-2.97-8.42-2.97-8.42Zm-18.15,49.6l14.71-37.02v1.42s8.07,19.93,14.36,35.6h-29.07Z",
                key: 8
            }), c.createElement("path", {
                className: "cls-2",
                d: "m1215.88,128.78c-4.51-.59-10.8-.71-17.32-.71h-19.81c.24,12.34,0,72.85,0,79.85h9.37c5.22,0,18.39.24,25.51-.59,9.14-.95,35.48-6.88,35.48-40.93,0-26.22-22.54-36.19-33.22-37.61Zm24.21,41.29c-.83,22.19-14.48,28.83-21.95,31.8-8.07,3.32-28,2.25-30.26,1.42,0-22.78-.12-48.65-.12-71.43,4.86,0,18.51-.24,25.04,1.31,16.97,3.8,27.88,20.53,27.29,36.9Z",
                key: 9
            }), c.createElement("path", {
                className: "cls-1",
                d: "m1379.26,128.66c-4.75-.71-9.61-.71-14.48-.71h-25.51c0,26.7.12,53.27.12,79.97h21.83c5.22,0,10.56,0,15.9-.59,22.07-2.37,36.78-18.75,36.78-40.93,0-19.34-16.02-35-34.65-37.73Zm1.54,69.65c-4.98,1.9-11.27,1.9-16.61,1.9-3.32,0-6.64,0-9.97-.36v-64.19h8.9c4.27,0,8.54.12,12.7,1.07,14.95,3.56,21.95,17.56,21.95,32.04,0,13.41-3.2,24.44-16.97,29.54Z",
                key: 10
            }), c.createElement("path", {
                className: "cls-1",
                d: "m1451.99,127.94c.24,8.54.24,17.09.24,25.63,0,18.15-.24,36.19-.36,54.34h14.95c0-26.7-.12-53.28-.12-79.97h-14.71Z",
                key: 11
            }), c.createElement("path", {
                className: "cls-1",
                d: "m1549.88,134.11c10.8,0,19.82,4.75,24.44,14.59l4.51-11.87c-9.61-7-18.63-10.32-30.61-10.32-23.97,0-42.24,18.04-42.24,42s19.34,40.82,42.71,40.82c8.9,0,21.95-2.61,30.02-6.64v-31.8h-13.41v27.53c-3.68,2.61-9.61,3.8-14,3.8-19.93,0-29.54-15.07-29.54-33.7,0-17.32,8.78-34.41,28.12-34.41Z",
                key: 12
            }), c.createElement("path", {
                className: "cls-1",
                d: "m1621.66,127.94c.24,8.54.24,17.09.24,25.63,0,18.15-.24,36.19-.36,54.34h14.95c0-26.7-.12-53.28-.12-79.97h-14.71Z",
                key: 13
            }), c.createElement("path", {
                className: "cls-1",
                d: "m1675.06,127.94l-1.78,7.12h27.05v72.85h14.71c0-24.32.12-48.53.12-72.85h27.88l-.12-7.12h-67.87Z",
                key: 14
            }), c.createElement("path", {
                className: "cls-1",
                d: "m1800.47,127.83h-4.98l-34.65,80.09h8.66l11.04-25.63h27.41c3.56,8.54,7.12,16.97,10.21,25.63h16.73c-6.88-15.42-13.76-30.97-20.41-46.63-4.86-11.03-10.08-21.95-14-33.46Zm-16.61,46.16l10.2-24.92,10.44,24.92h-20.65Z",
                key: 15
            }), c.createElement("path", {
                className: "cls-1",
                d: "m1899.42,200.8h-12.81v-72.85h-14.95v79.97h48.29l2.97-8.42c-7.71,1.42-15.78,1.3-23.49,1.3Z",
                key: 16
            }), c.createElement("path", {
                className: "cls-2",
                d: "m187.54,149.38c0-10.56-8.54-21.12-26.93-21.12h-17.44c.07,3.86.1,12.42.11,22.58v3.99c0,21.8-.11,48.75-.11,53.28h9.02v-35.46c0,.06,2.67.19,2.92.2.94.04,1.89.06,2.83.05.85-.01,1.7-.05,2.55-.12.53-.04,1.09-.09,1.63-.17.28-.04.55-.1.83-.17.35-.09.66-.15.66-.15,0,0,17.68,30.05,21.1,35.82h10.44c-8.31-12.93-17.8-27.65-22.9-37.26,9.85-3.08,15.31-10.56,15.31-21.48Zm-35.36,20.78v-37.75l.59-.71c18.51-1.42,26.34,8.66,26.34,18.51,0,7.23-3.57,13.77-9.94,17.54-4.36,1.69-10.03,2.4-16.99,2.41Z",
                key: 17
            })]), c.createElement("path", {
                className: "cls-2",
                d: "m1134.37,149.38c0-10.56-8.54-21.12-26.93-21.12h-17.44c.07,3.86.1,12.42.11,22.58v3.99c0,21.8-.11,48.75-.11,53.28h9.02v-35.46c0,.06,2.67.19,2.92.2.94.04,1.89.06,2.83.05.85-.01,1.7-.05,2.55-.12.53-.04,1.09-.09,1.63-.17.28-.04.55-.1.83-.17.35-.09.66-.15.66-.15,0,0,17.68,30.05,21.1,35.82h10.44c-8.31-12.93-17.8-27.65-22.9-37.26,9.85-3.08,15.31-10.56,15.31-21.48Zm-35.36,20.78v-37.75l.59-.71c18.51-1.42,26.34,8.66,26.34,18.51,0,7.23-3.57,13.77-9.94,17.54-4.36,1.69-10.03,2.4-16.99,2.41Z",
                key: 2
            })])
        }

        l.defaultProps = {
            id: "Layer_1",
            "data-name": "Layer 1",
            viewBox: "0 0 1999.99 335.62"
        }, e.exports = l, l.default = l
    }
}]);
//# sourceMappingURL=component---src-templates-videos-template-js-87592dbc3db79b880f23.js.map
