(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[6890], {
		20307: function(e, n, r) {
			"use strict";
			r.d(n, {
				ZP: function() {
					return o
				},
				aG: function() {
					return l
				},
				gN: function() {
					return a
				}
			});
			var c = r(41664),
				s = r.n(c),
				i = r(13530),
				t = r(85893);

			function a(e) {
				var n = e.children,
					r = e.isActive;
				return (0, t.jsx)("li", {
					className: r ? "active" : "",
					children: n
				})
			}

			function l(e) {
				var n = e.children,
					r = (0, i.$G)("common").t;
				return (0, t.jsx)("section", {
					className: "breadcrumb-section",
					children: (0, t.jsx)("div", {
						className: "container",
						children: (0, t.jsxs)("ol", {
							className: "breadcrumb",
							children: [(0, t.jsx)("li", {
								children: (0, t.jsx)(s(), {
									href: "/",
									children: (0, t.jsx)("a", {
										children: r("Home Page")
									})
								})
							}), n]
						})
					})
				})
			}

			function o(e) {
				var n = e.items,
					r = (0, i.$G)("common").t;
				return (0, t.jsx)("section", {
					className: "breadcrumb-section",
					children: (0, t.jsx)("div", {
						className: "container",
						children: (0, t.jsxs)("ol", {
							className: "breadcrumb",
							children: [(0, t.jsx)("li", {
								children: (0, t.jsx)(s(), {
									href: "/",
									children: (0, t.jsx)("a", {
										children: r("Home Page")
									})
								})
							}), n.map((function(e, n) {
								return (0, t.jsx)("li", {
									className: e.active ? "active" : "",
									children: e.title
								}, n)
							}))]
						})
					})
				})
			}
		},
		50493: function(e, n, r) {
			"use strict";
			r.r(n), r.d(n, {
				__N_SSG: function() {
					return o
				},
				default: function() {
					return d
				}
			});
			var c = r(9008),
				s = r.n(c),
				i = (r(67294), r(41664), r(15725)),
				t = (r(9669), r(20307)),
				a = r(13530),
				l = r(85893),
				o = !0;

			function d(e) {
				var n = e.categories,
					r = e.content,
					c = (0, a.$G)("common").t;
				return (0, l.jsxs)(l.Fragment, {
					children: [(0, l.jsxs)(s(), {
						children: [(0, l.jsx)("meta", {
							name: "description",
							content: "OneCard website"
						}), (0, l.jsxs)("title", {
							children: [c("Terms"), " - ", c("OneCard")]
						})]
					}), (0, l.jsxs)(i.Z, {
						categories: n,
						children: [(0, l.jsx)(t.ZP, {
							items: [{
								title: c("Terms"),
								active: !0
							}]
						}), (0, l.jsx)("section", {
							className: "page-content",
							children: (0, l.jsxs)("div", {
								className: "container",
								children: [(0, l.jsx)("h1", {
									className: "page-title",
									children: c("Terms")
								}), (0, l.jsx)("div", {
									className: "infomation-content",
									dangerouslySetInnerHTML: {
										__html: r
									}
								})]
							})
						})]
					})]
				})
			}
		},
		10864: function(e, n, r) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/terms", function() {
				return r(50493)
			}])
		}
	},
	function(e) {
		e.O(0, [6827, 2561, 5725, 9774, 2888, 179], (function() {
			return n = 10864, e(e.s = n);
			var n
		}));
		var n = e.O();
		_N_E = n
	}
]);
