(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[8455], {
		20307: function(e, t, n) {
			"use strict";
			n.d(t, {
				ZP: function() {
					return l
				},
				aG: function() {
					return s
				},
				gN: function() {
					return o
				}
			});
			var r = n(41664),
				a = n.n(r),
				i = n(13530),
				c = n(85893);

			function o(e) {
				var t = e.children,
					n = e.isActive;
				return (0, c.jsx)("li", {
					className: n ? "active" : "",
					children: t
				})
			}

			function s(e) {
				var t = e.children,
					n = (0, i.$G)("common").t;
				return (0, c.jsx)("section", {
					className: "breadcrumb-section",
					children: (0, c.jsx)("div", {
						className: "container",
						children: (0, c.jsxs)("ol", {
							className: "breadcrumb",
							children: [(0, c.jsx)("li", {
								children: (0, c.jsx)(a(), {
									href: "/",
									children: (0, c.jsx)("a", {
										children: n("Home Page")
									})
								})
							}), t]
						})
					})
				})
			}

			function l(e) {
				var t = e.items,
					n = (0, i.$G)("common").t;
				return (0, c.jsx)("section", {
					className: "breadcrumb-section",
					children: (0, c.jsx)("div", {
						className: "container",
						children: (0, c.jsxs)("ol", {
							className: "breadcrumb",
							children: [(0, c.jsx)("li", {
								children: (0, c.jsx)(a(), {
									href: "/",
									children: (0, c.jsx)("a", {
										children: n("Home Page")
									})
								})
							}), t.map((function(e, t) {
								return (0, c.jsx)("li", {
									className: e.active ? "active" : "",
									children: e.title
								}, t)
							}))]
						})
					})
				})
			}
		},
		18919: function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, {
				__N_SSG: function() {
					return w
				},
				default: function() {
					return O
				}
			});
			var r = n(59499),
				a = n(67294),
				i = n(34853),
				c = n(9008),
				o = n.n(c),
				s = n(25675),
				l = n.n(s),
				d = n(15725),
				u = n(13530),
				p = n(11163),
				h = n(20307),
				m = n(41664),
				f = n.n(m),
				v = n(33299),
				b = n(69196),
				g = n(74486),
				y = n(85893);

			function x(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function j(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? x(Object(n), !0).forEach((function(t) {
						(0, r.Z)(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : x(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}
			n(9669).default;
			var N = n(79765),
				w = !0;

			function O(e) {
				var t, n = e.categories,
					c = (0, p.useRouter)().locale,
					s = (0, u.$G)("common").t,
					m = (0, a.useState)(!1),
					x = m[0],
					w = m[1],
					O = (0, v.useSession)().data,
					_ = (0, b.Ff)(O).profile;
				t = null !== O && void 0 !== O && O.user ? {
					fullName: null === _ || void 0 === _ ? void 0 : _.userName,
					email: null === _ || void 0 === _ ? void 0 : _.email,
					mobileNumber: null === _ || void 0 === _ ? void 0 : _.mobileNumber,
					type: "",
					comment: "",
					captcha: ""
				} : {
					fullName: "",
					email: "",
					mobileNumber: "",
					type: "",
					comment: "",
					captcha: ""
				};
				var k = {
						suggestion: s("Suggestion"),
						question: s("Question"),
						"out-of-stock": s("Out of stock"),
						complain: s("Complain"),
						others: s("Others")
					},
					E = (0, a.useState)(t),
					C = E[0],
					R = E[1],
					S = (0, a.useState)(t),
					L = S[0],
					P = S[1],
					I = (0, a.useRef)(null);

				function T(e) {
					R(j(j({}, C), {}, (0, r.Z)({}, e.target.name, e.target.value)))
				}
				return (0, y.jsxs)(y.Fragment, {
					children: [(0, y.jsxs)(o(), {
						children: [(0, y.jsx)("meta", {
							name: "description",
							content: "OneCard website"
						}), (0, y.jsxs)("title", {
							children: [s("Contact Us"), " - ", s("OneCard")]
						})]
					}), (0, y.jsxs)(d.Z, {
						categories: n,
						children: [(0, y.jsx)(h.ZP, {
							items: [{
								title: s("Contact Us"),
								active: !0
							}]
						}), (0, y.jsx)("section", {
							className: "page-content",
							children: (0, y.jsx)("div", {
								className: "container",
								children: (0, y.jsxs)("div", {
									className: "row",
									children: [(0, y.jsxs)("div", {
										className: "".concat(x ? "col-lg-12 contactSucceedPage" : "col-lg-6"),
										children: [(0, y.jsx)("h1", {
											className: "page-title",
											children: s("Contact Us")
										}), x && (0, y.jsxs)("div", {
											className: "contact-succeed",
											children: [(0, y.jsx)("span", {
												className: "checked",
												children: (0, y.jsx)("i", {
													className: "las la-check-circle"
												})
											}), (0, y.jsx)("p", {
												className: "succeed-text",
												children: s("Your request has been sent!")
											}), (0, y.jsx)("p", {
												className: "succeed-text",
												children: s("One of our representatives will contact you shortly.")
											}), (0, y.jsxs)("div", {
												className: "succeed-btns",
												children: [(0, y.jsx)(f(), {
													href: "/",
													children: (0, y.jsx)("a", {
														className: "primary-btn succeed-btn",
														children: s("Back to Home Page")
													})
												}), (0, y.jsx)("button", {
													className: "secondary-btn succeed-btn",
													onClick: function() {
														return w(!1)
													},
													children: s("Send again")
												})]
											})]
										}), (0, y.jsxs)("form", {
											className: "contact-form ".concat(x && "d-none"),
											onSubmit: function(e) {
												e.preventDefault();
												var n = {
														fullName: {
															presence: {
																allowEmpty: !1,
																message: "^".concat(s("Full name can't be blank"))
															}
														},
														email: {
															presence: {
																allowEmpty: !1,
																message: "^".concat(s("Email can't be blank"))
															},
															email: {
																message: "^".concat(s("Email is not a valid email"))
															}
														},
														mobileNumber: {
															presence: {
																allowEmpty: !1,
																message: "^".concat(s("Mobile number can't be blank"))
															}
														},
														type: {
															presence: {
																allowEmpty: !1,
																message: "^".concat(s("Type can't be blank"))
															}
														},
														comment: {
															presence: {
																allowEmpty: !1,
																message: "^".concat(s("Comment can't be blank"))
															}
														},
														captcha: {
															presence: {
																allowEmpty: !1,
																message: "^".concat(s("Please verify captcha box"))
															}
														}
													},
													r = {
														fullName: "",
														email: "",
														mobileNumber: "",
														type: "",
														comment: "",
														captcha: ""
													};
												N.formatters.state = function(e) {
													return e.map((function(e) {
														return r[e.attribute] = e.error
													}))
												};
												var a = N(C, n, {
													format: "state"
												});
												P(j(j({}, L), r)), N.isEmpty(a) && g.Z.post("freshDeskCreateTicket", C).then((function(e) {
													201 === e.data ? w(!0) : w(!1), R(t), I.current.reset()
												})).catch((function(e) {
													w(!0), I.current.reset()
												}))
											},
											noValidate: !0,
											children: [(0, y.jsxs)("div", {
												className: "form-group",
												children: [(0, y.jsx)("label", {
													htmlFor: "fullName",
													children: s("Full Name")
												}), (0, y.jsx)("input", {
													type: "text",
													required: !0,
													className: "form-control ".concat(!L.fullName || null !== O && void 0 !== O && O.user ? "" : "is-invalid"),
													name: "fullName",
													id: "fullName",
													value: C.fullName,
													onChange: T,
													onKeyPress: function(e) {
														/[^a-z\u0627-\u064a ]/gi.test(e.key) && e.preventDefault()
													},
													disabled: !(null === O || void 0 === O || !O.user)
												}), !L.fullName || null !== O && void 0 !== O && O.user ? null : (0, y.jsx)("div", {
													className: "invalid-feedback",
													children: L.fullName
												})]
											}), (0, y.jsxs)("div", {
												className: "form-group",
												children: [(0, y.jsx)("label", {
													htmlFor: "email",
													children: s("Email")
												}), (0, y.jsx)("input", {
													required: !0,
													className: "ltr-input form-control ".concat(!L.email || null !== O && void 0 !== O && O.user ? "" : "is-invalid"),
													type: "email",
													name: "email",
													id: "email",
													value: C.email,
													onChange: T,
													disabled: !(null === O || void 0 === O || !O.user)
												}), !L.email || null !== O && void 0 !== O && O.user ? null : (0, y.jsx)("div", {
													className: "invalid-feedback",
													children: L.email
												})]
											}), (0, y.jsxs)("div", {
												className: "form-group",
												children: [(0, y.jsx)("label", {
													htmlFor: "mobileNumber",
													children: s("Mobile")
												}), (0, y.jsxs)("div", {
													className: "input-group",
													children: [(0, y.jsx)("input", {
														type: "tel",
														className: "form-control ".concat(L.mobileNumber ? "is-invalid" : ""),
														name: "mobileNumber",
														id: "mobileNumber",
														value: C.mobileNumber,
														onChange: T,
														onKeyPress: function(e) {
															/[^0-9]/gi.test(e.key) && e.preventDefault()
														},
														disabled: !(null === O || void 0 === O || !O.user)
													}), (0, y.jsxs)("span", {
														className: "country-key",
														children: ["+966", (0, y.jsx)("img", {
															src: "/images/icons/sa.png",
															className: "img-fluid",
															alt: ""
														})]
													})]
												}), !L.mobileNumber || null !== O && void 0 !== O && O.user ? null : (0, y.jsx)("div", {
													className: "invalid-feedback d-block",
													children: L.mobileNumber
												})]
											}), (0, y.jsxs)("div", {
												className: "form-group",
												children: [(0, y.jsx)("label", {
													children: s("Message reason")
												}), (0, y.jsxs)("div", {
													className: "radios-grid",
													children: [Object.keys(k).map((function(e) {
														return (0, y.jsx)("div", {
															className: "radio",
															children: (0, y.jsxs)("label", {
																children: [(0, y.jsx)("input", {
																	type: "radio",
																	name: "type",
																	value: e,
																	checked: C.type === e,
																	onChange: T
																}), (0, y.jsx)("span", {
																	className: "mark",
																	children: ""
																}), k[e]]
															})
														}, e)
													})), (0, y.jsx)("br", {}), L.type && (0, y.jsx)("div", {
														className: "invalid-feedback d-block",
														children: L.type
													})]
												})]
											}), (0, y.jsxs)("div", {
												className: "form-group",
												children: [(0, y.jsx)("label", {
													htmlFor: "comment",
													children: s("Message")
												}), (0, y.jsx)("textarea", {
													className: "form-control ".concat(L.comment ? "is-invalid" : ""),
													name: "comment",
													id: "comment",
													value: C.comment,
													onChange: T
												}), L.comment && (0, y.jsx)("div", {
													className: "invalid-feedback",
													children: L.comment
												})]
											}), (0, y.jsxs)("div", {
												className: "form-group",
												children: [(0, y.jsx)(i.Z, {
													hl: c.split("-")[1],
													ref: I,
													sitekey: "6LfC7p8eAAAAACPIQ8MzWnSEZVF1bBEAGKj9694w",
													onChange: function(e) {
														return function(e) {
															R(j(j({}, C), {}, {
																captcha: e
															}))
														}(e)
													}
												}), L.captcha && (0, y.jsx)("div", {
													className: "invalid-feedback d-block",
													children: L.captcha
												})]
											}), (0, y.jsx)("button", {
												className: "primary-btn form-submit",
												type: "submit",
												children: s("Send")
											})]
										})]
									}), (0, y.jsx)("div", {
										className: "".concat(x ? "d-none" : "col-lg-6"),
										children: (0, y.jsx)("div", {
											className: "contact-img",
											children: (0, y.jsx)(l(), {
												width: 505,
												height: 380,
												src: "/images/contact.png",
												className: "img-fluid"
											})
										})
									})]
								})
							})
						})]
					})]
				})
			}
		},
		84407: function(e, t, n) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/contact-us", function() {
				return n(18919)
			}])
		},
		92703: function(e, t, n) {
			"use strict";
			var r = n(50414);

			function a() {}

			function i() {}
			i.resetWarningCache = a, e.exports = function() {
				function e(e, t, n, a, i, c) {
					if (c !== r) {
						var o = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw o.name = "Invariant Violation", o
					}
				}

				function t() {
					return e
				}
				e.isRequired = e;
				var n = {
					array: e,
					bigint: e,
					bool: e,
					func: e,
					number: e,
					object: e,
					string: e,
					symbol: e,
					any: e,
					arrayOf: t,
					element: e,
					elementType: e,
					instanceOf: t,
					node: e,
					objectOf: t,
					oneOf: t,
					oneOfType: t,
					shape: t,
					exact: t,
					checkPropTypes: i,
					resetWarningCache: a
				};
				return n.PropTypes = n, n
			}
		},
		45697: function(e, t, n) {
			e.exports = n(92703)()
		},
		50414: function(e) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		34853: function(e, t, n) {
			"use strict";
			n.d(t, {
				Z: function() {
					return g
				}
			});
			var r = n(67294),
				a = n(45697),
				i = n.n(a);

			function c() {
				return c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}, c.apply(this, arguments)
			}

			function o(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}
			var s = function(e) {
				var t, n;

				function a() {
					var t;
					return (t = e.call(this) || this).handleExpired = t.handleExpired.bind(o(t)), t.handleErrored = t.handleErrored.bind(o(t)), t.handleChange = t.handleChange.bind(o(t)), t.handleRecaptchaRef = t.handleRecaptchaRef.bind(o(t)), t
				}
				n = e, (t = a).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
				var i = a.prototype;
				return i.getValue = function() {
					return this.props.grecaptcha && void 0 !== this._widgetId ? this.props.grecaptcha.getResponse(this._widgetId) : null
				}, i.getWidgetId = function() {
					return this.props.grecaptcha && void 0 !== this._widgetId ? this._widgetId : null
				}, i.execute = function() {
					var e = this.props.grecaptcha;
					if (e && void 0 !== this._widgetId) return e.execute(this._widgetId);
					this._executeRequested = !0
				}, i.executeAsync = function() {
					var e = this;
					return new Promise((function(t, n) {
						e.executionResolve = t, e.executionReject = n, e.execute()
					}))
				}, i.reset = function() {
					this.props.grecaptcha && void 0 !== this._widgetId && this.props.grecaptcha.reset(this._widgetId)
				}, i.handleExpired = function() {
					this.props.onExpired ? this.props.onExpired() : this.handleChange(null)
				}, i.handleErrored = function() {
					this.props.onErrored && this.props.onErrored(), this.executionReject && (this.executionReject(), delete this.executionResolve, delete this.executionReject)
				}, i.handleChange = function(e) {
					this.props.onChange && this.props.onChange(e), this.executionResolve && (this.executionResolve(e), delete this.executionReject, delete this.executionResolve)
				}, i.explicitRender = function() {
					if (this.props.grecaptcha && this.props.grecaptcha.render && void 0 === this._widgetId) {
						var e = document.createElement("div");
						this._widgetId = this.props.grecaptcha.render(e, {
							sitekey: this.props.sitekey,
							callback: this.handleChange,
							theme: this.props.theme,
							type: this.props.type,
							tabindex: this.props.tabindex,
							"expired-callback": this.handleExpired,
							"error-callback": this.handleErrored,
							size: this.props.size,
							stoken: this.props.stoken,
							hl: this.props.hl,
							badge: this.props.badge
						}), this.captcha.appendChild(e)
					}
					this._executeRequested && this.props.grecaptcha && void 0 !== this._widgetId && (this._executeRequested = !1, this.execute())
				}, i.componentDidMount = function() {
					this.explicitRender()
				}, i.componentDidUpdate = function() {
					this.explicitRender()
				}, i.componentWillUnmount = function() {
					void 0 !== this._widgetId && (this.delayOfCaptchaIframeRemoving(), this.reset())
				}, i.delayOfCaptchaIframeRemoving = function() {
					var e = document.createElement("div");
					for (document.body.appendChild(e), e.style.display = "none"; this.captcha.firstChild;) e.appendChild(this.captcha.firstChild);
					setTimeout((function() {
						document.body.removeChild(e)
					}), 5e3)
				}, i.handleRecaptchaRef = function(e) {
					this.captcha = e
				}, i.render = function() {
					var e = this.props,
						t = (e.sitekey, e.onChange, e.theme, e.type, e.tabindex, e.onExpired, e.onErrored, e.size, e.stoken, e.grecaptcha, e.badge, e.hl, function(e, t) {
							if (null == e) return {};
							var n, r, a = {},
								i = Object.keys(e);
							for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
							return a
						}(e, ["sitekey", "onChange", "theme", "type", "tabindex", "onExpired", "onErrored", "size", "stoken", "grecaptcha", "badge", "hl"]));
					return r.createElement("div", c({}, t, {
						ref: this.handleRecaptchaRef
					}))
				}, a
			}(r.Component);
			s.displayName = "ReCAPTCHA", s.propTypes = {
				sitekey: i().string.isRequired,
				onChange: i().func,
				grecaptcha: i().object,
				theme: i().oneOf(["dark", "light"]),
				type: i().oneOf(["image", "audio"]),
				tabindex: i().number,
				onExpired: i().func,
				onErrored: i().func,
				size: i().oneOf(["compact", "normal", "invisible"]),
				stoken: i().string,
				hl: i().string,
				badge: i().oneOf(["bottomright", "bottomleft", "inline"])
			}, s.defaultProps = {
				onChange: function() {},
				theme: "light",
				type: "image",
				tabindex: 0,
				size: "normal",
				badge: "bottomright"
			};
			var l = n(8679),
				d = n.n(l);

			function u() {
				return u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}, u.apply(this, arguments)
			}
			var p = {},
				h = 0;
			var m = "onloadcallback";
			var f, v, b = (f = function() {
					return "https://" + (("undefined" !== typeof window && window.recaptchaOptions || {}).useRecaptchaNet ? "recaptcha.net" : "www.google.com") + "/recaptcha/api.js?onload=" + m + "&render=explicit"
				}, v = (v = {
					callbackName: m,
					globalName: "grecaptcha"
				}) || {}, function(e) {
					var t = e.displayName || e.name || "Component",
						n = function(t) {
							var n, a;

							function i(e, n) {
								var r;
								return (r = t.call(this, e, n) || this).state = {}, r.__scriptURL = "", r
							}
							a = t, (n = i).prototype = Object.create(a.prototype), n.prototype.constructor = n, n.__proto__ = a;
							var c = i.prototype;
							return c.asyncScriptLoaderGetScriptLoaderID = function() {
								return this.__scriptLoaderID || (this.__scriptLoaderID = "async-script-loader-" + h++), this.__scriptLoaderID
							}, c.setupScriptURL = function() {
								return this.__scriptURL = "function" === typeof f ? f() : f, this.__scriptURL
							}, c.asyncScriptLoaderHandleLoad = function(e) {
								var t = this;
								this.setState(e, (function() {
									return t.props.asyncScriptOnLoad && t.props.asyncScriptOnLoad(t.state)
								}))
							}, c.asyncScriptLoaderTriggerOnScriptLoaded = function() {
								var e = p[this.__scriptURL];
								if (!e || !e.loaded) throw new Error("Script is not loaded.");
								for (var t in e.observers) e.observers[t](e);
								delete window[v.callbackName]
							}, c.componentDidMount = function() {
								var e = this,
									t = this.setupScriptURL(),
									n = this.asyncScriptLoaderGetScriptLoaderID(),
									r = v,
									a = r.globalName,
									i = r.callbackName,
									c = r.scriptId;
								if (a && "undefined" !== typeof window[a] && (p[t] = {
										loaded: !0,
										observers: {}
									}), p[t]) {
									var o = p[t];
									return o && (o.loaded || o.errored) ? void this.asyncScriptLoaderHandleLoad(o) : void(o.observers[n] = function(t) {
										return e.asyncScriptLoaderHandleLoad(t)
									})
								}
								var s = {};
								s[n] = function(t) {
									return e.asyncScriptLoaderHandleLoad(t)
								}, p[t] = {
									loaded: !1,
									observers: s
								};
								var l = document.createElement("script");
								for (var d in l.src = t, l.async = !0, v.attributes) l.setAttribute(d, v.attributes[d]);
								c && (l.id = c);
								var u = function(e) {
									if (p[t]) {
										var n = p[t].observers;
										for (var r in n) e(n[r]) && delete n[r]
									}
								};
								i && "undefined" !== typeof window && (window[i] = function() {
									return e.asyncScriptLoaderTriggerOnScriptLoaded()
								}), l.onload = function() {
									var e = p[t];
									e && (e.loaded = !0, u((function(t) {
										return !i && (t(e), !0)
									})))
								}, l.onerror = function() {
									var e = p[t];
									e && (e.errored = !0, u((function(t) {
										return t(e), !0
									})))
								}, document.body.appendChild(l)
							}, c.componentWillUnmount = function() {
								var e = this.__scriptURL;
								if (!0 === v.removeOnUnmount)
									for (var t = document.getElementsByTagName("script"), n = 0; n < t.length; n += 1) t[n].src.indexOf(e) > -1 && t[n].parentNode && t[n].parentNode.removeChild(t[n]);
								var r = p[e];
								r && (delete r.observers[this.asyncScriptLoaderGetScriptLoaderID()], !0 === v.removeOnUnmount && delete p[e])
							}, c.render = function() {
								var t = v.globalName,
									n = this.props,
									a = (n.asyncScriptOnLoad, n.forwardedRef),
									i = function(e, t) {
										if (null == e) return {};
										var n, r, a = {},
											i = Object.keys(e);
										for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
										return a
									}(n, ["asyncScriptOnLoad", "forwardedRef"]);
								return t && "undefined" !== typeof window && (i[t] = "undefined" !== typeof window[t] ? window[t] : void 0), i.ref = a, (0, r.createElement)(e, i)
							}, i
						}(r.Component),
						a = (0, r.forwardRef)((function(e, t) {
							return (0, r.createElement)(n, u({}, e, {
								forwardedRef: t
							}))
						}));
					return a.displayName = "AsyncScriptLoader(" + t + ")", a.propTypes = {
						asyncScriptOnLoad: i().func
					}, d()(a, e)
				})(s),
				g = b
		}
	},
	function(e) {
		e.O(0, [6827, 2561, 5725, 9774, 2888, 179], (function() {
			return t = 84407, e(e.s = t);
			var t
		}));
		var t = e.O();
		_N_E = t
	}
]);
