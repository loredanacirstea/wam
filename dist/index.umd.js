!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).wamp=e()}(this,(function(){"use strict";function t(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function e(t){if(t.__esModule)return t;var e=t.default;if("function"==typeof e){var r=function t(){return this instanceof t?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};r.prototype=e.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach((function(e){var n=Object.getOwnPropertyDescriptor(t,e);Object.defineProperty(r,e,n.get?n:{enumerable:!0,get:function(){return t[e]}})})),r}var r="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},n=[],o=[],i="undefined"!=typeof Uint8Array?Uint8Array:Array,s=!1;function u(){s=!0;for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",e=0;e<64;++e)n[e]=t[e],o[t.charCodeAt(e)]=e;o["-".charCodeAt(0)]=62,o["_".charCodeAt(0)]=63}function a(t,e,r){for(var o,i,s=[],u=e;u<r;u+=3)o=(t[u]<<16)+(t[u+1]<<8)+t[u+2],s.push(n[(i=o)>>18&63]+n[i>>12&63]+n[i>>6&63]+n[63&i]);return s.join("")}function f(t){var e;s||u();for(var r=t.length,o=r%3,i="",f=[],l=16383,c=0,h=r-o;c<h;c+=l)f.push(a(t,c,c+l>h?h:c+l));return 1===o?(e=t[r-1],i+=n[e>>2],i+=n[e<<4&63],i+="=="):2===o&&(e=(t[r-2]<<8)+t[r-1],i+=n[e>>10],i+=n[e>>4&63],i+=n[e<<2&63],i+="="),f.push(i),f.join("")}function l(t,e,r,n,o){var i,s,u=8*o-n-1,a=(1<<u)-1,f=a>>1,l=-7,c=r?o-1:0,h=r?-1:1,p=t[e+c];for(c+=h,i=p&(1<<-l)-1,p>>=-l,l+=u;l>0;i=256*i+t[e+c],c+=h,l-=8);for(s=i&(1<<-l)-1,i>>=-l,l+=n;l>0;s=256*s+t[e+c],c+=h,l-=8);if(0===i)i=1-f;else{if(i===a)return s?NaN:1/0*(p?-1:1);s+=Math.pow(2,n),i-=f}return(p?-1:1)*s*Math.pow(2,i-n)}function c(t,e,r,n,o,i){var s,u,a,f=8*i-o-1,l=(1<<f)-1,c=l>>1,h=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:i-1,g=n?1:-1,y=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(u=isNaN(e)?1:0,s=l):(s=Math.floor(Math.log(e)/Math.LN2),e*(a=Math.pow(2,-s))<1&&(s--,a*=2),(e+=s+c>=1?h/a:h*Math.pow(2,1-c))*a>=2&&(s++,a/=2),s+c>=l?(u=0,s=l):s+c>=1?(u=(e*a-1)*Math.pow(2,o),s+=c):(u=e*Math.pow(2,c-1)*Math.pow(2,o),s=0));o>=8;t[r+p]=255&u,p+=g,u/=256,o-=8);for(s=s<<o|u,f+=o;f>0;t[r+p]=255&s,p+=g,s/=256,f-=8);t[r+p-g]|=128*y}var h={}.toString,p=Array.isArray||function(t){return"[object Array]"==h.call(t)};function g(){return d.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function y(t,e){if(g()<e)throw new RangeError("Invalid typed array length");return d.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e)).__proto__=d.prototype:(null===t&&(t=new d(e)),t.length=e),t}function d(t,e,r){if(!(d.TYPED_ARRAY_SUPPORT||this instanceof d))return new d(t,e,r);if("number"==typeof t){if("string"==typeof e)throw new Error("If encoding is specified then the first argument must be a string");return v(this,t)}return w(this,t,e,r)}function w(t,e,r,n){if("number"==typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer?function(t,e,r,n){if(e.byteLength,r<0||e.byteLength<r)throw new RangeError("'offset' is out of bounds");if(e.byteLength<r+(n||0))throw new RangeError("'length' is out of bounds");e=void 0===r&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,r):new Uint8Array(e,r,n);d.TYPED_ARRAY_SUPPORT?(t=e).__proto__=d.prototype:t=b(t,e);return t}(t,e,r,n):"string"==typeof e?function(t,e,r){"string"==typeof r&&""!==r||(r="utf8");if(!d.isEncoding(r))throw new TypeError('"encoding" must be a valid string encoding');var n=0|_(e,r);t=y(t,n);var o=t.write(e,r);o!==n&&(t=t.slice(0,o));return t}(t,e,r):function(t,e){if(A(e)){var r=0|E(e.length);return 0===(t=y(t,r)).length||e.copy(t,0,0,r),t}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||(n=e.length)!=n?y(t,0):b(t,e);if("Buffer"===e.type&&p(e.data))return b(t,e.data)}var n;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,e)}function m(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function v(t,e){if(m(e),t=y(t,e<0?0:0|E(e)),!d.TYPED_ARRAY_SUPPORT)for(var r=0;r<e;++r)t[r]=0;return t}function b(t,e){var r=e.length<0?0:0|E(e.length);t=y(t,r);for(var n=0;n<r;n+=1)t[n]=255&e[n];return t}function E(t){if(t>=g())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+g().toString(16)+" bytes");return 0|t}function A(t){return!(null==t||!t._isBuffer)}function _(t,e){if(A(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var r=t.length;if(0===r)return 0;for(var n=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":case void 0:return W(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return K(t).length;default:if(n)return W(t).length;e=(""+e).toLowerCase(),n=!0}}function R(t,e,r){var n=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return L(this,e,r);case"utf8":case"utf-8":return j(this,e,r);case"ascii":return D(this,e,r);case"latin1":case"binary":return $(this,e,r);case"base64":return Y(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return M(this,e,r);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function S(t,e,r){var n=t[e];t[e]=t[r],t[r]=n}function T(t,e,r,n,o){if(0===t.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,isNaN(r)&&(r=o?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(o)return-1;r=t.length-1}else if(r<0){if(!o)return-1;r=0}if("string"==typeof e&&(e=d.from(e,n)),A(e))return 0===e.length?-1:P(t,e,r,n,o);if("number"==typeof e)return e&=255,d.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):P(t,[e],r,n,o);throw new TypeError("val must be string, number or Buffer")}function P(t,e,r,n,o){var i,s=1,u=t.length,a=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return-1;s=2,u/=2,a/=2,r/=2}function f(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}if(o){var l=-1;for(i=r;i<u;i++)if(f(t,i)===f(e,-1===l?0:i-l)){if(-1===l&&(l=i),i-l+1===a)return l*s}else-1!==l&&(i-=i-l),l=-1}else for(r+a>u&&(r=u-a),i=r;i>=0;i--){for(var c=!0,h=0;h<a;h++)if(f(t,i+h)!==f(e,h)){c=!1;break}if(c)return i}return-1}function O(t,e,r,n){r=Number(r)||0;var o=t.length-r;n?(n=Number(n))>o&&(n=o):n=o;var i=e.length;if(i%2!=0)throw new TypeError("Invalid hex string");n>i/2&&(n=i/2);for(var s=0;s<n;++s){var u=parseInt(e.substr(2*s,2),16);if(isNaN(u))return s;t[r+s]=u}return s}function x(t,e,r,n){return Q(W(e,t.length-r),t,r,n)}function B(t,e,r,n){return Q(function(t){for(var e=[],r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}(e),t,r,n)}function U(t,e,r,n){return B(t,e,r,n)}function I(t,e,r,n){return Q(K(e),t,r,n)}function k(t,e,r,n){return Q(function(t,e){for(var r,n,o,i=[],s=0;s<t.length&&!((e-=2)<0);++s)n=(r=t.charCodeAt(s))>>8,o=r%256,i.push(o),i.push(n);return i}(e,t.length-r),t,r,n)}function Y(t,e,r){return 0===e&&r===t.length?f(t):f(t.slice(e,r))}function j(t,e,r){r=Math.min(t.length,r);for(var n=[],o=e;o<r;){var i,s,u,a,f=t[o],l=null,c=f>239?4:f>223?3:f>191?2:1;if(o+c<=r)switch(c){case 1:f<128&&(l=f);break;case 2:128==(192&(i=t[o+1]))&&(a=(31&f)<<6|63&i)>127&&(l=a);break;case 3:i=t[o+1],s=t[o+2],128==(192&i)&&128==(192&s)&&(a=(15&f)<<12|(63&i)<<6|63&s)>2047&&(a<55296||a>57343)&&(l=a);break;case 4:i=t[o+1],s=t[o+2],u=t[o+3],128==(192&i)&&128==(192&s)&&128==(192&u)&&(a=(15&f)<<18|(63&i)<<12|(63&s)<<6|63&u)>65535&&a<1114112&&(l=a)}null===l?(l=65533,c=1):l>65535&&(l-=65536,n.push(l>>>10&1023|55296),l=56320|1023&l),n.push(l),o+=c}return function(t){var e=t.length;if(e<=C)return String.fromCharCode.apply(String,t);var r="",n=0;for(;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=C));return r}(n)}d.TYPED_ARRAY_SUPPORT=void 0===r.TYPED_ARRAY_SUPPORT||r.TYPED_ARRAY_SUPPORT,g(),d.poolSize=8192,d._augment=function(t){return t.__proto__=d.prototype,t},d.from=function(t,e,r){return w(null,t,e,r)},d.TYPED_ARRAY_SUPPORT&&(d.prototype.__proto__=Uint8Array.prototype,d.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&d[Symbol.species]),d.alloc=function(t,e,r){return function(t,e,r,n){return m(e),e<=0?y(t,e):void 0!==r?"string"==typeof n?y(t,e).fill(r,n):y(t,e).fill(r):y(t,e)}(null,t,e,r)},d.allocUnsafe=function(t){return v(null,t)},d.allocUnsafeSlow=function(t){return v(null,t)},d.isBuffer=X,d.compare=function(t,e){if(!A(t)||!A(e))throw new TypeError("Arguments must be Buffers");if(t===e)return 0;for(var r=t.length,n=e.length,o=0,i=Math.min(r,n);o<i;++o)if(t[o]!==e[o]){r=t[o],n=e[o];break}return r<n?-1:n<r?1:0},d.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},d.concat=function(t,e){if(!p(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return d.alloc(0);var r;if(void 0===e)for(e=0,r=0;r<t.length;++r)e+=t[r].length;var n=d.allocUnsafe(e),o=0;for(r=0;r<t.length;++r){var i=t[r];if(!A(i))throw new TypeError('"list" argument must be an Array of Buffers');i.copy(n,o),o+=i.length}return n},d.byteLength=_,d.prototype._isBuffer=!0,d.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)S(this,e,e+1);return this},d.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)S(this,e,e+3),S(this,e+1,e+2);return this},d.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)S(this,e,e+7),S(this,e+1,e+6),S(this,e+2,e+5),S(this,e+3,e+4);return this},d.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?j(this,0,t):R.apply(this,arguments)},d.prototype.equals=function(t){if(!A(t))throw new TypeError("Argument must be a Buffer");return this===t||0===d.compare(this,t)},d.prototype.inspect=function(){var t="";return this.length>0&&(t=this.toString("hex",0,50).match(/.{2}/g).join(" "),this.length>50&&(t+=" ... ")),"<Buffer "+t+">"},d.prototype.compare=function(t,e,r,n,o){if(!A(t))throw new TypeError("Argument must be a Buffer");if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),e<0||r>t.length||n<0||o>this.length)throw new RangeError("out of range index");if(n>=o&&e>=r)return 0;if(n>=o)return-1;if(e>=r)return 1;if(this===t)return 0;for(var i=(o>>>=0)-(n>>>=0),s=(r>>>=0)-(e>>>=0),u=Math.min(i,s),a=this.slice(n,o),f=t.slice(e,r),l=0;l<u;++l)if(a[l]!==f[l]){i=a[l],s=f[l];break}return i<s?-1:s<i?1:0},d.prototype.includes=function(t,e,r){return-1!==this.indexOf(t,e,r)},d.prototype.indexOf=function(t,e,r){return T(this,t,e,r,!0)},d.prototype.lastIndexOf=function(t,e,r){return T(this,t,e,r,!1)},d.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e|=0,isFinite(r)?(r|=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var o=this.length-e;if((void 0===r||r>o)&&(r=o),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var i=!1;;)switch(n){case"hex":return O(this,t,e,r);case"utf8":case"utf-8":return x(this,t,e,r);case"ascii":return B(this,t,e,r);case"latin1":case"binary":return U(this,t,e,r);case"base64":return I(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return k(this,t,e,r);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0}},d.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var C=4096;function D(t,e,r){var n="";r=Math.min(t.length,r);for(var o=e;o<r;++o)n+=String.fromCharCode(127&t[o]);return n}function $(t,e,r){var n="";r=Math.min(t.length,r);for(var o=e;o<r;++o)n+=String.fromCharCode(t[o]);return n}function L(t,e,r){var n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);for(var o="",i=e;i<r;++i)o+=Z(t[i]);return o}function M(t,e,r){for(var n=t.slice(e,r),o="",i=0;i<n.length;i+=2)o+=String.fromCharCode(n[i]+256*n[i+1]);return o}function N(t,e,r){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function z(t,e,r,n,o,i){if(!A(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<i)throw new RangeError('"value" argument is out of bounds');if(r+n>t.length)throw new RangeError("Index out of range")}function q(t,e,r,n){e<0&&(e=65535+e+1);for(var o=0,i=Math.min(t.length-r,2);o<i;++o)t[r+o]=(e&255<<8*(n?o:1-o))>>>8*(n?o:1-o)}function F(t,e,r,n){e<0&&(e=4294967295+e+1);for(var o=0,i=Math.min(t.length-r,4);o<i;++o)t[r+o]=e>>>8*(n?o:3-o)&255}function G(t,e,r,n,o,i){if(r+n>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function H(t,e,r,n,o){return o||G(t,0,r,4),c(t,e,r,n,23,4),r+4}function V(t,e,r,n,o){return o||G(t,0,r,8),c(t,e,r,n,52,8),r+8}d.prototype.slice=function(t,e){var r,n=this.length;if((t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(e=void 0===e?n:~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t),d.TYPED_ARRAY_SUPPORT)(r=this.subarray(t,e)).__proto__=d.prototype;else{var o=e-t;r=new d(o,void 0);for(var i=0;i<o;++i)r[i]=this[i+t]}return r},d.prototype.readUIntLE=function(t,e,r){t|=0,e|=0,r||N(t,e,this.length);for(var n=this[t],o=1,i=0;++i<e&&(o*=256);)n+=this[t+i]*o;return n},d.prototype.readUIntBE=function(t,e,r){t|=0,e|=0,r||N(t,e,this.length);for(var n=this[t+--e],o=1;e>0&&(o*=256);)n+=this[t+--e]*o;return n},d.prototype.readUInt8=function(t,e){return e||N(t,1,this.length),this[t]},d.prototype.readUInt16LE=function(t,e){return e||N(t,2,this.length),this[t]|this[t+1]<<8},d.prototype.readUInt16BE=function(t,e){return e||N(t,2,this.length),this[t]<<8|this[t+1]},d.prototype.readUInt32LE=function(t,e){return e||N(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},d.prototype.readUInt32BE=function(t,e){return e||N(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},d.prototype.readIntLE=function(t,e,r){t|=0,e|=0,r||N(t,e,this.length);for(var n=this[t],o=1,i=0;++i<e&&(o*=256);)n+=this[t+i]*o;return n>=(o*=128)&&(n-=Math.pow(2,8*e)),n},d.prototype.readIntBE=function(t,e,r){t|=0,e|=0,r||N(t,e,this.length);for(var n=e,o=1,i=this[t+--n];n>0&&(o*=256);)i+=this[t+--n]*o;return i>=(o*=128)&&(i-=Math.pow(2,8*e)),i},d.prototype.readInt8=function(t,e){return e||N(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},d.prototype.readInt16LE=function(t,e){e||N(t,2,this.length);var r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},d.prototype.readInt16BE=function(t,e){e||N(t,2,this.length);var r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},d.prototype.readInt32LE=function(t,e){return e||N(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},d.prototype.readInt32BE=function(t,e){return e||N(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},d.prototype.readFloatLE=function(t,e){return e||N(t,4,this.length),l(this,t,!0,23,4)},d.prototype.readFloatBE=function(t,e){return e||N(t,4,this.length),l(this,t,!1,23,4)},d.prototype.readDoubleLE=function(t,e){return e||N(t,8,this.length),l(this,t,!0,52,8)},d.prototype.readDoubleBE=function(t,e){return e||N(t,8,this.length),l(this,t,!1,52,8)},d.prototype.writeUIntLE=function(t,e,r,n){(t=+t,e|=0,r|=0,n)||z(this,t,e,r,Math.pow(2,8*r)-1,0);var o=1,i=0;for(this[e]=255&t;++i<r&&(o*=256);)this[e+i]=t/o&255;return e+r},d.prototype.writeUIntBE=function(t,e,r,n){(t=+t,e|=0,r|=0,n)||z(this,t,e,r,Math.pow(2,8*r)-1,0);var o=r-1,i=1;for(this[e+o]=255&t;--o>=0&&(i*=256);)this[e+o]=t/i&255;return e+r},d.prototype.writeUInt8=function(t,e,r){return t=+t,e|=0,r||z(this,t,e,1,255,0),d.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},d.prototype.writeUInt16LE=function(t,e,r){return t=+t,e|=0,r||z(this,t,e,2,65535,0),d.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):q(this,t,e,!0),e+2},d.prototype.writeUInt16BE=function(t,e,r){return t=+t,e|=0,r||z(this,t,e,2,65535,0),d.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):q(this,t,e,!1),e+2},d.prototype.writeUInt32LE=function(t,e,r){return t=+t,e|=0,r||z(this,t,e,4,4294967295,0),d.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):F(this,t,e,!0),e+4},d.prototype.writeUInt32BE=function(t,e,r){return t=+t,e|=0,r||z(this,t,e,4,4294967295,0),d.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):F(this,t,e,!1),e+4},d.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e|=0,!n){var o=Math.pow(2,8*r-1);z(this,t,e,r,o-1,-o)}var i=0,s=1,u=0;for(this[e]=255&t;++i<r&&(s*=256);)t<0&&0===u&&0!==this[e+i-1]&&(u=1),this[e+i]=(t/s|0)-u&255;return e+r},d.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e|=0,!n){var o=Math.pow(2,8*r-1);z(this,t,e,r,o-1,-o)}var i=r-1,s=1,u=0;for(this[e+i]=255&t;--i>=0&&(s*=256);)t<0&&0===u&&0!==this[e+i+1]&&(u=1),this[e+i]=(t/s|0)-u&255;return e+r},d.prototype.writeInt8=function(t,e,r){return t=+t,e|=0,r||z(this,t,e,1,127,-128),d.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[e]=255&t,e+1},d.prototype.writeInt16LE=function(t,e,r){return t=+t,e|=0,r||z(this,t,e,2,32767,-32768),d.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):q(this,t,e,!0),e+2},d.prototype.writeInt16BE=function(t,e,r){return t=+t,e|=0,r||z(this,t,e,2,32767,-32768),d.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):q(this,t,e,!1),e+2},d.prototype.writeInt32LE=function(t,e,r){return t=+t,e|=0,r||z(this,t,e,4,2147483647,-2147483648),d.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):F(this,t,e,!0),e+4},d.prototype.writeInt32BE=function(t,e,r){return t=+t,e|=0,r||z(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),d.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):F(this,t,e,!1),e+4},d.prototype.writeFloatLE=function(t,e,r){return H(this,t,e,!0,r)},d.prototype.writeFloatBE=function(t,e,r){return H(this,t,e,!1,r)},d.prototype.writeDoubleLE=function(t,e,r){return V(this,t,e,!0,r)},d.prototype.writeDoubleBE=function(t,e,r){return V(this,t,e,!1,r)},d.prototype.copy=function(t,e,r,n){if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);var o,i=n-r;if(this===t&&r<e&&e<n)for(o=i-1;o>=0;--o)t[o+e]=this[o+r];else if(i<1e3||!d.TYPED_ARRAY_SUPPORT)for(o=0;o<i;++o)t[o+e]=this[o+r];else Uint8Array.prototype.set.call(t,this.subarray(r,r+i),e);return i},d.prototype.fill=function(t,e,r,n){if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),1===t.length){var o=t.charCodeAt(0);o<256&&(t=o)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!d.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t&=255);if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;var i;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(i=e;i<r;++i)this[i]=t;else{var s=A(t)?t:W(new d(t,n).toString()),u=s.length;for(i=0;i<r-e;++i)this[i+e]=s[i%u]}return this};var J=/[^+\/0-9A-Za-z-_]/g;function Z(t){return t<16?"0"+t.toString(16):t.toString(16)}function W(t,e){var r;e=e||1/0;for(var n=t.length,o=null,i=[],s=0;s<n;++s){if((r=t.charCodeAt(s))>55295&&r<57344){if(!o){if(r>56319){(e-=3)>-1&&i.push(239,191,189);continue}if(s+1===n){(e-=3)>-1&&i.push(239,191,189);continue}o=r;continue}if(r<56320){(e-=3)>-1&&i.push(239,191,189),o=r;continue}r=65536+(o-55296<<10|r-56320)}else o&&(e-=3)>-1&&i.push(239,191,189);if(o=null,r<128){if((e-=1)<0)break;i.push(r)}else if(r<2048){if((e-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return i}function K(t){return function(t){var e,r,n,a,f,l;s||u();var c=t.length;if(c%4>0)throw new Error("Invalid string. Length must be a multiple of 4");f="="===t[c-2]?2:"="===t[c-1]?1:0,l=new i(3*c/4-f),n=f>0?c-4:c;var h=0;for(e=0,r=0;e<n;e+=4,r+=3)a=o[t.charCodeAt(e)]<<18|o[t.charCodeAt(e+1)]<<12|o[t.charCodeAt(e+2)]<<6|o[t.charCodeAt(e+3)],l[h++]=a>>16&255,l[h++]=a>>8&255,l[h++]=255&a;return 2===f?(a=o[t.charCodeAt(e)]<<2|o[t.charCodeAt(e+1)]>>4,l[h++]=255&a):1===f&&(a=o[t.charCodeAt(e)]<<10|o[t.charCodeAt(e+1)]<<4|o[t.charCodeAt(e+2)]>>2,l[h++]=a>>8&255,l[h++]=255&a),l}(function(t){if((t=function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}(t).replace(J,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function Q(t,e,r,n){for(var o=0;o<n&&!(o+r>=e.length||o>=t.length);++o)e[o+r]=t[o];return o}function X(t){return null!=t&&(!!t._isBuffer||tt(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&tt(t.slice(0,0))}(t))}function tt(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}var et=r.performance||{};et.now||et.mozNow||et.msNow||et.oNow||et.webkitNow;var rt="function"==typeof Object.create?function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:function(t,e){t.super_=e;var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t};function nt(t,e){var r={seen:[],stylize:it};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),ft(e)?r.showHidden=e:e&&function(t,e){if(!e||!gt(e))return t;var r=Object.keys(e),n=r.length;for(;n--;)t[r[n]]=e[r[n]]}(r,e),ht(r.showHidden)&&(r.showHidden=!1),ht(r.depth)&&(r.depth=2),ht(r.colors)&&(r.colors=!1),ht(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=ot),st(r,t,r.depth)}function ot(t,e){var r=nt.styles[e];return r?"["+nt.colors[r][0]+"m"+t+"["+nt.colors[r][1]+"m":t}function it(t,e){return t}function st(t,e,r){if(t.customInspect&&e&&wt(e.inspect)&&e.inspect!==nt&&(!e.constructor||e.constructor.prototype!==e)){var n=e.inspect(r,t);return ct(n)||(n=st(t,n,r)),n}var o=function(t,e){if(ht(e))return t.stylize("undefined","undefined");if(ct(e)){var r="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(r,"string")}if(n=e,"number"==typeof n)return t.stylize(""+e,"number");var n;if(ft(e))return t.stylize(""+e,"boolean");if(lt(e))return t.stylize("null","null")}(t,e);if(o)return o;var i=Object.keys(e),s=function(t){var e={};return t.forEach((function(t,r){e[t]=!0})),e}(i);if(t.showHidden&&(i=Object.getOwnPropertyNames(e)),dt(e)&&(i.indexOf("message")>=0||i.indexOf("description")>=0))return ut(e);if(0===i.length){if(wt(e)){var u=e.name?": "+e.name:"";return t.stylize("[Function"+u+"]","special")}if(pt(e))return t.stylize(RegExp.prototype.toString.call(e),"regexp");if(yt(e))return t.stylize(Date.prototype.toString.call(e),"date");if(dt(e))return ut(e)}var a,f,l="",c=!1,h=["{","}"];(a=e,Array.isArray(a)&&(c=!0,h=["[","]"]),wt(e))&&(l=" [Function"+(e.name?": "+e.name:"")+"]");return pt(e)&&(l=" "+RegExp.prototype.toString.call(e)),yt(e)&&(l=" "+Date.prototype.toUTCString.call(e)),dt(e)&&(l=" "+ut(e)),0!==i.length||c&&0!=e.length?r<0?pt(e)?t.stylize(RegExp.prototype.toString.call(e),"regexp"):t.stylize("[Object]","special"):(t.seen.push(e),f=c?function(t,e,r,n,o){for(var i=[],s=0,u=e.length;s<u;++s)bt(e,String(s))?i.push(at(t,e,r,n,String(s),!0)):i.push("");return o.forEach((function(o){o.match(/^\d+$/)||i.push(at(t,e,r,n,o,!0))})),i}(t,e,r,s,i):i.map((function(n){return at(t,e,r,s,n,c)})),t.seen.pop(),function(t,e,r){var n=t.reduce((function(t,e){return e.indexOf("\n"),t+e.replace(/\u001b\[\d\d?m/g,"").length+1}),0);if(n>60)return r[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+r[1];return r[0]+e+" "+t.join(", ")+" "+r[1]}(f,l,h)):h[0]+l+h[1]}function ut(t){return"["+Error.prototype.toString.call(t)+"]"}function at(t,e,r,n,o,i){var s,u,a;if((a=Object.getOwnPropertyDescriptor(e,o)||{value:e[o]}).get?u=a.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):a.set&&(u=t.stylize("[Setter]","special")),bt(n,o)||(s="["+o+"]"),u||(t.seen.indexOf(a.value)<0?(u=lt(r)?st(t,a.value,null):st(t,a.value,r-1)).indexOf("\n")>-1&&(u=i?u.split("\n").map((function(t){return"  "+t})).join("\n").substr(2):"\n"+u.split("\n").map((function(t){return"   "+t})).join("\n")):u=t.stylize("[Circular]","special")),ht(s)){if(i&&o.match(/^\d+$/))return u;(s=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.substr(1,s.length-2),s=t.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=t.stylize(s,"string"))}return s+": "+u}function ft(t){return"boolean"==typeof t}function lt(t){return null===t}function ct(t){return"string"==typeof t}function ht(t){return void 0===t}function pt(t){return gt(t)&&"[object RegExp]"===vt(t)}function gt(t){return"object"==typeof t&&null!==t}function yt(t){return gt(t)&&"[object Date]"===vt(t)}function dt(t){return gt(t)&&("[object Error]"===vt(t)||t instanceof Error)}function wt(t){return"function"==typeof t}function mt(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||void 0===t}function vt(t){return Object.prototype.toString.call(t)}function bt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Et(t,e){if(t===e)return 0;for(var r=t.length,n=e.length,o=0,i=Math.min(r,n);o<i;++o)if(t[o]!==e[o]){r=t[o],n=e[o];break}return r<n?-1:n<r?1:0}nt.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},nt.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"};var At,_t=Object.prototype.hasOwnProperty,Rt=Object.keys||function(t){var e=[];for(var r in t)_t.call(t,r)&&e.push(r);return e},St=Array.prototype.slice;function Tt(){return void 0!==At?At:At="foo"===function(){}.name}function Pt(t){return Object.prototype.toString.call(t)}function Ot(t){return!X(t)&&("function"==typeof r.ArrayBuffer&&("function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(t):!!t&&(t instanceof DataView||!!(t.buffer&&t.buffer instanceof ArrayBuffer))))}function xt(t,e){t||jt(t,!0,e,"==",Ct)}var Bt=/\s*function\s+([^\(\s]*)\s*/;function Ut(t){if(wt(t)){if(Tt())return t.name;var e=t.toString().match(Bt);return e&&e[1]}}function It(t){this.name="AssertionError",this.actual=t.actual,this.expected=t.expected,this.operator=t.operator,t.message?(this.message=t.message,this.generatedMessage=!1):(this.message=function(t){return kt(Yt(t.actual),128)+" "+t.operator+" "+kt(Yt(t.expected),128)}(this),this.generatedMessage=!0);var e=t.stackStartFunction||jt;if(Error.captureStackTrace)Error.captureStackTrace(this,e);else{var r=new Error;if(r.stack){var n=r.stack,o=Ut(e),i=n.indexOf("\n"+o);if(i>=0){var s=n.indexOf("\n",i+1);n=n.substring(s+1)}this.stack=n}}}function kt(t,e){return"string"==typeof t?t.length<e?t:t.slice(0,e):t}function Yt(t){if(Tt()||!wt(t))return nt(t);var e=Ut(t);return"[Function"+(e?": "+e:"")+"]"}function jt(t,e,r,n,o){throw new It({message:r,actual:t,expected:e,operator:n,stackStartFunction:o})}function Ct(t,e){t||jt(t,!0,e,"==",Ct)}function Dt(t,e,r){t!=e&&jt(t,e,r,"==",Dt)}function $t(t,e,r){t==e&&jt(t,e,r,"!=",$t)}function Lt(t,e,r){Nt(t,e,!1)||jt(t,e,r,"deepEqual",Lt)}function Mt(t,e,r){Nt(t,e,!0)||jt(t,e,r,"deepStrictEqual",Mt)}function Nt(t,e,r,n){if(t===e)return!0;if(X(t)&&X(e))return 0===Et(t,e);if(yt(t)&&yt(e))return t.getTime()===e.getTime();if(pt(t)&&pt(e))return t.source===e.source&&t.global===e.global&&t.multiline===e.multiline&&t.lastIndex===e.lastIndex&&t.ignoreCase===e.ignoreCase;if(null!==t&&"object"==typeof t||null!==e&&"object"==typeof e){if(Ot(t)&&Ot(e)&&Pt(t)===Pt(e)&&!(t instanceof Float32Array||t instanceof Float64Array))return 0===Et(new Uint8Array(t.buffer),new Uint8Array(e.buffer));if(X(t)!==X(e))return!1;var o=(n=n||{actual:[],expected:[]}).actual.indexOf(t);return-1!==o&&o===n.expected.indexOf(e)||(n.actual.push(t),n.expected.push(e),function(t,e,r,n){if(null==t||null==e)return!1;if(mt(t)||mt(e))return t===e;if(r&&Object.getPrototypeOf(t)!==Object.getPrototypeOf(e))return!1;var o=zt(t),i=zt(e);if(o&&!i||!o&&i)return!1;if(o)return Nt(t=St.call(t),e=St.call(e),r);var s,u,a=Rt(t),f=Rt(e);if(a.length!==f.length)return!1;for(a.sort(),f.sort(),u=a.length-1;u>=0;u--)if(a[u]!==f[u])return!1;for(u=a.length-1;u>=0;u--)if(!Nt(t[s=a[u]],e[s],r,n))return!1;return!0}(t,e,r,n))}return r?t===e:t==e}function zt(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function qt(t,e,r){Nt(t,e,!1)&&jt(t,e,r,"notDeepEqual",qt)}function Ft(t,e,r){Nt(t,e,!0)&&jt(t,e,r,"notDeepStrictEqual",Ft)}function Gt(t,e,r){t!==e&&jt(t,e,r,"===",Gt)}function Ht(t,e,r){t===e&&jt(t,e,r,"!==",Ht)}function Vt(t,e){if(!t||!e)return!1;if("[object RegExp]"==Object.prototype.toString.call(e))return e.test(t);try{if(t instanceof e)return!0}catch(t){}return!Error.isPrototypeOf(e)&&!0===e.call({},t)}function Jt(t,e,r,n){var o;if("function"!=typeof e)throw new TypeError('"block" argument must be a function');"string"==typeof r&&(n=r,r=null),o=function(t){var e;try{t()}catch(t){e=t}return e}(e),n=(r&&r.name?" ("+r.name+").":".")+(n?" "+n:"."),t&&!o&&jt(o,r,"Missing expected exception"+n);var i="string"==typeof n,s=!t&&o&&!r;if((!t&&dt(o)&&i&&Vt(o,r)||s)&&jt(o,r,"Got unwanted exception"+n),t&&o&&r&&!Vt(o,r)||!t&&o)throw o}function Zt(t,e,r){Jt(!0,t,e,r)}function Wt(t,e,r){Jt(!1,t,e,r)}function Kt(t){if(t)throw t}xt.AssertionError=It,rt(It,Error),xt.fail=jt,xt.ok=Ct,xt.equal=Dt,xt.notEqual=$t,xt.deepEqual=Lt,xt.deepStrictEqual=Mt,xt.notDeepEqual=qt,xt.notDeepStrictEqual=Ft,xt.strictEqual=Gt,xt.notStrictEqual=Ht,xt.throws=Zt,xt.doesNotThrow=Wt,xt.ifError=Kt;const Qt=e(Object.freeze({__proto__:null,AssertionError:It,assert:Ct,deepEqual:Lt,deepStrictEqual:Mt,default:xt,doesNotThrow:Wt,equal:Dt,fail:jt,ifError:Kt,notDeepEqual:qt,notDeepStrictEqual:Ft,notEqual:$t,notStrictEqual:Ht,ok:Ct,strictEqual:Gt,throws:Zt}));function Xt(t,e){if(e<0){e=t.words().length+e}let r=0;for(let n=0;n<t.length;n++){let o=t.get(n);if(o instanceof ne);else{if(r===e)return[n,o];r+=1}}return[t.length-1,null]}class te{constructor(t,e=[],r=[]){this.val=t,this.start=e,this.end=r}surround(t,e){this.start=t,this.end=e}}class ee extends te{get length(){return this.val.length}get(t){return this.val[t]}set(t,e){return this.val[t]=e}map(t){return this.val.map(t)}slice(t,e){return this.val.slice(t,e)}filter(t){return this.val.filter(t)}words(){return this.val.filter((t=>!(t instanceof ne)))}}class re extends ee{}class ne extends te{}class oe extends te{}class ie extends te{}class se extends te{}class ue extends te{}class ae extends te{}class fe{constructor(t,e=0){this.tokens=t,this.position=e,this.line=0}next(){return this.tokens[this.position++]}peek(){return this.tokens[this.position]}}let le=/([\s][\s]*|[(];.*?;[)]|[\[\]{}()`~^@]|'(?:[\\].|[^\\'])*'?|"(?:[\\].|[^\\"])*"?|;;.*|[^\s\[\]{}()'"`@,;]+)/g,ce=/^([\s]+|;;.*|[(];.*)$/,he=/^-?[0-9xa-fA-F]+$/,pe=/^-?[0-9][0-9.]*$/;function ge(t){return ce.exec(t)}function ye(t){let e=[],r=t.peek();for(;r&&ge(r);)e.push(new ne(t.next())),t.line+=(r.match(/\n/)||[]).length,r=t.peek();return e}function de(t){let e=t.peek();if(e.startsWith(";;"))return e;if(e.startsWith("(;"))return e;if(")"===e)throw Error("unexpected ')'");return"("===e?we(t):function(t){let e=t.next();return"$"===e[0]?new oe(e):'"'===e[0]?new se(e):e.match(he)?new ue(e):e.match(pe)?new ae(e):e.match(ce)?new ne(e):new ie(e)}(t)}function we(t,e="(",r=")"){let n=[],o=ye(t),i=t.next();for(;(i=t.peek())!==r;){if(!i)throw Error("expected '"+r+"', got EOF");n.push(de(t)),n.push(...ye(t))}t.next();let s=ye(t);return new ee(n,o,s)}function me(t){let e=function(t){let e,r=[];for(;(e=le.exec(t))&&""!==e[1];)r.push(e[1]);return r}(t);if(0===e.length)throw Error("Blank Line");return we(new fe(e))}function ve(t){return JSON.parse(t.replace(/\\x([0-9A-Fa-f][0-9A-Fa-f])/g,"\\u00$1"))}function be(t,e){Qt(t.length-1==1,"STRING takes 1 argument");let r,n=ve(t[1].val);return n in e.string_map?r=e.string_map[n]:(r=`$S_STRING_${e.strings.length}`,e.strings.push([r,n,1]),e.string_map[n]=r),me(`(i32.add (global.get $memoryBase) (global.get ${r}))`)}function Ee(t,e){let r=t[0].val;Qt(t.length-1>=2,`${r} takes at least 2 argument`),Qt((t.length-1)%2==0,`${r} takes even number of argument`);let n=[];for(let e=1;e<t.length;e+=2)n.push(new ee([new ie(r),t[e],t[e+1]]));return new re(n)}const Ae={AND:function(t,e){Qt(t.length-1>0,"AND takes at least 1 argument");let r=new ee([new ie("i32.const"),new ue(1)]);for(let n of t.slice(1).reverse()){let t=Oe(n,e);r=new ee([new ie("if"),new ee([new ie("result"),new ie("i32")]),t,r,new ee([new ie("i32.const"),new ue(0)])])}return r},OR:function(t,e){Qt(t.length-1>0,"OR takes at least 1 argument");let r=new ee([new ie("i32.const"),new ue(0)]);for(let n of t.slice(1).reverse()){let t=Oe(n,e);r=new ee([new ie("if"),new ee([new ie("result"),new ie("i32")]),t,new ee([new ie("i32.const"),new ue(1)]),r])}return r},CHR:function(t,e){Qt(t.length-1==1,"CHR takes 1 argument");let r=t[1].val,n=ve(r);if(1!==n.length)throw Error("Invalid CHR macro, must be 1 character string");return me(`(i32.const 0x${n.charCodeAt(0).toString(16)} (; ${r} ;))`)},STRING:be,STATIC_ARRAY:function(t,e){Qt(t.length-1==1||t.length-1==2,"STATIC_ARRAY takes 1 or 2 arguments");let r=parseInt(ve(t[1].val)),n=t[2]?parseInt(ve(t[2].val)):1,o=`$S_STATIC_ARRAY_${e.strings.length}`;return e.strings.push([o,r,n]),me(`(i32.add (global.get $memoryBase) (global.get ${o}))`)},LET:function(t,e){Qt(t.length-1>=2,"LET takes at least 2 argument"),Qt((t.length-1)%2==0,"LET takes even number of argument");let r=[],n=[];for(let o=1;o<t.length;o+=2){let i=t[o],s=Oe(t[o+1],e);s.surround([],[]),r.push(new ee([new ie("local"),i,new ie("i32")])),n.push(new ee([new ie("local.set"),i,s]))}return new re(r.concat(n))},param:Ee,local:Ee},_e=["memory","import","global","table"],Re=new Set(_e),Se=new Set(["memory","import","export","start","type","global.get","local","local.get","param","br","i32.const","i64.const","f32.const","f64.const"]),Te=new Set(["module","func","memory","call","local.set","global.set","block","loop","br_if"]),Pe=new Set(["global","br_table"]);function Oe(t,e){if(t instanceof ee){let[r,n]=Xt(t,0),o=[];if(n instanceof ie){let r=t;"import"===n.val&&(r=Xt(r,-1)[1]);let o=Xt(r,0)[1];"memory"===o.val&&(e.memory_defined=!0),"global"===o.val&&"$memoryBase"===Xt(r,1)[1].val&&(e.memoryBase_defined=!0)}if(n instanceof oe)o=t.slice(r+1).map((t=>Oe(t,e))),o=[new ie("call"),n].concat(o);else{if(n instanceof ie&&n.val in Ae){let n=Ae[t.get(0).val](t.words().slice(r),e);if(n instanceof re)for(let e of n.slice())e.surround(t.start,t.end);else n.surround(t.start,t.end);return n}if(n instanceof ie&&Re.has(n.val)){if(Pe.has(n.val)){let[r,n]=Xt(t,-1);t.set(r,Oe(n,e))}const r=t.words().slice(0,3).filter((t=>!(t instanceof ee))).map((t=>t.val));let o=new ne(`(; hoisted to top: ${r.join(" ")} ;)`);o.surround(t.start,t.end),t.surround([new ne("  ")],[new ne("\n")]);let i=t.words()[0].val;return i in e.hoist||(e.hoist[i]=[]),e.hoist[i].push(t),o}if(n instanceof ie&&Se.has(n.val))return t;if(n instanceof ie&&Te.has(n.val)){let[r,n]=Xt(t,1);n instanceof oe&&([r,n]=Xt(t,2)),o=t.slice(0,r).concat(t.slice(r).map((t=>Oe(t,e))))}else{if(n instanceof ie&&Pe.has(n.val)){let[r,n]=Xt(t,-1);return t.set(r,Oe(n,e)),t}if(n instanceof ie&&"data"===n.val)throw Error("explicit (data ...) not supported");o=t.map((t=>Oe(t,e)))}}let i=[];for(let t of o)t instanceof re?i.push(...t.slice()):i.push(t);return new ee(i,t.start,t.end)}return t instanceof se?be([null,t],e):t instanceof ue?new ee([new ie("i32.const"),t]):t instanceof ae?new ee([new ie("f32.const"),t]):t instanceof oe?new ee([new ie("local.get"),t]):t}function xe(t,e){let r=[];for(let n of t.start)r.push(...xe(n,e));if(t instanceof ee)if(t.words().length>1&&"module"===t.words()[0].val){let n=t.words()[1].val.slice(1);e.modules.push(n),r.push(`;; module $${n}\n`);let o="skip";for(let n of t.slice()){if("skip"===o)if(n instanceof ee)o="continue";else{if(n instanceof ie&&"module"===n.val)continue;if(n instanceof oe)continue}r.push(...xe(n,e))}}else{r.push("(");for(let n of t.slice()){let t=xe(n,e);"("===r[r.length-1]||ge(r[r.length-1])||ge(t[0])||r.push(" "),r.push(...t)}r.push(")")}else if(t instanceof ue||t instanceof ae)r.push(t.val.toString());else{if("string"!=typeof t.val)throw Error(`type ${typeof t.val} has non-string val: ${t.val}`);r.push(t.val)}for(let n of t.end)r.push(...xe(n,e));return r}function Be(t,e){return e-1-(t-1)%e}return t({read_str:me,wam_eval:Oe,emit_module:function(t,e,r){let n=e.strings,o=[];if(n){let t,i=4;for(let[e,r,s]of n){let n=Be(i,s);n&&(i+=n),t="number"==typeof r?r+1:r.length+1,o.push(`  (global ${e}  i32 (i32.const ${i}))\n`),i+=t}o.push(`  (global $S_STRING_END  i32 (i32.const ${i}))\n\n`),e.memoryBase_defined?o.push("  (data\n    (global.get $memoryBase)\n"):o.push(`  (data\n    (i32.const ${r.memoryBase})\n`);let s='    ;; Place "deadbeef" at first/NULL address\n';s+='    "\\de\\ad\\be\\ef',i=4;for(let[e,r,o]of n){let e,n=Be(i,o);n&&(s+="\\00".repeat(n),i+=n),e="number"==typeof r?"\0".repeat(r):r,t=e.length+1,s+=e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\x00/g,"\\00")+"\\00",i+=t}o.push(s,'")\n\n')}let i=t.map((t=>xe(t,e))),s=[];for(let t of _e)e.hoist[t]&&s.push(...e.hoist[t].map((t=>xe(t,e))));let u=[`(module $${e.modules.join("__")}\n\n`];return e.memory_defined||u.push(`  (memory ${r.memorySize})\n\n`),e.memoryBase_defined||u.push(`  (global $memoryBase i32 (i32.const ${r.memoryBase}))\n\n`),u.push(...[].concat.apply([],s),"\n"),u.push(...o,"\n"),u.push(...[].concat.apply([],i),"\n)"),u.join("")},empty_ctx:function(){return{hoist:{},strings:[],string_map:{},modules:[],memory_defined:!1,memoryBase_defined:!1}}})}));
