// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.1.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.1.1-esm/index.mjs";import{factory as d}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-improved-ziggurat@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@v0.1.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";import{isPrimitive as u}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.1.1-esm/index.mjs";import{isPrimitive as g}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@v0.1.1-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nan@v0.1.1-esm/index.mjs";function j(e,t){return!u(e)||h(e)?new TypeError(p("invalid argument. First argument must be a number and not NaN. Value: `%s`.",e)):g(t)?null:new TypeError(p("invalid argument. Second argument must be a positive number. Value: `%s`.",t))}function f(e,t,n){return t+n*e()}function v(){var u,g,h,v,c,b,y;if(0===arguments.length)g=d();else if(1===arguments.length){if(!s(h=arguments[0]))throw new TypeError(p("invalid argument. Options argument must be an object. Value: `%s`.",h));if(i(h,"prng")){if(!r(h.prng))throw new TypeError(p("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",h.prng));g=d({prng:h.prng})}else g=d(h)}else{if(b=j(y=arguments[0],u=arguments[1]))throw b;if(arguments.length>2){if(!s(h=arguments[2]))throw new TypeError(p("invalid argument. Options argument must be an object. Value: `%s`.",h));if(i(h,"prng")){if(!r(h.prng))throw new TypeError(p("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",h.prng));g=d({prng:h.prng})}else g=d(h)}else g=d()}return c=void 0===y?V:P,v=g.PRNG,e(c,"NAME","normal"),h&&h.prng?(e(c,"seed",null),e(c,"seedLength",null),n(c,"state",o(null),m),e(c,"stateLength",null),e(c,"byteLength",null),e(c,"toJSON",o(null))):(t(c,"seed",x),t(c,"seedLength",w),n(c,"state",E,O),t(c,"stateLength",N),t(c,"byteLength",L),e(c,"toJSON",T)),e(c,"PRNG",v),c;function x(){return v.seed}function w(){return v.seedLength}function N(){return v.stateLength}function L(){return v.byteLength}function E(){return v.state}function O(e){v.state=e}function T(){var e={type:"PRNG"};return e.name=c.NAME,e.state=l(v.state),e.params=void 0===y?[]:[y,u],e}function P(){return f(g,y,u)}function V(e,t){return a(e)||a(t)||t<=0?NaN:f(g,e,t)}}var c=v();e(c,"factory",v);export{c as default,v as factory};
//# sourceMappingURL=index.mjs.map
