(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[1188], {
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
			var i = c(41664),
				s = c.n(i),
				r = c(13530),
				t = c(85893);

			function a(n) {
				var e = n.children,
					c = n.isActive;
				return (0, t.jsx)("li", {
					className: c ? "active" : "",
					children: e
				})
			}

			function l(n) {
				var e = n.children,
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
							}), e]
						})
					})
				})
			}

			function o(n) {
				var e = n.items,
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
							}), e.map((function(n, e) {
								return (0, t.jsx)("li", {
									className: n.active ? "active" : "",
									children: n.title
								}, e)
							}))]
						})
					})
				})
			}
		},
		41942: function(n, e, c) {
			"use strict";
			c.r(e), c.d(e, {
				__N_SSG: function() {
					return d
				},
				default: function() {
					return u
				}
			});
			var i = c(9008),
				s = c.n(i),
				r = (c(67294), c(41664), c(15725)),
				t = c(50591),
				a = c(20307),
				l = (c(9669), c(13530)),
				o = c(85893),
				d = !0;

			function u(n) {
				var e = n.categories,
					c = n.content,
					i = (0, l.$G)("common").t;
				return (0, o.jsxs)(o.Fragment, {
					children: [(0, o.jsxs)(s(), {
						children: [(0, o.jsx)("meta", {
							name: "description",
							content: "OneCard website"
						}), (0, o.jsxs)("title", {
							children: [i("FAQs"), " - ", i("OneCard")]
						})]
					}), (0, o.jsxs)(r.Z, {
						categories: e,
						children: [(0, o.jsx)(a.ZP, {
							items: [{
								title: i("FAQs"),
								active: !0
							}]
						}), (0, o.jsx)("section", {
							className: "page-content",
							children: (0, o.jsxs)("div", {
								className: "container",
								children: [(0, o.jsx)("h1", {
									className: "page-title",
									children: i("FAQs")
								}), (0, o.jsx)("div", {
									className: "infomation-content",
									children: c && c.map((function(n, e) {
										return (0, o.jsxs)("div", {
											className: "information-accrdion",
											children: [(0, o.jsx)("button", {
												className: "accordion-head",
												onClick: function(n) {
													return (0, t.TU)(n)
												},
												children: (0, o.jsx)("strong", {
													children: n.title
												})
											}), (0, o.jsx)("div", {
												className: "accordion-panel",
												children: (0, o.jsx)("div", {
													className: "accordion-body",
													dangerouslySetInnerHTML: {
														__html: n.content
													}
												})
											})]
										}, e)
									}))
								})]
							})
						})]
					})]
				})
			}
		},
		23830: function(n, e, c) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/faqs", function() {
				return c(41942)
			}])
		}
	},
	function(n) {
		n.O(0, [6827, 2561, 5725, 9774, 2888, 179], (function() {
			return e = 23830, n(n.s = e);
			var e
		}));
		var e = n.O();
		_N_E = e
	}
]);
