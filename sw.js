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
                'css/countries-content.css',
                'css/GDR-content.css',
                'css/nav.css',
                'css/news.css',
                'css/section.css',
                'css/states-content.css',
                'scripts/countries.js',
                'scripts/date.js',
                'scripts/deviceCompatibility.js',
                'scripts/index.js',
                'scripts/nav.js',
                'scripts/news.js',
                'scripts/panel.js',
                'scripts/states.js',
                'scripts/switch.js',
                'offline.html'
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

// Register the service worker if available.
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').then(function(reg) {
        console.log('Successfully registered service worker', reg);
    }).catch(function(err) {
        console.warn('Error whilst registering service worker', err);
    });
}

window.addEventListener('online', function(e) {
    // Resync data with server.
    console.log("You are online");
    Page.hideOfflineWarning();
    Arrivals.loadData();
}, false);

window.addEventListener('offline', function(e) {
    // Queue up events for server.
    console.log("You are offline");
    Page.showOfflineWarning();
}, false);

// Check if the user is connected.
if (navigator.onLine) {
    Arrivals.loadData();
} else {
    // Show offline message
    Page.showOfflineWarning();
}

// Set Knockout view model bindings.
ko.applyBindings(Page.vm);