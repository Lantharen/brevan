/*! For license information please see 26-8e650688770162ed6a06.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([[26], {
    GWS6: function (e, t, r) {
        "use strict";
        r.r(t);
        var o = r("q1tI"), i = r.n(o), n = r("aqT/"), a = r.n(n), p = r("KQm4"), y = r("xnld"), s = r("dI71"),
            c = function (e) {
                function t() {
                    return e.apply(this, arguments) || this
                }

                Object(s.a)(t, e);
                var r = t.prototype;
                return r.createElement = function () {
                    var e = document.createElement("div");
                    e.className = "pulse-inner", e.style.animationDelay = 25 * Math.random() + "s";
                    var t = document.createElement("div");
                    return t.className = "pin-callout pulse-anim", t.style.color = this.definition.data.color, t.appendChild(e), t
                }, r.setPosition = function (e) {
                    if (e.world.similarityToCameraVector < .3) this.element.classList.add("hidden"); else if (this.element.classList.remove("hidden"), this.element.parentNode && !this.element.parentNode.classList.contains("globe-offscreen")) {
                        var t = e.screen.x, r = e.screen.y;
                        this.element.style.transform = "translate(" + t.toFixed(2) + "px, " + r.toFixed(2) + "px)", this.element.style.zIndex = Math.round(1e4 * e.screen.y)
                    }
                }, t
            }(y.Callout), h = r("Ox6l");
        var d, u = (d = h.a, {
            features: [{
                type: "Feature",
                properties: {bhTypeId: "fixedIncome", bhPointName: "Italy 1"},
                geometry: {type: "Point", coordinatesReal: [42.2550826, 13.4669094]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "fixedIncome", bhPointName: "Germany 1"},
                geometry: {type: "Point", coordinatesReal: [50.2916325, 9.8617636]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "fixedIncome", bhPointName: "Germany 2"},
                geometry: {type: "Point", coordinatesReal: [52.509535, 13.256363]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "fixedIncome", bhPointName: "France 1"},
                geometry: {type: "Point", coordinatesReal: [47.0794448, 2.2916244]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "fixedIncome", bhPointName: "France 2"},
                geometry: {type: "Point", coordinatesReal: [43.580391, 4.320197]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "fixedIncome", bhPointName: "UK 1"},
                geometry: {type: "Point", coordinatesReal: [54.0601374, -2.286681]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "fixedIncome", bhPointName: "Greece 1"},
                geometry: {type: "Point", coordinatesReal: [38.1126389, 23.6611656]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "fixedIncome", bhPointName: "Scandinavia 1"},
                geometry: {type: "Point", coordinatesReal: [59.6909083, 16.4555683]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "fixedIncome", bhPointName: "Norway 1"},
                geometry: {type: "Point", coordinatesReal: [60.6608698, 10.2994004]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "fixedIncome", bhPointName: "Canada Montral 1a"},
                geometry: {type: "Point", coordinatesReal: [45.9203862, -73.8788474]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "fixedIncome", bhPointName: "Canada "},
                geometry: {type: "Point", coordinatesReal: [49.15297, -121.458774]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "fixedIncome", bhPointName: "Canada "},
                geometry: {type: "Point", coordinatesReal: [46.195042, -80.672291]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "fixedIncome", bhPointName: "Canada "},
                geometry: {type: "Point", coordinatesReal: [53.330873, -128.672001]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "fixedIncome", bhPointName: "Canada "},
                geometry: {type: "Point", coordinatesReal: [52.802761, -101.944878]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "fixedIncome", bhPointName: "Brazil 1"},
                geometry: {type: "Point", coordinatesReal: [-22.5049496, -45.0083643]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "fixedIncome", bhPointName: "Brazil a1"},
                geometry: {type: "Point", coordinatesReal: [-26.115986, -49.65138]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "fixedIncome", bhPointName: "Brazil a2"},
                geometry: {type: "Point", coordinatesReal: [-22.512557, -54.398604]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "fixedIncome", bhPointName: "Brazil a3"},
                geometry: {type: "Point", coordinatesReal: [-7.362467, -43.585231]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "fixedIncome", bhPointName: "Brazil a4"},
                geometry: {type: "Point", coordinatesReal: [-7.013668, -48.859924]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "fixedIncome", bhPointName: "India New Delhi 1"},
                geometry: {type: "Point", coordinatesReal: [28.1409355, 76.9815335]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "fixedIncome", bhPointName: "India fi1"},
                geometry: {type: "Point", coordinatesReal: [14.732386, 75.895721]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "fixedIncome", bhPointName: "India fi1"},
                geometry: {type: "Point", coordinatesReal: [18.229351, 81.829751]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "fixedIncome", bhPointName: "China fi1"},
                geometry: {type: "Point", coordinatesReal: [22.917923, 114.616031]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "fixedIncome", bhPointName: "China fi2"},
                geometry: {type: "Point", coordinatesReal: [36.031332, 119.370853]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "fixedIncome", bhPointName: "China fi3"},
                geometry: {type: "Point", coordinatesReal: [41.244772, 111.363879]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "fixedIncome", bhPointName: "China fi4"},
                geometry: {type: "Point", coordinatesReal: [23.241346, 107.777831]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "fixedIncome", bhPointName: "China fi5"},
                geometry: {type: "Point", coordinatesReal: [30.069094, 116.736583]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "fixedIncome", bhPointName: "Japan Saitama 1"},
                geometry: {type: "Point", coordinatesReal: [35.7995524, 139.6297648]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "fixedIncome", bhPointName: "Taiwan 1"},
                geometry: {type: "Point", coordinatesReal: [23.8426954, 121.1449553]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "fixedIncome", bhPointName: "South Korea 1"},
                geometry: {type: "Point", coordinatesReal: [37.2142157, 127.727474]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "fixedIncome", bhPointName: "Australia Mel-Sidney 1"},
                geometry: {type: "Point", coordinatesReal: [-36.3418165, 146.3219565]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "fixedIncome", bhPointName: "Australia fi2"},
                geometry: {type: "Point", coordinatesReal: [-20.401272, 118.614036]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "fixedIncome", bhPointName: "Australia fi3 Perth"},
                geometry: {type: "Point", coordinatesReal: [-32.045333, 115.904291]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "fixedIncome", bhPointName: "Australia fi4 Brisbane"},
                geometry: {type: "Point", coordinatesReal: [-26.980829, 152.93873]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "fixedIncome", bhPointName: "New Zealand 1"},
                geometry: {type: "Point", coordinatesReal: [-41.0843871, 175.1093034]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "fixedIncome", bhPointName: "Argentina 1"},
                geometry: {type: "Point", coordinatesReal: [-34.0627795, -59.4707588]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "fixedIncome", bhPointName: "Argentina fi2"},
                geometry: {type: "Point", coordinatesReal: [-28.304381, -64.946923]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "fixedIncome", bhPointName: "Mexico 1"},
                geometry: {type: "Point", coordinatesReal: [19.6285928, -98.9437871]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "fixedIncome", bhPointName: "Mexico fi1"},
                geometry: {type: "Point", coordinatesReal: [21.043491, -89.643006]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "fixedIncome", bhPointName: "Chile 1"},
                geometry: {type: "Point", coordinatesReal: [-33.1015661, -70.8376837]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "fixedIncome", bhPointName: "Egypt Cairo 1"},
                geometry: {type: "Point", coordinatesReal: [30.033037, 31.0402646]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "fixedIncome", bhPointName: "Egypt fi2"},
                geometry: {type: "Point", coordinatesReal: [25.033037, 30.0402646]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "fixedIncome", bhPointName: "South Africa, Cape Town 1"},
                geometry: {type: "Point", coordinatesReal: [-30.8263867, 19.0219153]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "fixedIncome", bhPointName: "South Africa fi2"},
                geometry: {type: "Point", coordinatesReal: [-30.031055, 30.898913]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "foreignExchange", bhPointName: "Canada Vancuver 1b"},
                geometry: {type: "Point", coordinatesReal: [48.3724993, -124.2754058]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "foreignExchange", bhPointName: "Canada fe1"},
                geometry: {type: "Point", coordinatesReal: [50.282319, -107.797284]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "foreignExchange", bhPointName: "Canada fe"},
                geometry: {type: "Point", coordinatesReal: [49.15297, -117.552476]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "foreignExchange", bhPointName: "Canada fe"},
                geometry: {type: "Point", coordinatesReal: [48.980217, -55.966506]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "foreignExchange", bhPointName: "Canada fe"},
                geometry: {type: "Point", coordinatesReal: [45.02695, -63.703309]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "foreignExchange", bhPointName: "Brazil, Braz-Rio 1"},
                geometry: {type: "Point", coordinatesReal: [-18.157775, -47.1484185]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "foreignExchange", bhPointName: "Brazil fe1"},
                geometry: {type: "Point", coordinatesReal: [-.703107, -48.77419]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "foreignExchange", bhPointName: "Brazil fe2"},
                geometry: {type: "Point", coordinatesReal: [-6.315299, -37.080529]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "foreignExchange", bhPointName: "Brazil fe3"},
                geometry: {type: "Point", coordinatesReal: [-31.653381, -54.310692]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "foreignExchange", bhPointName: "India Ranchi 1"},
                geometry: {type: "Point", coordinatesReal: [22.9098594, 85.8214878]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "foreignExchange", bhPointName: "India fe2"},
                geometry: {type: "Point", coordinatesReal: [27.605671, 83.500113]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "foreignExchange", bhPointName: "India fe3"},
                geometry: {type: "Point", coordinatesReal: [18.812718, 75.060561]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "foreignExchange", bhPointName: "China Shanghai 1"},
                geometry: {type: "Point", coordinatesReal: [31.2000688, 120.9896929]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "foreignExchange", bhPointName: "Japan Nagoya 1"},
                geometry: {type: "Point", coordinatesReal: [35.4446097, 137.1382417]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "foreignExchange", bhPointName: "Taiwan 1"},
                geometry: {type: "Point", coordinatesReal: [22.5662594, 120.7114361]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "foreignExchange", bhPointName: "Australia Cambera 1"},
                geometry: {type: "Point", coordinatesReal: [-35.2506543, 149.2475491]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "foreignExchange", bhPointName: "Australia fe2"},
                geometry: {type: "Point", coordinatesReal: [-29.993002, 152.850818]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "foreignExchange", bhPointName: "Australia fe3"},
                geometry: {type: "Point", coordinatesReal: [-33.504759, 122.345508]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "foreignExchange", bhPointName: "Australia fe4"},
                geometry: {type: "Point", coordinatesReal: [-35.101934, 144.14816]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "foreignExchange", bhPointName: "New Zealand 2"},
                geometry: {type: "Point", coordinatesReal: [-44.5210971, 169.6819418]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "foreignExchange", bhPointName: "Argentina 2"},
                geometry: {type: "Point", coordinatesReal: [-37.7083411, -61.4168569]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "foreignExchange", bhPointName: "Argentina fe2"},
                geometry: {type: "Point", coordinatesReal: [-38.965816, -68.098645]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "foreignExchange", bhPointName: "Argentina fe3"},
                geometry: {type: "Point", coordinatesReal: [-38.479395, -61.074293]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "foreignExchange", bhPointName: "Mexico 1"},
                geometry: {type: "Point", coordinatesReal: [18.0411935, -95.0129456]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "foreignExchange", bhPointName: "Mexico fe1"},
                geometry: {type: "Point", coordinatesReal: [24.806681, -107.622133]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "foreignExchange", bhPointName: "Egypt fi2"},
                geometry: {type: "Point", coordinatesReal: [29.4835911, 29.1945939]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "foreignExchange", bhPointName: "Egypt fi2"},
                geometry: {type: "Point", coordinatesReal: [28.033037, 31.0402646]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "foreignExchange", bhPointName: "South Africa fe1"},
                geometry: {type: "Point", coordinatesReal: [-33.5998921, 25.2058883]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "foreignExchange", bhPointName: "South Africa fe2"},
                geometry: {type: "Point", coordinatesReal: [-27.722436, 25.140706]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "foreignExchange", bhPointName: "Russia 1, Moscow"},
                geometry: {type: "Point", coordinatesReal: [55.7061053, 37.6290334]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "foreignExchange", bhPointName: "Russia fi2"},
                geometry: {type: "Point", coordinatesReal: [56.6535299, 31.1459715]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "foreignExchange", bhPointName: "Russia fi3,"},
                geometry: {type: "Point", coordinatesReal: [59.7061053, 48.6290334]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "foreignExchange", bhPointName: "Russia fi3,"},
                geometry: {type: "Point", coordinatesReal: [54.7061053, 43.6290334]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "foreignExchange", bhPointName: "South Korea 1"},
                geometry: {type: "Point", coordinatesReal: [38.2142157, 128.727474]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "foreignExchange", bhPointName: "Indonesia, Jakarta 1"},
                geometry: {type: "Point", coordinatesReal: [-6.5752732, 107.1827953]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "foreignExchange", bhPointName: "Indonesia fe1"},
                geometry: {type: "Point", coordinatesReal: [3.688855, 98.483664]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "foreignExchange", bhPointName: "Indonesia fe2"},
                geometry: {type: "Point", coordinatesReal: [-7.28619, 112.622422]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "foreignExchange", bhPointName: "Indonesia fe3"},
                geometry: {type: "Point", coordinatesReal: [-7.558547, 108.864013]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "foreignExchange", bhPointName: "Indonesia fe4"},
                geometry: {type: "Point", coordinatesReal: [-1.164471, 116.763126]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "foreignExchange", bhPointName: "Indonesia fe3"},
                geometry: {type: "Point", coordinatesReal: [-3.864255, 122.127074]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "foreignExchange", bhPointName: "Hong Kong 2"},
                geometry: {type: "Point", coordinatesReal: [23.2825274, 115.086185]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "foreignExchange", bhPointName: "Singapore 2"},
                geometry: {type: "Point", coordinatesReal: [.2956615, 102.7889765]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "foreignExchange", bhPointName: "Chile 2"},
                geometry: {type: "Point", coordinatesReal: [-29.9116199, -71.1103799]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "foreignExchange", bhPointName: "Austria 1"},
                geometry: {type: "Point", coordinatesReal: [47.7727909, 13.7446415]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "foreignExchange", bhPointName: "France 2"},
                geometry: {type: "Point", coordinatesReal: [43.5567146, 1.3338835]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "foreignExchange", bhPointName: "US c1"},
                geometry: {type: "Point", coordinatesReal: [31.052934, -87.878862]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "foreignExchange", bhPointName: "US c1"},
                geometry: {type: "Point", coordinatesReal: [43.961191, -74.516096]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "foreignExchange", bhPointName: "US c1"},
                geometry: {type: "Point", coordinatesReal: [42.682435, -90.867645]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "foreignExchange", bhPointName: "US c1"},
                geometry: {type: "Point", coordinatesReal: [33.28462, -111.790596]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "foreignExchange", bhPointName: "US c1"},
                geometry: {type: "Point", coordinatesReal: [35.173808, -119.878459]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "comodities", bhPointName: "Middle east, UAE"},
                geometry: {type: "Point", coordinatesReal: [24.0755403, 55.6673025]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "comodities", bhPointName: "Middle east, Quatar"},
                geometry: {type: "Point", coordinatesReal: [25.085599, 51.369295]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "comodities", bhPointName: "Middle east, Bahrain"},
                geometry: {type: "Point", coordinatesReal: [26.086388, 50.533777]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "comodities", bhPointName: "Middle east, Saudi Arabia"},
                geometry: {type: "Point", coordinatesReal: [24.766785, 44.448106]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "comodities", bhPointName: "Middle east, Israel"},
                geometry: {type: "Point", coordinatesReal: [32.175612, 35.653351]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "comodities", bhPointName: "Middle east, Iraq/Iran"},
                geometry: {type: "Point", coordinatesReal: [33.137551, 46.383167]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "comodities", bhPointName: "Middle east, Turkey"},
                geometry: {type: "Point", coordinatesReal: [37.370157, 34.07044]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "comodities", bhPointName: "Middle east"},
                geometry: {type: "Point", coordinatesReal: [38.0062092, 43.753142]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "comodities", bhPointName: "US c1 Florida, Miami"},
                geometry: {type: "Point", coordinatesReal: [25.9234215, -80.2731567]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "comodities", bhPointName: "US c2 Florida, Miami"},
                geometry: {type: "Point", coordinatesReal: [30.39183, -82.219283]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "comodities", bhPointName: "US Texas c1"},
                geometry: {type: "Point", coordinatesReal: [31.7757147, -97.3745609]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "comodities", bhPointName: "US Texas c2"},
                geometry: {type: "Point", coordinatesReal: [29.745302, -95.425027]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "comodities", bhPointName: "US Texas c3"},
                geometry: {type: "Point", coordinatesReal: [29.42046, -98.545888]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "comodities", bhPointName: "Canada c1"},
                geometry: {type: "Point", coordinatesReal: [33.486435, -101.798652]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "comodities", bhPointName: "Canada c"},
                geometry: {type: "Point", coordinatesReal: [49.239121, -107.57509]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "comodities", bhPointName: "Canada c Calgary"},
                geometry: {type: "Point", coordinatesReal: [51.082822, -114.126584]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "comodities", bhPointName: "Canada c"},
                geometry: {type: "Point", coordinatesReal: [44.087585, -79.802144]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "comodities", bhPointName: "Brazil c1"},
                geometry: {type: "Point", coordinatesReal: [-12.8373515, -40.1986054]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "comodities", bhPointName: "Brazil c2"},
                geometry: {type: "Point", coordinatesReal: [-22.350076, -49.387394]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "comodities", bhPointName: "Brazil c2"},
                geometry: {type: "Point", coordinatesReal: [-4.65308, -42.970876]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "comodities", bhPointName: "China c1"},
                geometry: {type: "Point", coordinatesReal: [39.506902, 116.6786083]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "comodities", bhPointName: "China c2"},
                geometry: {type: "Point", coordinatesReal: [36.879621, 112.505756]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "fixedIncome", bhPointName: "China Shenzen 1"},
                geometry: {type: "Point", coordinatesReal: [23.6574083, 113.1288077]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "comodities", bhPointName: "Russia c1"},
                geometry: {type: "Point", coordinatesReal: [59.6535299, 31.1459715]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "comodities", bhPointName: "Russia c2, Moscow"},
                geometry: {type: "Point", coordinatesReal: [52.7061053, 35.6290334]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "comodities", bhPointName: "Russia c3, Moscow"},
                geometry: {type: "Point", coordinatesReal: [58.7061053, 37.6290334]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "comodities", bhPointName: "Australia 1"},
                geometry: {type: "Point", coordinatesReal: [-37.3975166, 142.0616306]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "comodities", bhPointName: "Australia c2"},
                geometry: {type: "Point", coordinatesReal: [-23.966176, 150.740941]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "comodities", bhPointName: "Australia c3"},
                geometry: {type: "Point", coordinatesReal: [-34.161818, 118.12634]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "equities", bhPointName: "US e1"},
                geometry: {type: "Point", coordinatesReal: [40.178873, -95.0928]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "equities", bhPointName: "US e2"},
                geometry: {type: "Point", coordinatesReal: [35.746512, -112.850935]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "equities", bhPointName: "US e3"},
                geometry: {type: "Point", coordinatesReal: [35.317366, -85.422529]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "equities", bhPointName: "US e4"},
                geometry: {type: "Point", coordinatesReal: [33.870416, -77.862135]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "equities", bhPointName: "US e5"},
                geometry: {type: "Point", coordinatesReal: [42.55308, -120.933397]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "equities", bhPointName: "Latin America e1"},
                geometry: {type: "Point", coordinatesReal: [14.7097865, -88.6453763]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "equities", bhPointName: "Latin America e2"},
                geometry: {type: "Point", coordinatesReal: [-28.921631, -56.151246]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "equities", bhPointName: "Brazil e1"},
                geometry: {type: "Point", coordinatesReal: [-19.642588, -40.766724]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "equities", bhPointName: "Pittsburgh 1"},
                geometry: {type: "Point", coordinatesReal: [39.3684706, -80.1853746]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "equities", bhPointName: "Canada Quebec 1"},
                geometry: {type: "Point", coordinatesReal: [47.0500929, -70.96658]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "equities", bhPointName: "Canada e1"},
                geometry: {type: "Point", coordinatesReal: [54.876607, -121.986034]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "equities", bhPointName: "Canada e1"},
                geometry: {type: "Point", coordinatesReal: [49.724479, -105.282838]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "equities", bhPointName: "Canada e1"},
                geometry: {type: "Point", coordinatesReal: [51.618017, -63.61276]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "equities", bhPointName: "Canada e1"},
                geometry: {type: "Point", coordinatesReal: [55.078367, -104.933871]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "equities", bhPointName: "Swis 1"},
                geometry: {type: "Point", coordinatesReal: [46.0214471, 8.4327599]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "equities", bhPointName: "Europe e1 Spain"},
                geometry: {type: "Point", coordinatesReal: [41.244772, -1.485749]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "equities", bhPointName: "Europe e2 Poland"},
                geometry: {type: "Point", coordinatesReal: [52.429222, 20.977847]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "equities", bhPointName: "Europe e2 Germany/Netderlands"},
                geometry: {type: "Point", coordinatesReal: [51.440313, 6.166726]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "equities", bhPointName: "South Africa eq1"},
                geometry: {type: "Point", coordinatesReal: [-33.7000144, 22.0243838]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "equities", bhPointName: "South Africa eq2"},
                geometry: {type: "Point", coordinatesReal: [-25.878994, 28.041788]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "equities", bhPointName: "Japan Sendai 1"},
                geometry: {type: "Point", coordinatesReal: [38.2905636, 140.7511287]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "equities", bhPointName: "Japan, Kyoto"},
                geometry: {type: "Point", coordinatesReal: [34.946739, 135.651281]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "equities", bhPointName: "China 1"},
                geometry: {type: "Point", coordinatesReal: [27.1310917, 119.1615187]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "equities", bhPointName: "China 2"},
                geometry: {type: "Point", coordinatesReal: [34.234512, 114.52812]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "equities", bhPointName: "China 3"},
                geometry: {type: "Point", coordinatesReal: [40.044438, 119.363255]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "equities", bhPointName: "China 4"},
                geometry: {type: "Point", coordinatesReal: [27.137368, 111.275392]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "equities", bhPointName: "Australia Adelaide 1"},
                geometry: {type: "Point", coordinatesReal: [-34.565643, 138.9488268]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "equities", bhPointName: "Australia eq1"},
                geometry: {type: "Point", coordinatesReal: [-29.688053, 115.138624]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "equities", bhPointName: "India 3"},
                geometry: {type: "Point", coordinatesReal: [13.0307607, 77.6895656]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "equities", bhPointName: "India 4"},
                geometry: {type: "Point", coordinatesReal: [23.402765, 80.203387]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "equities", bhPointName: "India, Mumbai"},
                geometry: {type: "Point", coordinatesReal: [19.103648, 73.065523]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "equities", bhPointName: "India e2"},
                geometry: {type: "Point", coordinatesReal: [23.604262, 70.02954]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "digitalCurrency", bhPointName: "Europe France 1"},
                geometry: {type: "Point", coordinatesReal: [46.255847, 5.668945]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "digitalCurrency", bhPointName: "Europe Germany 1"},
                geometry: {type: "Point", coordinatesReal: [51.069017, 13.886719]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "digitalCurrency", bhPointName: "Europe UK 1"},
                geometry: {type: "Point", coordinatesReal: [51.179343, -.351563]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "digitalCurrency", bhPointName: "Europe Denmark 1"},
                geometry: {type: "Point", coordinatesReal: [54.876607, 9.448242]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "digitalCurrency", bhPointName: "China dc1"},
                geometry: {type: "Point", coordinatesReal: [24.58709, 118.146973]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "digitalCurrency", bhPointName: "China dc2"},
                geometry: {type: "Point", coordinatesReal: [30.977609, 118.78418]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "digitalCurrency", bhPointName: "China Bejing dc3"},
                geometry: {type: "Point", coordinatesReal: [37.23818, 116.938477]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "digitalCurrency", bhPointName: "China dc4"},
                geometry: {type: "Point", coordinatesReal: [29.439598, 106.435547]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "credit", bhPointName: "China c1"},
                geometry: {type: "Point", coordinatesReal: [28.439598, 105.435547]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "credit", bhPointName: "China Shanghai 1"},
                geometry: {type: "Point", coordinatesReal: [32.2000688, 120.4896929]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "credit", bhPointName: "UK 1.5"},
                geometry: {type: "Point", coordinatesReal: [53.2601374, -2.986681]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "credit", bhPointName: "India New Delhi 1.5"},
                geometry: {type: "Point", coordinatesReal: [27.1409355, 77.9815335]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "credit", bhPointName: "Europe e2 Germany/Netderlands"},
                geometry: {type: "Point", coordinatesReal: [53.440313, 7.166726]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "credit", bhPointName: "US e1"},
                geometry: {type: "Point", coordinatesReal: [45.178873, -94.8928]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "credit", bhPointName: "US e2"},
                geometry: {type: "Point", coordinatesReal: [38.746512, -112.950935]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "credit", bhPointName: "US e2"},
                geometry: {type: "Point", coordinatesReal: [38.746512, -112.950935]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "credit", bhPointName: "Australia Mel-Sidney 1"},
                geometry: {type: "Point", coordinatesReal: [-36.8418165, 147.3219565]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "credit", bhPointName: "Brazil 1"},
                geometry: {type: "Point", coordinatesReal: [-20.5049496, -50.0083643]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "credit", bhPointName: "US c1"},
                geometry: {type: "Point", coordinatesReal: [33.052934, -85.878862]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "credit", bhPointName: "Canada "},
                geometry: {type: "Point", coordinatesReal: [52.802761, -111.944878]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "credit", bhPointName: "Europe e2 Poland"},
                geometry: {type: "Point", coordinatesReal: [51.029222, 22.977847]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "credit", bhPointName: "Australia fi4 Brisbane"},
                geometry: {type: "Point", coordinatesReal: [-27.580829, 151.93873]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "credit", bhPointName: "Australia fi3 Perth"},
                geometry: {type: "Point", coordinatesReal: [-32.845333, 116.704291]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "credit", bhPointName: "US c1"},
                geometry: {type: "Point", coordinatesReal: [38.28462, -118.790596]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "credit", bhPointName: "South Africa, Cape Town 1"},
                geometry: {type: "Point", coordinatesReal: [-28.9263867, 20.5219153]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "credit", bhPointName: "Latin America e1"},
                geometry: {type: "Point", coordinatesReal: [15.7097865, -88.6453763]}
            }, {
                type: "Feature",
                properties: {bhTypeId: "credit", bhPointName: "Argentina 1"},
                geometry: {type: "Point", coordinatesReal: [-36.0627795, -59.0707588]}
            }].map((function (e) {
                return e.geometry.coordinates = e.geometry.coordinatesReal.reverse(), e.properties.color = d[e.properties.bhTypeId].color, e
            }))
        }), l = function (e, t, r, o) {
            var i = this;
            this.gkOptions = {
                apiKey: "gk_a5347516e99a8fd1d6c168a2b081f7914235ab85a0ef547f1b0f906d3c1d7f9479a0ffaf279831b45438b1cb348c9ded4e2eb7ae5c2ee4d721ffc118581d6801",
                wasmPath: t.gkweb.publicURL,
                attributes: {alpha: !1}
            }, this.gkview = new y.GlobeKitView(e, this.gkOptions), this.gkview._ambientController.latitudeVariance = 30, this.gkview._ambientController.latitudeSpeed = 1, this.gkview._ambientController.longitudeSpeed = .1, this.calloutManager = new y.CalloutManager(r), this.gkview.registerCalloutManager(this.calloutManager), this.calloutManager.shouldAutoRemoveCallout = function (e) {
                return e.calloutClass !== c
            }, this.background = new y.Background(t.bgTexture.publicURL), this.gkview.addDrawable(this.background), this.icosphere = new y.Icosphere(t.icosphereTexture.publicURL), this.icosphere.setInteractive(!0, !0, !1), this.gkview.addDrawable(this.icosphere, (function () {
                i.gkview.startDrawing()
            })), this.pinDefs = [], fetch(t.jsonPointsGeo.publicURL).then((function (e) {
                return e.json()
            })).then((function (e) {
                var t = e.points.map((function (e) {
                    return t = {point: e}.point, {
                        type: "Feature",
                        properties: {
                            bhTypeId: "continental",
                            bhSize: "undefined" != typeof window && window.innerWidth < 767 ? .2 : .35
                        },
                        geometry: {type: "Point", coordinatesReal: [t.long, t.lat], coordinates: [t.lat, t.long]}
                    };
                    var t
                })), r = {type: "FeatureCollection", features: [].concat(Object(p.a)(t), Object(p.a)(u.features))};
                i.points = new y.Points, i.points.transform = function (e, t) {
                    if ("continental" === e.properties.bhTypeId) {
                        var r = Math.max(Math.random(), .85);
                        t.color = [.7 * r, r, 1, Math.max(Math.min(1, Math.random()), .3).toFixed(2)]
                    } else {
                        t.color = y.GKUtils.hexToRGBA(e.properties.color, e.properties.bhAlpha || 1, !0);
                        var o = e.lat, n = e.lon;
                        i.pinDefs.push(new y.CalloutDefinition(o, n, c, e.properties))
                    }
                    return t.size *= e.properties.bhSize || ("undefined" != typeof window && window.innerWidth < 767 ? .65 : 1), t
                }, i.points.addGeojson(r), i.points.setInteractive(!0, !0, !1), i.gkview.addDrawable(i.points)
            })).then((function () {
                i.calloutManager.replaceCallouts(i.pinDefs), o({type: "INCREMENT"})
            })), this.atmosphere = new y.Atmosphere({texture: t.atmosphereTexture.publicURL}), this.atmosphere.nScale = 1.255, this.gkview.addDrawable(this.atmosphere), o({type: "INCREMENT"})
        }, m = r("A3ej"), f = r("Wbzz");
        t.default = function (e) {
            var t = e.assetsData, r = Object(f.useStaticQuery)("3252952258"), o = i.a.useRef(null),
                n = i.a.useRef(null), p = Object(m.b)(), y = i.a.useState(!1), s = y[0], c = y[1], h = i.a.useState(!1),
                d = h[0], u = h[1], g = i.a.useState(!0), b = g[0], P = g[1], I = i.a.useState(!1), N = I[0], v = I[1];
            return i.a.useEffect((function () {
                if (d && o.current && n.current && !1 === s) {
                    c(!0);
                    try {
                        new l(o.current, t, n.current, p), P(!1)
                    } catch (e) {
                        console.error(e), p({type: "FINISH"}), b && v(!0), P(!1)
                    }
                }
            }), [d]), i.a.createElement(i.a.Fragment, null, i.a.createElement(a.a, {
                partialVisibility: !0,
                offset: {top: 0, bottom: 0},
                onChange: function (e) {
                    u(e)
                }
            }, i.a.createElement("canvas", {
                ref: o,
                className: "globe-canvas " + (N ? "has-error" : "")
            })), !0 === N && i.a.createElement("div", {
                style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: "100%",
                    width: "100%",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }
            }, i.a.createElement("img", {
                src: r.fallback.publicURL,
                style: {maxWidth: "100%"}
            })), i.a.createElement("div", {className: "globe-callout " + (d ? "" : "globe-offscreen"), ref: n}))
        }
    }, QFcT: function (e, t, r) {
        var o = r("I+eb"), i = Math.hypot, n = Math.abs, a = Math.sqrt;
        o({target: "Math", stat: !0, arity: 2, forced: !!i && i(1 / 0, NaN) !== 1 / 0}, {
            hypot: function (e, t) {
                for (var r, o, i = 0, p = 0, y = arguments.length, s = 0; p < y;) s < (r = n(arguments[p++])) ? (i = i * (o = s / r) * o + 1, s = r) : i += r > 0 ? (o = r / s) * o : r;
                return s === 1 / 0 ? 1 / 0 : s * a(i)
            }
        })
    }, fsL8: function (e, t, r) {
        var o = r("cDf5").default;

        function i() {
            "use strict";
            e.exports = i = function () {
                return t
            }, e.exports.__esModule = !0, e.exports.default = e.exports;
            var t = {}, r = Object.prototype, n = r.hasOwnProperty, a = Object.defineProperty || function (e, t, r) {
                    e[t] = r.value
                }, p = "function" == typeof Symbol ? Symbol : {}, y = p.iterator || "@@iterator",
                s = p.asyncIterator || "@@asyncIterator", c = p.toStringTag || "@@toStringTag";

            function h(e, t, r) {
                return Object.defineProperty(e, t, {value: r, enumerable: !0, configurable: !0, writable: !0}), e[t]
            }

            try {
                h({}, "")
            } catch (S) {
                h = function (e, t, r) {
                    return e[t] = r
                }
            }

            function d(e, t, r, o) {
                var i = t && t.prototype instanceof m ? t : m, n = Object.create(i.prototype), p = new E(o || []);
                return a(n, "_invoke", {value: R(e, r, p)}), n
            }

            function u(e, t, r) {
                try {
                    return {type: "normal", arg: e.call(t, r)}
                } catch (S) {
                    return {type: "throw", arg: S}
                }
            }

            t.wrap = d;
            var l = {};

            function m() {
            }

            function f() {
            }

            function g() {
            }

            var b = {};
            h(b, y, (function () {
                return this
            }));
            var P = Object.getPrototypeOf, I = P && P(P(C([])));
            I && I !== r && n.call(I, y) && (b = I);
            var N = g.prototype = m.prototype = Object.create(b);

            function v(e) {
                ["next", "throw", "return"].forEach((function (t) {
                    h(e, t, (function (e) {
                        return this._invoke(t, e)
                    }))
                }))
            }

            function T(e, t) {
                var r;
                a(this, "_invoke", {
                    value: function (i, a) {
                        function p() {
                            return new t((function (r, p) {
                                !function r(i, a, p, y) {
                                    var s = u(e[i], e, a);
                                    if ("throw" !== s.type) {
                                        var c = s.arg, h = c.value;
                                        return h && "object" == o(h) && n.call(h, "__await") ? t.resolve(h.__await).then((function (e) {
                                            r("next", e, p, y)
                                        }), (function (e) {
                                            r("throw", e, p, y)
                                        })) : t.resolve(h).then((function (e) {
                                            c.value = e, p(c)
                                        }), (function (e) {
                                            return r("throw", e, p, y)
                                        }))
                                    }
                                    y(s.arg)
                                }(i, a, r, p)
                            }))
                        }

                        return r = r ? r.then(p, p) : p()
                    }
                })
            }

            function R(e, t, r) {
                var o = "suspendedStart";
                return function (i, n) {
                    if ("executing" === o) throw new Error("Generator is already running");
                    if ("completed" === o) {
                        if ("throw" === i) throw n;
                        return L()
                    }
                    for (r.method = i, r.arg = n; ;) {
                        var a = r.delegate;
                        if (a) {
                            var p = F(a, r);
                            if (p) {
                                if (p === l) continue;
                                return p
                            }
                        }
                        if ("next" === r.method) r.sent = r._sent = r.arg; else if ("throw" === r.method) {
                            if ("suspendedStart" === o) throw o = "completed", r.arg;
                            r.dispatchException(r.arg)
                        } else "return" === r.method && r.abrupt("return", r.arg);
                        o = "executing";
                        var y = u(e, t, r);
                        if ("normal" === y.type) {
                            if (o = r.done ? "completed" : "suspendedYield", y.arg === l) continue;
                            return {value: y.arg, done: r.done}
                        }
                        "throw" === y.type && (o = "completed", r.method = "throw", r.arg = y.arg)
                    }
                }
            }

            function F(e, t) {
                var r = t.method, o = e.iterator[r];
                if (void 0 === o) return t.delegate = null, "throw" === r && e.iterator.return && (t.method = "return", t.arg = void 0, F(e, t), "throw" === t.method) || "return" !== r && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + r + "' method")), l;
                var i = u(o, e.iterator, t.arg);
                if ("throw" === i.type) return t.method = "throw", t.arg = i.arg, t.delegate = null, l;
                var n = i.arg;
                return n ? n.done ? (t[e.resultName] = n.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, l) : n : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, l)
            }

            function x(e) {
                var t = {tryLoc: e[0]};
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function w(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t
            }

            function E(e) {
                this.tryEntries = [{tryLoc: "root"}], e.forEach(x, this), this.reset(!0)
            }

            function C(e) {
                if (e) {
                    var t = e[y];
                    if (t) return t.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var r = -1, o = function t() {
                            for (; ++r < e.length;) if (n.call(e, r)) return t.value = e[r], t.done = !1, t;
                            return t.value = void 0, t.done = !0, t
                        };
                        return o.next = o
                    }
                }
                return {next: L}
            }

            function L() {
                return {value: void 0, done: !0}
            }

            return f.prototype = g, a(N, "constructor", {value: g, configurable: !0}), a(g, "constructor", {
                value: f,
                configurable: !0
            }), f.displayName = h(g, c, "GeneratorFunction"), t.isGeneratorFunction = function (e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === f || "GeneratorFunction" === (t.displayName || t.name))
            }, t.mark = function (e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, g) : (e.__proto__ = g, h(e, c, "GeneratorFunction")), e.prototype = Object.create(N), e
            }, t.awrap = function (e) {
                return {__await: e}
            }, v(T.prototype), h(T.prototype, s, (function () {
                return this
            })), t.AsyncIterator = T, t.async = function (e, r, o, i, n) {
                void 0 === n && (n = Promise);
                var a = new T(d(e, r, o, i), n);
                return t.isGeneratorFunction(r) ? a : a.next().then((function (e) {
                    return e.done ? e.value : a.next()
                }))
            }, v(N), h(N, c, "Generator"), h(N, y, (function () {
                return this
            })), h(N, "toString", (function () {
                return "[object Generator]"
            })), t.keys = function (e) {
                var t = Object(e), r = [];
                for (var o in t) r.push(o);
                return r.reverse(), function e() {
                    for (; r.length;) {
                        var o = r.pop();
                        if (o in t) return e.value = o, e.done = !1, e
                    }
                    return e.done = !0, e
                }
            }, t.values = C, E.prototype = {
                constructor: E, reset: function (e) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(w), !e) for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                }, stop: function () {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval
                }, dispatchException: function (e) {
                    if (this.done) throw e;
                    var t = this;

                    function r(r, o) {
                        return a.type = "throw", a.arg = e, t.next = r, o && (t.method = "next", t.arg = void 0), !!o
                    }

                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var i = this.tryEntries[o], a = i.completion;
                        if ("root" === i.tryLoc) return r("end");
                        if (i.tryLoc <= this.prev) {
                            var p = n.call(i, "catchLoc"), y = n.call(i, "finallyLoc");
                            if (p && y) {
                                if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                            } else if (p) {
                                if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
                            } else {
                                if (!y) throw new Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                            }
                        }
                    }
                }, abrupt: function (e, t) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var o = this.tryEntries[r];
                        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break
                        }
                    }
                    i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return a.type = e, a.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, l) : this.complete(a)
                }, complete: function (e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), l
                }, finish: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var r = this.tryEntries[t];
                        if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), w(r), l
                    }
                }, catch: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var r = this.tryEntries[t];
                        if (r.tryLoc === e) {
                            var o = r.completion;
                            if ("throw" === o.type) {
                                var i = o.arg;
                                w(r)
                            }
                            return i
                        }
                    }
                    throw new Error("illegal catch attempt")
                }, delegateYield: function (e, t, r) {
                    return this.delegate = {
                        iterator: C(e),
                        resultName: t,
                        nextLoc: r
                    }, "next" === this.method && (this.arg = void 0), l
                }
            }, t
        }

        e.exports = i, e.exports.__esModule = !0, e.exports.default = e.exports
    }, ls82: function (e, t, r) {
        var o = function (e) {
            "use strict";
            var t = Object.prototype, r = t.hasOwnProperty, o = Object.defineProperty || function (e, t, r) {
                    e[t] = r.value
                }, i = "function" == typeof Symbol ? Symbol : {}, n = i.iterator || "@@iterator",
                a = i.asyncIterator || "@@asyncIterator", p = i.toStringTag || "@@toStringTag";

            function y(e, t, r) {
                return Object.defineProperty(e, t, {value: r, enumerable: !0, configurable: !0, writable: !0}), e[t]
            }

            try {
                y({}, "")
            } catch (E) {
                y = function (e, t, r) {
                    return e[t] = r
                }
            }

            function s(e, t, r, i) {
                var n = t && t.prototype instanceof d ? t : d, a = Object.create(n.prototype), p = new F(i || []);
                return o(a, "_invoke", {value: N(e, r, p)}), a
            }

            function c(e, t, r) {
                try {
                    return {type: "normal", arg: e.call(t, r)}
                } catch (E) {
                    return {type: "throw", arg: E}
                }
            }

            e.wrap = s;
            var h = {};

            function d() {
            }

            function u() {
            }

            function l() {
            }

            var m = {};
            y(m, n, (function () {
                return this
            }));
            var f = Object.getPrototypeOf, g = f && f(f(x([])));
            g && g !== t && r.call(g, n) && (m = g);
            var b = l.prototype = d.prototype = Object.create(m);

            function P(e) {
                ["next", "throw", "return"].forEach((function (t) {
                    y(e, t, (function (e) {
                        return this._invoke(t, e)
                    }))
                }))
            }

            function I(e, t) {
                var i;
                o(this, "_invoke", {
                    value: function (o, n) {
                        function a() {
                            return new t((function (i, a) {
                                !function o(i, n, a, p) {
                                    var y = c(e[i], e, n);
                                    if ("throw" !== y.type) {
                                        var s = y.arg, h = s.value;
                                        return h && "object" == typeof h && r.call(h, "__await") ? t.resolve(h.__await).then((function (e) {
                                            o("next", e, a, p)
                                        }), (function (e) {
                                            o("throw", e, a, p)
                                        })) : t.resolve(h).then((function (e) {
                                            s.value = e, a(s)
                                        }), (function (e) {
                                            return o("throw", e, a, p)
                                        }))
                                    }
                                    p(y.arg)
                                }(o, n, i, a)
                            }))
                        }

                        return i = i ? i.then(a, a) : a()
                    }
                })
            }

            function N(e, t, r) {
                var o = "suspendedStart";
                return function (i, n) {
                    if ("executing" === o) throw new Error("Generator is already running");
                    if ("completed" === o) {
                        if ("throw" === i) throw n;
                        return w()
                    }
                    for (r.method = i, r.arg = n; ;) {
                        var a = r.delegate;
                        if (a) {
                            var p = v(a, r);
                            if (p) {
                                if (p === h) continue;
                                return p
                            }
                        }
                        if ("next" === r.method) r.sent = r._sent = r.arg; else if ("throw" === r.method) {
                            if ("suspendedStart" === o) throw o = "completed", r.arg;
                            r.dispatchException(r.arg)
                        } else "return" === r.method && r.abrupt("return", r.arg);
                        o = "executing";
                        var y = c(e, t, r);
                        if ("normal" === y.type) {
                            if (o = r.done ? "completed" : "suspendedYield", y.arg === h) continue;
                            return {value: y.arg, done: r.done}
                        }
                        "throw" === y.type && (o = "completed", r.method = "throw", r.arg = y.arg)
                    }
                }
            }

            function v(e, t) {
                var r = t.method, o = e.iterator[r];
                if (void 0 === o) return t.delegate = null, "throw" === r && e.iterator.return && (t.method = "return", t.arg = void 0, v(e, t), "throw" === t.method) || "return" !== r && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + r + "' method")), h;
                var i = c(o, e.iterator, t.arg);
                if ("throw" === i.type) return t.method = "throw", t.arg = i.arg, t.delegate = null, h;
                var n = i.arg;
                return n ? n.done ? (t[e.resultName] = n.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, h) : n : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, h)
            }

            function T(e) {
                var t = {tryLoc: e[0]};
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function R(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t
            }

            function F(e) {
                this.tryEntries = [{tryLoc: "root"}], e.forEach(T, this), this.reset(!0)
            }

            function x(e) {
                if (e) {
                    var t = e[n];
                    if (t) return t.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var o = -1, i = function t() {
                            for (; ++o < e.length;) if (r.call(e, o)) return t.value = e[o], t.done = !1, t;
                            return t.value = void 0, t.done = !0, t
                        };
                        return i.next = i
                    }
                }
                return {next: w}
            }

            function w() {
                return {value: void 0, done: !0}
            }

            return u.prototype = l, o(b, "constructor", {value: l, configurable: !0}), o(l, "constructor", {
                value: u,
                configurable: !0
            }), u.displayName = y(l, p, "GeneratorFunction"), e.isGeneratorFunction = function (e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === u || "GeneratorFunction" === (t.displayName || t.name))
            }, e.mark = function (e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, l) : (e.__proto__ = l, y(e, p, "GeneratorFunction")), e.prototype = Object.create(b), e
            }, e.awrap = function (e) {
                return {__await: e}
            }, P(I.prototype), y(I.prototype, a, (function () {
                return this
            })), e.AsyncIterator = I, e.async = function (t, r, o, i, n) {
                void 0 === n && (n = Promise);
                var a = new I(s(t, r, o, i), n);
                return e.isGeneratorFunction(r) ? a : a.next().then((function (e) {
                    return e.done ? e.value : a.next()
                }))
            }, P(b), y(b, p, "Generator"), y(b, n, (function () {
                return this
            })), y(b, "toString", (function () {
                return "[object Generator]"
            })), e.keys = function (e) {
                var t = Object(e), r = [];
                for (var o in t) r.push(o);
                return r.reverse(), function e() {
                    for (; r.length;) {
                        var o = r.pop();
                        if (o in t) return e.value = o, e.done = !1, e
                    }
                    return e.done = !0, e
                }
            }, e.values = x, F.prototype = {
                constructor: F, reset: function (e) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(R), !e) for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                }, stop: function () {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval
                }, dispatchException: function (e) {
                    if (this.done) throw e;
                    var t = this;

                    function o(r, o) {
                        return a.type = "throw", a.arg = e, t.next = r, o && (t.method = "next", t.arg = void 0), !!o
                    }

                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var n = this.tryEntries[i], a = n.completion;
                        if ("root" === n.tryLoc) return o("end");
                        if (n.tryLoc <= this.prev) {
                            var p = r.call(n, "catchLoc"), y = r.call(n, "finallyLoc");
                            if (p && y) {
                                if (this.prev < n.catchLoc) return o(n.catchLoc, !0);
                                if (this.prev < n.finallyLoc) return o(n.finallyLoc)
                            } else if (p) {
                                if (this.prev < n.catchLoc) return o(n.catchLoc, !0)
                            } else {
                                if (!y) throw new Error("try statement without catch or finally");
                                if (this.prev < n.finallyLoc) return o(n.finallyLoc)
                            }
                        }
                    }
                }, abrupt: function (e, t) {
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var i = this.tryEntries[o];
                        if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                            var n = i;
                            break
                        }
                    }
                    n && ("break" === e || "continue" === e) && n.tryLoc <= t && t <= n.finallyLoc && (n = null);
                    var a = n ? n.completion : {};
                    return a.type = e, a.arg = t, n ? (this.method = "next", this.next = n.finallyLoc, h) : this.complete(a)
                }, complete: function (e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), h
                }, finish: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var r = this.tryEntries[t];
                        if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), R(r), h
                    }
                }, catch: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var r = this.tryEntries[t];
                        if (r.tryLoc === e) {
                            var o = r.completion;
                            if ("throw" === o.type) {
                                var i = o.arg;
                                R(r)
                            }
                            return i
                        }
                    }
                    throw new Error("illegal catch attempt")
                }, delegateYield: function (e, t, r) {
                    return this.delegate = {
                        iterator: x(e),
                        resultName: t,
                        nextLoc: r
                    }, "next" === this.method && (this.arg = void 0), h
                }
            }, e
        }(e.exports);
        try {
            regeneratorRuntime = o
        } catch (i) {
            "object" == typeof globalThis ? globalThis.regeneratorRuntime = o : Function("r", "regeneratorRuntime = r")(o)
        }
    }, o0o1: function (e, t, r) {
        var o = r("fsL8")();
        e.exports = o;
        try {
            regeneratorRuntime = o
        } catch (i) {
            "object" == typeof globalThis ? globalThis.regeneratorRuntime = o : Function("r", "regeneratorRuntime = r")(o)
        }
    }, yXPU: function (e, t) {
        function r(e, t, r, o, i, n, a) {
            try {
                var p = e[n](a), y = p.value
            } catch (s) {
                return void r(s)
            }
            p.done ? t(y) : Promise.resolve(y).then(o, i)
        }

        e.exports = function (e) {
            return function () {
                var t = this, o = arguments;
                return new Promise((function (i, n) {
                    var a = e.apply(t, o);

                    function p(e) {
                        r(a, i, n, p, y, "next", e)
                    }

                    function y(e) {
                        r(a, i, n, p, y, "throw", e)
                    }

                    p(void 0)
                }))
            }
        }, e.exports.__esModule = !0, e.exports.default = e.exports
    }
}]);
//# sourceMappingURL=26-8e650688770162ed6a06.js.map
