! function(e, t) {
    "function" == typeof define && define.amd ? define(["exports"], t) : t("undefined" != typeof exports ? exports : e.microlight = {})
}(this, function(e) {
    var t, n, i, o = window,
        r = document,
        a = "appendChild",
        l = "test",
        c = ";text-shadow:",
        s = "opacity:.",
        d = " 0px 0px ",
        u = "3px 0px 5",
        f = ")",
        p = function(e) {
            for (n = r.getElementsByClassName(e || "language*"), t = 0; i = n[t++];)
                for (var p, h, g, m, y, x = i.textContent, b = 0, w = x[0], v = 1, k = i.innerHTML = "", C = 0, N = /(\d*\, \d*\, \d*)(, ([.\d]*))?/g.exec(o.getComputedStyle(i).color), E = "px rgba(" + N[1] + ",", S = N[3] || 1; h = p, p = 7 > C && "\\" == p ? 1 : v;) {
                    if (v = w, w = x[++b], m = k.length > 1, !v || C > 8 && "\n" == v || [/\S/ [l](v), 1, 1, !/[$\w]/ [l](v), ("/" == p || "\n" == p) && m, '"' == p && m, "'" == p && m, x[b - 4] + h + p == "-->", h + p == "*/"][C])
                        for (k && (i[a](y = r.createElement("span")).setAttribute("style", ["", c + d + 9 + E + .7 * S + ")," + d + 2 + E + .4 * S + f, s + 6 + c + d + 7 + E + S / 4 + ")," + d + 3 + E + S / 4 + f, s + 7 + c + u + E + S / 5 + "),-" + u + E + S / 5 + f, "font-style:italic;" + s + 5 + c + u + E + S / 4 + "),-" + u + E + S / 4 + f][C ? 3 > C ? 2 : C > 6 ? 4 : C > 3 ? 3 : +/^(a(bstract|lias|nd|rguments|rray|s(m|sert)?|uto)|b(ase|egin|ool(ean)?|reak|yte)|c(ase|atch|har|hecked|lass|lone|ompl|onst|ontinue)|de(bugger|cimal|clare|f(ault|er)?|init|l(egate|ete)?)|do|double|e(cho|ls?if|lse(if)?|nd|nsure|num|vent|x(cept|ec|p(licit|ort)|te(nds|nsion|rn)))|f(allthrough|alse|inal(ly)?|ixed|loat|or(each)?|riend|rom|unc(tion)?)|global|goto|guard|i(f|mp(lements|licit|ort)|n(it|clude(_once)?|line|out|stanceof|t(erface|ernal)?)?|s)|l(ambda|et|ock|ong)|m(icrolight|odule|utable)|NaN|n(amespace|ative|ext|ew|il|ot|ull)|o(bject|perator|r|ut|verride)|p(ackage|arams|rivate|rotected|rotocol|ublic)|r(aise|e(adonly|do|f|gister|peat|quire(_once)?|scue|strict|try|turn))|s(byte|ealed|elf|hort|igned|izeof|tatic|tring|truct|ubscript|uper|ynchronized|witch)|t(emplate|hen|his|hrows?|ransient|rue|ry|ype(alias|def|id|name|of))|u(n(checked|def(ined)?|ion|less|signed|til)|se|sing)|v(ar|irtual|oid|olatile)|w(char_t|hen|here|hile|ith)|xor|yield)$/ [l](k) : 0]), y[a](r.createTextNode(k))), g = C && 7 > C ? C : g, k = "", C = 11; ![1, /[\/{}[(\-+*=<>:;|\\.,?!&@~]/ [l](v), /[\])]/ [l](v), /[$\w]/ [l](v), "/" == v && 2 > g && "<" != p, '"' == v, "'" == v, v + w + x[b + 1] + x[b + 2] == "<!--", v + w == "/*", v + w == "//", "#" == v][--C];);
                    k += v
                }
        };
    e.reset = p, "complete" == r.readyState ? p() : o.addEventListener("load", function() {
        p()
    }, 0)
});