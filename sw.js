if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let o={};const d=e=>i(e,c),l={module:{uri:c},exports:o,require:d};s[c]=Promise.all(n.map((e=>l[e]||d(e)))).then((e=>(r(...e),o)))}}define(["./workbox-f250d166"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.06bbccd0.css",revision:null},{url:"assets/index.1a115673.js",revision:null},{url:"assets/vendor.8c19cef5.js",revision:null},{url:"index.html",revision:"58458c303d4bed31513b2c0b64d08a87"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"app-icons/48x48.png",revision:"fec0580c535eedd1cadd36f97494bc2f"},{url:"app-icons/72x72.png",revision:"471de00c22c936855c57592883ee0464"},{url:"app-icons/96x96.png",revision:"21585642d41f3ba66004aa9ed7076240"},{url:"app-icons/144x144.png",revision:"46ac3ac6b8d3246b7d1405d607c5fe7f"},{url:"app-icons/192x192.png",revision:"b367c46d4dc94aed6ba5db30b509e15c"},{url:"app-icons/512x512.png",revision:"8686f06f9bfdf85639e3d372752e4e48"},{url:"manifest.webmanifest",revision:"06cbca60c0a8045c62a64c795e629ffd"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));