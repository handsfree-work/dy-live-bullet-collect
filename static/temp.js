!function () {
    "use strict";
    var e, t, n, a, r, i, d, c, o, f, u, b, l = {}, s = {};

    function g(e) {
        var t = s[e];
        if (void 0 !== t) return t.exports;
        var n = s[e] = {id: e, loaded: !1, exports: {}};
        return l[e].call(n.exports, n, n.exports, g), n.loaded = !0, n.exports
    }

    window._m_ = g
    g.m = l, g.amdO = {}, r = [], g.O = function (e, t, n, a) {
        if (t) {
            a = a || 0;
            for (var i = r.length; i > 0 && r[i - 1][2] > a; i--) r[i] = r[i - 1];
            r[i] = [t, n, a];
            return
        }
        for (var d = 1 / 0, i = 0; i < r.length; i++) {
            for (var t = r[i][0], n = r[i][1], a = r[i][2], c = !0, o = 0; o < t.length; o++) d >= a && Object.keys(g.O).every(function (e) {
                return g.O[e](t[o])
            }) ? t.splice(o--, 1) : (c = !1, a < d && (d = a));
            if (c) {
                r.splice(i--, 1);
                var f = n()
            }
        }
        return f
    }     , g.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return g.d(t, {a: t}), t
    }     , d = Object.getPrototypeOf ? function (e) {
        return Object.getPrototypeOf(e)
    } : function (e) {
        return e.__proto__
    }     , g.t = function (e, t) {
        if (1 & t && (e = this(e)), 8 & t || "object" == typeof e && e && (4 & t && e.__esModule || 16 & t && "function" == typeof e.then)) return e;
        var n = Object.create(null);
        g.r(n);
        var a = {};
        i = i || [null, d({}), d([]), d(d)];
        for (var r = 2 & t && e; "object" == typeof r && !~i.indexOf(r); r = d(r)) Object.getOwnPropertyNames(r).forEach(function (t) {
            a[t] = function () {
                return e[t]
            }
        });
        return a.default = function () {
            return e
        }         , g.d(n, a), n
    }     , g.d = function (e, t) {
        for (var n in t) g.o(t, n) && !g.o(e, n) && Object.defineProperty(e, n, {enumerable: !0, get: t[n]})
    }     , g.f = {}, g.e = function (e) {
        return Promise.all(Object.keys(g.f).reduce(function (t, n) {
            return g.f[n](e, t), t
        }, []))
    }     , g.u = function (e) {
        return "chunks/" + (({
            52: "FansClubPlugin",
            234: "PKSEIPlugin",
            357: "HourRankListViewPlugin",
            437: "island_7eb32",
            439: "routes-route",
            682: "LotteryShortTouchPlugin",
            785: "island_6d08b",
            983: "island_4a5da",
            1195: "GroupFightPlugin",
            1289: "VideoRoomPlugin",
            1407: "EffectPlugin",
            1414: "Toolbar",
            1638: "island_cfab0",
            1728: "ImEntry-db",
            1941: "RechageIcon",
            1994: "OrderSingPlugin",
            2081: "Redpacket",
            2281: "LotteryViewPlugin",
            2396: "island_f6f63",
            2490: "island_f9044",
            2502: "routes-comment-roomid-route",
            2608: "live-schema",
            2986: "transport-schema",
            3007: "QualitySwitchPlugin",
            3285: "RedPacketViewPlugin",
            3411: "routes-category-id-route",
            3437: "AdSideCard",
            3474: "NewDanmakuPlugin",
            3555: "ShopDetailSideCard",
            3601: "island_4c458",
            3697: "RTCLayerPlugin",
            3853: "island_fed91",
            4091: "LiveRecommendOnEnd",
            4365: "GiftEffectPlugin",
            4366: "PaidLivePlugin",
            4371: "RechageBtn",
            4464: "NoticeEntry-handle",
            4601: "DetectHevcFrame",
            4686: "RedPacketShortTouchPlugin",
            4893: "Trigger",
            4935: "island_d96bc",
            5099: "island_2d3ab",
            5156: "component-tab",
            5190: "NoticeEntry-frontier",
            5214: "island_21006",
            5269: "ShareContent",
            5322: "PaidLiveTitle",
            5561: "WebConfirmModal",
            5590: "NoticeEntry",
            5596: "QualitySwitchNewPlugin",
            5658: "island_da635",
            5662: "HourRankListEntrance",
            5913: "RechargePanel",
            5916: "island_80487",
            6134: "ExhibitionViewPlugin",
            6150: "island_85b19",
            6282: "ecom-schema",
            6364: "island_61490",
            6420: "EffectSwitchPlugin",
            6478: "routes-loading",
            6557: "PromotionList",
            6651: "ExhibitionEntrance",
            6750: "OperatingBarPlugin",
            6780: "ImEntry",
            6840: "island_edf16",
            6986: "QualitAbrPlugin",
            7044: "PKViewPlugin",
            7211: "island_a345b",
            7287: "AudioRoomPlugin",
            7299: "GiftBarMiniPlugin",
            7445: "routes-error-id-route",
            7623: "Banner",
            7716: "routes-webrid-route",
            7725: "ActivityIndicator",
            7761: "island_e4c6d",
            7764: "routes-error-route",
            7768: "DanmakuPlugin",
            7891: "SearchSideCard",
            7940: "island_d72d5",
            7950: "component-header",
            8009: "component-sidebar",
            8013: "DownloadDirSelectionPanel",
            8617: "electronInject",
            8722: "GiftTrayPlugin",
            8806: "GuestBattlePlugin",
            8851: "rts-schema",
            8930: "ModalVideo",
            8958: "routes-hot_live-route",
            9526: "PlayerEndCover",
            9568: "island_fe234",
            9616: "LinkMicApplyPlugin",
            9617: "island_b78d0",
            9672: "MoreBtn"
        })[e] || e) + "." + ({
            52: "e7ee68ef",
            163: "21f3e936",
            228: "0965c3f1",
            232: "a5140227",
            234: "248d9923",
            239: "9ab02663",
            289: "5ed00dcb",
            323: "76e38cf3",
            357: "230e1f87",
            363: "c3d05c49",
            437: "c1105452",
            439: "e3c124d4",
            559: "12d24e09",
            661: "89469f32",
            682: "2c8df3cf",
            761: "70738e23",
            785: "0e4486ac",
            792: "2008f74d",
            864: "838a5064",
            964: "9f982727",
            983: "6aa77aa4",
            1029: "f05057f6",
            1159: "e1d92148",
            1195: "df91ac3c",
            1245: "4f29decd",
            1289: "ba47fae5",
            1291: "38bb06a6",
            1363: "895f9af2",
            1402: "4e9f4e28",
            1406: "4efef683",
            1407: "01705027",
            1414: "1114645a",
            1429: "ac855b0b",
            1464: "6b81f287",
            1554: "f7ca07dd",
            1638: "a264e820",
            1645: "ff87d14c",
            1728: "ba81d194",
            1732: "69f91148",
            1824: "3ba9a98d",
            1941: "d711b8c3",
            1994: "ee31345f",
            2018: "d6df31f7",
            2021: "7ba37986",
            2081: "6b4bd348",
            2163: "a3f54eb9",
            2204: "1ef50ea2",
            2281: "3d0912cd",
            2287: "eb57b106",
            2299: "bfaf305b",
            2306: "dbc31c8d",
            2396: "8adf6667",
            2490: "9c810c39",
            2502: "502f37da",
            2537: "e7e9447f",
            2577: "c17a79bf",
            2608: "387b7d62",
            2682: "1b0ebc03",
            2783: "c5e72bb1",
            2803: "9a4ea66b",
            2882: "f3524be5",
            2943: "56202894",
            2986: "b8c8f07a",
            2989: "7b029662",
            3007: "9234f368",
            3013: "f1907a8d",
            3157: "b3cc7ff0",
            3172: "009d718b",
            3285: "f04847d0",
            3329: "3fbe4cb7",
            3347: "0ac96354",
            3411: "4d56e57c",
            3437: "6c9b68b6",
            3446: "43c82240",
            3474: "eb5fbcfe",
            3555: "6564e181",
            3601: "6b49d4ac",
            3646: "bfa852b0",
            3697: "51d04d32",
            3794: "b6f00358",
            3853: "85f20188",
            3885: "8463999e",
            3938: "9c28998e",
            3954: "b52f82a1",
            4091: "52fa02fc",
            4094: "f90ff4a3",
            4155: "121dd71e",
            4172: "e3746aac",
            4274: "d8e24056",
            4365: "5e03833c",
            4366: "ca428fec",
            4371: "4e3eeb1e",
            4403: "8a03e585",
            4464: "d2189a8a",
            4601: "510c95c8",
            4686: "fd656f35",
            4758: "d6a4f5e3",
            4775: "fa78407a",
            4880: "daff2cc8",
            4893: "43991dde",
            4901: "2a933ef9",
            4935: "9285efa1",
            5099: "8611a3a8",
            5101: "4b71101e",
            5156: "01489e57",
            5190: "6de1bc07",
            5206: "b7b8e38c",
            5214: "011088db",
            5269: "a35b948d",
            5322: "d2591570",
            5546: "a0e7d0a9",
            5561: "c5b93fa0",
            5590: "8aea675f",
            5596: "8017b894",
            5654: "e77e1aaa",
            5658: "1e005c89",
            5662: "226644f4",
            5753: "68cd2e43",
            5804: "9cbb9698",
            5841: "63580f7a",
            5870: "90137a9a",
            5901: "3d3eaa0d",
            5913: "a5ad1d41",
            5916: "a6175df3",
            5927: "a36f2e27",
            6088: "85d99a67",
            6091: "89a635f3",
            6103: "c7da46c0",
            6134: "17db3a15",
            6150: "626ee8db",
            6236: "a0724d1d",
            6282: "6b0fa3aa",
            6286: "19695646",
            6294: "b637bb81",
            6341: "2884d808",
            6364: "53d8e6cc",
            6420: "fa957de8",
            6462: "fa971a4c",
            6478: "68cae323",
            6510: "e478623a",
            6557: "33d044a5",
            6559: "ebdd8494",
            6625: "3c88f54e",
            6651: "f1137812",
            6694: "12037adf",
            6715: "ca662acb",
            6750: "f12c004e",
            6780: "d2b341b1",
            6826: "c56d43e8",
            6840: "fbd23b87",
            6922: "adbb4945",
            6986: "fc61a7dc",
            7008: "29281f0c",
            7027: "fa38cefe",
            7044: "868957ff",
            7200: "69c27962",
            7206: "cb4e35fb",
            7211: "d60ccbcc",
            7239: "161a11b2",
            7287: "11189161",
            7299: "b3a84759",
            7317: "3ca413dc",
            7350: "104fb667",
            7423: "99a78307",
            7445: "9bf6a3e3",
            7453: "ec21629c",
            7458: "0ff3fdcd",
            7468: "9aaf8076",
            7623: "2018a59d",
            7649: "95271ef9",
            7666: "1260f152",
            7716: "501c619f",
            7725: "84e8d661",
            7761: "ad3b83df",
            7764: "fb83bac7",
            7768: "17b7baeb",
            7886: "f02130ac",
            7891: "c55ea45a",
            7907: "4810fd37",
            7909: "30ca7cf9",
            7914: "d609bf40",
            7940: "fb48ffb4",
            7950: "3c954968",
            8005: "c7be2c2a",
            8009: "dca11473",
            8013: "3e6349cf",
            8094: "f786e65e",
            8192: "cf4c5bf3",
            8324: "cb2e7b73",
            8450: "a2c41c95",
            8454: "9e47e4ff",
            8461: "d3a84573",
            8560: "ed876903",
            8573: "8563cab1",
            8617: "4ef67175",
            8716: "d80d0b86",
            8722: "4f0023c0",
            8788: "27f07b53",
            8806: "cf9b2498",
            8851: "75cf8955",
            8930: "55ab82a1",
            8958: "fa2240b0",
            9128: "5ff4c4e8",
            9132: "cb3071bb",
            9177: "3942a134",
            9454: "5a2148a1",
            9470: "f93552a9",
            9517: "75c1d01a",
            9526: "23813faa",
            9568: "fb9043da",
            9616: "cf35321d",
            9617: "c417aa45",
            9672: "3228ccaa",
            9856: "9af96b68",
            9923: "5e0050f9",
            9947: "9b15fbed"
        })[e] + ".js"
    }     , g.miniCssF = function (e) {
        return "chunks/" + (({
            437: "island_7eb32",
            439: "routes-route",
            682: "LotteryShortTouchPlugin",
            785: "island_6d08b",
            983: "island_4a5da",
            1407: "EffectPlugin",
            1414: "Toolbar",
            1638: "island_cfab0",
            1941: "RechageIcon",
            1994: "OrderSingPlugin",
            2081: "Redpacket",
            2281: "LotteryViewPlugin",
            2396: "island_f6f63",
            2490: "island_f9044",
            2502: "routes-comment-roomid-route",
            3007: "QualitySwitchPlugin",
            3285: "RedPacketViewPlugin",
            3411: "routes-category-id-route",
            3437: "AdSideCard",
            3555: "ShopDetailSideCard",
            3601: "island_4c458",
            3697: "RTCLayerPlugin",
            3853: "island_fed91",
            4366: "PaidLivePlugin",
            4601: "DetectHevcFrame",
            4686: "RedPacketShortTouchPlugin",
            5099: "island_2d3ab",
            5156: "component-tab",
            5214: "island_21006",
            5269: "ShareContent",
            5322: "PaidLiveTitle",
            5561: "WebConfirmModal",
            5590: "NoticeEntry",
            5596: "QualitySwitchNewPlugin",
            5662: "HourRankListEntrance",
            5913: "RechargePanel",
            5916: "island_80487",
            6150: "island_85b19",
            6364: "island_61490",
            6478: "routes-loading",
            6557: "PromotionList",
            6651: "ExhibitionEntrance",
            6780: "ImEntry",
            6840: "island_edf16",
            6986: "QualitAbrPlugin",
            7623: "Banner",
            7716: "routes-webrid-route",
            7725: "ActivityIndicator",
            7768: "DanmakuPlugin",
            7891: "SearchSideCard",
            7940: "island_d72d5",
            7950: "component-header",
            8009: "component-sidebar",
            8013: "DownloadDirSelectionPanel",
            8617: "electronInject",
            8930: "ModalVideo",
            8958: "routes-hot_live-route",
            9568: "island_fe234",
            9616: "LinkMicApplyPlugin",
            9617: "island_b78d0"
        })[e] || e) + "." + ({
            289: "8986606d",
            437: "64228e45",
            439: "6d8cbea4",
            682: "e5bcbd3c",
            785: "7d12b345",
            983: "9ec0e26a",
            1363: "59d9bda3",
            1407: "2fa806a9",
            1414: "fd21e51a",
            1638: "59d2aea8",
            1941: "c2f3f425",
            1994: "8380db3e",
            2081: "2f5bc9e1",
            2281: "91a24851",
            2396: "4af22c1d",
            2490: "dcb50114",
            2502: "3d151eb9",
            3007: "53bc5f89",
            3285: "68c4e5c2",
            3411: "1dea4c9d",
            3437: "eb642f5f",
            3555: "d212d90f",
            3601: "b61055db",
            3697: "1a56c063",
            3853: "20252d17",
            3938: "7c068b3a",
            4094: "75f21b6f",
            4366: "00cd268a",
            4601: "673515f7",
            4686: "6cf356ea",
            5099: "32ed3033",
            5156: "c027f4f1",
            5214: "192869b2",
            5269: "7fff1e8f",
            5322: "54552fd9",
            5561: "c25f3bb2",
            5590: "89259c69",
            5596: "d7d3a63e",
            5662: "89d2767c",
            5913: "c91570f5",
            5916: "35dab880",
            6150: "66c2d8ee",
            6341: "f5ac67fa",
            6364: "f6237731",
            6462: "f0e9361b",
            6478: "55462277",
            6557: "cb296409",
            6651: "a8a484ab",
            6780: "0c2d5068",
            6826: "770e2008",
            6840: "5a9cb745",
            6986: "486a8d4f",
            7206: "d857242d",
            7453: "996da752",
            7468: "9e13796e",
            7623: "dfdcf687",
            7716: "d09e8a0d",
            7725: "b94dbd1b",
            7768: "d38b98ae",
            7891: "aaae7669",
            7940: "71b19860",
            7950: "5af16a97",
            8009: "4928bf97",
            8013: "d5b20c86",
            8560: "fe518706",
            8617: "ad7a7723",
            8716: "65928034",
            8930: "f0e84d77",
            8958: "01b62f3e",
            9177: "1ae03a7f",
            9454: "617f83f5",
            9568: "849104ad",
            9616: "efc024c9",
            9617: "4a846b5c",
            9947: "88c4fb84"
        })[e] + ".css"
    }     , g.g = function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), g.hmd = function (e) {
        return (e = Object.create(e)).children || (e.children = []), Object.defineProperty(e, "exports", {
            enumerable: !0,
            set: function () {
                throw Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
            }
        }), e
    }     , g.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }     , c = {}, o = "douyin_live_v2:", g.l = function (e, t, n, a) {
        if (c[e]) {
            c[e].push(t);
            return
        }
        if (void 0 !== n) for (var r, i, d = document.getElementsByTagName("script"), f = 0; f < d.length; f++) {
            var u = d[f];
            if (u.getAttribute("src") == e || u.getAttribute("data-webpack") == o + n) {
                r = u;
                break
            }
        }
        r || (i = !0, (r = document.createElement("script")).charset = "utf-8", r.timeout = 120, g.nc && r.setAttribute("nonce", g.nc), r.setAttribute("data-webpack", o + n), r.src = e), c[e] = [t];
        var b = function (t, n) {
            r.onerror = r.onload = null, clearTimeout(l);
            var a = c[e];
            if (delete c[e], r.parentNode && r.parentNode.removeChild(r), a && a.forEach(function (e) {
                return e(n)
            }), t) return t(n)
        }, l = setTimeout(b.bind(null, void 0, {type: "timeout", target: r}), 12e4);
        r.onerror = b.bind(null, r.onerror), r.onload = b.bind(null, r.onload), i && document.head.appendChild(r)
    }     , g.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }     , g.nmd = function (e) {
        return e.paths = [], e.children || (e.children = []), e
    }     , g.p = "//lf-cdn-tos.bytescm.com/obj/static/webcast/douyin_live/", e = g.u, t = g.e, n = new Map, a = new Map, g.u = function (t) {
        return e(t) + (n.has(t) ? "?" + n.get(t) : "")
    }     , g.e = function (r) {
        return t(r).catch(function (t) {
            var i = a.has(r) ? a.get(r) : 3;
            if (i < 1) {
                var d = e(r);
                throw t.message = "Loading chunk " + r + " failed after 3 retries.\n(" + d + ")", t.request = d, t
            }
            return new Promise(function (e) {
                setTimeout(function () {
                    var t = 3 - i + 1;
                    n.set(r, "cache-bust=true&retry-attempt=" + t), a.set(r, i - 1), e(g.e(r))
                }, 500)
            })
        })
    }     , function () {
        if ("undefined" != typeof document) {
            var e = function (e, t, n, a, r) {
                var i = document.createElement("link");
                return i.rel = "stylesheet", i.type = "text/css", i.onerror = i.onload = function (n) {
                    if (i.onerror = i.onload = null, "load" === n.type) a(); else {
                        var d = n && ("load" === n.type ? "missing" : n.type), c = n && n.target && n.target.href || t,
                            o = Error("Loading CSS chunk " + e + " failed.\n(" + c + ")");
                        o.code = "CSS_CHUNK_LOAD_FAILED", o.type = d, o.request = c, i.parentNode && i.parentNode.removeChild(i), r(o)
                    }
                }                 , i.href = t, n ? n.parentNode.insertBefore(i, n.nextSibling) : document.head.appendChild(i), i
            }, t = function (e, t) {
                for (var n = document.getElementsByTagName("link"), a = 0; a < n.length; a++) {
                    var r = n[a], i = r.getAttribute("data-href") || r.getAttribute("href");
                    if ("stylesheet" === r.rel && (i === e || i === t)) return r
                }
                for (var d = document.getElementsByTagName("style"), a = 0; a < d.length; a++) {
                    var r = d[a], i = r.getAttribute("data-href");
                    if (i === e || i === t) return r
                }
            }, n = {3328: 0};
            g.f.miniCss = function (a, r) {
                n[a] ? r.push(n[a]) : 0 !== n[a] && ({
                    289: 1,
                    437: 1,
                    439: 1,
                    682: 1,
                    785: 1,
                    983: 1,
                    1363: 1,
                    1407: 1,
                    1414: 1,
                    1638: 1,
                    1941: 1,
                    1994: 1,
                    2081: 1,
                    2281: 1,
                    2396: 1,
                    2490: 1,
                    2502: 1,
                    3007: 1,
                    3285: 1,
                    3411: 1,
                    3437: 1,
                    3555: 1,
                    3601: 1,
                    3697: 1,
                    3853: 1,
                    3938: 1,
                    4094: 1,
                    4366: 1,
                    4601: 1,
                    4686: 1,
                    5099: 1,
                    5156: 1,
                    5214: 1,
                    5269: 1,
                    5322: 1,
                    5561: 1,
                    5590: 1,
                    5596: 1,
                    5662: 1,
                    5913: 1,
                    5916: 1,
                    6150: 1,
                    6341: 1,
                    6364: 1,
                    6462: 1,
                    6478: 1,
                    6557: 1,
                    6651: 1,
                    6780: 1,
                    6826: 1,
                    6840: 1,
                    6986: 1,
                    7206: 1,
                    7453: 1,
                    7468: 1,
                    7623: 1,
                    7716: 1,
                    7725: 1,
                    7768: 1,
                    7891: 1,
                    7940: 1,
                    7950: 1,
                    8009: 1,
                    8013: 1,
                    8560: 1,
                    8617: 1,
                    8716: 1,
                    8930: 1,
                    8958: 1,
                    9177: 1,
                    9454: 1,
                    9568: 1,
                    9616: 1,
                    9617: 1,
                    9947: 1
                })[a] && r.push(n[a] = new Promise(function (n, r) {
                    var i = g.miniCssF(a), d = g.p + i;
                    if (t(i, d)) return n();
                    e(a, d, null, n, r)
                }).then(function () {
                    n[a] = 0
                }, function (e) {
                    throw delete n[a], e
                }))
            }
        }
    }(), g.b = document.baseURI || self.location.href, f = {3328: 0}, g.f.j = function (e, t) {
        var n = g.o(f, e) ? f[e] : void 0;
        if (0 !== n) {
            if (n) t.push(n[2]); else if (/^(1414|3328|6826|7206)$/.test(e)) f[e] = 0; else {
                var a = new Promise(function (t, a) {
                    n = f[e] = [t, a]
                });
                t.push(n[2] = a);
                var r = g.p + g.u(e), i = Error();
                g.l(r, function (t) {
                    if (g.o(f, e) && (0 !== (n = f[e]) && (f[e] = void 0), n)) {
                        var a = t && ("load" === t.type ? "missing" : t.type), r = t && t.target && t.target.src;
                        i.message = "Loading chunk " + e + " failed.\n(" + a + ": " + r + ")", i.name = "ChunkLoadError", i.type = a, i.request = r, n[1](i)
                    }
                }, "chunk-" + e, e)
            }
        }
    }     , g.O.j = function (e) {
        return 0 === f[e]
    }     , u = function (e, t) {
        var n, a, r = t[0], i = t[1], d = t[2], c = 0;
        if (r.some(function (e) {
            return 0 !== f[e]
        })) {
            for (n in i) g.o(i, n) && (g.m[n] = i[n]);
            if (d) var o = d(g)
        }
        for (e && e(t); c < r.length; c++) a = r[c], g.o(f, a) && f[a] && f[a][0](), f[a] = 0;
        return g.O(o)
    }     , (b = self.webpackChunkdouyin_live_v2 = self.webpackChunkdouyin_live_v2 || []).forEach(u.bind(null, 0)), b.push = u.bind(null, b.push.bind(b)), g.nc = void 0
}();