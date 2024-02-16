import {
    d as ae,
    s as de,
    e as fe,
    f as ue
} from "../chunks/scheduler.MCvrEMjg.js";
import {
    S as he,
    i as pe,
    e as r,
    s as y,
    b as V,
    c,
    d as I,
    h as k,
    m as $,
    f as P,
    g as w,
    n as o,
    j as ce,
    k as l,
    o as me,
    l as se,
    t as Z,
    a as ie,
    p as xe,
    q as oe,
    r as ve
} from "../chunks/index.DJW5SphT.js";

function be(u) {
    const t = u - 1;
    return t * t * t + 1
}

function ne(u, {
    delay: t = 0,
    duration: s = 400,
    easing: e = be,
    x: i = 0,
    y: n = 0,
    opacity: C = 0
} = {}) {
    const h = getComputedStyle(u),
        D = +h.opacity,
        S = h.transform === "none" ? "" : h.transform,
        m = D * (1 - C),
        [U, B] = ae(i),
        [d, x] = ae(n);
    return {
        delay: t,
        duration: s,
        easing: e,
        css: (q, H) => `
			transform: ${S} translate(${(1-q)*U}${B}, ${(1-q)*d}${x});
			opacity: ${D-m*H}`
    }
}

function re(u) {
    let t, s = `<h1 class="text-4xl font-bold">Available Commands</h1> <div class="divider"></div> <div class="flex flex-col gap-5"><div class="collapse collapse-arrow bg-accent rounded-box"><input type="checkbox" checked=""/> <div class="collapse-title text-xl font-medium">/about</div> <div class="collapse-content"><p class="text-lg">Step into the cryptic world of 410 Error, where whispers echo through the blockchain
								corridors. It&#39;s not merely a token – it&#39;s a veiled cipher, a clandestine mark of
								unity amidst the chaos. Devoid of conventional functions, 410 Error draws you into a
								labyrinthine community, bound by an insatiable hunger for enigma. What arcane truths
								lie concealed within its code? That&#39;s the enigma we&#39;re all compelled to decrypt.
								Embrace the obscurity and embark on a journey into the shadows with us. Welcome to
								410 Error – where mysteries entwine and reality fades into whispers.</p></div></div> <div class="collapse collapse-arrow bg-accent rounded-box"><input type="checkbox"/> <div class="collapse-title text-xl font-medium">/tokenomics</div> <div class="collapse-content"><ul class="list list-disc list-inside leading-relaxed font-medium text-lg"><li>Total Supply: 1B</li> <li>Buy Tax: 2%</li> <li>Sell Tax: 2%</li> <li>LP Safety: Locked</li></ul></div></div> <div class="collapse collapse-arrow bg-accent rounded-box"><input type="checkbox"/> <div class="collapse-title text-xl font-medium">/links</div> <div class="collapse-content"><div class="flex flex-row items-center gap-5"><ul class="list list-disc ml-5 font-medium leading-relaxed text-lg"><li><a href="https://app.uniswap.org/swap?outputCurrency=0x8a57Bc4fb8BCDF32180e98F511a264dB5a24A879&amp;chain=ethereum" target="_blank" class="link-hover">/uniswap</a></li> <li><a href="https://dexscreener.com/ethereum/0x6f2f537aa9ffd9da15178f8febbe717b5a8bb043" target="_blank" class="link-hover">/dexscreener</a></li> <li><a href="https://www.dextools.io/app/en/ether/pair-explorer/0x6f2f537aa9ffd9da15178f8febbe717b5a8bb043?t=1708052510388" target="_blank" class="link-hover">/dextools</a></li> <li><a href="https://dexspy.io/eth/token/0x8a57bc4fb8bcdf32180e98f511a264db5a24a879" target="_blank" class="link-hover">/dexspy</a></li> <li><a href="https://etherscan.io/token/0x8a57bc4fb8bcdf32180e98f511a264db5a24a879" target="_blank" class="link-hover">/etherscan</a></li></ul></div></div></div> <div class="collapse collapse-arrow bg-accent rounded-box"><input type="checkbox"/> <div class="collapse-title text-xl font-medium">/socials</div> <div class="collapse-content"><div class="flex flex-row items-center gap-5"><ul class="list list-disc ml-5 font-medium leading-relaxed text-lg"><li><a href="https://t.me/GONEERC" target="_blank" class="link-hover">/telegram</a></li> <li><a href="https://x.com/goneerror410?s=21&amp;t=l2U_VecVY9w0cQMHr76iyg" target="_blank" class="link-hover">/twitter-x</a></li></ul></div></div></div></div>`,
        e, i;
    return {
        c() {
            t = r("div"), t.innerHTML = s, this.h()
        },
        l(n) {
            t = c(n, "DIV", {
                id: !0,
                class: !0,
                "data-svelte-h": !0
            }), $(t) !== "svelte-1rfoezt" && (t.innerHTML = s), this.h()
        },
        h() {
            o(t, "id", "scroll"), o(t, "class", "flex flex-col p-10 rounded-box border-2 border-primary h-full overflow-auto")
        },
        m(n, C) {
            ce(n, t, C), i = !0
        },
        i(n) {
            i || (n && ue(() => {
                i && (e || (e = oe(t, ne, {
                    x: 50,
                    duration: 500
                }, !0)), e.run(1))
            }), i = !0)
        },
        o(n) {
            n && (e || (e = oe(t, ne, {
                x: 50,
                duration: 500
            }, !1)), e.run(0)), i = !1
        },
        d(n) {
            n && w(t), n && e && e.end()
        }
    }
}

