// console.log("navigator", navigator)
const plugins = {}
const navigator = {
    appCodeName: "Mozilla",
    appName: "Netscape",
    appVersion: "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.6045.160 Safari/537.36",
    bluetooth: {},
    clipboard: {},
    cookieEnabled: true,
    credentials: {},
    deviceMemory: 8,
    doNotTrack: "1",
    geolocation: {},
    gpu: {
        wgslLanguageFeatures: {size: 0}
    },
    hardwareConcurrency: 16,
    hid:

        {
            onconnect: null, ondisconnect: null,
        },
    ink:

        {},
    keyboard:

        {},
    language: "zh-CN",
    languages: ['zh-CN'],
    locks:

        {},
    managed:

        {
            onmanagedconfigurationchange: null
        },
    maxTouchPoints: 0,
    mediaCapabilities:

        {},
    mediaDevices:

        {
            ondevicechange: null
        },
    mediaSession:

        {
            metadata: null, playbackState: 'none'
        },
    mimeTypes:

        {
            0: MimeType,
            1: MimeType,
            2: MimeType,
            3: MimeType,
            4: MimeType,
            5: MimeType,
            6: MimeType,
            7: MimeType,
            8: MimeType,
            9: MimeType,
            10: MimeType,
            11: MimeType,
            12: MimeType,
            13: MimeType,
            14: MimeType,
            15: MimeType,
            16: MimeType,
            17: MimeType,
            18: MimeType,
            19: MimeType,
            20: MimeType,
            21: MimeType,
            22: MimeType,
            23: MimeType,
            24: MimeType,
            25: MimeType,
            26: MimeType,
            27: MimeType,
            28: MimeType,
            29: MimeType,
            30: MimeType,
            31: MimeType,
            32: MimeType,
            33: MimeType,
            34: MimeType,
            35: MimeType,
            36: MimeType,
            37: MimeType,
            38: MimeType,
            39: MimeType,
            40: MimeType,
        },
    onLine: true,
    pdfViewerEnabled: true,
    permissions: {},
    get platform() {
        return "Win32"
    },
    get webdriver() {
        return false
    },
    get plugins() {
        return plugins
    }
}
console.log('navigator', navigator)
const modules = {
    28862: function () {
        var ei = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", en = {
            rotl: function (et, ei) {
                return et << ei | et >>> 32 - ei
            }, rotr: function (et, ei) {
                return et << 32 - ei | et >>> ei
            }, endian: function (et) {
                if (et.constructor == Number) return 16711935 & en.rotl(et, 8) | 4278255360 & en.rotl(et, 24);
                for (var ei = 0; ei < et.length; ei++) et[ei] = en.endian(et[ei]);
                return et
            }, randomBytes: function (et) {
                for (var ei = []; et > 0; et--) ei.push(Math.floor(256 * Math.random()));
                return ei
            }, bytesToWords: function (et) {
                for (var ei = [], en = 0, eo = 0; en < et.length; en++, eo += 8) ei[eo >>> 5] |= et[en] << 24 - eo % 32;
                return ei
            }, wordsToBytes: function (et) {
                for (var ei = [], en = 0; en < 32 * et.length; en += 8) ei.push(et[en >>> 5] >>> 24 - en % 32 & 255);
                return ei
            }, bytesToHex: function (et) {
                for (var ei = [], en = 0; en < et.length; en++) ei.push((et[en] >>> 4).toString(16)), ei.push((15 & et[en]).toString(16));
                return ei.join("")
            }, hexToBytes: function (et) {
                for (var ei = [], en = 0; en < et.length; en += 2) ei.push(parseInt(et.substr(en, 2), 16));
                return ei
            }, bytesToBase64: function (et) {
                for (var en = [], eo = 0; eo < et.length; eo += 3) for (var eA = et[eo] << 16 | et[eo + 1] << 8 | et[eo + 2], ec = 0; ec < 4; ec++) 8 * eo + 6 * ec <= 8 * et.length ? en.push(ei.charAt(eA >>> 6 * (3 - ec) & 63)) : en.push("=");
                return en.join("")
            }, base64ToBytes: function (et) {
                et = et.replace(/[^A-Z0-9+\/]/ig, "");
                for (var en = [], eo = 0, eA = 0; eo < et.length; eA = ++eo % 4) 0 != eA && en.push((ei.indexOf(et.charAt(eo - 1)) & Math.pow(2, -2 * eA + 8) - 1) << 2 * eA | ei.indexOf(et.charAt(eo)) >>> 6 - 2 * eA);
                return en
            }
        };
        return en
    }(), 6824: function () {
        var ei = {
            utf8: {
                stringToBytes: function (et) {
                    return ei.bin.stringToBytes(unescape(encodeURIComponent(et)))
                }, bytesToString: function (et) {
                    return decodeURIComponent(escape(ei.bin.bytesToString(et)))
                }
            }, bin: {
                stringToBytes: function (et) {
                    for (var ei = [], en = 0; en < et.length; en++) ei.push(255 & et.charCodeAt(en));
                    return ei
                }, bytesToString: function (et) {
                    for (var ei = [], en = 0; en < et.length; en++) ei.push(String.fromCharCode(et[en]));
                    return ei.join("")
                }
            }
        };
        return ei
    }(), 28206: function () {
        function ei(et) {
            return !!et.constructor && "function" == typeof et.constructor.isBuffer && et.constructor.isBuffer(et)
        }

        function en(et) {
            return "function" == typeof et.readFloatLE && "function" == typeof et.slice && ei(et.slice(0, 0))
        }

        return function (et) {
            return null != et && (ei(et) || en(et) || !!et._isBuffer)
        }
    }(),
}

