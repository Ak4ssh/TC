import {_ as E, a2 as D, j as i, l as e, a0 as t, a6 as u, a8 as p, o as a, P as G, ad as Ae, K as Q, r as S, J as K, A as F, a3 as ue, a7 as x, H as n, ae as oe, a1 as N, a4 as H, a5 as O, aa as ae, af as Z, ag as ee, q as z, ar as Ie, am as Me, I as ne, a9 as se, aO as Ye, aP as Ne, aJ as Be, aK as Pe, X as je, G as He, aQ as Oe, O as Ue, aB as xe, ak as Ee, Q as $e, F as pe} from "./modules-9638c0ec.js";
import {_ as V, r as ye, G as Ve, S as ie, cb as ze, cc as qe, $ as le, i as ve, M as fe, bq as Ge, cd as be, bv as ge, g as re, bt as he, ce as Fe, L as me, cf as Qe, bs as Xe, cg as We, ch as Je, O as _e, A as ke, ci as Ke, aY as Ze, m as et, cj as tt, by as J, ck as nt, cl as we, o as Y, bH as ot, cm as st, cn as at} from "./page-activity-f7f1ca5a.js";
import {N as it} from "./page-home-96052d05.js";
import {u as Ce} from "./page-login-fafd85ee.js";
window.getBuildInfo = function() {
    return {
        buildTime: "10/17/2024, 5:19:05 PM",
        branch: "origin/masterBranch/gamesass-2.24 commitId:a6695421420442101069f45a86b32452d0d38495"
    }
}
;
const lt = {
    class: "container"
}
  , rt = {
    class: "amount"
}
  , ct = {
    class: "amount_txt"
}
  , dt = {
    class: "tip"
}
  , _t = {
    class: "info_content"
}
  , ut = {
    class: "info"
}
  , vt = {
    class: "head"
}
  , mt = {
    class: "line1 r"
}
  , pt = {
    class: "line2 r"
}
  , ht = {
    class: "line3 r"
}
  , $t = {
    class: "line1 r"
}
  , yt = {
    class: "info"
}
  , ft = {
    class: "head u2"
}
  , bt = {
    class: "line1"
}
  , gt = {
    class: "line2"
}
  , kt = {
    class: "line3"
}
  , wt = {
    class: "line1"
}
  , Ct = E({
    __name: "index",
    props: {
        promotion: {
            type: null,
            required: !0
        }
    },
    setup(f) {
        return (o, b) => {
            var h, l;
            const r = D("svg-icon");
            return a(),
            i("div", lt, [e("div", rt, t(o.promotion.children_Lv_RebateAmount_Yesterday), 1), e("div", ct, t(o.$t("heroYesterdaytotalCommission")), 1), e("div", dt, t(o.$t("heroUpgradeLevel")), 1), e("div", _t, [e("div", ut, [e("div", vt, [u(r, {
                name: "directSubordinates"
            }), p(" " + t(o.$t("heroDirectSub")), 1)]), e("div", mt, [e("div", null, t(o.promotion.children_Lv_1_Count_Add_Yesterday), 1), p(" " + t(o.$t("registernum")), 1)]), e("div", pt, [e("div", null, t(o.promotion.children_Lv_1_RechargesSumCount), 1), p(" " + t(o.$t("rechargeNumber")), 1)]), e("div", ht, [e("div", null, t(o.promotion.children_Lv_1_RechargesSumAmount), 1), p(" " + t(o.$t("rechageAmount")), 1)]), e("div", $t, [e("div", null, t((h = o.promotion) == null ? void 0 : h.children_Lv_1_FirstRechargesCount), 1), p(" " + t(o.$t("firstRechargesC")), 1)])]), e("div", yt, [e("div", ft, [u(r, {
                name: "teamSubordinates"
            }), p(t(o.$t("heroTeamSub")), 1)]), e("div", bt, [e("div", null, t(o.promotion.children_Lv_Count_X_Add_Yesterday), 1), p(" " + t(o.$t("registernum")), 1)]), e("div", gt, [e("div", null, t(o.promotion.children_Lv_RechargesSumCount), 1), p(" " + t(o.$t("rechargeNumber")), 1)]), e("div", kt, [e("div", null, t(o.promotion.children_Lv_RechargesSumAmount), 1), p(" " + t(o.$t("rechageAmount")), 1)]), e("div", wt, [e("div", null, t((l = o.promotion) == null ? void 0 : l.children_Lv_FirstRechargesCount), 1), p(" " + t(o.$t("firstRechargesC")), 1)])])])])
        }
    }
});
const Tt = V(Ct, [["__scopeId", "data-v-6cf5705a"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Promotion/HeroSection/index.vue"]]);
function Te(f) {
    G();
    const o = (r, h) => {
        ye.options.routes.forEach(l => {
            l.name === r && (l.meta.keepAlive = h)
        }
        )
    }
      , b = (r, h) => {
        o(h, f.includes(r))
    }
    ;
    return Ae( (r, h) => {
        b(r.name, h.name)
    }
    ),
    {
        setKeepPage: b,
        updateRouterKeepAlive: o
    }
}
const Re = f => (Z("data-v-600663f7"),
f = f(),
ee(),
f)
  , Rt = {
    class: "content"
}
  , Dt = {
    class: "shareBtnContainer"
}
  , St = {
    class: "promote__cell"
}
  , Lt = ["onClick"]
  , At = {
    class: "label"
}
  , It = {
    class: "arrow"
}
  , Mt = {
    class: "commission"
}
  , Yt = {
    class: "commission__title"
}
  , Nt = {
    class: "commission__body"
}
  , Bt = Re( () => e("span", null, null, -1))
  , Pt = {
    class: "commission__body"
}
  , jt = Re( () => e("span", null, null, -1))
  , Ht = E({
    __name: "index",
    setup(f) {
        Te(["TeamReport"]);
        const {t: o} = Q()
          , r = Ve().getUserInfo
          , h = G()
          , l = S(!1)
          , v = ie()
          , $ = K( () => [!!(v.getIsPartnerReward && r.isPartnerReward === "1") && {
            title: o("TeamPartner"),
            name: "team_partner",
            path: "TeamPartner"
        }, {
            title: o("copyCode"),
            name: "copy_Code"
        }, {
            title: o("subordinateD"),
            name: "team_port",
            path: "TeamReport"
        }, {
            title: o("commissionDetail"),
            name: "commission",
            path: "MyCommission"
        }, {
            title: o("invitationRules"),
            name: "invite_reg",
            path: "PromotionRule"
        }, {
            title: o("poxyServer"),
            name: "server",
            path: "Server"
        }, {
            title: o("rebateRatio"),
            name: "rebateRatio",
            path: "RebateRatio"
        }].filter(Boolean));
        F( () => {
            c()
        }
        );
        const s = S({
            mylink: "http://55lottery.com/#/register?r_code=5284741404",
            aglink: "MTg5MCY9Jj0mZXlKaFoyVnVkRjlwWkNJNk5ERTBNRFI5Jj0mPSZUWUtQOFg%3d",
            mycode: "",
            children_Lv_1_Count: 0,
            children_Lv_Count_X: 0,
            children_Lv_1_Count_Add: 0,
            children_Lv_Count_X_Add: 0,
            children_Lv_1_Count_Add_Yesterday: 0,
            children_Lv_Count_X_Add_Yesterday: 0,
            children_Lv_RebateAmount_Yesterday: 0,
            children_Lv_1_RebateAmount_Yesterday: 0,
            children_Lv_RebateAmount_Week: 0,
            children_Lv_1_RebateAmount_X_Yesterday: 0,
            children_Lv_RebateAmount: 0
        });
        function g() {
            h.push({
                name: "PromotionShare"
            })
        }
        const R = m => {
            var k;
            m.icon === "copy_code" && le((k = s.value) == null ? void 0 : k.mycode),
            h.push({
                name: m.path
            })
        }
          , c = async () => {
            l.value = !0;
            try {
                const m = await ze();
                m && (s.value = m.data),
                m.msgCode === 13 && qe(m)
            } catch (m) {
                throw m
            } finally {
                l.value = !1
            }
        }
        ;
        function d() {
            h.push({
                name: "Subordinate"
            })
        }
        return (m, k) => {
            var y, U, q, L;
            const w = D("svg-icon")
              , B = D("NavBar")
              , C = D("van-icon")
              , I = ue("haspermission");
            return a(),
            i(H, null, [u(B, {
                class: "white",
                title: n(o)("titlePromotion")
            }, {
                right: x( () => [u(w, {
                    name: "subordinate",
                    onClick: d
                })]),
                _: 1
            }, 8, ["title"]), s.value ? (a(),
            oe(Tt, {
                key: 0,
                promotion: s.value
            }, null, 8, ["promotion"])) : N("v-if", !0), e("div", Rt, [e("div", Dt, [e("button", {
                class: "shareBtn",
                onClick: g
            }, t(n(o)("shareInvitationPoster")), 1)]), e("div", St, [(a(!0),
            i(H, null, O($.value, _ => {
                var T;
                return a(),
                i("div", {
                    class: "promote__cell-item",
                    onClick: A => R(_)
                }, [e("div", At, [u(w, {
                    name: `${_.name}`
                }, null, 8, ["name"]), e("span", null, t(_.title), 1)]), e("div", It, [_.title === n(o)("copyCode") ? (a(),
                i("span", {
                    key: 0,
                    onClick: k[0] || (k[0] = A => {
                        var P;
                        return n(le)((P = s.value) == null ? void 0 : P.mycode)
                    }
                    )
                }, [p(t((T = s.value) == null ? void 0 : T.mycode) + " ", 1), u(w, {
                    name: "copy"
                })])) : (a(),
                oe(C, {
                    key: 1,
                    name: "arrow",
                    size: "24",
                    color: "var(--text_color_L1)"
                }))])], 8, Lt)
            }
            ), 256))]), ae((a(),
            i("div", Mt, [e("div", Yt, [u(w, {
                name: "promotionData"
            }), e("span", null, t(n(o)("promotionData")), 1)]), e("div", Nt, [e("div", null, [e("span", null, t((y = s.value) == null ? void 0 : y.children_Lv_RebateAmount_Week), 1), e("span", null, t(n(o)("directGrossCommission")), 1)]), N("因越南代理需求，临时处理下这个问题，周一再统一处理"), Bt, e("div", null, [e("span", null, t((U = s.value) == null ? void 0 : U.children_Lv_RebateAmount), 1), e("span", null, t(n(o)("teamGrossCommission")), 1)])]), e("div", Pt, [e("div", null, [e("span", null, t((q = s.value) == null ? void 0 : q.children_Lv_1_Count), 1), e("span", null, t(n(o)("directSubordinate")), 1)]), N("因越南代理需求，临时处理下这个问题，周一再统一处理"), jt, e("div", null, [e("span", null, t((L = s.value) == null ? void 0 : L.children_Lv_Count_X), 1), e("span", null, t(n(o)("totalsubordinates")), 1)])])])), [[I, 20]]), N(" <PromoRank /> ")])], 64)
        }
    }
});
const Ot = V(Ht, [["__scopeId", "data-v-600663f7"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/promotion/index.vue"]])
  , Gi = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Ot
}, Symbol.toStringTag, {
    value: "Module"
}))
  , ce = f => (Z("data-v-2c426ecf"),
f = f(),
ee(),
f)
  , Ut = {
    class: "invitationDetail__container"
}
  , xt = {
    class: "invitationDetail__container-content"
}
  , Et = {
    class: "invitationDetail__container-content__item"
}
  , Vt = {
    class: "invitationDetail__container-content__item-body"
}
  , zt = ce( () => e("span", null, "64人", -1))
  , qt = ce( () => e("span", null, "888'888'88 ", -1))
  , Gt = ce( () => e("span", null, "888'888'88", -1))
  , Ft = ce( () => e("span", null, "5LV", -1))
  , Qt = {
    class: "btnExamine"
}
  , Xt = ["src"]
  , Wt = {
    class: "itemTop"
}
  , Jt = {
    class: "invitationDetail__container-betHistory"
}
  , Kt = {
    class: "canvas"
}
  , Zt = ["id"]
  , en = E({
    __name: "index",
    setup(f) {
        const o = [{
            title: "彩票返佣比例",
            list: [{
                title: "1级下级",
                spent: "35%"
            }, {
                title: "2级下级",
                spent: "35%"
            }, {
                title: "3级下级",
                spent: "35%"
            }, {
                title: "4级下级",
                spent: "35%"
            }, {
                title: "5级下级",
                spent: "35%"
            }, {
                title: "6级下级",
                spent: "35%"
            }]
        }, {
            title: "电子返佣比例",
            list: [{
                title: "1级下级",
                spent: "35%"
            }, {
                title: "2级下级",
                spent: "35%"
            }, {
                title: "3级下级",
                spent: "35%"
            }, {
                title: "4级下级",
                spent: "35%"
            }]
        }]
          , b = G();
        function r() {
            b.back()
        }
        F( () => {
            for (let l = 0; l < o.length; l++)
                h(o[l].list.length, l)
        }
        );
        const h = (l, v) => {
            const s = document.getElementById(`canvas${v}`).getContext("2d");
            let g = l - 1;
            s.beginPath(),
            s.strokeStyle = "#FF7172",
            s.moveTo(10, 28),
            s.setLineDash([1, 1]);
            let R = g * 3 + 32;
            s.lineTo(10, g * 28 + R),
            s.stroke()
        }
        ;
        return (l, v) => {
            const $ = D("NavBar")
              , s = D("svg-icon");
            return a(),
            i("div", Ut, [u($, {
                title: l.$t("details"),
                "left-arrow": "",
                onClickLeft: r
            }, null, 8, ["title"]), e("div", xt, [e("div", Et, [N(` <div class="invitationDetail__container-content__item-header">
                    <span>1级下级</span>
                    <span>1级</span>
                </div> `), e("div", Vt, [e("div", null, [e("span", null, t(l.$t("invitationMember")), 1), zt]), e("div", null, [e("span", null, t(l.$t("subBets")), 1), qt]), e("div", null, [e("span", null, t(l.$t("subRecharges")), 1), Gt]), e("div", null, [e("span", null, t(l.$t("betTime")), 1), Ft])])]), e("div", Qt, [e("button", null, t(l.$t("gradeRules")), 1)]), e("img", {
                src: n(ve)("main", "moonBar")
            }, null, 8, Xt)]), (a(),
            i(H, null, O(o, (g, R) => e("div", {
                key: R
            }, [e("div", Wt, t(g.title), 1), e("div", Jt, [e("div", Kt, [u(s, {
                name: "round"
            })]), e("canvas", {
                width: "20",
                height: "320",
                class: "icon_after",
                id: `canvas${R}`
            }, null, 8, Zt), (a(!0),
            i(H, null, O(g.list, (c, d) => (a(),
            i("div", {
                key: d
            }, [e("span", null, t(c.title), 1), e("div", null, t(c.spent), 1)]))), 128))])])), 64))])
        }
    }
});
const tn = V(en, [["__scopeId", "data-v-2c426ecf"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/promotion/CommissionDetail/index.vue"]])
  , Fi = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: tn
}, Symbol.toStringTag, {
    value: "Module"
}))
  , nn = {
    class: "ar-searchbar"
}
  , on = {
    class: "ar-searchbar-type"
}
  , sn = {
    key: 0,
    class: "myCommission__container-content"
}
  , an = {
    class: "myCommission__container-content__item-body"
}
  , ln = {
    class: "settle"
}
  , rn = {
    class: "time"
}
  , cn = {
    class: "sub"
}
  , dn = {
    class: "amount grey"
}
  , _n = {
    class: "amount grey"
}
  , un = {
    class: "amount orange fw"
}
  , vn = {
    class: "amount grey"
}
  , mn = E({
    __name: "index",
    setup(f) {
        const o = S(null)
          , b = G()
          , r = S()
          , {minDate: h, maxDate: l} = fe(-1)
          , v = z(l).startOf("day")
          , {key: $, value: s} = Ge()
          , g = S(v.format("YYYY-MM-DD"))
          , R = S(s)
          , c = S(!1)
          , d = S({
            date: v.format("YYYY-MM-DD HH:mm:ss")
        })
          , m = async ({selectedOptions: C}) => {
            c.value = !1,
            d.value.date = z(R.value.join("/")).startOf("day").format("YYYY-MM-DD HH:mm:ss");
            const [{value: I},{value: y},{value: U}] = C;
            g.value = ge(I, y, U),
            B()
        }
        ;
        function k() {
            b.back()
        }
        const w = ({selectedOptions: C}) => {
            c.value = !1
        }
          , B = async () => {
            try {
                const C = await be(d.value);
                r.value = C
            } catch {}
        }
        ;
        return F( () => {
            B()
        }
        ),
        (C, I) => {
            var T, A, P, X, te;
            const y = D("NavBar")
              , U = D("ArSelect")
              , q = D("van-sticky")
              , L = D("van-date-picker")
              , _ = D("van-popup");
            return a(),
            i("div", {
                class: "myCommission__container",
                ref_key: "containerRef",
                ref: o
            }, [u(y, {
                title: C.$t("commissionDetails"),
                "left-arrow": "",
                onClickLeft: k
            }, null, 8, ["title"]), u(q, {
                "offset-top": C.$u.TopHeight,
                container: o.value
            }, {
                default: x( () => [e("div", nn, [e("div", on, [u(U, {
                    onClickSelect: I[0] || (I[0] = M => c.value = !0),
                    selectName: g.value || C.$t("pickDate")
                }, null, 8, ["selectName"])])])]),
                _: 1
            }, 8, ["offset-top", "container"]), N(" 日期选择弹窗 "), u(_, {
                show: c.value,
                "onUpdate:show": I[2] || (I[2] = M => c.value = M),
                round: "",
                position: "bottom"
            }, {
                default: x( () => [u(L, {
                    modelValue: R.value,
                    "onUpdate:modelValue": I[1] || (I[1] = M => R.value = M),
                    title: C.$t("pickDate"),
                    onCancel: w,
                    onConfirm: m,
                    "min-date": n(h),
                    "max-date": n(l)
                }, null, 8, ["modelValue", "title", "min-date", "max-date"])]),
                _: 1
            }, 8, ["show"]), (T = r.value) != null && T.settlementTime ? (a(),
            i("div", sn, [e("div", {
                class: "myCommission__container-content__item",
                onClick: I[3] || (I[3] = M => n(b).push({
                    name: "MyCommission-MyCommissionDetail",
                    query: {
                        date: d.value.date
                    }
                }))
            }, [e("div", an, [e("p", ln, t(C.$t("settlementState")), 1), e("span", rn, t((A = r.value) == null ? void 0 : A.settlementTime), 1), e("p", cn, t(C.$t("tTommission")), 1), e("div", null, [e("span", null, t(C.$t("betPeople")), 1), e("span", dn, t((P = r.value) == null ? void 0 : P.children_LotteryAmount_Users) + " " + t(C.$t("people")), 1)]), e("div", null, [e("span", null, t(C.$t("betMoney")), 1), e("span", _n, t((X = r.value) == null ? void 0 : X.children_LotteryAmount), 1)]), N(` <div>
						<span>{{ $t('agencyGrade') }}</span>
						<span class="level">L{{ Promotion?.rebateAmount_Last }}</span>
					</div> `), e("div", null, [e("span", null, t(C.$t("commSettlement")), 1), e("span", un, t(r.value.rebateAmount_Last), 1)]), e("div", null, [e("span", null, t(C.$t("date")), 1), e("span", vn, t((te = r.value) == null ? void 0 : te.time), 1)])])])])) : N("v-if", !0)], 512)
        }
    }
});
const pn = V(mn, [["__scopeId", "data-v-5659d99c"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/promotion/MyCommission/index.vue"]])
  , Qi = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: pn
}, Symbol.toStringTag, {
    value: "Module"
}))
  , hn = {
    class: "searchbar-container"
}
  , $n = ["placeholder"]
  , yn = ["src"]
  , fn = E({
    __name: "index",
    props: {
        value: {
            type: String,
            required: !1
        },
        placeholder: {
            type: String,
            required: !1,
            default: Ie("searchStr")
        },
        getSearchIcon: {
            type: String,
            required: !1,
            default: re("promotion", "searchIcon1")
        },
        isShowClose: {
            type: Boolean,
            required: !1,
            default: !1
        }
    },
    emits: ["update:value", "handleSearch"],
    setup(f, {emit: o}) {
        const b = f
          , {t: r} = Q();
        r("search");
        const h = K({
            get() {
                return b.value || ""
            },
            set($) {
                o("update:value", $)
            }
        })
          , l = () => {
            o("handleSearch")
        }
          , v = () => {
            o("update:value", "")
        }
        ;
        return ($, s) => {
            const g = D("svg-icon");
            return a(),
            i("div", hn, [ae(e("input", {
                type: "text",
                "auto-complete": "new-password",
                autocomplete: "off",
                class: "searchbar-container__searchbar",
                placeholder: $.placeholder,
                "onUpdate:modelValue": s[0] || (s[0] = R => h.value = R),
                maxlength: "30"
            }, null, 8, $n), [[Me, h.value]]), $.isShowClose ? (a(),
            i("img", {
                key: 1,
                class: "clearIcon",
                src: n(ve)("wallet/withdraw", "clear"),
                onClick: v
            }, null, 8, yn)) : (a(),
            oe(g, {
                key: 0,
                class: "searchIcon",
                name: "searchBtn",
                onClick: l
            }))])
        }
    }
});
const De = V(fn, [["__scopeId", "data-v-c06f3394"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/SearchBar/index.vue"]])
  , bn = f => (Z("data-v-4e84c70a"),
f = f(),
ee(),
f)
  , gn = {
    class: "myInvitation__container"
}
  , kn = {
    class: "myInvitation__container-searchbar"
}
  , wn = {
    class: "myInvitation__container-content"
}
  , Cn = {
    class: "myInvitation__container-content__item-header"
}
  , Tn = {
    class: "myInvitation__container-content__item-body"
}
  , Rn = bn( () => e("span", null, "UID", -1))
  , Dn = E({
    __name: "index",
    setup(f) {
        const {t: o} = Q()
          , b = S(!1)
          , r = S(!1)
          , h = S()
          , {minDate: l, maxDate: v} = Qe()
          , $ = ne({
            startDate: z(l).format("YYYY-MM-DD HH:mm:ss"),
            endDate: z(v).format("YYYY-MM-DD HH:mm:ss"),
            lv: -1,
            myTemId: 0
        })
          , s = S([])
          , g = G()
          , R = S([])
          , c = S("")
          , d = S()
          , m = he.levelTypes.map(L => (L.value == -1 && (L.key = o(L.key)),
        L.key = o(L.key, [L.value]),
        L))
          , k = S(m[0])
          , w = S(!0);
        F( () => {
            B()
        }
        );
        const B = async () => {
            let _ = (await Fe()).typeList.filter(T => (T.typeName = o("code" + T.typeNameCode),
            T.type != 1 && T.type != 4 && T.type != 7));
            _.unshift({
                type: -1,
                typeName: o("all"),
                startTime: new Date(l),
                endTime: new Date(v)
            }),
            R.value = _
        }
          , C = async ({selectedOptions: L}) => {
            $.lv = L[0].value,
            k.value = L[0],
            r.value = !1,
            h.value.resetRefresh()
        }
          , I = L => {
            let _ = {
                ...L.selectedOptions[0]
            };
            d.value = _,
            _.type == -1 ? ($.startDate = z(_.startTime).format("YYYY-MM-DD HH:mm:ss"),
            $.endDate = z(_.endTime).format("YYYY-MM-DD HH:mm:ss")) : ($.startDate = _.startTime + "",
            $.endDate = _.endTime + ""),
            b.value = !1,
            h.value.resetRefresh()
        }
          , y = () => {
            c.value ? $.myTemId = Number(c.value) : $.myTemId = 0,
            h.value.resetRefresh()
        }
          , U = L => {}
        ;
        function q() {
            g.back()
        }
        return (L, _) => {
            var te;
            const T = D("NavBar")
              , A = D("ArSelect")
              , P = D("van-picker")
              , X = D("van-popup");
            return a(),
            i("div", gn, [u(T, {
                title: L.$t("myInvitation"),
                "left-arrow": "",
                onClickLeft: q
            }, null, 8, ["title"]), u(De, {
                placeholder: L.$t("searchSubUID"),
                value: c.value,
                "onUpdate:value": _[0] || (_[0] = M => c.value = M),
                onHandleSearch: y
            }, null, 8, ["placeholder", "value"]), e("div", kn, [u(A, {
                onClickSelect: _[1] || (_[1] = M => b.value = !b.value),
                selectName: ((te = d.value) == null ? void 0 : te.typeName) || L.$t("time")
            }, null, 8, ["selectName"]), u(A, {
                onClickSelect: _[2] || (_[2] = M => r.value = !r.value),
                selectName: k.value.key || L.$t("selectLevel")
            }, null, 8, ["selectName"])]), e("div", wn, [u(me, {
                list: s.value,
                "onUpdate:list": _[3] || (_[3] = M => s.value = M),
                "page-query": $,
                "onUpdate:pageQuery": _[4] || (_[4] = M => $ = M),
                api: n(We),
                distance: 100,
                ref_key: "listRef",
                ref: h,
                onPageChange: U,
                "is-auto-load": w.value
            }, {
                content: x( () => [(a(!0),
                i(H, null, O(s.value, (M, de) => (a(),
                i("div", {
                    class: "myInvitation__container-content__item",
                    key: de
                }, [e("div", Cn, [e("span", {
                    class: se({
                        inactive: M.userState !== 1
                    })
                }, t(L.$t(n(Xe)(n(he).StatusType, M.userState))), 3), e("span", null, t(M.lv) + t(L.$t("level")), 1)]), e("div", Tn, [e("div", null, [e("span", null, t(L.$t("nickName")), 1), e("span", null, t(M.nickName), 1)]), e("div", null, [Rn, e("span", null, t(M.userID), 1)]), e("div", null, [e("span", null, t(L.$t("betRebateAmount")), 1), e("span", null, t(M.rebateAmount), 1)])])]))), 128))]),
                _: 1
            }, 8, ["list", "page-query", "api", "is-auto-load"])]), u(X, {
                show: b.value,
                "onUpdate:show": _[6] || (_[6] = M => b.value = M),
                round: "",
                position: "bottom"
            }, {
                default: x( () => [u(P, {
                    "columns-field-names": {
                        text: "typeName",
                        value: "type",
                        children: "children"
                    },
                    columns: R.value,
                    onCancel: _[5] || (_[5] = M => b.value = !1),
                    onConfirm: I
                }, null, 8, ["columns"])]),
                _: 1
            }, 8, ["show"]), u(X, {
                show: r.value,
                "onUpdate:show": _[8] || (_[8] = M => r.value = M),
                round: "",
                position: "bottom"
            }, {
                default: x( () => [u(P, {
                    "columns-field-names": {
                        text: "key",
                        value: "value",
                        children: "children"
                    },
                    columns: n(m),
                    onCancel: _[7] || (_[7] = M => r.value = !1),
                    onConfirm: C
                }, null, 8, ["columns"])]),
                _: 1
            }, 8, ["show"])])
        }
    }
});
const Sn = V(Dn, [["__scopeId", "data-v-4e84c70a"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/promotion/MyInvitation/index.vue"]])
  , Xi = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Sn
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Ln = {
    class: "myReceive__container"
}
  , An = {
    class: "myReceive__container-searchbar"
}
  , In = {
    class: "myReceive__container-searchbar__selector-default"
}
  , Mn = {
    class: "myReceive__container-searchbar__selector-dropdown"
}
  , Yn = ["onClick"]
  , Nn = {
    class: "myReceive__container-content"
}
  , Bn = {
    class: "myReceive__container-content__item-header"
}
  , Pn = {
    class: "myReceive__container-content__item-body"
}
  , jn = E({
    __name: "index",
    setup(f) {
        const {t: o} = Q()
          , b = S(!1)
          , r = [{
            label: o("selectTime"),
            value: "all"
        }, {
            label: "2022-09-23 13:13:13",
            value: "level1"
        }, {
            label: "2022-09-23 13:13:14",
            value: "level2"
        }, {
            label: "2022-09-23 13:13:15",
            value: "level3"
        }]
          , h = [{
            level: "1",
            status: 0,
            time: "2022-09-23 13:13:13",
            UID: "90164",
            moneySpent: "50,000.00"
        }, {
            level: "2",
            status: 0,
            time: "2022-09-23 13:13:13",
            UID: "90170",
            moneySpent: "75,000.00"
        }, {
            level: "3",
            status: 0,
            time: "2022-09-23 13:13:13",
            UID: "90203",
            moneySpent: "100,000.00"
        }, {
            level: "4",
            status: 0,
            time: "2022-09-23 13:13:13",
            UID: "90324",
            moneySpent: "125,000.00"
        }]
          , l = S(r[0].label)
          , v = G();
        function $(g) {
            l.value = g,
            b.value = !1
        }
        function s() {
            v.back()
        }
        return (g, R) => {
            const c = D("NavBar")
              , d = D("van-icon");
            return a(),
            i("div", Ln, [u(c, {
                title: n(o)("titlePickUpRecord"),
                "left-arrow": "",
                onClickLeft: s
            }, null, 8, ["title"]), e("div", An, [e("div", {
                class: se(["myReceive__container-searchbar__selector", {
                    active: b.value
                }])
            }, [e("div", {
                onClick: R[0] || (R[0] = m => b.value = !b.value)
            }, [e("span", In, t(l.value), 1), u(d, {
                name: "arrow-down"
            })]), e("div", Mn, [(a(),
            i(H, null, O(r, (m, k) => e("li", {
                key: k,
                class: se({
                    selected: m.label === l.value
                }),
                onClick: w => $(m.label)
            }, t(m.label), 11, Yn)), 64))])], 2)]), e("div", Nn, [(a(),
            i(H, null, O(h, (m, k) => e("div", {
                class: "myReceive__container-content__item",
                key: k
            }, [e("div", Bn, [e("span", null, [u(d, {
                name: n(re)("promotion", "commission")
            }, null, 8, ["name"]), p(t(n(o)("commission")), 1)]), e("span", null, [p(t(n(o)("checkOver")) + " ", 1), u(d, {
                name: "arrow"
            })])]), e("div", null, t(m.moneySpent), 1), e("div", Pn, [e("div", null, [e("span", null, t(n(o)("time")), 1), e("span", null, t(m.time), 1)])])])), 64))])])
        }
    }
});
const Hn = V(jn, [["__scopeId", "data-v-9eaff79d"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/promotion/MyReceive/index.vue"]])
  , Wi = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Hn
}, Symbol.toStringTag, {
    value: "Module"
}))
  , On = f => (Z("data-v-baf81808"),
f = f(),
ee(),
f)
  , Un = {
    class: "promotion-page"
}
  , xn = {
    class: "promotion-mian"
}
  , En = {
    class: "promotion-mian__title"
}
  , Vn = {
    class: "promotion-title"
}
  , zn = {
    class: "promotion-txt"
}
  , qn = ["innerHTML"]
  , Gn = {
    class: "promotion-grade"
}
  , Fn = {
    class: "promotion-grade-th"
}
  , Qn = {
    class: "item"
}
  , Xn = {
    class: "item"
}
  , Wn = {
    class: "item"
}
  , Jn = {
    class: "item"
}
  , Kn = {
    class: "item"
}
  , Zn = {
    class: "icon-LV"
}
  , eo = {
    class: "txt"
}
  , to = {
    class: "item"
}
  , no = {
    class: "item"
}
  , oo = {
    class: "item"
}
  , so = {
    class: "promotion-box ruleHead"
}
  , ao = On( () => e("div", {
    class: "promotion-title"
}, "06", -1))
  , io = {
    class: "promotion-txt"
}
  , lo = {
    class: "promotion-title"
}
  , ro = {
    class: "promotion-txt"
}
  , co = E({
    __name: "index",
    setup(f) {
        const {t: o} = Q()
          , b = G()
          , r = K( () => ie().getProjectName)
          , h = [{
            title: "01",
            content: o("promotionRuleDesc1")
        }, {
            title: "02",
            content: o("promotionRuleDesc2")
        }, {
            title: "03",
            content: o("promotionRuleDesc3")
        }, {
            title: "04",
            content: o("promotionRuleDesc6", ["01:00"])
        }, {
            title: "05",
            content: o("promotionRuleDesc4") + "<br/>" + o("proRule1")
        }]
          , l = [{
            title: "07",
            content: o("tipTop20RankingAdditionalRewords")
        }, {
            title: "08",
            content: o("tipInterpretationRightSaved", [r.value])
        }]
          , v = S()
          , $ = async () => {
            try {
                const s = await Je();
                v.value = s
            } catch {}
        }
        ;
        return F( () => {
            $()
        }
        ),
        (s, g) => {
            const R = D("NavBar")
              , c = D("svg-icon");
            return a(),
            i("div", Un, [u(R, {
                class: "white",
                title: n(o)("titleInvitationRule"),
                "left-arrow": "",
                onClickLeft: g[0] || (g[0] = d => n(b).go(-1))
            }, null, 8, ["title"]), e("div", xn, [e("div", En, [e("h1", null, t(n(o)("tipPromotionPartner")), 1), e("p", null, t(n(o)("tipActivityValidForLongTime")), 1)]), (a(),
            i(H, null, O(h, (d, m) => e("div", {
                class: "promotion-box ruleHead",
                key: m
            }, [u(c, {
                name: "ruleHead"
            }), e("div", Vn, t(d.title), 1), e("div", zn, [e("p", {
                innerHTML: d.content
            }, null, 8, qn), N(" {{ item.content }} ")])])), 64)), N(" 等级列表 "), e("div", Gn, [e("div", Fn, [e("div", Qn, t(n(o)("rebateLevel")), 1), e("div", Xn, t(n(o)("teamMembers")), 1), e("div", Wn, t(n(o)("teamStream")), 1), e("div", Jn, t(n(o)("teamRecharge")), 1)]), (a(!0),
            i(H, null, O(v.value, (d, m) => (a(),
            i("div", {
                class: "promotion-grade-tr",
                key: m
            }, [e("div", Kn, [e("div", Zn, [e("span", eo, "L" + t(d.lv), 1)])]), e("div", to, t(d.lvCount), 1), e("div", no, t(n(_e)(d.lotteryAmount)), 1), e("div", oo, t(n(_e)(d.rechargeAmount)), 1)]))), 128))]), e("div", so, [u(c, {
                name: "ruleHead"
            }), ao, e("div", io, [p(t(n(o)("promotionRuleDesc5")) + " ", 1), e("p", null, t(n(o)("promotionRuleRedTXT")), 1), e("div", {
                class: "txt",
                onClick: g[1] || (g[1] = d => n(b).push({
                    name: "RebateRatio"
                }))
            }, t(n(o)("lookRerbate")), 1)])]), (a(),
            i(H, null, O(l, (d, m) => e("div", {
                class: "promotion-box ruleHead",
                key: m
            }, [u(c, {
                name: "ruleHead"
            }), e("div", lo, t(d.title), 1), e("div", ro, t(d.content), 1)])), 64))])])
        }
    }
});
const _o = V(co, [["__scopeId", "data-v-baf81808"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/promotion/PromotionRule/index.vue"]])
  , Ji = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: _o
}, Symbol.toStringTag, {
    value: "Module"
}))
  , uo = {
    class: "promotionShare__container"
}
  , vo = {
    class: "promotionShare__container-tips"
}
  , mo = ["id"]
  , po = {
    class: "sContent"
}
  , ho = ["src"]
  , $o = {
    class: "head1"
}
  , yo = ["innerHTML"]
  , fo = {
    class: "head3"
}
  , bo = ["src"]
  , go = ["src"]
  , ko = ["innerHTML"]
  , wo = ["id"]
  , Co = {
    class: "promotionShare__container-slogan"
}
  , To = {
    class: "promotionShare__container-buttons"
}
  , Ro = E({
    __name: "index",
    setup(f) {
        const o = G()
          , b = S(0);
        let r = S("");
        const h = c => {}
          , l = c => {
            b.value = c.activeIndex
        }
          , v = () => {
            o.back()
        }
          , $ = K( () => ie().getProjectLogo)
          , s = K( () => ie().getProjectName);
        async function g() {
            const c = await ke(Ke());
            if (c) {
                c.data.url.startsWith("http") ? r.value = c.data.url : r.value = window.location.href.substring(0, window.location.href.lastIndexOf("/#/") + 2) + "/" + c.data.url.substring(c.data.url.lastIndexOf("re"), c.data.url.length);
                for (let d = 1; d <= 3; d++)
                    Ye.toCanvas(document.getElementById("qr-code" + d), r.value, m => {
                        m && console.error(m)
                    }
                    )
            }
        }
        g();
        const R = c => {
            var d = document.getElementById(c);
            Ne(d, {
                useCORS: !0,
                x: 0,
                y: 0,
                width: d.offsetWidth,
                height: d.offsetHeight
            }).then(m => {
                m.toDataURL("image/jpeg");
                const k = document.createElement("a");
                k.href = m.toDataURL("image/jpeg"),
                k.download = "share.jpeg",
                document.body.appendChild(k),
                k.click()
            }
            )
        }
        ;
        return (c, d) => {
            const m = D("NavBar");
            return a(),
            i("div", uo, [u(m, {
                title: c.$t("titleInvite"),
                "left-arrow": "",
                onClickLeft: v
            }, null, 8, ["title"]), e("div", vo, [e("p", null, t(c.$t("tipSwipeToPickBrochure")), 1)]), u(n(Pe), {
                class: "my-swipe",
                slidesPerView: "auto",
                centeredSlides: !0,
                "space-between": 20,
                onSwiper: h,
                onSlideChange: l
            }, {
                default: x( () => [(a(),
                i(H, null, O(3, k => u(n(Be), {
                    key: k
                }, {
                    default: x( () => [e("div", {
                        class: "promotionShare__container-swiper",
                        id: "share" + (k - 1)
                    }, [N(` <img v-lazy="getIcons('promotion/promotionShare', 'poster')" /> `), e("div", po, [e("img", {
                        class: "logo",
                        src: $.value,
                        alt: ""
                    }, null, 8, ho), e("div", $o, [e("span", null, t(s.value), 1), e("span", null, t(c.$t("fairAndJust")), 1), e("span", null, t(c.$t("openAndTransparent")), 1)]), e("div", {
                        class: "head2",
                        innerHTML: c.$t("fullOddsReturnRate")
                    }, null, 8, yo), e("div", fo, [e("div", null, [e("img", {
                        class: "logo",
                        src: n(re)("promotion", "bank"),
                        alt: ""
                    }, null, 8, bo), p(" " + t(c.$t("financialSecurity")), 1)]), e("div", null, [e("img", {
                        class: "logo",
                        src: n(re)("promotion", "trucktick"),
                        alt: ""
                    }, null, 8, go), p(" " + t(c.$t("withdrawFast")), 1)])]), e("div", {
                        class: "head4",
                        innerHTML: c.$t("highestRebate", [85])
                    }, null, 8, ko)]), e("canvas", {
                        id: "qr-code" + k
                    }, null, 8, wo)], 8, mo)]),
                    _: 2
                }, 1024)), 64))]),
                _: 1
            }), e("div", Co, [e("p", null, t(c.$t("inviteFriends")), 1), e("p", null, [p(t(c.$t("divideBonus")) + " ", 1), e("span", null, t(c.$t("tip10billion")), 1), p(" " + t(c.$t("commission")), 1)])]), e("div", To, [n(Ze)() ? N("v-if", !0) : (a(),
            i("div", {
                key: 0,
                class: "share",
                onClick: d[0] || (d[0] = k => R("share" + b.value))
            }, t(c.$t("shareInvitationPoster")), 1)), e("div", {
                class: "cpy",
                onClick: d[1] || (d[1] = k => n(le)(n(r).toString()))
            }, t(c.$t("copyInvitationLink")), 1), N(" <div>{{ $t('copyInvitationLink') }}</div> ")])])
        }
    }
});
const Do = V(Ro, [["__scopeId", "data-v-3b74cce6"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/promotion/PromotionShare/index.vue"]])
  , Ki = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Do
}, Symbol.toStringTag, {
    value: "Module"
}))
  , So = {
    class: "x-page"
}
  , Lo = {
    class: "x-page-list"
}
  , Ao = {
    class: "title"
}
  , Io = {
    class: "box"
}
  , Mo = {
    class: "sum"
}
  , Yo = {
    class: "num"
}
  , No = E({
    __name: "index",
    setup(f) {
        const {t: o} = Q()
          , b = S(null)
          , r = S(0)
          , h = S(0)
          , l = k => {
            h.value = k.item.codeType,
            window.scroll({
                top: 0
            })
        }
          , v = k => {
            const w = k.toString();
            if (w.includes(".")) {
                const C = w.split(".")[1].replace(/0+$/, "").search(/[1-9]/);
                if (C !== -1 && C + 2 < w.length) {
                    const I = w.substring(0, C + 4);
                    return parseFloat(I)
                }
            }
            return parseFloat(w)
        }
          , $ = G()
          , s = [{
            name: o("lottery"),
            img: "lottery",
            id: 1,
            codeType: 0
        }, {
            name: o("live"),
            img: "video",
            id: 6,
            codeType: 2
        }, {
            name: o("sport"),
            img: "sport",
            id: 5,
            codeType: 3
        }, {
            name: o("chess"),
            img: "chess",
            id: 7,
            codeType: 4
        }, {
            name: o("electric"),
            img: "slot",
            id: 4,
            codeType: 1
        }]
          , g = S([{
            type: "rebateratelist",
            title: o("commissionTitle1"),
            content: []
        }, {
            type: "dianzilist",
            title: o("commissionTitle2"),
            content: []
        }, {
            type: "shixunlist",
            title: o("commissionTitle3"),
            content: []
        }, {
            type: "tiyulist",
            title: o("commissionTitle4"),
            content: []
        }, {
            type: "chesslist",
            title: o("commissionTitle5"),
            content: []
        }])
          , R = ne([]);
        let c = S([]);
        const d = async () => {
            const k = await ke(et());
            k && (k.data.forEach(w => {
                w.state === 1 && R.push({
                    id: w.id,
                    isShow: w.state === 1,
                    title: o("code" + w.typeNameCode),
                    img: w.categoryImg,
                    key: w.categoryCode.toLocaleLowerCase()
                })
            }
            ),
            c.value = s.filter(w => R.some(B => w.id === B.id)))
        }
          , m = async () => {
            try {
                const k = await tt();
                g.value[0].content = k.rebateratelist,
                g.value[1].content = k.dianzilist,
                g.value[2].content = k.shixunlist,
                g.value[3].content = k.tiyulist,
                g.value[4].content = k.chesslist
            } catch {}
        }
        ;
        return F( () => {
            m(),
            d()
        }
        ),
        (k, w) => {
            const B = D("NavBar")
              , C = D("svg-icon")
              , I = D("van-sticky");
            return a(),
            i("div", So, [u(B, {
                title: k.$t("rebateRatio"),
                "left-arrow": "",
                onClickLeft: w[0] || (w[0] = y => n($).go(-1))
            }, null, 8, ["title"]), u(I, {
                "offset-top": 46,
                container: b.value,
                class: "bet-container-sticky"
            }, {
                default: x( () => [e("div", null, [u(it, {
                    list: n(c),
                    active: r.value,
                    "onUpdate:active": w[1] || (w[1] = y => r.value = y),
                    tabClassName: "tabs",
                    onOnClickTab: l,
                    activeClassName: "tab_active",
                    ref: "tabRefs",
                    tabItemClassName: "funtab_item"
                }, {
                    default: x( ({item: y, index: U}) => [e("div", {
                        class: se(["tab_item", {
                            tab_active: U === r.value
                        }])
                    }, [u(C, {
                        name: y.img
                    }, null, 8, ["name"]), e("span", null, t(y.name), 1)], 2)]),
                    _: 1
                }, 8, ["list", "active"])])]),
                _: 1
            }, 8, ["container"]), e("div", Lo, [(a(!0),
            i(H, null, O(g.value[h.value].content, (y, U) => (a(),
            i("div", {
                class: "item",
                key: U
            }, [e("div", Ao, [p(t(k.$t("rebateLevel")) + " ", 1), e("span", null, "L" + t(y.rebate_Lv), 1)]), e("div", Io, [(a(!0),
            i(H, null, O(y.rebateLevels, (q, L) => (a(),
            i("div", {
                class: "li",
                key: L
            }, [u(C, {
                name: "round",
                class: "img"
            }), e("div", null, [e("span", Mo, t(k.$t("lowerRrebate", [q.levelId])), 1), e("span", Yo, t(v(q.amount)) + "%", 1)])]))), 128))])]))), 128))])])
        }
    }
});
const Bo = V(No, [["__scopeId", "data-v-a6a0c110"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/promotion/RebateRatio/index.vue"]])
  , Zi = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Bo
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Po = {
    class: "customer-container"
}
  , jo = {
    class: "customer-container-header"
}
  , Ho = {
    class: "customer-container-header-belly"
}
  , Oo = {
    alt: ""
}
  , Uo = E({
    __name: "index",
    setup(f) {
        const {onItemClick: o, goBack: b, getIcons: r, getList: h, ContactList: l, List: v} = Ce({
            ServerType: 1
        });
        return F( () => {
            h()
        }
        ),
        ($, s) => {
            const g = D("NavBar")
              , R = ue("lazy");
            return a(),
            i("div", Po, [e("div", jo, [u(g, {
                title: $.$t("poxyServer"),
                class: "main",
                "left-arrow": "",
                onClickLeft: n(b)
            }, null, 8, ["title", "onClickLeft"]), e("div", Ho, [ae(e("img", Oo, null, 512), [[R, n(r)("promotion", "serverbg")]])])]), u(n(v), {
                list: n(l),
                onOnClick: n(o)
            }, null, 8, ["list", "onOnClick"])])
        }
    }
});
const xo = V(Uo, [["__scopeId", "data-v-63a4fda1"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/promotion/Server/index.vue"]])
  , el = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: xo
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Eo = {
    class: "subordinate__container"
}
  , Vo = {
    class: "subordinate__container-header"
}
  , zo = {
    class: "subordinate__container-content"
}
  , qo = E({
    __name: "index",
    setup(f) {
        const o = G();
        function b() {
            o.back()
        }
        const r = S(!0)
          , h = S()
          , l = ne({
            startDate: z(J().today.start * 1e3).format("YYYY-MM-DD HH:mm:ss"),
            endDate: z(J().today.end * 1e3).format("YYYY-MM-DD HH:mm:ss"),
            level: 1
        });
        let v = je("permission", null);
        v && (v = JSON.parse(v.value));
        const $ = S([])
          , s = K( () => v ? v[16] : !0)
          , g = new Date
          , R = new Date(g);
        R.setDate(R.getDate() - 1);
        const c = S(0);
        return He(c, d => {
            switch (d) {
            case 0:
                l.startDate = z(J().today.start * 1e3).format("YYYY-MM-DD HH:mm:ss"),
                l.endDate = z(J().today.end * 1e3).format("YYYY-MM-DD HH:mm:ss");
                break;
            case 1:
                l.startDate = z(J().yesterday.start * 1e3).format("YYYY-MM-DD HH:mm:ss"),
                l.endDate = z(J().yesterday.end * 1e3).format("YYYY-MM-DD HH:mm:ss");
                break;
            case 2:
                l.startDate = z(J().thisMonth.start * 1e3).format("YYYY-MM-DD HH:mm:ss"),
                l.endDate = z(J().thisMonth.end * 1e3).format("YYYY-MM-DD HH:mm:ss");
                break
            }
            h.value.resetRefresh()
        }
        ),
        (d, m) => {
            const k = D("NavBar")
              , w = D("van-tab")
              , B = D("van-tabs");
            return a(),
            i("div", Eo, [u(k, {
                title: d.$t("addSubor"),
                "left-arrow": "",
                onClickLeft: b
            }, null, 8, ["title"]), e("div", Vo, [N(` <van-tabs class="top-tabBar" v-model:active="topActive" type="card" color="transparent" background="transparent"
				ref="tabsRef" ellipsis>
				<van-tab>
					<template #title> 直属下级 </template>
				</van-tab>
				<van-tab>
					<template #title> 全部下级 </template>
				</van-tab>
			</van-tabs> `), u(B, {
                class: "footer-tabBar",
                active: c.value,
                "onUpdate:active": m[0] || (m[0] = C => c.value = C),
                type: "card",
                color: "transparent",
                background: "transparent",
                ref: "tabsRef",
                ellipsis: ""
            }, {
                default: x( () => [u(w, null, {
                    title: x( () => [p(t(d.$t("code9101")), 1)]),
                    _: 1
                }), u(w, null, {
                    title: x( () => [p(t(d.$t("code9102")), 1)]),
                    _: 1
                }), s.value ? (a(),
                oe(w, {
                    key: 0
                }, {
                    title: x( () => [p(t(d.$t("code9105")), 1)]),
                    _: 1
                })) : N("v-if", !0)]),
                _: 1
            }, 8, ["active"])]), u(me, {
                list: $.value,
                "onUpdate:list": m[1] || (m[1] = C => $.value = C),
                "page-query": l,
                "onUpdate:pageQuery": m[2] || (m[2] = C => l = C),
                api: n(nt),
                distance: 100,
                ref_key: "listRef",
                ref: h,
                "is-auto-load": r.value
            }, {
                content: x( () => [e("div", zo, [(a(!0),
                i(H, null, O($.value, (C, I) => (a(),
                i("div", {
                    class: "subordinate__container-content__item ar-1px-b",
                    key: I
                }, [e("div", null, [e("span", null, t(C.bindUserName), 1), e("span", null, "UID:" + t(C.bindUserID), 1)]), e("div", null, [e("span", null, t(d.$t("heroDirectSub")), 1), e("span", null, t(C.bindTime), 1)])]))), 128))])]),
                _: 1
            }, 8, ["list", "page-query", "api", "is-auto-load"])])
        }
    }
});
const Go = V(qo, [["__scopeId", "data-v-221aa0df"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/promotion/Subordinate/index.vue"]])
  , tl = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Go
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Fo = f => (Z("data-v-28c19aaa"),
f = f(),
ee(),
f)
  , Qo = {
    class: "partner"
}
  , Xo = {
    class: "partner-banner"
}
  , Wo = {
    class: "partner-main"
}
  , Jo = {
    class: "partner-item"
}
  , Ko = {
    class: "number"
}
  , Zo = {
    class: "partner-item"
}
  , es = {
    class: "count"
}
  , ts = {
    class: "partner-item"
}
  , ns = {
    class: "money"
}
  , os = {
    class: "partner-entry"
}
  , ss = Fo( () => e("svg", {
    fill: "none",
    height: "36",
    viewBox: "0 0 37 36",
    width: "37",
    xmlns: "http://www.w3.org/2000/svg"
}, [e("path", {
    "clip-rule": "evenodd",
    d: "M11.3008 26.5V24.3644L19.0121 17.5665L11.3008 10.6356V8.5L20.1579 16.4653L21.3008 17.5665L20.1579 18.6677L11.3008 26.5Z",
    fill: "#666666",
    "fill-rule": "evenodd"
}), e("path", {
    "clip-rule": "evenodd",
    d: "M17.5 26.5V24.3644L25.2113 17.5665L17.5 10.6356V8.5L26.3571 16.4653L27.5 17.5665L26.3571 18.6677L17.5 26.5Z",
    fill: "#666666",
    "fill-rule": "evenodd"
})], -1))
  , as = {
    class: "partner-title"
}
  , is = {
    class: "partner-code"
}
  , ls = {
    class: "partner-rule"
}
  , rs = {
    class: "partner-rule-title"
}
  , cs = ["innerHTML"]
  , ds = {
    key: 1,
    class: "tip"
}
  , _s = {
    class: "partner-rule-table"
}
  , us = {
    class: "head"
}
  , vs = {
    class: "bouns"
}
  , ms = {
    key: 0,
    class: "item"
}
  , ps = {
    class: "left"
}
  , hs = {
    class: "right"
}
  , $s = {
    key: 0
}
  , ys = {
    key: 1
}
  , fs = {
    key: 2
}
  , bs = {
    key: 1,
    class: "item"
}
  , gs = {
    class: "left"
}
  , ks = {
    class: "right"
}
  , ws = {
    key: 0
}
  , Cs = {
    key: 1
}
  , Ts = {
    key: 2
}
  , Rs = {
    key: 2,
    class: "item"
}
  , Ds = {
    class: "left"
}
  , Ss = {
    class: "right"
}
  , Ls = {
    key: 0
}
  , As = {
    key: 1
}
  , Is = {
    key: 2
}
  , Ms = {
    class: "redTip"
}
  , Ys = {
    class: "partner-rule-text"
}
  , Ns = ["innerHTML"]
  , Bs = E({
    __name: "index",
    setup(f) {
        const {getInfo: o, goInvitation: b, amount: r, totalAmount: h, invitationCode: l, invitationLink: v, effectiveQuantity: $, numberOfInvitations: s, days: g, firstItem: R, secondItem: c, thirdItem: d, allItem: m} = we()
          , {copy: k} = Oe({
            legacy: !0
        })
          , {t: w, locale: B} = Q();
        function C() {
            ye.go(-1)
        }
        const I = async y => {
            await k(y),
            Ue(w("copySuccess"))
        }
        ;
        return F( () => o()),
        (y, U) => {
            var _, T;
            const q = D("NavBar")
              , L = D("svg-icon");
            return a(),
            i("div", Qo, [u(q, {
                title: y.$t("TeamPartner"),
                "left-arrow": "",
                onClickLeft: C
            }, null, 8, ["title"]), e("div", Xo, [e("h2", null, t(y.$t("invitationFrind")), 1), e("p", null, t(n(Y)(n(r))), 1)]), e("div", Wo, [e("div", Jo, [e("span", null, t(y.$t("invitationCount")), 1), e("span", Ko, t(n(s)), 1)]), e("div", Zo, [e("span", null, t(y.$t("invitationEffective")), 1), e("span", es, t(n($)), 1)]), e("div", ts, [e("span", null, t(y.$t("invitationTotalBonus")), 1), e("span", ns, t(n(Y)(n(h))), 1)]), e("div", os, [e("div", {
                onClick: U[0] || (U[0] = (...A) => n(b) && n(b)(...A))
            }, [p(t(y.$t("inviteRecord")) + " ", 1), ss])]), e("div", as, t(y.$t("invitationLink")), 1), e("div", is, [e("span", null, t(n(v)), 1), e("span", {
                onClick: U[1] || (U[1] = A => I(n(v)))
            }, [u(L, {
                name: "copy"
            })])]), N(` <div class="partner-title">
			  {{$t('invitationCode')}}
		  </div>
		  <div class="partner-code">
			  <span>{{invitationCode}}</span>
			  <span @click="onCopy(invitationCode)">
				<svg-icon name="copy" />
			  </span>
		  </div> `), e("div", ls, [e("div", rs, [u(L, {
                name: "shuoming",
                class: "img"
            }), e("span", null, t(y.$t("invitationRules")), 1)]), n(B) == "zh" ? (a(),
            i("div", {
                key: 0,
                class: "tip",
                innerHTML: y.$t("partnerTip", [n(g)])
            }, null, 8, cs)) : (a(),
            i("div", ds, [p(t(y.$t("partnerTip")) + " ", 1), e("span", null, t(n(g)), 1), p(" " + t(y.$t("days")), 1)])), e("div", _s, [e("div", us, [e("div", null, t(y.$t("partner1")), 1), e("div", vs, t(y.$t("partner2")), 1)]), n(R).length ? (a(),
            i("div", ms, [e("div", ps, t(y.$t("deposit1")), 1), e("div", hs, [(a(!0),
            i(H, null, O(n(R), (A, P) => (a(),
            i("div", {
                key: P,
                class: "line"
            }, [e("div", null, [P + 1 < n(R).length ? (a(),
            i("span", $s, [e("span", null, t(n(Y)(A.rechargeAmount, "", 0)), 1), p(" ≤ " + t(y.$t("paymentAmount")) + "<", 1), e("span", null, t(n(Y)(n(R)[P + 1].rechargeAmount, "", 0)), 1)])) : (a(),
            i("span", ys, [p(t(y.$t("paymentAmount")) + " ≥ ", 1), e("span", null, t(n(Y)(A.rechargeAmount, "", 0)), 1)])), Number(A.betAmount) >= 0 ? (a(),
            i("span", fs, [p(t(y.$t("partner3")) + " ≥ ", 1), e("span", null, t(n(Y)(A.betAmount, "", 0)), 1)])) : N("v-if", !0)]), e("div", null, t(n(Y)(A.rewardAmount, "", 0)), 1)]))), 128))])])) : N("v-if", !0), n(c).length ? (a(),
            i("div", bs, [e("div", gs, t(y.$t("deposit2")), 1), e("div", ks, [(a(!0),
            i(H, null, O(n(c), (A, P) => (a(),
            i("div", {
                key: P,
                class: "line"
            }, [e("div", null, [P + 1 < n(c).length ? (a(),
            i("span", ws, [e("span", null, t(n(Y)(A.rechargeAmount, "", 0)), 1), p(" ≤ " + t(y.$t("paymentAmount")) + "<", 1), e("span", null, t(n(Y)(n(c)[P + 1].rechargeAmount, "", 0)), 1)])) : (a(),
            i("span", Cs, [p(t(y.$t("paymentAmount")) + " ≥ ", 1), e("span", null, t(n(Y)(A.rechargeAmount, "", 0)), 1)])), Number(A.betAmount) >= 0 ? (a(),
            i("span", Ts, [p(t(y.$t("partner3")) + " ≥ ", 1), e("span", null, t(n(Y)(A.betAmount, "", 0)), 1)])) : N("v-if", !0)]), e("div", null, t(n(Y)(A.rewardAmount, "", 0)), 1)]))), 128))])])) : N("v-if", !0), n(d).length ? (a(),
            i("div", Rs, [e("div", Ds, t(y.$t("deposit3")), 1), e("div", Ss, [(a(!0),
            i(H, null, O(n(d), (A, P) => (a(),
            i("div", {
                key: P,
                class: "line"
            }, [e("div", null, [P + 1 < n(d).length ? (a(),
            i("span", Ls, [e("span", null, t(n(Y)(A.rechargeAmount, "", 0)), 1), p(" ≤ " + t(y.$t("paymentAmount")) + "<", 1), e("span", null, t(n(Y)(n(d)[P + 1].rechargeAmount, "", 0)), 1)])) : (a(),
            i("span", As, [p(t(y.$t("paymentAmount")) + " ≥ ", 1), e("span", null, t(n(Y)(A.rechargeAmount, "", 0)), 1)])), Number(A.betAmount) >= 0 ? (a(),
            i("span", Is, [p(t(y.$t("partner3")) + " ≥ ", 1), e("span", null, t(n(Y)(A.betAmount, "", 0)), 1)])) : N("v-if", !0)]), e("div", null, t(n(Y)(A.rewardAmount, "", 0)), 1)]))), 128))])])) : N("v-if", !0)]), e("div", Ms, t(y.$t("partnerTip1")), 1), e("div", Ys, [e("p", {
                innerHTML: y.$t("partnerRule", [n(Y)(n(m) ? ((_ = n(m)[0]) == null ? void 0 : _.rechargeAmount) - 1 : 0), n(Y)(n(m) ? (T = n(m)[0]) == null ? void 0 : T.betAmount : 0)])
            }, null, 8, Ns), e("p", null, t(y.$t("partnerRule2")), 1), e("p", null, t(y.$t("partnerRule3")), 1)])])])])
        }
    }
});
const Ps = V(Bs, [["__scopeId", "data-v-28c19aaa"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/promotion/TeamPartner/index.vue"]])
  , nl = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Ps
}, Symbol.toStringTag, {
    value: "Module"
}))
  , js = {
    class: "TeamReport__C"
}
  , Hs = {
    class: "TeamReport__C-head"
}
  , Os = {
    class: "TeamReport__C-head-fixed"
}
  , Us = {
    class: "TeamReport__C-head-line2"
}
  , xs = {
    key: 0,
    class: "default"
}
  , Es = {
    key: 1
}
  , Vs = {
    key: 0,
    class: "default"
}
  , zs = {
    key: 1
}
  , qs = {
    class: "TeamReport__C-body"
}
  , Gs = {
    class: "header-container"
}
  , Fs = {
    class: "num"
}
  , Qs = {
    class: "num"
}
  , Xs = {
    class: "num"
}
  , Ws = {
    class: "num"
}
  , Js = {
    class: "num"
}
  , Ks = {
    class: "num"
}
  , Zs = {
    class: "TeamReport__C-body-item-head"
}
  , ea = {
    class: "title"
}
  , ta = {
    class: "TeamReport__C-body-item-detail"
}
  , na = {
    class: "TeamReport__C-body-item-detail-lv"
}
  , oa = {
    class: "TeamReport__C-body-item-detail-commission"
}
  , sa = {
    class: "TeamReport__C-body-item-detail-commission"
}
  , aa = {
    class: "TeamReport__C-body-item-detail-commission"
}
  , ia = {
    class: "TeamReport__C-body-item-detail-time"
}
  , la = E({
    __name: "index",
    setup(f) {
        Te(["TeamReport-TeamReportDetail"]);
        const {t: o} = Q()
          , b = G()
          , r = S()
          , h = S([{
            name: o("all"),
            code: -1
        }, {
            name: o("teamReportLeval1"),
            code: 1
        }, {
            name: o("teamReportLeval2"),
            code: 2
        }, {
            name: o("teamReportLeval3"),
            code: 3
        }, {
            name: o("teamReportLeval4"),
            code: 4
        }, {
            name: o("teamReportLeval5"),
            code: 5
        }, {
            name: o("teamReportLeval6"),
            code: 6
        }])
          , l = {
            text: "name",
            value: "code"
        };
        let v = ne({
            betCountSum: 0,
            betAmountSum: 0,
            firstRecahrgeCount: 0,
            firstRecahrgeAmountSum: 0,
            recahrgeCount: 0,
            recahrgeAmountSum: 0,
            rebateAmountSum: 0
        });
        const $ = S(!1)
          , s = S(!1)
          , {minDate: g, maxDate: R} = fe(-1)
          , c = z(R).startOf("day")
          , d = ne({
            lv: h.value[0].code,
            day: c.format("YYYY-MM-DD HH:mm:ss"),
            userId: null
        })
          , m = S([c.format("YYYY"), c.format("MM"), c.format("DD")]);
        function k() {
            var X;
            const _ = n(m)
              , [T,A,P] = _;
            d.userId = w.value ? parseInt(w.value) : null,
            d.day = ge(T, A, P) + " 00:00:00",
            (X = r.value) == null || X.resetRefresh(),
            $.value = !1
        }
        const w = S("");
        function B() {
            var _;
            d.userId = w.value ? parseInt(w.value) : null,
            (_ = r.value) == null || _.resetRefresh()
        }
        const C = _ => {
            v = _.data
        }
          , I = ({selectedOptions: _}) => {
            var T;
            d.lv = _[0].code,
            s.value = !1,
            (T = r.value) == null || T.resetRefresh()
        }
          , y = S([])
          , U = K( () => z(d.day).format("YYYY-MM-DD"))
          , q = K( () => {
            const _ = h.value.find(T => T.code === d.lv);
            return _ ? _.name : ""
        }
        )
          , L = () => {
            b.go(-1)
        }
        ;
        return (_, T) => {
            const A = D("NavBar")
              , P = D("van-icon")
              , X = D("svg-icon")
              , te = D("van-date-picker")
              , M = D("van-popup")
              , de = D("van-picker");
            return a(),
            i("div", js, [u(A, {
                class: "white",
                title: _.$t("subordinateD"),
                "left-arrow": "",
                onClickLeft: L
            }, null, 8, ["title"]), e("div", Hs, [e("div", Os, [u(De, {
                placeholder: _.$t("searchSubUID"),
                value: w.value,
                "onUpdate:value": T[0] || (T[0] = j => w.value = j),
                onHandleSearch: B
            }, null, 8, ["placeholder", "value"]), e("div", Us, [e("div", {
                onClick: T[1] || (T[1] = j => s.value = !0)
            }, [q.value ? (a(),
            i("span", xs, t(q.value), 1)) : (a(),
            i("span", Es, t(_.$t("subGrade")), 1)), u(P, {
                name: "arrow-down"
            })]), e("div", {
                onClick: T[2] || (T[2] = j => $.value = !0)
            }, [U.value ? (a(),
            i("span", Vs, t(U.value), 1)) : (a(),
            i("span", zs, t(_.$t("pickDate")), 1)), u(P, {
                name: "arrow-down"
            })])])])]), e("div", qs, [e("div", Gs, [e("div", null, [e("div", Fs, t(n(v).recahrgeCount), 1), e("div", null, t(_.$t("rechargeNumber")), 1)]), e("div", null, [e("div", Qs, t(n(v).recahrgeAmountSum), 1), e("div", null, t(_.$t("rechageAmount")), 1)]), e("div", null, [e("div", Xs, t(n(v).betCountSum), 1), e("div", null, t(_.$t("numberbettors")), 1)]), e("div", null, [e("div", Ws, t(n(v).betAmountSum), 1), e("div", null, t(_.$t("betAmount")), 1)]), e("div", null, [e("div", Js, t(n(v).firstRecahrgeCount), 1), e("div", null, t(_.$t("firstRechargesC")), 1)]), e("div", null, [e("div", Ks, t(n(v).firstRecahrgeAmountSum), 1), e("div", null, t(_.$t("firstDepositAmount")), 1)])]), u(ot, {
                api: n(st),
                list: y.value,
                "onUpdate:list": T[3] || (T[3] = j => y.value = j),
                "page-query": d,
                "onUpdate:pageQuery": T[4] || (T[4] = j => d = j),
                ref_key: "listRef",
                ref: r,
                isAutoLoad: !0,
                onPageChange: C
            }, {
                content: x( () => [(a(!0),
                i(H, null, O(y.value, (j, Le) => (a(),
                i("div", {
                    key: Le,
                    class: "TeamReport__C-body-item"
                }, [e("div", Zs, [e("div", ea, "UID:" + t(j.userID), 1), u(X, {
                    onClick: xe(xi => n(le)(j.userID.toString()), ["stop"]),
                    name: "copy"
                }, null, 8, ["onClick"]), N(` <div class="TeamReport__C-body-item-head-btn" @click="goDetail(item)">{{ $t('viewDetail') }}</div> `)]), e("div", ta, [e("div", na, [p(t(_.$t("friendsGrade")), 1), e("span", null, t(j.lv), 1)]), e("div", oa, [p(t(_.$t("rechageAmount")), 1), e("span", null, t(j.rechargeAmount), 1)]), ae(e("div", sa, [p(t(_.$t("betAmounts")), 1), e("span", null, t(j.lotteryAmount), 1)], 512), [[Ee, j.lotteryAmount]]), e("div", aa, [p(t(_.$t("commissionAmount")), 1), e("span", null, t(j.rebateAmount), 1)]), e("div", ia, [p(t(_.$t("time")), 1), e("span", null, t(j.searchTime), 1)])])]))), 128))]),
                _: 1
            }, 8, ["api", "list", "page-query"])]), u(M, {
                show: $.value,
                "onUpdate:show": T[7] || (T[7] = j => $.value = j),
                round: "",
                position: "bottom"
            }, {
                default: x( () => [u(te, {
                    modelValue: m.value,
                    "onUpdate:modelValue": T[5] || (T[5] = j => m.value = j),
                    onCancel: T[6] || (T[6] = j => $.value = !1),
                    onConfirm: k,
                    title: _.$t("pickDate"),
                    "min-date": n(g),
                    "max-date": n(R)
                }, null, 8, ["modelValue", "title", "min-date", "max-date"])]),
                _: 1
            }, 8, ["show"]), u(M, {
                show: s.value,
                "onUpdate:show": T[9] || (T[9] = j => s.value = j),
                round: "",
                position: "bottom"
            }, {
                default: x( () => [u(de, {
                    "columns-field-names": l,
                    columns: h.value,
                    onCancel: T[8] || (T[8] = j => s.value = !1),
                    onConfirm: I
                }, null, 8, ["columns"])]),
                _: 1
            }, 8, ["show"])])
        }
    }
});
const ra = V(la, [["__scopeId", "data-v-10d1559c"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/promotion/TeamReport/index.vue"]])
  , ol = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: ra
}, Symbol.toStringTag, {
    value: "Module"
}))
  , ca = f => (Z("data-v-ede350d4"),
f = f(),
ee(),
f)
  , da = {
    class: "TeamReportDetail__C"
}
  , _a = {
    class: "TeamReportDetail__C-head"
}
  , ua = {
    class: "TeamReportDetail__C-head-top"
}
  , va = {
    class: "TeamReportDetail__C-head-detail"
}
  , ma = {
    class: "TeamReportDetail__C-head-detail-lv"
}
  , pa = {
    class: "TeamReportDetail__C-head-detail-commission"
}
  , ha = {
    class: "TeamReportDetail__C-head-detail-time"
}
  , $a = ca( () => e("div", {
    class: "TeamReportDetail__C-img"
}, null, -1))
  , ya = {
    class: "TeamReportDetail__C-detail"
}
  , fa = {
    class: "title"
}
  , ba = {
    class: "box"
}
  , ga = {
    class: "TeamReportDetail__C-body-item"
}
  , ka = {
    class: "TeamReportDetail__C-body-item"
}
  , wa = {
    class: "level"
}
  , Ca = {
    class: "TeamReportDetail__C-body-item"
}
  , Ta = {
    class: "meony"
}
  , Ra = {
    class: "TeamReportDetail__C-body-item"
}
  , Da = {
    class: "meony"
}
  , Sa = {
    class: "TeamReportDetail__C-body-grade"
}
  , La = {
    class: "TeamReportDetail__C-body-grade-th"
}
  , Aa = {
    class: "item"
}
  , Ia = {
    class: "item"
}
  , Ma = {
    class: "item"
}
  , Ya = {
    class: "item"
}
  , Na = {
    class: "item"
}
  , Ba = {
    class: "icon-LV"
}
  , Pa = {
    class: "txt"
}
  , ja = {
    class: "item"
}
  , Ha = {
    class: "item"
}
  , Oa = {
    class: "item"
}
  , Ua = E({
    __name: "index",
    setup(f) {
        const o = G()
          , b = $e()
          , {t: r} = Q()
          , h = {
            1: r("commissionLottery"),
            2: r("commissionElectric"),
            3: r("commissionLive"),
            4: r("commissionSport"),
            5: r("commissionGames"),
            6: r("commissionChess")
        }
          , l = () => {
            o.go(-1)
        }
          , v = S()
          , $ = async () => {
            try {
                const s = await be({
                    date: b.query.date
                });
                v.value = s
            } catch {}
        }
        ;
        return F( () => {
            $()
        }
        ),
        (s, g) => {
            var c, d, m, k, w;
            const R = D("NavBar");
            return a(),
            i("div", da, [u(R, {
                title: s.$t("details"),
                "left-arrow": "",
                onClickLeft: l
            }, null, 8, ["title"]), e("div", _a, [e("div", ua, t((c = v.value) == null ? void 0 : c.settlementTime), 1), e("div", va, [e("div", ma, [p(t(s.$t("totalBetP")), 1), e("span", null, t((d = v.value) == null ? void 0 : d.children_LotteryAmount_Users) + t(s.$t("people")), 1)]), e("div", pa, [p(t(s.$t("totalBetA")), 1), e("span", null, t(n(Y)((m = v.value) == null ? void 0 : m.children_LotteryAmount)), 1)]), N(` <div class="TeamReportDetail__C-head-detail-time">
					{{$t('rebateLevel')}}<span>LV5</span>
				</div> `), e("div", ha, [p(t(s.$t("totalCommissionA")), 1), e("span", null, t((k = v.value) == null ? void 0 : k.rebateAmount_Last), 1)])])]), $a, e("div", ya, [e("div", {
                class: "btn",
                onClick: g[0] || (g[0] = B => n(o).push({
                    name: "RebateRatio"
                }))
            }, t(s.$t("rebateRules")), 1)]), (a(!0),
            i(H, null, O((w = v.value) == null ? void 0 : w.rebateWhereItems, (B, C) => (a(),
            i("div", {
                class: "TeamReportDetail__C-body",
                key: C
            }, [e("div", fa, t(h[B.type]), 1), e("div", ba, [e("div", ga, [p(t(s.$t("betPeople")) + " ", 1), e("span", null, t(B.children_LotteryAmount_Users) + t(s.$t("people")), 1)]), e("div", ka, [p(t(s.$t("rebateLevel")) + " ", 1), e("span", wa, "LV" + t(B.rebateLevel), 1)]), e("div", Ca, [p(t(s.$t("betMoney")) + " ", 1), e("span", Ta, t(n(Y)(B.children_LotteryAmount)), 1)]), e("div", Ra, [p(t(s.$t("commSettlement")) + " ", 1), e("span", Da, t(n(Y)(B.rebateAmount)), 1)])]), e("div", Sa, [e("div", La, [e("div", Aa, t(s.$t("lowerLevel")), 1), e("div", Ia, t(s.$t("betAmounts")), 1), e("div", Ma, t(s.$t("rebateRatio")), 1), e("div", Ya, t(s.$t("betRebateAmount")), 1)]), (a(!0),
            i(H, null, O(B.rebateWhereItemDetails, (I, y) => (a(),
            i("div", {
                class: "TeamReportDetail__C-body-grade-tr",
                key: y
            }, [e("div", Na, [e("div", Ba, [e("span", Pa, "L" + t(I.levelId), 1)])]), e("div", ja, t(I.children_LotteryAmount), 1), e("div", Ha, t(I.rebateRate) + "%", 1), e("div", Oa, t(n(_e)(I.rebateAmount)), 1)]))), 128))])]))), 128))])
        }
    }
});
const xa = V(Ua, [["__scopeId", "data-v-ede350d4"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/promotion/MyCommission/MyCommissionDetail/index.vue"]])
  , sl = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: xa
}, Symbol.toStringTag, {
    value: "Module"
}))
  , W = f => (Z("data-v-d1f3a81f"),
f = f(),
ee(),
f)
  , Ea = {
    class: "invitationDetail__container"
}
  , Va = {
    class: "invitationDetail__container-content"
}
  , za = {
    class: "invitationDetail__container-content__item"
}
  , qa = {
    class: "invitationDetail__container-content__item-header"
}
  , Ga = W( () => e("span", null, "1级", -1))
  , Fa = {
    class: "invitationDetail__container-content__item-body"
}
  , Qa = W( () => e("span", null, "MemberNNG0DDAF", -1))
  , Xa = W( () => e("div", null, [e("span", null, "UID"), e("span", null, "90164")], -1))
  , Wa = W( () => e("span", null, "50,000.00", -1))
  , Ja = W( () => e("span", null, "50,000.00", -1))
  , Ka = W( () => e("div", null, [e("span", null, "总返佣"), e("span", null, "88")], -1))
  , Za = W( () => e("span", null, "88", -1))
  , ei = W( () => e("div", null, [e("span", null, "获得返佣"), e("span", null, "50,000.00")], -1))
  , ti = W( () => e("span", null, "2023-02-13 16:22:30", -1))
  , ni = ["src"]
  , oi = {
    class: "invitationDetail__container-betHistory"
}
  , si = {
    class: "canvas"
}
  , ai = W( () => e("canvas", {
    width: "20",
    height: "320",
    class: "icon_after",
    id: "canvas"
}, null, -1))
  , ii = E({
    __name: "index",
    setup(f) {
        const o = [{
            title: "彩票投注",
            spent: "50,000.00"
        }, {
            title: "Slots投注",
            spent: "50,000.00"
        }, {
            title: "赌场投注",
            spent: "50,000.00"
        }, {
            title: "Slots投注",
            spent: "50,000.00"
        }, {
            title: "赌场投注",
            spent: "50,000.00"
        }, {
            title: "Slots投注",
            spent: "50,000.00"
        }, {
            title: "赌场投注",
            spent: "50,000.00"
        }, {
            title: "Slots投注",
            spent: "50,000.00"
        }, {
            title: "赌场投注",
            spent: "50,000.00"
        }]
          , b = G();
        function r() {
            b.back()
        }
        F( () => {
            h()
        }
        );
        const h = () => {
            const v = document.getElementById("canvas").getContext("2d");
            let $ = o.length - 1;
            v.beginPath(),
            v.strokeStyle = "var(--main-color)",
            v.moveTo(10, 28),
            v.setLineDash([1, 1]);
            let s = $ * 3 + 32;
            v.lineTo(10, $ * 28 + s),
            v.stroke()
        }
        ;
        return (l, v) => {
            const $ = D("NavBar")
              , s = D("svg-icon");
            return a(),
            i("div", Ea, [u($, {
                title: l.$t("myInvitation"),
                "left-arrow": "",
                onClickLeft: r
            }, null, 8, ["title"]), e("div", Va, [e("div", za, [e("div", qa, [e("span", null, t(l.$t("startUp")), 1), Ga]), e("div", Fa, [e("div", null, [e("span", null, t(l.$t("nickName")), 1), Qa]), Xa, e("div", null, [e("span", null, t(l.$t("totalBetAmount")), 1), Wa]), e("div", null, [e("span", null, t(l.$t("totalRechargeAmount")), 1), Ja]), Ka, e("div", null, [e("span", null, t(l.$t("subordinatesNumber")), 1), Za]), ei, e("div", null, [e("span", null, t(l.$t("loginTime")), 1), ti])])]), e("img", {
                src: n(ve)("main", "moonBar")
            }, null, 8, ni)]), e("div", oi, [e("div", si, [(a(!0),
            i(H, null, O(o.length, g => (a(),
            oe(s, {
                name: "round",
                class: "img",
                key: g
            }))), 128))]), ai, (a(),
            i(H, null, O(o, (g, R) => e("div", {
                key: R
            }, [e("span", null, t(g.title), 1), e("div", null, t(g.spent), 1)])), 64))])])
        }
    }
});
const li = V(ii, [["__scopeId", "data-v-d1f3a81f"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/promotion/MyInvitation/InvitationDetail/index.vue"]])
  , al = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: li
}, Symbol.toStringTag, {
    value: "Module"
}))
  , ri = {
    class: "customer-container"
}
  , ci = {
    class: "customer-container-header"
}
  , di = {
    class: "customer-container-header-belly"
}
  , _i = {
    alt: ""
}
  , ui = E({
    __name: "index",
    setup(f) {
        const {goBack: o, onClickUrl: b, CollectionList: r, getServiceList: h, getIcons: l, List: v} = Ce({
            ServerType: 1
        })
          , $ = history.state.itemId
          , s = ne({
            typeId: $
        });
        return F(async () => {
            h(s)
        }
        ),
        (g, R) => {
            const c = D("NavBar")
              , d = ue("lazy");
            return a(),
            i("div", ri, [e("div", ci, [u(c, {
                title: g.$t("poxyServer"),
                class: "main",
                "left-arrow": "",
                onClickLeft: n(o)
            }, null, 8, ["title", "onClickLeft"]), e("div", di, [ae(e("img", _i, null, 512), [[d, n(l)("promotion", "serverbg")]])])]), u(n(v), {
                list: n(r),
                onOnClick: n(b)
            }, null, 8, ["list", "onOnClick"])])
        }
    }
});
const vi = V(ui, [["__scopeId", "data-v-49bd7182"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/promotion/Server/ServiceCollection/index.vue"]])
  , il = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: vi
}, Symbol.toStringTag, {
    value: "Module"
}))
  , mi = {
    class: "invitation"
}
  , pi = {
    class: "invitation-item"
}
  , hi = {
    class: "name"
}
  , $i = {
    class: "uid"
}
  , yi = {
    key: 0
}
  , fi = {
    class: "money"
}
  , bi = {
    key: 1
}
  , gi = {
    class: "money"
}
  , ki = {
    key: 2
}
  , wi = {
    class: "money"
}
  , Ci = {
    key: 3
}
  , Ti = {
    class: "money turnover"
}
  , Ri = {
    key: 4
}
  , Di = E({
    __name: "index",
    setup(f) {
        const {query: o, partnerList: b, goBack: r} = we()
          , {t: h} = Q();
        return (l, v) => {
            const $ = D("NavBar");
            return a(),
            i("div", mi, [u($, {
                title: l.$t("inviteRecord"),
                "left-arrow": "",
                onClickLeft: n(r)
            }, null, 8, ["title", "onClickLeft"]), u(me, {
                distance: 60,
                api: n(at),
                list: n(b),
                "onUpdate:list": v[0] || (v[0] = s => pe(b) ? b.value = s : null),
                "page-query": n(o),
                "onUpdate:pageQuery": v[1] || (v[1] = s => pe(o) ? o.value = s : null),
                isAutoLoad: !0
            }, {
                content: x( () => [e("ul", null, [(a(!0),
                i(H, null, O(n(b), s => (a(),
                i("li", pi, [e("p", null, [e("span", hi, t(s.nickName), 1), p(), e("span", $i, "UID:" + t(s.userId), 1)]), e("p", null, [e("span", null, t(l.$t("registerTime")), 1), p(), e("span", null, t(s.registerTime), 1)]), s.firstAmount > -1 ? (a(),
                i("p", yi, [e("span", null, t(l.$t("deposit1a")), 1), p(), e("span", fi, t(n(Y)(s.firstAmount)), 1)])) : N("v-if", !0), s.secondAmount > -1 ? (a(),
                i("p", bi, [e("span", null, t(l.$t("deposit2a")), 1), p(), e("span", gi, t(n(Y)(s.secondAmount)), 1)])) : N("v-if", !0), s.thirdAmount > -1 ? (a(),
                i("p", ki, [e("span", null, t(l.$t("deposit3a")), 1), p(), e("span", wi, t(n(Y)(s.thirdAmount)), 1)])) : N("v-if", !0), s.status < 2 ? (a(),
                i("p", Ci, [e("span", null, t(l.$t("turnover")), 1), e("span", Ti, t(n(Y)(s.turnover)), 1)])) : (a(),
                i("p", Ri, [e("span", null, t(n(h)("statusMay")), 1), p(), e("span", {
                    class: se(["status", {
                        isRecharge: s.status == 2
                    }])
                }, t(s.status == 3 ? n(h)("rewardExpired") : n(h)("bounsReceived")), 3)]))]))), 256))])]),
                _: 1
            }, 8, ["api", "list", "page-query"])])
        }
    }
});
const Si = V(Di, [["__scopeId", "data-v-09881eb5"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/promotion/TeamPartner/Invitation/index.vue"]])
  , ll = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Si
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Se = f => (Z("data-v-56f58e4b"),
f = f(),
ee(),
f)
  , Li = {
    class: "TeamReportDetail__C"
}
  , Ai = {
    class: "TeamReportDetail__C-head"
}
  , Ii = {
    class: "TeamReportDetail__C-head-top"
}
  , Mi = Se( () => e("span", null, "8729837", -1))
  , Yi = {
    class: "TeamReportDetail__C-head-detail"
}
  , Ni = {
    class: "TeamReportDetail__C-head-detail-lv"
}
  , Bi = {
    class: "TeamReportDetail__C-head-detail-commission"
}
  , Pi = {
    class: "TeamReportDetail__C-head-detail-time"
}
  , ji = Se( () => e("div", {
    class: "TeamReportDetail__C-img"
}, null, -1))
  , Hi = {
    class: "TeamReportDetail__C-detail"
}
  , Oi = E({
    __name: "index",
    setup(f) {
        const {t: o} = Q();
        $e();
        const b = G()
          , r = S({
            name: "ace***@gmail.com",
            level: 1,
            commission: 1e5,
            time: "2022-05-87",
            list: [{
                name: o("commissionLottery"),
                money: 88888.88
            }, {
                name: o("commissionElectric"),
                money: 88888.88
            }, {
                name: o("commissionLive"),
                money: 88888.88
            }]
        })
          , h = () => {
            b.go(-1)
        }
        ;
        return F( () => {}
        ),
        (l, v) => {
            const $ = D("NavBar");
            return a(),
            i("div", Li, [u($, {
                title: l.$t("details"),
                "left-arrow": "",
                onClickLeft: h
            }, null, 8, ["title"]), e("div", Ai, [e("div", Ii, [p(t(r.value.name) + " ", 1), Mi]), e("div", Yi, [e("div", Ni, [p(t(l.$t("friendsGrade")), 1), e("span", null, t(r.value.level), 1)]), e("div", Bi, [p(t(l.$t("commissionAmount")), 1), e("span", null, t(n(Y)(r.value.commission)), 1)]), e("div", Pi, [p(t(l.$t("time")), 1), e("span", null, t(r.value.time), 1)])])]), ji, e("div", Hi, [(a(!0),
            i(H, null, O(r.value.list, (s, g) => (a(),
            i("div", {
                key: g,
                class: "TeamReportDetail__C-detail-item"
            }, [p(t(s.name) + " ", 1), e("span", null, t(n(Y)(s.money)), 1)]))), 128))])])
        }
    }
});
const Ui = V(Oi, [["__scopeId", "data-v-56f58e4b"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/promotion/TeamReport/TeamReportDetail/index.vue"]])
  , rl = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Ui
}, Symbol.toStringTag, {
    value: "Module"
}));
export {De as S, Fi as a, Qi as b, Xi as c, Wi as d, Ji as e, Ki as f, Zi as g, el as h, Gi as i, tl as j, nl as k, ol as l, sl as m, al as n, il as o, ll as p, rl as q};
