(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[6867], {
		20307: function(e, n, s) {
			"use strict";
			s.d(n, {
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
			var c = s(41664),
				i = s.n(c),
				r = s(13530),
				t = s(85893);

			function a(e) {
				var n = e.children,
					s = e.isActive;
				return (0, t.jsx)("li", {
					className: s ? "active" : "",
					children: n
				})
			}

			function l(e) {
				var n = e.children,
					s = (0, r.$G)("common").t;
				return (0, t.jsx)("section", {
					className: "breadcrumb-section",
					children: (0, t.jsx)("div", {
						className: "container",
						children: (0, t.jsxs)("ol", {
							className: "breadcrumb",
							children: [(0, t.jsx)("li", {
								children: (0, t.jsx)(i(), {
									href: "/",
									children: (0, t.jsx)("a", {
										children: s("Home Page")
									})
								})
							}), n]
						})
					})
				})
			}

			function o(e) {
				var n = e.items,
					s = (0, r.$G)("common").t;
				return (0, t.jsx)("section", {
					className: "breadcrumb-section",
					children: (0, t.jsx)("div", {
						className: "container",
						children: (0, t.jsxs)("ol", {
							className: "breadcrumb",
							children: [(0, t.jsx)("li", {
								children: (0, t.jsx)(i(), {
									href: "/",
									children: (0, t.jsx)("a", {
										children: s("Home Page")
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
		45547: function(e, n, s) {
			"use strict";
			s.r(n), s.d(n, {
				__N_SSG: function() {
					return h
				},
				default: function() {
					return x
				}
			});
			var c = s(9008),
				i = s.n(c),
				r = s(67294),
				t = s(15725),
				a = (s(9669), s(20307)),
				l = s(13530),
				o = s(33299),
				d = s(182),
				u = s(85893),
				m = s(83454),
				h = !0;

			function x(e) {
				var n = e.categories,
					s = e.content,
					c = (0, l.$G)("common").t,
					h = (0, o.useSession)().data;
				return (0, r.useEffect)((function() {
					var e, n;
					(0, d.q)("How To Use", {
						userName: null !== h && void 0 !== h && null !== (e = h.user) && void 0 !== e && e.email ? null === h || void 0 === h || null === (n = h.user) || void 0 === n ? void 0 : n.email : "anonymous"
					})
				}), []), (0, u.jsxs)(u.Fragment, {
					children: [(0, u.jsxs)(i(), {
						children: [(0, u.jsx)("meta", {
							name: "description",
							content: "OneCard website"
						}), (0, u.jsxs)("title", {
							children: [c("How to buy"), " - ", c("OneCard")]
						})]
					}), (0, u.jsxs)(t.Z, {
						categories: n,
						children: [(0, u.jsx)(a.ZP, {
							items: [{
								title: c("How to buy"),
								active: !0
							}]
						}), (0, u.jsx)("section", {
							className: "page-content",
							children: (0, u.jsxs)("div", {
								className: "container",
								children: [(0, u.jsx)("h1", {
									className: "page-title",
									children: c("How to buy")
								}), (0, u.jsx)("div", {
									className: "howToBuy-content",
									children: (0, u.jsxs)("div", {
										className: "row",
										children: [(0, u.jsx)("div", {
											className: "col-xl-5",
											children: (0, u.jsx)("div", {
												dangerouslySetInnerHTML: {
													__html: s
												}
											})
										}), (0, u.jsx)("div", {
											className: "col-xl-7",
											children: m.env.NEXT_PUBLIC_HOW_TO_BUY_VIDEO && (0, u.jsx)("div", {
												className: "howToBuy-video",
												children: (0, u.jsx)("iframe", {
													className: "video",
													src: "https://www.youtube.com/embed/aF0blmYDeyg",
													allowFullScreen: !0,
													frameBorder: "0"
												})
											})
										})]
									})
								})]
							})
						})]
					})]
				})
			}
		},
		67399: function(e, n, s) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/how-to-buy", function() {
				return s(45547)
			}])
		}
	},
	function(e) {
		e.O(0, [6827, 2561, 5725, 9774, 2888, 179], (function() {
			return n = 67399, e(e.s = n);
			var n
		}));
		var n = e.O();
		_N_E = n
	}
]);
