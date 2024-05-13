(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[2042], {
		20307: function(e, n, r) {
			"use strict";
			r.d(n, {
				ZP: function() {
					return a
				},
				aG: function() {
					return l
				},
				gN: function() {
					return c
				}
			});
			var t = r(41664),
				o = r.n(t),
				s = r(13530),
				i = r(85893);

			function c(e) {
				var n = e.children,
					r = e.isActive;
				return (0, i.jsx)("li", {
					className: r ? "active" : "",
					children: n
				})
			}

			function l(e) {
				var n = e.children,
					r = (0, s.$G)("common").t;
				return (0, i.jsx)("section", {
					className: "breadcrumb-section",
					children: (0, i.jsx)("div", {
						className: "container",
						children: (0, i.jsxs)("ol", {
							className: "breadcrumb",
							children: [(0, i.jsx)("li", {
								children: (0, i.jsx)(o(), {
									href: "/",
									children: (0, i.jsx)("a", {
										children: r("Home Page")
									})
								})
							}), n]
						})
					})
				})
			}

			function a(e) {
				var n = e.items,
					r = (0, s.$G)("common").t;
				return (0, i.jsx)("section", {
					className: "breadcrumb-section",
					children: (0, i.jsx)("div", {
						className: "container",
						children: (0, i.jsxs)("ol", {
							className: "breadcrumb",
							children: [(0, i.jsx)("li", {
								children: (0, i.jsx)(o(), {
									href: "/",
									children: (0, i.jsx)("a", {
										children: r("Home Page")
									})
								})
							}), n.map((function(e, n) {
								return (0, i.jsx)("li", {
									className: e.active ? "active" : "",
									children: e.title
								}, n)
							}))]
						})
					})
				})
			}
		},
		10423: function(e, n, r) {
			"use strict";
			r.r(n), r.d(n, {
				__N_SSP: function() {
					return d
				},
				default: function() {
					return p
				}
			});
			var t = r(9008),
				o = r.n(t),
				s = (r(67294), r(15725)),
				i = r(60525),
				c = r(20307),
				l = r(1632),
				a = r(13530),
				u = r(85893),
				d = !0;

			function p(e) {
				var n = e.categories,
					r = e.cards,
					t = e.store,
					d = (0, a.$G)("common").t,
					p = (0, i.r)(t).data;
				return (0, u.jsxs)(u.Fragment, {
					children: [(0, u.jsxs)(o(), {
						children: [(0, u.jsx)("meta", {
							name: "description",
							content: "OneCard website"
						}), (0, u.jsxs)("title", {
							children: [d("Bestsellers"), " - ", d("OneCard")]
						})]
					}), (0, u.jsxs)(s.Z, {
						categories: n,
						children: [(0, u.jsx)(c.ZP, {
							items: [{
								title: d("Bestsellers"),
								active: !0
							}]
						}), (0, u.jsx)("section", {
							className: "page-content",
							children: (0, u.jsxs)("div", {
								className: "container",
								children: [(0, u.jsx)("h1", {
									className: "page-title",
									children: d("Bestsellers")
								}), (0, u.jsx)("div", {
									className: "products-grid",
									children: r.map((function(e) {
										return (0, u.jsx)("div", {
											className: "grid-item",
											children: (0, u.jsx)(l.Z, {
												card: e,
												settings: p
											})
										}, e.id)
									}))
								})]
							})
						})]
					})]
				})
			}
		},
		28465: function(e, n, r) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/top-selling", function() {
				return r(10423)
			}])
		},
		49517: function(e, n, r) {
			"use strict";
			r.d(n, {
				Z: function() {
					return A
				}
			});
			var t = r(90424),
				o = r(67294),
				s = r(6454),
				i = r(76852),
				c = Math.pow(2, 31) - 1;

			function l(e, n, r) {
				var t = r - Date.now();
				e.current = t <= c ? setTimeout(n, t) : setTimeout((function() {
					return l(e, n, r)
				}), c)
			}

			function a() {
				var e = (0, s.Z)(),
					n = (0, o.useRef)();
				return (0, i.Z)((function() {
					return clearTimeout(n.current)
				})), (0, o.useMemo)((function() {
					var r = function() {
						return clearTimeout(n.current)
					};
					return {
						set: function(t, o) {
							void 0 === o && (o = 0), e() && (r(), o <= c ? n.current = setTimeout(t, o) : l(n, t, Date.now() + o))
						},
						clear: r
					}
				}), [])
			}
			r(42473);
			var u = r(47150),
				d = r(35654),
				p = r(94184),
				f = r.n(p),
				h = r(73935),
				m = r(32092),
				v = r(83318),
				w = r(72950),
				x = r(67216),
				g = r(78146),
				j = r(5680);
			const b = () => {};
			var E = function(e, n, {
					disabled: r,
					clickTrigger: t
				} = {}) {
					const s = n || b;
					(0, j.Z)(e, s, {
						disabled: r,
						clickTrigger: t
					});
					const i = (0, g.Z)((e => {
						27 === e.keyCode && s(e)
					}));
					(0, o.useEffect)((() => {
						if (r || null == e) return;
						const n = (0, x.Z)((0, j.f)(e));
						let t = (n.defaultView || window).event;
						const o = (0, w.Z)(n, "keyup", (e => {
							e !== t ? i(e) : t = void 0
						}));
						return () => {
							o()
						}
					}), [e, r, i])
				},
				N = r(54194),
				Z = r(90012),
				P = r(85893);
			const y = o.forwardRef(((e, n) => {
				const {
					flip: r,
					offset: t,
					placement: s,
					containerPadding: i,
					popperConfig: c = {},
					transition: l
				} = e, [a, u] = (0, m.Z)(), [p, f] = (0, m.Z)(), w = (0, d.Z)(u, n), x = (0, N.Z)(e.container), g = (0, N.Z)(e.target), [j, b] = (0, o.useState)(!e.show), y = (0, v.Z)(g, a, (0, Z.ZP)({
					placement: s,
					enableEvents: !!e.show,
					containerPadding: i || 5,
					flip: r,
					offset: t,
					arrowElement: p,
					popperConfig: c
				}));
				e.show ? j && b(!1) : e.transition || j || b(!0);
				const C = (...n) => {
						b(!0), e.onExited && e.onExited(...n)
					},
					_ = e.show || l && !j;
				if (E(a, e.onHide, {
						disabled: !e.rootClose || e.rootCloseDisabled,
						clickTrigger: e.rootCloseEvent
					}), !_) return null;
				let O = e.children(Object.assign({}, y.attributes.popper, {
					style: y.styles.popper,
					ref: w
				}), {
					popper: y,
					placement: s,
					show: !!e.show,
					arrowProps: Object.assign({}, y.attributes.arrow, {
						style: y.styles.arrow,
						ref: f
					})
				});
				if (l) {
					const {
						onExit: n,
						onExiting: r,
						onEnter: t,
						onEntering: o,
						onEntered: s
					} = e;
					O = (0, P.jsx)(l, {
						in: e.show,
						appear: !0,
						onExit: n,
						onExiting: r,
						onExited: C,
						onEnter: t,
						onEntering: o,
						onEntered: s,
						children: O
					})
				}
				return x ? h.createPortal(O, x) : null
			}));
			y.displayName = "Overlay";
			var C = y,
				_ = r(99585),
				O = r(11132),
				k = r(76792),
				T = r(66611),
				R = (0, T.Z)("popover-header"),
				F = (0, T.Z)("popover-body"),
				S = r(79883);
			const B = o.forwardRef((({
				bsPrefix: e,
				placement: n,
				className: r,
				style: t,
				children: o,
				body: s,
				arrowProps: i,
				popper: c,
				show: l,
				...a
			}, u) => {
				const d = (0, k.vE)(e, "popover"),
					p = (0, k.SC)(),
					[h] = (null == n ? void 0 : n.split("-")) || [],
					m = (0, S.z)(h, p);
				return (0, P.jsxs)("div", {
					ref: u,
					role: "tooltip",
					style: t,
					"x-placement": h,
					className: f()(r, d, h && `bs-popover-${m}`),
					...a,
					children: [(0, P.jsx)("div", {
						className: "popover-arrow",
						...i
					}), s ? (0, P.jsx)(F, {
						children: o
					}) : o]
				})
			}));
			B.defaultProps = {
				placement: "right"
			};
			var $ = Object.assign(B, {
				Header: R,
				Body: F,
				POPPER_OFFSET: [0, 8]
			});
			var H = r(39763),
				U = r(8285);
			const M = {
				transition: H.Z,
				rootClose: !1,
				show: !1,
				placement: "top"
			};
			const D = o.forwardRef((({
				children: e,
				transition: n,
				popperConfig: r = {},
				...t
			}, s) => {
				const i = (0, o.useRef)({}),
					[c, l] = (0, m.Z)(),
					[a, u] = function(e) {
						const n = (0, o.useRef)(null),
							r = (0, k.vE)(void 0, "popover"),
							t = (0, o.useMemo)((() => ({
								name: "offset",
								options: {
									offset: () => n.current && (0, O.Z)(n.current, r) ? e || $.POPPER_OFFSET : e || [0, 0]
								}
							})), [e, r]);
						return [n, [t]]
					}(t.offset),
					p = (0, d.Z)(s, a),
					h = !0 === n ? H.Z : n || void 0,
					v = (0, g.Z)((e => {
						l(e), null == r || null == r.onFirstUpdate || r.onFirstUpdate(e)
					}));
				return (0, _.Z)((() => {
					c && (null == i.current.scheduleUpdate || i.current.scheduleUpdate())
				}), [c]), (0, P.jsx)(C, {
					...t,
					ref: p,
					popperConfig: {
						...r,
						modifiers: u.concat(r.modifiers || []),
						onFirstUpdate: v
					},
					transition: h,
					children: (r, {
						arrowProps: t,
						popper: s,
						show: c
					}) => {
						var l, a;
						! function(e, n) {
							const {
								ref: r
							} = e, {
								ref: t
							} = n;
							e.ref = r.__wrapped || (r.__wrapped = e => r((0, U.Z)(e))), n.ref = t.__wrapped || (t.__wrapped = e => t((0, U.Z)(e)))
						}(r, t);
						const u = null == s ? void 0 : s.placement,
							d = Object.assign(i.current, {
								state: null == s ? void 0 : s.state,
								scheduleUpdate: null == s ? void 0 : s.update,
								placement: u,
								outOfBoundaries: (null == s || null == (l = s.state) || null == (a = l.modifiersData.hide) ? void 0 : a.isReferenceHidden) || !1
							});
						return "function" === typeof e ? e({
							...r,
							placement: u,
							show: c,
							...!n && c && {
								className: "show"
							},
							popper: d,
							arrowProps: t
						}) : o.cloneElement(e, {
							...r,
							placement: u,
							arrowProps: t,
							popper: d,
							className: f()(e.props.className, !n && c && "show"),
							style: {
								...e.props.style,
								...r.style
							}
						})
					}
				})
			}));
			D.displayName = "Overlay", D.defaultProps = M;
			var G = D;

			function z(e, n, r) {
				const [o] = n, s = o.currentTarget, i = o.relatedTarget || o.nativeEvent[r];
				i && i === s || (0, t.Z)(s, i) || e(...n)
			}

			function X({
				trigger: e,
				overlay: n,
				children: r,
				popperConfig: t = {},
				show: s,
				defaultShow: i = !1,
				onToggle: c,
				delay: l,
				placement: p,
				flip: f = p && -1 !== p.indexOf("auto"),
				...h
			}) {
				const m = (0, o.useRef)(null),
					v = (0, d.Z)(m, r.ref),
					w = a(),
					x = (0, o.useRef)(""),
					[g, j] = (0, u.$c)(s, i, c),
					b = function(e) {
						return e && "object" === typeof e ? e : {
							show: e,
							hide: e
						}
					}(l),
					{
						onFocus: E,
						onBlur: N,
						onClick: Z
					} = "function" !== typeof r ? o.Children.only(r).props : {},
					y = (0, o.useCallback)((() => {
						w.clear(), x.current = "show", b.show ? w.set((() => {
							"show" === x.current && j(!0)
						}), b.show) : j(!0)
					}), [b.show, j, w]),
					C = (0, o.useCallback)((() => {
						w.clear(), x.current = "hide", b.hide ? w.set((() => {
							"hide" === x.current && j(!1)
						}), b.hide) : j(!1)
					}), [b.hide, j, w]),
					_ = (0, o.useCallback)(((...e) => {
						y(), null == E || E(...e)
					}), [y, E]),
					O = (0, o.useCallback)(((...e) => {
						C(), null == N || N(...e)
					}), [C, N]),
					k = (0, o.useCallback)(((...e) => {
						j(!g), null == Z || Z(...e)
					}), [Z, j, g]),
					T = (0, o.useCallback)(((...e) => {
						z(y, e, "fromElement")
					}), [y]),
					R = (0, o.useCallback)(((...e) => {
						z(C, e, "toElement")
					}), [C]),
					F = null == e ? [] : [].concat(e),
					S = {
						ref: e => {
							v((0, U.Z)(e))
						}
					};
				return -1 !== F.indexOf("click") && (S.onClick = k), -1 !== F.indexOf("focus") && (S.onFocus = _, S.onBlur = O), -1 !== F.indexOf("hover") && (S.onMouseOver = T, S.onMouseOut = R), (0, P.jsxs)(P.Fragment, {
					children: ["function" === typeof r ? r(S) : (0, o.cloneElement)(r, S), (0, P.jsx)(G, {
						...h,
						show: g,
						onHide: C,
						flip: f,
						placement: p,
						popperConfig: t,
						target: m.current,
						children: n
					})]
				})
			}
			X.defaultProps = {
				defaultShow: !1,
				trigger: ["hover", "focus"]
			};
			var A = X
		},
		43489: function(e, n, r) {
			"use strict";
			var t = r(94184),
				o = r.n(t),
				s = r(67294),
				i = r(76792),
				c = r(79883),
				l = r(85893);
			const a = s.forwardRef((({
				bsPrefix: e,
				placement: n,
				className: r,
				style: t,
				children: s,
				arrowProps: a,
				popper: u,
				show: d,
				...p
			}, f) => {
				e = (0, i.vE)(e, "tooltip");
				const h = (0, i.SC)(),
					[m] = (null == n ? void 0 : n.split("-")) || [],
					v = (0, c.z)(m, h);
				return (0, l.jsxs)("div", {
					ref: f,
					style: t,
					role: "tooltip",
					"x-placement": m,
					className: o()(r, e, `bs-tooltip-${v}`),
					...p,
					children: [(0, l.jsx)("div", {
						className: "tooltip-arrow",
						...a
					}), (0, l.jsx)("div", {
						className: `${e}-inner`,
						children: s
					})]
				})
			}));
			a.defaultProps = {
				placement: "right"
			}, a.displayName = "Tooltip", n.Z = a
		},
		79883: function(e, n, r) {
			"use strict";
			r.d(n, {
				z: function() {
					return o
				}
			});
			var t = r(67294);
			t.Component;

			function o(e, n) {
				let r = e;
				return "left" === e ? r = n ? "end" : "start" : "right" === e && (r = n ? "start" : "end"), r
			}
		}
	},
	function(e) {
		e.O(0, [6827, 2561, 1520, 4841, 5725, 7046, 1632, 9774, 2888, 179], (function() {
			return n = 28465, e(e.s = n);
			var n
		}));
		var n = e.O();
		_N_E = n
	}
]);
