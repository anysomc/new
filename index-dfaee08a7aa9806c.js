(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[5405], {
		71879: function(e, s, n) {
			"use strict";
			n.d(s, {
				Z: function() {
					return r
				}
			});
			var t = n(13530),
				a = n(85893);

			function r() {
				var e = (0, t.$G)("common").t;
				return (0, a.jsx)("section", {
					className: "features-section",
					children: (0, a.jsxs)("div", {
						className: "container",
						children: [(0, a.jsxs)("div", {
							className: "section-head",
							children: [(0, a.jsx)("h2", {
								className: "section-title",
								children: e("Why OneCard?")
							}), (0, a.jsx)("p", {
								className: "section-paragraph",
								children: e("Our goal to provide you the best shopping experience")
							})]
						}), (0, a.jsxs)("div", {
							className: "features-grid",
							children: [(0, a.jsxs)("div", {
								className: "feature",
								children: [(0, a.jsx)("i", {
									className: "las la-hand-holding-usd"
								}), (0, a.jsx)("span", {
									className: "text",
									children: e("Best prices")
								})]
							}), (0, a.jsxs)("div", {
								className: "feature",
								children: [(0, a.jsx)("i", {
									className: "las la-percent"
								}), (0, a.jsx)("span", {
									className: "text",
									children: e("Competitive offers")
								})]
							}), (0, a.jsxs)("div", {
								className: "feature",
								children: [(0, a.jsx)("i", {
									className: "las la-headset"
								}), (0, a.jsx)("span", {
									className: "text",
									children: e("Premium Support")
								})]
							}), (0, a.jsxs)("div", {
								className: "feature",
								children: [(0, a.jsx)("i", {
									className: "las la-mouse"
								}), (0, a.jsx)("span", {
									className: "text",
									children: e("Variety of products")
								})]
							})]
						})]
					})
				})
			}
		},
		20732: function(e, s, n) {
			"use strict";
			n.d(s, {
				Z: function() {
					return d
				}
			});
			var t = n(20441),
				a = n(41664),
				r = n.n(a),
				i = n(13530),
				c = n(90828),
				o = n(1374),
				l = n(85893);

			function d(e) {
				var s, n = e.title,
					a = e.cards,
					d = e.loaded,
					u = e.isList,
					m = e.moreLink,
					h = e.type,
					f = e.className,
					p = e.shouldSlice,
					v = e.settings,
					g = e.timer,
					j = e.showFlashSaleTimer,
					x = e.removeFlashSale,
					w = (0, i.$G)("common").t;
				return !1 !== p && a && (a = a.slice(0, "8")), null !== (s = a) && void 0 !== s && s.length ? (0, l.jsx)("section", {
					className: f,
					children: (0, l.jsxs)("div", {
						className: "container",
						children: [(0, l.jsxs)("div", {
							className: "flashSale" === h ? "products-head flashSale" : "products-head",
							children: [(0, l.jsx)("h2", {
								className: "products-title",
								children: n
							}), "flashSale" === h ? (0, l.jsx)(c.ZP, {
								time: g,
								removeFlashSale: x
							}) : null, !1 !== m && (0, l.jsx)(r(), {
								href: m,
								children: (0, l.jsx)("a", {
									className: "products-more",
									children: w("View all")
								})
							})]
						}), d ? (0, l.jsx)(t.Z, {
							isList: u,
							cards: a,
							type: h,
							settings: v,
							showFlashSaleTimer: j
						}) : (0, l.jsxs)("div", {
							children: [(0, l.jsx)("br", {}), (0, l.jsx)(o.P0, {}), (0, l.jsx)("br", {})]
						}), !1 !== m && (0, l.jsx)(r(), {
							href: m,
							children: (0, l.jsx)("a", {
								className: "products-more",
								children: w("View all")
							})
						})]
					})
				}) : null
			}
		},
		25210: function(e, s, n) {
			"use strict";
			n.d(s, {
				Z: function() {
					return l
				}
			});
			var t = n(20732),
				a = n(67294),
				r = n(74486),
				i = n(13530),
				c = n(1374),
				o = n(85893);

			function l(e) {
				var s = e.settings,
					n = e.store,
					l = (0, i.$G)("common").t,
					d = (0, a.useState)(),
					u = d[0],
					m = d[1];
				return (0, a.useEffect)((function() {
					r.Z.post("recommended-product", {
						recommendedProductType: "home",
						storeCurrencyId: null === n || void 0 === n ? void 0 : n.id
					}).then((function(e) {
						return m(e.data)
					}))
				}), []), u ? (0, o.jsx)(t.Z, {
					cards: u,
					loaded: !0,
					type: "cardsForYou",
					moreLink: "/cards-for-you",
					className: "products-section",
					title: l("Selected cards for you"),
					settings: s
				}) : (0, o.jsx)(c.P0, {})
			}
		},
		76915: function(e, s, n) {
			"use strict";
			n.d(s, {
				Z: function() {
					return r
				}
			});
			var t = n(44866),
				a = (n(36011), {
					apiKey: "".concat("AIzaSyBm7WZxd1nkllN17F1Kf-Chqwy82nEMOd4"),
					authDomain: "".concat("onecard-ios-application.firebaseapp.com"),
					projectId: "".concat("onecard-ios-application"),
					storageBucket: "".concat("onecard-ios-application.appspot.com"),
					messagingSenderId: "".concat("764247152942"),
					appId: "".concat("1:764247152942:web:e68cf9cd4630863d7502bf"),
					measurementId: "".concat("G-56YTHTGVSE")
				});

			function r() {
				t.Z.apps.length || (t.Z.initializeApp(a), "measurementId" in a && t.Z.analytics(), console.log("FireBase Connected"))
			}
		},
		15761: function(e, s, n) {
			"use strict";
			n.d(s, {
				Z: function() {
					return c
				}
			});
			var t = n(50029),
				a = n(87794),
				r = n.n(a),
				i = n(74486);

			function c(e) {
				return o.apply(this, arguments)
			}

			function o() {
				return o = (0, t.Z)(r().mark((function e(s) {
					var n, t = arguments;
					return r().wrap((function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								return n = t.length > 1 && void 0 !== t[1] ? t[1] : {}, e.next = 3, i.Z.post(s, n);
							case 3:
								return e.abrupt("return", e.sent.data);
							case 4:
							case "end":
								return e.stop()
						}
					}), e)
				}))), o.apply(this, arguments)
			}
		},
		4855: function(e, s, n) {
			"use strict";
			n.r(s), n.d(s, {
				__N_SSG: function() {
					return T
				},
				default: function() {
					return F
				}
			});
			var t = n(50029),
				a = n(59499),
				r = n(87794),
				i = n.n(r),
				c = n(9008),
				o = n.n(c),
				l = n(13530),
				d = n(69196),
				u = n(85893);

			function m() {
				var e = (0, l.$G)("common").t,
					s = (0, d.rV)().settingByKey;
				return Boolean(parseInt("1")) ? (0, u.jsx)("section", {
					className: "video-section",
					children: (0, u.jsxs)("div", {
						className: "container",
						children: [(0, u.jsx)("div", {
							className: "section-head",
							children: (0, u.jsx)("h2", {
								className: "section-title",
								children: e("About One Card")
							})
						}), (0, u.jsx)("iframe", {
							className: "video",
							src: s("HomeVideoLink"),
							allowFullScreen: "",
							frameBorder: "0",
							loading: "lazy"
						})]
					})
				}) : null
			}
			var h = n(74486),
				f = n(15725),
				p = n(41664),
				v = n.n(p);

			function g(e) {
				var s = e.images;
				return (0, u.jsx)("main", {
					children: (0, u.jsx)("div", {
						className: "container",
						children: (0, u.jsx)("div", {
							className: "banners-grid",
							children: s.map((function(e, s) {
								return (0, u.jsx)(v(), {
									href: e.redirectUrl ? e.redirectUrl : "javascript:void(0);",
									children: (0, u.jsx)("a", {
										className: "banner ".concat(e.imageType),
										children: (0, u.jsx)("img", {
											src: "".concat("https://downloads.netader.com", "/").concat(e.imageUrl),
											alt: "Hero image"
										})
									})
								}, s)
							}))
						})
					})
				})
			}
			var j = n(20732);

			function x(e) {
				var s = e.images;
				return (0, u.jsx)("section", {
					className: "double-banners",
					children: (0, u.jsx)("div", {
						className: "container",
						children: (0, u.jsx)("div", {
							className: "banners-grid",
							children: s.map((function(e, s) {
								return (0, u.jsx)(v(), {
									href: e.redirectUrl ? e.redirectUrl : "javascript:void(0);",
									children: (0, u.jsx)("a", {
										className: "banner ".concat(e.imageType),
										children: (0, u.jsx)("img", {
											src: "".concat("https://downloads.netader.com", "/").concat(e.imageUrl),
											alt: "Banner image"
										})
									})
								}, s)
							}))
						})
					})
				})
			}
			var w = n(30719),
				N = (n(30933), n(92), n(71911)),
				b = n(67294),
				y = n(19755),
				S = n.n(y);

			function Z(e) {
				var s = e.testimonial,
					n = (0, l.$G)("common").t;
				return (0, b.useEffect)((function() {
					S()(".review").each((function() {
						S()(this).prop("scrollHeight") > 66 && (S()(this).addClass("trim"), S()(this).siblings(".more-cont").show())
					})), S()(".more-text").click((function(e) {
						var s = S()(this).parents(".testimonial").find(".review"),
							n = s.prop("scrollHeight");
						S()(this).toggleClass("active"), S()(this).hasClass("active") ? s.height(n).css("display", "block") : s.height(65)
					}))
				}), []), (0, u.jsxs)("div", {
					className: "testimonial",
					children: [(0, u.jsxs)("div", {
						className: "testimonial-head",
						children: [(0, u.jsx)("h4", {
							className: "user-name",
							children: s.reviewerName
						}), (0, u.jsx)("span", {
							className: "date",
							children: s.reviewDate
						})]
					}), (0, u.jsx)("div", {
						className: "rate-stars",
						children: [1, 2, 3, 4, 5].map((function(e) {
							return (0, u.jsx)("i", {
								className: "las la-star ".concat(e <= s.rating ? "active" : "")
							}, e)
						}))
					}), (0, u.jsx)("div", {
						className: "review",
						children: (0, u.jsx)("p", {
							children: s.review
						})
					}), (0, u.jsx)("div", {
						className: "more-cont",
						children: (0, u.jsxs)("button", {
							className: "more-text",
							children: [(0, u.jsxs)("span", {
								className: "more",
								children: [" ", n("Read More"), " "]
							}), (0, u.jsxs)("span", {
								className: "less",
								children: [" ", n("Close"), " "]
							}), (0, u.jsx)("i", {
								className: "las la-angle-down"
							})]
						})
					})]
				})
			}
			var L = n(50591),
				O = n(11163);

			function k() {
				var e = (0, l.$G)("common").t,
					s = (0, b.useState)([]),
					n = s[0],
					t = s[1],
					a = (0, O.useRouter)().locale;
				return (0, b.useEffect)((function() {
					h.Z.post("reviews", {
						locale: (0, L.$i)(a)
					}).then((function(e) {
						t(e.data)
					}))
				}), []), n && n.length && (0, u.jsx)("section", {
					className: "testimonials-section",
					children: (0, u.jsxs)("div", {
						className: "container",
						children: [(0, u.jsx)("div", {
							className: "section-head",
							children: (0, u.jsx)("h2", {
								className: "section-title",
								children: e("Members Reviews")
							})
						}), (0, u.jsxs)("div", {
							className: "testimonials-slider",
							children: [(0, u.jsx)(w.tq, {
								modules: [N.W_, N.tl],
								loop: !0,
								breakpoints: {
									0: {
										slidesPerView: 1
									},
									767: {
										slidesPerView: 2,
										spaceBetween: 23
									},
									1199: {
										slidesPerView: 3,
										spaceBetween: 30
									}
								},
								pagination: {
									el: ".testimonials-section .swiper-pagination",
									clickable: !0
								},
								navigation: {
									nextEl: ".testimonials-section .swiper-btn-next",
									prevEl: ".testimonials-section .swiper-btn-prev"
								},
								children: n.map((function(e, s) {
									return (0, u.jsx)(w.o5, {
										children: (0, u.jsx)(Z, {
											testimonial: e
										}, s)
									}, s)
								}))
							}), (0, u.jsx)("div", {
								className: "swiper-btn-next swiper-btn",
								children: (0, u.jsx)("span", {
									className: "las la-angle-left"
								})
							}), (0, u.jsx)("div", {
								className: "swiper-btn-prev swiper-btn",
								children: (0, u.jsx)("span", {
									className: "las la-angle-right"
								})
							}), (0, u.jsx)("div", {
								className: "swiper-pagination"
							})]
						})]
					})
				})
			}
			var C = n(71879),
				P = (n(15761), n(25210)),
				_ = n(76915),
				E = n(60525);
			n(33299);

			function I(e, s) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var t = Object.getOwnPropertySymbols(e);
					s && (t = t.filter((function(s) {
						return Object.getOwnPropertyDescriptor(e, s).enumerable
					}))), n.push.apply(n, t)
				}
				return n
			}

			function B(e) {
				for (var s = 1; s < arguments.length; s++) {
					var n = null != arguments[s] ? arguments[s] : {};
					s % 2 ? I(Object(n), !0).forEach((function(s) {
						(0, a.Z)(e, s, n[s])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : I(Object(n)).forEach((function(s) {
						Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(n, s))
					}))
				}
				return e
			}(0, _.Z)();
			var T = !0;

			function F(e) {
				e.cards, e.categories, e.images;
				var s, n, r, c, d, p = e.store,
					v = (0, l.$G)("common").t,
					w = ((0, E.r)(p).data, (0, O.useRouter)().locale),
					N = (0, b.useState)((0, a.Z)({
						offers: [],
						offersLoaded: !1,
						bundles: [],
						bundlesLoaded: !1,
						topSelling: [],
						topSellingLoaded: !1,
						newCards: [],
						newCardsLoaded: !1,
						settings: null,
						categories: [],
						heroImgs: []
					}, "settings", [])),
					y = N[0],
					S = N[1],
					Z = (0, b.useState)({
						flashSale: {
							countdown: null,
							products: []
						},
						flashSaleLoaded: !1
					}),
					L = Z[0],
					_ = Z[1],
					I = function(e, s, n) {
						h.Z.post(e, B({
							storeCurrencyId: null === p || void 0 === p ? void 0 : p.id,
							locale: w.split("-")[1]
						}, n)).then((function(e) {
							return s(e)
						})).catch((function(e) {
							return console.log(e)
						}))
					};
				return (0, b.useEffect)((0, t.Z)(i().mark((function e() {
					return i().wrap((function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								"#_=_" === window.location.hash && window.location.assign("/".concat(null === p || void 0 === p ? void 0 : p.symbol, "-").concat(w.split("-")[1], "/auth/social-login/callback")), console.log("0001"), Promise.all([I("offers", (function(e) {
									return S((function(s) {
										return B(B({}, s), {}, {
											offers: e.data,
											offersLoaded: !0
										})
									}))
								})), I("get-bundles", (function(e) {
									return S((function(s) {
										return B(B({}, s), {}, {
											bundles: e.data,
											bundlesLoaded: !0
										})
									}))
								})), I("top-selling", (function(e) {
									return S((function(s) {
										return B(B({}, s), {}, {
											topSelling: e.data,
											topSellingLoaded: !0
										})
									}))
								})), I("new-cards", (function(e) {
									return S((function(s) {
										return B(B({}, s), {}, {
											newCards: e.data,
											newCardsLoaded: !0
										})
									}))
								})), I("categories", (function(e) {
									return S((function(s) {
										return B(B({}, s), {}, {
											categories: e.data
										})
									}))
								})), I("hero-images", (function(e) {
									return S((function(s) {
										return B(B({}, s), {}, {
											heroImgs: e.data
										})
									}))
								})), I("bitaqatySettings", (function(e) {
									return S((function(s) {
										return B(B({}, s), {}, {
											settings: e.data
										})
									}))
								}))]);
							case 3:
							case "end":
								return e.stop()
						}
					}), e)
				}))), []), (0, b.useEffect)((function() {
					var e, s;
					L.flashSaleLoaded || (null !== (e = L.flashSale) && void 0 !== e && e.countdown || I("flash-sale", (function(e) {
						return _((function(s) {
							return B(B({}, s), {}, {
								flashSale: {
									products: [],
									countdown: e.data.countdown
								}
							})
						}))
					}), {
						action: "countdown"
					}), Date.now() <= L.flashSale.countdown && L.flashSale.countdown && 0 === (null === (s = L.flashSale.products) || void 0 === s ? void 0 : s.length) && I("flash-sale", (function(e) {
						return _((function(s) {
							var n, t;
							return B(B({}, s), {}, {
								flashSale: {
									products: null === (n = e.data) || void 0 === n ? void 0 : n.products,
									countdown: s.flashSale.countdown,
									status: null === (t = e.data) || void 0 === t ? void 0 : t.status
								},
								flashSaleLoaded: !0
							})
						}))
					}), {
						action: "cachedProduct"
					}))
				}), [L]), (0, u.jsxs)(f.Z, {
					categories: y.categories,
					settings: y.settings,
					children: [(0, u.jsxs)(o(), {
						children: [(0, u.jsx)("meta", {
							name: "description",
							content: "OneCard website"
						}), (0, u.jsxs)("title", {
							children: [v("Home Page"), " - ", v("OneCard")]
						})]
					}), y.heroImgs.length ? (0, u.jsx)(g, {
						images: null === (s = y.heroImgs) || void 0 === s ? void 0 : s.filter((function(e) {
							return "hero_image" === e.imageType
						}))
					}) : null, L.flashSaleLoaded && "valid" === (null === (n = L.flashSale) || void 0 === n ? void 0 : n.status) && (0, u.jsx)(j.Z, {
						type: "flashSale",
						moreLink: "/flash-sale",
						title: v("Flash Sale"),
						cards: null === (r = L.flashSale) || void 0 === r ? void 0 : r.products,
						loaded: L.flashSaleLoaded,
						className: "products-section",
						settings: {
							currency: y.settings.currency
						},
						timer: null === (c = L.flashSale) || void 0 === c ? void 0 : c.countdown,
						showFlashSaleTimer: !0,
						removeFlashSale: function() {
							return _((function(e) {
								return B(B({}, e), {}, {
									flashSale: [],
									flashSaleLoaded: !1
								})
							}))
						}
					}), (0, u.jsx)(j.Z, {
						type: "offers",
						cards: y.offers,
						loaded: y.offersLoaded,
						moreLink: "/offers",
						className: "products-section",
						title: v("Offers you can't miss"),
						settings: {
							currency: y.settings.currency
						}
					}), y.heroImgs.length ? (0, u.jsx)(x, {
						images: null === (d = y.heroImgs) || void 0 === d ? void 0 : d.filter((function(e) {
							return "marketing_image" === e.imageType
						}))
					}) : null, (0, u.jsx)("br", {}), (0, u.jsx)("br", {}), (0, u.jsx)(j.Z, {
						type: "bundles",
						moreLink: "/bundles",
						title: v("Bundles deals"),
						cards: y.bundles,
						loaded: y.bundlesLoaded,
						className: "bundles-section",
						settings: {
							currency: y.settings.currency
						}
					}), (0, u.jsx)(j.Z, {
						type: "newCards",
						title: v("Recently added"),
						cards: y.newCards,
						loaded: y.newCardsLoaded,
						moreLink: "/new-cards",
						className: "products-section",
						settings: {
							currency: y.settings.currency
						}
					}), (0, u.jsx)(j.Z, {
						type: "topSelling",
						moreLink: "/top-selling",
						title: v("Bestsellers"),
						cards: y.topSelling,
						loaded: y.topSellingLoaded,
						className: "products-section",
						settings: {
							currency: y.settings.currency
						}
					}), (0, u.jsx)(P.Z, {
						settings: {
							currency: y.settings.currency
						},
						store: p
					}), (0, u.jsx)(m, {}), (0, u.jsx)(C.Z, {}), (0, u.jsx)(k, {})]
				})
			}
		},
		45728: function(e, s, n) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
				return n(4855)
			}])
		}
	},
	function(e) {
		e.O(0, [6827, 2561, 1520, 4841, 9911, 5725, 7046, 1632, 4480, 9774, 2888, 179], (function() {
			return s = 45728, e(e.s = s);
			var s
		}));
		var s = e.O();
		_N_E = s
	}
]);
