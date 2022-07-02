// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@esm/index.mjs";import{factory as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-improved-ziggurat@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";import{isPrimitive as h}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import{isPrimitive as u}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nan@esm/index.mjs";function f(e,t){return!h(e)||j(e)?new TypeError(a("invalid argument. First argument must be a number and not NaN. Value: `%s`.",e)):u(t)?null:new TypeError(a("0PJ7T",t))}function g(e,t,n){return t+n*e()}function c(){var h,u,j,c,b,v,y;if(0===arguments.length)u=m();else if(1===arguments.length){if(!s(j=arguments[0]))throw new TypeError(a("0PJ2h",j));if(i(j,"prng")){if(!r(j.prng))throw new TypeError(a("0PJ7M","prng",j.prng));u=m({prng:j.prng})}else u=m(j)}else{if(v=f(y=arguments[0],h=arguments[1]))throw v;if(arguments.length>2){if(!s(j=arguments[2]))throw new TypeError(a("0PJ2h",j));if(i(j,"prng")){if(!r(j.prng))throw new TypeError(a("0PJ7M","prng",j.prng));u=m({prng:j.prng})}else u=m(j)}else u=m()}return b=void 0===y?M:T,c=u.PRNG,e(b,"NAME","normal"),j&&j.prng?(e(b,"seed",null),e(b,"seedLength",null),n(b,"state",o(null),d),e(b,"stateLength",null),e(b,"byteLength",null),e(b,"toJSON",o(null))):(t(b,"seed",x),t(b,"seedLength",w),n(b,"state",P,E),t(b,"stateLength",N),t(b,"byteLength",L),e(b,"toJSON",J)),e(b,"PRNG",c),b;function x(){return c.seed}function w(){return c.seedLength}function N(){return c.stateLength}function L(){return c.byteLength}function P(){return c.state}function E(e){c.state=e}function J(){var e={type:"PRNG"};return e.name=b.NAME,e.state=p(c.state),e.params=void 0===y?[]:[y,h],e}function T(){return g(u,y,h)}function M(e,t){return l(e)||l(t)||t<=0?NaN:g(u,e,t)}}var b=c();e(b,"factory",c);export{b as default,c as factory};
//# sourceMappingURL=index.mjs.map
