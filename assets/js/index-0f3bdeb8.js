import {_ as D, G as le, g as M, aX as te, dx as ce, dy as ye, o as ee, u as we, S as re, a as ke, dz as Se, dA as $e, dB as Ce, dC as Le, b6 as Ae, bm as Ie, b7 as Te, b8 as De, K as ue, i as ae, h as Be, dD as oe, dE as Ee, r as de, j as Pe} from "./page-activity-6419d9db.js";
import {_ as F, P as ve, Q, a2 as T, o as p, j as k, a4 as Z, a5 as xe, l as s, a6 as h, a1 as y, a0 as v, a9 as _e, H as r, A as H, N as me, ap as pe, r as f, a3 as fe, aa as I, af as Ne, ag as Re, q as Ve, Z as Fe, J as V, G as J, ae as A, a7 as P, a8 as z, K as Ge, aD as Ue, aC as ne, b1 as je, X as He, ac as K, $ as Oe, B as Me, b2 as ze, ak as O, k as Ke, a_ as Ye, b3 as Xe, b4 as qe, b5 as We, b6 as Je, b7 as Qe, b8 as Ze, b9 as et, ba as tt, bb as st, bc as at, bd as ot, be as nt, bf as it, bg as lt, bh as ct, bi as rt, bj as ut, bk as dt, bl as vt, bm as _t, bn as mt, bo as pt, bp as ft, bq as gt, br as ht, bs as bt, bt as yt, bu as wt, bv as kt, bw as St, bx as $t, by as Ct, bz as Lt, bA as At, bB as It, bC as Tt, bD as Dt, bE as Bt, bF as Et, bG as Pt, bH as xt, bI as Nt} from "./modules-cd512936.js";
import {u as ge} from "./page-login-114e3a11.js";
import "./native/index-512c8e68.js";
import "./en-ebab563c.js";
import "./rus-3fc3885c.js";
import "./vi-6543096b.js";
import "./id-4306bc3f.js";
import "./hd-a8829e4a.js";
import "./tha-e196da46.js";
import "./md-274bbf83.js";
import "./bra-81f1b3ff.js";
import "./my-bc15ec80.js";
import "./bdt-451aa392.js";
import "./zh-46313556.js";
import "./pak-2a7c5d59.js";
import "./ar-1e71bea5.js";
import "./page-home-f9627abf.js";
window.getBuildInfo = function() {
    return {
        buildTime: "10/17/2024, 5:19:05 PM",
        branch: "origin/masterBranch/gamesass-2.24 commitId:a6695421420442101069f45a86b32452d0d38495"
    }
}
;
(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        n(o);
    new MutationObserver(o => {
        for (const i of o)
            if (i.type === "childList")
                for (const u of i.addedNodes)
                    u.tagName === "LINK" && u.rel === "modulepreload" && n(u)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function a(o) {
        const i = {};
        return o.integrity && (i.integrity = o.integrity),
        o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
        i
    }
    function n(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const i = a(o);
        fetch(o.href, i)
    }
}
)();
const Rt = {
    class: "tabbar__container"
}
  , Vt = ["onClick"]
  , Ft = {
    key: 0,
    class: "promotionBg"
}
  , Gt = F({
    __name: "index",
    setup(t) {
        const e = ve()
          , a = Q();
        async function n(i) {
            await e.push({
                name: i
            })
        }
        const o = [{
            name: "home"
        }, {
            name: "activity"
        }, {
            name: "promotion"
        }, {
            name: "wallet"
        }, {
            name: "main"
        }];
        return (i, u) => {
            const l = T("svg-icon");
            return p(),
            k("div", Rt, [(p(),
            k(Z, null, xe(o, (d, _) => s("div", {
                class: _e(["tabbar__container-item", {
                    active: d.name === r(a).name
                }]),
                key: d + "" + _,
                onClick: c => n(d.name)
            }, [h(l, {
                name: d.name
            }, null, 8, ["name"]), d.name === "promotion" ? (p(),
            k("div", Ft)) : y("v-if", !0), s("span", null, v(i.$t(d.name)), 1)], 10, Vt)), 64))])
        }
    }
});
const Ut = D(Gt, [["__scopeId", "data-v-6ab3f23e"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/TabBar/index.vue"]]);
function jt() {
    const t = le()
      , e = () => {
        document.visibilityState === "visible" ? t.setvisibility() : t.setvisibility(0)
    }
    ;
    H( () => {
        document.addEventListener("visibilitychange", e)
    }
    ),
    me( () => {
        document.removeEventListener("visibilitychange", e)
    }
    )
}
const Ht = F({
    __name: "Customer",
    setup(t) {
        pe(m => ({
            "f6a705e1-currentFontFamily": G.value
        }));
        const e = f(!1)
          , a = f({
            x: 0,
            y: 0
        })
          , n = f(0)
          , o = f(0)
          , i = f(0)
          , u = f(0)
          , l = f(0)
          , d = f(0)
          , _ = f();
        let c, B, S, C;
        const {getSelfCustomerServiceLink: x} = ge({
            ServerType: 2
        });
        function N() {
            j(c, B, S, C) || x()
        }
        H( () => {
            _.value = document.getElementById("customerId")
        }
        );
        function w(m) {
            e.value = !0;
            var g;
            m.touches ? g = m.touches[0] : g = m,
            a.value.x = g.clientX,
            a.value.y = g.clientY,
            n.value = _.value.offsetLeft,
            o.value = _.value.offsetTop,
            c = m.clientX,
            B = m.clientY
        }
        function L(m) {
            if (e.value) {
                var g, E = document.getElementById("customerId"), U = E.clientWidth, Y = E.clientHeight, X = document.documentElement.clientHeight, b = document.documentElement.clientWidth;
                m.touches ? g = m.touches[0] : g = m,
                i.value = g.clientX - a.value.x,
                u.value = g.clientY - a.value.y,
                l.value = n.value + i.value,
                d.value = o.value + u.value,
                l.value <= 0 && (l.value = 0),
                d.value <= 0 && (d.value = 0),
                l.value >= b - U && (l.value = b - U),
                d.value >= X - Y && (d.value = X - Y),
                _.value.style.left = l.value + "px",
                _.value.style.top = d.value + "px",
                document.addEventListener("touchmove", function() {
                    m.preventDefault()
                }, !1)
            }
            m.stopPropagation(),
            m.preventDefault()
        }
        function $(m) {
            e.value = !1,
            S = m.clientX,
            C = m.clientY
        }
        function j(m, g, E, U) {
            return !(Math.sqrt((m - E) * (m - E) + (g - U) * (g - U)) <= 1)
        }
        const G = f("bahnschrift");
        return (m, g) => {
            const E = fe("lazy");
            return p(),
            k("div", {
                class: "customer",
                onClick: N,
                onMousedown: w,
                onTouchstart: w,
                onMousemove: L,
                onTouchmove: L,
                onMouseup: $,
                id: "customerId"
            }, [I(s("img", null, null, 512), [[E, r(M)("home", "icon_sevice")]])], 32)
        }
    }
});
const Ot = D(Ht, [["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/common/Customer.vue"]])
  , Mt = "/assets/png/logo-f65e9962.png";
const zt = {}
  , he = t => (Ne("data-v-5eb72be7"),
t = t(),
Re(),
t)
  , Kt = {
    class: "start-page"
}
  , Yt = he( () => s("div", {
    class: "dice"
}, null, -1))
  , Xt = he( () => s("img", {
    class: "logo",
    src: Mt
}, null, -1));
function qt(t, e) {
    return p(),
    k("div", Kt, [s("div", null, [Yt, s("p", null, v(t.$t("fairAndSafe")), 1), Xt])])
}
const Wt = D(zt, [["render", qt], ["__scopeId", "data-v-5eb72be7"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/entrance/tc/StartPage.vue"]])
  , Jt = {
    class: "header"
}
  , Qt = {
    class: "title"
}
  , Zt = {
    class: "tip"
}
  , es = {
    class: "container"
}
  , ts = {
    class: "footer"
}
  , ss = F({
    __name: "dialog",
    setup(t) {
        const e = ve()
          , a = Q()
          , n = f(!1)
          , {closeFirstSave: o} = te()
          , {ActiveSotre: i, getFirstRechargeList: u} = ce()
          , l = Ve(new Date).format("YYYY-MM-DD")
          , d = Fe("firstSave", null)
          , _ = V( () => d.value == l)
          , c = () => {
            _.value ? (d.value = "",
            localStorage.removeItem("firstSave")) : d.value = l
        }
          , B = () => {
            n.value = !1,
            o()
        }
          , S = ["activity", "home", "main", "wallet", "promotion"];
        J( () => a.name, w => {
            S.includes(a.name) && C()
        }
        );
        const C = () => {
            d.value != l && u().then(w => {
                if (!w.length) {
                    n.value = !1,
                    o();
                    return
                }
                const L = w.find($ => $.isFinshed);
                L && (i.value.isShowFirstSaveDialog = !1),
                L || (n.value = !0)
            }
            )
        }
          , x = () => {
            n.value = !1,
            o(!0),
            e.push({
                name: "FirstRecharge"
            })
        }
          , N = () => {
            n.value = !1,
            o(!0),
            e.push({
                name: "Recharge"
            })
        }
        ;
        return H( () => {
            S.includes(a.name) && C()
        }
        ),
        (w, L) => {
            const $ = T("svg-icon")
              , j = T("van-dialog");
            return p(),
            A(j, {
                show: n.value,
                "onUpdate:show": L[0] || (L[0] = G => n.value = G),
                className: "firstSaveDialog"
            }, {
                title: P( () => [s("div", Jt, [s("div", Qt, v(w.$t("firstDialogH")), 1), s("div", Zt, v(w.$t("firstDialogTip")), 1)])]),
                footer: P( () => [s("div", ts, [s("div", {
                    class: _e(["active", {
                        a: _.value
                    }]),
                    onClick: c
                }, [h($, {
                    name: "active"
                }), z(v(w.$t("noTipToday")), 1)], 2), s("div", {
                    class: "btn",
                    onClick: x
                }, v(w.$t("activity")), 1)])]),
                default: P( () => [s("div", es, [h(ye, {
                    list: r(i).FirstRechargeList,
                    onGorecharge: N
                }, null, 8, ["list"])]), s("div", {
                    class: "close",
                    onClick: B
                })]),
                _: 1
            }, 8, ["show"])
        }
    }
});
const as = D(ss, [["__scopeId", "data-v-9cd12fb2"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Activity/FirstRecharge/dialog.vue"]])
  , os = {
    class: "dialog-window"
}
  , ns = {
    class: "dialog-wrapper"
}
  , is = {
    class: "dialog-title"
}
  , ls = {
    class: "dialog-content"
}
  , cs = {
    class: "dialog-window"
}
  , rs = {
    class: "dialog-wrapper"
}
  , us = {
    class: "dialog-title"
}
  , ds = {
    class: "dialog-tips"
}
  , vs = {
    class: "dialog-content"
}
  , _s = {
    class: "dialog-tips",
    style: {
        "margin-bottom": "0"
    }
}
  , ms = {
    class: "dialog-window"
}
  , ps = {
    class: "dialog-wrapper"
}
  , fs = {
    class: "dialog-tips",
    style: {
        "margin-top": "10px"
    }
}
  , gs = {
    class: "dialog-title",
    style: {
        "margin-top": "0"
    }
}
  , hs = {
    class: "dialog-tips"
}
  , bs = {
    class: "dialog-content"
}
  , ys = F({
    __name: "AllPageDialog",
    setup(t) {
        Q();
        const {ActiveSotre: e} = ce()
          , {store: a, closeInvite: n, showFirstSave: o, onReturnAwards: i} = te();
        return (u, l) => {
            const d = T("van-dialog")
              , _ = fe("lazy");
            return p(),
            k(Z, null, [r(o) ? (p(),
            A(as, {
                key: 0
            })) : y("v-if", !0), h(d, {
                show: r(e).showReceiveDialog,
                "onUpdate:show": l[1] || (l[1] = c => r(e).showReceiveDialog = c),
                "show-confirm-button": !1,
                className: "noOverHidden"
            }, {
                default: P( () => [s("div", os, [s("div", ns, [I(s("img", null, null, 512), [[_, r(M)("public", "succeed")]]), s("div", is, v(u.$t("awardsReceived")), 1), s("div", ls, [I(s("img", null, null, 512), [[_, r(M)("activity/DailyTask", "amountIcon")]]), s("span", null, v(r(ee)(r(e).receiveAmount)), 1)]), s("div", {
                    class: "dialog-btn",
                    onClick: l[0] || (l[0] = c => r(e).showReceiveDialog = !1)
                }, v(u.$t("confirm")), 1)])])]),
                _: 1
            }, 8, ["show"]), h(d, {
                show: r(a).invite,
                "onUpdate:show": l[3] || (l[3] = c => r(a).invite = c),
                "show-confirm-button": !1,
                className: "noOverHidden"
            }, {
                default: P( () => [s("div", cs, [s("div", rs, [I(s("img", null, null, 512), [[_, r(M)("public", "succeed")]]), s("div", us, v(u.$t("inviteTips")), 1), s("p", ds, v(u.$t("inviteAmount")), 1), s("div", vs, [s("span", _s, v(u.$t("commissionAmount")), 1), s("span", null, v(r(ee)(r(a).rebateAmount)), 1)]), s("div", {
                    class: "dialog-btn",
                    onClick: l[2] || (l[2] = c => r(n)())
                }, v(u.$t("receive")), 1)])])]),
                _: 1
            }, 8, ["show"]), h(d, {
                show: r(a).oldUser,
                "onUpdate:show": l[5] || (l[5] = c => r(a).oldUser = c),
                "show-confirm-button": !1,
                "close-on-click-overlay": !0,
                className: "noOverHidden"
            }, {
                default: P( () => [s("div", ms, [s("div", ps, [I(s("img", null, null, 512), [[_, r(M)("public", "succeed")]]), s("p", fs, v(u.$t("oldPromptTip")), 1), s("div", gs, v(u.$t("oldPrompt")), 1), s("p", hs, v(u.$t("oldPromptGift")), 1), s("div", bs, [s("span", null, v(r(ee)(r(a).returnAwards)), 1)]), s("div", {
                    class: "dialog-btn",
                    onClick: l[4] || (l[4] = c => r(i)())
                }, v(u.$t("receive")), 1)])])]),
                _: 1
            }, 8, ["show"])], 64)
        }
    }
});
const ws = D(ys, [["__scopeId", "data-v-3d4fafbb"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/common/AllPageDialog.vue"]])
  , ks = F({
    __name: "App",
    setup(t) {
        pe(b => ({
            "f13b4d11-currentFontFamily": G.value
        }));
        const {openAll: e} = te()
          , a = Ie()
          , n = f(!1)
          , o = f(!1)
          , i = Q()
          , u = we()
          , l = re()
          , {locale: d} = Ge()
          , _ = le()
          , c = f(!1)
          , B = V( () => i.meta.tabBar)
          , S = "orangeHome"
          , C = V( () => ["electronic", "blackGoldHome"].includes(S) ? !1 : !["/wallet/Withdraw/C2cDetail", "/wallet/RechargeHistory/RechargeUpiDetail", "/wallet/Withdraw/Upi", "/wallet/Withdraw/AddUpi", "/wallet/Withdraw/c2cCancelWithdrawal/index.vue", "/wallet/otherPay?type=C2C", "/home/game"].includes(i.path))
          , x = f(0)
          , N = f(Math.floor(Math.random() * 1e4))
          , w = V( () => i.name + N.value)
          , L = () => {
            a.on("changeKeepAliveKey", () => {
                N.value = Math.floor(Math.random() * 1e4)
            }
            )
        }
        ;
        sessionStorage.getItem("isload") ? n.value = !1 : (o.value = !0,
        sessionStorage.setItem("isload", o.value.toString()),
        n.value = !0),
        l.getHomeSetting(),
        J( () => l.getAreacode, b => {
            b && u.setNumberType(b.substring(1))
        }
        ),
        J( () => l.getDL, b => {
            d.value = b,
            _.updateLanguage(b),
            Te(b),
            De(ue.global.t)
        }
        ),
        setTimeout( () => {
            n.value = !1
        }
        , 2e3);
        const $ = f(!1)
          , j = ke();
        j.$subscribe( (b, R) => {
            $.value = R.isLoading,
            j.setLoading($.value)
        }
        );
        const G = f("bahnschrift");
        let m = Se()
          , g = l.getLanguage
          , E = $e(m, g);
        const U = async b => {
            const R = [{
                title: "vi",
                fontStyle: "bahnschrift"
            }, {
                title: "else",
                fontStyle: "'Roboto', 'Inter', sans-serif"
            }]
              , q = R.findIndex(W => W.title == E);
            q >= 0 ? G.value = R[q].fontStyle : G.value = R[R.length - 1].fontStyle
        }
          , Y = () => {
            a.on("keyChange", () => {
                x.value++
            }
            ),
            a.on("changeIsGame", () => {
                c.value = !c.value,
                $.value = !$.value
            }
            )
        }
          , X = () => {
            a.off("keyChange"),
            a.off("changeKeepAliveKey"),
            a.off("changeIsGame")
        }
        ;
        return u.setNumberType(l.getAreacode.substring(1)),
        U(),
        H( () => {
            Ce() && Le(),
            e(),
            X(),
            Y(),
            L(),
            localStorage.getItem("language") && Ae(localStorage.getItem("language"))
        }
        ),
        jt(),
        (b, R) => {
            const q = T("LoadingView");
            return p(),
            k(Z, null, [h(q, {
                loading: $.value,
                type: "loading",
                isGame: c.value
            }, {
                default: P( () => [(p(),
                A(r(je), {
                    key: x.value
                }, {
                    default: P( ({Component: W}) => [(p(),
                    A(Ue, {
                        max: 1
                    }, [r(i).meta.keepAlive ? (p(),
                    A(ne(W), {
                        key: w.value
                    })) : y("v-if", !0)], 1024)), r(i).meta.keepAlive ? y("v-if", !0) : (p(),
                    A(ne(W), {
                        key: 0
                    }))]),
                    _: 1
                })), y("online custom service"), C.value ? (p(),
                A(Ot, {
                    key: 0
                })) : y("v-if", !0), B.value ? (p(),
                A(Ut, {
                    key: 1
                })) : y("v-if", !0)]),
                _: 1
            }, 8, ["loading", "isGame"]), n.value ? (p(),
            A(Wt, {
                key: 0
            })) : y("v-if", !0), h(ws)], 64)
        }
    }
});
const Ss = D(ks, [["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/entrance/tc/App.vue"]]);
const $s = {
    mounted(t, e) {
        if (typeof e.value[0] != "function" || typeof e.value[1] != "number")
            throw new Error("v-debounce: value must be an array that includes a function and a number");
        let a = null;
        const n = e.value[0]
          , o = e.value[1];
        t.__handleClick__ = function() {
            a && clearTimeout(a),
            a = setTimeout( () => {
                n()
            }
            , o || 500)
        }
        ,
        t.addEventListener("click", t.__handleClick__)
    },
    beforeUnmount(t) {
        t.removeEventListener("click", t.__handleClick__)
    }
}
  , Cs = {
    mounted(t, e) {
        if (typeof e.value[0] != "function" || typeof e.value[1] != "number")
            throw new Error("v-throttle: value must be an array that includes a function and a number");
        let a = null;
        const n = e.value[0]
          , o = e.value[1];
        t.__handleClick__ = function() {
            a && clearTimeout(a),
            t.disabled || (t.disabled = !0,
            n(),
            a = setTimeout( () => {
                t.disabled = !1
            }
            , o || 500))
        }
        ,
        t.addEventListener("click", t.__handleClick__)
    },
    beforeUnmount(t) {
        t.removeEventListener("click", t.__handleClick__)
    }
}
  , Ls = {
    mounted(t, e) {
        t.addEventListener("input", a => {
            const o = t.value.replace(/\D+/g, "");
            t.value = o,
            e.value = o
        }
        )
    }
}
  , As = t => ({
    beforeMount: (e, a) => {
        e.classList.add("ar-lazyload");
        const {value: n} = a;
        e.dataset.origin = n,
        t.observe(e)
    }
    ,
    updated(e, a) {
        e.dataset.origin = a.value,
        t.observe(e)
    },
    unmounted(e, a) {
        t.unobserve(e)
    },
    mounted(e, a) {
        t.observe(e)
    }
})
  , Is = {
    mounted(t, e) {
        let a = 0;
        const n = e.value && e.value.wait ? e.value.wait : 3e3
          , o = i => {
            const u = Date.now();
            u - a >= n && (a = u,
            e.value && e.value.handler && e.value.handler(i))
        }
        ;
        t.addEventListener("click", o),
        t._throttleClickCleanup = () => {
            t.removeEventListener("click", o)
        }
    },
    unmounted(t) {
        t._throttleClickCleanup && t._throttleClickCleanup(),
        delete t._throttleClickCleanup
    }
}
  , Ts = {
    mounted(t, e) {
        const {value: a} = e;
        let n = He("permission", null);
        n.value === null || !a || (n && (n = JSON.parse(n.value)),
        n && n[a] === !1 && (t.style.display = "none"))
    }
}
  , ie = {
    debounce: $s,
    throttle: Cs,
    onlyNum: Ls,
    throttleClick: Is,
    haspermission: Ts
}
  , Ds = {
    install: function(t) {
        Object.keys(ie).forEach(a => {
            t.directive(a, ie[a])
        }
        );
        const e = new IntersectionObserver(a => {
            a.forEach(n => {
                if (n.isIntersecting) {
                    const o = n.target;
                    o.src = o.dataset.origin || ae("images", "avatar"),
                    o.onerror = () => {
                        e.unobserve(o);
                        let i = o.dataset.img || ae("images", "avatar");
                        if (!i || i != null && i.includes("undefined")) {
                            o.onerror = null;
                            return
                        }
                        o.src = i,
                        o.style.objectFit = "contain"
                    }
                    ,
                    o.classList.remove("ar-lazyload"),
                    e.unobserve(o)
                }
            }
            )
        }
        ,{
            rootMargin: "0px 0px -50px 0px"
        });
        t.directive("lazy", As(e))
    }
}
  , Bs = {
    class: "navbar-fixed"
}
  , Es = {
    class: "navbar__content"
}
  , Ps = {
    class: "navbar__content-center"
}
  , xs = {
    class: "navbar__content-title"
}
  , Ns = F({
    __name: "NavBar",
    props: {
        title: {
            type: String,
            default: ""
        },
        placeholder: {
            type: Boolean,
            default: !0
        },
        leftArrow: {
            type: Boolean,
            default: !1
        },
        backgroundColor: {
            type: String,
            default: "#f7f8ff"
        },
        classN: {
            type: String,
            default: ""
        },
        headLogo: {
            type: Boolean,
            default: !1
        },
        headerUrl: {
            type: String,
            default: ""
        }
    },
    emits: ["click-left", "click-right"],
    setup(t, {emit: e}) {
        const a = f()
          , n = re()
          , o = V( () => n.getHeadLogo)
          , i = () => {
            e("click-left")
        }
          , u = () => {
            e("click-right")
        }
        ;
        return H( () => {}
        ),
        (l, d) => {
            const _ = T("van-icon");
            return p(),
            k("div", {
                class: "navbar",
                ref_key: "navbar",
                ref: a
            }, [s("div", Bs, [s("div", Es, [s("div", {
                class: "navbar__content-left",
                onClick: i
            }, [K(l.$slots, "left", {}, () => [t.leftArrow ? (p(),
            A(_, {
                key: 0,
                name: "arrow-left"
            })) : y("v-if", !0)], !0)]), s("div", Ps, [t.headLogo ? (p(),
            k("div", {
                key: 0,
                class: "headLogo",
                style: Oe({
                    backgroundImage: "url(" + (t.headerUrl || o.value) + ")"
                })
            }, null, 4)) : y("v-if", !0), K(l.$slots, "center", {}, () => [s("div", xs, v(t.title), 1)], !0)]), s("div", {
                class: "navbar__content-right",
                onClick: u
            }, [K(l.$slots, "right", {}, void 0, !0)])])])], 512)
        }
    }
});
const Rs = D(Ns, [["__scopeId", "data-v-12a80a3e"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/common/NavBar.vue"]])
  , Vs = {
    class: "ar-loading-view"
}
  , Fs = {
    class: "loading-wrapper"
}
  , Gs = {
    class: "com__box"
}
  , Us = Ke('<div class="loading" data-v-647954c7><div class="shape shape-1" data-v-647954c7></div><div class="shape shape-2" data-v-647954c7></div><div class="shape shape-3" data-v-647954c7></div><div class="shape shape-4" data-v-647954c7></div></div>', 1)
  , js = {
    class: "skeleton-wrapper"
}
  , Hs = {
    class: "iosDialog"
}
  , Os = {
    class: "title"
}
  , Ms = {
    class: "websit_info"
}
  , zs = ["src"]
  , Ks = {
    class: "link"
}
  , Ys = {
    class: "text"
}
  , Xs = {
    class: "text"
}
  , qs = {
    class: "text"
}
  , Ws = ["src"]
  , Js = F({
    __name: "LoadingView",
    props: {
        loading: {
            type: Boolean,
            required: !0
        },
        type: {
            type: String,
            required: !0
        },
        isGame: {
            type: Boolean,
            required: !0
        }
    },
    setup(t) {
        const e = t
          , a = f();
        let n = null;
        const {homeState: o, downloadIcon: i, webSiteUrl: u} = Be()
          , {getSelfCustomerServiceLink: l} = ge({
            ServerType: 2
        })
          , d = window.location.href
          , _ = V( () => location.origin || "");
        return H(async () => {
            if (d.includes("?")) {
                const c = new URLSearchParams(d.split("?")[1]);
                c.size && c.get("goTo") === "worktraking" && l("worktraking")
            }
            await Me(),
            n = ze.loadAnimation({
                container: a.value,
                renderer: "svg",
                loop: !0,
                autoplay: !0,
                path: "/data.json"
            })
        }
        ),
        J( () => e.loading, () => {
            e.type === "loading" && !e.isGame && (e.loading ? n && n.play() : n && n.stop())
        }
        ),
        me( () => {
            n && n.destroy(),
            n = null
        }
        ),
        (c, B) => {
            const S = T("VanSkeleton")
              , C = T("svg-icon")
              , x = T("van-popup");
            return p(),
            k(Z, null, [I(s("div", Vs, [K(c.$slots, "template", {}, () => [I(s("div", Fs, [y(" <VanLoading /> "), I(s("div", {
                ref_key: "element",
                ref: a,
                class: "loading-animat"
            }, null, 512), [[O, !c.isGame]]), I(s("div", Gs, [y(" loading "), Us, y(" 说明：组件名 ")], 512), [[O, c.isGame]]), y(' <div class="animation"></div> ')], 512), [[O, c.type === "loading"]]), I(s("div", js, [h(S, {
                row: 10
            }), h(S, {
                title: "",
                avatar: "",
                row: 5
            }), h(S, {
                title: "",
                row: 5
            })], 512), [[O, c.type === "skeleton"]])], !0)], 512), [[O, c.loading]]), K(c.$slots, "default", {}, void 0, !0), h(x, {
                show: r(o).iosDialog,
                "onUpdate:show": B[0] || (B[0] = N => r(o).iosDialog = N),
                round: "",
                closeable: "",
                position: "bottom",
                style: {
                    height: "40%"
                }
            }, {
                default: P( () => [s("div", Hs, [s("div", Os, v(c.$t("pwaInstall")), 1), s("div", Ms, [s("img", {
                    class: "icon",
                    src: r(i)
                }, null, 8, zs), s("div", Ks, [s("div", null, v(_.value.split("://")[1]), 1), s("div", null, v(_.value), 1)])]), s("div", Ys, [z("1. " + v(c.$t("pwaText1")) + " ", 1), h(C, {
                    name: "share"
                })]), s("div", Xs, [z("2. " + v(c.$t("pwaText2")) + " ", 1), s("span", null, [z(v(c.$t("pwaText3")) + " ", 1), h(C, {
                    name: "add_icon"
                })])]), s("div", qs, [z("3. " + v(c.$t("pwaText4")) + " ", 1), s("img", {
                    class: "icon",
                    src: r(i)
                }, null, 8, Ws)])])]),
                _: 1
            }, 8, ["show"])], 64)
        }
    }
});
const Qs = D(Js, [["__scopeId", "data-v-647954c7"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/common/LoadingView.vue"]]);
const Zs = ["xlink:href"]
  , ea = {
    __name: "svgIcons",
    props: {
        name: {
            type: String,
            required: !0
        },
        color: {
            type: String,
            default: ""
        }
    },
    setup(t) {
        const e = t
          , a = V( () => `#icon-${e.name}`)
          , n = V( () => e.name ? `svg-icon icon-${e.name}` : "svg-icon");
        return (o, i) => (p(),
        k("svg", Ye({
            class: n.value
        }, o.$attrs, {
            style: {
                color: t.color
            }
        }), [s("use", {
            "xlink:href": a.value
        }, null, 8, Zs)], 16))
    }
}
  , ta = D(ea, [["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/common/svgIcons.vue"]])
  , sa = {
    class: "ar-searchbar__selector"
}
  , aa = {
    class: "ar-searchbar__selector-default"
}
  , oa = F({
    __name: "ArSelect",
    props: {
        selectName: {
            type: String,
            default: ""
        }
    },
    emits: ["click-select"],
    setup(t, {emit: e}) {
        const a = () => {
            e("click-select")
        }
        ;
        return (n, o) => {
            const i = T("van-icon");
            return p(),
            k("div", sa, [s("div", {
                onClick: a
            }, [s("span", aa, v(t.selectName), 1), h(i, {
                name: "arrow-down"
            })])])
        }
    }
});
const na = D(oa, [["__scopeId", "data-v-fa757a88"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/common/ArSelect.vue"]])
  , ia = t => {
    t.component("NavBar", Rs),
    t.component("LoadingView", Qs),
    t.component("ArSelect", na),
    t.component("svg-icon", ta),
    t.use(Xe).use(qe).use(We).use(Je).use(Qe).use(Ze).use(et).use(tt).use(st).use(at).use(ot).use(nt).use(it).use(lt).use(ct).use(rt).use(ut).use(dt).use(vt).use(_t).use(mt).use(pt).use(ft).use(gt).use(ht).use(bt).use(yt).use(wt).use(kt).use(St).use($t).use(Ct).use(Lt).use(At).use(It).use(Tt).use(Dt).use(ue).use(Ds).use(Bt).use(Et);
    let e = t.config.globalProperties
      , a = {};
    a.TopHeight = 38,
    Object.keys(oe.refiter).forEach(n => {
        a[n] = oe.refiter[n]
    }
    ),
    e.$u = a
}
;
Ee.tc();
de.addRoute({
    path: "/",
    name: "home",
    component: () => Pe( () => import("./page-home-f9627abf.js").then(t => t.X), ["assets/js/page-home-f9627abf.js", "assets/js/modules-cd512936.js", "assets/css/modules-b642e9bc.css", "assets/js/page-activity-6419d9db.js", "assets/js/native/index-512c8e68.js", "assets/js/en-ebab563c.js", "assets/js/rus-3fc3885c.js", "assets/js/vi-6543096b.js", "assets/js/id-4306bc3f.js", "assets/js/hd-a8829e4a.js", "assets/js/tha-e196da46.js", "assets/js/md-274bbf83.js", "assets/js/bra-81f1b3ff.js", "assets/js/my-bc15ec80.js", "assets/js/bdt-451aa392.js", "assets/js/zh-46313556.js", "assets/js/pak-2a7c5d59.js", "assets/js/ar-1e71bea5.js", "assets/css/page-activity-2987852d.css", "assets/css/page-home-ce85cf1c.css"]),
    meta: {
        title: "home",
        tabBar: !0,
        keepAlive: !1
    }
});
const se = Pt(Ss)
  , be = xt();
ia(se);
be.use(Nt);
se.use(de).use(be);
se.mount("#app");
