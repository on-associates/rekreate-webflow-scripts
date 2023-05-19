var ScrollyVideo = (function () {
    "use strict";
    var t,
        e,
        i = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
        s = { exports: {} };
    (t = s),
        (e = s.exports),
        (function (i, s) {
            var r = "function",
                n = "undefined",
                a = "object",
                o = "string",
                h = "model",
                d = "name",
                l = "type",
                p = "vendor",
                f = "version",
                u = "architecture",
                c = "console",
                m = "mobile",
                g = "tablet",
                y = "smarttv",
                b = "wearable",
                v = "embedded",
                w = "Amazon",
                S = "Apple",
                x = "ASUS",
                U = "BlackBerry",
                $ = "Browser",
                _ = "Chrome",
                E = "Firefox",
                B = "Google",
                T = "Huawei",
                z = "Microsoft",
                A = "Motorola",
                k = "Opera",
                I = "Samsung",
                C = "Sharp",
                P = "Sony",
                F = "Xiaomi",
                L = "Zebra",
                D = "Facebook",
                R = function (t) {
                    for (var e = {}, i = 0; i < t.length; i++) e[t[i].toUpperCase()] = t[i];
                    return e;
                },
                N = function (t, e) {
                    return typeof t === o && -1 !== O(e).indexOf(O(t));
                },
                O = function (t) {
                    return t.toLowerCase();
                },
                M = function (t, e) {
                    if (typeof t === o) return (t = t.replace(/^\s\s*/, "")), typeof e === n ? t : t.substring(0, 350);
                },
                G = function (t, e) {
                    for (var i, n, o, h, d, l, p = 0; p < e.length && !d;) {
                        var f = e[p],
                            u = e[p + 1];
                        for (i = n = 0; i < f.length && !d;)
                            if ((d = f[i++].exec(t)))
                                for (o = 0; o < u.length; o++)
                                    (l = d[++n]),
                                        typeof (h = u[o]) === a && h.length > 0
                                            ? 2 === h.length
                                                ? typeof h[1] == r
                                                    ? (this[h[0]] = h[1].call(this, l))
                                                    : (this[h[0]] = h[1])
                                                : 3 === h.length
                                                    ? typeof h[1] !== r || (h[1].exec && h[1].test)
                                                        ? (this[h[0]] = l ? l.replace(h[1], h[2]) : s)
                                                        : (this[h[0]] = l ? h[1].call(this, l, h[2]) : s)
                                                    : 4 === h.length && (this[h[0]] = l ? h[3].call(this, l.replace(h[1], h[2])) : s)
                                            : (this[h] = l || s);
                        p += 2;
                    }
                },
                H = function (t, e) {
                    for (var i in e)
                        if (typeof e[i] === a && e[i].length > 0) {
                            for (var r = 0; r < e[i].length; r++) if (N(e[i][r], t)) return "?" === i ? s : i;
                        } else if (N(e[i], t)) return "?" === i ? s : i;
                    return t;
                },
                V = { ME: "4.90", "NT 3.11": "NT3.51", "NT 4.0": "NT4.0", 2e3: "NT 5.0", XP: ["NT 5.1", "NT 5.2"], Vista: "NT 6.0", 7: "NT 6.1", 8: "NT 6.2", 8.1: "NT 6.3", 10: ["NT 6.4", "NT 10.0"], RT: "ARM" },
                Y = {
                    browser: [
                        [/\b(?:crmo|crios)\/([\w\.]+)/i],
                        [f, [d, "Chrome"]],
                        [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                        [f, [d, "Edge"]],
                        [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                        [d, f],
                        [/opios[\/ ]+([\w\.]+)/i],
                        [f, [d, k + " Mini"]],
                        [/\bopr\/([\w\.]+)/i],
                        [f, [d, k]],
                        [
                            /(kindle)\/([\w\.]+)/i,
                            /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
                            /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
                            /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
                            /(?:ms|\()(ie) ([\w\.]+)/i,
                            /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
                            /(weibo)__([\d\.]+)/i,
                        ],
                        [d, f],
                        [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                        [f, [d, "UC" + $]],
                        [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i],
                        [f, [d, "WeChat(Win) Desktop"]],
                        [/micromessenger\/([\w\.]+)/i],
                        [f, [d, "WeChat"]],
                        [/konqueror\/([\w\.]+)/i],
                        [f, [d, "Konqueror"]],
                        [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                        [f, [d, "IE"]],
                        [/yabrowser\/([\w\.]+)/i],
                        [f, [d, "Yandex"]],
                        [/(avast|avg)\/([\w\.]+)/i],
                        [[d, /(.+)/, "$1 Secure " + $], f],
                        [/\bfocus\/([\w\.]+)/i],
                        [f, [d, E + " Focus"]],
                        [/\bopt\/([\w\.]+)/i],
                        [f, [d, k + " Touch"]],
                        [/coc_coc\w+\/([\w\.]+)/i],
                        [f, [d, "Coc Coc"]],
                        [/dolfin\/([\w\.]+)/i],
                        [f, [d, "Dolphin"]],
                        [/coast\/([\w\.]+)/i],
                        [f, [d, k + " Coast"]],
                        [/miuibrowser\/([\w\.]+)/i],
                        [f, [d, "MIUI " + $]],
                        [/fxios\/([-\w\.]+)/i],
                        [f, [d, E]],
                        [/\bqihu|(qi?ho?o?|360)browser/i],
                        [[d, "360 " + $]],
                        [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],
                        [[d, /(.+)/, "$1 " + $], f],
                        [/(comodo_dragon)\/([\w\.]+)/i],
                        [[d, /_/g, " "], f],
                        [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],
                        [d, f],
                        [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i],
                        [d],
                        [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                        [[d, D], f],
                        [/safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i],
                        [d, f],
                        [/\bgsa\/([\w\.]+) .*safari\//i],
                        [f, [d, "GSA"]],
                        [/headlesschrome(?:\/([\w\.]+)| )/i],
                        [f, [d, _ + " Headless"]],
                        [/ wv\).+(chrome)\/([\w\.]+)/i],
                        [[d, _ + " WebView"], f],
                        [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                        [f, [d, "Android " + $]],
                        [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                        [d, f],
                        [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                        [f, [d, "Mobile Safari"]],
                        [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                        [f, d],
                        [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                        [d, [f, H, { "1.0": "/8", 1.2: "/1", 1.3: "/3", "2.0": "/412", "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/" }]],
                        [/(webkit|khtml)\/([\w\.]+)/i],
                        [d, f],
                        [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                        [[d, "Netscape"], f],
                        [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                        [f, [d, E + " Reality"]],
                        [
                            /ekiohf.+(flow)\/([\w\.]+)/i,
                            /(swiftfox)/i,
                            /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                            /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                            /(firefox)\/([\w\.]+)/i,
                            /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                            /(links) \(([\w\.]+)/i,
                        ],
                        [d, f],
                        [/(cobalt)\/([\w\.]+)/i],
                        [d, [f, /master.|lts./, ""]],
                    ],
                    cpu: [
                        [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                        [[u, "amd64"]],
                        [/(ia32(?=;))/i],
                        [[u, O]],
                        [/((?:i[346]|x)86)[;\)]/i],
                        [[u, "ia32"]],
                        [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                        [[u, "arm64"]],
                        [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                        [[u, "armhf"]],
                        [/windows (ce|mobile); ppc;/i],
                        [[u, "arm"]],
                        [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                        [[u, /ower/, "", O]],
                        [/(sun4\w)[;\)]/i],
                        [[u, "sparc"]],
                        [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                        [[u, O]],
                    ],
                    device: [
                        [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                        [h, [p, I], [l, g]],
                        [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
                        [h, [p, I], [l, m]],
                        [/\((ip(?:hone|od)[\w ]*);/i],
                        [h, [p, S], [l, m]],
                        [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                        [h, [p, S], [l, g]],
                        [/(macintosh);/i],
                        [h, [p, S]],
                        [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                        [h, [p, T], [l, g]],
                        [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
                        [h, [p, T], [l, m]],
                        [
                            /\b(poco[\w ]+)(?: bui|\))/i,
                            /\b; (\w+) build\/hm\1/i,
                            /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                            /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                            /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i,
                        ],
                        [
                            [h, /_/g, " "],
                            [p, F],
                            [l, m],
                        ],
                        [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                        [
                            [h, /_/g, " "],
                            [p, F],
                            [l, g],
                        ],
                        [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                        [h, [p, "OPPO"], [l, m]],
                        [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                        [h, [p, "Vivo"], [l, m]],
                        [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
                        [h, [p, "Realme"], [l, m]],
                        [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                        [h, [p, A], [l, m]],
                        [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                        [h, [p, A], [l, g]],
                        [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                        [h, [p, "LG"], [l, g]],
                        [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
                        [h, [p, "LG"], [l, m]],
                        [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                        [h, [p, "Lenovo"], [l, g]],
                        [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                        [
                            [h, /_/g, " "],
                            [p, "Nokia"],
                            [l, m],
                        ],
                        [/(pixel c)\b/i],
                        [h, [p, B], [l, g]],
                        [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                        [h, [p, B], [l, m]],
                        [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                        [h, [p, P], [l, m]],
                        [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                        [
                            [h, "Xperia Tablet"],
                            [p, P],
                            [l, g],
                        ],
                        [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                        [h, [p, "OnePlus"], [l, m]],
                        [/(alexa)webm/i, /(kf[a-z]{2}wi)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                        [h, [p, w], [l, g]],
                        [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                        [
                            [h, /(.+)/g, "Fire Phone $1"],
                            [p, w],
                            [l, m],
                        ],
                        [/(playbook);[-\w\),; ]+(rim)/i],
                        [h, p, [l, g]],
                        [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                        [h, [p, U], [l, m]],
                        [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                        [h, [p, x], [l, g]],
                        [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                        [h, [p, x], [l, m]],
                        [/(nexus 9)/i],
                        [h, [p, "HTC"], [l, g]],
                        [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic|sony(?!-bra))[-_ ]?([-\w]*)/i],
                        [p, [h, /_/g, " "], [l, m]],
                        [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                        [h, [p, "Acer"], [l, g]],
                        [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                        [h, [p, "Meizu"], [l, m]],
                        [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                        [h, [p, C], [l, m]],
                        [
                            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
                            /(hp) ([\w ]+\w)/i,
                            /(asus)-?(\w+)/i,
                            /(microsoft); (lumia[\w ]+)/i,
                            /(lenovo)[-_ ]?([-\w]+)/i,
                            /(jolla)/i,
                            /(oppo) ?([\w ]+) bui/i,
                        ],
                        [p, h, [l, m]],
                        [
                            /(archos) (gamepad2?)/i,
                            /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                            /(kindle)\/([\w\.]+)/i,
                            /(nook)[\w ]+build\/(\w+)/i,
                            /(dell) (strea[kpr\d ]*[\dko])/i,
                            /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                            /(trinity)[- ]*(t\d{3}) bui/i,
                            /(gigaset)[- ]+(q\w{1,9}) bui/i,
                            /(vodafone) ([\w ]+)(?:\)| bui)/i,
                        ],
                        [p, h, [l, g]],
                        [/(surface duo)/i],
                        [h, [p, z], [l, g]],
                        [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                        [h, [p, "Fairphone"], [l, m]],
                        [/(u304aa)/i],
                        [h, [p, "AT&T"], [l, m]],
                        [/\bsie-(\w*)/i],
                        [h, [p, "Siemens"], [l, m]],
                        [/\b(rct\w+) b/i],
                        [h, [p, "RCA"], [l, g]],
                        [/\b(venue[\d ]{2,7}) b/i],
                        [h, [p, "Dell"], [l, g]],
                        [/\b(q(?:mv|ta)\w+) b/i],
                        [h, [p, "Verizon"], [l, g]],
                        [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                        [h, [p, "Barnes & Noble"], [l, g]],
                        [/\b(tm\d{3}\w+) b/i],
                        [h, [p, "NuVision"], [l, g]],
                        [/\b(k88) b/i],
                        [h, [p, "ZTE"], [l, g]],
                        [/\b(nx\d{3}j) b/i],
                        [h, [p, "ZTE"], [l, m]],
                        [/\b(gen\d{3}) b.+49h/i],
                        [h, [p, "Swiss"], [l, m]],
                        [/\b(zur\d{3}) b/i],
                        [h, [p, "Swiss"], [l, g]],
                        [/\b((zeki)?tb.*\b) b/i],
                        [h, [p, "Zeki"], [l, g]],
                        [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                        [[p, "Dragon Touch"], h, [l, g]],
                        [/\b(ns-?\w{0,9}) b/i],
                        [h, [p, "Insignia"], [l, g]],
                        [/\b((nxa|next)-?\w{0,9}) b/i],
                        [h, [p, "NextBook"], [l, g]],
                        [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                        [[p, "Voice"], h, [l, m]],
                        [/\b(lvtel\-)?(v1[12]) b/i],
                        [[p, "LvTel"], h, [l, m]],
                        [/\b(ph-1) /i],
                        [h, [p, "Essential"], [l, m]],
                        [/\b(v(100md|700na|7011|917g).*\b) b/i],
                        [h, [p, "Envizen"], [l, g]],
                        [/\b(trio[-\w\. ]+) b/i],
                        [h, [p, "MachSpeed"], [l, g]],
                        [/\btu_(1491) b/i],
                        [h, [p, "Rotor"], [l, g]],
                        [/(shield[\w ]+) b/i],
                        [h, [p, "Nvidia"], [l, g]],
                        [/(sprint) (\w+)/i],
                        [p, h, [l, m]],
                        [/(kin\.[onetw]{3})/i],
                        [
                            [h, /\./g, " "],
                            [p, z],
                            [l, m],
                        ],
                        [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                        [h, [p, L], [l, g]],
                        [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                        [h, [p, L], [l, m]],
                        [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                        [p, h, [l, c]],
                        [/droid.+; (shield) bui/i],
                        [h, [p, "Nvidia"], [l, c]],
                        [/(playstation [345portablevi]+)/i],
                        [h, [p, P], [l, c]],
                        [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                        [h, [p, z], [l, c]],
                        [/smart-tv.+(samsung)/i],
                        [p, [l, y]],
                        [/hbbtv.+maple;(\d+)/i],
                        [
                            [h, /^/, "SmartTV"],
                            [p, I],
                            [l, y],
                        ],
                        [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                        [
                            [p, "LG"],
                            [l, y],
                        ],
                        [/(apple) ?tv/i],
                        [p, [h, S + " TV"], [l, y]],
                        [/crkey/i],
                        [
                            [h, _ + "cast"],
                            [p, B],
                            [l, y],
                        ],
                        [/droid.+aft(\w)( bui|\))/i],
                        [h, [p, w], [l, y]],
                        [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                        [h, [p, C], [l, y]],
                        [/(bravia[\w ]+)( bui|\))/i],
                        [h, [p, P], [l, y]],
                        [/(mitv-\w{5}) bui/i],
                        [h, [p, F], [l, y]],
                        [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],
                        [
                            [p, M],
                            [h, M],
                            [l, y],
                        ],
                        [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                        [[l, y]],
                        [/((pebble))app/i],
                        [p, h, [l, b]],
                        [/droid.+; (glass) \d/i],
                        [h, [p, B], [l, b]],
                        [/droid.+; (wt63?0{2,3})\)/i],
                        [h, [p, L], [l, b]],
                        [/(quest( 2)?)/i],
                        [h, [p, D], [l, b]],
                        [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                        [p, [l, v]],
                        [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
                        [h, [l, m]],
                        [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                        [h, [l, g]],
                        [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                        [[l, g]],
                        [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
                        [[l, m]],
                        [/(android[-\w\. ]{0,9});.+buil/i],
                        [h, [p, "Generic"]],
                    ],
                    engine: [
                        [/windows.+ edge\/([\w\.]+)/i],
                        [f, [d, "EdgeHTML"]],
                        [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                        [f, [d, "Blink"]],
                        [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i],
                        [d, f],
                        [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                        [f, d],
                    ],
                    os: [
                        [/microsoft (windows) (vista|xp)/i],
                        [d, f],
                        [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],
                        [d, [f, H, V]],
                        [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                        [
                            [d, "Windows"],
                            [f, H, V],
                        ],
                        [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /cfnetwork\/.+darwin/i],
                        [
                            [f, /_/g, "."],
                            [d, "iOS"],
                        ],
                        [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                        [
                            [d, "Mac OS"],
                            [f, /_/g, "."],
                        ],
                        [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                        [f, d],
                        [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
                        [d, f],
                        [/\(bb(10);/i],
                        [f, [d, U]],
                        [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                        [f, [d, "Symbian"]],
                        [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                        [f, [d, E + " OS"]],
                        [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                        [f, [d, "webOS"]],
                        [/crkey\/([\d\.]+)/i],
                        [f, [d, _ + "cast"]],
                        [/(cros) [\w]+ ([\w\.]+\w)/i],
                        [[d, "Chromium OS"], f],
                        [
                            /(nintendo|playstation) ([wids345portablevuch]+)/i,
                            /(xbox); +xbox ([^\);]+)/i,
                            /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                            /(mint)[\/\(\) ]?(\w*)/i,
                            /(mageia|vectorlinux)[; ]/i,
                            /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                            /(hurd|linux) ?([\w\.]*)/i,
                            /(gnu) ?([\w\.]*)/i,
                            /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                            /(haiku) (\w+)/i,
                        ],
                        [d, f],
                        [/(sunos) ?([\w\.\d]*)/i],
                        [[d, "Solaris"], f],
                        [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i, /(unix) ?([\w\.]*)/i],
                        [d, f],
                    ],
                },
                j = function (t, e) {
                    if ((typeof t === a && ((e = t), (t = s)), !(this instanceof j))) return new j(t, e).getResult();
                    var r = t || (typeof i !== n && i.navigator && i.navigator.userAgent ? i.navigator.userAgent : ""),
                        c = e
                            ? (function (t, e) {
                                var i = {};
                                for (var s in t) e[s] && e[s].length % 2 == 0 ? (i[s] = e[s].concat(t[s])) : (i[s] = t[s]);
                                return i;
                            })(Y, e)
                            : Y;
                    return (
                        (this.getBrowser = function () {
                            var t,
                                e = {};
                            return (e[d] = s), (e[f] = s), G.call(e, r, c.browser), (e.major = typeof (t = e.version) === o ? t.replace(/[^\d\.]/g, "").split(".")[0] : s), e;
                        }),
                        (this.getCPU = function () {
                            var t = {};
                            return (t[u] = s), G.call(t, r, c.cpu), t;
                        }),
                        (this.getDevice = function () {
                            var t = {};
                            return (t[p] = s), (t[h] = s), (t[l] = s), G.call(t, r, c.device), t;
                        }),
                        (this.getEngine = function () {
                            var t = {};
                            return (t[d] = s), (t[f] = s), G.call(t, r, c.engine), t;
                        }),
                        (this.getOS = function () {
                            var t = {};
                            return (t[d] = s), (t[f] = s), G.call(t, r, c.os), t;
                        }),
                        (this.getResult = function () {
                            return { ua: this.getUA(), browser: this.getBrowser(), engine: this.getEngine(), os: this.getOS(), device: this.getDevice(), cpu: this.getCPU() };
                        }),
                        (this.getUA = function () {
                            return r;
                        }),
                        (this.setUA = function (t) {
                            return (r = typeof t === o && t.length > 350 ? M(t, 350) : t), this;
                        }),
                        this.setUA(r),
                        this
                    );
                };
            (j.VERSION = "1.0.33"), (j.BROWSER = R([d, f, "major"])), (j.CPU = R([u])), (j.DEVICE = R([h, p, l, c, m, y, g, b, v])), (j.ENGINE = j.OS = R([d, f])), t.exports && (e = t.exports = j), (e.UAParser = j);
            var q = typeof i !== n && (i.jQuery || i.Zepto);
            if (q && !q.ua) {
                var W = new j();
                (q.ua = W.getResult()),
                    (q.ua.get = function () {
                        return W.getUA();
                    }),
                    (q.ua.set = function (t) {
                        W.setUA(t);
                        var e = W.getResult();
                        for (var i in e) q.ua[i] = e[i];
                    });
            }
        })("object" == typeof window ? window : i);
    var r,
        n,
        a,
        o,
        h,
        d,
        l,
        p,
        f,
        u,
        c,
        m,
        g,
        y = s.exports,
        b = {};
    (r = b),
        ((h =
            ((n = new Date()),
                (a = 4),
                (o = {
                    setLogLevel: function (t) {
                        a = t == this.debug ? 1 : t == this.info ? 2 : t == this.warn ? 3 : (this.error, 4);
                    },
                    debug: function (t, e) {
                        void 0 === console.debug && (console.debug = console.log), 1 >= a && console.debug("[" + h.getDurationString(new Date() - n, 1e3) + "]", "[" + t + "]", e);
                    },
                    log: function (t, e) {
                        this.debug(t.msg);
                    },
                    info: function (t, e) {
                        2 >= a && console.info("[" + h.getDurationString(new Date() - n, 1e3) + "]", "[" + t + "]", e);
                    },
                    warn: function (t, e) {
                        3 >= a && console.warn("[" + h.getDurationString(new Date() - n, 1e3) + "]", "[" + t + "]", e);
                    },
                    error: function (t, e) {
                        4 >= a && console.error("[" + h.getDurationString(new Date() - n, 1e3) + "]", "[" + t + "]", e);
                    },
                }))).getDurationString = function (t, e) {
                    function i(t, e) {
                        for (var i = ("" + t).split("."); i[0].length < e;) i[0] = "0" + i[0];
                        return i.join(".");
                    }
                    t < 0 ? ((s = !0), (t = -t)) : (s = !1);
                    var s,
                        r = t / (e || 1),
                        n = Math.floor(r / 3600),
                        a = Math.floor((r -= 3600 * n) / 60),
                        o = 1e3 * (r -= 60 * a);
                    return (o -= 1e3 * (r = Math.floor(r))), (o = Math.floor(o)), (s ? "-" : "") + n + ":" + i(a, 2) + ":" + i(r, 2) + "." + i(o, 3);
                }),
        (h.printRanges = function (t) {
            var e = t.length;
            if (e > 0) {
                for (var i = "", s = 0; s < e; s++) s > 0 && (i += ","), (i += "[" + h.getDurationString(t.start(s)) + "," + h.getDurationString(t.end(s)) + "]");
                return i;
            }
            return "(empty)";
        }),
        (r.Log = h),
        ((d = function (t) {
            if (!(t instanceof ArrayBuffer)) throw "Needs an array buffer";
            (this.buffer = t), (this.dataview = new DataView(t)), (this.position = 0);
        }).prototype.getPosition = function () {
            return this.position;
        }),
        (d.prototype.getEndPosition = function () {
            return this.buffer.byteLength;
        }),
        (d.prototype.getLength = function () {
            return this.buffer.byteLength;
        }),
        (d.prototype.seek = function (t) {
            var e = Math.max(0, Math.min(this.buffer.byteLength, t));
            return (this.position = isNaN(e) || !isFinite(e) ? 0 : e), !0;
        }),
        (d.prototype.isEos = function () {
            return this.getPosition() >= this.getEndPosition();
        }),
        (d.prototype.readAnyInt = function (t, e) {
            var i = 0;
            if (this.position + t <= this.buffer.byteLength) {
                switch (t) {
                    case 1:
                        i = e ? this.dataview.getInt8(this.position) : this.dataview.getUint8(this.position);
                        break;
                    case 2:
                        i = e ? this.dataview.getInt16(this.position) : this.dataview.getUint16(this.position);
                        break;
                    case 3:
                        if (e) throw "No method for reading signed 24 bits values";
                        (i = this.dataview.getUint8(this.position) << 16), (i |= this.dataview.getUint8(this.position + 1) << 8), (i |= this.dataview.getUint8(this.position + 2));
                        break;
                    case 4:
                        i = e ? this.dataview.getInt32(this.position) : this.dataview.getUint32(this.position);
                        break;
                    case 8:
                        if (e) throw "No method for reading signed 64 bits values";
                        (i = this.dataview.getUint32(this.position) << 32), (i |= this.dataview.getUint32(this.position + 4));
                        break;
                    default:
                        throw "readInt method not implemented for size: " + t;
                }
                return (this.position += t), i;
            }
            throw "Not enough bytes in buffer";
        }),
        (d.prototype.readUint8 = function () {
            return this.readAnyInt(1, !1);
        }),
        (d.prototype.readUint16 = function () {
            return this.readAnyInt(2, !1);
        }),
        (d.prototype.readUint24 = function () {
            return this.readAnyInt(3, !1);
        }),
        (d.prototype.readUint32 = function () {
            return this.readAnyInt(4, !1);
        }),
        (d.prototype.readUint64 = function () {
            return this.readAnyInt(8, !1);
        }),
        (d.prototype.readString = function (t) {
            if (this.position + t <= this.buffer.byteLength) {
                for (var e = "", i = 0; i < t; i++) e += String.fromCharCode(this.readUint8());
                return e;
            }
            throw "Not enough bytes in buffer";
        }),
        (d.prototype.readCString = function () {
            for (var t = []; ;) {
                var e = this.readUint8();
                if (0 === e) break;
                t.push(e);
            }
            return String.fromCharCode.apply(null, t);
        }),
        (d.prototype.readInt8 = function () {
            return this.readAnyInt(1, !0);
        }),
        (d.prototype.readInt16 = function () {
            return this.readAnyInt(2, !0);
        }),
        (d.prototype.readInt32 = function () {
            return this.readAnyInt(4, !0);
        }),
        (d.prototype.readInt64 = function () {
            return this.readAnyInt(8, !1);
        }),
        (d.prototype.readUint8Array = function (t) {
            for (var e = new Uint8Array(t), i = 0; i < t; i++) e[i] = this.readUint8();
            return e;
        }),
        (d.prototype.readInt16Array = function (t) {
            for (var e = new Int16Array(t), i = 0; i < t; i++) e[i] = this.readInt16();
            return e;
        }),
        (d.prototype.readUint16Array = function (t) {
            for (var e = new Int16Array(t), i = 0; i < t; i++) e[i] = this.readUint16();
            return e;
        }),
        (d.prototype.readUint32Array = function (t) {
            for (var e = new Uint32Array(t), i = 0; i < t; i++) e[i] = this.readUint32();
            return e;
        }),
        (d.prototype.readInt32Array = function (t) {
            for (var e = new Int32Array(t), i = 0; i < t; i++) e[i] = this.readInt32();
            return e;
        }),
        (r.MP4BoxStream = d),
        ((l = function (t, e, i) {
            (this._byteOffset = e || 0),
                t instanceof ArrayBuffer ? (this.buffer = t) : "object" == typeof t ? ((this.dataView = t), e && (this._byteOffset += e)) : (this.buffer = new ArrayBuffer(t || 0)),
                (this.position = 0),
                (this.endianness = null == i ? l.LITTLE_ENDIAN : i);
        }).prototype = {}),
        (l.prototype.getPosition = function () {
            return this.position;
        }),
        (l.prototype._realloc = function (t) {
            if (this._dynamicSize) {
                var e = this._byteOffset + this.position + t,
                    i = this._buffer.byteLength;
                if (e <= i) e > this._byteLength && (this._byteLength = e);
                else {
                    for (i < 1 && (i = 1); e > i;) i *= 2;
                    var s = new ArrayBuffer(i),
                        r = new Uint8Array(this._buffer);
                    new Uint8Array(s, 0, r.length).set(r), (this.buffer = s), (this._byteLength = e);
                }
            }
        }),
        (l.prototype._trimAlloc = function () {
            if (this._byteLength != this._buffer.byteLength) {
                var t = new ArrayBuffer(this._byteLength),
                    e = new Uint8Array(t),
                    i = new Uint8Array(this._buffer, 0, e.length);
                e.set(i), (this.buffer = t);
            }
        }),
        (l.BIG_ENDIAN = !1),
        (l.LITTLE_ENDIAN = !0),
        (l.prototype._byteLength = 0),
        Object.defineProperty(l.prototype, "byteLength", {
            get: function () {
                return this._byteLength - this._byteOffset;
            },
        }),
        Object.defineProperty(l.prototype, "buffer", {
            get: function () {
                return this._trimAlloc(), this._buffer;
            },
            set: function (t) {
                (this._buffer = t), (this._dataView = new DataView(this._buffer, this._byteOffset)), (this._byteLength = this._buffer.byteLength);
            },
        }),
        Object.defineProperty(l.prototype, "byteOffset", {
            get: function () {
                return this._byteOffset;
            },
            set: function (t) {
                (this._byteOffset = t), (this._dataView = new DataView(this._buffer, this._byteOffset)), (this._byteLength = this._buffer.byteLength);
            },
        }),
        Object.defineProperty(l.prototype, "dataView", {
            get: function () {
                return this._dataView;
            },
            set: function (t) {
                (this._byteOffset = t.byteOffset), (this._buffer = t.buffer), (this._dataView = new DataView(this._buffer, this._byteOffset)), (this._byteLength = this._byteOffset + t.byteLength);
            },
        }),
        (l.prototype.seek = function (t) {
            var e = Math.max(0, Math.min(this.byteLength, t));
            this.position = isNaN(e) || !isFinite(e) ? 0 : e;
        }),
        (l.prototype.isEof = function () {
            return this.position >= this._byteLength;
        }),
        (l.prototype.mapUint8Array = function (t) {
            this._realloc(1 * t);
            var e = new Uint8Array(this._buffer, this.byteOffset + this.position, t);
            return (this.position += 1 * t), e;
        }),
        (l.prototype.readInt32Array = function (t, e) {
            t = null == t ? this.byteLength - this.position / 4 : t;
            var i = new Int32Array(t);
            return l.memcpy(i.buffer, 0, this.buffer, this.byteOffset + this.position, t * i.BYTES_PER_ELEMENT), l.arrayToNative(i, null == e ? this.endianness : e), (this.position += i.byteLength), i;
        }),
        (l.prototype.readInt16Array = function (t, e) {
            t = null == t ? this.byteLength - this.position / 2 : t;
            var i = new Int16Array(t);
            return l.memcpy(i.buffer, 0, this.buffer, this.byteOffset + this.position, t * i.BYTES_PER_ELEMENT), l.arrayToNative(i, null == e ? this.endianness : e), (this.position += i.byteLength), i;
        }),
        (l.prototype.readInt8Array = function (t) {
            t = null == t ? this.byteLength - this.position : t;
            var e = new Int8Array(t);
            return l.memcpy(e.buffer, 0, this.buffer, this.byteOffset + this.position, t * e.BYTES_PER_ELEMENT), (this.position += e.byteLength), e;
        }),
        (l.prototype.readUint32Array = function (t, e) {
            t = null == t ? this.byteLength - this.position / 4 : t;
            var i = new Uint32Array(t);
            return l.memcpy(i.buffer, 0, this.buffer, this.byteOffset + this.position, t * i.BYTES_PER_ELEMENT), l.arrayToNative(i, null == e ? this.endianness : e), (this.position += i.byteLength), i;
        }),
        (l.prototype.readUint16Array = function (t, e) {
            t = null == t ? this.byteLength - this.position / 2 : t;
            var i = new Uint16Array(t);
            return l.memcpy(i.buffer, 0, this.buffer, this.byteOffset + this.position, t * i.BYTES_PER_ELEMENT), l.arrayToNative(i, null == e ? this.endianness : e), (this.position += i.byteLength), i;
        }),
        (l.prototype.readUint8Array = function (t) {
            t = null == t ? this.byteLength - this.position : t;
            var e = new Uint8Array(t);
            return l.memcpy(e.buffer, 0, this.buffer, this.byteOffset + this.position, t * e.BYTES_PER_ELEMENT), (this.position += e.byteLength), e;
        }),
        (l.prototype.readFloat64Array = function (t, e) {
            t = null == t ? this.byteLength - this.position / 8 : t;
            var i = new Float64Array(t);
            return l.memcpy(i.buffer, 0, this.buffer, this.byteOffset + this.position, t * i.BYTES_PER_ELEMENT), l.arrayToNative(i, null == e ? this.endianness : e), (this.position += i.byteLength), i;
        }),
        (l.prototype.readFloat32Array = function (t, e) {
            t = null == t ? this.byteLength - this.position / 4 : t;
            var i = new Float32Array(t);
            return l.memcpy(i.buffer, 0, this.buffer, this.byteOffset + this.position, t * i.BYTES_PER_ELEMENT), l.arrayToNative(i, null == e ? this.endianness : e), (this.position += i.byteLength), i;
        }),
        (l.prototype.readInt32 = function (t) {
            var e = this._dataView.getInt32(this.position, null == t ? this.endianness : t);
            return (this.position += 4), e;
        }),
        (l.prototype.readInt16 = function (t) {
            var e = this._dataView.getInt16(this.position, null == t ? this.endianness : t);
            return (this.position += 2), e;
        }),
        (l.prototype.readInt8 = function () {
            var t = this._dataView.getInt8(this.position);
            return (this.position += 1), t;
        }),
        (l.prototype.readUint32 = function (t) {
            var e = this._dataView.getUint32(this.position, null == t ? this.endianness : t);
            return (this.position += 4), e;
        }),
        (l.prototype.readUint16 = function (t) {
            var e = this._dataView.getUint16(this.position, null == t ? this.endianness : t);
            return (this.position += 2), e;
        }),
        (l.prototype.readUint8 = function () {
            var t = this._dataView.getUint8(this.position);
            return (this.position += 1), t;
        }),
        (l.prototype.readFloat32 = function (t) {
            var e = this._dataView.getFloat32(this.position, null == t ? this.endianness : t);
            return (this.position += 4), e;
        }),
        (l.prototype.readFloat64 = function (t) {
            var e = this._dataView.getFloat64(this.position, null == t ? this.endianness : t);
            return (this.position += 8), e;
        }),
        (l.endianness = new Int8Array(new Int16Array([1]).buffer)[0] > 0),
        (l.memcpy = function (t, e, i, s, r) {
            var n = new Uint8Array(t, e, r),
                a = new Uint8Array(i, s, r);
            n.set(a);
        }),
        (l.arrayToNative = function (t, e) {
            return e == this.endianness ? t : this.flipArrayEndianness(t);
        }),
        (l.nativeToEndian = function (t, e) {
            return this.endianness == e ? t : this.flipArrayEndianness(t);
        }),
        (l.flipArrayEndianness = function (t) {
            for (var e = new Uint8Array(t.buffer, t.byteOffset, t.byteLength), i = 0; i < t.byteLength; i += t.BYTES_PER_ELEMENT)
                for (var s = i + t.BYTES_PER_ELEMENT - 1, r = i; s > r; s--, r++) {
                    var n = e[r];
                    (e[r] = e[s]), (e[s] = n);
                }
            return t;
        }),
        (l.prototype.failurePosition = 0),
        (String.fromCharCodeUint8 = function (t) {
            for (var e = [], i = 0; i < t.length; i++) e[i] = t[i];
            return String.fromCharCode.apply(null, e);
        }),
        (l.prototype.readString = function (t, e) {
            return null == e || "ASCII" == e ? String.fromCharCodeUint8.apply(null, [this.mapUint8Array(null == t ? this.byteLength - this.position : t)]) : new TextDecoder(e).decode(this.mapUint8Array(t));
        }),
        (l.prototype.readCString = function (t) {
            var e = this.byteLength - this.position,
                i = new Uint8Array(this._buffer, this._byteOffset + this.position),
                s = e;
            null != t && (s = Math.min(t, e));
            for (var r = 0; r < s && 0 !== i[r]; r++);
            var n = String.fromCharCodeUint8.apply(null, [this.mapUint8Array(r)]);
            return null != t ? (this.position += s - r) : r != e && (this.position += 1), n;
        }),
        (l.prototype.readInt64 = function () {
            return 4294967296 * this.readInt32() + this.readUint32();
        }),
        (l.prototype.readUint64 = function () {
            return 4294967296 * this.readUint32() + this.readUint32();
        }),
        (l.prototype.readInt64 = function () {
            return 4294967296 * this.readUint32() + this.readUint32();
        }),
        (l.prototype.readUint24 = function () {
            return (this.readUint8() << 16) + (this.readUint8() << 8) + this.readUint8();
        }),
        (r.DataStream = l),
        (l.prototype.save = function (t) {
            var e = new Blob([this.buffer]);
            if (!window.URL || !URL.createObjectURL) throw "DataStream.save: Can't create object URL.";
            var i = window.URL.createObjectURL(e),
                s = document.createElement("a");
            document.body.appendChild(s), s.setAttribute("href", i), s.setAttribute("download", t), s.setAttribute("target", "_self"), s.click(), window.URL.revokeObjectURL(i);
        }),
        (l.prototype._dynamicSize = !0),
        Object.defineProperty(l.prototype, "dynamicSize", {
            get: function () {
                return this._dynamicSize;
            },
            set: function (t) {
                t || this._trimAlloc(), (this._dynamicSize = t);
            },
        }),
        (l.prototype.shift = function (t) {
            var e = new ArrayBuffer(this._byteLength - t),
                i = new Uint8Array(e),
                s = new Uint8Array(this._buffer, t, i.length);
            i.set(s), (this.buffer = e), (this.position -= t);
        }),
        (l.prototype.writeInt32Array = function (t, e) {
            if ((this._realloc(4 * t.length), t instanceof Int32Array && this.byteOffset + (this.position % t.BYTES_PER_ELEMENT) === 0))
                l.memcpy(this._buffer, this.byteOffset + this.position, t.buffer, 0, t.byteLength), this.mapInt32Array(t.length, e);
            else for (var i = 0; i < t.length; i++) this.writeInt32(t[i], e);
        }),
        (l.prototype.writeInt16Array = function (t, e) {
            if ((this._realloc(2 * t.length), t instanceof Int16Array && this.byteOffset + (this.position % t.BYTES_PER_ELEMENT) === 0))
                l.memcpy(this._buffer, this.byteOffset + this.position, t.buffer, 0, t.byteLength), this.mapInt16Array(t.length, e);
            else for (var i = 0; i < t.length; i++) this.writeInt16(t[i], e);
        }),
        (l.prototype.writeInt8Array = function (t) {
            if ((this._realloc(1 * t.length), t instanceof Int8Array && this.byteOffset + (this.position % t.BYTES_PER_ELEMENT) === 0))
                l.memcpy(this._buffer, this.byteOffset + this.position, t.buffer, 0, t.byteLength), this.mapInt8Array(t.length);
            else for (var e = 0; e < t.length; e++) this.writeInt8(t[e]);
        }),
        (l.prototype.writeUint32Array = function (t, e) {
            if ((this._realloc(4 * t.length), t instanceof Uint32Array && this.byteOffset + (this.position % t.BYTES_PER_ELEMENT) === 0))
                l.memcpy(this._buffer, this.byteOffset + this.position, t.buffer, 0, t.byteLength), this.mapUint32Array(t.length, e);
            else for (var i = 0; i < t.length; i++) this.writeUint32(t[i], e);
        }),
        (l.prototype.writeUint16Array = function (t, e) {
            if ((this._realloc(2 * t.length), t instanceof Uint16Array && this.byteOffset + (this.position % t.BYTES_PER_ELEMENT) === 0))
                l.memcpy(this._buffer, this.byteOffset + this.position, t.buffer, 0, t.byteLength), this.mapUint16Array(t.length, e);
            else for (var i = 0; i < t.length; i++) this.writeUint16(t[i], e);
        }),
        (l.prototype.writeUint8Array = function (t) {
            if ((this._realloc(1 * t.length), t instanceof Uint8Array && this.byteOffset + (this.position % t.BYTES_PER_ELEMENT) === 0))
                l.memcpy(this._buffer, this.byteOffset + this.position, t.buffer, 0, t.byteLength), this.mapUint8Array(t.length);
            else for (var e = 0; e < t.length; e++) this.writeUint8(t[e]);
        }),
        (l.prototype.writeFloat64Array = function (t, e) {
            if ((this._realloc(8 * t.length), t instanceof Float64Array && this.byteOffset + (this.position % t.BYTES_PER_ELEMENT) === 0))
                l.memcpy(this._buffer, this.byteOffset + this.position, t.buffer, 0, t.byteLength), this.mapFloat64Array(t.length, e);
            else for (var i = 0; i < t.length; i++) this.writeFloat64(t[i], e);
        }),
        (l.prototype.writeFloat32Array = function (t, e) {
            if ((this._realloc(4 * t.length), t instanceof Float32Array && this.byteOffset + (this.position % t.BYTES_PER_ELEMENT) === 0))
                l.memcpy(this._buffer, this.byteOffset + this.position, t.buffer, 0, t.byteLength), this.mapFloat32Array(t.length, e);
            else for (var i = 0; i < t.length; i++) this.writeFloat32(t[i], e);
        }),
        (l.prototype.writeInt32 = function (t, e) {
            this._realloc(4), this._dataView.setInt32(this.position, t, null == e ? this.endianness : e), (this.position += 4);
        }),
        (l.prototype.writeInt16 = function (t, e) {
            this._realloc(2), this._dataView.setInt16(this.position, t, null == e ? this.endianness : e), (this.position += 2);
        }),
        (l.prototype.writeInt8 = function (t) {
            this._realloc(1), this._dataView.setInt8(this.position, t), (this.position += 1);
        }),
        (l.prototype.writeUint32 = function (t, e) {
            this._realloc(4), this._dataView.setUint32(this.position, t, null == e ? this.endianness : e), (this.position += 4);
        }),
        (l.prototype.writeUint16 = function (t, e) {
            this._realloc(2), this._dataView.setUint16(this.position, t, null == e ? this.endianness : e), (this.position += 2);
        }),
        (l.prototype.writeUint8 = function (t) {
            this._realloc(1), this._dataView.setUint8(this.position, t), (this.position += 1);
        }),
        (l.prototype.writeFloat32 = function (t, e) {
            this._realloc(4), this._dataView.setFloat32(this.position, t, null == e ? this.endianness : e), (this.position += 4);
        }),
        (l.prototype.writeFloat64 = function (t, e) {
            this._realloc(8), this._dataView.setFloat64(this.position, t, null == e ? this.endianness : e), (this.position += 8);
        }),
        (l.prototype.writeUCS2String = function (t, e, i) {
            null == i && (i = t.length);
            for (var s = 0; s < t.length && s < i; s++) this.writeUint16(t.charCodeAt(s), e);
            for (; s < i; s++) this.writeUint16(0);
        }),
        (l.prototype.writeString = function (t, e, i) {
            var s = 0;
            if (null == e || "ASCII" == e) {
                if (null != i) {
                    var r = Math.min(t.length, i);
                    for (s = 0; s < r; s++) this.writeUint8(t.charCodeAt(s));
                    for (; s < i; s++) this.writeUint8(0);
                } else for (s = 0; s < t.length; s++) this.writeUint8(t.charCodeAt(s));
            } else this.writeUint8Array(new TextEncoder(e).encode(t.substring(0, i)));
        }),
        (l.prototype.writeCString = function (t, e) {
            var i = 0;
            if (null != e) {
                var s = Math.min(t.length, e);
                for (i = 0; i < s; i++) this.writeUint8(t.charCodeAt(i));
                for (; i < e; i++) this.writeUint8(0);
            } else {
                for (i = 0; i < t.length; i++) this.writeUint8(t.charCodeAt(i));
                this.writeUint8(0);
            }
        }),
        (l.prototype.writeStruct = function (t, e) {
            for (var i = 0; i < t.length; i += 2) {
                var s = t[i + 1];
                this.writeType(s, e[t[i]], e);
            }
        }),
        (l.prototype.writeType = function (t, e, i) {
            if ("function" == typeof t) return t(this, e);
            if ("object" == typeof t && !(t instanceof Array)) return t.set(this, e, i);
            var s,
                r = null,
                n = "ASCII",
                a = this.position;
            switch (("string" == typeof t && /:/.test(t) && ((t = (s = t.split(":"))[0]), (r = parseInt(s[1]))), "string" == typeof t && /,/.test(t) && ((t = (s = t.split(","))[0]), (n = parseInt(s[1]))), t)) {
                case "uint8":
                    this.writeUint8(e);
                    break;
                case "int8":
                    this.writeInt8(e);
                    break;
                case "uint16":
                    this.writeUint16(e, this.endianness);
                    break;
                case "int16":
                    this.writeInt16(e, this.endianness);
                    break;
                case "uint32":
                    this.writeUint32(e, this.endianness);
                    break;
                case "int32":
                    this.writeInt32(e, this.endianness);
                    break;
                case "float32":
                    this.writeFloat32(e, this.endianness);
                    break;
                case "float64":
                    this.writeFloat64(e, this.endianness);
                    break;
                case "uint16be":
                    this.writeUint16(e, l.BIG_ENDIAN);
                    break;
                case "int16be":
                    this.writeInt16(e, l.BIG_ENDIAN);
                    break;
                case "uint32be":
                    this.writeUint32(e, l.BIG_ENDIAN);
                    break;
                case "int32be":
                    this.writeInt32(e, l.BIG_ENDIAN);
                    break;
                case "float32be":
                    this.writeFloat32(e, l.BIG_ENDIAN);
                    break;
                case "float64be":
                    this.writeFloat64(e, l.BIG_ENDIAN);
                    break;
                case "uint16le":
                    this.writeUint16(e, l.LITTLE_ENDIAN);
                    break;
                case "int16le":
                    this.writeInt16(e, l.LITTLE_ENDIAN);
                    break;
                case "uint32le":
                    this.writeUint32(e, l.LITTLE_ENDIAN);
                    break;
                case "int32le":
                    this.writeInt32(e, l.LITTLE_ENDIAN);
                    break;
                case "float32le":
                    this.writeFloat32(e, l.LITTLE_ENDIAN);
                    break;
                case "float64le":
                    this.writeFloat64(e, l.LITTLE_ENDIAN);
                    break;
                case "cstring":
                    this.writeCString(e, r);
                    break;
                case "string":
                    this.writeString(e, n, r);
                    break;
                case "u16string":
                    this.writeUCS2String(e, this.endianness, r);
                    break;
                case "u16stringle":
                    this.writeUCS2String(e, l.LITTLE_ENDIAN, r);
                    break;
                case "u16stringbe":
                    this.writeUCS2String(e, l.BIG_ENDIAN, r);
                    break;
                default:
                    if (3 == t.length) {
                        for (var o = t[1], h = 0; h < e.length; h++) this.writeType(o, e[h]);
                        break;
                    }
                    this.writeStruct(t, e);
            }
            null != r && ((this.position = a), this._realloc(r), (this.position = a + r));
        }),
        (l.prototype.writeUint64 = function (t) {
            this.writeUint32(Math.floor(t / 4294967296)), this.writeUint32(4294967295 & t);
        }),
        (l.prototype.writeUint24 = function (t) {
            this.writeUint8((16711680 & t) >> 16), this.writeUint8((65280 & t) >> 8), this.writeUint8(255 & t);
        }),
        (l.prototype.adjustUint32 = function (t, e) {
            var i = this.position;
            this.seek(t), this.writeUint32(e), this.seek(i);
        }),
        (l.prototype.mapInt32Array = function (t, e) {
            this._realloc(4 * t);
            var i = new Int32Array(this._buffer, this.byteOffset + this.position, t);
            return l.arrayToNative(i, null == e ? this.endianness : e), (this.position += 4 * t), i;
        }),
        (l.prototype.mapInt16Array = function (t, e) {
            this._realloc(2 * t);
            var i = new Int16Array(this._buffer, this.byteOffset + this.position, t);
            return l.arrayToNative(i, null == e ? this.endianness : e), (this.position += 2 * t), i;
        }),
        (l.prototype.mapInt8Array = function (t) {
            this._realloc(1 * t);
            var e = new Int8Array(this._buffer, this.byteOffset + this.position, t);
            return (this.position += 1 * t), e;
        }),
        (l.prototype.mapUint32Array = function (t, e) {
            this._realloc(4 * t);
            var i = new Uint32Array(this._buffer, this.byteOffset + this.position, t);
            return l.arrayToNative(i, null == e ? this.endianness : e), (this.position += 4 * t), i;
        }),
        (l.prototype.mapUint16Array = function (t, e) {
            this._realloc(2 * t);
            var i = new Uint16Array(this._buffer, this.byteOffset + this.position, t);
            return l.arrayToNative(i, null == e ? this.endianness : e), (this.position += 2 * t), i;
        }),
        (l.prototype.mapFloat64Array = function (t, e) {
            this._realloc(8 * t);
            var i = new Float64Array(this._buffer, this.byteOffset + this.position, t);
            return l.arrayToNative(i, null == e ? this.endianness : e), (this.position += 8 * t), i;
        }),
        (l.prototype.mapFloat32Array = function (t, e) {
            this._realloc(4 * t);
            var i = new Float32Array(this._buffer, this.byteOffset + this.position, t);
            return l.arrayToNative(i, null == e ? this.endianness : e), (this.position += 4 * t), i;
        }),
        (((p = function (t) {
            (this.buffers = []), (this.bufferIndex = -1), t && (this.insertBuffer(t), (this.bufferIndex = 0));
        }).prototype = new l(new ArrayBuffer(), 0, l.BIG_ENDIAN)).initialized = function () {
            var t;
            return (
                this.bufferIndex > -1 ||
                (this.buffers.length > 0
                    ? 0 === (t = this.buffers[0]).fileStart
                        ? ((this.buffer = t), (this.bufferIndex = 0), h.debug("MultiBufferStream", "Stream ready for parsing"), !0)
                        : (h.warn("MultiBufferStream", "The first buffer should have a fileStart of 0"), this.logBufferLevel(), !1)
                    : (h.warn("MultiBufferStream", "No buffer to start parsing from"), this.logBufferLevel(), !1))
            );
        }),
        (ArrayBuffer.concat = function (t, e) {
            h.debug("ArrayBuffer", "Trying to create a new buffer of size: " + (t.byteLength + e.byteLength));
            var i = new Uint8Array(t.byteLength + e.byteLength);
            return i.set(new Uint8Array(t), 0), i.set(new Uint8Array(e), t.byteLength), i.buffer;
        }),
        (p.prototype.reduceBuffer = function (t, e, i) {
            var s;
            return (s = new Uint8Array(i)).set(new Uint8Array(t, e, i)), (s.buffer.fileStart = t.fileStart + e), (s.buffer.usedBytes = 0), s.buffer;
        }),
        (p.prototype.insertBuffer = function (t) {
            for (var e = !0, i = 0; i < this.buffers.length; i++) {
                var s = this.buffers[i];
                if (t.fileStart <= s.fileStart) {
                    if (t.fileStart === s.fileStart) {
                        if (t.byteLength > s.byteLength) {
                            this.buffers.splice(i, 1), i--;
                            continue;
                        }
                        h.warn("MultiBufferStream", "Buffer (fileStart: " + t.fileStart + " - Length: " + t.byteLength + ") already appended, ignoring");
                    } else
                        t.fileStart + t.byteLength <= s.fileStart || (t = this.reduceBuffer(t, 0, s.fileStart - t.fileStart)),
                            h.debug("MultiBufferStream", "Appending new buffer (fileStart: " + t.fileStart + " - Length: " + t.byteLength + ")"),
                            this.buffers.splice(i, 0, t),
                            0 === i && (this.buffer = t);
                    e = !1;
                    break;
                }
                if (t.fileStart < s.fileStart + s.byteLength) {
                    var r = s.fileStart + s.byteLength - t.fileStart,
                        n = t.byteLength - r;
                    if (!(n > 0)) {
                        e = !1;
                        break;
                    }
                    t = this.reduceBuffer(t, r, n);
                }
            }
            e && (h.debug("MultiBufferStream", "Appending new buffer (fileStart: " + t.fileStart + " - Length: " + t.byteLength + ")"), this.buffers.push(t), 0 === i && (this.buffer = t));
        }),
        (p.prototype.logBufferLevel = function (t) {
            var e,
                i,
                s,
                r,
                n,
                a,
                o = [],
                d = "";
            for (r = 0, n = 0, i = 0; i < this.buffers.length; i++)
                (s = this.buffers[i]),
                    0 === i
                        ? (o.push((a = {})), (a.start = s.fileStart), (a.end = s.fileStart + s.byteLength), (d += "[" + a.start + "-"))
                        : a.end === s.fileStart
                            ? (a.end = s.fileStart + s.byteLength)
                            : (((a = {}).start = s.fileStart), (d += o[o.length - 1].end - 1 + "], [" + a.start + "-"), (a.end = s.fileStart + s.byteLength), o.push(a)),
                    (r += s.usedBytes),
                    (n += s.byteLength);
            o.length > 0 && (d += a.end - 1 + "]"),
                (t ? h.info : h.debug)("MultiBufferStream", 0 === this.buffers.length ? "No more buffer in memory" : this.buffers.length + " stored buffer(s) (" + r + "/" + n + " bytes), continuous ranges: " + d);
        }),
        (p.prototype.cleanBuffers = function () {
            var t, e;
            for (t = 0; t < this.buffers.length; t++) (e = this.buffers[t]).usedBytes === e.byteLength && (h.debug("MultiBufferStream", "Removing buffer #" + t), this.buffers.splice(t, 1), t--);
        }),
        (p.prototype.mergeNextBuffer = function () {
            var t;
            if (this.bufferIndex + 1 < this.buffers.length && (t = this.buffers[this.bufferIndex + 1]).fileStart === this.buffer.fileStart + this.buffer.byteLength) {
                var e = this.buffer.byteLength,
                    i = this.buffer.usedBytes,
                    s = this.buffer.fileStart;
                return (
                    (this.buffers[this.bufferIndex] = ArrayBuffer.concat(this.buffer, t)),
                    (this.buffer = this.buffers[this.bufferIndex]),
                    this.buffers.splice(this.bufferIndex + 1, 1),
                    (this.buffer.usedBytes = i),
                    (this.buffer.fileStart = s),
                    h.debug("ISOFile", "Concatenating buffer for box parsing (length: " + e + "->" + this.buffer.byteLength + ")"),
                    !0
                );
            }
            return !1;
        }),
        (p.prototype.findPosition = function (t, e, i) {
            var s,
                r = null,
                n = -1;
            for (s = !0 === t ? 0 : this.bufferIndex; s < this.buffers.length && (r = this.buffers[s]).fileStart <= e;)
                (n = s), i && (r.fileStart + r.byteLength <= e ? (r.usedBytes = r.byteLength) : (r.usedBytes = e - r.fileStart), this.logBufferLevel()), s++;
            return -1 !== n && (r = this.buffers[n]).fileStart + r.byteLength >= e ? (h.debug("MultiBufferStream", "Found position in existing buffer #" + n), n) : -1;
        }),
        (p.prototype.findEndContiguousBuf = function (t) {
            var e,
                i,
                s,
                r = void 0 !== t ? t : this.bufferIndex;
            if (((i = this.buffers[r]), this.buffers.length > r + 1)) for (e = r + 1; e < this.buffers.length && (s = this.buffers[e]).fileStart === i.fileStart + i.byteLength; e++) i = s;
            return i.fileStart + i.byteLength;
        }),
        (p.prototype.getEndFilePositionAfter = function (t) {
            var e = this.findPosition(!0, t, !1);
            return -1 !== e ? this.findEndContiguousBuf(e) : t;
        }),
        (p.prototype.addUsedBytes = function (t) {
            (this.buffer.usedBytes += t), this.logBufferLevel();
        }),
        (p.prototype.setAllUsedBytes = function () {
            (this.buffer.usedBytes = this.buffer.byteLength), this.logBufferLevel();
        }),
        (p.prototype.seek = function (t, e, i) {
            var s;
            return -1 !== (s = this.findPosition(e, t, i))
                ? ((this.buffer = this.buffers[s]), (this.bufferIndex = s), (this.position = t - this.buffer.fileStart), h.debug("MultiBufferStream", "Repositioning parser at buffer position: " + this.position), !0)
                : (h.debug("MultiBufferStream", "Position " + t + " not found in buffered data"), !1);
        }),
        (p.prototype.getPosition = function () {
            if (-1 === this.bufferIndex || null === this.buffers[this.bufferIndex]) throw "Error accessing position in the MultiBufferStream";
            return this.buffers[this.bufferIndex].fileStart + this.position;
        }),
        (p.prototype.getLength = function () {
            return this.byteLength;
        }),
        (p.prototype.getEndPosition = function () {
            if (-1 === this.bufferIndex || null === this.buffers[this.bufferIndex]) throw "Error accessing position in the MultiBufferStream";
            return this.buffers[this.bufferIndex].fileStart + this.byteLength;
        }),
        (r.MultiBufferStream = p),
        (f = function () {
            var t = [];
            (t[3] = "ES_Descriptor"),
                (t[4] = "DecoderConfigDescriptor"),
                (t[5] = "DecoderSpecificInfo"),
                (t[6] = "SLConfigDescriptor"),
                (this.getDescriptorName = function (e) {
                    return t[e];
                });
            var e = this,
                i = {};
            return (
                (this.parseOneDescriptor = function (e) {
                    var s,
                        r,
                        n,
                        a = 0;
                    for (s = e.readUint8(), n = e.readUint8(); 128 & n;) (a = (127 & n) << 7), (n = e.readUint8());
                    return (a += 127 & n), h.debug("MPEG4DescriptorParser", "Found " + (t[s] || "Descriptor " + s) + ", size " + a + " at position " + e.getPosition()), (r = t[s] ? new i[t[s]](a) : new i.Descriptor(a)).parse(e), r;
                }),
                (i.Descriptor = function (t, e) {
                    (this.tag = t), (this.size = e), (this.descs = []);
                }),
                (i.Descriptor.prototype.parse = function (t) {
                    this.data = t.readUint8Array(this.size);
                }),
                (i.Descriptor.prototype.findDescriptor = function (t) {
                    for (var e = 0; e < this.descs.length; e++) if (this.descs[e].tag == t) return this.descs[e];
                    return null;
                }),
                (i.Descriptor.prototype.parseRemainingDescriptors = function (t) {
                    for (var i = t.position; t.position < i + this.size;) {
                        var s = e.parseOneDescriptor(t);
                        this.descs.push(s);
                    }
                }),
                (i.ES_Descriptor = function (t) {
                    i.Descriptor.call(this, 3, t);
                }),
                (i.ES_Descriptor.prototype = new i.Descriptor()),
                (i.ES_Descriptor.prototype.parse = function (t) {
                    if (((this.ES_ID = t.readUint16()), (this.flags = t.readUint8()), (this.size -= 3), 128 & this.flags ? ((this.dependsOn_ES_ID = t.readUint16()), (this.size -= 2)) : (this.dependsOn_ES_ID = 0), 64 & this.flags)) {
                        var e = t.readUint8();
                        (this.URL = t.readString(e)), (this.size -= e + 1);
                    } else this.URL = "";
                    32 & this.flags ? ((this.OCR_ES_ID = t.readUint16()), (this.size -= 2)) : (this.OCR_ES_ID = 0), this.parseRemainingDescriptors(t);
                }),
                (i.ES_Descriptor.prototype.getOTI = function (t) {
                    var e = this.findDescriptor(4);
                    return e ? e.oti : 0;
                }),
                (i.ES_Descriptor.prototype.getAudioConfig = function (t) {
                    var e = this.findDescriptor(4);
                    if (!e) return null;
                    var i = e.findDescriptor(5);
                    if (i && i.data) {
                        var s = (248 & i.data[0]) >> 3;
                        return 31 === s && i.data.length >= 2 && (s = 32 + ((7 & i.data[0]) << 3) + ((224 & i.data[1]) >> 5)), s;
                    }
                    return null;
                }),
                (i.DecoderConfigDescriptor = function (t) {
                    i.Descriptor.call(this, 4, t);
                }),
                (i.DecoderConfigDescriptor.prototype = new i.Descriptor()),
                (i.DecoderConfigDescriptor.prototype.parse = function (t) {
                    (this.oti = t.readUint8()),
                        (this.streamType = t.readUint8()),
                        (this.bufferSize = t.readUint24()),
                        (this.maxBitrate = t.readUint32()),
                        (this.avgBitrate = t.readUint32()),
                        (this.size -= 13),
                        this.parseRemainingDescriptors(t);
                }),
                (i.DecoderSpecificInfo = function (t) {
                    i.Descriptor.call(this, 5, t);
                }),
                (i.DecoderSpecificInfo.prototype = new i.Descriptor()),
                (i.SLConfigDescriptor = function (t) {
                    i.Descriptor.call(this, 6, t);
                }),
                (i.SLConfigDescriptor.prototype = new i.Descriptor()),
                this
            );
        }),
        (r.MPEG4DescriptorParser = f),
        (u = {
            ERR_INVALID_DATA: -1,
            ERR_NOT_ENOUGH_DATA: 0,
            OK: 1,
            BASIC_BOXES: ["mdat", "idat", "free", "skip", "meco", "strk"],
            FULL_BOXES: ["hmhd", "nmhd", "iods", "xml ", "bxml", "ipro", "mere"],
            CONTAINER_BOXES: [
                ["moov", ["trak", "pssh"]],
                ["trak"],
                ["edts"],
                ["mdia"],
                ["minf"],
                ["dinf"],
                ["stbl", ["sgpd", "sbgp"]],
                ["mvex", ["trex"]],
                ["moof", ["traf"]],
                ["traf", ["trun", "sgpd", "sbgp"]],
                ["vttc"],
                ["tref"],
                ["iref"],
                ["mfra", ["tfra"]],
                ["meco"],
                ["hnti"],
                ["hinf"],
                ["strk"],
                ["strd"],
                ["sinf"],
                ["rinf"],
                ["schi"],
                ["trgr"],
                ["udta", ["kind"]],
                ["iprp", ["ipma"]],
                ["ipco"],
            ],
            boxCodes: [],
            fullBoxCodes: [],
            containerBoxCodes: [],
            sampleEntryCodes: {},
            sampleGroupEntryCodes: [],
            trackGroupTypes: [],
            UUIDBoxes: {},
            UUIDs: [],
            initialize: function () {
                (u.FullBox.prototype = new u.Box()),
                    (u.ContainerBox.prototype = new u.Box()),
                    (u.SampleEntry.prototype = new u.Box()),
                    (u.TrackGroupTypeBox.prototype = new u.FullBox()),
                    u.BASIC_BOXES.forEach(function (t) {
                        u.createBoxCtor(t);
                    }),
                    u.FULL_BOXES.forEach(function (t) {
                        u.createFullBoxCtor(t);
                    }),
                    u.CONTAINER_BOXES.forEach(function (t) {
                        u.createContainerBoxCtor(t[0], null, t[1]);
                    });
            },
            Box: function (t, e, i) {
                (this.type = t), (this.size = e), (this.uuid = i);
            },
            FullBox: function (t, e, i) {
                u.Box.call(this, t, e, i), (this.flags = 0), (this.version = 0);
            },
            ContainerBox: function (t, e, i) {
                u.Box.call(this, t, e, i), (this.boxes = []);
            },
            SampleEntry: function (t, e, i, s) {
                u.ContainerBox.call(this, t, e), (this.hdr_size = i), (this.start = s);
            },
            SampleGroupEntry: function (t) {
                this.grouping_type = t;
            },
            TrackGroupTypeBox: function (t, e) {
                u.FullBox.call(this, t, e);
            },
            createBoxCtor: function (t, e) {
                u.boxCodes.push(t),
                    (u[t + "Box"] = function (e) {
                        u.Box.call(this, t, e);
                    }),
                    (u[t + "Box"].prototype = new u.Box()),
                    e && (u[t + "Box"].prototype.parse = e);
            },
            createFullBoxCtor: function (t, e) {
                (u[t + "Box"] = function (e) {
                    u.FullBox.call(this, t, e);
                }),
                    (u[t + "Box"].prototype = new u.FullBox()),
                    (u[t + "Box"].prototype.parse = function (t) {
                        this.parseFullHeader(t), e && e.call(this, t);
                    });
            },
            addSubBoxArrays: function (t) {
                if (t) {
                    this.subBoxNames = t;
                    for (var e = t.length, i = 0; i < e; i++) this[t[i] + "s"] = [];
                }
            },
            createContainerBoxCtor: function (t, e, i) {
                (u[t + "Box"] = function (e) {
                    u.ContainerBox.call(this, t, e), u.addSubBoxArrays.call(this, i);
                }),
                    (u[t + "Box"].prototype = new u.ContainerBox()),
                    e && (u[t + "Box"].prototype.parse = e);
            },
            createMediaSampleEntryCtor: function (t, e, i) {
                (u.sampleEntryCodes[t] = []),
                    (u[t + "SampleEntry"] = function (t, e) {
                        u.SampleEntry.call(this, t, e), u.addSubBoxArrays.call(this, i);
                    }),
                    (u[t + "SampleEntry"].prototype = new u.SampleEntry()),
                    e && (u[t + "SampleEntry"].prototype.parse = e);
            },
            createSampleEntryCtor: function (t, e, i, s) {
                u.sampleEntryCodes[t].push(e),
                    (u[e + "SampleEntry"] = function (i) {
                        u[t + "SampleEntry"].call(this, e, i), u.addSubBoxArrays.call(this, s);
                    }),
                    (u[e + "SampleEntry"].prototype = new u[t + "SampleEntry"]()),
                    i && (u[e + "SampleEntry"].prototype.parse = i);
            },
            createEncryptedSampleEntryCtor: function (t, e, i) {
                u.createSampleEntryCtor.call(this, t, e, i, ["sinf"]);
            },
            createSampleGroupCtor: function (t, e) {
                (u[t + "SampleGroupEntry"] = function (e) {
                    u.SampleGroupEntry.call(this, t, e);
                }),
                    (u[t + "SampleGroupEntry"].prototype = new u.SampleGroupEntry()),
                    e && (u[t + "SampleGroupEntry"].prototype.parse = e);
            },
            createTrackGroupCtor: function (t, e) {
                (u[t + "TrackGroupTypeBox"] = function (e) {
                    u.TrackGroupTypeBox.call(this, t, e);
                }),
                    (u[t + "TrackGroupTypeBox"].prototype = new u.TrackGroupTypeBox()),
                    e && (u[t + "TrackGroupTypeBox"].prototype.parse = e);
            },
            createUUIDBox: function (t, e, i, s) {
                u.UUIDs.push(t),
                    (u.UUIDBoxes[t] = function (s) {
                        e ? u.FullBox.call(this, "uuid", s, t) : i ? u.ContainerBox.call(this, "uuid", s, t) : u.Box.call(this, "uuid", s, t);
                    }),
                    (u.UUIDBoxes[t].prototype = e ? new u.FullBox() : i ? new u.ContainerBox() : new u.Box()),
                    s &&
                    (u.UUIDBoxes[t].prototype.parse = e
                        ? function (t) {
                            this.parseFullHeader(t), s && s.call(this, t);
                        }
                        : s);
            },
        }).initialize(),
        (u.TKHD_FLAG_ENABLED = 1),
        (u.TKHD_FLAG_IN_MOVIE = 2),
        (u.TKHD_FLAG_IN_PREVIEW = 4),
        (u.TFHD_FLAG_BASE_DATA_OFFSET = 1),
        (u.TFHD_FLAG_SAMPLE_DESC = 2),
        (u.TFHD_FLAG_SAMPLE_DUR = 8),
        (u.TFHD_FLAG_SAMPLE_SIZE = 16),
        (u.TFHD_FLAG_SAMPLE_FLAGS = 32),
        (u.TFHD_FLAG_DUR_EMPTY = 65536),
        (u.TFHD_FLAG_DEFAULT_BASE_IS_MOOF = 131072),
        (u.TRUN_FLAGS_DATA_OFFSET = 1),
        (u.TRUN_FLAGS_FIRST_FLAG = 4),
        (u.TRUN_FLAGS_DURATION = 256),
        (u.TRUN_FLAGS_SIZE = 512),
        (u.TRUN_FLAGS_FLAGS = 1024),
        (u.TRUN_FLAGS_CTS_OFFSET = 2048),
        (u.Box.prototype.add = function (t) {
            return this.addBox(new u[t + "Box"]());
        }),
        (u.Box.prototype.addBox = function (t) {
            return this.boxes.push(t), this[t.type + "s"] ? this[t.type + "s"].push(t) : (this[t.type] = t), t;
        }),
        (u.Box.prototype.set = function (t, e) {
            return (this[t] = e), this;
        }),
        (u.Box.prototype.addEntry = function (t, e) {
            var i = e || "entries";
            return this[i] || (this[i] = []), this[i].push(t), this;
        }),
        (r.BoxParser = u),
        (u.parseUUID = function (t) {
            return u.parseHex16(t);
        }),
        (u.parseHex16 = function (t) {
            for (var e = "", i = 0; i < 16; i++) {
                var s = t.readUint8().toString(16);
                e += 1 === s.length ? "0" + s : s;
            }
            return e;
        }),
        (u.parseOneBox = function (t, e, i) {
            var s,
                r,
                n,
                a = t.getPosition(),
                o = 0;
            if (t.getEndPosition() - a < 8) return h.debug("BoxParser", "Not enough data in stream to parse the type and size of the box"), { code: u.ERR_NOT_ENOUGH_DATA };
            if (i && i < 8) return h.debug("BoxParser", "Not enough bytes left in the parent box to parse a new box"), { code: u.ERR_NOT_ENOUGH_DATA };
            var d = t.readUint32(),
                l = t.readString(4),
                p = l;
            if ((h.debug("BoxParser", "Found box of type '" + l + "' and size " + d + " at position " + a), (o = 8), "uuid" == l)) {
                if (t.getEndPosition() - t.getPosition() < 16 || i - o < 16) return t.seek(a), h.debug("BoxParser", "Not enough bytes left in the parent box to parse a UUID box"), { code: u.ERR_NOT_ENOUGH_DATA };
                (o += 16), (p = n = u.parseUUID(t));
            }
            if (1 == d) {
                if (t.getEndPosition() - t.getPosition() < 8 || (i && i - o < 8)) return t.seek(a), h.warn("BoxParser", 'Not enough data in stream to parse the extended size of the "' + l + '" box'), { code: u.ERR_NOT_ENOUGH_DATA };
                (d = t.readUint64()), (o += 8);
            } else if (0 === d) {
                if (i) d = i;
                else if ("mdat" !== l) return h.error("BoxParser", "Unlimited box size not supported for type: '" + l + "'"), (s = new u.Box(l, d)), { code: u.OK, box: s, size: s.size };
            }
            return d < o
                ? (h.error("BoxParser", "Box of type " + l + " has an invalid size " + d + " (too small to be a box)"), { code: u.ERR_NOT_ENOUGH_DATA, type: l, size: d, hdr_size: o, start: a })
                : i && d > i
                    ? (h.error("BoxParser", "Box of type '" + l + "' has a size " + d + " greater than its container size " + i), { code: u.ERR_NOT_ENOUGH_DATA, type: l, size: d, hdr_size: o, start: a })
                    : a + d > t.getEndPosition()
                        ? (t.seek(a), h.info("BoxParser", "Not enough data in stream to parse the entire '" + l + "' box"), { code: u.ERR_NOT_ENOUGH_DATA, type: l, size: d, hdr_size: o, start: a })
                        : e
                            ? { code: u.OK, type: l, size: d, hdr_size: o, start: a }
                            : (u[l + "Box"]
                                ? (s = new u[l + "Box"](d))
                                : "uuid" !== l
                                    ? (h.warn("BoxParser", "Unknown box type: '" + l + "'"), ((s = new u.Box(l, d)).has_unparsed_data = !0))
                                    : u.UUIDBoxes[n]
                                        ? (s = new u.UUIDBoxes[n](d))
                                        : (h.warn("BoxParser", "Unknown uuid type: '" + n + "'"), ((s = new u.Box(l, d)).uuid = n), (s.has_unparsed_data = !0)),
                                (s.hdr_size = o),
                                (s.start = a),
                                s.write === u.Box.prototype.write && "mdat" !== s.type && (h.info("BoxParser", "'" + p + "' box writing not yet implemented, keeping unparsed data in memory for later write"), s.parseDataAndRewind(t)),
                                s.parse(t),
                                (r = t.getPosition() - (s.start + s.size)) < 0
                                    ? (h.warn("BoxParser", "Parsing of box '" + p + "' did not read the entire indicated box data size (missing " + -r + " bytes), seeking forward"), t.seek(s.start + s.size))
                                    : r > 0 && (h.error("BoxParser", "Parsing of box '" + p + "' read " + r + " more bytes than the indicated box data size, seeking backwards"), t.seek(s.start + s.size)),
                                { code: u.OK, box: s, size: s.size });
        }),
        (u.Box.prototype.parse = function (t) {
            "mdat" != this.type ? (this.data = t.readUint8Array(this.size - this.hdr_size)) : 0 === this.size ? t.seek(t.getEndPosition()) : t.seek(this.start + this.size);
        }),
        (u.Box.prototype.parseDataAndRewind = function (t) {
            (this.data = t.readUint8Array(this.size - this.hdr_size)), (t.position -= this.size - this.hdr_size);
        }),
        (u.FullBox.prototype.parseDataAndRewind = function (t) {
            this.parseFullHeader(t), (this.data = t.readUint8Array(this.size - this.hdr_size)), (this.hdr_size -= 4), (t.position -= this.size - this.hdr_size);
        }),
        (u.FullBox.prototype.parseFullHeader = function (t) {
            (this.version = t.readUint8()), (this.flags = t.readUint24()), (this.hdr_size += 4);
        }),
        (u.FullBox.prototype.parse = function (t) {
            this.parseFullHeader(t), (this.data = t.readUint8Array(this.size - this.hdr_size));
        }),
        (u.ContainerBox.prototype.parse = function (t) {
            for (var e, i; t.getPosition() < this.start + this.size;) {
                if ((e = u.parseOneBox(t, !1, this.size - (t.getPosition() - this.start))).code !== u.OK) return;
                if (((i = e.box), this.boxes.push(i), this.subBoxNames && -1 != this.subBoxNames.indexOf(i.type))) this[this.subBoxNames[this.subBoxNames.indexOf(i.type)] + "s"].push(i);
                else {
                    var s = "uuid" !== i.type ? i.type : i.uuid;
                    this[s] ? h.warn("Box of type " + s + " already stored in field of this type") : (this[s] = i);
                }
            }
        }),
        (u.Box.prototype.parseLanguage = function (t) {
            this.language = t.readUint16();
            var e = [];
            (e[0] = (this.language >> 10) & 31), (e[1] = (this.language >> 5) & 31), (e[2] = 31 & this.language), (this.languageString = String.fromCharCode(e[0] + 96, e[1] + 96, e[2] + 96));
        }),
        (u.SAMPLE_ENTRY_TYPE_VISUAL = "Visual"),
        (u.SAMPLE_ENTRY_TYPE_AUDIO = "Audio"),
        (u.SAMPLE_ENTRY_TYPE_HINT = "Hint"),
        (u.SAMPLE_ENTRY_TYPE_METADATA = "Metadata"),
        (u.SAMPLE_ENTRY_TYPE_SUBTITLE = "Subtitle"),
        (u.SAMPLE_ENTRY_TYPE_SYSTEM = "System"),
        (u.SAMPLE_ENTRY_TYPE_TEXT = "Text"),
        (u.SampleEntry.prototype.parseHeader = function (t) {
            t.readUint8Array(6), (this.data_reference_index = t.readUint16()), (this.hdr_size += 8);
        }),
        (u.SampleEntry.prototype.parse = function (t) {
            this.parseHeader(t), (this.data = t.readUint8Array(this.size - this.hdr_size));
        }),
        (u.SampleEntry.prototype.parseDataAndRewind = function (t) {
            this.parseHeader(t), (this.data = t.readUint8Array(this.size - this.hdr_size)), (this.hdr_size -= 8), (t.position -= this.size - this.hdr_size);
        }),
        (u.SampleEntry.prototype.parseFooter = function (t) {
            u.ContainerBox.prototype.parse.call(this, t);
        }),
        u.createMediaSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_HINT),
        u.createMediaSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_METADATA),
        u.createMediaSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_SUBTITLE),
        u.createMediaSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_SYSTEM),
        u.createMediaSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_TEXT),
        u.createMediaSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_VISUAL, function (t) {
            var e;
            this.parseHeader(t),
                t.readUint16(),
                t.readUint16(),
                t.readUint32Array(3),
                (this.width = t.readUint16()),
                (this.height = t.readUint16()),
                (this.horizresolution = t.readUint32()),
                (this.vertresolution = t.readUint32()),
                t.readUint32(),
                (this.frame_count = t.readUint16()),
                (e = Math.min(31, t.readUint8())),
                (this.compressorname = t.readString(e)),
                e < 31 && t.readString(31 - e),
                (this.depth = t.readUint16()),
                t.readUint16(),
                this.parseFooter(t);
        }),
        u.createMediaSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_AUDIO, function (t) {
            this.parseHeader(t), t.readUint32Array(2), (this.channel_count = t.readUint16()), (this.samplesize = t.readUint16()), t.readUint16(), t.readUint16(), (this.samplerate = t.readUint32() / 65536), this.parseFooter(t);
        }),
        u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_VISUAL, "avc1"),
        u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_VISUAL, "avc2"),
        u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_VISUAL, "avc3"),
        u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_VISUAL, "avc4"),
        u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_VISUAL, "av01"),
        u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_VISUAL, "hvc1"),
        u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_VISUAL, "hev1"),
        u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_AUDIO, "mp4a"),
        u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_AUDIO, "ac-3"),
        u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_AUDIO, "ec-3"),
        u.createEncryptedSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_VISUAL, "encv"),
        u.createEncryptedSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_AUDIO, "enca"),
        u.createEncryptedSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_SUBTITLE, "encu"),
        u.createEncryptedSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_SYSTEM, "encs"),
        u.createEncryptedSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_TEXT, "enct"),
        u.createEncryptedSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_METADATA, "encm"),
        u.createBoxCtor("a1lx", function (t) {
            var e = 16 * (1 + (1 & (1 & t.readUint8())));
            this.layer_size = [];
            for (var i = 0; i < 3; i++) this.layer_size[i] = 16 == e ? t.readUint16() : t.readUint32();
        }),
        u.createBoxCtor("a1op", function (t) {
            this.op_index = t.readUint8();
        }),
        u.createFullBoxCtor("auxC", function (t) {
            this.aux_type = t.readCString();
            var e = this.size - this.hdr_size - (this.aux_type.length + 1);
            this.aux_subtype = t.readUint8Array(e);
        }),
        u.createBoxCtor("av1C", function (t) {
            var e = t.readUint8();
            if (((this.version = 127 & e), 1 === this.version)) {
                if (
                    ((e = t.readUint8()),
                        (this.seq_profile = (e >> 5) & 7),
                        (this.seq_level_idx_0 = 31 & e),
                        (e = t.readUint8()),
                        (this.seq_tier_0 = (e >> 7) & 1),
                        (this.high_bitdepth = (e >> 6) & 1),
                        (this.twelve_bit = (e >> 5) & 1),
                        (this.monochrome = (e >> 4) & 1),
                        (this.chroma_subsampling_x = (e >> 3) & 1),
                        (this.chroma_subsampling_y = (e >> 2) & 1),
                        (this.chroma_sample_position = 3 & e),
                        (e = t.readUint8()),
                        (this.reserved_1 = (e >> 5) & 7),
                        0 === this.reserved_1)
                ) {
                    if (((this.initial_presentation_delay_present = (e >> 4) & 1), 1 === this.initial_presentation_delay_present)) this.initial_presentation_delay_minus_one = 15 & e;
                    else if (((this.reserved_2 = 15 & e), 0 !== this.reserved_2)) return void h.error("av1C reserved_2 parsing problem");
                    var i = this.size - this.hdr_size - 4;
                    this.configOBUs = t.readUint8Array(i);
                } else h.error("av1C reserved_1 parsing problem");
            } else h.error("av1C version " + this.version + " not supported");
        }),
        u.createBoxCtor("avcC", function (t) {
            var e, i;
            for (
                this.configurationVersion = t.readUint8(),
                this.AVCProfileIndication = t.readUint8(),
                this.profile_compatibility = t.readUint8(),
                this.AVCLevelIndication = t.readUint8(),
                this.lengthSizeMinusOne = 3 & t.readUint8(),
                this.nb_SPS_nalus = 31 & t.readUint8(),
                i = this.size - this.hdr_size - 6,
                this.SPS = [],
                e = 0;
                e < this.nb_SPS_nalus;
                e++
            )
                (this.SPS[e] = {}), (this.SPS[e].length = t.readUint16()), (this.SPS[e].nalu = t.readUint8Array(this.SPS[e].length)), (i -= 2 + this.SPS[e].length);
            for (this.nb_PPS_nalus = t.readUint8(), i--, this.PPS = [], e = 0; e < this.nb_PPS_nalus; e++)
                (this.PPS[e] = {}), (this.PPS[e].length = t.readUint16()), (this.PPS[e].nalu = t.readUint8Array(this.PPS[e].length)), (i -= 2 + this.PPS[e].length);
            i > 0 && (this.ext = t.readUint8Array(i));
        }),
        u.createBoxCtor("btrt", function (t) {
            (this.bufferSizeDB = t.readUint32()), (this.maxBitrate = t.readUint32()), (this.avgBitrate = t.readUint32());
        }),
        u.createBoxCtor("clap", function (t) {
            (this.cleanApertureWidthN = t.readUint32()),
                (this.cleanApertureWidthD = t.readUint32()),
                (this.cleanApertureHeightN = t.readUint32()),
                (this.cleanApertureHeightD = t.readUint32()),
                (this.horizOffN = t.readUint32()),
                (this.horizOffD = t.readUint32()),
                (this.vertOffN = t.readUint32()),
                (this.vertOffD = t.readUint32());
        }),
        u.createBoxCtor("clli", function (t) {
            (this.max_content_light_level = t.readUint16()), (this.max_pic_average_light_level = t.readUint16());
        }),
        u.createFullBoxCtor("co64", function (t) {
            var e, i;
            if (((e = t.readUint32()), (this.chunk_offsets = []), 0 === this.version)) for (i = 0; i < e; i++) this.chunk_offsets.push(t.readUint64());
        }),
        u.createFullBoxCtor("CoLL", function (t) {
            (this.maxCLL = t.readUint16()), (this.maxFALL = t.readUint16());
        }),
        u.createBoxCtor("colr", function (t) {
            if (((this.colour_type = t.readString(4)), "nclx" === this.colour_type)) {
                (this.colour_primaries = t.readUint16()), (this.transfer_characteristics = t.readUint16()), (this.matrix_coefficients = t.readUint16());
                var e = t.readUint8();
                this.full_range_flag = e >> 7;
            } else ("rICC" === this.colour_type || "prof" === this.colour_type) && (this.ICC_profile = t.readUint8Array(this.size - 4));
        }),
        u.createFullBoxCtor("cprt", function (t) {
            this.parseLanguage(t), (this.notice = t.readCString());
        }),
        u.createFullBoxCtor("cslg", function (t) {
            0 === this.version &&
                ((this.compositionToDTSShift = t.readInt32()),
                    (this.leastDecodeToDisplayDelta = t.readInt32()),
                    (this.greatestDecodeToDisplayDelta = t.readInt32()),
                    (this.compositionStartTime = t.readInt32()),
                    (this.compositionEndTime = t.readInt32()));
        }),
        u.createFullBoxCtor("ctts", function (t) {
            var e, i;
            if (((e = t.readUint32()), (this.sample_counts = []), (this.sample_offsets = []), 0 === this.version))
                for (i = 0; i < e; i++) {
                    this.sample_counts.push(t.readUint32());
                    var s = t.readInt32();
                    s < 0 && h.warn("BoxParser", "ctts box uses negative values without using version 1"), this.sample_offsets.push(s);
                }
            else if (1 == this.version) for (i = 0; i < e; i++) this.sample_counts.push(t.readUint32()), this.sample_offsets.push(t.readInt32());
        }),
        u.createBoxCtor("dac3", function (t) {
            var e = t.readUint8(),
                i = t.readUint8(),
                s = t.readUint8();
            (this.fscod = e >> 6), (this.bsid = (e >> 1) & 31), (this.bsmod = ((1 & e) << 2) | ((i >> 6) & 3)), (this.acmod = (i >> 3) & 7), (this.lfeon = (i >> 2) & 1), (this.bit_rate_code = (3 & i) | ((s >> 5) & 7));
        }),
        u.createBoxCtor("dec3", function (t) {
            var e = t.readUint16();
            (this.data_rate = e >> 3), (this.num_ind_sub = 7 & e), (this.ind_subs = []);
            for (var i = 0; i < this.num_ind_sub + 1; i++) {
                var s = {};
                this.ind_subs.push(s);
                var r = t.readUint8(),
                    n = t.readUint8(),
                    a = t.readUint8();
                (s.fscod = r >> 6),
                    (s.bsid = (r >> 1) & 31),
                    (s.bsmod = ((1 & r) << 4) | ((n >> 4) & 15)),
                    (s.acmod = (n >> 1) & 7),
                    (s.lfeon = 1 & n),
                    (s.num_dep_sub = (a >> 1) & 15),
                    s.num_dep_sub > 0 && (s.chan_loc = ((1 & a) << 8) | t.readUint8());
            }
        }),
        u.createFullBoxCtor("dfLa", function (t) {
            var e = [],
                i = ["STREAMINFO", "PADDING", "APPLICATION", "SEEKTABLE", "VORBIS_COMMENT", "CUESHEET", "PICTURE", "RESERVED"];
            for (this.parseFullHeader(t); ;) {
                var s = t.readUint8(),
                    r = Math.min(127 & s, i.length - 1);
                if ((r ? t.readUint8Array(t.readUint24()) : (t.readUint8Array(13), (this.samplerate = t.readUint32() >> 12), t.readUint8Array(20)), e.push(i[r]), 128 & s)) break;
            }
            this.numMetadataBlocks = e.length + " (" + e.join(", ") + ")";
        }),
        u.createBoxCtor("dimm", function (t) {
            this.bytessent = t.readUint64();
        }),
        u.createBoxCtor("dmax", function (t) {
            this.time = t.readUint32();
        }),
        u.createBoxCtor("dmed", function (t) {
            this.bytessent = t.readUint64();
        }),
        u.createFullBoxCtor("dref", function (t) {
            var e, i;
            this.entries = [];
            for (var s = t.readUint32(), r = 0; r < s; r++) {
                if ((e = u.parseOneBox(t, !1, this.size - (t.getPosition() - this.start))).code !== u.OK) return;
                (i = e.box), this.entries.push(i);
            }
        }),
        u.createBoxCtor("drep", function (t) {
            this.bytessent = t.readUint64();
        }),
        u.createFullBoxCtor("elng", function (t) {
            this.extended_language = t.readString(this.size - this.hdr_size);
        }),
        u.createFullBoxCtor("elst", function (t) {
            this.entries = [];
            for (var e = t.readUint32(), i = 0; i < e; i++) {
                var s = {};
                this.entries.push(s),
                    1 === this.version ? ((s.segment_duration = t.readUint64()), (s.media_time = t.readInt64())) : ((s.segment_duration = t.readUint32()), (s.media_time = t.readInt32())),
                    (s.media_rate_integer = t.readInt16()),
                    (s.media_rate_fraction = t.readInt16());
            }
        }),
        u.createFullBoxCtor("emsg", function (t) {
            1 == this.version
                ? ((this.timescale = t.readUint32()), (this.presentation_time = t.readUint64()), (this.event_duration = t.readUint32()), (this.id = t.readUint32()), (this.scheme_id_uri = t.readCString()), (this.value = t.readCString()))
                : ((this.scheme_id_uri = t.readCString()),
                    (this.value = t.readCString()),
                    (this.timescale = t.readUint32()),
                    (this.presentation_time_delta = t.readUint32()),
                    (this.event_duration = t.readUint32()),
                    (this.id = t.readUint32()));
            var e = this.size - this.hdr_size - (16 + (this.scheme_id_uri.length + 1) + (this.value.length + 1));
            1 == this.version && (e -= 4), (this.message_data = t.readUint8Array(e));
        }),
        u.createFullBoxCtor("esds", function (t) {
            var e = t.readUint8Array(this.size - this.hdr_size);
            if (void 0 !== f) {
                var i = new f();
                this.esd = i.parseOneDescriptor(new l(e.buffer, 0, l.BIG_ENDIAN));
            }
        }),
        u.createBoxCtor("fiel", function (t) {
            (this.fieldCount = t.readUint8()), (this.fieldOrdering = t.readUint8());
        }),
        u.createBoxCtor("frma", function (t) {
            this.data_format = t.readString(4);
        }),
        u.createBoxCtor("ftyp", function (t) {
            var e = this.size - this.hdr_size;
            (this.major_brand = t.readString(4)), (this.minor_version = t.readUint32()), (e -= 8), (this.compatible_brands = []);
            for (var i = 0; e >= 4;) (this.compatible_brands[i] = t.readString(4)), (e -= 4), i++;
        }),
        u.createFullBoxCtor("hdlr", function (t) {
            0 === this.version &&
                (t.readUint32(), (this.handler = t.readString(4)), t.readUint32Array(3), (this.name = t.readString(this.size - this.hdr_size - 20)), "\0" === this.name[this.name.length - 1] && (this.name = this.name.slice(0, -1)));
        }),
        u.createBoxCtor("hvcC", function (t) {
            (this.configurationVersion = t.readUint8()),
                (r = t.readUint8()),
                (this.general_profile_space = r >> 6),
                (this.general_tier_flag = (32 & r) >> 5),
                (this.general_profile_idc = 31 & r),
                (this.general_profile_compatibility = t.readUint32()),
                (this.general_constraint_indicator = t.readUint8Array(6)),
                (this.general_level_idc = t.readUint8()),
                (this.min_spatial_segmentation_idc = 4095 & t.readUint16()),
                (this.parallelismType = 3 & t.readUint8()),
                (this.chroma_format_idc = 3 & t.readUint8()),
                (this.bit_depth_luma_minus8 = 7 & t.readUint8()),
                (this.bit_depth_chroma_minus8 = 7 & t.readUint8()),
                (this.avgFrameRate = t.readUint16()),
                (r = t.readUint8()),
                (this.constantFrameRate = r >> 6),
                (this.numTemporalLayers = (13 & r) >> 3),
                (this.temporalIdNested = (4 & r) >> 2),
                (this.lengthSizeMinusOne = 3 & r),
                (this.nalu_arrays = []);
            var e,
                i,
                s,
                r,
                n = t.readUint8();
            for (e = 0; e < n; e++) {
                var a = [];
                this.nalu_arrays.push(a), (r = t.readUint8()), (a.completeness = (128 & r) >> 7), (a.nalu_type = 63 & r);
                var o = t.readUint16();
                for (i = 0; i < o; i++) {
                    var h = {};
                    a.push(h), (s = t.readUint16()), (h.data = t.readUint8Array(s));
                }
            }
        }),
        u.createFullBoxCtor("iinf", function (t) {
            var e;
            0 === this.version ? (this.entry_count = t.readUint16()) : (this.entry_count = t.readUint32()), (this.item_infos = []);
            for (var i = 0; i < this.entry_count; i++) {
                if ((e = u.parseOneBox(t, !1, this.size - (t.getPosition() - this.start))).code !== u.OK) return;
                "infe" !== e.box.type && h.error("BoxParser", "Expected 'infe' box, got " + e.box.type), (this.item_infos[i] = e.box);
            }
        }),
        u.createFullBoxCtor("iloc", function (t) {
            (e = t.readUint8()),
                (this.offset_size = (e >> 4) & 15),
                (this.length_size = 15 & e),
                (e = t.readUint8()),
                (this.base_offset_size = (e >> 4) & 15),
                1 === this.version || 2 === this.version ? (this.index_size = 15 & e) : (this.index_size = 0),
                (this.items = []);
            var e,
                i = 0;
            if (this.version < 2) i = t.readUint16();
            else {
                if (2 !== this.version) throw "version of iloc box not supported";
                i = t.readUint32();
            }
            for (var s = 0; s < i; s++) {
                var r = {};
                if ((this.items.push(r), this.version < 2)) r.item_ID = t.readUint16();
                else {
                    if (2 !== this.version) throw "version of iloc box not supported";
                    r.item_ID = t.readUint16();
                }
                switch ((1 === this.version || 2 === this.version ? (r.construction_method = 15 & t.readUint16()) : (r.construction_method = 0), (r.data_reference_index = t.readUint16()), this.base_offset_size)) {
                    case 0:
                        r.base_offset = 0;
                        break;
                    case 4:
                        r.base_offset = t.readUint32();
                        break;
                    case 8:
                        r.base_offset = t.readUint64();
                        break;
                    default:
                        throw "Error reading base offset size";
                }
                var n = t.readUint16();
                r.extents = [];
                for (var a = 0; a < n; a++) {
                    var o = {};
                    if ((r.extents.push(o), 1 === this.version || 2 === this.version))
                        switch (this.index_size) {
                            case 0:
                                o.extent_index = 0;
                                break;
                            case 4:
                                o.extent_index = t.readUint32();
                                break;
                            case 8:
                                o.extent_index = t.readUint64();
                                break;
                            default:
                                throw "Error reading extent index";
                        }
                    switch (this.offset_size) {
                        case 0:
                            o.extent_offset = 0;
                            break;
                        case 4:
                            o.extent_offset = t.readUint32();
                            break;
                        case 8:
                            o.extent_offset = t.readUint64();
                            break;
                        default:
                            throw "Error reading extent index";
                    }
                    switch (this.length_size) {
                        case 0:
                            o.extent_length = 0;
                            break;
                        case 4:
                            o.extent_length = t.readUint32();
                            break;
                        case 8:
                            o.extent_length = t.readUint64();
                            break;
                        default:
                            throw "Error reading extent index";
                    }
                }
            }
        }),
        u.createBoxCtor("imir", function (t) {
            var e = t.readUint8();
            (this.reserved = e >> 7), (this.axis = 1 & e);
        }),
        u.createFullBoxCtor("infe", function (t) {
            if (
                ((0 !== this.version && 1 !== this.version) ||
                    ((this.item_ID = t.readUint16()), (this.item_protection_index = t.readUint16()), (this.item_name = t.readCString()), (this.content_type = t.readCString()), (this.content_encoding = t.readCString())),
                    1 === this.version)
            )
                return (this.extension_type = t.readString(4)), h.warn("BoxParser", "Cannot parse extension type"), void t.seek(this.start + this.size);
            this.version >= 2 &&
                (2 === this.version ? (this.item_ID = t.readUint16()) : 3 === this.version && (this.item_ID = t.readUint32()),
                    (this.item_protection_index = t.readUint16()),
                    (this.item_type = t.readString(4)),
                    (this.item_name = t.readCString()),
                    "mime" === this.item_type ? ((this.content_type = t.readCString()), (this.content_encoding = t.readCString())) : "uri " === this.item_type && (this.item_uri_type = t.readCString()));
        }),
        u.createFullBoxCtor("ipma", function (t) {
            var e, i;
            for (entry_count = t.readUint32(), this.associations = [], e = 0; e < entry_count; e++) {
                var s = {};
                this.associations.push(s), this.version < 1 ? (s.id = t.readUint16()) : (s.id = t.readUint32());
                var r = t.readUint8();
                for (s.props = [], i = 0; i < r; i++) {
                    var n = t.readUint8(),
                        a = {};
                    s.props.push(a), (a.essential = (128 & n) >> 7 == 1), 1 & this.flags ? (a.property_index = ((127 & n) << 8) | t.readUint8()) : (a.property_index = 127 & n);
                }
            }
        }),
        u.createFullBoxCtor("iref", function (t) {
            var e, i;
            for (this.references = []; t.getPosition() < this.start + this.size;) {
                if ((e = u.parseOneBox(t, !0, this.size - (t.getPosition() - this.start))).code !== u.OK) return;
                (i = 0 === this.version ? new u.SingleItemTypeReferenceBox(e.type, e.size, e.hdr_size, e.start) : new u.SingleItemTypeReferenceBoxLarge(e.type, e.size, e.hdr_size, e.start)).write === u.Box.prototype.write &&
                    "mdat" !== i.type &&
                    (h.warn("BoxParser", i.type + " box writing not yet implemented, keeping unparsed data in memory for later write"), i.parseDataAndRewind(t)),
                    i.parse(t),
                    this.references.push(i);
            }
        }),
        u.createBoxCtor("irot", function (t) {
            this.angle = 3 & t.readUint8();
        }),
        u.createFullBoxCtor("ispe", function (t) {
            (this.image_width = t.readUint32()), (this.image_height = t.readUint32());
        }),
        u.createFullBoxCtor("kind", function (t) {
            (this.schemeURI = t.readCString()), (this.value = t.readCString());
        }),
        u.createFullBoxCtor("leva", function (t) {
            var e = t.readUint8();
            this.levels = [];
            for (var i = 0; i < e; i++) {
                var s = {};
                (this.levels[i] = s), (s.track_ID = t.readUint32());
                var r = t.readUint8();
                switch (((s.padding_flag = r >> 7), (s.assignment_type = 127 & r), s.assignment_type)) {
                    case 0:
                        s.grouping_type = t.readString(4);
                        break;
                    case 1:
                        (s.grouping_type = t.readString(4)), (s.grouping_type_parameter = t.readUint32());
                        break;
                    case 2:
                    case 3:
                        break;
                    case 4:
                        s.sub_track_id = t.readUint32();
                        break;
                    default:
                        h.warn("BoxParser", "Unknown leva assignement type");
                }
            }
        }),
        u.createBoxCtor("lsel", function (t) {
            this.layer_id = t.readUint16();
        }),
        u.createBoxCtor("maxr", function (t) {
            (this.period = t.readUint32()), (this.bytes = t.readUint32());
        }),
        u.createBoxCtor("mdcv", function (t) {
            (this.display_primaries = []),
                (this.display_primaries[0] = {}),
                (this.display_primaries[0].x = t.readUint16()),
                (this.display_primaries[0].y = t.readUint16()),
                (this.display_primaries[1] = {}),
                (this.display_primaries[1].x = t.readUint16()),
                (this.display_primaries[1].y = t.readUint16()),
                (this.display_primaries[2] = {}),
                (this.display_primaries[2].x = t.readUint16()),
                (this.display_primaries[2].y = t.readUint16()),
                (this.white_point = {}),
                (this.white_point.x = t.readUint16()),
                (this.white_point.y = t.readUint16()),
                (this.max_display_mastering_luminance = t.readUint32()),
                (this.min_display_mastering_luminance = t.readUint32());
        }),
        u.createFullBoxCtor("mdhd", function (t) {
            1 == this.version
                ? ((this.creation_time = t.readUint64()), (this.modification_time = t.readUint64()), (this.timescale = t.readUint32()), (this.duration = t.readUint64()))
                : ((this.creation_time = t.readUint32()), (this.modification_time = t.readUint32()), (this.timescale = t.readUint32()), (this.duration = t.readUint32())),
                this.parseLanguage(t),
                t.readUint16();
        }),
        u.createFullBoxCtor("mehd", function (t) {
            1 & this.flags && (h.warn("BoxParser", "mehd box incorrectly uses flags set to 1, converting version to 1"), (this.version = 1)),
                1 == this.version ? (this.fragment_duration = t.readUint64()) : (this.fragment_duration = t.readUint32());
        }),
        u.createFullBoxCtor("meta", function (t) {
            (this.boxes = []), u.ContainerBox.prototype.parse.call(this, t);
        }),
        u.createFullBoxCtor("mfhd", function (t) {
            this.sequence_number = t.readUint32();
        }),
        u.createFullBoxCtor("mfro", function (t) {
            this._size = t.readUint32();
        }),
        u.createFullBoxCtor("mvhd", function (t) {
            1 == this.version
                ? ((this.creation_time = t.readUint64()), (this.modification_time = t.readUint64()), (this.timescale = t.readUint32()), (this.duration = t.readUint64()))
                : ((this.creation_time = t.readUint32()), (this.modification_time = t.readUint32()), (this.timescale = t.readUint32()), (this.duration = t.readUint32())),
                (this.rate = t.readUint32()),
                (this.volume = t.readUint16() >> 8),
                t.readUint16(),
                t.readUint32Array(2),
                (this.matrix = t.readUint32Array(9)),
                t.readUint32Array(6),
                (this.next_track_id = t.readUint32());
        }),
        u.createBoxCtor("npck", function (t) {
            this.packetssent = t.readUint32();
        }),
        u.createBoxCtor("nump", function (t) {
            this.packetssent = t.readUint64();
        }),
        u.createFullBoxCtor("padb", function (t) {
            var e = t.readUint32();
            this.padbits = [];
            for (var i = 0; i < Math.floor((e + 1) / 2); i++) this.padbits = t.readUint8();
        }),
        u.createBoxCtor("pasp", function (t) {
            (this.hSpacing = t.readUint32()), (this.vSpacing = t.readUint32());
        }),
        u.createBoxCtor("payl", function (t) {
            this.text = t.readString(this.size - this.hdr_size);
        }),
        u.createBoxCtor("payt", function (t) {
            this.payloadID = t.readUint32();
            var e = t.readUint8();
            this.rtpmap_string = t.readString(e);
        }),
        u.createFullBoxCtor("pdin", function (t) {
            var e = (this.size - this.hdr_size) / 8;
            (this.rate = []), (this.initial_delay = []);
            for (var i = 0; i < e; i++) (this.rate[i] = t.readUint32()), (this.initial_delay[i] = t.readUint32());
        }),
        u.createFullBoxCtor("pitm", function (t) {
            0 === this.version ? (this.item_id = t.readUint16()) : (this.item_id = t.readUint32());
        }),
        u.createFullBoxCtor("pixi", function (t) {
            var e;
            for (this.num_channels = t.readUint8(), this.bits_per_channels = [], e = 0; e < this.num_channels; e++) this.bits_per_channels[e] = t.readUint8();
        }),
        u.createBoxCtor("pmax", function (t) {
            this.bytes = t.readUint32();
        }),
        u.createFullBoxCtor("prft", function (t) {
            (this.ref_track_id = t.readUint32()), (this.ntp_timestamp = t.readUint64()), 0 === this.version ? (this.media_time = t.readUint32()) : (this.media_time = t.readUint64());
        }),
        u.createFullBoxCtor("pssh", function (t) {
            if (((this.system_id = u.parseHex16(t)), this.version > 0)) {
                var e = t.readUint32();
                this.kid = [];
                for (var i = 0; i < e; i++) this.kid[i] = u.parseHex16(t);
            }
            var s = t.readUint32();
            s > 0 && (this.data = t.readUint8Array(s));
        }),
        u.createFullBoxCtor("clef", function (t) {
            (this.width = t.readUint32()), (this.height = t.readUint32());
        }),
        u.createFullBoxCtor("enof", function (t) {
            (this.width = t.readUint32()), (this.height = t.readUint32());
        }),
        u.createFullBoxCtor("prof", function (t) {
            (this.width = t.readUint32()), (this.height = t.readUint32());
        }),
        u.createContainerBoxCtor("tapt", null, ["clef", "prof", "enof"]),
        u.createBoxCtor("rtp ", function (t) {
            (this.descriptionformat = t.readString(4)), (this.sdptext = t.readString(this.size - this.hdr_size - 4));
        }),
        u.createFullBoxCtor("saio", function (t) {
            1 & this.flags && ((this.aux_info_type = t.readUint32()), (this.aux_info_type_parameter = t.readUint32()));
            var e = t.readUint32();
            this.offset = [];
            for (var i = 0; i < e; i++) 0 === this.version ? (this.offset[i] = t.readUint32()) : (this.offset[i] = t.readUint64());
        }),
        u.createFullBoxCtor("saiz", function (t) {
            1 & this.flags && ((this.aux_info_type = t.readUint32()), (this.aux_info_type_parameter = t.readUint32())), (this.default_sample_info_size = t.readUint8());
            var e = t.readUint32();
            if (((this.sample_info_size = []), 0 === this.default_sample_info_size)) for (var i = 0; i < e; i++) this.sample_info_size[i] = t.readUint8();
        }),
        u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_METADATA, "mett", function (t) {
            this.parseHeader(t), (this.content_encoding = t.readCString()), (this.mime_format = t.readCString()), this.parseFooter(t);
        }),
        u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_METADATA, "metx", function (t) {
            this.parseHeader(t), (this.content_encoding = t.readCString()), (this.namespace = t.readCString()), (this.schema_location = t.readCString()), this.parseFooter(t);
        }),
        u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_SUBTITLE, "sbtt", function (t) {
            this.parseHeader(t), (this.content_encoding = t.readCString()), (this.mime_format = t.readCString()), this.parseFooter(t);
        }),
        u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_SUBTITLE, "stpp", function (t) {
            this.parseHeader(t), (this.namespace = t.readCString()), (this.schema_location = t.readCString()), (this.auxiliary_mime_types = t.readCString()), this.parseFooter(t);
        }),
        u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_SUBTITLE, "stxt", function (t) {
            this.parseHeader(t), (this.content_encoding = t.readCString()), (this.mime_format = t.readCString()), this.parseFooter(t);
        }),
        u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_SUBTITLE, "tx3g", function (t) {
            this.parseHeader(t),
                (this.displayFlags = t.readUint32()),
                (this.horizontal_justification = t.readInt8()),
                (this.vertical_justification = t.readInt8()),
                (this.bg_color_rgba = t.readUint8Array(4)),
                (this.box_record = t.readInt16Array(4)),
                (this.style_record = t.readUint8Array(12)),
                this.parseFooter(t);
        }),
        u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_METADATA, "wvtt", function (t) {
            this.parseHeader(t), this.parseFooter(t);
        }),
        u.createSampleGroupCtor("alst", function (t) {
            var e,
                i = t.readUint16();
            for (this.first_output_sample = t.readUint16(), this.sample_offset = [], e = 0; e < i; e++) this.sample_offset[e] = t.readUint32();
            var s = this.description_length - 4 - 4 * i;
            for (this.num_output_samples = [], this.num_total_samples = [], e = 0; e < s / 4; e++) (this.num_output_samples[e] = t.readUint16()), (this.num_total_samples[e] = t.readUint16());
        }),
        u.createSampleGroupCtor("avll", function (t) {
            (this.layerNumber = t.readUint8()), (this.accurateStatisticsFlag = t.readUint8()), (this.avgBitRate = t.readUint16()), (this.avgFrameRate = t.readUint16());
        }),
        u.createSampleGroupCtor("avss", function (t) {
            (this.subSequenceIdentifier = t.readUint16()), (this.layerNumber = t.readUint8());
            var e = t.readUint8();
            (this.durationFlag = e >> 7),
                (this.avgRateFlag = (e >> 6) & 1),
                this.durationFlag && (this.duration = t.readUint32()),
                this.avgRateFlag && ((this.accurateStatisticsFlag = t.readUint8()), (this.avgBitRate = t.readUint16()), (this.avgFrameRate = t.readUint16())),
                (this.dependency = []);
            for (var i = t.readUint8(), s = 0; s < i; s++) {
                var r = {};
                this.dependency.push(r), (r.subSeqDirectionFlag = t.readUint8()), (r.layerNumber = t.readUint8()), (r.subSequenceIdentifier = t.readUint16());
            }
        }),
        u.createSampleGroupCtor("dtrt", function (t) {
            h.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
        }),
        u.createSampleGroupCtor("mvif", function (t) {
            h.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
        }),
        u.createSampleGroupCtor("prol", function (t) {
            this.roll_distance = t.readInt16();
        }),
        u.createSampleGroupCtor("rap ", function (t) {
            var e = t.readUint8();
            (this.num_leading_samples_known = e >> 7), (this.num_leading_samples = 127 & e);
        }),
        u.createSampleGroupCtor("rash", function (t) {
            if (((this.operation_point_count = t.readUint16()), this.description_length !== 2 + (1 === this.operation_point_count ? 2 : 6 * this.operation_point_count) + 9))
                h.warn("BoxParser", "Mismatch in " + this.grouping_type + " sample group length"), (this.data = t.readUint8Array(this.description_length - 2));
            else {
                if (1 === this.operation_point_count) this.target_rate_share = t.readUint16();
                else {
                    (this.target_rate_share = []), (this.available_bitrate = []);
                    for (var e = 0; e < this.operation_point_count; e++) (this.available_bitrate[e] = t.readUint32()), (this.target_rate_share[e] = t.readUint16());
                }
                (this.maximum_bitrate = t.readUint32()), (this.minimum_bitrate = t.readUint32()), (this.discard_priority = t.readUint8());
            }
        }),
        u.createSampleGroupCtor("roll", function (t) {
            this.roll_distance = t.readInt16();
        }),
        (u.SampleGroupEntry.prototype.parse = function (t) {
            h.warn("BoxParser", "Unknown Sample Group type: " + this.grouping_type), (this.data = t.readUint8Array(this.description_length));
        }),
        u.createSampleGroupCtor("scif", function (t) {
            h.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
        }),
        u.createSampleGroupCtor("scnm", function (t) {
            h.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
        }),
        u.createSampleGroupCtor("seig", function (t) {
            this.reserved = t.readUint8();
            var e = t.readUint8();
            (this.crypt_byte_block = e >> 4),
                (this.skip_byte_block = 15 & e),
                (this.isProtected = t.readUint8()),
                (this.Per_Sample_IV_Size = t.readUint8()),
                (this.KID = u.parseHex16(t)),
                (this.constant_IV_size = 0),
                (this.constant_IV = 0),
                1 === this.isProtected && 0 === this.Per_Sample_IV_Size && ((this.constant_IV_size = t.readUint8()), (this.constant_IV = t.readUint8Array(this.constant_IV_size)));
        }),
        u.createSampleGroupCtor("stsa", function (t) {
            h.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
        }),
        u.createSampleGroupCtor("sync", function (t) {
            var e = t.readUint8();
            this.NAL_unit_type = 63 & e;
        }),
        u.createSampleGroupCtor("tele", function (t) {
            var e = t.readUint8();
            this.level_independently_decodable = e >> 7;
        }),
        u.createSampleGroupCtor("tsas", function (t) {
            h.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
        }),
        u.createSampleGroupCtor("tscl", function (t) {
            h.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
        }),
        u.createSampleGroupCtor("vipr", function (t) {
            h.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
        }),
        u.createFullBoxCtor("sbgp", function (t) {
            (this.grouping_type = t.readString(4)), 1 === this.version ? (this.grouping_type_parameter = t.readUint32()) : (this.grouping_type_parameter = 0), (this.entries = []);
            for (var e = t.readUint32(), i = 0; i < e; i++) {
                var s = {};
                this.entries.push(s), (s.sample_count = t.readInt32()), (s.group_description_index = t.readInt32());
            }
        }),
        u.createFullBoxCtor("schm", function (t) {
            (this.scheme_type = t.readString(4)), (this.scheme_version = t.readUint32()), 1 & this.flags && (this.scheme_uri = t.readString(this.size - this.hdr_size - 8));
        }),
        u.createBoxCtor("sdp ", function (t) {
            this.sdptext = t.readString(this.size - this.hdr_size);
        }),
        u.createFullBoxCtor("sdtp", function (t) {
            var e,
                i = this.size - this.hdr_size;
            (this.is_leading = []), (this.sample_depends_on = []), (this.sample_is_depended_on = []), (this.sample_has_redundancy = []);
            for (var s = 0; s < i; s++) (e = t.readUint8()), (this.is_leading[s] = e >> 6), (this.sample_depends_on[s] = (e >> 4) & 3), (this.sample_is_depended_on[s] = (e >> 2) & 3), (this.sample_has_redundancy[s] = 3 & e);
        }),
        u.createFullBoxCtor("senc"),
        u.createFullBoxCtor("sgpd", function (t) {
            (this.grouping_type = t.readString(4)),
                h.debug("BoxParser", "Found Sample Groups of type " + this.grouping_type),
                1 === this.version ? (this.default_length = t.readUint32()) : (this.default_length = 0),
                this.version >= 2 && (this.default_group_description_index = t.readUint32()),
                (this.entries = []);
            for (var e, i = t.readUint32(), s = 0; s < i; s++)
                (e = u[this.grouping_type + "SampleGroupEntry"] ? new u[this.grouping_type + "SampleGroupEntry"](this.grouping_type) : new u.SampleGroupEntry(this.grouping_type)),
                    this.entries.push(e),
                    1 === this.version && 0 === this.default_length ? (e.description_length = t.readUint32()) : (e.description_length = this.default_length),
                    e.write === u.SampleGroupEntry.prototype.write &&
                    (h.info("BoxParser", "SampleGroup for type " + this.grouping_type + " writing not yet implemented, keeping unparsed data in memory for later write"),
                        (e.data = t.readUint8Array(e.description_length)),
                        (t.position -= e.description_length)),
                    e.parse(t);
        }),
        u.createFullBoxCtor("sidx", function (t) {
            (this.reference_ID = t.readUint32()),
                (this.timescale = t.readUint32()),
                0 === this.version ? ((this.earliest_presentation_time = t.readUint32()), (this.first_offset = t.readUint32())) : ((this.earliest_presentation_time = t.readUint64()), (this.first_offset = t.readUint64())),
                t.readUint16(),
                (this.references = []);
            for (var e = t.readUint16(), i = 0; i < e; i++) {
                var s = {};
                this.references.push(s);
                var r = t.readUint32();
                (s.reference_type = (r >> 31) & 1),
                    (s.referenced_size = 2147483647 & r),
                    (s.subsegment_duration = t.readUint32()),
                    (r = t.readUint32()),
                    (s.starts_with_SAP = (r >> 31) & 1),
                    (s.SAP_type = (r >> 28) & 7),
                    (s.SAP_delta_time = 268435455 & r);
            }
        }),
        (u.SingleItemTypeReferenceBox = function (t, e, i, s) {
            u.Box.call(this, t, e), (this.hdr_size = i), (this.start = s);
        }),
        (u.SingleItemTypeReferenceBox.prototype = new u.Box()),
        (u.SingleItemTypeReferenceBox.prototype.parse = function (t) {
            this.from_item_ID = t.readUint16();
            var e = t.readUint16();
            this.references = [];
            for (var i = 0; i < e; i++) this.references[i] = t.readUint16();
        }),
        (u.SingleItemTypeReferenceBoxLarge = function (t, e, i, s) {
            u.Box.call(this, t, e), (this.hdr_size = i), (this.start = s);
        }),
        (u.SingleItemTypeReferenceBoxLarge.prototype = new u.Box()),
        (u.SingleItemTypeReferenceBoxLarge.prototype.parse = function (t) {
            this.from_item_ID = t.readUint32();
            var e = t.readUint16();
            this.references = [];
            for (var i = 0; i < e; i++) this.references[i] = t.readUint32();
        }),
        u.createFullBoxCtor("SmDm", function (t) {
            (this.primaryRChromaticity_x = t.readUint16()),
                (this.primaryRChromaticity_y = t.readUint16()),
                (this.primaryGChromaticity_x = t.readUint16()),
                (this.primaryGChromaticity_y = t.readUint16()),
                (this.primaryBChromaticity_x = t.readUint16()),
                (this.primaryBChromaticity_y = t.readUint16()),
                (this.whitePointChromaticity_x = t.readUint16()),
                (this.whitePointChromaticity_y = t.readUint16()),
                (this.luminanceMax = t.readUint32()),
                (this.luminanceMin = t.readUint32());
        }),
        u.createFullBoxCtor("smhd", function (t) {
            (this.balance = t.readUint16()), t.readUint16();
        }),
        u.createFullBoxCtor("ssix", function (t) {
            this.subsegments = [];
            for (var e = t.readUint32(), i = 0; i < e; i++) {
                var s = {};
                this.subsegments.push(s), (s.ranges = []);
                for (var r = t.readUint32(), n = 0; n < r; n++) {
                    var a = {};
                    s.ranges.push(a), (a.level = t.readUint8()), (a.range_size = t.readUint24());
                }
            }
        }),
        u.createFullBoxCtor("stco", function (t) {
            var e;
            if (((e = t.readUint32()), (this.chunk_offsets = []), 0 === this.version)) for (var i = 0; i < e; i++) this.chunk_offsets.push(t.readUint32());
        }),
        u.createFullBoxCtor("stdp", function (t) {
            var e = (this.size - this.hdr_size) / 2;
            this.priority = [];
            for (var i = 0; i < e; i++) this.priority[i] = t.readUint16();
        }),
        u.createFullBoxCtor("sthd"),
        u.createFullBoxCtor("stri", function (t) {
            (this.switch_group = t.readUint16()), (this.alternate_group = t.readUint16()), (this.sub_track_id = t.readUint32());
            var e = (this.size - this.hdr_size - 8) / 4;
            this.attribute_list = [];
            for (var i = 0; i < e; i++) this.attribute_list[i] = t.readUint32();
        }),
        u.createFullBoxCtor("stsc", function (t) {
            var e, i;
            if (((e = t.readUint32()), (this.first_chunk = []), (this.samples_per_chunk = []), (this.sample_description_index = []), 0 === this.version))
                for (i = 0; i < e; i++) this.first_chunk.push(t.readUint32()), this.samples_per_chunk.push(t.readUint32()), this.sample_description_index.push(t.readUint32());
        }),
        u.createFullBoxCtor("stsd", function (t) {
            var e, i, s, r;
            for (this.entries = [], s = t.readUint32(), e = 1; e <= s; e++) {
                if ((i = u.parseOneBox(t, !0, this.size - (t.getPosition() - this.start))).code !== u.OK) return;
                u[i.type + "SampleEntry"]
                    ? (((r = new u[i.type + "SampleEntry"](i.size)).hdr_size = i.hdr_size), (r.start = i.start))
                    : (h.warn("BoxParser", "Unknown sample entry type: " + i.type), (r = new u.SampleEntry(i.type, i.size, i.hdr_size, i.start))),
                    r.write === u.SampleEntry.prototype.write && (h.info("BoxParser", "SampleEntry " + r.type + " box writing not yet implemented, keeping unparsed data in memory for later write"), r.parseDataAndRewind(t)),
                    r.parse(t),
                    this.entries.push(r);
            }
        }),
        u.createFullBoxCtor("stsg", function (t) {
            this.grouping_type = t.readUint32();
            var e = t.readUint16();
            this.group_description_index = [];
            for (var i = 0; i < e; i++) this.group_description_index[i] = t.readUint32();
        }),
        u.createFullBoxCtor("stsh", function (t) {
            var e, i;
            if (((e = t.readUint32()), (this.shadowed_sample_numbers = []), (this.sync_sample_numbers = []), 0 === this.version))
                for (i = 0; i < e; i++) this.shadowed_sample_numbers.push(t.readUint32()), this.sync_sample_numbers.push(t.readUint32());
        }),
        u.createFullBoxCtor("stss", function (t) {
            var e, i;
            if (((i = t.readUint32()), 0 === this.version)) for (this.sample_numbers = [], e = 0; e < i; e++) this.sample_numbers.push(t.readUint32());
        }),
        u.createFullBoxCtor("stsz", function (t) {
            var e;
            if (((this.sample_sizes = []), 0 === this.version))
                for (this.sample_size = t.readUint32(), this.sample_count = t.readUint32(), e = 0; e < this.sample_count; e++) 0 === this.sample_size ? this.sample_sizes.push(t.readUint32()) : (this.sample_sizes[e] = this.sample_size);
        }),
        u.createFullBoxCtor("stts", function (t) {
            var e, i, s;
            if (((e = t.readUint32()), (this.sample_counts = []), (this.sample_deltas = []), 0 === this.version))
                for (i = 0; i < e; i++)
                    this.sample_counts.push(t.readUint32()), (s = t.readInt32()) < 0 && (h.warn("BoxParser", "File uses negative stts sample delta, using value 1 instead, sync may be lost!"), (s = 1)), this.sample_deltas.push(s);
        }),
        u.createFullBoxCtor("stvi", function (t) {
            var e = t.readUint32();
            (this.single_view_allowed = 3 & e), (this.stereo_scheme = t.readUint32());
            var i,
                s,
                r = t.readUint32();
            for (this.stereo_indication_type = t.readString(r), this.boxes = []; t.getPosition() < this.start + this.size;) {
                if ((i = u.parseOneBox(t, !1, this.size - (t.getPosition() - this.start))).code !== u.OK) return;
                (s = i.box), this.boxes.push(s), (this[s.type] = s);
            }
        }),
        u.createBoxCtor("styp", function (t) {
            u.ftypBox.prototype.parse.call(this, t);
        }),
        u.createFullBoxCtor("stz2", function (t) {
            var e, i;
            if (((this.sample_sizes = []), 0 === this.version)) {
                if (((this.reserved = t.readUint24()), (this.field_size = t.readUint8()), (i = t.readUint32()), 4 === this.field_size))
                    for (e = 0; e < i; e += 2) {
                        var s = t.readUint8();
                        (this.sample_sizes[e] = (s >> 4) & 15), (this.sample_sizes[e + 1] = 15 & s);
                    }
                else if (8 === this.field_size) for (e = 0; e < i; e++) this.sample_sizes[e] = t.readUint8();
                else if (16 === this.field_size) for (e = 0; e < i; e++) this.sample_sizes[e] = t.readUint16();
                else h.error("BoxParser", "Error in length field in stz2 box");
            }
        }),
        u.createFullBoxCtor("subs", function (t) {
            var e, i, s, r;
            for (s = t.readUint32(), this.entries = [], e = 0; e < s; e++) {
                var n = {};
                if (((this.entries[e] = n), (n.sample_delta = t.readUint32()), (n.subsamples = []), (r = t.readUint16()) > 0))
                    for (i = 0; i < r; i++) {
                        var a = {};
                        n.subsamples.push(a), 1 == this.version ? (a.size = t.readUint32()) : (a.size = t.readUint16()), (a.priority = t.readUint8()), (a.discardable = t.readUint8()), (a.codec_specific_parameters = t.readUint32());
                    }
            }
        }),
        u.createFullBoxCtor("tenc", function (t) {
            if ((t.readUint8(), 0 === this.version)) t.readUint8();
            else {
                var e = t.readUint8();
                (this.default_crypt_byte_block = (e >> 4) & 15), (this.default_skip_byte_block = 15 & e);
            }
            (this.default_isProtected = t.readUint8()),
                (this.default_Per_Sample_IV_Size = t.readUint8()),
                (this.default_KID = u.parseHex16(t)),
                1 === this.default_isProtected && 0 === this.default_Per_Sample_IV_Size && ((this.default_constant_IV_size = t.readUint8()), (this.default_constant_IV = t.readUint8Array(this.default_constant_IV_size)));
        }),
        u.createFullBoxCtor("tfdt", function (t) {
            1 == this.version ? (this.baseMediaDecodeTime = t.readUint64()) : (this.baseMediaDecodeTime = t.readUint32());
        }),
        u.createFullBoxCtor("tfhd", function (t) {
            var e = 0;
            (this.track_id = t.readUint32()),
                this.size - this.hdr_size > e && this.flags & u.TFHD_FLAG_BASE_DATA_OFFSET ? ((this.base_data_offset = t.readUint64()), (e += 8)) : (this.base_data_offset = 0),
                this.size - this.hdr_size > e && this.flags & u.TFHD_FLAG_SAMPLE_DESC ? ((this.default_sample_description_index = t.readUint32()), (e += 4)) : (this.default_sample_description_index = 0),
                this.size - this.hdr_size > e && this.flags & u.TFHD_FLAG_SAMPLE_DUR ? ((this.default_sample_duration = t.readUint32()), (e += 4)) : (this.default_sample_duration = 0),
                this.size - this.hdr_size > e && this.flags & u.TFHD_FLAG_SAMPLE_SIZE ? ((this.default_sample_size = t.readUint32()), (e += 4)) : (this.default_sample_size = 0),
                this.size - this.hdr_size > e && this.flags & u.TFHD_FLAG_SAMPLE_FLAGS ? ((this.default_sample_flags = t.readUint32()), (e += 4)) : (this.default_sample_flags = 0);
        }),
        u.createFullBoxCtor("tfra", function (t) {
            (this.track_ID = t.readUint32()), t.readUint24();
            var e = t.readUint8();
            (this.length_size_of_traf_num = (e >> 4) & 3), (this.length_size_of_trun_num = (e >> 2) & 3), (this.length_size_of_sample_num = 3 & e), (this.entries = []);
            for (var i = t.readUint32(), s = 0; s < i; s++)
                1 === this.version ? ((this.time = t.readUint64()), (this.moof_offset = t.readUint64())) : ((this.time = t.readUint32()), (this.moof_offset = t.readUint32())),
                    (this.traf_number = t["readUint" + 8 * (this.length_size_of_traf_num + 1)]()),
                    (this.trun_number = t["readUint" + 8 * (this.length_size_of_trun_num + 1)]()),
                    (this.sample_number = t["readUint" + 8 * (this.length_size_of_sample_num + 1)]());
        }),
        u.createFullBoxCtor("tkhd", function (t) {
            1 == this.version
                ? ((this.creation_time = t.readUint64()), (this.modification_time = t.readUint64()), (this.track_id = t.readUint32()), t.readUint32(), (this.duration = t.readUint64()))
                : ((this.creation_time = t.readUint32()), (this.modification_time = t.readUint32()), (this.track_id = t.readUint32()), t.readUint32(), (this.duration = t.readUint32())),
                t.readUint32Array(2),
                (this.layer = t.readInt16()),
                (this.alternate_group = t.readInt16()),
                (this.volume = t.readInt16() >> 8),
                t.readUint16(),
                (this.matrix = t.readInt32Array(9)),
                (this.width = t.readUint32()),
                (this.height = t.readUint32());
        }),
        u.createBoxCtor("tmax", function (t) {
            this.time = t.readUint32();
        }),
        u.createBoxCtor("tmin", function (t) {
            this.time = t.readUint32();
        }),
        u.createBoxCtor("totl", function (t) {
            this.bytessent = t.readUint32();
        }),
        u.createBoxCtor("tpay", function (t) {
            this.bytessent = t.readUint32();
        }),
        u.createBoxCtor("tpyl", function (t) {
            this.bytessent = t.readUint64();
        }),
        (u.TrackGroupTypeBox.prototype.parse = function (t) {
            this.parseFullHeader(t), (this.track_group_id = t.readUint32());
        }),
        u.createTrackGroupCtor("msrc"),
        (u.TrackReferenceTypeBox = function (t, e, i, s) {
            u.Box.call(this, t, e), (this.hdr_size = i), (this.start = s);
        }),
        (u.TrackReferenceTypeBox.prototype = new u.Box()),
        (u.TrackReferenceTypeBox.prototype.parse = function (t) {
            this.track_ids = t.readUint32Array((this.size - this.hdr_size) / 4);
        }),
        (u.trefBox.prototype.parse = function (t) {
            for (var e, i; t.getPosition() < this.start + this.size;) {
                if ((e = u.parseOneBox(t, !0, this.size - (t.getPosition() - this.start))).code !== u.OK) return;
                (i = new u.TrackReferenceTypeBox(e.type, e.size, e.hdr_size, e.start)).write === u.Box.prototype.write &&
                    "mdat" !== i.type &&
                    (h.info("BoxParser", "TrackReference " + i.type + " box writing not yet implemented, keeping unparsed data in memory for later write"), i.parseDataAndRewind(t)),
                    i.parse(t),
                    this.boxes.push(i);
            }
        }),
        u.createFullBoxCtor("trep", function (t) {
            for (this.track_ID = t.readUint32(), this.boxes = []; t.getPosition() < this.start + this.size;) {
                if ((ret = u.parseOneBox(t, !1, this.size - (t.getPosition() - this.start))).code !== u.OK) return;
                (box = ret.box), this.boxes.push(box);
            }
        }),
        u.createFullBoxCtor("trex", function (t) {
            (this.track_id = t.readUint32()),
                (this.default_sample_description_index = t.readUint32()),
                (this.default_sample_duration = t.readUint32()),
                (this.default_sample_size = t.readUint32()),
                (this.default_sample_flags = t.readUint32());
        }),
        u.createBoxCtor("trpy", function (t) {
            this.bytessent = t.readUint64();
        }),
        u.createFullBoxCtor("trun", function (t) {
            var e = 0;
            if (
                ((this.sample_count = t.readUint32()),
                    (e += 4),
                    this.size - this.hdr_size > e && this.flags & u.TRUN_FLAGS_DATA_OFFSET ? ((this.data_offset = t.readInt32()), (e += 4)) : (this.data_offset = 0),
                    this.size - this.hdr_size > e && this.flags & u.TRUN_FLAGS_FIRST_FLAG ? ((this.first_sample_flags = t.readUint32()), (e += 4)) : (this.first_sample_flags = 0),
                    (this.sample_duration = []),
                    (this.sample_size = []),
                    (this.sample_flags = []),
                    (this.sample_composition_time_offset = []),
                    this.size - this.hdr_size > e)
            )
                for (var i = 0; i < this.sample_count; i++)
                    this.flags & u.TRUN_FLAGS_DURATION && (this.sample_duration[i] = t.readUint32()),
                        this.flags & u.TRUN_FLAGS_SIZE && (this.sample_size[i] = t.readUint32()),
                        this.flags & u.TRUN_FLAGS_FLAGS && (this.sample_flags[i] = t.readUint32()),
                        this.flags & u.TRUN_FLAGS_CTS_OFFSET && (0 === this.version ? (this.sample_composition_time_offset[i] = t.readUint32()) : (this.sample_composition_time_offset[i] = t.readInt32()));
        }),
        u.createFullBoxCtor("tsel", function (t) {
            this.switch_group = t.readUint32();
            var e = (this.size - this.hdr_size - 4) / 4;
            this.attribute_list = [];
            for (var i = 0; i < e; i++) this.attribute_list[i] = t.readUint32();
        }),
        u.createFullBoxCtor("txtC", function (t) {
            this.config = t.readCString();
        }),
        u.createFullBoxCtor("url ", function (t) {
            1 !== this.flags && (this.location = t.readCString());
        }),
        u.createFullBoxCtor("urn ", function (t) {
            (this.name = t.readCString()), this.size - this.hdr_size - this.name.length - 1 > 0 && (this.location = t.readCString());
        }),
        u.createUUIDBox("a5d40b30e81411ddba2f0800200c9a66", !0, !1, function (t) {
            this.LiveServerManifest = t
                .readString(this.size - this.hdr_size)
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;");
        }),
        u.createUUIDBox("d08a4f1810f34a82b6c832d8aba183d3", !0, !1, function (t) {
            this.system_id = u.parseHex16(t);
            var e = t.readUint32();
            e > 0 && (this.data = t.readUint8Array(e));
        }),
        u.createUUIDBox("a2394f525a9b4f14a2446c427c648df4", !0, !1),
        u.createUUIDBox("8974dbce7be74c5184f97148f9882554", !0, !1, function (t) {
            (this.default_AlgorithmID = t.readUint24()), (this.default_IV_size = t.readUint8()), (this.default_KID = u.parseHex16(t));
        }),
        u.createUUIDBox("d4807ef2ca3946958e5426cb9e46a79f", !0, !1, function (t) {
            (this.fragment_count = t.readUint8()), (this.entries = []);
            for (var e = 0; e < this.fragment_count; e++) {
                var i = {},
                    s = 0,
                    r = 0;
                1 === this.version ? ((s = t.readUint64()), (r = t.readUint64())) : ((s = t.readUint32()), (r = t.readUint32())), (i.absolute_time = s), (i.absolute_duration = r), this.entries.push(i);
            }
        }),
        u.createUUIDBox("6d1d9b0542d544e680e2141daff757b2", !0, !1, function (t) {
            1 === this.version ? ((this.absolute_time = t.readUint64()), (this.duration = t.readUint64())) : ((this.absolute_time = t.readUint32()), (this.duration = t.readUint32()));
        }),
        u.createFullBoxCtor("vmhd", function (t) {
            (this.graphicsmode = t.readUint16()), (this.opcolor = t.readUint16Array(3));
        }),
        u.createFullBoxCtor("vpcC", function (t) {
            var e;
            1 === this.version
                ? ((this.profile = t.readUint8()),
                    (this.level = t.readUint8()),
                    (e = t.readUint8()),
                    (this.bitDepth = e >> 4),
                    (this.chromaSubsampling = (e >> 1) & 7),
                    (this.videoFullRangeFlag = 1 & e),
                    (this.colourPrimaries = t.readUint8()),
                    (this.transferCharacteristics = t.readUint8()),
                    (this.matrixCoefficients = t.readUint8()),
                    (this.codecIntializationDataSize = t.readUint16()),
                    (this.codecIntializationData = t.readUint8Array(this.codecIntializationDataSize)))
                : ((this.profile = t.readUint8()),
                    (this.level = t.readUint8()),
                    (e = t.readUint8()),
                    (this.bitDepth = (e >> 4) & 15),
                    (this.colorSpace = 15 & e),
                    (e = t.readUint8()),
                    (this.chromaSubsampling = (e >> 4) & 15),
                    (this.transferFunction = (e >> 1) & 7),
                    (this.videoFullRangeFlag = 1 & e),
                    (this.codecIntializationDataSize = t.readUint16()),
                    (this.codecIntializationData = t.readUint8Array(this.codecIntializationDataSize)));
        }),
        u.createBoxCtor("vttC", function (t) {
            this.text = t.readString(this.size - this.hdr_size);
        }),
        (u.SampleEntry.prototype.isVideo = function () {
            return !1;
        }),
        (u.SampleEntry.prototype.isAudio = function () {
            return !1;
        }),
        (u.SampleEntry.prototype.isSubtitle = function () {
            return !1;
        }),
        (u.SampleEntry.prototype.isMetadata = function () {
            return !1;
        }),
        (u.SampleEntry.prototype.isHint = function () {
            return !1;
        }),
        (u.SampleEntry.prototype.getCodec = function () {
            return this.type.replace(".", "");
        }),
        (u.SampleEntry.prototype.getWidth = function () {
            return "";
        }),
        (u.SampleEntry.prototype.getHeight = function () {
            return "";
        }),
        (u.SampleEntry.prototype.getChannelCount = function () {
            return "";
        }),
        (u.SampleEntry.prototype.getSampleRate = function () {
            return "";
        }),
        (u.SampleEntry.prototype.getSampleSize = function () {
            return "";
        }),
        (u.VisualSampleEntry.prototype.isVideo = function () {
            return !0;
        }),
        (u.VisualSampleEntry.prototype.getWidth = function () {
            return this.width;
        }),
        (u.VisualSampleEntry.prototype.getHeight = function () {
            return this.height;
        }),
        (u.AudioSampleEntry.prototype.isAudio = function () {
            return !0;
        }),
        (u.AudioSampleEntry.prototype.getChannelCount = function () {
            return this.channel_count;
        }),
        (u.AudioSampleEntry.prototype.getSampleRate = function () {
            return this.samplerate;
        }),
        (u.AudioSampleEntry.prototype.getSampleSize = function () {
            return this.samplesize;
        }),
        (u.SubtitleSampleEntry.prototype.isSubtitle = function () {
            return !0;
        }),
        (u.MetadataSampleEntry.prototype.isMetadata = function () {
            return !0;
        }),
        (u.decimalToHex = function (t, e) {
            var i = Number(t).toString(16);
            for (e = null == e ? (e = 2) : e; i.length < e;) i = "0" + i;
            return i;
        }),
        (u.avc1SampleEntry.prototype.getCodec = u.avc2SampleEntry.prototype.getCodec = u.avc3SampleEntry.prototype.getCodec = u.avc4SampleEntry.prototype.getCodec = function () {
            var t = u.SampleEntry.prototype.getCodec.call(this);
            return this.avcC ? t + "." + u.decimalToHex(this.avcC.AVCProfileIndication) + u.decimalToHex(this.avcC.profile_compatibility) + u.decimalToHex(this.avcC.AVCLevelIndication) : t;
        }),
        (u.hev1SampleEntry.prototype.getCodec = u.hvc1SampleEntry.prototype.getCodec = function () {
            var t,
                e = u.SampleEntry.prototype.getCodec.call(this);
            if (this.hvcC) {
                switch (((e += "."), this.hvcC.general_profile_space)) {
                    case 0:
                        e += "";
                        break;
                    case 1:
                        e += "A";
                        break;
                    case 2:
                        e += "B";
                        break;
                    case 3:
                        e += "C";
                }
                (e += this.hvcC.general_profile_idc), (e += ".");
                var i = this.hvcC.general_profile_compatibility,
                    s = 0;
                for (t = 0; t < 32 && ((s |= 1 & i), 31 != t); t++) (s <<= 1), (i >>= 1);
                (e += u.decimalToHex(s, 0)), (e += "."), 0 === this.hvcC.general_tier_flag ? (e += "L") : (e += "H"), (e += this.hvcC.general_level_idc);
                var r = !1,
                    n = "";
                for (t = 5; t >= 0; t--) (this.hvcC.general_constraint_indicator[t] || r) && ((n = "." + u.decimalToHex(this.hvcC.general_constraint_indicator[t], 0) + n), (r = !0));
                e += n;
            }
            return e;
        }),
        (u.mp4aSampleEntry.prototype.getCodec = function () {
            var t = u.SampleEntry.prototype.getCodec.call(this);
            if (this.esds && this.esds.esd) {
                var e = this.esds.esd.getOTI(),
                    i = this.esds.esd.getAudioConfig();
                return t + "." + u.decimalToHex(e) + (i ? "." + i : "");
            }
            return t;
        }),
        (u.stxtSampleEntry.prototype.getCodec = function () {
            var t = u.SampleEntry.prototype.getCodec.call(this);
            return this.mime_format ? t + "." + this.mime_format : t;
        }),
        (u.av01SampleEntry.prototype.getCodec = function () {
            var t,
                e = u.SampleEntry.prototype.getCodec.call(this);
            return (
                2 === this.av1C.seq_profile && 1 === this.av1C.high_bitdepth ? (t = 1 === this.av1C.twelve_bit ? "12" : "10") : this.av1C.seq_profile <= 2 && (t = 1 === this.av1C.high_bitdepth ? "10" : "08"),
                e + "." + this.av1C.seq_profile + "." + this.av1C.seq_level_idx_0 + (this.av1C.seq_tier_0 ? "H" : "M") + "." + t
            );
        }),
        (u.Box.prototype.writeHeader = function (t, e) {
            (this.size += 8),
                this.size > 4294967296 && (this.size += 8),
                "uuid" === this.type && (this.size += 16),
                h.debug("BoxWriter", "Writing box " + this.type + " of size: " + this.size + " at position " + t.getPosition() + (e || "")),
                this.size > 4294967296 ? t.writeUint32(1) : ((this.sizePosition = t.getPosition()), t.writeUint32(this.size)),
                t.writeString(this.type, null, 4),
                "uuid" === this.type && t.writeUint8Array(this.uuid),
                this.size > 4294967296 && t.writeUint64(this.size);
        }),
        (u.FullBox.prototype.writeHeader = function (t) {
            (this.size += 4), u.Box.prototype.writeHeader.call(this, t, " v=" + this.version + " f=" + this.flags), t.writeUint8(this.version), t.writeUint24(this.flags);
        }),
        (u.Box.prototype.write = function (t) {
            "mdat" === this.type
                ? this.data && ((this.size = this.data.length), this.writeHeader(t), t.writeUint8Array(this.data))
                : ((this.size = this.data ? this.data.length : 0), this.writeHeader(t), this.data && t.writeUint8Array(this.data));
        }),
        (u.ContainerBox.prototype.write = function (t) {
            (this.size = 0), this.writeHeader(t);
            for (var e = 0; e < this.boxes.length; e++) this.boxes[e] && (this.boxes[e].write(t), (this.size += this.boxes[e].size));
            h.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size), t.adjustUint32(this.sizePosition, this.size);
        }),
        (u.TrackReferenceTypeBox.prototype.write = function (t) {
            (this.size = 4 * this.track_ids.length), this.writeHeader(t), t.writeUint32Array(this.track_ids);
        }),
        (u.avcCBox.prototype.write = function (t) {
            var e;
            for (this.size = 7, e = 0; e < this.SPS.length; e++) this.size += 2 + this.SPS[e].length;
            for (e = 0; e < this.PPS.length; e++) this.size += 2 + this.PPS[e].length;
            for (
                this.ext && (this.size += this.ext.length),
                this.writeHeader(t),
                t.writeUint8(this.configurationVersion),
                t.writeUint8(this.AVCProfileIndication),
                t.writeUint8(this.profile_compatibility),
                t.writeUint8(this.AVCLevelIndication),
                t.writeUint8(this.lengthSizeMinusOne + 252),
                t.writeUint8(this.SPS.length + 224),
                e = 0;
                e < this.SPS.length;
                e++
            )
                t.writeUint16(this.SPS[e].length), t.writeUint8Array(this.SPS[e].nalu);
            for (t.writeUint8(this.PPS.length), e = 0; e < this.PPS.length; e++) t.writeUint16(this.PPS[e].length), t.writeUint8Array(this.PPS[e].nalu);
            this.ext && t.writeUint8Array(this.ext);
        }),
        (u.co64Box.prototype.write = function (t) {
            var e;
            for (this.version = 0, this.flags = 0, this.size = 4 + 8 * this.chunk_offsets.length, this.writeHeader(t), t.writeUint32(this.chunk_offsets.length), e = 0; e < this.chunk_offsets.length; e++)
                t.writeUint64(this.chunk_offsets[e]);
        }),
        (u.cslgBox.prototype.write = function (t) {
            (this.version = 0),
                (this.flags = 0),
                (this.size = 20),
                this.writeHeader(t),
                t.writeInt32(this.compositionToDTSShift),
                t.writeInt32(this.leastDecodeToDisplayDelta),
                t.writeInt32(this.greatestDecodeToDisplayDelta),
                t.writeInt32(this.compositionStartTime),
                t.writeInt32(this.compositionEndTime);
        }),
        (u.cttsBox.prototype.write = function (t) {
            var e;
            for (this.version = 0, this.flags = 0, this.size = 4 + 8 * this.sample_counts.length, this.writeHeader(t), t.writeUint32(this.sample_counts.length), e = 0; e < this.sample_counts.length; e++)
                t.writeUint32(this.sample_counts[e]), 1 === this.version ? t.writeInt32(this.sample_offsets[e]) : t.writeUint32(this.sample_offsets[e]);
        }),
        (u.drefBox.prototype.write = function (t) {
            (this.version = 0), (this.flags = 0), (this.size = 4), this.writeHeader(t), t.writeUint32(this.entries.length);
            for (var e = 0; e < this.entries.length; e++) this.entries[e].write(t), (this.size += this.entries[e].size);
            h.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size), t.adjustUint32(this.sizePosition, this.size);
        }),
        (u.elngBox.prototype.write = function (t) {
            (this.version = 0), (this.flags = 0), (this.size = this.extended_language.length), this.writeHeader(t), t.writeString(this.extended_language);
        }),
        (u.elstBox.prototype.write = function (t) {
            (this.version = 0), (this.flags = 0), (this.size = 4 + 12 * this.entries.length), this.writeHeader(t), t.writeUint32(this.entries.length);
            for (var e = 0; e < this.entries.length; e++) {
                var i = this.entries[e];
                t.writeUint32(i.segment_duration), t.writeInt32(i.media_time), t.writeInt16(i.media_rate_integer), t.writeInt16(i.media_rate_fraction);
            }
        }),
        (u.emsgBox.prototype.write = function (t) {
            (this.version = 0),
                (this.flags = 0),
                (this.size = 16 + this.message_data.length + (this.scheme_id_uri.length + 1) + (this.value.length + 1)),
                this.writeHeader(t),
                t.writeCString(this.scheme_id_uri),
                t.writeCString(this.value),
                t.writeUint32(this.timescale),
                t.writeUint32(this.presentation_time_delta),
                t.writeUint32(this.event_duration),
                t.writeUint32(this.id),
                t.writeUint8Array(this.message_data);
        }),
        (u.ftypBox.prototype.write = function (t) {
            (this.size = 8 + 4 * this.compatible_brands.length), this.writeHeader(t), t.writeString(this.major_brand, null, 4), t.writeUint32(this.minor_version);
            for (var e = 0; e < this.compatible_brands.length; e++) t.writeString(this.compatible_brands[e], null, 4);
        }),
        (u.hdlrBox.prototype.write = function (t) {
            (this.size = 20 + this.name.length + 1),
                (this.version = 0),
                (this.flags = 0),
                this.writeHeader(t),
                t.writeUint32(0),
                t.writeString(this.handler, null, 4),
                t.writeUint32(0),
                t.writeUint32(0),
                t.writeUint32(0),
                t.writeCString(this.name);
        }),
        (u.kindBox.prototype.write = function (t) {
            (this.version = 0), (this.flags = 0), (this.size = this.schemeURI.length + 1 + (this.value.length + 1)), this.writeHeader(t), t.writeCString(this.schemeURI), t.writeCString(this.value);
        }),
        (u.mdhdBox.prototype.write = function (t) {
            (this.size = 20),
                (this.flags = 0),
                (this.version = 0),
                this.writeHeader(t),
                t.writeUint32(this.creation_time),
                t.writeUint32(this.modification_time),
                t.writeUint32(this.timescale),
                t.writeUint32(this.duration),
                t.writeUint16(this.language),
                t.writeUint16(0);
        }),
        (u.mehdBox.prototype.write = function (t) {
            (this.version = 0), (this.flags = 0), (this.size = 4), this.writeHeader(t), t.writeUint32(this.fragment_duration);
        }),
        (u.mfhdBox.prototype.write = function (t) {
            (this.version = 0), (this.flags = 0), (this.size = 4), this.writeHeader(t), t.writeUint32(this.sequence_number);
        }),
        (u.mvhdBox.prototype.write = function (t) {
            (this.version = 0),
                (this.flags = 0),
                (this.size = 96),
                this.writeHeader(t),
                t.writeUint32(this.creation_time),
                t.writeUint32(this.modification_time),
                t.writeUint32(this.timescale),
                t.writeUint32(this.duration),
                t.writeUint32(this.rate),
                t.writeUint16(this.volume << 8),
                t.writeUint16(0),
                t.writeUint32(0),
                t.writeUint32(0),
                t.writeUint32Array(this.matrix),
                t.writeUint32(0),
                t.writeUint32(0),
                t.writeUint32(0),
                t.writeUint32(0),
                t.writeUint32(0),
                t.writeUint32(0),
                t.writeUint32(this.next_track_id);
        }),
        (u.SampleEntry.prototype.writeHeader = function (t) {
            (this.size = 8), u.Box.prototype.writeHeader.call(this, t), t.writeUint8(0), t.writeUint8(0), t.writeUint8(0), t.writeUint8(0), t.writeUint8(0), t.writeUint8(0), t.writeUint16(this.data_reference_index);
        }),
        (u.SampleEntry.prototype.writeFooter = function (t) {
            for (var e = 0; e < this.boxes.length; e++) this.boxes[e].write(t), (this.size += this.boxes[e].size);
            h.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size), t.adjustUint32(this.sizePosition, this.size);
        }),
        (u.SampleEntry.prototype.write = function (t) {
            this.writeHeader(t), t.writeUint8Array(this.data), (this.size += this.data.length), h.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size), t.adjustUint32(this.sizePosition, this.size);
        }),
        (u.VisualSampleEntry.prototype.write = function (t) {
            this.writeHeader(t),
                (this.size += 70),
                t.writeUint16(0),
                t.writeUint16(0),
                t.writeUint32(0),
                t.writeUint32(0),
                t.writeUint32(0),
                t.writeUint16(this.width),
                t.writeUint16(this.height),
                t.writeUint32(this.horizresolution),
                t.writeUint32(this.vertresolution),
                t.writeUint32(0),
                t.writeUint16(this.frame_count),
                t.writeUint8(Math.min(31, this.compressorname.length)),
                t.writeString(this.compressorname, null, 31),
                t.writeUint16(this.depth),
                t.writeInt16(-1),
                this.writeFooter(t);
        }),
        (u.AudioSampleEntry.prototype.write = function (t) {
            this.writeHeader(t),
                (this.size += 20),
                t.writeUint32(0),
                t.writeUint32(0),
                t.writeUint16(this.channel_count),
                t.writeUint16(this.samplesize),
                t.writeUint16(0),
                t.writeUint16(0),
                t.writeUint32(this.samplerate << 16),
                this.writeFooter(t);
        }),
        (u.stppSampleEntry.prototype.write = function (t) {
            this.writeHeader(t),
                (this.size += this.namespace.length + 1 + this.schema_location.length + 1 + this.auxiliary_mime_types.length + 1),
                t.writeCString(this.namespace),
                t.writeCString(this.schema_location),
                t.writeCString(this.auxiliary_mime_types),
                this.writeFooter(t);
        }),
        (u.SampleGroupEntry.prototype.write = function (t) {
            t.writeUint8Array(this.data);
        }),
        (u.sbgpBox.prototype.write = function (t) {
            (this.version = 1), (this.flags = 0), (this.size = 12 + 8 * this.entries.length), this.writeHeader(t), t.writeString(this.grouping_type, null, 4), t.writeUint32(this.grouping_type_parameter), t.writeUint32(this.entries.length);
            for (var e = 0; e < this.entries.length; e++) {
                var i = this.entries[e];
                t.writeInt32(i.sample_count), t.writeInt32(i.group_description_index);
            }
        }),
        (u.sgpdBox.prototype.write = function (t) {
            var e, i;
            for (this.flags = 0, this.size = 12, e = 0; e < this.entries.length; e++) (i = this.entries[e]), 1 === this.version && (0 === this.default_length && (this.size += 4), (this.size += i.data.length));
            for (
                this.writeHeader(t),
                t.writeString(this.grouping_type, null, 4),
                1 === this.version && t.writeUint32(this.default_length),
                this.version >= 2 && t.writeUint32(this.default_sample_description_index),
                t.writeUint32(this.entries.length),
                e = 0;
                e < this.entries.length;
                e++
            )
                (i = this.entries[e]), 1 === this.version && 0 === this.default_length && t.writeUint32(i.description_length), i.write(t);
        }),
        (u.sidxBox.prototype.write = function (t) {
            (this.version = 0),
                (this.flags = 0),
                (this.size = 20 + 12 * this.references.length),
                this.writeHeader(t),
                t.writeUint32(this.reference_ID),
                t.writeUint32(this.timescale),
                t.writeUint32(this.earliest_presentation_time),
                t.writeUint32(this.first_offset),
                t.writeUint16(0),
                t.writeUint16(this.references.length);
            for (var e = 0; e < this.references.length; e++) {
                var i = this.references[e];
                t.writeUint32((i.reference_type << 31) | i.referenced_size), t.writeUint32(i.subsegment_duration), t.writeUint32((i.starts_with_SAP << 31) | (i.SAP_type << 28) | i.SAP_delta_time);
            }
        }),
        (u.stcoBox.prototype.write = function (t) {
            (this.version = 0), (this.flags = 0), (this.size = 4 + 4 * this.chunk_offsets.length), this.writeHeader(t), t.writeUint32(this.chunk_offsets.length), t.writeUint32Array(this.chunk_offsets);
        }),
        (u.stscBox.prototype.write = function (t) {
            var e;
            for (this.version = 0, this.flags = 0, this.size = 4 + 12 * this.first_chunk.length, this.writeHeader(t), t.writeUint32(this.first_chunk.length), e = 0; e < this.first_chunk.length; e++)
                t.writeUint32(this.first_chunk[e]), t.writeUint32(this.samples_per_chunk[e]), t.writeUint32(this.sample_description_index[e]);
        }),
        (u.stsdBox.prototype.write = function (t) {
            var e;
            for (this.version = 0, this.flags = 0, this.size = 0, this.writeHeader(t), t.writeUint32(this.entries.length), this.size += 4, e = 0; e < this.entries.length; e++) this.entries[e].write(t), (this.size += this.entries[e].size);
            h.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size), t.adjustUint32(this.sizePosition, this.size);
        }),
        (u.stshBox.prototype.write = function (t) {
            var e;
            for (this.version = 0, this.flags = 0, this.size = 4 + 8 * this.shadowed_sample_numbers.length, this.writeHeader(t), t.writeUint32(this.shadowed_sample_numbers.length), e = 0; e < this.shadowed_sample_numbers.length; e++)
                t.writeUint32(this.shadowed_sample_numbers[e]), t.writeUint32(this.sync_sample_numbers[e]);
        }),
        (u.stssBox.prototype.write = function (t) {
            (this.version = 0), (this.flags = 0), (this.size = 4 + 4 * this.sample_numbers.length), this.writeHeader(t), t.writeUint32(this.sample_numbers.length), t.writeUint32Array(this.sample_numbers);
        }),
        (u.stszBox.prototype.write = function (t) {
            var e,
                i = !0;
            if (((this.version = 0), (this.flags = 0), this.sample_sizes.length > 0))
                for (e = 0; e + 1 < this.sample_sizes.length;) {
                    if (this.sample_sizes[e + 1] !== this.sample_sizes[0]) {
                        i = !1;
                        break;
                    }
                    e++;
                }
            else i = !1;
            (this.size = 8),
                i || (this.size += 4 * this.sample_sizes.length),
                this.writeHeader(t),
                i ? t.writeUint32(this.sample_sizes[0]) : t.writeUint32(0),
                t.writeUint32(this.sample_sizes.length),
                i || t.writeUint32Array(this.sample_sizes);
        }),
        (u.sttsBox.prototype.write = function (t) {
            var e;
            for (this.version = 0, this.flags = 0, this.size = 4 + 8 * this.sample_counts.length, this.writeHeader(t), t.writeUint32(this.sample_counts.length), e = 0; e < this.sample_counts.length; e++)
                t.writeUint32(this.sample_counts[e]), t.writeUint32(this.sample_deltas[e]);
        }),
        (u.tfdtBox.prototype.write = function (t) {
            (this.version = this.baseMediaDecodeTime > 4294967295 ? 1 : 0),
                (this.flags = 0),
                (this.size = 4),
                1 === this.version && (this.size += 4),
                this.writeHeader(t),
                1 === this.version ? t.writeUint64(this.baseMediaDecodeTime) : t.writeUint32(this.baseMediaDecodeTime);
        }),
        (u.tfhdBox.prototype.write = function (t) {
            (this.version = 0),
                (this.size = 4),
                this.flags & u.TFHD_FLAG_BASE_DATA_OFFSET && (this.size += 8),
                this.flags & u.TFHD_FLAG_SAMPLE_DESC && (this.size += 4),
                this.flags & u.TFHD_FLAG_SAMPLE_DUR && (this.size += 4),
                this.flags & u.TFHD_FLAG_SAMPLE_SIZE && (this.size += 4),
                this.flags & u.TFHD_FLAG_SAMPLE_FLAGS && (this.size += 4),
                this.writeHeader(t),
                t.writeUint32(this.track_id),
                this.flags & u.TFHD_FLAG_BASE_DATA_OFFSET && t.writeUint64(this.base_data_offset),
                this.flags & u.TFHD_FLAG_SAMPLE_DESC && t.writeUint32(this.default_sample_description_index),
                this.flags & u.TFHD_FLAG_SAMPLE_DUR && t.writeUint32(this.default_sample_duration),
                this.flags & u.TFHD_FLAG_SAMPLE_SIZE && t.writeUint32(this.default_sample_size),
                this.flags & u.TFHD_FLAG_SAMPLE_FLAGS && t.writeUint32(this.default_sample_flags);
        }),
        (u.tkhdBox.prototype.write = function (t) {
            (this.version = 0),
                (this.size = 80),
                this.writeHeader(t),
                t.writeUint32(this.creation_time),
                t.writeUint32(this.modification_time),
                t.writeUint32(this.track_id),
                t.writeUint32(0),
                t.writeUint32(this.duration),
                t.writeUint32(0),
                t.writeUint32(0),
                t.writeInt16(this.layer),
                t.writeInt16(this.alternate_group),
                t.writeInt16(this.volume << 8),
                t.writeUint16(0),
                t.writeInt32Array(this.matrix),
                t.writeUint32(this.width),
                t.writeUint32(this.height);
        }),
        (u.trexBox.prototype.write = function (t) {
            (this.version = 0),
                (this.flags = 0),
                (this.size = 20),
                this.writeHeader(t),
                t.writeUint32(this.track_id),
                t.writeUint32(this.default_sample_description_index),
                t.writeUint32(this.default_sample_duration),
                t.writeUint32(this.default_sample_size),
                t.writeUint32(this.default_sample_flags);
        }),
        (u.trunBox.prototype.write = function (t) {
            (this.version = 0),
                (this.size = 4),
                this.flags & u.TRUN_FLAGS_DATA_OFFSET && (this.size += 4),
                this.flags & u.TRUN_FLAGS_FIRST_FLAG && (this.size += 4),
                this.flags & u.TRUN_FLAGS_DURATION && (this.size += 4 * this.sample_duration.length),
                this.flags & u.TRUN_FLAGS_SIZE && (this.size += 4 * this.sample_size.length),
                this.flags & u.TRUN_FLAGS_FLAGS && (this.size += 4 * this.sample_flags.length),
                this.flags & u.TRUN_FLAGS_CTS_OFFSET && (this.size += 4 * this.sample_composition_time_offset.length),
                this.writeHeader(t),
                t.writeUint32(this.sample_count),
                this.flags & u.TRUN_FLAGS_DATA_OFFSET && ((this.data_offset_position = t.getPosition()), t.writeInt32(this.data_offset)),
                this.flags & u.TRUN_FLAGS_FIRST_FLAG && t.writeUint32(this.first_sample_flags);
            for (var e = 0; e < this.sample_count; e++)
                this.flags & u.TRUN_FLAGS_DURATION && t.writeUint32(this.sample_duration[e]),
                    this.flags & u.TRUN_FLAGS_SIZE && t.writeUint32(this.sample_size[e]),
                    this.flags & u.TRUN_FLAGS_FLAGS && t.writeUint32(this.sample_flags[e]),
                    this.flags & u.TRUN_FLAGS_CTS_OFFSET && (0 === this.version ? t.writeUint32(this.sample_composition_time_offset[e]) : t.writeInt32(this.sample_composition_time_offset[e]));
        }),
        (u["url Box"].prototype.write = function (t) {
            (this.version = 0), this.location ? ((this.flags = 0), (this.size = this.location.length + 1)) : ((this.flags = 1), (this.size = 0)), this.writeHeader(t), this.location && t.writeCString(this.location);
        }),
        (u["urn Box"].prototype.write = function (t) {
            (this.version = 0), (this.flags = 0), (this.size = this.name.length + 1 + (this.location ? this.location.length + 1 : 0)), this.writeHeader(t), t.writeCString(this.name), this.location && t.writeCString(this.location);
        }),
        (u.vmhdBox.prototype.write = function (t) {
            (this.version = 0), (this.flags = 1), (this.size = 8), this.writeHeader(t), t.writeUint16(this.graphicsmode), t.writeUint16Array(this.opcolor);
        }),
        (u.cttsBox.prototype.unpack = function (t) {
            var e, i, s;
            for (s = 0, e = 0; e < this.sample_counts.length; e++) for (i = 0; i < this.sample_counts[e]; i++) (t[s].pts = t[s].dts + this.sample_offsets[e]), s++;
        }),
        (u.sttsBox.prototype.unpack = function (t) {
            var e, i, s;
            for (s = 0, e = 0; e < this.sample_counts.length; e++) for (i = 0; i < this.sample_counts[e]; i++) (t[s].dts = 0 === s ? 0 : t[s - 1].dts + this.sample_deltas[e]), s++;
        }),
        (u.stcoBox.prototype.unpack = function (t) {
            var e;
            for (e = 0; e < this.chunk_offsets.length; e++) t[e].offset = this.chunk_offsets[e];
        }),
        (u.stscBox.prototype.unpack = function (t) {
            var e, i, s, r, n;
            for (r = 0, n = 0, e = 0; e < this.first_chunk.length; e++)
                for (i = 0; i < (e + 1 < this.first_chunk.length ? this.first_chunk[e + 1] : 1 / 0); i++)
                    for (n++, s = 0; s < this.samples_per_chunk[e]; s++) {
                        if (!t[r]) return;
                        (t[r].description_index = this.sample_description_index[e]), (t[r].chunk_index = n), r++;
                    }
        }),
        (u.stszBox.prototype.unpack = function (t) {
            var e;
            for (e = 0; e < this.sample_sizes.length; e++) t[e].size = this.sample_sizes[e];
        }),
        (u.DIFF_BOXES_PROP_NAMES = ["boxes", "entries", "references", "subsamples", "items", "item_infos", "extents", "associations", "subsegments", "ranges", "seekLists", "seekPoints", "esd", "levels"]),
        (u.DIFF_PRIMITIVE_ARRAY_PROP_NAMES = [
            "compatible_brands",
            "matrix",
            "opcolor",
            "sample_counts",
            "sample_counts",
            "sample_deltas",
            "first_chunk",
            "samples_per_chunk",
            "sample_sizes",
            "chunk_offsets",
            "sample_offsets",
            "sample_description_index",
            "sample_duration",
        ]),
        (u.boxEqualFields = function (t, e) {
            var i;
            if (t && !e) return !1;
            for (i in t)
                if (
                    !(
                        u.DIFF_BOXES_PROP_NAMES.indexOf(i) > -1 ||
                        t[i] instanceof u.Box ||
                        e[i] instanceof u.Box ||
                        void 0 === t[i] ||
                        void 0 === e[i] ||
                        "function" == typeof t[i] ||
                        "function" == typeof e[i] ||
                        (t.subBoxNames && t.subBoxNames.indexOf(i.slice(0, 4)) > -1) ||
                        (e.subBoxNames && e.subBoxNames.indexOf(i.slice(0, 4)) > -1) ||
                        "data" === i ||
                        "start" === i ||
                        "size" === i ||
                        "creation_time" === i ||
                        "modification_time" === i ||
                        u.DIFF_PRIMITIVE_ARRAY_PROP_NAMES.indexOf(i) > -1 ||
                        t[i] === e[i]
                    )
                )
                    return !1;
            return !0;
        }),
        (u.boxEqual = function (t, e) {
            if (!u.boxEqualFields(t, e)) return !1;
            for (var i = 0; i < u.DIFF_BOXES_PROP_NAMES.length; i++) {
                var s = u.DIFF_BOXES_PROP_NAMES[i];
                if (t[s] && e[s] && !u.boxEqual(t[s], e[s])) return !1;
            }
            return !0;
        }),
        ((c = function () { }).prototype.parseSample = function (t) {
            var e,
                i = {};
            i.resources = [];
            var s = new d(t.data.buffer);
            if (t.subsamples && 0 !== t.subsamples.length) {
                if (((i.documentString = s.readString(t.subsamples[0].size)), t.subsamples.length > 1)) for (e = 1; e < t.subsamples.length; e++) i.resources[e] = s.readUint8Array(t.subsamples[e].size);
            } else i.documentString = s.readString(t.data.length);
            return "undefined" != typeof DOMParser && (i.document = new DOMParser().parseFromString(i.documentString, "application/xml")), i;
        }),
        ((m = function () { }).prototype.parseSample = function (t) {
            return new d(t.data.buffer).readString(t.data.length);
        }),
        (m.prototype.parseConfig = function (t) {
            var e = new d(t.buffer);
            return e.readUint32(), e.readCString();
        }),
        (r.XMLSubtitlein4Parser = c),
        (r.Textin4Parser = m),
        ((g = function (t) {
            (this.stream = t || new p()),
                (this.boxes = []),
                (this.mdats = []),
                (this.moofs = []),
                (this.isProgressive = !1),
                (this.moovStartFound = !1),
                (this.onMoovStart = null),
                (this.moovStartSent = !1),
                (this.onReady = null),
                (this.readySent = !1),
                (this.onSegment = null),
                (this.onSamples = null),
                (this.onError = null),
                (this.sampleListBuilt = !1),
                (this.fragmentedTracks = []),
                (this.extractedTracks = []),
                (this.isFragmentationInitialized = !1),
                (this.sampleProcessingStarted = !1),
                (this.nextMoofNumber = 0),
                (this.itemListBuilt = !1),
                (this.onSidx = null),
                (this.sidxSent = !1);
        }).prototype.setSegmentOptions = function (t, e, i) {
            var s = this.getTrackById(t);
            if (s) {
                var r = {};
                this.fragmentedTracks.push(r),
                    (r.id = t),
                    (r.user = e),
                    (r.trak = s),
                    (s.nextSample = 0),
                    (r.segmentStream = null),
                    (r.nb_samples = 1e3),
                    (r.rapAlignement = !0),
                    i && (i.nbSamples && (r.nb_samples = i.nbSamples), i.rapAlignement && (r.rapAlignement = i.rapAlignement));
            }
        }),
        (g.prototype.unsetSegmentOptions = function (t) {
            for (var e = -1, i = 0; i < this.fragmentedTracks.length; i++) this.fragmentedTracks[i].id == t && (e = i);
            e > -1 && this.fragmentedTracks.splice(e, 1);
        }),
        (g.prototype.setExtractionOptions = function (t, e, i) {
            var s = this.getTrackById(t);
            if (s) {
                var r = {};
                this.extractedTracks.push(r), (r.id = t), (r.user = e), (r.trak = s), (s.nextSample = 0), (r.nb_samples = 1e3), (r.samples = []), i && i.nbSamples && (r.nb_samples = i.nbSamples);
            }
        }),
        (g.prototype.unsetExtractionOptions = function (t) {
            for (var e = -1, i = 0; i < this.extractedTracks.length; i++) this.extractedTracks[i].id == t && (e = i);
            e > -1 && this.extractedTracks.splice(e, 1);
        }),
        (g.prototype.parse = function () {
            var t, e, i;
            if (!this.restoreParsePosition || this.restoreParsePosition())
                for (; ;) {
                    if (this.hasIncompleteMdat && this.hasIncompleteMdat()) {
                        if (this.processIncompleteMdat()) continue;
                        return;
                    }
                    if ((this.saveParsePosition && this.saveParsePosition(), (t = u.parseOneBox(this.stream, !1)).code === u.ERR_NOT_ENOUGH_DATA)) {
                        if (this.processIncompleteBox && this.processIncompleteBox(t)) continue;
                        return;
                    }
                    switch (((i = "uuid" !== (e = t.box).type ? e.type : e.uuid), this.boxes.push(e), i)) {
                        case "mdat":
                            this.mdats.push(e);
                            break;
                        case "moof":
                            this.moofs.push(e);
                            break;
                        case "moov":
                            (this.moovStartFound = !0), 0 === this.mdats.length && (this.isProgressive = !0);
                        default:
                            void 0 !== this[i] && h.warn("ISOFile", "Duplicate Box of type: " + i + ", overriding previous occurrence"), (this[i] = e);
                    }
                    this.updateUsedBytes && this.updateUsedBytes(e, t);
                }
        }),
        (g.prototype.checkBuffer = function (t) {
            if (null == t) throw "Buffer must be defined and non empty";
            if (void 0 === t.fileStart) throw "Buffer must have a fileStart property";
            return 0 === t.byteLength
                ? (h.warn("ISOFile", "Ignoring empty buffer (fileStart: " + t.fileStart + ")"), this.stream.logBufferLevel(), !1)
                : (h.info("ISOFile", "Processing buffer (fileStart: " + t.fileStart + ")"),
                    (t.usedBytes = 0),
                    this.stream.insertBuffer(t),
                    this.stream.logBufferLevel(),
                    !!this.stream.initialized() || (h.warn("ISOFile", "Not ready to start parsing"), !1));
        }),
        (g.prototype.appendBuffer = function (t, e) {
            var i;
            if (this.checkBuffer(t))
                return (
                    this.parse(),
                    this.moovStartFound && !this.moovStartSent && ((this.moovStartSent = !0), this.onMoovStart && this.onMoovStart()),
                    this.moov
                        ? (this.sampleListBuilt || (this.buildSampleLists(), (this.sampleListBuilt = !0)),
                            this.updateSampleLists(),
                            this.onReady && !this.readySent && ((this.readySent = !0), this.onReady(this.getInfo())),
                            this.processSamples(e),
                            this.nextSeekPosition ? ((i = this.nextSeekPosition), (this.nextSeekPosition = void 0)) : (i = this.nextParsePosition),
                            this.stream.getEndFilePositionAfter && (i = this.stream.getEndFilePositionAfter(i)))
                        : (i = this.nextParsePosition ? this.nextParsePosition : 0),
                    this.sidx && this.onSidx && !this.sidxSent && (this.onSidx(this.sidx), (this.sidxSent = !0)),
                    this.meta && (this.flattenItemInfo && !this.itemListBuilt && (this.flattenItemInfo(), (this.itemListBuilt = !0)), this.processItems && this.processItems(this.onItem)),
                    this.stream.cleanBuffers &&
                    (h.info("ISOFile", "Done processing buffer (fileStart: " + t.fileStart + ") - next buffer to fetch should have a fileStart position of " + i),
                        this.stream.logBufferLevel(),
                        this.stream.cleanBuffers(),
                        this.stream.logBufferLevel(!0),
                        h.info("ISOFile", "Sample data size in memory: " + this.getAllocatedSampleDataSize())),
                    i
                );
        }),
        (g.prototype.getInfo = function () {
            var t,
                e,
                i,
                s,
                r,
                n = {},
                a = new Date("1904-01-01T00:00:00Z").getTime();
            if (this.moov)
                for (
                    n.hasMoov = !0,
                    n.duration = this.moov.mvhd.duration,
                    n.timescale = this.moov.mvhd.timescale,
                    n.isFragmented = null != this.moov.mvex,
                    n.isFragmented && this.moov.mvex.mehd && (n.fragment_duration = this.moov.mvex.mehd.fragment_duration),
                    n.isProgressive = this.isProgressive,
                    n.hasIOD = null != this.moov.iods,
                    n.brands = [],
                    n.brands.push(this.ftyp.major_brand),
                    n.brands = n.brands.concat(this.ftyp.compatible_brands),
                    n.created = new Date(a + 1e3 * this.moov.mvhd.creation_time),
                    n.modified = new Date(a + 1e3 * this.moov.mvhd.modification_time),
                    n.tracks = [],
                    n.audioTracks = [],
                    n.videoTracks = [],
                    n.subtitleTracks = [],
                    n.metadataTracks = [],
                    n.hintTracks = [],
                    n.otherTracks = [],
                    t = 0;
                    t < this.moov.traks.length;
                    t++
                ) {
                    if (((r = (i = this.moov.traks[t]).mdia.minf.stbl.stsd.entries[0]), (s = {}), n.tracks.push(s), (s.id = i.tkhd.track_id), (s.name = i.mdia.hdlr.name), (s.references = []), i.tref))
                        for (e = 0; e < i.tref.boxes.length; e++) (ref = {}), s.references.push(ref), (ref.type = i.tref.boxes[e].type), (ref.track_ids = i.tref.boxes[e].track_ids);
                    i.edts && (s.edits = i.edts.elst.entries),
                        (s.created = new Date(a + 1e3 * i.tkhd.creation_time)),
                        (s.modified = new Date(a + 1e3 * i.tkhd.modification_time)),
                        (s.movie_duration = i.tkhd.duration),
                        (s.movie_timescale = n.timescale),
                        (s.layer = i.tkhd.layer),
                        (s.alternate_group = i.tkhd.alternate_group),
                        (s.volume = i.tkhd.volume),
                        (s.matrix = i.tkhd.matrix),
                        (s.track_width = i.tkhd.width / 65536),
                        (s.track_height = i.tkhd.height / 65536),
                        (s.timescale = i.mdia.mdhd.timescale),
                        (s.cts_shift = i.mdia.minf.stbl.cslg),
                        (s.duration = i.mdia.mdhd.duration),
                        (s.samples_duration = i.samples_duration),
                        (s.codec = r.getCodec()),
                        (s.kind = i.udta && i.udta.kinds.length ? i.udta.kinds[0] : { schemeURI: "", value: "" }),
                        (s.language = i.mdia.elng ? i.mdia.elng.extended_language : i.mdia.mdhd.languageString),
                        (s.nb_samples = i.samples.length),
                        (s.size = i.samples_size),
                        (s.bitrate = (8 * s.size * s.timescale) / s.samples_duration),
                        r.isAudio()
                            ? ((s.type = "audio"), n.audioTracks.push(s), (s.audio = {}), (s.audio.sample_rate = r.getSampleRate()), (s.audio.channel_count = r.getChannelCount()), (s.audio.sample_size = r.getSampleSize()))
                            : r.isVideo()
                                ? ((s.type = "video"), n.videoTracks.push(s), (s.video = {}), (s.video.width = r.getWidth()), (s.video.height = r.getHeight()))
                                : r.isSubtitle()
                                    ? ((s.type = "subtitles"), n.subtitleTracks.push(s))
                                    : r.isHint()
                                        ? ((s.type = "metadata"), n.hintTracks.push(s))
                                        : r.isMetadata()
                                            ? ((s.type = "metadata"), n.metadataTracks.push(s))
                                            : ((s.type = "metadata"), n.otherTracks.push(s));
                }
            else n.hasMoov = !1;
            if (((n.mime = ""), n.hasMoov && n.tracks)) {
                for (
                    n.videoTracks && n.videoTracks.length > 0 ? (n.mime += 'video/mp4; codecs="') : n.audioTracks && n.audioTracks.length > 0 ? (n.mime += 'audio/mp4; codecs="') : (n.mime += 'application/mp4; codecs="'), t = 0;
                    t < n.tracks.length;
                    t++
                )
                    0 !== t && (n.mime += ","), (n.mime += n.tracks[t].codec);
                (n.mime += '"; profiles="'), (n.mime += this.ftyp.compatible_brands.join()), (n.mime += '"');
            }
            return n;
        }),
        (g.prototype.processSamples = function (t) {
            var e, i;
            if (this.sampleProcessingStarted) {
                if (this.isFragmentationInitialized && null !== this.onSegment)
                    for (e = 0; e < this.fragmentedTracks.length; e++) {
                        var s = this.fragmentedTracks[e];
                        for (i = s.trak; i.nextSample < i.samples.length && this.sampleProcessingStarted;) {
                            h.debug("ISOFile", "Creating media fragment on track #" + s.id + " for sample " + i.nextSample);
                            var r = this.createFragment(s.id, i.nextSample, s.segmentStream);
                            if (
                                !r ||
                                ((s.segmentStream = r),
                                    i.nextSample++,
                                    (i.nextSample % s.nb_samples == 0 || t || i.nextSample >= i.samples.length) &&
                                    (h.info("ISOFile", "Sending fragmented data on track #" + s.id + " for samples [" + Math.max(0, i.nextSample - s.nb_samples) + "," + (i.nextSample - 1) + "]"),
                                        h.info("ISOFile", "Sample data size in memory: " + this.getAllocatedSampleDataSize()),
                                        this.onSegment && this.onSegment(s.id, s.user, s.segmentStream.buffer, i.nextSample, t || i.nextSample >= i.samples.length),
                                        (s.segmentStream = null),
                                        s !== this.fragmentedTracks[e]))
                            )
                                break;
                        }
                    }
                if (null !== this.onSamples)
                    for (e = 0; e < this.extractedTracks.length; e++) {
                        var n = this.extractedTracks[e];
                        for (i = n.trak; i.nextSample < i.samples.length && this.sampleProcessingStarted;) {
                            h.debug("ISOFile", "Exporting on track #" + n.id + " sample #" + i.nextSample);
                            var a = this.getSample(i, i.nextSample);
                            if (
                                !a ||
                                (i.nextSample++,
                                    n.samples.push(a),
                                    (i.nextSample % n.nb_samples == 0 || i.nextSample >= i.samples.length) &&
                                    (h.debug("ISOFile", "Sending samples on track #" + n.id + " for sample " + i.nextSample), this.onSamples && this.onSamples(n.id, n.user, n.samples), (n.samples = []), n !== this.extractedTracks[e]))
                            )
                                break;
                        }
                    }
            }
        }),
        (g.prototype.getBox = function (t) {
            var e = this.getBoxes(t, !0);
            return e.length ? e[0] : null;
        }),
        (g.prototype.getBoxes = function (t, e) {
            var i = [];
            return g._sweep.call(this, t, i, e), i;
        }),
        (g._sweep = function (t, e, i) {
            for (var s in (this.type && this.type == t && e.push(this), this.boxes)) {
                if (e.length && i) return;
                g._sweep.call(this.boxes[s], t, e, i);
            }
        }),
        (g.prototype.getTrackSamplesInfo = function (t) {
            var e = this.getTrackById(t);
            return e ? e.samples : void 0;
        }),
        (g.prototype.getTrackSample = function (t, e) {
            var i = this.getTrackById(t);
            return this.getSample(i, e);
        }),
        (g.prototype.releaseUsedSamples = function (t, e) {
            var i = 0,
                s = this.getTrackById(t);
            s.lastValidSample || (s.lastValidSample = 0);
            for (var r = s.lastValidSample; r < e; r++) i += this.releaseSample(s, r);
            h.info("ISOFile", "Track #" + t + " released samples up to " + e + " (released size: " + i + ", remaining: " + this.samplesDataSize + ")"), (s.lastValidSample = e);
        }),
        (g.prototype.start = function () {
            (this.sampleProcessingStarted = !0), this.processSamples(!1);
        }),
        (g.prototype.stop = function () {
            this.sampleProcessingStarted = !1;
        }),
        (g.prototype.flush = function () {
            h.info("ISOFile", "Flushing remaining samples"), this.updateSampleLists(), this.processSamples(!0), this.stream.cleanBuffers(), this.stream.logBufferLevel(!0);
        }),
        (g.prototype.seekTrack = function (t, e, i) {
            var s,
                r,
                n,
                a,
                o = 0,
                d = 0;
            if (0 === i.samples.length) return h.info("ISOFile", "No sample in track, cannot seek! Using time " + h.getDurationString(0, 1) + " and offset: 0"), { offset: 0, time: 0 };
            for (s = 0; s < i.samples.length; s++) {
                if (((r = i.samples[s]), 0 === s)) (d = 0), (a = r.timescale);
                else if (r.cts > t * r.timescale) {
                    d = s - 1;
                    break;
                }
                e && r.is_sync && (o = s);
            }
            for (e && (d = o), t = i.samples[d].cts, i.nextSample = d; i.samples[d].alreadyRead === i.samples[d].size && i.samples[d + 1];) d++;
            return (
                (n = i.samples[d].offset + i.samples[d].alreadyRead),
                h.info("ISOFile", "Seeking to " + (e ? "RAP" : "") + " sample #" + i.nextSample + " on track " + i.tkhd.track_id + ", time " + h.getDurationString(t, a) + " and offset: " + n),
                { offset: n, time: t / a }
            );
        }),
        (g.prototype.seek = function (t, e) {
            var i,
                s,
                r,
                n = this.moov,
                a = { offset: 1 / 0, time: 1 / 0 };
            if (this.moov) {
                for (r = 0; r < n.traks.length; r++) (i = n.traks[r]), (s = this.seekTrack(t, e, i)).offset < a.offset && (a.offset = s.offset), s.time < a.time && (a.time = s.time);
                return (
                    h.info("ISOFile", "Seeking at time " + h.getDurationString(a.time, 1) + " needs a buffer with a fileStart position of " + a.offset),
                    a.offset === 1 / 0 ? (a = { offset: this.nextParsePosition, time: 0 }) : (a.offset = this.stream.getEndFilePositionAfter(a.offset)),
                    h.info("ISOFile", "Adjusted seek position (after checking data already in buffer): " + a.offset),
                    a
                );
            }
            throw "Cannot seek: moov not received!";
        }),
        (g.prototype.equal = function (t) {
            for (var e = 0; e < this.boxes.length && e < t.boxes.length;) {
                var i = this.boxes[e],
                    s = t.boxes[e];
                if (!u.boxEqual(i, s)) return !1;
                e++;
            }
            return !0;
        }),
        (r.ISOFile = g),
        (g.prototype.lastBoxStartPosition = 0),
        (g.prototype.parsingMdat = null),
        (g.prototype.nextParsePosition = 0),
        (g.prototype.discardMdatData = !1),
        (g.prototype.processIncompleteBox = function (t) {
            var e;
            return "mdat" === t.type
                ? ((e = new u[t.type + "Box"](t.size)),
                    (this.parsingMdat = e),
                    this.boxes.push(e),
                    this.mdats.push(e),
                    (e.start = t.start),
                    (e.hdr_size = t.hdr_size),
                    this.stream.addUsedBytes(e.hdr_size),
                    (this.lastBoxStartPosition = e.start + e.size),
                    this.stream.seek(e.start + e.size, !1, this.discardMdatData)
                        ? ((this.parsingMdat = null), !0)
                        : (this.moovStartFound ? (this.nextParsePosition = this.stream.findEndContiguousBuf()) : (this.nextParsePosition = e.start + e.size), !1))
                : ("moov" === t.type && ((this.moovStartFound = !0), 0 === this.mdats.length && (this.isProgressive = !0)),
                    this.stream.mergeNextBuffer && this.stream.mergeNextBuffer()
                        ? ((this.nextParsePosition = this.stream.getEndPosition()), !0)
                        : (t.type ? (this.moovStartFound ? (this.nextParsePosition = this.stream.getEndPosition()) : (this.nextParsePosition = this.stream.getPosition() + t.size)) : (this.nextParsePosition = this.stream.getEndPosition()),
                            !1));
        }),
        (g.prototype.hasIncompleteMdat = function () {
            return null !== this.parsingMdat;
        }),
        (g.prototype.processIncompleteMdat = function () {
            var t;
            return (
                (t = this.parsingMdat),
                this.stream.seek(t.start + t.size, !1, this.discardMdatData) ? (h.debug("ISOFile", "Found 'mdat' end in buffered data"), (this.parsingMdat = null), !0) : ((this.nextParsePosition = this.stream.findEndContiguousBuf()), !1)
            );
        }),
        (g.prototype.restoreParsePosition = function () {
            return this.stream.seek(this.lastBoxStartPosition, !0, this.discardMdatData);
        }),
        (g.prototype.saveParsePosition = function () {
            this.lastBoxStartPosition = this.stream.getPosition();
        }),
        (g.prototype.updateUsedBytes = function (t, e) {
            this.stream.addUsedBytes && ("mdat" === t.type ? (this.stream.addUsedBytes(t.hdr_size), this.discardMdatData && this.stream.addUsedBytes(t.size - t.hdr_size)) : this.stream.addUsedBytes(t.size));
        }),
        (g.prototype.add = u.Box.prototype.add),
        (g.prototype.addBox = u.Box.prototype.addBox),
        (g.prototype.init = function (t) {
            var e = t || {};
            this.add("ftyp")
                .set("major_brand", (e.brands && e.brands[0]) || "iso4")
                .set("minor_version", 0)
                .set("compatible_brands", e.brands || ["iso4"]);
            var i = this.add("moov");
            return (
                i
                    .add("mvhd")
                    .set("timescale", e.timescale || 600)
                    .set("rate", e.rate || 65536)
                    .set("creation_time", 0)
                    .set("modification_time", 0)
                    .set("duration", e.duration || 0)
                    .set("volume", e.width ? 0 : 256)
                    .set("matrix", [65536, 0, 0, 0, 65536, 0, 0, 0, 1073741824])
                    .set("next_track_id", 1),
                i.add("mvex"),
                this
            );
        }),
        (g.prototype.addTrack = function (t) {
            this.moov || this.init(t);
            var e = t || {};
            (e.width = e.width || 320), (e.height = e.height || 320), (e.id = e.id || this.moov.mvhd.next_track_id), (e.type = e.type || "avc1");
            var i = this.moov.add("trak");
            (this.moov.mvhd.next_track_id = e.id + 1),
                i
                    .add("tkhd")
                    .set("flags", u.TKHD_FLAG_ENABLED | u.TKHD_FLAG_IN_MOVIE | u.TKHD_FLAG_IN_PREVIEW)
                    .set("creation_time", 0)
                    .set("modification_time", 0)
                    .set("track_id", e.id)
                    .set("duration", e.duration || 0)
                    .set("layer", e.layer || 0)
                    .set("alternate_group", 0)
                    .set("volume", 1)
                    .set("matrix", [0, 0, 0, 0, 0, 0, 0, 0, 0])
                    .set("width", e.width)
                    .set("height", e.height);
            var s = i.add("mdia");
            s
                .add("mdhd")
                .set("creation_time", 0)
                .set("modification_time", 0)
                .set("timescale", e.timescale || 1)
                .set("duration", e.media_duration || 0)
                .set("language", e.language || "und"),
                s
                    .add("hdlr")
                    .set("handler", e.hdlr || "vide")
                    .set("name", e.name || "Track created with MP4Box.js"),
                s.add("elng").set("extended_language", e.language || "fr-FR");
            var r = s.add("minf");
            if (void 0 !== u[e.type + "SampleEntry"]) {
                var n = new u[e.type + "SampleEntry"]();
                n.data_reference_index = 1;
                var a = "";
                for (var o in u.sampleEntryCodes)
                    for (var h = u.sampleEntryCodes[o], l = 0; l < h.length; l++)
                        if (h.indexOf(e.type) > -1) {
                            a = o;
                            break;
                        }
                switch (a) {
                    case "Visual":
                        if (
                            (r.add("vmhd").set("graphicsmode", 0).set("opcolor", [0, 0, 0]),
                                n
                                    .set("width", e.width)
                                    .set("height", e.height)
                                    .set("horizresolution", 4718592)
                                    .set("vertresolution", 4718592)
                                    .set("frame_count", 1)
                                    .set("compressorname", e.type + " Compressor")
                                    .set("depth", 24),
                                e.avcDecoderConfigRecord)
                        ) {
                            var p = new u.avcCBox(),
                                f = new d(e.avcDecoderConfigRecord);
                            p.parse(f), n.addBox(p);
                        }
                        break;
                    case "Audio":
                        r.add("smhd").set("balance", e.balance || 0),
                            n
                                .set("channel_count", e.channel_count || 2)
                                .set("samplesize", e.samplesize || 16)
                                .set("samplerate", e.samplerate || 65536);
                        break;
                    case "Hint":
                        r.add("hmhd");
                        break;
                    case "Subtitle":
                        r.add("sthd"),
                            "stpp" === e.type &&
                            n
                                .set("namespace", e.namespace || "nonamespace")
                                .set("schema_location", e.schema_location || "")
                                .set("auxiliary_mime_types", e.auxiliary_mime_types || "");
                        break;
                    default:
                        r.add("nmhd");
                }
                e.description && n.addBox(e.description),
                    e.description_boxes &&
                    e.description_boxes.forEach(function (t) {
                        n.addBox(t);
                    }),
                    r.add("dinf").add("dref").addEntry(new u["url Box"]().set("flags", 1));
                var c = r.add("stbl");
                return (
                    c.add("stsd").addEntry(n),
                    c.add("stts").set("sample_counts", []).set("sample_deltas", []),
                    c.add("stsc").set("first_chunk", []).set("samples_per_chunk", []).set("sample_description_index", []),
                    c.add("stco").set("chunk_offsets", []),
                    c.add("stsz").set("sample_sizes", []),
                    this.moov.mvex
                        .add("trex")
                        .set("track_id", e.id)
                        .set("default_sample_description_index", e.default_sample_description_index || 1)
                        .set("default_sample_duration", e.default_sample_duration || 0)
                        .set("default_sample_size", e.default_sample_size || 0)
                        .set("default_sample_flags", e.default_sample_flags || 0),
                    this.buildTrakSampleLists(i),
                    e.id
                );
            }
        }),
        (u.Box.prototype.computeSize = function (t) {
            var e = t || new l();
            (e.endianness = l.BIG_ENDIAN), this.write(e);
        }),
        (g.prototype.addSample = function (t, e, i) {
            var s = i || {},
                r = {},
                n = this.getTrackById(t);
            if (null !== n) {
                (r.number = n.samples.length),
                    (r.track_id = n.tkhd.track_id),
                    (r.timescale = n.mdia.mdhd.timescale),
                    (r.description_index = s.sample_description_index ? s.sample_description_index - 1 : 0),
                    (r.description = n.mdia.minf.stbl.stsd.entries[r.description_index]),
                    (r.data = e),
                    (r.size = e.byteLength),
                    (r.alreadyRead = r.size),
                    (r.duration = s.duration || 1),
                    (r.cts = s.cts || 0),
                    (r.dts = s.dts || 0),
                    (r.is_sync = s.is_sync || !1),
                    (r.is_leading = s.is_leading || 0),
                    (r.depends_on = s.depends_on || 0),
                    (r.is_depended_on = s.is_depended_on || 0),
                    (r.has_redundancy = s.has_redundancy || 0),
                    (r.degradation_priority = s.degradation_priority || 0),
                    (r.offset = 0),
                    (r.subsamples = s.subsamples),
                    n.samples.push(r),
                    (n.samples_size += r.size),
                    (n.samples_duration += r.duration),
                    n.first_dts || (n.first_dts = s.dts),
                    this.processSamples();
                var a = this.createSingleSampleMoof(r);
                return this.addBox(a), a.computeSize(), (a.trafs[0].truns[0].data_offset = a.size + 8), (this.add("mdat").data = new Uint8Array(e)), r;
            }
        }),
        (g.prototype.createSingleSampleMoof = function (t) {
            var e = 0;
            e = t.is_sync ? 33554432 : 65536;
            var i = new u.moofBox();
            i.add("mfhd").set("sequence_number", this.nextMoofNumber), this.nextMoofNumber++;
            var s = i.add("traf"),
                r = this.getTrackById(t.track_id);
            return (
                s.add("tfhd").set("track_id", t.track_id).set("flags", u.TFHD_FLAG_DEFAULT_BASE_IS_MOOF),
                s.add("tfdt").set("baseMediaDecodeTime", t.dts - r.first_dts),
                s
                    .add("trun")
                    .set("flags", u.TRUN_FLAGS_DATA_OFFSET | u.TRUN_FLAGS_DURATION | u.TRUN_FLAGS_SIZE | u.TRUN_FLAGS_FLAGS | u.TRUN_FLAGS_CTS_OFFSET)
                    .set("data_offset", 0)
                    .set("first_sample_flags", 0)
                    .set("sample_count", 1)
                    .set("sample_duration", [t.duration])
                    .set("sample_size", [t.size])
                    .set("sample_flags", [e])
                    .set("sample_composition_time_offset", [t.cts - t.dts]),
                i
            );
        }),
        (g.prototype.lastMoofIndex = 0),
        (g.prototype.samplesDataSize = 0),
        (g.prototype.resetTables = function () {
            var t, e, i, s, r, n;
            for (this.initial_duration = this.moov.mvhd.duration, this.moov.mvhd.duration = 0, t = 0; t < this.moov.traks.length; t++) {
                ((e = this.moov.traks[t]).tkhd.duration = 0),
                    (e.mdia.mdhd.duration = 0),
                    ((e.mdia.minf.stbl.stco || e.mdia.minf.stbl.co64).chunk_offsets = []),
                    ((i = e.mdia.minf.stbl.stsc).first_chunk = []),
                    (i.samples_per_chunk = []),
                    (i.sample_description_index = []),
                    ((e.mdia.minf.stbl.stsz || e.mdia.minf.stbl.stz2).sample_sizes = []),
                    ((s = e.mdia.minf.stbl.stts).sample_counts = []),
                    (s.sample_deltas = []),
                    (r = e.mdia.minf.stbl.ctts) && ((r.sample_counts = []), (r.sample_offsets = [])),
                    (n = e.mdia.minf.stbl.stss);
                var a = e.mdia.minf.stbl.boxes.indexOf(n);
                -1 != a && (e.mdia.minf.stbl.boxes[a] = null);
            }
        }),
        (g.initSampleGroups = function (t, e, i, s, r) {
            var n, a, o, h;
            function d(t, e, i) {
                (this.grouping_type = t), (this.grouping_type_parameter = e), (this.sbgp = i), (this.last_sample_in_run = -1), (this.entry_index = -1);
            }
            for (e && (e.sample_groups_info = []), t.sample_groups_info || (t.sample_groups_info = []), a = 0; a < i.length; a++) {
                for (
                    h = i[a].grouping_type + "/" + i[a].grouping_type_parameter,
                    o = new d(i[a].grouping_type, i[a].grouping_type_parameter, i[a]),
                    e && (e.sample_groups_info[h] = o),
                    t.sample_groups_info[h] || (t.sample_groups_info[h] = o),
                    n = 0;
                    n < s.length;
                    n++
                )
                    s[n].grouping_type === i[a].grouping_type && ((o.description = s[n]), (o.description.used = !0));
                if (r) for (n = 0; n < r.length; n++) r[n].grouping_type === i[a].grouping_type && ((o.fragment_description = r[n]), (o.fragment_description.used = !0), (o.is_fragment = !0));
            }
            if (e) {
                if (r) for (a = 0; a < r.length; a++) !r[a].used && r[a].version >= 2 && ((h = r[a].grouping_type + "/0"), ((o = new d(r[a].grouping_type, 0)).is_fragment = !0), e.sample_groups_info[h] || (e.sample_groups_info[h] = o));
            } else for (a = 0; a < s.length; a++) !s[a].used && s[a].version >= 2 && ((h = s[a].grouping_type + "/0"), (o = new d(s[a].grouping_type, 0)), t.sample_groups_info[h] || (t.sample_groups_info[h] = o));
        }),
        (g.setSampleGroupProperties = function (t, e, i, s) {
            var r, n, a;
            for (r in ((e.sample_groups = []), s))
                (e.sample_groups[r] = {}),
                    (e.sample_groups[r].grouping_type = s[r].grouping_type),
                    (e.sample_groups[r].grouping_type_parameter = s[r].grouping_type_parameter),
                    i >= s[r].last_sample_in_run &&
                    (s[r].last_sample_in_run < 0 && (s[r].last_sample_in_run = 0), s[r].entry_index++, s[r].entry_index <= s[r].sbgp.entries.length - 1 && (s[r].last_sample_in_run += s[r].sbgp.entries[s[r].entry_index].sample_count)),
                    s[r].entry_index <= s[r].sbgp.entries.length - 1 ? (e.sample_groups[r].group_description_index = s[r].sbgp.entries[s[r].entry_index].group_description_index) : (e.sample_groups[r].group_description_index = -1),
                    0 !== e.sample_groups[r].group_description_index &&
                    ((a = s[r].fragment_description ? s[r].fragment_description : s[r].description),
                        e.sample_groups[r].group_description_index > 0
                            ? ((n = e.sample_groups[r].group_description_index > 65535 ? (e.sample_groups[r].group_description_index >> 16) - 1 : e.sample_groups[r].group_description_index - 1),
                                a && n >= 0 && (e.sample_groups[r].description = a.entries[n]))
                            : a && a.version >= 2 && a.default_group_description_index > 0 && (e.sample_groups[r].description = a.entries[a.default_group_description_index - 1]));
        }),
        (g.process_sdtp = function (t, e, i) {
            e &&
                (t
                    ? ((e.is_leading = t.is_leading[i]), (e.depends_on = t.sample_depends_on[i]), (e.is_depended_on = t.sample_is_depended_on[i]), (e.has_redundancy = t.sample_has_redundancy[i]))
                    : ((e.is_leading = 0), (e.depends_on = 0), (e.is_depended_on = 0), (e.has_redundancy = 0)));
        }),
        (g.prototype.buildSampleLists = function () {
            var t, e;
            for (t = 0; t < this.moov.traks.length; t++) (e = this.moov.traks[t]), this.buildTrakSampleLists(e);
        }),
        (g.prototype.buildTrakSampleLists = function (t) {
            var e, i, s, r, n, a, o, h, d, l, p, f, u, c, m, y, b, v, w, S, x, U, $, _;
            if (
                ((t.samples = []),
                    (t.samples_duration = 0),
                    (t.samples_size = 0),
                    (i = t.mdia.minf.stbl.stco || t.mdia.minf.stbl.co64),
                    (s = t.mdia.minf.stbl.stsc),
                    (r = t.mdia.minf.stbl.stsz || t.mdia.minf.stbl.stz2),
                    (n = t.mdia.minf.stbl.stts),
                    (a = t.mdia.minf.stbl.ctts),
                    (o = t.mdia.minf.stbl.stss),
                    (h = t.mdia.minf.stbl.stsd),
                    (d = t.mdia.minf.stbl.subs),
                    (f = t.mdia.minf.stbl.stdp),
                    (l = t.mdia.minf.stbl.sbgps),
                    (p = t.mdia.minf.stbl.sgpds),
                    (v = -1),
                    (w = -1),
                    (S = -1),
                    (x = -1),
                    (U = 0),
                    ($ = 0),
                    (_ = 0),
                    g.initSampleGroups(t, null, l, p),
                    void 0 !== r)
            ) {
                for (e = 0; e < r.sample_sizes.length; e++) {
                    var E = {};
                    (E.number = e),
                        (E.track_id = t.tkhd.track_id),
                        (E.timescale = t.mdia.mdhd.timescale),
                        (E.alreadyRead = 0),
                        (t.samples[e] = E),
                        (E.size = r.sample_sizes[e]),
                        (t.samples_size += E.size),
                        0 === e
                            ? ((c = 1), (u = 0), (E.chunk_index = c), (E.chunk_run_index = u), (b = s.samples_per_chunk[u]), (y = 0), (m = u + 1 < s.first_chunk.length ? s.first_chunk[u + 1] - 1 : 1 / 0))
                            : e < b
                                ? ((E.chunk_index = c), (E.chunk_run_index = u))
                                : (c++, (E.chunk_index = c), (y = 0), c <= m || (m = ++u + 1 < s.first_chunk.length ? s.first_chunk[u + 1] - 1 : 1 / 0), (E.chunk_run_index = u), (b += s.samples_per_chunk[u])),
                        (E.description_index = s.sample_description_index[E.chunk_run_index] - 1),
                        (E.description = h.entries[E.description_index]),
                        (E.offset = i.chunk_offsets[E.chunk_index - 1] + y),
                        (y += E.size),
                        e > v && (w++, v < 0 && (v = 0), (v += n.sample_counts[w])),
                        e > 0 ? ((t.samples[e - 1].duration = n.sample_deltas[w]), (t.samples_duration += t.samples[e - 1].duration), (E.dts = t.samples[e - 1].dts + t.samples[e - 1].duration)) : (E.dts = 0),
                        a ? (e >= S && (x++, S < 0 && (S = 0), (S += a.sample_counts[x])), (E.cts = t.samples[e].dts + a.sample_offsets[x])) : (E.cts = E.dts),
                        o
                            ? (e == o.sample_numbers[U] - 1 ? ((E.is_sync = !0), U++) : ((E.is_sync = !1), (E.degradation_priority = 0)),
                                d && d.entries[$].sample_delta + _ == e + 1 && ((E.subsamples = d.entries[$].subsamples), (_ += d.entries[$].sample_delta), $++))
                            : (E.is_sync = !0),
                        g.process_sdtp(t.mdia.minf.stbl.sdtp, E, E.number),
                        (E.degradation_priority = f ? f.priority[e] : 0),
                        d && d.entries[$].sample_delta + _ == e && ((E.subsamples = d.entries[$].subsamples), (_ += d.entries[$].sample_delta)),
                        (l.length > 0 || p.length > 0) && g.setSampleGroupProperties(t, E, e, t.sample_groups_info);
                }
                e > 0 && ((t.samples[e - 1].duration = Math.max(t.mdia.mdhd.duration - t.samples[e - 1].dts, 0)), (t.samples_duration += t.samples[e - 1].duration));
            }
        }),
        (g.prototype.updateSampleLists = function () {
            var t, e, i, s, r, n, a, o, h, d, l, p, f, c, m;
            if (void 0 !== this.moov) {
                for (; this.lastMoofIndex < this.moofs.length;)
                    if (((h = this.moofs[this.lastMoofIndex]), this.lastMoofIndex++, "moof" == h.type))
                        for (d = h, t = 0; t < d.trafs.length; t++) {
                            for (
                                l = d.trafs[t],
                                p = this.getTrackById(l.tfhd.track_id),
                                f = this.getTrexById(l.tfhd.track_id),
                                s = l.tfhd.flags & u.TFHD_FLAG_SAMPLE_DESC ? l.tfhd.default_sample_description_index : f ? f.default_sample_description_index : 1,
                                r = l.tfhd.flags & u.TFHD_FLAG_SAMPLE_DUR ? l.tfhd.default_sample_duration : f ? f.default_sample_duration : 0,
                                n = l.tfhd.flags & u.TFHD_FLAG_SAMPLE_SIZE ? l.tfhd.default_sample_size : f ? f.default_sample_size : 0,
                                a = l.tfhd.flags & u.TFHD_FLAG_SAMPLE_FLAGS ? l.tfhd.default_sample_flags : f ? f.default_sample_flags : 0,
                                l.sample_number = 0,
                                l.sbgps.length > 0 && g.initSampleGroups(p, l, l.sbgps, p.mdia.minf.stbl.sgpds, l.sgpds),
                                e = 0;
                                e < l.truns.length;
                                e++
                            ) {
                                var y = l.truns[e];
                                for (i = 0; i < y.sample_count; i++) {
                                    ((c = {}).moof_number = this.lastMoofIndex),
                                        (c.number_in_traf = l.sample_number),
                                        l.sample_number++,
                                        (c.number = p.samples.length),
                                        (l.first_sample_index = p.samples.length),
                                        p.samples.push(c),
                                        (c.track_id = p.tkhd.track_id),
                                        (c.timescale = p.mdia.mdhd.timescale),
                                        (c.description_index = s - 1),
                                        (c.description = p.mdia.minf.stbl.stsd.entries[c.description_index]),
                                        (c.size = n),
                                        y.flags & u.TRUN_FLAGS_SIZE && (c.size = y.sample_size[i]),
                                        (p.samples_size += c.size),
                                        (c.duration = r),
                                        y.flags & u.TRUN_FLAGS_DURATION && (c.duration = y.sample_duration[i]),
                                        (p.samples_duration += c.duration),
                                        p.first_traf_merged || i > 0
                                            ? (c.dts = p.samples[p.samples.length - 2].dts + p.samples[p.samples.length - 2].duration)
                                            : (l.tfdt ? (c.dts = l.tfdt.baseMediaDecodeTime) : (c.dts = 0), (p.first_traf_merged = !0)),
                                        (c.cts = c.dts),
                                        y.flags & u.TRUN_FLAGS_CTS_OFFSET && (c.cts = c.dts + y.sample_composition_time_offset[i]),
                                        (m = a),
                                        y.flags & u.TRUN_FLAGS_FLAGS ? (m = y.sample_flags[i]) : 0 === i && y.flags & u.TRUN_FLAGS_FIRST_FLAG && (m = y.first_sample_flags),
                                        (c.is_sync = !((m >> 16) & 1)),
                                        (c.is_leading = (m >> 26) & 3),
                                        (c.depends_on = (m >> 24) & 3),
                                        (c.is_depended_on = (m >> 22) & 3),
                                        (c.has_redundancy = (m >> 20) & 3),
                                        (c.degradation_priority = 65535 & m);
                                    var b = !!(l.tfhd.flags & u.TFHD_FLAG_BASE_DATA_OFFSET),
                                        v = !!(l.tfhd.flags & u.TFHD_FLAG_DEFAULT_BASE_IS_MOOF),
                                        w = !!(y.flags & u.TRUN_FLAGS_DATA_OFFSET),
                                        S = 0;
                                    (S = b ? l.tfhd.base_data_offset : v || 0 === e ? d.start : o),
                                        (c.offset = 0 === e && 0 === i ? (w ? S + y.data_offset : S) : o),
                                        (o = c.offset + c.size),
                                        (l.sbgps.length > 0 || l.sgpds.length > 0 || p.mdia.minf.stbl.sbgps.length > 0 || p.mdia.minf.stbl.sgpds.length > 0) && g.setSampleGroupProperties(p, c, c.number_in_traf, l.sample_groups_info);
                                }
                            }
                            if (l.subs) {
                                p.has_fragment_subsamples = !0;
                                var x = l.first_sample_index;
                                for (e = 0; e < l.subs.entries.length; e++) (x += l.subs.entries[e].sample_delta), ((c = p.samples[x - 1]).subsamples = l.subs.entries[e].subsamples);
                            }
                        }
            }
        }),
        (g.prototype.getSample = function (t, e) {
            var i,
                s = t.samples[e];
            if (!this.moov) return null;
            if (s.data) {
                if (s.alreadyRead == s.size) return s;
            } else
                (s.data = new Uint8Array(s.size)),
                    (s.alreadyRead = 0),
                    (this.samplesDataSize += s.size),
                    h.debug("ISOFile", "Allocating sample #" + e + " on track #" + t.tkhd.track_id + " of size " + s.size + " (total: " + this.samplesDataSize + ")");
            for (; ;) {
                var r = this.stream.findPosition(!0, s.offset + s.alreadyRead, !1);
                if (!(r > -1)) return null;
                var n = (i = this.stream.buffers[r]).byteLength - (s.offset + s.alreadyRead - i.fileStart);
                if (s.size - s.alreadyRead <= n)
                    return (
                        h.debug(
                            "ISOFile",
                            "Getting sample #" + e + " data (alreadyRead: " + s.alreadyRead + " offset: " + (s.offset + s.alreadyRead - i.fileStart) + " read size: " + (s.size - s.alreadyRead) + " full size: " + s.size + ")"
                        ),
                        l.memcpy(s.data.buffer, s.alreadyRead, i, s.offset + s.alreadyRead - i.fileStart, s.size - s.alreadyRead),
                        (i.usedBytes += s.size - s.alreadyRead),
                        this.stream.logBufferLevel(),
                        (s.alreadyRead = s.size),
                        s
                    );
                if (0 === n) return null;
                h.debug("ISOFile", "Getting sample #" + e + " partial data (alreadyRead: " + s.alreadyRead + " offset: " + (s.offset + s.alreadyRead - i.fileStart) + " read size: " + n + " full size: " + s.size + ")"),
                    l.memcpy(s.data.buffer, s.alreadyRead, i, s.offset + s.alreadyRead - i.fileStart, n),
                    (s.alreadyRead += n),
                    (i.usedBytes += n),
                    this.stream.logBufferLevel();
            }
        }),
        (g.prototype.releaseSample = function (t, e) {
            var i = t.samples[e];
            return i.data ? ((this.samplesDataSize -= i.size), (i.data = null), (i.alreadyRead = 0), i.size) : 0;
        }),
        (g.prototype.getAllocatedSampleDataSize = function () {
            return this.samplesDataSize;
        }),
        (g.prototype.getCodecs = function () {
            var t,
                e = "";
            for (t = 0; t < this.moov.traks.length; t++) t > 0 && (e += ","), (e += this.moov.traks[t].mdia.minf.stbl.stsd.entries[0].getCodec());
            return e;
        }),
        (g.prototype.getTrexById = function (t) {
            var e;
            if (!this.moov || !this.moov.mvex) return null;
            for (e = 0; e < this.moov.mvex.trexs.length; e++) {
                var i = this.moov.mvex.trexs[e];
                if (i.track_id == t) return i;
            }
            return null;
        }),
        (g.prototype.getTrackById = function (t) {
            if (void 0 === this.moov) return null;
            for (var e = 0; e < this.moov.traks.length; e++) {
                var i = this.moov.traks[e];
                if (i.tkhd.track_id == t) return i;
            }
            return null;
        }),
        (g.prototype.items = []),
        (g.prototype.itemsDataSize = 0),
        (g.prototype.flattenItemInfo = function () {
            var t,
                e,
                i,
                s = this.items,
                r = this.meta;
            if (null != r && void 0 !== r.hdlr && void 0 !== r.iinf) {
                for (t = 0; t < r.iinf.item_infos.length; t++)
                    ((i = {}).id = r.iinf.item_infos[t].item_ID),
                        (s[i.id] = i),
                        (i.ref_to = []),
                        (i.name = r.iinf.item_infos[t].item_name),
                        r.iinf.item_infos[t].protection_index > 0 && (i.protection = r.ipro.protections[r.iinf.item_infos[t].protection_index - 1]),
                        r.iinf.item_infos[t].item_type ? (i.type = r.iinf.item_infos[t].item_type) : (i.type = "mime"),
                        (i.content_type = r.iinf.item_infos[t].content_type),
                        (i.content_encoding = r.iinf.item_infos[t].content_encoding);
                if (r.iloc)
                    for (t = 0; t < r.iloc.items.length; t++) {
                        var n = r.iloc.items[t];
                        switch (((i = s[n.item_ID]), 0 !== n.data_reference_index && (h.warn("Item storage with reference to other files: not supported"), (i.source = r.dinf.boxes[n.data_reference_index - 1])), n.construction_method)) {
                            case 0:
                                break;
                            case 1:
                            case 2:
                                h.warn("Item storage with construction_method : not supported");
                        }
                        for (i.extents = [], i.size = 0, e = 0; e < n.extents.length; e++)
                            (i.extents[e] = {}), (i.extents[e].offset = n.extents[e].extent_offset + n.base_offset), (i.extents[e].length = n.extents[e].extent_length), (i.extents[e].alreadyRead = 0), (i.size += i.extents[e].length);
                    }
                if ((r.pitm && (s[r.pitm.item_id].primary = !0), r.iref))
                    for (t = 0; t < r.iref.references.length; t++) {
                        var a = r.iref.references[t];
                        for (e = 0; e < a.references.length; e++) s[a.from_item_ID].ref_to.push({ type: a.type, id: a.references[e] });
                    }
                if (r.iprp)
                    for (var o = 0; o < r.iprp.ipmas.length; o++) {
                        var d = r.iprp.ipmas[o];
                        for (t = 0; t < d.associations.length; t++) {
                            var l = d.associations[t];
                            for (void 0 === (i = s[l.id]).properties && ((i.properties = {}), (i.properties.boxes = [])), e = 0; e < l.props.length; e++) {
                                var p = l.props[e];
                                if (p.property_index > 0 && p.property_index - 1 < r.iprp.ipco.boxes.length) {
                                    var f = r.iprp.ipco.boxes[p.property_index - 1];
                                    (i.properties[f.type] = f), i.properties.boxes.push(f);
                                }
                            }
                        }
                    }
            }
        }),
        (g.prototype.getItem = function (t) {
            var e, i;
            if (!this.meta) return null;
            if (!(i = this.items[t]).data && i.size)
                (i.data = new Uint8Array(i.size)), (i.alreadyRead = 0), (this.itemsDataSize += i.size), h.debug("ISOFile", "Allocating item #" + t + " of size " + i.size + " (total: " + this.itemsDataSize + ")");
            else if (i.alreadyRead === i.size) return i;
            for (var s = 0; s < i.extents.length; s++) {
                var r = i.extents[s];
                if (r.alreadyRead !== r.length) {
                    var n = this.stream.findPosition(!0, r.offset + r.alreadyRead, !1);
                    if (!(n > -1)) return null;
                    var a = (e = this.stream.buffers[n]).byteLength - (r.offset + r.alreadyRead - e.fileStart);
                    if (!(r.length - r.alreadyRead <= a))
                        return (
                            h.debug(
                                "ISOFile",
                                "Getting item #" +
                                t +
                                " extent #" +
                                s +
                                " partial data (alreadyRead: " +
                                r.alreadyRead +
                                " offset: " +
                                (r.offset + r.alreadyRead - e.fileStart) +
                                " read size: " +
                                a +
                                " full extent size: " +
                                r.length +
                                " full item size: " +
                                i.size +
                                ")"
                            ),
                            l.memcpy(i.data.buffer, i.alreadyRead, e, r.offset + r.alreadyRead - e.fileStart, a),
                            (r.alreadyRead += a),
                            (i.alreadyRead += a),
                            (e.usedBytes += a),
                            this.stream.logBufferLevel(),
                            null
                        );
                    h.debug(
                        "ISOFile",
                        "Getting item #" +
                        t +
                        " extent #" +
                        s +
                        " data (alreadyRead: " +
                        r.alreadyRead +
                        " offset: " +
                        (r.offset + r.alreadyRead - e.fileStart) +
                        " read size: " +
                        (r.length - r.alreadyRead) +
                        " full extent size: " +
                        r.length +
                        " full item size: " +
                        i.size +
                        ")"
                    ),
                        l.memcpy(i.data.buffer, i.alreadyRead, e, r.offset + r.alreadyRead - e.fileStart, r.length - r.alreadyRead),
                        (e.usedBytes += r.length - r.alreadyRead),
                        this.stream.logBufferLevel(),
                        (i.alreadyRead += r.length - r.alreadyRead),
                        (r.alreadyRead = r.length);
                }
            }
            return i.alreadyRead === i.size ? i : null;
        }),
        (g.prototype.releaseItem = function (t) {
            var e = this.items[t];
            if (e.data) {
                (this.itemsDataSize -= e.size), (e.data = null), (e.alreadyRead = 0);
                for (var i = 0; i < e.extents.length; i++) e.extents[i].alreadyRead = 0;
                return e.size;
            }
            return 0;
        }),
        (g.prototype.processItems = function (t) {
            for (var e in this.items) {
                var i = this.items[e];
                this.getItem(i.id), t && !i.sent && (t(i), (i.sent = !0), (i.data = null));
            }
        }),
        (g.prototype.hasItem = function (t) {
            for (var e in this.items) {
                var i = this.items[e];
                if (i.name === t) return i.id;
            }
            return -1;
        }),
        (g.prototype.getMetaHandler = function () {
            return this.meta ? this.meta.hdlr.handler : null;
        }),
        (g.prototype.getPrimaryItem = function () {
            return this.meta && this.meta.pitm ? this.getItem(this.meta.pitm.item_id) : null;
        }),
        (g.prototype.itemToFragmentedTrackFile = function (t) {
            var e = t || {},
                i = null;
            if (null == (i = e.itemId ? this.getItem(e.itemId) : this.getPrimaryItem())) return null;
            var s = new g();
            s.discardMdatData = !1;
            var r = { type: i.type, description_boxes: i.properties.boxes };
            i.properties.ispe && ((r.width = i.properties.ispe.image_width), (r.height = i.properties.ispe.image_height));
            var n = s.addTrack(r);
            return n ? (s.addSample(n, i.data), s) : null;
        }),
        (g.prototype.write = function (t) {
            for (var e = 0; e < this.boxes.length; e++) this.boxes[e].write(t);
        }),
        (g.prototype.createFragment = function (t, e, i) {
            var s = this.getTrackById(t),
                r = this.getSample(s, e);
            if (null == r) return (r = s.samples[e]), this.nextSeekPosition ? (this.nextSeekPosition = Math.min(r.offset + r.alreadyRead, this.nextSeekPosition)) : (this.nextSeekPosition = s.samples[e].offset + r.alreadyRead), null;
            var n = i || new l();
            n.endianness = l.BIG_ENDIAN;
            var a = this.createSingleSampleMoof(r);
            a.write(n),
                (a.trafs[0].truns[0].data_offset = a.size + 8),
                h.debug("MP4Box", "Adjusting data_offset with new value " + a.trafs[0].truns[0].data_offset),
                n.adjustUint32(a.trafs[0].truns[0].data_offset_position, a.trafs[0].truns[0].data_offset);
            var o = new u.mdatBox();
            return (o.data = r.data), o.write(n), n;
        }),
        (g.writeInitializationSegment = function (t, e, i, s) {
            h.debug("ISOFile", "Generating initialization segment");
            var r,
                n = new l();
            (n.endianness = l.BIG_ENDIAN), t.write(n);
            var a = e.add("mvex");
            for (i && a.add("mehd").set("fragment_duration", i), r = 0; r < e.traks.length; r++)
                a.add("trex").set("track_id", e.traks[r].tkhd.track_id).set("default_sample_description_index", 1).set("default_sample_duration", s).set("default_sample_size", 0).set("default_sample_flags", 65536);
            return e.write(n), n.buffer;
        }),
        (g.prototype.save = function (t) {
            var e = new l();
            (e.endianness = l.BIG_ENDIAN), this.write(e), e.save(t);
        }),
        (g.prototype.getBuffer = function () {
            var t = new l();
            return (t.endianness = l.BIG_ENDIAN), this.write(t), t.buffer;
        }),
        (g.prototype.initializeSegmentation = function () {
            var t, e, i, s;
            for (
                null === this.onSegment && h.warn("MP4Box", "No segmentation callback set!"), this.isFragmentationInitialized || ((this.isFragmentationInitialized = !0), (this.nextMoofNumber = 0), this.resetTables()), e = [], t = 0;
                t < this.fragmentedTracks.length;
                t++
            ) {
                var r = new u.moovBox();
                (r.mvhd = this.moov.mvhd),
                    r.boxes.push(r.mvhd),
                    (i = this.getTrackById(this.fragmentedTracks[t].id)),
                    r.boxes.push(i),
                    r.traks.push(i),
                    ((s = {}).id = i.tkhd.track_id),
                    (s.user = this.fragmentedTracks[t].user),
                    (s.buffer = g.writeInitializationSegment(
                        this.ftyp,
                        r,
                        this.moov.mvex && this.moov.mvex.mehd ? this.moov.mvex.mehd.fragment_duration : void 0,
                        this.moov.traks[t].samples.length > 0 ? this.moov.traks[t].samples[0].duration : 0
                    )),
                    e.push(s);
            }
            return e;
        }),
        (u.Box.prototype.printHeader = function (t) {
            (this.size += 8), this.size > 4294967296 && (this.size += 8), "uuid" === this.type && (this.size += 16), t.log(t.indent + "size:" + this.size), t.log(t.indent + "type:" + this.type);
        }),
        (u.FullBox.prototype.printHeader = function (t) {
            (this.size += 4), u.Box.prototype.printHeader.call(this, t), t.log(t.indent + "version:" + this.version), t.log(t.indent + "flags:" + this.flags);
        }),
        (u.Box.prototype.print = function (t) {
            this.printHeader(t);
        }),
        (u.ContainerBox.prototype.print = function (t) {
            this.printHeader(t);
            for (var e = 0; e < this.boxes.length; e++)
                if (this.boxes[e]) {
                    var i = t.indent;
                    (t.indent += " "), this.boxes[e].print(t), (t.indent = i);
                }
        }),
        (g.prototype.print = function (t) {
            t.indent = "";
            for (var e = 0; e < this.boxes.length; e++) this.boxes[e] && this.boxes[e].print(t);
        }),
        (u.mvhdBox.prototype.print = function (t) {
            u.FullBox.prototype.printHeader.call(this, t),
                t.log(t.indent + "creation_time: " + this.creation_time),
                t.log(t.indent + "modification_time: " + this.modification_time),
                t.log(t.indent + "timescale: " + this.timescale),
                t.log(t.indent + "duration: " + this.duration),
                t.log(t.indent + "rate: " + this.rate),
                t.log(t.indent + "volume: " + (this.volume >> 8)),
                t.log(t.indent + "matrix: " + this.matrix.join(", ")),
                t.log(t.indent + "next_track_id: " + this.next_track_id);
        }),
        (u.tkhdBox.prototype.print = function (t) {
            u.FullBox.prototype.printHeader.call(this, t),
                t.log(t.indent + "creation_time: " + this.creation_time),
                t.log(t.indent + "modification_time: " + this.modification_time),
                t.log(t.indent + "track_id: " + this.track_id),
                t.log(t.indent + "duration: " + this.duration),
                t.log(t.indent + "volume: " + (this.volume >> 8)),
                t.log(t.indent + "matrix: " + this.matrix.join(", ")),
                t.log(t.indent + "layer: " + this.layer),
                t.log(t.indent + "alternate_group: " + this.alternate_group),
                t.log(t.indent + "width: " + this.width),
                t.log(t.indent + "height: " + this.height);
        }),
        (r.createFile = function (t, e) {
            var i = new g(e);
            return (i.discardMdatData = !(void 0 === t || t)), i;
        });
    class v {
        constructor(t) {
            (this.data = new Uint8Array(t)), (this.idx = 0), (this.size = t);
        }
        getData() {
            if (this.idx !== this.size) throw Error("Mismatch between size reserved and sized used");
            return this.data.slice(0, this.idx);
        }
        writeUint8(t) {
            this.data.set([t], this.idx), (this.idx += 1);
        }
        writeUint16(t) {
            let e = new Uint16Array(1);
            e[0] = t;
            let i = new Uint8Array(e.buffer);
            this.data.set([i[1], i[0]], this.idx), (this.idx += 2);
        }
        writeUint8Array(t) {
            this.data.set(t, this.idx), (this.idx += t.length);
        }
    }
    let w = (t, e, { VideoDecoder: i, EncodedVideoChunk: s, debug: r }) =>
    new Promise((n, a) => {
      r && console.info("Decoding video from", t);
      try {
        let o = b.createFile(),
          h,
          d = new i({
            output(t) {
              createImageBitmap(t, { resizeQuality: "low" })
                .then((i) => {
                  e(i);
                  t.close();
                })
                .catch((error) => {
                  console.error("Image bitmap creation failed:", error);
                });
            },
            error(t) {
              console.error("Decoding error:", t);
            },
          });
        (o.onReady = (t) => {
          if (t && t.videoTracks && t.videoTracks[0]) {
            ([{ codec: h }] = t.videoTracks);
            r && console.info("Video with codec:", h);
            let e = ((t) => {
              let e,
                i = 7;
              for (e = 0; e < t.SPS.length; e += 1)
                i += 2 + t.SPS[e].length;
              for (e = 0; e < t.PPS.length; e += 1)
                i += 2 + t.PPS[e].length;
              let s = new v(i);
              for (
                s.writeUint8(t.configurationVersion),
                  s.writeUint8(t.AVCProfileIndication),
                  s.writeUint8(t.profile_compatibility),
                  s.writeUint8(t.AVCLevelIndication),
                  s.writeUint8(t.lengthSizeMinusOne + 252),
                  s.writeUint8(t.nb_SPS_nalus + 224),
                  e = 0;
                e < t.SPS.length;
                e += 1
              )
                s.writeUint16(t.SPS[e].length),
                  s.writeUint8Array(t.SPS[e].nalu);
              for (
                s.writeUint8(t.nb_PPS_nalus),
                  e = 0;
                e < t.PPS.length;
                e += 1
              )
                s.writeUint16(t.PPS[e].length),
                  s.writeUint8Array(t.PPS[e].nalu);
              return s.getData();
            })(o.moov.traks[0].mdia.minf.stbl.stsd.entries[0].avcC);
            d.configure({ codec: h, description: e });
            o.setExtractionOptions(t.videoTracks[0].id);
            o.start();
          } else {
            a(Error("URL provided is not a valid mp4 video file."));
          }
        });
        (o.onSamples = (t, e, i) => {
          for (let r = 0; r < i.length; r += 1) {
            let n = i[r],
              a = n.is_sync ? "key" : "delta",
              o = new s({ type: a, timestamp: n.cts, duration: n.duration, data: n.data });
            try {
              d.decode(o);
            } catch (error) {
              console.error("Decoding error:", error);
            }
          }
        });
        fetch(t)
          .then((t) => {
            let e = t.body.getReader(),
              i = 0;
            const readChunk = () => {
              e
                .read()
                .then(({ done, value }) => {
                  if (done) {
                    o.flush();
                    n();
                    return;
                  }
                  let n = value.buffer;
                  (n.fileStart = i), (i += n.byteLength);
                  try {
                    o.appendBuffer(n);
                  } catch (error) {
                    console.error("Buffer append error:", error);
                  }
                  readChunk();
                })
                .catch((error) => {
                  console.error("Reading video data failed:", error);
                  a(error);
                });
            };
            readChunk();
          })
          .catch((error) => {
            console.error("Fetching video failed:", error);
            a(error);
          });
      } catch (l) {
        console.error("Decoding error:", l);
        a(l);
      }
    });
  

    return class {
        constructor({ src: t, scrollyVideoContainer: e, cover: i = !0, sticky: s = !0, full: r = !0, trackScroll: n = !0, transitionSpeed: a = 8, frameThreshold: o = 0.1, useWebCodecs: h = !0, debug: d = !1 }) {
            if ("object" != typeof document) return void console.error("ScrollyVideo must be initiated in a DOM context");
            if (!e) return void console.error("scrollyVideoContainer must be a valid DOM object");
            if (!t) return void console.error("Must provide valid video src to ScrollyVideo");
            if (e instanceof Element) this.container = e;
            else if ("string" != typeof e || ((this.container = document.getElementById(e)), !this.container)) throw Error("scrollyVideoContainer must be a valid DOM object");
            (this.src = t),
                (this.transitionSpeed = a),
                (this.frameThreshold = o),
                (this.useWebCodecs = h),
                (this.cover = i),
                (this.sticky = s),
                (this.full = r),
                (this.trackScroll = n),
                (this.debug = d),
                (this.video = document.createElement("video")),
                (this.video.src = t),
                (this.video.preload = "auto"),
                (this.video.tabIndex = 0),
                (this.video.autobuffer = !0),
                (this.video.playsInline = !0),
                (this.video.muted = !0),
                this.video.pause(),
                this.video.load(),
                this.container.appendChild(this.video),
                s && ((this.container.style.display = "block"), (this.container.style.position = "sticky"), (this.container.style.top = "0")),
                r && ((this.container.style.width = "100%"), (this.container.style.height = "100vh"), (this.container.style.overflow = "hidden")),
                i && this.setCoverStyle(this.video);
            let l = new y().getEngine();
            (this.isSafari = "WebKit" === l.name),
                d && this.isSafari && console.info("Safari browser detected"),
                (this.currentTime = 0),
                (this.targetTime = 0),
                (this.canvas = null),
                (this.context = null),
                (this.frames = []),
                (this.frameRate = 0),
                (this.updateScrollPercentage = (t) => {
                    let e = this.container.parentNode.getBoundingClientRect(),
                        i = -e.top / (e.height - window.innerHeight);
                    this.debug && console.info("ScrollyVideo scrolled to", i), this.setTargetTimePercent(i, t);
                }),
                this.trackScroll
                    ? (window.addEventListener("scroll", this.updateScrollPercentage), this.video.addEventListener("loadedmetadata", () => this.updateScrollPercentage(!0), { once: !0 }))
                    : this.video.addEventListener("loadedmetadata", () => this.setTargetTimePercent(0, !0), { once: !0 }),
                (this.resize = () => {
                    this.debug && console.info("ScrollyVideo resizing..."), this.cover && this.setCoverStyle(this.canvas || this.video), this.paintCanvasFrame(Math.floor(this.currentTime * this.frameRate));
                }),
                window.addEventListener("resize", this.resize),
                this.video.addEventListener("progress", this.resize),
                this.decodeVideo();
        }
        setCoverStyle(t) {
            if (this.cover) {
                (t.style.position = "absolute"), (t.style.top = "50%"), (t.style.left = "50%"), (t.style.transform = "translate(-50%, -50%)"), (t.style.minWidth = "101%"), (t.style.minHeight = "101%");
                let { width: e, height: i } = this.container.getBoundingClientRect(),
                    s = t.videoWidth || t.width,
                    r = t.videoHeight || t.height;
                this.debug && console.info("Container dimensions:", [e, i]),
                    this.debug && console.info("Element dimensions:", [s, r]),
                    e / i > s / r ? ((t.style.width = "100%"), (t.style.height = "auto")) : ((t.style.height = "100%"), (t.style.width = "auto"));
            }
        }

        // decode video 
        decodeVideo() {
            var t, e, i;
            this.useWebCodecs &&
                this.src &&
                ((t = this.src),
                    (e = (t) => {
                        this.frames.push(t);
                    }),
                    (i = this.debug),
                    "function" == typeof VideoDecoder && "function" == typeof EncodedVideoChunk
                        ? (i && console.info("WebCodecs is natively supported, using native version..."), w(t, e, { VideoDecoder: VideoDecoder, EncodedVideoChunk: EncodedVideoChunk, debug: i }))
                        : (i && console.info("WebCodecs is not available in this browser."), Promise.resolve()))
                    .catch(() => {
                        this.debug && console.error("Error encountered while decoding video"), (this.frames = []), this.video.load();
                    })
                    .then(() => {
                        0 !== this.frames.length
                            ? ((this.frameRate = this.frames.length / this.video.duration),
                                this.debug && console.info("Received", this.frames.length, "frames"),
                                (this.canvas = document.createElement("canvas")),
                                (this.context = this.canvas.getContext("2d")),
                                (this.video.style.display = "none"),
                                this.container.appendChild(this.canvas),
                                this.cover && this.setCoverStyle(this.canvas),
                                this.paintCanvasFrame(Math.floor(this.currentTime * this.frameRate)))
                            : this.debug && console.error("No frames were received from webCodecs");
                    });
        }

        paintCanvasFrame(t) {
            if (this.canvas) {
                let e = this.frames[t];
                if (e) {
                    this.debug && console.info("Painting frame", t), (this.canvas.width = e.width), (this.canvas.height = e.height);
                    let { width: i, height: s } = this.container.getBoundingClientRect();
                    i / s > e.width / e.height ? ((this.canvas.style.width = "100%"), (this.canvas.style.height = "auto")) : ((this.canvas.style.height = "100%"), (this.canvas.style.width = "auto")),
                        this.context.drawImage(e, 0, 0, e.width, e.height);
                }
            }
        }
        transitionToTargetTime(t) {
            if (this.debug) {
              console.info("Transitioning targetTime:", this.targetTime, "currentTime:", this.currentTime);
            }
            if (isNaN(this.targetTime) || Math.abs(this.currentTime - this.targetTime) < this.frameThreshold) {
              this.video.pause();
              this.transitioning = false;
              return;
            }
          
            this.targetTime = Math.min(Math.max(this.targetTime, 0), this.video.duration);
            const e = this.targetTime - this.currentTime;
          
            if (this.canvas) {
              this.currentTime += e / (256 / this.transitionSpeed);
              if (t) {
                this.currentTime = this.targetTime;
              }
              this.paintCanvasFrame(Math.floor(this.currentTime * this.frameRate));
            } else if (t || this.isSafari || this.targetTime - this.currentTime < 0) {
              this.video.pause();
              this.currentTime += e / (64 / this.transitionSpeed);
              if (t) {
                this.currentTime = this.targetTime;
              }
              this.video.currentTime = this.currentTime;
            } else {
              const playbackRate = Math.max(Math.min(4 * e, this.transitionSpeed, 16), 1);
              this.debug && console.info("ScrollyVideo playbackRate:", playbackRate);
              if (!isNaN(playbackRate)) {
                this.video.playbackRate = playbackRate;
                this.video.play().catch(() => {
                  // Handle the play request was interrupted error here
                });
              }
              this.currentTime = this.video.currentTime;
            }
          
            if (typeof requestAnimationFrame === "function") {
              requestAnimationFrame(() => this.transitionToTargetTime());
            }
          }
          
          setTargetTimePercent(t, e) {
            this.targetTime = Math.max(Math.min(t, 1), 0) * (this.frames.length && this.frameRate ? this.frames.length / this.frameRate : this.video.duration);
            if ((!e && Math.abs(this.currentTime - this.targetTime) < this.frameThreshold) || (!e && this.transitioning)) {
              return;
            }
          
            if (!e) {
              if (this.canvas) {
                this.video.play().catch(() => {
                  // Handle the play request was interrupted error here
                });
              } else {
                this.video.play().catch(() => {
                  // Handle the play request was interrupted error here
                });
              }
            }
          
            this.transitioning = true;
            this.transitionToTargetTime(e);
          }
          
        destroy() {
            this.debug && console.info("Destroying ScrollyVideo"),
                this.trackScroll && window.removeEventListener("scroll", this.updateScrollPercentage),
                window.removeEventListener("resize", this.resize),
                this.container && (this.container.innerHTML = "");
        }
    };
})();
