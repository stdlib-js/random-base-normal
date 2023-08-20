// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.0.14-esm/index.mjs";import{factory as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-improved-ziggurat@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import{isPrimitive as h}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import{isPrimitive as j}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nan@esm/index.mjs";function u(e,t){return!h(e)||f(e)?new TypeError(a("0op6v,NI",e)):j(t)?null:new TypeError(a("0op72,Go",t))}function g(e,t,s){return t+s*e()}function c(){var h,j,f,c,b,v,y;if(0===arguments.length)j=m();else if(1===arguments.length){if(!n(f=arguments[0]))throw new TypeError(a("0op2V,FD",f));if(i(f,"prng")){if(!r(f.prng))throw new TypeError(a("0op6u,JI","prng",f.prng));j=m({prng:f.prng})}else j=m(f)}else{if(v=u(y=arguments[0],h=arguments[1]))throw v;if(arguments.length>2){if(!n(f=arguments[2]))throw new TypeError(a("0op2V,FD",f));if(i(f,"prng")){if(!r(f.prng))throw new TypeError(a("0op6u,JI","prng",f.prng));j=m({prng:f.prng})}else j=m(f)}else j=m()}return b=void 0===y?P:J,c=j.PRNG,e(b,"NAME","normal"),f&&f.prng?(e(b,"seed",null),e(b,"seedLength",null),s(b,"state",o(null),d),e(b,"stateLength",null),e(b,"byteLength",null),e(b,"toJSON",o(null))):(t(b,"seed",x),t(b,"seedLength",w),s(b,"state",E,T),t(b,"stateLength",N),t(b,"byteLength",L),e(b,"toJSON",G)),e(b,"PRNG",c),b;function x(){return c.seed}function w(){return c.seedLength}function N(){return c.stateLength}function L(){return c.byteLength}function E(){return c.state}function T(e){c.state=e}function G(){var e={type:"PRNG"};return e.name=b.NAME,e.state=l(c.state),e.params=void 0===y?[]:[y,h],e}function J(){return g(j,y,h)}function P(e,t){return p(e)||p(t)||t<=0?NaN:g(j,e,t)}}var b=c();e(b,"factory",c);export{b as default,c as factory};
//# sourceMappingURL=index.mjs.map
