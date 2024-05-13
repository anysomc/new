(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[2300], {
		20307: function(e, n, r) {
			"use strict";
			r.d(n, {
				ZP: function() {
					return c
				},
				aG: function() {
					return l
				},
				gN: function() {
					return a
				}
			});
			var t = r(41664),
				o = r.n(t),
				s = r(13530),
				i = r(85893);

			function a(e) {
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

			function c(e) {
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
		2119: function(e, n, r) {
			"use strict";
			r.r(n), r.d(n, {
				__N_SSP: function() {
					return h
				},
				default: function() {
					return m
				}
			});
			var t = r(9008),
				o = r.n(t),
				s = r(67294),
				i = r(15725),
				a = r(20307),
				l = r(1632),
				c = r(13530),
				u = r(90828),
				d = r(60525),
				p = r(11163),
				f = r(85893),
				h = !0;

			function m(e) {
				var n = e.categories,
					r = e.flashSale,
					t = e.store,
					h = (0, c.$G)("common").t,
					m = (0, d.r)(t).data,
					v = (0, s.useState)(!1),
					w = v[0],
					x = v[1],
					g = (0, p.useRouter)();
				return (0, s.useEffect)((function() {
					w && g.push("/")
				}), [w]), (0, f.jsxs)(f.Fragment, {
					children: [(0, f.jsxs)(o(), {
						children: [(0, f.jsx)("meta", {
							name: "description",
							content: "OneCard website"
						}), (0, f.jsxs)("title", {
							children: [h("Flash Sale Products"), " - ", h("OneCard")]
						})]
					}), (0, f.jsxs)(i.Z, {
						categories: n,
						children: [(0, f.jsx)(a.aG, {
							children: (0, f.jsx)(a.gN, {
								isActive: !0,
								children: h("Flash Sale")
							})
						}), (0, f.jsx)("section", {
							className: "page-content",
							children: (0, f.jsxs)("div", {
								className: "container",
								children: [(0, f.jsxs)("div", {
									className: "title",
									style: {
										display: "flex",
										justifyContent: "space-between",
										flexWrap: "wrap"
									},
									children: [(0, f.jsx)("h1", {
										className: "page-title",
										children: h("Flash Sale Products")
									}), (0, f.jsx)(u.ZP, {
										time: null === r || void 0 === r ? void 0 : r.countdown,
										removeFlashSale: function() {
											return x(!0)
										}
									})]
								}), (0, f.jsx)("div", {
									className: "products-grid",
									children: null === r || void 0 === r ? void 0 : r.products.map((function(e, n) {
										return (0, f.jsx)("div", {
											className: "grid-item",
											children: (0, f.jsx)(l.Z, {
												card: e,
												settings: m
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
		31555: function(e, n, r) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/flash-sale", function() {
				return r(2119)
			}])
		},
		49517: function(e, n, r) {
			"use strict";
			r.d(n, {
				Z: function() {
					return X
				}
			});
			var t = r(90424),
				o = r(67294),
				s = r(6454),
				i = r(76852),
				a = Math.pow(2, 31) - 1;

			function l(e, n, r) {
				var t = r - Date.now();
				e.current = t <= a ? setTimeout(n, t) : setTimeout((function() {
					return l(e, n, r)
				}), a)
			}

			function c() {
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
							void 0 === o && (o = 0), e() && (r(), o <= a ? n.current = setTimeout(t, o) : l(n, t, Date.now() + o))
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
				y = r(85893);
			const P = o.forwardRef(((e, n) => {
				const {
					flip: r,
					offset: t,
					placement: s,
					containerPadding: i,
					popperConfig: a = {},
					transition: l
				} = e, [c, u] = (0, m.Z)(), [p, f] = (0, m.Z)(), w = (0, d.Z)(u, n), x = (0, N.Z)(e.container), g = (0, N.Z)(e.target), [j, b] = (0, o.useState)(!e.show), P = (0, v.Z)(g, c, (0, Z.ZP)({
					placement: s,
					enableEvents: !!e.show,
					containerPadding: i || 5,
					flip: r,
					offset: t,
					arrowElement: p,
					popperConfig: a
				}));
				e.show ? j && b(!1) : e.transition || j || b(!0);
				const C = (...n) => {
						b(!0), e.onExited && e.onExited(...n)
					},
					_ = e.show || l && !j;
				if (E(c, e.onHide, {
						disabled: !e.rootClose || e.rootCloseDisabled,
						clickTrigger: e.rootCloseEvent
					}), !_) return null;
				let O = e.children(Object.assign({}, P.attributes.popper, {
					style: P.styles.popper,
					ref: w
				}), {
					popper: P,
					placement: s,
					show: !!e.show,
					arrowProps: Object.assign({}, P.attributes.arrow, {
						style: P.styles.arrow,
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
					O = (0, y.jsx)(l, {
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
			P.displayName = "Overlay";
			var C = P,
				_ = r(99585),
				O = r(11132),
				k = r(76792),
				T = r(66611),
				F = (0, T.Z)("popover-header"),
				S = (0, T.Z)("popover-body"),
				R = r(79883);
			const $ = o.forwardRef((({
				bsPrefix: e,
				placement: n,
				className: r,
				style: t,
				children: o,
				body: s,
				arrowProps: i,
				popper: a,
				show: l,
				...c
			}, u) => {
				const d = (0, k.vE)(e, "popover"),
					p = (0, k.SC)(),
					[h] = (null == n ? void 0 : n.split("-")) || [],
					m = (0, R.z)(h, p);
				return (0, y.jsxs)("div", {
					ref: u,
					role: "tooltip",
					style: t,
					"x-placement": h,
					className: f()(r, d, h && `bs-popover-${m}`),
					...c,
					children: [(0, y.jsx)("div", {
						className: "popover-arrow",
						...i
					}), s ? (0, y.jsx)(S, {
						children: o
					}) : o]
				})
			}));
			$.defaultProps = {
				placement: "right"
			};
			var H = Object.assign($, {
				Header: F,
				Body: S,
				POPPER_OFFSET: [0, 8]
			});
			var U = r(39763),
				G = r(8285);
			const M = {
				transition: U.Z,
				rootClose: !1,
				show: !1,
				placement: "top"
			};
			const B = o.forwardRef((({
				children: e,
				transition: n,
				popperConfig: r = {},
				...t
			}, s) => {
				const i = (0, o.useRef)({}),
					[a, l] = (0, m.Z)(),
					[c, u] = function(e) {
						const n = (0, o.useRef)(null),
							r = (0, k.vE)(void 0, "popover"),
							t = (0, o.useMemo)((() => ({
								name: "offset",
								options: {
									offset: () => n.current && (0, O.Z)(n.current, r) ? e || H.POPPER_OFFSET : e || [0, 0]
								}
							})), [e, r]);
						return [n, [t]]
					}(t.offset),
					p = (0, d.Z)(s, c),
					h = !0 === n ? U.Z : n || void 0,
					v = (0, g.Z)((e => {
						l(e), null == r || null == r.onFirstUpdate || r.onFirstUpdate(e)
					}));
				return (0, _.Z)((() => {
					a && (null == i.current.scheduleUpdate || i.current.scheduleUpdate())
				}), [a]), (0, y.jsx)(C, {
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
						show: a
					}) => {
						var l, c;
						! function(e, n) {
							const {
								ref: r
							} = e, {
								ref: t
							} = n;
							e.ref = r.__wrapped || (r.__wrapped = e => r((0, G.Z)(e))), n.ref = t.__wrapped || (t.__wrapped = e => t((0, G.Z)(e)))
						}(r, t);
						const u = null == s ? void 0 : s.placement,
							d = Object.assign(i.current, {
								state: null == s ? void 0 : s.state,
								scheduleUpdate: null == s ? void 0 : s.update,
								placement: u,
								outOfBoundaries: (null == s || null == (l = s.state) || null == (c = l.modifiersData.hide) ? void 0 : c.isReferenceHidden) || !1
							});
						return "function" === typeof e ? e({
							...r,
							placement: u,
							show: a,
							...!n && a && {
								className: "show"
							},
							popper: d,
							arrowProps: t
						}) : o.cloneElement(e, {
							...r,
							placement: u,
							arrowProps: t,
							popper: d,
							className: f()(e.props.className, !n && a && "show"),
							style: {
								...e.props.style,
								...r.style
							}
						})
					}
				})
			}));
			B.displayName = "Overlay", B.defaultProps = M;
			var D = B;

			function z(e, n, r) {
				const [o] = n, s = o.currentTarget, i = o.relatedTarget || o.nativeEvent[r];
				i && i === s || (0, t.Z)(s, i) || e(...n)
			}

			function A({
				trigger: e,
				overlay: n,
				children: r,
				popperConfig: t = {},
				show: s,
				defaultShow: i = !1,
				onToggle: a,
				delay: l,
				placement: p,
				flip: f = p && -1 !== p.indexOf("auto"),
				...h
			}) {
				const m = (0, o.useRef)(null),
					v = (0, d.Z)(m, r.ref),
					w = c(),
					x = (0, o.useRef)(""),
					[g, j] = (0, u.$c)(s, i, a),
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
					P = (0, o.useCallback)((() => {
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
						P(), null == E || E(...e)
					}), [P, E]),
					O = (0, o.useCallback)(((...e) => {
						C(), null == N || N(...e)
					}), [C, N]),
					k = (0, o.useCallback)(((...e) => {
						j(!g), null == Z || Z(...e)
					}), [Z, j, g]),
					T = (0, o.useCallback)(((...e) => {
						z(P, e, "fromElement")
					}), [P]),
					F = (0, o.useCallback)(((...e) => {
						z(C, e, "toElement")
					}), [C]),
					S = null == e ? [] : [].concat(e),
					R = {
						ref: e => {
							v((0, G.Z)(e))
						}
					};
				return -1 !== S.indexOf("click") && (R.onClick = k), -1 !== S.indexOf("focus") && (R.onFocus = _, R.onBlur = O), -1 !== S.indexOf("hover") && (R.onMouseOver = T, R.onMouseOut = F), (0, y.jsxs)(y.Fragment, {
					children: ["function" === typeof r ? r(R) : (0, o.cloneElement)(r, R), (0, y.jsx)(D, {
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
			A.defaultProps = {
				defaultShow: !1,
				trigger: ["hover", "focus"]
			};
			var X = A
		},
		43489: function(e, n, r) {
			"use strict";
			var t = r(94184),
				o = r.n(t),
				s = r(67294),
				i = r(76792),
				a = r(79883),
				l = r(85893);
			const c = s.forwardRef((({
				bsPrefix: e,
				placement: n,
				className: r,
				style: t,
				children: s,
				arrowProps: c,
				popper: u,
				show: d,
				...p
			}, f) => {
				e = (0, i.vE)(e, "tooltip");
				const h = (0, i.SC)(),
					[m] = (null == n ? void 0 : n.split("-")) || [],
					v = (0, a.z)(m, h);
				return (0, l.jsxs)("div", {
					ref: f,
					style: t,
					role: "tooltip",
					"x-placement": m,
					className: o()(r, e, `bs-tooltip-${v}`),
					...p,
					children: [(0, l.jsx)("div", {
						className: "tooltip-arrow",
						...c
					}), (0, l.jsx)("div", {
						className: `${e}-inner`,
						children: s
					})]
				})
			}));
			c.defaultProps = {
				placement: "right"
			}, c.displayName = "Tooltip", n.Z = c
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
			return n = 31555, e(e.s = n);
			var n
		}));
		var n = e.O();
		_N_E = n
	}
]);
