/**
 * Bundled by jsDelivr using Rollup v2.74.1 and Terser v5.15.1.
 * Original file: /npm/swiper@8.4.6/swiper.esm.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import { getWindow as e, getDocument as t } from "/npm/ssr-window@4.0.2/+esm";
import {
	$ as s,
	addClass as a,
	removeClass as i,
	hasClass as r,
	toggleClass as n,
	attr as l,
	removeAttr as o,
	transform as d,
	transition as p,
	on as c,
	off as u,
	trigger as m,
	transitionEnd as h,
	outerWidth as f,
	outerHeight as g,
	styles as v,
	offset as w,
	css as b,
	each as x,
	html as E,
	text as y,
	is as C,
	index as $,
	eq as T,
	append as S,
	prepend as M,
	next as P,
	nextAll as k,
	prev as z,
	prevAll as I,
	parent as O,
	parents as L,
	closest as D,
	find as A,
	children as G,
	filter as B,
	remove as H
} from "/npm/dom7@4.0.4/+esm";
const X = {
	addClass: a,
	removeClass: i,
	hasClass: r,
	toggleClass: n,
	attr: l,
	removeAttr: o,
	transform: d,
	transition: p,
	on: c,
	off: u,
	trigger: m,
	transitionEnd: h,
	outerWidth: f,
	outerHeight: g,
	styles: v,
	offset: w,
	css: b,
	each: x,
	html: E,
	text: y,
	is: C,
	index: $,
	eq: T,
	append: S,
	prepend: M,
	next: P,
	nextAll: k,
	prev: z,
	prevAll: I,
	parent: O,
	parents: L,
	closest: D,
	find: A,
	children: G,
	filter: B,
	remove: H
};
function Y(e, t = 0) {
	return setTimeout(e, t);
}
function N() {
	return Date.now();
}
function R(t, s = "x") {
	const a = e();
	let i, r, n;
	const l = (function(t) {
		const s = e();
		let a;
		return s.getComputedStyle && (a = s.getComputedStyle(t, null)), !a &&
			t.currentStyle &&
			(a = t.currentStyle), a || (a = t.style), a;
	})(t);
	return a.WebKitCSSMatrix
		? (
				(r = l.transform || l.webkitTransform),
				r.split(",").length > 6 && (r = r.split(", ").map(e => e.replace(",", ".")).join(", ")),
				(n = new a.WebKitCSSMatrix("none" === r ? "" : r))
			)
		: (
				(n =
					l.MozTransform ||
					l.OTransform ||
					l.MsTransform ||
					l.msTransform ||
					l.transform ||
					l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")),
				(i = n.toString().split(","))
			), "x" === s &&
		(r = a.WebKitCSSMatrix ? n.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === s &&
		(r = a.WebKitCSSMatrix ? n.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), r || 0;
}
function W(e) {
	return (
		"object" == typeof e &&
		null !== e &&
		e.constructor &&
		"Object" === Object.prototype.toString.call(e).slice(8, -1)
	);
}
function q(...e) {
	const t = Object(e[0]),
		s = ["__proto__", "constructor", "prototype"];
	for (let i = 1; i < e.length; i += 1) {
		const r = e[i];
		if (
			null != r &&
			(
				(a = r),
				!("undefined" != typeof window && void 0 !== window.HTMLElement
					? a instanceof HTMLElement
					: a && (1 === a.nodeType || 11 === a.nodeType))
			)
		) {
			const e = Object.keys(Object(r)).filter(e => s.indexOf(e) < 0);
			for (let s = 0, a = e.length; s < a; s += 1) {
				const a = e[s],
					i = Object.getOwnPropertyDescriptor(r, a);
				void 0 !== i &&
					i.enumerable &&
					(W(t[a]) && W(r[a])
						? r[a].__swiper__ ? (t[a] = r[a]) : q(t[a], r[a])
						: !W(t[a]) && W(r[a])
							? ((t[a] = {}), r[a].__swiper__ ? (t[a] = r[a]) : q(t[a], r[a]))
							: (t[a] = r[a]));
			}
		}
	}
	var a;
	return t;
}
function j(e, t, s) {
	e.style.setProperty(t, s);
}
function V({ swiper: t, targetPosition: s, side: a }) {
	const i = e(),
		r = -t.translate;
	let n,
		l = null;
	const o = t.params.speed;
	(t.wrapperEl.style.scrollSnapType = "none"), i.cancelAnimationFrame(t.cssModeFrameID);
	const d = s > r ? "next" : "prev",
		p = (e, t) => ("next" === d && e >= t) || ("prev" === d && e <= t),
		c = () => {
			(n = new Date().getTime()), null === l && (l = n);
			const e = Math.max(Math.min((n - l) / o, 1), 0),
				d = 0.5 - Math.cos(e * Math.PI) / 2;
			let u = r + d * (s - r);
			if ((p(u, s) && (u = s), t.wrapperEl.scrollTo({ [a]: u }), p(u, s)))
				return (t.wrapperEl.style.overflow = "hidden"), (t.wrapperEl.style.scrollSnapType =
					""), setTimeout(() => {
					(t.wrapperEl.style.overflow = ""), t.wrapperEl.scrollTo({ [a]: u });
				}), void i.cancelAnimationFrame(t.cssModeFrameID);
			t.cssModeFrameID = i.requestAnimationFrame(c);
		};
	c();
}
let _, F, U;
function K() {
	return _ ||
		(_ = (function() {
			const s = e(),
				a = t();
			return {
				smoothScroll: a.documentElement && "scrollBehavior" in a.documentElement.style,
				touch: !!("ontouchstart" in s || (s.DocumentTouch && a instanceof s.DocumentTouch)),
				passiveListener: (function() {
					let e = !1;
					try {
						const t = Object.defineProperty({}, "passive", {
							get() {
								e = !0;
							}
						});
						s.addEventListener("testPassiveListener", null, t);
					} catch (e) {}
					return e;
				})(),
				gestures: "ongesturestart" in s
			};
		})()), _;
}
function Z(t = {}) {
	return F ||
		(F = (function({ userAgent: t } = {}) {
			const s = K(),
				a = e(),
				i = a.navigator.platform,
				r = t || a.navigator.userAgent,
				n = { ios: !1, android: !1 },
				l = a.screen.width,
				o = a.screen.height,
				d = r.match(/(Android);?[\s\/]+([\d.]+)?/);
			let p = r.match(/(iPad).*OS\s([\d_]+)/);
			const c = r.match(/(iPod)(.*OS\s([\d_]+))?/),
				u = !p && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
				m = "Win32" === i;
			let h = "MacIntel" === i;
			return !p &&
				h &&
				s.touch &&
				[
					"1024x1366",
					"1366x1024",
					"834x1194",
					"1194x834",
					"834x1112",
					"1112x834",
					"768x1024",
					"1024x768",
					"820x1180",
					"1180x820",
					"810x1080",
					"1080x810"
				].indexOf(`${l}x${o}`) >= 0 &&
				((p = r.match(/(Version)\/([\d.]+)/)), p || (p = [0, 1, "13_0_0"]), (h = !1)), d &&
				!m &&
				((n.os = "android"), (n.android = !0)), (p || u || c) && ((n.os = "ios"), (n.ios = !0)), n;
		})(t)), F;
}
function Q() {
	return U ||
		(U = (function() {
			const t = e();
			return {
				isSafari: (function() {
					const e = t.navigator.userAgent.toLowerCase();
					return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0;
				})(),
				isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
			};
		})()), U;
}
Object.keys(X).forEach(e => {
	Object.defineProperty(s.fn, e, { value: X[e], writable: !0 });
});
var J = {
	on(e, t, s) {
		const a = this;
		if (!a.eventsListeners || a.destroyed) return a;
		if ("function" != typeof t) return a;
		const i = s ? "unshift" : "push";
		return e.split(" ").forEach(e => {
			a.eventsListeners[e] || (a.eventsListeners[e] = []), a.eventsListeners[e][i](t);
		}), a;
	},
	once(e, t, s) {
		const a = this;
		if (!a.eventsListeners || a.destroyed) return a;
		if ("function" != typeof t) return a;
		function i(...s) {
			a.off(e, i), i.__emitterProxy && delete i.__emitterProxy, t.apply(a, s);
		}
		return (i.__emitterProxy = t), a.on(e, i, s);
	},
	onAny(e, t) {
		const s = this;
		if (!s.eventsListeners || s.destroyed) return s;
		if ("function" != typeof e) return s;
		const a = t ? "unshift" : "push";
		return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e), s;
	},
	offAny(e) {
		const t = this;
		if (!t.eventsListeners || t.destroyed) return t;
		if (!t.eventsAnyListeners) return t;
		const s = t.eventsAnyListeners.indexOf(e);
		return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
	},
	off(e, t) {
		const s = this;
		return !s.eventsListeners || s.destroyed
			? s
			: s.eventsListeners
				? (
						e.split(" ").forEach(e => {
							void 0 === t
								? (s.eventsListeners[e] = [])
								: s.eventsListeners[e] &&
									s.eventsListeners[e].forEach((a, i) => {
										(a === t || (a.__emitterProxy && a.__emitterProxy === t)) &&
											s.eventsListeners[e].splice(i, 1);
									});
						}),
						s
					)
				: s;
	},
	emit(...e) {
		const t = this;
		if (!t.eventsListeners || t.destroyed) return t;
		if (!t.eventsListeners) return t;
		let s, a, i;
		"string" == typeof e[0] || Array.isArray(e[0])
			? ((s = e[0]), (a = e.slice(1, e.length)), (i = t))
			: ((s = e[0].events), (a = e[0].data), (i = e[0].context || t)), a.unshift(i);
		return (Array.isArray(s) ? s : s.split(" ")).forEach(e => {
			t.eventsAnyListeners &&
				t.eventsAnyListeners.length &&
				t.eventsAnyListeners.forEach(t => {
					t.apply(i, [e, ...a]);
				}), t.eventsListeners &&
				t.eventsListeners[e] &&
				t.eventsListeners[e].forEach(e => {
					e.apply(i, a);
				});
		}), t;
	}
};
var ee = {
	updateSize: function() {
		const e = this;
		let t, s;
		const a = e.$el;
		(t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : a[0].clientWidth), (s =
			void 0 !== e.params.height && null !== e.params.height ? e.params.height : a[0].clientHeight), (0 === t &&
			e.isHorizontal()) ||
			(0 === s && e.isVertical()) ||
			(
				(t = t - parseInt(a.css("padding-left") || 0, 10) - parseInt(a.css("padding-right") || 0, 10)),
				(s = s - parseInt(a.css("padding-top") || 0, 10) - parseInt(a.css("padding-bottom") || 0, 10)),
				Number.isNaN(t) && (t = 0),
				Number.isNaN(s) && (s = 0),
				Object.assign(e, { width: t, height: s, size: e.isHorizontal() ? t : s })
			);
	},
	updateSlides: function() {
		const e = this;
		function t(t) {
			return e.isHorizontal()
				? t
				: {
						width: "height",
						"margin-top": "margin-left",
						"margin-bottom ": "margin-right",
						"margin-left": "margin-top",
						"margin-right": "margin-bottom",
						"padding-left": "padding-top",
						"padding-right": "padding-bottom",
						marginRight: "marginBottom"
					}[t];
		}
		function s(e, s) {
			return parseFloat(e.getPropertyValue(t(s)) || 0);
		}
		const a = e.params,
			{ $wrapperEl: i, size: r, rtlTranslate: n, wrongRTL: l } = e,
			o = e.virtual && a.virtual.enabled,
			d = o ? e.virtual.slides.length : e.slides.length,
			p = i.children(`.${e.params.slideClass}`),
			c = o ? e.virtual.slides.length : p.length;
		let u = [];
		const m = [],
			h = [];
		let f = a.slidesOffsetBefore;
		"function" == typeof f && (f = a.slidesOffsetBefore.call(e));
		let g = a.slidesOffsetAfter;
		"function" == typeof g && (g = a.slidesOffsetAfter.call(e));
		const v = e.snapGrid.length,
			w = e.slidesGrid.length;
		let b = a.spaceBetween,
			x = -f,
			E = 0,
			y = 0;
		if (void 0 === r) return;
		"string" == typeof b &&
			b.indexOf("%") >= 0 &&
			(b = parseFloat(b.replace("%", "")) / 100 * r), (e.virtualSize = -b), n
			? p.css({ marginLeft: "", marginBottom: "", marginTop: "" })
			: p.css({ marginRight: "", marginBottom: "", marginTop: "" }), a.centeredSlides &&
			a.cssMode &&
			(
				j(e.wrapperEl, "--swiper-centered-offset-before", ""),
				j(e.wrapperEl, "--swiper-centered-offset-after", "")
			);
		const C = a.grid && a.grid.rows > 1 && e.grid;
		let $;
		C && e.grid.initSlides(c);
		const T =
			"auto" === a.slidesPerView &&
			a.breakpoints &&
			Object.keys(a.breakpoints).filter(e => void 0 !== a.breakpoints[e].slidesPerView).length > 0;
		for (let i = 0; i < c; i += 1) {
			$ = 0;
			const n = p.eq(i);
			if ((C && e.grid.updateSlide(i, n, c, t), "none" !== n.css("display"))) {
				if ("auto" === a.slidesPerView) {
					T && (p[i].style[t("width")] = "");
					const r = getComputedStyle(n[0]),
						l = n[0].style.transform,
						o = n[0].style.webkitTransform;
					if (
						(
							l && (n[0].style.transform = "none"),
							o && (n[0].style.webkitTransform = "none"),
							a.roundLengths
						)
					)
						$ = e.isHorizontal() ? n.outerWidth(!0) : n.outerHeight(!0);
					else {
						const e = s(r, "width"),
							t = s(r, "padding-left"),
							a = s(r, "padding-right"),
							i = s(r, "margin-left"),
							l = s(r, "margin-right"),
							o = r.getPropertyValue("box-sizing");
						if (o && "border-box" === o) $ = e + i + l;
						else {
							const { clientWidth: s, offsetWidth: r } = n[0];
							$ = e + t + a + i + l + (r - s);
						}
					}
					l && (n[0].style.transform = l), o && (n[0].style.webkitTransform = o), a.roundLengths &&
						($ = Math.floor($));
				} else
					($ = (r - (a.slidesPerView - 1) * b) / a.slidesPerView), a.roundLengths && ($ = Math.floor($)), p[
						i
					] && (p[i].style[t("width")] = `${$}px`);
				p[i] && (p[i].swiperSlideSize = $), h.push($), a.centeredSlides
					? (
							(x = x + $ / 2 + E / 2 + b),
							0 === E && 0 !== i && (x = x - r / 2 - b),
							0 === i && (x = x - r / 2 - b),
							Math.abs(x) < 0.001 && (x = 0),
							a.roundLengths && (x = Math.floor(x)),
							y % a.slidesPerGroup == 0 && u.push(x),
							m.push(x)
						)
					: (
							a.roundLengths && (x = Math.floor(x)),
							(y - Math.min(e.params.slidesPerGroupSkip, y)) % e.params.slidesPerGroup == 0 && u.push(x),
							m.push(x),
							(x = x + $ + b)
						), (e.virtualSize += $ + b), (E = $), (y += 1);
			}
		}
		if (
			(
				(e.virtualSize = Math.max(e.virtualSize, r) + g),
				n &&
					l &&
					("slide" === a.effect || "coverflow" === a.effect) &&
					i.css({ width: `${e.virtualSize + a.spaceBetween}px` }),
				a.setWrapperSize && i.css({ [t("width")]: `${e.virtualSize + a.spaceBetween}px` }),
				C && e.grid.updateWrapperSize($, u, t),
				!a.centeredSlides
			)
		) {
			const t = [];
			for (let s = 0; s < u.length; s += 1) {
				let i = u[s];
				a.roundLengths && (i = Math.floor(i)), u[s] <= e.virtualSize - r && t.push(i);
			}
			(u = t), Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - r);
		}
		if ((0 === u.length && (u = [0]), 0 !== a.spaceBetween)) {
			const s = e.isHorizontal() && n ? "marginLeft" : t("marginRight");
			p.filter((e, t) => !a.cssMode || t !== p.length - 1).css({ [s]: `${b}px` });
		}
		if (a.centeredSlides && a.centeredSlidesBounds) {
			let e = 0;
			h.forEach(t => {
				e += t + (a.spaceBetween ? a.spaceBetween : 0);
			}), (e -= a.spaceBetween);
			const t = e - r;
			u = u.map(e => (e < 0 ? -f : e > t ? t + g : e));
		}
		if (a.centerInsufficientSlides) {
			let e = 0;
			if (
				(
					h.forEach(t => {
						e += t + (a.spaceBetween ? a.spaceBetween : 0);
					}),
					(e -= a.spaceBetween),
					e < r
				)
			) {
				const t = (r - e) / 2;
				u.forEach((e, s) => {
					u[s] = e - t;
				}), m.forEach((e, s) => {
					m[s] = e + t;
				});
			}
		}
		if (
			(
				Object.assign(e, { slides: p, snapGrid: u, slidesGrid: m, slidesSizesGrid: h }),
				a.centeredSlides && a.cssMode && !a.centeredSlidesBounds
			)
		) {
			j(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"), j(
				e.wrapperEl,
				"--swiper-centered-offset-after",
				e.size / 2 - h[h.length - 1] / 2 + "px"
			);
			const t = -e.snapGrid[0],
				s = -e.slidesGrid[0];
			(e.snapGrid = e.snapGrid.map(e => e + t)), (e.slidesGrid = e.slidesGrid.map(e => e + s));
		}
		if (
			(
				c !== d && e.emit("slidesLengthChange"),
				u.length !== v && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")),
				m.length !== w && e.emit("slidesGridLengthChange"),
				a.watchSlidesProgress && e.updateSlidesOffset(),
				!(o || a.cssMode || ("slide" !== a.effect && "fade" !== a.effect))
			)
		) {
			const t = `${a.containerModifierClass}backface-hidden`,
				s = e.$el.hasClass(t);
			c <= a.maxBackfaceHiddenSlides ? s || e.$el.addClass(t) : s && e.$el.removeClass(t);
		}
	},
	updateAutoHeight: function(e) {
		const t = this,
			a = [],
			i = t.virtual && t.params.virtual.enabled;
		let r,
			n = 0;
		"number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
		const l = e =>
			i
				? t.slides.filter(t => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e)[0]
				: t.slides.eq(e)[0];
		if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
			if (t.params.centeredSlides)
				(t.visibleSlides || s([])).each(e => {
					a.push(e);
				});
			else
				for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
					const e = t.activeIndex + r;
					if (e > t.slides.length && !i) break;
					a.push(l(e));
				}
		else a.push(l(t.activeIndex));
		for (r = 0; r < a.length; r += 1)
			if (void 0 !== a[r]) {
				const e = a[r].offsetHeight;
				n = e > n ? e : n;
			}
		(n || 0 === n) && t.$wrapperEl.css("height", `${n}px`);
	},
	updateSlidesOffset: function() {
		const e = this,
			t = e.slides;
		for (let s = 0; s < t.length; s += 1)
			t[s].swiperSlideOffset = e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop;
	},
	updateSlidesProgress: function(e = (this && this.translate) || 0) {
		const t = this,
			a = t.params,
			{ slides: i, rtlTranslate: r, snapGrid: n } = t;
		if (0 === i.length) return;
		void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
		let l = -e;
		r && (l = e), i.removeClass(a.slideVisibleClass), (t.visibleSlidesIndexes = []), (t.visibleSlides = []);
		for (let e = 0; e < i.length; e += 1) {
			const s = i[e];
			let o = s.swiperSlideOffset;
			a.cssMode && a.centeredSlides && (o -= i[0].swiperSlideOffset);
			const d = (l + (a.centeredSlides ? t.minTranslate() : 0) - o) / (s.swiperSlideSize + a.spaceBetween),
				p = (l - n[0] + (a.centeredSlides ? t.minTranslate() : 0) - o) / (s.swiperSlideSize + a.spaceBetween),
				c = -(l - o),
				u = c + t.slidesSizesGrid[e];
			((c >= 0 && c < t.size - 1) || (u > 1 && u <= t.size) || (c <= 0 && u >= t.size)) &&
				(
					t.visibleSlides.push(s),
					t.visibleSlidesIndexes.push(e),
					i.eq(e).addClass(a.slideVisibleClass)
				), (s.progress = r ? -d : d), (s.originalProgress = r ? -p : p);
		}
		t.visibleSlides = s(t.visibleSlides);
	},
	updateProgress: function(e) {
		const t = this;
		if (void 0 === e) {
			const s = t.rtlTranslate ? -1 : 1;
			e = (t && t.translate && t.translate * s) || 0;
		}
		const s = t.params,
			a = t.maxTranslate() - t.minTranslate();
		let { progress: i, isBeginning: r, isEnd: n } = t;
		const l = r,
			o = n;
		0 === a
			? ((i = 0), (r = !0), (n = !0))
			: ((i = (e - t.minTranslate()) / a), (r = i <= 0), (n = i >= 1)), Object.assign(t, {
			progress: i,
			isBeginning: r,
			isEnd: n
		}), (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) && t.updateSlidesProgress(e), r &&
			!l &&
			t.emit("reachBeginning toEdge"), n && !o && t.emit("reachEnd toEdge"), ((l && !r) || (o && !n)) &&
			t.emit("fromEdge"), t.emit("progress", i);
	},
	updateSlidesClasses: function() {
		const e = this,
			{ slides: t, params: s, $wrapperEl: a, activeIndex: i, realIndex: r } = e,
			n = e.virtual && s.virtual.enabled;
		let l;
		t.removeClass(
			`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`
		), (l = n ? e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${i}"]`) : t.eq(i)), l.addClass(
			s.slideActiveClass
		), s.loop &&
			(l.hasClass(s.slideDuplicateClass)
				? a
						.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`)
						.addClass(s.slideDuplicateActiveClass)
				: a
						.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`)
						.addClass(s.slideDuplicateActiveClass));
		let o = l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
		s.loop && 0 === o.length && ((o = t.eq(0)), o.addClass(s.slideNextClass));
		let d = l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
		s.loop && 0 === d.length && ((d = t.eq(-1)), d.addClass(s.slidePrevClass)), s.loop &&
			(
				o.hasClass(s.slideDuplicateClass)
					? a
							.children(
								`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${o.attr(
									"data-swiper-slide-index"
								)}"]`
							)
							.addClass(s.slideDuplicateNextClass)
					: a
							.children(
								`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${o.attr(
									"data-swiper-slide-index"
								)}"]`
							)
							.addClass(s.slideDuplicateNextClass),
				d.hasClass(s.slideDuplicateClass)
					? a
							.children(
								`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr(
									"data-swiper-slide-index"
								)}"]`
							)
							.addClass(s.slideDuplicatePrevClass)
					: a
							.children(
								`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr(
									"data-swiper-slide-index"
								)}"]`
							)
							.addClass(s.slideDuplicatePrevClass)
			), e.emitSlidesClasses();
	},
	updateActiveIndex: function(e) {
		const t = this,
			s = t.rtlTranslate ? t.translate : -t.translate,
			{ slidesGrid: a, snapGrid: i, params: r, activeIndex: n, realIndex: l, snapIndex: o } = t;
		let d,
			p = e;
		if (void 0 === p) {
			for (let e = 0; e < a.length; e += 1)
				void 0 !== a[e + 1]
					? s >= a[e] && s < a[e + 1] - (a[e + 1] - a[e]) / 2
						? (p = e)
						: s >= a[e] && s < a[e + 1] && (p = e + 1)
					: s >= a[e] && (p = e);
			r.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0);
		}
		if (i.indexOf(s) >= 0) d = i.indexOf(s);
		else {
			const e = Math.min(r.slidesPerGroupSkip, p);
			d = e + Math.floor((p - e) / r.slidesPerGroup);
		}
		if ((d >= i.length && (d = i.length - 1), p === n))
			return void (d !== o && ((t.snapIndex = d), t.emit("snapIndexChange")));
		const c = parseInt(t.slides.eq(p).attr("data-swiper-slide-index") || p, 10);
		Object.assign(t, { snapIndex: d, realIndex: c, previousIndex: n, activeIndex: p }), t.emit(
			"activeIndexChange"
		), t.emit("snapIndexChange"), l !== c && t.emit("realIndexChange"), (t.initialized ||
			t.params.runCallbacksOnInit) &&
			t.emit("slideChange");
	},
	updateClickedSlide: function(e) {
		const t = this,
			a = t.params,
			i = s(e).closest(`.${a.slideClass}`)[0];
		let r,
			n = !1;
		if (i)
			for (let e = 0; e < t.slides.length; e += 1)
				if (t.slides[e] === i) {
					(n = !0), (r = e);
					break;
				}
		if (!i || !n) return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
		(t.clickedSlide = i), t.virtual && t.params.virtual.enabled
			? (t.clickedIndex = parseInt(s(i).attr("data-swiper-slide-index"), 10))
			: (t.clickedIndex = r), a.slideToClickedSlide &&
			void 0 !== t.clickedIndex &&
			t.clickedIndex !== t.activeIndex &&
			t.slideToClickedSlide();
	}
};
var te = {
	getTranslate: function(e = this.isHorizontal() ? "x" : "y") {
		const { params: t, rtlTranslate: s, translate: a, $wrapperEl: i } = this;
		if (t.virtualTranslate) return s ? -a : a;
		if (t.cssMode) return a;
		let r = R(i[0], e);
		return s && (r = -r), r || 0;
	},
	setTranslate: function(e, t) {
		const s = this,
			{ rtlTranslate: a, params: i, $wrapperEl: r, wrapperEl: n, progress: l } = s;
		let o,
			d = 0,
			p = 0;
		s.isHorizontal() ? (d = a ? -e : e) : (p = e), i.roundLengths &&
			((d = Math.floor(d)), (p = Math.floor(p))), i.cssMode
			? (n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -d : -p)
			: i.virtualTranslate || r.transform(`translate3d(${d}px, ${p}px, 0px)`), (s.previousTranslate =
			s.translate), (s.translate = s.isHorizontal() ? d : p);
		const c = s.maxTranslate() - s.minTranslate();
		(o = 0 === c ? 0 : (e - s.minTranslate()) / c), o !== l && s.updateProgress(e), s.emit(
			"setTranslate",
			s.translate,
			t
		);
	},
	minTranslate: function() {
		return -this.snapGrid[0];
	},
	maxTranslate: function() {
		return -this.snapGrid[this.snapGrid.length - 1];
	},
	translateTo: function(e = 0, t = this.params.speed, s = !0, a = !0, i) {
		const r = this,
			{ params: n, wrapperEl: l } = r;
		if (r.animating && n.preventInteractionOnTransition) return !1;
		const o = r.minTranslate(),
			d = r.maxTranslate();
		let p;
		if (((p = a && e > o ? o : a && e < d ? d : e), r.updateProgress(p), n.cssMode)) {
			const e = r.isHorizontal();
			if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -p;
			else {
				if (!r.support.smoothScroll) return V({ swiper: r, targetPosition: -p, side: e ? "left" : "top" }), !0;
				l.scrollTo({ [e ? "left" : "top"]: -p, behavior: "smooth" });
			}
			return !0;
		}
		return 0 === t
			? (
					r.setTransition(0),
					r.setTranslate(p),
					s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionEnd"))
				)
			: (
					r.setTransition(t),
					r.setTranslate(p),
					s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionStart")),
					r.animating ||
						(
							(r.animating = !0),
							r.onTranslateToWrapperTransitionEnd ||
								(r.onTranslateToWrapperTransitionEnd = function(e) {
									r &&
										!r.destroyed &&
										e.target === this &&
										(
											r.$wrapperEl[0].removeEventListener(
												"transitionend",
												r.onTranslateToWrapperTransitionEnd
											),
											r.$wrapperEl[0].removeEventListener(
												"webkitTransitionEnd",
												r.onTranslateToWrapperTransitionEnd
											),
											(r.onTranslateToWrapperTransitionEnd = null),
											delete r.onTranslateToWrapperTransitionEnd,
											s && r.emit("transitionEnd")
										);
								}),
							r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd),
							r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd)
						)
				), !0;
	}
};
function se({ swiper: e, runCallbacks: t, direction: s, step: a }) {
	const { activeIndex: i, previousIndex: r } = e;
	let n = s;
	if ((n || (n = i > r ? "next" : i < r ? "prev" : "reset"), e.emit(`transition${a}`), t && i !== r)) {
		if ("reset" === n) return void e.emit(`slideResetTransition${a}`);
		e.emit(`slideChangeTransition${a}`), "next" === n
			? e.emit(`slideNextTransition${a}`)
			: e.emit(`slidePrevTransition${a}`);
	}
}
var ae = {
	slideTo: function(e = 0, t = this.params.speed, s = !0, a, i) {
		if ("number" != typeof e && "string" != typeof e)
			throw new Error(
				`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
			);
		if ("string" == typeof e) {
			const t = parseInt(e, 10);
			if (!isFinite(t))
				throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
			e = t;
		}
		const r = this;
		let n = e;
		n < 0 && (n = 0);
		const {
			params: l,
			snapGrid: o,
			slidesGrid: d,
			previousIndex: p,
			activeIndex: c,
			rtlTranslate: u,
			wrapperEl: m,
			enabled: h
		} = r;
		if ((r.animating && l.preventInteractionOnTransition) || (!h && !a && !i)) return !1;
		const f = Math.min(r.params.slidesPerGroupSkip, n);
		let g = f + Math.floor((n - f) / r.params.slidesPerGroup);
		g >= o.length && (g = o.length - 1);
		const v = -o[g];
		if (l.normalizeSlideIndex)
			for (let e = 0; e < d.length; e += 1) {
				const t = -Math.floor(100 * v),
					s = Math.floor(100 * d[e]),
					a = Math.floor(100 * d[e + 1]);
				void 0 !== d[e + 1]
					? t >= s && t < a - (a - s) / 2 ? (n = e) : t >= s && t < a && (n = e + 1)
					: t >= s && (n = e);
			}
		if (r.initialized && n !== c) {
			if (!r.allowSlideNext && v < r.translate && v < r.minTranslate()) return !1;
			if (!r.allowSlidePrev && v > r.translate && v > r.maxTranslate() && (c || 0) !== n) return !1;
		}
		let w;
		if (
			(
				n !== (p || 0) && s && r.emit("beforeSlideChangeStart"),
				r.updateProgress(v),
				(w = n > c ? "next" : n < c ? "prev" : "reset"),
				(u && -v === r.translate) || (!u && v === r.translate)
			)
		)
			return r.updateActiveIndex(n), l.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !==
				l.effect && r.setTranslate(v), "reset" !== w && (r.transitionStart(s, w), r.transitionEnd(s, w)), !1;
		if (l.cssMode) {
			const e = r.isHorizontal(),
				s = u ? v : -v;
			if (0 === t) {
				const t = r.virtual && r.params.virtual.enabled;
				t && ((r.wrapperEl.style.scrollSnapType = "none"), (r._immediateVirtual = !0)), (m[
					e ? "scrollLeft" : "scrollTop"
				] = s), t &&
					requestAnimationFrame(() => {
						(r.wrapperEl.style.scrollSnapType = ""), (r._swiperImmediateVirtual = !1);
					});
			} else {
				if (!r.support.smoothScroll) return V({ swiper: r, targetPosition: s, side: e ? "left" : "top" }), !0;
				m.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
			}
			return !0;
		}
		return r.setTransition(t), r.setTranslate(v), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit(
			"beforeTransitionStart",
			t,
			a
		), r.transitionStart(s, w), 0 === t
			? r.transitionEnd(s, w)
			: r.animating ||
				(
					(r.animating = !0),
					r.onSlideToWrapperTransitionEnd ||
						(r.onSlideToWrapperTransitionEnd = function(e) {
							r &&
								!r.destroyed &&
								e.target === this &&
								(
									r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
									r.$wrapperEl[0].removeEventListener(
										"webkitTransitionEnd",
										r.onSlideToWrapperTransitionEnd
									),
									(r.onSlideToWrapperTransitionEnd = null),
									delete r.onSlideToWrapperTransitionEnd,
									r.transitionEnd(s, w)
								);
						}),
					r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
					r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd)
				), !0;
	},
	slideToLoop: function(e = 0, t = this.params.speed, s = !0, a) {
		if ("string" == typeof e) {
			const t = parseInt(e, 10);
			if (!isFinite(t))
				throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
			e = t;
		}
		const i = this;
		let r = e;
		return i.params.loop && (r += i.loopedSlides), i.slideTo(r, t, s, a);
	},
	slideNext: function(e = this.params.speed, t = !0, s) {
		const a = this,
			{ animating: i, enabled: r, params: n } = a;
		if (!r) return a;
		let l = n.slidesPerGroup;
		"auto" === n.slidesPerView &&
			1 === n.slidesPerGroup &&
			n.slidesPerGroupAuto &&
			(l = Math.max(a.slidesPerViewDynamic("current", !0), 1));
		const o = a.activeIndex < n.slidesPerGroupSkip ? 1 : l;
		if (n.loop) {
			if (i && n.loopPreventsSlide) return !1;
			a.loopFix(), (a._clientLeft = a.$wrapperEl[0].clientLeft);
		}
		return n.rewind && a.isEnd ? a.slideTo(0, e, t, s) : a.slideTo(a.activeIndex + o, e, t, s);
	},
	slidePrev: function(e = this.params.speed, t = !0, s) {
		const a = this,
			{ params: i, animating: r, snapGrid: n, slidesGrid: l, rtlTranslate: o, enabled: d } = a;
		if (!d) return a;
		if (i.loop) {
			if (r && i.loopPreventsSlide) return !1;
			a.loopFix(), (a._clientLeft = a.$wrapperEl[0].clientLeft);
		}
		function p(e) {
			return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
		}
		const c = p(o ? a.translate : -a.translate),
			u = n.map(e => p(e));
		let m = n[u.indexOf(c) - 1];
		if (void 0 === m && i.cssMode) {
			let e;
			n.forEach((t, s) => {
				c >= t && (e = s);
			}), void 0 !== e && (m = n[e > 0 ? e - 1 : e]);
		}
		let h = 0;
		if (
			(
				void 0 !== m &&
					(
						(h = l.indexOf(m)),
						h < 0 && (h = a.activeIndex - 1),
						"auto" === i.slidesPerView &&
							1 === i.slidesPerGroup &&
							i.slidesPerGroupAuto &&
							((h = h - a.slidesPerViewDynamic("previous", !0) + 1), (h = Math.max(h, 0)))
					),
				i.rewind && a.isBeginning
			)
		) {
			const i =
				a.params.virtual && a.params.virtual.enabled && a.virtual
					? a.virtual.slides.length - 1
					: a.slides.length - 1;
			return a.slideTo(i, e, t, s);
		}
		return a.slideTo(h, e, t, s);
	},
	slideReset: function(e = this.params.speed, t = !0, s) {
		return this.slideTo(this.activeIndex, e, t, s);
	},
	slideToClosest: function(e = this.params.speed, t = !0, s, a = 0.5) {
		const i = this;
		let r = i.activeIndex;
		const n = Math.min(i.params.slidesPerGroupSkip, r),
			l = n + Math.floor((r - n) / i.params.slidesPerGroup),
			o = i.rtlTranslate ? i.translate : -i.translate;
		if (o >= i.snapGrid[l]) {
			const e = i.snapGrid[l];
			o - e > (i.snapGrid[l + 1] - e) * a && (r += i.params.slidesPerGroup);
		} else {
			const e = i.snapGrid[l - 1];
			o - e <= (i.snapGrid[l] - e) * a && (r -= i.params.slidesPerGroup);
		}
		return (r = Math.max(r, 0)), (r = Math.min(r, i.slidesGrid.length - 1)), i.slideTo(r, e, t, s);
	},
	slideToClickedSlide: function() {
		const e = this,
			{ params: t, $wrapperEl: a } = e,
			i = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
		let r,
			n = e.clickedIndex;
		if (t.loop) {
			if (e.animating) return;
			(r = parseInt(s(e.clickedSlide).attr("data-swiper-slide-index"), 10)), t.centeredSlides
				? n < e.loopedSlides - i / 2 || n > e.slides.length - e.loopedSlides + i / 2
					? (
							e.loopFix(),
							(n = a
								.children(`.${t.slideClass}[data-swiper-slide-index="${r}"]:not(.${t.slideDuplicateClass})`)
								.eq(0)
								.index()),
							Y(() => {
								e.slideTo(n);
							})
						)
					: e.slideTo(n)
				: n > e.slides.length - i
					? (
							e.loopFix(),
							(n = a
								.children(`.${t.slideClass}[data-swiper-slide-index="${r}"]:not(.${t.slideDuplicateClass})`)
								.eq(0)
								.index()),
							Y(() => {
								e.slideTo(n);
							})
						)
					: e.slideTo(n);
		} else e.slideTo(n);
	}
};
var ie = {
	loopCreate: function() {
		const e = this,
			a = t(),
			{ params: i, $wrapperEl: r } = e,
			n = r.children().length > 0 ? s(r.children()[0].parentNode) : r;
		n.children(`.${i.slideClass}.${i.slideDuplicateClass}`).remove();
		let l = n.children(`.${i.slideClass}`);
		if (i.loopFillGroupWithBlank) {
			const e = i.slidesPerGroup - l.length % i.slidesPerGroup;
			if (e !== i.slidesPerGroup) {
				for (let t = 0; t < e; t += 1) {
					const e = s(a.createElement("div")).addClass(`${i.slideClass} ${i.slideBlankClass}`);
					n.append(e);
				}
				l = n.children(`.${i.slideClass}`);
			}
		}
		"auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = l.length), (e.loopedSlides = Math.ceil(
			parseFloat(i.loopedSlides || i.slidesPerView, 10)
		)), (e.loopedSlides += i.loopAdditionalSlides), e.loopedSlides > l.length &&
			e.params.loopedSlidesLimit &&
			(e.loopedSlides = l.length);
		const o = [],
			d = [];
		l.each((e, t) => {
			s(e).attr("data-swiper-slide-index", t);
		});
		for (let t = 0; t < e.loopedSlides; t += 1) {
			const e = t - Math.floor(t / l.length) * l.length;
			d.push(l.eq(e)[0]), o.unshift(l.eq(l.length - e - 1)[0]);
		}
		for (let e = 0; e < d.length; e += 1) n.append(s(d[e].cloneNode(!0)).addClass(i.slideDuplicateClass));
		for (let e = o.length - 1; e >= 0; e -= 1) n.prepend(s(o[e].cloneNode(!0)).addClass(i.slideDuplicateClass));
	},
	loopFix: function() {
		const e = this;
		e.emit("beforeLoopFix");
		const {
			activeIndex: t,
			slides: s,
			loopedSlides: a,
			allowSlidePrev: i,
			allowSlideNext: r,
			snapGrid: n,
			rtlTranslate: l
		} = e;
		let o;
		(e.allowSlidePrev = !0), (e.allowSlideNext = !0);
		const d = -n[t] - e.getTranslate();
		if (t < a) {
			(o = s.length - 3 * a + t), (o += a);
			e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d);
		} else if (t >= s.length - a) {
			(o = -s.length + t + a), (o += a);
			e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d);
		}
		(e.allowSlidePrev = i), (e.allowSlideNext = r), e.emit("loopFix");
	},
	loopDestroy: function() {
		const { $wrapperEl: e, params: t, slides: s } = this;
		e
			.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`)
			.remove(), s.removeAttr("data-swiper-slide-index");
	}
};
function re(a) {
	const i = this,
		r = t(),
		n = e(),
		l = i.touchEventsData,
		{ params: o, touches: d, enabled: p } = i;
	if (!p) return;
	if (i.animating && o.preventInteractionOnTransition) return;
	!i.animating && o.cssMode && o.loop && i.loopFix();
	let c = a;
	c.originalEvent && (c = c.originalEvent);
	let u = s(c.target);
	if ("wrapper" === o.touchEventsTarget && !u.closest(i.wrapperEl).length) return;
	if (((l.isTouchEvent = "touchstart" === c.type), !l.isTouchEvent && "which" in c && 3 === c.which)) return;
	if (!l.isTouchEvent && "button" in c && c.button > 0) return;
	if (l.isTouched && l.isMoved) return;
	const m = !!o.noSwipingClass && "" !== o.noSwipingClass,
		h = a.composedPath ? a.composedPath() : a.path;
	m && c.target && c.target.shadowRoot && h && (u = s(h[0]));
	const f = o.noSwipingSelector ? o.noSwipingSelector : `.${o.noSwipingClass}`,
		g = !(!c.target || !c.target.shadowRoot);
	if (
		o.noSwiping &&
		(g
			? (function(s, a = this) {
					return (function a(i) {
						if (!i || i === t() || i === e()) return null;
						i.assignedSlot && (i = i.assignedSlot);
						const r = i.closest(s);
						return r || i.getRootNode ? r || a(i.getRootNode().host) : null;
					})(a);
				})(f, u[0])
			: u.closest(f)[0])
	)
		return void (i.allowClick = !0);
	if (o.swipeHandler && !u.closest(o.swipeHandler)[0]) return;
	(d.currentX = "touchstart" === c.type ? c.targetTouches[0].pageX : c.pageX), (d.currentY =
		"touchstart" === c.type ? c.targetTouches[0].pageY : c.pageY);
	const v = d.currentX,
		w = d.currentY,
		b = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection,
		x = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
	if (b && (v <= x || v >= n.innerWidth - x)) {
		if ("prevent" !== b) return;
		a.preventDefault();
	}
	if (
		(
			Object.assign(l, {
				isTouched: !0,
				isMoved: !1,
				allowTouchCallbacks: !0,
				isScrolling: void 0,
				startMoving: void 0
			}),
			(d.startX = v),
			(d.startY = w),
			(l.touchStartTime = N()),
			(i.allowClick = !0),
			i.updateSize(),
			(i.swipeDirection = void 0),
			o.threshold > 0 && (l.allowThresholdMove = !1),
			"touchstart" !== c.type
		)
	) {
		let e = !0;
		u.is(l.focusableElements) && ((e = !1), "SELECT" === u[0].nodeName && (l.isTouched = !1)), r.activeElement &&
			s(r.activeElement).is(l.focusableElements) &&
			r.activeElement !== u[0] &&
			r.activeElement.blur();
		const t = e && i.allowTouchMove && o.touchStartPreventDefault;
		(!o.touchStartForcePreventDefault && !t) || u[0].isContentEditable || c.preventDefault();
	}
	i.params.freeMode &&
		i.params.freeMode.enabled &&
		i.freeMode &&
		i.animating &&
		!o.cssMode &&
		i.freeMode.onTouchStart(), i.emit("touchStart", c);
}
function ne(e) {
	const a = t(),
		i = this,
		r = i.touchEventsData,
		{ params: n, touches: l, rtlTranslate: o, enabled: d } = i;
	if (!d) return;
	let p = e;
	if ((p.originalEvent && (p = p.originalEvent), !r.isTouched))
		return void (r.startMoving && r.isScrolling && i.emit("touchMoveOpposite", p));
	if (r.isTouchEvent && "touchmove" !== p.type) return;
	const c = "touchmove" === p.type && p.targetTouches && (p.targetTouches[0] || p.changedTouches[0]),
		u = "touchmove" === p.type ? c.pageX : p.pageX,
		m = "touchmove" === p.type ? c.pageY : p.pageY;
	if (p.preventedByNestedSwiper) return (l.startX = u), void (l.startY = m);
	if (!i.allowTouchMove)
		return s(p.target).is(r.focusableElements) || (i.allowClick = !1), void (
			r.isTouched &&
			(Object.assign(l, { startX: u, startY: m, currentX: u, currentY: m }), (r.touchStartTime = N()))
		);
	if (r.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
		if (i.isVertical()) {
			if ((m < l.startY && i.translate <= i.maxTranslate()) || (m > l.startY && i.translate >= i.minTranslate()))
				return (r.isTouched = !1), void (r.isMoved = !1);
		} else if (
			(u < l.startX && i.translate <= i.maxTranslate()) ||
			(u > l.startX && i.translate >= i.minTranslate())
		)
			return;
	if (r.isTouchEvent && a.activeElement && p.target === a.activeElement && s(p.target).is(r.focusableElements))
		return (r.isMoved = !0), void (i.allowClick = !1);
	if ((r.allowTouchCallbacks && i.emit("touchMove", p), p.targetTouches && p.targetTouches.length > 1)) return;
	(l.currentX = u), (l.currentY = m);
	const h = l.currentX - l.startX,
		f = l.currentY - l.startY;
	if (i.params.threshold && Math.sqrt(h ** 2 + f ** 2) < i.params.threshold) return;
	if (void 0 === r.isScrolling) {
		let e;
		(i.isHorizontal() && l.currentY === l.startY) || (i.isVertical() && l.currentX === l.startX)
			? (r.isScrolling = !1)
			: h * h + f * f >= 25 &&
				(
					(e = 180 * Math.atan2(Math.abs(f), Math.abs(h)) / Math.PI),
					(r.isScrolling = i.isHorizontal() ? e > n.touchAngle : 90 - e > n.touchAngle)
				);
	}
	if (
		(
			r.isScrolling && i.emit("touchMoveOpposite", p),
			void 0 === r.startMoving && ((l.currentX === l.startX && l.currentY === l.startY) || (r.startMoving = !0)),
			r.isScrolling
		)
	)
		return void (r.isTouched = !1);
	if (!r.startMoving) return;
	(i.allowClick = !1), !n.cssMode && p.cancelable && p.preventDefault(), n.touchMoveStopPropagation &&
		!n.nested &&
		p.stopPropagation(), r.isMoved ||
		(
			n.loop && !n.cssMode && i.loopFix(),
			(r.startTranslate = i.getTranslate()),
			i.setTransition(0),
			i.animating && i.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
			(r.allowMomentumBounce = !1),
			!n.grabCursor || (!0 !== i.allowSlideNext && !0 !== i.allowSlidePrev) || i.setGrabCursor(!0),
			i.emit("sliderFirstMove", p)
		), i.emit("sliderMove", p), (r.isMoved = !0);
	let g = i.isHorizontal() ? h : f;
	(l.diff = g), (g *= n.touchRatio), o && (g = -g), (i.swipeDirection =
		g > 0 ? "prev" : "next"), (r.currentTranslate = g + r.startTranslate);
	let v = !0,
		w = n.resistanceRatio;
	if (
		(
			n.touchReleaseOnEdges && (w = 0),
			g > 0 && r.currentTranslate > i.minTranslate()
				? (
						(v = !1),
						n.resistance &&
							(r.currentTranslate = i.minTranslate() - 1 + (-i.minTranslate() + r.startTranslate + g) ** w)
					)
				: g < 0 &&
					r.currentTranslate < i.maxTranslate() &&
					(
						(v = !1),
						n.resistance &&
							(r.currentTranslate = i.maxTranslate() + 1 - (i.maxTranslate() - r.startTranslate - g) ** w)
					),
			v && (p.preventedByNestedSwiper = !0),
			!i.allowSlideNext &&
				"next" === i.swipeDirection &&
				r.currentTranslate < r.startTranslate &&
				(r.currentTranslate = r.startTranslate),
			!i.allowSlidePrev &&
				"prev" === i.swipeDirection &&
				r.currentTranslate > r.startTranslate &&
				(r.currentTranslate = r.startTranslate),
			i.allowSlidePrev || i.allowSlideNext || (r.currentTranslate = r.startTranslate),
			n.threshold > 0
		)
	) {
		if (!(Math.abs(g) > n.threshold || r.allowThresholdMove)) return void (r.currentTranslate = r.startTranslate);
		if (!r.allowThresholdMove)
			return (r.allowThresholdMove = !0), (l.startX = l.currentX), (l.startY = l.currentY), (r.currentTranslate =
				r.startTranslate), void (l.diff = i.isHorizontal() ? l.currentX - l.startX : l.currentY - l.startY);
	}
	n.followFinger &&
		!n.cssMode &&
		(
			((n.freeMode && n.freeMode.enabled && i.freeMode) || n.watchSlidesProgress) &&
				(i.updateActiveIndex(), i.updateSlidesClasses()),
			i.params.freeMode && n.freeMode.enabled && i.freeMode && i.freeMode.onTouchMove(),
			i.updateProgress(r.currentTranslate),
			i.setTranslate(r.currentTranslate)
		);
}
function le(e) {
	const t = this,
		s = t.touchEventsData,
		{ params: a, touches: i, rtlTranslate: r, slidesGrid: n, enabled: l } = t;
	if (!l) return;
	let o = e;
	if (
		(
			o.originalEvent && (o = o.originalEvent),
			s.allowTouchCallbacks && t.emit("touchEnd", o),
			(s.allowTouchCallbacks = !1),
			!s.isTouched
		)
	)
		return s.isMoved && a.grabCursor && t.setGrabCursor(!1), (s.isMoved = !1), void (s.startMoving = !1);
	a.grabCursor &&
		s.isMoved &&
		s.isTouched &&
		(!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
		t.setGrabCursor(!1);
	const d = N(),
		p = d - s.touchStartTime;
	if (t.allowClick) {
		const e = o.path || (o.composedPath && o.composedPath());
		t.updateClickedSlide((e && e[0]) || o.target), t.emit("tap click", o), p < 300 &&
			d - s.lastClickTime < 300 &&
			t.emit("doubleTap doubleClick", o);
	}
	if (
		(
			(s.lastClickTime = N()),
			Y(() => {
				t.destroyed || (t.allowClick = !0);
			}),
			!s.isTouched || !s.isMoved || !t.swipeDirection || 0 === i.diff || s.currentTranslate === s.startTranslate
		)
	)
		return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
	let c;
	if (
		(
			(s.isTouched = !1),
			(s.isMoved = !1),
			(s.startMoving = !1),
			(c = a.followFinger ? (r ? t.translate : -t.translate) : -s.currentTranslate),
			a.cssMode
		)
	)
		return;
	if (t.params.freeMode && a.freeMode.enabled) return void t.freeMode.onTouchEnd({ currentPos: c });
	let u = 0,
		m = t.slidesSizesGrid[0];
	for (let e = 0; e < n.length; e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
		const t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
		void 0 !== n[e + t]
			? c >= n[e] && c < n[e + t] && ((u = e), (m = n[e + t] - n[e]))
			: c >= n[e] && ((u = e), (m = n[n.length - 1] - n[n.length - 2]));
	}
	let h = null,
		f = null;
	a.rewind &&
		(t.isBeginning
			? (f =
					t.params.virtual && t.params.virtual.enabled && t.virtual
						? t.virtual.slides.length - 1
						: t.slides.length - 1)
			: t.isEnd && (h = 0));
	const g = (c - n[u]) / m,
		v = u < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
	if (p > a.longSwipesMs) {
		if (!a.longSwipes) return void t.slideTo(t.activeIndex);
		"next" === t.swipeDirection &&
			(g >= a.longSwipesRatio ? t.slideTo(a.rewind && t.isEnd ? h : u + v) : t.slideTo(u)), "prev" ===
			t.swipeDirection &&
			(g > 1 - a.longSwipesRatio
				? t.slideTo(u + v)
				: null !== f && g < 0 && Math.abs(g) > a.longSwipesRatio ? t.slideTo(f) : t.slideTo(u));
	} else {
		if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
		t.navigation && (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl)
			? o.target === t.navigation.nextEl ? t.slideTo(u + v) : t.slideTo(u)
			: (
					"next" === t.swipeDirection && t.slideTo(null !== h ? h : u + v),
					"prev" === t.swipeDirection && t.slideTo(null !== f ? f : u)
				);
	}
}
function oe() {
	const e = this,
		{ params: t, el: s } = e;
	if (s && 0 === s.offsetWidth) return;
	t.breakpoints && e.setBreakpoint();
	const { allowSlideNext: a, allowSlidePrev: i, snapGrid: r } = e;
	(e.allowSlideNext = !0), (e.allowSlidePrev = !0), e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" ===
		t.slidesPerView ||
		t.slidesPerView > 1) &&
	e.isEnd &&
	!e.isBeginning &&
	!e.params.centeredSlides
		? e.slideTo(e.slides.length - 1, 0, !1, !0)
		: e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay &&
		e.autoplay.running &&
		e.autoplay.paused &&
		e.autoplay.run(), (e.allowSlidePrev = i), (e.allowSlideNext = a), e.params.watchOverflow &&
		r !== e.snapGrid &&
		e.checkOverflow();
}
function de(e) {
	const t = this;
	t.enabled &&
		(t.allowClick ||
			(
				t.params.preventClicks && e.preventDefault(),
				t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())
			));
}
function pe() {
	const e = this,
		{ wrapperEl: t, rtlTranslate: s, enabled: a } = e;
	if (!a) return;
	let i;
	(e.previousTranslate = e.translate), e.isHorizontal()
		? (e.translate = -t.scrollLeft)
		: (e.translate = -t.scrollTop), 0 === e.translate &&
		(e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
	const r = e.maxTranslate() - e.minTranslate();
	(i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r), i !== e.progress &&
		e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1);
}
let ce = !1;
function ue() {}
const me = (e, s) => {
	const a = t(),
		{ params: i, touchEvents: r, el: n, wrapperEl: l, device: o, support: d } = e,
		p = !!i.nested,
		c = "on" === s ? "addEventListener" : "removeEventListener",
		u = s;
	if (d.touch) {
		const t = !("touchstart" !== r.start || !d.passiveListener || !i.passiveListeners) && {
			passive: !0,
			capture: !1
		};
		n[c](r.start, e.onTouchStart, t), n[c](
			r.move,
			e.onTouchMove,
			d.passiveListener ? { passive: !1, capture: p } : p
		), n[c](r.end, e.onTouchEnd, t), r.cancel && n[c](r.cancel, e.onTouchEnd, t);
	} else n[c](r.start, e.onTouchStart, !1), a[c](r.move, e.onTouchMove, p), a[c](r.end, e.onTouchEnd, !1);
	(i.preventClicks || i.preventClicksPropagation) && n[c]("click", e.onClick, !0), i.cssMode &&
		l[c]("scroll", e.onScroll), i.updateOnWindowResize
		? e[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", oe, !0)
		: e[u]("observerUpdate", oe, !0);
};
var he = {
	attachEvents: function() {
		const e = this,
			s = t(),
			{ params: a, support: i } = e;
		(e.onTouchStart = re.bind(e)), (e.onTouchMove = ne.bind(e)), (e.onTouchEnd = le.bind(e)), a.cssMode &&
			(e.onScroll = pe.bind(e)), (e.onClick = de.bind(e)), i.touch &&
			!ce &&
			(s.addEventListener("touchstart", ue), (ce = !0)), me(e, "on");
	},
	detachEvents: function() {
		me(this, "off");
	}
};
const fe = (e, t) => e.grid && t.grid && t.grid.rows > 1;
var ge = {
	addClasses: function() {
		const e = this,
			{ classNames: t, params: s, rtl: a, $el: i, device: r, support: n } = e,
			l = (function(e, t) {
				const s = [];
				return e.forEach(e => {
					"object" == typeof e
						? Object.keys(e).forEach(a => {
								e[a] && s.push(t + a);
							})
						: "string" == typeof e && s.push(t + e);
				}), s;
			})(
				[
					"initialized",
					s.direction,
					{ "pointer-events": !n.touch },
					{ "free-mode": e.params.freeMode && s.freeMode.enabled },
					{ autoheight: s.autoHeight },
					{ rtl: a },
					{ grid: s.grid && s.grid.rows > 1 },
					{ "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill },
					{ android: r.android },
					{ ios: r.ios },
					{ "css-mode": s.cssMode },
					{ centered: s.cssMode && s.centeredSlides },
					{ "watch-progress": s.watchSlidesProgress }
				],
				s.containerModifierClass
			);
		t.push(...l), i.addClass([...t].join(" ")), e.emitContainerClasses();
	},
	removeClasses: function() {
		const { $el: e, classNames: t } = this;
		e.removeClass(t.join(" ")), this.emitContainerClasses();
	}
};
var ve = {
	init: !0,
	direction: "horizontal",
	touchEventsTarget: "wrapper",
	initialSlide: 0,
	speed: 300,
	cssMode: !1,
	updateOnWindowResize: !0,
	resizeObserver: !0,
	nested: !1,
	createElements: !1,
	enabled: !0,
	focusableElements: "input, select, option, textarea, button, video, label",
	width: null,
	height: null,
	preventInteractionOnTransition: !1,
	userAgent: null,
	url: null,
	edgeSwipeDetection: !1,
	edgeSwipeThreshold: 20,
	autoHeight: !1,
	setWrapperSize: !1,
	virtualTranslate: !1,
	effect: "slide",
	breakpoints: void 0,
	breakpointsBase: "window",
	spaceBetween: 0,
	slidesPerView: 1,
	slidesPerGroup: 1,
	slidesPerGroupSkip: 0,
	slidesPerGroupAuto: !1,
	centeredSlides: !1,
	centeredSlidesBounds: !1,
	slidesOffsetBefore: 0,
	slidesOffsetAfter: 0,
	normalizeSlideIndex: !0,
	centerInsufficientSlides: !1,
	watchOverflow: !0,
	roundLengths: !1,
	touchRatio: 1,
	touchAngle: 45,
	simulateTouch: !0,
	shortSwipes: !0,
	longSwipes: !0,
	longSwipesRatio: 0.5,
	longSwipesMs: 300,
	followFinger: !0,
	allowTouchMove: !0,
	threshold: 0,
	touchMoveStopPropagation: !1,
	touchStartPreventDefault: !0,
	touchStartForcePreventDefault: !1,
	touchReleaseOnEdges: !1,
	uniqueNavElements: !0,
	resistance: !0,
	resistanceRatio: 0.85,
	watchSlidesProgress: !1,
	grabCursor: !1,
	preventClicks: !0,
	preventClicksPropagation: !0,
	slideToClickedSlide: !1,
	preloadImages: !0,
	updateOnImagesReady: !0,
	loop: !1,
	loopAdditionalSlides: 0,
	loopedSlides: null,
	loopedSlidesLimit: !0,
	loopFillGroupWithBlank: !1,
	loopPreventsSlide: !0,
	rewind: !1,
	allowSlidePrev: !0,
	allowSlideNext: !0,
	swipeHandler: null,
	noSwiping: !0,
	noSwipingClass: "swiper-no-swiping",
	noSwipingSelector: null,
	passiveListeners: !0,
	maxBackfaceHiddenSlides: 10,
	containerModifierClass: "swiper-",
	slideClass: "swiper-slide",
	slideBlankClass: "swiper-slide-invisible-blank",
	slideActiveClass: "swiper-slide-active",
	slideDuplicateActiveClass: "swiper-slide-duplicate-active",
	slideVisibleClass: "swiper-slide-visible",
	slideDuplicateClass: "swiper-slide-duplicate",
	slideNextClass: "swiper-slide-next",
	slideDuplicateNextClass: "swiper-slide-duplicate-next",
	slidePrevClass: "swiper-slide-prev",
	slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
	wrapperClass: "swiper-wrapper",
	runCallbacksOnInit: !0,
	_emitClasses: !1
};
function we(e, t) {
	return function(s = {}) {
		const a = Object.keys(s)[0],
			i = s[a];
		"object" == typeof i && null !== i
			? (
					["navigation", "pagination", "scrollbar"].indexOf(a) >= 0 && !0 === e[a] && (e[a] = { auto: !0 }),
					a in e && "enabled" in i
						? (
								!0 === e[a] && (e[a] = { enabled: !0 }),
								"object" != typeof e[a] || "enabled" in e[a] || (e[a].enabled = !0),
								e[a] || (e[a] = { enabled: !1 }),
								q(t, s)
							)
						: q(t, s)
				)
			: q(t, s);
	};
}
const be = {
		eventsEmitter: J,
		update: ee,
		translate: te,
		transition: {
			setTransition: function(e, t) {
				const s = this;
				s.params.cssMode || s.$wrapperEl.transition(e), s.emit("setTransition", e, t);
			},
			transitionStart: function(e = !0, t) {
				const s = this,
					{ params: a } = s;
				a.cssMode ||
					(
						a.autoHeight && s.updateAutoHeight(),
						se({ swiper: s, runCallbacks: e, direction: t, step: "Start" })
					);
			},
			transitionEnd: function(e = !0, t) {
				const s = this,
					{ params: a } = s;
				(s.animating = !1), a.cssMode ||
					(s.setTransition(0), se({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
			}
		},
		slide: ae,
		loop: ie,
		grabCursor: {
			setGrabCursor: function(e) {
				const t = this;
				if (
					t.support.touch ||
					!t.params.simulateTouch ||
					(t.params.watchOverflow && t.isLocked) ||
					t.params.cssMode
				)
					return;
				const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
				(s.style.cursor = "move"), (s.style.cursor = e ? "grabbing" : "grab");
			},
			unsetGrabCursor: function() {
				const e = this;
				e.support.touch ||
					(e.params.watchOverflow && e.isLocked) ||
					e.params.cssMode ||
					(e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "");
			}
		},
		events: he,
		breakpoints: {
			setBreakpoint: function() {
				const e = this,
					{ activeIndex: t, initialized: s, loopedSlides: a = 0, params: i, $el: r } = e,
					n = i.breakpoints;
				if (!n || (n && 0 === Object.keys(n).length)) return;
				const l = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
				if (!l || e.currentBreakpoint === l) return;
				const o = (l in n ? n[l] : void 0) || e.originalParams,
					d = fe(e, i),
					p = fe(e, o),
					c = i.enabled;
				d && !p
					? (
							r.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`),
							e.emitContainerClasses()
						)
					: !d &&
						p &&
						(
							r.addClass(`${i.containerModifierClass}grid`),
							((o.grid.fill && "column" === o.grid.fill) || (!o.grid.fill && "column" === i.grid.fill)) &&
								r.addClass(`${i.containerModifierClass}grid-column`),
							e.emitContainerClasses()
						), ["navigation", "pagination", "scrollbar"].forEach(t => {
					const s = i[t] && i[t].enabled,
						a = o[t] && o[t].enabled;
					s && !a && e[t].disable(), !s && a && e[t].enable();
				});
				const u = o.direction && o.direction !== i.direction,
					m = i.loop && (o.slidesPerView !== i.slidesPerView || u);
				u && s && e.changeDirection(), q(e.params, o);
				const h = e.params.enabled;
				Object.assign(e, {
					allowTouchMove: e.params.allowTouchMove,
					allowSlideNext: e.params.allowSlideNext,
					allowSlidePrev: e.params.allowSlidePrev
				}), c && !h ? e.disable() : !c && h && e.enable(), (e.currentBreakpoint = l), e.emit(
					"_beforeBreakpoint",
					o
				), m &&
					s &&
					(
						e.loopDestroy(),
						e.loopCreate(),
						e.updateSlides(),
						e.slideTo(t - a + e.loopedSlides, 0, !1)
					), e.emit("breakpoint", o);
			},
			getBreakpoint: function(t, s = "window", a) {
				if (!t || ("container" === s && !a)) return;
				let i = !1;
				const r = e(),
					n = "window" === s ? r.innerHeight : a.clientHeight,
					l = Object.keys(t).map(e => {
						if ("string" == typeof e && 0 === e.indexOf("@")) {
							const t = parseFloat(e.substr(1));
							return { value: n * t, point: e };
						}
						return { value: e, point: e };
					});
				l.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
				for (let e = 0; e < l.length; e += 1) {
					const { point: t, value: n } = l[e];
					"window" === s
						? r.matchMedia(`(min-width: ${n}px)`).matches && (i = t)
						: n <= a.clientWidth && (i = t);
				}
				return i || "max";
			}
		},
		checkOverflow: {
			checkOverflow: function() {
				const e = this,
					{ isLocked: t, params: s } = e,
					{ slidesOffsetBefore: a } = s;
				if (a) {
					const t = e.slides.length - 1,
						s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * a;
					e.isLocked = e.size > s;
				} else e.isLocked = 1 === e.snapGrid.length;
				!0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev &&
					(e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked &&
					e.emit(e.isLocked ? "lock" : "unlock");
			}
		},
		classes: ge,
		images: {
			loadImage: function(t, a, i, r, n, l) {
				const o = e();
				let d;
				function p() {
					l && l();
				}
				s(t).parent("picture")[0] || (t.complete && n)
					? p()
					: a
						? (
								(d = new o.Image()),
								(d.onload = p),
								(d.onerror = p),
								r && (d.sizes = r),
								i && (d.srcset = i),
								a && (d.src = a)
							)
						: p();
			},
			preloadImages: function() {
				const e = this;
				function t() {
					null != e &&
						e &&
						!e.destroyed &&
						(
							void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
							e.imagesLoaded === e.imagesToLoad.length &&
								(e.params.updateOnImagesReady && e.update(), e.emit("imagesReady"))
						);
				}
				e.imagesToLoad = e.$el.find("img");
				for (let s = 0; s < e.imagesToLoad.length; s += 1) {
					const a = e.imagesToLoad[s];
					e.loadImage(
						a,
						a.currentSrc || a.getAttribute("src"),
						a.srcset || a.getAttribute("srcset"),
						a.sizes || a.getAttribute("sizes"),
						!0,
						t
					);
				}
			}
		}
	},
	xe = {};
class Ee {
	constructor(...e) {
		let t, a;
		if (
			(
				1 === e.length && e[0].constructor && "Object" === Object.prototype.toString.call(e[0]).slice(8, -1)
					? (a = e[0])
					: ([t, a] = e),
				a || (a = {}),
				(a = q({}, a)),
				t && !a.el && (a.el = t),
				a.el && s(a.el).length > 1
			)
		) {
			const e = [];
			return s(a.el).each(t => {
				const s = q({}, a, { el: t });
				e.push(new Ee(s));
			}), e;
		}
		const i = this;
		(i.__swiper__ = !0), (i.support = K()), (i.device = Z({
			userAgent: a.userAgent
		})), (i.browser = Q()), (i.eventsListeners = {}), (i.eventsAnyListeners = []), (i.modules = [
			...i.__modules__
		]), a.modules && Array.isArray(a.modules) && i.modules.push(...a.modules);
		const r = {};
		i.modules.forEach(e => {
			e({
				swiper: i,
				extendParams: we(a, r),
				on: i.on.bind(i),
				once: i.once.bind(i),
				off: i.off.bind(i),
				emit: i.emit.bind(i)
			});
		});
		const n = q({}, ve, r);
		return (i.params = q({}, n, xe, a)), (i.originalParams = q({}, i.params)), (i.passedParams = q(
			{},
			a
		)), i.params &&
			i.params.on &&
			Object.keys(i.params.on).forEach(e => {
				i.on(e, i.params.on[e]);
			}), i.params && i.params.onAny && i.onAny(i.params.onAny), (i.$ = s), Object.assign(i, {
			enabled: i.params.enabled,
			el: t,
			classNames: [],
			slides: s(),
			slidesGrid: [],
			snapGrid: [],
			slidesSizesGrid: [],
			isHorizontal: () => "horizontal" === i.params.direction,
			isVertical: () => "vertical" === i.params.direction,
			activeIndex: 0,
			realIndex: 0,
			isBeginning: !0,
			isEnd: !1,
			translate: 0,
			previousTranslate: 0,
			progress: 0,
			velocity: 0,
			animating: !1,
			allowSlideNext: i.params.allowSlideNext,
			allowSlidePrev: i.params.allowSlidePrev,
			touchEvents: (function() {
				const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
					t = ["pointerdown", "pointermove", "pointerup"];
				return (i.touchEventsTouch = {
					start: e[0],
					move: e[1],
					end: e[2],
					cancel: e[3]
				}), (i.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }), i.support.touch ||
				!i.params.simulateTouch
					? i.touchEventsTouch
					: i.touchEventsDesktop;
			})(),
			touchEventsData: {
				isTouched: void 0,
				isMoved: void 0,
				allowTouchCallbacks: void 0,
				touchStartTime: void 0,
				isScrolling: void 0,
				currentTranslate: void 0,
				startTranslate: void 0,
				allowThresholdMove: void 0,
				focusableElements: i.params.focusableElements,
				lastClickTime: N(),
				clickTimeout: void 0,
				velocities: [],
				allowMomentumBounce: void 0,
				isTouchEvent: void 0,
				startMoving: void 0
			},
			allowClick: !0,
			allowTouchMove: i.params.allowTouchMove,
			touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
			imagesToLoad: [],
			imagesLoaded: 0
		}), i.emit("_swiper"), i.params.init && i.init(), i;
	}
	enable() {
		const e = this;
		e.enabled || ((e.enabled = !0), e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
	}
	disable() {
		const e = this;
		e.enabled && ((e.enabled = !1), e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
	}
	setProgress(e, t) {
		const s = this;
		e = Math.min(Math.max(e, 0), 1);
		const a = s.minTranslate(),
			i = (s.maxTranslate() - a) * e + a;
		s.translateTo(i, void 0 === t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses();
	}
	emitContainerClasses() {
		const e = this;
		if (!e.params._emitClasses || !e.el) return;
		const t = e.el.className
			.split(" ")
			.filter(t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass));
		e.emit("_containerClasses", t.join(" "));
	}
	getSlideClasses(e) {
		const t = this;
		return t.destroyed
			? ""
			: e.className
					.split(" ")
					.filter(e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))
					.join(" ");
	}
	emitSlidesClasses() {
		const e = this;
		if (!e.params._emitClasses || !e.el) return;
		const t = [];
		e.slides.each(s => {
			const a = e.getSlideClasses(s);
			t.push({ slideEl: s, classNames: a }), e.emit("_slideClass", s, a);
		}), e.emit("_slideClasses", t);
	}
	slidesPerViewDynamic(e = "current", t = !1) {
		const { params: s, slides: a, slidesGrid: i, slidesSizesGrid: r, size: n, activeIndex: l } = this;
		let o = 1;
		if (s.centeredSlides) {
			let e,
				t = a[l].swiperSlideSize;
			for (let s = l + 1; s < a.length; s += 1)
				a[s] && !e && ((t += a[s].swiperSlideSize), (o += 1), t > n && (e = !0));
			for (let s = l - 1; s >= 0; s -= 1)
				a[s] && !e && ((t += a[s].swiperSlideSize), (o += 1), t > n && (e = !0));
		} else if ("current" === e)
			for (let e = l + 1; e < a.length; e += 1) {
				(t ? i[e] + r[e] - i[l] < n : i[e] - i[l] < n) && (o += 1);
			}
		else
			for (let e = l - 1; e >= 0; e -= 1) {
				i[l] - i[e] < n && (o += 1);
			}
		return o;
	}
	update() {
		const e = this;
		if (!e || e.destroyed) return;
		const { snapGrid: t, params: s } = e;
		function a() {
			const t = e.rtlTranslate ? -1 * e.translate : e.translate,
				s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
			e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
		}
		let i;
		s.breakpoints &&
			e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params
			.freeMode && e.params.freeMode.enabled
			? (a(), e.params.autoHeight && e.updateAutoHeight())
			: (
					(i =
						("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) &&
						e.isEnd &&
						!e.params.centeredSlides
							? e.slideTo(e.slides.length - 1, 0, !1, !0)
							: e.slideTo(e.activeIndex, 0, !1, !0)),
					i || a()
				), s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
	}
	changeDirection(e, t = !0) {
		const s = this,
			a = s.params.direction;
		return e || (e = "horizontal" === a ? "vertical" : "horizontal"), e === a ||
			("horizontal" !== e && "vertical" !== e) ||
			(
				s.$el
					.removeClass(`${s.params.containerModifierClass}${a}`)
					.addClass(`${s.params.containerModifierClass}${e}`),
				s.emitContainerClasses(),
				(s.params.direction = e),
				s.slides.each(t => {
					"vertical" === e ? (t.style.width = "") : (t.style.height = "");
				}),
				s.emit("changeDirection"),
				t && s.update()
			), s;
	}
	changeLanguageDirection(e) {
		const t = this;
		(t.rtl && "rtl" === e) ||
			(!t.rtl && "ltr" === e) ||
			(
				(t.rtl = "rtl" === e),
				(t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
				t.rtl
					? (t.$el.addClass(`${t.params.containerModifierClass}rtl`), (t.el.dir = "rtl"))
					: (t.$el.removeClass(`${t.params.containerModifierClass}rtl`), (t.el.dir = "ltr")),
				t.update()
			);
	}
	mount(e) {
		const a = this;
		if (a.mounted) return !0;
		const i = s(e || a.params.el);
		if (!(e = i[0])) return !1;
		e.swiper = a;
		const r = () => `.${(a.params.wrapperClass || "").trim().split(" ").join(".")}`;
		let n = (() => {
			if (e && e.shadowRoot && e.shadowRoot.querySelector) {
				const t = s(e.shadowRoot.querySelector(r()));
				return (t.children = e => i.children(e)), t;
			}
			return i.children ? i.children(r()) : s(i).children(r());
		})();
		if (0 === n.length && a.params.createElements) {
			const e = t().createElement("div");
			(n = s(e)), (e.className = a.params.wrapperClass), i.append(e), i
				.children(`.${a.params.slideClass}`)
				.each(e => {
					n.append(e);
				});
		}
		return Object.assign(a, {
			$el: i,
			el: e,
			$wrapperEl: n,
			wrapperEl: n[0],
			mounted: !0,
			rtl: "rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction"),
			rtlTranslate:
				"horizontal" === a.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction")),
			wrongRTL: "-webkit-box" === n.css("display")
		}), !0;
	}
	init(e) {
		const t = this;
		if (t.initialized) return t;
		return !1 === t.mount(e) ||
			(
				t.emit("beforeInit"),
				t.params.breakpoints && t.setBreakpoint(),
				t.addClasses(),
				t.params.loop && t.loopCreate(),
				t.updateSize(),
				t.updateSlides(),
				t.params.watchOverflow && t.checkOverflow(),
				t.params.grabCursor && t.enabled && t.setGrabCursor(),
				t.params.preloadImages && t.preloadImages(),
				t.params.loop
					? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0)
					: t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
				t.attachEvents(),
				(t.initialized = !0),
				t.emit("init"),
				t.emit("afterInit")
			), t;
	}
	destroy(e = !0, t = !0) {
		const s = this,
			{ params: a, $el: i, $wrapperEl: r, slides: n } = s;
		return void 0 === s.params ||
			s.destroyed ||
			(
				s.emit("beforeDestroy"),
				(s.initialized = !1),
				s.detachEvents(),
				a.loop && s.loopDestroy(),
				t &&
					(
						s.removeClasses(),
						i.removeAttr("style"),
						r.removeAttr("style"),
						n &&
							n.length &&
							n
								.removeClass(
									[a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass].join(
										" "
									)
								)
								.removeAttr("style")
								.removeAttr("data-swiper-slide-index")
					),
				s.emit("destroy"),
				Object.keys(s.eventsListeners).forEach(e => {
					s.off(e);
				}),
				!1 !== e &&
					(
						(s.$el[0].swiper = null),
						(function(e) {
							const t = e;
							Object.keys(t).forEach(e => {
								try {
									t[e] = null;
								} catch (e) {}
								try {
									delete t[e];
								} catch (e) {}
							});
						})(s)
					),
				(s.destroyed = !0)
			), null;
	}
	static extendDefaults(e) {
		q(xe, e);
	}
	static get extendedDefaults() {
		return xe;
	}
	static get defaults() {
		return ve;
	}
	static installModule(e) {
		Ee.prototype.__modules__ || (Ee.prototype.__modules__ = []);
		const t = Ee.prototype.__modules__;
		"function" == typeof e && t.indexOf(e) < 0 && t.push(e);
	}
	static use(e) {
		return Array.isArray(e) ? (e.forEach(e => Ee.installModule(e)), Ee) : (Ee.installModule(e), Ee);
	}
}
function ye({ swiper: e, extendParams: t, on: a, emit: i }) {
	let r;
	function n(t, a) {
		const i = e.params.virtual;
		if (i.cache && e.virtual.cache[a]) return e.virtual.cache[a];
		const r = i.renderSlide
			? s(i.renderSlide.call(e, t, a))
			: s(`<div class="${e.params.slideClass}" data-swiper-slide-index="${a}">${t}</div>`);
		return r.attr("data-swiper-slide-index") || r.attr("data-swiper-slide-index", a), i.cache &&
			(e.virtual.cache[a] = r), r;
	}
	function l(t) {
		const { slidesPerView: s, slidesPerGroup: a, centeredSlides: r } = e.params,
			{ addSlidesBefore: l, addSlidesAfter: o } = e.params.virtual,
			{ from: d, to: p, slides: c, slidesGrid: u, offset: m } = e.virtual;
		e.params.cssMode || e.updateActiveIndex();
		const h = e.activeIndex || 0;
		let f, g, v;
		(f = e.rtlTranslate ? "right" : e.isHorizontal() ? "left" : "top"), r
			? ((g = Math.floor(s / 2) + a + o), (v = Math.floor(s / 2) + a + l))
			: ((g = s + (a - 1) + o), (v = a + l));
		const w = Math.max((h || 0) - v, 0),
			b = Math.min((h || 0) + g, c.length - 1),
			x = (e.slidesGrid[w] || 0) - (e.slidesGrid[0] || 0);
		function E() {
			e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.lazy &&
				e.params.lazy.enabled &&
				e.lazy.load(), i("virtualUpdate");
		}
		if (
			(
				Object.assign(e.virtual, { from: w, to: b, offset: x, slidesGrid: e.slidesGrid }),
				d === w && p === b && !t
			)
		)
			return e.slidesGrid !== u && x !== m && e.slides.css(f, `${x}px`), e.updateProgress(), void i(
				"virtualUpdate"
			);
		if (e.params.virtual.renderExternal)
			return e.params.virtual.renderExternal.call(e, {
				offset: x,
				from: w,
				to: b,
				slides: (function() {
					const e = [];
					for (let t = w; t <= b; t += 1) e.push(c[t]);
					return e;
				})()
			}), void (e.params.virtual.renderExternalUpdate ? E() : i("virtualUpdate"));
		const y = [],
			C = [];
		if (t) e.$wrapperEl.find(`.${e.params.slideClass}`).remove();
		else
			for (let t = d; t <= p; t += 1)
				(t < w || t > b) &&
					e.$wrapperEl.find(`.${e.params.slideClass}[data-swiper-slide-index="${t}"]`).remove();
		for (let e = 0; e < c.length; e += 1)
			e >= w && e <= b && (void 0 === p || t ? C.push(e) : (e > p && C.push(e), e < d && y.push(e)));
		C.forEach(t => {
			e.$wrapperEl.append(n(c[t], t));
		}), y.sort((e, t) => t - e).forEach(t => {
			e.$wrapperEl.prepend(n(c[t], t));
		}), e.$wrapperEl.children(".swiper-slide").css(f, `${x}px`), E();
	}
	t({
		virtual: {
			enabled: !1,
			slides: [],
			cache: !0,
			renderSlide: null,
			renderExternal: null,
			renderExternalUpdate: !0,
			addSlidesBefore: 0,
			addSlidesAfter: 0
		}
	}), (e.virtual = {
		cache: {},
		from: void 0,
		to: void 0,
		slides: [],
		offset: 0,
		slidesGrid: []
	}), a("beforeInit", () => {
		e.params.virtual.enabled &&
			(
				(e.virtual.slides = e.params.virtual.slides),
				e.classNames.push(`${e.params.containerModifierClass}virtual`),
				(e.params.watchSlidesProgress = !0),
				(e.originalParams.watchSlidesProgress = !0),
				e.params.initialSlide || l()
			);
	}), a("setTranslate", () => {
		e.params.virtual.enabled &&
			(e.params.cssMode && !e._immediateVirtual
				? (
						clearTimeout(r),
						(r = setTimeout(() => {
							l();
						}, 100))
					)
				: l());
	}), a("init update resize", () => {
		e.params.virtual.enabled && e.params.cssMode && j(e.wrapperEl, "--swiper-virtual-size", `${e.virtualSize}px`);
	}), Object.assign(e.virtual, {
		appendSlide: function(t) {
			if ("object" == typeof t && "length" in t)
				for (let s = 0; s < t.length; s += 1) t[s] && e.virtual.slides.push(t[s]);
			else e.virtual.slides.push(t);
			l(!0);
		},
		prependSlide: function(t) {
			const s = e.activeIndex;
			let a = s + 1,
				i = 1;
			if (Array.isArray(t)) {
				for (let s = 0; s < t.length; s += 1) t[s] && e.virtual.slides.unshift(t[s]);
				(a = s + t.length), (i = t.length);
			} else e.virtual.slides.unshift(t);
			if (e.params.virtual.cache) {
				const t = e.virtual.cache,
					s = {};
				Object.keys(t).forEach(e => {
					const a = t[e],
						r = a.attr("data-swiper-slide-index");
					r && a.attr("data-swiper-slide-index", parseInt(r, 10) + i), (s[parseInt(e, 10) + i] = a);
				}), (e.virtual.cache = s);
			}
			l(!0), e.slideTo(a, 0);
		},
		removeSlide: function(t) {
			if (null == t) return;
			let s = e.activeIndex;
			if (Array.isArray(t))
				for (let a = t.length - 1; a >= 0; a -= 1)
					e.virtual.slides.splice(t[a], 1), e.params.virtual.cache && delete e.virtual.cache[t[a]], t[a] <
						s && (s -= 1), (s = Math.max(s, 0));
			else
				e.virtual.slides.splice(t, 1), e.params.virtual.cache && delete e.virtual.cache[t], t < s &&
					(s -= 1), (s = Math.max(s, 0));
			l(!0), e.slideTo(s, 0);
		},
		removeAllSlides: function() {
			(e.virtual.slides = []), e.params.virtual.cache && (e.virtual.cache = {}), l(!0), e.slideTo(0, 0);
		},
		update: l
	});
}
function Ce({ swiper: a, extendParams: i, on: r, emit: n }) {
	const l = t(),
		o = e();
	function d(e) {
		if (!a.enabled) return;
		const { rtlTranslate: t } = a;
		let s = e;
		s.originalEvent && (s = s.originalEvent);
		const i = s.keyCode || s.charCode,
			r = a.params.keyboard.pageUpDown,
			d = r && 33 === i,
			p = r && 34 === i,
			c = 37 === i,
			u = 39 === i,
			m = 38 === i,
			h = 40 === i;
		if (!a.allowSlideNext && ((a.isHorizontal() && u) || (a.isVertical() && h) || p)) return !1;
		if (!a.allowSlidePrev && ((a.isHorizontal() && c) || (a.isVertical() && m) || d)) return !1;
		if (
			!(
				s.shiftKey ||
				s.altKey ||
				s.ctrlKey ||
				s.metaKey ||
				(l.activeElement &&
					l.activeElement.nodeName &&
					("input" === l.activeElement.nodeName.toLowerCase() ||
						"textarea" === l.activeElement.nodeName.toLowerCase()))
			)
		) {
			if (a.params.keyboard.onlyInViewport && (d || p || c || u || m || h)) {
				let e = !1;
				if (
					a.$el.parents(`.${a.params.slideClass}`).length > 0 &&
					0 === a.$el.parents(`.${a.params.slideActiveClass}`).length
				)
					return;
				const s = a.$el,
					i = s[0].clientWidth,
					r = s[0].clientHeight,
					n = o.innerWidth,
					l = o.innerHeight,
					d = a.$el.offset();
				t && (d.left -= a.$el[0].scrollLeft);
				const p = [[d.left, d.top], [d.left + i, d.top], [d.left, d.top + r], [d.left + i, d.top + r]];
				for (let t = 0; t < p.length; t += 1) {
					const s = p[t];
					if (s[0] >= 0 && s[0] <= n && s[1] >= 0 && s[1] <= l) {
						if (0 === s[0] && 0 === s[1]) continue;
						e = !0;
					}
				}
				if (!e) return;
			}
			a.isHorizontal()
				? (
						(d || p || c || u) && (s.preventDefault ? s.preventDefault() : (s.returnValue = !1)),
						(((p || u) && !t) || ((d || c) && t)) && a.slideNext(),
						(((d || c) && !t) || ((p || u) && t)) && a.slidePrev()
					)
				: (
						(d || p || m || h) && (s.preventDefault ? s.preventDefault() : (s.returnValue = !1)),
						(p || h) && a.slideNext(),
						(d || m) && a.slidePrev()
					), n("keyPress", i);
		}
	}
	function p() {
		a.keyboard.enabled || (s(l).on("keydown", d), (a.keyboard.enabled = !0));
	}
	function c() {
		a.keyboard.enabled && (s(l).off("keydown", d), (a.keyboard.enabled = !1));
	}
	(a.keyboard = { enabled: !1 }), i({
		keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 }
	}), r("init", () => {
		a.params.keyboard.enabled && p();
	}), r("destroy", () => {
		a.keyboard.enabled && c();
	}), Object.assign(a.keyboard, { enable: p, disable: c });
}
function $e({ swiper: t, extendParams: a, on: i, emit: r }) {
	const n = e();
	let l;
	a({
		mousewheel: {
			enabled: !1,
			releaseOnEdges: !1,
			invert: !1,
			forceToAxis: !1,
			sensitivity: 1,
			eventsTarget: "container",
			thresholdDelta: null,
			thresholdTime: null
		}
	}), (t.mousewheel = { enabled: !1 });
	let o,
		d = N();
	const p = [];
	function c() {
		t.enabled && (t.mouseEntered = !0);
	}
	function u() {
		t.enabled && (t.mouseEntered = !1);
	}
	function m(e) {
		return (
			!(t.params.mousewheel.thresholdDelta && e.delta < t.params.mousewheel.thresholdDelta) &&
			(!(t.params.mousewheel.thresholdTime && N() - d < t.params.mousewheel.thresholdTime) &&
				((e.delta >= 6 && N() - d < 60) ||
					(
						e.direction < 0
							? (t.isEnd && !t.params.loop) || t.animating || (t.slideNext(), r("scroll", e.raw))
							: (t.isBeginning && !t.params.loop) || t.animating || (t.slidePrev(), r("scroll", e.raw)),
						(d = new n.Date().getTime()),
						!1
					)))
		);
	}
	function h(e) {
		let a = e,
			i = !0;
		if (!t.enabled) return;
		const n = t.params.mousewheel;
		t.params.cssMode && a.preventDefault();
		let d = t.$el;
		if (
			(
				"container" !== t.params.mousewheel.eventsTarget && (d = s(t.params.mousewheel.eventsTarget)),
				!t.mouseEntered && !d[0].contains(a.target) && !n.releaseOnEdges
			)
		)
			return !0;
		a.originalEvent && (a = a.originalEvent);
		let c = 0;
		const u = t.rtlTranslate ? -1 : 1,
			h = (function(e) {
				let t = 0,
					s = 0,
					a = 0,
					i = 0;
				return "detail" in e && (s = e.detail), "wheelDelta" in e && (s = -e.wheelDelta / 120), "wheelDeltaY" in
					e && (s = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e &&
					e.axis === e.HORIZONTAL_AXIS &&
					((t = s), (s = 0)), (a = 10 * t), (i = 10 * s), "deltaY" in e && (i = e.deltaY), "deltaX" in e &&
					(a = e.deltaX), e.shiftKey && !a && ((a = i), (i = 0)), (a || i) &&
					e.deltaMode &&
					(1 === e.deltaMode ? ((a *= 40), (i *= 40)) : ((a *= 800), (i *= 800))), a &&
					!t &&
					(t = a < 1 ? -1 : 1), i && !s && (s = i < 1 ? -1 : 1), { spinX: t, spinY: s, pixelX: a, pixelY: i };
			})(a);
		if (n.forceToAxis)
			if (t.isHorizontal()) {
				if (!(Math.abs(h.pixelX) > Math.abs(h.pixelY))) return !0;
				c = -h.pixelX * u;
			} else {
				if (!(Math.abs(h.pixelY) > Math.abs(h.pixelX))) return !0;
				c = -h.pixelY;
			}
		else c = Math.abs(h.pixelX) > Math.abs(h.pixelY) ? -h.pixelX * u : -h.pixelY;
		if (0 === c) return !0;
		n.invert && (c = -c);
		let f = t.getTranslate() + c * n.sensitivity;
		if (
			(
				f >= t.minTranslate() && (f = t.minTranslate()),
				f <= t.maxTranslate() && (f = t.maxTranslate()),
				(i = !!t.params.loop || !(f === t.minTranslate() || f === t.maxTranslate())),
				i && t.params.nested && a.stopPropagation(),
				t.params.freeMode && t.params.freeMode.enabled
			)
		) {
			const e = { time: N(), delta: Math.abs(c), direction: Math.sign(c) },
				s = o && e.time < o.time + 500 && e.delta <= o.delta && e.direction === o.direction;
			if (!s) {
				(o = void 0), t.params.loop && t.loopFix();
				let i = t.getTranslate() + c * n.sensitivity;
				const d = t.isBeginning,
					u = t.isEnd;
				if (
					(
						i >= t.minTranslate() && (i = t.minTranslate()),
						i <= t.maxTranslate() && (i = t.maxTranslate()),
						t.setTransition(0),
						t.setTranslate(i),
						t.updateProgress(),
						t.updateActiveIndex(),
						t.updateSlidesClasses(),
						((!d && t.isBeginning) || (!u && t.isEnd)) && t.updateSlidesClasses(),
						t.params.freeMode.sticky
					)
				) {
					clearTimeout(l), (l = void 0), p.length >= 15 && p.shift();
					const s = p.length ? p[p.length - 1] : void 0,
						a = p[0];
					if ((p.push(e), s && (e.delta > s.delta || e.direction !== s.direction))) p.splice(0);
					else if (p.length >= 15 && e.time - a.time < 500 && a.delta - e.delta >= 1 && e.delta <= 6) {
						const s = c > 0 ? 0.8 : 0.2;
						(o = e), p.splice(0), (l = Y(() => {
							t.slideToClosest(t.params.speed, !0, void 0, s);
						}, 0));
					}
					l ||
						(l = Y(() => {
							(o = e), p.splice(0), t.slideToClosest(t.params.speed, !0, void 0, 0.5);
						}, 500));
				}
				if (
					(
						s || r("scroll", a),
						t.params.autoplay && t.params.autoplayDisableOnInteraction && t.autoplay.stop(),
						i === t.minTranslate() || i === t.maxTranslate()
					)
				)
					return !0;
			}
		} else {
			const s = { time: N(), delta: Math.abs(c), direction: Math.sign(c), raw: e };
			p.length >= 2 && p.shift();
			const a = p.length ? p[p.length - 1] : void 0;
			if (
				(
					p.push(s),
					a ? (s.direction !== a.direction || s.delta > a.delta || s.time > a.time + 150) && m(s) : m(s),
					(function(e) {
						const s = t.params.mousewheel;
						if (e.direction < 0) {
							if (t.isEnd && !t.params.loop && s.releaseOnEdges) return !0;
						} else if (t.isBeginning && !t.params.loop && s.releaseOnEdges) return !0;
						return !1;
					})(s)
				)
			)
				return !0;
		}
		return a.preventDefault ? a.preventDefault() : (a.returnValue = !1), !1;
	}
	function f(e) {
		let a = t.$el;
		"container" !== t.params.mousewheel.eventsTarget && (a = s(t.params.mousewheel.eventsTarget)), a[e](
			"mouseenter",
			c
		), a[e]("mouseleave", u), a[e]("wheel", h);
	}
	function g() {
		return t.params.cssMode
			? (t.wrapperEl.removeEventListener("wheel", h), !0)
			: !t.mousewheel.enabled && (f("on"), (t.mousewheel.enabled = !0), !0);
	}
	function v() {
		return t.params.cssMode
			? (t.wrapperEl.addEventListener(event, h), !0)
			: !!t.mousewheel.enabled && (f("off"), (t.mousewheel.enabled = !1), !0);
	}
	i("init", () => {
		!t.params.mousewheel.enabled && t.params.cssMode && v(), t.params.mousewheel.enabled && g();
	}), i("destroy", () => {
		t.params.cssMode && g(), t.mousewheel.enabled && v();
	}), Object.assign(t.mousewheel, { enable: g, disable: v });
}
function Te(e, s, a, i) {
	const r = t();
	return e.params.createElements &&
		Object.keys(i).forEach(t => {
			if (!a[t] && !0 === a.auto) {
				let n = e.$el.children(`.${i[t]}`)[0];
				n || ((n = r.createElement("div")), (n.className = i[t]), e.$el.append(n)), (a[t] = n), (s[t] = n);
			}
		}), a;
}
function Se({ swiper: e, extendParams: t, on: a, emit: i }) {
	function r(t) {
		let a;
		return t &&
			(
				(a = s(t)),
				e.params.uniqueNavElements &&
					"string" == typeof t &&
					a.length > 1 &&
					1 === e.$el.find(t).length &&
					(a = e.$el.find(t))
			), a;
	}
	function n(t, s) {
		const a = e.params.navigation;
		t &&
			t.length > 0 &&
			(
				t[s ? "addClass" : "removeClass"](a.disabledClass),
				t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = s),
				e.params.watchOverflow && e.enabled && t[e.isLocked ? "addClass" : "removeClass"](a.lockClass)
			);
	}
	function l() {
		if (e.params.loop) return;
		const { $nextEl: t, $prevEl: s } = e.navigation;
		n(s, e.isBeginning && !e.params.rewind), n(t, e.isEnd && !e.params.rewind);
	}
	function o(t) {
		t.preventDefault(), (!e.isBeginning || e.params.loop || e.params.rewind) &&
			(e.slidePrev(), i("navigationPrev"));
	}
	function d(t) {
		t.preventDefault(), (!e.isEnd || e.params.loop || e.params.rewind) && (e.slideNext(), i("navigationNext"));
	}
	function p() {
		const t = e.params.navigation;
		if (
			(
				(e.params.navigation = Te(e, e.originalParams.navigation, e.params.navigation, {
					nextEl: "swiper-button-next",
					prevEl: "swiper-button-prev"
				})),
				!t.nextEl && !t.prevEl
			)
		)
			return;
		const s = r(t.nextEl),
			a = r(t.prevEl);
		s && s.length > 0 && s.on("click", d), a && a.length > 0 && a.on("click", o), Object.assign(e.navigation, {
			$nextEl: s,
			nextEl: s && s[0],
			$prevEl: a,
			prevEl: a && a[0]
		}), e.enabled || (s && s.addClass(t.lockClass), a && a.addClass(t.lockClass));
	}
	function c() {
		const { $nextEl: t, $prevEl: s } = e.navigation;
		t && t.length && (t.off("click", d), t.removeClass(e.params.navigation.disabledClass)), s &&
			s.length &&
			(s.off("click", o), s.removeClass(e.params.navigation.disabledClass));
	}
	t({
		navigation: {
			nextEl: null,
			prevEl: null,
			hideOnClick: !1,
			disabledClass: "swiper-button-disabled",
			hiddenClass: "swiper-button-hidden",
			lockClass: "swiper-button-lock",
			navigationDisabledClass: "swiper-navigation-disabled"
		}
	}), (e.navigation = { nextEl: null, $nextEl: null, prevEl: null, $prevEl: null }), a("init", () => {
		!1 === e.params.navigation.enabled ? u() : (p(), l());
	}), a("toEdge fromEdge lock unlock", () => {
		l();
	}), a("destroy", () => {
		c();
	}), a("enable disable", () => {
		const { $nextEl: t, $prevEl: s } = e.navigation;
		t && t[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass), s &&
			s[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass);
	}), a("click", (t, a) => {
		const { $nextEl: r, $prevEl: n } = e.navigation,
			l = a.target;
		if (e.params.navigation.hideOnClick && !s(l).is(n) && !s(l).is(r)) {
			if (
				e.pagination &&
				e.params.pagination &&
				e.params.pagination.clickable &&
				(e.pagination.el === l || e.pagination.el.contains(l))
			)
				return;
			let t;
			r
				? (t = r.hasClass(e.params.navigation.hiddenClass))
				: n && (t = n.hasClass(e.params.navigation.hiddenClass)), i(
				!0 === t ? "navigationShow" : "navigationHide"
			), r && r.toggleClass(e.params.navigation.hiddenClass), n && n.toggleClass(e.params.navigation.hiddenClass);
		}
	});
	const u = () => {
		e.$el.addClass(e.params.navigation.navigationDisabledClass), c();
	};
	Object.assign(e.navigation, {
		enable: () => {
			e.$el.removeClass(e.params.navigation.navigationDisabledClass), p(), l();
		},
		disable: u,
		update: l,
		init: p,
		destroy: c
	});
}
function Me(e = "") {
	return `.${e.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`;
}
function Pe({ swiper: e, extendParams: t, on: a, emit: i }) {
	const r = "swiper-pagination";
	let n;
	t({
		pagination: {
			el: null,
			bulletElement: "span",
			clickable: !1,
			hideOnClick: !1,
			renderBullet: null,
			renderProgressbar: null,
			renderFraction: null,
			renderCustom: null,
			progressbarOpposite: !1,
			type: "bullets",
			dynamicBullets: !1,
			dynamicMainBullets: 1,
			formatFractionCurrent: e => e,
			formatFractionTotal: e => e,
			bulletClass: `${r}-bullet`,
			bulletActiveClass: `${r}-bullet-active`,
			modifierClass: `${r}-`,
			currentClass: `${r}-current`,
			totalClass: `${r}-total`,
			hiddenClass: `${r}-hidden`,
			progressbarFillClass: `${r}-progressbar-fill`,
			progressbarOppositeClass: `${r}-progressbar-opposite`,
			clickableClass: `${r}-clickable`,
			lockClass: `${r}-lock`,
			horizontalClass: `${r}-horizontal`,
			verticalClass: `${r}-vertical`,
			paginationDisabledClass: `${r}-disabled`
		}
	}), (e.pagination = { el: null, $el: null, bullets: [] });
	let l = 0;
	function o() {
		return !e.params.pagination.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length;
	}
	function d(t, s) {
		const { bulletActiveClass: a } = e.params.pagination;
		t[s]().addClass(`${a}-${s}`)[s]().addClass(`${a}-${s}-${s}`);
	}
	function p() {
		const t = e.rtl,
			a = e.params.pagination;
		if (o()) return;
		const r = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
			p = e.pagination.$el;
		let c;
		const u = e.params.loop ? Math.ceil((r - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
		if (
			(
				e.params.loop
					? (
							(c = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)),
							c > r - 1 - 2 * e.loopedSlides && (c -= r - 2 * e.loopedSlides),
							c > u - 1 && (c -= u),
							c < 0 && "bullets" !== e.params.paginationType && (c = u + c)
						)
					: (c = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
				"bullets" === a.type && e.pagination.bullets && e.pagination.bullets.length > 0
			)
		) {
			const i = e.pagination.bullets;
			let r, o, u;
			if (
				(
					a.dynamicBullets &&
						(
							(n = i.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
							p.css(e.isHorizontal() ? "width" : "height", n * (a.dynamicMainBullets + 4) + "px"),
							a.dynamicMainBullets > 1 &&
								void 0 !== e.previousIndex &&
								(
									(l += c - (e.previousIndex - e.loopedSlides || 0)),
									l > a.dynamicMainBullets - 1 ? (l = a.dynamicMainBullets - 1) : l < 0 && (l = 0)
								),
							(r = Math.max(c - l, 0)),
							(o = r + (Math.min(i.length, a.dynamicMainBullets) - 1)),
							(u = (o + r) / 2)
						),
					i.removeClass(
						["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
							.map(e => `${a.bulletActiveClass}${e}`)
							.join(" ")
					),
					p.length > 1
				)
			)
				i.each(e => {
					const t = s(e),
						i = t.index();
					i === c && t.addClass(a.bulletActiveClass), a.dynamicBullets &&
						(
							i >= r && i <= o && t.addClass(`${a.bulletActiveClass}-main`),
							i === r && d(t, "prev"),
							i === o && d(t, "next")
						);
				});
			else {
				const t = i.eq(c),
					s = t.index();
				if ((t.addClass(a.bulletActiveClass), a.dynamicBullets)) {
					const t = i.eq(r),
						n = i.eq(o);
					for (let e = r; e <= o; e += 1) i.eq(e).addClass(`${a.bulletActiveClass}-main`);
					if (e.params.loop)
						if (s >= i.length) {
							for (let e = a.dynamicMainBullets; e >= 0; e -= 1)
								i.eq(i.length - e).addClass(`${a.bulletActiveClass}-main`);
							i.eq(i.length - a.dynamicMainBullets - 1).addClass(`${a.bulletActiveClass}-prev`);
						} else d(t, "prev"), d(n, "next");
					else d(t, "prev"), d(n, "next");
				}
			}
			if (a.dynamicBullets) {
				const s = Math.min(i.length, a.dynamicMainBullets + 4),
					r = (n * s - n) / 2 - u * n,
					l = t ? "right" : "left";
				i.css(e.isHorizontal() ? l : "top", `${r}px`);
			}
		}
		if (
			(
				"fraction" === a.type &&
					(
						p.find(Me(a.currentClass)).text(a.formatFractionCurrent(c + 1)),
						p.find(Me(a.totalClass)).text(a.formatFractionTotal(u))
					),
				"progressbar" === a.type
			)
		) {
			let t;
			t = a.progressbarOpposite
				? e.isHorizontal() ? "vertical" : "horizontal"
				: e.isHorizontal() ? "horizontal" : "vertical";
			const s = (c + 1) / u;
			let i = 1,
				r = 1;
			"horizontal" === t ? (i = s) : (r = s), p
				.find(Me(a.progressbarFillClass))
				.transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${r})`)
				.transition(e.params.speed);
		}
		"custom" === a.type && a.renderCustom
			? (p.html(a.renderCustom(e, c + 1, u)), i("paginationRender", p[0]))
			: i("paginationUpdate", p[0]), e.params.watchOverflow &&
			e.enabled &&
			p[e.isLocked ? "addClass" : "removeClass"](a.lockClass);
	}
	function c() {
		const t = e.params.pagination;
		if (o()) return;
		const s = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
			a = e.pagination.$el;
		let r = "";
		if ("bullets" === t.type) {
			let i = e.params.loop ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
			e.params.freeMode && e.params.freeMode.enabled && !e.params.loop && i > s && (i = s);
			for (let s = 0; s < i; s += 1)
				t.renderBullet
					? (r += t.renderBullet.call(e, s, t.bulletClass))
					: (r += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
			a.html(r), (e.pagination.bullets = a.find(Me(t.bulletClass)));
		}
		"fraction" === t.type &&
			(
				(r = t.renderFraction
					? t.renderFraction.call(e, t.currentClass, t.totalClass)
					: `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
				a.html(r)
			), "progressbar" === t.type &&
			(
				(r = t.renderProgressbar
					? t.renderProgressbar.call(e, t.progressbarFillClass)
					: `<span class="${t.progressbarFillClass}"></span>`),
				a.html(r)
			), "custom" !== t.type && i("paginationRender", e.pagination.$el[0]);
	}
	function u() {
		e.params.pagination = Te(e, e.originalParams.pagination, e.params.pagination, { el: "swiper-pagination" });
		const t = e.params.pagination;
		if (!t.el) return;
		let a = s(t.el);
		0 !== a.length &&
			(
				e.params.uniqueNavElements &&
					"string" == typeof t.el &&
					a.length > 1 &&
					((a = e.$el.find(t.el)), a.length > 1 && (a = a.filter(t => s(t).parents(".swiper")[0] === e.el))),
				"bullets" === t.type && t.clickable && a.addClass(t.clickableClass),
				a.addClass(t.modifierClass + t.type),
				a.addClass(e.isHorizontal() ? t.horizontalClass : t.verticalClass),
				"bullets" === t.type &&
					t.dynamicBullets &&
					(
						a.addClass(`${t.modifierClass}${t.type}-dynamic`),
						(l = 0),
						t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)
					),
				"progressbar" === t.type && t.progressbarOpposite && a.addClass(t.progressbarOppositeClass),
				t.clickable &&
					a.on("click", Me(t.bulletClass), function(t) {
						t.preventDefault();
						let a = s(this).index() * e.params.slidesPerGroup;
						e.params.loop && (a += e.loopedSlides), e.slideTo(a);
					}),
				Object.assign(e.pagination, { $el: a, el: a[0] }),
				e.enabled || a.addClass(t.lockClass)
			);
	}
	function m() {
		const t = e.params.pagination;
		if (o()) return;
		const s = e.pagination.$el;
		s.removeClass(t.hiddenClass), s.removeClass(t.modifierClass + t.type), s.removeClass(
			e.isHorizontal() ? t.horizontalClass : t.verticalClass
		), e.pagination.bullets &&
			e.pagination.bullets.removeClass &&
			e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && s.off("click", Me(t.bulletClass));
	}
	a("init", () => {
		!1 === e.params.pagination.enabled ? h() : (u(), c(), p());
	}), a("activeIndexChange", () => {
		(e.params.loop || void 0 === e.snapIndex) && p();
	}), a("snapIndexChange", () => {
		e.params.loop || p();
	}), a("slidesLengthChange", () => {
		e.params.loop && (c(), p());
	}), a("snapGridLengthChange", () => {
		e.params.loop || (c(), p());
	}), a("destroy", () => {
		m();
	}), a("enable disable", () => {
		const { $el: t } = e.pagination;
		t && t[e.enabled ? "removeClass" : "addClass"](e.params.pagination.lockClass);
	}), a("lock unlock", () => {
		p();
	}), a("click", (t, a) => {
		const r = a.target,
			{ $el: n } = e.pagination;
		if (
			e.params.pagination.el &&
			e.params.pagination.hideOnClick &&
			n &&
			n.length > 0 &&
			!s(r).hasClass(e.params.pagination.bulletClass)
		) {
			if (
				e.navigation &&
				((e.navigation.nextEl && r === e.navigation.nextEl) ||
					(e.navigation.prevEl && r === e.navigation.prevEl))
			)
				return;
			const t = n.hasClass(e.params.pagination.hiddenClass);
			i(!0 === t ? "paginationShow" : "paginationHide"), n.toggleClass(e.params.pagination.hiddenClass);
		}
	});
	const h = () => {
		e.$el.addClass(e.params.pagination.paginationDisabledClass), e.pagination.$el &&
			e.pagination.$el.addClass(e.params.pagination.paginationDisabledClass), m();
	};
	Object.assign(e.pagination, {
		enable: () => {
			e.$el.removeClass(e.params.pagination.paginationDisabledClass), e.pagination.$el &&
				e.pagination.$el.removeClass(e.params.pagination.paginationDisabledClass), u(), c(), p();
		},
		disable: h,
		render: c,
		update: p,
		init: u,
		destroy: m
	});
}
function ke({ swiper: e, extendParams: a, on: i, emit: r }) {
	const n = t();
	let l,
		o,
		d,
		p,
		c = !1,
		u = null,
		m = null;
	function h() {
		if (!e.params.scrollbar.el || !e.scrollbar.el) return;
		const { scrollbar: t, rtlTranslate: s, progress: a } = e,
			{ $dragEl: i, $el: r } = t,
			n = e.params.scrollbar;
		let l = o,
			p = (d - o) * a;
		s
			? ((p = -p), p > 0 ? ((l = o - p), (p = 0)) : -p + o > d && (l = d + p))
			: p < 0 ? ((l = o + p), (p = 0)) : p + o > d && (l = d - p), e.isHorizontal()
			? (i.transform(`translate3d(${p}px, 0, 0)`), (i[0].style.width = `${l}px`))
			: (i.transform(`translate3d(0px, ${p}px, 0)`), (i[0].style.height = `${l}px`)), n.hide &&
			(
				clearTimeout(u),
				(r[0].style.opacity = 1),
				(u = setTimeout(() => {
					(r[0].style.opacity = 0), r.transition(400);
				}, 1e3))
			);
	}
	function f() {
		if (!e.params.scrollbar.el || !e.scrollbar.el) return;
		const { scrollbar: t } = e,
			{ $dragEl: s, $el: a } = t;
		(s[0].style.width = ""), (s[0].style.height = ""), (d = e.isHorizontal()
			? a[0].offsetWidth
			: a[0].offsetHeight), (p =
			e.size /
			(e.virtualSize + e.params.slidesOffsetBefore - (e.params.centeredSlides ? e.snapGrid[0] : 0))), (o =
			"auto" === e.params.scrollbar.dragSize
				? d * p
				: parseInt(e.params.scrollbar.dragSize, 10)), e.isHorizontal()
			? (s[0].style.width = `${o}px`)
			: (s[0].style.height = `${o}px`), (a[0].style.display = p >= 1 ? "none" : ""), e.params.scrollbar.hide &&
			(a[0].style.opacity = 0), e.params.watchOverflow &&
			e.enabled &&
			t.$el[e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass);
	}
	function g(t) {
		return e.isHorizontal()
			? "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].clientX : t.clientX
			: "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].clientY : t.clientY;
	}
	function v(t) {
		const { scrollbar: s, rtlTranslate: a } = e,
			{ $el: i } = s;
		let r;
		(r =
			(g(t) - i.offset()[e.isHorizontal() ? "left" : "top"] - (null !== l ? l : o / 2)) / (d - o)), (r = Math.max(
			Math.min(r, 1),
			0
		)), a && (r = 1 - r);
		const n = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * r;
		e.updateProgress(n), e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses();
	}
	function w(t) {
		const s = e.params.scrollbar,
			{ scrollbar: a, $wrapperEl: i } = e,
			{ $el: n, $dragEl: o } = a;
		(c = !0), (l =
			t.target === o[0] || t.target === o
				? g(t) - t.target.getBoundingClientRect()[e.isHorizontal() ? "left" : "top"]
				: null), t.preventDefault(), t.stopPropagation(), i.transition(100), o.transition(100), v(
			t
		), clearTimeout(m), n.transition(0), s.hide && n.css("opacity", 1), e.params.cssMode &&
			e.$wrapperEl.css("scroll-snap-type", "none"), r("scrollbarDragStart", t);
	}
	function b(t) {
		const { scrollbar: s, $wrapperEl: a } = e,
			{ $el: i, $dragEl: n } = s;
		c &&
			(
				t.preventDefault ? t.preventDefault() : (t.returnValue = !1),
				v(t),
				a.transition(0),
				i.transition(0),
				n.transition(0),
				r("scrollbarDragMove", t)
			);
	}
	function x(t) {
		const s = e.params.scrollbar,
			{ scrollbar: a, $wrapperEl: i } = e,
			{ $el: n } = a;
		c &&
			(
				(c = !1),
				e.params.cssMode && (e.$wrapperEl.css("scroll-snap-type", ""), i.transition("")),
				s.hide &&
					(
						clearTimeout(m),
						(m = Y(() => {
							n.css("opacity", 0), n.transition(400);
						}, 1e3))
					),
				r("scrollbarDragEnd", t),
				s.snapOnRelease && e.slideToClosest()
			);
	}
	function E(t) {
		const { scrollbar: s, touchEventsTouch: a, touchEventsDesktop: i, params: r, support: l } = e,
			o = s.$el;
		if (!o) return;
		const d = o[0],
			p = !(!l.passiveListener || !r.passiveListeners) && { passive: !1, capture: !1 },
			c = !(!l.passiveListener || !r.passiveListeners) && { passive: !0, capture: !1 };
		if (!d) return;
		const u = "on" === t ? "addEventListener" : "removeEventListener";
		l.touch
			? (d[u](a.start, w, p), d[u](a.move, b, p), d[u](a.end, x, c))
			: (d[u](i.start, w, p), n[u](i.move, b, p), n[u](i.end, x, c));
	}
	function y() {
		const { scrollbar: t, $el: a } = e;
		e.params.scrollbar = Te(e, e.originalParams.scrollbar, e.params.scrollbar, { el: "swiper-scrollbar" });
		const i = e.params.scrollbar;
		if (!i.el) return;
		let r = s(i.el);
		e.params.uniqueNavElements &&
			"string" == typeof i.el &&
			r.length > 1 &&
			1 === a.find(i.el).length &&
			(r = a.find(i.el)), r.addClass(e.isHorizontal() ? i.horizontalClass : i.verticalClass);
		let n = r.find(`.${e.params.scrollbar.dragClass}`);
		0 === n.length &&
			((n = s(`<div class="${e.params.scrollbar.dragClass}"></div>`)), r.append(n)), Object.assign(t, {
			$el: r,
			el: r[0],
			$dragEl: n,
			dragEl: n[0]
		}), i.draggable && e.params.scrollbar.el && e.scrollbar.el && E("on"), r &&
			r[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass);
	}
	function C() {
		const t = e.params.scrollbar,
			s = e.scrollbar.$el;
		s && s.removeClass(e.isHorizontal() ? t.horizontalClass : t.verticalClass), e.params.scrollbar.el &&
			e.scrollbar.el &&
			E("off");
	}
	a({
		scrollbar: {
			el: null,
			dragSize: "auto",
			hide: !1,
			draggable: !1,
			snapOnRelease: !0,
			lockClass: "swiper-scrollbar-lock",
			dragClass: "swiper-scrollbar-drag",
			scrollbarDisabledClass: "swiper-scrollbar-disabled",
			horizontalClass: "swiper-scrollbar-horizontal",
			verticalClass: "swiper-scrollbar-vertical"
		}
	}), (e.scrollbar = { el: null, dragEl: null, $el: null, $dragEl: null }), i("init", () => {
		!1 === e.params.scrollbar.enabled ? $() : (y(), f(), h());
	}), i("update resize observerUpdate lock unlock", () => {
		f();
	}), i("setTranslate", () => {
		h();
	}), i("setTransition", (t, s) => {
		!(function(t) {
			e.params.scrollbar.el && e.scrollbar.el && e.scrollbar.$dragEl.transition(t);
		})(s);
	}), i("enable disable", () => {
		const { $el: t } = e.scrollbar;
		t && t[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass);
	}), i("destroy", () => {
		C();
	});
	const $ = () => {
		e.$el.addClass(e.params.scrollbar.scrollbarDisabledClass), e.scrollbar.$el &&
			e.scrollbar.$el.addClass(e.params.scrollbar.scrollbarDisabledClass), C();
	};
	Object.assign(e.scrollbar, {
		enable: () => {
			e.$el.removeClass(e.params.scrollbar.scrollbarDisabledClass), e.scrollbar.$el &&
				e.scrollbar.$el.removeClass(e.params.scrollbar.scrollbarDisabledClass), y(), f(), h();
		},
		disable: $,
		updateSize: f,
		setTranslate: h,
		init: y,
		destroy: C
	});
}
function ze({ swiper: e, extendParams: t, on: a }) {
	t({ parallax: { enabled: !1 } });
	const i = (t, a) => {
			const { rtl: i } = e,
				r = s(t),
				n = i ? -1 : 1,
				l = r.attr("data-swiper-parallax") || "0";
			let o = r.attr("data-swiper-parallax-x"),
				d = r.attr("data-swiper-parallax-y");
			const p = r.attr("data-swiper-parallax-scale"),
				c = r.attr("data-swiper-parallax-opacity");
			if (
				(
					o || d
						? ((o = o || "0"), (d = d || "0"))
						: e.isHorizontal() ? ((o = l), (d = "0")) : ((d = l), (o = "0")),
					(o = o.indexOf("%") >= 0 ? parseInt(o, 10) * a * n + "%" : o * a * n + "px"),
					(d = d.indexOf("%") >= 0 ? parseInt(d, 10) * a + "%" : d * a + "px"),
					null != c
				)
			) {
				const e = c - (c - 1) * (1 - Math.abs(a));
				r[0].style.opacity = e;
			}
			if (null == p) r.transform(`translate3d(${o}, ${d}, 0px)`);
			else {
				const e = p - (p - 1) * (1 - Math.abs(a));
				r.transform(`translate3d(${o}, ${d}, 0px) scale(${e})`);
			}
		},
		r = () => {
			const { $el: t, slides: a, progress: r, snapGrid: n } = e;
			t
				.children(
					"[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
				)
				.each(e => {
					i(e, r);
				}), a.each((t, a) => {
				let l = t.progress;
				e.params.slidesPerGroup > 1 &&
					"auto" !== e.params.slidesPerView &&
					(l += Math.ceil(a / 2) - r * (n.length - 1)), (l = Math.min(Math.max(l, -1), 1)), s(t)
					.find(
						"[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
					)
					.each(e => {
						i(e, l);
					});
			});
		};
	a("beforeInit", () => {
		e.params.parallax.enabled && ((e.params.watchSlidesProgress = !0), (e.originalParams.watchSlidesProgress = !0));
	}), a("init", () => {
		e.params.parallax.enabled && r();
	}), a("setTranslate", () => {
		e.params.parallax.enabled && r();
	}), a("setTransition", (t, a) => {
		e.params.parallax.enabled &&
			((t = e.params.speed) => {
				const { $el: a } = e;
				a
					.find(
						"[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
					)
					.each(e => {
						const a = s(e);
						let i = parseInt(a.attr("data-swiper-parallax-duration"), 10) || t;
						0 === t && (i = 0), a.transition(i);
					});
			})(a);
	});
}
function Ie({ swiper: t, extendParams: a, on: i, emit: r }) {
	const n = e();
	a({
		zoom: {
			enabled: !1,
			maxRatio: 3,
			minRatio: 1,
			toggle: !0,
			containerClass: "swiper-zoom-container",
			zoomedSlideClass: "swiper-slide-zoomed"
		}
	}), (t.zoom = { enabled: !1 });
	let l,
		o,
		d,
		p = 1,
		c = !1;
	const u = {
			$slideEl: void 0,
			slideWidth: void 0,
			slideHeight: void 0,
			$imageEl: void 0,
			$imageWrapEl: void 0,
			maxRatio: 3
		},
		m = {
			isTouched: void 0,
			isMoved: void 0,
			currentX: void 0,
			currentY: void 0,
			minX: void 0,
			minY: void 0,
			maxX: void 0,
			maxY: void 0,
			width: void 0,
			height: void 0,
			startX: void 0,
			startY: void 0,
			touchesStart: {},
			touchesCurrent: {}
		},
		h = { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 };
	let f = 1;
	function g(e) {
		if (e.targetTouches.length < 2) return 1;
		const t = e.targetTouches[0].pageX,
			s = e.targetTouches[0].pageY,
			a = e.targetTouches[1].pageX,
			i = e.targetTouches[1].pageY;
		return Math.sqrt((a - t) ** 2 + (i - s) ** 2);
	}
	function v(e) {
		const a = t.support,
			i = t.params.zoom;
		if (((o = !1), (d = !1), !a.gestures)) {
			if ("touchstart" !== e.type || ("touchstart" === e.type && e.targetTouches.length < 2)) return;
			(o = !0), (u.scaleStart = g(e));
		}
		(u.$slideEl && u.$slideEl.length) ||
		(
			(u.$slideEl = s(e.target).closest(`.${t.params.slideClass}`)),
			0 === u.$slideEl.length && (u.$slideEl = t.slides.eq(t.activeIndex)),
			(u.$imageEl = u.$slideEl
				.find(`.${i.containerClass}`)
				.eq(0)
				.find("picture, img, svg, canvas, .swiper-zoom-target")
				.eq(0)),
			(u.$imageWrapEl = u.$imageEl.parent(`.${i.containerClass}`)),
			(u.maxRatio = u.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio),
			0 !== u.$imageWrapEl.length
		)
			? (u.$imageEl && u.$imageEl.transition(0), (c = !0))
			: (u.$imageEl = void 0);
	}
	function w(e) {
		const s = t.support,
			a = t.params.zoom,
			i = t.zoom;
		if (!s.gestures) {
			if ("touchmove" !== e.type || ("touchmove" === e.type && e.targetTouches.length < 2)) return;
			(d = !0), (u.scaleMove = g(e));
		}
		u.$imageEl && 0 !== u.$imageEl.length
			? (
					s.gestures ? (i.scale = e.scale * p) : (i.scale = u.scaleMove / u.scaleStart * p),
					i.scale > u.maxRatio && (i.scale = u.maxRatio - 1 + (i.scale - u.maxRatio + 1) ** 0.5),
					i.scale < a.minRatio && (i.scale = a.minRatio + 1 - (a.minRatio - i.scale + 1) ** 0.5),
					u.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`)
				)
			: "gesturechange" === e.type && v(e);
	}
	function b(e) {
		const s = t.device,
			a = t.support,
			i = t.params.zoom,
			r = t.zoom;
		if (!a.gestures) {
			if (!o || !d) return;
			if ("touchend" !== e.type || ("touchend" === e.type && e.changedTouches.length < 2 && !s.android)) return;
			(o = !1), (d = !1);
		}
		u.$imageEl &&
			0 !== u.$imageEl.length &&
			(
				(r.scale = Math.max(Math.min(r.scale, u.maxRatio), i.minRatio)),
				u.$imageEl.transition(t.params.speed).transform(`translate3d(0,0,0) scale(${r.scale})`),
				(p = r.scale),
				(c = !1),
				1 === r.scale && (u.$slideEl = void 0)
			);
	}
	function x(e) {
		const s = t.zoom;
		if (!u.$imageEl || 0 === u.$imageEl.length) return;
		if (((t.allowClick = !1), !m.isTouched || !u.$slideEl)) return;
		m.isMoved ||
			(
				(m.width = u.$imageEl[0].offsetWidth),
				(m.height = u.$imageEl[0].offsetHeight),
				(m.startX = R(u.$imageWrapEl[0], "x") || 0),
				(m.startY = R(u.$imageWrapEl[0], "y") || 0),
				(u.slideWidth = u.$slideEl[0].offsetWidth),
				(u.slideHeight = u.$slideEl[0].offsetHeight),
				u.$imageWrapEl.transition(0)
			);
		const a = m.width * s.scale,
			i = m.height * s.scale;
		if (!(a < u.slideWidth && i < u.slideHeight)) {
			if (
				(
					(m.minX = Math.min(u.slideWidth / 2 - a / 2, 0)),
					(m.maxX = -m.minX),
					(m.minY = Math.min(u.slideHeight / 2 - i / 2, 0)),
					(m.maxY = -m.minY),
					(m.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX),
					(m.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY),
					!m.isMoved && !c
				)
			) {
				if (
					t.isHorizontal() &&
					((Math.floor(m.minX) === Math.floor(m.startX) && m.touchesCurrent.x < m.touchesStart.x) ||
						(Math.floor(m.maxX) === Math.floor(m.startX) && m.touchesCurrent.x > m.touchesStart.x))
				)
					return void (m.isTouched = !1);
				if (
					!t.isHorizontal() &&
					((Math.floor(m.minY) === Math.floor(m.startY) && m.touchesCurrent.y < m.touchesStart.y) ||
						(Math.floor(m.maxY) === Math.floor(m.startY) && m.touchesCurrent.y > m.touchesStart.y))
				)
					return void (m.isTouched = !1);
			}
			e.cancelable && e.preventDefault(), e.stopPropagation(), (m.isMoved = !0), (m.currentX =
				m.touchesCurrent.x - m.touchesStart.x + m.startX), (m.currentY =
				m.touchesCurrent.y - m.touchesStart.y + m.startY), m.currentX < m.minX &&
				(m.currentX = m.minX + 1 - (m.minX - m.currentX + 1) ** 0.8), m.currentX > m.maxX &&
				(m.currentX = m.maxX - 1 + (m.currentX - m.maxX + 1) ** 0.8), m.currentY < m.minY &&
				(m.currentY = m.minY + 1 - (m.minY - m.currentY + 1) ** 0.8), m.currentY > m.maxY &&
				(m.currentY = m.maxY - 1 + (m.currentY - m.maxY + 1) ** 0.8), h.prevPositionX ||
				(h.prevPositionX = m.touchesCurrent.x), h.prevPositionY ||
				(h.prevPositionY = m.touchesCurrent.y), h.prevTime || (h.prevTime = Date.now()), (h.x =
				(m.touchesCurrent.x - h.prevPositionX) / (Date.now() - h.prevTime) / 2), (h.y =
				(m.touchesCurrent.y - h.prevPositionY) / (Date.now() - h.prevTime) / 2), Math.abs(
				m.touchesCurrent.x - h.prevPositionX
			) < 2 && (h.x = 0), Math.abs(m.touchesCurrent.y - h.prevPositionY) < 2 && (h.y = 0), (h.prevPositionX =
				m.touchesCurrent.x), (h.prevPositionY =
				m.touchesCurrent.y), (h.prevTime = Date.now()), u.$imageWrapEl.transform(
				`translate3d(${m.currentX}px, ${m.currentY}px,0)`
			);
		}
	}
	function E() {
		const e = t.zoom;
		u.$slideEl &&
			t.previousIndex !== t.activeIndex &&
			(
				u.$imageEl && u.$imageEl.transform("translate3d(0,0,0) scale(1)"),
				u.$imageWrapEl && u.$imageWrapEl.transform("translate3d(0,0,0)"),
				(e.scale = 1),
				(p = 1),
				(u.$slideEl = void 0),
				(u.$imageEl = void 0),
				(u.$imageWrapEl = void 0)
			);
	}
	function y(e) {
		const a = t.zoom,
			i = t.params.zoom;
		if (
			(
				u.$slideEl ||
					(
						e && e.target && (u.$slideEl = s(e.target).closest(`.${t.params.slideClass}`)),
						u.$slideEl ||
							(t.params.virtual && t.params.virtual.enabled && t.virtual
								? (u.$slideEl = t.$wrapperEl.children(`.${t.params.slideActiveClass}`))
								: (u.$slideEl = t.slides.eq(t.activeIndex))),
						(u.$imageEl = u.$slideEl
							.find(`.${i.containerClass}`)
							.eq(0)
							.find("picture, img, svg, canvas, .swiper-zoom-target")
							.eq(0)),
						(u.$imageWrapEl = u.$imageEl.parent(`.${i.containerClass}`))
					),
				!u.$imageEl || 0 === u.$imageEl.length || !u.$imageWrapEl || 0 === u.$imageWrapEl.length
			)
		)
			return;
		let r, l, o, d, c, h, f, g, v, w, b, x, E, y, C, $, T, S;
		t.params.cssMode &&
			((t.wrapperEl.style.overflow = "hidden"), (t.wrapperEl.style.touchAction = "none")), u.$slideEl.addClass(
			`${i.zoomedSlideClass}`
		), void 0 === m.touchesStart.x && e
			? (
					(r = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX),
					(l = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY)
				)
			: ((r = m.touchesStart.x), (l = m.touchesStart.y)), (a.scale =
			u.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio), (p =
			u.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio), e
			? (
					(T = u.$slideEl[0].offsetWidth),
					(S = u.$slideEl[0].offsetHeight),
					(o = u.$slideEl.offset().left + n.scrollX),
					(d = u.$slideEl.offset().top + n.scrollY),
					(c = o + T / 2 - r),
					(h = d + S / 2 - l),
					(v = u.$imageEl[0].offsetWidth),
					(w = u.$imageEl[0].offsetHeight),
					(b = v * a.scale),
					(x = w * a.scale),
					(E = Math.min(T / 2 - b / 2, 0)),
					(y = Math.min(S / 2 - x / 2, 0)),
					(C = -E),
					($ = -y),
					(f = c * a.scale),
					(g = h * a.scale),
					f < E && (f = E),
					f > C && (f = C),
					g < y && (g = y),
					g > $ && (g = $)
				)
			: ((f = 0), (g = 0)), u.$imageWrapEl
			.transition(300)
			.transform(`translate3d(${f}px, ${g}px,0)`), u.$imageEl
			.transition(300)
			.transform(`translate3d(0,0,0) scale(${a.scale})`);
	}
	function C() {
		const e = t.zoom,
			s = t.params.zoom;
		u.$slideEl ||
			(
				t.params.virtual && t.params.virtual.enabled && t.virtual
					? (u.$slideEl = t.$wrapperEl.children(`.${t.params.slideActiveClass}`))
					: (u.$slideEl = t.slides.eq(t.activeIndex)),
				(u.$imageEl = u.$slideEl
					.find(`.${s.containerClass}`)
					.eq(0)
					.find("picture, img, svg, canvas, .swiper-zoom-target")
					.eq(0)),
				(u.$imageWrapEl = u.$imageEl.parent(`.${s.containerClass}`))
			), u.$imageEl &&
			0 !== u.$imageEl.length &&
			u.$imageWrapEl &&
			0 !== u.$imageWrapEl.length &&
			(
				t.params.cssMode && ((t.wrapperEl.style.overflow = ""), (t.wrapperEl.style.touchAction = "")),
				(e.scale = 1),
				(p = 1),
				u.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
				u.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
				u.$slideEl.removeClass(`${s.zoomedSlideClass}`),
				(u.$slideEl = void 0)
			);
	}
	function $(e) {
		const s = t.zoom;
		s.scale && 1 !== s.scale ? C() : y(e);
	}
	function T() {
		const e = t.support;
		return {
			passiveListener: !(
				"touchstart" !== t.touchEvents.start ||
				!e.passiveListener ||
				!t.params.passiveListeners
			) && { passive: !0, capture: !1 },
			activeListenerWithCapture: !e.passiveListener || { passive: !1, capture: !0 }
		};
	}
	function S() {
		return `.${t.params.slideClass}`;
	}
	function M(e) {
		const { passiveListener: s } = T(),
			a = S();
		t.$wrapperEl[e]("gesturestart", a, v, s), t.$wrapperEl[e]("gesturechange", a, w, s), t.$wrapperEl[e](
			"gestureend",
			a,
			b,
			s
		);
	}
	function P() {
		l || ((l = !0), M("on"));
	}
	function k() {
		l && ((l = !1), M("off"));
	}
	function z() {
		const e = t.zoom;
		if (e.enabled) return;
		e.enabled = !0;
		const s = t.support,
			{ passiveListener: a, activeListenerWithCapture: i } = T(),
			r = S();
		s.gestures
			? (t.$wrapperEl.on(t.touchEvents.start, P, a), t.$wrapperEl.on(t.touchEvents.end, k, a))
			: "touchstart" === t.touchEvents.start &&
				(
					t.$wrapperEl.on(t.touchEvents.start, r, v, a),
					t.$wrapperEl.on(t.touchEvents.move, r, w, i),
					t.$wrapperEl.on(t.touchEvents.end, r, b, a),
					t.touchEvents.cancel && t.$wrapperEl.on(t.touchEvents.cancel, r, b, a)
				), t.$wrapperEl.on(t.touchEvents.move, `.${t.params.zoom.containerClass}`, x, i);
	}
	function I() {
		const e = t.zoom;
		if (!e.enabled) return;
		const s = t.support;
		e.enabled = !1;
		const { passiveListener: a, activeListenerWithCapture: i } = T(),
			r = S();
		s.gestures
			? (t.$wrapperEl.off(t.touchEvents.start, P, a), t.$wrapperEl.off(t.touchEvents.end, k, a))
			: "touchstart" === t.touchEvents.start &&
				(
					t.$wrapperEl.off(t.touchEvents.start, r, v, a),
					t.$wrapperEl.off(t.touchEvents.move, r, w, i),
					t.$wrapperEl.off(t.touchEvents.end, r, b, a),
					t.touchEvents.cancel && t.$wrapperEl.off(t.touchEvents.cancel, r, b, a)
				), t.$wrapperEl.off(t.touchEvents.move, `.${t.params.zoom.containerClass}`, x, i);
	}
	Object.defineProperty(t.zoom, "scale", {
		get: () => f,
		set(e) {
			if (f !== e) {
				const t = u.$imageEl ? u.$imageEl[0] : void 0,
					s = u.$slideEl ? u.$slideEl[0] : void 0;
				r("zoomChange", e, t, s);
			}
			f = e;
		}
	}), i("init", () => {
		t.params.zoom.enabled && z();
	}), i("destroy", () => {
		I();
	}), i("touchStart", (e, s) => {
		t.zoom.enabled &&
			(function(e) {
				const s = t.device;
				u.$imageEl &&
					0 !== u.$imageEl.length &&
					(m.isTouched ||
						(
							s.android && e.cancelable && e.preventDefault(),
							(m.isTouched = !0),
							(m.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX),
							(m.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY)
						));
			})(s);
	}), i("touchEnd", (e, s) => {
		t.zoom.enabled &&
			(function() {
				const e = t.zoom;
				if (!u.$imageEl || 0 === u.$imageEl.length) return;
				if (!m.isTouched || !m.isMoved) return (m.isTouched = !1), void (m.isMoved = !1);
				(m.isTouched = !1), (m.isMoved = !1);
				let s = 300,
					a = 300;
				const i = h.x * s,
					r = m.currentX + i,
					n = h.y * a,
					l = m.currentY + n;
				0 !== h.x && (s = Math.abs((r - m.currentX) / h.x)), 0 !== h.y &&
					(a = Math.abs((l - m.currentY) / h.y));
				const o = Math.max(s, a);
				(m.currentX = r), (m.currentY = l);
				const d = m.width * e.scale,
					p = m.height * e.scale;
				(m.minX = Math.min(u.slideWidth / 2 - d / 2, 0)), (m.maxX = -m.minX), (m.minY = Math.min(
					u.slideHeight / 2 - p / 2,
					0
				)), (m.maxY = -m.minY), (m.currentX = Math.max(
					Math.min(m.currentX, m.maxX),
					m.minX
				)), (m.currentY = Math.max(Math.min(m.currentY, m.maxY), m.minY)), u.$imageWrapEl
					.transition(o)
					.transform(`translate3d(${m.currentX}px, ${m.currentY}px,0)`);
			})();
	}), i("doubleTap", (e, s) => {
		!t.animating && t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && $(s);
	}), i("transitionEnd", () => {
		t.zoom.enabled && t.params.zoom.enabled && E();
	}), i("slideChange", () => {
		t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && E();
	}), Object.assign(t.zoom, { enable: z, disable: I, in: y, out: C, toggle: $ });
}
function Oe({ swiper: t, extendParams: a, on: i, emit: r }) {
	a({
		lazy: {
			checkInView: !1,
			enabled: !1,
			loadPrevNext: !1,
			loadPrevNextAmount: 1,
			loadOnTransitionStart: !1,
			scrollingElement: "",
			elementClass: "swiper-lazy",
			loadingClass: "swiper-lazy-loading",
			loadedClass: "swiper-lazy-loaded",
			preloaderClass: "swiper-lazy-preloader"
		}
	}), (t.lazy = {});
	let n = !1,
		l = !1;
	function o(e, a = !0) {
		const i = t.params.lazy;
		if (void 0 === e) return;
		if (0 === t.slides.length) return;
		const n =
				t.virtual && t.params.virtual.enabled
					? t.$wrapperEl.children(`.${t.params.slideClass}[data-swiper-slide-index="${e}"]`)
					: t.slides.eq(e),
			l = n.find(`.${i.elementClass}:not(.${i.loadedClass}):not(.${i.loadingClass})`);
		!n.hasClass(i.elementClass) || n.hasClass(i.loadedClass) || n.hasClass(i.loadingClass) || l.push(n[0]), 0 !==
			l.length &&
			l.each(e => {
				const l = s(e);
				l.addClass(i.loadingClass);
				const d = l.attr("data-background"),
					p = l.attr("data-src"),
					c = l.attr("data-srcset"),
					u = l.attr("data-sizes"),
					m = l.parent("picture");
				t.loadImage(l[0], p || d, c, u, !1, () => {
					if (null != t && t && (!t || t.params) && !t.destroyed) {
						if (
							(
								d
									? (l.css("background-image", `url("${d}")`), l.removeAttr("data-background"))
									: (
											c && (l.attr("srcset", c), l.removeAttr("data-srcset")),
											u && (l.attr("sizes", u), l.removeAttr("data-sizes")),
											m.length &&
												m.children("source").each(e => {
													const t = s(e);
													t.attr("data-srcset") &&
														(
															t.attr("srcset", t.attr("data-srcset")),
															t.removeAttr("data-srcset")
														);
												}),
											p && (l.attr("src", p), l.removeAttr("data-src"))
										),
								l.addClass(i.loadedClass).removeClass(i.loadingClass),
								n.find(`.${i.preloaderClass}`).remove(),
								t.params.loop && a
							)
						) {
							const e = n.attr("data-swiper-slide-index");
							if (n.hasClass(t.params.slideDuplicateClass)) {
								o(
									t.$wrapperEl
										.children(
											`[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`
										)
										.index(),
									!1
								);
							} else {
								o(
									t.$wrapperEl
										.children(`.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`)
										.index(),
									!1
								);
							}
						}
						r("lazyImageReady", n[0], l[0]), t.params.autoHeight && t.updateAutoHeight();
					}
				}), r("lazyImageLoad", n[0], l[0]);
			});
	}
	function d() {
		const { $wrapperEl: e, params: a, slides: i, activeIndex: r } = t,
			n = t.virtual && a.virtual.enabled,
			d = a.lazy;
		let p = a.slidesPerView;
		function c(t) {
			if (n) {
				if (e.children(`.${a.slideClass}[data-swiper-slide-index="${t}"]`).length) return !0;
			} else if (i[t]) return !0;
			return !1;
		}
		function u(e) {
			return n ? s(e).attr("data-swiper-slide-index") : s(e).index();
		}
		if (("auto" === p && (p = 0), l || (l = !0), t.params.watchSlidesProgress))
			e.children(`.${a.slideVisibleClass}`).each(e => {
				o(n ? s(e).attr("data-swiper-slide-index") : s(e).index());
			});
		else if (p > 1) for (let e = r; e < r + p; e += 1) c(e) && o(e);
		else o(r);
		if (d.loadPrevNext)
			if (p > 1 || (d.loadPrevNextAmount && d.loadPrevNextAmount > 1)) {
				const e = d.loadPrevNextAmount,
					t = Math.ceil(p),
					s = Math.min(r + t + Math.max(e, t), i.length),
					a = Math.max(r - Math.max(t, e), 0);
				for (let e = r + t; e < s; e += 1) c(e) && o(e);
				for (let e = a; e < r; e += 1) c(e) && o(e);
			} else {
				const t = e.children(`.${a.slideNextClass}`);
				t.length > 0 && o(u(t));
				const s = e.children(`.${a.slidePrevClass}`);
				s.length > 0 && o(u(s));
			}
	}
	function p() {
		const a = e();
		if (!t || t.destroyed) return;
		const i = t.params.lazy.scrollingElement ? s(t.params.lazy.scrollingElement) : s(a),
			r = i[0] === a,
			l = r ? a.innerWidth : i[0].offsetWidth,
			o = r ? a.innerHeight : i[0].offsetHeight,
			c = t.$el.offset(),
			{ rtlTranslate: u } = t;
		let m = !1;
		u && (c.left -= t.$el[0].scrollLeft);
		const h = [
			[c.left, c.top],
			[c.left + t.width, c.top],
			[c.left, c.top + t.height],
			[c.left + t.width, c.top + t.height]
		];
		for (let e = 0; e < h.length; e += 1) {
			const t = h[e];
			if (t[0] >= 0 && t[0] <= l && t[1] >= 0 && t[1] <= o) {
				if (0 === t[0] && 0 === t[1]) continue;
				m = !0;
			}
		}
		const f = !(
			"touchstart" !== t.touchEvents.start ||
			!t.support.passiveListener ||
			!t.params.passiveListeners
		) && { passive: !0, capture: !1 };
		m ? (d(), i.off("scroll", p, f)) : n || ((n = !0), i.on("scroll", p, f));
	}
	i("beforeInit", () => {
		t.params.lazy.enabled && t.params.preloadImages && (t.params.preloadImages = !1);
	}), i("init", () => {
		t.params.lazy.enabled && (t.params.lazy.checkInView ? p() : d());
	}), i("scroll", () => {
		t.params.freeMode && t.params.freeMode.enabled && !t.params.freeMode.sticky && d();
	}), i("scrollbarDragMove resize _freeModeNoMomentumRelease", () => {
		t.params.lazy.enabled && (t.params.lazy.checkInView ? p() : d());
	}), i("transitionStart", () => {
		t.params.lazy.enabled &&
			(t.params.lazy.loadOnTransitionStart || (!t.params.lazy.loadOnTransitionStart && !l)) &&
			(t.params.lazy.checkInView ? p() : d());
	}), i("transitionEnd", () => {
		t.params.lazy.enabled && !t.params.lazy.loadOnTransitionStart && (t.params.lazy.checkInView ? p() : d());
	}), i("slideChange", () => {
		const { lazy: e, cssMode: s, watchSlidesProgress: a, touchReleaseOnEdges: i, resistanceRatio: r } = t.params;
		e.enabled && (s || (a && (i || 0 === r))) && d();
	}), i("destroy", () => {
		t.$el && t.$el.find(`.${t.params.lazy.loadingClass}`).removeClass(t.params.lazy.loadingClass);
	}), Object.assign(t.lazy, { load: d, loadInSlide: o });
}
function Le({ swiper: e, extendParams: t, on: s }) {
	function a(e, t) {
		const s = (function() {
			let e, t, s;
			return (a, i) => {
				for (t = -1, e = a.length; e - t > 1; ) (s = (e + t) >> 1), a[s] <= i ? (t = s) : (e = s);
				return e;
			};
		})();
		let a, i;
		return (this.x = e), (this.y = t), (this.lastIndex = e.length - 1), (this.interpolate = function(e) {
			return e
				? (
						(i = s(this.x, e)),
						(a = i - 1),
						(e - this.x[a]) * (this.y[i] - this.y[a]) / (this.x[i] - this.x[a]) + this.y[a]
					)
				: 0;
		}), this;
	}
	function i() {
		e.controller.control && e.controller.spline && ((e.controller.spline = void 0), delete e.controller.spline);
	}
	t({ controller: { control: void 0, inverse: !1, by: "slide" } }), (e.controller = {
		control: void 0
	}), s("beforeInit", () => {
		e.controller.control = e.params.controller.control;
	}), s("update", () => {
		i();
	}), s("resize", () => {
		i();
	}), s("observerUpdate", () => {
		i();
	}), s("setTranslate", (t, s, a) => {
		e.controller.control && e.controller.setTranslate(s, a);
	}), s("setTransition", (t, s, a) => {
		e.controller.control && e.controller.setTransition(s, a);
	}), Object.assign(e.controller, {
		setTranslate: function(t, s) {
			const i = e.controller.control;
			let r, n;
			const l = e.constructor;
			function o(t) {
				const s = e.rtlTranslate ? -e.translate : e.translate;
				"slide" === e.params.controller.by &&
					(
						!(function(t) {
							e.controller.spline ||
								(e.controller.spline = e.params.loop
									? new a(e.slidesGrid, t.slidesGrid)
									: new a(e.snapGrid, t.snapGrid));
						})(t),
						(n = -e.controller.spline.interpolate(-s))
					), (n && "container" !== e.params.controller.by) ||
					(
						(r = (t.maxTranslate() - t.minTranslate()) / (e.maxTranslate() - e.minTranslate())),
						(n = (s - e.minTranslate()) * r + t.minTranslate())
					), e.params.controller.inverse && (n = t.maxTranslate() - n), t.updateProgress(n), t.setTranslate(
					n,
					e
				), t.updateActiveIndex(), t.updateSlidesClasses();
			}
			if (Array.isArray(i)) for (let e = 0; e < i.length; e += 1) i[e] !== s && i[e] instanceof l && o(i[e]);
			else i instanceof l && s !== i && o(i);
		},
		setTransition: function(t, s) {
			const a = e.constructor,
				i = e.controller.control;
			let r;
			function n(s) {
				s.setTransition(t, e), 0 !== t &&
					(
						s.transitionStart(),
						s.params.autoHeight &&
							Y(() => {
								s.updateAutoHeight();
							}),
						s.$wrapperEl.transitionEnd(() => {
							i &&
								(s.params.loop && "slide" === e.params.controller.by && s.loopFix(), s.transitionEnd());
						})
					);
			}
			if (Array.isArray(i)) for (r = 0; r < i.length; r += 1) i[r] !== s && i[r] instanceof a && n(i[r]);
			else i instanceof a && s !== i && n(i);
		}
	});
}
function De({ swiper: e, extendParams: t, on: a }) {
	t({
		a11y: {
			enabled: !0,
			notificationClass: "swiper-notification",
			prevSlideMessage: "Previous slide",
			nextSlideMessage: "Next slide",
			firstSlideMessage: "This is the first slide",
			lastSlideMessage: "This is the last slide",
			paginationBulletMessage: "Go to slide {{index}}",
			slideLabelMessage: "{{index}} / {{slidesLength}}",
			containerMessage: null,
			containerRoleDescriptionMessage: null,
			itemRoleDescriptionMessage: null,
			slideRole: "group",
			id: null
		}
	}), (e.a11y = { clicked: !1 });
	let i = null;
	function r(e) {
		const t = i;
		0 !== t.length && (t.html(""), t.html(e));
	}
	function n(e) {
		e.attr("tabIndex", "0");
	}
	function l(e) {
		e.attr("tabIndex", "-1");
	}
	function o(e, t) {
		e.attr("role", t);
	}
	function d(e, t) {
		e.attr("aria-roledescription", t);
	}
	function p(e, t) {
		e.attr("aria-label", t);
	}
	function c(e) {
		e.attr("aria-disabled", !0);
	}
	function u(e) {
		e.attr("aria-disabled", !1);
	}
	function m(t) {
		if (13 !== t.keyCode && 32 !== t.keyCode) return;
		const a = e.params.a11y,
			i = s(t.target);
		e.navigation &&
			e.navigation.$nextEl &&
			i.is(e.navigation.$nextEl) &&
			(
				(e.isEnd && !e.params.loop) || e.slideNext(),
				e.isEnd ? r(a.lastSlideMessage) : r(a.nextSlideMessage)
			), e.navigation &&
			e.navigation.$prevEl &&
			i.is(e.navigation.$prevEl) &&
			(
				(e.isBeginning && !e.params.loop) || e.slidePrev(),
				e.isBeginning ? r(a.firstSlideMessage) : r(a.prevSlideMessage)
			), e.pagination && i.is(Me(e.params.pagination.bulletClass)) && i[0].click();
	}
	function h() {
		return e.pagination && e.pagination.bullets && e.pagination.bullets.length;
	}
	function f() {
		return h() && e.params.pagination.clickable;
	}
	const g = (e, t, s) => {
			n(e), "BUTTON" !== e[0].tagName && (o(e, "button"), e.on("keydown", m)), p(e, s), (function(e, t) {
				e.attr("aria-controls", t);
			})(e, t);
		},
		v = () => {
			e.a11y.clicked = !0;
		},
		w = () => {
			requestAnimationFrame(() => {
				requestAnimationFrame(() => {
					e.destroyed || (e.a11y.clicked = !1);
				});
			});
		},
		b = t => {
			if (e.a11y.clicked) return;
			const s = t.target.closest(`.${e.params.slideClass}`);
			if (!s || !e.slides.includes(s)) return;
			const a = e.slides.indexOf(s) === e.activeIndex,
				i = e.params.watchSlidesProgress && e.visibleSlides && e.visibleSlides.includes(s);
			a ||
				i ||
				(t.sourceCapabilities && t.sourceCapabilities.firesTouchEvents) ||
				(e.isHorizontal() ? (e.el.scrollLeft = 0) : (e.el.scrollTop = 0), e.slideTo(e.slides.indexOf(s), 0));
		},
		x = () => {
			const t = e.params.a11y;
			t.itemRoleDescriptionMessage && d(s(e.slides), t.itemRoleDescriptionMessage), t.slideRole &&
				o(s(e.slides), t.slideRole);
			const a = e.params.loop
				? e.slides.filter(t => !t.classList.contains(e.params.slideDuplicateClass)).length
				: e.slides.length;
			t.slideLabelMessage &&
				e.slides.each((i, r) => {
					const n = s(i),
						l = e.params.loop ? parseInt(n.attr("data-swiper-slide-index"), 10) : r;
					p(n, t.slideLabelMessage.replace(/\{\{index\}\}/, l + 1).replace(/\{\{slidesLength\}\}/, a));
				});
		},
		E = () => {
			const t = e.params.a11y;
			e.$el.append(i);
			const s = e.$el;
			t.containerRoleDescriptionMessage && d(s, t.containerRoleDescriptionMessage), t.containerMessage &&
				p(s, t.containerMessage);
			const a = e.$wrapperEl,
				r =
					t.id ||
					a.attr("id") ||
					`swiper-wrapper-${(function(e = 16) {
						return "x".repeat(e).replace(/x/g, () => Math.round(16 * Math.random()).toString(16));
					})(16)}`,
				n = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
			var l;
			let o, c;
			(l = r), a.attr("id", l), (function(e, t) {
				e.attr("aria-live", t);
			})(a, n), x(), e.navigation && e.navigation.$nextEl && (o = e.navigation.$nextEl), e.navigation &&
				e.navigation.$prevEl &&
				(c = e.navigation.$prevEl), o && o.length && g(o, r, t.nextSlideMessage), c &&
				c.length &&
				g(c, r, t.prevSlideMessage), f() &&
				e.pagination.$el.on("keydown", Me(e.params.pagination.bulletClass), m), e.$el.on(
				"focus",
				b,
				!0
			), e.$el.on("pointerdown", v, !0), e.$el.on("pointerup", w, !0);
		};
	a("beforeInit", () => {
		i = s(`<span class="${e.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`);
	}), a("afterInit", () => {
		e.params.a11y.enabled && E();
	}), a("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
		e.params.a11y.enabled && x();
	}), a("fromEdge toEdge afterInit lock unlock", () => {
		e.params.a11y.enabled &&
			(function() {
				if (e.params.loop || e.params.rewind || !e.navigation) return;
				const { $nextEl: t, $prevEl: s } = e.navigation;
				s && s.length > 0 && (e.isBeginning ? (c(s), l(s)) : (u(s), n(s))), t &&
					t.length > 0 &&
					(e.isEnd ? (c(t), l(t)) : (u(t), n(t)));
			})();
	}), a("paginationUpdate", () => {
		e.params.a11y.enabled &&
			(function() {
				const t = e.params.a11y;
				h() &&
					e.pagination.bullets.each(a => {
						const i = s(a);
						e.params.pagination.clickable &&
							(
								n(i),
								e.params.pagination.renderBullet ||
									(
										o(i, "button"),
										p(i, t.paginationBulletMessage.replace(/\{\{index\}\}/, i.index() + 1))
									)
							), i.is(`.${e.params.pagination.bulletActiveClass}`)
							? i.attr("aria-current", "true")
							: i.removeAttr("aria-current");
					});
			})();
	}), a("destroy", () => {
		e.params.a11y.enabled &&
			(function() {
				let t, s;
				i && i.length > 0 && i.remove(), e.navigation &&
					e.navigation.$nextEl &&
					(t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (s = e.navigation.$prevEl), t &&
					t.off("keydown", m), s && s.off("keydown", m), f() &&
					e.pagination.$el.off("keydown", Me(e.params.pagination.bulletClass), m), e.$el.off(
					"focus",
					b,
					!0
				), e.$el.off("pointerdown", v, !0), e.$el.off("pointerup", w, !0);
			})();
	});
}
function Ae({ swiper: t, extendParams: s, on: a }) {
	s({ history: { enabled: !1, root: "", replaceState: !1, key: "slides", keepQuery: !1 } });
	let i = !1,
		r = {};
	const n = e =>
			e
				.toString()
				.replace(/\s+/g, "-")
				.replace(/[^\w-]+/g, "")
				.replace(/--+/g, "-")
				.replace(/^-+/, "")
				.replace(/-+$/, ""),
		l = t => {
			const s = e();
			let a;
			a = t ? new URL(t) : s.location;
			const i = a.pathname.slice(1).split("/").filter(e => "" !== e),
				r = i.length;
			return { key: i[r - 2], value: i[r - 1] };
		},
		o = (s, a) => {
			const r = e();
			if (!i || !t.params.history.enabled) return;
			let l;
			l = t.params.url ? new URL(t.params.url) : r.location;
			const o = t.slides.eq(a);
			let d = n(o.attr("data-history"));
			if (t.params.history.root.length > 0) {
				let e = t.params.history.root;
				"/" === e[e.length - 1] && (e = e.slice(0, e.length - 1)), (d = `${e}/${s}/${d}`);
			} else l.pathname.includes(s) || (d = `${s}/${d}`);
			t.params.history.keepQuery && (d += l.search);
			const p = r.history.state;
			(p && p.value === d) ||
				(t.params.history.replaceState
					? r.history.replaceState({ value: d }, null, d)
					: r.history.pushState({ value: d }, null, d));
		},
		d = (e, s, a) => {
			if (s)
				for (let i = 0, r = t.slides.length; i < r; i += 1) {
					const r = t.slides.eq(i);
					if (n(r.attr("data-history")) === s && !r.hasClass(t.params.slideDuplicateClass)) {
						const s = r.index();
						t.slideTo(s, e, a);
					}
				}
			else t.slideTo(0, e, a);
		},
		p = () => {
			(r = l(t.params.url)), d(t.params.speed, r.value, !1);
		};
	a("init", () => {
		t.params.history.enabled &&
			(() => {
				const s = e();
				if (t.params.history) {
					if (!s.history || !s.history.pushState)
						return (t.params.history.enabled = !1), void (t.params.hashNavigation.enabled = !0);
					(i = !0), (r = l(t.params.url)), (r.key || r.value) &&
						(
							d(0, r.value, t.params.runCallbacksOnInit),
							t.params.history.replaceState || s.addEventListener("popstate", p)
						);
				}
			})();
	}), a("destroy", () => {
		t.params.history.enabled &&
			(() => {
				const s = e();
				t.params.history.replaceState || s.removeEventListener("popstate", p);
			})();
	}), a("transitionEnd _freeModeNoMomentumRelease", () => {
		i && o(t.params.history.key, t.activeIndex);
	}), a("slideChange", () => {
		i && t.params.cssMode && o(t.params.history.key, t.activeIndex);
	});
}
function Ge({ swiper: a, extendParams: i, emit: r, on: n }) {
	let l = !1;
	const o = t(),
		d = e();
	i({ hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } });
	const p = () => {
			r("hashChange");
			const e = o.location.hash.replace("#", "");
			if (e !== a.slides.eq(a.activeIndex).attr("data-hash")) {
				const t = a.$wrapperEl.children(`.${a.params.slideClass}[data-hash="${e}"]`).index();
				if (void 0 === t) return;
				a.slideTo(t);
			}
		},
		c = () => {
			if (l && a.params.hashNavigation.enabled)
				if (a.params.hashNavigation.replaceState && d.history && d.history.replaceState)
					d.history.replaceState(null, null, `#${a.slides.eq(a.activeIndex).attr("data-hash")}` || ""), r(
						"hashSet"
					);
				else {
					const e = a.slides.eq(a.activeIndex),
						t = e.attr("data-hash") || e.attr("data-history");
					(o.location.hash = t || ""), r("hashSet");
				}
		};
	n("init", () => {
		a.params.hashNavigation.enabled &&
			(() => {
				if (!a.params.hashNavigation.enabled || (a.params.history && a.params.history.enabled)) return;
				l = !0;
				const e = o.location.hash.replace("#", "");
				if (e) {
					const t = 0;
					for (let s = 0, i = a.slides.length; s < i; s += 1) {
						const i = a.slides.eq(s);
						if (
							(i.attr("data-hash") || i.attr("data-history")) === e &&
							!i.hasClass(a.params.slideDuplicateClass)
						) {
							const e = i.index();
							a.slideTo(e, t, a.params.runCallbacksOnInit, !0);
						}
					}
				}
				a.params.hashNavigation.watchState && s(d).on("hashchange", p);
			})();
	}), n("destroy", () => {
		a.params.hashNavigation.enabled && a.params.hashNavigation.watchState && s(d).off("hashchange", p);
	}), n("transitionEnd _freeModeNoMomentumRelease", () => {
		l && c();
	}), n("slideChange", () => {
		l && a.params.cssMode && c();
	});
}
function Be({ swiper: e, extendParams: s, on: a, emit: i }) {
	let r;
	function n() {
		if (!e.size) return (e.autoplay.running = !1), void (e.autoplay.paused = !1);
		const t = e.slides.eq(e.activeIndex);
		let s = e.params.autoplay.delay;
		t.attr("data-swiper-autoplay") && (s = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(
			r
		), (r = Y(() => {
			let t;
			e.params.autoplay.reverseDirection
				? e.params.loop
					? (e.loopFix(), (t = e.slidePrev(e.params.speed, !0, !0)), i("autoplay"))
					: e.isBeginning
						? e.params.autoplay.stopOnLastSlide
							? o()
							: ((t = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0)), i("autoplay"))
						: ((t = e.slidePrev(e.params.speed, !0, !0)), i("autoplay"))
				: e.params.loop
					? (e.loopFix(), (t = e.slideNext(e.params.speed, !0, !0)), i("autoplay"))
					: e.isEnd
						? e.params.autoplay.stopOnLastSlide
							? o()
							: ((t = e.slideTo(0, e.params.speed, !0, !0)), i("autoplay"))
						: ((t = e.slideNext(e.params.speed, !0, !0)), i("autoplay")), ((e.params.cssMode &&
				e.autoplay.running) ||
				!1 === t) &&
				n();
		}, s));
	}
	function l() {
		return void 0 === r && (!e.autoplay.running && ((e.autoplay.running = !0), i("autoplayStart"), n(), !0));
	}
	function o() {
		return (
			!!e.autoplay.running &&
			(void 0 !== r && (r && (clearTimeout(r), (r = void 0)), (e.autoplay.running = !1), i("autoplayStop"), !0))
		);
	}
	function d(t) {
		e.autoplay.running &&
			(e.autoplay.paused ||
				(
					r && clearTimeout(r),
					(e.autoplay.paused = !0),
					0 !== t && e.params.autoplay.waitForTransition
						? ["transitionend", "webkitTransitionEnd"].forEach(t => {
								e.$wrapperEl[0].addEventListener(t, c);
							})
						: ((e.autoplay.paused = !1), n())
				));
	}
	function p() {
		const s = t();
		"hidden" === s.visibilityState && e.autoplay.running && d(), "visible" === s.visibilityState &&
			e.autoplay.paused &&
			(n(), (e.autoplay.paused = !1));
	}
	function c(t) {
		e &&
			!e.destroyed &&
			e.$wrapperEl &&
			t.target === e.$wrapperEl[0] &&
			(
				["transitionend", "webkitTransitionEnd"].forEach(t => {
					e.$wrapperEl[0].removeEventListener(t, c);
				}),
				(e.autoplay.paused = !1),
				e.autoplay.running ? n() : o()
			);
	}
	function u() {
		e.params.autoplay.disableOnInteraction ? o() : (i("autoplayPause"), d()), [
			"transitionend",
			"webkitTransitionEnd"
		].forEach(t => {
			e.$wrapperEl[0].removeEventListener(t, c);
		});
	}
	function m() {
		e.params.autoplay.disableOnInteraction || ((e.autoplay.paused = !1), i("autoplayResume"), n());
	}
	(e.autoplay = { running: !1, paused: !1 }), s({
		autoplay: {
			enabled: !1,
			delay: 3e3,
			waitForTransition: !0,
			disableOnInteraction: !0,
			stopOnLastSlide: !1,
			reverseDirection: !1,
			pauseOnMouseEnter: !1
		}
	}), a("init", () => {
		if (e.params.autoplay.enabled) {
			l();
			t().addEventListener("visibilitychange", p), e.params.autoplay.pauseOnMouseEnter &&
				(e.$el.on("mouseenter", u), e.$el.on("mouseleave", m));
		}
	}), a("beforeTransitionStart", (t, s, a) => {
		e.autoplay.running && (a || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(s) : o());
	}), a("sliderFirstMove", () => {
		e.autoplay.running && (e.params.autoplay.disableOnInteraction ? o() : d());
	}), a("touchEnd", () => {
		e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && n();
	}), a("destroy", () => {
		e.$el.off("mouseenter", u), e.$el.off("mouseleave", m), e.autoplay.running && o();
		t().removeEventListener("visibilitychange", p);
	}), Object.assign(e.autoplay, { pause: d, run: n, start: l, stop: o });
}
function He({ swiper: e, extendParams: t, on: a }) {
	t({
		thumbs: {
			swiper: null,
			multipleActiveThumbs: !0,
			autoScrollOffset: 0,
			slideThumbActiveClass: "swiper-slide-thumb-active",
			thumbsContainerClass: "swiper-thumbs"
		}
	});
	let i = !1,
		r = !1;
	function n() {
		const t = e.thumbs.swiper;
		if (!t || t.destroyed) return;
		const a = t.clickedIndex,
			i = t.clickedSlide;
		if (i && s(i).hasClass(e.params.thumbs.slideThumbActiveClass)) return;
		if (null == a) return;
		let r;
		if (
			((r = t.params.loop ? parseInt(s(t.clickedSlide).attr("data-swiper-slide-index"), 10) : a), e.params.loop)
		) {
			let t = e.activeIndex;
			e.slides.eq(t).hasClass(e.params.slideDuplicateClass) &&
				(e.loopFix(), (e._clientLeft = e.$wrapperEl[0].clientLeft), (t = e.activeIndex));
			const s = e.slides.eq(t).prevAll(`[data-swiper-slide-index="${r}"]`).eq(0).index(),
				a = e.slides.eq(t).nextAll(`[data-swiper-slide-index="${r}"]`).eq(0).index();
			r = void 0 === s ? a : void 0 === a ? s : a - t < t - s ? a : s;
		}
		e.slideTo(r);
	}
	function l() {
		const { thumbs: t } = e.params;
		if (i) return !1;
		i = !0;
		const s = e.constructor;
		if (t.swiper instanceof s)
			(e.thumbs.swiper = t.swiper), Object.assign(e.thumbs.swiper.originalParams, {
				watchSlidesProgress: !0,
				slideToClickedSlide: !1
			}), Object.assign(e.thumbs.swiper.params, { watchSlidesProgress: !0, slideToClickedSlide: !1 });
		else if (W(t.swiper)) {
			const a = Object.assign({}, t.swiper);
			Object.assign(a, { watchSlidesProgress: !0, slideToClickedSlide: !1 }), (e.thumbs.swiper = new s(
				a
			)), (r = !0);
		}
		return e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", n), !0;
	}
	function o(t) {
		const s = e.thumbs.swiper;
		if (!s || s.destroyed) return;
		const a = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView;
		let i = 1;
		const r = e.params.thumbs.slideThumbActiveClass;
		if (
			(
				e.params.slidesPerView > 1 && !e.params.centeredSlides && (i = e.params.slidesPerView),
				e.params.thumbs.multipleActiveThumbs || (i = 1),
				(i = Math.floor(i)),
				s.slides.removeClass(r),
				s.params.loop || (s.params.virtual && s.params.virtual.enabled)
			)
		)
			for (let t = 0; t < i; t += 1)
				s.$wrapperEl.children(`[data-swiper-slide-index="${e.realIndex + t}"]`).addClass(r);
		else for (let t = 0; t < i; t += 1) s.slides.eq(e.realIndex + t).addClass(r);
		const n = e.params.thumbs.autoScrollOffset,
			l = n && !s.params.loop;
		if (e.realIndex !== s.realIndex || l) {
			let i,
				r,
				o = s.activeIndex;
			if (s.params.loop) {
				s.slides.eq(o).hasClass(s.params.slideDuplicateClass) &&
					(s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft), (o = s.activeIndex));
				const t = s.slides.eq(o).prevAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index(),
					a = s.slides.eq(o).nextAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index();
				(i =
					void 0 === t
						? a
						: void 0 === a
							? t
							: a - o == o - t ? (s.params.slidesPerGroup > 1 ? a : o) : a - o < o - t ? a : t), (r =
					e.activeIndex > e.previousIndex ? "next" : "prev");
			} else (i = e.realIndex), (r = i > e.previousIndex ? "next" : "prev");
			l && (i += "next" === r ? n : -1 * n), s.visibleSlidesIndexes &&
				s.visibleSlidesIndexes.indexOf(i) < 0 &&
				(
					s.params.centeredSlides
						? (i = i > o ? i - Math.floor(a / 2) + 1 : i + Math.floor(a / 2) - 1)
						: i > o && s.params.slidesPerGroup,
					s.slideTo(i, t ? 0 : void 0)
				);
		}
	}
	(e.thumbs = { swiper: null }), a("beforeInit", () => {
		const { thumbs: t } = e.params;
		t && t.swiper && (l(), o(!0));
	}), a("slideChange update resize observerUpdate", () => {
		o();
	}), a("setTransition", (t, s) => {
		const a = e.thumbs.swiper;
		a && !a.destroyed && a.setTransition(s);
	}), a("beforeDestroy", () => {
		const t = e.thumbs.swiper;
		t && !t.destroyed && r && t.destroy();
	}), Object.assign(e.thumbs, { init: l, update: o });
}
function Xe({ swiper: e, extendParams: t, emit: s, once: a }) {
	t({
		freeMode: {
			enabled: !1,
			momentum: !0,
			momentumRatio: 1,
			momentumBounce: !0,
			momentumBounceRatio: 1,
			momentumVelocityRatio: 1,
			sticky: !1,
			minimumVelocity: 0.02
		}
	}), Object.assign(e, {
		freeMode: {
			onTouchStart: function() {
				const t = e.getTranslate();
				e.setTranslate(t), e.setTransition(
					0
				), (e.touchEventsData.velocities.length = 0), e.freeMode.onTouchEnd({
					currentPos: e.rtl ? e.translate : -e.translate
				});
			},
			onTouchMove: function() {
				const { touchEventsData: t, touches: s } = e;
				0 === t.velocities.length &&
					t.velocities.push({
						position: s[e.isHorizontal() ? "startX" : "startY"],
						time: t.touchStartTime
					}), t.velocities.push({ position: s[e.isHorizontal() ? "currentX" : "currentY"], time: N() });
			},
			onTouchEnd: function({ currentPos: t }) {
				const { params: i, $wrapperEl: r, rtlTranslate: n, snapGrid: l, touchEventsData: o } = e,
					d = N() - o.touchStartTime;
				if (t < -e.minTranslate()) e.slideTo(e.activeIndex);
				else if (t > -e.maxTranslate())
					e.slides.length < l.length ? e.slideTo(l.length - 1) : e.slideTo(e.slides.length - 1);
				else {
					if (i.freeMode.momentum) {
						if (o.velocities.length > 1) {
							const t = o.velocities.pop(),
								s = o.velocities.pop(),
								a = t.position - s.position,
								r = t.time - s.time;
							(e.velocity = a / r), (e.velocity /= 2), Math.abs(e.velocity) <
								i.freeMode.minimumVelocity && (e.velocity = 0), (r > 150 || N() - t.time > 300) &&
								(e.velocity = 0);
						} else e.velocity = 0;
						(e.velocity *= i.freeMode.momentumVelocityRatio), (o.velocities.length = 0);
						let t = 1e3 * i.freeMode.momentumRatio;
						const d = e.velocity * t;
						let p = e.translate + d;
						n && (p = -p);
						let c,
							u = !1;
						const m = 20 * Math.abs(e.velocity) * i.freeMode.momentumBounceRatio;
						let h;
						if (p < e.maxTranslate())
							i.freeMode.momentumBounce
								? (
										p + e.maxTranslate() < -m && (p = e.maxTranslate() - m),
										(c = e.maxTranslate()),
										(u = !0),
										(o.allowMomentumBounce = !0)
									)
								: (p = e.maxTranslate()), i.loop && i.centeredSlides && (h = !0);
						else if (p > e.minTranslate())
							i.freeMode.momentumBounce
								? (
										p - e.minTranslate() > m && (p = e.minTranslate() + m),
										(c = e.minTranslate()),
										(u = !0),
										(o.allowMomentumBounce = !0)
									)
								: (p = e.minTranslate()), i.loop && i.centeredSlides && (h = !0);
						else if (i.freeMode.sticky) {
							let t;
							for (let e = 0; e < l.length; e += 1)
								if (l[e] > -p) {
									t = e;
									break;
								}
							(p =
								Math.abs(l[t] - p) < Math.abs(l[t - 1] - p) || "next" === e.swipeDirection
									? l[t]
									: l[t - 1]), (p = -p);
						}
						if (
							(
								h &&
									a("transitionEnd", () => {
										e.loopFix();
									}),
								0 !== e.velocity
							)
						) {
							if (
								(
									(t = n
										? Math.abs((-p - e.translate) / e.velocity)
										: Math.abs((p - e.translate) / e.velocity)),
									i.freeMode.sticky
								)
							) {
								const s = Math.abs((n ? -p : p) - e.translate),
									a = e.slidesSizesGrid[e.activeIndex];
								t = s < a ? i.speed : s < 2 * a ? 1.5 * i.speed : 2.5 * i.speed;
							}
						} else if (i.freeMode.sticky) return void e.slideToClosest();
						i.freeMode.momentumBounce && u
							? (
									e.updateProgress(c),
									e.setTransition(t),
									e.setTranslate(p),
									e.transitionStart(!0, e.swipeDirection),
									(e.animating = !0),
									r.transitionEnd(() => {
										e &&
											!e.destroyed &&
											o.allowMomentumBounce &&
											(
												s("momentumBounce"),
												e.setTransition(i.speed),
												setTimeout(() => {
													e.setTranslate(c), r.transitionEnd(() => {
														e && !e.destroyed && e.transitionEnd();
													});
												}, 0)
											);
									})
								)
							: e.velocity
								? (
										s("_freeModeNoMomentumRelease"),
										e.updateProgress(p),
										e.setTransition(t),
										e.setTranslate(p),
										e.transitionStart(!0, e.swipeDirection),
										e.animating ||
											(
												(e.animating = !0),
												r.transitionEnd(() => {
													e && !e.destroyed && e.transitionEnd();
												})
											)
									)
								: e.updateProgress(p), e.updateActiveIndex(), e.updateSlidesClasses();
					} else {
						if (i.freeMode.sticky) return void e.slideToClosest();
						i.freeMode && s("_freeModeNoMomentumRelease");
					}
					(!i.freeMode.momentum || d >= i.longSwipesMs) &&
						(e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses());
				}
			}
		}
	});
}
function Ye({ swiper: e, extendParams: t }) {
	let s, a, i;
	t({ grid: { rows: 1, fill: "column" } });
	e.grid = {
		initSlides: t => {
			const { slidesPerView: r } = e.params,
				{ rows: n, fill: l } = e.params.grid;
			(a = s / n), (i = Math.floor(t / n)), (s =
				Math.floor(t / n) === t / n ? t : Math.ceil(t / n) * n), "auto" !== r &&
				"row" === l &&
				(s = Math.max(s, r * n));
		},
		updateSlide: (t, r, n, l) => {
			const { slidesPerGroup: o, spaceBetween: d } = e.params,
				{ rows: p, fill: c } = e.params.grid;
			let u, m, h;
			if ("row" === c && o > 1) {
				const e = Math.floor(t / (o * p)),
					a = t - p * o * e,
					i = 0 === e ? o : Math.min(Math.ceil((n - e * p * o) / p), o);
				(h = Math.floor(a / i)), (m = a - h * i + e * o), (u = m + h * s / p), r.css({
					"-webkit-order": u,
					order: u
				});
			} else
				"column" === c
					? (
							(m = Math.floor(t / p)),
							(h = t - m * p),
							(m > i || (m === i && h === p - 1)) && ((h += 1), h >= p && ((h = 0), (m += 1)))
						)
					: ((h = Math.floor(t / a)), (m = t - h * a));
			r.css(l("margin-top"), 0 !== h ? d && `${d}px` : "");
		},
		updateWrapperSize: (t, a, i) => {
			const { spaceBetween: r, centeredSlides: n, roundLengths: l } = e.params,
				{ rows: o } = e.params.grid;
			if (
				(
					(e.virtualSize = (t + r) * s),
					(e.virtualSize = Math.ceil(e.virtualSize / o) - r),
					e.$wrapperEl.css({ [i("width")]: `${e.virtualSize + r}px` }),
					n
				)
			) {
				a.splice(0, a.length);
				const t = [];
				for (let s = 0; s < a.length; s += 1) {
					let i = a[s];
					l && (i = Math.floor(i)), a[s] < e.virtualSize + a[0] && t.push(i);
				}
				a.push(...t);
			}
		}
	};
}
function Ne(e) {
	const t = this,
		{ $wrapperEl: s, params: a } = t;
	if ((a.loop && t.loopDestroy(), "object" == typeof e && "length" in e))
		for (let t = 0; t < e.length; t += 1) e[t] && s.append(e[t]);
	else s.append(e);
	a.loop && t.loopCreate(), a.observer || t.update();
}
function Re(e) {
	const t = this,
		{ params: s, $wrapperEl: a, activeIndex: i } = t;
	s.loop && t.loopDestroy();
	let r = i + 1;
	if ("object" == typeof e && "length" in e) {
		for (let t = 0; t < e.length; t += 1) e[t] && a.prepend(e[t]);
		r = i + e.length;
	} else a.prepend(e);
	s.loop && t.loopCreate(), s.observer || t.update(), t.slideTo(r, 0, !1);
}
function We(e, t) {
	const s = this,
		{ $wrapperEl: a, params: i, activeIndex: r } = s;
	let n = r;
	i.loop && ((n -= s.loopedSlides), s.loopDestroy(), (s.slides = a.children(`.${i.slideClass}`)));
	const l = s.slides.length;
	if (e <= 0) return void s.prependSlide(t);
	if (e >= l) return void s.appendSlide(t);
	let o = n > e ? n + 1 : n;
	const d = [];
	for (let t = l - 1; t >= e; t -= 1) {
		const e = s.slides.eq(t);
		e.remove(), d.unshift(e);
	}
	if ("object" == typeof t && "length" in t) {
		for (let e = 0; e < t.length; e += 1) t[e] && a.append(t[e]);
		o = n > e ? n + t.length : n;
	} else a.append(t);
	for (let e = 0; e < d.length; e += 1) a.append(d[e]);
	i.loop && s.loopCreate(), i.observer || s.update(), i.loop
		? s.slideTo(o + s.loopedSlides, 0, !1)
		: s.slideTo(o, 0, !1);
}
function qe(e) {
	const t = this,
		{ params: s, $wrapperEl: a, activeIndex: i } = t;
	let r = i;
	s.loop && ((r -= t.loopedSlides), t.loopDestroy(), (t.slides = a.children(`.${s.slideClass}`)));
	let n,
		l = r;
	if ("object" == typeof e && "length" in e) {
		for (let s = 0; s < e.length; s += 1) (n = e[s]), t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1);
		l = Math.max(l, 0);
	} else (n = e), t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1), (l = Math.max(l, 0));
	s.loop && t.loopCreate(), s.observer || t.update(), s.loop
		? t.slideTo(l + t.loopedSlides, 0, !1)
		: t.slideTo(l, 0, !1);
}
function je() {
	const e = this,
		t = [];
	for (let s = 0; s < e.slides.length; s += 1) t.push(s);
	e.removeSlide(t);
}
function Ve({ swiper: e }) {
	Object.assign(e, {
		appendSlide: Ne.bind(e),
		prependSlide: Re.bind(e),
		addSlide: We.bind(e),
		removeSlide: qe.bind(e),
		removeAllSlides: je.bind(e)
	});
}
function _e(e) {
	const {
		effect: t,
		swiper: s,
		on: a,
		setTranslate: i,
		setTransition: r,
		overwriteParams: n,
		perspective: l,
		recreateShadows: o,
		getEffectParams: d
	} = e;
	let p;
	a("beforeInit", () => {
		if (s.params.effect !== t) return;
		s.classNames.push(`${s.params.containerModifierClass}${t}`), l &&
			l() &&
			s.classNames.push(`${s.params.containerModifierClass}3d`);
		const e = n ? n() : {};
		Object.assign(s.params, e), Object.assign(s.originalParams, e);
	}), a("setTranslate", () => {
		s.params.effect === t && i();
	}), a("setTransition", (e, a) => {
		s.params.effect === t && r(a);
	}), a("transitionEnd", () => {
		if (s.params.effect === t && o) {
			if (!d || !d().slideShadows) return;
			s.slides.each(e => {
				s
					.$(e)
					.find(
						".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
					)
					.remove();
			}), o();
		}
	}), a("virtualUpdate", () => {
		s.params.effect === t &&
			(
				s.slides.length || (p = !0),
				requestAnimationFrame(() => {
					p && s.slides && s.slides.length && (i(), (p = !1));
				})
			);
	});
}
function Fe(e, t) {
	return e.transformEl
		? t.find(e.transformEl).css({ "backface-visibility": "hidden", "-webkit-backface-visibility": "hidden" })
		: t;
}
function Ue({ swiper: e, duration: t, transformEl: s, allSlides: a }) {
	const { slides: i, activeIndex: r, $wrapperEl: n } = e;
	if (e.params.virtualTranslate && 0 !== t) {
		let t,
			l = !1;
		(t = a ? (s ? i.find(s) : i) : s ? i.eq(r).find(s) : i.eq(r)), t.transitionEnd(() => {
			if (l) return;
			if (!e || e.destroyed) return;
			(l = !0), (e.animating = !1);
			const t = ["webkitTransitionEnd", "transitionend"];
			for (let e = 0; e < t.length; e += 1) n.trigger(t[e]);
		});
	}
}
function Ke({ swiper: e, extendParams: t, on: s }) {
	t({ fadeEffect: { crossFade: !1, transformEl: null } });
	_e({
		effect: "fade",
		swiper: e,
		on: s,
		setTranslate: () => {
			const { slides: t } = e,
				s = e.params.fadeEffect;
			for (let a = 0; a < t.length; a += 1) {
				const t = e.slides.eq(a);
				let i = -t[0].swiperSlideOffset;
				e.params.virtualTranslate || (i -= e.translate);
				let r = 0;
				e.isHorizontal() || ((r = i), (i = 0));
				const n = e.params.fadeEffect.crossFade
					? Math.max(1 - Math.abs(t[0].progress), 0)
					: 1 + Math.min(Math.max(t[0].progress, -1), 0);
				Fe(s, t).css({ opacity: n }).transform(`translate3d(${i}px, ${r}px, 0px)`);
			}
		},
		setTransition: t => {
			const { transformEl: s } = e.params.fadeEffect;
			(s ? e.slides.find(s) : e.slides).transition(t), Ue({
				swiper: e,
				duration: t,
				transformEl: s,
				allSlides: !0
			});
		},
		overwriteParams: () => ({
			slidesPerView: 1,
			slidesPerGroup: 1,
			watchSlidesProgress: !0,
			spaceBetween: 0,
			virtualTranslate: !e.params.cssMode
		})
	});
}
function Ze({ swiper: e, extendParams: t, on: a }) {
	t({ cubeEffect: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: 0.94 } });
	const i = (e, t, a) => {
		let i = a ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
			r = a ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
		0 === i.length && ((i = s(`<div class="swiper-slide-shadow-${a ? "left" : "top"}"></div>`)), e.append(i)), 0 ===
			r.length &&
			((r = s(`<div class="swiper-slide-shadow-${a ? "right" : "bottom"}"></div>`)), e.append(r)), i.length &&
			(i[0].style.opacity = Math.max(-t, 0)), r.length && (r[0].style.opacity = Math.max(t, 0));
	};
	_e({
		effect: "cube",
		swiper: e,
		on: a,
		setTranslate: () => {
			const { $el: t, $wrapperEl: a, slides: r, width: n, height: l, rtlTranslate: o, size: d, browser: p } = e,
				c = e.params.cubeEffect,
				u = e.isHorizontal(),
				m = e.virtual && e.params.virtual.enabled;
			let h,
				f = 0;
			c.shadow &&
				(u
					? (
							(h = a.find(".swiper-cube-shadow")),
							0 === h.length && ((h = s('<div class="swiper-cube-shadow"></div>')), a.append(h)),
							h.css({ height: `${n}px` })
						)
					: (
							(h = t.find(".swiper-cube-shadow")),
							0 === h.length && ((h = s('<div class="swiper-cube-shadow"></div>')), t.append(h))
						));
			for (let e = 0; e < r.length; e += 1) {
				const t = r.eq(e);
				let s = e;
				m && (s = parseInt(t.attr("data-swiper-slide-index"), 10));
				let a = 90 * s,
					n = Math.floor(a / 360);
				o && ((a = -a), (n = Math.floor(-a / 360)));
				const l = Math.max(Math.min(t[0].progress, 1), -1);
				let p = 0,
					h = 0,
					g = 0;
				s % 4 == 0
					? ((p = 4 * -n * d), (g = 0))
					: (s - 1) % 4 == 0
						? ((p = 0), (g = 4 * -n * d))
						: (s - 2) % 4 == 0
							? ((p = d + 4 * n * d), (g = d))
							: (s - 3) % 4 == 0 && ((p = -d), (g = 3 * d + 4 * d * n)), o && (p = -p), u ||
					((h = p), (p = 0));
				const v = `rotateX(${u ? 0 : -a}deg) rotateY(${u ? a : 0}deg) translate3d(${p}px, ${h}px, ${g}px)`;
				l <= 1 && l > -1 && ((f = 90 * s + 90 * l), o && (f = 90 * -s - 90 * l)), t.transform(
					v
				), c.slideShadows && i(t, l, u);
			}
			if (
				(
					a.css({
						"-webkit-transform-origin": `50% 50% -${d / 2}px`,
						"transform-origin": `50% 50% -${d / 2}px`
					}),
					c.shadow
				)
			)
				if (u)
					h.transform(
						`translate3d(0px, ${n / 2 + c.shadowOffset}px, ${-n /
							2}px) rotateX(90deg) rotateZ(0deg) scale(${c.shadowScale})`
					);
				else {
					const e = Math.abs(f) - 90 * Math.floor(Math.abs(f) / 90),
						t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2),
						s = c.shadowScale,
						a = c.shadowScale / t,
						i = c.shadowOffset;
					h.transform(
						`scale3d(${s}, 1, ${a}) translate3d(0px, ${l / 2 + i}px, ${-l / 2 / a}px) rotateX(-90deg)`
					);
				}
			const g = p.isSafari || p.isWebView ? -d / 2 : 0;
			a.transform(
				`translate3d(0px,0,${g}px) rotateX(${e.isHorizontal() ? 0 : f}deg) rotateY(${e.isHorizontal()
					? -f
					: 0}deg)`
			), a[0].style.setProperty("--swiper-cube-translate-z", `${g}px`);
		},
		setTransition: t => {
			const { $el: s, slides: a } = e;
			a
				.transition(t)
				.find(
					".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
				)
				.transition(t), e.params.cubeEffect.shadow &&
				!e.isHorizontal() &&
				s.find(".swiper-cube-shadow").transition(t);
		},
		recreateShadows: () => {
			const t = e.isHorizontal();
			e.slides.each(e => {
				const a = Math.max(Math.min(e.progress, 1), -1);
				i(s(e), a, t);
			});
		},
		getEffectParams: () => e.params.cubeEffect,
		perspective: () => !0,
		overwriteParams: () => ({
			slidesPerView: 1,
			slidesPerGroup: 1,
			watchSlidesProgress: !0,
			resistanceRatio: 0,
			spaceBetween: 0,
			centeredSlides: !1,
			virtualTranslate: !0
		})
	});
}
function Qe(e, t, a) {
	const i = "swiper-slide-shadow" + (a ? `-${a}` : ""),
		r = e.transformEl ? t.find(e.transformEl) : t;
	let n = r.children(`.${i}`);
	return n.length || ((n = s(`<div class="swiper-slide-shadow${a ? `-${a}` : ""}"></div>`)), r.append(n)), n;
}
function Je({ swiper: e, extendParams: t, on: a }) {
	t({ flipEffect: { slideShadows: !0, limitRotation: !0, transformEl: null } });
	const i = (t, s, a) => {
		let i = e.isHorizontal() ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
			r = e.isHorizontal() ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
		0 === i.length && (i = Qe(a, t, e.isHorizontal() ? "left" : "top")), 0 === r.length &&
			(r = Qe(a, t, e.isHorizontal() ? "right" : "bottom")), i.length &&
			(i[0].style.opacity = Math.max(-s, 0)), r.length && (r[0].style.opacity = Math.max(s, 0));
	};
	_e({
		effect: "flip",
		swiper: e,
		on: a,
		setTranslate: () => {
			const { slides: t, rtlTranslate: s } = e,
				a = e.params.flipEffect;
			for (let r = 0; r < t.length; r += 1) {
				const n = t.eq(r);
				let l = n[0].progress;
				e.params.flipEffect.limitRotation && (l = Math.max(Math.min(n[0].progress, 1), -1));
				const o = n[0].swiperSlideOffset;
				let d = -180 * l,
					p = 0,
					c = e.params.cssMode ? -o - e.translate : -o,
					u = 0;
				e.isHorizontal() ? s && (d = -d) : ((u = c), (c = 0), (p = -d), (d = 0)), (n[0].style.zIndex =
					-Math.abs(Math.round(l)) + t.length), a.slideShadows && i(n, l, a);
				const m = `translate3d(${c}px, ${u}px, 0px) rotateX(${p}deg) rotateY(${d}deg)`;
				Fe(a, n).transform(m);
			}
		},
		setTransition: t => {
			const { transformEl: s } = e.params.flipEffect;
			(s ? e.slides.find(s) : e.slides)
				.transition(t)
				.find(
					".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
				)
				.transition(t), Ue({ swiper: e, duration: t, transformEl: s });
		},
		recreateShadows: () => {
			const t = e.params.flipEffect;
			e.slides.each(a => {
				const r = s(a);
				let n = r[0].progress;
				e.params.flipEffect.limitRotation && (n = Math.max(Math.min(a.progress, 1), -1)), i(r, n, t);
			});
		},
		getEffectParams: () => e.params.flipEffect,
		perspective: () => !0,
		overwriteParams: () => ({
			slidesPerView: 1,
			slidesPerGroup: 1,
			watchSlidesProgress: !0,
			spaceBetween: 0,
			virtualTranslate: !e.params.cssMode
		})
	});
}
function et({ swiper: e, extendParams: t, on: s }) {
	t({
		coverflowEffect: {
			rotate: 50,
			stretch: 0,
			depth: 100,
			scale: 1,
			modifier: 1,
			slideShadows: !0,
			transformEl: null
		}
	});
	_e({
		effect: "coverflow",
		swiper: e,
		on: s,
		setTranslate: () => {
			const { width: t, height: s, slides: a, slidesSizesGrid: i } = e,
				r = e.params.coverflowEffect,
				n = e.isHorizontal(),
				l = e.translate,
				o = n ? t / 2 - l : s / 2 - l,
				d = n ? r.rotate : -r.rotate,
				p = r.depth;
			for (let e = 0, t = a.length; e < t; e += 1) {
				const t = a.eq(e),
					s = i[e],
					l = (o - t[0].swiperSlideOffset - s / 2) / s,
					c = "function" == typeof r.modifier ? r.modifier(l) : l * r.modifier;
				let u = n ? d * c : 0,
					m = n ? 0 : d * c,
					h = -p * Math.abs(c),
					f = r.stretch;
				"string" == typeof f && -1 !== f.indexOf("%") && (f = parseFloat(r.stretch) / 100 * s);
				let g = n ? 0 : f * c,
					v = n ? f * c : 0,
					w = 1 - (1 - r.scale) * Math.abs(c);
				Math.abs(v) < 0.001 && (v = 0), Math.abs(g) < 0.001 && (g = 0), Math.abs(h) < 0.001 &&
					(h = 0), Math.abs(u) < 0.001 && (u = 0), Math.abs(m) < 0.001 && (m = 0), Math.abs(w) < 0.001 &&
					(w = 0);
				const b = `translate3d(${v}px,${g}px,${h}px)  rotateX(${m}deg) rotateY(${u}deg) scale(${w})`;
				if ((Fe(r, t).transform(b), (t[0].style.zIndex = 1 - Math.abs(Math.round(c))), r.slideShadows)) {
					let e = n ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
						s = n ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
					0 === e.length && (e = Qe(r, t, n ? "left" : "top")), 0 === s.length &&
						(s = Qe(r, t, n ? "right" : "bottom")), e.length &&
						(e[0].style.opacity = c > 0 ? c : 0), s.length && (s[0].style.opacity = -c > 0 ? -c : 0);
				}
			}
		},
		setTransition: t => {
			const { transformEl: s } = e.params.coverflowEffect;
			(s ? e.slides.find(s) : e.slides)
				.transition(t)
				.find(
					".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
				)
				.transition(t);
		},
		perspective: () => !0,
		overwriteParams: () => ({ watchSlidesProgress: !0 })
	});
}
function tt({ swiper: e, extendParams: t, on: s }) {
	t({
		creativeEffect: {
			transformEl: null,
			limitProgress: 1,
			shadowPerProgress: !1,
			progressMultiplier: 1,
			perspective: !0,
			prev: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 },
			next: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 }
		}
	});
	const a = e => ("string" == typeof e ? e : `${e}px`);
	_e({
		effect: "creative",
		swiper: e,
		on: s,
		setTranslate: () => {
			const { slides: t, $wrapperEl: s, slidesSizesGrid: i } = e,
				r = e.params.creativeEffect,
				{ progressMultiplier: n } = r,
				l = e.params.centeredSlides;
			if (l) {
				const t = i[0] / 2 - e.params.slidesOffsetBefore || 0;
				s.transform(`translateX(calc(50% - ${t}px))`);
			}
			for (let s = 0; s < t.length; s += 1) {
				const i = t.eq(s),
					o = i[0].progress,
					d = Math.min(Math.max(i[0].progress, -r.limitProgress), r.limitProgress);
				let p = d;
				l || (p = Math.min(Math.max(i[0].originalProgress, -r.limitProgress), r.limitProgress));
				const c = i[0].swiperSlideOffset,
					u = [e.params.cssMode ? -c - e.translate : -c, 0, 0],
					m = [0, 0, 0];
				let h = !1;
				e.isHorizontal() || ((u[1] = u[0]), (u[0] = 0));
				let f = { translate: [0, 0, 0], rotate: [0, 0, 0], scale: 1, opacity: 1 };
				d < 0 ? ((f = r.next), (h = !0)) : d > 0 && ((f = r.prev), (h = !0)), u.forEach((e, t) => {
					u[t] = `calc(${e}px + (${a(f.translate[t])} * ${Math.abs(d * n)}))`;
				}), m.forEach((e, t) => {
					m[t] = f.rotate[t] * Math.abs(d * n);
				}), (i[0].style.zIndex = -Math.abs(Math.round(o)) + t.length);
				const g = u.join(", "),
					v = `rotateX(${m[0]}deg) rotateY(${m[1]}deg) rotateZ(${m[2]}deg)`,
					w = p < 0 ? `scale(${1 + (1 - f.scale) * p * n})` : `scale(${1 - (1 - f.scale) * p * n})`,
					b = p < 0 ? 1 + (1 - f.opacity) * p * n : 1 - (1 - f.opacity) * p * n,
					x = `translate3d(${g}) ${v} ${w}`;
				if ((h && f.shadow) || !h) {
					let e = i.children(".swiper-slide-shadow");
					if ((0 === e.length && f.shadow && (e = Qe(r, i)), e.length)) {
						const t = r.shadowPerProgress ? d * (1 / r.limitProgress) : d;
						e[0].style.opacity = Math.min(Math.max(Math.abs(t), 0), 1);
					}
				}
				const E = Fe(r, i);
				E.transform(x).css({ opacity: b }), f.origin && E.css("transform-origin", f.origin);
			}
		},
		setTransition: t => {
			const { transformEl: s } = e.params.creativeEffect;
			(s ? e.slides.find(s) : e.slides).transition(t).find(".swiper-slide-shadow").transition(t), Ue({
				swiper: e,
				duration: t,
				transformEl: s,
				allSlides: !0
			});
		},
		perspective: () => e.params.creativeEffect.perspective,
		overwriteParams: () => ({ watchSlidesProgress: !0, virtualTranslate: !e.params.cssMode })
	});
}
function st({ swiper: e, extendParams: t, on: s }) {
	t({ cardsEffect: { slideShadows: !0, transformEl: null, rotate: !0, perSlideRotate: 2, perSlideOffset: 8 } });
	_e({
		effect: "cards",
		swiper: e,
		on: s,
		setTranslate: () => {
			const { slides: t, activeIndex: s } = e,
				a = e.params.cardsEffect,
				{ startTranslate: i, isTouched: r } = e.touchEventsData,
				n = e.translate;
			for (let l = 0; l < t.length; l += 1) {
				const o = t.eq(l),
					d = o[0].progress,
					p = Math.min(Math.max(d, -4), 4);
				let c = o[0].swiperSlideOffset;
				e.params.centeredSlides &&
					!e.params.cssMode &&
					e.$wrapperEl.transform(`translateX(${e.minTranslate()}px)`), e.params.centeredSlides &&
					e.params.cssMode &&
					(c -= t[0].swiperSlideOffset);
				let u = e.params.cssMode ? -c - e.translate : -c,
					m = 0;
				const h = -100 * Math.abs(p);
				let f = 1,
					g = -a.perSlideRotate * p,
					v = a.perSlideOffset - 0.75 * Math.abs(p);
				const w = e.virtual && e.params.virtual.enabled ? e.virtual.from + l : l,
					b = (w === s || w === s - 1) && p > 0 && p < 1 && (r || e.params.cssMode) && n < i,
					x = (w === s || w === s + 1) && p < 0 && p > -1 && (r || e.params.cssMode) && n > i;
				if (b || x) {
					const e = (1 - Math.abs((Math.abs(p) - 0.5) / 0.5)) ** 0.5;
					(g += -28 * p * e), (f += -0.5 * e), (v += 96 * e), (m = -25 * e * Math.abs(p) + "%");
				}
				if (
					(
						(u =
							p < 0
								? `calc(${u}px + (${v * Math.abs(p)}%))`
								: p > 0 ? `calc(${u}px + (-${v * Math.abs(p)}%))` : `${u}px`),
						!e.isHorizontal()
					)
				) {
					const e = m;
					(m = u), (u = e);
				}
				const E = p < 0 ? "" + (1 + (1 - f) * p) : "" + (1 - (1 - f) * p),
					y = `\n        translate3d(${u}, ${m}, ${h}px)\n        rotateZ(${a.rotate
						? g
						: 0}deg)\n        scale(${E})\n      `;
				if (a.slideShadows) {
					let e = o.find(".swiper-slide-shadow");
					0 === e.length && (e = Qe(a, o)), e.length &&
						(e[0].style.opacity = Math.min(Math.max((Math.abs(p) - 0.5) / 0.5, 0), 1));
				}
				o[0].style.zIndex = -Math.abs(Math.round(d)) + t.length;
				Fe(a, o).transform(y);
			}
		},
		setTransition: t => {
			const { transformEl: s } = e.params.cardsEffect;
			(s ? e.slides.find(s) : e.slides).transition(t).find(".swiper-slide-shadow").transition(t), Ue({
				swiper: e,
				duration: t,
				transformEl: s
			});
		},
		perspective: () => !0,
		overwriteParams: () => ({ watchSlidesProgress: !0, virtualTranslate: !e.params.cssMode })
	});
}
Object.keys(be).forEach(e => {
	Object.keys(be[e]).forEach(t => {
		Ee.prototype[t] = be[e][t];
	});
}), Ee.use([
	function({ swiper: t, on: s, emit: a }) {
		const i = e();
		let r = null,
			n = null;
		const l = () => {
				t && !t.destroyed && t.initialized && (a("beforeResize"), a("resize"));
			},
			o = () => {
				t && !t.destroyed && t.initialized && a("orientationchange");
			};
		s("init", () => {
			t.params.resizeObserver && void 0 !== i.ResizeObserver
				? t &&
					!t.destroyed &&
					t.initialized &&
					(
						(r = new ResizeObserver(e => {
							n = i.requestAnimationFrame(() => {
								const { width: s, height: a } = t;
								let i = s,
									r = a;
								e.forEach(({ contentBoxSize: e, contentRect: s, target: a }) => {
									(a && a !== t.el) ||
										(
											(i = s ? s.width : (e[0] || e).inlineSize),
											(r = s ? s.height : (e[0] || e).blockSize)
										);
								}), (i === s && r === a) || l();
							});
						})),
						r.observe(t.el)
					)
				: (i.addEventListener("resize", l), i.addEventListener("orientationchange", o));
		}), s("destroy", () => {
			n && i.cancelAnimationFrame(n), r &&
				r.unobserve &&
				t.el &&
				(r.unobserve(t.el), (r = null)), i.removeEventListener("resize", l), i.removeEventListener(
				"orientationchange",
				o
			);
		});
	},
	function({ swiper: t, extendParams: s, on: a, emit: i }) {
		const r = [],
			n = e(),
			l = (e, t = {}) => {
				const s = new (n.MutationObserver || n.WebkitMutationObserver)(e => {
					if (1 === e.length) return void i("observerUpdate", e[0]);
					const t = function() {
						i("observerUpdate", e[0]);
					};
					n.requestAnimationFrame ? n.requestAnimationFrame(t) : n.setTimeout(t, 0);
				});
				s.observe(e, {
					attributes: void 0 === t.attributes || t.attributes,
					childList: void 0 === t.childList || t.childList,
					characterData: void 0 === t.characterData || t.characterData
				}), r.push(s);
			};
		s({ observer: !1, observeParents: !1, observeSlideChildren: !1 }), a("init", () => {
			if (t.params.observer) {
				if (t.params.observeParents) {
					const e = t.$el.parents();
					for (let t = 0; t < e.length; t += 1) l(e[t]);
				}
				l(t.$el[0], { childList: t.params.observeSlideChildren }), l(t.$wrapperEl[0], { attributes: !1 });
			}
		}), a("destroy", () => {
			r.forEach(e => {
				e.disconnect();
			}), r.splice(0, r.length);
		});
	}
]);
export {
	De as A11y,
	Be as Autoplay,
	Le as Controller,
	st as EffectCards,
	et as EffectCoverflow,
	tt as EffectCreative,
	Ze as EffectCube,
	Ke as EffectFade,
	Je as EffectFlip,
	Xe as FreeMode,
	Ye as Grid,
	Ge as HashNavigation,
	Ae as History,
	Ce as Keyboard,
	Oe as Lazy,
	Ve as Manipulation,
	$e as Mousewheel,
	Se as Navigation,
	Pe as Pagination,
	ze as Parallax,
	ke as Scrollbar,
	Ee as Swiper,
	He as Thumbs,
	ye as Virtual,
	Ie as Zoom,
	Ee as default
};
//# sourceMappingURL=/sm/fb1182d239ff8a12f2d1d5d94b62635c775ac0706fd93028184a3c9c26a07a43.map
