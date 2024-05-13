(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[2823], {
		20307: function(e, n, c) {
			"use strict";
			c.d(n, {
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
			var i = c(41664),
				s = c.n(i),
				r = c(13530),
				t = c(85893);

			function a(e) {
				var n = e.children,
					c = e.isActive;
				return (0, t.jsx)("li", {
					className: c ? "active" : "",
					children: n
				})
			}

			function l(e) {
				var n = e.children,
					c = (0, r.$G)("common").t;
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
										children: c("Home Page")
									})
								})
							}), n]
						})
					})
				})
			}

			function o(e) {
				var n = e.items,
					c = (0, r.$G)("common").t;
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
										children: c("Home Page")
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
		45796: function(e, n, c) {
			"use strict";
			c.r(n), c.d(n, {
				__N_SSG: function() {
					return o
				},
				default: function() {
					return d
				}
			});
			var i = c(9008),
				s = c.n(i),
				r = (c(67294), c(41664), c(9669), c(15725)),
				t = c(20307),
				a = c(13530),
				l = c(85893),
				o = !0;

			function d(e) {
				var n = e.categories,
					c = e.content,
					i = (0, a.$G)("common").t;
				return (0, l.jsxs)(l.Fragment, {
					children: [(0, l.jsxs)(s(), {
						children: [(0, l.jsx)("meta", {
							name: "description",
							content: "OneCard website"
						}), (0, l.jsxs)("title", {
							children: [i("Policies"), " - ", i("OneCard")]
						})]
					}), (0, l.jsxs)(r.Z, {
						categories: n,
						children: [(0, l.jsx)(t.ZP, {
							items: [{
								title: i("Policies"),
								active: !0
							}]
						}), (0, l.jsx)("section", {
							className: "page-content",
							children: (0, l.jsxs)("div", {
								className: "container",
								children: [(0, l.jsx)("h1", {
									className: "page-title",
									children: i("Policies")
								}), (0, l.jsx)("div", {
									className: "infomation-content",
									dangerouslySetInnerHTML: {
										__html: c
									}
								})]
							})
						})]
					})]
				})
			}
		},
		62816: function(e, n, c) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/policies", function() {
				return c(45796)
			}])
		}
	},
	function(e) {
		e.O(0, [6827, 2561, 5725, 9774, 2888, 179], (function() {
			return n = 62816, e(e.s = n);
			var n
		}));
		var n = e.O();
		_N_E = n
	}
]);
