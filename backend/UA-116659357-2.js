// Copyright 2012 Google Inc. All rights reserved.
(function() {

    var data = {
        "resource": {
            "version": "1",

            "macros": [{
                "function": "__e"
            }, {
                "function": "__cid"
            }],
            "tags": [{
                "function": "__rep",
                "once_per_event": true,
                "vtp_containerId": ["macro", 1],
                "tag_id": 1
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.js"
            }],
            "rules": [[["if", 0], ["add", 0]]]
        },
        "runtime": []

    };

    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    var aa, ba = function(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }, da = "function" == typeof Object.create ? Object.create : function(a) {
        var b = function() {};
        b.prototype = a;
        return new b
    }
    , ea;
    if ("function" == typeof Object.setPrototypeOf)
        ea = Object.setPrototypeOf;
    else {
        var ha;
        a: {
            var ia = {
                a: !0
            }
              , ja = {};
            try {
                ja.__proto__ = ia;
                ha = ja.a;
                break a
            } catch (a) {}
            ha = !1
        }
        ea = ha ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)
                throw new TypeError(a + " is not extensible");
            return a
        }
        : null
    }
    var ka = ea
      , la = function(a, b) {
        a.prototype = da(b.prototype);
        a.prototype.constructor = a;
        if (ka)
            ka(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else
                        a[c] = b[c];
        a.Vk = b.prototype
    }
      , ma = this || self
      , na = function(a) {
        return a
    };
    var oa = function() {}
      , pa = function(a) {
        return "function" === typeof a
    }
      , h = function(a) {
        return "string" === typeof a
    }
      , qa = function(a) {
        return "number" === typeof a && !isNaN(a)
    }
      , ra = Array.isArray
      , sa = function(a, b) {
        if (a && ra(a))
            for (var c = 0; c < a.length; c++)
                if (a[c] && b(a[c]))
                    return a[c]
    }
      , ta = function(a, b) {
        if (!qa(a) || !qa(b) || a > b)
            a = 0,
            b = 2147483647;
        return Math.floor(Math.random() * (b - a + 1) + a)
    }
      , xa = function(a, b) {
        for (var c = new ua, d = 0; d < a.length; d++)
            c.set(a[d], !0);
        for (var e = 0; e < b.length; e++)
            if (c.get(b[e]))
                return !0;
        return !1
    }
      , l = function(a, b) {
        for (var c in a)
            Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
    }
      , ya = function(a) {
        return !!a && ("[object Arguments]" === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
    }
      , Aa = function(a) {
        return Math.round(Number(a)) || 0
    }
      , Ba = function(a) {
        return "false" === String(a).toLowerCase() ? !1 : !!a
    }
      , Ca = function(a) {
        var b = [];
        if (ra(a))
            for (var c = 0; c < a.length; c++)
                b.push(String(a[c]));
        return b
    }
      , Da = function(a) {
        return a ? a.replace(/^\s+|\s+$/g, "") : ""
    }
      , Ea = function() {
        return new Date(Date.now())
    }
      , Fa = function() {
        return Ea().getTime()
    }
      , ua = function() {
        this.prefix = "gtm.";
        this.values = {}
    };
    ua.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    }
    ;
    ua.prototype.get = function(a) {
        return this.values[this.prefix + a]
    }
    ;
    var Ga = function(a, b, c) {
        return a && a.hasOwnProperty(b) ? a[b] : c
    }
      , Ha = function(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = void 0;
                try {
                    c()
                } catch (d) {}
            }
        }
    }
      , Ia = function(a, b) {
        for (var c in b)
            b.hasOwnProperty(c) && (a[c] = b[c])
    }
      , Ja = function(a) {
        for (var b in a)
            if (a.hasOwnProperty(b))
                return !0;
        return !1
    }
      , Ka = function(a, b) {
        for (var c = [], d = 0; d < a.length; d++)
            c.push(a[d]),
            c.push.apply(c, b[a[d]] || []);
        return c
    }
      , La = function(a, b) {
        for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
            d = d[e[f]] = {};
        d[e[e.length - 1]] = b;
        return c
    }
      , Ma = /^\w{1,9}$/
      , Oa = function(a, b) {
        a = a || {};
        b = b || ",";
        var c = [];
        l(a, function(d, e) {
            Ma.test(d) && e && c.push(d)
        });
        return c.join(b)
    }
      , Qa = function(a, b) {
        function c() {
            ++d === b && (e(),
            e = null,
            c.done = !0)
        }
        var d = 0
          , e = a;
        c.done = !1;
        return c
    };
    function Ra() {
        for (var a = Sa, b = {}, c = 0; c < a.length; ++c)
            b[a[c]] = c;
        return b
    }
    function Ta() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var Sa, Ua;
    function Va(a) {
        Sa = Sa || Ta();
        Ua = Ua || Ra();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length
              , e = c + 2 < a.length
              , f = a.charCodeAt(c)
              , g = d ? a.charCodeAt(c + 1) : 0
              , k = e ? a.charCodeAt(c + 2) : 0
              , m = f >> 2
              , n = (f & 3) << 4 | g >> 4
              , p = (g & 15) << 2 | k >> 6
              , q = k & 63;
            e || (q = 64,
            d || (p = 64));
            b.push(Sa[m], Sa[n], Sa[p], Sa[q])
        }
        return b.join("")
    }
    function Wa(a) {
        function b(m) {
            for (; d < a.length; ) {
                var n = a.charAt(d++)
                  , p = Ua[n];
                if (null != p)
                    return p;
                if (!/^[\s\xa0]*$/.test(n))
                    throw Error("Unknown base64 encoding at char: " + n);
            }
            return m
        }
        Sa = Sa || Ta();
        Ua = Ua || Ra();
        for (var c = "", d = 0; ; ) {
            var e = b(-1)
              , f = b(0)
              , g = b(64)
              , k = b(64);
            if (64 === k && -1 === e)
                return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2),
            64 != k && (c += String.fromCharCode(g << 6 & 192 | k)))
        }
    }
    ;var Xa = {}
      , Ya = function(a, b) {
        Xa[a] = Xa[a] || [];
        Xa[a][b] = !0
    }
      , Za = function() {
        delete Xa.GA4_EVENT
    }
      , $a = function(a) {
        var b = Xa[a];
        if (!b || 0 === b.length)
            return "";
        for (var c = [], d = 0, e = 0; e < b.length; e++)
            0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)),
            d = 0),
            b[e] && (d |= 1 << e % 8);
        0 < d && c.push(String.fromCharCode(d));
        return Va(c.join("")).replace(/\.+$/, "")
    };
    var ab = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    }
    : function(a, b) {
        if ("string" === typeof a)
            return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
    ;
    var bb, cb = function() {
        if (void 0 === bb) {
            var a = null
              , b = ma.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: na,
                        createScript: na,
                        createScriptURL: na
                    })
                } catch (c) {
                    ma.console && ma.console.error(c.message)
                }
                bb = a
            } else
                bb = a
        }
        return bb
    };
    var eb = function(a, b) {
        this.h = b === db ? a : ""
    };
    eb.prototype.toString = function() {
        return this.h + ""
    }
    ;
    var db = {};
    var fb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    var gb, hb;
    a: {
        for (var ib = ["CLOSURE_FLAGS"], jb = ma, kb = 0; kb < ib.length; kb++)
            if (jb = jb[ib[kb]],
            null == jb) {
                hb = null;
                break a
            }
        hb = jb
    }
    var lb = hb && hb[610401301];
    gb = null != lb ? lb : !1;
    function mb() {
        var a = ma.navigator;
        if (a) {
            var b = a.userAgent;
            if (b)
                return b
        }
        return ""
    }
    var nb, ob = ma.navigator;
    nb = ob ? ob.userAgentData || null : null;
    function pb(a) {
        return gb ? nb ? nb.brands.some(function(b) {
            var c = b.brand;
            return c && -1 != c.indexOf(a)
        }) : !1 : !1
    }
    function qb(a) {
        return -1 != mb().indexOf(a)
    }
    ;function rb() {
        return gb ? !!nb && 0 < nb.brands.length : !1
    }
    function sb() {
        return rb() ? !1 : qb("Opera")
    }
    function tb() {
        return qb("Firefox") || qb("FxiOS")
    }
    function ub() {
        return rb() ? pb("Chromium") : (qb("Chrome") || qb("CriOS")) && !(rb() ? 0 : qb("Edge")) || qb("Silk")
    }
    ;var vb = {}
      , wb = function(a, b) {
        this.h = b === vb ? a : ""
    };
    wb.prototype.toString = function() {
        return this.h.toString()
    }
    ;
    /*

 SPDX-License-Identifier: Apache-2.0
*/
    function xb(a, b) {
        if (void 0 !== a.tagName) {
            if ("script" === a.tagName.toLowerCase())
                throw Error("");
            if ("style" === a.tagName.toLowerCase())
                throw Error("");
        }
        a.innerHTML = b instanceof wb && b.constructor === wb ? b.h : "type_error:SafeHtml"
    }
    ;function yb(a) {
        var b = a = zb(a)
          , c = cb()
          , d = c ? c.createHTML(b) : b;
        return new wb(d,vb)
    }
    function zb(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a
    }
    ;var z = window
      , D = document
      , Ab = navigator
      , Bb = D.currentScript && D.currentScript.src
      , Cb = function(a, b) {
        var c = z[a];
        z[a] = void 0 === c ? b : c;
        return z[a]
    }
      , Db = function(a, b) {
        b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
            a.readyState in {
                loaded: 1,
                complete: 1
            } && (a.onreadystatechange = null,
            b())
        }
        )
    }
      , Eb = {
        async: 1,
        nonce: 1,
        onerror: 1,
        onload: 1,
        src: 1,
        type: 1
    }
      , Fb = {
        onload: 1,
        src: 1,
        width: 1,
        height: 1,
        style: 1
    };
    function Gb(a, b, c) {
        b && l(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }
    var Hb = function(a, b, c, d, e) {
        var f = D.createElement("script");
        Gb(f, d, Eb);
        f.type = "text/javascript";
        f.async = !0;
        var g, k = zb(a), m = cb(), n = m ? m.createScriptURL(k) : k;
        g = new eb(n,db);
        f.src = g instanceof eb && g.constructor === eb ? g.h : "type_error:TrustedResourceUrl";
        var p, q, t, u = null == (t = (q = (f.ownerDocument && f.ownerDocument.defaultView || window).document).querySelector) ? void 0 : t.call(q, "script[nonce]");
        (p = u ? u.nonce || u.getAttribute("nonce") || "" : "") && f.setAttribute("nonce", p);
        Db(f, b);
        c && (f.onerror = c);
        if (e)
            e.appendChild(f);
        else {
            var r = D.getElementsByTagName("script")[0] || D.body || D.head;
            r.parentNode.insertBefore(f, r)
        }
        return f
    }
      , Ib = function() {
        if (Bb) {
            var a = Bb.toLowerCase();
            if (0 === a.indexOf("https://"))
                return 2;
            if (0 === a.indexOf("http://"))
                return 3
        }
        return 1
    }
      , Jb = function(a, b, c, d, e) {
        var f;
        f = void 0 === f ? !0 : f;
        var g = e
          , k = !1;
        g || (g = D.createElement("iframe"),
        k = !0);
        Gb(g, c, Fb);
        d && l(d, function(n, p) {
            g.dataset[n] = p
        });
        f && (g.height = "0",
        g.width = "0",
        g.style.display = "none",
        g.style.visibility = "hidden");
        if (k) {
            var m = D.body && D.body.lastChild || D.body || D.head;
            m.parentNode.insertBefore(g, m)
        }
        Db(g, b);
        void 0 !== a && (g.src = a);
        return g
    }
      , Kb = function(a, b, c, d) {
        var e = new Image(1,1);
        Gb(e, d, {});
        e.onload = function() {
            e.onload = null;
            b && b()
        }
        ;
        e.onerror = function() {
            e.onerror = null;
            c && c()
        }
        ;
        e.src = a
    }
      , Lb = function(a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
    }
      , Mb = function(a, b, c) {
        a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
    }
      , F = function(a) {
        z.setTimeout(a, 0)
    }
      , Nb = function(a, b) {
        return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
    }
      , Ob = function(a) {
        var b = a.innerText || a.textContent || "";
        b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
        b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
        return b
    }
      , Pb = function(a) {
        var b = D.createElement("div");
        xb(b, yb("A<div>" + a + "</div>"));
        b = b.lastChild;
        for (var c = []; b.firstChild; )
            c.push(b.removeChild(b.firstChild));
        return c
    }
      , Qb = function(a, b, c) {
        c = c || 100;
        for (var d = {}, e = 0; e < b.length; e++)
            d[b[e]] = !0;
        for (var f = a, g = 0; f && g <= c; g++) {
            if (d[String(f.tagName).toLowerCase()])
                return f;
            f = f.parentElement
        }
        return null
    }
      , Rb = function(a) {
        var b;
        try {
            b = Ab.sendBeacon && Ab.sendBeacon(a)
        } catch (c) {
            Ya("TAGGING", 15)
        }
        b || Kb(a)
    }
      , Sb = function(a, b) {
        var c = a[b];
        c && "string" === typeof c.animVal && (c = c.animVal);
        return c
    }
      , Tb = function() {
        var a = z.performance;
        if (a && pa(a.now))
            return a.now()
    }
      , Ub = function() {
        return z.performance || void 0
    };
    /*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Vb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/
      , Wb = function(a) {
        if (null == a)
            return String(a);
        var b = Vb.exec(Object.prototype.toString.call(Object(a)));
        return b ? b[1].toLowerCase() : "object"
    }
      , Xb = function(a, b) {
        return Object.prototype.hasOwnProperty.call(Object(a), b)
    }
      , Yb = function(a) {
        if (!a || "object" != Wb(a) || a.nodeType || a == a.window)
            return !1;
        try {
            if (a.constructor && !Xb(a, "constructor") && !Xb(a.constructor.prototype, "isPrototypeOf"))
                return !1
        } catch (c) {
            return !1
        }
        for (var b in a)
            ;
        return void 0 === b || Xb(a, b)
    }
      , G = function(a, b) {
        var c = b || ("array" == Wb(a) ? [] : {}), d;
        for (d in a)
            if (Xb(a, d)) {
                var e = a[d];
                "array" == Wb(e) ? ("array" != Wb(c[d]) && (c[d] = []),
                c[d] = G(e, c[d])) : Yb(e) ? (Yb(c[d]) || (c[d] = {}),
                c[d] = G(e, c[d])) : c[d] = e
            }
        return c
    };
    var Zb = function(a) {
        if (void 0 === a || ra(a) || Yb(a))
            return !0;
        switch (typeof a) {
        case "boolean":
        case "number":
        case "string":
        case "function":
            return !0
        }
        return !1
    };
    var $b = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            Uh: a("consent"),
            Pf: a("convert_case_to"),
            Qf: a("convert_false_to"),
            Rf: a("convert_null_to"),
            Sf: a("convert_true_to"),
            Tf: a("convert_undefined_to"),
            Fk: a("debug_mode_metadata"),
            Ma: a("function"),
            Ve: a("instance_name"),
            Li: a("live_only"),
            Mi: a("malware_disabled"),
            Ni: a("metadata"),
            Qi: a("original_activity_id"),
            Jk: a("original_vendor_template_id"),
            Ik: a("once_on_load"),
            Pi: a("once_per_event"),
            Ug: a("once_per_load"),
            Lk: a("priority_override"),
            Mk: a("respected_consent_types"),
            Yg: a("setup_tags"),
            lb: a("tag_id"),
            eh: a("teardown_tags")
        }
    }();
    var vc;
    var wc = [], xc = [], yc = [], zc = [], Ac = [], Bc = {}, Cc, Dc, Fc = function() {
        var a = Ec;
        Dc = Dc || a
    }, Gc, Hc = function(a, b) {
        var c = a["function"]
          , d = b && b.event;
        if (!c)
            throw Error("Error: No function name given for function call.");
        var e = Bc[c], f = {}, g;
        for (g in a)
            a.hasOwnProperty(g) && 0 === g.indexOf("vtp_") && (e && d && d.jh && d.jh(a[g]),
            f[void 0 !== e ? g : g.substr(4)] = a[g]);
        e && d && d.ih && (f.vtp_gtmCachedValues = d.ih);
        if (b) {
            if (null == b.name) {
                var k;
                a: {
                    var m = b.index;
                    if (null == m)
                        k = "";
                    else {
                        var n;
                        switch (b.type) {
                        case 2:
                            n = wc[m];
                            break;
                        case 1:
                            n = zc[m];
                            break;
                        default:
                            k = "";
                            break a
                        }
                        var p = n && n[$b.Ve];
                        k = p ? String(p) : ""
                    }
                }
                b.name = k
            }
            e && (f.vtp_gtmEntityIndex = b.index,
            f.vtp_gtmEntityName = b.name)
        }
        return void 0 !== e ? e(f) : vc(c, f, b)
    }, Jc = function(a, b, c) {
        c = c || [];
        var d = {}, e;
        for (e in a)
            a.hasOwnProperty(e) && (d[e] = Ic(a[e], b, c));
        return d
    }, Ic = function(a, b, c) {
        if (ra(a)) {
            var d;
            switch (a[0]) {
            case "function_id":
                return a[1];
            case "list":
                d = [];
                for (var e = 1; e < a.length; e++)
                    d.push(Ic(a[e], b, c));
                return d;
            case "macro":
                var f = a[1];
                if (c[f])
                    return;
                var g = wc[f];
                if (!g || b.rf(g))
                    return;
                c[f] = !0;
                var k = String(g[$b.Ve]);
                try {
                    var m = Jc(g, b, c);
                    m.vtp_gtmEventId = b.id;
                    b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
                    d = Hc(m, {
                        event: b,
                        index: f,
                        type: 2,
                        name: k
                    });
                    Gc && (d = Gc.fj(d, m))
                } catch (x) {
                    b.vh && b.vh(x, Number(f), k),
                    d = !1
                }
                c[f] = !1;
                return d;
            case "map":
                d = {};
                for (var n = 1; n < a.length; n += 2)
                    d[Ic(a[n], b, c)] = Ic(a[n + 1], b, c);
                return d;
            case "template":
                d = [];
                for (var p = !1, q = 1; q < a.length; q++) {
                    var t = Ic(a[q], b, c);
                    Dc && (p = p || t === Dc.Od);
                    d.push(t)
                }
                return Dc && p ? Dc.jj(d) : d.join("");
            case "escape":
                d = Ic(a[1], b, c);
                if (Dc && ra(a[1]) && "macro" === a[1][0] && Dc.Jj(a))
                    return Dc.dk(d);
                d = String(d);
                for (var u = 2; u < a.length; u++)
                    ac[a[u]] && (d = ac[a[u]](d));
                return d;
            case "tag":
                var r = a[1];
                if (!zc[r])
                    throw Error("Unable to resolve tag reference " + r + ".");
                return d = {
                    oh: a[2],
                    index: r
                };
            case "zb":
                var v = {
                    arg0: a[2],
                    arg1: a[3],
                    ignore_case: a[5]
                };
                v["function"] = a[1];
                var w = Kc(v, b, c)
                  , y = !!a[4];
                return y || 2 !== w ? y !== (1 === w) : null;
            default:
                throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
            }
        }
        return a
    }, Kc = function(a, b, c) {
        try {
            return Cc(Jc(a, b, c))
        } catch (d) {
            JSON.stringify(a)
        }
        return 2
    };
    var Oc = function(a) {
        function b(t) {
            for (var u = 0; u < t.length; u++)
                d[t[u]] = !0
        }
        for (var c = [], d = [], e = Lc(a), f = 0; f < xc.length; f++) {
            var g = xc[f]
              , k = Mc(g, e);
            if (k) {
                for (var m = g.add || [], n = 0; n < m.length; n++)
                    c[m[n]] = !0;
                b(g.block || [])
            } else
                null === k && b(g.block || []);
        }
        for (var p = [], q = 0; q < zc.length; q++)
            c[q] && !d[q] && (p[q] = !0);
        return p
    }
      , Mc = function(a, b) {
        for (var c = a["if"] || [], d = 0; d < c.length; d++) {
            var e = b(c[d]);
            if (0 === e)
                return !1;
            if (2 === e)
                return null
        }
        for (var f = a.unless || [], g = 0; g < f.length; g++) {
            var k = b(f[g]);
            if (2 === k)
                return null;
            if (1 === k)
                return !1
        }
        return !0
    }
      , Lc = function(a) {
        var b = [];
        return function(c) {
            void 0 === b[c] && (b[c] = Kc(yc[c], a));
            return b[c]
        }
    };
    var Pc = {
        fj: function(a, b) {
            b[$b.Pf] && "string" === typeof a && (a = 1 == b[$b.Pf] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty($b.Rf) && null === a && (a = b[$b.Rf]);
            b.hasOwnProperty($b.Tf) && void 0 === a && (a = b[$b.Tf]);
            b.hasOwnProperty($b.Sf) && !0 === a && (a = b[$b.Sf]);
            b.hasOwnProperty($b.Qf) && !1 === a && (a = b[$b.Qf]);
            return a
        }
    };
    var ed = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
    function fd(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) === c
    }
    var gd = new ua;
    function hd(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + d
              , f = gd.get(e);
            f || (f = new RegExp(b,d),
            gd.set(e, f));
            return f.test(a)
        } catch (g) {
            return !1
        }
    }
    ;var sd = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;
    function td(a, b) {
        return "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[a << 2 | b]
    }
    ;var vd = function(a) {
        return ud ? D.querySelectorAll(a) : null
    }
      , wd = function(a, b) {
        if (!ud)
            return null;
        if (Element.prototype.closest)
            try {
                return a.closest(b)
            } catch (e) {
                return null
            }
        var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector
          , d = a;
        if (!D.documentElement.contains(d))
            return null;
        do {
            try {
                if (c.call(d, b))
                    return d
            } catch (e) {
                break
            }
            d = d.parentElement || d.parentNode
        } while (null !== d && 1 === d.nodeType);
        return null
    }
      , xd = !1;
    if (D.querySelectorAll)
        try {
            var yd = D.querySelectorAll(":root");
            yd && 1 == yd.length && yd[0] == D.documentElement && (xd = !0)
        } catch (a) {}
    var ud = xd;
    var J = function(a) {
        Ya("GTM", a)
    };
    var N = {
        g: {
            H: "ad_storage",
            O: "analytics_storage",
            hd: "region",
            Kf: "consent_updated",
            Lf: "wait_for_update",
            Yh: "app_remove",
            Zh: "app_store_refund",
            ai: "app_store_subscription_cancel",
            bi: "app_store_subscription_convert",
            ci: "app_store_subscription_renew",
            Uf: "add_payment_info",
            Vf: "add_shipping_info",
            fc: "add_to_cart",
            hc: "remove_from_cart",
            Wf: "view_cart",
            Hb: "begin_checkout",
            ic: "select_item",
            qb: "view_item_list",
            Ib: "select_promotion",
            rb: "view_promotion",
            za: "purchase",
            jc: "refund",
            Aa: "view_item",
            Xf: "add_to_wishlist",
            di: "first_open",
            ei: "first_visit",
            wa: "gtag.config",
            Ba: "gtag.get",
            fi: "in_app_purchase",
            kc: "page_view",
            gi: "session_start",
            te: "user_engagement",
            Jb: "gclid",
            ia: "ads_data_redaction",
            X: "allow_ad_personalization_signals",
            ue: "allow_custom_scripts",
            hi: "allow_display_features",
            kd: "allow_enhanced_conversions",
            sb: "allow_google_signals",
            xa: "allow_interest_groups",
            ld: "auid",
            ii: "auto_detection_enabled",
            tb: "aw_remarketing",
            ve: "aw_remarketing_only",
            md: "discount",
            nd: "aw_feed_country",
            od: "aw_feed_language",
            ba: "items",
            pd: "aw_merchant_id",
            Yf: "aw_basket_type",
            qd: "campaign_content",
            rd: "campaign_id",
            sd: "campaign_medium",
            ud: "campaign_name",
            mc: "campaign",
            vd: "campaign_source",
            wd: "campaign_term",
            cb: "client_id",
            ji: "content_group",
            ki: "content_type",
            Ca: "conversion_cookie_prefix",
            nc: "conversion_id",
            oa: "conversion_linker",
            oc: "conversion_api",
            eb: "cookie_domain",
            Ia: "cookie_expires",
            fb: "cookie_flags",
            qc: "cookie_name",
            we: "cookie_path",
            Ra: "cookie_prefix",
            Kb: "cookie_update",
            sc: "country",
            la: "currency",
            xd: "customer_lifetime_value",
            uc: "custom_map",
            li: "debug_mode",
            Z: "developer_id",
            mi: "disable_merchant_reported_purchases",
            ni: "dc_custom_params",
            oi: "dc_natural_search",
            xe: "dynamic_event_settings",
            ri: "affiliation",
            Zf: "checkout_option",
            ag: "checkout_step",
            si: "coupon",
            ye: "item_list_name",
            ze: "list_name",
            ui: "promotions",
            yd: "shipping",
            cg: "tax",
            zd: "engagement_time_msec",
            vc: "enhanced_client_id",
            wc: "enhanced_conversions",
            dg: "enhanced_conversions_automatic_settings",
            Ad: "estimated_delivery_date",
            Ae: "euid_logged_in_state",
            Lb: "event_callback",
            Mb: "event_developer_id_string",
            eg: "event",
            Bd: "event_settings",
            Cd: "event_timeout",
            vi: "experiments",
            Be: "firebase_id",
            Dd: "first_party_collection",
            Ed: "_x_20",
            ub: "_x_19",
            fg: "fledge",
            gg: "flight_error_code",
            hg: "flight_error_message",
            ig: "gac_gclid",
            Fd: "gac_wbraid",
            jg: "gac_wbraid_multiple_conversions",
            Ce: "ga_restrict_domain",
            De: "ga_temp_client_id",
            kg: "gdpr_applies",
            lg: "geo_granularity",
            hb: "value_callback",
            Sa: "value_key",
            Gk: "google_ono",
            Ta: "google_signals",
            Gd: "google_tld",
            Hd: "groups",
            mg: "gsa_experiment_id",
            ng: "iframe_state",
            Id: "ignore_referrer",
            Ee: "internal_traffic_results",
            Jd: "is_legacy_loaded",
            og: "is_passthrough",
            Ja: "language",
            Fe: "legacy_developer_id_string",
            qa: "linker",
            Ob: "accept_incoming",
            vb: "decorate_forms",
            N: "domains",
            Pb: "url_position",
            pg: "method",
            xc: "new_customer",
            qg: "non_interaction",
            wi: "optimize_id",
            rg: "page_hostname",
            yc: "page_path",
            Ka: "page_referrer",
            Qb: "page_title",
            sg: "passengers",
            ug: "phone_conversion_callback",
            xi: "phone_conversion_country_code",
            vg: "phone_conversion_css_class",
            yi: "phone_conversion_ids",
            wg: "phone_conversion_number",
            xg: "phone_conversion_options",
            yg: "quantity",
            zc: "redact_device_info",
            Ge: "redact_enhanced_user_id",
            zi: "redact_ga_client_id",
            Ai: "redact_user_id",
            Kd: "referral_exclusion_definition",
            wb: "restricted_data_processing",
            Bi: "retoken",
            zg: "screen_name",
            xb: "screen_resolution",
            Ci: "search_term",
            Ea: "send_page_view",
            yb: "send_to",
            Ac: "session_duration",
            Ld: "session_engaged",
            He: "session_engaged_time",
            ib: "session_id",
            Md: "session_number",
            Bc: "delivery_postal_code",
            Bg: "temporary_client_id",
            Cg: "topmost_url",
            Di: "tracking_id",
            Ie: "traffic_type",
            La: "transaction_id",
            ma: "transport_url",
            Dg: "trip_type",
            Cc: "update",
            jb: "url_passthrough",
            Je: "_user_agent_architecture",
            Ke: "_user_agent_bitness",
            Le: "_user_agent_full_version_list",
            Me: "_user_agent_mobile",
            Ne: "_user_agent_model",
            Oe: "_user_agent_platform",
            Pe: "_user_agent_platform_version",
            Qe: "_user_agent_wow64",
            na: "user_data",
            Eg: "user_data_auto_latency",
            Fg: "user_data_auto_meta",
            Gg: "user_data_auto_multi",
            Hg: "user_data_auto_selectors",
            Ig: "user_data_auto_status",
            Re: "user_data_mode",
            Se: "user_data_settings",
            ra: "user_id",
            Fa: "user_properties",
            Jg: "us_privacy_string",
            ja: "value",
            Nd: "wbraid",
            Kg: "wbraid_multiple_conversions",
            Qg: "_host_name",
            Rg: "_in_page_command",
            Sg: "_is_passthrough_cid",
            Tg: "non_personalized_ads",
            Ic: "_sst_parameters",
            Qa: "conversion_label",
            Da: "page_location",
            Nb: "global_developer_id_string",
            Ag: "tc_privacy_string"
        }
    }
      , Wd = {}
      , Xd = Object.freeze((Wd[N.g.X] = 1,
    Wd[N.g.kd] = 1,
    Wd[N.g.sb] = 1,
    Wd[N.g.ba] = 1,
    Wd[N.g.eb] = 1,
    Wd[N.g.Ia] = 1,
    Wd[N.g.fb] = 1,
    Wd[N.g.qc] = 1,
    Wd[N.g.we] = 1,
    Wd[N.g.Ra] = 1,
    Wd[N.g.Kb] = 1,
    Wd[N.g.uc] = 1,
    Wd[N.g.Z] = 1,
    Wd[N.g.xe] = 1,
    Wd[N.g.Lb] = 1,
    Wd[N.g.Bd] = 1,
    Wd[N.g.Cd] = 1,
    Wd[N.g.Dd] = 1,
    Wd[N.g.Ce] = 1,
    Wd[N.g.Ta] = 1,
    Wd[N.g.Gd] = 1,
    Wd[N.g.Hd] = 1,
    Wd[N.g.Ee] = 1,
    Wd[N.g.Jd] = 1,
    Wd[N.g.qa] = 1,
    Wd[N.g.Ge] = 1,
    Wd[N.g.Kd] = 1,
    Wd[N.g.wb] = 1,
    Wd[N.g.Ea] = 1,
    Wd[N.g.yb] = 1,
    Wd[N.g.Ac] = 1,
    Wd[N.g.He] = 1,
    Wd[N.g.Bc] = 1,
    Wd[N.g.ma] = 1,
    Wd[N.g.Cc] = 1,
    Wd[N.g.Se] = 1,
    Wd[N.g.Fa] = 1,
    Wd[N.g.Ic] = 1,
    Wd));
    Object.freeze([N.g.Da, N.g.Ka, N.g.Qb, N.g.Ja, N.g.zg, N.g.ra, N.g.Be, N.g.ji]);
    var Yd = {}
      , Zd = Object.freeze((Yd[N.g.Yh] = 1,
    Yd[N.g.Zh] = 1,
    Yd[N.g.ai] = 1,
    Yd[N.g.bi] = 1,
    Yd[N.g.ci] = 1,
    Yd[N.g.di] = 1,
    Yd[N.g.ei] = 1,
    Yd[N.g.fi] = 1,
    Yd[N.g.gi] = 1,
    Yd[N.g.te] = 1,
    Yd))
      , $d = {}
      , ae = Object.freeze(($d[N.g.Uf] = 1,
    $d[N.g.Vf] = 1,
    $d[N.g.fc] = 1,
    $d[N.g.hc] = 1,
    $d[N.g.Wf] = 1,
    $d[N.g.Hb] = 1,
    $d[N.g.ic] = 1,
    $d[N.g.qb] = 1,
    $d[N.g.Ib] = 1,
    $d[N.g.rb] = 1,
    $d[N.g.za] = 1,
    $d[N.g.jc] = 1,
    $d[N.g.Aa] = 1,
    $d[N.g.Xf] = 1,
    $d))
      , be = Object.freeze([N.g.X, N.g.sb, N.g.Kb])
      , ce = Object.freeze([].concat(be))
      , de = Object.freeze([N.g.Ia, N.g.Cd, N.g.Ac, N.g.He, N.g.zd])
      , ee = Object.freeze([].concat(de))
      , fe = {}
      , ge = (fe[N.g.H] = "1",
    fe[N.g.O] = "2",
    fe)
      , he = {}
      , ie = Object.freeze((he[N.g.X] = 1,
    he[N.g.kd] = 1,
    he[N.g.xa] = 1,
    he[N.g.tb] = 1,
    he[N.g.ve] = 1,
    he[N.g.md] = 1,
    he[N.g.nd] = 1,
    he[N.g.od] = 1,
    he[N.g.ba] = 1,
    he[N.g.pd] = 1,
    he[N.g.Ca] = 1,
    he[N.g.oa] = 1,
    he[N.g.eb] = 1,
    he[N.g.Ia] = 1,
    he[N.g.fb] = 1,
    he[N.g.Ra] = 1,
    he[N.g.la] = 1,
    he[N.g.xd] = 1,
    he[N.g.Z] = 1,
    he[N.g.mi] = 1,
    he[N.g.wc] = 1,
    he[N.g.Ad] = 1,
    he[N.g.Be] = 1,
    he[N.g.Dd] = 1,
    he[N.g.Jd] = 1,
    he[N.g.Ja] = 1,
    he[N.g.xc] = 1,
    he[N.g.Da] = 1,
    he[N.g.Ka] = 1,
    he[N.g.ug] = 1,
    he[N.g.vg] = 1,
    he[N.g.wg] = 1,
    he[N.g.xg] = 1,
    he[N.g.wb] = 1,
    he[N.g.Ea] = 1,
    he[N.g.yb] = 1,
    he[N.g.Bc] = 1,
    he[N.g.La] = 1,
    he[N.g.ma] = 1,
    he[N.g.Cc] = 1,
    he[N.g.jb] = 1,
    he[N.g.na] = 1,
    he[N.g.ra] = 1,
    he[N.g.ja] = 1,
    he));
    Object.freeze(N.g);
    var je = {}
      , ke = z.google_tag_manager = z.google_tag_manager || {}
      , le = Math.random();
    je.Ye = "33f0";
    je.Hc = Number("0") || 0;
    je.ca = "dataLayer";
    je.Wh = "ChAI8MLVoAYQ9ou75oCgr/clEicAyADKDkXOHG9rybqDUK/UQJh/LBmq1a4U80LZnWbyMqx9l3WPuCAaAl0v";
    var me = {
        __cl: !0,
        __ecl: !0,
        __ehl: !0,
        __evl: !0,
        __fal: !0,
        __fil: !0,
        __fsl: !0,
        __hl: !0,
        __jel: !0,
        __lcl: !0,
        __sdl: !0,
        __tl: !0,
        __ytl: !0
    }, ne = {
        __paused: !0,
        __tg: !0
    }, oe;
    for (oe in me)
        me.hasOwnProperty(oe) && (ne[oe] = !0);
    var pe = Ba(""), qe, re = !1;
    re = !0;
    qe = re;
    var se, te = !1;
    se = te;
    var ue, ve = !1;
    ue = ve;
    var we, xe = !1;
    we = xe;
    je.jd = "www.googletagmanager.com";
    var ye = "" + je.jd + (qe ? "/gtag/js" : "/gtm.js")
      , ze = null
      , Ae = null
      , Be = {}
      , Ce = {}
      , De = {}
      , Ee = function() {
        var a = ke.sequence || 1;
        ke.sequence = a + 1;
        return a
    };
    je.Vh = "";
    var Fe = "";
    je.Sd = Fe;
    var Ge = new ua
      , He = {}
      , Ie = {}
      , Le = {
        name: je.ca,
        set: function(a, b) {
            G(La(a, b), He);
            Je()
        },
        get: function(a) {
            return Ke(a, 2)
        },
        reset: function() {
            Ge = new ua;
            He = {};
            Je()
        }
    }
      , Ke = function(a, b) {
        return 2 != b ? Ge.get(a) : Me(a)
    }
      , Me = function(a) {
        var b, c = a.split(".");
        b = b || [];
        for (var d = He, e = 0; e < c.length; e++) {
            if (null === d)
                return !1;
            if (void 0 === d)
                break;
            d = d[c[e]];
            if (-1 !== b.indexOf(d))
                return
        }
        return d
    }
      , Ne = function(a, b) {
        Ie.hasOwnProperty(a) || (Ge.set(a, b),
        G(La(a, b), He),
        Je())
    }
      , Je = function(a) {
        l(Ie, function(b, c) {
            Ge.set(b, c);
            G(La(b), He);
            G(La(b, c), He);
            a && delete Ie[b]
        })
    }
      , Oe = function(a, b) {
        var c, d = 1 !== (void 0 === b ? 2 : b) ? Me(a) : Ge.get(a);
        "array" === Wb(d) || "object" === Wb(d) ? c = G(d) : c = d;
        return c
    };
    var Pe = new function(a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? !1 : b
    }
    (1933);
    var Qe = function(a) {
        Qe[" "](a);
        return a
    };
    Qe[" "] = function() {}
    ;
    var Se = function() {
        var a = Re
          , b = "pf";
        if (a.pf && a.hasOwnProperty(b))
            return a.pf;
        var c = new a;
        return a.pf = c
    };
    var Re = function() {
        var a = {};
        this.h = function() {
            var b = Pe.h
              , c = Pe.defaultValue;
            return null != a[b] ? a[b] : c
        }
        ;
        this.m = function() {
            a[Pe.h] = !0
        }
    };
    var Ve = !1
      , We = !1
      , Xe = [];
    function Ye() {
        var a = Cb("google_tag_data", {});
        a.ics || (a.ics = {
            entries: {},
            set: Ze,
            update: $e,
            declare: af,
            addListener: bf,
            notifyListeners: cf,
            active: !1,
            usedDeclare: !1,
            usedDefault: !1,
            usedUpdate: !1,
            accessedDefault: !1,
            accessedAny: !1,
            wasSetLate: !1
        });
        return a.ics
    }
    function af(a, b, c, d, e) {
        var f = Ye();
        f.active = !0;
        f.usedDeclare = !0;
        var g = f.entries
          , k = g[a] || {}
          , m = k.region
          , n = c && h(c) ? c.toUpperCase() : void 0;
        d = d.toUpperCase();
        e = e.toUpperCase();
        if ("" === d || n === e || (n === d ? m !== e : !n && !m)) {
            var p = {
                region: n,
                declare: "granted" === b,
                initial: k.initial,
                update: k.update,
                quiet: k.quiet
            };
            if ("" !== d || !1 !== k.declare)
                g[a] = p
        }
    }
    function Ze(a, b, c, d, e, f) {
        var g = Ye();
        g.usedDefault || !g.accessedDefault && !g.accessedAny || (g.wasSetLate = !0);
        g.active = !0;
        g.usedDefault = !0;
        Ya("TAGGING", 19);
        if (void 0 == b)
            Ya("TAGGING", 18);
        else {
            var k = g.entries
              , m = k[a] || {}
              , n = m.region
              , p = c && h(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
                var q = !!(f && 0 < f && void 0 === m.update)
                  , t = {
                    region: p,
                    initial: "granted" === b,
                    declare: m.declare,
                    update: m.update,
                    quiet: q
                };
                if ("" !== d || !1 !== m.initial)
                    k[a] = t;
                q && z.setTimeout(function() {
                    k[a] === t && t.quiet && (t.quiet = !1,
                    df(a),
                    cf(),
                    Ya("TAGGING", 2))
                }, f)
            }
        }
    }
    function $e(a, b) {
        var c = Ye();
        c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
        c.active = !0;
        c.usedUpdate = !0;
        if (void 0 != b) {
            var d = ef(c, a)
              , e = c.entries
              , f = e[a] = e[a] || {};
            f.update = "granted" === b;
            var g = ef(c, a);
            f.quiet ? (f.quiet = !1,
            df(a)) : g !== d && df(a)
        }
    }
    function bf(a, b) {
        Xe.push({
            df: a,
            rj: b
        })
    }
    function df(a) {
        for (var b = 0; b < Xe.length; ++b) {
            var c = Xe[b];
            ra(c.df) && -1 !== c.df.indexOf(a) && (c.Ah = !0)
        }
    }
    function cf(a, b) {
        for (var c = 0; c < Xe.length; ++c) {
            var d = Xe[c];
            if (d.Ah) {
                d.Ah = !1;
                try {
                    d.rj({
                        consentEventId: a,
                        consentPriorityId: b
                    })
                } catch (e) {}
            }
        }
    }
    function ef(a, b) {
        var c = a.entries[b] || {}
          , d = c.update;
        if (void 0 !== d)
            return d;
        d = c.initial;
        return void 0 !== d ? d : c.declare
    }
    var ff = function(a) {
        var b = Ye();
        b.accessedAny = !0;
        return ef(b, a)
    }
      , gf = function(a) {
        var b = Ye();
        b.accessedDefault = !0;
        return (b.entries[a] || {}).initial
    }
      , hf = function(a) {
        return (Ye().entries[a] || {}).declare
    }
      , jf = function(a) {
        var b = Ye();
        b.accessedAny = !0;
        return !(b.entries[a] || {}).quiet
    }
      , kf = function() {
        if (!Se().h())
            return !1;
        var a = Ye();
        a.accessedAny = !0;
        return a.active
    }
      , lf = function() {
        var a = Ye();
        a.accessedDefault = !0;
        return a.usedDefault
    }
      , mf = function() {
        return Ye().usedDeclare
    }
      , nf = function(a, b) {
        Ye().addListener(a, b)
    }
      , of = function(a, b) {
        Ye().notifyListeners(a, b)
    }
      , pf = function(a, b) {
        function c() {
            for (var e = 0; e < b.length; e++)
                if (!jf(b[e]))
                    return !0;
            return !1
        }
        if (c()) {
            var d = !1;
            nf(b, function(e) {
                d || c() || (d = !0,
                a(e))
            })
        } else
            a({})
    }
      , qf = function(a, b) {
        function c() {
            for (var f = [], g = 0; g < d.length; g++) {
                var k = d[g];
                !1 === ff(k) || e[k] || (f.push(k),
                e[k] = !0)
            }
            return f
        }
        var d = h(b) ? [b] : b
          , e = {};
        c().length !== d.length && nf(d, function(f) {
            var g = c();
            0 < g.length && (f.df = g,
            a(f))
        })
    };
    var rf = /:[0-9]+$/
      , sf = /^\d+\.fls\.doubleclick\.net$/
      , tf = function(a, b, c) {
        for (var d = a.split("&"), e = 0; e < d.length; e++) {
            var f = d[e].split("=");
            if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
                var g = f.slice(1).join("=");
                return c ? g : decodeURIComponent(g).replace(/\+/g, " ")
            }
        }
    }
      , wf = function(a, b, c, d, e) {
        b && (b = String(b).toLowerCase());
        if ("protocol" === b || "port" === b)
            a.protocol = uf(a.protocol) || uf(z.location.protocol);
        "port" === b ? a.port = String(Number(a.hostname ? a.port : z.location.port) || ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || z.location.hostname).replace(rf, "").toLowerCase());
        return vf(a, b, c, d, e)
    }
      , vf = function(a, b, c, d, e) {
        var f, g = uf(a.protocol);
        b && (b = String(b).toLowerCase());
        switch (b) {
        case "url_no_fragment":
            f = xf(a);
            break;
        case "protocol":
            f = g;
            break;
        case "host":
            f = a.hostname.replace(rf, "").toLowerCase();
            if (c) {
                var k = /^www\d*\./.exec(f);
                k && k[0] && (f = f.substr(k[0].length))
            }
            break;
        case "port":
            f = String(Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : ""));
            break;
        case "path":
            a.pathname || a.hostname || Ya("TAGGING", 1);
            f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
            var m = f.split("/");
            0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
            f = m.join("/");
            break;
        case "query":
            f = a.search.replace("?", "");
            e && (f = tf(f, e));
            break;
        case "extension":
            var n = a.pathname.split(".");
            f = 1 < n.length ? n[n.length - 1] : "";
            f = f.split("/")[0];
            break;
        case "fragment":
            f = a.hash.replace("#", "");
            break;
        default:
            f = a && a.href
        }
        return f
    }
      , uf = function(a) {
        return a ? a.replace(":", "").toLowerCase() : ""
    }
      , xf = function(a) {
        var b = "";
        if (a && a.href) {
            var c = a.href.indexOf("#");
            b = 0 > c ? a.href : a.href.substr(0, c)
        }
        return b
    }
      , yf = function(a) {
        var b = D.createElement("a");
        a && (b.href = a);
        var c = b.pathname;
        "/" !== c[0] && (a || Ya("TAGGING", 1),
        c = "/" + c);
        var d = b.hostname.replace(rf, "");
        return {
            href: b.href,
            protocol: b.protocol,
            host: b.host,
            hostname: d,
            pathname: c,
            search: b.search,
            hash: b.hash,
            port: b.port
        }
    }
      , zf = function(a) {
        function b(n) {
            var p = n.split("=")[0];
            return 0 > d.indexOf(p) ? n : p + "=0"
        }
        function c(n) {
            return n.split("&").map(b).filter(function(p) {
                return void 0 !== p
            }).join("&")
        }
        var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" ")
          , e = yf(a)
          , f = a.split(/[?#]/)[0]
          , g = e.search
          , k = e.hash;
        "?" === g[0] && (g = g.substring(1));
        "#" === k[0] && (k = k.substring(1));
        g = c(g);
        k = c(k);
        "" !== g && (g = "?" + g);
        "" !== k && (k = "#" + k);
        var m = "" + f + g + k;
        "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
        return m
    }
      , Af = function(a) {
        var b = yf(z.location.href)
          , c = wf(b, "host", !1);
        if (c && c.match(sf)) {
            var d = wf(b, "path").split(a + "=");
            if (1 < d.length)
                return d[1].split(";")[0].split("?")[0]
        }
    };
    var Bf = function(a) {
        var b = 1, c, d, e;
        if (a)
            for (b = 0,
            d = a.length - 1; 0 <= d; d--)
                e = a.charCodeAt(d),
                b = (b << 6 & 268435455) + e + (e << 14),
                c = b & 266338304,
                b = 0 !== c ? b ^ c >> 21 : b;
        return b
    };
    var Cf = function(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var g = e[f].split("=")
              , k = g[0].replace(/^\s*|\s*$/g, "");
            if (k && k == a) {
                var m = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                m && c && (m = decodeURIComponent(m));
                d.push(m)
            }
        }
        return d
    };
    var Df = function(a, b) {
        var c = function() {};
        c.prototype = a.prototype;
        var d = new c;
        a.apply(d, Array.prototype.slice.call(arguments, 1));
        return d
    }
      , Ef = function(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };
    function Ff(a) {
        return "null" !== a.origin
    }
    ;var If = function(a, b, c, d) {
        return Gf(d) ? Cf(a, String(b || Hf()), c) : []
    }
      , Lf = function(a, b, c, d, e) {
        if (Gf(e)) {
            var f = Jf(a, d, e);
            if (1 === f.length)
                return f[0].id;
            if (0 !== f.length) {
                f = Kf(f, function(g) {
                    return g.Xd
                }, b);
                if (1 === f.length)
                    return f[0].id;
                f = Kf(f, function(g) {
                    return g.Vc
                }, c);
                return f[0] ? f[0].id : void 0
            }
        }
    };
    function Mf(a, b, c, d) {
        var e = Hf()
          , f = window;
        Ff(f) && (f.document.cookie = a);
        var g = Hf();
        return e != g || void 0 != c && 0 <= If(b, g, !1, d).indexOf(c)
    }
    var Qf = function(a, b, c) {
        function d(u, r, v) {
            if (null == v)
                return delete g[r],
                u;
            g[r] = v;
            return u + "; " + r + "=" + v
        }
        function e(u, r) {
            if (null == r)
                return delete g[r],
                u;
            g[r] = !0;
            return u + "; " + r
        }
        if (!Gf(c.Wa))
            return 2;
        var f;
        void 0 == b ? f = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)),
        b = Nf(b),
        f = a + "=" + b);
        var g = {};
        f = d(f, "path", c.path);
        var k;
        c.expires instanceof Date ? k = c.expires.toUTCString() : null != c.expires && (k = "" + c.expires);
        f = d(f, "expires", k);
        f = d(f, "max-age", c.Sk);
        f = d(f, "samesite", c.Tk);
        c.Uk && (f = e(f, "secure"));
        var m = c.domain;
        if (m && "auto" === m.toLowerCase()) {
            for (var n = Of(), p = 0; p < n.length; ++p) {
                var q = "none" !== n[p] ? n[p] : void 0
                  , t = d(f, "domain", q);
                t = e(t, c.flags);
                if (!Pf(q, c.path) && Mf(t, a, b, c.Wa))
                    return 0
            }
            return 1
        }
        m && "none" !== m.toLowerCase() && (f = d(f, "domain", m));
        f = e(f, c.flags);
        return Pf(m, c.path) ? 1 : Mf(f, a, b, c.Wa) ? 0 : 1
    }
      , Rf = function(a, b, c) {
        null == c.path && (c.path = "/");
        c.domain || (c.domain = "auto");
        return Qf(a, b, c)
    };
    function Kf(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var k = a[g]
              , m = b(k);
            m === c ? d.push(k) : void 0 === f || m < f ? (e = [k],
            f = m) : m === f && e.push(k)
        }
        return 0 < d.length ? d : e
    }
    function Jf(a, b, c) {
        for (var d = [], e = If(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split(".")
              , k = g.shift();
            if (!b || -1 !== b.indexOf(k)) {
                var m = g.shift();
                m && (m = m.split("-"),
                d.push({
                    id: g.join("."),
                    Xd: 1 * m[0] || 1,
                    Vc: 1 * m[1] || 1
                }))
            }
        }
        return d
    }
    var Nf = function(a) {
        a && 1200 < a.length && (a = a.substring(0, 1200));
        return a
    }
      , Sf = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/
      , Tf = /(^|\.)doubleclick\.net$/i
      , Pf = function(a, b) {
        return Tf.test(window.document.location.hostname) || "/" === b && Sf.test(a)
    }
      , Hf = function() {
        return Ff(window) ? window.document.cookie : ""
    }
      , Of = function() {
        var a = []
          , b = window.document.location.hostname.split(".");
        if (4 === b.length) {
            var c = b[b.length - 1];
            if (parseInt(c, 10).toString() === c)
                return ["none"]
        }
        for (var d = b.length - 2; 0 <= d; d--)
            a.push(b.slice(d).join("."));
        var e = window.document.location.hostname;
        Tf.test(e) || Sf.test(e) || a.push("none");
        return a
    }
      , Gf = function(a) {
        if (!Se().h() || !a || !kf())
            return !0;
        if (!jf(a))
            return !1;
        var b = ff(a);
        return null == b ? !0 : !!b
    };
    var Uf = function(a) {
        var b = Math.round(2147483647 * Math.random());
        return a ? String(b ^ Bf(a) & 2147483647) : String(b)
    }
      , Vf = function(a) {
        return [Uf(a), Math.round(Fa() / 1E3)].join(".")
    }
      , Yf = function(a, b, c, d, e) {
        var f = Wf(b);
        return Lf(a, f, Xf(c), d, e)
    }
      , Zf = function(a, b, c, d) {
        var e = "" + Wf(c)
          , f = Xf(d);
        1 < f && (e += "-" + f);
        return [b, e, a].join(".")
    }
      , Wf = function(a) {
        if (!a)
            return 1;
        a = 0 === a.indexOf(".") ? a.substr(1) : a;
        return a.split(".").length
    }
      , Xf = function(a) {
        if (!a || "/" === a)
            return 1;
        "/" !== a[0] && (a = "/" + a);
        "/" !== a[a.length - 1] && (a += "/");
        return a.split("/").length - 1
    };
    function $f(a, b, c, d) {
        var e, f = Number(null != a.ob ? a.ob : void 0);
        0 !== f && (e = new Date((b || Fa()) + 1E3 * (f || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: e,
            Wa: d
        }
    }
    ;var ag;
    var eg = function() {
        var a = bg
          , b = cg
          , c = dg()
          , d = function(g) {
            a(g.target || g.srcElement || {})
        }
          , e = function(g) {
            b(g.target || g.srcElement || {})
        };
        if (!c.init) {
            Lb(D, "mousedown", d);
            Lb(D, "keyup", d);
            Lb(D, "submit", e);
            var f = HTMLFormElement.prototype.submit;
            HTMLFormElement.prototype.submit = function() {
                b(this);
                f.call(this)
            }
            ;
            c.init = !0
        }
    }
      , fg = function(a, b, c, d, e) {
        var f = {
            callback: a,
            domains: b,
            fragment: 2 === c,
            placement: c,
            forms: d,
            sameHost: e
        };
        dg().decorators.push(f)
    }
      , gg = function(a, b, c) {
        for (var d = dg().decorators, e = {}, f = 0; f < d.length; ++f) {
            var g = d[f], k;
            if (k = !c || g.forms)
                a: {
                    var m = g.domains
                      , n = a
                      , p = !!g.sameHost;
                    if (m && (p || n !== D.location.hostname))
                        for (var q = 0; q < m.length; q++)
                            if (m[q]instanceof RegExp) {
                                if (m[q].test(n)) {
                                    k = !0;
                                    break a
                                }
                            } else if (0 <= n.indexOf(m[q]) || p && 0 <= m[q].indexOf(n)) {
                                k = !0;
                                break a
                            }
                    k = !1
                }
            if (k) {
                var t = g.placement;
                void 0 == t && (t = g.fragment ? 2 : 1);
                t === b && Ia(e, g.callback())
            }
        }
        return e
    };
    function dg() {
        var a = Cb("google_tag_data", {})
          , b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        },
        a.gl = b);
        return b
    }
    ;var hg = /(.*?)\*(.*?)\*(.*)/
      , ig = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/
      , jg = /^(?:www\.|m\.|amp\.)+/
      , kg = /([^?#]+)(\?[^#]*)?(#.*)?/;
    function lg(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
    }
    var ng = function(a) {
        var b = [], c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c),
                b.push(Va(String(d))))
            }
        var e = b.join("*");
        return ["1", mg(e), e].join("*")
    };
    function mg(a, b) {
        var c = [Ab.userAgent, (new Date).getTimezoneOffset(), Ab.userLanguage || Ab.language, Math.floor(Fa() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"), d;
        if (!(d = ag)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var g = f, k = 0; 8 > k; k++)
                    g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
                e[f] = g
            }
            d = e
        }
        ag = d;
        for (var m = 4294967295, n = 0; n < c.length; n++)
            m = m >>> 8 ^ ag[(m ^ c.charCodeAt(n)) & 255];
        return ((m ^ -1) >>> 0).toString(36)
    }
    function og() {
        return function(a) {
            var b = yf(z.location.href)
              , c = b.search.replace("?", "")
              , d = tf(c, "_gl", !0) || "";
            a.query = pg(d) || {};
            var e = wf(b, "fragment").match(lg("_gl"));
            a.fragment = pg(e && e[3] || "") || {}
        }
    }
    function qg(a, b) {
        var c = lg(a).exec(b)
          , d = b;
        if (c) {
            var e = c[2]
              , f = c[4];
            d = c[1];
            f && (d = d + e + f)
        }
        return d
    }
    var rg = function(a, b) {
        b || (b = "_gl");
        var c = kg.exec(a);
        if (!c)
            return "";
        var d = c[1]
          , e = qg(b, (c[2] || "").slice(1))
          , f = qg(b, (c[3] || "").slice(1));
        e.length && (e = "?" + e);
        f.length && (f = "#" + f);
        return "" + d + e + f
    }
      , sg = function(a) {
        var b = og()
          , c = dg();
        c.data || (c.data = {
            query: {},
            fragment: {}
        },
        b(c.data));
        var d = {}
          , e = c.data;
        e && (Ia(d, e.query),
        a && Ia(d, e.fragment));
        return d
    }
      , pg = function(a) {
        try {
            var b = tg(a, 3);
            if (void 0 !== b) {
                for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                    var f = d[e]
                      , g = Wa(d[e + 1]);
                    c[f] = g
                }
                Ya("TAGGING", 6);
                return c
            }
        } catch (k) {
            Ya("TAGGING", 8)
        }
    };
    function tg(a, b) {
        if (a) {
            var c;
            a: {
                for (var d = a, e = 0; 3 > e; ++e) {
                    var f = hg.exec(d);
                    if (f) {
                        c = f;
                        break a
                    }
                    d = decodeURIComponent(d)
                }
                c = void 0
            }
            var g = c;
            if (g && "1" === g[1]) {
                var k = g[3], m;
                a: {
                    for (var n = g[2], p = 0; p < b; ++p)
                        if (n === mg(k, p)) {
                            m = !0;
                            break a
                        }
                    m = !1
                }
                if (m)
                    return k;
                Ya("TAGGING", 7)
            }
        }
    }
    function ug(a, b, c, d) {
        function e(p) {
            p = qg(a, p);
            var q = p.charAt(p.length - 1);
            p && "&" !== q && (p += "&");
            return p + n
        }
        d = void 0 === d ? !1 : d;
        var f = kg.exec(c);
        if (!f)
            return "";
        var g = f[1]
          , k = f[2] || ""
          , m = f[3] || ""
          , n = a + "=" + b;
        d ? m = "#" + e(m.substring(1)) : k = "?" + e(k.substring(1));
        return "" + g + k + m
    }
    function vg(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase()
          , d = gg(b, 1, c)
          , e = gg(b, 2, c)
          , f = gg(b, 3, c);
        if (Ja(d)) {
            var g = ng(d);
            c ? wg("_gl", g, a) : xg("_gl", g, a, !1)
        }
        if (!c && Ja(e)) {
            var k = ng(e);
            xg("_gl", k, a, !0)
        }
        for (var m in f)
            if (f.hasOwnProperty(m))
                a: {
                    var n = m
                      , p = f[m]
                      , q = a;
                    if (q.tagName) {
                        if ("a" === q.tagName.toLowerCase()) {
                            xg(n, p, q);
                            break a
                        }
                        if ("form" === q.tagName.toLowerCase()) {
                            wg(n, p, q);
                            break a
                        }
                    }
                    "string" == typeof q && ug(n, p, q)
                }
    }
    function xg(a, b, c, d) {
        if (c.href) {
            var e = ug(a, b, c.href, void 0 === d ? !1 : d);
            fb.test(e) && (c.href = e)
        }
    }
    function wg(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                    var k = e[g];
                    if (k.name === a) {
                        k.setAttribute("value", b);
                        f = !0;
                        break
                    }
                }
                if (!f) {
                    var m = D.createElement("input");
                    m.setAttribute("type", "hidden");
                    m.setAttribute("name", a);
                    m.setAttribute("value", b);
                    c.appendChild(m)
                }
            } else if ("post" === d) {
                var n = ug(a, b, c.action);
                fb.test(n) && (c.action = n)
            }
        }
    }
    function bg(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && 0 < d; ) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || vg(e, e.hostname)
            }
        } catch (g) {}
    }
    function cg(a) {
        try {
            if (a.action) {
                var b = wf(yf(a.action), "host");
                vg(a, b)
            }
        } catch (c) {}
    }
    var yg = function(a, b, c, d) {
        eg();
        fg(a, b, "fragment" === c ? 2 : 1, !!d, !1)
    }
      , zg = function(a, b) {
        eg();
        fg(a, [vf(z.location, "host", !0)], b, !0, !0)
    }
      , Ag = function() {
        var a = D.location.hostname
          , b = ig.exec(D.referrer);
        if (!b)
            return !1;
        var c = b[2]
          , d = b[1]
          , e = "";
        if (c) {
            var f = c.split("/")
              , g = f[1];
            e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
        } else if (d) {
            if (0 === d.indexOf("xn--"))
                return !1;
            e = d.replace(/-/g, ".").replace(/\.\./g, "-")
        }
        var k = a.replace(jg, ""), m = e.replace(jg, ""), n;
        if (!(n = k === m)) {
            var p = "." + m;
            n = k.substring(k.length - p.length, k.length) === p
        }
        return n
    }
      , Bg = function(a, b) {
        return !1 === a ? !1 : a || b || Ag()
    };
    var Cg = {}
      , Dg = function(a) {
        return void 0 == Cg[a] ? !1 : Cg[a]
    };
    var Eg = ["1"]
      , Fg = {}
      , Ng = {}
      , Sg = function(a, b) {
        b = void 0 === b ? !0 : b;
        var c = Og(a.prefix);
        if (!Fg[c])
            if (Pg(c, a.path, a.domain)) {
                if (Dg("enable_auid_cross_domain")) {
                    var d = Ng[Og(a.prefix)];
                    Qg(a, d ? d.id : void 0, d ? d.uf : void 0)
                }
            } else {
                if (Dg("enable_auid_fl_iframe")) {
                    var e = Af("auiddc");
                    if (e) {
                        Ya("TAGGING", 17);
                        Fg[c] = e;
                        return
                    }
                }
                if (b) {
                    var f = Og(a.prefix)
                      , g = Vf();
                    if (0 === Rg(f, g, a)) {
                        var k = Cb("google_tag_data", {});
                        k._gcl_au || (k._gcl_au = g)
                    }
                    Pg(c, a.path, a.domain)
                }
            }
    };
    function Qg(a, b, c) {
        var d = Og(a.prefix)
          , e = Fg[d];
        if (e) {
            var f = e.split(".");
            if (2 === f.length) {
                var g = Number(f[1]) || 0;
                if (g) {
                    var k = e;
                    b && (k = e + "." + b + "." + (c ? c : Math.floor(Fa() / 1E3)));
                    Rg(d, k, a, 1E3 * g)
                }
            }
        }
    }
    function Rg(a, b, c, d) {
        var e = Zf(b, "1", c.domain, c.path)
          , f = $f(c, d);
        f.Wa = "ad_storage";
        return Rf(a, e, f)
    }
    function Pg(a, b, c) {
        var d = Yf(a, b, c, Eg, "ad_storage");
        if (!d)
            return !1;
        Tg(a, d);
        return !0
    }
    function Tg(a, b) {
        var c = b.split(".");
        5 === c.length ? (Fg[a] = c.slice(0, 2).join("."),
        Ng[a] = {
            id: c.slice(2, 4).join("."),
            uf: Number(c[4]) || 0
        }) : 3 === c.length ? Ng[a] = {
            id: c.slice(0, 2).join("."),
            uf: Number(c[2]) || 0
        } : Fg[a] = b
    }
    function Og(a) {
        return (a || "_gcl") + "_au"
    }
    function Ug(a) {
        kf() || a();
        pf(function() {
            ff("ad_storage") && a();
            qf(a, "ad_storage")
        }, ["ad_storage"])
    }
    function Vg(a) {
        var b = sg(!0)
          , c = Og(a.prefix);
        Ug(function() {
            var d = b[c];
            if (d) {
                Tg(c, d);
                var e = 1E3 * Number(Fg[c].split(".")[1]);
                if (e) {
                    Ya("TAGGING", 16);
                    var f = $f(a, e);
                    f.Wa = "ad_storage";
                    var g = Zf(d, "1", a.domain, a.path);
                    Rf(c, g, f)
                }
            }
        })
    }
    function Wg(a, b, c, d) {
        d = d || {};
        var e = function() {
            var f = Og(d.prefix)
              , g = {}
              , k = Yf(f, d.path, d.domain, Eg, "ad_storage");
            if (!k)
                return g;
            g[f] = k;
            return g
        };
        Ug(function() {
            yg(e, a, b, c)
        })
    }
    ;var P = [];
    P[7] = !0;
    P[9] = !0;
    P[27] = !0;
    P[11] = !0;
    P[13] = !0;
    P[15] = !0;
    P[16] = !0;
    P[25] = !0;
    P[36] = !0;
    P[38] = !0;
    P[40] = !0;
    P[43] = !0;
    P[52] = !0;
    P[57] = !0;
    P[58] = !0;
    P[60] = !0;
    P[61] = !0;
    P[68] = !0;
    P[69] = !0;
    P[72] = !0;
    P[76] = !0;
    P[77] = !0;
    P[79] = !0;
    P[83] = !0;
    P[84] = !0;
    P[88] = !0;
    P[89] = !0;
    var Q = function(a) {
        return !!P[a]
    };
    var Yg = Xg();
    function Xg() {
        if (!Q(87))
            return {};
        try {
            return JSON.parse(Wa("eyIwIjoiSU4iLCIxIjoiSU4tVE4iLCIyIjpmYWxzZSwiMyI6Imdvb2dsZS5jby5pbiIsIjQiOiIiLCI1Ijp0cnVlfQ"))
        } catch (a) {
            return J(123),
            Ya("HEALTH", 2),
            {}
        }
    }
    var Zg = {
        ij: "IN",
        jk: "IN-TN",
        Fj: "true",
        sj: ""
    }
      , $g = function() {
        var a;
        return Q(87) ? null != (a = Yg["0"]) ? a : "" : Zg.ij
    }
      , ah = function() {
        var a;
        return Q(87) ? null != (a = Yg["1"]) ? a : "" : Zg.jk
    }
      , bh = function() {
        var a = "";
        return a
    }
      , ch = function() {
        var a = !1;
        return a
    };
    var dh, eh = !1, fh = function(a) {
        if (!eh) {
            eh = !0;
            dh = dh || {}
        }
        return dh[a]
    };
    var gh = function() {
        var a = z.screen;
        return {
            width: a ? a.width : 0,
            height: a ? a.height : 0
        }
    }
      , hh = function(a) {
        if (D.hidden)
            return !0;
        var b = a.getBoundingClientRect();
        if (b.top == b.bottom || b.left == b.right || !z.getComputedStyle)
            return !0;
        var c = z.getComputedStyle(a, null);
        if ("hidden" === c.visibility)
            return !0;
        for (var d = a, e = c; d; ) {
            if ("none" === e.display)
                return !0;
            var f = e.opacity
              , g = e.filter;
            if (g) {
                var k = g.indexOf("opacity(");
                0 <= k && (g = g.substring(k + 8, g.indexOf(")", k)),
                "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)),
                f = Math.min(g, f))
            }
            if (void 0 !== f && 0 >= f)
                return !0;
            (d = d.parentElement) && (e = z.getComputedStyle(d, null))
        }
        return !1
    };
    function Nh() {}
    function Oh() {}
    ;function Ph(a) {
        for (var b = [], c = 0; c < Qh.length; c++) {
            var d = a(Qh[c]);
            b[c] = !0 === d ? "1" : !1 === d ? "0" : "-"
        }
        return b.join("")
    }
    var Qh = [N.g.H, N.g.O]
      , Rh = function(a) {
        for (var b = a[N.g.hd], c = Array.isArray(b) ? b : [b], d = {
            Zb: 0
        }; d.Zb < c.length; d = {
            Zb: d.Zb
        },
        ++d.Zb)
            l(a, function(e) {
                return function(f, g) {
                    if (f !== N.g.hd) {
                        var k = c[e.Zb]
                          , m = $g()
                          , n = ah();
                        We = !0;
                        Ve && Ya("TAGGING", 20);
                        Ye().declare(f, g, k, m, n)
                    }
                }
            }(d))
    }
      , Sh = function(a) {
        var b = a[N.g.hd];
        b && J(40);
        var c = a[N.g.Lf];
        c && J(41);
        for (var d = ra(b) ? b : [b], e = {
            ac: 0
        }; e.ac < d.length; e = {
            ac: e.ac
        },
        ++e.ac)
            l(a, function(f) {
                return function(g, k) {
                    if (g !== N.g.hd && g !== N.g.Lf) {
                        var m = d[f.ac]
                          , n = Number(c)
                          , p = $g()
                          , q = ah();
                        Ve = !0;
                        We && Ya("TAGGING", 20);
                        Ye().set(g, k, m, p, q, n)
                    }
                }
            }(e))
    }
      , Th = function(a, b) {
        l(a, function(c, d) {
            Ve = !0;
            We && Ya("TAGGING", 20);
            Ye().update(c, d)
        });
        of(b.eventId, b.priorityId)
    }
      , Uh = function(a) {
        var b = ff(a);
        return void 0 != b ? b : !0
    }
      , Vh = function() {
        return "G1" + Ph(ff)
    }
      , Wh = function(a, b) {
        qf(a, b)
    }
      , Xh = function(a, b) {
        pf(a, b)
    };
    var Yh = function() {
        ke.dedupe_gclid || (ke.dedupe_gclid = "" + Vf());
        return ke.dedupe_gclid
    };
    var Zh = function() {
        var a = !1;
        return a
    };
    var S = {
        C: "UA-116659357-2",
        Pa: ""
    }
      , $h = {
        yh: "UA-116659357-2",
        zh: "UA-116659357-2"
    };
    S.We = Ba("");
    var ai = function() {
        return $h.yh ? $h.yh.split("|") : [S.C]
    }
      , bi = function() {
        return $h.zh ? $h.zh.split("|") : []
    }
      , ci = function() {
        this.container = {};
        this.destination = {};
        this.canonical = {}
    }
      , ei = function() {
        for (var a = di(), b = ai(), c = 0; c < b.length; c++) {
            var d = a.container[b[c]];
            !d || qa(d) ? a.container[b[c]] = {
                state: 2
            } : d.state = 2
        }
        for (var e = bi(), f = 0; f < e.length; f++) {
            var g = a.destination[e[f]];
            g && 0 === g.state && J(93);
            g ? g.state = 2 : a.destination[e[f]] = {
                state: 2
            }
        }
        a.canonical[S.Pa] = 2
    }
      , fi = function(a) {
        return !!di().container[a]
    }
      , gi = function() {
        var a = di().container, b;
        for (b in a)
            if (a.hasOwnProperty(b)) {
                var c = a[b];
                if (qa(c)) {
                    if (1 === c)
                        return !0
                } else if (1 === c.state)
                    return !0
            }
        return !1
    }
      , hi = function() {
        var a = {};
        l(di().destination, function(b, c) {
            0 === c.state && (a[b] = c)
        });
        return a
    };
    function di() {
        var a = ke.tidr;
        a || (a = new ci,
        ke.tidr = a);
        return a
    }
    var ii = {
        UA: 1,
        AW: 2,
        DC: 3,
        G: 4,
        GF: 5,
        GT: 12,
        GTM: 14,
        HA: 6,
        MC: 7
    }
      , ji = function(a) {
        var b = S.C.split("-")[0].toUpperCase()
          , c = {};
        c.kj = S.C;
        c.nk = je.Hc;
        c.rk = je.Ye;
        c.Tj = S.We ? 2 : 1;
        qe ? (c.ie = ii[b],
        c.ie || (c.ie = 0)) : c.ie = we ? 13 : 10;
        ue ? c.wf = 1 : Zh() ? c.wf = 2 : c.wf = 3;
        var d;
        var e = c.ie
          , f = c.wf;
        void 0 === e ? d = "" : (f || (f = 0),
        d = "" + td(1, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[e << 2 | f]);
        var g = c.Nk, k = 4 + d + (g ? "" + td(2, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[g] : ""), m, n = c.rk;
        m = n && sd.test(n) ? "" + td(3, 2) + n : "";
        var p, q = c.nk;
        p = q ? "" + td(4, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[q] : "";
        var t;
        var u = c.kj;
        if (u && a) {
            var r = u.split("-")
              , v = r[0].toUpperCase();
            if ("GTM" !== v && "OPT" !== v)
                t = "";
            else {
                var w = r[1];
                t = "" + td(5, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[1 + w.length] + (c.Tj || 0) + w
            }
        } else
            t = "";
        return k + m + p + t
    };
    function ki(a, b) {
        if ("" === a)
            return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    }
    ;var li = function(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };
    function mi() {
        return gb ? !!nb && !!nb.platform : !1
    }
    function ni() {
        return qb("iPhone") && !qb("iPod") && !qb("iPad")
    }
    function oi() {
        ni() || qb("iPad") || qb("iPod")
    }
    ;sb();
    rb() || qb("Trident") || qb("MSIE");
    qb("Edge");
    !qb("Gecko") || -1 != mb().toLowerCase().indexOf("webkit") && !qb("Edge") || qb("Trident") || qb("MSIE") || qb("Edge");
    -1 != mb().toLowerCase().indexOf("webkit") && !qb("Edge") && qb("Mobile");
    mi() || qb("Macintosh");
    mi() || qb("Windows");
    (mi() ? "Linux" === nb.platform : qb("Linux")) || mi() || qb("CrOS");
    var pi = ma.navigator || null;
    pi && (pi.appVersion || "").indexOf("X11");
    mi() || qb("Android");
    ni();
    qb("iPad");
    qb("iPod");
    oi();
    mb().toLowerCase().indexOf("kaios");
    var qi = function(a, b, c, d) {
        for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d; ) {
            var g = a.charCodeAt(e - 1);
            if (38 == g || 63 == g) {
                var k = a.charCodeAt(e + f);
                if (!k || 61 == k || 38 == k || 35 == k)
                    return e
            }
            e += f + 1
        }
        return -1
    }
      , ri = /#|$/
      , si = function(a, b) {
        var c = a.search(ri)
          , d = qi(a, 0, b, c);
        if (0 > d)
            return null;
        var e = a.indexOf("&", d);
        if (0 > e || e > c)
            e = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
    }
      , ti = /[?&]($|#)/
      , ui = function(a, b, c) {
        for (var d, e = a.search(ri), f = 0, g, k = []; 0 <= (g = qi(a, f, b, e)); )
            k.push(a.substring(f, g)),
            f = Math.min(a.indexOf("&", g) + 1 || e, e);
        k.push(a.slice(f));
        d = k.join("").replace(ti, "$1");
        var m, n = null != c ? "=" + encodeURIComponent(String(c)) : "";
        var p = b + n;
        if (p) {
            var q, t = d.indexOf("#");
            0 > t && (t = d.length);
            var u = d.indexOf("?"), r;
            0 > u || u > t ? (u = t,
            r = "") : r = d.substring(u + 1, t);
            q = [d.slice(0, u), r, d.slice(t)];
            var v = q[1];
            q[1] = p ? v ? v + "&" + p : p : v;
            m = q[0] + (q[1] ? "?" + q[1] : "") + q[2]
        } else
            m = d;
        return m
    };
    var vi = function(a) {
        try {
            var b;
            if (b = !!a && null != a.location.href)
                a: {
                    try {
                        Qe(a.foo);
                        b = !0;
                        break a
                    } catch (c) {}
                    b = !1
                }
            return b
        } catch (c) {
            return !1
        }
    }
      , wi = function(a, b) {
        if (a)
            for (var c in a)
                Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    };
    function xi() {
        if (!D.head)
            return null;
        var a = yi("META");
        D.head.appendChild(a);
        a.httpEquiv = "origin-trial";
        a.content = 'A751Xsk4ZW3DVQ8WZng2Dk5s3YzAyqncTzgv+VaE6wavgTY0QHkDvUTET1o7HanhuJO8lgv1Vvc88Ij78W1FIAAAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1RoaXJkUGFydHkiOnRydWV9';
        return a
    }
    var zi = function() {
        if (z.top == z)
            return 0;
        var a = z.location.ancestorOrigins;
        return a ? a[a.length - 1] == z.location.origin ? 1 : 2 : vi(z.top) ? 1 : 2
    }
      , yi = function(a, b) {
        b = void 0 === b ? document : b;
        return b.createElement(String(a).toLowerCase())
    };
    function Ai(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        a.google_image_requests || (a.google_image_requests = []);
        var e = yi("IMG", a.document);
        if (c) {
            var f = function() {
                if (c) {
                    var g = a.google_image_requests
                      , k = ab(g, e);
                    0 <= k && Array.prototype.splice.call(g, k, 1)
                }
                e.removeEventListener && e.removeEventListener("load", f, !1);
                e.removeEventListener && e.removeEventListener("error", f, !1)
            };
            li(e, "load", f);
            li(e, "error", f)
        }
        d && (e.attributionSrc = "");
        e.src = b;
        a.google_image_requests.push(e)
    }
    var Ci = function(a) {
        var b;
        b = void 0 === b ? !1 : b;
        var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
        wi(a, function(d, e) {
            d && (c += "&" + e + "=" + encodeURIComponent(d))
        });
        Bi(c, b)
    }
      , Bi = function(a, b) {
        var c = window, d;
        b = void 0 === b ? !1 : b;
        d = void 0 === d ? !1 : d;
        if (c.fetch) {
            var e = {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            };
            d && (e.mode = "cors",
            e.headers = {
                "Attribution-Reporting-Eligible": "event-source"
            });
            c.fetch(a, e)
        } else
            Ai(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d)
    };
    var Di = function() {};
    var Ei = function(a) {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    }
      , Fi = function(a, b) {
        b = void 0 === b ? {} : b;
        this.m = a;
        this.h = null;
        this.M = {};
        this.pb = 0;
        var c;
        this.V = null != (c = b.Ak) ? c : 500;
        var d;
        this.I = null != (d = b.Ok) ? d : !1;
        this.B = null
    };
    la(Fi, Di);
    Fi.prototype.addEventListener = function(a) {
        var b = this
          , c = {
            internalBlockOnErrors: this.I
        }
          , d = Ef(function() {
            return a(c)
        })
          , e = 0;
        -1 !== this.V && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.V));
        var f = function(g, k) {
            clearTimeout(e);
            g ? (c = g,
            c.internalErrorState = Ei(c),
            c.internalBlockOnErrors = b.I,
            k && 0 === c.internalErrorState || (c.tcString = "tcunavailable",
            k || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable",
            c.internalErrorState = 3);
            a(c)
        };
        try {
            Gi(this, "addEventListener", f)
        } catch (g) {
            c.tcString = "tcunavailable",
            c.internalErrorState = 3,
            e && (clearTimeout(e),
            e = 0),
            d()
        }
    }
    ;
    Fi.prototype.removeEventListener = function(a) {
        a && a.listenerId && Gi(this, "removeEventListener", null, a.listenerId)
    }
    ;
    var Ii = function(a, b, c) {
        var d;
        d = void 0 === d ? "755" : d;
        var e;
        a: {
            if (a.publisher && a.publisher.restrictions) {
                var f = a.publisher.restrictions[b];
                if (void 0 !== f) {
                    e = f[void 0 === d ? "755" : d];
                    break a
                }
            }
            e = void 0
        }
        var g = e;
        if (0 === g)
            return !1;
        var k = c;
        2 === c ? (k = 0,
        2 === g && (k = 1)) : 3 === c && (k = 1,
        1 === g && (k = 0));
        var m;
        if (0 === k)
            if (a.purpose && a.vendor) {
                var n = Hi(a.vendor.consents, void 0 === d ? "755" : d);
                m = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && Hi(a.purpose.consents, b)
            } else
                m = !0;
        else
            m = 1 === k ? a.purpose && a.vendor ? Hi(a.purpose.legitimateInterests, b) && Hi(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
        return m
    }
      , Hi = function(a, b) {
        return !(!a || !a[b])
    }
      , Gi = function(a, b, c, d) {
        c || (c = function() {}
        );
        if ("function" === typeof a.m.__tcfapi) {
            var e = a.m.__tcfapi;
            e(b, 2, c, d)
        } else if (Ji(a)) {
            Ki(a);
            var f = ++a.pb;
            a.M[f] = c;
            if (a.h) {
                var g = {};
                a.h.postMessage((g.__tcfapiCall = {
                    command: b,
                    version: 2,
                    callId: f,
                    parameter: d
                },
                g), "*")
            }
        } else
            c({}, !1)
    }
      , Ji = function(a) {
        if (a.h)
            return a.h;
        var b;
        a: {
            for (var c = a.m, d = 0; 50 > d; ++d) {
                var e;
                try {
                    e = !(!c.frames || !c.frames.__tcfapiLocator)
                } catch (k) {
                    e = !1
                }
                if (e) {
                    b = c;
                    break a
                }
                var f;
                b: {
                    try {
                        var g = c.parent;
                        if (g && g != c) {
                            f = g;
                            break b
                        }
                    } catch (k) {}
                    f = null
                }
                if (!(c = f))
                    break
            }
            b = null
        }
        a.h = b;
        return a.h
    }
      , Ki = function(a) {
        a.B || (a.B = function(b) {
            try {
                var c;
                c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.M[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }
        ,
        li(a.m, "message", a.B))
    }
      , Li = function(a) {
        if (!1 === a.gdprApplies)
            return !0;
        void 0 === a.internalErrorState && (a.internalErrorState = Ei(a));
        return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (Ci({
            e: String(a.internalErrorState)
        }),
        !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
    };
    var Mi = {
        1: 0,
        3: 0,
        4: 0,
        7: 3,
        9: 3,
        10: 3
    }
      , Ni = ki('', 500);
    function Oi() {
        var a = ke.tcf || {};
        return ke.tcf = a
    }
    var Ui = function() {
        var a = Oi()
          , b = new Fi(z,{
            Ak: -1
        });
        Pi(b) && Qi() && J(124);
        if (!Qi() && !a.active && Pi(b)) {
            a.active = !0;
            a.de = {};
            Ri();
            a.tcString = "tcunavailable";
            try {
                b.addEventListener(function(c) {
                    if (0 !== c.internalErrorState)
                        Si(a),
                        Ti(a);
                    else {
                        var d;
                        a.gdprApplies = c.gdprApplies;
                        if (!1 === c.gdprApplies) {
                            var e = {}, f;
                            for (f in Mi)
                                Mi.hasOwnProperty(f) && (e[f] = !0);
                            d = e;
                            b.removeEventListener(c)
                        } else if ("tcloaded" === c.eventStatus || "useractioncomplete" === c.eventStatus || "cmpuishown" === c.eventStatus) {
                            var g = {}, k;
                            for (k in Mi)
                                if (Mi.hasOwnProperty(k))
                                    if ("1" === k) {
                                        var m, n = c, p = !0;
                                        p = void 0 === p ? !1 : p;
                                        m = Li(n) ? !1 === n.gdprApplies || "tcunavailable" === n.tcString || void 0 === n.gdprApplies && !p || "string" !== typeof n.tcString || !n.tcString.length ? !0 : Ii(n, "1", 0) : !1;
                                        g["1"] = m
                                    } else
                                        g[k] = Ii(c, k, Mi[k]);
                            d = g
                        }
                        d && (a.tcString = c.tcString || "tcempty",
                        a.de = d,
                        Ti(a))
                    }
                })
            } catch (c) {
                Si(a),
                Ti(a)
            }
        }
    };
    function Si(a) {
        a.type = "e";
        a.tcString = "tcunavailable"
    }
    function Ri() {
        var a = {}
          , b = (a.ad_storage = "denied",
        a.wait_for_update = Ni,
        a);
        Sh(b)
    }
    function Pi(a) {
        return "function" === typeof z.__tcfapi || "function" === typeof a.m.__tcfapi || null != Ji(a) ? !0 : !1
    }
    var Qi = function() {
        return !0 !== z.gtag_enable_tcf_support
    };
    function Ti(a) {
        var b = {}
          , c = (b.ad_storage = a.de["1"] ? "granted" : "denied",
        b);
        Th(c, {
            eventId: 0
        }, {
            gdprApplies: a ? a.gdprApplies : void 0,
            tcString: Vi()
        })
    }
    var Vi = function() {
        var a = Oi();
        return a.active ? a.tcString || "" : ""
    }
      , Wi = function() {
        var a = Oi();
        return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : ""
    }
      , Xi = function(a) {
        if (!Mi.hasOwnProperty(String(a)))
            return !0;
        var b = Oi();
        return b.active && b.de ? !!b.de[String(a)] : !0
    };
    var Yi = function(a) {
        var b = String(a[$b.Ma] || "").replace(/_/g, "");
        0 === b.indexOf("cvt") && (b = "cvt");
        return b
    }
      , Zi = 0 <= z.location.search.indexOf("?gtm_latency=") || 0 <= z.location.search.indexOf("&gtm_latency=");
    var $i = ["L", "S", "Y"], aj = ["S", "E"], bj = {
        sampleRate: "0.005000",
        Rh: "",
        Qh: Number("5"),
        Ph: Number("")
    }, cj;
    if (!(cj = Zi)) {
        var dj = Math.random()
          , ej = bj.sampleRate;
        cj = dj < ej
    }
    var fj = cj
      , gj = "https://www.googletagmanager.com/a?id=" + S.C + "&cv=1"
      , hj = {
        label: S.C + " Container",
        children: [{
            label: "Initialization",
            children: []
        }]
    };
    function ij() {
        return [gj, "&v=3&t=t", "&pid=" + ta(), "&rv=" + je.Ye].join("")
    }
    var jj = ij();
    function kj() {
        jj = ij()
    }
    var lj = {}
      , mj = ""
      , nj = ""
      , oj = ""
      , pj = ""
      , qj = []
      , rj = ""
      , sj = {}
      , tj = !1
      , uj = {}
      , vj = {}
      , wj = {}
      , xj = ""
      , yj = void 0
      , zj = {}
      , Aj = {}
      , Sj = void 0
      , Tj = 5;
    0 < bj.Qh && (Tj = bj.Qh);
    var Uj = function(a, b) {
        for (var c = 0, d = [], e = 0; e < a; ++e)
            d.push(0);
        return {
            Kj: function() {
                return c < a ? !1 : Fa() - d[c % a] < b
            },
            kk: function() {
                var f = c++ % a;
                d[f] = Fa()
            }
        }
    }(Tj, 1E3)
      , Vj = 1E3
      , Wj = "";
    function Xj(a) {
        var b = yj;
        if (void 0 === b)
            return "";
        var c = $a("GTM"), d = $a("TAGGING"), e = $a("HEALTH"), f = jj, g = lj[b] ? "" : "&es=1", k = zj[b], m = Yj(b), n = Zj(), p = mj, q = nj, t = xj, u = ak(a), r = oj, v = pj, w;
        return [f, g, k, m, c ? "&u=" + c : "", d ? "&ut=" + d : "", e ? "&h=" + e : "", n, p, q, t, u, r, v, w, rj ? "&dl=" + encodeURIComponent(rj) : "", 0 < qj.length ? "&tdp=" + qj.join(".") : "", je.Hc ? "&x=" + je.Hc : "", "&z=0"].join("")
    }
    function ck() {
        Sj && (z.clearTimeout(Sj),
        Sj = void 0);
        if (void 0 !== yj && (!lj[yj] || mj || nj))
            if (Aj[yj] || Uj.Kj() || 0 >= Vj--)
                J(1),
                Aj[yj] = !0;
            else {
                Uj.kk();
                var a = Xj(!0);
                Kb(a);
                if (pj || rj && 0 < qj.length) {
                    var b = a.replace("/a?", "/td?");
                    Kb(b)
                }
                lj[yj] = !0;
                rj = pj = oj = xj = nj = mj = "";
                qj = []
            }
    }
    function dk() {
        Sj || (Sj = z.setTimeout(ck, 500))
    }
    function ek(a) {
        return a.match(/^(gtm|gtag)\./) ? encodeURIComponent(a) : "*"
    }
    function fk() {
        2022 <= Xj().length && ck()
    }
    function Zj() {
        return "&tc=" + zc.filter(function(a) {
            return a
        }).length
    }
    var hk = function(a, b) {
        if (fj && !Aj[a] && yj !== a) {
            ck();
            yj = a;
            oj = mj = "";
            zj[a] = "&e=" + ek(b) + "&eid=" + a;
            dk();
        }
    }
      , ik = function(a, b, c, d) {
        if (fj && b) {
            var e = Yi(b)
              , f = c + e;
            if (!Aj[a]) {
                a !== yj && (ck(),
                yj = a);
                mj = mj ? mj + "." + f : "&tr=" + f;
                var g = b["function"];
                if (!g)
                    throw Error("Error: No function name given for function call.");
                var k = (Bc[g] ? "1" : "2") + e;
                oj = oj ? oj + "." + k : "&ti=" + k;
                dk();
                fk()
            }
        }
    }
      , jk = function(a, b, c) {
        if (fj && a && a[$b.lb]) {
            var d = b + "." + a[$b.lb];
            wj[d] = c;
            "html" == Yi(a) && Wj == d && (mj += ":" + Math.floor(c))
        }
    };
    function ak(a) {}
    function Yj(a) {}
    var qk = function(a, b, c) {
        if (fj && void 0 !== a && !Aj[a]) {
            a !== yj && (ck(),
            yj = a);
            var d = c + b;
            nj = nj ? nj + "." + d : "&epr=" + d;
            dk();
            fk()
        }
    }
      , rk = function(a, b, c) {}
      , bk = void 0;
    tb();
    ni() || qb("iPod");
    qb("iPad");
    !qb("Android") || ub() || tb() || sb() || qb("Silk");
    ub();
    !qb("Safari") || ub() || (rb() ? 0 : qb("Coast")) || sb() || (rb() ? 0 : qb("Edge")) || (rb() ? pb("Microsoft Edge") : qb("Edg/")) || (rb() ? pb("Opera") : qb("OPR")) || tb() || qb("Silk") || qb("Android") || oi();
    var sk = {}
      , tk = null
      , uk = function(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            255 < e && (b[c++] = e & 255,
            e >>= 8);
            b[c++] = e
        }
        var f = 4;
        void 0 === f && (f = 0);
        if (!tk) {
            tk = {};
            for (var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), k = ["+/=", "+/", "-_=", "-_.", "-_"], m = 0; 5 > m; m++) {
                var n = g.concat(k[m].split(""));
                sk[m] = n;
                for (var p = 0; p < n.length; p++) {
                    var q = n[p];
                    void 0 === tk[q] && (tk[q] = p)
                }
            }
        }
        for (var t = sk[f], u = Array(Math.floor(b.length / 3)), r = t[64] || "", v = 0, w = 0; v < b.length - 2; v += 3) {
            var y = b[v]
              , x = b[v + 1]
              , B = b[v + 2]
              , A = t[y >> 2]
              , C = t[(y & 3) << 4 | x >> 4]
              , H = t[(x & 15) << 2 | B >> 6]
              , I = t[B & 63];
            u[w++] = "" + A + C + H + I
        }
        var E = 0
          , K = r;
        switch (b.length - v) {
        case 2:
            E = b[v + 1],
            K = t[(E & 15) << 2] || r;
        case 1:
            var M = b[v];
            u[w] = "" + t[M >> 2] + t[(M & 3) << 4 | E >> 4] + K + r
        }
        return u.join("")
    };
    var vk = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");
    function wk() {
        var a;
        return null != (a = z.google_tag_data) ? a : z.google_tag_data = {}
    }
    function xk() {
        var a = z.google_tag_data, b;
        if (null != a && a.uach) {
            var c = a.uach
              , d = Object.assign({}, c);
            c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
            b = d
        } else
            b = null;
        return b
    }
    function yk() {
        var a, b;
        return null != (b = null == (a = z.google_tag_data) ? void 0 : a.uach_promise) ? b : null
    }
    function zk() {
        var a, b;
        return "function" === typeof (null == (a = z.navigator) ? void 0 : null == (b = a.userAgentData) ? void 0 : b.getHighEntropyValues)
    }
    function Ak() {
        if (!zk())
            return null;
        var a = wk();
        if (a.uach_promise)
            return a.uach_promise;
        var b = z.navigator.userAgentData.getHighEntropyValues(vk).then(function(c) {
            null != a.uach || (a.uach = c);
            return c
        });
        return a.uach_promise = b
    }
    ;var Gk = function(a) {
        for (var b = [], c = D.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                Hf: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(g, k) {
            return k.timestamp - g.timestamp
        });
        return b
    };
    function Hk(a, b) {
        var c = Gk(a)
          , d = {};
        if (!c || !c.length)
            return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].Hf] || (d[c[e].Hf] = []);
                var g = {
                    version: f[0],
                    timestamp: 1E3 * Number(f[1]),
                    aa: f[2]
                };
                b && 3 < f.length && (g.labels = f.slice(3));
                d[c[e].Hf].push(g)
            }
        }
        return d
    }
    ;var Ik = /^\w+$/
      , Jk = /^[\w-]+$/
      , Kk = {
        aw: "_aw",
        dc: "_dc",
        gf: "_gf",
        ha: "_ha",
        gp: "_gp",
        gb: "_gb"
    }
      , Lk = function() {
        if (!Se().h() || !kf())
            return !0;
        var a = ff("ad_storage");
        return null == a ? !0 : !!a
    }
      , Mk = function(a, b) {
        jf("ad_storage") ? Lk() ? a() : qf(a, "ad_storage") : b ? Ya("TAGGING", 3) : pf(function() {
            Mk(a, !0)
        }, ["ad_storage"])
    }
      , Ok = function(a) {
        return Nk(a).map(function(b) {
            return b.aa
        })
    }
      , Nk = function(a) {
        var b = [];
        if (!Ff(z) || !D.cookie)
            return b;
        var c = If(a, D.cookie, void 0, "ad_storage");
        if (!c || 0 == c.length)
            return b;
        for (var d = {}, e = 0; e < c.length; d = {
            cd: d.cd
        },
        e++) {
            var f = Pk(c[e]);
            if (null != f) {
                var g = f
                  , k = g.version;
                d.cd = g.aa;
                var m = g.timestamp
                  , n = g.labels
                  , p = sa(b, function(q) {
                    return function(t) {
                        return t.aa === q.cd
                    }
                }(d));
                p ? (p.timestamp = Math.max(p.timestamp, m),
                p.labels = Qk(p.labels, n || [])) : b.push({
                    version: k,
                    aa: d.cd,
                    timestamp: m,
                    labels: n
                })
            }
        }
        b.sort(function(q, t) {
            return t.timestamp - q.timestamp
        });
        return Rk(b)
    };
    function Qk(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++)
            c[a[e]] = !0,
            d.push(a[e]);
        for (var f = 0; f < b.length; f++)
            c[b[f]] || d.push(b[f]);
        return d
    }
    function Sk(a) {
        return a && "string" == typeof a && a.match(Ik) ? a : "_gcl"
    }
    var Uk = function() {
        var a = yf(z.location.href)
          , b = wf(a, "query", !1, void 0, "gclid")
          , c = wf(a, "query", !1, void 0, "gclsrc")
          , d = wf(a, "query", !1, void 0, "wbraid")
          , e = wf(a, "query", !1, void 0, "dclid");
        if (!b || !c || !d) {
            var f = a.hash.replace("#", "");
            b = b || tf(f, "gclid");
            c = c || tf(f, "gclsrc");
            d = d || tf(f, "wbraid")
        }
        return Tk(b, c, e, d)
    }
      , Tk = function(a, b, c, d) {
        var e = {}
          , f = function(g, k) {
            e[k] || (e[k] = []);
            e[k].push(g)
        };
        e.gclid = a;
        e.gclsrc = b;
        e.dclid = c;
        void 0 !== d && Jk.test(d) && (e.gbraid = d,
        f(d, "gb"));
        if (void 0 !== a && a.match(Jk))
            switch (b) {
            case void 0:
                f(a, "aw");
                break;
            case "aw.ds":
                f(a, "aw");
                f(a, "dc");
                break;
            case "ds":
                f(a, "dc");
                break;
            case "3p.ds":
                f(a, "dc");
                break;
            case "gf":
                f(a, "gf");
                break;
            case "ha":
                f(a, "ha")
            }
        c && f(c, "dc");
        return e
    }
      , Wk = function(a) {
        var b = Uk();
        Mk(function() {
            Vk(b, !1, a)
        })
    };
    function Vk(a, b, c, d, e) {
        function f(w, y) {
            var x = Xk(w, g);
            x && (Rf(x, y, k),
            m = !0)
        }
        c = c || {};
        e = e || [];
        var g = Sk(c.prefix);
        d = d || Fa();
        var k = $f(c, d, !0);
        k.Wa = "ad_storage";
        var m = !1
          , n = Math.round(d / 1E3)
          , p = function(w) {
            var y = ["GCL", n, w];
            0 < e.length && y.push(e.join("."));
            return y.join(".")
        };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if (!m && a.gb) {
            var q = a.gb[0]
              , t = Xk("gb", g)
              , u = !1;
            if (!b)
                for (var r = Nk(t), v = 0; v < r.length; v++)
                    r[v].aa === q && r[v].labels && 0 < r[v].labels.length && (u = !0);
            u || f("gb", p(q))
        }
    }
    var Zk = function(a, b) {
        var c = sg(!0);
        Mk(function() {
            for (var d = Sk(b.prefix), e = 0; e < a.length; ++e) {
                var f = a[e];
                if (void 0 !== Kk[f]) {
                    var g = Xk(f, d)
                      , k = c[g];
                    if (k) {
                        var m = Math.min(Yk(k), Fa()), n;
                        b: {
                            var p = m;
                            if (Ff(z))
                                for (var q = If(g, D.cookie, void 0, "ad_storage"), t = 0; t < q.length; ++t)
                                    if (Yk(q[t]) > p) {
                                        n = !0;
                                        break b
                                    }
                            n = !1
                        }
                        if (!n) {
                            var u = $f(b, m, !0);
                            u.Wa = "ad_storage";
                            Rf(g, k, u)
                        }
                    }
                }
            }
            Vk(Tk(c.gclid, c.gclsrc), !1, b)
        })
    }
      , Xk = function(a, b) {
        var c = Kk[a];
        if (void 0 !== c)
            return b + c
    }
      , Yk = function(a) {
        return 0 !== $k(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) || 0) : 0
    };
    function Pk(a) {
        var b = $k(a.split("."));
        return 0 === b.length ? null : {
            version: b[0],
            aa: b[2],
            timestamp: 1E3 * (Number(b[1]) || 0),
            labels: b.slice(3)
        }
    }
    function $k(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !Jk.test(a[2]) ? [] : a
    }
    var al = function(a, b, c, d, e) {
        if (ra(b) && Ff(z)) {
            var f = Sk(e)
              , g = function() {
                for (var k = {}, m = 0; m < a.length; ++m) {
                    var n = Xk(a[m], f);
                    if (n) {
                        var p = If(n, D.cookie, void 0, "ad_storage");
                        p.length && (k[n] = p.sort()[p.length - 1])
                    }
                }
                return k
            };
            Mk(function() {
                yg(g, b, c, d)
            })
        }
    }
      , Rk = function(a) {
        return a.filter(function(b) {
            return Jk.test(b.aa)
        })
    }
      , bl = function(a, b) {
        if (Ff(z)) {
            for (var c = Sk(b.prefix), d = {}, e = 0; e < a.length; e++)
                Kk[a[e]] && (d[a[e]] = Kk[a[e]]);
            Mk(function() {
                l(d, function(f, g) {
                    var k = If(c + g, D.cookie, void 0, "ad_storage");
                    k.sort(function(u, r) {
                        return Yk(r) - Yk(u)
                    });
                    if (k.length) {
                        var m = k[0], n = Yk(m), p = 0 !== $k(m.split(".")).length ? m.split(".").slice(3) : [], q = {}, t;
                        t = 0 !== $k(m.split(".")).length ? m.split(".")[2] : void 0;
                        q[f] = [t];
                        Vk(q, !0, b, n, p)
                    }
                })
            })
        }
    };
    function cl(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]])
                return !0;
        return !1
    }
    var dl = function(a) {
        function b(e, f, g) {
            g && (e[f] = g)
        }
        if (kf()) {
            var c = Uk();
            if (cl(c, a)) {
                var d = {};
                b(d, "gclid", c.gclid);
                b(d, "dclid", c.dclid);
                b(d, "gclsrc", c.gclsrc);
                b(d, "wbraid", c.gbraid);
                zg(function() {
                    return d
                }, 3);
                zg(function() {
                    var e = {};
                    return e._up = "1",
                    e
                }, 1)
            }
        }
    }
      , el = function(a, b, c, d) {
        var e = [];
        c = c || {};
        if (!Lk())
            return e;
        var f = Nk(a);
        if (!f.length)
            return e;
        for (var g = 0; g < f.length; g++)
            -1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
        if (d)
            return e;
        if (1 !== e[0]) {
            var k = f[0]
              , m = f[0].timestamp
              , n = [k.version, Math.round(m / 1E3), k.aa].concat(k.labels || [], [b]).join(".")
              , p = $f(c, m, !0);
            p.Wa = "ad_storage";
            Rf(a, n, p)
        }
        return e
    };
    function fl(a, b) {
        var c = Sk(b)
          , d = Xk(a, c);
        if (!d)
            return 0;
        for (var e = Nk(d), f = 0, g = 0; g < e.length; g++)
            f = Math.max(f, e[g].timestamp);
        return f
    }
    function gl(a) {
        var b = 0, c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++)
                b = Math.max(b, Number(d[e].timestamp));
        return b
    }
    var hl = function(a) {
        var b = Math.max(fl("aw", a), gl(Lk() ? Hk() : {}));
        return Math.max(fl("gb", a), gl(Lk() ? Hk("_gac_gb", !0) : {})) > b
    };
    var ml = /[A-Z]+/
      , nl = /\s/
      , ol = function(a) {
        if (h(a)) {
            a = Da(a);
            var b = a.indexOf("-");
            if (!(0 > b)) {
                var c = a.substring(0, b);
                if (ml.test(c)) {
                    for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)
                        if (!d[e] || nl.test(d[e]) && ("AW" !== c || 1 !== e))
                            return;
                    return {
                        id: a,
                        prefix: c,
                        T: c + "-" + d[0],
                        K: d
                    }
                }
            }
        }
    }
      , ql = function(a) {
        for (var b = {}, c = 0; c < a.length; ++c) {
            var d = ol(a[c]);
            d && (b[d.id] = d)
        }
        pl(b);
        var e = [];
        l(b, function(f, g) {
            e.push(g)
        });
        return e
    };
    function pl(a) {
        var b = [], c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.K[1] && b.push(d.T)
            }
        for (var e = 0; e < b.length; ++e)
            delete a[b[e]]
    }
    ;var rl = function(a, b, c, d) {
        var e = Ib(), f;
        if (1 === e)
            a: {
                var g = ye;
                g = g.toLowerCase();
                for (var k = "https://" + g, m = "http://" + g, n = 1, p = D.getElementsByTagName("script"), q = 0; q < p.length && 100 > q; q++) {
                    var t = p[q].src;
                    if (t) {
                        t = t.toLowerCase();
                        if (0 === t.indexOf(m)) {
                            f = 3;
                            break a
                        }
                        1 === n && 0 === t.indexOf(k) && (n = 2)
                    }
                }
                f = n
            }
        else
            f = e;
        return (2 === f || d || "http:" != z.location.protocol ? a : b) + c
    };
    var tl = function(a, b, c) {
        if (z[a.functionName])
            return b.yf && F(b.yf),
            z[a.functionName];
        var d = sl();
        z[a.functionName] = d;
        if (a.Ud)
            for (var e = 0; e < a.Ud.length; e++)
                z[a.Ud[e]] = z[a.Ud[e]] || sl();
        a.be && void 0 === z[a.be] && (z[a.be] = c);
        Hb(rl("https://", "http://", a.Gf), b.yf, b.Xj);
        return d
    }
      , sl = function() {
        var a = function() {
            a.q = a.q || [];
            a.q.push(arguments)
        };
        return a
    }
      , ul = {
        functionName: "_googWcmImpl",
        be: "_googWcmAk",
        Gf: "www.gstatic.com/wcm/loader.js"
    }
      , vl = {
        functionName: "_gaPhoneImpl",
        be: "ga_wpid",
        Gf: "www.gstatic.com/gaphone/loader.js"
    }
      , wl = {
        Th: "",
        Si: "5"
    }
      , xl = {
        functionName: "_googCallTrackingImpl",
        Ud: [vl.functionName, ul.functionName],
        Gf: "www.gstatic.com/call-tracking/call-tracking_" + (wl.Th || wl.Si) + ".js"
    }
      , yl = {}
      , zl = function(a, b, c, d) {
        J(22);
        if (c) {
            d = d || {};
            var e = tl(ul, d, a)
              , f = {
                ak: a,
                cl: b
            };
            void 0 === d.Va && (f.autoreplace = c);
            e(2, d.Va, f, c, 0, Ea(), d.options)
        }
    }
      , Al = function(a, b, c, d) {
        J(21);
        if (b && c) {
            d = d || {};
            for (var e = {
                countryNameCode: c,
                destinationNumber: b,
                retrievalTime: Ea()
            }, f = 0; f < a.length; f++) {
                var g = a[f];
                yl[g.id] || (g && "AW" === g.prefix && !e.adData && 2 <= g.K.length ? (e.adData = {
                    ak: g.K[0],
                    cl: g.K[1]
                },
                yl[g.id] = !0) : g && "UA" === g.prefix && !e.gaData && (e.gaData = {
                    gaWpid: g.T
                },
                yl[g.id] = !0))
            }
            (e.gaData || e.adData) && tl(xl, d)(d.Va, e, d.options)
        }
    }
      , Bl = function() {
        var a = !1;
        return a
    }
      , Cl = function(a, b) {
        if (a)
            if (Zh()) {} else {
                if (h(a)) {
                    var c = ol(a);
                    if (!c)
                        return;
                    a = c
                }
                var d = void 0
                  , e = !1
                  , f = R(b, N.g.yi);
                if (f && ra(f)) {
                    d = [];
                    for (var g = 0; g < f.length; g++) {
                        var k = ol(f[g]);
                        k && (d.push(k),
                        (a.id === k.id || a.id === a.T && a.T === k.T) && (e = !0))
                    }
                }
                if (!d || e) {
                    var m = R(b, N.g.wg), n;
                    if (m) {
                        ra(m) ? n = m : n = [m];
                        var p = R(b, N.g.ug)
                          , q = R(b, N.g.vg)
                          , t = R(b, N.g.xg)
                          , u = R(b, N.g.xi)
                          , r = p || q
                          , v = 1;
                        "UA" !== a.prefix || d || (v = 5);
                        for (var w = 0; w < n.length; w++)
                            if (w < v)
                                if (d)
                                    Al(d, n[w], u, {
                                        Va: r,
                                        options: t
                                    });
                                else if ("AW" === a.prefix && a.K[1])
                                    Bl() ? Al([a], n[w], u || "US", {
                                        Va: r,
                                        options: t
                                    }) : zl(a.K[0], a.K[1], n[w], {
                                        Va: r,
                                        options: t
                                    });
                                else if ("UA" === a.prefix)
                                    if (Bl())
                                        Al([a], n[w], u || "US", {
                                            Va: r
                                        });
                                    else {
                                        var y = a.T
                                          , x = n[w]
                                          , B = {
                                            Va: r
                                        };
                                        J(23);
                                        if (x) {
                                            B = B || {};
                                            var A = tl(vl, B, y)
                                              , C = {};
                                            void 0 !== B.Va ? C.receiver = B.Va : C.replace = x;
                                            C.ga_wpid = y;
                                            C.destination = x;
                                            A(2, Ea(), C)
                                        }
                                    }
                    }
                }
            }
    };
    var Dl = function(a, b, c) {
        this.target = a;
        this.eventName = b;
        this.h = c;
        this.m = {};
        this.metadata = G(c.eventMetadata || {});
        this.J = !1
    };
    Dl.prototype.copyToHitData = function(a, b) {
        var c = R(this.h, a);
        void 0 !== c ? this.m[a] = c : void 0 !== b && (this.m[a] = b)
    }
    ;
    var El = function(a, b, c) {
        var d = fh(a.target.T);
        return d && d.hasOwnProperty(b) ? d[b] : c
    };
    function Fl(a) {
        return {
            getDestinationId: function() {
                return a.target.T
            },
            getEventName: function() {
                return a.eventName
            },
            setEventName: function(b) {
                a.eventName = b
            },
            getHitData: function(b) {
                return a.m[b]
            },
            setHitData: function(b, c) {
                a.m[b] = c
            },
            setHitDataIfNotDefined: function(b, c) {
                void 0 === a.m[b] && (a.m[b] = c)
            },
            copyToHitData: function(b, c) {
                a.copyToHitData(b, c)
            },
            getMetadata: function(b) {
                return a.metadata[b]
            },
            setMetadata: function(b, c) {
                a.metadata[b] = c
            },
            abort: function() {
                a.J = !0
            },
            getFromEventContext: function(b) {
                return R(a.h, b)
            },
            Rk: function() {
                return a
            },
            getHitKeys: function() {
                return Object.keys(a.m)
            }
        }
    }
    ;var Zl = function(a, b, c, d, e, f, g, k, m, n, p, q) {
        this.eventId = a;
        this.priorityId = b;
        this.h = c;
        this.M = d;
        this.m = e;
        this.I = f;
        this.V = g;
        this.B = k;
        this.eventMetadata = m;
        this.R = n;
        this.P = p;
        this.F = q
    }
      , R = function(a, b, c) {
        if (void 0 !== a.h[b])
            return a.h[b];
        if (void 0 !== a.M[b])
            return a.M[b];
        if (void 0 !== a.m[b])
            return a.m[b];
        fj && $l(a, a.I[b], a.V[b]) && (J(71),
        J(79));
        return void 0 !== a.I[b] ? a.I[b] : void 0 !== a.B[b] ? a.B[b] : c
    }
      , am = function(a) {
        function b(g) {
            for (var k = Object.keys(g), m = 0; m < k.length; ++m)
                c[k[m]] = 1
        }
        var c = {};
        b(a.h);
        b(a.M);
        b(a.m);
        b(a.I);
        if (fj)
            for (var d = Object.keys(a.V), e = 0; e < d.length; e++) {
                var f = d[e];
                if ("event" !== f && "gtm" !== f && "tagTypeBlacklist" !== f && !c.hasOwnProperty(f)) {
                    J(71);
                    J(80);
                    break
                }
            }
        return Object.keys(c)
    }
      , bm = function(a, b, c) {
        function d(m) {
            Yb(m) && l(m, function(n, p) {
                f = !0;
                e[n] = p
            })
        }
        var e = {}
          , f = !1;
        c && 1 !== c || (d(a.B[b]),
        d(a.I[b]),
        d(a.m[b]),
        d(a.M[b]));
        c && 2 !== c || d(a.h[b]);
        if (fj) {
            var g = f
              , k = e;
            e = {};
            f = !1;
            c && 1 !== c || (d(a.B[b]),
            d(a.V[b]),
            d(a.m[b]),
            d(a.M[b]));
            c && 2 !== c || d(a.h[b]);
            if (f !== g || $l(a, e, k))
                J(71),
                J(81);
            f = g;
            e = k
        }
        return f ? e : void 0
    }
      , cm = function(a) {
        var b = [N.g.mc, N.g.qd, N.g.rd, N.g.sd, N.g.ud, N.g.vd, N.g.wd]
          , c = {}
          , d = !1
          , e = function(k) {
            for (var m = 0; m < b.length; m++)
                void 0 !== k[b[m]] && (c[b[m]] = k[b[m]],
                d = !0);
            return d
        };
        if (e(a.h) || e(a.M) || e(a.m))
            return c;
        e(a.I);
        if (fj) {
            var f = c
              , g = d;
            c = {};
            d = !1;
            e(a.V);
            $l(a, c, f) && (J(71),
            J(82));
            c = f;
            d = g
        }
        if (d)
            return c;
        e(a.B);
        return c
    }
      , $l = function(a, b, c) {
        if (!fj)
            return !1;
        try {
            if (b === c)
                return !1;
            var d = Wb(b);
            if (d !== Wb(c) || !(Yb(b) && Yb(c) || "array" === d))
                return !0;
            if ("array" === d) {
                if (b.length !== c.length)
                    return !0;
                for (var e = 0; e < b.length; e++)
                    if ($l(a, b[e], c[e]))
                        return !0
            } else {
                for (var f in c)
                    if (!b.hasOwnProperty(f))
                        return !0;
                for (var g in b)
                    if (!c.hasOwnProperty(g) || $l(a, b[g], c[g]))
                        return !0
            }
        } catch (k) {
            J(72)
        }
        return !1
    }
      , dm = function(a, b) {
        this.Gi = a;
        this.Hi = b;
        this.I = {};
        this.Og = {};
        this.h = {};
        this.M = {};
        this.m = {};
        this.Ec = {};
        this.B = {};
        this.cc = function() {}
        ;
        this.pb = function() {}
        ;
        this.V = !1
    }
      , em = function(a, b) {
        a.I = b;
        return a
    }
      , fm = function(a, b) {
        a.Og = b;
        return a
    }
      , gm = function(a, b) {
        a.h = b;
        return a
    }
      , hm = function(a, b) {
        a.M = b;
        return a
    }
      , im = function(a, b) {
        a.m = b;
        return a
    }
      , jm = function(a, b) {
        a.Ec = b;
        return a
    }
      , km = function(a, b) {
        a.B = b || {};
        return a
    }
      , lm = function(a, b) {
        a.cc = b;
        return a
    }
      , mm = function(a, b) {
        a.pb = b;
        return a
    }
      , nm = function(a) {
        a.V = !0;
        return a
    }
      , om = function(a) {
        return new Zl(a.Gi,a.Hi,a.I,a.Og,a.h,a.M,a.m,a.Ec,a.B,a.cc,a.pb,a.V)
    };
    function tm() {
        return "attribution-reporting"
    }
    function um(a) {
        var b;
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a))
    }
    ;var vm = !1;
    function wm() {
        if (um("join-ad-interest-group") && pa(Ab.joinAdInterestGroup))
            return !0;
        vm || (xi(),
        vm = !0);
        return um("join-ad-interest-group") && pa(Ab.joinAdInterestGroup)
    }
    function xm(a, b) {
        var c = void 0;
        try {
            c = D.querySelector('iframe[data-tagging-id="' + b + '"]')
        } catch (e) {}
        if (c) {
            var d = Number(c.dataset.loadTime);
            if (d && 6E4 > Fa() - d) {
                Ya("TAGGING", 9);
                return
            }
        } else
            try {
                if (50 <= D.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
                    Ya("TAGGING", 10);
                    return
                }
            } catch (e) {}
        Jb(a, void 0, {
            allow: "join-ad-interest-group"
        }, {
            taggingId: b,
            loadTime: Fa()
        }, c)
    }
    function ym() {
        return Q(60) ? "https://td.doubleclick.net" : "https://googleads.g.doubleclick.net"
    }
    ;var zm = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$")
      , Am = /^~?[\w-]+(?:\.~?[\w-]+)*$/
      , Bm = /^\d+\.fls\.doubleclick\.net$/
      , Cm = /;gac=([^;?]+)/
      , Dm = /;gacgb=([^;?]+)/
      , Em = /;gclaw=([^;?]+)/
      , Fm = /;gclgb=([^;?]+)/;
    function Gm(a, b) {
        if (Bm.test(D.location.host)) {
            var c = D.location.href.match(b);
            return c && 2 == c.length && c[1].match(zm) ? decodeURIComponent(c[1]) : ""
        }
        var d = [], e;
        for (e in a) {
            for (var f = [], g = a[e], k = 0; k < g.length; k++)
                f.push(g[k].aa);
            d.push(e + ":" + f.join(","))
        }
        return 0 < d.length ? d.join(";") : ""
    }
    var Hm = function(a, b, c) {
        var d = Lk() ? Hk("_gac_gb", !0) : {}, e = [], f = !1, g;
        for (g in d) {
            var k = el("_gac_gb_" + g, a, b, c);
            f = f || 0 !== k.length && k.some(function(m) {
                return 1 === m
            });
            e.push(g + ":" + k.join(","))
        }
        return {
            vj: f ? e.join(";") : "",
            uj: Gm(d, Dm)
        }
    };
    function Im(a, b, c) {
        if (Bm.test(D.location.host)) {
            var d = D.location.href.match(c);
            if (d && 2 == d.length && d[1].match(Am))
                return [{
                    aa: d[1]
                }]
        } else
            return Nk((a || "_gcl") + b);
        return []
    }
    var Jm = function(a) {
        return Im(a, "_aw", Em).map(function(b) {
            return b.aa
        }).join(".")
    }
      , Km = function(a) {
        return Im(a, "_gb", Fm).map(function(b) {
            return b.aa
        }).join(".")
    }
      , Lm = function(a, b) {
        var c = el((b && b.prefix || "_gcl") + "_gb", a, b);
        return 0 === c.length || c.every(function(d) {
            return 0 === d
        }) ? "" : c.join(".")
    };
    var Mm = function() {
        if (pa(z.__uspapi)) {
            var a = "";
            try {
                z.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {}
            return a
        }
    };
    var yn = {
        D: {
            Jf: "ads_conversion_hit",
            oe: "container_execute_start",
            Nf: "container_setup_end",
            pe: "container_setup_start",
            Mf: "container_execute_end",
            Of: "container_yield_end",
            qe: "container_yield_start",
            Lg: "event_execute_end",
            Mg: "event_setup_end",
            Dc: "event_setup_start",
            Ng: "ga4_conversion_hit",
            Fc: "page_load",
            Kk: "pageview",
            kb: "snippet_load",
            Zg: "tag_callback_error",
            ah: "tag_callback_failure",
            bh: "tag_callback_success",
            dh: "tag_execute_end",
            Sb: "tag_execute_start"
        }
    };
    var zn = !1
      , An = "L S Y E TC HTC".split(" ")
      , Bn = ["S", "E"]
      , Cn = ["TS", "TE"];
    var Zn = function(a, b, c, d, e, f) {
        var g;
        g = void 0 === g ? !1 : g;
        var k = {};
        return k
    }
      , $n = function(a) {
        var b = !1;
        return b
    }
      , ao = function(a, b) {}
      , bo = function() {
        var a = {};
        return a
    }
      , Sn = function(a) {
        a = void 0 === a ? !0 : a;
        var b = {};
        return b
    }
      , co = function() {}
      , eo = function(a, b, c) {}
      , fo = function(a) {
        Ub() && Ub().mark(S.C + "_" + a + "_start")
    }
      , go = function(a) {
        if (Ub()) {
            var b = Ub()
              , c = S.C + "_" + a + "_start"
              , d = S.C + "_" + a + "_duration";
            b.measure(d, c);
            var e = Ub().getEntriesByName(d)[0];
            b.clearMarks(c);
            b.clearMeasures(d);
            var f = ke._p || {};
            void 0 === f[a] && (f[a] = e.duration,
            ke._p = f);
            return e.duration
        }
    }
      , ho = function() {
        var a = Zn("PAGEVIEW", S.C);
        if (Kn(a.entryName, "mark")[0]) {
            var b = Ub();
            b.clearMarks(a.entryName);
            b.clearMeasures("GTM-" + S.C + ":" + yn.D.Fc + ":to:PAGEVIEW")
        }
        var c = Zn(yn.D.Fc, S.C);
        $n(a) && ao(a, c)
    };
    var io = function(a, b) {
        var c, d = z.GooglebQhCsO;
        d || (d = {},
        z.GooglebQhCsO = d);
        c = d;
        if (c[a])
            return !1;
        c[a] = [];
        c[a][0] = b;
        return !0
    };
    var jo = function(a, b, c) {
        var d = si(a, "fmt");
        if (b) {
            var e = si(a, "random")
              , f = si(a, "label") || "";
            if (!e)
                return !1;
            var g = uk(decodeURIComponent(f.replace(/\+/g, " ")) + ":" + decodeURIComponent(e.replace(/\+/g, " ")));
            if (!io(g, b))
                return !1
        }
        d && 4 != d && (a = ui(a, "rfmt", d));
        var k = ui(a, "fmt", 4);
        Hb(k, function() {
            z.google_noFurtherRedirects && b && b.call && (z.google_noFurtherRedirects = null,
            b())
        }, void 0, c, D.getElementsByTagName("script")[0].parentElement || void 0);
        return !0
    };
    var zo = function() {
        this.h = {}
    }
      , Ao = function(a, b, c) {
        null != c && (a.h[b] = c)
    }
      , Bo = function(a) {
        return Object.keys(a.h).map(function(b) {
            return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b])
        }).join("&")
    }
      , Do = function(a, b, c, d) {};
    function Fo(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return yf("" + c + b).href
        }
    }
    function Go() {
        return !!je.Sd && "SGTM_TOKEN" !== je.Sd.split("@@").join("")
    }
    ;var Io = function(a, b, c, d) {
        if (!Ho() && !fi(a)) {
            var e = c ? "/gtag/js" : "/gtm.js"
              , f = "?id=" + encodeURIComponent(a) + "&l=" + je.ca
              , g = 0 === a.indexOf("GTM-");
            g || (f += "&cx=c");
            var k = Go();
            k && (f += "&sign=" + je.Sd);
            var m = se || ue ? Fo(b, e + f) : void 0;
            if (!m) {
                var n = je.jd + e;
                k && Bb && g && (n = Bb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
                m = rl("https://", "http://", n + f)
            }
            di().container[a] = {
                state: 1,
                context: d
            };
            Hb(m)
        }
    }
      , Jo = function(a, b, c) {
        var d;
        if (d = !Ho()) {
            var e = di().destination[a];
            d = !(e && e.state)
        }
        if (d)
            if (gi())
                di().destination[a] = {
                    state: 0,
                    transportUrl: b,
                    context: c
                },
                J(91);
            else {
                var f = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + je.ca + "&cx=c";
                Go() && (f += "&sign=" + je.Sd);
                var g = se || ue ? Fo(b, f) : void 0;
                g || (g = rl("https://", "http://", je.jd + f));
                di().destination[a] = {
                    state: 1,
                    context: c
                };
                Hb(g)
            }
    };
    function Ho() {
        if (Zh()) {
            return !0
        }
        return !1
    }
    ;var Ko = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/)
      , Lo = {
        cl: ["ecl"],
        customPixels: ["nonGooglePixels"],
        ecl: ["cl"],
        ehl: ["hl"],
        hl: ["ehl"],
        html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        nonGooglePixels: [],
        nonGoogleScripts: ["nonGooglePixels"],
        nonGoogleIframes: ["nonGooglePixels"]
    }
      , Mo = {
        cl: ["ecl"],
        customPixels: ["customScripts", "html"],
        ecl: ["cl"],
        ehl: ["hl"],
        hl: ["ehl"],
        html: ["customScripts"],
        customScripts: ["html"],
        nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
        nonGoogleScripts: ["customScripts", "html"],
        nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
    }
      , No = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ")
      , Qo = function(a) {
        var b = Ke("gtm.allowlist") || Ke("gtm.whitelist");
        b && J(9);
        qe && (b = ["google", "gtagfl", "lcl", "zone"]);
        Oo() && (qe ? J(116) : J(117),
        Po && (b = [],
        window.console && window.console.log && window.console.log("GTM blocked. See go/13687728.")));
        var c = b && Ka(Ca(b), Lo)
          , d = Ke("gtm.blocklist") || Ke("gtm.blacklist");
        d || (d = Ke("tagTypeBlacklist")) && J(3);
        d ? J(8) : d = [];
        Oo() && (d = Ca(d),
        d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
        0 <= Ca(d).indexOf("google") && J(2);
        var e = d && Ka(Ca(d), Mo)
          , f = {};
        return function(g) {
            var k = g && g[$b.Ma];
            if (!k || "string" != typeof k)
                return !0;
            k = k.replace(/^_*/, "");
            if (void 0 !== f[k])
                return f[k];
            var m = Ce[k] || []
              , n = a(k, m);
            if (b) {
                var p;
                if (p = n)
                    a: {
                        if (0 > c.indexOf(k))
                            if (m && 0 < m.length)
                                for (var q = 0; q < m.length; q++) {
                                    if (0 > c.indexOf(m[q])) {
                                        J(11);
                                        p = !1;
                                        break a
                                    }
                                }
                            else {
                                p = !1;
                                break a
                            }
                        p = !0
                    }
                n = p
            }
            var t = !1;
            if (d) {
                var u = 0 <= e.indexOf(k);
                if (u)
                    t = u;
                else {
                    var r = xa(e, m || []);
                    r && J(10);
                    t = r
                }
            }
            var v = !n || t;
            v || !(0 <= m.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (v = xa(e, No));
            return f[k] = v
        }
    }
      , Po = !1;
    var Oo = function() {
        return Ko.test(z.location && z.location.hostname)
    };
    var Ro = {
        initialized: 11,
        complete: 12,
        interactive: 13
    }
      , So = {}
      , To = Object.freeze((So[N.g.Ea] = !0,
    So))
      , Uo = 0 <= D.location.search.indexOf("?gtm_diagnostics=") || 0 <= D.location.search.indexOf("&gtm_diagnostics=")
      , Wo = function(a, b, c) {
        if (fj && "config" === a && !(1 < ol(b).K.length)) {
            var d, e = Cb("google_tag_data", {});
            e.td || (e.td = {});
            d = e.td;
            var f = G(c.I);
            G(c.h, f);
            var g = [], k;
            for (k in d) {
                var m = Vo(d[k], f);
                m.length && (Uo && console.log(m),
                g.push(k))
            }
            if (g.length) {
                if (g.length) {
                    var n = b + "*" + g.join(".");
                    pj = pj ? pj + "!" + n : "&tdc=" + n
                }
                Ya("TAGGING", Ro[D.readyState] || 14)
            }
            d[b] = f
        }
    };
    function Xo(a, b) {
        var c = {}, d;
        for (d in b)
            b.hasOwnProperty(d) && (c[d] = !0);
        for (var e in a)
            a.hasOwnProperty(e) && (c[e] = !0);
        return c
    }
    function Vo(a, b, c, d) {
        c = void 0 === c ? {} : c;
        d = void 0 === d ? "" : d;
        if (a === b)
            return [];
        var e = function(q, t) {
            var u = t[q];
            return void 0 === u ? To[q] : u
        }, f;
        for (f in Xo(a, b)) {
            var g = (d ? d + "." : "") + f
              , k = e(f, a)
              , m = e(f, b)
              , n = "object" === Wb(k) || "array" === Wb(k)
              , p = "object" === Wb(m) || "array" === Wb(m);
            if (n && p)
                Vo(k, m, c, g);
            else if (n || p || k !== m)
                c[g] = !0
        }
        return Object.keys(c)
    }
    ;var Yo = !1
      , Zo = 0
      , $o = [];
    function ap(a) {
        if (!Yo) {
            var b = D.createEventObject
              , c = "complete" == D.readyState
              , d = "interactive" == D.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                Yo = !0;
                for (var e = 0; e < $o.length; e++)
                    F($o[e])
            }
            $o.push = function() {
                for (var f = 0; f < arguments.length; f++)
                    F(arguments[f]);
                return 0
            }
        }
    }
    function bp() {
        if (!Yo && 140 > Zo) {
            Zo++;
            try {
                D.documentElement.doScroll("left"),
                ap()
            } catch (a) {
                z.setTimeout(bp, 50)
            }
        }
    }
    var cp = function(a) {
        Yo ? a() : $o.push(a)
    };
    var dp = function(a, b) {
        return {
            entityType: 1,
            indexInOriginContainer: a,
            nameInOriginContainer: b,
            originContainerId: S.C
        }
    };
    var fp = function(a, b) {
        this.h = !1;
        this.I = [];
        this.M = {
            tags: []
        };
        this.V = !1;
        this.m = this.B = 0;
        ep(this, a, b)
    }
      , gp = function(a, b, c, d) {
        if (ne.hasOwnProperty(b) || "__zone" === b)
            return -1;
        var e = {};
        Yb(d) && (e = G(d, e));
        e.id = c;
        e.status = "timeout";
        return a.M.tags.push(e) - 1
    }
      , hp = function(a, b, c, d) {
        var e = a.M.tags[b];
        e && (e.status = c,
        e.executionTime = d)
    }
      , ip = function(a) {
        if (!a.h) {
            for (var b = a.I, c = 0; c < b.length; c++)
                b[c]();
            a.h = !0;
            a.I.length = 0
        }
    }
      , ep = function(a, b, c) {
        void 0 !== b && jp(a, b);
        c && z.setTimeout(function() {
            return ip(a)
        }, Number(c))
    }
      , jp = function(a, b) {
        var c = Ha(function() {
            return F(function() {
                b(S.C, a.M)
            })
        });
        a.h ? c() : a.I.push(c)
    }
      , kp = function(a) {
        a.B++;
        return Ha(function() {
            a.m++;
            a.V && a.m >= a.B && ip(a)
        })
    }
      , lp = function(a) {
        a.V = !0;
        a.m >= a.B && ip(a)
    };
    var mp = {}
      , np = function() {
        return z.GoogleAnalyticsObject && z[z.GoogleAnalyticsObject]
    }
      , op = !1;
    var pp = function(a) {
        z.GoogleAnalyticsObject || (z.GoogleAnalyticsObject = a || "ga");
        var b = z.GoogleAnalyticsObject;
        if (z[b])
            z.hasOwnProperty(b);
        else {
            var c = function() {
                c.q = c.q || [];
                c.q.push(arguments)
            };
            c.l = Number(Ea());
            z[b] = c
        }
        return z[b]
    }
      , qp = function(a) {
        if (kf()) {
            var b = np();
            b(a + "require", "linker");
            b(a + "linker:passthrough", !0)
        }
    };
    function rp() {
        return z.GoogleAnalyticsObject || "ga"
    }
    var sp = function(a) {}
      , tp = function(a, b) {
        return function() {
            var c = np()
              , d = c && c.getByName && c.getByName(a);
            if (d) {
                var e = d.get("sendHitTask");
                d.set("sendHitTask", function(f) {
                    var g = f.get("hitPayload")
                      , k = f.get("hitCallback")
                      , m = 0 > g.indexOf("&tid=" + b);
                    m && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0),
                    f.set("hitCallback", void 0, !0));
                    e(f);
                    m && (f.set("hitPayload", g, !0),
                    f.set("hitCallback", k, !0),
                    f.set("_x_19", void 0, !0),
                    e(f))
                })
            }
        }
    };
    function bq(a, b, c, d) {
        var e = zc[a]
          , f = cq(a, b, c, d);
        if (!f)
            return null;
        var g = Ic(e[$b.Yg], c, []);
        if (g && g.length) {
            var k = g[0];
            f = bq(k.index, {
                R: f,
                P: 1 === k.oh ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }
    function cq(a, b, c, d) {
        function e() {
            if (f[$b.Mi])
                k();
            else {
                var w = Jc(f, c, [])
                  , y = w[$b.Uh];
                if (null != y)
                    for (var x = 0; x < y.length; x++)
                        if (!Uh(y[x])) {
                            k();
                            return
                        }
                var B = gp(c.zb, String(f[$b.Ma]), Number(f[$b.lb]), w[$b.Ni])
                  , A = !1;
                w.vtp_gtmOnSuccess = function() {
                    if (!A) {
                        A = !0;
                        var E = Fa() - I;
                        ik(c.id, zc[a], "5", E);
                        hp(c.zb, B, "success", E);
                        Q(70) && eo(c, f, yn.D.bh);
                        g()
                    }
                }
                ;
                w.vtp_gtmOnFailure = function() {
                    if (!A) {
                        A = !0;
                        var E = Fa() - I;
                        ik(c.id, zc[a], "6", E);
                        hp(c.zb, B, "failure", E);
                        Q(70) && eo(c, f, yn.D.ah);
                        k()
                    }
                }
                ;
                w.vtp_gtmTagId = f.tag_id;
                w.vtp_gtmEventId = c.id;
                c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
                ik(c.id, f, "1");
                var C = function() {
                    var E = Fa() - I;
                    ik(c.id, f, "7", E);
                    hp(c.zb, B, "exception", E);
                    Q(70) && eo(c, f, yn.D.Zg);
                    A || (A = !0,
                    k())
                };
                if (Q(70)) {
                    var H = Zn(yn.D.Sb, S.C, c.id, Number(f[$b.lb]), c.name, Yi(f));
                    $n(H)
                }
                var I = Fa();
                try {
                    Hc(w, {
                        event: c,
                        index: a,
                        type: 1
                    })
                } catch (E) {
                    C(E)
                }
                Q(70) && eo(c, f, yn.D.dh)
            }
        }
        var f = zc[a]
          , g = b.R
          , k = b.P
          , m = b.terminate;
        if (c.rf(f))
            return null;
        var n = Ic(f[$b.eh], c, []);
        if (n && n.length) {
            var p = n[0]
              , q = bq(p.index, {
                R: g,
                P: k,
                terminate: m
            }, c, d);
            if (!q)
                return null;
            g = q;
            k = 2 === p.oh ? m : q
        }
        if (f[$b.Ug] || f[$b.Pi]) {
            var t = f[$b.Ug] ? Ac : c.yk
              , u = g
              , r = k;
            if (!t[a]) {
                e = Ha(e);
                var v = dq(a, t, e);
                g = v.R;
                k = v.P
            }
            return function() {
                t[a](u, r)
            }
        }
        return e
    }
    function dq(a, b, c) {
        var d = []
          , e = [];
        b[a] = eq(d, e, c);
        return {
            R: function() {
                b[a] = fq;
                for (var f = 0; f < d.length; f++)
                    d[f]()
            },
            P: function() {
                b[a] = gq;
                for (var f = 0; f < e.length; f++)
                    e[f]()
            }
        }
    }
    function eq(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }
    function fq(a) {
        a()
    }
    function gq(a, b) {
        b()
    }
    ;var iq = function(a, b) {
        return 1 === arguments.length ? hq("config", a) : hq("config", a, b)
    }
      , jq = function(a, b, c) {
        c = c || {};
        c[N.g.yb] = a;
        return hq("event", b, c)
    };
    function hq(a) {
        return arguments
    }
    var kq = function() {
        this.h = [];
        this.m = []
    };
    kq.prototype.enqueue = function(a, b, c) {
        var d = this.h.length + 1;
        a["gtm.uniqueEventId"] = b;
        a["gtm.priorityId"] = d;
        c.eventId = b;
        c.fromContainerExecution = !0;
        c.priorityId = d;
        var e = {
            message: a,
            notBeforeEventId: b,
            priorityId: d,
            messageContext: c
        };
        this.h.push(e);
        for (var f = 0; f < this.m.length; f++)
            try {
                this.m[f](e)
            } catch (g) {}
    }
    ;
    kq.prototype.listen = function(a) {
        this.m.push(a)
    }
    ;
    kq.prototype.get = function() {
        for (var a = {}, b = 0; b < this.h.length; b++) {
            var c = this.h[b]
              , d = a[c.notBeforeEventId];
            d || (d = [],
            a[c.notBeforeEventId] = d);
            d.push(c)
        }
        return a
    }
    ;
    kq.prototype.prune = function(a) {
        for (var b = [], c = [], d = 0; d < this.h.length; d++) {
            var e = this.h[d];
            e.notBeforeEventId === a ? b.push(e) : c.push(e)
        }
        this.h = c;
        return b
    }
    ;
    var mq = function(a, b, c) {
        lq().enqueue(a, b, c)
    }
      , oq = function() {
        var a = nq;
        lq().listen(a)
    };
    function lq() {
        var a = ke.mb;
        a || (a = new kq,
        ke.mb = a);
        return a
    }
    var wq = function(a) {
        var b = ke.zones;
        return b ? b.getIsAllowedFn(ai(), a) : function() {
            return !0
        }
    }
      , xq = function(a) {
        var b = ke.zones;
        return b ? b.isActive(ai(), a) : !0
    };
    var Aq = function(a, b) {
        for (var c = [], d = 0; d < zc.length; d++)
            if (a[d]) {
                var e = zc[d];
                var f = kp(b.zb);
                try {
                    var g = bq(d, {
                        R: f,
                        P: f,
                        terminate: f
                    }, b, d);
                    if (g) {
                        var k = c
                          , m = k.push
                          , n = d
                          , p = e["function"];
                        if (!p)
                            throw "Error: No function name given for function call.";
                        var q = Bc[p];
                        m.call(k, {
                            Jh: n,
                            Bh: q ? q.priorityOverride || 0 : 0,
                            execute: g
                        })
                    } else
                        yq(d, b),
                        f()
                } catch (u) {
                    f()
                }
            }
        c.sort(zq);
        for (var t = 0; t < c.length; t++)
            c[t].execute();
        return 0 < c.length
    };
    function zq(a, b) {
        var c, d = b.Bh, e = a.Bh;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c)
            f = c;
        else {
            var g = a.Jh
              , k = b.Jh;
            f = g > k ? 1 : g < k ? -1 : 0
        }
        return f
    }
    function yq(a, b) {
        if (fj) {
            var c = function(d) {
                var e = b.rf(zc[d]) ? "3" : "4"
                  , f = Ic(zc[d][$b.Yg], b, []);
                f && f.length && c(f[0].index);
                ik(b.id, zc[d], e);
                var g = Ic(zc[d][$b.eh], b, []);
                g && g.length && c(g[0].index)
            };
            c(a)
        }
    }
    var Dq = !1, Bq;
    var Iq = function(a) {
        var b = Fa()
          , c = a["gtm.uniqueEventId"]
          , d = a["gtm.priorityId"]
          , e = a.event;
        if (Q(70)) {
            var f = Zn(yn.D.Dc, S.C, c, void 0, e);
            $n(f)
        }
        if ("gtm.js" === e) {
            if (Dq)
                return !1;
            Dq = !0;
        }
        var m, n = !1;
        if (xq(c))
            m = wq(c);
        else {
            if ("gtm.js" !== e && "gtm.init" !== e && "gtm.init_consent" !== e)
                return !1;
            n = !0;
            m = wq(Number.MAX_SAFE_INTEGER)
        }
        hk(c, e);
        var p = a.eventCallback
          , q = a.eventTimeout
          , t = {
            id: c,
            priorityId: d,
            name: e,
            rf: Qo(m),
            yk: [],
            vh: function() {
                J(6);
                Ya("HEALTH", 0)
            },
            ih: Eq(),
            jh: Fq(c),
            zb: new fp(function() {
                if (Q(70)) {
                    var x = Zn(yn.D.Lg, S.C, c, void 0, e);
                    if ($n(x)) {
                        var B = Zn(yn.D.Dc, S.C, c, void 0, e);
                        ao(x, B)
                    }
                    if ("gtm.load" === e) {
                        var A = Zn(yn.D.Mf, S.C);
                        if ($n(A)) {
                            var C = Zn(yn.D.oe, S.C);
                            ao(A, C)
                        }
                        co();
                    }
                }
                p && p.apply(p, [].slice.call(arguments, 0))
            }
            ,q)
        }
          , u = Oc(t);
        n && (u = Gq(u));
        if (Q(70)) {
            var r = Zn(yn.D.Mg, S.C, c, void 0, e);
            if ($n(r)) {
                var v = Zn(yn.D.Dc, S.C, c, void 0, e);
                ao(r, v)
            }
        }
        var w = Aq(u, t)
          , y = !1;
        lp(t.zb);
        "gtm.js" !== e && "gtm.sync" !== e || sp(S.C);
        return Hq(u, w) || y
    };
    function Fq(a) {
        return function(b) {
            fj && (Zb(b) || rk(a, "input", b))
        }
    }
    function Eq() {
        var a = {};
        a.event = Oe("event", 1);
        a.ecommerce = Oe("ecommerce", 1);
        a.gtm = Oe("gtm");
        a.eventModel = Oe("eventModel");
        return a
    }
    function Gq(a) {
        for (var b = [], c = 0; c < a.length; c++)
            if (a[c]) {
                var d = String(zc[c][$b.Ma]);
                if (me[d] || void 0 !== zc[c][$b.Qi] || De[d])
                    b[c] = !0;
                Q(58) || 0 !== zc[c][$b.Ma].indexOf("__ccd") && 0 !== zc[c][$b.Ma].indexOf("__ogt") && "__set_product_settings" !== zc[c][$b.Ma] || (b[c] = !0)
            }
        return b
    }
    function Hq(a, b) {
        if (!b)
            return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && zc[c] && !ne[String(zc[c][$b.Ma])])
                return !0;
        return !1
    }
    var Kq = function(a, b, c, d) {
        Jq.push("event", [b, a], c, d)
    }
      , Lq = function(a, b, c, d) {
        Jq.push("get", [a, b], c, d)
    }
      , Mq = function() {
        this.status = 1;
        this.I = {};
        this.h = {};
        this.M = {};
        this.V = null;
        this.B = {};
        this.m = !1
    }
      , Nq = function(a, b, c, d) {
        var e = Fa();
        this.type = a;
        this.m = e;
        this.W = b || "";
        this.h = c;
        this.messageContext = d
    }
      , Oq = function() {
        this.m = {};
        this.B = {};
        this.h = []
    }
      , Pq = function(a, b) {
        var c = ol(b);
        return a.m[c.T] = a.m[c.T] || new Mq
    }
      , Qq = function(a, b, c, d) {
        if (d.W) {
            var e = Pq(a, d.W)
              , f = e.V;
            if (f) {
                var g = G(c)
                  , k = G(e.I[d.W])
                  , m = G(e.B)
                  , n = G(e.h)
                  , p = G(a.B)
                  , q = {};
                if (fj)
                    try {
                        q = G(He)
                    } catch (v) {
                        J(72)
                    }
                var t = ol(d.W).prefix
                  , u = function(v) {
                    qk(d.messageContext.eventId, t, v);
                    var w = g[N.g.Lb];
                    w && F(w)
                }
                  , r = om(mm(lm(km(im(hm(jm(gm(fm(em(new dm(d.messageContext.eventId,d.messageContext.priorityId), g), k), m), n), p), q), d.messageContext.eventMetadata), function() {
                    if (u) {
                        var v = u;
                        u = void 0;
                        v("2")
                    }
                }), function() {
                    if (u) {
                        var v = u;
                        u = void 0;
                        v("3")
                    }
                }));
                try {
                    qk(d.messageContext.eventId, t, "1"),
                    Wo(d.type, d.W, r),
                    f(d.W, b, d.m, r)
                } catch (v) {
                    qk(d.messageContext.eventId, t, "4")
                }
            }
        }
    };
    Oq.prototype.register = function(a, b, c) {
        var d = Pq(this, a);
        3 !== d.status && (d.V = b,
        d.status = 3,
        c && (G(d.h, c),
        d.h = c),
        this.flush())
    }
    ;
    Oq.prototype.push = function(a, b, c, d) {
        if (void 0 !== c) {
            if (!ol(c))
                return;
            if (c) {
                var e = ol(c);
                e && 1 === Pq(this, c).status && (Pq(this, c).status = 2,
                this.push("require", [{}], e.T, {}))
            }
            Pq(this, c).m && (d.deferrable = !1)
        }
        this.h.push(new Nq(a,c,b,d));
        d.deferrable || this.flush()
    }
    ;
    Oq.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.h.length; ) {
            var f = this.h[0];
            if (f.messageContext.deferrable)
                !f.W || Pq(this, f.W).m ? (f.messageContext.deferrable = !1,
                this.h.push(f)) : c.push(f),
                this.h.shift();
            else {
                var g = void 0;
                switch (f.type) {
                case "require":
                    g = Pq(this, f.W);
                    if (3 !== g.status && !a) {
                        this.h.push.apply(this.h, c);
                        return
                    }
                    break;
                case "set":
                    l(f.h[0], function(t, u) {
                        G(La(t, u), b.B)
                    });
                    break;
                case "config":
                    g = Pq(this, f.W);
                    e.Ya = {};
                    l(f.h[0], function(t) {
                        return function(u, r) {
                            G(La(u, r), t.Ya)
                        }
                    }(e));
                    var k = !!e.Ya[N.g.Cc];
                    delete e.Ya[N.g.Cc];
                    var m = ol(f.W)
                      , n = m.T === m.id;
                    k || (n ? g.B = {} : g.I[f.W] = {});
                    g.m && k || Qq(this, N.g.wa, e.Ya, f);
                    g.m = !0;
                    n ? G(e.Ya, g.B) : (G(e.Ya, g.I[f.W]),
                    J(70));
                    d = !0;
                    break;
                case "event":
                    g = Pq(this, f.W);
                    e.bd = {};
                    l(f.h[0], function(t) {
                        return function(u, r) {
                            G(La(u, r), t.bd)
                        }
                    }(e));
                    Qq(this, f.h[1], e.bd, f);
                    break;
                case "get":
                    g = Pq(this, f.W);
                    var p = {}
                      , q = (p[N.g.Sa] = f.h[0],
                    p[N.g.hb] = f.h[1],
                    p);
                    Qq(this, N.g.Ba, q, f)
                }
                this.h.shift();
                Rq(this, f)
            }
            e = {
                Ya: e.Ya,
                bd: e.bd
            }
        }
        this.h.push.apply(this.h, c);
        d && this.flush()
    }
    ;
    var Rq = function(a, b) {
        if ("require" !== b.type)
            if (b.W)
                for (var c = Pq(a, b.W).M[b.type] || [], d = 0; d < c.length; d++)
                    c[d]();
            else
                for (var e in a.m)
                    if (a.m.hasOwnProperty(e)) {
                        var f = a.m[e];
                        if (f && f.M)
                            for (var g = f.M[b.type] || [], k = 0; k < g.length; k++)
                                g[k]()
                    }
    }
      , Sq = function(a, b) {
        var c = Jq
          , d = G(b);
        G(Pq(c, a).h, d);
        Pq(c, a).h = d
    }
      , Jq = new Oq;
    var Tq = {}
      , Uq = {}
      , Vq = function(a) {
        for (var b = [], c = [], d = {}, e = 0; e < a.length; d = {
            gd: d.gd,
            dd: d.dd
        },
        e++) {
            var f = a[e];
            if (0 <= f.indexOf("-"))
                d.gd = ol(f),
                d.gd && (sa(bi(), function(p) {
                    return function(q) {
                        return p.gd.T === q
                    }
                }(d)) ? b.push(f) : c.push(f));
            else {
                var g = Tq[f] || [];
                d.dd = {};
                g.forEach(function(p) {
                    return function(q) {
                        return p.dd[q] = !0
                    }
                }(d));
                for (var k = ai(), m = 0; m < k.length; m++)
                    if (d.dd[k[m]]) {
                        b = b.concat(bi());
                        break
                    }
                var n = Uq[f] || [];
                n.length && (b = b.concat(n))
            }
        }
        return {
            Uj: b,
            Wj: c
        }
    }
      , Wq = function(a) {
        l(Tq, function(b, c) {
            var d = c.indexOf(a);
            0 <= d && c.splice(d, 1)
        })
    }
      , Xq = function(a) {
        l(Uq, function(b, c) {
            var d = c.indexOf(a);
            0 <= d && c.splice(d, 1)
        })
    };
    var Yq = "HA GF G UA AW DC MC".split(" ")
      , Zq = !1
      , $q = !1;
    function ar(a, b) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: Ee()
        });
        b.eventId = a["gtm.uniqueEventId"];
        b.priorityId = a["gtm.priorityId"];
        return {
            eventId: b.eventId,
            priorityId: b.priorityId
        }
    }
    var br = {
        config: function(a, b) {
            var c = ar(a, b);
            if (!(2 > a.length) && h(a[1])) {
                var d = {};
                if (2 < a.length) {
                    if (void 0 != a[2] && !Yb(a[2]) || 3 < a.length)
                        return;
                    d = a[2]
                }
                var e = ol(a[1]);
                if (e) {
                    hk(c.eventId, "gtag.config");
                    var f = e.T
                      , g = e.id !== f;
                    if (g ? -1 === bi().indexOf(f) : -1 === ai().indexOf(f)) {
                        if (!Q(61) || !d[N.g.Jd]) {
                            var k = d[N.g.ma] || Jq.B[N.g.ma];
                            g ? Jo(f, k, {
                                source: 2,
                                fromContainerExecution: b.fromContainerExecution
                            }) : Io(f, k, !0, {
                                source: 2,
                                fromContainerExecution: b.fromContainerExecution
                            })
                        }
                    } else {
                        if (pe && !g && !d[N.g.Cc]) {
                            var m = $q;
                            $q = !0;
                            if (m)
                                return
                        }
                        Zq || J(43);
                        if (!b.noTargetGroup)
                            if (g) {
                                Xq(e.id);
                                var n = e.id
                                  , p = d[N.g.Hd] || "default";
                                p = String(p).split(",");
                                for (var q = 0; q < p.length; q++) {
                                    var t = Uq[p[q]] || [];
                                    Uq[p[q]] = t;
                                    0 > t.indexOf(n) && t.push(n)
                                }
                            } else {
                                Wq(e.id);
                                var u = e.id
                                  , r = d[N.g.Hd] || "default";
                                r = r.toString().split(",");
                                for (var v = 0; v < r.length; v++) {
                                    var w = Tq[r[v]] || [];
                                    Tq[r[v]] = w;
                                    0 > w.indexOf(u) && w.push(u)
                                }
                            }
                        delete d[N.g.Hd];
                        var y = b.eventMetadata || {};
                        y.hasOwnProperty("is_external_event") || (y.is_external_event = !b.fromContainerExecution);
                        b.eventMetadata = y;
                        delete d[N.g.Lb];
                        for (var x = g ? [e.id] : bi(), B = 0; B < x.length; B++) {
                            var A = G(b);
                            Jq.push("config", [d], x[B], A)
                        }
                    }
                }
            }
        },
        consent: function(a, b) {
            if (3 === a.length) {
                J(39);
                var c = ar(a, b)
                  , d = a[1];
                "default" === d ? Sh(a[2]) : "update" === d ? Th(a[2], c) : "declare" === d && b.fromContainerExecution && Rh(a[2])
            }
        },
        event: function(a, b) {
            var c = a[1];
            if (!(2 > a.length) && h(c)) {
                var d;
                if (2 < a.length) {
                    if (!Yb(a[2]) && void 0 != a[2] || 3 < a.length)
                        return;
                    d = a[2]
                }
                var e = d
                  , f = {}
                  , g = (f.event = c,
                f);
                e && (g.eventModel = G(e),
                e[N.g.Lb] && (g.eventCallback = e[N.g.Lb]),
                e[N.g.Cd] && (g.eventTimeout = e[N.g.Cd]));
                var k = ar(a, b)
                  , m = k.eventId
                  , n = k.priorityId;
                g["gtm.uniqueEventId"] = m;
                n && (g["gtm.priorityId"] = n);
                if ("optimize.callback" === c)
                    return g.eventModel = g.eventModel || {},
                    g;
                var p;
                var q = d
                  , t = q && q[N.g.yb];
                void 0 === t && (t = Ke(N.g.yb, 2),
                void 0 === t && (t = "default"));
                if (h(t) || ra(t)) {
                    var u = t.toString().replace(/\s+/g, "").split(",")
                      , r = Vq(u)
                      , v = r.Uj
                      , w = r.Wj;
                    if (w.length)
                        for (var y = q && q[N.g.ma] || Jq.B[N.g.ma], x = 0; x < w.length; x++) {
                            var B = ol(w[x]);
                            B && Jo(B.T, y, {
                                source: 3,
                                fromContainerExecution: b.fromContainerExecution
                            })
                        }
                    p = ql(v)
                } else
                    p = void 0;
                var A = p;
                if (A) {
                    hk(m, c);
                    for (var C = [], H = 0; H < A.length; H++) {
                        var I = A[H]
                          , E = G(b);
                        if (-1 !== Yq.indexOf(I.prefix)) {
                            var K = G(d)
                              , M = E.eventMetadata || {};
                            M.hasOwnProperty("is_external_event") || (M.is_external_event = !E.fromContainerExecution);
                            E.eventMetadata = M;
                            delete K[N.g.Lb];
                            Kq(c, K, I.id, E)
                        }
                        C.push(I.id)
                    }
                    g.eventModel = g.eventModel || {};
                    0 < A.length ? g.eventModel[N.g.yb] = C.join() : delete g.eventModel[N.g.yb];
                    Zq || J(43);
                    return b.noGtmEvent ? void 0 : g
                }
            }
        },
        get: function(a, b) {
            J(53);
            if (4 === a.length && h(a[1]) && h(a[2]) && pa(a[3])) {
                var c = ol(a[1])
                  , d = String(a[2])
                  , e = a[3];
                if (c) {
                    Zq || J(43);
                    var f = Jq.B[N.g.ma];
                    if (!sa(bi(), function(k) {
                        return c.T === k
                    }))
                        Jo(c.T, f, {
                            source: 4,
                            fromContainerExecution: b.fromContainerExecution
                        });
                    else if (-1 !== Yq.indexOf(c.prefix)) {
                        ar(a, b);
                        var g = {};
                        Nh(G((g[N.g.Sa] = d,
                        g[N.g.hb] = e,
                        g)));
                        Lq(d, function(k) {
                            F(function() {
                                return e(k)
                            })
                        }, c.id, b)
                    }
                }
            }
        },
        js: function(a, b) {
            if (2 == a.length && a[1].getTime) {
                Zq = !0;
                var c = ar(a, b)
                  , d = c.eventId
                  , e = c.priorityId
                  , f = {};
                return f.event = "gtm.js",
                f["gtm.start"] = a[1].getTime(),
                f["gtm.uniqueEventId"] = d,
                f["gtm.priorityId"] = e,
                f
            }
        },
        policy: function() {},
        set: function(a, b) {
            var c;
            2 == a.length && Yb(a[1]) ? c = G(a[1]) : 3 == a.length && h(a[1]) && (c = {},
            Yb(a[2]) || ra(a[2]) ? c[a[1]] = G(a[2]) : c[a[1]] = a[2]);
            if (c) {
                var d = ar(a, b)
                  , e = d.eventId
                  , f = d.priorityId;
                G(c);
                var g = G(c);
                Jq.push("set", [g], void 0, b);
                c["gtm.uniqueEventId"] = e;
                f && (c["gtm.priorityId"] = f);
                Q(30) && delete c.event;
                b.overwriteModelFields = !0;
                return c
            }
        }
    }
      , cr = {
        policy: !0
    };
    var dr = function(a) {
        var b = z[je.ca].hide;
        if (b && void 0 !== b[a] && b.end) {
            b[a] = !1;
            var c = !0, d;
            for (d in b)
                if (b.hasOwnProperty(d) && !0 === b[d]) {
                    c = !1;
                    break
                }
            c && (b.end(),
            b.end = null)
        }
    }
      , er = function(a) {
        var b = z[je.ca]
          , c = b && b.hide;
        c && c.end && (c[a] = !0)
    };
    var fr = !1
      , gr = [];
    function hr() {
        if (!fr) {
            fr = !0;
            for (var a = 0; a < gr.length; a++)
                F(gr[a])
        }
    }
    var ir = function(a) {
        fr ? F(a) : gr.push(a)
    };
    var zr = function(a) {
        if (yr(a))
            return a;
        this.h = a
    };
    zr.prototype.getUntrustedMessageValue = function() {
        return this.h
    }
    ;
    var yr = function(a) {
        return !a || "object" !== Wb(a) || Yb(a) ? !1 : "getUntrustedMessageValue"in a
    };
    zr.prototype.getUntrustedMessageValue = zr.prototype.getUntrustedMessageValue;
    var Ar = 0
      , Br = {}
      , Cr = []
      , Dr = []
      , Er = !1
      , Fr = !1;
    function Gr(a, b) {
        return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId
    }
    var Hr = function(a) {
        return z[je.ca].push(a)
    }
      , Ir = function(a, b) {
        var c = ke[je.ca]
          , d = c ? c.subscribers : 1
          , e = 0
          , f = !1
          , g = void 0;
        b && (g = z.setTimeout(function() {
            f || (f = !0,
            a());
            g = void 0
        }, b));
        return function() {
            ++e === d && (g && (z.clearTimeout(g),
            g = void 0),
            f || (a(),
            f = !0))
        }
    };
    function Jr(a, b) {
        var c = a._clear || b.overwriteModelFields;
        l(a, function(e, f) {
            "_clear" !== e && (c && Ne(e),
            Ne(e, f))
        });
        ze || (ze = a["gtm.start"]);
        var d = a["gtm.uniqueEventId"];
        if (!a.event)
            return !1;
        "number" !== typeof d && (d = Ee(),
        a["gtm.uniqueEventId"] = d,
        Ne("gtm.uniqueEventId", d));
        return Iq(a)
    }
    function Kr(a) {
        if (null == a || "object" !== typeof a)
            return !1;
        if (a.event)
            return !0;
        if (ya(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b || "get" === b)
                return !0
        }
        return !1
    }
    function Lr() {
        var a;
        if (Dr.length)
            a = Dr.shift();
        else if (Cr.length)
            a = Cr.shift();
        else
            return;
        var b;
        var c = a;
        if (Er || !Kr(c.message))
            b = c;
        else {
            Er = !0;
            var d = c.message["gtm.uniqueEventId"];
            "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = Ee());
            var e = {}
              , f = {
                message: (e.event = "gtm.init_consent",
                e["gtm.uniqueEventId"] = d - 2,
                e),
                messageContext: {
                    eventId: d - 2
                }
            }
              , g = {}
              , k = {
                message: (g.event = "gtm.init",
                g["gtm.uniqueEventId"] = d - 1,
                g),
                messageContext: {
                    eventId: d - 1
                }
            };
            Cr.unshift(k, c);
            if (fj && S.C) {
                var m;
                if (S.We) {
                    var n = S.C
                      , p = di().destination[n];
                    m = p && p.context
                } else {
                    var q = S.C
                      , t = di().container[q];
                    m = t && t.context
                }
                var u = m, r, v = yf(z.location.href);
                r = v.hostname + v.pathname;
                var w = u && u.fromContainerExecution
                  , y = u && u.source
                  , x = S.C
                  , B = S.Pa
                  , A = S.We;
                rj || (rj = r);
                qj.push(x + ";" + B + ";" + (w ? 1 : 0) + ";" + (y || 0) + ";" + (A ? 1 : 0))
            }
            b = f
        }
        return b
    }
    function Mr() {
        for (var a = !1, b; !Fr && (b = Lr()); ) {
            Fr = !0;
            delete He.eventModel;
            Je();
            var c = b
              , d = c.message
              , e = c.messageContext;
            if (null == d)
                Fr = !1;
            else {
                if (e.fromContainerExecution)
                    for (var f = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], g = 0; g < f.length; g++) {
                        var k = f[g]
                          , m = Ke(k, 1);
                        if (ra(m) || Yb(m))
                            m = G(m);
                        Ie[k] = m
                    }
                try {
                    if (pa(d))
                        try {
                            d.call(Le)
                        } catch (C) {}
                    else if (ra(d)) {
                        var n = d;
                        if (h(n[0])) {
                            var p = n[0].split(".")
                              , q = p.pop()
                              , t = n.slice(1)
                              , u = Ke(p.join("."), 2);
                            if (null != u)
                                try {
                                    u[q].apply(u, t)
                                } catch (C) {}
                        }
                    } else {
                        var r = void 0
                          , v = !1;
                        if (ya(d)) {
                            a: {
                                if (d.length && h(d[0])) {
                                    var w = br[d[0]];
                                    if (w && (!e.fromContainerExecution || !cr[d[0]])) {
                                        r = w(d, e);
                                        break a
                                    }
                                }
                                r = void 0
                            }
                            (v = r && "set" === d[0] && !!r.event) && J(101)
                        } else
                            r = d;
                        if (r) {
                            var y = Jr(r, e);
                            a = y || a;
                            v && y && J(113)
                        }
                    }
                } finally {
                    e.fromContainerExecution && Je(!0);
                    var x = d["gtm.uniqueEventId"];
                    if ("number" === typeof x) {
                        for (var B = Br[String(x)] || [], A = 0; A < B.length; A++)
                            Dr.push(Nr(B[A]));
                        B.length && Dr.sort(Gr);
                        delete Br[String(x)];
                        x > Ar && (Ar = x)
                    }
                    Fr = !1
                }
            }
        }
        return !a
    }
    function Or() {
        if (Q(70)) {
            var b = Zn(yn.D.oe, S.C);
            $n(b);
            if (Pr()) {
                var c = Zn(yn.D.Of, S.C);
                if ($n(c)) {
                    var d = Zn(yn.D.qe, S.C);
                    ao(c, d)
                }
            }
        }
        var e = Mr();
        try {
            dr(S.C)
        } catch (f) {}
        return e
    }
    function nq(a) {
        if (Ar < a.notBeforeEventId) {
            var b = String(a.notBeforeEventId);
            Br[b] = Br[b] || [];
            Br[b].push(a)
        } else
            Dr.push(Nr(a)),
            Dr.sort(Gr),
            F(function() {
                Fr || Mr()
            })
    }
    function Nr(a) {
        return {
            message: a.message,
            messageContext: a.messageContext
        }
    }
    var Qr = function() {
        function a(g) {
            var k = {};
            if (yr(g)) {
                var m = g;
                g = yr(m) ? m.getUntrustedMessageValue() : void 0;
                k.fromContainerExecution = !0
            }
            return {
                message: g,
                messageContext: k
            }
        }
        var b = Cb(je.ca, [])
          , c = ke[je.ca] = ke[je.ca] || {};
        !0 === c.pruned && J(83);
        Br = lq().get();
        oq();
        cp(function() {
            if (!c.gtmDom) {
                c.gtmDom = !0;
                var g = {};
                b.push((g.event = "gtm.dom",
                g))
            }
        });
        ir(function() {
            if (!c.gtmLoad) {
                c.gtmLoad = !0;
                var g = {};
                b.push((g.event = "gtm.load",
                g))
            }
        });
        c.subscribers = (c.subscribers || 0) + 1;
        var d = b.push;
        b.push = function() {
            var g;
            if (0 < ke.SANDBOXED_JS_SEMAPHORE) {
                g = [];
                for (var k = 0; k < arguments.length; k++)
                    g[k] = new zr(arguments[k])
            } else
                g = [].slice.call(arguments, 0);
            var m = g.map(function(t) {
                return a(t)
            });
            Cr.push.apply(Cr, m);
            var n = d.apply(b, g)
              , p = Math.max(100, Number("1000") || 300);
            if (this.length > p)
                for (J(4),
                c.pruned = !0; this.length > p; )
                    this.shift();
            var q = "boolean" !== typeof n || n;
            return Mr() && q
        }
        ;
        var e = b.slice(0).map(function(g) {
            return a(g)
        });
        Cr.push.apply(Cr, e);
        if (Pr()) {
            if (Q(70)) {
                var f = Zn(yn.D.qe, S.C);
                $n(f)
            }
            F(Or)
        }
    }
      , Pr = function() {
        var a = !0;
        return a
    };
    function Rr(a) {
        if (null == a || 0 === a.length)
            return !1;
        var b = Number(a)
          , c = Fa();
        return b < c + 3E5 && b > c - 9E5
    }
    function Sr(a) {
        return a && 0 === a.indexOf("pending:") ? Rr(a.substr(8)) : !1
    }
    ;var Ec = {};
    Ec.Od = new String("undefined");
    var ss = z.clearTimeout
      , ts = z.setTimeout
      , T = function(a, b, c, d) {
        if (Zh()) {
            b && F(b)
        } else
            return Hb(a, b, c, d)
    }
      , us = function() {
        return new Date
    }
      , vs = function() {
        return z.location.href
    }
      , ws = function(a) {
        return wf(yf(a), "fragment")
    }
      , xs = function(a) {
        return xf(yf(a))
    }
      , ys = function(a, b) {
        return Ke(a, b || 2)
    }
      , zs = function(a, b, c) {
        var d;
        b ? (a.eventCallback = b,
        c && (a.eventTimeout = c),
        d = Hr(a)) : d = Hr(a);
        return d
    }
      , As = function(a, b) {
        z[a] = b
    }
      , W = function(a, b, c) {
        b && (void 0 === z[a] || c && !z[a]) && (z[a] = b);
        return z[a]
    }
      , Bs = function(a, b, c) {
        return If(a, b, void 0 === c ? !0 : !!c)
    }
      , Cs = function(a, b, c) {
        return 0 === Rf(a, b, c)
    }
      , Ds = function(a, b) {
        if (Zh()) {
            b && F(b)
        } else
            Jb(a, b)
    }
      , Es = function(a) {
        return !!Zr(a, "init", !1)
    }
      , Fs = function(a) {
        Xr(a, "init", !0)
    }
      , Gs = function(a, b, c) {
        fj && (Zb(a) || rk(c, b, a))
    };
    function dt(a, b) {
        function c(g) {
            var k = yf(g)
              , m = wf(k, "protocol")
              , n = wf(k, "host", !0)
              , p = wf(k, "port")
              , q = wf(k, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === m || "http" === m && "80" === p || "https" === m && "443" === p)
                m = "web",
                p = "default";
            return [m, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f])
                return !1;
        return !0
    }
    function et(a) {
        return ft(a) ? 1 : 0
    }
    function ft(a) {
        var b = a.arg0
          , c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = G(a, {});
                G({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (et(e))
                    return !0
            }
            return !1
        }
        switch (a["function"]) {
        case "_cn":
            return 0 <= String(b).indexOf(String(c));
        case "_css":
            var f;
            a: {
                if (b)
                    try {
                        for (var g = 0; g < ed.length; g++) {
                            var k = ed[g];
                            if (b[k]) {
                                f = b[k](c);
                                break a
                            }
                        }
                    } catch (m) {}
                f = !1
            }
            return f;
        case "_ew":
            return fd(b, c);
        case "_eq":
            return String(b) === String(c);
        case "_ge":
            return Number(b) >= Number(c);
        case "_gt":
            return Number(b) > Number(c);
        case "_lc":
            return 0 <= String(b).split(",").indexOf(String(c));
        case "_le":
            return Number(b) <= Number(c);
        case "_lt":
            return Number(b) < Number(c);
        case "_re":
            return hd(b, c, a.ignore_case);
        case "_sw":
            return 0 === String(b).indexOf(String(c));
        case "_um":
            return dt(b, c)
        }
        return !1
    }
    ;ch();
    Object.freeze({
        dl: 1,
        id: 1
    });
    Object.freeze(["config", "event", "get", "set"]);
    function Dt() {
        return z.gaGlobal = z.gaGlobal || {}
    }
    var Et = function() {
        var a = Dt();
        a.hid = a.hid || ta();
        return a.hid
    }
      , Ft = function(a, b) {
        var c = Dt();
        if (void 0 == c.vid || b && !c.from_cookie)
            c.vid = a,
            c.from_cookie = b
    };
    var au = function() {
        var a = !0;
        Xi(7) && Xi(9) && Xi(10) || (a = !1);
        return a
    }
      , bu = function() {
        var a = !0;
        Xi(3) && Xi(4) || (a = !1);
        return a
    };
    var Cu = window
      , Du = document
      , Eu = function(a) {
        var b = Cu._gaUserPrefs;
        if (b && b.ioo && b.ioo() || a && !0 === Cu["ga-disable-" + a])
            return !0;
        try {
            var c = Cu.external;
            if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs)
                return !0
        } catch (f) {}
        for (var d = Cf("AMP_TOKEN", String(Du.cookie), !0), e = 0; e < d.length; e++)
            if ("$OPT_OUT" == d[e])
                return !0;
        return Du.getElementById("__gaOptOutExtension") ? !0 : !1
    };
    function Mu(a) {
        l(a, function(c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[N.g.Fa] || {};
        l(b, function(c) {
            "_" === c.charAt(0) && delete b[c]
        })
    }
    ;var Wu = function(a, b) {};
    function Vu(a, b) {
        var c = function() {};
        return c
    }
    function Xu(a, b, c) {}
    ;var Cv = function(a, b) {
        if (!b.F) {
            var c = R(b, N.g.Sa)
              , d = R(b, N.g.hb)
              , e = R(b, c);
            if (void 0 === e) {
                var f = void 0;
                zv.hasOwnProperty(c) ? f = zv[c] : Av.hasOwnProperty(c) && (f = Av[c]);
                1 === f && (f = Bv(c));
                h(f) ? np()(function() {
                    var g = np().getByName(a).get(f);
                    d(g)
                }) : d(void 0)
            } else
                d(e)
        }
    }
      , Dv = function(a, b) {
        var c = a[N.g.Pb]
          , d = b + "."
          , e = a[N.g.N] || ""
          , f = void 0 === c ? !!a.use_anchor : "fragment" === c
          , g = !!a[N.g.vb];
        e = String(e).replace(/\s+/g, "").split(",");
        var k = np();
        k(d + "require", "linker");
        k(d + "linker:autoLink", e, f, g)
    }
      , Hv = function(a, b, c) {
        if (kf() && (!c.F || !Ev[a])) {
            var d = !Uh(N.g.O)
              , e = function(f) {
                var g, k, m = np(), n = Fv(b, "", c), p, q = n.createOnlyFields._useUp;
                if (c.F || Gv(b, n.createOnlyFields)) {
                    c.F && (g = "gtm" + Ee(),
                    k = n.createOnlyFields,
                    n.gtmTrackerName && (k.name = g));
                    m(function() {
                        var u = m.getByName(b);
                        u && (p = u.get("clientId"));
                        c.F || m.remove(b)
                    });
                    m("create", a, c.F ? k : n.createOnlyFields);
                    d && Uh(N.g.O) && (d = !1,
                    m(function() {
                        var u = np().getByName(c.F ? g : b);
                        if (u) {
                            var r = u.get("clientId")
                              , v = Q(90) ? "sst.gcut" : "gcut";
                            r == p && q || (c.F ? (n.fieldsToSet["&gcu"] = "1",
                            n.fieldsToSet["&" + v] = ge[f]) : (n.fieldsToSend["&gcu"] = "1",
                            n.fieldsToSend["&" + v] = ge[f]),
                            u.set(n.fieldsToSet),
                            c.F ? u.send("pageview") : u.send("pageview", n.fieldsToSend))
                        }
                    }));
                    c.F && m(function() {
                        m.remove(g)
                    })
                }
            };
            Wh(function() {
                return e(N.g.O)
            }, N.g.O);
            Wh(function() {
                return e(N.g.H)
            }, N.g.H);
            c.F && (Ev[a] = !0)
        }
    }
      , Iv = function(a, b) {
        Go() && b && (a[N.g.ub] = b)
    }
      , Rv = function(a, b, c) {
        function d() {
            var E = R(c, N.g.uc);
            k(function() {
                if (!c.F && Yb(E)) {
                    var K = r.fieldsToSend, M = m().getByName(n), U;
                    for (U in E)
                        if (E.hasOwnProperty(U) && /^(dimension|metric)\d+$/.test(U) && void 0 != E[U]) {
                            var fa = M.get(Bv(E[U]));
                            Jv(K, U, fa)
                        }
                }
            })
        }
        function e() {
            if (r.displayfeatures) {
                var E = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                p("require", "displayfeatures", void 0, {
                    cookieName: E
                })
            }
        }
        var f = a
          , g = "https://www.google-analytics.com/analytics.js"
          , k = c.F ? pp(R(c, "gaFunctionName")) : pp();
        if (pa(k)) {
            var m = np, n;
            c.F ? n = R(c, "name") || R(c, "gtmTrackerName") : n = "gtag_" + f.split("-").join("_");
            var p = function(E) {
                var K = [].slice.call(arguments, 0);
                K[0] = n ? n + "." + K[0] : "" + K[0];
                k.apply(window, K)
            }
              , q = function(E) {
                var K = function(ca, Z) {
                    for (var V = 0; Z && V < Z.length; V++)
                        p(ca, Z[V])
                }
                  , M = c.F
                  , U = M ? Kv(r) : Lv(b, c);
                if (U) {
                    var fa = {};
                    Iv(fa, E);
                    p("require", "ec", "ec.js", fa);
                    M && U.ef && p("set", "&cu", U.ef);
                    var L = U.action;
                    if (M || "impressions" === L)
                        if (K("ec:addImpression", U.th),
                        !M)
                            return;
                    if ("promo_click" === L || "promo_view" === L || M && U.Wc) {
                        var O = U.Wc;
                        K("ec:addPromo", O);
                        if (O && 0 < O.length && "promo_click" === L) {
                            M ? p("ec:setAction", L, U.Na) : p("ec:setAction", L);
                            return
                        }
                        if (!M)
                            return
                    }
                    "promo_view" !== L && "impressions" !== L && (K("ec:addProduct", U.Bb),
                    p("ec:setAction", L, U.Na))
                }
            }
              , t = function(E) {
                if (E) {
                    var K = {};
                    if (Yb(E))
                        for (var M in Mv)
                            Mv.hasOwnProperty(M) && Nv(Mv[M], M, E[M], K);
                    Iv(K, y);
                    p("require", "linkid", K)
                }
            }
              , u = function() {
                if (Zh()) {} else {
                    var E = R(c, N.g.wi);
                    E && (p("require", E, {
                        dataLayer: je.ca
                    }),
                    p("require", "render"))
                }
            }
              , r = Fv(n, b, c)
              , v = function(E, K, M) {
                M && (K = "" + K);
                r.fieldsToSend[E] = K
            };
            !c.F && Gv(n, r.createOnlyFields) && (k(function() {
                m() && m().remove(n)
            }),
            Ov[n] = !1);
            k("create", f, r.createOnlyFields);
            if (r.createOnlyFields[N.g.ub] && !c.F) {
                var w = se || ue ? Fo(r.createOnlyFields[N.g.ub], "/analytics.js") : void 0;
                w && (g = w)
            }
            var y = c.F ? r.fieldsToSet[N.g.ub] : r.createOnlyFields[N.g.ub];
            if (y) {
                var x = c.F ? r.fieldsToSet[N.g.Ed] : r.createOnlyFields[N.g.Ed];
                x && !Ov[n] && (Ov[n] = !0,
                k(tp(n, x)))
            }
            c.F ? r.enableRecaptcha && p("require", "recaptcha", "recaptcha.js") : (d(),
            t(r.linkAttribution));
            var B = r[N.g.qa];
            B && B[N.g.N] && Dv(B, n);
            p("set", r.fieldsToSet);
            if (c.F) {
                if (r.enableLinkId) {
                    var A = {};
                    Iv(A, y);
                    p("require", "linkid", "linkid.js", A)
                }
                kf() && Hv(f, n, c)
            }
            if (b === N.g.kc)
                if (c.F) {
                    e();
                    if (r.remarketingLists) {
                        var C = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                        p("require", "adfeatures", {
                            cookieName: C
                        })
                    }
                    q(y);
                    p("send", "pageview");
                    r.createOnlyFields._useUp && qp(n + ".")
                } else
                    u(),
                    p("send", "pageview", r.fieldsToSend);
            else
                b === N.g.wa ? (u(),
                Cl(f, c),
                R(c, N.g.jb) && (dl(["aw", "dc"]),
                qp(n + ".")),
                0 != r.sendPageView && p("send", "pageview", r.fieldsToSend),
                Hv(f, n, c)) : b === N.g.Ba ? Cv(n, c) : "screen_view" === b ? p("send", "screenview", r.fieldsToSend) : "timing_complete" === b ? (r.fieldsToSend.hitType = "timing",
                v("timingCategory", r.eventCategory, !0),
                c.F ? v("timingVar", r.timingVar, !0) : v("timingVar", r.name, !0),
                v("timingValue", Aa(r.value)),
                void 0 !== r.eventLabel && v("timingLabel", r.eventLabel, !0),
                p("send", r.fieldsToSend)) : "exception" === b ? p("send", "exception", r.fieldsToSend) : "" === b && c.F || ("track_social" === b && c.F ? (r.fieldsToSend.hitType = "social",
                v("socialNetwork", r.socialNetwork, !0),
                v("socialAction", r.socialAction, !0),
                v("socialTarget", r.socialTarget, !0)) : ((c.F || Pv[b]) && q(y),
                c.F && e(),
                r.fieldsToSend.hitType = "event",
                v("eventCategory", r.eventCategory, !0),
                v("eventAction", r.eventAction || b, !0),
                void 0 !== r.eventLabel && v("eventLabel", r.eventLabel, !0),
                void 0 !== r.value && v("eventValue", Aa(r.value))),
                p("send", r.fieldsToSend));
            if (!Qv && !c.F) {
                Qv = !0;
                var H = function() {
                    c.P()
                }
                  , I = function() {
                    m().loaded || H()
                };
                Zh() ? F(I) : Hb(g, I, H)
            }
        } else
            F(c.P)
    }
      , Sv = function(a, b, c, d) {
        Xh(function() {
            Rv(a, b, d)
        }, [N.g.O, N.g.H])
    }
      , Uv = function(a) {
        function b(e) {
            function f(k, m) {
                for (var n = 0; n < m.length; n++) {
                    var p = m[n];
                    if (e[p]) {
                        g[k] = e[p];
                        break
                    }
                }
            }
            var g = G(e);
            f("id", ["id", "item_id", "promotion_id"]);
            f("name", ["name", "item_name", "promotion_name"]);
            f("brand", ["brand", "item_brand"]);
            f("variant", ["variant", "item_variant"]);
            f("list", ["list_name", "item_list_name"]);
            f("position", ["list_position", "creative_slot", "index"]);
            (function() {
                if (e.category)
                    g.category = e.category;
                else {
                    for (var k = "", m = 0; m < Tv.length; m++)
                        void 0 !== e[Tv[m]] && (k && (k += "/"),
                        k += e[Tv[m]]);
                    k && (g.category = k)
                }
            }
            )();
            f("listPosition", ["list_position"]);
            f("creative", ["creative_name"]);
            f("list", ["list_name"]);
            f("position", ["list_position", "creative_slot"]);
            return g
        }
        for (var c = [], d = 0; a && d < a.length; d++)
            a[d] && Yb(a[d]) && c.push(b(a[d]));
        return c.length ? c : void 0
    }
      , Vv = function(a) {
        return Uh(a)
    }
      , Wv = !1;
    var Qv, Ov = {}, Ev = {}, Xv = {}, zv = Object.freeze((Xv.client_storage = "storage",
    Xv.sample_rate = 1,
    Xv.site_speed_sample_rate = 1,
    Xv.store_gac = 1,
    Xv.use_amp_client_id = 1,
    Xv[N.g.cb] = 1,
    Xv[N.g.oa] = "storeGac",
    Xv[N.g.eb] = 1,
    Xv[N.g.Ia] = 1,
    Xv[N.g.fb] = 1,
    Xv[N.g.qc] = 1,
    Xv[N.g.we] = 1,
    Xv[N.g.Kb] = 1,
    Xv)), Yv = {}, Zv = Object.freeze((Yv._cs = 1,
    Yv._useUp = 1,
    Yv.allowAnchor = 1,
    Yv.allowLinker = 1,
    Yv.alwaysSendReferrer = 1,
    Yv.clientId = 1,
    Yv.cookieDomain = 1,
    Yv.cookieExpires = 1,
    Yv.cookieFlags = 1,
    Yv.cookieName = 1,
    Yv.cookiePath = 1,
    Yv.cookieUpdate = 1,
    Yv.legacyCookieDomain = 1,
    Yv.legacyHistoryImport = 1,
    Yv.name = 1,
    Yv.sampleRate = 1,
    Yv.siteSpeedSampleRate = 1,
    Yv.storage = 1,
    Yv.storeGac = 1,
    Yv.useAmpClientId = 1,
    Yv._cd2l = 1,
    Yv)), $v = Object.freeze({
        anonymize_ip: 1
    }), aw = {}, Av = Object.freeze((aw.campaign = {
        content: "campaignContent",
        id: "campaignId",
        medium: "campaignMedium",
        name: "campaignName",
        source: "campaignSource",
        term: "campaignKeyword"
    },
    aw.app_id = 1,
    aw.app_installer_id = 1,
    aw.app_name = 1,
    aw.app_version = 1,
    aw.description = "exDescription",
    aw.fatal = "exFatal",
    aw.language = 1,
    aw.page_hostname = "hostname",
    aw.transport_type = "transport",
    aw[N.g.la] = "currencyCode",
    aw[N.g.qg] = 1,
    aw[N.g.Da] = "location",
    aw[N.g.yc] = "page",
    aw[N.g.Ka] = "referrer",
    aw[N.g.Qb] = "title",
    aw[N.g.zg] = 1,
    aw[N.g.ra] = 1,
    aw)), bw = {}, cw = Object.freeze((bw.content_id = 1,
    bw.event_action = 1,
    bw.event_category = 1,
    bw.event_label = 1,
    bw.link_attribution = 1,
    bw.name = 1,
    bw[N.g.qa] = 1,
    bw[N.g.pg] = 1,
    bw[N.g.Ea] = 1,
    bw[N.g.ja] = 1,
    bw)), dw = Object.freeze({
        displayfeatures: 1,
        enableLinkId: 1,
        enableRecaptcha: 1,
        eventAction: 1,
        eventCategory: 1,
        eventLabel: 1,
        gaFunctionName: 1,
        gtmEcommerceData: 1,
        gtmTrackerName: 1,
        linker: 1,
        remarketingLists: 1,
        socialAction: 1,
        socialNetwork: 1,
        socialTarget: 1,
        timingVar: 1,
        value: 1
    }), Tv = Object.freeze(["item_category", "item_category2", "item_category3", "item_category4", "item_category5"]), ew = {}, Mv = Object.freeze((ew.levels = 1,
    ew[N.g.Ia] = "duration",
    ew[N.g.qc] = 1,
    ew)), fw = {}, gw = Object.freeze((fw.anonymize_ip = 1,
    fw.fatal = 1,
    fw.send_page_view = 1,
    fw.store_gac = 1,
    fw.use_amp_client_id = 1,
    fw[N.g.oa] = 1,
    fw[N.g.qg] = 1,
    fw)), Nv = function(a, b, c, d) {
        if (void 0 !== c)
            if (gw[b] && (c = Ba(c)),
            "anonymize_ip" !== b || c || (c = void 0),
            1 === a)
                d[Bv(b)] = c;
            else if (h(a))
                d[a] = c;
            else
                for (var e in a)
                    a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e])
    }, Bv = function(a) {
        return a && h(a) ? a.replace(/(_[a-z])/g, function(b) {
            return b[1].toUpperCase()
        }) : a
    }, hw = {}, Pv = Object.freeze((hw.checkout_progress = 1,
    hw.select_content = 1,
    hw.set_checkout_option = 1,
    hw[N.g.fc] = 1,
    hw[N.g.hc] = 1,
    hw[N.g.Hb] = 1,
    hw[N.g.ic] = 1,
    hw[N.g.qb] = 1,
    hw[N.g.Ib] = 1,
    hw[N.g.rb] = 1,
    hw[N.g.za] = 1,
    hw[N.g.jc] = 1,
    hw[N.g.Aa] = 1,
    hw)), iw = {}, jw = Object.freeze((iw.checkout_progress = 1,
    iw.set_checkout_option = 1,
    iw[N.g.Uf] = 1,
    iw[N.g.Vf] = 1,
    iw[N.g.fc] = 1,
    iw[N.g.hc] = 1,
    iw[N.g.Wf] = 1,
    iw[N.g.Hb] = 1,
    iw[N.g.za] = 1,
    iw[N.g.jc] = 1,
    iw[N.g.Xf] = 1,
    iw)), kw = {}, lw = Object.freeze((kw.generate_lead = 1,
    kw.login = 1,
    kw.search = 1,
    kw.select_content = 1,
    kw.share = 1,
    kw.sign_up = 1,
    kw.view_search_results = 1,
    kw[N.g.ic] = 1,
    kw[N.g.qb] = 1,
    kw[N.g.Ib] = 1,
    kw[N.g.rb] = 1,
    kw[N.g.Aa] = 1,
    kw)), mw = function(a) {
        var b = "general";
        jw[a] ? b = "ecommerce" : lw[a] ? b = "engagement" : "exception" === a && (b = "error");
        return b
    }, nw = {}, ow = Object.freeze((nw.view_search_results = 1,
    nw[N.g.qb] = 1,
    nw[N.g.rb] = 1,
    nw[N.g.Aa] = 1,
    nw)), Jv = function(a, b, c) {
        a.hasOwnProperty(b) || (a[b] = c)
    }, pw = function(a) {
        if (ra(a)) {
            for (var b = [], c = 0; c < a.length; c++) {
                var d = a[c];
                if (void 0 != d) {
                    var e = d.id
                      , f = d.variant;
                    void 0 != e && void 0 != f && b.push(String(e) + "." + String(f))
                }
            }
            return 0 < b.length ? b.join("!") : void 0
        }
    }, Fv = function(a, b, c) {
        var d = function(K) {
            return R(c, K)
        }
          , e = {}
          , f = {}
          , g = {}
          , k = {}
          , m = pw(d(N.g.vi));
        !c.F && m && Jv(f, "exp", m);
        g["&gtm"] = ji(!0);
        Q(69) && !c.F && (g._no_slc = !0);
        kf() && (k._cs = Vv);
        var n = d(N.g.uc);
        if (!c.F && Yb(n))
            for (var p in n)
                if (n.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != n[p]) {
                    var q = d(String(n[p]));
                    void 0 !== q && Jv(f, p, q)
                }
        for (var t = am(c), u = 0; u < t.length; ++u) {
            var r = t[u];
            if (c.F) {
                var v = d(r);
                dw.hasOwnProperty(r) ? e[r] = v : Zv.hasOwnProperty(r) ? k[r] = v : g[r] = v
            } else {
                var w = void 0;
                w = r !== N.g.Z ? d(r) : bm(c, r);
                if (cw.hasOwnProperty(r))
                    Nv(cw[r], r, w, e);
                else if ($v.hasOwnProperty(r))
                    Nv($v[r], r, w, g);
                else if (Av.hasOwnProperty(r))
                    Nv(Av[r], r, w, f);
                else if (zv.hasOwnProperty(r))
                    Nv(zv[r], r, w, k);
                else if (/^(dimension|metric|content_group)\d+$/.test(r))
                    Nv(1, r, w, f);
                else if (r === N.g.Z) {
                    if (!Wv) {
                        var y = Oa(w);
                        y && (f["&did"] = y)
                    }
                    var x = void 0
                      , B = void 0;
                    b === N.g.wa ? x = Oa(bm(c, r), ".") : (x = Oa(bm(c, r, 1), "."),
                    B = Oa(bm(c, r, 2), "."));
                    x && (f["&gdid"] = x);
                    B && (f["&edid"] = B)
                } else
                    r === N.g.Ra && 0 > t.indexOf(N.g.qc) && (k.cookieName = w + "_ga")
            }
        }
        !1 !== d(N.g.hi) && !1 !== d(N.g.sb) && au() || (g.allowAdFeatures = !1);
        !1 !== d(N.g.X) && bu() || (g.allowAdPersonalizationSignals = !1);
        !c.F && d(N.g.jb) && (k._useUp = !0);
        if (c.F) {
            k.name = k.name || e.gtmTrackerName;
            var A = g.hitCallback;
            g.hitCallback = function() {
                pa(A) && A();
                c.R()
            }
        } else {
            Jv(k, "cookieDomain", "auto");
            Jv(g, "forceSSL", !0);
            Jv(e, "eventCategory", mw(b));
            ow[b] && Jv(f, "nonInteraction", !0);
            "login" === b || "sign_up" === b || "share" === b ? Jv(e, "eventLabel", d(N.g.pg)) : "search" === b || "view_search_results" === b ? Jv(e, "eventLabel", d(N.g.Ci)) : "select_content" === b && Jv(e, "eventLabel", d(N.g.ki));
            var C = e[N.g.qa] || {}
              , H = C[N.g.Ob];
            H || 0 != H && C[N.g.N] ? k.allowLinker = !0 : !1 === H && Jv(k, "useAmpClientId", !1);
            f.hitCallback = c.R;
            k.name = a
        }
        kf() && (g["&gcs"] = Vh(),
        Uh(N.g.O) || (k.storage = "none"),
        Uh(N.g.H) || (g.allowAdFeatures = !1,
        k.storeGac = !1));
        var I = d(N.g.ma) || d(N.g.ub)
          , E = d(N.g.Ed);
        I && (c.F || (k[N.g.ub] = I),
        k._cd2l = !0);
        E && !c.F && (k[N.g.Ed] = E);
        e.fieldsToSend = f;
        e.fieldsToSet = g;
        e.createOnlyFields = k;
        return e
    }, Kv = function(a) {
        var b = a.gtmEcommerceData;
        if (!b)
            return null;
        var c = {};
        b.currencyCode && (c.ef = b.currencyCode);
        if (b.impressions) {
            c.action = "impressions";
            var d = b.impressions;
            c.th = "impressions" === b.translateIfKeyEquals ? Uv(d) : d
        }
        if (b.promoView) {
            c.action = "promo_view";
            var e = b.promoView.promotions;
            c.Wc = "promoView" === b.translateIfKeyEquals ? Uv(e) : e
        }
        if (b.promoClick) {
            c.action = "promo_click";
            var f = b.promoClick.promotions;
            c.Wc = "promoClick" === b.translateIfKeyEquals ? Uv(f) : f;
            c.Na = b.promoClick.actionField;
            return c
        }
        for (var g in b)
            if (b.hasOwnProperty(g) && "translateIfKeyEquals" !== g && "impressions" !== g && "promoView" !== g && "promoClick" !== g && "currencyCode" !== g) {
                c.action = g;
                var k = b[g].products;
                c.Bb = "products" === b.translateIfKeyEquals ? Uv(k) : k;
                c.Na = b[g].actionField;
                break
            }
        return Object.keys(c).length ? c : null
    }, Lv = function(a, b) {
        function c(r) {
            return {
                id: d(N.g.La),
                affiliation: d(N.g.ri),
                revenue: d(N.g.ja),
                tax: d(N.g.cg),
                shipping: d(N.g.yd),
                coupon: d(N.g.si),
                list: d(N.g.ze) || d(N.g.ye) || r
            }
        }
        for (var d = function(r) {
            return R(b, r)
        }, e = d(N.g.ba), f, g = 0; e && g < e.length && !(f = e[g][N.g.ze] || e[g][N.g.ye]); g++)
            ;
        var k = d(N.g.uc);
        if (Yb(k))
            for (var m = 0; e && m < e.length; ++m) {
                var n = e[m], p;
                for (p in k)
                    k.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != k[p] && Jv(n, p, n[k[p]])
            }
        var q = null
          , t = d(N.g.ui);
        if (a === N.g.za || a === N.g.jc)
            q = {
                action: a,
                Na: c(),
                Bb: Uv(e)
            };
        else if (a === N.g.fc)
            q = {
                action: "add",
                Na: c(),
                Bb: Uv(e)
            };
        else if (a === N.g.hc)
            q = {
                action: "remove",
                Na: c(),
                Bb: Uv(e)
            };
        else if (a === N.g.Aa)
            q = {
                action: "detail",
                Na: c(f),
                Bb: Uv(e)
            };
        else if (a === N.g.qb)
            q = {
                action: "impressions",
                th: Uv(e)
            };
        else if (a === N.g.rb)
            q = {
                action: "promo_view",
                Wc: Uv(t) || Uv(e)
            };
        else if ("select_content" === a && t && 0 < t.length || a === N.g.Ib)
            q = {
                action: "promo_click",
                Wc: Uv(t) || Uv(e)
            };
        else if ("select_content" === a || a === N.g.ic)
            q = {
                action: "click",
                Na: {
                    list: d(N.g.ze) || d(N.g.ye) || f
                },
                Bb: Uv(e)
            };
        else if (a === N.g.Hb || "checkout_progress" === a) {
            var u = {
                step: a === N.g.Hb ? 1 : d(N.g.ag),
                option: d(N.g.Zf)
            };
            q = {
                action: "checkout",
                Bb: Uv(e),
                Na: G(c(), u)
            }
        } else
            "set_checkout_option" === a && (q = {
                action: "checkout_option",
                Na: {
                    step: d(N.g.ag),
                    option: d(N.g.Zf)
                }
            });
        q && (q.ef = d(N.g.la));
        return q
    }, qw = {}, Gv = function(a, b) {
        var c = qw[a];
        qw[a] = G(b);
        if (!c)
            return !1;
        for (var d in b)
            if (b.hasOwnProperty(d) && b[d] !== c[d])
                return !0;
        for (var e in c)
            if (c.hasOwnProperty(e) && c[e] !== b[e])
                return !0;
        return !1
    };
    var rw = Vu;
    var tw = encodeURI
      , X = encodeURIComponent
      , uw = function(a, b, c) {
        Kb(a, b, c)
    }
      , vw = function(a, b) {
        if (!a)
            return !1;
        var c = wf(yf(a), "host");
        if (!c)
            return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var f = c.length - e.length;
                0 < f && "." != e.charAt(0) && (f--,
                e = "." + e);
                if (0 <= f && c.indexOf(e, f) == f)
                    return !0
            }
        }
        return !1
    }
      , ww = function(a, b, c) {
        for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
            a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c],
            e = !0);
        return e ? d : null
    };
    var Y = {
        o: {}
    };
    Y.o.e = ["google"],
    function() {
        (function(a) {
            Y.__e = a;
            Y.__e.s = "e";
            Y.__e.isVendorTemplate = !0;
            Y.__e.priorityOverride = 0;
            Y.__e.isInfrastructure = !1
        }
        )(function(a) {
            return String(a.vtp_gtmCachedValues.event)
        })
    }();
    Y.o.v = ["google"],
    function() {
        (function(a) {
            Y.__v = a;
            Y.__v.s = "v";
            Y.__v.isVendorTemplate = !0;
            Y.__v.priorityOverride = 0;
            Y.__v.isInfrastructure = !1
        }
        )(function(a) {
            var b = a.vtp_name;
            if (!b || !b.replace)
                return !1;
            var c = ys(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1)
              , d = void 0 !== c ? c : a.vtp_defaultValue;
            Gs(d, "v", a.vtp_gtmEventId);
            return d
        })
    }();

    Y.o.rep = ["google"],
    function() {
        (function(a) {
            Y.__rep = a;
            Y.__rep.s = "rep";
            Y.__rep.isVendorTemplate = !0;
            Y.__rep.priorityOverride = 0;
            Y.__rep.isInfrastructure = !1
        }
        )(function(a) {
            var b = ol(a.vtp_containerId), c;
            switch (b.prefix) {
            case "AW":
                c = av;
                break;
            case "DC":
                c = kv;
                break;
            case "GF":
                c = qv;
                break;
            case "HA":
                c = vv;
                break;
            case "UA":
                c = Sv;
                break;
            case "MC":
                c = rw(b, a.vtp_gtmEventId);
                break;
            default:
                F(a.vtp_gtmOnFailure);
                return
            }
            c ? (F(a.vtp_gtmOnSuccess),
            Jq.register(a.vtp_containerId, c),
            a.vtp_remoteConfig && Sq(a.vtp_containerId, a.vtp_remoteConfig || {})) : F(a.vtp_gtmOnFailure)
        })
    }();
    Y.o.cid = ["google"],
    function() {
        (function(a) {
            Y.__cid = a;
            Y.__cid.s = "cid";
            Y.__cid.isVendorTemplate = !0;
            Y.__cid.priorityOverride = 0;
            Y.__cid.isInfrastructure = !1
        }
        )(function() {
            return S.C
        })
    }();

    Y.o.get = ["google"],
    function() {
        (function(a) {
            Y.__get = a;
            Y.__get.s = "get";
            Y.__get.isVendorTemplate = !0;
            Y.__get.priorityOverride = 0;
            Y.__get.isInfrastructure = !1
        }
        )(function(a) {
            var b = a.vtp_settings
              , c = b.eventParameters || {}
              , d = String(a.vtp_eventName)
              , e = {};
            e.eventId = a.vtp_gtmEventId;
            e.priorityId = a.vtp_gtmPriorityId;
            a.vtp_deferrable && (e.deferrable = !0);
            var f = jq(String(b.streamId), d, c);
            mq(f, e.eventId, e);
            a.vtp_gtmOnSuccess()
        })
    }();

    var Ox = {};
    Ox.dataLayer = Le;
    Ox.callback = function(a) {
        Be.hasOwnProperty(a) && pa(Be[a]) && Be[a]();
        delete Be[a]
    }
    ;
    Ox.bootstrap = 0;
    Ox._spx = !1;
    function Px() {
        ke[S.C] = ke[S.C] || Ox;
        S.Pa && (ke["ctid_" + S.Pa] = Ox);
        ei();
        gi() || l(hi(), function(a, b) {
            Jo(a, b.transportUrl, b.context);
            J(92)
        });
        Ia(Ce, Y.o);
        Gc = Pc
    }
    (function(a) {
        function b() {
            m = D.documentElement.getAttribute("data-tag-assistant-present");
            Rr(m) && (k = g.Ei)
        }
        if (!z["__TAGGY_INSTALLED"]) {
            var c = !1;
            if (D.referrer) {
                var d = yf(D.referrer);
                c = "cct.google" === vf(d, "host")
            }
            if (!c) {
                var e = If("googTaggyReferrer");
                c = e.length && e[0].length
            }
            c && (z["__TAGGY_INSTALLED"] = !0,
            Hb("https://cct.google/taggy/agent.js"))
        }
        if (we)
            a();
        else {
            var f = function(r) {
                var v = "GTM"
                  , w = "GTM";
                qe ? (v = "OGT",
                w = "GTAG") : we && (w = v = "OPT");
                var y = z["google.tagmanager.debugui2.queue"];
                y || (y = [],
                z["google.tagmanager.debugui2.queue"] = y,
                Hb("https://" + je.jd + "/debug/bootstrap?id=" + S.C + "&src=" + w + "&cond=" + r + "&gtm=" + ji()));
                var x = {
                    messageType: "CONTAINER_STARTING",
                    data: {
                        scriptSource: Bb,
                        containerProduct: v,
                        debug: !1,
                        id: S.C,
                        isGte: pe
                    }
                };
                x.data.resume = function() {
                    a()
                }
                ;
                je.Vh && (x.data.initialPublish = !0);
                y.push(x)
            }
              , g = {
                Hk: 1,
                Fi: 2,
                Ri: 3,
                Xh: 4,
                Ei: 5
            }
              , k = void 0
              , m = void 0
              , n = wf(z.location, "query", !1, void 0, "gtm_debug");
            Rr(n) && (k = g.Fi);
            if (!k && D.referrer) {
                var p = yf(D.referrer);
                "tagassistant.google.com" === vf(p, "host") && (k = g.Ri)
            }
            if (!k) {
                var q = If("__TAG_ASSISTANT");
                q.length && q[0].length && (k = g.Xh)
            }
            k || b();
            if (!k && Sr(m)) {
                var t = function() {
                    if (u)
                        return !0;
                    u = !0;
                    b();
                    k && Bb ? f(k) : a()
                }
                  , u = !1;
                Lb(D, "TADebugSignal", function() {
                    t()
                }, !1);
                z.setTimeout(function() {
                    t()
                }, 200)
            } else
                k && Bb ? f(k) : a()
        }
    }
    )(function() {
        var a = !1;
        a && fo("INIT");
        if (Q(70)) {
            var b = Zn(yn.D.pe, S.C);
            $n(b)
        }
        Se().m();
        Ui();
        if (S.Pa ? ke["ctid_" + S.Pa] : ke[S.C]) {
            var c = ke.zones;
            c && c.unregisterChild(ai());
        } else {
            for (var d = data.resource || {}, e = d.macros || [], f = 0; f < e.length; f++)
                wc.push(e[f]);
            for (var g = d.tags || [], k = 0; k < g.length; k++)
                zc.push(g[k]);
            for (var m = d.predicates || [], n = 0; n < m.length; n++)
                yc.push(m[n]);
            for (var p = d.rules || [], q = 0; q < p.length; q++) {
                for (var t = p[q], u = {}, r = 0; r < t.length; r++)
                    u[t[r][0]] = Array.prototype.slice.call(t[r], 1);
                xc.push(u)
            }
            Bc = Y;
            Cc = et;
            Px();
            Qr();
            Yo = !1;
            Zo = 0;
            if ("interactive" == D.readyState && !D.createEventObject || "complete" == D.readyState)
                ap();
            else {
                Lb(D, "DOMContentLoaded", ap);
                Lb(D, "readystatechange", ap);
                if (D.createEventObject && D.documentElement.doScroll) {
                    var v = !0;
                    try {
                        v = !z.frameElement
                    } catch (H) {}
                    v && bp()
                }
                Lb(z, "load", ap)
            }
            fr = !1;
            "complete" === D.readyState ? hr() : Lb(z, "load", hr);
            fj && z.setInterval(kj, 864E5);
            Ya("HEALTH", 1);
            Ae = Fa();
            Ox.bootstrap = Ae;
            if (a) {
                var B = go("INIT");
            }
            if (Q(70)) {
                var A = Zn(yn.D.Nf, S.C);
                if ($n(A)) {
                    var C = Zn(yn.D.pe, S.C);
                    ao(A, C)
                }
            }
        }
    });

}
)()
