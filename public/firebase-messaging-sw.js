/*if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('../firebase-messaging-sw.js')
  .then(function(registration) {
    console.log('Registration successful, scope is:', registration.scope);
  }).catch(function(err) {
    console.log('Service worker registration failed, error:', err);
  });
}
*/
//importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');


var firebase=function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=11)}([function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=void 0;if(void 0!==e)r=e;else if("undefined"!=typeof self)r=self;else try{r=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var i=r.Promise||n(8);t.local={Promise:i,GoogPromise:i}}).call(t,n(1))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),i=(0,r.createFirebaseNamespace)();t.default=i,e.exports=t.default},function(e,t,n){"use strict";function r(e){return i(void 0,e)}function i(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var n in t)t.hasOwnProperty(n)&&(e[n]=i(e[n],t[n]));return e}function o(e,t,n){e[t]=n}Object.defineProperty(t,"__esModule",{value:!0}),t.deepCopy=r,t.deepExtend=i,t.patchProperty=o},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e){var t=a;return a=e,t}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.patchCapture=i;var a=Error.captureStackTrace,c=function e(t,n){if(r(this,e),this.code=t,this.message=n,a)a(this,s.prototype.create);else{var i=Error.apply(this,arguments);this.name="FirebaseError",Object.defineProperty(this,"stack",{get:function(){return i.stack}})}};c.prototype=Object.create(Error.prototype),c.prototype.constructor=c,c.prototype.name="FirebaseError";var s=t.ErrorFactory=function(){function e(t,n,i){r(this,e),this.service=t,this.serviceName=n,this.errors=i,this.pattern=/\{\$([^}]+)}/g}return o(e,[{key:"create",value:function(e,t){void 0===t&&(t={});var n=this.errors[e],r=this.service+"/"+e,i=void 0;i=void 0===n?"Error":n.replace(this.pattern,function(e,n){var r=t[n];return void 0!==r?r.toString():"<"+n+"?>"}),i=this.serviceName+": "+i+" ("+r+").";var o=new c(r,i);for(var a in t)t.hasOwnProperty(a)&&"_"!==a.slice(-1)&&(o[a]=t[a]);return o}}]),e}()},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(){function e(e){e=e||d;var t=r[e];return void 0===t&&o("no-app",{name:e}),t}function t(e,t){Object.keys(a).forEach(function(r){var i=n(e,r);null!==i&&h[i]&&h[i](t,e)})}function n(e,t){if("serverAuth"===t)return null;var n=t,r=e.options;return"auth"===t&&(r.serviceAccount||r.credential)&&(n="serverAuth","serverAuth"in a||o("sa-not-supported")),n}var r={},a={},h={},v={__esModule:!0,initializeApp:function(e,n){void 0===n?n=d:"string"==typeof n&&""!==n||o("bad-app-name",{name:n+""}),void 0!==r[n]&&o("duplicate-app",{name:n});var i=new p(e,n,v);return r[n]=i,t(i,"create"),void 0!=i.INTERNAL&&void 0!=i.INTERNAL.getToken||(0,c.deepExtend)(i,{INTERNAL:{getUid:function(){return null},getToken:function(){return l.resolve(null)},addAuthTokenListener:function(){},removeAuthTokenListener:function(){}}}),i},app:e,apps:null,Promise:l,SDK_VERSION:"3.9.0",INTERNAL:{registerService:function(t,n,r,i,s){a[t]&&o("duplicate-service",{name:t}),a[t]=s?n:function(e,t){return n(e,t,d)},i&&(h[t]=i);var u=void 0;return u=function(n){return void 0===n&&(n=e()),"function"!=typeof n[t]&&o("invalid-app-argument",{name:t}),n[t]()},void 0!==r&&(0,c.deepExtend)(u,r),v[t]=u,u},createFirebaseNamespace:i,extendNamespace:function(e){(0,c.deepExtend)(v,e)},createSubscribe:s.createSubscribe,ErrorFactory:u.ErrorFactory,removeApp:function(e){t(r[e],"delete"),delete r[e]},factories:a,useAsService:n,Promise:f.local.GoogPromise,deepExtend:c.deepExtend}};return(0,c.patchProperty)(v,"default",v),Object.defineProperty(v,"apps",{get:function(){return Object.keys(r).map(function(e){return r[e]})}}),(0,c.patchProperty)(e,"App",p),v}function o(e,t){throw v.create(e,t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.createFirebaseNamespace=i;var c=n(3),s=n(6),u=n(4),f=n(0),l=f.local.Promise,d="[DEFAULT]",p=function(){function e(t,n,i){var o=this;r(this,e),this.firebase_=i,this.isDeleted_=!1,this.services_={},this.name_=n,this.options_=(0,c.deepCopy)(t);var a="credential"in this.options_,s="serviceAccount"in this.options_;if(a||s){var u=s?"serviceAccount":"credential";"undefined"!=typeof console&&console.log("The '"+u+"' property specified in the first argument to initializeApp() is deprecated and will be removed in the next major version. You should instead use the 'firebase-admin' package. See https://firebase.google.com/docs/admin/setup for details on how to get started.")}Object.keys(i.INTERNAL.factories).forEach(function(e){var t=i.INTERNAL.useAsService(o,e);if(null!==t){var n=o.getService.bind(o,t);(0,c.patchProperty)(o,e,n)}})}return a(e,[{key:"delete",value:function(){var e=this;return new l(function(t){e.checkDestroyed_(),t()}).then(function(){e.firebase_.INTERNAL.removeApp(e.name_);var t=[];return Object.keys(e.services_).forEach(function(n){Object.keys(e.services_[n]).forEach(function(r){t.push(e.services_[n][r])})}),l.all(t.map(function(e){return e.INTERNAL.delete()}))}).then(function(){e.isDeleted_=!0,e.services_={}})}},{key:"getService",value:function(e,t){this.checkDestroyed_(),void 0===this.services_[e]&&(this.services_[e]={});var n=t||d;if(void 0===this.services_[e][n]){var r=this.firebase_.INTERNAL.factories[e](this,this.extendApp.bind(this),t);return this.services_[e][n]=r,r}return this.services_[e][n]}},{key:"extendApp",value:function(e){(0,c.deepExtend)(this,e)}},{key:"checkDestroyed_",value:function(){this.isDeleted_&&o("app-deleted",{name:this.name_})}},{key:"name",get:function(){return this.checkDestroyed_(),this.name_}},{key:"options",get:function(){return this.checkDestroyed_(),this.options_}}]),e}();p.prototype.name&&p.prototype.options||p.prototype.delete||console.log("dc");var h={"no-app":"No Firebase App '{$name}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$name}","duplicate-app":"Firebase App named '{$name}' already exists","app-deleted":"Firebase App named '{$name}' already deleted","duplicate-service":"Firebase service named '{$name}' already registered","sa-not-supported":"Initializing the Firebase SDK with a service account is only allowed in a Node.js environment. On client devices, you should instead initialize the SDK with an api key and auth domain","invalid-app-argument":"firebase.{$name}() takes either no argument or a Firebase App instance."},v=new u.ErrorFactory("app","Firebase",h)},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){var n=new d(e,t);return n.subscribe.bind(n)}function o(e,t){return function(){for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];l.resolve(!0).then(function(){e.apply(void 0,r)}).catch(function(e){t&&t(e)})}}function a(e,t){if("object"!==(void 0===e?"undefined":s(e))||null===e)return!1;var n=!0,r=!1,i=void 0;try{for(var o,a=t[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var c=o.value;if(c in e&&"function"==typeof e[c])return!0}}catch(e){r=!0,i=e}finally{try{!n&&a.return&&a.return()}finally{if(r)throw i}}return!1}function c(){}Object.defineProperty(t,"__esModule",{value:!0});var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.createSubscribe=i,t.async=o;var f=n(0),l=f.local.Promise,d=function(){function e(t,n){var i=this;r(this,e),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=l.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(function(){t(i)}).catch(function(e){i.error(e)})}return u(e,[{key:"next",value:function(e){this.forEachObserver(function(t){t.next(e)})}},{key:"error",value:function(e){this.forEachObserver(function(t){t.error(e)}),this.close(e)}},{key:"complete",value:function(){this.forEachObserver(function(e){e.complete()}),this.close()}},{key:"subscribe",value:function(e,t,n){var r=this,i=void 0;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=a(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=c),void 0===i.error&&(i.error=c),void 0===i.complete&&(i.complete=c);var o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(function(){try{r.finalError?i.error(r.finalError):i.complete()}catch(e){}}),this.observers.push(i),o}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var n=this;this.task.then(function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(function(){t.observers=void 0,t.onNoObservers=void 0}))}}]),e}()},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function i(e){if(f===setTimeout)return setTimeout(e,0);if((f===n||!f)&&setTimeout)return f=setTimeout,setTimeout(e,0);try{return f(e,0)}catch(t){try{return f.call(null,e,0)}catch(t){return f.call(this,e,0)}}}function o(e){if(l===clearTimeout)return clearTimeout(e);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(e);try{return l(e)}catch(t){try{return l.call(null,e)}catch(t){return l.call(this,e)}}}function a(){v&&p&&(v=!1,p.length?h=p.concat(h):m=-1,h.length&&c())}function c(){if(!v){var e=i(a);v=!0;for(var t=h.length;t;){for(p=h,h=[];++m<t;)p&&p[m].run();m=-1,t=h.length}p=null,v=!1,o(e)}}function s(e,t){this.fun=e,this.array=t}function u(){}var f,l,d=e.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:n}catch(e){f=n}try{l="function"==typeof clearTimeout?clearTimeout:r}catch(e){l=r}}();var p,h=[],v=!1,m=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new s(e,t)),1!==h.length||v||i(c)},s.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=u,d.addListener=u,d.once=u,d.off=u,d.removeListener=u,d.removeAllListeners=u,d.emit=u,d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(e,t,n){(function(t){!function(n){function r(){}function i(e,t){return function(){e.apply(t,arguments)}}function o(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],l(e,this)}function a(e,t){for(;3===e._state;)e=e._value;if(0===e._state)return void e._deferreds.push(t);e._handled=!0,o._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null===n)return void(1===e._state?c:s)(t.promise,e._value);var r;try{r=n(e._value)}catch(e){return void s(t.promise,e)}c(t.promise,r)})}function c(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof o)return e._state=3,e._value=t,void u(e);if("function"==typeof n)return void l(i(n,t),e)}e._state=1,e._value=t,u(e)}catch(t){s(e,t)}}function s(e,t){e._state=2,e._value=t,u(e)}function u(e){2===e._state&&0===e._deferreds.length&&o._immediateFn(function(){e._handled||o._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)a(e,e._deferreds[t]);e._deferreds=null}function f(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function l(e,t){var n=!1;try{e(function(e){n||(n=!0,c(t,e))},function(e){n||(n=!0,s(t,e))})}catch(e){if(n)return;n=!0,s(t,e)}}var d=setTimeout;o.prototype.catch=function(e){return this.then(null,e)},o.prototype.then=function(e,t){var n=new this.constructor(r);return a(this,new f(e,t,n)),n},o.all=function(e){var t=Array.prototype.slice.call(e);return new o(function(e,n){function r(o,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var c=a.then;if("function"==typeof c)return void c.call(a,function(e){r(o,e)},n)}t[o]=a,0==--i&&e(t)}catch(e){n(e)}}if(0===t.length)return e([]);for(var i=t.length,o=0;o<t.length;o++)r(o,t[o])})},o.resolve=function(e){return e&&"object"==typeof e&&e.constructor===o?e:new o(function(t){t(e)})},o.reject=function(e){return new o(function(t,n){n(e)})},o.race=function(e){return new o(function(t,n){for(var r=0,i=e.length;r<i;r++)e[r].then(t,n)})},o._immediateFn="function"==typeof t&&function(e){t(e)}||function(e){d(e,0)},o._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},o._setImmediateFn=function(e){o._immediateFn=e},o._setUnhandledRejectionFn=function(e){o._unhandledRejectionFn=e},void 0!==e&&e.exports?e.exports=o:n.Promise||(n.Promise=o)}(this)}).call(t,n(10).setImmediate)},function(e,t,n){(function(e,t){!function(e,n){"use strict";function r(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var r={callback:e,args:t};return u[s]=r,c(s),s++}function i(e){delete u[e]}function o(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}function a(e){if(f)setTimeout(a,0,e);else{var t=u[e];if(t){f=!0;try{o(t)}finally{i(e),f=!1}}}}if(!e.setImmediate){var c,s=1,u={},f=!1,l=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?function(){c=function(e){t.nextTick(function(){a(e)})}}():function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?function(){var t="setImmediate$"+Math.random()+"$",n=function(n){n.source===e&&"string"==typeof n.data&&0===n.data.indexOf(t)&&a(+n.data.slice(t.length))};e.addEventListener?e.addEventListener("message",n,!1):e.attachEvent("onmessage",n),c=function(n){e.postMessage(t+n,"*")}}():e.MessageChannel?function(){var e=new MessageChannel;e.port1.onmessage=function(e){a(e.data)},c=function(t){e.port2.postMessage(t)}}():l&&"onreadystatechange"in l.createElement("script")?function(){var e=l.documentElement;c=function(t){var n=l.createElement("script");n.onreadystatechange=function(){a(t),n.onreadystatechange=null,e.removeChild(n),n=null},e.appendChild(n)}}():function(){c=function(e){setTimeout(a,0,e)}}(),d.setImmediate=r,d.clearImmediate=i}}("undefined"==typeof self?void 0===e?this:e:self)}).call(t,n(1),n(7))},function(e,t,n){function r(e,t){this._id=e,this._clearFn=t}var i=Function.prototype.apply;t.setTimeout=function(){return new r(i.call(setTimeout,window,arguments),clearTimeout)},t.setInterval=function(){return new r(i.call(setInterval,window,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){this._clearFn.call(window,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n(9),t.setImmediate=setImmediate,t.clearImmediate=clearImmediate},function(e,t,n){e.exports=n(2)}]);



//importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');

(function(){var f=function(a,b){function c(){}c.prototype=b.prototype;a.u=b.prototype;a.prototype=new c;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]},g=this,h=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&
"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},k=function(a,b){function c(){}c.prototype=b.prototype;a.u=b.prototype;a.prototype=new c;a.v=function(a,c,n){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-
2]=arguments[e];return b.prototype[c].apply(a,d)}};var m=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,m);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};k(m,Error);var p=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")};var q=function(a,b){b.unshift(a);m.call(this,p.apply(null,b));b.shift()};k(q,m);var r=function(a,b,c){if(!a){var d="Assertion failed";if(b)var d=d+(": "+b),e=Array.prototype.slice.call(arguments,2);throw new q(""+d,e||[]);}};var t=null;var v=function(a){a=new Uint8Array(a);var b=h(a);r("array"==b||"object"==b&&"number"==typeof a.length,"encodeByteArray takes an array as a parameter");if(!t)for(t={},b=0;65>b;b++)t[b]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(b);for(var b=t,c=[],d=0;d<a.length;d+=3){var e=a[d],n=d+1<a.length,l=n?a[d+1]:0,z=d+2<a.length,u=z?a[d+2]:0,M=e>>2,e=(e&3)<<4|l>>4,l=(l&15)<<2|u>>6,u=u&63;z||(u=64,n||(l=64));c.push(b[M],b[e],b[l],b[u])}return c.join("").replace(/\+/g,"-").replace(/\//g,
"_").replace(/=+$/,"")};var w={},x=(w["only-available-in-window"]="This method is available in a Window context.",w["only-available-in-sw"]="This method is available in a service worker context.",w["should-be-overriden"]="This method should be overriden by extended classes.",w["bad-sender-id"]="Please ensure that 'messagingSenderId' is set correctly in the options passed into firebase.initializeApp().",w["permission-default"]="The required permissions were not granted and dismissed instead.",w["permission-blocked"]="The required permissions were not granted and blocked instead.",
w["unsupported-browser"]="This browser doesn't support the API's required to use the firebase SDK.",w["notifications-blocked"]="Notifications have been blocked.",w["failed-serviceworker-registration"]="We are unable to register the default service worker. {$browserErrorMessage}",w["sw-registration-expected"]="A service worker registration was the expected input.",w["get-subscription-failed"]="There was an error when trying to get any existing Push Subscriptions.",w["invalid-saved-token"]="Unable to access details of the saved token.",
w["sw-reg-redundant"]="The service worker being used for push was made redundant.",w["token-subscribe-failed"]="A problem occured while subscribing the user to FCM: {$message}",w["token-subscribe-no-token"]="FCM returned no token when subscribing the user to push.",w["token-subscribe-no-push-set"]="FCM returned an invalid response when getting an FCM token.",w["use-sw-before-get-token"]="You must call useServiceWorker() before calling getToken() to ensure your service worker is used.",w["invalid-delete-token"]=
"You must pass a valid token into deleteToken(), i.e. the token from getToken().",w["delete-token-not-found"]="The deletion attempt for token could not be performed as the token was not found.",w["delete-scope-not-found"]="The deletion attempt for service worker scope could not be performed as the scope was not found.",w["bg-handler-function-expected"]="The input to setBackgroundMessageHandler() must be a function.",w["no-window-client-to-msg"]="An attempt was made to message a non-existant window client.",
w["unable-to-resubscribe"]="There was an error while re-subscribing the FCM token for push messaging. Will have to resubscribe the user on next visit. {$message}",w["no-fcm-token-for-resubscribe"]="Could not find an FCM token and as a result, unable to resubscribe. Will have to resubscribe the user on next visit.",w["failed-to-delete-token"]="Unable to delete the currently saved token.",w["no-sw-in-reg"]="Even though the service worker registration was successful, there was a problem accessing the service worker itself.",
w["incorrect-gcm-sender-id"]="Please change your web app manifest's 'gcm_sender_id' value to '103953800507' to use Firebase messaging.",w["bad-scope"]="The service worker scope must be a string with at least one character.",w["bad-vapid-key"]="The public VAPID key must be a string with at least one character.",w["bad-subscription"]="The subscription must be a valid PushSubscription.",w["bad-token"]="The FCM Token used for storage / lookup was not a valid token string.",w["bad-push-set"]="The FCM push set used for storage / lookup was not not a valid push set string.",
w["failed-delete-vapid-key"]="The VAPID key could not be deleted.",w);var y={userVisibleOnly:!0,applicationServerKey:new Uint8Array([4,51,148,247,223,161,235,177,220,3,162,94,21,113,219,72,211,46,237,237,178,52,219,183,71,58,12,143,196,204,225,111,60,140,132,223,171,182,102,62,242,12,212,139,254,227,249,118,47,20,28,99,8,106,111,45,177,26,149,176,206,55,192,156,110])};var A=new firebase.INTERNAL.ErrorFactory("messaging","Messaging",x),B=function(){this.a=null},C=function(a){if(a.a)return a.a;a.a=new Promise(function(a,c){var b=g.indexedDB.open("fcm_token_details_db",1);b.onerror=function(a){c(a.target.error)};b.onsuccess=function(b){a(b.target.result)};b.onupgradeneeded=function(a){a=a.target.result.createObjectStore("fcm_token_object_Store",{keyPath:"swScope"});a.createIndex("fcmSenderId","fcmSenderId",{unique:!1});a.createIndex("fcmToken","fcmToken",{unique:!0})}});
return a.a},D=function(a){a.a?a.a.then(function(b){b.close();a.a=null}):Promise.resolve()},E=function(a,b){return C(a).then(function(a){return new Promise(function(c,e){var d=a.transaction(["fcm_token_object_Store"]).objectStore("fcm_token_object_Store").index("fcmToken").get(b);d.onerror=function(a){e(a.target.error)};d.onsuccess=function(a){c(a.target.result)}})})},F=function(a,b){return C(a).then(function(a){return new Promise(function(c,e){var d=[],l=a.transaction(["fcm_token_object_Store"]).objectStore("fcm_token_object_Store").openCursor();
l.onerror=function(a){e(a.target.error)};l.onsuccess=function(a){(a=a.target.result)?(a.value.fcmSenderId===b&&d.push(a.value),a.continue()):c(d)}})})},G=function(a,b,c){var d=v(b.getKey("p256dh")),e=v(b.getKey("auth"));a="authorized_entity="+a+"&"+("endpoint="+b.endpoint+"&")+("encryption_key="+d+"&")+("encryption_auth="+e);c&&(a+="&pushSet="+c);c=new Headers;c.append("Content-Type","application/x-www-form-urlencoded");return fetch("https://fcm.googleapis.com/fcm/connect/subscribe",{method:"POST",
headers:c,body:a}).then(function(a){return a.json()}).then(function(a){if(a.error)throw A.create("token-subscribe-failed",{message:a.error.message});if(!a.token)throw A.create("token-subscribe-no-token");if(!a.pushSet)throw A.create("token-subscribe-no-push-set");return{token:a.token,pushSet:a.pushSet}})},H=function(a,b,c,d,e,n){var l={swScope:c.scope,endpoint:d.endpoint,auth:v(d.getKey("auth")),p256dh:v(d.getKey("p256dh")),fcmToken:e,fcmPushSet:n,fcmSenderId:b};return C(a).then(function(a){return new Promise(function(b,
c){var d=a.transaction(["fcm_token_object_Store"],"readwrite").objectStore("fcm_token_object_Store").put(l);d.onerror=function(a){c(a.target.error)};d.onsuccess=function(){b()}})})};
B.prototype.i=function(a,b){return b instanceof ServiceWorkerRegistration?"string"!==typeof a||0===a.length?Promise.reject(A.create("bad-sender-id")):F(this,a).then(function(c){if(0!==c.length){var d=c.findIndex(function(c){return b.scope===c.swScope&&a===c.fcmSenderId});if(-1!==d)return c[d]}}).then(function(a){if(a)return b.pushManager.getSubscription().catch(function(){throw A.create("get-subscription-failed");}).then(function(b){var c;if(c=b)c=b.endpoint===a.endpoint&&v(b.getKey("auth"))===a.auth&&
v(b.getKey("p256dh"))===a.p256dh;if(c)return a.fcmToken})}):Promise.reject(A.create("sw-registration-expected"))};B.prototype.getSavedToken=B.prototype.i;
B.prototype.h=function(a,b){var c=this;return"string"!==typeof a||0===a.length?Promise.reject(A.create("bad-sender-id")):b instanceof ServiceWorkerRegistration?b.pushManager.getSubscription().then(function(a){return a?a:b.pushManager.subscribe(y)}).then(function(d){return G(a,d).then(function(e){return H(c,a,b,d,e.token,e.pushSet).then(function(){return e.token})})}):Promise.reject(A.create("sw-registration-expected"))};B.prototype.createToken=B.prototype.h;
B.prototype.deleteToken=function(a){var b=this;return"string"!==typeof a||0===a.length?Promise.reject(A.create("invalid-delete-token")):E(this,a).then(function(a){if(!a)throw A.create("delete-token-not-found");return C(b).then(function(b){return new Promise(function(c,d){var e=b.transaction(["fcm_token_object_Store"],"readwrite").objectStore("fcm_token_object_Store").delete(a.swScope);e.onerror=function(a){d(a.target.error)};e.onsuccess=function(b){0===b.target.result?d(A.create("failed-to-delete-token")):
c(a)}})})})};var I=function(a){var b=this;this.a=new firebase.INTERNAL.ErrorFactory("messaging","Messaging",x);if(!a.options.messagingSenderId||"string"!==typeof a.options.messagingSenderId)throw this.a.create("bad-sender-id");this.l=a.options.messagingSenderId;this.c=new B;this.app=a;this.INTERNAL={};this.INTERNAL.delete=function(){return b.delete}};
I.prototype.getToken=function(){var a=this,b=Notification.permission;return"granted"!==b?"denied"===b?Promise.reject(this.a.create("notifications-blocked")):Promise.resolve(null):this.f().then(function(b){return a.c.i(a.l,b).then(function(c){return c?c:a.c.h(a.l,b)})})};I.prototype.getToken=I.prototype.getToken;I.prototype.deleteToken=function(a){var b=this;return this.c.deleteToken(a).then(function(){return b.f()}).then(function(a){return a?a.pushManager.getSubscription():null}).then(function(a){if(a)return a.unsubscribe()})};
I.prototype.deleteToken=I.prototype.deleteToken;I.prototype.f=function(){throw this.a.create("should-be-overriden");};I.prototype.requestPermission=function(){throw this.a.create("only-available-in-window");};I.prototype.useServiceWorker=function(){throw this.a.create("only-available-in-window");};I.prototype.useServiceWorker=I.prototype.useServiceWorker;I.prototype.onMessage=function(){throw this.a.create("only-available-in-window");};I.prototype.onMessage=I.prototype.onMessage;
I.prototype.onTokenRefresh=function(){throw this.a.create("only-available-in-window");};I.prototype.onTokenRefresh=I.prototype.onTokenRefresh;I.prototype.setBackgroundMessageHandler=function(){throw this.a.create("only-available-in-sw");};I.prototype.setBackgroundMessageHandler=I.prototype.setBackgroundMessageHandler;I.prototype.delete=function(){D(this.c)};var J=function(a,b){var c={};return c["firebase-messaging-msg-type"]=a,c["firebase-messaging-msg-data"]=b,c};var K=self,P=function(a){I.call(this,a);var b=this;this.a=new firebase.INTERNAL.ErrorFactory("messaging","Messaging",x);K.addEventListener("push",function(a){return L(b,a)},!1);K.addEventListener("pushsubscriptionchange",function(a){return N(b,a)},!1);
//K.addEventListener("notificationclick",function(a){return O(b,a)},!1);
this.b=null};f(P,I);
var L=function(a,b){var c;try{c=b.data.json()}catch(e){return}var d=Q().then(function(b){if(b){if(c.notification||a.b)return R(a,c)}else{if((b=c)&&"object"===typeof b.notification){var d=Object.assign({},b.notification),e={};d.data=(e.FCM_MSG=b,e);b=d}else b=void 0;if(b)return K.registration.showNotification(b.title||"",b);if(a.b)return a.b(c)}});b.waitUntil(d)},N=function(a,b){var c=a.getToken().then(function(b){if(!b)throw a.a.create("no-fcm-token-for-resubscribe");var c=a.c;return E(c,b).then(function(b){if(!b)throw a.a.create("invalid-saved-token");
return K.registration.pushManager.subscribe(y).then(function(a){return G(b.A,a,b.w)}).catch(function(d){return c.deleteToken(b.B).then(function(){throw a.a.create("unable-to-resubscribe",{message:d});})})})});b.waitUntil(c)},O=function(a,b){if(b.notification&&b.notification.data&&b.notification.data.FCM_MSG){b.stopImmediatePropagation();b.notification.close();var c=b.notification.data.FCM_MSG,d=c.notification.click_action;if(d){var e=S(d).then(function(a){return a?a:K.clients.openWindow(d)}).then(function(b){if(b)return delete c.notification,
T(a,b,J("notification-clicked",c))});b.waitUntil(e)}}};P.prototype.setBackgroundMessageHandler=function(a){if(a&&"function"!==typeof a)throw this.a.create("bg-handler-function-expected");this.b=a};P.prototype.setBackgroundMessageHandler=P.prototype.setBackgroundMessageHandler;
var S=function(a){var b=(new URL(a)).href;return K.clients.matchAll({type:"window",includeUncontrolled:!0}).then(function(a){for(var c=null,e=0;e<a.length;e++)if((new URL(a[e].url)).href===b){c=a[e];break}if(c)return c.focus(),c})},T=function(a,b,c){return new Promise(function(d,e){if(!b)return e(a.a.create("no-window-client-to-msg"));b.postMessage(c);d()})},Q=function(){return K.clients.matchAll({type:"window",includeUncontrolled:!0}).then(function(a){return a.some(function(a){return"visible"===
a.visibilityState})})},R=function(a,b){return K.clients.matchAll({type:"window",includeUncontrolled:!0}).then(function(c){var d=J("push-msg-received",b);return Promise.all(c.map(function(b){return T(a,b,d)}))})};P.prototype.f=function(){return Promise.resolve(K.registration)};var V=function(a){I.call(this,a);var b=this;this.j=null;this.m=firebase.INTERNAL.createSubscribe(function(a){b.j=a});this.s=null;this.o=firebase.INTERNAL.createSubscribe(function(a){b.s=a});U(this)};f(V,I);
V.prototype.getToken=function(){var a=this;return"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")?W(this).then(function(){return I.prototype.getToken.call(a)}):Promise.reject(this.a.create("unsupported-browser"))};V.prototype.getToken=V.prototype.getToken;
var W=function(a){if(a.g)return a.g;var b=document.querySelector('link[rel="manifest"]');b?a.g=fetch(b.href).then(function(a){return a.json()}).catch(function(){return Promise.resolve()}).then(function(b){if(b&&b.gcm_sender_id&&"103953800507"!==b.gcm_sender_id)throw a.a.create("incorrect-gcm-sender-id");}):a.g=Promise.resolve();return a.g};
V.prototype.requestPermission=function(){var a=this;return"granted"===Notification.permission?Promise.resolve():new Promise(function(b,c){var d=function(d){return"granted"===d?b():"denied"===d?c(a.a.create("permission-blocked")):c(a.a.create("permission-default"))},e=Notification.requestPermission(function(a){e||d(a)});e&&e.then(d)})};V.prototype.requestPermission=V.prototype.requestPermission;
V.prototype.useServiceWorker=function(a){if(!(a instanceof ServiceWorkerRegistration))throw this.a.create("sw-registration-expected");if("undefined"!==typeof this.b)throw this.a.create("use-sw-before-get-token");this.b=a};V.prototype.useServiceWorker=V.prototype.useServiceWorker;V.prototype.onMessage=function(a,b,c){return this.m(a,b,c)};V.prototype.onMessage=V.prototype.onMessage;V.prototype.onTokenRefresh=function(a,b,c){return this.o(a,b,c)};V.prototype.onTokenRefresh=V.prototype.onTokenRefresh;
var X=function(a,b){var c=b.installing||b.waiting||b.active;return new Promise(function(d,e){if(c)if("activated"===c.state)d(b);else if("redundant"===c.state)e(a.a.create("sw-reg-redundant"));else{var n=function(){if("activated"===c.state)d(b);else if("redundant"===c.state)e(a.a.create("sw-reg-redundant"));else return;c.removeEventListener("statechange",n)};c.addEventListener("statechange",n)}else e(a.a.create("no-sw-in-reg"))})};
V.prototype.f=function(){var a=this;if(this.b)return X(this,this.b);this.b=null;return navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"."}).catch(function(b){throw a.a.create("failed-serviceworker-registration",{browserErrorMessage:b.message});}).then(function(b){return X(a,b).then(function(){a.b=b;b.update();return b})})};
var U=function(a){"serviceWorker"in navigator&&navigator.serviceWorker.addEventListener("message",function(b){if(b.data&&b.data["firebase-messaging-msg-type"])switch(b=b.data,b["firebase-messaging-msg-type"]){case "push-msg-received":case "notification-clicked":a.j.next(b["firebase-messaging-msg-data"])}},!1)};if(!(firebase&&firebase.INTERNAL&&firebase.INTERNAL.registerService))throw Error("Cannot install Firebase Messaging - be sure to load firebase-app.js first.");firebase.INTERNAL.registerService("messaging",function(a){return self&&"ServiceWorkerGlobalScope"in self?new P(a):new V(a)},{Messaging:V});new firebase.INTERNAL.ErrorFactory("messaging","Messaging",x);new firebase.INTERNAL.ErrorFactory("messaging","Messaging",x);new firebase.INTERNAL.ErrorFactory("messaging","Messaging",x);}).call(this);

