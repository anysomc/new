(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[2473], {
		1374: function(e, n, t) {
			"use strict";
			t.d(n, {
				Ik: function() {
					return f
				},
				P0: function() {
					return h
				},
				Tr: function() {
					return y
				},
				hW: function() {
					return v
				},
				mv: function() {
					return b
				},
				tN: function() {
					return E
				},
				yA: function() {
					return p
				}
			});
			var o = t(59499),
				r = t(13530),
				s = t(67294),
				i = (t(79765), t(41664)),
				a = t.n(i),
				l = t(41520),
				c = t(182),
				u = t(85893);

			function d(e, n) {
				var t = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(e);
					n && (o = o.filter((function(n) {
						return Object.getOwnPropertyDescriptor(e, n).enumerable
					}))), t.push.apply(t, o)
				}
				return t
			}

			function m(e) {
				for (var n = 1; n < arguments.length; n++) {
					var t = null != arguments[n] ? arguments[n] : {};
					n % 2 ? d(Object(t), !0).forEach((function(n) {
						(0, o.Z)(e, n, t[n])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach((function(n) {
						Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
					}))
				}
				return e
			}

			function p() {
				return (0, u.jsx)("img", {
					src: "/images/logo.svg",
					className: "img-fluid",
					alt: r.ag.t("One Card Logo")
				})
			}

			function v(e) {
				var n = e.content,
					t = e.hideAfter,
					o = (0, s.useState)(!1),
					r = o[0],
					i = o[1];
				return t && setTimeout((function() {
					return i(!0)
				}), 1e3 * t), !r && (0, u.jsxs)("div", {
					className: "form-error-alert",
					children: [(0, u.jsx)("i", {
						className: "las la-info-circle"
					}), n]
				})
			}

			function f(e) {
				var n = e.content,
					t = e.hideAfter,
					o = e.reset,
					r = (0, s.useState)(null !== o && void 0 !== o && o),
					i = r[0],
					a = r[1];
				return t && setTimeout((function() {
					return a(!0)
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

			function y(e) {
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
							return (0, u.jsx)(a(), {
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

			function E(e) {
				var n = e.removeItem,
					t = e.removeModelItem,
					o = e.setShowRemoveCardModal,
					s = e.showRemoveCardModal,
					i = e.settings,
					a = function() {
						return o(!1)
					},
					d = (0, r.$G)("common").t;
				return (0, u.jsx)(u.Fragment, {
					children: (0, u.jsx)(l.Z, {
						show: s,
						onHide: a,
						centered: !0,
						keyboard: !1,
						className: "deleteConfirm",
						children: (0, u.jsxs)(l.Z.Body, {
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
										var r, s, a, l, u;
										n(t.id), o(!1), (0, c.q)("remove_from_cart", {
											currency: null === i || void 0 === i || null === (r = i.currency) || void 0 === r ? void 0 : r.symbol,
											value: +t.price,
											items: [{
												item_id: "".concat(t.id),
												item_name: t.title,
												discount: null !== t && void 0 !== t && null !== (s = t.native) && void 0 !== s && s.productWithOffer ? +(null === t || void 0 === t || null === (a = t.native) || void 0 === a ? void 0 : a.individualPrice) - +(null === t || void 0 === t || null === (l = t.native) || void 0 === l ? void 0 : l.individualPriceAfter) : 0,
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
									onClick: a,
									className: "default-btn modal-btn",
									children: d("Keep card")
								})]
							})]
						})
					})
				})
			}

			function b() {
				return (0, u.jsx)(a(), {
					href: "/contact-us",
					children: (0, u.jsx)("a", {
						target: "_blank",
						rel: "noreferrer",
						children: r.ag.t("Customer service")
					})
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
			var o = t(50591),
				r = t(67294),
				s = t(85893);

			function i(e) {
				var n = e.children;
				return (0, r.useEffect)((function() {
					(0, o.et)((function() {
						return document.body.classList.add("noHeader")
					}))
				}), []), (0, r.useEffect)(o.sN, []), (0, s.jsx)(s.Fragment, {
					children: n
				})
			}
		},
		182: function(e, n, t) {
			"use strict";
			t.d(n, {
				q: function() {
					return r
				}
			});
			var o = t(44866),
				r = (t(36011), function(e, n) {
					try {
						o.Z.analytics().logEvent(e, n)
					} catch (t) {
						console.log(t)
					}
				})
		},
		37773: function(e, n, t) {
			"use strict";
			t.d(n, {
				DG: function() {
					return u
				},
				Pl: function() {
					return d
				},
				cZ: function() {
					return m
				},
				jl: function() {
					return c
				}
			});
			var o = t(50029),
				r = t(87794),
				s = t.n(r),
				i = t(19607),
				a = t.n(i),
				l = {
					autoConfig: !0,
					debug: !0
				},
				c = function(e, n) {
					try {
						t.e(1767).then(t.t.bind(t, 51767, 23)).then((function(e) {
							return e.default
						})).then((function(t) {
							t.init("1284086739174941", l), t.track(e, n), console.log("Pixel successs")
						}))
					} catch (o) {
						console.log(o)
					}
				},
				u = function(e, n) {
					try {
						t.e(780).then(t.bind(t, 40780)).then((function(e) {
							return e.default
						})).then((function(t) {
							t.init("".concat("CFH788BC77UEUGLE4Q20"), l), t.track(e, n), console.log("Pixel successs")
						}))
					} catch (o) {
						console.log(o)
					}
				},
				d = function(e, n) {
					try {
						t.e(7569).then(t.t.bind(t, 27569, 23)).then((function(e) {
							return e.default
						})).then((function(t) {
							t.init("".concat("fe83abcf-05b3-44a1-87cd-69f2095b76f9"), l), t.track(e, n), console.log("Pixel successs")
						}))
					} catch (o) {
						console.log(o)
					}
				},
				m = function() {
					var e = (0, o.Z)(s().mark((function e(n, t) {
						var o;
						return s().wrap((function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									return e.next = 2, t;
								case 2:
									o = e.sent, a().init("".concat("odtrq")), a().track(n, o);
								case 5:
								case "end":
									return e.stop()
							}
						}), e)
					})));
					return function(n, t) {
						return e.apply(this, arguments)
					}
				}()
		},
		19607: function(e) {
			var n, t = {
				init: function(e) {
					var t, o, r, s, i, a;
					n = e, t = window, o = document, r = "script", t.twq || (s = t.twq = function() {
						s.exe ? s.exe.apply(s, arguments) : s.queue.push(arguments)
					}, s.version = "1.1", s.queue = [], (i = o.createElement(r)).async = !0, i.src = "//static.ads-twitter.com/uwt.js", (a = o.getElementsByTagName(r)[0]).parentNode.insertBefore(i, a)), n ? twq("init", n) : console.error("TwitterConvTrkr.init(convId) missing conversion id.")
				},
				pageView: function() {
					n ? twq("track", "PageView") : console.error("TwitterConvTrkr init must be called first.")
				},
				track: function(e, t) {
					n ? twq("event", e, t) : console.error("TwitterConvTrkr init must be called first.")
				}
			};
			e.exports = t
		},
		48824: function(e, n, t) {
			"use strict";
			t.r(n), t.d(n, {
				__N_SSP: function() {
					return G
				},
				default: function() {
					return F
				}
			});
			var o = t(50029),
				r = t(16835),
				s = t(59499),
				i = t(87794),
				a = t.n(i),
				l = t(33299),
				c = t(67294),
				u = t(11163),
				d = t(50591),
				m = t(74486),
				p = t(182),
				v = t(37773),
				f = t(35471),
				h = t(9008),
				y = t.n(h),
				E = t(41664),
				b = t.n(E),
				g = t(55285),
				N = t(13530),
				I = t(1374),
				x = t(82578),
				j = t(85893),
				O = function(e) {
					var n, t, o, r, s, i, a, l, c, m = e.state,
						p = e.changePhoneCode,
						v = e.isDisabled,
						f = (0, u.useRouter)();
					return (0, j.jsx)("div", {
						className: "phoneCodes",
						children: (0, j.jsxs)(x.Z, {
							className: "phoneCodesSelect",
							children: [(0, j.jsxs)(x.Z.Toggle, {
								style: {
									color: v && "black",
									fontWeight: v && "bold"
								},
								disabled: v,
								className: "phoneCodesSelect",
								variant: "success",
								id: "dropdown-basic",
								children: [(0, j.jsx)("img", {
									src: "".concat("https://downloads.netader.com", "/").concat(null === (n = m.country) || void 0 === n ? void 0 : n.flagPath),
									alt: ""
								}), "+", 0 == (null === (t = m.country) || void 0 === t || null === (o = t.phoneCode) || void 0 === o ? void 0 : o.toString()[0]) && 0 == (null === (r = m.country) || void 0 === r || null === (s = r.phoneCode) || void 0 === s ? void 0 : s.toString()[1]) ? null === (i = m.country) || void 0 === i || null === (a = i.phoneCode) || void 0 === a ? void 0 : a.toString().substring(2) : null === (l = m.country) || void 0 === l ? void 0 : l.phoneCode]
							}), (0, j.jsx)(x.Z.Menu, {
								className: "phoneCodesSelect",
								children: null === (c = m.allCountries) || void 0 === c ? void 0 : c.map((function(e) {
									return (0, j.jsxs)(x.Z.Item, {
										href: "#",
										onClick: function() {
											return p(e)
										},
										children: [(0, j.jsx)("span", {
											className: "country-name",
											children: "ar" === (0, d.$i)(f.locale) ? e.nameAr : e.nameEn
										}), (0, j.jsxs)("div", {
											className: "".concat((0, d.$i)(f.locale)),
											children: [(0, j.jsx)("span", {
												children: 0 == e.phoneCode[0] && 0 == e.phoneCode[1] ? "".concat(e.phoneCode.substring(2), "+") : e.phoneCode
											}), (0, j.jsx)("img", {
												src: "".concat("https://downloads.netader.com", "/").concat(e.flagPath),
												alt: " "
											})]
										})]
									}, e.phoneCode)
								}))
							})]
						})
					})
				},
				C = t(9632),
				T = function(e) {
					var n, t, o, r, s, i, a, l, u, d = e.state,
						m = e.handleOnInput,
						p = e.handleSubmit,
						v = e.itemsRef,
						f = e.resendActivation,
						h = e.isMailOtpForm,
						y = (0, N.$G)().t,
						E = (0, c.useState)(!1),
						g = E[0],
						x = E[1];
					(0, c.useEffect)((function() {
						g && setTimeout((function() {
							x(!1)
						}), 3e4)
					}), [g]);
					return (0, j.jsxs)(j.Fragment, {
						children: [(0, j.jsxs)("div", {
							className: "otp-submit-container",
							children: [3006 === (null === (n = d.response) || void 0 === n || null === (t = n.phoneEditResponse) || void 0 === t ? void 0 : t.mobileNumber) || "customer_not_found" === (null === (o = d.response) || void 0 === o ? void 0 : o.phoneEditResponse) ? (0, j.jsx)("span", {
								className: "auth-error",
								children: y("Mobile already registered")
							}) : 220 === (null === (r = d.response) || void 0 === r || null === (s = r.phoneEditResponse) || void 0 === s ? void 0 : s.mobileNumber) ? (0, j.jsx)("span", {
								className: "auth-error",
								children: y("Invalid Mobile number")
							}) : null, (0, j.jsx)("p", {
								children: y("Please enter the verification code")
							}), (0, j.jsx)("div", {
								className: "inputs-numbers",
								children: (0, C.Z)(Array(5)).map((function(e, n) {
									return (0, j.jsx)("input", {
										type: "text",
										maxLength: "1",
										onKeyDown: function(e) {
											return function(e, n) {
												/^\d+$/.test(e.key) || "Backspace" === e.key || e.preventDefault(), "Backspace" === e.key && 0 !== n && "" === v.current[n].value && (v.current[n].value = "", v.current[n - 1].focus())
											}(e, n)
										},
										onInput: function(e) {
											return function(e, n) {
												e.nativeEvent.data && 4 !== n && v.current[n + 1].focus(), m(v)
											}(e, n)
										},
										placeholder: "0",
										className: "form-control code-input login-otp",
										ref: function(e) {
											return v.current[n] = e
										}
									}, h ? "m".concat(n) : n)
								}))
							}), "WRONG_VERIFICATION_CODE" === (null === (i = d.response) || void 0 === i ? void 0 : i.statusEnum) || "WRONG_MAIL_VERIFICATION_CODE" === d.response.statusEnum ? (0, j.jsx)("span", {
								className: "auth-error",
								children: y("Wrong Verification Code")
							}) : "CUSTOMERBLOCKEDDUETOREACHMAXOTPVERIFICATIONMOBILE" === (null === (a = d.response) || void 0 === a ? void 0 : a.statusEnum) || "CUSTOMERBLOCKEDDUETOREACHMAXOTPVERIFICATIONMAIL" === (null === (l = d.response) || void 0 === l ? void 0 : l.statusEnum) ? (0, j.jsxs)("span", {
								className: "auth-error",
								children: [y("Maximum attempts to send a verification code have been reached, You can contact our"), " ", (0, j.jsx)(b(), {
									href: "/contact-us",
									children: y("Customer service")
								})]
							}) : null, g && (0, j.jsx)("p", {
								className: "not-recevied-otp",
								children: y("verification code has been sent successfully")
							}), null !== (u = d.response) && void 0 !== u && u.hideResendButton ? (0, j.jsx)("p", {
								className: "not-recevied-otp",
								children: " "
							}) : (0, j.jsxs)("p", {
								className: "not-recevied-otp",
								children: [y(h ? "Didn't receive code via email?" : "Didn't receive code?"), (0, j.jsx)("span", {
									onClick: function() {
										g || (f("resend"), x(!0))
									},
									style: {
										opacity: g && ".5",
										cursor: g && "not-allowed"
									},
									children: y("Resend the code")
								})]
							}), d.response.hasOwnProperty("numberOfUsedSms") && (0, j.jsxs)("span", {
								className: "invalid-feedback d-block",
								children: [d.response.numberOfUsedSms - 1, " ", y("Of"), " ", 3]
							})]
						}), (0, j.jsx)("button", {
							style: {
								marginBottom: "40px",
								opacity: d.otp.length <= 4 && "0.5",
								cursor: d.otp.length <= 4 ? "not-allowed" : "pointer"
							},
							className: "primary-btn submit-btn ".concat(d.signInisLoading ? "isLoading disabled" : ""),
							onClick: p,
							children: y(h ? "Verify your email" : "Verify")
						}), (0, j.jsx)("p", {
							className: "support-link",
							children: (0, j.jsx)(N.cC, {
								i18nKey: "customer_service_help",
								t: y,
								components: [(0, j.jsx)(I.mv, {}, "customer_service_help")]
							})
						})]
					})
				},
				_ = function(e) {
					var n = e.state,
						t = e.handleLogin,
						o = (0, N.$G)().t;
					(0, u.useRouter)();
					return (0, c.useEffect)((function() {
						setTimeout((function() {
							t(n.response)
						}), 6e3)
					}), []), (0, j.jsxs)("div", {
						className: "small-body",
						style: {
							display: "flex",
							flexDirection: "column",
							justifyContent: "flex-start",
							alignItems: "center"
						},
						children: [(0, j.jsx)("span", {
							className: "checked",
							children: (0, j.jsx)("i", {
								className: "las la-check-circle"
							})
						}), (0, j.jsx)("p", {
							children: o("Congratulation! Your account has been activated")
						}), (0, j.jsx)("p", {
							children: o("Welcome to onecard family")
						}), (0, j.jsx)("p", {
							children: o("We wish you a enjoyable shopping experience")
						}), (0, j.jsx)("button", {
							type: "submit",
							disabled: n.signInisLoading,
							onClick: function() {
								return t(n.response)
							},
							className: "primary-btn submit-btn ".concat(n.signInisLoading ? "isLoading disabled" : ""),
							children: o("Continue Shopping")
						})]
					})
				};

			function A(e, n) {
				var t = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(e);
					n && (o = o.filter((function(n) {
						return Object.getOwnPropertyDescriptor(e, n).enumerable
					}))), t.push.apply(t, o)
				}
				return t
			}

			function L(e) {
				for (var n = 1; n < arguments.length; n++) {
					var t = null != arguments[n] ? arguments[n] : {};
					n % 2 ? A(Object(t), !0).forEach((function(n) {
						(0, s.Z)(e, n, t[n])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach((function(n) {
						Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
					}))
				}
				return e
			}
			var w = function(e) {
					var n, t, o, r, s, i, a, l, m, p, v, f, h, y = e.state,
						E = e.settings,
						x = e.handleChange,
						O = e.handleSubmit,
						C = e.controller,
						T = (0, N.$G)().t,
						A = (0, u.useRouter)().locale,
						w = (0, c.useState)({
							isNotValidEmail: !1,
							isNotValidName: !1
						}),
						R = w[0],
						S = w[1],
						M = function() {
							var e, n, t, o, r, s, i, a, l, c, u, d, m, p = {
								isNotValidEmail: !1,
								emailExist: !1,
								isNotValidName: !1
							};
							S(p);
							return null !== (e = y.newUserInfo) && void 0 !== e && e.email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) && null !== (n = y.newUserInfo) && void 0 !== n && n.email.length || (p = L(L({}, p), {}, {
								isNotValidEmail: !0
							})), null !== (t = y.newUserInfo) && void 0 !== t && t.name.length && !/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~1-9]/.test(null === (o = y.newUserInfo) || void 0 === o ? void 0 : o.name) || (p = L(L({}, p), {}, {
								isNotValidName: !0
							})), ("FORM_ERRORS" === (null === (r = y.response) || void 0 === r ? void 0 : r.statusEnum) && 3002 === (null === (s = y.response) || void 0 === s || null === (i = s.formErrors) || void 0 === i ? void 0 : i.userNameExists) || "FORM_ERRORS" === (null === (a = y.response) || void 0 === a ? void 0 : a.statusEnum) && 3005 === (null === (l = y.response) || void 0 === l || null === (c = l.formErrors) || void 0 === c ? void 0 : c.userNameExists) || "FORM_ERRORS" === (null === (u = y.response) || void 0 === u ? void 0 : u.statusEnum) && 3006 === (null === (d = y.response) || void 0 === d || null === (m = d.formErrors) || void 0 === m ? void 0 : m.userNameExists)) && (p = L(L({}, p), {}, {
								emailExist: !0
							})), S(p), !p.isNotValidEmail && !p.isNotValidName
						},
						P = y.newUserInfo.email.length >= 5 && y.newUserInfo.name.length;
					return (0, j.jsx)(g.Z, {
						children: (0, j.jsxs)("div", {
							className: "user-form-body",
							children: [(0, j.jsxs)("div", {
								className: "user-form-cont",
								children: [(0, j.jsx)("div", {
									className: "small-head",
									children: (0, j.jsx)(b(), {
										href: "/",
										children: (0, j.jsx)("a", {
											className: "logo",
											children: (0, j.jsx)(I.yA, {})
										})
									})
								}), "VALIDATE_MAIL_OTP" === (null === (n = y.response) || void 0 === n ? void 0 : n.prevStep) && y.response.userToken ? (0, j.jsx)(_, {
									state: y,
									handleLogin: C.handleLogin
								}) : (0, j.jsxs)("div", {
									className: "small-body",
									children: [(0, j.jsx)("h1", {
										className: "small-body-title",
										children: T("Registration almost done")
									}), (0, j.jsxs)("form", {
										className: "log-form singnup",
										onSubmit: function(e) {
											e.preventDefault()
										},
										noValidate: !0,
										children: [(0, j.jsx)("p", {
											children: T("Please enter your email to send the verification code")
										}), (0, j.jsxs)("div", {
											className: "form-group",
											children: [(0, j.jsx)("div", {
												className: "input-cont-icon  ".concat((0, d.$i)(A)),
												children: (0, j.jsx)("input", {
													type: "email",
													value: null === (t = y.newUserInfo) || void 0 === t ? void 0 : t.mail,
													onChange: function(e) {
														x("EMAIL_TYPING", e.target.value), S((function(e) {
															return L(L({}, e), {}, {
																isNotValidEmail: !1
															})
														}))
													},
													className: "".concat("ar" === (0, d.$i)(A) ? "rtl-input" : "ltr-input", " form-control  ").concat(null !== (o = y.formErrors) && void 0 !== o && o.username ? "is-invalid" : ""),
													placeholder: T("Your Email"),
													style: {
														margin: "30px 0"
													}
												})
											}), R.isNotValidEmail && null !== (r = y.newUserInfo) && void 0 !== r && r.email.length ? (0, j.jsx)("span", {
												className: "auth-error",
												children: T("Email is not a valid email")
											}) : !R.isNotValidEmail || null !== (s = y.newUserInfo) && void 0 !== s && s.email.length ? 3002 === (null === (i = y.response) || void 0 === i || null === (a = i.formErrors) || void 0 === a ? void 0 : a.userNameExists) || 3005 === (null === (l = y.response) || void 0 === l || null === (m = l.formErrors) || void 0 === m ? void 0 : m.userNameExists) ? (0, j.jsx)("span", {
												className: "auth-error",
												children: T("This email address is already registered at OneCard")
											}) : null : (0, j.jsx)("span", {
												className: "auth-error",
												children: T("Email can't be blank")
											}), (0, j.jsx)("div", {
												className: "input-cont-icon",
												children: (0, j.jsx)("input", {
													type: "email",
													value: null === (p = y.newUserInfo) || void 0 === p ? void 0 : p.name,
													onChange: function(e) {
														x("USERNAME_TYPING", e.target.value), S((function(e) {
															return L(L({}, e), {}, {
																isNotValidName: !1
															})
														}))
													},
													className: "".concat("ar" === (0, d.$i)(A) ? "rtl-input" : "ltr-input", " form-control  ").concat(null !== (v = y.formErrors) && void 0 !== v && v.username ? "is-invalid" : ""),
													placeholder: T("First Name"),
													style: {
														margin: "30px 0"
													},
													onKeyPress: function(e) {
														var n, t;
														(/[\s]/.test(e.key) && 0 === (null === (n = y.newUserInfo) || void 0 === n || null === (t = n.name) || void 0 === t ? void 0 : t.length) || !/[a-zA-Z\u0627-\u064a\s]/.test(e.key)) && e.preventDefault()
													}
												})
											}), !R.isNotValidName || null !== (f = y.newUserInfo) && void 0 !== f && f.name.length ? R.isNotValidName && (null === (h = y.newUserInfo) || void 0 === h ? void 0 : h.name.length) >= 0 ? (0, j.jsx)("span", {
												className: "auth-error",
												children: T("Name is not valid")
											}) : null : (0, j.jsx)("span", {
												className: "auth-error",
												children: T("Full name can't be blank")
											})]
										}), (0, j.jsx)("button", {
											type: "submit",
											disabled: y.signInisLoading,
											style: {
												opacity: P ? "1" : ".5"
											},
											onClick: function() {
												return M() ? O() : M()
											},
											className: "primary-btn submit-btn ".concat(y.signInisLoading ? "isLoading disabled" : ""),
											children: T("Send Verfication Code")
										}), (0, j.jsxs)("p", {
											className: "singup-terms",
											children: [T("By procceding you accept"), " ", (0, j.jsx)(b(), {
												href: "/terms",
												children: T("Terms")
											})]
										})]
									})]
								}), (0, j.jsxs)("div", {
									className: "small-footer",
									children: [(0, j.jsx)("p", {
										className: "copyrights",
										children: T("\xa9 OneCard 2023 - All rights reserved")
									}), (0, j.jsxs)("div", {
										className: "maarof-vat",
										children: [(0, j.jsx)("a", {
											href: "https://maroof.sa/270224",
											className: "maarof",
											target: "_blank",
											rel: "noreferrer",
											children: (0, j.jsx)("img", {
												src: "/images/icons/maroof.png",
												className: "img-fluid"
											})
										}), (0, j.jsx)(b(), {
											href: E.appSet.VATCertificate,
											children: (0, j.jsx)("a", {
												className: "vat",
												target: "_blank",
												children: (0, j.jsx)("img", {
													src: "/images/icons/vat.svg",
													className: "img-fluid",
													alt: "VATCertificate"
												})
											})
										})]
									})]
								})]
							}), (0, j.jsx)("div", {
								className: "user-form-img",
								children: (0, j.jsx)("img", {
									src: "/images/user-banners/login.jpg",
									className: "img-fluid"
								})
							})]
						})
					})
				},
				R = t(34853),
				S = function(e) {
					var n, t, o, r, s, i, a, l, m, p, v, f, h, E, x, C, _, A, L, S, M, P, U, k, D, V, G, F, Z, B, q, Y, $, H = e.state,
						K = e.settings,
						W = e.csrfToken,
						z = e.controller,
						X = (0, N.$G)().t,
						Q = (0, u.useRouter)().locale,
						J = (0, c.useState)(),
						ee = J[0],
						ne = (J[1], (0, c.useRef)([])),
						te = (0, c.useRef)([]),
						oe = (0, c.useRef)(),
						re = "MOBILE_VERIFIED_EMAIL_NOT_VERIFIED" === (null === H || void 0 === H || null === (n = H.response) || void 0 === n ? void 0 : n.statusEnum) && !(null !== H && void 0 !== H && null !== (t = H.response) && void 0 !== t && t.email) || "VALIDATE_MAIL_OTP" === (null === (o = H.response) || void 0 === o ? void 0 : o.prevStep) && H.response.userToken || "activated" === (null === H || void 0 === H ? void 0 : H.response.type) || (null === (r = H.response) || void 0 === r || null === (s = r.formErrors) || void 0 === s ? void 0 : s.hasOwnProperty("userNameExists")) && "EMAIL_SENT_SUCCESSFULLY" !== (null === H || void 0 === H || null === (i = H.response) || void 0 === i ? void 0 : i.statusEnum) && "MOBILE_VERIFIED_EMAIL_NOT_VERIFIED" !== (null === H || void 0 === H || null === (a = H.response) || void 0 === a ? void 0 : a.statusEnum) && !H.mailEditable && !H.reActivationResponse,
						se = "OTP_SENT_SUCCESSFULLY" === (null === (l = H.response) || void 0 === l ? void 0 : l.statusEnum) || "WRONG_VERIFICATION_CODE" === (null === (m = H.response) || void 0 === m ? void 0 : m.statusEnum) || H.response.hasOwnProperty("numberOfUsedSms") || H.response.phoneEditable || "CUSTOMERBLOCKEDDUETOREACHMAXOTPVERIFICATIONMOBILE" === (null === (p = H.response) || void 0 === p ? void 0 : p.statusEnum);
					H.response;
					var ie = "EMAIL_SENT_SUCCESSFULLY" === (null === (v = H.response) || void 0 === v ? void 0 : v.statusEnum) || "MOBILE_VERIFIED_EMAIL_NOT_VERIFIED" === (null === H || void 0 === H || null === (f = H.response) || void 0 === f ? void 0 : f.statusEnum) && (null === H || void 0 === H || null === (h = H.response) || void 0 === h || null === (E = h.email) || void 0 === E ? void 0 : E.length) > 0 || "VALIDATE_MAIL_OTP" === (null === (x = H.response) || void 0 === x ? void 0 : x.prevStep) || "NOT_VERIFIED" === H.response.statusEnum || "WRONG_MAIL_VERIFICATION_CODE" === (null === (C = H.response) || void 0 === C ? void 0 : C.statusEnum) || "CUSTOMERBLOCKEDDUETOREACHMAXOTPVERIFICATIONMAIL" === (null === (_ = H.response) || void 0 === _ ? void 0 : _.statusEnum) || (null === (A = H.response) || void 0 === A || null === (L = A.formErrors) || void 0 === L ? void 0 : L.hasOwnProperty("userNameExists")) && H.mailEditable,
						ae = (0, c.useRef)(null),
						le = (0, c.useState)(null),
						ce = le[0],
						ue = le[1];
					return re ? (0, j.jsx)(w, {
						state: H,
						settings: K,
						handleChange: function(e, n) {
							return z.newUserSignUpInfo(e, n)
						},
						controller: z,
						handleSubmit: z.requestMailOtp
					}) : (0, j.jsxs)(g.Z, {
						children: [(0, j.jsxs)(y(), {
							children: [(0, j.jsx)("meta", {
								name: "description",
								content: "Sign In - OneCard website :)"
							}), (0, j.jsxs)("title", {
								children: [X("Sign In"), " - ", X("OneCard")]
							})]
						}), (0, j.jsxs)("div", {
							className: "user-form-body",
							children: [(0, j.jsxs)("div", {
								className: "user-form-cont",
								children: [(0, j.jsx)("div", {
									className: "small-head",
									children: (0, j.jsx)(b(), {
										href: "/",
										children: (0, j.jsx)("a", {
											className: "logo",
											children: (0, j.jsx)(I.yA, {})
										})
									})
								}), (0, j.jsxs)("div", {
									className: "small-body",
									children: [ie ? (0, j.jsx)("h1", {
										className: "small-body-title",
										children: X("One step left")
									}) : null !== (S = H.response) && void 0 !== S && S.isActive ? (0, j.jsx)("h1", {
										className: "small-body-title",
										children: X("Sign In")
									}) : (0, j.jsx)("h1", {
										className: "small-body-title",
										children: X("Sign In Or Sign Up")
									}), (0, j.jsxs)("form", {
										className: "log-form",
										onSubmit: function(e) {
											e.preventDefault()
										},
										noValidate: !0,
										children: [H.error && (0, j.jsxs)("div", {
											className: "form-error-alert",
											children: [(0, j.jsx)("i", {
												className: "las la-info-circle"
											}), H.error]
										}), ee && (0, j.jsxs)("div", {
											className: "form-success-alert",
											children: [(0, j.jsx)("i", {
												className: "las la-info-circle"
											}), ee]
										}), (0, j.jsx)("input", {
											name: "csrfToken",
											type: "hidden",
											defaultValue: W
										}), se ? (0, j.jsxs)("p", {
											children: [X("Verification code has been sent to your mobile number"), H.phoneEditable ? (0, j.jsxs)("span", {
												className: "seamless-edit-phone-submit",
												onClick: null !== (M = H.response) && void 0 !== M && M.isActive ? z.requestMobileOtp : z.changeMobile,
												children: [X("Send"), (0, j.jsx)("i", {
													style: {
														transform: "ar" === (0, d.$i)(Q) ? "rotate(270deg)" : "rotate(90deg)"
													},
													className: "las la-location-arrow"
												})]
											}) : (0, j.jsxs)("span", {
												className: "seamless-edit-phone",
												onClick: z.initiateMobileEditing,
												children: [(0, j.jsx)("span", {
													children: X("Edit")
												}), (0, j.jsx)("i", {
													className: "las la-pen"
												})]
											})]
										}) : ie || "NOT_VERIFIED" === H.response ? (0, j.jsx)(j.Fragment, {
											children: (0, j.jsxs)("p", {
												children: [(0, j.jsx)("p", {
													children: X("Verification code has been sent to your email")
												}), H.mailEditable ? (0, j.jsxs)("span", {
													className: "seamless-edit-phone-submit",
													onClick: z.changeUserEmail,
													children: [X("Send"), (0, j.jsx)("i", {
														style: {
															transform: "ar" === (0, d.$i)(Q) ? "rotate(270deg)" : "rotate(90deg)"
														},
														className: "las la-location-arrow"
													}), " "]
												}) : (0, j.jsxs)("span", {
													className: "seamless-edit-phone",
													onClick: function() {
														return z.toggleMailEdit(oe)
													},
													children: [X("Edit"), (0, j.jsx)("i", {
														className: "las la-pen"
													})]
												})]
											})
										}) : (0, j.jsx)("p", {
											children: X("Please enter your mobile number")
										}), (0, j.jsxs)("div", {
											className: "form-group",
											children: [ie ? (0, j.jsxs)("div", {
												className: "input-cont-icon auth-phone",
												children: [(0, j.jsx)("input", {
													tabIndex: 1,
													type: "email",
													value: null === (P = H.newUserInfo) || void 0 === P ? void 0 : P.email,
													disabled: ie && !H.mailEditable,
													onChange: function(e) {
														return z.handleMailTyping(e.target.value)
													},
													className: "".concat("ar" === (0, d.$i)(Q) ? "rtl-input" : "ltr-input", " form-control  ").concat(null !== (U = H.formErrors) && void 0 !== U && U.username ? "is-invalid" : ""),
													ref: oe
												}), null !== (k = H.formErrors) && void 0 !== k && k.unvalidEmail ? (0, j.jsx)("span", {
													className: "auth-error",
													children: X("Email is not a valid email")
												}) : null !== (D = H.formErrors) && void 0 !== D && D.emptyEmail ? (0, j.jsx)("span", {
													className: "auth-error",
													children: X("Email can't be blank")
												}) : null !== (V = H.formErrors) && void 0 !== V && V.userNameExists ? (0, j.jsx)("span", {
													className: "auth-error",
													children: X("This email address is already registered at OneCard")
												}) : null]
											}) : (0, j.jsxs)("div", {
												className: "input-cont-icon auth-phone ".concat((0, d.$i)(Q)),
												children: [(0, j.jsx)("i", {
													className: "las la-mobile-alt input-icon"
												}), (0, j.jsx)("input", {
													tabIndex: 1,
													type: "email",
													value: H.mobile,
													disabled: se && !H.phoneEditable,
													onChange: function(e) {
														return z.handleMobileTyping(e.target.value)
													},
													className: "".concat("ar" === (0, d.$i)(Q) ? "rtl-input" : "ltr-input", " form-control  ").concat(null !== (G = H.formErrors) && void 0 !== G && G.username ? "is-invalid" : ""),
													placeholder: X("Please, enter your mobile number"),
													onKeyPress: function(e) {
														(/[^0-9]/gi.test(e.key) || H.mobile.length >= 15) && e.preventDefault()
													}
												}), "submitOtp" !== (null === H || void 0 === H ? void 0 : H.response.type) && (0, j.jsx)(j.Fragment, {
													children: (0, j.jsx)(O, {
														state: H,
														changePhoneCode: function(e) {
															return z.selectCountry(e)
														},
														isDisabled: se
													})
												})]
											}), (null === (F = H.formErrors) || void 0 === F ? void 0 : F.username) && (0, j.jsx)("div", {
												className: "invalid-feedback d-block",
												children: null === (Z = H.formErrors) || void 0 === Z ? void 0 : Z.username
											})]
										}), se ? (0, j.jsx)(T, {
											state: H,
											handleOnInput: function(e) {
												return z.otpTyping(e)
											},
											handleSubmit: z.submitMobileOtp,
											itemsRef: ne,
											resendActivation: z.resendActivation
										}) : ie ? (0, j.jsx)(T, {
											state: H,
											handleOnInput: function(e) {
												return z.otpTyping(e)
											},
											handleSubmit: z.submitMailOtp,
											itemsRef: te,
											resendActivation: z.requestMailOtp,
											isMailOtpForm: ie
										}) : (0, j.jsxs)(j.Fragment, {
											children: [(0, j.jsx)("div", {
												style: {
													display: "flex",
													justifyContent: "center",
													marginBottom: "10px"
												},
												children: (0, j.jsx)(R.Z, {
													hl: Q.split("-")[1],
													ref: ae,
													sitekey: "6LfC7p8eAAAAACPIQ8MzWnSEZVF1bBEAGKj9694w",
													onChange: function(e) {
														return ue(e)
													}
												})
											}), (0, j.jsx)("button", {
												type: "submit",
												disabled: H.signInisLoading,
												style: {
													opacity: H.mobile.length > 6 && ce ? "1" : "0.5"
												},
												onClick: ce && z.requestMobileOtp,
												className: "primary-btn submit-btn ".concat(H.signInisLoading ? "isLoading disabled" : ""),
												children: X("Send Verfication Code")
											}), "NOT_VALID_STORE_COUNTRY" === (null === (B = H.response) || void 0 === B ? void 0 : B.statusEnum) || 220 === (null === (q = H.response) || void 0 === q || null === (Y = q.formErrors) || void 0 === Y ? void 0 : Y.mobileNumber) ? (0, j.jsx)("span", {
												className: "auth-error",
												children: X("Invalid Mobile number")
											}) : "USER_NOT_AUTHORIZED" === (null === ($ = H.response) || void 0 === $ ? void 0 : $.statusEnum) ? (0, j.jsx)(j.Fragment, {
												children: (0, j.jsxs)("span", {
													className: "auth-error",
													children: [X("You can\u2019t login using this account, Please contact"), " ", (0, j.jsx)(b(), {
														href: "/contact-us",
														children: X("Customer service")
													})]
												})
											}) : null]
										})]
									})]
								}), (0, j.jsxs)("div", {
									className: "small-footer",
									children: [(0, j.jsx)("p", {
										className: "copyrights",
										children: X("\xa9 OneCard 2023 - All rights reserved")
									}), (0, j.jsxs)("div", {
										className: "maarof-vat",
										children: [(0, j.jsx)("a", {
											href: "https://maroof.sa/270224",
											className: "maarof",
											target: "_blank",
											rel: "noreferrer",
											children: (0, j.jsx)("img", {
												src: "/images/icons/maroof.png",
												className: "img-fluid"
											})
										}), (0, j.jsx)(b(), {
											href: K.appSet.VATCertificate,
											children: (0, j.jsx)("a", {
												className: "vat",
												target: "_blank",
												children: (0, j.jsx)("img", {
													src: "/images/icons/vat.svg",
													className: "img-fluid",
													alt: "VATCertificate"
												})
											})
										})]
									})]
								})]
							}), (0, j.jsx)("div", {
								className: "user-form-img",
								children: (0, j.jsx)("img", {
									src: "/images/user-banners/login.jpg",
									className: "img-fluid"
								})
							})]
						})]
					})
				},
				M = (t(79765), t(42474)),
				P = t.n(M);

			function U(e, n) {
				var t = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(e);
					n && (o = o.filter((function(n) {
						return Object.getOwnPropertyDescriptor(e, n).enumerable
					}))), t.push.apply(t, o)
				}
				return t
			}

			function k(e) {
				for (var n = 1; n < arguments.length; n++) {
					var t = null != arguments[n] ? arguments[n] : {};
					n % 2 ? U(Object(t), !0).forEach((function(n) {
						(0, s.Z)(e, n, t[n])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : U(Object(t)).forEach((function(n) {
						Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
					}))
				}
				return e
			}
			var D = {
				allCountries: [],
				country: {},
				mobile: "",
				response: {
					type: "dev"
				},
				reActivationResponse: null,
				formErrors: null,
				error: null,
				signInisLoading: !1,
				otp: "",
				phoneEditable: !1,
				mailEditable: !1,
				newUserInfo: {
					email: "",
					name: ""
				},
				prevInfo: {},
				stores: []
			};

			function V() {
				var e, n, t, o, r, s, i, a, l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : D,
					c = arguments.length > 1 ? arguments[1] : void 0;
				return "GET_STORES" === c.type ? k(k({}, l), {}, {
					stores: c.payload.data
				}) : "GET_COUNTRIES" === c.type ? k(k({}, l), {}, {
					allCountries: c.payload.data
				}) : "SELECT_COUNTRY" === c.type ? k(k({}, l), {}, {
					country: c.payload.data
				}) : "MOBILE_TYPING" === c.type ? k(k({}, l), {}, {
					mobile: c.payload.data,
					response: k(k({}, l.response), {}, {
						statusEnum: "OTP_SENT_SUCCESSFULLY" === (null === (e = l.response) || void 0 === e ? void 0 : e.statusEnum) ? null === (n = l.response) || void 0 === n ? void 0 : n.statusEnum : null,
						formErrors: {}
					})
				}) : "OTP_TYPING" === c.type ? k(k({}, l), {}, {
					otp: c.payload.data.current.map((function(e) {
						return e.value
					})).join("")
				}) : "CHANGE_MOBILE_NUMBER" === c.type ? k(k({}, l), {}, {
					response: k(k({}, l.response), {}, {
						phoneEditResponse: c.payload.data
					}),
					phoneEditable: !1,
					mobile: "success_edit_mobileNumber" === c.payload.data ? c.payload.mobile : null === (t = l.prevInfo) || void 0 === t ? void 0 : t.mobile
				}) : "INITIATE_MOBILE_EDITING" === c.type ? k(k({}, l), {}, {
					phoneEditable: !0,
					prevInfo: {
						mobile: l.mobile
					},
					response: k(k({}, l.response), {}, {
						phoneEditResponse: null
					})
				}) : "INITIATE_EMAIL_EDITING" === c.type ? k(k({}, l), {}, {
					mailEditable: !0,
					prevInfo: {
						email: null === (o = l.newUserInfo) || void 0 === o ? void 0 : o.email
					}
				}) : "EMAIL_TYPING" === c.type ? k(k({}, l), {}, {
					newUserInfo: k(k({}, l.newUserInfo), {}, {
						email: c.payload.value
					}),
					response: k(k({}, l.response), {}, {
						formErrors: {
							userNameExists: null
						}
					})
				}) : "USERNAME_TYPING" === c.type ? k(k({}, l), {}, {
					newUserInfo: k(k({}, l.newUserInfo), {}, {
						name: c.payload.value
					})
				}) : "REQUEST_MOBILE_OTP" === c.type ? k(k({}, l), {}, {
					response: c.payload.data,
					signInisLoading: !1,
					phoneEditable: !1,
					mobile: c.payload.mobile
				}) : "RESEND_ACTIVATION" === c.type ? k(k({}, l), {}, {
					response: k(k({}, c.payload.data), {}, {
						isActive: null === (r = l.response) || void 0 === r ? void 0 : r.isActive
					})
				}) : "RESEND_MAIL_ACTIVATION" === c.type ? k(k({}, l), {}, {
					reActivationResponse: c.payload.data
				}) : "VALIDATE_MOBILE_OTP" === c.type ? k(k({}, l), {}, {
					response: k(k({}, c.payload.data), {}, {
						isActive: null === (s = l.response) || void 0 === s ? void 0 : s.isActive
					}),
					otp: "",
					newUserInfo: k(k({}, l.newUserInfo), {}, {
						email: null !== (i = c.payload.data) && void 0 !== i && i.email ? c.payload.data.email : ""
					}),
					signInisLoading: !1
				}) : "REQUEST_MAIL_OTP" === c.type ? k(k({}, l), {}, {
					response: c.payload.data,
					signInisLoading: !1
				}) : "VALIDATE_MAIL_OTP" === c.type ? k(k({}, l), {}, {
					response: k(k({}, c.payload.data), {}, {
						prevStep: "VALIDATE_MAIL_OTP"
					}),
					signInisLoading: !1
				}) : "UPDATE_CUSTOMER_EMAIL" === c.type ? k(k({}, l), {}, {
					reActivationResponse: c.payload.data,
					mailEditable: !1,
					editInfo: {},
					formErrors: {}
				}) : "TOGGLE_SIGNIN_LOADING" === c.type ? k(k({}, l), {}, {
					signInisLoading: !0
				}) : "FORM_ERROR" === c.type ? k(k({}, l), {}, {
					formErrors: c.payload.data,
					newUserInfo: k(k({}, l.newUserInfo), {}, {
						email: null === (a = l.prevInfo) || void 0 === a ? void 0 : a.email
					}),
					mailEditable: !1
				}) : l
			}
			var G = !0;

			function F(e) {
				var n = e.csrfToken,
					t = e.settings,
					s = function(e) {
						var n = e.store,
							t = (0, c.useReducer)(V, D),
							s = t[0],
							i = t[1],
							h = (0, u.useRouter)(),
							y = h.locale,
							E = y.split("-"),
							b = (0, r.Z)(E, 2),
							g = (b[0], b[1]),
							N = function(e, n) {
								var t = "".concat("DTKBeu5XDyao06f89bjUzL0Pm1w8tlFE").concat(e, "=").concat(n).concat("DTKBeu5XDyao06f89bjUzL0Pm1w8tlFE");
								return P().createHash("sha256").update(t).digest("hex")
							},
							I = function(e) {
								return i({
									type: "GET_COUNTRIES",
									payload: {
										data: e
									}
								})
							},
							x = function(e) {
								return i({
									type: "GET_STORES",
									payload: {
										data: e
									}
								})
							},
							j = function(e) {
								return i({
									type: "SELECT_COUNTRY",
									payload: {
										data: e
									}
								})
							},
							O = function() {
								return i({
									type: "TOGGLE_SIGNIN_LOADING"
								})
							},
							C = function() {
								return 0 == s.mobile[0] ? s.mobile.substring(1) : s.mobile
							},
							T = function() {
								var e = (0, o.Z)(a().mark((function e(n) {
									var t, r, i, c, u;
									return a().wrap((function(e) {
										for (;;) switch (e.prev = e.next) {
											case 0:
												if (null === n || void 0 === n || null === (t = n.store) || void 0 === t || !t.symbol) {
													e.next = 5;
													break
												}
												console.log("this runed"), r = null === n || void 0 === n || null === (i = n.store) || void 0 === i ? void 0 : i.symbol, e.next = 8;
												break;
											case 5:
												return e.next = 7, null === (c = s.stores.find((function(e) {
													return e.id === s.country.storeId
												}))) || void 0 === c ? void 0 : c.symbol;
											case 7:
												r = e.sent;
											case 8:
												if (u = {
														userToken: null === n || void 0 === n ? void 0 : n.userToken,
														mobileNumber: null === n || void 0 === n ? void 0 : n.mobileNumber,
														fullName: null === n || void 0 === n ? void 0 : n.fullName,
														phoneCode: null === n || void 0 === n ? void 0 : n.phoneCode,
														email: null === n || void 0 === n ? void 0 : n.email,
														userStoreId: null === n || void 0 === n ? void 0 : n.userStoreId,
														storeSymbol: r,
														storeName: JSON.stringify({
															nameEn: s.country.nameEn,
															nameAr: s.country.nameAr
														}),
														storeCurrencyId: +s.country.storeId
													}, null === n || void 0 === n || !n.userToken) {
													e.next = 12;
													break
												}
												return e.next = 12, (0, l.signIn)("credentials", k(k({}, u), {}, {
													redirect: !1
												})).then(function() {
													var e = (0, o.Z)(a().mark((function e(n) {
														return a().wrap((function(e) {
															for (;;) switch (e.prev = e.next) {
																case 0:
																	null !== n && void 0 !== n && n.ok && ((0, p.q)("login", {
																		method: "Email & Password"
																	}), (0, v.jl)("Login", {
																		content_category: "Login",
																		content_type: "product"
																	}), (0, f.Lq)("Login", {
																		method: "Email & Password",
																		status: "Success"
																	}), (0, v.Pl)("Login", {}), window.location.assign(h.query.callbackUrl ? "/".concat(r, "-").concat(y.split("-")[1], "/").concat(h.query.callbackUrl) : "/".concat(r, "-").concat(y.split("-")[1], "/")));
																case 1:
																case "end":
																	return e.stop()
															}
														}), e)
													})));
													return function(n) {
														return e.apply(this, arguments)
													}
												}());
											case 12:
											case "end":
												return e.stop()
										}
									}), e)
								})));
								return function(n) {
									return e.apply(this, arguments)
								}
							}(),
							_ = function() {
								var e;
								s.mobile.length <= 5 || ((null === (e = s.prevInfo) || void 0 === e ? void 0 : e.mobile) !== C() ? (O(), m.Z.post("/v2/generate-mobile-otp", {
									storeCurrencyId: s.country.storeId,
									mobileNumber: C(),
									selectedCountry: s.country.id,
									receiveNewsLetter: !0,
									phoneCode: s.country.phoneCode,
									signature: N("Mobilenumber", C()),
									locale: g
								}).then((function(e) {
									i({
										type: "REQUEST_MOBILE_OTP",
										payload: {
											data: e.data,
											mobile: C()
										}
									})
								})).catch((function(e) {
									return console.log(e)
								}))) : i({
									type: "CHANGE_MOBILE_NUMBER",
									payload: {
										data: s.response
									}
								}))
							},
							A = function() {
								var e = (0, o.Z)(a().mark((function e() {
									return a().wrap((function(e) {
										for (;;) switch (e.prev = e.next) {
											case 0:
												return e.next = 2, (0, d.SV)(y);
											case 2:
												e.sent.isContainsAllAppCountries ? m.Z.post("allStoreCurrencies-details").then((function(e) {
													var n = [],
														t = e.data.find((function(e) {
															return e.symbol === y.split("-")[0]
														})),
														o = k(k({}, t.baseLookupResponseDTOList.find((function(e) {
															return e.mainCountryPerStore
														}))), {}, {
															storeId: t.id
														});
													e.data.map((function(e) {
														e.baseLookupResponseDTOList.map((function(t) {
															n.push(k(k({}, t), {}, {
																storeId: e.id
															}))
														}))
													})), x(e.data), I(n), j(o)
												})) : m.Z.post("storeCurrencies-countries").then((function(e) {
													var n = [],
														t = e.data.find((function(e) {
															return e.symbol === y.split("-")[0]
														})),
														o = k(k({}, t.baseLookupResponseDTOList.find((function(e) {
															return e.mainCountryPerStore
														}))), {}, {
															storeId: t.id
														});
													e.data.map((function(e) {
														e.baseLookupResponseDTOList.map((function(t) {
															n.push(k(k({}, t), {}, {
																storeId: e.id
															}))
														}))
													})), x(e.data), I(n), j(o)
												}));
											case 4:
											case "end":
												return e.stop()
										}
									}), e)
								})));
								return function() {
									return e.apply(this, arguments)
								}
							}();
						return {
							state: s,
							controller: {
								saveCountries: I,
								selectCountry: j,
								requestMobileOtp: _,
								toggleMailEdit: function(e) {
									e && setTimeout((function() {
										e.current.focus()
									}), 100), i({
										type: "INITIATE_EMAIL_EDITING"
									})
								},
								handleMobileTyping: function(e) {
									return i({
										type: "MOBILE_TYPING",
										payload: {
											data: e
										}
									})
								},
								handleMailTyping: function(e) {
									return i({
										type: "EMAIL_TYPING",
										payload: {
											value: e
										}
									})
								},
								otpTyping: function(e) {
									return i({
										type: "OTP_TYPING",
										payload: {
											data: e
										}
									})
								},
								submitMobileOtp: function() {
									s.otp.length <= 4 || (O(), m.Z.post("/v2/validate-mobile-otp", {
										storeCurrencyId: null !== n && void 0 !== n && n.id ? null === n || void 0 === n ? void 0 : n.id : s.country.storeId,
										selectedCountry: s.country.id,
										receiveNewsLetter: !0,
										mobileNumber: "".concat(s.country.phoneCode).concat(C()),
										phoneCode: s.country.phoneCode,
										lang: g,
										locale: g,
										signature: N("Mobilenumber", "".concat(s.country.phoneCode).concat(C())),
										mobileVerificationCode: s.otp
									}).then(function() {
										var e = (0, o.Z)(a().mark((function e(n) {
											return a().wrap((function(e) {
												for (;;) switch (e.prev = e.next) {
													case 0:
														if (!n.data.userToken) {
															e.next = 6;
															break
														}
														return e.next = 3, T(k(k({}, n.data), {}, {
															locale: y.split("-")[1]
														}));
													case 3:
														return e.abrupt("return");
													case 6:
														i({
															type: "VALIDATE_MOBILE_OTP",
															payload: {
																data: n.data
															}
														});
													case 7:
													case "end":
														return e.stop()
												}
											}), e)
										})));
										return function(n) {
											return e.apply(this, arguments)
										}
									}()).catch((function(e) {
										return console.log(e)
									})))
								},
								newUserSignUpInfo: function(e, n) {
									return i({
										type: e,
										payload: {
											value: n
										}
									})
								},
								toggleIsLoading: function() {
									return i({
										type: "TOGGLE_SIGNIN_LOADING"
									})
								},
								submitMailOtp: function() {
									var e, t;
									s.otp.length <= 4 || (O(), m.Z.post("/v2/validate-otp-mail", {
										lang: g,
										locale: g,
										username: null === (e = s.newUserInfo) || void 0 === e ? void 0 : e.email,
										storeCurrencyId: null !== n && void 0 !== n && n.id ? null === n || void 0 === n ? void 0 : n.id : s.country.storeId,
										mobileNumber: C(),
										selectedCountry: s.country.id,
										receiveNewsLetter: !0,
										phoneCode: s.country.phoneCode,
										mailVerificationCode: s.otp,
										signature: N("username", null === s || void 0 === s || null === (t = s.newUserInfo) || void 0 === t ? void 0 : t.email)
									}).then(function() {
										var e = (0, o.Z)(a().mark((function e(n) {
											return a().wrap((function(e) {
												for (;;) switch (e.prev = e.next) {
													case 0:
														i({
															type: "VALIDATE_MAIL_OTP",
															payload: {
																data: n.data
															}
														});
													case 1:
													case "end":
														return e.stop()
												}
											}), e)
										})));
										return function(n) {
											return e.apply(this, arguments)
										}
									}()).catch((function(e) {
										return console.log(e)
									})))
								},
								getAllCountries: A,
								changeUserEmail: function() {
									var e, n, t, o, r, a, l, c;
									0 !== (null === (e = s.newUserInfo) || void 0 === e ? void 0 : e.email.length) ? null !== (n = s.newUserInfo) && void 0 !== n && n.email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ? (null === (t = s.newUserInfo) || void 0 === t ? void 0 : t.email) !== (null === (o = s.prevInfo) || void 0 === o ? void 0 : o.email) ? m.Z.post("/v2/updateCustomerEmail", {
										oldEmail: null === (r = s.prevInfo) || void 0 === r ? void 0 : r.email,
										newEmail: null === (a = s.newUserInfo) || void 0 === a ? void 0 : a.email,
										storeCurrencyId: null === (l = s.country) || void 0 === l ? void 0 : l.storeId,
										mobileNumber: "".concat(s.country.phoneCode).concat(C()),
										locale: g,
										signature: N("oldEmail", null === s || void 0 === s || null === (c = s.prevInfo) || void 0 === c ? void 0 : c.email)
									}).then((function(e) {
										var n, t, o;
										3002 === (null === (n = e.data) || void 0 === n ? void 0 : n.userNameExists) || 3005 === (null === (t = e.data) || void 0 === t ? void 0 : t.userNameExists) ? i({
											type: "FORM_ERROR",
											payload: {
												data: {
													userNameExists: !0
												}
											}
										}) : 4002 === (null === (o = e.data) || void 0 === o ? void 0 : o.mailInvalid) ? i({
											type: "FORM_ERROR",
											payload: {
												data: {
													unvalidEmail: !0
												}
											}
										}) : i({
											type: "UPDATE_CUSTOMER_EMAIL",
											payload: {
												data: e.data
											}
										})
									})).catch((function(e) {
										return console.log(e)
									})) : i({
										type: "UPDATE_CUSTOMER_EMAIL",
										payload: {
											data: null
										}
									}) : i({
										type: "FORM_ERROR",
										payload: {
											data: {
												unvalidEmail: !0
											}
										}
									}) : i({
										type: "FORM_ERROR",
										payload: {
											data: {
												emptyEmail: !0
											}
										}
									})
								},
								resendActivation: function() {
									m.Z.post("/v2/resendActivation", {
										storeCurrencyId: s.country.storeId,
										userName: null,
										mobileNumber: "".concat(s.country.phoneCode).concat(C()),
										selectedCountry: s.country.id,
										receiveNewsLetter: !0,
										newActivation: !0,
										locale: g,
										signature: N("Mobilenumber", "".concat(s.country.phoneCode).concat(C()))
									}).then((function(e) {
										i({
											type: "RESEND_ACTIVATION",
											payload: {
												data: e.data
											}
										})
									})).catch((function(e) {
										return console.log(e)
									}))
								},
								requestMailOtp: function(e) {
									var n, t;
									"resend" !== e && O(), m.Z.post("/v2/generate-otp-mail", {
										lang: g,
										locale: g,
										storeCurrencyId: s.country.storeId,
										mobileNumber: "".concat(s.country.phoneCode).concat(s.mobile),
										selectedCountry: s.country.id,
										receiveNewsLetter: !0,
										phoneCode: s.country.phoneCode,
										username: "resend" === e ? null : null === (n = s.newUserInfo) || void 0 === n ? void 0 : n.email,
										fullName: "resend" === e ? null : null === (t = s.newUserInfo) || void 0 === t ? void 0 : t.name,
										signature: N("Mobilenumber", "".concat(s.country.phoneCode).concat(s.mobile))
									}).then((function(e) {
										i({
											type: "REQUEST_MAIL_OTP",
											payload: {
												data: e.data
											}
										})
									})).catch((function(e) {
										return console.log(e)
									}))
								},
								changeMobile: function() {
									var e, n, t;
									(null === (e = s.prevInfo) || void 0 === e ? void 0 : e.mobile) === s.mobile ? i({
										type: "CHANGE_MOBILE_NUMBER",
										payload: {
											data: s.response
										}
									}) : i(m.Z.post("/v2/edit-mobileNumber", {
										mobileNumber: "".concat(C()),
										phoneCode: s.country.phoneCode,
										oldmobileNumber: "".concat(s.country.phoneCode).concat(null === (n = s.prevInfo) || void 0 === n ? void 0 : n.mobile),
										username: null,
										selectedCountry: s.country.id,
										storeCurrencyId: null === (t = s.country) || void 0 === t ? void 0 : t.storeId,
										signature: N("Mobilenumber", C()),
										locale: g
									}).then((function(e) {
										var n;
										3006 === (null === (n = e.data) || void 0 === n ? void 0 : n.mobileNumber) ? _() : i({
											type: "CHANGE_MOBILE_NUMBER",
											payload: {
												data: e.data,
												mobile: C()
											}
										})
									})).catch((function(e) {
										return console.log(e)
									})))
								},
								handleLogin: T,
								initiateMobileEditing: function() {
									return i({
										type: "INITIATE_MOBILE_EDITING"
									})
								},
								trimedMobile: C
							}
						}
					}({
						store: e.store
					}),
					i = s.state,
					h = s.controller;
				return (0, c.useEffect)((function() {
					h.getAllCountries()
				}), []), (0, j.jsx)(S, {
					state: i,
					settings: t,
					csrfToken: n,
					controller: h
				})
			}
		},
		3477: function(e, n, t) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/auth", function() {
				return t(48824)
			}])
		}
	},
	function(e) {
		e.O(0, [6827, 1520, 4841, 7210, 9774, 2888, 179], (function() {
			return n = 3477, e(e.s = n);
			var n
		}));
		var n = e.O();
		_N_E = n
	}
]);