function _e(u) {
    let t, s, e, i, n, C, h, D = "This page can't be found",
        S, m, U = "It may have been moved or deleted",
        B, d, x, q = "Please,",
        H, v, ee = "click here",
        G, b, N, L = u[0] ? "hide" : "show",
        j, W, Q, _, R, M = u[0] ? "hide" : "show",
        O, Y, J, E, te = "Http Error: 410.",
        K, X, le, a = u[0] && re();
    return {
        c() {
            t = r("div"), s = r("div"), e = r("div"), i = r("img"), C = y(), h = r("h1"), h.textContent = D, S = y(), m = r("p"), m.textContent = U, B = y(), d = r("div"), x = r("p"), x.textContent = q, H = y(), v = r("button"), v.textContent = ee, G = y(), b = r("p"), N = V("to "), j = V(L), W = V(" available commands"), Q = y(), _ = r("p"), R = V("to "), O = V(M), Y = V(" available commands"), J = y(), E = r("p"), E.textContent = te, K = y(), a && a.c(), this.h()
        },
        l(p) {
            t = c(p, "DIV", {
                class: !0
            });
            var g = I(t);
            s = c(g, "DIV", {
                class: !0
            });
            var z = I(s);
            e = c(z, "DIV", {
                class: !0
            });
            var f = I(e);
            i = c(f, "IMG", {
                src: !0,
                class: !0,
                alt: !0
            }), C = k(f), h = c(f, "H1", {
                class: !0,
                "data-svelte-h": !0
            }), $(h) !== "svelte-1n9hd4r" && (h.textContent = D), S = k(f), m = c(f, "P", {
                class: !0,
                "data-svelte-h": !0
            }), $(m) !== "svelte-1b6kw1" && (m.textContent = U), B = k(f), d = c(f, "DIV", {
                class: !0
            });
            var T = I(d);
            x = c(T, "P", {
                class: !0,
                "data-svelte-h": !0
            }), $(x) !== "svelte-yb5g98" && (x.textContent = q), H = k(T), v = c(T, "BUTTON", {
                class: !0,
                "data-svelte-h": !0
            }), $(v) !== "svelte-6pxiyq" && (v.textContent = ee), G = k(T), b = c(T, "P", {
                class: !0
            });
            var A = I(b);
            N = P(A, "to "), j = P(A, L), W = P(A, " available commands"), A.forEach(w), T.forEach(w), Q = k(f), _ = c(f, "P", {
                class: !0
            });
            var F = I(_);
            R = P(F, "to "), O = P(F, M), Y = P(F, " available commands"), F.forEach(w), J = k(f), E = c(f, "P", {
                class: !0,
                "data-svelte-h": !0
            }), $(E) !== "svelte-t4hzqo" && (E.textContent = te), f.forEach(w), K = k(z), a && a.l(z), z.forEach(w), g.forEach(w), this.h()
        },
        h() {
            fe(i.src, n = "logo.png") || o(i, "src", n), o(i, "class", "w-36"), o(i, "alt", ""), o(h, "class", "text-4xl font-bold"), o(m, "class", "text-xl text-primary font-semibold"), o(x, "class", "text-xl text-primary font-semibold"), o(v, "class", "text-xl text-primary font-semibold link-hover"), o(b, "class", "text-xl text-primary font-semibold hidden md:block"), o(d, "class", "flex flex-row items-baseline gap-1"), o(_, "class", "text-xl text-primary font-semibold block md:hidden"), o(E, "class", "text-primary uppercase"), o(e, "class", "flex flex-col w-full gap-5 md:mt-20"), o(s, "class", "grid md:grid-cols-2 gap-5 p-10 w-full max-w-7xl"), o(t, "class", "flex min-h-screen md:h-screen justify-center data-[about=true]:bg-[#081933] transition")
        },
        m(p, g) {
            ce(p, t, g), l(t, s), l(s, e), l(e, i), l(e, C), l(e, h), l(e, S), l(e, m), l(e, B), l(e, d), l(d, x), l(d, H), l(d, v), l(d, G), l(d, b), l(b, N), l(b, j), l(b, W), l(e, Q), l(e, _), l(_, R), l(_, O), l(_, Y), l(e, J), l(e, E), l(s, K), a && a.m(s, null), X || (le = me(v, "click", u[1]), X = !0)
        },
        p(p, [g]) {
            g & 1 && L !== (L = p[0] ? "hide" : "show") && se(j, L), g & 1 && M !== (M = p[0] ? "hide" : "show") && se(O, M), p[0] ? a ? g & 1 && Z(a, 1) : (a = re(), a.c(), Z(a, 1), a.m(s, null)) : a && (ve(), ie(a, 1, 1, () => {
                a = null
            }), xe())
        },
        i(p) {
            Z(a)
        },
        o(p) {
            ie(a)
        },
        d(p) {
            p && w(t), a && a.d(), X = !1, le()
        }
    }
}

function ge(u, t, s) {
    let e;
    const i = () => s(0, e = !e);
    return s(0, e = !1), [e, i]
}
class we extends he {
    constructor(t) {
        super(), pe(this, t, ge, _e, de, {})
    }
}
export {
    we as component
};