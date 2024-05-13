(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[3061], {
		1374: function(e, s, t) {
			"use strict";
			t.d(s, {
				Ik: function() {
					return x
				},
				P0: function() {
					return j
				},
				Tr: function() {
					return p
				},
				hW: function() {
					return f
				},
				mv: function() {
					return g
				},
				tN: function() {
					return v
				},
				yA: function() {
					return h
				}
			});
			var n = t(59499),
				r = t(13530),
				a = t(67294),
				i = (t(79765), t(41664)),
				c = t.n(i),
				o = t(41520),
				l = t(182),
				d = t(85893);

			function u(e, s) {
				var t = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(e);
					s && (n = n.filter((function(s) {
						return Object.getOwnPropertyDescriptor(e, s).enumerable
					}))), t.push.apply(t, n)
				}
				return t
			}

			function m(e) {
				for (var s = 1; s < arguments.length; s++) {
					var t = null != arguments[s] ? arguments[s] : {};
					s % 2 ? u(Object(t), !0).forEach((function(s) {
						(0, n.Z)(e, s, t[s])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach((function(s) {
						Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(t, s))
					}))
				}
				return e
			}

			function h() {
				return (0, d.jsx)("img", {
					src: "/images/logo.svg",
					className: "img-fluid",
					alt: r.ag.t("One Card Logo")
				})
			}

			function f(e) {
				var s = e.content,
					t = e.hideAfter,
					n = (0, a.useState)(!1),
					r = n[0],
					i = n[1];
				return t && setTimeout((function() {
					return i(!0)
				}), 1e3 * t), !r && (0, d.jsxs)("div", {
					className: "form-error-alert",
					children: [(0, d.jsx)("i", {
						className: "las la-info-circle"
					}), s]
				})
			}

			function x(e) {
				var s = e.content,
					t = e.hideAfter,
					n = e.reset,
					r = (0, a.useState)(null !== n && void 0 !== n && n),
					i = r[0],
					c = r[1];
				return t && setTimeout((function() {
					return c(!0)
				}), 1e3 * t), !i && (0, d.jsxs)("div", {
					className: "form-success-alert",
					children: [(0, d.jsx)("i", {
						className: "las la-check-circle"
					}), s]
				})
			}

			function j(e) {
				var s = e.styles;
				return (0, d.jsx)("div", {
					style: m({}, s),
					className: "isLoading text-center w-100"
				})
			}

			function p(e) {
				var s = e.message,
					t = e.actions;
				return (0, d.jsxs)("div", {
					className: "contact-succeed",
					children: [(0, d.jsx)("span", {
						className: "checked",
						children: (0, d.jsx)("i", {
							className: "text-danger las la-check-circle"
						})
					}), (0, d.jsx)("p", {
						className: "succeed-text",
						children: s
					}), (0, d.jsx)("div", {
						className: "succeed-btns",
						children: t && t.map((function(e, s) {
							return (0, d.jsx)(c(), {
								href: e.url,
								children: (0, d.jsx)("a", {
									className: "primary-btn succeed-btn",
									children: e.title
								})
							}, s)
						}))
					})]
				})
			}

			function v(e) {
				var s = e.removeItem,
					t = e.removeModelItem,
					n = e.setShowRemoveCardModal,
					a = e.showRemoveCardModal,
					i = e.settings,
					c = function() {
						return n(!1)
					},
					u = (0, r.$G)("common").t;
				return (0, d.jsx)(d.Fragment, {
					children: (0, d.jsx)(o.Z, {
						show: a,
						onHide: c,
						centered: !0,
						keyboard: !1,
						className: "deleteConfirm",
						children: (0, d.jsxs)(o.Z.Body, {
							children: [(0, d.jsx)("button", {
								type: "button",
								className: "close",
								"data-dismiss": "modal",
								"aria-label": "Close",
								onClick: c,
								children: (0, d.jsx)("i", {
									className: "las la-times"
								})
							}), (0, d.jsx)("p", {
								className: "confirm-text",
								children: u("Are you sure you want to remove that card from cart?")
							}), (0, d.jsxs)("div", {
								className: "modal-btns",
								children: [(0, d.jsx)("button", {
									type: "button",
									className: "primary-btn modal-btn",
									onClick: function(e) {
										var r, a, c, o, d;
										s(t.id), n(!1), (0, l.q)("remove_from_cart", {
											currency: null === i || void 0 === i || null === (r = i.currency) || void 0 === r ? void 0 : r.symbol,
											value: +t.price,
											items: [{
												item_id: "".concat(t.id),
												item_name: t.title,
												discount: null !== t && void 0 !== t && null !== (a = t.native) && void 0 !== a && a.productWithOffer ? +(null === t || void 0 === t || null === (c = t.native) || void 0 === c ? void 0 : c.individualPrice) - +(null === t || void 0 === t || null === (o = t.native) || void 0 === o ? void 0 : o.individualPriceAfter) : 0,
												item_brand: t.merchant,
												item_category: null === t || void 0 === t || null === (d = t.native) || void 0 === d ? void 0 : d.category,
												price: +t.price,
												quantity: +t.quantity
											}]
										})
									},
									children: u("Remove card now")
								}), (0, d.jsx)("button", {
									type: "button",
									onClick: c,
									className: "default-btn modal-btn",
									children: u("Keep card")
								})]
							})]
						})
					})
				})
			}

			function g() {
				return (0, d.jsx)(c(), {
					href: "/contact-us",
					children: (0, d.jsx)("a", {
						target: "_blank",
						rel: "noreferrer",
						children: r.ag.t("Customer service")
					})
				})
			}
		},
		20307: function(e, s, t) {
			"use strict";
			t.d(s, {
				ZP: function() {
					return l
				},
				aG: function() {
					return o
				},
				gN: function() {
					return c
				}
			});
			var n = t(41664),
				r = t.n(n),
				a = t(13530),
				i = t(85893);

			function c(e) {
				var s = e.children,
					t = e.isActive;
				return (0, i.jsx)("li", {
					className: t ? "active" : "",
					children: s
				})
			}

			function o(e) {
				var s = e.children,
					t = (0, a.$G)("common").t;
				return (0, i.jsx)("section", {
					className: "breadcrumb-section",
					children: (0, i.jsx)("div", {
						className: "container",
						children: (0, i.jsxs)("ol", {
							className: "breadcrumb",
							children: [(0, i.jsx)("li", {
								children: (0, i.jsx)(r(), {
									href: "/",
									children: (0, i.jsx)("a", {
										children: t("Home Page")
									})
								})
							}), s]
						})
					})
				})
			}

			function l(e) {
				var s = e.items,
					t = (0, a.$G)("common").t;
				return (0, i.jsx)("section", {
					className: "breadcrumb-section",
					children: (0, i.jsx)("div", {
						className: "container",
						children: (0, i.jsxs)("ol", {
							className: "breadcrumb",
							children: [(0, i.jsx)("li", {
								children: (0, i.jsx)(r(), {
									href: "/",
									children: (0, i.jsx)("a", {
										children: t("Home Page")
									})
								})
							}), s.map((function(e, s) {
								return (0, i.jsx)("li", {
									className: e.active ? "active" : "",
									children: e.title
								}, s)
							}))]
						})
					})
				})
			}
		},
		25386: function(e, s, t) {
			"use strict";
			t.r(s), t.d(s, {
				__N_SSP: function() {
					return T
				},
				default: function() {
					return G
				}
			});
			var n = t(33299),
				r = t(67294),
				a = t(9008),
				i = t.n(a),
				c = t(40341),
				o = t(73192),
				l = t(13530),
				d = t(11163),
				u = t(15725),
				m = t(20307),
				h = t(50591),
				f = t(74486),
				x = t(69196),
				j = t(85893);

			function p(e) {
				var s = e.points,
					t = (0, l.$G)().t;
				return "true" !== (0, (0, x.rV)().settingByKey)("activateLoyaltyProgram") ? null : (0, j.jsxs)("div", {
					className: "gifts-progress",
					children: [(0, j.jsx)("h3", {
						className: "gifts-progress-header",
						children: t("Your total points now")
					}), (0, j.jsxs)("div", {
						className: "gifts-progress-body",
						children: [(0, j.jsx)("span", {
							className: "number min",
							children: s && s.points
						}), (0, j.jsx)("div", {
							className: "points-progress-bar",
							style: {
								overflow: "hidden"
							},
							children: (0, j.jsx)("div", {
								className: "bar",
								"data-width": "".concat(s && s.points / s.nextLevelPoints * 100, "%"),
								id: "pointsProgress"
							})
						}), (0, j.jsx)("strong", {
							className: "number max",
							children: s && s.nextLevelPoints
						})]
					}), s && (0, j.jsx)("p", {
						className: "gifts-progress-footer",
						children: t("collect_points_more_to_get_your_new_gift", {
							points: s.nextLevelPoints
						})
					})]
				})
			}

			function v(e) {
				e.terms, (0, l.$G)().t;
				return (0, j.jsx)(j.Fragment, {
					children: (0, j.jsx)("hr", {})
				})
			}
			var g = t(41520),
				N = t(1374);

			function w(e) {
				var s = e.coupons,
					t = e.terms,
					n = (0, l.$G)().t,
					a = (0, d.useRouter)(),
					i = a.locale,
					c = a.push,
					o = (0, r.useState)(!1),
					u = o[0],
					m = o[1],
					f = (0, r.useState)(""),
					x = f[0],
					p = f[1];

				function w() {
					var e = function() {
						return m(!1)
					};
					return (0, j.jsx)(j.Fragment, {
						children: (0, j.jsx)(g.Z, {
							show: u,
							onHide: e,
							centered: !0,
							keyboard: !1,
							className: "deleteConfirm",
							children: (0, j.jsxs)(g.Z.Body, {
								children: [(0, j.jsx)("button", {
									type: "button",
									className: "close",
									"data-dismiss": "modal",
									"aria-label": "Close",
									onClick: e,
									children: (0, j.jsx)("i", {
										className: "las la-times"
									})
								}), (0, j.jsx)("p", {
									className: "confirm-text",
									children: n("Coupon code copied successfully")
								}), (0, j.jsx)("p", {
									className: "text-center",
									children: n("Do you want to redeem it now?")
								}), (0, j.jsxs)("div", {
									className: "modal-btns",
									children: [(0, j.jsx)("button", {
										onClick: function(e) {
											localStorage.setItem("current-voucher", x), c("/checkout")
										},
										type: "button",
										className: "primary-btn modal-btn",
										children: n("Redeem now")
									}), (0, j.jsx)("button", {
										type: "button",
										onClick: function() {
											c("/")
										},
										className: "default-btn modal-btn",
										children: n("Continue shopping")
									})]
								})]
							})
						})
					})
				}
				return (0, j.jsxs)(j.Fragment, {
					children: [(0, j.jsxs)("div", {
						className: "coupons-list",
						children: [!s.length && (0, j.jsx)(N.Ik, {
							content: n("There is no coupons")
						}), s && s.couponsResponseDTO.vouchers.map((function(e, s) {
							return (0, j.jsxs)("div", {
								className: "coupon-item",
								children: [(0, j.jsx)("div", {
									className: "item-img",
									children: (0, j.jsx)("img", {
										src: e.metadata.image_url,
										className: "img-fluid",
										alt: ""
									})
								}), (0, j.jsxs)("div", {
									className: "item-text",
									children: [(0, j.jsx)("h6", {
										className: "item-title",
										children: e.campaign
									}), e.discount.amount_off && (0, j.jsx)("span", {
										className: "item-price",
										children: e.discount.amount_off
									}), (0, j.jsx)("p", {
										className: "item-desc",
										children: (0, h.wi)(e.metadata, "description_", i, !1)
									}), (0, j.jsxs)("div", {
										className: "item-code",
										children: [(0, j.jsx)("strong", {
											children: e.code
										}), (0, j.jsxs)("a", {
											role: "button",
											className: "copy-code",
											"data-code": e.code,
											onClick: function(s) {
												m(!0), p(e.code), (0, h.zp)(s.currentTarget)
											},
											children: [(0, j.jsx)("i", {
												className: "las la-copy"
											}), (0, j.jsx)("span", {
												className: "text",
												children: n("Copy Code")
											})]
										})]
									})]
								})]
							}, e.code)
						}))]
					}), (0, j.jsx)(w, {}), (0, j.jsx)(v, {
						terms: t
					})]
				})
			}
			var b = t(48137),
				y = t(12834),
				C = t(46616),
				_ = t(16573);

			function k(e) {
				var s = e.referralCode,
					t = e.terms,
					n = (0, l.$G)().t,
					r = "".concat("https://onecard.com", "/register;code=").concat(s);
				return (0, j.jsxs)(j.Fragment, {
					children: [(0, j.jsx)("h5", {
						className: "share-title",
						children: n("Copy your code and pass it on to your friends to get more points")
					}), (0, j.jsxs)("div", {
						className: "share-form",
						children: [(0, j.jsx)("input", {
							type: "text",
							className: "share-input",
							value: r,
							readOnly: !0
						}), (0, j.jsxs)("a", {
							role: "button",
							className: "copy-link",
							"data-code": r,
							onClick: function(e) {
								return (0, h.zp)(e.currentTarget)
							},
							children: [(0, j.jsx)("i", {
								className: "las la-copy"
							}), (0, j.jsx)("span", {
								className: "text",
								children: n("Copy Code")
							})]
						})]
					}), (0, j.jsx)("h5", {
						className: "share-title",
						children: n("Or share it on social media")
					}), (0, j.jsxs)("div", {
						className: "share-links",
						children: [(0, j.jsx)(b.Z, {
							windowWidth: 1e3,
							windowHeight: 1e3,
							subject: n("Share and win a free gift card"),
							url: r,
							body: n("Share and win a free gift card"),
							separator: " - ",
							children: (0, j.jsx)("a", {
								href: "#",
								children: (0, j.jsx)("i", {
									className: "las la-envelope"
								})
							})
						}), (0, j.jsx)(y.Z, {
							windowWidth: 1e3,
							windowHeight: 1e3,
							title: n("Share and win a free gift card"),
							url: r,
							children: (0, j.jsx)("a", {
								className: "whatsapp",
								children: (0, j.jsx)("i", {
									className: "lab la-whatsapp"
								})
							})
						}), (0, j.jsx)(C.Z, {
							windowWidth: 1e3,
							windowHeight: 1e3,
							url: r,
							children: (0, j.jsx)("a", {
								href: "#",
								className: "twitter",
								children: (0, j.jsx)("i", {
									className: "lab la-twitter"
								})
							})
						}), (0, j.jsx)(_.Z, {
							windowWidth: 1e3,
							windowHeight: 1e3,
							url: r,
							quote: n("Share and win a free gift card"),
							children: (0, j.jsx)("a", {
								href: "#",
								className: "facebook",
								children: (0, j.jsx)("i", {
									className: "lab la-facebook-f"
								})
							})
						})]
					}), (0, j.jsx)("br", {}), (0, j.jsx)(v, {
						terms: t
					})]
				})
			}
			var O = t(49517),
				S = t(43489),
				P = t(30719);
			t(30933);

			function Z(e) {
				var s = e.rewards,
					t = e.terms,
					a = (0, l.$G)().t,
					i = (0, n.useSession)(),
					c = i.data,
					o = (i.status, (0, r.useState)([])),
					d = o[0],
					u = o[1],
					m = s.reduce((function(e, s) {
						var t, n = s.points;
						return e[n] = null !== (t = e[n]) && void 0 !== t ? t : [], e[n].push(s), e
					}), {});

				function h(e) {
					var s = e.onHide,
						t = e.show,
						n = e.rewards,
						i = (0, r.useState)(),
						o = i[0],
						l = i[1],
						d = (0, r.useState)(!1),
						u = d[0],
						m = d[1];
					return (0, j.jsx)(g.Z, {
						onHide: s,
						show: t,
						size: "lg",
						"aria-labelledby": "contained-modal-title-vcenter",
						centered: !0,
						className: "giftsModal",
						children: (0, j.jsxs)(g.Z.Body, {
							children: [(0, j.jsx)("button", {
								type: "button",
								className: "close",
								"data-dismiss": "modal",
								"aria-label": "Close",
								onClick: s,
								children: (0, j.jsx)("i", {
									className: "las la-times"
								})
							}), (0, j.jsx)("h3", {
								className: "gifts-title",
								children: a("Choose one of the following gifts")
							}), (0, j.jsx)("div", {
								className: "gifts-slider",
								children: (0, j.jsx)(P.tq, {
									spaceBetween: 50,
									slidesPerView: 3,
									children: n && n.map((function(e, s) {
										return (0, j.jsx)(P.o5, {
											children: (0, j.jsxs)("label", {
												style: {
													cursor: "pointer"
												},
												className: "gift-slide",
												children: [(0, j.jsx)("img", {
													src: e.rewardURL,
													className: "img-fluid",
													alt: ""
												}), (0, j.jsx)("input", {
													type: "radio",
													name: "cuopons",
													onClick: function(s) {
														! function(e) {
															l(null), m(!0);
															var s = {
																channel: 1,
																points: e.points,
																productId: e.productId,
																rewardId: e.rewardId,
																rewardURL: e.rewardURL
															};
															f.Z.post("redeem-reward", s, {
																session: c
															}).then(console.log).catch((function(e) {
																l(a("This reward is not available now")), m(!1), console.log(e)
															}))
														}(e)
													}
												})]
											})
										}, s)
									}))
								})
							}), u && (0, j.jsx)("p", {
								className: "isLoading"
							}), o && (0, j.jsx)(N.hW, {
								content: o
							})]
						})
					})
				}

				function x(e) {
					e.points;
					var s = e.rewards,
						t = (0, r.useState)(!1),
						n = t[0],
						i = t[1];
					var c = s[0];
					return (0, j.jsxs)(j.Fragment, {
						children: [(0, j.jsx)("div", {
							className: "gift-step ".concat(d.includes(c.rewardId) ? "done" : ""),
							children: (0, j.jsx)(O.Z, {
								placement: "top",
								delay: {
									show: 250,
									hide: 400
								},
								overlay: (0, j.jsx)(S.Z, {
									arrowProps: {
										placement: "top"
									},
									id: "button-tooltip",
									children: a("Collect {{points}} points to get the gift", {
										points: c.points
									})
								}),
								children: (0, j.jsxs)("a", {
									role: "button",
									className: "gift-item",
									onClick: function(e) {
										i(!0)
									},
									children: [(0, j.jsx)("i", {
										className: "las ".concat(d.includes(c.rewardId) ? "la-gift" : "la-lock")
									}), (0, j.jsx)("span", {
										className: "text",
										children: c.points
									})]
								})
							})
						}, c.rewardId), n && (0, j.jsx)(h, {
							rewards: s,
							show: n,
							onHide: function() {
								return i(!1)
							}
						})]
					})
				}
				return (0, r.useEffect)((function() {
					c && f.Z.post("get-redeemed-rewards", {}, {
						session: c
					}).then((function(e) {
						e.data.length && u(e.data.map((function(e) {
							return e.rewardId
						})))
					}))
				}), [c]), (0, j.jsxs)(j.Fragment, {
					children: [(0, j.jsx)("div", {
						className: "gifts-steps",
						children: s && Object.keys(m).map((function(e, s) {
							return (0, j.jsx)(x, {
								points: e,
								rewards: m[e]
							}, s)
						}))
					}), (0, j.jsx)(v, {
						terms: t
					})]
				})
			}
			var T = !0;

			function G(e) {
				var s, t = e.categories,
					a = (0, l.$G)().t,
					v = (0, d.useRouter)().locale,
					g = (0, n.useSession)(),
					N = g.data,
					b = (g.status, (0, x.rV)().settingByKey, (0, r.useState)()),
					y = b[0],
					C = b[1],
					_ = (0, r.useState)([]),
					O = _[0],
					S = _[1],
					P = (0, r.useState)(),
					T = P[0],
					G = P[1],
					I = (0, r.useState)(),
					R = I[0],
					E = I[1],
					H = (0, r.useState)(),
					L = H[0],
					F = H[1],
					$ = (0, r.useState)(),
					D = $[0],
					A = $[1];
				return (0, r.useEffect)((function() {
					null !== N && void 0 !== N && N.user && f.Z.post("campaign-terms", {
						locale: (0, h.$i)(v)
					}, {
						session: N
					}).then((function(e) {
						return e.data
					})).then((function(e) {
						E(e.referralCampaignTerms), F(e.discountCampaignTerms), A(e.loyaltyCampaignTerms)
					}))
				}), [N]), (0, r.useEffect)((function() {
					var e = document.getElementById("pointsProgress");
					e && (e.style.width = e.getAttribute("data-width"))
				}), [y]), (0, r.useEffect)((function() {
					N && (f.Z.post("get-loyalty-points", {}, {
						session: N
					}).then((function(e) {
						return C(e.data)
					})).catch(console.error), f.Z.post("get-rewards", {}, {
						session: N
					}).then((function(e) {
						return S(e.data)
					})).catch(console.error), f.Z.post("get-coupons", {}, {
						session: N
					}).then((function(e) {
						return G(e.data)
					})).catch(console.error))
				}), [N]), (0, j.jsxs)(u.Z, {
					categories: t,
					children: [(0, j.jsxs)(i(), {
						children: [(0, j.jsx)("meta", {
							name: "description",
							content: "Sign In - OneCard website :)"
						}), (0, j.jsxs)("title", {
							children: [a("Gifts & Rewards"), " - ", a("OneCard")]
						})]
					}), (0, j.jsx)(m.ZP, {
						items: [{
							title: a("Gifts & Rewards"),
							active: !0
						}]
					}), (0, j.jsx)("section", {
						className: "page-content",
						children: (0, j.jsx)("div", {
							className: "container",
							children: (0, j.jsxs)("div", {
								className: "user-info-page",
								children: [(0, j.jsx)("h1", {
									className: "page-title",
									children: a("Gifts & Rewards")
								}), (0, j.jsx)(p, {
									points: y
								}), T && (0, j.jsx)("div", {
									className: "rewards-tabs",
									children: (0, j.jsxs)(c.Z, {
										defaultActiveKey: "getGiftTab",
										transition: !0,
										id: "rewards-tabs",
										className: "rewards-nav",
										children: [(0, j.jsx)(o.Z, {
											eventKey: "getGiftTab",
											title: (0, j.jsxs)(j.Fragment, {
												children: [(0, j.jsx)("i", {
													className: "las la-gift"
												}), (0, j.jsx)("span", {
													children: a("Get your gifts")
												})]
											}),
											children: (0, j.jsx)(Z, {
												rewards: O,
												terms: D
											})
										}), (0, j.jsx)(o.Z, {
											eventKey: "CouponsListTab",
											title: (0, j.jsxs)(j.Fragment, {
												children: [(0, j.jsx)("i", {
													className: "las la-tags"
												}), (0, j.jsxs)("span", {
													children: [" ", a("Discount Coupons"), " "]
												})]
											}),
											children: (0, j.jsx)(w, {
												coupons: T,
												terms: L
											})
										}), (null === T || void 0 === T || null === (s = T.referralResponseDTO) || void 0 === s ? void 0 : s.referralCode) && (0, j.jsx)(o.Z, {
											eventKey: "ShareTab",
											title: (0, j.jsxs)(j.Fragment, {
												children: [(0, j.jsx)("i", {
													className: "las la-copy"
												}), (0, j.jsxs)("span", {
													children: [" ", a("Share and win")]
												})]
											}),
											children: (0, j.jsx)(k, {
												referralCode: T.referralResponseDTO.referralCode,
												terms: R
											})
										})]
									})
								})]
							})
						})
					})]
				})
			}
		},
		94720: function(e, s, t) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/me/rewards", function() {
				return t(25386)
			}])
		}
	},
	function(e) {
		e.O(0, [6827, 2561, 1520, 4841, 9911, 6865, 5725, 9774, 2888, 179], (function() {
			return s = 94720, e(e.s = s);
			var s
		}));
		var s = e.O();
		_N_E = s
	}
]);
