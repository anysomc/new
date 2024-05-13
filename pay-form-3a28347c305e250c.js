(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[8912], {
		97527: function(n, t, e) {
			"use strict";
			e.d(t, {
				Z: function() {
					return v
				}
			});
			var a = e(13530),
				r = e(90870),
				c = e(11163),
				s = e(67294),
				i = e(55285),
				o = e(9008),
				d = e.n(o),
				l = e(41664),
				u = e.n(l),
				p = e(1374),
				w = e(4298),
				m = e.n(w),
				f = (e(50591), e(73250)),
				h = e(85893);

			function v(n) {
				var t = n.isQuick,
					e = void 0 !== t && t,
					o = (0, a.$G)().t,
					l = (0, r.jD)().metadata,
					w = (0, c.useRouter)().locale,
					v = (0, s.useState)(!1),
					y = v[0],
					j = v[1],
					_ = (0, s.useState)(!1),
					b = _[0],
					x = _[1],
					g = (0, s.useState)(!0),
					k = g[0],
					C = g[1];
				(0, s.useEffect)((function() {
					l && l.hasOwnProperty("payment_brand") && (j(l.payment_brand), x(l.payment_checkout_id))
				}), [l]);
				var N = "".concat("https://onecard.com", "/").concat(w, "/checkout/thanks");
				return e && (N = "".concat("https://onecard.com", "/").concat(w, "/checkout/thanks-quick")), (0, h.jsxs)(i.Z, {
					children: [(0, h.jsxs)(d(), {
						children: [(0, h.jsx)("meta", {
							name: "description",
							content: "OneCard website"
						}), (0, h.jsxs)("title", {
							children: [o("Pay form"), " - ", o("OneCard")]
						})]
					}), (0, h.jsx)("div", {
						className: "pay-form-logo",
						children: (0, h.jsx)(u(), {
							href: "/",
							children: (0, h.jsx)("a", {
								className: "logo",
								children: (0, h.jsx)(p.yA, {})
							})
						})
					}), k && (0, h.jsx)(p.P0, {
						styles: {
							minHeight: "100px"
						}
					}), (0, h.jsx)("div", {
						className: "container",
						style: {
							minHeight: "200px"
						},
						children: y && b && (0, h.jsxs)("div", {
							children: [(0, h.jsx)("form", {
								action: N,
								className: "paymentWidgets",
								"data-brands": y
							}), l.payment_brand.length && "APPLEPAY" !== l.payment_brand ? (0, h.jsx)(m(), {
								id: "wpwlOptions",
								strategy: "afterInteractive",
								dangerouslySetInnerHTML: {
									__html: 'var wpwlOptions = {locale: "'.concat(w.split("-")[1], '" ,\n                registrations: {\n                  requireCvv: true,\n                  hideInitialPaymentForms: true\n                },\n                onReady: function(e){\n                  var createRegistrationHtml = \'<div class="customLabel">').concat("en" == w.split("-")[1] ? "Store payment details?" : "\u062d\u0641\u0638 \u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u062f\u0641\u0639\u061f", '</div><div class="customInput"><input type="checkbox" name="createRegistration" value="true" /></div>\';\n                  if(').concat("ar" == w.split("-")[1], '){\n                    $(".wpwl-group").css(\'direction\', \'ltr\');\n                    $(".wpwl-control-cardNumber").css({\'direction\': \'ltr\' , "text-align":"right"});\n                    $(".wpwl-brand-card").css(\'right\', \'165px\');\n                    $(".wpwl-brand.wpwl-brand-MADA.wpwl-brand-inline").addClass("wpwl-brand-MADA-Ar");\n                  }\n                  if(').concat("en" == w.split("-")[1], "){\n                    $(\".wpwl-brand-card\").addClass(\"wpwl-brand-Mada-En\");\n                  }\n                  $('form.wpwl-form-card').find('.wpwl-button').before(createRegistrationHtml);\n                  $('.wpwl-form-card').find('.wpwl-button-pay').on('click', function(e){\n                    validateHolder(e);\n                  });\n                },\n                onBeforeSubmitCard: function(e){\n                  return validateHolder(e);\n                }\n                }\n                function validateHolder(e){          \n                return true;\n                }")
								}
							}) : (0, h.jsx)(m(), {
								id: "wpwlOptions",
								strategy: "afterInteractive",
								dangerouslySetInnerHTML: {
									__html: 'var wpwlOptions = {\n  applePay: {\n    displayName: "OneCard",\n    total: { label: "OneCard" },\n    supportedNetworks: ["mada"],\n    supportedCountries: ["SA"],\n    countryCode: "SA",\n    version: 3\n  }\n}'
								}
							}), (0, h.jsx)(m(), {
								src: "".concat("https://oppwa.com/v1/paymentWidgets.js", "?checkoutId=").concat(b),
								onLoad: function() {
									return C(!1)
								}
							}), (0, h.jsx)(m(), {
								src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
							})]
						})
					}), (0, h.jsx)(f.U, {
						VatCertificate: "/"
					})]
				})
			}
		},
		99548: function(n, t, e) {
			"use strict";
			e.r(t), e.d(t, {
				__N_SSP: function() {
					return c
				}
			});
			var a = e(97527),
				r = (e(53698), e(85893));
			var c = !0;
			t.default = function() {
				return (0, r.jsx)(a.Z, {})
			}
		},
		93135: function(n, t, e) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/checkout/pay-form", function() {
				return e(99548)
			}])
		}
	},
	function(n) {
		n.O(0, [6827, 1520, 3507, 9774, 2888, 179], (function() {
			return t = 93135, n(n.s = t);
			var t
		}));
		var t = n.O();
		_N_E = t
	}
]);
