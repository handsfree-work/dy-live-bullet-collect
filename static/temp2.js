const methods = {
    26682: function (et) {
        !function () {
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
            et.exports = en
        }()
    },
    6824: function(et) {
        var ei = {
            utf8: {
                stringToBytes: function(et) {
                    return ei.bin.stringToBytes(unescape(encodeURIComponent(et)))
                },
                bytesToString: function(et) {
                    return decodeURIComponent(escape(ei.bin.bytesToString(et)))
                }
            },
            bin: {
                stringToBytes: function(et) {
                    for (var ei = [], en = 0; en < et.length; en++)
                        ei.push(255 & et.charCodeAt(en));
                    return ei
                },
                bytesToString: function(et) {
                    for (var ei = [], en = 0; en < et.length; en++)
                        ei.push(String.fromCharCode(et[en]));
                    return ei.join("")
                }
            }
        };
        et.exports = ei
    },
    28206: function(et) {
        function ei(et) {
            return !!et.constructor && "function" == typeof et.constructor.isBuffer && et.constructor.isBuffer(et)
        }
        function en(et) {
            return "function" == typeof et.readFloatLE && "function" == typeof et.slice && ei(et.slice(0, 0))
        }
        et.exports = function(et) {
            return null != et && (ei(et) || en(et) || !!et._isBuffer)
        }
    },
}

methods[]