function en(id) {
    return modules[id]
}

function getSignatureFunc() {
    var ei = en(28862), eo = en(6824).utf8, eA = en(28206), ec = en(6824).bin, eu = function (et, en) {
        et.constructor == String ? et = en && "binary" === en.encoding ? ec.stringToBytes(et) : eo.stringToBytes(et) : eA(et) ? et = Array.prototype.slice.call(et, 0) : Array.isArray(et) || et.constructor === Uint8Array || (et = et.toString());
        for (var eh = ei.bytesToWords(et), ef = 8 * et.length, ed = 1732584193, ep = -271733879, eE = -1732584194, ey = 271733878, eI = 0; eI < eh.length; eI++) eh[eI] = (eh[eI] << 8 | eh[eI] >>> 24) & 16711935 | (eh[eI] << 24 | eh[eI] >>> 8) & 4278255360;
        eh[ef >>> 5] |= 128 << ef % 32, eh[(ef + 64 >>> 9 << 4) + 14] = ef;
        for (var em = eu._ff, eC = eu._gg, eB = eu._hh, e_ = eu._ii, eI = 0; eI < eh.length; eI += 16) {
            var eQ = ed, eS = ep, eb = eE, ew = ey;
            ed = em(ed, ep, eE, ey, eh[eI + 0], 7, -680876936), ey = em(ey, ed, ep, eE, eh[eI + 1], 12, -389564586), eE = em(eE, ey, ed, ep, eh[eI + 2], 17, 606105819), ep = em(ep, eE, ey, ed, eh[eI + 3], 22, -1044525330), ed = em(ed, ep, eE, ey, eh[eI + 4], 7, -176418897), ey = em(ey, ed, ep, eE, eh[eI + 5], 12, 1200080426), eE = em(eE, ey, ed, ep, eh[eI + 6], 17, -1473231341), ep = em(ep, eE, ey, ed, eh[eI + 7], 22, -45705983), ed = em(ed, ep, eE, ey, eh[eI + 8], 7, 1770035416), ey = em(ey, ed, ep, eE, eh[eI + 9], 12, -1958414417), eE = em(eE, ey, ed, ep, eh[eI + 10], 17, -42063), ep = em(ep, eE, ey, ed, eh[eI + 11], 22, -1990404162), ed = em(ed, ep, eE, ey, eh[eI + 12], 7, 1804603682), ey = em(ey, ed, ep, eE, eh[eI + 13], 12, -40341101), eE = em(eE, ey, ed, ep, eh[eI + 14], 17, -1502002290), ep = em(ep, eE, ey, ed, eh[eI + 15], 22, 1236535329), ed = eC(ed, ep, eE, ey, eh[eI + 1], 5, -165796510), ey = eC(ey, ed, ep, eE, eh[eI + 6], 9, -1069501632), eE = eC(eE, ey, ed, ep, eh[eI + 11], 14, 643717713), ep = eC(ep, eE, ey, ed, eh[eI + 0], 20, -373897302), ed = eC(ed, ep, eE, ey, eh[eI + 5], 5, -701558691), ey = eC(ey, ed, ep, eE, eh[eI + 10], 9, 38016083), eE = eC(eE, ey, ed, ep, eh[eI + 15], 14, -660478335), ep = eC(ep, eE, ey, ed, eh[eI + 4], 20, -405537848), ed = eC(ed, ep, eE, ey, eh[eI + 9], 5, 568446438), ey = eC(ey, ed, ep, eE, eh[eI + 14], 9, -1019803690), eE = eC(eE, ey, ed, ep, eh[eI + 3], 14, -187363961), ep = eC(ep, eE, ey, ed, eh[eI + 8], 20, 1163531501), ed = eC(ed, ep, eE, ey, eh[eI + 13], 5, -1444681467), ey = eC(ey, ed, ep, eE, eh[eI + 2], 9, -51403784), eE = eC(eE, ey, ed, ep, eh[eI + 7], 14, 1735328473), ep = eC(ep, eE, ey, ed, eh[eI + 12], 20, -1926607734), ed = eB(ed, ep, eE, ey, eh[eI + 5], 4, -378558), ey = eB(ey, ed, ep, eE, eh[eI + 8], 11, -2022574463), eE = eB(eE, ey, ed, ep, eh[eI + 11], 16, 1839030562), ep = eB(ep, eE, ey, ed, eh[eI + 14], 23, -35309556), ed = eB(ed, ep, eE, ey, eh[eI + 1], 4, -1530992060), ey = eB(ey, ed, ep, eE, eh[eI + 4], 11, 1272893353), eE = eB(eE, ey, ed, ep, eh[eI + 7], 16, -155497632), ep = eB(ep, eE, ey, ed, eh[eI + 10], 23, -1094730640), ed = eB(ed, ep, eE, ey, eh[eI + 13], 4, 681279174), ey = eB(ey, ed, ep, eE, eh[eI + 0], 11, -358537222), eE = eB(eE, ey, ed, ep, eh[eI + 3], 16, -722521979), ep = eB(ep, eE, ey, ed, eh[eI + 6], 23, 76029189), ed = eB(ed, ep, eE, ey, eh[eI + 9], 4, -640364487), ey = eB(ey, ed, ep, eE, eh[eI + 12], 11, -421815835), eE = eB(eE, ey, ed, ep, eh[eI + 15], 16, 530742520), ep = eB(ep, eE, ey, ed, eh[eI + 2], 23, -995338651), ed = e_(ed, ep, eE, ey, eh[eI + 0], 6, -198630844), ey = e_(ey, ed, ep, eE, eh[eI + 7], 10, 1126891415), eE = e_(eE, ey, ed, ep, eh[eI + 14], 15, -1416354905), ep = e_(ep, eE, ey, ed, eh[eI + 5], 21, -57434055), ed = e_(ed, ep, eE, ey, eh[eI + 12], 6, 1700485571), ey = e_(ey, ed, ep, eE, eh[eI + 3], 10, -1894986606), eE = e_(eE, ey, ed, ep, eh[eI + 10], 15, -1051523), ep = e_(ep, eE, ey, ed, eh[eI + 1], 21, -2054922799), ed = e_(ed, ep, eE, ey, eh[eI + 8], 6, 1873313359), ey = e_(ey, ed, ep, eE, eh[eI + 15], 10, -30611744), eE = e_(eE, ey, ed, ep, eh[eI + 6], 15, -1560198380), ep = e_(ep, eE, ey, ed, eh[eI + 13], 21, 1309151649), ed = e_(ed, ep, eE, ey, eh[eI + 4], 6, -145523070), ey = e_(ey, ed, ep, eE, eh[eI + 11], 10, -1120210379), eE = e_(eE, ey, ed, ep, eh[eI + 2], 15, 718787259), ep = e_(ep, eE, ey, ed, eh[eI + 9], 21, -343485551), ed = ed + eQ >>> 0, ep = ep + eS >>> 0, eE = eE + eb >>> 0, ey = ey + ew >>> 0
        }
        return ei.endian([ed, ep, eE, ey])
    };
    eu._ff = function (et, ei, en, eo, eA, ec, eu) {
        var eh = et + (ei & en | ~ei & eo) + (eA >>> 0) + eu;
        return (eh << ec | eh >>> 32 - ec) + ei
    }
        , eu._gg = function (et, ei, en, eo, eA, ec, eu) {
        var eh = et + (ei & eo | en & ~eo) + (eA >>> 0) + eu;
        return (eh << ec | eh >>> 32 - ec) + ei
    }
        , eu._hh = function (et, ei, en, eo, eA, ec, eu) {
        var eh = et + (ei ^ en ^ eo) + (eA >>> 0) + eu;
        return (eh << ec | eh >>> 32 - ec) + ei
    }
        , eu._ii = function (et, ei, en, eo, eA, ec, eu) {
        var eh = et + (en ^ (ei | ~eo)) + (eA >>> 0) + eu;
        return (eh << ec | eh >>> 32 - ec) + ei
    }
        , eu._blocksize = 16, eu._digestsize = 16

    return function (et, en) {
        if (null == et) throw Error("Illegal argument " + et);
        var eo = ei.wordsToBytes(eu(et, en));
        return en && en.asBytes ? eo : en && en.asString ? ec.bytesToString(eo) : ei.bytesToHex(eo)
    }
}


const getSignature = getSignatureFunc()

const a = "live_id=1,aid=6383,version_code=180800,webcast_sdk_version=1.0.12,room_id=7318918716492679936,sub_room_id=,sub_channel_id=,did_rule=3,user_unique_id=7317184710429476361,device_platform=web,device_type=,ac=,identity=audience"
//const a = "live_id=1,aid=6383,version_code=180800,webcast_sdk_version=1.0.12,room_id=7317545187721399078,sub_room_id=,sub_channel_id=,did_rule=3,user_unique_id=7317184710429476361,device_platform=web,device_type=,ac=,identity=audience"
const b = getSignature(a)
const stub = {
    "X-MS-STUB": b
}

const res = window.byted_acrawler.frontierSign(stub)
const signature = res["X-Bogus"]
console.log(signature)