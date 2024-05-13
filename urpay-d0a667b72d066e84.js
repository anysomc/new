(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[7115], {
		1374: function(e, t, n) {
			"use strict";
			n.d(t, {
				Ik: function() {
					return v
				},
				P0: function() {
					return p
				},
				Tr: function() {
					return j
				},
				hW: function() {
					return h
				},
				mv: function() {
					return y
				},
				tN: function() {
					return x
				},
				yA: function() {
					return f
				}
			});
			var r = n(59499),
				s = n(13530),
				i = n(67294),
				c = (n(79765), n(41664)),
				a = n.n(c),
				o = n(41520),
				l = n(182),
				u = n(85893);

			function d(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function m(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? d(Object(n), !0).forEach((function(t) {
						(0, r.Z)(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function f() {
				return (0, u.jsx)("img", {
					src: "/images/logo.svg",
					className: "img-fluid",
					alt: s.ag.t("One Card Logo")
				})
			}

			function h(e) {
				var t = e.content,
					n = e.hideAfter,
					r = (0, i.useState)(!1),
					s = r[0],
					c = r[1];
				return n && setTimeout((function() {
					return c(!0)
				}), 1e3 * n), !s && (0, u.jsxs)("div", {
					className: "form-error-alert",
					children: [(0, u.jsx)("i", {
						className: "las la-info-circle"
					}), t]
				})
			}

			function v(e) {
				var t = e.content,
					n = e.hideAfter,
					r = e.reset,
					s = (0, i.useState)(null !== r && void 0 !== r && r),
					c = s[0],
					a = s[1];
				return n && setTimeout((function() {
					return a(!0)
				}), 1e3 * n), !c && (0, u.jsxs)("div", {
					className: "form-success-alert",
					children: [(0, u.jsx)("i", {
						className: "las la-check-circle"
					}), t]
				})
			}

			function p(e) {
				var t = e.styles;
				return (0, u.jsx)("div", {
					style: m({}, t),
					className: "isLoading text-center w-100"
				})
			}

			function j(e) {
				var t = e.message,
					n = e.actions;
				return (0, u.jsxs)("div", {
					className: "contact-succeed",
					children: [(0, u.jsx)("span", {
						className: "checked",
						children: (0, u.jsx)("i", {
							className: "text-danger las la-check-circle"
						})
					}), (0, u.jsx)("p", {
						className: "succeed-text",
						children: t
					}), (0, u.jsx)("div", {
						className: "succeed-btns",
						children: n && n.map((function(e, t) {
							return (0, u.jsx)(a(), {
								href: e.url,
								children: (0, u.jsx)("a", {
									className: "primary-btn succeed-btn",
									children: e.title
								})
							}, t)
						}))
					})]
				})
			}

			function x(e) {
				var t = e.removeItem,
					n = e.removeModelItem,
					r = e.setShowRemoveCardModal,
					i = e.showRemoveCardModal,
					c = e.settings,
					a = function() {
						return r(!1)
					},
					d = (0, s.$G)("common").t;
				return (0, u.jsx)(u.Fragment, {
					children: (0, u.jsx)(o.Z, {
						show: i,
						onHide: a,
						centered: !0,
						keyboard: !1,
						className: "deleteConfirm",
						children: (0, u.jsxs)(o.Z.Body, {
							children: [(0, u.jsx)("button", {
								type: "button",
								className: "close",
								"data-dismiss": "modal",
								"aria-label": "Close",
								onClick: a,
								children: (0, u.jsx)("i", {
									className: "las la-times"
								})
							}), (0, u.jsx)("p", {
								className: "confirm-text",
								children: d("Are you sure you want to remove that card from cart?")
							}), (0, u.jsxs)("div", {
								className: "modal-btns",
								children: [(0, u.jsx)("button", {
									type: "button",
									className: "primary-btn modal-btn",
									onClick: function(e) {
										var s, i, a, o, u;
										t(n.id), r(!1), (0, l.q)("remove_from_cart", {
											currency: null === c || void 0 === c || null === (s = c.currency) || void 0 === s ? void 0 : s.symbol,
											value: +n.price,
											items: [{
												item_id: "".concat(n.id),
												item_name: n.title,
												discount: null !== n && void 0 !== n && null !== (i = n.native) && void 0 !== i && i.productWithOffer ? +(null === n || void 0 === n || null === (a = n.native) || void 0 === a ? void 0 : a.individualPrice) - +(null === n || void 0 === n || null === (o = n.native) || void 0 === o ? void 0 : o.individualPriceAfter) : 0,
												item_brand: n.merchant,
												item_category: null === n || void 0 === n || null === (u = n.native) || void 0 === u ? void 0 : u.category,
												price: +n.price,
												quantity: +n.quantity
											}]
										})
									},
									children: d("Remove card now")
								}), (0, u.jsx)("button", {
									type: "button",
									onClick: a,
									className: "default-btn modal-btn",
									children: d("Keep card")
								})]
							})]
						})
					})
				})
			}

			function y() {
				return (0, u.jsx)(a(), {
					href: "/contact-us",
					children: (0, u.jsx)("a", {
						target: "_blank",
						rel: "noreferrer",
						children: s.ag.t("Customer service")
					})
				})
			}
		},
		73250: function(e, t, n) {
			"use strict";
			n.d(t, {
				U: function() {
					return o
				}
			});
			var r = n(41664),
				s = n.n(r),
				i = (n(67294), n(13530)),
				c = n(69196),
				a = n(85893);

			function o() {
				var e = (0, i.$G)("common").t,
					t = (0, c.rV)().settingByKey;
				return (0, a.jsxs)("div", {
					className: "small-footer",
					children: [(0, a.jsx)("p", {
						className: "copyrights",
						children: e("\xa9 One Card 2023 - All rights reserved")
					}), (0, a.jsxs)("div", {
						className: "maarof-vat",
						children: [(0, a.jsx)("a", {
							href: "https://maroof.sa/270224",
							className: "maarof",
							target: "_blank",
							rel: "noreferrer",
							children: (0, a.jsx)("img", {
								src: "/images/icons/maroof.png",
								className: "img-fluid"
							})
						}), (0, a.jsx)(s(), {
							href: t("VATCertificate"),
							children: (0, a.jsx)("a", {
								className: "vat",
								target: "_blank",
								children: (0, a.jsx)("img", {
									src: "/images/icons/vat.svg",
									className: "img-fluid",
									alt: "VAT Certificate"
								})
							})
						})]
					})]
				})
			}
		},
		55285: function(e, t, n) {
			"use strict";
			n.d(t, {
				Z: function() {
					return c
				}
			});
			var r = n(50591),
				s = n(67294),
				i = n(85893);

			function c(e) {
				var t = e.children;
				return (0, s.useEffect)((function() {
					(0, r.et)((function() {
						return document.body.classList.add("noHeader")
					}))
				}), []), (0, s.useEffect)(r.sN, []), (0, i.jsx)(i.Fragment, {
					children: t
				})
			}
		},
		182: function(e, t, n) {
			"use strict";
			n.d(t, {
				q: function() {
					return s
				}
			});
			var r = n(44866),
				s = (n(36011), function(e, t) {
					try {
						r.Z.analytics().logEvent(e, t)
					} catch (n) {
						console.log(n)
					}
				})
		},
		28878: function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, {
				__N_SSP: function() {
					return j
				},
				default: function() {
					return x
				}
			});
			var r = n(13530),
				s = n(11163),
				i = n(55285),
				c = n(9008),
				a = n.n(c),
				o = n(41664),
				l = n.n(o),
				u = n(1374),
				d = n(73250),
				m = n(67294),
				f = n(74486),
				h = n(33299),
				v = n(85893);

			function p(e) {
				var t, n = e.isQuick,
					c = void 0 !== n && n,
					o = (0, s.useRouter)().locale,
					p = (0, s.useRouter)(),
					j = p.query.urpayId,
					x = (0, r.$G)("common").t,
					y = (0, h.useSession)().data,
					g = (0, m.useState)(""),
					b = g[0],
					N = g[1],
					O = (0, m.useState)(null),
					k = O[0],
					C = O[1],
					_ = (0, m.useState)(!1),
					w = _[0],
					S = _[1];
				"".concat("https://onecard.com", "/").concat(o, "/checkout/thanks?from=register");
				c && "".concat("https://onecard.com", "/").concat(o, "/checkout/thanks-quick?from=register");
				return (0, v.jsxs)(i.Z, {
					children: [(0, v.jsxs)(a(), {
						children: [(0, v.jsx)("meta", {
							name: "description",
							content: "OneCard website"
						}), (0, v.jsxs)("title", {
							children: [x("Pay form"), " - ", x("OneCard")]
						})]
					}), (0, v.jsx)("div", {
						className: "pay-form-logo",
						children: (0, v.jsx)(l(), {
							href: "/",
							children: (0, v.jsx)("a", {
								className: "logo",
								children: (0, v.jsx)(u.yA, {})
							})
						})
					}), (0, v.jsx)("div", {
						className: "container",
						style: {
							minHeight: "200px"
						},
						children: (0, v.jsxs)("div", {
							className: "urpay-form",
							children: [(0, v.jsx)("h2", {
								children: x("Verification Code")
							}), (0, v.jsx)("p", {
								children: x("Verification Code Has been sent to")
							}), (0, v.jsx)("h3", {
								children: null === p || void 0 === p || null === (t = p.query) || void 0 === t ? void 0 : t.mobile
							}), (0, v.jsx)("p", {
								children: x("You will find the verification code in your mobile SMS")
							}), (0, v.jsx)("p", {
								children: x("Please enter the verification code")
							}), (0, v.jsxs)("form", {
								onSubmit: function(e) {
									e.preventDefault(), p.push({
										pathname: "/checkout/thanks/",
										query: {
											urPayOtp: b,
											urPayRequestId: j
										}
									})
								},
								children: [(0, v.jsx)("label", {
									children: x("Enter verification code")
								}), (0, v.jsx)("input", {
									value: b,
									onChange: function(e) {
										return N(e.target.value)
									},
									type: "text"
								}), (0, v.jsx)("input", {
									type: "submit",
									style: {
										backgroundColor: b.length < 3 && "#a1a6a9"
									},
									value: x("Pay Now")
								})]
							}), (0, v.jsxs)("h4", {
								children: [x("If you do not receive the message you can"), " ", (0, v.jsx)("span", {
									children: x("Resend link")
								})]
							}), w && (null === k || void 0 === k ? void 0 : k.maxUrpayOtpMessages) != (null === k || void 0 === k ? void 0 : k.urpayOtpMessagesSent) ? null : (0, v.jsx)("button", {
								className: "resend",
								onClick: function() {
									var e;
									S(!0), f.Z.post("urpay-resend-otp", {
										urPayRequestId: j,
										storeCurrencyId: +(null === y || void 0 === y || null === (e = y.user) || void 0 === e ? void 0 : e.storeCurrencyId)
									}, {
										session: y
									}).then((function(e) {
										C(e.data)
									})), setTimeout((function() {
										S(!1)
									}), 3e4)
								},
								children: x("Click Here")
							}), k && "Otp Sent Successfuly" === k.status ? (0, v.jsx)("p", {
								children: x("verification code has been sent successfully")
							}) : null, k && "Otp Sent Successfuly" === k.status ? (0, v.jsxs)("div", {
								children: [+(null === k || void 0 === k ? void 0 : k.urpayOtpMessagesSent), " / ", +(null === k || void 0 === k ? void 0 : k.maxUrpayOtpMessages) - 1]
							}) : null, k && "Otp Sending Failed" === k.status ? (0, v.jsx)("p", {
								style: {
									color: "red"
								},
								children: x("Failed to send request")
							}) : null]
						})
					}), (0, v.jsx)(d.U, {
						VatCertificate: "/"
					})]
				})
			}
			var j = !0,
				x = function() {
					return (0, v.jsx)(p, {})
				}
		},
		4459: function(e, t, n) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/checkout/urpay", function() {
				return n(28878)
			}])
		}
	},
	function(e) {
		e.O(0, [6827, 1520, 9774, 2888, 179], (function() {
			return t = 4459, e(e.s = t);
			var t
		}));
		var t = e.O();
		_N_E = t
	}
]);
