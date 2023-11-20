/*! For license information please see 976e54d6-cf00b45750e4d6622c1d.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([[8], {
    xnld: function (t, e, n) {
        (function (t, r, i) {
            n("E9XD"), n("ToJy"), n("QFcT"), n("PF2M"), n("IZzc");
            var o = n("o0o1");
            n("ls82");
            var a = n("yXPU");
            !function (t) {
                "use strict";

                function e(t) {
                    return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                        return typeof t
                    } : function (t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    })(t)
                }

                function n(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function r(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }

                function u(t, e, n) {
                    return e && r(t.prototype, e), n && r(t, n), t
                }

                function s(t, e, n) {
                    return e in t ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = n, t
                }

                function l(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function c(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? l(Object(n), !0).forEach((function (e) {
                            s(t, e, n[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function (e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        }))
                    }
                    return t
                }

                function f(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && function (t, e) {
                        (Object.setPrototypeOf || function (t, e) {
                            return t.__proto__ = e, t
                        })(t, e)
                    }(t, e)
                }

                function m(t) {
                    return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                        return t.__proto__ || Object.getPrototypeOf(t)
                    })(t)
                }

                function h(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }

                function d(t, e) {
                    return !e || "object" != typeof e && "function" != typeof e ? h(t) : e
                }

                function p(t) {
                    var e = function () {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                            }))), !0
                        } catch (t) {
                            return !1
                        }
                    }();
                    return function () {
                        var n, r = m(t);
                        if (e) {
                            var i = m(this).constructor;
                            n = Reflect.construct(r, arguments, i)
                        } else n = r.apply(this, arguments);
                        return d(this, n)
                    }
                }

                function v(t, e, n) {
                    return (v = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, n) {
                        var r = function (t, e) {
                            for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = m(t));) ;
                            return t
                        }(t, e);
                        if (r) {
                            var i = Object.getOwnPropertyDescriptor(r, e);
                            return i.get ? i.get.call(n) : i.value
                        }
                    })(t, e, n || t)
                }

                function g(t, e) {
                    return function (t) {
                        if (Array.isArray(t)) return t
                    }(t) || function (t, e) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                            var n = [], r = !0, i = !1, o = void 0;
                            try {
                                for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0) ;
                            } catch (t) {
                                i = !0, o = t
                            } finally {
                                try {
                                    r || null == u.return || u.return()
                                } finally {
                                    if (i) throw o
                                }
                            }
                            return n
                        }
                    }(t, e) || _(t, e) || function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function y(t) {
                    return function (t) {
                        if (Array.isArray(t)) return b(t)
                    }(t) || function (t) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
                    }(t) || _(t) || function () {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function _(t, e) {
                    if (t) {
                        if ("string" == typeof t) return b(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? b(t, e) : void 0
                    }
                }

                function b(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                    return r
                }

                var x = Float32Array;

                function w(t, e, n) {
                    var r = new x(3);
                    return t && (r[0] = t), e && (r[1] = e), n && (r[2] = n), r
                }

                function A(t, e, n) {
                    return (n = n || new x(3))[0] = t[0] + e[0], n[1] = t[1] + e[1], n[2] = t[2] + e[2], n
                }

                function C(t, e, n) {
                    n = n || new x(3);
                    var r = t[2] * e[0] - t[0] * e[2], i = t[0] * e[1] - t[1] * e[0];
                    return n[0] = t[1] * e[2] - t[2] * e[1], n[1] = r, n[2] = i, n
                }

                function T(t, e) {
                    e = e || new x(3);
                    var n = t[0] * t[0] + t[1] * t[1] + t[2] * t[2], r = Math.sqrt(n);
                    return r > 1e-5 ? (e[0] = t[0] / r, e[1] = t[1] / r, e[2] = t[2] / r) : (e[0] = 0, e[1] = 0, e[2] = 0), e
                }

                var I, P, S, E = Float32Array;

                function L(t, e) {
                    return (e = e || new E(16))[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e
                }

                function M(t) {
                    return (t = t || new E(16))[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
                }

                function z(t, e) {
                    e = e || new E(16);
                    var n = t[0], r = t[1], i = t[2], o = t[3], a = t[4], u = t[5], s = t[6], l = t[7], c = t[8],
                        f = t[9], m = t[10], h = t[11], d = t[12], p = t[13], v = t[14], g = t[15], y = m * g,
                        _ = v * h, b = s * g, x = v * l, w = s * h, A = m * l, C = i * g, T = v * o, I = i * h,
                        P = m * o, S = i * l, L = s * o, M = c * p, z = d * f, F = a * p, R = d * u, D = a * f,
                        k = c * u, O = n * p, j = d * r, B = n * f, G = c * r, N = n * u, U = a * r,
                        V = y * u + x * f + w * p - (_ * u + b * f + A * p),
                        W = _ * r + C * f + P * p - (y * r + T * f + I * p),
                        H = b * r + T * u + S * p - (x * r + C * u + L * p),
                        Y = A * r + I * u + L * f - (w * r + P * u + S * f), X = 1 / (n * V + a * W + c * H + d * Y);
                    return e[0] = X * V, e[1] = X * W, e[2] = X * H, e[3] = X * Y, e[4] = X * (_ * a + b * c + A * d - (y * a + x * c + w * d)), e[5] = X * (y * n + T * c + I * d - (_ * n + C * c + P * d)), e[6] = X * (x * n + C * a + L * d - (b * n + T * a + S * d)), e[7] = X * (w * n + P * a + S * c - (A * n + I * a + L * c)), e[8] = X * (M * l + R * h + D * g - (z * l + F * h + k * g)), e[9] = X * (z * o + O * h + G * g - (M * o + j * h + B * g)), e[10] = X * (F * o + j * l + N * g - (R * o + O * l + U * g)), e[11] = X * (k * o + B * l + U * h - (D * o + G * l + N * h)), e[12] = X * (F * m + k * v + z * s - (D * v + M * s + R * m)), e[13] = X * (B * v + M * i + j * m - (O * m + G * v + z * i)), e[14] = X * (O * s + U * v + R * i - (N * v + F * i + j * s)), e[15] = X * (N * m + D * i + G * s - (B * s + U * m + k * i)), e
                }

                function F(t, e, n) {
                    n = n || w();
                    var r = e[0], i = e[1], o = e[2], a = r * t[3] + i * t[7] + o * t[11] + t[15];
                    return n[0] = (r * t[0] + i * t[4] + o * t[8] + t[12]) / a, n[1] = (r * t[1] + i * t[5] + o * t[9] + t[13]) / a, n[2] = (r * t[2] + i * t[6] + o * t[10] + t[14]) / a, n
                }

                function R(t, e, n) {
                    n = n || w();
                    var r = e[0], i = e[1], o = e[2];
                    return n[0] = r * t[0] + i * t[4] + o * t[8], n[1] = r * t[1] + i * t[5] + o * t[9], n[2] = r * t[2] + i * t[6] + o * t[10], n
                }

                var D = Object.freeze({
                    __proto__: null, axisRotate: function (t, e, n, r) {
                        r = r || new E(16);
                        var i = e[0], o = e[1], a = e[2], u = Math.sqrt(i * i + o * o + a * a), s = (i /= u) * i,
                            l = (o /= u) * o, c = (a /= u) * a, f = Math.cos(n), m = Math.sin(n), h = 1 - f,
                            d = s + (1 - s) * f, p = i * o * h + a * m, v = i * a * h - o * m, g = i * o * h - a * m,
                            y = l + (1 - l) * f, _ = o * a * h + i * m, b = i * a * h + o * m, x = o * a * h - i * m,
                            w = c + (1 - c) * f, A = t[0], C = t[1], T = t[2], I = t[3], P = t[4], S = t[5], L = t[6],
                            M = t[7], z = t[8], F = t[9], R = t[10], D = t[11];
                        return r[0] = d * A + p * P + v * z, r[1] = d * C + p * S + v * F, r[2] = d * T + p * L + v * R, r[3] = d * I + p * M + v * D, r[4] = g * A + y * P + _ * z, r[5] = g * C + y * S + _ * F, r[6] = g * T + y * L + _ * R, r[7] = g * I + y * M + _ * D, r[8] = b * A + x * P + w * z, r[9] = b * C + x * S + w * F, r[10] = b * T + x * L + w * R, r[11] = b * I + x * M + w * D, t !== r && (r[12] = t[12], r[13] = t[13], r[14] = t[14], r[15] = t[15]), r
                    }, axisRotation: function (t, e, n) {
                        n = n || new E(16);
                        var r = t[0], i = t[1], o = t[2], a = Math.sqrt(r * r + i * i + o * o), u = (r /= a) * r,
                            s = (i /= a) * i, l = (o /= a) * o, c = Math.cos(e), f = Math.sin(e), m = 1 - c;
                        return n[0] = u + (1 - u) * c, n[1] = r * i * m + o * f, n[2] = r * o * m - i * f, n[3] = 0, n[4] = r * i * m - o * f, n[5] = s + (1 - s) * c, n[6] = i * o * m + r * f, n[7] = 0, n[8] = r * o * m + i * f, n[9] = i * o * m - r * f, n[10] = l + (1 - l) * c, n[11] = 0, n[12] = 0, n[13] = 0, n[14] = 0, n[15] = 1, n
                    }, copy: L, frustum: function (t, e, n, r, i, o, a) {
                        var u = e - t, s = r - n, l = i - o;
                        return (a = a || new E(16))[0] = 2 * i / u, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = 2 * i / s, a[6] = 0, a[7] = 0, a[8] = (t + e) / u, a[9] = (r + n) / s, a[10] = o / l, a[11] = -1, a[12] = 0, a[13] = 0, a[14] = i * o / l, a[15] = 0, a
                    }, getAxis: function (t, e, n) {
                        var r = 4 * e;
                        return (n = n || w())[0] = t[r + 0], n[1] = t[r + 1], n[2] = t[r + 2], n
                    }, getTranslation: function (t, e) {
                        return (e = e || w())[0] = t[12], e[1] = t[13], e[2] = t[14], e
                    }, identity: M, inverse: z, lookAt: function (t, e, n, r) {
                        return r = r || new E(16), I = I || w(), P = P || w(), T(function (t, e, n) {
                            return (n = n || new x(3))[0] = t[0] - e[0], n[1] = t[1] - e[1], n[2] = t[2] - e[2], n
                        }(t, e, S = S || w()), S), T(C(n, S, I), I), T(C(S, I, P), P), r[0] = I[0], r[1] = I[1], r[2] = I[2], r[3] = 0, r[4] = P[0], r[5] = P[1], r[6] = P[2], r[7] = 0, r[8] = S[0], r[9] = S[1], r[10] = S[2], r[11] = 0, r[12] = t[0], r[13] = t[1], r[14] = t[2], r[15] = 1, r
                    }, multiply: function (t, e, n) {
                        n = n || new E(16);
                        var r = t[0], i = t[1], o = t[2], a = t[3], u = t[4], s = t[5], l = t[6], c = t[7], f = t[8],
                            m = t[9], h = t[10], d = t[11], p = t[12], v = t[13], g = t[14], y = t[15], _ = e[0],
                            b = e[1], x = e[2], w = e[3], A = e[4], C = e[5], T = e[6], I = e[7], P = e[8], S = e[9],
                            L = e[10], M = e[11], z = e[12], F = e[13], R = e[14], D = e[15];
                        return n[0] = r * _ + u * b + f * x + p * w, n[1] = i * _ + s * b + m * x + v * w, n[2] = o * _ + l * b + h * x + g * w, n[3] = a * _ + c * b + d * x + y * w, n[4] = r * A + u * C + f * T + p * I, n[5] = i * A + s * C + m * T + v * I, n[6] = o * A + l * C + h * T + g * I, n[7] = a * A + c * C + d * T + y * I, n[8] = r * P + u * S + f * L + p * M, n[9] = i * P + s * S + m * L + v * M, n[10] = o * P + l * S + h * L + g * M, n[11] = a * P + c * S + d * L + y * M, n[12] = r * z + u * F + f * R + p * D, n[13] = i * z + s * F + m * R + v * D, n[14] = o * z + l * F + h * R + g * D, n[15] = a * z + c * F + d * R + y * D, n
                    }, negate: function (t, e) {
                        return (e = e || new E(16))[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e[3] = -t[3], e[4] = -t[4], e[5] = -t[5], e[6] = -t[6], e[7] = -t[7], e[8] = -t[8], e[9] = -t[9], e[10] = -t[10], e[11] = -t[11], e[12] = -t[12], e[13] = -t[13], e[14] = -t[14], e[15] = -t[15], e
                    }, ortho: function (t, e, n, r, i, o, a) {
                        return (a = a || new E(16))[0] = 2 / (e - t), a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = 2 / (r - n), a[6] = 0, a[7] = 0, a[8] = 0, a[9] = 0, a[10] = 2 / (i - o), a[11] = 0, a[12] = (e + t) / (t - e), a[13] = (r + n) / (n - r), a[14] = (o + i) / (i - o), a[15] = 1, a
                    }, perspective: function (t, e, n, r, i) {
                        i = i || new E(16);
                        var o = Math.tan(.5 * Math.PI - .5 * t), a = 1 / (n - r);
                        return i[0] = o / e, i[1] = 0, i[2] = 0, i[3] = 0, i[4] = 0, i[5] = o, i[6] = 0, i[7] = 0, i[8] = 0, i[9] = 0, i[10] = (n + r) * a, i[11] = -1, i[12] = 0, i[13] = 0, i[14] = n * r * a * 2, i[15] = 0, i
                    }, rotateX: function (t, e, n) {
                        n = n || new E(16);
                        var r = t[4], i = t[5], o = t[6], a = t[7], u = t[8], s = t[9], l = t[10], c = t[11],
                            f = Math.cos(e), m = Math.sin(e);
                        return n[4] = f * r + m * u, n[5] = f * i + m * s, n[6] = f * o + m * l, n[7] = f * a + m * c, n[8] = f * u - m * r, n[9] = f * s - m * i, n[10] = f * l - m * o, n[11] = f * c - m * a, t !== n && (n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n[12] = t[12], n[13] = t[13], n[14] = t[14], n[15] = t[15]), n
                    }, rotateY: function (t, e, n) {
                        n = n || new E(16);
                        var r = t[0], i = t[1], o = t[2], a = t[3], u = t[8], s = t[9], l = t[10], c = t[11],
                            f = Math.cos(e), m = Math.sin(e);
                        return n[0] = f * r - m * u, n[1] = f * i - m * s, n[2] = f * o - m * l, n[3] = f * a - m * c, n[8] = f * u + m * r, n[9] = f * s + m * i, n[10] = f * l + m * o, n[11] = f * c + m * a, t !== n && (n[4] = t[4], n[5] = t[5], n[6] = t[6], n[7] = t[7], n[12] = t[12], n[13] = t[13], n[14] = t[14], n[15] = t[15]), n
                    }, rotateZ: function (t, e, n) {
                        n = n || new E(16);
                        var r = t[0], i = t[1], o = t[2], a = t[3], u = t[4], s = t[5], l = t[6], c = t[7],
                            f = Math.cos(e), m = Math.sin(e);
                        return n[0] = f * r + m * u, n[1] = f * i + m * s, n[2] = f * o + m * l, n[3] = f * a + m * c, n[4] = f * u - m * r, n[5] = f * s - m * i, n[6] = f * l - m * o, n[7] = f * c - m * a, t !== n && (n[8] = t[8], n[9] = t[9], n[10] = t[10], n[11] = t[11], n[12] = t[12], n[13] = t[13], n[14] = t[14], n[15] = t[15]), n
                    }, rotationX: function (t, e) {
                        e = e || new E(16);
                        var n = Math.cos(t), r = Math.sin(t);
                        return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = n, e[6] = r, e[7] = 0, e[8] = 0, e[9] = -r, e[10] = n, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
                    }, rotationY: function (t, e) {
                        e = e || new E(16);
                        var n = Math.cos(t), r = Math.sin(t);
                        return e[0] = n, e[1] = 0, e[2] = -r, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = r, e[9] = 0, e[10] = n, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
                    }, rotationZ: function (t, e) {
                        e = e || new E(16);
                        var n = Math.cos(t), r = Math.sin(t);
                        return e[0] = n, e[1] = r, e[2] = 0, e[3] = 0, e[4] = -r, e[5] = n, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
                    }, scale: function (t, e, n) {
                        n = n || new E(16);
                        var r = e[0], i = e[1], o = e[2];
                        return n[0] = r * t[0], n[1] = r * t[1], n[2] = r * t[2], n[3] = r * t[3], n[4] = i * t[4], n[5] = i * t[5], n[6] = i * t[6], n[7] = i * t[7], n[8] = o * t[8], n[9] = o * t[9], n[10] = o * t[10], n[11] = o * t[11], t !== n && (n[12] = t[12], n[13] = t[13], n[14] = t[14], n[15] = t[15]), n
                    }, scaling: function (t, e) {
                        return (e = e || new E(16))[0] = t[0], e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = t[1], e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = t[2], e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
                    }, setAxis: function (t, e, n, r) {
                        r !== t && (r = L(t, r));
                        var i = 4 * n;
                        return r[i + 0] = e[0], r[i + 1] = e[1], r[i + 2] = e[2], r
                    }, setDefaultType: function (t) {
                        var e = E;
                        return E = t, e
                    }, setTranslation: function (t, e, n) {
                        return t !== (n = n || M()) && (n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n[4] = t[4], n[5] = t[5], n[6] = t[6], n[7] = t[7], n[8] = t[8], n[9] = t[9], n[10] = t[10], n[11] = t[11]), n[12] = e[0], n[13] = e[1], n[14] = e[2], n[15] = 1, n
                    }, transformDirection: R, transformNormal: function (t, e, n) {
                        n = n || w();
                        var r = z(t), i = e[0], o = e[1], a = e[2];
                        return n[0] = i * r[0] + o * r[1] + a * r[2], n[1] = i * r[4] + o * r[5] + a * r[6], n[2] = i * r[8] + o * r[9] + a * r[10], n
                    }, transformPoint: F, translate: function (t, e, n) {
                        n = n || new E(16);
                        var r = e[0], i = e[1], o = e[2], a = t[0], u = t[1], s = t[2], l = t[3], c = t[4], f = t[5],
                            m = t[6], h = t[7], d = t[8], p = t[9], v = t[10], g = t[11], y = t[12], _ = t[13],
                            b = t[14], x = t[15];
                        return t !== n && (n[0] = a, n[1] = u, n[2] = s, n[3] = l, n[4] = c, n[5] = f, n[6] = m, n[7] = h, n[8] = d, n[9] = p, n[10] = v, n[11] = g), n[12] = a * r + c * i + d * o + y, n[13] = u * r + f * i + p * o + _, n[14] = s * r + m * i + v * o + b, n[15] = l * r + h * i + g * o + x, n
                    }, translation: function (t, e) {
                        return (e = e || new E(16))[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = t[0], e[13] = t[1], e[14] = t[2], e[15] = 1, e
                    }, transpose: function (t, e) {
                        var n;
                        if ((e = e || new E(16)) === t) return n = t[1], t[1] = t[4], t[4] = n, n = t[2], t[2] = t[8], t[8] = n, n = t[3], t[3] = t[12], t[12] = n, n = t[6], t[6] = t[9], t[9] = n, n = t[7], t[7] = t[13], t[13] = n, n = t[11], t[11] = t[14], t[14] = n, e;
                        var r = t[0], i = t[1], o = t[2], a = t[3], u = t[4], s = t[5], l = t[6], c = t[7], f = t[8],
                            m = t[9], h = t[10], d = t[11], p = t[12], v = t[13], g = t[14], y = t[15];
                        return e[0] = r, e[1] = u, e[2] = f, e[3] = p, e[4] = i, e[5] = s, e[6] = m, e[7] = v, e[8] = o, e[9] = l, e[10] = h, e[11] = g, e[12] = a, e[13] = c, e[14] = d, e[15] = y, e
                    }
                }), k = {}, O = k;

                function j(t) {
                    if (t instanceof Int8Array) return 5120;
                    if (t instanceof Uint8Array) return 5121;
                    if (t instanceof Uint8ClampedArray) return 5121;
                    if (t instanceof Int16Array) return 5122;
                    if (t instanceof Uint16Array) return 5123;
                    if (t instanceof Int32Array) return 5124;
                    if (t instanceof Uint32Array) return 5125;
                    if (t instanceof Float32Array) return 5126;
                    throw new Error("unsupported typed array type")
                }

                O[5120] = Int8Array, O[5121] = Uint8Array, O[5122] = Int16Array, O[5123] = Uint16Array, O[5124] = Int32Array, O[5125] = Uint32Array, O[5126] = Float32Array, O[32819] = Uint16Array, O[32820] = Uint16Array, O[33635] = Uint16Array, O[5131] = Uint16Array, O[33640] = Uint32Array, O[35899] = Uint32Array, O[35902] = Uint32Array, O[36269] = Uint32Array, O[34042] = Uint32Array;
                var B = "undefined" != typeof SharedArrayBuffer ? function (t) {
                    return t && t.buffer && (t.buffer instanceof ArrayBuffer || t.buffer instanceof SharedArrayBuffer)
                } : function (t) {
                    return t && t.buffer && t.buffer instanceof ArrayBuffer
                };

                function G() {
                    var t;
                    (t = console).error.apply(t, arguments)
                }

                function N() {
                    var t;
                    (t = console).warn.apply(t, arguments)
                }

                function U(t, e) {
                    return "undefined" != typeof WebGLTexture && e instanceof WebGLTexture
                }

                function V(t, e, n, r, i) {
                    t.bindBuffer(e, n), t.bufferData(e, r, i || 35044)
                }

                function W(t, e, n, r) {
                    if ("undefined" != typeof WebGLBuffer && e instanceof WebGLBuffer) return e;
                    n = n || 34962;
                    var i = t.createBuffer();
                    return V(t, n, i, e, r), i
                }

                function H(t) {
                    return "indices" === t
                }

                function Y(t) {
                    return t.length ? t : t.data
                }

                var X = /coord|texture/i, q = /color|colour/i;

                function J(t, e) {
                    var n;
                    if (e % (n = X.test(t) ? 2 : q.test(t) ? 4 : 3) > 0) throw new Error("Can not guess numComponents for attribute '".concat(t, "'. Tried ").concat(n, " but ").concat(e, " values is not evenly divisible by ").concat(n, ". You should specify it."));
                    return n
                }

                function K(t, e) {
                    return t.numComponents || t.size || J(e, Y(t).length)
                }

                function Z(t, e) {
                    if (B(t)) return t;
                    if (B(t.data)) return t.data;
                    Array.isArray(t) && (t = {data: t});
                    var n = t.type;
                    return n || (n = H(e) ? Uint16Array : Float32Array), new n(t.data)
                }

                var Q = ["position", "positions", "a_position"];

                function $(t, e, n) {
                    var r = function (t, e) {
                        var n = {};
                        return Object.keys(e).forEach((function (r) {
                            if (!H(r)) {
                                var i = e[r], o = i.attrib || i.name || i.attribName || "" + r;
                                if (i.value) {
                                    if (!Array.isArray(i.value) && !B(i.value)) throw new Error("array.value is not array or typedarray");
                                    n[o] = {value: i.value}
                                } else {
                                    var a, u, s, l;
                                    if (i.buffer && i.buffer instanceof WebGLBuffer) a = i.buffer, l = i.numComponents || i.size, u = i.type, s = i.normalize; else if ("number" == typeof i || "number" == typeof i.data) {
                                        var c = i.data || i, f = i.type || Float32Array, m = c * f.BYTES_PER_ELEMENT;
                                        u = function (t) {
                                            if (t === Int8Array) return 5120;
                                            if (t === Uint8Array) return 5121;
                                            if (t === Uint8ClampedArray) return 5121;
                                            if (t === Int16Array) return 5122;
                                            if (t === Uint16Array) return 5123;
                                            if (t === Int32Array) return 5124;
                                            if (t === Uint32Array) return 5125;
                                            if (t === Float32Array) return 5126;
                                            throw new Error("unsupported typed array type")
                                        }(f), s = void 0 !== i.normalize ? i.normalize : (d = f) === Int8Array || d === Uint8Array, l = i.numComponents || i.size || J(r, c), a = t.createBuffer(), t.bindBuffer(34962, a), t.bufferData(34962, m, i.drawType || 35044)
                                    } else {
                                        var h = Z(i, r);
                                        a = W(t, h, void 0, i.drawType), u = j(h), s = void 0 !== i.normalize ? i.normalize : function (t) {
                                            return t instanceof Int8Array || t instanceof Uint8Array
                                        }(h), l = K(i, r)
                                    }
                                    n[o] = {
                                        buffer: a,
                                        numComponents: l,
                                        type: u,
                                        normalize: s,
                                        stride: i.stride || 0,
                                        offset: i.offset || 0,
                                        divisor: void 0 === i.divisor ? void 0 : i.divisor,
                                        drawType: i.drawType
                                    }
                                }
                            }
                            var d
                        })), t.bindBuffer(34962, null), n
                    }(t, e), i = Object.assign({}, n || {});
                    i.attribs = Object.assign({}, n ? n.attribs : {}, r);
                    var o = e.indices;
                    if (o) {
                        var a = Z(o, "indices");
                        i.indices = W(t, a, 34963), i.numElements = a.length, i.elementType = j(a)
                    } else i.numElements || (i.numElements = function (t, e) {
                        var n, r;
                        for (r = 0; r < Q.length && !((n = Q[r]) in e) && !((n = "" + n) in e); ++r) ;
                        r === Q.length && (n = Object.keys(e)[0]);
                        var i = e[n];
                        t.bindBuffer(34962, i.buffer);
                        var o = t.getBufferParameter(34962, 34660);
                        t.bindBuffer(34962, null);
                        var a,
                            u = o / (5120 === (a = i.type) || 5121 === a ? 1 : 5122 === a || 5123 === a ? 2 : 5124 === a || 5125 === a || 5126 === a ? 4 : 0),
                            s = i.numComponents || i.size, l = u / s;
                        if (l % 1 != 0) throw new Error("numComponents ".concat(s, " not correct for length ").concat(length));
                        return l
                    }(t, i.attribs));
                    return i
                }

                function tt(t, e) {
                    var n = {};
                    return Object.keys(e).forEach((function (r) {
                        n[r] = function (t, e, n) {
                            var r = "indices" === n ? 34963 : 34962;
                            return W(t, Z(e, n), r)
                        }(t, e[r], r)
                    })), e.indices ? (n.numElements = e.indices.length, n.elementType = j(Z(e.indices))) : n.numElements = function (t) {
                        var e, n;
                        for (n = 0; n < Q.length && !((e = Q[n]) in t); ++n) ;
                        n === Q.length && (e = Object.keys(t)[0]);
                        var r = t[e], i = Y(r).length, o = K(r, e), a = i / o;
                        if (i % o > 0) throw new Error("numComponents ".concat(o, " not correct for length ").concat(i));
                        return a
                    }(e), n
                }

                var et = Y, nt = K;

                function rt(t, e) {
                    var n = 0;
                    return t.push = function () {
                        for (var e = 0; e < arguments.length; ++e) {
                            var r = arguments[e];
                            if (r instanceof Array || B(r)) for (var i = 0; i < r.length; ++i) t[n++] = r[i]; else t[n++] = r
                        }
                    }, t.reset = function (t) {
                        n = t || 0
                    }, t.numComponents = e, Object.defineProperty(t, "numElements", {
                        get: function () {
                            return this.length / this.numComponents | 0
                        }
                    }), t
                }

                function it(t, e, n) {
                    return rt(new (n || Float32Array)(t * e), t)
                }

                function ot(t) {
                    return "indices" !== t
                }

                function at(t, e, n) {
                    for (var r = t.length, i = new Float32Array(3), o = 0; o < r; o += 3) n(e, [t[o], t[o + 1], t[o + 2]], i), t[o] = i[0], t[o + 1] = i[1], t[o + 2] = i[2]
                }

                function ut(t, e, n) {
                    n = n || w();
                    var r = e[0], i = e[1], o = e[2];
                    return n[0] = r * t[0] + i * t[1] + o * t[2], n[1] = r * t[4] + i * t[5] + o * t[6], n[2] = r * t[8] + i * t[9] + o * t[10], n
                }

                function st(t, e) {
                    return at(t, e, R), t
                }

                function lt(t, e) {
                    return at(t, z(e), ut), t
                }

                function ct(t, e) {
                    return at(t, e, F), t
                }

                function ft(t, e) {
                    return Object.keys(t).forEach((function (n) {
                        var r = t[n];
                        n.indexOf("pos") >= 0 ? ct(r, e) : n.indexOf("tan") >= 0 || n.indexOf("binorm") >= 0 ? st(r, e) : n.indexOf("norm") >= 0 && lt(r, e)
                    })), t
                }

                function mt(t, e, n) {
                    return t = t || 2, {
                        position: {
                            numComponents: 2,
                            data: [(e = e || 0) + -1 * (t *= .5), (n = n || 0) + -1 * t, e + 1 * t, n + -1 * t, e + -1 * t, n + 1 * t, e + 1 * t, n + 1 * t]
                        },
                        normal: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
                        texcoord: [0, 0, 1, 0, 0, 1, 1, 1],
                        indices: [0, 1, 2, 2, 1, 3]
                    }
                }

                function ht(t, e, n, r, i) {
                    t = t || 1, e = e || 1, n = n || 1, r = r || 1, i = i || M();
                    for (var o = (n + 1) * (r + 1), a = it(3, o), u = it(3, o), s = it(2, o), l = 0; l <= r; l++) for (var c = 0; c <= n; c++) {
                        var f = c / n, m = l / r;
                        a.push(t * f - .5 * t, 0, e * m - .5 * e), u.push(0, 1, 0), s.push(f, m)
                    }
                    for (var h = n + 1, d = it(3, n * r * 2, Uint16Array), p = 0; p < r; p++) for (var v = 0; v < n; v++) d.push((p + 0) * h + v, (p + 1) * h + v, (p + 0) * h + v + 1), d.push((p + 1) * h + v, (p + 1) * h + v + 1, (p + 0) * h + v + 1);
                    return ft({position: a, normal: u, texcoord: s, indices: d}, i)
                }

                function dt(t, e, n, r, i, o, a) {
                    if (e <= 0 || n <= 0) throw new Error("subdivisionAxis and subdivisionHeight must be > 0");
                    r = r || 0, o = o || 0;
                    for (var u = (i = i || Math.PI) - r, s = (a = a || 2 * Math.PI) - o, l = (e + 1) * (n + 1), c = it(3, l), f = it(3, l), m = it(2, l), h = it(3, l), d = it(3, l), p = 0; p <= n; p++) for (var v = 0; v <= e; v++) {
                        var g = v / e, y = p / n, _ = s * g + o, b = u * y + r, x = Math.sin(_), w = Math.cos(_),
                            A = Math.sin(b), C = w * A, T = Math.cos(b), I = x * A, P = s * ((v + 1) / e) + o,
                            S = u * (p / n) + r, E = Math.sin(P), L = Math.cos(P), M = Math.sin(S), z = Math.cos(S);
                        h.push(L * M - C, z - T, E * M - I);
                        var F = s * (v / e) + o, R = u * ((p + 1) / n) + r, D = Math.sin(F), k = Math.cos(F),
                            O = Math.sin(R), j = k * O - C, B = Math.cos(R) - T, G = D * O - I;
                        c.push(t * C, t * T, t * I), f.push(C, T, I), m.push(1 - g, y), d.push(j, B, G)
                    }
                    for (var N = e + 1, U = it(3, e * n * 2, Uint16Array), V = 0; V < e; V++) for (var W = 0; W < n; W++) U.push((W + 0) * N + V, (W + 0) * N + V + 1, (W + 1) * N + V), U.push((W + 1) * N + V, (W + 0) * N + V + 1, (W + 1) * N + V + 1);
                    return {position: c, normal: f, texcoord: m, indices: U, tangent: h, bitangent: d}
                }

                var pt = [[3, 7, 5, 1], [6, 2, 0, 4], [6, 7, 3, 2], [0, 1, 5, 4], [7, 6, 4, 5], [2, 3, 1, 0]];

                function vt(t) {
                    for (var e = (t = t || 1) / 2, n = [[-e, -e, -e], [+e, -e, -e], [-e, +e, -e], [+e, +e, -e], [-e, -e, +e], [+e, -e, +e], [-e, +e, +e], [+e, +e, +e]], r = [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]], i = [[1, 0], [0, 0], [0, 1], [1, 1]], o = it(3, 24), a = it(3, 24), u = it(2, 24), s = it(3, 12, Uint16Array), l = 0; l < 6; ++l) {
                        for (var c = pt[l], f = 0; f < 4; ++f) {
                            var m = n[c[f]], h = r[l], d = i[f];
                            o.push(m), a.push(h), u.push(d)
                        }
                        var p = 4 * l;
                        s.push(p + 0, p + 1, p + 2), s.push(p + 0, p + 2, p + 3)
                    }
                    return {position: o, normal: a, texcoord: u, indices: s}
                }

                function gt(t, e, n, r, i, o, a) {
                    if (r < 3) throw new Error("radialSubdivisions must be 3 or greater");
                    if (i < 1) throw new Error("verticalSubdivisions must be 1 or greater");
                    for (var u = void 0 === o || o, s = void 0 === a || a, l = (u ? 2 : 0) + (s ? 2 : 0), c = (r + 1) * (i + 1 + l), f = it(3, c), m = it(3, c), h = it(2, c), d = it(3, r * (i + l / 2) * 2, Uint16Array), p = r + 1, v = Math.atan2(t - e, n), g = Math.cos(v), y = Math.sin(v), _ = i + (s ? 2 : 0), b = u ? -2 : 0; b <= _; ++b) {
                        var x = b / i, w = n * x, A = void 0;
                        b < 0 ? (w = 0, x = 1, A = t) : b > i ? (w = n, x = 1, A = e) : A = t + b / i * (e - t), -2 !== b && b !== i + 2 || (A = 0, x = 0), w -= n / 2;
                        for (var C = 0; C < p; ++C) {
                            var T = Math.sin(C * Math.PI * 2 / r), I = Math.cos(C * Math.PI * 2 / r);
                            f.push(T * A, w, I * A), b < 0 ? m.push(0, -1, 0) : b > i ? m.push(0, 1, 0) : 0 === A ? m.push(0, 0, 0) : m.push(T * g, y, I * g), h.push(C / r, 1 - x)
                        }
                    }
                    for (var P = 0; P < i + l; ++P) if (!(1 === P && u || P === i + l - 2 && s)) for (var S = 0; S < r; ++S) d.push(p * (P + 0) + 0 + S, p * (P + 0) + 1 + S, p * (P + 1) + 1 + S), d.push(p * (P + 0) + 0 + S, p * (P + 1) + 1 + S, p * (P + 1) + 0 + S);
                    return {position: f, normal: m, texcoord: h, indices: d}
                }

                function yt(t, e) {
                    e = e || [];
                    for (var n = [], r = 0; r < t.length; r += 4) {
                        var i = t[r], o = t.slice(r + 1, r + 4);
                        o.push.apply(o, e);
                        for (var a = 0; a < i; ++a) n.push.apply(n, o)
                    }
                    return n
                }

                function _t() {
                    var t = [0, 0, 0, 0, 150, 0, 30, 0, 0, 0, 150, 0, 30, 150, 0, 30, 0, 0, 30, 0, 0, 30, 30, 0, 100, 0, 0, 30, 30, 0, 100, 30, 0, 100, 0, 0, 30, 60, 0, 30, 90, 0, 67, 60, 0, 30, 90, 0, 67, 90, 0, 67, 60, 0, 0, 0, 30, 30, 0, 30, 0, 150, 30, 0, 150, 30, 30, 0, 30, 30, 150, 30, 30, 0, 30, 100, 0, 30, 30, 30, 30, 30, 30, 30, 100, 0, 30, 100, 30, 30, 30, 60, 30, 67, 60, 30, 30, 90, 30, 30, 90, 30, 67, 60, 30, 67, 90, 30, 0, 0, 0, 100, 0, 0, 100, 0, 30, 0, 0, 0, 100, 0, 30, 0, 0, 30, 100, 0, 0, 100, 30, 0, 100, 30, 30, 100, 0, 0, 100, 30, 30, 100, 0, 30, 30, 30, 0, 30, 30, 30, 100, 30, 30, 30, 30, 0, 100, 30, 30, 100, 30, 0, 30, 30, 0, 30, 60, 30, 30, 30, 30, 30, 30, 0, 30, 60, 0, 30, 60, 30, 30, 60, 0, 67, 60, 30, 30, 60, 30, 30, 60, 0, 67, 60, 0, 67, 60, 30, 67, 60, 0, 67, 90, 30, 67, 60, 30, 67, 60, 0, 67, 90, 0, 67, 90, 30, 30, 90, 0, 30, 90, 30, 67, 90, 30, 30, 90, 0, 67, 90, 30, 67, 90, 0, 30, 90, 0, 30, 150, 30, 30, 90, 30, 30, 90, 0, 30, 150, 0, 30, 150, 30, 0, 150, 0, 0, 150, 30, 30, 150, 30, 0, 150, 0, 30, 150, 30, 30, 150, 0, 0, 0, 0, 0, 0, 30, 0, 150, 30, 0, 0, 0, 0, 150, 30, 0, 150, 0],
                        e = yt([18, 0, 0, 1, 18, 0, 0, -1, 6, 0, 1, 0, 6, 1, 0, 0, 6, 0, -1, 0, 6, 1, 0, 0, 6, 0, 1, 0, 6, 1, 0, 0, 6, 0, -1, 0, 6, 1, 0, 0, 6, 0, -1, 0, 6, -1, 0, 0]),
                        n = yt([18, 200, 70, 120, 18, 80, 70, 200, 6, 70, 200, 210, 6, 200, 200, 70, 6, 210, 100, 70, 6, 210, 160, 70, 6, 70, 180, 210, 6, 100, 70, 210, 6, 76, 210, 100, 6, 140, 210, 80, 6, 90, 130, 110, 6, 160, 160, 220], [255]),
                        r = t.length / 3, i = {
                            position: it(3, r),
                            texcoord: it(2, r),
                            normal: it(3, r),
                            color: it(4, r, Uint8Array),
                            indices: it(3, r / 3, Uint16Array)
                        };
                    i.position.push(t), i.texcoord.push([.22, .19, .22, .79, .34, .19, .22, .79, .34, .79, .34, .19, .34, .19, .34, .31, .62, .19, .34, .31, .62, .31, .62, .19, .34, .43, .34, .55, .49, .43, .34, .55, .49, .55, .49, .43, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0]), i.normal.push(e), i.color.push(n);
                    for (var o = 0; o < r; ++o) i.indices.push(o);
                    return i
                }

                function bt(t, e, n, r, i, o, a) {
                    if (i <= 0) throw new Error("subdivisionDown must be > 0");
                    var u = (a = a || 1) - (o = o || 0), s = 2 * (i + 1) * 4, l = it(3, s), c = it(3, s), f = it(2, s);

                    function m(t, e, n) {
                        return t + (e - t) * n
                    }

                    function h(e, n, a, s, h, d) {
                        for (var p = 0; p <= i; p++) {
                            var v = n / 1, g = p / i, y = 2 * (v - .5), _ = (o + g * u) * Math.PI, b = Math.sin(_),
                                w = Math.cos(_), C = m(t, e, b), T = y * r, I = w * t, P = b * C;
                            l.push(T, I, P);
                            var S = A((E = [0, b, w], L = a, (M = (M = void 0) || new x(3))[0] = E[0] * L[0], M[1] = E[1] * L[1], M[2] = E[2] * L[2], M), s);
                            c.push(S), f.push(v * h + d, g)
                        }
                        var E, L, M
                    }

                    for (var d = 0; d < 2; d++) {
                        var p = 2 * (d / 1 - .5);
                        h(e, d, [1, 1, 1], [0, 0, 0], 1, 0), h(e, d, [0, 0, 0], [p, 0, 0], 0, 0), h(n, d, [1, 1, 1], [0, 0, 0], 1, 0), h(n, d, [0, 0, 0], [p, 0, 0], 0, 1)
                    }
                    var v = it(3, 2 * i * 4, Uint16Array);

                    function g(t, e) {
                        for (var n = 0; n < i; ++n) v.push(t + n + 0, t + n + 1, e + n + 0), v.push(t + n + 1, e + n + 1, e + n + 0)
                    }

                    var y = i + 1;
                    return g(0 * y, 4 * y), g(5 * y, 7 * y), g(6 * y, 2 * y), g(3 * y, 1 * y), {
                        position: l,
                        normal: c,
                        texcoord: f,
                        indices: v
                    }
                }

                function xt(t, e, n, r, i, o) {
                    return gt(t, t, e, n, r, i, o)
                }

                function wt(t, e, n, r, i, o) {
                    if (n < 3) throw new Error("radialSubdivisions must be 3 or greater");
                    if (r < 3) throw new Error("verticalSubdivisions must be 3 or greater");
                    i = i || 0;
                    for (var a = (o = o || 2 * Math.PI) - i, u = n + 1, s = r + 1, l = u * s, c = it(3, l), f = it(3, l), m = it(2, l), h = it(3, n * r * 2, Uint16Array), d = 0; d < s; ++d) for (var p = d / r, v = p * Math.PI * 2, g = Math.sin(v), y = t + g * e, _ = Math.cos(v), b = _ * e, x = 0; x < u; ++x) {
                        var w = x / n, A = i + w * a, C = Math.sin(A), T = Math.cos(A), I = C * y, P = T * y, S = C * g,
                            E = T * g;
                        c.push(I, b, P), f.push(S, _, E), m.push(w, 1 - p)
                    }
                    for (var L = 0; L < r; ++L) for (var M = 0; M < n; ++M) {
                        var z = 1 + M, F = 1 + L;
                        h.push(u * L + M, u * F + M, u * L + z), h.push(u * F + M, u * F + z, u * L + z)
                    }
                    return {position: c, normal: f, texcoord: m, indices: h}
                }

                function At(t, e, n, r, i) {
                    if (e < 3) throw new Error("divisions must be at least 3");
                    i = i || 1, r = r || 0;
                    for (var o = (e + 1) * ((n = n || 1) + 1), a = it(3, o), u = it(3, o), s = it(2, o), l = it(3, n * e * 2, Uint16Array), c = 0, f = t - r, m = e + 1, h = 0; h <= n; ++h) {
                        for (var d = r + f * Math.pow(h / n, i), p = 0; p <= e; ++p) {
                            var v = 2 * Math.PI * p / e, g = d * Math.cos(v), y = d * Math.sin(v);
                            if (a.push(g, 0, y), u.push(0, 1, 0), s.push(1 - p / e, h / n), h > 0 && p !== e) {
                                var _ = c + (p + 1), b = c + p, x = c + p - m, w = c + (p + 1) - m;
                                l.push(_, b, x), l.push(_, x, w)
                            }
                        }
                        c += e + 1
                    }
                    return {position: a, normal: u, texcoord: s, indices: l}
                }

                function Ct(t) {
                    return function (e) {
                        var n = t.apply(this, Array.prototype.slice.call(arguments, 1));
                        return tt(e, n)
                    }
                }

                function Tt(t) {
                    return function (e) {
                        var n = t.apply(null, Array.prototype.slice.call(arguments, 1));
                        return $(e, n)
                    }
                }

                var It = ["numComponents", "size", "type", "normalize", "stride", "offset", "attrib", "name", "attribName"];

                function Pt(t, e, n, r) {
                    r = r || 0;
                    for (var i = t.length, o = 0; o < i; ++o) e[n + o] = t[o] + r
                }

                function St(t, e) {
                    var n, r, i = et(t), o = new i.constructor(e), a = o;
                    return i.numComponents && i.numElements && rt(o, i.numComponents), t.data && (n = t, r = a = {data: o}, It.forEach((function (t) {
                        var e = n[t];
                        void 0 !== e && (r[t] = e)
                    }))), a
                }

                var Et = Tt(_t), Lt = Ct(_t), Mt = Tt(vt), zt = Ct(vt), Ft = Tt(ht), Rt = Ct(ht), Dt = Tt(dt),
                    kt = Ct(dt), Ot = Tt(gt), jt = Ct(gt), Bt = Tt(mt), Gt = Ct(mt), Nt = Tt(bt), Ut = Ct(bt),
                    Vt = Tt(xt), Wt = Ct(xt), Ht = Tt(wt), Yt = Ct(wt), Xt = Tt(At), qt = Ct(At), Jt = Nt, Kt = Ut,
                    Zt = bt, Qt = Object.freeze({
                        __proto__: null,
                        create3DFBufferInfo: Et,
                        create3DFBuffers: Lt,
                        create3DFVertices: _t,
                        createAugmentedTypedArray: it,
                        createCubeBufferInfo: Mt,
                        createCubeBuffers: zt,
                        createCubeVertices: vt,
                        createPlaneBufferInfo: Ft,
                        createPlaneBuffers: Rt,
                        createPlaneVertices: ht,
                        createSphereBufferInfo: Dt,
                        createSphereBuffers: kt,
                        createSphereVertices: dt,
                        createTruncatedConeBufferInfo: Ot,
                        createTruncatedConeBuffers: jt,
                        createTruncatedConeVertices: gt,
                        createXYQuadBufferInfo: Bt,
                        createXYQuadBuffers: Gt,
                        createXYQuadVertices: mt,
                        createCresentBufferInfo: Jt,
                        createCresentBuffers: Kt,
                        createCresentVertices: Zt,
                        createCrescentBufferInfo: Nt,
                        createCrescentBuffers: Ut,
                        createCrescentVertices: bt,
                        createCylinderBufferInfo: Vt,
                        createCylinderBuffers: Wt,
                        createCylinderVertices: xt,
                        createTorusBufferInfo: Ht,
                        createTorusBuffers: Yt,
                        createTorusVertices: wt,
                        createDiscBufferInfo: Xt,
                        createDiscBuffers: qt,
                        createDiscVertices: At,
                        deindexVertices: function (t) {
                            var e = t.indices, n = {}, r = e.length;
                            return Object.keys(t).filter(ot).forEach((function (i) {
                                for (var o = t[i], a = o.numComponents, u = it(a, r, o.constructor), s = 0; s < r; ++s) for (var l = e[s] * a, c = 0; c < a; ++c) u.push(o[l + c]);
                                n[i] = u
                            })), n
                        },
                        flattenNormals: function (t) {
                            if (t.indices) throw new Error("can not flatten normals of indexed vertices. deindex them first");
                            for (var e = t.normal, n = e.length, r = 0; r < n; r += 9) {
                                var i = e[r + 0], o = e[r + 1], a = e[r + 2], u = e[r + 3], s = e[r + 4], l = e[r + 5],
                                    c = i + u + e[r + 6], f = o + s + e[r + 7], m = a + l + e[r + 8],
                                    h = Math.sqrt(c * c + f * f + m * m);
                                c /= h, f /= h, m /= h, e[r + 0] = c, e[r + 1] = f, e[r + 2] = m, e[r + 3] = c, e[r + 4] = f, e[r + 5] = m, e[r + 6] = c, e[r + 7] = f, e[r + 8] = m
                            }
                            return t
                        },
                        makeRandomVertexColors: function (t, e) {
                            e = e || {};
                            var n = t.position.numElements, r = it(4, n, Uint8Array), i = e.rand || function (t, e) {
                                return e < 3 ? 256 * Math.random() | 0 : 255
                            };
                            if (t.color = r, t.indices) for (var o = 0; o < n; ++o) r.push(i(o, 0), i(o, 1), i(o, 2), i(o, 3)); else for (var a = e.vertsPerColor || 3, u = n / a, s = 0; s < u; ++s) for (var l = [i(s, 0), i(s, 1), i(s, 2), i(s, 3)], c = 0; c < a; ++c) r.push(l);
                            return t
                        },
                        reorientDirections: st,
                        reorientNormals: lt,
                        reorientPositions: ct,
                        reorientVertices: ft,
                        concatVertices: function (t) {
                            for (var e, n = {}, r = function (r) {
                                var i = t[r];
                                Object.keys(i).forEach((function (t) {
                                    n[t] || (n[t] = []), e || "indices" === t || (e = t);
                                    var r = i[t], o = nt(r, t), a = et(r).length / o;
                                    n[t].push(a)
                                }))
                            }, i = 0; i < t.length; ++i) r(i);
                            var o = n[e], a = {};
                            return Object.keys(n).forEach((function (e) {
                                var n = function (e) {
                                    for (var n, r = 0, i = 0; i < t.length; ++i) {
                                        var o = t[i][e];
                                        r += et(o).length, n && !o.data || (n = o)
                                    }
                                    return {length: r, spec: n}
                                }(e), r = St(n.spec, n.length);
                                !function (e, n, r) {
                                    for (var i = 0, o = 0, a = 0; a < t.length; ++a) {
                                        var u = t[a][e], s = et(u);
                                        "indices" === e ? (Pt(s, r, o, i), i += n[a]) : Pt(s, r, o), o += s.length
                                    }
                                }(e, o, et(r)), a[e] = r
                            })), a
                        },
                        duplicateVertices: function (t) {
                            var e = {};
                            return Object.keys(t).forEach((function (n) {
                                var r = t[n], i = et(r), o = St(r, i.length);
                                Pt(i, et(o), 0), e[n] = o
                            })), e
                        }
                    });

                function $t(t) {
                    return !!t.texStorage2D
                }

                function te(t) {
                    return !t.texStorage2D
                }

                var ee, ne, re, ie = (ee = {}, ne = {}, function (t, e) {
                        return function (t) {
                            var e = t.constructor.name;
                            if (!ee[e]) {
                                for (var n in t) if ("number" == typeof t[n]) {
                                    var r = ne[t[n]];
                                    ne[t[n]] = r ? "".concat(r, " | ").concat(n) : n
                                }
                                ee[e] = !0
                            }
                        }(t), ne[e] || "0x" + e.toString(16)
                    }), oe = {textureColor: new Uint8Array([128, 192, 255, 255]), textureOptions: {}, crossOrigin: void 0},
                    ae = B;

                function ue() {
                    return re = re || ("undefined" != typeof document && document.createElement ? document.createElement("canvas").getContext("2d") : null)
                }

                var se, le = 6407, ce = 33319, fe = {
                    6406: {numColorComponents: 1},
                    6409: {numColorComponents: 1},
                    6410: {numColorComponents: 2},
                    6407: {numColorComponents: 3},
                    6408: {numColorComponents: 4},
                    6403: {numColorComponents: 1},
                    36244: {numColorComponents: 1},
                    33319: {numColorComponents: 2},
                    33320: {numColorComponents: 2}
                };

                function me(t) {
                    if (!se) {
                        var e = {
                            6406: {
                                textureFormat: 6406,
                                colorRenderable: !0,
                                textureFilterable: !0,
                                bytesPerElement: [1, 2, 2, 4],
                                type: [5121, 5131, 36193, 5126]
                            },
                            6409: {
                                textureFormat: 6409,
                                colorRenderable: !0,
                                textureFilterable: !0,
                                bytesPerElement: [1, 2, 2, 4],
                                type: [5121, 5131, 36193, 5126]
                            },
                            6410: {
                                textureFormat: 6410,
                                colorRenderable: !0,
                                textureFilterable: !0,
                                bytesPerElement: [2, 4, 4, 8],
                                type: [5121, 5131, 36193, 5126]
                            }
                        };
                        e[le] = {
                            textureFormat: le,
                            colorRenderable: !0,
                            textureFilterable: !0,
                            bytesPerElement: [3, 6, 6, 12, 2],
                            type: [5121, 5131, 36193, 5126, 33635]
                        }, e[6408] = {
                            textureFormat: 6408,
                            colorRenderable: !0,
                            textureFilterable: !0,
                            bytesPerElement: [4, 8, 8, 16, 2, 2],
                            type: [5121, 5131, 36193, 5126, 32819, 32820]
                        }, e[33321] = {
                            textureFormat: 6403,
                            colorRenderable: !0,
                            textureFilterable: !0,
                            bytesPerElement: [1],
                            type: [5121]
                        }, e[36756] = {
                            textureFormat: 6403,
                            colorRenderable: !1,
                            textureFilterable: !0,
                            bytesPerElement: [1],
                            type: [5120]
                        }, e[33325] = {
                            textureFormat: 6403,
                            colorRenderable: !1,
                            textureFilterable: !0,
                            bytesPerElement: [4, 2],
                            type: [5126, 5131]
                        }, e[33326] = {
                            textureFormat: 6403,
                            colorRenderable: !1,
                            textureFilterable: !1,
                            bytesPerElement: [4],
                            type: [5126]
                        }, e[33330] = {
                            textureFormat: 36244,
                            colorRenderable: !0,
                            textureFilterable: !1,
                            bytesPerElement: [1],
                            type: [5121]
                        }, e[33329] = {
                            textureFormat: 36244,
                            colorRenderable: !0,
                            textureFilterable: !1,
                            bytesPerElement: [1],
                            type: [5120]
                        }, e[33332] = {
                            textureFormat: 36244,
                            colorRenderable: !0,
                            textureFilterable: !1,
                            bytesPerElement: [2],
                            type: [5123]
                        }, e[33331] = {
                            textureFormat: 36244,
                            colorRenderable: !0,
                            textureFilterable: !1,
                            bytesPerElement: [2],
                            type: [5122]
                        }, e[33334] = {
                            textureFormat: 36244,
                            colorRenderable: !0,
                            textureFilterable: !1,
                            bytesPerElement: [4],
                            type: [5125]
                        }, e[33333] = {
                            textureFormat: 36244,
                            colorRenderable: !0,
                            textureFilterable: !1,
                            bytesPerElement: [4],
                            type: [5124]
                        }, e[33323] = {
                            textureFormat: ce,
                            colorRenderable: !0,
                            textureFilterable: !0,
                            bytesPerElement: [2],
                            type: [5121]
                        }, e[36757] = {
                            textureFormat: ce,
                            colorRenderable: !1,
                            textureFilterable: !0,
                            bytesPerElement: [2],
                            type: [5120]
                        }, e[33327] = {
                            textureFormat: ce,
                            colorRenderable: !1,
                            textureFilterable: !0,
                            bytesPerElement: [8, 4],
                            type: [5126, 5131]
                        }, e[33328] = {
                            textureFormat: ce,
                            colorRenderable: !1,
                            textureFilterable: !1,
                            bytesPerElement: [8],
                            type: [5126]
                        }, e[33336] = {
                            textureFormat: 33320,
                            colorRenderable: !0,
                            textureFilterable: !1,
                            bytesPerElement: [2],
                            type: [5121]
                        }, e[33335] = {
                            textureFormat: 33320,
                            colorRenderable: !0,
                            textureFilterable: !1,
                            bytesPerElement: [2],
                            type: [5120]
                        }, e[33338] = {
                            textureFormat: 33320,
                            colorRenderable: !0,
                            textureFilterable: !1,
                            bytesPerElement: [4],
                            type: [5123]
                        }, e[33337] = {
                            textureFormat: 33320,
                            colorRenderable: !0,
                            textureFilterable: !1,
                            bytesPerElement: [4],
                            type: [5122]
                        }, e[33340] = {
                            textureFormat: 33320,
                            colorRenderable: !0,
                            textureFilterable: !1,
                            bytesPerElement: [8],
                            type: [5125]
                        }, e[33339] = {
                            textureFormat: 33320,
                            colorRenderable: !0,
                            textureFilterable: !1,
                            bytesPerElement: [8],
                            type: [5124]
                        }, e[32849] = {
                            textureFormat: le,
                            colorRenderable: !0,
                            textureFilterable: !0,
                            bytesPerElement: [3],
                            type: [5121]
                        }, e[35905] = {
                            textureFormat: le,
                            colorRenderable: !1,
                            textureFilterable: !0,
                            bytesPerElement: [3],
                            type: [5121]
                        }, e[36194] = {
                            textureFormat: le,
                            colorRenderable: !0,
                            textureFilterable: !0,
                            bytesPerElement: [3, 2],
                            type: [5121, 33635]
                        }, e[36758] = {
                            textureFormat: le,
                            colorRenderable: !1,
                            textureFilterable: !0,
                            bytesPerElement: [3],
                            type: [5120]
                        }, e[35898] = {
                            textureFormat: le,
                            colorRenderable: !1,
                            textureFilterable: !0,
                            bytesPerElement: [12, 6, 4],
                            type: [5126, 5131, 35899]
                        }, e[35901] = {
                            textureFormat: le,
                            colorRenderable: !1,
                            textureFilterable: !0,
                            bytesPerElement: [12, 6, 4],
                            type: [5126, 5131, 35902]
                        }, e[34843] = {
                            textureFormat: le,
                            colorRenderable: !1,
                            textureFilterable: !0,
                            bytesPerElement: [12, 6],
                            type: [5126, 5131]
                        }, e[34837] = {
                            textureFormat: le,
                            colorRenderable: !1,
                            textureFilterable: !1,
                            bytesPerElement: [12],
                            type: [5126]
                        }, e[36221] = {
                            textureFormat: 36248,
                            colorRenderable: !1,
                            textureFilterable: !1,
                            bytesPerElement: [3],
                            type: [5121]
                        }, e[36239] = {
                            textureFormat: 36248,
                            colorRenderable: !1,
                            textureFilterable: !1,
                            bytesPerElement: [3],
                            type: [5120]
                        }, e[36215] = {
                            textureFormat: 36248,
                            colorRenderable: !1,
                            textureFilterable: !1,
                            bytesPerElement: [6],
                            type: [5123]
                        }, e[36233] = {
                            textureFormat: 36248,
                            colorRenderable: !1,
                            textureFilterable: !1,
                            bytesPerElement: [6],
                            type: [5122]
                        }, e[36209] = {
                            textureFormat: 36248,
                            colorRenderable: !1,
                            textureFilterable: !1,
                            bytesPerElement: [12],
                            type: [5125]
                        }, e[36227] = {
                            textureFormat: 36248,
                            colorRenderable: !1,
                            textureFilterable: !1,
                            bytesPerElement: [12],
                            type: [5124]
                        }, e[32856] = {
                            textureFormat: 6408,
                            colorRenderable: !0,
                            textureFilterable: !0,
                            bytesPerElement: [4],
                            type: [5121]
                        }, e[35907] = {
                            textureFormat: 6408,
                            colorRenderable: !0,
                            textureFilterable: !0,
                            bytesPerElement: [4],
                            type: [5121]
                        }, e[36759] = {
                            textureFormat: 6408,
                            colorRenderable: !1,
                            textureFilterable: !0,
                            bytesPerElement: [4],
                            type: [5120]
                        }, e[32855] = {
                            textureFormat: 6408,
                            colorRenderable: !0,
                            textureFilterable: !0,
                            bytesPerElement: [4, 2, 4],
                            type: [5121, 32820, 33640]
                        }, e[32854] = {
                            textureFormat: 6408,
                            colorRenderable: !0,
                            textureFilterable: !0,
                            bytesPerElement: [4, 2],
                            type: [5121, 32819]
                        }, e[32857] = {
                            textureFormat: 6408,
                            colorRenderable: !0,
                            textureFilterable: !0,
                            bytesPerElement: [4],
                            type: [33640]
                        }, e[34842] = {
                            textureFormat: 6408,
                            colorRenderable: !1,
                            textureFilterable: !0,
                            bytesPerElement: [16, 8],
                            type: [5126, 5131]
                        }, e[34836] = {
                            textureFormat: 6408,
                            colorRenderable: !1,
                            textureFilterable: !1,
                            bytesPerElement: [16],
                            type: [5126]
                        }, e[36220] = {
                            textureFormat: 36249,
                            colorRenderable: !0,
                            textureFilterable: !1,
                            bytesPerElement: [4],
                            type: [5121]
                        }, e[36238] = {
                            textureFormat: 36249,
                            colorRenderable: !0,
                            textureFilterable: !1,
                            bytesPerElement: [4],
                            type: [5120]
                        }, e[36975] = {
                            textureFormat: 36249,
                            colorRenderable: !0,
                            textureFilterable: !1,
                            bytesPerElement: [4],
                            type: [33640]
                        }, e[36214] = {
                            textureFormat: 36249,
                            colorRenderable: !0,
                            textureFilterable: !1,
                            bytesPerElement: [8],
                            type: [5123]
                        }, e[36232] = {
                            textureFormat: 36249,
                            colorRenderable: !0,
                            textureFilterable: !1,
                            bytesPerElement: [8],
                            type: [5122]
                        }, e[36226] = {
                            textureFormat: 36249,
                            colorRenderable: !0,
                            textureFilterable: !1,
                            bytesPerElement: [16],
                            type: [5124]
                        }, e[36208] = {
                            textureFormat: 36249,
                            colorRenderable: !0,
                            textureFilterable: !1,
                            bytesPerElement: [16],
                            type: [5125]
                        }, e[33189] = {
                            textureFormat: 6402,
                            colorRenderable: !0,
                            textureFilterable: !1,
                            bytesPerElement: [2, 4],
                            type: [5123, 5125]
                        }, e[33190] = {
                            textureFormat: 6402,
                            colorRenderable: !0,
                            textureFilterable: !1,
                            bytesPerElement: [4],
                            type: [5125]
                        }, e[36012] = {
                            textureFormat: 6402,
                            colorRenderable: !0,
                            textureFilterable: !1,
                            bytesPerElement: [4],
                            type: [5126]
                        }, e[35056] = {
                            textureFormat: 34041,
                            colorRenderable: !0,
                            textureFilterable: !1,
                            bytesPerElement: [4],
                            type: [34042]
                        }, e[36013] = {
                            textureFormat: 34041,
                            colorRenderable: !0,
                            textureFilterable: !1,
                            bytesPerElement: [4],
                            type: [36269]
                        }, Object.keys(e).forEach((function (t) {
                            var n = e[t];
                            n.bytesPerElementMap = {}, n.bytesPerElement.forEach((function (t, e) {
                                var r = n.type[e];
                                n.bytesPerElementMap[r] = t
                            }))
                        })), se = e
                    }
                    return se[t]
                }

                function he(t) {
                    var e = me(t);
                    if (!e) throw "unknown internal format";
                    return {format: e.textureFormat, type: e.type[0]}
                }

                function de(t) {
                    return 0 == (t & t - 1)
                }

                function pe(t, e, n, r, i) {
                    if (i % 1 != 0) throw "can't guess dimensions";
                    if (n || r) {
                        if (r) {
                            if (!n && (n = i / r) % 1) throw "can't guess dimensions"
                        } else if ((r = i / n) % 1) throw "can't guess dimensions"
                    } else {
                        var o = Math.sqrt(i / (34067 === e ? 6 : 1));
                        o % 1 == 0 ? (n = o, r = o) : (n = i, r = 1)
                    }
                    return {width: n, height: r}
                }

                fe[le] = {numColorComponents: 3}, fe[36248] = {numColorComponents: 3}, fe[6408] = {numColorComponents: 4}, fe[36249] = {numColorComponents: 4}, fe[6402] = {numColorComponents: 1}, fe[34041] = {numColorComponents: 2};
                var ve = {};

                function ge(t, e) {
                    void 0 !== e.colorspaceConversion && (ve.colorspaceConversion = t.getParameter(37443), t.pixelStorei(37443, e.colorspaceConversion)), void 0 !== e.premultiplyAlpha && (ve.premultiplyAlpha = t.getParameter(37441), t.pixelStorei(37441, e.premultiplyAlpha)), void 0 !== e.flipY && (ve.flipY = t.getParameter(37440), t.pixelStorei(37440, e.flipY))
                }

                function ye(t, e) {
                    void 0 !== e.colorspaceConversion && t.pixelStorei(37443, ve.colorspaceConversion), void 0 !== e.premultiplyAlpha && t.pixelStorei(37441, ve.premultiplyAlpha), void 0 !== e.flipY && t.pixelStorei(37440, ve.flipY)
                }

                function _e(t) {
                    ve.unpackAlignment = t.getParameter(3317), $t(t) && (ve.unpackRowLength = t.getParameter(3314), ve.unpackImageHeight = t.getParameter(32878), ve.unpackSkipPixels = t.getParameter(3316), ve.unpackSkipRows = t.getParameter(3315), ve.unpackSkipImages = t.getParameter(32877))
                }

                function be(t) {
                    t.pixelStorei(3317, ve.unpackAlignment), $t(t) && (t.pixelStorei(3314, ve.unpackRowLength), t.pixelStorei(32878, ve.unpackImageHeight), t.pixelStorei(3316, ve.unpackSkipPixels), t.pixelStorei(3315, ve.unpackSkipRows), t.pixelStorei(32877, ve.unpackSkipImages))
                }

                function xe(t, e, n) {
                    var r = n.target || 3553;
                    t.bindTexture(r, e), function (t, e, n, r) {
                        r.minMag && (n.call(t, e, 10241, r.minMag), n.call(t, e, 10240, r.minMag)), r.min && n.call(t, e, 10241, r.min), r.mag && n.call(t, e, 10240, r.mag), r.wrap && (n.call(t, e, 10242, r.wrap), n.call(t, e, 10243, r.wrap), (32879 === e || "undefined" != typeof WebGLSampler && e instanceof WebGLSampler) && n.call(t, e, 32882, r.wrap)), r.wrapR && n.call(t, e, 32882, r.wrapR), r.wrapS && n.call(t, e, 10242, r.wrapS), r.wrapT && n.call(t, e, 10243, r.wrapT), r.minLod && n.call(t, e, 33082, r.minLod), r.maxLod && n.call(t, e, 33083, r.maxLod), r.baseLevel && n.call(t, e, 33084, r.baseLevel), r.maxLevel && n.call(t, e, 33085, r.maxLevel)
                    }(t, r, t.texParameteri, n)
                }

                function we(t, e, n, r, i, o) {
                    o = o || 6408;
                    var a = (n = n || oe.textureOptions).target || 3553;
                    if (r = r || n.width, i = i || n.height, t.bindTexture(a, e), function (t, e, n, r) {
                        if (!$t(t)) return de(e) && de(n);
                        var i = me(r);
                        if (!i) throw "unknown internal format";
                        return i.colorRenderable && i.textureFilterable
                    }(t, r, i, o)) t.generateMipmap(a); else {
                        var u = function (t) {
                            var e = me(t);
                            if (!e) throw "unknown internal format";
                            return e.textureFilterable
                        }(o) ? 9729 : 9728;
                        t.texParameteri(a, 10241, u), t.texParameteri(a, 10240, u), t.texParameteri(a, 10242, 33071), t.texParameteri(a, 10243, 33071)
                    }
                }

                function Ae(t) {
                    return !0 === t.auto || void 0 === t.auto && void 0 === t.level
                }

                function Ce(t, e) {
                    return (e = e || {}).cubeFaceOrder || [34069, 34070, 34071, 34072, 34073, 34074]
                }

                function Te(t, e) {
                    var n = Ce(0, e).map((function (t, e) {
                        return {face: t, ndx: e}
                    }));
                    return n.sort((function (t, e) {
                        return t.face - e.face
                    })), n
                }

                function Ie(t, e, n, r) {
                    var i = (r = r || oe.textureOptions).target || 3553, o = r.level || 0, a = n.width, u = n.height,
                        s = r.internalFormat || r.format || 6408, l = he(s), c = r.format || l.format,
                        f = r.type || l.type;
                    if (ge(t, r), t.bindTexture(i, e), 34067 === i) {
                        var m, h, d = n.width, p = n.height;
                        if (d / 6 === p) m = p, h = [0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0]; else if (p / 6 === d) m = d, h = [0, 0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5]; else if (d / 3 == p / 2) m = d / 3, h = [0, 0, 1, 0, 2, 0, 0, 1, 1, 1, 2, 1]; else {
                            if (d / 2 != p / 3) throw "can't figure out cube map from element: " + (n.src ? n.src : n.nodeName);
                            m = d / 2, h = [0, 0, 1, 0, 0, 1, 1, 1, 0, 2, 1, 2]
                        }
                        var v = ue();
                        v ? (v.canvas.width = m, v.canvas.height = m, a = m, u = m, Te(0, r).forEach((function (e) {
                            var r = h[2 * e.ndx + 0] * m, i = h[2 * e.ndx + 1] * m;
                            v.drawImage(n, r, i, m, m, 0, 0, m, m), t.texImage2D(e.face, o, s, c, f, v.canvas)
                        })), v.canvas.width = 1, v.canvas.height = 1) : "undefined" != typeof createImageBitmap && (a = m, u = m, Te(0, r).forEach((function (l) {
                            var d = h[2 * l.ndx + 0] * m, p = h[2 * l.ndx + 1] * m;
                            t.texImage2D(l.face, o, s, m, m, 0, c, f, null), createImageBitmap(n, d, p, m, m, {
                                premultiplyAlpha: "none",
                                colorSpaceConversion: "none"
                            }).then((function (n) {
                                ge(t, r), t.bindTexture(i, e), t.texImage2D(l.face, o, s, c, f, n), ye(t, r), Ae(r) && we(t, e, r, a, u, s)
                            }))
                        })))
                    } else if (32879 === i || 35866 === i) {
                        var g = Math.min(n.width, n.height), y = Math.max(n.width, n.height), _ = y / g;
                        if (_ % 1 != 0) throw "can not compute 3D dimensions of element";
                        var b = n.width === y ? 1 : 0, x = n.height === y ? 1 : 0;
                        _e(t), t.pixelStorei(3317, 1), t.pixelStorei(3314, n.width), t.pixelStorei(32878, 0), t.pixelStorei(32877, 0), t.texImage3D(i, o, s, g, g, g, 0, c, f, null);
                        for (var w = 0; w < _; ++w) {
                            var A = w * g * b, C = w * g * x;
                            t.pixelStorei(3316, A), t.pixelStorei(3315, C), t.texSubImage3D(i, o, 0, 0, w, g, g, 1, c, f, n)
                        }
                        be(t)
                    } else t.texImage2D(i, o, s, c, f, n);
                    ye(t, r), Ae(r) && we(t, e, r, a, u, s), xe(t, e, r)
                }

                function Pe() {
                }

                function Se(t) {
                    return "undefined" != typeof ImageBitmap && t instanceof ImageBitmap || "undefined" != typeof ImageData && t instanceof ImageData || "undefined" != typeof HTMLElement && t instanceof HTMLElement
                }

                function Ee(t, e, n) {
                    return Se(t) ? (setTimeout((function () {
                        n(null, t)
                    })), t) : function (t, e, n) {
                        var r;
                        if (n = n || Pe, e = function (t, e) {
                            return void 0 !== e || function (t) {
                                if ("undefined" != typeof document) {
                                    var e = document.createElement("a");
                                    return e.href = t, e.hostname === location.hostname && e.port === location.port && e.protocol === location.protocol
                                }
                                var n = new URL(location.href).origin;
                                return new URL(t, location.href).origin === n
                            }(t) ? e : "anonymous"
                        }(t, e = void 0 !== e ? e : oe.crossOrigin), "undefined" != typeof Image) {
                            r = new Image, void 0 !== e && (r.crossOrigin = e);
                            var i = function () {
                                r.removeEventListener("error", o), r.removeEventListener("load", a), r = null
                            }, o = function () {
                                var e = "couldn't load image: " + t;
                                G(e), n(e, r), i()
                            }, a = function () {
                                n(null, r), i()
                            };
                            return r.addEventListener("error", o), r.addEventListener("load", a), r.src = t, r
                        }
                        if ("undefined" != typeof ImageBitmap) {
                            var u, s, l = function () {
                                n(u, s)
                            }, c = {};
                            e && (c.mode = "cors"), fetch(t, c).then((function (t) {
                                if (!t.ok) throw t;
                                return t.blob()
                            })).then((function (t) {
                                return createImageBitmap(t, {premultiplyAlpha: "none", colorSpaceConversion: "none"})
                            })).then((function (t) {
                                s = t, setTimeout(l)
                            })).catch((function (t) {
                                u = t, setTimeout(l)
                            })), r = null
                        }
                        return r
                    }(t, e, n)
                }

                function Le(t, e, n) {
                    var r = (n = n || oe.textureOptions).target || 3553;
                    if (t.bindTexture(r, e), !1 !== n.color) {
                        var i = function (t) {
                            return ae(t = t || oe.textureColor) ? t : new Uint8Array([255 * t[0], 255 * t[1], 255 * t[2], 255 * t[3]])
                        }(n.color);
                        if (34067 === r) for (var o = 0; o < 6; ++o) t.texImage2D(34069 + o, 0, 6408, 1, 1, 0, 6408, 5121, i); else 32879 === r || 35866 === r ? t.texImage3D(r, 0, 6408, 1, 1, 1, 0, 6408, 5121, i) : t.texImage2D(r, 0, 6408, 1, 1, 0, 6408, 5121, i)
                    }
                }

                function Me(t, e, n) {
                    n = n || Pe, e = e || oe.textureOptions;
                    var r = t.createTexture(), i = e.target || 3553, o = e.width || 1, a = e.height || 1,
                        u = e.internalFormat || 6408;
                    t.bindTexture(i, r), 34067 === i && (t.texParameteri(i, 10242, 33071), t.texParameteri(i, 10243, 33071));
                    var s = e.src;
                    if (s) if ("function" == typeof s && (s = s(t, e)), "string" == typeof s) !function (t, e, n, r) {
                        r = r || Pe, Le(t, e, n = n || oe.textureOptions), Ee((n = Object.assign({}, n)).src, n.crossOrigin, (function (i, o) {
                            i ? r(i, e, o) : (Ie(t, e, o, n), r(null, e, o))
                        }))
                    }(t, r, e, n); else if (ae(s) || Array.isArray(s) && ("number" == typeof s[0] || Array.isArray(s[0]) || ae(s[0]))) {
                        var l = function (t, e, n, r) {
                            var i = (r = r || oe.textureOptions).target || 3553;
                            t.bindTexture(i, e);
                            var o = r.width, a = r.height, u = r.depth, s = r.level || 0,
                                l = r.internalFormat || r.format || 6408, c = he(l), f = r.format || c.format,
                                m = r.type || function (t, e, n) {
                                    return ae(e) ? j(e) : n || 5121
                                }(0, n, c.type);
                            if (ae(n)) n instanceof Uint8ClampedArray && (n = new Uint8Array(n.buffer)); else {
                                var h = function (t) {
                                    var e = k[t];
                                    if (!e) throw new Error("unknown gl type");
                                    return e
                                }(m);
                                n = new h(n)
                            }
                            var d, p = function (t, e) {
                                var n = me(t);
                                if (!n) throw "unknown internal format";
                                var r = n.bytesPerElementMap[e];
                                if (void 0 === r) throw "unknown internal format";
                                return r
                            }(l, m), v = n.byteLength / p;
                            if (v % 1) throw "length wrong size for format: " + ie(t, f);
                            if (32879 === i || 35866 === i) if (o || a || u) !o || a && u ? !a || o && u ? (d = pe(0, i, o, a, v / u), o = d.width, a = d.height) : (d = pe(0, i, o, u, v / a), o = d.width, u = d.height) : (d = pe(0, i, a, u, v / o), a = d.width, u = d.height); else {
                                var g = Math.cbrt(v);
                                if (g % 1 != 0) throw "can't guess cube size of array of numElements: " + v;
                                o = g, a = g, u = g
                            } else d = pe(0, i, o, a, v), o = d.width, a = d.height;
                            if (_e(t), t.pixelStorei(3317, r.unpackAlignment || 1), ge(t, r), 34067 === i) {
                                var y = v / 6 * (p / n.BYTES_PER_ELEMENT);
                                Te(0, r).forEach((function (e) {
                                    var r = y * e.ndx, i = n.subarray(r, r + y);
                                    t.texImage2D(e.face, s, l, o, a, 0, f, m, i)
                                }))
                            } else 32879 === i || 35866 === i ? t.texImage3D(i, s, l, o, a, u, 0, f, m, n) : t.texImage2D(i, s, l, o, a, 0, f, m, n);
                            return ye(t, r), be(t), {width: o, height: a, depth: u, type: m}
                        }(t, r, s, e);
                        o = l.width, a = l.height
                    } else Array.isArray(s) && ("string" == typeof s[0] || Se(s[0])) ? 34067 === i ? function (t, e, n, r) {
                        r = r || Pe;
                        var i = n.src;
                        if (6 !== i.length) throw "there must be 6 urls for a cubemap";
                        var o = n.level || 0, a = n.internalFormat || n.format || 6408, u = he(a),
                            s = n.format || u.format, l = n.type || 5121, c = n.target || 3553;
                        if (34067 !== c) throw "target must be TEXTURE_CUBE_MAP";
                        Le(t, e, n), n = Object.assign({}, n);
                        var f, m = 6, h = [], d = Ce(0, n);
                        f = i.map((function (i, u) {
                            return Ee(i, n.crossOrigin, (p = d[u], function (i, u) {
                                --m, i ? h.push(i) : u.width !== u.height ? h.push("cubemap face img is not a square: " + u.src) : (ge(t, n), t.bindTexture(c, e), 5 === m ? Ce().forEach((function (e) {
                                    t.texImage2D(e, o, a, s, l, u)
                                })) : t.texImage2D(p, o, a, s, l, u), ye(t, n), Ae(n) && t.generateMipmap(c)), 0 === m && r(h.length ? h : void 0, e, f)
                            }));
                            var p
                        }))
                    }(t, r, e, n) : function (t, e, n, r) {
                        r = r || Pe;
                        var i = n.src, o = n.internalFormat || n.format || 6408, a = he(o), u = n.format || a.format,
                            s = n.type || 5121, l = n.target || 35866;
                        if (32879 !== l && 35866 !== l) throw "target must be TEXTURE_3D or TEXTURE_2D_ARRAY";
                        Le(t, e, n), n = Object.assign({}, n);
                        var c, f = i.length, m = [], h = n.level || 0, d = n.width, p = n.height, v = i.length, g = !0;
                        c = i.map((function (i, a) {
                            return Ee(i, n.crossOrigin, (y = a, function (i, a) {
                                if (--f, i) m.push(i); else {
                                    if (ge(t, n), t.bindTexture(l, e), g) {
                                        g = !1, d = n.width || a.width, p = n.height || a.height, t.texImage3D(l, h, o, d, p, v, 0, u, s, null);
                                        for (var _ = 0; _ < v; ++_) t.texSubImage3D(l, h, 0, 0, _, d, p, 1, u, s, a)
                                    } else {
                                        var b, x = a;
                                        a.width === d && a.height === p || (x = (b = ue()).canvas, b.canvas.width = d, b.canvas.height = p, b.drawImage(a, 0, 0, d, p)), t.texSubImage3D(l, h, 0, 0, y, d, p, 1, u, s, x), b && x === b.canvas && (b.canvas.width = 0, b.canvas.height = 0)
                                    }
                                    ye(t, n), Ae(n) && t.generateMipmap(l)
                                }
                                0 === f && r(m.length ? m : void 0, e, c)
                            }));
                            var y
                        }))
                    }(t, r, e, n) : (Ie(t, r, s, e), o = s.width, a = s.height); else !function (t, e, n) {
                        var r = n.target || 3553;
                        t.bindTexture(r, e);
                        var i = n.level || 0, o = n.internalFormat || n.format || 6408, a = he(o),
                            u = n.format || a.format, s = n.type || a.type;
                        if (ge(t, n), 34067 === r) for (var l = 0; l < 6; ++l) t.texImage2D(34069 + l, i, o, n.width, n.height, 0, u, s, null); else 32879 === r || 35866 === r ? t.texImage3D(r, i, o, n.width, n.height, n.depth, 0, u, s, null) : t.texImage2D(r, i, o, n.width, n.height, 0, u, s, null);
                        ye(t, n)
                    }(t, r, e);
                    return Ae(e) && we(t, r, e, o, a, u), xe(t, r, e), r
                }

                var ze = G;

                function Fe(t) {
                    return "undefined" != typeof document && document.getElementById ? document.getElementById(t) : null
                }

                var Re = {};

                function De(t, e) {
                    return Re[e].bindPoint
                }

                function ke(t, e) {
                    return function (n) {
                        t.uniform1i(e, n)
                    }
                }

                function Oe(t, e) {
                    return function (n) {
                        t.uniform1iv(e, n)
                    }
                }

                function je(t, e) {
                    return function (n) {
                        t.uniform2iv(e, n)
                    }
                }

                function Be(t, e) {
                    return function (n) {
                        t.uniform3iv(e, n)
                    }
                }

                function Ge(t, e) {
                    return function (n) {
                        t.uniform4iv(e, n)
                    }
                }

                function Ne(t, e, n, r) {
                    var i = De(0, e);
                    return $t(t) ? function (e) {
                        var o, a;
                        U(0, e) ? (o = e, a = null) : (o = e.texture, a = e.sampler), t.uniform1i(r, n), t.activeTexture(33984 + n), t.bindTexture(i, o), t.bindSampler(n, a)
                    } : function (e) {
                        t.uniform1i(r, n), t.activeTexture(33984 + n), t.bindTexture(i, e)
                    }
                }

                function Ue(t, e, n, r, i) {
                    for (var o = De(0, e), a = new Int32Array(i), u = 0; u < i; ++u) a[u] = n + u;
                    return $t(t) ? function (e) {
                        t.uniform1iv(r, a), e.forEach((function (e, r) {
                            var i, u;
                            t.activeTexture(33984 + a[r]), U(0, e) ? (i = e, u = null) : (i = e.texture, u = e.sampler), t.bindSampler(n, u), t.bindTexture(o, i)
                        }))
                    } : function (e) {
                        t.uniform1iv(r, a), e.forEach((function (e, n) {
                            t.activeTexture(33984 + a[n]), t.bindTexture(o, e)
                        }))
                    }
                }

                function Ve(t, e) {
                    return function (n) {
                        if (n.value) switch (t.disableVertexAttribArray(e), n.value.length) {
                            case 4:
                                t.vertexAttrib4fv(e, n.value);
                                break;
                            case 3:
                                t.vertexAttrib3fv(e, n.value);
                                break;
                            case 2:
                                t.vertexAttrib2fv(e, n.value);
                                break;
                            case 1:
                                t.vertexAttrib1fv(e, n.value);
                                break;
                            default:
                                throw new Error("the length of a float constant value must be between 1 and 4!")
                        } else t.bindBuffer(34962, n.buffer), t.enableVertexAttribArray(e), t.vertexAttribPointer(e, n.numComponents || n.size, n.type || 5126, n.normalize || !1, n.stride || 0, n.offset || 0), void 0 !== n.divisor && t.vertexAttribDivisor(e, n.divisor)
                    }
                }

                function We(t, e) {
                    return function (n) {
                        if (n.value) {
                            if (t.disableVertexAttribArray(e), 4 !== n.value.length) throw new Error("The length of an integer constant value must be 4!");
                            t.vertexAttrib4iv(e, n.value)
                        } else t.bindBuffer(34962, n.buffer), t.enableVertexAttribArray(e), t.vertexAttribIPointer(e, n.numComponents || n.size, n.type || 5124, n.stride || 0, n.offset || 0), void 0 !== n.divisor && t.vertexAttribDivisor(e, n.divisor)
                    }
                }

                function He(t, e) {
                    return function (n) {
                        if (n.value) {
                            if (t.disableVertexAttribArray(e), 4 !== n.value.length) throw new Error("The length of an unsigned integer constant value must be 4!");
                            t.vertexAttrib4uiv(e, n.value)
                        } else t.bindBuffer(34962, n.buffer), t.enableVertexAttribArray(e), t.vertexAttribIPointer(e, n.numComponents || n.size, n.type || 5125, n.stride || 0, n.offset || 0), void 0 !== n.divisor && t.vertexAttribDivisor(e, n.divisor)
                    }
                }

                function Ye(t, e, n) {
                    var r = n.size, i = n.count;
                    return function (n) {
                        t.bindBuffer(34962, n.buffer);
                        for (var o = n.size || n.numComponents || r, a = o / i, u = n.type || 5126, s = Re[u].size * o, l = n.normalize || !1, c = n.offset || 0, f = s / i, m = 0; m < i; ++m) t.enableVertexAttribArray(e + m), t.vertexAttribPointer(e + m, a, u, l, s, c + f * m), void 0 !== n.divisor && t.vertexAttribDivisor(e + m, n.divisor)
                    }
                }

                Re[5126] = {
                    Type: Float32Array, size: 4, setter: function (t, e) {
                        return function (n) {
                            t.uniform1f(e, n)
                        }
                    }, arraySetter: function (t, e) {
                        return function (n) {
                            t.uniform1fv(e, n)
                        }
                    }
                }, Re[35664] = {
                    Type: Float32Array, size: 8, setter: function (t, e) {
                        return function (n) {
                            t.uniform2fv(e, n)
                        }
                    }
                }, Re[35665] = {
                    Type: Float32Array, size: 12, setter: function (t, e) {
                        return function (n) {
                            t.uniform3fv(e, n)
                        }
                    }
                }, Re[35666] = {
                    Type: Float32Array, size: 16, setter: function (t, e) {
                        return function (n) {
                            t.uniform4fv(e, n)
                        }
                    }
                }, Re[5124] = {Type: Int32Array, size: 4, setter: ke, arraySetter: Oe}, Re[35667] = {
                    Type: Int32Array,
                    size: 8,
                    setter: je
                }, Re[35668] = {Type: Int32Array, size: 12, setter: Be}, Re[35669] = {
                    Type: Int32Array,
                    size: 16,
                    setter: Ge
                }, Re[5125] = {
                    Type: Uint32Array, size: 4, setter: function (t, e) {
                        return function (n) {
                            t.uniform1ui(e, n)
                        }
                    }, arraySetter: function (t, e) {
                        return function (n) {
                            t.uniform1uiv(e, n)
                        }
                    }
                }, Re[36294] = {
                    Type: Uint32Array, size: 8, setter: function (t, e) {
                        return function (n) {
                            t.uniform2uiv(e, n)
                        }
                    }
                }, Re[36295] = {
                    Type: Uint32Array, size: 12, setter: function (t, e) {
                        return function (n) {
                            t.uniform3uiv(e, n)
                        }
                    }
                }, Re[36296] = {
                    Type: Uint32Array, size: 16, setter: function (t, e) {
                        return function (n) {
                            t.uniform4uiv(e, n)
                        }
                    }
                }, Re[35670] = {
                    Type: Uint32Array,
                    size: 4,
                    setter: ke,
                    arraySetter: Oe
                }, Re[35671] = {Type: Uint32Array, size: 8, setter: je}, Re[35672] = {
                    Type: Uint32Array,
                    size: 12,
                    setter: Be
                }, Re[35673] = {Type: Uint32Array, size: 16, setter: Ge}, Re[35674] = {
                    Type: Float32Array,
                    size: 16,
                    setter: function (t, e) {
                        return function (n) {
                            t.uniformMatrix2fv(e, !1, n)
                        }
                    }
                }, Re[35675] = {
                    Type: Float32Array, size: 36, setter: function (t, e) {
                        return function (n) {
                            t.uniformMatrix3fv(e, !1, n)
                        }
                    }
                }, Re[35676] = {
                    Type: Float32Array, size: 64, setter: function (t, e) {
                        return function (n) {
                            t.uniformMatrix4fv(e, !1, n)
                        }
                    }
                }, Re[35685] = {
                    Type: Float32Array, size: 24, setter: function (t, e) {
                        return function (n) {
                            t.uniformMatrix2x3fv(e, !1, n)
                        }
                    }
                }, Re[35686] = {
                    Type: Float32Array, size: 32, setter: function (t, e) {
                        return function (n) {
                            t.uniformMatrix2x4fv(e, !1, n)
                        }
                    }
                }, Re[35687] = {
                    Type: Float32Array, size: 24, setter: function (t, e) {
                        return function (n) {
                            t.uniformMatrix3x2fv(e, !1, n)
                        }
                    }
                }, Re[35688] = {
                    Type: Float32Array, size: 48, setter: function (t, e) {
                        return function (n) {
                            t.uniformMatrix3x4fv(e, !1, n)
                        }
                    }
                }, Re[35689] = {
                    Type: Float32Array, size: 32, setter: function (t, e) {
                        return function (n) {
                            t.uniformMatrix4x2fv(e, !1, n)
                        }
                    }
                }, Re[35690] = {
                    Type: Float32Array, size: 48, setter: function (t, e) {
                        return function (n) {
                            t.uniformMatrix4x3fv(e, !1, n)
                        }
                    }
                }, Re[35678] = {
                    Type: null,
                    size: 0,
                    setter: Ne,
                    arraySetter: Ue,
                    bindPoint: 3553
                }, Re[35680] = {
                    Type: null,
                    size: 0,
                    setter: Ne,
                    arraySetter: Ue,
                    bindPoint: 34067
                }, Re[35679] = {
                    Type: null,
                    size: 0,
                    setter: Ne,
                    arraySetter: Ue,
                    bindPoint: 32879
                }, Re[35682] = {
                    Type: null,
                    size: 0,
                    setter: Ne,
                    arraySetter: Ue,
                    bindPoint: 3553
                }, Re[36289] = {
                    Type: null,
                    size: 0,
                    setter: Ne,
                    arraySetter: Ue,
                    bindPoint: 35866
                }, Re[36292] = {
                    Type: null,
                    size: 0,
                    setter: Ne,
                    arraySetter: Ue,
                    bindPoint: 35866
                }, Re[36293] = {
                    Type: null,
                    size: 0,
                    setter: Ne,
                    arraySetter: Ue,
                    bindPoint: 34067
                }, Re[36298] = {
                    Type: null,
                    size: 0,
                    setter: Ne,
                    arraySetter: Ue,
                    bindPoint: 3553
                }, Re[36299] = {
                    Type: null,
                    size: 0,
                    setter: Ne,
                    arraySetter: Ue,
                    bindPoint: 32879
                }, Re[36300] = {
                    Type: null,
                    size: 0,
                    setter: Ne,
                    arraySetter: Ue,
                    bindPoint: 34067
                }, Re[36303] = {
                    Type: null,
                    size: 0,
                    setter: Ne,
                    arraySetter: Ue,
                    bindPoint: 35866
                }, Re[36306] = {
                    Type: null,
                    size: 0,
                    setter: Ne,
                    arraySetter: Ue,
                    bindPoint: 3553
                }, Re[36307] = {
                    Type: null,
                    size: 0,
                    setter: Ne,
                    arraySetter: Ue,
                    bindPoint: 32879
                }, Re[36308] = {
                    Type: null,
                    size: 0,
                    setter: Ne,
                    arraySetter: Ue,
                    bindPoint: 34067
                }, Re[36311] = {Type: null, size: 0, setter: Ne, arraySetter: Ue, bindPoint: 35866};
                var Xe = {};
                Xe[5126] = {size: 4, setter: Ve}, Xe[35664] = {size: 8, setter: Ve}, Xe[35665] = {
                    size: 12,
                    setter: Ve
                }, Xe[35666] = {size: 16, setter: Ve}, Xe[5124] = {size: 4, setter: We}, Xe[35667] = {
                    size: 8,
                    setter: We
                }, Xe[35668] = {size: 12, setter: We}, Xe[35669] = {size: 16, setter: We}, Xe[5125] = {
                    size: 4,
                    setter: He
                }, Xe[36294] = {size: 8, setter: He}, Xe[36295] = {size: 12, setter: He}, Xe[36296] = {
                    size: 16,
                    setter: He
                }, Xe[35670] = {size: 4, setter: We}, Xe[35671] = {size: 8, setter: We}, Xe[35672] = {
                    size: 12,
                    setter: We
                }, Xe[35673] = {size: 16, setter: We}, Xe[35674] = {
                    size: 4,
                    setter: Ye,
                    count: 2
                }, Xe[35675] = {size: 9, setter: Ye, count: 3}, Xe[35676] = {size: 16, setter: Ye, count: 4};
                var qe = /^[ \t]*\n/;

                function Je(t, e, n, r) {
                    var i = r || ze, o = t.createShader(n), a = 0;
                    if (qe.test(e) && (a = 1, e = e.replace(qe, "")), t.shaderSource(o, e), t.compileShader(o), !t.getShaderParameter(o, 35713)) {
                        var u = t.getShaderInfoLog(o);
                        return i(function (t, e) {
                            return e = e || 0, ++e, t.split("\n").map((function (t, n) {
                                return n + e + ": " + t
                            })).join("\n")
                        }(e, a) + "\n*** Error compiling shader: " + u), t.deleteShader(o), null
                    }
                    return o
                }

                function Ke(t, e, n) {
                    var r, i;
                    if ("function" == typeof e && (n = e, e = void 0), "function" == typeof t) n = t, t = void 0; else if (t && !Array.isArray(t)) {
                        if (t.errorCallback) return t;
                        var o = t;
                        n = o.errorCallback, t = o.attribLocations, r = o.transformFeedbackVaryings, i = o.transformFeedbackMode
                    }
                    var a = {errorCallback: n || ze, transformFeedbackVaryings: r, transformFeedbackMode: i};
                    if (t) {
                        var u = {};
                        Array.isArray(t) ? t.forEach((function (t, n) {
                            u[t] = e ? e[n] : n
                        })) : u = t, a.attribLocations = u
                    }
                    return a
                }

                var Ze = ["VERTEX_SHADER", "FRAGMENT_SHADER"];

                function Qe(t, e) {
                    e.forEach((function (e) {
                        t.deleteShader(e)
                    }))
                }

                function $e(t) {
                    var e = t.name;
                    return e.startsWith("gl_") || e.startsWith("webgl_")
                }

                function tn(t, e) {
                    for (var n = t.uniformSetters || t, r = arguments.length, i = 1; i < r; ++i) {
                        var o = arguments[i];
                        if (Array.isArray(o)) for (var a = o.length, u = 0; u < a; ++u) tn(n, o[u]); else for (var s in o) {
                            var l = n[s];
                            l && l(o[s])
                        }
                    }
                }

                function en(t, e, n) {
                    n.vertexArrayObject ? t.bindVertexArray(n.vertexArrayObject) : (function (t, e) {
                        for (var n in e) {
                            var r = t[n];
                            r && r(e[n])
                        }
                    }(e.attribSetters || e, n.attribs), n.indices && t.bindBuffer(34963, n.indices))
                }

                function nn(t, e, n) {
                    var r = t.createVertexArray();
                    return t.bindVertexArray(r), e.length || (e = [e]), e.forEach((function (e) {
                        en(t, e, n)
                    })), t.bindVertexArray(null), {
                        numElements: n.numElements,
                        elementType: n.elementType,
                        vertexArrayObject: r
                    }
                }

                var rn = /^(.*?)_/;

                function on(t, e) {
                    ie(t, 0);
                    var n = t.getExtension(e);
                    if (n) {
                        var r = {}, i = rn.exec(e)[1], o = "_" + i;
                        for (var a in n) {
                            var u = n[a], s = "function" == typeof u, l = s ? i : o, c = a;
                            a.endsWith(l) && (c = a.substring(0, a.length - l.length)), void 0 !== t[c] ? s || t[c] === u || N(c, t[c], u, a) : s ? t[c] = function (t) {
                                return function () {
                                    return t.apply(n, arguments)
                                }
                            }(u) : (t[c] = u, r[c] = u)
                        }
                        r.constructor = {name: n.constructor.name}, ie(r, 0)
                    }
                    return n
                }

                var an = ["ANGLE_instanced_arrays", "EXT_blend_minmax", "EXT_color_buffer_float", "EXT_color_buffer_half_float", "EXT_disjoint_timer_query", "EXT_disjoint_timer_query_webgl2", "EXT_frag_depth", "EXT_sRGB", "EXT_shader_texture_lod", "EXT_texture_filter_anisotropic", "OES_element_index_uint", "OES_standard_derivatives", "OES_texture_float", "OES_texture_float_linear", "OES_texture_half_float", "OES_texture_half_float_linear", "OES_vertex_array_object", "WEBGL_color_buffer_float", "WEBGL_compressed_texture_atc", "WEBGL_compressed_texture_etc1", "WEBGL_compressed_texture_pvrtc", "WEBGL_compressed_texture_s3tc", "WEBGL_compressed_texture_s3tc_srgb", "WEBGL_depth_texture", "WEBGL_draw_buffers"];

                function un(t) {
                    for (var e = 0; e < an.length; ++e) on(t, an[e])
                }

                function sn(t, e) {
                    e = e || 1, e = Math.max(0, e);
                    var n = t.clientWidth * e | 0, r = t.clientHeight * e | 0;
                    return (t.width !== n || t.height !== r) && (t.width = n, t.height = r, !0)
                }

                var ln, cn = function () {
                    function t(e, r) {
                        var i = this;
                        n(this, t), s(this, "gl", null), s(this, "isWebGL2", null), s(this, "init", (function () {
                            var t = i.gl;
                            t.viewport(0, 0, t.canvas.width, t.canvas.height), t.clearColor(0, 0, 0, 1), t.enable(t.DEPTH_TEST), t.enable(t.CULL_FACE), t.enable(t.BLEND), t.blendFunc(t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA)
                        })), s(this, "resize", (function (t, e) {
                            i.gl.viewport(0, 0, t, e)
                        })), s(this, "prepareRenderFrame", (function () {
                            i.gl.clear(i.gl.COLOR_BUFFER_BIT | i.gl.DEPTH_BUFFER_BIT)
                        })), this.gl = function (t, e) {
                            return function (t, e) {
                                for (var n = ["webgl", "experimental-webgl"], r = null, i = 0; i < n.length; ++i) if (r = t.getContext(n[i], e)) {
                                    un(r);
                                    break
                                }
                                return r
                            }(t, e)
                        }(e, r), this.isWebGL2 = $t(this.gl) && te(this.gl), un(this.gl), this.gl.drawArraysInstanced && this.gl.createVertexArray ? sn(e) : alert("need drawArraysInstanced and createVertexArray")
                    }

                    return u(t, [{
                        key: "clearColor", set: function (t) {
                            this.gl.clearColor(t[0], t[1], t[2], t[3])
                        }
                    }]), t
                }(), fn = "undefined" != typeof Float32Array ? Float32Array : Array;

                function mn() {
                    var t = new fn(16);
                    return fn != Float32Array && (t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0), t[0] = 1, t[5] = 1, t[10] = 1, t[15] = 1, t
                }

                function hn(t) {
                    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
                }

                function dn(t, e) {
                    var n = e[0], r = e[1], i = e[2], o = e[3], a = e[4], u = e[5], s = e[6], l = e[7], c = e[8],
                        f = e[9], m = e[10], h = e[11], d = e[12], p = e[13], v = e[14], g = e[15], y = n * u - r * a,
                        _ = n * s - i * a, b = n * l - o * a, x = r * s - i * u, w = r * l - o * u, A = i * l - o * s,
                        C = c * p - f * d, T = c * v - m * d, I = c * g - h * d, P = f * v - m * p, S = f * g - h * p,
                        E = m * g - h * v, L = y * E - _ * S + b * P + x * I - w * T + A * C;
                    return L ? (L = 1 / L, t[0] = (u * E - s * S + l * P) * L, t[1] = (i * S - r * E - o * P) * L, t[2] = (p * A - v * w + g * x) * L, t[3] = (m * w - f * A - h * x) * L, t[4] = (s * I - a * E - l * T) * L, t[5] = (n * E - i * I + o * T) * L, t[6] = (v * b - d * A - g * _) * L, t[7] = (c * A - m * b + h * _) * L, t[8] = (a * S - u * I + l * C) * L, t[9] = (r * I - n * S - o * C) * L, t[10] = (d * w - p * b + g * y) * L, t[11] = (f * b - c * w - h * y) * L, t[12] = (u * T - a * P - s * C) * L, t[13] = (n * P - r * T + i * C) * L, t[14] = (p * _ - d * x - v * y) * L, t[15] = (c * x - f * _ + m * y) * L, t) : null
                }

                function pn(t, e, n) {
                    var r = e[0], i = e[1], o = e[2], a = e[3], u = e[4], s = e[5], l = e[6], c = e[7], f = e[8],
                        m = e[9], h = e[10], d = e[11], p = e[12], v = e[13], g = e[14], y = e[15], _ = n[0], b = n[1],
                        x = n[2], w = n[3];
                    return t[0] = _ * r + b * u + x * f + w * p, t[1] = _ * i + b * s + x * m + w * v, t[2] = _ * o + b * l + x * h + w * g, t[3] = _ * a + b * c + x * d + w * y, _ = n[4], b = n[5], x = n[6], w = n[7], t[4] = _ * r + b * u + x * f + w * p, t[5] = _ * i + b * s + x * m + w * v, t[6] = _ * o + b * l + x * h + w * g, t[7] = _ * a + b * c + x * d + w * y, _ = n[8], b = n[9], x = n[10], w = n[11], t[8] = _ * r + b * u + x * f + w * p, t[9] = _ * i + b * s + x * m + w * v, t[10] = _ * o + b * l + x * h + w * g, t[11] = _ * a + b * c + x * d + w * y, _ = n[12], b = n[13], x = n[14], w = n[15], t[12] = _ * r + b * u + x * f + w * p, t[13] = _ * i + b * s + x * m + w * v, t[14] = _ * o + b * l + x * h + w * g, t[15] = _ * a + b * c + x * d + w * y, t
                }

                function vn(t, e, n, r, i) {
                    var o, a = 1 / Math.tan(e / 2);
                    return t[0] = a / n, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = a, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[11] = -1, t[12] = 0, t[13] = 0, t[15] = 0, null != i && i !== 1 / 0 ? (o = 1 / (r - i), t[10] = (i + r) * o, t[14] = 2 * i * r * o) : (t[10] = -1, t[14] = -2 * r), t
                }

                function gn(t, e, n, r) {
                    var i, o, a, u, s, l, c, f, m, h, d = e[0], p = e[1], v = e[2], g = r[0], y = r[1], _ = r[2],
                        b = n[0], x = n[1], w = n[2];
                    return Math.abs(d - b) < 1e-6 && Math.abs(p - x) < 1e-6 && Math.abs(v - w) < 1e-6 ? hn(t) : (c = d - b, f = p - x, m = v - w, i = y * (m *= h = 1 / Math.hypot(c, f, m)) - _ * (f *= h), o = _ * (c *= h) - g * m, a = g * f - y * c, (h = Math.hypot(i, o, a)) ? (i *= h = 1 / h, o *= h, a *= h) : (i = 0, o = 0, a = 0), u = f * a - m * o, s = m * i - c * a, l = c * o - f * i, (h = Math.hypot(u, s, l)) ? (u *= h = 1 / h, s *= h, l *= h) : (u = 0, s = 0, l = 0), t[0] = i, t[1] = u, t[2] = c, t[3] = 0, t[4] = o, t[5] = s, t[6] = f, t[7] = 0, t[8] = a, t[9] = l, t[10] = m, t[11] = 0, t[12] = -(i * d + o * p + a * v), t[13] = -(u * d + s * p + l * v), t[14] = -(c * d + f * p + m * v), t[15] = 1, t)
                }

                function yn() {
                    var t = new fn(3);
                    return fn != Float32Array && (t[0] = 0, t[1] = 0, t[2] = 0), t
                }

                function _n(t, e, n) {
                    var r = new fn(3);
                    return r[0] = t, r[1] = e, r[2] = n, r
                }

                function bn(t, e, n) {
                    return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t[2] = e[2] + n[2], t
                }

                function xn(t, e, n) {
                    return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t[2] = e[2] - n[2], t
                }

                function wn(t, e, n) {
                    return t[0] = e[0] * n, t[1] = e[1] * n, t[2] = e[2] * n, t
                }

                function An(t, e) {
                    var n = e[0], r = e[1], i = e[2], o = n * n + r * r + i * i;
                    return o > 0 && (o = 1 / Math.sqrt(o)), t[0] = e[0] * o, t[1] = e[1] * o, t[2] = e[2] * o, t
                }

                function Cn(t, e) {
                    return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
                }

                function Tn(t, e, n, r) {
                    var i = e[0], o = e[1], a = e[2];
                    return t[0] = i + r * (n[0] - i), t[1] = o + r * (n[1] - o), t[2] = a + r * (n[2] - a), t
                }

                function In(t, e, n) {
                    var r = e[0], i = e[1], o = e[2], a = n[3] * r + n[7] * i + n[11] * o + n[15];
                    return a = a || 1, t[0] = (n[0] * r + n[4] * i + n[8] * o + n[12]) / a, t[1] = (n[1] * r + n[5] * i + n[9] * o + n[13]) / a, t[2] = (n[2] * r + n[6] * i + n[10] * o + n[14]) / a, t
                }

                function Pn() {
                    var t = new fn(4);
                    return fn != Float32Array && (t[0] = 0, t[1] = 0, t[2] = 0), t[3] = 1, t
                }

                Math.hypot || (Math.hypot = function () {
                    for (var t = 0, e = arguments.length; e--;) t += arguments[e] * arguments[e];
                    return Math.sqrt(t)
                }), yn(), function () {
                    var t;
                    t = new fn(4), fn != Float32Array && (t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0)
                }(), yn(), _n(1, 0, 0), _n(0, 1, 0), Pn(), Pn(), ln = new fn(9), fn != Float32Array && (ln[1] = 0, ln[2] = 0, ln[3] = 0, ln[5] = 0, ln[6] = 0, ln[7] = 0), ln[0] = 1, ln[4] = 1, ln[8] = 1, function () {
                    var t = new fn(2);
                    fn != Float32Array && (t[0] = 0, t[1] = 0)
                }();
                var Sn, En = function t(e, r) {
                    var i = this;
                    n(this, t), s(this, "fov", void 0), s(this, "width", void 0), s(this, "height", void 0), s(this, "aspect", void 0), s(this, "zNear", void 0), s(this, "zFar", void 0), s(this, "projection", void 0), s(this, "eye", void 0), s(this, "target", void 0), s(this, "up", void 0), s(this, "view", void 0), s(this, "viewProjection", void 0), s(this, "world", void 0), s(this, "resize", (function (t, e) {
                        i.width = t, i.height = e, i.aspect = t / e, i.projection = mn(), vn(i.projection, i.fov, i.aspect, i.zNear, i.zFar)
                    })), s(this, "update", (function () {
                        gn(i.view, i.eye, i.target, i.up), dn(i.camera, i.view), pn(i.viewProjection, i.projection, i.view)
                    })), s(this, "setPosition", (function (t) {
                        i.eye = t
                    })), s(this, "getUniforms", (function () {
                        var t = {};
                        return t.u_viewInverse = i.camera, t.u_world = i.world, t.u_worldInverseTranspose = mn(), t.u_view = i.view, t.u_resolution = [i.width, i.height], dn(t.u_worldInverseTranspose, i.world), function (t, e) {
                            if (t === e) {
                                var n = e[1], r = e[2], i = e[3], o = e[6], a = e[7], u = e[11];
                                t[1] = e[4], t[2] = e[8], t[3] = e[12], t[4] = n, t[6] = e[9], t[7] = e[13], t[8] = r, t[9] = o, t[11] = e[14], t[12] = i, t[13] = a, t[14] = u
                            } else t[0] = e[0], t[1] = e[4], t[2] = e[8], t[3] = e[12], t[4] = e[1], t[5] = e[5], t[6] = e[9], t[7] = e[13], t[8] = e[2], t[9] = e[6], t[10] = e[10], t[11] = e[14], t[12] = e[3], t[13] = e[7], t[14] = e[11], t[15] = e[15]
                        }(t.u_worldInverseTranspose, t.u_worldInverseTranspose), t.u_worldViewProjection = mn(), pn(t.u_worldViewProjection, i.viewProjection, i.world), t.u_cameraPos = i.eye, t
                    })), s(this, "getRayFromScreen", (function (t, e) {
                        var n = 2 * t - 1, r = 2 * e - 1, o = i.unproject([n, r, -1]), a = i.unproject([n, r, 1]),
                            u = yn();
                        return xn(u, a, o), An(u, u), {origin: o, direction: u}
                    })), s(this, "unproject", (function (t) {
                        var e = mn();
                        dn(e, i.viewProjection);
                        var n = _n(t[0], t[1], t[2]);
                        return In(n, n, e), n
                    })), s(this, "project", (function (t) {
                        var e = function (t) {
                            var e = new fn(3);
                            return e[0] = t[0], e[1] = t[1], e[2] = t[2], e
                        }(t);
                        return In(e, e, i.viewProjection), [(e[0] + 1) / 2, (e[1] + 1) / 2]
                    })), this.fov = Math.PI / 180 * 30, this.width = e, this.height = r, this.aspect = e / r, this.zNear = .01, this.zFar = 100, this.projection = mn(), vn(this.projection, this.fov, this.aspect, this.zNear, this.zFar), this.eye = [0, 0, 6], this.target = [0, 0, 0], this.up = [0, 1, 0], this.view = mn(), gn(this.view, this.eye, this.target, this.up), this.camera = mn(), dn(this.camera, this.view), this.viewProjection = mn(), pn(this.viewProjection, this.projection, this.view), this.world = mn(), hn(this.world)
                }, Ln = function t(e, r) {
                    var i = this;
                    n(this, t), s(this, "resize", (function (t, e) {
                        i.camera.resize(t, e)
                    })), s(this, "update", (function (t) {
                        i.camera.update(t)
                    })), s(this, "getUniforms", (function (t) {
                        var e = i.camera.getUniforms(t);
                        return e.time = t, e
                    })), this.camera = new En(e, r)
                }, Mn = function () {
                    function t(e) {
                        var r = this;
                        n(this, t), s(this, "programInfo", null), s(this, "textures", {}), s(this, "uniforms", null), s(this, "shaderStrings", null), s(this, "isInit", !1), s(this, "texturesLoaded", !1), s(this, "init", (function (t) {
                            r.programInfo = function (t, e, n, r, i) {
                                var o = Ke(void 0, void 0, void 0), a = !0;
                                if (e = e.map((function (t) {
                                    if (t.indexOf("\n") < 0) {
                                        var e = Fe(t);
                                        e ? t = e.text : (o.errorCallback("no element with id: " + t), a = !1)
                                    }
                                    return t
                                })), !a) return null;
                                var u = function (t, e, n, r, i) {
                                    for (var o = Ke(n, r, i), a = [], u = 0; u < e.length; ++u) {
                                        var s = Je(t, e[u], t[Ze[u]], o.errorCallback);
                                        if (!s) return null;
                                        a.push(s)
                                    }
                                    return function (t, e, n, r, i) {
                                        for (var o, a = Ke(n, void 0, void 0), u = [], s = [], l = 0; l < e.length; ++l) {
                                            var c = e[l];
                                            if ("string" == typeof c) {
                                                var f = Fe(c), m = f ? f.text : c, h = t[Ze[l]];
                                                f && f.type && (h = ((o = f.type).indexOf("frag") >= 0 ? 35632 : o.indexOf("vert") >= 0 ? 35633 : void 0) || h), c = Je(t, m, h, a.errorCallback), s.push(c)
                                            }
                                            "undefined" != typeof WebGLShader && c instanceof WebGLShader && u.push(c)
                                        }
                                        if (u.length !== e.length) return a.errorCallback("not enough shaders for program"), Qe(t, s), null;
                                        var d = t.createProgram();
                                        u.forEach((function (e) {
                                            t.attachShader(d, e)
                                        })), a.attribLocations && Object.keys(a.attribLocations).forEach((function (e) {
                                            t.bindAttribLocation(d, a.attribLocations[e], e)
                                        }));
                                        var p = a.transformFeedbackVaryings;
                                        if (p && (p.attribs && (p = p.attribs), Array.isArray(p) || (p = Object.keys(p)), t.transformFeedbackVaryings(d, p, a.transformFeedbackMode || 35981)), t.linkProgram(d), !t.getProgramParameter(d, 35714)) {
                                            var v = t.getProgramInfoLog(d);
                                            return a.errorCallback("Error in program linking:" + v), t.deleteProgram(d), Qe(t, s), null
                                        }
                                        return d
                                    }(t, a, o)
                                }(t, e, o);
                                return u ? function (t, e) {
                                    var n = {
                                        program: e, uniformSetters: function (t, e) {
                                            var n = 0;

                                            function r(e, r, i) {
                                                var o, a = r.size > 1 && "[0]" === r.name.substr(-3), u = r.type,
                                                    s = Re[u];
                                                if (!s) throw new Error("unknown type: 0x".concat(u.toString(16)));
                                                if (s.bindPoint) {
                                                    var l = n;
                                                    n += r.size, o = a ? s.arraySetter(t, u, l, i, r.size) : s.setter(t, u, l, i, r.size)
                                                } else o = s.arraySetter && a ? s.arraySetter(t, i) : s.setter(t, i);
                                                return o.location = i, o
                                            }

                                            for (var i = {}, o = t.getProgramParameter(e, 35718), a = 0; a < o; ++a) {
                                                var u = t.getActiveUniform(e, a);
                                                if (!$e(u)) {
                                                    var s = u.name;
                                                    "[0]" === s.substr(-3) && (s = s.substr(0, s.length - 3));
                                                    var l = t.getUniformLocation(e, u.name);
                                                    l && (i[s] = r(0, u, l))
                                                }
                                            }
                                            return i
                                        }(t, e), attribSetters: function (t, e) {
                                            for (var n = {}, r = t.getProgramParameter(e, 35721), i = 0; i < r; ++i) {
                                                var o = t.getActiveAttrib(e, i);
                                                if (!$e(o)) {
                                                    var a = t.getAttribLocation(e, o.name), u = Xe[o.type],
                                                        s = u.setter(t, a, u);
                                                    s.location = a, n[o.name] = s
                                                }
                                            }
                                            return n
                                        }(t, e)
                                    };
                                    return $t(t) && (n.uniformBlockSpec = function (t, e) {
                                        for (var n = t.getProgramParameter(e, 35718), r = [], i = [], o = 0; o < n; ++o) {
                                            i.push(o), r.push({});
                                            var a = t.getActiveUniform(e, o);
                                            if ($e(a)) break;
                                            r[o].name = a.name
                                        }
                                        [["UNIFORM_TYPE", "type"], ["UNIFORM_SIZE", "size"], ["UNIFORM_BLOCK_INDEX", "blockNdx"], ["UNIFORM_OFFSET", "offset"]].forEach((function (n) {
                                            var o = n[0], a = n[1];
                                            t.getActiveUniforms(e, i, t[o]).forEach((function (t, e) {
                                                r[e][a] = t
                                            }))
                                        }));
                                        for (var u = {}, s = t.getProgramParameter(e, 35382), l = 0; l < s; ++l) {
                                            var c = t.getActiveUniformBlockName(e, l), f = {
                                                index: t.getUniformBlockIndex(e, c),
                                                usedByVertexShader: t.getActiveUniformBlockParameter(e, l, 35396),
                                                usedByFragmentShader: t.getActiveUniformBlockParameter(e, l, 35398),
                                                size: t.getActiveUniformBlockParameter(e, l, 35392),
                                                uniformIndices: t.getActiveUniformBlockParameter(e, l, 35395)
                                            };
                                            f.used = f.usedByVertexShader || f.usedByFragmentShader, u[c] = f
                                        }
                                        return {blockSpecs: u, uniformData: r}
                                    }(t, e), n.transformFeedbackInfo = function (t, e) {
                                        for (var n = {}, r = t.getProgramParameter(e, 35971), i = 0; i < r; ++i) {
                                            var o = t.getTransformFeedbackVarying(e, i);
                                            n[o.name] = {index: i, type: o.type, size: o.size}
                                        }
                                        return n
                                    }(t, e)), n
                                }(t, u) : null
                            }(t, Object.values(r.shaderStrings)), r.isInit = !0
                        })), s(this, "loadTextures", (function (t, e, n) {
                            if (e) {
                                var i = Object.keys(e).length, o = 0;
                                Object.entries(e).forEach((function (e) {
                                    var a = g(e, 2), u = a[0], s = a[1];
                                    r.textures[u] = Me(t, s, (function () {
                                        (o += 1) === i && (r.texturesLoaded = !0, n && n())
                                    }))
                                }))
                            }
                        })), s(this, "updateUniforms", (function (t) {
                            Object.entries(t).forEach((function (t) {
                                var e = g(t, 2), n = e[0], i = e[1];
                                r.uniforms[n] = i
                            }))
                        })), this.shaderStrings = e
                    }

                    return u(t, [{
                        key: "isReady", get: function () {
                            return this.isInit && this.texturesLoaded
                        }
                    }]), t
                }(), zn = new Array(32).fill(void 0);
                zn.push(void 0, null, !0, !1);
                var Fn = zn.length;

                function Rn(t) {
                    Fn === zn.length && zn.push(zn.length + 1);
                    var e = Fn;
                    return Fn = zn[e], zn[e] = t, e
                }

                function Dn(t) {
                    return zn[t]
                }

                function kn(t) {
                    var e = Dn(t);
                    return function (t) {
                        t < 36 || (zn[t] = Fn, Fn = t)
                    }(t), e
                }

                var On = 0, jn = null;

                function Bn() {
                    return null !== jn && jn.buffer === Sn.memory.buffer || (jn = new Uint8Array(Sn.memory.buffer)), jn
                }

                var Gn = new TextEncoder("utf-8"), Nn = "function" == typeof Gn.encodeInto ? function (t, e) {
                    return Gn.encodeInto(t, e)
                } : function (t, e) {
                    var n = Gn.encode(t);
                    return e.set(n), {read: t.length, written: n.length}
                };

                function Un(t, e, n) {
                    if (void 0 === n) {
                        var r = Gn.encode(t), i = e(r.length);
                        return Bn().subarray(i, i + r.length).set(r), On = r.length, i
                    }
                    for (var o = t.length, a = e(o), u = Bn(), s = 0; s < o; s++) {
                        var l = t.charCodeAt(s);
                        if (l > 127) break;
                        u[a + s] = l
                    }
                    if (s !== o) {
                        0 !== s && (t = t.slice(s)), a = n(a, o, o = s + 3 * t.length);
                        var c = Bn().subarray(a + s, a + o);
                        s += Nn(t, c).written
                    }
                    return On = s, a
                }

                var Vn = null;

                function Wn() {
                    return null !== Vn && Vn.buffer === Sn.memory.buffer || (Vn = new Int32Array(Sn.memory.buffer)), Vn
                }

                var Hn = new TextDecoder("utf-8", {ignoreBOM: !0, fatal: !0});

                function Yn(t, e) {
                    return Hn.decode(Bn().subarray(t, t + e))
                }

                function Xn(t, e, n) {
                    Sn._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h3f5ffd491b3c8781(t, e, Rn(n))
                }

                Hn.decode();
                var qn = null;

                function Jn(t, e) {
                    var n = e(4 * t.length);
                    return (null !== qn && qn.buffer === Sn.memory.buffer || (qn = new Float32Array(Sn.memory.buffer)), qn).set(t, n / 4), On = t.length, n
                }

                var Kn = null;

                function Zn(t) {
                    return function () {
                        try {
                            return t.apply(this, arguments)
                        } catch (t) {
                            Sn.__wbindgen_exn_store(Rn(t))
                        }
                    }
                }

                var Qn = function () {
                    function t() {
                    }

                    return t.prototype.free = function () {
                        var t = this.ptr;
                        this.ptr = 0, Sn.__wbg_gkcollider_free(t)
                    }, t.create_collision_geometry = function (t, e, n) {
                        var r = Jn(t, Sn.__wbindgen_malloc), i = On, o = Jn(e, Sn.__wbindgen_malloc), a = On,
                            u = function (t, e) {
                                var n = e(4 * t.length);
                                return (null !== Kn && Kn.buffer === Sn.memory.buffer || (Kn = new Uint32Array(Sn.memory.buffer)), Kn).set(t, n / 4), On = t.length, n
                            }(n, Sn.__wbindgen_malloc), s = On,
                            l = Sn.gkcollider_create_collision_geometry(r, i, o, a, u, s);
                        return tr.__wrap(l)
                    }, t
                }(), $n = function () {
                    function t() {
                    }

                    return t.prototype.free = function () {
                        var t = this.ptr;
                        this.ptr = 0, Sn.__wbg_gkcollision_free(t)
                    }, t
                }(), tr = function () {
                    function t() {
                    }

                    t.__wrap = function (e) {
                        var n = Object.create(t.prototype);
                        return n.ptr = e, n
                    };
                    var e = t.prototype;
                    return e.free = function () {
                        var t = this.ptr;
                        this.ptr = 0, Sn.__wbg_gkcollisiongeo_free(t)
                    }, e.raycast = function (t, e) {
                        var n = Jn(t, Sn.__wbindgen_malloc), r = On, i = Jn(e, Sn.__wbindgen_malloc), o = On;
                        return kn(Sn.gkcollisiongeo_raycast(this.ptr, n, r, i, o))
                    }, e.hitTest = function (t, e) {
                        var n = Jn(t, Sn.__wbindgen_malloc), r = On, i = Jn(e, Sn.__wbindgen_malloc), o = On;
                        return 0 !== Sn.gkcollisiongeo_hitTest(this.ptr, n, r, i, o)
                    }, t
                }();

                function er(t) {
                    return nr.apply(this, arguments)
                }

                function nr() {
                    return (nr = a(o.mark((function t(e) {
                        var n, r, u, s;
                        return o.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return void 0 === e && console.log("You must specify wasm location"), (n = {wbg: {}}).wbg.__wbindgen_number_new = function (t) {
                                        return Rn(t)
                                    }, n.wbg.__wbindgen_object_drop_ref = function (t) {
                                        kn(t)
                                    }, n.wbg.__wbindgen_cb_drop = function (t) {
                                        var e = kn(t).original;
                                        return 1 == e.cnt-- && (e.a = 0, !0)
                                    }, n.wbg.__wbindgen_json_serialize = function (t, e) {
                                        var n = Dn(e),
                                            r = Un(JSON.stringify(void 0 === n ? null : n), Sn.__wbindgen_malloc, Sn.__wbindgen_realloc),
                                            i = On;
                                        Wn()[t / 4 + 1] = i, Wn()[t / 4 + 0] = r
                                    }, n.wbg.__wbindgen_json_parse = function (t, e) {
                                        return Rn(JSON.parse(Yn(t, e)))
                                    }, n.wbg.__wbindgen_string_new = function (t, e) {
                                        return Rn(Yn(t, e))
                                    }, n.wbg.__wbg_new_59cb74e423758ede = function () {
                                        return Rn(new Error)
                                    }, n.wbg.__wbg_stack_558ba5917b466edd = function (t, e) {
                                        var n = Un(Dn(e).stack, Sn.__wbindgen_malloc, Sn.__wbindgen_realloc), r = On;
                                        Wn()[t / 4 + 1] = r, Wn()[t / 4 + 0] = n
                                    }, n.wbg.__wbg_error_4bb6c2a97407129a = function (t, e) {
                                        try {
                                            console.error(Yn(t, e))
                                        } finally {
                                            Sn.__wbindgen_free(t, e)
                                        }
                                    }, n.wbg.__wbg_instanceof_Window_a633dbe0900c728a = function (t) {
                                        return Dn(t) instanceof Window
                                    }, n.wbg.__wbg_location_e50b7d71ca1b82bb = function (t) {
                                        return Rn(Dn(t).location)
                                    }, n.wbg.__wbg_fetch_995bfe97503f599b = function (t, e) {
                                        return Rn(Dn(t).fetch(Dn(e)))
                                    }, n.wbg.__wbg_origin_f5c9c638a3ed8db4 = Zn((function (t, e) {
                                        var n = Un(Dn(e).origin, Sn.__wbindgen_malloc, Sn.__wbindgen_realloc), r = On;
                                        Wn()[t / 4 + 1] = r, Wn()[t / 4 + 0] = n
                                    })), n.wbg.__wbindgen_object_clone_ref = function (t) {
                                        return Rn(Dn(t))
                                    }, n.wbg.__wbg_set_52336fc842eac7c2 = Zn((function (t, e, n, r, i) {
                                        Dn(t).set(Yn(e, n), Yn(r, i))
                                    })), n.wbg.__wbg_debug_7020dcb48edf105b = function (t) {
                                        console.debug(Dn(t))
                                    }, n.wbg.__wbg_error_b23efba5bfb5cec5 = function (t) {
                                        console.error(Dn(t))
                                    }, n.wbg.__wbg_info_8ce99578d0b91a35 = function (t) {
                                        console.info(Dn(t))
                                    }, n.wbg.__wbg_log_c180b836187d3c94 = function (t) {
                                        console.log(Dn(t))
                                    }, n.wbg.__wbg_warn_942f927afebcc748 = function (t) {
                                        console.warn(Dn(t))
                                    }, n.wbg.__wbg_instanceof_Response_37bf8b595fe4e5cd = function (t) {
                                        return Dn(t) instanceof Response
                                    }, n.wbg.__wbg_json_adb8e0e15a40a4d5 = Zn((function (t) {
                                        return Rn(Dn(t).json())
                                    })), n.wbg.__wbg_headers_8a26b723b3e5bcfa = function (t) {
                                        return Rn(Dn(t).headers)
                                    }, n.wbg.__wbg_newwithstrandinit_80e5800985bdc350 = Zn((function (t, e, n) {
                                        return Rn(new Request(Yn(t, e), Dn(n)))
                                    })), n.wbg.__wbg_call_8e95613cc6524977 = Zn((function (t, e) {
                                        return Rn(Dn(t).call(Dn(e)))
                                    })), n.wbg.__wbg_newnoargs_f3b8a801d5d4b079 = function (t, e) {
                                        return Rn(new Function(Yn(t, e)))
                                    }, n.wbg.__wbg_call_d713ea0274dfc6d2 = Zn((function (t, e, n) {
                                        return Rn(Dn(t).call(Dn(e), Dn(n)))
                                    })), n.wbg.__wbg_new_3e06d4f36713e4cb = function () {
                                        return Rn(new Object)
                                    }, n.wbg.__wbg_new_d0c63652ab4d825c = function (t, e) {
                                        try {
                                            var n = {a: t, b: e}, r = new Promise((function (t, e) {
                                                var r = n.a;
                                                n.a = 0;
                                                try {
                                                    return function (t, e, n, r) {
                                                        Sn.wasm_bindgen__convert__closures__invoke2_mut__h42e7a45b3b661aef(t, e, Rn(n), Rn(r))
                                                    }(r, n.b, t, e)
                                                } finally {
                                                    n.a = r
                                                }
                                            }));
                                            return Rn(r)
                                        } finally {
                                            n.a = n.b = 0
                                        }
                                    }, n.wbg.__wbg_resolve_2529512c3bb73938 = function (t) {
                                        return Rn(Promise.resolve(Dn(t)))
                                    }, n.wbg.__wbg_then_4a7a614abbbe6d81 = function (t, e) {
                                        return Rn(Dn(t).then(Dn(e)))
                                    }, n.wbg.__wbg_then_3b7ac098cfda2fa5 = function (t, e, n) {
                                        return Rn(Dn(t).then(Dn(e), Dn(n)))
                                    }, n.wbg.__wbg_self_07b2f89e82ceb76d = Zn((function () {
                                        return Rn(self.self)
                                    })), n.wbg.__wbg_window_ba85d88572adc0dc = Zn((function () {
                                        return Rn(window.window)
                                    })), n.wbg.__wbg_globalThis_b9277fc37e201fe5 = Zn((function () {
                                        return Rn(globalThis.globalThis)
                                    })), n.wbg.__wbg_global_e16303fe83e1d57f = Zn((function () {
                                        return Rn(i.global)
                                    })), n.wbg.__wbindgen_is_undefined = function (t) {
                                        return void 0 === Dn(t)
                                    }, n.wbg.__wbg_set_304f2ec1a3ab3b79 = Zn((function (t, e, n) {
                                        return Reflect.set(Dn(t), Dn(e), Dn(n))
                                    })), n.wbg.__wbindgen_debug_string = function (t, e) {
                                        var n = Un(function t(e) {
                                            var n = typeof e;
                                            if ("number" == n || "boolean" == n || null == e) return "" + e;
                                            if ("string" == n) return '"' + e + '"';
                                            if ("symbol" == n) {
                                                var r = e.description;
                                                return null == r ? "Symbol" : "Symbol(" + r + ")"
                                            }
                                            if ("function" == n) {
                                                var i = e.name;
                                                return "string" == typeof i && i.length > 0 ? "Function(" + i + ")" : "Function"
                                            }
                                            if (Array.isArray(e)) {
                                                var o = e.length, a = "[";
                                                o > 0 && (a += t(e[0]));
                                                for (var u = 1; u < o; u++) a += ", " + t(e[u]);
                                                return a += "]"
                                            }
                                            var s, l = /\[object ([^\]]+)\]/.exec(toString.call(e));
                                            if (!(l.length > 1)) return toString.call(e);
                                            if ("Object" == (s = l[1])) try {
                                                return "Object(" + JSON.stringify(e) + ")"
                                            } catch (t) {
                                                return "Object"
                                            }
                                            return e instanceof Error ? e.name + ": " + e.message + "\n" + e.stack : s
                                        }(Dn(e)), Sn.__wbindgen_malloc, Sn.__wbindgen_realloc), r = On;
                                        Wn()[t / 4 + 1] = r, Wn()[t / 4 + 0] = n
                                    }, n.wbg.__wbindgen_throw = function (t, e) {
                                        throw new Error(Yn(t, e))
                                    }, n.wbg.__wbindgen_rethrow = function (t) {
                                        throw kn(t)
                                    }, n.wbg.__wbindgen_closure_wrapper560 = function (t, e, n) {
                                        return Rn(function (t, e, n, r) {
                                            var i = {a: t, b: e, cnt: 1, dtor: 68}, o = function () {
                                                i.cnt++;
                                                var t = i.a;
                                                i.a = 0;
                                                try {
                                                    for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                                                    return r.apply(void 0, [t, i.b].concat(n))
                                                } finally {
                                                    0 == --i.cnt ? Sn.__wbindgen_export_2.get(i.dtor)(t, i.b) : i.a = t
                                                }
                                            };
                                            return o.original = i, o
                                        }(t, e, 0, Xn))
                                    }, ("string" == typeof e || "function" == typeof Request && e instanceof Request || "function" == typeof URL && e instanceof URL) && (e = fetch(e)), t.t0 = function () {
                                        var t = a(o.mark((function t(e, n) {
                                            var r, i;
                                            return o.wrap((function (t) {
                                                for (; ;) switch (t.prev = t.next) {
                                                    case 0:
                                                        if (!("function" == typeof Response && e instanceof Response)) {
                                                            t.next = 19;
                                                            break
                                                        }
                                                        if ("function" != typeof WebAssembly.instantiateStreaming) {
                                                            t.next = 13;
                                                            break
                                                        }
                                                        return t.prev = 2, t.next = 5, WebAssembly.instantiateStreaming(e, n);
                                                    case 5:
                                                        return t.abrupt("return", t.sent);
                                                    case 8:
                                                        if (t.prev = 8, t.t0 = t.catch(2), "application/wasm" != e.headers.get("Content-Type")) {
                                                            t.next = 12;
                                                            break
                                                        }
                                                        throw t.t0;
                                                    case 12:
                                                        console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", t.t0);
                                                    case 13:
                                                        return t.next = 15, e.arrayBuffer();
                                                    case 15:
                                                        return r = t.sent, t.next = 18, WebAssembly.instantiate(r, n);
                                                    case 18:
                                                        return t.abrupt("return", t.sent);
                                                    case 19:
                                                        return t.next = 21, WebAssembly.instantiate(e, n);
                                                    case 21:
                                                        return i = t.sent, t.abrupt("return", i instanceof WebAssembly.Instance ? {
                                                            instance: i,
                                                            module: e
                                                        } : i);
                                                    case 23:
                                                    case"end":
                                                        return t.stop()
                                                }
                                            }), t, null, [[2, 8]])
                                        })));
                                        return function (e, n) {
                                            return t.apply(this, arguments)
                                        }
                                    }(), t.next = 6, e;
                                case 6:
                                    return t.t1 = t.sent, t.t2 = n, t.next = 10, (0, t.t0)(t.t1, t.t2);
                                case 10:
                                    return r = t.sent, u = r.instance, s = r.module, t.abrupt("return", (Sn = u.exports, er.__wbindgen_wasm_module = s, Sn));
                                case 14:
                                case"end":
                                    return t.stop()
                            }
                        }), t)
                    })))).apply(this, arguments)
                }

                var rr = function () {
                    function t() {
                        var e = this;
                        n(this, t), s(this, "id", null), s(this, "geometry", null), s(this, "collisionGeometry", null), s(this, "material", null), s(this, "_translation", [0, 0, 0]), s(this, "_rotation", [0, 0, 0]), s(this, "_scale", [1, 1, 1]), s(this, "_modelMatrix", null), s(this, "_modelIsDirty", !0), s(this, "rayCast", !0), s(this, "isInteractive", !1), s(this, "isSelectable", !1), s(this, "isHoverable", !1), s(this, "shouldDraw", !0), s(this, "setInteractive", (function (t, n, r) {
                            e.isInteractive = "boolean" == typeof t && t, e.isSelectable = "boolean" == typeof n && n, e.isHoverable = "boolean" == typeof r && r
                        })), this.id = "_" + Math.random().toString(36).substr(2, 9)
                    }

                    return u(t, [{
                        key: "update", value: function (t) {
                            var e = this;
                            t && Object.entries(t).forEach((function (t) {
                                e.material.uniforms[t[0]] = t[1]
                            }))
                        }
                    }, {
                        key: "isReady", get: function () {
                            return !(!this.geometry || !this.material) && this.geometry.isReady && this.material.isReady
                        }
                    }, {
                        key: "translation", get: function () {
                            return this._translation
                        }, set: function (t) {
                            this._translation = t, this._modelIsDirty = !0
                        }
                    }, {
                        key: "rotation", get: function () {
                            return this._rotation
                        }, set: function (t) {
                            this._rotation = t, this._modelIsDirty = !0
                        }
                    }, {
                        key: "scale", get: function () {
                            return this._scale
                        }, set: function (t) {
                            this._scale = t, this._modelIsDirty = !0
                        }
                    }, {
                        key: "modelMatrix", get: function () {
                            if (this._modelIsDirty) {
                                var t = D.identity(), e = D.translation(this._translation, t),
                                    n = D.scaling(this._scale);
                                this._modelMatrix = e, D.rotateX(e, this._rotation[0], this._modelMatrix), D.rotateY(e, this._rotation[1], this._modelMatrix), D.rotateZ(e, this._rotation[2], this._modelMatrix), D.multiply(this._modelMatrix, n, this._modelMatrix), this._modelIsDirty = !1
                            }
                            return this._modelMatrix
                        }
                    }]), t
                }(), ir = function (t) {
                    f(r, t);
                    var e = p(r);

                    function r() {
                        return n(this, r), e.apply(this, arguments)
                    }

                    return r
                }(rr), or = function () {
                    function t(e) {
                        var r = this;
                        n(this, t), s(this, "isInit", !1), s(this, "isDirty", !1), s(this, "needsResize", !1), s(this, "bufferInfo", void 0), s(this, "vertices", void 0), s(this, "init", (function (t) {
                            0 === Object.keys(r.vertices).length && r.vertices.constructor === Object || (Object.keys(r.vertices).forEach((function (e) {
                                "DYNAMIC_DRAW" === r.vertices[e].drawType && (r.vertices[e].drawType = t.DYNAMIC_DRAW)
                            })), r.bufferInfo = $(t, r.vertices), r.isInit = !0, r.isDirty = !1)
                        })), s(this, "resizeVertices", (function () {
                        })), s(this, "updateGeometry", (function (t, e) {
                            void 0 !== e && "number" == typeof e || (e = 0), Object.keys(t).forEach((function (n) {
                                for (var i = r.vertices[n].perInstance * e, o = 0; o < t[n].data.length; o += 1) r.vertices[n].data[o + i] = t[n].data[o]
                            })), r.isDirty = !0
                        })), s(this, "updateBuffers", (function (t) {
                            Object.keys(r.bufferInfo.attribs).forEach((function (e) {
                                !function (t, e, n, r) {
                                    n = Z(n), V(t, 34962, e.buffer, n, e.drawType)
                                }(t, r.bufferInfo.attribs[e], r.vertices[e])
                            })), r.isDirty = !1
                        })), s(this, "reloadBuffers", (function (t) {
                            r.deleteBuffers(t), r.bufferInfo = $(t, r.vertices), r.isDirty = !1, r.needsResize = !1
                        })), s(this, "deleteBuffers", (function (t) {
                            Object.keys(r.bufferInfo.attribs).forEach((function (e) {
                                t.deleteBuffer(e.buffer)
                            })), t.deleteBuffer(r.bufferInfo.indices), r.bufferInfo = {}
                        })), this.vertices = "sphere" === e ? Qt.createSphereVertices(1, 128, 128) : {}
                    }

                    return u(t, [{
                        key: "isReady", get: function () {
                            return this.isInit
                        }
                    }]), t
                }(), ar = {
                    vertex: "#define GLSLIFY 1\nattribute vec4 position;attribute vec3 normal;attribute vec2 texcoord;uniform mat4 u_worldViewProjection;uniform mat4 u_viewInverse;uniform mat4 u_model;uniform vec3 u_cameraPos;varying float vAlpha;varying vec2 vTexture;void main(){vec4 pos=u_worldViewProjection*u_model*position;vec4 transformedCamera=vec4(-0.5,1.0,-1.0,1.0)*u_worldViewProjection;vAlpha=pow((1.0+(dot(normal,normalize(transformedCamera.xyz))))/2.0,1.0);vTexture=texcoord;gl_Position=pos;}",
                    fragment: "precision mediump float;\n#define GLSLIFY 1\nuniform sampler2D uTexture;varying float vAlpha;varying vec2 vTexture;vec3 yellow=vec3(255.0/255.0,210.0/255.0,28.0/255.0);void main(){vec4 textureColor=texture2D(uTexture,vec2(vTexture.x-0.25,vTexture.y));float alpha=vAlpha+(1.0-vAlpha)*0.05;alpha*=0.9;gl_FragColor=vec4(textureColor.rgb*vAlpha,1.0);}"
                }, ur = {}, sr = function (t) {
                    f(r, t);
                    var e = p(r);

                    function r(t) {
                        var i, o;
                        return n(this, r), s(h(o = e.call(this)), "material", null), s(h(o), "init", (function (t, e) {
                            o.geometry = new or("sphere"), o.geometry.init(t);
                            var n = {surface: {src: o.textureSrc.surface, minMag: t.LINEAR, wrap: t.REPEAT}};
                            o.material.init(t), o.material.loadTextures(t, n, (function () {
                                o.material.uniforms.uTexture = o.material.textures.surface, e && e()
                            })), o.material.uniforms.uModelMatrix = o.modelMatrix
                        })), s(h(o), "createCollisionGeo", (function () {
                            o.collisionGeometry && o.collisionGeometry instanceof $n || (o.collisionGeometry = Qn.create_collision_geometry(o.geometry.vertices.position, o.geometry.vertices.texcoord, o.geometry.vertices.indices))
                        })), s(h(o), "rayCastFrom", (function (t) {
                            return o.collisionGeometry.raycast(t.origin, t.direction)
                        })), s(h(o), "hitTest", (function (t) {
                            return o.collisionGeometry.hitTest(t.origin, t.direction)
                        })), s(h(o), "onSelection", (function () {
                        })), s(h(o), "update", (function (t, e, n) {
                            v((i = h(o), m(r.prototype)), "update", i).call(i, e, n), o.material.uniforms.u_model = o.modelMatrix
                        })), s(h(o), "draw", (function (t) {
                            o.isReady && o.shouldDraw && (t.useProgram(o.material.programInfo.program), en(t, o.material.programInfo, o.geometry.bufferInfo), tn(o.material.programInfo, o.material.uniforms), t.drawElements(t.TRIANGLES, o.geometry.bufferInfo.numElements, t.UNSIGNED_SHORT, 0))
                        })), o.material = new Mn(ar), o.material.uniforms = ur, o.textureSrc = {surface: t}, o
                    }

                    return r
                }(ir), lr = function t(e, r) {
                    var i = this;
                    n(this, t), s(this, "isLoaded", !1), s(this, "ctx", void 0), s(this, "canvas", void 0), s(this, "image", void 0), s(this, "getIdFromLatLon", (function (t, e) {
                        if (i.isLoaded) {
                            var n = 1 - (t / 90 + 1) / 2, r = (e / 180 + 1) / 2 * i.canvas.width,
                                o = n * i.canvas.height;
                            return i.ctx.getImageData(r, o, 1, 1).data[0]
                        }
                    })), this.image = new Image, this.image.src = e, this.image.addEventListener("load", (function () {
                        i.canvas = document.createElement("canvas"), i.canvas.width = i.image.width, i.canvas.height = i.image.height, i.ctx = i.canvas.getContext("2d"), i.ctx.drawImage(i.image, 0, 0), i.isLoaded = !0, r && r()
                    }))
                }, cr = function t(e, r) {
                    var i = this;
                    n(this, t), s(this, "isInit", !1), s(this, "useImageLookup", !1), s(this, "imageLookup", null), s(this, "getIdFromLatLon", (function (t, e) {
                        return i.imageLookup.getIdFromLatLon(t, e)
                    })), s(this, "getFromId", (function (t) {
                        return i.data.find((function (e) {
                            return e.id === t
                        }))
                    })), s(this, "getFromCode", (function (t) {
                        return i.data.find((function (e) {
                            return e.code === t
                        }))
                    })), s(this, "getFromName", (function (t) {
                        return i.data.find((function (e) {
                            return e.name === t
                        }))
                    })), e instanceof Array && (this.data = e, r && (this.useImageLookup = !0, this.imageLookup = new lr(r, (function () {
                        i.isInit = !0
                    }))))
                }, fr = function () {
                    function t() {
                        n(this, t)
                    }

                    return u(t, null, [{
                        key: "radiansForPosition", value: function (t, e) {
                            return e > 0 ? t >= 0 ? Math.atan(t / e) : 2 * Math.PI + Math.atan(t / e) : e < 0 ? Math.PI + Math.atan(t / e) : t > 0 ? Math.PI / 2 : 3 * Math.PI / 2
                        }
                    }, {
                        key: "latLonFromWorld", value: function (t) {
                            var e = yn();
                            An(e, t);
                            for (var n = Math.asin(e[1]), r = this.radiansForPosition(e[0], e[2]), i = 180 * n / Math.PI, o = 180 * r / Math.PI; o > 180;) o -= 360;
                            return {lat: i, lon: o}
                        }
                    }, {
                        key: "distanceBetweenPoints", value: function (t, e) {
                            var n = function (t) {
                                    return t * (Math.PI / 180)
                                }, r = n(t.lat), i = n(e.lat), o = n(e.lat - t.lat), a = n(e.lon - t.lon),
                                u = Math.sin(o / 2) * Math.sin(o / 2) + Math.cos(r) * Math.cos(i) * Math.sin(a / 2) * Math.sin(a / 2);
                            return 2 * Math.atan2(Math.sqrt(u), Math.sqrt(1 - u)) * 6371
                        }
                    }, {
                        key: "worldFromLatLon", value: function (t, e, n) {
                            var r = n || 0, i = t * Math.PI / 180, o = e * Math.PI / 180, a = Math.cos(i),
                                u = Math.sin(i), s = _n(Math.sin(o) * a, u, Math.cos(o) * a), l = yn();
                            return An(l, s), bn(s, s, wn(l, l, r)), s
                        }
                    }, {
                        key: "dotBetweenLatLon", value: function (e, n) {
                            return Cn(t.worldFromLatLon(e[0], e[1]), t.worldFromLatLon(n[0], n[1]))
                        }
                    }, {
                        key: "hexToRGB", value: function (t, e) {
                            var n = 0, r = 0, i = 0, o = !1 !== e;
                            return 4 === t.length ? (n = "0x".concat(t[1]).concat(t[1]), r = "0x".concat(t[2]).concat(t[2]), i = "0x".concat(t[3]).concat(t[3])) : 7 === t.length && (n = "0x".concat(t[1]).concat(t[2]), r = "0x".concat(t[3]).concat(t[4]), i = "0x".concat(t[5]).concat(t[6])), o ? (n /= 255, r /= 255, i /= 255) : (n = parseInt(n, 16), r = parseInt(r, 16), i = parseInt(i, 16)), [n, r, i]
                        }
                    }, {
                        key: "hexToRGBA", value: function (t, e, n) {
                            var r = this.hexToRGB(t, n), i = !1 !== n ? e : 255 * e;
                            return [r[0], r[1], r[2], i]
                        }
                    }, {
                        key: "isSubSet", value: function (t, e) {
                            return t.every((function (t) {
                                return void 0 !== e.find((function (e) {
                                    return e === t
                                }))
                            }))
                        }
                    }, {
                        key: "lerpColor", value: function (t, e, n) {
                            var r = this.hexToRGB(t), i = this.hexToRGB(e), o = _n(r[0], r[1], r[2]),
                                a = _n(i[0], i[1], i[2]), u = yn();
                            return Tn(u, o, a, n), u
                        }
                    }]), t
                }();
                s(fr, "RGBToHex", (function (t, e, n) {
                    var r = t.toString(16), i = e.toString(16), o = n.toString(16);
                    return 1 === r.length && (r = "0".concat(r)), 1 === i.length && (i = "0".concat(i)), 1 === o.length && (o = "0".concat(o)), "#".concat(r).concat(i).concat(o)
                }));
                var mr = function () {
                    function t(e, r, i, o) {
                        var a = this;
                        n(this, t), s(this, "time", void 0), s(this, "delay", 0), s(this, "ease", (function (t) {
                            return t
                        })), s(this, "onComplete", (function (t) {
                        })), s(this, "onUpdate", (function (t) {
                        })), s(this, "endAt", void 0), s(this, "isNumeric", !1), s(this, "toObj", null), s(this, "fromObj", null), s(this, "currentObj", null), s(this, "mechanism", (function () {
                            if (a.isRunning) {
                                if (a.stopped) return !1;
                                var t = a.endAt - (new Date).getTime();
                                t <= 0 ? (clearTimeout(a.playTimeout), a.stopped = !0, a.advanceFrame(1, 1), a.isNumeric ? a.onUpdate(a.currentObj.value) : a.onUpdate(a.currentObj), a.onComplete(!0), a.cleanup()) : (a.advanceFrame(a.time - t, a.time), a.isNumeric ? a.onUpdate(a.currentObj.value) : a.onUpdate(a.currentObj))
                            }
                        })), o = o || {}, this.time = i, this.endAt = (new Date).getTime() + this.time, this.isNumeric = !isNaN(e), this.isNumeric ? (this.toObj = {value: r}, this.fromObj = {value: e}) : (this.toObj = c({}, r), this.fromObj = c({}, e)), this.currentObj = c({}, this.fromObj), this.id = t.getId(), t.tweens[this.id] = this, o.onComplete && (this.onComplete = o.onComplete, delete o.onComplete), o.onUpdate && (this.onUpdate = o.onUpdate, delete o.onUpdate), o.ease && (this.ease = o.ease, delete o.ease), o.delay && (this.endAt += o.delay, this.delay = o.delay, delete o.delay), this.playTimeout = setTimeout((function () {
                            a.play()
                        }), this.delay)
                    }

                    return u(t, [{
                        key: "play", value: function () {
                            this.endAt = (new Date).getTime() + this.time, this.isRunning = !0, t.isRunning || (t.isRunning = !0, requestAnimationFrame(t.mechanism))
                        }
                    }, {
                        key: "stop", value: function () {
                            clearTimeout(this.playTimeout), this.stopped = !0, this.onComplete(!1), this.cleanup()
                        }
                    }, {
                        key: "currentValue", value: function () {
                            return this.isNumeric ? this.currentObj.value : this.currentObj
                        }
                    }, {
                        key: "cleanup", value: function () {
                            this.isRunning = !1, delete t.tweens[this.id], 0 === Object.keys(t.tweens).length && (t.isRunning = !1)
                        }
                    }, {
                        key: "advanceFrame", value: function (t, e) {
                            var n = 0 !== e ? t / e : 1;
                            for (var r in n = this.ease(n), this.toObj) {
                                var i = this.fromObj[r], o = this.toObj[r] - i;
                                this.currentObj[r] = i + o * n
                            }
                        }
                    }]), t
                }();
                mr.id = 0, mr.tweens = {}, mr.killTweensOf = function (t) {
                    for (var e in mr.tweens) {
                        var n = mr.tweens[e];
                        n.obj === t && n.stop()
                    }
                }, mr.getId = function () {
                    return ++mr.id
                }, mr.isRunning = !1, mr.mechanism = function () {
                    for (var t in mr.tweens) mr.tweens[t].mechanism();
                    mr.isRunning && requestAnimationFrame(mr.mechanism)
                };
                var hr = function t(e, r) {
                    var i = this;
                    n(this, t), s(this, "width", 4), s(this, "height", 4), s(this, "channels", 4), s(this, "elementLength", 1), s(this, "data", void 0), s(this, "texture", void 0), s(this, "isInit", !1), s(this, "init", (function (t) {
                        var e = {width: i.width, height: i.height, mag: t.NEAREST, min: t.NEAREST, src: i.data};
                        i.texture = Me(t, e), i.isInit = !0
                    })), s(this, "updatePixel", (function (t, e, n, r) {
                        if (i.isInit) {
                            var o = new Uint8Array(e);
                            t.bindTexture(t.TEXTURE_2D, i.texture), t.texSubImage2D(t.TEXTURE_2D, 0, r, n, 1, 1, t.RGBA, t.UNSIGNED_BYTE, o)
                        }
                    })), s(this, "updatePixelId", (function (t, e, n) {
                        var r = Math.floor(n / i.width), o = n - r * i.width;
                        e.forEach((function (t, e) {
                            i.data[4 * n + e] = t
                        })), i.updatePixel(t, e, r, o)
                    })), s(this, "updateSubrect", (function (t, e) {
                        i.isInit && (t.bindTexture(t.TEXTURE_2D, i.texture), t.texSubImage2D(t.TEXTURE_2D, 0, 0, 0, i.width, i.height, t.RGBA, t.UNSIGNED_BYTE, e))
                    })), s(this, "getIdColor", (function (t) {
                        return i.data.slice(4 * t, 4 * t + 4)
                    })), this.width = e || this.width, this.height = r || this.height, this.data = new Uint8Array(this.width * this.height * this.channels).fill(0)
                }, dr = {
                    vertex: "#define GLSLIFY 1\nattribute vec4 position;attribute vec3 normal;attribute vec2 texcoord;uniform mat4 u_worldViewProjection;uniform mat4 u_viewInverse;uniform mat4 u_model;uniform vec3 u_cameraPos;varying float vAlpha;varying vec2 vTexture;void main(){vec4 pos=u_worldViewProjection*u_model*position;vAlpha=dot(normalize(u_cameraPos),normalize(position.xyz));vTexture=texcoord;gl_Position=pos;}",
                    fragment: "precision mediump float;\n#define GLSLIFY 1\nuniform sampler2D u_inactive;uniform sampler2D u_active;uniform sampler2D u_id;uniform sampler2D u_data;uniform float u_idAnimateIn;uniform float u_idAnimateOut;uniform float u_animateIn;uniform float u_animateOut;uniform vec3 u_animateHover;uniform vec3 u_animatable0;uniform vec3 u_animatable1;uniform vec3 u_animatable2;uniform vec3 u_animatable3;uniform vec3 u_animatable4;uniform vec3 u_animatable5;varying float vAlpha;varying vec2 vTexture;float when_eq(float x,float y){return 1.0-abs(sign(x-y));}float when_lt(float x,float y){return max(sign(y-x),0.0);}vec2 get_data_coords_from_id(float id){float width=16.0;float height=16.0;float w_pixel=1.0/width;float h_pixel=1.0/height;float row=floor(id/width);float col=id-(row*width);return vec2(col*w_pixel,row*h_pixel);}void main(){vec4 inactiveColor=texture2D(u_inactive,vec2(vTexture.x-0.25,vTexture.y));vec4 activeColor=texture2D(u_active,vec2(vTexture.x-0.25,vTexture.y));vec4 idColor=texture2D(u_id,vec2(vTexture.x-0.25,vTexture.y));vec4 dataColor=texture2D(u_data,get_data_coords_from_id(floor(idColor.r*255.0)))*idColor.a;vec3 base=inactiveColor.rgb*(1.0-dataColor.a)+dataColor.rgb*(dataColor.a);vec3 color=base;gl_FragColor=vec4(color,1.0);}"
                }, pr = {}, vr = function (t) {
                    f(r, t);
                    var e = p(r);

                    function r(t) {
                        var i, o;
                        return n(this, r), s(h(o = e.call(this)), "material", null), s(h(o), "lookup", null), s(h(o), "currentSelection", -1), s(h(o), "previousSelection", -1), s(h(o), "inAnimation", null), s(h(o), "outAnimation", null), s(h(o), "currentHover", -1), s(h(o), "hoverables", []), s(h(o), "hoverableUniforms", ["u_animatable0", "u_animatable1", "u_animatable2", "u_animatable3", "u_animatable4", "u_animatable5"]), s(h(o), "inAnimations", {}), s(h(o), "outAnimations", {}), s(h(o), "highlighedCountries", []), s(h(o), "selection0", 236), s(h(o), "selection1", 144), s(h(o), "current", 236), s(h(o), "dataTexture", void 0), s(h(o), "dataTextureSize", 16), s(h(o), "updateCMDs", []), s(h(o), "highlightAnimationProps", {
                            start: 0,
                            stop: 1,
                            duration: 1e3,
                            onUpdate: function (t) {
                                o.material.uniforms.u_animateIn = t
                            }
                        }), s(h(o), "init", (function (t, e) {
                            o.geometry = new or("sphere"), o.geometry.init(t);
                            var n = {
                                inactive: {src: o.textureSrc.inactive, minMag: t.LINEAR},
                                active: {src: o.textureSrc.active, minMag: t.LINEAR},
                                id: {src: o.textureSrc.id, minMag: t.NEAREST}
                            };
                            o.material.init(t), o.material.loadTextures(t, n, (function () {
                                o.material.uniforms.u_inactive = o.material.textures.inactive, o.material.uniforms.u_active = o.material.textures.active, o.material.uniforms.u_id = o.material.textures.id, o.dataTexture.init(t), o.material.uniforms.u_data = o.dataTexture.texture, e && e()
                            }))
                        })), s(h(o), "getValueForId", (function (t) {
                            return o.lookup.getFromId(t)
                        })), s(h(o), "getValueForCode", (function (t) {
                            return o.lookup.getFromCode(t)
                        })), s(h(o), "getValueForName", (function (t) {
                            return o.lookup.getFromName(t)
                        })), s(h(o), "setIdColor", (function (t, e, n) {
                            var r = void 0 === n ? 1 : n, i = fr.hexToRGBA(e, r, !1);
                            o.updateCMDs.push((function (e) {
                                o.dataTexture.updatePixelId(e, i, t)
                            }))
                        })), s(h(o), "getIdColor", (function (t) {
                            var e = o.dataTexture.getIdColor(t);
                            return {color: fr.RGBToHex(e[0], e[1], e[2]), alpha: e[3] / 255}
                        })), s(h(o), "createCollisionGeo", (function () {
                            o.collisionGeometry && o.collisionGeometry instanceof $n || (o.collisionGeometry = Qn.create_collision_geometry(o.geometry.vertices.position, o.geometry.vertices.texcoord, o.geometry.vertices.indices))
                        })), s(h(o), "rayCastFrom", (function (t) {
                            return o.collisionGeometry.raycast(t.origin, t.direction)
                        })), s(h(o), "hitTest", (function (t) {
                            return o.collisionGeometry.hitTest(t.origin, t.direction)
                        })), s(h(o), "onSelectionCB", (function () {
                        })), s(h(o), "onSelection", (function (t, e, n) {
                            var r = fr.latLonFromWorld(n.point);
                            return o.current = o.lookup.getIdFromLatLon(r.lat, r.lon), {
                                id: o.current,
                                name: o.lookup.getFromId(o.current)
                            }
                        })), s(h(o), "onHover", (function (t) {
                        })), s(h(o), "update", (function (t, e, n) {
                            v((i = h(o), m(r.prototype)), "update", i).call(i, e, n), o.material.uniforms.u_model = o.modelMatrix, o.updateCMDs.forEach((function (e) {
                                e(t)
                            })), o.updateCMDs = []
                        })), s(h(o), "draw", (function (t) {
                            o.isReady && o.shouldDraw && (t.useProgram(o.material.programInfo.program), en(t, o.material.programInfo, o.geometry.bufferInfo), tn(o.material.programInfo, o.material.uniforms), t.drawElements(t.TRIANGLES, o.geometry.bufferInfo.numElements, t.UNSIGNED_SHORT, 0))
                        })), s(h(o), "setCountryHover", (function (t) {
                        })), s(h(o), "highlightId", (function (t, e, n, r, i) {
                            if (!(o.inAnimations[t] instanceof mr)) {
                                var a = e || "#ffffff", u = n || 1, s = r || !0, l = 0;
                                o.outAnimations[t] instanceof mr && (l = o.outAnimations[t].currentValue(), o.outAnimations[t].stop());
                                var c = i || {};
                                if (c.duration = c.duration || 500, c.onComplete = c.onComplete || function () {
                                }, c.outDuration = c.outDuration || c.duration, c.onOutComplete = c.onOutComplete || function () {
                                }, s) {
                                    var f = {duration: c.outDuration, onComplete: c.onOutComplete};
                                    o.highlighedCountries.forEach((function (e) {
                                        e !== t && o.unhighlightId(e, f)
                                    }))
                                }
                                o.inAnimations[t] = new mr(l, u, c.duration, {
                                    onUpdate: function (e) {
                                        o.setIdColor(t, a, e)
                                    }, onComplete: function (e) {
                                        delete o.inAnimations[t], c.onComplete(e)
                                    }
                                }), o.highlighedCountries.push(t)
                            }
                        })), s(h(o), "unhighlightId", (function (t, e) {
                            if (-1 !== o.highlighedCountries.indexOf(t) && !(o.outAnimations[t] instanceof mr)) {
                                var n = e || {};
                                n.duration = n.duration || 500, n.onComplete = n.onComplete || function () {
                                };
                                var r = o.getIdColor(t), i = r.alpha;
                                o.inAnimations[t] instanceof mr && (i = o.inAnimations[t].currentValue(), o.inAnimations[t].stop()), o.outAnimations[t] = new mr(i, 0, n.duration, {
                                    onUpdate: function (e) {
                                        o.setIdColor(t, r.color, e)
                                    }, onComplete: function (e) {
                                        if (e) {
                                            var r = o.highlighedCountries.indexOf(t);
                                            o.highlighedCountries.splice(r, 1)
                                        }
                                        delete o.outAnimations[t], n.onComplete(e, t)
                                    }
                                })
                            }
                        })), s(h(o), "addDataset", (function (t) {
                            o.lookup = new cr(t, o.textureSrc.id)
                        })), o.material = new Mn(dr), o.material.uniforms = pr, o.textureSrc = {
                            inactive: t.inactive,
                            active: t.active,
                            id: t.id
                        }, o.dataTexture = new hr(o.dataTextureSize, o.dataTextureSize), o
                    }

                    return r
                }(ir), gr = function () {
                    function t() {
                        var e = this;
                        n(this, t), s(this, "springStrength", .2), s(this, "drag", .875), s(this, "poleBufferThreshold", 18), s(this, "panDeltaScale", 42), s(this, "velocityDeltaScale", 750), s(this, "_ambientController", null), s(this, "_animationController", null), s(this, "_interactionController", null), s(this, "_currentLatLonAlt", [0, 0, 4]), s(this, "_interactionStartLatLonAlt", null), s(this, "_interactionTargetLatLonAlt", null), s(this, "_latLonVelocity", [0, 0, 0]), s(this, "_ambientLonDirection", 1), s(this, "_ambientLatIn", 0), s(this, "_ambientLatDirection", 1), s(this, "_prevTime", 0), s(this, "_rotBounded", (function (t) {
                            return [Math.max(Math.min(t[0], 90), -90), t[1]]
                        })), s(this, "_rotSprung", (function (t) {
                            var n = .499 * Math.PI, r = .499 * -Math.PI, i = (90 - e.poleBufferThreshold) / 90,
                                o = n * i, a = r * i, u = t[0] * (Math.PI / 180), s = function (t) {
                                    return Math.sin(t * Math.PI / 2)
                                }, l = u;
                            if (u > o) {
                                var c = u - o, f = n - o;
                                l = o + f * s(Math.min(c / f, 1))
                            }
                            if (u < a) {
                                var m = u - a, h = r - a;
                                l = a + h * s(Math.min(m / h, 1))
                            }
                            return [l * (180 / Math.PI), t[1]]
                        })), s(this, "_frustumDist", (function (t, e) {
                            return .5 * t / Math.tan(.5 * e * (Math.PI / 180))
                        })), s(this, "_rotForDelta", (function (t) {
                            var n = g(e._currentLatLonAlt, 3)[2], r = t[0] * (e.pointsPerRadian * (n / e.zFullWidth)),
                                i = t[1] * (e.pointsPerRadian * (n / e.zFullWidth)), o = 180 / Math.PI;
                            return [-r * o, i * o]
                        })), s(this, "_calcAmbientLatIn", (function (t) {
                            var n = t * (Math.PI / 180) / (.5 * Math.PI) * (90 / (e._ambientController.latitudeVariance / 2));
                            return Math.abs(n) > 1 && (n /= Math.abs(n)), Math.asin(n)
                        }))
                    }

                    return u(t, [{
                        key: "register", value: function (t, e, n) {
                            this._ambientController = t, this._animationController = e, this._interactionController = n
                        }
                    }, {
                        key: "resize", value: function (t, e, n, r) {
                            this.pointsPerRadian = Math.PI / (t / window.devicePixelRatio), this.camFov = r, this.camAspect = n, this.zFullWidth = this._frustumDist(1 / this.camAspect * 2, this.camFov)
                        }
                    }, {
                        key: "setLatLonAlt", value: function (t, e, n) {
                            this.setLatLon(t, e), this.setAlt(n)
                        }
                    }, {
                        key: "setLatLon", value: function (t, e) {
                            for (this._currentLatLonAlt = [t, e, this._currentLatLonAlt[2]], this._ambientLatIn = this._calcAmbientLatIn(t); this._currentLatLonAlt[1] > 180;) this._currentLatLonAlt[1] -= 360;
                            for (; this._currentLatLonAlt[1] < -180;) this._currentLatLonAlt[1] += 360;
                            this._animationController.cancelLatLon()
                        }
                    }, {
                        key: "setAlt", value: function (t) {
                            this._currentLatLonAlt = [this._currentLatLonAlt[0], this._currentLatLonAlt[1], t], this._animationController.cancelAlt()
                        }
                    }, {
                        key: "update", value: function (t, e) {
                            var n = t - this._prevTime;
                            this.fov = e, this._updateAlt(n), this._updateLatLon(n), this._prevTime = t
                        }
                    }, {
                        key: "startPan", value: function (t) {
                            for (; this._currentLatLonAlt[1] > 180;) this._currentLatLonAlt[1] -= 360;
                            for (; this._currentLatLonAlt[1] < -180;) this._currentLatLonAlt[1] += 360;
                            this._interactionStartLatLonAlt = y(this._currentLatLonAlt);
                            var e = this.panDeltaScale / devicePixelRatio, n = [t.deltaY * e, t.deltaX * e],
                                r = g(this._currentLatLonAlt, 3)[2],
                                i = this._rotForDelta([this._interactionStartLatLonAlt[0] - n[0], this._interactionStartLatLonAlt[1] - n[1]]);
                            this._interactionTargetLatLonAlt = [this._interactionStartLatLonAlt[0] + i[0], this._interactionStartLatLonAlt[1] + i[1], r], this._latLonVelocity = [0, 0, 0]
                        }
                    }, {
                        key: "continuePan", value: function (t) {
                            if (this._interactionStartLatLonAlt) {
                                var e = this.panDeltaScale / devicePixelRatio, n = [t.deltaY * e, t.deltaX * e],
                                    r = this._rotForDelta([this._interactionStartLatLonAlt[0] - n[0], this._interactionStartLatLonAlt[1] - n[1]]),
                                    i = this.velocityDeltaScale / devicePixelRatio,
                                    o = this._rotForDelta([t.velocityY, t.velocityX]);
                                this._latLonVelocity = [-o[0] * i, -o[1] * i], this._ambientLonDirection = o[1] < 0 ? 1 : -1;
                                var a = g(this._interactionTargetLatLonAlt, 3)[2],
                                    u = this._rotBounded([this._interactionStartLatLonAlt[0] + r[0], this._interactionStartLatLonAlt[1] + r[1]]);
                                this._interactionTargetLatLonAlt = [u[0], u[1], a], this._lastGestureChange = t.timeStamp
                            }
                        }
                    }, {
                        key: "endPan", value: function (t) {
                            this._interactionStartLatLonAlt = null, this._interactionTargetLatLonAlt = null;
                            var e = t.timeStamp - this._lastGestureChange;
                            this._ambientLatIn = this._calcAmbientLatIn(this._currentLatLonAlt[0]), e > .1 && (this._latLonVelocity = [0, 0])
                        }
                    }, {
                        key: "_updateAlt", value: function () {
                            if (this._animationController.isAnimatingAlt) {
                                var t = g(this._currentLatLonAlt, 2), e = t[0], n = t[1];
                                this._currentLatLonAlt = [e, n, this._animationController.currentAlt]
                            }
                        }
                    }, {
                        key: "_updateLatLon", value: function (t) {
                            var e = g(this._currentLatLonAlt, 3), n = e[0], r = e[1], i = e[2];
                            if (this._interactionTargetLatLonAlt) {
                                var o = g(this._interactionTargetLatLonAlt, 2), a = [o[0] - n, o[1] - r];
                                this._currentLatLonAlt = [n + a[0] * this.springStrength, r + a[1] * this.springStrength, i]
                            } else {
                                var u = this._rotBounded([n + this._latLonVelocity[0], r + this._latLonVelocity[1]]);
                                this._currentLatLonAlt = [u[0], u[1], i];
                                var s = 90 - this.poleBufferThreshold, l = -90 + this.poleBufferThreshold;
                                if (u[0] > s) {
                                    var c = u[0] - s;
                                    this._currentLatLonAlt[0] = s + .95 * c
                                }
                                if (u[0] < l) {
                                    var f = u[0] - l;
                                    this._currentLatLonAlt[0] = l + .95 * f
                                }
                                if (this._latLonVelocity = [this._latLonVelocity[0] * this.drag, this._latLonVelocity[1] * this.drag], this._ambientController.isEnabled) {
                                    var m = this._ambientController.ambientStrength, h = this._ambientLonDirection,
                                        d = this._ambientController.longitudeSpeed, p = g(this._currentLatLonAlt, 2),
                                        v = p[0], y = p[1];
                                    y += d * h * m, Math.abs(this._latLonVelocity[0]) > 1e-4 && (this._ambientLatIn = this._calcAmbientLatIn(n));
                                    var _ = this._ambientController.latitudeSpeed;
                                    this._ambientLatIn += t * this._ambientLatDirection * _ * m;
                                    var b = this._ambientController.latitudeVariance / 2;
                                    v += (Math.sin(this._ambientLatIn) * b - v) * m * m, this._currentLatLonAlt = [v, y, i]
                                }
                                if (this._animationController.isAnimatingLatLon) {
                                    var x = this._animationController.currentLatLon;
                                    this._currentLatLonAlt = [x[0], x[1], i]
                                } else {
                                    for (; this._currentLatLonAlt[1] > 180;) this._currentLatLonAlt[1] -= 360;
                                    for (; this._currentLatLonAlt[1] < -180;) this._currentLatLonAlt[1] += 360
                                }
                            }
                        }
                    }, {
                        key: "currentLatLonAlt", get: function () {
                            return y(this._currentLatLonAlt)
                        }
                    }]), t
                }();

                function yr(t, e) {
                    return t(e = {exports: {}}, e.exports), e.exports
                }

                "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== i || "undefined" != typeof self && self, yr((function (t) {
                    !function (n, r, i, o) {
                        function a(t, e, n) {
                            return setTimeout(f(t, n), e)
                        }

                        function u(t, e, n) {
                            return !!Array.isArray(t) && (s(t, n[e], n), !0)
                        }

                        function s(t, e, n) {
                            var r;
                            if (t) if (t.forEach) t.forEach(e, n); else if (t.length !== o) for (r = 0; r < t.length;) e.call(n, t[r], r, t), r++; else for (r in t) t.hasOwnProperty(r) && e.call(n, t[r], r, t)
                        }

                        function l(t, e, r) {
                            var i = "DEPRECATED METHOD: " + e + "\n" + r + " AT \n";
                            return function () {
                                var e = new Error("get-stack-trace"),
                                    r = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                                    o = n.console && (n.console.warn || n.console.log);
                                return o && o.call(n.console, i, r), t.apply(this, arguments)
                            }
                        }

                        function c(t, e, n) {
                            var r, i = e.prototype;
                            (r = t.prototype = Object.create(i)).constructor = t, r._super = i, n && ot(r, n)
                        }

                        function f(t, e) {
                            return function () {
                                return t.apply(e, arguments)
                            }
                        }

                        function m(t, n) {
                            return e(t) == st ? t.apply(n && n[0] || o, n) : t
                        }

                        function h(t, e) {
                            return t === o ? e : t
                        }

                        function d(t, e, n) {
                            s(y(e), (function (e) {
                                t.addEventListener(e, n, !1)
                            }))
                        }

                        function p(t, e, n) {
                            s(y(e), (function (e) {
                                t.removeEventListener(e, n, !1)
                            }))
                        }

                        function v(t, e) {
                            for (; t;) {
                                if (t == e) return !0;
                                t = t.parentNode
                            }
                            return !1
                        }

                        function g(t, e) {
                            return t.indexOf(e) > -1
                        }

                        function y(t) {
                            return t.trim().split(/\s+/g)
                        }

                        function _(t, e, n) {
                            if (t.indexOf && !n) return t.indexOf(e);
                            for (var r = 0; r < t.length;) {
                                if (n && t[r][n] == e || !n && t[r] === e) return r;
                                r++
                            }
                            return -1
                        }

                        function b(t) {
                            return Array.prototype.slice.call(t, 0)
                        }

                        function x(t, e, n) {
                            for (var r = [], i = [], o = 0; o < t.length;) {
                                var a = e ? t[o][e] : t[o];
                                _(i, a) < 0 && r.push(t[o]), i[o] = a, o++
                            }
                            return n && (r = e ? r.sort((function (t, n) {
                                return t[e] > n[e]
                            })) : r.sort()), r
                        }

                        function w(t, e) {
                            for (var n, r, i = e[0].toUpperCase() + e.slice(1), a = 0; a < at.length;) {
                                if ((r = (n = at[a]) ? n + i : e) in t) return r;
                                a++
                            }
                            return o
                        }

                        function A(t) {
                            var e = t.ownerDocument || t;
                            return e.defaultView || e.parentWindow || n
                        }

                        function C(t, e) {
                            var n = this;
                            this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function (e) {
                                m(t.options.enable, [t]) && n.handler(e)
                            }, this.init()
                        }

                        function T(t, e, n) {
                            var r = n.pointers.length, i = n.changedPointers.length, o = e & xt && r - i == 0,
                                a = e & (At | Ct) && r - i == 0;
                            n.isFirst = !!o, n.isFinal = !!a, o && (t.session = {}), n.eventType = e, function (t, e) {
                                var n = t.session, r = e.pointers, i = r.length;
                                n.firstInput || (n.firstInput = P(e)), i > 1 && !n.firstMultiple ? n.firstMultiple = P(e) : 1 === i && (n.firstMultiple = !1);
                                var o = n.firstInput, a = n.firstMultiple, u = a ? a.center : o.center,
                                    s = e.center = S(r);
                                e.timeStamp = ft(), e.deltaTime = e.timeStamp - o.timeStamp, e.angle = z(u, s), e.distance = M(u, s), function (t, e) {
                                    var n = e.center, r = t.offsetDelta || {}, i = t.prevDelta || {},
                                        o = t.prevInput || {};
                                    e.eventType !== xt && o.eventType !== At || (i = t.prevDelta = {
                                        x: o.deltaX || 0,
                                        y: o.deltaY || 0
                                    }, r = t.offsetDelta = {
                                        x: n.x,
                                        y: n.y
                                    }), e.deltaX = i.x + (n.x - r.x), e.deltaY = i.y + (n.y - r.y)
                                }(n, e), e.offsetDirection = L(e.deltaX, e.deltaY);
                                var l = E(e.deltaTime, e.deltaX, e.deltaY);
                                e.overallVelocityX = l.x, e.overallVelocityY = l.y, e.overallVelocity = ct(l.x) > ct(l.y) ? l.x : l.y, e.scale = a ? function (t, e) {
                                    return M(e[0], e[1], Rt) / M(t[0], t[1], Rt)
                                }(a.pointers, r) : 1, e.rotation = a ? function (t, e) {
                                    return z(e[1], e[0], Rt) + z(t[1], t[0], Rt)
                                }(a.pointers, r) : 0, e.maxPointers = n.prevInput ? e.pointers.length > n.prevInput.maxPointers ? e.pointers.length : n.prevInput.maxPointers : e.pointers.length, I(n, e);
                                var c = t.element;
                                v(e.srcEvent.target, c) && (c = e.srcEvent.target), e.target = c
                            }(t, n), t.emit("hammer.input", n), t.recognize(n), t.session.prevInput = n
                        }

                        function I(t, e) {
                            var n, r, i, a, u = t.lastInterval || e, s = e.timeStamp - u.timeStamp;
                            if (e.eventType != Ct && (s > bt || u.velocity === o)) {
                                var l = e.deltaX - u.deltaX, c = e.deltaY - u.deltaY, f = E(s, l, c);
                                r = f.x, i = f.y, n = ct(f.x) > ct(f.y) ? f.x : f.y, a = L(l, c), t.lastInterval = e
                            } else n = u.velocity, r = u.velocityX, i = u.velocityY, a = u.direction;
                            e.velocity = n, e.velocityX = r, e.velocityY = i, e.direction = a
                        }

                        function P(t) {
                            for (var e = [], n = 0; n < t.pointers.length;) e[n] = {
                                clientX: lt(t.pointers[n].clientX),
                                clientY: lt(t.pointers[n].clientY)
                            }, n++;
                            return {timeStamp: ft(), pointers: e, center: S(e), deltaX: t.deltaX, deltaY: t.deltaY}
                        }

                        function S(t) {
                            var e = t.length;
                            if (1 === e) return {x: lt(t[0].clientX), y: lt(t[0].clientY)};
                            for (var n = 0, r = 0, i = 0; e > i;) n += t[i].clientX, r += t[i].clientY, i++;
                            return {x: lt(n / e), y: lt(r / e)}
                        }

                        function E(t, e, n) {
                            return {x: e / t || 0, y: n / t || 0}
                        }

                        function L(t, e) {
                            return t === e ? Tt : ct(t) >= ct(e) ? 0 > t ? It : Pt : 0 > e ? St : Et
                        }

                        function M(t, e, n) {
                            n || (n = Ft);
                            var r = e[n[0]] - t[n[0]], i = e[n[1]] - t[n[1]];
                            return Math.sqrt(r * r + i * i)
                        }

                        function z(t, e, n) {
                            n || (n = Ft);
                            var r = e[n[0]] - t[n[0]], i = e[n[1]] - t[n[1]];
                            return 180 * Math.atan2(i, r) / Math.PI
                        }

                        function F() {
                            this.evEl = kt, this.evWin = Ot, this.pressed = !1, C.apply(this, arguments)
                        }

                        function R() {
                            this.evEl = Gt, this.evWin = Nt, C.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
                        }

                        function D() {
                            this.evTarget = Vt, this.evWin = Wt, this.started = !1, C.apply(this, arguments)
                        }

                        function k(t, e) {
                            var n = b(t.touches), r = b(t.changedTouches);
                            return e & (At | Ct) && (n = x(n.concat(r), "identifier", !0)), [n, r]
                        }

                        function O() {
                            this.evTarget = Yt, this.targetIds = {}, C.apply(this, arguments)
                        }

                        function j(t, e) {
                            var n = b(t.touches), r = this.targetIds;
                            if (e & (xt | wt) && 1 === n.length) return r[n[0].identifier] = !0, [n, n];
                            var i, o, a = b(t.changedTouches), u = [], s = this.target;
                            if (o = n.filter((function (t) {
                                return v(t.target, s)
                            })), e === xt) for (i = 0; i < o.length;) r[o[i].identifier] = !0, i++;
                            for (i = 0; i < a.length;) r[a[i].identifier] && u.push(a[i]), e & (At | Ct) && delete r[a[i].identifier], i++;
                            return u.length ? [x(o.concat(u), "identifier", !0), u] : void 0
                        }

                        function B() {
                            C.apply(this, arguments);
                            var t = f(this.handler, this);
                            this.touch = new O(this.manager, t), this.mouse = new F(this.manager, t), this.primaryTouch = null, this.lastTouches = []
                        }

                        function G(t, e) {
                            t & xt ? (this.primaryTouch = e.changedPointers[0].identifier, N.call(this, e)) : t & (At | Ct) && N.call(this, e)
                        }

                        function N(t) {
                            var e = t.changedPointers[0];
                            if (e.identifier === this.primaryTouch) {
                                var n = {x: e.clientX, y: e.clientY};
                                this.lastTouches.push(n);
                                var r = this.lastTouches;
                                setTimeout((function () {
                                    var t = r.indexOf(n);
                                    t > -1 && r.splice(t, 1)
                                }), Xt)
                            }
                        }

                        function U(t) {
                            for (var e = t.srcEvent.clientX, n = t.srcEvent.clientY, r = 0; r < this.lastTouches.length; r++) {
                                var i = this.lastTouches[r], o = Math.abs(e - i.x), a = Math.abs(n - i.y);
                                if (qt >= o && qt >= a) return !0
                            }
                            return !1
                        }

                        function V(t, e) {
                            this.manager = t, this.set(e)
                        }

                        function W(t) {
                            this.options = ot({}, this.defaults, t || {}), this.id = dt++, this.manager = null, this.options.enable = h(this.options.enable, !0), this.state = re, this.simultaneous = {}, this.requireFail = []
                        }

                        function H(t) {
                            return t & se ? "cancel" : t & ae ? "end" : t & oe ? "move" : t & ie ? "start" : ""
                        }

                        function Y(t) {
                            return t == Et ? "down" : t == St ? "up" : t == It ? "left" : t == Pt ? "right" : ""
                        }

                        function X(t, e) {
                            var n = e.manager;
                            return n ? n.get(t) : t
                        }

                        function q() {
                            W.apply(this, arguments)
                        }

                        function J() {
                            q.apply(this, arguments), this.pX = null, this.pY = null
                        }

                        function K() {
                            q.apply(this, arguments)
                        }

                        function Z() {
                            W.apply(this, arguments), this._timer = null, this._input = null
                        }

                        function Q() {
                            q.apply(this, arguments)
                        }

                        function $() {
                            q.apply(this, arguments)
                        }

                        function tt() {
                            W.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
                        }

                        function et(t, e) {
                            return (e = e || {}).recognizers = h(e.recognizers, et.defaults.preset), new nt(t, e)
                        }

                        function nt(t, e) {
                            this.options = ot({}, et.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = function (t) {
                                return new (t.options.inputClass || (vt ? R : gt ? O : pt ? B : F))(t, T)
                            }(this), this.touchAction = new V(this, this.options.touchAction), rt(this, !0), s(this.options.recognizers, (function (t) {
                                var e = this.add(new t[0](t[1]));
                                t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
                            }), this)
                        }

                        function rt(t, e) {
                            var n, r = t.element;
                            r.style && (s(t.options.cssProps, (function (i, o) {
                                n = w(r.style, o), e ? (t.oldCssProps[n] = r.style[n], r.style[n] = i) : r.style[n] = t.oldCssProps[n] || ""
                            })), e || (t.oldCssProps = {}))
                        }

                        function it(t, e) {
                            var n = r.createEvent("Event");
                            n.initEvent(t, !0, !0), n.gesture = e, e.target.dispatchEvent(n)
                        }

                        var ot, at = ["", "webkit", "Moz", "MS", "ms", "o"], ut = r.createElement("div"),
                            st = "function", lt = Math.round, ct = Math.abs, ft = Date.now;
                        ot = "function" != typeof Object.assign ? function (t) {
                            if (t === o || null === t) throw new TypeError("Cannot convert undefined or null to object");
                            for (var e = Object(t), n = 1; n < arguments.length; n++) {
                                var r = arguments[n];
                                if (r !== o && null !== r) for (var i in r) r.hasOwnProperty(i) && (e[i] = r[i])
                            }
                            return e
                        } : Object.assign;
                        var mt = l((function (t, e, n) {
                                for (var r = Object.keys(e), i = 0; i < r.length;) (!n || n && t[r[i]] === o) && (t[r[i]] = e[r[i]]), i++;
                                return t
                            }), "extend", "Use `assign`."), ht = l((function (t, e) {
                                return mt(t, e, !0)
                            }), "merge", "Use `assign`."), dt = 1, pt = "ontouchstart" in n,
                            vt = w(n, "PointerEvent") !== o,
                            gt = pt && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent), yt = "touch",
                            _t = "mouse", bt = 25, xt = 1, wt = 2, At = 4, Ct = 8, Tt = 1, It = 2, Pt = 4, St = 8,
                            Et = 16, Lt = It | Pt, Mt = St | Et, zt = Lt | Mt, Ft = ["x", "y"],
                            Rt = ["clientX", "clientY"];
                        C.prototype = {
                            handler: function () {
                            }, init: function () {
                                this.evEl && d(this.element, this.evEl, this.domHandler), this.evTarget && d(this.target, this.evTarget, this.domHandler), this.evWin && d(A(this.element), this.evWin, this.domHandler)
                            }, destroy: function () {
                                this.evEl && p(this.element, this.evEl, this.domHandler), this.evTarget && p(this.target, this.evTarget, this.domHandler), this.evWin && p(A(this.element), this.evWin, this.domHandler)
                            }
                        };
                        var Dt = {mousedown: xt, mousemove: wt, mouseup: At}, kt = "mousedown",
                            Ot = "mousemove mouseup";
                        c(F, C, {
                            handler: function (t) {
                                var e = Dt[t.type];
                                e & xt && 0 === t.button && (this.pressed = !0), e & wt && 1 !== t.which && (e = At), this.pressed && (e & At && (this.pressed = !1), this.callback(this.manager, e, {
                                    pointers: [t],
                                    changedPointers: [t],
                                    pointerType: _t,
                                    srcEvent: t
                                }))
                            }
                        });
                        var jt = {pointerdown: xt, pointermove: wt, pointerup: At, pointercancel: Ct, pointerout: Ct},
                            Bt = {2: yt, 3: "pen", 4: _t, 5: "kinect"}, Gt = "pointerdown",
                            Nt = "pointermove pointerup pointercancel";
                        n.MSPointerEvent && !n.PointerEvent && (Gt = "MSPointerDown", Nt = "MSPointerMove MSPointerUp MSPointerCancel"), c(R, C, {
                            handler: function (t) {
                                var e = this.store, n = !1, r = t.type.toLowerCase().replace("ms", ""), i = jt[r],
                                    o = Bt[t.pointerType] || t.pointerType, a = o == yt,
                                    u = _(e, t.pointerId, "pointerId");
                                i & xt && (0 === t.button || a) ? 0 > u && (e.push(t), u = e.length - 1) : i & (At | Ct) && (n = !0), 0 > u || (e[u] = t, this.callback(this.manager, i, {
                                    pointers: e,
                                    changedPointers: [t],
                                    pointerType: o,
                                    srcEvent: t
                                }), n && e.splice(u, 1))
                            }
                        });
                        var Ut = {touchstart: xt, touchmove: wt, touchend: At, touchcancel: Ct}, Vt = "touchstart",
                            Wt = "touchstart touchmove touchend touchcancel";
                        c(D, C, {
                            handler: function (t) {
                                var e = Ut[t.type];
                                if (e === xt && (this.started = !0), this.started) {
                                    var n = k.call(this, t, e);
                                    e & (At | Ct) && n[0].length - n[1].length == 0 && (this.started = !1), this.callback(this.manager, e, {
                                        pointers: n[0],
                                        changedPointers: n[1],
                                        pointerType: yt,
                                        srcEvent: t
                                    })
                                }
                            }
                        });
                        var Ht = {touchstart: xt, touchmove: wt, touchend: At, touchcancel: Ct},
                            Yt = "touchstart touchmove touchend touchcancel";
                        c(O, C, {
                            handler: function (t) {
                                var e = Ht[t.type], n = j.call(this, t, e);
                                n && this.callback(this.manager, e, {
                                    pointers: n[0],
                                    changedPointers: n[1],
                                    pointerType: yt,
                                    srcEvent: t
                                })
                            }
                        });
                        var Xt = 2500, qt = 25;
                        c(B, C, {
                            handler: function (t, e, n) {
                                var r = n.pointerType == yt, i = n.pointerType == _t;
                                if (!(i && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
                                    if (r) G.call(this, e, n); else if (i && U.call(this, n)) return;
                                    this.callback(t, e, n)
                                }
                            }, destroy: function () {
                                this.touch.destroy(), this.mouse.destroy()
                            }
                        });
                        var Jt = w(ut.style, "touchAction"), Kt = Jt !== o, Zt = "compute", Qt = "manipulation",
                            $t = "none", te = "pan-x", ee = "pan-y", ne = function () {
                                if (!Kt) return !1;
                                var t = {}, e = n.CSS && n.CSS.supports;
                                return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach((function (r) {
                                    t[r] = !e || n.CSS.supports("touch-action", r)
                                })), t
                            }();
                        V.prototype = {
                            set: function (t) {
                                t == Zt && (t = this.compute()), Kt && this.manager.element.style && ne[t] && (this.manager.element.style[Jt] = t), this.actions = t.toLowerCase().trim()
                            }, update: function () {
                                this.set(this.manager.options.touchAction)
                            }, compute: function () {
                                var t = [];
                                return s(this.manager.recognizers, (function (e) {
                                    m(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
                                })), function (t) {
                                    if (g(t, $t)) return $t;
                                    var e = g(t, te), n = g(t, ee);
                                    return e && n ? $t : e || n ? e ? te : ee : g(t, Qt) ? Qt : "auto"
                                }(t.join(" "))
                            }, preventDefaults: function (t) {
                                var e = t.srcEvent, n = t.offsetDirection;
                                if (!this.manager.session.prevented) {
                                    var r = this.actions, i = g(r, $t) && !ne[$t], o = g(r, ee) && !ne[ee],
                                        a = g(r, te) && !ne[te];
                                    if (i) {
                                        var u = 1 === t.pointers.length, s = t.distance < 2, l = t.deltaTime < 250;
                                        if (u && s && l) return
                                    }
                                    return a && o ? void 0 : i || o && n & Lt || a && n & Mt ? this.preventSrc(e) : void 0
                                }
                                e.preventDefault()
                            }, preventSrc: function (t) {
                                this.manager.session.prevented = !0, t.preventDefault()
                            }
                        };
                        var re = 1, ie = 2, oe = 4, ae = 8, ue = ae, se = 16;
                        W.prototype = {
                            defaults: {}, set: function (t) {
                                return ot(this.options, t), this.manager && this.manager.touchAction.update(), this
                            }, recognizeWith: function (t) {
                                if (u(t, "recognizeWith", this)) return this;
                                var e = this.simultaneous;
                                return e[(t = X(t, this)).id] || (e[t.id] = t, t.recognizeWith(this)), this
                            }, dropRecognizeWith: function (t) {
                                return u(t, "dropRecognizeWith", this) || (t = X(t, this), delete this.simultaneous[t.id]), this
                            }, requireFailure: function (t) {
                                if (u(t, "requireFailure", this)) return this;
                                var e = this.requireFail;
                                return -1 === _(e, t = X(t, this)) && (e.push(t), t.requireFailure(this)), this
                            }, dropRequireFailure: function (t) {
                                if (u(t, "dropRequireFailure", this)) return this;
                                t = X(t, this);
                                var e = _(this.requireFail, t);
                                return e > -1 && this.requireFail.splice(e, 1), this
                            }, hasRequireFailures: function () {
                                return this.requireFail.length > 0
                            }, canRecognizeWith: function (t) {
                                return !!this.simultaneous[t.id]
                            }, emit: function (t) {
                                function e(e) {
                                    n.manager.emit(e, t)
                                }

                                var n = this, r = this.state;
                                ae > r && e(n.options.event + H(r)), e(n.options.event), t.additionalEvent && e(t.additionalEvent), r >= ae && e(n.options.event + H(r))
                            }, tryEmit: function (t) {
                                return this.canEmit() ? this.emit(t) : void (this.state = 32)
                            }, canEmit: function () {
                                for (var t = 0; t < this.requireFail.length;) {
                                    if (!(this.requireFail[t].state & (32 | re))) return !1;
                                    t++
                                }
                                return !0
                            }, recognize: function (t) {
                                var e = ot({}, t);
                                return m(this.options.enable, [this, e]) ? (this.state & (ue | se | 32) && (this.state = re), this.state = this.process(e), void (this.state & (ie | oe | ae | se) && this.tryEmit(e))) : (this.reset(), void (this.state = 32))
                            }, process: function (t) {
                            }, getTouchAction: function () {
                            }, reset: function () {
                            }
                        }, c(q, W, {
                            defaults: {pointers: 1}, attrTest: function (t) {
                                var e = this.options.pointers;
                                return 0 === e || t.pointers.length === e
                            }, process: function (t) {
                                var e = this.state, n = t.eventType, r = e & (ie | oe), i = this.attrTest(t);
                                return r && (n & Ct || !i) ? e | se : r || i ? n & At ? e | ae : e & ie ? e | oe : ie : 32
                            }
                        }), c(J, q, {
                            defaults: {event: "pan", threshold: 10, pointers: 1, direction: zt},
                            getTouchAction: function () {
                                var t = this.options.direction, e = [];
                                return t & Lt && e.push(ee), t & Mt && e.push(te), e
                            },
                            directionTest: function (t) {
                                var e = this.options, n = !0, r = t.distance, i = t.direction, o = t.deltaX,
                                    a = t.deltaY;
                                return i & e.direction || (e.direction & Lt ? (i = 0 === o ? Tt : 0 > o ? It : Pt, n = o != this.pX, r = Math.abs(t.deltaX)) : (i = 0 === a ? Tt : 0 > a ? St : Et, n = a != this.pY, r = Math.abs(t.deltaY))), t.direction = i, n && r > e.threshold && i & e.direction
                            },
                            attrTest: function (t) {
                                return q.prototype.attrTest.call(this, t) && (this.state & ie || !(this.state & ie) && this.directionTest(t))
                            },
                            emit: function (t) {
                                this.pX = t.deltaX, this.pY = t.deltaY;
                                var e = Y(t.direction);
                                e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t)
                            }
                        }), c(K, q, {
                            defaults: {event: "pinch", threshold: 0, pointers: 2},
                            getTouchAction: function () {
                                return [$t]
                            },
                            attrTest: function (t) {
                                return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & ie)
                            },
                            emit: function (t) {
                                if (1 !== t.scale) {
                                    var e = t.scale < 1 ? "in" : "out";
                                    t.additionalEvent = this.options.event + e
                                }
                                this._super.emit.call(this, t)
                            }
                        }), c(Z, W, {
                            defaults: {event: "press", pointers: 1, time: 251, threshold: 9},
                            getTouchAction: function () {
                                return ["auto"]
                            },
                            process: function (t) {
                                var e = this.options, n = t.pointers.length === e.pointers,
                                    r = t.distance < e.threshold, i = t.deltaTime > e.time;
                                if (this._input = t, !r || !n || t.eventType & (At | Ct) && !i) this.reset(); else if (t.eventType & xt) this.reset(), this._timer = a((function () {
                                    this.state = ue, this.tryEmit()
                                }), e.time, this); else if (t.eventType & At) return ue;
                                return 32
                            },
                            reset: function () {
                                clearTimeout(this._timer)
                            },
                            emit: function (t) {
                                this.state === ue && (t && t.eventType & At ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = ft(), this.manager.emit(this.options.event, this._input)))
                            }
                        }), c(Q, q, {
                            defaults: {event: "rotate", threshold: 0, pointers: 2},
                            getTouchAction: function () {
                                return [$t]
                            },
                            attrTest: function (t) {
                                return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & ie)
                            }
                        }), c($, q, {
                            defaults: {
                                event: "swipe",
                                threshold: 10,
                                velocity: .3,
                                direction: Lt | Mt,
                                pointers: 1
                            }, getTouchAction: function () {
                                return J.prototype.getTouchAction.call(this)
                            }, attrTest: function (t) {
                                var e, n = this.options.direction;
                                return n & (Lt | Mt) ? e = t.overallVelocity : n & Lt ? e = t.overallVelocityX : n & Mt && (e = t.overallVelocityY), this._super.attrTest.call(this, t) && n & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && ct(e) > this.options.velocity && t.eventType & At
                            }, emit: function (t) {
                                var e = Y(t.offsetDirection);
                                e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
                            }
                        }), c(tt, W, {
                            defaults: {
                                event: "tap",
                                pointers: 1,
                                taps: 1,
                                interval: 300,
                                time: 250,
                                threshold: 9,
                                posThreshold: 10
                            }, getTouchAction: function () {
                                return [Qt]
                            }, process: function (t) {
                                var e = this.options, n = t.pointers.length === e.pointers,
                                    r = t.distance < e.threshold, i = t.deltaTime < e.time;
                                if (this.reset(), t.eventType & xt && 0 === this.count) return this.failTimeout();
                                if (r && i && n) {
                                    if (t.eventType != At) return this.failTimeout();
                                    var o = !this.pTime || t.timeStamp - this.pTime < e.interval,
                                        u = !this.pCenter || M(this.pCenter, t.center) < e.posThreshold;
                                    if (this.pTime = t.timeStamp, this.pCenter = t.center, u && o ? this.count += 1 : this.count = 1, this._input = t, 0 == this.count % e.taps) return this.hasRequireFailures() ? (this._timer = a((function () {
                                        this.state = ue, this.tryEmit()
                                    }), e.interval, this), ie) : ue
                                }
                                return 32
                            }, failTimeout: function () {
                                return this._timer = a((function () {
                                    this.state = 32
                                }), this.options.interval, this), 32
                            }, reset: function () {
                                clearTimeout(this._timer)
                            }, emit: function () {
                                this.state == ue && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
                            }
                        }), et.VERSION = "2.0.8", et.defaults = {
                            domEvents: !1,
                            touchAction: Zt,
                            enable: !0,
                            inputTarget: null,
                            inputClass: null,
                            preset: [[Q, {enable: !1}], [K, {enable: !1}, ["rotate"]], [$, {direction: Lt}], [J, {direction: Lt}, ["swipe"]], [tt], [tt, {
                                event: "doubletap",
                                taps: 2
                            }, ["tap"]], [Z]],
                            cssProps: {
                                userSelect: "none",
                                touchSelect: "none",
                                touchCallout: "none",
                                contentZooming: "none",
                                userDrag: "none",
                                tapHighlightColor: "rgba(0,0,0,0)"
                            }
                        }, nt.prototype = {
                            set: function (t) {
                                return ot(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
                            }, stop: function (t) {
                                this.session.stopped = t ? 2 : 1
                            }, recognize: function (t) {
                                var e = this.session;
                                if (!e.stopped) {
                                    this.touchAction.preventDefaults(t);
                                    var n, r = this.recognizers, i = e.curRecognizer;
                                    (!i || i && i.state & ue) && (i = e.curRecognizer = null);
                                    for (var o = 0; o < r.length;) n = r[o], 2 === e.stopped || i && n != i && !n.canRecognizeWith(i) ? n.reset() : n.recognize(t), !i && n.state & (ie | oe | ae) && (i = e.curRecognizer = n), o++
                                }
                            }, get: function (t) {
                                if (t instanceof W) return t;
                                for (var e = this.recognizers, n = 0; n < e.length; n++) if (e[n].options.event == t) return e[n];
                                return null
                            }, add: function (t) {
                                if (u(t, "add", this)) return this;
                                var e = this.get(t.options.event);
                                return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
                            }, remove: function (t) {
                                if (u(t, "remove", this)) return this;
                                if (t = this.get(t)) {
                                    var e = this.recognizers, n = _(e, t);
                                    -1 !== n && (e.splice(n, 1), this.touchAction.update())
                                }
                                return this
                            }, on: function (t, e) {
                                if (t !== o && e !== o) {
                                    var n = this.handlers;
                                    return s(y(t), (function (t) {
                                        n[t] = n[t] || [], n[t].push(e)
                                    })), this
                                }
                            }, off: function (t, e) {
                                if (t !== o) {
                                    var n = this.handlers;
                                    return s(y(t), (function (t) {
                                        e ? n[t] && n[t].splice(_(n[t], e), 1) : delete n[t]
                                    })), this
                                }
                            }, emit: function (t, e) {
                                this.options.domEvents && it(t, e);
                                var n = this.handlers[t] && this.handlers[t].slice();
                                if (n && n.length) {
                                    e.type = t, e.preventDefault = function () {
                                        e.srcEvent.preventDefault()
                                    };
                                    for (var r = 0; r < n.length;) n[r](e), r++
                                }
                            }, destroy: function () {
                                this.element && rt(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
                            }
                        }, ot(et, {
                            INPUT_START: xt,
                            INPUT_MOVE: wt,
                            INPUT_END: At,
                            INPUT_CANCEL: Ct,
                            STATE_POSSIBLE: re,
                            STATE_BEGAN: ie,
                            STATE_CHANGED: oe,
                            STATE_ENDED: ae,
                            STATE_RECOGNIZED: ue,
                            STATE_CANCELLED: se,
                            STATE_FAILED: 32,
                            DIRECTION_NONE: Tt,
                            DIRECTION_LEFT: It,
                            DIRECTION_RIGHT: Pt,
                            DIRECTION_UP: St,
                            DIRECTION_DOWN: Et,
                            DIRECTION_HORIZONTAL: Lt,
                            DIRECTION_VERTICAL: Mt,
                            DIRECTION_ALL: zt,
                            Manager: nt,
                            Input: C,
                            TouchAction: V,
                            TouchInput: O,
                            MouseInput: F,
                            PointerEventInput: R,
                            TouchMouseInput: B,
                            SingleTouchInput: D,
                            Recognizer: W,
                            AttrRecognizer: q,
                            Tap: tt,
                            Pan: J,
                            Swipe: $,
                            Pinch: K,
                            Rotate: Q,
                            Press: Z,
                            on: d,
                            off: p,
                            each: s,
                            merge: ht,
                            extend: mt,
                            assign: ot,
                            inherit: c,
                            bindFn: f,
                            prefixed: w
                        }), (void 0 !== n ? n : "undefined" != typeof self ? self : {}).Hammer = et, t.exports ? t.exports = et : n.Hammer = et
                    }(window, document)
                }));
                var _r = function () {
                        function t(e, r, i) {
                            var o = this;
                            n(this, t), s(this, "targetElement", window), s(this, "targetDrawable", null), s(this, "camera", null), s(this, "boundingRect", null), s(this, "onTapCB", null), s(this, "onMouseMoveCB", null), s(this, "options", {
                                tap: !0,
                                pan: !0,
                                pinch: !0
                            }), s(this, "_movementModel", null), s(this, "_ambientController", null), s(this, "_animationController", null), s(this, "_isInteractive", !1), s(this, "resize", (function () {
                                o.boundingRect = o.targetElement.getBoundingClientRect(), o._movementModel.resize(o.boundingRect.width, o.boundingRect.height, o.camera.aspect, o.camera.fov)
                            })), s(this, "update", (function () {
                                o._movementModel.update(o.camera.fov)
                            })), s(this, "isOverTarget", (function (t, e) {
                                var n = t - o.boundingRect.x, r = e - o.boundingRect.y, i = n / o.boundingRect.width,
                                    a = (o.boundingRect.height - r) / o.boundingRect.height,
                                    u = o.camera.getRayFromScreen(i, a);
                                return o.targetDrawable.hitTest(u)
                            })), s(this, "onPanStart", (function (t) {
                                o.isOverTarget(t.center.x, t.center.y) && (o._movementModel.startPan(t), o._ambientController.pauseMotion())
                            })), s(this, "onPanContinue", (function (t) {
                                o._movementModel.continuePan(t)
                            })), s(this, "onPanEnd", (function (t) {
                                o._movementModel.endPan(t), o._ambientController.isEnabled && o._ambientController.resumeMotionAnimated()
                            })), s(this, "onTap", (function (t) {
                                var e = t.center.x - o.boundingRect.x, n = t.center.y - o.boundingRect.y;
                                o.onTapCB && o.onTapCB(e, n)
                            })), s(this, "onMouseMove", (function (t) {
                                var e = t.offsetX - o.boundingRect.x, n = t.offsetY - o.boundingRect.y;
                                o.onMouseMoveCB && o.onMouseMoveCB(e, n)
                            })), e && (this.targetElement = e, this.boundingRect = this.targetElement.getBoundingClientRect()), this.camera = r, i && (i.tap && (this.options.tap = i.tap), i.pan && (this.options.pan = i.pan), i.pinch && (this.options.pinch = i.pinch));
                            var a = window.Hammer;
                            this.hammer = a(this.targetElement, null), this.hammer.get("pan").set({direction: a.DIRECTION_ALL}), this.targetElement.addEventListener("mousemove", this.onMouseMove), this.isInteractive = !0
                        }

                        return u(t, [{
                            key: "register", value: function (t, e, n) {
                                this._movementModel = n, this._movementModel.resize(this.boundingRect.width, this.boundingRect.height, this.camera.aspect, this.camera.fov), this._ambientController = t, this._animationController = e
                            }
                        }, {
                            key: "target", set: function (t) {
                                this.targetDrawable = t
                            }
                        }, {
                            key: "isInteractive", get: function () {
                                return this._isInteractive
                            }, set: function (t) {
                                t !== this._isInteractive && (t ? (this.options.tap && this.hammer.on("tap", this.onTap), this.options.pan && this.hammer.on("panstart", this.onPanStart), this.options.pan && this.hammer.on("pan", this.onPanContinue), this.options.pan && this.hammer.on("panend", this.onPanEnd), this.options.pinch && this.hammer.on("tap", this.onPinch), this._isInteractive = t) : (this.options.tap && this.hammer.off("tap", this.onTap), this.options.pan && this.hammer.off("panstart", this.onPanStart), this.options.pan && this.hammer.off("pan", this.onPanContinue), this.options.pan && this.hammer.off("panend", this.onPanEnd), this.options.pinch && this.hammer.off("tap", this.onPinch), this._isInteractive = t))
                            }
                        }]), t
                    }(), br = function () {
                        function t() {
                            n(this, t)
                        }

                        return u(t, null, [{
                            key: "create", value: function (t, e, n, r) {
                                var i = 3 * t, o = 3 * (n - t) - i, a = 1 - i - o, u = 3 * e, s = 3 * (r - e) - u,
                                    l = 1 - u - s, c = function (t) {
                                        return ((a * t + o) * t + i) * t
                                    };
                                return function (t) {
                                    return function (t) {
                                        return ((l * t + s) * t + u) * t
                                    }(function (t, e) {
                                        var n, r, u, s, l, f;
                                        u = t;
                                        for (var m = 0; m < 8; m++) {
                                            if (s = c(u) - t, Math.abs(s) < 1e-9) return u;
                                            if (l = (3 * a * (f = u) + 2 * o) * f + i, Math.abs(l) < 1e-6) break;
                                            u -= s / l
                                        }
                                        if ((u = t) < (n = 0)) return n;
                                        if (u > (r = 1)) return r;
                                        for (; n < r;) {
                                            if (s = c(u), Math.abs(s - t) < 1e-9) return u;
                                            t > s ? n = u : r = u, u = .5 * (r - n) + n
                                        }
                                        return u
                                    }(t))
                                }
                            }
                        }]), t
                    }(), xr = function () {
                        function t() {
                            n(this, t), s(this, "_latLonTween", null), s(this, "_altTween", null), s(this, "_currentLatLon", null), s(this, "_currentAlt", null), s(this, "_movementModel", null), s(this, "_interactionController", null), s(this, "_ambientController", null)
                        }

                        return u(t, [{
                            key: "register", value: function (t, e, n) {
                                this._movementModel = n, this._interactionController = e, this._ambientController = t
                            }
                        }, {
                            key: "animateLatLonAlt", value: function (e, n, r, i) {
                                var o = i || {};
                                if (!o.duration && 0 !== o.duration) {
                                    var a = this._movementModel.currentLatLonAlt, u = [e, n];
                                    o.duration = t._defaultDuration(a, u)
                                }
                                this.animateLatLon(e, n, o), this.animateAlt(r, c(c({}, o), {}, {onComplete: null}))
                            }
                        }, {
                            key: "animateLatLon", value: function (e, n, r) {
                                var i = this, o = r || {}, a = this._movementModel.currentLatLonAlt;
                                this._currentLatLon = [a[0], a[1]];
                                var u = y(this._currentLatLon), s = [e, n], l = n + 360, c = n - 360,
                                    f = Math.abs(n - u[1]), m = Math.abs(l - u[1]), h = Math.abs(c - u[1]);
                                m <= h && m <= f && (s[1] = l), h <= f && h <= m && (s[1] = c);
                                var d, p = o.duration;
                                if (p || 0 === p || (p = t._defaultDuration(u, s)), d = o.ease && "function" == typeof o.ease ? o.ease : t._defaultLatLonEase(p), !this._ambientController.isPaused) {
                                    var v = Math.min(250, p / 4);
                                    this._ambientController.pauseMotionAnimated({duration: v})
                                }
                                this._latLonTween && this._latLonTween.stop(), this._latLonTween = new mr(0, 1, p, {
                                    onUpdate: function (t) {
                                        var e = d(t);
                                        i._currentLatLon = [u[0] + (s[0] - u[0]) * e, u[1] + (s[1] - u[1]) * e]
                                    }, onComplete: function (t) {
                                        t && (i._latLonTween = null, i._currentLatLon = null, i._movementModel.setLatLon(s[0], s[1]), i._ambientController.isEnabled && i._ambientController.isPaused && i._ambientController.resumeMotionAnimated()), o.onComplete && "function" == typeof o.onComplete && o.onComplete(t)
                                    }
                                })
                            }
                        }, {
                            key: "animateAlt", value: function (t, e) {
                                var n = this, r = e || {};
                                this._currentAlt = this._movementModel.currentLatLonAlt[2];
                                var i, o = this._currentAlt, a = t, u = r.duration;
                                if (u || 0 === u || (u = 500), i = r.ease && "function" == typeof r.ease ? r.ease : function (t) {
                                    return t
                                }, !this._ambientController.isPaused) {
                                    var s = Math.min(250, u / 4);
                                    this._ambientController.pauseMotionAnimated({duration: s})
                                }
                                this._altTween && this._altTween.stop(), this._altTween = new mr(0, 1, u, {
                                    onUpdate: function (t) {
                                        var e = i(t);
                                        n._currentAlt = o + (a - o) * e
                                    }, onComplete: function (t) {
                                        t && (n._altTween = null, n._currentAlt = null, n._movementModel.setAlt(a), n._ambientController.isEnabled && n._ambientController.isPaused && n._ambientController.resumeMotionAnimated()), r.onComplete && "function" == typeof r.onComplete && r.onComplete(t)
                                    }
                                })
                            }
                        }, {
                            key: "cancelLatLonAlt", value: function () {
                                this.cancelLatLon(), this.cancelAlt()
                            }
                        }, {
                            key: "cancelLatLon", value: function () {
                                this._latLonTween && (this._latLonTween.stop(), this._latLonTween = null, this._currentLatLon = null)
                            }
                        }, {
                            key: "cancelAlt", value: function () {
                                this._altTween && (this._altTween.stop(), this._altTween = null, this._currentAlt = null)
                            }
                        }, {
                            key: "isAnimatingLatLon", get: function () {
                                return null != this._latLonTween
                            }
                        }, {
                            key: "isAnimatingAlt", get: function () {
                                return null != this._altTween
                            }
                        }, {
                            key: "currentLatLon", get: function () {
                                return this._currentLatLon
                            }
                        }, {
                            key: "currentAlt", get: function () {
                                return this._currentAlt
                            }
                        }], [{
                            key: "_defaultDuration", value: function (t, e) {
                                return 300 + 700 * (1 - (fr.dotBetweenLatLon(t, e) + 1) / 2)
                            }
                        }, {
                            key: "_defaultLatLonEase", value: function (t) {
                                var e = t - 350, n = .55 + (.85 - .55) * Math.min(Math.max(e / 100, 0), 1);
                                return br.create(.315, .015, 1 - n, 1)
                            }
                        }]), t
                    }(), wr = function () {
                        function t() {
                            n(this, t), s(this, "latitudeVariance", 100), s(this, "latitudeSpeed", .5), s(this, "longitudeSpeed", .05), s(this, "isEnabled", !0), s(this, "_ambientStrength", 1), s(this, "_ambientTween", null), s(this, "_isPaused", !1), s(this, "_movementController", null), s(this, "_animationController", null), s(this, "_interactionController", null)
                        }

                        return u(t, [{
                            key: "register", value: function (t, e, n) {
                                this._movementModel = n, this._interactionController = e, this._animationController = t
                            }
                        }, {
                            key: "pauseMotion", value: function () {
                                this._isPaused = !0, this._ambientTween && this._ambientTween.stop(), this._ambientTween = null, this._ambientStrength = 0
                            }
                        }, {
                            key: "pauseMotionAnimated", value: function (t) {
                                var e = this;
                                this._isPaused = !0;
                                var n, r = t || {}, i = 500;
                                (r.duration || 0 === r.duration) && (i = r.duration), n = r.ease && "function" == typeof r.ease ? r.ease : function (t) {
                                    return t
                                };
                                var o = 1;
                                this._ambientTween && (o = this._ambientTween.currentValue(), this._ambientTween.stop()), this._ambientTween = new mr(o, 0, (o - 0) * i, {
                                    onUpdate: function (t) {
                                        e._ambientStrength = n(t)
                                    }, onComplete: function (t) {
                                        t && (e._ambientTween = null), r.onComplete && "function" == typeof r.onComplete && r.onComplete(t)
                                    }
                                })
                            }
                        }, {
                            key: "resumeMotion", value: function () {
                                this._isPaused = !1, this._ambientTween.stop(), this._ambientTween = null, this._ambientStrength = 1
                            }
                        }, {
                            key: "resumeMotionAnimated", value: function (t) {
                                var e = this;
                                this._isPaused = !1;
                                var n, r = t || {}, i = 1e3;
                                (r.duration || 0 === r.duration) && (i = r.duration), n = r.ease && "function" == typeof r.ease ? r.ease : function (t) {
                                    return t
                                };
                                var o = 0;
                                this._ambientTween && (o = this._ambientTween.currentValue(), this._ambientTween.stop()), this._ambientTween = new mr(o, 1, (1 - o) * i, {
                                    onUpdate: function (t) {
                                        e._ambientStrength = 1 - n(1 - t)
                                    }, onComplete: function (t) {
                                        t && (e._ambientTween = null), r.onComplete && "function" == typeof r.onComplete && r.onComplete(t)
                                    }
                                })
                            }
                        }, {
                            key: "ambientStrength", get: function () {
                                return this._ambientStrength
                            }
                        }, {
                            key: "isPaused", get: function () {
                                return this._isPaused
                            }
                        }]), t
                    }(), Ar = function () {
                        function t(e) {
                            var r = this;
                            n(this, t), s(this, "_container", null), s(this, "_callouts", {}), s(this, "_calloutDefinitions", []), s(this, "_currentlyRemoving", []), s(this, "onAutoRemove", null), s(this, "autoRemoveCallouts", !0), s(this, "autoRemoveThresholdSimilarity", .5), s(this, "autoRemoveThresholdMargins", {
                                top: 0,
                                right: 0,
                                left: 0,
                                bottom: 0
                            }), s(this, "shouldAutoRemoveCallout", null), e && "DIV" === e.tagName ? (this._container = e, this._container.style.pointerEvents = "none", this.resizeObserver = new ResizeObserver((function (t) {
                                t.length && (r.bounds = t[0].contentRect)
                            })), this.resizeObserver.observe(this._container)) : console.warn("CalloutManager expects a DIV element as a container."), this._removeCalloutComplete = this._removeCalloutComplete.bind(this)
                        }

                        return u(t, [{
                            key: "release", value: function () {
                                this.resizeObserver.disconnect()
                            }
                        }, {
                            key: "addCallout", value: function (t) {
                                this.replaceCallouts([].concat(y(this._calloutDefinitions), [t]))
                            }
                        }, {
                            key: "removeCallout", value: function (t) {
                                var e = this._calloutDefinitions.findIndex((function (e) {
                                    return e.id === t.id
                                }));
                                -1 !== e && this.replaceCallouts([].concat(y(this._calloutDefinitions.slice(0, e)), y(this._calloutDefinitions.slice(e + 1))))
                            }
                        }, {
                            key: "replaceCallouts", value: function (t) {
                                var e = this, n = t.filter((function (t) {
                                    return !e._calloutDefinitions.includes(t)
                                })), r = this._calloutDefinitions.filter((function (e) {
                                    return !t.includes(e)
                                })).filter((function (t) {
                                    return !e._currentlyRemoving.includes(t)
                                }));
                                this._currentlyRemoving = [].concat(y(this._currentlyRemoving), y(r)), this._calloutDefinitions = [].concat(y(this._calloutDefinitions), y(n)), n.map((function (t) {
                                    var n = t.calloutClass;
                                    if (n) {
                                        var r = new n(t);
                                        if (e.positionProvider) {
                                            var i = e.positionProvider([t]);
                                            r.setPosition(i[0])
                                        }
                                        return r
                                    }
                                })).filter((function (t) {
                                    return t
                                })).forEach((function (t) {
                                    e._callouts[t.definition.id] = t, e._container.appendChild(t.element), t.animateIn()
                                })), r.map((function (t) {
                                    return e._callouts[t.id]
                                })).forEach((function (t) {
                                    t.animateOut(e._removeCalloutComplete)
                                }))
                            }
                        }, {
                            key: "removeAllCallouts", value: function () {
                                this.replaceCallouts([])
                            }
                        }, {
                            key: "getCalloutForDefinition", value: function (t) {
                                return this._callouts[t.id]
                            }
                        }, {
                            key: "update", value: function (t) {
                                var e = this;
                                if (this.positionProvider) {
                                    var n = [], r = this.positionProvider(this._calloutDefinitions);
                                    this._calloutDefinitions.forEach((function (i, o) {
                                        var a = e._callouts[i.id], u = r[o];
                                        if (a && (a.setPosition(u), a.update(t)), e.autoRemoveCallouts) {
                                            var s = e.autoRemoveThresholdSimilarity, l = e.autoRemoveThresholdMargins;
                                            (u.world.similarityToCameraVector < s || u.screen.x < l.left || u.screen.x > e.bounds.width - l.right || u.screen.y < l.top || u.screen.y > e.bounds.height - l.bottom) && n.push(i)
                                        }
                                    })), n.forEach((function (t) {
                                        e.shouldAutoRemoveCallout && !e.shouldAutoRemoveCallout(t) || (e.removeCallout(t), e.onAutoRemove && e.onAutoRemove(t))
                                    }))
                                }
                            }
                        }, {
                            key: "_removeCalloutComplete", value: function (t) {
                                var e = t.definition.id, n = this._calloutDefinitions.findIndex((function (t) {
                                    return t.id === e
                                }));
                                -1 !== n && (this._calloutDefinitions = [].concat(y(this._calloutDefinitions.slice(0, n)), y(this._calloutDefinitions.slice(n + 1))), n = this._currentlyRemoving.findIndex((function (t) {
                                    return t.id === e
                                })), this._currentlyRemoving = [].concat(y(this._currentlyRemoving.slice(0, n)), y(this._currentlyRemoving.slice(n + 1))), this._container.removeChild(this._callouts[e].element), this._callouts[e].release(), delete this._callouts[e])
                            }
                        }, {
                            key: "drawables", get: function () {
                                var t = this;
                                return this._calloutDefinitions.map((function (e) {
                                    return t._callouts[e.id].drawables
                                }))
                            }
                        }]), t
                    }(), Cr = function () {
                        function t(e, r, i) {
                            var o = this;
                            n(this, t), s(this, "_wasmLoaded", !1), s(this, "isInit", !1), s(this, "shouldDraw", !1), s(this, "renderer", null), s(this, "scene", null), s(this, "targetDrawable", null), s(this, "calloutManager", null), s(this, "boundingRect", null), s(this, "_onWasmLoad", []), s(this, "drawqueue", []), s(this, "onInit", void 0), s(this, "onSelection", void 0), s(this, "onTap", void 0), s(this, "onUpdate", void 0), s(this, "_movementModel", null), s(this, "_interactionController", null), s(this, "_ambientController", null), s(this, "_animationController", null), s(this, "_storedMouseXY", null), s(this, "loadWasm", (function (t, e) {
                                return er(void 0 === t ? "./gkweb_bg.wasm" : t).then((function () {
                                    (function (t) {
                                        var e = Un(t, Sn.__wbindgen_malloc, Sn.__wbindgen_realloc), n = On;
                                        return kn(Sn.init_runtime(e, n))
                                    })(e).then((function () {
                                        o._wasmLoaded = !0, o._onWasmLoad.forEach((function (t) {
                                            t()
                                        })), o._onInitCB()
                                    }))
                                }))
                            })), s(this, "init", (function (t) {
                                o.renderer = new cn(t, o.gkOptions.attributes), o.renderer.init(), o.gkOptions.clearColor && (o.renderer.clearColor = o.gkOptions.clearColor), o.scene = new Ln(t.width, t.height), o.gkOptions.movementModel ? o._movementModel = o.gkOptions.movementModel : o._movementModel = new gr, o._interactionController = new _r(t, o.scene.camera), o._interactionController.onTapCB = o.onTapCB, o._interactionController.onMouseMoveCB = o.onMouseMoveCB, o._animationController = new xr, o._ambientController = new wr, o._ambientController.register(o._animationController, o._interactionController, o._movementModel), o._animationController.register(o._ambientController, o._interactionController, o._movementModel), o._interactionController.register(o._ambientController, o._animationController, o._movementModel), o._movementModel.register(o._ambientController, o._animationController, o._interactionController), window.addEventListener("resize", o.onResizeCB), window.addEventListener("scroll", o.onResizeCB), o._resizeObserver = new ResizeObserver((function (t) {
                                    t.length && o.onResizeCB()
                                })), o._resizeObserver.observe(t), o.loadWasm(o.gkOptions.wasmPath, o.gkOptions.apiKey), o.isInit = !0
                            })), s(this, "_onInitCB", (function () {
                                o.onInit && o.onInit(o), o.renderloop(0)
                            })), s(this, "onResizeCB", (function () {
                                o.boundingRect = o.renderer.gl.canvas.getBoundingClientRect(), sn(o.renderer.gl.canvas), o.scene.resize(o.boundingRect.width, o.boundingRect.height), o.renderer.resize(o.boundingRect.width, o.boundingRect.height), o.interactionController.resize()
                            })), s(this, "setCameratargetDrawable", (function (t) {
                                o.interactionController.hitTarget = t.hitTest
                            })), s(this, "addDrawable", (function (t, e) {
                                return t instanceof rr && (t instanceof ir && null === o.targetDrawable && (o.targetDrawable = t, o.interactionController.target = t), t.init(o.renderer.gl, e), o.drawqueue.push(t), o._wasmLoaded ? t.createCollisionGeo() : o._onWasmLoad.push(t.createCollisionGeo), !0)
                            })), s(this, "startDrawing", (function () {
                                o.shouldDraw = !0, o.renderloop(0)
                            })), s(this, "stopDrawing", (function () {
                                o.shouldDraw = !1
                            })), s(this, "renderloop", (function (t) {
                                var e = t / 1e4;
                                if (o.shouldDraw) {
                                    o.movementModel.update(e, o.scene.camera.fov);
                                    var n = g(o.movementModel.currentLatLonAlt, 3), r = n[0], i = n[1], a = n[2],
                                        u = fr.worldFromLatLon(r, i, a);
                                    o.scene.camera.setPosition(u), o.renderer.prepareRenderFrame(), o.scene.update(e);
                                    var s = o.scene.getUniforms(e);
                                    if (o.drawqueue.forEach((function (t) {
                                        t.update(o.renderer.gl, s, e)
                                    })), o.calloutManager && o.calloutManager.update(e), o.drawqueue.forEach((function (t) {
                                        t.draw(o.renderer.gl)
                                    })), o.onUpdate && "function" == typeof o.onUpdate) if (o._storedMouseXY) {
                                        var l = g(o._storedMouseXY, 2), c = l[0], f = l[1], m = c / o.boundingRect.width,
                                            h = (o.boundingRect.height - f) / o.boundingRect.height,
                                            d = o.scene.camera.getRayFromScreen(m, h), p = o.targetLatLon(d);
                                        p ? o.onUpdate(o.getPosition(p.lat, p.lon, 0)) : o.onUpdate()
                                    } else o.onUpdate();
                                    requestAnimationFrame(o.renderloop)
                                }
                            })), s(this, "onTapCB", (function (t, e) {
                                if (o._wasmLoaded) {
                                    var n = t / o.boundingRect.width,
                                        r = (o.boundingRect.height - e) / o.boundingRect.height,
                                        i = o.scene.camera.getRayFromScreen(n, r), a = o.targetLatLon(i),
                                        u = {drawables: []};
                                    a && (u.lat = a.lat, u.lon = a.lon), o.drawqueue.forEach((function (t) {
                                        if (t.isInteractive && t.isSelectable) {
                                            var e = {};
                                            e.obj = t;
                                            var n = t.rayCastFrom(i);
                                            n && t.isSelectable && (e.selection = t.onSelection(a.lat, a.lon, n)), u.drawables.push(e)
                                        }
                                    })), o.onSelection && "function" == typeof o.onSelection && o.onSelection(u), o.onTap && "function" == typeof o.onTap && (a ? o.onTap(o.getPosition(a.lat, a.lon, 0)) : o.onTap())
                                }
                            })), s(this, "targetLatLon", (function (t) {
                                var e, n = o.targetDrawable.rayCastFrom(t);
                                return !1 !== n && (e = fr.latLonFromWorld(n.point)), e
                            })), s(this, "onMouseMoveCB", (function (t, e) {
                                if (o._wasmLoaded) {
                                    var n = t / o.boundingRect.width,
                                        r = (o.boundingRect.height - e) / o.boundingRect.height,
                                        i = o.scene.camera.getRayFromScreen(n, r);
                                    o.drawqueue.forEach((function (t) {
                                        if (t.isInteractive && t.isHoverable) {
                                            var e = t.rayCastFrom(i);
                                            e && t.isHoverable && t.onHover(e)
                                        }
                                    })), o._storedMouseXY = [t, e]
                                }
                            })), s(this, "getPosition", (function (t, e, n) {
                                n || (n = 0);
                                var r = fr.worldFromLatLon(t, e, n), i = o.scene.camera.project(r);
                                i[0] *= o.boundingRect.width, i[1] *= o.boundingRect.height, i[1] = o.boundingRect.height - i[1];
                                var a = o.scene.camera.project(o.scene.camera.target);
                                a[0] *= o.boundingRect.width, a[1] *= o.boundingRect.height, a[1] = o.boundingRect.height - a[1];
                                var u = [];
                                u.push(i[0] - a[0]), u.push(i[1] - a[1]);
                                var s = yn();
                                An(s, r);
                                var l = o.scene.camera.eye, c = yn();
                                An(c, l);
                                var f = Cn(s, c);
                                return {
                                    coord: {lat: t, lon: e, alt: n},
                                    screen: {x: i[0], y: i[1]},
                                    world: {x: u[0], y: u[1], similarityToCameraVector: f}
                                }
                            })), s(this, "registerCalloutManager", (function (t) {
                                t && t instanceof Ar ? (t.positionProvider = function (t) {
                                    return t.map((function (t) {
                                        return o.getPosition(t.latitude, t.longitude, t.altitude)
                                    }))
                                }, o.calloutManager = t) : console.warn("registerCalloutManager must be passed an instance of CalloutManager")
                            })), s(this, "computeGlobeSize", (function () {
                                var t, e, n, r, i, a = o.scene.camera.fov,
                                    u = (t = o.scene.camera.eye, n = (e = o.targetDrawable.translation)[0] - t[0], r = e[1] - t[1], i = e[2] - t[2], Math.hypot(n, r, i));
                                return 2 * Math.asin(1 / u) / a * o.boundingRect.height
                            })), s(this, "setGlobeSize", (function (t) {
                                var e = o.scene.camera.fov;
                                return 1 * Math.sin(t / o.boundingRect.height * e / 2)
                            })), this.gkOptions = void 0 === r ? {} : r, i && (this.onInit = i), this.boundingRect = e.getBoundingClientRect(), this.init(e)
                        }

                        return u(t, [{
                            key: "movementModel", get: function () {
                                return this._movementModel
                            }
                        }, {
                            key: "ambientController", get: function () {
                                return this._ambientController
                            }
                        }, {
                            key: "animationController", get: function () {
                                return this._animationController
                            }
                        }, {
                            key: "interactionController", get: function () {
                                return this._interactionController
                            }
                        }]), u(t, [{
                            key: "isWebGL1", get: function () {
                                return !!this.gl && te(this.gl)
                            }
                        }, {
                            key: "isWebGL2", get: function () {
                                return !!this.gl && $t(this.gl)
                            }
                        }, {
                            key: "VERSION", get: function () {
                                return {version: "1.0.3", wasmVersion: this.WASM_VERSION}
                            }
                        }, {
                            key: "WASM_VERSION", get: function () {
                                return !!this._wasmLoaded && function () {
                                    try {
                                        var t = Sn.__wbindgen_export_4.value - 16;
                                        Sn.__wbindgen_export_4.value = t, Sn.get_wasm_version(t);
                                        var e = Wn()[t / 4 + 0], n = Wn()[t / 4 + 1];
                                        return Yn(e, n)
                                    } finally {
                                        Sn.__wbindgen_export_4.value += 16, Sn.__wbindgen_free(e, n)
                                    }
                                }()
                            }
                        }]), t
                    }(), Tr = yr((function (t, e) {
                        !function (t) {
                            function e(t, e, n) {
                                this.obj = t, this.left = null, this.right = null, this.parent = n, this.dimension = e
                            }

                            function n(t) {
                                this.content = [], this.scoreFunction = t
                            }

                            n.prototype = {
                                push: function (t) {
                                    this.content.push(t), this.bubbleUp(this.content.length - 1)
                                }, pop: function () {
                                    var t = this.content[0], e = this.content.pop();
                                    return this.content.length > 0 && (this.content[0] = e, this.sinkDown(0)), t
                                }, peek: function () {
                                    return this.content[0]
                                }, remove: function (t) {
                                    for (var e = this.content.length, n = 0; n < e; n++) if (this.content[n] == t) {
                                        var r = this.content.pop();
                                        return void (n != e - 1 && (this.content[n] = r, this.scoreFunction(r) < this.scoreFunction(t) ? this.bubbleUp(n) : this.sinkDown(n)))
                                    }
                                    throw new Error("Node not found.")
                                }, size: function () {
                                    return this.content.length
                                }, bubbleUp: function (t) {
                                    for (var e = this.content[t]; t > 0;) {
                                        var n = Math.floor((t + 1) / 2) - 1, r = this.content[n];
                                        if (!(this.scoreFunction(e) < this.scoreFunction(r))) break;
                                        this.content[n] = e, this.content[t] = r, t = n
                                    }
                                }, sinkDown: function (t) {
                                    for (var e = this.content.length, n = this.content[t], r = this.scoreFunction(n); ;) {
                                        var i = 2 * (t + 1), o = i - 1, a = null;
                                        if (o < e) {
                                            var u = this.content[o], s = this.scoreFunction(u);
                                            s < r && (a = o)
                                        }
                                        if (i < e) {
                                            var l = this.content[i];
                                            this.scoreFunction(l) < (null == a ? r : s) && (a = i)
                                        }
                                        if (null == a) break;
                                        this.content[t] = this.content[a], this.content[a] = n, t = a
                                    }
                                }
                            }, t.kdTree = function (t, r, i) {
                                var o = this;
                                Array.isArray(t) ? this.root = function t(n, r, o) {
                                    var a, u, s = r % i.length;
                                    return 0 === n.length ? null : 1 === n.length ? new e(n[0], s, o) : (n.sort((function (t, e) {
                                        return t[i[s]] - e[i[s]]
                                    })), (u = new e(n[a = Math.floor(n.length / 2)], s, o)).left = t(n.slice(0, a), r + 1, u), u.right = t(n.slice(a + 1), r + 1, u), u)
                                }(t, 0, null) : function (t) {
                                    o.root = t, function t(e) {
                                        e.left && (e.left.parent = e, t(e.left)), e.right && (e.right.parent = e, t(e.right))
                                    }(o.root)
                                }(t), this.toJSON = function (t) {
                                    t || (t = this.root);
                                    var n = new e(t.obj, t.dimension, null);
                                    return t.left && (n.left = o.toJSON(t.left)), t.right && (n.right = o.toJSON(t.right)), n
                                }, this.insert = function (t) {
                                    var n, r, o = function e(n, r) {
                                        if (null === n) return r;
                                        var o = i[n.dimension];
                                        return t[o] < n.obj[o] ? e(n.left, n) : e(n.right, n)
                                    }(this.root, null);
                                    null !== o ? (n = new e(t, (o.dimension + 1) % i.length, o), r = i[o.dimension], t[r] < o.obj[r] ? o.left = n : o.right = n) : this.root = new e(t, 0, null)
                                }, this.remove = function (t) {
                                    var e;
                                    null !== (e = function e(n) {
                                        if (null === n) return null;
                                        if (n.obj === t) return n;
                                        var r = i[n.dimension];
                                        return t[r] < n.obj[r] ? e(n.left) : e(n.right)
                                    }(o.root)) && function t(e) {
                                        function n(t, e) {
                                            var r, o, a, u, s;
                                            return null === t ? null : (r = i[e], t.dimension === e ? null !== t.left ? n(t.left, e) : t : (o = t.obj[r], a = n(t.left, e), u = n(t.right, e), s = t, null !== a && a.obj[r] < o && (s = a), null !== u && u.obj[r] < s.obj[r] && (s = u), s))
                                        }

                                        var r, a, u;
                                        if (null === e.left && null === e.right) return null === e.parent ? void (o.root = null) : (u = i[e.parent.dimension], void (e.obj[u] < e.parent.obj[u] ? e.parent.left = null : e.parent.right = null));
                                        null !== e.right ? (a = (r = n(e.right, e.dimension)).obj, t(r), e.obj = a) : (a = (r = n(e.left, e.dimension)).obj, t(r), e.right = e.left, e.left = null, e.obj = a)
                                    }(e)
                                }, this.nearest = function (t, e, a) {
                                    var u, s, l;
                                    if (l = new n((function (t) {
                                        return -t[1]
                                    })), a) for (u = 0; u < e; u += 1) l.push([null, a]);
                                    for (o.root && function n(o) {
                                        function a(t, n) {
                                            l.push([t, n]), l.size() > e && l.pop()
                                        }

                                        var u, s, c, f, m = i[o.dimension], h = r(t, o.obj), d = {};
                                        for (f = 0; f < i.length; f += 1) f === o.dimension ? d[i[f]] = t[i[f]] : d[i[f]] = o.obj[i[f]];
                                        s = r(d, o.obj), null !== o.right || null !== o.left ? (n(u = null === o.right ? o.left : null === o.left ? o.right : t[m] < o.obj[m] ? o.left : o.right), (l.size() < e || h < l.peek()[1]) && a(o, h), (l.size() < e || Math.abs(s) < l.peek()[1]) && null !== (c = u === o.left ? o.right : o.left) && n(c)) : (l.size() < e || h < l.peek()[1]) && a(o, h)
                                    }(o.root), s = [], u = 0; u < Math.min(e, l.content.length); u += 1) l.content[u][0] && s.push([l.content[u][0].obj, l.content[u][1]]);
                                    return s
                                }, this.balanceFactor = function () {
                                    return function t(e) {
                                        return null === e ? 0 : Math.max(t(e.left), t(e.right)) + 1
                                    }(o.root) / (Math.log(function t(e) {
                                        return null === e ? 0 : t(e.left) + t(e.right) + 1
                                    }(o.root)) / Math.log(2))
                                }
                            }, t.BinaryHeap = n
                        }(e)
                    })), Ir = function () {
                        function t() {
                            var e = this;
                            n(this, t), s(this, "data", []), s(this, "types", []), s(this, "kdtree", null), s(this, "isInit", !1), s(this, "init", (function () {
                                e.isInit || (e.kdtree = new Tr.kdTree(e.data, fr.distanceBetweenPoints, ["lat", "lon"]))
                            })), s(this, "addGeojson", (function (t) {
                                if ("FeatureCollection" === t.type && t.features instanceof Array) {
                                    var n = [];
                                    t.features.forEach((function (t) {
                                        var r = {
                                            id: "_".concat(Math.random().toString(36).substr(2, 9)),
                                            lat: t.geometry.coordinates[1],
                                            lon: t.geometry.coordinates[0],
                                            properties: t.properties
                                        };
                                        e.data.push(r), n.push(n)
                                    })), e.isInit ? e.kdtree.insert(n) : e.init()
                                }
                            })), s(this, "addGeojsonPoint", (function (t) {
                                var n = {
                                    id: "_".concat(Math.random().toString(36).substr(2, 9)),
                                    lat: t.geometry.coordinates[1],
                                    lon: t.geometry.coordinates[0],
                                    properties: t.properties
                                };
                                return e.data.push(n), e.isInit ? e.kdtree.insert(n) : e.init(), n
                            })), s(this, "addDataPoint", (function (t) {
                                var n = void 0 === t.length ? [t] : t, r = [];
                                n.forEach((function (t) {
                                    var n = {
                                        id: "_".concat(Math.random().toString(36).substr(2, 9)),
                                        lat: t.coordinates[1],
                                        lon: t.coordinates[0],
                                        properties: t.properties
                                    };
                                    e.data.push(n), r.push(n)
                                })), e.isInit ? e.kdtree.insert(r) : e.init()
                            })), s(this, "updateDataset", (function (t) {
                                t.features.forEach((function (t) {
                                    var n = e.data.find((function (e) {
                                        var n = e.lat === t.geometry.coordinates[1],
                                            r = e.lon === t.geometry.coordinates[0];
                                        return n && r
                                    }));
                                    void 0 === n ? e.addGeojsonPoint(t) : n.properties = t.properties
                                }))
                            })), s(this, "deleteDataset", (function () {
                                e.data = [], e.init()
                            })), s(this, "getNearest", (function (t, n, r, i) {
                                e.isInit || e.init();
                                var o = e.kdtree.nearest({lat: t, lon: n}, i, r);
                                if (void 0 !== o[0]) return o
                            })), s(this, "getElementFromId", (function (t) {
                                return e.data.find((function (e) {
                                    return e.id === t
                                }))
                            })), s(this, "getElementFromKey", (function (t, n) {
                                return e.data.find((function (e) {
                                    return e.properties[t] === n
                                }))
                            })), s(this, "getTypeList", (function () {
                                var t = [];
                                return t.push([e.data[0]]), e.data.forEach((function (e) {
                                    var n = Object.keys(e.properties), r = !1;
                                    t.forEach((function (t) {
                                        var i = Object.keys(t[0].properties), o = fr.isSubSet(n, i), a = fr.isSubSet(i, n);
                                        o && a && (t.push(e), r = !0)
                                    })), !1 === r && t.push([e])
                                })), t
                            })), s(this, "getMaxForKey", (function (t) {
                                var n, r = -1 / 0;
                                if ("number" == typeof e.data[0].properties[t]) return e.data.forEach((function (e) {
                                    var i = e.properties[t];
                                    i >= r && (r = i, n = e.id)
                                })), {max: r, id: n};
                                console.warn("Cannot compare non-numbers")
                            })), s(this, "getMinForKey", (function (t) {
                                var n, r = 1 / 0;
                                if ("number" == typeof e.data[0].properties[t]) return e.data.forEach((function (e) {
                                    var i = e.properties[t];
                                    i <= r && (r = i, n = e.id)
                                })), {min: r, id: n};
                                console.warn("Cannot compare non-numbers")
                            })), s(this, "getRangeForKey", (function (t) {
                                return {min: e.getMinForKey(t), max: e.getMaxForKey(t)}
                            })), s(this, "mapKeyToRange", (function (t, n, r) {
                                var i = e.getRangeForKey(t);
                                return e.data.map((function (e) {
                                    var o = (e.properties[t] - i.min.min) / (i.max.max - i.min.min) * (r - n) + n;
                                    return {id: e.properties.region_id, value: o}
                                }))
                            }))
                        }

                        return u(t, [{
                            key: "isHomogeneous", get: function () {
                                return 1 === this.getTypeList().length
                            }
                        }]), t
                    }(), Pr = function (t) {
                        f(r, t);
                        var e = p(r);

                        function r() {
                            return n(this, r), e.apply(this, arguments)
                        }

                        return r
                    }(rr),
                    Sr = "precision mediump float;\n#define GLSLIFY 1\nuniform sampler2D u_texture;varying vec4 v_color;varying float v_alpha;void main(){vec4 surfaceColor=texture2D(u_texture,gl_PointCoord.xy);float d=(1.0+v_alpha)/2.0;float alpha=smoothstep(0.4,0.49,v_alpha);gl_FragColor=vec4(surfaceColor.rgb,surfaceColor.a*alpha);}",
                    Er = {}, Lr = function (t) {
                        f(r, t);
                        var e = p(r);

                        function r(t) {
                            var i, o;
                            n(this, r), s(h(o = e.call(this, t)), "datastore", void 0), s(h(o), "maxSelectionDistance", 300), s(h(o), "maxSelectionCount", 1), s(h(o), "maxDataPoints", 1e4), s(h(o), "dataPointCount", 0), s(h(o), "_resourceLoaded", !1), s(h(o), "_isDirty", !0), s(h(o), "_hasGeometry", !1), s(h(o), "useTexture", !1), s(h(o), "createEmptyVertices", (function () {
                                o.geometry.vertices.position = {
                                    numComponents: 3,
                                    data: new Array(3 * o.maxDataPoints).fill(0),
                                    perInstance: 1
                                }, o.geometry.vertices.color = {
                                    numComponents: 4,
                                    data: new Array(4 * o.maxDataPoints).fill(0),
                                    perInstance: 4
                                }, o.geometry.vertices.size = {
                                    numComponents: 1,
                                    data: new Array(1 * o.maxDataPoints).fill(0),
                                    perInstance: 1
                                }, o.geometry.vertices.indices = {
                                    numComponents: 1,
                                    data: Array.from(Array(1 * o.maxDataPoints).keys()),
                                    perInstance: 1
                                }
                            })), s(h(o), "extendVerticesBy", (function (t) {
                                var e, n, r;
                                (e = o.geometry.vertices.position.data).push.apply(e, y(Array(3 * t).fill(0))), (n = o.geometry.vertices.color.data).push.apply(n, y(Array(4 * t).fill(0))), (r = o.geometry.vertices.size.data).push.apply(r, y(Array(1 * t).fill(0)));
                                var i = o.geometry.vertices.indices.data.length;
                                o.geometry.vertices.indices.data = Array.from(Array(1 * (i + t)).keys()), o.geometry.needsResize = !0, o.maxDataPoints += t
                            })), s(h(o), "init", (function (t, e) {
                                if (o.geometry.init(t), o._hasGeometry = !0, o.material.init(t), o.useTexture) {
                                    var n = {texture: {src: o.textureSrc.texture, minMag: t.LINEAR}};
                                    o.material.loadTextures(t, n, (function () {
                                        e && e(), o.material.uniforms.u_texture = o.material.textures.texture
                                    }))
                                } else e && e()
                            })), s(h(o), "createCollisionGeo", (function () {
                            })), s(h(o), "update", (function (t, e, n) {
                                v((i = h(o), m(r.prototype)), "update", i).call(i, e, n), o.material.uniforms.u_model = o.modelMatrix, o.geometry.needsResize && o.geometry.reloadBuffers(t), o.geometry.isDirty && o.geometry.updateBuffers(t)
                            })), s(h(o), "draw", (function (t) {
                                (o.isReady || o._hasGeometry) && 0 !== !o.dataPointCount && (t.useProgram(o.material.programInfo.program), t.disable(t.DEPTH_TEST), en(t, o.material.programInfo, o.geometry.bufferInfo), tn(o.material.programInfo, o.material.uniforms), t.drawElements(t.POINTS, o.dataPointCount, t.UNSIGNED_SHORT, 0), t.enable(t.DEPTH_TEST))
                            })), s(h(o), "rayCastFrom", (function () {
                                return !0
                            })), s(h(o), "hitTest", (function () {
                                return !0
                            })), s(h(o), "onSelectionCB", (function (t) {
                                return t
                            })), s(h(o), "onSelection", (function (t, e) {
                                var n = o.getNearest(t, e);
                                return o.onSelectionCB(n)
                            })), s(h(o), "transform", (function (t, e) {
                                return e
                            })), s(h(o), "addGeojson", (function (t, e) {
                                if ("string" != typeof t) {
                                    o.datastore.addGeojson(t);
                                    var n = {
                                        position: {numComponents: 3, data: []},
                                        color: {numComponents: 4, data: []},
                                        size: {numComponents: 1, data: []},
                                        indices: {numComponents: 1, data: []}
                                    };
                                    o.datastore.data.forEach((function (t, e) {
                                        var r, i, a = {lat: t.lat, lon: t.lon, color: [1, 1, 1, 1], size: 10};
                                        (a = o.transform(t, a)).coords = fr.worldFromLatLon(a.lat, a.lon, .01), (r = n.position.data).push.apply(r, y(a.coords)), (i = n.color.data).push.apply(i, y(a.color)), n.size.data.push(a.size), n.indices.data.push(e)
                                    })), o.geometry.updateGeometry(n, o.dataPointCount), o.dataPointCount += t.features.length, void 0 !== e && e()
                                } else console.warn("This function needs a geojson object at this time")
                            })), s(h(o), "addDataPoint", (function (t, e) {
                                o.dataPointCount + 1 >= o.maxDataPoints && (console.warn("More than ".concat(o.maxDataPoints, " datapoints have been added, Increasing buffer size by: ").concat(o.maxDataPoints)), o.extendVerticesBy(o.maxDataPoints));
                                var n = [];
                                n.push(o.datastore.addGeojsonPoint(t));
                                var r = {
                                    position: {numComponents: 3, data: []},
                                    color: {numComponents: 4, data: []},
                                    size: {numComponents: 1, data: []},
                                    indices: {numComponents: 1, data: []}
                                };
                                n.forEach((function (t, e) {
                                    var n, i, a = {lat: t.lat, lon: t.lon, color: [1, 1, 1, 1], size: 10};
                                    (a = o.transform(t, a)).coords = fr.worldFromLatLon(a.lat, a.lon, .01), (n = r.position.data).push.apply(n, y(a.coords)), (i = r.color.data).push.apply(i, y(a.color)), r.size.data.push(a.size), r.indices.data.push(e)
                                })), o.geometry.updateGeometry(r, o.dataPointCount), o.dataPointCount += 1, void 0 !== e && e()
                            })), s(h(o), "updatePoint", (function (t, e) {
                                var n, r, i = {};
                                void 0 !== e.position && (i.position = {
                                    numComponents: 3,
                                    data: []
                                }, (n = i.position.data).push.apply(n, y(e.position))), void 0 !== e.color && (i.color = {
                                    numComponents: 4,
                                    data: []
                                }, (r = i.color.data).push.apply(r, y(e.color))), void 0 !== e.size && (i.size = {
                                    numComponents: 1,
                                    data: []
                                }, i.size.data.push(e.size)), o.geometry.updateGeometry(i, t)
                            })), s(h(o), "getNearest", (function (t, e) {
                                return o.datastore.getNearest(t, e, o.maxSelectionDistance, o.maxSelectionCount)
                            }));
                            var a = {
                                vertex: "#define GLSLIFY 1\nattribute vec4 position;attribute vec4 color;attribute float size;uniform mat4 u_worldViewProjection;uniform mat4 u_viewInverse;uniform mat4 u_model;uniform vec3 u_cameraPos;varying vec4 v_color;varying float v_alpha;void main(){vec4 pos=u_worldViewProjection*u_model*position;gl_PointSize=size;gl_Position=pos;v_color=color;v_alpha=dot(position.xyz,normalize(u_cameraPos));}",
                                fragment: "precision mediump float;\n#define GLSLIFY 1\nvarying vec4 v_color;varying float v_alpha;void main(){float d=distance(vec2(0.5),gl_PointCoord.xy);float c=1.0-smoothstep(0.40,0.5,d);gl_FragColor=vec4(v_color.rgb,v_color.a*v_alpha*c);}"
                            };
                            return t && (t.maxSelectionCount && (o.maxSelectionCount = t.maxSelectionCount), t.maxSelectionDistance && (o.maxSelectionDistance = t.maxSelectionDistance), t.maxDataPoints && (o.maxDataPoints = t.maxDataPoints), !0 === t.useTexture && void 0 !== t.texture && (o.useTexture = !0, a.fragment = Sr, o.textureSrc = {texture: t.texture})), o.material = new Mn(a), o.datastore = new Ir, o.material.uniforms = Er, o.geometry = new or, o.createEmptyVertices(), o
                        }

                        return r
                    }(Pr), Mr = {
                        vertex: "#define GLSLIFY 1\nattribute vec4 position;attribute vec3 normal;attribute vec2 texcoord;uniform mat4 u_worldViewProjection;uniform mat4 u_viewInverse;uniform mat4 u_model;uniform vec3 u_cameraPos;varying vec2 vTexture;varying float vAlpha;void main(){vec4 pos=u_worldViewProjection*u_model*position;gl_PointSize=10.0;vec3 transformedNormal=(u_worldViewProjection*u_model*vec4(normal,1.0)).xyz;vec4 transformedCamera=vec4(0.0,0.0,-1.0,1.0)*u_worldViewProjection;vAlpha=pow((1.0+(dot(normal,normalize(transformedCamera.xyz))))/2.0,9.0);vTexture=texcoord.xy;gl_Position=pos+0.00000000000000001*normal.x*texcoord.x;}",
                        fragment: "precision mediump float;\n#define GLSLIFY 1\nuniform sampler2D u_surface;varying vec2 vTexture;varying float vAlpha;void main(){vec4 surfaceColor=texture2D(u_surface,vec2(vTexture.x,1.0-vTexture.y));vec3 color=surfaceColor.rgb*vAlpha;gl_FragColor=vec4(color,1.0);}"
                    }, zr = {}, Fr = function (t) {
                        f(r, t);
                        var e = p(r);

                        function r(t, i) {
                            var o, a;
                            n(this, r), s(h(a = e.call(this)), "material", null), s(h(a), "lookup", null), s(h(a), "currentSelection", -1), s(h(a), "previousSelection", -1), s(h(a), "inAnimation", null), s(h(a), "outAnimation", null), s(h(a), "selection0", 236), s(h(a), "selection1", 144), s(h(a), "current", 236), s(h(a), "dataTexture", void 0), s(h(a), "dataTextureSize", 16), s(h(a), "updateCMDs", []), s(h(a), "highlightAnimationProps", {
                                start: 0,
                                stop: 1,
                                duration: 1e3,
                                onUpdate: function (t) {
                                    a.material.uniforms.u_animateIn = t
                                }
                            }), s(h(a), "init", (function (t, e) {
                                a.geometry.init(t);
                                var n = {surface: {src: a.textureSrc.surface, minMag: t.LINEAR}};
                                a.material.init(t), a.material.uniforms.uModelMatrix = a.modelMatrix, a.material.loadTextures(t, n, (function () {
                                    a.material.uniforms.u_surface = a.material.textures.surface, e && e()
                                }))
                            })), s(h(a), "getValueForId", (function (t) {
                                return a.lookup.getFromId(t)
                            })), s(h(a), "getValueForCode", (function (t) {
                                return a.lookup.getFromCode(t)
                            })), s(h(a), "getValueForName", (function (t) {
                                return a.lookup.getFromName(t)
                            })), s(h(a), "setIdColor", (function (t, e, n) {
                                var r = void 0 === n ? 1 : n, i = fr.hexToRGBA(e, r, !1);
                                a.updateCMDs.push((function (e) {
                                    a.dataTexture.updatePixelId(e, i, t)
                                }))
                            })), s(h(a), "createCollisionGeo", (function () {
                                a.collisionGeometry && a.collisionGeometry instanceof $n || (a.collisionGeometry = Qn.create_collision_geometry(a.geometry.vertices.position.data, a.geometry.vertices.texcoord.data, a.geometry.vertices.indices.data))
                            })), s(h(a), "rayCastFrom", (function (t) {
                                return a.collisionGeometry.raycast(t.origin, t.direction)
                            })), s(h(a), "hitTest", (function (t) {
                                return a.collisionGeometry.hitTest(t.origin, t.direction)
                            })), s(h(a), "onSelectionCB", (function () {
                            })), s(h(a), "onSelection", (function (t, e, n) {
                                var r = fr.latLonFromWorld(n.point);
                                return a.current = a.lookup.getIdFromLatLon(r.lat, r.lon), a.setHighlightId(a.current), a.onSelectionCB(a.current), {
                                    id: a.current,
                                    name: a.lookup.getFromId(a.current)
                                }
                            })), s(h(a), "onHover", (function () {
                            })), s(h(a), "update", (function (t, e, n) {
                                v((o = h(a), m(r.prototype)), "update", o).call(o, e, n), a.material.uniforms.u_model = a.modelMatrix, a.updateCMDs.forEach((function (e) {
                                    e(t)
                                })), a.updateCMDs = []
                            })), s(h(a), "draw", (function (t) {
                                a.isReady && a.shouldDraw && (t.useProgram(a.material.programInfo.program), en(t, a.material.programInfo, a.geometry.bufferInfo), tn(a.material.programInfo, a.material.uniforms), t.drawArrays(t.TRIANGLES, 0, a.geometry.bufferInfo.numElements))
                            })), s(h(a), "setCountryHover", (function (t) {
                            })), s(h(a), "setHighlightId", (function (t) {
                                a.previousSelection = a.currentSelection, a.currentSelection = t;
                                var e = a.inAnimation ? a.inAnimation.currentValue() : 1, n = 300 * e;
                                a.animateIn(a.currentSelection, 500), a.animateOut(a.previousSelection, n, e)
                            })), s(h(a), "animateIn", (function (t, e) {
                                a.material.uniforms.u_idAnimateIn = t, a.inAnimation && a.inAnimation.stop(), a.material.uniforms.u_animateIn = 0, a.inAnimation = new mr(a.highlightAnimationProps.start, a.highlightAnimationProps.stop, a.highlightAnimationProps.duration, {
                                    onUpdate: a.highlightAnimationProps.onUpdate,
                                    onComplete: function () {
                                        e && e()
                                    }
                                })
                            })), s(h(a), "animateOut", (function (t, e, n, r) {
                                a.material.uniforms.u_idAnimateOut = t, a.outAnimation && a.outAnimation.stop(), a.material.uniforms.u_animateOut = n, a.outAnimation = new mr(n, 0, e, {
                                    onUpdate: function (t) {
                                        a.material.uniforms.u_animateOut = t
                                    }, onComplete: function () {
                                        r && r()
                                    }
                                })
                            })), s(h(a), "addDataset", (function (t) {
                                a.lookup = new cr(t, a.textureSrc.id)
                            })), a.textureSrc = {surface: t.surface}, a.material = new Mn(Mr), a.material.uniforms = zr, a.geometry = new or;
                            var u = 0, l = new Float32Array(i), c = new Int32Array(i), f = l.subarray(u, u + 34992);
                            u += 34992;
                            var d = l.subarray(u, u + 34992);
                            u += 34992;
                            var p = l.subarray(u, u + 34992);
                            u += 34992;
                            var g = c.subarray(u, u + 11664);
                            return a.geometry.vertices.position = {
                                numComponents: 3,
                                data: f
                            }, a.geometry.vertices.normal = {
                                numComponents: 3,
                                data: d
                            }, a.geometry.vertices.texcoord = {
                                numComponents: 3,
                                data: p
                            }, a.geometry.vertices.indices = {numComponents: 3, data: g}, a
                        }

                        return r
                    }(ir), Rr = {
                        vertex: "#define GLSLIFY 1\nattribute vec4 position;attribute vec2 texcoord;uniform mat4 u_worldViewProjection;uniform mat4 u_viewInverse;uniform mat4 u_model;uniform vec3 u_cameraPos;varying float vAlpha;varying vec2 vTexture;void main(){vTexture=texcoord;gl_Position=position;}",
                        fragment: "precision mediump float;\n#define GLSLIFY 1\nuniform sampler2D u_background;uniform vec2 u_resolution;varying float vAlpha;varying vec2 vTexture;void main(){vec2 texture=u_resolution/256.0;vec4 textureColor=texture2D(u_background,vTexture*texture);gl_FragColor=vec4(textureColor.rgb,1.0);}"
                    }, Dr = {}, kr = function (t) {
                        f(r, t);
                        var e = p(r);

                        function r(t) {
                            var i, o;
                            return n(this, r), s(h(o = e.call(this)), "material", null), s(h(o), "init", (function (t, e) {
                                o.geometry = new or, o.geometry.vertices.position = [-1, -1, 1, -1, 1, 1, 1, 1, 1, 1, -1, 1], o.geometry.vertices.texcoord = [0, 0, 0, 1, 1, 1, 1, 0], o.geometry.vertices.indices = [0, 2, 1, 0, 3, 2], o.geometry.init(t);
                                var n = {background: {src: o.textureSrc.background, minMag: t.LINEAR}};
                                o.material.init(t), o.material.loadTextures(t, n, (function () {
                                    o.material.uniforms.u_background = o.material.textures.background, e && e()
                                }))
                            })), s(h(o), "createCollisionGeo", (function () {
                            })), s(h(o), "rayCastFrom", (function () {
                                return !1
                            })), s(h(o), "hitTest", (function () {
                                return !1
                            })), s(h(o), "onSelection", (function () {
                            })), s(h(o), "update", (function (t, e, n) {
                                v((i = h(o), m(r.prototype)), "update", i).call(i, e, n), o.material.uniforms.u_model = o.modelMatrix
                            })), s(h(o), "draw", (function (t) {
                                o.isReady && (t.disable(t.DEPTH_TEST), t.useProgram(o.material.programInfo.program), en(t, o.material.programInfo, o.geometry.bufferInfo), tn(o.material.programInfo, o.material.uniforms), t.drawElements(t.TRIANGLES, o.geometry.bufferInfo.numElements, t.UNSIGNED_SHORT, 0), t.enable(t.DEPTH_TEST))
                            })), o.material = new Mn(Rr), o.material.uniforms = Dr, o.textureSrc = {background: t}, o
                        }

                        return r
                    }(rr), Or = {
                        vertex: "#define GLSLIFY 1\nattribute vec4 position;attribute vec2 texcoord;uniform mat4 u_worldViewProjection;uniform mat4 u_viewInverse;uniform mat4 u_model;uniform mat4 u_view;uniform float u_scale;uniform vec3 u_cameraPos;varying float vAlpha;varying vec2 vTexture;void main(){vec3 cameraRight=normalize(vec3(u_view[0][0],u_view[1][0],u_view[2][0]));vec3 cameraUp=normalize(vec3(u_view[0][1],u_view[1][1],u_view[2][1]));vec3 cameraForward=normalize(u_cameraPos);vec3 worldPos=cameraRight*position.x*u_scale+cameraUp*position.y*u_scale;vec4 pos=u_worldViewProjection*vec4(worldPos,1.0);gl_Position=pos;vTexture=texcoord;}",
                        fragment: "precision mediump float;\n#define GLSLIFY 1\nuniform sampler2D u_background;varying float vAlpha;varying vec2 vTexture;void main(){gl_FragColor=vec4(1.0);}"
                    }, jr = {u_scale: 1}, Br = function (t) {
                        f(r, t);
                        var e = p(r);

                        function r(t) {
                            var i, o;
                            return n(this, r), s(h(o = e.call(this)), "material", null), s(h(o), "useTexture", !1), s(h(o), "nScale", 1), s(h(o), "init", (function (t, e) {
                                if (o.geometry = new or, o.geometry.vertices.position = [-1, -1, 0, -1, 1, 0, 1, 1, 0, 1, -1, 0], o.geometry.vertices.texcoord = [0, 0, 0, 1, 1, 1, 1, 0], o.geometry.vertices.indices = [0, 2, 1, 0, 3, 2], o.geometry.init(t), o.material.init(t), o.useTexture) {
                                    var n = {background: {src: o.textureSrc.texture, minMag: t.LINEAR, flipY: !0}};
                                    o.material.loadTextures(t, n, (function () {
                                        o.material.uniforms.u_background = o.material.textures.background, e && e()
                                    }))
                                } else o.material.texturesLoaded = !0, e && e()
                            })), s(h(o), "createCollisionGeo", (function () {
                            })), s(h(o), "rayCastFrom", (function () {
                                return !1
                            })), s(h(o), "hitTest", (function () {
                                return !1
                            })), s(h(o), "onSelection", (function () {
                            })), s(h(o), "update", (function (t, e, n) {
                                v((i = h(o), m(r.prototype)), "update", i).call(i, e, n), o.material.uniforms.u_model = o.modelMatrix, o.material.uniforms.u_scale = o.nScale
                            })), s(h(o), "draw", (function (t) {
                                o.isReady && (t.disable(t.DEPTH_TEST), t.useProgram(o.material.programInfo.program), en(t, o.material.programInfo, o.geometry.bufferInfo), tn(o.material.programInfo, o.material.uniforms), t.drawElements(t.TRIANGLES, o.geometry.bufferInfo.numElements, t.UNSIGNED_SHORT, 0), t.enable(t.DEPTH_TEST))
                            })), t.texture && (o.useTexture = !0, Or.fragment = "precision mediump float;\n#define GLSLIFY 1\nuniform sampler2D u_background;varying float vAlpha;varying vec2 vTexture;void main(){vec4 textureColor=texture2D(u_background,vTexture);gl_FragColor=textureColor;}", o.textureSrc = {texture: t.texture}), o.material = new Mn(Or), o.material.uniforms = jr, o
                        }

                        return r
                    }(rr), Gr = {
                        vertex: "#define GLSLIFY 1\nattribute vec4 position;attribute vec2 texcoord;uniform mat4 u_worldViewProjection;uniform mat4 u_viewInverse;uniform mat4 u_model;uniform mat4 u_view;uniform float u_scale;uniform vec3 u_point;uniform vec2 u_resolution;uniform vec3 u_cameraPos;varying float vAlpha;varying vec2 vTexture;void main(){vec4 pos=u_worldViewProjection*vec4(u_point,1.0);float size=u_scale*16.0;pos.y+=(size*4.0/u_resolution.y);gl_PointSize=size;gl_Position=pos;vTexture=texcoord;float d=(1.0+dot(u_point,normalize(u_cameraPos)))/2.0;vAlpha=smoothstep(0.4,0.5,d);}",
                        fragment: "precision mediump float;\n#define GLSLIFY 1\nuniform sampler2D u_background;varying float vAlpha;varying vec2 vTexture;void main(){vec4 textureColor=texture2D(u_background,gl_PointCoord);gl_FragColor=vec4(textureColor.rgb,vAlpha*textureColor.a);}"
                    }, Nr = {u_scale: 1, u_point: [0, 0, 1]}, Ur = function (t) {
                        f(r, t);
                        var e = p(r);

                        function r(t) {
                            var i, o;
                            return n(this, r), s(h(o = e.call(this)), "material", null), s(h(o), "useTexture", !1), s(h(o), "nScale", 1), s(h(o), "point", [0, 0, 1]), s(h(o), "init", (function (t, e) {
                                o.geometry = new or, o.geometry.vertices.position = [0, 0, 1], o.geometry.init(t), o.material.init(t);
                                var n = {background: {src: o.textureSrc.texture, minMag: t.LINEAR}};
                                o.material.loadTextures(t, n, (function () {
                                    o.material.uniforms.u_background = o.material.textures.background, e && e()
                                }))
                            })), s(h(o), "createCollisionGeo", (function () {
                            })), s(h(o), "rayCastFrom", (function () {
                                return !1
                            })), s(h(o), "hitTest", (function () {
                                return !1
                            })), s(h(o), "onSelection", (function () {
                            })), s(h(o), "update", (function (t, e, n) {
                                v((i = h(o), m(r.prototype)), "update", i).call(i, e, n), o.material.uniforms.u_model = o.modelMatrix, o.material.uniforms.u_scale = o.nScale, o.material.uniforms.u_point = o.point
                            })), s(h(o), "draw", (function (t) {
                                o.isReady && (t.disable(t.DEPTH_TEST), t.useProgram(o.material.programInfo.program), en(t, o.material.programInfo, o.geometry.bufferInfo), tn(o.material.programInfo, o.material.uniforms), t.drawArrays(t.POINTS, 0, o.geometry.bufferInfo.numElements), t.enable(t.DEPTH_TEST))
                            })), s(h(o), "setPoint", (function (t, e, n) {
                                var r = void 0 === n ? 0 : n;
                                o.point = fr.worldFromLatLon(t, e, r)
                            })), o.textureSrc = {texture: t.texture}, o.material = new Mn(Gr), o.material.uniforms = Nr, o
                        }

                        return r
                    }(rr), Vr = function (t) {
                        var e = {};

                        function n(r) {
                            if (e[r]) return e[r].exports;
                            var i = e[r] = {exports: {}, id: r, loaded: !1};
                            return t[r].call(i.exports, i, i.exports, n), i.loaded = !0, i.exports
                        }

                        return n.m = t, n.c = e, n.p = "", n(0)
                    }([function (t, e, n) {
                        t.exports = n(1)
                    }, function (t, n, r) {
                        var i = "function" == typeof Symbol && "symbol" === e(Symbol.iterator) ? function (t) {
                            return e(t)
                        } : function (t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t)
                        };
                        !function () {
                            var e = Math.abs, n = Math.min, o = Math.max, a = Math.cos, u = Math.sin, s = Math.acos,
                                l = Math.sqrt, c = Math.PI, f = {x: 0, y: 0, z: 0}, m = r(2), h = r(3), d = function (t) {
                                    var n = t && t.forEach ? t : [].slice.call(arguments), r = !1;
                                    if ("object" === i(n[0])) {
                                        r = n.length;
                                        var o = [];
                                        n.forEach((function (t) {
                                            ["x", "y", "z"].forEach((function (e) {
                                                void 0 !== t[e] && o.push(t[e])
                                            }))
                                        })), n = o
                                    }
                                    var a = !1, u = n.length;
                                    if (r) {
                                        if (r > 4) {
                                            if (1 !== arguments.length) throw new Error("Only new Bezier(point[]) is accepted for 4th and higher order curves");
                                            a = !0
                                        }
                                    } else if (6 !== u && 8 !== u && 9 !== u && 12 !== u && 1 !== arguments.length) throw new Error("Only new Bezier(point[]) is accepted for 4th and higher order curves");
                                    var s = !a && (9 === u || 12 === u) || t && t[0] && void 0 !== t[0].z;
                                    this._3d = s;
                                    for (var l = [], c = 0, f = s ? 3 : 2; c < u; c += f) {
                                        var h = {x: n[c], y: n[c + 1]};
                                        s && (h.z = n[c + 2]), l.push(h)
                                    }
                                    this.order = l.length - 1, this.points = l;
                                    var d = ["x", "y"];
                                    s && d.push("z"), this.dims = d, this.dimlen = d.length, function (t) {
                                        for (var n = t.order, r = t.points, i = m.align(r, {
                                            p1: r[0],
                                            p2: r[n]
                                        }), o = 0; o < i.length; o++) if (e(i[o].y) > 1e-4) return void (t._linear = !1);
                                        t._linear = !0
                                    }(this), this._t1 = 0, this._t2 = 1, this.update()
                                }, p = r(4);

                            function v(t, e, n, r, i) {
                                void 0 === i && (i = .5);
                                var o = m.projectionratio(i, t), a = 1 - o,
                                    u = {x: o * e.x + a * r.x, y: o * e.y + a * r.y}, s = m.abcratio(i, t);
                                return {A: {x: n.x + (n.x - u.x) / s, y: n.y + (n.y - u.y) / s}, B: n, C: u}
                            }

                            d.SVGtoBeziers = function (t) {
                                return p(d, t)
                            }, d.quadraticFromPoints = function (t, e, n, r) {
                                if (void 0 === r && (r = .5), 0 === r) return new d(e, e, n);
                                if (1 === r) return new d(t, e, e);
                                var i = v(2, t, e, n, r);
                                return new d(t, i.A, n)
                            }, d.cubicFromPoints = function (t, e, n, r, i) {
                                void 0 === r && (r = .5);
                                var o = v(3, t, e, n, r);
                                void 0 === i && (i = m.dist(e, o.C));
                                var a = i * (1 - r) / r, u = m.dist(t, n), s = (n.x - t.x) / u, l = (n.y - t.y) / u,
                                    c = i * s, f = i * l, h = a * s, p = a * l, g = e.x - c, y = e.y - f, _ = e.x + h,
                                    b = e.y + p, x = o.A, w = x.x + (g - x.x) / (1 - r), A = x.y + (y - x.y) / (1 - r),
                                    C = x.x + (_ - x.x) / r, T = x.y + (b - x.y) / r,
                                    I = {x: t.x + (w - t.x) / r, y: t.y + (A - t.y) / r},
                                    P = {x: n.x + (C - n.x) / (1 - r), y: n.y + (T - n.y) / (1 - r)};
                                return new d(t, I, P, n)
                            };
                            var g = function () {
                                return m
                            };
                            d.getUtils = g, d.PolyBezier = h, d.prototype = {
                                getUtils: g, valueOf: function () {
                                    return this.toString()
                                }, toString: function () {
                                    return m.pointsToString(this.points)
                                }, toSVG: function (t) {
                                    if (this._3d) return !1;
                                    for (var e = this.points, n = ["M", e[0].x, e[0].y, 2 === this.order ? "Q" : "C"], r = 1, i = e.length; r < i; r++) n.push(e[r].x), n.push(e[r].y);
                                    return n.join(" ")
                                }, setRatios: function (t) {
                                    if (t.length !== this.points.length) throw new Error("incorrect number of ratio values");
                                    this.ratios = t, this._lut = []
                                }, verify: function () {
                                    var t = this.coordDigest();
                                    t !== this._print && (this._print = t, this.update())
                                }, coordDigest: function () {
                                    return this.points.map((function (t, e) {
                                        return "" + e + t.x + t.y + (t.z ? t.z : 0)
                                    })).join("")
                                }, update: function (t) {
                                    this._lut = [], this.dpoints = m.derive(this.points, this._3d), this.computedirection()
                                }, computedirection: function () {
                                    var t = this.points, e = m.angle(t[0], t[this.order], t[1]);
                                    this.clockwise = e > 0
                                }, length: function () {
                                    return m.length(this.derivative.bind(this))
                                }, _lut: [], getLUT: function (t) {
                                    if (this.verify(), t = t || 100, this._lut.length === t) return this._lut;
                                    this._lut = [], t--;
                                    for (var e = 0; e <= t; e++) this._lut.push(this.compute(e / t));
                                    return this._lut
                                }, on: function (t, e) {
                                    e = e || 5;
                                    for (var n, r = this.getLUT(), i = [], o = 0, a = 0; a < r.length; a++) n = r[a], m.dist(n, t) < e && (i.push(n), o += a / r.length);
                                    return !!i.length && o / i.length
                                }, project: function (t) {
                                    var e, n, r, i, o = this.getLUT(), a = o.length - 1, u = m.closest(o, t), s = u.mdist,
                                        l = u.mpos, c = (l + 1) / a, f = .1 / a;
                                    for (s += 1, e = n = (l - 1) / a; n < c + f; n += f) r = this.compute(n), (i = m.dist(t, r)) < s && (s = i, e = n);
                                    return (r = this.compute(e)).t = e, r.d = s, r
                                }, get: function (t) {
                                    return this.compute(t)
                                }, point: function (t) {
                                    return this.points[t]
                                }, compute: function (t) {
                                    return this.ratios ? m.computeWithRatios(t, this.points, this.ratios, this._3d) : m.compute(t, this.points, this._3d, this.ratios)
                                }, raise: function () {
                                    for (var t, e, n = this.points, r = [n[0]], i = n.length, o = 1; o < i; o++) t = n[o], e = n[o - 1], r[o] = {
                                        x: (i - o) / i * t.x + o / i * e.x,
                                        y: (i - o) / i * t.y + o / i * e.y
                                    };
                                    return r[i] = n[i - 1], new d(r)
                                }, derivative: function (t) {
                                    var e, n, r = 1 - t, i = 0, o = this.dpoints[0];
                                    2 === this.order && (o = [o[0], o[1], f], e = r, n = t), 3 === this.order && (e = r * r, n = r * t * 2, i = t * t);
                                    var a = {
                                        x: e * o[0].x + n * o[1].x + i * o[2].x,
                                        y: e * o[0].y + n * o[1].y + i * o[2].y
                                    };
                                    return this._3d && (a.z = e * o[0].z + n * o[1].z + i * o[2].z), a
                                }, curvature: function (t) {
                                    return m.curvature(t, this.points, this._3d)
                                }, inflections: function () {
                                    return m.inflections(this.points)
                                }, normal: function (t) {
                                    return this._3d ? this.__normal3(t) : this.__normal2(t)
                                }, __normal2: function (t) {
                                    var e = this.derivative(t), n = l(e.x * e.x + e.y * e.y);
                                    return {x: -e.y / n, y: e.x / n}
                                }, __normal3: function (t) {
                                    var e = this.derivative(t), n = this.derivative(t + .01),
                                        r = l(e.x * e.x + e.y * e.y + e.z * e.z), i = l(n.x * n.x + n.y * n.y + n.z * n.z);
                                    e.x /= r, e.y /= r, e.z /= r, n.x /= i, n.y /= i, n.z /= i;
                                    var o = {x: n.y * e.z - n.z * e.y, y: n.z * e.x - n.x * e.z, z: n.x * e.y - n.y * e.x},
                                        a = l(o.x * o.x + o.y * o.y + o.z * o.z);
                                    o.x /= a, o.y /= a, o.z /= a;
                                    var u = [o.x * o.x, o.x * o.y - o.z, o.x * o.z + o.y, o.x * o.y + o.z, o.y * o.y, o.y * o.z - o.x, o.x * o.z - o.y, o.y * o.z + o.x, o.z * o.z];
                                    return {
                                        x: u[0] * e.x + u[1] * e.y + u[2] * e.z,
                                        y: u[3] * e.x + u[4] * e.y + u[5] * e.z,
                                        z: u[6] * e.x + u[7] * e.y + u[8] * e.z
                                    }
                                }, hull: function (t) {
                                    var e, n = this.points, r = [], i = [], o = 0, a = 0, u = 0;
                                    for (i[o++] = n[0], i[o++] = n[1], i[o++] = n[2], 3 === this.order && (i[o++] = n[3]); n.length > 1;) {
                                        for (r = [], a = 0, u = n.length - 1; a < u; a++) e = m.lerp(t, n[a], n[a + 1]), i[o++] = e, r.push(e);
                                        n = r
                                    }
                                    return i
                                }, split: function (t, e) {
                                    if (0 === t && e) return this.split(e).left;
                                    if (1 === e) return this.split(t).right;
                                    var n = this.hull(t), r = {
                                        left: 2 === this.order ? new d([n[0], n[3], n[5]]) : new d([n[0], n[4], n[7], n[9]]),
                                        right: 2 === this.order ? new d([n[5], n[4], n[2]]) : new d([n[9], n[8], n[6], n[3]]),
                                        span: n
                                    };
                                    return r.left._t1 = m.map(0, 0, 1, this._t1, this._t2), r.left._t2 = m.map(t, 0, 1, this._t1, this._t2), r.right._t1 = m.map(t, 0, 1, this._t1, this._t2), r.right._t2 = m.map(1, 0, 1, this._t1, this._t2), e ? (e = m.map(e, t, 1, 0, 1), r.right.split(e).left) : r
                                }, extrema: function () {
                                    var t, e, n = this.dims, r = {}, i = [];
                                    return n.forEach(function (n) {
                                        e = function (t) {
                                            return t[n]
                                        }, t = this.dpoints[0].map(e), r[n] = m.droots(t), 3 === this.order && (t = this.dpoints[1].map(e), r[n] = r[n].concat(m.droots(t))), r[n] = r[n].filter((function (t) {
                                            return t >= 0 && t <= 1
                                        })), i = i.concat(r[n].sort(m.numberSort))
                                    }.bind(this)), i = i.sort(m.numberSort).filter((function (t, e) {
                                        return i.indexOf(t) === e
                                    })), r.values = i, r
                                }, bbox: function () {
                                    var t = this.extrema(), e = {};
                                    return this.dims.forEach(function (n) {
                                        e[n] = m.getminmax(this, n, t[n])
                                    }.bind(this)), e
                                }, overlaps: function (t) {
                                    var e = this.bbox(), n = t.bbox();
                                    return m.bboxoverlap(e, n)
                                }, offset: function (t, e) {
                                    if (void 0 !== e) {
                                        var n = this.get(t), r = this.normal(t),
                                            i = {c: n, n: r, x: n.x + r.x * e, y: n.y + r.y * e};
                                        return this._3d && (i.z = n.z + r.z * e), i
                                    }
                                    if (this._linear) {
                                        var o = this.normal(0), a = this.points.map((function (e) {
                                            var n = {x: e.x + t * o.x, y: e.y + t * o.y};
                                            return e.z && r.z && (n.z = e.z + t * o.z), n
                                        }));
                                        return [new d(a)]
                                    }
                                    return this.reduce().map((function (e) {
                                        return e._linear ? e.offset(t)[0] : e.scale(t)
                                    }))
                                }, simple: function () {
                                    if (3 === this.order) {
                                        var t = m.angle(this.points[0], this.points[3], this.points[1]),
                                            n = m.angle(this.points[0], this.points[3], this.points[2]);
                                        if (t > 0 && n < 0 || t < 0 && n > 0) return !1
                                    }
                                    var r = this.normal(0), i = this.normal(1), o = r.x * i.x + r.y * i.y;
                                    return this._3d && (o += r.z * i.z), e(s(o)) < c / 3
                                }, reduce: function () {
                                    var t, n, r = 0, i = 0, o = [], a = [], u = this.extrema().values;
                                    for (-1 === u.indexOf(0) && (u = [0].concat(u)), -1 === u.indexOf(1) && u.push(1), r = u[0], t = 1; t < u.length; t++) i = u[t], (n = this.split(r, i))._t1 = r, n._t2 = i, o.push(n), r = i;
                                    return o.forEach((function (t) {
                                        for (r = 0, i = 0; i <= 1;) for (i = r + .01; i <= 1.01; i += .01) if (!(n = t.split(r, i)).simple()) {
                                            if (e(r - (i -= .01)) < .01) return [];
                                            (n = t.split(r, i))._t1 = m.map(r, 0, 1, t._t1, t._t2), n._t2 = m.map(i, 0, 1, t._t1, t._t2), a.push(n), r = i;
                                            break
                                        }
                                        r < 1 && ((n = t.split(r, 1))._t1 = m.map(r, 0, 1, t._t1, t._t2), n._t2 = t._t2, a.push(n))
                                    })), a
                                }, scale: function (t) {
                                    var e = this.order, n = !1;
                                    if ("function" == typeof t && (n = t), n && 2 === e) return this.raise().scale(n);
                                    var r = this.clockwise, i = n ? n(0) : t, o = n ? n(1) : t,
                                        a = [this.offset(0, 10), this.offset(1, 10)],
                                        u = m.lli4(a[0], a[0].c, a[1], a[1].c);
                                    if (!u) throw new Error("cannot scale this curve. Try reducing it first.");
                                    var s = this.points, c = [];
                                    return [0, 1].forEach(function (t) {
                                        var n = c[t * e] = m.copy(s[t * e]);
                                        n.x += (t ? o : i) * a[t].n.x, n.y += (t ? o : i) * a[t].n.y
                                    }.bind(this)), n ? ([0, 1].forEach(function (i) {
                                        if (2 !== this.order || !i) {
                                            var o = s[i + 1], a = {x: o.x - u.x, y: o.y - u.y}, f = n ? n((i + 1) / e) : t;
                                            n && !r && (f = -f);
                                            var m = l(a.x * a.x + a.y * a.y);
                                            a.x /= m, a.y /= m, c[i + 1] = {x: o.x + f * a.x, y: o.y + f * a.y}
                                        }
                                    }.bind(this)), new d(c)) : ([0, 1].forEach(function (t) {
                                        if (2 !== this.order || !t) {
                                            var n = c[t * e], r = this.derivative(t), i = {x: n.x + r.x, y: n.y + r.y};
                                            c[t + 1] = m.lli4(n, i, u, s[t + 1])
                                        }
                                    }.bind(this)), new d(c))
                                }, outline: function (t, e, n, r) {
                                    e = void 0 === e ? t : e;
                                    var i, o = this.reduce(), a = o.length, u = [], s = [], l = 0, c = this.length(),
                                        f = void 0 !== n && void 0 !== r;

                                    function d(t, e, n, r, i) {
                                        return function (o) {
                                            var a = r / n, u = (r + i) / n, s = e - t;
                                            return m.map(o, 0, 1, t + a * s, t + u * s)
                                        }
                                    }

                                    o.forEach((function (i) {
                                        w = i.length(), f ? (u.push(i.scale(d(t, n, c, l, w))), s.push(i.scale(d(-e, -r, c, l, w)))) : (u.push(i.scale(t)), s.push(i.scale(-e))), l += w
                                    })), s = s.map((function (t) {
                                        return (i = t.points)[3] ? t.points = [i[3], i[2], i[1], i[0]] : t.points = [i[2], i[1], i[0]], t
                                    })).reverse();
                                    var p = u[0].points[0], v = u[a - 1].points[u[a - 1].points.length - 1],
                                        g = s[a - 1].points[s[a - 1].points.length - 1], y = s[0].points[0],
                                        _ = m.makeline(g, p), b = m.makeline(v, y), x = [_].concat(u).concat([b]).concat(s),
                                        w = x.length;
                                    return new h(x)
                                }, outlineshapes: function (t, e, n) {
                                    e = e || t;
                                    for (var r = this.outline(t, e).curves, i = [], o = 1, a = r.length; o < a / 2; o++) {
                                        var u = m.makeshape(r[o], r[a - o], n);
                                        u.startcap.virtual = o > 1, u.endcap.virtual = o < a / 2 - 1, i.push(u)
                                    }
                                    return i
                                }, intersects: function (t, e) {
                                    return t ? t.p1 && t.p2 ? this.lineIntersects(t) : (t instanceof d && (t = t.reduce()), this.curveintersects(this.reduce(), t, e)) : this.selfintersects(e)
                                }, lineIntersects: function (t) {
                                    var e = n(t.p1.x, t.p2.x), r = n(t.p1.y, t.p2.y), i = o(t.p1.x, t.p2.x),
                                        a = o(t.p1.y, t.p2.y), u = this;
                                    return m.roots(this.points, t).filter((function (t) {
                                        var n = u.get(t);
                                        return m.between(n.x, e, i) && m.between(n.y, r, a)
                                    }))
                                }, selfintersects: function (t) {
                                    var e, n, r, i, o = this.reduce(), a = o.length - 2, u = [];
                                    for (e = 0; e < a; e++) r = o.slice(e, e + 1), i = o.slice(e + 2), n = this.curveintersects(r, i, t), u = u.concat(n);
                                    return u
                                }, curveintersects: function (t, e, n) {
                                    var r = [];
                                    t.forEach((function (t) {
                                        e.forEach((function (e) {
                                            t.overlaps(e) && r.push({left: t, right: e})
                                        }))
                                    }));
                                    var i = [];
                                    return r.forEach((function (t) {
                                        var e = m.pairiteration(t.left, t.right, n);
                                        e.length > 0 && (i = i.concat(e))
                                    })), i
                                }, arcs: function (t) {
                                    return t = t || .5, this._iterate(t, [])
                                }, _error: function (t, n, r, i) {
                                    var o = (i - r) / 4, a = this.get(r + o), u = this.get(i - o), s = m.dist(t, n),
                                        l = m.dist(t, a), c = m.dist(t, u);
                                    return e(l - s) + e(c - s)
                                }, _iterate: function (t, e) {
                                    var n, r = 0, i = 1;
                                    do {
                                        n = 0, i = 1;
                                        var o, s, l, c, f, h = this.get(r), d = !1, p = !1, v = i, g = 1;
                                        do {
                                            if (p = d, c = l, v = (r + i) / 2, o = this.get(v), s = this.get(i), (l = m.getccenter(h, o, s)).interval = {
                                                start: r,
                                                end: i
                                            }, d = this._error(l, h, r, i) <= t, (f = p && !d) || (g = i), d) {
                                                if (i >= 1) {
                                                    if (l.interval.end = g = 1, c = l, i > 1) {
                                                        var y = {x: l.x + l.r * a(l.e), y: l.y + l.r * u(l.e)};
                                                        l.e += m.angle({x: l.x, y: l.y}, y, this.get(1))
                                                    }
                                                    break
                                                }
                                                i += (i - r) / 2
                                            } else i = v
                                        } while (!f && n++ < 100);
                                        if (n >= 100) break;
                                        c = c || l, e.push(c), r = g
                                    } while (i < 1);
                                    return e
                                }
                            }, t.exports = d
                        }()
                    }, function (t, e, n) {
                        var r, i, o, a, u, s, l, c, f, m, h, d, p, v, g;
                        r = Math.abs, i = Math.cos, o = Math.sin, a = Math.acos, u = Math.atan2, s = Math.sqrt, l = Math.pow, c = function (t) {
                            return t < 0 ? -l(-t, 1 / 3) : l(t, 1 / 3)
                        }, f = Math.PI, m = 2 * f, h = f / 2, d = Number.MAX_SAFE_INTEGER || 9007199254740991, p = Number.MIN_SAFE_INTEGER || -9007199254740991, v = {
                            x: 0,
                            y: 0,
                            z: 0
                        }, g = {
                            Tvalues: [-.06405689286260563, .06405689286260563, -.1911188674736163, .1911188674736163, -.3150426796961634, .3150426796961634, -.4337935076260451, .4337935076260451, -.5454214713888396, .5454214713888396, -.6480936519369755, .6480936519369755, -.7401241915785544, .7401241915785544, -.820001985973903, .820001985973903, -.8864155270044011, .8864155270044011, -.9382745520027328, .9382745520027328, -.9747285559713095, .9747285559713095, -.9951872199970213, .9951872199970213],
                            Cvalues: [.12793819534675216, .12793819534675216, .1258374563468283, .1258374563468283, .12167047292780339, .12167047292780339, .1155056680537256, .1155056680537256, .10744427011596563, .10744427011596563, .09761865210411388, .09761865210411388, .08619016153195327, .08619016153195327, .0733464814110803, .0733464814110803, .05929858491543678, .05929858491543678, .04427743881741981, .04427743881741981, .028531388628933663, .028531388628933663, .0123412297999872, .0123412297999872],
                            arcfn: function (t, e) {
                                var n = e(t), r = n.x * n.x + n.y * n.y;
                                return void 0 !== n.z && (r += n.z * n.z), s(r)
                            },
                            compute: function (t, e, n) {
                                if (0 === t) return e[0];
                                var r = e.length - 1;
                                if (1 === t) return e[r];
                                var i = e, o = 1 - t;
                                if (0 === r) return e[0];
                                if (1 === r) return m = {
                                    x: o * i[0].x + t * i[1].x,
                                    y: o * i[0].y + t * i[1].y
                                }, n && (m.z = o * i[0].z + t * i[1].z), m;
                                if (r < 4) {
                                    var a, u, s, l = o * o, c = t * t, f = 0;
                                    2 === r ? (i = [i[0], i[1], i[2], v], a = l, u = o * t * 2, s = c) : 3 === r && (a = l * o, u = l * t * 3, s = o * c * 3, f = t * c);
                                    var m = {
                                        x: a * i[0].x + u * i[1].x + s * i[2].x + f * i[3].x,
                                        y: a * i[0].y + u * i[1].y + s * i[2].y + f * i[3].y
                                    };
                                    return n && (m.z = a * i[0].z + u * i[1].z + s * i[2].z + f * i[3].z), m
                                }
                                for (var h = JSON.parse(JSON.stringify(e)); h.length > 1;) {
                                    for (var d = 0; d < h.length - 1; d++) h[d] = {
                                        x: h[d].x + (h[d + 1].x - h[d].x) * t,
                                        y: h[d].y + (h[d + 1].y - h[d].y) * t
                                    }, void 0 !== h[d].z && (h[d] = h[d].z + (h[d + 1].z - h[d].z) * t);
                                    h.splice(h.length - 1, 1)
                                }
                                return h[0]
                            },
                            computeWithRatios: function (t, e, n, r) {
                                var i, o = 1 - t, a = n, u = e, s = a[0], l = a[1], c = a[2], f = a[3];
                                return s *= o, l *= t, 2 === u.length ? (i = s + l, {
                                    x: (s * u[0].x + l * u[1].x) / i,
                                    y: (s * u[0].y + l * u[1].y) / i,
                                    z: !!r && (s * u[0].z + l * u[1].z) / i
                                }) : (s *= o, l *= 2 * o, c *= t * t, 3 === u.length ? (i = s + l + c, {
                                    x: (s * u[0].x + l * u[1].x + c * u[2].x) / i,
                                    y: (s * u[0].y + l * u[1].y + c * u[2].y) / i,
                                    z: !!r && (s * u[0].z + l * u[1].z + c * u[2].z) / i
                                }) : (s *= o, l *= 1.5 * o, c *= 3 * o, f *= t * t * t, 4 === u.length ? (i = s + l + c + f, {
                                    x: (s * u[0].x + l * u[1].x + c * u[2].x + f * u[3].x) / i,
                                    y: (s * u[0].y + l * u[1].y + c * u[2].y + f * u[3].y) / i,
                                    z: !!r && (s * u[0].z + l * u[1].z + c * u[2].z + f * u[3].z) / i
                                }) : void 0))
                            },
                            derive: function (t, e) {
                                for (var n = [], r = t, i = r.length, o = i - 1; i > 1; i--, o--) {
                                    for (var a, u = [], s = 0; s < o; s++) a = {
                                        x: o * (r[s + 1].x - r[s].x),
                                        y: o * (r[s + 1].y - r[s].y)
                                    }, e && (a.z = o * (r[s + 1].z - r[s].z)), u.push(a);
                                    n.push(u), r = u
                                }
                                return n
                            },
                            between: function (t, e, n) {
                                return e <= t && t <= n || g.approximately(t, e) || g.approximately(t, n)
                            },
                            approximately: function (t, e, n) {
                                return r(t - e) <= (n || 1e-6)
                            },
                            length: function (t) {
                                var e, n, r = 0, i = g.Tvalues.length;
                                for (e = 0; e < i; e++) n = .5 * g.Tvalues[e] + .5, r += g.Cvalues[e] * g.arcfn(n, t);
                                return .5 * r
                            },
                            map: function (t, e, n, r, i) {
                                return r + (t - e) / (n - e) * (i - r)
                            },
                            lerp: function (t, e, n) {
                                var r = {x: e.x + t * (n.x - e.x), y: e.y + t * (n.y - e.y)};
                                return e.z && n.z && (r.z = e.z + t * (n.z - e.z)), r
                            },
                            pointToString: function (t) {
                                var e = t.x + "/" + t.y;
                                return void 0 !== t.z && (e += "/" + t.z), e
                            },
                            pointsToString: function (t) {
                                return "[" + t.map(g.pointToString).join(", ") + "]"
                            },
                            copy: function (t) {
                                return JSON.parse(JSON.stringify(t))
                            },
                            angle: function (t, e, n) {
                                var r = e.x - t.x, i = e.y - t.y, o = n.x - t.x, a = n.y - t.y;
                                return u(r * a - i * o, r * o + i * a)
                            },
                            round: function (t, e) {
                                var n = "" + t, r = n.indexOf(".");
                                return parseFloat(n.substring(0, r + 1 + e))
                            },
                            dist: function (t, e) {
                                var n = t.x - e.x, r = t.y - e.y;
                                return s(n * n + r * r)
                            },
                            closest: function (t, e) {
                                var n, r, i = l(2, 63);
                                return t.forEach((function (t, o) {
                                    (r = g.dist(e, t)) < i && (i = r, n = o)
                                })), {mdist: i, mpos: n}
                            },
                            abcratio: function (t, e) {
                                if (2 !== e && 3 !== e) return !1;
                                if (void 0 === t) t = .5; else if (0 === t || 1 === t) return t;
                                var n = l(t, e) + l(1 - t, e);
                                return r((n - 1) / n)
                            },
                            projectionratio: function (t, e) {
                                if (2 !== e && 3 !== e) return !1;
                                if (void 0 === t) t = .5; else if (0 === t || 1 === t) return t;
                                var n = l(1 - t, e);
                                return n / (l(t, e) + n)
                            },
                            lli8: function (t, e, n, r, i, o, a, u) {
                                var s = (t - n) * (o - u) - (e - r) * (i - a);
                                return 0 != s && {
                                    x: ((t * r - e * n) * (i - a) - (t - n) * (i * u - o * a)) / s,
                                    y: ((t * r - e * n) * (o - u) - (e - r) * (i * u - o * a)) / s
                                }
                            },
                            lli4: function (t, e, n, r) {
                                var i = t.x, o = t.y, a = e.x, u = e.y, s = n.x, l = n.y, c = r.x, f = r.y;
                                return g.lli8(i, o, a, u, s, l, c, f)
                            },
                            lli: function (t, e) {
                                return g.lli4(t, t.c, e, e.c)
                            },
                            makeline: function (t, e) {
                                var r = n(1), i = t.x, o = t.y, a = e.x, u = e.y, s = (a - i) / 3, l = (u - o) / 3;
                                return new r(i, o, i + s, o + l, i + 2 * s, o + 2 * l, a, u)
                            },
                            findbbox: function (t) {
                                var e = d, n = d, r = p, i = p;
                                return t.forEach((function (t) {
                                    var o = t.bbox();
                                    e > o.x.min && (e = o.x.min), n > o.y.min && (n = o.y.min), r < o.x.max && (r = o.x.max), i < o.y.max && (i = o.y.max)
                                })), {
                                    x: {min: e, mid: (e + r) / 2, max: r, size: r - e},
                                    y: {min: n, mid: (n + i) / 2, max: i, size: i - n}
                                }
                            },
                            shapeintersections: function (t, e, n, r, i) {
                                if (!g.bboxoverlap(e, r)) return [];
                                var o = [], a = [t.startcap, t.forward, t.back, t.endcap],
                                    u = [n.startcap, n.forward, n.back, n.endcap];
                                return a.forEach((function (e) {
                                    e.virtual || u.forEach((function (r) {
                                        if (!r.virtual) {
                                            var a = e.intersects(r, i);
                                            a.length > 0 && (a.c1 = e, a.c2 = r, a.s1 = t, a.s2 = n, o.push(a))
                                        }
                                    }))
                                })), o
                            },
                            makeshape: function (t, e, n) {
                                var r = e.points.length, i = t.points.length, o = g.makeline(e.points[r - 1], t.points[0]),
                                    a = g.makeline(t.points[i - 1], e.points[0]),
                                    u = {startcap: o, forward: t, back: e, endcap: a, bbox: g.findbbox([o, t, e, a])},
                                    s = g;
                                return u.intersections = function (t) {
                                    return s.shapeintersections(u, u.bbox, t, t.bbox, n)
                                }, u
                            },
                            getminmax: function (t, e, n) {
                                if (!n) return {min: 0, max: 0};
                                var r, i, o = d, a = p;
                                -1 === n.indexOf(0) && (n = [0].concat(n)), -1 === n.indexOf(1) && n.push(1);
                                for (var u = 0, s = n.length; u < s; u++) r = n[u], (i = t.get(r))[e] < o && (o = i[e]), i[e] > a && (a = i[e]);
                                return {min: o, mid: (o + a) / 2, max: a, size: a - o}
                            },
                            align: function (t, e) {
                                var n = e.p1.x, r = e.p1.y, a = -u(e.p2.y - r, e.p2.x - n);
                                return t.map((function (t) {
                                    return {x: (t.x - n) * i(a) - (t.y - r) * o(a), y: (t.x - n) * o(a) + (t.y - r) * i(a)}
                                }))
                            },
                            roots: function (t, e) {
                                e = e || {p1: {x: 0, y: 0}, p2: {x: 1, y: 0}};
                                var n = t.length - 1, r = g.align(t, e), o = function (t) {
                                    return 0 <= t && t <= 1
                                };
                                if (2 === n) {
                                    if (0 !== (p = (v = r[0].y) - 2 * (y = r[1].y) + (_ = r[2].y))) {
                                        var u = -s(y * y - v * _), l = -v + y;
                                        return [-(u + l) / p, -(-u + l) / p].filter(o)
                                    }
                                    return y !== _ && 0 === p ? [(2 * y - _) / (2 * y - 2 * _)].filter(o) : []
                                }
                                var f = r[0].y, h = r[1].y, d = r[2].y, p = 3 * h - f - 3 * d + r[3].y,
                                    v = 3 * f - 6 * h + 3 * d, y = -3 * f + 3 * h, _ = f;
                                if (g.approximately(p, 0)) {
                                    if (g.approximately(v, 0)) return g.approximately(y, 0) ? [] : [-_ / y].filter(o);
                                    var b = 2 * v;
                                    return [((x = s(y * y - 4 * v * _)) - y) / b, (-y - x) / b].filter(o)
                                }
                                var x, w, A = (r = (3 * (y /= p) - (v /= p) * v) / 3) / 3,
                                    C = (x = (2 * v * v * v - 9 * v * y + 27 * (_ /= p)) / 27) / 2, T = C * C + A * A * A;
                                if (T < 0) {
                                    var I = -r / 3, P = s(I * I * I), S = -x / (2 * P), E = a(S < -1 ? -1 : S > 1 ? 1 : S),
                                        L = 2 * c(P);
                                    return [L * i(E / 3) - v / 3, L * i((E + m) / 3) - v / 3, L * i((E + 2 * m) / 3) - v / 3].filter(o)
                                }
                                if (0 === T) return [2 * (w = C < 0 ? c(-C) : -c(C)) - v / 3, -w - v / 3].filter(o);
                                var M = s(T);
                                return [(w = c(-C + M)) - c(C + M) - v / 3].filter(o)
                            },
                            droots: function (t) {
                                if (3 === t.length) {
                                    var e = t[0], n = t[1], r = t[2], i = e - 2 * n + r;
                                    if (0 !== i) {
                                        var o = -s(n * n - e * r), a = -e + n;
                                        return [-(o + a) / i, -(-o + a) / i]
                                    }
                                    return n !== r && 0 === i ? [(2 * n - r) / (2 * (n - r))] : []
                                }
                                if (2 === t.length) return (e = t[0]) !== (n = t[1]) ? [e / (e - n)] : []
                            },
                            curvature: function (t, e, n, i) {
                                var o, a, u, c, f, m, h = g.derive(e), d = h[0], p = h[1], v = g.compute(t, d),
                                    y = g.compute(t, p), _ = v.x * v.x + v.y * v.y;
                                if (n ? (o = s(l(v.y * y.z - y.y * v.z, 2) + l(v.z * y.x - y.z * v.x, 2) + l(v.x * y.y - y.x * v.y, 2)), a = l(_ + v.z * v.z, 1.5)) : (o = v.x * y.y - v.y * y.x, a = l(_, 1.5)), 0 === o || 0 === a) return {
                                    k: 0,
                                    r: 0
                                };
                                if (f = o / a, m = a / o, !i) {
                                    var b = g.curvature(t - .001, e, n, !0).k, x = g.curvature(t + .001, e, n, !0).k;
                                    c = (x - f + (f - b)) / 2, u = (r(x - f) + r(f - b)) / 2
                                }
                                return {k: f, r: m, dk: c, adk: u}
                            },
                            inflections: function (t) {
                                if (t.length < 4) return [];
                                var e = g.align(t, {p1: t[0], p2: t.slice(-1)[0]}), n = e[2].x * e[1].y,
                                    r = e[3].x * e[1].y, i = e[1].x * e[2].y,
                                    o = 18 * (-3 * n + 2 * r + 3 * i - e[3].x * e[2].y), a = 18 * (3 * n - r - 3 * i),
                                    u = 18 * (i - n);
                                if (g.approximately(o, 0)) {
                                    if (!g.approximately(a, 0)) {
                                        var s = -u / a;
                                        if (0 <= s && s <= 1) return [s]
                                    }
                                    return []
                                }
                                var l = a * a - 4 * o * u, c = Math.sqrt(l), f = 2 * o;
                                return g.approximately(f, 0) ? [] : [(c - a) / f, -(a + c) / f].filter((function (t) {
                                    return 0 <= t && t <= 1
                                }))
                            },
                            bboxoverlap: function (t, e) {
                                var n, i, o, a, u, s = ["x", "y"], l = s.length;
                                for (n = 0; n < l; n++) if (o = t[i = s[n]].mid, a = e[i].mid, u = (t[i].size + e[i].size) / 2, r(o - a) >= u) return !1;
                                return !0
                            },
                            expandbox: function (t, e) {
                                e.x.min < t.x.min && (t.x.min = e.x.min), e.y.min < t.y.min && (t.y.min = e.y.min), e.z && e.z.min < t.z.min && (t.z.min = e.z.min), e.x.max > t.x.max && (t.x.max = e.x.max), e.y.max > t.y.max && (t.y.max = e.y.max), e.z && e.z.max > t.z.max && (t.z.max = e.z.max), t.x.mid = (t.x.min + t.x.max) / 2, t.y.mid = (t.y.min + t.y.max) / 2, t.z && (t.z.mid = (t.z.min + t.z.max) / 2), t.x.size = t.x.max - t.x.min, t.y.size = t.y.max - t.y.min, t.z && (t.z.size = t.z.max - t.z.min)
                            },
                            pairiteration: function (t, e, n) {
                                var r = t.bbox(), i = e.bbox(), o = 1e5, a = n || .5;
                                if (r.x.size + r.y.size < a && i.x.size + i.y.size < a) return [(o * (t._t1 + t._t2) / 2 | 0) / o + "/" + (o * (e._t1 + e._t2) / 2 | 0) / o];
                                var u = t.split(.5), s = e.split(.5),
                                    l = [{left: u.left, right: s.left}, {left: u.left, right: s.right}, {
                                        left: u.right,
                                        right: s.right
                                    }, {left: u.right, right: s.left}];
                                l = l.filter((function (t) {
                                    return g.bboxoverlap(t.left.bbox(), t.right.bbox())
                                }));
                                var c = [];
                                return 0 === l.length ? c : (l.forEach((function (t) {
                                    c = c.concat(g.pairiteration(t.left, t.right, a))
                                })), c = c.filter((function (t, e) {
                                    return c.indexOf(t) === e
                                })))
                            },
                            getccenter: function (t, e, n) {
                                var r, a = e.x - t.x, s = e.y - t.y, l = n.x - e.x, c = n.y - e.y, f = a * i(h) - s * o(h),
                                    d = a * o(h) + s * i(h), p = l * i(h) - c * o(h), v = l * o(h) + c * i(h),
                                    y = (t.x + e.x) / 2, _ = (t.y + e.y) / 2, b = (e.x + n.x) / 2, x = (e.y + n.y) / 2,
                                    w = y + f, A = _ + d, C = b + p, T = x + v, I = g.lli8(y, _, w, A, b, x, C, T),
                                    P = g.dist(I, t), S = u(t.y - I.y, t.x - I.x), E = u(e.y - I.y, e.x - I.x),
                                    L = u(n.y - I.y, n.x - I.x);
                                return S < L ? ((S > E || E > L) && (S += m), S > L && (r = L, L = S, S = r)) : L < E && E < S ? (r = L, L = S, S = r) : L += m, I.s = S, I.e = L, I.r = P, I
                            },
                            numberSort: function (t, e) {
                                return t - e
                            }
                        }, t.exports = g
                    }, function (t, e, n) {
                        var r, i;
                        r = n(2), (i = function (t) {
                            this.curves = [], this._3d = !1, t && (this.curves = t, this._3d = this.curves[0]._3d)
                        }).prototype = {
                            valueOf: function () {
                                return this.toString()
                            }, toString: function () {
                                return "[" + this.curves.map((function (t) {
                                    return r.pointsToString(t.points)
                                })).join(", ") + "]"
                            }, addCurve: function (t) {
                                this.curves.push(t), this._3d = this._3d || t._3d
                            }, length: function () {
                                return this.curves.map((function (t) {
                                    return t.length()
                                })).reduce((function (t, e) {
                                    return t + e
                                }))
                            }, curve: function (t) {
                                return this.curves[t]
                            }, bbox: function () {
                                for (var t = this.curves, e = t[0].bbox(), n = 1; n < t.length; n++) r.expandbox(e, t[n].bbox());
                                return e
                            }, offset: function (t) {
                                var e = [];
                                return this.curves.forEach((function (n) {
                                    e = e.concat(n.offset(t))
                                })), new i(e)
                            }
                        }, t.exports = i
                    }, function (t, e, n) {
                        var r = n(5), i = {x: !1, y: !1};

                        function o(t, e, n) {
                            if ("Z" !== e) {
                                if ("M" !== e) {
                                    var r = [!1, i.x, i.y].concat(n), o = new (t.bind.apply(t, r)), a = n.slice(-2);
                                    return i = {x: a[0], y: a[1]}, o
                                }
                                i = {x: n[0], y: n[1]}
                            }
                        }

                        t.exports = function (t, e) {
                            for (var n, i, a = r(e).split(" "), u = new RegExp("[MLCQZ]", ""), s = [], l = {
                                C: 6,
                                Q: 4,
                                L: 2,
                                M: 2
                            }; a.length;) n = a.splice(0, 1)[0], u.test(n) && (i = o(t, n, a.splice(0, l[n]).map(parseFloat))) && s.push(i);
                            return new t.PolyBezier(s)
                        }
                    }, function (t, e) {
                        t.exports = function (t) {
                            var e, n, r, i, o, a,
                                u = (t = t.replace(/,/g, " ").replace(/-/g, " - ").replace(/-\s+/g, "-").replace(/([a-zA-Z])/g, " $1 ")).replace(/([a-zA-Z])\s?/g, "|$1").split("|"),
                                s = u.length, l = [], c = 0, f = 0, m = 0, h = 0, d = 0, p = 0, v = 0, g = 0, y = "";
                            for (e = 1; e < s; e++) if (i = (r = (n = u[e]).substring(0, 1)).toLowerCase(), o = (l = (l = n.replace(r, "").trim().split(" ")).filter((function (t) {
                                return "" !== t
                            })).map(parseFloat)).length, "m" === i) {
                                if (y += "M ", "m" === r ? (m += l[0], h += l[1]) : (m = l[0], h = l[1]), c = m, f = h, y += m + " " + h + " ", o > 2) for (a = 0; a < o; a += 2) "m" === r ? (m += l[a], h += l[a + 1]) : (m = l[a], h = l[a + 1]), y += ["L", m, h, ""].join(" ")
                            } else if ("l" === i) for (a = 0; a < o; a += 2) "l" === r ? (m += l[a], h += l[a + 1]) : (m = l[a], h = l[a + 1]), y += ["L", m, h, ""].join(" "); else if ("h" === i) for (a = 0; a < o; a++) "h" === r ? m += l[a] : m = l[a], y += ["L", m, h, ""].join(" "); else if ("v" === i) for (a = 0; a < o; a++) "v" === r ? h += l[a] : h = l[a], y += ["L", m, h, ""].join(" "); else if ("q" === i) for (a = 0; a < o; a += 4) "q" === r ? (d = m + l[a], p = h + l[a + 1], m += l[a + 2], h += l[a + 3]) : (d = l[a], p = l[a + 1], m = l[a + 2], h = l[a + 3]), y += ["Q", d, p, m, h, ""].join(" "); else if ("t" === i) for (a = 0; a < o; a += 2) d = m + (m - d), p = h + (h - p), "t" === r ? (m += l[a], h += l[a + 1]) : (m = l[a], h = l[a + 1]), y += ["Q", d, p, m, h, ""].join(" "); else if ("c" === i) for (a = 0; a < o; a += 6) "c" === r ? (d = m + l[a], p = h + l[a + 1], v = m + l[a + 2], g = h + l[a + 3], m += l[a + 4], h += l[a + 5]) : (d = l[a], p = l[a + 1], v = l[a + 2], g = l[a + 3], m = l[a + 4], h = l[a + 5]), y += ["C", d, p, v, g, m, h, ""].join(" "); else if ("s" === i) for (a = 0; a < o; a += 4) d = m + (m - v), p = h + (h - g), "s" === r ? (v = m + l[a], g = h + l[a + 1], m += l[a + 2], h += l[a + 3]) : (v = l[a], g = l[a + 1], m = l[a + 2], h = l[a + 3]), y += ["C", d, p, v, g, m, h, ""].join(" "); else "z" === i && (y += "Z ", m = c, h = f);
                            return y.trim()
                        }
                    }]),
                    Wr = "#define GLSLIFY 1\nattribute vec4 position;attribute vec2 texcoord;attribute vec3 pointA;attribute vec3 pointB;attribute vec3 startColor;attribute vec3 endColor;attribute vec2 width;attribute float inst;attribute float shouldDraw;uniform mat4 u_worldViewProjection;uniform mat4 u_viewInverse;uniform mat4 u_model;uniform vec3 u_cameraPos;uniform vec2 u_resolution;uniform float u_segments;varying vec3 v_color;varying float v_alpha;varying float v_draw;float when_lt(float x,float y){return max(sign(y-x),0.0);}void main(){float rel_inst=inst+position.z;float width=mix(width.x,width.y,rel_inst);vec4 clip0=u_worldViewProjection*u_model*vec4(pointA,1.0);vec4 clip1=u_worldViewProjection*u_model*vec4(pointB,1.0);vec2 screen0=u_resolution*(0.5*clip0.xy/clip0.w+0.5);vec2 screen1=u_resolution*(0.5*clip1.xy/clip1.w+0.5);vec2 xBasis=normalize(screen1-screen0);vec2 yBasis=vec2(-xBasis.y,xBasis.x);vec2 pt0=screen0+width*(position.x*xBasis+position.y*yBasis);vec2 pt1=screen1+width*(position.x*xBasis+position.y*yBasis);vec2 pt=mix(pt0,pt1,position.z);vec4 clip=mix(clip0,clip1,position.z);gl_Position=vec4(clip.w*(2.0*pt/u_resolution-1.0),clip.z,clip.w)*when_lt(inst,u_segments);gl_PointSize=16.0;v_alpha=rel_inst/u_segments;v_color=mix(startColor,endColor,rel_inst/u_segments);v_draw=shouldDraw;}",
                    Hr = "precision mediump float;\n#define GLSLIFY 1\nuniform float u_time;varying vec3 v_color;varying float v_alpha;varying float v_draw;void main(){if(v_alpha>v_draw){discard;}gl_FragColor=vec4(v_color,1.0);}",
                    Yr = function (t) {
                        f(r, t);
                        var e = p(r);

                        function r(t) {
                            var i, o;
                            n(this, r), s(h(o = e.call(this, t)), "numInstances", 1e4), s(h(o), "init", (function (t) {
                                o.geometry.init(t), o._hasGeometry = !0, o.material.init(t), o.material.texturesLoaded = !0, o.vertexArrayInfo = nn(t, o.material.programInfo, o.geometry.bufferInfo)
                            })), s(h(o), "createCollisionGeo", (function () {
                            })), s(h(o), "update", (function (t, e, n) {
                                v((i = h(o), m(r.prototype)), "update", i).call(i, e, n), o.material.uniforms.u_model = o.modelMatrix
                            })), s(h(o), "draw", (function (t) {
                                o.isReady && (t.useProgram(o.material.programInfo.program), en(t, o.material.programInfo, o.vertexArrayInfo), tn(o.material.programInfo, o.material.uniforms), t.drawElementsInstanced(t.TRIANGLE_FAN, o.vertexArrayInfo.numElements, t.UNSIGNED_SHORT, 0, 3 * o.segments - 1), t.bindVertexArray(null))
                            })), s(h(o), "rayCastFrom", (function () {
                                return !1
                            })), s(h(o), "hitTest", (function () {
                                return !1
                            })), s(h(o), "onSelectionCB", (function (t) {
                                return t
                            })), s(h(o), "onSelection", (function (t, e) {
                                var n = o.getNearest(t, e);
                                return o.onSelectionCB(n)
                            })), t && void 0 !== t.numInstances && (o.numInstances = t.numInstances);
                            var a = {vertex: Wr, fragment: Hr};
                            o.material = new Mn(a), o.material.uniforms = {}, o.geometry = new or;
                            var u = [0, -.5, 0, 0, -.5, 1, 0, .5, 1, 0, -.5, 0, 0, .5, 1, 0, .5, 0],
                                l = Array.from(Array(101).keys());
                            l.forEach((function (t) {
                                l.push(t)
                            })), l.forEach((function (t) {
                                l.push(t)
                            }));
                            for (var c = Array.from(Array(3).keys()), f = 0; f < 15; f += 1) {
                                var d = Math.PI / 2 + (f + 0) * Math.PI / 15, p = Math.PI / 2 + (f + 1) * Math.PI / 15;
                                u.push.apply(u, [0, 0, 0]), u.push.apply(u, [.5 * Math.cos(d), .5 * Math.sin(d), 0]), u.push.apply(u, [.5 * Math.cos(p), .5 * Math.sin(p), 0])
                            }
                            for (var g = 0; g < 15; g += 1) {
                                var _ = 3 * Math.PI / 2 + (g + 0) * Math.PI / 15,
                                    b = 3 * Math.PI / 2 + (g + 1) * Math.PI / 15;
                                u.push.apply(u, [0, 0, 1]), u.push.apply(u, [.5 * Math.cos(_), .5 * Math.sin(_), 1]), u.push.apply(u, [.5 * Math.cos(b), .5 * Math.sin(b), 1])
                            }
                            var x = [].concat(y(fr.worldFromLatLon(41, -111, .001)), y(fr.worldFromLatLon(20, -50, 1)), y(fr.worldFromLatLon(0, 0, .001)));
                            o.segments = 100;
                            var w = new Vr(x).getLUT(o.segments + 1), A = [];
                            return w.forEach((function (t) {
                                A.push.apply(A, y(Object.values(t)))
                            })), new Vr([-1, 0, 0, -2, 0, -2, 0, 0, -1]).getLUT(o.segments + 1).forEach((function (t) {
                                A.push.apply(A, y(Object.values(t)))
                            })), new Vr([-1, 1, -1, -2, 0, -2, 0, -1, -1]).getLUT(o.segments + 1).forEach((function (t) {
                                A.push.apply(A, y(Object.values(t)))
                            })), o.geometry.vertices.position = {
                                numComponents: 3,
                                data: u,
                                divisor: 0
                            }, o.geometry.vertices.pointA = {
                                numComponents: 3,
                                data: A,
                                divisor: 1,
                                offset: 0 * Float32Array.BYTES_PER_ELEMENT
                            }, o.geometry.vertices.pointB = {
                                numComponents: 3,
                                data: A,
                                divisor: 1,
                                offset: 3 * Float32Array.BYTES_PER_ELEMENT
                            }, o.geometry.vertices.inst = {
                                numComponents: 1,
                                data: l,
                                divisor: 1
                            }, o.geometry.vertices.arc = {
                                numComponents: 1,
                                data: c,
                                divisor: 101
                            }, o.geometry.vertices.indices = {
                                numComponents: 1,
                                data: Array.from(Array(96).keys()),
                                divisor: 0
                            }, o
                        }

                        return r
                    }(Pr), Xr = function (t) {
                        f(r, t);
                        var e = p(r);

                        function r(t) {
                            var i, o;
                            n(this, r), s(h(o = e.call(this, t)), "numInstances", 1e4), s(h(o), "segments", 30), s(h(o), "capResolution", 6), s(h(o), "_arcCount", 0), s(h(o), "_tweens", []), s(h(o), "init", (function (t) {
                                o.geometry.init(t), o._hasGeometry = !0, o.material.init(t), o.material.texturesLoaded = !0, o.vertexArrayInfo = nn(t, o.material.programInfo, o.geometry.bufferInfo)
                            })), s(h(o), "createRandomArcs", (function (t) {
                                for (var e = 0; e < t; e += 1) {
                                    var n = {
                                        from: [180 * Math.random() - 90, 360 * Math.random() - 180],
                                        to: [180 * Math.random() - 90, 360 * Math.random() - 180]
                                    };
                                    o.addArc(n)
                                }
                            })), s(h(o), "addArc", (function (t, e, n) {
                                var r = [], i = {
                                    from: t.from,
                                    to: t.to,
                                    normalFactor: 1,
                                    alt: .5,
                                    startColor: "#ff0000",
                                    endColor: "#00ff00",
                                    startWidth: 4,
                                    endWidth: 4,
                                    shouldDraw: 1,
                                    arcNumber: o._arcCount
                                };
                                void 0 !== o.transform && (i = o.transform(t, i)), r.push.apply(r, y(o._createArcFrom(i)));
                                var a = Array.from(Array(1).keys()), u = o._createInstArray(1),
                                    s = fr.hexToRGB(i.startColor), l = fr.hexToRGB(i.endColor),
                                    c = [i.startWidth, i.endWidth];
                                if (void 0 !== e) {
                                    i.shouldDraw = 0;
                                    var f = o._arcCount, m = new mr(0, 1, e, {
                                        onUpdate: function (t) {
                                            o.geometry.updateGeometry({shouldDraw: {data: [t]}}, f)
                                        }, onComplete: function () {
                                            n && n()
                                        }
                                    });
                                    o._tweens.push(m)
                                }
                                var h = [i.shouldDraw], d = {
                                    pointA: {data: new Float32Array(r)},
                                    pointB: {data: r},
                                    inst: {data: u},
                                    arc: {data: a},
                                    startColor: {data: s},
                                    endColor: {data: l},
                                    width: {data: c},
                                    shouldDraw: {data: h}
                                };
                                o.geometry.updateGeometry(d, o._arcCount), o._arcCount += 1
                            })), s(h(o), "updateArc", (function (t, e) {
                                var n = [], r = {
                                    from: t.from,
                                    to: t.to,
                                    normalFactor: 1,
                                    alt: .5,
                                    startColor: "#ff0000",
                                    endColor: "#00ff00",
                                    startWidth: 4,
                                    endWidth: 4,
                                    shouldDraw: 1,
                                    arcNumber: o._arcCount
                                };
                                r = o.transform(t, r), n.push.apply(n, y(o._createArcFrom(r)));
                                var i = Array.from(Array(1).keys()), a = o._createInstArray(1),
                                    u = fr.hexToRGB(r.startColor), s = fr.hexToRGB(r.endColor),
                                    l = [r.startWidth, r.endWidth], c = [r.shouldDraw], f = {
                                        pointA: {data: new Float32Array(n)},
                                        pointB: {data: n},
                                        inst: {data: a},
                                        arc: {data: i},
                                        startColor: {data: u},
                                        endColor: {data: s},
                                        width: {data: l},
                                        shouldDraw: {data: c}
                                    };
                                o.geometry.updateGeometry(f, e)
                            })), s(h(o), "_createArcFrom", (function (t) {
                                var e = o._computeControlPoints(t), n = new Vr(e.cp0), r = new Vr(e.cp1),
                                    i = n.getLUT(o._pointsPerArcHalf), a = r.getLUT(o._pointsPerArcHalf), u = [];
                                i.reverse().forEach((function (t) {
                                    u.push(t)
                                })), a.forEach((function (t) {
                                    u.push(t)
                                })), u.splice(o._pointsPerArcHalf, 1);
                                var s = [];
                                return u.forEach((function (t) {
                                    s.push.apply(s, y(Object.values(t)))
                                })), s
                            })), s(h(o), "_computeControlPoints", (function (t) {
                                var e = fr.worldFromLatLon(t.from[0], t.from[1], .005),
                                    n = fr.worldFromLatLon(t.to[0], t.to[1], .005), r = yn();
                                Tn(r, e, n, .5);
                                var i = fr.latLonFromWorld(r), o = fr.worldFromLatLon(i.lat, i.lon, t.alt), a = yn();
                                xn(a, e, r), wn(a, a, t.normalFactor);
                                var u = yn();
                                bn(u, o, a);
                                var s = yn();
                                xn(s, o, a);
                                var l = [];
                                l.push.apply(l, y(o)), l.push.apply(l, y(u)), l.push.apply(l, y(e));
                                var c = [];
                                return c.push.apply(c, y(o)), c.push.apply(c, y(s)), c.push.apply(c, y(n)), {cp0: l, cp1: c}
                            })), s(h(o), "_createInstArray", (function (t) {
                                for (var e = Array.from(Array(o.segments + 1).keys()), n = [], r = 0; r < t; r += 1) e.forEach((function (t) {
                                    n.push(t)
                                }));
                                return n
                            })), s(h(o), "createCollisionGeo", (function () {
                            })), s(h(o), "update", (function (t, e, n) {
                                v((i = h(o), m(r.prototype)), "update", i).call(i, e, n), o.material.uniforms.u_model = o.modelMatrix, o.material.uniforms.u_time = n, o.geometry.isDirty && o.geometry.updateBuffers(t)
                            })), s(h(o), "draw", (function (t) {
                                !o.isReady || o._arcCount <= 0 || (t.useProgram(o.material.programInfo.program), en(t, o.material.programInfo, o.vertexArrayInfo), tn(o.material.programInfo, o.material.uniforms), t.drawElementsInstanced(t.TRIANGLE_FAN, o.vertexArrayInfo.numElements, t.UNSIGNED_SHORT, 0, (o.segments + 1) * o._arcCount), t.bindVertexArray(null))
                            })), s(h(o), "rayCastFrom", (function () {
                                return !1
                            })), s(h(o), "hitTest", (function () {
                                return !1
                            })), s(h(o), "onSelectionCB", (function (t) {
                                return t
                            })), s(h(o), "onSelection", (function (t, e) {
                                var n = o.getNearest(t, e);
                                return o.onSelectionCB(n)
                            })), t && (void 0 !== t.numInstances && (o.numInstances = t.numInstances), void 0 !== t.segments && (o.segments = t.segments), void 0 !== t.transform && (o.transform = t.transform)), o._pointsPerArcHalf = o.segments / 2 + 1;
                            var a = {vertex: Wr, fragment: Hr};
                            o.material = new Mn(a), o.material.uniforms = {u_segments: o.segments}, o.geometry = new or;
                            for (var u = [0, -.5, 0, 0, -.5, 1, 0, .5, 1, 0, -.5, 0, 0, .5, 1, 0, .5, 0], l = 0; l < o.capResolution; l += 1) {
                                var c = Math.PI / 2 + (l + 0) * Math.PI / o.capResolution,
                                    f = Math.PI / 2 + (l + 1) * Math.PI / o.capResolution;
                                u.push.apply(u, [0, 0, 0]), u.push.apply(u, [.5 * Math.cos(c), .5 * Math.sin(c), 0]), u.push.apply(u, [.5 * Math.cos(f), .5 * Math.sin(f), 0])
                            }
                            for (var d = 0; d < o.capResolution; d += 1) {
                                var p = 3 * Math.PI / 2 + (d + 0) * Math.PI / o.capResolution,
                                    g = 3 * Math.PI / 2 + (d + 1) * Math.PI / o.capResolution;
                                u.push.apply(u, [0, 0, 1]), u.push.apply(u, [.5 * Math.cos(p), .5 * Math.sin(p), 1]), u.push.apply(u, [.5 * Math.cos(g), .5 * Math.sin(g), 1])
                            }
                            var _ = Array.from(Array(2 * o._pointsPerArcHalf * o.numInstances)).fill(0);
                            return o.geometry.vertices.position = {
                                numComponents: 3,
                                data: u,
                                divisor: 0
                            }, o.geometry.vertices.pointA = {
                                numComponents: 3,
                                data: _,
                                divisor: 1,
                                offset: 0 * Float32Array.BYTES_PER_ELEMENT,
                                perInstance: 3 * (o.segments + 1)
                            }, o.geometry.vertices.pointB = {
                                numComponents: 3,
                                data: _,
                                divisor: 1,
                                offset: 3 * Float32Array.BYTES_PER_ELEMENT,
                                perInstance: 3 * (o.segments + 1)
                            }, o.geometry.vertices.inst = {
                                numComponents: 1,
                                data: [],
                                divisor: 1,
                                perInstance: o.segments + 1
                            }, o.geometry.vertices.arc = {
                                numComponents: 1,
                                data: [],
                                divisor: o.segments,
                                perInstance: 1
                            }, o.geometry.vertices.startColor = {
                                numComponents: 3,
                                data: [],
                                divisor: o.segments + 1,
                                perInstance: 3,
                                drawType: "DYNAMIC_DRAW"
                            }, o.geometry.vertices.endColor = {
                                numComponents: 3,
                                data: [],
                                divisor: o.segments + 1,
                                perInstance: 3,
                                drawType: "DYNAMIC_DRAW"
                            }, o.geometry.vertices.width = {
                                numComponents: 2,
                                data: [],
                                divisor: o.segments + 1,
                                perInstance: 2,
                                drawType: "DYNAMIC_DRAW"
                            }, o.geometry.vertices.shouldDraw = {
                                numComponents: 1,
                                data: [],
                                divisor: o.segments + 1,
                                perInstance: 1,
                                drawType: "DYNAMIC_DRAW"
                            }, o.geometry.vertices.indices = {
                                numComponents: 1,
                                data: Array.from(Array(6 + 3 * o.capResolution * 2).keys()),
                                divisor: 0
                            }, o
                        }

                        return r
                    }(Pr), qr = {
                        vertex: "#define GLSLIFY 1\nattribute vec4 position;attribute vec3 normal;attribute vec2 texcoord;uniform mat4 u_worldViewProjection;uniform mat4 u_viewInverse;uniform mat4 u_model;varying vec2 vTexture;void main(){vec4 pos=u_worldViewProjection*u_model*position;vTexture=texcoord;gl_Position=pos;}",
                        fragment: "precision mediump float;\n#define GLSLIFY 1\nuniform sampler2D uTexture;varying vec2 vTexture;void main(){vec4 textureColor=texture2D(uTexture,vTexture);gl_FragColor=vec4(textureColor.rgb,1.0);}"
                    }, Jr = {}, Kr = function (t) {
                        f(r, t);
                        var e = p(r);

                        function r(t) {
                            var i, o;
                            return n(this, r), s(h(o = e.call(this)), "material", null), s(h(o), "init", (function (t, e) {
                                o.geometry = new or, o.geometry.vertices = Qt.createSphereVertices(50, 128, 128), o.geometry.init(t);
                                var n = {surface: {src: o.textureSrc.surface, minMag: t.NEAREST}};
                                o.material.init(t), o.material.loadTextures(t, n, (function () {
                                    o.material.uniforms.uTexture = o.material.textures.surface, e && e()
                                })), o.material.uniforms.uModelMatrix = o.modelMatrix
                            })), s(h(o), "createCollisionGeo", (function () {
                            })), s(h(o), "rayCastFrom", (function () {
                                return !1
                            })), s(h(o), "hitTest", (function () {
                                return !1
                            })), s(h(o), "onSelection", (function () {
                            })), s(h(o), "update", (function (t, e, n) {
                                v((i = h(o), m(r.prototype)), "update", i).call(i, e, n), o.material.uniforms.u_model = o.modelMatrix
                            })), s(h(o), "draw", (function (t) {
                                o.isReady && o.shouldDraw && (t.useProgram(o.material.programInfo.program), t.cullFace(t.FRONT), en(t, o.material.programInfo, o.geometry.bufferInfo), tn(o.material.programInfo, o.material.uniforms), t.drawElements(t.TRIANGLES, o.geometry.bufferInfo.numElements, t.UNSIGNED_SHORT, 0), t.cullFace(t.BACK))
                            })), o.material = new Mn(qr), o.material.uniforms = Jr, o.textureSrc = {surface: t}, o
                        }

                        return r
                    }(rr), Zr = {
                        vertex: "#define GLSLIFY 1\nattribute vec4 position;attribute vec3 normal;attribute vec2 texcoord;uniform mat4 u_worldViewProjection;uniform mat4 u_viewInverse;uniform mat4 u_model;uniform vec3 u_cameraPos;varying float vAlpha;varying vec2 vTexture;void main(){vec4 pos=u_worldViewProjection*u_model*position;vec4 transformedCamera=vec4(-0.5,1.0,-1.0,1.0)*u_worldViewProjection;vAlpha=pow((1.0+(dot(normal,normalize(transformedCamera.xyz))))/2.0,1.0);vTexture=texcoord;gl_Position=pos;}",
                        fragment: "precision mediump float;\n#define GLSLIFY 1\nuniform sampler2D uTexture;uniform vec2 u_offset;varying float vAlpha;varying vec2 vTexture;void main(){vec4 textureColor=texture2D(uTexture,vec2(vTexture.x-0.25+u_offset.x,vTexture.y+u_offset.y));float alpha=vAlpha+(1.0-vAlpha)*0.05;alpha*=0.9;gl_FragColor=vec4(textureColor.rgb,textureColor.r);}"
                    }, Qr = {u_offset: [0, 0]}, $r = function (t) {
                        f(r, t);
                        var e = p(r);

                        function r(t) {
                            var i, o;
                            return n(this, r), s(h(o = e.call(this)), "material", null), s(h(o), "movementSpeed", [7, 0]), s(h(o), "init", (function (t, e) {
                                o.geometry = new or("sphere"), o.geometry.init(t);
                                var n = {surface: {src: o.textureSrc.surface, minMag: t.LINEAR}};
                                o.material.init(t), o.material.loadTextures(t, n, (function () {
                                    o.material.uniforms.uTexture = o.material.textures.surface, e && e()
                                })), o.material.uniforms.uModelMatrix = o.modelMatrix, o.scale = [1.04, 1.04, 1.04]
                            })), s(h(o), "createCollisionGeo", (function () {
                            })), s(h(o), "rayCastFrom", (function () {
                                return !1
                            })), s(h(o), "hitTest", (function () {
                                return !1
                            })), s(h(o), "onSelection", (function () {
                            })), s(h(o), "update", (function (t, e, n) {
                                v((i = h(o), m(r.prototype)), "update", i).call(i, e, n), o.material.uniforms.u_model = o.modelMatrix, o.material.uniforms.u_offset = [n * o.movementSpeed[0] / 1e3, n * o.movementSpeed[1] / 1e3]
                            })), s(h(o), "draw", (function (t) {
                                o.isReady && o.shouldDraw && (t.useProgram(o.material.programInfo.program), en(t, o.material.programInfo, o.geometry.bufferInfo), tn(o.material.programInfo, o.material.uniforms), t.drawElements(t.TRIANGLES, o.geometry.bufferInfo.numElements, t.UNSIGNED_SHORT, 0))
                            })), o.material = new Mn(Zr), o.material.uniforms = Qr, o.textureSrc = {surface: t}, o
                        }

                        return r
                    }(rr), ti = {
                        vertex: "#define GLSLIFY 1\nattribute vec4 position;attribute vec3 normal;attribute vec2 texcoord;uniform mat4 u_worldViewProjection;uniform mat4 u_viewInverse;uniform mat4 u_model;uniform vec3 u_cameraPos;varying vec2 vTexture;varying float vAlpha;void main(){vec4 pos=u_worldViewProjection*u_model*position;gl_PointSize=10.0;vec3 transformedNormal=(u_worldViewProjection*u_model*vec4(normal,1.0)).xyz;vec4 transformedCamera=vec4(1.0,1.0,-1.0,1.0)*u_worldViewProjection;vAlpha=pow(dot(position.xyz,normalize(u_cameraPos)),0.2);vTexture=texcoord.xy;gl_Position=pos;}",
                        fragment: "precision mediump float;\n#define GLSLIFY 1\nuniform sampler2D u_surface;varying vec2 vTexture;varying float vAlpha;void main(){vec3 surfaceColor=texture2D(u_surface,vec2(vTexture.x,1.0-vTexture.y)).rgb;float alpha=clamp(vAlpha,0.1,1.0);vec3 color=surfaceColor*alpha;gl_FragColor=vec4(color,1.0);}"
                    }, ei = {}, ni = function (t) {
                        f(r, t);
                        var e = p(r);

                        function r(t, i) {
                            var o, a;
                            n(this, r), s(h(a = e.call(this)), "material", null), s(h(a), "lookup", null), s(h(a), "currentSelection", -1), s(h(a), "previousSelection", -1), s(h(a), "inAnimation", null), s(h(a), "outAnimation", null), s(h(a), "selection0", 236), s(h(a), "selection1", 144), s(h(a), "current", 236), s(h(a), "dataTexture", void 0), s(h(a), "dataTextureSize", 16), s(h(a), "updateCMDs", []), s(h(a), "highlightAnimationProps", {
                                start: 0,
                                stop: 1,
                                duration: 1e3,
                                onUpdate: function (t) {
                                    a.material.uniforms.u_animateIn = t
                                }
                            }), s(h(a), "init", (function (t, e) {
                                a.geometry.init(t);
                                var n = {surface: {src: a.textureSrc.surface, minMag: t.LINEAR}};
                                a.material.init(t), a.material.uniforms.uModelMatrix = a.modelMatrix, a.material.loadTextures(t, n, (function () {
                                    a.material.uniforms.u_surface = a.material.textures.surface, e && e()
                                }))
                            })), s(h(a), "getValueForId", (function (t) {
                                return a.lookup.getFromId(t)
                            })), s(h(a), "getValueForCode", (function (t) {
                                return a.lookup.getFromCode(t)
                            })), s(h(a), "getValueForName", (function (t) {
                                return a.lookup.getFromName(t)
                            })), s(h(a), "createCollisionGeo", (function () {
                                a.collisionGeometry && a.collisionGeometry instanceof $n || (a.collisionGeometry = Qn.create_collision_geometry(a.geometry.vertices.position.data, a.geometry.vertices.texcoord.data, a.geometry.vertices.indices.data))
                            })), s(h(a), "rayCastFrom", (function (t) {
                                return a.collisionGeometry.raycast(t.origin, t.direction)
                            })), s(h(a), "hitTest", (function (t) {
                                return a.collisionGeometry.hitTest(t.origin, t.direction)
                            })), s(h(a), "onSelectionCB", (function () {
                            })), s(h(a), "onSelection", (function () {
                            })), s(h(a), "onHover", (function () {
                            })), s(h(a), "update", (function (t, e, n) {
                                v((o = h(a), m(r.prototype)), "update", o).call(o, e, n), a.material.uniforms.u_model = a.modelMatrix, a.updateCMDs.forEach((function (e) {
                                    e(t)
                                })), a.updateCMDs = []
                            })), s(h(a), "draw", (function (t) {
                                a.isReady && a.shouldDraw && (t.useProgram(a.material.programInfo.program), en(t, a.material.programInfo, a.geometry.bufferInfo), tn(a.material.programInfo, a.material.uniforms), t.drawElements(t.TRIANGLES, a.geometry.bufferInfo.numElements, t.UNSIGNED_INT, 0))
                            })), s(h(a), "setCountryHover", (function () {
                            })), s(h(a), "setHighlightId", (function (t) {
                                a.previousSelection = a.currentSelection, a.currentSelection = t;
                                var e = a.inAnimation ? a.inAnimation.currentValue() : 1, n = 300 * e;
                                a.animateIn(a.currentSelection, 500), a.animateOut(a.previousSelection, n, e)
                            })), s(h(a), "animateIn", (function (t, e, n) {
                                a.material.uniforms.u_idAnimateIn = t, a.inAnimation && a.inAnimation.stop(), a.material.uniforms.u_animateIn = 0, a.inAnimation = new mr(a.highlightAnimationProps.start, a.highlightAnimationProps.stop, a.highlightAnimationProps.duration, {
                                    onUpdate: a.highlightAnimationProps.onUpdate,
                                    onComplete: function () {
                                        n && n()
                                    }
                                })
                            })), s(h(a), "animateOut", (function (t, e, n, r) {
                                a.material.uniforms.u_idAnimateOut = t, a.outAnimation && a.outAnimation.stop(), a.material.uniforms.u_animateOut = n, a.outAnimation = new mr(n, 0, e, {
                                    onUpdate: function (t) {
                                        a.material.uniforms.u_animateOut = t
                                    }, onComplete: function () {
                                        r && r()
                                    }
                                })
                            })), s(h(a), "addDataset", (function (t) {
                                a.lookup = new cr(t, a.textureSrc.id)
                            })), s(h(a), "updateIdState", (function () {
                            })), a.textureSrc = {surface: t.surface}, a.material = new Mn(ti), a.material.uniforms = ei, a.geometry = new or;
                            var u = 0, l = new Float32Array(i), c = new Int32Array(i), f = l.subarray(u, u + 288e3);
                            u += 288e3;
                            var d = l.subarray(u, u + 288e3);
                            u += 288e3;
                            var p = l.subarray(u, u + 288e3);
                            u += 288e3;
                            var g = c.subarray(u, u + 96e3);
                            return a.geometry.vertices.position = {
                                numComponents: 3,
                                data: f
                            }, a.geometry.vertices.normal = {
                                numComponents: 3,
                                data: d
                            }, a.geometry.vertices.texcoord = {
                                numComponents: 3,
                                data: p
                            }, a.geometry.vertices.indices = {numComponents: 3, data: g}, a
                        }

                        return r
                    }(ir), ri = {
                        vertex: "#define GLSLIFY 1\nattribute vec3 position;attribute vec2 texture;attribute vec3 tangentU;attribute vec3 tangentV;attribute vec2 textureG;attribute float random;uniform mat4 u_model;uniform mat4 u_worldViewProjection;uniform mat4 u_viewInverse;uniform vec3 u_cameraPos;uniform float uPointSize;uniform float uRandomPointSizeDelta;uniform float uRandomPointSizeRatio;uniform float uMinPointAlpha;uniform float uMinPointSize;uniform float u_time;uniform float u_speed;uniform vec2 uOffset;uniform vec3 uRippleCenter;uniform float uRippleProgress;uniform float uRippleWidth;uniform float uRippleHeight;varying vec2 vTexture;varying vec4 vColor;varying float vShine;varying vec2 vTextureG;varying float vTime;varying float vAlpha;mat4 rotationMatrix(vec3 axis,float angle){axis=normalize(axis);float s=sin(angle);float c=cos(angle);float oc=1.0-c;return mat4(oc*axis.x*axis.x+c,oc*axis.x*axis.y-axis.z*s,oc*axis.z*axis.x+axis.y*s,0.0,oc*axis.x*axis.y+axis.z*s,oc*axis.y*axis.y+c,oc*axis.y*axis.z-axis.x*s,0.0,oc*axis.z*axis.x-axis.y*s,oc*axis.y*axis.z+axis.x*s,oc*axis.z*axis.z+c,0.0,0.0,0.0,0.0,1.0);}void main(){vec4 pos=vec4(position,1.0);gl_PointSize=10.0;mat4 rot1=rotationMatrix(tangentU,(texture.x*2.0)-1.0);vec4 pos1=rot1*pos;mat4 rot2=rotationMatrix(tangentV,((texture.y*2.0)-1.0));vec4 pos2=rot2*pos;float rotSizeDelta=max((dot(normalize(u_cameraPos),position)+1.0)/2.0,uMinPointSize);float randomSize=uRandomPointSizeDelta*random*step(random,1.0-uRandomPointSizeRatio);pos.xyz+=pos1.xyz*(uPointSize+randomSize);pos.xyz+=pos2.xyz*(uPointSize+randomSize);vec3 rippleCenter=vec3(0.0,0.0,1.0);float d=1.0-((dot(pos.xyz,uRippleCenter)+1.0)/2.0);float q=smoothstep(uRippleProgress-uRippleWidth,uRippleProgress,d);q-=smoothstep(uRippleProgress,uRippleProgress+uRippleWidth,d);float t=1.0+q*uRippleHeight;pos.xyz*=t;gl_Position=u_worldViewProjection*u_model*pos;gl_Position.xy+=uOffset*gl_Position.w;float c=t/1.04;vTexture=texture;vTextureG=textureG;vShine=q;vTime=(u_time/100.0)*u_speed;vAlpha=max((dot(normalize(u_cameraPos),position)+1.0)/2.0,uMinPointAlpha);}",
                        fragment: "precision mediump float;\n#define GLSLIFY 1\nuniform vec3 uLeftColorCurrent;uniform vec3 uLeftColorTarget;uniform vec3 uRightColor;uniform float uColorChangeAnimation;uniform vec2 uResolution;uniform float uSeed;uniform float uScale;uniform vec3 uColor;uniform vec3 uRippleColor;uniform vec4 uCardMargin;uniform sampler2D uNoiseTexture;varying vec2 vTexture;varying vec2 vTextureG;varying vec4 vColor;varying float vShine;varying float vTime;varying float vAlpha;void main(){vec4 noiseColor=texture2D(uNoiseTexture,vec2(vTextureG.x+fract(vTime),vTextureG.y));float d=1.0-smoothstep(0.45,0.5,distance(vec2(0.5,0.5),vTexture));vec3 color=mix(uColor,uRippleColor,vShine);float alpha=vAlpha*d*pow(noiseColor.r,2.5);gl_FragColor=vec4(color,alpha);}"
                    }, ii = {
                        uPointSize: .005,
                        uRandomPointSizeDelta: 0,
                        uRandomPointSizeRatio: 0,
                        uMinPointAlpha: 0,
                        uMinPointSize: 1,
                        uOffset: [0, 0],
                        uRippleCenter: [0, 0, 1],
                        uRippleProgress: -2,
                        uRippleWidth: .2,
                        uRippleHeight: .1,
                        uRippleColor: [1, 1, 1],
                        uColor: [1, 1, 1],
                        u_speed: 10
                    }, oi = function (t) {
                        f(r, t);
                        var e = p(r);

                        function r(t, i, o) {
                            var a, u;
                            n(this, r), s(h(u = e.call(this)), "material", null), s(h(u), "lookup", null), s(h(u), "currentSelection", -1), s(h(u), "previousSelection", -1), s(h(u), "inAnimation", null), s(h(u), "outAnimation", null), s(h(u), "dataTexture", void 0), s(h(u), "dataTextureSize", 16), s(h(u), "updateCMDs", []), s(h(u), "highlightAnimationProps", {
                                start: 0,
                                stop: 1,
                                duration: 1e3,
                                onUpdate: function (t) {
                                    u.material.uniforms.u_animateIn = t
                                }
                            }), s(h(u), "init", (function (t, e) {
                                u.geometry.init(t);
                                var n = {noise: {src: u.textureSrc.noise, minMag: t.LINEAR}};
                                u.material.init(t), u.material.uniforms.uModelMatrix = u.modelMatrix, u.material.loadTextures(t, n, (function () {
                                    u.material.uniforms.uNoiseTexture = u.material.textures.noise, e && e()
                                }))
                            })), s(h(u), "getValueForId", (function (t) {
                                return u.lookup.getFromId(t)
                            })), s(h(u), "getValueForCode", (function (t) {
                                return u.lookup.getFromCode(t)
                            })), s(h(u), "getValueForName", (function (t) {
                                return u.lookup.getFromName(t)
                            })), s(h(u), "setIdColor", (function (t, e, n) {
                                var r = void 0 === n ? 1 : n, i = fr.hexToRGBA(e, r, !1);
                                u.updateCMDs.push((function (e) {
                                    u.dataTexture.updatePixelId(e, i, t)
                                }))
                            })), s(h(u), "createCollisionGeo", (function () {
                                if (!(u.collisionGeometry && u.collisionGeometry instanceof $n)) {
                                    var t = Qt.createSphereVertices(1, 128, 128);
                                    u.collisionGeometry = Qn.create_collision_geometry(t.position, t.texcoord, t.indices)
                                }
                            })), s(h(u), "rayCastFrom", (function (t) {
                                return u.collisionGeometry.raycast(t.origin, t.direction)
                            })), s(h(u), "hitTest", (function (t) {
                                return u.collisionGeometry.hitTest(t.origin, t.direction)
                            })), s(h(u), "onSelectionCB", (function () {
                            })), s(h(u), "onSelection", (function (t, e, n) {
                                var r = fr.latLonFromWorld(n.point);
                                return console.log(r, n), {lat: t, lon: e}
                            })), s(h(u), "onHover", (function () {
                            })), s(h(u), "update", (function (t, e, n) {
                                v((a = h(u), m(r.prototype)), "update", a).call(a, e, n), u.material.uniforms.u_model = u.modelMatrix, u.material.uniforms.u_time = n, u.updateCMDs.forEach((function (e) {
                                    e(t)
                                })), u.updateCMDs = []
                            })), s(h(u), "draw", (function (t) {
                                u.isReady && u.shouldDraw && (t.useProgram(u.material.programInfo.program), t.disable(t.CULL_FACE), en(t, u.material.programInfo, u.geometry.bufferInfo), tn(u.material.programInfo, u.material.uniforms), t.drawElements(t.TRIANGLES, u.geometry.bufferInfo.numElements, t.UNSIGNED_INT, 0), t.enable(t.CULL_FACE))
                            })), s(h(u), "setCountryHover", (function (t) {
                            })), s(h(u), "setHighlightId", (function (t) {
                                u.previousSelection = u.currentSelection, u.currentSelection = t;
                                var e = u.inAnimation ? u.inAnimation.currentValue() : 1, n = 300 * e;
                                u.animateIn(u.currentSelection, 500), u.animateOut(u.previousSelection, n, e)
                            })), s(h(u), "animateIn", (function (t, e) {
                                u.material.uniforms.u_idAnimateIn = t, u.inAnimation && u.inAnimation.stop(), u.material.uniforms.u_animateIn = 0, u.inAnimation = new mr(u.highlightAnimationProps.start, u.highlightAnimationProps.stop, u.highlightAnimationProps.duration, {
                                    onUpdate: u.highlightAnimationProps.onUpdate,
                                    onComplete: function () {
                                        e && e()
                                    }
                                })
                            })), s(h(u), "animateOut", (function (t, e, n, r) {
                                u.material.uniforms.u_idAnimateOut = t, u.outAnimation && u.outAnimation.stop(), u.material.uniforms.u_animateOut = n, u.outAnimation = new mr(n, 0, e, {
                                    onUpdate: function (t) {
                                        u.material.uniforms.u_animateOut = t
                                    }, onComplete: function () {
                                        r && r()
                                    }
                                })
                            })), s(h(u), "addDataset", (function (t) {
                                u.lookup = new cr(t, u.textureSrc.id)
                            })), s(h(u), "rippleAtLocation", (function (t, e, n) {
                                u._ripple instanceof mr && u._ripple.stop(), u.material.uniforms.uRippleCenter = fr.worldFromLatLon(t, e, 0);
                                var r = 2e3;
                                n && (n.width && (u.material.uniforms.uRippleWidth = n.width), n.height && (u.material.uniforms.uRippleHeight = n.height), n.speed && (u.material.uniforms.u_speed = n.speed), n.rippleColor && (u.material.uniforms.uRippleColor = n.rippleColor), n.duration && (r = n.duration));
                                var i = 0 - u.material.uniforms.uRippleWidth, o = 1 + u.material.uniforms.uRippleWidth;
                                u._ripple = new mr(i, o, r, {
                                    onUpdate: function (t) {
                                        u.material.uniforms.uRippleProgress = t
                                    }
                                })
                            })), u.textureSrc = {noise: t.noise}, u.material = new Mn(ri), u.material.uniforms = ii, u.geometry = new or;
                            var l = 0, c = new Float32Array(i), f = new Int32Array(i), d = c.subarray(l, l + 114192);
                            l += 114192;
                            var p = c.subarray(l, l + 114192);
                            l += 114192;
                            var g = c.subarray(l, l + 114192);
                            l += 114192;
                            var y = c.subarray(l, l + 76128);
                            l += 76128;
                            var _ = c.subarray(l, l + 76128);
                            l += 76128;
                            var b = c.subarray(l, l + 38064);
                            l += 38064;
                            var x = f.subarray(l, l + 57096);
                            return u.geometry.vertices.position = {
                                numComponents: 3,
                                data: d
                            }, u.geometry.vertices.tangentU = {
                                numComponents: 3,
                                data: p
                            }, u.geometry.vertices.tangentV = {
                                numComponents: 3,
                                data: g
                            }, u.geometry.vertices.texture = {
                                numComponents: 2,
                                data: y
                            }, u.geometry.vertices.textureG = {
                                numComponents: 2,
                                data: _
                            }, u.geometry.vertices.random = {
                                numComponents: 1,
                                data: b
                            }, u.geometry.vertices.indices = {
                                numComponents: 3,
                                data: x
                            }, o && (o.pointSize && (u.material.uniforms.uPointSize = o.pointSize), o.randomPointSizeVariance && (u.material.uniforms.uRandomPointSizeDelta = o.randomPointSizeVariance), o.randomPointSizeRatio && (u.material.uniforms.uRandomPointSizeRatio = o.randomPointSizeRatio), o.minPointAlpha && (u.material.uniforms.uMinPointAlpha = o.minPointAlpha), o.minPointSize && (u.material.uniforms.uMinPointSize = o.minPointSize), o.offset && (u.material.uniforms.uOffset = o.offset), o.color && (u.material.uniforms.uColor = fr.hexToRGB(o.color))), u
                        }

                        return r
                    }(ir), ai = {
                        u_animation: 1,
                        u_startsize: 4,
                        u_midsize: 16,
                        u_endsize: 4,
                        u_startColor: [1, 1, 1, .4],
                        u_midColor: [1, 1, 1, 1],
                        u_endColor: [1, 1, 1, .4]
                    }, ui = function (t) {
                        f(r, t);
                        var e = p(r);

                        function r(t) {
                            var i, o;
                            n(this, r), s(h(o = e.call(this, t)), "datastore", void 0), s(h(o), "maxSelectionDistance", 300), s(h(o), "maxSelectionCount", 1), s(h(o), "maxDataPoints", 10), s(h(o), "_segments", 600), s(h(o), "_pointsPerArcHalf", 300), s(h(o), "_tweens", []), s(h(o), "dataPointCount", 0), s(h(o), "_resourceLoaded", !1), s(h(o), "_isDirty", !0), s(h(o), "_hasGeometry", !1), s(h(o), "useTexture", !1), s(h(o), "createEmptyVertices", (function () {
                                o.geometry.vertices.position = {
                                    numComponents: 3,
                                    data: new Array(o._segments).fill(0),
                                    perInstance: 3
                                }, o.geometry.vertices.inst = {
                                    numComponents: 1,
                                    data: new Array(o._segments).fill(0),
                                    perInstance: 1
                                }, o.geometry.vertices.indices = {
                                    numComponents: 1,
                                    data: Array.from(Array(o._segments).keys()),
                                    perInstance: 1
                                }
                            })), s(h(o), "addArc", (function (t, e, n) {
                                var r = [], i = {
                                    from: t.from,
                                    to: t.to,
                                    normalFactor: t.normalFactor || .5,
                                    alt: t.alt || .3,
                                    startColor: t.startColor || "#ffffff",
                                    midColor: t.midColor || "#ffffff",
                                    endColor: t.endColor || "#ffffff",
                                    startAlpha: t.startAlpha || 0,
                                    midAlpha: t.midAlpha || 1,
                                    endAlpha: t.endAlpha || 0,
                                    startWidth: t.startWidth || 4,
                                    midWidth: t.midWidth || 4,
                                    endWidth: t.endWidth || 4
                                }, a = (fr.dotBetweenLatLon(t.from, t.to) + 1) / 2;
                                void 0 !== o.transform && (i = o.transform(t, i)), i.alt = .1 + (1 - a) * i.alt, o.material.uniforms.u_startsize = i.startWidth, o.material.uniforms.u_midsize = i.midWidth, o.material.uniforms.u_endsize = i.endWidth, o.material.uniforms.u_startColor = fr.hexToRGBA(i.startColor, i.startAlpha), o.material.uniforms.u_midColor = fr.hexToRGBA(i.midColor, i.midAlpha), o.material.uniforms.u_endColor = fr.hexToRGBA(i.endColor, i.endAlpha), r.push.apply(r, y(o._createArcFrom(i)));
                                var u = Array.from(Array(o._segments).keys());
                                if (void 0 !== e) {
                                    o.material.uniforms.u_animation = 0;
                                    var s = new mr(0, 1, e, {
                                        onUpdate: function (t) {
                                            o.material.uniforms.u_animation = t
                                        }, onComplete: function () {
                                            n && n()
                                        }
                                    });
                                    o._tweens.push(s)
                                }
                                var l = {position: {data: new Float32Array(r)}, inst: {data: u}};
                                o.geometry.updateGeometry(l, 0), o.shouldDraw = !0
                            })), s(h(o), "_createArcFrom", (function (t) {
                                var e = o._computeControlPoints(t), n = new Vr(e.cp0), r = new Vr(e.cp1),
                                    i = n.getLUT(o._pointsPerArcHalf), a = r.getLUT(o._pointsPerArcHalf), u = [];
                                i.reverse().forEach((function (t) {
                                    u.push(t)
                                })), a.forEach((function (t) {
                                    u.push(t)
                                })), u.splice(o._pointsPerArcHalf, 1);
                                var s = [];
                                return u.forEach((function (t) {
                                    s.push.apply(s, y(Object.values(t)))
                                })), s
                            })), s(h(o), "_computeControlPoints", (function (t) {
                                var e = fr.worldFromLatLon(t.from[0], t.from[1], .005),
                                    n = fr.worldFromLatLon(t.to[0], t.to[1], .005), r = yn();
                                Tn(r, e, n, .5);
                                var i = fr.latLonFromWorld(r), o = fr.worldFromLatLon(i.lat, i.lon, t.alt), a = yn();
                                xn(a, e, r), wn(a, a, t.normalFactor);
                                var u = yn();
                                bn(u, o, a);
                                var s = yn();
                                xn(s, o, a);
                                var l = [];
                                l.push.apply(l, y(o)), l.push.apply(l, y(u)), l.push.apply(l, y(e));
                                var c = [];
                                return c.push.apply(c, y(o)), c.push.apply(c, y(s)), c.push.apply(c, y(n)), {cp0: l, cp1: c}
                            })), s(h(o), "_createInstArray", (function (t) {
                                for (var e = Array.from(Array(o._segments + 1).keys()), n = [], r = 0; r < t; r += 1) e.forEach((function (t) {
                                    n.push(t)
                                }));
                                return n
                            })), s(h(o), "removeAllArcs", (function () {
                                o.shouldDraw = !1
                            })), s(h(o), "init", (function (t, e) {
                                if (o.geometry.init(t), o._hasGeometry = !0, o.material.init(t), o.useTexture) {
                                    var n = {texture: {src: o.textureSrc.texture, minMag: t.LINEAR}};
                                    o.material.loadTextures(t, n, (function () {
                                        e && e(), o.material.uniforms.u_texture = o.material.textures.texture
                                    }))
                                } else e && e()
                            })), s(h(o), "createCollisionGeo", (function () {
                            })), s(h(o), "update", (function (t, e, n) {
                                v((i = h(o), m(r.prototype)), "update", i).call(i, e, n), o.material.uniforms.u_model = o.modelMatrix, o.geometry.needsResize && o.geometry.reloadBuffers(t), o.geometry.isDirty && o.geometry.updateBuffers(t)
                            })), s(h(o), "draw", (function (t) {
                                (o.isReady || o._hasGeometry) && o.shouldDraw && (t.useProgram(o.material.programInfo.program), t.disable(t.DEPTH_TEST), en(t, o.material.programInfo, o.geometry.bufferInfo), tn(o.material.programInfo, o.material.uniforms), t.drawArrays(t.POINTS, 0, o._segments - 1), t.enable(t.DEPTH_TEST))
                            })), s(h(o), "rayCastFrom", (function () {
                                return !0
                            })), s(h(o), "hitTest", (function () {
                                return !0
                            })), s(h(o), "onSelectionCB", (function (t) {
                                return t
                            })), s(h(o), "onSelection", (function () {
                            }));
                            var a = {
                                vertex: "#define GLSLIFY 1\nattribute vec4 position;attribute float inst;uniform mat4 u_worldViewProjection;uniform mat4 u_viewInverse;uniform mat4 u_model;uniform vec3 u_cameraPos;uniform float u_startsize;uniform float u_midsize;uniform float u_endsize;uniform vec4 u_startColor;uniform vec4 u_midColor;uniform vec4 u_endColor;varying vec4 v_color;varying float v_tex;varying float v_alpha;float when_gt(float x,float y){return max(sign(x-y),0.0);}float when_lt(float x,float y){return max(sign(y-x),0.0);}float getV(vec3 x){return x.x*x.x+x.y*x.y+x.z*x.z;}void main(){v_tex=inst/600.0;float t0=v_tex*2.0;float t1=(v_tex*2.0-1.0);float firstHalfSize=mix(u_startsize,u_midsize,t0)*(1.0-step(0.5,v_tex));float secondHalfSize=mix(u_midsize,u_endsize,t1)*step(0.5,v_tex);;vec4 firstHalfColor=mix(u_startColor,u_midColor,t0)*(1.0-step(0.5,v_tex));vec4 secondHalfColor=mix(u_midColor,u_endColor,t1)*step(0.5,v_tex);vec4 pos=u_worldViewProjection*u_model*position;gl_PointSize=firstHalfSize+secondHalfSize;gl_Position=pos;v_color=firstHalfColor+secondHalfColor;v_alpha=step(0.3,(1.0+dot(normalize(u_cameraPos),normalize(position.xyz)))/2.0);}",
                                fragment: "precision mediump float;\n#define GLSLIFY 1\nuniform float u_time;uniform float u_animation;varying vec4 v_color;varying float v_tex;varying float v_alpha;void main(){float d=distance(vec2(0.5),gl_PointCoord.xy);float c=1.0-smoothstep(0.4,0.5,d);float alpha=step(1.0-u_animation,1.0-v_tex);gl_FragColor=vec4(v_color.rgb,v_color.a*c*alpha);}"
                            };
                            return t && (t.maxSelectionCount && (o.maxSelectionCount = t.maxSelectionCount), t.maxSelectionDistance && (o.maxSelectionDistance = t.maxSelectionDistance), t.maxDataPoints && (o.maxDataPoints = t.maxDataPoints), !0 === t.useTexture && void 0 !== t.texture && (o.useTexture = !0, a.fragment = Sr, o.textureSrc = {texture: t.texture})), o.material = new Mn(a), o.datastore = new Ir, o.material.uniforms = ai, o.geometry = new or, o.shouldDraw = !1, o.createEmptyVertices(), o
                        }

                        return r
                    }(Pr), si = function () {
                        function t(e) {
                            var r = this;
                            n(this, t), s(this, "drawables", []), s(this, "element", void 0), s(this, "definition", void 0), s(this, "size", {
                                width: 0,
                                height: 0
                            }), this.definition = e, this.element = this.createElement(), this.resizeObserver = new ResizeObserver((function (t) {
                                t.length && (r.size = t[0].contentRect)
                            })), this.resizeObserver.observe(this.element)
                        }

                        return u(t, [{
                            key: "release", value: function () {
                                this.resizeObserver.disconnect()
                            }
                        }, {
                            key: "createElement", value: function () {
                                return document.createElement("div")
                            }
                        }, {
                            key: "animateIn", value: function () {
                            }
                        }, {
                            key: "animateOut", value: function (t) {
                                t(this)
                            }
                        }, {
                            key: "update", value: function (t) {
                                this.drawables.forEach((function (e) {
                                    return e.update(t)
                                }))
                            }
                        }, {
                            key: "setPosition", value: function (t) {
                                this.element.style.transform = "translate(".concat(t.screen.x, "px, ").concat(t.screen.y, "px)")
                            }
                        }]), t
                    }();
                t.Arc = ui, t.Atmosphere = Br, t.Background = kr, t.Callout = si, t.CalloutDefinition = function t(e, r, i, o) {
                    n(this, t), s(this, "id", Math.random().toFixed(16).substr(2)), s(this, "latitude", 0), s(this, "longitude", 0), s(this, "altitude", 0), s(this, "calloutClass", void 0), s(this, "data", void 0), this.latitude = e, this.longitude = r, this.calloutClass = i, this.data = o
                }, t.CalloutManager = Ar, t.Camera = En, t.Clouds = $r, t.ConstantWidthArcs = Xr, t.CustomGlobe = ni, t.DataStore = Ir, t.Drawable = rr, t.GKUtils = fr, t.Geometry = or, t.GlobeKitView = Cr, t.Icosphere = sr, t.IcosphereLookup = vr, t.Instanced = Yr, t.Lookup = cr, t.Lowpoly = Fr, t.PointGlobe = oi, t.Points = Lr, t.QuadNormal = Ur, t.Renderer = cn, t.Scene = Ln, t.ShaderMaterial = Mn, t.SkySphere = Kr, t.Tween = mr, Object.defineProperty(t, "__esModule", {value: !0})
            }(e)
        }).call(this, n("8oxB"), n("HDXh").Buffer, n("yLpj"))
    }
}]);
//# sourceMappingURL=976e54d6-cf00b45750e4d6622c1d.js.map
