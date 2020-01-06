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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "google82fa81e655d79460.html",
    "revision": "af3483bb0a8d2ecadfe40d17ba9a9db1"
  },
  {
    "url": "img/andy.jpg",
    "revision": "ea350b4c239905b46bb98031d0855aac"
  },
  {
    "url": "img/bg.png",
    "revision": "119a13cfdb83021a9d1ddb4ff4665d00"
  },
  {
    "url": "img/logo_192.png",
    "revision": "fb290442938cc0869069e9848fdc52f8"
  },
  {
    "url": "img/logo_512.png",
    "revision": "6e7a43d912e6843923b255642fe14304"
  },
  {
    "url": "img/timetable.jpeg",
    "revision": "6d625c40704ae4e1049930b2529fb3ab"
  },
  {
    "url": "img/tts.jpg",
    "revision": "3cfd811543287d40a5094db2ec47af4c"
  },
  {
    "url": "index.html",
    "revision": "577825b0cf44e3533be03c435c16f5c9"
  },
  {
    "url": "manifest.json",
    "revision": "03501cf0e19aa77b13667d9303d171f4"
  },
  {
    "url": "scripts/app.js",
    "revision": "ae0756b96d56005330058e37db19e86b"
  },
  {
    "url": "styles/style.css",
    "revision": "8cc84345b77ebebf7e7d22245c9b46b2"
  },
  {
    "url": "workbox-config.js",
    "revision": "44ae5fd26fdf96afdbbb016375559d5e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
