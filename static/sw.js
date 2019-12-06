/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "about/index.html",
    "revision": "f1103902a21583173e414b4948775efc"
  },
  {
    "url": "apple-touch-icon-144x144.png",
    "revision": "c53f72e2d66358593daea7e84bb67b12"
  },
  {
    "url": "apple-touch-icon-152x152 copy.png",
    "revision": "b07e8f789204d78eba0b3283735ca831"
  },
  {
    "url": "apple-touch-icon-152x152.png",
    "revision": "b07e8f789204d78eba0b3283735ca831"
  },
  {
    "url": "archive/index.html",
    "revision": "55da02f9766c967f8c5c8ef779148877"
  },
  {
    "url": "assets/style.css",
    "revision": "a8c1a5c833d921e51568f992dc4cae3b"
  },
  {
    "url": "categories/index.html",
    "revision": "100cf44b907acb8cb2dc31dc8bcd544f"
  },
  {
    "url": "en/index.html",
    "revision": "eff8833ba78f12c42f48533cef78c694"
  },
  {
    "url": "favicon-128.png",
    "revision": "91b21d1d34e8e15faa8373f7d8b02e26"
  },
  {
    "url": "favicon-196x196.png",
    "revision": "590d83e5ded1130b8b4d003b6db576f5"
  },
  {
    "url": "index.html",
    "revision": "6eeb68249112bb4714da7a13675cc82e"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "1a4abd5b9786444e61f41ea6658f4882"
  },
  {
    "url": "menu/categories/index.html",
    "revision": "3e8e6a9d03ae9cfecdbf41ba5f654eb7"
  },
  {
    "url": "menu/index.html",
    "revision": "105fcaee2e640a78594229e7a132eeda"
  },
  {
    "url": "menu/page/1/index.html",
    "revision": "a2337045998bf599a9fe35b931059c07"
  },
  {
    "url": "menu/tags/index.html",
    "revision": "36238cfdf3a2be20da8a46e671c2820a"
  },
  {
    "url": "page/1/index.html",
    "revision": "eff8833ba78f12c42f48533cef78c694"
  },
  {
    "url": "post/arduino-pir-module/index.html",
    "revision": "0756ce8ee80a5ff6adc34d24643b9649"
  },
  {
    "url": "post/dunia-gelap/index.html",
    "revision": "3b17ed0fd34196e5184862c5475b3206"
  },
  {
    "url": "post/index.html",
    "revision": "d28f8175f3bc6aff7fea6432c482014a"
  },
  {
    "url": "post/page/1/index.html",
    "revision": "5ff8389ac68c365185517240d4c4d234"
  },
  {
    "url": "post/quotes/index.html",
    "revision": "244c6881b5fa0872870f60f11fd7e211"
  },
  {
    "url": "post/senja-malam/index.html",
    "revision": "75fea2ee5f68f8b00e7c5844b858a907"
  },
  {
    "url": "splash.png",
    "revision": "b07e8f789204d78eba0b3283735ca831"
  },
  {
    "url": "style.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "tags/archive/index.html",
    "revision": "0ddc4ef5c7a90075aaab407398c12d51"
  },
  {
    "url": "tags/archive/page/1/index.html",
    "revision": "094e05f9ee51b760cd2a2bd4e86e6eab"
  },
  {
    "url": "tags/arduino/index.html",
    "revision": "c454a666d8100dece6e3cf272ede23ba"
  },
  {
    "url": "tags/arduino/page/1/index.html",
    "revision": "1e9a8abb1ddd81f48eb671012197230a"
  },
  {
    "url": "tags/classic/index.html",
    "revision": "38190a52f8e7b8f7e42e5c37529896f1"
  },
  {
    "url": "tags/classic/page/1/index.html",
    "revision": "4bc20bd5f4cfde3e5f061d04f80ba2d1"
  },
  {
    "url": "tags/index.html",
    "revision": "cc5f194d353d675a2253617bb99084b4"
  },
  {
    "url": "tags/poem/index.html",
    "revision": "26c586577b3f76a3f36ba6e0006ed42f"
  },
  {
    "url": "tags/poem/page/1/index.html",
    "revision": "c84fbbc71b902df0ecc181fa906d2a5f"
  },
  {
    "url": "tags/programming/index.html",
    "revision": "094ba539d85a71987696904371f309a4"
  },
  {
    "url": "tags/programming/page/1/index.html",
    "revision": "ad4f9d85be400dbd31a764d92fdc3ba3"
  },
  {
    "url": "tags/story/index.html",
    "revision": "081ccce7aa68a6cd0fbb1ef44aa9f39f"
  },
  {
    "url": "tags/story/page/1/index.html",
    "revision": "9c3801ecb5a6a8d827127fdb0474e605"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
