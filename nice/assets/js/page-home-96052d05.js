import {_ as F, J as Q, o as n, j as a, H as d, a6 as C, k as t, a0 as e, a1 as $, a4 as S, a5 as G, $ as le, a9 as B, aj as ki, A as Lt, a3 as Dt, aa as dt, K as gt, P as ct, a2 as W, a8 as E, r as h, ae as J, a7 as P, af as Nt, ag as zt, ar as Lo, as as pn, D as Si, ac as ke, G as At, B as Jt, Y as No, N as Ve, ak as Yt, C as fe, at as zo, au as Io, av as xo, am as cn, I as Et, aw as na, l as fi, T as So, ax as aa, Q as Ze, ay as Ro, q as _e, az as Bo, aA as Go, ab as oa, F as ue, n as Pt, O as gn, aq as he, aB as ne, aC as He, aD as Ue, ap as Ao, aE as Mo, aF as Po, aG as sa, aH as Do, aI as Oo, aJ as Eo, aK as qo, aL as jo, X as Ho} from "./modules-9638c0ec.js";
import {h as pe, S as Pe, i as Ft, j as hi, _ as V, g as Xt, A as nt, k as la, l as Ri, m as ca, n as rn, o as Ct, p as Wo, q as yi, r as ra, s as Fo, t as Vo, v as Uo, w as Ko, a as Bi, G as De, x as un, L as ua, y as Xo, z as Qo, B as Zo, C as dn, E as Yo, F as Jo, H as ts, I as Le, J as Ne, K as Gi, M as da, O as pa, P as bn, Q as es, R as is, T as ns, U as as, V as os, W as ss, X as ls, Y as cs, Z as rs, D as Re, $ as Fe, a0 as ge, a1 as ye, a2 as ie, a3 as us, a4 as ga, a5 as ba, a6 as ds, a7 as ps, a8 as ma, a9 as gs, aa as bs, ab as ms, ac as _a, ad as va, ae as mn, af as _n, ag as _s, ah as ka, ai as vs, aj as ha, ak as fa, al as ks, am as vn, an as hs, ao as fs, ap as ys, aq as ya, ar as $s, as as $a, at as ws, au as Ts, av as wa, aw as Ta, ax as Cs, ay as Ls, az as Ns, aA as zs, aB as Is, aC as zi, aD as Te, aE as Ce, aF as Un, aG as Kn, aH as xs, aI as Ca, aJ as La, aK as Ss, aL as Rs, aM as Bs, aN as Na, aO as Gs, aP as As, aQ as Ms, aR as za, aS as Ps, aT as Ds, aU as Os, aV as Es, u as qs, aW as js, aX as Hs} from "./page-activity-f7f1ca5a.js";
window.getBuildInfo = function() {
    return {
        buildTime: "10/11/2024, 1:38:19 PM",
        branch: "origin/masterBranch/main-v2.24 commitId:7f35a1781fd4bb691d20ff5ee27e70fc626e3750"
    }
}
;
const Ws = {
    moneyup: /^(?!0+$)(?!0*\.0*$)\d{1,11}(\.\d{1,2})?$/,
    redNum: /^([1-9]\d{0,2}|1000)$/,
    requiredNum: /^.{0,20}$/,
    passReg2: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?![0-9\W_]+$)[a-zA-Z0-9\W_]{8,30}$/,
    passReg3: /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,30}$/,
    outmoneypwd: /^\d{6}$/,
    name: /^[^~`!@#$%^&*+-/=/_()|<\{\}\[\],.:'"//\?\\/>》《]{1,30}$/,
    tuiName: /^[a-zA-Z\s\u4e00-\u9fa50-9][a-zA-Z0-9\s\u4e00-\u9fa5]{1,23}$/,
    yaoma: /^[A-Za-z0-9|A-Za-z|0-9]{6}$/,
    httpCheck: /^((ht|f)tps?):\/\/([\w-]+(\.[\w-]+)*\/?)+(\?([\w\-\.,@?^=%&:\/~\+#]*)+)?$/,
    password: /^[A-Za-z0-9~`!@#$%^&*()_+-='",;.?/|]{6,12}$/,
    account: /^(?![a-zA-Z]+$)[a-zA-Z0-9|0-9]{7,11}$/,
    email: /^[0-9A-Za-zd]+([-_.][0-9A-Za-zd]+)*@([0-9A-Za-zd]+[-.]{0,1})[A-Za-zd]{1,5}$/,
    email1: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    length1: /^.{6,30}$/,
    phone: /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/,
    phone1: /^(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/,
    moneys2: /^(-?)\d{1,9}(\.\d{1,2})?$/,
    moneys21: /^\d{1,4}(\.\d{1,2})?$/,
    ip: /^(?:(?:1[0-9][0-9]\.)|(?:2[0-4][0-9]\.)|(?:25[0-5]\.)|(?:[1-9][0-9]\.)|(?:[0-9]\.)){3}(?:(?:1[0-9][0-9])|(?:2[0-4][0-9])|(?:25[0-5])|(?:[1-9][0-9])|(?:[0-9]))$/,
    int: /^[1-9]\d*$/,
    verifyname: /[^a-zA-Z\s+$]/g,
    inputrule: /^[0-9,|]+$/
}
  , Fs = {
    moneyup: "validateDesc1",
    redNum: "validateDesc2",
    requiredNum: "validateDesc3",
    passReg2: "pswRequirements",
    outmoneypwd: "validateDesc5",
    name: "validateDesc6",
    tuiName: "validateDesc7",
    endSpace: "validateDesc8",
    yaoma: "validateDesc9",
    httpCheck: "validateDesc10",
    password: "validateDesc11",
    account: "validateDesc13",
    email: "validateDesc14",
    length1: "validateDesc15",
    phone: "validateDesc16",
    moneys2: "validateDesc17",
    moneys21: "validateDesc18",
    ip: "validateDesc19",
    int: "validateDesc20",
    verifyname: "validateDesc21",
    inputtip: "validateDesc22"
}
  , Vs = {
    class: "hot_container"
}
  , Us = {
    key: 0,
    class: "platform"
}
  , Ks = {
    key: 0,
    class: "title"
}
  , Xs = {
    class: "list"
}
  , Qs = ["onClick"]
  , Zs = {
    class: "item"
}
  , Ys = ["src", "data-img"]
  , Js = {
    key: 0,
    class: "win-odds"
}
  , tl = {
    key: 0,
    class: "title"
}
  , el = {
    class: "list"
}
  , il = ["onClick"]
  , nl = {
    class: "item"
}
  , al = ["src", "data-img"]
  , ol = {
    key: 0,
    class: "win-odds"
}
  , sl = F({
    __name: "HotGameItem",
    props: {
        platformList: {
            type: Array,
            required: !0
        },
        clicksTopList: {
            type: Array,
            required: !0
        },
        isAll: {
            type: Boolean,
            required: !0
        }
    },
    emits: ["onItemClick"],
    setup(s, {emit: i}) {
        const {platformList: o, clicksTopList: l} = s
          , {homeState: g} = pe()
          , m = Q( () => JSON.parse(JSON.stringify(g.allGameList)))
          , c = ki( () => hi( () => import("./gameHot-9cc1aa35.js"), ["assets/js/gameHot-9cc1aa35.js", "assets/js/modules-9638c0ec.js", "assets/css/modules-b642e9bc.css", "assets/js/page-activity-f7f1ca5a.js", "assets/js/native/index-0cf0be38.js", "assets/js/en-659e4950.js", "assets/js/rus-f020166a.js", "assets/js/vi-df1c6473.js", "assets/js/id-1122fea2.js", "assets/js/hd-134ebb62.js", "assets/js/tha-63c28cd3.js", "assets/js/md-1aba351c.js", "assets/js/bra-5f0975e9.js", "assets/js/my-36f8d567.js", "assets/js/bdt-68275706.js", "assets/js/zh-995c5bf9.js", "assets/js/pak-1f61612e.js", "assets/js/ar-fcc22680.js", "assets/css/page-activity-2987852d.css"]))
          , u = ki( () => hi( () => import("./gameRec-39390d7a.js"), ["assets/js/gameRec-39390d7a.js", "assets/js/modules-9638c0ec.js", "assets/css/modules-b642e9bc.css", "assets/js/page-activity-f7f1ca5a.js", "assets/js/native/index-0cf0be38.js", "assets/js/en-659e4950.js", "assets/js/rus-f020166a.js", "assets/js/vi-df1c6473.js", "assets/js/id-1122fea2.js", "assets/js/hd-134ebb62.js", "assets/js/tha-63c28cd3.js", "assets/js/md-1aba351c.js", "assets/js/bra-5f0975e9.js", "assets/js/my-36f8d567.js", "assets/js/bdt-68275706.js", "assets/js/zh-995c5bf9.js", "assets/js/pak-1f61612e.js", "assets/js/ar-fcc22680.js", "assets/css/page-activity-2987852d.css"]))
          , p = ki( () => hi( () => import("./noticeBarHot-8da6a905.js"), ["assets/js/noticeBarHot-8da6a905.js", "assets/js/modules-9638c0ec.js", "assets/css/modules-b642e9bc.css", "assets/js/page-activity-f7f1ca5a.js", "assets/js/native/index-0cf0be38.js", "assets/js/en-659e4950.js", "assets/js/rus-f020166a.js", "assets/js/vi-df1c6473.js", "assets/js/id-1122fea2.js", "assets/js/hd-134ebb62.js", "assets/js/tha-63c28cd3.js", "assets/js/md-1aba351c.js", "assets/js/bra-5f0975e9.js", "assets/js/my-36f8d567.js", "assets/js/bdt-68275706.js", "assets/js/zh-995c5bf9.js", "assets/js/pak-1f61612e.js", "assets/js/ar-fcc22680.js", "assets/css/page-activity-2987852d.css"]));
        let r = o
          , b = l;
        o || (r = m.value.popular.platformList,
        b = m.value.popular.clicksTopList);
        const _ = Pe()
          , w = T => {
            i("onItemClick", T)
        }
        ;
        return (T, N) => {
            var v, k;
            return n(),
            a("div", Vs, [((v = d(r)) == null ? void 0 : v.length) > 0 && !T.isAll ? (n(),
            a("div", Us, [T.isAll ? $("v-if", !0) : (n(),
            a("div", Ks, [C(d(u), {
                class: "gameRec"
            }), t("span", null, e(T.$t("platRecom")), 1)])), t("div", Xs, [(n(!0),
            a(S, null, G(d(r), y => (n(),
            a("div", {
                key: y.vendorId,
                onClick: f => w(y)
            }, [t("div", Zs, [C(d(c), {
                class: "hot_bage"
            }), t("img", {
                src: y.imgUrl,
                alt: "",
                "data-img": d(Ft)("images", "avatar")
            }, null, 8, Ys)]), d(_).isShowHotGameWinOdds ? (n(),
            a("div", Js, [t("span", null, e(T.$t("winOdds")), 1), t("span", null, e(y.winOdds) + "%", 1), t("div", {
                class: "win-p",
                style: le({
                    width: `${Math.min(y.winOdds, 100)}%`
                })
            }, null, 4)])) : $("v-if", !0)], 8, Qs))), 128))])])) : $("v-if", !0), ((k = d(r)) == null ? void 0 : k.length) > 0 ? (n(),
            a("div", {
                key: 1,
                class: B(["popular", {
                    pupularAll: T.isAll
                }])
            }, [T.isAll ? $("v-if", !0) : (n(),
            a("div", tl, [C(d(p), {
                class: "hotGames"
            }), t("span", null, e(T.$t("hot")), 1)])), t("div", el, [(n(!0),
            a(S, null, G(d(b), y => (n(),
            a("div", {
                key: y.vendorId,
                onClick: f => w(y)
            }, [t("div", nl, [t("img", {
                src: y.imgUrl,
                alt: "",
                "data-img": d(Ft)("images", "avatar")
            }, null, 8, al)]), d(_).isShowHotGameWinOdds ? (n(),
            a("div", ol, [t("span", null, e(T.$t("winOdds")), 1), t("span", null, e(y.winOdds) + "%", 1), t("div", {
                class: "win-p",
                style: le({
                    width: `${Math.min(y.winOdds, 100)}%`
                })
            }, null, 4)])) : $("v-if", !0)], 8, il))), 128))])], 2)) : $("v-if", !0)])
        }
    }
});
const ll = V(sl, [["__scopeId", "data-v-d06787cb"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/RedHome/GameList/HotGameItem.vue"]])
  , cl = ["onClick"]
  , rl = F({
    __name: "OnlineGamesItem",
    props: {
        gameData: {
            type: Array,
            required: !0
        },
        isAll: {
            type: Boolean,
            required: !0
        },
        gameType: {
            type: String,
            required: !0
        }
    },
    emits: ["onItemClick"],
    setup(s, {emit: i}) {
        const o = s
          , l = Q( () => o.isAll ? o.gameData : o.gameData.length > 8 ? o.gameData.slice(0, 8) : o.gameData)
          , g = m => {
            i("onItemClick", m)
        }
        ;
        return Lt( () => {}
        ),
        (m, c) => {
            const u = Dt("lazy");
            return n(),
            a("div", {
                class: B(["minGame_container", {
                    all_game: m.isAll
                }])
            }, [(n(!0),
            a(S, null, G(l.value, p => (n(),
            a("div", {
                class: B(["onlineGamesItem", m.gameType]),
                key: p.gameID,
                onClick: r => g(p)
            }, [dt((n(),
            a("img", {
                class: B(m.gameType === "fish" ? "fish_img" : "min_game_img"),
                key: p.gameID
            }, null, 2)), [[u, p.img]])], 10, cl))), 128))], 2)
        }
    }
});
const ul = V(rl, [["__scopeId", "data-v-860d7030"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/RedHome/GameList/OnlineGamesItem.vue"]])
  , dl = {
    class: "lottery_container"
}
  , pl = ["onClick"]
  , gl = F({
    __name: "LotterySlotItem",
    props: {
        gameData: {
            type: Array,
            required: !0
        },
        isAll: {
            type: Boolean,
            required: !0
        }
    },
    setup(s) {
        const {isAlowGame: i} = pe()
          , {t: o} = gt()
          , l = ct()
          , g = p => {
            if (p) {
                let r = p;
                switch (r) {
                case "Trx Win Go":
                    r = "Trx Win";
                    break;
                case "FXOSO":
                    r = o("FXOSO");
                default:
                    r = r
                }
                return r
            }
            return ""
        }
          , m = p => {
            if (p) {
                let r = [];
                switch (p) {
                case "Win Go":
                case "Trx Win Go":
                    r = [o("lotteryHintStr1"), o("lotteryHintStr2")];
                    break;
                case "5D":
                case "K3":
                    r = [o("lotteryHintStr3"), o("lotteryHintStr4")];
                    break;
                case "XOSO":
                case "FXOSO":
                    r = [o("lotteryHintStr5"), o("lotteryHintStr6")];
                    break;
                case "Bingo18":
                    r = [o("lotteryHintStr5"), o("lotteryHintStr6")];
                    break;
                case "4D":
                    r = [o("lotteryHintStr7"), o("lotteryHintStr6")];
                    break;
                default:
                    r = []
                }
                return r
            }
            return ""
        }
          , c = [{
            value: 1,
            path: "WinGo"
        }, {
            value: 3,
            path: "5D"
        }, {
            value: 2,
            path: "K3"
        }, {
            value: 4,
            path: "WinTrx"
        }, {
            value: 5,
            path: "XoSo"
        }, {
            value: 6,
            path: "XoSo"
        }, {
            value: 7,
            path: "Binguo"
        }, {
            value: 8,
            path: "4D"
        }]
          , u = p => {
            l.push({
                name: "AllLotteryGames-" + c[c.findIndex(r => r.value === p.id)].path,
                query: {
                    id: p.id
                }
            })
        }
        ;
        return (p, r) => {
            const b = Dt("lazy");
            return n(),
            a("div", dl, [(n(!0),
            a(S, null, G(p.gameData, _ => (n(),
            a("div", {
                class: "lotterySlotItem",
                key: _.id,
                onClick: w => d(i)(_, u)
            }, [dt(t("img", null, null, 512), [[b, _.categoryImg]]), t("span", null, e(g(_.categoryCode)), 1), t("h4", null, [t("div", null, e(m(_.categoryCode)[0]), 1), t("div", null, e(m(_.categoryCode)[1]), 1)])], 8, pl))), 128))])
        }
    }
});
const bl = V(gl, [["__scopeId", "data-v-acaadf81"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/RedHome/GameList/LotterySlotItem.vue"]])
  , ml = {
    class: "lotterySlotItem__container"
}
  , _l = {
    class: "title"
}
  , vl = {
    class: "tit"
}
  , kl = {
    class: "game_img"
}
  , hl = F({
    __name: "OtherGameItem",
    props: {
        info: {
            type: null,
            required: !0
        },
        isAll: {
            type: Boolean,
            required: !0
        },
        gameType: {
            type: String,
            required: !0
        }
    },
    setup(s) {
        const {t: i} = gt()
          , o = {
            sport: i("sport"),
            video: i("live"),
            chess: i("chess")
        };
        return (l, g) => {
            const m = Dt("lazy");
            return n(),
            a("div", ml, [t("div", _l, [t("div", vl, e(o[l.gameType]), 1), $(' <div class="desc">{{ getArrayKey(rootConfig.gameAllName, info.slotsTypeID) }}</div> ')]), dt(t("img", kl, null, 512), [[m, l.info.vendorImg]])])
        }
    }
});
const fl = V(hl, [["__scopeId", "data-v-1153e4fd"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/RedHome/GameList/OtherGameItem.vue"]])
  , yl = ["onClick"]
  , $l = {
    class: "gameImg"
}
  , wl = F({
    __name: "ElectronicItem",
    props: {
        gameData: {
            type: Array,
            default: []
        },
        isAll: {
            type: Boolean,
            default: !1
        }
    },
    emits: ["handleOpenGame"],
    setup(s, {emit: i}) {
        const o = s
          , l = Q( () => o.isAll ? o.gameData : o.gameData.slice(0, 6))
          , g = m => {
            i("handleOpenGame", m, "slot")
        }
        ;
        return Lt( () => {}
        ),
        (m, c) => {
            const u = Dt("lazy");
            return n(),
            a("div", {
                class: B(["onlineGamesItem__container", {
                    allGame: s.isAll
                }])
            }, [(n(!0),
            a(S, null, G(l.value, p => (n(),
            a("div", {
                key: p.slotsTypeID,
                class: "item",
                onClick: r => g(p)
            }, [dt(t("img", $l, null, 512), [[u, p.vendorImg]]), $(' <van-image :src="getIcons(`home/dianzi/onlineSlot`, item.slotsName)" class="slot_img">\n				<template v-slot:error>加载失败</template>\n			</van-image> ')], 8, yl))), 128))], 2)
        }
    }
});
const Tl = V(wl, [["__scopeId", "data-v-54337c48"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/RedHome/GameList/ElectronicItem.vue"]])
  , Cl = {
    alt: ""
}
  , Ll = F({
    __name: "ElectronicWinRate",
    setup(s) {
        const i = Pe()
          , o = Q( () => i.winRate.electronicWinRateImgUrl || "")
          , l = Q( () => !!(i.winRate.isShowElectronicWinRateExternalLink && o.value))
          , g = () => {
            i.winRate.electronicWinRateExternalLink && window.open(i.winRate.electronicWinRateExternalLink)
        }
        ;
        return (m, c) => {
            const u = Dt("lazy");
            return l.value ? (n(),
            a("div", {
                key: 0,
                class: "WinRate",
                onClick: g
            }, [dt(t("img", Cl, null, 512), [[u, o.value]])])) : $("v-if", !0)
        }
    }
});
const Ia = V(Ll, [["__scopeId", "data-v-0d36c546"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/RedHome/GameList/ElectronicWinRate.vue"]])
  , Nl = {
    class: "slot_list"
}
  , zl = {
    class: "slot_title"
}
  , Il = {
    class: "slot_img_box"
}
  , xl = ["onClick"]
  , Sl = ["onClick"]
  , Rl = F({
    __name: "index",
    setup(s) {
        const i = ct()
          , {getSlotList: o, homeState: l, onItemClick: g} = pe()
          , m = u => u.indexOf("_") === -1 ? u : u.split("_")[0]
          , c = u => {
            const p = l.allGameList.slot.find(r => r.slotsName === u.vendorCode);
            sessionStorage.setItem("slotGamesList", JSON.stringify(l.allGameList.slot)),
            sessionStorage.setItem("gameType", JSON.stringify("slot")),
            sessionStorage.setItem("clickedItem", JSON.stringify(p)),
            i.push({
                name: "AllOnlineGames"
            })
        }
        ;
        return o(),
        (u, p) => {
            const r = W("svg-icon")
              , b = Dt("lazy");
            return n(),
            a("div", Nl, [C(Ia), (n(!0),
            a(S, null, G(d(l).slotsGame, _ => (n(),
            a("div", {
                class: "slot_item",
                key: _.vendorCode
            }, [t("div", zl, [$(`				<img :src="getIcons('home/slots', item.vendorCode)" alt="" />`), C(r, {
                name: _.vendorCode
            }, null, 8, ["name"]), E(" " + e(m(_.vendorCode)) + e(u.$t("electric")), 1)]), t("div", Il, [(n(!0),
            a(S, null, G(_.childList.slice(0, 6), w => dt((n(),
            a("img", {
                key: w.gameID + _.vendorCode,
                onClick: T => d(g)(w)
            }, null, 8, xl)), [[b, w.img]])), 128))]), t("div", {
                class: "all_slot",
                onClick: () => c(_)
            }, e(u.$t("allGame")), 9, Sl)]))), 128))])
        }
    }
});
const Bl = V(Rl, [["__scopeId", "data-v-1b7d97f8"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/Electronic/Slot/index.vue"]])
  , $i = s => (Nt("data-v-df3cc798"),
s = s(),
zt(),
s)
  , Gl = $i( () => t("div", {
    class: "skeleton_hot"
}, [t("div", {
    class: "hot_tit"
}), t("div", {
    class: "hot_list"
}, [t("div"), t("div"), t("div"), t("div"), t("div"), t("div")]), t("div", {
    class: "hot_tit"
}), t("div", {
    class: "hot_list"
}, [t("div"), t("div"), t("div"), t("div"), t("div"), t("div"), t("div"), t("div"), t("div")])], -1))
  , Al = $i( () => t("div", {
    class: "skeleton_other"
}, [t("div"), t("div"), t("div"), t("div")], -1))
  , Ml = {
    class: "otherGame"
}
  , Pl = $i( () => t("div", {
    class: "skeleton_slot"
}, [t("div"), t("div"), t("div"), t("div"), t("div"), t("div")], -1))
  , Dl = $i( () => t("div", {
    class: "skeleton_other"
}, [t("div"), t("div"), t("div"), t("div")], -1))
  , Ol = $i( () => t("div", {
    class: "skeleton_flash"
}, [t("div"), t("div"), t("div"), t("div"), t("div"), t("div"), t("div"), t("div")], -1))
  , El = ["src"]
  , ql = F({
    __name: "GameListGrid",
    props: {
        currentGame: {
            type: String,
            default: ""
        },
        isAll: {
            type: Boolean,
            default: !1
        }
    },
    setup(s) {
        const i = s
          , o = ct()
          , l = h(!0)
          , g = Q( () => o.currentRoute.value.name !== "AllGames")
          , {onItemClick: m, getAllGame: c, homeState: u} = pe()
          , p = Q( () => JSON.parse(JSON.stringify(u.allGameList)))
          , r = Q( () => i.currentGame === "popular" ? 1 : ["sport", "chess", "video"].includes(i.currentGame) ? 2 : i.currentGame === "lottery" ? 3 : i.currentGame === "slot" ? 4 : i.currentGame === "flash" || i.currentGame === "fish" ? 5 : -1)
          , b = async () => {
            var v, k;
            await c(),
            p.value.popular = [(v = u.allGameList) == null ? void 0 : v.popular.platformList, (k = u.allGameList) == null ? void 0 : k.popular.clicksTopList],
            l.value = !1
        }
          , _ = () => {
            o.push({
                name: "AllGames",
                query: {
                    type: i.currentGame
                }
            })
        }
          , w = Q( () => p.value[i.currentGame].length < 1 ? [] : p.value[i.currentGame][0] || [])
          , T = Q( () => p.value[i.currentGame].length < 1 ? [] : i.isAll ? p.value[i.currentGame][1] || [] : p.value[i.currentGame][1].slice(0, 9) || [])
          , N = async (v, k) => {
            ["chess", "slot"].includes(k) ? (sessionStorage.setItem("slotGamesList", JSON.stringify(p.value[i.currentGame])),
            sessionStorage.setItem("gameType", JSON.stringify(i.currentGame)),
            sessionStorage.setItem("clickedItem", JSON.stringify(v)),
            o.push({
                name: "AllOnlineGames"
            })) : m(v)
        }
        ;
        return b(),
        (v, k) => {
            const y = W("van-skeleton");
            return n(),
            a("div", {
                class: B(["gameListGrid__container", {
                    all_container: s.isAll
                }])
            }, [s.currentGame === "popular" ? (n(),
            J(y, {
                key: 0,
                loading: l.value
            }, {
                template: P( () => [Gl]),
                default: P( () => [C(ll, {
                    platformList: w.value,
                    clicksTopList: T.value,
                    onOnItemClick: d(m),
                    isAll: s.isAll
                }, null, 8, ["platformList", "clicksTopList", "onOnItemClick", "isAll"])]),
                _: 1
            }, 8, ["loading"])) : $("v-if", !0), r.value === 2 ? (n(),
            J(y, {
                key: 1,
                loading: l.value
            }, {
                template: P( () => [Al]),
                default: P( () => [t("div", Ml, [(n(!0),
                a(S, null, G(p.value[s.currentGame], (f, z) => (n(),
                J(fl, {
                    key: z,
                    info: f,
                    gameType: s.currentGame,
                    isAll: s.isAll,
                    onClick: L => N(f, s.currentGame)
                }, null, 8, ["info", "gameType", "isAll", "onClick"]))), 128))])]),
                _: 1
            }, 8, ["loading"])) : $("v-if", !0), r.value === 4 ? (n(),
            J(y, {
                key: 2,
                loading: l.value
            }, {
                template: P( () => [Pl]),
                default: P( () => [s.isAll ? $("v-if", !0) : (n(),
                J(Ia, {
                    key: 0
                })), g.value ? (n(),
                J(Tl, {
                    key: 1,
                    gameData: p.value[s.currentGame],
                    isAll: s.isAll,
                    onHandleOpenGame: N
                }, null, 8, ["gameData", "isAll"])) : (n(),
                J(Bl, {
                    key: 2
                }))]),
                _: 1
            }, 8, ["loading"])) : $("v-if", !0), r.value === 3 ? (n(),
            J(y, {
                key: 3,
                loading: l.value
            }, {
                template: P( () => [Dl]),
                default: P( () => [C(bl, {
                    gameData: p.value[s.currentGame],
                    isAll: s.isAll
                }, null, 8, ["gameData", "isAll"])]),
                _: 1
            }, 8, ["loading"])) : $("v-if", !0), $(" 小游戏、捕鱼 "), r.value === 5 ? (n(),
            J(y, {
                key: 4,
                loading: l.value
            }, {
                template: P( () => [Ol]),
                default: P( () => [C(ul, {
                    gameData: p.value[s.currentGame],
                    gameType: s.currentGame,
                    isAll: s.isAll,
                    onOnItemClick: d(m)
                }, null, 8, ["gameData", "gameType", "isAll", "onOnItemClick"])]),
                _: 1
            }, 8, ["loading"])) : $("v-if", !0), s.isAll ? $("v-if", !0) : (n(),
            a("button", {
                key: 5,
                onClick: _,
                class: "look_all"
            }, [t("img", {
                src: d(Xt)("home", "all"),
                alt: ""
            }, null, 8, El), E(" " + e(v.$t("viewAll")), 1)]))], 2)
        }
    }
});
const jl = V(ql, [["__scopeId", "data-v-df3cc798"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/RedHome/GameList/GameListGrid.vue"]])
  , Hl = {
    class: "gamesList__container"
}
  , Wl = {
    class: "gamesList__container-title"
}
  , Fl = F({
    __name: "GameList",
    props: {
        gameData: {
            type: Object,
            required: !0
        },
        title: {
            type: String,
            required: !0
        },
        gameType: {
            type: String,
            required: !0
        }
    },
    setup(s) {
        return (i, o) => (n(),
        a("div", Hl, [t("div", Wl, e(i.title), 1), C(jl, {
            currentGame: i.gameType,
            isAll: !0
        }, null, 8, ["currentGame"])]))
    }
});
const Vl = V(Fl, [["__scopeId", "data-v-e4c17073"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/RedHome/AllGames/GameList.vue"]])
  , xa = Symbol();
var Sa = (s, i) => {
    const o = s.__vccOpts || s;
    for (const [l,g] of i)
        o[l] = g;
    return o
}
;
const Ul = F({
    name: "FunTabItem",
    props: {
        title: String,
        name: [String, Number],
        badge: [String, Number]
    },
    setup(s) {
        const i = Lo(xa)
          , o = h()
          , l = Q( () => (i == null ? void 0 : i.activeValue.value) === s.name ? {
            color: i == null ? void 0 : i.activeColor.value
        } : {})
          , g = () => {
            i == null || i.setActiveValue(s.name)
        }
          , m = {
            name: pn(s, "name"),
            el: o
        };
        return Lt( () => {
            var c;
            (c = i.addItem) == null || c.call(i, m)
        }
        ),
        Si( () => {
            var c;
            (c = i.removeItem) == null || c.call(i, m)
        }
        ),
        {
            el: o,
            style: l,
            handleClick: g
        }
    }
})
  , Kl = {
    class: "fun-tab-item__wrap"
}
  , Xl = {
    class: "fun-tab-item__label"
}
  , Ql = {
    key: 0,
    class: "fun-tab-item__badge"
};
function Zl(s, i, o, l, g, m) {
    return n(),
    a("div", {
        ref: "el",
        style: le(s.style),
        class: "fun-tab-item",
        onClick: i[0] || (i[0] = (...c) => s.handleClick && s.handleClick(...c))
    }, [t("div", Kl, [ke(s.$slots, "icon"), t("div", Xl, [ke(s.$slots, "default", {}, () => [E(e(s.title), 1)])]), s.badge ? (n(),
    a("div", Ql, e(s.badge), 1)) : $("v-if", !0)])], 4)
}
var Ra = Sa(Ul, [["render", Zl], ["__file", "/Users/scoutyin/Documents/ScoutYin/fun-tab/src/tab-item.vue"]]);
const tn = window;
function Yl() {
    let s = 0;
    const i = ["webkit", "moz"];
    for (let o = 0; o < i.length && !window.requestAnimationFrame; ++o)
        window.requestAnimationFrame = tn[i[o] + "RequestAnimationFrame"],
        window.cancelAnimationFrame = tn[i[o] + "CancelAnimationFrame"] || tn[i[o] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(o) {
        const l = Date.now()
          , g = l - s
          , m = Math.max(0, 16.7 - g)
          , c = window.setTimeout(function() {
            o(g)
        }, m);
        return s = l + m,
        c
    }
    ),
    window.cancelAnimationFrame || (window.cancelAnimationFrame = function(o) {
        clearTimeout(o)
    }
    )
}
const Jl = F({
    name: "FunTabs",
    props: {
        modelValue: {
            type: [String, Number],
            default: ""
        },
        lineWidth: {
            type: [Number, String],
            default: 30
        },
        lineHeight: {
            type: Number,
            default: 3
        },
        activeColor: {
            type: String,
            default: "#1677ff"
        },
        additionalX: {
            type: Number,
            default: 50
        },
        reBoundExponent: {
            type: Number,
            default: 10,
            validator(s) {
                return s > 0
            }
        },
        inertialDuration: {
            type: Number,
            default: 1e3,
            validator(s) {
                return s > 0
            }
        },
        reBoundingDuration: {
            type: Number,
            default: 360
        }
    },
    emits: ["update:modelValue", "change"],
    setup(s, {emit: i, expose: o}) {
        let l = null;
        const g = []
          , m = h()
          , c = h()
          , u = h(s.modelValue)
          , p = h(0)
          , r = h(0)
          , b = h(0)
          , _ = h(0)
          , w = h(0)
          , T = h(!1)
          , N = h(!1)
          , v = h(0)
          , k = h(0)
          , y = h(0)
          , f = h(0)
          , z = h(0)
          , L = h(0)
          , x = h(16.7)
          , I = h(0)
          , R = h(0)
          , M = h(0)
          , A = h(.001)
          , D = h(.001)
          , j = Q( () => {
            const O = N.value && !T.value ? s.reBoundingDuration : 0;
            return {
                transitionTimingFunction: N.value ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "cubic-bezier(0.1, 0.57, 0.1, 1)",
                transitionDuration: `${O}ms`,
                transform: `translate3d(${v.value}px, 0px, 0px)`
            }
        }
        )
          , X = Q( () => ({
            transition: "all 300ms",
            width: `${r.value}px`,
            height: `${s.lineHeight}px`,
            transform: `translate3d(${p.value}px, 0, 0)`,
            backgroundColor: s.activeColor
        }))
          , rt = Q( () => f.value <= k.value);
        At( () => s.modelValue, O => {
            u.value = O,
            ht()
        }
        );
        const ht = () => {
            l || (l = new Promise(O => {
                Jt( () => {
                    Bt(),
                    O(),
                    l = null
                }
                )
            }
            ))
        }
          , st = O => {
            u.value = O,
            i("update:modelValue", O),
            i("change", O)
        }
          , at = O => {
            g.push(O),
            ht()
        }
          , Y = O => {
            const it = g.findIndex(ft => ft.name === O.name);
            it !== -1 && (g.splice(it, 1),
            ht())
        }
          , _t = {
            activeValue: u,
            activeColor: pn(s, "activeColor"),
            addItem: at,
            removeItem: Y,
            setActiveValue: st
        };
        No(xa, _t);
        const Bt = () => {
            var O, it;
            b.value = ((O = m.value) == null ? void 0 : O.offsetWidth) || 0,
            _.value = ((it = c.value) == null ? void 0 : it.offsetWidth) - b.value,
            wt(),
            yt()
        }
          , qt = () => (N.value = !1,
        v.value > 0 ? (N.value = !0,
        v.value = 0) : v.value < -_.value && (N.value = !0,
        v.value = -_.value),
        N.value)
          , bt = () => {
            rt.value ? v.value <= 0 && v.value + _.value > 0 || v.value > 0 ? v.value += f.value - y.value : v.value + _.value <= 0 && (v.value += s.additionalX * (f.value - y.value) / (b.value + Math.abs(v.value + _.value))) : v.value >= 0 ? v.value += s.additionalX * (f.value - y.value) / (b.value + v.value) : (v.value <= 0 && v.value + _.value >= 0 || v.value + _.value <= 0) && (v.value += f.value - y.value),
            y.value = f.value
        }
          , Ot = () => {
            if (R.value = Date.now(),
            x.value = R.value - I.value,
            rt.value ? v.value <= -_.value ? (D.value *= (s.reBoundExponent + Math.abs(v.value + _.value)) / s.reBoundExponent,
            w.value = Math.min(w.value - D.value, 0)) : w.value = Math.min(w.value - D.value * x.value, 0) : v.value >= 0 ? (D.value *= (s.reBoundExponent + v.value) / s.reBoundExponent,
            w.value = Math.max(w.value - D.value, 0)) : w.value = Math.max(w.value - D.value * x.value, 0),
            v.value += w.value * x.value / 2,
            Math.abs(w.value) <= A.value) {
                qt();
                return
            }
            I.value = R.value,
            M.value = requestAnimationFrame(Ot)
        }
          , Vt = () => {
            if (!g.length)
                return;
            const O = g.find(it => it.name.value === u.value);
            return O && O.el.value
        }
          , yt = () => {
            const O = Vt();
            if (!O)
                return;
            const it = O.offsetWidth
              , ft = O.offsetLeft
              , {lineWidth: Gt} = s;
            Gt === "auto" ? r.value = it : Gt < 1 ? r.value = it * Gt : r.value = Gt,
            p.value = ft + (it - r.value) / 2
        }
          , wt = () => {
            const O = Vt();
            if (!O)
                return;
            const it = O.offsetLeft
              , ft = (b.value - O.offsetWidth) / 2;
            let Gt = 0;
            const ve = Math.abs(v.value);
            it <= ve + ft ? Gt = ft - (it + v.value) : Gt = -(it - ve - ft);
            let ae = Gt + v.value;
            ae > 0 && (ae = 0),
            ae < -_.value && (ae = -_.value),
            N.value = !0,
            v.value = ae
        }
          , Tt = O => {
            O.stopPropagation(),
            cancelAnimationFrame(M.value),
            y.value = O.touches[0].clientX
        }
          , $t = O => {
            _.value <= 0 || (O.preventDefault(),
            O.stopPropagation(),
            T.value = !0,
            z.value = L.value,
            k.value = y.value,
            f.value = O.touches[0].clientX,
            bt(),
            L.value = O.timeStamp)
        }
          , ot = O => {
            if (T.value = !1,
            qt())
                cancelAnimationFrame(M.value);
            else {
                let it = O.timeStamp - L.value
                  , ft = L.value - z.value;
                if (ft = ft > 0 ? ft : 8,
                it > 100)
                    return;
                w.value = (y.value - k.value) / ft,
                D.value = w.value / s.inertialDuration,
                I.value = Date.now(),
                M.value = requestAnimationFrame(Ot)
            }
        }
          , Z = () => {
            const O = m.value;
            O.addEventListener("touchstart", Tt, !1),
            O.addEventListener("touchmove", $t, !1),
            O.addEventListener("touchend", ot, !1)
        }
          , tt = () => {
            const O = m.value;
            O.removeEventListener("touchstart", Tt),
            O.removeEventListener("touchmove", $t),
            O.removeEventListener("touchend", ot)
        }
        ;
        return Lt( () => {
            Yl(),
            Z(),
            ht()
        }
        ),
        Ve( () => {
            tt()
        }
        ),
        o({
            resize: Bt
        }),
        {
            viewAreaRef: m,
            listRef: c,
            activeValue: u,
            lineOffset: p,
            activeLineWidth: r,
            viewAreaWidth: b,
            offsetX: _,
            speed: w,
            touching: T,
            reBounding: N,
            translateX: v,
            startX: k,
            lastX: y,
            currentX: f,
            startMoveTime: z,
            endMoveTime: L,
            frameTime: x,
            frameStartTime: I,
            frameEndTime: R,
            inertiaFrame: M,
            zeroSpeed: A,
            acceleration: D,
            listStyle: j,
            activeBarStyle: X,
            isMoveLeft: rt
        }
    }
})
  , tc = {
    ref: "viewAreaRef",
    class: "fun-tabs"
};
function ec(s, i, o, l, g, m) {
    return n(),
    a("div", tc, [t("div", {
        ref: "listRef",
        style: le(s.listStyle),
        class: "fun-tabs__tab-list"
    }, [ke(s.$slots, "default"), t("div", {
        style: le(s.activeBarStyle),
        class: "fun-tabs__active-line"
    }, null, 4)], 4)], 512)
}
var Ba = Sa(Jl, [["render", ec], ["__file", "/Users/scoutyin/Documents/ScoutYin/fun-tab/src/tabs.vue"]]);
const ic = F({
    __name: "NavBar",
    props: {
        list: {
            type: Array,
            required: !0
        },
        tabClassName: {
            type: String,
            required: !0
        },
        active: {
            type: Number,
            required: !0,
            default: 0
        },
        tabItemClassName: {
            type: String,
            required: !1
        }
    },
    emits: ["update:active", "onClickTab"],
    setup(s, {expose: i, emit: o}) {
        const l = s
          , g = h()
          , m = h(0)
          , c = (u, p) => {
            o("update:active", m.value),
            o("onClickTab", {
                item: u,
                index: p
            })
        }
        ;
        return At( () => l.active, u => {
            m.value = u
        }
        ),
        i({
            funtabRef: g
        }),
        (u, p) => (n(),
        J(d(Ba), {
            modelValue: m.value,
            "onUpdate:modelValue": p[0] || (p[0] = r => m.value = r),
            class: B(u.tabClassName),
            lineWidth: "0",
            ref_key: "funtabRef",
            ref: g
        }, {
            default: P( () => [(n(!0),
            a(S, null, G(u.list, (r, b) => dt((n(),
            J(d(Ra), {
                name: b,
                key: b,
                class: B([u.tabItemClassName, {
                    activeClassName: u.active === b
                }]),
                onClick: _ => c(r, b)
            }, {
                default: P( () => [ke(u.$slots, "default", {
                    item: r,
                    index: b
                })]),
                _: 2
            }, 1032, ["name", "class", "onClick"])), [[Yt, r.isShow !== void 0 ? r.isShow : !0]])), 128))]),
            _: 3
        }, 8, ["modelValue", "class"]))
    }
})
  , ui = V(ic, [["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/FunTab/NavBar.vue"]])
  , nc = {
    class: "allGames__container"
}
  , ac = F({
    __name: "index",
    setup(s) {
        const {homeState: i, getGameType: o, getAllGame: l} = pe()
          , g = h(0)
          , m = h(null)
          , c = h()
          , u = ct()
          , {t: p} = gt()
          , r = h([])
          , b = h({});
        function _() {
            u.go(-1)
        }
        const w = Q( () => r.value[g.value]);
        Lt( () => {
            T()
        }
        ),
        fe( () => {
            T()
        }
        );
        const T = async () => {
            var v, k;
            !i.gameTypeList.length && await o(),
            !i.allGameList && await l(),
            r.value = [],
            i.gameTypeList.forEach(y => {
                y.categoryCode === "BigAward" || y.state !== 1 || r.value.push({
                    isShow: y.state === 1,
                    title: p("code" + y.typeNameCode),
                    img: y.categoryImg,
                    key: y.categoryCode.toLocaleLowerCase()
                })
            }
            ),
            b.value = i.allGameList || {},
            b.value.popular = [(v = b.value) == null ? void 0 : v.popular.platformList, (k = b.value) == null ? void 0 : k.popular.clicksTopList];
            const N = u.currentRoute.value.query.type || "";
            g.value = r.value.findIndex(y => y.key + "" === N) || 0
        }
        ;
        return (N, v) => {
            const k = W("NavBar")
              , y = W("van-sticky")
              , f = Dt("lazy");
            return n(),
            a("div", nc, [C(k, {
                title: N.$t("all"),
                "left-arrow": "",
                onClickLeft: _
            }, null, 8, ["title"]), C(y, {
                class: "alGames__container-sticky"
            }, {
                default: P( () => [C(ui, {
                    list: r.value,
                    active: g.value,
                    "onUpdate:active": v[0] || (v[0] = z => g.value = z),
                    tabClassName: "tabs",
                    activeClassName: "tab_active",
                    ref_key: "tabRefs",
                    ref: c
                }, {
                    default: P( ({item: z, index: L}) => [z.isShow ? (n(),
                    a("div", {
                        key: 0,
                        class: B(["tab_item", {
                            tab_active: L === g.value
                        }])
                    }, [dt(t("img", null, null, 512), [[f, z.img]]), t("span", null, e(z.title), 1)], 2)) : $("v-if", !0)]),
                    _: 1
                }, 8, ["list", "active"])]),
                _: 1
            }), t("div", {
                class: "allGames__container-list",
                ref_key: "allGamesContainer",
                ref: m
            }, [r.value.length > 0 ? (n(),
            J(Vl, {
                key: 0,
                gameType: w.value.key,
                title: w.value.title,
                gameData: b.value[w.value.key]
            }, null, 8, ["gameType", "title", "gameData"])) : $("v-if", !0)], 512)])
        }
    }
});
const oc = V(ac, [["__scopeId", "data-v-0a9bf0c5"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/home/AllGames/index.vue"]])
  , UB = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: oc
}, Symbol.toStringTag, {
    value: "Module"
}))
  , sc = {
    class: "lotteryGamesList__container"
}
  , lc = {
    alt: ""
}
  , cc = {
    class: "lotteryGamesList__container-item__time"
}
  , rc = F({
    __name: "index",
    props: {
        gamesList: {
            type: Object,
            default: () => {}
        }
    },
    setup(s) {
        const i = ct();
        function o() {
            i.push({
                name: "AllLotteryGames-VietnamLottery"
            })
        }
        return (l, g) => {
            const m = Dt("lazy");
            return n(),
            a("div", sc, [t("div", {
                class: "lotteryGamesList__container-item",
                onClick: o
            }, [dt(t("img", lc, null, 512), [[m, d(Xt)("home/AllLotteryGames", "cover")]]), t("span", cc, e(s.gamesList.title), 1)])])
        }
    }
});
const uc = V(rc, [["__scopeId", "data-v-22e2ba37"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/AllLotteryGames/index.vue"]])
  , dc = {
    class: "lotteryGames__container"
}
  , en = 46 + 90 + 35 + 16
  , Xn = 16 + 28
  , pc = F({
    __name: "index",
    setup(s) {
        const {t: i} = gt()
          , o = ct()
          , l = h(0)
          , g = h(0)
          , m = h(null)
          , c = [{
            title: i("all"),
            value: "all"
        }, {
            title: "Win Go",
            value: "winGo"
        }, {
            title: i("Lotre4d"),
            value: "4DLottery"
        }, {
            title: "Lottery",
            value: "lottery"
        }, {
            title: "Xổ số",
            value: "lotteryVi"
        }, {
            title: "Xổ số",
            value: "lotteryVi"
        }]
          , u = [{
            title: i("all"),
            value: "all"
        }, {
            title: i("minites1"),
            value: "60"
        }, {
            title: i("minites3"),
            value: "180"
        }, {
            title: i("minites5"),
            value: "300"
        }, {
            title: i("minites10"),
            value: "600"
        }, {
            title: i("minitesLong"),
            value: "long"
        }];
        function p() {
            o.go(-1)
        }
        function r(N) {
            return N === l.value ? l.value : -1
        }
        const {direction: b} = zo(m, {
            onSwipeStart: () => {
                _()
            }
            ,
            onSwipe: _,
            onSwipeEnd: () => {
                _()
            }
        });
        function _() {
            const N = document.getElementById(`gamesList-${l.value}`);
            if (N) {
                const {top: v, bottom: k} = N.getBoundingClientRect();
                k - en - Xn < 0 ? b.value === "UP" && (l.value = l.value + 1) : v - en - Xn > 0 && b.value === "DOWN" && (l.value = l.value - 1)
            }
        }
        function w() {
            T()
        }
        function T() {
            const N = document.getElementById(`gamesList-${l.value}`);
            N && m.value.scrollTo({
                top: N.offsetTop - en,
                behavior: "smooth"
            })
        }
        return (N, v) => {
            const k = W("NavBar")
              , y = W("van-tab")
              , f = W("van-tabs");
            return n(),
            a("div", dc, [C(k, {
                "left-arrow": "",
                title: N.$t("lottery"),
                onClickLeft: p
            }, null, 8, ["title"]), C(f, {
                class: "lotteryGames__container-tabBar mgt10",
                active: l.value,
                "onUpdate:active": v[0] || (v[0] = z => l.value = z),
                onClickTab: w,
                type: "card",
                color: "transparent",
                background: "transparent"
            }, {
                default: P( () => [(n(),
                a(S, null, G(c, (z, L) => C(y, {
                    name: L,
                    key: L,
                    title: z.title
                }, null, 8, ["name", "title"])), 64))]),
                _: 1
            }, 8, ["active"]), C(f, {
                class: "lotteryGames__container-timeTab",
                active: g.value,
                "onUpdate:active": v[1] || (v[1] = z => g.value = z),
                color: "#ff7172",
                background: "#fff"
            }, {
                default: P( () => [(n(),
                a(S, null, G(u, (z, L) => C(y, {
                    name: L,
                    key: L,
                    title: z.title
                }, null, 8, ["name", "title"])), 64))]),
                _: 1
            }, 8, ["active"]), t("div", {
                class: "lotteryGames__container-list",
                ref_key: "allGamesContainer",
                ref: m
            }, [(n(),
            a(S, null, G(u, (z, L) => C(uc, {
                "games-list": z,
                active: r(L),
                key: L,
                id: `gamesList-${L}`
            }, null, 8, ["games-list", "active", "id"])), 64))], 512)])
        }
    }
});
const gc = V(pc, [["__scopeId", "data-v-147ae92c"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/home/AllLotteryGames/index.vue"]])
  , KB = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: gc
}, Symbol.toStringTag, {
    value: "Module"
}))
  , bc = {
    class: "onlineGames__container"
}
  , mc = ["placeholder"]
  , _c = {
    class: "onlineGames__container-list"
}
  , vc = ["onClick"]
  , kc = {
    key: 1
}
  , hc = {
    class: "onlineGames__container-list miniGames"
}
  , fc = ["onClick"]
  , yc = F({
    __name: "index",
    setup(s) {
        const {onItemClick: i} = pe()
          , o = h()
          , l = h(0)
          , g = h([])
          , m = h(0);
        At(l, f => {
            const z = b.value[f];
            _.value = [],
            m.value = 0,
            y(z.slotsTypeID)
        }
        );
        const c = h(!1);
        At(c, f => {
            f ? setTimeout( () => {
                p.value.focus()
            }
            , 0) : u.value = ""
        }
        );
        const u = h("");
        Io(u, f => {
            if (r.value)
                if (r.value.key === "fish" || r.value.key === "flash")
                    b.value = b.value.filter(z => z.gameNameEn.toLowerCase().includes(f)),
                    f.length === 0 && (b.value = sessionStorage.getItem("slotGamesList") ? JSON.parse(sessionStorage.getItem("slotGamesList")) : null);
                else {
                    const z = b.value[l.value];
                    y(z.slotsTypeID, f)
                }
        }
        , {
            debounce: 300
        });
        const p = h(null)
          , r = h()
          , b = h([])
          , _ = h([])
          , w = ct()
          , T = xo(_, f => c.value ? f.gameNameEn.toLowerCase().includes(u.value.toLowerCase()) : f.customGameType === m.value);
        function N(f) {
            return f ? f.split(/(?=[A-Z])/).join(" ") : ""
        }
        function v() {
            w.go(-1)
        }
        function k(f) {
            c.value = f
        }
        async function y(f, z="") {
            const L = await nt(la({
                type: f,
                gameNameEn: z
            }));
            if (L) {
                if (_.value = L.data.gameLists || [],
                g.value = L.data.gameCustomTypeLists || [],
                !g.value.length)
                    return;
                m.value = g.value[0].customGameType
            }
        }
        return Lt( () => {
            r.value = sessionStorage.getItem("gameType") ? JSON.parse(sessionStorage.getItem("gameType")) : null,
            b.value = sessionStorage.getItem("slotGamesList") ? JSON.parse(sessionStorage.getItem("slotGamesList")) : null;
            const f = JSON.parse(sessionStorage.getItem("clickedItem"));
            f && (l.value = b.value.findIndex(L => L.slotsTypeID === f.slotsTypeID)),
            o.value && o.value.scrollTo(l.value);
            const z = b.value[l.value];
            y(z.slotsTypeID)
        }
        ),
        (f, z) => {
            var A, D;
            const L = W("svg-icon")
              , x = W("NavBar")
              , I = W("van-tab")
              , R = W("van-tabs")
              , M = Dt("lazy");
            return n(),
            a("div", bc, [C(x, {
                class: "white",
                "left-arrow": "",
                onClickLeft: v
            }, {
                center: P( () => {
                    var j;
                    return [t("span", {
                        class: B({
                            active: c.value
                        })
                    }, e((j = r.value) == null ? void 0 : j.title) + e(f.$t("game")), 3), dt(t("input", {
                        type: "text",
                        placeholder: f.$t("searchGame"),
                        class: B({
                            active: c.value
                        }),
                        "onUpdate:modelValue": z[0] || (z[0] = X => u.value = X),
                        ref_key: "searchBarRef",
                        ref: p
                    }, null, 10, mc), [[cn, u.value]])]
                }
                ),
                right: P( () => [C(L, {
                    name: "SearchTrx",
                    onClick: z[1] || (z[1] = j => k(!0)),
                    class: B({
                        active: c.value
                    })
                }, null, 8, ["class"]), t("span", {
                    class: B({
                        active: c.value
                    }),
                    onClick: z[2] || (z[2] = j => k(!1))
                }, e(f.$t("cancel")), 3)]),
                _: 1
            }), ((A = r.value) == null ? void 0 : A.key) !== "fish" && ((D = r.value) == null ? void 0 : D.key) !== "flash" ? (n(),
            J(R, {
                key: 0,
                class: "onlineGames__container-tabBar",
                active: l.value,
                "onUpdate:active": z[4] || (z[4] = j => l.value = j),
                type: "card",
                sticky: !0,
                "offset-top": 46,
                ref_key: "tabsRef",
                ref: o
            }, {
                default: P( () => [(n(!0),
                a(S, null, G(b.value, (j, X) => (n(),
                J(I, {
                    key: X
                }, {
                    title: P( () => [C(L, {
                        name: j.slotsName,
                        class: "gameIcon"
                    }, null, 8, ["name"]), t("span", null, e(j.slotsName), 1)]),
                    _: 2
                }, 1024))), 128)), !c.value || g.value.length === 0 ? (n(),
                J(d(Ba), {
                    key: 0,
                    modelValue: m.value,
                    "onUpdate:modelValue": z[3] || (z[3] = j => m.value = j),
                    lineWidth: 0
                }, {
                    default: P( () => [(n(!0),
                    a(S, null, G(g.value, (j, X) => (n(),
                    J(d(Ra), {
                        name: X,
                        key: X,
                        class: B([{
                            activeClassName: m.value === j.customGameType
                        }]),
                        onClick: rt => m.value = j.customGameType
                    }, {
                        default: P( () => [t("span", null, e(j.customGameTypeName), 1)]),
                        _: 2
                    }, 1032, ["name", "class", "onClick"]))), 128))]),
                    _: 1
                }, 8, ["modelValue"])) : $("v-if", !0), t("div", _c, [(n(!0),
                a(S, null, G(d(T), (j, X) => (n(),
                a("div", {
                    class: "onlineGames__container-list__item",
                    key: X,
                    onClick: rt => d(i)(j)
                }, [dt(t("img", null, null, 512), [[M, j.img]]), t("div", null, [t("span", null, e(N(j.gameNameEn)), 1)])], 8, vc))), 128))])]),
                _: 1
            }, 8, ["active"])) : (n(),
            a("div", kc, [t("div", hc, [(n(!0),
            a(S, null, G(b.value, (j, X) => (n(),
            a("div", {
                class: "onlineGames__container-list__item",
                key: X,
                onClick: rt => d(i)(j)
            }, [dt(t("img", null, null, 512), [[M, j.img]]), t("div", null, [t("span", null, e(j.gameNameEn), 1)])], 8, fc))), 128))])]))])
        }
    }
});
const $c = V(yc, [["__scopeId", "data-v-0ffc3892"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/home/AllOnlineGames/index.vue"]])
  , XB = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: $c
}, Symbol.toStringTag, {
    value: "Module"
}));
function di() {
    const s = Et({
        Original: [],
        HotGames: [],
        Lottery: [],
        Slot: [],
        Casino: [],
        Chess: [],
        Fish: [],
        Sport: []
    })
      , i = h([])
      , o = async () => {
        try {
            const {data: g} = await nt(Ri());
            g && (s.Original = g.flash,
            s.HotGames = g.popular.platformList,
            s.Lottery = g.lottery,
            s.Casino = g.video,
            s.Slot = g.slot,
            s.Chess = g.chess,
            s.Fish = g.fish,
            s.Sport = g.sport)
        } catch {}
    }
      , l = async () => {
        const g = await nt(ca());
        g && (i.value = g.data)
    }
    ;
    return Lt( () => {
        o(),
        l()
    }
    ),
    {
        gameData: s,
        gameTypeList: i
    }
}
const wc = {
    class: "luckyWinners__container"
}
  , Tc = {
    class: "luckyWinners__container-wrapper"
}
  , Cc = {
    class: "luckyWinners__container-wrapper__item-img"
}
  , Lc = {
    class: "luckyWinners__container-wrapper__item-info"
}
  , Nc = {
    class: "luckyWinners__container-wrapper__item-winType"
}
  , zc = {
    class: "luckyWinners__container-wrapper__item-winAmount"
}
  , Ic = F({
    __name: "index",
    setup(s) {
        const {homeState: i, getWinInfoDetail: o, getWinInfo: l} = pe()
          , g = h(null)
          , m = h(null);
        return Lt(async () => {
            await o(),
            na(m.value),
            i.winInfoList.length > 0 && (g.value = setInterval(async () => {
                i.winInfoList.unshift(i.winInfoList.pop())
            }
            , 3e3))
        }
        ),
        Si( () => {
            clearInterval(g.value)
        }
        ),
        (c, u) => {
            const p = Dt("lazy");
            return n(),
            a("div", wc, [t("h1", null, e(c.$t("winningDetal")), 1), t("div", Tc, [t("div", {
                ref_key: "wrapperRef",
                ref: m
            }, [(n(!0),
            a(S, null, G(d(l).slice(0, 6), r => (n(),
            a("div", {
                class: "luckyWinners__container-wrapper__item",
                key: r
            }, [t("div", Cc, [dt(t("img", null, null, 512), [[p, d(Ft)("main/Avatar", r.userPhoto) || d(Ft)("home", "avatar")]])]), t("div", Lc, [t("h1", null, e(d(rn)(r.nickName)), 1)]), t("div", Nc, [dt(t("img", null, null, 512), [[p, r.imgUrl]])]), t("div", zc, [t("h1", null, e(c.$t("titleGot")) + " " + e(d(Ct)(r.amount || 0)), 1), t("span", null, e(c.$t("winningAmount")), 1)])]))), 128))], 512)])])
        }
    }
});
const Ke = V(Ic, [["__scopeId", "data-v-ffb14677"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/LuckyWinners/index.vue"]])
  , xc = "/assets/png/First-1a9152b9.png"
  , Sc = "/assets/png/Second-b37e1d4b.png"
  , Rc = "/assets/png/Third-82965e16.png"
  , kn = s => (Nt("data-v-74b37c48"),
s = s(),
zt(),
s)
  , Bc = {
    class: "mainContainer"
}
  , Gc = {
    key: 0,
    class: "mainContainer_profitContainer_medal"
}
  , Ac = kn( () => t("span", null, [t("img", {
    src: xc
})], -1))
  , Mc = [Ac]
  , Pc = kn( () => t("div", {
    class: "mainContainer_profitContainer_medal"
}, [t("span", null, [t("img", {
    src: Sc
})])], -1))
  , Dc = kn( () => t("div", {
    class: "mainContainer_profitContainer_medal"
}, [t("span", null, [t("img", {
    src: Rc
})])], -1))
  , Oc = {
    class: "mainContainer_profitContainer_medal"
}
  , Ec = {
    class: "numberMedal"
}
  , qc = {
    class: "mainContainer_profitContainer_img"
}
  , jc = {
    class: "mainContainer_profitContainer_title"
}
  , Hc = {
    class: "mainContainer_profitContainer_amount"
}
  , Wc = fi('<div class="mainContainer_profitContainer_bg" data-v-74b37c48><svg xmlns="http://www.w3.org/2000/svg" width="219" height="121" viewBox="0 0 219 121" fill="none" data-v-74b37c48><g filter="url(#filter0_b_2662_26708)" data-v-74b37c48><path d="M45.5192 0.460938H203.298C211.73 0.460938 218.565 7.29628 218.565 15.7281V105.423C218.565 113.855 211.73 120.69 203.298 120.69H0.0534668L23.1907 60.5754L45.5192 0.460938Z" data-v-74b37c48></path></g><defs data-v-74b37c48><filter id="filter0_b_2662_26708" x="-7.58012" y="-7.17265" width="233.779" height="135.494" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" data-v-74b37c48><feFlood flood-opacity="0" result="BackgroundImageFix" data-v-74b37c48></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="3.81679" data-v-74b37c48></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2662_26708" data-v-74b37c48></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2662_26708" result="shape" data-v-74b37c48></feBlend></filter></defs></svg></div>', 1)
  , Fc = F({
    __name: "ProfitRanking",
    setup(s) {
        const {homeState: i} = pe()
          , {desensitizeString: o} = Wo();
        return (l, g) => {
            const m = Dt("lazy");
            return n(),
            a("div", Bc, [(n(!0),
            a(S, null, G(d(i).rankList.slice(0, 9), (c, u) => (n(),
            a("div", {
                class: "mainContainer_profitContainer",
                key: c
            }, [$(" Rank 1 "), u == 0 ? (n(),
            a("div", Gc, Mc)) : u == 1 ? (n(),
            a(S, {
                key: 1
            }, [$(" Rank 2 "), Pc], 2112)) : u == 2 ? (n(),
            a(S, {
                key: 2
            }, [$(" Rank 3 "), Dc], 2112)) : (n(),
            a(S, {
                key: 3
            }, [$(" Rank All "), t("div", Oc, [t("span", Ec, e(u + 1), 1)])], 2112)), t("div", qc, [dt(t("img", null, null, 512), [[m, d(Ft)("main/Avatar", c.userPhoto)]])]), t("div", jc, e(d(o)(c.nickName)), 1), t("div", Hc, e(d(Ct)(c.amount || 0)), 1), Wc]))), 128))])
        }
    }
});
const Ye = V(Fc, [["__scopeId", "data-v-74b37c48"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/goGame/ProfitRanking.vue"]])
  , Vc = {
    class: "originalmainContainer"
}
  , Uc = {
    class: "originalmainContainer_title"
}
  , Kc = {
    class: "GameContainer"
}
  , Xc = {
    class: "GameContainer_games"
}
  , Qc = ["src", "onClick"]
  , Zc = {
    class: "WinningContainer"
}
  , Yc = {
    class: "Winningdata"
}
  , Jc = {
    class: "profitRanking"
}
  , tr = F({
    __name: "index",
    setup(s) {
        const {goGame: i} = yi()
          , {gameData: o} = di()
          , l = Q( () => o.Casino)
          , g = ct()
          , m = () => {
            g.push("/")
        }
        ;
        return (c, u) => (n(),
        a(S, null, [t("div", Vc, [t("div", {
            class: "backSvg",
            onClick: m
        }), t("div", Uc, e(c.$t("live")), 1)]), $(" Games images containers starts from here "), t("div", Kc, [t("div", Xc, [(n(!0),
        a(S, null, G(l.value, (p, r) => (n(),
        a("img", {
            key: r,
            src: p.vendorImg,
            onClick: b => d(i)(p)
        }, null, 8, Qc))), 128))]), C(Ke)]), $(" Today's Profit Ranking "), t("div", Zc, e(c.$t("homename1")), 1), t("div", Yc, [t("div", Jc, [C(Ye)])])], 64))
    }
});
const er = V(tr, [["__scopeId", "data-v-e152b4a0"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/home/Casino/index.vue"]])
  , QB = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: er
}, Symbol.toStringTag, {
    value: "Module"
}))
  , ir = {
    class: "originalmainContainer"
}
  , nr = {
    class: "originalmainContainer_title"
}
  , ar = {
    class: "GameContainer"
}
  , or = {
    class: "GameContainer_games"
}
  , sr = ["src", "onClick"]
  , lr = {
    class: "WinningContainer"
}
  , cr = {
    class: "Winningdata"
}
  , rr = {
    class: "profitRanking"
}
  , ur = F({
    __name: "index",
    setup(s) {
        const {gameData: i} = di()
          , o = Q( () => i.Chess)
          , l = ct()
          , g = () => {
            l.push("/")
        }
          , m = c => {
            sessionStorage.setItem("slotGamesList", JSON.stringify(o.value)),
            sessionStorage.setItem("gameType", JSON.stringify("chess")),
            sessionStorage.setItem("clickedItem", JSON.stringify(c)),
            l.push({
                name: "AllOnlineGames",
                query: {
                    game: "chess",
                    currentId: c.slotsName
                }
            })
        }
        ;
        return (c, u) => (n(),
        a(S, null, [t("div", ir, [t("div", {
            class: "backSvg",
            onClick: g
        }), t("div", nr, e(c.$t("ChessandCards")), 1)]), $(" Games images containers starts from here "), t("div", ar, [t("div", or, [(n(!0),
        a(S, null, G(o.value, (p, r) => (n(),
        a("img", {
            key: r,
            src: p.vendorImg,
            onClick: b => m(p)
        }, null, 8, sr))), 128))]), C(Ke)]), $(" Today's Profit Ranking "), t("div", lr, e(c.$t("homename1")), 1), t("div", cr, [t("div", rr, [C(Ye)])])], 64))
    }
});
const dr = V(ur, [["__scopeId", "data-v-9d069a04"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/home/Chess/index.vue"]])
  , ZB = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: dr
}, Symbol.toStringTag, {
    value: "Module"
}))
  , pr = {
    class: "fish_game"
}
  , gr = {
    class: "fish_list"
}
  , br = ["onClick"]
  , mr = F({
    __name: "index",
    setup(s) {
        const i = Et([])
          , {t: o} = gt()
          , l = () => {
            ra.back()
        }
          , g = async () => {
            const c = await nt(la({
                type: 11
            }));
            c && i.push(...c.data.gameLists)
        }
          , m = c => {
            So({
                title: o("tips"),
                message: o("tipsPlayGame"),
                cancelButtonText: o("cancel"),
                showCancelButton: !0
            }).then(async () => {
                let u = {
                    gameCode: c.gameCode || c.gameID,
                    vendorCode: Number(c.vendorId) || Number(c.slotsTypeID)
                };
                const p = await nt(Fo({
                    ...u,
                    phonetype: Vo()
                }));
                p && Uo(p == null ? void 0 : p.data, 1)
            }
            )
        }
        ;
        return g(),
        (c, u) => {
            const p = W("NavBar")
              , r = Dt("lazy");
            return n(),
            a("div", pr, [C(p, {
                title: c.$t("fishing"),
                backgroundColor: "linear-gradient(90deg, #CF0305 0%, #F23F3A 100%)",
                placeholder: !1,
                "left-arrow": "",
                onClickLeft: l
            }, null, 8, ["title"]), t("div", gr, [(n(!0),
            a(S, null, G(i, b => dt((n(),
            a("img", {
                class: "gameImg",
                key: b.vendorId,
                onClick: _ => m(b)
            }, null, 8, br)), [[r, b.img]])), 128))])])
        }
    }
});
const _r = V(mr, [["__scopeId", "data-v-50e7ebdb"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/home/FishGames/index.vue"]])
  , YB = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: _r
}, Symbol.toStringTag, {
    value: "Module"
}))
  , vr = {
    class: "originalmainContainer"
}
  , kr = {
    class: "originalmainContainer_title"
}
  , hr = {
    class: "GameContainer"
}
  , fr = {
    class: "GameContainer_games"
}
  , yr = ["src", "onClick"]
  , $r = {
    class: "WinningContainer"
}
  , wr = {
    class: "Winningdata"
}
  , Tr = {
    class: "profitRanking"
}
  , Cr = F({
    __name: "index",
    setup(s) {
        const {goGame: i} = yi()
          , {gameData: o} = di()
          , l = Q( () => o.Fish)
          , g = ct()
          , m = () => {
            g.push("/")
        }
        ;
        return (c, u) => (n(),
        a(S, null, [t("div", vr, [t("div", {
            class: "backSvg",
            onClick: m
        }), t("div", kr, e(c.$t("code9303Fish")), 1)]), $(" Games images containers starts from here "), t("div", hr, [t("div", fr, [(n(!0),
        a(S, null, G(l.value, (p, r) => (n(),
        a("img", {
            key: r,
            src: p.img,
            onClick: b => d(i)(p)
        }, null, 8, yr))), 128))]), C(Ke)]), $(" Today's Profit Ranking "), t("div", $r, e(c.$t("homename1")), 1), t("div", wr, [t("div", Tr, [C(Ye)])])], 64))
    }
});
const Lr = V(Cr, [["__scopeId", "data-v-3490866d"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/home/Fishing/index.vue"]])
  , JB = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Lr
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Nr = s => (Nt("data-v-127acf74"),
s = s(),
zt(),
s)
  , zr = Nr( () => t("div", {
    class: "originalmainContainer_title"
}, "HotGames", -1))
  , Ir = {
    class: "GameContainer"
}
  , xr = {
    class: "GameContainer_games"
}
  , Sr = ["src", "onClick"]
  , Rr = F({
    __name: "index",
    setup(s) {
        const {goGame: i} = yi();
        gt();
        const o = ct();
        Ko();
        const l = h([])
          , g = async () => {
            const c = await nt(Ri());
            if (c) {
                const {clicksVideoTopList: u, clicksTopList: p, platformList: r} = c.data.popular;
                l.value = [...r, ...p, ...u]
            }
        }
          , m = () => {
            o.push("/")
        }
        ;
        return Lt( () => {
            g()
        }
        ),
        (c, u) => (n(),
        a(S, null, [t("div", {
            class: "originalmainContainer"
        }, [t("div", {
            class: "backSvg",
            onClick: m
        }), zr]), $(" Games images containers starts from here "), t("div", Ir, [t("div", xr, [(n(!0),
        a(S, null, G(l.value, (p, r) => (n(),
        a("img", {
            key: r,
            src: p.imgUrl,
            onClick: b => d(i)(p)
        }, null, 8, Sr))), 128))])])], 64))
    }
});
const Br = V(Rr, [["__scopeId", "data-v-127acf74"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/home/HotGames/index.vue"]])
  , tG = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Br
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Ai = s => (Nt("data-v-b8ad632c"),
s = s(),
zt(),
s)
  , Gr = {
    class: "topContainer"
}
  , Ar = {
    class: "title"
}
  , Mr = {
    class: "lotteryBanner"
}
  , Pr = {
    class: "banner"
}
  , Dr = {
    class: "insideBanner"
}
  , Or = {
    class: "Firstbanner"
}
  , Er = Ai( () => t("span", {
    class: "line"
}, null, -1))
  , qr = {
    class: "insideFirstbanner"
}
  , jr = Ai( () => t("br", null, null, -1))
  , Hr = {
    class: "Lastbanner"
}
  , Wr = ["onClick"]
  , Fr = {
    class: "insideMainContainer"
}
  , Vr = ["src"]
  , Ur = {
    class: "Typo"
}
  , Kr = Ai( () => t("br", null, null, -1))
  , Xr = Ai( () => t("br", null, null, -1))
  , Qr = fi('<div class="GoBtn" data-v-b8ad632c><svg width="43" height="28" viewBox="0 0 43 28" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-b8ad632c><circle cx="33.751" cy="33.1044" r="33" transform="rotate(-90 33.751 33.1044)" fill-opacity="0.2" fill="#304452" data-v-b8ad632c></circle><path d="M19.0063 13.0597C18.9751 12.8295 18.9182 12.6236 18.8358 12.4418C18.7535 12.2571 18.6427 12.1009 18.5035 11.973C18.3643 11.8423 18.1952 11.7429 17.9964 11.6747C17.7975 11.6065 17.566 11.5724 17.3018 11.5724C16.833 11.5724 16.3884 11.6903 15.968 11.9261C15.5475 12.1619 15.1881 12.5085 14.8898 12.9659C14.5915 13.4205 14.3884 13.9744 14.2805 14.6278C14.1725 15.2869 14.1782 15.8452 14.2975 16.3026C14.4168 16.7599 14.6356 17.108 14.9537 17.3466C15.2748 17.5824 15.6782 17.7003 16.164 17.7003C16.61 17.7003 17.0148 17.6151 17.3785 17.4446C17.7421 17.2741 18.0432 17.0327 18.2819 16.7202C18.5233 16.4048 18.6768 16.0355 18.7421 15.6122L19.0915 15.6676H16.718L16.931 14.4318H20.4722L20.2932 15.4801C20.1711 16.2301 19.9055 16.8778 19.4964 17.4233C19.0901 17.9659 18.583 18.3849 17.9751 18.6804C17.3699 18.973 16.7066 19.1193 15.985 19.1193C15.1839 19.1193 14.5091 18.9389 13.9608 18.5781C13.4154 18.2145 13.029 17.6989 12.8018 17.0312C12.5745 16.3608 12.5376 15.5653 12.691 14.6449C12.8046 13.9403 13.0063 13.3111 13.2961 12.7571C13.5887 12.2031 13.9466 11.733 14.3699 11.3466C14.7961 10.9574 15.2691 10.6619 15.789 10.4602C16.3089 10.2557 16.8543 10.1534 17.4253 10.1534C17.9055 10.1534 18.343 10.2244 18.7378 10.3665C19.1327 10.5057 19.4708 10.7045 19.752 10.9631C20.0361 11.2216 20.2535 11.5284 20.404 11.8835C20.5546 12.2386 20.6256 12.6307 20.6171 13.0597H19.0063ZM24.0422 19.1278C23.3973 19.1278 22.8604 18.9858 22.4314 18.7017C22.0052 18.4176 21.7055 18.0185 21.5322 17.5043C21.3589 16.9901 21.3277 16.3935 21.4385 15.7145C21.5493 15.044 21.7709 14.4574 22.1032 13.9545C22.4385 13.4517 22.8604 13.0625 23.3689 12.7869C23.8802 12.5085 24.4527 12.3693 25.0862 12.3693C25.7311 12.3693 26.2666 12.5128 26.6927 12.7997C27.1189 13.0838 27.4186 13.483 27.5919 13.9972C27.768 14.5114 27.8007 15.1108 27.6899 15.7955C27.5819 16.4631 27.3589 17.0469 27.0209 17.5469C26.6856 18.0469 26.2638 18.4361 25.7552 18.7145C25.2467 18.9901 24.6757 19.1278 24.0422 19.1278ZM24.17 17.892C24.528 17.892 24.8419 17.7955 25.1118 17.6023C25.3845 17.4062 25.6075 17.1435 25.7808 16.8139C25.9569 16.4815 26.0791 16.1122 26.1473 15.706C26.2098 15.3139 26.2112 14.9588 26.1515 14.6406C26.0919 14.3196 25.964 14.0653 25.768 13.8778C25.5748 13.6875 25.3064 13.5923 24.9626 13.5923C24.6047 13.5923 24.2879 13.6918 24.0123 13.8906C23.7396 14.0866 23.5166 14.3509 23.3433 14.6832C23.17 15.0128 23.0507 15.3807 22.9854 15.7869C22.92 16.179 22.9172 16.5341 22.9768 16.8523C23.0365 17.1705 23.1643 17.4233 23.3604 17.6108C23.5564 17.7983 23.8263 17.892 24.17 17.892Z" data-v-b8ad632c></path><path d="M31.2926 12.4784L30.5439 13.2271L32.8169 15.5001L30.5439 17.7731L31.2926 18.5217L34.3142 15.5001L31.2926 12.4784Z" data-v-b8ad632c></path><path d="M35.0629 12.4784L34.3143 13.2271L36.5873 15.5001L34.3143 17.7731L35.0629 18.5217L38.0846 15.5001L35.0629 12.4784Z" data-v-b8ad632c></path></svg></div>', 1)
  , Zr = {
    class: "Winningdata"
}
  , Yr = {
    class: "WinningContainer"
}
  , Jr = {
    class: "Winningdata"
}
  , tu = {
    class: "profitRanking"
}
  , eu = F({
    __name: "index",
    setup(s) {
        const {t: i} = gt()
          , o = ct()
          , {gameData: l} = di()
          , g = Q( () => l.Lottery)
          , m = {
            1: {
                title: i("lotteryHintStr1"),
                describe: i("lotteryHintStr2"),
                RouterName: "AllLotteryGames-WinGo"
            },
            2: {
                title: i("lotteryHintStr1"),
                describe: i("lotteryHintStr2"),
                RouterName: "AllLotteryGames-K3"
            },
            3: {
                title: i("lotteryHintStr1"),
                describe: i("lotteryHintStr4"),
                RouterName: "AllLotteryGames-5D"
            },
            4: {
                title: i("lotteryHintStr1"),
                describe: i("lotteryHintStr2"),
                RouterName: "AllLotteryGames-WinTrx"
            },
            5: {
                title: i("vietnamOfficialLottery"),
                describe: i("lotteryHintStr6"),
                RouterName: "AllLotteryGames-XoSo"
            },
            6: {
                title: i("vietnamOfficialLottery"),
                describe: i("lotteryHintStr6"),
                RouterName: "AllLotteryGames-XoSo"
            },
            7: {
                title: i("vietnamOfficialLottery"),
                describe: i("lotteryHintStr6"),
                RouterName: "AllLotteryGames-Binguo"
            },
            8: {
                title: i("lotteryHintStr1"),
                describe: i("lotteryHintStr2"),
                RouterName: "AllLotteryGames-4D"
            }
        }
          , c = r => {
            let b;
            (r == 6 || r == 5) && (b = {
                id: r
            }),
            o.push({
                name: m[r].RouterName,
                query: b
            })
        }
          , u = r => {
            o.push({
                name: r
            })
        }
          , p = () => {
            o.push("/")
        }
        ;
        return (r, b) => (n(),
        a(S, null, [t("div", Gr, [t("div", {
            class: "backSvg",
            onClick: p
        }), t("div", Ar, e(r.$t("code9301")), 1)]), $(" Top Container finish here  "), t("div", Mr, [t("div", Pr, [t("div", Dr, [t("div", Or, [Er, t("div", qr, [E(e(r.$t("wingoLng")), 1), jr, t("span", null, e(r.$t("lotteryResultFive")), 1)])]), t("div", Hr, [t("div", {
            class: "btnLottery",
            onClick: b[0] || (b[0] = _ => u("AllLotteryGames-ChangLong"))
        }, e(r.$t("dragonEntry")) + " >>", 1)])])])]), $(" Third container starts from here  "), (n(!0),
        a(S, null, G(g.value.slice(0, 4), (_, w) => {
            var T, N;
            return n(),
            a("div", {
                class: "MainContainer",
                key: w,
                onClick: v => c(_.id)
            }, [t("div", Fr, [t("img", {
                src: _.categoryImg,
                alt: ""
            }, null, 8, Vr), t("div", Ur, [t("span", null, e(_.categoryCode), 1), Kr, t("pre", null, e((T = m[_.id]) == null ? void 0 : T.title), 1), t("span", null, [Xr, E(e((N = m[_.id]) == null ? void 0 : N.describe), 1)])]), Qr])], 8, Wr)
        }
        ), 128)), t("div", Zr, [C(Ke)]), $(" Today's Profit Ranking "), t("div", Yr, e(r.$t("homename1")), 1), t("div", Jr, [t("div", tu, [C(Ye)])])], 64))
    }
});
const iu = V(eu, [["__scopeId", "data-v-b8ad632c"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/home/Lottery/index.vue"]])
  , eG = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: iu
}, Symbol.toStringTag, {
    value: "Module"
}))
  , nu = {
    class: "sysMessage__container"
}
  , au = {
    class: "sysMessage__container-msgWrapper__item-title"
}
  , ou = {
    class: "sysMessage__container-msgWrapper__item-time"
}
  , su = {
    class: "sysMessage__container-msgWrapper__item-content"
}
  , lu = F({
    __name: "index",
    setup(s) {
        const {t: i} = gt()
          , {setLoading: o} = Bi()
          , l = h()
          , g = De()
          , m = ct()
          , c = h(!1)
          , u = h([])
          , p = un()
          , r = h({
            pageSize: 25
        });
        function b() {
            m.back()
        }
        async function _() {
            const N = un();
            await Xo({
                state: 1
            }).then(v => {
                v && N.setReadState(!0)
            }
            ).catch(v => {}
            )
        }
        function w(N) {
            aa({
                title: i("warning"),
                message: i("warningTxt1")
            }).then(async () => {
                if (await nt(dn({
                    messageID: N.messageID,
                    state: 2
                }))) {
                    let k = u.value;
                    u.value = k.filter(y => y.messageID !== N.messageID)
                }
            }
            )
        }
        const T = g.getUserInfo;
        return Lt(async () => {
            o(!0),
            await _(),
            o(!1),
            l.value.resetRefresh(),
            T.unRead = 0,
            g.setUserInfo({
                ...T
            }),
            p.setReadState(!0)
        }
        ),
        (N, v) => {
            const k = W("NavBar")
              , y = W("svg-icon");
            return n(),
            a("div", nu, [C(k, {
                title: d(i)("notifications"),
                backgroundColor: "#f7f8ff",
                "left-arrow": "",
                onClickLeft: b
            }, null, 8, ["title"]), C(ua, {
                ref_key: "msgWrapperRef",
                ref: l,
                list: u.value,
                "onUpdate:list": v[0] || (v[0] = f => u.value = f),
                "page-query": r.value,
                "onUpdate:pageQuery": v[1] || (v[1] = f => r.value = f),
                api: d(Zo),
                distance: 100,
                isAutoLoad: c.value
            }, {
                content: P( () => [(n(!0),
                a(S, null, G(u.value, f => (n(),
                a("div", {
                    class: "sysMessage__container-msgWrapper__item",
                    key: f.messageID
                }, [t("div", au, [$(' <component :is="item.state === 0 ? icons.messageIconRed : icons.messageIconIsRead" /> '), t("div", null, [C(y, {
                    class: "svg",
                    name: f.state === 0 ? "messageIconRed" : "notification"
                }, null, 8, ["name"]), t("span", null, e(d(Qo)(f.title, 20)), 1)]), C(y, {
                    class: "svg",
                    name: "messageGarbage",
                    onClick: z => w(f)
                }, null, 8, ["onClick"]), $(` <component
							:is="icons.messageGarbage"
							@click="($event: Event) => { $event.stopPropagation(); onDeleteClick(item) }"
						/> `)]), t("div", ou, e(f.addTime), 1), t("div", su, e(f.messages), 1)]))), 128))]),
                _: 1
            }, 8, ["list", "page-query", "api", "isAutoLoad"])])
        }
    }
});
const cu = V(lu, [["__scopeId", "data-v-8084bf25"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/home/Messages/index.vue"]])
  , iG = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: cu
}, Symbol.toStringTag, {
    value: "Module"
}))
  , ru = {
    class: "originalmainContainer"
}
  , uu = {
    class: "originalmainContainer_title"
}
  , du = {
    class: "GameContainer"
}
  , pu = {
    class: "GameContainer_games"
}
  , gu = ["src", "onClick"]
  , bu = {
    class: "WinningContainer"
}
  , mu = {
    class: "Winningdata"
}
  , _u = {
    class: "profitRanking"
}
  , vu = F({
    __name: "index",
    setup(s) {
        const {goGame: i} = yi()
          , o = ct()
          , l = h([])
          , g = async () => {
            const c = await nt(Ri());
            c && (l.value = c.data.flash)
        }
          , m = () => {
            o.push("/")
        }
        ;
        return Lt( () => {
            g()
        }
        ),
        (c, u) => (n(),
        a(S, null, [t("div", ru, [t("div", {
            class: "backSvg",
            onClick: m
        }), t("div", uu, e(c.$t("code9308Flash")), 1)]), $(" Games images containers starts from here "), t("div", du, [t("div", pu, [(n(!0),
        a(S, null, G(l.value, (p, r) => (n(),
        a("img", {
            key: r,
            src: p.img,
            onClick: b => d(i)(p)
        }, null, 8, gu))), 128))]), C(Ke)]), $(" Today's Profit Ranking "), t("div", bu, e(c.$t("homename1")), 1), t("div", mu, [t("div", _u, [C(Ye)])])], 64))
    }
});
const ku = V(vu, [["__scopeId", "data-v-c9357f63"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/home/Original/index.vue"]])
  , nG = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: ku
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Ga = s => (Nt("data-v-dbfeadbc"),
s = s(),
zt(),
s)
  , hu = {
    class: "topContainer"
}
  , fu = {
    class: "title"
}
  , yu = {
    class: "slot_list"
}
  , $u = {
    class: "awardbox"
}
  , wu = {
    class: "title"
}
  , Tu = ["src"]
  , Cu = {
    class: "award_tip"
}
  , Lu = Ga( () => t("br", null, null, -1))
  , Nu = {
    class: "amount"
}
  , zu = {
    class: "list"
}
  , Iu = {
    class: "big_prize"
}
  , xu = {
    class: "info"
}
  , Su = {
    class: "text"
}
  , Ru = {
    class: "tit"
}
  , Bu = {
    class: "multiple"
}
  , Gu = {
    class: "award"
}
  , Au = Ga( () => t("div", {
    class: "Slot_game"
}, "Slot Game", -1))
  , Mu = {
    class: "GameContainer"
}
  , Pu = {
    class: "GameContainer_games"
}
  , Du = ["src", "onClick"]
  , Ou = {
    class: "WinningContainer"
}
  , Eu = {
    class: "Winningdata"
}
  , qu = {
    class: "profitRanking"
}
  , ju = F({
    __name: "index",
    setup(s) {
        const {gameData: i} = di()
          , o = Q( () => i.Slot)
          , l = Pe()
          , g = Q( () => l.getJackportMaxReswadAmount)
          , m = h([])
          , c = h([])
          , u = ct()
          , p = async () => {
            const w = await nt(Yo());
            w && (c.value = w.data)
        }
          , r = w => {
            sessionStorage.setItem("slotGamesList", JSON.stringify(o.value)),
            sessionStorage.setItem("gameType", JSON.stringify("slot")),
            sessionStorage.setItem("clickedItem", JSON.stringify(w)),
            u.push({
                name: "AllOnlineGames",
                query: {
                    game: "slot",
                    currentId: w.slotsName
                }
            })
        }
          , b = async () => {
            const w = await nt(Ri());
            m.value = w.data.awardRecordList || {}
        }
          , _ = () => {
            u.push({
                path: "/main/SuperJackpot"
            })
        }
        ;
        return p(),
        b(),
        (w, T) => (n(),
        a(S, null, [t("div", hu, [t("div", {
            class: "backSvg",
            onClick: T[0] || (T[0] = N => d(u).back())
        }), t("div", fu, e(w.$t("code9304Slot")), 1)]), t("div", yu, [$(" big jiang "), t("div", $u, [t("div", wu, [t("img", {
            src: d(Ft)("home", "award"),
            alt: ""
        }, null, 8, Tu), E(" " + e(w.$t("code9309")), 1)]), t("div", Cu, [E(e(w.$t("awarDesc1")), 1), Lu, E(" " + e(w.$t("awarDesc2")) + " ", 1), t("span", Nu, e(d(Ct)(g.value)), 1)]), t("div", zu, [(n(!0),
        a(S, null, G(m.value.slice(0, 3), N => (n(),
        a("div", Iu, [t("div", {
            class: "bg",
            style: le({
                backgroundImage: `url(${N.imgUrl})`
            })
        }, null, 4), t("div", xu, [t("div", Su, [t("div", Ru, e(N == null ? void 0 : N.gameName), 1), t("div", Bu, e(N == null ? void 0 : N.multiple) + "X", 1)]), t("div", Gu, e(d(Ct)(N == null ? void 0 : N.bonusAmount)), 1)])]))), 256))]), t("div", {
            class: "look_more",
            onClick: _
        }, e(w.$t("lookBigAward")) + " >>", 1)]), Au, $(" Games images containers starts from here "), t("div", Mu, [t("div", Pu, [(n(!0),
        a(S, null, G(o.value, (N, v) => (n(),
        a("img", {
            key: v,
            src: N.vendorImg,
            onClick: k => r(N)
        }, null, 8, Du))), 128))]), C(Ke)]), $(" Today's Profit Ranking "), t("div", Ou, e(w.$t("homename1")), 1), t("div", Eu, [t("div", qu, [C(Ye)])])])], 64))
    }
});
const Hu = V(ju, [["__scopeId", "data-v-dbfeadbc"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/home/Slots/index.vue"]])
  , aG = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Hu
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Wu = {
    class: "originalmainContainer"
}
  , Fu = {
    class: "originalmainContainer_title"
}
  , Vu = {
    class: "GameContainer"
}
  , Uu = {
    class: "GameContainer_games"
}
  , Ku = ["src", "onClick"]
  , Xu = {
    class: "WinningContainer"
}
  , Qu = {
    class: "Winningdata"
}
  , Zu = {
    class: "profitRanking"
}
  , Yu = F({
    __name: "index",
    setup(s) {
        const {goGame: i} = yi()
          , {gameData: o} = di()
          , l = Q( () => o.Sport)
          , g = ct()
          , m = () => {
            g.push("/")
        }
        ;
        return (c, u) => (n(),
        a(S, null, [t("div", Wu, [t("div", {
            class: "backSvg",
            onClick: m
        }), t("div", Fu, e(c.$t("PhysicalEducation")), 1)]), $(" Games images containers starts from here "), t("div", Vu, [t("div", Uu, [(n(!0),
        a(S, null, G(l.value, (p, r) => (n(),
        a("img", {
            key: r,
            src: p.vendorImg,
            onClick: b => d(i)(p)
        }, null, 8, Ku))), 128))]), C(Ke)]), $(" Today's Profit Ranking "), t("div", Xu, e(c.$t("homename1")), 1), t("div", Qu, [t("div", Zu, [C(Ye)])])], 64))
    }
});
const Ju = V(Yu, [["__scopeId", "data-v-f8ca9d4e"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/home/eSports/index.vue"]])
  , oG = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Ju
}, Symbol.toStringTag, {
    value: "Module"
}))
  , td = s => (Nt("data-v-bc67dde2"),
s = s(),
zt(),
s)
  , ed = {
    class: "game-iframe"
}
  , id = ["src"]
  , nd = td( () => t("img", {
    src: Jo,
    alt: ""
}, null, -1))
  , ad = [nd]
  , od = F({
    __name: "index",
    setup(s) {
        const i = Ze()
          , o = h(null)
          , l = h(!1)
          , {x: g, y: m, style: c} = Ro(o, {
            initialValue: {
                x: 30,
                y: 30
            },
            preventDefault: !0,
            onMove: () => {
                l.value = !0
            }
            ,
            onEnd: () => {
                setTimeout( () => l.value = !1)
            }
        })
          , u = Q( () => {
            const b = i.query.url;
            if (!b)
                return "";
            const _ = ts(b || "");
            return _.startsWith("https:") ? _ : `data:text/html;charset=utf-8,${encodeURIComponent(_)}`
        }
        )
          , p = ct()
          , r = () => {
            l.value || p.push({
                name: "home"
            })
        }
        ;
        return (b, _) => (n(),
        a("div", ed, [u.value ? (n(),
        a("iframe", {
            key: 0,
            src: u.value
        }, null, 8, id)) : $("v-if", !0), t("div", {
            class: "close",
            ref_key: "el",
            ref: o,
            style: le(d(c)),
            onClick: r
        }, ad, 4)]))
    }
});
const sd = V(od, [["__scopeId", "data-v-bc67dde2"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/home/game/index.vue"]])
  , sG = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: sd
}, Symbol.toStringTag, {
    value: "Module"
}))
  , ld = [{
    typeID: 13,
    typeName: "Trx Win Go<br />1Min",
    tabName: "Trx 1Min",
    intervalM: 1,
    scope: "1000|10000|100000|1000000",
    sort: 1,
    gamePresentation: '<p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Giá trị băm là gì?</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Bất kỳ ai biết những điều cơ bản về Bitcoin sẽ được tiếp xúc với một khái niệm, một giá trị băm. Tiêu đề khối của Bitcoin có một hàm băm của khối trước đó dùng để chỉ đến khối trước đó.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Hash là phiên âm của Hash trong tiếng Anh, chúng ta cũng có thể dịch nó thành băm, vì vậy còn được gọi là giá trị băm. Giá trị băm là một giá trị được tính bằng hàm băm (hoặc hàm băm / thuật toán băm). Để hiểu các giá trị băm, Cần phải hiểu các thuộc tính của hàm băm. Một hàm băm có thể biến đổi một cách tính toán đầu vào có độ dài tùy ý thành đầu ra có độ dài cố định.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Mỗi hàm băm có các thuộc tính sau: Nếu giá trị nhập vào giống nhau, Giá trị băm chuyển ra giống nhau,Nếu giá trị nhập vào khác,thì giá trị băm chuyển ra thường khác. Nhưng khả năng xảy ra xung đột băm là cực kỳ nhỏ. Nếu trong lúc nhập vào có sự thay đổi xung đột băm sẽ được giải trừ , sau đó xuất ra một giá trị băm hoàn toàn không liên quan. Vì hàm băm là không thể thay đổi và dễ dàng xác minh, Hầu như không thể đảo ngược giá trị nhập vào từ giá trị từ giá trị băm chuyển ra , Nếu có giá trị nhập vào, giá trị băm tương ứng có thể được xác minh ngay lập tức.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Do đó, giá trị băm của mỗi khối là duy nhất, ngẫu nhiên, không thể phá vỡ, không thể làm giả, giá trị băm của khối được tự động xác định và bản ghi không thể bị giả mạo.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Có bao nhiêu loại USDT?</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">1.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Omni-USDT dựa trên mạng Bitcoin, địa chỉ nạp tiền là địa chỉ BTC, gửi và rút tiền thông qua mạng BTC;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">2.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">ERC20-USDT dựa trên giao thức Ethereum ERC20, địa chỉ nạp tiền là địa chỉ ETH, gửi và rút tiền thông qua mạng ETH;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">3.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">TRC20-USDT dựa trên giao thức TRON TRC20 và mạng TRX (TRON), địa chỉ gửi tiền là địa chỉ TRON, và việc gửi và rút tiền đi qua mạng TRON.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">TrxHash là một mã băm khối của TRC20-USDT dựa trên giao thức TRON TRC20 và mạng TRX (TRON). Số cuối cùng được sử dụng làm kết quả để xác định xem bạn có trúng thưởng hay không (nhấp vào Chiều cao khối để chuyển đến chuỗi công khai để truy vấn hàm băm Khối duy nhất-Block hash)</span><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 8pt;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Luật chơi như sau :</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">1.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">1 phút mở thưởng 1 lần, 55 giây đặt cươc, Không thể cược trong vòng 5 giây cuối cùng .</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">2 .&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Sau khi đóng , băm khối của khối được tạo mới được sử dụng làm kết quả&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">mở thưởng.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">3 .&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Tổng số lượt mở thưởng trong một ngày là 1440 lượt.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><br></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">4. Nếu bạn thực hiện một giao dịch cược là 100, sẽ có khoản khấu trừ phí là 2%, do đó khoản đặt cược thực tế của bạn sẽ là 98.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">5 . 3 phút , 5 phút , 10 phút luật chơi giống 1 phút, chỉ có thời gian mở thưởng không giống nhau.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">6.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Chữ số cuối cùng của</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">giá trị băm (</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Block hash</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">)</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;được sử dụng làm kết quả&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">:</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Ví dụ:</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Giá trị băm (</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Block hash</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">)</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">**b569</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;&nbsp;<font face="等线">Kết quả mở thưởng là 9.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Giá trị băm (</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Block hash</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">)&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">**d14c</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;&nbsp;<font face="等线">Kết quả mở thưởng là 4.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><font face="等线">. Ch</font><font face="微软雅黑">ọ</font><font face="等线">n màu xanh: N</font><font face="微软雅黑">ế</font><font face="等线">u k</font><font face="微软雅黑">ế</font><font face="等线">t qu</font><font face="微软雅黑">ả&nbsp;</font><font face="等线">hi</font><font face="微软雅黑">ệ</font><font face="等线">n th</font><font face="微软雅黑">ị&nbsp;</font><font face="等线">1,3,7,9 b</font><font face="微软雅黑">ạ</font><font face="等线">n s</font><font face="微软雅黑">ẽ&nbsp;</font><font face="等线">nh</font><font face="微软雅黑">ậ</font><font face="等线">n đư</font><font face="微软雅黑">ợ</font><font face="等线">c(98*2)=196; N</font><font face="微软雅黑">ế</font><font face="等线">u k</font><font face="微软雅黑">ế</font><font face="等线">t qu</font><font face="微软雅黑">ả&nbsp;</font><font face="等线">hi</font><font face="微软雅黑">ệ</font><font face="等线">n th</font><font face="微软雅黑">ị&nbsp;</font><font face="等线">5, b</font><font face="微软雅黑">ạ</font><font face="等线">n</font></span><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><font face="等线">s</font><font face="微软雅黑">ẽ&nbsp;</font><font face="等线">nh</font><font face="微软雅黑">ậ</font><font face="等线">n đư</font><font face="微软雅黑">ợ</font><font face="等线">c (98*1.5)=147.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn màu đỏ: Nếu kết quả hiện thị 2,4,6,8, bạn sẽ nhận được (98*2)=196; Nếu kết quả hiện thị 0, bạn sẽ nhận được (98*1.5)=147.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn màu tím: Nếu kết quả hiện thị 0 hoặc 5, thì bạn sẽ nhận được (98*4.5)=441.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn số : Nếu kết quả mở giống như kết quả bạn đã chọn, bạn sẽ nhận được (98*9)=882</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn lớn&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Big</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">: Nếu kết quả hiện thị 5,6,7,8,9 bạn sẽ nhận được (98*2)=196.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 0pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn nhỏ&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Small</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">: Nếu kết quả hiện thị 0,1,2,3,4 bạn sẽ nhận được (98*2)=196.</font></span></p>'
}, {
    typeID: 14,
    typeName: "Trx Win Go<br />3Min",
    tabName: "Trx 3Min",
    intervalM: 3,
    scope: "1000|10000|100000|1000000",
    sort: 2,
    gamePresentation: '<p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Giá trị băm là gì?</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Bất kỳ ai biết những điều cơ bản về Bitcoin sẽ được tiếp xúc với một khái niệm, một giá trị băm. Tiêu đề khối của Bitcoin có một hàm băm của khối trước đó dùng để chỉ đến khối trước đó.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Hash là phiên âm của Hash trong tiếng Anh, chúng ta cũng có thể dịch nó thành băm, vì vậy còn được gọi là giá trị băm. Giá trị băm là một giá trị được tính bằng hàm băm (hoặc hàm băm / thuật toán băm). Để hiểu các giá trị băm, Cần phải hiểu các thuộc tính của hàm băm. Một hàm băm có thể biến đổi một cách tính toán đầu vào có độ dài tùy ý thành đầu ra có độ dài cố định.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Mỗi hàm băm có các thuộc tính sau: Nếu giá trị nhập vào giống nhau, Giá trị băm chuyển ra giống nhau,Nếu giá trị nhập vào khác,thì giá trị băm chuyển ra thường khác. Nhưng khả năng xảy ra xung đột băm là cực kỳ nhỏ. Nếu trong lúc nhập vào có sự thay đổi xung đột băm sẽ được giải trừ , sau đó xuất ra một giá trị băm hoàn toàn không liên quan. Vì hàm băm là không thể thay đổi và dễ dàng xác minh, Hầu như không thể đảo ngược giá trị nhập vào từ giá trị từ giá trị băm chuyển ra , Nếu có giá trị nhập vào, giá trị băm tương ứng có thể được xác minh ngay lập tức.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Do đó, giá trị băm của mỗi khối là duy nhất, ngẫu nhiên, không thể phá vỡ, không thể làm giả, giá trị băm của khối được tự động xác định và bản ghi không thể bị giả mạo.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Có bao nhiêu loại USDT?</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">1.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Omni-USDT dựa trên mạng Bitcoin, địa chỉ nạp tiền là địa chỉ BTC, gửi và rút tiền thông qua mạng BTC;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">2.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">ERC20-USDT dựa trên giao thức Ethereum ERC20, địa chỉ nạp tiền là địa chỉ ETH, gửi và rút tiền thông qua mạng ETH;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">3.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">TRC20-USDT dựa trên giao thức TRON TRC20 và mạng TRX (TRON), địa chỉ gửi tiền là địa chỉ TRON, và việc gửi và rút tiền đi qua mạng TRON.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">TrxHash là một mã băm khối của TRC20-USDT dựa trên giao thức TRON TRC20 và mạng TRX (TRON). Số cuối cùng được sử dụng làm kết quả để xác định xem bạn có trúng thưởng hay không (nhấp vào Chiều cao khối để chuyển đến chuỗi công khai để truy vấn hàm băm Khối duy nhất-Block hash)</span><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 8pt;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Luật chơi như sau :</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">1.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">1 phút mở thưởng 1 lần, 55 giây đặt cươc, Không thể cược trong vòng 5 giây cuối cùng .</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">2 .&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Sau khi đóng , băm khối của khối được tạo mới được sử dụng làm kết quả&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">mở thưởng.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">3 .&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Tổng số lượt mở thưởng trong một ngày là 1440 lượt.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><br></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">4. Nếu bạn thực hiện một giao dịch cược là 100, sẽ có khoản khấu trừ phí là 2%, do đó khoản đặt cược thực tế của bạn sẽ là 98.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">5 . 3 phút , 5 phút , 10 phút luật chơi giống 1 phút, chỉ có thời gian mở thưởng không giống nhau.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">6.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Chữ số cuối cùng của</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">giá trị băm (</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Block hash</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">)</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;được sử dụng làm kết quả&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">:</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Ví dụ:</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Giá trị băm (</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Block hash</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">)</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">**b569</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;&nbsp;<font face="等线">Kết quả mở thưởng là 9.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Giá trị băm (</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Block hash</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">)&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">**d14c</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;&nbsp;<font face="等线">Kết quả mở thưởng là 4.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><font face="等线">. Ch</font><font face="微软雅黑">ọ</font><font face="等线">n màu xanh: N</font><font face="微软雅黑">ế</font><font face="等线">u k</font><font face="微软雅黑">ế</font><font face="等线">t qu</font><font face="微软雅黑">ả&nbsp;</font><font face="等线">hi</font><font face="微软雅黑">ệ</font><font face="等线">n th</font><font face="微软雅黑">ị&nbsp;</font><font face="等线">1,3,7,9 b</font><font face="微软雅黑">ạ</font><font face="等线">n s</font><font face="微软雅黑">ẽ&nbsp;</font><font face="等线">nh</font><font face="微软雅黑">ậ</font><font face="等线">n đư</font><font face="微软雅黑">ợ</font><font face="等线">c(98*2)=196; N</font><font face="微软雅黑">ế</font><font face="等线">u k</font><font face="微软雅黑">ế</font><font face="等线">t qu</font><font face="微软雅黑">ả&nbsp;</font><font face="等线">hi</font><font face="微软雅黑">ệ</font><font face="等线">n th</font><font face="微软雅黑">ị&nbsp;</font><font face="等线">5, b</font><font face="微软雅黑">ạ</font><font face="等线">n</font></span><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><font face="等线">s</font><font face="微软雅黑">ẽ&nbsp;</font><font face="等线">nh</font><font face="微软雅黑">ậ</font><font face="等线">n đư</font><font face="微软雅黑">ợ</font><font face="等线">c (98*1.5)=147.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn màu đỏ: Nếu kết quả hiện thị 2,4,6,8, bạn sẽ nhận được (98*2)=196; Nếu kết quả hiện thị 0, bạn sẽ nhận được (98*1.5)=147.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn màu tím: Nếu kết quả hiện thị 0 hoặc 5, thì bạn sẽ nhận được (98*4.5)=441.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn số : Nếu kết quả mở giống như kết quả bạn đã chọn, bạn sẽ nhận được (98*9)=882</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn lớn&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Big</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">: Nếu kết quả hiện thị 5,6,7,8,9 bạn sẽ nhận được (98*2)=196.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 0pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn nhỏ&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Small</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">: Nếu kết quả hiện thị 0,1,2,3,4 bạn sẽ nhận được (98*2)=196.</font></span></p>'
}, {
    typeID: 15,
    typeName: "Trx Win Go<br />5Min",
    tabName: "Trx 5Min",
    intervalM: 5,
    scope: "1000|10000|100000|1000000",
    sort: 3,
    gamePresentation: '<p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Giá trị băm là gì?</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Bất kỳ ai biết những điều cơ bản về Bitcoin sẽ được tiếp xúc với một khái niệm, một giá trị băm. Tiêu đề khối của Bitcoin có một hàm băm của khối trước đó dùng để chỉ đến khối trước đó.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Hash là phiên âm của Hash trong tiếng Anh, chúng ta cũng có thể dịch nó thành băm, vì vậy còn được gọi là giá trị băm. Giá trị băm là một giá trị được tính bằng hàm băm (hoặc hàm băm / thuật toán băm). Để hiểu các giá trị băm, Cần phải hiểu các thuộc tính của hàm băm. Một hàm băm có thể biến đổi một cách tính toán đầu vào có độ dài tùy ý thành đầu ra có độ dài cố định.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Mỗi hàm băm có các thuộc tính sau: Nếu giá trị nhập vào giống nhau, Giá trị băm chuyển ra giống nhau,Nếu giá trị nhập vào khác,thì giá trị băm chuyển ra thường khác. Nhưng khả năng xảy ra xung đột băm là cực kỳ nhỏ. Nếu trong lúc nhập vào có sự thay đổi xung đột băm sẽ được giải trừ , sau đó xuất ra một giá trị băm hoàn toàn không liên quan. Vì hàm băm là không thể thay đổi và dễ dàng xác minh, Hầu như không thể đảo ngược giá trị nhập vào từ giá trị từ giá trị băm chuyển ra , Nếu có giá trị nhập vào, giá trị băm tương ứng có thể được xác minh ngay lập tức.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Do đó, giá trị băm của mỗi khối là duy nhất, ngẫu nhiên, không thể phá vỡ, không thể làm giả, giá trị băm của khối được tự động xác định và bản ghi không thể bị giả mạo.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Có bao nhiêu loại USDT?</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">1.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Omni-USDT dựa trên mạng Bitcoin, địa chỉ nạp tiền là địa chỉ BTC, gửi và rút tiền thông qua mạng BTC;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">2.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">ERC20-USDT dựa trên giao thức Ethereum ERC20, địa chỉ nạp tiền là địa chỉ ETH, gửi và rút tiền thông qua mạng ETH;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">3.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">TRC20-USDT dựa trên giao thức TRON TRC20 và mạng TRX (TRON), địa chỉ gửi tiền là địa chỉ TRON, và việc gửi và rút tiền đi qua mạng TRON.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">TrxHash là một mã băm khối của TRC20-USDT dựa trên giao thức TRON TRC20 và mạng TRX (TRON). Số cuối cùng được sử dụng làm kết quả để xác định xem bạn có trúng thưởng hay không (nhấp vào Chiều cao khối để chuyển đến chuỗi công khai để truy vấn hàm băm Khối duy nhất-Block hash)</span><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 8pt;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Luật chơi như sau :</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">1.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">1 phút mở thưởng 1 lần, 55 giây đặt cươc, Không thể cược trong vòng 5 giây cuối cùng .</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">2 .&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Sau khi đóng , băm khối của khối được tạo mới được sử dụng làm kết quả&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">mở thưởng.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">3 .&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Tổng số lượt mở thưởng trong một ngày là 1440 lượt.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><br></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">4. Nếu bạn thực hiện một giao dịch cược là 100, sẽ có khoản khấu trừ phí là 2%, do đó khoản đặt cược thực tế của bạn sẽ là 98.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">5 . 3 phút , 5 phút , 10 phút luật chơi giống 1 phút, chỉ có thời gian mở thưởng không giống nhau.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">6.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Chữ số cuối cùng của</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">giá trị băm (</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Block hash</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">)</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;được sử dụng làm kết quả&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">:</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Ví dụ:</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Giá trị băm (</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Block hash</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">)</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">**b569</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;&nbsp;<font face="等线">Kết quả mở thưởng là 9.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Giá trị băm (</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Block hash</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">)&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">**d14c</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;&nbsp;<font face="等线">Kết quả mở thưởng là 4.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><font face="等线">. Ch</font><font face="微软雅黑">ọ</font><font face="等线">n màu xanh: N</font><font face="微软雅黑">ế</font><font face="等线">u k</font><font face="微软雅黑">ế</font><font face="等线">t qu</font><font face="微软雅黑">ả&nbsp;</font><font face="等线">hi</font><font face="微软雅黑">ệ</font><font face="等线">n th</font><font face="微软雅黑">ị&nbsp;</font><font face="等线">1,3,7,9 b</font><font face="微软雅黑">ạ</font><font face="等线">n s</font><font face="微软雅黑">ẽ&nbsp;</font><font face="等线">nh</font><font face="微软雅黑">ậ</font><font face="等线">n đư</font><font face="微软雅黑">ợ</font><font face="等线">c(98*2)=196; N</font><font face="微软雅黑">ế</font><font face="等线">u k</font><font face="微软雅黑">ế</font><font face="等线">t qu</font><font face="微软雅黑">ả&nbsp;</font><font face="等线">hi</font><font face="微软雅黑">ệ</font><font face="等线">n th</font><font face="微软雅黑">ị&nbsp;</font><font face="等线">5, b</font><font face="微软雅黑">ạ</font><font face="等线">n</font></span><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><font face="等线">s</font><font face="微软雅黑">ẽ&nbsp;</font><font face="等线">nh</font><font face="微软雅黑">ậ</font><font face="等线">n đư</font><font face="微软雅黑">ợ</font><font face="等线">c (98*1.5)=147.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn màu đỏ: Nếu kết quả hiện thị 2,4,6,8, bạn sẽ nhận được (98*2)=196; Nếu kết quả hiện thị 0, bạn sẽ nhận được (98*1.5)=147.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn màu tím: Nếu kết quả hiện thị 0 hoặc 5, thì bạn sẽ nhận được (98*4.5)=441.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn số : Nếu kết quả mở giống như kết quả bạn đã chọn, bạn sẽ nhận được (98*9)=882</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn lớn&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Big</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">: Nếu kết quả hiện thị 5,6,7,8,9 bạn sẽ nhận được (98*2)=196.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 0pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn nhỏ&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Small</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">: Nếu kết quả hiện thị 0,1,2,3,4 bạn sẽ nhận được (98*2)=196.</font></span></p>'
}, {
    typeID: 16,
    typeName: "Trx Win Go<br />10Min",
    tabName: "Trx 10Min",
    intervalM: 10,
    scope: "1000|10000|100000|1000000",
    sort: 4,
    gamePresentation: '<p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Giá trị băm là gì?</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Bất kỳ ai biết những điều cơ bản về Bitcoin sẽ được tiếp xúc với một khái niệm, một giá trị băm. Tiêu đề khối của Bitcoin có một hàm băm của khối trước đó dùng để chỉ đến khối trước đó.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Hash là phiên âm của Hash trong tiếng Anh, chúng ta cũng có thể dịch nó thành băm, vì vậy còn được gọi là giá trị băm. Giá trị băm là một giá trị được tính bằng hàm băm (hoặc hàm băm / thuật toán băm). Để hiểu các giá trị băm, Cần phải hiểu các thuộc tính của hàm băm. Một hàm băm có thể biến đổi một cách tính toán đầu vào có độ dài tùy ý thành đầu ra có độ dài cố định.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Mỗi hàm băm có các thuộc tính sau: Nếu giá trị nhập vào giống nhau, Giá trị băm chuyển ra giống nhau,Nếu giá trị nhập vào khác,thì giá trị băm chuyển ra thường khác. Nhưng khả năng xảy ra xung đột băm là cực kỳ nhỏ. Nếu trong lúc nhập vào có sự thay đổi xung đột băm sẽ được giải trừ , sau đó xuất ra một giá trị băm hoàn toàn không liên quan. Vì hàm băm là không thể thay đổi và dễ dàng xác minh, Hầu như không thể đảo ngược giá trị nhập vào từ giá trị từ giá trị băm chuyển ra , Nếu có giá trị nhập vào, giá trị băm tương ứng có thể được xác minh ngay lập tức.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Do đó, giá trị băm của mỗi khối là duy nhất, ngẫu nhiên, không thể phá vỡ, không thể làm giả, giá trị băm của khối được tự động xác định và bản ghi không thể bị giả mạo.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Có bao nhiêu loại USDT?</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">1.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Omni-USDT dựa trên mạng Bitcoin, địa chỉ nạp tiền là địa chỉ BTC, gửi và rút tiền thông qua mạng BTC;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">2.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">ERC20-USDT dựa trên giao thức Ethereum ERC20, địa chỉ nạp tiền là địa chỉ ETH, gửi và rút tiền thông qua mạng ETH;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">3.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">TRC20-USDT dựa trên giao thức TRON TRC20 và mạng TRX (TRON), địa chỉ gửi tiền là địa chỉ TRON, và việc gửi và rút tiền đi qua mạng TRON.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">TrxHash là một mã băm khối của TRC20-USDT dựa trên giao thức TRON TRC20 và mạng TRX (TRON). Số cuối cùng được sử dụng làm kết quả để xác định xem bạn có trúng thưởng hay không (nhấp vào Chiều cao khối để chuyển đến chuỗi công khai để truy vấn hàm băm Khối duy nhất-Block hash)</span><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 8pt;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Luật chơi như sau :</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">1.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">1 phút mở thưởng 1 lần, 55 giây đặt cươc, Không thể cược trong vòng 5 giây cuối cùng .</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">2 .&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Sau khi đóng , băm khối của khối được tạo mới được sử dụng làm kết quả&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">mở thưởng.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">3 .&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Tổng số lượt mở thưởng trong một ngày là 1440 lượt.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><br></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">4. Nếu bạn thực hiện một giao dịch cược là 100, sẽ có khoản khấu trừ phí là 2%, do đó khoản đặt cược thực tế của bạn sẽ là 98.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">5 . 3 phút , 5 phút , 10 phút luật chơi giống 1 phút, chỉ có thời gian mở thưởng không giống nhau.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">6.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Chữ số cuối cùng của</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">giá trị băm (</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Block hash</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">)</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;được sử dụng làm kết quả&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">:</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Ví dụ:</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Giá trị băm (</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Block hash</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">)</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">**b569</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;&nbsp;<font face="等线">Kết quả mở thưởng là 9.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Giá trị băm (</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Block hash</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">)&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">**d14c</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;&nbsp;<font face="等线">Kết quả mở thưởng là 4.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><font face="等线">. Ch</font><font face="微软雅黑">ọ</font><font face="等线">n màu xanh: N</font><font face="微软雅黑">ế</font><font face="等线">u k</font><font face="微软雅黑">ế</font><font face="等线">t qu</font><font face="微软雅黑">ả&nbsp;</font><font face="等线">hi</font><font face="微软雅黑">ệ</font><font face="等线">n th</font><font face="微软雅黑">ị&nbsp;</font><font face="等线">1,3,7,9 b</font><font face="微软雅黑">ạ</font><font face="等线">n s</font><font face="微软雅黑">ẽ&nbsp;</font><font face="等线">nh</font><font face="微软雅黑">ậ</font><font face="等线">n đư</font><font face="微软雅黑">ợ</font><font face="等线">c(98*2)=196; N</font><font face="微软雅黑">ế</font><font face="等线">u k</font><font face="微软雅黑">ế</font><font face="等线">t qu</font><font face="微软雅黑">ả&nbsp;</font><font face="等线">hi</font><font face="微软雅黑">ệ</font><font face="等线">n th</font><font face="微软雅黑">ị&nbsp;</font><font face="等线">5, b</font><font face="微软雅黑">ạ</font><font face="等线">n</font></span><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><font face="等线">s</font><font face="微软雅黑">ẽ&nbsp;</font><font face="等线">nh</font><font face="微软雅黑">ậ</font><font face="等线">n đư</font><font face="微软雅黑">ợ</font><font face="等线">c (98*1.5)=147.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn màu đỏ: Nếu kết quả hiện thị 2,4,6,8, bạn sẽ nhận được (98*2)=196; Nếu kết quả hiện thị 0, bạn sẽ nhận được (98*1.5)=147.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn màu tím: Nếu kết quả hiện thị 0 hoặc 5, thì bạn sẽ nhận được (98*4.5)=441.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn số : Nếu kết quả mở giống như kết quả bạn đã chọn, bạn sẽ nhận được (98*9)=882</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn lớn&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Big</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">: Nếu kết quả hiện thị 5,6,7,8,9 bạn sẽ nhận được (98*2)=196.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 0pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn nhỏ&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Small</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">: Nếu kết quả hiện thị 0,1,2,3,4 bạn sẽ nhận được (98*2)=196.</font></span></p>'
}]
  , cd = [{
    typeID: 5,
    typeName: "5D Lotre<br />1Min",
    tabName: "5D 1Min",
    intervalM: 1,
    scope: "1000|10000|100000|1000000",
    sort: 4,
    gamePresentation: '<p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">LUẬT CHƠI XỔ SỐ 5D</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">*Quy định cá cược xổ số</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">( 1 ) Không được phép cược 2 bên (cược đối lập) ví dụ: trong một kỳ xổ không được đặt cược Lớn/Nhỏ,Chẵn/Lẻ...</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">( 2 )&nbsp;</font><span style="font-family: &quot;Times New Roman&quot;;">Nếu bị phát hiện có hành vi đặt cược phi pháp hoặc đặt cược đối đầu, sẽ bị hủy bỏ lệnh rút tiền.</span></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">HƯỚNG DẪN GIẢI THƯỞNG</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Mỗi kỳ sẽ mở ngẫu nhiên 5 con số （00000-99999）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Ví dụ :</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Kỳ xổ hiện tại là 12345</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">A=1</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">B=2</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">C=3</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">D=4</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">E=5</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Tổng =A+B+C+D+E=15</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Cách chơi</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Người chơi có thể chỉ định đặt cược A,B,C,D,E và tổng hợp của năm kết quả</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">A,B,C,D,E có thể mua</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Con số（0 1 2 3 4 5 6 7 8 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Nhỏ&nbsp; （0 1 2 3 4）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lớn&nbsp; （5 6 7 8 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lẻ&nbsp; &nbsp;（1 3 5 7 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Chẵn （0 2 4 6 8）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Tổng hợp =A+B+C+D+E có thể mua</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Nhỏ&nbsp; （0-22）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lớn&nbsp; （23-45）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lẻ&nbsp; &nbsp;（1 3 ···43 45）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Chẵn （0 2 ···42 44）</font></p>'
}, {
    typeID: 6,
    typeName: "5D Lotre<br />3Min",
    tabName: "5D 3Min",
    intervalM: 3,
    scope: "1000|10000|100000|1000000",
    sort: 3,
    gamePresentation: '<p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">LUẬT CHƠI XỔ SỐ 5D</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">*Quy định cá cược xổ số</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">( 1 ) Không được phép cược 2 bên (cược đối lập) ví dụ: trong một kỳ xổ không được đặt cược Lớn/Nhỏ,Chẵn/Lẻ...</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">( 2 )&nbsp;</font><span style="font-family: &quot;Times New Roman&quot;;">Nếu bị phát hiện có hành vi đặt cược phi pháp hoặc đặt cược đối đầu, sẽ bị hủy bỏ lệnh rút tiền.</span></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">HƯỚNG DẪN GIẢI THƯỞNG</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Mỗi kỳ sẽ mở ngẫu nhiên 5 con số （00000-99999）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Ví dụ :</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Kỳ xổ hiện tại là 12345</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">A=1</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">B=2</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">C=3</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">D=4</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">E=5</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Tổng =A+B+C+D+E=15</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Cách chơi</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Người chơi có thể chỉ định đặt cược A,B,C,D,E và tổng hợp của năm kết quả</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">A,B,C,D,E có thể mua</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Con số（0 1 2 3 4 5 6 7 8 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Nhỏ&nbsp; （0 1 2 3 4）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lớn&nbsp; （5 6 7 8 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lẻ&nbsp; &nbsp;（1 3 5 7 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Chẵn （0 2 4 6 8）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Tổng hợp =A+B+C+D+E có thể mua</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Nhỏ&nbsp; （0-22）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lớn&nbsp; （23-45）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lẻ&nbsp; &nbsp;（1 3 ···43 45）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Chẵn （0 2 ···42 44）</font></p>'
}, {
    typeID: 7,
    typeName: "5D Lotre<br />5Min",
    tabName: "5D 5Min",
    intervalM: 5,
    scope: "1000|10000|100000|1000000",
    sort: 2,
    gamePresentation: '<p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">LUẬT CHƠI XỔ SỐ 5D</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">*Quy định cá cược xổ số</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">( 1 ) Không được phép cược 2 bên (cược đối lập) ví dụ: trong một kỳ xổ không được đặt cược Lớn/Nhỏ,Chẵn/Lẻ...</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">( 2 )&nbsp;</font><span style="font-family: &quot;Times New Roman&quot;;">Nếu bị phát hiện có hành vi đặt cược phi pháp hoặc đặt cược đối đầu, sẽ bị hủy bỏ lệnh rút tiền.</span></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">HƯỚNG DẪN GIẢI THƯỞNG</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Mỗi kỳ sẽ mở ngẫu nhiên 5 con số （00000-99999）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Ví dụ :</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Kỳ xổ hiện tại là 12345</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">A=1</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">B=2</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">C=3</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">D=4</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">E=5</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Tổng =A+B+C+D+E=15</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Cách chơi</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Người chơi có thể chỉ định đặt cược A,B,C,D,E và tổng hợp của năm kết quả</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">A,B,C,D,E có thể mua</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Con số（0 1 2 3 4 5 6 7 8 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Nhỏ&nbsp; （0 1 2 3 4）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lớn&nbsp; （5 6 7 8 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lẻ&nbsp; &nbsp;（1 3 5 7 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Chẵn （0 2 4 6 8）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Tổng hợp =A+B+C+D+E có thể mua</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Nhỏ&nbsp; （0-22）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lớn&nbsp; （23-45）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lẻ&nbsp; &nbsp;（1 3 ···43 45）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Chẵn （0 2 ···42 44）</font></p>'
}, {
    typeID: 8,
    typeName: "5D Lotre<br />10Min",
    tabName: "5D 10Min",
    intervalM: 10,
    scope: "1000|10000|100000|1000000",
    sort: 1,
    gamePresentation: '<p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">LUẬT CHƠI XỔ SỐ 5D</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">*Quy định cá cược xổ số</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">( 1 ) Không được phép cược 2 bên (cược đối lập) ví dụ: trong một kỳ xổ không được đặt cược Lớn/Nhỏ,Chẵn/Lẻ...</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">( 2 )&nbsp;</font><span style="font-family: &quot;Times New Roman&quot;;">Nếu bị phát hiện có hành vi đặt cược phi pháp hoặc đặt cược đối đầu, sẽ bị hủy bỏ lệnh rút tiền.</span></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">HƯỚNG DẪN GIẢI THƯỞNG</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Mỗi kỳ sẽ mở ngẫu nhiên 5 con số （00000-99999）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Ví dụ :</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Kỳ xổ hiện tại là 12345</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">A=1</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">B=2</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">C=3</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">D=4</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">E=5</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Tổng =A+B+C+D+E=15</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Cách chơi</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Người chơi có thể chỉ định đặt cược A,B,C,D,E và tổng hợp của năm kết quả</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">A,B,C,D,E có thể mua</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Con số（0 1 2 3 4 5 6 7 8 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Nhỏ&nbsp; （0 1 2 3 4）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lớn&nbsp; （5 6 7 8 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lẻ&nbsp; &nbsp;（1 3 5 7 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Chẵn （0 2 4 6 8）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Tổng hợp =A+B+C+D+E có thể mua</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Nhỏ&nbsp; （0-22）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lớn&nbsp; （23-45）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lẻ&nbsp; &nbsp;（1 3 ···43 45）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Chẵn （0 2 ···42 44）</font></p>'
}]
  , rd = [{
    typeID: 9,
    typeName: "K3 Lotre<br />1Min",
    tabName: "K3 1Min",
    intervalM: 1,
    scope: "1000|10000|100000|1000000",
    sort: 1,
    gamePresentation: '<p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Xổ số Fast 3 mỗi kỳ xổ sẽ là 3 con số,con số sẽ được mở ngẫu nhiên từ 111 đến 666 không có số 0 và các con số xổ không theo thứ tự cụ thể Fast 3 đó là đoán tất cả hoặc một phần của 3 con số trúng thưởng</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược tổng</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược số tổng của 3 viên xúc xắc</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược bộ 3 toàn bộ</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Người chơi đặt cược nhóm các bộ ba giống nhau như: （111、222、…、666）bao trọn bộ và tiến hành đặt cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược bộ 3 đơn</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Người chơi chọn một trong tất cả các bộ ba bất kỳ（111、…、666）và tiến hành đặt cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược hai số đôi</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số gồm hai số đôi được chỉ định và một số bất kỳ</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược số đôi +1 số đơn</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số được chỉ định gồm hai số đôi và một số khác</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 3 số khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số hoàn toàn khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 2 số khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược 2 số khác nhau + 1 số khác để đặt chung trong 1 vé cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 3 số liên tiếp</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược toàn bộ các số liên tiếp là [123, 234, 345, 456] tiến hành đặt cược<br></font></p>'
}, {
    typeID: 10,
    typeName: "K3 Lotre<br />3Min",
    tabName: "K3 3Min",
    intervalM: 3,
    scope: "1000|10000|100000|1000000",
    sort: 2,
    gamePresentation: '<p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Xổ số Fast 3 mỗi kỳ xổ sẽ là 3 con số,con số sẽ được mở ngẫu nhiên từ 111 đến 666 không có số 0 và các con số xổ không theo thứ tự cụ thể Fast 3 đó là đoán tất cả hoặc một phần của 3 con số trúng thưởng</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược tổng</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược số tổng của 3 viên xúc xắc</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược bộ 3 toàn bộ</font><span style="font-family: 宋体;">Xổ số Fast 3 mỗi kỳ xổ sẽ là 3 con số,con số sẽ được mở ngẫu nhiên từ 111 đến 666 không có số 0 và các con số xổ không theo thứ tự cụ thể Fast 3 đó là đoán tất cả hoặc một phần của 3 con số trúng thưởng</span></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược tổng</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược số tổng của 3 viên xúc xắc</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược bộ 3 toàn bộ</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Người chơi đặt cược nhóm các bộ ba giống nhau như: （111、222、…、666）bao trọn bộ và tiến hành đặt cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược bộ 3 đơn</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Người chơi chọn một trong tất cả các bộ ba bất kỳ（111、…、666）và tiến hành đặt cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược hai số đôi</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số gồm hai số đôi được chỉ định và một số bất kỳ</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược số đôi +1 số đơn</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số được chỉ định gồm hai số đôi và một số khác</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 3 số khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số hoàn toàn khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 2 số khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược 2 số khác nhau + 1 số khác để đặt chung trong 1 vé cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 3 số liên tiếp</font></p><p class="MsoNormal" style="margin-bottom: 0px; -webkit-tap-highlight-color: transparent;"><font face="宋体">Cược toàn bộ các số liên tiếp là [123, 234, 345, 456] tiến hành đặt cược<br></font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Người chơi đặt cược nhóm các bộ ba giống nhau như: （111、222、…、666）bao trọn bộ và tiến hành đặt cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược bộ 3 đơn</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Người chơi chọn một trong tất cả các bộ ba bất kỳ（111、…、666）và tiến hành đặt cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược hai số đôi</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số gồm hai số đôi được chỉ định và một số bất kỳ</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược số đôi +1 số đơn</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số được chỉ định gồm hai số đôi và một số khác</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 3 số khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số hoàn toàn khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 2 số khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược 2 số khác nhau + 1 số khác để đặt chung trong 1 vé cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 3 số liên tiếp</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược toàn bộ các số liên tiếp là [123, 234, 345, 456] tiến hành đặt cược<br></font></p>'
}, {
    typeID: 11,
    typeName: "K3 Lotre<br />5Min",
    tabName: "K3 5Min",
    intervalM: 5,
    scope: "1000|10000|100000|1000000",
    sort: 3,
    gamePresentation: '<p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Xổ số Fast 3 mỗi kỳ xổ sẽ là 3 con số,con số sẽ được mở ngẫu nhiên từ 111 đến 666 không có số 0 và các con số xổ không theo thứ tự cụ thể Fast 3 đó là đoán tất cả hoặc một phần của 3 con số trúng thưởng</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược tổng</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược số tổng của 3 viên xúc xắc</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược bộ 3 toàn bộ</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Người chơi đặt cược nhóm các bộ ba giống nhau như: （111、222、…、666）bao trọn bộ và tiến hành đặt cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược bộ 3 đơn</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Người chơi chọn một trong tất cả các bộ ba bất kỳ（111、…、666）và tiến hành đặt cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược hai số đôi</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số gồm hai số đôi được chỉ định và một số bất kỳ</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược số đôi +1 số đơn</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số được chỉ định gồm hai số đôi và một số khác</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 3 số khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số hoàn toàn khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 2 số khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược 2 số khác nhau + 1 số khác để đặt chung trong 1 vé cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 3 số liên tiếp</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược toàn bộ các số liên tiếp là [123, 234, 345, 456] tiến hành đặt cược<br></font></p>'
}, {
    typeID: 12,
    typeName: "K3 Lotre<br />10Min",
    tabName: "K3 10Min",
    intervalM: 10,
    scope: "1000|10000|100000|1000000",
    sort: 4,
    gamePresentation: '<p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Xổ số Fast 3 mỗi kỳ xổ sẽ là 3 con số,con số sẽ được mở ngẫu nhiên từ 111 đến 666 không có số 0 và các con số xổ không theo thứ tự cụ thể Fast 3 đó là đoán tất cả hoặc một phần của 3 con số trúng thưởng</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược tổng</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược số tổng của 3 viên xúc xắc</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược bộ 3 toàn bộ</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Người chơi đặt cược nhóm các bộ ba giống nhau như: （111、222、…、666）bao trọn bộ và tiến hành đặt cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược bộ 3 đơn</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Người chơi chọn một trong tất cả các bộ ba bất kỳ（111、…、666）và tiến hành đặt cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược hai số đôi</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số gồm hai số đôi được chỉ định và một số bất kỳ</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược số đôi +1 số đơn</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số được chỉ định gồm hai số đôi và một số khác</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 3 số khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số hoàn toàn khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 2 số khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược 2 số khác nhau + 1 số khác để đặt chung trong 1 vé cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 3 số liên tiếp</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược toàn bộ các số liên tiếp là [123, 234, 345, 456] tiến hành đặt cược<br></font></p>'
}]
  , ud = s => Le(Ne.GetMyBingo18HistoryBetting, s)
  , dd = () => Le(Ne.GetBinguoGameConfig)
  , pd = () => Le(Ne.GetBingo18OddsList)
  , gd = () => Le(Ne.GetGameBingo18Issue)
  , bd = () => Le(Ne.GetBingo18LastGameResult)
  , md = s => Le(Ne.GetBingo18BetAmount, s)
  , _d = s => Le(Ne.Bingo18Betting, s)
  , Aa = () => Le(Ne.GetBingo18Last50Result)
  , vd = () => Le(Ne.GetTrendstatistics)
  , kd = () => Le(Ne.GetLotteryRankList)
  , hd = () => Le(Ne.GetLotteryResult7Day)
  , fd = s => Le(Ne.GetUserRankList, {
    uid: s
})
  , re = Et({
    currentTabIndex: 0,
    resultSumTrend: [],
    smallAndBigTrend: void 0,
    threeSameTrend: [],
    twoSameTrend: [],
    isTrend: !1,
    trendList: [],
    last50List: [],
    userRank: 0,
    last7Day: []
})
  , {t: ri} = Gi.global
  , Ii = h([{
    title: ri("time"),
    key: "issueEndTime",
    isLockColumn: !0,
    isSlot: !0,
    width: "50px",
    cusTdClass: "column_time"
}])
  , Je = () => {
    const s = {
        1: {
            player: ri("xosoTxt60"),
            Big: {
                class: "big"
            },
            Small: {
                class: "small"
            },
            Drawn: {
                class: "sum"
            }
        },
        2: {
            player: ri("same"),
            class: "small"
        },
        3: {
            player: ri("sameNum")
        },
        4: {
            player: ri("numbersMatch")
        }
    }
      , i = Q( () => {
        let w = []
          , T = [];
        for (let N = 0; N < re.last50List.length; N++)
            T.length < 5 || (w.push(T),
            T = []),
            T.push(re.last50List[N].resultSum),
            N === re.last50List.length - 1 && w.push(T);
        return w
    }
    )
      , o = Q( () => {
        let w = re.last50List.map(N => N.resultSum)
          , T = b(w).slice(0, 10).reverse();
        return T.forEach(N => {
            if (N.length < 5) {
                let v = 5 - N.length;
                for (let k = 0; k < v; k++)
                    N.push("")
            }
        }
        ),
        T
    }
    )
      , l = Q( () => re.last50List.map(w => {
        const T = w.result.split("")
          , N = {};
        for (let v = 1; v <= 6; v++)
            N["num" + v] = T.filter(k => k === v.toString()).length;
        return {
            issueNo: w.issueNo,
            sum: w.resultSum,
            ...N
        }
    }
    ))
      , g = async () => {
        const w = await nt(hd());
        if (w != null && w.data) {
            Ii.value = [{
                title: ri("time"),
                key: "issueEndTime",
                isLockColumn: !0,
                isSlot: !0,
                width: "50px",
                cusTdClass: "column_time"
            }];
            let T = w.data.reverse();
            [...new Set(w.data.map(y => y.startDate))].slice(0, 7).reverse().forEach( (y, f) => {
                Ii.value.push({
                    key: "time_index_" + f,
                    title: y,
                    isSlot: !0
                })
            }
            );
            let v = m(T, "issueEndTime")
              , k = [];
            Object.entries(v).forEach( ([y,f]) => {
                let z = {};
                f.forEach( (L, x) => {
                    var R;
                    let I = (R = Ii.value.find(M => M.title === L.startDate)) == null ? void 0 : R.key;
                    z[`${I}`] = L
                }
                ),
                k.push({
                    issueEndTime: y,
                    ...z
                })
            }
            ),
            re.last7Day = k.sort( (y, f) => {
                const z = y.issueEndTime.split(":")
                  , L = f.issueEndTime.split(":")
                  , x = parseInt(z[0])
                  , I = parseInt(z[1])
                  , R = parseInt(L[0])
                  , M = parseInt(L[1]);
                return x === R ? I - M : x - R
            }
            )
        }
    }
    ;
    function m(w, T) {
        const N = {};
        return w.forEach(v => {
            const k = v[T];
            N[k] || (N[k] = []),
            N[k].push(v)
        }
        ),
        N
    }
    const c = async () => {
        const w = await nt(kd());
        w != null && w.data && (re.trendList = w.data);
        const N = De().getUserInfo
          , v = await nt(fd(N.userId));
        v != null && v.data && (v.data < 100 && (re.isTrend = !0),
        re.userRank = v.data)
    }
      , u = async () => {
        const w = await nt(Aa());
        w != null && w.data && (re.last50List = w.data)
    }
      , p = async () => {
        const w = await nt(vd());
        w && (re.resultSumTrend = w.data.resultSumTrend,
        re.smallAndBigTrend = w.data.smallAndBigTrend,
        re.threeSameTrend = w.data.threeSameTrend,
        re.twoSameTrend = w.data.twoSameTrend)
    }
      , r = (w, T) => {
        let N = ""
          , v = "";
        return w === 1 ? (Number(T) ? N = _(Number(T)) : N = s[1][T].class,
        v = s[1].player) : w === 2 ? (N = s[2].class,
        v = s[2].player) : w === 3 ? (Number(T) < 5 ? N = "small" : Number(T) === 5 ? N = "sum" : N = "big",
        v = s[3].player) : w === 4 && (T.includes("*") ? N = "big" : /[123]/.test(T) ? N = "small" : N = "big",
        v = s[4].player),
        {
            className: N,
            playerName: v
        }
    }
    ;
    function b(w) {
        const T = []
          , N = [];
        let v = "";
        const k = f => f < 10 ? "small" : f > 11 ? "big" : "sum"
          , y = (f, z) => {
            let L = 0;
            if (f !== z[z.length - 1])
                return 0;
            for (let x = z.length - 1; x >= 0; x--)
                if (f === z[x])
                    L += 1;
                else
                    return L;
            return L
        }
        ;
        for (let f = 0; f < w.length; f++) {
            const z = w[f]
              , L = k(z);
            if (T.length === 0 || L !== v) {
                T.push([z]),
                v = L,
                N.push(v);
                continue
            }
            if (T[T.length - 1].length < 5)
                T[T.length - 1].push(z);
            else {
                let x = y(L, N)
                  , I = T[T.length - x].length;
                I === 5 ? (T.splice(T.length - x, 0, [z]),
                N.push(L)) : (I > 5,
                T[T.length - x].unshift(z))
            }
            v = L
        }
        return T
    }
    const _ = w => Number(w) < 10 ? "small" : Number(w) > 11 ? "big" : "sum";
    return {
        store: re,
        last50Result: i,
        last50Record: o,
        last50RecordResult: l,
        columnOptions: Ii,
        filterStyle: _,
        filterGameType: r,
        getTrendstatistics: p,
        getLotteryRankList: c,
        getLotteryResult7Day: g,
        getBingo18Last50Result: u
    }
}
  , yd = {
    class: "ar-searchbar__selector"
}
  , $d = {
    key: 0,
    class: "noSelect"
}
  , wd = {
    key: 1,
    class: "ar-searchbar__selector-default"
}
  , Td = F({
    __name: "Calendar",
    emits: ["confirm"],
    setup(s, {expose: i, emit: o}) {
        const {minDate: l, maxDate: g} = da()
          , m = h("")
          , c = h("")
          , u = h(!1)
          , p = _ => `${_.getFullYear()}-${_.getMonth() + 1}-${_.getDate()}`
          , r = async _ => {
            u.value = !1;
            const [w,T] = _;
            m.value = p(w),
            c.value = p(T),
            o("confirm")
        }
        ;
        function b() {
            u.value = !0
        }
        return i({
            startDateValue: m,
            endDateValue: c
        }),
        (_, w) => {
            const T = W("van-icon")
              , N = W("van-calendar");
            return n(),
            a(S, null, [t("div", yd, [t("div", {
                onClick: b
            }, [m.value === "" || c.value === "" ? (n(),
            a("span", $d, e(_.$t("datePick")), 1)) : (n(),
            a("span", wd, e(m.value) + "/" + e(c.value), 1)), C(T, {
                name: "arrow-down"
            })])]), $(`<ArSelect @click-select="onClickSelectT" :selectName="$t('datePick')|| (startDateValue / endDateValue )"></ArSelect>`), $(' <van-popup v-model:show="showDataPick" round position="bottom"> '), C(N, {
                show: u.value,
                "onUpdate:show": w[0] || (w[0] = v => u.value = v),
                type: "range",
                onConfirm: r,
                "min-date": d(l),
                "max-date": d(g),
                teleport: "body"
            }, null, 8, ["show", "min-date", "max-date"]), $(" </van-popup> ")], 64)
        }
    }
})
  , Cd = V(Td, [["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/common/Calendar.vue"]])
  , Ld = s => (Nt("data-v-1115ff02"),
s = s(),
zt(),
s)
  , Nd = {
    class: "x-4d-head"
}
  , zd = {
    class: "menu"
}
  , Id = ["onClick"]
  , xd = {
    class: "main"
}
  , Sd = {
    class: "item"
}
  , Rd = Ld( () => t("div", {
    class: "box"
}, [t("div")], -1))
  , Bd = [Rd]
  , Gd = {
    class: "mask"
}
  , Ad = ["onClick"]
  , Md = {
    class: "img"
}
  , Pd = F({
    __name: "lotterylist",
    props: {
        modelValue: {
            type: Boolean,
            required: !0,
            default: !1
        },
        timeIndex: {
            type: Number,
            required: !0,
            default: 0
        },
        timeVal: {
            type: String,
            required: !0,
            default: _e().format("YYYY-MM-DD")
        },
        lotteryList: {
            type: Array,
            required: !0
        },
        lotteryTab: {
            type: Array,
            required: !0
        },
        timeWeek: {
            type: Function,
            required: !0,
            default: () => ""
        }
    },
    emits: ["onLotteryTab", "onTime", "update:modelValue"],
    setup(s, {emit: i}) {
        const l = Bo(s, "modelValue", i)
          , g = (b, _) => {
            i("onLotteryTab", b, _)
        }
          , m = (b, _) => {
            i("onTime", b, _)
        }
          , c = () => {
            l.value = !0
        }
          , u = () => {
            l.value = !1
        }
          , p = () => {
            l.value ? u() : c()
        }
          , r = h(null);
        return Go(r, b => {
            l.value = !1
        }
        ),
        (b, _) => {
            var N;
            const w = W("van-skeleton")
              , T = Dt("lazy");
            return n(),
            a("div", Nd, [t("div", {
                class: "time",
                ref_key: "target",
                ref: r
            }, [t("div", {
                class: "box",
                onClick: p
            }, e(b.timeVal.replace(/-/g, "/")) + " " + e(b.timeWeek(b.timeVal)), 1), dt(t("div", zd, [t("h3", {
                onClick: u
            }, e(b.$t("Drawdate")), 1), t("ul", null, [(n(!0),
            a(S, null, G(b.lotteryTab, (v, k) => (n(),
            a("li", {
                class: B([b.timeVal == v.date ? "active" : ""]),
                key: k,
                onClick: y => m(v, k)
            }, e(v.date.replace(/-/g, "/")) + " " + e(b.timeWeek(v.date)), 11, Id))), 128))])], 512), [[Yt, d(l)]])], 512), t("div", xd, [C(w, {
                loading: !((N = b.lotteryTab[b.timeIndex]) != null && N.games),
                class: "flex"
            }, {
                template: P( () => [(n(),
                a(S, null, G(10, () => t("div", Sd, Bd)), 64))]),
                default: P( () => {
                    var v;
                    return [dt(t("div", Gd, null, 512), [[Yt, d(l)]]), (n(!0),
                    a(S, null, G((v = b.lotteryTab[b.timeIndex]) == null ? void 0 : v.games, (k, y) => (n(),
                    a("div", {
                        class: "item",
                        key: y,
                        onClick: f => g(k, y)
                    }, [t("div", {
                        class: B(["box", [b.lotteryList.includes(k.type) ? "active" : ""]])
                    }, [dt(t("img", Md, null, 512), [[T, k.typeImg]])], 2)], 8, Ad))), 128))]
                }
                ),
                _: 1
            }, 8, ["loading"])])])
        }
    }
});
const Dd = V(Pd, [["__scopeId", "data-v-1115ff02"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/home/AllLotteryGames/4D/components/lotterylist.vue"]])
  , Od = {
    class: "betType"
}
  , Ed = {
    class: "title"
}
  , qd = {
    class: "betType-list"
}
  , jd = {
    class: "item action"
}
  , Hd = ["onClick"]
  , Wd = F({
    __name: "bettype",
    props: {
        betType: {
            type: Array,
            required: !0
        },
        betTypeList: {
            type: Array,
            required: !0
        }
    },
    emits: ["onBetType"],
    setup(s, {emit: i}) {
        const o = l => {
            i("onBetType", l)
        }
        ;
        return (l, g) => {
            const m = W("van-skeleton");
            return n(),
            a(S, null, [$(" 投注类型 "), t("div", Od, [t("h4", Ed, e(l.$t("xosoTxt78")), 1), t("ul", qd, [C(m, {
                loading: !l.betTypeList,
                class: "flex"
            }, {
                template: P( () => [(n(),
                a(S, null, G(7, () => t("li", jd)), 64))]),
                default: P( () => [(n(!0),
                a(S, null, G(l.betTypeList, (c, u) => (n(),
                a("li", {
                    class: B([l.betType.includes(c) ? "item action" : "item"]),
                    onClick: p => o(c),
                    key: u
                }, e(l.$t("d4gameType" + c)), 11, Hd))), 128))]),
                _: 1
            }, 8, ["loading"])])])], 2112)
        }
    }
});
const Fd = V(Wd, [["__scopeId", "data-v-40039812"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/home/AllLotteryGames/4D/components/bettype.vue"]])
  , Vd = {
    class: "howPay"
}
  , Ud = {
    class: "title"
}
  , Kd = {
    class: "howPay-list"
}
  , Xd = {
    class: "item"
}
  , Qd = {
    key: 0,
    class: "icon"
}
  , Zd = F({
    __name: "betpay",
    props: {
        rollNum: {
            type: Number,
            required: !0,
            default: 1
        },
        banBetPay: {
            type: Number,
            required: !0,
            default: 0
        },
        betPayId: {
            type: Number,
            required: !0,
            default: 1
        },
        duplex: {
            type: Boolean,
            required: !0,
            default: !1
        },
        betPayList: {
            type: Array,
            required: !0
        }
    },
    emits: ["onBetpay"],
    setup(s, {emit: i}) {
        const o = s
          , l = c => c.includes(5) ? c.slice(0, -1) : c
          , g = c => {
            let u = !1
              , p = (c === 2 || c === 3) && o.banBetPay === 1 || o.rollNum > 0
              , r = o.duplex ? (c === 2 || c === 3 || c === 4) && o.banBetPay === 1 : c === 2 && (c === 2 || c === 3) && o.banBetPay === 1;
            return (p || r) && (u = !0),
            u
        }
          , m = c => {
            i("onBetpay", c)
        }
        ;
        return (c, u) => {
            const p = W("van-icon")
              , r = W("van-button")
              , b = W("van-skeleton");
            return n(),
            a(S, null, [$(" 玩法 "), t("div", Vd, [t("h4", Ud, e(c.$t("gamePlay")), 1), t("ul", Kd, [C(b, {
                loading: !l(c.betPayList),
                class: "flex"
            }, {
                template: P( () => [(n(),
                a(S, null, G(4, () => t("li", Xd)), 64))]),
                default: P( () => [(n(!0),
                a(S, null, G(l(c.betPayList), (_, w) => (n(),
                J(r, {
                    plain: "",
                    disabled: g(_),
                    class: B([_ == c.betPayId ? "item action" : "item"]),
                    onClick: T => m(_),
                    key: w
                }, {
                    default: P( () => [E(e(c.$t("d4gamePay" + _)) + " ", 1), _ == c.betPayId ? (n(),
                    a("i", Qd, [C(p, {
                        name: "success"
                    })])) : $("v-if", !0)]),
                    _: 2
                }, 1032, ["disabled", "class", "onClick"]))), 128))]),
                _: 1
            }, 8, ["loading"])])])], 2112)
        }
    }
});
const Yd = V(Zd, [["__scopeId", "data-v-42192c16"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/home/AllLotteryGames/4D/components/betpay.vue"]])
  , Jd = {
    class: "betAmount"
}
  , tp = {
    class: "title"
}
  , ep = {
    class: "betAmount-list"
}
  , ip = ["onClick"]
  , np = F({
    __name: "betamount",
    props: {
        count: {
            type: Number,
            required: !0,
            default: 10
        },
        list: {
            type: Array,
            required: !0
        }
    },
    emits: ["onAmount"],
    setup(s, {emit: i}) {
        const o = l => {
            i("onAmount", l)
        }
        ;
        return (l, g) => (n(),
        a("div", Jd, [t("h4", tp, e(l.$t("betAmounts")), 1), t("ul", ep, [(n(!0),
        a(S, null, G(l.list, (m, c) => (n(),
        a("li", {
            class: B([m == l.count ? "item active" : "item"]),
            onClick: u => o(m),
            key: c
        }, e(m), 11, ip))), 128))])]))
    }
});
const ap = V(np, [["__scopeId", "data-v-1c2e9816"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/home/AllLotteryGames/4D/components/betamount.vue"]])
  , op = s => (Nt("data-v-f88540df"),
s = s(),
zt(),
s)
  , sp = {
    class: "select"
}
  , lp = {
    class: "tab"
}
  , cp = ["onClick"]
  , rp = op( () => t("span", null, "ALL", -1))
  , up = {
    class: "numList"
}
  , dp = ["onClick"]
  , pp = F({
    __name: "duplexbet",
    props: {
        tabList: {
            type: Array,
            required: !0
        },
        allActive: {
            type: Array,
            required: !0
        },
        numList: {
            type: Array,
            required: !0
        }
    },
    emits: ["allAddnum", "addNumber"],
    setup(s, {emit: i}) {
        const o = g => {
            i("allAddnum", g)
        }
          , l = (g, m) => {
            i("addNumber", g, m)
        }
        ;
        return (g, m) => (n(),
        a("div", sp, [t("ul", lp, [(n(!0),
        a(S, null, G(g.tabList, (c, u) => (n(),
        a("li", {
            onClick: p => o(c.type),
            class: B(g.allActive.includes(c.type) ? "active" : ""),
            key: u
        }, [E(e(c.name) + " ", 1), rp], 10, cp))), 128))]), t("div", up, [(n(!0),
        a(S, null, G(g.numList, (c, u) => (n(),
        a("ul", {
            key: u
        }, [(n(),
        a(S, null, G(10, (p, r) => t("li", {
            class: B([c != null && c.list.includes(r) ? "action" : ""]),
            key: p,
            onClick: b => l(u, r)
        }, e(r), 11, dp)), 64))]))), 128))])]))
    }
});
const gp = V(pp, [["__scopeId", "data-v-f88540df"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/home/AllLotteryGames/4D/components/duplexbet.vue"]])
  , bp = {
    class: "foot"
}
  , mp = {
    class: "item"
}
  , _p = {
    class: "marks"
}
  , vp = {
    class: "item"
}
  , kp = {
    class: "marks"
}
  , hp = F({
    __name: "navfoot",
    props: {
        betQuantity: {
            type: Number,
            default: 0
        },
        totalAmount: {
            type: Number,
            default: 0
        }
    },
    emits: ["onBet"],
    setup(s, {emit: i}) {
        const o = s
          , l = () => {
            o.totalAmount > 0 && i("onBet")
        }
        ;
        return (g, m) => (n(),
        a("div", bp, [t("div", mp, [t("p", null, e(g.$t("quantity")), 1), t("span", _p, e(s.betQuantity), 1)]), $('				<div class="bar" />'), t("div", vp, [t("p", null, e(g.$t("betAmounts")), 1), t("span", kp, e(d(pa)(s.totalAmount)), 1)]), t("div", {
            class: B(["item bet", [s.totalAmount > 0 ? "active" : ""]]),
            onClick: l
        }, e(g.$t("betting")), 3)]))
    }
});
const fp = V(hp, [["__scopeId", "data-v-fd9536f0"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/home/AllLotteryGames/4D/components/navfoot.vue"]])
  , yp = {
    class: "x-bet"
}
  , $p = {
    class: "x-bet-sub"
}
  , wp = {
    class: "x-bet-lottery"
}
  , Tp = {
    class: "x-bet-title"
}
  , Cp = {
    class: "box"
}
  , Lp = {
    class: "img"
}
  , Np = {
    class: "x-bet-type"
}
  , zp = {
    class: "x-bet-title"
}
  , Ip = {
    class: "box"
}
  , xp = {
    class: "x-bet-multiple"
}
  , Sp = {
    class: "tit"
}
  , Rp = {
    class: "box"
}
  , Bp = {
    class: "multiple-list"
}
  , Gp = {
    class: "box"
}
  , Ap = ["onClick"]
  , Mp = {
    class: "x-bet-list"
}
  , Pp = {
    class: "item"
}
  , Dp = {
    class: "lab"
}
  , Op = {
    class: "number"
}
  , Ep = {
    class: "item"
}
  , qp = {
    class: "lab"
}
  , jp = {
    class: "balance"
}
  , Hp = {
    class: "item"
}
  , Wp = {
    class: "lab"
}
  , Fp = {
    class: "amount"
}
  , Vp = {
    key: 0,
    class: "x-bet-wallet"
}
  , Up = {
    class: "tip"
}
  , Kp = {
    class: "x-bet-agree"
}
  , Xp = {
    class: "agree"
}
  , Qp = {
    class: "x-bet-foot"
}
  , Zp = F({
    __name: "betpopup",
    props: {
        betShow: {
            type: Boolean,
            required: !0,
            default: !1
        },
        betQuantity: {
            type: Number,
            required: !0,
            default: 0
        },
        timeIndex: {
            type: Number,
            required: !0,
            default: 0
        },
        totalAmount: {
            type: Number,
            required: !0,
            default: 0
        },
        balance: {
            type: Number,
            required: !0,
            default: 0
        },
        lotteryList: {
            type: Array,
            required: !0
        },
        betType: {
            type: Array,
            required: !0
        },
        countVal: {
            type: [String, Number],
            required: !0
        },
        multipleList: {
            type: Array,
            required: !0
        },
        checked: {
            type: Boolean,
            required: !0,
            default: !1
        },
        preSaleRule: {
            type: Boolean,
            required: !0,
            default: !1
        },
        lotteryTab: {
            type: Array,
            required: !0
        }
    },
    emits: ["getClear", "onStepper", "changeStep", "onMltiple", "checkboxChange", "onCancel", "update:checked", "update:betShow", "update:countVal", "update:preSaleRule", "onBet"],
    setup(s, {emit: i}) {
        const o = s
          , l = ct()
          , g = k => {
            i("getClear", k)
        }
          , m = k => {
            i("onStepper", k)
        }
          , c = k => {
            i("changeStep", k)
        }
          , u = k => {
            i("onMltiple", k)
        }
          , p = k => {
            i("checkboxChange", k)
        }
          , r = () => {
            i("onCancel")
        }
          , b = () => {
            i("onBet")
        }
          , _ = k => {
            const {lotteryTab: y, timeIndex: f} = o;
            let z = y[f].games.find(L => L.type == k);
            return z == null ? void 0 : z.typeImg
        }
          , {checked: w, betShow: T, countVal: N, preSaleRule: v} = oa(o, i);
        return (k, y) => {
            const f = W("van-icon")
              , z = W("van-field")
              , L = W("van-checkbox")
              , x = W("van-popup")
              , I = Dt("lazy");
            return n(),
            J(x, {
                show: d(T),
                "onUpdate:show": y[7] || (y[7] = R => ue(T) ? T.value = R : null),
                position: "bottom",
                "close-on-click-overlay": !1,
                style: {
                    borderRadius: "15px 15px 0 0"
                }
            }, {
                default: P( () => [t("div", yp, [t("div", $p, [E(e(k.$t("betting")) + " ", 1), t("div", {
                    class: "clear",
                    onClick: y[0] || (y[0] = R => g(1))
                }, [C(f, {
                    class: "icon",
                    name: "delete-o"
                }), E(e(k.$t("Clear")), 1)])]), $("  "), $(` <div class="x-bet-maxbet" v-if="tipShow"><span class="tip"> {{ $t('d4BetTip',[7000]) }}</span></div> `), t("div", wp, [t("h5", Tp, e(k.$t("ColorSpecies")), 1), t("ul", Cp, [(n(!0),
                a(S, null, G(k.lotteryList, (R, M) => (n(),
                a("li", {
                    class: "item",
                    key: M
                }, [dt(t("img", Lp, null, 512), [[I, _(R)]])]))), 128))])]), t("div", Np, [t("h5", zp, e(k.$t("xosoTxt78")), 1), t("ul", Ip, [(n(!0),
                a(S, null, G(k.betType, (R, M) => (n(),
                a("li", {
                    class: "item",
                    key: M
                }, e(k.$t("d4gameType" + R)), 1))), 128))])]), $(" 投注 "), ke(k.$slots, "default", {}, void 0, !0), t("div", xp, [t("div", Sp, e(k.$t("multiple")), 1), t("div", Rp, [t("div", {
                    class: "li minus",
                    onClick: y[1] || (y[1] = R => m(1))
                }, [C(f, {
                    name: "minus"
                })]), C(z, {
                    class: "digit",
                    modelValue: d(N),
                    "onUpdate:modelValue": y[2] || (y[2] = R => ue(N) ? N.value = R : null),
                    type: "digit",
                    maxlength: 5,
                    onInput: c
                }, null, 8, ["modelValue"]), t("div", {
                    class: "li plus",
                    onClick: y[3] || (y[3] = R => m(2))
                }, [C(f, {
                    name: "plus"
                })])])]), t("div", Bp, [t("div", Gp, [(n(!0),
                a(S, null, G(k.multipleList, (R, M) => (n(),
                a("div", {
                    key: M,
                    class: B(d(N) == R ? "active item" : "item"),
                    onClick: A => u(R)
                }, " X" + e(R), 11, Ap))), 128))])]), t("div", Mp, [t("div", Pp, [t("div", Dp, e(k.$t("quantity")), 1), t("div", Op, e(k.betQuantity) + e(k.$t("note")), 1)]), t("div", Ep, [t("div", qp, e(k.$t("walletBalance")), 1), t("div", jp, e(d(Ct)(k.balance)), 1)]), t("div", Hp, [t("div", Wp, e(k.$t("betAmounts")), 1), t("div", Fp, e(d(pa)(k.totalAmount)), 1), $("K")])]), k.totalAmount > k.balance ? (n(),
                a("div", Vp, [t("div", Up, [C(f, {
                    name: "warning-o",
                    color: "var(--norm_red-color)",
                    size: "17"
                }), E(" " + e(k.$t("insufficientWallet")), 1)]), t("div", {
                    class: "txt",
                    onClick: y[4] || (y[4] = R => d(l).push({
                        name: "Recharge"
                    }))
                }, e(k.$t("torecharge")) + " >>", 1)])) : $("v-if", !0), t("div", Kp, [C(L, {
                    modelValue: d(w),
                    "onUpdate:modelValue": y[5] || (y[5] = R => ue(w) ? w.value = R : null),
                    "checked-color": "var(--main-color)",
                    onChange: p
                }, {
                    default: P( () => [t("div", Xp, e(k.$t("agree")), 1)]),
                    _: 1
                }, 8, ["modelValue"]), t("span", {
                    class: "txt",
                    onClick: y[6] || (y[6] = R => v.value = !0)
                }, e(k.$t("presaleRules")), 1)])]), t("div", Qp, [t("div", {
                    class: "cancel",
                    onClick: r
                }, e(k.$t("cancel")), 1), t("div", {
                    class: "bet",
                    onClick: b
                }, e(k.$t("betting")), 1)])]),
                _: 3
            }, 8, ["show"])
        }
    }
});
const Yp = V(Zp, [["__scopeId", "data-v-3557dd80"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/home/AllLotteryGames/4D/components/betpopup.vue"]])
  , Jp = {
    class: "x-bet"
}
  , tg = {
    key: 0,
    class: "x-bet-box"
}
  , eg = {
    class: "item"
}
  , ig = {
    class: "pay"
}
  , ng = {
    class: "txt"
}
  , ag = {
    class: "item"
}
  , og = {
    class: "num"
}
  , sg = {
    class: "txt"
}
  , lg = {
    key: 1,
    class: "x-bet-pay"
}
  , cg = {
    class: "x-bet-title"
}
  , rg = {
    class: "name"
}
  , ug = {
    key: 2,
    class: "x-bet-dupleList"
}
  , dg = {
    class: "digits"
}
  , pg = {
    class: "sub"
}
  , gg = {
    class: "list"
}
  , bg = {
    class: "item"
}
  , mg = F({
    __name: "betcontent",
    props: {
        tabId: {
            type: Number,
            required: !0,
            default: 0
        },
        betPay: {
            type: Number,
            required: !0,
            default: 0
        },
        num: {
            type: String,
            required: !0
        },
        dupleList: {
            type: Array,
            required: !0
        },
        tabList: {
            type: Array,
            required: !0
        }
    },
    setup(s) {
        return (i, o) => (n(),
        a("div", Jp, [$(" 输入投注 "), i.tabId === 1 ? (n(),
        a("div", tg, [t("div", eg, [t("span", ig, e(i.$t("d4gamePay" + i.betPay)), 1), t("p", ng, e(i.$t("gamePlay")), 1)]), t("div", ag, [t("span", og, e(i.num), 1), t("p", sg, e(i.$t("bettingnumber")), 1)])])) : $("v-if", !0), $(" 选择投注 "), i.tabId === 2 ? (n(),
        a("div", lg, [t("h5", cg, e(i.$t("gamePlay")), 1), t("div", rg, e(i.$t("d4gamePay" + i.betPay)), 1)])) : $("v-if", !0), i.tabId === 2 ? (n(),
        a("div", ug, [(n(!0),
        a(S, null, G(i.dupleList, (l, g) => (n(),
        a("div", {
            class: "box",
            key: g
        }, [t("div", dg, [t("div", pg, e(i.tabList[g].name), 1), t("div", gg, [(n(!0),
        a(S, null, G(l.list, (m, c) => (n(),
        a("div", {
            class: "num",
            key: c
        }, [t("div", bg, e(m), 1)]))), 128))])])]))), 128))])) : $("v-if", !0)]))
    }
});
const _g = V(mg, [["__scopeId", "data-v-d0caa9aa"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/home/AllLotteryGames/4D/components/betcontent.vue"]])
  , Qn = h(!1)
  , nn = h(!1)
  , Zn = h(0)
  , xi = h()
  , Yn = h();
function pi() {
    const s = Et({
        timeVal: _e().format("YYYY-MM-DD"),
        timeIndex: 0,
        lotteryList: [],
        lotteryTab: [],
        tabId: 1,
        rollNum: 0,
        betQuantity: 0,
        betAmount: 0,
        totalAmount: 0,
        betType: [],
        betTypeList: [],
        betPay: 1,
        betPayList: [],
        dupleList: [{
            list: []
        }, {
            list: []
        }, {
            list: []
        }, {
            list: []
        }],
        allActive: [],
        banbetpay: 0,
        multipleList: [1, 5, 10, 20, 50, 100],
        betAmountList: [10, 50, 100, 500, 1e3, 5e3],
        duplex: !1,
        balance: 0,
        stopTime: null
    })
      , {t: i} = gt()
      , {setLoading: o} = Bi()
      , l = h("")
      , g = h(1)
      , m = h(!0)
      , c = h(!1)
      , u = h(!1)
      , p = h([{}])
      , r = h()
      , b = h()
      , _ = [{
        name: i("xosoTxt90"),
        type: 0
    }, {
        name: i("xosoTxt89"),
        type: 1
    }, {
        name: i("xosoTxt88"),
        type: 2
    }, {
        name: i("xosoTxt87"),
        type: 3
    }]
      , w = Q( () => s.timeVal)
      , T = Q( () => s.timeIndex)
      , N = Q( () => s.lotteryList)
      , v = Q( () => s.lotteryTab)
      , k = Q( () => s.tabId)
      , y = Q( () => s.rollNum)
      , f = Q( () => s.betType)
      , z = Q( () => s.betTypeList)
      , L = Q( () => s.betPay)
      , x = Q( () => s.betPayList)
      , I = Q( () => s.betAmount)
      , R = Q( () => s.totalAmount)
      , M = Q( () => s.betQuantity)
      , A = Q( () => s.banbetpay)
      , D = Q( () => s.dupleList)
      , j = Q( () => s.allActive)
      , X = Q( () => s.multipleList)
      , rt = Q( () => s.betAmountList)
      , ht = Q( () => s.duplex)
      , st = Q( () => s.balance)
      , at = U => {
        const et = [i("Sunday"), i("Monday"), i("Tuesday"), i("Wednesday"), i("Thursday"), i("Friday"), i("Saturday")]
          , pt = new Date(U);
        return et[pt.getDay()]
    }
      , Y = (U, et) => {
        s.timeIndex = et,
        s.timeVal = U.date,
        qt(1),
        Qn.value = !1
    }
      , _t = (U, et) => {
        if (s.lotteryList.includes(U.type)) {
            let pt = s.lotteryList.indexOf(U.type);
            s.lotteryList.splice(pt, 1)
        } else
            s.lotteryList.push(U.type);
        tt(s.betType.length, s.betAmount, s.betPay)
    }
      , Bt = U => {
        s.tabId = U,
        qt(0)
    }
      , qt = U => {
        l.value = "",
        s.betPay = 1,
        s.rollNum = 0,
        s.betType.length = 0,
        s.betAmount = s.betAmountList[0],
        s.dupleList.forEach(et => et.list = []),
        s.allActive.length = 0,
        g.value = 1,
        bt(),
        u.value = !1,
        U == 1 && (s.lotteryList.length = 0)
    }
      , bt = () => {
        s.totalAmount = 0,
        s.betQuantity = 0,
        s.banbetpay = 0
    }
      , Ot = () => {
        if (s.rollNum >= 2 || l.value.length >= 4)
            return Pt(i("EnterTip"));
        s.betPay = 5,
        l.value += "R",
        s.rollNum = Tt(l.value.split("")),
        tt(s.betType.length, s.betAmount, s.betPay)
    }
      , Vt = U => {
        l.value = U.target.value,
        l.value == "" && (s.betPay = 1),
        l.value.length !== 4 ? bt() : wt(U.target.value) ? (tt(s.betType.length, s.betAmount, s.betPay),
        s.banbetpay = ft(l.value),
        s.banbetpay === 1 && (s.betPay = 1)) : (l.value = "",
        s.betPay = 1,
        Pt(i("FormatTip1"))),
        s.rollNum = Tt(l.value.split(""))
    }
      , yt = U => {
        if (U.target.value == "" || U.target.value.length !== 4)
            return;
        wt(U.target.value) || (l.value = "",
        s.betPay = 1,
        Pt(i("FormatTip1")))
    }
      , wt = U => /^[0-9]{4}|\R[0-9]{3}|[0-9]{1}\R[0-9]{2}|[0-9]{2}\R[0-9]{1}|\R[0-9]{2}\R|[0-9]{2}\R{2}|\R{2}[0-9]{2}|[0-9]{3}\R|[0-9]\R{2}[0-9]|[0-9]\R[0-9]\R|\R[0-9]\R[0-9]$/.test(U)
      , Tt = U => {
        let et = U.indexOf("R")
          , pt = 0;
        for (; et !== -1; )
            pt++,
            et = U.indexOf("R", et + 1);
        return pt
    }
      , $t = U => {
        const {betType: et, betAmount: pt, betPay: It} = s;
        if (et.includes(U)) {
            let Ht = et.indexOf(U);
            et.splice(Ht, 1)
        } else
            et.push(U);
        tt(et.length, pt, It)
    }
      , ot = U => {
        s.betPay = U,
        tt(s.betType.length, s.betAmount, U)
    }
      , Z = U => {
        s.betAmount = U,
        tt(s.betType.length, U, s.betPay)
    }
      , tt = (U, et, pt) => {
        let {tabId: It, dupleList: Ht, lotteryList: Mt} = s;
        if (It === 1) {
            if (l.value.length !== 4)
                return !1;
            O(U, et, l.value, pt)
        } else if (ze(Ht))
            s.betQuantity = vt(Ht) * Mt.length * s.betType.length,
            s.totalAmount = s.betQuantity * et * Mt.length * g.value;
        else {
            const Ut = Ht.map(jt => jt.list[0]).join("");
            if (Ut.length !== 4)
                return;
            s.banbetpay = ft(Ut),
            O(U, et, Ut, pt)
        }
    }
      , O = (U, et, pt, It) => {
        let {rollNum: Ht, lotteryList: Mt} = s
          , Ut = U * et * Mt.length * g.value
          , jt = U * Mt.length
          , ee = 0
          , ce = 0;
        if (It === 1 || It === 2)
            ee = Ut,
            ce = jt;
        else if (It === 3) {
            const qe = ft(pt);
            ee = Ut * qe,
            ce = jt * qe
        } else if (It === 4) {
            const qe = it(pt);
            ee = Ut * (qe ? 1 : 2),
            ce = jt * (qe ? 1 : 2)
        } else
            It === 5 && (ee = Ut * (Ht > 0 ? Ht == 1 ? 10 : 10 * 10 : 0),
            ce = jt * (Ht > 0 ? Ht == 1 ? 10 : 10 * 10 : 0));
        s.totalAmount = ee,
        s.betQuantity = ce
    }
      , it = U => U === U.split("").reverse().join("");
    function ft(U) {
        function et(jt) {
            return jt <= 1 ? 1 : jt * et(jt - 1)
        }
        let pt = U.split("").map(Number)
          , It = [...new Set(pt)]
          , Ht = et(pt.length)
          , Mt = 1;
        for (const jt of It) {
            const ee = pt.filter(ce => ce === jt).length;
            Mt *= et(ee)
        }
        return Ht / Mt
    }
    const Gt = U => {
        const {dupleList: et, allActive: pt, betType: It, betAmount: Ht} = s;
        if (et[U].list = [],
        pt.includes(U)) {
            let Mt = pt.indexOf(U);
            pt.splice(Mt, 1)
        } else {
            pt.push(U);
            for (let Mt = 0; Mt < 10; Mt++)
                et[U].list.push(Mt)
        }
        ae(),
        tt(It.length, Ht)
    }
      , ve = (U, et) => {
        const {dupleList: pt, allActive: It, betType: Ht, betAmount: Mt, betPay: Ut} = s
          , jt = pt[U].list;
        if (jt.includes(et)) {
            let ee = jt.indexOf(et);
            jt.splice(ee, 1)
        } else
            jt.push(et);
        if (jt.length === 10)
            It.push(U);
        else if (It.includes(U)) {
            let ee = It.indexOf(U);
            It.splice(ee, 1)
        }
        if (ae(),
        vt(pt) > 0) {
            if (tt(Ht.length, Mt, Ut),
            vt(pt) === 1) {
                const ee = pt.map(ce => ce.list[0]).join("");
                s.banbetpay = ft(ee)
            }
            s.banbetpay === 1 && (s.betPay = 1)
        } else
            ze(pt) ? s.banbetpay = ze(pt) ? 1 : 0 : bt()
    }
      , ae = () => {
        const {dupleList: U} = s;
        s.duplex = ze(U),
        s.banbetpay = ze(U) ? 1 : 0,
        ze(U) && (s.betPay = 1)
    }
    ;
    function ze(U) {
        for (let et = 0; et < U.length; et++) {
            const pt = U[et].list;
            if (Array.isArray(pt) && pt.length > 1)
                return !0
        }
        return !1
    }
    function vt(U) {
        let et = 1;
        return U.forEach( (pt, It) => {
            et *= pt.list.length
        }
        ),
        et
    }
    const Ie = () => {
        u.value = !0
    }
      , Be = U => {
        const {betType: et, betAmount: pt, betPay: It} = s;
        switch (U) {
        case 1:
            g.value > 1 && g.value--;
            break;
        case 2:
            g.value++;
            break
        }
        tt(et.length, pt, It)
    }
      , xe = U => {
        const {betType: et, betAmount: pt, betPay: It} = s;
        g.value = U.target.value,
        tt(et.length, pt, It)
    }
      , We = U => {
        const {betType: et, betAmount: pt, betPay: It} = s;
        g.value = U,
        tt(et.length, pt, It)
    }
      , xt = U => {
        m.value = U
    }
      , $e = () => {
        const {lotteryList: U, lotteryTab: et, timeIndex: pt, tabId: It, betPay: Ht, betType: Mt, betQuantity: Ut, betAmount: jt, dupleList: ee, totalAmount: ce, balance: qe} = s;
        if (ce > qe)
            return Pt(i("wfDesc3"));
        if (Ut / U.length > 7e3)
            return Pt(i("d4BetTip", [7e3]));
        if (!m.value)
            return Pt(i("agreePresaleRules"));
        let de = {};
        de.type = U,
        de.gameType = Ht;
        let vi = "";
        It === 1 ? vi = l.value : vi = ee.map(ni => ni.list.sort( (Ae, je) => Ae - je).join(",")).join("|"),
        de.betContent = vi,
        de.betType = Mt,
        de.betMethod = It,
        de.betNumber = Ut,
        de.multiple = Number(g.value),
        de.amount = jt,
        de.issueNumber = U.map(ni => {
            const Ae = et[pt].games.find(je => je.type === ni);
            return Ae == null ? void 0 : Ae.issueNumber
        }
        ),
        u.value = !1,
        Li(de),
        ti()
    }
      , ti = () => {
        setTimeout( () => {
            nn.value = !1
        }
        , 1500)
    }
      , we = async () => {
        const U = await nt(bn());
        U != null && U.data && (s.balance = (U == null ? void 0 : U.data.amount) || 0)
    }
      , Ui = async () => {
        const U = await nt(es());
        U != null && U.data && (s.multipleList = (U == null ? void 0 : U.data.betMultiplier) || [],
        s.betAmountList = (U == null ? void 0 : U.data.betAmount) || [],
        s.betTypeList = (U == null ? void 0 : U.data.betType) || [],
        s.betPayList = (U == null ? void 0 : U.data.gameType) || [],
        s.betAmount = (U == null ? void 0 : U.data.betAmount[0]) || 0)
    }
      , te = async () => {
        o(!0);
        const U = await nt(is());
        U != null && U.data && (s.timeVal = U.data[s.timeIndex].date,
        s.lotteryTab = (U == null ? void 0 : U.data) || []),
        o(!1)
    }
      , Li = async U => {
        const et = await nt(ns(U));
        (et == null ? void 0 : et.code) === 0 ? (nn.value = !0,
        we(),
        Zn.value === 1 && Ge({
            pageSize: 10,
            pageNo: 1,
            type: 0,
            date: _e(new Date).format("YYYY-MM-DD") + " 00:00:00"
        }),
        ti()) : te(),
        qt(1)
    }
      , Qt = async () => {
        o(!0),
        p.value.length = 0;
        const U = await nt(as());
        U != null && U.data && (U == null || U.data.forEach(et => {
            let pt = []
              , It = []
              , Ht = [];
            et.items.forEach(Mt => {
                Mt.playId.split("_").length == 1 ? Ht.push({
                    ...Mt,
                    code: Mt.playId
                }) : (Mt.playId.split("_")[0] == "1" && pt.push({
                    ...Mt,
                    code: Mt.playId.split("_")[1]
                }),
                Mt.playId.split("_")[0] == "2" && It.push({
                    ...Mt,
                    code: Mt.playId.split("_")[1]
                }))
            }
            ),
            p.value.push({
                playTypeId: et.playTypeId,
                playTypeTitle: et.playTypeTitle,
                lists: [{
                    type: 1,
                    list: pt
                }, {
                    type: 2,
                    list: It
                }, {
                    type: 3,
                    list: Ht
                }]
            })
        }
        )),
        o(!1)
    }
      , _i = async () => {
        if (xi.value)
            return;
        o(!0);
        const U = await nt(os());
        U != null && U.data && (xi.value = U.data.map(et => (et.typeName = i(`d4LType${et.typeId}`),
        et)),
        xi.value.unshift({
            typeId: 0,
            typeName: i("all")
        })),
        o(!1)
    }
      , Ge = async U => {
        o(!0);
        const et = await nt(ss(U));
        et != null && et.data && (Yn.value = (et == null ? void 0 : et.data) || {}),
        o(!1)
    }
      , ei = async () => {
        o(!0);
        const U = await nt(ls());
        U != null && U.data && (r.value = (U == null ? void 0 : U.data) || []),
        o(!1)
    }
      , Ee = async U => {
        o(!0);
        const et = await nt(cs(U));
        et && (b.value = (et == null ? void 0 : et.data) || {}),
        o(!1)
    }
      , ii = async U => {
        const et = await nt(rs(U));
        return new Promise(async (pt, It) => {
            et ? pt(et) : It(et)
        }
        )
    }
    ;
    return Ve( () => {
        clearInterval(s.stopTime)
    }
    ),
    {
        tabList: _,
        getTimeWeek: at,
        onTime: Y,
        lotterTab: _t,
        onTab: Bt,
        getClear: qt,
        onRoll: Ot,
        getInput: Vt,
        getBlur: yt,
        onBetType: $t,
        onBetpay: ot,
        onAmount: Z,
        onClickBet: Ie,
        addNumber: ve,
        allAddnum: Gt,
        onStepper: Be,
        changeStep: xe,
        onMltiple: We,
        checkboxChange: xt,
        onBet: $e,
        getWinsUserAmount: we,
        getGameConfig: Ui,
        getGameIssue: te,
        getOddsList: Qt,
        getTypeList: _i,
        getMy4DHistory: Ge,
        get4DResult: ei,
        gameResultByType: Ee,
        gameCancelOrder: ii,
        gameListIndex: Zn,
        timeVal: w,
        lotteryTab: v,
        timeIndex: T,
        lotteryList: N,
        timeShow: Qn,
        betShow: u,
        tabId: k,
        rollNum: y,
        banbetpay: A,
        num: l,
        betType: f,
        betTypeList: z,
        betPay: L,
        betPayList: x,
        count: I,
        totalAmount: R,
        betQuantity: M,
        allActive: j,
        dupleList: D,
        countVal: g,
        checked: m,
        preSaleRule: c,
        multipleList: X,
        betAmountList: rt,
        duplex: ht,
        balance: st,
        promptShow: nn,
        oddsList: p,
        typeList: xi,
        myHistory: Yn,
        newGameResult: r,
        gameResultByTypeO: b
    }
}
const vg = {
    key: 0,
    class: "resultBox"
}
  , kg = {
    class: "r123"
}
  , hg = {
    class: "r"
}
  , fg = {
    class: "num"
}
  , yg = {
    class: "r"
}
  , $g = {
    class: "num"
}
  , wg = {
    class: "r"
}
  , Tg = {
    class: "num"
}
  , Cg = {
    class: "title"
}
  , Lg = {
    class: "rOther"
}
  , Ng = {
    class: "title"
}
  , zg = {
    class: "rOther"
}
  , Ig = F({
    __name: "showResult",
    props: {
        data: {
            type: null,
            required: !1
        }
    },
    setup(s) {
        return (i, o) => {
            var l, g, m, c, u;
            return i.data ? (n(),
            a("div", vg, [t("div", kg, [t("div", hg, [t("div", fg, [(n(!0),
            a(S, null, G((l = i.data) == null ? void 0 : l.firstPrize.split(""), (p, r) => (n(),
            a("span", {
                key: r
            }, e(p), 1))), 128))]), t("p", null, e(i.$t("d4gameType3")), 1)]), t("div", yg, [t("div", $g, [(n(!0),
            a(S, null, G((g = i.data) == null ? void 0 : g.secondPrize.split(""), (p, r) => (n(),
            a("span", {
                key: r
            }, e(p), 1))), 128))]), t("p", null, e(i.$t("d4gameType4")), 1)]), t("div", wg, [t("div", Tg, [(n(!0),
            a(S, null, G((m = i.data) == null ? void 0 : m.thirdPrize.split(""), (p, r) => (n(),
            a("span", {
                key: r
            }, e(p), 1))), 128))]), t("p", null, e(i.$t("d4gameType5")), 1)])]), t("div", Cg, e(i.$t("d4gameType6")), 1), t("div", Lg, [(n(!0),
            a(S, null, G((c = i.data) == null ? void 0 : c.specialPrize.split(","), (p, r) => (n(),
            a("span", {
                key: r
            }, e(p), 1))), 128))]), t("div", Ng, e(i.$t("d4gameType7")), 1), t("div", zg, [(n(!0),
            a(S, null, G((u = i.data) == null ? void 0 : u.consolationPrize.split(","), (p, r) => (n(),
            a("span", {
                key: r
            }, e(p), 1))), 128))])])) : $("v-if", !0)
        }
    }
});
const hn = V(Ig, [["__scopeId", "data-v-fd6be9e5"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/AllLotteryGames/4D/showResult.vue"]])
  , Oe = s => (Nt("data-v-aec2245d"),
s = s(),
zt(),
s)
  , xg = {
    key: 0,
    class: "gameBox"
}
  , Sg = {
    class: "items"
}
  , Rg = ["onClick"]
  , Bg = {
    class: "left"
}
  , Gg = {
    class: "time"
}
  , Ag = {
    class: "right"
}
  , Mg = {
    key: 0,
    class: "info"
}
  , Pg = {
    class: "order"
}
  , Dg = ["onClick"]
  , Og = {
    class: "copy"
}
  , Eg = Oe( () => t("div", {
    class: "line"
}, null, -1))
  , qg = ["onClick"]
  , jg = {
    class: "copy"
}
  , Hg = Oe( () => t("div", {
    class: "line"
}, null, -1))
  , Wg = {
    class: "li"
}
  , Fg = {
    class: "otherTip"
}
  , Vg = Oe( () => t("div", {
    class: "line"
}, null, -1))
  , Ug = {
    class: "li"
}
  , Kg = {
    class: "otherTip"
}
  , Xg = Oe( () => t("div", {
    class: "line"
}, null, -1))
  , Qg = {
    class: "li"
}
  , Zg = {
    class: "otherTip"
}
  , Yg = Oe( () => t("div", {
    class: "line"
}, null, -1))
  , Jg = {
    class: "li"
}
  , tb = {
    class: "otherTip"
}
  , eb = Oe( () => t("div", {
    class: "line"
}, null, -1))
  , ib = {
    class: "li"
}
  , nb = {
    class: "otherTip"
}
  , ab = Oe( () => t("div", {
    class: "line"
}, null, -1))
  , ob = {
    class: "li"
}
  , sb = {
    class: "type"
}
  , lb = Oe( () => t("div", {
    class: "line1"
}, [t("p")], -1))
  , cb = {
    class: "order"
}
  , rb = {
    class: "li"
}
  , ub = {
    class: "numTit"
}
  , db = {
    class: "num type"
}
  , pb = {
    class: "li"
}
  , gb = {
    class: "numTit"
}
  , bb = {
    class: "num select"
}
  , mb = {
    class: "n"
}
  , _b = {
    class: "li"
}
  , vb = Oe( () => t("div", {
    class: "line"
}, null, -1))
  , kb = {
    class: "li"
}
  , hb = {
    key: 1,
    class: "otherTip"
}
  , fb = Oe( () => t("div", {
    class: "line"
}, null, -1))
  , yb = {
    class: "li"
}
  , $b = {
    class: "otherTip"
}
  , wb = {
    class: "reTitle"
}
  , Tb = ["onClick"]
  , Cb = {
    class: "foot"
}
  , Lb = {
    class: "page"
}
  , Nb = F({
    __name: "showGame",
    props: {
        pageQuery: {
            type: Object,
            required: !0
        }
    },
    emits: ["update:pageQuery"],
    setup(s, {emit: i}) {
        const o = s
          , {pageQuery: l} = oa(o, i)
          , {gameCancelOrder: g, myHistory: m, tabList: c, getMy4DHistory: u} = pi()
          , {t: p} = gt()
          , r = h(!1)
          , b = h("")
          , _ = h(-1);
        function w(f) {
            switch (f) {
            case 1:
                return p("bettingResultState1");
            case 2:
                return p("bettingResultState3");
            case 3:
                return p("hasWon");
            case 4:
                return p("xosoTxt74");
            case 5:
                return p("xosoTxt75");
            case 6:
                return p("xosoTxt76");
            default:
                return f
            }
        }
        const T = () => {
            l.value.pageNo--,
            _.value = -1,
            u(l.value)
        }
          , N = () => {
            l.value.pageNo++,
            _.value = -1,
            u(l.value)
        }
          , v = f => {
            _.value === f ? _.value = -1 : _.value = f
        }
        ;
        function k(f) {
            r.value = !0,
            b.value = f
        }
        function y() {
            r.value = !1,
            g({
                orderNumber: b.value
            }).then(f => {
                f && (gn(p("xosoTxt96")),
                u(l.value))
            }
            ).catch(f => {}
            )
        }
        return (f, z) => {
            var I, R, M;
            const L = W("svg-icon")
              , x = W("van-icon");
            return n(),
            a(S, null, [((I = d(m)) == null ? void 0 : I.list.length) > 0 ? (n(),
            a("div", xg, [t("div", Sg, [(n(!0),
            a(S, null, G(d(m).list, (A, D) => (n(),
            a("div", {
                class: B(["itemBox", {
                    active: _.value === D
                }])
            }, [t("div", {
                class: "item",
                onClick: j => v(D)
            }, [t("div", Bg, [t("div", {
                class: B(["name", {
                    bold: _.value === D
                }])
            }, e(f.$t(`d4LType${A.type}`)), 3), t("div", Gg, e(A.createTime), 1)]), t("div", Ag, [t("div", {
                class: B(["state", `state${A.state}`])
            }, e(w(A.state)), 3), [2, 3].includes(A.state) ? (n(),
            a("div", {
                key: 0,
                class: B(["amount", A.state == 3 ? "green" : "red"])
            }, e(A.profitAmount), 3)) : $("v-if", !0)])], 8, Rg), _.value === D ? (n(),
            a("div", Mg, [t("div", Pg, [t("div", {
                class: "li",
                onClick: j => d(Fe)(A.orderNumber)
            }, [t("span", null, [C(L, {
                name: "Circle1",
                class: "svg1"
            }), E(" " + e(f.$t("orderNo")), 1)]), t("h6", Og, [E(e(A.orderNumber) + " ", 1), t("i", null, [C(L, {
                name: "copy",
                class: "svg2"
            })])])], 8, Dg), Eg, t("div", {
                class: "li",
                onClick: j => d(Fe)(A.issueNumber)
            }, [t("span", null, [C(L, {
                name: "Circle2",
                class: "svg"
            }), E(" " + e(f.$t("betNumber")), 1)]), t("h6", jg, [E(e(A.issueNumber) + " ", 1), C(L, {
                name: "copy",
                class: "svg2"
            })])], 8, qg), Hg, t("div", Wg, [t("span", null, [C(L, {
                name: "Circle2",
                class: "svg"
            }), E(" " + e(f.$t("ColorSpecies")), 1)]), t("h6", Fg, e(f.$t(`d4LType${A.type}`)), 1)]), Vg, t("div", Ug, [t("span", null, [C(L, {
                name: "Circle2",
                class: "svg"
            }), E(" " + e(f.$t("gamePlay")), 1)]), t("h6", Kg, e(f.$t(`d4gamePay${A.gameType}`)), 1)]), Xg, t("div", Qg, [t("span", null, [C(L, {
                name: "Circle2",
                class: "svg"
            }), E(" " + e(f.$t("betAmounts")), 1)]), t("h6", Zg, e(d(Ct)(A.amount)), 1)]), Yg, t("div", Jg, [t("span", null, [C(L, {
                name: "Circle2",
                class: "svg"
            }), E(" " + e(f.$t("xosoTxt79")), 1)]), t("h6", tb, e(A.betNumber) + " " + e(f.$t("note")), 1)]), eb, t("div", ib, [t("span", null, [C(L, {
                name: "Circle2",
                class: "svg"
            }), E(e(f.$t("multiple")), 1)]), t("h6", nb, e(A.multiple), 1)]), ab, t("div", ob, [t("span", null, [C(L, {
                name: "Circle2",
                class: "svg"
            }), E(e(f.$t("xosoTxt78")), 1)])]), t("div", sb, [(n(!0),
            a(S, null, G(A.betType.split(","), j => (n(),
            a("span", null, e(f.$t(`d4gameType${j}`)), 1))), 256))]), lb]), t("div", cb, [A.betMethod == 1 ? (n(),
            a(S, {
                key: 0
            }, [t("div", rb, [t("span", ub, [C(L, {
                name: "Circle1",
                class: "svg1"
            }), E(e(f.$t("bettingnumber")) + " (" + e(f.$t("EnterBet")) + ") ", 1)])]), t("div", db, [t("span", null, e(A.betContent), 1)])], 64)) : $("v-if", !0), A.betMethod == 2 ? (n(),
            a(S, {
                key: 1
            }, [t("div", pb, [t("span", gb, [C(L, {
                name: "Circle1",
                class: "svg1"
            }), E(e(f.$t("bettingnumber")) + " (" + e(f.$t("SelectBet")) + ")", 1)])]), t("div", bb, [(n(!0),
            a(S, null, G(A.betContent.split("|"), (j, X) => (n(),
            a("div", {
                key: X
            }, [t("h6", null, e(d(c)[X].name), 1), t("div", mb, [(n(!0),
            a(S, null, G(j.split(","), (rt, ht) => (n(),
            a("span", {
                key: ht
            }, e(rt), 1))), 128))])]))), 128))])], 64)) : $("v-if", !0), t("div", _b, [t("span", null, [C(L, {
                name: "Circle2",
                class: "svg"
            }), E(e(f.$t("statusMay")), 1)]), t("h6", {
                class: B(["stateInfo", `state${A.state}`])
            }, e(w(A.state)), 3)]), vb, t("div", kb, [t("span", null, [C(L, {
                name: "Circle2",
                class: "svg"
            }), E(e(f.$t("winOrLose")), 1)]), [2, 3].includes(A.state) ? (n(),
            a("h6", {
                key: 0,
                class: B(["amountInfo", A.state == 3 ? "green" : "red"])
            }, e(A.profitAmount), 3)) : (n(),
            a("h6", hb, "--"))]), fb, t("div", yb, [t("span", null, [C(L, {
                name: "Circle2",
                class: "svg"
            }), E(e(f.$t("createTime")), 1)]), t("h6", $b, e(A.createTime), 1)])]), [2, 3].includes(A.state) ? (n(),
            a(S, {
                key: 0
            }, [t("div", wb, e(f.$t("betResult")), 1), C(hn, {
                data: A
            }, null, 8, ["data"])], 64)) : $("v-if", !0), A.state == 1 ? (n(),
            a("div", {
                key: 1,
                class: "btn",
                onClick: j => k(A.orderNumber)
            }, e(f.$t("xosoTxt82")), 9, Tb)) : $("v-if", !0)])) : $("v-if", !0)], 2))), 256))]), t("div", Cb, [t("div", {
                class: B(["previous", {
                    disabled: d(m).pageNo <= 1
                }]),
                onClick: T
            }, [C(x, {
                name: "arrow-left",
                size: "20"
            })], 2), t("div", Lb, e(d(m).pageNo) + "/" + e((R = d(m)) == null ? void 0 : R.totalPage), 1), t("div", {
                class: B(["next", {
                    disabled: d(m).pageNo >= ((M = d(m)) == null ? void 0 : M.totalPage)
                }]),
                onClick: N
            }, [C(x, {
                name: "arrow",
                size: "20"
            })], 2)])])) : (n(),
            J(ge, {
                key: 1
            })), C(Re, {
                show: r.value,
                "onUpdate:show": z[0] || (z[0] = A => r.value = A),
                title: f.$t("xosoTxt99"),
                onConfirm: z[1] || (z[1] = A => y())
            }, null, 8, ["show", "title"])], 64)
        }
    }
});
const Ma = V(Nb, [["__scopeId", "data-v-aec2245d"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/AllLotteryGames/4D/showGame.vue"]])
  , zb = {
    class: "gamelist"
}
  , Ib = {
    class: "tab"
}
  , xb = {
    class: "con"
}
  , Sb = {
    class: "head"
}
  , Rb = ["src"]
  , Bb = F({
    __name: "gameList",
    setup(s) {
        const i = ct()
          , {gameListIndex: o, newGameResult: l, get4DResult: g, getMy4DHistory: m} = pi();
        function c(b) {
            o.value = b,
            r()
        }
        function u() {
            o.value == 0 ? i.push({
                name: "AllLotteryGames-4DLotteryResults"
            }) : o.value == 1 && i.push({
                name: "AllLotteryGames-4DmyGame"
            })
        }
        const p = Et({
            type: 0,
            date: _e(new Date).format("YYYY-MM-DD 00:00:00"),
            pageSize: 10,
            pageNo: 1
        });
        function r() {
            o.value == 0 ? g() : m(p)
        }
        return Lt( () => {
            r()
        }
        ),
        (b, _) => {
            var T;
            const w = W("svg-icon");
            return n(),
            a("div", zb, [t("div", Ib, [t("div", {
                class: B({
                    active: d(o) == 0
                }),
                onClick: _[0] || (_[0] = N => c(0))
            }, e(b.$t("d4Tip1")), 3), t("div", {
                class: B({
                    active: d(o) == 1
                }),
                onClick: _[1] || (_[1] = N => c(1))
            }, e(b.$t("myGame")), 3)]), t("div", xb, [t("div", {
                class: "more",
                onClick: u
            }, [E(e(b.$t("more")), 1), C(w, {
                name: "more"
            })]), d(o) == 0 ? (n(),
            a(S, {
                key: 0
            }, [(n(!0),
            a(S, null, G(d(l), N => (n(),
            a("div", {
                class: "items",
                key: N.issueNumber
            }, [t("div", Sb, [t("img", {
                src: N.typeImg,
                alt: ""
            }, null, 8, Rb), t("h1", null, e(b.$t(`d4LType${N.type}`)), 1), t("p", null, e(N.openDate) + " " + e(b.$t(`${d(_e)(N.openDate).format("dddd")}`)), 1)]), C(hn, {
                data: N
            }, null, 8, ["data"])]))), 128)), ((T = d(l)) == null ? void 0 : T.length) == 0 ? (n(),
            J(ge, {
                key: 0
            })) : $("v-if", !0)], 64)) : $("v-if", !0), d(o) == 1 ? (n(),
            J(Ma, {
                key: 1,
                pageQuery: p,
                "onUpdate:pageQuery": _[2] || (_[2] = N => p = N)
            }, null, 8, ["pageQuery"])) : $("v-if", !0)])])
        }
    }
});
const Gb = V(Bb, [["__scopeId", "data-v-e3178c7d"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/home/AllLotteryGames/4D/components/gameList.vue"]])
  , Ab = {
    class: "x-4d"
}
  , Mb = {
    class: "x-4d-more"
}
  , Pb = {
    class: "x-4d-body"
}
  , Db = {
    class: "x-4d-tab"
}
  , Ob = {
    class: "x-4d-content"
}
  , Eb = {
    key: 0,
    class: "enter"
}
  , qb = ["placeholder"]
  , jb = ["placeholder"]
  , Hb = {
    class: "box"
}
  , Wb = {
    class: "PreSale"
}
  , Fb = {
    class: "head"
}
  , Vb = {
    class: "body"
}
  , Ub = {
    class: "foot"
}
  , Kb = F({
    __name: "index",
    setup(s) {
        const {t: i} = gt()
          , o = ct()
          , {getTimeWeek: l, onTime: g, lotterTab: m, onTab: c, getClear: u, onRoll: p, getInput: r, getBlur: b, onBetType: _, onBetpay: w, onAmount: T, onClickBet: N, addNumber: v, allAddnum: k, onStepper: y, changeStep: f, onMltiple: z, checkboxChange: L, onBet: x, getWinsUserAmount: I, getGameConfig: R, getGameIssue: M, tabList: A, timeVal: D, lotteryTab: j, timeIndex: X, lotteryList: rt, timeShow: ht, betShow: st, tabId: at, num: Y, rollNum: _t, banbetpay: Bt, betType: qt, betTypeList: bt, betPay: Ot, betPayList: Vt, count: yt, totalAmount: wt, betQuantity: Tt, dupleList: $t, allActive: ot, countVal: Z, checked: tt, preSaleRule: O, multipleList: it, betAmountList: ft, duplex: Gt, balance: ve, promptShow: ae} = pi();
        return Lt( () => {
            I(),
            R(),
            M()
        }
        ),
        (ze, vt) => {
            const Ie = W("svg-icon")
              , Be = W("NavBar")
              , xe = W("van-button")
              , We = W("van-popup");
            return n(),
            a("div", Ab, [C(Be, {
                "left-arrow": "",
                onClickLeft: vt[2] || (vt[2] = xt => d(o).go(-1)),
                class: "main",
                title: "4D"
            }, {
                right: P( () => [t("div", Mb, [C(Ie, {
                    name: "howpay",
                    class: "svg",
                    onClick: vt[0] || (vt[0] = () => d(o).push({
                        name: "AllLotteryGames-4DPlay"
                    }))
                }), C(Ie, {
                    name: "odds",
                    class: "svg",
                    onClick: vt[1] || (vt[1] = () => d(o).push({
                        name: "AllLotteryGames-4DOdds"
                    }))
                })])]),
                _: 1
            }), $(" 头部彩种 "), C(Dd, {
                onOnTime: d(g),
                "lottery-tab": d(j),
                "time-index": d(X),
                onOnLotteryTab: d(m),
                "time-week": d(l),
                "lottery-list": d(rt),
                modelValue: d(ht),
                "onUpdate:modelValue": vt[3] || (vt[3] = xt => ue(ht) ? ht.value = xt : null),
                "time-val": d(D)
            }, null, 8, ["onOnTime", "lottery-tab", "time-index", "onOnLotteryTab", "time-week", "lottery-list", "modelValue", "time-val"]), t("div", Pb, [t("div", Db, [t("div", {
                onClick: vt[4] || (vt[4] = xt => d(c)(1)),
                class: B([d(at) == 1 ? "active" : ""])
            }, e(d(i)("EnterBet")), 3), t("div", {
                onClick: vt[5] || (vt[5] = xt => d(c)(2)),
                class: B([d(at) == 2 ? "active" : ""])
            }, e(d(i)("SelectBet")), 3)]), t("div", Ob, [d(at) === 1 ? (n(),
            a("div", Eb, [d(Ot) != 5 ? dt((n(),
            a("input", {
                key: 0,
                class: B(d(Y).length > 0 ? "input fz24" : "input"),
                oninput: "value=value.replace(/\\D/g,'')",
                "onUpdate:modelValue": vt[6] || (vt[6] = xt => ue(Y) ? Y.value = xt : null),
                type: "text",
                placeholder: d(i)("PenterNumber"),
                maxlength: "4",
                onInput: vt[7] || (vt[7] = (...xt) => d(r) && d(r)(...xt)),
                onBlur: vt[8] || (vt[8] = (...xt) => d(b) && d(b)(...xt))
            }, null, 42, qb)), [[cn, d(Y)]]) : dt((n(),
            a("input", {
                key: 1,
                class: B(d(Y).length > 0 ? "input fz24" : "input"),
                oninput: "value=value.replace(/[^A-Z0-9]/g,'').toUpperCase()",
                "onUpdate:modelValue": vt[9] || (vt[9] = xt => ue(Y) ? Y.value = xt : null),
                type: "text",
                placeholder: d(i)("PenterNumber"),
                maxlength: "4",
                onInput: vt[10] || (vt[10] = (...xt) => d(r) && d(r)(...xt)),
                onBlur: vt[11] || (vt[11] = (...xt) => d(b) && d(b)(...xt))
            }, null, 42, jb)), [[cn, d(Y)]]), dt(C(xe, {
                class: "btn",
                onClick: d(p)
            }, {
                default: P( () => [E("ROll")]),
                _: 1
            }, 8, ["onClick"]), [[Yt, d(Vt).includes(5)]])])) : $("v-if", !0), $(" 投注类型 "), C(Fd, {
                class: "mb30",
                "bet-type": d(qt),
                "bet-type-list": d(bt),
                onOnBetType: d(_)
            }, null, 8, ["bet-type", "bet-type-list", "onOnBetType"]), $(" 选择投注 下注盘 "), d(at) === 2 ? (n(),
            J(gp, {
                key: 1,
                "tab-list": d(A),
                "all-active": d(ot),
                "num-list": d($t),
                onAddNumber: d(v),
                onAllAddnum: d(k)
            }, null, 8, ["tab-list", "all-active", "num-list", "onAddNumber", "onAllAddnum"])) : $("v-if", !0), $(" 玩法 "), C(Yd, {
                class: "mb30",
                "roll-num": d(_t),
                "ban-bet-pay": d(Bt),
                "bet-pay-list": d(Vt),
                "bet-pay-id": d(Ot),
                duplex: d(Gt),
                onOnBetpay: d(w)
            }, null, 8, ["roll-num", "ban-bet-pay", "bet-pay-list", "bet-pay-id", "duplex", "onOnBetpay"]), $(" 投注金额 "), C(ap, {
                count: d(yt),
                list: d(ft),
                onOnAmount: d(T)
            }, null, 8, ["count", "list", "onOnAmount"])])]), $(" 开奖记录 && 我的比赛记录 "), C(Gb), C(fp, {
                "total-amount": d(wt),
                "bet-quantity": d(Tt),
                onOnBet: d(N)
            }, null, 8, ["total-amount", "bet-quantity", "onOnBet"]), $(" 投注弹窗 "), C(Yp, {
                betShow: d(st),
                "onUpdate:betShow": vt[12] || (vt[12] = xt => ue(st) ? st.value = xt : null),
                "bet-quantity": d(Tt),
                "lottery-tab": d(j),
                "time-index": d(X),
                "total-amount": d(wt),
                balance: d(ve),
                "lottery-list": d(rt),
                "bet-type": d(qt),
                "multiple-list": d(it),
                "count-val": d(Z),
                "onUpdate:countVal": vt[13] || (vt[13] = xt => ue(Z) ? Z.value = xt : null),
                checked: d(tt),
                "onUpdate:checked": vt[14] || (vt[14] = xt => ue(tt) ? tt.value = xt : null),
                "pre-sale-rule": d(O),
                "onUpdate:preSaleRule": vt[15] || (vt[15] = xt => ue(O) ? O.value = xt : null),
                onCheckboxChange: d(L),
                onOnCancel: vt[16] || (vt[16] = xt => st.value = !1),
                onGetClear: d(u),
                onOnStepper: d(y),
                onOnMltiple: d(z),
                onChangeStep: d(f),
                onOnBet: d(x)
            }, {
                default: P( () => [C(_g, {
                    num: d(Y),
                    "tab-id": d(at),
                    "bet-pay": d(Ot),
                    "duple-list": d($t),
                    "tab-list": d(A)
                }, null, 8, ["num", "tab-id", "bet-pay", "duple-list", "tab-list"])]),
                _: 1
            }, 8, ["betShow", "bet-quantity", "lottery-tab", "time-index", "total-amount", "balance", "lottery-list", "bet-type", "multiple-list", "count-val", "checked", "pre-sale-rule", "onCheckboxChange", "onGetClear", "onOnStepper", "onOnMltiple", "onChangeStep", "onOnBet"]), $(" 投注成功提示 "), C(We, {
                show: d(ae),
                "onUpdate:show": vt[17] || (vt[17] = xt => ue(ae) ? ae.value = xt : null),
                position: "center",
                class: "x-4d-prompt",
                style: {
                    borderRadius: "10px",
                    width: "8rem",
                    height: "80px"
                }
            }, {
                default: P( () => [t("div", Hb, [C(Ie, {
                    name: "success",
                    class: "svg"
                }), E(" " + e(ze.$t("code402")), 1)])]),
                _: 1
            }, 8, ["show"]), $(" 预售规则 "), C(We, {
                show: d(O),
                "onUpdate:show": vt[19] || (vt[19] = xt => ue(O) ? O.value = xt : null),
                class: "PreSaleRule",
                "close-on-click-overlay": !1,
                round: ""
            }, {
                default: P( () => [t("div", Wb, [t("div", Fb, e(d(i)("presaleRules")), 1), t("div", Vb, e(ze.$t("betPopTXT")), 1), t("div", Ub, [t("div", {
                    class: "btn",
                    onClick: vt[18] || (vt[18] = xt => O.value = !1)
                }, e(d(i)("iKonw")), 1)])])]),
                _: 1
            }, 8, ["show"]), $(` <van-popup v-model:show="preSaleRule" position="center" class="x-4d-prompt" :style="{ borderRadius: '10px',width:'8rem',height:'80px' }">
            <div class="box">
                
                预售规则
            </div>
        </van-popup> `)])
        }
    }
});
const Xb = V(Kb, [["__scopeId", "data-v-c4174cb0"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/home/AllLotteryGames/4D/index.vue"]])
  , lG = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Xb
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Qb = {
    class: "LR"
}
  , Zb = {
    class: "lotterys"
}
  , Yb = ["onClick"]
  , Jb = {
    alt: ""
}
  , tm = {
    class: "date"
}
  , em = {
    class: "dateBox"
}
  , im = {
    class: "result"
}
  , nm = F({
    __name: "index",
    setup(s) {
        const {typeList: i, getTypeList: o, gameResultByType: l, gameResultByTypeO: g} = pi();
        o();
        const {t: m} = gt()
          , c = ct()
          , u = h(0)
          , p = Q( () => i.value ? i.value.slice(1) : [])
          , {minDate: r, maxDate: b} = da(0)
          , _ = _e(b).startOf("day")
          , w = h(!1)
          , T = Et({
            type: 0,
            date: _.format("YYYY-MM-DD")
        });
        At( () => p, () => {
            p.value.length > 0 && (T.type = p.value[0].typeId,
            l(T))
        }
        , {
            deep: !0,
            immediate: !0
        });
        const N = Q( () => _e(T.date).format("YYYY-MM-DD") + " " + m(`${_e(T.date).format("dddd")}`))
          , v = y => {
            w.value = !1,
            T.date = _e(y).format("YYYY-MM-DD"),
            l(T)
        }
        ;
        function k(y, f) {
            u.value = f,
            T.type = y.typeId,
            l(T)
        }
        return (y, f) => {
            const z = W("NavBar")
              , L = W("svg-icon")
              , x = W("ArSelect")
              , I = W("van-calendar")
              , R = Dt("lazy");
            return n(),
            a("div", Qb, [C(z, {
                "left-arrow": "",
                onClickLeft: f[0] || (f[0] = () => d(c).back()),
                title: y.$t("d4Tip2")
            }, null, 8, ["title"]), t("div", Zb, [(n(!0),
            a(S, null, G(p.value, (M, A) => (n(),
            a("div", {
                class: B(["main", {
                    active: u.value === A
                }]),
                onClick: D => k(M, A),
                key: A
            }, [dt(t("img", Jb, null, 512), [[R, M.typeImg]])], 10, Yb))), 128))]), t("div", tm, [t("div", em, [C(L, {
                name: "arrLeft"
            }), C(x, {
                onClickSelect: f[1] || (f[1] = M => w.value = !0),
                selectName: N.value
            }, null, 8, ["selectName"]), C(L, {
                name: "arrLeft"
            })])]), t("div", im, [t("h1", null, e(y.$t("betResult")), 1), JSON.stringify(d(g)) !== "{}" ? (n(),
            J(hn, {
                key: 0,
                data: d(g)
            }, null, 8, ["data"])) : (n(),
            J(ge, {
                key: 1
            }))]), C(I, {
                show: w.value,
                "onUpdate:show": f[2] || (f[2] = M => w.value = M),
                onCancel: f[3] || (f[3] = () => w.value = !1),
                onConfirm: v,
                "min-date": d(r),
                "max-date": d(b)
            }, null, 8, ["show", "min-date", "max-date"])])
        }
    }
});
const am = V(nm, [["__scopeId", "data-v-d1d6b410"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/home/AllLotteryGames/4DLotteryResults/index.vue"]])
  , cG = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: am
}, Symbol.toStringTag, {
    value: "Module"
}))
  , gi = s => (Nt("data-v-789ad0bd"),
s = s(),
zt(),
s)
  , om = {
    class: "oddsBox"
}
  , sm = {
    class: "title"
}
  , lm = {
    class: "words"
}
  , cm = {
    class: "tabHead"
}
  , rm = {
    class: "tabCon1"
}
  , um = {
    class: "item"
}
  , dm = gi( () => t("div", null, null, -1))
  , pm = gi( () => t("div", null, null, -1))
  , gm = [dm, pm]
  , bm = {
    class: "tabHead h2"
}
  , mm = {
    class: "tabCon2"
}
  , _m = {
    class: "tabHead h2"
}
  , vm = {
    key: 0
}
  , km = {
    key: 1
}
  , hm = {
    key: 2
}
  , fm = gi( () => t("br", null, null, -1))
  , ym = gi( () => t("br", null, null, -1))
  , $m = gi( () => t("br", null, null, -1))
  , wm = gi( () => t("br", null, null, -1))
  , Tm = {
    class: "tabCon1 c2"
}
  , Cm = F({
    __name: "index",
    setup(s) {
        const {t: i} = gt()
          , o = ct()
          , {getOddsList: l, oddsList: g} = pi();
        return Lt( () => {
            l()
        }
        ),
        (m, c) => {
            const u = W("NavBar")
              , p = W("svg-icon");
            return n(),
            a("div", om, [C(u, {
                "left-arrow": "",
                title: d(i)("odds"),
                onClickLeft: c[0] || (c[0] = () => d(o).back())
            }, null, 8, ["title"]), (n(!0),
            a(S, null, G(d(g), r => {
                var b, _, w, T, N;
                return n(),
                a("div", {
                    class: "items",
                    key: r.playTypeId
                }, [t("div", sm, [t("div", lm, e(d(i)(`d4gamePay${r.playTypeId}`)), 1), C(p, {
                    name: "oddBg",
                    class: "odd"
                })]), r.playTypeId != 2 ? (n(),
                a(S, {
                    key: 0
                }, [t("div", cm, [t("span", null, e(d(i)("d4gameType1")), 1), t("span", null, e(d(i)("d4gameType2")), 1)]), t("div", rm, [(n(!0),
                a(S, null, G((b = r.lists) == null ? void 0 : b.filter(v => [1, 2].includes(v.type)), v => (n(),
                a("div", {
                    key: v.type
                }, [(n(!0),
                a(S, null, G(v.list, k => (n(),
                a("div", {
                    class: "item",
                    key: k.playId
                }, [t("div", null, e(d(i)(`d4gameType${k.code}`)), 1), t("div", null, e(k.odds > 0 ? k.odds : k.oddsDefault), 1)]))), 128)), v.list.length < 5 ? (n(),
                a(S, {
                    key: 0
                }, G(2, k => t("div", um, gm)), 64)) : $("v-if", !0)]))), 128))]), t("div", bm, [(n(!0),
                a(S, null, G((w = (_ = r.lists) == null ? void 0 : _.filter(v => [3].includes(v.type))[0]) == null ? void 0 : w.list, v => (n(),
                a("span", {
                    key: v.playId
                }, e(d(i)(`d4gameType${v.playId}`)), 1))), 128))]), t("div", mm, [(n(!0),
                a(S, null, G((N = (T = r.lists) == null ? void 0 : T.filter(v => [3].includes(v.type))[0]) == null ? void 0 : N.list, v => (n(),
                a("div", {
                    key: v.playId
                }, e(v.odds > 0 ? v.odds : v.oddsDefault), 1))), 128))])], 64)) : (n(!0),
                a(S, {
                    key: 1
                }, G(r.lists, v => (n(),
                a(S, null, [t("div", _m, [v.type == 1 ? (n(),
                a("span", vm, e(d(i)("d4gameType1")), 1)) : $("v-if", !0), v.type == 2 ? (n(),
                a("span", km, e(d(i)("d4gameType2")), 1)) : $("v-if", !0), v.type == 3 ? (n(),
                a("span", hm, e(d(i)("d4Tip3")), 1)) : $("v-if", !0), t("span", null, [E(e(d(i)("d4Tip4")), 1), fm, E("24")]), t("span", null, [E(e(d(i)("d4Tip4")), 1), ym, E("12")]), t("span", null, [E(e(d(i)("d4Tip4")), 1), $m, E("6")]), t("span", null, [E(e(d(i)("d4Tip4")), 1), wm, E("4")])]), t("div", Tm, [(n(!0),
                a(S, null, G(v.list, k => (n(),
                a("div", {
                    class: "itemR item",
                    key: k.playId
                }, [t("div", null, e(d(i)(`d4gameType${k.code}`)), 1), t("div", null, e(k.odds24 > 0 ? k.odds24 : k.oddsDefault24), 1), t("div", null, e(k.odds12 > 0 ? k.odds12 : k.oddsDefault12), 1), t("div", null, e(k.odds6 > 0 ? k.odds6 : k.oddsDefault6), 1), t("div", null, e(k.odds4 > 0 ? k.odds4 : k.oddsDefault4), 1)]))), 128))])], 64))), 256))])
            }
            ), 128))])
        }
    }
});
const Lm = V(Cm, [["__scopeId", "data-v-789ad0bd"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/home/AllLotteryGames/4DOdds/index.vue"]])
  , rG = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Lm
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Nm = {
    class: "playBox"
}
  , zm = {
    class: "con"
}
  , Im = {
    class: "tip"
}
  , xm = {
    class: "tip"
}
  , Sm = ["innerHTML"]
  , Rm = {
    class: "txt"
}
  , Bm = {
    key: 0,
    class: "num"
}
  , Gm = ["innerHTML"]
  , Am = F({
    __name: "index",
    setup(s) {
        const {t: i} = gt()
          , o = ct()
          , l = h(0)
          , g = h([{
            title: i("d4gamePay1"),
            tip1: i("Play4DTip2"),
            tip2: i("Play4DTip4"),
            txt: {
                tip1: "[1234]",
                tip2: "",
                tip3: [],
                tip4: i("Play4DTip1", ["1234"])
            }
        }, {
            title: i("d4gamePay5"),
            tip1: i("Play4DTip5"),
            tip2: i("Play4DTip6"),
            txt: {
                tip1: "[123R]",
                tip2: i("Play4DTip10", [10]),
                tip3: ["1230", "1231", "1232", "1233", "1234", "1235", "1236", "1237", "1238", "1239"],
                tip4: i("Play4DTip1", ["1234"])
            }
        }, {
            title: i("d4gamePay2"),
            tip1: i("Play4DTip7"),
            tip2: i("Play4DTip8"),
            txt: {
                tip1: "[1122]",
                tip2: i("Play4DTip11"),
                tip3: ["1122", "1212", "1221", "2112", "2121", "2211"],
                tip4: i("Play4DTip1", ["1212"])
            }
        }, {
            title: i("d4gamePay3"),
            tip1: i("Play4DTip9"),
            tip2: i("Play4DTip8"),
            txt: {
                tip1: "[1122]",
                tip2: i("Play4DTip10", [6]),
                tip3: ["1122", "1212", "1221", "2112", "2121", "2211"],
                tip4: i("Play4DTip1", ["1212"])
            }
        }, {
            title: i("d4gamePay4"),
            tip1: i("Play4DTip3"),
            tip2: i("Play4DTip4"),
            txt: {
                tip1: "[1234]",
                tip2: i("Play4DTip10", [2]),
                tip3: ["1234", "4321"],
                tip4: i("Play4DTip1", ["1234"])
            }
        }]);
        return (m, c) => {
            const u = W("NavBar")
              , p = W("van-icon")
              , r = W("van-tab")
              , b = W("van-tabs");
            return n(),
            a("div", Nm, [C(u, {
                "left-arrow": "",
                title: d(i)("lotteryManual"),
                onClickLeft: c[0] || (c[0] = () => d(o).back())
            }, null, 8, ["title"]), C(b, {
                active: l.value,
                "onUpdate:active": c[1] || (c[1] = _ => l.value = _),
                type: "card",
                "swipe-threshold": 3
            }, {
                default: P( () => [(n(!0),
                a(S, null, G(g.value, (_, w) => (n(),
                J(r, {
                    title: _.title,
                    key: w
                }, {
                    default: P( () => [t("div", zm, [t("h1", null, [C(p, {
                        name: "play",
                        class: "icon",
                        size: "20"
                    }), E(e(d(i)("betting")), 1)]), t("div", Im, e(_.tip1), 1), t("h1", null, [C(p, {
                        name: "play",
                        class: "icon",
                        size: "20"
                    }), E(e(d(i)("winningconditions")), 1)]), t("div", xm, [t("span", {
                        innerHTML: _.tip2
                    }, null, 8, Sm)]), t("div", Rm, [t("div", null, e(d(i)("example")), 1), t("div", null, e(d(i)("betting")) + ":   " + e(_.txt.tip1), 1), t("div", null, e(_.txt.tip2), 1), _.txt.tip3.length > 0 ? (n(),
                    a("div", Bm, [(n(!0),
                    a(S, null, G(_.txt.tip3, (T, N) => (n(),
                    a("span", {
                        key: N
                    }, e(T), 1))), 128))])) : $("v-if", !0), t("div", null, [E(e(d(i)("result")) + ":   ", 1), t("span", {
                        innerHTML: _.txt.tip4
                    }, null, 8, Gm)])])])]),
                    _: 2
                }, 1032, ["title"]))), 128))]),
                _: 1
            }, 8, ["active"])])
        }
    }
});
const Mm = V(Am, [["__scopeId", "data-v-fa33b84e"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/home/AllLotteryGames/4DPlay/index.vue"]])
  , uG = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Mm
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Pm = {
    class: "MG"
}
  , Dm = F({
    __name: "index",
    setup(s) {
        const {getTypeList: i, typeList: o, getMy4DHistory: l} = pi();
        i();
        const {t: g} = gt()
          , m = ct()
          , c = h(!1)
          , u = h(g("all"))
          , p = Et({
            type: 0,
            date: "",
            pageSize: 20,
            pageNo: 1
        });
        l(p);
        const r = async ({selectedOptions: b}) => {
            c.value = !1,
            p.type = b[0].typeId,
            p.pageNo = 1,
            u.value = b[0].typeName,
            l(p)
        }
        ;
        return (b, _) => {
            const w = W("NavBar")
              , T = W("ArSelect")
              , N = W("van-picker")
              , v = W("van-popup");
            return n(),
            a("div", Pm, [C(w, {
                "left-arrow": "",
                onClickLeft: _[0] || (_[0] = () => d(m).back()),
                title: b.$t("xosoTxt73")
            }, null, 8, ["title"]), C(T, {
                onClickSelect: _[1] || (_[1] = k => c.value = !0),
                selectName: u.value
            }, null, 8, ["selectName"]), C(Ma, {
                pageQuery: p,
                "onUpdate:pageQuery": _[2] || (_[2] = k => p = k)
            }, null, 8, ["pageQuery"]), C(v, {
                show: c.value,
                "onUpdate:show": _[4] || (_[4] = k => c.value = k),
                round: "",
                position: "bottom"
            }, {
                default: P( () => [C(N, {
                    "columns-field-names": {
                        text: "typeName",
                        value: "typeId"
                    },
                    columns: d(o),
                    onCancel: _[3] || (_[3] = k => c.value = !1),
                    onConfirm: r
                }, null, 8, ["columns"])]),
                _: 1
            }, 8, ["show"])])
        }
    }
});
const Om = V(Dm, [["__scopeId", "data-v-34a342e1"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/home/AllLotteryGames/4DmyGame/index.vue"]])
  , dG = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Om
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Em = {
    class: "Wallet__C"
}
  , qm = {
    class: "Wallet__C-balance"
}
  , jm = {
    class: "Wallet__C-balance-l1"
}
  , Hm = {
    class: "Wallet__C-balance-l2"
}
  , Wm = {
    class: "Wallet__C-balance-l3"
}
  , Fm = F({
    __name: "Wallet",
    setup(s, {expose: i}) {
        const {t: o} = gt()
          , l = h(0)
          , g = async (u=!0) => {
            const p = await nt(bn());
            p && (l.value = (p == null ? void 0 : p.data.amount) || 0,
            u && he(o("refreshSuccess")))
        }
          , m = ct()
          , c = u => {
            m.push({
                name: u
            })
        }
        ;
        return Lt( () => {
            g(!1)
        }
        ),
        i({
            getWinsUserAmount: g
        }),
        (u, p) => {
            const r = W("svg-icon")
              , b = Dt("throttle-click");
            return n(),
            a("div", Em, [t("div", qm, [t("div", jm, [dt((n(),
            a("div", null, [E(e(d(Ct)(l.value)), 1)])), [[b, {
                handler: g,
                wait: 2e3
            }]])]), t("div", Hm, [C(r, {
                name: "lottyWallet"
            }), t("div", null, e(u.$t("walletBalance")), 1)]), t("div", Wm, [t("div", {
                onClick: p[0] || (p[0] = _ => c("Withdraw"))
            }, e(u.$t("withdraw")), 1), t("div", {
                onClick: p[1] || (p[1] = _ => c("Recharge"))
            }, e(u.$t("recharge")), 1)])])])
        }
    }
});
const Mi = V(Fm, [["__scopeId", "data-v-7dd1adab"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/AllLotteryGames/WinGo/Wallet.vue"]])
  , Vm = {
    class: "GameList__C"
}
  , Um = ["onClick"]
  , Km = ["innerHTML"]
  , Xm = F({
    __name: "GameList",
    props: {
        gameList: {
            type: null,
            required: !0,
            default: {
                type: Array,
                default: () => []
            }
        },
        currentGameIndex: {
            type: null,
            required: !0,
            default: {
                type: Number,
                default: 0
            }
        }
    },
    setup(s) {
        const i = s;
        return (o, l) => (n(),
        a("div", Vm, [(n(!0),
        a(S, null, G(i.gameList, (g, m) => (n(),
        a("div", {
            key: m,
            class: B(["GameList__C-item", {
                active: o.currentGameIndex == m
            }]),
            onClick: c => o.$emit("changeGame", m)
        }, [t("div", {
            innerHTML: g.typeName
        }, null, 8, Km)], 10, Um))), 128))]))
    }
});
const Pi = V(Xm, [["__scopeId", "data-v-17d56002"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/AllLotteryGames/WinGo/GameList.vue"]])
  , Qm = {
    class: "TimeLeft__C-PreSale"
}
  , Zm = {
    class: "TimeLeft__C-PreSale-head"
}
  , Ym = {
    class: "TimeLeft__C-PreSale-body"
}
  , Jm = ["innerHTML"]
  , t_ = {
    class: "TimeLeft__C-PreSale-foot"
}
  , e_ = F({
    __name: "rule",
    props: {
        howPlayShow: {
            type: Boolean,
            default: !1
        },
        gamePresentation: {
            type: String,
            default: ""
        }
    },
    emits: ["close"],
    setup(s, {emit: i}) {
        const o = s
          , l = Q({
            get() {
                return o.howPlayShow || !1
            },
            set(g) {
                g || i("close")
            }
        });
        return (g, m) => {
            const c = W("van-popup");
            return n(),
            a(S, null, [$(" 规则弹层 begin"), C(c, {
                show: l.value,
                "onUpdate:show": m[1] || (m[1] = u => l.value = u),
                "close-on-click-overlay": !1,
                round: ""
            }, {
                default: P( () => [t("div", Qm, [t("div", Zm, e(g.$t("winTrxIndicate")), 1), t("div", Ym, [t("div", {
                    innerHTML: s.gamePresentation
                }, null, 8, Jm)]), t("div", t_, [t("div", {
                    class: "TimeLeft__C-PreSale-foot-btn",
                    onClick: m[0] || (m[0] = u => i("close"))
                }, e(g.$t("winTrxClose")), 1)])])]),
                _: 1
            }, 8, ["show"])], 2112)
        }
    }
});
const Di = V(e_, [["__scopeId", "data-v-0bba67ea"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/AllLotteryGames/WinGo/rule.vue"]])
  , Pa = s => (Nt("data-v-69f351dd"),
s = s(),
zt(),
s)
  , i_ = {
    class: "FDTL__C"
}
  , n_ = {
    class: "FDTL__C-l1"
}
  , a_ = {
    class: "left"
}
  , o_ = Pa( () => t("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none"
}, [t("path", {
    d: "M8.5484 25.8291L8.54089 25.8366L8.53366 25.8444C7.97797 26.4409 7.47942 26.802 7.06631 26.9804C6.65908 27.1562 6.37147 27.1416 6.17169 27.0556C5.96753 26.9677 5.74252 26.7566 5.56263 26.3155C5.38195 25.8725 5.26602 25.2383 5.26602 24.4V9.38666C5.26602 6.69084 5.59509 5.24007 6.36083 4.42157C7.11326 3.6173 8.44055 3.26666 10.9593 3.26666H21.0393C23.5584 3.26666 24.8852 3.61741 25.6358 4.42118C26.3997 5.23909 26.726 6.68929 26.7193 9.38518V9.38666V24.3867C26.7193 25.2254 26.6041 25.8598 26.4242 26.3031C26.2451 26.7444 26.0211 26.9549 25.8182 27.0425C25.6198 27.1281 25.3328 27.1431 24.9244 26.967C24.5105 26.7884 24.0102 26.4271 23.4512 25.8305C22.7918 25.1231 21.9328 24.7739 21.0701 24.8209C20.2074 24.8679 19.3916 25.3082 18.8127 26.08L18.8123 26.0806L17.4676 27.8779C17.4673 27.8783 17.467 27.8787 17.4667 27.8791C17.0231 28.4644 16.4844 28.71 15.9927 28.71C15.501 28.71 14.9623 28.4644 14.5187 27.8791C14.5184 27.8787 14.5181 27.8783 14.5177 27.8779L13.1733 26.0808C13.1732 26.0807 13.1732 26.0806 13.1731 26.0806C12.0033 24.5156 9.90283 24.3999 8.55577 25.8217L8.5484 25.8291ZM8.43935 14.6667C8.43935 15.7314 9.30798 16.6 10.3727 16.6C11.4374 16.6 12.306 15.7314 12.306 14.6667C12.306 13.602 11.4374 12.7333 10.3727 12.7333C9.30798 12.7333 8.43935 13.602 8.43935 14.6667ZM8.43935 9.33333C8.43935 10.398 9.30798 11.2667 10.3727 11.2667C11.4374 11.2667 12.306 10.398 12.306 9.33333C12.306 8.26863 11.4374 7.4 10.3727 7.4C9.30798 7.4 8.43935 8.26863 8.43935 9.33333ZM14.306 16.2667H21.6393C22.5174 16.2667 23.2393 15.5447 23.2393 14.6667C23.2393 13.7886 22.5174 13.0667 21.6393 13.0667H14.306C13.428 13.0667 12.706 13.7886 12.706 14.6667C12.706 15.5447 13.428 16.2667 14.306 16.2667ZM14.306 10.9333H21.6393C22.5174 10.9333 23.2393 10.2114 23.2393 9.33333C23.2393 8.45529 22.5174 7.73333 21.6393 7.73333H14.306C13.428 7.73333 12.706 8.45529 12.706 9.33333C12.706 10.2114 13.428 10.9333 14.306 10.9333Z",
    stroke: "currentColor",
    "stroke-width": "1.2"
})], -1))
  , s_ = {
    class: "FDTL__C-l2"
}
  , l_ = {
    class: "FDTL__C-time"
}
  , c_ = Pa( () => t("div", {
    notime: ""
}, ":", -1))
  , r_ = {
    class: "FDTL__C-l3"
}
  , u_ = {
    class: "box"
}
  , d_ = ["num"]
  , p_ = fi('<div class="slot-num" data-v-69f351dd>1</div><div class="slot-num" data-v-69f351dd>2</div><div class="slot-num" data-v-69f351dd>0</div><div class="slot-num" data-v-69f351dd>1</div><div class="slot-num" data-v-69f351dd>2</div><div class="slot-num" data-v-69f351dd>3</div><div class="slot-num" data-v-69f351dd>4</div><div class="slot-num" data-v-69f351dd>5</div><div class="slot-num" data-v-69f351dd>6</div><div class="slot-num" data-v-69f351dd>7</div><div class="slot-num" data-v-69f351dd>8</div><div class="slot-num" data-v-69f351dd>9</div><div class="slot-num" data-v-69f351dd>0</div><div class="slot-num" data-v-69f351dd>1</div><div class="slot-num" data-v-69f351dd>2</div><div class="slot-num" data-v-69f351dd>3</div><div class="slot-num" data-v-69f351dd>4</div><div class="slot-num" data-v-69f351dd>5</div><div class="slot-num" data-v-69f351dd>6</div><div class="slot-num" data-v-69f351dd>7</div><div class="slot-num" data-v-69f351dd>8</div><div class="slot-num" data-v-69f351dd>9</div><div class="slot-num" data-v-69f351dd>0</div><div class="slot-num" data-v-69f351dd>1</div><div class="slot-num" data-v-69f351dd>2</div><div class="slot-num" data-v-69f351dd>3</div><div class="slot-num" data-v-69f351dd>4</div><div class="slot-num" data-v-69f351dd>5</div><div class="slot-num" data-v-69f351dd>6</div><div class="slot-num" data-v-69f351dd>7</div><div class="slot-num" data-v-69f351dd>8</div><div class="slot-num" data-v-69f351dd>9</div>', 32)
  , g_ = ["num"]
  , b_ = F({
    __name: "TimeLeft",
    props: {
        premium: {
            type: null,
            required: !0
        },
        currentInfo: {
            type: null,
            required: !0
        },
        currentGame: {
            type: null,
            required: !0
        }
    },
    setup(s, {expose: i}) {
        const o = s
          , l = h(0)
          , g = h([{
            arr: []
        }, {
            arr: []
        }, {
            arr: []
        }, {
            arr: []
        }, {
            arr: []
        }]);
        At( () => o.premium, b => {
            b && (g.value = m(b))
        }
        );
        const m = b => {
            let _ = [];
            for (let T = 0; T < b.length; T++) {
                let N = b[T];
                var w = [];
                switch (N) {
                case 9:
                    w.push(N - 8, N - 9, N);
                    break;
                case 0:
                    w.push(N + 8, N + 9, N);
                    break;
                default:
                    w.push(N - 2, N - 1, N)
                }
                _.push({
                    arr: w
                })
            }
            return _
        }
          , c = () => {
            l.value = 1,
            setTimeout( () => {
                l.value = 0
            }
            , 3e3)
        }
          , u = h(!1)
          , p = ye()
          , r = () => {
            u.value = !0,
            p.get5DRule(o.currentGame.typeID)
        }
        ;
        return i({
            animationShow: c
        }),
        (b, _) => (n(),
        a(S, null, [t("div", i_, [t("div", n_, [t("div", a_, [t("div", null, e(b.$t("betIssue")), 1), t("div", {
            class: "FDTL__C-rule",
            onClick: r
        }, [o_, E(e(b.$t("winTrxIndicate")), 1)])]), t("div", null, e(b.$t("k3TimeLeftToBuy")), 1)]), t("div", s_, [t("div", null, e(o.currentInfo.gameNo), 1), t("div", l_, [t("div", null, e(b.currentInfo.time1), 1), t("div", null, e(b.currentInfo.time2), 1), c_, t("div", null, e(b.currentInfo.time3), 1), t("div", null, e(b.currentInfo.time4), 1)])]), t("div", r_, [t("div", u_, [(n(!0),
        a(S, null, G(g.value, (w, T) => (n(),
        a("div", {
            key: T,
            class: "slot-column"
        }, [t("div", {
            class: B(["slot-transform", "transform" + T, l.value == 1 && "slot-scroll"])
        }, [(n(!0),
        a(S, null, G(w.arr, (N, v) => (n(),
        a("div", {
            class: "slot-num",
            num: w,
            key: "2" + v
        }, e(N), 9, d_))), 128)), p_, (n(!0),
        a(S, null, G(w.arr, (N, v) => (n(),
        a("div", {
            class: "slot-num",
            num: w,
            key: "2" + v
        }, e(N), 9, g_))), 128))], 2)]))), 128))])])]), $(" 规则弹层 begin"), C(Di, {
            howPlayShow: u.value,
            gamePresentation: b.currentGame.gamePresentation,
            onClose: _[0] || (_[0] = w => u.value = !1)
        }, null, 8, ["howPlayShow", "gamePresentation"])], 64))
    }
});
const m_ = V(b_, [["__scopeId", "data-v-69f351dd"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/AllLotteryGames/FD/TimeLeft.vue"]])
  , __ = {
    class: "FDB__C-nav"
}
  , v_ = ["onClick"]
  , k_ = {
    class: "FDB__C-H"
}
  , h_ = ["onClick"]
  , f_ = {
    class: "FDB__C-Num"
}
  , y_ = ["txt", "onClick"]
  , $_ = {
    class: "round"
}
  , w_ = {
    class: "rate"
}
  , T_ = F({
    __name: "BetCom",
    props: {
        betTypeNameMap: {
            type: null,
            required: !0
        },
        betType: {
            type: null,
            required: !0
        },
        BettingH: {
            type: null,
            required: !0
        },
        onTabID: {
            type: null,
            required: !0
        },
        numberChack: {
            type: null,
            required: !0
        },
        OddsList: {
            type: null,
            required: !0
        }
    },
    emits: ["changeType", "onTab", "numberTab"],
    setup(s, {emit: i}) {
        return (o, l) => (n(),
        a(S, null, [t("div", __, [(n(!0),
        a(S, null, G(o.betTypeNameMap, (g, m) => (n(),
        a("div", {
            key: m,
            class: B({
                active: o.betType == m
            }),
            onClick: c => i("changeType", m)
        }, e(g), 11, v_))), 128))]), t("div", k_, [(n(!0),
        a(S, null, G(o.BettingH, (g, m) => (n(),
        a("div", {
            key: m,
            class: B({
                active: o.onTabID == g.id
            }),
            onClick: c => i("onTab", g.id)
        }, [t("span", null, e(g.name), 1), t("span", null, e(g.rate), 1)], 10, h_))), 128))]), t("div", f_, [o.betType != 5 ? (n(),
        a(S, {
            key: 0
        }, G(10, (g, m) => t("div", {
            key: m,
            txt: m,
            class: B({
                active: o.numberChack[m]
            }),
            onClick: c => i("numberTab", m)
        }, [t("div", $_, e(m), 1), t("div", w_, e(o.OddsList[0].playRate ? o.OddsList[0].playRate : o.OddsList[0].playRate_Original), 1)], 10, y_)), 64)) : $("v-if", !0)])], 64))
    }
});
const Jn = V(T_, [["__scopeId", "data-v-baf77bdf"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/AllLotteryGames/FD/BetCom.vue"]])
  , C_ = s => (Nt("data-v-7181abf7"),
s = s(),
zt(),
s)
  , L_ = {
    class: "Betting__Popup-body"
}
  , N_ = {
    class: "Betting__Popup-body-line"
}
  , z_ = {
    class: "Betting__Popup-body-line-list"
}
  , I_ = ["onClick"]
  , x_ = {
    class: "Betting__Popup-body-line"
}
  , S_ = {
    class: "Betting__Popup-body-line-btnL"
}
  , R_ = {
    class: "Betting__Popup-body-line"
}
  , B_ = C_( () => t("div", null, null, -1))
  , G_ = {
    class: "Betting__Popup-body-line-list"
}
  , A_ = ["onClick"]
  , M_ = {
    class: "Betting__Popup-body-line"
}
  , P_ = {
    class: "Betting__Popup-foot"
}
  , D_ = {
    class: "Betting__Popup-foot-s bgcolor"
}
  , O_ = {
    class: "Betting__Popup-PreSale"
}
  , E_ = {
    class: "Betting__Popup-PreSale-head"
}
  , q_ = {
    class: "Betting__Popup-PreSale-body"
}
  , j_ = {
    class: "Betting__Popup-PreSale-foot"
}
  , H_ = F({
    __name: "BettingPopup",
    props: {
        currentInfo: {
            type: null,
            required: !0
        },
        currentGame: {
            type: null,
            required: !0
        },
        bettingPopupShow: {
            type: null,
            required: !0
        },
        betTypeList: {
            type: null,
            required: !0
        },
        selectInfo: {
            type: null,
            required: !0
        }
    },
    emits: ["update:bettingPopupShow", "update:selectInfo", "clearBetting", "computedCoin", "submitBetting"],
    setup(s, {emit: i}) {
        const o = s
          , {t: l} = gt()
          , g = h(!1)
          , m = h(!0)
          , c = Q( () => o.currentGame.betMultiple.split("|"));
        At( () => c, () => {
            o.selectInfo.count = c.value[0]
        }
        , {
            deep: !0,
            immediate: !0
        });
        let u = Q({
            get() {
                return o.bettingPopupShow || !1
            },
            set(N) {
                i("update:bettingPopupShow", N)
            }
        });
        const p = N => {
            switch (N) {
            case 1:
                o.selectInfo.count > 1 && o.selectInfo.count--;
                break;
            case 2:
                o.selectInfo.count++;
                break
            }
            i("computedCoin")
        }
          , r = N => {
            N > 0 && (o.selectInfo.count = Math.floor(N)),
            i("computedCoin")
        }
          , b = N => {
            o.selectInfo.count = N,
            i("computedCoin")
        }
          , _ = N => {
            o.selectInfo.coin = N,
            i("computedCoin")
        }
          , w = () => {
            g.value = !1,
            m.value = !0
        }
          , T = async () => {
            if (!m.value) {
                he(l("agreePresaleRules"));
                return
            }
            i("submitBetting")
        }
        ;
        return (N, v) => {
            const k = W("van-field")
              , y = W("van-popup")
              , f = Dt("throttle-click");
            return n(),
            a(S, null, [$(" 投注内容 begin "), C(y, {
                show: d(u),
                "onUpdate:show": v[6] || (v[6] = z => ue(u) ? u.value = z : u = z),
                position: "bottom",
                style: {
                    "box-shadow": "0px -18px 40px rgba(37, 37, 60, 0.26)"
                },
                round: !0,
                "close-on-click-overlay": !1
            }, {
                default: P( () => [t("div", L_, [ke(N.$slots, "default", {}, void 0, !0), t("div", N_, [E(e(d(l)("amount")) + " ", 1), t("div", z_, [(n(!0),
                a(S, null, G(N.betTypeList, (z, L) => (n(),
                a("div", {
                    key: L,
                    class: B(["Betting__Popup-body-line-item", {
                        bgcolor: o.selectInfo.coin == z
                    }]),
                    onClick: x => _(z)
                }, e(z), 11, I_))), 128))])]), t("div", x_, [E(e(d(l)("numbers")) + " ", 1), t("div", S_, [t("div", {
                    class: B(["Betting__Popup-btn", {
                        bgcolor: o.selectInfo.count > 0
                    }]),
                    onClick: v[0] || (v[0] = z => p(1))
                }, "-", 2), C(k, {
                    class: "Betting__Popup-input",
                    modelValue: o.selectInfo.count,
                    "onUpdate:modelValue": v[1] || (v[1] = z => o.selectInfo.count = z),
                    modelModifiers: {
                        number: !0
                    },
                    type: "digit",
                    maxlength: 4,
                    onInput: r
                }, null, 8, ["modelValue"]), t("div", {
                    class: "Betting__Popup-btn bgcolor",
                    onClick: v[2] || (v[2] = z => p(2))
                }, "+")])]), t("div", R_, [B_, t("div", G_, [(n(!0),
                a(S, null, G(c.value, (z, L) => (n(),
                a("div", {
                    key: L,
                    class: B(["Betting__Popup-body-line-item setBorder", {
                        bgcolor: o.selectInfo.count == z
                    }]),
                    onClick: x => b(z)
                }, " X" + e(z), 11, A_))), 128))])]), t("div", M_, [t("span", {
                    class: B(["Betting__Popup-agree", {
                        active: m.value
                    }]),
                    onClick: v[3] || (v[3] = z => m.value = !m.value)
                }, e(d(l)("agree")), 3), t("span", {
                    onClick: v[4] || (v[4] = z => g.value = !0),
                    class: "Betting__Popup-preSaleShow"
                }, e(d(l)("presaleRules")), 1)])]), t("div", P_, [t("div", {
                    class: "Betting__Popup-foot-c",
                    onClick: v[5] || (v[5] = z => i("clearBetting"))
                }, e(d(l)("cancel")), 1), dt((n(),
                a("div", D_, [E(e(d(l)("totalAmount")) + e(d(Ct)(o.selectInfo.allCoin || 0)), 1)])), [[f, {
                    handler: T,
                    wait: 2e3
                }]])])]),
                _: 3
            }, 8, ["show"]), $(" 规则弹层 begin"), C(y, {
                show: g.value,
                "onUpdate:show": v[7] || (v[7] = z => g.value = z),
                "close-on-click-overlay": !1,
                round: ""
            }, {
                default: P( () => [t("div", O_, [t("div", E_, e(d(l)("presaleRules")), 1), t("div", q_, e(N.$t("betPopTXT")), 1), t("div", j_, [t("div", {
                    class: "Betting__Popup-PreSale-foot-btn",
                    onClick: w
                }, e(d(l)("iKonw")), 1)])])]),
                _: 1
            }, 8, ["show"])], 64)
        }
    }
});
const W_ = V(H_, [["__scopeId", "data-v-7181abf7"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/AllLotteryGames/FD/BettingPopup.vue"]])
  , F_ = {
    class: "FDB__C"
}
  , V_ = {
    class: "FDB__C-mark"
}
  , U_ = F({
    __name: "Betting",
    props: {
        currentInfo: {
            type: Object,
            default: () => ({})
        },
        ProhibitBuyTime: {
            type: Number,
            default: 5
        },
        currentGame: {
            type: Object,
            default: () => ({})
        }
    },
    emits: ["betting", "changeBettingP"],
    setup(s, {expose: i, emit: o}) {
        const l = s
          , {t: g} = gt();
        h();
        const m = h(!1);
        At( () => m.value, A => {
            A && (T.value.coin = v.value[0])
        }
        );
        const c = h(0)
          , u = h(["A", "B", "C", "D", "E", "SUM"])
          , p = h([{
            playID: 1,
            playType: 1,
            playBet: "0-9",
            playResult: "0-9",
            playRate: 9,
            playRate_Original: 9
        }, {
            playID: 2,
            playType: 2,
            playBet: "H",
            playResult: "H",
            playRate: 2,
            playRate_Original: 2
        }, {
            playID: 3,
            playType: 2,
            playBet: "L",
            playResult: "L",
            playRate: 2,
            playRate_Original: 2
        }, {
            playID: 4,
            playType: 3,
            playBet: "O",
            playResult: "O",
            playRate: 2,
            playRate_Original: 2
        }, {
            playID: 5,
            playType: 3,
            playBet: "E",
            playResult: "E",
            playRate: 2,
            playRate_Original: 2
        }])
          , r = h(0)
          , b = h([])
          , _ = h([!1, !1, !1, !1, !1, !1, !1, !1])
          , w = Q( () => [{
            id: 1,
            name: g("k3Big"),
            rate: p.value[1].playRate || p.value[1].playRate_Original
        }, {
            id: 2,
            name: g("k3Small"),
            rate: p.value[2].playRate || p.value[2].playRate_Original
        }, {
            id: 3,
            name: g("k3Odd"),
            rate: p.value[3].playRate || p.value[3].playRate_Original
        }, {
            id: 4,
            name: g("k3Even"),
            rate: p.value[4].playRate || p.value[4].playRate_Original
        }])
          , T = h({
            coin: 0,
            count: 1,
            allCoin: 0,
            gametype: 0,
            typeid: 1,
            issuenumber: "2020",
            selecttype: ""
        })
          , N = Q( () => (l.currentInfo.passTime < l.ProhibitBuyTime && I(),
        l.currentInfo.passTime < l.ProhibitBuyTime))
          , v = Q( () => l.currentGame.scope ? l.currentGame.scope.split("|").map(A => Number(A)) : [])
          , k = A => {
            c.value = A,
            A == 5 && x()
        }
          , y = async () => {
            const [A,D] = await ie(us());
            D && (p.value = D)
        }
          , f = A => {
            x(),
            r.value == A ? (r.value = 0,
            m.value = !0) : (r.value = A,
            m.value = !0),
            L()
        }
          , z = A => {
            if (r.value = 0,
            _.value[A]) {
                _.value[A] = !1;
                const D = b.value.indexOf(A);
                D > -1 && b.value.splice(D, 1),
                m.value = !0
            } else
                b.value.push(A),
                _.value[A] = !0,
                m.value = !0;
            L()
        }
          , L = () => {
            Jt( () => {
                b.value.length > 0 ? T.value.allCoin = T.value.coin * T.value.count * b.value.length : r.value ? T.value.allCoin = T.value.coin * T.value.count : T.value.allCoin = 0
            }
            )
        }
          , x = () => {
            b.value = [];
            for (let A = 0; _.value.length > A; A++)
                _.value[A] = !1;
            L()
        }
          , I = () => {
            var A;
            T.value.count = ((A = l.currentGame.betMultiple) == null ? void 0 : A.split("|")[0]) || 1,
            m.value = !1,
            R()
        }
          , R = () => {
            b.value = [],
            _.value = [!1, !1, !1, !1, !1, !1, !1, !1],
            r.value = 0
        }
          , M = async () => {
            if (T.value.count == 0)
                return Pt(g("bteNoCount"));
            let A;
            if (b.value.length > 0)
                A = b.value.join("|");
            else
                switch (r.value) {
                case 1:
                    A = "H";
                    break;
                case 2:
                    A = "L";
                    break;
                case 3:
                    A = "O";
                    break;
                case 4:
                    A = "E";
                    break
                }
            if (!A)
                return Pt(g("pleaseBet"));
            const D = {
                issuenumber: l.currentInfo.gameNo,
                typeId: l.currentGame.typeID,
                amount: T.value.coin,
                betCount: Number(T.value.count),
                gameType: c.value + 1,
                selectType: A
            }
              , j = await nt(ga(D));
            (j == null ? void 0 : j.code) === 0 && (he(g("code" + (j == null ? void 0 : j.msgCode))),
            m.value = !1,
            R(),
            o("betting", l.currentInfo.gameNo))
        }
        ;
        return Lt( () => {
            y()
        }
        ),
        i({
            bettingPopupShow: m
        }),
        (A, D) => (n(),
        a("div", F_, [dt(t("div", V_, [t("div", null, e(l.currentInfo.time3 || "0"), 1), t("div", null, e(l.currentInfo.time4 || "0"), 1)], 512), [[Yt, N.value]]), C(Jn, {
            betTypeNameMap: u.value,
            betType: c.value,
            BettingH: w.value,
            onTabID: r.value,
            OddsList: p.value,
            numberChack: _.value,
            onChangeType: k,
            onNumberTab: z,
            onOnTab: f
        }, null, 8, ["betTypeNameMap", "betType", "BettingH", "onTabID", "OddsList", "numberChack"]), C(W_, {
            currentInfo: s.currentInfo,
            currentGame: s.currentGame,
            bettingPopupShow: m.value,
            betTypeList: v.value,
            selectInfo: T.value,
            onComputedCoin: L,
            onClearBetting: I,
            onSubmitBetting: M
        }, {
            default: P( () => [C(Jn, {
                betTypeNameMap: u.value,
                betType: c.value,
                BettingH: w.value,
                onTabID: r.value,
                OddsList: p.value,
                numberChack: _.value,
                onChangeType: k,
                onNumberTab: z,
                onOnTab: f
            }, null, 8, ["betTypeNameMap", "betType", "BettingH", "onTabID", "OddsList", "numberChack"])]),
            _: 1
        }, 8, ["currentInfo", "currentGame", "bettingPopupShow", "betTypeList", "selectInfo"])]))
    }
});
const K_ = V(U_, [["__scopeId", "data-v-28e57f6a"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/AllLotteryGames/FD/Betting.vue"]])
  , X_ = {
    class: "RecordNav__C"
}
  , Q_ = ["onClick"]
  , Z_ = F({
    __name: "RecordNav",
    props: {
        record: {
            type: String,
            default: "GameRecord"
        }
    },
    setup(s) {
        const i = s
          , {t: o} = gt()
          , l = h([{
            name: o("gameRecords"),
            componentName: "GameRecord"
        }, {
            name: o("chartTrends"),
            componentName: "Trend"
        }, {
            name: o("myGameRecords"),
            componentName: "MyGameRecord"
        }]);
        return (g, m) => (n(),
        a("div", X_, [(n(!0),
        a(S, null, G(l.value, (c, u) => (n(),
        a("div", {
            key: u,
            onClick: p => g.$emit("changeC", c.componentName),
            class: B({
                active: i.record == c.componentName
            })
        }, e(c.name), 11, Q_))), 128))]))
    }
});
const Oi = V(Z_, [["__scopeId", "data-v-72f81e71"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/AllLotteryGames/WinGo/RecordNav.vue"]])
  , Y_ = {
    class: "GameRecord__C"
}
  , J_ = {
    class: "GameRecord__C-head"
}
  , tv = {
    class: "GameRecord__C-body"
}
  , ev = {
    class: "numList"
}
  , iv = {
    class: "numItem"
}
  , nv = {
    class: "redNumItem"
}
  , av = {
    key: 1,
    class: "GameRecord__C-body-empty"
}
  , ov = {
    key: 0,
    class: "GameRecord__C-foot"
}
  , sv = {
    class: "GameRecord__C-foot-page"
}
  , lv = F({
    __name: "GameRecord",
    props: {
        typeid: {
            type: Number,
            required: !0
        }
    },
    setup(s, {expose: i}) {
        const o = s
          , l = h([])
          , g = h(4)
          , m = h(10)
          , c = h(1)
          , u = () => {
            c.value--,
            r()
        }
          , p = () => {
            c.value++,
            r()
        }
          , r = async (b=!1) => {
            if (o.typeid == null)
                return;
            b && (c.value = 1);
            const _ = await nt(ba({
                pageSize: m.value,
                pageNo: c.value,
                typeId: o.typeid
            }));
            l.value = (_ == null ? void 0 : _.data.list) || [],
            g.value = (_ == null ? void 0 : _.data.totalPage) || 0
        }
        ;
        return i({
            getData: r
        }),
        fe( () => {
            r()
        }
        ),
        (b, _) => {
            const w = W("van-col")
              , T = W("van-row")
              , N = W("van-icon");
            return n(),
            a("div", Y_, [t("div", J_, [C(T, null, {
                default: P( () => [C(w, {
                    span: "10"
                }, {
                    default: P( () => [E(e(b.$t("FDNumber")), 1)]),
                    _: 1
                }), C(w, {
                    span: "10"
                }, {
                    default: P( () => [E(e(b.$t("FDResult")), 1)]),
                    _: 1
                }), C(w, {
                    span: "4"
                }, {
                    default: P( () => [E(e(b.$t("FDTotal")), 1)]),
                    _: 1
                })]),
                _: 1
            })]), t("div", tv, [l.value.length ? (n(!0),
            a(S, {
                key: 0
            }, G(l.value, (v, k) => (n(),
            J(T, {
                key: k
            }, {
                default: P( () => [C(w, {
                    span: "10"
                }, {
                    default: P( () => [E(e(v.issueNumber), 1)]),
                    _: 2
                }, 1024), C(w, {
                    span: "10"
                }, {
                    default: P( () => [t("div", ev, [(n(!0),
                    a(S, null, G([...v.premium], (y, f) => (n(),
                    a("div", iv, e(y), 1))), 256))])]),
                    _: 2
                }, 1024), C(w, {
                    span: "4"
                }, {
                    default: P( () => [t("span", nv, e(v.sumCount), 1)]),
                    _: 2
                }, 1024)]),
                _: 2
            }, 1024))), 128)) : (n(),
            a("div", av, [C(ge)]))]), l.value.length ? (n(),
            a("div", ov, [t("div", {
                class: B(["GameRecord__C-foot-previous", {
                    disabled: c.value <= 1
                }]),
                onClick: u
            }, [C(N, {
                name: "arrow-left",
                class: "GameRecord__C-icon",
                size: "20"
            })], 2), t("div", sv, e(c.value) + "/" + e(g.value), 1), t("div", {
                class: B(["GameRecord__C-foot-next", {
                    disabled: c.value >= g.value
                }]),
                onClick: p
            }, [C(N, {
                name: "arrow",
                class: "GameRecord__C-icon",
                size: "20"
            })], 2)])) : $("v-if", !0)])
        }
    }
});
const cv = V(lv, [["__scopeId", "data-v-9215aba8"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/AllLotteryGames/FD/GameRecord.vue"]])
  , rv = {
    class: "noticeBar__container"
}
  , uv = {
    class: "noticeBar__container-body"
}
  , dv = {
    key: 0,
    class: "noticeBar__container-body-text"
}
  , pv = F({
    __name: "index",
    props: {
        color: {
            type: String,
            required: !0,
            default: "red"
        }
    },
    setup(s) {
        const i = ct()
          , o = De()
          , l = h(null)
          , g = h(o.messageList)
          , m = async () => {
            const c = await nt(ds({
                pageNo: 1,
                pageSize: 5
            }));
            if (c) {
                if (o.setMessage(c.data.list),
                g.value = c.data.list,
                !g.value.length)
                    return;
                l.value && clearInterval(l.value),
                l.value = setInterval( () => {
                    g.value.push(g.value.shift())
                }
                , 7e3)
            }
        }
        ;
        return Lt( () => {
            g.value || setTimeout( () => {
                m()
            }
            , 1e3)
        }
        ),
        (c, u) => {
            var r;
            const p = W("svg-icon");
            return n(),
            a("div", rv, [C(p, {
                name: "noticeBarSpeaker"
            }), t("div", uv, [g.value && g.value[0] && g.value[0].siteMessage ? (n(),
            a("div", dv, e((r = g.value[0]) == null ? void 0 : r.siteMessage), 1)) : $("v-if", !0)]), t("button", {
                onClick: u[0] || (u[0] = b => d(i).push({
                    name: "Notification"
                })),
                class: "hotIcon"
            }, e(c.$t("more")), 1)])
        }
    }
})
  , wi = V(pv, [["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/NoticeBar/index.vue"]])
  , gv = {
    class: "Trend__C"
}
  , bv = {
    class: "Trend__C-body1"
}
  , mv = {
    class: "Trend__C-nav"
}
  , _v = ["onClick"]
  , vv = {
    class: "Trend__C-body1-line"
}
  , kv = {
    key: 0,
    class: "Trend__C-body1-line"
}
  , hv = {
    class: "Trend__C-body1-line-num"
}
  , fv = {
    key: 1,
    class: "Trend__C-body1-line"
}
  , yv = {
    class: "Trend__C-body1-line-num"
}
  , $v = {
    key: 2,
    class: "Trend__C-body1-line"
}
  , wv = {
    class: "Trend__C-body1-line-num"
}
  , Tv = {
    key: 3,
    class: "Trend__C-body1-line"
}
  , Cv = {
    class: "Trend__C-body1-line-num"
}
  , Lv = {
    class: "Trend__C-head"
}
  , Nv = {
    class: "Trend__C-body2"
}
  , zv = ["IssueNumber", "Number", "Colour", "rowId"]
  , Iv = {
    class: "Trend__C-body2-IssueNumber"
}
  , xv = {
    class: "Trend__C-body2-Num"
}
  , Sv = ["id"]
  , Rv = {
    key: 1,
    class: "Trend__C-body2-empty"
}
  , Bv = {
    key: 0,
    class: "Trend__C-foot"
}
  , Gv = {
    class: "Trend__C-foot-page"
}
  , Av = F({
    __name: "Trend",
    props: {
        typeid: {
            type: Number,
            required: !0
        }
    },
    setup(s, {expose: i}) {
        const o = s
          , l = h([])
          , g = h([])
          , m = h()
          , c = h()
          , u = h()
          , p = h()
          , r = h()
          , b = h(["A", "B", "C", "D", "E"])
          , _ = h(0)
          , w = h(1)
          , T = h(4);
        function N() {
            Jt( () => {
                for (let x = 0; x < g.value.length; x++)
                    g.value[x + 1] && k(g.value[x], g.value[x + 1])
            }
            )
        }
        const v = x => {
            _.value = x,
            z(!0)
        }
        ;
        function k(x, I) {
            let R = parseInt(x.number)
              , M = parseInt(I.number);
            var A = document.getElementById("myCanvas" + x.rowId);
            if (A && A.getContext) {
                var D = A.getContext("2d");
                D.clearRect(0, 0, A.width, A.height),
                D.beginPath(),
                D.moveTo(R == 0 ? 14 : R * 27 + 14, 0),
                D.lineTo(M == 0 ? 14 : M * 27 + 14, A.height),
                D.strokeStyle = "red",
                D.stroke(),
                D.closePath()
            }
        }
        const y = () => {
            w.value--,
            L()
        }
          , f = () => {
            w.value++,
            L()
        }
          , z = async (x=!1) => {
            if (o.typeid == null)
                return;
            L(),
            x && (w.value = 1);
            const I = await nt(ps({
                typeId: o.typeid,
                typeNumber: _.value + 1
            }));
            if (I) {
                const R = Object.keys(I.data[0]).filter(M => M.startsWith("number_"));
                l.value = I.data.filter(M => M.type_Number == _.value + 1).map(M => {
                    const A = {
                        list: [],
                        type: 0
                    };
                    return A.type = M.type,
                    A.list = [],
                    R.forEach(D => {
                        A.list.push(M[D])
                    }
                    ),
                    A
                }
                )
            }
            m.value = l.value.find(R => R.type == 1),
            c.value = l.value.find(R => R.type == 2),
            u.value = l.value.find(R => R.type == 3),
            p.value = l.value.find(R => R.type == 4),
            r.value = l.value.find(R => R.type == 5)
        }
          , L = async (x=!1) => {
            if (o.typeid == null)
                return;
            x && (w.value = 1);
            const I = await nt(ba({
                pageSize: 10,
                pageNo: w.value,
                typeId: o.typeid
            }));
            I && (g.value = I.data.list.map( (R, M) => (R.rowId = M,
            R.number = R.premium[_.value],
            R)) || []),
            T.value = (I == null ? void 0 : I.data.totalPage) || 0,
            N()
        }
        ;
        return i({
            getData: z
        }),
        fe( () => {
            z()
        }
        ),
        (x, I) => {
            const R = W("van-col")
              , M = W("van-row")
              , A = W("van-icon");
            return n(),
            a("div", gv, [t("div", bv, [t("div", mv, [(n(!0),
            a(S, null, G(b.value, (D, j) => (n(),
            a("div", {
                key: j,
                class: B({
                    active: _.value == j
                }),
                onClick: X => v(j)
            }, e(D), 11, _v))), 128))]), t("div", vv, e(x.$t("trendDesc1")), 1), c.value ? (n(),
            a("div", kv, [t("div", null, e(x.$t("trendDesc3")), 1), t("div", hv, [(n(!0),
            a(S, null, G(c.value.list, (D, j) => (n(),
            a("div", {
                key: "2" + j
            }, e(D), 1))), 128))])])) : $("v-if", !0), p.value ? (n(),
            a("div", fv, [t("div", null, e(x.$t("trendDesc4")), 1), t("div", yv, [(n(!0),
            a(S, null, G(p.value.list, (D, j) => (n(),
            a("div", {
                key: "4" + j
            }, e(D), 1))), 128))])])) : $("v-if", !0), m.value ? (n(),
            a("div", $v, [t("div", null, e(x.$t("trendDesc5")), 1), t("div", wv, [(n(!0),
            a(S, null, G(m.value.list, (D, j) => (n(),
            a("div", {
                key: "5" + j
            }, e(D), 1))), 128))])])) : $("v-if", !0), u.value ? (n(),
            a("div", Tv, [t("div", null, e(x.$t("trendDesc6")), 1), t("div", Cv, [(n(!0),
            a(S, null, G(u.value.list, (D, j) => (n(),
            a("div", {
                key: "3" + j
            }, e(D), 1))), 128))])])) : $("v-if", !0)]), t("div", Lv, [C(M, null, {
                default: P( () => [C(R, {
                    span: "9"
                }, {
                    default: P( () => [E(e(x.$t("betIssue")), 1)]),
                    _: 1
                }), C(R, {
                    span: "15"
                }, {
                    default: P( () => [E(e(x.$t("number")), 1)]),
                    _: 1
                })]),
                _: 1
            })]), t("div", Nv, [g.value.length ? (n(!0),
            a(S, {
                key: 0
            }, G(g.value, (D, j) => (n(),
            a("div", {
                key: j,
                IssueNumber: D.issueNumber,
                Number: D.number,
                Colour: D.colour,
                rowId: D.rowId
            }, [C(M, null, {
                default: P( () => [C(R, {
                    span: "9"
                }, {
                    default: P( () => [t("div", Iv, e(D.issueNumber), 1)]),
                    _: 2
                }, 1024), C(R, {
                    span: "15"
                }, {
                    default: P( () => [t("div", xv, [t("canvas", {
                        canvas: "",
                        id: "myCanvas" + D.rowId,
                        ref_for: !0,
                        ref: "canvas",
                        class: "line-canvas"
                    }, null, 8, Sv), (n(),
                    a(S, null, G(10, X => t("div", {
                        class: B(["Trend__C-body2-Num-item", {
                            action: Number(D.number) == X - 1
                        }]),
                        key: X
                    }, e(X - 1), 3)), 64)), t("div", {
                        class: B(["Trend__C-body2-Num-BS", {
                            isB: Number(D.number) > 4
                        }])
                    }, e(Number(D.number) > 4 ? "H" : "L"), 3), t("div", {
                        class: B(["Trend__C-body2-Num-OE", {
                            isE: Number(D.number) % 2
                        }])
                    }, e(Number(D.number) % 2 ? "O" : "E"), 3)])]),
                    _: 2
                }, 1024)]),
                _: 2
            }, 1024)], 8, zv))), 128)) : (n(),
            a("div", Rv, [C(ge)]))]), g.value.length ? (n(),
            a("div", Bv, [t("div", {
                class: B(["Trend__C-foot-previous", {
                    disabled: w.value <= 1
                }]),
                onClick: y
            }, [C(A, {
                name: "arrow-left",
                class: "Trend__C-icon",
                size: "20"
            })], 2), t("div", Gv, e(w.value) + "/" + e(T.value), 1), t("div", {
                class: B(["Trend__C-foot-next", {
                    disabled: w.value >= T.value
                }]),
                onClick: f
            }, [C(A, {
                name: "arrow",
                class: "Trend__C-icon",
                size: "20"
            })], 2)])) : $("v-if", !0)])
        }
    }
});
const Mv = V(Av, [["__scopeId", "data-v-9d93d892"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/AllLotteryGames/FD/Trend.vue"]])
  , Pv = {
    class: "MyGameRecordList__C"
}
  , Dv = ["onClick"]
  , Ov = {
    class: "MyGameRecordList__C-item-m"
}
  , Ev = {
    class: "MyGameRecordList__C-item-m-top"
}
  , qv = {
    class: "MyGameRecordList__C-item-m-bottom"
}
  , jv = {
    key: 0,
    class: "MyGameRecordList__C-detail"
}
  , Hv = {
    class: "MyGameRecordList__C-detail-text"
}
  , Wv = {
    key: 0,
    class: "MyGameRecordList__C-detail-line"
}
  , Fv = ["onClick"]
  , Vv = {
    class: "MyGameRecordList__C-detail-line"
}
  , Uv = {
    class: "MyGameRecordList__C-detail-line"
}
  , Kv = {
    class: "MyGameRecordList__C-detail-line"
}
  , Xv = {
    class: "MyGameRecordList__C-detail-line"
}
  , Qv = {
    class: "red"
}
  , Zv = {
    class: "MyGameRecordList__C-detail-line"
}
  , Yv = {
    class: "MyGameRecordList__C-detail-line"
}
  , Jv = {
    key: 0,
    class: "numList"
}
  , t1 = {
    key: 1
}
  , e1 = {
    class: "MyGameRecordList__C-detail-line"
}
  , i1 = {
    class: "line1"
}
  , n1 = {
    class: "MyGameRecordList__C-detail-line"
}
  , a1 = {
    key: 1
}
  , o1 = {
    class: "MyGameRecordList__C-detail-line"
}
  , s1 = {
    key: 1
}
  , l1 = {
    class: "MyGameRecordList__C-detail-line"
}
  , c1 = F({
    __name: "MayrecordList",
    props: {
        mayrecord: {
            type: Array,
            required: !0
        }
    },
    setup(s) {
        const {t: i} = gt()
          , o = h(-1)
          , l = u => ["", "A", "B", "C", "D", "E"][u]
          , g = u => {
            switch (u) {
            case "L":
                return i("k3Small");
            case "O":
                return i("k3Odd");
            case "E":
                return i("k3Even");
            case "H":
                return i("k3Big");
            default:
                return u
            }
        }
          , m = u => {
            o.value == u ? o.value = -1 : o.value = u
        }
          , c = u => {
            switch (u) {
            case "E":
                return "Even";
            case "O":
                return "Odd";
            case "H":
                return "Big";
            case "L":
                return "Small";
            default:
                return u
            }
        }
        ;
        return (u, p) => {
            const r = W("svg-icon");
            return n(),
            a("div", Pv, [(n(!0),
            a(S, null, G(u.mayrecord, (b, _) => (n(),
            a(S, {
                key: _
            }, [t("div", {
                class: "MyGameRecordList__C-item",
                onClick: ne(w => m(_), ["stop", "prevent"])
            }, [t("div", {
                class: B(["MyGameRecordList__C-item-l", ["MyGameRecordList__C-item-l-" + b.selectType]])
            }, e(c(b.selectType)), 3), t("div", Ov, [t("div", Ev, e(b.issueNumber), 1), t("div", qv, e(b.addTime), 1)]), b.profitAmount ? (n(),
            a("div", {
                key: 0,
                class: B(["MyGameRecordList__C-item-r", {
                    success: b.state
                }])
            }, [b.profitAmount ? (n(),
            a("div", {
                key: 0,
                class: B({
                    success: b.state
                })
            }, e(b.state ? u.$t("success") : u.$t("fail")), 3)) : $("v-if", !0), t("span", null, e(`${b.state ? "+" : "-"}${d(Ct)(b.profitAmount)}`), 1)], 2)) : $("v-if", !0)], 8, Dv), _ == o.value ? (n(),
            a("div", jv, [t("div", Hv, e(u.$t("detailMay")), 1), b.orderNumber ? (n(),
            a("div", Wv, [E(e(u.$t("orderNoMay")) + " ", 1), t("div", {
                onClick: w => d(Fe)(b.orderNumber)
            }, [E(e(b.orderNumber) + " ", 1), C(r, {
                name: "copy"
            })], 8, Fv)])) : $("v-if", !0), t("div", Vv, [E(e(u.$t("issueMay")) + " ", 1), t("div", null, e(b.issueNumber), 1)]), t("div", Uv, [E(e(u.$t("amountMay")) + " ", 1), t("div", null, e(d(Ct)(b.amount)), 1)]), t("div", Kv, [E(e(u.$t("numMay")) + " ", 1), t("div", null, e(b.betCount), 1)]), t("div", Xv, [E(e(u.$t("afterTaxAmount")) + " ", 1), t("div", Qv, e(d(Ct)(b.realAmount)), 1)]), t("div", Zv, [E(e(u.$t("tax")) + " ", 1), t("div", null, e(d(Ct)(b.fee)), 1)]), t("div", Yv, [E(e(u.$t("resultMay")) + " ", 1), b.premium ? (n(),
            a("div", Jv, [(n(!0),
            a(S, null, G(b.premium, (w, T) => (n(),
            a("div", {
                key: T
            }, e(w), 1))), 128))])) : (n(),
            a("div", t1, "--"))]), t("div", e1, [E(e(u.$t("selectMay")) + " ", 1), t("div", i1, [t("div", null, e(l(b.gameType)), 1), (n(!0),
            a(S, null, G(b.selectType.split("|"), (w, T) => (n(),
            a("div", {
                class: "num",
                key: T
            }, e(g(w)), 1))), 128))])]), t("div", n1, [E(e(u.$t("statusMay")) + " ", 1), b.state != 2 ? (n(),
            a("div", {
                key: 0,
                class: B([b.state ? "green" : "red"])
            }, e(b.state ? u.$t("success") : u.$t("fail")), 3)) : (n(),
            a("div", a1, e(u.$t("unsettled")), 1))]), t("div", o1, [E(e(u.$t("winOrLose")) + " ", 1), b.state != 2 ? (n(),
            a("div", {
                key: 0,
                class: B([b.state ? "green" : "red"])
            }, e(`${b.state ? "+" : "-"} ${d(Ct)(b.profitAmount)}`), 3)) : (n(),
            a("div", s1, "--"))]), t("div", l1, [E(e(u.$t("createTime")) + " ", 1), t("div", null, e(b.addTime), 1)])])) : $("v-if", !0)], 64))), 128))])
        }
    }
});
const Da = V(c1, [["__scopeId", "data-v-8bb41fd5"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/AllLotteryGames/FD/MayrecordList.vue"]])
  , r1 = {
    class: "MyGameRecord__C"
}
  , u1 = {
    key: 0,
    class: "MyGameRecord__C-head"
}
  , d1 = {
    class: "MyGameRecord__C-body"
}
  , p1 = {
    key: 1,
    class: "MyGameRecord__C-body-empty"
}
  , g1 = {
    key: 1,
    class: "MyGameRecord__C-foot"
}
  , b1 = {
    class: "MyGameRecord__C-foot-page"
}
  , m1 = F({
    __name: "MyGameRecord",
    props: {
        typeid: {
            type: Number,
            required: !0
        },
        goPathName: {
            type: String,
            required: !0
        },
        hasHead: {
            type: Boolean,
            required: !0,
            default: !0
        }
    },
    setup(s, {expose: i}) {
        const o = s
          , l = ct()
          , g = h(4)
          , m = h(20)
          , c = h(1)
          , u = h([])
          , p = w => {
            l.push({
                name: w
            })
        }
          , r = () => {
            c.value--,
            _()
        }
          , b = () => {
            c.value++,
            _()
        }
          , _ = async (w=!1) => {
            if (o.typeid == null)
                return;
            w && (c.value = 1);
            const T = await nt(ma({
                pageSize: m.value,
                pageNo: c.value,
                typeId: o.typeid
            }));
            u.value = (T == null ? void 0 : T.data.list) || [],
            g.value = (T == null ? void 0 : T.data.totalPage) || 0
        }
        ;
        return i({
            getData: _
        }),
        fe( () => {
            _()
        }
        ),
        (w, T) => {
            const N = W("svg-icon")
              , v = W("van-icon");
            return n(),
            a("div", r1, [w.hasHead ? (n(),
            a("div", u1, [t("div", {
                class: "MyGameRecord__C-head-moreB",
                onClick: T[0] || (T[0] = k => p(w.goPathName))
            }, [E(e(w.$t("more")) + " ", 1), C(N, {
                name: "rightCircle"
            })])])) : $("v-if", !0), t("div", d1, [u.value.length ? (n(),
            J(Da, {
                key: 0,
                mayrecord: u.value
            }, null, 8, ["mayrecord"])) : (n(),
            a("div", p1, [C(ge)]))]), u.value.length ? (n(),
            a("div", g1, [t("div", {
                class: B(["MyGameRecord__C-foot-previous", {
                    disabled: c.value <= 1
                }]),
                onClick: r
            }, [C(v, {
                name: "arrow-left",
                class: "MyGameRecord__C-icon",
                size: "20"
            })], 2), t("div", b1, e(c.value) + "/" + e(g.value), 1), t("div", {
                class: B(["MyGameRecord__C-foot-next", {
                    disabled: c.value >= g.value
                }]),
                onClick: b
            }, [C(v, {
                name: "arrow",
                class: "MyGameRecord__C-icon",
                size: "20"
            })], 2)])) : $("v-if", !0)])
        }
    }
});
const Oa = V(m1, [["__scopeId", "data-v-36ddca8e"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/AllLotteryGames/FD/MyGameRecord.vue"]])
  , _1 = s => (Nt("data-v-f388b770"),
s = s(),
zt(),
s)
  , v1 = {
    class: "FDP__C"
}
  , k1 = {
    class: "FDP__C-text"
}
  , h1 = {
    class: "FDP__C-list"
}
  , f1 = {
    class: "num"
}
  , y1 = {
    class: "letter"
}
  , $1 = _1( () => t("div", {
    class: "FDP__C-symbol"
}, "=", -1))
  , w1 = {
    class: "FDP__C-sum"
}
  , T1 = F({
    __name: "premium",
    props: {
        sumCount: {
            type: Number,
            default: 0
        },
        premium: {
            type: String,
            default: "00000"
        }
    },
    setup(s) {
        const i = s
          , o = Q( () => [...i.premium])
          , l = h(["A", "B", "C", "D", "E"]);
        return (g, m) => (n(),
        a("div", v1, [t("div", k1, e(g.$t("betResult")), 1), t("div", h1, [(n(!0),
        a(S, null, G(o.value, (c, u) => (n(),
        a("div", {
            key: u
        }, [t("div", f1, e(c), 1), t("div", y1, e(l.value[u]), 1)]))), 128))]), $1, t("div", w1, e(s.sumCount), 1)]))
    }
});
const C1 = V(T1, [["__scopeId", "data-v-f388b770"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/AllLotteryGames/FD/premium.vue"]])
  , L1 = s => (Nt("data-v-e05c7c66"),
s = s(),
zt(),
s)
  , N1 = {
    key: 1,
    class: "WinningTip__C-body-l1"
}
  , z1 = {
    class: "WinningTip__C-body-l2"
}
  , I1 = {
    class: "line1"
}
  , x1 = {
    class: "title"
}
  , S1 = {
    class: "num"
}
  , R1 = L1( () => t("div", {
    class: "title sum"
}, "SUM", -1))
  , B1 = {
    class: "num"
}
  , G1 = {
    class: "WinningTip__C-body-l3"
}
  , A1 = {
    key: 0,
    class: "isLose"
}
  , M1 = {
    class: "head"
}
  , P1 = {
    class: "bonus"
}
  , D1 = {
    class: "gameDetail"
}
  , O1 = {
    class: "WinningTip__C-body-l4"
}
  , E1 = ["onClick"]
  , q1 = F({
    __name: "WinningTips",
    setup(s, {expose: i}) {
        const o = Q( () => m.value[0] ? m.value[0].state == 0 : !1)
          , l = Q( () => m.value[0] || {})
          , g = h(!1)
          , m = h([])
          , c = h(["A", "B", "C", "D", "E", "SUM"]);
        let u = h();
        const p = () => {
            clearTimeout(u.value),
            m.value.shift(),
            g.value && m.value.length && (u.value = setTimeout( () => {
                p()
            }
            , 1e3 * 3))
        }
          , r = () => {
            g.value = !g.value,
            g.value ? u.value = setTimeout( () => {
                p()
            }
            , 1e3 * 3) : clearTimeout(u.value)
        }
          , b = w => {
            w.list = w.premium.split(""),
            w.sum = w.sumCount,
            m.value.push(w),
            g.value && (u.value = setTimeout( () => {
                p()
            }
            , 1e3 * 3))
        }
          , _ = () => {
            m.value = []
        }
        ;
        return i({
            showMark: b
        }),
        (w, T) => {
            const N = W("van-icon");
            return dt((n(),
            a("div", {
                class: "WinningTip__C",
                onClick: p
            }, [t("div", {
                class: B(["WinningTip__C-body", {
                    isL: o.value
                }])
            }, [o.value ? (n(),
            a("div", {
                key: 0,
                class: B(["WinningTip__C-body-l1", {
                    isL: o.value
                }])
            }, e(w.$t("k3WarningTip1")), 3)) : (n(),
            a("div", N1, e(w.$t("k3WarningTip2")), 1)), t("div", z1, [E(e(w.$t("betResult")) + " ", 1), t("div", I1, [(n(!0),
            a(S, null, G(l.value.list, (v, k) => (n(),
            a("div", {
                key: k
            }, [t("div", x1, e(c.value[k]), 1), t("div", S1, e(v), 1)]))), 128)), t("div", null, [R1, t("div", B1, e(l.value.sum), 1)])])]), t("div", G1, [o.value ? (n(),
            a("div", A1, e(w.$t("k3WarningTip3")), 1)) : (n(),
            a(S, {
                key: 1
            }, [t("div", M1, e(w.$t("k3WarningTip4")), 1), t("div", P1, e(d(Ct)(Number(l.value.winAmount))), 1)], 64)), t("div", D1, e(w.$t("k3WarningTip5")) + e(l.value.typeName) + " " + e(l.value.issueNumber), 1)]), t("div", O1, [t("div", {
                class: B(["acitveBtn", {
                    active: g.value
                }]),
                onClick: ne(r, ["stop"])
            }, null, 10, E1), E(" " + e(w.$t("autoShutOff3s")), 1)]), t("div", {
                class: "closeBtn",
                onClick: _
            }), dt(C(N, {
                name: "arrow",
                color: "#fff",
                size: "30px",
                class: "arrowBtn",
                onClick: ne(p, ["stop"])
            }, null, 8, ["onClick"]), [[Yt, m.value.length > 1]])], 2)], 512)), [[Yt, m.value.length]])
        }
    }
});
const j1 = V(q1, [["__scopeId", "data-v-e05c7c66"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/AllLotteryGames/FD/WinningTips.vue"]])
  , H1 = F({
    __name: "ChangLong",
    setup(s) {
        const i = ct()
          , {isAlowGame: o} = pe()
          , l = async () => {
            o("", () => {
                i.push({
                    name: "AllLotteryGames-ChangLong"
                })
            }
            )
        }
        ;
        return (g, m) => (n(),
        a("div", {
            class: "changlongEnter changlong",
            onClick: l
        }))
    }
});
const Ei = V(H1, [["__scopeId", "data-v-0ac3de13"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/common/ChangLong.vue"]])
  , W1 = "/assets/mp3/di1-0f3d86cb.mp3"
  , F1 = "/assets/mp3/di2-ad9aa8fb.mp3"
  , V1 = ["muted"]
  , U1 = t("source", {
    src: W1,
    type: "audio/mpeg"
}, null, -1)
  , K1 = [U1]
  , X1 = ["muted"]
  , Q1 = t("source", {
    src: F1,
    type: "audio/mpeg"
}, null, -1)
  , Z1 = [Q1]
  , Y1 = F({
    __name: "audio",
    setup(s) {
        const i = h(!1);
        At( () => De().visibility, l => {
            l === 0 ? i.value = !0 : setTimeout( () => {
                i.value = !1
            }
            , 500)
        }
        );
        const o = () => {
            i.value = !0,
            Jt( () => {
                const l = document.getElementById("voice1")
                  , g = document.getElementById("voice2");
                l.play(),
                g.play(),
                l.pause(),
                g.pause(),
                i.value = !1,
                document.removeEventListener("touchstart", o)
            }
            )
        }
        ;
        return Lt( () => {
            document.addEventListener("touchstart", o)
        }
        ),
        (l, g) => (n(),
        a(S, null, [t("audio", {
            id: "voice1",
            muted: i.value
        }, K1, 8, V1), t("audio", {
            id: "voice2",
            muted: i.value
        }, Z1, 8, X1)], 64))
    }
})
  , qi = V(Y1, [["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/AllLotteryGames/WinGo/audio.vue"]])
  , J1 = {
    class: "FD__C"
}
  , tk = {
    class: "FD__C-head-more"
}
  , ek = F({
    __name: "index",
    setup(s) {
        const i = {
            GameRecord: cv,
            Trend: Mv,
            MyGameRecord: Oa
        }
          , o = h()
          , l = h()
          , g = h()
          , m = h()
          , c = h(!1)
          , u = h("GameRecord")
          , p = ct()
          , r = ye();
        let b = Et([]);
        const _ = h(0)
          , w = h(localStorage.getItem("volumeShow") || "1")
          , T = h(!1)
          , N = h(null)
          , v = h({
            gameNo: "loading",
            currentTime: "",
            beginTime: "",
            passTime: 180,
            time1: 0,
            time2: 0,
            time3: 0,
            time4: 0
        })
          , k = h(5)
          , y = h("")
          , f = h(!1)
          , z = h(null)
          , L = h("00000")
          , x = h(0)
          , I = Q( () => r.fiveD[_.value] || {})
          , R = Pe()
          , M = Q( () => R.getIsShowLotteryDragon)
          , D = Ze().query.typeId;
        Lt( () => {
            ht()
        }
        ),
        Ve( () => {
            clearInterval(N.value),
            yt.value.forEach(Z => {
                clearInterval(Z)
            }
            ),
            $t.value && clearTimeout($t.value)
        }
        ),
        At( () => De().visibility, Z => {
            Z === 0 ? clearInterval(N.value) : ht(_.value)
        }
        );
        const j = () => {
            p.go(-1),
            sessionStorage.setItem("clickedGameType", "lottery")
        }
          , X = () => {
            w.value == "1" ? w.value = "2" : w.value = "1",
            localStorage.setItem("volumeShow", w.value)
        }
          , rt = Z => {
            p.push({
                name: Z
            })
        }
          , ht = async (Z=null) => {
            await r.get5DData(),
            b = r.get5D;
            const tt = b.findIndex(O => O.typeID == D);
            z.value == null && !D ? at(0) : at(Z ?? tt)
        }
          , st = async (Z, tt=!1) => {
            const [O,it] = await ie(bs({
                typeId: Z
            }));
            L.value = it.premium,
            x.value = it.sumCount,
            tt && m.value.animationShow()
        }
          , at = Z => {
            r.get5DData(),
            _.value = Z,
            z.value = b[Z].typeID,
            Y(z.value),
            Jt( () => {
                o.value.getData(z.value)
            }
            )
        }
          , Y = async (Z, tt=!1) => {
            st(Z, tt);
            const [O,it] = await ie(gs({
                typeId: Z
            }));
            v.value.gameNo = it.issueNumber,
            v.value.currentTime = it.serviceTime.replace(/-/g, "/"),
            v.value.beginTime = it.startTime.replace(/-/g, "/"),
            _t()
        }
          , _t = () => {
            if (!b.length)
                return;
            var Z = new Date(v.value.currentTime).getTime()
              , tt = new Date(v.value.beginTime).getTime();
            let O = (Z - tt) / 1e3
              , it = b[_.value];
            if (O > it.intervalM * 60 && (O = it.intervalM * 60),
            v.value.passTime = it.intervalM * 60 - O,
            v.value.passTime < 0) {
                y.value = "An error occurred, please contact customer service。The game time is " + it.intervalM + " minutes,start time is " + v.value.beginTime + ",current time is" + v.value.currentTime + "!",
                T.value = !0;
                return
            }
            Bt()
        }
          , Bt = () => {
            clearInterval(N.value),
            qt(!1),
            N.value = setInterval(function() {
                qt()
            }, 1e3)
        }
          , qt = (Z=!0) => {
            if (v.value.passTime <= k.value && (f.value = !1),
            w.value == "1" && (v.value.passTime <= k.value && v.value.passTime > 1 ? bt(1) : v.value.passTime == 1 && bt(2)),
            v.value.passTime > 0) {
                let tt = v.value.passTime;
                v.value.time2 = Math.floor(tt / 60),
                v.value.time3 = Math.floor(tt % 60 / 10),
                v.value.time4 = Math.floor(tt % 10),
                v.value.passTime--
            } else
                clearInterval(N.value),
                Z && Ot()
        }
          , bt = (Z=1) => {
            const tt = document.getElementById(`voice${Z}`);
            tt && (tt.currentTime = 0,
            tt.play())
        }
          , Ot = () => {
            Y(z.value, !0),
            g.value.getWinsUserAmount(!1),
            o.value.getData(!0)
        }
          , Vt = h({})
          , yt = h([])
          , wt = Z => {
            if (g.value.getWinsUserAmount(!1),
            o.value.getData(),
            Vt.value[Z])
                return;
            Vt.value[Z] = !0;
            const {time1: tt, time2: O, time3: it, time4: ft} = v.value
              , Gt = (tt * 10 * 60 + O * 60 + it * 10 + ft) * 1e3;
            yt.value[I.value.intervalM] = setTimeout( () => {
                ot(Z)
            }
            , Gt)
        }
          , Tt = Z => {
            c.value = Z
        }
          , $t = h(null)
          , ot = async Z => {
            const [tt,O] = await ie(ms({
                issueNumber: Z
            }));
            if (O.data)
                if (O.data.state != 2)
                    l.value.showMark(O.data),
                    delete Vt.value[Z];
                else {
                    $t.value = setTimeout( () => {
                        ot(Z)
                    }
                    , 2e3);
                    return
                }
        }
        ;
        return (Z, tt) => {
            const O = W("NavBar");
            return n(),
            a("div", J1, [C(O, {
                "left-arrow": "",
                onClickLeft: j,
                class: "main",
                headLogo: !0
            }, {
                right: P( () => [t("div", tk, [t("div", {
                    onClick: tt[0] || (tt[0] = it => rt("CustomerService"))
                }), t("div", {
                    class: B({
                        disableVoice: w.value == "2"
                    }),
                    onClick: X
                }, null, 2)])]),
                _: 1
            }), $(" 钱包余额 "), C(Mi, {
                ref_key: "WallteRef",
                ref: g
            }, null, 512), C(wi, {
                key: "5d"
            }), $(" 游戏类型 "), C(Pi, {
                gameList: d(b),
                currentGameIndex: _.value,
                onChangeGame: at
            }, null, 8, ["gameList", "currentGameIndex"]), C(C1, {
                premium: L.value,
                sumCount: x.value
            }, null, 8, ["premium", "sumCount"]), $(" 游戏开始时间倒计时 "), C(m_, {
                ref_key: "tiemLeftRef",
                ref: m,
                currentInfo: v.value,
                premium: L.value,
                currentGame: I.value
            }, null, 8, ["currentInfo", "premium", "currentGame"]), $(" 投注表 "), C(K_, {
                currentInfo: v.value,
                currentGame: I.value,
                VoiceType: w.value,
                typeid: z.value,
                onBetting: wt,
                onChangeBettingP: Tt
            }, null, 8, ["currentInfo", "currentGame", "VoiceType", "typeid"]), $(" 记录导航 "), C(Oi, {
                record: u.value,
                onChangeC: tt[1] || (tt[1] = it => u.value = it)
            }, null, 8, ["record"]), $(" 动态展示对应的组件 "), (n(),
            J(Ue, null, [(n(),
            J(He(i[u.value]), {
                ref_key: "RecordComponent",
                ref: o,
                typeid: z.value,
                EmerdApi: d(_a),
                goPathName: "AllLotteryGames-BettingRecord5D"
            }, null, 8, ["typeid", "EmerdApi"]))], 1024)), $(" 弹窗组件 "), C(Re, {
                show: T.value,
                onConfirm: tt[2] || (tt[2] = it => rt("/login"))
            }, {
                content: P( () => [t("div", null, e(y.value), 1)]),
                _: 1
            }, 8, ["show"]), $(" 中奖提示组件 "), C(j1, {
                ref_key: "WinningTipsRef",
                ref: l
            }, null, 512), M.value ? (n(),
            J(Ei, {
                key: 0
            })) : $("v-if", !0), C(qi)])
        }
    }
});
const ik = V(ek, [["__scopeId", "data-v-4f526022"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/home/AllLotteryGames/5D/index.vue"]])
  , pG = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: ik
}, Symbol.toStringTag, {
    value: "Module"
}))
  , nk = {
    class: "BettingRecord5D__C"
}
  , ak = {
    class: "BettingRecord5D__C-head"
}
  , ok = {
    class: "BettingRecord5D__C-nav"
}
  , sk = ["innerHTML"]
  , lk = {
    class: "BettingRecord5D__C-list"
}
  , ck = {
    key: 0,
    class: "BettingRecord5D__C-foot"
}
  , rk = {
    class: "BettingRecord5D__C-foot-page"
}
  , uk = F({
    __name: "index",
    setup(s) {
        const i = ct()
          , o = ye()
          , l = h(cd)
          , g = h([])
          , m = h(0)
          , c = h(1)
          , u = h(4)
          , p = v => {
            r.value = v.name,
            c.value = 1,
            b()
        }
          , r = h(0)
          , b = async () => {
            const v = await nt(ma({
                pageSize: 20,
                pageNo: c.value,
                typeId: r.value
            }));
            g.value = (v == null ? void 0 : v.data.list) || [],
            u.value = (v == null ? void 0 : v.data.totalPage) || 0
        }
          , _ = async () => {
            await o.get5DData(),
            l.value = o.get5D,
            r.value = l.value[0].typeID,
            await b()
        }
        ;
        function w() {
            i.go(-1)
        }
        const T = () => {
            c.value--,
            b()
        }
          , N = () => {
            c.value++,
            b()
        }
        ;
        return Lt( () => {
            _()
        }
        ),
        (v, k) => {
            const y = W("NavBar")
              , f = W("van-tab")
              , z = W("van-tabs")
              , L = W("van-icon");
            return n(),
            a("div", nk, [t("div", ak, [C(y, {
                "left-arrow": "",
                onClickLeft: w,
                class: "main",
                title: "5D Lotre"
            })]), t("div", ok, [C(z, {
                active: m.value,
                "onUpdate:active": k[0] || (k[0] = x => m.value = x),
                onClickTab: p
            }, {
                default: P( () => [(n(!0),
                a(S, null, G(l.value, (x, I) => (n(),
                J(f, {
                    key: I,
                    name: x.typeID
                }, {
                    title: P( () => [t("div", {
                        innerHTML: x.typeName.replace(/<br ?\/?>/, "")
                    }, null, 8, sk)]),
                    _: 2
                }, 1032, ["name"]))), 128))]),
                _: 1
            }, 8, ["active"])]), t("div", lk, [C(Da, {
                mayrecord: g.value
            }, null, 8, ["mayrecord"])]), g.value.length ? (n(),
            a("div", ck, [t("div", {
                class: B(["BettingRecord5D__C-foot-previous", {
                    disabled: c.value <= 1
                }]),
                onClick: T
            }, [C(L, {
                name: "arrow-left",
                class: "BettingRecord5D__C-icon",
                size: "20"
            })], 2), t("div", rk, e(c.value) + "/" + e(u.value), 1), t("div", {
                class: B(["BettingRecord5D__C-foot-next", {
                    disabled: c.value >= u.value
                }]),
                onClick: N
            }, [C(L, {
                name: "arrow",
                class: "BettingRecord5D__C-icon",
                size: "20"
            })], 2)])) : $("v-if", !0)])
        }
    }
});
const dk = V(uk, [["__scopeId", "data-v-8ab0e403"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/home/AllLotteryGames/BettingRecord5D/index.vue"]])
  , gG = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: dk
}, Symbol.toStringTag, {
    value: "Module"
}))
  , pk = {
    class: "MyGameRecordList__C"
}
  , gk = ["onClick"]
  , bk = {
    class: "MyGameRecordList__C-item-m"
}
  , mk = {
    class: "MyGameRecordList__C-item-m-top"
}
  , _k = {
    class: "MyGameRecordList__C-item-m-bottom"
}
  , vk = {
    key: 0,
    class: "MyGameRecordList__C-detail"
}
  , kk = {
    class: "MyGameRecordList__C-detail-text"
}
  , hk = {
    key: 0,
    class: "MyGameRecordList__C-detail-line"
}
  , fk = ["onClick"]
  , yk = {
    class: "MyGameRecordList__C-detail-line"
}
  , $k = {
    class: "MyGameRecordList__C-detail-line"
}
  , wk = {
    class: "MyGameRecordList__C-detail-line"
}
  , Tk = {
    class: "MyGameRecordList__C-detail-line"
}
  , Ck = {
    class: "red"
}
  , Lk = {
    class: "MyGameRecordList__C-detail-line"
}
  , Nk = {
    class: "MyGameRecordList__C-detail-line"
}
  , zk = {
    key: 0,
    class: "numList"
}
  , Ik = {
    key: 1
}
  , xk = {
    class: "MyGameRecordList__C-detail-line noLine"
}
  , Sk = {
    key: 0,
    class: "line1"
}
  , Rk = {
    key: 1,
    class: "line1"
}
  , Bk = {
    class: ""
}
  , Gk = {
    class: ""
}
  , Ak = {
    key: 2,
    class: "line1"
}
  , Mk = {
    class: ""
}
  , Pk = {
    key: 1,
    class: "btn actionBtn"
}
  , Dk = {
    key: 3,
    class: "line1"
}
  , Ok = {
    class: ""
}
  , Ek = {
    key: 1,
    class: "actionBtn"
}
  , qk = {
    class: ""
}
  , jk = {
    class: "MyGameRecordList__C-detail-line"
}
  , Hk = {
    key: 1
}
  , Wk = {
    class: "MyGameRecordList__C-detail-line"
}
  , Fk = {
    key: 1
}
  , Vk = {
    class: "MyGameRecordList__C-detail-line"
}
  , Uk = F({
    __name: "MayrecordList",
    props: {
        mayrecord: {
            type: Array,
            required: !0
        }
    },
    setup(s) {
        const {t: i} = gt()
          , o = h(-1)
          , l = u => {
            switch (u) {
            case "H":
                return i("k3Big");
            case "L":
                return i("k3Small");
            case "O":
                return i("k3Odd");
            case "E":
                return i("k3Even");
            default:
                return u
            }
        }
          , g = u => {
            o.value == u ? o.value = -1 : o.value = u
        }
          , m = u => {
            var p, r, b;
            if (u.gameType == "3") {
                if (u.selectType == "|AAA|")
                    return "3=";
                if (u.oneList.length)
                    return u.oneList[0]
            }
            if (u.gameType == "4")
                return u.selectType == "|ABC|" ? "3≠" : u.threeList.length ? `${u.threeList.join("")}` : `${u.oneList.join("")}`;
            if ((p = u.towList) != null && p.length)
                return u.towList[0];
            if ((r = u.towListArr) != null && r.length)
                return u.towListArr[0];
            if ((b = u.oneList) != null && b.length)
                switch (u.oneList[0]) {
                case "H":
                    return "Big";
                case "L":
                    return "Small";
                case "O":
                    return "Odd";
                case "E":
                    return "Even";
                default:
                    return u.oneList[0]
                }
        }
          , c = u => {
            var p, r;
            if ((p = u.towList) != null && p.length)
                return "num";
            if ((r = u.oneList) != null && r.length)
                return u.oneList[0].length > 2 ? "num" : u.oneList[0]
        }
        ;
        return (u, p) => {
            const r = W("svg-icon");
            return n(),
            a("div", pk, [(n(!0),
            a(S, null, G(u.mayrecord, (b, _) => (n(),
            a(S, {
                key: _
            }, [t("div", {
                class: "MyGameRecordList__C-item",
                onClick: ne(w => g(_), ["stop", "prevent"])
            }, [t("div", {
                class: B(["MyGameRecordList__C-item-l", ["MyGameRecordList__C-item-l-" + c(b)]])
            }, e(m(b)), 3), t("div", bk, [t("div", mk, e(b.issueNumber), 1), t("div", _k, e(b.addTime), 1)]), b.profitAmount ? (n(),
            a("div", {
                key: 0,
                class: B(["MyGameRecordList__C-item-r", {
                    success: b.state
                }])
            }, [b.profitAmount ? (n(),
            a("div", {
                key: 0,
                class: B({
                    success: b.state
                })
            }, e(b.state ? u.$t("success") : u.$t("fail")), 3)) : $("v-if", !0), t("span", null, e(`${b.state ? "+" : "-"}${d(Ct)(b.profitAmount)}`), 1)], 2)) : $("v-if", !0)], 8, gk), _ == o.value ? (n(),
            a("div", vk, [t("div", kk, e(u.$t("detailMay")), 1), b.orderNumber ? (n(),
            a("div", hk, [E(e(u.$t("orderNoMay")) + " ", 1), t("div", {
                onClick: w => d(Fe)(b.orderNumber)
            }, [E(e(b.orderNumber) + " ", 1), C(r, {
                name: "copy"
            })], 8, fk)])) : $("v-if", !0), t("div", yk, [E(e(u.$t("issueMay")) + " ", 1), t("div", null, e(b.issueNumber), 1)]), t("div", $k, [E(e(u.$t("amountMay")) + " ", 1), t("div", null, e(d(Ct)(b.amount)), 1)]), t("div", wk, [E(e(u.$t("numMay")) + " ", 1), t("div", null, e(b.betCount), 1)]), t("div", Tk, [E(e(u.$t("afterTaxAmount")) + " ", 1), t("div", Ck, e(d(Ct)(b.realAmount)), 1)]), t("div", Lk, [E(e(u.$t("tax")) + " ", 1), t("div", null, e(d(Ct)(b.fee)), 1)]), t("div", Nk, [E(e(u.$t("resultMay")) + " ", 1), b.premium ? (n(),
            a("div", zk, [(n(!0),
            a(S, null, G(b.premium, (w, T) => (n(),
            a("div", {
                key: T,
                class: B(["n" + w])
            }, null, 2))), 128))])) : (n(),
            a("div", Ik, "--"))]), t("div", xk, [E(e(u.$t("selectMay")) + " ", 1), b.gameType == 1 ? (n(),
            a("div", Sk, [b.oneList.length > 0 ? (n(),
            a(S, {
                key: 0
            }, [t("span", null, e(u.$t("k3RecordDesc1")), 1), (n(!0),
            a(S, null, G(b.oneList, (w, T) => (n(),
            a("span", {
                key: T + "1",
                class: "btn"
            }, e(l(w)), 1))), 128))], 64)) : $("v-if", !0)])) : $("v-if", !0), $(" 2个相同的数字 "), b.gameType == 2 ? (n(),
            a("div", Rk, [b.oneList.length > 0 ? (n(),
            a(S, {
                key: 0
            }, [t("span", Bk, e(u.$t("k3RecordDesc2")), 1), (n(!0),
            a(S, null, G(b.oneList, (w, T) => (n(),
            a("span", {
                class: "btn actionViolet",
                key: T + "1"
            }, e(w), 1))), 128))], 64)) : $("v-if", !0), b.towList.length > 0 ? (n(),
            a(S, {
                key: 1
            }, [t("span", Gk, e(u.$t("k3RecordDesc3")), 1), (n(!0),
            a(S, null, G(b.towList, (w, T) => (n(),
            a("span", {
                class: "btn actionRedGreen",
                key: T + "1"
            }, e(w), 1))), 128))], 64)) : $("v-if", !0)])) : $("v-if", !0), b.gameType == 3 ? (n(),
            a("div", Ak, [b.oneList.length > 0 ? (n(),
            a(S, {
                key: 0
            }, [t("span", Mk, e(u.$t("k3RecordDesc4")), 1), (n(!0),
            a(S, null, G(b.oneList, (w, T) => (n(),
            a("span", {
                class: "btn actionViolet",
                key: T + "1"
            }, e(w), 1))), 128))], 64)) : $("v-if", !0), b.towList ? (n(),
            a("div", Pk, e(u.$t("k3RecordDesc5")), 1)) : $("v-if", !0)])) : $("v-if", !0), $(" 不同的号码 "), b.gameType == 4 ? (n(),
            a("div", Dk, [b.oneList.length > 0 ? (n(),
            a(S, {
                key: 0
            }, [t("span", Ok, e(u.$t("k3RecordDesc6")), 1), (n(!0),
            a(S, null, G(b.oneList, (w, T) => (n(),
            a("span", {
                class: "actionViolet",
                key: T + "1"
            }, e(w), 1))), 128))], 64)) : $("v-if", !0), b.towList ? (n(),
            a("div", Ek, e(u.$t("k3RecordDesc7")), 1)) : $("v-if", !0), b.threeList.length > 0 ? (n(),
            a(S, {
                key: 2
            }, [t("span", qk, e(u.$t("k3RecordDesc8")), 1), (n(!0),
            a(S, null, G(b.threeList, (w, T) => (n(),
            a("span", {
                class: "actionViolet",
                key: T + "1"
            }, e(w), 1))), 128))], 64)) : $("v-if", !0)])) : $("v-if", !0)]), t("div", jk, [E(e(u.$t("statusMay")) + " ", 1), b.state != 2 ? (n(),
            a("div", {
                key: 0,
                class: B([b.state ? "green" : "red"])
            }, e(b.state ? u.$t("success") : u.$t("fail")), 3)) : (n(),
            a("div", Hk, e(u.$t("k3RecordDesc9")), 1))]), t("div", Wk, [E(e(u.$t("winOrLose")) + " ", 1), b.state != 2 ? (n(),
            a("div", {
                key: 0,
                class: B([b.state ? "green" : "red"])
            }, e(`${b.state ? "+" : "-"} ${d(Ct)(b.profitAmount)}`), 3)) : (n(),
            a("div", Fk, "--"))]), t("div", Vk, [E(e(u.$t("createTime")) + " ", 1), t("div", null, e(b.addTime), 1)])])) : $("v-if", !0)], 64))), 128))])
        }
    }
});
const Ea = V(Uk, [["__scopeId", "data-v-a5ef3154"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/AllLotteryGames/K3/MayrecordList.vue"]])
  , Kk = {
    class: "BettingRecordK3__C"
}
  , Xk = {
    class: "BettingRecordK3__C-head"
}
  , Qk = {
    class: "BettingRecordK3__C-nav"
}
  , Zk = ["innerHTML"]
  , Yk = {
    class: "BettingRecordK3__C-list"
}
  , Jk = {
    key: 0,
    class: "BettingRecordK3__C-foot"
}
  , th = {
    class: "BettingRecordK3__C-foot-page"
}
  , eh = F({
    __name: "index",
    setup(s) {
        const i = ct()
          , o = ye()
          , l = h(rd)
          , g = h([])
          , m = h(0)
          , c = h(1)
          , u = h(4)
          , p = k => {
            r.value = k.name,
            c.value = 1,
            b()
        }
          , r = h(0)
          , b = async () => {
            const k = await nt(va({
                pageSize: 20,
                pageNo: c.value,
                typeId: r.value
            }))
              , y = (k == null ? void 0 : k.data.list) || [];
            for (let f = 0; y.length > f; f++) {
                let z = y[f].gameType.split(",")
                  , L = y[f].selectType.split(",");
                for (let x = 0; z.length > x; x++)
                    if (z[x] == "1" || z[x] == "2" || z[x] == "3")
                        y[f].gameType = "1",
                        y[f].oneList = L;
                    else if (z[x] == "5" || z[x] == "6") {
                        let I = []
                          , R = []
                          , M = [];
                        for (let A = 0; L.length > A; A++) {
                            if (L[A] == "|11|" || L[A] == "|22|" || L[A] == "|33|" || L[A] == "|44|" || L[A] == "|55|" || L[A] == "|66|") {
                                let D = L[A].split("|");
                                D.pop(),
                                D.shift(),
                                I.push(D.join())
                            }
                            if (L[A] == ":11:" || L[A] == ":22:" || L[A] == ":33:" || L[A] == ":44:" || L[A] == ":55:" || L[A] == ":66:") {
                                let D = L[A].split(":");
                                D.pop(),
                                D.shift(),
                                R.push(D.join())
                            }
                            if (L[A] == ":1:" || L[A] == ":2:" || L[A] == ":3:" || L[A] == ":4:" || L[A] == ":5:" || L[A] == ":6:") {
                                let D = L[A].split(":");
                                D.pop(),
                                D.shift(),
                                M.push(D.join())
                            }
                        }
                        y[f].gameType = "2",
                        y[f].oneList = I,
                        y[f].towList = !!_(R, M),
                        y[f].towListArr = _(R, M)
                    } else if (z[x] == "7" || z[x] == "8") {
                        let I = []
                          , R = !1;
                        for (let M = 0; L.length > M; M++) {
                            if (L[M] == "|111|" || L[M] == "|222|" || L[M] == "|333|" || L[M] == "|444|" || L[M] == "|555|" || L[M] == "|666|") {
                                let A = L[M].split("|");
                                A.pop(),
                                A.shift(),
                                I.push(A.join())
                            }
                            L[M] == "|AAA|" && (R = !0),
                            y[f].oneList = I,
                            y[f].towList = R,
                            y[f].gameType = "3"
                        }
                    } else if (z[x] == "9" || z[x] == "10" || z[x] == "4") {
                        let I = []
                          , R = !1
                          , M = [];
                        for (let A = 0; L.length > A; A++) {
                            if (L[A] == "|1|" || L[A] == "|2|" || L[A] == "|3|" || L[A] == "|4|" || L[A] == "|5|" || L[A] == "|6|") {
                                let D = L[A].split("|");
                                D.pop(),
                                D.shift(),
                                I.push(D.join())
                            }
                            if (L[A] == "|ABC|" && (R = !0),
                            L[A] == ".1." || L[A] == ".2." || L[A] == ".3." || L[A] == ".4." || L[A] == ".5." || L[A] == ".6.") {
                                let D = L[A].split(".");
                                D.pop(),
                                D.shift(),
                                M.push(D.join())
                            }
                        }
                        y[f].oneList = I,
                        y[f].towList = R,
                        y[f].threeList = M,
                        y[f].gameType = "4"
                    }
            }
            g.value = y || [],
            u.value = (k == null ? void 0 : k.data.totalPage) || 0
        }
          , _ = (k, y) => {
            let f = [];
            for (var z = 0; k.length > z; z++) {
                let x = k[z]
                  , I = [];
                for (var L = 0; y.length > L; L++)
                    I.push(y[L]);
                if (I.length > 0) {
                    let R = I.sort().join(",");
                    f.push(x + "|" + R)
                }
            }
            return f.sort()
        }
          , w = async () => {
            await o.getK3Data(),
            l.value = o.getK3,
            r.value = l.value[0].typeID,
            await b()
        }
        ;
        function T() {
            i.go(-1)
        }
        const N = () => {
            c.value--,
            b()
        }
          , v = () => {
            c.value++,
            b()
        }
        ;
        return Lt( () => {
            w()
        }
        ),
        (k, y) => {
            const f = W("NavBar")
              , z = W("van-tab")
              , L = W("van-tabs")
              , x = W("van-icon");
            return n(),
            a("div", Kk, [t("div", Xk, [C(f, {
                "left-arrow": "",
                onClickLeft: T,
                class: "main",
                title: "K3 Lotre"
            })]), t("div", Qk, [C(L, {
                active: m.value,
                "onUpdate:active": y[0] || (y[0] = I => m.value = I),
                onClickTab: p
            }, {
                default: P( () => [(n(!0),
                a(S, null, G(l.value, (I, R) => (n(),
                J(z, {
                    key: R,
                    name: I.typeID
                }, {
                    title: P( () => [t("div", {
                        innerHTML: I.typeName.replace(/<br ?\/?>/, "")
                    }, null, 8, Zk)]),
                    _: 2
                }, 1032, ["name"]))), 128))]),
                _: 1
            }, 8, ["active"])]), t("div", Yk, [C(Ea, {
                mayrecord: g.value
            }, null, 8, ["mayrecord"])]), g.value.length ? (n(),
            a("div", Jk, [t("div", {
                class: B(["BettingRecordK3__C-foot-previous", {
                    disabled: c.value <= 1
                }]),
                onClick: N
            }, [C(x, {
                name: "arrow-left",
                class: "BettingRecordK3__C-icon",
                size: "20"
            })], 2), t("div", th, e(c.value) + "/" + e(u.value), 1), t("div", {
                class: B(["BettingRecordK3__C-foot-next", {
                    disabled: c.value >= u.value
                }]),
                onClick: v
            }, [C(x, {
                name: "arrow",
                class: "BettingRecordK3__C-icon",
                size: "20"
            })], 2)])) : $("v-if", !0)])
        }
    }
});
const ih = V(eh, [["__scopeId", "data-v-c228f246"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/home/AllLotteryGames/BettingRecordK3/index.vue"]])
  , bG = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: ih
}, Symbol.toStringTag, {
    value: "Module"
}))
  , nh = {
    class: "MyGameRecordList__C"
}
  , ah = ["onClick"]
  , oh = {
    class: "MyGameRecordList__C-item-m"
}
  , sh = {
    class: "MyGameRecordList__C-item-m-top"
}
  , lh = {
    class: "MyGameRecordList__C-item-m-bottom"
}
  , ch = {
    key: 0,
    class: "MyGameRecordList__C-detail"
}
  , rh = {
    class: "MyGameRecordList__C-detail-text"
}
  , uh = {
    key: 0,
    class: "MyGameRecordList__C-detail-line"
}
  , dh = ["onClick"]
  , ph = {
    class: "MyGameRecordList__C-detail-line"
}
  , gh = {
    class: "MyGameRecordList__C-detail-line"
}
  , bh = {
    class: "MyGameRecordList__C-detail-line"
}
  , mh = {
    class: "MyGameRecordList__C-detail-line"
}
  , _h = {
    class: "red"
}
  , vh = {
    class: "MyGameRecordList__C-detail-line"
}
  , kh = {
    class: "MyGameRecordList__C-detail-line"
}
  , hh = {
    key: 0
}
  , fh = {
    class: "MyGameRecordList__C-inlineB"
}
  , yh = {
    key: 0,
    class: "MyGameRecordList__C-inlineB purpleColor"
}
  , $h = {
    key: 1
}
  , wh = {
    class: "MyGameRecordList__C-detail-line"
}
  , Th = {
    class: "MyGameRecordList__C-detail-line"
}
  , Ch = {
    key: 1
}
  , Lh = {
    class: "MyGameRecordList__C-detail-line"
}
  , Nh = {
    key: 1
}
  , zh = {
    class: "MyGameRecordList__C-detail-line"
}
  , Ih = F({
    __name: "MayrecordList",
    props: {
        mayrecord: {
            type: Array,
            required: !0
        }
    },
    setup(s) {
        const {t: i} = gt()
          , o = h(-1)
          , l = p => {
            switch (p) {
            case "big":
                return "big";
            case "green":
            case "red":
            case "violet":
                return "";
            default:
                return p
            }
        }
          , g = p => {
            switch (p % 2) {
            case 1:
                return i("greenColor");
            default:
                return i("redColor")
            }
        }
          , m = p => {
            switch (p % 2) {
            case 1:
                return "greenColor";
            default:
                return "redColor"
            }
        }
          , c = p => {
            switch (p) {
            case "small":
                return i("small");
            case "big":
                return i("big");
            case "green":
                return i("green");
            case "violet":
                return i("purpleColor");
            case "red":
                return i("redColor");
            default:
                return p
            }
        }
          , u = p => {
            o.value == p ? o.value = -1 : o.value = p
        }
        ;
        return (p, r) => {
            const b = W("svg-icon");
            return n(),
            a("div", nh, [(n(!0),
            a(S, null, G(p.mayrecord, (_, w) => (n(),
            a(S, {
                key: w
            }, [t("div", {
                class: "MyGameRecordList__C-item",
                onClick: ne(T => u(w), ["stop", "prevent"])
            }, [t("div", {
                class: B(["MyGameRecordList__C-item-l", ["MyGameRecordList__C-item-l-" + _.selectType]])
            }, e(l(_.selectType)), 3), t("div", oh, [t("div", sh, e(_.issueNumber), 1), t("div", lh, e(_.addTime), 1)]), _.profitAmount ? (n(),
            a("div", {
                key: 0,
                class: B(["MyGameRecordList__C-item-r", {
                    success: _.state
                }])
            }, [_.profitAmount ? (n(),
            a("div", {
                key: 0,
                class: B({
                    success: _.state
                })
            }, e(_.state ? p.$t("success") : p.$t("fail")), 3)) : $("v-if", !0), t("span", null, e(`${_.state ? "+" : "-"}${d(Ct)(_.profitAmount)}`), 1)], 2)) : $("v-if", !0)], 8, ah), w == o.value ? (n(),
            a("div", ch, [t("div", rh, e(p.$t("detailMay")), 1), _.orderNumber ? (n(),
            a("div", uh, [t("span", null, e(p.$t("orderNoMay")), 1), t("div", {
                onClick: T => d(Fe)(_.orderNumber)
            }, [E(e(_.orderNumber) + " ", 1), C(b, {
                name: "copy"
            })], 8, dh)])) : $("v-if", !0), t("div", ph, [t("span", null, e(p.$t("issueMay")), 1), t("div", null, e(_.issueNumber), 1)]), t("div", gh, [t("span", null, e(p.$t("amountMay")), 1), t("div", null, e(d(Ct)(_.amount)), 1)]), t("div", bh, [t("span", null, e(p.$t("numMay")), 1), t("div", null, e(_.betCount), 1)]), t("div", mh, [t("span", null, e(p.$t("afterTaxAmount")), 1), t("div", _h, e(d(Ct)(_.realAmount)), 1)]), t("div", vh, [t("span", null, e(p.$t("tax")), 1), t("div", null, e(d(Ct)(_.fee)), 1)]), t("div", kh, [t("span", null, e(p.$t("resultMay")), 1), _.number ? (n(),
            a("div", hh, [t("div", fh, e(_.number), 1), t("div", {
                class: B(["MyGameRecordList__C-inlineB", [m(Number(_.number))]])
            }, e(g(Number(_.number))), 3), _.number == 0 || _.number == 5 ? (n(),
            a("div", yh, e(p.$t("purpleColor")), 1)) : $("v-if", !0), t("div", {
                class: B(["MyGameRecordList__C-inlineB", [Number(_.number) > 4 ? "big" : "small"]])
            }, e(Number(_.number) > 4 ? p.$t("big") : p.$t("small")), 3)])) : (n(),
            a("div", $h, "--"))]), t("div", wh, [t("span", null, e(p.$t("selectMay")), 1), t("div", null, e(c(_.selectType)), 1)]), t("div", Th, [t("span", null, e(p.$t("statusMay")), 1), _.state != 2 ? (n(),
            a("div", {
                key: 0,
                class: B([_.state ? "green" : "red"])
            }, e(_.state ? p.$t("success") : p.$t("fail")), 3)) : (n(),
            a("div", Ch, e(p.$t("k3RecordDesc9")), 1))]), t("div", Lh, [t("span", null, e(p.$t("winOrLose")), 1), _.state != 2 ? (n(),
            a("div", {
                key: 0,
                class: B([_.state ? "green" : "red"])
            }, e(`${_.state ? "+" : "-"} ${d(Ct)(_.profitAmount)}`), 3)) : (n(),
            a("div", Nh, "--"))]), t("div", zh, [t("span", null, e(p.$t("createTime")), 1), t("div", null, e(_.addTime), 1)])])) : $("v-if", !0)], 64))), 128))])
        }
    }
});
const fn = V(Ih, [["__scopeId", "data-v-2faec5cb"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/AllLotteryGames/WinGo/MayrecordList.vue"]])
  , xh = {
    class: "BettingRecordWin__C"
}
  , Sh = {
    class: "BettingRecordWin__C-head"
}
  , Rh = {
    class: "BettingRecordWin__C-nav"
}
  , Bh = ["innerHTML"]
  , Gh = {
    class: "BettingRecordWin__C-list"
}
  , Ah = {
    key: 0,
    class: "BettingRecordWin__C-foot"
}
  , Mh = {
    class: "BettingRecordWin__C-foot-page"
}
  , Ph = F({
    __name: "index",
    setup(s) {
        const i = ct()
          , o = ye();
        let l = h([]);
        const g = h([])
          , m = h(0)
          , c = h(1)
          , u = h(4)
          , p = v => {
            r.value = v.name,
            c.value = 1,
            b()
        }
          , r = h(0)
          , b = async () => {
            const [v,k] = await ie(mn({
                pageSize: 20,
                pageNo: c.value,
                typeId: r.value
            }));
            g.value = k.list || [],
            u.value = k.totalPage
        }
          , _ = async () => {
            await o.getWinGoData(),
            l.value = o.getWingo,
            r.value = l.value[0].typeID,
            b()
        }
        ;
        function w() {
            i.go(-1)
        }
        const T = () => {
            c.value--,
            b()
        }
          , N = () => {
            c.value++,
            b()
        }
        ;
        return Lt( () => {
            _()
        }
        ),
        (v, k) => {
            const y = W("NavBar")
              , f = W("van-tab")
              , z = W("van-tabs")
              , L = W("van-icon");
            return n(),
            a("div", xh, [t("div", Sh, [C(y, {
                "left-arrow": "",
                onClickLeft: w,
                class: "main",
                title: "Win Go"
            })]), t("div", Rh, [C(z, {
                active: m.value,
                "onUpdate:active": k[0] || (k[0] = x => m.value = x),
                onClickTab: p
            }, {
                default: P( () => [(n(!0),
                a(S, null, G(d(l), (x, I) => (n(),
                J(f, {
                    key: I,
                    name: x.typeID
                }, {
                    title: P( () => [t("div", {
                        innerHTML: x.typeName.replace(/<br ?\/?>/, "")
                    }, null, 8, Bh)]),
                    _: 2
                }, 1032, ["name"]))), 128))]),
                _: 1
            }, 8, ["active"])]), t("div", Gh, [C(fn, {
                mayrecord: g.value
            }, null, 8, ["mayrecord"])]), g.value.length ? (n(),
            a("div", Ah, [t("div", {
                class: B(["BettingRecordWin__C-foot-previous", {
                    disabled: c.value <= 1
                }]),
                onClick: T
            }, [C(L, {
                name: "arrow-left",
                class: "BettingRecordWin__C-icon",
                size: "20"
            })], 2), t("div", Mh, e(c.value) + "/" + e(u.value), 1), t("div", {
                class: B(["BettingRecordWin__C-foot-next", {
                    disabled: c.value >= u.value
                }]),
                onClick: N
            }, [C(L, {
                name: "arrow",
                class: "BettingRecordWin__C-icon",
                size: "20"
            })], 2)])) : $("v-if", !0)])
        }
    }
});
const Dh = V(Ph, [["__scopeId", "data-v-6d173501"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/home/AllLotteryGames/BettingRecordWin/index.vue"]])
  , mG = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Dh
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Oh = {
    class: "BettingRecordWinTrx__C"
}
  , Eh = {
    class: "BettingRecordWinTrx__C-head"
}
  , qh = {
    class: "BettingRecordWinTrx__C-nav"
}
  , jh = ["innerHTML"]
  , Hh = {
    class: "BettingRecordWinTrx__C-list"
}
  , Wh = {
    key: 0,
    class: "BettingRecordWinTrx__C-foot"
}
  , Fh = {
    class: "BettingRecordWinTrx__C-foot-page"
}
  , Vh = F({
    __name: "index",
    setup(s) {
        const i = ct()
          , o = ye()
          , l = h(ld)
          , g = h([])
          , m = h(0)
          , c = h(1)
          , u = h(0)
          , p = h(4)
          , r = v => {
            u.value = v.name,
            c.value = 1,
            b()
        }
          , b = async () => {
            const [v,k] = await ie(_n({
                pageSize: 20,
                pageNo: c.value,
                typeId: u.value
            }));
            g.value = k.list || [],
            p.value = k.totalPage
        }
          , _ = async () => {
            await o.getTrxData(),
            l.value = o.getTrx,
            u.value = l.value[0].typeID,
            b()
        }
        ;
        function w() {
            i.go(-1)
        }
        const T = () => {
            c.value--,
            b()
        }
          , N = () => {
            c.value++,
            b()
        }
        ;
        return Lt( () => {
            _()
        }
        ),
        (v, k) => {
            const y = W("NavBar")
              , f = W("van-tab")
              , z = W("van-tabs")
              , L = W("van-icon");
            return n(),
            a("div", Oh, [t("div", Eh, [C(y, {
                "left-arrow": "",
                onClickLeft: w,
                class: "main",
                title: "Trx Win Go"
            })]), t("div", qh, [C(z, {
                active: m.value,
                "onUpdate:active": k[0] || (k[0] = x => m.value = x),
                onClickTab: r
            }, {
                default: P( () => [(n(!0),
                a(S, null, G(l.value, (x, I) => (n(),
                J(f, {
                    key: I,
                    name: x.typeID
                }, {
                    title: P( () => [t("div", {
                        innerHTML: x.typeName.replace(/<br ?\/?>/, "")
                    }, null, 8, jh)]),
                    _: 2
                }, 1032, ["name"]))), 128))]),
                _: 1
            }, 8, ["active"])]), t("div", Hh, [C(fn, {
                mayrecord: g.value
            }, null, 8, ["mayrecord"])]), g.value.length ? (n(),
            a("div", Wh, [t("div", {
                class: B(["BettingRecordWinTrx__C-foot-previous", {
                    disabled: c.value <= 1
                }]),
                onClick: T
            }, [C(L, {
                name: "arrow-left",
                class: "BettingRecordWinTrx__C-icon",
                size: "20"
            })], 2), t("div", Fh, e(c.value) + "/" + e(p.value), 1), t("div", {
                class: B(["BettingRecordWinTrx__C-foot-next", {
                    disabled: c.value >= p.value
                }]),
                onClick: N
            }, [C(L, {
                name: "arrow",
                class: "BettingRecordWinTrx__C-icon",
                size: "20"
            })], 2)])) : $("v-if", !0)])
        }
    }
});
const Uh = V(Vh, [["__scopeId", "data-v-7bbbf1c1"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/home/AllLotteryGames/BettingRecordWinTrx/index.vue"]])
  , _G = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Uh
}, Symbol.toStringTag, {
    value: "Module"
}))
  , lt = h({
    odds: 1.5,
    money_list: [100, 1e3, 200, 5e3, 1e4],
    bet_money: 0,
    binguoType: 1,
    currentNumber: "20230610858776",
    award_result: "246",
    bet_item: "",
    trend_result: ["6", "7", "8", "9", "10", "12", "13", "14", "15", "16", "17", "18", "5"],
    trend_result2: ["123", "245", "532", "666"],
    currentMoneyIndex: 0,
    bet_number: "",
    beishu: 1,
    beishuList: [1, 5, 10, 20, 50, 100],
    currentBeishuIndex: 0,
    currentBetType: void 0,
    currentPlayId: 0,
    currentSelectType: "",
    currentOdds: "",
    drawIssnum: ""
})
  , oi = h()
  , an = h(!1)
  , si = h(!1)
  , ta = h(!0)
  , ea = h(!1)
  , Kh = h(!1)
  , on = h("00:00")
  , Xh = h(!1)
  , sn = h(!0)
  , {t: ln} = Gi.global
  , li = h([])
  , Xe = h([{
    value: ln("small"),
    type: 1,
    range: "3-9",
    beishu: "2.0",
    bet_amount: 0,
    key: "Small",
    groupId: 1,
    playId: 0,
    hot: !1
}, {
    value: ln("binguoHe"),
    type: 2,
    range: "10-11",
    beishu: "3.0",
    bet_amount: 0,
    key: "Drawn",
    groupId: 1,
    playId: 0,
    hot: !1
}, {
    value: ln("k3Big"),
    type: 3,
    range: "12-18",
    beishu: "5.0",
    bet_amount: 0,
    key: "Big",
    groupId: 1,
    playId: 0,
    hot: !1
}])
  , ci = h(Array.from({
    length: 16
}, (s, i) => {
    const o = i + 3;
    return {
        value: o,
        type: o < 10 ? 1 : o > 11 ? 3 : 2,
        beishu: "2.0",
        bet_amount: 0,
        hot: !1,
        groupId: 1,
        playId: 0
    }
}
))
  , Se = h({
    third: {
        amount1: 0,
        amount2: 0
    },
    two: 0,
    one: {
        amount1: 0,
        amount2: 0,
        amount3: 0
    }
})
  , Me = h([{
    value: "1",
    amount1: 0,
    amount2: 0,
    amount3: 0,
    hot1: !1,
    hot2: !1,
    hot3: !1
}, {
    value: "2",
    amount1: 0,
    amount2: 0,
    amount3: 0,
    hot1: !1,
    hot2: !1,
    hot3: !1
}, {
    value: "3",
    amount1: 0,
    amount2: 0,
    amount3: 0,
    hot1: !1,
    hot2: !1,
    hot3: !1
}, {
    value: "4",
    amount1: 0,
    amount2: 0,
    amount3: 0,
    hot1: !1,
    hot2: !1,
    hot3: !1
}, {
    value: "5",
    amount1: 0,
    amount2: 0,
    amount3: 0,
    hot1: !1,
    hot2: !1,
    hot3: !1
}, {
    value: "6",
    amount1: 0,
    amount2: 0,
    amount3: 0,
    hot1: !1,
    hot2: !1,
    hot3: !1
}, {
    value: "*",
    amount1: 0,
    amount2: 0,
    amount3: 0,
    hot1: !1,
    hot2: !1,
    hot3: !1
}])
  , ji = () => {
    const {t: s} = gt()
      , i = h()
      , o = Q( () => [Xt("home/AllLotteryGames/binguo", "dice_" + lt.value.award_result.toString()[0]), Xt("home/AllLotteryGames/binguo", "dice_" + lt.value.award_result.toString()[1]), Xt("home/AllLotteryGames/binguo", "dice_" + lt.value.award_result.toString()[2])])
      , l = Q( () => lt.value.currentBetType === 1 ? "small" : lt.value.currentBetType === 2 ? "and" : "big")
      , g = async () => {
        const I = await nt(dd());
        I != null && I.data && (lt.value.money_list = I.data.betAmount,
        lt.value.beishuList = I.data.betMultiplier,
        lt.value.bet_money = I.data.betAmount[0])
    }
      , m = async () => {
        const I = await nt(pd());
        if (I != null && I.data) {
            li.value = I == null ? void 0 : I.data;
            let R = I == null ? void 0 : I.data;
            R.filter(D => D.groupId === 1).forEach(D => {
                Number(D.betType) ? ci.value.forEach(j => {
                    D.betType === j.value + "" && (j.beishu = D.odds,
                    j.playId = D.playId)
                }
                ) : Xe.value.forEach(j => {
                    j.key === D.betType && (j.beishu = D.odds,
                    j.playId = D.playId)
                }
                )
            }
            ),
            R.filter(D => D.groupId !== 1).forEach(D => {
                D.groupId === 4 && (D.betType === "1" ? Se.value.third.amount1 = D.odds : Se.value.third.amount2 = D.odds),
                D.groupId === 3 && (Se.value.two = D.odds),
                D.groupId === 2 && (D.betType === "1" ? Se.value.one.amount1 = D.odds : D.betType === "2" ? Se.value.one.amount2 = D.odds : Se.value.one.amount3 = D.odds)
            }
            )
        }
    }
      , c = async () => {
        const I = await nt(md({
            issueNumber: lt.value.currentNumber
        }));
        I != null && I.data && (I.data.forEach(R => {
            switch (Xe.value.forEach(M => {
                R.playId === M.playId && (M.bet_amount = R.amount)
            }
            ),
            ci.value.forEach(M => {
                R.playId === M.playId && (M.bet_amount = R.amount)
            }
            ),
            R.playId) {
            case 28:
                Me.value[Number(R.selectType[0]) - 1].amount1 = R.amount;
                break;
            case 29:
                Me.value[6].amount1 = R.amount;
                break;
            case 27:
                Me.value[Number(R.selectType[0]) - 1].amount2 = R.amount;
                break;
            case 24:
                Me.value[Number(R.selectType[0]) - 1].amount3 = R.amount;
                break
            }
        }
        ),
        await u(0),
        Jt( () => {
            I.data.sort( (A, D) => D.amount - A.amount).slice(0, 3).forEach(A => {
                let D = Xe.value.findIndex(X => A.playId === X.playId);
                D > -1 && (Xe.value[D].hot = !0);
                let j = ci.value.findIndex(X => A.playId === X.playId);
                switch (j > -1 && (ci.value[j].hot = !0),
                A.playId) {
                case 28:
                    Me.value[Number(A.selectType[0]) - 1].hot1 = !0;
                    break;
                case 29:
                    Me.value[6].hot1 = !0;
                    break;
                case 27:
                    Me.value[Number(A.selectType[0]) - 1].hot2 = !0;
                    break;
                case 24:
                    Me.value[Number(A.selectType[0]) - 1].hot3 = !0;
                    break
                }
            }
            )
        }
        ))
    }
      , u = async I => {
        Me.value.forEach(R => {
            R.hot1 = !1,
            R.hot2 = !1,
            R.hot3 = !1,
            I === 1 && (R.amount1 = 0,
            R.amount2 = 0,
            R.amount3 = 0)
        }
        ),
        Xe.value.forEach(R => {
            I === 1 && (R.bet_amount = 0),
            R.hot = !1
        }
        ),
        ci.value.forEach(R => {
            I === 1 && (R.bet_amount = 0),
            R.hot = !1
        }
        )
    }
      , p = async () => {
        const I = await nt(gd());
        I && (I.data ? I.data.startTime && I.data.endTime && (lt.value.currentNumber = I == null ? void 0 : I.data.issueNumber,
        k(I.data.serviceTime, I.data.endTime, async () => {
            on.value = "10:00",
            await p(),
            clearInterval(i.value),
            setTimeout( () => {
                r()
            }
            , 60 * 1e3),
            u(1)
        }
        )) : sn.value = !1,
        await c())
    }
      , r = async () => {
        let I = 1;
        i.value = setInterval(async () => {
            I === 10 ? clearInterval(i.value) : (await b(),
            await _(),
            I++)
        }
        , 1e4)
    }
      , b = async () => {
        const I = await nt(bd());
        I && (lt.value.award_result = I == null ? void 0 : I.data.result,
        lt.value.drawIssnum = I == null ? void 0 : I.data.issueNo)
    }
      , _ = async () => {
        const I = await nt(Aa());
        I && (lt.value.trend_result = I == null ? void 0 : I.data.map(R => R.resultSum + "").slice(0, 13).reverse(),
        lt.value.trend_result2 = I == null ? void 0 : I.data.map(R => R.result + "").slice(0, 4).reverse())
    }
      , w = I => {
        si.value = !0,
        lt.value.bet_number = I.value + "",
        lt.value.currentBetType = I.type,
        lt.value.currentPlayId = I.playId,
        lt.value.currentOdds = I.beishu + ""
    }
      , T = (I, R) => {
        var M, A, D, j;
        R === 1 ? (lt.value.bet_number = I,
        lt.value.currentBetType = R,
        lt.value.currentPlayId = (M = li.value.find(X => X.betType === "1" && X.groupId === 2)) == null ? void 0 : M.playId,
        lt.value.currentOdds = Se.value.one.amount1 + "") : R === 2 ? (lt.value.bet_number = I + "," + I,
        I.includes("6") ? lt.value.currentBetType = 3 : I.includes("5") ? lt.value.currentBetType = 2 : lt.value.currentBetType = 1,
        lt.value.currentOdds = Se.value.two + "",
        lt.value.currentPlayId = (A = li.value.find(X => X.betType === "2" && X.groupId === 3)) == null ? void 0 : A.playId) : R === 3 && (lt.value.bet_number = I + "," + I + "," + I,
        /[123]/.test(I) ? lt.value.currentBetType = 1 : lt.value.currentBetType = 3,
        I.includes("*") ? (lt.value.currentOdds = Se.value.third.amount2 + "",
        lt.value.currentPlayId = (D = li.value.find(X => X.betType === "2" && X.groupId === 4)) == null ? void 0 : D.playId) : (lt.value.currentOdds = Se.value.third.amount1 + "",
        lt.value.currentPlayId = (j = li.value.find(X => X.betType === "1" && X.groupId === 4)) == null ? void 0 : j.playId)),
        si.value = !0
    }
      , N = async () => {
        var D;
        if (!sn.value) {
            si.value = !1,
            ea.value = !0;
            return
        }
        if (!ta.value)
            return;
        let I = li.value.find(j => j.playId === lt.value.currentPlayId)
          , R = "";
        (I == null ? void 0 : I.groupId) === 2 || (I == null ? void 0 : I.groupId) === 3 ? R = lt.value.bet_number.split(",")[0] : (I == null ? void 0 : I.groupId) === 4 ? R = lt.value.bet_number.includes("*") ? "***" : lt.value.bet_number.split(",").join("") : R = Number(lt.value.bet_number) ? lt.value.bet_number : (D = Xe.value.find(j => j.value === lt.value.bet_number)) == null ? void 0 : D.key;
        let M = {
            issueNumber: lt.value.currentNumber,
            amount: lt.value.bet_money * lt.value.beishu,
            figure: Number(lt.value.beishu),
            gameType: (I == null ? void 0 : I.groupId) + "",
            selectType: R,
            playId: lt.value.currentPlayId
        };
        (await nt(_d(M))).data && (gn(s("code402")),
        si.value = !1,
        c())
    }
      , v = (I, R) => {
        let M = new Date(I.replace(/-/g, "/"));
        return new Date(R.replace(/-/g, "/")).getTime() - M.getTime()
    }
      , k = (I, R, M) => {
        clearInterval(oi.value),
        oi.value = void 0;
        let A = v(I, R);
        if (A <= 1e3)
            throw new Error("时间不正确");
        oi.value = setInterval( () => {
            if (A -= 1e3,
            A <= 1e3) {
                clearInterval(oi.value),
                M();
                return
            }
            on.value = _s(A, "mm:ss")
        }
        , 1e3)
    }
      , y = () => an.value = !an.value
      , f = I => {
        I === "add" ? lt.value.beishu = Number(lt.value.beishu) + 1 : lt.value.beishu = Number(lt.value.beishu) - 1
    }
      , z = () => {
        si.value = !1,
        lt.value.currentBeishuIndex = 0,
        lt.value.currentMoneyIndex = 0
    }
      , L = () => ra.back()
      , x = I => I >= 1e6 ? (I / 1e6).toFixed(1).replace(/\.0$/, "") + "M" : I >= 1e3 ? (I / 1e3).toFixed(1).replace(/\.0$/, "") + "K" : I + "";
    return At( () => lt.value.currentMoneyIndex, I => {
        lt.value.bet_money = Number(lt.value.money_list[I])
    }
    , {
        immediate: !0
    }),
    At( () => lt.value.bet_number, () => {
        lt.value.currentMoneyIndex = 0,
        lt.value.currentBeishuIndex = 0
    }
    , {
        immediate: !0
    }),
    At( () => lt.value.currentBeishuIndex, I => {
        lt.value.beishu = Number(lt.value.beishuList[I])
    }
    , {
        immediate: !0
    }),
    Ve( () => {
        clearInterval(oi.value)
    }
    ),
    {
        store: lt,
        timer: oi,
        isShowBetMoney: an,
        filterNumberSize: l,
        handleToggleShwoMoney: y,
        handleBet: w,
        goBack: L,
        handleStep: f,
        handleCancel: z,
        isSell: sn,
        handleAlike: T,
        getBinguoConfig: g,
        getBinguoOddsList: m,
        getGameBingo18Issue: p,
        countdownTimeFun: k,
        getBingo18LastGameResult: b,
        getBingo18BetAmount: c,
        handleBetSubmit: N,
        getBingo18Last50Result: _,
        formatNum: x,
        checkRule: ta,
        resultImgList: o,
        betSizeList: Xe,
        betNumberList: ci,
        betSheetVisible: si,
        overVisble: ea,
        alikeList: Me,
        timeText: on,
        oddObject: Se,
        playerRuleVisble: Kh,
        betPopTXT: Xh
    }
}
  , qa = s => (Nt("data-v-5ba4aae3"),
s = s(),
zt(),
s)
  , Qh = {
    class: "binguo_info"
}
  , Zh = {
    class: "binguo_award"
}
  , Yh = {
    key: 0,
    class: "main"
}
  , Jh = {
    class: "current_award"
}
  , tf = {
    class: "tit"
}
  , ef = {
    class: "current_number"
}
  , nf = {
    class: "award_time"
}
  , af = {
    class: "award_result"
}
  , of = {
    class: "tit"
}
  , sf = {
    class: "award_type"
}
  , lf = {
    key: 1,
    class: "over_tip"
}
  , cf = {
    class: "trend"
}
  , rf = {
    key: 0,
    class: "trend_result1"
}
  , uf = {
    class: "text"
}
  , df = {
    class: "result_list"
}
  , pf = qa( () => t("span", {
    class: "tag animation_tag"
}, "-", -1))
  , gf = {
    key: 1,
    class: "trend_result2"
}
  , bf = {
    class: "result_list2"
}
  , mf = {
    class: "result_list2"
}
  , _f = {
    class: "animation_tag"
}
  , vf = qa( () => t("div", {
    id: "time"
}, null, -1))
  , kf = F({
    __name: "BinguoInfo",
    setup(s) {
        const {store: i, resultImgList: o, isSell: l, timeText: g, getGameBingo18Issue: m, getBingo18LastGameResult: c, getBingo18Last50Result: u} = ji()
          , p = ct();
        function r(_) {
            let w = 0;
            return i.value.binguoType === 1 ? w = Number(_) : (w = 0,
            _.split("").forEach(T => {
                w += Number(T)
            }
            )),
            w < 10 ? "small" : w === 11 || w === 10 ? "sum" : "big"
        }
        const b = () => {
            p.push({
                path: "/home/AllLotteryGames/BinguoCount"
            })
        }
        ;
        return m(),
        c(),
        u(),
        (_, w) => {
            const T = W("van-icon");
            return n(),
            a(S, null, [t("div", Qh, [t("div", Zh, [d(l) ? (n(),
            a("div", Yh, [t("div", Jh, [t("div", tf, e(_.$t("currentIssNumber")), 1), t("div", ef, e(d(i).currentNumber), 1)]), t("div", nf, e(d(g)), 1), t("div", af, [t("div", of, e(d(i).drawIssnum), 1), t("div", sf, [t("div", {
                style: le({
                    backgroundImage: `url(${d(o)[0]}) `
                })
            }, null, 4), d(i).binguoType !== 2 ? (n(),
            J(T, {
                key: 0,
                name: d(Xt)("home/AllLotteryGames/binguo", "add")
            }, null, 8, ["name"])) : $("v-if", !0), t("div", {
                style: le({
                    backgroundImage: `url(${d(o)[1]}) `
                })
            }, null, 4), d(i).binguoType !== 2 ? (n(),
            J(T, {
                key: 1,
                name: d(Xt)("home/AllLotteryGames/binguo", "add")
            }, null, 8, ["name"])) : $("v-if", !0), t("div", {
                style: le({
                    backgroundImage: `url(${d(o)[2]})`
                })
            }, null, 4)])])])) : (n(),
            a("div", lf, e(_.$t("playerEnd")), 1))]), t("div", cf, [d(i).binguoType === 1 ? (n(),
            a("div", rf, [t("div", uf, e(_.$t("result")), 1), t("div", df, [(n(!0),
            a(S, null, G(d(i).trend_result, N => (n(),
            a("span", {
                class: B(["tag", `${r(N)}_tag`])
            }, e(N), 3))), 256)), pf])])) : (n(),
            a("div", gf, [(n(!0),
            a(S, null, G(d(i).trend_result2, N => (n(),
            a("div", bf, [(n(!0),
            a(S, null, G(N, v => (n(),
            a("span", {
                class: B(`${r(N)}_tag`)
            }, e(v), 3))), 256))]))), 256)), t("div", mf, [(n(),
            a(S, null, G(3, () => t("span", _f)), 64))])])), t("div", {
                class: "trend_img",
                onClick: w[0] || (w[0] = N => b())
            })])]), vf], 64)
        }
    }
});
const hf = V(kf, [["__scopeId", "data-v-5ba4aae3"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/home/AllLotteryGames/Binguo/components/BinguoInfo.vue"]])
  , ff = s => (Nt("data-v-88d327d7"),
s = s(),
zt(),
s)
  , yf = {
    class: "main_desk"
}
  , $f = {
    key: 0,
    class: "rule_tip"
}
  , wf = {
    class: "bet_size"
}
  , Tf = ["onClick"]
  , Cf = {
    class: "head"
}
  , Lf = {
    class: "range"
}
  , Nf = {
    key: 0,
    class: "hot"
}
  , zf = ["onClick"]
  , If = {
    key: 1,
    class: "alike_box"
}
  , xf = {
    class: "rule_tip"
}
  , Sf = {
    class: "alike"
}
  , Rf = ["onClick"]
  , Bf = {
    class: "amount"
}
  , Gf = {
    class: "third_list"
}
  , Af = {
    class: "ball"
}
  , Mf = {
    class: "ball2"
}
  , Pf = {
    key: 0,
    class: "ball_hot2"
}
  , Df = {
    class: "rule_tip"
}
  , Of = {
    class: "alike two_alike"
}
  , Ef = ["onClick"]
  , qf = {
    class: "amount"
}
  , jf = {
    class: "third_list"
}
  , Hf = {
    class: "ball"
}
  , Wf = {
    class: "ball2"
}
  , Ff = {
    key: 0,
    class: "ball_hot2"
}
  , Vf = {
    class: "rule_tip"
}
  , Uf = {
    class: "alike one_alike"
}
  , Kf = ["onClick"]
  , Xf = {
    class: "amount"
}
  , Qf = ff( () => t("div", {
    class: "ball_hot"
}, null, -1))
  , Zf = {
    class: "third_list"
}
  , Yf = {
    class: "ball"
}
  , Jf = {
    class: "ball2"
}
  , ty = {
    key: 0,
    class: "ball_hot2"
}
  , ey = {
    class: "rule_tip_header"
}
  , iy = ["src"]
  , ny = {
    class: "rule_tip_dialog"
}
  , ay = {
    class: "rule_tip_tit"
}
  , oy = {
    class: "rule_tip_text"
}
  , sy = F({
    __name: "BinguoMainDesk",
    setup(s) {
        const {t: i} = gt()
          , {betSizeList: o, betNumberList: l, isShowBetMoney: g, handleBet: m, store: c, alikeList: u, handleAlike: p, oddObject: r, formatNum: b} = ji()
          , _ = {
            sum: {
                dice: "1,3,6",
                tip1: i("result"),
                tip2: i("binguoRuleTipText1")
            },
            third: {
                dice: "6,6,6",
                tip1: i("numbersMatch"),
                tip2: i("binguoRuleTipText2")
            },
            two: {
                dice: "6,6",
                tip1: i("sameNum"),
                tip2: i("binguoRuleTipText3")
            },
            one: {
                dice: "1,2,3,5,4,6",
                tip1: i("same"),
                tip2: i("binguoRuleTipText4")
            }
        }
          , w = h(!1)
          , T = h()
          , N = () => {
            const v = document.querySelectorAll(".rule_tip");
            for (let k = 0; k < v.length; k++)
                v[k].addEventListener("click", () => {
                    w.value = !0,
                    k === 0 && (T.value = _.sum),
                    k === 1 && (T.value = _.third),
                    k === 2 && (T.value = _.two),
                    k === 3 && (T.value = _.one)
                }
                )
        }
        ;
        return At( () => c.value.binguoType, v => {
            v === 2 && Jt( () => {
                N()
            }
            )
        }
        , {
            deep: !0,
            immediate: !0
        }),
        (v, k) => (n(),
        a("div", yf, [d(c).binguoType === 2 ? (n(),
        a("div", $f, e(v.$t("xosoTxt60")), 1)) : $("v-if", !0), t("div", wf, [(n(!0),
        a(S, null, G(d(o), y => (n(),
        a("div", {
            class: "size_item",
            onClick: ne(f => d(m)(y), ["stop"])
        }, [t("div", Cf, [t("span", null, e(d(g) && y.bet_amount ? d(b)(y.bet_amount) : ""), 1), t("span", null, e(y.beishu + "x" || ""), 1)]), t("div", {
            class: B(`value value_${y.type}`)
        }, e(y.value), 3), t("div", Lf, e(y.range), 1), y.hot && d(g) ? (n(),
        a("div", Nf)) : $("v-if", !0)], 8, Tf))), 256))]), t("div", {
            class: B(["bet_number", {
                betAll: d(c).binguoType === 2
            }])
        }, [(n(!0),
        a(S, null, G(d(l), y => (n(),
        a("div", {
            key: y.value,
            class: "item",
            onClick: f => d(m)(y)
        }, [t("div", null, e(d(g) && y.bet_amount ? d(b)(y.bet_amount) : ""), 1), t("div", null, e(y.value), 1), t("div", null, e(y.beishu) + "X", 1), y.hot && d(g) ? (n(),
        a("div", {
            key: 0,
            class: B(["hot", {
                hot2: d(c).binguoType === 2
            }])
        }, null, 2)) : $("v-if", !0)], 8, zf))), 128))], 2), d(c).binguoType === 2 ? (n(),
        a("div", If, [t("div", xf, e(v.$t("trendTXT4")) + " " + e(v.$t("odds")) + e(d(r).third.amount1) + "x " + e(v.$t("k3bet3Desc4")) + " " + e(v.$t("odds")) + e(d(r).third.amount2) + "x ", 1), t("div", Sf, [(n(!0),
        a(S, null, G(d(u), y => (n(),
        a("div", {
            class: "alike_item",
            onClick: f => d(p)(y.value, 3)
        }, [t("div", Bf, e(d(g) && y.amount1 ? d(b)(y.amount1) : ""), 1), t("div", Gf, [(n(),
        a(S, null, G(3, () => t("div", Af, [t("span", Mf, e(y.value), 1), y.hot1 ? (n(),
        a("span", Pf)) : $("v-if", !0)])), 64))])], 8, Rf))), 256))]), t("div", Df, e(v.$t("trendTXT3") + v.$t("odds")) + " " + e(d(r).two) + "x", 1), t("div", Of, [(n(!0),
        a(S, null, G(d(u).slice(0, 6), y => (n(),
        a("div", {
            class: "alike_item",
            onClick: f => d(p)(y.value, 2)
        }, [t("div", qf, e(d(g) && y.amount2 ? d(b)(y.amount2) : ""), 1), t("div", jf, [(n(),
        a(S, null, G(2, () => t("div", Hf, [t("span", Wf, e(y.value), 1), y.hot2 ? (n(),
        a("span", Ff)) : $("v-if", !0)])), 64))])], 8, Ef))), 256))]), t("div", Vf, e(v.$t("binguoRuleTip1")) + e(d(r).one.amount1) + "x " + e(v.$t("binguoRuleTip2")) + e(d(r).one.amount2) + "x " + e(v.$t("binguoRuleTip3")) + " " + e(d(r).one.amount3) + "x ", 1), t("div", Uf, [(n(!0),
        a(S, null, G(d(u).slice(0, 6), y => (n(),
        a("div", {
            class: "alike_item",
            onClick: f => d(p)(y.value, 1)
        }, [t("div", Xf, e(d(g) && y.amount3 ? d(b)(y.amount3) : ""), 1), Qf, t("div", Zf, [t("span", Yf, [t("span", Jf, e(y.value), 1), y.hot3 ? (n(),
        a("span", ty)) : $("v-if", !0)])])], 8, Kf))), 256))])])) : $("v-if", !0), C(Re, {
            show: w.value,
            "onUpdate:show": k[0] || (k[0] = y => w.value = y),
            showCloseIcon: !0,
            clickOutSide: !0,
            "show-cancel-btn": !1,
            showFooter: !1,
            isShowHeader: !1
        }, {
            title: P( () => {
                var y;
                return [t("div", ey, [(n(!0),
                a(S, null, G((y = T.value) == null ? void 0 : y.dice.split(","), f => (n(),
                a("img", {
                    src: d(Xt)("home/AllLotteryGames/binguo", `rule_dice_${f}`),
                    alt: ""
                }, null, 8, iy))), 256))])]
            }
            ),
            content: P( () => {
                var y, f;
                return [t("div", ny, [t("div", ay, e((y = T.value) == null ? void 0 : y.tip1), 1), t("div", oy, e((f = T.value) == null ? void 0 : f.tip2), 1)])]
            }
            ),
            footer: P( () => []),
            _: 1
        }, 8, ["show"])]))
    }
});
const ly = V(sy, [["__scopeId", "data-v-88d327d7"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/home/AllLotteryGames/Binguo/components/BinguoMainDesk.vue"]])
  , cy = {
    class: "bet_content"
}
  , ry = {
    class: "bet_tit"
}
  , uy = {
    class: "bet_cnt"
}
  , dy = {
    class: "bet_item"
}
  , py = {
    class: "bet_item_tit"
}
  , gy = {
    class: "bet_money_list"
}
  , by = ["onClick"]
  , my = {
    class: "bet_item"
}
  , _y = {
    class: "bet_item_tit"
}
  , vy = {
    class: "bet_step"
}
  , ky = {
    class: "bet_money_list bet_beishu"
}
  , hy = ["onClick"]
  , fy = {
    class: "bet_info"
}
  , yy = {
    class: "tit"
}
  , $y = {
    class: "pl",
    style: {
        color: "#fff"
    }
}
  , wy = {
    class: "bet_info"
}
  , Ty = {
    class: "tit"
}
  , Cy = {
    class: "pl",
    style: {
        color: "#cee98c"
    }
}
  , Ly = {
    class: "bet_info"
}
  , Ny = {
    class: "tit"
}
  , zy = {
    class: "pl",
    style: {
        color: "#f9bc36"
    }
}
  , Iy = {
    key: 0,
    class: "recharge_tip"
}
  , xy = {
    class: "apply"
}
  , Sy = {
    class: "bet_btn_group"
}
  , Ry = F({
    __name: "BinguoBetSheet",
    setup(s) {
        const {betSheetVisible: i, store: o, betPopTXT: l, filterNumberSize: g, handleStep: m, checkRule: c, handleCancel: u, handleBetSubmit: p} = ji()
          , b = De().getUserInfo
          , _ = ct()
          , w = () => {
            _.push("/wallet/recharge")
        }
        ;
        return (T, N) => {
            const v = W("van-field")
              , k = W("van-icon")
              , y = W("van-checkbox")
              , f = W("van-action-sheet");
            return n(),
            J(f, {
                show: d(i),
                "onUpdate:show": N[8] || (N[8] = z => ue(i) ? i.value = z : null),
                closeable: !1
            }, {
                default: P( () => [t("div", cy, [t("div", ry, e(T.$t("betting")), 1), t("div", uy, [(n(!0),
                a(S, null, G(d(o).bet_number.split(","), z => (n(),
                a("span", {
                    class: B(`${d(g)}`)
                }, e(z), 3))), 256))]), t("div", dy, [t("div", py, e(T.$t("amount")), 1), t("div", gy, [(n(!0),
                a(S, null, G(d(o).money_list, (z, L) => (n(),
                a("div", {
                    class: B(["money_item", {
                        monyActive: d(o).currentMoneyIndex === L
                    }]),
                    onClick: x => d(o).currentMoneyIndex = L
                }, e(z), 11, by))), 256))])]), t("div", my, [t("div", _y, [t("span", null, e(T.$t("multiple")), 1), t("div", vy, [t("span", {
                    onClick: N[0] || (N[0] = z => d(m)("sub"))
                }, "-"), C(v, {
                    modelValue: d(o).beishu,
                    "onUpdate:modelValue": N[1] || (N[1] = z => d(o).beishu = z),
                    "input-align": "center",
                    onInput: N[2] || (N[2] = z => {
                        if (9999 < Number(z.target.value)) {
                            d(o).beishu = 9999;
                            return
                        }
                        if (Number(z.target.value) < 1) {
                            d(o).beishu = 0;
                            return
                        }
                        d(o).beishu = Number(z.target.value)
                    }
                    ),
                    type: "digit",
                    class: "bet_beishu_input"
                }, null, 8, ["modelValue"]), t("span", {
                    onClick: N[3] || (N[3] = z => d(m)("add"))
                }, "+")])]), t("div", ky, [(n(!0),
                a(S, null, G(d(o).beishuList, (z, L) => (n(),
                a("div", {
                    class: B(["money_item", {
                        monyActive: d(o).currentBeishuIndex === L
                    }]),
                    onClick: x => d(o).currentBeishuIndex = L
                }, " X" + e(z), 11, hy))), 256))])]), t("div", fy, [t("div", yy, e(T.$t("odds")), 1), t("div", $y, e(d(o).currentOdds), 1)]), t("div", wy, [t("div", Ty, e(T.$t("walletBalance")), 1), t("div", Cy, e(d(b).amount), 1)]), t("div", Ly, [t("div", Ny, e(T.$t("betAmounts")), 1), t("div", zy, e(d(o).bet_money * d(o).beishu), 1)]), d(b).amount < d(o).bet_money * d(o).beishu ? (n(),
                a("div", Iy, [t("div", null, [C(k, {
                    name: "warning-o",
                    size: "18"
                }), E(" " + e(T.$t("walletTip")), 1)]), t("span", {
                    onClick: w
                }, e(T.$t("goRecharge")) + " >>", 1)])) : $("v-if", !0), C(y, {
                    modelValue: d(c),
                    "onUpdate:modelValue": N[5] || (N[5] = z => ue(c) ? c.value = z : null),
                    "checked-color": "#CEE98C",
                    "label-disabled": "",
                    "icon-size": "24px"
                }, {
                    default: P( () => [t("span", xy, e(T.$t("agree")), 1), t("span", {
                        class: "rule",
                        onClick: N[4] || (N[4] = () => {
                            i.value = !1,
                            l.value = !0
                        }
                        )
                    }, e(T.$t("presaleRules")), 1)]),
                    _: 1
                }, 8, ["modelValue"]), t("div", Sy, [t("div", {
                    class: "cancel_btn",
                    onClick: N[6] || (N[6] = (...z) => d(u) && d(u)(...z))
                }, e(T.$t("cancel")), 1), t("div", {
                    class: B(["bet_btn", {
                        inconformity: d(b).amount < d(o).bet_money * d(o).beishu || !d(c) || d(o).bet_money * d(o).beishu === 0
                    }]),
                    onClick: N[7] || (N[7] = (...z) => d(p) && d(p)(...z))
                }, e(T.$t("betting")), 3)])])]),
                _: 1
            }, 8, ["show"])
        }
    }
});
const By = V(Ry, [["__scopeId", "data-v-e3548ddc"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/home/AllLotteryGames/Binguo/components/BinguoBetSheet.vue"]]);
const Gy = {}
  , yn = s => (Nt("data-v-a175919f"),
s = s(),
zt(),
s)
  , Ay = {
    class: "container"
}
  , My = {
    class: "first-paragraph"
}
  , Py = {
    class: "first-statement"
}
  , Dy = {
    class: "paragraph-two"
}
  , Oy = {
    class: "paragraph-two-statement"
}
  , Ey = {
    class: "paragraph-three"
}
  , qy = {
    class: "paragraph-three-statement"
}
  , jy = {
    class: "svg-container"
}
  , Hy = fi('<div class="first-vector" data-v-a175919f><svg xmlns="http://www.w3.org/2000/svg" width="132" height="14" viewBox="0 0 132 14" fill="none" data-v-a175919f><path fill-rule="evenodd" clip-rule="evenodd" d="M0 6.99997C-2.41411e-08 6.72383 0.223857 6.49997 0.499999 6.49997L119.5 6.49996C119.776 6.49996 120 6.72382 120 6.99996C120 7.27611 119.776 7.49996 119.5 7.49996L0.5 7.49997C0.223858 7.49997 2.41411e-08 7.27612 0 6.99997Z" fill="url(#paint0_linear_22_2052)" data-v-a175919f></path><path d="M119.515 8.41418C118.734 7.63313 118.734 6.3668 119.515 5.58575L123.757 1.34311C124.538 0.562062 125.805 0.562062 126.586 1.34311L130.828 5.58575C131.609 6.3668 131.609 7.63313 130.828 8.41418L126.586 12.6568C125.805 13.4379 124.538 13.4379 123.757 12.6568L119.515 8.41418Z" fill="url(#paint1_linear_22_2052)" data-v-a175919f></path><defs data-v-a175919f><linearGradient id="paint0_linear_22_2052" x1="126" y1="7.00003" x2="-4.8188e-08" y2="7.00003" gradientUnits="userSpaceOnUse" data-v-a175919f><stop stop-color="#5DBA47" data-v-a175919f></stop><stop offset="1" stop-color="#5DBA47" stop-opacity="0" data-v-a175919f></stop></linearGradient><linearGradient id="paint1_linear_22_2052" x1="126" y1="7.00003" x2="-4.8188e-08" y2="7.00003" gradientUnits="userSpaceOnUse" data-v-a175919f><stop stop-color="#5DBA47" data-v-a175919f></stop><stop offset="1" stop-color="#5DBA47" stop-opacity="0" data-v-a175919f></stop></linearGradient></defs></svg></div>', 1)
  , Wy = {
    class: "vector-heading"
}
  , Fy = fi('<div class="vector-two" data-v-a175919f><svg xmlns="http://www.w3.org/2000/svg" width="132" height="14" viewBox="0 0 132 14" fill="none" data-v-a175919f><path fill-rule="evenodd" clip-rule="evenodd" d="M132 6.99997C132 6.72383 131.776 6.49997 131.5 6.49997L12.5 6.49996C12.2239 6.49996 12 6.72382 12 6.99996C12 7.27611 12.2239 7.49996 12.5 7.49996L131.5 7.49997C131.776 7.49997 132 7.27612 132 6.99997Z" fill="url(#paint0_linear_22_2053)" data-v-a175919f></path><path d="M12.4853 8.41418C13.2664 7.63313 13.2664 6.3668 12.4853 5.58575L8.24268 1.34311C7.46163 0.562062 6.1953 0.562062 5.41425 1.34311L1.17162 5.58575C0.390564 6.3668 0.390564 7.63313 1.17162 8.41418L5.41425 12.6568C6.1953 13.4379 7.46163 13.4379 8.24268 12.6568L12.4853 8.41418Z" fill="url(#paint1_linear_22_2053)" data-v-a175919f></path><defs data-v-a175919f><linearGradient id="paint0_linear_22_2053" x1="6.00001" y1="7.00003" x2="132" y2="7.00003" gradientUnits="userSpaceOnUse" data-v-a175919f><stop stop-color="#5DBA47" data-v-a175919f></stop><stop offset="1" stop-color="#5DBA47" stop-opacity="0" data-v-a175919f></stop></linearGradient><linearGradient id="paint1_linear_22_2053" x1="6.00001" y1="7.00003" x2="132" y2="7.00003" gradientUnits="userSpaceOnUse" data-v-a175919f><stop stop-color="#5DBA47" data-v-a175919f></stop><stop offset="1" stop-color="#5DBA47" stop-opacity="0" data-v-a175919f></stop></linearGradient></defs></svg></div>', 1)
  , Vy = {
    class: "details-container-one"
}
  , Uy = {
    class: "details-container-items"
}
  , Ky = {
    class: "first-heading"
}
  , Xy = {
    class: "fontBold"
}
  , Qy = {
    class: "paragraph-inside-container"
}
  , Zy = {
    class: "paragraph-title"
}
  , Yy = {
    class: "paragraph-inside-container"
}
  , Jy = {
    class: "paragraph-title"
}
  , t0 = {
    class: "paragraph-inside-container"
}
  , e0 = {
    class: "paragraph-title"
}
  , i0 = {
    class: "paragraph-inside-container"
}
  , n0 = {
    class: "paragraph-title"
}
  , a0 = {
    class: "details-container-one"
}
  , o0 = {
    class: "details-container-items"
}
  , s0 = {
    class: "first-heading"
}
  , l0 = yn( () => t("span", {
    class: "fontBold"
}, "1,2,3,4,5,6", -1))
  , c0 = {
    class: "paragraph-inside-container"
}
  , r0 = {
    class: "paragraph-title"
}
  , u0 = {
    class: "details-container-one"
}
  , d0 = {
    class: "details-container-items"
}
  , p0 = {
    class: "first-heading"
}
  , g0 = yn( () => t("span", {
    class: "fontBold"
}, "11,22...66", -1))
  , b0 = {
    class: "paragraph-inside-container"
}
  , m0 = {
    class: "paragraph-title"
}
  , _0 = {
    class: "details-container-one"
}
  , v0 = {
    class: "details-container-items"
}
  , k0 = {
    class: "first-heading"
}
  , h0 = yn( () => t("span", {
    class: "fontBold"
}, "111,222...666,***", -1))
  , f0 = {
    class: "paragraph-inside-container"
}
  , y0 = {
    class: "paragraph-title"
}
  , $0 = {
    class: "paragraph-inside-container"
}
  , w0 = {
    class: "paragraph-title"
};
function T0(s, i) {
    return n(),
    a("div", Ay, [t("div", My, [t("p", Py, e(s.$t("binguoRuleText1")), 1)]), $(" ------------------------- First paragraph ends here--------------------------- "), t("div", Dy, [t("p", Oy, e(s.$t("binguoRuleText2")), 1)]), $(" ------------------------- Paragraph two ends here--------------------------- "), t("div", Ey, [t("p", qy, e(s.$t("binguoRuleText3")), 1)]), $(" ------------------------- Paragraph three ends here--------------------------- "), t("div", jy, [Hy, t("div", Wy, e(s.$t("gamePlay")), 1), $(" ------------------------- vector heading ends here--------------------------- "), Fy]), $(" ------------------------- vector two ends here--------------------------- "), $(" ///////////////////////////////////////////////////// First container div starts from here   ///////////////////////////////////////////////////////////////////// "), t("div", Vy, [t("div", Uy, e(s.$t("xosoTxt60")), 1), $(" ------------------------- svg right ends here--------------------------- "), $(" ------------------------- details container heading ends here--------------------------- "), t("div", Ky, [E(e(s.$t("binguoRuleText4")) + " ", 1), t("span", Xy, e(s.$t("binguoRuleText5")), 1), E(e(s.$t("binguoRuleText6")), 1)]), $(" ------------------------- first-heading ends here--------------------------- "), t("div", Qy, [t("div", Zy, [t("span", null, e(s.$t("binguoRuleText7")) + ":", 1), E(e(s.$t("binguoRuleText8")), 1)])]), t("div", Yy, [t("div", Jy, [t("span", null, e(s.$t("binguoRuleText9")) + ":", 1), E(e(s.$t("binguoRuleText10")), 1)])]), t("div", t0, [t("div", e0, [t("span", null, e(s.$t("binguoRuleText17")) + ":", 1), E(e(s.$t("binguoRuleText18")), 1)])]), t("div", i0, [t("div", n0, [t("span", null, e(s.$t("binguoRuleText11")) + ",", 1), E(e(s.$t("binguoRuleText12")), 1)])])]), $(" First container ends here  "), $(" ///////////////////////////////////////////////////// 2nd container div starts from here   ///////////////////////////////////////////////////////////////////// "), t("div", a0, [t("div", o0, e(s.$t("same")), 1), $(" ------------------------- svg right ends here--------------------------- "), $(" ------------------------- details container heading ends here--------------------------- "), t("div", s0, [E(e(s.$t("binguoRuleText4")) + " ", 1), l0]), $(" ------------------------- first-heading ends here--------------------------- "), t("div", c0, [t("div", r0, e(s.$t("binguoRuleText13")), 1)])]), $(" ///////////////////////////////////////////////////// 3rd container div starts from here   ///////////////////////////////////////////////////////////////////// "), t("div", u0, [t("div", d0, e(s.$t("sameNum")), 1), $(" ------------------------- svg right ends here--------------------------- "), $(" ------------------------- details container heading ends here--------------------------- "), t("div", p0, [E(e(s.$t("binguoRuleText4")), 1), g0]), $(" ------------------------- first-heading ends here--------------------------- "), t("div", b0, [t("div", m0, e(s.$t("binguoRuleText14")), 1)])]), $(" ///////////////////////////////////////////////////// 4th container div starts from here   ///////////////////////////////////////////////////////////////////// "), t("div", _0, [t("div", v0, e(s.$t("numbersMatch")), 1), $(" ------------------------- svg right ends here--------------------------- "), $(" ------------------------- details container heading ends here--------------------------- "), t("div", k0, [E(e(s.$t("binguoRuleText4")), 1), h0]), $(" ------------------------- first-heading ends here--------------------------- "), t("div", f0, [t("div", y0, e(s.$t("binguoRuleText15")), 1)]), t("div", $0, [t("div", w0, e(s.$t("binguoRuleText16")), 1)])])])
}
const C0 = V(Gy, [["render", T0], ["__scopeId", "data-v-a175919f"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/AllLotteryGames/Bingo/Rule.vue"]])
  , L0 = s => (Nt("data-v-278561a4"),
s = s(),
zt(),
s)
  , N0 = {
    class: "binguo_container"
}
  , z0 = L0( () => t("span", {
    class: "nav_title"
}, "BINGO18", -1))
  , I0 = {
    class: "nav_right"
}
  , x0 = {
    class: "binguo_btn_group"
}
  , S0 = ["src"]
  , R0 = {
    class: "over_dialog_tip"
}
  , B0 = {
    class: "playerRule"
}
  , G0 = {
    class: "playerRule"
}
  , A0 = {
    style: {
        color: "#fff"
    }
}
  , M0 = F({
    __name: "index",
    setup(s) {
        const {goBack: i, betPopTXT: o, isShowBetMoney: l, handleToggleShwoMoney: g, store: m, overVisble: c, getBinguoConfig: u, getBinguoOddsList: p, playerRuleVisble: r} = ji()
          , b = ct()
          , _ = () => {
            b.push({
                path: "/home/AllLotteryGames/BinguoRecord"
            })
        }
        ;
        return Lt( () => {
            u(),
            p()
        }
        ),
        (w, T) => {
            const N = W("van-icon")
              , v = W("NavBar");
            return n(),
            a("div", N0, [C(v, {
                "left-arrow": "",
                onClickLeft: d(i),
                backgroundColor: "#0a4529"
            }, {
                left: P( () => [C(N, {
                    name: "arrow-left",
                    size: 24
                }), z0]),
                right: P( () => [t("div", I0, [t("div", {
                    onClick: T[0] || (T[0] = ne( () => r.value = !0, ["stop"])),
                    class: "binguo_explain"
                }), t("div", {
                    class: B(["binguo_money", d(l) ? "binguo_money_look" : "binguo_money_hidden"]),
                    onClick: T[1] || (T[1] = ne( () => d(g)(), ["stop"]))
                }, null, 2), t("div", {
                    onClick: T[2] || (T[2] = ne( () => _(), ["stop"])),
                    class: "binguo_count1"
                })])]),
                _: 1
            }, 8, ["onClickLeft"]), t("div", x0, [t("div", {
                class: B(["btn_1", {
                    active_btn: d(m).binguoType === 1
                }]),
                onClick: T[3] || (T[3] = k => d(m).binguoType = 1)
            }, e(w.$t("binguoDesk1")), 3), t("div", {
                class: B(["btn_2", {
                    active_btn: d(m).binguoType === 2
                }]),
                onClick: T[4] || (T[4] = k => d(m).binguoType = 2)
            }, e(w.$t("binguoDesk2")), 3)]), C(hf), C(ly), C(By), C(Re, {
                show: d(c),
                onConfirm: T[5] || (T[5] = k => c.value = !1),
                "show-cancel-btn": !1,
                confirmText: w.$t("confirm")
            }, {
                header: P( () => [t("img", {
                    src: d(Xt)("home/AllLotteryGames/binguo", "binguo_tip"),
                    alt: "",
                    class: "binguo_tip"
                }, null, 8, S0)]),
                content: P( () => [t("div", R0, e(w.$t("over_dialog_tip")), 1)]),
                _: 1
            }, 8, ["show", "confirmText"]), C(Re, {
                class: "rule_dialog",
                show: d(r),
                onConfirm: T[6] || (T[6] = k => r.value = !1),
                "show-cancel-btn": !1,
                isShowHeader: !1,
                confirmText: w.$t("iKonw")
            }, {
                title: P( () => [t("div", null, e(w.$t("binguo_playerRule")), 1)]),
                content: P( () => [t("div", B0, [C(C0)])]),
                _: 1
            }, 8, ["show", "confirmText"]), C(Re, {
                class: "rule_dialog",
                show: d(o),
                onConfirm: T[7] || (T[7] = k => o.value = !1),
                "show-cancel-btn": !1,
                isShowHeader: !1,
                confirmText: w.$t("iKonw")
            }, {
                title: P( () => [t("div", null, e(w.$t("presaleRules")), 1)]),
                content: P( () => [t("div", G0, [t("div", A0, e(w.$t("betPopTXT")), 1)])]),
                _: 1
            }, 8, ["show", "confirmText"])])
        }
    }
});
const P0 = V(M0, [["__scopeId", "data-v-278561a4"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/home/AllLotteryGames/Binguo/index.vue"]])
  , vG = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: P0
}, Symbol.toStringTag, {
    value: "Module"
}))
  , D0 = {
    class: "binguo_count_tab"
}
  , O0 = ["onClick"]
  , E0 = F({
    __name: "BinguoTab",
    setup(s) {
        const {store: i} = Je()
          , {t: o} = gt()
          , l = [{
            lable: o("betting"),
            value: 1
        }, {
            lable: o("detail"),
            value: 2
        }, {
            lable: o("thisWeek"),
            value: 3
        }, {
            lable: o("binguoLeaderboard"),
            value: 4
        }];
        return (g, m) => (n(),
        a("div", D0, [(n(),
        a(S, null, G(l, (c, u) => t("div", {
            class: B(["item", {
                active: d(i).currentTabIndex === u
            }]),
            key: c.value,
            onClick: p => d(i).currentTabIndex = u
        }, e(c.lable), 11, O0)), 64))]))
    }
});
const q0 = V(E0, [["__scopeId", "data-v-44316bfe"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/home/AllLotteryGames/BinguoCount/components/BinguoTab.vue"]])
  , j0 = s => (Nt("data-v-ca8cfc1e"),
s = s(),
zt(),
s)
  , H0 = {
    class: "t-table_border"
}
  , W0 = {
    class: "t-table_th_round"
}
  , F0 = {
    class: "tab_header"
}
  , V0 = {
    key: 0,
    class: "tab_default_cell"
}
  , U0 = {
    class: "tab_default_cell"
}
  , K0 = {
    key: 0
}
  , X0 = {
    key: 0
}
  , Q0 = ["colspan"]
  , Z0 = j0( () => t("div", {
    style: {
        color: "#666",
        "font-size": "14px",
        padding: "6px",
        "text-align": "center"
    }
}, "暂无数据", -1))
  , Y0 = F({
    __name: "index",
    props: {
        dataSource: {
            type: Array,
            required: !0
        },
        columnOptions: {
            type: Array,
            required: !0
        },
        headerClass: {
            type: String,
            required: !1
        },
        bodyClass: {
            type: String,
            required: !1
        },
        isLockHeader: {
            type: Boolean,
            required: !1
        },
        border: {
            type: Boolean,
            required: !1,
            default: !0
        },
        scroll: {
            type: Boolean,
            required: !1,
            default: !0
        },
        borderColor: {
            type: String,
            required: !1,
            default: "#0B462A"
        },
        hBgColor: {
            type: String,
            required: !1,
            default: "linear-gradient(180deg, #0A603E 0%, #168055 100%)"
        },
        hColor: {
            type: String,
            required: !1,
            default: "#F9BC36"
        },
        align: {
            type: String,
            required: !1,
            default: "center"
        },
        rowHeight: {
            type: String,
            required: !1,
            default: "auto"
        },
        rowBgColor: {
            type: String,
            required: !1,
            default: "#09613E"
        },
        tabWidth: {
            type: String,
            required: !1,
            default: "100%"
        },
        tabHeight: {
            type: String,
            required: !1,
            default: "600px"
        }
    },
    setup(s) {
        const i = s;
        Ao(r => ({
            "ca8cfc1e-tabWidth": r.tabWidth,
            "ca8cfc1e-tabHeight": r.tabHeight,
            "ca8cfc1e-rowHeight": d(c),
            "ca8cfc1e-align": d(g),
            "ca8cfc1e-rowBgColor": d(l),
            "ca8cfc1e-hColor": r.hColor,
            "ca8cfc1e-hBgColor": d(m)
        }));
        const o = h([])
          , {rowBgColor: l, align: g, hBgColor: m, rowHeight: c} = i
          , u = () => {
            o.value = JSON.parse(JSON.stringify(i.dataSource))
        }
          , p = () => {
            i.columnOptions.forEach( (r, b) => {
                if (r.isLockColumn) {
                    let _ = document.querySelector(`.th_${r.key}_${b}`)
                      , w = document.querySelectorAll(`.td_${r.key}`);
                    _.style.position = "sticky",
                    _.style.top = "-2px",
                    _.style.left = "0",
                    _.style.zIndex = "11",
                    w.forEach(T => {
                        T.style.position = "sticky",
                        T.style.left = "0",
                        T.style.zIndex = "10"
                    }
                    )
                }
            }
            )
        }
        ;
        return Lt( () => {
            p()
        }
        ),
        At( () => i.dataSource, (r, b) => {
            r !== b && (u(),
            p())
        }
        , {
            deep: !0
        }),
        (r, b) => (n(),
        a("div", {
            class: "cuTable",
            style: le({
                ...r.scroll && {
                    overflowX: "auto"
                },
                ...!r.scroll && {
                    overflow: "hidden"
                }
            })
        }, [t("div", H0, [t("table", W0, [t("tr", F0, [(n(!0),
        a(S, null, G(r.columnOptions, (_, w) => (n(),
        a("th", {
            style: le({
                width: _.width || 100 / r.columnOptions.length + "%"
            }),
            key: w + "p",
            class: B(`th_${_.key}_${w} default_header_cell ${r.border ? "" : "noBorder"}`)
        }, [_.isSlotHeader ? ke(r.$slots, _.key + "_head", {
            key: 1,
            item: _
        }, void 0, !0) : (n(),
        a("div", V0, e(_.title), 1))], 6))), 128))]), (n(!0),
        a(S, null, G(r.dataSource, (_, w) => dt((n(),
        a("tr", {
            class: "tab_body",
            key: w + "p1"
        }, [(n(!0),
        a(S, null, G(r.columnOptions, (T, N) => (n(),
        a("td", {
            key: N + "p2",
            class: B(`td_${T.key} default_cell ${T.cusTdClass || ""} ${r.border ? "" : "noBorder"}`),
            style: le({
                width: T.width
            })
        }, [t("div", U0, [T.isSlot ? $("v-if", !0) : (n(),
        a("span", K0, e(_[T.key]), 1)), ke(r.$slots, T.key, {
            item: _
        }, void 0, !0)])], 6))), 128))])), [[Yt, r.dataSource && r.dataSource.length > 0]])), 128)), r.dataSource.length === 0 ? (n(),
        a("tr", X0, [t("td", {
            colspan: r.columnOptions.length
        }, [ke(r.$slots, "empty", {}, () => [Z0], !0)], 8, Q0)])) : $("v-if", !0)])])], 4))
    }
});
const Qe = V(Y0, [["__scopeId", "data-v-ca8cfc1e"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/table/index.vue"]])
  , J0 = {
    class: "binguo_bet_count"
}
  , t2 = {
    class: "bingtip_count_title"
}
  , e2 = {
    class: "lately"
}
  , i2 = {
    class: "average_column"
}
  , n2 = {
    class: "noaverage_column"
}
  , a2 = {
    class: "average_column"
}
  , o2 = {
    class: "noaverage_column"
}
  , s2 = {
    class: "progress_box"
}
  , l2 = {
    class: "progress"
}
  , c2 = {
    class: "tit"
}
  , r2 = {
    class: "progress"
}
  , u2 = {
    class: "tit"
}
  , d2 = {
    class: "progress"
}
  , p2 = {
    class: "tit"
}
  , g2 = {
    class: "bingtip_count_title"
}
  , b2 = {
    class: "alike_column"
}
  , m2 = {
    class: "big"
}
  , _2 = {
    class: "bingtip_count_title two_title"
}
  , v2 = {
    class: "alike_column"
}
  , k2 = {
    class: "big"
}
  , h2 = F({
    __name: "BinguoBetCount",
    setup(s) {
        const {store: i, filterStyle: o} = Je()
          , {t: l} = gt()
          , g = Q( () => {
            var p, r, b, _;
            return (p = i.smallAndBigTrend) != null && p.bigCount ? ((r = i.smallAndBigTrend) == null ? void 0 : r.bigCount) + ((b = i.smallAndBigTrend) == null ? void 0 : b.smallCount) + ((_ = i.smallAndBigTrend) == null ? void 0 : _.equalCount) : 0
        }
        )
          , m = h([{
            title: l("xosoTxt60"),
            key: "number",
            isSlot: !0,
            cusTdClass: "sum_column"
        }, {
            title: l("binguoAvgCount"),
            key: "avgCount",
            isSlot: !0
        }, {
            title: l("binguoNotOpenCount"),
            key: "notOpenCount",
            isSlot: !0
        }])
          , c = h([{
            title: l("numbersMatch"),
            key: "number",
            isSlot: !0,
            cusTdClass: "sum_column"
        }, {
            title: l("binguoOpenCount"),
            key: "openCount",
            isSlot: !1
        }, {
            title: l("binguoAvgCount"),
            key: "avgCount",
            isSlot: !1
        }, {
            title: l("binguoNotOpenCount"),
            key: "notOpenCount",
            isSlot: !1
        }])
          , u = Q( () => {
            let p = ka(c.value);
            return p[0].title = l("sameNum"),
            p
        }
        );
        return (p, r) => {
            var _, w, T, N, v, k;
            const b = W("van-progress");
            return n(),
            a("div", J0, [t("div", t2, e(p.$t("binguoLastIssue")), 1), t("div", e2, [C(Qe, {
                "column-options": m.value,
                "data-source": d(i).resultSumTrend.slice(0, 8),
                rowHeight: "40px",
                tabWidth: "49.6%",
                tabHeight: "100%",
                border: !1
            }, {
                number: P( ({item: y}) => [t("div", {
                    class: B(`sum_column ${d(o)(y.number)}`)
                }, e(y.number), 3)]),
                avgCount: P( ({item: y}) => [t("div", i2, e(y.avgCount), 1)]),
                notOpenCount: P( ({item: y}) => [t("div", n2, e(y.notOpenCount), 1)]),
                _: 1
            }, 8, ["column-options", "data-source"]), C(Qe, {
                "column-options": m.value,
                "data-source": d(i).resultSumTrend.slice(8, 16),
                rowHeight: "40px",
                tabWidth: "49.6%",
                tabHeight: "100%",
                border: !1
            }, {
                number: P( ({item: y}) => [t("div", {
                    class: B(`sum_column ${d(o)(y.number)}`)
                }, e(y.number), 3)]),
                avgCount: P( ({item: y}) => [t("div", a2, e(y.avgCount), 1)]),
                notOpenCount: P( ({item: y}) => [t("div", o2, e(y.notOpenCount), 1)]),
                _: 1
            }, 8, ["column-options", "data-source"])]), $(" 进度条 "), t("div", s2, [t("div", l2, [t("div", c2, [t("span", null, e(p.$t("small")), 1), t("div", null, [E(e(p.$t("binguoAppeared")), 1), t("span", null, e((_ = d(i).smallAndBigTrend) == null ? void 0 : _.smallCount), 1)])]), C(b, {
                percentage: ((w = d(i).smallAndBigTrend) == null ? void 0 : w.smallCount) / g.value * 100,
                "stroke-width": "10",
                "track-color": "#0A603E",
                color: "#5DBA47"
            }, null, 8, ["percentage"])]), t("div", r2, [t("div", u2, [t("span", null, e(p.$t("binguoHe")), 1), t("div", null, [E(e(p.$t("binguoAppeared")), 1), t("span", null, e((T = d(i).smallAndBigTrend) == null ? void 0 : T.equalCount), 1)])]), C(b, {
                percentage: ((N = d(i).smallAndBigTrend) == null ? void 0 : N.equalCount) / g.value * 100,
                "stroke-width": "10",
                "track-color": "#0A603E",
                color: "#F9BC36"
            }, null, 8, ["percentage"])]), t("div", d2, [t("div", p2, [t("span", null, e(p.$t("k3Big")), 1), t("div", null, [E(e(p.$t("binguoAppeared")), 1), t("span", null, e((v = d(i).smallAndBigTrend) == null ? void 0 : v.bigCount), 1)])]), C(b, {
                percentage: ((k = d(i).smallAndBigTrend) == null ? void 0 : k.bigCount) / g.value * 100,
                "stroke-width": "10",
                "track-color": "#0A603E",
                color: "#5DBA47"
            }, null, 8, ["percentage"])])]), t("div", g2, e(p.$t("binguoThirdAlike")), 1), C(Qe, {
                "column-options": c.value,
                "data-source": d(i).threeSameTrend,
                rowHeight: "40px",
                tabWidth: "100%",
                tabHeight: "100%",
                border: !1,
                class: "binguoCountTable"
            }, {
                number: P( ({item: y}) => [t("div", b2, [(n(!0),
                a(S, null, G((y.number + "").split(""), f => (n(),
                a("div", m2, e(f), 1))), 256))])]),
                _: 1
            }, 8, ["column-options", "data-source"]), t("div", _2, e(p.$t("binguoTwoAlike")), 1), C(Qe, {
                "column-options": u.value,
                "data-source": d(i).twoSameTrend,
                rowHeight: "40px",
                tabWidth: "100%",
                tabHeight: "100%",
                border: !1,
                class: "binguoCountTable"
            }, {
                number: P( ({item: y}) => [t("div", v2, [(n(!0),
                a(S, null, G((y.number + "").split(""), f => (n(),
                a("div", k2, e(f), 1))), 256))])]),
                _: 1
            }, 8, ["column-options", "data-source"])])
        }
    }
});
const f2 = V(h2, [["__scopeId", "data-v-cd38c622"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/home/AllLotteryGames/BinguoCount/components/BinguoBetCount.vue"]])
  , bi = s => (Nt("data-v-f03aed68"),
s = s(),
zt(),
s)
  , y2 = {
    class: "binguo_detail"
}
  , $2 = {
    class: "bingtip_count_title"
}
  , w2 = {
    class: "result1"
}
  , T2 = {
    class: "column_list"
}
  , C2 = {
    class: "bingtip_count_title"
}
  , L2 = {
    class: "record_list"
}
  , N2 = {
    class: "record_item"
}
  , z2 = {
    class: "item"
}
  , I2 = {
    key: 1
}
  , x2 = {
    class: "bingtip_count_title"
}
  , S2 = {
    class: "issueNo_head"
}
  , R2 = {
    class: "issue_text"
}
  , B2 = {
    class: "issue_number"
}
  , G2 = bi( () => t("div", {
    class: "ball"
}, "1", -1))
  , A2 = bi( () => t("div", {
    class: "ball"
}, "2", -1))
  , M2 = bi( () => t("div", {
    class: "ball"
}, "3", -1))
  , P2 = bi( () => t("div", {
    class: "ball"
}, "4", -1))
  , D2 = bi( () => t("div", {
    class: "ball"
}, "5", -1))
  , O2 = bi( () => t("div", {
    class: "ball"
}, "6", -1))
  , E2 = {
    class: "issueNo_column"
}
  , q2 = F({
    __name: "BinguoDetail",
    setup(s) {
        const {t: i} = gt()
          , o = h([{
            title: i("betNumber"),
            key: "issueNo",
            isSlotHeader: !0,
            isSlot: !0,
            width: "28%"
        }, {
            title: "1",
            key: "num1",
            isSlotHeader: !0,
            isSlot: !0,
            width: "10%"
        }, {
            title: "2",
            key: "num2",
            isSlotHeader: !0,
            isSlot: !0,
            width: "10%"
        }, {
            title: "3",
            key: "num3",
            isSlotHeader: !0,
            isSlot: !0,
            width: "10%"
        }, {
            title: "4",
            key: "num4",
            isSlotHeader: !0,
            isSlot: !0,
            width: "10%"
        }, {
            title: "5",
            key: "num5",
            isSlotHeader: !0,
            isSlot: !0,
            width: "10%"
        }, {
            title: "6",
            key: "num6",
            isSlotHeader: !0,
            isSlot: !0,
            width: "10%"
        }, {
            title: i("gameRecordTotal"),
            key: "sum",
            isSlot: !0,
            width: "10%"
        }])
          , {filterStyle: l, last50Result: g, last50Record: m, last50RecordResult: c} = Je();
        return (u, p) => (n(),
        a("div", y2, [t("div", $2, e(u.$t("binguoLast50")), 1), t("div", w2, [(n(!0),
        a(S, null, G(d(g), r => (n(),
        a("div", T2, [(n(!0),
        a(S, null, G(r, b => (n(),
        a("div", {
            class: B(`item ${d(l)(b)}`)
        }, e(b), 3))), 256))]))), 256))]), t("div", C2, e(u.$t("binguoLast50Record")), 1), t("div", L2, [(n(!0),
        a(S, null, G(d(m), r => (n(),
        a("div", N2, [(n(!0),
        a(S, null, G(r, b => (n(),
        a("div", z2, [b ? (n(),
        a("div", {
            key: 0,
            class: B(`${d(l)(b)}`)
        }, e(b), 3)) : (n(),
        a("div", I2))]))), 256))]))), 256))]), t("div", x2, e(u.$t("binguoRecordResult")), 1), C(Qe, {
            "column-options": o.value,
            "data-source": d(c),
            rowHeight: "30px",
            tabWidth: "100%",
            hBgColor: "linear-gradient(180deg, #0A603E 0%, #168055 100%)",
            tabHeight: "100%",
            border: !0,
            hColor: "#FFF880"
        }, {
            issueNo_head: P( () => [t("div", S2, [t("span", R2, e(u.$t("betNumber")), 1), t("span", B2, e(u.$t("binguoNumber")), 1)])]),
            num1_head: P( () => [G2]),
            num2_head: P( () => [A2]),
            num3_head: P( () => [M2]),
            num4_head: P( () => [P2]),
            num5_head: P( () => [D2]),
            num6_head: P( () => [O2]),
            issueNo: P( ({item: r}) => [t("div", E2, e(r.issueNo), 1)]),
            sum: P( ({item: r}) => [t("div", {
                class: B(`sum_column ${d(l)(r.sum)}`)
            }, e(r.sum), 3)]),
            num1: P( ({item: r}) => [t("div", {
                class: B(`num_column num_column${r.num1}`)
            }, [(n(!0),
            a(S, null, G(r.num1, () => (n(),
            a("div"))), 256))], 2)]),
            num2: P( ({item: r}) => [t("div", {
                class: B(`num_column num_column${r.num2}`)
            }, [(n(!0),
            a(S, null, G(r.num2, () => (n(),
            a("div"))), 256))], 2)]),
            num3: P( ({item: r}) => [t("div", {
                class: B(`num_column num_column${r.num3}`)
            }, [(n(!0),
            a(S, null, G(r.num3, () => (n(),
            a("div"))), 256))], 2)]),
            num4: P( ({item: r}) => [t("div", {
                class: B(`num_column num_column${r.num4}`)
            }, [(n(!0),
            a(S, null, G(r.num4, () => (n(),
            a("div"))), 256))], 2)]),
            num5: P( ({item: r}) => [t("div", {
                class: B(`num_column num_column${r.num5}`)
            }, [(n(!0),
            a(S, null, G(r.num5, () => (n(),
            a("div"))), 256))], 2)]),
            num6: P( ({item: r}) => [t("div", {
                class: B(`num_column num_column${r.num6}`)
            }, [(n(!0),
            a(S, null, G(r.num6, () => (n(),
            a("div"))), 256))], 2)]),
            _: 1
        }, 8, ["column-options", "data-source"])]))
    }
});
const j2 = V(q2, [["__scopeId", "data-v-f03aed68"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/home/AllLotteryGames/BinguoCount/components/BinguoDetail.vue"]])
  , $n = s => (Nt("data-v-ec5b8d89"),
s = s(),
zt(),
s)
  , H2 = {
    class: "trend_container"
}
  , W2 = {
    class: "trend_header"
}
  , F2 = {
    class: "trend_header_title"
}
  , V2 = $n( () => t("span", null, "7", -1))
  , U2 = $n( () => t("br", null, null, -1))
  , K2 = $n( () => t("span", null, "100", -1))
  , X2 = ["src"]
  , Q2 = ["src"]
  , Z2 = {
    class: "trend_table"
}
  , Y2 = {
    class: "trend_tip"
}
  , J2 = {
    class: "tip_text"
}
  , t3 = {
    key: 0
}
  , e3 = {
    key: 0
}
  , i3 = {
    class: "custom_column"
}
  , n3 = {
    class: "custom_column winmount_column"
}
  , a3 = F({
    __name: "BinguoTrend",
    setup(s) {
        const {store: i} = Je()
          , {t: o} = gt()
          , l = h([{
            title: "Top",
            key: "rankID",
            isSlot: !0,
            width: "20%",
            cusTdClass: "rankID_column"
        }, {
            title: o("account"),
            key: "userName",
            width: "38%",
            isSlot: !0
        }, {
            title: o("winningAmount"),
            width: "42%",
            key: "winAmount",
            isSlot: !0
        }])
          , g = ct()
          , m = () => {
            i.isTrend || g.back()
        }
        ;
        return (c, u) => (n(),
        a("div", H2, [t("div", W2, [t("div", F2, [E(e(c.$t("binguoLately")), 1), V2, E(e(c.$t("days")), 1), U2, E(" " + e(c.$t("binguoQian")), 1), K2, E(e(c.$t("binguoMin") + c.$t("binguoPaimin")), 1)]), t("img", {
            src: d(Xt)("home/AllLotteryGames/binguo", "trend1"),
            class: "trend1",
            alt: ""
        }, null, 8, X2), t("img", {
            src: d(Xt)("home/AllLotteryGames/binguo", "trend2"),
            class: "trend2",
            alt: ""
        }, null, 8, Q2)]), t("div", Z2, [t("div", Y2, [t("div", J2, [E(e(d(i).isTrend ? c.$t("binguoMyLead") : c.$t("binguoNotBoard")) + " ", 1), d(i).isTrend ? $("v-if", !0) : (n(),
        a("br", t3)), E(" " + e(d(i).isTrend ? "" : c.$t("binguoGoPlay")), 1)]), t("div", {
            class: "trend_go",
            onClick: m
        }, [E(e(d(i).isTrend ? d(i).userRank : "GO") + " ", 1), d(i).isTrend ? (n(),
        a("span", e3, e(c.$t("binguoMin")), 1)) : $("v-if", !0)])]), C(Qe, {
            "column-options": l.value,
            "data-source": d(i).trendList,
            rowHeight: "50px",
            tabWidth: "100%",
            hBgColor: "linear-gradient(180deg, #13AB62 0%, #0F6946 100%)",
            tabHeight: "100%",
            border: !1,
            hColor: "#FFF880"
        }, {
            rankID: P( ({item: p}) => [t("div", {
                class: B(["rankID_column", `${p.rankID < 4 ? "top_" + p.rankID : "rank_text"}`])
            }, e(p.rankID > 3 ? p.rankID : ""), 3)]),
            userName: P( ({item: p}) => [t("div", i3, e(p.userName), 1)]),
            winAmount: P( ({item: p}) => [t("div", n3, e(d(Ct)(p.winAmount)), 1)]),
            _: 1
        }, 8, ["column-options", "data-source"])])]))
    }
});
const o3 = V(a3, [["__scopeId", "data-v-ec5b8d89"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/home/AllLotteryGames/BinguoCount/components/BinguoTrend.vue"]])
  , s3 = {
    class: "last7Day_container"
}
  , l3 = {
    class: "bingtip_count_title"
}
  , c3 = {
    class: "column_time"
}
  , r3 = {
    key: 0,
    class: "result"
}
  , u3 = {
    class: "quan"
}
  , d3 = {
    key: 0,
    class: "result"
}
  , p3 = {
    class: "quan"
}
  , g3 = {
    key: 0,
    class: "result"
}
  , b3 = {
    class: "quan"
}
  , m3 = {
    key: 0,
    class: "result"
}
  , _3 = {
    class: "quan"
}
  , v3 = {
    key: 0,
    class: "result"
}
  , k3 = {
    class: "quan"
}
  , h3 = {
    key: 0,
    class: "result"
}
  , f3 = {
    class: "quan"
}
  , y3 = {
    key: 0,
    class: "result"
}
  , $3 = {
    class: "quan"
}
  , w3 = F({
    __name: "BinguoLast7Day",
    setup(s) {
        const {store: i, columnOptions: o, filterStyle: l} = Je();
        return (g, m) => (n(),
        a("div", s3, [t("div", l3, e(g.$t("binguoLast7Result")), 1), C(Qe, {
            "column-options": d(o),
            "data-source": d(i).last7Day,
            rowHeight: "40px",
            "tab-height": "1200px"
        }, {
            issueEndTime: P( ({item: c}) => [t("div", c3, e(c.issueEndTime), 1)]),
            time_index_0: P( ({item: c}) => {
                var u, p, r;
                return [c.time_index_0 ? (n(),
                a("div", r3, [t("div", u3, [(n(!0),
                a(S, null, G((u = c.time_index_0) == null ? void 0 : u.result.split(""), b => (n(),
                a("div", null, e(b), 1))), 256))]), t("div", {
                    class: B(["result_sum", d(l)((p = c.time_index_0) == null ? void 0 : p.resultSum)])
                }, e((r = c.time_index_0) == null ? void 0 : r.resultSum), 3)])) : $("v-if", !0)]
            }
            ),
            time_index_1: P( ({item: c}) => {
                var u, p, r;
                return [c.time_index_1 ? (n(),
                a("div", d3, [t("div", p3, [(n(!0),
                a(S, null, G((u = c.time_index_1) == null ? void 0 : u.result.split(""), b => (n(),
                a("div", null, e(b), 1))), 256))]), t("div", {
                    class: B(["result_sum", d(l)((p = c.time_index_1) == null ? void 0 : p.resultSum)])
                }, e((r = c.time_index_1) == null ? void 0 : r.resultSum), 3)])) : $("v-if", !0)]
            }
            ),
            time_index_2: P( ({item: c}) => {
                var u, p, r;
                return [c.time_index_2 ? (n(),
                a("div", g3, [t("div", b3, [(n(!0),
                a(S, null, G((u = c.time_index_2) == null ? void 0 : u.result.split(""), b => (n(),
                a("div", null, e(b), 1))), 256))]), t("div", {
                    class: B(["result_sum", d(l)((p = c.time_index_2) == null ? void 0 : p.resultSum)])
                }, e((r = c.time_index_2) == null ? void 0 : r.resultSum), 3)])) : $("v-if", !0)]
            }
            ),
            time_index_3: P( ({item: c}) => {
                var u, p, r;
                return [c.time_index_3 ? (n(),
                a("div", m3, [t("div", _3, [(n(!0),
                a(S, null, G((u = c.time_index_3) == null ? void 0 : u.result.split(""), b => (n(),
                a("div", null, e(b), 1))), 256))]), t("div", {
                    class: B(["result_sum", d(l)((p = c.time_index_3) == null ? void 0 : p.resultSum)])
                }, e((r = c.time_index_3) == null ? void 0 : r.resultSum), 3)])) : $("v-if", !0)]
            }
            ),
            time_index_4: P( ({item: c}) => {
                var u, p, r;
                return [c.time_index_4 ? (n(),
                a("div", v3, [t("div", k3, [(n(!0),
                a(S, null, G((u = c.time_index_4) == null ? void 0 : u.result.split(""), b => (n(),
                a("div", null, e(b), 1))), 256))]), t("div", {
                    class: B(["result_sum", d(l)((p = c.time_index_4) == null ? void 0 : p.resultSum)])
                }, e((r = c.time_index_4) == null ? void 0 : r.resultSum), 3)])) : $("v-if", !0)]
            }
            ),
            time_index_5: P( ({item: c}) => {
                var u, p, r;
                return [c.time_index_5 ? (n(),
                a("div", h3, [t("div", f3, [(n(!0),
                a(S, null, G((u = c.time_index_5) == null ? void 0 : u.result.split(""), b => (n(),
                a("div", null, e(b), 1))), 256))]), t("div", {
                    class: B(["result_sum", d(l)((p = c.time_index_5) == null ? void 0 : p.resultSum)])
                }, e((r = c.time_index_5) == null ? void 0 : r.resultSum), 3)])) : $("v-if", !0)]
            }
            ),
            time_index_6: P( ({item: c}) => {
                var u, p, r;
                return [c.time_index_6 ? (n(),
                a("div", y3, [t("div", $3, [(n(!0),
                a(S, null, G((u = c.time_index_6) == null ? void 0 : u.result.split(""), b => (n(),
                a("div", null, e(b), 1))), 256))]), t("div", {
                    class: B(["result_sum", d(l)((p = c.time_index_6) == null ? void 0 : p.resultSum)])
                }, e((r = c.time_index_6) == null ? void 0 : r.resultSum), 3)])) : $("v-if", !0)]
            }
            ),
            _: 1
        }, 8, ["column-options", "data-source"])]))
    }
});
const T3 = V(w3, [["__scopeId", "data-v-177bff59"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/home/AllLotteryGames/BinguoCount/components/BinguoLast7Day.vue"]])
  , C3 = {
    class: "binguo_count"
}
  , L3 = F({
    __name: "index",
    setup(s) {
        const {store: i, getTrendstatistics: o, getLotteryRankList: l, getLotteryResult7Day: g, getBingo18Last50Result: m} = Je()
          , c = ct()
          , u = () => {
            c.back()
        }
        ;
        return At( () => i.currentTabIndex, p => {
            switch (p) {
            case 0:
                o();
                break;
            case 1:
                m();
                break;
            case 2:
                g();
                break;
            case 3:
                l();
                break
            }
        }
        , {
            immediate: !0
        }),
        (p, r) => {
            const b = W("NavBar");
            return n(),
            a("div", C3, [C(b, {
                "left-arrow": "",
                onClickLeft: u,
                backgroundColor: "#0a4529",
                title: `${p.$t("binguoCount")}`
            }, null, 8, ["title"]), C(q0), d(i).currentTabIndex === 0 ? (n(),
            J(f2, {
                key: 0
            })) : $("v-if", !0), d(i).currentTabIndex === 1 ? (n(),
            J(j2, {
                key: 1
            })) : $("v-if", !0), d(i).currentTabIndex === 2 ? (n(),
            J(T3, {
                key: 2
            })) : $("v-if", !0), d(i).currentTabIndex === 3 ? (n(),
            J(o3, {
                key: 3
            })) : $("v-if", !0)])
        }
    }
});
const N3 = V(L3, [["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/home/AllLotteryGames/BinguoCount/index.vue"]])
  , kG = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: N3
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Hi = s => (Nt("data-v-8073d5d0"),
s = s(),
zt(),
s)
  , z3 = {
    class: "body-container"
}
  , I3 = {
    class: "MyGameRecordList__C"
}
  , x3 = ["onClick"]
  , S3 = {
    class: "MyGameRecordList__C_left"
}
  , R3 = {
    class: "MyGameRecordList__C-item-m"
}
  , B3 = {
    class: "MyGameRecordList__C-item-m-top"
}
  , G3 = {
    class: "MyGameRecordList__C-item-m-bottom"
}
  , A3 = {
    key: 0
}
  , M3 = {
    key: 0,
    class: "MyGameRecordList__C-detail"
}
  , P3 = {
    class: "detail_title"
}
  , D3 = {
    class: "detail_item"
}
  , O3 = {
    class: "item_title"
}
  , E3 = {
    class: "item_result"
}
  , q3 = ["onClick"]
  , j3 = Hi( () => t("path", {
    d: "M6.5 6.2158V3.90625C6.5 3.1296 7.1296 2.5 7.90625 2.5H20.0938C20.8704 2.5 21.5 3.1296 21.5 3.90625V16.0938C21.5 16.8704 20.8704 17.5 20.0938 17.5H17.7582",
    stroke: "#87C7AF",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}, null, -1))
  , H3 = Hi( () => t("path", {
    d: "M16.0938 6.5H3.90625C3.1296 6.5 2.5 7.1296 2.5 7.90625V20.0938C2.5 20.8704 3.1296 21.5 3.90625 21.5H16.0938C16.8704 21.5 17.5 20.8704 17.5 20.0938V7.90625C17.5 7.1296 16.8704 6.5 16.0938 6.5Z",
    fill: "#87C7AF",
    stroke: "#87C7AF",
    "stroke-width": "2",
    "stroke-linejoin": "round"
}, null, -1))
  , W3 = [j3, H3]
  , F3 = {
    class: "detail_item"
}
  , V3 = {
    class: "item_title"
}
  , U3 = {
    class: "item_result"
}
  , K3 = ["onClick"]
  , X3 = Hi( () => t("path", {
    d: "M6.5 6.2158V3.90625C6.5 3.1296 7.1296 2.5 7.90625 2.5H20.0938C20.8704 2.5 21.5 3.1296 21.5 3.90625V16.0938C21.5 16.8704 20.8704 17.5 20.0938 17.5H17.7582",
    stroke: "#87C7AF",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}, null, -1))
  , Q3 = Hi( () => t("path", {
    d: "M16.0938 6.5H3.90625C3.1296 6.5 2.5 7.1296 2.5 7.90625V20.0938C2.5 20.8704 3.1296 21.5 3.90625 21.5H16.0938C16.8704 21.5 17.5 20.8704 17.5 20.0938V7.90625C17.5 7.1296 16.8704 6.5 16.0938 6.5Z",
    fill: "#87C7AF",
    stroke: "#87C7AF",
    "stroke-width": "2",
    "stroke-linejoin": "round"
}, null, -1))
  , Z3 = [X3, Q3]
  , Y3 = {
    class: "detail_item"
}
  , J3 = {
    class: "item_title"
}
  , t5 = {
    class: "item_result"
}
  , e5 = {
    class: "detail_item"
}
  , i5 = {
    class: "item_title"
}
  , n5 = {
    class: "item_result"
}
  , a5 = {
    class: "detail_item"
}
  , o5 = {
    class: "item_title"
}
  , s5 = {
    class: "item_result"
}
  , l5 = {
    class: "detail_item"
}
  , c5 = {
    class: "item_title"
}
  , r5 = {
    class: "item_result"
}
  , u5 = {
    class: "detail_item"
}
  , d5 = {
    class: "item_title"
}
  , p5 = {
    class: "item_result"
}
  , g5 = {
    class: "detail_item"
}
  , b5 = {
    class: "item_title"
}
  , m5 = {
    class: "item_result"
}
  , _5 = {
    class: "draw_result"
}
  , v5 = {
    class: "detail_item"
}
  , k5 = {
    class: "item_title"
}
  , h5 = {
    key: 1,
    class: "item_result"
}
  , f5 = {
    class: "detail_item"
}
  , y5 = {
    class: "item_title"
}
  , $5 = {
    class: "detail_item"
}
  , w5 = {
    class: "item_title"
}
  , T5 = {
    class: "item_result"
}
  , C5 = {
    class: "detail_item"
}
  , L5 = {
    class: "item_title"
}
  , N5 = {
    class: "item_result"
}
  , z5 = F({
    __name: "RecordList",
    props: {
        mayrecord: {
            type: Array,
            required: !0
        }
    },
    setup(s) {
        const {t: i} = gt()
          , {filterGameType: o} = Je()
          , l = h(-1)
          , g = u => {
            l.value == u ? l.value = -1 : l.value = u
        }
          , m = (u, p) => {
            if (p == 1)
                switch (u) {
                case 0:
                    return i("bettingResultState3");
                case 1:
                    return i("hasWon");
                case 2:
                    return i("bettingResultState1");
                case 3:
                    return i("xosoTxt76");
                default:
                    return ""
                }
            else
                switch (u) {
                case 0:
                    return "fail";
                case 1:
                    return "success";
                case 2:
                    return "wait";
                case 3:
                    return "ing";
                default:
                    return "ing"
                }
        }
          , c = u => {
            switch (u) {
            case "Big":
                return i("big");
            case "Drawn":
                return i("binguoHe");
            case "Small":
                return i("small");
            default:
                return u
            }
        }
        ;
        return (u, p) => (n(),
        a("div", z3, [t("div", I3, [(n(!0),
        a(S, null, G(u.mayrecord, (r, b) => (n(),
        a(S, {
            key: b
        }, [t("div", {
            class: "MyGameRecordList__C-item",
            onClick: _ => g(b)
        }, [t("div", {
            class: B(["MyGameRecordList__C-item-l", d(o)(Number(r.gameType), r.selectType).className])
        }, e(c(r.selectType)), 3), t("div", S3, [t("div", R3, [t("div", B3, e(r.issueNumber), 1), t("div", G3, e(r.addTime), 1)]), t("div", {
            class: B(["MyGameRecordList__C-item-r", m(r.state, 2)])
        }, [t("div", {
            class: B(m(r.state, 2))
        }, e(m(r.state, 1)), 3), r.premium ? (n(),
        a("span", A3, e(d(Ct)(r.profitAmount)), 1)) : $("v-if", !0)], 2)])], 8, x3), b == l.value ? (n(),
        a("div", M3, [t("div", P3, e(u.$t("details")), 1), t("div", D3, [t("div", O3, e(u.$t("orderNoMay")), 1), t("div", E3, [E(e(r.orderNumber) + " ", 1), (n(),
        a("svg", {
            onClick: _ => d(Fe)(r.orderNumber),
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none"
        }, W3, 8, q3))])]), t("div", F3, [t("div", V3, e(u.$t("issueMay")), 1), t("div", U3, [E(e(r.issueNumber) + " ", 1), (n(),
        a("svg", {
            onClick: _ => d(Fe)(r.issueNumber),
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none"
        }, Z3, 8, K3))])]), t("div", Y3, [t("div", J3, e(u.$t("gamePlay")), 1), t("div", t5, e(d(o)(Number(r.gameType), r.selectType).playerName), 1)]), t("div", e5, [t("div", i5, e(u.$t("amountMay")), 1), t("div", n5, e(r.amount), 1)]), t("div", a5, [t("div", o5, e(u.$t("multiple")), 1), t("div", s5, e(r.figure), 1)]), t("div", l5, [t("div", c5, e(u.$t("afterTaxAmount")), 1), t("div", r5, e(r.realAmount), 1)]), t("div", u5, [t("div", d5, e(u.$t("tax")), 1), t("div", p5, e(r.serviceCharge || "-"), 1)]), t("div", g5, [t("div", b5, e(u.$t("winTips3")), 1), t("div", m5, [t("div", {
            class: B(["draw_num", `${r.sumCount ? d(o)(Number(r.gameType), r.selectType).className : ""}`])
        }, e(r.sumCount || "-"), 3), r.premium ? (n(!0),
        a(S, {
            key: 0
        }, G(r.premium.split(""), _ => (n(),
        a("div", _5, e(_), 1))), 256)) : $("v-if", !0)])]), t("div", v5, [t("div", k5, e(u.$t("betting")), 1), r.gameType === "2" || r.gameType === "1" ? (n(),
        a("div", {
            key: 0,
            class: B(["item_result item_bet", `${d(o)(Number(r.gameType), r.selectType).className}`])
        }, e(r.selectType), 3)) : (n(),
        a("div", h5, [(n(!0),
        a(S, null, G(r.selectType.split(""), _ => (n(),
        a("div", {
            class: B(["item_result item_bet item_alike", `${d(o)(Number(r.gameType), r.selectType).className}`])
        }, e(_), 3))), 256))]))]), t("div", f5, [t("div", y5, e(u.$t("statusMay")), 1), t("div", {
            class: B(["item_result", m(r.state, 2)])
        }, e(m(r.state, 1)), 3)]), t("div", $5, [t("div", w5, e(u.$t("winOrLose")), 1), t("div", T5, e(r.profitAmount ? d(Ct)(r.profitAmount) : "-"), 1)]), t("div", C5, [t("div", L5, e(u.$t("createTime")), 1), t("div", N5, e(r.addTime), 1)])])) : $("v-if", !0)], 64))), 128))])]))
    }
});
const I5 = V(z5, [["__scopeId", "data-v-8073d5d0"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/AllLotteryGames/Bingo/RecordList.vue"]])
  , x5 = {
    class: "record-container"
}
  , S5 = {
    class: "WinTrx__C-head-more"
}
  , R5 = F({
    __name: "index",
    setup(s) {
        const i = ct()
          , o = () => {
            i.back()
        }
          , l = h([])
          , g = h({
            pageSize: 20
        })
          , m = () => {}
          , c = () => {}
          , u = h("");
        return (p, r) => {
            const b = W("NavBar");
            return n(),
            a("div", x5, [C(b, {
                "left-arrow": "",
                onClickLeft: o,
                "background-color": "#0a4529",
                title: p.$t("xosoTxt73")
            }, {
                right: P( () => [t("div", S5, [t("div", {
                    onClick: r[0] || (r[0] = _ => m())
                }), t("div", {
                    class: B({
                        disableVoice: u.value == "2"
                    }),
                    onClick: c
                }, null, 2)])]),
                _: 1
            }, 8, ["title"]), C(ua, {
                list: l.value,
                "onUpdate:list": r[1] || (r[1] = _ => l.value = _),
                pageQuery: g.value,
                "onUpdate:pageQuery": r[2] || (r[2] = _ => g.value = _),
                api: d(ud),
                distance: 100,
                ref: "listRef",
                isAutoLoad: !0
            }, {
                content: P( () => [C(I5, {
                    mayrecord: l.value
                }, null, 8, ["mayrecord"])]),
                _: 1
            }, 8, ["list", "pageQuery", "api"])])
        }
    }
});
const B5 = V(R5, [["__scopeId", "data-v-5e0daa42"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/home/AllLotteryGames/BinguoRecord/index.vue"]])
  , hG = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: B5
}, Symbol.toStringTag, {
    value: "Module"
}))
  , G5 = s => (Nt("data-v-6c7a1db6"),
s = s(),
zt(),
s)
  , A5 = {
    class: "Betting__Popup"
}
  , M5 = {
    class: "Betting__Popup-head"
}
  , P5 = {
    class: "Betting__Popup-head-title"
}
  , D5 = {
    class: "Betting__Popup-head-selectName"
}
  , O5 = {
    class: "Betting__Popup-body"
}
  , E5 = {
    class: "Betting__Popup-body-line"
}
  , q5 = {
    class: "Betting__Popup-body-line-list"
}
  , j5 = ["onClick"]
  , H5 = {
    class: "Betting__Popup-body-line"
}
  , W5 = {
    class: "Betting__Popup-body-line-btnL"
}
  , F5 = {
    class: "Betting__Popup-body-line"
}
  , V5 = G5( () => t("div", null, null, -1))
  , U5 = {
    class: "Betting__Popup-body-line-list"
}
  , K5 = ["onClick"]
  , X5 = {
    class: "Betting__Popup-body-line"
}
  , Q5 = {
    class: "Betting__Popup-foot"
}
  , Z5 = {
    class: "Betting__Popup-foot-s bgcolor"
}
  , Y5 = {
    class: "Betting__Popup-PreSale"
}
  , J5 = {
    class: "Betting__Popup-PreSale-head"
}
  , t$ = {
    class: "Betting__Popup-PreSale-body"
}
  , e$ = {
    class: "Betting__Popup-PreSale-foot"
}
  , i$ = F({
    __name: "BettingPopup",
    props: {
        selectInfo: {
            type: Object,
            default: () => ({})
        },
        bettingPopupShow: {
            type: Boolean,
            default: h(!1)
        },
        actionItem: {
            type: Object,
            default: () => ({})
        }
    },
    emits: ["update:bettingPopupShow", "update:selectInfo", "clearBetting", "submitBetting"],
    setup(s, {emit: i}) {
        const o = s
          , {t: l} = gt()
          , g = h(!1)
          , m = h(!0)
          , c = Q( () => o.actionItem.scopeList || [])
          , u = h([1, 5, 10, 20, 50, 100])
          , p = Q({
            get() {
                return o.bettingPopupShow || !1
            },
            set(k) {
                i("update:bettingPopupShow", k)
            }
        })
          , r = k => {
            switch (k) {
            case 1:
                o.selectInfo.count > 1 && (o.selectInfo.count--,
                v());
                break;
            case 2:
                o.selectInfo.count++,
                v();
                break
            }
        }
          , b = k => {
            k > 0 && (o.selectInfo.count = parseInt(k),
            v())
        }
          , _ = k => {
            o.selectInfo.count = k,
            v()
        }
          , w = k => {
            o.selectInfo.coin = k,
            v()
        }
          , T = () => {
            g.value = !1,
            m.value = !0
        }
          , N = () => {
            m.value ? i("submitBetting") : he(l("agreePresaleRules"))
        }
          , v = () => {
            o.selectInfo.allCoin = o.selectInfo.coin * o.selectInfo.count
        }
        ;
        return (k, y) => {
            const f = W("van-field")
              , z = W("van-popup")
              , L = Dt("throttle-click");
            return n(),
            a(S, null, [$(" 投注内容 begin "), C(z, {
                show: p.value,
                "onUpdate:show": y[6] || (y[6] = x => p.value = x),
                position: "bottom",
                round: !0,
                "close-on-click-overlay": !1
            }, {
                default: P( () => [t("div", A5, [t("div", M5, [t("div", P5, e(s.actionItem.lotteryName), 1), t("div", D5, [t("span", null, e(d(l)("choose")), 1), t("span", null, e(s.selectInfo.selectCon), 1)])]), t("div", O5, [t("div", E5, [E(e(d(l)("amount")) + " ", 1), t("div", q5, [(n(!0),
                a(S, null, G(c.value, (x, I) => (n(),
                a("div", {
                    key: I,
                    class: B(["Betting__Popup-body-line-item", {
                        bgcolor: s.selectInfo.coin == x
                    }]),
                    onClick: R => w(x)
                }, e(x), 11, j5))), 128))])]), t("div", H5, [E(e(d(l)("numbers")) + " ", 1), t("div", W5, [t("div", {
                    class: B(["Betting__Popup-btn", {
                        bgcolor: s.selectInfo.count > 0
                    }]),
                    onClick: y[0] || (y[0] = x => r(1))
                }, "-", 2), C(f, {
                    class: "Betting__Popup-input",
                    modelValue: s.selectInfo.count,
                    "onUpdate:modelValue": y[1] || (y[1] = x => s.selectInfo.count = x),
                    type: "digit",
                    maxlength: 4,
                    onInput: b
                }, null, 8, ["modelValue"]), t("div", {
                    class: "Betting__Popup-btn bgcolor",
                    onClick: y[2] || (y[2] = x => r(2))
                }, "+")])]), t("div", F5, [V5, t("div", U5, [(n(!0),
                a(S, null, G(u.value, (x, I) => (n(),
                a("div", {
                    key: I,
                    class: B(["Betting__Popup-body-line-item", {
                        bgcolor: s.selectInfo.count == x
                    }]),
                    onClick: R => _(x)
                }, " X" + e(x), 11, K5))), 128))])]), t("div", X5, [t("span", {
                    class: B(["Betting__Popup-agree", {
                        active: m.value
                    }]),
                    onClick: y[3] || (y[3] = x => m.value = !m.value)
                }, e(d(l)("agree")), 3), t("span", {
                    onClick: y[4] || (y[4] = x => g.value = !0),
                    class: "Betting__Popup-preSaleShow"
                }, e(d(l)("presaleRules")), 1)])]), t("div", Q5, [t("div", {
                    class: "Betting__Popup-foot-c",
                    onClick: y[5] || (y[5] = x => i("clearBetting"))
                }, e(d(l)("cancel")), 1), dt((n(),
                a("div", Z5, [E(e(d(l)("totalAmount")) + " " + e(d(Ct)(s.selectInfo.count * s.selectInfo.coin || 0)), 1)])), [[L, {
                    handler: N,
                    wait: 2e3
                }]])])])]),
                _: 1
            }, 8, ["show"]), $(" 规则弹层 begin"), C(z, {
                show: g.value,
                "onUpdate:show": y[7] || (y[7] = x => g.value = x),
                "close-on-click-overlay": !1,
                round: ""
            }, {
                default: P( () => [t("div", Y5, [t("div", J5, e(d(l)("presaleRules")), 1), t("div", t$, e(k.$t("betPopTXT")), 1), t("div", e$, [t("div", {
                    class: "Betting__Popup-PreSale-foot-btn",
                    onClick: T
                }, e(d(l)("iKonw")), 1)])])]),
                _: 1
            }, 8, ["show"])], 64)
        }
    }
});
const n$ = V(i$, [["__scopeId", "data-v-6c7a1db6"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/AllLotteryGames/ChangLong/BettingPopup.vue"]])
  , a$ = {
    class: "changLong__C"
}
  , o$ = {
    class: "changLong__C-bet"
}
  , s$ = {
    class: "changLong__C-bet-l"
}
  , l$ = {
    class: "num"
}
  , c$ = {
    class: "time"
}
  , r$ = {
    class: "other"
}
  , u$ = {
    class: "remark"
}
  , d$ = {
    class: "issue"
}
  , p$ = ["onClick"]
  , g$ = ["onClick"]
  , b$ = ["onClick"]
  , m$ = ["onClick"]
  , _$ = ["onClick"]
  , v$ = ["onClick"]
  , k$ = ["onClick"]
  , h$ = ["onClick"]
  , f$ = ["onClick"]
  , y$ = ["onClick"]
  , $$ = ["onClick"]
  , ia = 5
  , w$ = F({
    __name: "Bet",
    setup(s) {
        const i = Gi.global.t
          , o = h(!1)
          , l = h({})
          , g = h({
            coin: 0,
            count: 1,
            allCoin: 0,
            gametype: 0,
            typeid: 1,
            issuenumber: "2020",
            selecttype: 1,
            selectCon: ""
        })
          , m = Mo([]);
        let c = null;
        const u = (f, z, L, x, I) => {
            if (m.value[z].action = L,
            l.value = f,
            g.value.selectCon = x,
            g.value.coin = f.scopeList[0],
            g.value.typeid = f.type,
            g.value.gametype = f.bettingGameType,
            f.type > 4 && f.type != 30)
                I == "big" ? g.value.selecttype = "H" : I == "small" ? g.value.selecttype = "L" : g.value.selecttype = I;
            else {
                const R = {
                    red: 10,
                    green: 11,
                    violet: 12,
                    big: 13,
                    small: 14
                };
                g.value.selecttype = R[I]
            }
            g.value.issuenumber = f.issueNumber,
            o.value = !0
        }
          , p = h(!1)
          , r = async () => {
            if (c && clearInterval(c),
            p.value)
                return;
            p.value = !0;
            const f = await nt(vs({
                gameType: -1
            }));
            if (p.value = !1,
            !f)
                return;
            const z = f.data.serviceTime;
            m.value = f.data.list.map(L => {
                let x = new Date(z).getTime()
                  , I = new Date(L.startTime).getTime()
                  , R = (x - I) / 1e3;
                return R > L.intervalM * 60 && (R = L.intervalM * 60),
                L.scopeList = L.scope.split("|").map(M => Number(M)),
                L.passTime = Math.floor(L.intervalM * 60 - R),
                L.time1 = 0,
                L.time2 = Math.floor(L.passTime / 60),
                L.time3 = Math.floor(L.passTime % 60 / 10),
                L.time4 = Math.floor(L.passTime % 10),
                L
            }
            ),
            c = setInterval(function() {
                b()
            }, 1e3)
        }
          , b = () => {
            const f = m.value.length;
            let z = !1;
            for (let L = 0; L < f; L++) {
                let x = m.value[L];
                if (x.passTime < ia && x.issueNumber == l.value.issueNumber && _(),
                x.passTime > 0)
                    x.time2 = Math.floor(x.passTime / 60),
                    x.time3 = Math.floor(x.passTime % 60 / 10),
                    x.time4 = Math.floor(x.passTime % 10),
                    x.passTime--;
                else {
                    z = !1,
                    clearInterval(c),
                    r();
                    break
                }
                z = x.time3 + x.time4 == 0
            }
            Po(m),
            z && (clearInterval(c),
            r())
        }
          , _ = () => {
            o.value = !1;
            let f = m.value.findIndex(z => JSON.stringify(z) == JSON.stringify(l.value));
            f != -1 && (m.value[f].action = 0),
            g.value.coin = l.value.scopeList ? l.value.scopeList[0] : 0,
            g.value.count = 1,
            l.value = {}
        }
          , w = () => {
            const {typeid: f=0} = g.value;
            f && (f < 5 || f == 30 ? N() : f < 9 ? k() : v())
        }
          , T = f => f < 5 || f == 30 ? "winGo" : f < 9 ? "Fd" : "k3"
          , N = async () => {
            const f = await nt(ha({
                typeId: g.value.typeid,
                issuenumber: g.value.issuenumber,
                amount: g.value.coin,
                betCount: Number(g.value.count),
                gameType: g.value.gametype,
                selectType: g.value.selecttype
            }));
            (f == null ? void 0 : f.code) === 0 && (he(i("code" + f.msgCode)),
            _())
        }
          , v = async () => {
            let {coin: f, count: z, issuenumber: L, gametype: x, selecttype: I, typeid: R} = g.value;
            const M = await nt(fa({
                amount: f,
                betCount: Number(z),
                gameType: x.toString(),
                selectType: I,
                typeId: R,
                issuenumber: L
            }));
            (M == null ? void 0 : M.code) === 0 && (he(i("code" + M.msgCode)),
            _())
        }
          , k = async () => {
            let {coin: f, count: z, issuenumber: L, gametype: x, selecttype: I, typeid: R} = g.value;
            const M = {
                issuenumber: L,
                typeId: R,
                amount: f,
                betCount: Number(z),
                gameType: x,
                selectType: I
            }
              , A = await nt(ga(M));
            (A == null ? void 0 : A.code) === 0 && (he(i("code" + A.msgCode)),
            _())
        }
          , y = f => f == "H" ? "B" : f.trim() == "L" ? "S" : f;
        return Lt( () => {
            r()
        }
        ),
        Ve( () => {
            clearInterval(c)
        }
        ),
        At( () => De().visibility, f => {
            r()
        }
        ),
        (f, z) => (n(),
        a(S, null, [t("div", a$, [(n(!0),
        a(S, null, G(m.value, (L, x) => (n(),
        a("div", o$, [t("div", s$, [t("div", {
            class: B(["titel", [T(L.type)]])
        }, e(L.lotteryName), 3), t("div", l$, [E(e(L.issueNumber) + " ", 1), t("span", c$, e(`${L.time1}${L.time2}:${L.time3}${L.time4}`), 1)]), t("div", r$, [t("div", u$, e(L.remark), 1), t("div", {
            class: B(["gameResult", "bg-" + L.gameResult])
        }, e(y(L.gameResult)), 3), t("div", d$, e(L.issue) + e(f.$t("betIssues")), 1)])]), t("div", {
            class: B(["changLong__C-bet-r", {
                disable: L.passTime < ia
            }])
        }, [L.gameType == 0 ? (n(),
        a(S, {
            key: 0
        }, [t("div", {
            class: B({
                active: L.action == 1
            }),
            onClick: I => u(L, x, 1, f.$t("betBig"), "big")
        }, e(f.$t("betBig")), 11, p$), t("div", {
            class: B({
                active: L.action == 2
            }),
            onClick: I => u(L, x, 2, f.$t("betSmall"), "small")
        }, e(f.$t("betSmall")), 11, g$)], 64)) : $("v-if", !0), L.gameType == 1 ? (n(),
        a(S, {
            key: 1
        }, [t("div", {
            class: B({
                active: L.action == 1
            }),
            onClick: I => u(L, x, 1, f.$t("betRed"), "red")
        }, e(f.$t("betRed")), 11, b$), t("div", {
            class: B({
                active: L.action == 2
            }),
            onClick: I => u(L, x, 2, f.$t("betGreen"), "green")
        }, e(f.$t("betGreen")), 11, m$), t("div", {
            class: B({
                active: L.action == 3
            }),
            onClick: I => u(L, x, 3, f.$t("betPurple"), "violet")
        }, e(f.$t("betPurple")), 11, _$)], 64)) : $("v-if", !0), L.gameType == 2 ? (n(),
        a(S, {
            key: 2
        }, [t("div", {
            class: B({
                active: L.action == 1
            }),
            onClick: I => u(L, x, 1, f.$t("betOdd"), "O")
        }, e(f.$t("betOdd")), 11, v$), t("div", {
            class: B({
                active: L.action == 2
            }),
            onClick: I => u(L, x, 2, f.$t("betEven"), "E")
        }, e(f.$t("betEven")), 11, k$)], 64)) : $("v-if", !0), L.gameType == 3 ? (n(),
        a(S, {
            key: 3
        }, [t("div", {
            class: B({
                active: L.action == 1
            }),
            onClick: I => u(L, x, 1, f.$t("betWithSingle"), "O")
        }, e(f.$t("betWithSingle")), 11, h$), t("div", {
            class: B({
                active: L.action == 2
            }),
            onClick: I => u(L, x, 2, f.$t("betWithDouble"), "E")
        }, e(f.$t("betWithDouble")), 11, f$)], 64)) : $("v-if", !0), L.gameType == 4 ? (n(),
        a(S, {
            key: 4
        }, [t("div", {
            class: B({
                active: L.action == 1
            }),
            onClick: I => u(L, x, 1, f.$t("betWithBig"), "H")
        }, e(f.$t("betWithBig")), 11, y$), t("div", {
            class: B({
                active: L.action == 2
            }),
            onClick: I => u(L, x, 2, f.$t("betWithSmall"), "L")
        }, e(f.$t("betWithSmall")), 11, $$)], 64)) : $("v-if", !0)], 2)]))), 256))]), C(n$, {
            bettingPopupShow: o.value,
            selectInfo: g.value,
            actionItem: l.value,
            onClearBetting: _,
            onSubmitBetting: w
        }, null, 8, ["bettingPopupShow", "selectInfo", "actionItem"])], 64))
    }
});
const T$ = V(w$, [["__scopeId", "data-v-91d808d9"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/AllLotteryGames/ChangLong/Bet.vue"]])
  , C$ = {
    class: "MyGameRecord__C"
}
  , L$ = {
    key: 0,
    class: "MyGameRecord__C-head"
}
  , N$ = {
    class: "MyGameRecord__C-body"
}
  , z$ = {
    key: 1,
    class: "MyGameRecord__C-body-empty"
}
  , I$ = {
    key: 1,
    class: "MyGameRecord__C-foot"
}
  , x$ = {
    class: "MyGameRecord__C-foot-page"
}
  , S$ = F({
    __name: "MyGameRecord",
    props: {
        typeid: {
            type: Number,
            required: !0
        },
        ApiFun: {
            type: Function,
            required: !0
        },
        goPathName: {
            type: String,
            required: !0
        },
        hasHead: {
            type: Boolean,
            required: !0,
            default: !0
        }
    },
    setup(s, {expose: i}) {
        const o = s
          , l = ct()
          , g = h(4)
          , m = h(20)
          , c = h(1)
          , u = h([])
          , p = w => {
            l.push({
                name: w
            })
        }
          , r = () => {
            c.value--,
            _()
        }
          , b = () => {
            c.value++,
            _()
        }
          , _ = async (w=!1) => {
            if (o.typeid == null)
                return;
            w && (c.value = 1);
            const [T,N] = await ie(o.ApiFun({
                pageSize: m.value,
                pageNo: c.value,
                typeId: o.typeid
            }));
            N && (u.value = (N == null ? void 0 : N.list) || [],
            g.value = (N == null ? void 0 : N.totalPage) || 0)
        }
        ;
        return i({
            getData: _
        }),
        fe( () => {
            _()
        }
        ),
        (w, T) => {
            const N = W("svg-icon")
              , v = W("van-icon");
            return n(),
            a("div", C$, [w.hasHead ? (n(),
            a("div", L$, [t("div", {
                class: "MyGameRecord__C-head-moreB",
                onClick: T[0] || (T[0] = k => p(w.goPathName))
            }, [E(e(w.$t("more")) + " ", 1), C(N, {
                name: "rightCircle"
            })])])) : $("v-if", !0), t("div", N$, [u.value.length ? (n(),
            J(fn, {
                key: 0,
                mayrecord: u.value
            }, null, 8, ["mayrecord"])) : (n(),
            a("div", z$, [C(ge)]))]), u.value.length ? (n(),
            a("div", I$, [t("div", {
                class: B(["MyGameRecord__C-foot-previous", {
                    disabled: c.value <= 1
                }]),
                onClick: r
            }, [C(v, {
                name: "arrow-left",
                class: "MyGameRecord__C-icon",
                size: "20"
            })], 2), t("div", x$, e(c.value) + "/" + e(g.value), 1), t("div", {
                class: B(["MyGameRecord__C-foot-next", {
                    disabled: c.value >= g.value
                }]),
                onClick: b
            }, [C(v, {
                name: "arrow",
                class: "MyGameRecord__C-icon",
                size: "20"
            })], 2)])) : $("v-if", !0)])
        }
    }
});
const wn = V(S$, [["__scopeId", "data-v-4b21e13b"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/AllLotteryGames/WinGo/MyGameRecord.vue"]])
  , R$ = {
    class: "MyGameRecord__C"
}
  , B$ = {
    key: 0,
    class: "MyGameRecord__C-head"
}
  , G$ = {
    class: "MyGameRecord__C-body"
}
  , A$ = {
    key: 1,
    class: "MyGameRecord__C-body-empty"
}
  , M$ = {
    key: 1,
    class: "MyGameRecord__C-foot"
}
  , P$ = {
    class: "MyGameRecord__C-foot-page"
}
  , D$ = F({
    __name: "MyGameRecord",
    props: {
        typeid: {
            type: Number,
            required: !0
        },
        goPathName: {
            type: String,
            required: !0
        },
        hasHead: {
            type: Boolean,
            required: !0,
            default: !0
        }
    },
    setup(s, {expose: i}) {
        const o = s
          , l = ct()
          , g = h(4)
          , m = h(20)
          , c = h(1)
          , u = h([])
          , p = T => {
            l.push({
                name: T
            })
        }
          , r = () => {
            c.value--,
            _()
        }
          , b = () => {
            c.value++,
            _()
        }
          , _ = async (T=!1) => {
            if (o.typeid == null)
                return;
            T && (c.value = 1);
            const N = await nt(va({
                pageSize: m.value,
                pageNo: c.value,
                typeId: o.typeid
            }))
              , v = (N == null ? void 0 : N.data.list) || [];
            for (let k = 0; v.length > k; k++) {
                let y = v[k].gameType.split(",")
                  , f = v[k].selectType.split(",");
                for (let z = 0; y.length > z; z++)
                    if (y[z] == "1" || y[z] == "2" || y[z] == "3")
                        v[k].gameType = "1",
                        v[k].oneList = f;
                    else if (y[z] == "5" || y[z] == "6") {
                        let L = []
                          , x = []
                          , I = [];
                        for (let R = 0; f.length > R; R++) {
                            if (f[R] == "|11|" || f[R] == "|22|" || f[R] == "|33|" || f[R] == "|44|" || f[R] == "|55|" || f[R] == "|66|") {
                                let M = f[R].split("|");
                                M.pop(),
                                M.shift(),
                                L.push(M.join())
                            }
                            if (f[R] == ":11:" || f[R] == ":22:" || f[R] == ":33:" || f[R] == ":44:" || f[R] == ":55:" || f[R] == ":66:") {
                                let M = f[R].split(":");
                                M.pop(),
                                M.shift(),
                                x.push(M.join())
                            }
                            if (f[R] == ":1:" || f[R] == ":2:" || f[R] == ":3:" || f[R] == ":4:" || f[R] == ":5:" || f[R] == ":6:") {
                                let M = f[R].split(":");
                                M.pop(),
                                M.shift(),
                                I.push(M.join())
                            }
                        }
                        v[k].gameType = "2",
                        v[k].oneList = L,
                        v[k].towList = w(x, I)
                    } else if (y[z] == "7" || y[z] == "8") {
                        let L = []
                          , x = !1;
                        for (let I = 0; f.length > I; I++) {
                            if (f[I] == "|111|" || f[I] == "|222|" || f[I] == "|333|" || f[I] == "|444|" || f[I] == "|555|" || f[I] == "|666|") {
                                let R = f[I].split("|");
                                R.pop(),
                                R.shift(),
                                L.push(R.join())
                            }
                            f[I] == "|AAA|" && (x = !0),
                            v[k].oneList = L,
                            v[k].towList = x,
                            v[k].gameType = "3"
                        }
                    } else if (y[z] == "9" || y[z] == "10" || y[z] == "4") {
                        let L = []
                          , x = !1
                          , I = [];
                        for (let R = 0; f.length > R; R++) {
                            if (f[R] == "|1|" || f[R] == "|2|" || f[R] == "|3|" || f[R] == "|4|" || f[R] == "|5|" || f[R] == "|6|") {
                                let M = f[R].split("|");
                                M.pop(),
                                M.shift(),
                                L.push(M.join())
                            }
                            if (f[R] == "|ABC|" && (x = !0),
                            f[R] == ".1." || f[R] == ".2." || f[R] == ".3." || f[R] == ".4." || f[R] == ".5." || f[R] == ".6.") {
                                let M = f[R].split(".");
                                M.pop(),
                                M.shift(),
                                I.push(M.join())
                            }
                        }
                        v[k].oneList = L,
                        v[k].towList = x,
                        v[k].threeList = I,
                        v[k].gameType = "4"
                    }
            }
            u.value = v || [],
            g.value = (N == null ? void 0 : N.data.totalPage) || 0
        }
          , w = (T, N) => {
            let v = [];
            for (var k = 0; T.length > k; k++) {
                let f = T[k]
                  , z = [];
                for (var y = 0; N.length > y; y++)
                    z.push(N[y]);
                if (z.length > 0) {
                    let L = z.sort().join(",");
                    v.push(f + "|" + L)
                }
            }
            return v.sort()
        }
        ;
        return i({
            getData: _
        }),
        fe( () => {
            _()
        }
        ),
        (T, N) => {
            const v = W("svg-icon")
              , k = W("van-icon");
            return n(),
            a("div", R$, [T.hasHead ? (n(),
            a("div", B$, [t("div", {
                class: "MyGameRecord__C-head-moreB",
                onClick: N[0] || (N[0] = y => p(T.goPathName))
            }, [E(e(T.$t("more")) + " ", 1), C(v, {
                name: "rightCircle"
            })])])) : $("v-if", !0), t("div", G$, [u.value.length ? (n(),
            J(Ea, {
                key: 0,
                mayrecord: u.value
            }, null, 8, ["mayrecord"])) : (n(),
            a("div", A$, [C(ge)]))]), u.value.length ? (n(),
            a("div", M$, [t("div", {
                class: B(["MyGameRecord__C-foot-previous", {
                    disabled: c.value <= 1
                }]),
                onClick: r
            }, [C(k, {
                name: "arrow-left",
                class: "MyGameRecord__C-icon",
                size: "20"
            })], 2), t("div", P$, e(c.value) + "/" + e(g.value), 1), t("div", {
                class: B(["MyGameRecord__C-foot-next", {
                    disabled: c.value >= g.value
                }]),
                onClick: b
            }, [C(k, {
                name: "arrow",
                class: "MyGameRecord__C-icon",
                size: "20"
            })], 2)])) : $("v-if", !0)])
        }
    }
});
const ja = V(D$, [["__scopeId", "data-v-cffd8c9f"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/AllLotteryGames/K3/MyGameRecord.vue"]])
  , O$ = {
    class: "BetRecord__C"
}
  , E$ = ["innerHTML"]
  , q$ = F({
    __name: "BetRecord",
    setup(s) {
        const i = {
            Win: wn,
            FD: Oa,
            K3: ja
        }
          , o = ye()
          , l = h()
          , g = h(0)
          , m = h(0)
          , c = h("wingo")
          , u = Q( () => o[`${c.value}`])
          , p = h([{
            name: "WinGo",
            com: "Win"
        }, {
            name: "5D Lotre",
            com: "FD"
        }, {
            name: "K3Lotre",
            com: "K3"
        }])
          , r = h(1)
          , b = async () => {
            g.value === 0 ? (await o.getWinGoData(),
            c.value = "wingo") : g.value === 1 ? (await o.get5DData(),
            c.value = "fiveD") : (await o.getK3Data(),
            c.value = "k3"),
            r.value = u.value[m.value].typeID,
            Jt( () => {
                l.value && l.value.getData()
            }
            )
        }
        ;
        return Lt(async () => {
            b()
        }
        ),
        (_, w) => {
            const T = W("van-tab")
              , N = W("van-tabs");
            return n(),
            a("div", O$, [C(N, {
                class: "BetRecord__C-gameTab",
                active: g.value,
                "onUpdate:active": w[1] || (w[1] = v => g.value = v),
                onClick: b
            }, {
                default: P( () => [(n(!0),
                a(S, null, G(p.value, (v, k) => (n(),
                J(T, {
                    key: k,
                    title: v.name
                }, {
                    default: P( () => [C(N, {
                        class: "BetRecord__C-timeTab",
                        active: m.value,
                        "onUpdate:active": w[0] || (w[0] = y => m.value = y)
                    }, {
                        default: P( () => [t("template", null, [(n(!0),
                        a(S, null, G(u.value, (y, f) => (n(),
                        J(T, {
                            key: f
                        }, {
                            title: P( () => [t("div", {
                                innerHTML: y.typeName.replace(/<br ?\/?>/, "")
                            }, null, 8, E$)]),
                            _: 2
                        }, 1024))), 128))])]),
                        _: 2
                    }, 1032, ["active"])]),
                    _: 2
                }, 1032, ["title"]))), 128))]),
                _: 1
            }, 8, ["active"]), (n(),
            J(He(i[p.value[g.value].com]), {
                ref_key: "RecRef",
                ref: l,
                typeid: r.value,
                "has-head": !1,
                ApiFun: d(mn),
                "go-path-name": "0"
            }, null, 8, ["typeid", "ApiFun"]))])
        }
    }
});
const j$ = V(q$, [["__scopeId", "data-v-7c263a55"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/AllLotteryGames/ChangLong/BetRecord.vue"]])
  , H$ = {
    class: "changLong__C"
}
  , W$ = F({
    __name: "index",
    setup(s) {
        const i = ct()
          , o = h(0);
        function l() {
            i.go(-1)
        }
        return Lt( () => {}
        ),
        (g, m) => {
            const c = W("NavBar")
              , u = W("van-tab")
              , p = W("van-tabs");
            return n(),
            a("div", H$, [C(c, {
                "left-arrow": "",
                title: g.$t("loongAssistant"),
                class: "main",
                onClickLeft: l
            }, null, 8, ["title"]), C(p, {
                class: "changLong__C-tab",
                active: o.value,
                "onUpdate:active": m[0] || (m[0] = r => o.value = r)
            }, {
                default: P( () => [C(u, {
                    title: g.$t("latestLoong")
                }, null, 8, ["title"]), C(u, {
                    title: g.$t("myBet")
                }, null, 8, ["title"])]),
                _: 1
            }, 8, ["active"]), o.value == 0 ? (n(),
            J(T$, {
                key: 0
            })) : (n(),
            J(j$, {
                key: 1
            }))])
        }
    }
});
const F$ = V(W$, [["__scopeId", "data-v-6aad721b"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/home/AllLotteryGames/ChangLong/index.vue"]])
  , fG = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: F$
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Ha = s => (Nt("data-v-75b35bf5"),
s = s(),
zt(),
s)
  , V$ = {
    class: "K3TL__C"
}
  , U$ = {
    class: "K3TL__C-l1"
}
  , K$ = {
    class: "left"
}
  , X$ = Ha( () => t("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "33",
    height: "32",
    viewBox: "0 0 33 32",
    fill: "none"
}, [t("path", {
    d: "M9.0484 25.8284L9.04089 25.8359L9.03366 25.8437C8.47797 26.4402 7.97942 26.8014 7.56631 26.9797C7.15908 27.1556 6.87147 27.141 6.67169 27.055C6.46753 26.967 6.24252 26.7559 6.06263 26.3149C5.88195 25.8718 5.76602 25.2377 5.76602 24.3993V9.38602C5.76602 6.69019 6.09509 5.23943 6.86083 4.42092C7.61326 3.61665 8.94055 3.26602 11.4593 3.26602H21.5393C24.0584 3.26602 25.3852 3.61676 26.1358 4.42054C26.8997 5.23844 27.226 6.68864 27.2193 9.38453V9.38602V24.386C27.2193 25.2248 27.1041 25.8592 26.9242 26.3024C26.7451 26.7438 26.5211 26.9543 26.3182 27.0418C26.1198 27.1275 25.8328 27.1424 25.4244 26.9663C25.0105 26.7878 24.5102 26.4264 23.9512 25.8299C23.2918 25.1224 22.4328 24.7733 21.5701 24.8202C20.7074 24.8672 19.8916 25.3075 19.3127 26.0793L19.3123 26.0799L17.9676 27.8772C17.9673 27.8776 17.967 27.878 17.9667 27.8785C17.5231 28.4638 16.9844 28.7094 16.4927 28.7094C16.001 28.7094 15.4623 28.4638 15.0187 27.8785C15.0184 27.878 15.0181 27.8776 15.0177 27.8772L13.6733 26.0802C13.6732 26.0801 13.6732 26.08 13.6731 26.0799C12.5033 24.515 10.4028 24.3993 9.05577 25.8211L9.0484 25.8284ZM8.93935 14.666C8.93935 15.7307 9.80798 16.5993 10.8727 16.5993C11.9374 16.5993 12.806 15.7307 12.806 14.666C12.806 13.6013 11.9374 12.7327 10.8727 12.7327C9.80798 12.7327 8.93935 13.6013 8.93935 14.666ZM8.93935 9.33268C8.93935 10.3974 9.80798 11.266 10.8727 11.266C11.9374 11.266 12.806 10.3974 12.806 9.33268C12.806 8.26798 11.9374 7.39935 10.8727 7.39935C9.80798 7.39935 8.93935 8.26798 8.93935 9.33268ZM14.806 16.266H22.1393C23.0174 16.266 23.7393 15.5441 23.7393 14.666C23.7393 13.788 23.0174 13.066 22.1393 13.066H14.806C13.928 13.066 13.206 13.788 13.206 14.666C13.206 15.5441 13.928 16.266 14.806 16.266ZM14.806 10.9327H22.1393C23.0174 10.9327 23.7393 10.2107 23.7393 9.33268C23.7393 8.45465 23.0174 7.73268 22.1393 7.73268H14.806C13.928 7.73268 13.206 8.45465 13.206 9.33268C13.206 10.2107 13.928 10.9327 14.806 10.9327Z",
    stroke: "currentColor",
    "stroke-width": "1.2"
})], -1))
  , Q$ = {
    class: "K3TL__C-l2"
}
  , Z$ = {
    class: "K3TL__C-time"
}
  , Y$ = Ha( () => t("div", {
    notime: ""
}, ":", -1))
  , J$ = {
    class: "K3TL__C-l3"
}
  , tw = {
    class: "box"
}
  , ew = F({
    __name: "TimeLeft",
    props: {
        currentInfo: {
            type: Object,
            default: () => ({
                gameNo: "loading",
                currentTime: "",
                beginTime: "",
                passTime: 180,
                time1: 0,
                time2: 0,
                time3: 0,
                time4: 0
            })
        },
        premium: {
            type: String,
            default: "666"
        },
        currentGame: {
            type: Object,
            default: () => ({})
        }
    },
    setup(s) {
        const i = s
          , o = Q( () => [...i.premium])
          , l = h(!1)
          , g = ye()
          , m = () => {
            l.value = !0,
            g.getK3Rule(i.currentGame.typeID)
        }
        ;
        return (c, u) => (n(),
        a(S, null, [t("div", V$, [t("div", U$, [t("div", K$, [t("div", null, e(c.$t("k3Number")), 1), t("div", {
            class: "K3TL__C-rule",
            onClick: m
        }, [X$, E(" " + e(c.$t("winTrxIndicate")), 1)])]), t("div", null, e(c.$t("k3TimeLeftToBuy")), 1)]), t("div", Q$, [t("div", null, e(i.currentInfo.gameNo), 1), t("div", Z$, [t("div", null, e(s.currentInfo.time1), 1), t("div", null, e(s.currentInfo.time2), 1), Y$, t("div", null, e(s.currentInfo.time3), 1), t("div", null, e(s.currentInfo.time4), 1)])]), t("div", J$, [t("div", tw, [(n(!0),
        a(S, null, G(o.value, (p, r) => (n(),
        a("div", {
            key: r,
            class: B(["num" + p])
        }, null, 2))), 128))])])]), $(" 规则弹层 begin"), C(Di, {
            howPlayShow: l.value,
            gamePresentation: s.currentGame.gamePresentation,
            onClose: u[0] || (u[0] = p => l.value = !1)
        }, null, 8, ["howPlayShow", "gamePresentation"])], 64))
    }
});
const iw = V(ew, [["__scopeId", "data-v-75b35bf5"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/AllLotteryGames/K3/TimeLeft.vue"]])
  , nw = {
    class: "K3B__C-bettingList"
}
  , aw = ["onClick"]
  , ow = {
    key: 1,
    class: ""
}
  , sw = {
    key: 2,
    class: "K3B__C-odds-rate"
}
  , lw = {
    key: 3,
    class: "K3B__C-odds-rate"
}
  , cw = {
    key: 4,
    class: "K3B__C-odds-rate"
}
  , rw = F({
    __name: "Betting1",
    props: {
        OddsList: {
            type: Array,
            required: !0
        },
        betnumList: {
            type: Array,
            required: !0
        }
    },
    emits: ["showP", "upAll"],
    setup(s, {expose: i, emit: o}) {
        const l = s
          , {t: g} = gt()
          , m = h([{
            num: 3,
            odds: 191.16,
            chack: !1
        }, {
            num: 4,
            odds: 63.72,
            chack: !1
        }, {
            num: 5,
            odds: 31.86,
            chack: !1
        }, {
            num: 6,
            odds: 19.11,
            chack: !1
        }, {
            num: 7,
            odds: 12.74,
            chack: !1
        }, {
            num: 8,
            odds: 9.1,
            chack: !1
        }, {
            num: 9,
            odds: 7.64,
            chack: !1
        }, {
            num: 10,
            odds: 7.08,
            chack: !1
        }, {
            num: 11,
            odds: 7.08,
            chack: !1
        }, {
            num: 12,
            odds: 7.64,
            chack: !1
        }, {
            num: 13,
            odds: 9.1,
            chack: !1
        }, {
            num: 14,
            odds: 12.74,
            chack: !1
        }, {
            num: 15,
            odds: 19.11,
            chack: !1
        }, {
            num: 16,
            odds: 31.86,
            chack: !1
        }, {
            num: 17,
            odds: 63.72,
            chack: !1
        }, {
            num: 18,
            odds: 191.16,
            chack: !1
        }, {
            num: "A",
            odds: 2,
            chack: !1
        }, {
            num: "B",
            odds: 2,
            chack: !1
        }, {
            num: "C",
            odds: 2,
            chack: !1
        }, {
            num: "D",
            odds: 2,
            chack: !1
        }])
          , c = w => {
            switch (w) {
            case "A":
                return g("k3Big");
            case "B":
                return g("k3Small");
            case "C":
                return g("k3Odd");
            case "D":
                return g("k3Even");
            default:
                return w
            }
        }
          , u = (w, T) => {
            T < 16 ? m.value[T].chack ? b(w, T) : (l.betnumList.push(w.num),
            m.value[T].chack = !0) : p(w, T),
            l.betnumList.length > 0 ? o("showP", !0) : o("showP", !1),
            o("upAll")
        }
          , p = (w, T) => {
            switch (T) {
            case 16:
                r(w, T, 17);
                break;
            case 17:
                r(w, T, 16);
                break;
            case 18:
                r(w, T, 19);
                break;
            case 19:
                r(w, T, 18);
                break
            }
        }
          , r = (w, T, N) => {
            m.value[N].chack && b(m.value[N], N),
            m.value[T].chack ? b(w, T) : (l.betnumList.push(w.num),
            m.value[T].chack = !0)
        }
          , b = (w, T) => {
            m.value[T].chack = !1;
            let N = l.betnumList.indexOf(w.num);
            N > -1 && l.betnumList.splice(N, 1)
        }
        ;
        return i({
            clearList: () => {
                m.value = m.value.map(w => (w.chack = !1,
                w))
            }
        }),
        (w, T) => (n(),
        a("div", nw, [(n(!0),
        a(S, null, G(m.value, (N, v) => (n(),
        a("div", {
            class: B("num num" + N.num),
            key: v,
            onClick: k => u(N, v)
        }, [v < 16 ? (n(),
        a("div", {
            key: 0,
            class: B(v % 2 == 0 ? "ball rball" : "ball gball")
        }, [t("div", {
            class: B("K3B__C-odds-bet num" + N.num)
        }, e(c(N.num)), 3)], 2)) : (n(),
        a("div", ow, e(c(N.num)), 1)), v < 16 ? (n(),
        a("div", sw, e(l.OddsList[v] && (l.OddsList[v].playRate || l.OddsList[v].playRate_Original)) + "X ", 1)) : v < 18 ? (n(),
        a("div", lw, e(l.OddsList[16] && (l.OddsList[16].playRate || l.OddsList[16].playRate_Original)) + "X ", 1)) : (n(),
        a("div", cw, e(l.OddsList[17] && (l.OddsList[17].playRate || l.OddsList[17].playRate_Original)) + "X ", 1))], 10, aw))), 128))]))
    }
});
const uw = V(rw, [["__scopeId", "data-v-ed0c8e79"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/AllLotteryGames/K3/Betting1.vue"]])
  , dw = {
    class: "K3B__C-betting2"
}
  , pw = {
    class: "K3B__C-betting2-tip1"
}
  , gw = {
    key: 0
}
  , bw = {
    class: "K3B__C-betting2-line1 mb30"
}
  , mw = ["onClick"]
  , _w = {
    class: "K3B__C-betting2-tip1"
}
  , vw = {
    key: 0
}
  , kw = {
    class: "K3B__C-betting2-line2"
}
  , hw = ["onClick"]
  , fw = {
    class: ""
}
  , yw = {
    class: "K3B__C-betting2-line3"
}
  , $w = ["onClick"]
  , ww = {
    class: ""
}
  , Tw = F({
    __name: "Betting2",
    props: {
        OddsList: {
            type: Array,
            required: !0
        },
        numList: {
            type: null,
            required: !0
        },
        betnumList: {
            type: Array,
            required: !0
        },
        numTow: {
            type: Array,
            required: !0
        },
        numOne: {
            type: Array,
            required: !0
        },
        numChack: {
            type: Boolean,
            required: !0
        }
    },
    emits: ["showP", "upAll", "selectNum", "onQuestion"],
    setup(s, {emit: i}) {
        const o = s
          , l = (c, u, p) => {
            let r = c.num
              , b = c.num + "" + c.num;
            if (p == 1)
                if (o.numList[u].chackOne) {
                    o.numList[u].chackOne = !1;
                    let _ = o.numTow.indexOf(b);
                    _ > -1 && o.numTow.splice(_, 1)
                } else {
                    o.numList[u].chackOne = !0,
                    o.numList[u].chackTow = !1;
                    let _ = o.numOne.indexOf(r);
                    _ > -1 && o.numOne.splice(_, 1),
                    o.numTow.push(b)
                }
            else if (o.numList[u].chackTow) {
                o.numList[u].chackTow = !1;
                let _ = o.numOne.indexOf(r);
                _ > -1 && o.numOne.splice(_, 1)
            } else {
                o.numList[u].chackTow = !0,
                o.numList[u].chackOne = !1;
                let _ = o.numTow.indexOf(b);
                _ > -1 && o.numTow.splice(_, 1),
                o.numOne.push(r)
            }
            i("selectNum"),
            o.numTow.length > 0 && o.numOne.length > 0 || o.betnumList.length > 0 ? i("showP", !0) : i("showP", !1)
        }
          , g = (c, u) => {
            let p = c.num + "" + c.num;
            if (o.numList[u].chack) {
                o.numList[u].chack = !1;
                let r = o.betnumList.indexOf(p);
                r > -1 && o.betnumList.splice(r, 1)
            } else
                o.betnumList.push(p),
                o.betnumList.sort(),
                o.numList[u].chack = !0;
            o.numChack || o.betnumList.length > 0 || o.numTow.length > 0 && o.numOne.length > 0 ? i("showP", !0) : i("showP", !1)
        }
          , m = (c, u) => {
            i("onQuestion", c, u)
        }
        ;
        return Lt( () => {}
        ),
        (c, u) => {
            const p = W("van-icon");
            return n(),
            a("div", dw, [t("div", pw, [E(e(c.$t("k3bet2Desc1")), 1), c.OddsList[20] ? (n(),
            a("span", gw, "(" + e(c.OddsList[20].playRate ? c.OddsList[20].playRate : c.OddsList[20].playRate_Original) + ")", 1)) : $("v-if", !0), C(p, {
                onClick: u[0] || (u[0] = r => m(c.$t("k3bet2Desc2"), [5, 5])),
                class: "icon",
                color: "#FA574A",
                size: "16",
                name: "question"
            })]), t("div", bw, [(n(!0),
            a(S, null, G(c.numList, (r, b) => (n(),
            a("div", {
                class: B({
                    active: r.chack
                }),
                key: b,
                onClick: _ => g(r, b)
            }, [t("div", null, e(r.num) + e(r.num), 1)], 10, mw))), 128))]), t("div", _w, [E(e(c.$t("k3bet2Desc3")), 1), c.OddsList[19] ? (n(),
            a("span", vw, "(" + e(c.OddsList[19].playRate ? c.OddsList[19].playRate : c.OddsList[19].playRate_Original) + ")", 1)) : $("v-if", !0), C(p, {
                onClick: u[1] || (u[1] = r => m(c.$t("k3bet2Desc4"), [6, 1, 6])),
                class: "icon",
                color: "#FA574A",
                size: "16",
                name: "question"
            })]), t("div", kw, [(n(!0),
            a(S, null, G(c.numList, (r, b) => (n(),
            a("div", {
                class: B({
                    active: r.chackOne
                }),
                key: b,
                onClick: _ => l(r, b, 1)
            }, [t("div", fw, e(r.num) + e(r.num), 1)], 10, hw))), 128))]), t("div", yw, [(n(!0),
            a(S, null, G(c.numList, (r, b) => (n(),
            a("div", {
                class: B({
                    active: r.chackTow
                }),
                key: b,
                onClick: _ => l(r, b, 2)
            }, [t("div", ww, e(r.num), 1)], 10, $w))), 128))])])
        }
    }
});
const Cw = V(Tw, [["__scopeId", "data-v-5c28a69e"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/AllLotteryGames/K3/Betting2.vue"]])
  , Lw = {
    class: "K3B__C-betting3"
}
  , Nw = {
    class: "K3B__C-betting3-tip1"
}
  , zw = {
    key: 0
}
  , Iw = {
    class: "K3B__C-betting3-line1 mb30"
}
  , xw = ["onClick"]
  , Sw = {
    class: "K3B__C-betting3-tip1"
}
  , Rw = {
    key: 0
}
  , Bw = F({
    __name: "Betting3",
    props: {
        OddsList: {
            type: Array,
            required: !0
        },
        numList: {
            type: null,
            required: !0
        },
        betnumList: {
            type: null,
            required: !0
        },
        numChack: {
            type: null,
            required: !0
        },
        numTow: {
            type: null,
            required: !0
        },
        numOne: {
            type: null,
            required: !0
        }
    },
    emits: ["showP", "upAll", "selectNum", "cNumChack", "onQuestion"],
    setup(s, {emit: i}) {
        const o = s
          , l = (c, u) => {
            let p = c.num + "" + c.num + c.num;
            if (o.numList[u].chack) {
                o.numList[u].chack = !1;
                let r = o.betnumList.indexOf(p);
                r > -1 && o.betnumList.splice(r, 1)
            } else
                o.betnumList.push(p),
                o.betnumList.sort(),
                o.numList[u].chack = !0;
            o.numChack || o.betnumList.length > 0 || o.numTow.length > 0 && o.numOne.length > 0 ? i("showP", !0) : i("showP", !1)
        }
          , g = () => {
            i("cNumChack"),
            Jt( () => {
                o.numChack || o.betnumList.length > 0 || o.numTow.length > 1 || o.numOne.length > 2 ? i("showP", !0) : i("showP", !1)
            }
            )
        }
          , m = (c, u) => {
            i("onQuestion", c, u)
        }
        ;
        return Lt( () => {}
        ),
        (c, u) => {
            const p = W("van-icon");
            return n(),
            a("div", Lw, [t("div", Nw, [E(e(c.$t("k3bet3Desc1")) + " ", 1), c.OddsList[21] ? (n(),
            a("span", zw, "(" + e(c.OddsList[21].playRate ? c.OddsList[21].playRate : c.OddsList[21].playRate_Original) + ")", 1)) : $("v-if", !0), C(p, {
                onClick: u[0] || (u[0] = r => m(c.$t("k3bet3Desc2"), [6, 6, 6])),
                class: "icon",
                color: "#FA574A",
                size: "16",
                name: "question"
            })]), t("div", Iw, [(n(!0),
            a(S, null, G(c.numList, (r, b) => (n(),
            a("div", {
                class: B({
                    active: r.chack
                }),
                key: b,
                onClick: _ => l(r, b)
            }, [t("div", null, e(r.num) + e(r.num) + e(r.num), 1)], 10, xw))), 128))]), t("div", Sw, [E(e(c.$t("k3bet3Desc3")) + " ", 1), c.OddsList[22] ? (n(),
            a("span", Rw, "(" + e(c.OddsList[22].playRate ? c.OddsList[22].playRate : c.OddsList[22].playRate_Original) + ")", 1)) : $("v-if", !0), C(p, {
                onClick: u[1] || (u[1] = r => m(c.$t("k3bet3Desc5"), [7, 7, 7])),
                class: "icon",
                color: "#FA574A",
                size: "16",
                name: "question"
            })]), t("div", {
                class: B(["K3B__C-betting3-btn", {
                    active: o.numChack
                }]),
                onClick: g
            }, e(c.$t("k3bet3Desc4")), 3)])
        }
    }
});
const Gw = V(Bw, [["__scopeId", "data-v-3deb049d"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/AllLotteryGames/K3/Betting3.vue"]])
  , Aw = {
    class: "K3B__C-betting4"
}
  , Mw = {
    class: "K3B__C-betting4-tip1"
}
  , Pw = {
    key: 0
}
  , Dw = {
    class: "K3B__C-betting4-line1 mb30"
}
  , Ow = ["onClick"]
  , Ew = {
    class: "K3B__C-betting4-tip1"
}
  , qw = {
    key: 0
}
  , jw = {
    class: "K3B__C-betting4-tip1"
}
  , Hw = {
    key: 0
}
  , Ww = {
    class: "K3B__C-betting4-line1"
}
  , Fw = ["onClick"]
  , Vw = F({
    __name: "Betting4",
    props: {
        OddsList: {
            type: Array,
            required: !0
        },
        numList: {
            type: null,
            required: !0
        },
        numTow: {
            type: Array,
            required: !0
        },
        numOne: {
            type: Array,
            required: !0
        },
        numChack: {
            type: null,
            required: !0
        },
        betnumList: {
            type: null,
            required: !0
        }
    },
    emits: ["showP", "upAll", "selectNum", "cNumChack", "onQuestion"],
    setup(s, {emit: i}) {
        const o = s
          , l = (c, u, p) => {
            if (p == 1)
                if (o.numList[u].chackOne) {
                    o.numList[u].chackOne = !1;
                    var r = o.numOne.indexOf(c.num);
                    r > -1 && o.numOne.splice(r, 1)
                } else
                    o.numList[u].chackOne = !0,
                    o.numOne.push(c.num),
                    o.numOne.sort();
            else if (o.numList[u].chackTow) {
                o.numList[u].chackTow = !1;
                var u = o.numTow.indexOf(c.num);
                u > -1 && o.numTow.splice(u, 1)
            } else
                o.numList[u].chackTow = !0,
                o.numTow.push(c.num),
                o.numTow.sort();
            o.numChack || o.numTow.length > 1 || o.numOne.length > 2 ? i("showP", !0) : i("showP", !1)
        }
          , g = (c, u) => {
            i("onQuestion", c, u)
        }
          , m = () => {
            i("cNumChack"),
            Jt( () => {
                o.numChack || o.betnumList.length > 0 || o.numTow.length > 1 || o.numOne.length > 2 ? i("showP", !0) : i("showP", !1)
            }
            )
        }
        ;
        return Lt( () => {}
        ),
        (c, u) => {
            const p = W("van-icon");
            return n(),
            a("div", Aw, [t("div", Mw, [E(e(c.$t("k3bet4Desc1")) + " ", 1), c.OddsList[23] ? (n(),
            a("span", Pw, "(" + e(c.OddsList[23].playRate ? c.OddsList[23].playRate : c.OddsList[23].playRate_Original) + ")", 1)) : $("v-if", !0), C(p, {
                onClick: u[0] || (u[0] = r => g(c.$t("k3bet4Desc2"), [1, 2, 4])),
                class: "icon",
                color: "#FA574A",
                size: "16",
                name: "question"
            })]), t("div", Dw, [(n(!0),
            a(S, null, G(c.numList, (r, b) => (n(),
            a("div", {
                class: B({
                    active: r.chackOne
                }),
                key: b,
                onClick: _ => l(r, b, 1)
            }, [t("div", null, e(r.num), 1)], 10, Ow))), 128))]), t("div", Ew, [E(e(c.$t("k3bet4Desc3")) + " ", 1), c.OddsList[24] ? (n(),
            a("span", qw, "(" + e(c.OddsList[24].playRate ? c.OddsList[24].playRate : c.OddsList[24].playRate_Original) + ")", 1)) : $("v-if", !0), C(p, {
                onClick: u[1] || (u[1] = r => g(c.$t("k3bet4Desc4"), [1, 2, 3])),
                class: "icon",
                color: "#FA574A",
                size: "16",
                name: "question"
            })]), t("div", {
                class: B(["K3B__C-betting4-btn", {
                    active: c.numChack
                }]),
                onClick: m
            }, e(c.$t("betPopDesc7")), 3), t("div", jw, [E(e(c.$t("k3bet4Desc5")) + " ", 1), c.OddsList[18] ? (n(),
            a("span", Hw, "(" + e(c.OddsList[18].playRate ? c.OddsList[18].playRate : c.OddsList[18].playRate_Original) + ")", 1)) : $("v-if", !0), C(p, {
                onClick: u[2] || (u[2] = r => g(c.$t("k3bet4Desc6"), [1, 2])),
                class: "icon",
                color: "#FA574A",
                size: "16",
                name: "question"
            })]), t("div", Ww, [(n(!0),
            a(S, null, G(c.numList, (r, b) => (n(),
            a("div", {
                class: B({
                    active: r.chackTow
                }),
                key: b,
                onClick: _ => l(r, b, 2)
            }, [t("div", null, e(r.num), 1)], 10, Fw))), 128))])])
        }
    }
});
const Uw = V(Vw, [["__scopeId", "data-v-bcf2c3f9"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/AllLotteryGames/K3/Betting4.vue"]])
  , Kw = s => (Nt("data-v-5f002ad4"),
s = s(),
zt(),
s)
  , Xw = {
    class: "Betting__Popup-body"
}
  , Qw = {
    key: 0,
    class: "Betting__Popup-type1"
}
  , Zw = {
    class: "title"
}
  , Yw = {
    class: "list"
}
  , Jw = {
    key: 0,
    class: "Betting__Popup-type2"
}
  , tT = {
    class: "title"
}
  , eT = {
    class: "list"
}
  , iT = {
    key: 1,
    class: "Betting__Popup-type2"
}
  , nT = {
    class: "title"
}
  , aT = {
    class: "list"
}
  , oT = ["innerHTML"]
  , sT = {
    key: 0,
    class: "Betting__Popup-type2"
}
  , lT = {
    class: "title"
}
  , cT = {
    class: "list"
}
  , rT = {
    key: 1,
    class: "title"
}
  , uT = {
    key: 2,
    class: "Betting__Popup-type2-r"
}
  , dT = {
    key: 0,
    class: "Betting__Popup-type2"
}
  , pT = {
    class: "title"
}
  , gT = {
    class: "list"
}
  , bT = {
    key: 1,
    class: "title"
}
  , mT = {
    key: 2,
    class: "Betting__Popup-type2-r"
}
  , _T = {
    key: 3,
    class: "Betting__Popup-type2"
}
  , vT = {
    class: "title"
}
  , kT = {
    class: "list"
}
  , hT = {
    class: "Betting__Popup-body-line"
}
  , fT = {
    class: "Betting__Popup-body-line-list"
}
  , yT = ["onClick"]
  , $T = {
    class: "Betting__Popup-body-line"
}
  , wT = {
    class: "Betting__Popup-body-line-btnL"
}
  , TT = {
    class: "Betting__Popup-body-line"
}
  , CT = Kw( () => t("div", null, null, -1))
  , LT = {
    class: "Betting__Popup-body-line-list"
}
  , NT = ["onClick"]
  , zT = {
    class: "Betting__Popup-body-line"
}
  , IT = {
    class: "Betting__Popup-foot"
}
  , xT = {
    class: "Betting__Popup-foot-s bgcolor"
}
  , ST = {
    class: "Betting__Popup-PreSale"
}
  , RT = {
    class: "Betting__Popup-PreSale-head"
}
  , BT = {
    class: "Betting__Popup-PreSale-body"
}
  , GT = {
    class: "Betting__Popup-PreSale-foot"
}
  , AT = F({
    __name: "BettingPopup",
    props: {
        currentInfo: {
            type: null,
            required: !0
        },
        currentGame: {
            type: null,
            required: !0
        },
        bettingPopupShow: {
            type: null,
            required: !0
        },
        betTypeList: {
            type: null,
            required: !0
        },
        betnumList: {
            type: Array,
            required: !0
        },
        numTow: {
            type: Array,
            required: !0
        },
        numOne: {
            type: Array,
            required: !0
        },
        actNav: {
            type: Number,
            required: !0
        },
        numTowList: {
            type: Array,
            required: !0
        },
        numChack: {
            type: null,
            required: !0
        }
    },
    emits: ["update:bettingPopupShow", "update:selectInfo", "clearBetting", "submitBetting"],
    setup(s, {expose: i, emit: o}) {
        const l = s
          , {t: g} = gt()
          , m = h(!1)
          , c = h(!0)
          , u = Q( () => l.currentGame.betMultiple.split("|"));
        At( () => l.bettingPopupShow, () => {
            p.value.coin = Number(l.betTypeList[0]),
            p.value.count = u.value[0]
        }
        );
        const p = h({
            coin: 0,
            count: u.value[0],
            allCoin: 0,
            gametype: 0,
            typeid: 1,
            issuenumber: "",
            selecttype: "1"
        });
        At( () => u, () => {
            p.value.count = u.value[0]
        }
        , {
            deep: !0,
            immediate: !0
        });
        let r = Q({
            get() {
                return y(),
                l.bettingPopupShow || !1
            },
            set(I) {
                o("update:bettingPopupShow", I)
            }
        });
        const b = I => {
            switch (I) {
            case 1:
                p.value.count > 1 && (p.value.count--,
                y());
                break;
            case 2:
                p.value.count++,
                y();
                break
            }
        }
          , _ = I => {
            I > 0 && (p.value.count = parseInt(I),
            y())
        }
          , w = I => {
            p.value.count = I,
            y()
        }
          , T = I => {
            p.value.coin = I,
            y()
        }
          , N = () => {
            m.value = !1,
            c.value = !0
        }
          , v = async () => {
            if (!c.value) {
                he(g("agreePresaleRules"));
                return
            }
            let {coin: I, count: R, selecttype: M} = p.value;
            if (R == 0)
                return Pt(g("bteNoCount"));
            let A = null
              , D = l.betnumList;
            if (l.actNav === 0 && l.betnumList.length) {
                A = k(l.betnumList),
                D.sort();
                for (let X = 0; D.length > X; X++)
                    D[X] == "A" && (D[X] = "H"),
                    D[X] == "B" && (D[X] = "L"),
                    D[X] == "C" && (D[X] = "O"),
                    D[X] == "D" && (D[X] = "E");
                M = D.join(",")
            } else if (l.actNav == 1) {
                let X = []
                  , rt = ""
                  , ht = "";
                if (D.length > 0) {
                    let st = [];
                    for (let at = 0; D.length > at; at++) {
                        let Y = "|" + D[at] + "|";
                        st.push(Y)
                    }
                    ht = st.join(","),
                    X.push(6)
                }
                if (l.numTowList.length > 0) {
                    let st = []
                      , at = [];
                    for (let Y = 0; l.numOne.length > Y; Y++) {
                        let _t = ":" + l.numOne[Y] + ":";
                        st.push(_t),
                        st = st.sort()
                    }
                    for (let Y = 0; l.numTow.length > Y; Y++) {
                        let _t = ":" + l.numTow[Y] + ":";
                        at.push(_t),
                        at = at.sort()
                    }
                    rt = at.join(",") + "," + st.join(","),
                    X.push(5)
                }
                X = X.sort( (st, at) => st - at),
                A = X.join(","),
                rt && (M = rt),
                ht && (M = ht),
                rt && ht && (M = rt + "," + ht)
            } else if (l.actNav == 2) {
                let X = []
                  , rt = ""
                  , ht = "";
                if (D.length > 0) {
                    let st = [];
                    for (let at = 0; D.length > at; at++) {
                        let Y = "|" + D[at] + "|";
                        st.push(Y),
                        st = st.sort()
                    }
                    rt = st.join(","),
                    X.push(7)
                }
                l.numChack && (ht = "|AAA|",
                X.push(8)),
                X = X.sort( (st, at) => st - at),
                A = X.join(","),
                rt && (M = rt),
                ht && (M = ht),
                rt && ht && (M = rt + "," + ht)
            } else if (l.actNav == 3) {
                let X = []
                  , rt = ""
                  , ht = ""
                  , st = "";
                if (l.numOne.length > 2) {
                    let at = [];
                    for (let Y = 0; l.numOne.length > Y; Y++) {
                        let _t = "|" + l.numOne[Y] + "|";
                        at.push(_t),
                        at = at.sort()
                    }
                    rt = at.join(","),
                    X.push(9)
                }
                if (l.numChack && (ht = "|ABC|",
                X.push(10)),
                l.numTow.length > 1) {
                    let at = [];
                    for (let Y = 0; l.numTow.length > Y; Y++) {
                        let _t = "." + l.numTow[Y] + ".";
                        at.push(_t),
                        at = at.sort()
                    }
                    st = at.join(","),
                    X.push(4)
                }
                X = X.sort( (at, Y) => at - Y),
                A = X.join(","),
                st && (M = st),
                rt && (M = rt),
                ht && (M = ht),
                rt && ht && (M = rt + "," + ht),
                st && rt && (M = st + "," + rt),
                st && ht && (M = st + "," + ht),
                st && rt && ht && (M = st + "," + rt + "," + ht)
            }
            const j = await nt(fa({
                amount: I,
                betCount: Number(R),
                gameType: A,
                selectType: M,
                typeId: l.currentGame.typeID,
                issuenumber: l.currentInfo.gameNo
            }));
            (j == null ? void 0 : j.code) === 0 ? (he(g("code" + (j == null ? void 0 : j.msgCode))),
            o("submitBetting", l.currentInfo.gameNo)) : o("clearBetting")
        }
          , k = I => {
            let R = [];
            for (let M = 0; I.length > M; M++) {
                if (I[M] == "3" || I[M] == "4" || I[M] == "5" || I[M] == "6" || I[M] == "7" || I[M] == "8" || I[M] == "9" || I[M] == "10" || I[M] == "11" || I[M] == "12" || I[M] == "13" || I[M] == "14" || I[M] == "15" || I[M] == "16" || I[M] == "17" || I[M] == "18") {
                    R.push(1);
                    continue
                }
                if (I[M] == "A" || I[M] == "B") {
                    R.push(2);
                    continue
                }
                if (I[M] == "C" || I[M] == "D") {
                    R.push(3);
                    continue
                }
            }
            return R = R.sort(function(M, A) {
                return M - A
            }),
            [...new Set(R)].join(",")
        }
          , y = () => {
            const I = l.betnumList.length + f() + (l.numChack ? 1 : 0) + z(l.numOne, 3) + z(l.numTow);
            p.value.allCoin = p.value.coin * p.value.count * I
        }
          , f = () => {
            const I = l.numTowList.length;
            return I && l.numTowList[0].split("|")[1].split(",").length * I
        }
          , z = (I, R=2) => {
            if (l.actNav != 3)
                return 0;
            function M(D) {
                let j = 1;
                for (let X = 2; X <= D; X++)
                    j *= X;
                return j
            }
            const A = I.length;
            return A < R ? 0 : M(A) / (M(R) * M(A - R))
        }
          , L = I => {
            switch (I) {
            case "A":
                return g("betBig");
            case "B":
                return g("betSmall");
            case "C":
                return g("betOdd");
            case "D":
                return g("betEven");
            default:
                return I
            }
        }
          , x = I => {
            let R = I.split("|")
              , M = "";
            return R.forEach(A => {
                M += `<div>${A}</div>`
            }
            ),
            M
        }
        ;
        return i({
            setAllCoin: y
        }),
        (I, R) => {
            const M = W("van-field")
              , A = W("van-popup")
              , D = Dt("throttle-click");
            return n(),
            a(S, null, [$(" 投注内容 begin "), C(A, {
                show: d(r),
                "onUpdate:show": R[6] || (R[6] = j => ue(r) ? r.value = j : r = j),
                position: "bottom",
                style: {
                    "box-shadow": "0px -18px 40px rgba(37, 37, 60, 0.26)"
                },
                round: !0,
                overlay: !1,
                "close-on-click-overlay": !1,
                "lock-scroll": !1
            }, {
                default: P( () => [t("div", Xw, [I.actNav === 0 && I.betnumList.length ? (n(),
                a("div", Qw, [t("p", Zw, e(I.$t("betPopDesc1")), 1), t("div", Yw, [(n(!0),
                a(S, null, G(I.betnumList, (j, X) => (n(),
                a("div", {
                    class: B(j % 2 === 0 ? "green" : "red num" + j),
                    key: X
                }, e(L(j)), 3))), 128))])])) : $("v-if", !0), I.actNav === 1 ? (n(),
                a(S, {
                    key: 1
                }, [I.betnumList.length ? (n(),
                a("div", Jw, [t("p", tT, e(I.$t("betPopDesc2")), 1), t("div", eT, [(n(!0),
                a(S, null, G(I.betnumList, (j, X) => (n(),
                a("div", {
                    key: X,
                    class: "Betting__Popup-type2-d"
                }, e(L(j)), 1))), 128))])])) : $("v-if", !0), I.numTowList.length ? (n(),
                a("div", iT, [t("p", nT, e(I.$t("betPopDesc3")), 1), t("div", aT, [(n(!0),
                a(S, null, G(I.numTowList, (j, X) => (n(),
                a("div", {
                    key: X,
                    class: "Betting__Popup-type2-o",
                    innerHTML: x(j)
                }, null, 8, oT))), 128))])])) : $("v-if", !0)], 64)) : $("v-if", !0), I.actNav === 2 ? (n(),
                a(S, {
                    key: 2
                }, [I.betnumList.length ? (n(),
                a("div", sT, [t("p", lT, e(I.$t("betPopDesc4")), 1), t("div", cT, [(n(!0),
                a(S, null, G(I.betnumList, (j, X) => (n(),
                a("div", {
                    key: X,
                    class: "Betting__Popup-type2-d"
                }, e(L(j)), 1))), 128))])])) : $("v-if", !0), I.numChack ? (n(),
                a("p", rT, e(I.$t("betPopDesc5")), 1)) : $("v-if", !0), I.numChack ? (n(),
                a("div", uT, e(I.$t("k3bet3Desc4")), 1)) : $("v-if", !0)], 64)) : $("v-if", !0), I.actNav === 3 ? (n(),
                a(S, {
                    key: 3
                }, [I.numOne.length > 2 ? (n(),
                a("div", dT, [t("p", pT, e(I.$t("betPopDesc6")), 1), t("div", gT, [(n(!0),
                a(S, null, G(I.numOne, (j, X) => (n(),
                a("div", {
                    key: X,
                    class: "Betting__Popup-type2-d"
                }, e(L(j)), 1))), 128))])])) : $("v-if", !0), I.numChack ? (n(),
                a("p", bT, e(I.$t("betPopDesc7")), 1)) : $("v-if", !0), I.numChack ? (n(),
                a("div", mT, e(I.$t("betPopDesc7")), 1)) : $("v-if", !0), I.numTow.length > 1 ? (n(),
                a("div", _T, [t("p", vT, e(I.$t("betPopDesc8")), 1), t("div", kT, [(n(!0),
                a(S, null, G(I.numTow, (j, X) => (n(),
                a("div", {
                    key: X,
                    class: "Betting__Popup-type2-d"
                }, e(L(j)), 1))), 128))])])) : $("v-if", !0)], 64)) : $("v-if", !0), t("div", hT, [E(e(d(g)("amount")) + " ", 1), t("div", fT, [(n(!0),
                a(S, null, G(I.betTypeList, (j, X) => (n(),
                a("div", {
                    key: X,
                    class: B(["Betting__Popup-body-line-item", {
                        bgcolor: p.value.coin == j
                    }]),
                    onClick: rt => T(j)
                }, e(j), 11, yT))), 128))])]), t("div", $T, [E(e(d(g)("numbers")) + " ", 1), t("div", wT, [t("div", {
                    class: B(["Betting__Popup-btn", {
                        bgcolor: p.value.count > 0
                    }]),
                    onClick: R[0] || (R[0] = j => b(1))
                }, "-", 2), C(M, {
                    class: "Betting__Popup-input",
                    modelValue: p.value.count,
                    "onUpdate:modelValue": R[1] || (R[1] = j => p.value.count = j),
                    type: "digit",
                    maxlength: 4,
                    onInput: _
                }, null, 8, ["modelValue"]), t("div", {
                    class: "Betting__Popup-btn bgcolor",
                    onClick: R[2] || (R[2] = j => b(2))
                }, "+")])]), t("div", TT, [CT, t("div", LT, [(n(!0),
                a(S, null, G(u.value, (j, X) => (n(),
                a("div", {
                    key: X,
                    class: B(["Betting__Popup-body-line-item", {
                        bgcolor: p.value.count == j
                    }]),
                    onClick: rt => w(j)
                }, " X" + e(j), 11, NT))), 128))])]), t("div", zT, [t("span", {
                    class: B(["Betting__Popup-agree", {
                        active: c.value
                    }]),
                    onClick: R[3] || (R[3] = j => c.value = !c.value)
                }, e(d(g)("agree")), 3), t("span", {
                    onClick: R[4] || (R[4] = j => m.value = !0),
                    class: "Betting__Popup-preSaleShow"
                }, e(d(g)("presaleRules")), 1)])]), t("div", IT, [t("div", {
                    class: "Betting__Popup-foot-c",
                    onClick: R[5] || (R[5] = j => o("clearBetting"))
                }, e(d(g)("cancel")), 1), dt((n(),
                a("div", xT, [E(e(d(g)("totalAmount")) + " " + e(d(Ct)(p.value.allCoin || 0)), 1)])), [[D, {
                    handler: v,
                    wait: 2e3
                }]])])]),
                _: 1
            }, 8, ["show"]), $(" 规则弹层 begin"), C(A, {
                show: m.value,
                "onUpdate:show": R[7] || (R[7] = j => m.value = j),
                "close-on-click-overlay": !1,
                round: ""
            }, {
                default: P( () => [t("div", ST, [t("div", RT, e(d(g)("presaleRules")), 1), t("div", BT, e(I.$t("betPopTXT")), 1), t("div", GT, [t("div", {
                    class: "Betting__Popup-PreSale-foot-btn",
                    onClick: N
                }, e(d(g)("iKonw")), 1)])])]),
                _: 1
            }, 8, ["show"])], 64)
        }
    }
});
const MT = V(AT, [["__scopeId", "data-v-5f002ad4"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/AllLotteryGames/K3/BettingPopup.vue"]])
  , PT = {
    class: "K3B__C"
}
  , DT = {
    class: "K3B__C-mark"
}
  , OT = {
    class: "K3B__C-nav"
}
  , ET = ["onClick"]
  , qT = {
    class: "qpopup-box"
}
  , jT = {
    class: "qpopup-box-list"
}
  , HT = {
    class: "qpopup-box-txt"
}
  , WT = F({
    __name: "Betting",
    props: {
        currentInfo: {
            type: Object,
            default: () => ({})
        },
        ProhibitBuyTime: {
            type: Number,
            default: 5
        },
        currentGame: {
            type: Object,
            default: () => ({})
        }
    },
    emits: ["betting", "changeBettingP"],
    setup(s, {expose: i, emit: o}) {
        const l = s
          , {t: g} = gt()
          , m = {
            bt1: uw,
            bt2: Cw,
            bt3: Gw,
            bt4: Uw
        }
          , c = h()
          , u = h()
          , p = h([])
          , r = h(0)
          , b = h([{
            name: g("totalBet"),
            comp: "bt1"
        }, {
            name: g("sameNum"),
            comp: "bt2"
        }, {
            name: g("numbersMatch"),
            comp: "bt3"
        }, {
            name: g("numbersUnmatch"),
            comp: "bt4"
        }])
          , _ = h([{
            num: 1,
            chack: !1,
            chackOne: !1,
            chackTow: !1
        }, {
            num: 2,
            chack: !1,
            chackOne: !1,
            chackTow: !1
        }, {
            num: 3,
            chack: !1,
            chackOne: !1,
            chackTow: !1
        }, {
            num: 4,
            chack: !1,
            chackOne: !1,
            chackTow: !1
        }, {
            num: 5,
            chack: !1,
            chackOne: !1,
            chackTow: !1
        }, {
            num: 6,
            chack: !1,
            chackOne: !1,
            chackTow: !1
        }])
          , w = h([])
          , T = h([])
          , N = h([])
          , v = h(!1)
          , k = h([])
          , y = h(!1)
          , f = Q( () => (l.currentInfo.passTime < l.ProhibitBuyTime && L(),
        l.currentInfo.passTime < l.ProhibitBuyTime))
          , z = Q( () => l.currentGame.scope ? l.currentGame.scope.split("|").map(st => Number(st)) : [])
          , L = () => {
            y.value = !1,
            x()
        }
          , x = () => {
            u.value.clearList && u.value.clearList(),
            w.value = [],
            T.value = [],
            N.value = [],
            v.value = !1,
            k.value = [],
            _.value = [{
                num: 1,
                chack: !1,
                chackOne: !1,
                chackTow: !1
            }, {
                num: 2,
                chack: !1,
                chackOne: !1,
                chackTow: !1
            }, {
                num: 3,
                chack: !1,
                chackOne: !1,
                chackTow: !1
            }, {
                num: 4,
                chack: !1,
                chackOne: !1,
                chackTow: !1
            }, {
                num: 5,
                chack: !1,
                chackOne: !1,
                chackTow: !1
            }, {
                num: 6,
                chack: !1,
                chackOne: !1,
                chackTow: !1
            }]
        }
          , I = async () => {
            const st = await nt(ks());
            p.value = (st == null ? void 0 : st.data) || []
        }
          , R = () => {
            c.value.setAllCoin()
        }
          , M = st => {
            r.value = st,
            y.value = !1,
            x()
        }
          , A = () => {
            let st = [];
            for (let at = 0; T.value.length > at; at++) {
                let Y = T.value[at]
                  , _t = [];
                for (let Bt = 0; N.value.length > Bt; Bt++)
                    _t.push(N.value[Bt]);
                if (_t.length > 0) {
                    let Bt = _t.sort().join(",");
                    st.push(Y + "|" + Bt)
                }
            }
            k.value = st.sort()
        }
          , D = async st => {
            o("betting", st),
            y.value = !1,
            x()
        }
          , j = h(!1)
          , X = h([])
          , rt = h("")
          , ht = (st, at) => {
            rt.value = st,
            X.value = at,
            j.value = !0
        }
        ;
        return Lt( () => {
            I()
        }
        ),
        i({
            bettingPopupShow: y
        }),
        (st, at) => {
            const Y = W("van-popup");
            return n(),
            a("div", PT, [dt(t("div", DT, [t("div", null, e(l.currentInfo.time3 || "0"), 1), t("div", null, e(l.currentInfo.time4 || "0"), 1)], 512), [[Yt, f.value]]), t("div", OT, [(n(!0),
            a(S, null, G(b.value, (_t, Bt) => (n(),
            a("div", {
                key: Bt,
                class: B({
                    active: r.value == Bt
                }),
                onClick: qt => M(Bt)
            }, e(_t.name), 11, ET))), 128))]), (n(),
            J(He(m[b.value[r.value].comp]), {
                ref_key: "BetRef",
                ref: u,
                OddsList: p.value,
                numList: _.value,
                numTow: T.value,
                numOne: N.value,
                numChack: v.value,
                betnumList: w.value,
                onSelectNum: A,
                onShowP: at[0] || (at[0] = _t => y.value = _t),
                onUpAll: R,
                onCNumChack: at[1] || (at[1] = _t => v.value = !v.value),
                onOnQuestion: ht
            }, null, 40, ["OddsList", "numList", "numTow", "numOne", "numChack", "betnumList"])), C(MT, {
                ref_key: "betPopupRef",
                ref: c,
                currentInfo: l.currentInfo,
                bettingPopupShow: y.value,
                numTow: T.value,
                numOne: N.value,
                betTypeList: z.value,
                numTowList: k.value,
                currentGame: s.currentGame,
                actNav: r.value,
                betnumList: w.value,
                numChack: v.value,
                onClearBetting: L,
                onSubmitBetting: D
            }, null, 8, ["currentInfo", "bettingPopupShow", "numTow", "numOne", "betTypeList", "numTowList", "currentGame", "actNav", "betnumList", "numChack"]), $(" 玩法提示 "), C(Y, {
                class: "qpopup",
                show: j.value,
                "onUpdate:show": at[2] || (at[2] = _t => j.value = _t),
                "close-on-click-overlay": !1,
                closeable: "",
                "close-icon": "close",
                "close-icon-position": "bottom-left",
                round: ""
            }, {
                default: P( () => [t("div", qT, [t("div", jT, [(n(!0),
                a(S, null, G(X.value, (_t, Bt) => (n(),
                a("div", {
                    class: B("num num" + _t),
                    key: Bt
                }, null, 2))), 128))]), t("div", HT, e(rt.value), 1)])]),
                _: 1
            }, 8, ["show"])])
        }
    }
});
const FT = V(WT, [["__scopeId", "data-v-8a4509d7"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/AllLotteryGames/K3/Betting.vue"]])
  , VT = {
    class: "GameRecord__C"
}
  , UT = {
    class: "GameRecord__C-head"
}
  , KT = {
    class: "GameRecord__C-body"
}
  , XT = {
    class: "GameRecord__C-body-premium"
}
  , QT = {
    key: 1,
    class: "GameRecord__C-body-empty"
}
  , ZT = {
    key: 0,
    class: "GameRecord__C-foot"
}
  , YT = {
    class: "GameRecord__C-foot-page"
}
  , JT = F({
    __name: "GameRecord",
    props: {
        typeid: {
            type: Number,
            required: !0
        }
    },
    setup(s, {expose: i}) {
        const o = s
          , l = h([])
          , g = h(4)
          , m = h(10)
          , c = h(1)
          , u = () => {
            c.value--,
            r()
        }
          , p = () => {
            c.value++,
            r()
        }
          , r = async (b=!1) => {
            if (o.typeid == null)
                return;
            b && (c.value = 1);
            const [_,w] = await ie(vn({
                pageSize: m.value,
                pageNo: c.value,
                typeId: o.typeid
            }));
            l.value = w.list || [],
            g.value = w.totalPage
        }
        ;
        return i({
            getData: r
        }),
        fe( () => {
            r()
        }
        ),
        (b, _) => {
            const w = W("van-col")
              , T = W("van-row")
              , N = W("van-icon");
            return n(),
            a("div", VT, [t("div", UT, [C(T, null, {
                default: P( () => [C(w, {
                    span: "10"
                }, {
                    default: P( () => [E(e(b.$t("gameRecordNum")), 1)]),
                    _: 1
                }), C(w, {
                    span: "4"
                }, {
                    default: P( () => [E(e(b.$t("gameRecordTotal")), 1)]),
                    _: 1
                }), C(w, {
                    span: "10"
                }, {
                    default: P( () => [E(e(b.$t("gameRecordResult")), 1)]),
                    _: 1
                })]),
                _: 1
            })]), t("div", KT, [l.value.length ? (n(!0),
            a(S, {
                key: 0
            }, G(l.value, (v, k) => (n(),
            J(T, {
                key: k
            }, {
                default: P( () => [C(w, {
                    span: "10"
                }, {
                    default: P( () => [E(e(v.issueNumber), 1)]),
                    _: 2
                }, 1024), C(w, {
                    span: "1"
                }, {
                    default: P( () => [t("span", null, e(v.sumCount), 1)]),
                    _: 2
                }, 1024), C(w, {
                    span: "3"
                }, {
                    default: P( () => [t("span", null, e(v.sumCount > 10 ? b.$t("big") : b.$t("small")), 1)]),
                    _: 2
                }, 1024), C(w, {
                    span: "3"
                }, {
                    default: P( () => [t("span", null, e(v.sumCount % 2 ? b.$t("k3Odd") : b.$t("k3Even")), 1)]),
                    _: 2
                }, 1024), C(w, {
                    span: "6"
                }, {
                    default: P( () => [t("div", XT, [(n(!0),
                    a(S, null, G(v.premium, (y, f) => (n(),
                    a("div", {
                        key: f,
                        class: B("n" + y)
                    }, null, 2))), 128))])]),
                    _: 2
                }, 1024)]),
                _: 2
            }, 1024))), 128)) : (n(),
            a("div", QT, [C(ge)]))]), l.value.length ? (n(),
            a("div", ZT, [t("div", {
                class: B(["GameRecord__C-foot-previous", {
                    disabled: c.value <= 1
                }]),
                onClick: u
            }, [C(N, {
                name: "arrow-left",
                class: "GameRecord__C-icon",
                size: "20"
            })], 2), t("div", YT, e(c.value) + "/" + e(g.value), 1), t("div", {
                class: B(["GameRecord__C-foot-next", {
                    disabled: c.value >= g.value
                }]),
                onClick: p
            }, [C(N, {
                name: "arrow",
                class: "GameRecord__C-icon",
                size: "20"
            })], 2)])) : $("v-if", !0)])
        }
    }
});
const tC = V(JT, [["__scopeId", "data-v-4e09079f"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/AllLotteryGames/K3/GameRecord.vue"]])
  , eC = {
    class: "Trend__C"
}
  , iC = {
    class: "Trend__C-head"
}
  , nC = {
    class: "Trend__C-body"
}
  , aC = {
    class: "Trend__C-body-premium"
}
  , oC = {
    class: "Trend__C-body-gameText"
}
  , sC = {
    key: 1,
    class: "Trend__C-body-empty"
}
  , lC = {
    key: 0,
    class: "Trend__C-foot"
}
  , cC = {
    class: "Trend__C-foot-page"
}
  , rC = F({
    __name: "Trend",
    props: {
        typeid: {
            type: Number,
            required: !0
        }
    },
    setup(s, {expose: i}) {
        const o = s
          , {t: l} = gt()
          , g = h([])
          , m = h(4)
          , c = h(10)
          , u = h(1)
          , p = () => {
            u.value--,
            b()
        }
          , r = () => {
            u.value++,
            b()
        }
          , b = async (T=!1) => {
            if (o.typeid == null)
                return;
            T && (u.value = 1);
            const [N,v] = await ie(vn({
                pageSize: c.value,
                pageNo: u.value,
                typeId: o.typeid
            }));
            g.value = v.list.map(k => {
                let y = [0, 0, 0, 0, 0, 0]
                  , f = k.premium.split("").map(Number)
                  , z = k.premium.split("").map(Number);
                for (let L = 0; y.length > L; L++)
                    y[f[L] - 1] = f[L];
                return k.Premiums = y,
                k.AllEqual = w(z),
                k
            }
            ) || [],
            m.value = v.totalPage
        }
          , _ = h([l("trendTXT1"), l("trendTXT2"), l("trendTXT3"), l("trendTXT4")])
          , w = T => {
            let N = [0, 0, 0, 0, 0, 0]
              , v = T.sort()
              , k = 2;
            for (let y = 0; y < v.length - 1; y++)
                v[y] == v[y + 1] && (N[v[y] - 1] = k++);
            return N
        }
        ;
        return i({
            getData: b
        }),
        fe( () => {
            b()
        }
        ),
        (T, N) => {
            const v = W("van-col")
              , k = W("van-row")
              , y = W("van-icon");
            return n(),
            a("div", eC, [t("div", iC, [C(k, null, {
                default: P( () => [C(v, {
                    span: "9"
                }, {
                    default: P( () => [E(e(T.$t("trendNumber")), 1)]),
                    _: 1
                }), C(v, {
                    span: "5"
                }, {
                    default: P( () => [E(e(T.$t("trendResult")), 1)]),
                    _: 1
                }), C(v, {
                    span: "10"
                }, {
                    default: P( () => [E(e(T.$t("trendNum")), 1)]),
                    _: 1
                })]),
                _: 1
            })]), t("div", nC, [g.value.length ? (n(!0),
            a(S, {
                key: 0
            }, G(g.value, (f, z) => (n(),
            J(k, {
                key: z
            }, {
                default: P( () => [C(v, {
                    span: "9"
                }, {
                    default: P( () => [E(e(f.issueNumber), 1)]),
                    _: 2
                }, 1024), C(v, {
                    span: "5"
                }, {
                    default: P( () => [t("div", aC, [(n(!0),
                    a(S, null, G(f.premium, (L, x) => (n(),
                    a("div", {
                        key: x,
                        class: B("n" + L)
                    }, null, 2))), 128))])]),
                    _: 2
                }, 1024), C(v, {
                    span: "10"
                }, {
                    default: P( () => [t("div", oC, [t("span", null, e(_.value[f.gameType]), 1)])]),
                    _: 2
                }, 1024)]),
                _: 2
            }, 1024))), 128)) : (n(),
            a("div", sC, [C(ge)]))]), g.value.length ? (n(),
            a("div", lC, [t("div", {
                class: B(["Trend__C-foot-previous", {
                    disabled: u.value <= 1
                }]),
                onClick: p
            }, [C(y, {
                name: "arrow-left",
                class: "Trend__C-icon",
                size: "20"
            })], 2), t("div", cC, e(u.value) + "/" + e(m.value), 1), t("div", {
                class: B(["Trend__C-foot-next", {
                    disabled: u.value >= m.value
                }]),
                onClick: r
            }, [C(y, {
                name: "arrow",
                class: "Trend__C-icon",
                size: "20"
            })], 2)])) : $("v-if", !0)])
        }
    }
});
const uC = V(rC, [["__scopeId", "data-v-4159c83a"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/AllLotteryGames/K3/Trend.vue"]])
  , dC = {
    key: 1,
    class: "WinningTip__C-body-l1"
}
  , pC = {
    class: "WinningTip__C-body-l2"
}
  , gC = {
    class: "line1"
}
  , bC = {
    class: "line2"
}
  , mC = {
    class: "yuan"
}
  , _C = {
    class: "WinningTip__C-body-l3"
}
  , vC = {
    key: 0,
    class: "isLose"
}
  , kC = {
    class: "head"
}
  , hC = {
    class: "bonus"
}
  , fC = {
    class: "gameDetail"
}
  , yC = {
    class: "WinningTip__C-body-l4"
}
  , $C = ["onClick"]
  , wC = F({
    __name: "WinningTips",
    setup(s, {expose: i}) {
        const o = Q( () => m.value[0] ? m.value[0].state == 0 : !1)
          , l = Q( () => m.value[0] || {})
          , g = h(!1)
          , m = h([]);
        let c = h();
        const u = () => {
            clearTimeout(c.value),
            m.value.shift(),
            g.value && m.value.length && (c.value = setTimeout( () => {
                u()
            }
            , 1e3 * 3))
        }
          , p = () => {
            g.value = !g.value,
            g.value ? c.value = setTimeout( () => {
                u()
            }
            , 1e3 * 3) : clearTimeout(c.value)
        }
          , r = _ => {
            _.list = _.premium.split(""),
            _.sum = Number(_.list[0]) + Number(_.list[1]) + Number(_.list[2]),
            m.value.push(_),
            g.value && (c.value = setTimeout( () => {
                u()
            }
            , 1e3 * 3))
        }
          , b = () => {
            m.value = []
        }
        ;
        return i({
            showMark: r
        }),
        (_, w) => {
            const T = W("van-icon");
            return dt((n(),
            a("div", {
                class: "WinningTip__C",
                onClick: u
            }, [t("div", {
                class: B(["WinningTip__C-body", {
                    isL: o.value
                }])
            }, [o.value ? (n(),
            a("div", {
                key: 0,
                class: B(["WinningTip__C-body-l1", {
                    isL: o.value
                }])
            }, e(_.$t("k3WarningTip1")), 3)) : (n(),
            a("div", dC, e(_.$t("k3WarningTip2")), 1)), t("div", pC, [t("div", gC, [(n(!0),
            a(S, null, G(l.value.list, (N, v) => (n(),
            a("div", {
                class: B(["n" + N])
            }, null, 2))), 256))]), t("div", bC, [t("div", null, e(l.value.premium), 1), t("div", mC, e(l.value.sum > 10 ? _.$t("big") : _.$t("small")), 1), t("div", null, e(l.value.sum % 2 ? _.$t("k3Odd") : _.$t("k3Even")), 1)])]), t("div", _C, [o.value ? (n(),
            a("div", vC, e(_.$t("k3WarningTip3")), 1)) : (n(),
            a(S, {
                key: 1
            }, [t("div", kC, e(_.$t("k3WarningTip4")), 1), t("div", hC, e(d(Ct)(Number(l.value.winAmount))), 1)], 64)), t("div", fC, e(_.$t("k3WarningTip5")) + e(l.value.typeName) + " " + e(l.value.issueNumber), 1)]), t("div", yC, [t("div", {
                class: B(["acitveBtn", {
                    active: g.value
                }]),
                onClick: ne(p, ["stop"])
            }, null, 10, $C), E(" " + e(_.$t("autoShutOff3s")), 1)]), t("div", {
                class: "closeBtn",
                onClick: b
            }), dt(C(T, {
                name: "arrow",
                color: "#fff",
                size: "30px",
                class: "arrowBtn",
                onClick: ne(u, ["stop"])
            }, null, 8, ["onClick"]), [[Yt, m.value.length > 1]])], 2)], 512)), [[Yt, m.value.length]])
        }
    }
});
const TC = V(wC, [["__scopeId", "data-v-2d418cc5"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/AllLotteryGames/K3/WinningTips.vue"]])
  , CC = {
    class: "K3__C"
}
  , LC = {
    class: "K3__C-head-more"
}
  , NC = F({
    __name: "index",
    setup(s) {
        const i = {
            GameRecord: tC,
            Trend: uC,
            MyGameRecord: ja
        }
          , o = h()
          , l = h()
          , g = h()
          , m = h(!1)
          , c = h("GameRecord")
          , u = ct()
          , p = ye();
        let r = Et([]);
        const b = h(0)
          , _ = h(localStorage.getItem("volumeShow") || "1")
          , w = h(!1)
          , T = h([])
          , N = h(null)
          , v = h({
            gameNo: "loading",
            currentTime: "",
            beginTime: "",
            passTime: 180,
            time1: 0,
            time2: 0,
            time3: 0,
            time4: 0
        })
          , k = h("666")
          , y = h(5)
          , f = h("")
          , z = h(!1)
          , L = h(null)
          , x = Q( () => p.k3[b.value] || {})
          , I = Pe()
          , R = Q( () => I.getIsShowLotteryDragon)
          , A = Ze().query.typeId;
        Lt( () => {
            rt()
        }
        ),
        Ve( () => {
            clearInterval(N.value),
            clearInterval(Ot.value),
            Tt.value.forEach(O => {
                clearInterval(O)
            }
            ),
            Z.value && clearTimeout(Z.value)
        }
        ),
        At( () => De().visibility, O => {
            O === 0 ? clearInterval(N.value) : rt(b.value)
        }
        );
        const D = () => {
            u.go(-1),
            sessionStorage.setItem("clickedGameType", "lottery")
        }
          , j = () => {
            _.value == "1" ? _.value = "2" : _.value = "1",
            localStorage.setItem("volumeShow", _.value)
        }
          , X = O => {
            u.push({
                name: O
            })
        }
          , rt = async (O=null) => {
            await p.getK3Data(),
            r = p.getK3;
            const it = r.findIndex(ft => ft.typeID == A);
            L.value == null && !A ? st(0) : st(O ?? it)
        }
          , ht = async (O, it=!1) => {
            const ft = await nt(fs({
                typeId: O
            }));
            ft && (k.value = ft.data.premium,
            it && yt(k.value))
        }
          , st = O => {
            p.getK3Data(),
            b.value = O,
            L.value = r[O].typeID,
            at(L.value),
            Jt( () => {
                o.value.getData(L.value)
            }
            )
        }
          , at = async (O, it=!1) => {
            ht(O, it);
            const [ft,Gt] = await ie(hs({
                typeId: O
            }));
            v.value.gameNo = Gt.issueNumber,
            v.value.currentTime = Gt.serviceTime.replace(/-/g, "/"),
            v.value.beginTime = Gt.startTime.replace(/-/g, "/"),
            Y()
        }
          , Y = () => {
            if (!r.length)
                return;
            var O = new Date(v.value.currentTime).getTime()
              , it = new Date(v.value.beginTime).getTime();
            let ft = (O - it) / 1e3
              , Gt = r[b.value];
            if (ft > Gt.intervalM * 60 && (ft = Gt.intervalM * 60),
            v.value.passTime = Gt.intervalM * 60 - ft,
            v.value.passTime < 0) {
                f.value = "An error occurred, please contact customer service。The game time is " + Gt.intervalM + " minutes,start time is " + v.value.beginTime + ",current time is" + v.value.currentTime + "!",
                w.value = !0;
                return
            }
            _t()
        }
          , _t = () => {
            clearInterval(N.value),
            Bt(!1),
            N.value = setInterval(function() {
                Bt()
            }, 1e3)
        }
          , Bt = (O=!0) => {
            if (v.value.passTime <= y.value && (z.value = !1),
            _.value == "1" && (v.value.passTime <= y.value && v.value.passTime > 1 ? qt(1) : v.value.passTime == 1 && qt(2)),
            v.value.passTime > 0) {
                let it = v.value.passTime;
                v.value.time2 = Math.floor(it / 60),
                v.value.time3 = Math.floor(it % 60 / 10),
                v.value.time4 = Math.floor(it % 10),
                v.value.passTime--
            } else
                clearInterval(N.value),
                O && bt()
        }
          , qt = (O=1) => {
            const it = document.getElementById(`voice${O}`);
            it && it.play()
        }
          , bt = () => {
            at(L.value, !0),
            g.value.getWinsUserAmount(!1),
            o.value.getData(!0)
        }
          , Ot = h(null)
          , Vt = (O, it) => {
            if (O >= 0 && it > 0 && it >= O) {
                let ft = it - O + 1;
                return Math.floor(Math.random() * ft + O)
            } else
                return 0
        }
          , yt = O => {
            Ot.value || (Ot.value = setInterval(function() {
                for (var it = [], ft = 0; 3 > ft; ft++)
                    it.push(Vt(1, 6));
                k.value = it.join("")
            }, 50)),
            setTimeout(function() {
                clearInterval(Ot.value),
                k.value = O,
                Ot.value = null
            }, 2e3)
        }
          , wt = h({})
          , Tt = h([])
          , $t = O => {
            if (g.value.getWinsUserAmount(!1),
            o.value.getData(),
            wt.value[O])
                return;
            wt.value[O] = !0;
            const {time1: it, time2: ft, time3: Gt, time4: ve} = v.value
              , ae = (it * 10 * 60 + ft * 60 + Gt * 10 + ve) * 1e3;
            Tt.value[x.value.intervalM] = setTimeout( () => {
                tt(O)
            }
            , ae)
        }
          , ot = O => {
            m.value = O
        }
          , Z = h(null)
          , tt = async O => {
            const it = await nt(ys({
                issueNumber: O
            }));
            if (it) {
                if (!(it.data.state != 2)) {
                    Z.value = setTimeout( () => {
                        tt(O)
                    }
                    , 2e3);
                    return
                }
                l.value.showMark(it.data),
                delete wt.value[O]
            }
        }
        ;
        return (O, it) => {
            const ft = W("NavBar");
            return n(),
            a("div", CC, [C(ft, {
                "left-arrow": "",
                onClickLeft: D,
                class: "main",
                headLogo: !0
            }, {
                right: P( () => [t("div", LC, [t("div", {
                    onClick: it[0] || (it[0] = Gt => X("CustomerService"))
                }), t("div", {
                    class: B({
                        disableVoice: _.value == "2"
                    }),
                    onClick: j
                }, null, 2)])]),
                _: 1
            }), $(" 钱包余额 "), C(Mi, {
                ref_key: "WallteRef",
                ref: g
            }, null, 512), C(wi, {
                siteMsg: T.value,
                key: "k3"
            }, null, 8, ["siteMsg"]), $(" 游戏类型 "), C(Pi, {
                gameList: d(r),
                currentGameIndex: b.value,
                onChangeGame: st
            }, null, 8, ["gameList", "currentGameIndex"]), $(" 游戏开始时间倒计时 "), C(iw, {
                currentInfo: v.value,
                premium: k.value,
                currentGame: x.value
            }, null, 8, ["currentInfo", "premium", "currentGame"]), $(" 投注表 "), C(FT, {
                currentInfo: v.value,
                currentGame: x.value,
                VoiceType: _.value,
                typeid: L.value,
                onBetting: $t,
                onChangeBettingP: ot
            }, null, 8, ["currentInfo", "currentGame", "VoiceType", "typeid"]), $(" 记录导航 "), C(Oi, {
                record: c.value,
                onChangeC: it[1] || (it[1] = Gt => c.value = Gt)
            }, null, 8, ["record"]), $(" 动态展示对应的组件 "), (n(),
            J(Ue, null, [(n(),
            J(He(i[c.value]), {
                ref_key: "RecordComponent",
                ref: o,
                typeid: L.value,
                ApiFun: d(_n),
                listApi: d(vn),
                EmerdApi: d(ya),
                goPathName: "AllLotteryGames-BettingRecordK3"
            }, null, 8, ["typeid", "ApiFun", "listApi", "EmerdApi"]))], 1024)), $(" 弹窗组件 "), C(Re, {
                show: w.value,
                onConfirm: it[2] || (it[2] = Gt => X("/login"))
            }, {
                content: P( () => [t("div", null, e(f.value), 1)]),
                _: 1
            }, 8, ["show"]), $(" 中奖提示组件 "), C(TC, {
                ref_key: "WinningTipsRef",
                ref: l
            }, null, 512), R.value ? (n(),
            J(Ei, {
                key: 0
            })) : $("v-if", !0), C(qi)])
        }
    }
});
const zC = V(NC, [["__scopeId", "data-v-d024c659"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/home/AllLotteryGames/K3/index.vue"]])
  , yG = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: zC
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Wi = s => (Nt("data-v-35613996"),
s = s(),
zt(),
s)
  , IC = {
    class: "TimeLeft__C"
}
  , xC = {
    class: "box"
}
  , SC = {
    class: "tit"
}
  , RC = {
    class: "citycon"
}
  , BC = Wi( () => t("div", {
    class: "citybg"
}, null, -1))
  , GC = {
    class: "font30"
}
  , AC = {
    class: "playmethod"
}
  , MC = {
    key: 0,
    class: "odds"
}
  , PC = Wi( () => t("div", {
    class: "line"
}, "|", -1))
  , DC = {
    class: "odd"
}
  , OC = {
    key: 1,
    class: "color8"
}
  , EC = {
    class: "bettingcut"
}
  , qC = {
    class: "font22"
}
  , jC = {
    class: "info"
}
  , HC = Wi( () => t("div", {
    class: "illustratebg"
}, null, -1))
  , WC = {
    class: "font24"
}
  , FC = {
    class: "issue"
}
  , VC = Wi( () => t("div", {
    class: "issuebg"
}, null, -1))
  , UC = {
    class: "font26"
}
  , KC = {
    class: "closure"
}
  , XC = {
    class: "closuretime"
}
  , QC = {
    class: "closurtimes"
}
  , ZC = F({
    __name: "TimeLeft",
    props: {
        defaultcityname: {
            type: String,
            default: ""
        },
        defaultplayname: {
            type: String,
            default: ""
        },
        defaultexpiredate: {
            type: String,
            default: ""
        },
        issue: {
            type: String,
            default: ""
        },
        time: {
            type: String,
            default: ""
        },
        odds: {
            type: Number,
            default: 0
        },
        colorId: {
            type: Number,
            default: 0
        },
        areId: {
            type: Number,
            default: 0
        }
    },
    setup(s) {
        const i = s
          , o = ct()
          , l = () => {
            o.push({
                name: "AllLotteryGames-Play",
                query: {
                    id: i.areId,
                    gVSs: 1
                }
            })
        }
        ;
        return (g, m) => (n(),
        a("div", IC, [t("div", xC, [t("div", SC, [t("div", RC, [BC, t("div", GC, e(s.defaultcityname), 1)]), t("div", AC, e(g.$t("code" + s.defaultplayname)), 1), s.colorId != 8 ? (n(),
        a("div", MC, [t("div", null, e(g.$t("odds")), 1), PC, t("div", DC, "1:" + e(s.odds), 1)])) : $("v-if", !0), s.colorId == 8 ? (n(),
        a("div", OC)) : $("v-if", !0), t("div", EC, [t("div", qC, e(g.$t("xosoTxt91")), 1), t("div", null, e(s.defaultexpiredate), 1)])]), t("div", jC, [t("div", {
            class: "playillustrate",
            onClick: l
        }, [HC, t("div", WC, e(g.$t("lotteryManual")), 1)]), t("div", FC, [VC, t("div", UC, e(s.issue), 1)]), t("div", KC, [t("div", XC, e(g.$t("xosoTxt92")), 1), t("div", QC, [(n(!0),
        a(S, null, G(s.time.split(""), (c, u) => (n(),
        a("div", {
            class: B(c == ":" ? "red" : "redsqure"),
            key: u
        }, e(c), 3))), 128))])])])])]))
    }
});
const YC = V(ZC, [["__scopeId", "data-v-35613996"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/AllLotteryGames/NewVietnam/TimeLeft.vue"]])
  , Tn = s => (Nt("data-v-9adf5430"),
s = s(),
zt(),
s)
  , JC = {
    class: "TimeLeft__C"
}
  , t6 = {
    class: "box"
}
  , e6 = {
    class: "tit"
}
  , i6 = {
    class: "citycon"
}
  , n6 = Tn( () => t("div", {
    class: "citybg"
}, null, -1))
  , a6 = {
    class: "font30"
}
  , o6 = {
    key: 0,
    class: "playmethod"
}
  , s6 = {
    class: "odd"
}
  , l6 = {
    class: "odds"
}
  , c6 = {
    class: "result"
}
  , r6 = {
    class: "info"
}
  , u6 = Tn( () => t("div", {
    class: "illustratebg"
}, null, -1))
  , d6 = {
    class: "font24"
}
  , p6 = {
    class: "issue"
}
  , g6 = Tn( () => t("div", {
    class: "issuebg"
}, null, -1))
  , b6 = {
    class: "font26"
}
  , m6 = {
    class: "closure isShowPreparing"
}
  , _6 = {
    class: "closure"
}
  , v6 = {
    class: "closuretime"
}
  , k6 = {
    class: "closurtimes"
}
  , h6 = F({
    __name: "TimeLeftF",
    props: {
        defaultcityname: {
            type: String,
            default: ""
        },
        defaultplayname: {
            type: String,
            default: ""
        },
        issue: {
            type: String,
            default: ""
        },
        time: {
            type: String,
            default: ""
        },
        odds: {
            type: Number,
            default: 0
        },
        colorId: {
            type: Number,
            default: 0
        },
        areId: {
            type: Number,
            default: 0
        },
        resultList: {
            type: Object,
            default: {}
        },
        isShowPreparing: {
            type: Boolean,
            defauft: !1
        }
    },
    setup(s) {
        const i = s
          , o = ct()
          , l = Q( () => {
            var c, u;
            let m = (c = i.resultList) != null && c.openingResult ? (u = i.resultList) == null ? void 0 : u.openingResult.find(p => p.resultType == 0).result : "";
            return Array.isArray(m) && (m = m[0]),
            m
        }
        )
          , g = () => {
            o.push({
                name: "AllLotteryGames-Play",
                query: {
                    id: i.areId,
                    gVSs: 2
                }
            })
        }
        ;
        return (m, c) => {
            var u;
            return n(),
            a("div", JC, [t("div", t6, [t("div", e6, [t("div", i6, [n6, t("div", a6, e(s.defaultcityname), 1)]), s.colorId != 8 ? (n(),
            a("div", o6, [t("div", null, "(" + e(m.$t("code" + s.defaultplayname)) + ")", 1), t("div", s6, "1:" + e(s.odds), 1)])) : $("v-if", !0), t("div", l6, [t("div", null, e(m.$t("betResult")), 1), t("div", null, e((u = s.resultList) == null ? void 0 : u.issueNumber), 1), t("div", c6, [(n(!0),
            a(S, null, G(l.value.split(""), (p, r) => (n(),
            a("span", {
                key: r
            }, e(p), 1))), 128))])])]), t("div", r6, [t("div", {
                class: "playillustrate",
                onClick: g
            }, [u6, t("div", d6, e(m.$t("lotteryManual")), 1)]), t("div", p6, [g6, t("div", b6, e(s.issue), 1)]), t("div", m6, e(m.$t("preparing")), 1), t("div", _6, [t("div", v6, e(m.$t("xosoTxt91")), 1), t("div", k6, [(n(!0),
            a(S, null, G(s.time.split(""), (p, r) => (n(),
            a("div", {
                class: B(p == ":" ? "red" : "redsqure"),
                key: r
            }, e(p), 3))), 128))])])])])])
        }
    }
});
const f6 = V(h6, [["__scopeId", "data-v-9adf5430"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/AllLotteryGames/NewVietnam/TimeLeftF.vue"]])
  , y6 = {
    class: "ColorsContainer"
}
  , $6 = F({
    __name: "ColorsAndPlay",
    props: {
        gameCategoryList: {
            type: Array,
            default: () => []
        },
        colortab: {
            type: Number,
            default: 0
        },
        playtab: {
            type: Number,
            default: 0
        }
    },
    emits: ["colorupdate", "update"],
    setup(s, {emit: i}) {
        const o = s
          , l = h(o.colortab)
          , g = h(o.playtab)
          , m = Q( () => {
            var p;
            return ((p = o.gameCategoryList[l.value]) == null ? void 0 : p.gamePlayList) || []
        }
        );
        function c(p) {
            i("colorupdate", p.item.categoryId, p.index)
        }
        function u({item: p, index: r}) {
            i("update", p.playId, r, p.playNameCode, p.betType)
        }
        return At( () => o.playtab, () => {
            g.value = o.playtab
        }
        ),
        At( () => o.colortab, () => {
            l.value = o.colortab
        }
        ),
        (p, r) => (n(),
        a("div", y6, [C(ui, {
            list: s.gameCategoryList,
            active: l.value,
            "onUpdate:active": r[0] || (r[0] = b => l.value = b),
            tabClassName: "ColorsMethod",
            onOnClickTab: c
        }, {
            default: P( ({item: b, index: _}) => [t("div", {
                class: B(["coloritem", {
                    active: _ === l.value
                }])
            }, e(p.$t("code" + b.categoryNameCode)), 3)]),
            _: 1
        }, 8, ["list", "active"]), C(ui, {
            list: m.value,
            active: g.value,
            "onUpdate:active": r[1] || (r[1] = b => g.value = b),
            tabClassName: "PlayMethod",
            onOnClickTab: u
        }, {
            default: P( ({item: b, index: _}) => [t("div", {
                class: B(["playitem", {
                    active: _ === g.value
                }])
            }, e(p.$t("code" + b.playNameCode)), 3)]),
            _: 1
        }, 8, ["list", "active"])]))
    }
});
const w6 = V($6, [["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/AllLotteryGames/NewVietnam/ColorsAndPlay.vue"]])
  , Fi = s => (Nt("data-v-cca50955"),
s = s(),
zt(),
s)
  , T6 = {
    class: "NumberSelectContainer"
}
  , C6 = {
    class: "NumberSelectContainer-mark"
}
  , L6 = {
    class: "NumberTabContent"
}
  , N6 = {
    key: 0,
    class: "selectcontainer"
}
  , z6 = {
    class: "selectbutton"
}
  , I6 = {
    class: "selectcontent"
}
  , x6 = {
    class: "selectheader"
}
  , S6 = {
    class: "selectball"
}
  , R6 = ["onClick"]
  , B6 = {
    key: 1,
    class: "selectcontainer"
}
  , G6 = {
    class: "selectbutton"
}
  , A6 = {
    class: "selectcontent"
}
  , M6 = {
    class: "selectheader"
}
  , P6 = {
    class: "selectball"
}
  , D6 = ["onClick"]
  , O6 = {
    key: 2,
    class: "selectcontainer"
}
  , E6 = {
    class: "selectbutton"
}
  , q6 = {
    class: "selectcontent"
}
  , j6 = {
    class: "selectheader"
}
  , H6 = {
    class: "selectball"
}
  , W6 = ["onClick"]
  , F6 = {
    key: 3,
    class: "selectcontainer"
}
  , V6 = {
    class: "selectbutton"
}
  , U6 = {
    class: "selectcontent"
}
  , K6 = {
    class: "selectheader"
}
  , X6 = {
    class: "selectball"
}
  , Q6 = ["onClick"]
  , Z6 = {
    class: "quickcontainer"
}
  , Y6 = {
    key: 0,
    class: "intervalcontainer"
}
  , J6 = ["onClick"]
  , t4 = {
    key: 1,
    class: "randomcontainer"
}
  , e4 = {
    class: "randomheader"
}
  , i4 = Fi( () => t("div", {
    class: "redline"
}, null, -1))
  , n4 = {
    class: "font30"
}
  , a4 = {
    class: "randombutton"
}
  , o4 = ["onClick"]
  , s4 = {
    key: 2,
    class: "specialcontainer"
}
  , l4 = {
    class: "specialheader"
}
  , c4 = Fi( () => t("div", {
    class: "redline"
}, null, -1))
  , r4 = {
    class: "font30"
}
  , u4 = {
    class: "specialbutton"
}
  , d4 = {
    class: "Ntit"
}
  , p4 = Fi( () => t("br", null, null, -1))
  , g4 = Fi( () => t("br", null, null, -1))
  , b4 = {
    class: "list"
}
  , m4 = ["onClick"]
  , _4 = F({
    __name: "NumberSelect",
    props: {
        methodList: {
            type: String,
            default: ""
        },
        activeTab: {
            type: Number,
            default: 0
        },
        randomList: {
            type: Array,
            default: () => {}
        },
        randomtype: {
            type: Number,
            default: 0
        },
        specialtype: {
            type: Number,
            default: 0
        },
        isthreenumber: {
            type: Number,
            default: 0
        },
        speciaSelectNo: {
            type: String,
            default: ""
        },
        isShowMark: {
            type: Boolean,
            default: !1
        },
        hundred: {
            type: String,
            default: ""
        },
        betconfig: {
            type: String,
            default: ""
        },
        groupTab: {
            type: Number,
            default: 30
        },
        thousandnumList: {
            type: Array,
            default: []
        },
        hundrednumList: {
            type: Array,
            default: []
        },
        tennumList: {
            type: Array,
            default: []
        },
        indicualnumList: {
            type: Array,
            default: []
        },
        quicknumList: {
            type: Array,
            default: []
        },
        intervalnumber: {
            type: Array,
            default: []
        },
        intervalTab: {
            type: Number,
            default: 0
        }
    },
    emits: ["tabupdate", "selectgroup", "selectspecial", "betNum", "betQuickNum", "getselect", "getquick", "selectinterval"],
    setup(s, {expose: i, emit: o}) {
        const l = s
          , {t: g} = gt()
          , m = [{
            name: g("selectNo"),
            value: 1
        }, {
            name: g("xosoTxt81"),
            value: 3
        }, {
            name: g("xosoTxt80"),
            value: 2
        }]
          , c = Q( () => m.filter(z => {
            var L;
            return (L = l.methodList) == null ? void 0 : L.includes(z.value + "")
        }
        ))
          , u = h(0)
          , p = h("")
          , r = h(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"])
          , b = ({item: z}) => {
            o("tabupdate", z.value)
        }
          , _ = (z, L, x) => {
            o("selectgroup", z, L, x)
        }
          , w = (z, L) => {
            o("betNum", z, L)
        }
          , T = (z, L, x) => {
            o("betQuickNum", z, L, x)
        }
          , N = (z, L, x, I) => {
            o("getselect", z, L, x, I)
        }
          , v = (z, L) => {
            o("getquick", z, L)
        }
          , k = (z, L) => {
            o("selectinterval", z, L)
        }
          , y = z => {
            z.target.value != "" && o("inputblur", z.target.value)
        }
          , f = () => {
            p.value = ""
        }
        ;
        return At( () => l.activeTab, async () => {
            await Jt();
            const z = c.value.findIndex(L => L.value == l.activeTab);
            z !== -1 && (u.value = z)
        }
        ),
        i({
            cleardata: f
        }),
        (z, L) => {
            var I, R, M, A;
            const x = W("van-field");
            return n(),
            a("div", T6, [dt(t("div", C6, [t("div", null, e(d(g)("nomorebet")), 1)], 512), [[Yt, s.isShowMark]]), c.value.length > 0 ? (n(),
            J(ui, {
                key: 0,
                list: c.value,
                active: u.value,
                "onUpdate:active": L[0] || (L[0] = D => u.value = D),
                tabClassName: "NumberTab",
                onOnClickTab: b
            }, {
                default: P( ({item: D, index: j}) => [t("div", {
                    class: B(["tabitem", {
                        active: D.value === s.activeTab
                    }])
                }, e(D.name), 3)]),
                _: 1
            }, 8, ["list", "active"])) : $("v-if", !0), t("div", L6, [dt(t("div", null, [$("选择号码"), (I = s.betconfig) != null && I.includes("4") ? (n(),
            a("div", N6, [t("div", z6, [t("div", {
                class: "selectall",
                onClick: L[1] || (L[1] = D => N("Thousand", 0, 9, "all"))
            }, e(d(g)("all")), 1), t("div", {
                class: "selectbig",
                onClick: L[2] || (L[2] = D => N("Thousand", 0, 9, "big"))
            }, e(d(g)("big")), 1), t("div", {
                class: "selectsmall",
                onClick: L[3] || (L[3] = D => N("Thousand", 0, 9, "small"))
            }, e(d(g)("small")), 1), t("div", {
                class: "selectodd",
                onClick: L[4] || (L[4] = D => N("Thousand", 0, 9, "odd"))
            }, e(d(g)("xosoTxt71")), 1), t("div", {
                class: "selecteven",
                onClick: L[5] || (L[5] = D => N("Thousand", 0, 9, "even"))
            }, e(d(g)("xosoTxt70")), 1)]), t("div", I6, [t("div", x6, e(d(g)("xosoTxt87")), 1), t("div", S6, [(n(!0),
            a(S, null, G(r.value, (D, j) => (n(),
            a("div", {
                key: j,
                onClick: X => w("Thousand", D)
            }, [t("div", {
                class: B(s.thousandnumList.includes(D) ? "ball action " : "ball")
            }, e(D), 3)], 8, R6))), 128))])])])) : $("v-if", !0), (R = s.betconfig) != null && R.includes("3") ? (n(),
            a("div", B6, [t("div", G6, [t("div", {
                class: "selectall",
                onClick: L[6] || (L[6] = D => N("hundred", 0, 9, "all"))
            }, e(d(g)("all")), 1), t("div", {
                class: "selectbig",
                onClick: L[7] || (L[7] = D => N("hundred", 0, 9, "big"))
            }, e(d(g)("big")), 1), t("div", {
                class: "selectsmall",
                onClick: L[8] || (L[8] = D => N("hundred", 0, 9, "small"))
            }, e(d(g)("small")), 1), t("div", {
                class: "selectodd",
                onClick: L[9] || (L[9] = D => N("hundred", 0, 9, "odd"))
            }, e(d(g)("xosoTxt71")), 1), t("div", {
                class: "selecteven",
                onClick: L[10] || (L[10] = D => N("hundred", 0, 9, "even"))
            }, e(d(g)("xosoTxt70")), 1)]), t("div", A6, [t("div", M6, e(d(g)("xosoTxt88")), 1), t("div", P6, [(n(!0),
            a(S, null, G(r.value, (D, j) => (n(),
            a("div", {
                key: j,
                onClick: X => w("Hundred", D)
            }, [t("div", {
                class: B(s.hundrednumList.includes(D) ? "action ball" : "ball")
            }, e(D), 3)], 8, D6))), 128))])])])) : $("v-if", !0), (M = s.betconfig) != null && M.includes("2") ? (n(),
            a("div", O6, [t("div", E6, [t("div", {
                class: "selectall",
                onClick: L[11] || (L[11] = D => N("ten", 0, 9, "all"))
            }, e(d(g)("all")), 1), t("div", {
                class: "selectbig",
                onClick: L[12] || (L[12] = D => N("ten", 0, 9, "big"))
            }, e(d(g)("big")), 1), t("div", {
                class: "selectsmall",
                onClick: L[13] || (L[13] = D => N("ten", 0, 9, "small"))
            }, e(d(g)("small")), 1), t("div", {
                class: "selectodd",
                onClick: L[14] || (L[14] = D => N("ten", 0, 9, "odd"))
            }, e(d(g)("xosoTxt71")), 1), t("div", {
                class: "selecteven",
                onClick: L[15] || (L[15] = D => N("ten", 0, 9, "even"))
            }, e(d(g)("xosoTxt70")), 1)]), t("div", q6, [t("div", j6, e(d(g)("xosoTxt89")), 1), t("div", H6, [(n(!0),
            a(S, null, G(r.value, (D, j) => (n(),
            a("div", {
                key: j,
                onClick: X => w("ten", D)
            }, [t("div", {
                class: B(s.tennumList.includes(D) ? "action ball" : "ball")
            }, e(D), 3)], 8, W6))), 128))])])])) : $("v-if", !0), (A = s.betconfig) != null && A.includes("1") ? (n(),
            a("div", F6, [t("div", V6, [t("div", {
                class: "selectall",
                onClick: L[16] || (L[16] = D => N("Indivual", 0, 9, "all"))
            }, e(d(g)("all")), 1), t("div", {
                class: "selectbig",
                onClick: L[17] || (L[17] = D => N("Indivual", 0, 9, "big"))
            }, e(d(g)("big")), 1), t("div", {
                class: "selectsmall",
                onClick: L[18] || (L[18] = D => N("Indivual", 0, 9, "small"))
            }, e(d(g)("small")), 1), t("div", {
                class: "selectodd",
                onClick: L[19] || (L[19] = D => N("Indivual", 0, 9, "odd"))
            }, e(d(g)("xosoTxt71")), 1), t("div", {
                class: "selecteven",
                onClick: L[20] || (L[20] = D => N("Indivual", 0, 9, "even"))
            }, e(d(g)("xosoTxt70")), 1)]), t("div", U6, [t("div", K6, e(d(g)("xosoTxt90")), 1), t("div", X6, [(n(!0),
            a(S, null, G(r.value, (D, j) => (n(),
            a("div", {
                key: j,
                onClick: X => w("Indivual", D)
            }, [t("div", {
                class: B(s.indicualnumList.includes(D) ? "ball action" : "ball")
            }, e(D), 3)], 8, Q6))), 128))])])])) : $("v-if", !0)], 512), [[Yt, s.activeTab === 1]]), $("输入号码"), dt(t("div", null, [C(x, {
                class: "custom-field",
                modelValue: p.value,
                "onUpdate:modelValue": L[21] || (L[21] = D => p.value = D),
                rows: "4",
                autosize: "",
                type: "textarea",
                placeholder: d(g)("xosoTxt86"),
                onInput: y
            }, null, 8, ["modelValue", "placeholder"])], 512), [[Yt, s.activeTab === 2]]), $("快捷选号"), dt(t("div", null, [t("div", Z6, [s.isthreenumber === 1 ? (n(),
            a("div", Y6, [(n(!0),
            a(S, null, G(s.intervalnumber, (D, j) => (n(),
            a("div", {
                class: B(["intervalitem", [s.intervalTab === j ? "active" : ""]]),
                key: j,
                onClick: X => k(D, j)
            }, e(D), 11, J6))), 128))])) : $("v-if", !0), s.randomtype === 1 ? (n(),
            a("div", t4, [t("div", e4, [i4, t("div", n4, e(d(g)("xosoTxt83")), 1)]), t("div", a4, [(n(!0),
            a(S, null, G(s.randomList, (D, j) => (n(),
            a("div", {
                class: B([s.groupTab === j ? "active" : ""]),
                key: j,
                onClick: X => _(D, j, s.isthreenumber)
            }, e(D) + e(d(g)("xosoTxt84")), 11, o4))), 128))])])) : $("v-if", !0), s.specialtype === 1 ? (n(),
            a("div", s4, [t("div", l4, [c4, t("div", r4, e(d(g)("xosoTxt97")), 1)]), t("div", u4, [s.speciaSelectNo.includes("1") ? (n(),
            a("div", {
                key: 0,
                class: "specialsame",
                onClick: L[22] || (L[22] = D => v(s.isthreenumber, "same"))
            }, e(d(g)("xosoTxt85")), 1)) : $("v-if", !0), s.speciaSelectNo.includes("4") ? (n(),
            a("div", {
                key: 1,
                class: "specialbig",
                onClick: L[23] || (L[23] = D => v(s.isthreenumber, "big"))
            }, e(d(g)("big")), 1)) : $("v-if", !0), s.speciaSelectNo.includes("5") ? (n(),
            a("div", {
                key: 2,
                class: "specialsmall",
                onClick: L[24] || (L[24] = D => v(s.isthreenumber, "small"))
            }, e(d(g)("small")), 1)) : $("v-if", !0), s.speciaSelectNo.includes("2") ? (n(),
            a("div", {
                key: 3,
                class: "specialodd",
                onClick: L[25] || (L[25] = D => v(s.isthreenumber, "odd"))
            }, e(d(g)("xosoTxt71")), 1)) : $("v-if", !0), s.speciaSelectNo.includes("3") ? (n(),
            a("div", {
                key: 4,
                class: "specialeven",
                onClick: L[26] || (L[26] = D => v(s.isthreenumber, "even"))
            }, e(d(g)("xosoTxt70")), 1)) : $("v-if", !0)])])) : $("v-if", !0), s.activeTab === 3 ? (n(),
            a(S, {
                key: 3
            }, G(10, (D, j) => t("div", {
                class: "numbercontainer",
                key: D
            }, [t("div", d4, [t("div", null, [E(e(s.hundred) + e(j) + "0", 1), p4, E("/"), g4, E(e(s.hundred) + e(j) + "9", 1)])]), t("div", b4, [(n(),
            a(S, null, G(10, (X, rt) => t("div", {
                class: "item",
                key: X
            }, [t("div", {
                onClick: ht => T(s.hundred, j, rt)
            }, [t("div", {
                class: B(s.quicknumList.includes(s.hundred + "" + j + rt) ? "number action" : "number")
            }, e(s.hundred) + e(j) + e(rt), 3)], 8, m4)])), 64))])])), 64)) : $("v-if", !0)])], 512), [[Yt, s.activeTab === 3]])])])
        }
    }
});
const v4 = V(_4, [["__scopeId", "data-v-cca50955"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/AllLotteryGames/NewVietnam/NumberSelect.vue"]])
  , k4 = {
    class: "TasteContainer"
}
  , h4 = {
    class: "TasteHeader"
}
  , f4 = {
    class: "NumberSelect"
}
  , y4 = {
    class: "NumberSelectCon"
}
  , $4 = ["onClick"]
  , w4 = F({
    __name: "TasteSelect",
    props: {
        funplaylist: {
            type: Array,
            default: []
        },
        numbercon: {
            type: String,
            default: "1000"
        }
    },
    emits: ["selectvalue"],
    setup(s, {emit: i}) {
        const o = (l, g) => {
            i("selectvalue", l, g)
        }
        ;
        return (l, g) => (n(),
        a("div", k4, [t("div", h4, e(l.$t("xosoTxt60")), 1), t("div", f4, [t("div", y4, [(n(!0),
        a(S, null, G(s.funplaylist, (m, c) => (n(),
        a("div", {
            class: B(["NumberCon", {
                action: m.oddTypeName === s.numbercon,
                more: c == 18
            }]),
            key: c,
            onClick: u => o(m, c)
        }, [t("div", {
            class: B(["number", {
                active: m.oddTypeName === s.numbercon
            }])
        }, e(l.$t("code" + m.oddTypeNameCode)), 3), t("div", {
            class: B(["odds", {
                active: m.oddTypeName === s.numbercon
            }])
        }, e(m.oddsOrAmount), 3)], 10, $4))), 128))])])]))
    }
});
const T4 = V(w4, [["__scopeId", "data-v-a08d1fa6"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/AllLotteryGames/NewVietnam/TasteSelect.vue"]])
  , C4 = {
    class: "Footer__C"
}
  , L4 = {
    class: "nav c-row c-row-between"
}
  , N4 = {
    class: "c-row left c-row c-row-middle-center"
}
  , z4 = {
    class: "item"
}
  , I4 = {
    class: "txt"
}
  , x4 = {
    class: "num"
}
  , S4 = {
    class: "item"
}
  , R4 = {
    class: "txt"
}
  , B4 = {
    class: "num"
}
  , G4 = {
    class: ""
}
  , A4 = F({
    __name: "Footer",
    props: {
        betNumber: {
            type: null,
            required: !0,
            default: {
                type: Number,
                default: 0
            }
        },
        betSum: {
            type: null,
            required: !0,
            default: {
                type: Number,
                default: 0
            }
        }
    },
    emits: ["playBet"],
    setup(s, {emit: i}) {
        const o = () => {
            i("playBet")
        }
        ;
        return (l, g) => (n(),
        a("div", C4, [t("div", L4, [t("div", N4, [t("div", z4, [t("p", I4, e(l.$t("quantity")), 1), t("span", x4, e(l.betNumber || 0), 1)]), t("div", S4, [t("p", R4, e(l.$t("betAmount")), 1), t("span", B4, e(d(Ct)(l.betSum || 0)), 1)])]), t("div", {
            class: B(["c-row c-row-middle-center", [l.betSum > 0 ? "bet-btn" : "disabled-btn"]]),
            onClick: g[0] || (g[0] = m => o())
        }, [t("span", G4, e(l.$t("betting")), 1)], 2)])]))
    }
});
const M4 = V(A4, [["__scopeId", "data-v-b37345b8"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/AllLotteryGames/NewVietnam/Footer.vue"]])
  , P4 = {
    class: "RecordNav__C"
}
  , D4 = ["onClick"]
  , O4 = F({
    __name: "RecordNav",
    props: {
        record: {
            type: String,
            default: "GameRecord"
        }
    },
    setup(s) {
        const i = s
          , {t: o} = gt()
          , l = h([{
            name: o("gameRecords"),
            componentName: "GameRecord"
        }, {
            name: o("myGame"),
            componentName: "MyGameRecord"
        }]);
        return (g, m) => (n(),
        a("div", P4, [(n(!0),
        a(S, null, G(l.value, (c, u) => (n(),
        a("div", {
            key: u,
            onClick: p => g.$emit("changeC", c.componentName),
            class: B({
                active: i.record == c.componentName
            })
        }, e(c.name), 11, D4))), 128))]))
    }
});
const E4 = V(O4, [["__scopeId", "data-v-fdfc55f4"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/AllLotteryGames/NewVietnam/RecordNav.vue"]])
  , q4 = {
    class: "GameRecord__C"
}
  , j4 = {
    class: "GameRecord__C-head"
}
  , H4 = {
    class: "GameRecord__C-body"
}
  , W4 = {
    class: "c-tc goItem"
}
  , F4 = {
    class: "c-row"
}
  , V4 = {
    class: "c-row c-row-middle-center"
}
  , U4 = {
    class: "c-row c-row-middle-center time"
}
  , K4 = {
    key: 0
}
  , X4 = {
    key: 1
}
  , Q4 = {
    key: 0,
    class: "details"
}
  , Z4 = {
    key: 0,
    class: "detailLi"
}
  , Y4 = {
    class: "prize-tit"
}
  , J4 = {
    key: 0
}
  , t8 = {
    class: "prize-box c-row c-flex-warp"
}
  , e8 = {
    class: "prize-box-item action"
}
  , i8 = {
    key: 1,
    class: "GameRecord__C-body-empty"
}
  , n8 = {
    key: 0,
    class: "GameRecord__C-foot"
}
  , a8 = {
    class: "GameRecord__C-foot-page"
}
  , o8 = F({
    __name: "GameRecord",
    props: {
        areId: {
            type: Number,
            required: !0
        },
        cityCode: {
            type: String,
            required: !0
        },
        gVSs: {
            type: String,
            required: !1
        }
    },
    setup(s, {expose: i}) {
        const o = s
          , {t: l} = gt()
          , g = h([])
          , m = h(4)
          , c = h(10)
          , u = h(1)
          , p = h(-1)
          , r = async (k=!1, y) => {
            var f, z, L;
            if ((y == null ? void 0 : y.list.length) > 0)
                g.value = sa(y == null ? void 0 : y.list) || [],
                m.value = y == null ? void 0 : y.totalPage,
                u.value = y == null ? void 0 : y.pageNo;
            else {
                if (o.cityCode === "")
                    return;
                let x;
                o.gVSs == "1" ? x = await nt($s({
                    pageSize: c.value,
                    pageNo: u.value,
                    areId: o == null ? void 0 : o.areId,
                    cityCode: o == null ? void 0 : o.cityCode
                })) : o.gVSs == "2" && (x = await nt($a({
                    pageSize: c.value,
                    pageNo: u.value,
                    areId: o.areId,
                    typeId: Number(o.cityCode)
                }))),
                g.value = ((f = x.data) == null ? void 0 : f.list) || [],
                m.value = (z = x.data) == null ? void 0 : z.totalPage,
                u.value = (L = x.data) == null ? void 0 : L.pageNo
            }
        }
          , b = k => {
            for (var y = [], f = 0; f < k.length; f++) {
                var z = y.findIndex(function(L) {
                    return L.resultType === k[f].resultType
                });
                z !== -1 ? y[z].result.push(k[f].result) : y.push({
                    resultType: k[f].resultType,
                    result: [k[f].result]
                })
            }
            return y
        }
        ;
        function _(k) {
            return k.join("-")
        }
        function w(k) {
            switch (k) {
            case 0:
                return l("GrandPrize");
            case 1:
                return l("firstprize");
            case 2:
                return l("secondprize");
            case 3:
                return l("thirdprize");
            case 4:
                return l("fourprize");
            case 5:
                return l("fiveprize");
            case 6:
                return l("sixprize");
            case 7:
                return l("sevenprize");
            case 8:
                return l("eightprize")
            }
        }
        const T = () => {
            u.value--,
            r()
        }
          , N = k => {
            p.value == k ? p.value = -1 : p.value = k
        }
          , v = () => {
            u.value++,
            r()
        }
        ;
        return i({
            getData: r
        }),
        fe( () => {
            p.value = -1
        }
        ),
        (k, y) => {
            var x, I;
            const f = W("van-col")
              , z = W("van-row")
              , L = W("van-icon");
            return n(),
            a("div", q4, [t("div", j4, [C(z, null, {
                default: P( () => [C(f, {
                    span: "8"
                }, {
                    default: P( () => [E(e(k.$t("betSerial")), 1)]),
                    _: 1
                }), C(f, {
                    span: "10"
                }, {
                    default: P( () => [E(e(k.$t("result")), 1)]),
                    _: 1
                }), C(f, {
                    span: "6"
                }, {
                    default: P( () => [E(e(k.$t("time")), 1)]),
                    _: 1
                })]),
                _: 1
            })]), t("div", H4, [(x = g.value) != null && x.length ? (n(!0),
            a(S, {
                key: 0
            }, G(g.value, (R, M) => (n(),
            J(z, {
                key: M,
                onClick: A => N(M)
            }, {
                default: P( () => [C(f, {
                    span: "8"
                }, {
                    default: P( () => [t("div", W4, e(R.issueNumber), 1)]),
                    _: 2
                }, 1024), C(f, {
                    span: "10",
                    class: "c-row c-row-middle-center"
                }, {
                    default: P( () => [t("div", F4, [t("div", V4, [R.openingResult ? (n(!0),
                    a(S, {
                        key: 0
                    }, G(R.openingResult[0].result, (A, D) => (n(),
                    a("div", {
                        class: "li circle-black c-row c-row-middle-center c-tc",
                        key: D
                    }, [t("div", null, e(A), 1)]))), 128)) : $("v-if", !0)])])]),
                    _: 2
                }, 1024), C(f, {
                    span: "6"
                }, {
                    default: P( () => [t("div", U4, [k.gVSs == "1" ? (n(),
                    a("div", K4, e(R.openingTime.substr(0, 10)), 1)) : (n(),
                    a("div", X4, e(R.openingTime), 1))])]),
                    _: 2
                }, 1024), M == p.value ? (n(),
                a("div", Q4, [R.openingResult ? (n(),
                a("div", Z4, [(n(!0),
                a(S, null, G(b(R.openingResult), (A, D) => (n(),
                a("div", {
                    class: B([`selectItem${A.resultType}`, "prize"]),
                    key: D
                }, [t("div", Y4, e(w(A.resultType)), 1), [0, 1, 2].includes(A.resultType) ? (n(),
                a("div", J4, "|")) : $("v-if", !0), t("div", t8, [t("span", e8, e(_(A.result)), 1)])], 2))), 128))])) : $("v-if", !0)])) : $("v-if", !0)]),
                _: 2
            }, 1032, ["onClick"]))), 128)) : (n(),
            a("div", i8, [C(ge)]))]), (I = g.value) != null && I.length ? (n(),
            a("div", n8, [t("div", {
                class: B(["GameRecord__C-foot-previous", {
                    disabled: u.value <= 1
                }]),
                onClick: T
            }, [C(L, {
                name: "arrow-left",
                class: "GameRecord__C-icon",
                size: "20"
            })], 2), t("div", a8, e(u.value) + "/" + e(m.value), 1), t("div", {
                class: B(["GameRecord__C-foot-next", {
                    disabled: u.value >= m.value
                }]),
                onClick: v
            }, [C(L, {
                name: "arrow",
                class: "GameRecord__C-icon",
                size: "20"
            })], 2)])) : $("v-if", !0)])
        }
    }
});
const s8 = V(o8, [["__scopeId", "data-v-68c3df62"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/AllLotteryGames/NewVietnam/GameRecord.vue"]])
  , l8 = s => (Nt("data-v-56cdb7a2"),
s = s(),
zt(),
s)
  , c8 = {
    class: "MyGameRecordList__C"
}
  , r8 = ["onClick"]
  , u8 = {
    class: "box"
}
  , d8 = {
    class: "time"
}
  , p8 = {
    key: 0,
    class: "state state0"
}
  , g8 = {
    key: 1,
    class: "state state3"
}
  , b8 = {
    key: 2,
    class: "state state4"
}
  , m8 = {
    key: 3,
    class: "state state2"
}
  , _8 = {
    key: 4,
    class: "state state5"
}
  , v8 = {
    key: 5,
    class: "state state1"
}
  , k8 = {
    key: 0,
    class: "info"
}
  , h8 = {
    class: "order"
}
  , f8 = {
    key: 0,
    class: "li"
}
  , y8 = {
    class: "lab"
}
  , $8 = ["onClick"]
  , w8 = {
    key: 1,
    class: "li"
}
  , T8 = {
    class: "lab"
}
  , C8 = {
    class: "sub"
}
  , L8 = {
    class: "li"
}
  , N8 = {
    class: "lab"
}
  , z8 = {
    key: 0,
    class: "sub"
}
  , I8 = {
    key: 1,
    class: "sub"
}
  , x8 = {
    key: 2,
    class: "li"
}
  , S8 = {
    class: "lab"
}
  , R8 = {
    class: "sub"
}
  , B8 = {
    class: "li"
}
  , G8 = {
    class: "lab"
}
  , A8 = {
    class: "sub"
}
  , M8 = {
    class: "li"
}
  , P8 = {
    class: "lab"
}
  , D8 = {
    class: "sub"
}
  , O8 = {
    class: "li"
}
  , E8 = {
    class: "lab"
}
  , q8 = {
    class: "sub"
}
  , j8 = {
    class: "li"
}
  , H8 = {
    class: "lab"
}
  , W8 = {
    class: "sub"
}
  , F8 = {
    class: "li"
}
  , V8 = {
    class: "lab"
}
  , U8 = {
    class: "sub"
}
  , K8 = l8( () => t("div", {
    class: "line"
}, [t("p")], -1))
  , X8 = {
    class: "bet"
}
  , Q8 = {
    class: "li betNum"
}
  , Z8 = {
    class: "lab"
}
  , Y8 = {
    key: 0,
    class: "txt"
}
  , J8 = {
    key: 1,
    class: "txt"
}
  , t7 = {
    key: 2,
    class: "txt"
}
  , e7 = {
    key: 3,
    class: "betList select"
}
  , i7 = {
    key: 4,
    class: "betList select"
}
  , n7 = {
    class: "li"
}
  , a7 = {
    class: "lab"
}
  , o7 = {
    key: 0,
    class: "state state0"
}
  , s7 = {
    key: 1,
    class: "state state3"
}
  , l7 = {
    key: 2,
    class: "state state4"
}
  , c7 = {
    key: 3,
    class: "state state2"
}
  , r7 = {
    key: 4,
    class: "state state5"
}
  , u7 = {
    key: 5,
    class: "state state1"
}
  , d7 = {
    class: "li"
}
  , p7 = {
    class: "lab"
}
  , g7 = {
    key: 0,
    class: "sub success"
}
  , b7 = {
    key: 1,
    class: "sub fail"
}
  , m7 = {
    key: 2,
    class: "sub"
}
  , _7 = {
    key: 0,
    class: "li"
}
  , v7 = {
    class: "lab"
}
  , k7 = {
    class: "sub"
}
  , h7 = {
    key: 1,
    class: "li"
}
  , f7 = {
    class: "lab"
}
  , y7 = {
    class: "sub"
}
  , $7 = {
    key: 0
}
  , w7 = ["onClick"]
  , T7 = {
    key: 1,
    class: "result"
}
  , C7 = {
    key: 0,
    class: "txt"
}
  , L7 = {
    key: 1,
    class: "txt"
}
  , N7 = {
    key: 2,
    class: "txt"
}
  , z7 = {
    key: 3,
    class: "txt"
}
  , I7 = {
    key: 4,
    class: "txt"
}
  , x7 = {
    key: 5,
    class: "txt"
}
  , S7 = {
    key: 6,
    class: "txt"
}
  , R7 = {
    key: 7,
    class: "txt"
}
  , B7 = {
    key: 8,
    class: "txt"
}
  , G7 = {
    class: "num"
}
  , A7 = F({
    __name: "MyRecordList",
    props: {
        mayrecord: {
            type: Array,
            required: !1
        },
        gVSs: {
            type: String,
            required: !1
        }
    },
    emits: ["click-cance"],
    setup(s, {emit: i}) {
        const {t: o} = gt()
          , l = h(-1)
          , g = k => {
            l.value === k ? l.value = -1 : l.value = k
        }
          , m = h(!1)
          , c = h("")
          , u = async () => {
            await nt(Ts({
                orderId: c.value
            })) && (m.value = !1,
            gn(o("xosoTxt96")),
            i("click-cance"))
        }
          , p = k => {
            c.value = k,
            m.value = !0
        }
          , r = ws(u, 1e3)
          , b = k => {
            for (var y = [], f = 0; f < k.length; f++) {
                var z = y.findIndex(function(L) {
                    return L.resultType === k[f].resultType
                });
                z !== -1 ? y[z].result.push("-" + k[f].result) : y.push({
                    resultType: k[f].resultType,
                    result: [k[f].result]
                })
            }
            return y
        }
          , _ = k => {
            const y = w(k);
            return T(y)
        }
          , w = k => {
            let y = [];
            if (k.includes(",")) {
                let f = k.split(",")
                  , z = {};
                for (let L = 0; f.length > L; L++)
                    z = f[L].split("|"),
                    y.push(z);
                return y
            }
            return k
        }
          , T = k => {
            let y = k[0]
              , f = k[1]
              , z = [];
            for (let x = 0; y.length > x; x++)
                for (let I = 0; f.length > I; I++)
                    z.push(y[x] + f[I]);
            let L = k.slice(2);
            return L.length > 0 ? T([z, ...L]) : z
        }
          , N = k => {
            if (k != null) {
                let y = k.split(",");
                if (y.length > 0)
                    return y
            }
            return []
        }
          , v = k => {
            const y = {
                大: o("big"),
                小: o("small"),
                单: o("odd"),
                双: o("xosoTxt70")
            };
            return y[k] ? y[k].replace(/\|/g, ",") : k.replace(/\|/g, ",")
        }
        ;
        return Lt( () => {}
        ),
        (k, y) => {
            const f = W("svg-icon");
            return n(),
            a("div", c8, [(n(!0),
            a(S, null, G(k.mayrecord, (z, L) => (n(),
            a("div", {
                class: B(l.value === L ? "item active" : "item"),
                key: z,
                onClick: x => g(L)
            }, [t("div", u8, [t("div", null, [t("h4", null, e(d(o)("code" + z.bettingParentTypeNameCode)), 1), t("span", d8, e(z.createTime), 1)]), z.status === 1 ? (n(),
            a("div", p8, [t("p", null, e(d(o)("bettingResultState1")), 1)])) : $("v-if", !0), z.status === 3 ? (n(),
            a("div", g8, [t("p", null, e(d(o)("hasWon")), 1), t("span", null, "+" + e(z.winningAmount), 1)])) : $("v-if", !0), z.status === 2 ? (n(),
            a("div", b8, [t("p", null, e(d(o)("bettingResultState3")), 1), t("span", null, "-" + e(z.realBettingAmount), 1)])) : $("v-if", !0), z.status === 4 ? (n(),
            a("div", m8, [t("p", null, e(d(o)("xosoTxt74")), 1)])) : $("v-if", !0), z.status === 5 ? (n(),
            a("div", _8, [t("p", null, e(d(o)("xosoTxt75")), 1)])) : $("v-if", !0), z.status === 6 ? (n(),
            a("div", v8, [t("p", null, e(d(o)("xosoTxt76")), 1)])) : $("v-if", !0)]), l.value === L ? (n(),
            a("div", k8, [t("div", h8, [z.orderNo ? (n(),
            a("div", f8, [t("div", y8, e(d(o)("orderNo")), 1), t("div", {
                class: "sub",
                onClick: ne(x => d(Fe)(z.orderNo), ["stop"])
            }, [E(e(z.orderNo) + " ", 1), C(f, {
                name: "copy"
            })], 8, $8)])) : $("v-if", !0), z.issueNo ? (n(),
            a("div", w8, [t("div", T8, e(d(o)("betIssue")), 1), t("div", C8, e(z.issueNo), 1)])) : $("v-if", !0), t("div", L8, [t("div", N8, e(d(o)("area")), 1), k.gVSs == "1" ? (n(),
            a("div", z8, e(d(o)("code" + z.areNameCode)), 1)) : k.gVSs == "2" ? (n(),
            a("div", I8, e(d(o)("code" + z.typeCode)), 1)) : $("v-if", !0)]), k.gVSs == "1" ? (n(),
            a("div", x8, [t("div", S8, e(d(o)("xosoTxt77")), 1), t("div", R8, e(d(o)("code" + z.nameCode)), 1)])) : $("v-if", !0), t("div", B8, [t("div", G8, e(d(o)("gamePlay")), 1), t("div", A8, e(d(o)("code" + z.bettingParentTypeNameCode)), 1)]), t("div", M8, [t("div", P8, e(d(o)("xosoTxt78")), 1), t("div", D8, e(d(o)("code" + z.bettingTypeNameCode)), 1)]), t("div", O8, [t("div", E8, e(d(o)("amountMay")), 1), t("div", q8, e(z.amount), 1)]), t("div", j8, [t("div", H8, e(d(o)("multiple")), 1), t("div", W8, e(z.bettingMultiple), 1)]), t("div", F8, [t("div", V8, e(d(o)("xosoTxt79")), 1), t("div", U8, e(z.totalBetting) + " " + e(d(o)("note")), 1)]), $(` <div class="li" v-if="item.realBettingAmount">
						<div class="lab">{{ $t('afterTaxAmount') }}</div>
						<div class="sub">{{ item.realBettingAmount }}</div>
					</div>
					<div class="li" v-if="item.serviceCharge">
						<div class="lab">{{ $t('tax') }}</div>
						<div class="sub">{{ item.serviceCharge }}</div>
					</div> `)]), K8, t("div", X8, [t("div", Q8, [t("div", Z8, [E(e(d(o)("bettingnumber")), 1), z.bettingFormat === 1 ? (n(),
            a("span", Y8, "(" + e(d(o)("selectNo")) + ")", 1)) : $("v-if", !0), z.bettingFormat === 2 ? (n(),
            a("span", J8, "(" + e(d(o)("xosoTxt80")) + ")", 1)) : $("v-if", !0), z.bettingFormat === 3 ? (n(),
            a("span", t7, "(" + e(d(o)("xosoTxt81")) + ")", 1)) : $("v-if", !0), $(" 选择号码 "), z.bettingFormat == 1 ? (n(),
            a("div", e7, [(n(!0),
            a(S, null, G(_(z.bettingContent), (x, I) => (n(),
            a("span", {
                class: B({
                    active: N(z.winningNum).includes(x)
                }),
                key: I
            }, e(x), 3))), 128))])) : (n(),
            a("div", i7, [(n(!0),
            a(S, null, G(z.bettingContent.split(","), (x, I) => (n(),
            a("span", {
                class: B({
                    active: N(z.winningNum).includes(x)
                }),
                key: I
            }, e(v(x)), 3))), 128))]))])]), t("div", n7, [t("div", a7, e(d(o)("statusMay")), 1), z.status === 1 ? (n(),
            a("div", o7, [t("p", null, e(d(o)("bettingResultState1")), 1)])) : $("v-if", !0), z.status === 3 ? (n(),
            a("div", s7, [t("p", null, e(d(o)("hasWon")), 1)])) : $("v-if", !0), z.status === 2 ? (n(),
            a("div", l7, [t("p", null, e(d(o)("bettingResultState3")), 1)])) : $("v-if", !0), z.status === 4 ? (n(),
            a("div", c7, [t("p", null, e(d(o)("xosoTxt74")), 1)])) : $("v-if", !0), z.status === 5 ? (n(),
            a("div", r7, [t("p", null, e(d(o)("xosoTxt75")), 1)])) : $("v-if", !0), z.status === 6 ? (n(),
            a("div", u7, [t("p", null, e(d(o)("xosoTxt76")), 1)])) : $("v-if", !0)]), t("div", d7, [t("div", p7, e(d(o)("winOrLose")), 1), z.status === 3 ? (n(),
            a("div", g7, " +" + e(z.winningAmount), 1)) : z.status === 2 ? (n(),
            a("div", b7, " -" + e(z.realBettingAmount), 1)) : (n(),
            a("div", m7, "---"))]), z.createTime ? (n(),
            a("div", _7, [t("div", v7, e(d(o)("createTime")), 1), t("div", k7, e(z.createTime), 1)])) : $("v-if", !0), z.openingTime ? (n(),
            a("div", h7, [t("div", f7, e(d(o)("winTrxTime")), 1), t("div", y7, e(z.openingTime), 1)])) : $("v-if", !0)]), z.issueNoStatus === 1 && z.status === 1 && k.gVSs == "1" ? (n(),
            a("div", $7, [t("div", {
                class: "btn",
                onClick: ne(x => p(z.id), ["stop"])
            }, e(d(o)("xosoTxt82")), 9, w7)])) : $("v-if", !0), $(" 开奖结果 "), z.openingResult ? (n(),
            a("div", T7, [(n(!0),
            a(S, null, G(b(z.openingResult), (x, I) => (n(),
            a("div", {
                class: B(I < 3 ? "result-item jusb" : "result-item"),
                key: I
            }, [x.resultType == 0 ? (n(),
            a("div", C7, e(d(o)("GrandPrize")), 1)) : $("v-if", !0), x.resultType == 1 ? (n(),
            a("div", L7, e(d(o)("firstprize")), 1)) : $("v-if", !0), x.resultType == 2 ? (n(),
            a("div", N7, e(d(o)("secondprize")), 1)) : $("v-if", !0), x.resultType == 3 ? (n(),
            a("div", z7, e(d(o)("thirdprize")), 1)) : $("v-if", !0), x.resultType == 4 ? (n(),
            a("div", I7, e(d(o)("fourprize")), 1)) : $("v-if", !0), x.resultType == 5 ? (n(),
            a("div", x7, e(d(o)("fiveprize")), 1)) : $("v-if", !0), x.resultType == 6 ? (n(),
            a("div", S7, e(d(o)("sixprize")), 1)) : $("v-if", !0), x.resultType == 7 ? (n(),
            a("div", R7, e(d(o)("sevenprize")), 1)) : $("v-if", !0), x.resultType == 8 ? (n(),
            a("div", B7, e(d(o)("eightprize")), 1)) : $("v-if", !0), t("div", G7, [(n(!0),
            a(S, null, G(x.result, (R, M) => (n(),
            a("span", {
                key: M
            }, e(R), 1))), 128))])], 2))), 128))])) : $("v-if", !0)])) : $("v-if", !0)], 10, r8))), 128)), C(Re, {
                show: m.value,
                "onUpdate:show": y[0] || (y[0] = z => m.value = z),
                title: d(o)("xosoTxt99"),
                onConfirm: d(r)
            }, null, 8, ["show", "title", "onConfirm"])])
        }
    }
});
const M7 = V(A7, [["__scopeId", "data-v-56cdb7a2"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/AllLotteryGames/NewVietnam/MyRecordList.vue"]])
  , P7 = {
    class: "MyGameRecord__C"
}
  , D7 = {
    class: "MyGameRecord__C-body"
}
  , O7 = {
    key: 0,
    class: "MyGameRecord__C-head"
}
  , E7 = {
    key: 2,
    class: "MyGameRecord__C-body-empty"
}
  , q7 = {
    key: 0,
    class: "MyGameRecord__C-foot"
}
  , j7 = {
    class: "MyGameRecord__C-foot-page"
}
  , H7 = F({
    __name: "MyGameRecord",
    props: {
        parmas: {
            type: Object,
            required: !1
        },
        ApiFun: {
            type: Function,
            required: !0
        },
        cityCode: {
            type: Array,
            required: !1
        },
        hasHead: {
            type: Boolean,
            required: !1,
            default: !0
        },
        gVSs: {
            type: String,
            required: !1
        },
        areId: {
            type: String,
            required: !1
        }
    },
    setup(s, {expose: i}) {
        const o = s
          , l = ct()
          , g = h(0)
          , m = h(10)
          , c = h(1)
          , u = h([])
          , p = async () => {
            var y, f, z;
            const v = r(o.parmas);
            (o == null ? void 0 : o.gVSs) == "2" && (o != null && o.areId && (v.areId = o == null ? void 0 : o.areId),
            o != null && o.cityCode && (v.typeId = Number(o == null ? void 0 : o.cityCode)));
            const k = await nt(o.ApiFun({
                pageSize: m.value,
                pageNo: c.value,
                ...v
            }));
            k && (u.value = ((y = k.data) == null ? void 0 : y.list) || [],
            g.value = ((f = k.data) == null ? void 0 : f.totalPage) || 0,
            c.value = (z = k.data) == null ? void 0 : z.pageNo)
        }
        ;
        function r(v) {
            const k = {};
            for (const y in v)
                v[y] !== "" && (k[y] = v[y]);
            return k
        }
        const b = () => {
            p()
        }
          , _ = Q( () => o.gVSs == "1" ? "AllLotteryGames-XoSoRecord" : o.gVSs == "2" ? "AllLotteryGames-XoSoRecordF" : "")
          , w = v => {
            l.push({
                name: v,
                query: {
                    areId: o.areId,
                    typeId: o.cityCode
                }
            })
        }
          , T = () => {
            c.value--,
            p()
        }
          , N = () => {
            c.value++,
            p()
        }
        ;
        return i({
            getData: p
        }),
        fe( () => {
            p()
        }
        ),
        (v, k) => {
            var f, z;
            const y = W("van-icon");
            return n(),
            a("div", P7, [t("div", D7, [v.hasHead ? (n(),
            a("div", O7, [t("div", {
                class: "MyGameRecord__C-head-moreB",
                onClick: k[0] || (k[0] = L => w(_.value || ""))
            }, e(v.$t("more")), 1)])) : $("v-if", !0), (f = u.value) != null && f.length ? (n(),
            J(M7, {
                key: 1,
                mayrecord: u.value,
                onClickCance: b,
                gVSs: v.gVSs
            }, null, 8, ["mayrecord", "gVSs"])) : (n(),
            a("div", E7, [C(ge)]))]), (z = u.value) != null && z.length ? (n(),
            a("div", q7, [t("div", {
                class: B(["MyGameRecord__C-foot-previous", {
                    disabled: c.value <= 1
                }]),
                onClick: T
            }, [C(y, {
                name: "arrow-left",
                class: "MyGameRecord__C-icon",
                size: "20"
            })], 2), t("div", j7, e(c.value) + "/" + e(g.value), 1), t("div", {
                class: B(["MyGameRecord__C-foot-next", {
                    disabled: c.value >= g.value
                }]),
                onClick: N
            }, [C(y, {
                name: "arrow",
                class: "MyGameRecord__C-icon",
                size: "20"
            })], 2)])) : $("v-if", !0)])
        }
    }
});
const Cn = V(H7, [["__scopeId", "data-v-44e97c4d"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/AllLotteryGames/NewVietnam/MyGameRecord.vue"]])
  , W7 = {
    key: 0,
    class: "WinningTip__C-body-l1 isL"
}
  , F7 = {
    key: 1,
    class: "WinningTip__C-body-l1"
}
  , V7 = {
    key: 2,
    class: "notwinning"
}
  , U7 = {
    key: 3,
    class: "WinningTip__C-body-l2"
}
  , K7 = {
    key: 4,
    class: "WinningTip__C-body-l5"
}
  , X7 = {
    class: "WinningTip__C-body-l5-content"
}
  , Q7 = {
    class: "balltext"
}
  , Z7 = {
    class: "WinningTip__C-body-l3"
}
  , Y7 = {
    key: 0,
    class: "isLose"
}
  , J7 = {
    class: "head"
}
  , t9 = {
    class: "bonus"
}
  , e9 = {
    class: "gameDetail"
}
  , i9 = {
    class: "gameDetail"
}
  , n9 = {
    class: "WinningTip__C-body-l4"
}
  , a9 = ["onClick"]
  , o9 = F({
    __name: "WinningTips",
    setup(s, {expose: i}) {
        const o = Q( () => m.value[0] ? m.value[0].winningAmount == 0 : !1)
          , l = Q( () => m.value[0] || {})
          , g = h(!1)
          , m = h([]);
        let c = h();
        const u = () => {
            clearTimeout(c.value),
            m.value.shift(),
            g.value && m.value.length && (c.value = setTimeout( () => {
                u()
            }
            , 1e3 * 3))
        }
        ;
        At( () => m.value.length, _ => {
            _ ? document.body.style.overflow = "hidden" : document.body.style.overflow = ""
        }
        );
        const p = () => {
            g.value = !g.value,
            g.value ? c.value = setTimeout( () => {
                u()
            }
            , 1e3 * 3) : clearTimeout(c.value)
        }
          , r = _ => {
            m.value.push(_),
            g.value && (c.value = setTimeout( () => {
                u()
            }
            , 1e3 * 3))
        }
          , b = () => {
            m.value = []
        }
        ;
        return i({
            showMark: r
        }),
        (_, w) => dt((n(),
        a("div", {
            class: "WinningTip__C",
            onClick: u
        }, [t("div", {
            class: B(["WinningTip__C-body", {
                isL: o.value
            }])
        }, [o.value ? (n(),
        a("div", W7, e(_.$t("k3WarningTip1")), 1)) : $("v-if", !0), o.value ? $("v-if", !0) : (n(),
        a("div", F7, e(_.$t("k3WarningTip2")), 1)), o.value ? (n(),
        a("div", V7)) : $("v-if", !0), o.value ? $("v-if", !0) : (n(),
        a("div", U7, e(_.$t("code" + l.value.bettingParentTypeNameCode)) + "/" + e(_.$t("code" + l.value.bettingTypeNameCode)), 1)), o.value ? $("v-if", !0) : (n(),
        a("div", K7, [t("div", X7, [(n(!0),
        a(S, null, G(l.value.openingResult, (T, N) => (n(),
        a("div", {
            class: "ball",
            key: N
        }, [t("div", Q7, e(T), 1)]))), 128))])])), t("div", Z7, [o.value ? (n(),
        a("div", Y7, e(_.$t("winTips4")), 1)) : $("v-if", !0), o.value ? $("v-if", !0) : (n(),
        a(S, {
            key: 1
        }, [t("div", J7, e(_.$t("winTips5")), 1), t("div", t9, e(d(Ct)(l.value.winningAmount)), 1)], 64)), t("div", e9, e(_.$t(`code${l.value.typeCode}`)), 1), t("div", i9, e(_.$t("winTips6")) + e(l.value.issueNo), 1)]), t("div", n9, [t("div", {
            class: B(["acitveBtn", {
                active: g.value
            }]),
            onClick: ne(p, ["stop"])
        }, null, 10, a9), E(" " + e(_.$t("autoShutOff3s")), 1)]), t("div", {
            class: "closeBtn",
            onClick: b
        })], 2)], 512)), [[Yt, m.value.length]])
    }
});
const s9 = V(o9, [["__scopeId", "data-v-eb0f5940"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/AllLotteryGames/NewVietnam/WinningTips.vue"]])
  , Ln = s => (Nt("data-v-b1e14027"),
s = s(),
zt(),
s)
  , l9 = {
    class: "NewVietnam__C"
}
  , c9 = Ln( () => t("div", {
    class: "bottombg"
}, null, -1))
  , r9 = {
    class: "box p-l-10 p-r-10 p-t-10 p-b-10"
}
  , u9 = ["src"]
  , d9 = {
    class: "title c-tc"
}
  , p9 = {
    key: 0,
    class: "titlebets c-tc border60"
}
  , g9 = {
    class: "box"
}
  , b9 = {
    class: "c-row"
}
  , m9 = {
    key: 2,
    class: B("c-row c-flex-warp compound")
}
  , _9 = {
    key: 0,
    class: "item"
}
  , v9 = {
    class: "title"
}
  , k9 = {
    class: "numcontainer"
}
  , h9 = {
    key: 1,
    class: "item"
}
  , f9 = {
    class: "title"
}
  , y9 = {
    class: "numcontainer"
}
  , $9 = {
    key: 2,
    class: "item"
}
  , w9 = {
    class: "title"
}
  , T9 = {
    class: "numcontainer"
}
  , C9 = {
    key: 3,
    class: "item"
}
  , L9 = {
    class: "title"
}
  , N9 = {
    class: "numcontainer"
}
  , z9 = {
    key: 4,
    class: "item"
}
  , I9 = {
    class: "numcontainer"
}
  , x9 = {
    class: "popup-info"
}
  , S9 = {
    class: "popup-info-item c-row c-row-between"
}
  , R9 = {
    class: "tit"
}
  , B9 = {
    class: "c-row c-row-between stepper-box"
}
  , G9 = {
    class: "popup-info-item c-row c-flew-end"
}
  , A9 = {
    class: "c-row multiple-box"
}
  , M9 = ["onClick"]
  , P9 = {
    class: "c-row c-row-between c-row-middle quantity"
}
  , D9 = {
    class: "c-row c-row-middle-center"
}
  , O9 = Ln( () => t("span", {
    class: "line"
}, "|", -1))
  , E9 = {
    class: "num"
}
  , q9 = {
    class: "c-row c-row-middle-center"
}
  , j9 = Ln( () => t("span", {
    class: "line"
}, "|", -1))
  , H9 = {
    class: "num"
}
  , W9 = {
    class: "wallet c-row c-row-between c-row-middle"
}
  , F9 = {
    class: "txt c-row"
}
  , V9 = {
    class: "num c-row c-row-middle"
}
  , U9 = {
    class: "balance c-row c-row-middle"
}
  , K9 = {
    class: "txt"
}
  , X9 = {
    class: "num yellow"
}
  , Q9 = {
    key: 0,
    class: "wallet c-row c-row-between c-row-middle"
}
  , Z9 = {
    class: "txt c-row bg7172"
}
  , Y9 = ["src"]
  , J9 = {
    class: "popup-info-item c-row c-row-middle"
}
  , tL = {
    class: "agree p-r-15"
}
  , eL = {
    class: "popup-btn c-row c-row-between"
}
  , iL = {
    class: "left"
}
  , nL = {
    class: "right"
}
  , aL = {
    class: ""
}
  , oL = {
    class: "areList"
}
  , sL = ["src"]
  , lL = {
    class: "itemsC"
}
  , cL = ["onClick"]
  , rL = {
    class: "PreSale"
}
  , uL = {
    class: "head"
}
  , dL = {
    class: "body"
}
  , pL = {
    class: "foot"
}
  , gL = ["src"]
  , bL = ["src"]
  , mL = {
    class: "font36"
}
  , _L = {
    class: "tipMsg"
}
  , vL = F({
    __name: "index",
    setup(s) {
        var Pn, Dn;
        const i = ct()
          , o = Ze()
          , {t: l} = gt()
          , g = h(!1)
          , m = Q( () => {
            var q, H;
            return _.value ? (q = _.value) == null ? void 0 : q.type : (H = o.query) == null ? void 0 : H.type
        }
        )
          , c = h(i.currentRoute.value.query.nameCode)
          , u = h(Number((Pn = o.query) == null ? void 0 : Pn.areId) || 1)
          , p = Q( () => c.value ? l("code" + c.value) : "")
          , r = h((Dn = o.query) == null ? void 0 : Dn.code)
          , b = h()
          , _ = h()
          , w = Et({
            bettingParentType: "",
            areId: "",
            startDate: "",
            endDate: ""
        })
          , T = new Date
          , N = `${_e(T).format("YYYY-MM-DD")} 00:00:00`
          , v = `${_e(T).format("YYYY-MM-DD")} 23:59:59`;
        w.startDate = N,
        w.endDate = v;
        const k = h(!1)
          , y = h([])
          , f = h([])
          , z = h({})
          , L = h(0)
          , x = h(1)
          , I = h(0)
          , R = h(1)
          , M = h(1)
          , A = h("")
          , D = h("")
          , j = h("00:00:00")
          , X = h(1.995)
          , rt = h(1)
          , ht = h([])
          , st = h(0)
          , at = h("")
          , Y = h(1)
          , _t = h("")
          , Bt = h([])
          , qt = h(0)
          , bt = h(0)
          , Ot = h(0)
          , Vt = h(0)
          , yt = h("")
          , wt = h()
          , Tt = h(1e3)
          , $t = h([])
          , ot = h([])
          , Z = h([])
          , tt = h([])
          , O = h([])
          , it = h([])
          , ft = h("1000")
          , Gt = h(1)
          , ve = h(!1)
          , ae = Q( () => !(Ge.value > ei.value || te.value <= 0))
          , ze = h(["000/099", "100/199", "200/299", "300/399", "400/499", "500/599", "600/699", "700/799", "800/899", "900/999"])
          , vt = h("000/099")
          , Ie = h(0)
          , Be = h(!1)
          , xe = h(1)
          , We = h(1)
          , xt = h(0)
          , $e = h(0)
          , ti = h(0)
          , we = h("GameRecord")
          , Ui = {
            GameRecord: s8,
            MyGameRecord: Cn
        }
          , te = h(1)
          , Li = h()
          , Qt = h(!1)
          , _i = h(!0)
          , Ge = h(0)
          , ei = h(0)
          , Ee = h(0)
          , ii = h(!1)
          , U = h()
          , et = h(!1)
          , pt = h("")
          , It = h("")
          , Ht = Q( () => {
            if (m.value == "1")
                return Ca;
            if (m.value == "2")
                return La
        }
        )
          , Mt = q => {
            const H = String(Math.floor(Ut.value % 3600 / 60)).padStart(2, "0")
              , K = String(Ut.value % 60).padStart(2, "0");
            return `${H}:${K}`
        }
          , Ut = h()
          , jt = h(null)
          , ee = h("00:00")
          , ce = h(!1)
          , qe = () => {
            jt.value = setInterval( () => {
                Ut.value <= 0 ? (ee.value = "00:00",
                setTimeout( () => {
                    ce.value = !0
                }
                , 500),
                clearInterval(jt.value),
                Ae(),
                setTimeout( () => {
                    ai(!0)
                }
                , 5e3)) : (ce.value = !1,
                ee.value = Mt(Ut.value),
                Ut.value--)
            }
            , 1e3)
        }
          , de = h(null)
          , vi = (q, H) => {
            clearInterval(Ee.value),
            ve.value = !1,
            Ee.value = (H - q) / 1e3,
            de.value = setInterval( () => {
                if (Ee.value <= 0)
                    clearInterval(de.value),
                    j.value = "00:00:00",
                    ve.value = !0;
                else {
                    const K = String(Math.floor(Ee.value / 3600)).padStart(2, "0")
                      , ut = String(Math.floor(Ee.value % 3600 / 60)).padStart(2, "0")
                      , kt = String(Ee.value % 60).padStart(2, "0");
                    j.value = K + ":" + ut + ":" + kt,
                    Ee.value--
                }
            }
            , 1e3)
        }
        ;
        function ni() {
            _.value || (he({
                message: l("xosoTip5"),
                wordBreak: "break-word"
            }),
            setTimeout(function() {
                Mn("AllLotteryGames-XoSo")
            }, 2e3))
        }
        const Ae = async () => {
            let q;
            if (m.value == "1") {
                const kt = _e(o.query.day).format("YYYY-MM-DD HH:mm:ss");
                q = await nt(wa({
                    dateTime: kt
                }))
            } else
                m.value == "2" && (q = await nt(Ta({
                    are: u.value,
                    typeId: Number(r.value)
                })));
            q.data.length == 0 && ni();
            let H = q.data.find(kt => kt.day == o.query.day);
            D.value = H.day;
            let K = H.areInfos.find(kt => (kt == null ? void 0 : kt.areId) == u.value);
            const ut = K == null ? void 0 : K.serverTime;
            if (_.value = K.areIssueNos.find(kt => kt.code == r.value),
            _.value || ni(),
            m.value == "1") {
                const kt = K == null ? void 0 : K.closingTime;
                clearInterval(de.value),
                vi(new Date(ut.replace(/-/g, "/")).getTime(), new Date(kt.replace(/-/g, "/")).getTime())
            } else
                m.value == "2" && (Ut.value = (new Date(_.value.endTime.replace(/-/g, "/")).getTime() - new Date(ut.replace(/-/g, "/")).getTime()) / 1e3,
                clearInterval(jt.value),
                qe())
        }
        ;
        let je = null;
        const Ni = h("")
          , zn = h()
          , ai = async (q=!1) => {
            var ut, kt, Kt, Zt, be, me, mt, St;
            if (g.value || m.value != "2")
                return;
            let H, K = !0;
            if (we.value === "GameRecord") {
                if (H = await nt($a({
                    pageSize: 10,
                    pageNo: 1,
                    areId: u.value,
                    typeId: Number(r.value)
                })),
                H) {
                    if (((kt = (ut = H.data) == null ? void 0 : ut.list) == null ? void 0 : kt.length) > 0 && (Ni.value.trim().length == 0 || Ni.value != ((Zt = (Kt = H.data) == null ? void 0 : Kt.list[0]) == null ? void 0 : Zt.issueNumber)) && (K = !1,
                    Ni.value = (me = (be = H.data) == null ? void 0 : be.list[0]) == null ? void 0 : me.issueNumber),
                    K == !0 && q) {
                        clearTimeout(je),
                        je = setTimeout( () => {
                            ai(!0)
                        }
                        , 1e3);
                        return
                    }
                    z.value = (mt = H.data) == null ? void 0 : mt.list[0],
                    zn.value = H.data,
                    Jt( () => {
                        U.value.getData(!1, zn.value)
                    }
                    )
                }
            } else if (we.value === "MyGameRecord" && (H = await nt(Cs({
                areId: u.value,
                typeId: Number(r.value)
            })),
            H && H.data && H.data.openingResult && H.data.openingResult.length > 0 && (K = !1,
            Ni.value = (St = H.data) == null ? void 0 : St.issueNumber,
            z.value = H.data),
            K == !0 && q)) {
                clearTimeout(je),
                je = setTimeout( () => {
                    ai(!0)
                }
                , 1e3);
                return
            }
        }
        ;
        function Ka() {
            let q = JSON.parse(sessionStorage.getItem("xosoList") || "")
              , H = [];
            for (let K = 0; K < q.areInfos.length; K++)
                H.push({
                    text: l("code" + q.areInfos[K].areNameCode),
                    value: q.areInfos[K].areId,
                    disabled: !0,
                    info: q.areInfos[K].areIssueNos
                });
            y.value = H
        }
        function Xa(q, H) {
            var K;
            if (r.value == q.code) {
                Be.value = !1;
                return
            }
            Yi(),
            u.value = H,
            c.value = q.nameCode,
            r.value = q.code,
            L.value = 0,
            I.value = 0,
            x.value = f.value.length > 0 ? (K = f == null ? void 0 : f.value[0]) == null ? void 0 : K.categoryId : 1,
            Be.value = !1,
            Qa(q, H),
            _.value = q,
            q.type == "2" && (ve.value = !1,
            ai()),
            Ae(),
            In(),
            Jt( () => {
                we.value === "MyGameRecord" && U.value.getData(!0)
            }
            )
        }
        function Qa(q, H) {
            const K = Oo("hash");
            K.code = q == null ? void 0 : q.code,
            K.nameCode = q == null ? void 0 : q.nameCode,
            K.type = q == null ? void 0 : q.type,
            K.areId = H
        }
        const In = async () => {
            var H, K, ut, kt, Kt, Zt, be, me;
            xn(),
            oe();
            let q;
            m.value == "1" ? q = await nt(Ls({
                areaId: u.value
            })) : m.value == "2" && (q = await nt(Ns({
                areaId: u.value,
                typeId: Number(r.value)
            }))),
            q && (f.value = (K = (H = q.data) == null ? void 0 : H.areaConfigList[0]) == null ? void 0 : K.gameCategoryList,
            localStorage.setItem("gameCategoryList", JSON.stringify((ut = q.data.areaConfigList[0]) == null ? void 0 : ut.gameCategoryList)),
            A.value = (Kt = (kt = f == null ? void 0 : f.value[0]) == null ? void 0 : kt.gamePlayList[0]) == null ? void 0 : Kt.playNameCode,
            R.value = (be = (Zt = f == null ? void 0 : f.value[0]) == null ? void 0 : Zt.gamePlayList[0]) == null ? void 0 : be.playId,
            x.value = (me = f == null ? void 0 : f.value[0]) == null ? void 0 : me.categoryId,
            Ki())
        }
          , Za = (q, H) => {
            oe(),
            L.value = H,
            x.value = q,
            I.value = 0,
            R.value = f == null ? void 0 : f.value[H].gamePlayList[0].playId,
            M.value = f.value[H].gamePlayList[0].betType,
            A.value = f.value[H].gamePlayList[0].playNameCode,
            Ie.value = 0,
            Ki()
        }
          , Ya = (q, H, K, ut) => {
            I.value = H,
            R.value = q,
            A.value = K,
            M.value = Number(ut),
            Ie.value = 0,
            Ki(),
            oe()
        }
          , Ki = async () => {
            var H, K, ut, kt, Kt, Zt, be, me, mt, St, se, Rt, Ji, On, En, qn, jn, Hn, Wn, Fn, Vn;
            xn();
            let q;
            m.value == "1" ? q = await nt(zs({
                areaId: u.value,
                categoryId: x.value,
                playId: R.value
            })) : m.value == "2" && (q = await nt(Is({
                areaId: u.value,
                categoryId: x.value,
                playId: R.value
            }))),
            at.value = (H = q.data) == null ? void 0 : H.betMethod,
            _t.value = (K = q.data) == null ? void 0 : K.betScopeConfig,
            qt.value = (ut = q.data) == null ? void 0 : ut.isThreeNumber,
            bt.value = (kt = q.data) == null ? void 0 : kt.betNumber,
            yt.value = (Kt = q.data) == null ? void 0 : Kt.fastSpeciaSelectNo,
            Ot.value = (Zt = q.data) == null ? void 0 : Zt.fastRandomType,
            Vt.value = (be = q.data) == null ? void 0 : be.fastSpeciaType,
            ti.value = (me = q.data) == null ? void 0 : me.playOddInfo.defaultOdds,
            X.value = (mt = q.data) == null ? void 0 : mt.playOddInfo.oddsOrAmount,
            xt.value = (St = q.data) == null ? void 0 : St.playOddInfo.bettingAmount,
            Bt.value = (Rt = (se = q.data) == null ? void 0 : se.fastRandomSelecNo) == null ? void 0 : Rt.split(",").map(Number),
            ht.value = (On = (Ji = q.data) == null ? void 0 : Ji.playOddInfo.bettingMultiple) == null ? void 0 : On.split(",").map(Number),
            te.value = (qn = (En = q.data) == null ? void 0 : En.playOddInfo.bettingMultiple) == null ? void 0 : qn.split(",")[0],
            We.value = (jn = q.data) == null ? void 0 : jn.perBetNumber,
            x.value == 8 && (it.value = (Hn = q.data) == null ? void 0 : Hn.funPlayOddList),
            Ja((Wn = q.data) == null ? void 0 : Wn.betMethod),
            eo((Fn = q.data) == null ? void 0 : Fn.betNumber),
            io((Vn = q.data) == null ? void 0 : Vn.isThreeNumber)
        }
          , Ja = q => {
            q != null && q.includes("1") ? Y.value = 1 : x.value === 4 || x.value === 8 ? Y.value == 1 : Y.value = 3
        }
          , to = (q, H) => {
            ft.value = q.oddTypeName,
            Gt.value = q.oddsOrAmount,
            O.value = [ft.value],
            Wt(3, bt.value)
        }
          , eo = q => {
            q == 10 ? xe.value = 1 : q == 8 ? xe.value = 2 : q == 4 ? xe.value = 3 : q == 3 ? xe.value = 4 : q == 2 ? xe.value = 5 : xe.value = 0
        }
          , io = q => {
            q == 1 && (wt.value = vt.value.split("/")[0][0].toString())
        }
          , xn = () => {
            Y.value = 1,
            X.value = 0,
            xt.value = 0,
            ht.value = [],
            at.value = "",
            _t.value = "",
            Bt.value = [],
            qt.value = 0,
            bt.value = 0,
            yt.value = "",
            Ot.value = 0,
            Vt.value = 0,
            Tt.value = 1e3,
            wt.value = ""
        }
          , oe = () => {
            $t.value = [],
            ot.value = [],
            Z.value = [],
            tt.value = [],
            O.value = [],
            rt.value = 0,
            ft.value = "1000",
            Ge.value = 0,
            $e.value = 0,
            te.value = 1,
            It.value = "",
            Tt.value = 1e3,
            Jt( () => {
                b.value && b.value.cleardata()
            }
            )
        }
          , no = q => {
            It.value = q;
            let K = q.split(",").flatMap(ut => ut.split("|"));
            O.value = K.map(String),
            Wt(Y.value, bt.value)
        }
          , ao = (q, H, K, ut) => {
            q == "Thousand" ? ut == "all" ? $t.value = zi(H, K) : ut == "big" ? $t.value = Te(H, K, "big", 0) : ut == "small" ? $t.value = Te(H, K, "small", 0) : ut == "odd" ? $t.value = Ce(H, K, "odd", 0) : $t.value = Ce(H, K, "even", 0) : q == "hundred" ? ut == "all" ? ot.value = zi(H, K) : ut == "big" ? ot.value = Te(H, K, "big", 0) : ut == "small" ? ot.value = Te(H, K, "small", 0) : ut == "odd" ? ot.value = Ce(H, K, "odd", 0) : ot.value = Ce(H, K, "even", 0) : q == "ten" ? ut == "all" ? Z.value = zi(H, K) : ut == "big" ? Z.value = Te(H, K, "big", 0) : ut == "small" ? Z.value = Te(H, K, "small", 0) : ut == "odd" ? Z.value = Ce(H, K, "odd", 0) : Z.value = Ce(H, K, "even", 0) : ut == "all" ? tt.value = zi(H, K) : ut == "big" ? tt.value = Te(H, K, "big", 0) : ut == "small" ? tt.value = Te(H, K, "small", 0) : ut == "odd" ? tt.value = Ce(H, K, "odd", 0) : tt.value = Ce(H, K, "even", 0),
            Wt(Y.value, bt.value)
        }
          , oo = (q, H) => {
            if (q == 0)
                H == "even" ? (oe(),
                O.value = Ce(0, 99, "even", 2),
                Wt(Y.value, bt.value)) : H == "big" ? (oe(),
                O.value = Te(0, 99, "big", 2),
                Wt(Y.value, bt.value)) : H == "small" ? (oe(),
                O.value = Te(0, 99, "small", 2),
                Wt(Y.value, bt.value)) : H == "odd" ? (oe(),
                O.value = Ce(0, 99, "odd", 2),
                Wt(Y.value, bt.value)) : (oe(),
                O.value = Un(0, 99, 2),
                Wt(Y.value, bt.value));
            else {
                let K = Number(vt.value.split("/")[0])
                  , ut = Number(vt.value.split("/")[1]);
                H == "even" ? (oe(),
                O.value = Ce(K, ut, "even", 3),
                Wt(Y.value, bt.value)) : H == "big" ? (oe(),
                O.value = Te(K, ut, "big", 3),
                Wt(Y.value, bt.value)) : H == "small" ? (oe(),
                O.value = Te(K, ut, "small", 3),
                Wt(Y.value, bt.value)) : H == "odd" ? (oe(),
                O.value = Ce(K, ut, "odd", 3),
                Wt(Y.value, bt.value)) : (oe(),
                O.value = Un(K, ut, 3),
                Wt(Y.value, bt.value))
            }
        }
          , so = (q, H, K) => {
            if (q == "") {
                let ut = H + "" + K;
                O.value.includes(ut) ? O.value = O.value.filter(function(kt) {
                    return kt != ut
                }) : O.value.push(ut)
            } else {
                let ut = q + "" + H + K;
                O.value.includes(ut) ? O.value = O.value.filter(function(kt) {
                    return kt != ut
                }) : O.value.push(ut)
            }
            Wt(Y.value, bt.value)
        }
          , lo = (q, H) => {
            q == "Thousand" ? $t.value.includes(H) ? $t.value = $t.value.filter(function(K) {
                return K != H
            }) : $t.value.push(H) : q == "Hundred" ? ot.value.includes(H) ? ot.value = ot.value.filter(function(K) {
                return K != H
            }) : ot.value.push(H) : q == "ten" ? Z.value.includes(H) ? Z.value = Z.value.filter(function(K) {
                return K != H
            }) : Z.value.push(H) : tt.value.includes(H) ? tt.value = tt.value.filter(function(K) {
                return K != H
            }) : tt.value.push(H),
            Wt(Y.value, bt.value)
        }
          , co = (q, H) => {
            Ie.value = H,
            vt.value = q,
            Tt.value = 1e3,
            wt.value = vt.value.split("/")[0][0].toString(),
            oe()
        }
          , ro = (q, H, K) => {
            if (Tt.value = H,
            K == 0)
                O.value = Kn(Number(q) * bt.value, 0, 99, K),
                Wt(Y.value, bt.value);
            else {
                let ut = Number(vt.value.split("/")[0])
                  , kt = Number(vt.value.split("/")[1]);
                O.value = Kn(Number(q), ut, kt, K),
                Wt(Y.value, bt.value)
            }
        }
          , uo = q => {
            Y.value = q,
            oe()
        }
          , po = () => {
            Qt.value = !1,
            oe()
        }
          , go = q => {}
          , bo = () => {
            ii.value = !1,
            _i.value = !0
        }
          , mo = () => {
            Qt.value = !1,
            te.value = 1,
            Wt(Y.value, bt.value)
        }
          , Sn = () => {
            const q = f.value[L.value].gamePlayList[I.value].availableBetNumber
              , H = f.value[L.value].gamePlayList[I.value].eachIssueBetMaxWinningAmount;
            return $e.value > q ? Pt(l("xosoTip1", [q])) : Ge.value > H ? Pt(l("xosoTip2", [H])) : !0
        }
          , _o = async () => {
            var H, K, ut, kt;
            if (Sn() === !0) {
                if ($e.value > 5e3)
                    return Pt(l("xosoTxt94"));
                if (Y.value == 1)
                    (H = _t.value) != null && H.includes("4") ? tt.value.length > 0 && Z.value.length > 0 && ot.value.length > 0 && $t.value.length > 0 ? Qt.value = !0 : Pt(l("xosoTxt95")) : (K = _t.value) != null && K.includes("3") ? tt.value.length > 0 && Z.value.length > 0 && ot.value.length > 0 ? Qt.value = !0 : Pt(l("xosoTxt95")) : (ut = _t.value) != null && ut.includes("2") ? tt.value.length > 0 && Z.value.length > 0 && x.value != 4 || Z.value.length > 0 && x.value == 4 ? Qt.value = !0 : Pt(l("xosoTxt95")) : (kt = _t.value) != null && kt.includes("1") ? tt.value.length > 0 ? Qt.value = !0 : Pt(l("xosoTxt95")) : O.value.length > 0 && x.value == 8 ? Qt.value = !0 : Pt(l("xosoTxt95"));
                else if (Y.value == 3)
                    Rn(bt.value, O.value);
                else if (Y.value == 2) {
                    if (!Ws.inputrule.test(It.value))
                        return Pt({
                            message: l(Fs.inputtip),
                            wordBreak: "break-word"
                        });
                    for (let Kt = 0; Kt < O.value.length; Kt++)
                        if (O.value[Kt].toString().length != We.value)
                            return Pt(l("xosoTxt95"));
                    if (xs(O.value))
                        return Pt(l("xosoTxt98"));
                    Rn(bt.value, O.value)
                } else
                    x.value == 8 && O.value.length === 1 ? Qt.value = !0 : Pt(l("xosoTxt95"));
                Wt(Y.value, bt.value)
            }
        }
          , Rn = (q, H) => {
            q == 1 ? H.length > 0 ? Qt.value = !0 : Pt(l("xosoTxt95")) : q == 2 ? H.length % 2 == 0 ? Qt.value = !0 : Pt(l("xosoTxt95")) : q == 3 ? H.length % 3 == 0 ? Qt.value = !0 : Pt(l("xosoTxt95")) : q == 4 ? H.length % 4 == 0 ? Qt.value = !0 : Pt(l("xosoTxt95")) : q == 8 ? H.length % 8 == 0 ? Qt.value = !0 : Pt(l("xosoTxt95")) : q == 10 && (H.length % 10 == 0 ? Qt.value = !0 : Pt(l("xosoTxt95")))
        }
          , Xi = h(null)
          , vo = async () => {
            Xi.value && clearTimeout(Xi.value),
            Xi.value = setTimeout(async () => {
                var Zt, be, me;
                if (ce.value)
                    return he({
                        message: l("xosoTip6"),
                        wordBreak: "break-word"
                    });
                if (!ae.value || Sn() !== !0)
                    return;
                let H = []
                  , K = "";
                if (Y.value == 1 ? _t.value.toString().includes("4") ? K = $t.value.join("|") + "," + ot.value.join("|") + "," + Z.value.join("|") + "," + tt.value.join("|") : _t.value.toString().includes("3") ? K = ot.value.join("|") + "," + Z.value.join("|") + "," + tt.value.join("|") : _t.value.toString().includes("2") ? x.value == 4 ? K = Z.value.join(",") : K = Z.value.join("|") + "," + tt.value.join("|") : x.value == 4 ? (K = tt.value.join(","),
                Y.value = 3) : x.value == 8 && (K = O.value[0]) : [2, 3].includes(Y.value) ? bt.value == 1 ? K = O.value.join(",") : bt.value == 2 ? K = O.value.reduce( (St, se, Rt) => (Rt % 2 === 0 && St.push(se + "|" + O.value[Rt + 1]),
                St), []).join(",") : bt.value == 3 ? K = O.value.reduce( (St, se, Rt) => (Rt % 3 === 0 && St.push(se + "|" + O.value[Rt + 1] + "|" + O.value[Rt + 2]),
                St), []).join(",") : bt.value == 4 ? K = O.value.reduce( (St, se, Rt) => (Rt % 4 === 0 && St.push(se + "|" + O.value[Rt + 1] + "|" + O.value[Rt + 2] + "|" + O.value[Rt + 3]),
                St), []).join(",") : bt.value == 8 ? K = O.value.reduce( (St, se, Rt) => (Rt % 8 === 0 && St.push(se + "|" + O.value[Rt + 1] + "|" + O.value[Rt + 2] + "|" + O.value[Rt + 3] + "|" + O.value[Rt + 4] + "|" + O.value[Rt + 5] + "|" + O.value[Rt + 6] + "|" + O.value[Rt + 7]),
                St), []).join(",") : K = O.value.reduce( (St, se, Rt) => (Rt % 10 === 0 && St.push(se + "|" + O.value[Rt + 1] + "|" + O.value[Rt + 2] + "|" + O.value[Rt + 3] + "|" + O.value[Rt + 4] + "|" + O.value[Rt + 5] + "|" + O.value[Rt + 6] + "|" + O.value[Rt + 7] + "|" + O.value[Rt + 8] + "|" + O.value[Rt + 9]),
                St), []).join(",") : x.value === 8 && bt.value == 1 && (K = O.value[0],
                $e.value = bt.value),
                [4, 8].includes(x.value) && (Y.value = 3),
                K.replace(",", "").trim().length == 0 || $e.value == 0)
                    return;
                H.push({
                    bettingParentType: x.value,
                    bettingType: M.value,
                    bettingFormat: Y.value,
                    bettingContent: K,
                    totalBetting: $e.value,
                    initialAmount: xt.value,
                    bettingMultiple: te.value,
                    defaultOdds: ti.value
                });
                let[ut,kt] = [null, null]
                  , Kt = sa((Zt = _.value) == null ? void 0 : Zt.issueNo);
                if (m.value == "1" ? [ut,kt] = await ie(Ss({
                    areId: u.value,
                    issueNo: (be = _.value) == null ? void 0 : be.issueNo,
                    xosoBettingData: H
                })) : m.value == "2" && ([ut,kt] = await ie(Rs({
                    areId: u.value,
                    typeId: Number(r.value),
                    issueNo: (me = _.value) == null ? void 0 : me.issueNo,
                    xosoBettingData: H
                }))),
                kt) {
                    x.value === 4 && (Y.value = 1),
                    Qt.value = !1;
                    const mt = Bn(kt == null ? void 0 : kt.msgCode, kt == null ? void 0 : kt.msg);
                    pt.value = mt,
                    Ie.value = 0,
                    oe(),
                    Zi(),
                    we.value === "MyGameRecord" && U.value.getData(),
                    setTimeout( () => {
                        Gn(Kt)
                    }
                    , Number(Ut.value * 1e3) + 5e3)
                } else {
                    Qt.value = !1;
                    const mt = Bn(kt == null ? void 0 : kt.msgCode, kt == null ? void 0 : kt.msg);
                    pt.value = mt
                }
            }
            , 500)
        }
          , ko = () => {
            setTimeout( () => {
                et.value && (et.value = !1)
            }
            , 1500)
        }
          , Bn = (q, H) => {
            let K = "";
            switch (q) {
            case 345:
                K = l("xosoTip2", [H]),
                k.value = !0;
                break;
            case 346:
                K = l("xosoTip3"),
                k.value = !0;
                break;
            case 347:
                K = l("xosoTip3"),
                k.value = !0;
                break;
            case 348:
                K = l("xosoTip1", [H]),
                k.value = !0;
                break;
            case 349:
                K = l("xosoTip4"),
                k.value = !0;
                break;
            default:
                K = "code" + q,
                et.value = !0,
                ko();
                break
            }
            return K
        }
          , ho = () => {
            k.value = !1
        }
        ;
        let Qi = null;
        async function Gn(q) {
            if (g.value || m.value != "2")
                return;
            const H = await nt(Bs({
                issueNo: q
            }));
            if (H) {
                if (H.data.status == 1) {
                    clearTimeout(Qi),
                    Qi = setTimeout( () => {
                        Gn(q)
                    }
                    , 1e3);
                    return
                }
                Li.value.showMark(H.data),
                we.value === "MyGameRecord" && U.value.getData()
            }
        }
        const fo = q => {
            q <= 0 || (q >= 5e4 ? te.value = 5e4 : te.value = q),
            Wt(Y.value, bt.value)
        }
          , yo = (q, H) => {
            st.value = H,
            te.value = q,
            Wt(Y.value, bt.value)
        }
          , An = q => {
            switch (q) {
            case 1:
                te.value > 1 && (te.value--,
                Wt(Y.value, bt.value));
                break;
            case 2:
                te.value++,
                Wt(Y.value, bt.value);
                break
            }
        }
          , Wt = (q, H) => {
            H != 0 && ($e.value = $o(q, H),
            Ge.value = $e.value * xt.value * te.value * ti.value,
            x.value === 8 ? rt.value = Gt.value : rt.value = X.value)
        }
          , $o = (q, H) => {
            let K = 0;
            if (q == 1) {
                let ut = $t.value.length
                  , kt = ot.value.length
                  , Kt = Z.value.length
                  , Zt = tt.value.length;
                return _t.value.toString().includes("4") ? K = ut * kt * Kt * Zt : _t.value.toString().includes("3") ? K = kt * Kt * Zt : _t.value.toString().includes("2") ? x.value === 4 ? K = Kt : K = Kt * Zt : _t.value.toString().includes("1") ? K = Zt : x.value === 8 && (K = 1),
                K
            } else {
                if (q == 3)
                    return K = Math.floor(O.value.length / H),
                    K;
                if (q == 2)
                    return O.value.length == 1 && O.value[0] == "1" ? K = 0 : K = Math.floor(O.value.length / H),
                    K
            }
            return K
        }
          , wo = () => {
            i.go(-1)
        }
          , Mn = q => {
            var H;
            i.push({
                name: q,
                query: {
                    id: (H = o.query) == null ? void 0 : H.id
                }
            })
        }
          , Zi = async () => {
            const q = await nt(bn());
            q && (ei.value = (q == null ? void 0 : q.data.amount) || 0)
        }
        ;
        function To(q) {
            we.value = q,
            we.value == "GameRecord" && Jt( () => {
                U.value.getData()
            }
            )
        }
        Ka(),
        Ae(),
        m.value == "2" && ai(),
        In(),
        Zi();
        function Yi() {
            clearInterval(de.value),
            clearInterval(jt.value),
            clearTimeout(je),
            clearTimeout(Qi)
        }
        Si( () => {
            g.value = !0,
            Yi()
        }
        );
        const Co = Do();
        return At(Co, (q, H) => {
            q === "visible" && H === "hidden" ? (Ae(),
            m.value == "2" && ai(),
            Zi()) : Yi()
        }
        ),
        (q, H) => {
            var be, me;
            const K = W("NavBar")
              , ut = W("van-field")
              , kt = W("van-checkbox")
              , Kt = W("van-button")
              , Zt = W("van-popup");
            return n(),
            a(S, null, [t("div", l9, [C(K, {
                "left-arrow": "",
                onClickLeft: wo,
                class: "main"
            }, {
                center: P( () => [t("div", {
                    class: "centercity",
                    onClick: H[0] || (H[0] = mt => Be.value = !0)
                }, [E(e(p.value) + " ", 1), c9])]),
                _: 1
            }), $("彩种及玩法"), C(w6, {
                gameCategoryList: f.value,
                colortab: L.value,
                playtab: I.value,
                onColorupdate: Za,
                onUpdate: Ya
            }, null, 8, ["gameCategoryList", "colortab", "playtab"]), $("玩法说明"), m.value == "1" ? (n(),
            J(YC, {
                key: 0,
                defaultcityname: p.value,
                defaultplayname: A.value,
                defaultexpiredate: D.value,
                colorId: x.value,
                issue: (be = _.value) == null ? void 0 : be.issueNo,
                time: j.value,
                odds: X.value,
                areId: u.value
            }, null, 8, ["defaultcityname", "defaultplayname", "defaultexpiredate", "colorId", "issue", "time", "odds", "areId"])) : m.value == "2" ? (n(),
            J(f6, {
                key: 1,
                defaultcityname: p.value,
                defaultplayname: A.value,
                colorId: x.value,
                issue: (me = _.value) == null ? void 0 : me.issueNo,
                time: ee.value,
                odds: X.value,
                areId: u.value,
                resultList: z.value,
                isShowPreparing: ce.value
            }, null, 8, ["defaultcityname", "defaultplayname", "colorId", "issue", "time", "odds", "areId", "resultList", "isShowPreparing"])) : $("v-if", !0), $("趣味玩法"), x.value === 8 ? (n(),
            J(T4, {
                key: 2,
                funplaylist: it.value,
                numbercon: ft.value,
                onSelectvalue: to
            }, null, 8, ["funplaylist", "numbercon"])) : (n(),
            a(S, {
                key: 3
            }, [$("选择号码，输入号码，快捷选号"), C(v4, {
                ref_key: "numberselectRef",
                ref: b,
                methodList: at.value,
                activeTab: Y.value,
                randomList: Bt.value,
                randomtype: Ot.value,
                specialtype: Vt.value,
                isthreenumber: qt.value,
                speciaSelectNo: yt.value,
                isShowMark: ve.value,
                betconfig: _t.value,
                hundred: wt.value,
                groupTab: Tt.value,
                thousandnumList: $t.value,
                hundrednumList: ot.value,
                tennumList: Z.value,
                indicualnumList: tt.value,
                quicknumList: O.value,
                intervalnumber: ze.value,
                intervalTab: Ie.value,
                onTabupdate: uo,
                onSelectgroup: ro,
                onSelectinterval: co,
                onBetNum: lo,
                onBetQuickNum: so,
                onGetselect: ao,
                onGetquick: oo,
                onInputblur: no
            }, null, 8, ["methodList", "activeTab", "randomList", "randomtype", "specialtype", "isthreenumber", "speciaSelectNo", "isShowMark", "betconfig", "hundred", "groupTab", "thousandnumList", "hundrednumList", "tennumList", "indicualnumList", "quicknumList", "intervalnumber", "intervalTab"])], 2112)), $("投注记录和比赛结果"), C(E4, {
                record: we.value,
                onChangeC: To
            }, null, 8, ["record"]), $(" 动态展示对应的组件 "), (n(),
            J(Ue, null, [(n(),
            J(He(Ui[we.value]), {
                ref_key: "RecordComponent",
                ref: U,
                ApiFun: Ht.value,
                areId: u.value,
                cityCode: r.value,
                parmas: w,
                gVSs: m.value
            }, null, 8, ["ApiFun", "areId", "cityCode", "parmas", "gVSs"]))], 1024)), $("foot"), C(M4, {
                betNumber: $e.value,
                betSum: Ge.value,
                onPlayBet: _o
            }, null, 8, ["betNumber", "betSum"]), $(" 中奖提示组件 "), C(s9, {
                ref_key: "WinningTipsRef",
                ref: Li
            }, null, 512)]), $("下注弹窗"), C(Zt, {
                show: Qt.value,
                "onUpdate:show": H[8] || (H[8] = mt => Qt.value = mt),
                "close-on-click-overlay": !1,
                class: "popup",
                position: "bottom"
            }, {
                default: P( () => [t("div", r9, [t("div", {
                    class: "close",
                    onClick: po
                }, [t("img", {
                    class: "img",
                    src: d(Ft)("main", "close")
                }, null, 8, u9)]), t("div", d9, e(q.$t("bettingnumber")), 1), x.value === 6 || u.value === 2 && x.value === 1 && R.value === 4 || u.value === 3 && x.value === 1 && R.value === 4 || u.value === 1 && x.value === 1 && R.value === 5 ? (n(),
                a("div", p9, e(q.$t("xosoTxt93")), 1)) : $("v-if", !0), Y.value == 2 || Y.value == 3 ? (n(),
                a("div", {
                    key: 1,
                    class: B("c-row c-flex-warp compound" + Y.value)
                }, [t("div", {
                    class: B("c-row item item" + xe.value + "-" + We.value)
                }, [t("div", g9, [t("div", b9, [(n(!0),
                a(S, null, G(O.value, (mt, St) => (n(),
                a("div", {
                    class: "num c-row c-row-middle-center",
                    key: St
                }, e(mt), 1))), 128))])])], 2)], 2)) : $("v-if", !0), Y.value == 1 ? (n(),
                a("div", m9, [$t.value.length > 0 ? (n(),
                a("div", _9, [t("div", v9, e(q.$t("xosoTxt87")), 1), t("div", k9, [(n(!0),
                a(S, null, G($t.value, (mt, St) => (n(),
                a("div", {
                    class: "num",
                    key: St
                }, e(mt), 1))), 128))])])) : $("v-if", !0), ot.value.length > 0 ? (n(),
                a("div", h9, [t("div", f9, e(q.$t("xosoTxt88")), 1), t("div", y9, [(n(!0),
                a(S, null, G(ot.value, (mt, St) => (n(),
                a("div", {
                    class: "num",
                    key: St
                }, e(mt), 1))), 128))])])) : $("v-if", !0), Z.value.length > 0 ? (n(),
                a("div", $9, [t("div", w9, e(q.$t("xosoTxt89")), 1), t("div", T9, [(n(!0),
                a(S, null, G(Z.value, (mt, St) => (n(),
                a("div", {
                    class: "num",
                    key: St
                }, e(mt), 1))), 128))])])) : $("v-if", !0), tt.value.length > 0 ? (n(),
                a("div", C9, [t("div", L9, e(q.$t("xosoTxt90")), 1), t("div", N9, [(n(!0),
                a(S, null, G(tt.value, (mt, St) => (n(),
                a("div", {
                    class: "num",
                    key: St
                }, e(mt), 1))), 128))])])) : $("v-if", !0), O.value.length > 0 ? (n(),
                a("div", z9, [t("div", I9, [(n(!0),
                a(S, null, G(O.value, (mt, St) => (n(),
                a("div", {
                    class: "num",
                    key: St
                }, e(mt), 1))), 128))])])) : $("v-if", !0)])) : $("v-if", !0), t("div", x9, [t("div", S9, [t("div", R9, e(q.$t("multiple")), 1), t("div", B9, [t("div", {
                    class: "li minus",
                    onClick: H[1] || (H[1] = mt => An(1))
                }, "-"), C(ut, {
                    class: "digit-box",
                    modelValue: te.value,
                    "onUpdate:modelValue": H[2] || (H[2] = mt => te.value = mt),
                    type: "digit",
                    maxlength: 5,
                    onInput: H[3] || (H[3] = mt => fo(te.value))
                }, null, 8, ["modelValue"]), t("div", {
                    class: "li plus c-row c-row-middle-center",
                    onClick: H[4] || (H[4] = mt => An(2))
                }, "+")])]), t("div", G9, [t("div", A9, [(n(!0),
                a(S, null, G(ht.value, (mt, St) => (n(),
                a("div", {
                    class: B(te.value == mt ? "action li" : "li"),
                    onClick: se => yo(mt, St)
                }, " X" + e(mt), 11, M9))), 256))])]), t("div", P9, [t("div", D9, [E(e(q.$t("quantity")) + " ", 1), O9, t("span", E9, e($e.value || 0) + e(q.$t("note")), 1)]), t("div", q9, [E(e(q.$t("odds")), 1), j9, E(), t("span", H9, e(rt.value), 1)])]), t("div", W9, [t("div", F9, [E(e(q.$t("walletBalance")) + " ", 1), t("span", V9, e(d(Ct)(ei.value)), 1)])]), t("div", U9, [t("div", K9, [E(e(q.$t("betAmounts")), 1), t("span", X9, e(d(Ct)(Ge.value)), 1)])]), Ge.value > ei.value ? (n(),
                a("div", Q9, [t("div", Z9, [t("img", {
                    src: d(Xt)("home/AllLotteryGames/NewVietnam", "tip")
                }, null, 8, Y9), E(e(q.$t("insufficientWallet")), 1)]), t("div", {
                    class: "txt bg333",
                    onClick: H[5] || (H[5] = mt => Mn("Recharge"))
                }, e(q.$t("torecharge")) + " >>", 1)])) : $("v-if", !0), t("div", J9, [C(kt, {
                    modelValue: _i.value,
                    "onUpdate:modelValue": H[6] || (H[6] = mt => _i.value = mt),
                    shape: "square",
                    "checked-color": "#F4453E",
                    onChange: go
                }, {
                    default: P( () => [t("div", tL, e(q.$t("agree")), 1)]),
                    _: 1
                }, 8, ["modelValue"]), t("span", {
                    class: "txt",
                    onClick: H[7] || (H[7] = mt => ii.value = !0)
                }, e(q.$t("presaleRules")), 1)])])]), t("div", eL, [t("div", iL, [C(Kt, {
                    class: "btn",
                    block: "",
                    onClick: mo
                }, {
                    default: P( () => [t("span", null, e(q.$t("cancel")), 1)]),
                    _: 1
                })]), t("div", nL, [C(Kt, {
                    class: B(["btn", {
                        noActive: !ae.value
                    }]),
                    block: "",
                    onClick: vo
                }, {
                    default: P( () => [t("span", aL, e(q.$t("betting")), 1)]),
                    _: 1
                }, 8, ["class"])])])]),
                _: 1
            }, 8, ["show"]), $("顶部弹窗"), C(Zt, {
                class: "areBox",
                show: Be.value,
                "onUpdate:show": H[10] || (H[10] = mt => Be.value = mt),
                round: "",
                position: "bottom",
                style: {
                    overflow: "initial"
                }
            }, {
                default: P( () => [t("div", oL, [t("img", {
                    class: "close",
                    src: d(Ft)("main", "close"),
                    alt: "",
                    onClick: H[9] || (H[9] = () => Be.value = !1)
                }, null, 8, sL), (n(!0),
                a(S, null, G(y.value, (mt, St) => (n(),
                a("div", {
                    class: "items",
                    key: St
                }, [t("h1", null, e(mt.text), 1), t("div", lL, [(n(!0),
                a(S, null, G(mt.info, (se, Rt) => (n(),
                a("div", {
                    key: Rt,
                    class: B({
                        isActive: r.value == se.code
                    }),
                    onClick: Ji => Xa(se, mt.value)
                }, e(q.$t("code" + se.nameCode)), 11, cL))), 128))])]))), 128))])]),
                _: 1
            }, 8, ["show"]), $("预售规则"), C(Zt, {
                show: ii.value,
                "onUpdate:show": H[11] || (H[11] = mt => ii.value = mt),
                class: "PreSaleRule",
                "close-on-click-overlay": !1,
                round: ""
            }, {
                default: P( () => [t("div", rL, [t("div", uL, e(d(l)("presaleRules")), 1), t("div", dL, e(q.$t("betPopTXT")), 1), t("div", pL, [t("div", {
                    class: "btn",
                    onClick: bo
                }, e(d(l)("iKonw")), 1)])])]),
                _: 1
            }, 8, ["show"]), $("提示"), C(Zt, {
                show: et.value,
                "onUpdate:show": H[12] || (H[12] = mt => et.value = mt),
                class: "Tips",
                "close-on-click-overlay": !0
            }, {
                default: P( () => [t("div", null, [pt.value == "code402" ? (n(),
                a("img", {
                    key: 0,
                    src: d(Ft)("home/AllLotteryGames/NewVietnam", "success")
                }, null, 8, gL)) : (n(),
                a("img", {
                    key: 1,
                    src: d(Ft)("home/AllLotteryGames/NewVietnam", "fail")
                }, null, 8, bL)), t("div", mL, e(q.$t(pt.value)), 1)])]),
                _: 1
            }, 8, ["show"]), C(Re, {
                show: k.value,
                "onUpdate:show": H[13] || (H[13] = mt => k.value = mt),
                onConfirm: ho,
                confirmText: d(l)("confirm"),
                showCancelBtn: !1
            }, {
                content: P( () => [t("div", _L, e(pt.value ? q.$t(pt.value) : ""), 1)]),
                _: 1
            }, 8, ["show", "confirmText"])], 64)
        }
    }
});
const kL = V(vL, [["__scopeId", "data-v-b1e14027"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/home/AllLotteryGames/NewVietnam/index.vue"]])
  , $G = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: kL
}, Symbol.toStringTag, {
    value: "Module"
}))
  , hL = {
    class: "Play__C"
}
  , fL = {
    class: "title"
}
  , yL = ["src"]
  , $L = {
    class: "info"
}
  , wL = ["src"]
  , TL = {
    class: "sub"
}
  , CL = {
    class: "text"
}
  , LL = {
    class: "info_text"
}
  , NL = {
    class: "forexample"
}
  , zL = {
    key: 0,
    class: "betting"
}
  , IL = {
    class: "result"
}
  , xL = {
    key: 0,
    class: "info_item"
}
  , SL = ["src"]
  , RL = {
    class: "sub"
}
  , BL = {
    class: "text"
}
  , GL = {
    key: 1,
    class: "info_text"
}
  , AL = {
    class: "forexample"
}
  , ML = {
    class: "result"
}
  , PL = F({
    __name: "NorthPlay",
    setup(s) {
        const {t: i} = gt()
          , o = h(0)
          , l = Et([{
            title: i("xosoTab1"),
            subList: [{
                sub: i("xosoSub1"),
                num: "［45］",
                resultTip: i("xosoTxt3", ["27"]),
                txtList: [{
                    bet: i("betting"),
                    betTip: i("xosoTxt1")
                }, {
                    bet: i("winningconditions"),
                    betTip: i("xosoTxt2", ["27", "2"])
                }]
            }, {
                sub: i("xosoSub2"),
                num: "［45］",
                resultTip: i("xosoTxt5"),
                txtList: [{
                    bet: i("betting"),
                    betTip: i("xosoTxt1")
                }, {
                    bet: i("winningconditions"),
                    betTip: i("xosoTxt4")
                }]
            }, {
                sub: i("xosoSub3"),
                num: "［45］",
                resultTip: i("xosoTxt6", ["27"]),
                txtList: [{
                    bet: i("betting"),
                    betTip: i("xosoTxt1")
                }, {
                    bet: i("winningconditions"),
                    betTip: i("xosoTxt2", ["27", "2"])
                }]
            }, {
                sub: i("xosoSub4"),
                num: "［456］",
                resultTip: i("xosoTxt9", ["23"]),
                txtList: [{
                    bet: i("betting"),
                    betTip: i("xosoTxt8")
                }, {
                    bet: i("winningconditions"),
                    betTip: i("xosoTxt2", ["23", "3"])
                }]
            }, {
                sub: i("xosoSub5"),
                num: "［4567］",
                resultTip: i("xosoTxt11", ["20"]),
                txtList: [{
                    bet: i("betting"),
                    betTip: i("xosoTxt10")
                }, {
                    bet: i("winningconditions"),
                    betTip: i("xosoTxt2", ["20", "4"])
                }]
            }]
        }, {
            title: i("xosoTab2"),
            subList: [{
                sub: i("xosoSub6"),
                num: "［45/55］",
                resultTip: i("xosoTxt14", ["27"]),
                txtList: [{
                    bet: i("betting"),
                    betTip: i("xosoTxt12", ["2"])
                }, {
                    bet: i("winningconditions"),
                    betTip: i("xosoTxt13", ["27", "2", "2"])
                }]
            }, {
                sub: i("xosoSub7"),
                num: "［45/55/65］",
                resultTip: i("xosoTxt15", ["27"]),
                txtList: [{
                    bet: i("betting"),
                    betTip: i("xosoTxt12", ["3"])
                }, {
                    bet: i("winningconditions"),
                    betTip: i("xosoTxt13", ["27", "3", "2"])
                }]
            }, {
                sub: i("xosoSub8"),
                num: "［45/55/65/75］",
                resultTip: i("xosoTxt16", ["27"]),
                txtList: [{
                    bet: i("betting"),
                    betTip: i("xosoTxt12", ["4"])
                }, {
                    bet: i("winningconditions"),
                    betTip: i("xosoTxt13", ["27", "4", "2"])
                }]
            }]
        }, {
            title: i("xosoTab3"),
            subList: [{
                sub: i("xosoSub9"),
                num: "［45］",
                resultTip: i("xosoTxt19"),
                txtList: [{
                    bet: i("betting"),
                    betTip: i("xosoTxt1")
                }, {
                    bet: i("winningconditions"),
                    betTip: i("xosoTxt17")
                }]
            }, {
                sub: i("xosoSub18"),
                num: "［45］",
                resultTip: i("xosoTxt23"),
                txtList: [{
                    bet: i("betting"),
                    betTip: i("xosoTxt1")
                }, {
                    bet: i("winningconditions"),
                    betTip: i("xosoTxt21")
                }]
            }, {
                sub: i("xosoSub11"),
                num: "［45］",
                resultTip: i("xosoTxt27"),
                txtList: [{
                    bet: i("betting"),
                    betTip: i("xosoTxt1")
                }, {
                    bet: i("winningconditions"),
                    betTip: i("xosoTxt25")
                }]
            }, {
                sub: i("xosoSub12"),
                num: "［45］",
                resultTip: i("xosoTxt35"),
                txtList: [{
                    bet: i("betting"),
                    betTip: i("xosoTxt1")
                }, {
                    bet: i("winningconditions"),
                    betTip: i("xosoTxt34")
                }]
            }, {
                sub: i("xosoSub13"),
                num: "［45］",
                resultTip: i("xosoTxt37"),
                txtList: [{
                    bet: i("betting"),
                    betTip: i("xosoTxt1")
                }, {
                    bet: i("winningconditions"),
                    betTip: i("xosoTxt36")
                }]
            }]
        }, {
            title: i("xosoTab4"),
            subList: [{
                sub: i("xosoSub17"),
                num: "［4］",
                resultTip: i("xosoTxt31"),
                txtList: [{
                    bet: i("betting"),
                    betTip: i("xosoTxt29")
                }, {
                    bet: i("winningconditions"),
                    betTip: i("xosoTxt30")
                }]
            }, {
                sub: i("xosoTxt100"),
                num: "［4］",
                resultTip: i("xosoTxt33"),
                txtList: [{
                    bet: i("betting"),
                    betTip: i("xosoTxt101")
                }, {
                    bet: i("winningconditions"),
                    betTip: i("xosoTxt102")
                }]
            }]
        }, {
            title: i("xosoTab5"),
            subList: [{
                sub: i("xosoSub19"),
                num: "［456］",
                resultTip: i("xosoTxt41"),
                txtList: [{
                    bet: i("betting"),
                    betTip: i("xosoTxt38")
                }, {
                    bet: i("winningconditions"),
                    betTip: i("xosoTxt39")
                }]
            }, {
                sub: i("xosoSub20"),
                num: "［456］",
                resultTip: i("xosoTxt45"),
                txtList: [{
                    bet: i("betting"),
                    betTip: i("xosoTxt43")
                }, {
                    bet: i("winningconditions"),
                    betTip: i("xosoTxt44")
                }]
            }, {
                sub: i("xosoSub21"),
                num: "［456］",
                resultTip: i("xosoTxt49"),
                txtList: [{
                    bet: i("betting"),
                    betTip: i("xosoTxt43")
                }, {
                    bet: i("winningconditions"),
                    betTip: i("xosoTxt47")
                }]
            }, {
                sub: i("xosoSub22"),
                num: "［456］",
                resultTip: i("xosoTxt55"),
                txtList: [{
                    bet: i("betting"),
                    betTip: i("xosoTxt43")
                }, {
                    bet: i("winningconditions"),
                    betTip: i("xosoTxt54")
                }]
            }]
        }, {
            title: i("xosoTab6"),
            subList: [{
                sub: i("xosoSub25"),
                num: "［4567］",
                resultTip: i("xosoTxt53"),
                txtList: [{
                    bet: i("betting"),
                    betTip: i("xosoTxt51")
                }, {
                    bet: i("winningconditions"),
                    betTip: i("xosoTxt52")
                }]
            }]
        }, {
            title: i("xosoTab7"),
            subList: [{
                sub: i("xosoSub26"),
                num: "［45/55/66/77］",
                resultTip: i("xosoTxt57", ["27"]),
                txtList: [{
                    bet: i("betting"),
                    betTip: i("xosoTxt12", ["4"])
                }, {
                    bet: i("winningconditions"),
                    betTip: i("xosoTxt56", ["27"])
                }]
            }, {
                sub: i("xosoSub27"),
                num: "［45/55/66/77/88/99/11/22］",
                resultTip: i("xosoTxt58", ["27"]),
                txtList: [{
                    bet: i("betting"),
                    betTip: i("xosoTxt12", ["8"])
                }, {
                    bet: i("winningconditions"),
                    betTip: i("xosoTxt56", ["27"])
                }]
            }, {
                sub: i("xosoSub28"),
                num: "［45/55/66/77/88/99/11/22/33/44］",
                resultTip: i("xosoTxt59", ["27"]),
                txtList: [{
                    bet: i("betting"),
                    betTip: i("xosoTxt12", ["10"])
                }, {
                    bet: i("winningconditions"),
                    betTip: i("xosoTxt56", ["27"])
                }]
            }]
        }, {
            title: i("xosoTab8"),
            subList: [{
                sub: i("xosoTxt60"),
                num: "",
                resultTip: i("xosoTxt66"),
                txtList: [{
                    bet: i("xosoTxt60"),
                    betTip: i("xosoTxt61")
                }, {
                    bet: i("big"),
                    betTip: i("xosoTxt62")
                }, {
                    bet: i("small"),
                    betTip: i("xosoTxt63")
                }, {
                    bet: i("xosoTxt69"),
                    betTip: i("xosoTxt64")
                }, {
                    bet: i("xosoTxt70"),
                    betTip: i("xosoTxt65")
                }]
            }]
        }]);
        return (g, m) => {
            const c = W("van-tab")
              , u = W("van-tabs");
            return n(),
            a("div", hL, [C(u, {
                active: o.value,
                "onUpdate:active": m[0] || (m[0] = p => o.value = p),
                type: "card"
            }, {
                default: P( () => [(n(!0),
                a(S, null, G(l, (p, r) => (n(),
                J(c, {
                    title: p.title,
                    key: r
                }, {
                    default: P( () => [(n(!0),
                    a(S, null, G(p.subList, (b, _) => (n(),
                    a("div", {
                        class: "Play__C-Cotent",
                        key: _
                    }, [t("div", fL, [t("img", {
                        src: d(Ft)("home/AllLotteryGames/NewVietnam", "Star")
                    }, null, 8, yL), t("span", null, e(b.sub), 1)]), t("div", $L, [(n(!0),
                    a(S, null, G(b.txtList, (w, T) => (n(),
                    a("div", {
                        class: "info_item",
                        key: T
                    }, [t("img", {
                        src: d(Xt)("public", "Triangle")
                    }, null, 8, wL), t("span", TL, e(w.bet), 1), t("div", CL, e(w.betTip), 1)]))), 128)), t("div", LL, [t("div", NL, e(d(i)("forexample")), 1), b.num ? (n(),
                    a("div", zL, e(d(i)("betting")) + "：" + e(b.num), 1)) : $("v-if", !0), t("div", IL, e(d(i)("result")) + "：" + e(b.resultTip), 1)]), o.value === 7 ? (n(),
                    a("div", xL, [t("img", {
                        src: d(Xt)("public", "Triangle")
                    }, null, 8, SL), t("span", RL, e(d(i)("xosoTxt71")), 1), t("div", BL, e(d(i)("xosoTxt67")), 1)])) : $("v-if", !0), o.value === 7 ? (n(),
                    a("div", GL, [t("div", AL, e(d(i)("forexample")), 1), t("div", ML, e(d(i)("result")) + "： " + e(d(i)("xosoTxt68")), 1)])) : $("v-if", !0)])]))), 128))]),
                    _: 2
                }, 1032, ["title"]))), 128))]),
                _: 1
            }, 8, ["active"])])
        }
    }
});
const DL = V(PL, [["__scopeId", "data-v-b67ec5ce"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/AllLotteryGames/NewVietnam/NorthPlay.vue"]])
  , Ti = s => (Nt("data-v-33026085"),
s = s(),
zt(),
s)
  , OL = {
    class: "NorthRule__C"
}
  , EL = {
    class: "NorthRule__C-title"
}
  , qL = {
    class: "NorthRule__C-tips"
}
  , jL = Ti( () => t("div", {
    class: "borderTopStyle"
}, [t("span"), t("span")], -1))
  , HL = {
    class: "title"
}
  , WL = {
    class: "text"
}
  , FL = {
    class: "table"
}
  , VL = {
    class: "table-row header-time"
}
  , UL = {
    class: "table-time-1"
}
  , KL = Ti( () => t("div", {
    class: "table-time-1"
}, "18:15", -1))
  , XL = {
    class: "table-row header-week"
}
  , QL = {
    class: "table-week-1"
}
  , ZL = {
    class: "table-week-1"
}
  , YL = {
    class: "table-cell-1"
}
  , JL = {
    class: "table-cell-1"
}
  , tN = Ti( () => t("div", {
    class: "borderTopStyle"
}, [t("span"), t("span")], -1))
  , eN = {
    class: "title"
}
  , iN = {
    class: "text"
}
  , nN = {
    key: 0,
    class: "text"
}
  , aN = {
    key: 1,
    class: "text"
}
  , oN = {
    class: "NorthRule__C-Rule"
}
  , sN = {
    class: "NorthRule__C-Struct"
}
  , lN = Ti( () => t("span", {
    class: "left"
}, null, -1))
  , cN = Ti( () => t("span", {
    class: "right"
}, null, -1))
  , rN = {
    class: "table-rule"
}
  , uN = {
    class: "table-header"
}
  , dN = {
    class: "table-header-cell"
}
  , pN = {
    class: "table-header-cell"
}
  , gN = {
    class: "table-header-cell"
}
  , bN = {
    class: "table-cell"
}
  , mN = {
    class: "table-cell"
}
  , _N = {
    class: "table-cell"
}
  , vN = {
    class: "table-rule"
}
  , kN = {
    class: "table-header"
}
  , hN = {
    class: "table-header-cell"
}
  , fN = {
    key: 0,
    class: "table-box-title"
}
  , yN = F({
    __name: "NorthRule",
    setup(s) {
        const {t: i} = gt()
          , o = Et([{
            title: "01",
            sub: i("resultsVielottery")
        }, {
            title: "02",
            sub: i("systemresult")
        }, {
            title: "03",
            sub: i("lotterytime")
        }])
          , l = Et([{
            title: "04",
            sub: i("oddsmiscalculated")
        }, {
            title: "05",
            sub: i("oddsbettingprincipal")
        }, {
            title: "06",
            sub: i("oddsfluctuate")
        }, {
            title: "07",
            sub: i("oncebetgenerated")
        }, {
            title: "08",
            sub: i("anyreasonCauses")
        }, {
            title: "09",
            sub: i("platformcancel"),
            sub1: i("drawdelayedtoolong"),
            sub2: i("resultsofthelotterybeenleaked")
        }])
          , g = Et([{
            week: i("Monday"),
            addressList: i("Hanoi")
        }, {
            week: i("Tuesday"),
            addressList: i("quangNinh")
        }, {
            week: i("Wednesday"),
            addressList: i("bacninh")
        }, {
            week: i("Thursday"),
            addressList: i("Hanoi")
        }, {
            week: i("Friday"),
            addressList: i("haiphong")
        }, {
            week: i("Saturday"),
            addressList: i("nanning")
        }, {
            week: i("Sunday"),
            addressList: i("taiping")
        }])
          , m = Et([{
            title: i("GrandPrize"),
            quantity: 1,
            number: i("fivedigits"),
            drawsNumber: ["29818"]
        }, {
            title: i("FirstPrize"),
            quantity: 1,
            number: i("fivedigits"),
            drawsNumber: ["69388"]
        }, {
            title: i("SecondPrize"),
            quantity: 2,
            number: i("fivedigits"),
            drawsNumber: ["66992", "95797"]
        }, {
            title: i("ThirdPrize"),
            quantity: 6,
            number: i("fivedigits"),
            drawsNumber: ["99095", "32620", "51685", "12345", "69548", "69874"]
        }, {
            title: i("FourPrize"),
            quantity: 4,
            number: i("fourdigits"),
            drawsNumber: ["6545", "5257", "7896", "3682"]
        }, {
            title: i("FivePrize"),
            quantity: 6,
            number: i("fourdigits"),
            drawsNumber: ["4567", "8533", "7632", "7632", "6673", "7855"]
        }, {
            title: i("SixPrize"),
            quantity: 3,
            number: i("fourdigits"),
            drawsNumber: ["567", "642", "934"]
        }, {
            title: i("SevenPrize"),
            quantity: 4,
            number: i("seconddigits"),
            drawsNumber: ["48", "64", "32", "51"]
        }, {
            title: i("intotal"),
            quantity: i("lotteryawards"),
            number: ""
        }]);
        return (c, u) => (n(),
        a("div", OL, [t("div", EL, e(d(i)("northVieLotteryGameRules")), 1), t("div", qL, e(d(i)("precautions")), 1), (n(!0),
        a(S, null, G(o, (p, r) => (n(),
        a("div", {
            class: "NorthRule__C-Content",
            key: r
        }, [jL, t("div", HL, e(p.title), 1), t("div", WL, e(p.sub), 1)]))), 128)), t("div", FL, [t("div", VL, [t("div", UL, e(d(i)("winTrxTime")), 1), KL]), t("div", XL, [t("div", QL, e(d(i)("weeks")), 1), t("div", ZL, e(d(i)("northLotteryCities")), 1)]), (n(!0),
        a(S, null, G(g, (p, r) => (n(),
        a("div", {
            class: "table-row",
            key: r
        }, [t("div", YL, e(p.week), 1), t("div", JL, e(p.addressList), 1)]))), 128))]), (n(!0),
        a(S, null, G(l, (p, r) => (n(),
        a("div", {
            class: "NorthRule__C-Content",
            key: r
        }, [tN, t("div", eN, e(p.title), 1), t("div", iN, e(p.sub), 1), p.sub1 ? (n(),
        a("div", nN, e(p.sub1), 1)) : $("v-if", !0), p.sub2 ? (n(),
        a("div", aN, e(p.sub2), 1)) : $("v-if", !0)]))), 128)), t("div", oN, e(d(i)("northernLotteryGameRules")), 1), t("div", sN, [lN, E(e(d(i)("colorstructure")), 1), cN]), t("div", rN, [t("div", uN, [t("div", dN, e(d(i)("Lottery")), 1), t("div", pN, e(d(i)("numberofPrizes")), 1), t("div", gN, e(d(i)("Number")), 1)]), (n(!0),
        a(S, null, G(m, (p, r) => (n(),
        a("div", {
            class: "table-row",
            key: r
        }, [t("div", bN, e(p.title), 1), t("div", mN, e(p.quantity), 1), t("div", _N, e(p.number), 1)]))), 128))]), t("div", vN, [t("div", kN, [t("div", hN, e(d(i)("sorthlotteryresult")), 1)]), (n(!0),
        a(S, null, G(m, (p, r) => (n(),
        a("div", {
            class: B(r == 8 ? "table-box none" : "table-box"),
            key: r
        }, [r != 8 ? (n(),
        a("div", fN, e(p.title), 1)) : $("v-if", !0), (n(!0),
        a(S, null, G(p.drawsNumber, (b, _) => (n(),
        a("div", {
            class: "table-box-number",
            key: _
        }, e(b), 1))), 128))], 2))), 128))])]))
    }
});
const $N = V(yN, [["__scopeId", "data-v-33026085"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/AllLotteryGames/NewVietnam/NorthRule.vue"]])
  , wN = {
    class: "Play__C"
}
  , TN = {
    class: "title"
}
  , CN = ["src"]
  , LN = {
    class: "info"
}
  , NN = ["src"]
  , zN = {
    class: "sub"
}
  , IN = {
    class: "text"
}
  , xN = {
    class: "info_text"
}
  , SN = {
    class: "forexample"
}
  , RN = {
    key: 0,
    class: "betting"
}
  , BN = {
    class: "result"
}
  , GN = {
    key: 0,
    class: "info_item"
}
  , AN = ["src"]
  , MN = {
    class: "sub"
}
  , PN = {
    class: "text"
}
  , DN = {
    key: 1,
    class: "info_text"
}
  , ON = {
    class: "forexample"
}
  , EN = {
    class: "result"
}
  , qN = F({
    __name: "SorthPlay",
    setup(s) {
        const {t: i} = gt()
          , o = h(0)
          , l = Et([{
            title: i("xosoTab1"),
            subList: [{
                sub: i("xosoSub1"),
                num: "［45］",
                resultTip: i("xosoTxt3", ["18"]),
                txtList: [{
                    bet: i("betting"),
                    betTip: i("xosoTxt1")
                }, {
                    bet: i("winningconditions"),
                    betTip: i("xosoTxt2", ["18", "2"])
                }]
            }, {
                sub: i("xosoSub3"),
                num: "［45］",
                resultTip: i("xosoTxt6", ["18"]),
                txtList: [{
                    bet: i("betting"),
                    betTip: i("xosoTxt1")
                }, {
                    bet: i("winningconditions"),
                    betTip: i("xosoTxt2", ["18", "2"])
                }]
            }, {
                sub: i("xosoSub4"),
                num: "［456］",
                resultTip: i("xosoTxt9", ["17"]),
                txtList: [{
                    bet: i("betting"),
                    betTip: i("xosoTxt8")
                }, {
                    bet: i("winningconditions"),
                    betTip: i("xosoTxt2", ["17", "3"])
                }]
            }, {
                sub: i("xosoSub5"),
                num: "［4567］",
                resultTip: i("xosoTxt11", ["16"]),
                txtList: [{
                    bet: i("betting"),
                    betTip: i("xosoTxt10")
                }, {
                    bet: i("winningconditions"),
                    betTip: i("xosoTxt2", ["16", "4"])
                }]
            }]
        }, {
            title: i("xosoTab2"),
            subList: [{
                sub: i("xosoSub6"),
                num: "［45/55］",
                resultTip: i("xosoTxt14", ["18"]),
                txtList: [{
                    bet: i("betting"),
                    betTip: i("xosoTxt12", ["2"])
                }, {
                    bet: i("winningconditions"),
                    betTip: i("xosoTxt13", ["18", "2", "2"])
                }]
            }, {
                sub: i("xosoSub7"),
                num: "［45/55/65］",
                resultTip: i("xosoTxt15", ["18"]),
                txtList: [{
                    bet: i("betting"),
                    betTip: i("xosoTxt12", ["3"])
                }, {
                    bet: i("winningconditions"),
                    betTip: i("xosoTxt13", ["18", "3", "2"])
                }]
            }, {
                sub: i("xosoSub8"),
                num: "［45/55/65/75］",
                resultTip: i("xosoTxt16", ["18"]),
                txtList: [{
                    bet: i("betting"),
                    betTip: i("xosoTxt12", ["4"])
                }, {
                    bet: i("winningconditions"),
                    betTip: i("xosoTxt13", ["18", "4", "2"])
                }]
            }]
        }, {
            title: i("xosoTab3"),
            subList: [{
                sub: i("xosoSub14"),
                num: "［45］",
                resultTip: i("xosoTxt20"),
                txtList: [{
                    bet: i("betting"),
                    betTip: i("xosoTxt1")
                }, {
                    bet: i("winningconditions"),
                    betTip: i("xosoTxt18")
                }]
            }, {
                sub: i("xosoSub15"),
                num: "［45］",
                resultTip: i("xosoTxt24"),
                txtList: [{
                    bet: i("betting"),
                    betTip: i("xosoTxt1")
                }, {
                    bet: i("winningconditions"),
                    betTip: i("xosoTxt22")
                }]
            }, {
                sub: i("xosoSub16"),
                num: "［45］",
                resultTip: i("xosoTxt28"),
                txtList: [{
                    bet: i("betting"),
                    betTip: i("xosoTxt1")
                }, {
                    bet: i("winningconditions"),
                    betTip: i("xosoTxt26")
                }]
            }]
        }, {
            title: i("xosoTab4"),
            subList: [{
                sub: i("xosoSub17"),
                num: "［4］",
                resultTip: i("xosoTxt31"),
                txtList: [{
                    bet: i("betting"),
                    betTip: i("xosoTxt29")
                }, {
                    bet: i("winningconditions"),
                    betTip: i("xosoTxt30")
                }]
            }, {
                sub: i("xosoTxt100"),
                num: "［4］",
                resultTip: i("xosoTxt33"),
                txtList: [{
                    bet: i("betting"),
                    betTip: i("xosoTxt101")
                }, {
                    bet: i("winningconditions"),
                    betTip: i("xosoTxt102")
                }]
            }]
        }, {
            title: i("xosoTab5"),
            subList: [{
                sub: i("xosoSub23"),
                num: "［456］",
                resultTip: i("xosoTxt42"),
                txtList: [{
                    bet: i("betting"),
                    betTip: i("xosoTxt38")
                }, {
                    bet: i("winningconditions"),
                    betTip: i("xosoTxt40")
                }]
            }, {
                sub: i("xosoSub20"),
                num: "［456］",
                resultTip: i("xosoTxt45"),
                txtList: [{
                    bet: i("betting"),
                    betTip: i("xosoTxt43")
                }, {
                    bet: i("winningconditions"),
                    betTip: i("xosoTxt44")
                }]
            }, {
                sub: i("xosoSub24"),
                num: "［456］",
                resultTip: i("xosoTxt50"),
                txtList: [{
                    bet: i("betting"),
                    betTip: i("xosoTxt43")
                }, {
                    bet: i("winningconditions"),
                    betTip: i("xosoTxt48")
                }]
            }]
        }, {
            title: i("xosoTab6"),
            subList: [{
                sub: i("xosoSub25"),
                num: "［4567］",
                resultTip: i("xosoTxt53"),
                txtList: [{
                    bet: i("betting"),
                    betTip: i("xosoTxt51")
                }, {
                    bet: i("winningconditions"),
                    betTip: i("xosoTxt52")
                }]
            }]
        }, {
            title: i("xosoTab7"),
            subList: [{
                sub: i("xosoSub26"),
                num: "［45/55/66/77］",
                resultTip: i("xosoTxt57", ["18"]),
                txtList: [{
                    bet: i("betting"),
                    betTip: i("xosoTxt12", ["4"])
                }, {
                    bet: i("winningconditions"),
                    betTip: i("xosoTxt56", ["18"])
                }]
            }, {
                sub: i("xosoSub27"),
                num: "［45/55/66/77/88/99/11/22］",
                resultTip: i("xosoTxt58", ["18"]),
                txtList: [{
                    bet: i("betting"),
                    betTip: i("xosoTxt12", ["8"])
                }, {
                    bet: i("winningconditions"),
                    betTip: i("xosoTxt56", ["18"])
                }]
            }, {
                sub: i("xosoSub28"),
                num: "［45/55/66/77/88/99/11/22/33/44］",
                resultTip: i("xosoTxt59", ["18"]),
                txtList: [{
                    bet: i("betting"),
                    betTip: i("xosoTxt12", ["10"])
                }, {
                    bet: i("winningconditions"),
                    betTip: i("xosoTxt56", ["18"])
                }]
            }]
        }, {
            title: i("xosoTab8"),
            subList: [{
                sub: i("xosoTxt60"),
                num: "",
                resultTip: i("xosoTxt66"),
                txtList: [{
                    bet: i("xosoTxt60"),
                    betTip: i("xosoTxt61")
                }, {
                    bet: i("big"),
                    betTip: i("xosoTxt62")
                }, {
                    bet: i("small"),
                    betTip: i("xosoTxt63")
                }, {
                    bet: i("xosoTxt69"),
                    betTip: i("xosoTxt64")
                }, {
                    bet: i("xosoTxt70"),
                    betTip: i("xosoTxt65")
                }]
            }]
        }]);
        return (g, m) => {
            const c = W("van-tab")
              , u = W("van-tabs");
            return n(),
            a("div", wN, [C(u, {
                active: o.value,
                "onUpdate:active": m[0] || (m[0] = p => o.value = p),
                type: "card"
            }, {
                default: P( () => [(n(!0),
                a(S, null, G(l, (p, r) => (n(),
                J(c, {
                    title: p.title,
                    key: r
                }, {
                    default: P( () => [(n(!0),
                    a(S, null, G(p.subList, (b, _) => (n(),
                    a("div", {
                        class: "Play__C-Cotent",
                        key: _
                    }, [t("div", TN, [t("img", {
                        src: d(Ft)("home/AllLotteryGames/NewVietnam", "Star")
                    }, null, 8, CN), t("span", null, e(b.sub), 1)]), t("div", LN, [(n(!0),
                    a(S, null, G(b.txtList, (w, T) => (n(),
                    a("div", {
                        class: "info_item",
                        key: T
                    }, [t("img", {
                        src: d(Xt)("public", "Triangle")
                    }, null, 8, NN), t("span", zN, e(w.bet), 1), t("div", IN, e(w.betTip), 1)]))), 128)), t("div", xN, [t("div", SN, e(d(i)("forexample")), 1), b.num ? (n(),
                    a("div", RN, e(d(i)("betting")) + "：" + e(b.num), 1)) : $("v-if", !0), t("div", BN, e(d(i)("result")) + "：" + e(b.resultTip), 1)]), o.value === 7 ? (n(),
                    a("div", GN, [t("img", {
                        src: d(Xt)("public", "Triangle")
                    }, null, 8, AN), t("span", MN, e(d(i)("xosoTxt71")), 1), t("div", PN, e(d(i)("xosoTxt67")), 1)])) : $("v-if", !0), o.value === 7 ? (n(),
                    a("div", DN, [t("div", ON, e(d(i)("forexample")), 1), t("div", EN, e(d(i)("result")) + "： " + e(d(i)("xosoTxt68")), 1)])) : $("v-if", !0)])]))), 128))]),
                    _: 2
                }, 1032, ["title"]))), 128))]),
                _: 1
            }, 8, ["active"])])
        }
    }
});
const jN = V(qN, [["__scopeId", "data-v-19e150a9"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/AllLotteryGames/NewVietnam/SorthPlay.vue"]])
  , mi = s => (Nt("data-v-7bb580e6"),
s = s(),
zt(),
s)
  , HN = {
    class: "NorthRule__C"
}
  , WN = {
    class: "NorthRule__C-title"
}
  , FN = {
    class: "NorthRule__C-tips"
}
  , VN = mi( () => t("div", {
    class: "borderTopStyle"
}, [t("span"), t("span")], -1))
  , UN = {
    class: "title"
}
  , KN = {
    class: "text"
}
  , XN = {
    class: "table"
}
  , QN = {
    class: "table-row header-time"
}
  , ZN = {
    class: "table-time-1"
}
  , YN = mi( () => t("div", {
    class: "table-time-1"
}, "16:20(GMT+7)", -1))
  , JN = mi( () => t("div", {
    class: "table-time-1"
}, "17:15(GMT+7)", -1))
  , tz = {
    class: "table-row header-week"
}
  , ez = {
    class: "table-week-1"
}
  , iz = {
    class: "table-week-1"
}
  , nz = {
    class: "table-week-1"
}
  , az = {
    class: "table-cell-1"
}
  , oz = {
    class: "table-cell-2"
}
  , sz = mi( () => t("div", {
    class: "borderTopStyle"
}, [t("span"), t("span")], -1))
  , lz = {
    class: "title"
}
  , cz = {
    class: "text"
}
  , rz = {
    key: 0,
    class: "text"
}
  , uz = {
    key: 1,
    class: "text"
}
  , dz = {
    class: "NorthRule__C-Rule"
}
  , pz = {
    class: "NorthRule__C-Struct"
}
  , gz = mi( () => t("span", {
    class: "left"
}, null, -1))
  , bz = mi( () => t("span", {
    class: "right"
}, null, -1))
  , mz = {
    class: "table-rule"
}
  , _z = {
    class: "table-header"
}
  , vz = {
    class: "table-header-cell"
}
  , kz = {
    class: "table-header-cell"
}
  , hz = {
    class: "table-header-cell"
}
  , fz = {
    class: "table-cell"
}
  , yz = {
    class: "table-cell"
}
  , $z = {
    class: "table-cell"
}
  , wz = {
    class: "table-rule"
}
  , Tz = {
    class: "table-header"
}
  , Cz = {
    class: "table-header-cell"
}
  , Lz = {
    key: 0,
    class: "table-box-title"
}
  , Nz = F({
    __name: "SorthRule",
    setup(s) {
        const {t: i} = gt()
          , o = Et([{
            title: "01",
            sub: i("resultsVielottery")
        }, {
            title: "02",
            sub: i("systemresult")
        }, {
            title: "03",
            sub: i("lotterytime1")
        }])
          , l = Et([{
            title: "04",
            sub: i("oddsmiscalculated")
        }, {
            title: "05",
            sub: i("oddsbettingprincipal")
        }, {
            title: "06",
            sub: i("oddsfluctuate")
        }, {
            title: "07",
            sub: i("oncebetgenerated")
        }, {
            title: "08",
            sub: i("anyreasonCauses")
        }, {
            title: "09",
            sub: i("platformcancel"),
            sub1: i("drawdelayedtoolong"),
            sub2: i("resultsofthelotterybeenleaked")
        }])
          , g = Et([{
            week: i("Monday"),
            addressList: [i("hochiminhcity"), i("sametower"), i("camua"), i("fuan"), i("hue")]
        }, {
            week: i("Tuesday"),
            addressList: [i("BenTre"), i("VungTau"), i("BacLieu"), i("Guangnan"), i("Dole")]
        }, {
            week: i("Wednesday"),
            addressList: [i("DongNai"), i("CanTho"), i("Shuozhuang"), i("danang"), i("Qinghe")]
        }, {
            week: i("Thursday"),
            addressList: [i("Xining"), i("Anjiang"), i("smooth"), i("putdown"), i("QuangBinh"), i("Koji")]
        }, {
            week: i("Friday"),
            addressList: [i("VinhLong"), i("BinhDuong"), i("ChaRong"), i("Carai"), i("NinhThun")]
        }, {
            week: i("Saturday"),
            addressList: [i("hochiminhcity"), i("LongAn"), i("Pingfu"), i("Houjiang"), i("danang"), i("Generalized"), i("Denon")]
        }, {
            week: i("Sunday"),
            addressList: [i("Qianjiang"), i("jianjiang"), i("DaLat"), i("Qinghe"), i("KonTum")]
        }])
          , m = Et([{
            title: i("GrandPrize"),
            quantity: 1,
            number: i("onedigits"),
            drawsNumber: ["575333"]
        }, {
            title: i("FirstPrize"),
            quantity: 1,
            number: i("onedigits"),
            drawsNumber: ["34521"]
        }, {
            title: i("SecondPrize"),
            quantity: 1,
            number: i("onedigits"),
            drawsNumber: ["34675"]
        }, {
            title: i("ThirdPrize"),
            quantity: 2,
            number: i("seconddigits"),
            drawsNumber: ["34575", "45732"]
        }, {
            title: i("FourPrize"),
            quantity: 7,
            number: i("sevendigits"),
            drawsNumber: ["43211", "23545", "78023", "46954", "32463", "23478", "34522"]
        }, {
            title: i("FivePrize"),
            quantity: 1,
            number: i("onedigits"),
            drawsNumber: ["6425"]
        }, {
            title: i("SixPrize"),
            quantity: 3,
            number: i("threedigits"),
            drawsNumber: ["66992", "95797", "4356"]
        }, {
            title: i("SevenPrize"),
            quantity: 1,
            number: i("onedigits"),
            drawsNumber: ["69388"]
        }, {
            title: i("EightPrize"),
            quantity: 1,
            number: i("onedigits"),
            drawsNumber: ["12"]
        }, {
            title: i("intotal"),
            quantity: i("eightlotteryawards"),
            number: ""
        }])
          , c = u => u.slice().reverse();
        return (u, p) => (n(),
        a("div", HN, [t("div", WN, e(d(i)("sorthVieLotteryGameRules")), 1), t("div", FN, e(d(i)("precautions")), 1), (n(!0),
        a(S, null, G(o, (r, b) => (n(),
        a("div", {
            class: "NorthRule__C-Content",
            key: b
        }, [VN, t("div", UN, e(r.title), 1), t("div", KN, e(r.sub), 1)]))), 128)), t("div", XN, [t("div", QN, [t("div", ZN, e(d(i)("winTrxTime")), 1), YN, JN]), t("div", tz, [t("div", ez, e(d(i)("weeks")), 1), t("div", iz, e(d(i)("sorthLotteryCities")), 1), t("div", nz, e(d(i)("middleLotteryCities")), 1)]), (n(!0),
        a(S, null, G(g, (r, b) => (n(),
        a("div", {
            class: "table-row",
            key: b
        }, [t("div", az, e(r.week), 1), t("div", oz, [(n(!0),
        a(S, null, G(r.addressList, (_, w) => (n(),
        a("div", {
            class: "table-column-1",
            key: w
        }, e(_), 1))), 128))])]))), 128))]), (n(!0),
        a(S, null, G(l, (r, b) => (n(),
        a("div", {
            class: "NorthRule__C-Content",
            key: b
        }, [sz, t("div", lz, e(r.title), 1), t("div", cz, e(r.sub), 1), r.sub1 ? (n(),
        a("div", rz, e(r.sub1), 1)) : $("v-if", !0), r.sub2 ? (n(),
        a("div", uz, e(r.sub2), 1)) : $("v-if", !0)]))), 128)), t("div", dz, e(d(i)("sorthernLotteryGameRules")), 1), t("div", pz, [gz, E(e(d(i)("colorstructure")), 1), bz]), t("div", mz, [t("div", _z, [t("div", vz, e(d(i)("Lottery")), 1), t("div", kz, e(d(i)("numberofPrizes")), 1), t("div", hz, e(d(i)("Number")), 1)]), (n(!0),
        a(S, null, G(m, (r, b) => (n(),
        a("div", {
            class: "table-row",
            key: b
        }, [t("div", fz, e(r.title), 1), t("div", yz, e(r.quantity), 1), t("div", $z, e(r.number), 1)]))), 128))]), t("div", wz, [t("div", Tz, [t("div", Cz, e(d(i)("sorthlotteryresult")), 1)]), (n(!0),
        a(S, null, G(c(m), (r, b) => (n(),
        a("div", {
            class: B(b == 0 ? "table-box none" : "table-box"),
            key: b
        }, [b != 0 ? (n(),
        a("div", Lz, e(r.title), 1)) : $("v-if", !0), (n(!0),
        a(S, null, G(r.drawsNumber, (_, w) => (n(),
        a("div", {
            class: "table-box-number",
            key: w
        }, e(_), 1))), 128))], 2))), 128))])]))
    }
});
const zz = V(Nz, [["__scopeId", "data-v-7bb580e6"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/AllLotteryGames/NewVietnam/SorthRule.vue"]])
  , Iz = {
    class: "vietnamPlay__C"
}
  , xz = {
    key: 0,
    class: "play"
}
  , Sz = {
    key: 1,
    class: "play"
}
  , Rz = {
    key: 0,
    class: "northrule"
}
  , Bz = {
    key: 1,
    class: "sorthrule"
}
  , Gz = F({
    __name: "index",
    setup(s) {
        var c, u;
        const i = ct()
          , o = h(0)
          , l = i.currentRoute.value.query.id
          , g = ((u = (c = i.currentRoute.value.query) == null ? void 0 : c.gVSs) == null ? void 0 : u.toString()) || ""
          , m = () => {
            i.go(-1)
        }
        ;
        return (p, r) => {
            const b = W("NavBar")
              , _ = W("van-tab")
              , w = W("van-tabs");
            return n(),
            a("div", Iz, [C(b, {
                "left-arrow": "",
                title: p.$t("lotteryManual"),
                onClickLeft: m,
                "background-color": "linear-gradient(90deg, #F95959 0%, #FF9A8E 100%)"
            }, null, 8, ["title"]), C(w, {
                active: o.value,
                "onUpdate:active": r[0] || (r[0] = T => o.value = T),
                type: "card",
                class: B({
                    dis: d(g) == "2"
                })
            }, {
                default: P( () => [C(_, {
                    title: p.$t("gamePlay")
                }, {
                    default: P( () => [d(l) == "1" ? (n(),
                    a("div", xz, [C(DL)])) : (n(),
                    a("div", Sz, [C(jN)]))]),
                    _: 1
                }, 8, ["title"]), d(g) != "2" ? (n(),
                J(_, {
                    key: 0,
                    title: p.$t("rule")
                }, {
                    default: P( () => [d(l) == "1" ? (n(),
                    a("div", Rz, [C($N)])) : (n(),
                    a("div", Bz, [C(zz)]))]),
                    _: 1
                }, 8, ["title"])) : $("v-if", !0)]),
                _: 1
            }, 8, ["active", "class"])])
        }
    }
});
const Az = V(Gz, [["__scopeId", "data-v-f14c68e9"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/home/AllLotteryGames/Play/index.vue"]])
  , wG = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Az
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Wa = s => (Nt("data-v-3e4c6499"),
s = s(),
zt(),
s)
  , Mz = {
    class: "TimeLeft__C"
}
  , Pz = Wa( () => t("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "36",
    height: "36",
    viewBox: "0 0 36 36",
    fill: "none"
}, [t("path", {
    d: "M23.67 3H12.33C6.66 3 5.25 4.515 5.25 10.56V27.45C5.25 31.44 7.44 32.385 10.095 29.535L10.11 29.52C11.34 28.215 13.215 28.32 14.28 29.745L15.795 31.77C17.01 33.375 18.975 33.375 20.19 31.77L21.705 29.745C22.785 28.305 24.66 28.2 25.89 29.52C28.56 32.37 30.735 31.425 30.735 27.435V10.56C30.75 4.515 29.34 3 23.67 3ZM11.67 18C10.845 18 10.17 17.325 10.17 16.5C10.17 15.675 10.845 15 11.67 15C12.495 15 13.17 15.675 13.17 16.5C13.17 17.325 12.495 18 11.67 18ZM11.67 12C10.845 12 10.17 11.325 10.17 10.5C10.17 9.675 10.845 9 11.67 9C12.495 9 13.17 9.675 13.17 10.5C13.17 11.325 12.495 12 11.67 12ZM24.345 17.625H16.095C15.48 17.625 14.97 17.115 14.97 16.5C14.97 15.885 15.48 15.375 16.095 15.375H24.345C24.96 15.375 25.47 15.885 25.47 16.5C25.47 17.115 24.96 17.625 24.345 17.625ZM24.345 11.625H16.095C15.48 11.625 14.97 11.115 14.97 10.5C14.97 9.885 15.48 9.375 16.095 9.375H24.345C24.96 9.375 25.47 9.885 25.47 10.5C25.47 11.115 24.96 11.625 24.345 11.625Z",
    fill: "currentColor"
})], -1))
  , Dz = {
    class: "TimeLeft__C-name"
}
  , Oz = {
    class: "TimeLeft__C-num"
}
  , Ez = {
    class: "TimeLeft__C-id"
}
  , qz = {
    class: "TimeLeft__C-text"
}
  , jz = {
    class: "TimeLeft__C-time"
}
  , Hz = Wa( () => t("div", null, ":", -1))
  , Wz = F({
    __name: "TimeLeft",
    props: {
        currentInfo: {
            type: Object,
            default: () => ({
                gameNo: "loading",
                currentTime: "",
                beginTime: "",
                passTime: 180,
                time1: 0,
                time2: 0,
                time3: 0,
                time4: 0
            })
        },
        winNum: {
            type: Array,
            default: [0, 0, 0, 0, 0]
        },
        gameName: {
            type: String,
            default: ""
        },
        currentGame: {
            type: Object,
            default: () => ({})
        }
    },
    setup(s) {
        const i = s
          , o = h(!1)
          , l = ye()
          , g = () => {
            o.value = !0,
            l.getWinGoRule(i.currentGame.typeID)
        }
        ;
        return (m, c) => (n(),
        a(S, null, [t("div", Mz, [t("div", {
            class: "TimeLeft__C-rule",
            onClick: g
        }, [Pz, E(e(m.$t("winTrxIndicate")), 1)]), t("div", Dz, e(i.gameName.replace("<br />", " ")), 1), t("div", Oz, [(n(!0),
        a(S, null, G(s.winNum, (u, p) => (n(),
        a("div", {
            key: p,
            class: B(["n" + u])
        }, null, 2))), 128))]), t("div", Ez, e(i.currentInfo.gameNo), 1), t("div", qz, e(m.$t("timeLeftToBuy")), 1), t("div", jz, [t("div", null, e(s.currentInfo.time1), 1), t("div", null, e(s.currentInfo.time2), 1), Hz, t("div", null, e(s.currentInfo.time3), 1), t("div", null, e(s.currentInfo.time4), 1)])]), $(" 规则弹层 begin"), C(Di, {
            howPlayShow: o.value,
            gamePresentation: s.currentGame.gamePresentation,
            onClose: c[0] || (c[0] = u => o.value = !1)
        }, null, 8, ["howPlayShow", "gamePresentation"])], 64))
    }
});
const Fz = V(Wz, [["__scopeId", "data-v-3e4c6499"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/AllLotteryGames/WinGo/TimeLeft.vue"]])
  , Vz = s => (Nt("data-v-7f36fe93"),
s = s(),
zt(),
s)
  , Uz = {
    class: "Betting__Popup-head"
}
  , Kz = {
    class: "Betting__Popup-head-title"
}
  , Xz = {
    class: "Betting__Popup-head-selectName"
}
  , Qz = {
    class: "Betting__Popup-body"
}
  , Zz = {
    class: "Betting__Popup-body-line"
}
  , Yz = {
    class: "Betting__Popup-body-line-list"
}
  , Jz = ["onClick"]
  , tI = {
    class: "Betting__Popup-body-line"
}
  , eI = {
    class: "Betting__Popup-body-line-btnL"
}
  , iI = {
    class: "Betting__Popup-body-line"
}
  , nI = Vz( () => t("div", null, null, -1))
  , aI = {
    class: "Betting__Popup-body-line-list"
}
  , oI = ["onClick"]
  , sI = {
    class: "Betting__Popup-body-line"
}
  , lI = {
    class: "Betting__Popup-foot"
}
  , cI = {
    class: "Betting__Popup-foot-s bgcolor"
}
  , rI = {
    class: "Betting__Popup-PreSale"
}
  , uI = {
    class: "Betting__Popup-PreSale-head"
}
  , dI = {
    class: "Betting__Popup-PreSale-body"
}
  , pI = {
    class: "Betting__Popup-PreSale-foot"
}
  , gI = F({
    __name: "BettingPopup",
    props: {
        currentGame: {
            type: Object,
            default: () => ({})
        },
        selectInfo: {
            type: Object,
            default: () => ({})
        },
        bettingPopupShow: {
            type: Boolean,
            default: h(!1)
        },
        betTypeList: {
            type: Array,
            default: []
        },
        multipleList: {
            type: Array,
            default: () => [1, 5, 10, 20, 50, 100]
        }
    },
    emits: ["update:bettingPopupShow", "update:selectInfo", "clearBetting", "submitBetting"],
    setup(s, {emit: i}) {
        const o = s
          , {t: l} = gt()
          , g = h(!1)
          , m = h(!0)
          , c = Q({
            get() {
                return o.bettingPopupShow || !1
            },
            set(k) {
                i("update:bettingPopupShow", k)
            }
        })
          , u = Q( () => {
            switch (o.selectInfo.selecttype) {
            case 13:
                return l("big");
            case 14:
                return l("small");
            case 10:
                return l("redColor");
            case 11:
                return l("greenColor");
            case 12:
                return l("purpleColor");
            default:
                return o.selectInfo.selecttype
            }
        }
        )
          , p = Q( () => o.currentGame.typeName)
          , r = k => {
            switch (k) {
            case 1:
                o.selectInfo.count > 1 && (o.selectInfo.count--,
                v());
                break;
            case 2:
                o.selectInfo.count++,
                v();
                break
            }
        }
          , b = k => {
            k > 0 && (o.selectInfo.count = parseInt(k),
            v())
        }
          , _ = k => {
            o.selectInfo.count = k,
            v()
        }
          , w = k => {
            o.selectInfo.coin = k,
            v()
        }
          , T = () => {
            g.value = !1,
            m.value = !0
        }
          , N = () => {
            if (o.selectInfo.count == 0)
                return Pt(l("bteNoCount"));
            m.value ? i("submitBetting") : he(l("agreePresaleRules"))
        }
          , v = () => {
            o.selectInfo.allCoin = o.selectInfo.coin * o.selectInfo.count
        }
        ;
        return (k, y) => {
            const f = W("van-field")
              , z = W("van-popup")
              , L = Dt("throttle-click");
            return n(),
            a(S, null, [$(" 投注内容 begin "), C(z, {
                show: c.value,
                "onUpdate:show": y[6] || (y[6] = x => c.value = x),
                position: "bottom",
                round: !0,
                "close-on-click-overlay": !1
            }, {
                default: P( () => [t("div", {
                    class: B([`Betting__Popup-${s.selectInfo.selecttype}`])
                }, [t("div", Uz, [t("div", Kz, e(p.value.replace("<br />", " ")), 1), t("div", Xz, [t("span", null, e(d(l)("choose")), 1), t("span", null, e(u.value), 1)])]), t("div", Qz, [t("div", Zz, [E(e(d(l)("amount")) + " ", 1), t("div", Yz, [(n(!0),
                a(S, null, G(s.betTypeList, (x, I) => (n(),
                a("div", {
                    key: I,
                    class: B(["Betting__Popup-body-line-item", {
                        bgcolor: s.selectInfo.coin == x
                    }]),
                    onClick: R => w(x)
                }, e(x), 11, Jz))), 128))])]), t("div", tI, [E(e(d(l)("numbers")) + " ", 1), t("div", eI, [t("div", {
                    class: B(["Betting__Popup-btn", {
                        bgcolor: s.selectInfo.count > 0
                    }]),
                    onClick: y[0] || (y[0] = x => r(1))
                }, "-", 2), C(f, {
                    class: "Betting__Popup-input",
                    modelValue: s.selectInfo.count,
                    "onUpdate:modelValue": y[1] || (y[1] = x => s.selectInfo.count = x),
                    modelModifiers: {
                        number: !0
                    },
                    type: "digit",
                    maxlength: 4,
                    onInput: b
                }, null, 8, ["modelValue"]), t("div", {
                    class: "Betting__Popup-btn bgcolor",
                    onClick: y[2] || (y[2] = x => r(2))
                }, "+")])]), t("div", iI, [nI, t("div", aI, [(n(!0),
                a(S, null, G(s.multipleList, (x, I) => (n(),
                a("div", {
                    key: I,
                    class: B(["Betting__Popup-body-line-item", {
                        bgcolor: s.selectInfo.count == x
                    }]),
                    onClick: R => _(x)
                }, " X" + e(x), 11, oI))), 128))])]), t("div", sI, [t("span", {
                    class: B(["Betting__Popup-agree", {
                        active: m.value
                    }]),
                    onClick: y[3] || (y[3] = x => m.value = !m.value)
                }, e(d(l)("agree")), 3), t("span", {
                    onClick: y[4] || (y[4] = x => g.value = !0),
                    class: "Betting__Popup-preSaleShow"
                }, e(d(l)("presaleRules")), 1)])]), t("div", lI, [t("div", {
                    class: "Betting__Popup-foot-c",
                    onClick: y[5] || (y[5] = x => i("clearBetting"))
                }, e(d(l)("cancel")), 1), dt((n(),
                a("div", cI, [E(e(d(l)("totalAmount")) + " " + e(d(Ct)(s.selectInfo.count * s.selectInfo.coin || 0)), 1)])), [[L, {
                    handler: N,
                    wait: 2e3
                }]])])], 2)]),
                _: 1
            }, 8, ["show"]), $(" 规则弹层 begin"), C(z, {
                show: g.value,
                "onUpdate:show": y[7] || (y[7] = x => g.value = x),
                "close-on-click-overlay": !1,
                round: ""
            }, {
                default: P( () => [t("div", rI, [t("div", uI, e(d(l)("presaleRules")), 1), t("div", dI, e(k.$t("betPopTXT")), 1), t("div", pI, [t("div", {
                    class: "Betting__Popup-PreSale-foot-btn",
                    onClick: T
                }, e(d(l)("iKonw")), 1)])])]),
                _: 1
            }, 8, ["show"])], 64)
        }
    }
});
const bI = V(gI, [["__scopeId", "data-v-7f36fe93"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/common/BettingPopup.vue"]])
  , mI = {
    class: "Betting__C"
}
  , _I = {
    class: "Betting__C-mark"
}
  , vI = {
    class: "Betting__C-head"
}
  , kI = {
    class: "Betting__C-numC"
}
  , hI = ["onClick"]
  , fI = {
    class: "Betting__C-multiple"
}
  , yI = ["onClick"]
  , $I = {
    class: "Betting__C-foot"
}
  , wI = F({
    __name: "Betting",
    props: {
        currentInfo: {
            type: Object,
            default: () => ({})
        },
        ProhibitBuyTime: {
            type: Number,
            default: 5
        },
        currentGame: {
            type: Object,
            default: () => ({})
        },
        bettingApiFun: {
            type: Function,
            required: !0
        }
    },
    emits: ["betting", "changeBettingP"],
    setup(s, {expose: i, emit: o}) {
        const l = s
          , g = Gi.global.t
          , m = Q( () => l.currentGame.betMultiple.split("|"))
          , c = h(!1)
          , u = h("")
          , p = h({
            coin: 0,
            count: m.value[0],
            allCoin: 0,
            gametype: 0,
            typeid: 1,
            issuenumber: "2020",
            selecttype: 1
        });
        At( () => m, () => {
            p.value.count = m.value[0]
        }
        , {
            deep: !0,
            immediate: !0
        });
        const r = h(null)
          , b = h(0)
          , _ = h(!1)
          , w = Q( () => (l.currentInfo.passTime < l.ProhibitBuyTime && z(),
        l.currentInfo.passTime < l.ProhibitBuyTime))
          , T = Q( () => l.currentGame.typeID)
          , N = Q( () => l.currentGame.scope ? l.currentGame.scope.split("|").map(x => Number(x)) : [])
          , v = x => {
            p.value.count = x,
            k()
        }
          , k = () => {
            p.value.allCoin = p.value.coin * p.value.count
        }
          , y = (x, I, R) => {
            p.value.gametype = R,
            p.value.selecttype = x,
            p.value.issuenumber = l.currentInfo.gameNo,
            p.value.typeid = T.value,
            p.value.coin = N.value[0],
            u.value = x,
            c.value = !0
        }
          , f = () => {
            _.value || (_.value = !0,
            r.value || (r.value = setInterval(function() {
                b.value = Math.floor(Math.random() * 11)
            }, 50)),
            setTimeout(function() {
                b.value > 9 && (b.value = 9),
                clearInterval(r.value),
                _.value = !1,
                r.value = null,
                y(b.value, "color" + b.value, 1)
            }, 5e3))
        }
          , z = () => {
            c.value && (c.value = !1,
            p.value.coin = N.value[0],
            p.value.count = m.value[0],
            k(),
            o("changeBettingP", c.value))
        }
          , L = async () => {
            const x = await nt(l.bettingApiFun({
                typeId: p.value.typeid,
                issuenumber: p.value.issuenumber,
                amount: p.value.coin,
                betCount: Number(p.value.count),
                gameType: p.value.gametype,
                selectType: p.value.selecttype
            }));
            (x == null ? void 0 : x.code) === 0 && (he(g("code" + x.msgCode)),
            o("betting", p.value.issuenumber),
            z())
        }
        ;
        return i({
            bettingPopupShow: c
        }),
        (x, I) => (n(),
        a("div", mI, [dt(t("div", _I, [t("div", null, e(l.currentInfo.time3 || "0"), 1), t("div", null, e(l.currentInfo.time4 || "0"), 1)], 512), [[Yt, w.value]]), t("div", vI, [t("div", {
            class: "Betting__C-head-g",
            onClick: I[0] || (I[0] = R => y(11, "#5CBA47", 0))
        }, e(x.$t("greenColor")), 1), t("div", {
            class: "Betting__C-head-p",
            onClick: I[1] || (I[1] = R => y(12, "#9831E9", 0))
        }, e(x.$t("purpleColor")), 1), t("div", {
            class: "Betting__C-head-r",
            onClick: I[2] || (I[2] = R => y(10, "#FB4E4E", 0))
        }, e(x.$t("redColor")), 1)]), t("div", kI, [(n(),
        a(S, null, G(10, (R, M) => t("div", {
            key: M,
            class: B([b.value == R ? "active" : "", "Betting__C-numC-item" + M]),
            onClick: A => y(M, "color" + M, 1)
        }, null, 10, hI)), 64))]), t("div", fI, [t("div", {
            class: "Betting__C-multiple-l",
            onClick: f
        }, e(x.$t("randomBet")), 1), (n(!0),
        a(S, null, G(m.value, (R, M) => (n(),
        a("div", {
            key: M,
            class: B(["Betting__C-multiple-r", {
                active: p.value.count == R
            }]),
            onClick: A => v(R)
        }, " X" + e(R), 11, yI))), 128))]), t("div", $I, [t("div", {
            class: "Betting__C-foot-b",
            onClick: I[3] || (I[3] = R => y(13, "#ffc511", 2))
        }, e(x.$t("big")), 1), t("div", {
            class: "Betting__C-foot-s",
            onClick: I[4] || (I[4] = R => y(14, "#5CBA47", 2))
        }, e(x.$t("small")), 1)]), C(bI, {
            currentGame: s.currentGame,
            selectInfo: p.value,
            bettingPopupShow: c.value,
            betTypeList: N.value,
            multipleList: m.value,
            onClearBetting: z,
            onSubmitBetting: L
        }, null, 8, ["currentGame", "selectInfo", "bettingPopupShow", "betTypeList", "multipleList"])]))
    }
});
const Fa = V(wI, [["__scopeId", "data-v-4aca9bd1"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/AllLotteryGames/WinGo/Betting.vue"]])
  , Vi = s => (Nt("data-v-481307ec"),
s = s(),
zt(),
s)
  , TI = {
    class: "GameRecord__C"
}
  , CI = {
    class: "GameRecord__C-head"
}
  , LI = {
    class: "GameRecord__C-body"
}
  , NI = {
    key: 0
}
  , zI = {
    key: 1
}
  , II = {
    class: "GameRecord__C-origin"
}
  , xI = Vi( () => t("div", {
    class: "GameRecord__C-origin-I red"
}, null, -1))
  , SI = Vi( () => t("div", {
    class: "GameRecord__C-origin-I violet"
}, null, -1))
  , RI = {
    key: 1,
    class: "GameRecord__C-origin-I green"
}
  , BI = {
    key: 2,
    class: "GameRecord__C-origin-I red"
}
  , GI = Vi( () => t("div", {
    class: "GameRecord__C-origin-I green"
}, null, -1))
  , AI = Vi( () => t("div", {
    class: "GameRecord__C-origin-I violet"
}, null, -1))
  , MI = {
    key: 1,
    class: "GameRecord__C-body-empty"
}
  , PI = {
    key: 0,
    class: "GameRecord__C-foot"
}
  , DI = {
    class: "GameRecord__C-foot-page"
}
  , OI = F({
    __name: "GameRecord",
    props: {
        typeid: {
            type: Number,
            required: !0
        }
    },
    emits: ["changefive"],
    setup(s, {expose: i, emit: o}) {
        const l = s
          , g = h([])
          , m = h(4)
          , c = h(10)
          , u = h(1)
          , p = () => {
            u.value--,
            b()
        }
          , r = () => {
            u.value++,
            b()
        }
          , b = async (T=!1) => {
            if (l.typeid == null)
                return;
            T && (u.value = 1);
            const [N,v] = await ie(Na({
                pageSize: c.value,
                pageNo: u.value,
                typeId: l.typeid
            }));
            g.value = v.list || [],
            m.value = v.totalPage,
            T && o("changefive", v.list.slice(0, 5).map(k => k.number))
        }
          , _ = T => parseInt(T, 10) % 2 !== 0
          , w = T => {
            let N = "";
            switch (_(T) ? N = "greenColor" : N = "defaultColor",
            T) {
            case "0":
                N = "mixedColor0";
                break;
            case "5":
                N = "mixedColor5";
                break
            }
            return N
        }
        ;
        return i({
            getData: b
        }),
        fe( () => {
            b()
        }
        ),
        (T, N) => {
            const v = W("van-col")
              , k = W("van-row")
              , y = W("van-icon");
            return n(),
            a("div", TI, [t("div", CI, [C(k, null, {
                default: P( () => [C(v, {
                    span: "9"
                }, {
                    default: P( () => [E(e(T.$t("betSerial")), 1)]),
                    _: 1
                }), C(v, {
                    span: "5"
                }, {
                    default: P( () => [E(e(T.$t("num")), 1)]),
                    _: 1
                }), C(v, {
                    span: "5"
                }, {
                    default: P( () => [E(e(T.$t("bigOrSmall")), 1)]),
                    _: 1
                }), C(v, {
                    span: "5"
                }, {
                    default: P( () => [E(e(T.$t("color")), 1)]),
                    _: 1
                })]),
                _: 1
            })]), t("div", LI, [g.value.length ? (n(!0),
            a(S, {
                key: 0
            }, G(g.value, (f, z) => (n(),
            J(k, {
                key: z
            }, {
                default: P( () => [C(v, {
                    span: "9"
                }, {
                    default: P( () => [E(e(f.issueNumber), 1)]),
                    _: 2
                }, 1024), C(v, {
                    span: "5",
                    class: "numcenter"
                }, {
                    default: P( () => [t("div", {
                        class: B(["GameRecord__C-body-num", w(f.number)])
                    }, e(f.number), 3)]),
                    _: 2
                }, 1024), C(v, {
                    span: "5"
                }, {
                    default: P( () => [Number(f.number) > 4 ? (n(),
                    a("span", NI, e(T.$t("big")), 1)) : (n(),
                    a("span", zI, e(T.$t("small")), 1))]),
                    _: 2
                }, 1024), C(v, {
                    span: "5"
                }, {
                    default: P( () => [t("div", II, [f.number == "0" ? (n(),
                    a(S, {
                        key: 0
                    }, [xI, SI], 64)) : $("v-if", !0), f.number == "1" || f.number == "3" || f.number == "7" || f.number == "9" ? (n(),
                    a("div", RI)) : $("v-if", !0), f.number == "2" || f.number == "4" || f.number == "6" || f.number == "8" ? (n(),
                    a("div", BI)) : $("v-if", !0), f.number == "5" ? (n(),
                    a(S, {
                        key: 3
                    }, [GI, AI], 64)) : $("v-if", !0)])]),
                    _: 2
                }, 1024)]),
                _: 2
            }, 1024))), 128)) : (n(),
            a("div", MI, [C(ge)]))]), g.value.length ? (n(),
            a("div", PI, [t("div", {
                class: B(["GameRecord__C-foot-previous", {
                    disabled: u.value <= 1
                }]),
                onClick: p
            }, [C(y, {
                name: "arrow-left",
                class: "GameRecord__C-icon",
                size: "20"
            })], 2), t("div", DI, e(u.value) + "/" + e(m.value), 1), t("div", {
                class: B(["GameRecord__C-foot-next", {
                    disabled: u.value >= m.value
                }]),
                onClick: r
            }, [C(y, {
                name: "arrow",
                class: "GameRecord__C-icon",
                size: "20"
            })], 2)])) : $("v-if", !0)])
        }
    }
});
const EI = V(OI, [["__scopeId", "data-v-481307ec"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/AllLotteryGames/WinGo/GameRecord.vue"]])
  , qI = {
    class: "Trend__C"
}
  , jI = {
    class: "Trend__C-head"
}
  , HI = {
    class: "Trend__C-body1"
}
  , WI = {
    class: "Trend__C-body1-line"
}
  , FI = {
    class: "Trend__C-body1-line lottery"
}
  , VI = {
    key: 0,
    class: "Trend__C-body1-line-num"
}
  , UI = {
    key: 0,
    class: "Trend__C-body1-line"
}
  , KI = {
    class: "Trend__C-body1-line-num"
}
  , XI = {
    key: 1,
    class: "Trend__C-body1-line"
}
  , QI = {
    class: "Trend__C-body1-line-num"
}
  , ZI = {
    key: 2,
    class: "Trend__C-body1-line"
}
  , YI = {
    class: "Trend__C-body1-line-num"
}
  , JI = {
    key: 3,
    class: "Trend__C-body1-line"
}
  , tx = {
    class: "Trend__C-body1-line-num"
}
  , ex = {
    class: "Trend__C-body2"
}
  , ix = ["IssueNumber", "Number", "Colour", "rowId"]
  , nx = {
    class: "Trend__C-body2-IssueNumber"
}
  , ax = {
    class: "Trend__C-body2-Num"
}
  , ox = ["id"]
  , sx = {
    key: 1,
    class: "Trend__C-body2-empty"
}
  , lx = {
    key: 0,
    class: "Trend__C-foot"
}
  , cx = {
    class: "Trend__C-foot-page"
}
  , rx = F({
    __name: "Trend",
    props: {
        typeid: {
            type: Number,
            required: !0
        },
        listApi: {
            type: Function,
            required: !0
        },
        EmerdApi: {
            type: Function,
            required: !0
        }
    },
    emits: ["changefive"],
    setup(s, {expose: i, emit: o}) {
        const l = s
          , g = h([])
          , m = h([])
          , c = h()
          , u = h()
          , p = h()
          , r = h()
          , b = h()
          , _ = h(1)
          , w = h(4);
        function T() {
            Jt( () => {
                for (let z = 0; z < m.value.length; z++)
                    m.value[z + 1] && N(m.value[z], m.value[z + 1])
            }
            )
        }
        function N(z, L) {
            let x = parseInt(z.number)
              , I = parseInt(L.number);
            var R = document.getElementById("myCanvas" + z.rowId);
            if (R && R.getContext) {
                var M = R.getContext("2d");
                M.clearRect(0, 0, R.width, R.height),
                M.beginPath(),
                M.moveTo(x == 0 ? 15 : x * 29 + 15, 0),
                M.lineTo(I == 0 ? 15 : I * 29 + 15, R.height),
                M.strokeStyle = "red",
                M.stroke(),
                M.closePath()
            }
        }
        const v = () => {
            _.value--,
            f()
        }
          , k = () => {
            _.value++,
            f()
        }
          , y = async (z=!1) => {
            if (l.typeid == null)
                return;
            z && (_.value = 1,
            f(z));
            const [L,x] = await ie(l.EmerdApi({
                typeId: l.typeid
            }));
            if (x.length) {
                const I = Object.keys(x[0]).filter(R => R.startsWith("number_"));
                g.value = x.map(R => {
                    const M = {
                        list: []
                    };
                    return M.type = R.type,
                    M.list = [],
                    I.forEach(A => {
                        M.list.push(R[A])
                    }
                    ),
                    M
                }
                )
            }
            c.value = g.value[0],
            u.value = g.value[1],
            p.value = g.value[2],
            r.value = g.value[3],
            b.value = g.value[4]
        }
          , f = async (z=!1) => {
            var I;
            if (l.typeid == null)
                return;
            z && (_.value = 1);
            const [L,x] = await ie(l.listApi({
                pageSize: 10,
                pageNo: _.value,
                typeId: l.typeid
            }));
            if (x.list ? m.value = x.list.map( (R, M) => (R.rowId = M,
            R)) || [] : x.data.gameslist && (m.value = x.data.gameslist.map( (R, M) => (R.rowId = M,
            R)) || []),
            w.value = x.totalPage,
            z) {
                const R = ((I = x.data) == null ? void 0 : I.gameslist) || x.list || [];
                o("changefive", R.slice(0, 5).map(M => M.number))
            }
            T()
        }
        ;
        return i({
            getData: y
        }),
        fe( () => {
            y(),
            f()
        }
        ),
        (z, L) => {
            const x = W("van-col")
              , I = W("van-row")
              , R = W("van-icon");
            return n(),
            a("div", qI, [t("div", jI, [C(I, null, {
                default: P( () => [C(x, {
                    span: "8"
                }, {
                    default: P( () => [E(e(z.$t("betIssue")), 1)]),
                    _: 1
                }), C(x, {
                    span: "16"
                }, {
                    default: P( () => [E(e(z.$t("number")), 1)]),
                    _: 1
                })]),
                _: 1
            })]), t("div", HI, [t("div", WI, e(z.$t("trendDesc1")), 1), t("div", FI, [t("div", null, e(z.$t("trendDesc2")), 1), c.value ? (n(),
            a("div", VI, [(n(),
            a(S, null, G(10, M => t("div", {
                key: M
            }, e(M - 1), 1)), 64))])) : $("v-if", !0)]), r.value && r.value.type == 2 ? (n(),
            a("div", UI, [t("div", null, e(z.$t("trendDesc3")), 1), t("div", KI, [(n(!0),
            a(S, null, G(r.value.list, (M, A) => (n(),
            a("div", {
                key: "4" + A
            }, e(M), 1))), 128))])])) : $("v-if", !0), u.value && u.value.type == 4 ? (n(),
            a("div", XI, [t("div", null, e(z.$t("trendDesc4")), 1), t("div", QI, [(n(!0),
            a(S, null, G(u.value.list, (M, A) => (n(),
            a("div", {
                key: "2" + A
            }, e(M), 1))), 128))])])) : $("v-if", !0), b.value && b.value.type == 1 ? (n(),
            a("div", ZI, [t("div", null, e(z.$t("trendDesc5")), 1), t("div", YI, [(n(!0),
            a(S, null, G(b.value.list, (M, A) => (n(),
            a("div", {
                key: "5" + A
            }, e(M), 1))), 128))])])) : $("v-if", !0), p.value && p.value.type == 3 ? (n(),
            a("div", JI, [t("div", null, e(z.$t("trendDesc6")), 1), t("div", tx, [(n(!0),
            a(S, null, G(p.value.list, (M, A) => (n(),
            a("div", {
                key: "3" + A
            }, e(M), 1))), 128))])])) : $("v-if", !0)]), t("div", ex, [m.value.length ? (n(!0),
            a(S, {
                key: 0
            }, G(m.value, (M, A) => (n(),
            a("div", {
                key: A,
                IssueNumber: M.issueNumber,
                Number: M.number,
                Colour: M.colour,
                rowId: M.rowId
            }, [C(I, null, {
                default: P( () => [C(x, {
                    span: "9"
                }, {
                    default: P( () => [t("div", nx, e(M.issueNumber), 1)]),
                    _: 2
                }, 1024), C(x, {
                    span: "15"
                }, {
                    default: P( () => [t("div", ax, [t("canvas", {
                        canvas: "",
                        id: "myCanvas" + M.rowId,
                        ref_for: !0,
                        ref: "canvas",
                        class: "line-canvas"
                    }, null, 8, ox), (n(),
                    a(S, null, G(10, D => t("div", {
                        class: B(["Trend__C-body2-Num-item", Number(M.number) == D - 1 ? "action" + (D - 1) : ""]),
                        key: D
                    }, e(D - 1), 3)), 64)), t("div", {
                        class: B(["Trend__C-body2-Num-BS", {
                            isB: Number(M.number) > 4
                        }])
                    }, e(Number(M.number) > 4 ? "B" : "S"), 3)])]),
                    _: 2
                }, 1024)]),
                _: 2
            }, 1024)], 8, ix))), 128)) : (n(),
            a("div", sx, [C(ge)]))]), m.value.length ? (n(),
            a("div", lx, [t("div", {
                class: B(["Trend__C-foot-previous", {
                    disabled: _.value <= 1
                }]),
                onClick: v
            }, [C(R, {
                name: "arrow-left",
                class: "Trend__C-icon",
                size: "20"
            })], 2), t("div", cx, e(_.value) + "/" + e(w.value), 1), t("div", {
                class: B(["Trend__C-foot-next", {
                    disabled: _.value >= w.value
                }]),
                onClick: k
            }, [C(R, {
                name: "arrow",
                class: "Trend__C-icon",
                size: "20"
            })], 2)])) : $("v-if", !0)])
        }
    }
});
const Va = V(rx, [["__scopeId", "data-v-d485a39d"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/AllLotteryGames/WinGo/Trend.vue"]])
  , ux = {
    key: 1,
    class: "WinningTip__C-body-l1"
}
  , dx = {
    class: "WinningNum"
}
  , px = {
    class: "WinningTip__C-body-l3"
}
  , gx = {
    key: 0,
    class: "isLose"
}
  , bx = {
    class: "head"
}
  , mx = {
    class: "bonus"
}
  , _x = {
    class: "gameDetail"
}
  , vx = {
    class: "WinningTip__C-body-l4"
}
  , kx = ["onClick"]
  , hx = F({
    __name: "WinningTips",
    setup(s, {expose: i}) {
        const {t: o} = gt()
          , l = Q( () => c.value[0] ? c.value[0].state == 0 : !1)
          , g = Q( () => c.value[0] || {})
          , m = h(!1)
          , c = h([])
          , u = h({
            red: o("winColor1"),
            green: o("winColor2"),
            "red,violet": o("winColor3"),
            "green,violet": o("winColor4"),
            violet: o("winColor5")
        });
        let p = h();
        const r = () => {
            clearTimeout(p.value),
            c.value.shift(),
            m.value && c.value.length && (p.value = setTimeout( () => {
                r()
            }
            , 1e3 * 3))
        }
        ;
        At( () => c.value.length, T => {
            T ? document.body.style.overflow = "hidden" : document.body.style.overflow = ""
        }
        );
        const b = () => {
            m.value = !m.value,
            m.value ? p.value = setTimeout( () => {
                r()
            }
            , 1e3 * 3) : clearTimeout(p.value)
        }
          , _ = T => {
            c.value.push(...T),
            m.value && (p.value = setTimeout( () => {
                r()
            }
            , 1e3 * 3))
        }
          , w = () => {
            c.value = []
        }
        ;
        return i({
            showMark: _
        }),
        (T, N) => {
            const v = W("van-icon");
            return dt((n(),
            a("div", {
                class: "WinningTip__C",
                onClick: r
            }, [t("div", {
                class: B(["WinningTip__C-body", {
                    isL: l.value
                }])
            }, [l.value ? (n(),
            a("div", {
                key: 0,
                class: B(["WinningTip__C-body-l1", {
                    isL: l.value
                }])
            }, e(T.$t("k3WarningTip1")), 3)) : (n(),
            a("div", ux, e(T.$t("k3WarningTip2")), 1)), t("div", {
                class: B(["WinningTip__C-body-l2", [`type${g.value.number}`]])
            }, [E(e(T.$t("winTips3")) + " ", 1), t("div", null, e(u.value[g.value.colour]), 1), t("div", dx, e(g.value.number), 1), t("div", null, e(g.value.number > 4 ? T.$t("big") : T.$t("small")), 1)], 2), t("div", px, [l.value ? (n(),
            a("div", gx, e(T.$t("winTips4")), 1)) : (n(),
            a(S, {
                key: 1
            }, [t("div", bx, e(T.$t("winTips5")), 1), t("div", mx, e(d(Ct)(Number(g.value.winAmount))), 1)], 64)), t("div", _x, e(T.$t("winTips6")) + e(g.value.typeName) + " " + e(g.value.issueNumber), 1)]), t("div", vx, [t("div", {
                class: B(["acitveBtn", {
                    active: m.value
                }]),
                onClick: ne(b, ["stop"])
            }, null, 10, kx), E(" " + e(T.$t("autoShutOff3s")), 1)]), t("div", {
                class: "closeBtn",
                onClick: w
            }), dt(C(v, {
                name: "arrow",
                color: "#fff",
                size: "30px",
                class: "arrowBtn",
                onClick: ne(r, ["stop"])
            }, null, 8, ["onClick"]), [[Yt, c.value.length > 1]])], 2)], 512)), [[Yt, c.value.length]])
        }
    }
});
const Ua = V(hx, [["__scopeId", "data-v-e44179e3"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/common/WinningTips.vue"]])
  , fx = {
    class: "WinGo__C"
}
  , yx = {
    class: "WinGo__C-head-more"
}
  , $x = F({
    __name: "index",
    setup(s) {
        const o = Ze().query.typeId
          , l = () => {
            b.go(-1),
            sessionStorage.setItem("clickedGameType", "lottery")
        }
          , g = {
            GameRecord: EI,
            Trend: Va,
            MyGameRecord: wn
        }
          , m = h()
          , c = h()
          , u = h()
          , p = h(!1)
          , r = h("GameRecord")
          , b = ct()
          , _ = ye();
        let w = Et([]);
        const T = h(0)
          , N = h(localStorage.getItem("volumeShow") || "1")
          , v = h(!1)
          , k = h(null)
          , y = h({
            gameNo: "loading",
            currentTime: "",
            beginTime: "",
            passTime: 180,
            time1: 0,
            time2: 0,
            time3: 0,
            time4: 0
        })
          , f = h(5)
          , z = h("")
          , L = h(!1)
          , x = h()
          , I = Q( () => _.wingo[T.value] || {})
          , R = h([0, 0, 0, 0, 0])
          , M = Pe()
          , A = Q( () => M.getIsShowLotteryDragon);
        Lt( () => {
            X()
        }
        ),
        Ve( () => {
            clearInterval(k.value),
            Ot.value.forEach(ot => {
                clearInterval(ot)
            }
            ),
            Tt.value && clearTimeout(Tt.value)
        }
        ),
        At( () => De().visibility, ot => {
            ot === 0 ? clearInterval(k.value) : X(T.value)
        }
        );
        const D = () => {
            N.value == "1" ? N.value = "2" : N.value = "1",
            localStorage.setItem("volumeShow", N.value)
        }
          , j = ot => {
            b.push({
                name: ot
            })
        }
          , X = async (ot=null) => {
            await _.getWinGoData(),
            w = _.getWingo;
            const Z = w.findIndex(tt => tt.typeID == o);
            x.value == null && !o ? rt(0) : rt(ot ?? Z)
        }
          , rt = ot => {
            _.getWinGoData(),
            T.value = ot,
            x.value = w[ot].typeID,
            ht(x.value),
            Jt( () => {
                m.value.getData(x.value)
            }
            )
        }
          , ht = async ot => {
            r.value == "MyGameRecord" && st(ot);
            const [Z,tt] = await ie(Gs({
                typeId: ot
            }));
            y.value.gameNo = tt.issueNumber,
            y.value.currentTime = tt.serviceTime.replace(/-/g, "/"),
            y.value.beginTime = tt.startTime.replace(/-/g, "/"),
            at()
        }
          , st = async ot => {
            const Z = await nt(As({
                typeId: ot
            }));
            Z && (R.value = Z.data.number.split(","))
        }
          , at = () => {
            const ot = new Date(y.value.currentTime).getTime()
              , Z = new Date(y.value.beginTime).getTime();
            let tt = (ot - Z) / 1e3
              , O = w[T.value];
            if (tt > O.intervalM * 60 && (tt = O.intervalM * 60),
            y.value.passTime = O.intervalM * 60 - tt,
            y.value.passTime < 0) {
                z.value = "An error occurred, please contact customer service。The game time is " + O.intervalM + " minutes,start time is " + y.value.beginTime + ",current time is" + y.value.currentTime + "!",
                v.value = !0;
                return
            }
            Y()
        }
          , Y = () => {
            clearInterval(k.value),
            _t(!1),
            k.value = setInterval(function() {
                _t()
            }, 1e3)
        }
          , _t = (ot=!0) => {
            if (y.value.passTime <= f.value && (L.value = !1),
            N.value == "1" && (y.value.passTime <= f.value && y.value.passTime > 1 ? Bt(1) : y.value.passTime == 1 && Bt(2)),
            y.value.passTime > 0) {
                let Z = y.value.passTime;
                y.value.time2 = Math.floor(Z / 60),
                y.value.time3 = Math.floor(Z % 60 / 10),
                y.value.time4 = Math.floor(Z % 10),
                y.value.passTime--
            } else
                clearInterval(k.value),
                ot && qt()
        }
          , Bt = (ot=1) => {
            const Z = document.getElementById(`voice${ot}`);
            Z && Z.play()
        }
          , qt = () => {
            ht(x.value || 0),
            u.value.getWinsUserAmount(!1),
            m.value.getData(!0)
        }
          , bt = h({})
          , Ot = h([])
          , Vt = ot => {
            if (u.value.getWinsUserAmount(!1),
            m.value.getData(),
            bt.value[ot])
                return;
            bt.value[ot] = !0;
            const {time1: Z, time2: tt, time3: O, time4: it} = y.value
              , ft = (Z * 10 * 60 + tt * 60 + O * 10 + it) * 1e3 + Math.floor(Math.random() * 2e3) + 1e3;
            Ot.value[I.value.intervalM] = setTimeout( () => {
                $t(ot)
            }
            , ft)
        }
          , yt = ot => {
            p.value = ot
        }
          , wt = ot => {
            R.value = ot
        }
          , Tt = h(null)
          , $t = async ot => {
            const [Z,tt] = await ie(Ms({
                issueNumber: [ot]
            }));
            if (tt) {
                const O = tt.filter(it => it.state != 2);
                if (!O.length)
                    return;
                c.value.showMark(O),
                delete bt.value[ot]
            }
        }
        ;
        return (ot, Z) => {
            const tt = W("NavBar");
            return n(),
            a("div", fx, [C(tt, {
                "left-arrow": "",
                onClickLeft: l,
                class: "main",
                headLogo: !0
            }, {
                right: P( () => [t("div", yx, [t("div", {
                    onClick: Z[0] || (Z[0] = O => j("CustomerService"))
                }), t("div", {
                    class: B({
                        disableVoice: N.value == "2"
                    }),
                    onClick: D
                }, null, 2)])]),
                _: 1
            }), $(" 钱包余额 "), C(Mi, {
                ref_key: "WallteRef",
                ref: u
            }, null, 512), C(wi, {
                key: "wingo",
                class: "lottery-notice"
            }), $(" 游戏类型 "), C(Pi, {
                gameList: d(w),
                currentGameIndex: T.value,
                onChangeGame: rt
            }, null, 8, ["gameList", "currentGameIndex"]), $(" 游戏开始时间倒计时 "), C(Fz, {
                currentInfo: y.value,
                winNum: R.value,
                gameName: I.value.typeName,
                currentGame: I.value
            }, null, 8, ["currentInfo", "winNum", "gameName", "currentGame"]), $(" 投注表 "), C(Fa, {
                currentInfo: y.value,
                currentGame: I.value,
                VoiceType: N.value,
                typeid: x.value,
                onBetting: Vt,
                onChangeBettingP: yt,
                "betting-api-fun": d(ha)
            }, null, 8, ["currentInfo", "currentGame", "VoiceType", "typeid", "betting-api-fun"]), $(" 记录导航 "), C(Oi, {
                record: r.value,
                onChangeC: Z[1] || (Z[1] = O => r.value = O)
            }, null, 8, ["record"]), $(" 动态展示对应的组件 "), (n(),
            J(Ue, null, [(n(),
            J(He(g[r.value]), {
                class: "game-record",
                ref_key: "RecordComponent",
                ref: m,
                typeid: x.value,
                ApiFun: d(mn),
                listApi: d(Na),
                EmerdApi: d(_a),
                goPathName: "AllLotteryGames-BettingRecordWin",
                onChangefive: wt
            }, null, 40, ["typeid", "ApiFun", "listApi", "EmerdApi"]))], 1024)), $(" 弹窗组件 "), C(Re, {
                show: v.value,
                onConfirm: Z[2] || (Z[2] = O => j("/login"))
            }, {
                content: P( () => [t("div", null, e(z.value), 1)]),
                _: 1
            }, 8, ["show"]), $(" 中奖提示组件 "), C(Ua, {
                ref_key: "WinningTipsRef",
                ref: c
            }, null, 512), A.value ? (n(),
            J(Ei, {
                key: 0
            })) : $("v-if", !0), C(qi)])
        }
    }
});
const wx = V($x, [["__scopeId", "data-v-5d71c3fd"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/home/AllLotteryGames/WinGo/index.vue"]])
  , TG = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: wx
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Nn = s => (Nt("data-v-3c1bee29"),
s = s(),
zt(),
s)
  , Tx = {
    class: "TimeLeft__C"
}
  , Cx = {
    class: "TimeLeft__C-l1"
}
  , Lx = {
    class: "TimeLeft__C-l1-l"
}
  , Nx = {
    class: "TimeLeft__C-l1-no"
}
  , zx = Nn( () => t("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "36",
    height: "36",
    viewBox: "0 0 36 36",
    fill: "none"
}, [t("path", {
    d: "M9.67074 29.1107L9.66322 29.1182L9.65598 29.126C9.02654 29.8017 8.45747 30.2157 7.98006 30.4218C7.50853 30.6254 7.16285 30.6135 6.91422 30.5064C6.6612 30.3975 6.39655 30.1416 6.18925 29.6333C5.98114 29.123 5.85 28.3992 5.85 27.45V10.56C5.85 7.52835 6.21824 5.86758 7.1019 4.92303C7.97224 3.99272 9.4962 3.6 12.33 3.6H23.67C26.5041 3.6 28.0275 3.99282 28.8959 4.92264C29.7774 5.86659 30.1425 7.52679 30.135 10.5585V10.56V27.435C30.135 28.3846 30.0047 29.1087 29.7975 29.6192C29.5911 30.1278 29.3276 30.383 29.076 30.4916C28.8287 30.5983 28.4837 30.6106 28.011 30.4067C27.5326 30.2004 26.9615 29.7861 26.3282 29.1102C25.6005 28.3296 24.6554 27.9468 23.7086 27.9984C22.7618 28.0499 21.8639 28.5332 21.225 29.385L21.2246 29.3856L19.7116 31.4079C19.7113 31.4083 19.711 31.4087 19.7107 31.4091C19.1996 32.0836 18.5725 32.3738 17.9925 32.3738C17.4125 32.3738 16.7854 32.0836 16.2743 31.4091C16.274 31.4087 16.2737 31.4083 16.2734 31.4079L14.7606 29.3858C14.7605 29.3857 14.7605 29.3856 14.7604 29.3856C13.4723 27.6623 11.1634 27.5349 9.67973 29.1017L9.67074 29.1107ZM9.57 16.5C9.57 17.6564 10.5136 18.6 11.67 18.6C12.8264 18.6 13.77 17.6564 13.77 16.5C13.77 15.3436 12.8264 14.4 11.67 14.4C10.5136 14.4 9.57 15.3436 9.57 16.5ZM9.57 10.5C9.57 11.6564 10.5136 12.6 11.67 12.6C12.8264 12.6 13.77 11.6564 13.77 10.5C13.77 9.34363 12.8264 8.4 11.67 8.4C10.5136 8.4 9.57 9.34363 9.57 10.5ZM16.095 18.225H24.345C25.2914 18.225 26.07 17.4464 26.07 16.5C26.07 15.5536 25.2914 14.775 24.345 14.775H16.095C15.1486 14.775 14.37 15.5536 14.37 16.5C14.37 17.4464 15.1486 18.225 16.095 18.225ZM16.095 12.225H24.345C25.2914 12.225 26.07 11.4464 26.07 10.5C26.07 9.55363 25.2914 8.775 24.345 8.775H16.095C15.1486 8.775 14.37 9.55363 14.37 10.5C14.37 11.4464 15.1486 12.225 16.095 12.225Z",
    stroke: "currentColor",
    "stroke-width": "1.2"
})], -1))
  , Ix = Nn( () => t("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "36",
    height: "36",
    viewBox: "0 0 36 36",
    fill: "none"
}, [t("path", {
    d: "M22.3206 29.4914C20.713 30.1573 18.99 30.5 17.25 30.5C13.7359 30.5 10.3657 29.104 7.88084 26.6192C5.39598 24.1343 4 20.7641 4 17.25C4 13.7359 5.39598 10.3657 7.88083 7.88083C10.3657 5.39598 13.7359 4 17.25 4C18.99 4 20.713 4.34272 22.3206 5.0086C23.9281 5.67447 25.3888 6.65046 26.6192 7.88083C27.8495 9.11121 28.8255 10.5719 29.4914 12.1794C30.1573 13.787 30.5 15.51 30.5 17.25C30.5 18.99 30.1573 20.713 29.4914 22.3206C28.8255 23.9281 27.8495 25.3888 26.6192 26.6192C25.3888 27.8495 23.9281 28.8255 22.3206 29.4914ZM31.95 31.9985C31.9436 31.9985 31.9355 31.9971 31.9282 31.9941C31.9242 31.9925 31.922 31.9911 31.9214 31.9906L29.1369 29.2062C29.1268 29.1953 29.1211 29.1809 29.1211 29.166C29.1211 29.152 29.1261 29.1385 29.1351 29.1279C29.1381 29.1254 29.1407 29.124 29.1432 29.123C29.1472 29.1213 29.1535 29.1197 29.1619 29.1197C29.1774 29.1197 29.1952 29.1249 29.2127 29.1404L31.9929 31.9206C31.9948 31.9226 31.9963 31.9243 31.9975 31.926C31.9989 31.928 31.9998 31.9299 32.0005 31.9317C32.0022 31.9357 32.0037 31.942 32.0037 31.9504C32.0037 31.9608 32.0014 31.9723 31.9952 31.984C31.9756 31.9955 31.9587 31.9985 31.95 31.9985Z",
    stroke: "currentColor",
    "stroke-width": "2"
})], -1))
  , xx = {
    class: "TimeLeft__C-l2"
}
  , Sx = {
    class: "TimeLeft__C-time"
}
  , Rx = Nn( () => t("div", {
    notime: ""
}, ":", -1))
  , Bx = {
    class: "TimeLeft__C-l3"
}
  , Gx = F({
    __name: "TimeLeft",
    props: {
        currentInfo: {
            type: Object,
            default: () => ({
                gameNo: "loading",
                currentTime: "",
                beginTime: "",
                passTime: 180,
                time1: 0,
                time2: 0,
                time3: 0,
                time4: 0
            })
        },
        settled: {
            type: Object,
            default: () => ({})
        },
        gameName: {
            type: String,
            default: ""
        },
        currentGame: {
            type: Object,
            default: () => ({})
        }
    },
    setup(s) {
        const i = s
          , o = h(!1)
          , l = ct()
          , g = Q( () => {
            const {blockID: r} = i.settled;
            if (!r)
                return [0, 0, 0, 0, 0];
            let b = r.substring(r.length - 5).toUpperCase();
            return /\d/.test(b) ? [...b] : [...r.substring(r.length - 5, r.length - 10).toUpperCase()]
        }
        )
          , m = Q( () => {
            var r;
            return (r = i.settled) == null ? void 0 : r.number
        }
        )
          , c = () => {
            let r = "https://tronscan.org";
            l.push({
                name: "AllLotteryGames-WinTrxIframe",
                query: {
                    url: r
                }
            })
        }
          , u = ye()
          , p = () => {
            o.value = !0,
            u.getTrxRule(i.currentGame.typeID)
        }
        ;
        return (r, b) => (n(),
        a("div", Tx, [t("div", Cx, [t("div", Lx, [t("div", Nx, e(r.$t("winTrxNum")), 1), t("div", {
            class: "TimeLeft__C-l1-tip",
            onClick: p
        }, [zx, E(e(r.$t("winTrxIndicate")), 1)])]), t("div", {
            class: "TimeLeft__C-l1-r",
            onClick: c
        }, [Ix, E(e(r.$t("winTrxPub")), 1)])]), t("div", xx, [t("div", null, e(i.currentInfo.gameNo), 1), t("div", Sx, [t("span", null, e(r.$t("winTrxTime")), 1), t("div", null, e(s.currentInfo.time1), 1), t("div", null, e(s.currentInfo.time2), 1), Rx, t("div", null, e(s.currentInfo.time3), 1), t("div", null, e(s.currentInfo.time4), 1)])]), t("div", Bx, [(n(!0),
        a(S, null, G(g.value, (_, w) => (n(),
        a(S, {
            key: w
        }, [m.value == _ ? (n(),
        a("p", {
            key: 0,
            class: B(["num" + _, m.value == _ && "prize" + _])
        }, null, 2)) : (n(),
        a("div", {
            key: 1,
            class: B(["num" + _, m.value == _ && "prize" + _])
        }, null, 2))], 64))), 128))]), $(" 规则弹层 begin"), C(Di, {
            howPlayShow: o.value,
            gamePresentation: s.currentGame.gamePresentation,
            onClose: b[0] || (b[0] = _ => o.value = !1)
        }, null, 8, ["howPlayShow", "gamePresentation"])]))
    }
});
const Ax = V(Gx, [["__scopeId", "data-v-3c1bee29"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/AllLotteryGames/WinTrx/TimeLeft.vue"]])
  , Mx = {
    class: "GameRecord__C"
}
  , Px = {
    class: "GameRecord__C-head"
}
  , Dx = {
    class: "GameRecord__C-body"
}
  , Ox = {
    class: "numberC"
}
  , Ex = {
    key: 1,
    class: "GameRecord__C-body-empty"
}
  , qx = {
    key: 0,
    class: "GameRecord__C-foot"
}
  , jx = {
    class: "GameRecord__C-foot-page"
}
  , Hx = F({
    __name: "GameRecord",
    props: {
        typeid: {
            type: Number,
            required: !0
        }
    },
    setup(s, {expose: i}) {
        const o = s
          , l = h([])
          , g = h(4)
          , m = h(10)
          , c = h(1)
          , u = ct()
          , p = () => {
            c.value--,
            b()
        }
          , r = () => {
            c.value++,
            b()
        }
          , b = async (w=!1) => {
            if (o.typeid == null)
                return;
            w && (c.value = 1);
            const [T,N] = await ie(za({
                pageSize: m.value,
                pageNo: c.value,
                typeId: o.typeid
            }));
            if (!N)
                return;
            let v = N == null ? void 0 : N.data.date.serviceTime;
            l.value = N.data.gameslist.map(k => {
                if (k.blockID) {
                    var y = k.blockID.length
                      , f = k.blockID.substring(y - 4, y);
                    k.blockName = "**" + f
                }
                if (k.issueNumber) {
                    var z = k.issueNumber.substring(0, 3)
                      , L = k.issueNumber.length
                      , x = k.issueNumber.substring(L - 4, L);
                    k.issue = z + "**" + x
                }
                if (k.blockTime) {
                    let I = v.split(" ")
                      , R = k.blockTime.split(" ");
                    k.day = I[0].substring(8, 10) == R[0].substring(8, 10),
                    k.time = R[1]
                }
                return k
            }
            ),
            g.value = N.totalPage
        }
          , _ = w => {
            let T = `https://tronscan.org/#/block/${w}`;
            u.push({
                name: "AllLotteryGames-WinTrxIframe",
                query: {
                    url: T
                }
            })
        }
        ;
        return i({
            getData: b
        }),
        fe( () => {
            b()
        }
        ),
        (w, T) => {
            const N = W("van-col")
              , v = W("van-row")
              , k = W("svg-icon")
              , y = W("van-icon");
            return n(),
            a("div", Mx, [t("div", Px, [C(v, null, {
                default: P( () => [C(N, {
                    span: "4"
                }, {
                    default: P( () => [E(e(w.$t("betSerial")), 1)]),
                    _: 1
                }), C(N, {
                    span: "6"
                }, {
                    default: P( () => [E(e(w.$t("winTrxDesc1")), 1)]),
                    _: 1
                }), C(N, {
                    span: "5"
                }, {
                    default: P( () => [E(e(w.$t("winTrxDesc2")), 1)]),
                    _: 1
                }), C(N, {
                    span: "5"
                }, {
                    default: P( () => [E(e(w.$t("winTrxDesc3")), 1)]),
                    _: 1
                }), C(N, {
                    span: "4"
                }, {
                    default: P( () => [E(e(w.$t("winTrxDesc4")), 1)]),
                    _: 1
                })]),
                _: 1
            })]), t("div", Dx, [l.value.length ? (n(!0),
            a(S, {
                key: 0
            }, G(l.value, (f, z) => (n(),
            J(v, {
                key: z
            }, {
                default: P( () => [C(N, {
                    span: "6"
                }, {
                    default: P( () => [E(e(f.issue), 1)]),
                    _: 2
                }, 1024), C(N, {
                    span: "4",
                    onClick: L => _(f.blockNumber)
                }, {
                    default: P( () => [E(e(f.blockNumber) + " ", 1), f.day ? (n(),
                    J(k, {
                        key: 0,
                        name: "trxquestion",
                        class: "Binquire"
                    })) : $("v-if", !0)]),
                    _: 2
                }, 1032, ["onClick"]), C(N, {
                    span: "5"
                }, {
                    default: P( () => [E(e(f.time), 1)]),
                    _: 2
                }, 1024), C(N, {
                    span: "4"
                }, {
                    default: P( () => [E(e(f.blockName), 1)]),
                    _: 2
                }, 1024), C(N, {
                    span: "5"
                }, {
                    default: P( () => [t("div", Ox, [t("div", {
                        class: B(["number", ["num" + f.number]])
                    }, e(f.number), 3), t("div", {
                        class: B([Number(f.number) > 4 ? "big" : "small"])
                    }, e(Number(f.number) > 4 ? "B" : "S"), 3)])]),
                    _: 2
                }, 1024)]),
                _: 2
            }, 1024))), 128)) : (n(),
            a("div", Ex, [C(ge)]))]), l.value.length ? (n(),
            a("div", qx, [t("div", {
                class: B(["GameRecord__C-foot-previous", {
                    disabled: c.value <= 1
                }]),
                onClick: p
            }, [C(y, {
                name: "arrow-left",
                class: "GameRecord__C-icon",
                size: "20"
            })], 2), t("div", jx, e(c.value) + "/" + e(g.value), 1), t("div", {
                class: B(["GameRecord__C-foot-next", {
                    disabled: c.value >= g.value
                }]),
                onClick: r
            }, [C(y, {
                name: "arrow",
                class: "GameRecord__C-icon",
                size: "20"
            })], 2)])) : $("v-if", !0)])
        }
    }
});
const Wx = V(Hx, [["__scopeId", "data-v-7a795a91"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/AllLotteryGames/WinTrx/GameRecord.vue"]])
  , Fx = {
    class: "WinTrx__C"
}
  , Vx = {
    class: "WinTrx__C-head-more"
}
  , Ux = F({
    __name: "index",
    setup(s) {
        const i = () => {
            p.go(-1),
            sessionStorage.setItem("clickedGameType", "lottery")
        }
          , o = {
            GameRecord: Wx,
            Trend: Va,
            MyGameRecord: wn
        }
          , l = h()
          , g = h()
          , m = h()
          , c = h(!1)
          , u = h("GameRecord")
          , p = ct()
          , r = ye();
        let b = Et([]);
        const _ = h(0)
          , w = h(localStorage.getItem("volumeShow") || "1")
          , T = h(!1)
          , N = h(null)
          , v = h()
          , k = h({
            gameNo: "loading",
            currentTime: "",
            beginTime: "",
            passTime: 180,
            time1: 0,
            time2: 0,
            time3: 0,
            time4: 0
        })
          , y = h(10)
          , f = h("")
          , z = h(!1)
          , L = h(null)
          , x = Q( () => r.trx[_.value] || {})
          , R = Ze().query.typeId;
        Lt( () => {
            D()
        }
        ),
        Ve( () => {
            clearInterval(N.value),
            Bt.value.forEach(yt => {
                clearInterval(yt)
            }
            ),
            Ot.value && clearTimeout(Ot.value)
        }
        ),
        At( () => De().visibility, yt => {
            yt === 0 ? clearInterval(N.value) : D(_.value)
        }
        );
        const M = () => {
            w.value == "1" ? w.value = "2" : w.value = "1",
            localStorage.setItem("volumeShow", w.value)
        }
          , A = yt => {
            p.push({
                name: yt
            })
        }
          , D = async (yt=null) => {
            await r.getTrxData(),
            b = r.trx;
            const wt = b.findIndex(Tt => Tt.typeID == R);
            L.value == null && !R ? j(0) : j(yt ?? wt)
        }
          , j = yt => {
            r.getTrxData(),
            _.value = yt,
            L.value = b[yt].typeID,
            X(L.value),
            Jt( () => {
                l.value.getData(L.value)
            }
            )
        }
          , X = async yt => {
            const [wt,Tt] = await ie(Ps({
                typeId: yt
            }));
            k.value.gameNo = Tt.predraw.issueNumber,
            k.value.currentTime = Tt.predraw.serviceTime.replace(/-/g, "/"),
            k.value.beginTime = Tt.predraw.startTime.replace(/-/g, "/"),
            v.value = Tt.settled,
            rt()
        }
          , rt = () => {
            if (!b.length)
                return;
            var yt = new Date(k.value.currentTime).getTime()
              , wt = new Date(k.value.beginTime).getTime();
            let Tt = (yt - wt) / 1e3
              , $t = b[_.value];
            if (Tt > $t.intervalM * 60 && (Tt = $t.intervalM * 60),
            k.value.passTime = $t.intervalM * 60 - Tt,
            k.value.passTime < 0) {
                f.value = "An error occurred, please contact customer service。The game time is " + $t.intervalM + " minutes,start time is " + k.value.beginTime + ",current time is" + k.value.currentTime + "!",
                T.value = !0;
                return
            }
            ht()
        }
          , ht = () => {
            clearInterval(N.value),
            st(!1),
            N.value = setInterval(function() {
                st()
            }, 1e3)
        }
          , st = (yt=!0) => {
            if (k.value.passTime <= y.value && (z.value = !1),
            w.value == "1" && (k.value.passTime <= y.value && k.value.passTime > 1 ? at(1) : k.value.passTime == 1 && at(2)),
            k.value.passTime > 0) {
                let wt = k.value.passTime;
                k.value.time2 = Math.floor(wt / 60),
                k.value.time3 = Math.floor(wt % 60 / 10),
                k.value.time4 = Math.floor(wt % 10),
                k.value.passTime--
            } else
                clearInterval(N.value),
                yt && Y()
        }
          , at = (yt=1) => {
            const wt = document.getElementById(`voice${yt}`);
            wt && wt.play()
        }
          , Y = () => {
            X(L.value),
            m.value.getWinsUserAmount(!1),
            l.value.getData(!0)
        }
          , _t = h({})
          , Bt = h([])
          , qt = yt => {
            if (m.value.getWinsUserAmount(!1),
            l.value.getData(),
            _t.value[yt])
                return;
            _t.value[yt] = !0;
            const {time1: wt, time2: Tt, time3: $t, time4: ot} = k.value
              , Z = (wt * 10 * 60 + Tt * 60 + $t * 10 + ot) * 1e3;
            Bt.value[x.value.intervalM] = setTimeout( () => {
                Vt(yt)
            }
            , Z)
        }
          , bt = yt => {
            c.value = yt
        }
          , Ot = h(null)
          , Vt = async yt => {
            const wt = await nt(Ds({
                issueNumber: [yt]
            }));
            if (wt) {
                const Tt = wt.data.filter($t => $t.state != 2);
                if (!Tt.length) {
                    Ot.value = setTimeout( () => {
                        Vt(yt)
                    }
                    , 2e3);
                    return
                }
                g.value.showMark(Tt),
                delete _t.value[yt]
            }
        }
        ;
        return (yt, wt) => {
            const Tt = W("NavBar");
            return n(),
            a("div", Fx, [C(Tt, {
                "left-arrow": "",
                onClickLeft: i,
                class: "main",
                headLogo: !0
            }, {
                right: P( () => [t("div", Vx, [t("div", {
                    onClick: wt[0] || (wt[0] = $t => A("CustomerService"))
                }), t("div", {
                    class: B({
                        disableVoice: w.value == "2"
                    }),
                    onClick: M
                }, null, 2)])]),
                _: 1
            }), $(" 钱包余额 "), C(Mi, {
                ref_key: "WallteRef",
                ref: m
            }, null, 512), C(wi, {
                key: "winx"
            }), $(" 游戏类型 "), C(Pi, {
                gameList: d(b),
                currentGameIndex: _.value,
                onChangeGame: j
            }, null, 8, ["gameList", "currentGameIndex"]), $(" 游戏开始时间倒计时 "), C(Ax, {
                currentInfo: k.value,
                gameName: x.value.typeName,
                currentGame: x.value,
                settled: v.value
            }, null, 8, ["currentInfo", "gameName", "currentGame", "settled"]), $(" 投注表 "), C(Fa, {
                currentInfo: k.value,
                ProhibitBuyTime: y.value,
                currentGame: x.value,
                VoiceType: w.value,
                typeid: L.value,
                onBetting: qt,
                onChangeBettingP: bt,
                "betting-api-fun": d(Os)
            }, null, 8, ["currentInfo", "ProhibitBuyTime", "currentGame", "VoiceType", "typeid", "betting-api-fun"]), $(" 记录导航 "), C(Oi, {
                record: u.value,
                onChangeC: wt[1] || (wt[1] = $t => u.value = $t)
            }, null, 8, ["record"]), $(" 动态展示对应的组件 "), (n(),
            J(Ue, null, [(n(),
            J(He(o[u.value]), {
                ref_key: "RecordComponent",
                ref: l,
                typeid: L.value,
                ApiFun: d(_n),
                listApi: d(za),
                EmerdApi: d(ya),
                goPathName: "AllLotteryGames-BettingRecordWinTrx"
            }, null, 8, ["typeid", "ApiFun", "listApi", "EmerdApi"]))], 1024)), $(" 弹窗组件 "), C(Re, {
                show: T.value,
                onConfirm: wt[2] || (wt[2] = $t => A("/login"))
            }, {
                content: P( () => [t("div", null, e(f.value), 1)]),
                _: 1
            }, 8, ["show"]), $(" 中奖提示组件 "), C(Ua, {
                ref_key: "WinningTipsRef",
                ref: g
            }, null, 512), C(qi)])
        }
    }
});
const Kx = V(Ux, [["__scopeId", "data-v-ac90c264"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/home/AllLotteryGames/WinTrx/index.vue"]])
  , CG = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Kx
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Xx = {
    class: "WinTrxIfram__C"
}
  , Qx = ["src"]
  , Zx = F({
    __name: "index",
    setup(s) {
        const i = ct()
          , o = Q( () => String(i.currentRoute.value.query.url))
          , l = () => {
            i.go(-1)
        }
        ;
        return (g, m) => {
            const c = W("NavBar");
            return n(),
            a("div", Xx, [C(c, {
                "left-arrow": "",
                onClickLeft: l,
                backgroundColor: "linear-gradient(90deg,#cd0103,#f64841)",
                title: "TRX"
            }), t("iframe", {
                class: "iframe",
                sandbox: "allow-same-origin allow-popups allow-scripts",
                frameborder: "0",
                marginwidth: "0",
                marginheight: "0",
                vspace: "0",
                hspace: "0",
                allowtransparency: "true",
                allowfullscreen: !0,
                ref: "iframe",
                src: o.value
            }, null, 8, Qx)])
        }
    }
});
const Yx = V(Zx, [["__scopeId", "data-v-5930c2be"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/home/AllLotteryGames/WinTrxIframe/index.vue"]])
  , LG = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Yx
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Jx = {
    class: "Xoso"
}
  , tS = {
    style: {
        "background-color": "#f7f8ff"
    }
}
  , eS = {
    key: 1,
    class: "Xoso-page"
}
  , iS = {
    class: "title"
}
  , nS = {
    class: "list"
}
  , aS = ["onClick"]
  , oS = {
    key: 0
}
  , sS = ["src"]
  , lS = {
    key: 1,
    class: "info"
}
  , cS = {
    class: "issue"
}
  , rS = ["src"]
  , uS = {
    class: "time"
}
  , dS = F({
    __name: "index",
    setup(s) {
        const {t: i} = gt()
          , o = ct();
        let l = o.currentRoute.value.query.id;
        const g = Q( () => l == "5" ? "XOSO" : l == "6" ? i("fXosoTitle") : "XOSO")
          , {setLoading: m} = Bi()
          , c = () => {
            o.go(-1)
        }
          , u = (T, N, v, k) => {
            N.day = v,
            N.id = l,
            N.areId = k,
            o.push({
                name: T,
                query: N
            })
        }
          , p = h(null)
          , r = h(0)
          , b = T => {
            sessionStorage.setItem("xosoList", JSON.stringify(_.value[T.index]))
        }
          , _ = h([]);
        return (async () => {
            m(!0);
            let T;
            l == "5" ? T = await nt(wa()) : l == "6" && (T = await nt(Ta())),
            T && (_.value = T.data,
            sessionStorage.setItem("xosoList", JSON.stringify(T.data[0]))),
            m(!1)
        }
        )(),
        (T, N) => {
            const v = W("NavBar")
              , k = W("van-sticky");
            return n(),
            a("div", Jx, [C(v, {
                class: "main",
                "left-arrow": "",
                onClickLeft: c,
                "background-color": "linear-gradient(90deg, #F95959 0%, #FF9A8E 100%)",
                title: g.value
            }, {
                default: P( () => [$(` <template #right>
				<div class="WinGo__C-head-more">
					<div @click="goPath('AllLotteryGames-XoSoRecord')">投注记录</div>
				</div>
			</template> `)]),
                _: 1
            }, 8, ["title"]), d(l) == "5" ? (n(),
            J(k, {
                key: 0,
                "offset-top": 46,
                container: p.value,
                class: "bet-container-sticky"
            }, {
                default: P( () => [t("div", tS, [C(ui, {
                    list: _.value,
                    active: r.value,
                    "onUpdate:active": N[0] || (N[0] = y => r.value = y),
                    tabClassName: "tabs",
                    onOnClickTab: b,
                    activeClassName: "tab_active",
                    ref: "tabRefs",
                    tabItemClassName: "funtab_item"
                }, {
                    default: P( ({item: y, index: f}) => [t("div", {
                        class: B(["tab_item", {
                            tab_active: f === r.value
                        }])
                    }, [t("span", null, e(T.$t(y.week)), 1), t("p", null, e(y.day), 1)], 2)]),
                    _: 1
                }, 8, ["list", "active"])])]),
                _: 1
            }, 8, ["container"])) : $("v-if", !0), _.value[r.value] ? (n(),
            a("div", eS, [(n(!0),
            a(S, null, G(_.value[r.value].areInfos, (y, f) => (n(),
            a("div", {
                class: "Xoso-page-box",
                key: f
            }, [t("div", iS, e(T.$t("code" + y.areNameCode)), 1), t("div", nS, [(n(!0),
            a(S, null, G(y.areIssueNos, (z, L) => (n(),
            a("div", {
                class: "item",
                key: L,
                onClick: x => u("AllLotteryGames-NewVietnam", z, _.value[r.value].day, y.areId)
            }, [z.status == 1 || z.status == 2 || z.status == 3 ? (n(),
            a("h4", oS, [E(e(T.$t("code" + z.nameCode)) + " ", 1), t("img", {
                class: "img",
                src: d(Xt)("public", "xosoCity"),
                alt: ""
            }, null, 8, sS)])) : $("v-if", !0), z.status == 1 || z.status == 2 || z.status == 3 ? (n(),
            a("div", lS, [t("div", cS, [t("img", {
                class: "img",
                src: d(Xt)("public", "ticketstar"),
                alt: ""
            }, null, 8, rS), E(e(z.issueNo), 1)]), t("p", null, e(T.$t("xosoTxt72")), 1), t("div", uS, [(n(!0),
            a(S, null, G(_.value[r.value].day.split("-"), (x, I) => (n(),
            a("div", {
                key: I
            }, e(x), 1))), 128))])])) : $("v-if", !0)], 8, aS))), 128))])]))), 128))])) : $("v-if", !0)])
        }
    }
});
const pS = V(dS, [["__scopeId", "data-v-d965c53a"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/home/AllLotteryGames/XoSo/index.vue"]])
  , NG = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: pS
}, Symbol.toStringTag, {
    value: "Module"
}))
  , gS = {
    class: "TeamReport__C"
}
  , bS = {
    class: "TeamReport__C-head"
}
  , mS = {
    class: "TeamReport__C-head-fixed"
}
  , _S = {
    class: "TeamReport__C-head-line1"
}
  , vS = {
    key: 0,
    class: "default"
}
  , kS = {
    key: 1,
    class: "default"
}
  , hS = {
    class: "TeamReport__C-head-line2"
}
  , fS = {
    key: 0,
    class: "default"
}
  , yS = {
    key: 1,
    class: "default"
}
  , $S = {
    class: "TeamReport__C-list"
}
  , wS = F({
    __name: "index",
    setup(s) {
        const {t: i} = gt()
          , o = ct()
          , l = Ze()
          , g = () => {
            o.go(-1)
        }
          , m = h([])
          , c = h([])
          , u = {
            text: "nameCode",
            value: "value"
        }
          , p = h()
          , r = h(!1)
          , b = h(!1)
          , _ = Et({
            bettingParentType: "",
            areId: "",
            startDate: "",
            endDate: ""
        })
          , w = h()
          , T = h()
          , N = ({selectedOptions: L}) => {
            _.bettingParentType = Number(L[0].value),
            T.value = L[0].nameCode,
            w.value.getData(),
            r.value = !1
        }
          , v = h()
          , k = ({selectedOptions: L}) => {
            _.areId = Number(L[0].value),
            v.value = L[0].nameCode,
            w.value.getData(),
            b.value = !1
        }
        ;
        async function y() {
            let L = p.value.endDateValue !== "" ? `${p.value.endDateValue} 23:59:59` : "";
            _.startDate = `${_e(p.value.startDateValue).format("YYYY-MM-DD")} 23:59:59`,
            _.endDate = `${_e(L).format("YYYY-MM-DD")} 23:59:59`,
            w.value.getData()
        }
        const f = async () => {
            const L = Number(l.query.areId) | 0
              , x = await nt(Es({
                areId: L
            }));
            c.value = z(x.data.categorys),
            c.value.unshift({
                value: "",
                nameCode: i("all")
            }),
            m.value = z(x.data.ares),
            m.value.unshift({
                value: "",
                nameCode: i("all")
            })
        }
          , z = L => L.map(I => {
            let R = {
                value: "",
                nameCode: ""
            };
            return R.value = I.value,
            R.nameCode = i("code" + I.nameCode),
            R
        }
        );
        return f(),
        (L, x) => {
            const I = W("NavBar")
              , R = W("van-icon")
              , M = W("van-picker")
              , A = W("van-popup");
            return n(),
            a("div", gS, [C(I, {
                "left-arrow": "",
                onClickLeft: g,
                "background-color": "linear-gradient(90deg, #F95959 0%, #FF9A8E 100%)",
                title: L.$t("xosoTxt73")
            }, null, 8, ["title"]), t("div", bS, [t("div", mS, [t("div", _S, [t("div", {
                onClick: x[0] || (x[0] = D => b.value = !0)
            }, [v.value ? (n(),
            a("span", vS, e(v.value), 1)) : (n(),
            a("span", kS, e(d(i)("all")), 1)), C(R, {
                name: "arrow-down"
            })])]), t("div", hS, [t("div", {
                onClick: x[1] || (x[1] = D => r.value = !0)
            }, [T.value ? (n(),
            a("span", fS, e(T.value), 1)) : (n(),
            a("span", yS, e(d(i)("all")), 1)), C(R, {
                name: "arrow-down"
            })]), $("日期选择组件"), t("div", null, [C(Cd, {
                ref_key: "calendar",
                ref: p,
                onConfirm: y
            }, null, 512)])])])]), $(" list "), t("div", $S, [(n(),
            J(Ue, null, [C(Cn, {
                ref_key: "RecordComponent",
                ref: w,
                parmas: _,
                ApiFun: d(Ca),
                hasHead: !1,
                gVSs: "1"
            }, null, 8, ["parmas", "ApiFun"])], 1024))]), C(A, {
                show: r.value,
                "onUpdate:show": x[3] || (x[3] = D => r.value = D),
                round: "",
                position: "bottom"
            }, {
                default: P( () => [C(M, {
                    "columns-field-names": u,
                    columns: c.value,
                    onCancel: x[2] || (x[2] = D => r.value = !1),
                    onConfirm: N
                }, null, 8, ["columns"])]),
                _: 1
            }, 8, ["show"]), C(A, {
                show: b.value,
                "onUpdate:show": x[5] || (x[5] = D => b.value = D),
                round: "",
                position: "bottom"
            }, {
                default: P( () => [C(M, {
                    "columns-field-names": u,
                    columns: m.value,
                    onCancel: x[4] || (x[4] = D => b.value = !1),
                    onConfirm: k
                }, null, 8, ["columns"])]),
                _: 1
            }, 8, ["show"])])
        }
    }
});
const TS = V(wS, [["__scopeId", "data-v-b328b529"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/home/AllLotteryGames/XoSoRecord/index.vue"]])
  , zG = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: TS
}, Symbol.toStringTag, {
    value: "Module"
}))
  , CS = {
    class: "TeamReport__C"
}
  , LS = {
    style: {
        "background-color": "#f7f8ff"
    }
}
  , NS = {
    class: "TeamReport__C-list"
}
  , zS = F({
    __name: "index",
    setup(s) {
        const i = ct()
          , o = () => {
            i.go(-1)
        }
          , l = h(0)
          , g = h([])
          , m = h();
        let c = i.currentRoute.value.query.areId
          , u = i.currentRoute.value.query.typeId;
        const p = Et({
            bettingParentType: "",
            startDate: "",
            endDate: "",
            areId: "",
            typeId: ""
        })
          , r = _ => {
            p.areId = _.item.areId,
            p.typeId = _.item.typeId,
            m.value.getData()
        }
        ;
        async function b() {
            let _ = JSON.parse(sessionStorage.getItem("xosoList") || "")
              , w = [];
            for (let T = 0; T < _.areInfos.length; T++)
                for (let N = 0; N < _.areInfos[T].areIssueNos.length; N++)
                    _.areInfos[T].areIssueNos[N].type == 2 && w.push({
                        areId: _.areInfos[T].areId,
                        typeId: _.areInfos[T].areIssueNos[N].code,
                        nameCode: _.areInfos[T].areIssueNos[N].nameCode
                    });
            g.value = w,
            g.value.length > 0 && (l.value = g.value.findIndex(T => T.areId == c && T.typeId == u))
        }
        return b(),
        (_, w) => {
            const T = W("NavBar")
              , N = W("van-sticky");
            return n(),
            a("div", CS, [C(T, {
                "left-arrow": "",
                onClickLeft: o,
                "background-color": "linear-gradient(90deg, #F95959 0%, #FF9A8E 100%)",
                title: _.$t("fXosoTitle")
            }, null, 8, ["title"]), C(N, {
                "offset-top": 46,
                class: "bet-container-sticky"
            }, {
                default: P( () => [t("div", LS, [C(ui, {
                    list: g.value,
                    active: l.value,
                    "onUpdate:active": w[0] || (w[0] = v => l.value = v),
                    tabClassName: "tabs",
                    activeClassName: "tab_active",
                    ref: "tabRefs",
                    tabItemClassName: "funtab_item",
                    onOnClickTab: r
                }, {
                    default: P( ({item: v, index: k}) => [t("div", {
                        class: B(["tab_item", {
                            tab_active: k === l.value
                        }])
                    }, [t("p", null, e(_.$t(`code${v.nameCode}`)), 1)], 2)]),
                    _: 1
                }, 8, ["list", "active"])])]),
                _: 1
            }), $(" list "), t("div", NS, [(n(),
            J(Ue, null, [C(Cn, {
                ref_key: "RecordComponent",
                ref: m,
                parmas: p,
                ApiFun: d(La),
                hasHead: !1,
                gVSs: "2"
            }, null, 8, ["parmas", "ApiFun"])], 1024))])])
        }
    }
});
const IS = V(zS, [["__scopeId", "data-v-24e1bb6f"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/home/AllLotteryGames/XoSoRecordF/index.vue"]])
  , IG = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: IS
}, Symbol.toStringTag, {
    value: "Module"
}))
  , xS = {
    class: "header"
}
  , SS = {
    class: "l1"
}
  , RS = {
    class: "header_title"
}
  , BS = {
    key: 0,
    class: "l2"
}
  , GS = {
    class: "inputDom"
}
  , AS = ["v-model"]
  , MS = F({
    __name: "index",
    setup(s) {
        const i = ct()
          , o = h(!1)
          , l = h("")
          , g = () => {
            i.push({
                name: "Casino"
            })
        }
          , m = () => {
            l.value = "",
            o.value = !1
        }
        ;
        return (c, u) => (n(),
        a("div", xS, [t("div", SS, [t("div", {
            class: "backSvg",
            onClick: g
        }), t("div", RS, e(c.$t("live")), 1), t("div", {
            class: "searchIcon",
            onClick: u[0] || (u[0] = p => o.value = !0)
        })]), o.value ? (n(),
        a("div", BS, [t("div", GS, [t("input", {
            type: "text",
            "v-model": l.value,
            placeholder: "Search games……"
        }, null, 8, AS)]), t("div", {
            class: "close",
            onClick: m
        }, "Close")])) : $("v-if", !0)]))
    }
});
const PS = V(MS, [["__scopeId", "data-v-1aca5679"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/home/Casino/Detail/index.vue"]])
  , xG = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: PS
}, Symbol.toStringTag, {
    value: "Module"
}))
  , DS = {
    class: "header"
}
  , OS = {
    class: "l1"
}
  , ES = {
    class: "header_title"
}
  , qS = {
    key: 0,
    class: "l2"
}
  , jS = {
    class: "inputDom"
}
  , HS = ["v-model"]
  , WS = F({
    __name: "index",
    setup(s) {
        const i = ct()
          , o = h(!1)
          , l = h("")
          , g = () => {
            i.push({
                name: "Chess"
            })
        }
          , m = () => {
            l.value = "",
            o.value = !1
        }
        ;
        return (c, u) => (n(),
        a("div", DS, [t("div", OS, [t("div", {
            class: "backSvg",
            onClick: g
        }), t("div", ES, e(c.$t("ChessandCards")), 1), t("div", {
            class: "searchIcon",
            onClick: u[0] || (u[0] = p => o.value = !0)
        })]), o.value ? (n(),
        a("div", qS, [t("div", jS, [t("input", {
            type: "text",
            "v-model": l.value,
            placeholder: "Search games……"
        }, null, 8, HS)]), t("div", {
            class: "close",
            onClick: m
        }, "Close")])) : $("v-if", !0)]))
    }
});
const FS = V(WS, [["__scopeId", "data-v-5df4fc2f"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/home/Chess/Detail/index.vue"]])
  , SG = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: FS
}, Symbol.toStringTag, {
    value: "Module"
}))
  , VS = {
    class: "messageDetail__container content"
}
  , US = {
    class: "messageDetail__container-wrapper"
}
  , KS = {
    class: "messageDetail__container-title"
}
  , XS = {
    class: "messageDetail__container-content"
}
  , QS = F({
    __name: "index",
    setup(s) {
        const {t: i} = gt()
          , o = qs()
          , l = ct()
          , g = h({})
          , m = ki( () => hi( () => import("./messageIconNoDot-db576bc5.js"), ["assets/js/messageIconNoDot-db576bc5.js", "assets/js/modules-9638c0ec.js", "assets/css/modules-b642e9bc.css", "assets/js/page-activity-f7f1ca5a.js", "assets/js/native/index-0cf0be38.js", "assets/js/en-659e4950.js", "assets/js/rus-f020166a.js", "assets/js/vi-df1c6473.js", "assets/js/id-1122fea2.js", "assets/js/hd-134ebb62.js", "assets/js/tha-63c28cd3.js", "assets/js/md-1aba351c.js", "assets/js/bra-5f0975e9.js", "assets/js/my-36f8d567.js", "assets/js/bdt-68275706.js", "assets/js/zh-995c5bf9.js", "assets/js/pak-1f61612e.js", "assets/js/ar-fcc22680.js", "assets/css/page-activity-2987852d.css"]))
          , c = ki( () => hi( () => import("./messageGarbage-e95820e9.js"), ["assets/js/messageGarbage-e95820e9.js", "assets/js/modules-9638c0ec.js", "assets/css/modules-b642e9bc.css", "assets/js/page-activity-f7f1ca5a.js", "assets/js/native/index-0cf0be38.js", "assets/js/en-659e4950.js", "assets/js/rus-f020166a.js", "assets/js/vi-df1c6473.js", "assets/js/id-1122fea2.js", "assets/js/hd-134ebb62.js", "assets/js/tha-63c28cd3.js", "assets/js/md-1aba351c.js", "assets/js/bra-5f0975e9.js", "assets/js/my-36f8d567.js", "assets/js/bdt-68275706.js", "assets/js/zh-995c5bf9.js", "assets/js/pak-1f61612e.js", "assets/js/ar-fcc22680.js", "assets/css/page-activity-2987852d.css"]));
        function u() {
            l.back()
        }
        function p() {
            aa({
                title: i("warning"),
                message: i("warningTxt1")
            }).then( () => {
                dn({
                    messageID: g.value.messageID,
                    state: 2
                }),
                l.back()
            }
            )
        }
        return Lt(async () => {
            g.value = o.getMessagesDetail,
            g.value.state !== 1 && (await dn({
                messageID: g.value.messageID,
                state: 1
            }),
            o.setMessageDetail({
                ...g.value,
                state: 1
            }))
        }
        ),
        (r, b) => {
            const _ = W("NavBar");
            return n(),
            a("div", VS, [C(_, {
                "left-arrow": "",
                onClickLeft: u,
                title: d(i)("notificationDetails")
            }, null, 8, ["title"]), t("div", US, [t("div", KS, [t("div", null, [t("div", null, [(n(),
            J(He(d(m)))), t("span", null, e(g.value.title), 1)]), t("span", null, e(g.value.addTime), 1)]), (n(),
            J(He(d(c)), {
                onClick: p
            }))]), t("div", XS, e(g.value.messages), 1)])])
        }
    }
});
const ZS = V(QS, [["__scopeId", "data-v-e5380132"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/home/Messages/MessageDetail/index.vue"]])
  , RG = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: ZS
}, Symbol.toStringTag, {
    value: "Module"
}))
  , YS = {
    class: "dialog__container",
    role: "dialog",
    tabindex: "0"
}
  , JS = {
    class: "dialog__container-img"
}
  , tR = {
    alt: ""
}
  , eR = {
    class: "dialog__container-title"
}
  , iR = {
    class: "dialog__container-content"
}
  , nR = {
    class: "dialog__container-footer"
}
  , aR = F({
    __name: "HomeDialog",
    props: {
        show: {
            type: Boolean,
            default: !1
        },
        title: {
            type: String,
            default: ""
        },
        confirmText: {
            type: String,
            default: "comfirm"
        },
        showCancelBtn: {
            type: Boolean,
            default: !0
        },
        cancelText: {
            type: String,
            default: "cancel"
        },
        clickOutSide: {
            type: Boolean,
            default: !1
        },
        pathname: {
            type: String,
            default: "public"
        },
        picname: {
            type: String,
            default: "superjackpotHome"
        }
    },
    emits: ["update:show", "confirm"],
    setup(s, {emit: i}) {
        const o = s
          , {t: l} = gt();
        At( () => o.show, c => {
            c ? window.addEventListener("touchmove", m, {
                passive: !1
            }) : window.removeEventListener("touchmove", m)
        }
        );
        function g(c) {
            o.clickOutSide && i("update:show", !1)
        }
        const m = c => {
            o.show && c.preventDefault()
        }
        ;
        return (c, u) => {
            const p = Dt("lazy");
            return n(),
            a("div", {
                class: B(["dialog", {
                    active: s.show,
                    inactive: !s.show
                }])
            }, [t("div", YS, [t("div", JS, [ke(c.$slots, "header", {}, () => [dt(t("img", tR, null, 512), [[p, d(Xt)(s.pathname, s.picname)]])], !0)]), t("div", eR, [ke(c.$slots, "title", {}, () => [t("h1", null, e(d(l)(s.title)), 1)], !0)]), t("div", iR, [ke(c.$slots, "content", {}, void 0, !0)]), t("div", nR, [ke(c.$slots, "footer", {}, () => [s.showCancelBtn ? (n(),
            a("button", {
                key: 0,
                onClick: u[0] || (u[0] = () => {
                    i("update:show", !1)
                }
                )
            }, e(c.$t(s.cancelText)), 1)) : $("v-if", !0), t("button", {
                onClick: u[1] || (u[1] = () => {
                    i("confirm")
                }
                )
            }, e(c.$t(s.confirmText)), 1)], !0)])]), t("div", {
                class: "dialog__outside",
                onClick: g
            })], 2)
        }
    }
});
const oR = V(aR, [["__scopeId", "data-v-c0caae78"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/common/HomeDialog.vue"]]);
const sR = {}
  , lR = {
    class: "point point-flicker"
};
function cR(s, i) {
    return n(),
    a("div", lR)
}
const rR = V(sR, [["render", cR], ["__scopeId", "data-v-c10b67fb"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/common/Point.vue"]])
  , uR = {
    class: "swiper_box"
}
  , dR = ["onClick"]
  , pR = {
    key: 0,
    class: "swiper-button"
}
  , gR = F({
    __name: "index",
    props: {
        isShowButton: {
            type: Boolean,
            default: !1
        }
    },
    setup(s) {
        const {getBannerApi: i, getBanner: o} = pe()
          , l = h(0)
          , g = [jo]
          , m = u => {
            u.activeIndex >= o.value.length ? l.value = u.activeIndex - o.value.length : l.value = u.activeIndex
        }
          , c = u => {
            u && (window.location.href = u)
        }
        ;
        return Lt(async () => {
            await i()
        }
        ),
        (u, p) => {
            const r = Dt("lazy");
            return n(),
            a("div", uR, [C(d(qo), {
                class: "my-swipe",
                "slides-per-view": 1,
                "space-between": 20,
                onSlideChange: m,
                autoplay: {
                    delay: 5e3,
                    disableOnInteraction: !1
                },
                modules: g,
                loop: !0
            }, {
                default: P( () => [(n(!0),
                a(S, null, G(d(o), (b, _) => (n(),
                J(d(Eo), {
                    key: _
                }, {
                    default: P( () => [dt(t("img", {
                        onClick: w => c(b.url)
                    }, null, 8, dR), [[r, b.bannerUrl]])]),
                    _: 2
                }, 1024))), 128))]),
                _: 1
            }), d(o).length > 1 && s.isShowButton ? (n(),
            a("div", pR, [(n(!0),
            a(S, null, G(d(o).length, b => (n(),
            a("span", {
                key: b,
                class: B({
                    active: l.value === b - 1
                })
            }, null, 2))), 128))])) : $("v-if", !0)])
        }
    }
});
const bR = V(gR, [["__scopeId", "data-v-3ad7aed7"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/Swiper/index.vue"]])
  , mR = {
    class: "home_menu"
}
  , _R = ["onClick"]
  , vR = F({
    __name: "index",
    props: {
        currentMenu: {
            type: String,
            required: !0
        },
        currentTitle: {
            type: String,
            required: !0
        }
    },
    emits: ["changeMenu", "update:currentMenu", "update:currentTitle"],
    setup(s, {emit: i}) {
        const o = s
          , l = Et([])
          , {t: g} = gt()
          , m = un()
          , c = (p, r) => {
            i("update:currentMenu", p.key),
            i("changeMenu", p.key),
            i("update:currentTitle", p.title),
            sessionStorage.setItem("currentMenu", p.key)
        }
        ;
        return (async () => {
            let p = m.getHomeMenu;
            if (!p || p.length < 1) {
                const r = await nt(ca());
                r && r.data.forEach(b => {
                    b.state === 1 && b.categoryCode !== "BigAward" && l.push({
                        title: g("code" + b.typeNameCode),
                        img: b.categoryImg,
                        key: b.categoryCode.toLocaleLowerCase()
                    })
                }
                ),
                m.setHomeMenu(l)
            } else
                l.push(...p);
            o.currentMenu.length < 1 && (c(l[0]),
            i("update:currentMenu", l[0].key),
            i("update:currentTitle", l[0].title)),
            o.currentMenu && !o.currentTitle && l.forEach(r => {
                r.key === o.currentMenu && i("update:currentTitle", r.title)
            }
            )
        }
        )(),
        (p, r) => {
            const b = Dt("lazy");
            return n(),
            a("div", mR, [(n(!0),
            a(S, null, G(l, (_, w) => (n(),
            a("div", {
                class: B(["menu_item", {
                    active: p.currentMenu === _.key
                }]),
                key: _.key,
                onClick: T => c(_)
            }, [dt(t("img", {
                class: B(_.key),
                alt: ""
            }, null, 2), [[b, _.img]]), t("span", null, e(_.title), 1)], 10, _R))), 128))])
        }
    }
});
const kR = V(vR, [["__scopeId", "data-v-ac110be8"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/OrangeHome/HomeMenu/index.vue"]])
  , hR = {
    class: "hot_container"
}
  , fR = {
    class: "popular"
}
  , yR = {
    class: "list"
}
  , $R = ["onClick"]
  , wR = {
    class: "item"
}
  , TR = ["src", "data-img"]
  , CR = {
    key: 0,
    class: "win-odds"
}
  , LR = F({
    __name: "HotGameItem",
    props: {
        clicksTopList: {
            type: Array,
            required: !0
        }
    },
    emits: ["onItemClick"],
    setup(s, {emit: i}) {
        const o = Pe()
          , l = g => {
            i("onItemClick", g)
        }
        ;
        return (g, m) => (n(),
        a("div", hR, [t("div", fR, [t("div", yR, [(n(!0),
        a(S, null, G(g.clicksTopList, c => (n(),
        a("div", {
            key: c.vendorId,
            onClick: u => l(c)
        }, [t("div", wR, [t("img", {
            src: c.imgUrl,
            alt: "",
            "data-img": d(Xt)("images", "avatar")
        }, null, 8, TR)]), d(o).isShowHotGameWinOdds ? (n(),
        a("div", CR, [t("span", null, e(g.$t("winOdds")), 1), t("span", null, e(c.winOdds) + "%", 1), t("div", {
            class: "win-p",
            style: le({
                width: `${Math.min(c.winOdds, 100)}%`
            })
        }, null, 4)])) : $("v-if", !0)], 8, $R))), 128))])])]))
    }
});
const NR = V(LR, [["__scopeId", "data-v-44261ece"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/OrangeHome/GameList/HotGameItem.vue"]])
  , zR = {
    class: "other_game"
}
  , IR = ["onClick"]
  , xR = F({
    __name: "OtherGameItem",
    props: {
        gameList: {
            type: Array,
            required: !0
        },
        currentMenu: {
            type: String,
            required: !0
        },
        info: {
            type: null,
            required: !0
        }
    },
    emits: ["onItemClick"],
    setup(s, {emit: i}) {
        const o = s
          , l = m => m.vendorImg
          , g = m => {
            i("onItemClick", m, o.currentMenu)
        }
        ;
        return (m, c) => {
            const u = Dt("lazy");
            return n(),
            a("div", zR, [(n(!0),
            a(S, null, G(m.gameList, p => dt((n(),
            a("img", {
                key: p.slotsTypeID,
                alt: "",
                class: "other_img",
                onClick: r => g(p)
            }, null, 8, IR)), [[u, l(p)]])), 128))])
        }
    }
});
const SR = V(xR, [["__scopeId", "data-v-4cc7aa77"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/OrangeHome/GameList/OtherGameItem.vue"]])
  , RR = {
    class: "fish_game"
}
  , BR = ["onClick"]
  , GR = ["src", "data-img"]
  , AR = F({
    __name: "Fish",
    props: {
        gameList: {
            type: Array,
            required: !0
        }
    },
    emits: ["onItemClick"],
    setup(s, {emit: i}) {
        const o = l => {
            i("onItemClick", l)
        }
        ;
        return (l, g) => (n(),
        a("div", RR, [(n(!0),
        a(S, null, G(l.gameList, m => (n(),
        a("div", {
            class: "item",
            key: m.vendorId,
            onClick: c => o(m)
        }, [t("img", {
            src: m.img,
            alt: "",
            "data-img": d(Xt)("images", "avatar")
        }, null, 8, GR)], 8, BR))), 128))]))
    }
});
const MR = V(AR, [["__scopeId", "data-v-53389fc7"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/OrangeHome/GameList/Fish.vue"]])
  , PR = {
    class: "flash_game"
}
  , DR = ["onClick"]
  , OR = F({
    __name: "Flash",
    props: {
        gameList: {
            type: Array,
            required: !0
        }
    },
    emits: ["onItemClick"],
    setup(s, {emit: i}) {
        const o = l => {
            i("onItemClick", l)
        }
        ;
        return (l, g) => {
            const m = Dt("lazy");
            return n(),
            a("div", PR, [(n(!0),
            a(S, null, G(l.gameList, c => dt((n(),
            a("img", {
                class: "gameImg",
                key: c.vendorId,
                onClick: u => o(c)
            }, null, 8, DR)), [[m, c.img]])), 128))])
        }
    }
});
const ER = V(OR, [["__scopeId", "data-v-5cebd863"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/OrangeHome/GameList/Flash.vue"]])
  , qR = {
    class: "lottery_container"
}
  , jR = ["onClick"]
  , HR = {
    class: "lottery"
}
  , WR = ["src"]
  , FR = {
    class: "lottery_logo"
}
  , VR = {
    class: "win_info"
}
  , UR = ["id"]
  , KR = {
    class: "win_item"
}
  , XR = {
    class: "left"
}
  , QR = ["data-img"]
  , ZR = {
    class: "right"
}
  , YR = F({
    __name: "LotterySlotItem",
    props: {
        gameList: {
            type: Array,
            required: !0
        }
    },
    setup(s) {
        const i = s
          , {t: o} = gt()
          , l = ct()
          , g = Et({
            "Win Go": [],
            "K3 Lotre": [],
            XOSO: [],
            "5D Lotre": [],
            "Trx Win": []
        })
          , m = h(null)
          , c = Q( () => _.winInfoList)
          , u = v => {
            if (v) {
                let k = v;
                switch (k) {
                case "Trx Win Go":
                    k = "Trx Win";
                    break;
                case "K3":
                case "5D":
                    k = k + " Lotre";
                    break;
                case "FXOSO":
                    k = o("FXOSO");
                default:
                    k = k
                }
                return k
            }
            return ""
        }
          , p = v => {
            if (v) {
                let k = [];
                switch (v) {
                case "Win Go":
                case "Trx Win Go":
                    k = [o("lotteryHintStr1"), o("lotteryHintStr2")];
                    break;
                case "5D":
                case "K3":
                    k = [o("lotteryHintStr3"), o("lotteryHintStr4")];
                    break;
                case "XOSO":
                case "FXOSO":
                    k = [o("lotteryHintStr5"), o("lotteryHintStr6")];
                    break;
                case "Bingo18":
                    k = [o("lotteryHintStr5"), o("lotteryHintStr6")];
                    break;
                case "4D":
                    k = [o("lotteryHintStr7"), o("lotteryHintStr6")];
                    break;
                default:
                    k = []
                }
                return k
            }
            return ""
        }
          , r = [{
            value: 1,
            path: "WinGo"
        }, {
            value: 3,
            path: "5D"
        }, {
            value: 2,
            path: "K3"
        }, {
            value: 4,
            path: "WinTrx"
        }, {
            value: 5,
            path: "XoSo"
        }, {
            value: 6,
            path: "XoSo"
        }, {
            value: 7,
            path: "Binguo"
        }, {
            value: 8,
            path: "4D"
        }]
          , b = v => {
            l.push({
                name: "AllLotteryGames-" + r[r.findIndex(k => k.value === v.id)].path,
                query: {
                    id: v.id
                }
            })
        }
          , {homeState: _, isAlowGame: w} = pe()
          , T = async () => {
            const v = _.winInfoList;
            g["5D Lotre"] = v.filter(k => k.showType == 7),
            g["K3 Lotre"] = v.filter(k => k.showType == 9),
            g.XOSO = v.filter(k => k.showType == 10),
            g["Trx Win"] = v.filter(k => k.showType == 8),
            g["Win Go"] = v.filter(k => k.showType == 11),
            setTimeout( () => {
                N()
            }
            , 1e3)
        }
          , N = () => {
            let v = {};
            Jt( () => {
                Object.keys(g).map(k => {
                    let y = i.gameList.find(z => u(z.categoryCode) === k)
                      , f = document.getElementById((y == null ? void 0 : y.id) + "win");
                    g[k].length > 0 && f && (v[k] = pn(f),
                    na(v[k].value))
                }
                ),
                m.value ? clearInterval(m.value) : m.value = setInterval( () => {
                    Object.values(g).forEach(k => {
                        k.length > 0 && k.unshift(k.pop())
                    }
                    )
                }
                , 3e3)
            }
            )
        }
        ;
        return Si( () => {
            m.value && clearInterval(m.value)
        }
        ),
        At([ () => i.gameList, () => c.value], ([v,k]) => {
            v.length > 0 && T()
        }
        , {
            immediate: !0
        }),
        (v, k) => {
            const y = Dt("lazy");
            return n(),
            a("div", qR, [(n(!0),
            a(S, null, G(v.gameList, f => dt((n(),
            a("div", {
                class: "lotterySlotItem",
                key: f.id,
                onClick: z => d(w)(f, b)
            }, [t("div", HR, [t("img", {
                src: d(Ft)("home/lottery", f.categoryCode + "_bg"),
                alt: "",
                class: "lottery_bg"
            }, null, 8, WR), dt(t("img", FR, null, 512), [[y, f.categoryImg]]), t("span", null, e(u(f.categoryCode)), 1), t("h4", null, [t("div", null, e(p(f.categoryCode)[0]), 1), t("div", null, e(p(f.categoryCode)[1]), 1)])]), t("div", VR, [t("div", {
                id: f.id + "win"
            }, [(n(!0),
            a(S, null, G(g[u(f.categoryCode)], z => (n(),
            a("div", KR, [t("div", XR, [dt(t("img", {
                alt: "",
                "data-img": d(Ft)("home", "avatar")
            }, null, 8, QR), [[y, z.userPhoto]]), t("span", null, e(z.nickName), 1)]), t("div", ZR, e(v.$t("winningAmount")) + e(d(Ct)(z.amount || 0)), 1)]))), 256))], 8, UR)])], 8, jR)), [[Yt, f.state == 1]])), 128))])
        }
    }
});
const JR = V(YR, [["__scopeId", "data-v-6fc57c23"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/commonHome/LotterySlotItem.vue"]])
  , tB = {
    alt: ""
}
  , eB = F({
    __name: "ElectronicWinRate",
    setup(s) {
        const i = Pe()
          , o = Q( () => i.winRate.electronicWinRateImgUrl || "")
          , l = Q( () => !!(i.winRate.isShowElectronicWinRateExternalLink && o.value))
          , g = () => {
            i.winRate.electronicWinRateExternalLink && window.open(i.winRate.electronicWinRateExternalLink)
        }
        ;
        return (m, c) => {
            const u = Dt("lazy");
            return l.value ? (n(),
            a("div", {
                key: 0,
                class: "WinRate",
                onClick: g
            }, [dt(t("img", tB, null, 512), [[u, o.value]])])) : $("v-if", !0)
        }
    }
});
const iB = V(eB, [["__scopeId", "data-v-73fb28e7"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/OrangeHome/GameList/ElectronicWinRate.vue"]])
  , Ci = s => (Nt("data-v-045c911a"),
s = s(),
zt(),
s)
  , nB = {
    class: "home_container"
}
  , aB = Ci( () => t("div", {
    class: "skeleton_hot"
}, [t("div"), t("div"), t("div"), t("div"), t("div"), t("div"), t("div"), t("div"), t("div")], -1))
  , oB = Ci( () => t("div", {
    class: "skeleton_other"
}, [t("div"), t("div"), t("div"), t("div")], -1))
  , sB = Ci( () => t("div", {
    class: "skeleton_hot"
}, [t("div"), t("div"), t("div"), t("div"), t("div"), t("div"), t("div"), t("div"), t("div")], -1))
  , lB = Ci( () => t("div", {
    class: "skeleton_flash"
}, [t("div"), t("div"), t("div"), t("div"), t("div"), t("div"), t("div"), t("div"), t("div")], -1))
  , cB = Ci( () => t("div", {
    class: "skeleton_lottery"
}, [t("div", null, [t("div")]), t("div")], -1))
  , rB = F({
    __name: "index",
    props: {
        currentMenu: {
            type: String,
            required: !0
        },
        currentTitle: {
            type: String,
            required: !0
        }
    },
    setup(s) {
        const {onItemClick: i, getAllGame: o, homeState: l} = pe()
          , g = Q( () => l.allGameList)
          , m = ct();
        gt();
        const c = h(!1)
          , u = h(!1)
          , p = Et({
            slot: [],
            video: [],
            chess: [],
            sport: [],
            popular: {
                platformList: [],
                clicksTopList: []
            },
            fish: [],
            flash: [],
            lottery: []
        })
          , r = h()
          , b = v => ["slot", "video", "chess", "sport"].includes(v)
          , _ = async () => {
            await o();
            const v = ka(g.value);
            Object.keys(p).forEach(k => {
                k === "popular" ? p.popular = {
                    platformList: v[k].platformList,
                    clicksTopList: v[k].clicksTopList
                } : p[k] = v[k]
            }
            ),
            sessionStorage.setItem("gameList", JSON.stringify(p)),
            setTimeout( () => {
                c.value = !1
            }
            , 0)
        }
          , w = async (v, k) => {
            ["chess", "slot"].includes(k) ? (sessionStorage.setItem("slotGamesList", JSON.stringify(g.value[k])),
            sessionStorage.setItem("gameType", JSON.stringify(k)),
            sessionStorage.setItem("clickedItem", JSON.stringify(v)),
            m.push({
                name: "AllOnlineGames"
            })) : i(v)
        }
          , T = () => {
            m.push({
                name: "FishGames"
            })
        }
        ;
        return ( () => {
            c.value = !0,
            _(),
            r.value = sessionStorage.getItem("homeMenu"),
            r.value === "lottery" && (u.value = !0)
        }
        )(),
        (v, k) => {
            const y = W("van-skeleton");
            return n(),
            a("div", nB, [t("div", {
                class: "title",
                style: le({
                    backgroundImage: `url(${d(Xt)("game_title_icon", v.currentMenu)})`
                })
            }, e(v.currentTitle), 5), $(" 热门 "), v.currentMenu === "popular" ? (n(),
            J(y, {
                key: 0,
                loading: c.value
            }, {
                template: P( () => [aB]),
                default: P( () => [C(NR, {
                    clicksTopList: p.popular.clicksTopList,
                    onOnItemClick: d(i)
                }, null, 8, ["clicksTopList", "onOnItemClick"])]),
                _: 1
            }, 8, ["loading"])) : $("v-if", !0), $(" 电子、体育、棋牌、视讯 "), b(v.currentMenu) ? (n(),
            J(y, {
                key: 1,
                loading: c.value
            }, {
                template: P( () => [oB]),
                default: P( () => [["slot"].includes(v.currentMenu) ? (n(),
                J(iB, {
                    key: 0
                })) : $("v-if", !0), C(SR, {
                    gameList: p[v.currentMenu],
                    currentMenu: v.currentMenu,
                    onOnItemClick: w
                }, null, 8, ["gameList", "currentMenu"])]),
                _: 1
            }, 8, ["loading"])) : $("v-if", !0), $(" 捕鱼 "), v.currentMenu === "fish" ? (n(),
            J(y, {
                key: 2,
                loading: c.value
            }, {
                template: P( () => [sB]),
                default: P( () => [C(MR, {
                    gameList: p.fish.slice(0, 15),
                    onOnItemClick: d(i)
                }, null, 8, ["gameList", "onOnItemClick"])]),
                _: 1
            }, 8, ["loading"])) : $("v-if", !0), $(" 小游戏 "), v.currentMenu === "flash" ? (n(),
            J(y, {
                key: 3,
                loading: c.value
            }, {
                template: P( () => [lB]),
                default: P( () => [C(ER, {
                    gameList: p.flash,
                    currentMenu: v.currentMenu,
                    onOnItemClick: d(i)
                }, null, 8, ["gameList", "currentMenu", "onOnItemClick"])]),
                _: 1
            }, 8, ["loading"])) : $("v-if", !0), $(" 彩票 "), v.currentMenu === "lottery" ? (n(),
            J(y, {
                key: 4,
                loading: u.value
            }, {
                template: P( () => [cB]),
                default: P( () => [(n(),
                J(Ue, null, [v.currentMenu === "lottery" ? (n(),
                J(JR, {
                    key: 0,
                    gameList: p.lottery
                }, null, 8, ["gameList"])) : $("v-if", !0)], 1024))]),
                _: 1
            }, 8, ["loading"])) : $("v-if", !0), v.currentMenu === "fish" ? (n(),
            a("div", {
                key: 5,
                class: "all_btn",
                onClick: T
            }, e(v.$t("viewAll")), 1)) : $("v-if", !0)])
        }
    }
});
const uB = V(rB, [["__scopeId", "data-v-045c911a"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/OrangeHome/HomeContainer/index.vue"]])
  , dB = F({
    __name: "Turntable",
    setup(s) {
        const i = ct()
          , o = h()
          , l = Pe();
        function g() {
            l.getBigTurntableLink && window.open(l.getBigTurntableLink)
        }
        return (m, c) => (n(),
        a(S, null, [d(l).getOpenTurntable ? (n(),
        a("div", {
            key: 0,
            class: B(["turntable-lottery trntableIcon2", {
                "lottery-bottom": d(l).getBigTurntableLink
            }]),
            onClick: c[0] || (c[0] = u => d(i).push({
                name: "Turntable"
            }))
        }, null, 2)) : $("v-if", !0), d(l).getBigTurntableLink ? (n(),
        a("div", {
            key: 1,
            class: "turntable turntableIcon1",
            onClick: g,
            ref_key: "turntableId",
            ref: o
        }, null, 512)) : $("v-if", !0)], 64))
    }
});
const pB = V(dB, [["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/common/Turntable.vue"]])
  , gB = s => (Nt("data-v-b3bd7e49"),
s = s(),
zt(),
s)
  , bB = gB( () => t("svg", {
    class: "line",
    width: "1",
    height: "60",
    viewBox: "0 0 1 60",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}, [t("line", {
    x1: "0.5",
    x2: "0.5",
    y2: "60",
    stroke: "white"
})], -1))
  , mB = ["src"]
  , _B = {
    class: "text"
}
  , vB = F({
    __name: "DownloadPWA",
    setup(s) {
        const i = Ho("show-pwa-download", !0)
          , {t: o} = gt()
          , l = Pe()
          , {onDown: g} = pe()
          , {isShowDwa: m} = js();
        return (c, u) => {
            const p = W("van-icon");
            return d(m) ? (n(),
            a("div", {
                key: 0,
                class: "btn pwa-btn",
                onClick: u[1] || (u[1] = (...r) => d(g) && d(g)(...r))
            }, [bB, C(p, {
                class: "close",
                name: "close",
                onClick: u[0] || (u[0] = ne(r => i.value = !1, ["stop"]))
            }), t("img", {
                class: "icon",
                src: d(l).getWebIco
            }, null, 8, mB), t("div", _B, e(d(o)("addToDesktop")), 1)])) : $("v-if", !0)
        }
    }
});
const kB = V(vB, [["__scopeId", "data-v-b3bd7e49"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/common/DownloadPWA.vue"]])
  , hB = s => (Nt("data-v-84514e8e"),
s = s(),
zt(),
s)
  , fB = {
    class: "dailyProfitRank"
}
  , yB = {
    class: "title"
}
  , $B = hB( () => t("b", null, null, -1))
  , wB = {
    class: "dailyProfitRank__content"
}
  , TB = {
    class: "dailyProfitRank__content-topThree"
}
  , CB = ["data-img"]
  , LB = ["data-img"]
  , NB = {
    class: "dailyProfitRank__content-list"
}
  , zB = {
    class: "left-rank"
}
  , IB = ["data-img"]
  , xB = ["data-img"]
  , SB = {
    class: "middle-name"
}
  , RB = {
    class: "right-box"
}
  , BB = F({
    __name: "index",
    setup(s) {
        const {t: i} = gt()
          , {homeState: o} = pe()
          , l = {
            nickName: i("noData"),
            userPhoto: "",
            price: 0,
            time: "",
            typeName: ""
        };
        At( () => o.rankList, c => {
            g.value.splice(0, c.length, ...c.sort( (u, p) => p.price - u.price).slice(0, 3)),
            m.value.splice(0, c.length, ...c.sort( (u, p) => p.price - u.price).slice(3, 10))
        }
        );
        const g = h([l, l, l])
          , m = h([]);
        return (c, u) => {
            const p = Dt("lazy");
            return n(),
            a("div", fB, [t("div", yB, [$B, E(e(c.$t("earningsRankingToday")), 1)]), t("div", wB, [t("div", TB, [(n(!0),
            a(S, null, G(g.value, (r, b) => (n(),
            a("div", {
                class: "dailyProfitRank__content-topThree__item",
                key: b,
                style: le({
                    order: b === 0 ? 2 : b === 2 ? 3 : 1,
                    top: b === 0 ? "-45px" : "-30px"
                })
            }, [t("div", {
                style: le({
                    background: `url(${d(Ft)("images/DailyProfitRank", `border${b + 1}`)}) no-repeat center center / 100% 100%`
                })
            }, [r.userPhoto.length > 2 ? dt((n(),
            a("img", {
                key: 0,
                "data-img": d(Ft)("home", "avatar")
            }, null, 8, CB)), [[p, r.userPhoto]]) : dt((n(),
            a("img", {
                key: 1,
                "data-img": d(Ft)("home", "avatar")
            }, null, 8, LB)), [[p, d(Ft)("main/Avatar", r.userPhoto)]])], 4), t("div", null, [dt(t("img", null, null, 512), [[p, d(Ft)("images/DailyProfitRank", `crown${b + 1}`)]]), dt(t("img", null, null, 512), [[p, d(Ft)("images/DailyProfitRank", `place${b + 1}`)]])]), t("span", null, e(d(rn)(r.nickName)), 1), t("span", null, e(d(Ct)(r.price)), 1)], 4))), 128))]), t("div", NB, [(n(!0),
            a(S, null, G(m.value, (r, b) => (n(),
            a("div", {
                class: "dailyProfitRank__content-list__item",
                key: b
            }, [t("span", zB, e(b + 4), 1), r.userPhoto.length > 2 ? dt((n(),
            a("img", {
                key: 0,
                "data-img": d(Ft)("home", "avatar")
            }, null, 8, IB)), [[p, r.userPhoto]]) : dt((n(),
            a("img", {
                key: 1,
                "data-img": d(Ft)("home", "avatar")
            }, null, 8, xB)), [[p, d(Ft)("main/Avatar", r.userPhoto)]]), t("span", SB, e(d(rn)(r.nickName)), 1), $(' <span class="middle-name">{{ formatString(item.nickName, 10) }}</span> '), t("span", RB, e(d(Ct)(r.price)), 1)]))), 128))])])])
        }
    }
});
const GB = V(BB, [["__scopeId", "data-v-84514e8e"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Home/DailyProfitRank/index.vue"]])
  , AB = {
    id: "home",
    class: "orange_content"
}
  , MB = ["src"]
  , PB = {
    class: "content_right"
}
  , DB = {
    class: "promptHeader"
}
  , OB = ["innerHTML"]
  , EB = {
    class: "Laundry-Con"
}
  , qB = {
    class: "Laundry-Con_tip"
}
  , jB = {
    class: "Landty-Con-tips"
}
  , HB = F({
    __name: "orangeHome",
    setup(s) {
        const {t: i} = gt()
          , o = ct()
          , {setLoading: l} = Bi()
          , {onDown: g, isAppDownload: m, isAppDownloadIcon: c, showChanglong: u, projectIcon: p, isRead: r, getMessagesData: b, showPWA: _} = pe()
          , {closeLaundry: w, closePrompt: T, store: N, promptContent: v} = Hs()
          , k = h(sessionStorage.getItem("currentMenu") || "")
          , y = h("");
        function f() {
            o.push({
                name: "Messages"
            })
        }
        l(!1);
        const z = () => {
            w(),
            o.push({
                name: "SuperJackpot"
            })
        }
        ;
        return Lt( () => {
            b(),
            l(!1)
        }
        ),
        (L, x) => {
            const I = W("svg-icon")
              , R = W("NavBar")
              , M = W("van-dialog");
            return n(),
            a("div", AB, [C(R, {
                backgroundColor: "var(--main_gradient-color)"
            }, {
                left: P( () => [t("img", {
                    src: d(p),
                    alt: ""
                }, null, 8, MB)]),
                right: P( () => [t("div", PB, [t("div", {
                    class: "message",
                    onClick: f
                }, [C(I, {
                    name: "notification"
                }), dt(C(rR, {
                    class: "point"
                }, null, 512), [[Yt, !d(r)]])]), d(m) ? (n(),
                J(I, {
                    key: 0,
                    onClick: ne(d(g), ["stop"]),
                    name: "down",
                    class: "down"
                }, null, 8, ["onClick"])) : $("v-if", !0)])]),
                _: 1
            }), $(" 头部轮播图 "), C(bR), $(" 滚动通知栏 "), C(wi, {
                key: "home",
                color: "red"
            }), C(kR, {
                currentMenu: k.value,
                "onUpdate:currentMenu": x[0] || (x[0] = A => k.value = A),
                currentTitle: y.value,
                "onUpdate:currentTitle": x[1] || (x[1] = A => y.value = A)
            }, null, 8, ["currentMenu", "currentTitle"]), C(uB, {
                currentMenu: k.value,
                currentTitle: y.value
            }, null, 8, ["currentMenu", "currentTitle"]), C(Ke), C(GB), $(" 长龙"), d(u) ? (n(),
            J(Ei, {
                key: 0
            })) : $("v-if", !0), $("下载PWA应用"), d(c) && d(_) ? (n(),
            J(kB, {
                key: 1
            })) : $("v-if", !0), C(pB), C(M, {
                show: d(N).prompt,
                "onUpdate:show": x[3] || (x[3] = A => d(N).prompt = A),
                showConfirmButton: !1
            }, {
                default: P( () => [t("div", DB, e(d(i)("prompt")), 1), t("div", {
                    class: "promptContent",
                    innerHTML: d(v)
                }, null, 8, OB), t("div", {
                    class: "promptBtn",
                    onClick: x[2] || (x[2] = (...A) => d(T) && d(T)(...A))
                }, e(d(i)("confirm")), 1)]),
                _: 1
            }, 8, ["show"]), C(oR, {
                show: d(N).laundry,
                "onUpdate:show": x[4] || (x[4] = A => d(N).laundry = A),
                onConfirm: z,
                "show-cancel-btn": !1,
                confirmText: "OK",
                title: d(i)("congratulations")
            }, {
                content: P( () => [t("div", EB, [t("div", qB, e(d(i)("getSuper")), 1), t("div", jB, e(d(i)("getRewards")), 1)])]),
                _: 1
            }, 8, ["show", "title"])])
        }
    }
});
const WB = V(HB, [["__scopeId", "data-v-43d073d6"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/home/other/orangeHome.vue"]])
  , BG = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: WB
}, Symbol.toStringTag, {
    value: "Module"
}));
export {mG as A, _G as B, Cd as C, oR as D, vG as E, cd as F, kG as G, hG as H, fG as I, yG as J, rd as K, $G as L, wG as M, ui as N, TG as O, CG as P, LG as Q, NG as R, zG as S, IG as T, xG as U, SG as V, RG as W, BG as X, Fs as a, KB as b, XB as c, QB as d, ZB as e, YB as f, JB as g, tG as h, UB as i, eG as j, iG as k, nG as l, aG as m, oG as n, sG as o, lG as p, cG as q, rG as r, uG as s, dG as t, Je as u, Ws as v, ld as w, pG as x, gG as y, bG as z};
