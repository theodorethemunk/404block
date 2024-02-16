import {
    s as S,
    n as _,
    b as x
} from "../chunks/scheduler.MCvrEMjg.js";
import {
    S as j,
    i as k,
    e as f,
    b as d,
    s as q,
    c as g,
    d as h,
    f as v,
    g as l,
    h as y,
    j as m,
    k as $,
    l as E
} from "../chunks/index.DJW5SphT.js";
import {
    s as C
} from "../chunks/entry.CnP2I7mz.js";
const H = () => {
        const s = C;
        return {
            page: {
                subscribe: s.page.subscribe
            },
            navigating: {
                subscribe: s.navigating.subscribe
            },
            updated: s.updated
        }
    },
    P = {
        subscribe(s) {
            return H().page.subscribe(s)
        }
    };

function w(s) {
    var b;
    let t, r = s[0].status + "",
        o, n, i, c = ((b = s[0].error) == null ? void 0 : b.message) + "",
        u;
    return {
        c() {
            t = f("h1"), o = d(r), n = q(), i = f("p"), u = d(c)
        },
        l(e) {
            t = g(e, "H1", {});
            var a = h(t);
            o = v(a, r), a.forEach(l), n = y(e), i = g(e, "P", {});
            var p = h(i);
            u = v(p, c), p.forEach(l)
        },
        m(e, a) {
            m(e, t, a), $(t, o), m(e, n, a), m(e, i, a), $(i, u)
        },
        p(e, [a]) {
            var p;
            a & 1 && r !== (r = e[0].status + "") && E(o, r), a & 1 && c !== (c = ((p = e[0].error) == null ? void 0 : p.message) + "") && E(u, c)
        },
        i: _,
        o: _,
        d(e) {
            e && (l(t), l(n), l(i))
        }
    }
}

function z(s, t, r) {
    let o;
    return x(s, P, n => r(0, o = n)), [o]
}
let F = class extends j {
    constructor(t) {
        super(), k(this, t, z, w, S, {})
    }
};
export {
    F as component
};