const config = {
  apiKey: "AIzaSyCDWJ8C32UTmCUEA5On9LAc6Q3Q-_UUnms",
  authDomain: "crowdsurfer-2fccd.firebaseapp.com",
  databaseURL: "https://crowdsurfer-2fccd.firebaseio.com",
  projectId: "crowdsurfer-2fccd",
  storageBucket: "crowdsurfer-2fccd.appspot.com",
  messagingSenderId: "558716558956"
};
console.log("before firebase-sw addEventListener - activate")
self.addEventListener('activate', function(event) {
  console.log("in activate listenern in firebase-sw ", event);
event.waitUntil(self.clients.claim());
});

/*

console.log("before firebase-sw addEventListener - click")
self.addEventListener("notificationclick", function(event) {
console.log("in firebase-sw addEventListener",event)
var sAction = "";
const notificationData = event.notification.data.FCM_MSG.data;
console.log('');
console.log('The data notification had the following parameters:');
Object.keys(notificationData).forEach((key) => {
  console.log("  ${key}: ", notificationData[key]);
  sAction = notificationData[key];
});
console.log('sAction',sAction);


   var mymessage = {
     type: 'notification',
     msg: 'received notification from service worker post',
     title: event.notification.title,
     body: event.notification.body,
     data: event.notification.data,
     action: sAction
   };
var url = "1"
if(sAction === "survey2")
{
  url = "2"
}

console.log("url: " + url)

   event.notification.close();

   event.waitUntil(
       clients.matchAll({includeUncontrolled: true, type: 'window'})
       .then(function(clientList) {
         console.log('client list length in firebase-sw: '+ clientList.length);
          for (var i = 0; i < clientList.length; i++) {
               var client = clientList[i];
               console.log("main firebase-sw:",client);
               console.log("message", mymessage);
               console.log("client", client);

               client.postMessage(mymessage);
               client.navigate("/index.html");

               if ('focus' in client) {
                   return client.focus();
               }
           }

           if (clientList.length === 0) {
               if (clients.openWindow) {
                   return clients.openWindow('/');
               }
           }
       })
   );
});

*/

self.addEventListener("notificationclose", function(e) {
 var notification = e.notification;
 var primaryKey = notification.data.primaryKey;

 console.log("Closed notification: " + primaryKey);
});




firebase.initializeApp(config);

function setListener(){
   clients.matchAll({includeUncontrolled: true, type: 'window'})
  .then(function(clientList) {
    for (var i = 0; i < clientList.length; i++) {
      var client = clientList[i];
      console.log("in setListener client length: "+clientList.length);
      client.addEventListener("message", function(messageEvent) {
      console.log("in setListener got event in sw:", messageEvent);
      });
    }
  })
}


const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
  console.log("[sw.js] Received background message ", payload);
  // Customize notification here
  var notificationTitle = "Background Message Title";
  var notificationOptions = {
    body: "Background Message body."
  };

  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});