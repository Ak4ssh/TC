import {_ as se, K as ge, r as m, P as ae, J as G, G as te, A as re, ad as oe, a2 as q, j as B, a6 as p, l as a, H as u, a0 as v, a1 as $, ae as me, aa as O, ak as W, am as pe, a7 as ne, aR as _e, n as _, O as fe, B as X, af as be, ag as we, o as T, a8 as he, aB as ye, aS as Se, aT as Ee, a9 as J} from "./modules-cd512936.js";
import {c as Fe, V as $e, P as Q, S as ke, E as Ae, b as Me, d as xe} from "./page-login-114e3a11.js";
import {S as Ne, u as ie, c7 as ce, A as H, ba as Ve, bb as Ie, s as Te, G as le, bf as Re, co as Ce, _ as ue, bh as Oe, aX as qe, cp as Ue} from "./page-activity-6419d9db.js";
import {v as z, a as ve} from "./page-home-f9627abf.js";
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
window.getBuildInfo = function() {
    return {
        buildTime: "10/17/2024, 5:19:05 PM",
        branch: "origin/masterBranch/gamesass-2.24 commitId:a6695421420442101069f45a86b32452d0d38495"
    }
}
;
const Ge = w => (be("data-v-e26f70e7"),
w = w(),
we(),
w)
  , He = ["onKeydown"]
  , Le = {
    class: "tip"
}
  , je = {
    key: 0,
    class: "red"
}
  , Ke = {
    key: 1,
    class: "red"
}
  , Je = {
    class: "register__container-tip"
}
  , ze = Ge( () => a("div", {
    class: "tipbg"
}, null, -1))
  , We = {
    class: "register__container-tips"
}
  , Xe = {
    class: "register__container-invitation"
}
  , Qe = {
    class: "register__container-invitation__label"
}
  , Ye = {
    class: "register__container-invitation__input"
}
  , Ze = ["placeholder", "disabled"]
  , et = {
    class: "register__container-remember"
}
  , tt = {
    class: "register__container-button"
}
  , st = {
    class: "account"
}
  , at = {
    class: "loginin"
}
  , rt = se({
    __name: "Register",
    props: {
        registerData: {
            type: Object,
            required: !0
        }
    },
    setup(w, {expose: M}) {
        const y = w
          , {t: e} = ge()
          , g = Ne()
          , o = ie()
          , n = m(!1)
          , t = m({
            number: "",
            numberType: o.rPwdForm.numberType,
            smsvcode: "",
            password: "",
            rePassword: "",
            invitecode: "",
            registerType: "mobile"
        })
          , S = m("register");
        t.value.number = "",
        sessionStorage.getItem("register_a") && (t.value = JSON.parse(sessionStorage.getItem("register_a") || ""),
        sessionStorage.setItem("register_a", ""));
        const k = ae()
          , I = m(!1)
          , i = m(!1)
          , b = G( () => {
            var s, r, f;
            return !!((s = k.currentRoute.value.query) != null && s.invitationCode || (f = (r = k.currentRoute.value.query) == null ? void 0 : r.r_code) != null && f.toString() || sessionStorage.getItem("invitecode"))
        }
        )
          , R = G( () => y.registerData.isInvitecode == "1" ? e("plsEnterInvitationCode") : e("notNecessary"))
          , C = {}.VITE_SHOWREGISTERTIP || !1;
        te( () => t.value.number, s => {
            o.setCountDown(0)
        }
        , {
            flush: "post"
        }),
        te( () => o.rPwdForm.numberType, s => {
            !t.value.numberType && (t.value.numberType = s)
        }
        , {
            flush: "post"
        });
        function E() {
            k.push({
                name: "login"
            })
        }
        const A = async () => {
            if (!ce(t.value.numberType, t.value.number.trim().length))
                return o.setCountDown(0),
                _({
                    message: e("wrongTel"),
                    wordBreak: "break-word"
                });
            await H(Ve({
                phone: t.value.numberType.replace("+", "") + t.value.number,
                codeType: Ie.Registr
            })) ? fe(e("sendSuccess")) : setTimeout( () => {
                o.setCountDown(0)
            }
            , 500)
        }
          , x = G( () => {
            var F;
            let s = e("regTip2").match(/\d+/);
            "" + t.value.numberType;
            const r = (F = g.getAreaPhoneLenList.find(c => (c == null ? void 0 : c.area) == "+" + t.value.numberType)) == null ? void 0 : F.len;
            let f = 9;
            return (r == null ? void 0 : r.indexOf("-")) != -1 ? f = r == null ? void 0 : r.toString().split("-")[0] : f = r,
            s ? s[0].substr(0, f) : ""
        }
        )
          , N = s => {
            const r = s.target;
            r.value = r.value.replace(/[\s\n\t\r]/g, "")
        }
          , h = async () => {
            if (!ce(t.value.numberType, t.value.number.trim().length))
                return _({
                    message: e("wrongTel"),
                    wordBreak: "break-word"
                });
            if (t.value.number.charAt(0) === "0" && t.value.numberType == "62")
                return _({
                    message: e("registerNumberTip"),
                    wordBreak: "break-word"
                });
            if (y.registerData.registerMobileState !== "1")
                return _({
                    message: e("registerClose"),
                    wordBreak: "break-word"
                });
            if (!t.value.number.trim() || I.value) {
                I.value = !0;
                return
            }
            if (y.registerData.isOpenRegisterSMS !== "0")
                if (t.value.smsvcode.trim()) {
                    if (t.value.smsvcode.trim().length != 6)
                        return _({
                            message: e("verifyCode6Digits"),
                            wordBreak: "break-word"
                        })
                } else
                    return _({
                        message: e("registerTip1"),
                        wordBreak: "break-word"
                    });
            if (!t.value.password.trim())
                return _({
                    message: e("registerTip2"),
                    wordBreak: "break-word"
                });
            if (!z.passReg3.test(t.value.password)) {
                n.value = !0;
                return
            }
            if (!t.value.rePassword.trim())
                return _({
                    message: e("registerTip3"),
                    wordBreak: "break-word"
                });
            if (t.value.rePassword !== t.value.password) {
                i.value = !0;
                return
            } else
                i.value = !1;
            if (!o.userForm.termAndPolicy)
                return _({
                    message: e("registerDesc1"),
                    wordBreak: "break-word"
                });
            y.registerData.hasRegisterCaptcha === "1" ? V() : D("")
        }
          , L = s => {
            t.value.numberType = s
        }
          , j = s => {
            t.value.number = s
        }
          , K = () => {
            Se("toPath", "ResetPassword"),
            k.push({
                name: "About-AboutDetail"
            })
        }
          , l = m()
          , d = m("")
          , D = async s => {
            X(async () => {
                l.value.startRequestVerify();
                const {number: r, numberType: f, smsvcode: F, password: c, invitecode: Y} = t.value;
                let U = {
                    username: f.replace("+", "") + r,
                    smsvcode: F,
                    registerType: t.value.registerType,
                    pwd: c,
                    invitecode: Y,
                    domainurl: window.location.hostname,
                    phonetype: Te(),
                    captchaId: d.value,
                    track: s,
                    deviceId: localStorage.getItem("arvId") || ""
                };
                o.register(U).then(async P => {
                    var de;
                    if (P) {
                        const Pe = le()
                          , {token: Z, tokenHeader: De} = P == null ? void 0 : P.data;
                        Pe.setToken(Z),
                        localStorage.setItem("tokenHeader", De),
                        localStorage.setItem("numberType", o.getUserForm.numberType),
                        localStorage.setItem("number", o.userForm.number),
                        k.replace("/"),
                        await o.getUserInfo({
                            signature: Z
                        });
                        const ee = await o.getUserInfo({
                            signature: Z
                        })
                          , {onTriggerRegister: Be} = Ce();
                        Be((de = ee == null ? void 0 : ee.data) == null ? void 0 : de.userId)
                    }
                }
                ).catch(P => {}
                ).finally( () => {
                    var P;
                    (P = l.value) == null || P.setShowHiden(!1)
                }
                )
            }
            )
        }
          , V = async () => {
            X(async () => {
                l.value.startRequestGenerate();
                const s = await H(Re());
                s ? (d.value = s.data.captchaId,
                l.value.endRequestGenerate(s.data.backgroundImage, s.data.sliderImage)) : l.value.endRequestGenerate(null, null)
            }
            )
        }
        ;
        return re( () => {
            var r, f;
            o.setCountDown(0);
            const s = ((r = k.currentRoute.value.query.invitationCode) == null ? void 0 : r.toString()) || ((f = k.currentRoute.value.query.r_code) == null ? void 0 : f.toString()) || sessionStorage.getItem("invitecode") || "";
            s && (t.value.invitecode = s,
            sessionStorage.setItem("invitecode", s)),
            o.getIp()
        }
        ),
        oe( (s, r) => {
            s.name == "About-AboutDetail" ? sessionStorage.setItem("register_a", JSON.stringify(t.value)) : sessionStorage.setItem("register_a", "")
        }
        ),
        M({
            showPhoneValidate: I
        }),
        (s, r) => {
            const f = q("svg-icon")
              , F = q("van-checkbox");
            return T(),
            B("div", {
                class: "register__container",
                onKeydown: _e(h, ["enter"])
            }, [p(Fe, {
                "show-validate": I.value,
                "onUpdate:showValidate": r[0] || (r[0] = c => I.value = c),
                number: t.value.number,
                "onUpdate:number": r[1] || (r[1] = c => t.value.number = c),
                "number-type": t.value.numberType,
                type: S.value,
                onChangeT: L,
                onChangeN: j,
                typeP: "register"
            }, null, 8, ["show-validate", "number", "number-type", "type"]), a("div", Le, [u(C) ? (T(),
            B("span", je, v(u(e)("regTip1")), 1)) : $("v-if", !0), u(C) ? (T(),
            B("p", Ke, v(x.value), 1)) : $("v-if", !0)]), s.registerData.isOpenRegisterSMS !== "0" ? (T(),
            me($e, {
                key: 0,
                value: t.value.smsvcode,
                "onUpdate:value": r[2] || (r[2] = c => t.value.smsvcode = c),
                sendFunc: A,
                number: t.value.number,
                numberType: t.value.numberType
            }, null, 8, ["value", "number", "numberType"])) : $("v-if", !0), p(Q, {
                value: t.value.password,
                "onUpdate:value": r[3] || (r[3] = c => t.value.password = c),
                label: u(e)("setPsw")
            }, null, 8, ["value", "label"]), O(a("div", Je, [ze, a("span", null, v(u(e)("pswRule")), 1)], 512), [[W, n.value]]), p(Q, {
                value: t.value.rePassword,
                "onUpdate:value": r[4] || (r[4] = c => t.value.rePassword = c),
                label: u(e)("comfirmPsw")
            }, null, 8, ["value", "label"]), O(a("div", We, [a("span", null, v(u(e)("unmatchedInput")), 1)], 512), [[W, i.value]]), a("div", Xe, [a("div", Qe, [p(f, {
                name: "invitation"
            }), a("span", null, v(u(e)("invitationCode")), 1)]), a("div", Ye, [O(a("input", {
                type: "text",
                "auto-complete": "new-password",
                autocomplete: "off",
                name: "userNumber",
                "onUpdate:modelValue": r[5] || (r[5] = c => t.value.invitecode = c),
                placeholder: R.value,
                disabled: b.value,
                maxlength: "20",
                onInput: N
            }, null, 40, Ze), [[pe, t.value.invitecode, void 0, {
                trim: !0
            }]])])]), a("div", et, [p(F, {
                modelValue: u(o).userForm.termAndPolicy,
                "onUpdate:modelValue": r[7] || (r[7] = c => u(o).userForm.termAndPolicy = c)
            }, {
                default: ne( () => [he(v(u(e)("readNagree")) + " ", 1), a("span", {
                    onClick: r[6] || (r[6] = ye(c => K(), ["stop"]))
                }, v(u(e)("desPrivacy")), 1)]),
                _: 1
            }, 8, ["modelValue"])]), a("div", tt, [a("button", {
                onClick: function() {
                    window.location.href = "https://9987up.vip/#/register?invitationCode=611487213119";
                }
            }, v(u(e)("register")), 1), a("button", {
                class: "login",
                onClick: E
            }, [a("div", st, v(u(e)("iHaveAcount")), 1), a("div", at, v(u(e)("goLogin")), 1)])]), p(ke, {
                ref_key: "captchaRef",
                ref: l,
                "refresh-color": "#FFFFFF",
                "show-refresh": !0,
                onFinish: D,
                onRefresh: V
            }, null, 512)], 40, He)
        }
    }
});
const ot = ue(rt, [["__scopeId", "data-v-e26f70e7"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Login/Register.vue"]])
  , nt = w => (be("data-v-1679e191"),
w = w(),
we(),
w)
  , it = ["onKeydown"]
  , lt = {
    class: "register__container-tip"
}
  , ut = nt( () => a("div", {
    class: "tipbg"
}, null, -1))
  , dt = {
    class: "register__container-tips"
}
  , ct = {
    class: "register__container-invitation"
}
  , vt = {
    class: "register__container-invitation__label"
}
  , gt = {
    class: "register__container-invitation__input"
}
  , mt = ["placeholder", "disabled"]
  , pt = {
    class: "register__container-remember"
}
  , _t = {
    class: "register__container-button"
}
  , ft = {
    class: "account"
}
  , bt = {
    class: "loginin"
}
  , wt = se({
    __name: "EmailRegister",
    props: {
        registerData: {
            type: Object,
            required: !0
        }
    },
    setup(w, {expose: M}) {
        const y = w
          , {t: e} = ge()
          , g = m(!1)
          , o = ie()
          , n = m({
            smsvcode: "",
            password: "",
            rePassword: "",
            invitecode: "",
            email: "",
            registerType: "email"
        })
          , t = m("register");
        sessionStorage.getItem("register") && (n.value = JSON.parse(sessionStorage.getItem("register") || ""),
        sessionStorage.setItem("register", ""));
        const S = ae()
          , k = m(!1)
          , I = m(!1)
          , i = G( () => {
            var l;
            return !!((l = S.currentRoute.value.query) != null && l.invitationCode)
        }
        )
          , b = G( () => y.registerData.isInvitecode == "1" ? e("plsEnterInvitationCode") : e("notNecessary"));
        te( () => n.value.email, l => {
            o.setCountDown(0)
        }
        , {
            flush: "post"
        });
        function R() {
            S.push({
                name: "login"
            })
        }
        const C = async () => {
            if (!z.email1.test(n.value.email))
                return o.setCountEmailDown(0),
                _({
                    message: e(ve.email),
                    wordBreak: "break-word"
                });
            await H(Oe({
                email: n.value.email,
                emailType: Ie.Registr
            })) ? fe(e("sendSuccess")) : o.setCountEmailDown(0)
        }
          , E = l => {
            const d = l.target;
            d.value = d.value.replace(/[\s\n\t\r]/g, "")
        }
          , A = async () => {
            if (y.registerData.registerEmailState !== "1")
                return _({
                    message: e("registerClose"),
                    wordBreak: "break-word"
                });
            if (y.registerData.isOpenRegisterEmail !== "0")
                if (n.value.smsvcode.trim()) {
                    if (n.value.smsvcode.trim().length != 6)
                        return _({
                            message: e("verifyCode6Digits"),
                            wordBreak: "break-word"
                        })
                } else
                    return _({
                        message: e("registerTip6"),
                        wordBreak: "break-word"
                    });
            if (!z.email1.test(n.value.email))
                return _({
                    message: e(ve.email),
                    wordBreak: "break-word"
                });
            if (!n.value.password.trim())
                return _({
                    message: e("registerTip2"),
                    wordBreak: "break-word"
                });
            if (!z.passReg3.test(n.value.password)) {
                g.value = !0;
                return
            }
            if (!n.value.rePassword.trim())
                return _({
                    message: e("registerTip3"),
                    wordBreak: "break-word"
                });
            if (n.value.rePassword !== n.value.password) {
                I.value = !0;
                return
            } else
                I.value = !1;
            if (!o.userForm.termAndPolicy)
                return _({
                    message: e("registerDesc1"),
                    wordBreak: "break-word"
                });
            y.registerData.hasRegisterCaptcha === "1" ? K() : j("")
        }
          , x = l => {
            n.value.email = l
        }
          , N = () => {
            Se("toPath", "ResetPassword"),
            S.push({
                name: "About-AboutDetail"
            })
        }
          , h = m()
          , L = m("")
          , j = async l => {
            X(async () => {
                h.value.startRequestVerify();
                const {smsvcode: d, password: D, invitecode: V} = n.value;
                let s = {
                    username: n.value.email,
                    smsvcode: d,
                    registerType: n.value.registerType,
                    pwd: D,
                    invitecode: V,
                    domainurl: window.location.hostname,
                    phonetype: Te(),
                    captchaId: L.value,
                    track: l,
                    deviceId: localStorage.getItem("arvId") || ""
                };
                o.register(s).then(async r => {
                    var f;
                    if (r) {
                        const F = le()
                          , {token: c, tokenHeader: Y} = r == null ? void 0 : r.data;
                        F.setToken(c),
                        localStorage.setItem("tokenHeader", Y),
                        localStorage.setItem("numberType", o.getUserForm.numberType),
                        localStorage.setItem("number", o.userForm.number),
                        S.replace("/");
                        const U = await o.getUserInfo({
                            signature: c
                        })
                          , {onTriggerRegister: P} = Ce();
                        P((f = U == null ? void 0 : U.data) == null ? void 0 : f.userId)
                    }
                }
                ).catch(r => {}
                ).finally( () => {
                    h.value.setShowHiden(!1)
                }
                )
            }
            )
        }
          , K = async () => {
            X(async () => {
                h.value.startRequestGenerate();
                const l = await H(Re());
                l ? (L.value = l.data.captchaId,
                h.value.endRequestGenerate(l.data.backgroundImage, l.data.sliderImage)) : h.value.endRequestGenerate(null, null)
            }
            )
        }
        ;
        return re( () => {
            var d, D;
            o.setCountEmailDown(0);
            const l = ((d = S.currentRoute.value.query.invitationCode) == null ? void 0 : d.toString()) || ((D = S.currentRoute.value.query.r_code) == null ? void 0 : D.toString()) || sessionStorage.getItem("invitecode") || "";
            l && (n.value.invitecode = l)
        }
        ),
        oe( (l, d) => {
            l.name == "About-AboutDetail" ? sessionStorage.setItem("register", JSON.stringify(n.value)) : sessionStorage.setItem("register", "")
        }
        ),
        M({
            showPhoneValidate: k
        }),
        (l, d) => {
            const D = q("svg-icon")
              , V = q("van-checkbox");
            return T(),
            B("div", {
                class: "register__container",
                onKeydown: _e(A, ["enter"])
            }, [p(Ae, {
                ref: "email",
                type: t.value,
                email: n.value.email,
                onChangeN: x
            }, null, 8, ["type", "email"]), l.registerData.isOpenRegisterEmail !== "0" ? (T(),
            me(Me, {
                key: 0,
                value: n.value.smsvcode,
                "onUpdate:value": d[0] || (d[0] = s => n.value.smsvcode = s),
                sendFunc: C,
                email: n.value.email
            }, null, 8, ["value", "email"])) : $("v-if", !0), p(Q, {
                value: n.value.password,
                "onUpdate:value": d[1] || (d[1] = s => n.value.password = s),
                label: u(e)("setPsw")
            }, null, 8, ["value", "label"]), O(a("div", lt, [ut, a("span", null, v(u(e)("pswRule")), 1)], 512), [[W, g.value]]), p(Q, {
                value: n.value.rePassword,
                "onUpdate:value": d[2] || (d[2] = s => n.value.rePassword = s),
                label: u(e)("comfirmPsw")
            }, null, 8, ["value", "label"]), O(a("div", dt, [a("span", null, v(u(e)("unmatchedInput")), 1)], 512), [[W, I.value]]), a("div", ct, [a("div", vt, [p(D, {
                name: "invitation"
            }), a("span", null, v(u(e)("invitationCode")), 1)]), a("div", gt, [O(a("input", {
                type: "text",
                "auto-complete": "new-password",
                autocomplete: "off",
                name: "userNumber",
                "onUpdate:modelValue": d[3] || (d[3] = s => n.value.invitecode = s),
                placeholder: b.value,
                disabled: i.value,
                maxlength: "20",
                onInput: E
            }, null, 40, mt), [[pe, n.value.invitecode, void 0, {
                trim: !0
            }]])])]), a("div", pt, [p(V, {
                modelValue: u(o).userForm.termAndPolicy,
                "onUpdate:modelValue": d[5] || (d[5] = s => u(o).userForm.termAndPolicy = s)
            }, {
                default: ne( () => [he(v(u(e)("readNagree")) + " ", 1), a("span", {
                    onClick: d[4] || (d[4] = ye(s => N(), ["stop"]))
                }, v(u(e)("desPrivacy")), 1)]),
                _: 1
            }, 8, ["modelValue"])]), a("div", _t, [a("button", {
                onClick: function() {
                    window.location.href = "https://9987up.vip/#/register?invitationCode=611487213119";
                }
            }, v(u(e)("register")), 1), a("button", {
                class: "login",
                onClick: R
            }, [a("div", ft, v(u(e)("iHaveAcount")), 1), a("div", bt, v(u(e)("goLogin")), 1)])]), p(ke, {
                ref_key: "captchaRef",
                ref: h,
                "refresh-color": "#FFFFFF",
                "show-refresh": !0,
                onFinish: j,
                onRefresh: K
            }, null, 512)], 40, it)
        }
    }
});
const ht = ue(wt, [["__scopeId", "data-v-1679e191"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/components/Login/EmailRegister.vue"]])
  , yt = {
    class: "resgister__C"
}
  , St = {
    class: "resgister__C-heading"
}
  , kt = {
    class: "resgister__C-heading__title"
}
  , It = {
    class: "resgister__C-heading__subTitle"
}
  , Tt = {
    class: "login_container-tab"
}
  , Rt = {
    class: "resgister__C-form"
}
  , Ct = se({
    __name: "index",
    setup(w) {
        const {openAll: M} = qe()
          , y = le()
          , e = ie();
        m("");
        const g = m({
            isRegisterState: "1",
            SMSstate: "0",
            registerStateMsg: "",
            hasRegisterCaptcha: "0",
            registerEmailState: "0",
            registerMobileState: "0",
            isOpenRegisterSMS: "0",
            isOpenRegisterEmail: "0",
            isInvitecode: "0"
        })
          , o = m("phone")
          , n = ae();
        y.token && n.push({
            name: "home"
        });
        const t = i => {
            o.value = i
        }
        ;
        oe( (i, b, R) => {
            R(),
            i.name === "home" && M()
        }
        );
        const S = m();
        function k() {
            n.push({
                name: "home"
            })
        }
        async function I() {
            var b, R, C, E, A, x, N, h;
            const i = await H(Ue());
            i && (g.value.isRegisterState = i.data.registerState,
            g.value.registerStateMsg = i.data.registerStateMsg,
            g.value.registerEmailState = i.data.registerEmailState,
            g.value.registerMobileState = (b = i.data) == null ? void 0 : b.registerMobileState,
            g.value.isOpenRegisterSMS = (R = i.data) == null ? void 0 : R.isOpenRegisterSMS,
            g.value.isOpenRegisterEmail = (C = i.data) == null ? void 0 : C.isOpenRegisterEmail,
            g.value.hasRegisterCaptcha = i.data.isOpenRegisterCaptcha,
            g.value.isInvitecode = (E = i.data) == null ? void 0 : E.isInvitecode,
            e.setTermAndPolicy(((A = i.data) == null ? void 0 : A.registerPrivacyChecked) === "1"),
            Number(i.data.registerEmailState) + Number((x = i.data) == null ? void 0 : x.registerMobileState) == 0 ? (((N = i.data) == null ? void 0 : N.isOpenRegisterSMS) !== "1" && (o.value = "email"),
            n.push({
                name: "login"
            })) : (g.value.registerSMSState = i.data.registerSMSState,
            g.value.registerEmailState !== "0" && ((h = i.data) == null ? void 0 : h.registerMobileState) == "0" && (o.value = "email")))
        }
        return I(),
        re( () => {
            localStorage.getItem("arvId") || Ee.load().then(i => {
                i.get().then(b => {
                    localStorage.setItem("arvId", b.visitorId)
                }
                )
            }
            ).catch(i => {
                console.error("Error generating fingerprint:", i)
            }
            )
        }
        ),
        (i, b) => {
            const R = q("NavBar")
              , C = q("svg-icon");
            return T(),
            B("div", yt, [p(R, {
                onClickLeft: k,
                leftArrow: !0,
                headLogo: !0,
                class: "main"
            }, {
                right: ne( () => [p(xe)]),
                _: 1
            }), a("div", St, [a("h1", kt, v(i.$t("register")), 1), a("div", It, [a("span", null, v(i.$t("registerbyphoneoremail")), 1)])]), a("div", Tt, [g.value.registerMobileState != "0" ? (T(),
            B("div", {
                key: 0,
                class: J(["tab", [o.value == "phone" ? "active" : ""]]),
                onClick: b[0] || (b[0] = E => t("phone"))
            }, [p(C, {
                name: "phone"
            }), a("div", null, v(i.$t("phoneregister")), 1)], 2)) : $("v-if", !0), g.value.registerEmailState != "0" ? (T(),
            B("div", {
                key: 1,
                class: J(["tab", [o.value == "email" ? "active" : ""]]),
                onClick: b[1] || (b[1] = E => t("email"))
            }, [p(C, {
                name: "email"
            }), a("div", null, v(i.$t("emailregister")), 1)], 2)) : $("v-if", !0)]), a("div", Rt, [g.value.registerMobileState != "0" ? (T(),
            B("div", {
                key: 0,
                class: J(["tab-content", [o.value == "phone" ? "activecontent" : ""]])
            }, [p(ot, {
                ref_key: "register",
                ref: S,
                registerData: g.value
            }, null, 8, ["registerData"])], 2)) : $("v-if", !0), g.value.registerEmailState != "0" ? (T(),
            B("div", {
                key: 1,
                class: J(["tab-content", [o.value == "email" ? "activecontent" : ""]])
            }, [p(ht, {
                ref_key: "register",
                ref: S,
                registerData: g.value
            }, null, 8, ["registerData"])], 2)) : $("v-if", !0)])])
        }
    }
});
const Kt = ue(Ct, [["__scopeId", "data-v-4752d5f1"], ["__file", "/var/lib/jenkins/workspace/web-印度-TC-webnew/src/views/register/index.vue"]]);
export {Kt as default};
