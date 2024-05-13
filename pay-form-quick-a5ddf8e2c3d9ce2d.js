(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[8903], {
		1374: function(e, n, t) {
			"use strict";
			t.d(n, {
				Ik: function() {
					return v
				},
				P0: function() {
					return h
				},
				Tr: function() {
					return j
				},
				hW: function() {
					return p
				},
				mv: function() {
					return x
				},
				tN: function() {
					return y
				},
				yA: function() {
					return f
				}
			});
			var r = t(59499),
				a = t(13530),
				c = t(67294),
				i = (t(79765), t(41664)),
				s = t.n(i),
				o = t(41520),
				l = t(182),
				u = t(85893);

			function d(e, n) {
				var t = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					n && (r = r.filter((function(n) {
						return Object.getOwnPropertyDescriptor(e, n).enumerable
					}))), t.push.apply(t, r)
				}
				return t
			}

			function m(e) {
				for (var n = 1; n < arguments.length; n++) {
					var t = null != arguments[n] ? arguments[n] : {};
					n % 2 ? d(Object(t), !0).forEach((function(n) {
						(0, r.Z)(e, n, t[n])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach((function(n) {
						Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
					}))
				}
				return e
			}

			function f() {
				return (0, u.jsx)("img", {
					src: "/images/logo.svg",
					className: "img-fluid",
					alt: a.ag.t("One Card Logo")
				})
			}

			function p(e) {
				var n = e.content,
					t = e.hideAfter,
					r = (0, c.useState)(!1),
					a = r[0],
					i = r[1];
				return t && setTimeout((function() {
					return i(!0)
				}), 1e3 * t), !a && (0, u.jsxs)("div", {
					className: "form-error-alert",
					children: [(0, u.jsx)("i", {
						className: "las la-info-circle"
					}), n]
				})
			}

			function v(e) {
				var n = e.content,
					t = e.hideAfter,
					r = e.reset,
					a = (0, c.useState)(null !== r && void 0 !== r && r),
					i = a[0],
					s = a[1];
				return t && setTimeout((function() {
					return s(!0)
				}), 1e3 * t), !i && (0, u.jsxs)("div", {
					className: "form-success-alert",
					children: [(0, u.jsx)("i", {
						className: "las la-check-circle"
					}), n]
				})
			}

			function h(e) {
				var n = e.styles;
				return (0, u.jsx)("div", {
					style: m({}, n),
					className: "isLoading text-center w-100"
				})
			}

			function j(e) {
				var n = e.message,
					t = e.actions;
				return (0, u.jsxs)("div", {
					className: "contact-succeed",
					children: [(0, u.jsx)("span", {
						className: "checked",
						children: (0, u.jsx)("i", {
							className: "text-danger las la-check-circle"
						})
					}), (0, u.jsx)("p", {
						className: "succeed-text",
						children: n
					}), (0, u.jsx)("div", {
						className: "succeed-btns",
						children: t && t.map((function(e, n) {
							return (0, u.jsx)(s(), {
								href: e.url,
								children: (0, u.jsx)("a", {
									className: "primary-btn succeed-btn",
									children: e.title
								})
							}, n)
						}))
					})]
				})
			}

			function y(e) {
				var n = e.removeItem,
					t = e.removeModelItem,
					r = e.setShowRemoveCardModal,
					c = e.showRemoveCardModal,
					i = e.settings,
					s = function() {
						return r(!1)
					},
					d = (0, a.$G)("common").t;
				return (0, u.jsx)(u.Fragment, {
					children: (0, u.jsx)(o.Z, {
						show: c,
						onHide: s,
						centered: !0,
						keyboard: !1,
						className: "deleteConfirm",
						children: (0, u.jsxs)(o.Z.Body, {
							children: [(0, u.jsx)("button", {
								type: "button",
								className: "close",
								"data-dismiss": "modal",
								"aria-label": "Close",
								onClick: s,
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
										var a, c, s, o, u;
										n(t.id), r(!1), (0, l.q)("remove_from_cart", {
											currency: null === i || void 0 === i || null === (a = i.currency) || void 0 === a ? void 0 : a.symbol,
											value: +t.price,
											items: [{
												item_id: "".concat(t.id),
												item_name: t.title,
												discount: null !== t && void 0 !== t && null !== (c = t.native) && void 0 !== c && c.productWithOffer ? +(null === t || void 0 === t || null === (s = t.native) || void 0 === s ? void 0 : s.individualPrice) - +(null === t || void 0 === t || null === (o = t.native) || void 0 === o ? void 0 : o.individualPriceAfter) : 0,
												item_brand: t.merchant,
												item_category: null === t || void 0 === t || null === (u = t.native) || void 0 === u ? void 0 : u.category,
												price: +t.price,
												quantity: +t.quantity
											}]
										})
									},
									children: d("Remove card now")
								}), (0, u.jsx)("button", {
									type: "button",
									onClick: s,
									className: "default-btn modal-btn",
									children: d("Keep card")
								})]
							})]
						})
					})
				})
			}

			function x() {
				return (0, u.jsx)(s(), {
					href: "/contact-us",
					children: (0, u.jsx)("a", {
						target: "_blank",
						rel: "noreferrer",
						children: a.ag.t("Customer service")
					})
				})
			}
		},
		97527: function(e, n, t) {
			"use strict";
			t.d(n, {
				Z: function() {
					return j
				}
			});
			var r = t(13530),
				a = t(90870),
				c = t(11163),
				i = t(67294),
				s = t(55285),
				o = t(9008),
				l = t.n(o),
				u = t(41664),
				d = t.n(u),
				m = t(1374),
				f = t(4298),
				p = t.n(f),
				v = (t(50591), t(73250)),
				h = t(85893);

			function j(e) {
				var n = e.isQuick,
					t = void 0 !== n && n,
					o = (0, r.$G)().t,
					u = (0, a.jD)().metadata,
					f = (0, c.useRouter)().locale,
					j = (0, i.useState)(!1),
					y = j[0],
					x = j[1],
					b = (0, i.useState)(!1),
					g = b[0],
					w = b[1],
					N = (0, i.useState)(!0),
					_ = N[0],
					k = N[1];
				(0, i.useEffect)((function() {
					u && u.hasOwnProperty("payment_brand") && (x(u.payment_brand), w(u.payment_checkout_id))
				}), [u]);
				var O = "".concat("https://onecard.com", "/").concat(f, "/checkout/thanks");
				return t && (O = "".concat("https://onecard.com", "/").concat(f, "/checkout/thanks-quick")), (0, h.jsxs)(s.Z, {
					children: [(0, h.jsxs)(l(), {
						children: [(0, h.jsx)("meta", {
							name: "description",
							content: "OneCard website"
						}), (0, h.jsxs)("title", {
							children: [o("Pay form"), " - ", o("OneCard")]
						})]
					}), (0, h.jsx)("div", {
						className: "pay-form-logo",
						children: (0, h.jsx)(d(), {
							href: "/",
							children: (0, h.jsx)("a", {
								className: "logo",
								children: (0, h.jsx)(m.yA, {})
							})
						})
					}), _ && (0, h.jsx)(m.P0, {
						styles: {
							minHeight: "100px"
						}
					}), (0, h.jsx)("div", {
						className: "container",
						style: {
							minHeight: "200px"
						},
						children: y && g && (0, h.jsxs)("div", {
							children: [(0, h.jsx)("form", {
								action: O,
								className: "paymentWidgets",
								"data-brands": y
							}), u.payment_brand.length && "APPLEPAY" !== u.payment_brand ? (0, h.jsx)(p(), {
								id: "wpwlOptions",
								strategy: "afterInteractive",
								dangerouslySetInnerHTML: {
									__html: 'var wpwlOptions = {locale: "'.concat(f.split("-")[1], '" ,\n                registrations: {\n                  requireCvv: true,\n                  hideInitialPaymentForms: true\n                },\n                onReady: function(e){\n                  var createRegistrationHtml = \'<div class="customLabel">').concat("en" == f.split("-")[1] ? "Store payment details?" : "\u062d\u0641\u0638 \u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u062f\u0641\u0639\u061f", '</div><div class="customInput"><input type="checkbox" name="createRegistration" value="true" /></div>\';\n                  if(').concat("ar" == f.split("-")[1], '){\n                    $(".wpwl-group").css(\'direction\', \'ltr\');\n                    $(".wpwl-control-cardNumber").css({\'direction\': \'ltr\' , "text-align":"right"});\n                    $(".wpwl-brand-card").css(\'right\', \'165px\');\n                    $(".wpwl-brand.wpwl-brand-MADA.wpwl-brand-inline").addClass("wpwl-brand-MADA-Ar");\n                  }\n                  if(').concat("en" == f.split("-")[1], "){\n                    $(\".wpwl-brand-card\").addClass(\"wpwl-brand-Mada-En\");\n                  }\n                  $('form.wpwl-form-card').find('.wpwl-button').before(createRegistrationHtml);\n                  $('.wpwl-form-card').find('.wpwl-button-pay').on('click', function(e){\n                    validateHolder(e);\n                  });\n                },\n                onBeforeSubmitCard: function(e){\n                  return validateHolder(e);\n                }\n                }\n                function validateHolder(e){          \n                return true;\n                }")
								}
							}) : (0, h.jsx)(p(), {
								id: "wpwlOptions",
								strategy: "afterInteractive",
								dangerouslySetInnerHTML: {
									__html: 'var wpwlOptions = {\n  applePay: {\n    displayName: "OneCard",\n    total: { label: "OneCard" },\n    supportedNetworks: ["mada"],\n    supportedCountries: ["SA"],\n    countryCode: "SA",\n    version: 3\n  }\n}'
								}
							}), (0, h.jsx)(p(), {
								src: "".concat("https://oppwa.com/v1/paymentWidgets.js", "?checkoutId=").concat(g),
								onLoad: function() {
									return k(!1)
								}
							}), (0, h.jsx)(p(), {
								src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
							})]
						})
					}), (0, h.jsx)(v.U, {
						VatCertificate: "/"
					})]
				})
			}
		},
		73250: function(e, n, t) {
			"use strict";
			t.d(n, {
				U: function() {
					return o
				}
			});
			var r = t(41664),
				a = t.n(r),
				c = (t(67294), t(13530)),
				i = t(69196),
				s = t(85893);

			function o() {
				var e = (0, c.$G)("common").t,
					n = (0, i.rV)().settingByKey;
				return (0, s.jsxs)("div", {
					className: "small-footer",
					children: [(0, s.jsx)("p", {
						className: "copyrights",
						children: e("\xa9 One Card 2023 - All rights reserved")
					}), (0, s.jsxs)("div", {
						className: "maarof-vat",
						children: [(0, s.jsx)("a", {
							href: "https://maroof.sa/270224",
							className: "maarof",
							target: "_blank",
							rel: "noreferrer",
							children: (0, s.jsx)("img", {
								src: "/images/icons/maroof.png",
								className: "img-fluid"
							})
						}), (0, s.jsx)(a(), {
							href: n("VATCertificate"),
							children: (0, s.jsx)("a", {
								className: "vat",
								target: "_blank",
								children: (0, s.jsx)("img", {
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
		55285: function(e, n, t) {
			"use strict";
			t.d(n, {
				Z: function() {
					return i
				}
			});
			var r = t(50591),
				a = t(67294),
				c = t(85893);

			function i(e) {
				var n = e.children;
				return (0, a.useEffect)((function() {
					(0, r.et)((function() {
						return document.body.classList.add("noHeader")
					}))
				}), []), (0, a.useEffect)(r.sN, []), (0, c.jsx)(c.Fragment, {
					children: n
				})
			}
		},
		182: function(e, n, t) {
			"use strict";
			t.d(n, {
				q: function() {
					return a
				}
			});
			var r = t(44866),
				a = (t(36011), function(e, n) {
					try {
						r.Z.analytics().logEvent(e, n)
					} catch (t) {
						console.log(t)
					}
				})
		},
		29599: function(e, n, t) {
			"use strict";
			t.r(n), t.d(n, {
				__N_SSP: function() {
					return i
				},
				default: function() {
					return s
				}
			});
			var r = t(97527),
				a = (t(11163), t(90870)),
				c = t(85893),
				i = !0;

			function s() {
				return (0, c.jsx)(a.Zl, {
					id: "quick-cart",
					children: (0, c.jsx)(r.Z, {
						isQuick: !0
					})
				})
			}
		},
		7749: function(e, n, t) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/checkout/pay-form-quick", function() {
				return t(29599)
			}])
		}
	},
	function(e) {
		e.O(0, [6827, 1520, 9774, 2888, 179], (function() {
			return n = 7749, e(e.s = n);
			var n
		}));
		var n = e.O();
		_N_E = n
	}
]);
