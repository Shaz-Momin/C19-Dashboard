// Use a cacheName for cache versioning
var cacheName = 'v1:static';

// During the installation phase, you'll usually want to cache static assets.
self.addEventListener('install', function(e) {
    // Once the service worker is installed, go ahead and fetch the resources to make this work offline.
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll([
                'index.html',
                'package.json',
                'css/canvas.css',
                'css/counties.css',
                'css/countries-content.css',
                'css/GDR-content.css',
                'css/nav.css',
                'css/news.css',
                'css/section.css',
                'css/states-content.css',
                'scripts/counties.js',
                'scripts/countries.js',
                'scripts/date.js',
                'scripts/deviceCompatibility.js',
                'scripts/drag-drop.js',
                'scripts/index.js',
                'scripts/nav.js',
                'scripts/news.js',
                'scripts/panel.js',
                'scripts/report.js',
                'scripts/states.js',
                'scripts/switch.js',
                'offline.html',
                'Assets/file-alt-solid.svg',
                'Assets/poweredby_nytimes_30a.png',
                'Assets/poweredby_nytimes_150a.png',
                'Assets/poweredby_nytimes_150c.png'
            ]).then(function() {
                self.skipWaiting();
            });
        })
    );
});

// when the browser fetches a URL…
self.addEventListener('fetch', function(event) {
    // … either respond with the cached object or go ahead and fetch the actual URL
    event.respondWith(
        caches.match(event.request).then(function(response) {
            if (response) {
                // retrieve from cache
                return response;
            }
            // fetch as normal
            return fetch(event.request);
        })
    );
});

