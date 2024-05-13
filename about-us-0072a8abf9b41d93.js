(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[8552], {
		20307: function(n, e, c) {
			"use strict";
			c.d(e, {
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
			var r = c(41664),
				t = c.n(r),
				i = c(13530),
				s = c(85893);

			function a(n) {
				var e = n.children,
					c = n.isActive;
				return (0, s.jsx)("li", {
					className: c ? "active" : "",
					children: e
				})
			}

			function l(n) {
				var e = n.children,
					c = (0, i.$G)("common").t;
				return (0, s.jsx)("section", {
					className: "breadcrumb-section",
					children: (0, s.jsx)("div", {
						className: "container",
						children: (0, s.jsxs)("ol", {
							className: "breadcrumb",
							children: [(0, s.jsx)("li", {
								children: (0, s.jsx)(t(), {
									href: "/",
									children: (0, s.jsx)("a", {
										children: c("Home Page")
									})
								})
							}), e]
						})
					})
				})
			}

			function o(n) {
				var e = n.items,
					c = (0, i.$G)("common").t;
				return (0, s.jsx)("section", {
					className: "breadcrumb-section",
					children: (0, s.jsx)("div", {
						className: "container",
						children: (0, s.jsxs)("ol", {
							className: "breadcrumb",
							children: [(0, s.jsx)("li", {
								children: (0, s.jsx)(t(), {
									href: "/",
									children: (0, s.jsx)("a", {
										children: c("Home Page")
									})
								})
							}), e.map((function(n, e) {
								return (0, s.jsx)("li", {
									className: n.active ? "active" : "",
									children: n.title
								}, e)
							}))]
						})
					})
				})
			}
		},
		98675: function(n, e, c) {
			"use strict";
			c.r(e), c.d(e, {
				__N_SSG: function() {
					return o
				},
				default: function() {
					return u
				}
			});
			c(67294), c(9669);
			var r = c(9008),
				t = c.n(r),
				i = c(15725),
				s = c(20307),
				a = c(13530),
				l = c(85893),
				o = !0;

			function u(n) {
				var e = n.categories,
					c = n.content,
					r = (0, a.$G)("common").t;
				return (0, l.jsxs)(l.Fragment, {
					children: [(0, l.jsxs)(t(), {
						children: [(0, l.jsx)("meta", {
							name: "description",
							content: "OneCard website"
						}), (0, l.jsxs)("title", {
							children: [r("About One Card"), " - ", r("OneCard")]
						})]
					}), (0, l.jsxs)(i.Z, {
						categories: e,
						children: [(0, l.jsx)(s.ZP, {
							items: [{
								title: r("About One Card"),
								active: !0
							}]
						}), (0, l.jsx)("section", {
							className: "page-content",
							children: (0, l.jsxs)("div", {
								className: "container",
								children: [(0, l.jsx)("h1", {
									className: "page-title",
									children: r("About One Card")
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
		1840: function(n, e, c) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/about-us", function() {
				return c(98675)
			}])
		}
	},
	function(n) {
		n.O(0, [6827, 2561, 5725, 9774, 2888, 179], (function() {
			return e = 1840, n(n.s = e);
			var e
		}));
		var e = n.O();
		_N_E = e
	}
]);
