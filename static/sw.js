importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);
  
    workbox.precaching.precacheAndRoute([]);

    workbox.precaching.cleanupOutdatedCaches()

    addEventListener('message', (event) => {
      if (event.data && event.data.type === 'SKIP_WAITING') {
        skipWaiting();
      }
    });

    const articleHandler = workbox.strategies.networkFirst({
      cacheName: 'articles-cache',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 50,
        })
      ]
    });
    
    workbox.routing.registerRoute(/(.*)article(.*)\.html/, args => {
      return articleHandler.handle(args).then(response => {
        if (!response) {
          return caches.match('pages/offline.html');
        } else if (response.status === 404) {
          return caches.match('pages/404.html');
        }
        return response;
      });
    });

    workbox.routing.registerRoute(
      /(.*)articles(.*)\.(?:png|gif|jpg)/,
      workbox.strategies.cacheFirst({
        cacheName: 'images-cache',
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: 50,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
          })
        ]
      })
    );
  
  } else {
    console.log(`Boo! Workbox didn't load 😬`);
  }